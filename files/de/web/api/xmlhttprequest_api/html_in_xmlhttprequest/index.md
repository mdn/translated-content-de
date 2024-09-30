---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die W3C-[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Spezifikation fügt Parsing-Unterstützung für [HTML](/de/docs/Web/HTML) in [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) hinzu, das ursprünglich nur Parsing für [XML](/de/docs/Glossary/XML) unterstützte. Diese Funktion ermöglicht es Webanwendungen, eine HTML-Ressource als geparsten [DOM](/de/docs/Glossary/DOM) mit `XMLHttpRequest` zu erhalten.

Um einen Überblick über die allgemeine Verwendung von `XMLHttpRequest` zu erhalten, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Einschränkungen

Um die synchrone Verwendung von `XMLHttpRequest` zu umgehen, ist HTML-Unterstützung im synchronen Modus nicht verfügbar. Außerdem ist HTML-Unterstützung nur verfügbar, wenn die [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft auf `"document"` gesetzt wurde. Diese Einschränkung vermeidet unnötige Zeitverschwendung beim Parsen von HTML, wenn Legacy-Code `XMLHttpRequest` im Standardmodus verwendet, um [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) für `text/html`-Ressourcen abzurufen. Außerdem werden Probleme mit Legacy-Code vermieden, der annimmt, dass [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) für HTTP-Fehlerseiten `null` ist (die häufig einen `text/html`-Antwortkörper haben).

## Nutzung

Das Abrufen einer HTML-Ressource als DOM mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) funktioniert genauso wie das Abrufen einer XML-Ressource als DOM mit `XMLHttpRequest`, außer dass Sie den synchronen Modus nicht verwenden können und Sie ein Dokument explizit anfordern müssen, indem Sie der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft des `XMLHttpRequest`-Objekts den String `"document"` zuweisen, nachdem Sie [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen, aber bevor Sie [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen haben.

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

Diese Methode basiert auf der "erzwungenen asynchronen" Natur des Features. Wenn Sie versuchen, `responseType` eines `XMLHttpRequest`-Objekts festzulegen, nachdem es als "sync" geöffnet wurde. Dies führt zu einem Fehler in den Browsern, die das Feature implementiert haben, und funktioniert in anderen.

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

[Auf JSFiddle ansehen](https://jsfiddle.net/HTcKP/1/)

Diese Methode ist synchron, basiert nicht auf externen Ressourcen, obwohl sie möglicherweise nicht so zuverlässig ist wie Methode 2, die unten beschrieben wird, da sie nicht die eigentliche Funktion überprüft, sondern einen Hinweis auf diese Funktion.

### Methode 2

Es gibt zwei Herausforderungen bei der genauen Erkennung, ob ein Browser HTML-Parsing in [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt. Erstens wird das Erkennungsergebnis asynchron ermittelt, da HTML-Unterstützung nur im asynchronen Modus verfügbar ist. Zweitens müssen Sie ein Testdokument tatsächlich über HTTP abrufen, da ein Test mit einer `data:`-URL gleichzeitig die `data:`-URL-Unterstützung testen würde.

Um die HTML-Unterstützung zu erkennen, wird eine Test-HTML-Datei auf dem Server benötigt. Diese Testdatei ist klein und kein wohlgeformtes XML:

```html
<title>&amp;&<</title>
```

Wenn die Datei `detect.html` heißt, kann die folgende Funktion verwendet werden, um HTML-Parsing-Unterstützung zu erkennen:

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

Das Argument `callback` ist eine Funktion, die asynchron mit `true` als einzigem Argument aufgerufen wird, wenn HTML-Parsing unterstützt wird, und mit `false` als einzigem Argument, wenn HTML-Parsing nicht unterstützt wird.

[Auf JSFiddle ansehen](https://jsfiddle.net/xfvXR/1/)

## Zeichencodierung

Wenn die Zeichencodierung im HTTP-{{HTTPHeader("Content-Type")}}-Header deklariert ist, wird diese Zeichencodierung verwendet. Andernfalls, wenn es eine Byte Order Mark gibt, wird die durch ihn angegebene Codierung verwendet. Andernfalls, wenn es ein {{HTMLElement("meta")}}-Element gibt, das innerhalb der ersten 1024 Bytes der Datei die Codierung deklariert, wird diese Codierung verwendet. Andernfalls wird die Datei als UTF-8 dekodiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
