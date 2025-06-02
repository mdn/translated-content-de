---
title: "ARIA: listbox Rolle"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Die `listbox` Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann und die im Gegensatz zu HTML {{HTMLElement('select')}} Elementen Bilder enthalten können.

## Beschreibung

Die `listbox` Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML {{HTMLElement('select')}} Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxes enthalten Kinder, deren Rolle `option` ist oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML `select` Element oder eine Gruppe von Optionsfeldern zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es viel Tastaturinteraktivität erfordert, um den Fokus für alle Nachfolger zu verwalten, und nativen HTML-Elementen bieten diese Funktionalität von Haus aus.

Elemente mit der Rolle `listbox` haben implizit den [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert `vertical`.

Wenn auf eine Liste zugegriffen wird, wird das erste Element in der Liste ausgewählt, wenn noch nichts anderes ausgewählt wurde. Auf-/Ab-Pfeile navigieren durch die Liste, und das Drücken von Shift + Auf/Ab-Pfeilen verschiebt und erweitert die Auswahl. Durch Eingabe von einem oder mehreren Buchstaben wird durch die Listenelemente navigiert (gleicher Buchstabe geht zu jedem Element, das damit beginnt, unterschiedliche Buchstaben gehen zum ersten Element, das mit dieser gesamten Zeichenfolge beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, wird mit Shift+F10 dieses Menü geöffnet. Wenn Listenelemente prüfbar sind, kann der Raum verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Für auswählbare Listenelemente schaltet Space ihre Auswahl um, Shift+Space kann verwendet werden, um zusammenhängende Elemente auszuwählen, Ctrl+Pfeil bewegt sich ohne Auswahl, und Ctrl+Space kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, eine Checkbox, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Ctrl+A könnte als Tastenkombination dafür verwendet werden.

Wenn die `listbox` Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Bildschirmleser das Label und die Rolle der Listbox an, wenn sie in den Fokus gerät. Wenn im Inneren der Liste eine Option oder ein Element fokussiert wird, wird dies als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements in der Liste, wenn der Bildschirmleser dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, kündigt der Bildschirmleser die relevanten Elemente an.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle nicht ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle
  - : Ein Abschnitt mit `listitem` Elementen

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält die `id`-Zeichenfolge des aktuell aktiven Elements innerhalb der Listbox. Wenn es sich um ein Optionselement handelt, dann wäre das die `id` der zuletzt angesprochenen Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Wert von `true` oder nicht hat. Nimmt den Wert von nur einer `id`, auch in einer multiselektierbaren Listbox. Wenn die `id` nicht auf einen DOM-Nachfolger der Listbox verweist, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgelistet sind, dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributen anderer Elemente aufgelistet sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Einschließen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut enthalten und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut _nicht_ haben. Wenn `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, wenn eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein boolesches Attribut, das anzeigt, dass eine Option mit einem nicht leeren Zeichenfolgenwert ausgewählt sein muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Zeichenfolgenwert, der die Listbox identifiziert. Wenn es ein sichtbares Label gibt, sollte [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stattdessen verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Label gibt, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) stattdessen verwendet werden, um ein Label zu vergeben. (Hinweis: "labelled", mit zwei L's, ist die richtige Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die Rolle der Listbox klarer identifiziert. Bildschirmleser lesen diesen Wert oft dem Benutzer vor, nachdem sie das Label (falls vorhanden) gelesen haben, anstatt "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzelauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung des Auswahlzustands.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Abwärtspfeil</kbd>

  : Bewegt den Fokus zur nächsten Option. Optional kann in einer Einzelauswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden.

- <kbd>Aufwärtspfeil</kbd>

  : Bewegt den Fokus zur vorherigen Option. Optional kann in einer Einzelauswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Bewegt den Fokus zur ersten Option. Optional kann in einer Einzelauswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- <kbd>Ende</kbd>

  (Optional): Bewegt den Fokus zur letzten Option. Optional kann in einer Einzelauswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- Typ-Vorausschau wird für alle Listboxes empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Geben Sie ein Zeichen ein: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
  - Geben Sie mehrere Zeichen in schneller Folge ein: Der Fokus bewegt sich zum nächsten Element mit einem Namen, der mit der eingegebenen Zeichenkette beginnt.

- **Mehrfachauswahl**: Autoren können eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: Ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt hält, während er die Liste durchläuft, oder ein alternatives Modell, das erfordert, dass die Modifikatortasten während der Navigation gehalten werden, um zu vermeiden, dass Auswahlergebnisse verloren gehen.

  - Empfohlenes Auswahlmodell — das Halten von Modifikatortasten ist nicht erforderlich:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlzustand der fokussierten Option.
    - <kbd>Umschalt + Abwärtspfeil</kbd> (Optional): Bewegt den Fokus zur und erweitert den ausgewählten Zustand der nächsten Option.
    - <kbd>Umschalt + Aufwärtspfeil</kbd> (Optional): Bewegt den Fokus zur und erweitert den ausgewählten Zustand der vorherigen Option.
    - <kbd>Umschalt + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente von dem zuletzt ausgewählten Element bis zum fokussierten Element aus.
    - <kbd>Strg + Umschalt + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional verschiebt es auch den Fokus zur ersten Option.
    - <kbd>Strg + Umschalt + Ende</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional verschiebt es auch den Fokus zur letzten Option.
    - <kbd>Strg + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional kann es auch alle Optionen abwählen, wenn alle Optionen ausgewählt sind.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzelauswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die vorher ausgewählte Option deselektieren, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt oder das Attribut ganz entfernt wird, und das Aussehen der neu deselektierten Option ändern, um nicht ausgewählt auszusehen.
2. Die neu ausgewählte Option auswählen, indem `aria-selected="true"` auf der Option gesetzt wird und das Aussehen der neu ausgewählten Option geändert wird, um ausgewählt auszusehen.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Wert der Listbox auf die ID der neu ausgewählten Option aktualisieren
4. Optisch den Unschärfe-, Fokus- und ausgewählten Zustand der Option behandeln

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Leertaste</kbd> drückt, wenn er sich auf eine Option konzentriert, oder anderweitig den Zustand einer Option umschaltet, muss folgendes geschehen:

1. Den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand der derzeit fokussierten Option umschalten, indem der Zustand von `aria-selected` auf true gesetzt wird, wenn er false war, oder auf false, wenn er true war.
2. Das Aussehen der Option ändern, um ihren ausgewählten Zustand widerzuspiegeln
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Wert der Listbox auf die ID der Option aktualisieren, mit der der Benutzer gerade interagiert hat, selbst wenn er die Option so umgeschaltet hat, dass sie nicht ausgewählt ist.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung ist, wenn Sie ein natives Feature mit den benötigten Semantiken und Verhaltensweisen bereits integriert nutzen können, anstatt ein Element umzupolen und **eine** ARIA Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie das. Das {{HTMLElement('select')}} Element mit Nachkomme-{{HTMLElement('option')}} Elementen handhabt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelauswahl-Listbox, die `aria-activedescendant` verwendet

Die unten stehende Code-Stelle, die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

Dies hätte einfacher mit den nativen HTML {{HTMLElement('select')}} und {{HTMLElement('label')}} Elementen gehandhabt werden können.

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

- [Beispiel für eine scrollbare Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelauswahl-Listbox, die zum Aufdecken weiterer Optionen scrollt, ähnlich zu HTML {{HTMLElement('select')}} mit `size` Attribut größer als eins.
- [Beispiel-Listbox mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelauswahl-Listbox mit gruppierten Optionen, ähnlich zu HTML {{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und Optionen, die mit `optgroup` Elementen gruppiert sind.
- [Beispiel-Listboxen mit umorganisierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl Einzelauswahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Werkzeugleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus aller Nachfolger](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) dieser Rolle verwalten.
- Es wird empfohlen, dass Autoren unterschiedliche Stile für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z. B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut gesetzt werden.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*` Attribute gesetzt werden (siehe [ARIA Beste Praktiken](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), kann die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) Rolle geeigneter sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}} Element
- HTML {{HTMLElement('label')}} Element
- HTML {{HTMLElement('option')}} Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Beste Praktiken – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
