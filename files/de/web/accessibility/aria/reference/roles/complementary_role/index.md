---
title: "ARIA: Rolle complementary"
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `complementary` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, jedoch auch eigenständig sinnvoll ist, wenn er getrennt ist. Diese Abschnitte werden häufig als Seitenleisten oder Call-out-Boxen dargestellt. Wenn möglich, verwenden Sie das [HTML `<aside>`-Element](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die Rolle `complementary` ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Landmarken können von unterstützenden Technologien verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Inhalte, die in einem Container mit der `complementary`-Landmark-Rolle aufgeführt sind, sollten auch dann verständlich sein, wenn sie vom Hauptinhalt des Dokuments getrennt sind.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer das korrekte semantische HTML-Element gegenüber der Verwendung von ARIA bevorzugen.

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam verwendet werden, um größere Gesamtbereiche des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Geräusche" in Screenreadern erzeugen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Wenn möglich, sollte dieses bevorzugt werden.

### Benennung von Landmarken

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `complementary`-Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element gibt, versehen Sie jede Landmarke mit einer Beschriftung durch das [`aria-label`]-Attribut(/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), oder, wenn die Seitenleiste einen entsprechend beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`]-Attribut(/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Diese Beschriftung ermöglicht es dem Benutzer von unterstützenden Technologien, den Zweck jeder Landmarke schnell zu verstehen.

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

Screenreader geben den Typ der Landmarke an. Deshalb müssen Sie in der Beschriftung nicht beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="complementary"` mit `aria-label="Sidebar"` redundant als "komplementäre Seitenleiste" angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien, wie z.B. Browsererweiterungen, können Listen aller auf einer Seite vorhandenen Landmark-Rollen erzeugen, sodass auch Benutzer, die keinen Screenreader verwenden, schnell große Abschnitte des Dokuments identifizieren und navigieren können.

- [Landmarks Browsererweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [complementary (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Abschnitten und -Strukturen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Barrierefreie Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
