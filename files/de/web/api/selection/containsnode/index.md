---
title: "Selection: containsNode()-Methode"
short-title: containsNode()
slug: Web/API/Selection/containsNode
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ ApiRef("DOM") }}

Die **`Selection.containsNode()`**-Methode zeigt an, ob ein bestimmter Knoten Teil der Auswahl ist.

## Syntax

```js-nolint
containsNode(node)
containsNode(node)
containsNode(node, partialContainment)
```

### Parameter

- `node`
  - : Der Knoten, der in der Auswahl gesucht wird.
- `partialContainment` {{optional_inline}}
  - : Wenn `true`, gibt `containsNode()` `true` zurück, wenn ein Teil des Knotens Teil der Auswahl ist. Wenn `false`, gibt `containsNode()` nur dann `true` zurück, wenn der gesamte Knoten Teil der Auswahl ist. Wenn nicht angegeben, wird der Standardwert `false` verwendet.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Knoten Teil der Auswahl ist, und `false` andernfalls.

## Beispiele

### Auswahl prüfen

Dieses Snippet überprüft, ob etwas innerhalb des `<body>`-Elements ausgewählt ist.

```js
console.log(window.getSelection().containsNode(document.body, true));
```

### Das versteckte Wort finden

In diesem Beispiel erscheint eine Nachricht, wenn Sie das geheime Wort auswählen. Es verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignisse zu prüfen.

#### HTML

```html
<p>Can you find the secret word?</p>
<p>
  Hmm, where <span id="secret" style="color:transparent">SECRET</span> could it
  be?
</p>
<p id="win" hidden>You found it!</p>
```

#### JavaScript

```js
const secret = document.getElementById("secret");
const win = document.getElementById("win");

// Listen for selection changes
document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  const found = selection.containsNode(secret);

  win.toggleAttribute("hidden", !found);
});
```

#### Ergebnis

{{EmbedLiveSample("Find_the_hidden_word")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der sie gehört.
