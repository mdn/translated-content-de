---
title: String.prototype.anchor()
short-title: anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`anchor()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("a")}}-Element mit einem Namen einbettet (`<a name="...">str</a>`).

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).
>
> Die HTML-Spezifikation erlaubt für das {{HTMLElement("a")}}-Element kein `name`-Attribut mehr. Daher erzeugt diese Methode nicht einmal gültiges Markup.

## Syntax

```js-nolint
anchor(name)
```

### Parameter

- `name`
  - : Ein String, der den `name`-Wert für das erzeugte öffnende `<a name="...">`-Tag angibt.

### Rückgabewert

Ein String, der mit einem öffnenden `<a name="name">`-Tag beginnt (doppelte Anführungszeichen in `name` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und einem schließenden `</a>`-Tag.

## Beispiele

### `anchor()` verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

Dadurch entsteht das folgende HTML:

```html
<a name="hello">Hello, world</a>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `name` kein gültiges Attribut des {{HTMLElement("a")}}-Elements mehr ist.

Statt `anchor()` zu verwenden und HTML-Text direkt zu erzeugen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("a");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.anchor` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.anchor` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
