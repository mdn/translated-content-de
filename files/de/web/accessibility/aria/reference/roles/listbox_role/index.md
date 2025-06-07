---
title: "ARIA: listbox-Rolle"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann, die im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu kennzeichnen, das eine Liste erzeugt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML-{{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}}-Elementen kann eine Listbox Bilder enthalten. Listboxen enthalten untergeordnete Elemente, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum untergeordnete Elemente enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element oder eine Gruppe von Optionsfeldern zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es viel Tastaturinteraktivität erfordert, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente bieten diese Funktionalität kostenlos für Sie an.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste fokussiert wird, wird das erste Element in der Liste ausgewählt, falls noch nichts anderes ausgewählt ist. Pfeiltasten oben/unten navigieren durch die Liste, und das Drücken von Shift + Pfeil oben/unten verschiebt und erweitert die Auswahl. Durch Eingabe eines oder mehrerer Buchstaben wird durch die Listenelemente navigiert (gleicher Buchstabe geht zu jedem Element, das damit beginnt, verschiedene Buchstaben gehen zum ersten Element, das mit dem gesamten Zeichenfolgen beginnt). Hat das aktuelle Element ein zugeordnetes Kontextmenü, öffnet Shift+F10 dieses Menü. Sind Listenelemente prüfbar, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Bei auswählbaren Listenelementen toggelt die Leertaste deren Auswahl, Shift+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, Ctrl+Pfeil bewegt ohne auszuwählen, und Ctrl+Leertaste kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Ctrl+A könnte als Tastenkombination dafür verwendet werden.

Wenn die listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Bildschirmlesegeräte das Label und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn innerhalb der Liste ein Fokus auf eine Option oder ein Element gesetzt wird, wird dies als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements innerhalb der Liste, falls der Bildschirmleser dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, kündigt der Bildschirmleser die relevanten Elemente an.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Zugehörige Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)-Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle nicht ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Hält den `id`-String des aktuell aktiven Elements innerhalb der Listbox. Wenn das ein Optionselement ist, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert von nur einer `id`, selbst in einer mehr auswählbaren Listbox. Wenn die `id` nicht auf einen DOM-Nachkommen der Listbox verweist, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgeführt sind, dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributen anderer Elemente aufgeführt sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Einbeziehen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut enthalten und auf `true` oder `false` gesetzt werden. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut haben. Wenn `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, wenn eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut, und es muss auf `true` gesetzt werden.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht leeren Stringwert ausgewählt sein muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Stringwert, der die Listbox identifiziert. Wenn ein sichtbares Label vorhanden ist, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn kein sichtbares Label vorhanden ist, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Label einzuschließen. (Hinweis: "labelled", mit zwei L's, ist die korrekte Schreibweise basierend auf den Konventionen der Zugriffs-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Stringwert, der die Rolle der Listbox klarer identifiziert. Bildschirmlesegeräte lesen diesen Wert häufig dem Benutzer vor, nachdem das Label (falls vorhanden) vorgelesen wurde, anstatt "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine einfach wählbare Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine mehrfach wählbare Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt, und es gibt keine automatische Änderung des Auswahlstatus.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Pfeil nach unten</kbd>

  : Verschiebt den Fokus auf die nächste Option. Optional kann in einer einfach wählbaren Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Pfeil nach oben</kbd>

  : Verschiebt den Fokus auf die vorherige Option. Optional kann in einer einfach wählbaren Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus auf die erste Option. Optional kann in einer einfach wählbaren Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- <kbd>Ende</kbd>

  (Optional): Verschiebt den Fokus auf die letzte Option. Optional kann in einer einfach wählbaren Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- Type-ahead wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Einen Buchstaben eingeben: Der Fokus bewegt sich auf das nächste Element mit einem Namen, der mit dem eingegebenen Buchstaben beginnt.
  - Mehrere Zeichen in schneller Folge eingeben: Der Fokus bewegt sich auf das nächste Element mit einem Namen, der mit der getippten Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können entweder ein empfohlene Interaktionsmodell implementieren, das nicht erfordert, dass der Benutzer eine Modifikationstaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> hält, während er durch die Liste navigiert, oder ein alternatives Modell, das Modifikationstasten erfordert, um beim Navigieren die Auswahlzustände nicht zu verlieren.

  - Empfohlenes Auswahlsmodell — das Halten von Modifikationstasten ist nicht erforderlich:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlstatus der fokussierten Option.
    - <kbd>Shift + Pfeil nach unten</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der nächsten Option um.
    - <kbd>Shift + Pfeil nach oben</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der vorherigen Option um.
    - <kbd>Shift + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente von dem zuletzt ausgewählten Element bis zu dem fokussierten Element aus.
    - <kbd>Control + Shift + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional bewegt sich der Fokus zur ersten Option.
    - <kbd>Control + Shift + Ende</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional bewegt sich der Fokus zur letzten Option.
    - <kbd>Control + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer einzeiligen Auswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option abwählen, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt oder das Attribut ganz entfernt wird, wodurch das Erscheinungsbild der neu abgewählten Option geändert wird, um nicht ausgewählt zu erscheinen.
2. Die neu ausgewählte Option auswählen, indem `aria-selected="true"` auf die Option gesetzt wird und das Erscheinungsbild der neu ausgewählten Option geändert wird, um ausgewählt zu erscheinen.
3. Den Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox auf die ID der neu ausgewählten Option aktualisieren.
4. Die Unschärfe, den Fokus und die ausgewählten Zustände der Option visuell behandeln.

#### Umschalten des Zustands einer Option in einer mehrfach auswählbaren Listbox

Wenn der Benutzer auf eine Option klickt, die <kbd>Leertaste</kbd> drückt, während eine Option fokussiert ist, oder anderweitig den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Zustand der aktuell fokussierten Option umschalten, indem der Zustand von `aria-selected` auf true geändert wird, wenn es false war, oder auf false, wenn es true war.
2. Das Erscheinungsbild der Option ändern, um ihren ausgewählten Zustand widerzuspiegeln.
3. Den Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox auf die ID der Option aktualisieren, mit der der Benutzer gerade interagiert hat, selbst wenn er die Option abgewählt hat.

> [!NOTE]
> Die erste Regel der Verwendung von ARIA ist, dass Sie, wenn Sie ein natives Feature mit den erforderlichen Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstelle ein Element umzupurpieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Das {{HTMLElement('select')}}-Element mit nachfolgenden {{HTMLElement('option')}}-Elementen behandelt alle erforderlichen Interaktionen von Natur aus.

## Beispiele

### Beispiel 1: Eine einzeilig auswählbare Listbox, die `aria-activedescendant` verwendet

Der unten stehende Ausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode integriert wird.

```html
<p id="listbox1label" role="label">Select a color:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
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

```js
const listbox = document.getElementById("listbox1");
listbox.addEventListener("click", listItemClick);
listbox.addEventListener("keydown", listItemKeyEvent);
listbox.addEventListener("keypress", listItemKeyEvent);
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

- [Beispiel für eine scrollbare Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzeilig auswählbare Listbox, die scrollt, um mehr Optionen anzuzeigen, ähnlich wie HTML {{HTMLElement('select')}} mit einem `size`-Attribut größer als eins.
- [Beispiel für eine Listbox mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzeilig auswählbare Listbox mit gruppierten Optionen, ähnlich wie HTML {{HTMLElement('select')}} mit dem Attribut `size` auf größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiel für Listboxen mit umarrangierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl einzeilig als auch mehrfach auswählbare Listboxen mit begleitenden Werkzeugleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus verwalten](https://w3c.github.io/aria/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Stile für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z. B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut gesetzt haben.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Beste Praktiken](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle angemessener sein.

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
- [ARIA Beste Praktiken – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
