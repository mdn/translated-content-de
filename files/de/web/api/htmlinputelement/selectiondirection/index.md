---
title: "HTMLInputElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{ApiRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist ein String, der die Richtung angibt, in der der Benutzer den Text auswählt.

## Wert

Ein String. Er kann einen der folgenden Werte haben:

- `forward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Endes des Texteingabefelds.
- `backward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Anfangs des Texteingabefelds.
- `none`
  - : Der Benutzer erweitert die Auswahl nicht.

> [!NOTE]
> Unter Windows zeigt die Richtung die Position des Cursors relativ zur Auswahl an: Eine "forward"-Auswahl hat den Cursor am Ende der Auswahl und eine "backward"-Auswahl hat den Cursor am Anfang der Auswahl. Windows hat keine "none"-Richtung.

> [!NOTE]
> Auf einem Mac zeigt die Richtung an, welches Ende der Auswahl betroffen ist, wenn der Benutzer die Größe der Auswahl mit den Pfeiltasten in Kombination mit der Umschalttaste anpasst: Die "forward"-Richtung bedeutet, dass das Ende der Auswahl geändert wird, und die "backward"-Richtung bedeutet, dass der Anfang der Auswahl geändert wird. Die "none"-Richtung ist die Standardeinstellung auf dem Mac, sie zeigt an, dass noch keine bestimmte Richtung ausgewählt wurde. Der Benutzer legt die Richtung implizit fest, wenn er die Auswahl das erste Mal anpasst, basierend darauf, welche Richtungstaste verwendet wurde.

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
pConsole.textContent = `Selection direction : ${textSelectionDirection.selectionDirection}`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection) Eigenschaft
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) Eigenschaft
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) Eigenschaft
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) Methode
