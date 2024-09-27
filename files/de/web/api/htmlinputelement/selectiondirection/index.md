---
title: "HTMLInputElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist ein String, der die Richtung angibt, in die der Benutzer den Text auswählt.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `forward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Endes des Eingabetexts.
- `backward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Anfangs des Eingabetexts.
- `none`
  - : Der Benutzer erweitert die Auswahl nicht.

> [!NOTE]
> Unter Windows gibt die Richtung die Position des Cursors relativ zur Auswahl an: Eine "forward"-Auswahl hat den Cursor am Ende der Auswahl und eine "backward"-Auswahl hat den Cursor am Anfang der Auswahl. Windows hat keine "none"-Richtung.

> [!NOTE]
> Auf dem Mac gibt die Richtung an, welches Ende der Auswahl betroffen ist, wenn der Benutzer die Größe der Auswahl mit den Pfeiltasten und der Shift-Taste anpasst: Die "forward"-Richtung bedeutet, dass das Ende der Auswahl verändert wird, und die "backward"-Richtung bedeutet, dass der Anfang der Auswahl verändert wird. Die "none"-Richtung ist die Standardeinstellung auf dem Mac; sie zeigt an, dass noch keine bestimmte Richtung ausgewählt wurde. Der Benutzer legt die Richtung implizit fest, wenn er die Auswahl zum ersten Mal anpasst, basierend darauf, welche Richtungstaste verwendet wurde.

## Beispiele

### HTML

```html
<label for="selectionDirection">selectionDirection property</label>
<input type="text" id="selectionDirection" value="MDN" />
<p id="direction"></p>
```

### JavaScript

```js
const textSelectionDirection = document.querySelector("#selectionDirection");
const pConsole = document.querySelector("#direction");
pConsole.textContent =
  "Selection direction : " + textSelectionDirection.selectionDirection;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)-Eigenschaft
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)-Eigenschaft
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)-Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)-Methode
