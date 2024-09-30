---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die es durch Vererbung vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von Inline-Frame-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seiner Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Rahmens in Bezug auf den umliegenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame bereit ist, im Vollbildmodus angezeigt zu werden. Details finden Sie unter [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) in einem iframe einer fremden Domäne aufgerufen werden darf.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die zugehörige Quelle des {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein [WindowProxy](/de/docs/Glossary/WindowProxy) zurück, den Fenster-Proxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` ohne Berechtigungsnachweis ist, was bedeutet, dass dessen Inhalt in einem neuen, temporären Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsamen Speicher und die Berechtigungsnachweise des Elternkontexts. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content-Security-Policy an, die ein eingebettetes Dokument zustimmen muss, um sich selbst durchzusetzen.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Schnittstelle zurück, die eine einfache API zur Untersuchung der [Permissions Policies](/de/docs/Web/HTTP/Permissions_Policy) bietet, die auf ein bestimmtes Dokument angewendet werden.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Rahmen zwischen Frames erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/iframe#height) HTML-Attribut widerspiegelt und die Höhe des Rahmens angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, dass das iframe sofort (`eager`) oder je nach Bedarf (`lazy`) geladen werden soll.
    Dies spiegelt das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer längeren Beschreibung des Rahmens enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenrandes ist.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenrandes ist.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/iframe#name) HTML-Attribut widerspiegelt und einen Namen enthält, um den Rahmen zu referenzieren.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) HTML-Attribut widerspiegelt und angibt, welcher Referrer verwendet werden soll, wenn die verlinkte Ressource abgerufen wird.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) HTML-Attribut widerspiegelt und zusätzliche Einschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Rollbalken für den Rahmen bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmgesteuerte Entfernen des src-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS `about:blank` im Rahmen geladen wird.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein String, der den Inhalt darstellt, der im Rahmen angezeigt werden soll.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/iframe#width) HTML-Attribut widerspiegelt und die Breite des Rahmens angibt.

## Instanzmethoden

_Erbt Methoden von seiner Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("iframe")}}
