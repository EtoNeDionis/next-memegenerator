import {toPng} from "html-to-image"
const exportAsImage = async (el: HTMLElement, imageFileName: string) => {
        const dataUrl = await toPng(el);
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
        link.remove();
};

export default exportAsImage;
