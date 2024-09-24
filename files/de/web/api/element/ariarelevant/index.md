---
title: "Element: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/Element/ariaRelevant
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`ariaRelevant`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attributs wider, welches angibt, welche Benachrichtigungen der User Agent auslösen wird, wenn der Barrierefreiheitsbaum innerhalb eines Live-Bereichs modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollten.

## Wert

Ein String, der einen oder mehrere der folgenden Werte enthält, durch Leerzeichen getrennt:

- `"additions"`
  - : Hinzufügungen von Elementknoten innerhalb des Live-Bereichs sollten als relevant betrachtet werden.
- `"removals"`
  - : Löschungen von Knoten aus dem Live-Bereich sollten als relevant betrachtet werden.
- `"text"`
  - : Änderungen am Textinhalt bestehender Knoten sollten als relevant betrachtet werden.
- `"all"`
  - : Entspricht `"additions removals text"`.

## Beispiele

In diesem Beispiel ist das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut am Element mit der ID `text` auf "all" gesetzt. Mit `ariaRelevant` aktualisieren wir den Wert auf "text".

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-relevant="all"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaRelevant); // all
el.ariaRelevant = "text";
console.log(el.ariaRelevant); // text
```

## Browser-Kompatibilität

{{Compat}}
