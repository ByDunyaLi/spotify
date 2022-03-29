import { Icon } from "../../Icons";

export default function DownloadApp(){
    return(
        <a href="#" className="h-10 flex flex-shrink-0 items-center px-6 gap-x-4 text-sm text-link font-semibold hover:text-white">
            <Icon name="download" size={20} />
            Uygulamayı Yükle
        </a>
    )
}
