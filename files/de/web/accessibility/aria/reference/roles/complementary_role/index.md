---
title: "ARIA: complementary Rolle"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die `complementary` [landmark Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu bezeichnen, der sich auf den Hauptinhalt bezieht, aber auch allein stehen kann, wenn er getrennt wird. Diese Abschnitte werden häufig als Seitenleisten oder Hervorhebungsboxen präsentiert. Wenn möglich, verwenden Sie das [HTML \<aside> Element](/de/docs/Web/HTML/Reference/Elements/aside) anstelle dessen.

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die `complementary` Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Landmarken können von unterstützender Technologie verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Der Inhalt, der innerhalb eines Containers mit der `complementary` Landmarke aufgeführt ist, sollte sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt ist.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen.

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

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam verwendet werden, um größere übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann zu "Geräuschen" in Screenreadern führen, was es schwierig macht, das gesamte Layout der Seite zu verstehen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('aside')}} Elements kommuniziert automatisch, dass das Element die Rolle `complementary` hat. Wenn möglich, bevorzugen Sie die Verwendung des semantischen `<aside>` Elements statt der `complementary` Rolle.

### Landmarken beschriften

#### Mehrere Landmarken

Wenn es mehr als eine `complementary` Landmarke oder {{HTMLElement('aside')}} Element in einem Dokument gibt, versehen Sie jede Landmarke mit einem Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut oder, wenn das Aside einen entsprechend beschreibenden Titel hat, zeigen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut. Dieses Label ermöglicht es einem Benutzer mit unterstützender Technologie, schnell den Zweck jeder Landmarke zu verstehen.

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

Screenreader geben die Art der Rolle der Landmarke an. Aus diesem Grund müssen Sie nicht beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel kann eine Deklaration von `role="complementary"` mit `aria-label="Sidebar"` redundanterweise als "complementary sidebar" angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browsererweiterungen können Listen aller auf einer Seite vorhandenen Landmarkenrollen generieren, sodass auch Benutzer, die keine Screenreader verwenden, große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmarkenrollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Barrierefreie Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
