---
title: "ARIA: Rolle `toolbar`"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die Rolle `toolbar` definiert das umgebende Element als eine Sammlung von häufig verwendeten Funktionsschaltflächen oder Steuerungen in einer kompakten visuellen Form.

## Beschreibung

Eine Werkzeugleiste ist eine Sammlung von häufig verwendeten Steuerungen, wie Schaltflächen oder Kontrollkästchen, die in einer kompakten visuellen Form zusammengefasst sind. Die Rolle `toolbar` kann verwendet werden, um das Vorhandensein und den Zweck einer solchen Gruppierung gegenüber Screenreader-Nutzern zu kommunizieren und die Anzahl der Tabstopps für Tastaturnutzer zu reduzieren. Verwenden Sie die Rolle `toolbar` nur, um 3 oder mehr Steuerungen zu gruppieren.

Die Werkzeugleiste ist oft eine Teilmenge von Funktionen, die in einer `menubar` gefunden werden, um den Benutzeraufwand zu reduzieren. Wenn Sie mehr als eine Werkzeugleiste in einer Menüleiste haben, benötigt jede Werkzeugleiste ein Label; dieses können Sie mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) einfügen.

Beim Erstellen einer Werkzeugleiste müssen Sie das Fokusmanagement und die Tastaturinteraktionen innerhalb der Werkzeugleiste implementieren, insbesondere wenn dieselben Tastaturinteraktionen sowohl in der Werkzeugleiste als auch in enthaltenen nativen Steuerungen verwendet werden. Die <kbd>Linke Pfeiltaste</kbd> und die <kbd>Rechte Pfeiltaste</kbd> sollten verwendet werden, um innerhalb einer horizontalen Werkzeugleiste zwischen den Steuerungen zu navigieren. Die <kbd>Obere Pfeiltaste</kbd> und die <kbd>Untere Pfeiltaste</kbd> sollten verwendet werden, wenn die Werkzeugleiste vertikal ist — in diesem Fall sollten Sie auch `aria-orientation="vertical"` angeben — oder bei einer horizontalen Werkzeugleiste für die Bedienung von Steuerungen, wie Spin-Buttons, die vertikale Pfeiltasten zur Bedienung erfordern, reserviert werden.

Vermeiden Sie die Einbindung von Steuerungen, deren Bedienung Pfeiltasten benötigt, die für die Navigation in der Werkzeugleiste verwendet werden. Falls eine solche Steuerung notwendig ist, platzieren Sie sie als letztes Element in der Werkzeugleiste. Beispielsweise könnte in einer horizontalen Werkzeugleiste eine Textbox als letztes Element hinzugefügt werden.

Wenn eines der ansonsten interaktiven Elemente innerhalb der Werkzeugleiste vorübergehend deaktiviert ist, sollten Sie in Betracht ziehen, diese trotzdem fokussierbar zu halten, damit Screenreader-Nutzer über ihre Anwesenheit informiert werden können.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Elemente mit der Rolle `toolbar` haben einen impliziten `aria-orientation`-Wert von horizontal.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn die Werkzeugleiste ein sichtbares Label hat, verweisen Sie darauf mit der ID mittels des Attributs `aria-labelledby`. Ansonsten geben Sie ein `aria-label` an. Falls es mehr als eine Werkzeugleiste in einem Menü gibt, ist eine Benennung erforderlich.

### Tastaturinteraktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Reihenfolge einen Stopp für die Werkzeugleiste beinhaltet und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste bewegen.

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen Sie den Fokus in und aus der Werkzeugleiste. Wenn der Fokus in eine Werkzeugleiste gelangt:
    - Wenn der Fokus das erste Mal in die Werkzeugleiste kommt, wird der Fokus auf das erste nicht deaktivierte Steuerelement gesetzt.
    - Wenn die Werkzeugleiste zuvor den Fokus hatte, wird gegebenenfalls der Fokus auf das Steuerelement gesetzt, das zuletzt den Fokus hatte. Andernfalls wird er auf das erste nicht deaktivierte Steuerelement gesetzt.

- <kbd>Home</kbd> (Optional)
  - : Bewegt den Fokus auf das erste Element.

- <kbd>End</kbd> (Optional)
  - : Bewegt den Fokus auf das letzte Element.

#### Horizontale Werkzeugleiste

Elemente mit der Rolle `toolbar` haben einen impliziten `aria-orientation`-Wert von horizontal. Wenn die Werkzeugleiste tatsächlich diese Orientierung hat, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Linke Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (der Standard)
  - : Bewegt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten zum letzten Element umwickelt werden.

- <kbd>Rechte Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (der Standard)
  - : Bewegt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten zum ersten Element umwickelt werden.

In Werkzeugleisten mit mehreren Steuerelementsreihen erlauben Sie, dass die linken und rechten Pfeiltasten von Reihe zu Reihe umwickeln, wobei die vertikalen Pfeiltasten für die Bedienung von Steuerungen reserviert werden können, wie z.B. das Navigieren zwischen Radiotasten oder das Erhöhen/Erniedrigen eines numerischen Spinners.

#### Vertikale Werkzeugleiste

Wenn die Werkzeugleiste vertikal ist, stellen Sie sicher, dass `aria-orientation="vertical"` gesetzt ist, und die folgenden Tastaturinteraktionen implementiert sind:

- <kbd>Untere Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (der Standard)
  - : Bewegt den Fokus auf die vorherige Steuerung. Optional kann die Fokusbewegung vom ersten zum letzten Element umwickelt werden.

- <kbd>Obere Pfeiltaste</kbd> (Für eine horizontale Werkzeugleiste (der Standard)
  - : Bewegt den Fokus auf die nächste Steuerung. Optional kann die Fokusbewegung vom letzten zum ersten Element umwickelt werden.

### Erforderliche JavaScript-Funktionen

Implementieren Sie das Fokusmanagement so, dass die Tastatur-Tab-Reihenfolge einen Stopp für die Werkzeugleiste beinhaltet und die Pfeiltasten den Fokus zwischen den Steuerungen in der Werkzeugleiste bewegen. Beim Tabben in die Werkzeugleiste kehrt der Fokus zu der Steuerung zurück, die zuletzt den Fokus hatte.

Während das Werkzeugleistenelement selbst keinen Fokus erhält, muss der Fokus für den Eintritt, den Austritt und innerhalb der Werkzeugleiste verwaltet werden. Beim Laden erhält das erste Element in der Tab-Reihenfolge innerhalb der Werkzeugleiste `tabindex="0"` und `tabindex="-1"` wird auf alle anderen fokussierbaren Elemente innerhalb der Werkzeugleiste gesetzt. Je nach [Tastaturinteraktion] erhält das Element, das den Fokus erhält, `tabindex="0"` und das Element, das gerade den Fokus verloren hat, wird wieder auf `tabindex="-1"` gesetzt. Setzen Sie den Fokus mittels `element.focus()` auf das Element, das `tabindex="0"` hat. Dies wird "roving tabindex" genannt. Ein Vorteil der Verwendung von roving tabindex zur Fokusherstellung ist, dass der Browser das neu fokussierte Element in den Ansichtbereich scrollt.

Wenn das Design ein bestimmtes Element erfordert, das beim nächsten Mal, wenn der Benutzer den Fokus mit <kbd>Tab</kbd> oder <kbd>Shift + Tab</kbd> in die Werkzeugleiste bewegt, fokussiert sein soll, überprüfen Sie, ob dieses Zielelement `tabindex="0"` hat, wenn die Werkzeugleiste den Fokus verliert.

Wenn die Werkzeugleiste Fokus innerhalb sich hat, stellen Sie visuelle Hinweise bereit. Wenn ein Element innerhalb der Werkzeugleiste den Fokus hat, muss ein visueller Hinweis sowohl auf der Werkzeugleiste selbst - um zu helfen, dass die Werkzeugleiste die richtungsweisende Navigation mit den Pfeiltasten unterstützt - als auch auf der Steuerung, die den Fokus hat, enthalten sein. Die CSS-Pseudoklassen `:focus` und `:focus-within` können verwendet werden, um beide Elemente anzusprechen.

## Beispiele

[Beispiel für eine Werkzeugleiste aus dem ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Barrierefreiheitsbedenken

Vermeiden Sie die Einbindung von Steuerungen, deren Bedienung Pfeiltasten benötigt, die für die Navigation in der Werkzeugleiste verwendet werden (rechte und linke Pfeile, oder oben und unten bei vertikalen Werkzeugleisten). Falls eine solche Steuerung notwendig ist, platzieren Sie sie als letztes Element in der Werkzeugleiste. Beispielsweise könnte in einer horizontalen Werkzeugleiste eine Textbox als letztes Element hinzugefügt werden.

Wenn eines der ansonsten interaktiven Elemente in der Werkzeugleiste deaktiviert ist, sollten Sie in Betracht ziehen, diese fokussierbar zu halten, damit Screenreader-Nutzer über ihre Anwesenheit informiert werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die CSS `:focus` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Die CSS `:focus-within` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
