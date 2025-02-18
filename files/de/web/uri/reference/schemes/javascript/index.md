---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

> [!WARNING]
> Die Verwendung von `javascript:` URLs im Web wird abgeraten, da dies zur Ausführung von beliebigem Code führen kann, ähnlich wie bei der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Dies kann zudem die {{Glossary("accessibility", "Barrierefreiheit")}} verringern, da es vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs, die mit dem Präfix `javascript:` versehen sind, werden als Pseudo-Navigationsziele genutzt, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird dieser als HTML behandelt und vom Browser gerendert.

## Syntax

JavaScript-URLs beginnen mit dem Schema `javascript:` und werden von JavaScript-Code gefolgt. Dieser Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:`-URLs können überall verwendet werden, wo eine URL ein Navigationsziel ist. Dies schließt unter anderem folgende Fälle ein:

- Das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut eines `<a>`- oder `<area>`-Elements.
- Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut eines `<form>`-Elements.
- Das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut eines `<iframe>`-Elements.
- Die JavaScript-Eigenschaft [`window.location`](/de/docs/Web/API/Window/location).
- Die Adressleiste des Browsers selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut von `<link>`-Elementen, erlauben keine `javascript:`-URLs, da sie Ressourcenstandorte sind und keine Navigationsziele. Für diese Fälle nutzen Sie, wenn Sie JavaScript inline schreiben möchten, [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs mit dem MIME-Typ `text/javascript`.

Wenn ein Browser versucht, zu einer solchen Adresse zu navigieren, wird der Skriptkörper geparst und ausgeführt. Das Skript kann einen _Kompletionswert_ haben (keinen Rückgabewert), der dem Wert entspricht, der resultieren würde, wenn das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt würde. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Kompletionswert der Wert dieses Ausdrucks. Wenn dieser Kompletionswert ein String ist, wird dieser als HTML-Dokument behandelt, und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei dieselbe URL wie die aktuelle Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Ist der Kompletionswert kein String, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, diesen mit {{jsxref("Operators/void", "void")}} zu versehen, um eine unbeabsichtigte Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

`javascript:`-Navigation kann durch Einstellungen zur [Content Security Policy](/de/docs/Web/HTTP/CSP) blockiert werden, insbesondere durch {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:`-URLs als href-Ziele

In diesem Beispiel wird das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die bei einem Klick eine Meldung ausgibt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Da [`alert()`](/de/docs/Web/API/Window/alert) `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist schlechte Praxis, da der Link eigentlich kein Hyperlink ist. Erwägen Sie stattdessen, daraus einen Button zu machen:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel wird das `href`-Attribut eines `<a>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass `javascript:`-URLs keine Verlaufseinträge erstellen, sodass ein Zurückgehen zur vorherigen Seite ohne Neuladen nicht möglich ist.

### Verwendung von `javascript:`-URLs als Formularaktionen

In diesem Beispiel wird das `action`-Attribut eines `<form>`-Elements auf eine `javascript:`-URL gesetzt, die bei der Übermittlung eine Meldung ausgibt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Anstatt dies zu tun, sollten Sie das `submit`-Ereignis des Formulars abfangen und dieses mit JavaScript verarbeiten:

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

In diesem Beispiel wird das `src`-Attribut eines `<iframe>`-Elements auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Anstatt dies zu tun, sollten Sie stattdessen das `srcdoc`-Attribut setzen:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Verwendung von `javascript:`-URLs mit window.location

In diesem Beispiel wird die Eigenschaft `window.location` auf eine `javascript:`-URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```js example-bad
window.location = "javascript:'Hello world!'";
```

Stattdessen sollten Sie erwägen, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Zum Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
