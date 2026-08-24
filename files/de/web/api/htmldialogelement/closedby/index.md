---
title: "HTMLDialogElement: closedBy-Eigenschaft"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: 2b6b8ed9b2e7cd0ce3193c0716e24cd67d523c81
---

{{ APIRef("HTML DOM") }}

Die **`closedBy`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces gibt die Arten von Benutzeraktionen an, die zum Schließen des zugehörigen {{htmlelement("dialog")}}-Elements verwendet werden können. Sie setzt oder gibt den `closedby`-Attributwert des Dialogs zurück.

## Wert

Ein String; mögliche Werte sind:

- `any`
  - : Der Dialog kann durch eine leichte Abweisen-Benutzeraktion, eine plattformspezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
- `closerequest`
  - : Der Dialog kann durch eine plattformspezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
- `none`
  - : Der Dialog kann nur durch einen vom Entwickler festgelegten Mechanismus geschlossen werden.

### Standardverhalten

Wenn das `closedby`-Attribut fehlt oder ungültig ist, wird auf den **Auto**-Zustand zurückgefallen. Im **Auto**-Zustand:

- wenn das `<dialog>` mit `showModal()` geöffnet wird, verhält es sich so, als ob: `closedby="closerequest"`
- wenn das `<dialog>` auf andere Weise geöffnet wird, verhält es sich so, als ob: `closedby="none"`

## Beispiele

### Grundlegende Nutzung von `closedBy`

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
<button id="open">Open modal</button>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
const button = document.getElementById("open");
button.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
});
```

```js
const dialog = document.querySelector("dialog");
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
