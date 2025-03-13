---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (über diejenigen des [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinaus, die es auch durch Vererbung hat) für die Manipulation der Gestaltung und Darstellung von Inline-Frame-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elterninterface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames in Bezug auf den umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` spezifiziert ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame in den Vollbildmodus versetzt werden kann. Weitere Informationen finden Sie unter [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines Cross-Origin-iFrames aufgerufen werden kann.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das Fenster-Proxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` credentialless ist, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsam genutzten Speicher und die Anmeldedaten des Elternkontexts. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Eine tiefere Erklärung finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt an, welche Content Security Policy ein eingebettetes Dokument selbst durchsetzen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface zurück, das eine einfache API zum Untersuchen der [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) bietet, die auf ein bestimmtes Dokument angewendet werden.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Rahmen zwischen Frames erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Frames angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, dass das iFrame sofort (`eager`) oder nach Bedarf (`lazy`) geladen werden soll. Dies spiegelt das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer ausführlichen Beschreibung des Frames enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Frame-Rands angibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Frame-Rands angibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, mit dem auf das Frame verwiesen wird.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll, wenn die verknüpfte Ressource abgerufen wird.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des eingebetteten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Rollenleisten für das Frame bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen eines `<iframe>` `src`-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein String, der den anzuzeigenden Inhalt im Frame darstellt.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/iframe#width) HTML-Attribut widerspiegelt und die Breite des Frames angibt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elterninterface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIframeElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
