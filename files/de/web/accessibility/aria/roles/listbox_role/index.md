---
title: "ARIA: listbox-Rolle"
slug: Web/Accessibility/ARIA/Roles/listbox_role
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{AccessibilitySidebar}}

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann und die im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML-{{HTMLElement('select')}}-Element. Anders als {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) ist und die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-select-Element oder eine Gruppe von Optionsfeldern zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es eine Menge Tastaturinteraktivität gibt, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente diese Funktionalität für Sie kostenlos bieten.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `vertical`.

Wenn eine Liste angeklickt wird, wird das erste Element in der Liste ausgewählt, wenn nichts anderes bereits ausgewählt wurde. Durch Drücken der Hoch-/Runter-Pfeiltasten navigiert man durch die Liste, und durch Drücken der Tasten Umschalt + Hoch/Runter werden die Auswahl verschoben und erweitert. Das Eingeben eines oder mehrerer Buchstaben navigiert durch die Listenelemente (derselbe Buchstabe geht zu jedem Element, das damit beginnt, verschiedene Buchstaben gehen zum ersten Element, das mit diesem gesamten String beginnt). Wenn das aktuelle Element ein zugeordnetes Kontextmenü hat, wird mit Umschalt+F10 dieses Menü gestartet. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) umzuschalten. Bei auswählbaren Listenelementen schaltet die Leertaste deren Auswahl um, Umschalt+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, Strg+Pfeil bewegt sich ohne Auswahl, und Strg+Leertaste kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Strg+A könnte als Tastenkombination dafür verwendet werden.

Wenn die Rollliste zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, geben Bildschirmleser das Etikett und die Rolle der Listbox bekannt, wenn sie den Fokus erhält. Wenn ein Element innerhalb der Liste fokussiert wird, wird es als nächstes bekannt gegeben, gefolgt von einer Angabe der Position des Elements in der Liste, falls der Bildschirmleser dies unterstützt. Wenn der Fokus innerhalb der Liste verschoben wird, gibt der Bildschirmleser die relevanten Elemente bekannt.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält.

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Hält die `id`-Zeichenfolge des derzeit aktiven Elements innerhalb der Listbox. Wenn dies ein Optionselement ist, dann wäre das die `id` des zuletzt interagierten Optionselements, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Wert von `true` hat oder nicht. Nimmt den Wert von nur einer `id`, selbst in einer multiauswählbaren Listbox. Wenn sich die `id` nicht auf einen DOM-Nachfolger der Listbox bezieht, muss diese `id` unter den ID's im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgeführt sind, dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attributen anderer Elemente aufgeführt werden.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)

  - : Einbeziehen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut beinhalten und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut haben. Wenn `false` oder weggelassen, benötigt nur die derzeit ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)

  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht leeren Zeichenfolgenwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist sonst funktionsfähig.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Ein menschlich lesbarer Zeichenfolgenwert, der die Listbox identifiziert. Wenn es ein sichtbares Etikett gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um auf dieses Etikett zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Etikett gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden, um ein Etikett einzuschließen. (Hinweis: "labelled", mit zwei L, ist die korrekte Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Ein menschlich lesbarer Zeichenfolgenwert, der die Rolle der Listbox deutlicher identifiziert. Bildschirmleser lesen diesen Wert oft dem Benutzer nach dem Etikett (falls vorhanden) vor, anstatt "listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzelwahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung des Auswahlzustands.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Nach-unten-Pfeil</kbd>

  : Verschiebt den Fokus auf die nächste Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Nach-oben-Pfeil</kbd>

  : Verschiebt den Fokus auf die vorherige Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus auf die erste Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird dringend empfohlen für Listen mit mehr als fünf Optionen.

- <kbd>End</kbd>

  (Optional): Verschiebt den Fokus auf die letzte Option. Optional kann in einer Einzelwahl-Listbox die Auswahl auch mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird dringend empfohlen für Listen mit mehr als fünf Optionen.

- Vorherige Eingabe wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Tippen Sie einen Buchstaben: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit dem getippten Buchstaben beginnt.
  - Tippen Sie mehrere Buchstaben schnell nacheinander: Der Fokus bewegt sich zum nächsten Element, dessen Name mit der getippten Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt hält, während er durch die Liste navigiert, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gedrückt gehalten werden, während man navigiert, um zu verhindern, dass Auswahlzustände verloren gehen.

  - Empfohlenes Auswahlmodell — Halten von Modifikatortasten ist nicht notwendig:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlzustand der fokussierten Option.
    - <kbd>Umschalt + Nach-unten-Pfeil</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der nächsten Option um.
    - <kbd>Umschalt + Nach-oben-Pfeil</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der vorherigen Option um.
    - <kbd>Umschalt + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente vom zuletzt ausgewählten Element bis zum fokussierten Element aus.
    - <kbd>Control + Umschalt + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional verschiebt sich der Fokus auf die erste Option.
    - <kbd>Control + Umschalt + End</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional verschiebt sich der Fokus auf die letzte Option.
    - <kbd>Control + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzelwahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Deaktivieren Sie die zuvor ausgewählte Option, indem Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` setzen oder das Attribut ganz entfernen, und ändern Sie das Erscheinungsbild der neu nicht ausgewählten Option so, dass sie nicht ausgewählt erscheint.
2. Wählen Sie die neu ausgewählte Option aus, indem Sie `aria-selected="true"` auf die Option setzen und das Erscheinungsbild der neu ausgewählten Option so ändern, dass sie ausgewählt erscheint.
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Wert auf die ID der neu ausgewählten Option.
4. Behandeln Sie visuell die Zustände unscharf, fokussiert und ausgewählt der Option.

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, die Leertaste drückt, während eine Option fokussiert ist, oder anderweitig den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Schalten Sie den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Zustand der derzeit fokussierten Option um, indem Sie den Zustand von aria-selected auf true ändern, wenn er false war, oder auf false, wenn er true war.
2. Ändern Sie das Erscheinungsbild der Option, um ihren ausgewählten Zustand widerzuspiegeln.
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Wert auf die ID der Option, mit der der Benutzer gerade interagiert hat, selbst wenn die Option auf nicht ausgewählt umgestellt wurde.

> [!NOTE]
> Die erste Regel der Verwendung von ARIA ist, wenn Sie eine native Funktion mit den erforderlichen semantischen und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Das {{HTMLElement('select')}}-Element mit nachfahrenden {{HTMLElement('option')}}-Elementen behandelt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelwahl-Listbox, die `aria-activedescendant` verwendet

Der folgende Ausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

Dies könnte leichter mit den nativen HTML-{{HTMLElement('select')}}- und {{HTMLElement('label')}}-Elementen gehandhabt werden.

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

- [Scrollbare Listbox-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelwahl-Listbox, die scrollt, um mehr Optionen anzuzeigen, ähnlich einem HTML-{{HTMLElement('select')}}-Element mit `size`-Attribut größer als eins.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelwahl-Listbox mit gruppierten Optionen, ähnlich einem HTML-{{HTMLElement('select')}}-Element mit der `size`-Attributgröße größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiel-Listboxen mit umstellbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele sowohl für Einzelwahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Symbolleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren eine unterschiedliche Gestaltung für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Eigenschaft haben.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA-Best-Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox [zu erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)-Rolle angemessener sein.

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
- [ARIA-Best-Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA-Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
