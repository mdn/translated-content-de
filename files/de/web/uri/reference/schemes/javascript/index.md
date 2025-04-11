---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

> [!WARNING]
> Die Verwendung von `javascript:`-URLs im Web wird nicht empfohlen, da sie zur Ausführung von beliebigem Code führen können, ähnlich wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Sie kann auch die {{Glossary("accessibility", "Barrierefreiheit")}} verringern, da sie vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs mit dem Präfix `javascript:`, werden als gefälschte Navigationsziele verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, behandelt der Browser sie als HTML und rendert sie.

## Syntax

JavaScript-URLs beginnen mit dem Schema `javascript:` und werden von JavaScript-Code gefolgt. Der Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:`-URLs können überall dort verwendet werden, wo eine URL ein Navigationsziel ist. Dazu gehören, aber sind nicht beschränkt auf:

- Das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut eines `<a>`- oder `<area>`-Elements.
- Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut eines `<form>`-Elements.
- Das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut eines `<iframe>`-Elements.
- Die JavaScript-Eigenschaft [`window.location`](/de/docs/Web/API/Window/location).
- Die Adressleiste des Browsers selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut von `<link>`-Elementen, erlauben keine `javascript:`-URLs, da sie Ressourcenstandorte und keine Navigationsziele sind. Für diese Fälle, wenn Sie JavaScript inline schreiben möchten, verwenden Sie [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einem solchen Standort zu navigieren, parst und führt er den Skriptkörper aus. Das Skript kann einen _Kompletionswert_ haben (keinen Rückgabewert), der der gleiche Wert ist, als wäre das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt worden. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Kompletionswert der Wert dieses Ausdrucks. Wenn dieser Kompletionswert ein String ist, wird dieser String als ein HTML-Dokument behandelt, und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei die gleiche URL wie die aktuelle Seite verwendet wird. Es wird kein Verlaufs-Eintrag erstellt. Wenn der Kompletionswert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, dass Sie es mit {{jsxref("Operators/void", "void")}} prefixen, um eine versehentliche Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

Die `javascript:`-Navigation kann durch die Einstellung der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), insbesondere {{CSP("script-src")}}, blockiert werden.

## Beispiele

### Verwendung von `javascript:`-URLs als href-Ziele

In diesem Beispiel ist das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die eine Nachricht ausgibt, wenn darauf geklickt wird:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, weil der Link eigentlich kein Hyperlink ist. Erwägen Sie, ihn stattdessen zu einem Button zu machen:

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

Beachten Sie, dass `javascript:`-URLs keine Verlaufs-Einträge erstellen, sodass es keinen Weg zurück zur vorherigen Seite gibt, ohne zu aktualisieren.

### Verwendung von `javascript:`-URLs als Formularaktionen

In diesem Beispiel ist das `action`-Attribut eines `<form>`-Elements auf eine `javascript:`-URL gesetzt, die eine Nachricht ausgibt, wenn sie gesendet wird:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Stattdessen sollten Sie das `submit`-Ereignis des Formulars überwachen und mit JavaScript bearbeiten:

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

Erwägen Sie stattdessen, das `srcdoc`-Attribut zu setzen:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Verwendung von `javascript:`-URLs mit window.location

In diesem Beispiel wird die `window.location`-Eigenschaft auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Erwägen Sie stattdessen, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
