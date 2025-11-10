---
title: "Element: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/Element/ariaRelevant
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}{{Non-standard_Header}}

Die **`ariaRelevant`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attributs wider, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollen.

## Wert

Ein String, der einen oder mehrere der folgenden Werte enthält, durch Leerzeichen getrennt:

- `"additions"`
  - : Hinzufügungen von Elementknoten innerhalb des Live-Bereichs sollten als relevant angesehen werden.
- `"removals"`
  - : Löschungen von Knoten aus dem Live-Bereich sollten als relevant angesehen werden.
- `"text"`
  - : Änderungen des Textinhalts bestehender Knoten sollten als relevant angesehen werden.
- `"all"`
  - : Entspricht `"additions removals text"`.

## Beispiele

In diesem Beispiel wird das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut auf dem Element mit der ID `text` auf "all" gesetzt. Mit `ariaRelevant` aktualisieren wir den Wert auf "text".

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
