---
title: "ARIA: Rolle navigation"
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `navigation` Rolle wird verwendet, um wichtige Gruppen von Links zu identifizieren, die zur Navigation auf einer Website oder durch Seiteninhalte dienen.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation` Rolle ist [eine Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Beschriftung von Abschnitt einer Seite wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt. Screenreader nutzen Landmark-Rollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite zu ermöglichen. Genau wie das HTML {{HTMLElement('nav')}} Element bieten Navigations-Landmarks eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die für die Navigation auf einer Website oder durch Seiteninhalte gedacht sind. Wenn eine Seite mehr als eine Navigations-Landmark enthält, sollte jede eine einzigartige Beschriftung haben. Wenn zwei oder mehr Navigations-Landmarks auf einer Seite die gleiche Gruppe von Links haben, verwenden Sie dieselbe Beschriftung für jede.

Es ist vorzuziehen, das HTML5 [`<nav>` Element](/de/docs/Web/HTML/Element/nav) zur Definition einer Navigations-Landmark zu verwenden. Wenn die Technik des HTML5 nav-Elements nicht verwendet wird, verwenden Sie ein `role="navigation"` Attribut, um eine Navigations-Landmark zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}} Elements teilt automatisch mit, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "navigation", da der Screenreader sowohl die Rolle als auch den Inhalt der Beschriftung liest.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

```html
<div role="navigation" aria-label="Customer service">
  <ul>
    <li><a href="#">Help</a></li>
    <li><a href="#">Order tracking</a></li>
    <li><a href="#">Shipping &amp; Delivery</a></li>
    <li><a href="#">Returns</a></li>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Find a store</a></li>
  </ul>
</div>
```

## Zugänglichkeitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere, übergreifende Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('nav')}} Elements teilt automatisch mit, dass ein Abschnitt die Rolle `navigation` hat. Wenn möglich, sollte es bevorzugt verwendet werden.

### Beschriftung von Landmarks

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `navigation`-Landmark-Rolle oder ein {{HTMLElement('nav')}} Element gibt, geben Sie eine Beschriftung für jede Landmark an. Diese Beschriftung ermöglicht es einem Benutzer von unterstützender Technologie, den Zweck jeder Landmark schnell zu verstehen.

```html
<div id="main-nav" role="navigation" aria-label="Main">
  <!-- content -->
</div>

…

<nav id="footer-nav" aria-label="Footer">
  <!-- content -->
</nav>
```

#### Wiederholte Landmarks

Wenn eine `navigation`-Landmark-Rolle oder ein {{HTMLElement('nav')}} Element in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie dieselbe Beschriftung für jede Landmark. Ein Beispiel dafür wäre die Wiederholung der Hauptnavigation oben und unten auf der Seite.

```html
<header>
  <nav id="main-nav" aria-label="Main">
    <!-- list of links to main website locations -->
  </nav>
</header>

…

<footer>
  <nav id="footer-nav" aria-label="Main">
    <!-- list of links to main website locations -->
  </nav>
</footer>
```

#### Redundante Beschreibungen

Screenreader kündigen die Art der Rolle der Landmark an. Daher müssen Sie in der Beschriftung nicht beschreiben, um welche Landmark es sich handelt. Zum Beispiel kann eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primary navigation navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}} Element
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
