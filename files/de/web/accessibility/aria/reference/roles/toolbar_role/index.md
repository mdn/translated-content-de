---
title: "ARIA: Rolle toolbar"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `toolbar`-Rolle definiert das umschließende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerelementen, die in kompakter visueller Form dargestellt werden.

## Beschreibung

Eine Toolbar ist eine Sammlung von häufig verwendeten Steuerelementen, wie Schaltflächen oder Kontrollkästchen, die in kompakter visueller Form zusammengefasst sind. Die `toolbar`-Rolle kann verwendet werden, um Screenreader-Nutzern die Anwesenheit und den Zweck einer solchen Gruppierung mitzuteilen und um die Anzahl der Tabstopps für Tastaturnutzer zu reduzieren. Die `toolbar`-Rolle sollte nur verwendet werden, um 3 oder mehr Steuerelemente zu gruppieren.

Eine Toolbar ist üblicherweise ein Teilbereich der Funktionen, die in einer `menubar` gefunden werden, um den Benutzeraufwand zu reduzieren. Wenn Sie mehr als eine Toolbar in einer Menu-Leiste haben, benötigt jede Toolbar ein Label, das Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) einschließen können.

Beim Erstellen einer Toolbar müssen Sie das Fokus-Management und die Tastaturinteraktionen innerhalb der Toolbar implementieren, insbesondere wenn dieselben Tastaturinteraktionen sowohl in der Toolbar als auch in enthaltenen nativen Steuerelementen verwendet werden. Die <kbd>Linkspfeil</kbd>- und <kbd>Rechtspfeil</kbd>-Tasten sollten verwendet werden, um zwischen den Steuerelementen innerhalb einer horizontalen Toolbar zu navigieren. Die <kbd>Hochpfeil</kbd>- und <kbd>Runterpfeil</kbd>-Tasten sollten verwendet werden, wenn die Toolbar vertikal ist — in diesem Fall sollten Sie auch `aria-orientation="vertical"` hinzufügen — oder können in einer horizontalen Toolbar für die Bedienung von Steuerelementen reserviert werden, wie zum Beispiel Drehknöpfe, die vertikale Pfeiltasten zum Bedienen erfordern.

Vermeiden Sie das Einfügen von Steuerelementen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden. Wenn ein solches Steuerelement unbedingt erforderlich ist, sollten Sie es am Ende der Toolbar platzieren. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn in der Toolbar temporär deaktivierte interaktive Elemente vorhanden sind, sollten Sie in Erwägung ziehen, diese weiterhin fokussierbar zu lassen, damit Screenreader-Nutzer über deren Anwesenheit informiert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)

  - : Elemente mit der Rolle toolbar haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Toolbar ein sichtbares Label hat, verweisen Sie darauf mit der ID über das `aria-labelledby`-Attribut. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Toolbar in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokus-Management so, dass die Tabulatorsequenz der Tastatur einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Verschiebt den Fokus in die und aus der Toolbar. Wenn der Fokus in eine Toolbar verschoben wird:
    - Wenn der Fokus zum ersten Mal in die Toolbar verschoben wird, wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.
    - Wenn die Toolbar zuvor den Fokus hatte, wird der Fokus optional auf das Steuerelement gesetzt, das zuletzt den Fokus hatte. Andernfalls wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Verschiebt den Fokus auf das erste Element.

- <kbd>End</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle toolbar haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Toolbar tatsächlich diese Orientierung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Linkspfeil</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)

  - : Verschiebt den Fokus zum vorherigen Steuerelement. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umschlagen.

- <kbd>Rechtspfeil</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)
  - : Verschiebt den Fokus zum nächsten Steuerelement. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umschlagen.

In Toolbars mit mehreren Zeilen von Steuerelementen sollten die Pfeiltasten nach links und rechts von Zeile zu Zeile umschlagen können, während die vertikalen Pfeiltasten optional für die Bedienung von Steuerelementen reserviert werden, wie das Navigieren zwischen Optionsschaltflächen oder das Erhöhen/Verringern eines Zahlenwerts in einem Drehknopf.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Runterpfeil</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)

  - : Verschiebt den Fokus zum vorherigen Steuerelement. Optional kann die Fokusbewegung vom ersten Element zum letzten Element umschlagen.

- <kbd>Hochpfeil</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)
  - : Verschiebt den Fokus zum nächsten Steuerelement. Optional kann die Fokusbewegung vom letzten Element zum ersten Element umschlagen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokus-Management so, dass die Tabulatorsequenz der Tastatur einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen der Toolbar verschieben. Wenn Sie in die Toolbar tabben, kehrt der Fokus zu dem Steuerelement zurück, das zuletzt den Fokus hatte.

Obwohl das Toolbar-Element selbst keinen Fokus erhält, muss der Fokus beim Bewegen in, aus und innerhalb der Toolbar verwaltet werden. Beim Laden erhält das erste Element in der Tabulatorsequenz innerhalb der Toolbar `tabindex="0"` mit `tabindex="-1"` auf allen anderen fokussierbaren Elementen innerhalb der Toolbar. Abhängig von der [Tastaturinteraktion] wird das Element, das den Fokus erhält, auf `tabindex="0"` gesetzt, und das Element, das gerade den Fokus verloren hat, wird wieder auf `tabindex="-1"` gesetzt. Setzen Sie den Fokus, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus besteht darin, dass der Browser das neue fokussierte Element in den sichtbaren Bereich scrollt.

Wenn das Design das Fokussieren eines bestimmten Elements erfordert, sobald der Benutzer den Fokus in die Toolbar mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> verschiebt, überprüfen Sie, ob dieses Zielelement `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Wenn die Toolbar den Fokus innerhalb hat, sorgen Sie für visuelle Hinweise. Wenn ein Element innerhalb der Toolbar den Fokus hat, muss ein visueller Hinweis sowohl auf der Toolbar selbst — um zu verdeutlichen, dass die Toolbar die Navigation mit den Pfeiltasten unterstützt — als auch auf dem Steuerelement, das den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente anzuvisieren.

## Beispiele

[Toolbar-Beispiel aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Barrierefreiheit

Vermeiden Sie das Einfügen von Steuerelementen, deren Bedienung Pfeiltasten verwendet, die für die Toolbar-Navigation genutzt werden (rechter und linker Pfeil oder oben und unten für vertikale Toolbars). Wenn ein solches Steuerelement unbedingt erforderlich ist, platzieren Sie es als letztes Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn irgendein der ansonsten interaktiven Elemente innerhalb der Toolbar deaktiviert ist, ziehen Sie es in Betracht, diese fokussierbar zu lassen, damit Screenreader-Nutzer über deren Anwesenheit informiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS-Pseudoklasse `:focus`](/de/docs/Web/CSS/:focus)
- [Die CSS-Pseudoklasse `:focus-within`](/de/docs/Web/CSS/:focus-within)
