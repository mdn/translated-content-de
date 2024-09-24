---
title: "Element: Methode insertAdjacentHTML()"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`insertAdjacentHTML()`** Methode des
{{domxref("Element")}} Interfaces analysiert den angegebenen Text als HTML oder XML und fügt die resultierenden Knoten an einer bestimmten Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, text)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:

    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.
    - `"afterbegin"`
      - : Direkt im Element, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt im Element, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.

- `text`
  - : Der String, der als HTML oder XML analysiert und in den Baum eingefügt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann einen {{domxref("DOMException")}} der folgenden Typen auslösen:

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein übergeordnetes Element hat oder sein übergeordnetes Element das `Document`-Objekt ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `position` nicht einer der vier aufgelisteten Werte ist.

## Beschreibung

Die `insertAdjacentHTML()` Methode analysiert das Element, auf das sie angewendet wird, nicht erneut und beschädigt daher nicht die darin enthaltenen bestehenden Elemente. Dies vermeidet den zusätzlichen Schritt der Serialisierung, was es viel schneller macht als die direkte Manipulation von {{domxref("Element.innerHTML", "innerHTML")}}.

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

Beim Einfügen von HTML in eine Seite mittels `insertAdjacentHTML()` sollten Sie darauf achten, dass keine nicht escape-benutzereingaben verwendet werden.

Sie sollten `insertAdjacentHTML()` nicht verwenden, wenn Sie einfachen
Text einfügen möchten. Verwenden Sie stattdessen die {{domxref("Node.textContent")}} Eigenschaft oder die
{{domxref("Element.insertAdjacentText()")}} Methode. Diese interpretiert den übergebenen Inhalt nicht als HTML, sondern fügt ihn als Rohtext ein.

## Beispiele

### HTML einfügen

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

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: Serialisiert einen DOM-Baum in einen XML-String
- [hacks.mozilla.org Gastbeitrag](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) von Henri Sivonen, der einen Benchmark enthält, der zeigt,
  dass insertAdjacentHTML in einigen Fällen wesentlich schneller sein kann.
