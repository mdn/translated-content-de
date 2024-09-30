---
title: Keyboard API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

Die Keyboard-API stellt Methoden bereit, um mit einer physischen Tastatur zu arbeiten, die an ein Gerät angeschlossen ist, auf dem ein Browser läuft.

Sie bietet mehrere Funktionen. _Keyboard mapping_ bietet eine Schnittstelle zum Abrufen des Strings, der durch eine bestimmte physische Taste auf einer Tastatur erzeugt wird, um diese Taste einem Benutzer korrekt zu identifizieren. _Keyboard locking_ ermöglicht es einer Webseite, Tasten zu erfassen, die normalerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem reserviert sind. Die beabsichtigte Verwendung der Keyboard-API erfolgt durch Webanwendungen wie Spiele oder Fernzugriffs-Apps, die ein immersives Vollbild-Erlebnis bieten.

## Konzepte und Nutzung

### Keyboard mapping

Auf physischen Tastaturen enthält das Attribut `code` den physischen Standort der Taste, die gedrückt wurde, und das Attribut `key` enthält den String, der durch das Drücken der Taste an diesem physischen Standort auf der Tastatur erzeugt wird. Der `key`-Wert berücksichtigt die Spracheinstellung der Tastatur (zum Beispiel 'en-US'), das Layout (zum Beispiel 'QWERTY') und den Zustand der Modifikatortasten (<kbd>Shift</kbd>, <kbd>Control</kbd> usw.). Historisch gesehen gab es keine Möglichkeit, diese Informationen abzurufen.

Die Keyboard Map API bietet eine Möglichkeit, den durch eine bestimmte Tasteneingabe erzeugten String über die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle und die [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle abzurufen. Die [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle ist über [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) zugänglich. [`Keyboard`](/de/docs/Web/API/Keyboard) bietet die Methode [`Keyboard.getLayoutMap`](/de/docs/Web/API/Keyboard/getLayoutMap), die ein Versprechen zurückgibt, das mit einem [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Objekt aufgelöst wird, das Mitglieder zum Konvertieren von Codes zu Tasten enthält. Eine Liste gültiger Code-Werte finden Sie im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent Code Values](https://w3c.github.io/uievents-code/)-Spezifikation.

Das folgende Beispiel demonstriert, wie Sie den positions- oder layoutspezifischen String erhalten, der mit der Taste <kbd>W</kbd> auf einer englischen QWERTY-Tastatur verknüpft ist.

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

### Keyboard locking

Interaktive Webseiten, Spiele und Erlebnisse mit Fernübertragung benötigen häufig Zugang zu speziellen Tasten und Tastaturkürzeln im Vollbildmodus. Beispiele für solche Tasten-/Tastenkombinationen sind <kbd>Escape</kbd>, <kbd>Alt+Tab</kbd> und <kbd>Ctrl+N</kbd>. Diese Tasten und Tastenkombinationen werden typischerweise vom Benutzeragenten oder dem zugrunde liegenden Betriebssystem erfasst, wie im folgenden Beispiel veranschaulicht.

Um die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu erfassen, rufen Sie `lock()` mit einer Liste auf, die den Wert des Attributs key code für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit der Tasteneingabe verwendet werden. Bei einer Standard-United States QWERTY-Belegung sorgt das Registrieren von `KeyW` dafür, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die Anwendung gesendet werden. Das Gleiche gilt für `KeyA`, `KeyS` und `KeyD`.

### Schreibsystemtasten

Die Codes, die an [`Keyboard.lock`](/de/docs/Web/API/Keyboard/lock) und die verschiedenen Methoden der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle übergeben werden, werden als "Schreibsystemtasten" bezeichnet.

"Schreibsystemtasten" sind im Abschnitt [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) der [UI Events KeyboardEvent Code Values](https://w3c.github.io/uievents-code/)-Spezifikation definiert, da die physikalischen Tasten je nach aktueller Spracheinstellung und Tastaturlayout ihre Bedeutung ändern. Diese Tasten sind unten dargestellt. Blaue Tasten sind auf allen Standard-Tastaturen vorhanden, während grüne Tasten nur auf einigen Tastaturen verfügbar sind.

![Schreibsystemtasten, wie in der UI Events KeyboardEvent Code Values-Spezifikation definiert.](writing-system-keys.png)

## Schnittstellen

- [`Keyboard`](/de/docs/Web/API/Keyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastatureingaben von der physischen Tastatur umschalten.
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) {{experimental_inline}}
  - : Ein objektähnliches Abbild mit Funktionen zum Abrufen des Strings, der mit spezifischen physischen Tasten verknüpft ist.

### Erweiterungen zu anderen Schnittstellen

- [`navigator.keyboard`](/de/docs/Web/API/Navigator/keyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`Keyboard`](/de/docs/Web/API/Keyboard)-Objekt zurück, das Zugang zu Funktionen bietet, die Tastaturlayout-Karten abrufen und das Erfassen von Tastatureingaben von der physischen Tastatur umschalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
