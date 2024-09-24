---
title: "Selection: enthältNode() Methode"
short-title: enthältNode()
slug: Web/API/Selection/containsNode
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ ApiRef("DOM") }}

Die **`Selection.containsNode()`** Methode gibt an, ob ein angegebenes Knoten Teil der Auswahl ist.

## Syntax

```js-nolint
containsNode(node)
containsNode(node)
containsNode(node, partialContainment)
```

### Parameter

- `node`
  - : Der Knoten, nach dem in der Auswahl gesucht wird.
- `partialContainment` {{optional_inline}}
  - : Wenn `true`, gibt `containsNode()` `true` zurück, wenn ein Teil des Knotens Teil der Auswahl ist. Wenn `false`, gibt `containsNode()` nur `true` zurück, wenn der gesamte Knoten Teil der Auswahl ist. Wenn nicht angegeben, wird der Standardwert `false` verwendet.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Knoten Teil der Auswahl ist, andernfalls `false`.

## Beispiele

### Auswahl überprüfen

Dieses Beispiel prüft, ob irgendetwas innerhalb des Body-Elements ausgewählt ist.

```js
console.log(window.getSelection().containsNode(document.body, true));
```

### Das versteckte Wort finden

In diesem Beispiel erscheint eine Nachricht, wenn Sie das geheime Wort auswählen. Es verwendet
{{domxref("EventTarget/addEventListener", "addEventListener()")}}, um auf
{{domxref("Document/selectionchange_event", "selectionchange")}} Ereignisse zu reagieren.

#### HTML

```html
<p>Können Sie das geheime Wort finden?</p>
<p>
  Hmm, wo könnte <span id="secret" style="color:transparent">SECRET</span>
  es sein?
</p>
<p id="win" hidden>Sie haben es gefunden!</p>
```

#### JavaScript

```js
const secret = document.getElementById("secret");
const win = document.getElementById("win");

// Lauscht auf Auswahländerungen
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

- {{domxref("Selection")}}, das Interface, zu dem es gehört.
