---
title: "ARIA: listbox-Rolle"
slug: Web/Accessibility/ARIA/Roles/listbox_role
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere Elemente auswählen kann, die statisch sind und, im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen, Bilder enthalten dürfen.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich wie das HTML-{{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML `select`-Element oder eine Gruppe von Radio-Buttons zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es viel Tastaturinteraktivität erfordert, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente diese Funktionalität kostenlos bieten.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste aktiviert wird, wird das erste Element in der Liste ausgewählt, wenn noch nichts anderes ausgewählt ist. Auf/Abwärts-Pfeile navigieren durch die Liste, und das Drücken von Shift + Auf/Abwärts-Pfeilen verschiebt und erweitert die Auswahl. Durch Eingabe eines oder mehrerer Buchstaben wird durch die Listenelemente navigiert (gleicher Buchstabe springt zu jedem Element, das damit beginnt, unterschiedliche Buchstaben gehen zum ersten Element, das mit dieser gesamten Zeichenkette beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, wird mit Shift+F10 dieses Menü geöffnet. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) umzuschalten. Für auswählbare Listenelemente schaltet die Leertaste deren Auswahl um, Shift+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, mit Ctrl+Pfeil wird ohne Auswahl verschoben, und mit Ctrl+Leertaste können nicht zusammenhängende Elemente ausgewählt werden. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Ctrl+A könnte als Tastenkombination dafür verwendet werden.

Wenn die Listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Label und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn eine Option oder ein Element innerhalb der Liste fokussiert ist, wird es als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements innerhalb der Liste, wenn der Screenreader dies unterstützt. Wenn sich der Fokus innerhalb der Liste bewegt, kündigt der Screenreader die relevanten Elemente an.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, wird [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) weggelassen.
- [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Hält die `id`-Zeichenkette des derzeit aktiven Elements innerhalb der Listbox. Wenn dies ein Option-Element ist, dann wäre dies die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert von nur einer `id`, selbst in einer multiselectable Listbox. Wenn sich die `id` nicht auf einen DOM-Nachkommen der Listbox bezieht, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgeführt sind, dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attributen anderer Elemente aufgeführt werden.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)

  - : Einschließen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut haben und entweder auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, sollten _kein_ [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut haben. Wenn `false` oder weggelassen, benötigt nur die derzeit ausgewählte Option, wenn eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)

  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht leeren Zeichenkettenwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Eine menschenlesbare Zeichenkette, die die Listbox identifiziert. Wenn ein sichtbares Label vorhanden ist, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn kein sichtbares Label vorhanden ist, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden, um ein Label einzuschließen. (Hinweis: "labelled", mit zwei L's, ist die korrekte Schreibweise gemäß den Konventionen der Zugriffs-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Eine menschenlesbare Zeichenkette, die die Rolle der Listbox klarer identifiziert. Screenreader lesen diesen Wert häufig dem Benutzer vor, nachdem sie das Label (falls vorhanden) gelesen haben, anstelle "listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Listbox für Einzel-Auswahl Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Listbox für Mehrfach-Auswahl den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung des Auswahldienstes.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option in der Liste gesetzt, die ausgewählt ist.

- <kbd>Abwärts-Pfeil</kbd>

  : Verschiebt den Fokus auf die nächste Option. Optional kann in einer Listbox für Einzel-Auswahl die Auswahl ebenfalls mit dem Fokus verschoben werden.

- <kbd>Aufwärts-Pfeil</kbd>

  : Verschiebt den Fokus auf die vorherige Option. Optional kann in einer Listbox für Einzel-Auswahl die Auswahl ebenfalls mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus auf die erste Option. Optional kann in einer Listbox für Einzel-Auswahl die Auswahl ebenfalls mit dem Fokus verschoben werden. Die Unterstützung dieses Schlüssels wird für Listen mit mehr als fünf Optionen stark empfohlen.

- <kbd>End</kbd>

  (Optional): Verschiebt den Fokus auf die letzte Option. Optional kann in einer Listbox für Einzel-Auswahl die Auswahl ebenfalls mit dem Fokus verschoben werden. Die Unterstützung dieses Schlüssels wird für Listen mit mehr als fünf Optionen stark empfohlen.

- Vorauswahl durch Eingabe ist für alle Listboxen empfohlen, besonders für solche mit mehr als sieben Optionen:

  - Ein Zeichen eingeben: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
  - Mehrere Zeichen in schneller Folge eingeben: Der Fokus bewegt sich zum nächsten Element mit einem Namen, das mit der Folge von eingegebenen Zeichen beginnt.

- **Mehrfachauswahl**: Autoren können entweder eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifizierertaste wie

  <kbd>Shift</kbd>

  oder

  <kbd>Control</kbd>

  hält, während er durch die Liste navigiert, oder ein alternatives Modell, das erfordert, dass Modifizierschlüssel gehalten werden, um zu vermeiden, dass Auswahldienste verloren gehen.

  - Empfohlenes Auswahlmodell — das Halten von Modifikatorschlüsseln ist nicht notwendig:

    - <kbd>Leertaste</kbd>

      : ändert den Auswahldienst der fokussierten Option.

    - <kbd>Shift + Abwärts-Pfeil</kbd>

      (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der nächsten Option um.

    - <kbd>Shift + Aufwärts-Pfeil</kbd>

      (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der vorherigen Option um.

    - <kbd>Shift + Leertaste</kbd>

      (Optional): Wählt zusammenhängende Elemente vom zuletzt ausgewählten Element bis zum fokussierten Element aus.

    - <kbd>Control + Shift + Home</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional kann der Fokus zur ersten Option verschoben werden.

    - <kbd>Control + Shift + End</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional kann der Fokus zur letzten Option verschoben werden.

    - <kbd>Control + A</kbd>

      (Optional): Wählt alle Optionen in der Liste aus. Optional kann, wenn alle Optionen ausgewählt sind, auch alle Optionen abgewählt werden.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Listbox für Einzel-Auswahl

Wenn der Benutzer eine Option auswählt, muss folgendes passieren:

1. Die zuvor ausgewählte Option wird abgewählt, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` gesetzt oder das Attribut ganz entfernt wird, was das Erscheinungsbild der neu abgewählten Option ändert, um nicht ausgewählt zu erscheinen.
2. Die neu ausgewählte Option wird ausgewählt, indem `aria-selected="true"` auf die Option gesetzt wird und das Erscheinungsbild der neu ausgewählten Option ändert, um ausgewählt zu erscheinen.
3. Aktualisieren des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Werts in der Listbox auf die ID der neu ausgewählten Option
4. Visuelles Handhaben der Unschärfe, des Fokus und der auswählten Zustände der Option

#### Umschalten des Zustands einer Option in einer Listbox für Mehrfachauswahl

Wenn der Benutzer auf eine Option klickt, die <kbd>Leertaste</kbd> drückt, wenn er auf eine Option fokussiert ist, oder anderweitig den Zustand einer Option umschaltet, muss folgendes passieren:

1. Umschalten des [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Zustands der derzeit fokussierten Option, Ändern des Zustands von `aria-selected` in wahr, wenn es falsch ist oder in falsch, wenn es wahr ist.
2. Ändern des Erscheinungsbilds der Option, um den ausgewählten Zustand widerzuspiegeln
3. Aktualisieren des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Werts in der Listbox auf die ID der Option, mit der der Benutzer gerade interagiert hat, selbst wenn er die Option umgeschaltet hat, um sie nicht mehr auszuwählen.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist: Wenn Sie eine native Funktion mit der Semantik und dem Verhalten, die Sie benötigen, verwenden können, anstatt ein Element umzufunktionieren und **hinzuzufügender** ARIA-Rolle, Zustand oder Eigenschaft, um es zugänglich zu machen, dann tun Sie dies. Das {{HTMLElement('select')}}-Element mit nachfolgenden {{HTMLElement('option')}}-Elementen handhabt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Listbox für Einzelauswahl, die `aria-activedescendant` verwendet

Der folgende Code-Ausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<p id="listbox1label" role="label">Wählen Sie eine Farbe:</p>
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

Dies hätte einfacher mit den nativen HTML-{{HTMLElement('select')}}- und {{HTMLElement('label')}}-Elementen behandelt werden können.

```html
<label for="listbox1">Wählen Sie eine Farbe:</label>
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

- [Beispiel für eine scrollbar Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Listbox für Einzelauswahl, die scrollt, um mehr Optionen anzuzeigen, ähnlich dem HTML-{{HTMLElement('select')}} mit `size`-Attribut größer als eins.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Listbox für Einzelauswahl mit gruppierten Optionen, ähnlich dem HTML-{{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiele für Listboxen mit rearrangierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl Einzelauswahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Symbolleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturbedienbar zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Styling für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z. B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut gesetzt haben.
- Wenn eines oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften festgelegt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen validen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)-Rolle geeigneter sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA-Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
