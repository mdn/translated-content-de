---
title: "Selection: setBaseAndExtent() Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`** Methode des [`Selection`](/de/docs/Web/API/Selection)-Interfaces setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten sowie jeglichen Inhalt zwischen ihnen umfasst.

Die Anker- und Fokus-Knoten können sich in einem [Shadow-Baum](/de/docs/Glossary/Shadow_tree) befinden, wenn dies vom Browser unterstützt wird.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`
  - : Die Anzahl der Kindknoten vom Anfang des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn der Wert 0 ist, wird der gesamte Knoten eingeschlossen.
    Wenn der Wert 1 ist, wird der ganze Knoten minus des ersten Kindknotens eingeschlossen. Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`
  - : Die Anzahl der Kindknoten vom Anfang des Fokus-Knotens, die in die Auswahl einbezogen werden sollen.
    Wenn der Wert 0 ist, wird der gesamte Knoten ausgeschlossen.
    Wenn der Wert 1 ist, wird der erste Kindknoten einbezogen. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in die Auswahl einbezogen werden sollen.

> [!NOTE]
> Wenn die Fokusposition vor der Ankerposition im Dokument erscheint, wird die Richtung der Auswahl umgekehrt — der Cursor wird an den Anfang des Textes statt ans Ende gesetzt, was für nachfolgende Tastaturbefehle wichtig sein kann.
> Zum Beispiel würde <kbd>Shift</kbd> + <kbd>➡︎</kbd> die Auswahl von Anfang an verkleinern, anstatt sie am Ende zu erweitern.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer ist als die Anzahl der Kindknoten innerhalb von `anchorNode`, oder wenn `focusOffset` größer ist als die Anzahl der Kindknoten innerhalb von `focusNode`.

## Beispiele

In diesem Beispiel haben wir zwei Absätze, die Spans enthalten, von denen jeder ein einziges Wort enthält.
Der erste wird als `anchorNode` und der zweite als `focusNode` gesetzt.
Zwischen den beiden Knoten befindet sich ein zusätzlicher Absatz.

Außerdem haben wir zwei Formulareingaben, die es Ihnen ermöglichen, `anchorOffset` und `focusOffset` festzulegen — beide haben standardmäßig den Wert 0.

Wir haben auch einen Button, der bei Betätigung eine Funktion aufruft, die die `setBaseAndExtent()`-Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabebereich am Ende des HTML-Dokuments kopiert.

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
> Es gibt absichtlich keinen [Leerraum](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom) zwischen den Start-Tags `<p class="one">` und `<p class="two">` und den darauf folgenden `<span>`-Start-Tags — um das Vorhandensein von Textknoten zu vermeiden, die die erwartete Anzahl der Kindknoten beeinträchtigen würden. (Auch wenn diese Textknoten nur aus Leerzeichen bestehen, wären sie immer noch zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild`-Beispiel](/de/docs/Web/API/Node/firstChild#example)).

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

Probieren Sie das folgende Live-Beispiel aus, indem Sie verschiedene Offset-Werte setzen, um zu sehen, wie sich dies auf die Auswahl auswirkt.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) finden ([sehen Sie es auch live](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
