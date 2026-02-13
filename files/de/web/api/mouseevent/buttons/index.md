---
title: "MouseEvent: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Die **`MouseEvent.buttons`** schreibgeschützte Eigenschaft gibt an, welche Tasten der Maus (oder eines anderen Eingabegeräts) gedrückt sind, wenn ein Mausereignis ausgelöst wird.

Jede Taste, die gedrückt werden kann, wird durch eine bestimmte Zahl dargestellt (siehe unten).
Wenn mehr als eine Taste gedrückt wird, werden die Werte der Tasten zusammengezählt, um eine neue Zahl zu ergeben.
Wenn beispielsweise gleichzeitig die sekundäre (`2`) und die Hilfstaste (`4`) gedrückt werden, ist der Wert `6` (d.h. `2 + 4`).

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) Eigenschaft.
> Die `MouseEvent.buttons` Eigenschaft zeigt den Zustand der bei irgendeinem Mausereignis gedrückten Tasten an,
> während die [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) Eigenschaft nur für Mausereignisse, die durch das Drücken oder Loslassen einer oder mehrerer Tasten verursacht werden, den korrekten Wert garantiert.

## Wert

Eine Zahl, die eine oder mehrere Tasten darstellt.
Wenn mehrere Tasten gleichzeitig gedrückt werden, werden die Werte kombiniert (z.B. `3` ist primäre + sekundäre).

- `0`: Keine Taste oder nicht initialisiert
- `1`: Primäre Taste (normalerweise die linke Taste)
- `2`: Sekundäre Taste (normalerweise die rechte Taste)
- `4`: Hilfstaste (normalerweise die Mausradtaste oder mittlere
  Taste)
- `8`: 4. Taste (typischerweise die "Browser Zurück"-Taste)
- `16`: 5. Taste (typischerweise die "Browser Vor"-Taste)

## Beispiele

Dieses Beispiel protokolliert die `buttons`-Eigenschaft, wenn ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis ausgelöst wird.

### HTML

```html
<p>Click anywhere with one or more mouse buttons.</p>
<pre id="log">[No clicks yet]</pre>
```

### JavaScript

```js
const buttonNames = ["left", "right", "wheel", "back", "forward"];
function mouseButtonPressed(event, buttonName) {
  // Use binary `&` with the relevant power of 2 to check if a given button is pressed
  return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
}

function format(event) {
  const { type, buttons } = event;
  const obj = { type, buttons };
  for (const buttonName of buttonNames) {
    obj[buttonName] = mouseButtonPressed(event, buttonName);
  }
  return JSON.stringify(obj, null, 2);
}

const log = document.getElementById("log");
function logButtons(event) {
  log.textContent = format(event);
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Hinweise zu Firefox

Firefox unterstützt das `buttons`-Attribut unter Windows, Linux (GTK) und macOS
mit den folgenden Einschränkungen:

- Dienstprogramme erlauben die Anpassung der Tastenfunktionen.
  Daher muss die _primäre_ nicht die linke Taste auf dem Gerät sein, _sekundäre_ nicht die rechte Taste und so weiter.
  Darüber hinaus müssen die mittlere (Rad-)Taste, 4. Taste und 5. Taste keinen Wert zugewiesen bekommen, selbst wenn sie gedrückt werden.
- Ein-Tasten-Geräte können zusätzliche Tasten mit Kombinationen aus Tasten- und Tastatureingaben emulieren.
- Touch-Geräte können Tasten mit konfigurierbaren Gesten emulieren (z.B. Ein-Finger-Touch für _primär_, Zwei-Finger-Touch für _sekundär_ usw.).
- Unter Linux (GTK) werden die 4. und 5. Taste nicht unterstützt.
  Zusätzlich enthält bei einem [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis der `buttons`-Wert immer die Information der losgelassenen Taste.
- Unter Mac OS X 10.5 gibt das `buttons`-Attribut immer `0` zurück, da es keine Plattform-API zur Implementierung dieser Funktion gibt.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
