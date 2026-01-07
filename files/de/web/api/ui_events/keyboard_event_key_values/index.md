---
title: Schlüsselwerte für Tastaturereignisse
slug: Web/API/UI_Events/Keyboard_event_key_values
l10n:
  sourceCommit: 62de2a0ead0580947eac6e820e4ecac545f9b339
---

{{DefaultAPISidebar("UI Events")}}

Die unten aufgeführten Tabellen listen die Standardwerte für die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft auf, zusammen mit einer Erklärung, wofür die Taste typischerweise verwendet wird. Entsprechende virtuelle Tastencodes für gängige Plattformen sind, sofern verfügbar, enthalten.

## Spezielle Werte

Werte von `key`, die spezielle Bedeutungen haben, die über die Identifizierung einer spezifischen Taste oder eines Zeichens hinausgehen.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
          Der Benutzeragent war nicht in der Lage, den virtuellen Tastencode des Ereignisses einem bestimmten Schlüsselwert zuzuordnen.
        </p>
        <p>
          Dies kann aufgrund von Hardware- oder Softwareeinschränkungen oder aufgrund von Plattformbeschränkungen passieren, auf denen der Benutzeragent läuft.
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

_Modifikatoren_ sind spezielle Tasten, die verwendet werden, um Sonderzeichen zu erzeugen oder spezielle Aktionen auszulösen, wenn sie in Kombination mit anderen Tasten verwendet werden. Beispiele sind die Tasten <kbd>Shift</kbd> und <kbd>Control</kbd> sowie Sperrtasten wie <kbd>Caps Lock</kbd> und <kbd>NumLock</kbd>.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
        Die <kbd>AltGr</kbd> oder <kbd>AltGraph</kbd> (Alternate Graphics) Taste.
        Aktiviert den ISO-Level-3-Umschaltmodifikator (wobei <kbd>Shift</kbd> der
        Level-2-Modifikator ist).
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
        Die <kbd>Caps Lock</kbd> Taste. Schaltet die Großschreibung für die
        nachfolgende Eingabe ein und aus.
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
        Die <kbd>Control</kbd>, <kbd>Ctrl</kbd> oder <kbd>Ctl</kbd> Taste. Ermöglicht
        das Tippen von Steuerzeichen.
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
        Die <kbd>Fn</kbd> (Funktionsmodifikator) Taste. Wird verwendet, um
        Funktionstasten-Zeichen (<kbd>F1</kbd>–<kbd>F15</kbd> zum Beispiel) auf
        Tastaturen zu erzeugen, die keinen separaten Funktionstastenbereich haben.
        Häufig in der Hardware verarbeitet, sodass für diese Taste keine
        Ereignisse generiert werden.
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        Die <kbd>FnLock</kbd> oder <kbd>F-Lock</kbd> (Funktionssperre) Taste.
        Schaltet den durch <code>"Fn"</code> beschriebenen Modus für die
        Funktionstasten ein und aus. Häufig in der Hardware verarbeitet, sodass
        für diese Taste keine Ereignisse generiert werden.
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
        Die <kbd>Meta</kbd> Taste. Ermöglicht das Ausführen spezieller
        Befehls-Eingaben. Dies ist die <kbd>Windows</kbd>-Logotaste oder die
        <kbd>Command</kbd>- oder <kbd>⌘</kbd>-Taste auf Mac-Tastaturen.
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
        Die <kbd>NumLock</kbd> (Nummernsperre) Taste. Schaltet das numerische
        Tastenfeld zwischen Zahleneingabe und einem anderen Modus (oft
        Pfeiltasten) um.
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
        Die <kbd>Scroll Lock</kbd> Taste. Schaltet zwischen Scroll- und
        Cursorbewegungsmodi um.
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
        Die <kbd>Shift</kbd> Taste. Modifiziert Tastenanschläge, um das Tippen
        von Großbuchstaben (oder anderen) zu ermöglichen und um die Eingabe von
        Satzzeichen und anderen Sonderzeichen zu unterstützen.
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
        Die <kbd>Symbol</kbd>-Modifikatortaste (zu finden auf bestimmten
        virtuellen Tastaturen).
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

\[1] In Firefox wird die <kbd>Windows</kbd>-Taste als `"OS"` anstelle von `"Meta"` gemeldet. Dies wird in Firefox entsprechend dem [Firefox-Bug 1232918](https://bugzil.la/1232918) geändert. Bis dies behoben ist, werden diese Tasten von Firefox als `"OS"` zurückgegeben: `VK_LWIN` (0x5B) und `VK_RWIN` (0x5C) unter Windows sowie `GDK_KEY_Super_L` (0xFFEB), `GDK_KEY_Super_R` (0xFFEC), `GDK_KEY_Hyper_L` (0xFFED) und `GDK_KEY_Hyper_R` (0xFFEE) unter Linux.

\[2] Firefox fügte bis Firefox 37 keine Unterstützung für die <kbd>Symbol</kbd>-Taste hinzu.

\[3] Firefox generiert den Schlüsselwert `"OS"` für die <kbd>Super</kbd>- und <kbd>Hyper</kbd>-Tasten, anstatt `"Super"` und `"Hyper"`.

\[4] Chrome 67 und Firefox 63 interpretieren jetzt die rechte <kbd>Alt</kbd>-Taste für Tastaturlayouts korrekt, die diese Taste zu <kbd>AltGr</kbd> zuordnen. Siehe Firefox-Bug [Firefox bug 900750](https://bugzil.la/900750) und [Chrome bug 25503](https://crbug.com/25503) für weitere Details.

## Leerzeichentasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
        Die <kbd>Enter</kbd> oder <kbd>↵</kbd> Taste (manchmal mit
        <kbd>Return</kbd> beschriftet).
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

\[1] Ältere Browser können `"Spacebar"` anstelle von `" "` für die <kbd>Space Bar</kbd>-Taste zurückgeben. Firefox tat dies bis Version 37.

## Navigationsschlüssel

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
      <td>Die <kbd>End</kbd>-Taste. Bewegt zum Ende des Inhalts.</td>
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
      <td>Die <kbd>Home</kbd>-Taste. Bewegt zum Anfang des Inhalts.</td>
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
        Die <kbd>Page Up</kbd> (oder <kbd>PgUp</kbd>) Taste. Scrollt nach oben
        oder zeigt die vorherige Seite des Inhalts an.
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
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
        Die <kbd>Rücktaste</kbd> (<kbd>Backspace</kbd>) Taste. Auf
        Mac-Tastaturen als <kbd>Entfernen</kbd> (<kbd>Delete</kbd>) beschriftet.
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
      <td>Die Cursorauswahltaste, <kbd>CrSel</kbd>.</td>
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
      <td>Die Entfernen-Taste, <kbd>Del</kbd>.</td>
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
        Löschen bis zum Ende des Feldes. Löscht alle Zeichen vom aktuellen
        Cursorposition bis zum Ende des aktuellen Feldes.
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
        Die Einfügetaste, <kbd>Ins</kbd>. Wechselt zwischen Einfügen und
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

\[1] Auf Tastaturen ohne eigene <kbd>Del</kbd>-Taste generiert der Mac den Wert `"Delete"`, wenn <kbd>Fn</kbd> in Verbindung mit <kbd>Delete</kbd> (was auf anderen Plattformen die <kbd>Backspace</kbd>-Taste ist) gedrückt wird.

\[2] Firefox 36 und früher verwenden `"Del"` anstelle von `"Delete"` für die <kbd>Del</kbd>-Taste.

\[3] Firefox 36 und früher generiert den Wert `"Crsel"` anstelle von `"CrSel"`, wenn die <kbd>CrSel</kbd>-Taste gedrückt wird.

\[4] Firefox 36 und früher generiert den Wert `"Exsel"` anstelle von `"ExSel"`, wenn die <kbd>ExSel</kbd>-Taste gedrückt wird.

## UI-Tasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
        Die <kbd>Accept</kbd>, <kbd>Commit</kbd> oder <kbd>OK</kbd> Taste oder
        Schaltfläche. Akzeptiert die aktuell ausgewählte Option oder
        Eingabemethodenfolgeumwandlung.
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td>Die <kbd>Again</kbd> Taste. Wiederholt eine vorherige Aktion.</td>
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
        Zeigt das Kontextmenü an. Typischerweise zwischen der
        <kbd>Windows</kbd>- (oder <kbd>OS</kbd>) Taste und der <kbd>Control</kbd>
        Taste auf der rechten Seite der Tastatur zu finden.
      </td>
      <td><code>VK_APPS</code> (0x5D)</td>
      <td><code>kVK_ContextualMenu</code> (0x6E)</td>
      <td>
        <code>GDK_KEY_Menu</code> (0xFF67)<br /><code>Qt::Key_Menu</code>
        (0x01000055)
      </td>
      <td><code>KEYCODE_MENU</code> (82)</td>
    </tr>
    <tr>
      <td><code>"Escape"</code> [2]</td>
      <td>
        Die <kbd>Esc</kbd> (Escape) Taste. Typischerweise verwendet als Taste
        zum Beenden, Abbrechen oder "diese Operation verlassen". Historisch
        gesehen wurde das Escape-Zeichen verwendet, um den Start einer speziellen
        Steuerzeichensequenz namens "Escape-Sequenz" zu signalisieren.
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
        Die <kbd>Help</kbd> Taste. Öffnet oder schaltet die Anzeige von
        Hilfsinformationen um.
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
        aktuellen Zustand, falls zutreffend.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies sollte nicht mit dem
            <code>"MediaPause"</code> Schlüsselwert verwechselt werden, der
            für Mediencontroller verwendet wird und nicht zur Steuerung von
            Anwendungen und Prozessen.
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
            <strong>Hinweis:</strong> Dies sollte nicht mit dem
            <code>"MediaPlay"</code> Schlüsselwert verwechselt werden, der
            für Mediencontroller verwendet wird und nicht zur Steuerung von
            Anwendungen und Prozessen.
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

\[1] In Google Chrome 52 gibt die <kbd>Cancel</kbd>-Taste fälschlicherweise den Schlüsselcode `"Pause"` zurück. Dies ist in Chrome 53 behoben. (Details finden Sie unter [Chrome bug 612749](https://crbug.com/612749).)

\[2] In Firefox 36 und früher gibt die <kbd>Esc</kbd>-Taste `"Esc"` anstelle von `"Escape"` zurück.

\[3] Firefox 36 und früher meldet `"Apps"` anstelle von `"ContextMenu"` für die Kontextmenü-Taste.

\[4] Die <kbd>Attn</kbd>-Taste generiert den Schlüsselcode `"Unidentified"` in Firefox und Google Chrome, es sei denn, das japanische Tastaturlayout ist aktiv, in welchem Fall sie stattdessen `"KanaMode"` generiert.

\[5] Die <kbd>Finish</kbd>-Taste generiert in Firefox den Schlüsselcode `"Unidentified"`, es sei denn, das japanische Tastaturlayout ist aktiv, in welchem Fall sie stattdessen `"Katakana"` generiert.

\[6] Firefox unterstützte die Tasten `"ZoomIn"` und `"ZoomOut"` erst ab Firefox 37.

## Gerätetasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
        Die Helligkeit vermindern Taste. Wird typischerweise verwendet, um die
        Helligkeit des Displays zu reduzieren.
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
        Die Helligkeit erhöhen Taste. Erhöht typischerweise die Helligkeit des
        Displays.
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
        Die <kbd>Eject</kbd> Taste. Entfernt Wechseldatenträger (oder öffnet
        bzw. schließt das Fach eines optischen Speichermediums).
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
        Die <kbd>Power</kbd> Taste oder Taste, um die Stromversorgung ein- und
        auszuschalten.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Nicht alle Systeme leiten diese Taste an
            den Benutzeragenten weiter.
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
        <kbd>SnapShot</kbd>. Erfasst den Bildschirm und druckt ihn oder speichert
        ihn auf der Festplatte.
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
        Die <kbd>Hibernate</kbd> Taste. Speichert den Zustand des Computers auf
        der Festplatte und schaltet ihn dann aus; der Computer kann in seinen
        vorherigen Zustand zurückversetzt werden, indem die gespeicherten
        Zustandsinformationen wiederhergestellt werden.
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
        Die <kbd>Standby</kbd> Taste. (Auch bekannt als <kbd>Suspend</kbd> oder
        <kbd>Sleep</kbd>.) Schaltet das Display aus und versetzt den Computer
        in einen Energiesparmodus, ohne ihn komplett auszuschalten.
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
        Ruhezustands- oder Standby-Modus zu wecken.
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

\[1] Die <kbd>Standby</kbd>-Taste wird von Firefox 36 und früher nicht unterstützt, daher wird sie als `"Unidentified"` gemeldet.

\[2] Vor Firefox 37 generierte diese Taste den Wert `"Unidentified"`.

## IME- und Kompositions-Tasten

Tasten, die beim Verwenden eines {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) verwendet werden, um Text einzugeben, der nicht einfach durch einfache Tastendrücke eingegeben werden kann, z. B. Text in Sprachen, die mehr Grapheme haben als es Zeicheneingabetasten auf der Tastatur gibt. Häufige Beispiele sind Chinesisch, Japanisch, Koreanisch und Hindi.

Einige Tasten sind in mehreren Sprachen üblich, während andere nur auf Tastaturen existieren, die auf bestimmte Sprachen abzielen. Außerdem haben nicht alle Tastaturen alle diese Tasten.

### Allgemeine IME-Tasten

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tastencodes</th>
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
        Die <kbd>All Candidates</kbd> Taste, die den Mehrfachkandidatenmodus startet, in dem mehrere Kandidaten für die laufende Eingabe angezeigt werden.
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
        Die <kbd>Code Input</kbd> Taste, die den Codeeingabemodus aktiviert, der es dem Benutzer ermöglicht, Zeichen durch Eingabe ihrer Codepunkte (typisch Unicode-Zeichennummern) einzugeben.
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
        Die <kbd>Convert</kbd> Taste, die das IME anweist, die aktuelle Eingabemethodensequenz in das resultierende Zeichen zu konvertieren.
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
          Eine tote "kombinierende" Taste; das heißt, eine Taste, die in Kombination mit anderen Tasten verwendet wird, um Akzentzeichen und andere modifizierte Zeichen zu erzeugen. Wenn sie alleine gedrückt wird, erzeugt sie kein Zeichen.
        </p>
        <p>
          Wenn Sie feststellen möchten, welche spezifische tote Taste gedrückt wurde (in Fällen, in denen es mehr als eine gibt), können Sie dies durch Untersuchung der mit dem [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) verbundenen [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event) Ereignis [`data`](/de/docs/Web/API/CompositionEvent/data) Eigenschaft feststellen.
        </p>
      </td>
      <td></td>
      <td></td>
      <td>Siehe <a href="#dead_keycodes_for_linux">Tote Tastencodes für Linux</a> unten</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        Die <kbd>Final</kbd> (Finalmodus) Taste wird auf einigen asiatischen Tastaturen verwendet, um den Finalmodus bei Verwendung von IMEs einzugeben.
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
        >. Jede Taste kann mehrere Gruppen von Zeichen haben, jede in ihrer eigenen Spalte. Das Drücken dieser Taste weist das Gerät an, Tastendrücke als aus der ersten Spalte stammend zu interpretieren.
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
      <td>Die Mode Change Taste. Umschaltet oder wechselt zwischen Eingabemodi von IMEs.</td>
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
        Die Funktionstaste Next Candidate. Wählt die nächste mögliche Übereinstimmung für die laufende Eingabe.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        Die <kbd>NonConvert</kbd> ("Nicht konvertieren") Taste. Diese akzeptiert die aktuelle Eingabemethodensequenz ohne Konvertierung bei Verwendung eines IMEs.
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
        Die Previous Candidate Taste. Wählt die vorherige mögliche Übereinstimmung für die laufende Eingabe.
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
        Die <kbd>Process</kbd> Taste. Weist das IME an, die Konvertierung zu verarbeiten.
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        Die Single Candidate Taste. Aktiviert den Einzelkandidatenmodus (im Gegensatz zum Mehrfachkandidatenmodus); in diesem Modus wird nur ein Kandidat gleichzeitig angezeigt.
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

\[1] Im _X Window System_ wird die <kbd>Compose</kbd> Taste als <kbd>Multi</kbd> Taste bezeichnet.

<!-- cSpell:ignore Nonconvert -->

\[2] Die <kbd>NonConvert</kbd> Taste wird von Firefox-Versionen 36 und früher als `"Nonconvert"` anstelle des korrekten `"NonConvert"` gemeldet.

\[3] Die <kbd>Process</kbd> Taste gibt derzeit in Firefox `"Unidentified"` zurück. Google Chrome liefert den Wert der Taste, als ob IME nicht verwendet würde.

\[4] Vor Firefox 37 waren diese Tasten `"Unidentified"`.

\[5] Firefox generiert den Tastenwert `"AltGraph"` anstelle von `"ModeChange"`.

### Nur koreanische Tastaturen

Diese Tasten sind nur auf koreanischen Tastaturen verfügbar. Es gibt andere von verschiedenen Plattformen für koreanische Tastaturen definierte Tasten, aber dies sind die gebräuchlichsten und die, die durch die UI-Events-Spezifikation identifiziert sind.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Tastencodes</th>
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
        Die <kbd>Hangul</kbd> (koreanisches Zeichensatz) Modus-Taste, die zwischen Hangul und englischen Eingabemodi umschaltet.
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
        Wählt den Hanja-Modus aus, um Hangul-Zeichen in die spezifischeren Hanja-Zeichen zu konvertieren.
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
        Wählt den Junja-Modus, in dem Koreanisch mit einb…

## Telefontasten

Diese Tasten repräsentieren Knöpfe, die häufig auf modernen Smartphones zu finden sind.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
      <td><code>"AppSwitch"</code></td>
      <td>
        Zeigt eine Liste der zuletzt verwendeten Anwendungen an, die es dem Benutzer ermöglicht, schnell die App zu wechseln.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_APP_SWITCH</code> (187)</td>
    </tr>
    <tr>
      <td><code>"Call"</code></td>
      <td>Die <kbd>Anruf</kbd>-Taste. Wählt die eingegebene Nummer.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Call</code> (0x01100004)</td>
      <td><code>KEYCODE_CALL</code> (5)</td>
    </tr>
    <tr>
      <td><code>"Camera"</code></td>
      <td>Die <kbd>Kamera</kbd>-Taste. Aktiviert die Kamera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Camera</code> (0x01100020)</td>
      <td><code>KEYCODE_CAMERA</code> (27)</td>
    </tr>
    <tr>
      <td><code>"CameraFocus"</code></td>
      <td>Die <kbd>Fokus</kbd>-Taste. Fokussiert die Kamera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_CameraFocus</code> (0x01100021)</td>
      <td><code>KEYCODE_FOCUS</code> (80)</td>
    </tr>
    <tr>
      <td><code>"EndCall"</code></td>
      <td>Die Taste <kbd>Anruf beenden</kbd> oder <kbd>Auflegen</kbd>.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Hangup</code> (0x01100005)</td>
      <td><code>KEYCODE_ENDCALL</code> (6)</td>
    </tr>
    <tr>
      <td><code>"GoBack"</code></td>
      <td>Die <kbd>Zurück</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"GoHome"</code> [1]</td>
      <td>
        Die <kbd>Home</kbd>-Taste. Bringt den Benutzer zurück zum Hauptbildschirm des Telefons (in der Regel ein Anwendungsstarter).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"HeadsetHook"</code></td>
      <td>
        Die Taste <kbd>Headset Hook</kbd>. Dies ist typischerweise eigentlich eine Taste am Headset, die zum Auflegen von Anrufen und zum Abspielen oder Pausieren von Medien verwendet wird.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_ToggleCallHangup</code> (0x01100007)</td>
      <td><code>KEYCODE_HEADSETHOOK</code> (79)</td>
    </tr>
    <tr>
      <td><code>"LastNumberRedial"</code></td>
      <td>Die Taste <kbd>Wahlwiederholung</kbd>. Wählt die zuletzt gewählte Nummer erneut.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_LastNumberRedial</code> (0x01100009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Notification"</code></td>
      <td>Die <kbd>Benachrichtigung</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NOTIFICATION</code> (83)</td>
    </tr>
    <tr>
      <td><code>"MannerMode"</code></td>
      <td>
        Eine Taste, die zwischen den Benachrichtigungsmodi wechselt: stumm, vibrieren, klingeln usw.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MANNER_MODE</code> (205)</td>
    </tr>
    <tr>
      <td><code>"VoiceDial"</code></td>
      <td>Die <kbd>Sprachwahl</kbd>-Taste. Initiert das Wählen per Spracheingabe.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_VoiceDial</code> (0x01100008)</td>
      <td><code>KEYCODE_VOICE_ASSIST</code> (231)</td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 generierte die Home-Taste einen Tastencode von `"Exit"`. Ab Firefox 37 generiert die Taste den Tastencode `"MozHomeScreen"`.

## Multimedia-Tasten

Die Multimedia-Tasten sind zusätzliche Tasten zur Steuerung von Mediengeräten, die auf einigen Tastaturen zu finden sind.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
      <td><code>"ChannelDown"</code></td>
      <td>Wechselt zum vorherigen Kanal.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelDown</code> (0x01000119)</td>
      <td><code>KEYCODE_CHANNEL_DOWN</code> (167)</td>
    </tr>
    <tr>
      <td><code>"ChannelUp"</code></td>
      <td>Wechselt zum nächsten Kanal.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_UP</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelUp</code> (0x01000118)</td>
      <td><code>KEYCODE_CHANNEL_UP</code> (166)</td>
    </tr>
    <tr>
      <td><code>"MediaFastForward"</code> [2]</td>
      <td>
        Startet, setzt fort oder erhöht die Geschwindigkeit des schnellen Vorwärtsspulens der Medien.
      </td>
      <td><code>APPCOMMAND_MEDIA_FAST_FORWARD</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioForward</code> (0x1008FF97)<br/><code>Qt:Key_AudioForward</code> (0x01000102)</td>
      <td><code>KEYCODE_MEDIA_FAST_FORWARD</code> (90)</td>
    </tr>
    <tr>
      <td><code>"MediaPause"</code></td>
      <td>
        <p>Unterbricht die derzeit wiedergegebenen Medien.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Einige ältere Anwendungen verwenden
            <code>"Pause"</code>, aber das ist nicht korrekt.
          </p>
        </div>
      </td>
      <td><code>APPCOMMAND_MEDIA_PAUSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPause</code> (0x1008FF31)<br /><code>Qt::Key_MediaPause</code>
        (0x1000085)
      </td>
      <td><code>KEYCODE_MEDIA_PAUSE</code> (127)</td>
    </tr>
    <tr>
      <td><code>"MediaPlay"</code></td>
      <td>
        Startet oder setzt das Abspielen von Medien mit normaler Geschwindigkeit fort, sofern dies noch nicht der Fall ist. Hat andernfalls keine Wirkung.
      </td>
      <td><code>APPCOMMAND_MEDIA_PLAY</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioPlay</code> (0x1008FF14)</td>
      <td><code>KEYCODE_MEDIA_PLAY</code> (126)</td>
    </tr>
    <tr>
      <td><code>"MediaPlayPause"</code></td>
      <td>Wechselt zwischen dem Abspielen und dem Pausieren der aktuellen Medien.</td>
      <td>
        <code>VK_MEDIA_PLAY_PAUSE</code> (0xB3)<br /><code>APPCOMMAND_MEDIA_PLAY_PAUSE</code>
      </td>
      <td></td>
      <td><code>Qt::Key_MediaTogglePlayPause</code> (0x1000086)</td>
      <td><code>KEYCODE_MEDIA_PLAY_PAUSE</code> (85)</td>
    </tr>
    <tr>
      <td><code>"MediaRecord"</code></td>
      <td>Startet oder setzt die Aufnahme von Medien fort.</td>
      <td><code>APPCOMMAND_MEDIA_RECORD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRecord</code> (0x1008FF1C)<br /><code>Qt::Key_MediaRecord</code>
        (0x01000084)
      </td>
      <td><code>KEYCODE_MEDIA_RECORD</code> (130)</td>
    </tr>
    <tr>
      <td><code>"MediaRewind"</code></td>
      <td>Startet, setzt fort oder erhöht die Geschwindigkeit des Zurückspulens der Medien.</td>
      <td><code>APPCOMMAND_MEDIA_REWIND</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRewind</code> (0x1008FF3E)<br /><code>Qt::Key_AudioRewind</code>
        (0x010000C5)
      </td>
      <td><code>KEYCODE_MEDIA_REWIND</code> (89)</td>
    </tr>
    <tr>
      <td><code>"MediaStop"</code></td>
      <td>
        Stoppt die aktuelle Medientätigkeit (wie Abspielen, Aufnehmen, Pausieren, Vorwärtsspulen oder Zurückspulen). Hat keine Wirkung, wenn das Medium bereits gestoppt ist.
      </td>
      <td>
        <code>VK_MEDIA_STOP</code> (0xB2)<br /><code>APPCOMMAND_MEDIA_STOP</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioStop</code> (0x1008FF15)<br /><code>Qt::Key_MediaStop</code>
        (0x01000081)
      </td>
      <td><code>KEYCODE_MEDIA_STOP</code> (86)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackNext"</code> [1]</td>
      <td>Sucht nach dem nächsten Medien- oder Programmtrack.</td>
      <td>
        <code>VK_MEDIA_NEXT_TRACK</code> (0xB0)<br /><code>APPCOMMAND_MEDIA_NEXTTRACK</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioNext</code> (0x1008FF17)<br /><code>Qt::Key_MediaNext</code>
        (0x01000083)
      </td>
      <td><code>KEYCODE_MEDIA_NEXT</code> (87)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackPrevious"</code> [1]</td>
      <td>Sucht nach dem vorherigen Medien- oder Programmtrack.</td>
      <td>
        <code>VK_MEDIA_PREV_TRACK</code> (0xB1)<br /><code>APPCOMMAND_MEDIA_PREVIOUSTRACK</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPrev</code> (0x1008FF16)<br /><code>Qt::Key_MediaPrevious</code>
        (0x01000082)
      </td>
      <td><code>KEYCODE_MEDIA_PREVIOUS</code> (88)</td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge und Firefox (bis Version 36) verwendeten `"MediaNextTrack"` und `"MediaPreviousTrack"` anstelle von `"MediaTrackNext"` und `"MediaTrackPrevious"`.

\[2] Vor Firefox 37 generierte Firefox den Tastencode `"FastFwd"` auf einigen Plattformen und `"Unidentified"` auf anderen anstelle von `"MediaFastForward"`.

## Audiosteuerungstasten

Diese Medientasten werden speziell zur Steuerung von Audio verwendet.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
      <td><code>"AudioBalanceLeft"</code></td>
      <td>Passt die Audiobalance nach links an.</td>
      <td><code>VK_AUDIO_BALANCE_LEFT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBalanceRight"</code></td>
      <td>Passt die Audiobalance nach rechts an.</td>
      <td><code>VK_AUDIO_BALANCE_RIGHT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassDown"</code></td>
      <td>Verringert die Bassmenge.</td>
      <td><code>APPCOMMAND_BASS_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostDown"</code></td>
      <td>
        Reduziert die Bassverstärkung oder wechselt nach unten durch Bassverstärkungsmodi oder -zustände.
      </td>
      <td><code>VK_BASS_BOOST_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostToggle"</code></td>
      <td>Schaltet die Bassverstärkung ein und aus.</td>
      <td><code>APPCOMMAND_BASS_BOOST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostUp"</code></td>
      <td>
        Erhöht die Bassverstärkung oder wechselt nach oben durch eine Reihe von Bassverstärkungsmodi oder -zuständen.
      </td>
      <td><code>VK_BASS_BOOST_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassUp"</code></td>
      <td>Erhöht die Bassmenge.</td>
      <td><code>APPCOMMAND_BASS_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderFront"</code></td>
      <td>Passt den Audiofader nach vorne an.</td>
      <td><code>VK_FADER_FRONT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderRear"</code></td>
      <td>Passt den Audiofader nach hinten an.</td>
      <td><code>VK_FADER_REAR</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioSurroundModeNext"</code></td>
      <td>Wählt den nächsten verfügbaren Surround-Sound-Modus aus.</td>
      <td><code>VK_SURROUND_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleDown"</code></td>
      <td>Verringert die Höhenmenge.</td>
      <td><code>APPCOMMAND_TREBLE_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleUp"</code></td>
      <td>Erhöht die Höhenmenge.</td>
      <td><code>APPCOMMAND_TREBLE_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioVolumeDown" [1]</code></td>
      <td>Verringert die Audio-Lautstärke.</td>
      <td>
        <code>VK_VOLUME_DOWN</code> (0xAE)<br /><code>APPCOMMAND_VOLUME_DOWN</code>
      </td>
      <td><code>kVK_VolumeDown</code> (0x49)</td>
      <td>
        <code>GDK_KEY_AudioLowerVolume</code> (0x1008FF11)<br /><code>Qt::Key_VolumeDown</code>
        (0x01000070)
      </td>
      <td><code>KEYCODE_VOLUME_DOWN</code> (25)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeMute" [1]</code></td>
      <td>Schaltet die Audioausgabe stumm.</td>
      <td>
        <code>VK_VOLUME_MUTE</code> (0xAD)<br /><code>APPCOMMAND_VOLUME_MUTE</code>
      </td>
      <td><code>kVK_Mute</code> (0x4A)</td>
      <td>
        <code>GDK_KEY_AudioMute</code> (0x1008FF12)<br /><code>Qt::Key_VolumeMute</code>
        (0x01000071)
      </td>
      <td><code>KEYCODE_VOLUME_MUTE</code> (164)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeUp" [1]</code></td>
      <td>Erhöht die Audio-Lautstärke.</td>
      <td>
        <code>VK_VOLUME_UP</code> (0xAF)<br /><code>APPCOMMAND_VOLUME_UP</code>
      </td>
      <td><code>kVK_VolumeUp</code> (0x48)</td>
      <td>
        <code>GDK_KEY_AudioRaiseVolume</code> (0x1008FF13)<br /><code>Qt::Key_VolumeUp</code>
        (0x01000072)
      </td>
      <td><code>KEYCODE_VOLUME_UP</code> (24)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneToggle"</code></td>
      <td>Schaltet das Mikrofon ein und aus.</td>
      <td><code>APPCOMMAND_MIC_ON_OFF_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeDown"</code></td>
      <td>Verringert die Eingangslautstärke des Mikrofons.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeDown</code> (0x0100011E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeMute"</code></td>
      <td>Schaltet den Mikrofoneingang stumm.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_MUTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioMicMute</code> (0x1008FFB2)<br /><code>Qt::Key_MicMute</code>
        (0x01000113)
      </td>
      <td><code>KEYCODE_MUTE</code> (91)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeUp"</code></td>
      <td>Erhöht die Eingangslautstärke des Mikrofons.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_UP</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeUp</code> (0x0100011D)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge und Firefox (bis Version 48) verwendeten `"VolumeUp"`, `"VolumeDown"` und `"VolumeMute"` anstelle von `"AudioVolumeUp"`, `"AudioVolumeDown"` und `"AudioVolumeMute"`. In Firefox 49 wurden sie aktualisiert, um der neuesten Spezifikation zu entsprechen.

## TV-Steuerungstasten

Diese Tastenwerte repräsentieren Knöpfe oder Tasten, die auf Fernsehgeräten oder Computern oder Telefonen mit TV-Unterstützung vorhanden sind.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Tastencode</th>
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
      <td><code>"TV"</code> [1]</td>
      <td>Schaltet in den TV-Anzeigemodus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV</code> (170)</td>
    </tr>
    <tr>
      <td><code>"TV3DMode"</code></td>
      <td>Schaltet den 3D-TV-Modus ein und aus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_3D_MODE</code> (206)</td>
    </tr>
    <tr>
      <td><code>"TVAntennaCable"</code></td>
      <td>Wechselt zwischen Antennen- und Kabeleingängen.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_ANTENNA_CABLE</code> (242)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescription"</code></td>
      <td>Schaltet den Audiobeschreibungsmodus ein und aus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION</code> (252)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixDown"</code></td>
      <td>
        Verringert die Mischlautstärke der Audiobeschreibung; reduziert die Lautstärke der Audiobeschreibungen im Verhältnis zum Programmton.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN</code> (254)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixUp"</code></td>
      <td>
        Erhöht die Mischlautstärke der Audiobeschreibung; erhöht die Lautstärke der Audiobeschreibungen im Verhältnis zum Programmton.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP</code> (253)</td>
    </tr>
    <tr>
      <td><code>"TVContentsMenu"</code></td>
      <td>
        Zeigt oder verbirgt die medialen Inhalte, die zur Wiedergabe zur Verfügung stehen (dies kann ein Programmführer sein, der die aktuell ausgestrahlten Programme zeigt, oder eine Liste von Mediendateien zur Wiedergabe).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_CONTENTS_MENU</code> (256)</td>
    </tr>
    <tr>
      <td><code>"TVDataService"</code></td>
      <td>Zeigt oder verbirgt das Datendienstmenü des Fernsehers.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_DATA_SERVICE</code> (230)</td>
    </tr>
    <tr>
      <td><code>"TVInput"</code> [2]</td>
      <td>Lässt den Eingabemodus an einem externen Fernseher durchlaufen.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT</code> (178)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent1"</code></td>
      <td>Wechselt zum Eingang "Komponente 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_1</code> (249)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent2"</code></td>
      <td>Wechselt zum Eingang "Komponente 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_2</code> (250)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite1"</code></td>
      <td>Wechselt zum Eingang "Composite 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_1</code> (247)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite2"</code></td>
      <td>Wechselt zum Eingang "Composite 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_2</code> (248)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI1"</code></td>
      <td>Wechselt zum Eingang "HDMI 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_1</code> (243)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI2"</code></td>
      <td>Wechselt zum Eingang "HDMI 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_2</code> (244)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI3"</code></td>
      <td>Wechselt zum Eingang "HDMI 3".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_3</code> (245)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI4"</code></td>
      <td>Wechselt zum Eingang "HDMI 4".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_4</code> (246)</td>
    </tr>
    <tr>
      <td><code>"TVInputVGA1"</code></td>
      <td>Wechselt zum Eingang "VGA 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_VGA_1</code> (251)</td>
    </tr>
    <tr>
      <td><code>"TVMediaContext"</code></td>
      <td>Die Media-Context-Menü-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_MEDIA_CONTEXT_MENU</code> (257)</td>
    </tr>
    <tr>
      <td><code>"TVNetwork"</code></td>
      <td>Schaltet die Netzwerkverbindung des Fernsehers ein und aus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NETWORK</code> (241)</td>
    </tr>
    <tr>
      <td><code>"TVNumberEntry"</code></td>
      <td>Setzt den Fernseher in den Nummerneingabemodus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NUMBER_ENTRY</code> (234)</td>
    </tr>
    <tr>
      <td><code>"TVPower"</code> [2]</td>
      <td>Der Netzschalter des Geräts.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_POWER</code> (177)</td>
    </tr>
    <tr>
      <td><code>"TVRadioService"</code></td>
      <td>Radiotaste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_RADIO_SERVICE</code> (232)</td>
    </tr>
    <tr>
      <td><code>"TVSatellite"</code></td>
      <td>Satellitentaste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE</code> (237)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteBS"</code></td>
      <td>Broadcast-Satellitentaste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_BS</code> (238)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteCS"</code></td>
      <td>Kommunikations-Satellitentaste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_CS</code> (239)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteToggle"</code></td>
      <td>Wechselt zwischen verfügbaren Satelliten.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_SERVICE</code> (240)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialAnalog"</code></td>
      <td>
        Wählt den analogen terrestrischen Fernsehdienst (analoges Kabel oder Antennenempfang).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_ANALOG</code> (235)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialDigital"</code></td>
      <td>
        Wählt den digitalen terrestrischen Fernsehdienst (digitales Kabel oder Antennenempfang).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_DIGITAL</code> (236)</td>
    </tr>
    <tr>
      <td><code>"TVTimer"</code></td>
      <td>Programmierbare Timer-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TIMER_PROGRAMMING</code> (258)</td>
    </tr>
  </tbody>
</table>

\[1] Firefox hat in Firefox 37 die ordnungsgemäße Unterstützung für die `"TV"`-Taste hinzugefügt; davor generierte diese Taste den Tastencode `"Live"`.

\[2] Diese Tasten waren bis Firefox 37 `"Unidentified"`.

## Mediensteuerungs-Tasten

Da moderne Fernbedienungen für Mediengeräte oftmals Tasten enthalten, die über die grundlegenden Steuerungen hinausgehen, die an anderer Stelle in diesem Dokument behandelt werden, sind für eine Vielzahl dieser zusätzlichen Tasten Werte definiert.

Die unten aufgeführten Werte stammen teilweise aus verschiedenen technischen Spezifikationen für Unterhaltungselektronik:

- [DTV Application Software Environment](https://www.atsc.org/atsc-documents/a100-dtv-application-software-environment-level-1-dase-1/) (Teil der [ATSC](https://en.wikipedia.org/wiki/ATSC) Spezifikation)
- [Open Cable Application Platform](https://en.wikipedia.org/wiki/OpenCable_Application_Platform)
- [ANSI/CEA-2014-B](https://shop.cta.tech/products/cta-2014): Web-basiertes Protokoll und Framework für Fernbenutzeroberflächen auf UPnP™ Netzwerken und dem Internet
- [Android KeyEvent key code values](https://developer.android.com/reference/android/view/KeyEvent.html)

> [!NOTE]
> Fernbedienungen enthalten typischerweise Tasten, deren Werte bereits an anderer Stelle definiert sind, wie z. B. unter [Multimedia-Tasten](#mediensteuerungs-tasten) oder [Audiosteuerungs-Tasten](#spracherkennungstasten). Die Werte dieser Tasten entsprechen den in diesen Tabellen dokumentierten.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Taste</th>
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
      <td><code>"AVRInput"</code> [3]</td>
      <td>Ändert den Eingabemodus an einer externen Audio/Video-Receiver-Einheit (AVR).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_INPUT</code> (182)</td>
    </tr>
    <tr>
      <td><code>"AVRPower"</code> [3]</td>
      <td>Schaltet die Leistung einer externen AVR-Einheit um.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_POWER</code> (181)</td>
    </tr>
    <tr>
      <td><code>"ColorF0Red"</code> [3]</td>
      <td>
        General-purpose Mediafunktionstaste, farbcodiert rot. Diese hat den Index
        <code>0</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_0</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_RED</code> (183)</td>
    </tr>
    <tr>
      <td><code>"ColorF1Green"</code> [3]</td>
      <td>
        Allgemeine Medientaste, farbcodiert grün. Diese hat den Index
        <code>1</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_1</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREEN</code> (184)</td>
    </tr>
    <tr>
      <td><code>"ColorF2Yellow"</code> [3]</td>
      <td>
        Allgemeine Medientaste, farbcodiert gelb. Diese hat den Index
        <code>2</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_2</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_YELLOW</code> (185)</td>
    </tr>
    <tr>
      <td><code>"ColorF3Blue"</code> [3]</td>
      <td>
        Allgemeine Medientaste, farbcodiert blau. Diese hat den Index
        <code>3</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_3</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BLUE</code> (186)</td>
    </tr>
    <tr>
      <td><code>"ColorF4Grey"</code></td>
      <td>
        Allgemeine Medientaste, farbcodiert grau. Diese hat den Index
        <code>4</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_4</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREY</code></td>
    </tr>
    <tr>
      <td><code>"ColorF5Brown"</code></td>
      <td>
        Allgemeine Medientaste, farbcodiert braun. Diese hat den Index
        <code>5</code> unter den farbcodierten Tasten.
      </td>
      <td><code>VK_COLORED_KEY_5</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BROWN</code></td>
    </tr>
    <tr>
      <td><code>"ClosedCaptionToggle"</code></td>
      <td>Schaltet die Untertitel um.</td>
      <td><code>VK_CC</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Dimmer"</code></td>
      <td>
        Reguliert die Helligkeit des Geräts durch Umschalten zwischen zwei Helligkeitsstufen <em>oder</em> durch Umschalten zwischen mehreren Helligkeitsstufen.
      </td>
      <td><code>VK_DIMMER</code></td>
      <td></td>
      <td><code>GDK_KEY_BrightnessAdjust</code> (0x1008FF3B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DisplaySwap"</code></td>
      <td>Wechselt zwischen Videosignalquellen.</td>
      <td><code>VK_DISPLAY_SWAP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DVR"</code></td>
      <td>Wechselt die Eingangsquelle zum Digital Video Recorder (DVR).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DVR</code> (173)</td>
    </tr>
    <tr>
      <td><code>"Exit"</code></td>
      <td>Die Exit-Taste, die die aktuelle Anwendung oder das Menü beendet.</td>
      <td><code>VK_EXIT</code></td>
      <td></td>
      <td><code>Qt::Key_Exit</code> (0x0102000a)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear0"</code></td>
      <td>
        Löscht das Programm oder den Inhalt, der im ersten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_CLEAR_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear1"</code></td>
      <td>
        Löscht das Programm oder den Inhalt, der im zweiten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_CLEAR_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear2"</code></td>
      <td>
        Löscht das Programm oder den Inhalt, der im dritten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_CLEAR_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear3"</code></td>
      <td>
        Löscht das Programm oder den Inhalt, der im vierten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_CLEAR_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall0"</code></td>
      <td>
        Wählt (ruft auf) das Programm oder den Inhalt, der im ersten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_RECALL_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall1"</code></td>
      <td>
        Wählt (ruft auf) das Programm oder den Inhalt, der im zweiten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_RECALL_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall2"</code></td>
      <td>
        Wählt (ruft auf) das Programm oder den Inhalt, der im dritten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_RECALL_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall3"</code></td>
      <td>
        Wählt (ruft auf) das Programm oder den Inhalt, der im vierten Favoritenspeicherplatz gespeichert ist.
      </td>
      <td><code>VK_RECALL_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore0"</code></td>
      <td>
        Speichert das aktuelle Programm oder den Inhalt im ersten Favoritenspeicherplatz.
      </td>
      <td><code>VK_STORE_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore1"</code></td>
      <td>
        Speichert das aktuelle Programm oder den Inhalt im zweiten Favoritenspeicherplatz.
      </td>
      <td><code>VK_STORE_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore2"</code></td>
      <td>
        Speichert das aktuelle Programm oder den Inhalt im dritten Favoritenspeicherplatz.
      </td>
      <td><code>VK_STORE_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore3"</code></td>
      <td>
        Speichert das aktuelle Programm oder den Inhalt im vierten Favoritenspeicherplatz.
      </td>
      <td><code>VK_STORE_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Guide"</code></td>
      <td>Schaltet die Anzeige des Programms oder Inhalts-Leitfadens um.</td>
      <td><code>VK_GUIDE</code></td>
      <td></td>
      <td><code>Qt::Key_Guide</code> (0x0100011A)</td>
      <td><code>KEYCODE_GUIDE</code> (172)</td>
    </tr>
    <tr>
      <td><code>"GuideNextDay"</code></td>
      <td>
        Wenn der Leitfaden derzeit angezeigt wird, fordert diese Taste den Leitfaden auf, den Inhalt des nächsten Tages anzuzeigen.
      </td>
      <td><code>VK_NEXT_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GuidePreviousDay"</code></td>
      <td>
        Wenn der Leitfaden derzeit angezeigt wird, fordert diese Taste den Leitfaden auf, den Inhalt des vorherigen Tages anzuzeigen.
      </td>
      <td><code>VK_PREV_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Info"</code></td>
      <td>
        Schaltet die Anzeige von Informationen über den aktuell ausgewählten Inhalt, das Programm oder das Medium um.
      </td>
      <td><code>VK_INFO</code></td>
      <td></td>
      <td><code>Qt::Key_Info</code> (0x0100011B)</td>
      <td><code>KEYCODE_INFO</code> (165)</td>
    </tr>
    <tr>
      <td><code>"InstantReplay"</code></td>
      <td>
        Fordert das Gerät auf, eine Sofortwiederholung durchzuführen (typischerweise eine Form des Rücksprungs um eine kurze Zeitspanne und erneutes Abspielen, möglicherweise, aber nicht normalerweise, in Zeitlupe).
      </td>
      <td><code>VK_INSTANT_REPLAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Link"</code></td>
      <td>
        Öffnet Inhalte, die mit dem aktuellen Programm verknüpft sind, falls verfügbar und möglich.
      </td>
      <td><code>VK_LINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ListProgram"</code></td>
      <td>Listet das aktuelle Programm auf.</td>
      <td><code>VK_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LiveContent"</code></td>
      <td>
        Schaltet eine Anzeige auf, die derzeit verfügbaren Live-Inhalte oder -Programme auflistet.
      </td>
      <td><code>VK_LIVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Lock"</code></td>
      <td>Sperrt oder entsperrt den aktuell ausgewählten Inhalt oder das Programm.</td>
      <td><code>VK_LOCK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaApps"</code></td>
      <td>
        Präsentiert eine Liste von Medienanwendungen, wie Fotoanzeiger, Audio- und
        Videoplayer sowie Spiele. [1]
      </td>
      <td><code>VK_APPS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaAudioTrack"</code></td>
      <td>Die Audiotrack-Taste.</td>
      <td></td>
      <td></td>
      <td>
        GDK_KEY_AudioCycleTrack (0x1008FF9B)<br /><code
          >Qt::Key_AudioCycleTrack</code
        >
        (0x01000106)
      </td>
      <td><code>KEYCODE_MEDIA_AUDIO_TRACK</code> (222)</td>
    </tr>
    <tr>
      <td><code>"MediaLast"</code></td>
      <td>Wechselt zurück zum zuletzt angesehenen Inhalt, Programm oder anderen Medien.</td>
      <td><code>VK_LAST</code></td>
      <td></td>
      <td><code>Qt::Key_MediaLast</code> (0x0100FFFF)</td>
      <td><code>KEYCODE_LAST_CHANNEL</code> (229)</td>
    </tr>
    <tr>
      <td><code>"MediaSkipBackward"</code></td>
      <td>Springt zurück zum vorherigen Inhalt oder Programm.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaSkipForward"</code></td>
      <td>Springt zum nächsten Inhalt oder Programm vor.</td>
      <td><code>VK_SKIP</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepBackward"</code></td>
      <td>Schritt zurück zum vorherigen Inhalt oder Programm.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_STEP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepForward"</code></td>
      <td>Schritt vorwärts zum nächsten Inhalt oder Programm.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaTopMenu"</code></td>
      <td>
        Top-Menü-Taste. Öffnet das Hauptmenü der Medien (z. B. für eine DVD oder Blu-Ray
        Disc).
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_TopMenu</code> (0x0100010A)</td>
      <td><code>KEYCODE_MEDIA_TOP_MENU</code></td>
    </tr>
    <tr>
      <td><code>"NavigateIn"</code></td>
      <td>Navigiert in ein Untermenü oder eine Option.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_IN</code></td>
    </tr>
    <tr>
      <td><code>"NavigateNext"</code></td>
      <td>Navigiert zum nächsten Element.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_NEXT</code></td>
    </tr>
    <tr>
      <td><code>"NavigateOut"</code></td>
      <td>Navigiert aus dem aktuellen Bildschirm oder Menü heraus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_OUT</code></td>
    </tr>
    <tr>
      <td><code>"NavigatePrevious"</code></td>
      <td>Navigiert zum vorherigen Element.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_PREVIOUS</code></td>
    </tr>
    <tr>
      <td><code>"NextFavoriteChannel"</code></td>
      <td>Wechselt zum nächsten Kanal in der Favoritenliste.</td>
      <td><code>VK_NEXT_FAVORITE_CHANNEL</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NextUserProfile"</code></td>
      <td>
        Wechselt zum nächsten gespeicherten Benutzerprofil, wenn diese Funktion unterstützt wird und mehrere Profile vorhanden sind.
      </td>
      <td><code>VK_USER</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"OnDemand"</code></td>
      <td>
        Öffnet die Benutzeroberfläche zum Auswählen von On-Demand-Inhalten oder -Programmen zum Ansehen.
      </td>
      <td><code>VK_ON_DEMAND</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Pairing"</code></td>
      <td>
        Startet den Prozess des Koppelns der Fernbedienung mit einem zu steuernden Gerät.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PAIRING</code> (225)</td>
    </tr>
    <tr>
      <td><code>"PinPDown"</code></td>
      <td>Eine Taste, um die Bild-im-Bild-Ansicht nach unten zu bewegen.</td>
      <td><code>VK_PINP_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPMove"</code></td>
      <td>Eine Taste, um die Bewegung der Bild-im-Bild-Ansicht zu steuern.</td>
      <td><code>VK_PINP_MOVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPToggle"</code></td>
      <td>Schaltet die Anzeige der Bild-im-Bild-Ansicht ein und aus.</td>
      <td><code>VK_PINP_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPUp"</code></td>
      <td>Eine Taste, um die Bild-im-Bild-Ansicht nach oben zu bewegen.</td>
      <td><code>VK_PINP_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedDown"</code></td>
      <td>Verringert die Medienwiedergabegeschwindigkeit.</td>
      <td><code>VK_PLAY_SPEED_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedReset"</code></td>
      <td>Setzt die Medienwiedergabegeschwindigkeit auf normal zurück.</td>
      <td><code>VK_PLAY_SPEED_RESET</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedUp"</code></td>
      <td>Erhöht die Medienwiedergabegeschwindigkeit.</td>
      <td><code>VK_PLAY_SPEED_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RandomToggle"</code></td>
      <td>Schaltet den Zufallsmodus (auch bekannt als "Shuffle-Modus") ein und aus.</td>
      <td><code>VK_RANDOM_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioRandomPlay</code> (0x1008FF99)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RcLowBattery"</code></td>
      <td>
        Ein Code, der gesendet wird, wenn die Batterie der Fernbedienung schwach ist. Dies entspricht tatsächlich keiner physischen Taste.
      </td>
      <td><code>VK_RC_LOW_BATTERY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RecordSpeedNext"</code></td>
      <td>Wechselt zwischen den verfügbaren Medienaufnahmegeschwindigkeiten.</td>
      <td><code>VK_RECORD_SPEED_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RfBypass"</code></td>
      <td>
        Schaltet den Hochfrequenzeingangs-Umgehungsmodus (RF) ein und aus. Der RF-Umgehungsmodus leitet den HF-Eingang direkt zur HF-Ausgabe ohne jede Verarbeitung oder Filterung durch.
      </td>
      <td><code>VK_RF_BYPASS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScanChannelsToggle"</code></td>
      <td>
        Schaltet den Kanal-Scanmodus ein und aus. Dies ist ein Modus, der automatisch zwischen den Kanälen wechselt, bis der Benutzer den Scan stoppt.
      </td>
      <td><code>VK_SCAN_CHANNELS_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScreenModeNext"</code></td>
      <td>Wechselt durch die verfügbaren Bildschirmdarstellungsmodi.</td>
      <td><code>VK_SCREEN_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Settings"</code></td>
      <td>Schaltet die Anzeige des Einstellungsbildschirms des Geräts ein und aus.</td>
      <td><code>VK_SETTINGS</code></td>
      <td></td>
      <td><code>Qt::Key_Settings</code> (0x0100011C)</td>
      <td><code>KEYCODE_SETTINGS</code></td>
    </tr>
    <tr>
      <td><code>"SplitScreenToggle"</code></td>
      <td>Schaltet den geteilten Bildschirmmodus ein und aus.</td>
      <td><code>VK_SPLIT_SCREEN_TOGGLE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_SplitScreen</code> (0x1008FF7D)<br /><code
          >Qt::Key_SplitScreen</code
        >
        (0x010000ED)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"STBInput"</code> [3]</td>
      <td>Wechselt zwischen den Eingabemodi auf einer externen Set-Top-Box (STB).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_INPUT</code> (180)</td>
    </tr>
    <tr>
      <td><code>"STBPower"</code> [3]</td>
      <td>Schaltet eine externe STB ein und aus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_POWER</code> (179)</td>
    </tr>
    <tr>
      <td><code>"Subtitle"</code></td>
      <td>Schaltet die Untertitelanzeige ein und aus, wenn sie verfügbar ist.</td>
      <td><code>VK_SUBTITLE</code></td>
      <td></td>
      <td><code>GDK_KEY_Subtitle</code> (0x1008FF9A)</td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Teletext"</code></td>
      <td>
        Schaltet die Anzeige des <a href="https://en.wikipedia.org/wiki/Teletext">Videotexts</a> ein und aus, falls verfügbar.
      </td>
      <td><code>VK_TELETEXT</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TELETEXT</code> (233)</td>
    </tr>
    <tr>
      <td><code>"VideoModeNext"</code> [3]</td>
      <td>Wechselt durch die verfügbaren Videomodi.</td>
      <td><code>VK_VIDEO_MODE_NEXT</code></td>
      <td></td>
      <td><code>GDK_KEY_Next_VMode</code> (0x1008FE22)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Wink"</code></td>
      <td>
        Veranlasst das Gerät, sich in irgendeiner Weise zu identifizieren, beispielsweise durch
        das Blitzen eines Lichts, kurzzeitige Änderung der Helligkeit von Anzeigelichtern, oder das Emitieren eines Tons.
      </td>
      <td><code>VK_WINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZoomToggle"</code> [2]</td>
      <td>
        Schaltet zwischen Vollbild- und skaliertem Inhaltsanzeigen um oder
        ändert auf andere Weise den Vergrößerungsgrad.
//
      </td>
      <td><code>VK_ZOOM</code> (0xFB)</td>
      <td></td>
      <td><code>Qt::Key_Zoom</code> (0x01020006)</td>
      <td><code>KEYCODE_TV_ZOOM_MODE</code> (255)</td>
    </tr>
  </tbody>
</table>

\[1] Verwechseln Sie nicht die Medienstesteuerungsschaltfläche `VK_APPS` mit der Windows-`VK_APPS`-Taste, die auch als `VK_CONTEXT_MENU` bekannt ist. Diese Taste wird als `"ContextMenu"` kodiert.

\[2] Firefox 36 und früher identifizieren die Zoom-Umschalttaste als `"Zoom"`. Firefox 37 korrigiert dies zu `"ZoomToggle"`.

\[3] Diese Tasten waren `"Unidentified"` bis Firefox 37.

## Spracherkennungstasten

Diese speziellen Multimedia-Tasten werden verwendet, um Sprachsteuerungsfunktionen zu steuern.

<table class="no-markdown">
<thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Taste</th>
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
      <td><code>"SpeechCorrectionList"</code> [1]</td>
      <td>
        Präsentiert eine Liste möglicher Korrekturen für ein Wort, das falsch
        identifiziert wurde.
      </td>
      <td><code>APPCOMMAND_CORRECTION_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpeechInputToggle"</code> [2]</td>
      <td>
        Schaltet zwischen Diktiermodus und Befehl/Steuerungs-Modus um. Dies lässt die
        Sprach-Engine wissen, ob gesprochene Wörter als Eingabetext oder als
        Befehle zu interpretieren sind.
      </td>
      <td><code>APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Der `APPCOMMAND_CORRECTION_LIST`-Befehl unter Windows erzeugt `"Unidentified"` bei Firefox.

\[2] Der `APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE`-Befehl unter Windows erzeugt `"Unidentified"` bei Firefox.

## Dokumententasten

Diese Tasten steuern Dokumente. In der Spezifikation sind sie in anderen Tasten-Sets (wie den Medientasten) enthalten, aber es ist sinnvoller, sie als eigene Kategorie zu betrachten.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Taste</th>
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
      <td><code>"Close"</code> [1]</td>
      <td>
        Schließt das aktuelle Dokument oder die aktuelle Nachricht. Darf die Anwendung nicht beenden.
      </td>
      <td><code>APPCOMMAND_CLOSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Close</code> (0x1008FF56)<br /><code>Qt::Key_Close</code>
        (0x010000CE)
      </td>
      <td><code>KEYCODE_MEDIA_CLOSE</code> (128)</td>
    </tr>
    <tr>
      <td><code>"New"</code> [1]</td>
      <td>Erstellt ein neues Dokument oder eine neue Nachricht.</td>
      <td><code>APPCOMMAND_NEW</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_New</code> (0x1008FF68)<br /><code>Qt::Key_New</code>
        (0x01000120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Open"</code> [1]</td>
      <td>Öffnet ein bestehendes Dokument oder eine Nachricht.</td>
      <td><code>APPCOMMAND_OPEN</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Open</code> (0x1008FF6B)<br /><code>Qt::Key_Open</code>
        (0x01000121)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Print"</code></td>
      <td>Druckt das aktuelle Dokument oder die Nachricht.</td>
      <td><code>APPCOMMAND_PRINT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Print</code> (0xFF61)<br /><code>Qt::Print</code>
        (0x01000009)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Save"</code> [1]</td>
      <td>Speichert das aktuelle Dokument oder die Nachricht.</td>
      <td><code>APPCOMMAND_SAVE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Save</code> (0x1008FF77)<br /><code>Qt::Key_Save</code>
        (0x010000EA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpellCheck"</code> [1]</td>
      <td>Startet die Rechtschreibprüfung für das aktuelle Dokument.</td>
      <td><code>APPCOMMAND_SPELL_CHECK</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Spell</code> (0x1008FF7C)<br /><code>Qt::Key_Spell</code>
        (0x010000EC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailForward"</code> [1]</td>
      <td>Öffnet die Benutzeroberfläche, um eine Nachricht weiterzuleiten.</td>
      <td><code>APPCOMMAND_FORWARD_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MailForward</code> (0x1008FF90)<br /><code
          >Qt::Key_MailForward</code
        >
        (0x010000FB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailReply"</code> [1]</td>
      <td>Öffnet die Benutzeroberfläche, um auf eine Nachricht zu antworten.</td>
      <td><code>APPCOMMAND_REPLY_TO_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Reply</code> (0x1008FF72)<br /><code>Qt::Key_Reply</code>
        (0x010000E5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailSend"</code> [1]</td>
      <td>Sendet die aktuelle Nachricht.</td>
      <td><code>APPCOMMAND_SEND_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Send</code> (0x1008FF7B)<br /><code>Qt::Key_Send</code>
        (0x010000EB)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 generierte dieser Schlüssel den Wert `"Unidentified"`.

## Anwendungsauswahl-Tasten

Einige Tastaturen bieten spezielle Tasten zum Starten oder Umschalten zu bestimmten üblichen Anwendungen. Schlüsselwerte für diese sind hier aufgeführt.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtuelle Taste</th>
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
      <td><code>"LaunchCalculator"</code> [5]</td>
      <td>
        Die <kbd>Taschenrechner</kbd>-Taste, oft mit einem Symbol beschriftet. Dies wird oft
        als generische Anwendungstarter-Taste verwendet
        (<code>APPCOMMAND_LAUNCH_APP2</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP2</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calculator</code> (0x1008FF1D)<br /><code
          >Qt::Key_Calculator</code
        >
        (0x010000CB)
      </td>
      <td><code>KEYCODE_CALCULATOR</code> (210)</td>
    </tr>
    <tr>
      <td><code>"LaunchCalendar"</code> [5]</td>
      <td>Die <kbd>Kalender</kbd>-Taste. Oft mit einem Symbol beschriftet.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calendar</code> (0x1008FF20)<br /><code
          >Qt::Key_Calendar</code
        >
        (0x010000E4)
      </td>
      <td><code>KEYCODE_CALENDAR</code> (208)</td>
    </tr>
    <tr>
      <td><code>"LaunchContacts"</code></td>
      <td>Die <kbd>Kontakte</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CONTACTS</code> (207)</td>
    </tr>
    <tr>
      <td><code>"LaunchMail"</code></td>
      <td>Die <kbd>Mail</kbd>-Taste. Oft mit einem Symbol beschriftet.</td>
      <td>
        <code>VK_LAUNCH_MAIL</code> (0xB4)<br /><code
          >APPCOMMAND_LAUNCH_MAIL</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Mail</code> (0x1008FF19)<br /><code
          >Qt::Key_LaunchMail</code
        >
        (0x010000A0)
      </td>
      <td><code>KEYCODE_ENVELOPE</code> (65)</td>
    </tr>
    <tr>
      <td><code>"LaunchMediaPlayer"</code> [1]</td>
      <td>Die <kbd>Media Player</kbd>-Taste.</td>
      <td>
        <code>VK_LAUNCH_MEDIA_SELECT</code> (0xB5)<br /><code
          >APPCOMMAND_LAUNCH_MEDIA_SELECT</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_CD</code> (0x1008FF53)<br /><code>GDK_KEY_Video</code>
        (0x1008FF87)<br /><code>GDK_KEY_AudioMedia</code>
        (0x1008FF32)<br /><code>Qt::Key_LaunchMedia</code> (0x010000A1)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchMusicPlayer"</code> [5]</td>
      <td>Die <kbd>Musik Player</kbd>-Taste. Oft mit einem Symbol beschriftet.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Music</code> (0x1008FF92)<br /><code>Qt::Key_Music</code>
        (0x010000FD)
      </td>
      <td><code>KEYCODE_MUSIC</code> (209)</td>
    </tr>
    <tr>
      <td><code>"LaunchMyComputer"</code> [5]</td>
      <td>
        Die <kbd>Mein Computer</kbd>-Taste auf Windows-Tastaturen. Dies wird oft als generische Anwendungstarter-Taste verwendet (<code>APPCOMMAND_LAUNCH_APP1</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP1</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MyComputer</code> (0x1008FF33)<br /><code
          >GDK_KEY_Explorer</code
        >
        (0x1008FF5D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchPhone"</code></td>
      <td>
        Die <kbd>Telefon</kbd>-Taste. Öffnet die Telefonwähler-Anwendung (falls vorhanden).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Phone</code> (0x1008FF6E)<br /><code>Qt::Key_Phone</code>
        (0x010000E3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchScreenSaver"</code> [5]</td>
      <td>Die <kbd>Bildschirmschoner</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ScreenSaver</code> (0x1008FF2D)<br /><code
          >Qt::Key_ScreenSaver</code
        >
        (0x010000BA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchSpreadsheet"</code> [4]</td>
      <td>
        Die <kbd>Tabellenkalkulation</kbd>-Taste. Diese Taste kann mit einem Symbol beschriftet sein.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Excel</code> (0x1008FF5C)<br /><code>Qt::Key_Excel</code>
        (0x010000D4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWebBrowser"</code> [4]</td>
      <td>
        Die <kbd>Webbrowser</kbd>-Taste. Diese Taste ist häufig mit einem Symbol beschriftet.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WWW</code> (0x1008FF2E)<br /><code>Qt::Key_WWW</code>
        (0x010000BB)
      </td>
      <td><code>KEYCODE_EXPLORER</code> (64)</td>
    </tr>
    <tr>
      <td><code>"LaunchWebCam"</code> [5]</td>
      <td>Die <kbd>WebCam</kbd>-Taste. Öffnet die WebCam-Anwendung.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WebCam</code> (0x1008FF8F)<br /><code
          >Qt::Key_WebCam</code
        >
        (0x010000FA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWordProcessor"</code> [5]</td>
      <td>
        Die <kbd>Textverarbeitungsprogramm</kbd>-Taste. Diese kann mit einem Symbol eines bestimmten Textverarbeitungsprogramms oder einem generischen Dokumentensymbol beschriftet sein.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Word</code> (0x1008FF89)<br /><code>Qt::Key_Word</code>
        (0x010000F4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication1"</code> [2]</td>
      <td>Die erste generische Anwendungstarter-Taste.</td>
      <td>
        <code>VK_LAUNCH_APP1</code> (0xB6)<br /><code
          >APPCOMMAND_LAUNCH_APP1</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch0</code> (0x1008FF40)<br /><code
          >Qt::Key_Launch0</code
        >
        (0x010000A2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication2"</code> [3]</td>
      <td>Die zweite generische Anwendungstarter-Taste.</td>
      <td>
        <code>VK_LAUNCH_APP2</code> (0xB7)<br /><code
          >APPCOMMAND_LAUNCH_APP2</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch1</code> (0x1008FF41)<br /><code
          >Qt::Key_Launch1</code
        >
        (0x010000A3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication3"</code></td>
      <td>Die dritte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch2</code> (0x1008FF42)<br /><code
          >Qt::Key_Launch2</code
        >
        (0x010000A4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication4"</code></td>
      <td>Die vierte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch3</code> (0x1008FF43)<br /><code
          >Qt::Key_Launch3</code
        >
        (0x010000A5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication5"</code></td>
      <td>Die fünfte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch4</code> (0x1008FF44)<br /><code
          >Qt::Key_Launch4</code
        >
        (0x010000A6)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication6"</code></td>
      <td>Die sechste generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch5</code> (0x1008FF45)<br /><code
          >Qt::Key_Launch5</code
        >
        (0x010000A7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication7"</code></td>
      <td>Die siebte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch6</code> (0x1008FF46)<br /><code
          >Qt::Key_Launch6</code
        >
        (0x010000A8)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication8"</code></td>
      <td>Die achte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch7</code> (0x1008FF47)<br /><code
          >Qt::Key_Launch7</code
        >
        (0x010000A9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication9"</code></td>
      <td>Die neunte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch8</code> (0x1008FF48)<br /><code
          >Qt::Key_Launch8</code
        >
        (0x010000AA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication10"</code></td>
      <td>Die zehnte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch9</code> (0x1008FF49)<br /><code
          >Qt::Key_Launch9</code
        >
        (0x010000AB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication11"</code></td>
      <td>Die elfte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchA</code> (0x1008FF4A)<br /><code
          >Qt::Key_LaunchA</code
        >
        (0x010000AC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication12"</code></td>
      <td>Die zwölfte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchB</code> (0x1008FF4B)<br /><code
          >Qt::Key_LaunchB</code
        >
        (0x010000AD)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication13"</code></td>
      <td>Die dreizehnte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchC</code> (0x1008FF4C)<br /><code
          >Qt::Key_LaunchC</code
        >
        (0x010000AE)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication14"</code></td>
      <td>Die vierzehnte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchD</code> (0x1008FF4D)<br /><code
          >Qt::Key_LaunchD</code
        >
        (0x010000AF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication15"</code></td>
      <td>Die fünfzehnte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchE</code> (0x1008FF4E)<br /><code
          >Qt::Key_LaunchE</code
        >
        (0x010000B0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication16"</code></td>
      <td>Die sechzehnte generische Anwendungstarter-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchF</code> (0x1008FF4F)<br /><code
          >Qt::Key_LaunchF</code
        >
        (0x010000B1)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Der Legacy-Edge und Firefox (36 und früher) verwenden `"SelectMedia"` anstelle von `"LaunchMediaPlayer"`. Firefox 37 bis Firefox 48 verwenden `"MediaSelect"`. Mit Firefox 49 wurde aktualisiert, um die neueste Spezifikation zu erfüllen und `"LaunchMediaPlayer"` zurückzugeben.

\[2] Google Chrome 57 und früher gaben `"LaunchMyComputer"` anstelle von `"LaunchApplication1"` zurück. Siehe [Chrome Bug 612743](https://crbug.com/612743) für weitere Informationen.

\[3] Google Chrome 57 und früher gaben `"LaunchCalculator"` anstelle von `"LaunchApplication2"` zurück. Siehe [Chrome Bug 612743](https://crbug.com/612743) für weitere Informationen.

\[4] Vor Firefox 37 gab Firefox den Schlüsselcode `"LaunchApplication1"` statt `"LaunchWebBrowser"` für die Web-Browsertaste zurück.

\[5] Firefox führte die Unterstützung für diesen Schlüssel in Firefox 37 ein. Vorher wurde dieser Schlüssel als `"Unidentified"`gemeldet.

## Browser-Steuertasten

Einige Tastaturen enthalten spezielle Tasten zur Steuerung von Webbrowsern. Diese Tasten sind im Folgenden aufgeführt.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Keycode</th>
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
      <td><code>"BrowserBack"</code></td>
      <td>
        Navigiert zur vorherigen Seite oder Inhalt in der Verlaufshistorie der aktuellen Web-Ansicht.
      </td>
      <td>
        <code>VK_BROWSER_BACK</code> (0xA6)<br /><code>APPCOMMAND_BROWSER_BACKWARD</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Back</code> (0x1008FF26)<br /><code>Qt::Key_Back</code> (0x01000061)
      </td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"BrowserFavorites"</code> [1]</td>
      <td>Öffnet die Lesezeichen/Favoriten-Liste des Benutzers.</td>
      <td>
        <code>VK_BROWSER_FAVORITES</code> (0xAB)<br /><code>APPCOMMAND_BROWSER_FAVORITES</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Favorites</code> (0x1008FF30)<br /><code>GDK_KEY_MySites</code> (0x1008FF67)<br /><code>Qt::Favorites</code> (0x01000091)
      </td>
      <td><code>KEYCODE_BOOKMARK</code> (174)</td>
    </tr>
    <tr>
      <td><code>"BrowserForward"</code></td>
      <td>
        Navigiert zur nächsten Seite oder Inhalt in der Verlaufshistorie der aktuellen Web-Ansicht.
      </td>
      <td>
        <code>VK_BROWSER_FORWARD</code> (0xA7)<br /><code>APPCOMMAND_BROWSER_FORWARD</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Forward</code> (0x1008FF27)<br /><code>Qt::Key_Forward</code> (0x01000062)
      </td>
      <td><code>KEYCODE_FORWARD</code> (125)</td>
    </tr>
    <tr>
      <td><code>"BrowserHome"</code></td>
      <td>Navigiert zur bevorzugten Startseite des Benutzers.</td>
      <td>
        <code>VK_BROWSER_HOME</code> (0xAC)<br /><code>APPCOMMAND_BROWSER_HOME</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_HomePage</code> (0x1008FF18)<br /><code>Qt::Key_HomePage</code> (0x01000090)
      </td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"BrowserRefresh"</code></td>
      <td>Aktualisiert die aktuelle Seite oder den Inhalt.</td>
      <td>
        <code>VK_BROWSER_REFRESH</code> (0xA8)<br /><code>APPCOMMAND_BROWSER_REFRESH</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Refresh</code> (0x1008FF29)<br /><code>GDK_KEY_Reload</code> (0x1008FF73)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"BrowserSearch"</code></td>
      <td>
        Aktiviert die bevorzugte Suchmaschine des Benutzers oder die Suchoberfläche innerhalb ihres Browsers.
      </td>
      <td>
        <code>VK_BROWSER_SEARCH</code> (0xAA)<br /><code>APPCOMMAND_BROWSER_SEARCH</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Search</code> (0x1008FF1B)<br /><code>Qt::Key_Search</code> (0x01000092)
      </td>
      <td><code>KEYCODE_SEARCH</code> (84)</td>
    </tr>
    <tr>
      <td><code>"BrowserStop"</code></td>
      <td>Stoppt das Laden der derzeit angezeigten Web-Ansicht oder des Inhalts.</td>
      <td>
        <code>VK_BROWSER_STOP</code> (0xA9)<br /><code>APPCOMMAND_BROWSER_STOP</code>
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Stop</code> (0x1008FF28)<br /><code>Qt::Key_Search</code> (0x01000063)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 wurde der Wert dieser Taste als `"Unidentified"` gemeldet.

## Tasten des numerischen Tastenfelds

Diese Tasten befinden sich auf dem numerischen Tastenfeld der Tastatur. Allerdings sind nicht alle auf jeder Tastatur vorhanden. Obwohl typische numerische Tastenfelder numerische Tasten von <kbd>0</kbd> bis <kbd>9</kbd> haben (kodiert als `"0"` bis `"9"`), enthalten einige Multimedia-Tastaturen zusätzliche Zahlentasten für höhere Zahlen.

> [!NOTE]
> Die <kbd>10</kbd>-Taste, wenn vorhanden, erzeugt Ereignisse mit dem `key`-Wert von `"0"`.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
      <th rowspan="2" scope="col">Beschreibung</th>
      <th colspan="4" scope="col">Virtueller Keycode</th>
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
      <td><code>"Decimal"</code> [1] {{deprecated_inline}}</td>
      <td>
        <p>
          Die Dezimaltaste (typischerweise <kbd>.</kbd> oder <kbd>,</kbd> abhängig von der Region).
        </p>
        <p>
          In neueren Browsern entspricht dieser Wert dem Zeichen, das von der Dezimaltaste erzeugt wird (eines dieser beiden Zeichen). [1]
        </p>
      </td>
      <td><code>VK_DECIMAL</code> (0x6E)</td>
      <td><code>kVK_ANSI_KeypadDecimal</code> (0x41)</td>
      <td><code>GDK_KEY_KP_Decimal</code> (0xFFAE)<br /> </td>
      <td><code>KEYCODE_NUMPAD_DOT</code> (158)</td>
    </tr>
    <tr>
      <td><code>"Key11"</code></td>
      <td>Die <kbd>11</kbd>-Taste auf bestimmten Medien-Numeriktastaturen.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Key12"</code></td>
      <td>Die <kbd>12</kbd>-Taste auf bestimmten Medien-Numeriktastaturen.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Multiply"</code> [1] {{deprecated_inline}}</td>
      <td>Die Multiplikationstaste auf dem numerischen Tastenfeld, <kbd>*</kbd>.</td>
      <td><code>VK_MULTIPLY</code> (0x6A)</td>
      <td><code>kVK_ANSI_KeypadMultiply</code> (0x43)</td>
      <td>
        <code>GDK_KEY_KP_Multiply</code> (0xFFAA)<br /><code>Qt::Key_Multiply</code> (0x0D7)
      </td>
      <td><code>KEYCODE_NUMPAD_MULTIPLY</code> (155)</td>
    </tr>
    <tr>
      <td><code>"Add"</code> [1] {{deprecated_inline}}</td>
      <td>Die Additionstaste auf dem numerischen Tastenfeld, <kbd>+</kbd>.</td>
      <td><code>VK_ADD</code> (0x6B)</td>
      <td><code>kVK_ANSI_KeypadPlus</code> (0x45)</td>
      <td><code>GDK_KEY_KP_Add</code> (0xFFAB)</td>
      <td><code>KEYCODE_NUMPAD_ADD</code> (157)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>Die <kbd>Clear</kbd>-Taste auf dem numerischen Tastenfeld.</td>
      <td></td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code> (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Divide"</code> [1] {{deprecated_inline}}</td>
      <td>Die Divisionstaste auf dem numerischen Tastenfeld, <kbd>/</kbd>.</td>
      <td><code>VK_DIVIDE</code> (0x6F)</td>
      <td><code>kVK_ANSI_KeypadDivide</code> (0x4B)</td>
      <td>
        <code>GDK_KEY_KP_Divide</code> (0xFFAF)<br /><code>Qt::Key_Slash</code> (0x2F)
      </td>
      <td><code>KEYCODE_NUMPAD_DIVIDE</code> (154)</td>
    </tr>
    <tr>
      <td><code>"Subtract"</code> [1] {{deprecated_inline}}</td>
      <td>Die Subtraktionstaste auf dem numerischen Tastenfeld, <kbd>-</kbd>.</td>
      <td><code>VK_SUBTRACT</code> (0x6D)</td>
      <td><code>kVK_ANSI_KeypadMinus</code> (0x4E)</td>
      <td><code>GDK_KEY_KP_Subtract</code> (0xFFAD)</td>
      <td><code>KEYCODE_NUMPAD_SUBTRACT</code> (156)</td>
    </tr>
    <tr>
      <td><code>"Separator"</code> [1]</td>
      <td>
        <p>Das Zeichen für die Trennung von Stellen auf dem numerischen Tastenfeld.</p>
        <p>
          (In den Vereinigten Staaten ist dies ein Komma, anderswo häufig ein Punkt.)
        </p>
      </td>
      <td><code>VK_SEPARATOR</code> (0x6C)</td>
      <td><code>kVK_JIS_KeypadComma</code> (0x5F)</td>
      <td><code>GDK_KEY_KP_Separator</code> (0xFFAC)<br /> </td>
      <td><code>KEYCODE_NUMPAD_COMMA</code> (159)</td>
    </tr>
    <tr>
      <td><code>"0"</code> bis <code>"9"</code></td>
      <td>Die tatsächlichen Zahlentasten auf dem numerischen Tastenfeld.</td>
      <td><code>VK_NUMPAD0</code> (0x60) - <code>VK_NUMPAD9</code> (0x69)</td>
      <td><code>kVK_Keypad0</code> (0x52) - <code>kVK_Keypad9</code> (0x5C)</td>
      <td>
        <code>GDK_KEY_KP_0</code> (0xFFB0) - <code>GDK_KEY_KP_9</code> (0xFFB9)
      </td>
      <td>
        <code>KEYCODE_NUMPAD_0</code> (144) - <code>KEYCODE_NUMPAD_9</code> (153)
      </td>
    </tr>
  </tbody>
</table>

\[1] Während ältere Browser Begriffe wie `"Add"`, `"Decimal"`, `"Multiply"` verwendeten, identifizieren moderne Browser diese mittels des tatsächlichen Zeichens (`"+"`, `"."`, `"*"`, und so weiter).
