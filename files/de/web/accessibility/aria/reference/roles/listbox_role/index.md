---
title: "ARIA: listbox-Rolle"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Nutzer ein oder mehrere statische Elemente auswählen kann, die im Gegensatz zu HTML {{HTMLElement('select')}}-Elementen Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Nutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML {{HTMLElement('select')}}-Element. Anders als {{HTMLElement('select')}} kann eine Listbox Bilder enthalten. Listboxen enthalten Kinder, deren Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ist, oder Elemente, deren Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML-Select-Element oder eine Gruppe von Optionsfeldern zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Kontrollkästchen zu verwenden, wenn mehrere Elemente ausgewählt werden können, da es eine Menge Tastaturinteraktion erfordert, um den Fokus für alle Nachkommen zu verwalten und native HTML-Elemente diese Funktionalität kostenlos bereitstellen.

Elemente mit der Rolle `listbox` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`.

Wenn eine Liste aufgerufen wird, wird das erste Element in der Liste ausgewählt, falls noch nichts anderes ausgewählt ist. Auf-/Ab-Pfeile navigieren in der Liste, und durch Drücken von Umschalt + Auf-/Ab-Pfeilen wird die Auswahl verschoben und erweitert. Das Eingeben eines oder mehrerer Buchstaben navigiert durch die Listenelemente (derselbe Buchstabe geht zu jedem Element, das damit beginnt, verschiedene Buchstaben gehen zum ersten Element, das mit dieser gesamten Zeichenfolge beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, öffnet Umschalt+F10 dieses Menü. Wenn Listenelemente geprüft werden können, kann die Leertaste verwendet werden, um [Kontrollkästchen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) umzuschalten. Bei auswählbaren Listenelementen wird mit der Leertaste deren Auswahl umgeschaltet, Umschalt+Leertaste kann verwenden, um zusammenhängende Elemente auszuwählen, Ctrl+Pfeil bewegt sich ohne Auswahl, und Ctrl+Leertaste kann verwendet werden, um nicht zusammenhängende Elemente auszuwählen. Es wird empfohlen, ein Kontrollkästchen, einen Link oder eine andere Methode zu verwenden, um alle Elemente auszuwählen, und Ctrl+A könnte als Tastenkombination dafür verwendet werden.

Wenn die Listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Label und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn eine Option oder ein Element innerhalb der Liste fokussiert wird, wird es als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements in der Liste, falls der Screenreader dies unterstützt. Wenn der Fokus innerhalb der Liste wechselt, kündigt der Screenreader die relevanten Elemente an.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) Rolle
  - : Eine oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` gesetzt. Alle Nicht-ausgewählten Optionen haben [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) weg.
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle
  - : Ein Abschnitt, der `listitem`-Elemente enthält

#### Zustände und Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Hält die `id`-Zeichenkette des derzeit aktiven Elements innerhalb der Listbox. Wenn das ein Optionselement ist, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Wert von `true` hat oder nicht. Nimmt den Wert von nur einem `id`, selbst in einer multiselektierbaren Listbox. Wenn der `id` nicht auf einen DOM-Nachkommen der Listbox verweist, muss dieser `id` unter den IDs im [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut enthalten sein.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Dies ist eine durch Leerzeichen getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. Hier aufgelistete IDs dürfen nicht auch in [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributen anderer Elemente aufgelistet sein.

- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)

  - : Einschließen und auf `true` setzen, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut enthalten und auf `true` oder `false` gesetzt sein. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut haben. Wenn `false` oder weggelassen, benötigt nur die derzeit ausgewählte Option, falls eine Option ausgewählt ist, das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut, und es muss auf `true` gesetzt sein.

- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)

  - : Ein Boolesches Attribut, das angibt, dass eine Option mit einem nicht-leeren Stringwert ausgewählt werden muss.

- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder nicht ausgewählt sind, aber die Listbox ist ansonsten bedienbar.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)

  - : Ein menschenlesbarer Stringwert, der die Listbox identifiziert. Wenn es ein sichtbares Label gibt, sollte stattdessen [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf dieses Label zu verweisen.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer durch Leerzeichen getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Label gibt, sollte stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, um ein Label einzuschließen. (Hinweis: „labelled“, mit zwei L, ist die korrekte Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Ein menschenlesbarer Stringwert, der die Rolle der Listbox klarer identifiziert. Screenreader lesen diesen Wert oft den Nutzern nach dem Auslesen des Labels (falls vorhanden) vor, anstatt „Listbox“ zu sagen.

### Tastaturinteraktionen

- Wenn eine Single-Select-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die gewählte Option gesetzt.

- Wenn eine Multi-Select-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt, und es erfolgt keine automatische Änderung des Auswahlzustands.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Abwärtspfeil</kbd>

  : Verschiebt den Fokus auf die nächste Option. Optional kann in einer Single-Select-Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Aufwärtspfeil</kbd>

  : Verschiebt den Fokus auf die vorherige Option. Optional kann in einer Single-Select-Listbox die Auswahl auch mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus auf die erste Option. Optional kann in einer Single-Select-Listbox die Auswahl auch mit dem Fokus verschoben werden. Es wird dringend empfohlen, diese Taste bei Listen mit mehr als fünf Optionen zu unterstützen.

- <kbd>Ende</kbd>

  (Optional): Verschiebt den Fokus auf die letzte Option. Optional kann in einer Single-Select-Listbox die Auswahl auch mit dem Fokus verschoben werden. Es wird dringend empfohlen, diese Taste bei Listen mit mehr als fünf Optionen zu unterstützen.

- Type-ahead wird für alle Listboxen empfohlen, insbesondere für solche mit mehr als sieben Optionen:

  - Einen Buchstaben eingeben: Der Fokus wird auf das nächste Element verschoben, dessen Name mit dem eingegebenen Buchstaben beginnt.
  - Mehrere Zeichen schnell hintereinander eingeben: Der Fokus wird auf das nächste Element verschoben, dessen Name mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können entweder eines von zwei Interaktionsmodellen implementieren, um die Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer während der Navigation eine Modifier-Taste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> hält, oder ein alternatives Modell, das erfordert, dass Modifier-Tasten während der Navigation gedrückt gehalten werden, um zu verhindern, dass Auswahlzustände verloren gehen.

  - Empfohlenes Auswahlmodell — das Halten von Modifier-Tasten ist nicht erforderlich:

    - <kbd>Leertaste</kbd>: Ändert den Auswahlzustand der fokussierten Option.
    - <kbd>Shift + Abwärtspfeil</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der nächsten Option um.
    - <kbd>Shift + Aufwärtspfeil</kbd> (Optional): Verschiebt den Fokus und schaltet den ausgewählten Zustand der vorherigen Option um.
    - <kbd>Shift + Leertaste</kbd> (Optional): Wählt zusammenhängende Elemente vom zuletzt ausgewählten bis zum fokussierten Element aus.
    - <kbd>Control + Shift + Home</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option aus. Optional verschiebt es den Fokus auf die erste Option.
    - <kbd>Control + Shift + Ende</kbd> (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional verschiebt es den Fokus auf die letzte Option.
    - <kbd>Control + A</kbd> (Optional): Wählt alle Optionen in der Liste aus. Optional kann es, wenn alle Optionen ausgewählt sind, auch alle Optionen abwählen.

### Erforderliche JavaScript-Funktionen

#### Auswählen einer Option in einer Single-Select-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Wählen Sie die zuvor ausgewählte Option ab, indem Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `false` setzen oder das Attribut insgesamt entfernen und das Erscheinungsbild der nun abgewählten Option ändern, um nicht ausgewählt zu erscheinen.
2. Wählen Sie die neu gewählte Option aus, indem Sie `aria-selected="true"` auf die Option setzen und das Erscheinungsbild der neu gewählten Option ändern, um ausgewählt zu erscheinen.
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert in der Listbox auf die ID der neu gewählten Option.
4. Verwalten Sie visuell die Unschärfe, den Fokus und die ausgewählten Zustände der Option.

#### Umstellen des Zustands einer Option in einer Multi-Select-Listbox

Wenn der Benutzer auf eine Option klickt, die Leertaste drückt, wenn eine Option fokussiert ist, oder anders den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Schalten Sie den [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Zustand der derzeit fokussierten Option um und ändern Sie den Zustand von `aria-selected` zu true, wenn es false war, oder zu false, wenn es true war.
2. Ändern Sie das Erscheinungsbild der Option, um ihren ausgewählten Zustand widerzuspiegeln.
3. Aktualisieren Sie den [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Wert in der Listbox auf die ID der Option, mit der der Benutzer gerade interagiert hat, auch wenn er die Option auf nicht ausgewählt umgeschaltet hat.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung besagt, dass Sie, wenn Sie ein natives Feature mit den erforderlichen Semantiken und Verhaltensweisen, die Sie benötigen, bereits integriert verwenden können, anstatt ein Element umzufunktionieren und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Das {{HTMLElement('select')}}-Element mit Nachkommen-{{HTMLElement('option')}}-Elementen verarbeitet alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Single-Select-Listbox, die `aria-activedescendant` verwendet

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

- [Beispiel einer scrollbaren Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Single-Select-Listbox, die scrollt, um mehr Optionen anzuzeigen, ähnlich wie HTML {{HTMLElement('select')}} mit einem `size`-Attribut größer als eins.
- [Listbox-Beispiel mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Single-Select-Listbox mit gruppierten Optionen, ähnlich wie HTML {{HTMLElement('select')}} mit dem Attribut `size` größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiel-Listboxen mit umarrangierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele sowohl für Single-Select- als auch für Multi-Select-Listboxen mit begleitenden Symbolleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturzugänglich zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren unterschiedliche Stile für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z. B. wird eine nicht-aktive Auswahl oft mit einer helleren Hintergrundfarbe gezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Eigenschaft setzen.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften festgelegt werden (siehe [ARIA-Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox zu [erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), kann die [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Rolle angemessener sein.

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
- [ARIA-Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA-Rollenmodell – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
