---
title: "KeyboardEvent: keyCode-Eigenschaft"
short-title: keyCode
slug: Web/API/KeyboardEvent/keyCode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die veraltete, schreibgeschützte Eigenschaft **`KeyboardEvent.keyCode`** stellt einen system- und implementierungsabhängigen numerischen Code dar, der den unveränderten Wert der gedrückten Taste identifiziert.

Dies ist normalerweise der dezimale ASCII- ({{RFC(20)}}) oder Windows-1252-Code, der der Taste entspricht. Wenn die Taste nicht identifiziert werden kann, ist dieser Wert `0`.

Sie sollten die Verwendung dieser Eigenschaft vermeiden, wenn möglich; sie ist seit einiger Zeit veraltet. Stattdessen sollten Sie [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) (für die physisch gedrückte Taste) oder [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) (für das Zeichen, das der Taste zugeordnet ist) verwenden. Überprüfen Sie die Kompatibilität beider Eigenschaften, wenn Sie sehr alte Browser anvisieren.

> [!NOTE]
> Webentwickler sollten das `keyCode`-Attribut für druckbare Zeichen bei der Handhabung von `keydown`- und `keyup`-Ereignissen nicht verwenden. Wie oben beschrieben, ist das `keyCode`-Attribut für druckbare Zeichen nicht nützlich, insbesondere für solche, die mit gedrückter <kbd>Shift</kbd>- oder <kbd>Alt</kbd>-Taste eingegeben werden.

## Wert von keyCode

### Druckbare Tasten in Standardposition

Der Wert von Tasteneingaben, die durch das Drücken oder Loslassen von druckbaren Tasten in Standardposition verursacht werden, ist zwischen den Browsern nicht kompatibel.

IE gibt einfach den nativen virtuellen Keycode-Wert als `KeyboardEvent.keyCode` an.

Google Chrome, Chromium und Safari müssen den Wert aus dem Eingabezeichen bestimmen. Wenn das einzugebende Zeichen mit dem US-Tastaturlayout eingegeben werden kann, verwenden sie den `keyCode`-Wert des US-Tastaturlayouts.

Firefox erhält `keyCode`-Werte von {{Glossary("ASCII", "ASCII")}}-Zeichen, die über die Taste eingegeben werden können — auch mit Shift-Modifikatoren oder einem ASCII-fähigen Tastaturlayout. Siehe die folgenden Regeln für Details:

1. Wenn das System Windows ist und der native Keycode der gedrückten Taste darauf hinweist, dass die Taste a-z oder 0-9 ist, verwenden Sie einen Keycode dafür.
2. Wenn das System Mac ist und der native Keycode der gedrückten Taste darauf hinweist, dass die Taste 0-9 ist, verwenden Sie einen Keycode dafür.
3. Wenn die gedrückte Taste ein ASCII-Alphabet- oder Zahlzeichen ohne Modifikatortaste eingibt, verwenden Sie einen Keycode dafür.
4. Wenn die gedrückte Taste ein ASCII-Alphabet- oder Zahlzeichen mit einer Shift-Taste-Modifizierung eingibt, verwenden Sie einen Keycode dafür.
5. Wenn die gedrückte Taste ein anderes ASCII-Zeichen ohne Modifikatortaste eingibt, verwenden Sie einen Keycode dafür.
6. Wenn die gedrückte Taste ein anderes ASCII-Zeichen mit einer Shift-Taste-Modifizierung eingibt, verwenden Sie einen Keycode dafür.
7. Andernfalls, d.h. die gedrückte Taste gibt ein Unicode-Zeichen ein:

   1. Wenn das Tastaturlayout ASCII-fähig ist (d.h. ASCII-Alphabeten eingeben kann), verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.
   2. Andernfalls, d.h. das Tastaturlayout ist nicht ASCII-fähig, verwenden Sie das ASCII-fähige Tastaturlayout, das in der Umgebung mit der höchsten Priorität installiert ist:

      1. Wenn die gedrückte Taste auf dem alternativen Tastaturlayout ein ASCII-Alphabet- oder Zahlzeichen eingibt, verwenden Sie einen Keycode dafür.
      2. Andernfalls verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.

Gecko setzt `keyCode`-Werte von Interpunktionszeichen so weit wie möglich (wenn Punkt 7.1 oder 7.2 in der obigen Liste erreicht wird) mit den folgenden Regeln:

> [!WARNING]
> Der Zweck dieser neuen zusätzlichen Regeln besteht darin, dass Benutzer, deren Tastaturlayouts Unicode-Zeichen auf Interpunktionstasten auf einem US-Tastaturlayout abbilden, Webanwendungen verwenden können, die nur Firefox unterstützen, entweder mit ASCII-fähigen Tastaturlayouts oder nur mit einem US-Tastaturlayout. Andernfalls könnten die neu zugeordneten `keyCode`-Werte mit anderen Tasten in Konflikt geraten. Wenn beispielsweise das aktive Tastaturlayout Russisch ist, ist der `keyCode`-Wert **sowohl** für die `"Period"`-Taste als auch für die `"Slash"`-Taste `190` (`KeyEvent.DOM_VK_PERIOD`). Wenn Sie diese Tasten unterscheiden müssen, aber nicht alle Tastaturlayouts der Welt selbst unterstützen möchten, sollten Sie wahrscheinlich [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) verwenden.

1. Wenn Sie macOS oder Linux verwenden:

   1. Wenn das aktive Tastaturlayout nicht ASCII-fähig ist und ein alternatives ASCII-fähiges Tastaturlayout verfügbar ist.

      1. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen nur durch die unveränderte Taste erzeugt, verwenden Sie einen `keyCode` für das Zeichen.
      2. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen mit einer Shift-Taste-Modifizierung erzeugt, verwenden Sie einen `keyCode` für das geänderte Zeichen.
      3. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das von der Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

   2. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das von der Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

2. Wenn Sie auf Windows arbeiten:

   1. Verwenden Sie einen `keyCode`-Wert für ein ASCII-Zeichen, das von einer Taste erzeugt wird, die dem gleichen virtuellen Keycode von Windows entspricht, wenn das US-Tastaturlayout aktiv ist.

<table class="no-markdown">
  <caption>
    keyCode-Werte des keydown-Ereignisses jedes Browsers verursacht durch druckbare Tasten in
    Standardposition
  </caption>
  <thead>
    <tr>
      <th scope="row">[`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Digit1"</code></th>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit2"</code></th>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit3"</code></th>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit4"</code></th>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit5"</code></th>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit6"</code></th>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit7"</code></th>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit8"</code></th>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit9"</code></th>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit0"</code></th>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyA"</code></th>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyB"</code></th>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyC"</code></th>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyD"</code></th>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyE"</code></th>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyF"</code></th>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyG"</code></th>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyH"</code></th>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyI"</code></th>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyJ"</code></th>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyK"</code></th>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyL"</code></th>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyM"</code></th>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyN"</code></th>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyO"</code></th>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyP"</code></th>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyQ"</code></th>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyR"</code></th>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyS"</code></th>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyT"</code></th>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyU"</code></th>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyV"</code></th>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyW"</code></th>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyX"</code></th>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyY"</code></th>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyZ"</code></th>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

<table class="no-markdown">
  <caption>
    keyCode-Werte des keydown-Ereignisses jedes Browsers verursacht durch druckbare Tasten in
    Standardposition (Interpunktionszeichen im US-Layout):
  </caption>
  <thead>
    <tr>
      <th scope="row">[`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows (10.9)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Comma"</code></th>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Comma"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code></th>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code></th>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [3]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code> [1]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code> mit <kbd>Shift</kbd></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code></th>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code> mit Shift</th>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
      <td><code>0x38 (56)</code>⚠️</td>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code></th>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0x32 (50)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code> mit <kbd>Shift</kbd></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code></th>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code></th>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xF4 (244)</code>⚠️</td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code></th>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code></th>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code>[1]</td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code> mit <kbd>Shift</kbd></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBD (189)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code></th>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code> [1]</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0x36 (54)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code>[1]</td>
      <td><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code> mit <kbd>Shift</kbd></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code></th>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code> mit <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code></th>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code> mit <kbd>Shift</kbd></th>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xBD (189)</code>⚠️</td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
      <th scope="col">US</th>
      <th scope="col">Japanisch</th>
      <th scope="col">Griechisch</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Der Wert wird von einer JIS-Tastatur eingegeben. Wenn Sie eine ANSI-Tastatur verwenden, sind der `keyCode`-Wert und das eingegebene Zeichen das, was Sie aus dem US-Tastaturlayout auswählen.

\[2] Die Taste ist eine Tote Taste. Der Wert des `keyup`-Events ist `0xBA (186)`.

\[3] Die Taste ist eine Tote Taste. Der Wert des `keyup`-Events ist `0x10 (16)`.

\[4] Es werden keine Tastendrücke ausgelöst.

\[5] Die Taste ist mit dem griechischen Tastaturlayout nicht verfügbar (gibt kein Zeichen ein). Der Wert des `keyup`-Events ist `0x00 (0)`.

### Nicht-druckbare Tasten (Funktionstasten)

<table class="no-markdown">
  <caption>
    keyCode-Werte des `keydown`-Ereignisses bei jedem Browser, verursacht durch Modifikatortasten:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"AltLeft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"AltRight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"AltRight"</code> wenn es die <code>"AltGraph"</code>-Taste ist
      </th>
      <td>[1]</td>
      <td>[1]</td>
      <td>❌N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
      <td>❌ N/A</td>
      <td>[1]</td>
      <td>❌ N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlLeft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlRight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"MetaLeft"</code></th>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"MetaRight"</code></th>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftLeft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftRight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Unter Windows löst das Drücken der <kbd>AltGraph</kbd>-Taste sowohl die `"ControlLeft"`- als auch die `"AltRight"`-Tastenevents aus.

\[2] Wenn das japanische Tastaturlayout aktiv ist, löst das Drücken der <kbd>CapsLock</kbd>-Taste ohne Drücken der <kbd>Shift</kbd>-Taste `0xF0 (240)` aus. Die Taste funktioniert als <kbd>Alphanumeric</kbd>-Taste mit der Beschriftung `"英数"`.

\[3] Wenn das japanische Tastaturlayout aktiv ist, löst das Drücken der <kbd>"CapsLock"</kbd>-Taste ohne Drücken der <kbd>Shift</kbd>-Taste `0x00 (0)` aus. Die Taste funktioniert als <kbd>"Alphanumeric"</kbd>-Taste mit der Beschriftung `"英数"`.

<table class="no-markdown">
  <caption>
    keyCode-Werte des `keydown`-Ereignisses bei jedem Browser, verursacht durch nicht-druckbare Tasten:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"ContextMenu"</code></th>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Enter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Delete"</code></th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"End"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Help"</code></th>
      <td>❌ N/A</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x2F (47)</code><br />⚠️ [3]</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x06 (6)</code><br />⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Insert"</code></th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageDown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageUp"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowDown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowLeft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowRight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowUp"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Escape"</code></th>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PrintScreen"</code></th>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2A (42)</code>⚠️</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code></td>
      <td><code>0x2A (42)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Pause"</code></th>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Ein `keypress`-Ereignis wird ausgelöst und seine `keyCode`- und `charCode`-Werte sind `0x10 (16)`, aber der Text wird nicht wirklich in den Editor eingegeben.

\[2] Auf dem Mac wird die <kbd>Help</kbd>-Taste der <kbd>Insert</kbd>-Taste auf PC-Tastaturen zugeordnet. Diese `keyCode`-Werte sind dieselben wie die `keyCode`-Werte der <kbd>Insert</kbd>-Taste.

\[3] Getestet auf Fedora 20.

\[4] Es wird nur ein `keyup`-Ereignis ausgelöst.

\[5] Die PC-Tasten <kbd>PrintScreen</kbd>, <kbd>ScrollLock</kbd> und <kbd>Pause</kbd> sind den Mac-Tasten <kbd>F13</kbd>, <kbd>F14</kbd> und <kbd>F15</kbd> zugeordnet. Chrome und Safari ordnen ihnen dieselben `keyCode`-Werte zu wie die Mac-Tasten.

\[6] Die <kbd>Pause</kbd>-Taste zusammen mit <kbd>Control</kbd> erzeugt `0x03 (3)`.

<table class="no-markdown">
  <caption>
    keyCode-Werte des `keydown`-Ereignisses bei jedem Browser, verursacht durch Funktionstasten:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"F1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F11"</code></th>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F12"</code></th>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F13"</code></th>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code> [1]</td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x2C (44)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F14"</code></th>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code> [1]</td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x91 (145)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F15"</code></th>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code> [1]</td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x13 (19)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F16"</code></th>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code> [1]</td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> [1]</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> [1]</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0xE5 (229)</code>⚠️ [5]</td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x84 (132)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x85 (133)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x86 (134)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x87 (135)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code)
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Getestet auf Fedora 20.

\[2] Auf PCs sind <kbd>PrintScreen</kbd>, <kbd>ScrollLock</kbd> und <kbd>Pause</kbd> den Mac-Tasten <kbd>F13</kbd>, <kbd>F14</kbd> und <kbd>F15</kbd> zugeordnet. Firefox setzt für sie dieselben `keyCode`-Werte wie die PC-Tasten.

\[3] Getestet auf Fedora 20. Die Tasten erzeugen keine `GDK_Fxx`-Keysyms. Falls die Tasten korrekte Keysyms erzeugen, müssen diese Werte dieselben sein wie bei IE.

\[4] Getestet auf Fedora 20. Die Tasten lösen keine DOM-Tastenereignisse auf Chromium aus.

\[5] Der `keyCode`-Wert eines `keyUp`-Ereignisses ist `0x83 (131)`.

\[6] Getestet auf Fedora 20. Die Tasten lösen keine DOM-Tastenereignisse auf Firefox aus.

\[7] Nur das `keydown`-Ereignis wird ausgelöst.

\[8] Keine DOM-Tastenereignisse werden auf Firefox ausgelöst.
