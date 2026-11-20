---
title: "ARIA: Rolle listbox"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

<!-- cSpell:ignore labelled -->

Die Rolle `listbox` wird für Listen verwendet, aus denen Benutzer eine oder mehrere statische Optionen auswählen können. Anders als HTML-Elemente {{HTMLElement('select')}} können solche Listen auch Bilder enthalten.

## Beschreibung

Die Rolle `listbox` kennzeichnet ein Element, das eine Liste erstellt, aus der Benutzer eine oder mehrere statische Optionen auswählen können, ähnlich dem HTML-Element {{HTMLElement('select')}}. Anders als {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten untergeordnete Elemente mit der Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) oder Elemente mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), die ihrerseits untergeordnete Elemente mit der Rolle `option` enthalten.

Es wird dringend empfohlen, stattdessen das HTML-Element `select`, bei Einfachauswahl eine Gruppe von Radiobuttons oder bei Mehrfachauswahl eine Gruppe von Kontrollkästchen zu verwenden. Die Tastaturinteraktion und Fokusverwaltung für alle untergeordneten Elemente ist aufwendig; native HTML-Elemente stellen diese Funktionalität bereits bereit.

Elemente mit der Rolle `listbox` haben implizit den Wert `vertical` für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn eine Liste per Tabulatortaste den Fokus erhält, wird die erste Option ausgewählt, sofern nicht bereits eine andere ausgewählt ist. Mit den Pfeiltasten nach oben und unten navigieren Benutzer durch die Liste; mit Umschalttaste und diesen Pfeiltasten verschieben und erweitern sie die Auswahl. Die Eingabe eines oder mehrerer Buchstaben führt zu passenden Listeneinträgen: Die wiederholte Eingabe desselben Buchstabens führt nacheinander zu Einträgen, die damit beginnen; die Eingabe verschiedener Buchstaben führt zum ersten Eintrag, der mit der gesamten eingegebenen Zeichenfolge beginnt. Wenn der aktuelle Eintrag ein Kontextmenü hat, öffnet Umschalttaste+F10 dieses Menü. Bei ankreuzbaren Listeneinträgen können [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) mit der Leertaste umgeschaltet werden. Bei auswählbaren Listeneinträgen schaltet die Leertaste die Auswahl um, Umschalttaste+Leertaste kann zusammenhängende Einträge auswählen, Strg+Pfeiltaste bewegt den Fokus ohne Auswahl, und Strg+Leertaste kann nicht zusammenhängende Einträge auswählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Möglichkeit zum Auswählen aller Einträge bereitzustellen. Strg+A kann dafür als Tastenkürzel dienen.

Wenn einem Element die Rolle `listbox` hinzugefügt wird oder ein solches Element sichtbar wird, geben Screenreader beim Fokussieren dessen Beschriftung und Rolle aus. Wenn eine Option oder ein Eintrag innerhalb der Liste fokussiert ist, wird dieser als Nächstes ausgegeben, gefolgt von seiner Position in der Liste, sofern der Screenreader dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, gibt der Screenreader die jeweiligen Einträge aus.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Zugehörige Rollen

- Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
  - : Mindestens eine untergeordnete Option ist erforderlich. Für alle ausgewählten Optionen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Für alle nicht ausgewählten Optionen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Ist eine Option nicht auswählbar, lassen Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- Rolle [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Ein Abschnitt, der `listitem`-Elemente enthält.

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Enthält den `id`-Wert des aktuell aktiven Elements innerhalb der Listbox. Handelt es sich dabei um ein `option`-Element, ist dies die `id` der Option, mit der zuletzt interagiert wurde – unabhängig davon, ob [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) für diese Option den Wert `true` hat. Die Eigenschaft enthält nur eine einzige `id`, auch in einer Listbox mit Mehrfachauswahl. Wenn die `id` nicht auf ein untergeordnetes DOM-Element der Listbox verweist, muss sie unter den IDs im Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) aufgeführt sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Eine durch Leerzeichen getrennte Liste von Element-IDs, deren Elemente keine untergeordneten DOM-Elemente der Listbox sind. Hier aufgeführte IDs dürfen nicht zugleich in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributen anderer Elemente stehen.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Fügen Sie dieses Attribut hinzu und setzen Sie es auf `true`, wenn Benutzer mehr als eine Option auswählen können. Bei `true` sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut mit dem Wert `true` oder `false` haben. Optionen, die _nicht_ auswählbar sind, _sollten kein_ [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut haben. Bei `false` oder wenn das Attribut fehlt, benötigt nur die aktuell ausgewählte Option – sofern eine ausgewählt ist – das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected); dessen Wert muss `true` sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Ein boolesches Attribut, das angibt, dass eine Option mit einem nicht leeren Zeichenfolgenwert ausgewählt sein muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Benutzer können nicht ändern, welche Optionen ausgewählt sind; die Listbox bleibt ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine für Menschen lesbare Zeichenfolge, die die Listbox bezeichnet. Wenn eine sichtbare Beschriftung vorhanden ist, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um darauf zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verweist über eine durch Leerzeichen getrennte Liste von Element-IDs auf die sichtbaren Elemente, die die Listbox beschriften. Wenn keine sichtbare Beschriftung vorhanden ist, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um eine Beschriftung anzugeben. (Hinweis: Die Schreibweise „labelled“ mit zwei „l“ entspricht den Konventionen der Barrierefreiheits-APIs.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Eine für Menschen lesbare Zeichenfolge, die die Rolle der Listbox genauer beschreibt. Screenreader lesen diesen Wert häufig nach der Beschriftung vor, sofern eine vorhanden ist, anstatt „listbox“ auszugeben.

### Tastaturinteraktionen

- Wenn eine Listbox mit Einfachauswahl den Fokus erhält:
  - War zuvor keine Option ausgewählt, erhält die erste Option den Fokus. Optional kann sie automatisch ausgewählt werden.
  - War zuvor eine Option ausgewählt, wird der Fokus auf diese Option gesetzt.

- Wenn eine Listbox mit Mehrfachauswahl den Fokus erhält:
  - War zuvor keine Option ausgewählt, wird der Fokus auf die erste Option gesetzt, ohne den Auswahlzustand automatisch zu ändern.
  - Waren zuvor eine oder mehrere Optionen ausgewählt, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Down Arrow</kbd>

  : Verschiebt den Fokus zur nächsten Option. In einer Listbox mit Einfachauswahl kann optional auch die Auswahl dem Fokus folgen.

- <kbd>Up Arrow</kbd>

  : Verschiebt den Fokus zur vorherigen Option. In einer Listbox mit Einfachauswahl kann optional auch die Auswahl dem Fokus folgen.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus zur ersten Option. In einer Listbox mit Einfachauswahl kann optional auch die Auswahl dem Fokus folgen. Für Listen mit mehr als fünf Optionen wird die Unterstützung dieser Taste dringend empfohlen.

- <kbd>End</kbd>

  (Optional): Verschiebt den Fokus zur letzten Option. In einer Listbox mit Einfachauswahl kann optional auch die Auswahl dem Fokus folgen. Für Listen mit mehr als fünf Optionen wird die Unterstützung dieser Taste dringend empfohlen.

- Die Suche durch Eingabe von Zeichen wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:
  - Eingabe eines Zeichens: Der Fokus wechselt zum nächsten Eintrag, dessen Name mit dem eingegebenen Zeichen beginnt.
  - Eingabe mehrerer Zeichen in schneller Folge: Der Fokus wechselt zum nächsten Eintrag, dessen Name mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Zur Unterstützung der Mehrfachauswahl können Autoren eines von zwei Interaktionsmodellen implementieren: das empfohlene Modell, bei dem Benutzer während der Navigation durch die Liste keine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten müssen, oder ein alternatives Modell, bei dem Modifikatortasten gedrückt gehalten werden müssen, damit bestehende Auswahlzustände bei der Navigation erhalten bleiben.
  - Empfohlenes Auswahlmodell – das Gedrückthalten von Modifikatortasten ist nicht erforderlich:
    - <kbd>Space</kbd>: Ändert den Auswahlzustand der fokussierten Option.
    - <kbd>Shift + Down Arrow</kbd> (optional): Verschiebt den Fokus zur nächsten Option und schaltet deren Auswahlzustand um.
    - <kbd>Shift + Up Arrow</kbd> (optional): Verschiebt den Fokus zur vorherigen Option und schaltet deren Auswahlzustand um.
    - <kbd>Shift + Space</kbd> (optional): Wählt zusammenhängende Einträge von der zuletzt ausgewählten Option bis zur fokussierten Option aus.
    - <kbd>Control + Shift + Home</kbd> (optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional wird der Fokus zur ersten Option verschoben.
    - <kbd>Control + Shift + End</kbd> (optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional wird der Fokus zur letzten Option verschoben.
    - <kbd>Control + A</kbd> (optional): Wählt alle Optionen in der Liste aus. Sind bereits alle Optionen ausgewählt, kann die Tastenkombination optional auch die gesamte Auswahl aufheben.

### Erforderliche JavaScript-Funktionalität

#### Auswählen einer Option in einer Listbox mit Einfachauswahl

Wenn Benutzer eine Option auswählen, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option wird abgewählt. Dazu wird [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt oder das Attribut vollständig entfernt. Auch die Darstellung der Option wird so geändert, dass sie nicht mehr ausgewählt erscheint.
2. Die neue Option wird ausgewählt. Dazu wird `aria-selected="true"` auf der Option gesetzt und ihre Darstellung so geändert, dass sie ausgewählt erscheint.
3. Der Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox wird auf die `id` der neu ausgewählten Option aktualisiert.
4. Die Zustände für Fokusverlust, Fokus und Auswahl der Option werden visuell dargestellt.

#### Umschalten des Zustands einer Option in einer Listbox mit Mehrfachauswahl

Wenn Benutzer auf eine Option klicken, bei fokussierter Option <kbd>Space</kbd> drücken oder den Zustand einer Option auf andere Weise umschalten, muss Folgendes geschehen:

1. Der Wert von [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) für die aktuell fokussierte Option wird umgeschaltet: von `false` auf `true` beziehungsweise von `true` auf `false`.
2. Die Darstellung der Option wird an ihren Auswahlzustand angepasst.
3. Der Wert von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) auf der Listbox wird auf die ID der Option aktualisiert, mit der die Benutzer zuletzt interagiert haben – auch wenn sie die Auswahl der Option dabei aufgehoben haben.

> [!NOTE]
> Die erste Regel für den Einsatz von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, sollten Sie dies tun, statt ein Element zweckzuentfremden und es durch das **Hinzufügen** einer ARIA-Rolle, eines Zustands oder einer Eigenschaft zugänglich zu machen. Das Element {{HTMLElement('select')}} mit untergeordneten {{HTMLElement('option')}}-Elementen unterstützt alle erforderlichen Interaktionen von sich aus.

## Bewährte Vorgehensweisen

- Für die Bedienbarkeit per Tastatur sollten Autoren den [Fokus aller untergeordneten Elemente verwalten](https://w3c.github.io/aria/#managingfocus).
- Es wird empfohlen, die Auswahl anders darzustellen, wenn die Liste nicht fokussiert ist. Beispielsweise wird eine inaktive Auswahl häufig mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte die Eigenschaft [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gesetzt sein.
- Wenn ein oder mehrere Einträge keine untergeordneten DOM-Elemente der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen triftigen Grund gibt, die Listbox [aufzuklappen](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), ist möglicherweise die Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) besser geeignet.

## Beispiele

### Beispiel 1: Eine Listbox mit Einfachauswahl, die `aria-activedescendant` verwendet

Der folgende Codeausschnitt zeigt, wie die Rolle `listbox` mithilfe von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) direkt im HTML-Quellcode verwendet wird.

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

Dies hätte sich einfacher mit den nativen HTML-Elementen {{HTMLElement('select')}} und {{HTMLElement('label')}} umsetzen lassen.

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

- [Beispiel einer scrollbareren Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Eine Listbox mit Einfachauswahl, in der durch Scrollen weitere Optionen sichtbar werden, ähnlich dem HTML-Element {{HTMLElement('select')}} mit einem `size`-Attribut größer als eins.
- [Beispiel einer Listbox mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Eine Listbox mit Einfachauswahl und gruppierten Optionen, ähnlich dem HTML-Element {{HTMLElement('select')}}, dessen Attribut `size` auf einen Wert größer als `"1"` gesetzt ist und dessen Optionen mit `optgroup`-Elementen gruppiert sind.
- [Beispiele für Listboxen mit neu anordenbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für Listboxen mit Einfach- und Mehrfachauswahl und zugehörigen Symbolleisten, über die Optionen hinzugefügt, verschoben und entfernt werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('select')}}
- HTML-Element {{HTMLElement('label')}}
- HTML-Element {{HTMLElement('option')}}
- [ARIA: Rolle `combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: Rolle `option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: Rolle `list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: Rolle `listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
