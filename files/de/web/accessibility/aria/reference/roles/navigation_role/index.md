---
title: "ARIA: navigation Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `navigation` Rolle wird verwendet, um Hauptgruppen von Links zu identifizieren, die zur Navigation durch eine Website oder Seiteninhalte verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation` Rolle ist eine [landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch Klassifizierung und Benennung der Abschnitte einer Seite wird die visuell durch das Layout übermittelte Strukturinformation programmatisch repräsentiert. Screenreader verwenden Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Wie das HTML {{HTMLElement('nav')}} Element bieten Navigationslandmarks eine Möglichkeit, Gruppen (z. B. Listen) von Links zu identifizieren, die für die Navigation durch Website- oder Seiteninhalte gedacht sind. Wenn eine Seite mehr als ein Navigationslandmark enthält, sollte jedes eine eindeutige Bezeichnung haben. Wenn zwei oder mehr Navigationslandmarks auf einer Seite denselben Satz von Links haben, verwenden Sie dieselbe Bezeichnung für jedes.

Es ist vorzuziehen, das HTML5 [`<nav>` Element](/de/docs/Web/HTML/Reference/Elements/nav) zu verwenden, um ein Navigationslandmark zu definieren. Wenn die HTML5 `nav` Element-Technik nicht verwendet wird, verwenden Sie ein `role="navigation"` Attribut, um ein Navigationslandmark zu definieren.

> [!NOTE]
> Durch die Verwendung des {{HTMLElement('nav')}} Elements wird automatisch kommuniziert, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten immer bevorzugen, das richtige semantische HTML-Element zu verwenden, anstatt ARIA zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, wobei der Begriff "navigation" ausgelassen wird, da der Screenreader sowohl die Rolle als auch den Inhalt des Labels liest.

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabteilungen des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Lärm" in Screenreadern erzeugen, was es schwierig macht, die Gesamtanordnung der Seite zu verstehen.

## Best Practices

### HTML bevorzugen

Die Verwendung des {{HTMLElement('nav')}} Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `navigation` hat. Wenn irgendwie möglich, bevorzugen Sie die Verwendung dieses Elements.

### Landmarks kennzeichnen

#### Mehrere Landmarks

Wenn in einem Dokument mehr als eine `navigation` Landmark-Rolle oder ein {{HTMLElement('nav')}} Element vorhanden ist, geben Sie für jedes Landmark eine Bezeichnung an. Diese Bezeichnung ermöglicht es dem Benutzer unterstützender Technologien, schnell den Zweck jedes Landmarks zu verstehen.

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

Wenn eine `navigation` Landmark-Rolle oder ein {{HTMLElement('nav')}} Element in einem Dokument wiederholt wird und beide Landmarks identische Inhalte haben, verwenden Sie dieselbe Bezeichnung für jedes Landmark. Ein Beispiel dafür wäre das Wiederholen der Hauptnavigation am oberen und unteren Rand der Seite.

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

Screenreader geben den Typ der Rolle an, die das Landmark ist. Daher müssen Sie nicht beschreiben, was das Landmark in seiner Bezeichnung ist. Beispielsweise könnte eine Deklaration von `role="navigation"` mit `aria-label="Primary navigation"` redundant als "primary navigation navigation" angesagt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('nav')}} Element
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
