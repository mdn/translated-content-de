---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (über die hinaus, die es durch Vererbung von der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle zur Verfügung hat), um das Layout und die Darstellung von Inline-Frame-Elementen zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames im Verhältnis zum umgebenden Kontext spezifiziert.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` spezifiziert ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame in den Vollbildmodus versetzt werden kann. Siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API) für Details.
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines Cross-Origin-Iframes aufgerufen werden kann.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, den Fensterproxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` ohne Anmeldeinformationen ist, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsamen Speicher und die Anmeldeinformationen des übergeordneten Kontexts. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln gelockert werden, sodass Dokumente mit COEP, die keine Drittanbieterdokumente enthalten, eingebettet werden können. Für eine detailliertere Erklärung siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, der ein eingebettetes Dokument zustimmen muss, sich selbst durchzusetzen.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface zurück, das eine einfache API zum Untersuchen der [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) bietet, die auf ein bestimmtes Dokument angewendet werden.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Rahmen zwischen den Frames erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Frames angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis darauf gibt, ob das Iframe sofort (`eager`) oder nach Bedarf (`lazily`) geladen werden soll.
    Dies spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer langen Beschreibung des Frames enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenrandes angibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenrandes angibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, unter dem auf den Frame verwiesen werden kann.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welchen Referrer beim Abrufen der verlinkten Ressource verwendet werden soll.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Bildlaufleisten für den Frame bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) HTML-Attribut widerspiegelt und die Adresse des eingebetteten Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z.B. mit [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` in den Frame geladen wird in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein String, der den Inhalt darstellt, der im Frame angezeigt werden soll.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) HTML-Attribut widerspiegelt und die Breite des Frames angibt.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIFrameElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("iframe")}}
