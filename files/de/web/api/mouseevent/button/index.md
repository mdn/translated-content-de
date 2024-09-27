---
title: "MouseEvent: button-Eigenschaft"
short-title: button
slug: Web/API/MouseEvent/button
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.button`** zeigt an, welcher Knopf auf der Maus gedrückt wurde, um das Ereignis auszulösen.

Diese Eigenschaft garantiert nur, anzugeben, welche Tasten während der Ereignisse gedrückt sind, die durch das Drücken oder Loslassen einer oder mehrerer Tasten verursacht werden.
Daher ist sie nicht zuverlässig für Ereignisse wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mousemove`](/de/docs/Web/API/Element/mousemove_event).

Benutzer können die Konfiguration der Tasten auf ihrem Zeigegerät ändern, sodass, wenn die button-Eigenschaft eines Ereignisses Null ist, dies möglicherweise nicht von der physisch am weitesten links befindlichen Taste auf dem Zeigegerät verursacht wurde; jedoch sollte es sich verhalten, als ob die linke Taste im Standardtastenlayout geklickt wurde.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der Eigenschaft [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons), die angibt, welche Tasten für alle Mausereignistypen gedrückt sind.

## Wert

Eine Zahl, die einen bestimmten Knopf darstellt:

- `0`: Haupttaste gedrückt, normalerweise die linke Taste oder der nicht initialisierte Zustand
- `1`: Hilfstaste gedrückt, normalerweise die Radtaste oder die mittlere Taste (falls vorhanden)
- `2`: Sekundärtaste gedrückt, normalerweise die rechte Taste
- `3`: Vierte Taste, typischerweise die _Browser Zurück_-Taste
- `4`: Fünfte Taste, typischerweise die _Browser Vorwärts_-Taste

Wie oben erwähnt, können Tasten anders als im Standardlayout "von links nach rechts" konfiguriert werden.
Eine für Linkshänder konfigurierte Maus kann die Tastenfunktionen umkehren.
Einige Zeigegeräte haben nur eine Taste und verwenden Tastatur oder andere Eingabemechanismen, um die Haupt-, Sekundär-, Hilfstaste usw. anzuzeigen.
Andere können viele Tasten haben, die verschiedenen Funktionen und Tastenwerten zugeordnet sind.

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

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
