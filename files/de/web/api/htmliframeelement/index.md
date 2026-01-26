---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces, die es ebenfalls durch Vererbung hat), um die Gestaltung und Präsentation von Inline-Frame-Elementen zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames in Bezug auf den umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein Boolescher Wert, der angibt, ob das Inline-Frame in den Vollbildmodus versetzt werden kann. Siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API) für Details.
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) in einem Cross-Origin iframe aufgerufen werden kann.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{non-standard_inline}} {{deprecated_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige {{htmlelement("iframe")}}-Quelle gesendet werden sollten. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das Fenster-Proxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` ohne Anmeldeinformationen geladen wird, was bedeutet, dass sein Inhalt in einem neuen, kurzlebigen Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsamen Speicher und die Anmeldeinformationen des Elternkontexts. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für eine tiefere Erklärung.
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, die ein eingebettetes Dokument befolgen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface zurück, das eine einfache API zur Überprüfung der [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) bietet, die auf ein bestimmtes Dokument angewendet werden.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob zwischen den Frames Rahmen erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height) HTML-Attribut wiedergibt, das die Höhe des Frames angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, dass das iframe sofort (`eager`) oder nach Bedarf (`lazy`) geladen werden soll. Dies spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer langen Beschreibung des Frames enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Frame-Randes beschreibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Frame-Randes beschreibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/iframe#name) HTML-Attribut wiedergibt, welches einen Namen enthält, um auf den Frame zu verweisen.
- [`HTMLIFrameElement.privateToken`](/de/docs/Web/API/HTMLIFrameElement/privateToken) {{experimental_inline}}
  - : Eine String-Darstellung eines Optionsobjekts, das eine [private state token](/de/docs/Web/API/Private_State_Token_API/Using)-Operation repräsentiert; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Dictionarys [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) Eigenschaft. Spiegelt den Inhalt des zugehörigen `<iframe>` Elements [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) Attributs wider.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) HTML-Attribut wiedergibt, das angibt, welcher Referrer beim Abrufen der verknüpften Ressource verwendet werden soll.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) HTML-Attribut wiedergibt, welches zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser für den Frame Scrollleisten bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) HTML-Attribut wiedergibt und die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen eines `<iframe>` src Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String, der das in den Frame geladene HTML-Dokument repräsentiert.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) HTML-Attribut wiedergibt, das die Breite des Frames angibt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIFrameElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
