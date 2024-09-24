---
title: "ARIA: navigationsrolle"
slug: Web/Accessibility/ARIA/Roles/navigation_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `navigation` wird verwendet, um Hauptgruppen von Links zu kennzeichnen, die zur Navigation durch eine Website oder Seiteninhalte genutzt werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die Rolle `navigation` ist eine [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles). Landmarkenrollen bieten eine Möglichkeit zur Identifizierung der Organisation und Struktur einer Webseite. Durch das Klassifizieren und Labeln von Seitenbereichen wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt. Screenreader nutzen Landmarkenrollen, um per Tastatur zu wichtigen Abschnitten einer Seite zu navigieren. Wie das HTML-Element {{HTMLElement('nav')}} bieten Navigationslandmarken eine Möglichkeit zur Identifizierung von Gruppen (z.B. Listen) von Links, die zur Navigation von Website- oder Seiteninhalten vorgesehen sind. Wenn eine Seite mehr als eine Navigationslandmarke beinhaltet, sollte jede eine eindeutige Bezeichnung haben. Falls zwei oder mehr Navigationslandmarken auf einer Seite denselben Satz von Links haben, verwenden Sie für jede denselben Bezeichner.

Es ist vorzuziehen, das HTML5-Element [`<nav>`](/de/docs/Web/HTML/Element/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Falls die Technik mit dem HTML5-Nav-Element nicht verwendet wird, nutzen Sie das Attribut `role="navigation"`, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des HTML-Elements {{HTMLElement('nav')}} teilt automatisch mit, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber ARIA bevorzugen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "navigation", da der Screenreader sowohl die Rolle als auch den Inhalt des Labels vorlesen wird.

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

## Barrierefreiheitsbedenken

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu kennzeichnen. Die Verwendung zu vieler Landmarkenrollen kann "Rauschen" in Screenreadern erzeugen, was das Verständnis des Gesamtlayouts der Seite erschwert.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des Elements {{HTMLElement('nav')}} teilt automatisch mit, dass ein Abschnitt die Rolle `navigation` hat. Verwenden Sie es, wenn immer möglich, bevorzugt.

### Kennzeichnung von Landmarken

#### Mehrfache Landmarken

Wenn es mehr als eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument gibt, geben Sie für jede Landmarke ein Label an. Dieses Label ermöglicht es einem Benutzer von unterstützender Technologie, den Zweck jeder Landmarke schnell zu verstehen.

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

Wenn eine `navigation`-Landmarkenrolle oder ein {{HTMLElement('nav')}}-Element in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie für jede Landmarke dasselbe Label. Ein Beispiel hierfür wäre das Wiederholen der Hauptnavigation am oberen und unteren Rand der Seite.

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

Screenreader geben den Typ der Rolle der Landmarke bekannt. Deshalb brauchen Sie nicht in ihrem Label zu beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primary navigation navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem Nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
