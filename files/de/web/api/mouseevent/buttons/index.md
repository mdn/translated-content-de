---
title: "MouseEvent: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`MouseEvent.buttons`**-Eigenschaft gibt an, welche Tasten der Maus (oder eines anderen Eingabegeräts) gedrückt sind, wenn ein MouseEvent ausgelöst wird.

Jede Taste, die gedrückt werden kann, wird durch eine bestimmte Zahl repräsentiert (siehe unten). Wenn mehr als eine Taste gedrückt wird, werden die Tastenwerte addiert, um eine neue Zahl zu erzeugen. Zum Beispiel, wenn die sekundäre (`2`) und die Hilfstaste (`4`) gleichzeitig gedrückt werden, beträgt der Wert `6` (d. h. `2 + 4`).

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der {{domxref("MouseEvent.button")}}-Eigenschaft.
> Die `MouseEvent.buttons`-Eigenschaft gibt den Zustand der während eines beliebigen Mausereignisses gedrückten Tasten an,
> während die {{domxref("MouseEvent.button")}}-Eigenschaft nur den korrekten Wert bei Mausereignissen garantiert, die durch das Drücken oder Loslassen einer oder mehrerer Tasten verursacht werden.

## Wert

Eine Zahl, die eine oder mehrere Tasten repräsentiert.
Für mehr als eine gleichzeitig gedrückte Taste werden die Werte kombiniert (z. B. `3` ist primär + sekundär).

- `0`: Keine Taste oder nicht initialisiert
- `1`: Primärtaste (normalerweise die linke Taste)
- `2`: Sekundärtaste (normalerweise die rechte Taste)
- `4`: Hilfstaste (normalerweise die Mausradtaste oder mittlere Taste)
- `8`: 4. Taste (typischerweise die "Browser Zurück"-Taste)
- `16`: 5. Taste (typischerweise die "Browser Vorwärts"-Taste)

## Beispiele

Dieses Beispiel protokolliert die `buttons`-Eigenschaft, wenn Sie ein {{domxref("Element/mousedown_event", "mousedown")}}-Ereignis auslösen.

### HTML

```html
<p>Klicken Sie irgendwo mit einer oder mehreren Maustasten.</p>
<pre id="log">[Noch keine Klicks]</pre>
```

### JavaScript

```js
const buttonNames = ["left", "right", "wheel", "back", "forward"];
function mouseButtonPressed(event, buttonName) {
  // Verwenden Sie binäre `&` mit der relevanten Potenz von 2, um zu prüfen, ob eine bestimmte Taste gedrückt ist
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

Firefox unterstützt das `buttons`-Attribut auf Windows, Linux (GTK) und macOS mit den folgenden Einschränkungen:

- Dienstprogramme ermöglichen die Anpassung der Tastenaktionen.
  Daher muss die _primäre_ Taste nicht die linke Taste auf dem Gerät sein, die _sekundäre_ muss nicht die rechte Taste sein, usw.
  Außerdem könnte der mittlere (Rad-)Taster, die 4. Taste und die 5. Taste keinen Wert zugewiesen bekommen, selbst wenn sie gedrückt werden.
- Ein-Tasten-Geräte können zusätzliche Tasten mit Kombinationen aus Tastendrücken und Tastatursignalen emulieren.
- Touch-Geräte können Tasten mit konfigurierbaren Gesten emulieren (z. B. eine Fingergeste für _primär_, zwei Fingergeste für _sekundär_ usw.).
- Unter Linux (GTK) werden die 4. und 5. Taste nicht unterstützt.
  Darüber hinaus enthält ein {{domxref("Element/mouseup_event", "mouseup")}}-Ereignis immer Informationen über die freigegebene Taste im `buttons`-Wert.
- Unter Mac OS X 10.5 gibt das `buttons`-Attribut immer `0` zurück, da es keine plattformspezifische API zur Implementierung dieser Funktion gibt.

## Siehe auch

- {{domxref("MouseEvent")}}
