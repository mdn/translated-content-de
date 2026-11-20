---
title: "ARIA: navigation-Rolle"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `navigation` dient dazu, wichtige Gruppen von Links zu kennzeichnen, die für die Navigation auf einer Website oder innerhalb des Inhalts einer Seite verwendet werden.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

Dies ist die Hauptnavigation einer Website.

## Beschreibung

Die Rolle `navigation` ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Landmark-Rollen ermöglichen es, die Organisation und Struktur einer Webseite zu kennzeichnen. Indem Abschnitte einer Seite klassifiziert und beschriftet werden, lassen sich Strukturinformationen, die visuell durch das Layout vermittelt werden, auch programmatisch darstellen. Screenreader verwenden Landmark-Rollen, um die Tastaturnavigation zu wichtigen Abschnitten einer Seite zu ermöglichen. Wie das HTML-Element {{HTMLElement('nav')}} ermöglichen Navigations-Landmarks die Kennzeichnung von Gruppen (z. B. Listen) von Links, die zur Navigation auf einer Website oder innerhalb des Inhalts einer Seite dienen. Wenn eine Seite mehr als eine Navigations-Landmark enthält, sollte jede eine eindeutige Beschriftung haben. Wenn zwei oder mehr Navigations-Landmarks auf einer Seite dieselben Links enthalten, verwenden Sie für sie dieselbe Beschriftung.

Verwenden Sie vorzugsweise das HTML5-[Element `<nav>`](/de/docs/Web/HTML/Reference/Elements/nav), um eine Navigations-Landmark zu definieren. Wenn Sie das HTML5-Element `nav` nicht verwenden, definieren Sie die Navigations-Landmark mit dem Attribut `role="navigation"`.

> [!NOTE]
> Das Element {{HTMLElement('nav')}} vermittelt automatisch, dass ein Abschnitt die Rolle `navigation` hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Eine kurze Beschreibung des Zwecks der Navigation. Lassen Sie dabei das Wort „Navigation“ weg, da der Screenreader sowohl die Rolle als auch den Inhalt der Beschriftung vorliest.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Aspekte der Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere Bereiche des Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern zu einer Informationsflut führen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('nav')}} vermittelt automatisch, dass es die Rolle `navigation` hat. Verwenden Sie nach Möglichkeit das semantische Element `<nav>` anstelle der Rolle `navigation`.

### Landmarks beschriften

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine Landmark mit der Rolle `navigation` oder mehr als ein Element {{HTMLElement('nav')}} enthält, versehen Sie jede Landmark mit einer Beschriftung. So können Personen, die assistive Technologien verwenden, den Zweck jeder Landmark schnell erkennen.

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

Wenn eine Landmark mit der Rolle `navigation` oder ein Element {{HTMLElement('nav')}} in einem Dokument wiederholt wird und beide Landmarks denselben Inhalt haben, verwenden Sie für beide dieselbe Beschriftung. Ein Beispiel dafür ist eine Hauptnavigation, die sowohl am Anfang als auch am Ende der Seite erscheint.

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

Screenreader geben die Rolle einer Landmark bekannt. Daher müssen Sie die Rolle nicht zusätzlich in der Beschriftung beschreiben. Beispielsweise kann `role="navigation"` mit `aria-label="Primary navigation"` redundant als „primary navigation navigation“ vorgelesen werden.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('nav')}}
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Barrierefreie Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantische Navigation mit dem Element nav | HTML5 Doctor](https://html5doctor.com/nav-element/)
