---
title: "Selection: direction-Eigenschaft"
short-title: direction
slug: Web/API/Selection/direction
l10n:
  sourceCommit: 99bd3264839f6d0b2ee5331078b5e2862cd5f0c1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`direction`**-Eigenschaft der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle ist ein String, der die Richtung der aktuellen Auswahl angibt.

Der Wert wird durch die Reihenfolge bestimmt, in der der Benutzer die Begrenzungspunkte der Auswahl festlegt.
Zum Beispiel könnte ein Benutzer eine Auswahl treffen, indem er auf einen Startpunkt klickt, den Cursor zieht und an einem Endpunkt loslässt.
Wenn der Endpunkt später im Dokument liegt als der Startpunkt, ist die Richtung "forwards", während die Richtung "backwards" ist, wenn der Endpunkt vor dem Startpunkt liegt.
Der Wert ist "directionless" (richtungslos), wenn keine Richtung vom Benutzer angegeben wird. Zum Beispiel, wenn der Benutzer die Auswahl durch einen Doppelklick auf ein Wort oder Element getroffen hat oder die Auswahl programmgesteuert erfolgte.

Die Richtung ändert sich nicht, wenn der Bereich der Auswahl verändert wird, zum Beispiel mit Methoden wie [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode).

## Wert

Ein String, der die Art der aktuellen Auswahl beschreibt.
Mögliche Werte sind:

- `backward`
  - : Die Auswahl ist rückwärts.
- `forward`
  - : Die Auswahl ist vorwärts.
- `none`
  - : Es wurde keine Auswahl getroffen, oder die Auswahl ist richtungslos.

## Beispiele

Dieses Beispiel ermöglicht es Ihnen zu testen, wie die `direction`-Eigenschaft funktioniert, indem es die aktuelle Richtung des innerhalb eines Absatzes ausgewählten Textes protokolliert.

### HTML

Das HTML zeigt nur ein Absatz-Element mit etwas Text, den Sie auswählen können.

```html
<p id="text-box">
  Select text in this paragraph to see the selection direction.
</p>
```

Beachten Sie, dass es auch ein "verborgenes" Protokollierungsfeld (und zugehörigen Code) gibt, das dem Muster im [Leitfaden zur Anzeige eines einzelnen Protokolleintrags](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#displaying_a_single_entry_log) für das Schreiben von Live-Beispielen folgt.

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

Der Code überprüft, ob die `direction`-Eigenschaft definiert ist, und fügt in diesem Fall einen Listener für das [`selectionchange` Ereignis](/de/docs/Web/API/Document/selectionchange_event) hinzu, der die aktuelle Auswahl erfasst und ihre Richtung protokolliert.
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

Wenn die Eigenschaft unterstützt wird, wählen Sie Text aus, indem Sie doppelklicken, und ziehen Sie die Auswahl in verschiedene Richtungen.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
