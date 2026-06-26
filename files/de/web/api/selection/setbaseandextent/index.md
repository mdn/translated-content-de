---
title: "Selection: setBaseAndExtent() Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: fd2399f990ee990b2f162f528053d5023617cf83
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`** Methode der [`Selection`](/de/docs/Web/API/Selection) Schnittstelle legt den Bereich der Auswahl fest, der alle oder Teile von zwei angegebenen DOM-Knoten sowie alle dazwischenliegenden Inhalte umfasst.

Die Ancora- und Fokus-Knoten können sich in einem {{Glossary("shadow_tree", "Shadow-Tree")}} befinden, wenn vom Browser unterstützt.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`
  - : Die Anzahl der Kindknoten vom Beginn des Ancora-Knotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn der Wert beispielsweise 0 ist, wird der gesamte Knoten einbezogen.
    Wenn der Wert 1 ist, wird der gesamte Knoten bis auf den ersten Kindknoten einbezogen.
    Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text) Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`
  - : Die Anzahl der Kindknoten vom Beginn des Fokus-Knotens, die in die Auswahl einbezogen werden sollen.
    Wenn der Wert beispielsweise 0 ist, wird der gesamte Knoten ausgeschlossen.
    Wenn der Wert 1 ist, wird der erste Kindknoten einbezogen. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text) Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in die Auswahl einbezogen werden sollen.

> [!NOTE]
> Wenn sich die Fokus-Position vor der Ancora-Position im Dokument befindet, wird die Richtung der Auswahl umgekehrt — der Cursor wird am Anfang des Textes platziert, anstatt am Ende, was für beliebige folgende Tastaturbefehle von Bedeutung ist.
> Beispielsweise würde <kbd>Shift</kbd> + <kbd>➡︎</kbd> dazu führen, dass die Auswahl vom Anfang aus verengt wird, statt am Ende zu wachsen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer ist als die Anzahl der Kindknoten innerhalb von `anchorNode`, oder wenn `focusOffset` größer ist als die Anzahl der Kindknoten innerhalb von `focusNode`.

## Beispiele

In diesem Beispiel haben wir zwei Absätze mit Spans, von denen jeder ein einzelnes Wort enthält.
Der erste wird als `anchorNode` festgelegt und der zweite als `focusNode`.
Wir haben auch einen zusätzlichen Absatz, der zwischen den beiden Knoten liegt.

Als Nächstes haben wir zwei Formulareingaben, die Ihnen erlauben, `anchorOffset` und `focusOffset` festzulegen — beide haben standardmäßig den Wert 0.

Wir haben auch eine Schaltfläche, die beim Drücken eine Funktion aufruft, die die `setBaseAndExtent()` Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabepunkt am unteren Ende des HTML kopiert.

```html-nolint
<h1>setBaseAndExtent example</h1>
<div>
  <p class="one"><span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span></p>
  <p>MIDDLE</p>
  <p class="two"><span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span></p>
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
> Es gibt absichtlich kein [Leerzeichen](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom) zwischen den Start-Tags `<p class="one">` und `<p class="two">` und den folgenden `<span>` Start-Tags — um die Anwesenheit von Textknoten zu vermeiden, die die erwartete Anzahl der Kindknoten beeinträchtigen könnten. (Auch wenn diese Textknoten nur aus Leerzeichen bestehen würden, wären sie trotzdem zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild` Beispiel](/de/docs/Web/API/Node/firstChild#example)).

Der JavaScript-Code sieht wie folgt aus:

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

Probieren Sie das Live-Beispiel unten aus, indem Sie unterschiedliche Offset-Werte festlegen, um zu sehen, wie sich dies auf die Auswahl auswirkt.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub finden](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es sich auch live an](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
