---
title: "ARIA: Rolle `toolbar`"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die Rolle `toolbar` definiert das enthaltende Element als eine Sammlung häufig verwendeter Funktionsschaltflächen oder Steuerungen, die in einer kompakten visuellen Form dargestellt sind.

## Beschreibung

Ein Werkzeugleiste ist eine Sammlung häufig verwendeter Steuerungen, wie Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form zusammengefasst sind. Die Rolle `toolbar` kann verwendet werden, um die Anwesenheit und den Zweck einer solchen Gruppierung Benutzern eines Screenreaders mitzuteilen und kann helfen, die Anzahl der Tabstopps für Tastaturbenutzer zu reduzieren. Verwenden Sie die Rolle `toolbar` nur, um 3 oder mehr Steuerungen zu gruppieren.

Die Werkzeugleiste ist häufig eine Untermenge von Funktionen, die in einer `menubar` zu finden sind, um den Aufwand für den Benutzer zu reduzieren. Wenn Sie mehr als eine Werkzeugleiste in einem Menü haben, benötigt jede Werkzeugleiste eine Beschriftung, die Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen können.

Beim Erstellen einer Werkzeugleiste müssen Sie das Fokusmanagement und die Tastaturinteraktionen innerhalb der Werkzeugleiste implementieren und dabei beachten, wann dieselben Tastaturinteraktionen sowohl in der Werkzeugleiste als auch in den enthaltenen nativen Steuerungen verwendet werden. Der <kbd>Linke Pfeil</kbd> und der <kbd>Rechte Pfeil</kbd> sollten verwendet werden, um zwischen den Steuerungen innerhalb einer horizontalen Werkzeugleiste zu navigieren. Der <kbd>Oben-Pfeil</kbd> und der <kbd>Unten-Pfeil</kbd> sollten verwendet werden, wenn die Werkzeugleiste vertikal ist — in diesem Fall sollten Sie auch `aria-orientation="vertical"` hinzufügen — oder in einer horizontalen Werkzeugleiste können sie reserviert bleiben zum Bedienen von Steuerungen, wie z.B. Spin-Schaltflächen, die vertikale Pfeiltasten für den Betrieb erfordern.

Vermeiden Sie das Einfügen von Steuerungen, deren Bedienung Pfeiltasten erfordert, die für die Navigation in der Werkzeugleiste verwendet werden. Falls Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel könnte in einer horizontalen Werkzeugleiste ein Textfeld als letztes Element eingefügt werden.

Wenn irgendeines der ansonsten interaktiven Elemente innerhalb der Werkzeugleiste vorübergehend deaktiviert ist, sollten Sie in Betracht ziehen, sie fokussierbar zu lassen, damit Benutzer eines Screenreaders auf ihre Anwesenheit aufmerksam gemacht werden können.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)

  - : Elemente mit der Rolle toolbar haben einen impliziten `aria-orientation` Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Werkzeugleiste eine sichtbare Beschriftung hat, verweisen Sie mit der ID über das `aria-labelledby` Attribut darauf. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Werkzeugleiste in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Reihenfolge einen Stop für die Werkzeugleiste enthält und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste verschieben.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Verschiebt den Fokus in die und aus der Werkzeugleiste. Wenn der Fokus in eine Werkzeugleiste verschoben wird:

    - Wenn der Fokus zum ersten Mal in die Werkzeugleiste verschoben wird, wird der Fokus auf die erste Steuerung gesetzt, die nicht deaktiviert ist.
    - Wenn die Werkzeugleiste zuvor den Fokus enthalten hat, wird der Fokus optional auf die Steuerung gesetzt, die zuletzt den Fokus hatte. Andernfalls wird er auf die erste Steuerung gesetzt, die nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Verschiebt den Fokus auf das erste Element.

- <kbd>End</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Werkzeugleiste

Elemente mit der Rolle toolbar haben einen impliziten `aria-orientation` Wert von horizontal. Wenn die Werkzeugleiste tatsächlich diese Ausrichtung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Linker Pfeil</kbd> (Für eine horizontale Werkzeugleiste (das Standard)

  - : Verschiebt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umschlagen.

- <kbd>Rechter Pfeil</kbd> (Für eine horizontale Werkzeugleiste (das Standard)
  - : Verschiebt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umschlagen.

In Werkzeugleisten mit mehreren Reihen von Steuerungen, erlauben Sie, dass die linken und rechten Pfeile von Reihe zu Reihe schlagen, wobei die Option bleibt, vertikale Pfeiltasten für den Betrieb von Steuerungen vorzubehalten, wie z.B. die Navigation zwischen Radiobuttons oder das Erhöhen/Verringern eines numerischen Spinners.

#### Vertikale Werkzeugleiste

Wenn die Werkzeugleiste vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Unten-Pfeil</kbd> (Für eine horizontale Werkzeugleiste (das Standard)

  - : Verschiebt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umschlagen.

- <kbd>Oben-Pfeil</kbd> (Für eine horizontale Werkzeugleiste (das Standard)
  - : Verschiebt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umschlagen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokusmanagement, sodass die Tastatur-Tab-Reihenfolge einen Stop für die Werkzeugleiste enthält und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste verschieben. Beim Tabben in die Werkzeugleiste kehrt der Fokus zu der Steuerung zurück, die zuletzt den Fokus hatte.

Während das Werkzeugleisten-Element selbst keinen Fokus erhält, muss der Fokus auf die Bewegung in, aus und innerhalb der Werkzeugleiste verwaltet werden. Beim Laden hat das erste Element in der Reihenfolge der Tabulatoren innerhalb der Werkzeugleiste `tabindex="0"` und `tabindex="-1"` ist auf alle anderen fokussierbaren Elemente innerhalb der Werkzeugleiste gesetzt. Abhängig von der [Tastaturinteraktion], wird das Element, das den Fokus erhält, auf `tabindex="0"` gesetzt, und das Element, das gerade den Fokus verloren hat, wird auf `tabindex="-1"` zurückgesetzt. Setzen Sie den Fokus, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus besteht darin, dass der Browser das neu fokussierte Element in den Sichtbereich scrollt.

Wenn das Design vorsieht, dass ein bestimmtes Element beim nächsten Mal fokussiert wird, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> in die Werkzeugleiste verschiebt, stellen Sie sicher, dass das Ziel-Element `tabindex="0"` hat, wenn die Werkzeugleiste den Fokus verliert.

Wenn die Werkzeugleiste den Fokus in sich hat, sollten visuelle Hinweise bereitgestellt werden. Wenn ein Element innerhalb der Werkzeugleiste den Fokus hat, muss ein visueller Hinweis sowohl auf der Werkzeugleiste selbst - um die Werkzeugleiste Unterstützung für die Richtungsnavigation mit den Pfeiltasten zu ermöglichen - als auch auf der Steuerung, die den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente zu zielgerichtet ansprechen.

## Beispiele

[Beispiel für eine Werkzeugleiste aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Barrierefreiheit

Vermeiden Sie das Einfügen von Steuerungen, deren Bedienung die für die Navigation in der Werkzeugleiste verwendeten Pfeiltasten erfordert (rechte und linke Pfeile oder oben und unten für vertikale Werkzeugleisten). Falls Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel könnte in einer horizontalen Werkzeugleiste ein Textfeld als letztes Element eingefügt werden.

Wenn irgendwelche der ansonsten interaktiven Elemente innerhalb der Werkzeugleiste deaktiviert sind, sollten Sie in Betracht ziehen, sie fokussierbar zu lassen, damit Benutzer eines Screenreaders auf ihre Anwesenheit aufmerksam gemacht werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-Pseudoklasse `:focus`](/de/docs/Web/CSS/:focus)
- [Die CSS-Pseudoklasse `:focus-within`](/de/docs/Web/CSS/:focus-within)
