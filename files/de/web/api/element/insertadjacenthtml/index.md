---
title: "Element: insertAdjacentHTML()-Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`insertAdjacentHTML()`**-Methode des
[`Element`](/de/docs/Web/API/Element)-Interfaces parst den angegebenen Text als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, text)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zu dem Element angibt. Muss einer der folgenden Strings sein:

    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element sich im DOM-Baum befindet und ein Elternelement hat.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element sich im DOM-Baum befindet und ein Elternelement hat.

- `text`
  - : Der zu parschende String als HTML oder XML, der in den Baum eingefügt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) von einem der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein Elternelement hat oder sein Elternelement das `Document`-Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn `position` nicht einer der vier aufgeführten Werte ist.

## Beschreibung

Die `insertAdjacentHTML()`-Methode parst das Element, auf dem sie angewendet wird, nicht erneut und beschädigt somit nicht die vorhandenen Elemente innerhalb dieses Elements. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht es viel schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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

Beim Einfügen von HTML in eine Seite mit `insertAdjacentHTML()` sollte darauf geachtet werden,
dass keine nicht escapte Benutzereingabe verwendet wird.

Sie sollten `insertAdjacentHTML()` nicht verwenden, um einfachen
Text einzufügen. Verwenden Sie stattdessen die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft oder die
[`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)-Methode. Diese interpretiert den übergebenen Inhalt
nicht als HTML, sondern fügt ihn als Rohtext ein.

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
- [hacks.mozilla.org Gastbeitrag](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) von Henri Sivonen, der einen Benchmark enthält, der zeigt,
  dass insertAdjacentHTML in einigen Fällen deutlich schneller sein kann.
