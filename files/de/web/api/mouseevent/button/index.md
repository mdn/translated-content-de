---
title: "MouseEvent: button-Eigenschaft"
short-title: button
slug: Web/API/MouseEvent/button
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("UI Events")}}

Die **`MouseEvent.button`** schreibgeschützte Eigenschaft gibt an, welche Maustaste gedrückt oder losgelassen wurde, um das Ereignis auszulösen.

Diese Eigenschaft garantiert nur, anzugeben, welche Tasten während der Ereignisse, die durch Drücken oder Loslassen einer oder mehrerer Tasten verursacht wurden, gedrückt oder losgelassen sind. Daher ist sie nicht zuverlässig für Ereignisse wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mousemove`](/de/docs/Web/API/Element/mousemove_event).

Benutzer können die Konfiguration der Tasten auf ihrem Zeigegerät ändern, sodass, wenn die button-Eigenschaft eines Ereignisses null ist, es möglicherweise nicht von der Taste verursacht wurde, die physisch am weitesten links auf dem Zeigegerät ist; es sollte jedoch so funktionieren, als ob die linke Taste im Standardtastenlayout geklickt wurde.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaft, die angibt, welche Tasten für alle Mausereignistypen gedrückt sind.

## Wert

Eine Zahl, die eine bestimmte Taste repräsentiert:

- `0`: Haupttaste, normalerweise die linke Taste oder der nicht initialisierte Zustand
- `1`: Hilfstaste, normalerweise die Radtaste oder die mittlere Taste (falls vorhanden)
- `2`: Sekundäre Taste, normalerweise die rechte Taste
- `3`: Vierte Taste, typischerweise die _Zurück-Browser_-Taste
- `4`: Fünfte Taste, typischerweise die _Vorwärts-Browser_-Taste

Wie oben erwähnt, können Tasten unterschiedlich zum Standardlayout "von links nach rechts" konfiguriert werden. Eine für Linkshänder konfigurierte Maus kann die Tastenaktionen umkehren. Einige Zeigegeräte haben nur eine Taste und verwenden Tastatur oder andere Eingabemechanismen, um Haupt-, Sekundär-, Hilfstaste usw. anzuzeigen. Andere haben viele Tasten, die auf verschiedene Funktionen und Tastenwerte abgebildet sind.

## Beispiele

### HTML

```html
<button id="button">Click here with your mouse…</button>
<p id="log"></p>
```

### JavaScript

```js
const button = document.querySelector("#button");
const log = document.querySelector("#log");
button.addEventListener("mouseup", (e) => {
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
button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
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
