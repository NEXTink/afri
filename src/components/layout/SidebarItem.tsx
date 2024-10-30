import Link from "next/link";
import { SideBarType } from "./Sidebar";

export default function SidebarItem({ title, path, icon: Icon,isActive
 }: SideBarType) {
  return (
    <li key={title} className={` ${isActive?"bg-primaryHover font-medium":""} hover:bg-primaryHover rounded-md px-6 duration-200 ease-in py-3`}>
      <Link href={path!}>
        <p className="flex items-center gap-4">
          <Icon className="w-5" />
          <span className="">{title}</span>
        </p>
      </Link>
    </li>
  );
}
