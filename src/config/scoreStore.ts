import { create } from 'zustand'

type State = {
  member: {
    name: string
    score: number[]
  }[]
}
type Action = {
  createMember: (member: State['member']) => void
  updateMember: (member: State['member']) => void
}

const useScore = create((set) => {
  return {
    member: [],
    createMember: (member: State['member']) =>
      set((state: State) => {
        return [...state.member, member]
      }),
    updateMember: (members: State['member']) =>
      set((state: State) => {
        const updatedMembers = state.member.map((member) => {
          const memberUpdate = members.find((item) => item.name === member.name)
          if (memberUpdate) {
            return {
              ...member,
              score: [...member.score, memberUpdate?.score],
            }
          }
          return member
        })

        return {
          ...state,
          member: updatedMembers,
        }
      }),
  }
})
