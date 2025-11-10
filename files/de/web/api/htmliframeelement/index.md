---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 6751741acba978edab8c2889ebd9ce5e73e90a6e
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces, die es ebenfalls durch Vererbung zur Verfügung hat) zur Bearbeitung des Layouts und der Darstellung von Inline-Frame-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elterninterface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLIFrameElement.align`](/de/docs/Web/API/HTMLIFrameElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames im Verhältnis zum umgebenden Kontext angibt.
- [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow)
  - : Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, die für dieses `<iframe>` spezifiziert ist.
- [`HTMLIFrameElement.allowFullscreen`](/de/docs/Web/API/HTMLIFrameElement/allowFullscreen)
  - : Ein boolescher Wert, der angibt, ob der Inline-Frame in den Vollbildmodus versetzt werden kann. Siehe [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API) für Details.
- [`HTMLIFrameElement.allowPaymentRequest`](/de/docs/Web/API/HTMLIFrameElement/allowPaymentRequest) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) in einem Cross-Origin-Iframe aufgerufen werden kann.
- [`HTMLIFrameElement.browsingTopics`](/de/docs/Web/API/HTMLIFrameElement/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Dies spiegelt den Wert des `browsingtopics`-Inhaltsattributs wider.
- [`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt einen {{Glossary("WindowProxy", "WindowProxy")}} zurück, den Fensterproxy für den verschachtelten Browsing-Kontext.
- [`HTMLIFrameElement.credentialless`](/de/docs/Web/API/HTMLIFrameElement/credentialless) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` ohne Anmeldeinformationen ist, was bedeutet, dass sein Inhalt in einem neuen, vergänglichen Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den gemeinsamen Speicher und die Anmeldeinformationen des übergeordneten Kontexts. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit COEP Dritte einbetten können, die dies nicht tun. Weitere Erläuterungen finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) {{Experimental_Inline}}
  - : Gibt die Content-Security-Policy an, die ein eingebettetes Dokument zur Durchsetzung übernehmen muss.
- [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interface zurück, das eine einfache API zur Einsichtnahme in die auf ein bestimmtes Dokument angewendeten [Permissions Policies](/de/docs/Web/HTTP/Guides/Permissions_Policy) bietet.
- [`HTMLIFrameElement.frameBorder`](/de/docs/Web/API/HTMLIFrameElement/frameBorder) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Grenzen zwischen Frames erstellt werden sollen.
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)-HTML-Attribut widerspiegelt und die Höhe des Frames angibt.
- [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading)
  - : Ein String, der dem Browser einen Hinweis darauf gibt, dass das Iframe sofort (`eager`) oder nach Bedarf (`lazy`) geladen werden soll.
    Dies spiegelt das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-HTML-Attribut wider.
- [`HTMLIFrameElement.longDesc`](/de/docs/Web/API/HTMLIFrameElement/longDesc) {{Deprecated_Inline}}
  - : Ein String, der die URI einer langen Beschreibung des Frames enthält.
- [`HTMLIFrameElement.marginHeight`](/de/docs/Web/API/HTMLIFrameElement/marginHeight) {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Randes des Frames angibt.
- [`HTMLIFrameElement.marginWidth`](/de/docs/Web/API/HTMLIFrameElement/marginWidth) {{Deprecated_Inline}}
  - : Ein String, der die Breite des Randes des Frames angibt.
- [`HTMLIFrameElement.name`](/de/docs/Web/API/HTMLIFrameElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/iframe#name)-HTML-Attribut widerspiegelt und einen Namen enthält, unter dem der Frame referenziert wird.
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy)-HTML-Attribut widerspiegelt und angibt, welcher Referrer beim Abrufen der verlinkten Ressource verwendet werden soll.
- [`HTMLIFrameElement.sandbox`](/de/docs/Web/API/HTMLIFrameElement/sandbox) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-HTML-Attribut widerspiegelt und zusätzliche Beschränkungen für das Verhalten des verschachtelten Inhalts angibt.
- [`HTMLIFrameElement.scrolling`](/de/docs/Web/API/HTMLIFrameElement/scrolling) {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Scrollleisten für den Frame bereitstellen soll.
- [`HTMLIFrameElement.src`](/de/docs/Web/API/HTMLIFrameElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chrome-basierten Browsern und Safari/iOS geladen wird.
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
  - : Ein [`TrustedHTML`]-Objekt(/de/docs/Web/API/TrustedHTML) oder String, der das in den Frame geladene HTML-Dokument darstellt.
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width)-HTML-Attribut widerspiegelt und die Breite des Frames angibt.

## Instanz-Methoden

_Erbt ebenfalls Methoden von seinem Elterninterface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLIFrameElement.getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
