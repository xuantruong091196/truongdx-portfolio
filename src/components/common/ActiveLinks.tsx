import { usePathname, useRouter } from 'next/navigation'
import { CSSProperties } from 'react'

type TProps = {
  text: string
  href: string
}
const ActiveLink: React.FC<TProps> = ({ text, href }) => {
  const pathname = usePathname()
  const router = useRouter()
  const style: CSSProperties = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href={href}
        onClick={(e) => handleClick(e)}
        style={style}
        className={pathname === href ? 'text-primary py-1' : ''}
      >
        {text}
      </a>
      {pathname === href && (
        <div className="border-2 border-black w-4 rounded-lg"></div>
      )}
    </div>
  )
}

export default ActiveLink
