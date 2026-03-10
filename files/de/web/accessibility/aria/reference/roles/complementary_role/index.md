---
title: "ARIA: complementary Rolle"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die `complementary` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, aber auch eigenständig stehen kann, wenn er getrennt ist. Diese Abschnitte werden häufig als Seitenleisten oder Hervorhebungsboxen präsentiert. Wenn möglich, verwenden Sie stattdessen das [HTML \<aside> Element](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die `complementary` Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Landmarken können von unterstützenden Technologien verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Inhalte, die in einem Container mit der `complementary` Landmarke aufgelistet sind, sollten verständlich sein, auch wenn sie vom Hauptinhalt des Dokuments getrennt sind.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}} Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

## Beispiele

```html
<div role="complementary">
  <h2>Trending articles</h2>
  <ul>
    <li><a href="#">18 tweets that will make you feel all the feels</a></li>
    <li>
      <a href="#">Stop searching! I've found the perfect lunch containers.</a>
    </li>
    <li>
      <a href="#">The time has come to decide how to call these foods</a>
    </li>
    <li><a href="#">17 really good posts we saw on Tumblr this week</a></li>
    <li><a href="#">10 parent hacks we know work because we tried them</a></li>
  </ul>
</div>
```

## Barrierefreiheitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sind dazu gedacht, sparsam verwendet zu werden, um größere, übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann in Screenreadern "Lärm" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}} Elements kommuniziert automatisch, dass das Element die Rolle `complementary` hat. Wenn möglich, bevorzugen Sie das semantische `<aside>` Element anstelle der `complementary` Rolle.

### Kennzeichnung von Landmarken

#### Mehrere Landmarken

Wenn in einem Dokument mehr als eine `complementary` Landmark-Rolle oder ein {{HTMLElement('aside')}} Element vorhanden ist, versehen Sie jede Landmarke mit einem Label unter Verwendung des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs oder, wenn die Seitenleiste einen entsprechend beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut. Dieses Label ermöglicht es den Benutzern von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

```html
<aside aria-label="Note about usage">
  <!-- content -->
</aside>

…

<aside id="sidebar" aria-label="Sponsors">
  <!-- content -->
</aside>
```

#### Redundante Beschreibungen

Screenreader kündigen die Art der Rolle der Landmarke an. Aus diesem Grund müssen Sie die Landmarke in ihrem Label nicht beschreiben. Zum Beispiel kann eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` redundant als "complementary sidebar" angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browsererweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [Verwendung von HTML-Abschnitts- und Umbruchstrukturen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
