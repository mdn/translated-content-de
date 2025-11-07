---
title: "Auswahl: setBaseAndExtent()-Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`**-Methode der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und alle dazwischen liegenden Inhalte umfasst.

Die Anker- und Fokus-Knoten können sich in einem {{Glossary("shadow_tree", "Shadow Tree")}} befinden, wenn dies vom Browser unterstützt wird.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn der Wert beispielsweise 0 ist, wird der ganze Knoten einbezogen.
    Wenn der Wert 1 ist, wird der ganze Knoten minus des ersten Kindknotens einbezogen.
    Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Fokus-Knotens, die in die Auswahl einbezogen werden sollen.
    Wenn der Wert beispielsweise 0 ist, wird der ganze Knoten ausgeschlossen.
    Wenn der Wert 1 ist, wird der erste Kindknoten einbezogen. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in die Auswahl einbezogen werden sollen.

> [!NOTE]
> Wenn die Fokus-Position im Dokument vor der Anker-Position erscheint, wird die Richtung der Auswahl umgekehrt — der Caret wird am Anfang des Textes statt am Ende platziert, was wichtig für alle möglicherweise folgenden Tastaturbefehle ist.
> Beispielsweise würde <kbd>Umschalt</kbd> + <kbd>➡︎</kbd> dazu führen, dass die Auswahl vom Anfang schmaler wird, anstatt am Ende zu wachsen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer als die Anzahl der Kindknoten innerhalb von `anchorNode` ist oder wenn `focusOffset` größer als die Anzahl der Kindknoten innerhalb von `focusNode` ist.

## Beispiele

In diesem Beispiel haben wir zwei Absätze mit Spans, die jeweils ein einzelnes Wort enthalten.
Der erste wird als `anchorNode` und der zweite als `focusNode` gesetzt.
Wir haben auch einen zusätzlichen Absatz, der zwischen den beiden Knoten sitzt.

Außerdem haben wir zwei Formulareingaben, die es Ihnen erlauben, den `anchorOffset` und `focusOffset` zu setzen — beide haben einen Standardwert von 0.

Wir haben auch eine Schaltfläche, die, wenn sie gedrückt wird, eine Funktion aufruft, die die `setBaseAndExtent()`-Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabebereich am unteren Rand des HTML kopiert.

```html
<h1>setBaseAndExtent example</h1>
<div>
  <p class="one">
    <span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span>
  </p>
  <p>MIDDLE</p>
  <p class="two">
    <span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span>
  </p>
</div>

<div>
  <p>
    <label for="aOffset">Anchor offset</label>
    <input id="aOffset" name="aOffset" type="number" value="0" />
  </p>
  <p>
    <label for="fOffset">Focus offset</label>
    <input id="fOffset" name="fOffset" type="number" value="0" />
  </p>
  <p><button>Capture selection</button></p>
</div>

<p><strong>Output</strong>: <span class="output"></span></p>
```

> [!NOTE]
> Es gibt absichtlich kein [Leerzeichen](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom) zwischen den `<p class="one">`- und `<p class="two">`-Start-Tags und den `<span>`-Start-Tags, die ihnen folgen — um die Präsenz von Textknoten zu vermeiden, die die Anzahl der erwarteten Kindknoten beeinflussen würden. (Obwohl diese Textknoten nur aus Leerzeichen bestehen würden, wären sie dennoch zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild`-Beispiel](/de/docs/Web/API/Node/firstChild#example)).

Das JavaScript sieht wie folgt aus:

```js
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const aOffset = document.getElementById("aOffset");
const fOffset = document.getElementById("fOffset");

const button = document.querySelector("button");

const output = document.querySelector(".output");

let selection;

button.onclick = () => {
  try {
    selection = document.getSelection();
    selection.setBaseAndExtent(one, aOffset.value, two, fOffset.value);
    const text = selection.toString();
    output.textContent = text;
  } catch (e) {
    output.textContent = e.message;
  }
};
```

Spielen Sie mit dem Live-Beispiel unten, indem Sie verschiedene Offset-Werte einstellen, um zu sehen, wie sich dies auf die Auswahl auswirkt.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub finden](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es sich auch live an](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
