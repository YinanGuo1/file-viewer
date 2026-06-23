import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, h as o, inject as s, nextTick as c, normalizeClass as l, normalizeStyle as u, onBeforeUnmount as d, openBlock as f, reactive as p, ref as m, shallowRef as h, toDisplayString as g, toValue as _, unref as v, watch as y } from "vue";
import { DEFAULT_FILE_VIEWER_SOURCE_FILENAME as b, DEFAULT_RENDERER_DEFINITIONS as x, collectFileViewerRendererPlugins as S, coreBrowserRendererHandlers as ee, createEmptyFileViewerSearchState as te, createFileRenderHandlerLoader as ne, createFileRenderHandlerRegistry as re, createFileRenderHandlerRendererSession as C, createFileViewerCoreRendererRegistry as ie, createFileViewerDocumentFeatureControllerActionHandlers as ae, createFileViewerErrorState as oe, createFileViewerLifecycleFacade as se, createFileViewerLoadingController as ce, createFileViewerLoadingControllerActionHandlers as w, createFileViewerPreviewStateTarget as le, createFileViewerPublicApi as ue, createFileViewerPublicOperationActionHandlers as T, createFileViewerRenderReadinessTarget as de, createFileViewerRenderSurfaceActionHandlers as fe, createFileViewerRenderSurfaceStateTarget as E, createFileViewerRendererDispatcher as D, createFileViewerRequestScope as pe, createFileViewerSourceLoadingActionHandlers as me, createFileViewerToolbarControllerActionHandlers as O, createFileViewerUnsupportedState as he, createFileViewerZoomController as ge, createFileViewerZoomControllerActionHandlers as _e, createFileViewerZoomState as ve, createRendererRegistry as k, createViewer as ye, formatFileViewerErrorMessage as A, getExtension as j, installFileViewerRendererPlugins as be, normalizeFilename as xe, normalizeSource as Se, readFileViewerBuffer as M, renderFileViewerHandler as Ce, reportFileViewerLifecycleHookError as we, reportFileViewerOperationError as Te, resolveFileViewerPresentationState as Ee, resolveFileViewerSourceFilename as De, resolveFileViewerWatermarkPresentationState as Oe, runFileViewerPreviewComponentUnmount as ke, runFileViewerPreviewSourceChange as Ae, wrapFileViewerFileRef as N } from "@file-viewer/core";
//#region src/package/style.css?url
var P = "" + "data:text/css;base64,LmZpbGUtdmlld2VyW2RhdGEtdi1lMDc0OGQ2OF17LS1saWdodG5pbmdjc3MtbGlnaHQ6aW5pdGlhbDstLWxpZ2h0bmluZ2Nzcy1kYXJrOiA7Y29sb3Itc2NoZW1lOmxpZ2h0O2JhY2tncm91bmQ6I2ZmZjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmV9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdW2RhdGEtdi1lMDc0OGQ2OF17LS1saWdodG5pbmdjc3MtbGlnaHQ6IDstLWxpZ2h0bmluZ2Nzcy1kYXJrOmluaXRpYWw7Y29sb3Itc2NoZW1lOmRhcms7YmFja2dyb3VuZDojMGYxNzFkfS52aWV3ZXItc3RhZ2VbZGF0YS12LWUwNzQ4ZDY4XXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxO21pbi1oZWlnaHQ6MDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS52aWV3ZXItYWN0aW9uc1tkYXRhLXYtZTA3NDhkNjhde2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuOTIpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjAsMzUsNTMsLjA2KTtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDttaW4taGVpZ2h0OjQ1cHg7cGFkZGluZzo2cHggMTBweDtkaXNwbGF5OmlubGluZS1mbGV4fS52aWV3ZXItYWN0aW9ucy0tZmxvYXRpbmdbZGF0YS12LWUwNzQ4ZDY4XXt6LWluZGV4OjMwO3JpZ2h0OmNhbGMoMTZweCArIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQsMHB4KSk7Ym90dG9tOmNhbGMoMTZweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLDBweCkpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTZweCk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMTZweCk7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC45NCk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDIwLDM1LDUzLC4xKTtib3JkZXItcmFkaXVzOjk5OXB4O21pbi1oZWlnaHQ6NDJweDtwYWRkaW5nOjZweDtwb3NpdGlvbjphYnNvbHV0ZTtib3gtc2hhZG93OjAgMThweCA0NHB4IHJnYmEoMTUsMjMsNDIsLjE2KX0udmlld2VyLWFjdGlvbnMtZ3JvdXBbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMjAsMzUsNTMsLjAzNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDIwLDM1LDUzLC4wOCk7Ym9yZGVyLXJhZGl1czo5OTlweDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjJweDtwYWRkaW5nOjJweDtkaXNwbGF5OmlubGluZS1mbGV4fS52aWV3ZXItYWN0aW9ucyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XXtjb2xvcjojNDA1NDZhO21pbi13aWR0aDo0MnB4O2hlaWdodDozMHB4O2ZvbnQ6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjAgMTBweDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo4MDB9LnZpZXdlci1hY3Rpb25zIC52aWV3ZXItaWNvbi1idXR0b25bZGF0YS12LWUwNzQ4ZDY4XXtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDozMHB4O21pbi13aWR0aDozMHB4O3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fS52aWV3ZXItYWN0aW9ucyAudmlld2VyLXpvb20tbWV0ZXJbZGF0YS12LWUwNzQ4ZDY4XXtjb2xvcjojMjM0NjVlO21pbi13aWR0aDo0OHB4O3BhZGRpbmc6MCA4cHh9LnZpZXdlci1hY3Rpb25zLS1mbG9hdGluZyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XXtib3JkZXItcmFkaXVzOjk5OXB4O21pbi13aWR0aDo0OHB4O2hlaWdodDozMnB4fS52aWV3ZXItYWN0aW9ucy0tZmxvYXRpbmcgLnZpZXdlci1pY29uLWJ1dHRvbltkYXRhLXYtZTA3NDhkNjhde3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHh9LnZpZXdlci1hY3Rpb25zLS1mbG9hdGluZyAudmlld2VyLXpvb20tbWV0ZXJbZGF0YS12LWUwNzQ4ZDY4XXttaW4td2lkdGg6NTRweH0udmlld2VyLWFjdGlvbnMgYnV0dG9uW2RhdGEtdi1lMDc0OGQ2OF06aG92ZXI6bm90KDpkaXNhYmxlZCl7Y29sb3I6IzE2Nzc0YztiYWNrZ3JvdW5kOnJnYmEoMzMsMTYzLDEwMiwuMSl9LnZpZXdlci1hY3Rpb25zIGJ1dHRvbltkYXRhLXYtZTA3NDhkNjhdOmRpc2FibGVke2NvbG9yOiNhYWI1YzA7Y3Vyc29yOm5vdC1hbGxvd2VkfS52aWV3ZXItY29udGVudC1zaGVsbFtkYXRhLXYtZTA3NDhkNjhde2ZsZXg6MTttaW4taGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50W2RhdGEtdi1lMDc0OGQ2OF17YmFja2dyb3VuZDojZjJmMmYyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9jaztvdmVyZmxvdzphdXRvfS5jb250ZW50LmhpZGRlbltkYXRhLXYtZTA3NDhkNjhde3Zpc2liaWxpdHk6aGlkZGVufS5mbHlmaXNoLXNlYXJjaC1tYXRjaHtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6cmdiYSgyNTUsMjE0LDEwMiwuNzIpO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MCAycHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgxODUsMTI4LDAsLjE0KX0uZmx5ZmlzaC1zZWFyY2gtbWF0Y2gtLWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoNDcsMTkxLDEyMiwuODIpO2JveC1zaGFkb3c6MCAwIDAgMnB4IHJnYmEoMzAsMTMyLDgzLC4yNCl9LnZpZXdlci13YXRlcm1hcmtbZGF0YS12LWUwNzQ4ZDY4XXt6LWluZGV4OjIwO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowfS5zdGF0ZS1wYW5lbFtkYXRhLXYtZTA3NDhkNjhde3otaW5kZXg6NDA7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuOTIpLHJnYmEoMjQ2LDI0OCwyNDksLjk4KSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoyNHB4O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MH0ubG9hZGluZy1jYXJkW2RhdGEtdi1lMDc0OGQ2OF0sLmVycm9yLWNhcmRbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjkyKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTksMzYsNTUsLjA2KTtib3JkZXItcmFkaXVzOjI0cHg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxOHB4O3dpZHRoOm1pbigxMDAlLDQ2MHB4KTtwYWRkaW5nOjIycHg7ZGlzcGxheTpmbGV4O2JveC1zaGFkb3c6MCAxOHB4IDQycHggcmdiYSgxNSwzMSw0NywuMTIpfS5sb2FkaW5nLWljb25bZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXZpZXdlci1hY2NlbnQpIDAlLCB2YXIoLS12aWV3ZXItYWNjZW50KSAxMDAlKTtjb2xvcjojZmZmO2xldHRlci1zcGFjaW5nOi4wNGVtO2JvcmRlci1yYWRpdXM6MjBweDtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21pbi13aWR0aDo3MHB4O2hlaWdodDo3MHB4O3BhZGRpbmc6MCAxMnB4O2ZvbnQtc2l6ZToyMnB4O2ZvbnQtd2VpZ2h0OjgwMDtkaXNwbGF5OmlubGluZS1mbGV4O2JveC1zaGFkb3c6MCAxNHB4IDMwcHggcmdiYSgxNywyOCw0MCwuMTQpfS5sb2FkaW5nLWNvcHlbZGF0YS12LWUwNzQ4ZDY4XXtmbGV4OjE7bWluLXdpZHRoOjB9LmxvYWRpbmcta2lja2VyW2RhdGEtdi1lMDc0OGQ2OF17Y29sb3I6dmFyKC0tdmlld2VyLWFjY2VudCk7bGV0dGVyLXNwYWNpbmc6LjA4ZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjcwMDtkaXNwbGF5OmJsb2NrfS5sb2FkaW5nLWNvcHkgc3Ryb25nW2RhdGEtdi1lMDc0OGQ2OF0sLmVycm9yLWNhcmQgc3Ryb25nW2RhdGEtdi1lMDc0OGQ2OF17Y29sb3I6IzE2MjgzYjttYXJnaW4tdG9wOjRweDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoxLjI7ZGlzcGxheTpibG9ja30ubG9hZGluZy1jb3B5IHBbZGF0YS12LWUwNzQ4ZDY4XSwuZXJyb3ItY2FyZCBwW2RhdGEtdi1lMDc0OGQ2OF17Y29sb3I6IzZhN2Q5MDttYXJnaW46OHB4IDAgMDtsaW5lLWhlaWdodDoxLjZ9LmxvYWRpbmctcmluZ1tkYXRhLXYtZTA3NDhkNjhde2JvcmRlcjozcHggc29saWQgdmFyKC0tdmlld2VyLXNvZnQpO2JvcmRlci10b3AtY29sb3I6dmFyKC0tdmlld2VyLWFjY2VudCk7Ym9yZGVyLXJhZGl1czo5OTlweDtmbGV4LXNocmluazowO3dpZHRoOjM4cHg7aGVpZ2h0OjM4cHg7YW5pbWF0aW9uOi45cyBsaW5lYXIgaW5maW5pdGUgdmlld2VyLXNwaW4tZTA3NDhkNjh9LmVycm9yLWNhcmRbZGF0YS12LWUwNzQ4ZDY4XXt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrfS5lcnJvci1jYXJkIHN0cm9uZ1tkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiNiNDIzMTh9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC52aWV3ZXItYWN0aW9ucy0tZmxvYXRpbmdbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMTQsMjIsMjgsLjk0KTtib3JkZXItY29sb3I6cmdiYSgxNjcsMTg1LDE5OCwuMTYpO2JveC1zaGFkb3c6MCAyMHB4IDUycHggcmdiYSgwLDAsMCwuMzQpfS5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1kYXJrXSAudmlld2VyLWFjdGlvbnNbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMTQsMjIsMjgsLjk0KTtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMTY3LDE4NSwxOTgsLjEyKX0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9ZGFya10gLnZpZXdlci1hY3Rpb25zIGJ1dHRvbltkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiNiOGM3ZDV9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC52aWV3ZXItYWN0aW9ucy1ncm91cFtkYXRhLXYtZTA3NDhkNjhde2JhY2tncm91bmQ6cmdiYSgxNjcsMTg1LDE5OCwuMDgpO2JvcmRlci1jb2xvcjpyZ2JhKDE2NywxODUsMTk4LC4xMyl9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC52aWV3ZXItYWN0aW9ucyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XTpob3Zlcjpub3QoOmRpc2FibGVkKXtjb2xvcjojNWVlMGFlO2JhY2tncm91bmQ6cmdiYSg0NSwyMTIsMTU0LC4xNCl9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC52aWV3ZXItYWN0aW9ucyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XTpkaXNhYmxlZHtjb2xvcjojNjY3ODg4fS5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1kYXJrXSAuY29udGVudFtkYXRhLXYtZTA3NDhkNjhde2JhY2tncm91bmQ6IzE0MWMyM30uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9ZGFya10gLnN0YXRlLXBhbmVsW2RhdGEtdi1lMDc0OGQ2OF17YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgxNSwyMywzMCwuOTIpLHJnYmEoMTEsMTcsMjIsLjk4KSl9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC5sb2FkaW5nLWNhcmRbZGF0YS12LWUwNzQ4ZDY4XSwuZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9ZGFya10gLmVycm9yLWNhcmRbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMTksMjksMzcsLjk0KTtib3JkZXItY29sb3I6cmdiYSgxMzksMTYxLDE3NywuMTYpO2JveC1zaGFkb3c6MCAyMnB4IDUycHggcmdiYSgwLDAsMCwuMzQpfS5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1kYXJrXSAubG9hZGluZy1jb3B5IHN0cm9uZ1tkYXRhLXYtZTA3NDhkNjhdLC5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1kYXJrXSAuZXJyb3ItY2FyZCBzdHJvbmdbZGF0YS12LWUwNzQ4ZDY4XXtjb2xvcjojZWZmN2ZifS5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1kYXJrXSAubG9hZGluZy1jb3B5IHBbZGF0YS12LWUwNzQ4ZDY4XSwuZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9ZGFya10gLmVycm9yLWNhcmQgcFtkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiM5ZWIwYmZ9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPWRhcmtdIC5lcnJvci1jYXJkIHN0cm9uZ1tkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiNmZjljOTF9QGtleWZyYW1lcyB2aWV3ZXItc3Bpbi1lMDc0OGQ2OHswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsuZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXVtkYXRhLXYtZTA3NDhkNjhdey0tbGlnaHRuaW5nY3NzLWxpZ2h0OiA7LS1saWdodG5pbmdjc3MtZGFyazppbml0aWFsO2NvbG9yLXNjaGVtZTpkYXJrO2JhY2tncm91bmQ6IzBmMTcxZH0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXSAudmlld2VyLWFjdGlvbnMtLWZsb2F0aW5nW2RhdGEtdi1lMDc0OGQ2OF17YmFja2dyb3VuZDpyZ2JhKDE0LDIyLDI4LC45NCk7Ym9yZGVyLWNvbG9yOnJnYmEoMTY3LDE4NSwxOTgsLjE2KTtib3gtc2hhZG93OjAgMjBweCA1MnB4IHJnYmEoMCwwLDAsLjM0KX0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXSAudmlld2VyLWFjdGlvbnNbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMTQsMjIsMjgsLjk0KTtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMTY3LDE4NSwxOTgsLjEyKX0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXSAudmlld2VyLWFjdGlvbnMgYnV0dG9uW2RhdGEtdi1lMDc0OGQ2OF17Y29sb3I6I2I4YzdkNX0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXSAudmlld2VyLWFjdGlvbnMtZ3JvdXBbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOnJnYmEoMTY3LDE4NSwxOTgsLjA4KTtib3JkZXItY29sb3I6cmdiYSgxNjcsMTg1LDE5OCwuMTMpfS5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1zeXN0ZW1dIC52aWV3ZXItYWN0aW9ucyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XTpob3Zlcjpub3QoOmRpc2FibGVkKXtjb2xvcjojNWVlMGFlO2JhY2tncm91bmQ6cmdiYSg0NSwyMTIsMTU0LC4xNCl9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLnZpZXdlci1hY3Rpb25zIGJ1dHRvbltkYXRhLXYtZTA3NDhkNjhdOmRpc2FibGVke2NvbG9yOiM2Njc4ODh9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLmNvbnRlbnRbZGF0YS12LWUwNzQ4ZDY4XXtiYWNrZ3JvdW5kOiMxNDFjMjN9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLnN0YXRlLXBhbmVsW2RhdGEtdi1lMDc0OGQ2OF17YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgxNSwyMywzMCwuOTIpLHJnYmEoMTEsMTcsMjIsLjk4KSl9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLmxvYWRpbmctY2FyZFtkYXRhLXYtZTA3NDhkNjhdLC5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1zeXN0ZW1dIC5lcnJvci1jYXJkW2RhdGEtdi1lMDc0OGQ2OF17YmFja2dyb3VuZDpyZ2JhKDE5LDI5LDM3LC45NCk7Ym9yZGVyLWNvbG9yOnJnYmEoMTM5LDE2MSwxNzcsLjE2KTtib3gtc2hhZG93OjAgMjJweCA1MnB4IHJnYmEoMCwwLDAsLjM0KX0uZmlsZS12aWV3ZXJbZGF0YS12aWV3ZXItdGhlbWU9c3lzdGVtXSAubG9hZGluZy1jb3B5IHN0cm9uZ1tkYXRhLXYtZTA3NDhkNjhdLC5maWxlLXZpZXdlcltkYXRhLXZpZXdlci10aGVtZT1zeXN0ZW1dIC5lcnJvci1jYXJkIHN0cm9uZ1tkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiNlZmY3ZmJ9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLmxvYWRpbmctY29weSBwW2RhdGEtdi1lMDc0OGQ2OF0sLmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLmVycm9yLWNhcmQgcFtkYXRhLXYtZTA3NDhkNjhde2NvbG9yOiM5ZWIwYmZ9LmZpbGUtdmlld2VyW2RhdGEtdmlld2VyLXRoZW1lPXN5c3RlbV0gLmVycm9yLWNhcmQgc3Ryb25nW2RhdGEtdi1lMDc0OGQ2OF17Y29sb3I6I2ZmOWM5MX19QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey52aWV3ZXItYWN0aW9ucy0tZmxvYXRpbmdbZGF0YS12LWUwNzQ4ZDY4XXtyaWdodDpjYWxjKDEwcHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0LDBweCkpO2JvdHRvbTpjYWxjKDEwcHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwwcHgpKTtnYXA6NHB4O21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTtwYWRkaW5nOjVweDtvdmVyZmxvdy14OmF1dG99LnZpZXdlci1hY3Rpb25zLS1mbG9hdGluZyBidXR0b25bZGF0YS12LWUwNzQ4ZDY4XXttaW4td2lkdGg6NDBweDtoZWlnaHQ6MzBweDtwYWRkaW5nOjAgOXB4fX0uZmlsZS1yZW5kZXJ7d2lkdGg6MTAwJTttaW4td2lkdGg6MDtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjB9Ci8qJHZpdGUkOjEqLw==", F = (e) => e === "", I = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), je = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Me = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Ne = (e) => {
	let t = Me(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, L = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, R = Symbol("lucide-icons");
function z() {
	return s(R, {});
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/objectWithoutPropertiesLoose.js
function B(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/objectWithoutProperties.js
function V(e, t) {
	if (e == null) return {};
	var n, r, i = B(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/typeof.js
function H(e) {
	"@babel/helpers - typeof";
	return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, H(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/toPrimitive.js
function Pe(e, t) {
	if (H(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (H(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/toPropertyKey.js
function U(e) {
	var t = Pe(e, "string");
	return H(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/defineProperty.js
function Fe(e, t, n) {
	return (t = U(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/objectSpread2.js
function W(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function G(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? W(Object(n), !0).forEach(function(t) {
			Fe(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lucide+vue@1.17.0_vue@3.5.35_typescript@6.0.3_/node_modules/@lucide/vue/dist/esm/Icon.mjs
var Ie = [
	"name",
	"iconNode",
	"absoluteStrokeWidth",
	"absolute-stroke-width",
	"strokeWidth",
	"stroke-width",
	"size",
	"color"
], Le = (t, { slots: n }) => {
	var r, i, a;
	let { name: s, iconNode: c, absoluteStrokeWidth: l, "absolute-stroke-width": u, strokeWidth: d, "stroke-width": f, size: p, color: m } = t, h = V(t, Ie), { size: g, color: _, strokeWidth: v = 2, absoluteStrokeWidth: y = !1, class: b = "" } = z(), x = e(() => {
		let e = F(l) || F(u) || l === !0 || u === !0 || y === !0, t = d || f || v || L["stroke-width"];
		if (e) {
			var n;
			return Number(t) * 24 / Number((n = p == null ? g : p) == null ? L.width : n);
		}
		return t;
	});
	return o("svg", G(G(G({}, L), h), {}, {
		width: (r = p == null ? g : p) == null ? L.width : r,
		height: (i = p == null ? g : p) == null ? L.height : i,
		stroke: (a = m == null ? _ : m) == null ? L.stroke : a,
		"stroke-width": x.value,
		class: I("lucide", b, ...s ? [`lucide-${je(Ne(s))}-icon`, `lucide-${je(s)}`] : ["lucide-icon"])
	}), [...c.map((e) => o(...e)), ...n.default ? [n.default()] : []]);
}, K = (e, t) => (n, { slots: r, attrs: i }) => o(Le, G(G(G({}, i), n), {}, {
	iconNode: t,
	name: e
}), r.default ? { default: r.default } : void 0), Re = K("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]), ze = K("zoom-in", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "11",
		x2: "11",
		y1: "8",
		y2: "14",
		key: "1vmskp"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), Be = K("zoom-out", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), Ve = (t) => {
	let n = ce(_(t)), r = p(n.getState()), i = w(r, n);
	return y(() => _(t), (e) => {
		i.setExtension(e);
	}), {
		loading: e(() => r.loading),
		error: e(() => r.error),
		message: e(() => r.message),
		theme: e(() => r.theme),
		styleVars: e(() => r.styleVars),
		startLoading: i.startLoading,
		setLoadingMessage: i.setLoadingMessage,
		stopLoading: i.stopLoading,
		showError: i.showError,
		clearError: i.clearError,
		resetLoading: i.resetLoading,
		syncLoadingState: i.syncLoadingState
	};
}, He = ({ output: e, getOptions: t, emitSearchChange: n, emitLocationChange: r }) => {
	let i = ae({
		root: () => e.value,
		searchTarget: {
			anchors: h([]),
			state: p(te())
		},
		searchOptions: () => {
			var e;
			return (e = t()) == null ? void 0 : e.search;
		},
		waitForDomUpdate: () => c(),
		getAiOptions: () => {
			var e;
			return (e = t()) == null ? void 0 : e.ai;
		},
		onSearchChange: n,
		onLocationChange: r
	});
	return d(() => {
		i.destroyDocumentFeatures();
	}), {
		refreshDocumentIndex: i.refreshDocumentIndex,
		clearDocumentState: i.clearDocumentState,
		getScrollContainer: i.getScrollContainer,
		searchDocument: i.searchDocument,
		clearDocumentSearch: i.clearDocumentSearch,
		nextSearchResult: i.nextSearchResult,
		previousSearchResult: i.previousSearchResult,
		getSearchState: i.getSearchState,
		collectDocumentAnchors: i.collectDocumentAnchors,
		scrollToAnchor: i.scrollToAnchor,
		scrollToLine: i.scrollToLine,
		getDocumentTextChunks: i.getDocumentTextChunks
	};
}, Ue = ({ activeExportAdapter: e, currentBuffer: t, currentFile: n, currentSourceUrl: r, displayFilename: i, formatErrorMessage: a, operationAvailability: o, output: s, runBeforeOperation: c, showError: l, watermarkInlineStyle: u }) => T({
	getBuffer: () => t.value,
	getFile: () => n.value,
	getUrl: () => r.value,
	getFilename: () => i.value,
	getMimeType: () => {
		var e;
		return (e = n.value) == null ? void 0 : e.type;
	},
	getRenderedSource: () => s.value,
	getAdapter: () => e.value,
	getWatermarkInlineStyle: () => u.value,
	getPrintAvailable: () => o.value.print,
	beforeOperation: c,
	formatErrorMessage: a,
	onErrorMessage: l
}), We = ({ getOptions: e, getFilename: t, getBufferSize: n, getCurrentFile: r, getCurrentVersion: i, getFallbackFile: a, getFallbackUrl: o, emitLifecycle: s, emitOperationBefore: c, emitOperationCancel: l, formatErrorMessage: u, handleLifecycleError: d, handleOperationError: f, onOperationErrorMessage: p }) => se({
	getOptions: e,
	getFilename: t,
	getBufferSize: n,
	getCurrentFile: r,
	getCurrentVersion: i,
	getFallbackFile: a,
	getFallbackUrl: o,
	emitLifecycle: s,
	emitOperationBefore: c,
	emitOperationCancel: l,
	formatErrorMessage: u,
	handleLifecycleError: d,
	handleOperationError: f,
	onOperationErrorMessage: p
}), Ge = ({ filename: t, getFile: n, getUrl: r, getOptions: i }) => {
	let a = e(() => Ee({
		filename: t.value,
		file: n(),
		url: r(),
		options: i()
	}));
	return {
		displayFilename: e(() => a.value.displayFilename),
		currentExtend: e(() => a.value.extension),
		normalizedToolbar: e(() => a.value.toolbar),
		viewerTheme: e(() => a.value.theme),
		formatErrorMessage: A
	};
}, Ke = ({ currentExtend: t, error: n, loadingTheme: r }) => e(() => oe(t.value, n.value, r.value)), qe = ({ getFile: e, getUrl: t, refreshPreview: n, cancelPreview: r, resetLoading: i, stopZoomObserver: a }) => {
	y([e, t], () => {
		Ae({ onRefreshPreview: n });
	}, { immediate: !0 }), d(() => {
		ke({
			onCancelPreview: r,
			onResetLoading: i,
			onStopZoomObserver: a
		});
	});
}, Je = ["operationAvailability"], Ye = (e) => {
	let { operationAvailability: t } = e;
	return ue(G(G({}, V(e, Je)), {}, { getOperationAvailability: () => t.value }));
};
//#endregion
//#region \0@oxc-project+runtime@0.133.0/helpers/esm/asyncToGenerator.js
function q(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function J(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				q(a, r, i, o, s, "next", e);
			}
			function s(e) {
				q(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
//#endregion
//#region src/package/vendors/renders.ts
var Y = (e) => ({
	$el: e,
	unmount() {}
}), Xe = [...ee], Ze = function() {
	var e = J(function* (e, t, n) {
		let r = he(n), i = document.createElement("div");
		i.style.textAlign = "center", i.style.marginTop = "80px";
		let a = document.createElement("div");
		if (a.textContent = r.message, i.appendChild(a), r.description) {
			let e = document.createElement("div");
			e.textContent = r.description, i.appendChild(e);
		}
		return t.replaceChildren(i), Y(t);
	});
	return function(t, n, r) {
		return e.apply(this, arguments);
	};
}(), X = re({
	definitions: x,
	handlers: Xe
}), Z = X.registry, Q = D({
	registry: Z,
	handlers: Xe,
	fallbackHandler: Ze
});
X.missingRendererIds, Q.handlersByExtension;
//#endregion
//#region src/package/components/FileViewer/rendererBridge.ts
var Qe = function() {
	var e = J(function* (e) {
		let t = (e == null ? void 0 : e.options) || {}, n = t.rendererMode === "replace" ? k([]) : ie({ builtinRenderers: t.builtinRenderers }).registry, r = S(t.renderers);
		return r.length && (yield be({
			registry: n,
			plugins: r,
			registerHandler: (e) => {
				let t = n.getById(e.rendererId);
				t && n.register(G(G({}, t), {}, { load: ne({
					handler: e.handler,
					getTarget: (e) => e.surface.container
				}) }));
			}
		})), n;
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}();
function $e(e, t, n, r) {
	return et.apply(this, arguments);
}
function et() {
	return et = J(function* (e, t, n, r) {
		let i = (yield Qe(r)).getByExtension(t) || Z.getByExtension(t);
		return i != null && i.load ? yield i.load({
			source: Se({
				buffer: e,
				filename: (r == null ? void 0 : r.filename) || `preview.${t}`,
				type: t,
				url: r == null ? void 0 : r.url
			}),
			surface: { container: n },
			options: (r == null ? void 0 : r.options) || {},
			registerExportAdapter: r == null ? void 0 : r.registerExportAdapter,
			renderContext: r
		}) : C(yield Ce({
			dispatcher: Q,
			buffer: e,
			target: n,
			type: t,
			context: r
		}));
	}), et.apply(this, arguments);
}
//#endregion
//#region src/package/vendors/nestedRender.ts
var tt = function() {
	var e = J(function* (e, t, n, r) {
		var i;
		let a = yield $e(e, t.toLowerCase(), n, G(G({}, r), {}, { renderNestedBuffer: (r == null ? void 0 : r.renderNestedBuffer) || tt }));
		return {
			$el: (i = a.rendered) == null ? void 0 : i.$el,
			destroy: () => {
				var e;
				return (e = a.destroy) == null ? void 0 : e.call(a);
			}
		};
	});
	return function(t, n, r, i) {
		return e.apply(this, arguments);
	};
}(), nt = ({ output: e, getOptions: t, isCurrentRequest: n, notifyActiveUnloadStart: r, notifyActiveUnloadComplete: i, clearActiveDocumentContext: a, clearDocumentState: o, refreshDocumentIndex: s, startZoomObserver: l, stopZoomObserver: u, clearZoomProvider: d, refreshZoomProvider: f }) => {
	let p = h(null), g = m(!1), _ = m(!1), v = de({
		renderedReady: {
			get: () => g.value,
			set: (e) => {
				g.value = e;
			}
		},
		progressiveReady: {
			get: () => _.value,
			set: (e) => {
				_.value = e;
			}
		}
	}), y = null, b = fe({
		getContainer: () => e.value,
		surfaceState: E({
			session: {
				get: () => y,
				set: (e) => {
					y = e;
				}
			},
			exportAdapter: {
				get: () => p.value,
				set: (e) => {
					p.value = e;
				}
			}
		}),
		readinessState: v,
		isCurrent: n,
		waitForContainer: c,
		onUnloadStart: r,
		onUnloadComplete: (e, t) => {
			i(e == null ? null : e, t);
		},
		onClearActiveDocumentContext: a,
		onClearDocumentState: o,
		onStartZoomObserver: l,
		onStopZoomObserver: u,
		onClearZoomProvider: d,
		onRefreshDocumentIndex: s,
		onRefreshZoomProvider: f,
		render: function() {
			var e = J(function* ({ buffer: e, type: n, target: r, filename: i, sourceUrl: a, streamUrl: o, registerExportAdapter: s, onProgressiveRender: c }) {
				return yield $e(e, n, r, {
					filename: i,
					url: a,
					streamUrl: o,
					options: t(),
					registerExportAdapter: s,
					onProgressiveRender: c,
					renderNestedBuffer: function() {
						var e = J(function* (e, n, r, i) {
							return yield tt(e, n, r, G(G({}, i), {}, { options: (i == null ? void 0 : i.options) || t() }));
						});
						return function(t, n, r, i) {
							return e.apply(this, arguments);
						};
					}()
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		}()
	});
	return G({
		activeExportAdapter: p,
		renderedReady: g,
		progressiveReady: _
	}, b);
}, rt = ({ getFile: e, getUrl: t, getOptions: n, filename: r, currentFile: i, currentBuffer: a, currentSourceUrl: o, renderedReady: s, progressiveReady: c, requestController: l, clearRenderedContent: u, mountRenderedContent: d, destroyRenderSession: f, setActiveRenderSession: p, buildLoadStartState: m, buildRenderCompleteState: h, notifyLifecycle: g, setActiveDocumentContext: _, markLoadStarted: v, clearLoadStarted: y, startLoading: b, setLoadingMessage: x, stopLoading: S, showError: ee, clearError: te, resetLoading: ne, formatErrorMessage: re }) => {
	let C = me({
		getFile: e,
		getUrl: t,
		getCurrentFilename: () => r.value,
		getPdfStreaming: () => {
			var e;
			return (e = n()) == null || (e = e.pdf) == null ? void 0 : e.streaming;
		},
		getPageHref: () => window.location.href,
		previewTarget: le({
			filename: {
				get: () => r.value,
				set: (e) => {
					r.value = e;
				}
			},
			file: {
				get: () => i.value,
				set: (e) => {
					i.value = e;
				}
			},
			buffer: {
				get: () => a.value,
				set: (e) => {
					a.value = e;
				}
			},
			sourceUrl: {
				get: () => o.value,
				set: (e) => {
					o.value = e;
				}
			},
			renderedReady: {
				get: () => s.value,
				set: (e) => {
					s.value = e;
				}
			},
			progressiveReady: {
				get: () => c.value,
				set: (e) => {
					c.value = e;
				}
			}
		}),
		requestController: l,
		downloadFile: function() {
			var e = J(function* ({ url: e, signal: t }) {
				let n = yield fetch(e, { signal: t });
				if (!n.ok) throw Error(`文件下载失败: HTTP ${n.status}`);
				return n.blob();
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		}(),
		mountRenderedContent: d,
		destroyRenderSession: f,
		buildLoadStartState: m,
		buildRenderCompleteState: h,
		onMarkLoadStarted: v,
		onClearLoadStarted: y,
		onStartLoading: b,
		onSetLoadingMessage: x,
		onStopLoading: S,
		onShowError: ee,
		onClearError: te,
		onResetLoading: ne,
		onClearRenderedContent: u,
		onSession: p,
		onActiveDocumentContext: _,
		onLifecycle: g,
		formatErrorMessage: re
	});
	return G(G({}, C), {}, {
		cancelPreview: (e = "component-unmount") => {
			C.cancelPreview(e);
		},
		refreshPreview: function() {
			var e = J(function* () {
				yield C.refreshPreview();
			});
			return function() {
				return e.apply(this, arguments);
			};
		}(),
		resetViewer: (e) => {
			C.resetViewer(e);
		}
	});
}, it = ({ activeExportAdapter: t, currentBuffer: n, currentExtend: r, currentFile: i, currentSourceUrl: a, error: o, getOptions: s, getZoomState: c, loading: l, normalizedToolbar: u, renderedReady: d, zoomState: f, emitOperationAvailabilityChange: p, emitZoomChange: m }) => {
	let h = O({
		getAdapter: () => t.value,
		getBuffer: () => n.value,
		getExtension: () => r.value,
		getFile: () => i.value,
		getHasError: () => !!o.value,
		getLoading: () => l.value,
		getOptions: s,
		getSourceUrl: () => a.value,
		getToolbar: () => u.value,
		getRenderedReady: () => d.value,
		getZoomState: c,
		zoomSyncState: f,
		onOperationAvailabilityChange: p,
		onZoomChange: m
	}), g = e(() => h.resolveToolbarState()), _ = e(() => g.value.operationAvailability), v = e(() => g.value.visibleToolbar), b = e(() => g.value.showToolbar), x = e(() => g.value.toolbarPosition), S = e(() => g.value.toolbarDisabled);
	return y(_, (e) => {
		h.syncOperationAvailability(e);
	}, { immediate: !0 }), y(() => h.createZoomSyncSnapshot(), () => {
		h.syncZoomChange();
	}, { immediate: !0 }), {
		operationAvailability: _,
		visibleToolbar: v,
		showToolbar: b,
		toolbarPosition: x,
		toolbarDisabled: S,
		zoomButtonDisabled: (e) => h.isZoomButtonDisabled(e)
	};
}, at = (t) => {
	let n = e(() => Oe(t()));
	return {
		normalizedWatermark: e(() => n.value.normalizedWatermark),
		watermarkStyle: e(() => n.value.watermarkStyle),
		watermarkInlineStyle: e(() => n.value.watermarkInlineStyle)
	};
}, ot = ({ output: e, enabled: t, runBeforeOperation: n }) => {
	let r = p(ve()), i = _e(r, ge({
		root: () => e.value,
		enabled: t,
		beforeZoom: (e) => n(e)
	}));
	return G({ zoomState: r }, i);
}, st = ["data-viewer-theme"], ct = { class: "viewer-stage" }, lt = ["data-toolbar-position"], ut = {
	key: 0,
	class: "viewer-actions-group viewer-zoom-actions",
	"aria-label": "缩放控制"
}, dt = ["disabled"], ft = ["disabled"], pt = ["disabled"], mt = ["disabled"], ht = ["disabled"], gt = ["disabled"], _t = ["disabled"], vt = { class: "viewer-content-shell" }, yt = {
	key: 1,
	class: "state-panel loading-panel"
}, bt = { class: "loading-card" }, xt = { class: "loading-icon" }, St = { class: "loading-copy" }, Ct = { class: "loading-kicker" }, wt = {
	key: 2,
	class: "state-panel error-panel"
}, Tt = { class: "error-card" }, Et = /* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ a({
	__name: "FileViewer",
	props: {
		file: {},
		url: {},
		options: {}
	},
	emits: [
		"load-start",
		"load-complete",
		"unload-start",
		"unload-complete",
		"operation-before",
		"operation-cancel",
		"operation-availability-change",
		"search-change",
		"location-change",
		"zoom-change"
	],
	setup(e, { expose: a, emit: o }) {
		let s = e, c = o, d = m(""), p = m(null), h = m(null), _ = m(null), y = m(null), { refreshDocumentIndex: b, clearDocumentState: x, getScrollContainer: S, searchDocument: ee, clearDocumentSearch: te, nextSearchResult: ne, previousSearchResult: re, getSearchState: C, collectDocumentAnchors: ie, scrollToAnchor: ae, scrollToLine: oe, getDocumentTextChunks: se } = He({
			output: p,
			getOptions: () => s.options,
			emitSearchChange: (e) => c("search-change", e),
			emitLocationChange: (e) => c("location-change", e)
		}), { displayFilename: ce, currentExtend: w, normalizedToolbar: le, viewerTheme: ue, formatErrorMessage: T } = Ge({
			filename: d,
			getFile: () => s.file,
			getUrl: () => s.url,
			getOptions: () => s.options
		}), { watermarkStyle: de, watermarkInlineStyle: fe } = at(() => {
			var e;
			return (e = s.options) == null ? void 0 : e.watermark;
		}), { loading: E, error: D, message: me, theme: O, styleVars: he, startLoading: ge, setLoadingMessage: _e, stopLoading: ve, showError: k, clearError: ye, resetLoading: A } = Ve(w), j = Ke({
			currentExtend: w,
			error: D,
			loadingTheme: O
		}), { requestController: be, getCurrentVersion: xe, isCurrentRequest: Se } = pe(), { markLoadStarted: M, clearLoadStarted: Ce, notifyLifecycle: Ee, notifyActiveUnloadStart: De, notifyActiveUnloadComplete: Oe, setActiveDocumentContext: ke, clearActiveDocumentContext: Ae, buildLoadStartState: N, buildRenderCompleteState: P, runBeforeOperation: F } = We({
			getOptions: () => s.options,
			getFilename: () => d.value,
			getBufferSize: () => {
				var e;
				return (e = _.value) == null ? void 0 : e.byteLength;
			},
			getCurrentFile: () => h.value,
			getCurrentVersion: xe,
			getFallbackFile: () => s.file,
			getFallbackUrl: () => s.url,
			emitLifecycle: c,
			emitOperationBefore: (e) => c("operation-before", e),
			emitOperationCancel: (e) => c("operation-cancel", e),
			formatErrorMessage: T,
			handleLifecycleError: (e, t) => {
				we({
					error: e,
					context: t
				});
			},
			handleOperationError: (e, t) => {
				Te({
					error: e,
					context: t
				});
			},
			onOperationErrorMessage: k
		}), { zoomState: I, refreshZoomProvider: je, startZoomObserver: Me, stopZoomObserver: Ne, clearZoomProvider: L, zoomIn: R, zoomOut: z, resetZoom: B, getZoomState: V } = ot({
			output: p,
			enabled: () => !0,
			runBeforeOperation: F
		}), { activeExportAdapter: H, renderedReady: Pe, progressiveReady: U, clearRenderedContent: Fe, destroyRenderSession: W, mountRenderedContent: G, setActiveRenderSession: Ie } = nt({
			output: p,
			getOptions: () => s.options,
			isCurrentRequest: Se,
			notifyActiveUnloadStart: De,
			notifyActiveUnloadComplete: Oe,
			clearActiveDocumentContext: Ae,
			clearDocumentState: x,
			refreshDocumentIndex: b,
			startZoomObserver: Me,
			stopZoomObserver: Ne,
			clearZoomProvider: L,
			refreshZoomProvider: je
		}), { operationAvailability: Le, visibleToolbar: K, showToolbar: Je, toolbarPosition: q, toolbarDisabled: J, zoomButtonDisabled: Y } = it({
			activeExportAdapter: H,
			currentBuffer: _,
			currentExtend: w,
			currentFile: h,
			currentSourceUrl: y,
			error: D,
			getOptions: () => s.options,
			getZoomState: V,
			loading: E,
			normalizedToolbar: le,
			renderedReady: Pe,
			zoomState: I,
			emitOperationAvailabilityChange: (e) => c("operation-availability-change", e),
			emitZoomChange: (e) => c("zoom-change", e)
		}), { cancelPreview: Xe, refreshPreview: Ze } = rt({
			getFile: () => s.file,
			getUrl: () => s.url,
			getOptions: () => s.options,
			filename: d,
			currentFile: h,
			currentBuffer: _,
			currentSourceUrl: y,
			renderedReady: Pe,
			progressiveReady: U,
			requestController: be,
			clearRenderedContent: Fe,
			mountRenderedContent: G,
			destroyRenderSession: W,
			setActiveRenderSession: Ie,
			buildLoadStartState: N,
			buildRenderCompleteState: P,
			notifyLifecycle: Ee,
			setActiveDocumentContext: ke,
			markLoadStarted: M,
			clearLoadStarted: Ce,
			startLoading: ge,
			setLoadingMessage: _e,
			stopLoading: ve,
			showError: k,
			clearError: ye,
			resetLoading: A,
			formatErrorMessage: T
		}), { downloadOriginalFile: X, exportRenderedHtml: Z, printRenderedHtml: Q } = Ue({
			activeExportAdapter: H,
			currentBuffer: _,
			currentFile: h,
			currentSourceUrl: y,
			displayFilename: ce,
			formatErrorMessage: T,
			operationAvailability: Le,
			output: p,
			runBeforeOperation: F,
			showError: k,
			watermarkInlineStyle: fe
		});
		return a(Ye({
			downloadOriginalFile: X,
			printRenderedHtml: Q,
			exportRenderedHtml: Z,
			zoomIn: R,
			zoomOut: z,
			resetZoom: B,
			getZoomState: V,
			operationAvailability: Le,
			getScrollContainer: S,
			searchDocument: ee,
			clearDocumentSearch: te,
			nextSearchResult: ne,
			previousSearchResult: re,
			getSearchState: C,
			collectDocumentAnchors: ie,
			scrollToAnchor: ae,
			scrollToLine: oe,
			getDocumentTextChunks: se
		})), qe({
			getFile: () => s.file,
			getUrl: () => s.url,
			refreshPreview: Ze,
			cancelPreview: Xe,
			resetLoading: A,
			stopZoomObserver: Ne
		}), (e, a) => (f(), n("div", {
			class: "file-viewer",
			"data-viewer-theme": v(ue),
			style: u(v(he))
		}, [r("div", ct, [v(Je) ? (f(), n("div", {
			key: 0,
			class: l(["viewer-actions", { "viewer-actions--floating": v(q) === "bottom-right" }]),
			"data-toolbar-position": v(q)
		}, [
			v(K).zoom ? (f(), n("div", ut, [
				r("button", {
					type: "button",
					class: "viewer-icon-button",
					disabled: v(Y)("canZoomOut"),
					title: "缩小预览",
					"aria-label": "缩小预览",
					onClick: a[0] || (a[0] = (...e) => v(z) && v(z)(...e))
				}, [i(v(Be), {
					size: 15,
					"stroke-width": 2.4
				})], 8, dt),
				r("button", {
					type: "button",
					class: "viewer-zoom-meter",
					disabled: v(Y)("canReset"),
					title: "还原比例",
					onClick: a[1] || (a[1] = (...e) => v(B) && v(B)(...e))
				}, g(v(I).label), 9, ft),
				r("button", {
					type: "button",
					class: "viewer-icon-button",
					disabled: v(Y)("canZoomIn"),
					title: "放大预览",
					"aria-label": "放大预览",
					onClick: a[2] || (a[2] = (...e) => v(R) && v(R)(...e))
				}, [i(v(ze), {
					size: 15,
					"stroke-width": 2.4
				})], 8, pt),
				r("button", {
					type: "button",
					class: "viewer-icon-button",
					disabled: v(Y)("canReset"),
					title: "还原比例",
					"aria-label": "还原比例",
					onClick: a[3] || (a[3] = (...e) => v(B) && v(B)(...e))
				}, [i(v(Re), {
					size: 14,
					"stroke-width": 2.4
				})], 8, mt)
			])) : t("", !0),
			v(K).download ? (f(), n("button", {
				key: 1,
				type: "button",
				disabled: v(J),
				title: "下载原始文件",
				onClick: a[4] || (a[4] = (...e) => v(X) && v(X)(...e))
			}, " 下载 ", 8, ht)) : t("", !0),
			v(K).print ? (f(), n("button", {
				key: 2,
				type: "button",
				disabled: v(J),
				title: "打印完整渲染内容",
				onClick: a[5] || (a[5] = (...e) => v(Q) && v(Q)(...e))
			}, " 打印 ", 8, gt)) : t("", !0),
			v(K).exportHtml ? (f(), n("button", {
				key: 3,
				type: "button",
				disabled: v(J),
				title: "导出当前渲染后的 HTML",
				onClick: a[6] || (a[6] = (...e) => v(Z) && v(Z)(...e))
			}, " HTML ", 8, _t)) : t("", !0)
		], 10, lt)) : t("", !0), r("div", vt, [
			r("div", {
				ref_key: "output",
				ref: p,
				class: l(["content", { hidden: v(E) && !v(U) || !!v(D) }]),
				"data-viewer-scroll-root": "true"
			}, null, 2),
			v(de) ? (f(), n("div", {
				key: 0,
				class: "viewer-watermark",
				style: u(v(de))
			}, null, 4)) : t("", !0),
			v(E) && !v(U) ? (f(), n("div", yt, [r("div", bt, [
				r("div", xt, g(v(O).badge), 1),
				r("div", St, [
					r("span", Ct, g(v(O).label), 1),
					r("strong", null, g(v(me)), 1),
					r("p", null, g(v(O).hint), 1)
				]),
				a[7] || (a[7] = r("span", { class: "loading-ring" }, null, -1))
			])])) : v(D) ? (f(), n("div", wt, [r("div", Tt, [r("strong", null, g(v(j).title), 1), r("p", null, g(v(j).message), 1)])])) : t("", !0)
		])])], 12, st));
	}
}), [["__scopeId", "data-v-e0748d68"]]), Dt = () => typeof window < "u" && typeof document < "u", Ot = (e = {}) => !!(e.url || e.file || e.buffer), kt = (e = {}) => ({
	url: e.url,
	file: e.file,
	buffer: e.buffer,
	filename: e.filename || e.name,
	name: e.name,
	type: e.type,
	size: e.size
}), At = () => typeof fetch == "function", jt = function() {
	var e = J(function* ({ url: e, signal: t }) {
		if (!At()) throw Error("fetch is not available in the current environment.");
		let n = yield fetch(e, { signal: t });
		if (!n.ok) throw Error(`Failed to fetch file: ${n.status} ${n.statusText}`);
		return n.blob();
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}(), Mt = (e) => xe(e.filename || e.name || De({
	file: e.file,
	url: e.url,
	fallback: b
}), e.type ? `preview.${e.type}` : b), Nt = function() {
	var e = J(function* (e, t = {}) {
		let n = Mt(e), r = e.type || j(n);
		if (e.buffer) {
			var i;
			return {
				buffer: e.buffer,
				filename: n,
				type: r,
				size: (i = e.size) == null ? e.buffer.byteLength : i,
				url: e.url
			};
		}
		if (e.file) {
			var a;
			let t = N(e.file, n);
			return {
				file: t,
				buffer: yield M(t),
				filename: t.name || n,
				type: r || j(t.name),
				size: (a = e.size) == null ? t.size : a,
				url: e.url
			};
		}
		if (e.url) {
			var o;
			let i = yield (t.fetchFile || jt)({
				url: e.url,
				signal: t.signal,
				source: e
			});
			if (!i) throw Error("Downloaded file is empty.");
			let a = N(i, n);
			return {
				file: a,
				buffer: yield M(a),
				filename: a.name || n,
				type: r || j(a.name),
				size: (o = e.size) == null ? a.size : o,
				url: e.url
			};
		}
		return {
			filename: n,
			type: r
		};
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}(), $ = function() {
	var e = J(function* (e, t, n) {
		return e ? t(e) : n;
	});
	return function(t, n, r) {
		return e.apply(this, arguments);
	};
}(), Pt = (e) => !!(e && typeof e == "object" && e.name === "AbortError"), Ft = (e, t = {}, n = {}) => {
	if (!Dt()) throw Error("Flyfish File Viewer can only be mounted in a browser DOM environment.");
	let r = !1, i = t, a = Ot(i) ? kt(i) : null, o = null, s = /* @__PURE__ */ new Set(), c = {
		loading: !1,
		ready: !1,
		error: null,
		lastEvent: null,
		lifecycle: null,
		availability: null,
		search: null,
		zoom: null,
		location: null
	}, l = () => G(G({}, c), {}, { search: c.search ? G(G({}, c.search), {}, { matches: [...c.search.matches] }) : null }), u = (e) => {
		var t;
		let n = l();
		(t = i.onStateChange) == null || t.call(i, n, e), s.forEach((t) => t(n, e));
	}, d = ye(e, {
		registry: n.registry,
		options: i.options,
		onEvent: (e) => {
			var t;
			c.lastEvent = e, e.type === "load-start" ? (c.loading = !0, c.ready = !1, c.error = null, c.lifecycle = e.payload) : e.type === "load-complete" ? (c.loading = !1, c.ready = !0, c.lifecycle = e.payload) : e.type === "unload-start" ? (c.loading = !0, c.ready = !1, c.lifecycle = e.payload) : e.type === "unload-complete" ? (c.loading = !1, c.ready = !1, c.lifecycle = e.payload) : e.type === "operation-availability-change" ? c.availability = e.payload : e.type === "search-change" ? c.search = e.payload : e.type === "location-change" ? c.location = e.payload : e.type === "zoom-change" && (c.zoom = e.payload), (t = i.onEvent) == null || t.call(i, e), u(e);
		}
	}), f = () => {
		o == null || o.abort(), o = null;
	}, p = function() {
		var e = J(function* (e) {
			f(), a = e, o = typeof AbortController < "u" ? new AbortController() : null;
			let t = o;
			try {
				c.loading = !0, c.error = null, u();
				let r = yield Nt(e, {
					fetchFile: n.fetchFile,
					signal: t == null ? void 0 : t.signal
				});
				return yield d.load(r);
			} catch (i) {
				var r;
				if (Pt(i) && t != null && t.signal.aborted) return null;
				throw c.loading = !1, c.ready = !1, c.error = i, u(), (r = n.onError) == null || r.call(n, i, e), i;
			} finally {
				o === t && (o = null);
			}
		});
		return function(t) {
			return e.apply(this, arguments);
		};
	}();
	return a && p(a), {
		container: e,
		load(e) {
			return J(function* () {
				r || (i = e, d.updateOptions(i.options || {}), Ot(i) && (yield p(kt(i))));
			})();
		},
		update() {
			return J(function* (e = {}) {
				var t;
				r || (i = G(G(G({}, i), e), {}, { options: (t = e.options) == null ? i.options : t }), d.updateOptions(i.options || {}), Ot(i) ? yield p(kt(i)) : (a = null, yield d.load({ filename: b })));
			}).apply(this, arguments);
		},
		reload() {
			return J(function* () {
				r || a && (yield p(a));
			})();
		},
		destroy() {
			r || (r = !0, f(), d.destroy("component-unmount"), e.innerHTML = "");
		},
		getApi() {
			return d;
		},
		downloadOriginalFile() {
			return $(d, (e) => e.download(), void 0);
		},
		printRenderedHtml() {
			return $(d, (e) => e.print(), void 0);
		},
		exportRenderedHtml() {
			return $(d, (e) => e.exportHtml({ download: !0 }).then(() => void 0), void 0);
		},
		zoomIn() {
			return $(d, (e) => e.zoomIn(), null);
		},
		zoomOut() {
			return $(d, (e) => e.zoomOut(), null);
		},
		resetZoom() {
			return $(d, (e) => e.resetZoom(), null);
		},
		searchDocument(e) {
			return $(d, (t) => t.search(e), null);
		},
		clearDocumentSearch() {
			return $(d, (e) => e.clearSearch(), null);
		},
		nextSearchResult() {
			return $(d, (e) => e.nextSearchResult(), null);
		},
		previousSearchResult() {
			return $(d, (e) => e.previousSearchResult(), null);
		},
		collectDocumentAnchors() {
			return $(d, (e) => e.collectDocumentAnchors(), []);
		},
		scrollToAnchor(e) {
			return $(d, (t) => t.scrollToDocumentAnchor(e), !1);
		},
		scrollToLine(e) {
			return $(d, (t) => t.scrollToLine(e), !1);
		},
		getDocumentTextChunks() {
			return d.getDocumentTextChunks();
		},
		getOperationAvailability() {
			return d.getCapabilities();
		},
		getZoomState() {
			return d.getZoomState();
		},
		getSearchState() {
			return d.getSearchState();
		},
		getState() {
			return l();
		},
		subscribe(e) {
			return s.add(e), e(l()), () => {
				s.delete(e);
			};
		}
	};
}, It = () => {
	if (typeof document > "u" || document.querySelector("link[data-file-viewer-style=\"true\"]")) return;
	let e = document.createElement("link");
	e.rel = "stylesheet", e.href = P, e.dataset.fileViewerStyle = "true", document.head.appendChild(e);
}, Lt = (e, t = {}) => {
	var n;
	It();
	let r = t.source || t;
	return Ft(e, G(G({}, t.autoLoad === !1 ? {} : {
		url: r.url,
		file: r.file,
		buffer: r.buffer,
		name: r.name || t.name,
		filename: r.filename || t.filename,
		type: r.type || t.type,
		size: (n = r.size) == null ? t.size : n
	}), {}, {
		options: t.options,
		onEvent: t.onEvent
	}), {
		registry: Z,
		fetchFile: t.fetchFile,
		onError: t.onError
	});
}, Rt = Lt, zt = [["file-viewer", Et]], Bt = class {
	constructor() {
		Fe(this, "installed", !1);
	}
	install(e, t = {}) {
		this.installed || (zt.forEach(([n, r]) => e.component(t.componentName || n, r)), this.installed = !0);
	}
};
function Vt() {
	if (typeof document > "u" || document.querySelector("link[data-file-viewer-style=\"true\"]")) return;
	let e = document.createElement("link");
	e.rel = "stylesheet", e.href = P, e.dataset.fileViewerStyle = "true", document.head.appendChild(e);
}
Vt();
var Ht = new Bt();
//#endregion
export { Et as FileViewer, Lt as createFlyfishFileViewer, Ht as default, Rt as mountFlyfishFileViewer };
