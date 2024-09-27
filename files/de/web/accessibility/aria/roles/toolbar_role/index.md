---
title: "ARIA: toolbar-Rolle"
slug: Web/Accessibility/ARIA/Roles/toolbar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `toolbar`-Rolle definiert das enthaltende Element als eine Sammlung häufig verwendeter Funktionsschaltflächen oder Steuerungen, die in einer kompakten visuellen Form dargestellt sind.

## Beschreibung

Eine Werkzeugleiste ist eine Sammlung häufig verwendeter Steuerungen, wie z. B. Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form gruppiert sind. Die `toolbar`-Rolle kann verwendet werden, um das Vorhandensein und den Zweck einer solchen Gruppierung für Bildschirmleseprogramme zu kommunizieren und kann helfen, die Anzahl der Tabstopps für Tastaturnutzer zu verringern. Verwenden Sie die `toolbar`-Rolle nur, um 3 oder mehr Steuerungen zu gruppieren.

Die Werkzeugleiste ist häufig eine Untereinheit von Funktionen, die in einer `menubar` zu finden sind, um den Benutzungsaufwand zu reduzieren. Wenn Sie mehr als eine Werkzeugleiste in einer Menüleiste haben, benötigt jede Werkzeugleiste ein Label, das Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) einfügen können.

Beim Erstellen einer Werkzeugleiste müssen Sie das Fokusmanagement und die Tastaturinteraktionen innerhalb der Werkzeugleiste implementieren, insbesondere wenn dieselben Tastaturinteraktionen sowohl in der Werkzeugleiste als auch in enthaltenen nativen Steuerungen verwendet werden. Die <kbd>Linke Pfeiltaste</kbd> und die <kbd>Rechte Pfeiltaste</kbd> sollten verwendet werden, um zwischen den Steuerungen innerhalb einer horizontalen Werkzeugleiste zu navigieren. Die <kbd>Oben Pfeiltaste</kbd> und die <kbd>Unten Pfeiltaste</kbd> sollten verwendet werden, wenn die Werkzeugleiste vertikal ist — in diesem Fall sollten Sie auch `aria-orientation="vertical"` einfügen — oder in einer horizontalen Werkzeugleiste können sie für die Bedienung von Steuerungen reserviert werden, wie z. B. Spin-Schaltflächen, die vertikale Pfeiltasten erfordern.

Vermeiden Sie die Aufnahme von Steuerungen, deren Bedienung Pfeiltasten erfordert, die für die Navigation in der Werkzeugleiste verwendet werden. Wenn Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel könnte in einer horizontalen Werkzeugleiste ein Textfeld als letztes Element eingefügt werden.

Wenn einer der sonst interaktiven Elemente innerhalb der Werkzeugleiste vorübergehend deaktiviert ist, sollten Sie in Betracht ziehen, sie fokussierbar zu lassen, damit Benutzer von Bildschirmleseprogrammen auf ihre Anwesenheit aufmerksam gemacht werden können.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)

  - : Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn die Werkzeugleiste eine sichtbare Beschriftung hat, verweisen Sie mit der ID auf die `aria-labelledby`-Eigenschaft. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Werkzeugleiste in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Sequenz einen Stopp für die Werkzeugleiste umfasst und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste verschieben.

- <kbd>Tab</kbd> und <kbd>Umschalt + Tab</kbd>

  - : Bewegen Sie den Fokus in die und aus der Werkzeugleiste. Wenn der Fokus in eine Werkzeugleiste wechselt:

    - Wenn der Fokus zum ersten Mal in die Werkzeugleiste wechselt, wird der Fokus auf das erste Steuerungselement gesetzt, das nicht deaktiviert ist.
    - Wenn die Werkzeugleiste zuvor den Fokus enthalten hat, wird der Fokus optional auf die Steuerung gesetzt, die zuletzt den Fokus hatte. Andernfalls wird er auf das erste Steuerungselement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Verschiebt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Werkzeugleiste

Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Werkzeugleiste tatsächlich diese Ausrichtung hat, müssen folgende Tastaturinteraktionen implementiert werden:

- <kbd>Linke Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (die Standardeinstellung)

  - : Verschiebt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umspringen.

- <kbd>Rechte Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (die Standardeinstellung)
  - : Verschiebt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umspringen.

In Werkzeugleisten mit mehreren Reihen von Steuerungen erlauben Sie, dass die linken und rechten Pfeiltasten von Reihe zu Reihe umspringen, wobei die Möglichkeit besteht, vertikale Pfeiltasten für die Bedienung von Steuerungen zu reservieren, wie z. B. das Navigieren zwischen Radio-Buttons oder das Erhöhen/Verringern eines numerischen Spinners.

#### Vertikale Werkzeugleiste

Wenn die Werkzeugleiste vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist, und die folgenden Tastaturinteraktionen werden implementiert:

- <kbd>Unten Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (die Standardeinstellung)

  - : Verschiebt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umspringen.

- <kbd>Oben Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (die Standardeinstellung)
  - : Verschiebt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umspringen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Sequenz einen Stopp für die Werkzeugleiste umfasst und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste verschieben. Beim Tabben in die Werkzeugleiste kehrt der Fokus auf die Steuerung zurück, die zuletzt den Fokus hatte.

Während das Werkzeugleiste-Element selbst keinen Fokus erhält, muss der Fokus beim Eintritt, Verlassen und innerhalb der Werkzeugleiste verwaltet werden. Beim Laden hat das erste Element in der Tabulatorsequenz innerhalb der Werkzeugleiste `tabindex="0"` und `tabindex="-1"` wird auf alle anderen fokussierbaren Elemente innerhalb der Werkzeugleiste gesetzt. Abhängig von der [Tastaturinteraktion], das Element, das den Fokus erhält, wird auf `tabindex="0"` gesetzt, und das Element, das gerade den Fokus verloren hat, wird wieder auf `tabindex="-1"` gesetzt. Setzen Sie den Fokus, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird "roving tabindex" genannt. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus ist, dass der Browser das neu fokussierte Element in den Sichtbereich scrollt.

Wenn das Design erfordert, dass ein bestimmtes Element das nächste Mal fokussiert wird, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Umschalt + Tab</kbd> in die Werkzeugleiste bewegt, überprüfen Sie, ob dieses Ziel-Element `tabindex="0"` hat, wenn die Werkzeugleiste den Fokus verliert.

Wenn die Werkzeugleiste den Fokus innerhalb hat, stellen Sie visuelle Hinweise bereit. Wenn ein Element innerhalb der Werkzeugleiste Fokus hat, muss ein visueller Hinweis sowohl auf der Werkzeugleiste selbst - um zu unterstützen, dass die Werkzeugleiste eine Richtung mit den Pfeiltasten unterstützt - als auch auf der Steuerung, die den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente zu markieren.

## Beispiele

[Beispiel für eine Werkzeugleiste von <abbr>W3C</abbr>, dem World Wide Web Consortium](https://www.w3.org/TR/wai-aria-practices-1.2/examples/toolbar/toolbar.html)

## Barrierefreiheit

Vermeiden Sie die Aufnahme von Steuerungen, deren Bedienung Pfeiltasten erfordert, die für die Navigation in der Werkzeugleiste verwendet werden (rechte und linke Pfeile oder oben und unten für vertikale Werkzeugleisten). Wenn Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel könnte in einer horizontalen Werkzeugleiste ein Textfeld als letztes Element eingefügt werden.

Wenn einer der interaktiven Elemente innerhalb der Werkzeugleiste deaktiviert ist, sollten Sie in Betracht ziehen, sie fokussierbar zu lassen, damit Benutzer von Bildschirmleseprogrammen auf ihre Anwesenheit aufmerksam gemacht werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-Pseudoklasse `:focus`](/de/docs/Web/CSS/:focus)
- [Die CSS-Pseudoklasse `:focus-within`](/de/docs/Web/CSS/:focus-within)
