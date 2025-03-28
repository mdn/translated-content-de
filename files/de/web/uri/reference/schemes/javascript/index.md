---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: d54f8c9ecfbafc35915330ac4e26a09d93d814e8
---

> [!WARNING]
> Die Verwendung von `javascript:` URLs im Web wird nicht empfohlen, da dies zur Ausführung beliebigen Codes führen kann, ähnlich den Auswirkungen der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dies kann auch die {{Glossary("accessibility", "Zugänglichkeit")}} verringern, da es vom normalen Link-Verhalten abweicht.

**JavaScript-URLs**, URLs, die mit dem `javascript:` Schema beginnen, werden als Schein-Navigationsziele verwendet, die JavaScript ausführen, wenn der Browser den Versuch unternimmt, zu navigieren. Wird die URL als Zeichenfolge evaluiert, wird sie als HTML behandelt und vom Browser gerendert.

## Syntax

JavaScript-URLs beginnen mit dem `javascript:` Schema und werden von JavaScript-Code gefolgt. Der Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:` URLs können überall dort verwendet werden, wo eine URL ein Navigationsziel ist. Dies schließt ein, ist aber nicht darauf beschränkt:

- Das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut eines `<a>` oder `<area>` Elements.
- Das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut eines `<form>` Elements.
- Das [`src`](/de/docs/Web/HTML/Element/iframe#src) Attribut eines `<iframe>` Elements.
- Die [`window.location`](/de/docs/Web/API/Window/location) JavaScript Eigenschaft.
- Die Browser-Adressleiste selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Element/link#href) Attribut von `<link>` Elementen, erlauben keine `javascript:` URLs, da sie Ressourcenorte und keine Navigationsziele sind. In diesen Fällen, wenn Sie JavaScript inline schreiben möchten, verwenden Sie [`data:`](/de/docs/Web/URI/Reference/Schemes/data) URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einem solchen Ort zu navigieren, wird der Skriptkörper geparst und ausgeführt. Das Skript kann einen _Abschlusswert_ haben (kein Rückgabewert), der derselbe Wert ist, als ob das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt würde. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Abschlusswert der Wert dieses Ausdrucks. Wenn dieser Abschlusswert eine Zeichenfolge ist, wird diese als HTML-Dokument behandelt, und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei dieselbe URL wie die aktuelle Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Ist der Abschlusswert keine Zeichenfolge, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, dass wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, Sie es mit {{jsxref("Operators/void", "void")}} präfixieren, um versehentliche Navigationen zu verhindern, wenn die Funktion zufällig eine Zeichenfolge zurückgibt.

`javascript:` Navigation kann durch [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) Einstellungen blockiert werden, insbesondere durch {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:` URLs als href-Ziele

In diesem Beispiel wird das `href` Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die beim Anklicken eine Nachricht anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, da der Link eigentlich kein Hyperlink ist. Ziehen Sie in Betracht, ihn stattdessen zu einem Button zu machen:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel wird das `href` Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass `javascript:` URLs keine Verlaufsdaten erzeugen, sodass es keinen Weg gibt, zur vorherigen Seite zurückzugehen, ohne zu aktualisieren.

### Verwendung von `javascript:` URLs als Formularaktionen

In diesem Beispiel wird das `action` Attribut eines `<form>` Elements auf eine `javascript:` URL gesetzt, die beim Absenden eine Nachricht anzeigt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Statt dies zu tun, ziehen Sie in Betracht, das `submit`-Ereignis des Formulars zu beobachten und es mit JavaScript zu bearbeiten:

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

In diesem Beispiel wird das `src` Attribut eines `<iframe>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Ziehen Sie stattdessen in Betracht, das `srcdoc` Attribut zu setzen:

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

Ziehen Sie stattdessen in Betracht, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [IANA Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
