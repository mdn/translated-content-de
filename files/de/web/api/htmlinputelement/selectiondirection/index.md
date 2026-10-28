---
title: "HTMLInputElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) ist eine Zeichenfolge, die angibt, in welche Richtung der Benutzer den Text auswählt.

## Wert

Eine Zeichenfolge. Sie kann einen der folgenden Werte haben:

- `forward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Endes des Eingabetextes.
- `backward`
  - : Der Benutzer erweitert die Auswahl in Richtung des Anfangs des Eingabetextes.
- `none`
  - : Der Benutzer erweitert die Auswahl nicht.

Unter Windows gibt die Richtung die Position des Textcursors relativ zur Auswahl an: Bei einer Auswahl in Richtung „forward“ befindet sich der Textcursor am Ende der Auswahl, bei einer Auswahl in Richtung „backward“ am Anfang. Unter Windows gibt es keine Richtung „none“.

Auf dem Mac gibt die Richtung an, welches Ende der Auswahl betroffen ist, wenn der Benutzer die Auswahl mit den Pfeiltasten bei gedrückter Umschalttaste anpasst: „forward“ bedeutet, dass das Ende der Auswahl verändert wird, und „backward“, dass ihr Anfang verändert wird. „none“ ist auf dem Mac die Standardeinstellung und gibt an, dass noch keine bestimmte Richtung gewählt wurde. Der Benutzer legt die Richtung implizit fest, wenn er die Auswahl zum ersten Mal anpasst – abhängig davon, welche Pfeiltaste er verwendet.

Wenn nichts ausgewählt ist (die Auswahl besteht nur aus einem Textcursor), ist die Bestimmung des Werts von `selectionDirection` nicht einheitlich implementiert und der Wert im Allgemeinen nicht aussagekräftig.

Wird `selectionDirection` auf einen neuen Wert gesetzt, werden die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLInputElement/select_event) ausgelöst.

Die Eigenschaft `selectionDirection` gilt nur für Eingabefelder der Typen `text`, `search`, `url`, `tel` und `password`. Bei anderen Eingabetypen gibt das Lesen der Eigenschaft `null` zurück; das Setzen löst eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `InvalidStateError` aus.

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

- Eigenschaft [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
- Eigenschaft [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
- Eigenschaft [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- Methode [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
