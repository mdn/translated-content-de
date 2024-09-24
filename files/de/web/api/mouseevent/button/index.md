---
title: "MouseEvent: button-Eigenschaft"
short-title: button
slug: Web/API/MouseEvent/button
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`MouseEvent.button`**-Eigenschaft gibt an, welche Taste der Maus gedrückt wurde, um das Ereignis auszulösen.

Diese Eigenschaft garantiert nur, anzugeben, welche Tasten während Ereignissen das Drücken oder Loslassen einer oder mehrerer Tasten verursacht wurden. Daher ist sie für Ereignisse wie {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseout_event", "mouseout")}} oder {{domxref("Element/mousemove_event", "mousemove")}} nicht zuverlässig.

Benutzer können die Konfiguration der Tasten an ihrem Zeigegerät ändern, sodass, wenn die button-Eigenschaft eines Ereignisses null ist, dies möglicherweise nicht durch die physisch am weitesten links gelegene Taste auf dem Zeigegerät verursacht wurde; sie sollte jedoch so funktionieren, als wäre in der Standardtastenbelegung die linke Taste gedrückt worden.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der {{domxref("MouseEvent.buttons")}}-Eigenschaft, die angibt, welche Tasten für alle Maustypereignisse gedrückt sind.

## Wert

Eine Zahl, die eine bestimmte Taste repräsentiert:

- `0`: Haupttaste gedrückt, normalerweise die linke Taste oder der nicht initialisierte Zustand
- `1`: Hilfstaste gedrückt, normalerweise die Radtaste oder die mittlere Taste (falls vorhanden)
- `2`: Sekundärtaste gedrückt, normalerweise die rechte Taste
- `3`: Vierte Taste, typischerweise die _Browser zurück_-Taste
- `4`: Fünfte Taste, typischerweise die _Browser vor_-Taste

Wie oben erwähnt, können Tasten anders konfiguriert sein als in der standardmäßigen "linke zu rechte"-Anordnung. Eine für Linkshänder konfigurierte Maus kann umgekehrte Tastenaktionen haben. Einige Zeigegeräte haben nur eine Taste und verwenden Tastaturen oder andere Eingabemechanismen, um Haupt-, Sekundär-, Hilfsfunktionen usw. anzuzeigen. Andere haben möglicherweise viele Tasten, die verschiedenen Funktionen und Tastenwerten zugeordnet sind.

## Beispiele

### HTML

```html
<button id="button" oncontextmenu="event.preventDefault();">
  Click here with your mouse…
</button>
<p id="log"></p>
```

### JavaScript

```js
let button = document.querySelector("#button");
button.addEventListener("mouseup", (e) => {
  let log = document.querySelector("#log");
  switch (e.button) {
    case 0:
      log.textContent = "Left button clicked.";
      break;
    case 1:
      log.textContent = "Middle button clicked.";
      break;
    case 2:
      log.textContent = "Right button clicked.";
      break;
    default:
      log.textContent = `Unknown button code: ${e.button}`;
  }
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent")}}
