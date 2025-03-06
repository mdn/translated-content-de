---
title: "ARIA: complementary Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `complementary` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, jedoch eigenständig bestehen kann, wenn er getrennt wird. Diese Abschnitte werden häufig als Seitenleisten oder hervorgehobene Kästen dargestellt. Verwenden Sie nach Möglichkeit das [HTML \<aside>-Element](/de/docs/Web/HTML/Element/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die `complementary` Rolle ist [eine Landmark](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)-Rolle. Landmarks können von unterstützender Technologie verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Der Inhalt, der innerhalb eines Containers mit der `complementary` Landmark-Rolle aufgelistet ist, sollte auch dann sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt wird.

> [!NOTE]
> Bei Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch kommuniziert, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer bevorzugen, das korrekte semantische HTML-Element anstelle von ARIA zu verwenden.

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

## Barrierefreiheitsaspekte

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern "Rauschen" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Wenn möglich, sollte es bevorzugt verwendet werden.

### Beschriftung von Landmarks

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `complementary` Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element gibt, versehen Sie jede Landmark mit einem Label unter Verwendung des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs oder, wenn die Aside ein entsprechend beschreibendes Title hat, weisen Sie mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut darauf hin. Dieses Label ermöglicht es Nutzern von unterstützender Technologie, den Zweck jeder Landmark schnell zu verstehen.

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

Screenreader geben die Art der Rolle bekannt, die die Landmark ist. Aufgrund dessen müssen Sie in ihrem Label nicht beschreiben, was die Landmark ist. Zum Beispiel könnte eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` redundant als „complementary sidebar“ angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Element/aside)
- [complementary (Rolle): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Barrierefreie Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
