---
title: "ARIA: toolbar role"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: c833741444aba4d524992813eda1cd8d64563aed
---

Die `toolbar`-Rolle definiert das umschließende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerungen, die in einer kompakten visuellen Form dargestellt sind.

## Beschreibung

Eine Werkzeugleiste ist eine Sammlung von häufig verwendeten Steuerungen, wie Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form gruppiert sind. Die `toolbar`-Rolle kann verwendet werden, um das Vorhandensein und den Zweck einer solchen Gruppierung für Bildschirmleser-Nutzer zu kommunizieren und kann helfen, die Anzahl der Tab-Stops für Tastaturnutzer zu reduzieren. Verwenden Sie die `toolbar`-Rolle nur, um 3 oder mehr Steuerungen zu gruppieren.

Die Werkzeugleiste ist normalerweise eine Untermenge von Funktionen, die in einer `menubar` zu finden sind, um den Nutzeraufwand zu reduzieren. Wenn Sie mehr als eine Werkzeugleiste in einer Menüsteuerung haben, benötigt jede Werkzeugleiste eine Beschriftung, die Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen können.

Beim Erstellen einer Werkzeugleiste müssen Sie das Fokus-Management und die Tastaturinteraktionen innerhalb der Werkzeugleiste implementieren und berücksichtigen, wenn dieselben Tastaturinteraktionen sowohl in der Werkzeugleiste als auch in der enthaltenen nativen Steuerung verwendet werden. Die Tasten <kbd>Pfeil links</kbd> und <kbd>Pfeil rechts</kbd> sollten verwendet werden, um zwischen den Steuerungen innerhalb einer horizontalen Werkzeugleiste zu navigieren. Die Tasten <kbd>Pfeil hoch</kbd> und <kbd>Pfeil runter</kbd> sollten verwendet werden, wenn die Werkzeugleiste vertikal ist — in diesem Fall möchten Sie auch `aria-orientation="vertical"` einbeziehen — oder, in einer horizontalen Werkzeugleiste, können für die Bedienung von Steuerungen reserviert werden, wie zum Beispiel Drehknöpfe, die vertikale Pfeiltasten erfordern.

Vermeiden Sie das Einfügen von Steuerungen, deren Bedienung Pfeiltasten erfordert, die für die Navigationswerkzeugleiste verwendet werden. Wenn Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel, in einer horizontalen Werkzeugleiste könnte ein Textfeld als letztes Element eingefügt werden.

Wenn eines der interaktiven Elemente innerhalb der Werkzeugleiste vorübergehend deaktiviert ist, sollten Sie erwägen, es fokussierbar zu lassen, damit Bildschirmleser-Nutzer auf dessen Vorhandensein aufmerksam gemacht werden können.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Elemente mit der Rolle `toolbar` haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Werkzeugleiste eine sichtbare Beschriftung hat, verweisen Sie mit dem Attribut `aria-labelledby` auf deren ID. Andernfalls geben Sie ein `aria-label` an. Wenn es mehr als eine Werkzeugleiste in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokus-Management, sodass die Tabulatorsequenz der Tastatur einen Stopp für die Werkzeugleiste enthält und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste bewegen.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen Sie den Fokus in die und aus der Werkzeugleiste. Wenn der Fokus in eine Werkzeugleiste bewegt wird:
    - Wenn der Fokus zum ersten Mal in die Werkzeugleiste bewegt wird, wird der Fokus auf die erste Steuerung gesetzt, die nicht deaktiviert ist.
    - Wenn die Werkzeugleiste zuvor den Fokus enthalten hat, wird der Fokus optional auf die Steuerung gesetzt, die zuletzt den Fokus hatte. Andernfalls wird er auf die erste Steuerung gesetzt, die nicht deaktiviert ist.

- <kbd>Home</kbd> (Optional)
  - : Bewegt den Fokus auf das erste Element.

- <kbd>Ende</kbd> (Optional)
  - : Bewegt den Fokus auf das letzte Element.

#### Horizontale Werkzeugleiste

Elemente mit der Rolle `toolbar` haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Werkzeugleiste tatsächlich diese Orientierung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil links</kbd>
  - : Bewegt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element auf das letzte Element umschlagen.

- <kbd>Pfeil rechts</kbd>
  - : Bewegt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element auf das erste Element umschlagen.

In Werkzeugleisten mit mehreren Reihen von Steuerungen erlauben Sie das Umwickeln mit den Links- und Rechtspfeilen von Reihe zu Reihe, und lassen Sie die Option des Vorbehalts der vertikalen Pfeiltasten für die Bedienung von Steuerungen zu, wie das Navigieren zwischen Radio-Schaltflächen oder das Erhöhen/Verringern eines numerischen Spinners.

#### Vertikale Werkzeugleiste

Wenn die Werkzeugleiste vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist und die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Pfeil hoch</kbd>
  - : Bewegt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten Element auf das letzte Element umschlagen.

- <kbd>Pfeil runter</kbd>
  - : Bewegt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten Element auf das erste Element umschlagen.

### Erforderliche JavaScript-Funktionalitäten

Implementieren Sie das Fokus-Management so, dass die Tabulatorsequenz der Tastatur einen Stopp für die Werkzeugleiste enthält und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste bewegen. Wenn man in die Werkzeugleiste tabbt, kehrt der Fokus zu der Steuerung zurück, die zuletzt den Fokus hatte.

Während das Werkzeugleistenelement selbst keinen Fokus erhält, muss der Fokus bei der Bewegung in, aus und innerhalb der Werkzeugleiste verwaltet werden. Beim Laden hat das erste Element in der Tabulatorsequenz innerhalb der Werkzeugleiste `tabindex="0"` mit `tabindex="-1"` auf allen anderen fokussierbaren Elementen innerhalb der Werkzeugleiste. Abhängig von der [Tastaturinteraktion] wird das fokussierende Element auf `tabindex="0"` gesetzt und das Element, das gerade den Fokus verloren hat, wird zurück auf `tabindex="-1"` gesetzt. Setzen Sie den Fokus, `element.focus()`, auf das Element, das `tabindex="0"` hat. Dies wird als "roving tabindex" bezeichnet. Ein Vorteil von der Verwendung des roving tabindex zur Verwaltung des Fokus besteht darin, dass der Browser das neu fokussierte Element in den sichtbaren Bereich scrollt.

Wenn das Design erfordert, dass ein spezifisches Element fokussiert wird, sobald der Nutzer den Fokus das nächste Mal in die Werkzeugleiste mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> bewegt, überprüfen Sie, ob dieses Ziel-Element `tabindex="0"` hat, wenn die Werkzeugleiste den Fokus verliert.

Wenn die Werkzeugleiste den Fokus innerhalb hat, bieten Sie visuelle Hinweise. Wenn ein Element innerhalb der Werkzeugleiste den Fokus hat, muss sowohl auf der Werkzeugleiste selbst - um die Unterstützung der Werkzeugleiste für die Richtungssnavigation mit den Pfeiltasten zu gewährleisten - als auch auf der Steuerung, die den Fokus hat, ein visueller Hinweis vorhanden sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente zu kennzeichnen.

## Beispiele

[Werkzeugleistenbeispiel aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Zugänglichkeitsaspekte

Vermeiden Sie das Erstellen von Steuerungen, deren Bedienung Pfeiltasten erfordert, die für die Navigation auf der Werkzeugleiste (rechte und linke Pfeile oder obere und untere Pfeile für vertikale Werkzeugleisten) verwendet werden. Wenn Sie eine solche Steuerung einfügen müssen, machen Sie sie zur letzten Steuerung in der Werkzeugleiste. Zum Beispiel, in einer horizontalen Werkzeugleiste, könnte ein Textfeld als letztes Element eingefügt werden.

Wenn eines der sonst interaktiven Elemente innerhalb der Werkzeugleiste deaktiviert ist, sollten Sie erwägen, es weiterhin fokussierbar zu lassen, sodass Bildschirmleser-Nutzer auf dessen Vorhandensein aufmerksam gemacht werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS `:focus` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Die CSS `:focus-within` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
