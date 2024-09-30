---
title: "Selection: setBaseAndExtent() Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`** Methode des [`Selection`](/de/docs/Web/API/Selection) Interfaces setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und jegliche Inhalte dazwischen enthält.

Die Anker- und Fokus-Knoten können sich in einem [Schattenbaum](/de/docs/Glossary/shadow_tree) befinden, wenn dieser vom Browser unterstützt wird.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`

  - : Die Anzahl der Kindknoten vom Beginn des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn der Wert z.B. 0 ist, ist der gesamte Knoten eingeschlossen.
    Ist der Wert 1, ist der gesamte Knoten minus dem ersten Kindknoten eingeschlossen.
    Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text) Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Beginn des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`

  - : Die Anzahl der Kindknoten vom Beginn des Fokus-Knotens, die in der Auswahl enthalten sein sollen.
    Wenn der Wert z.B. 0 ist, ist der gesamte Knoten ausgeschlossen.
    Ist der Wert 1, ist der erste Kindknoten eingeschlossen. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text) Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Beginn des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in der Auswahl enthalten sein sollen.

> [!NOTE]
> Wenn die Fokusposition im Dokument vor der Ankerposition erscheint, wird die Richtung der Auswahl umgekehrt — der Cursor wird am Anfang des Textes statt am Ende platziert, was für alle folgenden Tastaturbefehle wichtig ist.
> Beispielsweise würde <kbd>Shift</kbd> + <kbd>➡︎</kbd> dazu führen, dass die Auswahl vom Anfang her verengt statt am Ende erweitert wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer ist als die Anzahl der Kindknoten innerhalb von `anchorNode`, oder wenn `focusOffset` größer ist als die Anzahl der Kindknoten innerhalb von `focusNode`.

## Beispiele

In diesem Beispiel haben wir zwei Absätze, die jeweils ein <span> enthalten, das ein einziges Wort enthält.
Der erste ist als `anchorNode` und der zweite als `focusNode` festgelegt.
Wir haben auch einen zusätzlichen Absatz, der zwischen den beiden Knoten liegt.

Des Weiteren gibt es zwei Formulareingaben, mit denen Sie den `anchorOffset` und `focusOffset` festlegen können — beide haben einen Standardwert von 0.

Ebenfalls gibt es einen Button, der beim Drücken eine Funktion aufruft, die die `setBaseAndExtent()` Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabepunkt am Ende des HTML kopiert.

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
> Es gibt absichtlich keinen [Leerraum](/de/docs/Web/API/Document_Object_Model/Whitespace) zwischen den `<p class="one">` und `<p class="two">` Start-Tags und den darauf folgenden `<span>` Start-Tags — um die Anwesenheit von Textknoten zu vermeiden, die die erwartete Anzahl von Kindknoten beeinflussen könnten. (Auch wenn diese Textknoten nur Leerzeichen enthalten würden, wären sie dennoch zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild` Beispiel](/de/docs/Web/API/Node/firstChild#example)).

Das JavaScript sieht folgendermaßen aus:

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

Spielen Sie mit dem Live-Beispiel unten und ändern Sie die Offset-Werte, um zu sehen, wie sich dies auf die Auswahl auswirkt.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub finden](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es sich auch live an](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
