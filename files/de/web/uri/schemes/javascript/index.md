---
title: "javascript: URLs"
slug: Web/URI/Schemes/javascript
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

> [!WARNING]
> Die Verwendung von `javascript:` URLs im Web wird nicht empfohlen, da dies zur Ausführung von beliebigem Code führen kann, ähnlich wie bei der Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Es kann auch die {{glossary("Zugänglichkeit")}} verringern, da es vom normalen Linkverhalten abweicht.

**JavaScript-URLs**, URLs mit dem Präfix `javascript:`, werden als Schein-Zieladressen verwendet, die JavaScript ausführen, wenn der Browser versucht zu navigieren. Wenn die URL zu einem String ausgewertet wird, wird sie als HTML behandelt und vom Browser gerendert.

## Syntax

JavaScript-URLs beginnen mit dem Schema `javascript:` und werden von JavaScript-Code gefolgt. Der Code wird als Skript geparst.

```url
javascript:<script>
```

## Beschreibung

`javascript:` URLs können überall dort verwendet werden, wo eine URL ein Navigationsziel ist. Dies beinhaltet, ist aber nicht beschränkt auf:

- Das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut eines `<a>` oder `<area>` Elements.
- Das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut eines `<form>` Elements.
- Das [`src`](/de/docs/Web/HTML/Element/iframe#src) Attribut eines `<iframe>` Elements.
- Die [`window.location`](/de/docs/Web/API/Window/location) JavaScript Eigenschaft.
- Die Adressleiste des Browsers selbst.

> [!NOTE]
> Einige andere Kontexte, die URLs verwenden, wie das [`href`](/de/docs/Web/HTML/Element/link#href) Attribut von `<link>` Elementen, erlauben keine `javascript:` URLs, da es sich um Ressourcenstandorte und nicht um Navigationsziele handelt. Für diese Fälle sollten Sie, wenn Sie JavaScript inline schreiben möchten, [`data:`](/de/docs/Web/URI/Schemes/data) URLs mit dem MIME-Typ `text/javascript` verwenden.

Wenn ein Browser versucht, zu einem solchen Ort zu navigieren, wird der Skriptkörper geparst und ausgeführt. Das Skript kann einen _Abschlusswert_ haben (keinen Rückgabewert), der derselbe Wert ist, als ob das Skript mit [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeführt würde. Wenn die letzte Anweisung ein [Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ist, ist der Abschlusswert der Wert dieses Ausdrucks. Wenn dieser Abschlusswert ein String ist, wird dieser String als HTML-Dokument behandelt und der Browser navigiert zu einem neuen Dokument mit diesem Inhalt, wobei dieselbe URL wie auf der aktuellen Seite verwendet wird. Es wird kein Verlaufseintrag erstellt. Wenn der Abschlusswert kein String ist, führt der Browser nur den Code aus und navigiert nicht. Daher wird oft empfohlen, dass, wenn das Skript mit einem Funktionsaufruf wie `javascript:foo()` endet, Sie es mit {{jsxref("Operators/void", "void")}} einleiten sollten, um eine versehentliche Navigation zu verhindern, falls die Funktion zufällig einen String zurückgibt.

`javascript:` Navigation kann durch [Content Security Policy](/de/docs/Web/HTTP/CSP) Einstellungen blockiert werden, insbesondere durch {{CSP("script-src")}}.

## Beispiele

### Verwendung von `javascript:` URLs als href-Ziele

In diesem Beispiel ist das `href` Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die beim Klicken eine Meldung anzeigt:

```html example-bad
<a href="javascript:alert('Hello, world!')">Klicken Sie mich</a>
```

Da {{domxref("Window/alert", "alert()")}} `undefined` zurückgibt, navigiert der Browser nicht zu einer neuen Seite. Dies ist eine schlechte Praxis, da der Link tatsächlich kein Hyperlink ist. Erwägen Sie, stattdessen einen Button zu erstellen:

```html example-good
<button id="btn">Klicken Sie mich</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In diesem Beispiel ist das `href` Attribut eines `<a>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<a href="javascript:pageContent">Klicken Sie mich</a>
<script>
  // Verwenden Sie eine var, damit es eine globale Variable wird und anderswo gelesen werden kann
  var pageContent = "Hello, world!";
</script>
```

Beachten Sie, dass `javascript:` URLs keine Verlaufseinträge erstellen und es somit keine Möglichkeit gibt, ohne Aktualisierung zur vorherigen Seite zurückzukehren.

### Verwendung von `javascript:` URLs als Formularaktionen

In diesem Beispiel ist das `action` Attribut eines `<form>` Elements auf eine `javascript:` URL gesetzt, die beim Absenden eine Meldung ausgibt:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Absenden" />
</form>
```

Erwägen Sie stattdessen, auf das `submit` Ereignis des Formulars zu hören und es mit JavaScript zu bearbeiten:

```html example-good
<form id="myForm">
  <input id="myInput" />
  <input type="submit" value="Absenden" />
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(document.getElementById("myInput").value);
  });
</script>
```

### Verwendung von `javascript:` URLs als iframe-Quellen

In diesem Beispiel ist das `src` Attribut eines `<iframe>` Elements auf eine `javascript:` URL gesetzt, die zu einer neuen Seite mit dem Inhalt "Hello, world!" navigiert:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Verwenden Sie eine var, damit es eine globale Variable wird und anderswo gelesen werden kann
  var pageContent = "Hello, world!";
</script>
```

Erwägen Sie stattdessen, das `srcdoc` Attribut zu setzen:

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

Erwägen Sie stattdessen, [DOM-APIs](/de/docs/Web/API/HTML_DOM_API) zu verwenden, um den Seiteninhalt zu ändern. Beispiel:

```js example-good
document.body.textContent = "Hello, world!";
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [IANA Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
