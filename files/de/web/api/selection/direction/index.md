---
title: "Selection: direction-Eigenschaft"
short-title: direction
slug: Web/API/Selection/direction
l10n:
  sourceCommit: 99bd3264839f6d0b2ee5331078b5e2862cd5f0c1
---

{{APIRef("DOM")}}

Die **`direction`**-Schreibgeschützte Eigenschaft des [`Selection`](/de/docs/Web/API/Selection)-Interfaces ist ein String, der die Richtung der aktuellen Auswahl angibt.

Der Wert wird durch die Reihenfolge bestimmt, in der der Benutzer die Auswahlgrenzen festlegt.
Zum Beispiel könnte ein Benutzer eine Auswahl treffen, indem er an einem Startpunkt klickt, den Cursor zieht und an einem Endpunkt loslässt.
Befindet sich der Endpunkt später im Dokument als der Startpunkt, ist die Richtung "forwards", während die Richtung "backwards" ist, wenn der Endpunkt vor dem Startpunkt im Dokument liegt.
Der Wert ist "directionless", wenn keine Richtung durch den Benutzer impliziert wird. Beispielsweise, wenn der Benutzer die Auswahl durch Doppelklicken auf ein Wort oder Element vorgenommen hat, oder die Auswahl programmgesteuert erstellt wurde.

Die Richtung ändert sich nicht, wenn der Bereich einer Auswahl verändert wird, zum Beispiel durch Methoden wie [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode).

## Wert

Ein String, der den Typ der aktuellen Auswahl beschreibt. Mögliche Werte sind:

- `backward`
  - : Die Auswahl ist rückwärts.
- `forward`
  - : Die Auswahl ist vorwärts.
- `none`
  - : Es wurde keine Auswahl getroffen, oder die Auswahl ist richtungslos.

## Beispiele

Dieses Beispiel ermöglicht es Ihnen, zu testen, wie die `direction`-Eigenschaft funktioniert, indem die aktuelle Richtung des innerhalb eines Absatzes ausgewählten Textes protokolliert wird.

### HTML

Das HTML zeigt nur ein Absatz-Element mit etwas Text an, den Sie auswählen können.

```html
<p id="text-box">
  Select text in this paragraph to see the selection direction.
</p>
```

Beachten Sie, dass es auch ein "verstecktes" Protokollfeld (und zugehörigen Code) gibt, das dem Muster im [Leitfaden zum Anzeigen eines einzelnen Eintragsprotokolls](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#displaying_a_single_entry_log) für die Erstellung von Live-Beispielen folgt.

```css hidden
#log {
  height: 50px;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

### JavaScript

```js hidden
const logElement = document.querySelector("#log");

function log(text) {
  logElement.innerText = text;
}
```

Der Code überprüft, ob die `direction`-Eigenschaft definiert ist, und fügt in diesem Fall einen Listener für das [`selectionchange`-Ereignis](/de/docs/Web/API/Document/selectionchange_event) hinzu, welches die aktuelle Auswahl ermittelt und deren Richtung protokolliert.
Wenn die Eigenschaft nicht unterstützt wird, protokolliert der Code dies und blendet den Text für die Auswahl aus.

```js
const input = document.getElementById("text-box");

if ("direction" in Selection.prototype) {
  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    log(`Selection direction: ${selection.direction}`);
  });
} else {
  log("direction property not defined");
  input.hidden = true;
}
```

### Ergebnis

Wenn die Eigenschaft unterstützt wird, wählen Sie Text per Doppelklick und Auswahl-Ziehen-Loslassen in verschiedenen Richtungen aus.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
