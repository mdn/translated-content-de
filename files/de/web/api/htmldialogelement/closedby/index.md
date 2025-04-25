---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: 2dfac351d5f732bb9b61ec3b506d725e01fcc1bf
---

{{ APIRef("HTML DOM") }}

Die **`closedBy`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces gibt an, welche Arten von Benutzeraktionen verwendet werden können, um das zugehörige {{htmlelement("dialog")}}-Element zu schließen. Sie setzt oder gibt den Wert des [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attributs des Dialogs zurück.

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann mit einer leichten Abbruch-Benutzeraktion, einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler festgelegten Mechanismus geschlossen werden.
- `closerequest`
  - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler festgelegten Mechanismus geschlossen werden.
- `none`
  - : Der Dialog kann nur mit einem vom Entwickler festgelegten Mechanismus geschlossen werden.

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
