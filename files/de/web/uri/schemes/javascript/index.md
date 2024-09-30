---
title: "javascript: URLs"
slug: Web/URI/Schemes/javascript
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

> [!WARNING]
> Die Verwendung von `javascript:` URLs im Web wird nicht empfohlen, da sie zur Ausführung von beliebigem Code führen können, ähnlich wie bei der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Es kann auch die [Barrierefreiheit](/de/docs/Glossary/accessibility) verringern, da es vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs, die mit dem `javascript:`-Schema beginnen, werden als scheinbare Navigationsziele verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird dieser als HTML behandelt und vom Browser gerendert.

## Syntax

JavaScript-URLs beginnen mit dem `javascript:`-Schema, gefolgt von JavaScript-Code. Der Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:` URLs können überall verwendet werden, wo eine URL ein Navigationsziel ist. Dazu gehören unter anderem:

- Das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut eines `<a>`- oder `<area>`-Elements.
- Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut eines `<form>`-Elements.
- Das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut eines `<iframe>`-Elements.
- Die [`window.location`](/de/docs/Web/API/Window/location)-JavaScript-Eigenschaft.
- Die Adressleiste des Browsers selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut von `<link>`-Elementen, erlauben keine `javascript:` URLs, da es sich um Ressourcenstandorte und nicht um Navigationsziele handelt. In diesen Fällen sollten Sie, wenn Sie JavaScript inline schreiben möchten, [`data:`](/de/docs/Web/URI/Schemes/data) URLs mit dem `text/javascript` MIME-Type verwenden.

Wenn ein Browser versucht, an einen solchen Ort zu navigieren, parst und führt er den Skriptkörper aus. Das Skript kann einen _Completion-Wert_ haben (keinen Rückgabewert), der dem Wert entspricht, wenn das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt würde. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Completion-Wert der Wert dieses Ausdrucks. Ist dieser Completion-Wert ein String, wird dieser String als HTML-Dokument behandelt, und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, indem dieselbe URL wie die aktuelle Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Wenn der Completion-Wert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, es mit {{jsxref("Operators/void", "void")}} zu präfixieren, um versehentliche Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

Die Navigation mittels `javascript:` kann durch [Content Security Policy](/de/docs/Web/HTTP/CSP)-Einstellungen blockiert werden, insbesondere {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:` URLs als href-Ziele

In diesem Beispiel ist das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die beim Klicken eine Nachricht anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, da der Link eigentlich kein Hyperlink ist. Erwägen Sie, stattdessen einen Button zu verwenden:

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

Beachten Sie, dass `javascript:` URLs keine Verlaufs-Einträge erstellen, es gibt also keine Möglichkeit, zur vorherigen Seite zurückzukehren, ohne die Seite zu aktualisieren.

### Verwendung von `javascript:` URLs als Formularaktionen

In diesem Beispiel ist das `action`-Attribut eines `<form>`-Elements auf eine `javascript:`-URL gesetzt, die bei der Übermittlung eine Nachricht anzeigt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Stattdessen sollten Sie das `submit`-Ereignis des Formulars überwachen und es mit JavaScript behandeln:

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

### Verwendung von `javascript:` URLs als iframe-Quellen

In diesem Beispiel ist das `src`-Attribut eines `<iframe>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Stattdessen sollten Sie das `srcdoc`-Attribut einrichten:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Verwendung von `javascript:` URLs mit window.location

In diesem Beispiel wird die `window.location`-Eigenschaft auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Stattdessen sollten Sie [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [IANA-Liste der URI-Schemas](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
