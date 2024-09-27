---
title: "KeyboardEvent: keyCode-Eigenschaft"
short-title: keyCode
slug: Web/API/KeyboardEvent/keyCode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die veraltete, schreibgeschützte Eigenschaft **`KeyboardEvent.keyCode`** repräsentiert einen system- und implementationsabhängigen numerischen Code, der den unveränderten Wert der gedrückten Taste identifiziert.

Dies ist in der Regel der dezimale ASCII- ({{RFC(20)}}) oder Windows 1252-Code, der der Taste entspricht. Wenn die Taste nicht identifiziert werden kann, beträgt dieser Wert `0`.

Sie sollten vermeiden, dies zu verwenden, wenn möglich; es ist schon seit einiger Zeit veraltet. Stattdessen sollten Sie [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) (für die physische gedrückte Taste) oder [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) (für das Zeichen, auf das die Taste verweist) verwenden. Überprüfen Sie die Kompatibilität für jede Eigenschaft, wenn Sie auf sehr alte Browser abzielen.

> [!NOTE]
> Web-Entwickler sollten das `keyCode`-Attribut für druckbare Zeichen nicht verwenden, wenn sie die `keydown`- und `keyup`-Ereignisse behandeln. Wie oben beschrieben, ist das `keyCode`-Attribut für druckbare Zeichen nicht nützlich, insbesondere für solche, die mit gedrückter <kbd>Shift</kbd>- oder <kbd>Alt</kbd>-Taste eingegeben werden.

## Wert von keyCode

### Druckbare Tasten in Standardposition

Der Wert von Tastenevents, die durch das Drücken oder Loslassen von druckbaren Tasten in Standardposition verursacht werden, ist zwischen Browsern nicht kompatibel.

IE gibt einfach den nativen virtuellen Tastencode-Wert als `KeyboardEvent.keyCode` wieder.

Google Chrome, Chromium und Safari müssen den Wert aus dem Eingabezeichen bestimmen. Wenn das eingegebene Zeichen mit dem US-Tastaturlayout eingegeben werden kann, verwenden sie den `keyCode`-Wert des US-Tastaturlayouts.

Firefox erhält `keyCode`-Werte von [ASCII](/de/docs/Glossary/ASCII)-Zeichen, die durch die Taste eingegeben werden können — sogar mit Shift-Modifikatoren oder einem ASCII-fähigen Tastaturlayout. Siehe die folgenden Regeln für Einzelheiten:

1. Wenn das System Windows ist und der native Tastencode der gedrückten Taste darauf hinweist, dass die Taste a-z oder 0-9 ist, verwenden Sie einen Tastencode dafür.
2. Wenn das System Mac ist und der native Tastencode der gedrückten Taste darauf hinweist, dass die Taste 0-9 ist, verwenden Sie einen Tastencode dafür.
3. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen ohne Modifikatortaste eingibt, verwenden Sie einen Tastencode dafür.
4. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen mit einem Shift-Tastenmodifikator eingibt, verwenden Sie einen Tastencode dafür.
5. Wenn die gedrückte Taste ein anderes ASCII-Zeichen ohne Modifikatortaste eingibt, verwenden Sie einen Tastencode dafür.
6. Wenn die gedrückte Taste ein anderes ASCII-Zeichen mit einem Shift-Tastenmodifikator eingibt, verwenden Sie einen Tastencode dafür.
7. Andernfalls, d. h., die gedrückte Taste gibt ein Unicode-Zeichen ein:

   1. Wenn das Tastaturlayout ASCII-fähig ist (d. h. ASCII-Alphabete eingeben kann), verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.
   2. Andernfalls, d. h., das Tastaturlayout ist nicht ASCII-fähig, verwenden Sie das ASCII-fähige Tastaturlayout, das im System mit der höchsten Priorität installiert ist:

      1. Wenn die gedrückte Taste auf dem alternativen Tastaturlayout ein ASCII-alphabetisches oder numerisches Zeichen eingibt, verwenden Sie einen Tastencode dafür.
      2. Andernfalls verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.

Gecko setzt `keyCode`-Werte für Interpunktionszeichen so weit wie möglich (wenn die Punkte 7.1 oder 7.2 in der obigen Liste erreicht sind) mit den folgenden Regeln:

> [!WARNING]
> Der Zweck dieser neuen zusätzlichen Regeln besteht darin, Benutzern, deren Tastaturlayouts Unicode-Zeichen auf Interpunktionstasten in einem US-Tastaturlayout abbilden, zu ermöglichen, Webanwendungen zu verwenden, die nur mit ASCII-fähigen Tastaturlayouts oder nur mit einem US-Tastaturlayout Firefox unterstützen. Andernfalls können die neu zugeordneten `keyCode`-Werte mit anderen Tasten in Konflikt stehen. Wenn Sie diese Tasten unterscheiden müssen, aber nicht alle Tastaturlayouts weltweit selbst unterstützen möchten, sollten Sie wahrscheinlich [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) verwenden.

1. Wenn Sie macOS oder Linux verwenden:

   1. Wenn das aktive Tastaturlayout nicht ASCII-fähig ist und ein alternatives ASCII-fähiges Tastaturlayout verfügbar ist.

      1. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen nur über die unveränderte Taste erzeugt, verwenden Sie einen `keyCode` für das Zeichen.
      2. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen mit einem Shift-Tastenmodifikator erzeugt, verwenden Sie einen `keyCode` für das verschobene Zeichen.
      3. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das durch die Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

   2. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das durch die Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

2. Wenn Sie Windows verwenden:

   1. Verwenden Sie einen `keyCode`-Wert für ein ASCII-Zeichen, das durch eine Taste erzeugt wird, die auf denselben virtuellen Tastencode von Windows gemappt ist, wenn das US-Tastaturlayout aktiv ist.

## Beispiele

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }

    let handled = false;
    if (event.key !== undefined) {
      // Handle the event with KeyboardEvent.key
      handled = true;
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode
      handled = true;
    }

    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  },
  true,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### OEM-spezifische Tasten unter Windows

Auf Windows sind einige Werte des virtuellen Tastencodes für OEM-spezifische Tasten definiert (reserviert). Sie sind für spezielle Tasten auf nicht standardmäßigen Tastaturen verfügbar. Mit anderen Worten, einige Werte werden von zwei oder mehr Anbietern (oder Hardware) für unterschiedliche Bedeutungen verwendet.

Ab Gecko 21 (und älter als 15) sind OEM-spezifische Tastencodes nur auf Windows im `keyCode`-Attribut verfügbar. Sie sind also für übliche Webanwendungen nicht nützlich. Sie sind nur für Intranet-Anwendungen oder in ähnlichen Situationen nützlich.

Siehe "[Herstellerspezifische Virtual-Key-Codes (Windows CE 5.0)](<https://learn.microsoft.com/en-us/previous-versions/windows/embedded/aa452679(v=msdn.10)>)" auf MSDN für weitere Details.
