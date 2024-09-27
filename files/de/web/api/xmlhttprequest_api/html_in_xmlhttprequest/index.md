---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die W3C-Spezifikation [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) fügt Parsing-Unterstützung für [HTML](/de/docs/Web/HTML) zu [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) hinzu, das ursprünglich nur Parsing für [XML](/de/docs/Glossary/XML) unterstützte. Diese Funktion ermöglicht es Webanwendungen, eine HTML-Ressource als geparstes [DOM](/de/docs/Glossary/DOM) mit `XMLHttpRequest` zu erhalten.

Um einen Überblick darüber zu erhalten, wie Sie `XMLHttpRequest` im Allgemeinen verwenden, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Einschränkungen

Um die synchrone Verwendung von `XMLHttpRequest` zu entmutigen, ist HTML-Unterstützung im synchronen Modus nicht verfügbar. Außerdem ist HTML-Unterstützung nur verfügbar, wenn die Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) auf `"document"` gesetzt wurde. Diese Einschränkung vermeidet, dass unnötig Zeit mit dem Parsen von HTML verschwendet wird, wenn Legacy-Code `XMLHttpRequest` im Standardmodus verwendet, um [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) für `text/html` Ressourcen abzurufen. Außerdem werden Probleme mit Legacy-Code vermieden, der davon ausgeht, dass [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) `null` für HTTP-Fehlerseiten ist (die oft einen `text/html` Antwortinhalt haben).

## Verwendung

Das Abrufen einer HTML-Ressource als DOM mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) funktioniert genauso wie das Abrufen einer XML-Ressource als DOM mit `XMLHttpRequest`, außer dass Sie den synchronen Modus nicht verwenden können und explizit ein Dokument anfordern müssen, indem Sie den String `"document"` der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) des `XMLHttpRequest`-Objekts zuweisen, nachdem Sie [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen haben, aber bevor Sie [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

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

Diese Methode basiert auf der "erzwungenen asynchronen" Natur der Funktion. Wenn Sie versuchen, `responseType` eines `XMLHttpRequest`-Objekts zu setzen, nachdem es als "sync" geöffnet wurde. Dies wirft in den Browsern, die die Funktion implementieren, einen Fehler und funktioniert in anderen.

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

Diese Methode ist synchron, verlässt sich nicht auf externe Assets, obwohl sie möglicherweise nicht so zuverlässig ist wie Methode 2, die unten beschrieben wird, da sie nicht die tatsächliche Funktion, sondern einen Hinweis auf diese Funktion überprüft.

### Methode 2

Es gibt zwei Herausforderungen bei der genauen Feststellung, ob ein Browser HTML-Parsing in [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt. Erstens wird das Erkennungsergebnis asynchron erhalten, da HTML-Unterstützung nur im asynchronen Modus verfügbar ist. Zweitens müssen Sie tatsächlich ein Testdokument über HTTP abrufen, da das Testen mit einer `data:` URL dazu führen würde, dass gleichzeitig `data:` URL-Unterstützung getestet wird.

Um also HTML-Unterstützung zu erkennen, wird eine Test-HTML-Datei auf dem Server benötigt. Diese Testdatei ist klein und kein wohlgeformtes XML:

```html
<title>&amp;&<</title>
```

Wenn die Datei `detect.html` genannt wird, kann die folgende Funktion verwendet werden, um HTML-Parsing-Unterstützung zu erkennen:

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

## Zeichenkodierung

Wenn die Zeichenkodierung im HTTP {{HTTPHeader("Content-Type")}}-Header deklariert ist, wird diese Zeichenkodierung verwendet. Wenn dies fehlschlägt und ein Byte-Order-Mark vorhanden ist, wird die durch das Byte-Order-Mark angegebene Kodierung verwendet. Scheitert auch dies und es gibt ein {{HTMLElement("meta")}}-Element, das die Kodierung innerhalb der ersten 1024 Bytes der Datei deklariert, wird diese Kodierung verwendet. Andernfalls wird die Datei als UTF-8 dekodiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
