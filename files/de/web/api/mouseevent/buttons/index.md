---
title: "MouseEvent: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.buttons`** zeigt an, welche Tasten auf der Maus (oder einem anderen Eingabegerät) gedrückt sind, wenn ein Mausereignis ausgelöst wird.

Jede Taste, die gedrückt werden kann, wird durch eine bestimmte Zahl repräsentiert (siehe unten).
Wenn mehr als eine Taste gedrückt wird, werden die Werte der Tasten addiert, um eine neue Zahl zu erzeugen.
Wenn beispielsweise die sekundäre (`2`) und die zusätzliche (`4`) Taste gleichzeitig gedrückt werden, ist der Wert `6` (d.h. `2 + 4`).

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button)-Eigenschaft.
> Die `MouseEvent.buttons`-Eigenschaft gibt den Zustand der gedrückten Tasten während eines beliebigen Mausereignisses an,
> während die [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button)-Eigenschaft nur für Mausereignisse, die durch das Drücken oder Loslassen einer oder mehrerer Tasten verursacht werden, den korrekten Wert garantiert.

## Wert

Eine Zahl, die eine oder mehrere Tasten darstellt.
Wenn mehrere Tasten gleichzeitig gedrückt sind, werden die Werte kombiniert (z.B. `3` ist primär + sekundär).

- `0`: Keine Taste oder nicht initialisiert
- `1`: Primäre Taste (normalerweise die linke Taste)
- `2`: Sekundäre Taste (normalerweise die rechte Taste)
- `4`: Zusatztaste (normalerweise die Mausradtaste oder mittlere Taste)
- `8`: 4. Taste (typischerweise die "Browser Zurück"-Taste)
- `16`: 5. Taste (typischerweise die "Browser Vorwärts"-Taste)

## Beispiele

Dieses Beispiel protokolliert die `buttons`-Eigenschaft, wenn Sie ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis auslösen.

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

### Resultat

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox Anmerkungen

Firefox unterstützt das `buttons`-Attribut auf Windows, Linux (GTK) und macOS mit den folgenden Einschränkungen:

- Dienstprogramme erlauben die Anpassung der Tastenaktionen.
  Daher muss die _primäre_ Taste nicht die linke Taste am Gerät sein, die _sekundäre_ muss nicht die rechte Taste sein, usw.
  Zudem kann die mittlere (Rad-)Taste, 4. Taste und 5. Taste möglicherweise keinen Wert zugewiesen bekommen, auch wenn sie gedrückt werden.
- Ein-Tasten-Geräte können zusätzliche Tasten mit Kombinationen aus Tasten- und Tastaturdrücken emulieren.
- Touch-Geräte können Tasten mit konfigurierbaren Gesten emulieren (z.B. Ein-Finger-Touch für _primär_, Zwei-Finger-Touch für _sekundär_, etc.).
- Auf Linux (GTK) werden die 4. und 5. Taste nicht unterstützt.
  Außerdem enthält ein [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis immer die Information über die freigegebene Taste im `buttons`-Wert.
- Auf Mac OS X 10.5 gibt das `buttons`-Attribut immer `0` zurück, da es keine Plattform-API zur Implementierung dieses Features gibt.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
