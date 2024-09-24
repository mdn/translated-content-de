---
title: "ARIA: Toolbar-Rolle"
slug: Web/Accessibility/ARIA/Roles/toolbar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `toolbar`-Rolle definiert das umschließende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerelementen, die in einer kompakten visuellen Form dargestellt werden.

## Beschreibung

Eine Toolbar ist eine Sammlung von häufig gebrauchten Steuerelementen, wie Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form gruppiert sind. Die Verwendung der `toolbar`-Rolle kann dazu beitragen, die Anwesenheit und den Zweck einer solchen Gruppe Benutzern von Bildschirmleseprogrammen zu kommunizieren und die Anzahl der Tabstops für Tastaturbenutzer zu reduzieren. Verwenden Sie die `toolbar`-Rolle nur, um 3 oder mehr Steuerelemente zu gruppieren.

Die Toolbar ist häufig ein Unterset von Funktionen, die in einer `menubar` zu finden sind, um den Aufwand für den Benutzer zu reduzieren. Wenn Sie in einer Menüleiste mehr als eine Toolbar haben, benötigt jede Toolbar ein Label, das Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) einfügen können.

Beim Erstellen einer Toolbar müssen Sie das Fokusmanagement und die Tastaturinteraktionen innerhalb der Toolbar implementieren, insbesondere wenn die gleichen Tastaturinteraktionen sowohl in der Toolbar als auch in eingeschlossenen nativen Steuerelementen verwendet werden. Die <kbd>Linke Pfeiltaste</kbd> und die <kbd>Rechte Pfeiltaste</kbd> sollten verwendet werden, um innerhalb einer horizontalen Toolbar zwischen den Steuerelementen zu navigieren. Die <kbd>Obere Pfeiltaste</kbd> und die <kbd>Untere Pfeiltaste</kbd> sollten verwendet werden, wenn die Toolbar vertikal ist – in diesem Fall sollten Sie auch `aria-orientation="vertical"` angeben – oder, in einer horizontalen Toolbar, können diese für die Bedienung von Steuerelementen reserviert werden, wie z.B. Spin-Buttons, die vertikale Pfeiltasten benötigen.

Vermeiden Sie es, Steuerelemente einzuschließen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden. Wenn Sie ein solches Steuerelement einschließen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Beispielsweise könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn eines der sonst interaktiven Elemente innerhalb der Toolbar vorübergehend deaktiviert ist, ziehen Sie in Betracht, es trotzdem fokussierbar zu lassen, damit Benutzer von Bildschirmleseprogrammen über seine Anwesenheit informiert werden.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)

  - : Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Hat die Toolbar ein sichtbares Label, verweisen Sie mit dem Attribut `aria-labelledby` auf dessen ID. Andernfalls geben Sie ein `aria-label` an. Falls es mehrere Toolbars in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tabulatorreihenfolge einen Stopp für die Toolbar umfasst und die Pfeiltasten den Fokus unter den Steuerelementen in der Toolbar bewegen.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Bewegen Sie den Fokus in die und aus der Toolbar. Wenn der Fokus in eine Toolbar bewegt wird:

    - Wenn der Fokus zum ersten Mal in die Toolbar bewegt wird, wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.
    - Wenn die Toolbar zuvor den Fokus enthalten hat, wird der Fokus optional auf das Steuerelement gesetzt, das zuletzt den Fokus hatte. Andernfalls wird er auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Bewegt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (Optional)
  - : Bewegt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Toolbar tatsächlich diese Ausrichtung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Linke Pfeiltaste</kbd> (Für eine horizontale Toolbar (Standard)

  - : Bewegt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umschlagen.

- <kbd>Rechte Pfeiltaste</kbd> (Für eine horizontale Toolbar (Standard)
  - : Bewegt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umschlagen.

In Toolbars mit mehreren Reihen von Steuerelementen erlauben Sie, dass die linken und rechten Pfeiltasten von Reihe zu Reihe umschlagen, und lassen Sie die Option zu, vertikale Pfeiltasten für die Bedienung von Steuerelementen zu reservieren, wie z.B. das Navigieren zwischen Radiobuttons oder das Erhöhen/Verringern eines numerischen Spinners.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert sind:

- <kbd>Untere Pfeiltaste</kbd> (Für eine horizontale Toolbar (Standard)

  - : Bewegt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung vom ersten zum letzten Element umschlagen.

- <kbd>Obere Pfeiltaste</kbd> (Für eine horizontale Toolbar (Standard)
  - : Bewegt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung vom letzten zum ersten Element umschlagen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tabulatorreihenfolge einen Stopp für die Toolbar umfasst und die Pfeiltasten den Fokus unter den Steuerelementen in der Toolbar bewegen. Wenn Sie in die Toolbar einklinken, kehrt der Fokus zu dem Steuerelement zurück, das zuletzt den Fokus hatte.

Während das Toolbar-Element selbst keinen Fokus erhält, muss der Fokus innerhalb, außerhalb und innerhalb der Toolbar verwaltet werden. Beim Laden hat das erste Element in der Tabulatorsequenz innerhalb der Toolbar `tabindex="0"` und alle anderen fokussierbaren Elemente innerhalb der Toolbar haben `tabindex="-1"`. Abhängig von der [Tastaturinteraktion] wird das Element, das den Fokus erhält, auf `tabindex="0"` gesetzt und das Element, das gerade den Fokus verloren hat, wechselt zurück zu `tabindex="-1"`. Setzen Sie den Fokus, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil bei der Verwendung von "roving tabindex" für das Fokusmanagement besteht darin, dass der Browser das neu fokussierte Element in den sichtbaren Bereich scrollen wird.

Wenn das Design vorsieht, dass ein bestimmtes Element beim nächsten Mal fokussiert wird, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> in die Toolbar bewegt, überprüfen Sie, ob dieses Ziel-Element `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Wenn die Toolbar den Fokus innerhalb hat, geben Sie visuelle Hinweise. Wenn ein Element innerhalb der Toolbar den Fokus hat, muss ein visueller Hinweis sowohl auf der Toolbar selbst - zur Unterstützung der Richtungstasten-Navigation - als auch auf dem Steuerelement, das den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente anzusprechen.

## Beispiele

[Toolbar-Beispiel vom <abbr>W3C</abbr>, dem World Wide Web Consortium](https://www.w3.org/TR/wai-aria-practices-1.2/examples/toolbar/toolbar.html)

## Barrierefreiheitsbedenken

Vermeiden Sie es, Steuerelemente einzuschließen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden (rechte und linke Pfeile oder oberer und unterer für vertikale Toolbars). Wenn Sie ein solches Steuerelement einschließen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Beispielsweise könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn eines der sonst interaktiven Elemente innerhalb der Toolbar deaktiviert ist, ziehen Sie in Betracht, es trotzdem fokussierbar zu lassen, damit Benutzer von Bildschirmleseprogrammen über seine Anwesenheit informiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-`:focus`-Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Die CSS-`:focus-within`-Pseudoklasse](/de/docs/Web/CSS/:focus-within)
