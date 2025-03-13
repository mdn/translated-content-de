---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

> [!WARNING]
> Die Verwendung von `javascript:` URLs im Web wird nicht empfohlen, da dies zur Ausführung von beliebigem Code führen kann, ähnlich den Auswirkungen der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Es kann auch die {{Glossary("accessibility", "Zugänglichkeit")}} verringern, da es vom normalen Link-Verhalten abweicht.

**JavaScript-URLs**, also URLs mit dem Präfix `javascript:`, werden als scheinbare Navigationziele verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird sie als HTML betrachtet und vom Browser gerendert.

## Syntax

JavaScript-URLs beginnen mit dem Schema `javascript:` und werden von JavaScript-Code gefolgt. Dieser Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:` URLs können überall verwendet werden, wo eine URL ein Navigationsziel ist. Dazu gehören, aber sind nicht beschränkt auf:

- Das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut eines `<a>` oder `<area>` Elements.
- Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut eines `<form>` Elements.
- Das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut eines `<iframe>` Elements.
- Die [`window.location`](/de/docs/Web/API/Window/location) JavaScript-Eigenschaft.
- Die Browser-Adressleiste selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut von `<link>` Elementen, erlauben keine `javascript:` URLs, da sie Ressourcenziele und keine Navigationsziele sind. In diesen Fällen, wenn Sie JavaScript inline schreiben möchten, verwenden Sie [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einem solchen Ort zu navigieren, parst und führt er den Skriptkörper aus. Das Skript kann einen _Abschlusswert_ haben (keinen Rückgabewert), der derselbe Wert ist, wenn das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt würde. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Abschlusswert der Wert dieses Ausdrucks. Wenn dieser Abschlusswert ein String ist, wird dieser String als HTML-Dokument betrachtet, und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt unter Verwendung derselben URL wie die aktuelle Seite. Es wird kein Verlaufseintrag erstellt. Wenn der Abschlusswert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, es mit {{jsxref("Operators/void", "void")}} zu versehen, um eine unbeabsichtigte Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

`javascript:` Navigation kann durch [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) Einstellungen blockiert werden, insbesondere durch {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:` URLs als href-Ziele

In diesem Beispiel ist das `href`-Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die beim Klicken eine Nachricht anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, da der Link tatsächlich kein Hyperlink ist. Ziehen Sie in Betracht, stattdessen einen Button zu erstellen:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel ist das `href`-Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass `javascript:` URLs keine Verlaufseinträge erstellen, so dass es keinen Weg gibt, zur vorherigen Seite zurückzukehren, ohne die Seite neu zu laden.

### Verwendung von `javascript:` URLs als Formularaktionen

In diesem Beispiel ist das `action`-Attribut eines `<form>` Elements auf eine `javascript:` URL gesetzt, die beim Übermitteln eine Nachricht anzeigt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Anstatt dies zu tun, sollten Sie in Betracht ziehen, das `submit` Ereignis des Formulars zu verfolgen und es mit JavaScript zu bearbeiten:

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

In diesem Beispiel ist das `src`-Attribut eines `<iframe>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Anstatt dies zu tun, sollten Sie in Betracht ziehen, das `srcdoc`-Attribut festzulegen:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Verwendung von `javascript:` URLs mit window.location

In diesem Beispiel wird die `window.location` Eigenschaft auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Anstatt dies zu tun, sollten Sie in Betracht ziehen, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [IANA Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
