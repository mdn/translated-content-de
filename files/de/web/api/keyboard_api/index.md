---
title: Keyboard API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 625fc81019c33b45cdab26bea94754d2f5527aa3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

Die Keyboard API bietet Methoden zur Arbeit mit einer physischen Tastatur, die an ein Gerät angeschlossen ist, auf dem ein Browser läuft.

Sie bietet mehrere Funktionen. _Tastaturzuordnung_ bietet eine Schnittstelle zum Abrufen des von einer bestimmten physischen Taste auf einer Tastatur erzeugten Strings, um diese Taste dem Benutzer korrekt zu identifizieren. _Tastatursperre_ ermöglicht es einer Webseite, Tasten zu erfassen, die normalerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem reserviert sind. Die beabsichtigte Nutzung der Keyboard API erfolgt durch Webanwendungen wie Spiele oder Remotezugriffs-Apps, die ein Vollbild-Erlebnis bieten.

## Konzepte und Nutzung

### Tastaturzuordnung

Auf physischen Tastaturen enthält das `code`-Attribut die physische Position der gedrückten Taste, und das `key`-Attribut enthält den durch Drücken der Taste an dieser physischen Position auf der Tastatur erzeugten String. Der `key`-Wert berücksichtigt die Sprachregion der Tastatur (zum Beispiel 'en-US'), das Layout (zum Beispiel 'QWERTY') und den Zustand der Modifier-Taste (<kbd>Shift</kbd>, <kbd>Control</kbd> usw.). Historisch gesehen gab es keine Möglichkeit, diese Informationen abzurufen.

Die Keyboard Map API bietet eine Möglichkeit, den durch einen bestimmten Tastendruck erzeugten String abzurufen, über die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle und die [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle. Auf die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle wird über [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) zugegriffen. [`Keyboard`](/de/docs/Web/API/Keyboard) bietet die Methode [`Keyboard.getLayoutMap`](/de/docs/Web/API/Keyboard/getLayoutMap), die ein Versprechen zurückgibt, das mit einem [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Objekt aufgelöst wird, das Mitglieder zur Umwandlung von Codes in Tasten enthält. Eine Liste gültiger Code-Werte findet sich im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) Spezifikation.

Das folgende Beispiel zeigt, wie man den orts- oder layout-spezifischen String erhält, der mit der Taste <kbd>W</kbd> auf einer englischen QWERTY-Tastatur verknüpft ist.

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

Interaktive Webseiten, Spiele und Remote-Streaming-Erlebnisse erfordern oft den Zugriff auf spezielle Tasten und Tastenkombinationen im Vollbildmodus. Beispiele für solche Tasten/Tastenkombinationen sind <kbd>Escape</kbd>, <kbd>Alt+Tab</kbd> und <kbd>Ctrl+N</kbd>. Diese Tasten und Tastenkombinationen werden typischerweise vom Benutzeragenten oder vom zugrunde liegenden Betriebssystem erfasst, wie im folgenden Beispiel gezeigt.

Um die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu erfassen, rufen Sie `lock()` mit einer Liste auf, die den Wert des code-Attributs für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifier bei der Tastenbetätigung verwendet werden. Unter Annahme eines standardmäßigen US-amerikanischen QWERTY-Layouts stellt das Registrieren von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenmodifikator-Kombinationen mit <kbd>W</kbd> an die App gesendet werden. Gleiches gilt für `KeyA`, `KeyS` und `KeyD`.

### Schriftsystemtasten

Die an [`Keyboard.lock`](/de/docs/Web/API/Keyboard/lock) und die verschiedenen Methoden der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle übergebenen Codes werden als "Schriftsystemtasten" bezeichnet.

"Schriftsystemtasten" werden im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) Spezifikation definiert, da die physischen Tasten ihre Bedeutung je nach aktueller Sprachregion und Tastaturlayout ändern. Diese Tasten werden unten gezeigt. Blaue Tasten sind auf allen Standardtastaturen vorhanden, während grüne Tasten nur auf einigen Tastaturen verfügbar sind.

![Schriftsystemtasten, wie sie von der UI Events KeyboardEvent code Values Spezifikation definiert sind.](writing-system-keys.png)

## Schnittstellen

- [`Keyboard`](/de/docs/Web/API/Keyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) {{experimental_inline}}
  - : Ein map-ähnliches Objekt mit Funktionen zum Abrufen des Strings, der mit bestimmten physischen Tasten verknüpft ist.

### Erweiterungen zu anderen Schnittstellen

- [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugriff auf Funktionen bietet, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
