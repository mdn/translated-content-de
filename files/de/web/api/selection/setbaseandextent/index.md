---
title: "Selection: setBaseAndExtent() Methode"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`** Methode der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle legt die Auswahl als einen Bereich fest, der alle oder Teile von zwei angegebenen DOM-Knoten sowie jeglichen Inhalt, der sich dazwischen befindet, umfasst.

Die Anker- und Fokusknoten können sich in einem [Shadow-Baum](/de/docs/Glossary/shadow_tree) befinden, falls dies vom Browser unterstützt wird.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn der Wert zum Beispiel 0 ist, wird der gesamte Knoten eingeschlossen.
    Wenn der Wert 1 ist, wird der gesamte Knoten minus dem ersten Kindknoten eingeschlossen.
    Und so weiter.

    Wenn `anchorNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Fokusknotens, die in die Auswahl eingeschlossen werden sollen.
    Wenn der Wert zum Beispiel 0 ist, wird der ganze Knoten ausgeschlossen.
    Wenn der Wert 1 ist, wird der erste Kindknoten eingeschlossen. Und so weiter.

    Wenn `focusNode` ein [`Text`](/de/docs/Web/API/Text)-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des [`Node.textContent`](/de/docs/Web/API/Node/textContent), die in die Auswahl eingeschlossen werden sollen.

> [!NOTE]
> Wenn die Fokusposition im Dokument vor der Ankerposition liegt, wird die Richtung der Auswahl umgekehrt — der Cursor wird am Anfang des Textes statt am Ende platziert, was für jegliche nachfolgende Tastaturbefehle von Bedeutung ist.
> Zum Beispiel würde <kbd>Shift</kbd> + <kbd>➡︎</kbd> die Auswahl vom Anfang verengen anstatt sie am Ende zu erweitern.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchorOffset` größer ist als die Anzahl der Kindknoten innerhalb des `anchorNode`, oder wenn `focusOffset` größer ist als die Anzahl der Kindknoten innerhalb des `focusNode`.

## Beispiele

In diesem Beispiel haben wir zwei Absätze mit jeweils einem `span`, das ein einzelnes Wort enthält.
Der erste wird als `anchorNode` und der zweite als `focusNode` gesetzt.
Es gibt außerdem einen weiteren Absatz, der zwischen den beiden Knoten liegt.

Darüber hinaus haben wir zwei Formulareingaben, die es Ihnen ermöglichen, `anchorOffset` und `focusOffset` zu setzen — beide haben einen Standardwert von 0.

Wir haben auch einen Knopf, der, wenn gedrückt, eine Funktion aufruft, die die `setBaseAndExtent()`-Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabepunkt am unteren Ende des HTML kopiert.

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
> Es gibt absichtlich keinen [Leerraum](/de/docs/Web/API/Document_Object_Model/Whitespace) zwischen den Start-Tags `<p class="one">` und `<p class="two">` und den danach folgenden `<span>`-Starttags — um das Vorhandensein von Textknoten zu vermeiden, die die erwartete Anzahl von Kindknoten beeinflussen würden. (Selbst wenn diese Textknoten nur Leerraum enthalten würden, wären sie dennoch zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild`-Beispiel](/de/docs/Web/API/Node/firstChild#example)).

Das JavaScript sieht so aus:

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

Probieren Sie das Live-Beispiel unten aus, indem Sie verschiedene Offset-Werte einstellen, um zu sehen, wie sich das auf die Auswahl auswirkt.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub finden](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es auch live](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
