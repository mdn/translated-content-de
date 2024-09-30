---
title: "ARIA: complementary-Rolle"
slug: Web/Accessibility/ARIA/Roles/complementary_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `complementary` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, aber auch alleine bestehen kann, wenn er getrennt wird. Diese Abschnitte werden häufig als Seitenleisten oder Hervorhebungsboxen präsentiert. Wo möglich, verwenden Sie stattdessen das [HTML-Element `<aside>`](/de/docs/Web/HTML/Element/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die `complementary`-Rolle ist [eine Landmark](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) Rolle. Landmarks können von unterstützenden Technologien genutzt werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Der Inhalt, der innerhalb eines Containers mit der `complementary` Landmark-Rolle aufgeführt ist, sollte auch ohne den Hauptinhalt des Dokuments Sinn ergeben.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten stets bevorzugen, das richtige semantische HTML-Element anstelle von ARIA zu verwenden.

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

## Bedenken zur Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) sollen sparsam verwendet werden, um größere übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Bildschirmlesern "Geräusche" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Es sollte, wenn möglich, bevorzugt verwendet werden.

### Kennzeichnung von Landmarks

#### Mehrere Landmarks

Wenn es mehr als eine `complementary` Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element in einem Dokument gibt, geben Sie jedem Landmark mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut eine Bezeichnung oder, wenn das Aside einen entsprechend beschreibenden Titel hat, verweisen Sie mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut darauf. Diese Bezeichnung ermöglicht es einem Benutzer der unterstützenden Technologie, schnell den Zweck jedes Landmarks zu verstehen.

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

Bildschirmleser geben die Art der Rolle des Landmarks bekannt. Daher müssen Sie in der Bezeichnung nicht beschreiben, was das Landmark ist. Ein Beispiel: Eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` könnte redundant als "complementary sidebar" angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, sodass auch Nicht-Bildschirmlese-Benutzer große Dokumentabschnitte schnell identifizieren und navigieren können.

- [Landmarks-Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Element/aside)
- [complementary (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
