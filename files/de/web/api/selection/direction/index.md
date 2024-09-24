---
title: "Selection: direction-Eigenschaft"
short-title: direction
slug: Web/API/Selection/direction
l10n:
  sourceCommit: 99bd3264839f6d0b2ee5331078b5e2862cd5f0c1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`direction`**-Eigenschaft der {{domxref("Selection")}}-Schnittstelle ist ein Zeichenfolgenwert, der die Richtung der aktuellen Auswahl angibt.

Der Wert wird durch die Reihenfolge bestimmt, in der der Benutzer die Grenzpunkte der Auswahl wählt.
Zum Beispiel kann ein Benutzer eine Auswahl treffen, indem er einen Start-Grenzpunkt anklickt, den Cursor zieht und an einem End-Grenzpunkt loslässt.
Wenn der End-Grenzpunkt später im Dokument liegt als der Startpunkt, ist die Richtung "forwards", während die Richtung "backwards" ist, wenn der Endpunkt vor dem Startpunkt im Dokument liegt.
Der Wert ist "directionless", wenn keine Richtung durch den Benutzer angedeutet wird. Zum Beispiel, wenn der Benutzer die Auswahl durch Doppelklicken auf ein Wort oder Element vorgenommen hat oder die Auswahl programmgesteuert erfolgte.

Die Richtung ändert sich nicht, wenn der Bereich einer Auswahl verändert wird, beispielsweise durch Methoden wie {{DOMxRef("Range.selectNode()")}}.

## Wert

Eine Zeichenfolge, die den Typ der aktuellen Auswahl beschreibt.
Mögliche Werte sind:

- `backward`
  - : Die Auswahl ist rückwärts.
- `forward`
  - : Die Auswahl ist vorwärts.
- `none`
  - : Es wurde keine Auswahl getroffen, oder die Auswahl ist richtungslos.

## Beispiele

Dieses Beispiel ermöglicht es Ihnen zu testen, wie die `direction`-Eigenschaft funktioniert, indem die aktuelle Richtung des innerhalb eines Absatzes ausgewählten Textes protokolliert wird.

### HTML

Das HTML zeigt einfach ein Absatz-Element mit Text, den Sie auswählen können.

```html
<p id="text-box">
  Wählen Sie Text in diesem Absatz aus, um die Auswahlrichtung zu sehen.
</p>
```

Beachten Sie, dass es auch ein "verstecktes" Protokollfeld (und zugehöriger Code) gibt, das dem Muster im [Anzeige eines einzelnen Eintragsprotokolls](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#displaying_a_single_entry_log) Leitfaden zum Schreiben von Live-Beispielen folgt.

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

Der Code überprüft, ob die `direction`-Eigenschaft definiert ist, und fügt in diesem Fall einen Listener für das [`selectionchange`-Ereignis](/de/docs/Web/API/Document/selectionchange_event) hinzu, der die aktuelle Auswahl erhält und deren Richtung protokolliert.
Wenn die Eigenschaft nicht unterstützt wird, protokolliert der Code dies und blendet den Text zur Auswahl aus.

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

Wenn die Eigenschaft unterstützt wird, wählen Sie den Text mit Doppelklick und wählen-ziehen-loslassen in verschiedenen Richtungen aus.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}
