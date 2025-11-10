---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{ APIRef("HTML DOM") }}

Die **`closedBy`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das zugehörige {{htmlelement("dialog")}}-Element zu schließen. Sie setzt oder gibt den Wert des [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attributs des Dialogs zurück.

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann durch eine leichte Abbruch-Benutzeraktion, eine plattformspezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
- `closerequest`
  - : Der Dialog kann durch eine plattformspezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
- `none`
  - : Der Dialog kann nur durch einen vom Entwickler festgelegten Mechanismus geschlossen werden.

## Beispiele

### Grundlegende Verwendung von `closedBy`

```html
<dialog open closedby="any">
  <h2>My dialog</h2>
  <p>
    Closable using the Esc key, or by clicking outside the dialog. "Light
    dismiss" behavior.
  </p>
</dialog>
```

```js
const dialogElem = document.querySelector("dialog");

// Logs "any" to the console
console.log(dialogElem.closedBy);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("dialog") }}
