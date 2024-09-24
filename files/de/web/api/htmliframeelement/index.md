---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("HTML DOM")}}

Das **`HTMLIFrameElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des {{domxref("HTMLElement")}} Interfaces, die es durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Inline-Frame-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLIFrameElement.align")}} {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Frames in Bezug auf den umgebenden Kontext angibt.
- {{domxref("HTMLIFrameElement.allow")}}
  - : Ein String, der die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) angibt, die für dieses `<iframe>` festgelegt ist.
- {{domxref("HTMLIFrameElement.allowFullscreen")}}
  - : Ein boolescher Wert, der angibt, ob das Inline-Frame in den Vollbildmodus versetzt werden kann. Weitere Details finden Sie unter [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).
- {{domxref("HTMLIFrameElement.allowPaymentRequest")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob die [Payment Request API](/de/docs/Web/API/Payment_Request_API) innerhalb eines Cross-Origin-Frames aufgerufen werden kann.
- {{domxref("HTMLIFrameElement.browsingTopics")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Eine boolesche Eigenschaft, die angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} gesendet werden sollen. Diese Eigenschaft spiegelt den Wert des `browsingtopics` Inhaltsattributs wider.
- {{domxref("HTMLIFrameElement.contentDocument")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Document")}} zurück, das aktive Dokument im verschachtelten Browsing-Kontext des Inline-Frames.
- {{domxref("HTMLIFrameElement.contentWindow")}} {{ReadOnlyInline}}
  - : Gibt ein {{glossary("WindowProxy")}} zurück, den Fenster-Proxy für den verschachtelten Browsing-Kontext.
- {{domxref("HTMLIFrameElement.credentialless")}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das `<iframe>` credentialless ist, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Dieser Kontext hat keinen Zugriff auf den geteilten Speicher und die Anmeldeinformationen des übergeordneten Kontexts. Dies erlaubt das Aufheben der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln, so dass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- {{domxref("HTMLIFrameElement.csp")}} {{Experimental_Inline}}
  - : Gibt die Content Security Policy an, die ein eingebettetes Dokument selbst befolgen muss.
- {{domxref("HTMLIFrameElement.featurePolicy")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das {{domxref("FeaturePolicy")}} Interface zurück, das eine einfache API zur Einsichtnahme in die [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) bietet, die auf ein spezifisches Dokument angewendet werden.
- {{domxref("HTMLIFrameElement.frameBorder")}} {{Deprecated_Inline}}
  - : Ein String, der angibt, ob Rahmengrenzen erstellt werden sollen.
- {{domxref("HTMLIFrameElement.height")}}
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/iframe#height) HTML-Attribut widerspiegelt, das die Höhe des Frames angibt.
- {{domxref("HTMLIFrameElement.loading")}}
  - : Ein String, der dem Browser einen Hinweis gibt, dass das iframe sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll. Dies entspricht dem [`loading`](/de/docs/Web/HTML/Element/iframe#loading) HTML-Attribut.
- {{domxref("HTMLIFrameElement.longDesc")}} {{Deprecated_Inline}}
  - : Ein String, der die URI einer ausführlichen Beschreibung des Frames enthält.
- {{domxref("HTMLIFrameElement.marginHeight")}} {{Deprecated_Inline}}
  - : Ein String, der die Höhe des Rahmenabstandes darstellt.
- {{domxref("HTMLIFrameElement.marginWidth")}} {{Deprecated_Inline}}
  - : Ein String, der die Breite des Rahmenabstandes darstellt.
- {{domxref("HTMLIFrameElement.name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/iframe#name) HTML-Attribut widerspiegelt, welches einen Namen enthält, mit dem auf den Frame verwiesen wird.
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/iframe#referrerpolicy) HTML-Attribut widerspiegelt, das angibt, welchen Verweiser beim Abrufen der verknüpften Ressource verwendet werden soll.
- {{domxref("HTMLIFrameElement.sandbox")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMTokenList")}} zurück, die das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) HTML-Attribut widerspiegelt, welches zusätzliche Einschränkungen für das Verhalten des eingebetteten Inhalts angibt.
- {{domxref("HTMLIFrameElement.scrolling")}} {{Deprecated_Inline}}
  - : Ein String, der angibt, ob der Browser Scrollleisten für den Frame bereitstellen soll.
- {{domxref("HTMLIFrameElement.src")}}
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt, welches die Adresse des einzubettenden Inhalts enthält. Beachten Sie, dass das programmatische Entfernen eines `<iframe>` 'src'-Attributs (z.B. über {{domxref("Element.removeAttribute()")}}) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : Ein String, der den Inhalt darstellt, der im Frame angezeigt werden soll.
- {{domxref("HTMLIFrameElement.width")}}
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/iframe#width) HTML-Attribut widerspiegelt, das die Breite des Frames angibt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}_.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("iframe")}}
