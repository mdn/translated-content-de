---
title: "ARIA: Rolle navigation"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `navigation` wird verwendet, um Hauptgruppen von Links zu identifizieren, die zur Navigation durch eine Website oder Seiteninhalte genutzt werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die Rolle `navigation` ist eine [landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite wird die visuell durch das Layout vermittelte Strukturinformation programmatisch dargestellt. Screenreader nutzen Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML-Element {{HTMLElement('nav')}} bieten Navigationslandmarks eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die zur Navigation von Website- oder Seiteninhalten bestimmt sind. Wenn eine Seite mehr als eine Navigationslandmarke enthält, sollte jede eine eindeutige Bezeichnung haben. Haben zwei oder mehr Navigationslandmarks auf einer Seite denselben Satz von Links, sollte dieselbe Bezeichnung für jede verwendet werden.

Es ist vorzuziehen, das HTML5 [`<nav>`-Element](/de/docs/Web/HTML/Reference/Elements/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Wird die Technik des HTML5-`nav`-Elements nicht genutzt, verwenden Sie ein Attribut `role="navigation"`, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des Elements {{HTMLElement('nav')}} kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer den korrekten semantischen HTML-Tag der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "navigation", da der Screenreader sowohl die Rolle als auch den Inhalt des Labels vorliest.

### Tastaturaktionen

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

## Barrierefreiheitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen und es erschweren, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des Elements {{HTMLElement('nav')}} kommuniziert automatisch, dass ein Abschnitt die Rolle `navigation` hat. Wenn möglich, sollten Sie es bevorzugen.

### Kennzeichnung von Landmarks

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `navigation`-Landmarkrolle oder ein {{HTMLElement('nav')}}-Element gibt, versehen Sie jede Landmarke mit einem Label. Dieses Label ermöglicht es einem Benutzer von assistierenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `navigation`-Landmarkrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken denselben Inhalt haben, verwenden Sie dasselbe Label für jede Landmarke. Ein Beispiel hierfür wäre, die Hauptnavigation oben und unten auf der Seite zu wiederholen.

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

Screenreader kündigen den Typ der Rolle der Landmarke an. Aus diesem Grund ist es nicht notwendig, in ihrem Label zu beschreiben, was die Landmarke ist. Ein Beispiel dafür wäre eine Deklaration von `role="navigation"` mit einem `aria-label="Hauptnavigation"`, das redundant als "Hauptnavigation navigation" angekündigt werden könnte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('nav')}}
- [Verwendung von HTML-Bereichen und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
