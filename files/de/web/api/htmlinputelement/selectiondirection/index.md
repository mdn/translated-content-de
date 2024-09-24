---
title: "HTMLInputElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle ist ein String, der die Richtung angibt, in die der Benutzer den Text auswählt.

## Wert

Ein String. Er kann einen der folgenden Werte haben:

- `forward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Endes des Texteingabefeldes.
- `backward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Anfangs des Texteingabefeldes.
- `none`
  - : Der Benutzer erweitert die Auswahl nicht.

> [!NOTE]
> Unter Windows zeigt die Richtung die Position der Einfügemarke relativ zur Auswahl an: Eine "forward"-Auswahl hat die Einfügemarke am Ende der Auswahl und eine "backward"-Auswahl hat die Einfügemarke am Anfang der Auswahl. Windows kennt keine "none"-Richtung.

> [!NOTE]
> Auf dem Mac gibt die Richtung an, welches Ende der Auswahl betroffen ist, wenn der Benutzer die Größe der Auswahl mithilfe der Pfeiltasten mit der Umschalttaste als Modifizierer anpasst: Die "forward"-Richtung bedeutet, dass das Ende der Auswahl geändert wird, und die "backward"-Richtung bedeutet, dass der Anfang der Auswahl geändert wird. Die "none"-Richtung ist die Standardeinstellung auf dem Mac, sie zeigt an, dass noch keine bestimmte Richtung gewählt wurde. Der Benutzer legt die Richtung implizit fest, wenn er die Auswahl zum ersten Mal anpasst, basierend auf der verwendeten Richtungstaste.

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

- {{domxref("HTMLTextAreaElement.selectionDirection")}} Eigenschaft
- {{domxref("HTMLInputElement.selectionStart")}} Eigenschaft
- {{domxref("HTMLInputElement.selectionEnd")}} Eigenschaft
- {{domxref("HTMLInputElement.setSelectionRange")}} Methode
