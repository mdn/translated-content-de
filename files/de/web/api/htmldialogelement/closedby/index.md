---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

Die **`closedBy`**-Eigenschaft der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das zugehörige {{htmlelement("dialog")}}-Element zu schließen. Sie setzt oder gibt den Attributwert `closedby` des Dialogs zurück. ([`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby))

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann mit einer "Light Dismiss"-Benutzeraktion, einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler festgelegten Mechanismus geschlossen werden.
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
