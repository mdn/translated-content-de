---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`insertAdjacentHTML()`**-Methode der
[`Element`](/de/docs/Web/API/Element)-Schnittstelle analysiert den angegebenen Text als HTML oder XML und fügt
die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, text)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.

- `text`
  - : Der String, der als HTML oder XML analysiert und in den Baum eingefügt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein Elternelement hat oder dessen Elternelement das `Dokument`-Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` nicht einer der vier aufgeführten Werte ist.

## Beschreibung

Die `insertAdjacentHTML()`-Methode führt keine erneute Analyse des Elements durch, auf dem sie verwendet wird, und beschädigt daher nicht die vorhandenen Elemente innerhalb dieses Elements. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht sie viel schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

Wir können die möglichen Positionen für den eingefügten Inhalt wie folgt visualisieren:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

### Sicherheitsüberlegungen

Beim Einfügen von HTML in eine Seite mit `insertAdjacentHTML()` achten Sie darauf,
keine Benutzereingaben zu verwenden, die nicht entschärft wurden.

Sie sollten `insertAdjacentHTML()` nicht verwenden, wenn Sie einfachen Text einfügen. Verwenden Sie stattdessen die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft oder die
[`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)-Methode. Dies interpretiert den übergebenen Inhalt nicht als HTML, sondern fügt ihn als Rohtext ein.

## Beispiele

### Einfügen von HTML

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">Insert HTML</button>
<button id="reset">Reset</button>

<p>
  Some text, with a <code id="subject">code-formatted element</code> inside it.
</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

```js
const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>",
  );
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Ergebnis

{{EmbedLiveSample("Examples", 100, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisieren eines DOM-Baums in einen XML-String
- [Gastbeitrag von hacks.mozilla.org](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) von Henri Sivonen einschließlich Benchmark, der zeigt, dass insertAdjacentHTML in einigen Fällen deutlich schneller sein kann.
