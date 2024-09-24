---
title: "KeyboardEvent: keyCode-Eigenschaft"
short-title: keyCode
slug: Web/API/KeyboardEvent/keyCode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die veraltete, schreibgeschützte Eigenschaft **`KeyboardEvent.keyCode`** repräsentiert einen system- und implementierungsabhängigen numerischen Code, der den unmodifizierten Wert der gedrückten Taste identifiziert.

Dies ist normalerweise der dezimale ASCII- ({{RFC(20)}}) oder Windows 1252-Code, der der Taste entspricht. Falls die Taste nicht identifiziert werden kann, ist dieser Wert `0`.

Vermeiden Sie nach Möglichkeit die Verwendung dieser Eigenschaft, da sie bereits seit einiger Zeit veraltet ist. Stattdessen sollten Sie {{domxref("KeyboardEvent.code")}} (für die physisch gedrückte Taste) oder {{domxref("KeyboardEvent.key")}} (für das Zeichen, auf das die Taste abgebildet wird) verwenden. Überprüfen Sie die Kompatibilität für beide Eigenschaften, falls Sie sehr alte Browser anvisieren.

> [!NOTE]
> Webentwickler sollten das `keyCode`-Attribut nicht für druckbare Zeichen verwenden, wenn sie `keydown`- und `keyup`-Ereignisse behandeln. Wie oben beschrieben, ist das `keyCode`-Attribut nicht nützlich für druckbare Zeichen, insbesondere für solche, die mit der <kbd>Shift</kbd>- oder <kbd>Alt</kbd>-Taste eingegeben werden.

## Wert von keyCode

### Druckbare Tasten in standardmäßiger Position

Der Wert von Tastendrücken, die durch Drücken oder Loslassen druckbarer Tasten in standardmäßiger Position verursacht werden, ist zwischen Browsern nicht kompatibel.

In IE wird einfach der native virtuelle Tastencode-Wert als `KeyboardEvent.keyCode` angezeigt.

Google Chrome, Chromium und Safari müssen den Wert aus dem Eingabezeichen ermitteln. Wenn das eingegebene Zeichen mit dem US-Tastaturlayout eingegeben werden kann, verwenden sie den `keyCode`-Wert auf dem US-Tastaturlayout.

Firefox erhält `keyCode`-Werte aus {{Glossary("ASCII")}}-Zeichen, die von der Taste eingegeben werden können – auch mit Shift-Tasten oder einem ASCII-fähigen Tastaturlayout. Siehe die folgenden Regeln für Details:

1. Wenn das System Windows ist und der native Tastencode der gedrückten Taste angibt, dass die Taste a-z oder 0-9 ist, verwenden Sie einen Tastencode dafür.
2. Wenn das System ein Mac ist und der native Tastencode der gedrückten Taste angibt, dass die Taste 0-9 ist, verwenden Sie einen Tastencode dafür.
3. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen ohne Modifikatortaste eingibt, verwenden Sie dafür einen Tastencode.
4. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen mit einer Shift-Modifikatortaste eingibt, verwenden Sie dafür einen Tastencode.
5. Wenn die gedrückte Taste ein anderes ASCII-Zeichen ohne Modifikatortaste eingibt, verwenden Sie dafür einen Tastencode.
6. Wenn die gedrückte Taste ein anderes ASCII-Zeichen mit einer Shift-Modifikatortaste eingibt, verwenden Sie dafür einen Tastencode.
7. Andernfalls, d.h., die gedrückte Taste gibt ein Unicode-Zeichen ein:

   1. Wenn das Tastaturlayout ASCII-fähig ist (d.h., ASCII-Alphabeten eingeben kann), verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.
   2. Andernfalls, d.h., das Tastaturlayout ist nicht ASCII-fähig, verwenden Sie das ASCII-fähige Tastaturlayout, das auf dem System mit der höchsten Priorität installiert ist:

      1. Wenn die gedrückte Taste auf dem alternativen Tastaturlayout ein ASCII-alphabetisches oder numerisches Zeichen eingibt, verwenden Sie einen Tastencode dafür.
      2. Andernfalls verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.

Gecko setzt `keyCode`-Werte von Satzzeichen-Tasten so weit wie möglich (wenn die Punkte 7.1 oder 7.2 in der obigen Liste erreicht werden) nach folgenden Regeln:

> [!WARNING]
> Der Zweck dieser neuen zusätzlichen Regeln ist es, Benutzer, deren Tastaturlayouts Unicode-Zeichen auf Tasten in einem US-Tastaturlayout abbilden, Webanwendungen verwenden zu lassen, die nur mit ASCII-fähigen Tastaturlayouts oder einfach mit einem US-Tastaturlayout Firefox unterstützen können. Andernfalls können die neu zugeordneten `keyCode`-Werte mit anderen Tasten in Konflikt stehen. Beispiel: Wenn das aktive Tastaturlayout Russisch ist, haben sowohl die **"Period"**-Taste als auch die **"Slash"**-Taste den `keyCode`-Wert `190` (`KeyEvent.DOM_VK_PERIOD`). Wenn Sie diese Tasten unterscheiden müssen, aber nicht alle Tastaturlayouts der Welt selbst unterstützen möchten, sollten Sie wahrscheinlich {{domxref("KeyboardEvent.code")}} verwenden.

1. Wenn Sie macOS oder Linux verwenden:

   1. Wenn das aktive Tastaturlayout nicht ASCII-fähig ist und ein alternatives ASCII-fähiges Tastaturlayout verfügbar ist.

      1. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen nur mit der unmodifizierten Taste erzeugt, verwenden Sie einen `keyCode` für das Zeichen.
      2. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen mit einer Shift-Modifikatortaste erzeugt, verwenden Sie einen `keyCode` für das verschobene Zeichen.
      3. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das von der Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

   2. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das von der Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

2. Wenn Sie Windows verwenden:

   1. Verwenden Sie einen `keyCode`-Wert für ein ASCII-Zeichen, das von einer Taste erzeugt wird, die auf denselben virtuellen Tastencode von Windows abgebildet ist, wenn das US-Tastaturlayout aktiv ist.
