---
title: "Selection: Methode setBaseAndExtent()"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`setBaseAndExtent()`**-Methode der {{domxref("Selection")}}-Schnittstelle setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und jeglichen Inhalt dazwischen umfasst.

Die Anker- und Fokus-Knoten können sich in einem {{glossary("shadow tree")}} befinden, wenn dies vom Browser unterstützt wird.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameter

- `anchorNode`
  - : Der Knoten am Anfang der Auswahl.
- `anchorOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Ankerknotens, die von der Auswahl ausgeschlossen werden sollen.
    Wenn zum Beispiel der Wert 0 ist, ist der gesamte Knoten eingeschlossen.
    Ist der Wert 1, ist der gesamte Knoten außer dem ersten Kindknoten eingeschlossen.
    Und so weiter.

    Wenn `anchorNode` ein {{domxref("Text")}}-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des {{domxref("Node.textContent")}}, die von der Auswahl ausgeschlossen werden sollen.

- `focusNode`
  - : Der Knoten am Ende der Auswahl.
- `focusOffset`

  - : Die Anzahl der Kindknoten vom Anfang des Fokus-Knotens, die in die Auswahl einbezogen werden sollen.
    Wenn zum Beispiel der Wert 0 ist, ist der gesamte Knoten ausgeschlossen.
    Ist der Wert 1, ist der erste Kindknoten eingeschlossen. Und so weiter.

    Wenn `focusNode` ein {{domxref("Text")}}-Knoten ist, bezieht sich der Offset auf die Anzahl der Zeichen vom Anfang des {{domxref("Node.textContent")}}, die in die Auswahl einbezogen werden sollen.

> [!NOTE]
> Wenn die Fokusposition im Dokument vor der Ankerposition erscheint, wird die Richtung der Auswahl umgekehrt — der Cursor wird am Anfang des Textes platziert statt am Ende, was für jede darauf folgende Tastatursteuerung wichtig ist.
> Zum Beispiel würde <kbd>Shift</kbd> + <kbd>➡︎</kbd> bewirken, dass die Auswahl vom Anfang aus verkleinert wird, statt am Ende zu wachsen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `anchorOffset` größer ist als die Anzahl der Kindknoten innerhalb von `anchorNode` oder wenn `focusOffset` größer ist als die Anzahl der Kindknoten innerhalb von `focusNode`.

## Beispiele

In diesem Beispiel haben wir zwei Absätze, die Spans enthalten, von denen jeder ein einzelnes Wort enthält.
Der erste wird als `anchorNode` und der zweite als `focusNode` festgelegt.
Wir haben auch einen zusätzlichen Absatz, der zwischen den beiden Knoten liegt.

Des Weiteren haben wir zwei Formulareingaben, die es Ihnen ermöglichen, `anchorOffset` und `focusOffset` festzulegen — beide haben einen Standardwert von 0.

Wir haben auch einen Button, der beim Drücken eine Funktion aufruft, die die `setBaseAndExtent()`-Methode mit den angegebenen Offsets ausführt und die Auswahl in den Ausgabebereich am unteren Ende des HTML kopiert.

```html
<h1>setBaseAndExtent Beispiel</h1>
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
    <label for="aOffset">Anker-Offset</label>
    <input id="aOffset" name="aOffset" type="number" value="0" />
  </p>
  <p>
    <label for="fOffset">Fokus-Offset</label>
    <input id="fOffset" name="fOffset" type="number" value="0" />
  </p>
  <p><button>Auswahl erfassen</button></p>
</div>

<p><strong>Ausgabe</strong>: <span class="output"></span></p>
```

> [!NOTE]
> Es gibt absichtlich keinen [Leerraum](/de/docs/Web/API/Document_Object_Model/Whitespace) zwischen den `<p class="one">` und `<p class="two">` Anfangs-Tags und den folgenden `<span>` Anfangs-Tags — um das Vorhandensein von Textknoten zu vermeiden, die die erwartete Anzahl der Kindknoten beeinflussen würden. (Auch wenn diese Textknoten nur Leerzeichen enthalten, wären sie dennoch zusätzliche Kindknoten; erfahren Sie mehr im [`Node.firstChild`-Beispiel](/de/docs/Web/API/Node/firstChild#example)).

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

Probieren Sie das Live-Beispiel unten aus, indem Sie verschiedene Werte für die Offsets setzen, um zu sehen, wie dies die Auswahl beeinflusst.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> Sie können dieses [Beispiel auf GitHub finden](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([sehen Sie es auch live](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}
