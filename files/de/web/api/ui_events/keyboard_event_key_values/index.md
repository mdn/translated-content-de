---
title: Tastenwerte für Tastaturereignisse
slug: Web/API/UI_Events/Keyboard_event_key_values
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{DefaultAPISidebar("UI Events")}}

Die unten stehenden Tabellen listen die standardisierten Werte für die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft auf und erläutern, wofür die jeweilige Taste typischerweise verwendet wird. Entsprechende virtuelle Tasten-Codes für gängige Plattformen sind, sofern verfügbar, eingeschlossen.

## Besondere Werte

Werte von `key`, die andere Bedeutungen als die Identifizierung einer bestimmten Taste oder eines Zeichens haben.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Unidentified"</code></td>
      <td>
        <p>
          Der Benutzeragent konnte den virtuellen Tasten-Code des Ereignisses keinem
          spezifischen Tastenwert zuordnen.
        </p>
        <p>
          Dies kann aufgrund von Hardware- oder Softwarebeschränkungen oder aufgrund
          von Einschränkungen der Plattform auftreten, auf der der Benutzeragent läuft.
        </p>
      </td>
      <td><em>variiert</em></td>
      <td><em>variiert</em></td>
      <td><em>variiert</em></td>
      <td><em>variiert</em></td>
    </tr>
  </tbody>
</table>

## Modifikatortasten

_Modifikatoren_ sind spezielle Tasten, die verwendet werden, um Sonderzeichen zu erzeugen oder spezielle Aktionen auszulösen, wenn sie in Kombination mit anderen Tasten verwendet werden. Beispiele sind die <kbd>Shift</kbd> und <kbd>Control</kbd>-Tasten sowie Sperrtasten wie <kbd>Caps Lock</kbd> und <kbd>NumLock</kbd>.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Alt"</code> [4]</td>
      <td>Die <kbd>Alt</kbd> (Alternative) Taste.</td>
      <td>
        <code>VK_MENU</code> (0x12)<br /><code>VK_LMENU</code> (0xA4)<br /><code
          >VK_RMENU</code
        >
        (0xA5)
      </td>
      <td>
        <code>kVK_Option</code> (0x3A)<br /><code>kVK_RightOption</code> (0x3D)
      </td>
      <td>
        <code>GDK_KEY_Alt_L</code> (0xFFE9)<br /><code>GDK_KEY_Alt_R</code>
        (0xFFEA)<br /><code>Qt::Key_Alt</code> (0x01000023)
      </td>
      <td>
        <code>KEYCODE_ALT_LEFT</code> (57)<br /><code>KEYCODE_ALT_RIGHT</code>
        (58)
      </td>
    </tr>
    <tr>
      <td><code>"AltGraph"</code> [4]</td>
      <td>
        Die <kbd>AltGr</kbd> oder <kbd>AltGraph</kbd> (Alternate Graphics)
        Taste. Aktiviert den ISO Level 3 Shift-Modifikator (wobei
        <kbd>Shift</kbd> der Level 2 Modifikator ist).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_ISO_Level3_Shift</code
        >
        (0xFE03)<br /><code>GDK_KEY_ISO_Level3_Latch</code> (0xFE04)<br /><code
          >GDK_KEY_ISO_Level3_Lock</code
        >
        (0xFE05)<br /><code>GDK_KEY_ISO_Level5_Shift</code> (0xFE11)<br /><code
          >GDK_KEY_ISO_Level5_Latch</code
        >
        (0xFE12)<br /><code>GDK_KEY_ISO_Level5_Lock</code> (0xFE13)<br /><code
          >Qt::Key_AltGr</code
        >
        (0x01001103<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CapsLock"</code></td>
      <td>
        Die <kbd>Caps Lock</kbd> Taste. Aktiviert oder deaktiviert die
        Großschreibtasten-Sperre für nachfolgende Eingaben.
      </td>
      <td><code>VK_CAPITAL</code> (0x14)</td>
      <td><code>kVK_CapsLock</code> (0x39)</td>
      <td>
        <code>GDK_KEY_Caps_Lock</code> (0xFFE5)<br /><code
          >Qt::Key_CapsLock</code
        >
        (0x01000024)
      </td>
      <td><code>KEYCODE_CAPS_LOCK</code> (115)</td>
    </tr>
    <tr>
      <td><code>"Control"</code></td>
      <td>
        Die <kbd>Control</kbd>, <kbd>Ctrl</kbd>, oder <kbd>Ctl</kbd> Taste.
        Ermöglicht das Tippen von Steuerzeichen.
      </td>
      <td>
        <code>VK_CONTROL</code> (0x11)<br /><code>VK_LCONTROL</code>
        (0xA2)<br /><code>VK_RCONTROL</code> (0xA3)
      </td>
      <td>
        <code>kVK_Control</code> (0x3B)<br /><code>kVK_RightControl</code>
        (0x3E)
      </td>
      <td>
        <code>GDK_KEY_Control_L</code> (0xFFE3)<br /><code
          >GDK_KEY_Control_R</code
        >
        (0xFFE4)<br /><code>Qt::Key_Control</code> (0x01000021)
      </td>
      <td>
        <code>KEYCODE_CTRL_LEFT</code> (113)<br /><code
          >KEYCODE_CTRL_RIGHT</code
        >
        (114)
      </td>
    </tr>
    <tr>
      <td><code>"Fn"</code></td>
      <td>
        Die <kbd>Fn</kbd> (Function modifier) Taste. Wird verwendet, um die
        Eingabe von Funktionstasten-Zeichen (z.B. <kbd>F1</kbd>–<kbd>F15</kbd>)
        auf Tastaturen, die keinen dedizierten Funktionstastenbereich haben, zu
        ermöglichen. Wird oft in der Hardware behandelt, so dass keine
        Ereignisse für diese Taste erzeugt werden.
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        Die <kbd>FnLock</kbd> oder <kbd>F-Lock</kbd> (Function Lock) Taste.
        Aktiviert oder deaktiviert den Modus der Funktionstasten, der durch
        <code>"Fn"</code> beschrieben wird. Wird oft in der Hardware behandelt,
        so dass keine Ereignisse für diese Taste erzeugt werden.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hyper"</code> [3]</td>
      <td>Die <kbd>Hyper</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hyper_L</code> (0xFFED)<br /><code>GDK_KEY_Hyper_R</code>
        (0xFFEE)<br /><code>Qt::Key_Hyper_L</code> (0x01000056)<br /><code
          >Qt::Key_Hyper_R</code
        >
        (0x01000057)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Meta"</code> [1]</td>
      <td>
        Die <kbd>Meta</kbd> Taste. Ermöglicht die Eingabe spezieller Befehle.
        Dies ist die <kbd>Windows</kbd>-Logo-Taste oder die <kbd>Command</kbd>
        oder <kbd>⌘</kbd> Taste auf Mac-Tastaturen.
      </td>
      <td><code>VK_LWIN</code> (0x5B)<br /><code>VK_RWIN</code> (0x5C)</td>
      <td>
        <code>kVK_Command</code> (0x37)<br /><code>kVK_RightCommand</code>
        (0x36)
      </td>
      <td>
        <code>GDK_KEY_Meta_L</code> (0xFFE7)<br /><code>GDK_KEY_Meta_R</code>
        (0xFFE8)<br /><code>Qt::Key_Meta</code> (0x01000022)
      </td>
      <td>
        <code>KEYCODE_META_LEFT</code> (117)<br /><code
          >KEYCODE_META_RIGHT</code
        >
        (118)
      </td>
    </tr>
    <tr>
      <td><code>"NumLock"</code></td>
      <td>
        Die <kbd>NumLock</kbd> (Zahlenblock) Taste. Wechselt den Zahleneingabemodus
        des numerischen Tastenfelds in einen anderen Modus (oft Pfeiltasten).
      </td>
      <td><code>VK_NUMLOCK</code> (0x90)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Num_Lock</code> (0xFF7F)<br /><code>Qt::Key_NumLock</code>
        (0x01000025)
      </td>
      <td><code>KEYCODE_NUM_LOCK</code> (143)</td>
    </tr>
    <tr>
      <td><code>"ScrollLock"</code> [2]</td>
      <td>
        Die <kbd>Scroll Lock</kbd> Taste. Wechselt zwischen Scroll- und
        Cursorbewegungsmodi.
      </td>
      <td><code>VK_SCROLL</code> (0x91)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Scroll_Lock</code> (0xFF14)<br /><code
          >Qt::Key_ScrollLock</code
        >
        (0x01000026)
      </td>
      <td><code>KEYCODE_SCROLL_LOCK</code> (116)</td>
    </tr>
    <tr>
      <td><code>"Shift"</code></td>
      <td>
        Die <kbd>Shift</kbd> Taste. Ändert Tastenanschläge, um Großbuchstaben
        (oder andere) zu schreiben, und unterstützt das Tippen von
        Satzzeichen und anderen Sonderzeichen.
      </td>
      <td>
        <code>VK_SHIFT</code> (0x10)<br /><code>VK_LSHIFT</code>
        (0xA0)<br /><code>VK_RSHIFT</code> (0xA1)
      </td>
      <td>
        <code>kVK_Shift</code> (0x38)<br /><code>kVK_RightShift</code> (0x3C)
      </td>
      <td>
        <code>GDK_KEY_Shift_L</code> (0xFFE1)<br /><code>GDK_KEY_Shift_R</code>
        (0xFFE2)<br /><code>Qt::Key_Shift</code> (0x01000020)
      </td>
      <td>
        <code>KEYCODE_SHIFT_LEFT</code> (59)<br /><code
          >KEYCODE_SHIFT_RIGHT</code
        >
        (60)
      </td>
    </tr>
    <tr>
      <td><code>"Super"</code> [3]</td>
      <td>Die <kbd>Super</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Super_L</code> (0xFFEB)<br /><code>GDK_KEY_Super_R</code>
        (0xFFEC)<br /><code>Qt::Key_Super_L</code> (0x01000053)<br /><code
          >Qt::Key_Super_R</code
        >
        (0x01000054)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Symbol"</code></td>
      <td>
        Die <kbd>Symbol</kbd> Modifikatortaste (auf bestimmten virtuellen
        Tastaturen zu finden).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_SYM</code> (63) [2]</td>
    </tr>
    <tr>
      <td><code>"SymbolLock"</code></td>
      <td>Die <kbd>Symbol Lock</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] In Firefox wird die <kbd>Windows</kbd>-Taste als `"OS"` und nicht als `"Meta"` gemeldet. Dies wird in Firefox gemäß [Firefox-Bug 1232918](https://bugzil.la/1232918) geändert. Bis das behoben ist, werden diese Tasten von Firefox als `"OS"` zurückgegeben: `VK_LWIN` (0x5B) und `VK_RWIN` (0x5C) unter Windows sowie `GDK_KEY_Super_L` (0xFFEB), `GDK_KEY_Super_R` (0xFFEC), `GDK_KEY_Hyper_L` (0xFFED) und `GDK_KEY_Hyper_R` (0xFFEE) unter Linux.

\[2] Firefox fügte erst ab Firefox 37 Unterstützung für die <kbd>Symbol</kbd>-Taste hinzu.

\[3] Firefox generiert den Tastenwert `"OS"` für die <kbd>Super</kbd>- und <kbd>Hyper</kbd>-Tasten, anstelle von `"Super"` und `"Hyper"`.

\[4] Chrome 67 und Firefox 63 interpretieren nun die rechte <kbd>Alt</kbd>-Taste korrekt für Tastaturlayouts, die diese Taste auf <kbd>AltGr</kbd> abbilden. Siehe Firefox-Bug [Firefox-Bug 900750](https://bugzil.la/900750) und [Chrome-Bug 25503](https://crbug.com/25503) für weitere Details.

## Leerzeichentasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Enter"</code></td>
      <td>
        Die <kbd>Enter</kbd> oder <kbd>↵</kbd> Taste (manchmal als
        <kbd>Return</kbd> gekennzeichnet).
      </td>
      <td><code>VK_RETURN</code> (0x0D)</td>
      <td>
        <code>kVK_Return</code> (0x24)<br /><code>kVK_ANSI_KeypadEnter</code>
        (0x4C)<br /><code>kVK_Powerbook_KeypadEnter</code> (0x34)
      </td>
      <td>
        <code>GDK_KEY_Return</code> (0xFF0D)<br /><code>GDK_KEY_KP_Enter</code>
        (0xFF8D)<br /><code>GDK_KEY_ISO_Enter</code> (0xFE34)<br /><code
          >GDK_KEY_3270_Enter</code
        >
        (0xFD1E)<br /><code>Qt::Key_Return</code> (0x01000004)<br /><code
          >Qt::Key_Enter</code
        >
        (0x01000005)
      </td>
      <td>
        <code>KEYCODE_ENTER</code> (66)<br /><code>KEYCODE_NUMPAD_ENTER</code>
        (160)<br /><code>KEYCODE_DPAD_CENTER</code> (23)
      </td>
    </tr>
    <tr>
      <td><code>"Tab"</code></td>
      <td>Die horizontale Tabulatortaste, <kbd>Tab</kbd>.</td>
      <td><code>VK_TAB</code> (0x09)</td>
      <td><code>kVK_Tab</code> (0x30)</td>
      <td>
        <code>GDK_KEY_Tab</code> (0xFF09)<br /><code>GDK_KEY_KP_Tab</code>
        (0xFF89)<br /><code>GDK_KEY_ISO_Left_Tab</code> (0xFE20)<br /><code
          >Qt::Key_Tab</code
        >
        (0x01000001)
      </td>
      <td><code>KEYCODE_TAB</code> (61)</td>
    </tr>
    <tr>
      <td><code>" "</code> [1]</td>
      <td>Die Leertaste, <kbd>Space Bar</kbd>.</td>
      <td><code>VK_SPACE</code> (0x20)</td>
      <td><code>kVK_Space</code> (0x31)</td>
      <td>
        <p>
          <code>GDK_KEY_space</code> (0x20)<br /><code>GDK_KEY_KP_Space</code>
          (0xFF80)<br /><code>Qt::Key_Space</code> (0x20)
        </p>
      </td>
      <td><code>KEYCODE_SPACE</code> (62)</td>
    </tr>
  </tbody>
</table>

\[1] Ältere Browser geben möglicherweise `"Spacebar"` anstelle von `" "` für die <kbd>Leertaste</kbd> zurück. Firefox tat dies bis Version 37.

## Navigationstasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ArrowDown"</code> [1]</td>
      <td>Die Abwärtspfeiltaste.</td>
      <td><code>VK_DOWN</code> (0x28)</td>
      <td><code>kVK_DownArrow</code> (0x7D)</td>
      <td>
        <code>GDK_KEY_Down</code> (0xFF54)<br /><code>GDK_KEY_KP_Down</code>
        (0xFF99)<br /><code>Qt::Key_Down</code> (0x01000015)
      </td>
      <td><code>KEYCODE_DPAD_DOWN</code> (20)</td>
    </tr>
    <tr>
      <td><code>"ArrowLeft"</code> [1]</td>
      <td>Die Linkspfeiltaste.</td>
      <td><code>VK_LEFT</code> (0x25)</td>
      <td><code>kVK_LeftArrow</code> (0x7B)</td>
      <td>
        <code>GDK_KEY_Left</code> (0xFF51)<br /><code>GDK_KEY_KP_Left</code>
        (0xFF96)<br /><code>Qt::Key_Left</code> (0x01000012)
      </td>
      <td><code>KEYCODE_DPAD_LEFT</code> (21)</td>
    </tr>
    <tr>
      <td><code>"ArrowRight"</code> [1]</td>
      <td>Die Rechtspfeiltaste.</td>
      <td><code>VK_RIGHT</code> (0x27)</td>
      <td><code>kVK_RightArrow</code> (0x7C)</td>
      <td>
        <code>GDK_KEY_Right</code> (0xFF53)<br /><code>GDK_KEY_KP_Right</code>
        (0xFF98)<br /><code>Qt::Key_Right</code> (0x01000014)
      </td>
      <td><code>KEYCODE_DPAD_RIGHT</code> (22)</td>
    </tr>
    <tr>
      <td><code>"ArrowUp"</code> [1]</td>
      <td>Die Aufwärtspfeiltaste.</td>
      <td><code>VK_UP</code> (0x26)</td>
      <td><code>kVK_UpArrow</code> (0x7E)</td>
      <td>
        <code>GDK_KEY_Up</code> (0xFF52)<br /><code>GDK_KEY_KP_Up</code>
        (0xFF97)<br /><code>Qt::Key_Up</code> (0x01000013)
      </td>
      <td><code>KEYCODE_DPAD_UP</code> (19)</td>
    </tr>
    <tr>
      <td><code>"End"</code></td>
      <td>Die <kbd>End</kbd> Taste. Bewegt sich zum Ende des Inhalts.</td>
      <td><code>VK_END</code> (0x23)</td>
      <td><code>kVK_End</code> (0x77)</td>
      <td>
        <code>GDK_KEY_End</code> (0xFF57)<br /><code>GDK_KEY_KP_End</code>
        (0xFF9C)<br /><code>Qt::Key_End</code> (0x01000011)
      </td>
      <td><code>KEYCODE_MOVE_END</code> (123)</td>
    </tr>
    <tr>
      <td><code>"Home"</code></td>
      <td>Die <kbd>Home</kbd> Taste. Bewegt sich zum Anfang des Inhalts.</td>
      <td><code>VK_HOME</code> (0x24)</td>
      <td><code>kVK_Home</code> (0x73)</td>
      <td>
        <code>GDK_KEY_Home</code> (0xFF50)<br /><code>GDK_KEY_KP_Home</code>
        (0xFF95)<br /><code>Qt::Key_Home</code> (0x01000010)
      </td>
      <td><code>KEYCODE_MOVE_HOME</code> (122)</td>
    </tr>
    <tr>
      <td><code>"PageDown"</code></td>
      <td>
        Die <kbd>Page Down</kbd> (oder <kbd>PgDn</kbd>) Taste. Scrollt nach
        unten oder zeigt die nächste Seite des Inhalts an.
      </td>
      <td><code>VK_NEXT</code> (0x22)</td>
      <td><code>kVK_PageDown</code> (0x79)</td>
      <td>
        <code>GDK_KEY_Page_Down</code> (0xFF56)<br /><code
          >GDK_KEY_KP_Page_Down</code
        >
        (0xFF9B)<br /><code>Qt::Key_PageDown</code> (0x01000017)
      </td>
      <td><code>KEYCODE_PAGE_DOWN</code> (93)</td>
    </tr>
    <tr>
      <td><code>"PageUp"</code></td>
      <td>
        Die <kbd>Page Up</kbd> (oder <kbd>PgUp</kbd>) Taste. Scrollt nach
        oben oder zeigt die vorherige Seite des Inhalts an.
      </td>
      <td><code>VK_PRIOR</code> (0x21)</td>
      <td><code>kVK_PageUp</code> (0x74)</td>
      <td>
        <code>GDK_KEY_Page_Up</code> (0xFF55)<br /><code
          >GDK_KEY_KP_Page_Up</code
        >
        (0xFF9A)<br /><code>Qt::Key_PageUp</code> (0x01000016)
      </td>
      <td><code>KEYCODE_PAGE_UP</code> (92)</td>
    </tr>
  </tbody>
</table>

\[1] Edge (16 und früher) und Firefox (36 und früher) verwenden `"Left"`, `"Right"`, `"Up"` und `"Down"` anstelle von `"ArrowLeft"`, `"ArrowRight"`, `"ArrowUp"` und `"ArrowDown"`.

## Bearbeitungstasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Backspace"</code></td>
      <td>
        Die <kbd>Backspace</kbd> Taste. Diese Taste ist auf Mac-Tastaturen als
        <kbd>Delete</kbd> beschriftet.
      </td>
      <td><code>VK_BACK</code> (0x08)</td>
      <td><code>kVK_Delete</code> (0x33)</td>
      <td>
        <code>GDK_KEY_BackSpace</code> (0xFF08)<br /><code
          >Qt::Key_Backspace</code
        >
        (0x01000003)
      </td>
      <td><code>KEYCODE_DEL</code> (67)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>Die <kbd>Clear</kbd> Taste. Entfernt die aktuell ausgewählte Eingabe.</td>
      <td>
        <code>VK_CLEAR</code> (0x0C)<br /><code>VK_OEM_CLEAR</code> (0xFE)
      </td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Copy"</code></td>
      <td>Die <kbd>Copy</kbd> Taste (auf bestimmten erweiterten Tastaturen).</td>
      <td><code>APPCOMMAND_COPY</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Copy</code> (0x1008FF57)<br /><code>Qt::Key_Copy</code>
        (0x010000CF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CrSel"</code> [3]</td>
      <td>Die Cursorauswahl-Taste, <kbd>CrSel</kbd>.</td>
      <td><code>VK_CRSEL</code> (0xF7)</td>
      <td></td>
      <td><code>GDK_KEY_3270_CursorSelect</code> (0xFD1C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cut"</code></td>
      <td>Die <kbd>Cut</kbd> Taste (auf bestimmten erweiterten Tastaturen).</td>
      <td><code>APPCOMMAND_CUT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Cut</code> (0x1008FF58)<br /><code>Qt::Key_Cut</code>
        (0x010000D0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Delete"</code> [2]</td>
      <td>Die Löschtaste, <kbd>Del</kbd>.</td>
      <td><code>VK_DELETE</code> (0x2E)</td>
      <td><code>kVK_ForwardDelete</code> (0x75) [1]</td>
      <td>
        <code>GDK_KEY_Delete</code> (0xFFFF)<br /><code>GDK_KEY_KP_Delete</code>
        (0xFF9F)<br /><code>Qt::Key_Delete</code> (0x01000007)
      </td>
      <td><code>KEYCODE_FORWARD_DEL</code> (112)</td>
    </tr>
    <tr>
      <td><code>"EraseEof"</code></td>
      <td>
        Löscht bis zum Ende des Feldes. Löscht alle Zeichen von der aktuellen
        Cursor-Position bis zum Ende des aktuellen Feldes.
      </td>
      <td><code>VK_EREOF</code> (0xF9)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ExSel"</code> [4]</td>
      <td>Die <kbd>ExSel</kbd> (Erweiterte Auswahl) Taste.</td>
      <td><code>VK_EXSEL</code> (0xF8)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Insert"</code></td>
      <td>
        Die Einfüge-Taste, <kbd>Ins</kbd>. Wechselt zwischen Einfügen und
        Überschreiben von Text.
      </td>
      <td><code>VK_INSERT</code> (0x2D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Insert</code> (0xFF63)<br /><code>GDK_KEY_KP_Insert</code>
        (0xFF9E)<br /><code>Qt::Key_Insert</code> (0x01000006)
      </td>
      <td><code>KEYCODE_INSERT</code> (124)</td>
    </tr>
    <tr>
      <td><code>"Paste"</code></td>
      <td>Einfügen aus der Zwischenablage.</td>
      <td><code>APPCOMMAND_PASTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Paste</code> (0x1008FF6D)<br /><code>Qt::Key_Paste</code>
        (0x010000E2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Redo"</code></td>
      <td>Wiederholt die letzte Aktion.</td>
      <td><code>APPCOMMAND_REDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Undo"</code></td>
      <td>Macht die letzte Aktion rückgängig.</td>
      <td><code>APPCOMMAND_UNDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Undo</code> (0xFF65)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Auf Tastaturen ohne dedizierte <kbd>Del</kbd>-Taste generiert der Mac den Wert `"Delete"`, wenn <kbd>Fn</kbd> in Kombination mit <kbd>Delete</kbd> (welches die <kbd>Rücktaste</kbd> auf anderen Plattformen ist) gedrückt wird.

\[2] Firefox 36 und früher verwendet `"Del"` anstelle von `"Delete"` für die <kbd>Del</kbd>-Taste.

\[3] Firefox 36 und früher generiert den Wert `"Crsel"` anstelle von `"CrSel"`, wenn die <kbd>CrSel</kbd>-Taste gedrückt wird.

\[4] Firefox 36 und früher generiert den Wert `"Exsel"` anstelle von `"ExSel"`, wenn die <kbd>ExSel</kbd>-Taste gedrückt wird.

## UI-Tasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Accept"</code></td>
      <td>
        Die <kbd>Accept</kbd>, <kbd>Commit</kbd>, oder <kbd>OK</kbd> Taste oder
        Schaltfläche. Akzeptiert die derzeit ausgewählte Option oder
        Eingabemethoden-Sequenzkonvertierung.
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td>Die <kbd>Again</kbd> Taste. Wiederholt oder wiederholt eine vorherige Aktion.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Attn"</code> [4]</td>
      <td>Die <kbd>Attn</kbd> (Attention) Taste.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td><code>GDK_KEY_3270_Attn</code> (0xFD0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cancel"</code> [1]</td>
      <td>Die <kbd>Cancel</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Cancel</code> (0xFF69)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ContextMenu"</code> [3]</td>
      <td>
        Zeigt das Kontextmenü an. Typischerweise befindet sich diese zwischen
        der <kbd>Windows</kbd> (oder <kbd>OS</kbd>) Taste und der
        <kbd>Control</kbd> Taste auf der rechten Seite der Tastatur.
      </td>
      <td><code>VK_APPS</code> (0x5D)</td>
      <td><code>kVK_PC_ContextMenu</code> (0x6E)</td>
      <td>
        <code>GDK_KEY_Menu</code> (0xFF67)<br /><code>Qt::Key_Menu</code>
        (0x01000055)
      </td>
      <td><code>KEYCODE_MENU</code> (82)</td>
    </tr>
    <tr>
      <td><code>"Escape"</code> [2]</td>
      <td>
        Die <kbd>Esc</kbd> (Escape) Taste. Typischerweise verwendet als eine
        Abbruch-, Abbrechen- oder "Abreise von diesem Vorgang" Taste.
        Historisch wurde das Escape-Zeichen verwendet, um den Beginn einer
        speziellen Steuersequenz von Zeichen, genannt "Escape-Sequenz" zu
        signalisieren.
      </td>
      <td><code>VK_ESCAPE</code> (0x1B)</td>
      <td><code>kVK_Escape</code> (0x35)</td>
      <td>
        <code>GDK_KEY_Escape</code> (0xFF1B)<br /><code>Qt::Key_Escape</code>
        (0x01000000)
      </td>
      <td><code>KEYCODE_ESCAPE</code> (111)</td>
    </tr>
    <tr>
      <td><code>"Execute"</code></td>
      <td>Die <kbd>Execute</kbd> Taste.</td>
      <td><code>VK_EXECUTE</code> (0x2B)</td>
      <td></td>
      <td><code>Qt::Key_Execute</code> (0x01020003)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Find"</code></td>
      <td>
        Die <kbd>Find</kbd> Taste. Öffnet eine Schnittstelle (typischerweise
        ein Dialogfeld) für die Durchführung einer Suchoperation.
      </td>
      <td><code>APPCOMMAND_FIND</code></td>
      <td></td>
      <td><code>GDK_KEY_Find</code> (0xFF68)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Finish"</code> [5]</td>
      <td>Die <kbd>Finish</kbd> Taste.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Help"</code></td>
      <td>
        Die <kbd>Help</kbd> Taste. Öffnet oder wechselt die Anzeige von
        Hilfeinformationen.
      </td>
      <td><code>VK_HELP</code> (0x2F)<br /><code>APPCOMMAND_HELP</code></td>
      <td><code>kVK_Help</code> (0x72)</td>
      <td>
        <code>GDK_KEY_Help</code> (0xFF6A)<br /><code>Qt::Key_Help</code>
        (0x01000058)
      </td>
      <td><code>KEYCODE_HELP</code> (259)</td>
    </tr>
    <tr>
      <td><code>"Pause"</code></td>
      <td>
        Die <kbd>Pause</kbd> Taste. Pausiert die aktuelle Anwendung oder den
        Zustand, falls zutreffend.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies sollte nicht mit der
            <code>"MediaPause"</code> Taste verwechselt werden, die für
            Mediensteuerungen, nicht jedoch zur Steuerung von Anwendungen und
            Prozessen verwendet wird.
          </p>
        </div>
      </td>
      <td><code>VK_PAUSE</code> (0x13)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Pause</code> (0xFF13)<br /><code>GDK_KEY_Break</code>
        (0xFF6B)<br /><code>Qt::Key_Pause</code> (0x01000008)
      </td>
      <td><code>KEYCODE_BREAK</code> (121)</td>
    </tr>
    <tr>
      <td><code>"Play"</code></td>
      <td>
        Die <kbd>Play</kbd> Taste. Setzt eine zuvor pausierte Anwendung fort,
        falls zutreffend.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies sollte nicht mit der
            <code>"MediaPlay"</code> Taste verwechselt werden, die für
            Mediensteuerungen, nicht jedoch zur Steuerung von Anwendungen und
            Prozessen verwendet wird.
          </p>
        </div>
      </td>
      <td><code>VK_PLAY</code> (0xFA)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_Play</code> (0xFD16)<br /><code>Qt::Key_Play</code>
        (0x01020005)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Props"</code></td>
      <td>Die <kbd>Props</kbd> (Eigenschaften) Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Select"</code></td>
      <td>Die <kbd>Select</kbd> Taste.</td>
      <td><code>VK_SELECT</code> (0x29)</td>
      <td></td>
      <td><code>GDK_KEY_Select</code> (0xFF60)</td>
      <td><code>KEYCODE_BUTTON_SELECT</code> (109)</td>
    </tr>
    <tr>
      <td><code>"ZoomIn"</code> [6]</td>
      <td>Die <kbd>ZoomIn</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomIn</code> (0x1008FF8B)<br /><code
          >Qt::Key_ZoomIn</code
        >
        (0x010000F6)
      </td>
      <td><code>KEYCODE_ZOOM_IN</code> (168)</td>
    </tr>
    <tr>
      <td><code>"ZoomOut"</code> [6]</td>
      <td>Die <kbd>ZoomOut</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomOut</code> (0x1008FF8C)<br /><code
          >Qt::Key_ZoomOut</code
        >
        (0x010000F7)
      </td>
      <td><code>KEYCODE_ZOOM_OUT</code> (169)</td>
    </tr>
  </tbody>
</table>

\[1] In Google Chrome 52 gibt die <kbd>Cancel</kbd>-Taste fälschlicherweise den Tasten-Code `"Pause"` zurück. Dies ist in Chrome 53 behoben (siehe [Chrome Bug 612749](https://crbug.com/612749) für Details).

\[2] In Firefox 36 und früher gibt die <kbd>Esc</kbd>-Taste `"Esc"` anstelle von `"Escape"` zurück.

\[3] Firefox 36 und früher meldet `"Apps"` anstelle von `"ContextMenu"` für die Kontextmenü-Taste.

\[4] Die <kbd>Attn</kbd>-Taste generiert den Tasten-Code `"Unidentified"` in Firefox und Google Chrome, es sei denn, das japanische Tastaturlayout ist aktiv, in welchem Fall sie stattdessen `"KanaMode"` generiert.

\[5] Die <kbd>Finish</kbd>-Taste generiert den Tasten-Code `"Unidentified"` in Firefox, es sei denn, das japanische Tastaturlayout ist aktiv, in welchem Fall sie statt dessen `"Katakana"` generiert.

\[6] Firefox unterstützte die `"ZoomIn"` und `"ZoomOut"` Tasten bis Firefox 37 nicht.

## Gerätetasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrightnessDown"</code></td>
      <td>
        Die Helligkeitssenkungstaste. Wird typischerweise verwendet, um die
        Helligkeit des Bildschirms zu reduzieren.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessDown</code> (0x1008FF03)<br /><code
          >Qt::Key_MonBrightnessDown</code
        >
        (0x010000B3)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_DOWN</code> (220)</td>
    </tr>
    <tr>
      <td><code>"BrightnessUp"</code></td>
      <td>
        Die Helligkeitssteigerungstaste. Erhöht typischerweise die Helligkeit
        des Bildschirms.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessUp</code> (0x1008FF02)<br /><code
          >Qt::Key_MonBrightnessUp</code
        >
        (0x010000B2)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_UP</code> (221)</td>
    </tr>
    <tr>
      <td><code>"Eject"</code></td>
      <td>
        Die <kbd>Eject</kbd> Taste. Wirft entnehmbare Medien aus (oder schaltet
        ein optisches Laufwerk auf und zu).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Eject</code> (0x1008FF2C)<br /><code>Qt::Key_Eject</code>
        (0x010000B9)
      </td>
      <td><code>KEYCODE_MEDIA_EJECT</code> (129)</td>
    </tr>
    <tr>
      <td><code>"LogOff"</code> [2]</td>
      <td>Die <kbd>LogOff</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LogOff</code> (0x1008FF61)<br /><code
          >Qt::Key_LogOff</code
        >
        (0x010000D9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Power"</code></td>
      <td>
        Die <kbd>Power</kbd> Taste oder Taste, um die Stromzufuhr ein- und
        auszuschalten.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Nicht alle Systeme übertragen diese Taste an
            den Benutzeragenten.
          </p>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_POWER</code> (26)</td>
    </tr>
    <tr>
      <td><code>"PowerOff"</code></td>
      <td>
        Die <kbd>PowerOff</kbd> oder <kbd>PowerDown</kbd> Taste. Schaltet das
        System aus.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PowerDown</code> (0x1008FF21)<br /><code
          >GDK_KEY_PowerOff</code
        >
        (0x1008FF2A)<br /><code>Qt::Key_PowerDown</code> (0x0100010B)<br /><code
          >Qt::Key_PowerOff</code
        >
        (0x010000B7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PrintScreen"</code></td>
      <td>
        Die <kbd>PrintScreen</kbd> oder <kbd>PrtScr</kbd> Taste. Manchmal
        <kbd>SnapShot</kbd>. Erfasst den Bildschirm und druckt ihn aus oder
        speichert ihn auf die Festplatte.
      </td>
      <td><code>VK_SNAPSHOT</code> (0x2C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_PrintScreen</code> (0xFD1D)<br /><code
          >GDK_KEY_Print</code
        >
        (0xFF61)<br /><code>GDK_KEY_Sys_Req</code> (0xFF15)<br /><code
          >Qt::Key_Print</code
        >
        (0x01000009)<br /><code>Qt::Key_SysReq</code> (0x0100000A)
      </td>
      <td><code>KEYCODE_SYSRQ</code> (120)</td>
    </tr>
    <tr>
      <td><code>"Hibernate"</code> [2]</td>
      <td>
        Die <kbd>Hibernate</kbd> Taste. Speichert den aktuellen Zustand des
        Computers auf die Festplatte und schaltet ihn dann aus; der Computer
        kann durch Wiederherstellen der gespeicherten Zustandsinformationen in
        seinen vorherigen Zustand zurückversetzt werden.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hibernate</code> (0x1008FFA8)<br /><code
          >Qt::Key_Hibernate</code
        >
        (0x01000108)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Standby"</code> [1]</td>
      <td>
        Die <kbd>Standby</kbd> Taste. (Auch als <kbd>Suspend</kbd> oder
        <kbd>Sleep</kbd> bekannt.) Diese schaltet den Bildschirm
        aus und versetzt den Computer in einen niedrigen
        Stromverbrauchsmodus, ohne ihn vollständig auszuschalten.
      </td>
      <td><code>VK_SLEEP</code> (0x5F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Standby</code> (0x1008FF10)<br /><code
          >GDK_KEY_Suspend</code
        >
        (0x1008FFA7)<br /><code>GDK_KEY_Sleep</code> (0x1008FF2F)<br /><code
          >Qt::Key_Standby</code
        >
        (0x01000093)<br /><code>Qt::Key_Suspend</code> (0x0100010C)<br /><code
          >Qt::Key_Sleep</code
        >
        (0x01020004)
      </td>
      <td><code>KEYCODE_SLEEP</code> (223)</td>
    </tr>
    <tr>
      <td><code>"WakeUp"</code> [2]</td>
      <td>
        Die <kbd>WakeUp</kbd> Taste. Wird verwendet, um den Computer aus dem
        Ruhezustand oder Standby-Modus aufzuwecken.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WakeUp</code> (0x1008FF2B)<br /><code
          >Qt::Key_WakeUp</code
        >
        (0x010000B8)
      </td>
      <td><code>KEYCODE_WAKEUP</code> (224)</td>
    </tr>
  </tbody>
</table>

\[1] Die <kbd>Standby</kbd>-Taste wird von Firefox 36 und früher nicht unterstützt, so dass als `"Unidentified"` gemeldet wird.

\[2] Vor Firefox 37 erzeugte diese Taste den Wert `"Unidentified"`.

## IME und Kompositionstasten

Tasten, die verwendet werden, wenn eine {{glossary("Input Method Editor")}} (IME) zum Eingeben von Text verwendet wird, der nicht durch einfache Tastenanschläge eingegeben werden kann, wie z. B. Text in Sprachen, die mehr Grapheme haben, als es Zeichen auf der Tastatur gibt. Häufige Beispiele sind Chinesisch, Japanisch, Koreanisch und Hindi.

Einige Tasten sind bei mehreren Sprachen üblich, während andere nur auf Tastaturen existieren, die auf bestimmte Sprachen ausgerichtet sind. Darüber hinaus haben nicht alle Tastaturen alle diese Tasten.

### Häufige IME-Tasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AllCandidates"</code></td>
      <td>
        Die <kbd>All Candidates</kbd> Taste, die den Mehrfachkandidatenmodus
        startet, in dem mehrere Kandidaten für die laufende Eingabe angezeigt
        werden.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MultipleCandidate</code> (0xFF3D<br /><code
          >Qt::Key_MultipleCandidate</code
        >
        (0x0100113D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Alphanumeric"</code></td>
      <td>Die <kbd>Alphanumeric</kbd> Taste.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Eisu_Shift</code> (0xFF2F)<br /><code
          >GDK_KEY_Eisu_toggle</code
        >
        (0xFF30)<br /><code>Qt::Key_Eisu_Shift</code> (0x0100112f)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CodeInput"</code></td>
      <td>
        Die <kbd>Code Input</kbd> Taste, die den Codeeingabemodus aktiviert,
        der es dem Benutzer ermöglicht, Zeichen einzugeben, indem er ihre
        Codepunkte (normalerweise ihre Unicode-Zeichennummern) eingibt.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Codeinput</code> (0xFF37)<br /><code
          >Qt::Key_Codeinput</code
        >
        (0x01001137)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Compose"</code></td>
      <td>Die <kbd>Compose</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Multi_key</code> (0xFF20) [1]<br /><code
          >Qt::Key_Multi_key</code
        >
        (0x01001120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Convert"</code> [4]</td>
      <td>
        Die <kbd>Convert</kbd> Taste, die das IME anweist, die aktuelle
        Eingabemethoden-Sequenz in das resultierende Zeichen zu konvertieren.
      </td>
      <td><code>VK_CONVERT</code> (0x1C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Henkan</code> (0xFF23)<br /><code>Qt::Key_Henkan</code>
        (0x01001123)
      </td>
      <td><code>KEYCODE_HENKAN</code> (214)</td>
    </tr>
    <tr>
      <td><code>"Dead"</code></td>
      <td>
        <p>
          Eine "tote" Kombinationstaste; das heißt, eine Taste, die in
          Kombination mit anderen Tasten verwendet wird, um Akzent- und andere
          veränderte Zeichen zu erzeugen. Wenn sie allein gedrückt wird, wird
          kein Zeichen erzeugt.
        </p>
        <p>
          Wenn Sie identifizieren möchten, welche spezifische tote Taste
          gedrückt wurde (in Fällen, in denen mehr als eine existiert), können
          Sie dies tun, indem Sie die
          {{domxref("KeyboardEvent")}} des zugehörigen
          {{domxref("Element/compositionupdate_event", "compositionupdate")}}
          Ereignisses
          {{domxref("CompositionEvent.data", "data")}} Eigenschaft überprüfen.
        </p>
      </td>
      <td></td>
      <td></td>
      <td>Siehe <a href="#dead_keycodes_for_linux">Tote-Tasten-Codes für Linux</a> unten</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        Die <kbd>Final</kbd> (Finalmodus) Taste wird auf einigen asiatischen
        Tastaturen verwendet, um den Finalmodus beim Verwenden von IMEs einzugeben.
      </td>
      <td><code>VK_FINAL</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupFirst"</code></td>
      <td>
        Wechselt zur ersten Zeichengruppe auf einer
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 Tastatur</a
        >. Jede Taste kann mehrere Gruppen von Zeichen haben, jede in ihrer
        eigenen Spalte. Das Drücken dieser Taste weist das Gerät an, Tastenanschläge
        als kommende aus der ersten Spalte bei nachfolgenden Tastenanschlägen
        zu interpretieren.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_First_Group</code> (0xFE0C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupLast"</code></td>
      <td>
        Wechselt zur letzten Zeichengruppe auf einer
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 Tastatur</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Last_Group</code> (0xFE0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupNext"</code> [4]</td>
      <td>
        Wechselt zur nächsten Zeichengruppe auf einer
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 Tastatur</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Next_Group</code> (0xFE08)</td>
      <td><code>KEYCODE_LANGUAGE_SWITCH</code> (204)</td>
    </tr>
    <tr>
      <td><code>"GroupPrevious"</code></td>
      <td>
        Wechselt zur vorherigen Zeichengruppe auf einer
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 Tastatur</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Prev_Group</code> (0xFE0A)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ModeChange"</code> [5]</td>
      <td>Die Modus-Wechseltaste. Wechselt oder schaltet zwischen Eingabemodi von IMEs um.</td>
      <td><code>VK_MODECHANGE</code> (0x1F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_script_switch</code
        >
        (0xFF7E)<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td><code>KEYCODE_SWITCH_CHARSET</code> (95)</td>
    </tr>
    <tr>
      <td><code>"NextCandidate"</code></td>
      <td>
        Die Nächster-Kandidat-Funktionstaste. Wählt den nächsten möglichen Treffer
        für die laufende Eingabe aus.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        Die <kbd>NonConvert</kbd> ("Nicht konvertieren") Taste. Diese akzeptiert
        die aktuelle Eingabemethoden-Sequenz ohne Konvertierung bei Verwendung
        eines IMEs.
      </td>
      <td><code>VK_NONCONVERT</code> (0x1D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Muhenkan</code> (0xFF22)<br /><code
          >Qt::Key_Muhenkan</code
        >
        (0x01001122)<br />
      </td>
      <td><code>KEYCODE_MUHENKAN</code> (213)</td>
    </tr>
    <tr>
      <td><code>"PreviousCandidate"</code></td>
      <td>
        Die Vorherige-Kandidat-Taste. Wählt den vorherigen möglichen Treffer für
        die laufende Eingabe aus.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PreviousCandidate</code> (0xFF3E)<br /><code
          >Qt::Key_PreviousCandidate</code
        >
        (0x0100113E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Process"</code> [3]</td>
      <td>
        Die <kbd>Process</kbd> Taste. Instructs the IME to process the conversion.
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        Die Einzel-Kandidat-Taste. Aktiviert den Einzelkandidaten-Modus (im
        Gegensatz zum Mehrfachkandidaten-Modus); in diesem Modus wird jeweils
        nur ein Kandidat angezeigt.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_SingleCandidate</code> (0xFF3C)<br /><code
          >Qt::Key_SingleCandidate</code
        >
        (0x0100113C)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Im _X Window System_ wird die <kbd>Compose</kbd>-Taste die <kbd>Multi</kbd>-Taste genannt.

\[2] Die <kbd>NonConvert</kbd>-Taste wird in Firefox Versionen 36 und früher als `"Nonconvert"` anstelle von `"NonConvert"` gemeldet.

\[3] Die <kbd>Process</kbd>-Taste gibt derzeit `"Unidentified"` in Firefox zurück. Google Chrome gibt den Wert der Taste zurück, als ob IME nicht in Gebrauch wäre.

\[4] Vor Firefox 37 waren diese Tasten `"Unidentified"`.

\[5] Firefox generiert den Tastenwert `"AltGraph"` anstelle von `"ModeChange"`.

### Nur koreanische Tastaturen

Diese Tasten sind nur auf koreanischen Tastaturen verfügbar. Es gibt andere von verschiedenen Plattformen definierte Tasten für koreanische Tastaturen, aber diese sind die häufigsten und die, die durch die UI-Events-Spezifikation identifiziert werden.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"HangulMode"</code></td>
      <td>
        Die <kbd>Hangul</kbd> (Koreanisches Zeichensatz) Modus-Taste, die
        zwischen Hangul- und englischen Eingabemodi umschaltet.
      </td>
      <td><code>VK_HANGUL</code> (0x15) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul</code> (0xFF31)<br /><code>Qt::Key_Hangul</code>
        (0x01001131)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HanjaMode"</code></td>
      <td>
        Wählt den Hanja-Modus aus, um Hangul-Zeichen in die spezifischeren
        Hanja-Zeichen umzuwandeln.
      </td>
      <td><code>VK_HANJA</code> (0x19) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Hanja</code> (0xFF34)<br /><code
          >Qt::Key_Hangul_Hanja</code
        >
        (0x01001134)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"JunjaMode"</code></td>
      <td>
        Wählt den Junja-Modus, in dem Koreanisch mit einbytigen lateinischen
        Zeichen dargestellt wird.
      </td>
      <td><code>VK_JUNJA</code> (0x17)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Jeonja</code> (0xFF38)<br /><code
          >Qt::Key_Hangul_Jeonja</code
        >
        (0x01001138)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] `VK_HANGUL` und `VK_KANA` teilen sich denselben numerischen Tastenwert auf Windows, ebenso wie `VK_HANJA` und `VK_KANJI`.

### Nur japanische Tastaturen

Diese Tasten sind nur auf japanischen Tastaturen verfügbar.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tasten-Codes</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Eisu"</code> [1]</td>
      <td>
        Die <kbd>Eisu</kbd> Taste. Der Zweck dieser Taste wird durch das IME
        definiert, kann jedoch zum Schließen des IME verwendet werden.
      </td>
      <td></td>
      <td><code>kVK_JIS_Eisu</code> (0x66)</td>
      <td>
        <code>GDK_KEY_Eisu_toggle</code> (0xFF2F)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td><code>KEYCODE_EISU</code> (212)</td>
    </tr>
    <tr>
      <td><code>"Hankaku"</code> [3]</td>
      <td>Die <kbd>Hankaku</kbd> (Halbbreite-Zeichen) Taste.</td>
      <td><code>VK_OEM_AUTO</code> (0xF3)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hankaku</code> (0xFF29)<br /><code>Qt::Key_Hankaku</code>
        (0x01001129)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hiragana"</code></td>
      <td>Die <kbd>Hiragana</kbd> Taste; wählt den Kana-Zeichensatzmodus aus.</td>