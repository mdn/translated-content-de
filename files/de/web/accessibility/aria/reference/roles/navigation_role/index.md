---
title: "ARIA: navigation role"
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `navigation`-Rolle wird verwendet, um große Gruppen von Links zu identifizieren, die zur Navigation durch eine Website oder den Inhalt einer Seite genutzt werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist [eine Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmarkenrollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt. Bildschirmleseprogramme verwenden Landmarkenrollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML-{{HTMLElement('nav')}}-Element bieten Navigation-Landmarken eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die für die Navigation durch Website- oder Seiteninhalte gedacht sind. Wenn eine Seite mehr als eine Navigation-Landmarke enthält, sollte jede eine eindeutige Kennzeichnung haben. Wenn zwei oder mehr Navigationslandmarken auf einer Seite den gleichen Linksatz haben, verwenden Sie für jede die gleiche Kennzeichnung.

Es ist vorzuziehen, das HTML5-[`<nav>`-Element](/de/docs/Web/HTML/Element/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Wenn die HTML5-nav-Elementtechnik nicht verwendet wird, nutzen Sie ein `role="navigation"` Attribut, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer den korrekten semantischen HTML-Elementen den Vorzug gegenüber der Verwendung von ARIA geben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "navigation", da der Screenreader sowohl die Rolle als auch den Inhalt des Labels lesen wird.

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

## Barrierefreiheitshinweise

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Rauschen" in Bildschirmleseprogrammen erzeugen, was es schwierig machen kann, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `navigation` hat. Wenn möglich, bevorzugen Sie es, dieses zu verwenden.

### Kennzeichnung von Landmarken

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `navigation`-Landmarke oder ein {{HTMLElement('nav')}}-Element gibt, geben Sie eine Kennzeichnung für jede Landmarke an. Diese Kennzeichnung ermöglicht es Nutzern von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `navigation`-Landmarke oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken denselben Inhalt haben, verwenden Sie für jede Landmarke die gleiche Kennzeichnung. Ein Beispiel hierfür wäre die Wiederholung der Hauptnavigation am oberen und unteren Rand der Seite.

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

Screenreader geben die Art der Rolle bekannt, die die Landmarke ist. Aus diesem Grund müssen Sie nicht beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel könnte eine Erklärung mit `role="navigation"` und `aria-label="Primäre Navigation"` redundanterweise als "primäre Navigation Navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
