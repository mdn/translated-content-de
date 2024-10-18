---
title: Schlüsselwerte für Tastaturereignisse
slug: Web/API/UI_Events/Keyboard_event_key_values
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("UI Events")}}

Die unten stehenden Tabellen listen die Standardwerte für die [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft auf und erklären, wofür die Taste typischerweise verwendet wird. Entsprechende virtuelle Tastencodes für gängige Plattformen sind, sofern verfügbar, enthalten.

## Spezielle Werte

Werte von `key`, die spezielle Bedeutungen haben, abgesehen von der Identifizierung einer bestimmten Taste oder eines Zeichens.

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
      <td><code>"Unidentified"</code></td>
      <td>
        <p>
          Der Benutzeragent ist nicht in der Lage, den virtuellen Tastencode des Ereignisses auf einen bestimmten Schlüsselwert abzubilden.
        </p>
        <p>
          Dies kann aufgrund von Hardware- oder Softwarebeschränkungen oder aufgrund von Beschränkungen durch die Plattform, auf der der Benutzeragent ausgeführt wird, geschehen.
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

_Modifikatoren_ sind spezielle Tasten, die verwendet werden, um Sonderzeichen zu erzeugen oder spezielle Aktionen auszuführen, wenn sie in Kombination mit anderen Tasten verwendet werden. Beispiele umfassen die Tasten <kbd>Shift</kbd> und <kbd>Control</kbd> sowie Sperrtasten wie <kbd>Caps Lock</kbd> und <kbd>NumLock</kbd>.

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
      <td><code>"Alt"</code> [4]</td>
      <td>Die <kbd>Alt</kbd> (Alternative)-Taste.</td>
      <td>
        <code>VK_MENU</code> (0x12)<br /><code>VK_LMENU</code> (0xA4)<br /><code>VK_RMENU</code> (0xA5)
      </td>
      <td>
        <code>kVK_Option</code> (0x3A)<br /><code>kVK_RightOption</code> (0x3D)
      </td>
      <td>
        <code>GDK_KEY_Alt_L</code> (0xFFE9)<br /><code>GDK_KEY_Alt_R</code> (0xFFEA)<br /><code>Qt::Key_Alt</code> (0x01000023)
      </td>
      <td>
        <code>KEYCODE_ALT_LEFT</code> (57)<br /><code>KEYCODE_ALT_RIGHT</code> (58)
      </td>
    </tr>
    <tr>
      <td><code>"AltGraph"</code> [4]</td>
      <td>
        Die <kbd>AltGr</kbd> oder <kbd>AltGraph</kbd> (Erweiterte Grafiken)-Taste.
        Aktiviert den ISO Level 3-Shift-Modifikator (wobei <kbd>Shift</kbd> der
        Level 2-Modifikator ist).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code>GDK_KEY_ISO_Level3_Shift</code> (0xFE03)<br /><code>GDK_KEY_ISO_Level3_Latch</code> (0xFE04)<br /><code>GDK_KEY_ISO_Level3_Lock</code> (0xFE05)<br /><code>GDK_KEY_ISO_Level5_Shift</code> (0xFE11)<br /><code>GDK_KEY_ISO_Level5_Latch</code> (0xFE12)<br /><code>GDK_KEY_ISO_Level5_Lock</code> (0xFE13)<br /><code>Qt::Key_AltGr</code> (0x01001103<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CapsLock"</code></td>
      <td>
        Die <kbd>Caps Lock</kbd>-Taste. Schaltet die Feststellung der Großbuchstaben ein oder aus für nachfolgende Eingaben.
      </td>
      <td><code>VK_CAPITAL</code> (0x14)</td>
      <td><code>kVK_CapsLock</code> (0x39)</td>
      <td>
        <code>GDK_KEY_Caps_Lock</code> (0xFFE5)<br /><code>Qt::Key_CapsLock</code> (0x01000024)
      </td>
      <td><code>KEYCODE_CAPS_LOCK</code> (115)</td>
    </tr>
    <tr>
      <td><code>"Control"</code></td>
      <td>
        Die <kbd>Control</kbd>-, <kbd>Ctrl</kbd>- oder <kbd>Ctl</kbd>-Taste. Ermöglicht das Schreiben von Steuercodes.
      </td>
      <td>
        <code>VK_CONTROL</code> (0x11)<br /><code>VK_LCONTROL</code> (0xA2)<br /><code>VK_RCONTROL</code> (0xA3)
      </td>
      <td>
        <code>kVK_Control</code> (0x3B)<br /><code>kVK_RightControl</code> (0x3E)
      </td>
      <td>
        <code>GDK_KEY_Control_L</code> (0xFFE3)<br /><code>GDK_KEY_Control_R</code> (0xFFE4)<br /><code>Qt::Key_Control</code> (0x01000021)
      </td>
      <td>
        <code>KEYCODE_CTRL_LEFT</code> (113)<br /><code>KEYCODE_CTRL_RIGHT</code> (114)
      </td>
    </tr>
    <tr>
      <td><code>"Fn"</code></td>
      <td>
        Die <kbd>Fn</kbd> (Funktionsmodifikator)-Taste. Wird verwendet, um das Erzeugen von Funktionstasten-Zeichen (<kbd>F1</kbd>–<kbd>F15</kbd>, beispielsweise) bei Tastaturen ohne dedizierte Funktionstastenbereich zu ermöglichen. Oftmals in Hardware gehandhabt, sodass für diese Taste keine Ereignisse generiert werden.
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        Die <kbd>FnLock</kbd> oder <kbd>F-Lock</kbd> (Funktionsverriegelung)-Taste. Schaltet den Modus der Funktionstasten, beschrieben durch <code>"Fn"</code>, ein oder aus. Oftmals in Hardware gehandhabt, sodass für diese Taste keine Ereignisse generiert werden.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hyper"</code> [3]</td>
      <td>Die <kbd>Hyper</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hyper_L</code> (0xFFED)<br /><code>GDK_KEY_Hyper_R</code> (0xFFEE)<br /><code>Qt::Key_Hyper_L</code> (0x01000056)<br /><code>Qt::Key_Hyper_R</code> (0x01000057)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Meta"</code> [1]</td>
      <td>
        Die <kbd>Meta</kbd>-Taste. Ermöglicht das Ausführen spezieller Befehlsen. Dies ist die Taste mit dem <kbd>Windows</kbd>-Logo oder die <kbd>Command</kbd>- oder <kbd>⌘</kbd>-Taste auf Mac-Tastaturen.
      </td>
      <td><code>VK_LWIN</code> (0x5B)<br /><code>VK_RWIN</code> (0x5C)</td>
      <td>
        <code>kVK_Command</code> (0x37)<br /><code>kVK_RightCommand</code> (0x36)
      </td>
      <td>
        <code>GDK_KEY_Meta_L</code> (0xFFE7)<br /><code>GDK_KEY_Meta_R</code> (0xFFE8)<br /><code>Qt::Key_Meta</code> (0x01000022)
      </td>
      <td>
        <code>KEYCODE_META_LEFT</code> (117)<br /><code>KEYCODE_META_RIGHT</code> (118)
      </td>
    </tr>
    <tr>
      <td><code>"NumLock"</code></td>
      <td>
        Die <kbd>NumLock</kbd> (Zahlenverriegelung)-Taste. Schaltet das numerische Tastenfeld zwischen Zahleneingabe und einem anderen Modus (oft Richtungsfeilen) um.
      </td>
      <td><code>VK_NUMLOCK</code> (0x90)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Num_Lock</code> (0xFF7F)<br /><code>Qt::Key_NumLock</code> (0x01000025)
      </td>
      <td><code>KEYCODE_NUM_LOCK</code> (143)</td>
    </tr>
    <tr>
      <td><code>"ScrollLock"</code> [2]</td>
      <td>
        Die <kbd>Scroll Lock</kbd>-Taste. Wechselt zwischen Scroll- und Cursorbewegungsmodi.
      </td>
      <td><code>VK_SCROLL</code> (0x91)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Scroll_Lock</code> (0xFF14)<br /><code>Qt::Key_ScrollLock</code> (0x01000026)
      </td>
      <td><code>KEYCODE_SCROLL_LOCK</code> (116)</td>
    </tr>
    <tr>
      <td><code>"Shift"</code></td>
      <td>
        Die <kbd>Shift</kbd>-Taste. Modifiziert Tastenanschläge, um das Tippen von Großbuchstaben (oder anderen) und das Unterstützen beim Tippen von Satzzeichen und anderen Sonderzeichen zu ermöglichen.
      </td>
      <td>
        <code>VK_SHIFT</code> (0x10)<br /><code>VK_LSHIFT</code> (0xA0)<br /><code>VK_RSHIFT</code> (0xA1)
      </td>
      <td>
        <code>kVK_Shift</code> (0x38)<br /><code>kVK_RightShift</code> (0x3C)
      </td>
      <td>
        <code>GDK_KEY_Shift_L</code> (0xFFE1)<br /><code>GDK_KEY_Shift_R</code> (0xFFE2)<br /><code>Qt::Key_Shift</code> (0x01000020)
      </td>
      <td>
        <code>KEYCODE_SHIFT_LEFT</code> (59)<br /><code>KEYCODE_SHIFT_RIGHT</code> (60)
      </td>
    </tr>
    <tr>
      <td><code>"Super"</code> [3]</td>
      <td>Die <kbd>Super</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Super_L</code> (0xFFEB)<br /><code>GDK_KEY_Super_R</code> (0xFFEC)<br /><code>Qt::Key_Super_L</code> (0x01000053)<br /><code>Qt::Key_Super_R</code> (0x01000054)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Symbol"</code></td>
      <td>
        Die <kbd>Symbol</kbd>-Modifikatortaste (zu finden auf bestimmten virtuellen Tastaturen).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_SYM</code> (63) [2]</td>
    </tr>
    <tr>
      <td><code>"SymbolLock"</code></td>
      <td>Die <kbd>Symbol Lock</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] In Firefox wird die <kbd>Windows</kbd>-Taste als `"OS"` und nicht als `"Meta"` gemeldet. Dies wird in Firefox gemäß [Firefox Bug 1232918](https://bugzil.la/1232918) geändert. Bis das behoben ist, geben Firefox folgende Tasten als `"OS"` zurück: `VK_LWIN` (0x5B) und `VK_RWIN` (0x5C) auf Windows sowie `GDK_KEY_Super_L` (0xFFEB), `GDK_KEY_Super_R` (0xFFEC), `GDK_KEY_Hyper_L` (0xFFED) und `GDK_KEY_Hyper_R` (0xFFEE) auf Linux.

\[2] Firefox fügte erst ab Firefox 37 Unterstützung für die <kbd>Symbol</kbd>-Taste hinzu.

\[3] Firefox generiert den Tastencode `"OS"` für die <kbd>Super</kbd>- und <kbd>Hyper</kbd>-Tasten, anstatt `"Super"` und `"Hyper"`.

\[4] Chrome 67 und Firefox 63 interpretieren nun korrekt die rechte <kbd>Alt</kbd>-Taste für Tastaturlayouts, die diese Taste <kbd>AltGr</kbd> zuordnen. Siehe Firefox Bug [Firefox Bug 900750](https://bugzil.la/900750) und [Chrome Bug 25503](https://crbug.com/25503) für weitere Details.

## Leerzeichentasten

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
      <td><code>"Enter"</code></td>
      <td>
        Die <kbd>Enter</kbd>- oder <kbd>↵</kbd>-Taste (manchmal als <kbd>Return</kbd> bezeichnet).
      </td>
      <td><code>VK_RETURN</code> (0x0D)</td>
      <td>
        <code>kVK_Return</code> (0x24)<br /><code>kVK_ANSI_KeypadEnter</code> (0x4C)<br /><code>kVK_Powerbook_KeypadEnter</code> (0x34)
      </td>
      <td>
        <code>GDK_KEY_Return</code> (0xFF0D)<br /><code>GDK_KEY_KP_Enter</code> (0xFF8D)<br /><code>GDK_KEY_ISO_Enter</code> (0xFE34)<br /><code>GDK_KEY_3270_Enter</code> (0xFD1E)<br /><code>Qt::Key_Return</code> (0x01000004)<br /><code>Qt::Key_Enter</code> (0x01000005)
      </td>
      <td>
        <code>KEYCODE_ENTER</code> (66)<br /><code>KEYCODE_NUMPAD_ENTER</code> (160)<br /><code>KEYCODE_DPAD_CENTER</code> (23)
      </td>
    </tr>
    <tr>
      <td><code>"Tab"</code></td>
      <td>Die Horizontale Tab-Taste, <kbd>Tab</kbd>.</td>
      <td><code>VK_TAB</code> (0x09)</td>
      <td><code>kVK_Tab</code> (0x30)</td>
      <td>
        <code>GDK_KEY_Tab</code> (0xFF09)<br /><code>GDK_KEY_KP_Tab</code> (0xFF89)<br /><code>GDK_KEY_ISO_Left_Tab</code> (0xFE20)<br /><code>Qt::Key_Tab</code> (0x01000001)
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
          <code>GDK_KEY_space</code> (0x20)<br /><code>GDK_KEY_KP_Space</code> (0xFF80)<br /><code>Qt::Key_Space</code> (0x20)
        </p>
      </td>
      <td><code>KEYCODE_SPACE</code> (62)</td>
    </tr>
  </tbody>
</table>

\[1] Ältere Browser können `"Spacebar"` anstelle von `" "` für die <kbd>Space Bar</kbd> zurückgeben. Firefox tat dies bis Version 37.

## Navigationstasten

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
      <td><code>"ArrowDown"</code> [1]</td>
      <td>Die Abwärtspfeiltaste.</td>
      <td><code>VK_DOWN</code> (0x28)</td>
      <td><code>kVK_DownArrow</code> (0x7D)</td>
      <td>
        <code>GDK_KEY_Down</code> (0xFF54)<br /><code>GDK_KEY_KP_Down</code> (0xFF99)<br /><code>Qt::Key_Down</code> (0x01000015)
      </td>
      <td><code>KEYCODE_DPAD_DOWN</code> (20)</td>
    </tr>
    <tr>
      <td><code>"ArrowLeft"</code> [1]</td>
      <td>Die Linkspfeiltaste.</td>
      <td><code>VK_LEFT</code> (0x25)</td>
      <td><code>kVK_LeftArrow</code> (0x7B)</td>
      <td>
        <code>GDK_KEY_Left</code> (0xFF51)<br /><code>GDK_KEY_KP_Left</code> (0xFF96)<br /><code>Qt::Key_Left</code> (0x01000012)
      </td>
      <td><code>KEYCODE_DPAD_LEFT</code> (21)</td>
    </tr>
    <tr>
      <td><code>"ArrowRight"</code> [1]</td>
      <td>Die Rechtspfeiltaste.</td>
      <td><code>VK_RIGHT</code> (0x27)</td>
      <td><code>kVK_RightArrow</code> (0x7C)</td>
      <td>
        <code>GDK_KEY_Right</code> (0xFF53)<br /><code>GDK_KEY_KP_Right</code> (0xFF98)<br /><code>Qt::Key_Right</code> (0x01000014)
      </td>
      <td><code>KEYCODE_DPAD_RIGHT</code> (22)</td>
    </tr>
    <tr>
      <td><code>"ArrowUp"</code> [1]</td>
      <td>Die Aufwärtspfeiltaste.</td>
      <td><code>VK_UP</code> (0x26)</td>
      <td><code>kVK_UpArrow</code> (0x7E)</td>
      <td>
        <code>GDK_KEY_Up</code> (0xFF52)<br /><code>GDK_KEY_KP_Up</code> (0xFF97)<br /><code>Qt::Key_Up</code> (0x01000013)
      </td>
      <td><code>KEYCODE_DPAD_UP</code> (19)</td>
    </tr>
    <tr>
      <td><code>"End"</code></td>
      <td>Die <kbd>End</kbd>-Taste. Bewegt sich zum Ende des Inhalts.</td>
      <td><code>VK_END</code> (0x23)</td>
      <td><code>kVK_End</code> (0x77)</td>
      <td>
        <code>GDK_KEY_End</code> (0xFF57)<br /><code>GDK_KEY_KP_End</code> (0xFF9C)<br /><code>Qt::Key_End</code> (0x01000011)
      </td>
      <td><code>KEYCODE_MOVE_END</code> (123)</td>
    </tr>
    <tr>
      <td><code>"Home"</code></td>
      <td>Die <kbd>Home</kbd>-Taste. Bewegt sich zum Anfang des Inhalts.</td>
      <td><code>VK_HOME</code> (0x24)</td>
      <td><code>kVK_Home</code> (0x73)</td>
      <td>
        <code>GDK_KEY_Home</code> (0xFF50)<br /><code>GDK_KEY_KP_Home</code> (0xFF95)<br /><code>Qt::Key_Home</code> (0x01000010)
      </td>
      <td><code>KEYCODE_MOVE_HOME</code> (122)</td>
    </tr>
    <tr>
      <td><code>"PageDown"</code></td>
      <td>
        Die <kbd>Page Down</kbd>- (oder <kbd>PgDn</kbd>)-Taste. Scrollt nach unten oder zeigt die nächste Seite des Inhalts an.
      </td>
      <td><code>VK_NEXT</code> (0x22)</td>
      <td><code>kVK_PageDown</code> (0x79)</td>
      <td>
        <code>GDK_KEY_Page_Down</code> (0xFF56)<br /><code>GDK_KEY_KP_Page_Down</code> (0xFF9B)<br /><code>Qt::Key_PageDown</code> (0x01000017)
      </td>
      <td><code>KEYCODE_PAGE_DOWN</code> (93)</td>
    </tr>
    <tr>
      <td><code>"PageUp"</code></td>
      <td>
        Die <kbd>Page Up</kbd>- (oder <kbd>PgUp</kbd>)-Taste. Scrollt nach oben oder zeigt die vorherige Seite des Inhalts an.
      </td>
      <td><code>VK_PRIOR</code> (0x21)</td>
      <td><code>kVK_PageUp</code> (0x74)</td>
      <td>
        <code>GDK_KEY_Page_Up</code> (0xFF55)<br /><code>GDK_KEY_KP_Page_Up</code> (0xFF9A)<br /><code>Qt::Key_PageUp</code> (0x01000016)
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
      <td><code>"Backspace"</code></td>
      <td>
        Die <kbd>Backspace</kbd>-Taste. Diese Taste ist auf Mac-Tastaturen als <kbd>Delete</kbd> beschriftet.
      </td>
      <td><code>VK_BACK</code> (0x08)</td>
      <td><code>kVK_Delete</code> (0x33)</td>
      <td>
        <code>GDK_KEY_BackSpace</code> (0xFF08)<br /><code>Qt::Key_Backspace</code> (0x01000003)
      </td>
      <td><code>KEYCODE_DEL</code> (67)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>Die <kbd>Clear</kbd>-Taste. Entfernt die derzeit ausgewählte Eingabe.</td>
      <td>
        <code>VK_CLEAR</code> (0x0C)<br /><code>VK_OEM_CLEAR</code> (0xFE)
      </td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code> (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Copy"</code></td>
      <td>Die <kbd>Copy</kbd>-Taste (auf bestimmten erweiterten Tastaturen).</td>
      <td><code>APPCOMMAND_COPY</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Copy</code> (0x1008FF57)<br /><code>Qt::Key_Copy</code> (0x010000CF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CrSel"</code> [3]</td>
      <td>Die Cursor-Auswahltaste, <kbd>CrSel</kbd>.</td>
      <td><code>VK_CRSEL</code> (0xF7)</td>
      <td></td>
      <td><code>GDK_KEY_3270_CursorSelect</code> (0xFD1C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cut"</code></td>
      <td>Die <kbd>Cut</kbd>-Taste (auf bestimmten erweiterten Tastaturen).</td>
      <td><code>APPCOMMAND_CUT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Cut</code> (0x1008FF58)<br /><code>Qt::Key_Cut</code> (0x010000D0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Delete"</code> [2]</td>
      <td>Die Löschentaste, <kbd>Del</kbd>.</td>
      <td><code>VK_DELETE</code> (0x2E)</td>
      <td><code>kVK_ForwardDelete</code> (0x75) [1]</td>
      <td>
        <code>GDK_KEY_Delete</code> (0xFFFF)<br /><code>GDK_KEY_KP_Delete</code> (0xFF9F)<br /><code>Qt::Key_Delete</code> (0x01000007)
      </td>
      <td><code>KEYCODE_FORWARD_DEL</code> (112)</td>
    </tr>
    <tr>
      <td><code>"EraseEof"</code></td>
      <td>
        Löschen bis zum Ende des Feldes. Löscht alle Zeichen von der aktuellen Cursorposition bis zum Ende des aktuellen Feldes.
      </td>
      <td><code>VK_EREOF</code> (0xF9)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ExSel"</code> [4]</td>
      <td>Die <kbd>ExSel</kbd>- (Erweiterte Auswahl)-Taste.</td>
      <td><code>VK_EXSEL</code> (0xF8)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Insert"</code></td>
      <td>
        Die Einfügetaste, <kbd>Ins</kbd>. Schaltet zwischen Einfügen und Überschreiben von Text um.
      </td>
      <td><code>VK_INSERT</code> (0x2D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Insert</code> (0xFF63)<br /><code>GDK_KEY_KP_Insert</code> (0xFF9E)<br /><code>Qt::Key_Insert</code> (0x01000006)
      </td>
      <td><code>KEYCODE_INSERT</code> (124)</td>
    </tr>
    <tr>
      <td><code>"Paste"</code></td>
      <td>Einfügen aus der Zwischenablage.</td>
      <td><code>APPCOMMAND_PASTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Paste</code> (0x1008FF6D)<br /><code>Qt::Key_Paste</code> (0x010000E2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Redo"</code></td>
      <td>Die letzte Aktion wiederholen.</td>
      <td><code>APPCOMMAND_REDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Undo"</code></td>
      <td>Die letzte Aktion rückgängig machen.</td>
      <td><code>APPCOMMAND_UNDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Undo</code> (0xFF65)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Bei Tastaturen ohne dedizierte <kbd>Del</kbd>-Taste generiert der Mac den Wert `"Delete"`, wenn <kbd>Fn</kbd> in Verbindung mit <kbd>Delete</kbd> (was auf anderen Plattformen <kbd>Backspace</kbd> ist) gedrückt wird.

\[2] Firefox 36 und früher verwendet `"Del"` statt `"Delete"` für die <kbd>Del</kbd>-Taste.

\[3] Firefox 36 und frühere Versionen erzeugen den Wert `"Crsel"` anstelle von `"CrSel"`, wenn die <kbd>CrSel</kbd>-Taste gedrückt wird.

\[4] Firefox 36 und frühere Versionen erzeugen den Wert `"Exsel"` statt `"ExSel"`, wenn die <kbd>ExSel</kbd>-Taste gedrückt wird.

## UI-Tasten

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
      <td><code>"Accept"</code></td>
      <td>
        Die <kbd>Accept</kbd>-, <kbd>Commit</kbd>- oder <kbd>OK</kbd>-Taste oder -Taste. Akzeptiert die derzeit ausgewählte Option oder Eingabemethoden-Sequenzkonvertierung.
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td>Die <kbd>Again</kbd>-Taste. Wiederholt oder wiederholt eine vorherige Aktion.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Attn"</code> [4]</td>
      <td>Die <kbd>Attn</kbd>- (Attention)-Taste.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td><code>GDK_KEY_3270_Attn</code> (0xFD0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cancel"</code> [1]</td>
      <td>Die <kbd>Cancel</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Cancel</code> (0xFF69)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ContextMenu"</code> [3]</td>
      <td>
        Zeigt das Kontextmenü an. Typischerweise zwischen der <kbd>Windows</kbd>- (oder <kbd>OS</kbd>)-Taste und der <kbd>Control</kbd>-Taste auf der rechten Seite der Tastatur zu finden.
      </td>
      <td><code>VK_APPS</code> (0x5D)</td>
      <td><code>kVK_PC_ContextMenu</code> (0x6E)</td>
      <td>
        <code>GDK_KEY_Menu</code> (0xFF67)<br /><code>Qt::Key_Menu</code> (0x01000055)
      </td>
      <td><code>KEYCODE_MENU</code> (82)</td>
    </tr>
    <tr>
      <td><code>"Escape"</code> [2]</td>
      <td>
        Die <kbd>Esc</kbd>- (Escape)-Taste. Typischerweise als Ausstieg, Abbruch oder "diese Operation abbrechen"-Taste verwendet. Historisch gesehen wurde das Escape-Zeichen verwendet, um den Beginn einer speziellen Steuersequenz von Zeichen, einer sogenannten "Escape-Sequenz", zu signalisieren.
      </td>
      <td><code>VK_ESCAPE</code> (0x1B)</td>
      <td><code>kVK_Escape</code> (0x35)</td>
      <td>
        <code>GDK_KEY_Escape</code> (0xFF1B)<br /><code>Qt::Key_Escape</code> (0x01000000)
      </td>
      <td><code>KEYCODE_ESCAPE</code> (111)</td>
    </tr>
    <tr>
      <td><code>"Execute"</code></td>
      <td>Die <kbd>Execute</kbd>-Taste.</td>
      <td><code>VK_EXECUTE</code> (0x2B)</td>
      <td></td>
      <td><code>Qt::Key_Execute</code> (0x01020003)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Find"</code></td>
      <td>
        Die <kbd>Find</kbd>-Taste. Öffnet eine Schnittstelle (typischerweise ein Dialogfeld) zur Durchführung einer Such-/Suchoperation.
      </td>
      <td><code>APPCOMMAND_FIND</code></td>
      <td></td>
      <td><code>GDK_KEY_Find</code> (0xFF68)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Finish"</code> [5]</td>
      <td>Die <kbd>Finish</kbd>-Taste.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Help"</code></td>
      <td>
        Die <kbd>Help</kbd>-Taste. Öffnet oder schaltet die Anzeige von Hilfsinformationen um.
      </td>
      <td><code>VK_HELP</code> (0x2F)<br /><code>APPCOMMAND_HELP</code></td>
      <td><code>kVK_Help</code> (0x72)</td>
      <td>
        <code>GDK_KEY_Help</code> (0xFF6A)<br /><code>Qt::Key_Help</code> (0x01000058)
      </td>
      <td><code>KEYCODE_HELP</code> (259)</td>
    </tr>
    <tr>
      <td><code>"Pause"</code></td>
      <td>
        Die <kbd>Pause</kbd>-Taste. Unterbricht die aktuelle Anwendung oder den aktuellen Zustand, falls zutreffend.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies sollte nicht mit dem <code>"MediaPause"</code>-Tastencode verwechselt werden, der für Mediencontroller verwendet wird, anstatt für die Steuerung von Anwendungen und Prozessen.
          </p>
        </div>
      </td>
      <td><code>VK_PAUSE</code> (0x13)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Pause</code> (0xFF13)<br /><code>GDK_KEY_Break</code> (0xFF6B)<br /><code>Qt::Key_Pause</code> (0x01000008)
      </td>
      <td><code>KEYCODE_BREAK</code> (121)</td>
    </tr>
    <tr>
      <td><code>"Play"</code></td>
      <td>
        Die <kbd>Play</kbd>-Taste. Setzt eine zuvor pausierte Anwendung, falls zutreffend, fort.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Dies sollte nicht mit dem <code>"MediaPlay"</code>-Tastencode verwechselt werden, der für Mediencontroller verwendet wird, anstatt für die Steuerung von Anwendungen und Prozessen.
          </p>
        </div>
      </td>
      <td><code>VK_PLAY</code> (0xFA)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_Play</code> (0xFD16)<br /><code>Qt::Key_Play</code> (0x01020005)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Props"</code></td>
      <td>Die <kbd>Props</kbd>- (Properties)-Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Select"</code></td>
      <td>Die <kbd>Select</kbd>-Taste.</td>
      <td><code>VK_SELECT</code> (0x29)</td>
      <td></td>
      <td><code>GDK_KEY_Select</code> (0xFF60)</td>
      <td><code>KEYCODE_BUTTON_SELECT</code> (109)</td>
    </tr>
    <tr>
      <td><code>"ZoomIn"</code> [6]</td>
      <td>Die <kbd>ZoomIn</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomIn</code> (0x1008FF8B)<br /><code>Qt::Key_ZoomIn</code> (0x010000F6)
      </td>
      <td><code>KEYCODE_ZOOM_IN</code> (168)</td>
    </tr>
    <tr>
      <td><code>"ZoomOut"</code> [6]</td>
      <td>Die <kbd>ZoomOut</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomOut</code> (0x1008FF8C)<br /><code>Qt::Key_ZoomOut</code> (0x010000F7)
      </td>
      <td><code>KEYCODE_ZOOM_OUT</code> (169)</td>
    </tr>
  </tbody>
</table>

\[1] In Google Chrome 52 gibt die <kbd>Cancel</kbd>-Taste fälschlicherweise den Tastencode `"Pause"` zurück. Dies wurde in Chrome 53 behoben. (Siehe [Chrome Bug 612749](https://crbug.com/612749) für Details.)

\[2] In Firefox 36 und früher gibt die <kbd>Esc</kbd>-Taste `"Esc"` anstelle von `"Escape"` zurück.

\[3] Firefox 36 und früher meldet `"Apps"` anstelle von `"ContextMenu"` für die Kontextmenütaste.

\[4] Die <kbd>Attn</kbd>-Taste generiert den Tastencode `"Unidentified"` auf Firefox und Google Chrome, es sei denn, das Japanische Tastaturlayout ist aktiv, in diesem Fall erzeugt sie `"KanaMode"` statt.

\[5] Die <kbd>Finish</kbd>-Taste generiert den Tastencode `"Unidentified"` auf Firefox, es sei denn, das Japanische Tastaturlayout ist aktiv, in diesem Fall erzeugt sie `"Katakana"` statt.

\[6] Firefox unterstützte die `"ZoomIn"`- und `"ZoomOut"`-Tasten bis Firefox 37 nicht.

## Gerätetasten

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
      <td><code>"BrightnessDown"</code></td>
      <td>
        Die Helligkeit-Runter-Taste. Wird typischerweise verwendet, um die Helligkeit des Displays zu reduzieren.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessDown</code> (0x1008FF03)<br /><code>Qt::Key_MonBrightnessDown</code> (0x010000B3)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_DOWN</code> (220)</td>
    </tr>
    <tr>
      <td><code>"BrightnessUp"</code></td>
      <td>
        Die Helligkeit-Hoch-Taste. Erhöht typischerweise die Helligkeit des Displays.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessUp</code> (0x1008FF02)<br /><code>Qt::Key_MonBrightnessUp</code> (0x010000B2)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_UP</code> (221)</td>
    </tr>
    <tr>
      <td><code>"Eject"</code></td>
      <td>
        Die <kbd>Eject</kbd>-Taste. Wirft wechselbare Medien aus (oder öffnet und schließt das Fach eines optischen Speichermediums).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Eject</code> (0x1008FF2C)<br /><code>Qt::Key_Eject</code> (0x010000B9)
      </td>
      <td><code>KEYCODE_MEDIA_EJECT</code> (129)</td>
    </tr>
    <tr>
      <td><code>"LogOff"</code> [2]</td>
      <td>Die <kbd>LogOff</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LogOff</code> (0x1008FF61)<br /><code>Qt::Key_LogOff</code> (0x010000D9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Power"</code></td>
      <td>
        Die <kbd>Power</kbd>-Taste oder -Taste zum Ein- und Ausschalten.
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Nicht alle Systeme leiten diese Taste an den Benutzeragenten weiter.
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
        Die <kbd>PowerOff</kbd>- oder <kbd>PowerDown</kbd>-Taste. Schaltet das System aus.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PowerDown</code> (0x1008FF21)<br /><code>GDK_KEY_PowerOff</code> (0x1008FF2A)<br /><code>Qt::Key_PowerDown</code> (0x0100010B)<br /><code>Qt::Key_PowerOff</code> (0x010000B7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PrintScreen"</code></td>
      <td>
        Die <kbd>PrintScreen</kbd>- oder <kbd>PrtScr</kbd>-Taste. Manchmal <kbd>SnapShot</kbd>. Erfasst den Bildschirm und druckt ihn oder speichert ihn auf der Festplatte.
      </td>
      <td><code>VK_SNAPSHOT</code> (0x2C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_PrintScreen</code> (0xFD1D)<br /><code>GDK_KEY_Print</code> (0xFF61)<br /><code>GDK_KEY_Sys_Req</code> (0xFF15)<br /><code>Qt::Key_Print</code> (0x01000009)<br /><code>Qt::Key_SysReq</code> (0x0100000A)
      </td>
      <td><code>KEYCODE_SYSRQ</code> (120)</td>
    </tr>
    <tr>
      <td><code>"Hibernate"</code> [2]</td>
      <td>
        Die <kbd>Hibernate</kbd>-Taste. Diese speichert den Zustand des Computers auf der Festplatte und schaltet ihn dann aus; der Computer kann in seinen vorherigen Zustand zurückversetzt werden, indem die gespeicherten Statusinformationen wiederhergestellt werden.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hibernate</code> (0x1008FFA8)<br /><code>Qt::Key_Hibernate</code> (0x01000108)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Standby"</code> [1]</td>
      <td>
        Die <kbd>Standby</kbd>-Taste. (Auch bekannt als <kbd>Suspend</kbd> oder <kbd>Sleep</kbd>.) Diese schaltet das Display aus und bringt den Computer in einen Stromsparmodus, ohne ihn vollständig auszuschalten.
      </td>
      <td><code>VK_SLEEP</code> (0x5F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Standby</code> (0x1008FF10)<br /><code>GDK_KEY_Suspend</code> (0x1008FFA7)<br /><code>GDK_KEY_Sleep</code> (0x1008FF2F)<br /><code>Qt::Key_Standby</code> (0x01000093)<br /><code>Qt::Key_Suspend</code> (0x0100010C)<br /><code>Qt::Key_Sleep</code> (0x01020004)
      </td>
      <td><code>KEYCODE_SLEEP</code> (223)</td>
    </tr>
    <tr>
      <td><code>"WakeUp"</code> [2]</td>
      <td>
        Die <kbd>WakeUp</kbd>-Taste. Wird verwendet, um den Computer aus den Modi Ruhezustand oder Standby aufzuwecken.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WakeUp</code> (0x1008FF2B)<br /><code>Qt::Key_WakeUp</code> (0x010000B8)
      </td>
      <td><code>KEYCODE_WAKEUP</code> (224)</td>
    </tr>
  </tbody>
</table>

\[1] Die <kbd>Standby</kbd>-Taste wird von Firefox 36 und früher nicht unterstützt, daher wird sie als `"Unidentified"` gemeldet.

\[2] Vor Firefox 37 erzeugte diese Taste den Wert `"Unidentified"`.

## IME und Kompositionstasten

Tasten, die bei der Verwendung eines {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) zur Texteingabe verwendet werden, die nicht direkt durch einfaches Drücken von Tasten eingegeben werden können, wie z. B. Texte in Sprachen, die mehr Grapheme haben als Eingabetasten auf der Tastatur vorhanden sind. Häufige Beispiele sind Chinesisch, Japanisch, Koreanisch und Hindi.

Einige Tasten sind in mehreren Sprachen üblich, während andere nur auf Tastaturen für spezielle Sprachen existieren. Außerdem haben nicht alle Tastaturen alle diese Tasten.

### Gemeinsame IME-Tasten

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
      <td><code>"AllCandidates"</code></td>
      <td>
        Die <kbd>All Candidates</kbd> Taste, die den Modus mit mehreren Kandidaten startet, in dem mehrere Kandidaten für die laufende Eingabe angezeigt werden.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MultipleCandidate</code> (0xFF3D)<br /><code
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
        Die <kbd>Code Input</kbd> Taste, die den Code-Input-Modus aktiviert, der es dem Benutzer ermöglicht, Zeichen durch Eingabe ihrer Codepunkte (normalerweise ihrer Unicode-Zeichennummern) einzugeben.
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
        Die <kbd>Convert</kbd> Taste, die dem IME anweist, die aktuelle Eingabesequenz in das resultierende Zeichen umzuwandeln.
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
          Eine tote "Kombinierungs"-Taste; das heißt, eine Taste, die in Kombination mit anderen Tasten verwendet wird, um Akzentuierte und andere modifizierte Zeichen zu generieren. Wenn sie allein gedrückt wird, erzeugt sie kein Zeichen.
        </p>
        <p>
          Wenn Sie feststellen möchten, welche spezifische tote Taste gedrückt wurde (in Fällen, in denen mehr als eine vorhanden ist), können Sie dies tun, indem Sie die mit dem [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) verbundene [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event) Ereignis [`data`](/de/docs/Web/API/CompositionEvent/data) Eigenschaft überprüfen.
        </p>
      </td>
      <td></td>
      <td></td>
      <td>Siehe <a href="#dead_keycodes_for_linux">Tote Tasten für Linux</a> unten</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        Die <kbd>Final</kbd> (Final Mode) Taste wird auf einigen asiatischen Tastaturen verwendet, um den Finalmodus beim Verwenden von IMEs einzuschalten.
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
          >ISO/IEC 9995-Tastatur</a
        >. Jede Taste kann mehrere Zeichengruppen haben, jede in ihrer eigenen Spalte. Durch Drücken dieser Taste wird das Gerät angewiesen, Tastenanschläge so zu interpretieren, als kämen sie von der ersten Spalte bei nachfolgenden Tastenanschlägen.
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
          >ISO/IEC 9995-Tastatur</a
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
          >ISO/IEC 9995-Tastatur</a
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
          >ISO/IEC 9995-Tastatur</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Prev_Group</code> (0xFE0A)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ModeChange"</code> [5]</td>
      <td>Die Moduswechsel-Taste. Schaltet oder wechselt zwischen Eingabemodi der IMEs.</td>
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
        Die Nächster Kandidat Funktionstaste. Wählt den nächsten möglichen Treffer für die laufende Eingabe aus.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        Die <kbd>NonConvert</kbd> ("Nicht umwandeln") Taste. Diese bestätigt die aktuelle Eingabemethode, ohne eine Umwandlung beim Verwenden eines IME durchzuführen.
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
        Die Vorheriger Kandidat Taste. Wählt den vorherigen möglichen Treffer für die laufende Eingabe aus.
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
        Die <kbd>Process</kbd> Taste. Weist das IME an, die Umwandlung durchzuführen.
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        Die Einzeltaste Kandidat. Aktiviert den Einzelkandidatenmodus (im Gegensatz zum Modus mit mehreren Kandidaten); in diesem Modus wird jeweils nur ein Kandidat angezeigt.
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

\[2] Die <kbd>NonConvert</kbd> Taste wird in Firefox Versionen 36 und früher als `"Nonconvert"` statt der korrekten `"NonConvert"` gemeldet.

\[3] Die <kbd>Process</kbd> Taste liefert derzeit in Firefox `"Unidentified"`. Google Chrome gibt den Wert der Taste aus, als ob IME nicht verwendet würde.

\[4] Vor Firefox 37 waren diese Tasten als `"Unidentified"` bekannt.

\[5] Firefox erzeugt den Tastenwert `"AltGraph"` statt `"ModeChange"`.

### Nur koreanische Tastaturen

Diese Tasten sind nur auf koreanischen Tastaturen verfügbar. Es gibt andere Plattform-abhängige Tasten für koreanische Tastaturen, aber diese sind die gebräuchlichsten und werden von der UI-Ereignisse-Spezifikation identifiziert.

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
      <td><code>"HangulMode"</code></td>
      <td>
        Die <kbd>Hangul</kbd> (koreanisches Zeichensatz) Modustaste, die zwischen Hangul- und Englischeingabemodi umschaltet.
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
        Wählt den Hanja-Modus aus, um Hangul-Zeichen in die spezifischeren Hanja-Zeichen umzuwandeln.
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
        Wählt den Junja-Modus aus, in dem Koreanisch mit einbyteigen lateinischen Zeichen dargestellt wird.
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

\[1] `VK_HANGUL` und `VK_KANA` haben denselben numerischen Tastenwert unter Windows, ebenso wie `VK_HANJA` und `VK_KANJI`.

### Nur japanische Tastaturen

Diese Tasten sind nur auf japanischen Tastaturen verfügbar.

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
      <td><code>"Eisu"</code> [1]</td>
      <td>
        Die <kbd>Eisu</kbd> Taste. Der Zweck dieser Taste wird vom IME definiert, kann jedoch verwendet werden, um das IME zu schließen.
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
      <td>Die <kbd>Hankaku</kbd> (Halbbreitzeichen) Taste.</td>
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
      <td>Die <kbd>Hiragana</kbd> Taste; wählt den Kana-Zeichenmodus aus.</td>
      <td><code>VK_OEM_COPY</code> (0xF2)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana</code> (0xFF25)<br /><code
          >Qt::Key_Hiragana</code
        >
        (0x01001125)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HiraganaKatakana"</code> [6]</td>
      <td>Wechselt zwischen den Schriftsystemen Hiragana und Katakana.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana_Katakana</code> (0xFF27)<br /><code
          >Qt::Key_Hiragana_Katakana</code
        >
        (0x01001127)
      </td>
      <td><code>KEYCODE_KATAKANA_HIRAGANA</code> (215)</td>
    </tr>
    <tr>
      <td><code>"KanaMode"</code></td>
      <td>Die <kbd>Kana Mode</kbd> (Kana Lock) Taste.</td>
      <td><code>VK_KANA</code> (0x15) [2]<br /><code>VK_ATTN</code> (0xF6)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Kana_Lock</code> (0xFF2D)<br /><code
          >GDK_KEY_Kana_Shift</code
        >
        (0xFF2E)<br /><code>Qt::Key_Kana_Lock</code> (0x0100112D)<br /><code
          >Qt::Key_Kana_Shift</code
        >
        (0x0100112E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"KanjiMode"</code></td>
      <td>
        Die <kbd>Kanji Mode</kbd> Taste. Ermöglicht die Eingabe von japanischem Text mit den ideografischen Zeichen chinesischen Ursprungs.
      </td>
      <td><code>VK_KANJI</code> [2]</td>
      <td><code>kVK_JIS_Kana</code> (0x68)</td>
      <td>
        <code>GDK_KEY_Kanji</code> (0xFF21)<br /><code>Qt::Key_Kanji</code>
        (0x01001121)
      </td>
      <td><code>KEYCODE_KANA</code> (218)</td>
    </tr>
    <tr>
      <td><code>"Katakana"</code></td>
      <td>Die <kbd>Katakana</kbd> Taste.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Katakana</code> (0xFF26)<br /><code
          >Qt::Key_Katakana</code
        >
        (0x01001126)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Romaji"</code> [5]</td>
      <td>Die <kbd>Romaji</kbd> Taste; wählt die römische Zeichensatz aus.</td>
      <td><code>VK_OEM_BACKTAB</code> (0xF5)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Romaji</code> (0xFF24)<br /><code>Qt::Key_Romaji</code>
        (0x01001124)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Zenkaku"</code> [4]</td>
      <td>Die <kbd>Zenkaku</kbd> (Vollbreitzeichen) Taste.</td>
      <td><code>VK_OEM_ENLW</code> (0xF4)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku</code> (0xFF28)<br /><code>Qt::Key_Zenkaku</code>
        (0x01001128)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZenkakuHanaku"</code> [6]</td>
      <td>
        Die <kbd>Zenkaku/Hankaku</kbd> (Vollbreit/Halbbreit) Umschalttaste.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku_Hankaku</code> (0xFF2A)<br /><code
          >Qt::Zenkaku_Hankaku</code
        >
        (0x0100112A)
      </td>
      <td>
        <p><code>KEYCODE_ZENKAKU_HANKAKU</code> (211)</p>
      </td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 wurde die <kbd>Eisu</kbd> Taste fälschlicherweise auf `"RomanCharacters"` abgebildet.

\[2] `VK_HANGUL` und `VK_KANA` haben denselben numerischen Tastenwert unter Windows, ebenso wie `VK_HANJA` und `VK_KANJI`.

\[3] Vor Firefox 37 generierte die <kbd>Hankaku</kbd> (Halbbreit) Taste den Tastenwert `"HalfWidth"` auf Firefox.

\[4] Firefox 36 und frühere identifizieren diese Taste auf japanischen Tastatur-Layouts als `"FullWidth"` und auf allen anderen Tastatur-Layouts als `"Unidentified"`. Firefox 37 und später sowie alle Versionen von Google Chrome geben korrekt `"Zenkaku"` zurück.

\[5] Firefox 36 und frühere identifizieren die <kbd>Romaji</kbd> Taste auf japanischen Tastaturen als `"RomanCharacters"` und für andere Tastaturen als `"Unidentified"`. Dies wird in Firefox 37 und später auf `"Romaji"` korrigiert.

\[6] Diese Taste wird vor Firefox 37 als `"Unidentified"` gemeldet.

### Tote Tasten-Codes für Linux

Linux erzeugt Akzentzeichen mit speziellen **toten Tasten**. _Tote Tasten_ sind Tasten, die in Kombination mit Zeichentasten gedrückt werden, um akzentuierte Formen dieser Zeichen zu erzeugen. Sie können feststellen, welche spezifische tote Taste verwendet wurde (falls mehr als eine vorhanden ist), indem Sie die [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) verbundene [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event) Ereignis [`data`](/de/docs/Web/API/CompositionEvent/data) Eigenschaft überprüfen.

Eine Tabelle der toten Tasten und der Zeichen, mit denen sie zur Erzeugung akzentuierter oder anderweitig besonderer Zeichen verwendet werden, finden Sie unter Linux mit GTK.

Der Wert von [`data`](/de/docs/Web/API/CompositionEvent/data) wird einer der folgenden sein:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        <strong><code>CompositionEvent.data</code></strong> Wert
      </th>
      <th scope="col">Symbol</th>
      <th scope="col">Kommentare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>GDK_KEY_dead_grave</code> (0xFE50)<br /><code
          >Qt::Key_Dead_Grave</code
        >
        (0x01001250)
      </td>
      <td>`</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_acute</code> (0xFE51)<br /><code
          >Qt::Key_Dead_Acute</code
        >
        (0x01001251)
      </td>
      <td>´</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_circumflex</code> (0xFE52)<br /><code
          >Qt::Key_Dead_Circumflex</code
        >
        (0x01001252)
      </td>
      <td>ˆ</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_tilde</code> (0xFE53)<br /><code
          >Qt::Key_Dead_Tilde</code
        >
        (0x01001253)
      </td>
      <td>˜</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_perispomeni</code> (0xFE53)</td>
      <td> ͂</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_macron</code> (0xFE54)<br /><code
          >Qt::Key_Dead_Macron</code
        >
        (0x01001254)
      </td>
      <td>¯</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_breve</code> (0xFE55)<br /><code
          >Qt::Key_Dead_Breve</code
        >
        (0x01001255)
      </td>
      <td>˘</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovedot</code> (0xFE56)<br /><code
          >Qt::Key_Dead_Abovedot</code
        >
        (0x01001256)
      </td>
      <td>˙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_diaeresis</code> (0xFE57)<br /><code
          >Qt::Key_Dead_Diaeresis</code
        >
        (0x01001257)
      </td>
      <td>¨</td>
      <td>Auch als Umlaut bekannt.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovering</code> (0xFE58)<br /><code
          >Qt::Key_Dead_Abovering</code
        >
        (0x01001258)
      </td>
      <td>˚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_doubleacute</code> (0xFE59)<br /><code
          >Qt::Key_Dead_Doubleacute</code
        >
        (0x01001259)
      </td>
      <td>˝</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_caron</code> (0xFE5A)<br /><code
          >Qt::Key_Dead_Caron</code
        >
        (0x0100125A)
      </td>
      <td>ˇ</td>
      <td>Auch als Háček bekannt; wird unter anderem im Tschechischen verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_cedilla</code> (0xFE5B)<br /><code
          >Qt::Key_Dead_Cedilla</code
        >
        (0x0100125B)
      </td>
      <td>¸</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_ogonek</code> (0xFE5C)<br /><code
          >Qt::Key_Dead_Ogonek</code
        >
        (0x0100125C)
      </td>
      <td>˛</td>
      <td>Auch als Nosinė bekannt; wird im Polnischen und Alt-Irischen verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_iota</code> (0xFE5D)<br /><code
          >Qt::Key_Dead_Iota</code
        >
        (0x0100125D)
      </td>
      <td> ͅ</td>
      <td>Iota Subscript.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_voiced_sound</code> (0xFE5E)<br /><code
          >Qt::Key_Dead_Voiced_Sound</code
        >
        (0x0100125E)
      </td>
      <td>゙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_semivoiced_sound</code> (0xFE5F)<br /><code
          >Qt::Key_Dead_Semivoiced_Sound</code
        >
        (0x0100125F)
      </td>
      <td>゚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_belowdot</code> (0xFE60)<br /><code
          >Qt::Key_Dead_Belowdot</code
        >
        (0x01001260)
      </td>
      <td>̣̣</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_hook</code> (0xFE61)<br /><code
          >Qt::Key_Dead_Hook</code
        >
        (0x01001261)
      </td>
      <td>  ̡</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_horn</code> (0xFE62)<br /><code
          >Qt::Key_Dead_Horn</code
        >
        (0x01001262)
      </td>
      <td> ̛</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_stroke</code> (0xFE63)</td>
      <td> ̶̶</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovecomma</code> (0xFE64)</td>
      <td> ̓̓</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_psili</code> (0xFE64)</td>
      <td> ᾿</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovereversedcomma</code> (0xFE65)</td>
      <td>ʽ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_dasia</code> (0xFE65)</td>
      <td>῾</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_doublegrave</code> (0xFE66)</td>
      <td> ̏</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowring</code> (0xFE67)</td>
      <td>˳</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowmacron</code> (0xFE68)</td>
      <td> ̱</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcircumflex</code> (0xFE69)</td>
      <td>ꞈ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowtilde</code> (0xFE6A)</td>
      <td>̰</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowbreve</code> (0xFE6B)</td>
      <td>̮</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowdiaeresis</code> (0xFE6C)</td>
      <td> ̤</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_invertedbreve</code> (0xFE6D)</td>
      <td>̯</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcomma</code> (0xFE6E)</td>
      <td>̦</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_currency</code> (0xFE6F)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_a</code> (0xFE80)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_A</code> (0xFE81)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_e</code> (0xFE82)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_E</code> (0xFE83)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_i</code> (0xFE84)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_I</code> (0xFE85)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_o</code> (0xFE86)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_O</code> (0xFE87)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_u</code> (0xFE88)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_U</code> (0xFE89)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_small_schwa</code> (0xFE8A)</td>
      <td>ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_capital_schwa</code> (0xFE8B)</td>
      <td>Ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_greek</code> (0xFE8C)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Funktionstasten

Während verschiedene Plattformen unterschiedliche Anzahl an allgemeine Funktionstasten unterstützen, wie zum Beispiel <kbd>F1</kbd>–<kbd>F12</kbd> (oder <kbd>F1</kbd>–<kbd>F10</kbd>, oder <kbd>F1</kbd>–<kbd>F15</kbd>, etc.), werden die ersten wenigen wie folgt spezifisch definiert.

Wenn mehr Funktionstasten verfügbar sind, setzen ihre Namen das hier gezeigte Muster fort, indem der numerische Teil jedes Tastennamens weiter erhöht wird, so dass beispielsweise `"F24"` ein gültiger Tastenwert ist.

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
      <td><code>"F1"</code></td>
      <td>Die erste allgemeine Funktionstaste, <kbd>F1</kbd>.</td>
      <td><code>VK_F1</code> (0x70)</td>
      <td><code>kVK_F1</code> (0x7A)</td>
      <td>
        <code>GDK_KEY_F1</code> (0xFFBE)<br /><code>GDK_KEY_KP_F1</code>
        (0xFF91)<br /><code>Qt::Key_F1</code> (0x01000030)
      </td>
      <td><code>KEYCODE_F1</code> (131)</td>
    </tr>
    <tr>
      <td><code>"F2"</code></td>
      <td>Die <kbd>F2</kbd> Taste.</td>
      <td><code>VK_F2</code> (0x71)</td>
      <td><code>kVK_F2</code> (0x78)</td>
      <td>
        <code>GDK_KEY_F2</code> (0xFFBF)<br /><code>GDK_KEY_KP_F2</code>
        (0xFF92)<br /><code>Qt::Key_F2</code> (0x01000031)
      </td>
      <td><code>KEYCODE_F2</code> (132)</td>
    </tr>
    <tr>
      <td><code>"F3"</code></td>
      <td>Die <kbd>F3</kbd> Taste.</td>
      <td><code>VK_F3</code> (0x72)</td>
      <td><code>kVK_F3</code> (0x63)</td>
      <td>
        <code>GDK_KEY_F3</code> (0xFFC0)<br /><code>GDK_KEY_KP_F3</code>
        (0xFF93)<br /><code>Qt::Key_F3</code> (0x01000032)
      </td>
      <td><code>KEYCODE_F3</code> (133)</td>
    </tr>
    <tr>
      <td><code>"F4"</code></td>
      <td>Die <kbd>F4</kbd> Taste.</td>
      <td><code>VK_F4</code> (0x73)</td>
      <td><code>kVK_F4</code> (0x76)</td>
      <td>
        <code>GDK_KEY_F4</code> (0xFFC1)<br /><code>GDK_KEY_KP_F4</code>
        (0xFF94)<br /><code>Qt::Key_F4</code> (0x01000033)
      </td>
      <td><code>KEYCODE_F4</code> (134)</td>
    </tr>
    <tr>
      <td><code>"F5"</code></td>
      <td>Die <kbd>F5</kbd> Taste.</td>
      <td><code>VK_F5</code> (0x74)</td>
      <td><code>kVK_F5</code> (0x60)</td>
      <td>
        <code>GDK_KEY_F5</code> (0xFFC2)<br /><code>Qt::Key_F5</code>
        (0x01000034)
      </td>
      <td><code>KEYCODE_F5</code> (135)</td>
    </tr>
    <tr>
      <td><code>"F6"</code></td>
      <td>Die <kbd>F6</kbd> Taste.</td>
      <td><code>VK_F6</code> (0x75)</td>
      <td><code>kVK_F6</code> (0x61)</td>
      <td>
        <code>GDK_KEY_F6</code> (0xFFC3)<br /><code>Qt::Key_F6</code>
        (0x01000035)
      </td>
      <td><code>KEYCODE_F6</code> (136)</td>
    </tr>
    <tr>
      <td><code>"F7"</code></td>
      <td>Die <kbd>F7</kbd> Taste.</td>
      <td><code>VK_F7</code> (0x76)</td>
      <td><code>kVK_F7</code> (0x62)</td>
      <td>
        <code>GDK_KEY_F7</code> (0xFFC4)<br /><code>Qt::Key_F7</code>
        (0x01000036)
      </td>
      <td><code>KEYCODE_F7</code> (137)</td>
    </tr>
    <tr>
      <td><code>"F8"</code></td>
      <td>Die <kbd>F8</kbd> Taste.</td>
      <td><code>VK_F8</code> (0x77)</td>
      <td><code>kVK_F8</code> (0x64)</td>
      <td>
        <code>GDK_KEY_F8</code> (0xFFC5)<br /><code>Qt::Key_F8</code>
        (0x01000037)
      </td>
      <td><code>KEYCODE_F8</code> (138)</td>
    </tr>
    <tr>
      <td><code>"F9"</code></td>
      <td>Die <kbd>F9</kbd> Taste.</td>
      <td><code>VK_F9</code> (0x78)</td>
      <td><code>kVK_F9</code> (0x65)</td>
      <td>
        <code>GDK_KEY_F9</code> (0xFFC6)<br /><code>Qt::Key_F9</code>
        (0x01000038)
      </td>
      <td><code>KEYCODE_F9</code> (139)</td>
    </tr>
    <tr>
      <td><code>"F10"</code></td>
      <td>Die <kbd>F10</kbd> Taste.</td>
      <td><code>VK_F10</code> (0x79)</td>
      <td><code>kVK_F10</code> (0x6D)</td>
      <td>
        <code>GDK_KEY_F10</code> (0xFFC7)<br /><code>Qt::Key_F10</code>
        (0x01000039)
      </td>
      <td><code>KEYCODE_F10</code> (140)</td>
    </tr>
    <tr>
      <td><code>"F11"</code></td>
      <td>Die <kbd>F11</kbd> Taste.</td>
      <td><code>VK_F11</code> (0x7A)</td>
      <td><code>kVK_F11</code> (0x67)</td>
      <td>
        <code>GDK_KEY_F11</code> (0xFFC8)<br /><code>Qt::Key_F11</code>
        (0x0100003A)
      </td>
      <td><code>KEYCODE_F11</code> (141)</td>
    </tr>
    <tr>
      <td><code>"F12"</code></td>
      <td>Die <kbd>F12</kbd> Taste.</td>
      <td><code>VK_F12</code> (0x7B)</td>
      <td><code>kVK_F12</code> (0x6F)</td>
      <td>
        <code>GDK_KEY_F12</code> (0xFFC9)<br /><code>Qt::Key_F12</code>
        (0x0100003B)
      </td>
      <td><code>KEYCODE_F12</code> (142)</td>
    </tr>
    <tr>
      <td><code>"F13"</code></td>
      <td>Die <kbd>F13</kbd> Taste.</td>
      <td><code>VK_F13</code> (0x7C)</td>
      <td><code>kVK_F13</code> (0x69)</td>
      <td>
        <code>GDK_KEY_F13</code> (0xFFCA)<br /><code>Qt::Key_F13</code>
        (0x0100003C)
      </td>
      <td><code>KEYCODE_F13</code></td>
    </tr>
    <tr>
      <td><code>"F14"</code></td>
      <td>Die <kbd>F14</kbd> Taste.</td>
      <td><code>VK_F14</code> (0x7D)</td>
      <td><code>kVK_F14</code> (0x6B)</td>
      <td>
        <code>GDK_KEY_F14</code> (0xFFCB)<br /><code>Qt::Key_F14</code>
        (0x0100003D)
      </td>
      <td><code>KEYCODE_F14</code></td>
    </tr>
    <tr>
      <td><code>"F15"</code></td>
      <td>Die <kbd>F15</kbd> Taste.</td>
      <td><code>VK_F15</code> (0x7E)</td>
      <td><code>kVK_F15</code> (0x71)</td>
      <td>
        <code>GDK_KEY_F15</code> (0xFFCC)<br /><code>Qt::Key_F15</code>
        (0x0100003E)
      </td>
      <td><code>KEYCODE_F15</code></td>
    </tr>
    <tr>
      <td><code>"F16"</code></td>
      <td>Die <kbd>F16</kbd> Taste.</td>
      <td><code>VK_F16</code> (0x7F)</td>
      <td><code>kVK_F16</code> (0x6A)</td>
      <td>
        <code>GDK_KEY_F16</code> (0xFFCD)<br /><code>Qt::Key_F16</code>
        (0x0100003F)
      </td>
      <td><code>KEYCODE_F16</code></td>
    </tr>
    <tr>
      <td><code>"F17"</code></td>
      <td>Die <kbd>F17</kbd> Taste.</td>
      <td><code>VK_F17</code> (0x80)</td>
      <td><code>kVK_F17</code> (0x40)</td>
      <td>
        <code>GDK_KEY_F17</code> (0xFFCE)<br /><code>Qt::Key_F17</code>
        (0x01000040)
      </td>
      <td><code>KEYCODE_F17</code></td>
    </tr>
    <tr>
      <td><code>"F18"</code></td>
      <td>Die <kbd>F18</kbd> Taste.</td>
      <td><code>VK_F18</code> (0x81)</td>
      <td><code>kVK_F18</code> (0x4F)</td>
      <td>
        <code>GDK_KEY_F18</code> (0xFFCF)<br /><code>Qt::Key_F18</code>
        (0x01000041)
      </td>
      <td><code>KEYCODE_F18</code></td>
    </tr>
    <tr>
      <td><code>"F19"</code></td>
      <td>Die <kbd>F19</kbd> Taste.</td>
      <td><code>VK_F19</code> (0x82)</td>
      <td><code>kVK_F19</code> (0x50)</td>
      <td>
        <code>GDK_KEY_F19</code> (0xFFD0)<br /><code>Qt::Key_F19</code>
        (0x01000042)
      </td>
      <td><code>KEYCODE_F19</code></td>
    </tr>
    <tr>
      <td><code>"F20"</code></td>
      <td>Die <kbd>F20</kbd> Taste.</td>
      <td><code>VK_F20</code> (0x83)</td>
      <td><code>kVK_F20</code> (0x5A)</td>
      <td>
        <code>GDK_KEY_F20</code> (0xFFD1)<br /><code>Qt::Key_F20</code>
        (0x01000043)
      </td>
      <td><code>KEYCODE_F20</code></td>
    </tr>
    <tr>
      <td><code>"Soft1"</code></td>
      <td>Die erste allgemeine virtuelle Funktionstaste.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context1</code> (0x01100000)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft2"</code></td>
      <td>Die zweite allgemeine virtuelle Funktionstaste.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context2</code> (0x01100001)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft3"</code></td>
      <td>Die dritte allgemeine virtuelle Funktionstaste.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context3</code> (0x01100002)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft4"</code></td>
      <td>Die vierte allgemeine virtuelle Funktionstaste.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context4</code> (0x01100003)</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Tastentelefone

Diese Tasten repräsentieren Schaltflächen, die üblicherweise auf modernen Smartphones vorhanden sind.

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
      <td><code>"AppSwitch"</code></td>
      <td>
        Präsentiert eine Liste der zuletzt verwendeten Apps, die es dem Benutzer ermöglicht, schnell Apps zu wechseln.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_APP_SWITCH</code> (181)</td>
    </tr>
    <tr>
      <td><code>"Call"</code></td>
      <td>Die <kbd>Call</kbd> Taste. Wählt die eingegebene Nummer.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Call</code> (0x01100004)</td>
      <td><code>KEYCODE_CALL</code> (5)</td>
    </tr>
    <tr>
      <td><code>"Camera"</code></td>
      <td>Die <kbd>Camera</kbd> Taste. Aktiviert die Kamera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Camera</code> (0x01100020)</td>
      <td><code>KEYCODE_CAMERA</code> (27)</td>
    </tr>
    <tr>
      <td><code>"CameraFocus"</code></td>
      <td>Die <kbd>Focus</kbd> Taste. Fokussiert die Kamera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_CameraFocus</code> (0x01100021)</td>
      <td><code>KEYCODE_FOCUS</code> (80)</td>
    </tr>
    <tr>
      <td><code>"EndCall"</code></td>
      <td>Die <kbd>End Call</kbd> oder <kbd>Hang Up</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Hangup</code> (0x01100005)</td>
      <td><code>KEYCODE_ENDCALL</code> (6)</td>
    </tr>
    <tr>
      <td><code>"GoBack"</code></td>
      <td>Die <kbd>Back</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"GoHome"</code> [1]</td>
      <td>
        Die <kbd>Home</kbd> Taste. Führt den Benutzer zum Hauptbildschirm des Telefons (normalerweise ein App-Launcher) zurück.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"HeadsetHook"</code></td>
      <td>
        Die <kbd>Headset Hook</kbd> Taste. Dies ist typischerweise tatsächlich eine Taste am Headset, die verwendet wird, um Anrufe zu beenden und Medien abzuspielen oder zu pausieren.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_ToggleCallHangup</code> (0x01100007)</td>
      <td><code>KEYCODE_HEADSETHOOK</code> (79)</td>
    </tr>
    <tr>
      <td><code>"LastNumberRedial"</code></td>
      <td>Die <kbd>Redial</kbd> Taste. Wählt die zuletzt angerufene Nummer erneut.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_LastNumberRedial</code> (0x01100009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Notification"</code></td>
      <td>Die <kbd>Notification</kbd> Taste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NOTIFICATION</code> (83)</td>
    </tr>
    <tr>
      <td><code>"MannerMode"</code></td>
      <td>
        Eine Taste, die zwischen den Benachrichtigungsmodi wechselt: lautlos, vibrieren, klingeln usw.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MANNER_MODE</code> (205)</td>
    </tr>
    <tr>
      <td><code>"VoiceDial"</code></td>
      <td>Die <kbd>Voice Dial</kbd> Taste. Startet das Sprachanwahl.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_VoiceDial</code> (0x01100008)</td>
      <td><code>KEYCODE_VOICE_ASSIST</code> (231)</td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 generierte die Home-Taste einen Tastenwert von `"Exit"`. Ab Firefox 37 erzeugt die Taste den Tastenwert `"MozHomeScreen"`.

## Multimedia-Tasten

Die Multimedia-Tasten sind zusätzliche Tasten zum Steuern von Mediengeräten, die auf einigen Tastaturen zu finden sind.

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
        Startet, setzt fort oder erhöht die Geschwindigkeit des schnellen Vorlaufs der Medien.
      </td>
      <td><code>APPCOMMAND_MEDIA_FAST_FORWARD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioForward (0x1008FF97)<br />Qt:Key_AudioForward</code>
        (0x01000102)
      </td>
      <td><code>KEYCODE_MEDIA_FAST_FORWARD</code> (90)</td>
    </tr>
    <tr>
      <td><code>"MediaPause"</code></td>
      <td>
        <p>Pausiert die aktuell wiedergegebene Medien.</p>
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
        <code>GDK_KEY_AudioPause</code> (0x1008FF31)<br /><code
          >Qt::Key_MediaPause</code
        >
        (0x1000085)
      </td>
      <td><code>KEYCODE_MEDIA_PAUSE</code> (127)</td>
    </tr>
    <tr>
      <td><code>"MediaPlay"</code></td>
      <td>
        Startet oder setzt die Wiedergabe der Medien in normaler Geschwindigkeit fort, wenn dies noch nicht geschieht. Hat sonst keine Wirkung.
      </td>
      <td><code>APPCOMMAND_MEDIA_PLAY</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioPlay</code> (0x1008FF14)</td>
      <td><code>KEYCODE_MEDIA_PLAY</code> (126)</td>
    </tr>
    <tr>
      <td><code>"MediaPlayPause"</code></td>
      <td>Umschalten zwischen Wiedergabe und Pause der aktuellen Medien.</td>
      <td>
        <code>VK_MEDIA_PLAY_PAUSE</code> (0xB3)<br /><code
          >APPCOMMAND_MEDIA_PLAY_PAUSE</code
        >
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
        <code>GDK_KEY_AudioRecord</code> (0x1008FF1C)<br /><code
          >Qt::Key_MediaRecord</code
        >
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
        <code>GDK_KEY_AudioRewind</code> (0x1008FF3E)<br /><code
          >Qt::Key_AudioRewind</code
        >
        (0x010000C5)
      </td>
      <td><code>KEYCODE_MEDIA_REWIND</code> (89)</td>
    </tr>
    <tr>
      <td><code>"MediaStop"</code></td>
      <td>
        Stoppt die aktuelle Medienaktivität (wie Wiedergabe, Aufnahme, Pause, Vorwärts- oder Rückspulen). Hat keine Wirkung, wenn die Medien bereits gestoppt sind.
      </td>
      <td>
        <code>VK_MEDIA_STOP</code> (0xB2)<br /><code
          >APPCOMMAND_MEDIA_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioStop</code> (0x1008FF15)<br /><code
          >Qt::Key_MediaStop</code
        >
        (0x01000081)
      </td>
      <td><code>KEYCODE_MEDIA_STOP</code> (86)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackNext"</code> [1]</td>
      <td>Springt zum nächsten Medien- oder Programmstück.</td>
      <td>
        <code>VK_MEDIA_NEXT_TRACK</code> (0xB0)<br /><code
          >APPCOMMAND_MEDIA_NEXTTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioNext</code> (0x1008FF17)<br /><code
          >Qt::Key_MediaNext</code
        >
        (0x01000083)
      </td>
      <td><code>KEYCODE_MEDIA_NEXT</code> (87)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackPrevious"</code> [1]</td>
      <td>Springt zum vorherigen Medien- oder Programmstück.</td>
      <td>
        <code>VK_MEDIA_PREV_TRACK</code> (0xB1)<br /><code
          >APPCOMMAND_MEDIA_PREVIOUSTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPrev</code> (0x1008FF16)<br /><code
          >Qt::Key_MediaPrevious</code
        >
        (0x01000082)
      </td>
      <td><code>KEYCODE_MEDIA_PREVIOUS</code> (88)</td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge und Firefox (36 und früher) verwenden `"MediaNextTrack"` und `"MediaPreviousTrack"` anstelle von `"MediaTrackNext"` und `"MediaTrackPrevious"`.

\[2] Vor Firefox 37 generierte Firefox den Tastencode `"FastFwd"` auf einigen Plattformen und `"Unidentified"` auf anderen anstelle von `"MediaFastForward"`.

## Audio-Steuerungstasten

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
      <td>Passt die Audio-Balance nach links an.</td>
      <td><code>VK_AUDIO_BALANCE_LEFT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBalanceRight"</code></td>
      <td>Passt die Audio-Balance nach rechts an.</td>
      <td><code>VK_AUDIO_BALANCE_RIGHT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassDown"</code></td>
      <td>Verringert den Anteil des Basses.</td>
      <td><code>APPCOMMAND_BASS_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostDown"</code></td>
      <td>
        Verringert das Bass-Boosting oder schaltet nach unten durch Bass-Boost-Modi oder -Zustände.
      </td>
      <td><code>VK_BASS_BOOST_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostToggle"</code></td>
      <td>Schaltet das Bass-Boosting ein und aus.</td>
      <td><code>APPCOMMAND_BASS_BOOST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostUp"</code></td>
      <td>
        Erhöht das Bass-Boosting, oder schaltet nach oben durch eine Reihe von Bass-Boost-Modi oder -Zuständen.
      </td>
      <td><code>VK_BASS_BOOST_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassUp"</code></td>
      <td>Erhöht den Anteil des Basses.</td>
      <td><code>APPCOMMAND_BASS_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderFront"</code></td>
      <td>Passt den Audio-Fader nach vorne an.</td>
      <td><code>VK_FADER_FRONT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderRear"</code></td>
      <td>Passt den Audio-Fader nach hinten an.</td>
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
      <td>Verringert den Anteil der Höhen.</td>
      <td><code>APPCOMMAND_TREBLE_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleUp"</code></td>
      <td>Erhöht den Anteil der Höhen.</td>
      <td><code>APPCOMMAND_TREBLE_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioVolumeDown" [1]</code></td>
      <td>Verringert die Lautstärke.</td>
      <td>
        <code>VK_VOLUME_DOWN</code> (0xAE)<br /><code
          >APPCOMMAND_VOLUME_DOWN</code
        >
      </td>
      <td><code>kVK_VolumeDown</code> (0x49)</td>
      <td>
        <code>GDK_KEY_AudioLowerVolume</code> (0x1008FF11)<br /><code
          >Qt::Key_VolumeDown</code
        >
        (0x01000070)
      </td>
      <td><code>KEYCODE_VOLUME_DOWN</code> (25)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeMute" [1]</code></td>
      <td>Stummschalten des Audios.</td>
      <td>
        <code>VK_VOLUME_MUTE</code> (0xAD)<br /><code
          >APPCOMMAND_VOLUME_MUTE</code
        >
      </td>
      <td><code>kVK_Mute</code> (0x4A)</td>
      <td>
        <code>GDK_KEY_AudioMute</code> (0x1008FF12)<br /><code
          >Qt::Key_VolumeMute</code
        >
        (0x01000071)
      </td>
      <td><code>KEYCODE_VOLUME_MUTE</code> (164)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeUp" [1]</code></td>
      <td>Erhöht die Lautstärke.</td>
      <td>
        <code>VK_VOLUME_UP</code> (0xAF)<br /><code>APPCOMMAND_VOLUME_UP</code>
      </td>
      <td><code>kVK_VolumeUp</code> (0x48)</td>
      <td>
        <code>GDK_KEY_AudioRaiseVolume</code> (0x1008FF13)<br /><code
          >Qt::Key_VolumeUp</code
        >
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
      <td>Stummschalten der Mikrofoneingabe.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_MUTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioMicMute</code> (0x1008FFB2)<br /><code
          >Qt::Key_MicMute</code
        >
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

\[1] Legacy Edge und Firefox (48 und früher) verwenden `"VolumeUp"`, `"VolumeDown"` und `"VolumeMute"` anstelle von `"AudioVolumeUp"`, `"AudioVolumeDown"` und `"AudioVolumeMute"`. In Firefox 49 wurden sie aktualisiert, um der neuesten Spezifikation zu entsprechen.

## TV-Steuerungstasten

Diese Schlüsselwerte repräsentieren Schaltflächen oder Tasten, die auf Fernsehgeräten oder Computern oder Telefonen mit TV-Unterstützung vorhanden sind.

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
      <td>Wechselt in den TV-Anzeigemodus.</td>
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
        Reduziert die Mischlautstärke der Audiobeschreibung; verringert die Lautstärke der Audiobeschreibungen im Verhältnis zum Programmsound.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN</code> (254)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixUp"</code></td>
      <td>
        Erhöht die Mischlautstärke der Audiobeschreibung; erhöht die Lautstärke der Audiobeschreibungen im Verhältnis zum Programmsound.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP</code> (253)</td>
    </tr>
    <tr>
      <td><code>"TVContentsMenu"</code></td>
      <td>
        Zeigt die zur Wiedergabe verfügbaren Medieninhalte an oder blendet sie aus (dies kann ein Kanalführer sein, der die aktuell laufenden Programme zeigt, oder eine Liste von Mediendateien zur Wiedergabe).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_CONTENTS_MENU</code> (256)</td>
    </tr>
    <tr>
      <td><code>"TVDataService"</code></td>
      <td>Zeigt das Datenservicemenü des Fernsehers an oder blendet es aus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_DATA_SERVICE</code> (230)</td>
    </tr>
    <tr>
      <td><code>"TVInput"</code> [2]</td>
      <td>Wechselt den Eingabemodus auf einem externen Fernseher.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT</code> (178)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent1"</code></td>
      <td>Wechselt zur Eingabe "Komponente 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_1</code> (249)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent2"</code></td>
      <td>Wechselt zur Eingabe "Komponente 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_2</code> (250)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite1"</code></td>
      <td>Wechselt zur Eingabe "Composite 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_1</code> (247)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite2"</code></td>
      <td>Wechselt zur Eingabe "Composite 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_2</code> (248)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI1"</code></td>
      <td>Wechselt zur Eingabe "HDMI 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_1</code> (243)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI2"</code></td>
      <td>Wechselt zur Eingabe "HDMI 2".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_2</code> (244)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI3"</code></td>
      <td>Wechselt zur Eingabe "HDMI 3".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_3</code> (245)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI4"</code></td>
      <td>Wechselt zur Eingabe "HDMI 4".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_4</code> (246)</td>
    </tr>
    <tr>
      <td><code>"TVInputVGA1"</code></td>
      <td>Wechselt zur Eingabe "VGA 1".</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_VGA_1</code> (251)</td>
    </tr>
    <tr>
      <td><code>"TVMediaContext"</code></td>
      <td>Die Taste für das Medienkontextmenü.</td>
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
      <td>Setzt den Fernseher in den Zifferneingabemodus.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NUMBER_ENTRY</code> (234)</td>
    </tr>
    <tr>
      <td><code>"TVPower"</code> [2]</td>
      <td>Die Einschalttaste des Geräts.</td>
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
      <td>Umschalten zwischen verfügbaren Satelliten.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_SERVICE</code> (240)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialAnalog"</code></td>
      <td>
        Wählt den analogen terrestrischen Fernsehdienst (analoger Kabel- oder Antennenempfang) aus.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_ANALOG</code> (235)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialDigital"</code></td>
      <td>
        Wählt den digitalen terrestrischen Fernsehdienst (digitaler Kabel- oder Antennenempfang) aus.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_DIGITAL</code> (236)</td>
    </tr>
    <tr>
      <td><code>"TVTimer"</code></td>
      <td>Zeitschaltuhrprogrammtaste.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TIMER_PROGRAMMING</code> (258)</td>
    </tr>
  </tbody>
</table>

\[1] Firefox hat in Firefox 37 eine ordnungsgemäße Unterstützung für die Taste `"TV"` hinzugefügt; davor erzeugte diese Taste den Tastencode `"Live"`.

\[2] Diese Tasten waren bis Firefox 37 `"Unidentified"`.

## Media-Controller-Tasten

Da moderne Fernbedienungen für Mediengerät oft Tasten enthalten, die über die grundlegenden Steuerungen hinausgehen, die an anderer Stelle in diesem Dokument behandelt werden, sind Schlüsselwerte für eine breite Palette dieser zusätzlichen Tasten definiert.

Die folgenden Werte sind teilweise aus einer Reihe von technischen Spezifikationen im Bereich Unterhaltungselektronik abgeleitet:

- [DTV Application Software Environment](https://www.atsc.org/atsc-documents/a100-dtv-application-software-environment-level-1-dase-1/) (Teil der [ATSC](https://en.wikipedia.org/wiki/ATSC)-Spezifikation)
- [Open Cable Application Platform](https://en.wikipedia.org/wiki/OpenCable_Application_Platform)
- [ANSI/CEA-2014-B](https://shop.cta.tech/products/web-based-protocol-and-framework-for-remote-user-interface-on-upnp-networks-and-the-internet): Web-basiertes Protokoll und Framework für Benutzeroberflächen auf UPnP™-Netzwerken und dem Internet
- [Android KeyEvent key code values](https://developer.android.com/reference/android/view/KeyEvent.html)

> [!NOTE]
> Fernbedienungen enthalten in der Regel Tasten, deren Werte bereits an anderer Stelle definiert sind, zum Beispiel unter [Multimedia-Tasten](#multimedia-tasten) oder [Audiosteuerungstasten](#audio-steuerungstasten). Die Werte dieser Tasten entsprechen den in diesen Tabellen dokumentierten Werten.

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
      <td><code>"AVRInput"</code> [3]</td>
      <td>Ändert den Eingabemodus an einem externen Audio/Video-Empfänger (AVR).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_INPUT</code> (182)</td>
    </tr>
    <tr>
      <td><code>"AVRPower"</code> [3]</td>
      <td>Schaltet die Stromversorgung eines externen AVR-Geräts um.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_POWER</code> (181)</td>
    </tr>
    <tr>
      <td><code>"ColorF0Red"</code> [3]</td>
      <td>Allgemeine Medientaste, rot kodiert. Diese hat den Index <code>0</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_0</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_RED</code> (183)</td>
    </tr>
    <tr>
      <td><code>"ColorF1Green"</code> [3]</td>
      <td>Allgemeine Medientaste, grün kodiert. Diese hat den Index <code>1</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_1</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREEN</code> (184)</td>
    </tr>
    <tr>
      <td><code>"ColorF2Yellow"</code> [3]</td>
      <td>Allgemeine Medientaste, gelb kodiert. Diese hat den Index <code>2</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_2</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_YELLOW</code> (185)</td>
    </tr>
    <tr>
      <td><code>"ColorF3Blue"</code> [3]</td>
      <td>Allgemeine Medientaste, blau kodiert. Diese hat den Index <code>3</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_3</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BLUE</code> (186)</td>
    </tr>
    <tr>
      <td><code>"ColorF4Grey"</code></td>
      <td>Allgemeine Medientaste, grau kodiert. Diese hat den Index <code>4</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_4</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREY</code></td>
    </tr>
    <tr>
      <td><code>"ColorF5Brown"</code></td>
      <td>Allgemeine Medientaste, braun kodiert. Diese hat den Index <code>5</code> unter den farbigen Tasten.</td>
      <td><code>VK_COLORED_KEY_5</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BROWN</code></td>
    </tr>
    <tr>
      <td><code>"ClosedCaptionToggle"</code></td>
      <td>Schaltet Untertitel ein und aus.</td>
      <td><code>VK_CC</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Dimmer"</code></td>
      <td>Passt die Helligkeit des Geräts an, indem zwischen zwei Helligkeitsstufen umgeschaltet oder zwischen mehreren Helligkeitsstufen gewechselt wird.</td>
      <td><code>VK_DIMMER</code></td>
      <td></td>
      <td><code>GDK_KEY_BrightnessAdjust</code> (0x1008FF3B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DisplaySwap"</code></td>
      <td>Wechselt zwischen Videoquellen.</td>
      <td><code>VK_DISPLAY_SWAP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DVR"</code></td>
      <td>Wechselt die Eingabequelle zum Digital Video Recorder (DVR).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DVR</code> (173)</td>
    </tr>
    <tr>
      <td><code>"Exit"</code></td>
      <td>Die Exit-Taste, die die aktuelle Anwendung oder das Menü verlässt.</td>
      <td><code>VK_EXIT</code></td>
      <td></td>
      <td><code>Qt::Key_Exit</code> (0x0102000a)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear0"</code></td>
      <td>Löscht das Programm oder den Inhalt, der im ersten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_CLEAR_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear1"</code></td>
      <td>Löscht das Programm oder den Inhalt, der im zweiten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_CLEAR_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear2"</code></td>
      <td>Löscht das Programm oder den Inhalt, der im dritten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_CLEAR_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear3"</code></td>
      <td>Löscht das Programm oder den Inhalt, der im vierten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_CLEAR_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall0"</code></td>
      <td>Wählt das Programm oder den Inhalt aus, der im ersten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_RECALL_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall1"</code></td>
      <td>Wählt das Programm oder den Inhalt aus, der im zweiten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_RECALL_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall2"</code></td>
      <td>Wählt das Programm oder den Inhalt aus, der im dritten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_RECALL_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall3"</code></td>
      <td>Wählt das Programm oder den Inhalt aus, der im vierten Favoritenspeicherplatz gespeichert ist.</td>
      <td><code>VK_RECALL_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore0"</code></td>
      <td>Speichert das aktuelle Programm oder den Inhalt im ersten Favoritenspeicherplatz.</td>
      <td><code>VK_STORE_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore1"</code></td>
      <td>Speichert das aktuelle Programm oder den Inhalt im zweiten Favoritenspeicherplatz.</td>
      <td><code>VK_STORE_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore2"</code></td>
      <td>Speichert das aktuelle Programm oder den Inhalt im dritten Favoritenspeicherplatz.</td>
      <td><code>VK_STORE_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore3"</code></td>
      <td>Speichert das aktuelle Programm oder den Inhalt im vierten Favoritenspeicherplatz.</td>
      <td><code>VK_STORE_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Guide"</code></td>
      <td>Schaltet die Anzeige des Programm- oder Inhaltsleitfadens um.</td>
      <td><code>VK_GUIDE</code></td>
      <td></td>
      <td><code>Qt::Key_Guide</code> (0x0100011A)</td>
      <td><code>KEYCODE_GUIDE</code> (172)</td>
    </tr>
    <tr>
      <td><code>"GuideNextDay"</code></td>
      <td>Wenn der Leitfaden derzeit angezeigt wird, zeigt diese Taste den Inhalt des nächsten Tages an.</td>
      <td><code>VK_NEXT_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GuidePreviousDay"</code></td>
      <td>Wenn der Leitfaden derzeit angezeigt wird, zeigt diese Taste den Inhalt des vorherigen Tages an.</td>
      <td><code>VK_PREV_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Info"</code></td>
      <td>Schaltet die Anzeige von Informationen über den derzeit ausgewählten Inhalt, das Programm oder die Medien um.</td>
      <td><code>VK_INFO</code></td>
      <td></td>
      <td><code>Qt::Key_Info</code> (0x0100011B)</td>
      <td><code>KEYCODE_INFO</code> (165)</td>
    </tr>
    <tr>
      <td><code>"InstantReplay"</code></td>
      <td>Befehlt dem Gerät, ein sofortiges Replay durchzuführen (in der Regel eine Art Zurückspringen für eine kurze Zeit und erneutes Abspielen, möglicherweise aber nicht häufig in Zeitlupe).</td>
      <td><code>VK_INSTANT_REPLAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Link"</code></td>
      <td>Öffnet mit dem aktuellen Programm verknüpften Inhalt, falls verfügbar und möglich.</td>
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
      <td>Schaltet eine Anzeige um, die derzeit verfügbaren Live-Inhalt oder Programme auflistet.</td>
      <td><code>VK_LIVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Lock"</code></td>
      <td>Sperrt oder entsperrt den derzeit ausgewählten Inhalt oder das Programm.</td>
      <td><code>VK_LOCK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaApps"</code></td>
      <td>Präsentiert eine Liste von Medienanwendungen wie Fotobetrachtungsprogramme, Audio- und Videoplayer und Spiele. [1]</td>
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
      <td>GDK_KEY_AudioCycleTrack (0x1008FF9B)<br /><code>Qt::Key_AudioCycleTrack</code> (0x01000106)</td>
      <td><code>KEYCODE_MEDIA_AUDIO_TRACK</code> (222)</td>
    </tr>
    <tr>
      <td><code>"MediaLast"</code></td>
      <td>Springt zurück zum zuletzt angesehenen Inhalt, Programm oder anderen Medien.</td>
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
      <td>Springt vorwärts zum nächsten Inhalt oder Programm.</td>
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
      <td>Top-Menü-Taste. Öffnet das Hauptmenü der Medien (z. B. einer DVD oder Blu-ray-Disc).</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_TopMenu</code> (0x0100010A)</td>
      <td><code>KEYCODE_MEDIA_TOP_MENU</code></td>
    </tr>
    <tr>
      <td><code>"NavigateIn"</code></td>
      <td>Wechselt in ein Untermenü oder eine Option.</td>
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
      <td>Wechselt aus dem aktuellen Bildschirm oder Menü heraus.</td>
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
      <td>Schaltet zum nächsten Kanal in der Favoritenliste um.</td>
      <td><code>VK_NEXT_FAVORITE_CHANNEL</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NextUserProfile"</code></td>
      <td>Wechselt zum nächsten gespeicherten Benutzerprofil, falls diese Funktion unterstützt und mehrere Profile vorhanden sind.</td>
      <td><code>VK_USER</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"OnDemand"</code></td>
      <td>Öffnet die Benutzeroberfläche zur Auswahl von On-Demand-Inhalten oder -Programmen zum Ansehen.</td>
      <td><code>VK_ON_DEMAND</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Pairing"</code></td>
      <td>Startet den Kopplungsprozess der Fernbedienung mit einem zu steuernden Gerät.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PAIRING</code> (225)</td>
    </tr>
    <tr>
      <td><code>"PinPDown"</code></td>
      <td>Eine Taste, um das Bild-im-Bild-Ansicht nach unten zu bewegen.</td>
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
      <td>Schaltet die Bild-im-Bild-Ansicht ein und aus.</td>
      <td><code>VK_PINP_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPUp"</code></td>
      <td>Eine Taste, um das Bild-im-Bild-Ansicht nach oben zu bewegen.</td>
      <td><code>VK_PINP_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedDown"</code></td>
      <td>Reduziert die Wiedergabegeschwindigkeit der Medien.</td>
      <td><code>VK_PLAY_SPEED_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedReset"</code></td>
      <td>Setzt die Wiedergabegeschwindigkeit der Medien auf normal zurück.</td>
      <td><code>VK_PLAY_SPEED_RESET</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedUp"</code></td>
      <td>Erhöht die Wiedergabegeschwindigkeit der Medien.</td>
      <td><code>VK_PLAY_SPEED_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RandomToggle"</code></td>
      <td>Schaltet die zufällige Medienwiedergabe (auch als "Shuffle-Modus" bekannt) ein und aus.</td>
      <td><code>VK_RANDOM_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioRandomPlay</code> (0x1008FF99)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RcLowBattery"</code></td>
      <td>Ein Code, der gesendet wird, wenn die Batterie der Fernbedienung schwach ist. Dies entspricht tatsächlich überhaupt keinem physischen Schlüssel.</td>
      <td><code>VK_RC_LOW_BATTERY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RecordSpeedNext"</code></td>
      <td>Wechselt zwischen den verfügbaren Aufnahmegeschwindigkeiten.</td>
      <td><code>VK_RECORD_SPEED_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RfBypass"</code></td>
      <td>Schaltet den Hochfrequenz (RF-) Eingangs-Bypass-Modus ein und aus. Der RF-Bypass-Modus leitet den RF-Eingang direkt an den RF-Ausgang weiter, ohne Verarbeitung oder Filterung.</td>
      <td><code>VK_RF_BYPASS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScanChannelsToggle"</code></td>
      <td>Schaltet den Kanal-Scan-Modus ein und aus. Dies ist ein Modus, der automatisch durch Kanäle blättert, bis der Benutzer den Scan stoppt.</td>
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
      <td>Schaltet den Split-Screen-Anzeigemodus ein und aus.</td>
      <td><code>VK_SPLIT_SCREEN_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_SplitScreen</code> (0x1008FF7D)<br /><code>Qt::Key_SplitScreen</code> (0x010000ED)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"STBInput"</code> [3]</td>
      <td>Wechselt zwischen Eingabemodi an einer externen Set-Top-Box (STB).</td>
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
      <td>Schaltet die Anzeige von Untertiteln ein und aus, falls sie verfügbar sind.</td>
      <td><code>VK_SUBTITLE</code></td>
      <td></td>
      <td><code>GDK_KEY_Subtitle</code> (0x1008FF9A)</td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Teletext"</code></td>
      <td>Schaltet die Anzeige von <a href="https://en.wikipedia.org/wiki/Teletext">Teletext</a> ein und aus, falls verfügbar.</td>
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
      <td>Veranlasst das Gerät, sich in irgendeiner Weise zu identifizieren, z. B. durch Blinken eines Lichts, kurzzeitige Änderung der Helligkeit von Anzeigelichtern oder Abgeben eines Tons.</td>
      <td><code>VK_WINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZoomToggle"</code> [2]</td>
      <td>Wechselt zwischen Vollbild- und skaliertem Inhaltsanzeigemodus oder ändert anderweitig die Vergrößerungsstufe.</td>
      <td><code>VK_ZOOM</code> (0xFB)</td>
      <td></td>
      <td><code>Qt::Key_Zoom</code> (0x01020006)</td>
      <td><code>KEYCODE_TV_ZOOM_MODE</code> (255)</td>
    </tr>
  </tbody>
</table>

\[1] Verwechseln Sie die Media-Controller-Taste `VK_APPS` nicht mit der Windows-Taste `VK_APPS`, die auch als `VK_CONTEXT_MENU` bekannt ist. Diese Taste wird als `"ContextMenu"` kodiert.

\[2] Firefox 36 und früher benennen die Zoom-Umschalttaste als `"Zoom"`. Firefox 37 korrigiert dies in `"ZoomToggle"`.

\[3] Diese Tasten waren bis Firefox 37 als `"Unidentified"` bezeichnet.

## Spracherkennungstasten

Diese speziellen Multimedia-Tasten werden zur Steuerung von Spracherkennungsfunktionen verwendet.

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
      <td><code>"SpeechCorrectionList"</code> [1]</td>
      <td>Präsentiert eine Liste möglicher Korrekturen für ein falsch erkanntes Wort.</td>
      <td><code>APPCOMMAND_CORRECTION_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpeechInputToggle"</code> [2]</td>
      <td>Wechselt zwischen Diktatmodus und Befehls-/Steuermodus. Auf diese Weise weiß die Sprachanalysesoftware, ob gesprochene Wörter als Eingabetext oder als Befehle interpretiert werden sollen.</td>
      <td><code>APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Der `APPCOMMAND_CORRECTION_LIST`-Befehl unter Windows erzeugt `"Unidentified"` in Firefox.

\[2] Der `APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE`-Befehl unter Windows erzeugt `"Unidentified"` in Firefox.

## Dokument-Tasten

Diese Tasten steuern Dokumente. In der Spezifikation sind sie in andere Tastensets (wie die Medien-Tasten) einbezogen, aber sie sind sinnvollerweise als eigene Kategorie zu betrachten.

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
    <tr>
      <td><code>"Close"</code> [1]</td>
      <td>Schließt das aktuelle Dokument oder die Nachricht. Darf die Anwendung nicht beenden.</td>
      <td><code>APPCOMMAND_CLOSE</code></td>
      <td></td>
      <td><code>GDK_KEY_Close</code> (0x1008FF56)<br /><code>Qt::Key_Close</code> (0x010000CE)</td>
      <td><code>KEYCODE_MEDIA_CLOSE</code> (128)</td>
    </tr>
    <tr>
      <td><code>"New"</code> [1]</td>
      <td>Erstellt ein neues Dokument oder eine neue Nachricht.</td>
      <td><code>APPCOMMAND_NEW</code></td>
      <td></td>
      <td><code>GDK_KEY_New</code> (0x1008FF68)<br /><code>Qt::Key_New</code> (0x01000120)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Open"</code> [1]</td>
      <td>Öffnet ein bestehendes Dokument oder eine Nachricht.</td>
      <td><code>APPCOMMAND_OPEN</code></td>
      <td></td>
      <td><code>GDK_KEY_Open</code> (0x1008FF6B)<br /><code>Qt::Key_Open</code> (0x01000121)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Print"</code></td>
      <td>Druckt das aktuelle Dokument oder die Nachricht.</td>
      <td><code>APPCOMMAND_PRINT</code></td>
      <td></td>
      <td><code>GDK_KEY_Print</code> (0xFF61)<br /><code>Qt::Print</code> (0x01000009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Save"</code> [1]</td>
      <td>Speichert das aktuelle Dokument oder die Nachricht.</td>
      <td><code>APPCOMMAND_SAVE</code></td>
      <td></td>
      <td><code>GDK_KEY_Save</code> (0x1008FF77)<br /><code>Qt::Key_Save</code> (0x010000EA)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpellCheck"</code> [1]</td>
      <td>Startet die Rechtschreibprüfung des aktuellen Dokuments.</td>
      <td><code>APPCOMMAND_SPELL_CHECK</code></td>
      <td></td>
      <td><code>GDK_KEY_Spell</code> (0x1008FF7C)<br /><code>Qt::Key_Spell</code> (0x010000EC)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailForward"</code> [1]</td>
      <td>Öffnet die Benutzeroberfläche, um eine Nachricht weiterzuleiten.</td>
      <td><code>APPCOMMAND_FORWARD_MAIL</code></td>
      <td></td>
      <td><code>GDK_KEY_MailForward</code> (0x1008FF90)<br /><code>Qt::Key_MailForward</code> (0x010000FB)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailReply"</code> [1]</td>
      <td>Öffnet die Benutzeroberfläche, um auf eine Nachricht zu antworten.</td>
      <td><code>APPCOMMAND_REPLY_TO_MAIL</code></td>
      <td></td>
      <td><code>GDK_KEY_Reply</code> (0x1008FF72)<br /><code>Qt::Key_Reply</code> (0x010000E5)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailSend"</code> [1]</td>
      <td>Sendet die aktuelle Nachricht.</td>
      <td><code>APPCOMMAND_SEND_MAIL</code></td>
      <td></td>
      <td><code>GDK_KEY_Send</code> (0x1008FF7B)<br /><code>Qt::Key_Send</code> (0x010000EB)</td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] Vor Firefox 37 erzeugte diese Taste den Schlüsselwert `"Unidentified"`.

## Anwendungsauswahl-Tasten

Einige Tastaturen bieten spezielle Tasten zum Starten oder Wechseln zu bestimmten häufig benutzten Anwendungen. Schlüsselwerte für diese sind hier aufgeführt.

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
      <td><code>"LaunchCalculator"</code> [5]</td>
      <td>Die <kbd>Rechner</kbd>-Taste, oft mit einem Symbol gekennzeichnet. Dies wird oft als generische Anwendungstartertaste verwendet (<code>APPCOMMAND_LAUNCH_APP2</code>).</td>
      <td><code>APPCOMMAND_LAUNCH_APP2</code></td>
      <td></td>
      <td><code>GDK_KEY_Calculator</code> (0x1008FF1D)<br /><code>Qt::Key_Calculator</code> (0x010000CB)</td>
      <td><code>KEYCODE_CALCULATOR</code> (210)</td>
    </tr>
    <tr>
      <td><code>"LaunchCalendar"</code> [5]</td>
      <td>Die <kbd>Kalender</kbd>-Taste. Oft mit einem Symbol gekennzeichnet.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Calendar</code> (0x1008FF20)<br /><code>Qt::Key_Calendar</code> (0x010000E4)</td>
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
      <td>Die <kbd>Mail</kbd>-Taste. Oft mit einem Symbol gekennzeichnet.</td>
      <td><code>VK_LAUNCH_MAIL</code> (0xB4)<br /><code>APPCOMMAND_LAUNCH_MAIL</code></td>
      <td></td>
      <td><code>GDK_KEY_Mail</code> (0x1008FF19)<br /><code>Qt::Key_LaunchMail</code> (0x010000A0)</td>
      <td><code>KEYCODE_ENVELOPE</code> (65)</td>
    </tr>
    <tr>
      <td><code>"LaunchMediaPlayer"</code> [1]</td>
      <td>Die <kbd>Media-Player</kbd>-Taste.</td>
      <td><code>VK_LAUNCH_MEDIA_SELECT</code> (0xB5)<br /><code>APPCOMMAND_LAUNCH_MEDIA_SELECT</code></td>
      <td></td>
      <td><code>GDK_KEY_CD</code> (0x1008FF53)<br /><code>GDK_KEY_Video</code> (0x1008FF87)<br /><code>GDK_KEY_AudioMedia</code> (0x1008FF32)<br /><code>Qt::Key_LaunchMedia</code> (0x010000A1)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchMusicPlayer"</code> [5]</td>
      <td>Die <kbd>Musik-Player</kbd>-Taste. Oft mit einem Symbol gekennzeichnet.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Music</code> (0x1008FF92)<br /><code>Qt::Key_Music</code> (0x010000FD)</td>
      <td><code>KEYCODE_MUSIC</code> (209)</td>
    </tr>
    <tr>
      <td><code>"LaunchMyComputer"</code> [5]</td>
      <td>Die <kbd>Mein Computer</kbd>-Taste auf Windows-Tastaturen. Dies wird oft als generische Anwendungstartertaste verwendet (<code>APPCOMMAND_LAUNCH_APP1</code>).</td>
      <td><code>APPCOMMAND_LAUNCH_APP1</code></td>
      <td></td>
      <td><code>GDK_KEY_MyComputer</code> (0x1008FF33)<br /><code>GDK_KEY_Explorer</code> (0x1008FF5D)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchPhone"</code></td>
      <td>Die <kbd>Telefon</kbd>-Taste. Öffnet die Telefonanwendung (falls vorhanden).</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Phone</code> (0x1008FF6E)<br /><code>Qt::Key_Phone</code> (0x010000E3)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchScreenSaver"</code> [5]</td>
      <td>Die <kbd>Bildschirmschoner</kbd>-Taste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ScreenSaver</code> (0x1008FF2D)<br /><code>Qt::Key_ScreenSaver</code> (0x010000BA)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchSpreadsheet"</code> [4]</td>
      <td>Die <kbd>Tabellenkalkulation</kbd>-Taste. Diese Taste kann mit einem Symbol gekennzeichnet sein.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Excel</code> (0x1008FF5C)<br /><code>Qt::Key_Excel</code> (0x010000D4)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWebBrowser"</code> [4]</td>
      <td>Die <kbd>Webbrowser</kbd>-Taste. Diese Taste ist häufig mit einem Symbol gekennzeichnet.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_WWW</code> (0x1008FF2E)<br /><code>Qt::Key_WWW</code> (0x010000BB)</td>
      <td><code>KEYCODE_EXPLORER</code> (64)</td>
    </tr>
    <tr>
      <td><code>"LaunchWebCam"</code> [5]</td>
      <td>Die <kbd>WebCam</kbd>-Taste. Öffnet die Webcam-Anwendung.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_WebCam</code> (0x1008FF8F)<br /><code>Qt::Key_WebCam</code> (0x010000FA)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWordProcessor"</code> [5]</td>
      <td>Die <kbd>Textverarbeitung</kbd>-Taste. Dies kann ein Symbol einer bestimmten Textverarbeitungssoftware oder ein generisches Dokumentsymbol sein.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Word</code> (0x1008FF89)<br /><code>Qt::Key_Word</code> (0x010000F4)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication1"</code> [2]</td>
      <td>Die erste generische Anwendungstartertaste.</td>
      <td><code>VK_LAUNCH_APP1</code> (0xB6)<br /><code>APPCOMMAND_LAUNCH_APP1</code></td>
      <td></td>
      <td><code>GDK_KEY_Launch0</code> (0x1008FF40)<br /><code>Qt::Key_Launch0</code> (0x010000A2)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication2"</code> [3]</td>
      <td>Die zweite generische Anwendungstartertaste.</td>
      <td><code>VK_LAUNCH_APP2</code> (0xB7)<br /><code>APPCOMMAND_LAUNCH_APP2</code></td>
      <td></td>
      <td><code>GDK_KEY_Launch1</code> (0x1008FF41)<br /><code>Qt::Key_Launch1</code> (0x010000A3)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication3"</code></td>
      <td>Die dritte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch2</code> (0x1008FF42)<br /><code>Qt::Key_Launch2</code> (0x010000A4)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication4"</code></td>
      <td>Die vierte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch3</code> (0x1008FF43)<br /><code>Qt::Key_Launch3</code> (0x010000A5)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication5"</code></td>
      <td>Die fünfte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch4</code> (0x1008FF44)<br /><code>Qt::Key_Launch4</code> (0x010000A6)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication6"</code></td>
      <td>Die sechste generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch5</code> (0x1008FF45)<br /><code>Qt::Key_Launch5</code> (0x010000A7)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication7"</code></td>
      <td>Die siebte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch6</code> (0x1008FF46)<br /><code>Qt::Key_Launch6</code> (0x010000A8)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication8"</code></td>
      <td>Die achte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch7</code> (0x1008FF47)<br /><code>Qt::Key_Launch7</code> (0x010000A9)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication9"</code></td>
      <td>Die neunte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch8</code> (0x1008FF48)<br /><code>Qt::Key_Launch8</code> (0x010000AA)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication10"</code></td>
      <td>Die zehnte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Launch9</code> (0x1008FF49)<br /><code>Qt::Key_Launch9</code> (0x010000AB)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication11"</code></td>
      <td>Die elfte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchA</code> (0x1008FF4A)<br /><code>Qt::Key_LaunchA</code> (0x010000AC)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication12"</code></td>
      <td>Die zwölfte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchB</code> (0x1008FF4B)<br /><code>Qt::Key_LaunchB</code> (0x010000AD)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication13"</code></td>
      <td>Die dreizehnte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchC</code> (0x1008FF4C)<br /><code>Qt::Key_LaunchC</code> (0x010000AE)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication14"</code></td>
      <td>Die vierzehnte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchD</code> (0x1008FF4D)<br /><code>Qt::Key_LaunchD</code> (0x010000AF)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication15"</code></td>
      <td>Die fünfzehnte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchE</code> (0x1008FF4E)<br /><code>Qt::Key_LaunchE</code> (0x010000B0)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication16"</code></td>
      <td>Die sechzehnte generische Anwendungstartertaste.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_LaunchF</code> (0x1008FF4F)<br /><code>Qt::Key_LaunchF</code> (0x010000B1)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Der alte Edge und Firefox (36 und früher) verwenden `"SelectMedia"` anstelle von `"LaunchMediaPlayer"`. Firefox 37 bis Firefox 48 verwenden `"MediaSelect"`. Firefox 49 wurde aktualisiert, um mit der neuesten Spezifikation übereinzustimmen, und gibt `"LaunchMediaPlayer"` zurück.

\[2] Google Chrome 57 und früher gaben `"LaunchMyComputer"` anstelle von `"LaunchApplication1"` zurück. Weitere Informationen finden Sie unter [Chrome Bug 612743](https://crbug.com/612743).

\[3] Google Chrome 57 und früher gaben `"LaunchCalculator"` anstelle von `"LaunchApplication2"` zurück. Weitere Informationen finden Sie unter [Chrome Bug 612743](https://crbug.com/612743).

\[4] Vor Firefox 37 gab Firefox den Tastencode `"LaunchApplication1"` anstelle von `"LaunchWebBrowser"` für die Webbrowser-Taste zurück.

\[5] Firefox hat in Firefox 37 die Unterstützung für diese Taste eingeführt. Vorher wurde diese Taste als `"Unidentified"` gemeldet.

## Tasten für Browsersteuerung

Einige Tastaturen enthalten spezielle Tasten zur Steuerung von Webbrowsern. Diese Tasten sind wie folgt aufgeführt.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
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
      <td><code>"BrowserBack"</code></td>
      <td>
        Navigiert zum vorherigen Inhalt oder zur vorherigen Seite in der aktuellen Verlaufssicht des Webbrowsers.
      </td>
      <td>
        <code>VK_BROWSER_BACK</code> (0xA6)<br /><code
          >APPCOMMAND_BROWSER_BACKWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Back</code> (0x1008FF26)<br /><code>Qt::Key_Back</code>
        (0x01000061)
      </td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"BrowserFavorites"</code> [1]</td>
      <td>Öffnet die Lesezeichen- oder Favoritenliste des Benutzers.</td>
      <td>
        <code>VK_BROWSER_FAVORITES</code> (0xAB)<br /><code
          >APPCOMMAND_BROWSER_FAVORITES</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Favorites</code> (0x1008FF30)<br /><code
          >GDK_KEY_MySites</code
        >
        (0x1008FF67)<br /><code>Qt::Favorites</code> (0x01000091)
      </td>
      <td><code>KEYCODE_BOOKMARK</code> (174)</td>
    </tr>
    <tr>
      <td><code>"BrowserForward"</code></td>
      <td>
        Navigiert zum nächsten Inhalt oder zur nächsten Seite in der aktuellen Verlaufssicht des Webbrowsers.
      </td>
      <td>
        <code>VK_BROWSER_FORWARD</code> (0xA7)<br /><code
          >APPCOMMAND_BROWSER_FORWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Forward</code> (0x1008FF27)<br /><code
          >Qt::Key_Forward</code
        >
        (0x01000062)
      </td>
      <td><code>KEYCODE_FORWARD</code> (125)</td>
    </tr>
    <tr>
      <td><code>"BrowserHome"</code></td>
      <td>Navigiert zur bevorzugten Startseite des Benutzers.</td>
      <td>
        <code>VK_BROWSER_HOME</code> (0xAC)<br /><code
          >APPCOMMAND_BROWSER_HOME</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_HomePage</code> (0x1008FF18)<br /><code
          >Qt::Key_HomePage</code
        >
        (0x01000090)
      </td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"BrowserRefresh"</code></td>
      <td>Aktualisiert die aktuelle Seite oder den aktuellen Inhalt.</td>
      <td>
        <code>VK_BROWSER_REFRESH</code> (0xA8)<br /><code
          >APPCOMMAND_BROWSER_REFRESH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Refresh</code> (0x1008FF29)<br /><code
          >GDK_KEY_Reload</code
        >
        (0x1008FF73)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"BrowserSearch"</code></td>
      <td>
        Aktiviert die bevorzugte Suchmaschine des Benutzers oder die Suchschnittstelle in ihrem Browser.
      </td>
      <td>
        <code>VK_BROWSER_SEARCH</code> (0xAA)<br /><code
          >APPCOMMAND_BROWSER_SEARCH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Search</code> (0x1008FF1B)<br /><code
          >Qt::Key_Search</code
        >
        (0x01000092)
      </td>
      <td><code>KEYCODE_SEARCH</code> (84)</td>
    </tr>
    <tr>
      <td><code>"BrowserStop"</code></td>
      <td>Stoppt das Laden der aktuell angezeigten Webansicht oder Inhalte.</td>
      <td>
        <code>VK_BROWSER_STOP</code> (0xA9)<br /><code
          >APPCOMMAND_BROWSER_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Stop</code> (0x1008FF28)<br /><code>Qt::Key_Search</code>
        (0x01000063)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Vor Firefox 37 wurde der Wert dieser Taste als `"Unidentified"` gemeldet.

## Ziffernblocktasten

Diese Tasten befinden sich auf dem Ziffernblock der Tastatur. Allerdings sind nicht alle auf jeder Tastatur vorhanden. Obwohl typische Ziffernblöcke numerische Tasten von <kbd>0</kbd> bis <kbd>9</kbd> (kodiert als `"0"` bis `"9"`) aufweisen, enthalten einige Multimedia-Tastaturen zusätzliche Zahlentasten für höhere Zahlen.

> [!NOTE]
> Die <kbd>10</kbd>-Taste, falls vorhanden, erzeugt Ereignisse mit dem `key`-Wert `"0"`.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code>-Wert</th>
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
      <td><code>"Decimal"</code> [1] {{deprecated_inline}}</td>
      <td>
        <p>
          Die Kommataste (typischerweise <kbd>.</kbd> oder
          <kbd>,</kbd> je nach Region).
        </p>
        <p>
          In neueren Browsern wird dieser Wert durch das Zeichen ersetzt, das von der Dezimaltaste erzeugt wird (eines dieser zwei Zeichen). [1]
        </p>
      </td>
      <td><code>VK_DECIMAL</code> (0x6E)</td>
      <td><code>kVK_ANSI_KeypadDecimal</code> (0x41)</td>
      <td><code>GDK_KEY_KP_Decimal</code> (0xFFAE)<br /> </td>
      <td><code>KEYCODE_NUMPAD_DOT</code> (158)</td>
    </tr>
    <tr>
      <td><code>"Key11"</code></td>
      <td>Die <kbd>11</kbd>-Taste, die auf bestimmten Medien-Ziffernblöcken gefunden wird.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Key12"</code></td>
      <td>Die <kbd>12</kbd>-Taste, die auf bestimmten Medien-Ziffernblöcken gefunden wird.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Multiply"</code> [1] {{deprecated_inline}}</td>
      <td>Die Multiplikationstaste des Ziffernblocks, <kbd>*</kbd>.</td>
      <td><code>VK_MULTIPLY</code> (0x6A)</td>
      <td><code>kVK_ANSI_KeypadMultiply</code> (0x43)</td>
      <td>
        <code>GDK_KEY_KP_Multiply</code> (0xFFAA)<br /><code
          >Qt::Key_Multiply</code
        >
        (0x0D7)
      </td>
      <td><code>KEYCODE_NUMPAD_MULTIPLY</code> (155)</td>
    </tr>
    <tr>
      <td><code>"Add"</code> [1] {{deprecated_inline}}</td>
      <td>Die Additionstaste des Ziffernblocks, <kbd>+</kbd>.</td>
      <td><code>VK_ADD</code> (0x6B)</td>
      <td><code>kVK_ANSI_KeypadPlus</code> (0x45)</td>
      <td><code>GDK_KEY_KP_Add</code> (0xFFAB)</td>
      <td><code>KEYCODE_NUMPAD_ADD</code> (157)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>Die <kbd>Clear</kbd>-Taste des Ziffernblocks.</td>
      <td></td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Divide"</code> [1] {{deprecated_inline}}</td>
      <td>Die Divisionstaste des Ziffernblocks, <kbd>/</kbd>.</td>
      <td><code>VK_DIVIDE</code> (0x6F)</td>
      <td><code>kVK_ANSI_KeypadDivide</code> (0x4B)</td>
      <td>
        <code>GDK_KEY_KP_Divide</code> (0xFFAF)<br /><code>Qt::Key_Slash</code>
        (0x2F)
      </td>
      <td><code>KEYCODE_NUMPAD_DIVIDE</code> (154)</td>
    </tr>
    <tr>
      <td><code>"Subtract"</code> [1] {{deprecated_inline}}</td>
      <td>Die Subtraktionstaste des Ziffernblocks, <kbd>-</kbd>.</td>
      <td><code>VK_SUBTRACT</code> (0x6D)</td>
      <td><code>kVK_ANSI_KeypadMinus</code> (0x4E)</td>
      <td><code>GDK_KEY_KP_Subtract</code> (0xFFAD)</td>
      <td><code>KEYCODE_NUMPAD_SUBTRACT</code> (156)</td>
    </tr>
    <tr>
      <td><code>"Separator"</code> [1]</td>
      <td>
        <p>Das Trennzeichen auf dem Ziffernblock.</p>
        <p>
          (In den Vereinigten Staaten ist dies ein Komma, aber anderswo ist es häufig ein Punkt.)
        </p>
      </td>
      <td><code>VK_SEPARATOR</code> (0x6C)</td>
      <td><code>kVK_JIS_KeypadComma</code> (0x5F)</td>
      <td><code>GDK_KEY_KP_Separator</code> (0xFFAC)<br /> </td>
      <td><code>KEYCODE_NUMPAD_COMMA</code> (159)</td>
    </tr>
    <tr>
      <td><code>"0"</code> bis <code>"9"</code></td>
      <td>Die eigentlichen Zifferntasten auf dem Ziffernblock.</td>
      <td><code>VK_NUMPAD0</code> (0x60) - <code>VK_NUMPAD9</code> (0x69)</td>
      <td><code>kVK_Keypad0</code> (0x52) - <code>kVK_Keypad9</code> (0x5C)</td>
      <td>
        <code>GDK_KEY_KP_0</code> (0xFFB0) - <code>GDK_KEY_KP_9</code> (0xFFB9)
      </td>
      <td>
        <code>KEYCODE_NUMPAD_0</code> (144) -
        <code>KEYCODE_NUMPAD_9</code> (153)
      </td>
    </tr>
  </tbody>
</table>

\[1] Während ältere Browser Wörter wie `"Add"`, `"Decimal"`, `"Multiply"` und so weiter verwendeten, identifizieren moderne Browser diese mit dem tatsächlichen Zeichen (`"+"`, `"."`, `"*"`, usw.).
