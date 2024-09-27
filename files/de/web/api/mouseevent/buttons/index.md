---
title: "MouseEvent: buttons-Eigenschaft"
short-title: buttons
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`MouseEvent.buttons`** zeigt an, welche Tasten der Maus (oder eines anderen Eingabegeräts) gedrückt sind, wenn ein Mausereignis ausgelöst wird.

Jede drückbare Taste wird durch eine bestimmte Zahl dargestellt (siehe unten).
Wenn mehr als eine Taste gedrückt wird, werden die Tastenwerte addiert, um eine neue Zahl zu erzeugen.
Zum Beispiel, wenn die sekundäre (`2`) und die Hilfstaste (`4`) gleichzeitig gedrückt werden, ist der Wert `6` (d.h. `2 + 4`).

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) Eigenschaft.
> Die `MouseEvent.buttons`-Eigenschaft gibt den Zustand der gedrückten Tasten während eines Mausereignisses an,
> während die [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) Eigenschaft nur bei Mausereignissen durch das Drücken oder Freigeben einer oder mehrerer Tasten den korrekten Wert garantiert.

## Wert

Eine Zahl, die eine oder mehrere Tasten darstellt.
Wenn mehr als eine Taste gleichzeitig gedrückt wird, werden die Werte kombiniert (z.B. `3` ist primär + sekundär).

- `0`: Keine Taste oder nicht initialisiert
- `1`: Primäre Taste (normalerweise die linke Taste)
- `2`: Sekundäre Taste (normalerweise die rechte Taste)
- `4`: Hilfstaste (normalerweise die Mausradtaste oder die mittlere Taste)
- `8`: 4. Taste (typischerweise die "Browser Zurück" Taste)
- `16`: 5. Taste (typischerweise die "Browser Vor" Taste)

## Beispiele

Dieses Beispiel protokolliert die `buttons`-Eigenschaft, wenn Sie ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis auslösen.

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

### Firefox Anmerkungen

Firefox unterstützt das `buttons`-Attribut unter Windows, Linux (GTK) und macOS
mit den folgenden Einschränkungen:

- Werkzeuge erlauben die Anpassung der Tastenaktionen.
  Daher muss die _Primärtaste_ nicht unbedingt die linke Taste des Geräts sein, die _Sekundärtaste_ nicht unbedingt die rechte Taste und so weiter.
  Darüber hinaus sind die mittlere (Rad-)Taste, die 4. Taste und die 5. Taste möglicherweise nicht zugewiesen, selbst wenn sie gedrückt sind.
- Geräte mit einer Taste können zusätzliche Tasten mit Kombinationen aus Taste und Tastaturanschlägen emulieren.
- Touch-Geräte können Tasten mit konfigurierbaren Gesten emulieren (z.B. Ein-Finger-Berührung für _primär_, Zwei-Finger-Berührung für _sekundär_, usw.).
- Unter Linux (GTK) werden die 4. und 5. Taste nicht unterstützt.
  Zusätzlich enthält ein [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignis immer die loslassende Tasteninformation im `buttons`-Wert.
- Auf Mac OS X 10.5 gibt das `buttons`-Attribut immer `0` zurück, da es keine Plattform-API gibt, um diese Funktion zu implementieren.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
