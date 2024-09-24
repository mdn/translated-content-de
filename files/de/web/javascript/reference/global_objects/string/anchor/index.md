---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`anchor()`**-Methode von {{jsxref("String")}}-Werten erstellt eine Zeichenfolge, die diese Zeichenfolge in einem {{HTMLElement("a")}}-Element mit einem Namen einbettet (`<a name="...">str</a>`).

> [!NOTE]
> Alle [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur für Kompatibilitätszwecke standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).
>
> Die HTML-Spezifikation erlaubt dem {{HTMLElement("a")}}-Element nicht mehr, ein `name`-Attribut zu haben, daher erzeugt diese Methode nicht einmal gültiges Markup.

## Syntax

```js-nolint
anchor(name)
```

### Parameter

- `name`
  - : Eine Zeichenfolge, die einen `name`-Wert darstellt, der in das generierte `<a name="...">`-Start-Tag eingefügt wird.

### Rückgabewert

Eine Zeichenfolge, die mit einem `<a name="name">`-Start-Tag beginnt (Doppelte Anführungszeichen in `name` werden durch `&quot;` ersetzt), dann der Text `str` folgt und schließlich ein `</a>`-End-Tag.

## Beispiele

### Verwendung von anchor()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokumentkörpers damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

Dies erzeugt den folgenden HTML-Code:

```html
<a name="hello">Hello, world</a>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `name` kein gültiges Attribut des {{HTMLElement("a")}}-Elements mehr ist.

Anstatt `anchor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill von `String.prototype.anchor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
