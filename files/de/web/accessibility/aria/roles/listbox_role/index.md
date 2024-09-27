---
title: "ARIA: listbox Rolle"
slug: Web/Accessibility/ARIA/Roles/listbox_role
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Die `listbox`-Rolle wird für Listen verwendet, aus denen ein Benutzer ein oder mehrere statische Elemente auswählen kann und die, im Gegensatz zu HTML-`<select>`-Elementen, Bilder enthalten können.

## Beschreibung

Die `listbox`-Rolle wird verwendet, um ein Element zu identifizieren, das eine Liste erstellt, aus der ein Benutzer ein oder mehrere statische Elemente auswählen kann, ähnlich dem HTML `<select>`-Element. Anders als `<select>` kann eine Listbox Bilder enthalten. Listboxen enthalten Kind-Elemente, deren Rolle `option` oder Elemente, deren Rolle `group` ist, die wiederum Kinder enthalten, deren Rolle `option` ist.

Es wird dringend empfohlen, das HTML `<select>`-Element oder eine Gruppe von Radio-Buttons zu verwenden, wenn nur ein Element ausgewählt werden kann, oder eine Gruppe von Checkboxen, wenn mehrere Elemente ausgewählt werden können, da es viel Tastaturinteraktivität gibt, um den Fokus für alle Nachfahren zu verwalten, und native HTML-Elemente diese Funktionalität kostenlos bieten.

Elemente mit der Rolle `listbox` haben implizit einen `aria-orientation`-Wert von `vertical`.

Wenn zu einer Liste getabbt wird, wird das erste Element in der Liste ausgewählt, wenn noch nichts anderes ausgewählt ist. Pfeiltasten nach oben/unten navigieren durch die Liste, und durch Drücken der Umschalt + Pfeiltasten Oben/Unten wird die Auswahl verschoben und erweitert. Wenn ein oder mehrere Buchstaben eingegeben werden, wird durch die Listenelemente navigiert (gleicher Buchstabe geht zu jedem Element, das damit anfängt, verschiedene Buchstaben gehen zum ersten Element, das mit diesem gesamten String beginnt). Wenn das aktuelle Element ein zugehöriges Kontextmenü hat, startet Umschalt+F10 dieses Menü. Wenn Listenelemente überprüfbar sind, kann die Leertaste verwendet werden, um [Checkboxen](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) umzuschalten. Für selektierbare Listenelemente wechselt die Leertaste ihre Auswahl, Umschalt+Leertaste kann zur Auswahl zusammenhängender Elemente verwendet werden, Strg+Pfeil bewegt sich ohne Auswahl, und Strg+Leertaste kann zur Auswahl nicht zusammenhängender Elemente verwendet werden. Es wird empfohlen, dass eine Checkbox, ein Link oder eine andere Methode verwendet wird, um alle Elemente auszuwählen, und Strg+A könnte als Tastenkombination hierfür verwendet werden.

Wenn die Listbox-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, kündigen Screenreader das Label und die Rolle der Listbox an, wenn sie den Fokus erhält. Wenn ein `option` oder ein Element innerhalb der Liste fokussiert ist, wird es als nächstes angekündigt, gefolgt von einem Hinweis auf die Position des Elements innerhalb der Liste, sofern der Screenreader dies unterstützt. Während sich der Fokus innerhalb der Liste bewegt, kündigt der Screenreader die relevanten Elemente an.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- `option` Rolle
  - : Ein oder mehrere verschachtelte Optionen sind erforderlich. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle nicht ausgewählten Optionen haben `aria-selected` auf `false` gesetzt. Wenn eine Option nicht auswählbar ist, lassen Sie `aria-selected` weg.
- `list` Rolle
  - : Ein Abschnitt mit `listitem`-Elementen

#### Zustände und Eigenschaften

- `aria-activedescendant`
  - : Enthält den `id`-String des aktuell aktiven Elements innerhalb der Listbox. Wenn dies ein `option`-Element ist, dann wäre das die `id` der zuletzt interagierten Option, unabhängig davon, ob diese Option einen `aria-selected`-Wert von `true` hat oder nicht. Nimmt nur den Wert einer `id` an, selbst in einer multiselektierbaren Listbox. Wenn sich die `id` nicht auf einen DOM-Nachfahren der Listbox bezieht, muss diese `id` in der `aria-owns`-Attribute enthalten sein.
- `aria-owns`

  - : Dies ist eine Leerzeichen-getrennte Liste von Element-IDs, die keine DOM-Kindelemente der Listbox sind. IDs, die hier aufgelistet sind, können nicht auch in `aria-owns`-Attributen anderer Elemente aufgeführt werden.

- `aria-multiselectable`

  - : Setzen Sie dies auf `true`, wenn der Benutzer mehr als eine Option auswählen kann. Wenn auf `true` gesetzt, sollte _jede_ auswählbare Option ein `aria-selected`-Attribut enthalten, das auf `true` oder `false` gesetzt ist. Optionen, die _nicht_ auswählbar sind, _sollten nicht_ das `aria-selected`-Attribut haben. Wenn auf `false` oder weggelassen, benötigt nur die aktuell ausgewählte Option, falls eine Option ausgewählt ist, das `aria-selected`-Attribut, und es muss auf `true` gesetzt sein.

- `aria-required`

  - : Ein Boolean-Attribut, das angibt, dass eine Option mit einem nicht-leeren String-Wert ausgewählt sein muss.

- `aria-readonly`

  - : Der Benutzer kann nicht ändern, welche Optionen ausgewählt oder abgewählt sind, aber die Listbox ist ansonsten bedienbar.

- `aria-label`

  - : Ein menschenlesbarer String-Wert, der die Listbox identifiziert. Wenn es ein sichtbares Label gibt, sollte `aria-labelledby` stattdessen verwendet werden, um auf dieses Label zu verweisen.

- `aria-labelledby`

  - : Identifiziert das sichtbare Element oder die sichtbaren Elemente in einer Leerzeichen-getrennten Liste von Element-IDs, die die Listbox identifizieren. Wenn es kein sichtbares Label gibt, sollte `aria-label` stattdessen verwendet werden, um ein Label einzuschließen. (Hinweis: "labelled", mit zwei L‘s, ist die korrekte Schreibweise basierend auf den Konventionen der Zugänglichkeits-API.)

- `aria-roledescription`
  - : Ein menschenlesbarer String-Wert, der die Rolle der Listbox klarer identifiziert. Screenreader lesen diesen Wert oft dem Benutzer nach dem Label vor (falls vorhanden), anstatt "Listbox" zu sagen.

### Tastaturinteraktionen

- Wenn eine Einzel-Auswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, erhält die erste Option den Fokus. Optional kann die erste Option automatisch ausgewählt werden.
  - Wenn eine Option ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die ausgewählte Option gesetzt.

- Wenn eine Mehrfach-Auswahl-Listbox den Fokus erhält:

  - Wenn keine der Optionen ausgewählt ist, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste Option gesetzt, und es gibt keine automatische Änderung des Auswahllzustands.
  - Wenn eine oder mehrere Optionen ausgewählt sind, bevor die Listbox den Fokus erhält, wird der Fokus auf die erste ausgewählte Option in der Liste gesetzt.

- <kbd>Pfeil nach unten</kbd>

  : Verschiebt den Fokus zur nächsten Option. Optional kann in einer Einzel-Auswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden.

- <kbd>Pfeil nach oben</kbd>

  : Verschiebt den Fokus zur vorherigen Option. Optional kann in einer Einzel-Auswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden.

- <kbd>Home</kbd>

  (Optional): Verschiebt den Fokus zur ersten Option. Optional kann in einer Einzel-Auswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- <kbd>Ende</kbd>

  (Optional): Verschiebt den Fokus zur letzten Option. Optional kann in einer Einzel-Auswahl-Listbox auch die Auswahl mit dem Fokus verschoben werden. Die Unterstützung dieser Taste wird für Listen mit mehr als fünf Optionen dringend empfohlen.

- Vorauswahl ist für alle Listboxen zu empfehlen, insbesondere für solche mit mehr als sieben Optionen:

  - Tippen Sie einen Buchstaben: Der Fokus bewegt sich zum nächsten Element, dessen Name mit dem eingegebenen Buchstaben beginnt.
  - Tippen Sie mehrere Buchstaben schnell hintereinander: Der Fokus bewegt sich zum nächsten Element, dessen Name mit der eingegebenen Zeichenfolge beginnt.

- **Mehrfachauswahl**: Autoren können eines von zwei Interaktionsmodellen implementieren, um Mehrfachauswahl zu unterstützen: ein empfohlenes Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste, wie z.B.

  <kbd>Shift</kbd>

  oder

  <kbd>Control</kbd>

  , gedrückt hält, während er die Liste durchläuft, oder ein alternatives Modell, das erfordert, dass Modifikatortasten gedrückt gehalten werden, während man navigiert, um zu vermeiden, den Auswahllzustand zu verlieren.

  - Empfohlenes Auswahlmodell - Halten von Modifikatortasten ist nicht erforderlich:

    - <kbd>Space</kbd>

      : Ändert den Auswahllzustand der fokussierten Option.

    - <kbd>Shift + Pfeil nach unten</kbd>

      (Optional): Verschiebt den Fokus zur und aktiviert/entscheidet den Auswahllzustand der nächsten Option.

    - <kbd>Shift + Pfeil nach oben</kbd>

      (Optional): Verschiebt den Fokus zur und aktiviert/entscheidet den Auswahllzustand der vorherigen Option.

    - <kbd>Shift + Space</kbd>

      (Optional): Wählt zusammenhängende Elemente aus dem zuletzt ausgewählten Element bis zum fokussierten Element aus.

    - <kbd>Control + Shift + Home</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur ersten Option. Optional wird der Fokus zur ersten Option verschoben.

    - <kbd>Control + Shift + Ende</kbd>

      (Optional): Wählt die fokussierte Option und alle Optionen bis zur letzten Option aus. Optional wird der Fokus zur letzten Option verschoben.

    - <kbd>Control + A</kbd>

      (Optional): Wählt alle Optionen in der Liste aus. Optional kann, wenn alle Optionen ausgewählt sind, auch alle Optionen abgewählt werden.

### Erforderliche JavaScript-Funktionen

#### Auswahl einer Option in einer Einzel-Auswahl-Listbox

Wenn der Benutzer eine Option auswählt, muss Folgendes geschehen:

1. Die zuvor ausgewählte Option muss abgewählt werden, indem `aria-selected` auf `false` gesetzt wird oder das Attribut ganz entfernt wird, um das Aussehen der neu abgewählten Option zu ändern, sodass sie nicht ausgewählt erscheint.
2. Die neu ausgewählte Option muss ausgewählt werden, indem `aria-selected="true"` auf die Option gesetzt wird und das Aussehen der neu ausgewählten Option geändert wird, sodass sie ausgewählt erscheint.
3. Der `aria-activedescendant`-Wert auf der Listbox muss auf die id der neu ausgewählten Option aktualisiert werden.
4. Visuelles Handling des Blur-, Fokus- und Auswahllzustands der Option

#### Umschalten des Zustands einer Option in einer Mehrfach-Auswahl-Listbox

Wenn der Benutzer auf eine Option klickt, <kbd>Space</kbd> drückt, wenn sie auf eine Option fokussiert ist, oder anderweitig den Zustand einer Option umschaltet, muss Folgendes geschehen:

1. Der `aria-selected`-Zustand der aktuell fokussierten Option muss umgeschaltet werden, indem der Zustand von `aria-selected` auf True gesetzt wird, wenn es False war, oder auf False gesetzt wird, wenn es True war.
2. Das Aussehen der Option muss so geändert werden, dass sie ihren ausgewählten Zustand widerspiegelt.
3. Der `aria-activedescendant`-Wert auf der Listbox muss auf die ID der Option, mit der der Benutzer gerade interagiert hat, aktualisiert werden, selbst wenn sie die Option abgewählt haben.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, dass, wenn Sie ein natives Feature mit den Semantiken und dem Verhalten verwenden können, das Sie benötigen und bereits integriert sind, anstatt ein Element neu zu verwenden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies. Das `<select>`-Element mit den Nachfahren-`<option>`-Elementen behandelt alle benötigten Interaktionen nativ.

## Beispiele

### Beispiel 1: Eine Einzel-Auswahl-Listbox, die `aria-activedescendant` verwendet

Der folgende Codeausschnitt zeigt, wie die listbox-Rolle direkt in den HTML-Quellcode eingefügt wird, indem `aria-activedescendant` verwendet wird.

![Beispiel](0-a84b1ca5.md)

Dies hätte einfacher mit den nativen HTML-`<select>`- und `<label>`-Elementen gehandhabt werden können.

![Beispiel](1-c9238a98.md)

### Weitere Beispiele

- [Beispiel einer scrollbaren Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/): Einzel-Auswahl-Listbox, die scrollt, um mehr Optionen anzuzeigen, ähnlich wie HTML-`<select>` mit einem `size`-Attribut größer als eins.
- [Beispiel einer Listbox mit gruppierten Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/): Einzel-Auswahl-Listbox mit gruppierten Optionen, ähnlich wie HTML-`<select>` mit dem Attribut `size` größer als `"1"` und Optionen, die mit `optgroup`-Elementen gruppiert sind.
- [Beispiele für Listboxen mit umsortierbaren Optionen](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/): Beispiele für Einzel- und Mehrfach-Auswahl-Listboxen mit begleitenden Symbolleisten, bei denen Optionen hinzugefügt, verschoben und entfernt werden können.

## Beste Praktiken

- Um tastaturfreundlich zu sein, sollten Autoren den [Fokus verwalten](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) aller Nachkommen dieser Rolle.
- Es wird empfohlen, dass Autoren verschiedene Stilmittel für die Auswahl verwenden, wenn die Liste nicht fokussiert ist, z.B. wird eine nicht aktive Auswahl oft mit einer helleren Hintergrundfarbe angezeigt.
- Wenn die Listbox nicht Teil eines anderen Widgets ist, sollte sie das `aria-labelledby`-Attribut gesetzt haben.
- Wenn ein oder mehrere Einträge keine DOM-Kinder der Listbox sind, müssen zusätzliche `aria-*`-Eigenschaften gesetzt werden (siehe [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- Wenn es einen gültigen Grund gibt, die Listbox [zu erweitern](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), ist die `combobox`-Rolle möglicherweise geeigneter.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML `<select>`-Element
- HTML `<label>`-Element
- HTML `<option>`-Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA Role Model – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
