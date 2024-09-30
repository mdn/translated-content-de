---
title: "ARIA: navigation-Rolle"
slug: Web/Accessibility/ARIA/Roles/navigation_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `navigation`-Rolle wird verwendet, um wichtige Gruppen von Links zu identifizieren, die für die Navigation durch eine Website oder den Seiteninhalt verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) Rolle. Landmarkenrollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch das Klassifizieren und Beschriften von Seitenabschnitten wird die visuell durch Layout vermittelte Strukturinformation programmatisch dargestellt. Bildschirmleseprogramme verwenden Landmarkenrollen, um eine Tastaturnavigation zu wichtigen Bereichen einer Seite bereitzustellen. Ähnlich wie das HTML {{HTMLElement('nav')}}-Element bieten Navigationslandmarken eine Möglichkeit, Gruppen (z.B. Listen) von Links zu identifizieren, die zur Navigation auf der Website oder im Seiteninhalt verwendet werden sollen. Wenn eine Seite mehr als eine Navigationslandmarke enthält, sollte jede eine eindeutige Beschriftung aufweisen. Wenn zwei oder mehr Navigationslandmarken auf einer Seite denselben Satz an Links haben, verwenden Sie dieselbe Beschriftung für jede.

Es ist vorzuziehen, das HTML5 [`<nav>`-Element](/de/docs/Web/HTML/Element/nav) zur Definition einer Navigationslandmarke zu verwenden. Wenn die HTML5-nav-Element-Technik nicht verwendet wird, verwenden Sie ein `role="navigation"`-Attribut, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "Navigation", da das Bildschirmleseprogramm sowohl die Rolle als auch den Inhalt des Labels vorlesen wird.

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

## Barrierefreiheitsanliegen

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabteilungen des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Geräusche" in Bildschirmleseprogrammen erzeugen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Verwenden Sie es nach Möglichkeit anstelle dessen.

### Landmarken beschriften

#### Mehrere Landmarken

Wenn es mehr als eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument gibt, geben Sie für jede Landmarke ein Etikett an. Dieses Etikett ermöglicht es dem Benutzer einer unterstützenden Technologie, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken denselben Inhalt haben, verwenden Sie dasselbe Etikett für jede Landmarke. Ein Beispiel hierfür wäre die Wiederholung der Hauptnavigation am oberen und unteren Rand der Seite.

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

Bildschirmleseprogramme geben die Art der Rolle bekannt, die die Landmarke ist. Daher müssen Sie in ihrer Beschriftung nicht beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primary navigation navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwenden von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
