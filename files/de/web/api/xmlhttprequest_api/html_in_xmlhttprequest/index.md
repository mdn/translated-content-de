---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die W3C-Spezifikation {{domxref("XMLHttpRequest")}} fügt Unterstützung für das Parsen von [HTML](/de/docs/Web/HTML) zu {{domxref("XMLHttpRequest")}} hinzu, das ursprünglich nur das Parsen von {{Glossary("XML")}} unterstützte. Dieses Feature ermöglicht es Web-Anwendungen, eine HTML-Ressource als geparstes {{Glossary("DOM")}} mit `XMLHttpRequest` zu erhalten.

Für einen Überblick darüber, wie `XMLHttpRequest` im Allgemeinen verwendet wird, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Einschränkungen

Um die synchrone Nutzung von `XMLHttpRequest` zu entmutigen, ist HTML-Unterstützung im synchronen Modus nicht verfügbar. Außerdem ist HTML-Unterstützung nur verfügbar, wenn die Eigenschaft {{domxref("XMLHttpRequest.responseType", "responseType")}} auf `"document"` gesetzt wurde. Diese Einschränkung verhindert das unnötige Parsen von HTML, wenn Legacy-Code `XMLHttpRequest` im Standardmodus verwendet, um {{domxref("XMLHttpRequest.responseText", "responseText")}} für `text/html`-Ressourcen abzurufen. Außerdem vermeidet diese Einschränkung Probleme mit Legacy-Code, der davon ausgeht, dass {{domxref("XMLHttpRequest.responseXML", "responseXML")}} für HTTP-Fehlerseiten `null` ist (die oft einen `text/html`-Antwortkörper haben).

## Verwendung

Das Abrufen einer HTML-Ressource als DOM über {{domxref("XMLHttpRequest")}} funktioniert genauso wie das Abrufen einer XML-Ressource als DOM mit `XMLHttpRequest`, außer dass Sie den synchronen Modus nicht verwenden können und Sie ein Dokument explizit anfordern müssen, indem Sie die Zeichenkette `"document"` der Eigenschaft {{domxref("XMLHttpRequest.responseType", "responseType")}} des `XMLHttpRequest`-Objekts zuweisen, nachdem Sie {{domxref("XMLHttpRequest.open", "open()")}} aufgerufen haben, aber bevor Sie {{domxref("XMLHttpRequest.send", "send()")}} aufrufen.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## Feature-Erkennung

### Methode 1

Diese Methode basiert auf der "force async"-Natur des Features. Wenn Sie versuchen, `responseType` eines `XMLHttpRequest`-Objekts zu setzen, nachdem es als "sync" geöffnet wurde, führt dies in den Browsern, die das Feature implementieren, zu einem Fehler und funktioniert bei anderen.

```js
function HTMLinXHR() {
  if (!window.XMLHttpRequest) {
    return false;
  }
  const req = new window.XMLHttpRequest();
  req.open("GET", window.location.href, false);
  try {
    req.responseType = "document";
  } catch (e) {
    return true;
  }
  return false;
}
```

[View on JSFiddle](https://jsfiddle.net/HTcKP/1/)

Diese Methode ist synchron, sie beruht nicht auf externen Assets, obwohl sie möglicherweise nicht so zuverlässig ist wie Methode 2, die unten beschrieben wird, da sie nicht das tatsächliche Feature überprüft, sondern einen Hinweis auf dieses Feature.

### Methode 2

Es gibt zwei Herausforderungen bei der genauen Erkennung, ob ein Browser HTML-Parsen in {{domxref("XMLHttpRequest")}} unterstützt. Erstens wird das Erkennungsergebnis asynchron gewonnen, da HTML-Unterstützung nur im asynchronen Modus verfügbar ist. Zweitens müssen Sie tatsächlich ein Testdokument über HTTP abrufen, da ein Test mit einer `data:`-URL gleichzeitig die Unterstützung von `data:`-URLs testen würde.

Um die HTML-Unterstützung zu erkennen, wird eine kleine Test-HTML-Datei auf dem Server benötigt, die kein gut geformtes XML ist:

```html
<title>&amp;&<</title>
```

Wenn die Datei `detect.html` genannt wird, kann die folgende Funktion zur Erkennung der HTML-Parsing-Unterstützung verwendet werden:

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    setTimeout(function () {
      callback(false);
    }, 0);

    return;
  }
  let done = false;
  const xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && !done) {
      done = true;
      callback(
        !!(
          xhr.responseXML &&
          xhr.responseXML.title &&
          xhr.responseXML.title === "&&<"
        ),
      );
    }
  };
  xhr.onabort = xhr.onerror = () => {
    if (!done) {
      done = true;
      callback(false);
    }
  };
  try {
    xhr.open("GET", "detect.html");
    xhr.responseType = "document";
    xhr.send();
  } catch (e) {
    setTimeout(function () {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
```

Das Argument `callback` ist eine Funktion, die asynchron mit `true` als einzigem Argument aufgerufen wird, wenn HTML-Parsen unterstützt wird, und mit `false` als einzigem Argument, wenn nicht.

[View on JSFiddle](https://jsfiddle.net/xfvXR/1/)

## Zeichenkodierung

Wenn die Zeichenkodierung im HTTP-{{HTTPHeader("Content-Type")}}-Header deklariert ist, wird diese Zeichenkodierung verwendet. Andernfalls, wenn ein Byte-Order-Mark vorhanden ist, wird die durch den Byte-Order-Mark angezeigte Kodierung verwendet. Wenn auch das nicht der Fall ist und es ein {{HTMLElement("meta")}}-Element gibt, das die Kodierung innerhalb der ersten 1024 Bytes der Datei deklariert, wird diese Kodierung verwendet. Andernfalls wird die Datei als UTF-8 dekodiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLHttpRequest")}}
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
