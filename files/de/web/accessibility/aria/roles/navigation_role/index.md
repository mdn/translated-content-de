---
title: "ARIA: navigation Rolle"
slug: Web/Accessibility/ARIA/Roles/navigation_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `navigation`-Rolle wird verwendet, um Hauptgruppen von Links zu identifizieren, die zur Navigation durch eine Website oder Seiteninhalte verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles). Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Beschriftung von Abschnitten einer Seite wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt. Screenreader verwenden Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML {{HTMLElement('nav')}}-Element bieten Navigation-Landmarken eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die zur Navigation von Website- oder Seiteninhalten gedacht sind. Wenn eine Seite mehr als eine Navigation-Landmarke enthält, sollte jede eine eindeutige Beschriftung haben. Wenn zwei oder mehr Navigationslandmarken auf einer Seite denselben Satz von Links haben, verwenden Sie für jede dieselbe Beschriftung.

Es ist vorzuziehen, das HTML5 [`<nav>`-Element](/de/docs/Web/HTML/Element/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Wenn die HTML5-Nav-Elementtechnik nicht verwendet wird, verwenden Sie ein Attribut `role="navigation"`, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "navigation", da der Screenreader sowohl die Rolle als auch den Inhalt des Labels liest.

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

## Barrierefreiheit Bedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Best Practices

### HTML bevorzugen

Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `navigation` hat. Wenn möglich, sollten Sie dieses verwenden.

### Landmarken beschriften

#### Mehrere Landmarken

Wenn in einem Dokument mehr als eine `navigation`-Landmarke oder ein {{HTMLElement('nav')}}-Element vorhanden ist, geben Sie für jede Landmarke eine Beschriftung an. Diese Beschriftung ermöglicht es einem Benutzer assistiver Technologien, den Zweck jeder Landmarke schnell zu verstehen.

```html
<div id="main-nav" role="navigation" aria-label="Main">
  <!-- content -->
</div>

…

<nav id="footer-nav" aria-label="Footer">
  <!-- content -->
</nav>
```

#### Wiederholte Landmarken

Wenn eine `navigation`-Landmarke oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken identische Inhalte haben, verwenden Sie für jede Landmarke dieselbe Beschriftung. Ein Beispiel dafür wäre das Wiederholen der Hauptnavigation oben und unten auf der Seite.

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

Screenreader geben die Art der Rolle an, die die Landmarke ist. Deshalb müssen Sie nicht beschreiben, was die Landmarke in ihrer Beschriftung ist. Ein Beispiel wäre die Deklaration `role="navigation"` mit einem `aria-label="Primary navigation"`, die redundant als "primary navigation navigation" angekündigt werden könnte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
