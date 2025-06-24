---
title: "Auswahl: setBaseAndExtent()-Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`**-Methode des [`Selection`](/de/docs/Web/API/Selection)-Interfaces setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten sowie sämtliche dazwischen liegenden Inhalte umfasst.

Die Anker- und Fokus-Knoten können sich in einem {{Glossary("shadow_tree", "Shadow-Baum")}} befinden, wenn sie vom Browser unterstützt werden.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`

  - : Die Anzahl von untergeordneten Knoten vom Beginn des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen. Wenn der Wert beispielsweise 0 ist, ist der gesamte Knoten enthalten. Wenn der Wert 1 ist, ist der gesamte Knoten minus dem ersten untergeordneten Knoten enthalten. Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl von Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`

  - : Die Anzahl von untergeordneten Knoten vom Beginn des Fokus-Knotens, die in die Auswahl aufgenommen werden sollen. Wenn der Wert beispielsweise 0 ist, wird der gesamte Knoten ausgeschlossen. Wenn der Wert 1 ist, ist der erste untergeordnete Knoten enthalten. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl von Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in die Auswahl aufgenommen werden sollen.

> [!NOTE]
> Wenn die Fokus-Position vor der Anker-Position im Dokument erscheint, wird die Richtung der Auswahl umgekehrt — der Cursor wird am Anfang des Textes platziert und nicht am Ende, was für jede folgende Tastenkombination von Bedeutung ist. Ein Beispiel wäre <kbd>Umschalt</kbd> + <kbd>➡︎</kbd>, wodurch die Auswahl am Anfang verengt anstatt am Ende erweitert wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer als die Anzahl der untergeordneten Knoten innerhalb von `anchorNode` ist oder wenn `focusOffset` größer als die Anzahl der untergeordneten Knoten innerhalb von `focusNode` ist.

## Beispiele

In diesem Beispiel haben wir zwei Absätze mit Spans, von denen jeder ein einzelnes Wort enthält. Der erste wird als `anchorNode` festgelegt und der zweite als `focusNode`. Wir haben auch einen zusätzlichen Absatz, der zwischen den beiden Knoten sitzt.

Weiterhin haben wir zwei Formulareingaben, die es Ihnen ermöglichen, `anchorOffset` und `focusOffset` zu setzen — beide haben einen Standardwert von 0.

Es gibt auch eine Schaltfläche, die, wenn sie gedrückt wird, eine Funktion aufruft, die die `setBaseAndExtent()`-Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabepunkt am unteren Ende des HTML kopiert.

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
> Zwischen den Start-Tags `<p class="one">` und `<p class="two">` und den ihnen folgenden `<span>`-Start-Tags gibt es absichtlich kein [Leerzeichen](/de/docs/Web/API/Document_Object_Model/Whitespace) — um die Anwesenheit von Textknoten zu vermeiden, die die erwartete Anzahl von untergeordneten Knoten beeinflussen würden. (Auch wenn diese Textknoten nur aus Leerzeichen bestehen würden, wären sie trotzdem zusätzliche untergeordnete Knoten; erfahren Sie mehr aus dem [`Node.firstChild` Beispiel](/de/docs/Web/API/Node/firstChild#example).)

Der JavaScript-Code sieht folgendermaßen aus:

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

Probieren Sie das Live-Beispiel unten aus, indem Sie verschiedene Offset-Werte einstellen, um zu sehen, wie dies die Auswahl beeinflusst.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie finden dieses [Beispiel auf GitHub](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es auch live](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
