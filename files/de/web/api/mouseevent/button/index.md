---
title: "MouseEvent: button-Eigenschaft"
short-title: button
slug: Web/API/MouseEvent/button
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die schreibgeschützte **`MouseEvent.button`**-Eigenschaft zeigt an, welcher Knopf auf der Maus gedrückt oder losgelassen wurde, um das Ereignis auszulösen.

Diese Eigenschaft gibt nur garantiert an, welche Knöpfe während der durch Drücken oder Loslassen eines oder mehrerer Knöpfe verursachten Ereignisse gedrückt oder losgelassen werden.
Daher ist sie für Ereignisse wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event), [`mouseover`](/de/docs/Web/API/Element/mouseover_event), [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mousemove`](/de/docs/Web/API/Element/mousemove_event) nicht zuverlässig.

Benutzer können die Tastenbelegung ihres Zeigegeräts ändern, sodass, wenn die button-Eigenschaft eines Ereignisses null ist, dies möglicherweise nicht durch den physisch am weitesten links befindlichen Knopf auf dem Zeigegerät verursacht wurde; es sollte jedoch so funktionieren, als ob der linke Knopf im Standardtastenlayout geklickt wurde.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaft, die angibt, welche Knöpfe für alle Mausereignistypen gedrückt wurden.

## Wert

Eine Zahl, die einen bestimmten Knopf darstellt:

- `0`: Hauptknopf, normalerweise der linke Knopf oder der nicht initialisierte Zustand
- `1`: Hilfsknopf, normalerweise der Radknopf oder der mittlere Knopf (falls vorhanden)
- `2`: Sekundärknopf, normalerweise der rechte Knopf
- `3`: Vierter Knopf, typischerweise der _Browser Zurück_-Knopf
- `4`: Fünfter Knopf, typischerweise der _Browser Vorwärts_-Knopf

Wie oben erwähnt, können Knöpfe anders als in der Standard-"Links-nach-Rechts"-Konfiguration angeordnet sein.
Eine auf Linkshändigkeit konfigurierte Maus könnte die Knopfaktionen umkehren.
Einige Zeigegeräte haben nur einen Knopf und verwenden die Tastatur oder andere Eingabemechanismen, um Haupt-, Sekundär-, Hilfsknopf, usw. anzugeben.
Andere könnten viele Knöpfe haben, die auf verschiedene Funktionen und Knopfwerte abgebildet sind.

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
