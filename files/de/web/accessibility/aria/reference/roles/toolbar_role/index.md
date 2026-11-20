---
title: "ARIA: Rolle toolbar"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `toolbar` kennzeichnet das umschließende Element als eine Sammlung häufig verwendeter Funktionsschaltflächen oder Steuerelemente, die in kompakter Form dargestellt werden.

## Beschreibung

Eine Toolbar ist eine Sammlung häufig verwendeter Steuerelemente wie Schaltflächen oder Kontrollkästchen, die in kompakter Form gruppiert sind. Mit der Rolle `toolbar` können Sie Screenreader-Nutzern das Vorhandensein und den Zweck einer solchen Gruppe vermitteln und die Anzahl der Tabstopps für Tastaturnutzer verringern. Verwenden Sie die Rolle `toolbar` nur, um mindestens drei Steuerelemente zu gruppieren.

Eine Toolbar enthält häufig eine Teilmenge der Funktionen einer `menubar`, um den Bedienaufwand zu verringern. Wenn eine `menubar` mehrere Toolbars enthält, benötigt jede Toolbar eine Bezeichnung. Diese können Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) angeben.

Wenn Sie eine Toolbar erstellen, müssen Sie die Fokusverwaltung und die Tastaturinteraktionen innerhalb der Toolbar implementieren. Berücksichtigen Sie dabei Fälle, in denen dieselben Tasten sowohl zur Navigation in der Toolbar als auch zur Bedienung eines enthaltenen nativen Steuerelements verwendet werden. Mit <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> sollte zwischen den Steuerelementen einer horizontalen Toolbar navigiert werden. <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> sollten verwendet werden, wenn die Toolbar vertikal ist – setzen Sie in diesem Fall auch `aria-orientation="vertical"`. In einer horizontalen Toolbar können diese Tasten stattdessen für die Bedienung von Steuerelementen reserviert bleiben, etwa für Spinbuttons, die vertikale Pfeiltasten benötigen.

Vermeiden Sie Steuerelemente, für deren Bedienung die Pfeiltasten benötigt werden, die bereits zur Navigation in der Toolbar dienen. Wenn Sie ein solches Steuerelement einfügen müssen, platzieren Sie es als letztes Steuerelement in der Toolbar. In einer horizontalen Toolbar könnte beispielsweise eine Textbox das letzte Element sein.

Wenn eines der normalerweise interaktiven Elemente in der Toolbar vorübergehend deaktiviert ist, sollten Sie erwägen, es weiterhin fokussierbar zu lassen, damit Screenreader-Nutzer auf seine Existenz aufmerksam werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Elemente mit der Rolle `toolbar` haben implizit den horizontalen Wert für `aria-orientation`.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Toolbar eine sichtbare Bezeichnung hat, verweisen Sie mit dem Attribut `aria-labelledby` über deren ID darauf. Geben Sie andernfalls ein `aria-label` an. Wenn ein Menü mehrere Toolbars enthält, müssen diese benannt werden.

### Tastaturinteraktionen

Implementieren Sie die Fokusverwaltung so, dass die Tabulatorreihenfolge einen Tabstopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Umschalt + Tab</kbd>
  - : Verschieben den Fokus in die Toolbar hinein beziehungsweise aus ihr heraus. Wenn der Fokus in eine Toolbar verschoben wird:
    - Wird die Toolbar zum ersten Mal fokussiert, erhält das erste nicht deaktivierte Steuerelement den Fokus.
    - Hatte die Toolbar bereits zuvor den Fokus enthalten, kann optional das zuletzt fokussierte Steuerelement den Fokus erhalten. Andernfalls erhält das erste nicht deaktivierte Steuerelement den Fokus.

- <kbd>Pos1</kbd> (optional)
  - : Verschiebt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle `toolbar` haben implizit den horizontalen Wert für `aria-orientation`. Wenn die Toolbar tatsächlich horizontal ausgerichtet ist, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann der Fokus vom ersten zum letzten Element springen.

- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann der Fokus vom letzten zum ersten Element springen.

Wenn eine Toolbar mehrere Zeilen mit Steuerelementen enthält, sollten die Pfeiltasten nach links und rechts den Fokus auch zwischen den Zeilen verschieben können. So können die vertikalen Pfeiltasten für die Bedienung von Steuerelementen reserviert bleiben, etwa für die Navigation zwischen Optionsfeldern oder zum Erhöhen und Verringern des Werts eines numerischen Spinbuttons.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ausgerichtet ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert sind:

- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann der Fokus vom ersten zum letzten Element springen.

- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann der Fokus vom letzten zum ersten Element springen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie die Fokusverwaltung so, dass die Tabulatorreihenfolge einen Tabstopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen der Toolbar verschieben. Wenn Nutzer mit der Tabulatortaste in die Toolbar wechseln, kehrt der Fokus zu dem Steuerelement zurück, das zuletzt fokussiert war.

Das Toolbar-Element selbst erhält keinen Fokus. Der Fokuswechsel in die Toolbar hinein, aus ihr heraus und innerhalb der Toolbar muss jedoch verwaltet werden. Beim Laden erhält das erste fokussierbare Element der Toolbar `tabindex="0"`; alle anderen erhalten `tabindex="-1"`. Bei einer entsprechenden Tastaturinteraktion erhält das fokussierte Element `tabindex="0"`, während das Element, das gerade den Fokus verloren hat, `tabindex="-1"` erhält. Setzen Sie den Fokus mit `element.focus()` auf das Element mit `tabindex="0"`. Dieses Verfahren wird **roving tabindex** genannt. Ein Vorteil dieser Fokusverwaltung ist, dass der Browser das neu fokussierte Element in den sichtbaren Bereich scrollt.

Wenn das Design vorsieht, dass ein bestimmtes Element beim nächsten Wechsel in die Toolbar mit <kbd>Tab</kbd> oder <kbd>Umschalt + Tab</kbd> fokussiert wird, prüfen Sie beim Verlassen der Toolbar, ob dieses Zielelement `tabindex="0"` hat.

Wenn sich der Fokus innerhalb der Toolbar befindet, stellen Sie visuelle Hinweise bereit. Ein visueller Hinweis muss sowohl an der Toolbar selbst – um zu verdeutlichen, dass sie die Navigation mit Pfeiltasten unterstützt – als auch am fokussierten Steuerelement erscheinen. Mit den CSS-Pseudoklassen `:focus` und `:focus-within` können Sie beide Elemente ansprechen.

## Hinweise zur Barrierefreiheit

Vermeiden Sie Steuerelemente, für deren Bedienung die Pfeiltasten benötigt werden, die bereits zur Navigation in der Toolbar dienen (Pfeil nach rechts und links beziehungsweise bei vertikalen Toolbars Pfeil nach oben und unten). Wenn Sie ein solches Steuerelement einfügen müssen, platzieren Sie es als letztes Steuerelement in der Toolbar. In einer horizontalen Toolbar könnte beispielsweise eine Textbox das letzte Element sein.

Wenn eines der normalerweise interaktiven Elemente in der Toolbar deaktiviert ist, sollten Sie erwägen, es weiterhin fokussierbar zu lassen, damit Screenreader-Nutzer auf seine Existenz aufmerksam werden.

## Beispiele

[Toolbar-Beispiel aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-Pseudoklasse `:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Die CSS-Pseudoklasse `:focus-within`](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
