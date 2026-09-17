---
title: javascript:-URLs
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

> [!WARNING]
> Von der Verwendung von `javascript:`-URLs im Web wird abgeraten, da sie zur Ausführung beliebigen Codes führen kann, ähnlich den Auswirkungen der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Sie kann außerdem die {{Glossary("accessibility", "Barrierefreiheit")}} beeinträchtigen, da sie vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs mit dem Präfix des `javascript:`-Schemas, werden als gefälschte Navigationsziele verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird sie als HTML behandelt und vom Browser gerendert.

## Syntax

```url
javascript:<script>
```

- `javascript:`
  - : Das Schema der URL.
- `<script>`
  - : Der auszuführende JavaScript-Code. Der Code wird als Skript geparst.

## Beschreibung

`javascript:`-URLs können überall verwendet werden, wo eine URL ein Navigationsziel ist. Dazu gehören unter anderem:

- Das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut eines `<a>`- oder `<area>`-Elements.
- Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut eines `<form>`-Elements.
- Das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut eines `<iframe>`-Elements.
- Die JavaScript-Eigenschaft [`window.location`](/de/docs/Web/API/Window/location).
- Die Adressleiste des Browsers selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie etwa das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut von `<link>`-Elementen, erlauben keine `javascript:`-URLs, da sie Ressourcenstandorte und keine Navigationsziele sind. Wenn Sie in diesen Fällen JavaScript inline schreiben möchten, verwenden Sie [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einem solchen Ort zu navigieren, parst und führt er den Skriptkörper aus. Das Skript kann einen _Abschlusswert_ haben (keinen Rückgabewert), der dem Wert entspricht, den das Skript bei Ausführung mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) hätte. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Abschlusswert der Wert dieses Ausdrucks. Wenn dieser Abschlusswert ein String ist, wird dieser String als HTML-Dokument behandelt und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei dieselbe URL wie für die aktuelle Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Wenn der Abschlusswert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird häufig empfohlen, einem Skript, das mit einem Funktionsaufruf wie `javascript:foo()` endet, {{jsxref("Operators/void", "void")}} voranzustellen, um eine versehentliche Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

Die `javascript:`-Navigation kann durch Einstellungen der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), insbesondere durch {{CSP("script-src")}}, blockiert werden.

## Beispiele

### Verwendung von `javascript:`-URLs als href-Ziele

In diesem Beispiel wird das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die beim Anklicken eine Meldung anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, da der Link tatsächlich kein Hyperlink ist. Erwägen Sie stattdessen, ihn zu einem Button zu machen:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel wird das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt „Hello, world!“ navigiert:

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass es keine Möglichkeit gibt, zur vorherigen Seite zurückzukehren, ohne die Seite neu zu laden, da `javascript:`-URLs keine Verlaufseinträge erstellen.

### Verwendung von `javascript:`-URLs als Formularaktionen

In diesem Beispiel wird das `action`-Attribut eines `<form>`-Elements auf eine `javascript:`-URL gesetzt, die beim Absenden eine Meldung anzeigt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Erwägen Sie stattdessen, auf das `submit`-Ereignis des Formulars zu warten und es mit JavaScript zu verarbeiten:

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

In diesem Beispiel wird das `src`-Attribut eines `<iframe>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt „Hello, world!“ navigiert:

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

In diesem Beispiel wird die Eigenschaft `window.location` auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt „Hello, world!“ navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Erwägen Sie stattdessen, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [IANA-Liste der URI-Schemas](https://www.iana.org/assignments/uri-schemes)
