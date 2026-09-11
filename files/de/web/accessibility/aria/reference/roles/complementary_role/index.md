---
title: "ARIA: complementary-Rolle"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: 63e6075c870f818291e857d0ad5b291d1b5afe5b
---

Die `complementary`-[Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, aber eigenständig bestehen kann, wenn er davon getrennt wird. Diese Abschnitte werden häufig als Seitenleisten oder hervorgehobene Kästen dargestellt. Verwenden Sie nach Möglichkeit stattdessen das [HTML-Element \<aside>](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu Projektsponsoren.

## Beschreibung

Die `complementary`-Rolle ist eine [Landmark-](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)Rolle. Landmarks können von unterstützenden Technologien verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu ihnen zu navigieren. Inhalte, die in einem Container mit der `complementary`-Landmark-Rolle aufgeführt sind, sollten auch dann sinnvoll sein, wenn sie vom Hauptinhalt des Dokuments getrennt werden.

> [!NOTE]
> Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [sectioning content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt. Entwickler sollten stets die Verwendung des korrekten semantischen HTML-Elements der Verwendung von ARIA vorziehen.

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

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam verwendet werden, um größere übergeordnete Abschnitte des Dokuments zu kennzeichnen. Die Verwendung zu vieler Landmark-Rollen kann in Screenreadern „Rauschen“ erzeugen, wodurch es schwierig wird, das allgemeine Layout der Seite zu verstehen.

## Bewährte Praktiken

### HTML bevorzugen

Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [sectioning content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt. Verwenden Sie nach Möglichkeit das semantische `<aside>`-Element anstelle der `complementary`-Rolle.

### Landmarks beschriften

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine `complementary`-Landmark-Rolle oder ein {{HTMLElement('aside')}}-Element enthält, versehen Sie jedes Landmark mit einer Beschriftung, indem Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwenden oder, falls das aside einen passend beschreibenden Titel hat, mit dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) darauf verweisen. Diese Beschriftung ermöglicht es Nutzern unterstützender Technologien, den Zweck jedes Landmarks schnell zu verstehen.

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

Screenreader kündigen den Rollentyp eines Landmarks an. Daher müssen Sie in seiner Beschriftung nicht beschreiben, um welches Landmark es sich handelt. Beispielsweise kann eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` redundant als „complementary sidebar“ angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen erstellen. Dadurch können auch Nutzer ohne Screenreader große Abschnitte des Dokuments schnell identifizieren und zu ihnen navigieren.

- [Landmarks-Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
