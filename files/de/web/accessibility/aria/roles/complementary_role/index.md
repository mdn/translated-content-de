---
title: "ARIA: complementary role"
slug: Web/Accessibility/ARIA/Roles/complementary_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `complementary` [landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, aber auch eigenständig bestehen kann, wenn er getrennt wird. Diese Abschnitte werden häufig als Sidebars oder Hervorhebungsboxen präsentiert. Wenn möglich, verwenden Sie das [HTML `<aside>`-Element](/de/docs/Web/HTML/Element/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Sidebar mit Links zu Projektsponsoren.

## Beschreibung

Die Rolle `complementary` ist [eine Landmark](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) Rolle. Landmarks können von unterstützender Technologie genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Der Inhalt in einem Container mit der `complementary`-Landmark-Rolle sollte Sinn ergeben, auch wenn er vom Hauptinhalt des Dokuments getrennt ist.

> [!NOTE]
> Durch die Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch kommuniziert, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten stets die Verwendung des korrekten semantischen HTML-Elements gegenüber der Verwendung von ARIA bevorzugen.

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

## Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) sollten sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern „Rauschen“ erzeugen und es erschweren, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `complementary` hat. Wenn möglich, ziehen Sie es vor, es zu verwenden.

### Landmarks kennzeichnen

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `complementary`-Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element gibt, versehen Sie jede Landmark mit einem Label, indem Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwenden oder, wenn das `aside` einen entsprechend beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut. Dieses Label ermöglicht es einem Nutzer unterstützender Technologien, schnell den Zweck jeder Landmark zu verstehen.

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

Screenreader kündigen die Art der Rolle der Landmark an. Daher brauchen Sie nicht zu beschreiben, was die Landmark in ihrem Label ist. Zum Beispiel kann eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` redundant als „ergänzende Sidebar“ angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browsererweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, wodurch auch Nicht-Screenreader-Nutzer schnell große Abschnitte des Dokuments identifizieren und navigieren können.

- [Landmarks-Browsererweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Element/aside)
- [complementary (Role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Sektionen und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
