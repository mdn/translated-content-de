---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{ APIRef("HTML DOM") }}

Die **`closedBy`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces gibt die Arten von Benutzeraktionen an, mit denen das zugehörige {{htmlelement("dialog")}}-Element geschlossen werden kann. Sie setzt oder gibt den Wert des [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attributs des Dialogs zurück.

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann durch eine leichte Löschaktion des Benutzers, eine plattformabhängige Benutzeraktion oder einen entwicklerspezifischen Mechanismus geschlossen werden.
- `closerequest`
  - : Der Dialog kann durch eine plattformabhängige Benutzeraktion oder einen entwicklerspezifischen Mechanismus geschlossen werden.
- `none`
  - : Der Dialog kann nur durch einen entwicklerspezifischen Mechanismus geschlossen werden.

### Standardverhalten

Wenn das `closedby`-Attribut fehlt oder ungültig ist, wird auf den **Auto**-Zustand zurückgegriffen. Im **Auto**-Zustand:

- wenn das `<dialog>` mit `showModal()` geöffnet wird, verhält es sich, als ob: `closedby="closerequest"`
- wenn das `<dialog>` auf andere Weise geöffnet wird, verhält es sich, als ob: `closedby="none"`

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
