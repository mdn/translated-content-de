---
title: "ARIA: listbox-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann. Im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen können sie Bilder enthalten.

## Beschreibung

Die `listbox`-Rolle dient dazu, ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML-{{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, welche wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element oder eine Gruppe von Optionsfeldern zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da viel Tastaturinteraktivität erforderlich ist, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente bieten Ihnen diese Funktionalität kostenlos.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste fokussiert wird, wird das erste Element in der Liste ausgewählt, falls noch nichts anderes ausgewählt ist. Auf-/Abwärtspfeile navigieren durch die Liste, und durch Drücken von Shift + Auf-/Abwärtspfeilen wird die Auswahl verschoben und erweitert. Das Eingeben eines oder mehrerer Buchstaben navigiert durch die Listenelemente (derselbe Buchstabe geht zu jedem Element, das damit beginnt, unterschiedliche Buchstaben gehen zum ersten Element, das mit dieser ganzen Zeichenfolge beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, wird mit Shift+F10 dieses Menü gestartet. Sind Listenelemente auswählbar, kann die Leertaste verwendet werden, um [Checkboxen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Bei auswählbaren Listenelementen wird mit der Leertaste ihre Auswahl umgeschaltet, mit Shift+Leertaste können zusammenhängende Elemente ausgewählt werden, mit Strg+Pfeil wird ohne Auswahl verschoben und mit Strg+Leertaste können nicht zusammenhängende Elemente ausgewählt werden. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Strg+A könnte als Tastenkombination dafür verwendet werden.

Wenn die Listbox-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Label und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn ein Option oder Element innerhalb der Liste fokussiert ist, wird dies als Nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements in der Liste, falls der Screenreader dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, kündigt der Screenreader die relevanten Elemente an.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält die `id`-Zeichenkette des derzeit aktiven Elements innerhalb der Listbox. Wenn dies ein Option-Element ist, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert nur einer `id` an, selbst in einer multiselektierbaren Listbox. Wenn die `id` sich nicht auf einen DOM-Nachkommen der Listbox bezieht, dann muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgelistet sind, können nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributen anderer Elemente aufgelistet sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Einfügen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut inklusive haben und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut haben. Wenn `false` oder weggelassen, braucht nur die derzeit ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nichtleeren Zeichenfolgenwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder abgewählt sind, aber die Listbox ist sonst funktionsfähig.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Zeichenfolgenwert, der die Listbox identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Label gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Label einzuschließen. (Hinweis: "labelled", mit zwei L, ist die korrekte Schreibweise basierend auf den Konventionen der Zugriffs-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die Rolle der Listbox klarer identifiziert. Screenreader lesen diesen Wert oft dem Benutzer vor, nachdem sie das Label (falls vorhanden) vorgelesen haben, anstatt "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzel-Auswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Fokuserhalt der Listbox ausgewählt ist, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option vor dem Fokuserhalt der Listbox ausgewählt ist, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfach-Auswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Fokuserhalt der Listbox ausgewählt ist, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung des Auswahlstatus.
  - Wenn eine oder mehrere Optionen vor dem Fokuserhalt der Listbox ausgewählt sind, wird der Fokus auf die erste in der Liste ausgewählte Option gesetzt.

- <kbd>Abwärtspfeil</kbd>

  : Bewegt den Fokus zur nächsten Option. Optional kann bei einer Einzel-Auswahl-Listbox die Auswahl mit dem Fokus mitbewegt werden.

- <kbd>Aufwärtspfeil</kbd>

  : Bewegt den Fokus zur vorherigen Option. Optional kann bei einer Einzel-Auswahl-Listbox die Auswahl mit dem Fokus mitbewegt werden.

- <kbd>Home</kbd>

  (Optional): Bewegt den Fokus auf die erste Option. Optional kann bei einer Einzel-Auswahl-Listbox die Auswahl mit dem Fokus mitbewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- <kbd>Ende</kbd>

  (Optional): Bewegt den Fokus auf die letzte Option. Optional kann bei einer Einzel-Auswahl-Listbox die Auswahl mit dem Fokus mitbewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- Vorauswahl ist für alle Listboxen zu empfehlen, insbesondere diejenigen mit mehr als sieben Optionen:

  - Geben Sie ein Zeichen ein: Der Fokus bewegt sich zum nächsten Element, dessen Name mit dem eingegebenen Zeichen beginnt.
  - Geben Sie schnell hintereinander mehrere Zeichen ein: Der Fokus bewegt sich zum nächsten Element, das mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können entweder eines von zwei Interaktionsmodellen zur Unterstützung der Mehrfachauswahl implementieren: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> während der Navigation in der Liste gedrückt hält, oder ein alternatives Modell, das Modifikatortasten während der Navigation erfordert, um zu vermeiden, den Auswahlsenkenverlust zu vermeiden.

  - Empfohlenes Auswahlmodell — das Drücken von Modifikatortasten ist nicht notwendig:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlstatus der fokussierten Option.
    - <kbd>Shift + Abwärtspfeil</kbd> (Optional): Bewegt den Fokus und wechselt den ausgewählten Status der nächsten Option.
    - <kbd>Shift + Aufwärtspfeil</kbd> (Optional): Bewegt den Fokus und wechselt den ausgewählten Status der vorherigen Option.
    - <kbd>Shift + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente vom zuletzt ausgewählten Element bis zum fokussierten Element aus.
    - <kbd>Control + Shift + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional bewegt sich der Fokus auf die erste Option.
    - <kbd>Control + Shift + Ende</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional bewegt sich der Fokus auf die letzte Option.
    - <kbd>Control + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzel-Auswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option abwählen, [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` setzen oder das Attribut ganz entfernen, das Erscheinungsbild der neu abgewählten Option so ändern, dass sie nicht ausgewählt erscheint.
2. Die neu ausgewählte Option auswählen, `aria-selected="true"` auf die Option setzen und das Erscheinungsbild der neu ausgewählten Option so ändern, dass sie ausgewählt erscheint.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert in der Listbox auf die ID der neu ausgewählten Option aktualisieren.
4. Die visuelle Handhabung des Unschärfe-, Fokus- und Ausgewählt-Zustands der Option durchführen.

#### Umschalten des Status einer Option in einer Mehrfach-Auswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Leertaste</kbd> drückt, während er auf einer Option fokussiert ist, oder anderweitig den Status einer Option umschaltet, muss Folgendes geschehen:

1. Den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Status der derzeit fokussierten Option umschalten, den Status von `aria-selected` auf true ändern, wenn er false war, oder auf false ändern, wenn er true war.
2. Das Erscheinungsbild der Option ändern, um ihren ausgewählten Status widerzuspiegeln.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert der Listbox auf die ID der Option aktualisieren, mit der der Benutzer gerade interagiert hat, auch wenn sie den Status der Option auf nicht ausgewählt umgeschaltet haben.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie ein natives Feature mit den Semantiken und dem Verhalten verwenden können, die Sie benötigen, und es bereits integriert ist, anstatt ein Element neu zu nutzen und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies. Das {{HTMLElement('select')}}-Element mit untergeordneten {{HTMLElement('option')}}-Elementen behandelt alle erforderlichen Interaktionen von Haus aus.

## Beispiele

### Beispiel 1: Eine Einzel-Auswahl-Listbox, die `aria-activedescendant` verwendet

Der untenstehende Ausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

- [Beispiel für eine scrollbare Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzel-Auswahl-Listbox, die scrollt, um mehr Optionen anzuzeigen, ähnlich wie HTML {{HTMLElement('select')}} mit dem `size`-Attribut größer als eins.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzel-Auswahl-Listbox mit gruppierten Optionen, ähnlich wie HTML {{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und mit `optgroup`-Elementen gruppierten Optionen.
- [Beispiel-Listboxen mit umorganisierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl Einzel- als auch Mehrfach-Auswahl-Listboxen mit begleitenden Werkzeugleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Stile für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht-aktive Auswahl oft mit einer helleren Hintergrundfarbe gezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Eigenschaft gesetzt sein.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle geeigneter sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA-Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
