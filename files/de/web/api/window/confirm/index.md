---
title: "Window: confirm() Methode"
short-title: confirm()
slug: Web/API/Window/confirm
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{ApiRef("Window")}}

`window.confirm()` weist den Browser an, ein Dialogfeld mit einer optionalen Nachricht anzuzeigen und zu warten, bis der Benutzer entweder das Dialogfeld bestätigt oder abbricht.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer Tabs wechselt – kann es vorkommen, dass der Browser kein Dialogfeld anzeigt oder nicht darauf wartet, dass der Benutzer das Dialogfeld bestätigt oder abbricht.

## Syntax

```js-nolint
confirm()
confirm(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Text, den Sie im Bestätigungsdialog anzeigen möchten.

### Rückgabewert

Ein boolescher Wert, der angibt, ob OK (`true`) oder Abbrechen (`false`) ausgewählt wurde.
Wenn ein Browser Dialogfelder ignoriert, ist der zurückgegebene Wert immer `false`.

## Beispiele

### Bestätigen vor einer Aktion

Das folgende Beispiel zeigt, wie der zurückgegebene Wert eines Bestätigungsdialogs überprüft wird.
Wenn der Benutzer auf die OK-Schaltfläche klickt, rufen wir [`window.open()`](/de/docs/Web/API/Window/open) auf, und wenn der Benutzer Abbrechen klickt, geben wir etwas Text in ein {{htmlelement("pre")}}-Element aus.

```html live-sample___confirm
<button id="windowButton">Open new tab</button>
<pre id="log"></pre>
```

```js live-sample___confirm
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Do you want to open in new tab?")) {
    window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/open");
  } else {
    log.innerText = "Glad you're staying!";
  }
});
```

{{EmbedLiveSample('confirm', , , , , , , 'allow-modals allow-popups')}}

## Hinweise

Dialogfenster sind modale Fenster – sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis das Dialogfenster geschlossen ist.
Aus diesem Grund sollten Sie keine Funktion, die ein Dialogfeld oder ein modales Fenster erstellt, übermäßig verwenden.
Alternativ kann ein {{HTMLElement("dialog")}}-Element für Bestätigungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`window.alert()`](/de/docs/Web/API/Window/alert)
- [`window.prompt()`](/de/docs/Web/API/Window/prompt)
- [Niemals eine Warnung verwenden, wenn Sie Rückgängig meinen](https://alistapart.com/article/neveruseawarning/) auf A List Apart (2017)
