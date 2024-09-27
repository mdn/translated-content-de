---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (über die der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinaus, die es durch Vererbung ebenfalls zur Verfügung hat), um das Layout und die Darstellung von Inline-Frame-Elementen zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Rahmens in Bezug auf den umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob der Inline-Frame bereit ist, in den Vollbildmodus versetzt zu werden. Siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API) für Details.
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines `cross-origin`-Iframe aufgerufen werden kann.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein [WindowProxy](/de/docs/Glossary/WindowProxy) zurück, den Fenster-Proxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` ohne Anmeldedaten geladen wird, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsamen Speicher und die Anmeldedaten des übergeordneten Kontexts. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, die ein eingebettetes Dokument bei sich selbst durchsetzen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Schnittstelle zurück, die eine einfache API für die Überprüfung der auf ein bestimmtes Dokument angewendeten [Permissions Policies](/de/docs/Web/HTTP/Permissions_Policy) bereitstellt.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Rahmen zwischen den Frames erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Rahmens angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, ob das Iframe sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll. Dies spiegelt das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer ausführlichen Beschreibung des Rahmens enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenrandes angibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenrandes angibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, unter dem auf den Rahmen verwiesen werden kann.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer beim Abrufen der verlinkten Ressource verwendet werden soll.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des eingebetteten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Rollbalken für den Rahmen bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt und die Adresse des zu embedden Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen eines `<iframe>` `src`-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chrome-basierten Browsern und Safari/iOS geladen wird.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein String, der den Inhalt darstellt, der im Frame angezeigt werden soll.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/iframe#width) HTML-Attribut widerspiegelt und die Breite des Rahmens angibt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
