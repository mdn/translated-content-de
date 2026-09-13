---
title: Keyboard API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

Die Keyboard-API bietet Methoden zur Arbeit mit einer physischen Tastatur, die an ein Gerät angeschlossen ist, das einen Browser ausführt.

Sie bietet mehrere Funktionen. _Tastaturzuordnung_ bietet eine Schnittstelle zum Abrufen des Strings, der von einer bestimmten physischen Taste auf einer Tastatur erzeugt wird, um diese Taste einem Benutzer korrekt zu identifizieren. _Tastatursperre_ ermöglicht es einer Webseite, Tasten zu erfassen, die normalerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem reserviert sind. Die beabsichtigte Verwendung der Keyboard-API ist durch Webanwendungen wie Spiele oder Remote-Access-Apps, die eine immersives Vollbild-Erlebnis bieten.

## Konzepte und Nutzung

### Tastaturzuordnung

Auf physischen Tastaturen enthält das `code`-Attribut die physische Position der gedrückten Taste, und das `key`-Attribut enthält den String, der durch das Drücken der Taste an dieser physischen Position auf der Tastatur erzeugt wird. Der `key`-Wert berücksichtigt die Spracheinstellung der Tastatur (zum Beispiel 'en-US'), das Layout (zum Beispiel 'QWERTY') und den Zustand der Modifikationstasten (<kbd>Shift</kbd>, <kbd>Control</kbd>, etc.). Historisch gesehen gab es keine Möglichkeit, diese Informationen abzurufen.

Die Keyboard-Map-API bietet eine Möglichkeit, den durch einen bestimmten Tastendruck erzeugten String über die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle und die [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle abzurufen. Die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle wird über [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) angesprochen. [`Keyboard`](/de/docs/Web/API/Keyboard) bietet die Methode [`Keyboard.getLayoutMap`](/de/docs/Web/API/Keyboard/getLayoutMap), die ein Promise zurückgibt, das mit einem [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Objekt aufgelöst wird, das Mitglieder zum Konvertieren von Codes in Tasten enthält. Eine Liste gültiger Code-Werte findet sich im Abschnitt [Schriftsystemtasten](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)-Spezifikation.

Das folgende Beispiel zeigt, wie Sie den orts- oder layoutspezifischen String abrufen können, der mit der Taste <kbd>W</kbd> auf einer englischen QWERTY-Tastatur verbunden ist.

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

Interaktiv reiche Webseiten, Spiele und Remote-Streaming-Erlebnisse erfordern oft den Zugriff auf spezielle Tasten und Tastenkombinationen, während sie im Vollbildmodus sind. Beispiele für solche Tasten/-kombinationen sind <kbd>Escape</kbd>, <kbd>Alt+Tab</kbd> und <kbd>Ctrl+N</kbd>. Diese Tasten und Tastenkombinationen werden typischerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem erfasst, wie im folgenden Beispiel gezeigt.

Um die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu erfassen, rufen Sie `lock()` mit einer Liste auf, die den Attributwert "key code" für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem standardmäßigen US-amerikanischen QWERTY-Layout sorgt das Registrieren von `KeyW` dafür, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit Modifikatoren für <kbd>W</kbd> an die App gesendet werden. Dasselbe gilt für `KeyA`, `KeyS` und `KeyD`.

### Schriftsystemtasten

Die Codes, die an [`Keyboard.lock`](/de/docs/Web/API/Keyboard/lock) und die verschiedenen Methoden der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle übergeben werden, werden als "Schriftsystemtasten" bezeichnet.

"Schriftsystemtasten" sind im Abschnitt [Schriftsystemtasten](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)-Spezifikation definiert, da sich die Bedeutung der physischen Tasten basierend auf der aktuellen Spracheinstellung und dem Tastaturlayout ändert. Diese Tasten werden unten gezeigt. Blaue Tasten sind auf allen Standardtastaturen vorhanden, während grüne Tasten nur auf einigen Tastaturen verfügbar sind.

![Schriftsystemtasten, wie sie von der UI Events KeyboardEvent code Values-Spezifikation definiert sind.](writing-system-keys.png)

## Schnittstellen

- [`Keyboard`](/de/docs/Web/API/Keyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Tastatur-Layout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) {{experimental_inline}}
  - : Ein map-ähnliches Objekt mit Funktionen zum Abrufen des Strings, der mit bestimmten physischen Tasten verbunden ist.

### Erweiterungen für andere Schnittstellen

- [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugriff auf Funktionen bietet, um Tastatur-Layout-Karten abzurufen und das Erfassen von Tastendrücken von der physischen Tastatur umzustellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
