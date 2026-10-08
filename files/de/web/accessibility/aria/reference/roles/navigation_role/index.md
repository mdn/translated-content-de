---
title: "ARIA: navigation-Rolle"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die `navigation`-Rolle kennzeichnet wichtige Gruppen von Links, die zur Navigation innerhalb einer Website oder des Seiteninhalts dienen.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die `navigation`-Rolle ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmark-Rollen machen die Gliederung und Struktur einer Webseite erkennbar. Durch die Einteilung und Kennzeichnung von Seitenabschnitten werden Strukturinformationen, die visuell durch das Layout vermittelt werden, auch programmatisch zugänglich. Screenreader nutzen Landmark-Rollen, um die Tastaturnavigation zu wichtigen Seitenabschnitten zu ermöglichen. Wie das HTML-Element {{HTMLElement('nav')}} kennzeichnen Navigations-Landmarks Gruppen von Links (z. B. Listen), die zur Navigation innerhalb einer Website oder des Seiteninhalts vorgesehen sind. Wenn eine Seite mehr als eine Navigations-Landmark enthält, sollte jede eine eindeutige Bezeichnung erhalten. Wenn zwei oder mehr Navigations-Landmarks auf einer Seite dieselben Links enthalten, verwenden Sie für jede dieselbe Bezeichnung.

Verwenden Sie vorzugsweise das HTML5-[`<nav>`-Element](/de/docs/Web/HTML/Reference/Elements/nav), um eine Navigations-Landmark zu definieren. Wenn Sie das HTML5-Element `<nav>` nicht verwenden, definieren Sie die Navigations-Landmark mit einem `role="navigation"`-Attribut.

> [!NOTE]
> Das Element {{HTMLElement('nav')}} vermittelt automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation, ohne das Wort „Navigation“, da der Screenreader sowohl die Rolle als auch den Inhalt der Bezeichnung vorliest.

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam eingesetzt werden, um größere übergeordnete Abschnitte eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern zu einer Informationsflut führen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('nav')}} vermittelt automatisch, dass es die Rolle `navigation` hat. Verwenden Sie nach Möglichkeit das semantische Element `<nav>` anstelle der `navigation`-Rolle.

### Landmarks bezeichnen

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine Landmark mit der Rolle `navigation` oder mehr als ein Element {{HTMLElement('nav')}} enthält, versehen Sie jede Landmark mit einer Bezeichnung. So können Nutzer assistiver Technologien den Zweck jeder Landmark schnell erkennen.

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

Wenn eine Landmark mit der Rolle `navigation` oder ein Element {{HTMLElement('nav')}} in einem Dokument mehrfach vorkommt und die Landmarks denselben Inhalt haben, verwenden Sie für jede dieselbe Bezeichnung. Ein Beispiel dafür ist eine Hauptnavigation, die sowohl am Anfang als auch am Ende der Seite erscheint.

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

Screenreader geben die Rolle einer Landmark bekannt. Daher müssen Sie die Art der Landmark nicht zusätzlich in ihrer Bezeichnung beschreiben. Beispielsweise kann `role="navigation"` mit `aria-label="Primary navigation"` redundant als „primary navigation navigation“ ausgegeben werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('nav')}}
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Barrierefreie Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem nav-Element | HTML5 Doctor](https://html5doctor.com/nav-element/)
