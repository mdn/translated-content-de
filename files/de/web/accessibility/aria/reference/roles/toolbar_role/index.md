---
title: "ARIA: toolbar Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `toolbar`-Rolle definiert das umgebende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerelementen, die in kompakter visueller Form dargestellt sind.

## Beschreibung

Eine Toolbar ist eine Sammlung von häufig verwendeten Steuerelementen, wie Schaltflächen oder Kontrollkästchen, die zusammen in einer kompakten visuellen Form gruppiert sind. Die `toolbar`-Rolle kann verwendet werden, um die Anwesenheit und den Zweck einer solchen Gruppierung für Screenreader-Nutzer zu kommunizieren und kann dazu beitragen, die Anzahl der Tabulatorstopps für Tastaturnutzer zu reduzieren. Verwenden Sie die `toolbar`-Rolle nur, um 3 oder mehr Steuerelemente zu gruppieren.

Eine Toolbar ist häufig eine Teilmenge der Funktionen, die in einer `menubar` zu finden sind, um den Aufwand für den Nutzer zu reduzieren. Wenn Sie mehr als eine Toolbar in einer Menüleiste haben, benötigt jede Toolbar ein Label; welches Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen können.

Beim Erstellen einer Toolbar müssen Sie die Fokusverwaltung und Tastaturinteraktionen innerhalb der Toolbar implementieren und berücksichtigen, wenn dieselben Tastaturinteraktionen sowohl in der Toolbar als auch im enthaltenen nativen Steuerelement verwendet werden. Die Tasten <kbd>Nach-links-Taste</kbd> und <kbd>Nach-rechts-Taste</kbd> sollten verwendet werden, um zwischen den Steuerelementen innerhalb einer horizontalen Toolbar zu navigieren. Die Tasten <kbd>Nach-oben-Taste</kbd> und <kbd>Nach-unten-Taste</kbd> sollten verwendet werden, wenn die Toolbar vertikal ist – in diesem Fall möchten Sie auch die `aria-orientation="vertical"` einschließen – oder in einer horizontalen Toolbar, können sie für Bedienelemente reserviert werden, wie zum Beispiel Spin-Buttons, die vertikale Pfeiltasten erfordern.

Vermeiden Sie die Einbeziehung von Steuerelementen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden. Wenn ein solches Steuerelement integriert werden muss, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingeschlossen werden.

Falls eines der ansonsten interaktiven Elemente innerhalb der Toolbar vorübergehend deaktiviert ist, überlegen Sie, ob sie trotzdem fokussierbar bleiben sollten, damit Screenreader-Benutzer über deren Anwesenheit informiert werden können.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)

  - : Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation` Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Toolbar ein sichtbares Label hat, referenzieren Sie es mit der ID mittels des `aria-labelledby` Attributs. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Toolbar in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie die Fokusverwaltung, sodass die Tabulatorsequenz der Tastatur einen Stopp für die Toolbar umfasst und Pfeiltasten den Fokus zwischen den Steuerelementen in der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Bewegen Sie den Fokus in die und aus der Toolbar. Wenn der Fokus in eine Toolbar wechselt:

    - Wenn der Fokus zum ersten Mal in die Toolbar wechselt, wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.
    - Wenn die Toolbar zuvor den Fokus hatte, wird der Fokus optional auf das Steuerelement gesetzt, das zuletzt den Fokus hatte. Andernfalls wird er auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Bewegt den Fokus auf das erste Element.

- <kbd>End</kbd> (Optional)
  - : Bewegt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation` Wert von horizontal. Wenn die Toolbar tatsächlich diese Orientierung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Nach-links-Taste</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)

  - : Bewegt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung vom ersten zum letzten Element springen.

- <kbd>Nach-rechts-Taste</kbd> (Für eine horizontale Toolbar (die Standardeinstellung)
  - : Bewegt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung vom letzten zum ersten Element springen.

In Toolbars mit mehreren Zeilen von Steuerelementen sollten die linken und rechten Pfeiltasten erlauben, von Zeile zu Zeile zu springen, während die Option besteht, vertikale Pfeiltasten für die Bedienung von Steuerelementen zu reservieren, wie etwa für die Navigation zwischen Radio-Buttons, oder für die Erhöhung/Verringerung eines numerischen Spinners.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist, und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Nach-unten-Taste</kbd> (Für eine vertikale Toolbar)

  - : Bewegt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung vom ersten zum letzten Element springen.

- <kbd>Nach-oben-Taste</kbd> (Für eine vertikale Toolbar)
  - : Bewegt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung vom letzten zum ersten Element springen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie die Fokusverwaltung, sodass die Tabulatorsequenz der Tastatur einen Stopp für die Toolbar umfasst und Pfeiltasten den Fokus zwischen den Steuerelementen in der Toolbar verschieben. Wenn in die Toolbar getabt wird, kehrt der Fokus zum Steuerelement zurück, das zuletzt den Fokus hatte.

Obwohl das Toolbar-Element selbst keinen Fokus erhält, muss der Fokus beim Bewegen in, aus und innerhalb der Toolbar verwaltet werden. Beim Laden hat das erste Element in der Tabulatonssequenz innerhalb der Toolbar `tabindex="0"` mit `tabindex="-1"` auf allen anderen fokussierbaren Elementen innerhalb der Toolbar. Abhängig von der [Tastaturinteraktion] wird das empfangende Element auf `tabindex="0"` gesetzt und das Element, das gerade den Fokus verloren hat, wird zurück auf `tabindex="-1"` gesetzt. Fokussieren Sie, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird "roving tabindex" genannt. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus ist, dass der Browser das neu fokussierte Element in den Blickwinkel scrollt.

Wenn das Design erfordert, dass ein bestimmtes Element das nächste Mal fokussiert wird, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> in die Toolbar bewegt, überprüfen Sie, ob dieses Zielelement `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Wenn die Toolbar innerhalb fokussiert ist, bieten Sie visuelle Hinweise. Wenn ein Element innerhalb der Toolbar den Fokus hat, muss ein visueller Hinweis sowohl auf der Toolbar selbst - um die Unterstützung der Toolbar für die Navigation mit den Pfeiltasten zu erleichtern - als auch auf dem Steuerelement, das den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente anzusprechen.

## Beispiele

[Beispiel einer Toolbar vom <abbr>W3C</abbr>, dem World Wide Web Consortium](https://www.w3.org/TR/wai-aria-practices-1.2/examples/toolbar/toolbar.html)

## Barrierefreiheitsbedenken

Vermeiden Sie die Einbeziehung von Steuerelementen, deren Bedienung Pfeiltasten erfordert, die für die Toolbar-Navigation verwendet werden (rechte und linke Pfeile, oder oben und unten für vertikale Toolbars). Wenn ein solches Steuerelement integriert werden muss, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingeschlossen werden.

Wenn eines der ansonsten interaktiven Elemente innerhalb der Toolbar deaktiviert ist, überlegen Sie, ob sie trotzdem fokussierbar bleiben sollten, damit Screenreader-Benutzer über deren Anwesenheit informiert werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Die CSS `:focus-within` Pseudoklasse](/de/docs/Web/CSS/:focus-within)
