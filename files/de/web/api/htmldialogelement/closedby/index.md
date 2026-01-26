---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`closedBy`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces gibt an, welche Benutzereingaben verwendet werden können, um das zugehörige {{htmlelement("dialog")}}-Element zu schließen. Sie setzt oder gibt den Attributwert [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des Dialogs zurück.

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann mit einer leichten Entlassungsaktion des Benutzers, einer plattform-spezifischen Benutzereingabe oder einem vom Entwickler angegebenen Mechanismus geschlossen werden.
- `closerequest`
  - : Der Dialog kann mit einer plattform-spezifischen Benutzereingabe oder einem vom Entwickler angegebenen Mechanismus geschlossen werden.
- `none`
  - : Der Dialog kann nur mit einem vom Entwickler angegebenen Mechanismus geschlossen werden.

### Standardverhalten

Wenn das `closedby`-Attribut fehlt oder ungültig ist, wird auf den **Auto**-Zustand zurückgegriffen. Im **Auto**-Zustand:

- Wenn das `<dialog>` mit `showModal()` geöffnet wird, verhält es sich, als ob: `closedby="closerequest"`
- Wenn das `<dialog>` auf andere Weise geöffnet wird, verhält es sich, als ob: `closedby="none"`

## Beispiele

### Grundlegende Verwendung von `closedBy`

```html
<dialog closedby="any">
  <p>
    Closable using the <kbd>Esc</kbd> key, or by clicking outside the dialog
    ("light dismiss").
  </p>
</dialog>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.querySelector("dialog");
dialog.showModal();
log(`closedBy: ${dialog.closedBy}`);
```

### Ergebnis

{{ EmbedLiveSample('Basic `closedBy` usage', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}}-Element
