---
title: Keyboard API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

Die Keyboard API bietet Methoden zur Arbeit mit einer physischen Tastatur, die an ein Gerät mit einem Browser angeschlossen ist.

Sie bietet mehrere Funktionen. _Keyboard mapping_ stellt eine Schnittstelle zum Abrufen des durch eine bestimmte physische Taste auf einer Tastatur erzeugten Strings bereit, um diese Taste korrekt für den Benutzer zu identifizieren. _Keyboard locking_ ermöglicht es einer Webseite, Tasten zu erfassen, die normalerweise vom User-Agent oder dem zugrundeliegenden Betriebssystem reserviert sind. Die beabsichtigte Nutzung der Keyboard API ist für Webanwendungen wie Spiele oder Remote-Zugriffsanwendungen, die ein immersives Fullscreen-Erlebnis bieten.

## Konzepte und Verwendung

### Tastatur-Zuordnung

Bei physischen Tastaturen enthält das `code`-Attribut die physische Position der gedrückten Taste, und das `key`-Attribut enthält den String, der durch das Drücken der Taste an dieser physischen Position auf der Tastatur erzeugt wird. Der `key`-Wert berücksichtigt die Spracheinstellung der Tastatur (zum Beispiel 'en-US'), das Layout (zum Beispiel 'QWERTY') und den Status der Modifikatortaste (<kbd>Shift</kbd>, <kbd>Control</kbd> usw.). Historisch gab es keine Möglichkeit, diese Informationen abzurufen.

Die Keyboard Map API bietet eine Möglichkeit, den durch einen bestimmten Tastendruck erzeugten String abzurufen, über die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle und die [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle. Die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle wird über [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) aufgerufen. [`Keyboard`](/de/docs/Web/API/Keyboard) bietet die Methode [`Keyboard.getLayoutMap`](/de/docs/Web/API/Keyboard/getLayoutMap), die ein Versprechen zurückgibt, das mit einem [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Objekt aufgelöst wird, das Mitglieder zum Umwandeln von Codes zu Tasten enthält. Eine Liste der gültigen Code-Werte findet sich im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)-Spezifikation.

Das folgende Beispiel zeigt, wie man den standortspezifischen oder layoutspezifischen String abruft, der mit der auf einer englischen QWERTY-Tastatur beschrifteten Taste <kbd>W</kbd> verbunden ist.

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // Do something else.
}
```

### Tastatursperrung

Interaktive Webseiten, Spiele und Remote-Streaming-Erlebnisse erfordern oft den Zugriff auf spezielle Tasten und Tastaturkürzel im Vollbildmodus. Beispiele für solche Tasten bzw. Tastenkombinationen sind <kbd>Escape</kbd>, <kbd>Alt+Tab</kbd> und <kbd>Ctrl+N</kbd>. Diese Tasten und Tastenkombinationen werden typischerweise vom User-Agent oder dem zugrundeliegenden Betriebssystem erfasst, wie im folgenden Beispiel illustriert.

Um die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu erfassen, rufen Sie `lock()` mit einer Liste auf, die den Attributwert des Tastencodes für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem standardmäßigen QWERTY-Layout der Vereinigten Staaten stellt die Registrierung von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die App gesendet werden. Das Gleiche gilt für `KeyA`, `KeyS` und `KeyD`.

### Schreibsystem-Tasten

Die an [`Keyboard.lock`](/de/docs/Web/API/Keyboard/lock) und die verschiedenen Methoden der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle übergebenen Codes werden als "Schreibsystem-Tasten" bezeichnet.

"Schreibsystem-Tasten" sind im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)-Spezifikation definiert, da die physischen Tasten ihre Bedeutung je nach aktueller Spracheinstellung und Tastaturlayout ändern. Diese Tasten sind unten aufgeführt. Blaue Tasten sind auf allen Standardtastaturen vorhanden, während grüne Tasten nur auf einigen Tastaturen verfügbar sind.

![Schreibsystem-Tasten wie in der UI Events KeyboardEvent code Values Spezifikation definiert.](writing-system-keys.png)

## Schnittstellen

- [`Keyboard`](/de/docs/Web/API/Keyboard) {{experimental_inline}}
  - : Bietet Funktionen zum Abrufen von Tastatur-Layoutkarten und zum Umschalten des Erfassens von Tastendrücken von der physischen Tastatur.
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) {{experimental_inline}}
  - : Ein objektähnliches Objekt mit Funktionen zum Abrufen des Strings, der mit spezifischen physikalischen Tasten verbunden ist.

### Erweiterungen zu anderen Schnittstellen

- [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugang zu Funktionen bietet, die Tastatur-Layoutkarten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
