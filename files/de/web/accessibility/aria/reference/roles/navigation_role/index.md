---
title: "ARIA: navigation Rolle"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die `navigation`-Rolle wird verwendet, um Hauptgruppen von Links zu identifizieren, die zur Navigation durch eine Website oder Seiteninhalte verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist [eine Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmarkenrollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite wird die durch Layout visuell vermittelte strukturelle Information programmatisch dargestellt. Screenreader verwenden Landmarkenrollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML-Element {{HTMLElement('nav')}} bieten Navigationslandmarken eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die für die Navigation von Webseiten- oder Seiteninhalten verwendet werden sollen. Wenn eine Seite mehr als eine Navigationslandmarke enthält, sollte jede eine eindeutige Bezeichnung haben. Wenn zwei oder mehr Navigationslandmarken auf einer Seite den gleichen Satz von Links haben, verwenden Sie dieselbe Bezeichnung für jede.

Es ist vorzuziehen, das HTML5-[`<nav>`-Element](/de/docs/Web/HTML/Reference/Elements/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Wenn die HTML5-`nav`-Element-Technik nicht verwendet wird, verwenden Sie ein `role="navigation"`-Attribut, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten stets das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, wobei der Begriff "navigation" weggelassen wird, da der Screenreader sowohl die Rolle als auch den Inhalt der Bezeichnung vorlesen wird.

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

## Barrierefreiheit

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmarkenrollen kann in Screenreadern "Rauschen" erzeugen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass das Element eine Rolle von `navigation` hat. Wenn möglich, bevorzugen Sie die Verwendung des semantischen `<nav>`-Elements anstelle der `navigation`-Rolle.

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element gibt, sollten Sie für jede Landmarke eine Bezeichnung bereitstellen. Diese Bezeichnung ermöglicht es einem Benutzer von assistiven Technologien, den Zweck jeder Landmarke schnell zu verstehen.

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

Wenn eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken identische Inhalte haben, verwenden Sie dieselbe Bezeichnung für jede Landmarke. Ein Beispiel hierfür wäre die Wiederholung der Hauptnavigation am oberen und unteren Ende der Seite.

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

#### Überflüssige Beschreibungen

Screenreader werden den Rollentyp der Landmarke ankündigen. Deshalb müssen Sie nicht in der Bezeichnung beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primary navigation navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
