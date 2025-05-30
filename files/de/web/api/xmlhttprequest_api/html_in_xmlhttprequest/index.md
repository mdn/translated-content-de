---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die W3C-[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Spezifikation fügt [HTML](/de/docs/Web/HTML)-Parsing-Unterstützung zu [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) hinzu, das ursprünglich nur {{Glossary("XML", "XML")}}-Parsing unterstützte. Diese Funktion ermöglicht es Web-Apps, eine HTML-Ressource als geparstes {{Glossary("DOM", "DOM")}} mithilfe von `XMLHttpRequest` zu erhalten.

Um einen Überblick darüber zu bekommen, wie man `XMLHttpRequest` allgemein verwendet, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Einschränkungen

Um die synchrone Nutzung von `XMLHttpRequest` zu entmutigen, ist HTML-Unterstützung im synchronen Modus nicht verfügbar. Außerdem ist HTML-Unterstützung nur verfügbar, wenn die [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft auf `"document"` gesetzt wurde. Diese Einschränkung vermeidet es, Zeit mit dem sinnlosen Parsen von HTML zu verschwenden, wenn Legacy-Code `XMLHttpRequest` im Standardmodus verwendet, um [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) für `text/html`-Ressourcen abzurufen. Ebenso vermeidet diese Einschränkung Probleme mit Legacy-Code, der davon ausgeht, dass [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) `null` für HTTP-Fehlerseiten ist (die oft einen `text/html`-Response-Body haben).

## Nutzung

Das Abrufen einer HTML-Ressource als DOM mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) funktioniert genauso wie das Abrufen einer XML-Ressource als DOM mit `XMLHttpRequest`, außer dass Sie nicht den synchronen Modus verwenden können und explizit ein Dokument anfordern müssen, indem Sie den String `"document"` der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft des `XMLHttpRequest`-Objekts zuweisen, nachdem Sie [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen haben, aber bevor Sie [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## Funktionsprüfung

### Methode 1

Diese Methode stützt sich auf die "force async"-Natur der Funktion. Wenn Sie versuchen, `responseType` eines `XMLHttpRequest`-Objekts einzustellen, nachdem es als "sync" geöffnet wurde. Dies wirft einen Fehler in den Browsern, die die Funktion implementieren, und funktioniert in anderen.

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

Diese Methode ist synchron, verlässt sich nicht auf externe Ressourcen, mag jedoch nicht so zuverlässig sein wie Methode 2, die unten beschrieben wird, da sie nicht die tatsächliche Funktion, sondern ein Indiz für diese Funktion prüft.

### Methode 2

Es gibt zwei Herausforderungen beim Erkennen, ob ein Browser HTML-Parsing in [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) genau unterstützt. Erstens wird das Erkennungsergebnis asynchron erhalten, da HTML-Unterstützung nur im asynchronen Modus verfügbar ist. Zweitens müssen Sie tatsächlich ein Testdokument über HTTP abrufen, da das Testen mit einer `data:`-URL gleichzeitig die Unterstützung von `data:`-URLs testen würde.

Um also HTML-Unterstützung zu erkennen, wird eine Test-HTML-Datei auf dem Server benötigt. Diese Testdatei ist klein und ist kein wohlgeformtes XML:

```html
<title>&amp;&<</title>
```

Wenn die Datei `detect.html` genannt wird, kann die folgende Funktion zum Erkennen der HTML-Parsing-Unterstützung verwendet werden:

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    setTimeout(() => {
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
    setTimeout(() => {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
```

Das Argument `callback` ist eine Funktion, die asynchron mit `true` als einzigem Argument aufgerufen wird, wenn HTML-Parsing unterstützt wird, und mit `false` als einzigem Argument, wenn HTML-Parsing nicht unterstützt wird.

[View on JSFiddle](https://jsfiddle.net/xfvXR/1/)

## Zeichencodierung

Wenn die Zeichencodierung im HTTP-{{HTTPHeader("Content-Type")}}-Header angegeben ist, wird diese Zeichencodierung verwendet. Andernfalls, wenn ein Byte-Order-Mark vorhanden ist, wird die durch das Byte-Order-Mark angegebene Codierung verwendet. Andernfalls, wenn ein {{HTMLElement("meta")}}-Element innerhalb der ersten 1024 Bytes der Datei die Codierung angibt, wird diese Codierung verwendet. Andernfalls wird die Datei als UTF-8 decodiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
