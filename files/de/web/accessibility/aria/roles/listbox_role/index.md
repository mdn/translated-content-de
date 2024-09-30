---
title: "ARIA: listbox-Rolle"
slug: Web/Accessibility/ARIA/Roles/listbox_role
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann, die im Gegensatz zu HTML-{{HTMLElement('select')}}-Elementen Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML-{{HTMLElement('select')}}-Element. Im Gegensatz zu {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element oder eine Gruppe von Radio-Buttons zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Checkboxes, wenn mehrere Elemente ausgewählt werden können, da es viel Tastaturinteraktivität erfordert, um den Fokus für alle Nachkommen zu verwalten, und native HTML-Elemente bieten Ihnen diese Funktionalität kostenlos.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste angeklickt wird, wird das erste Element in der Liste ausgewählt, wenn dies noch nicht geschehen ist. Mit den Auf-/Ab-Pfeilen navigiert man durch die Liste und durch Drücken der Umschalt- + Auf-/Ab-Pfeile wird die Auswahl verschoben und erweitert. Das Eingeben eines oder mehrerer Buchstaben navigiert durch die Listenelemente (derselbe Buchstabe geht zu jedem Element, das damit beginnt, verschiedene Buchstaben gehen zum ersten Element, das mit der gesamten Zeichenfolge beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, startet Umschalt+F10 dieses Menü. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Checkboxes](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) umzuschalten. Für auswählbare Listenelemente schaltet die Leertaste deren Auswahl um, Umschalt+Leertaste kann verwendet werden, um zusammenhängende Elemente auszuwählen, Strg+Pfeil bewegt sich ohne Auswahl und Strg+Leertaste kann zum Auswählen von nicht zusammenhängenden Elementen verwendet werden. Es wird empfohlen, eine Checkbox, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Strg+A könnte als Tastenkombination dafür verwendet werden.

Wenn die listbox-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Bildschirmleser das Etikett und die Rolle der Listbox an, wenn sie den Fokus darauf haben. Wenn ein Element oder eine Option innerhalb der Liste fokussiert ist, wird es als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements in der Liste, wenn der Bildschirmleser dies unterstützt. Wenn der Fokus innerhalb der Liste verschoben wird, kündigt der Bildschirmleser die relevanten Elemente an.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `true` gesetzt. Alle nicht ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) Rolle
  - : Ein Abschnitt mit `listitem`-Elementen

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Enthält die `id`-Zeichenkette des aktuell aktiven Elements innerhalb der Listbox. Wenn es sich um ein Optionselement handelt, wäre dies die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert nur einer `id` an, selbst in einer multiselektierbaren Listbox. Wenn die `id` nicht auf einen DOM-Nachkommen der Listbox verweist, muss diese `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. Hier aufgeführte IDs dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attributen anderer Elemente aufgelistet sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)

  - : Fügen Sie es hinzu und setzen Sie es auf `true`, wenn der Benutzer mehr als eine Option auswählen kann. Wenn es auf `true` gesetzt ist, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut enthalten, das auf `true` oder `false` gesetzt ist. Optionen, die _nicht_ auswählbar sind, _sollten_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) nicht haben. Wenn `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)

  - : Ein Boolean-Attribut, das anzeigt, dass eine Option mit einem nicht-leeren Zeichenfolgenwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Ein menschenlesbarer Zeichenfolgenwert, der die Listbox identifiziert. Wenn es ein sichtbares Etikett gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um auf dieses Etikett zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Identifiziert die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Etikett gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden, um ein Etikett einzufügen. (Hinweis: "labelled", mit zwei L's, ist die korrekte Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Zeichenfolgenwert, der die Rolle der Listbox klarer identifiziert. Bildschirmleser lesen diesen Wert oft dem Benutzer vor, nachdem sie das Etikett (falls vorhanden) gelesen haben, anstatt "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzelauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Empfang des Fokus ausgewählt ist, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfachauswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf die erste Option gesetzt und es erfolgt keine automatische Änderung des Auswahlzustands.
  - Wenn eine oder mehrere Optionen vor dem Empfang des Fokus ausgewählt sind, wird der Fokus auf die erste ausgewählte Option gesetzt.

- <kbd>Pfeil nach unten</kbd>

  : Bewegt den Fokus zur nächsten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl zusammen mit dem Fokus verschoben werden.

- <kbd>Pfeil nach oben</kbd>

  : Bewegt den Fokus zur vorherigen Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl zusammen mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Bewegt den Fokus zur ersten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl zusammen mit dem Fokus verschoben werden. Es wird dringend empfohlen, diese Taste für Listen mit mehr als fünf Optionen zu unterstützen.

- <kbd>End</kbd>

  (Optional): Bewegt den Fokus zur letzten Option. Optional kann in einer Einzelauswahl-Listbox die Auswahl zusammen mit dem Fokus verschoben werden. Es wird dringend empfohlen, diese Taste für Listen mit mehr als fünf Optionen zu unterstützen.

- Typvorschau wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Geben Sie ein Zeichen ein: Der Fokus bewegt sich zum nächsten Element, dessen Name mit dem eingegebenen Zeichen beginnt.
  - Geben Sie mehrere Zeichen in schneller Folge ein: Der Fokus bewegt sich zum nächsten Element, dessen Name mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste wie

  <kbd>Umschalt</kbd>

  oder

  <kbd>Strg</kbd>

  , während er in der Liste navigiert, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gehalten werden, um den Auswahlzustand nicht zu verlieren.

  - Empfohlenes Auswahlmodell — das Halten von Modifikatortasten ist nicht notwendig:

    - <kbd>Leertaste</kbd>

      : ändert den Auswahlzustand der fokussierten Option.

    - <kbd>Umschalt + Pfeil nach unten</kbd>

      (Optional): Bewegt den Fokus und wechselt den ausgewählten Zustand der nächsten Option um.

    - <kbd>Umschalt + Pfeil nach oben</kbd>

      (Optional): Bewegt den Fokus und wechselt den ausgewählten Zustand der vorherigen Option um.

    - <kbd>Umschalt + Leertaste</kbd>

      (Optional): Wählt zusammenhängende Elemente von dem zuletzt ausgewählten Element bis zum fokussierten Element aus.

    - <kbd>Strg + Umschalt + Home</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional bewegt sich der Fokus zur ersten Option.

    - <kbd>Strg + Umschalt + Ende</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional bewegt sich der Fokus zur letzten Option.

    - <kbd>Strg + A</kbd>

      (Optional): Wählt alle Optionen in der Liste aus. Optional, wenn alle Optionen ausgewählt sind, kann es auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzel-Auswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option wird abgewählt, indem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) auf `false` gesetzt oder das Attribut vollständig entfernt wird, wodurch sich das Erscheinungsbild der neu abgewählten Option ändert, um nicht ausgewählt zu erscheinen.
2. Die neu ausgewählte Option wird ausgewählt, indem `aria-selected="true"` auf der Option gesetzt wird und sich das Erscheinungsbild der neu ausgewählten Option ändert, um ausgewählt zu erscheinen.
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Wert der Listbox auf die ID der neu ausgewählten Option
4. Behandeln Sie visuell den Blur-, Fokus- und ausgewählten Zustand der Option

#### Umschalten des Zustands einer Option in einer Mehrfachauswahl-Listbox

Wenn der Benutzer auf eine Option klickt, die <kbd>Leertaste</kbd> drückt, während eine Option fokussiert ist, oder auf andere Weise den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Der [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Zustand der aktuell fokussierten Option wird umgeschaltet, wobei der Zustand von `aria-selected` auf wahr gesetzt wird, wenn er falsch war, oder auf falsch, wenn er wahr war.
2. Ändern Sie das Erscheinungsbild der Option, um ihren ausgewählten Zustand widerzuspiegeln
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Wert der Listbox auf die ID der Option, mit der der Benutzer gerade interagiert hat, selbst wenn er die Option umschaltete, um nicht ausgewählt zu sein.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit der benötigten Semantik und dem benötigten Verhalten verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie es. Das {{HTMLElement('select')}}-Element mit abgeleiteten {{HTMLElement('option')}}-Elementen bewältigt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzelauswahl-Listbox, die `aria-activedescendant` verwendet

Das folgende Snippet, das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) verwendet, zeigt, wie die listbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

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

- [Beispiel für eine scrollbare Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzelauswahl-Listbox, die scrollt, um weitere Optionen anzuzeigen, ähnlich dem HTML-{{HTMLElement('select')}} mit einem `size`-Attribut, das größer als eins ist.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzelauswahl-Listbox mit gruppierten Optionen, ähnlich dem HTML-{{HTMLElement('select')}} mit dem Attribut `size`, das größer als `"1"` ist, und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiel-Listboxen mit umordnbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für sowohl Einzelauswahl- als auch Mehrfachauswahl-Listboxen mit begleitenden Werkzeugleisten, in denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um mit der Tastatur zugänglich zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Styling-Optionen für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z. B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie die Eigenschaft [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) gesetzt haben.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften festgelegt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), könnte die [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)-Rolle angemessener sein.

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
- [ARIA Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
