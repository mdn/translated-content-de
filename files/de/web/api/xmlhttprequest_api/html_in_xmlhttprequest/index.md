---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: dbf313c424a43722626f369d5a8fb6bd1a1fafb7
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die W3C-[`XMLHttpRequest`](/docs/Web/API/XMLHttpRequest) Spezifikation fügt [HTML](/docs/Web/HTML)-Parsing-Unterstützung zu [`XMLHttpRequest`](/docs/Web/API/XMLHttpRequest) hinzu, das ursprünglich nur [XML](/docs/Glossary/XML)-Parsing unterstützte. Diese Funktion ermöglicht es Webanwendungen, eine HTML-Ressource als geparstes [DOM](/docs/Glossary/DOM) unter Verwendung von `XMLHttpRequest` zu erhalten.

Um einen Überblick darüber zu erhalten, wie `XMLHttpRequest` im Allgemeinen verwendet wird, siehe [Verwendung von XMLHttpRequest](/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Einschränkungen

Um die synchrone Verwendung von `XMLHttpRequest` zu entmutigen, ist HTML-Unterstützung im synchronen Modus nicht verfügbar. Zudem ist HTML-Unterstützung nur verfügbar, wenn die [`responseType`](/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft auf `"document"` gesetzt wurde. Diese Einschränkung vermeidet unnötiges Zeitverschwenden beim Parsen von HTML, wenn Altcodes `XMLHttpRequest` im Standardmodus verwenden, um [`responseText`](/docs/Web/API/XMLHttpRequest/responseText) für `text/html`-Ressourcen abzurufen. Außerdem vermeidet diese Einschränkung Probleme mit Altcoden, die davon ausgehen, dass [`responseXML`](/docs/Web/API/XMLHttpRequest/responseXML) für HTTP-Fehlerseiten `null` ist (die oft einen `text/html`-Antwortinhalt haben).

## Verwendung

Das Abrufen einer HTML-Ressource als DOM mit [`XMLHttpRequest`](/docs/Web/API/XMLHttpRequest) funktioniert genauso wie das Abrufen einer XML-Ressource als DOM mit `XMLHttpRequest`, jedoch können Sie den synchronen Modus nicht verwenden und Sie müssen explizit ein Dokument anfordern, indem Sie dem [`responseType`](/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft des `XMLHttpRequest`-Objekts nach dem Aufruf von [`open()`](/docs/Web/API/XMLHttpRequest/open), aber vor dem Aufruf von [`send()`](/docs/Web/API/XMLHttpRequest/send), den String `"document"` zuweisen.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## Zeichencodierung

Wenn die Zeichencodierung im HTTP-{{HTTPHeader("Content-Type")}} Header deklariert ist, wird diese Zeichencodierung verwendet. Andernfalls, wenn ein Byte-Order-Mark vorhanden ist, wird die vom Byte-Order-Mark angegebene Codierung verwendet. Andernfalls, wenn ein {{HTMLElement("meta")}}-Element die Zeichencodierung innerhalb der ersten 1024 Bytes der Datei deklariert, wird diese Codierung verwendet. Andernfalls wird die Datei als UTF-8 dekodiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/docs/Web/API/XMLHttpRequest)
- [Verwendung von XMLHttpRequest](/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
