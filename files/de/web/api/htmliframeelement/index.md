---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface, das auch über Vererbung verfügbar ist), die zur Manipulation des Layouts und der Darstellung von Inline-Frame-Elementen dienen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Rahmens im Verhältnis zum umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt wurde.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame bereit ist, im Vollbildmodus angezeigt zu werden. Siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API) für Details.
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines Cross-Origin-Iframes aufgerufen werden darf.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{non-standard_inline}} {{deprecated_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollten. Dies spiegelt den Inhalt des Attributwerts `browsingtopics` wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browserverlauf des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das Fenster-Proxy für den verschachtelten Browserverlauf ist.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` credentialless ist, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsam genutzten Speicher und die Anmeldeinformationen des übergeordneten Kontexts. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht getan haben. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für eine ausführlichere Erklärung.
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, die ein eingebettetes Dokument selbst durchsetzen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface zurück, das eine einfache API zum Überprüfen der auf ein bestimmtes Dokument angewendeten [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) bietet.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob zwischen den Rahmen Grenzen erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Rahmens angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der einen Hinweis an den Browser gibt, dass das iframe sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll. Dies spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer langen Beschreibung des Rahmens enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenrandes ist.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenrandes ist.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, mit dem auf den Rahmen verwiesen werden kann.
- [`HTMLIFrameElement.privateToken`](/de/docs/Web/API/HTMLIFrameElement/privateToken) {{experimental_inline}}
  - : Eine stringbasierte Darstellung eines Optionsobjekts, das eine Operation eines [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) darstellt; dieses Objekt hat die gleiche Struktur wie die `RequestInit` Dictionary-Property [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken). Es spiegelt den Inhalt des zugehörigen `<iframe>`-Elements [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) Attributs wider.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll, wenn die verlinkte Ressource abgerufen wird.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Bildlaufleisten für den Rahmen bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen eines `<iframe>`-src-Attributs (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Rahmen in Firefox (ab Version 65), auf Chromium-basierte Browser und Safari/iOS geladen wird.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String, der das in den Rahmen geladene HTML-Dokument darstellt.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) HTML-Attribut widerspiegelt und die Breite des Rahmens angibt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIFrameElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
