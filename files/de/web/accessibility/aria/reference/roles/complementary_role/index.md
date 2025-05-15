---
title: "ARIA: complementary Rolle"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `complementary` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, jedoch auch allein stehen kann, wenn er getrennt wird. Diese Abschnitte werden häufig als Seitenleisten oder Hinweiskästen präsentiert. Wenn möglich, verwenden Sie stattdessen das [HTML \<aside>-Element](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste, die Links zu Projektsponsoren enthält.

## Beschreibung

Die `complementary` Rolle ist [eine Landmark](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) Rolle. Landmarks können von unterstützenden Technologien verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Inhalte, die innerhalb eines Containers mit der `complementary` Landmark-Rolle aufgeführt sind, sollten Sinn ergeben, auch wenn sie vom Hauptinhalt des Dokuments getrennt sind.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch mitteilen, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer die korrekten semantischen HTML-Elemente der Verwendung von ARIA vorziehen.

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte eines Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann in Screenreadern "Geräusche" erzeugen, die es schwierig machen, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch mitteilen, dass ein Abschnitt die Rolle `complementary` hat. Wenn möglich, ziehen Sie die Verwendung vor.

### Landmarks kennzeichnen

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `complementary`-Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element gibt, versehen Sie jede Landmark mit einem Label unter Verwendung des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs oder, wenn das aside einen geeignet beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut. Dieses Label ermöglicht es einem Benutzer von unterstützender Technologie, schnell den Zweck jeder Landmark zu verstehen.

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

Screenreader kündigen den Typ der Rolle an, die die Landmark ist. Aus diesem Grund müssen Sie in ihrem Label nicht beschreiben, was die Landmark ist. Beispiel: Eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` könnte redundant als „complementary sidebar“ angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [complementary (Rolle): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
