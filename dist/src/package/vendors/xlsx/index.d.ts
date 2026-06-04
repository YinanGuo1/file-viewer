import { App } from 'vue';
import { FileRenderContext } from '../../common/type';
/**
 * 渲染excel
 */
export default function render(buffer: ArrayBuffer, target: HTMLDivElement, _type?: string, context?: FileRenderContext): Promise<App>;
