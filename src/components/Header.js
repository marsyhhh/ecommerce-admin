import { Plus } from "lucide-react"
import Button from "./button"

const Header = ({ title, count }) => {
  return (
    <div className="px-12 py-8 flex justify-between">
      <div className="font-bold text-4xl">
        {title} ({count})
      </div>
      <Button>
        <Plus size={20} />
        <div className="text-sm">Add Billboards</div>
      </Button>
    </div>
  )
}

export default Header
