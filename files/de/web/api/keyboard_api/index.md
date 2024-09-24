---
title: Tastatur-API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

Die Tastatur-API bietet Methoden zur Arbeit mit einer physikalischen Tastatur, die an ein Gerät angeschlossen ist, auf dem ein Browser läuft.

Sie bietet mehrere Funktionen. _Tastaturzuordnung_ bietet eine Schnittstelle zum Abrufen der Zeichenkette, die durch eine bestimmte physische Taste auf einer Tastatur generiert wird, um diese Taste korrekt einem Benutzer zu identifizieren. _Tastatursperre_ ermöglicht es einer Webseite, Tasten zu erfassen, die normalerweise durch den Benutzeragenten oder das zugrunde liegende Betriebssystem reserviert sind. Der beabsichtigte Nutzen der Tastatur-API ist für Webanwendungen wie Spiele oder Fernzugriffs-Apps, die ein immersives Vollbild-Erlebnis bieten.

## Konzepte und Nutzung

### Tastaturzuordnung

Auf physischen Tastaturen enthält das `code`-Attribut den physischen Standort der gedrückten Taste, und das `key`-Attribut enthält die Zeichenkette, die durch das Drücken der Taste an diesem physischen Standort auf der Tastatur generiert wird. Der `key`-Wert berücksichtigt die Ländereinstellung der Tastatur (z.B. 'en-US'), das Layout (z.B. 'QWERTY') und den Zustand der Modifikatortasten (<kbd>Shift</kbd>, <kbd>Control</kbd>, usw.). Historisch gab es keine Möglichkeit, diese Informationen abzurufen.

Die Tastatur-Map-API bietet eine Möglichkeit, die Zeichenkette abzurufen, die durch einen bestimmten Tastendruck erzeugt wird, durch die {{domxref('Keyboard')}}-Schnittstelle und die {{domxref('KeyboardLayoutMap')}}-Schnittstelle. Auf die {{domxref('Keyboard')}}-Schnittstelle wird über {{domxref('navigator.keyboard')}} zugegriffen. {{domxref('Keyboard')}} bietet die Methode {{domxref('Keyboard.getLayoutMap')}}, die ein Versprechen zurückgibt, das mit einem {{domxref('KeyboardLayoutMap')}}-Objekt aufgelöst wird, das Mitglieder enthält, um Codes in Tasten zu konvertieren. Eine Liste gültiger Code-Werte finden Sie im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/).

Das folgende Beispiel zeigt, wie Sie die standort- oder layoutspezifische Zeichenfolge abrufen, die der mit <kbd>W</kbd> beschrifteten Taste auf einer englischen QWERTY-Tastatur zugeordnet ist.

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

### Tastatursperre

Interaktiv reichhaltige Webseiten, Spiele und Ferngeschenkerlebnisse erfordern häufig Zugriff auf spezielle Tasten und Tastenkombinationen im Vollbildmodus. Beispiele für solche Tasten/Tastenkombinationen sind <kbd>Escape</kbd>, <kbd>Alt+Tab</kbd> und <kbd>Ctrl+N</kbd>. Diese Tasten und Tastenkombinationen werden typischerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem erfasst, wie im folgenden Beispiel veranschaulicht.

Um die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu erfassen, rufen Sie `lock()` mit einer Liste auf, die den Attributwert des Tastencodes für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem standardmäßigen US-QWERTY-Layout stellt das Registrieren von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die App gesendet werden. Dasselbe gilt für `KeyA`, `KeyS` und `KeyD`.

### Schreibsystemtasten

Die Codes, die {{domxref('Keyboard.lock')}} übergeben werden und die verschiedenen Methoden der {{domxref('KeyboardLayoutMap')}}-Schnittstelle werden "Schreibsystemtasten" genannt.

"Schreibsystemtasten" sind im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) definiert, da sich die Bedeutung der physischen Tasten basierend auf dem aktuellen Gebietsschema und der Tastaturbelegung ändert. Diese Tasten werden unten gezeigt. Blaue Tasten sind auf allen Standardtastaturen vorhanden, während grüne Tasten nur auf einigen Tastaturen verfügbar sind.

![Schreibsystemtasten, wie sie in der Spezifikation der UI-Events KeyboardEvent-Code-Werte definiert sind.](writing-system-keys.png)

## Schnittstellen

- {{domxref('Keyboard')}} {{experimental_inline}}
  - : Bietet Funktionen, die Tastatur-Layout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.
- {{domxref('KeyboardLayoutMap')}} {{experimental_inline}}
  - : Ein kartenähnliches Objekt mit Funktionen, um die mit bestimmten physischen Tasten verknüpfte Zeichenkette abzurufen.

### Erweiterungen anderer Schnittstellen

- {{domxref('navigator.keyboard')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{domxref('Keyboard')}}-Objekt zurück, das Zugriff auf Funktionen bietet, die Tastatur-Layout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
