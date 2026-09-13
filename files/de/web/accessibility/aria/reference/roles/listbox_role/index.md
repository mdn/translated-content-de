---
title: "ARIA: listbox-Rolle"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

<!-- cSpell:ignore labelled -->

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann, die anders als HTML-{{HTMLElement('select')}}-Elemente Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle dient dazu, ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML-{{HTMLElement('select')}}-Element. Anders als {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element zu verwenden, oder eine Gruppe von Optionsfeldern, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen, wenn mehrere Elemente ausgewählt werden können, da es eine Menge Tastaturinteraktionen gibt, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente diese Funktionalität kostenlos für Sie bereitstellen.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste angeklickt wird, wird der erste Eintrag in der Liste ausgewählt, wenn nichts anderes bereits ausgewählt ist. Die Pfeiltasten nach oben/unten navigieren durch die Liste, und durch Drücken der Umschalttaste + Pfeiltasten nach oben/unten wird die Auswahl verschoben und erweitert. Durch Eingabe eines oder mehrerer Buchstaben wird durch die Listenelemente navigiert (gleicher Buchstabe geht zu jedem Eintrag, der damit beginnt, verschiedene Buchstaben gehen zum ersten Eintrag, der mit dem gesamten Zeichenfolgen beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, wird Shift+F10 dieses Menü aufrufen. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzustellen. Für auswählbare Listenelemente toggelt die Leertaste deren Auswahl, mit Shift+Space können zusammenhängende Elemente ausgewählt werden, Ctrl+Pfeil bewegt sich ohne Auswahl, und Ctrl+Space kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Ctrl+A könnte als Tastenkombination dafür verwendet werden.

Wenn die Listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Label und die Rolle der Listbox bei Fokuserhalt an. Wenn ein Options- oder Elementfokus innerhalb der Liste existiert, wird dieser als nächstes angekündigt, gefolgt von einer Anzeige der Position des Elements innerhalb der Liste, wenn der Screenreader dies unterstützt. Wenn der Fokus innerhalb der Liste verschoben wird, kündigt der Screenreader die relevanten Elemente an.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)-Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle nicht ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, weglassen der [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält die `id`-Zeichenkette des derzeit aktiven Elements innerhalb der Listbox. Wenn es sich um ein Optionselement handelt, ist das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt nur einen `id`-Wert an, selbst in einer multiselectable Listbox. Wenn die `id` sich nicht auf einen DOM-Nachkommen der Listbox bezieht, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. Die hier aufgelisteten IDs können nicht auch in den [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attributen anderer Elemente aufgeführt werden.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Einschließen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein eingeschlossenes und auf `true` oder `false` gesetztes [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut haben. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut haben. Wenn `false` oder weggelassen, benötigt nur die derzeit ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht leeren Zeichenfolgenwert ausgewählt sein muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die Listbox identifiziert. Wenn ein sichtbares Label vorhanden ist, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn kein sichtbares Label vorhanden ist, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Label einzubeziehen. (Hinweis: "labelled" mit zwei L's ist die korrekte Schreibweise basierend auf den Konventionen der Zugränglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die Rolle der Listbox klarer identifiziert. Screenreader lesen diesen Wert oft dem Benutzer vor, nachdem sie das Label (falls vorhanden) vorgelesen haben, anstatt "listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine einfach auswählbare Listbox den Fokus erhält:
  - Wenn keine der Optionen vor Erhalt des Fokus durch die Listbox ausgewählt ist, erhält die erste Option den Fokus. Optional kann die erste Option auch automatisch ausgewählt werden.
  - Wenn eine Option vor Erhalt des Fokus durch die Listbox ausgewählt ist, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:
  - Wenn keine der Optionen vor Erhalt des Fokus durch die Listbox ausgewählt ist, wird der Fokus auf die erste Option gesetzt, und es erfolgt keine automatische Änderung im Auswahlszustand.
  - Wenn eine oder mehrere Optionen vor Erhalt des Fokus durch die Listbox ausgewählt sind, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Pfeil nach unten</kbd>

  : Bewegt den Fokus auf die nächste Option. Optional kann in einer einfach auswählbaren Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Pfeil nach oben</kbd>

  : Bewegt den Fokus auf die vorherige Option. Optional kann in einer einfach auswählbaren Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Bewegt den Fokus auf die erste Option. Optional kann in einer einfach auswählbaren Listbox die Auswahl auch mit dem Fokus verschoben werden. Die Unterstützung dieses Schlüssels wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- <kbd>End</kbd>

  (Optional): Bewegt den Fokus auf die letzte Option. Optional kann in einer einfach auswählbaren Listbox die Auswahl auch mit dem Fokus verschoben werden. Die Unterstützung dieses Schlüssels wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- Vorauswahl ist für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:
  - Geben Sie ein Zeichen ein: Der Fokus bewegt sich zum nächsten Eintrag mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
  - Geben Sie mehrere Zeichen schnell hintereinander ein: Der Fokus bewegt sich zum nächsten Eintrag mit einem Namen, der mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können entweder ein Interaktionsmodell implementieren, das keine Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> während der Navigation durch die Liste erfordert, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gehalten werden, um den Auswahlszustand nicht zu verlieren.
  - Empfohlenes Auswahlsmodell — das Halten von Modifikatortasten ist nicht notwendig:
    - <kbd>Leertaste</kbd>: Ändert den Auswahlszustand der fokussierten Option.
    - <kbd>Shift + Pfeil nach unten</kbd> (Optional): Bewegt den Fokus und toggelt den Auswahlszustand der nächsten Option.
    - <kbd>Shift + Pfeil nach oben</kbd> (Optional): Bewegt den Fokus und toggelt den Auswahlszustand der vorherigen Option.
    - <kbd>Shift + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente von dem zuletzt ausgewählten Element zum fokussierten Element aus.
    - <kbd>Control + Shift + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional verschiebt den Fokus auf die erste Option.
    - <kbd>Control + Shift + End</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional verschiebt den Fokus auf die letzte Option.
    - <kbd>Control + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzelauswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option abwählen, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt oder das Attribut gänzlich entfernt wird, wodurch das Aussehen der neu abgewählten Option so geändert wird, dass sie nicht ausgewählt erscheint.
2. Die neu ausgewählte Option auswählen, indem `aria-selected="true"` auf die Option gesetzt wird und das Aussehen der neu ausgewählten Option so geändert wird, dass sie als ausgewählt erscheint.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert der Listbox auf die ID der neu ausgewählten Option aktualisieren.
4. Visuelle Behandlung der Unschärfe-, Fokus- und Auswahlszustände der Option

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Leertaste</kbd> drückt, während er auf eine Option fokussiert ist, oder auf andere Weise den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Zustand der aktuell fokussierten Option umschalten und den Zustand in wahr ändern, wenn er falsch war, oder in falsch ändern, wenn er wahr war.
2. Das Aussehen der Option ändern, um ihren ausgewählten Zustand widerzuspiegeln.
3. Den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert der Listbox auf die ID der Option aktualisieren, mit der der Benutzer gerade interagiert hat, selbst wenn die Option auf nicht ausgewählt umgeschaltet wurde.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit den erforderlichen eingebauten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu nutzen und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies. Das {{HTMLElement('select')}}-Element mit nachfolgenden {{HTMLElement('option')}}-Elementen bietet alle erforderlichen Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelauswahl-Listbox, die `aria-activedescendant` verwendet

Der untenstehende Ausschnitt, der [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) verwendet, zeigt, wie die Listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

Dies hätte leichter mit den nativen HTML-{{HTMLElement('select')}}- und {{HTMLElement('label')}}-Elementen gehandhabt werden können.

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

- [Scrollable Listbox Example](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelauswahl-Listbox, die scrollt, um weitere Optionen anzuzeigen, ähnlich der HTML-{{HTMLElement('select')}} mit `size`-Attribut größer als eins.
- [Listbox Example with Grouped Options](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelauswahl-Listbox mit gruppierten Optionen, ähnlich der HTML-{{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Example Listboxes with Rearrangeable Options](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele von sowohl Einzelauswahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Symbolleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Gute Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus verwalten](https://w3c.github.io/aria/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren eine unterschiedliche Hervorhebung für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht aktive Auswahl häufig mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Eigenschaft haben.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), ist die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle möglicherweise geeigneter.

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
