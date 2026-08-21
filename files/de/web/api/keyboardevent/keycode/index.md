---
title: "KeyboardEvent: keyCode-Eigenschaft"
short-title: keyCode
slug: Web/API/KeyboardEvent/keyCode
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die veraltete **`KeyboardEvent.keyCode`** schreibgeschützte Eigenschaft stellt einen system- und implementierungsabhängigen numerischen Code dar, der den unveränderten Wert der gedrückten Taste identifiziert.

Dies ist in der Regel der dezimale ASCII- ({{RFC(20)}}) oder Windows 1252-Code, der der Taste entspricht. Wenn die Taste nicht identifiziert werden kann, hat dieser Wert `0`.

Sie sollten die Verwendung dieser Eigenschaft möglichst vermeiden, da sie seit einiger Zeit veraltet ist. Stattdessen sollten Sie [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) (für die physische gedrückte Taste) oder [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) (für das Zeichen, dem die Taste zugeordnet ist) verwenden. Prüfen Sie die Kompatibilität der jeweiligen Eigenschaft, wenn Sie sehr alte Browser anvisieren.

> [!NOTE]
> Webentwickler sollten das `keyCode`-Attribut nicht für druckbare Zeichen verwenden, wenn sie `keydown`- und `keyup`-Ereignisse behandeln. Wie oben beschrieben, ist das `keyCode`-Attribut für druckbare Zeichen nicht nützlich, insbesondere für solche, die mit gedrückter <kbd>Shift</kbd>- oder <kbd>Alt</kbd>-Taste eingegeben werden.

## Wert von keyCode

### Druckbare Tasten in Standardposition

Der Wert von Tastenereignissen, die durch das Drücken oder Loslassen von druckbaren Tasten in Standardposition ausgelöst werden, ist zwischen den Browsern nicht kompatibel.

IE gibt einfach den nativen virtuellen Keycode-Wert als `KeyboardEvent.keyCode` aus.

Google Chrome, Chromium und Safari müssen den Wert aus dem Eingabezeichen ermitteln. Wenn das Eingabezeichen mit dem US-Tastaturlayout eingegeben werden kann, verwenden sie den `keyCode`-Wert auf dem US-Tastaturlayout.

Firefox erhält `keyCode`-Werte von {{Glossary("ASCII", "ASCII")}}-Zeichen, die durch die Taste eingegeben werden können — selbst mit Shift-Modifikatoren oder einem ASCII-fähigen Tastaturlayout. Siehe die folgenden Regeln für Details:

1. Wenn das System Windows ist und der native Keycode der gedrückten Taste darauf hinweist, dass die Taste a-z oder 0-9 ist, verwenden Sie einen Keycode dafür.
2. Wenn das System Mac ist und der native Keycode der gedrückten Taste darauf hinweist, dass die Taste 0-9 ist, verwenden Sie einen Keycode dafür.
3. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen ohne Modifikatortaste eingibt, verwenden Sie einen Keycode dafür.
4. Wenn die gedrückte Taste ein ASCII-alphabetisches oder numerisches Zeichen mit einem Shift-Tastenmodifikator eingibt, verwenden Sie einen Keycode dafür.
5. Wenn die gedrückte Taste ein anderes ASCII-Zeichen ohne Modifikatortaste eingibt, verwenden Sie einen Keycode dafür.
6. Wenn die gedrückte Taste ein anderes ASCII-Zeichen mit einem Shift-Tastenmodifikator eingibt, verwenden Sie einen Keycode dafür.
7. Andernfalls, d.h. die gedrückte Taste gibt ein Unicode-Zeichen ein:
   1. Wenn das Tastaturlayout ASCII-fähig ist (d.h. ASCII-Alphabeten eingeben kann), verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.
   2. Andernfalls, wenn das Tastaturlayout nicht ASCII-fähig ist, verwenden Sie das ASCII-fähige Tastaturlayout, das im System mit der höchsten Priorität installiert ist:
      1. Wenn die gedrückte Taste auf dem alternativen Tastaturlayout ein ASCII-alphabetisches oder numerisches Zeichen eingibt, verwenden Sie einen Keycode dafür.
      2. Andernfalls verwenden Sie 0 oder berechnen Sie mit den folgenden zusätzlichen Regeln.

Gecko setzt die `keyCode`-Werte von Satzzeichentasten, soweit möglich (wenn Punkt 7.1 oder 7.2 in der obigen Liste erreicht wird), mit den folgenden Regeln:

> [!WARNING]
> Der Zweck dieser neuen zusätzlichen Regeln besteht darin, dass Benutzer, deren Tastaturlayout Unicode-Zeichen auf Satzzeichentasten im US-Tastaturlayout abbildet, Webanwendungen verwenden können, die Firefox nur mit ASCII-fähigen Tastaturlayouts oder nur mit einem US-Tastaturlayout unterstützen. Andernfalls könnten die neu gemappten `keyCode`-Werte mit anderen Tasten in Konflikt stehen. Zum Beispiel, wenn das aktive Tastaturlayout Russisch ist, sind die `keyCode`-Werte für sowohl die **"Period"**-Taste als auch die **"Slash"**-Taste `190` (`KeyEvent.DOM_VK_PERIOD`). Wenn Sie diese Tasten unterscheiden müssen, aber nicht alle Tastaturlayouts der Welt selbst unterstützen möchten, sollten Sie wahrscheinlich [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) verwenden.

1. Bei macOS oder Linux:
   1. Wenn das aktive Tastaturlayout nicht ASCII-fähig ist und ein alternatives ASCII-fähiges Tastaturlayout verfügbar ist.
      1. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen nur über die unveränderte Taste erzeugt, verwenden Sie einen `keyCode` für das Zeichen.
      2. Wenn das alternative ASCII-fähige Tastaturlayout ein ASCII-Zeichen mit einem Shift-Tastenmodifikator erzeugt, verwenden Sie einen `keyCode` für das geänderte Zeichen.
      3. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das durch die Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

   2. Andernfalls verwenden Sie einen `keyCode` für ein ASCII-Zeichen, das durch die Taste erzeugt wird, wenn das US-Tastaturlayout aktiv ist.

2. Bei Windows:
   1. Verwenden Sie einen `keyCode`-Wert für ein ASCII-Zeichen, das durch eine Taste erzeugt wird, die auf denselben virtuellen Keycode von Windows abgebildet ist, wenn das US-Tastaturlayout aktiv ist.

<table class="no-markdown">
  <caption>
    keyCode-Werte des Keydown-Ereignisses jedes Browsers, verursacht durch druckbare Tasten in Standardposition
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
    <!-- More rows omitted for brevity -->
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

> [!NOTE]
> Kürzliche Macs haben keine <kbd>NumLock</kbd>-Taste und daher keinen Zustand. Deshalb ist der entsperrte Zustand nicht verfügbar.

### Nicht druckbare Tasten (Funktionstasten)

<table class="no-markdown">
  <caption>
    keyCode-Werte des Keydown-Ereignisses jedes Browsers, verursacht durch Modifikatortasten
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
    <!-- Weitere Zeilen wurden aus Gründen der Übersichtlichkeit ausgelassen -->
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

\[1] Auf Windows löst das Drücken der <kbd>AltGraph</kbd>-Taste sowohl die `"ControlLeft"`- als auch die `"AltRight"`-Tastenereignisse aus.

\[2] Wenn das japanische Tastaturlayout aktiv ist, löst das Drücken der <kbd>CapsLock</kbd>-Taste ohne Drücken von <kbd>Shift</kbd> `0xF0 (240)` aus. Die Taste funktioniert als <kbd>Alphanumeric</kbd>-Taste mit dem Label `"英数"`.

\[3] Wenn das japanische Tastaturlayout aktiv ist, löst das Drücken der <kbd>"CapsLock"</kbd>-Taste ohne Drücken von <kbd>Shift</kbd> `0x00 (0)` aus. Die Taste funktioniert als <kbd>"Alphanumeric"</kbd>-Taste mit dem Label `"英数"`.

## Konstanten für den keyCode-Wert

Gecko definiert viele `keyCode`-Werte in `KeyboardEvent`, um die Zuordnungstabelle explizit zu machen. Diese Werte sind für Add-on-Entwickler von Firefox nützlich, aber nicht so nützlich auf öffentlichen Webseiten.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_VK_CANCEL</code></td>
      <td>0x03 (3)</td>
      <td>Abbruch-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HELP</code></td>
      <td>0x06 (6)</td>
      <td>Hilfe-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SPACE</code></td>
      <td>0x08 (8)</td>
      <td>Rücktaste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TAB</code></td>
      <td>0x09 (9)</td>
      <td>Tab-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLEAR</code></td>
      <td>0x0C (12)</td>
      <td>
        "5"-Taste auf dem Nummernblock, wenn NumLock nicht aktiviert ist. Oder auf dem Mac, Löschtaste, die sich an der Position der NumLock-Taste befindet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_RETURN</code></td>
      <td>0x0D (13)</td>
      <td>Return/Eingabetaste auf der Haupttastatur.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ENTER</code></td>
      <td>0x0E (14)</td>
      <td>
        Reserviert, aber nicht verwendet. {{deprecated_inline}} (Entfernt, siehe
        <a href="https://bugzil.la/969247">Firefox Bug 969247</a>.)
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_SHIFT</code></td>
      <td>0x10 (16)</td>
      <td>Shift-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTROL</code></td>
      <td>0x11 (17)</td>
      <td>Strg-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALT</code></td>
      <td>0x12 (18)</td>
      <td>Alt-Taste (Option auf Mac).</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAUSE</code></td>
      <td>0x13 (19)</td>
      <td>Pause-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CAPS_LOCK</code></td>
      <td>0x14 (20)</td>
      <td>Feststelltaste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANA</code></td>
      <td>0x15 (21)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANGUL</code></td>
      <td>0x15 (21)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EISU</code></td>
      <td>0x 16 (22)</td>
      <td>"英数"-Taste auf japanischer Mac-Tastatur.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_JUNJA</code></td>
      <td>0x17 (23)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_FINAL</code></td>
      <td>0x18 (24)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANJA</code></td>
      <td>0x19 (25)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANJI</code></td>
      <td>0x19 (25)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ESCAPE</code></td>
      <td>0x1B (27)</td>
      <td>Escape-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONVERT</code></td>
      <td>0x1C (28)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NONCONVERT</code></td>
      <td>0x1D (29)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ACCEPT</code></td>
      <td>0x1E (30)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MODECHANGE</code></td>
      <td>0x1F (31)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SPACE</code></td>
      <td>0x20 (32)</td>
      <td>Leertaste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_UP</code></td>
      <td>0x21 (33)</td>
      <td>Bild-auf-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_DOWN</code></td>
      <td>0x22 (34)</td>
      <td>Bild-ab-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_END</code></td>
      <td>0x23 (35)</td>
      <td>Ende-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HOME</code></td>
      <td>0x24 (36)</td>
      <td>Pos1-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LEFT</code></td>
      <td>0x25 (37)</td>
      <td>Pfeil links.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UP</code></td>
      <td>0x26 (38)</td>
      <td>Pfeil nach oben.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_RIGHT</code></td>
      <td>0x27 (39)</td>
      <td>Pfeil rechts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOWN</code></td>
      <td>0x28 (40)</td>
      <td>Pfeil nach unten.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SELECT</code></td>
      <td>0x29 (41)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINT</code></td>
      <td>0x2A (42)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXECUTE</code></td>
      <td>0x2B (43)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINTSCREEN</code></td>
      <td>0x2C (44)</td>
      <td>Druck-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_INSERT</code></td>
      <td>0x2D (45)</td>
      <td>Einfüg-Taste (Ins).</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DELETE</code></td>
      <td>0x2E (46)</td>
      <td>Lösch-Taste (Del).</td>
    </tr>
    <tr>
      <td><code>DOM_VK_0</code></td>
      <td>0x30 (48)</td>
      <td>"0"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_1</code></td>
      <td>0x31 (49)</td>
      <td>"1"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_2</code></td>
      <td>0x32 (50)</td>
      <td>"2"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_3</code></td>
      <td>0x33 (51)</td>
      <td>"3"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_4</code></td>
      <td>0x34 (52)</td>
      <td>"4"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_5</code></td>
      <td>0x35 (53)</td>
      <td>"5"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_6</code></td>
      <td>0x36 (54)</td>
      <td>"6"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_7</code></td>
      <td>0x37 (55)</td>
      <td>"7"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_8</code></td>
      <td>0x38 (56)</td>
      <td>"8"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_9</code></td>
      <td>0x39 (57)</td>
      <td>"9"-Taste an der Standardposition.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COLON</code></td>
      <td>0x3A (58)</td>
      <td>Doppelpunkt (":")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEMICOLON</code></td>
      <td>0x3B (59)</td>
      <td>Semikolon (";")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LESS_THAN</code></td>
      <td>0x3C (60)</td>
      <td>Kleiner-als ("&#x3C;")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EQUALS</code></td>
      <td>0x3D (61)</td>
      <td>Gleichheitszeichen ("=")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_GREATER_THAN</code></td>
      <td>0x3E (62)</td>
      <td>Größer-als (">")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUESTION_MARK</code></td>
      <td>0x3F (63)</td>
      <td>Fragezeichen ("?")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AT</code></td>
      <td>0x40 (64)</td>
      <td>At-Zeichen ("@")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_A</code></td>
      <td>0x41 (65)</td>
      <td>"A"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_B</code></td>
      <td>0x42 (66)</td>
      <td>"B"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_C</code></td>
      <td>0x43 (67)</td>
      <td>"C"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_D</code></td>
      <td>0x44 (68)</td>
      <td>"D"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_E</code></td>
      <td>0x45 (69)</td>
      <td>"E"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F</code></td>
      <td>0x46 (70)</td>
      <td>"F"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_G</code></td>
      <td>0x47 (71)</td>
      <td>"G"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_H</code></td>
      <td>0x48 (72)</td>
      <td>"H"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_I</code></td>
      <td>0x49 (73)</td>
      <td>"I"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_J</code></td>
      <td>0x4A (74)</td>
      <td>"J"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_K</code></td>
      <td>0x4B (75)</td>
      <td>"K"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_L</code></td>
      <td>0x4C (76)</td>
      <td>"L"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_M</code></td>
      <td>0x4D (77)</td>
      <td>"M"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_N</code></td>
      <td>0x4E (78)</td>
      <td>"N"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_O</code></td>
      <td>0x4F (79)</td>
      <td>"O"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_P</code></td>
      <td>0x50 (80)</td>
      <td>"P"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Q</code></td>
      <td>0x51 (81)</td>
      <td>"Q"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_R</code></td>
      <td>0x52 (82)</td>
      <td>"R"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_S</code></td>
      <td>0x53 (83)</td>
      <td>"S"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_T</code></td>
      <td>0x54 (84)</td>
      <td>"T"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_U</code></td>
      <td>0x55 (85)</td>
      <td>"U"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_V</code></td>
      <td>0x56 (86)</td>
      <td>"V"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_W</code></td>
      <td>0x57 (87)</td>
      <td>"W"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_X</code></td>
      <td>0x58 (88)</td>
      <td>"X"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Y</code></td>
      <td>0x59 (89)</td>
      <td>"Y"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Z</code></td>
      <td>0x5A (90)</td>
      <td>"Z"-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN</code></td>
      <td>0x5B (91)</td>
      <td>Windows-Logo-Taste auf Windows. Oder Super oder Hyper-Taste auf Linux.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTEXT_MENU</code></td>
      <td>0x5D (93)</td>
      <td>Öffnen des Kontextmenüs Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLEEP</code></td>
      <td>0x5F (95)</td>
      <td>Linux-Unterstützung für diesen keycode wurde in Gecko 4.0 hinzugefügt.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD0</code></td>
      <td>0x60 (96)</td>
      <td>"0" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD1</code></td>
      <td>0x61 (97)</td>
      <td>"1" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD2</code></td>
      <td>0x62 (98)</td>
      <td>"2" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD3</code></td>
      <td>0x63 (99)</td>
      <td>"3" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD4</code></td>
      <td>0x64 (100)</td>
      <td>"4" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD5</code></td>
      <td>0x65 (101)</td>
      <td>"5" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD6</code></td>
      <td>0x66 (102)</td>
      <td>"6" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD7</code></td>
      <td>0x67 (103)</td>
      <td>"7" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD8</code></td>
      <td>0x68 (104)</td>
      <td>"8" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD9</code></td>
      <td>0x69 (105)</td>
      <td>"9" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MULTIPLY</code></td>
      <td>0x6A (106)</td>
      <td>"*" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ADD</code></td>
      <td>0x6B (107)</td>
      <td>"+" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEPARATOR</code></td>
      <td>0x6C (108)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>DOM_VK_SUBTRACT</code></td>
      <td>0x6D (109)</td>
      <td>"-" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DECIMAL</code></td>
      <td>0x6E (110)</td>
      <td>Dezimalpunkt auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DIVIDE</code></td>
      <td>0x6F (111)</td>
      <td>"/" auf dem numerischen Tastenfeld.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F1</code></td>
      <td>0x70 (112)</td>
      <td>F1-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F2</code></td>
      <td>0x71 (113)</td>
      <td>F2-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F3</code></td>
      <td>0x72 (114)</td>
      <td>F3-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F4</code></td>
      <td>0x73 (115)</td>
      <td>F4-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F5</code></td>
      <td>0x74 (116)</td>
      <td>F5-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F6</code></td>
      <td>0x75 (117)</td>
      <td>F6-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F7</code></td>
      <td>0x76 (118)</td>
      <td>F7-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F8</code></td>
      <td>0x77 (119)</td>
      <td>F8-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F9</code></td>
      <td>0x78 (120)</td>
      <td>F9-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F10</code></td>
      <td>0x79 (121)</td>
      <td>F10-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F11</code></td>
      <td>0x7A (122)</td>
      <td>F11-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F12</code></td>
      <td>0x7B (123)</td>
      <td>F12-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F13</code></td>
      <td>0x7C (124)</td>
      <td>F13-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F14</code></td>
      <td>0x7D (125)</td>
      <td>F14-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F15</code></td>
      <td>0x7E (126)</td>
      <td>F15-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F16</code></td>
      <td>0x7F (127)</td>
      <td>F16-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F17</code></td>
      <td>0x80 (128)</td>
      <td>F17-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F18</code></td>
      <td>0x81 (129)</td>
      <td>F18-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F19</code></td>
      <td>0x82 (130)</td>
      <td>F19-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F20</code></td>
      <td>0x83 (131)</td>
      <td>F20-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F21</code></td>
      <td>0x84 (132)</td>
      <td>F21-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F22</code></td>
      <td>0x85 (133)</td>
      <td>F22-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F23</code></td>
      <td>0x86 (134)</td>
      <td>F23-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F24</code></td>
      <td>0x87 (135)</td>
      <td>F24-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUM_LOCK</code></td>
      <td>0x90 (144)</td>
      <td>Num-Lock-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SCROLL_LOCK</code></td>
      <td>0x91 (145)</td>
      <td>Rollen-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_JISHO</code></td>
      <td>0x92 (146)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Dies wurde für die "Wörterbuch"-Taste auf Fujitsu OASYS verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_MASSHOU</code></td>
      <td>0x93 (147)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Dies wurde für die "Wort deregistrieren"-Taste auf Fujitsu OASYS verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_TOUROKU</code></td>
      <td>0x94 (148)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Dies wurde für die "Wort registrieren"-Taste auf Fujitsu OASYS verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_LOYA</code></td>
      <td>0x95 (149)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Dies wurde für die "Linke OYAYUBI"-Taste auf Fujitsu OASYS verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_ROYA</code></td>
      <td>0x96 (150)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Dies wurde für die "Rechte OYAYUBI"-Taste auf Fujitsu OASYS verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_CIRCUMFLEX</code></td>
      <td>0xA0 (160)</td>
      <td>Zirkumflex ("^")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXCLAMATION</code></td>
      <td>0xA1 (161)</td>
      <td>Ausrufezeichen ("!")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOUBLE_QUOTE</code></td>
      <td>0xA2 (162)</td>
      <td>Doppelte Anführungszeichen (""")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HASH</code></td>
      <td>0xA3 (163)</td>
      <td>Raute ("#")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOLLAR</code></td>
      <td>0xA4 (164)</td>
      <td>Dollarzeichen ("$")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERCENT</code></td>
      <td>0xA5 (165)</td>
      <td>Prozentsymbol ("%")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AMPERSAND</code></td>
      <td>0xA6 (166)</td>
      <td>Et-Zeichen ("&#x26;")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UNDERSCORE</code></td>
      <td>0xA7 (167)</td>
      <td>Unterstrich ("_")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_PAREN</code></td>
      <td>0xA8 (168)</td>
      <td>Klammer auf ("(")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_PAREN</code></td>
      <td>0xA9 (169)</td>
      <td>Klammer zu (")")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ASTERISK</code></td>
      <td>0xAA (170)</td>
      <td>Sternchen ("*")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLUS</code></td>
      <td>0xAB (171)</td>
      <td>Plus ("+")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PIPE</code></td>
      <td>0xAC (172)</td>
      <td>Pipe ("|")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HYPHEN_MINUS</code></td>
      <td>0xAD (173)</td>
      <td>Bindestrich (-) US/docs/Minus ("-")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_CURLY_BRACKET</code></td>
      <td>0xAE (174)</td>
      <td>Geschweifte Klammer auf ("{")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_CURLY_BRACKET</code></td>
      <td>0xAF (175)</td>
      <td>Geschweifte Klammer zu ("}")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TILDE</code></td>
      <td>0xB0 (176)</td>
      <td>Tilde ("~")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_MUTE</code></td>
      <td>0xB5 (181)</td>
      <td>Stummschaltung-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_DOWN</code></td>
      <td>0xB6 (182)</td>
      <td>Lautstärke verringern-Taste</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_UP</code></td>
      <td>0xB7 (183)</td>
      <td>Lautstärke erhöhen-Taste</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COMMA</code></td>
      <td>0xBC (188)</td>
      <td>Komma (",")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERIOD</code></td>
      <td>0xBE (190)</td>
      <td>Punkt (".")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLASH</code></td>
      <td>0xBF (191)</td>
      <td>Schrägstrich ("/")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_QUOTE</code></td>
      <td>0xC0 (192)</td>
      <td>Gravis-Akzent ("`")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_BRACKET</code></td>
      <td>0xDB (219)</td>
      <td>Eckige Klammer auf ("[")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SLASH</code></td>
      <td>0xDC (220)</td>
      <td>Umgekehrter Schrägstrich ("\")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_BRACKET</code></td>
      <td>0xDD (221)</td>
      <td>Eckige Klammer zu ("]")-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUOTE</code></td>
      <td>0xDE (222)</td>
      <td>Anführungszeichen (''')-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_META</code></td>
      <td>0xE0 (224)</td>
      <td>Meta-Taste auf Linux, Befehlstaste auf Mac.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALTGR</code></td>
      <td>0xE1 (225)</td>
      <td>AltGr-Taste (Level 3 Umschalten oder Level 5 Umschalten) auf Linux.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_HELP</code></td>
      <td>0xE3 (227)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für die Olivetti ICO-Tastatur verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_00</code></td>
      <td>0xE4 (228)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für die Olivetti ICO-Tastatur verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_CLEAR</code></td>
      <td>0xE6 (230)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für die Olivetti ICO-Tastatur verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_RESET</code></td>
      <td>0xE9 (233)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_JUMP</code></td>
      <td>0xEA (234)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA1</code></td>
      <td>0xEB (235)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA2</code></td>
      <td>0xEC (236)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA3</code></td>
      <td>0xED (237)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_WSCTRL</code></td>
      <td>0xEE (238)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CUSEL</code></td>
      <td>0xEF (239)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ATTN</code></td>
      <td>0xF0 (240)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FINISH</code></td>
      <td>0xF1 (241)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_COPY</code></td>
      <td>0xF2 (242)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_AUTO</code></td>
      <td>0xF3 (243)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ENLW</code></td>
      <td>0xF4 (244)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_BACKTAB</code></td>
      <td>0xF5 (245)</td>
      <td>
        Eine
        <a href="#oem_specific_keys_on_windows">OEM-spezifische Taste auf Windows</a>.
        Diese wurde für das Gerät von Nokia/Ericsson verwendet.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_ATTN</code></td>
      <td>0xF6 (246)</td>
      <td>Attn (Attention)-Taste von IBM Midrange-Computern, z.B. AS/400.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CRSEL</code></td>
      <td>0xF7 (247)</td>
      <td>CrSel (Cursor Selection)-Taste des IBM 3270-Tastaturlayouts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXSEL</code></td>
      <td>0xF8 (248)</td>
      <td>ExSel (Extend Selection)-Taste des IBM 3270-Tastaturlayouts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EREOF</code></td>
      <td>0xF9 (249)</td>
      <td>Erase EOF-Taste des IBM 3270-Tastaturlayouts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLAY</code></td>
      <td>0xFA (250)</td>
      <td>Play-Taste des IBM 3270-Tastaturlayouts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ZOOM</code></td>
      <td>0xFB (251)</td>
      <td>Zoom-Taste.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PA1</code></td>
      <td>0xFD (253)</td>
      <td>PA1-Taste des IBM 3270-Tastaturlayouts.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CLEAR</code></td>
      <td>0xFE (254)</td>
      <td>
        Löschtaste, aber wir sind nicht sicher, worin sich der Unterschied zur
        <code>DOM_VK_CLEAR</code> unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
window.addEventListener("keydown", (event) => {
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
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### OEM-spezifische Tasten auf Windows

Unter Windows sind einige Werte des virtuellen Keycodes für OEM-spezifische Tasten definiert (reserviert). Diese sind für spezielle Tasten auf nicht standardmäßigen Tastaturen verfügbar. Mit anderen Worten, einige Werte werden von zwei oder mehr Anbietern (oder Hardware) für unterschiedliche Bedeutungen genutzt.

Beginnend mit Gecko 21 (und älter als 15) sind OEM-spezifische Tastaturwerte nur auf Windows in der keyCode-Eigenschaft verfügbar. Daher sind sie nicht nützlich für gewöhnliche Webanwendungen. Sie sind nur für Intranet-Anwendungen oder in ähnlichen Situationen nützlich.

Sehen Sie "[Herstellerspezifische virtuelle Schlüsselcodes (Windows CE 5.0)](<https://learn.microsoft.com/en-us/previous-versions/windows/embedded/aa452679(v=msdn.10)>)" in MSDN für weitere Details.
