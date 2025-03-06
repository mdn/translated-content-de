---
title: "ARIA: listbox-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere Elemente auswählen kann, die statisch sind und im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen auch Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich wie beim HTML-{{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-select-Element zu verwenden oder eine Gruppe von Radio-Buttons, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da viel Tastaturinteraktivität zur Verwaltung des Fokus für alle Nachkommen erforderlich ist und native HTML-Elemente diese Funktionalität automatisch bereitstellen.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste fokussiert wird, wird das erste Element in der Liste ausgewählt, sofern nicht bereits etwas anderes ausgewählt ist. Mit den Pfeiltasten nach oben/unten navigiert man durch die Liste, und durch Drücken von Umschalttaste + Pfeil nach oben/unten wird die Auswahl verschoben und erweitert. Das Eingeben eines oder mehrerer Buchstaben navigiert durch die Listenelemente (gleicher Buchstabe geht zu jedem Element, das damit beginnt, unterschiedliche Buchstaben gehen zum ersten Element, das mit dem gesamten Zeichenfolgeninhalt beginnt). Wenn das aktuelle Element ein zugeordnetes Kontextmenü hat, wird mit Umschalt+F10 dieses Menü gestartet. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Für auswählbare Listenelemente toggelt die Leertaste ihre Auswahl, Umschalt+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, Strg+Pfeil bewegt sich, ohne auszuwählen, und Strg+Leertaste kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Strg+A könnte dafür als Tastenkürzel verwendet werden.

Wenn die Listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Etikett und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn eine Option oder ein Element innerhalb der Liste fokussiert ist, wird es als Nächstes angekündigt, gefolgt von einer Angabe der Position des Elements innerhalb der Liste, wenn der Screenreader dies unterstützt. Wenn sich der Fokus innerhalb der Liste bewegt, kündigt der Screenreader die relevanten Elemente an.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)-Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält.

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält den `id`-String des aktuell aktiven Elements innerhalb der Listbox. Wenn dies ein Optionselement ist, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert von nur einer `id` an, auch in einer multiselektierbaren Listbox. Wenn sich die `id` nicht auf einen DOM-Nachkommen der Listbox bezieht, dann muss diese `id` unter den IDs im Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgelistet sind, dürfen nicht auch in `aria-owns`-Attributen anderer Elemente aufgeführt sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Einzufügen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut enthalten und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut haben. Wenn `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut, und dieses muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht-leeren Stringwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Stringwert, der die Listbox identifiziert. Wenn es ein sichtbares Etikett gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Etikett zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Etikett gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Etikett einzuschließen. (Bemerkung: "labelled", mit zwei L, ist die korrekte Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Stringwert, der die Rolle der Listbox deutlicher identifiziert. Screenreader lesen diesen Wert häufig dem Benutzer nach dem Etikett vor (falls vorhanden), anstelle zu sagen "listbox".

### Tastaturinteraktionen

- Wenn eine Einzelwahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt, und es erfolgt keine automatische Änderung im Auswahlstatus.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Pfeil nach unten</kbd>

  : Verschiebt den Fokus zur nächsten Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Pfeil nach oben</kbd>

  : Verschiebt den Fokus zur vorherigen Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus zur ersten Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird dringend empfohlen für Listen mit mehr als fünf Optionen.

- <kbd>End</kbd>

  (Optional): Verschiebt den Fokus zur letzten Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird dringend empfohlen für Listen mit mehr als fünf Optionen.

- Type-ahead wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Zeichen eingeben: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
  - Mehrere Zeichen schnell hintereinander eingeben: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit der Zeichenfolge der eingegebenen Zeichen beginnt.

- **Mehrfachauswahl**: Autoren können eines von zwei Interaktionsmodellen implementieren, um Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt hält, während er durch die Liste navigiert, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gehalten werden, um zu vermeiden, dass Auswahlzustände verloren gehen.

  - Empfohlenes Auswahlmodell — das Halten von Modifikatortasten ist nicht notwendig:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlstatus der fokussierten Option.
    - <kbd>Umschalt + Pfeil nach unten</kbd> (Optional): Verschiebt den Fokus zur nächsten Option und toggelt deren ausgewählten Zustand.
    - <kbd>Umschalt + Pfeil nach oben</kbd> (Optional): Verschiebt den Fokus zur vorherigen Option und toggelt deren ausgewählten Zustand.
    - <kbd>Umschalt + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente vom zuletzt ausgewählten Element bis zum fokussierten Element.
    - <kbd>Strg + Umschalt + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional bewegt den Fokus zur ersten Option.
    - <kbd>Strg + Umschalt + End</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional bewegt den Fokus zur letzten Option.
    - <kbd>Strg + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzelwahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option abwählen, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt oder das Attribut vollständig entfernt wird, und das Aussehen der neu abgewählten Option ändern, um nicht ausgewählt zu erscheinen.
2. Die neu ausgewählte Option auswählen, indem `aria-selected="true"` auf die Option gesetzt wird und das Aussehen der neu ausgewählten Option verändert wird, um ausgewählt zu erscheinen.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert auf der Listbox auf die ID der neu ausgewählten Option aktualisieren.
4. Die optische Handhabung der Unschärfe, des Fokus und der ausgewählten Zustände der Option visuell bearbeiten.

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Leertaste</kbd> drückt, wenn die Option fokussiert ist, oder anderweitig den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Zustand der aktuell fokussierten Option umschalten, indem der Zustand von `aria-selected` auf true gesetzt wird, wenn er false war, oder auf false, wenn er true war.
2. Das Aussehen der Option ändern, um ihren ausgewählten Zustand widerzuspiegeln.
3. Den `aria-activedescendant`-Wert auf der Listbox auf die ID der Option aktualisieren, mit der der Benutzer gerade interagiert hat, auch wenn sie die Option abgewählt haben.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA lautet: Wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen, die Sie benötigen, bereits eingebaut nutzen können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie es. Das {{HTMLElement('select')}}-Element mit nachfolgenden {{HTMLElement('option')}}-Elementen behandelt alle erforderlichen Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelwahl-Listbox, die `aria-activedescendant` verwendet

Der folgende Codeausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<p id="listbox1label" role="label">Select a color:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
  onclick="return listItemClick(event);"
  onkeydown="return listItemKeyEvent(event);"
  onkeypress="return listItemKeyEvent(event);"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Green
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div>
  <div role="option" id="listbox1-4">Blue</div>
  <div role="option" id="listbox1-5">Violet</div>
  <div role="option" id="listbox1-6">Periwinkle</div>
</div>
```

Dies hätte einfacher mit den nativen HTML-{{HTMLElement('select')}}- und {{HTMLElement('label')}}-Elementen gehandhabt werden können.

```html
<label for="listbox1">Select a color:</label>
<select id="listbox1">
  <option selected>Green</option>
  <option>Orange</option>
  <option>Red</option>
  <option>Blue</option>
  <option>Violet</option>
  <option>Periwinkle</option>
</select>
```

### Weitere Beispiele

- [Scrollable Listbox Example](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelwahl-Listbox, die zum Offenbaren weiterer Optionen scrollt, ähnlich zu HTML-{{HTMLElement('select')}} mit `size`-Attribut größer als eins.
- [Listbox Example with Grouped Options](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelwahl-Listbox mit gruppierten Optionen, ähnlich zu HTML-{{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und Optionen gruppiert mit `optgroup`-Elementen.
- [Example Listboxes with Rearrangeable Options](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele sowohl für Einzel- als auch Mehrfachauswahl-Listboxen mit zugehörigen Werkzeugleisten, in denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren [den Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Stile für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Eigenschaft gesetzt werden.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften festgelegt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle angemessener sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-{{HTMLElement('select')}}-Element
- HTML-{{HTMLElement('label')}}-Element
- HTML-{{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA Role Model – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
