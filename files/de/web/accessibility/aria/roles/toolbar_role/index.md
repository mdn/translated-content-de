---
title: "ARIA: toolbar Rolle"
slug: Web/Accessibility/ARIA/Roles/toolbar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `toolbar`-Rolle definiert das enthaltende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerelementen, die in kompakter visueller Form dargestellt werden.

## Beschreibung

Eine Toolbar ist eine Sammlung von häufig verwendeten Steuerelementen, wie Schaltflächen oder Kontrollkästchen, die in kompakter visueller Form gruppiert sind. Die `toolbar`-Rolle kann verwendet werden, um das Vorhandensein und den Zweck einer solchen Gruppierung den Benutzern von Screenreadern mitzuteilen und kann helfen, die Anzahl der Tab-Stops für Tastaturbenutzer zu reduzieren. Verwenden Sie die `toolbar`-Rolle nur, um drei oder mehr Steuerelemente zu gruppieren.

Die Toolbar ist normalerweise eine Teilmenge der Funktionen, die in einer `menubar` zu finden sind, um die Benutzeranstrengungen zu reduzieren. Wenn Sie mehr als eine Toolbar in einer Menüleiste haben, benötigt jede Toolbar eine Bezeichnung; diese können Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) einfügen.

Wenn Sie eine Toolbar erstellen, müssen Sie das Fokusmanagement und die Tastaturinteraktionen innerhalb der Toolbar implementieren, insbesondere wenn dieselben Tastaturinteraktionen sowohl in der Toolbar als auch in den enthaltenen nativen Steuerelementen verwendet werden. Die Pfeiltasten <kbd>Links</kbd> und <kbd>Rechts</kbd> sollten verwendet werden, um zwischen den Steuerelementen innerhalb einer horizontalen Toolbar zu navigieren. Die Pfeiltasten <kbd>Oben</kbd> und <kbd>Unten</kbd> sollten verwendet werden, wenn die Toolbar vertikal ist — in welchem Fall Sie auch `aria-orientation="vertical"` einfügen möchten — oder können in einer horizontalen Toolbar reserviert werden, um Steuerelemente zu bedienen, wie Spin-Buttons, die vertikale Pfeiltasten zur Bedienung erfordern.

Vermeiden Sie die Aufnahme von Steuerelementen, deren Bedienung die für die Toolbar-Navigation verwendeten Pfeiltasten erfordert. Wenn Sie ein solches Steuerelement einfügen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn eines der ansonsten interaktiven Elemente in der Toolbar vorübergehend deaktiviert ist, ziehen Sie in Betracht, sie fokussierbar zu lassen, damit Benutzer von Screenreadern auf ihre Anwesenheit aufmerksam gemacht werden können.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)

  - : Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn die Toolbar eine sichtbare Beschriftung hat, referenzieren Sie diese mit dem `aria-labelledby`-Attribut per ID. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Toolbar in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Sequenz einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen innerhalb der Toolbar verschieben.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>

  - : Bewegen Sie den Fokus in und aus der Toolbar. Wenn sich der Fokus in eine Toolbar bewegt:

    - Wenn sich der Fokus erstmals in die Toolbar bewegt, wird der Fokus auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.
    - Wenn die Toolbar zuvor den Fokus enthielt, wird der Fokus optional auf das Steuerelement gesetzt, das zuletzt den Fokus hatte. Andernfalls wird er auf das erste Steuerelement gesetzt, das nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)

  - : Verschiebt den Fokus auf das erste Element.

- <kbd>End</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Element.

#### Horizontale Toolbar

Elemente mit der Rolle Toolbar haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Toolbar tatsächlich diese Orientierung hat, müssen folgende Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil links</kbd> (Für eine horizontale Toolbar (der Standard)

  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung von dem ersten Element auf das letzte Element springen.

- <kbd>Pfeil rechts</kbd> (Für eine horizontale Toolbar (der Standard)
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung von dem letzten Element auf das erste Element springen.

In Toolbars mit mehreren Reihen von Steuerelementen erlauben Sie es den linken und rechten Pfeilen, von Reihe zu Reihe zu springen, und lassen die Möglichkeit, die vertikalen Pfeiltasten für die Bedienung von Steuerelementen zu reservieren, wie z.B. die Navigation zwischen Radioknöpfen oder die Erhöhung/Verringerung eines numerischen Spinners.

#### Vertikale Toolbar

Wenn die Toolbar vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist, und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil nach unten</kbd> (Für eine horizontale Toolbar (der Standard)

  - : Verschiebt den Fokus auf das vorherige Steuerelement. Optional kann die Fokusbewegung von dem ersten Element auf das letzte Element springen.

- <kbd>Pfeil nach oben</kbd> (Für eine horizontale Toolbar (der Standard)
  - : Verschiebt den Fokus auf das nächste Steuerelement. Optional kann die Fokusbewegung von dem letzten Element auf das erste Element springen.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Sequenz einen Stopp für die Toolbar enthält und die Pfeiltasten den Fokus zwischen den Steuerelementen in der Toolbar verschieben. Beim Tabben in die Toolbar kehrt der Fokus zum Steuerelement zurück, das zuletzt den Fokus hatte.

Während das Toolbar-Element selbst keinen Fokus erhält, muss der Fokus auf die Bewegung hinein, heraus und innerhalb der Toolbar verwaltet werden. Beim Laden hat das erste Element in der Tab-Reihenfolge innerhalb der Toolbar `tabindex="0"` mit `tabindex="-1"` auf allen anderen fokussierbaren Elementen in der Toolbar. Abhängig von der [Tastaturinteraktion] wird das Element, das den Fokus erhält, auf `tabindex="0"` gesetzt, und das Element, das gerade den Fokus verloren hat, wird zurück auf `tabindex="-1"` gewechselt. Setzen Sie den Fokus mit `element.focus()` auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil der Verwendung von roving tabindex zur Verwaltung des Fokus ist, dass der Browser das neu fokussierte Element in den Blick scrollen wird.

Wenn das Design verlangt, dass ein bestimmtes Element fokussiert wird, das nächste Mal, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> in die Toolbar bewegt, überprüfen Sie, ob dieses Ziel-Element `tabindex="0"` hat, wenn die Toolbar den Fokus verliert.

Sobald die Toolbar Fokus innerhalb hat, bieten Sie visuelle Hinweise. Wenn ein Element innerhalb der Toolbar Fokus hat, muss sowohl auf der Toolbar selbst - um die directionale Navigation mit den Pfeiltasten zu unterstützen - als auch auf dem Steuerelement, das Fokus hat, ein visueller Hinweis enthalten sein. Die CSS-Pseudoklassen von `:focus` und `:focus-within` können verwendet werden, um beide Elemente zu zielen.

## Beispiele

[Toolbar-Beispiel vom <abbr>W3C</abbr>, dem World Wide Web Consortium](https://www.w3.org/TR/wai-aria-practices-1.2/examples/toolbar/toolbar.html)

## Barrierefreiheitshinweise

Vermeiden Sie die Aufnahme von Steuerelementen, deren Bedienung die für die Toolbar-Navigation verwendeten Pfeiltasten erfordert (rechts und links Pfeile, oder oben und unten für vertikale Toolbars). Wenn Sie ein solches Steuerelement einfügen müssen, machen Sie es zum letzten Steuerelement in der Toolbar. Zum Beispiel könnte in einer horizontalen Toolbar ein Textfeld als letztes Element eingefügt werden.

Wenn eines der ansonsten interaktiven Elemente in der Toolbar deaktiviert ist, ziehen Sie in Betracht, sie fokussierbar zu lassen, damit Benutzer von Screenreadern auf ihre Anwesenheit aufmerksam gemacht werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Die CSS `:focus-within` Pseudoklasse](/de/docs/Web/CSS/:focus-within)
