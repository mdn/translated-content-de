---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`**-Interface bietet spezielle Eigenschaften und Methoden (über die hinaus, die es auch durch Vererbung von dem [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Inline-Frame-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames in Bezug auf den umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame in den Vollbildmodus versetzt werden darf. Details siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines Cross-Origin-Frames aufgerufen werden darf.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das Fenster-Proxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` rechenschaftslos ist, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsam genutzten Speicher und die Anmeldedaten des übergeordneten Kontexts. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Dritt_Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für eine tiefere Erklärung.
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, die ein eingebettetes Dokument bei sich selbst erzwingen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interface zurück, das eine einfache API zum Untersuchen der [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) bereitstellt, die auf ein bestimmtes Dokument angewendet werden.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob zwischen den Frames Rahmen erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Frames angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, dass das iframe sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll.
    Dies spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer langen Beschreibung des Frames enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenabstands angibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenabstands angibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, mit dem auf den Frame verwiesen werden soll.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer beim Abrufen der verlinkten Ressource verwendet werden soll.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Bildlaufleisten für den Frame bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) HTML-Attribut widerspiegelt und die Adresse des eingebetteten Inhalts enthält. Beachten Sie, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird, sowohl in Firefox (ab Version 65) als auch in Chromium-basierten Browsern sowie in Safari/iOS.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String, der das in den Frame geladene HTML-Dokument darstellt.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) HTML-Attribut widerspiegelt und die Breite des Frames angibt.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIFrameElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
