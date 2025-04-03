---
title: "ARIA: Rolle navigation"
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die Rolle `navigation` wird verwendet, um Hauptgruppen von Links zu identifizieren, die zum Navigieren durch eine Website oder Seiteninhalte verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die Rolle `navigation` ist eine [Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmarkenrollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Kennzeichnung von Seitenbereichen wird visuell durch das Layout vermittelte strukturelle Information programmatisch dargestellt. Screenreader verwenden Landmarkenrollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML-Element {{HTMLElement('nav')}} bieten Navigationslandmarken eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die für die Navigation von Website- oder Seiteninhalten vorgesehen sind. Wenn eine Seite mehr als eine Navigationslandmarke enthält, sollte jede eine eindeutige Kennzeichnung haben. Wenn zwei oder mehr Navigationslandmarken auf einer Seite den gleichen Satz von Links haben, verwenden Sie für jede denselben Bezeichner.

Es ist vorzuziehen, das HTML5-Element [`<nav>`](/de/docs/Web/HTML/Element/nav) zu verwenden, um eine Navigationslandmarke zu definieren. Wenn die HTML5-`nav`-Element-Technik nicht verwendet wird, verwenden Sie ein Attribut `role="navigation"`, um eine Navigationslandmarke zu definieren.

> [!NOTE]
> Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `navigation` hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber der Verwendung von ARIA bevorzugen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne den Begriff "Navigation", da der Screenreader sowohl die Rolle als auch den Inhalt des Labels vorliest.

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

## Barrierefreiheitsaspekte

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam eingesetzt werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Lärm" in Screenreadern erzeugen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

## Best Practices

### HTML bevorzugen

Die Verwendung des {{HTMLElement('nav')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `navigation` hat. Wenn möglich, ziehen Sie es vor, es zu verwenden.

### Landmarks kennzeichnen

#### Mehrere Landmarks

Wenn es mehr als eine Landmarkenrolle `navigation` oder {{HTMLElement('nav')}} in einem Dokument gibt, geben Sie für jede Landmarke eine Kennzeichnung an. Dieses Label ermöglicht es einem Benutzer von Hilfstechnologien, den Zweck jeder Landmarke schnell zu verstehen.

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

Wenn eine Landmarkenrolle `navigation` oder {{HTMLElement('nav')}} in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie für jede Landmarke dasselbe Label. Ein Beispiel hierfür wäre das Wiederholen der Hauptnavigation am oberen und unteren Rand der Seite.

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

Screenreader werden die Art der Rolle der Landmarke ankündigen. Aus diesem Grund müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Beispielsweise könnte eine Deklaration von `role="navigation"` mit einem `aria-label="Primary navigation"` redundant als "primary navigation navigation" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}}-Element
- [Verwenden von HTML-Abschnitten und -Outlines](/de/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
