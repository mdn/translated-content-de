---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

> [!WARNING]
> Die Verwendung von `javascript:`-URLs im Web wird nicht empfohlen, da sie zur Ausführung von beliebigem Code führen können, ähnlich den Konsequenzen der Nutzung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dies kann auch die {{Glossary("accessibility", "Barrierefreiheit")}} verringern, da es vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs mit dem Präfix `javascript:`, werden als gefälschte Navigationsziele verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird dieser als HTML behandelt und vom Browser gerendert.

## Syntax

```url
javascript:<script>
```

- `javascript:`
  - : Das Schema der URL.
- `<script>`
  - : Der auszuführende JavaScript-Code. Der Code wird als Skript geparst.

## Beschreibung

`javascript:`-URLs können überall verwendet werden, wo eine URL ein Navigationsziel ist. Dies schließt unter anderem ein:

- Das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut eines `<a>`- oder `<area>`-Elements.
- Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut eines `<form>`-Elements.
- Das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut eines `<iframe>`-Elements.
- Die [`window.location`](/de/docs/Web/API/Window/location)-JavaScript-Eigenschaft.
- Die Browser-Adressleiste selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut von `<link>`-Elementen, erlauben keine `javascript:`-URLs, da sie Ressourcenziele und keine Navigationsziele sind. In diesen Fällen, wenn Sie JavaScript inline schreiben möchten, verwenden Sie [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einem solchen Ort zu navigieren, wird der Skriptkörper geparst und ausgeführt. Das Skript kann einen _Vollendungswert_ (kein Rückgabewert) haben, was dem entspricht, als würde das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Vollendungswert der Wert dieses Ausdrucks. Wenn dieser Vollendungswert ein String ist, wird dieser String als HTML-Dokument behandelt und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei die gleiche URL wie die aktuelle Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Wenn der Vollendungswert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, es mit {{jsxref("Operators/void", "void")}} zu prefixen, um eine versehentliche Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

`javascript:`-Navigation kann durch die Einstellungen der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) blockiert werden, insbesondere durch {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:`-URLs als href-Ziele

In diesem Beispiel ist das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die eine Nachricht beim Klicken anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, weil der Link eigentlich kein Hyperlink ist. Erwägen Sie stattdessen, daraus einen Button zu machen:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel ist das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass `javascript:`-URLs keine Verlaufseinträge erstellen, sodass es keinen Weg gibt, zur vorherigen Seite zurückzukehren, ohne zu aktualisieren.

### Verwendung von `javascript:`-URLs als Formularaktionen

In diesem Beispiel ist das `action`-Attribut eines `<form>`-Elements auf eine `javascript:`-URL gesetzt, die eine Nachricht bei der Übermittlung anzeigt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Erwägen Sie stattdessen, auf das `submit`-Ereignis des Formulars zu hören und es mit JavaScript zu bearbeiten:

```html example-good
<form id="myForm">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(document.getElementById("myInput").value);
  });
</script>
```

### Verwendung von `javascript:`-URLs als iframe-Quellen

In diesem Beispiel ist das `src`-Attribut eines `<iframe>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Überlegen Sie anstelle dessen, das `srcdoc`-Attribut zu setzen:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Verwendung von `javascript:`-URLs mit window.location

In diesem Beispiel ist die `window.location`-Eigenschaft auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Anstelle dessen könnten Sie die [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [IANA-Liste der URI-Schemen](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
