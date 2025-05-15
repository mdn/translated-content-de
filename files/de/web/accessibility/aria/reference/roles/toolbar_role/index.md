---
title: "ARIA: Rolle der Toolbar"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `toolbar`-Rolle definiert das enthaltende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerelementen, die in einer kompakten visuellen Form dargestellt werden.

## Beschreibung

Eine Toolbar ist eine Sammlung von häufig verwendeten Steuerelementen, wie Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form zusammengefasst sind. Die `toolbar`-Rolle kann verwendet werden, um Bildschirmlesegeräten die Anwesenheit und den Zweck einer solchen Gruppierung zu kommunizieren und kann helfen, die Anzahl der Tab-Stopps für Tastaturnutzer zu reduzieren. Verwenden Sie die `toolbar`-Rolle nur, um 3 oder mehr Steuerelemente zu gruppieren.

Die Toolbar ist oft ein Teil der Funktionen, die in einer `menubar` gefunden werden, um den Aufwand für den Benutzer zu verringern. Wenn Sie mehr als eine Toolbar in einer Menubar haben, benötigt jede Toolbar ein Label, das Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) einfügen können.

Beim Erstellen einer Toolbar müssen Sie das Fokus-Management und die Tastaturinteraktionen innerhalb der Toolbar implementieren und dabei beachten, wann dieselben Tastaturinteraktionen sowohl in der Toolbar als auch in den enthaltenen nativen Steuerelementen verwendet werden. Der <kbd>linke Pfeil</kbd> und der <kbd>rechte Pfeil</kbd> sollten verwendet werden, um zwischen den Steuerelementen innerhalb einer horizontalen Toolbar zu navigieren. Der <kbd>obere Pfeil</kbd> und der <kbd>untere Pfeil</kbd> sollten verwendet werden, wenn die Toolbar vertikal ist – in diesem Fall sollten Sie auch `aria-orientation="vertical"` einfügen – oder in einer horizontalen Toolbar können sie für die Bedienung von Steuerelementen reserviert werden, wie z.B. Drehknöpfe, die vertikale Pfeiltasten zur Bedienung erfordern.

Vermeiden Sie die Aufnahme von Steuerelementen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden. Wenn Sie ein solches Steuerelement einschließen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingeschlossen werden.

Wenn eines der interaktiven Elemente innerhalb der Toolbar vorübergehend deaktiviert ist, sollten Sie diese weiterhin fokussierbar lassen, damit Bildschirmlesegeräte-Benutzer über deren Anwesenheit informiert werden können.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)

  - : Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Toolbar ein sichtbares Label hat, beziehen Sie sich mit der `aria-labelledby`-Eigenschaft auf dessen ID. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Toolbar in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie ein Fokus-Management, sodass die Tastatur-Tab-Sequenz einen Stopp für die Toolbar umfasst und die Pfeiltasten den Fokus unter den Steuerelementen in der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Verschiebt den Fokus in die und aus der Toolbar. Wenn der Fokus in eine Toolbar verschoben wird:

    - Wenn der Fokus zum ersten Mal in die Toolbar verschoben wird, wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.
    - Wenn die Toolbar zuvor den Fokus hatte, kann der Fokus optional auf das Steuerelement gesetzt werden, das zuletzt den Fokus hatte. Andernfalls wird er auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Verschiebt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Toolbar tatsächlich diese Ausrichtung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Linke Pfeiltaste</kbd> (Für eine horizontale Toolbar (den Standard)

  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann sich die Fokusbewegung vom ersten Element auf das letzte Element umschließen.

- <kbd>Rechte Pfeiltaste</kbd> (Für eine horizontale Toolbar (den Standard)
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann sich die Fokusbewegung vom letzten Element auf das erste Element umschließen.

In Toolbars mit mehreren Reihen von Steuerelementen erlauben Sie den linken und rechten Pfeilen, sich von Reihe zu Reihe zu umschließen, und lassen Sie die Option, vertikale Pfeiltasten für die Bedienung von Steuerelementen wie das Navigieren unter Radioschaltern oder das Erhöhen/Verringern eines numerischen Spinners zu reservieren.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist, und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Unterer Pfeil</kbd> (Für eine horizontale Toolbar (den Standard)

  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann sich die Fokusbewegung vom ersten Element auf das letzte Element umschließen.

- <kbd>Oberer Pfeil</kbd> (Für eine horizontale Toolbar (den Standard)
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann sich die Fokusbewegung vom letzten Element auf das erste Element umschließen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie ein Fokus-Management, sodass die Tastatur-Tab-Sequenz einen Stopp für die Toolbar umfasst und die Pfeiltasten den Fokus unter den Steuerelementen in der Toolbar verschieben. Beim Wechseln in die Toolbar kehrt der Fokus auf das Steuerelement zurück, das zuletzt den Fokus hatte.

Obwohl das Toolbar-Element selbst keinen Fokus erhält, muss der Fokus bei der Bewegung in, aus und innerhalb der Toolbar verwaltet werden. Beim Laden erhält das erste Element in der Tabbing-Sequenz innerhalb der Toolbar `tabindex="0"`, während alle anderen fokussierbaren Elemente in der Toolbar `tabindex="-1"` haben. Abhängig von der [Tastaturinteraktion] erhält das Element, das den Fokus erhält, `tabindex="0"`, und das Element, das gerade den Fokus verloren hat, wird wieder auf `tabindex="-1"` gesetzt. Setzen Sie den Fokus mit `element.focus()` auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus ist, dass der Browser das neu fokussierte Element in den sichtbaren Bereich scrollt.

Wenn das Design erfordert, dass ein bestimmtes Element fokussiert wird, während der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> wieder in die Toolbar verschiebt, überprüfen Sie, ob dieses Ziel-Element `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Wenn die Toolbar den Fokus innerhalb hat, bieten Sie visuelle Hinweise. Wenn ein Element innerhalb der Toolbar den Fokus hat, muss ein visueller Hinweis sowohl auf der Toolbar selbst - um zu unterstützen, dass die Toolbar eine richtungsgebundene Navigation mit den Pfeiltasten ermöglicht - als auch auf dem Steuerelement, das den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente zu zielen.

## Beispiele

[Toolbar-Beispiel des <abbr>W3C</abbr>, des World Wide Web Consortiums](https://www.w3.org/TR/wai-aria-practices-1.2/examples/toolbar/toolbar.html)

## Barrierefreiheitsbedenken

Vermeiden Sie die Aufnahme von Steuerelementen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden (rechts und links, oder oben und unten für vertikale Toolbars). Wenn Sie ein solches Steuerelement einschließen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingeschlossen werden.

Wenn eines der interaktiven Elemente innerhalb der Toolbar deaktiviert ist, sollten Sie erwägen, diese weiterhin fokussierbar zu lassen, damit Bildschirmlesegeräte-Benutzer über deren Anwesenheit informiert werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Die CSS `:focus-within` Pseudoklasse](/de/docs/Web/CSS/:focus-within)
