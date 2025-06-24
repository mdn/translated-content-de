---
title: "ARIA: listbox Rolle"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `listbox` Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann. Im Gegensatz zu HTML {{HTMLElement('select')}}-Elementen können diese Bilder enthalten.

## Beschreibung

Die `listbox` Rolle dient dazu, ein Element zu identifizieren, das eine Liste erzeugt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML {{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element oder eine Gruppe von Radio-Buttons zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es bei der Tastaturinteraktion viel zu tun gibt, um den Fokus für alle Nachkommen zu verwalten. Native HTML-Elemente bieten diese Funktionalität von Haus aus.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert von `vertical`.

Wenn zu einer Liste getabbt wird, wird das erste Element in der Liste ausgewählt, falls noch nichts anderes ausgewählt ist. Auf-/Ab-Pfeile navigieren durch die Liste, und das Drücken der Umschalttaste + Auf-/Ab-Pfeiltasten wird die Auswahl bewegen und erweitern. Das Eintippen eines oder mehrerer Buchstaben wird durch die Listenelemente navigieren (derselbe Buchstabe springt zu jedem Element, das damit beginnt, unterschiedliche Buchstaben springen zum ersten Element, das mit diesem gesamten String beginnt). Wenn das aktuelle Element ein zugeordnetes Kontextmenü hat, wird Umschalt+F10 dieses Menü öffnen. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Bei auswählbaren Listenelementen schaltet die Leertaste deren Auswahl um, Umschalt+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, Strg+Pfeil bewegt sich ohne Auswahl, und Strg+Leertaste kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Strg+A könnte als Shortcut dafür verwendet werden.

Wenn die listbox-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader beim Fokuserhalt das Label und die Rolle der Listbox an. Wenn eine Option oder ein Element innerhalb der Liste fokussiert wird, wird es als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements innerhalb der Liste, sofern der Screenreader dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, kündigt der Screenreader die relevanten Elemente an.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- Rolle [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Ein Abschnitt, der `listitem` Elemente enthält.

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält den `id`-String des aktuell aktiven Elements innerhalb der Listbox. Wenn es sich um ein Optionselement handelt, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Wert von `true` hat oder nicht. Nimmt den Wert von nur einer `id`, selbst in einer Listbox mit mehreren Auswahlmöglichkeiten. Wenn die `id` nicht auf einen DOM-Nachkommen der Listbox verweist, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine leerzeichengetrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgelistet sind, können auch nicht in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributen anderer Elemente aufgelistet sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Fügen Sie ein und setzen Sie auf `true`, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut enthalten und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut haben. Wenn `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht leeren Stringwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Stringwert, der die Listbox identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer leerzeichengetrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Label gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Label einzuschließen. (Hinweis: "labelled" mit zwei L ist die korrekte Schreibweise gemäß den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Stringwert, der die Rolle der Listbox deutlicher identifiziert. Screenreader lesen diesen Wert oft dem Benutzer vor, nachdem sie das Label (falls vorhanden) gelesen haben, anstelle von "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzelauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Empfang des Fokus ausgewählt war, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Empfang des Fokus ausgewählt war, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung im Auswahlzustand.
  - Wenn eine oder mehrere Optionen vor dem Empfang des Fokus ausgewählt sind, wird der Fokus auf die erste ausgewählte Option gesetzt.

- <kbd>Nach-unten-Pfeil</kbd>

  : Bewegt den Fokus zur nächsten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Nach-oben-Pfeil</kbd>

  : Bewegt den Fokus zur vorherigen Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl auch mit dem Fokus bewegt werden.

- <kbd>Pos1</kbd>

  (Optional): Bewegt den Fokus zur ersten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen stark empfohlen.

- <kbd>Ende</kbd>

  (Optional): Bewegt den Fokus zur letzten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl auch mit dem Fokus bewegt werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen stark empfohlen.

- Typen vorwärts ist für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Ein Zeichen eingeben: Der Fokus bewegt sich zum nächsten Element, dessen Name mit dem eingegebenen Zeichen beginnt.
  - Mehrere Zeichen schnell hintereinander eingeben: Der Fokus bewegt sich zum nächsten Element, dessen Name mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können entweder eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt hält, während er die Liste durchläuft, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gehalten werden, um den Auswahlzustand beizubehalten.
  - Empfohlenes Auswahlmodell — das Halten von Modifikatortasten ist nicht notwendig:
    - <kbd>Leertaste</kbd>: ändert den Auswahlszustand der fokussierten Option.
    - <kbd>Umschalt + Nach-unten-Pfeil</kbd> (Optional): Bewegt den Fokus und schaltet den ausgewählten Zustand der nächsten Option um.
    - <kbd>Umschalt + Nach-oben-Pfeil</kbd> (Optional): Bewegt den Fokus und schaltet den ausgewählten Zustand der vorherigen Option um.
    - <kbd>Umschalt + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente von dem zuletzt ausgewählten Element bis zum fokussierten Element aus.
    - <kbd>Strg + Umschalt + Pos1</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional bewegt sich der Fokus zur ersten Option.
    - <kbd>Strg + Umschalt + Ende</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional bewegt sich der Fokus zur letzten Option.
    - <kbd>Strg + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzelauswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Wählen Sie die zuvor ausgewählte Option ab, indem Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` setzen oder das Attribut vollständig entfernen, um das Erscheinungsbild der neu abgewählten Option so zu ändern, dass sie nicht ausgewählt aussieht.
2. Wählen Sie die neu ausgewählte Option aus, indem Sie `aria-selected="true"` für die Option setzen und das Erscheinungsbild der neu ausgewählten Option ändern, um sie ausgewählt erscheinen zu lassen.
3. Aktualisieren Sie den Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox mit der ID der neu ausgewählten Option.
4. Behandeln Sie visuell den Blur-, Fokus- und Auswahlszustand der Option.

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Leertaste</kbd> drückt, während er sich auf einer Option befindet, oder anderweitig den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Schalten Sie den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand der aktuell fokussierten Option um, ändern Sie den Zustand von `aria-selected` auf true, wenn er false war, oder auf false, wenn er true war.
2. Ändern Sie das Erscheinungsbild der Option, um ihren ausgewählten Zustand widerzuspiegeln.
3. Aktualisieren Sie den Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox auf die ID der Option, mit der der Benutzer gerade interagiert hat, auch wenn er die Option umgeschaltet hat, so dass sie nicht ausgewählt ist.

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA ist, dass, wenn Sie eine native Funktion mit der erforderlichen Semantik und dem erforderlichen Verhalten verwenden können, anstatt ein Element umzuwidmen und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Das {{HTMLElement('select')}}-Element mit nachfolgenden {{HTMLElement('option')}}-Elementen bewältigt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelauswahl-Listbox, die `aria-activedescendant` verwendet

Der unten stehende Schnipsel, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

Diese Aufgabe könnte einfacher mit den nativen HTML {{HTMLElement('select')}} und {{HTMLElement('label')}}-Elementen gelöst werden.

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

- [Beispiel einer scrollbaren Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelauswahl-Listbox, die scrollt, um weitere Optionen anzeigen zu können, ähnlich dem HTML {{HTMLElement('select')}} mit einem `size`-Attribut größer als eins.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelauswahl-Listbox mit gruppierten Optionen, ähnlich dem HTML {{HTMLElement('select')}} mit dem Attribut `size` auf größer als `"1"` gesetzt und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiel-Listboxen mit umsortierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl Einzelauswahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Werkzeugleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus aller Nachkommen](https://w3c.github.io/aria/#managingfocus) dieser Rolle verwalten.
- Es wird empfohlen, dass Autoren eine unterschiedliche Gestaltung für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut gesetzt sein.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen validen Grund gibt, die Listbox zu [erweitern](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle angemessener sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
