---
title: "ARIA: Rolle toolbar"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: 4820b23b826b2ac8db0705f5c441edc988238c4d
---

Die Rolle `toolbar` kennzeichnet das enthaltende Element als Sammlung häufig verwendeter Funktionsschaltflächen oder Steuerelemente in einer kompakten visuellen Anordnung.

## Beschreibung

Eine Toolbar ist eine Sammlung häufig verwendeter Steuerelemente, etwa Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Anordnung zusammengefasst sind. Mit der Rolle `toolbar` können Sie Nutzenden von Screenreadern das Vorhandensein und den Zweck einer solchen Gruppe vermitteln. Außerdem kann sie die Anzahl der Tabstopps für Tastaturnutzende verringern. Verwenden Sie die Rolle `toolbar` nur, um drei oder mehr Steuerelemente zu gruppieren.

Eine Toolbar enthält häufig eine Teilmenge der Funktionen einer `menubar`, um den Bedienaufwand zu verringern. Wenn Sie mehr als eine Toolbar in einer `menubar` haben, benötigt jede Toolbar eine Bezeichnung. Diese können Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) angeben.

Wenn Sie eine Toolbar erstellen, müssen Sie die Fokusverwaltung und die Tastaturinteraktionen innerhalb der Toolbar implementieren. Berücksichtigen Sie dabei, wenn dieselben Tastaturinteraktionen sowohl zur Navigation in der Toolbar als auch zur Bedienung eines enthaltenen nativen Steuerelements verwendet werden. Mit <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> sollte zwischen den Steuerelementen einer horizontalen Toolbar navigiert werden. Bei einer vertikalen Toolbar sollten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> verwendet werden. Geben Sie in diesem Fall außerdem `aria-orientation="vertical"` an. In einer horizontalen Toolbar können die vertikalen Pfeiltasten dagegen für die Bedienung von Steuerelementen reserviert bleiben, etwa für numerische Eingabefelder, die diese Tasten benötigen.

Vermeiden Sie Steuerelemente, für deren Bedienung die Pfeiltasten benötigt werden, die zur Navigation in der Toolbar dienen. Wenn Sie ein solches Steuerelement einfügen müssen, platzieren Sie es als letztes Steuerelement in der Toolbar. In einer horizontalen Toolbar könnte beispielsweise ein Textfeld das letzte Element sein.

Wenn interaktive Elemente innerhalb der Toolbar vorübergehend deaktiviert sind, sollten Sie erwägen, sie weiterhin fokussierbar zu lassen, damit Nutzende von Screenreadern von ihrer Existenz erfahren.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Elemente mit der Rolle `toolbar` haben implizit den `aria-orientation`-Wert `horizontal`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Toolbar eine sichtbare Bezeichnung hat, verweisen Sie mit dem Attribut `aria-labelledby` über deren ID darauf. Geben Sie andernfalls ein `aria-label` an. Wenn sich in einem Menü mehr als eine Toolbar befindet, müssen die Toolbars benannt werden.

### Tastaturinteraktionen

Implementieren Sie die Fokusverwaltung so, dass die Tab-Reihenfolge einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen innerhalb der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Umschalt + Tab</kbd>
  - : Verschieben den Fokus in die Toolbar hinein und aus ihr heraus. Wenn der Fokus in eine Toolbar verschoben wird:
    - Wird die Toolbar zum ersten Mal fokussiert, erhält das erste nicht deaktivierte Steuerelement den Fokus.
    - War der Fokus bereits zuvor innerhalb der Toolbar, kann optional das zuletzt fokussierte Steuerelement den Fokus erhalten. Andernfalls erhält das erste nicht deaktivierte Steuerelement den Fokus.

- <kbd>Pos1</kbd> (optional)
  - : Verschiebt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle `toolbar` haben implizit den `aria-orientation`-Wert `horizontal`. Wenn die Toolbar tatsächlich horizontal ausgerichtet ist, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann der Fokus vom ersten zum letzten Element wechseln.

- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann der Fokus vom letzten zum ersten Element wechseln.

Bei Toolbars mit mehreren Reihen von Steuerelementen sollten die Pfeiltasten nach links und rechts den Fokus auch über Reihengrenzen hinweg verschieben. So können die vertikalen Pfeiltasten für die Bedienung von Steuerelementen reserviert bleiben, beispielsweise für die Navigation zwischen Optionsschaltflächen oder zum Erhöhen und Verringern eines numerischen Werts.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ausgerichtet ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert sind:

- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann der Fokus vom ersten zum letzten Element wechseln.

- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann der Fokus vom letzten zum ersten Element wechseln.

### Erforderliche JavaScript-Funktionen

Implementieren Sie die Fokusverwaltung so, dass die Tab-Reihenfolge einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen innerhalb der Toolbar verschieben. Wenn Nutzende mit der Tab-Taste in die Toolbar wechseln, kehrt der Fokus zu dem Steuerelement zurück, das zuletzt fokussiert war.

Das Toolbar-Element selbst erhält keinen Fokus. Dennoch muss die Fokusbewegung in die Toolbar hinein, aus ihr heraus und innerhalb der Toolbar gesteuert werden. Beim Laden erhält das erste fokussierbare Element in der Tab-Reihenfolge der Toolbar `tabindex="0"`; alle anderen erhalten `tabindex="-1"`. Abhängig von der Tastaturinteraktion erhält das fokussierte Element `tabindex="0"`, während das Element, das den Fokus gerade verloren hat, `tabindex="-1"` erhält. Setzen Sie den Fokus mit `element.focus()` auf das Element mit `tabindex="0"`. Dieses Verfahren heißt **roving tabindex**. Ein Vorteil dieser Fokusverwaltung besteht darin, dass der Browser das neu fokussierte Element in den sichtbaren Bereich scrollt.

Wenn beim nächsten Wechsel in die Toolbar mit <kbd>Tab</kbd> oder <kbd>Umschalt + Tab</kbd> ein bestimmtes Element fokussiert werden soll, prüfen Sie, ob dieses Zielelement `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Wenn sich der Fokus innerhalb der Toolbar befindet, stellen Sie visuelle Hinweise bereit. Ist ein Element innerhalb der Toolbar fokussiert, müssen sowohl die Toolbar selbst als auch das fokussierte Steuerelement visuell hervorgehoben werden. Die Hervorhebung der Toolbar verdeutlicht, dass die Navigation mit den Pfeiltasten möglich ist. Mit den CSS-Pseudoklassen `:focus` und `:focus-within` können Sie beide Elemente ansprechen.

## Beispiele

[Toolbar-Beispiel aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Hinweise zur Barrierefreiheit

Vermeiden Sie Steuerelemente, für deren Bedienung die Pfeiltasten benötigt werden, die zur Navigation in der Toolbar dienen (links und rechts beziehungsweise oben und unten bei vertikalen Toolbars). Wenn Sie ein solches Steuerelement einfügen müssen, platzieren Sie es als letztes Steuerelement in der Toolbar. In einer horizontalen Toolbar könnte beispielsweise ein Textfeld das letzte Element sein.

Wenn interaktive Elemente innerhalb der Toolbar deaktiviert sind, sollten Sie erwägen, sie weiterhin fokussierbar zu lassen, damit Nutzende von Screenreadern von ihrer Existenz erfahren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-Pseudoklasse `:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Die CSS-Pseudoklasse `:focus-within`](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
