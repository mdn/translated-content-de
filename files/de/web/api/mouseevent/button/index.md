---
title: "MouseEvent: button-Eigenschaft"
short-title: button
slug: Web/API/MouseEvent/button
l10n:
  sourceCommit: 983647fb3984f0dae5573116f7b69ed9b4085634
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.button`** gibt an, welche Maustaste gedrückt oder losgelassen wurde, um das Ereignis auszulösen.

Diese Eigenschaft garantiert nur, anzugeben, welche Tasten während der durch das Drücken oder Loslassen einer oder mehrerer Tasten verursachten Ereignisse gedrückt oder losgelassen werden. Daher ist sie nicht zuverlässig für Ereignisse wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mousemove`](/de/docs/Web/API/Element/mousemove_event).

Benutzer können die Konfiguration der Tasten auf ihrem Zeigegerät so ändern, dass, wenn die button-Eigenschaft eines Ereignisses Null ist, es möglicherweise nicht durch die physisch am weitesten links befindliche Taste des Zeigegeräts verursacht wurde; jedoch sollte es sich so verhalten, als ob die linke Taste im Standard-Buttonlayout angeklickt wurde.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons) Eigenschaft, die angibt, welche Tasten für alle Arten von Mausereignissen gedrückt sind.

## Wert

Eine Zahl, die eine bestimmte Taste darstellt:

- `0`: Haupttaste, normalerweise die linke Taste oder der nicht initialisierte Zustand
- `1`: Zusatztaste, normalerweise die Radtaste oder die mittlere Taste (falls vorhanden)
- `2`: Sekundärtaste, normalerweise die rechte Taste
- `3`: Vierte Taste, typischerweise die _Browser-Zurück_-Taste
- `4`: Fünfte Taste, typischerweise die _Browser-Vorwärts_-Taste

Wie oben erwähnt, können Tasten anders als im Standard-Layout "von links nach rechts" konfiguriert sein. Eine Maus, die für die Verwendung mit der linken Hand konfiguriert ist, kann die Tastenaktionen vertauscht haben. Einige Zeigegeräte haben nur eine Taste und verwenden Tastatur- oder andere Eingabemechanismen, um Haupt-, Sekundär-, Zusatztaste usw. anzugeben. Andere können viele Tasten haben, die verschiedenen Funktionen und Tastenwerten zugeordnet sind.

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
