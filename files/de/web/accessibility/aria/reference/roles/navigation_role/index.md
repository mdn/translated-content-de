---
title: "ARIA: navigation Rolle"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die `navigation`-Rolle wird verwendet, um Hauptgruppen von Links zu kennzeichnen, die zur Navigation durch eine Website oder Seiteninhalte genutzt werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist [eine Landmark-](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Beschriftung von Seitenabschnitten wird die visuell durch das Layout vermittelte Strukturinformation programmatisch dargestellt. Screenreader nutzen Landmark-Rollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML {{HTMLElement('nav')}}-Element bieten Navigationslandmarks eine Möglichkeit, Gruppen (z.B. Listen) von Links zu kennzeichnen, die zur Navigation durch Website- oder Seiteninhalte gedacht sind. Wenn eine Seite mehr als ein Navigationslandmark enthält, sollte jede mit einem eindeutigen Label versehen werden. Wenn zwei oder mehr Navigationslandmarks auf einer Seite denselben Satz von Links haben, verwenden Sie dasselbe Label für jedes.

Es ist vorzuziehen, das HTML5-Element [`<nav>`](/de/docs/Web/HTML/Reference/Elements/nav) zu verwenden, um ein Navigationslandmark zu definieren. Wenn die HTML5-`<nav>`-Element-Technik nicht verwendet wird, verwenden Sie ein `role="navigation"`-Attribut, um ein Navigationslandmark zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer die Verwendung des korrekten semantischen HTML-Elements der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff „Navigation“ zu verwenden, da der Screenreader sowohl die Rolle als auch den Inhalt des Labels liest.

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

## Barrierefreiheitserwägungen

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern "Geräusche" erzeugen, was es schwierig macht, das gesamte Layout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('nav')}}-Elements kommuniziert automatisch, dass das Element die Rolle `navigation` hat. Wenn möglich, sollten Sie das semantische `<nav>`-Element gegenüber der `navigation`-Rolle bevorzugen.

### Beschriftung von Landmarks

#### Mehrfache Landmarks

Wenn es mehr als eine `navigation`-Landmark-Rolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument gibt, geben Sie ein Label für jedes Landmark an. Dieses Label ermöglicht es einem Benutzer von unterstützender Technologie, schnell den Zweck jedes Landmarks zu verstehen.

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

Wenn eine `navigation`-Landmark-Rolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie dasselbe Label für jedes Landmark. Ein Beispiel dafür wäre die Wiederholung der Hauptnavigation oben und unten auf der Seite.

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

Screenreader geben die Art der Rolle des Landmarks an. Deshalb müssen Sie in seinem Label nicht beschreiben, was das Landmark ist. Zum Beispiel kann eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primäre Navigation Navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
