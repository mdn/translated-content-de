---
title: "ARIA: Rolle complementary"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) `complementary` kennzeichnet einen ergänzenden Abschnitt, der mit dem Hauptinhalt zusammenhängt, aber auch für sich allein verständlich ist. Solche Abschnitte werden häufig als Seitenleisten oder hervorgehobene Kästen dargestellt. Verwenden Sie nach Möglichkeit stattdessen das [HTML-Element \<aside>](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu den Sponsoren des Projekts.

## Beschreibung

Die Rolle `complementary` ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Assistive Technologien können Landmarks verwenden, um größere Abschnitte eines Dokuments schnell zu erkennen und dorthin zu navigieren. Inhalte in einem Container mit der Landmark-Rolle `complementary` sollten auch dann verständlich sein, wenn sie vom Hauptinhalt des Dokuments getrennt werden.

> [!NOTE]
> Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [gliedernde Inhalte](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) eingebettet. Verwenden Sie nach Möglichkeit immer das passende semantische HTML-Element statt ARIA.

## Hinweise zur Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam eingesetzt werden, um größere Bereiche eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können bei Screenreadern zu unnötigen Ansagen führen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

## Bewährte Verfahren

### HTML bevorzugen

Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [gliedernde Inhalte](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) eingebettet. Verwenden Sie nach Möglichkeit das semantische Element `<aside>` statt der Rolle `complementary`.

### Landmarks beschriften

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine Landmark mit der Rolle `complementary` oder mehr als ein {{HTMLElement('aside')}}-Element enthält, versehen Sie jede Landmark mit einer Beschriftung. Verwenden Sie dazu das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Falls das Aside-Element einen passenden, aussagekräftigen Titel hat, können Sie stattdessen mit dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) darauf verweisen. Anhand der Beschriftung können Nutzer assistiver Technologien den Zweck jeder Landmark schnell erkennen.

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

Screenreader geben den Rollentyp einer Landmark bekannt. Daher müssen Sie den Typ der Landmark nicht in ihrer Beschriftung beschreiben. Beispielsweise könnte `role="complementary"` mit `aria-label="Sidebar"` redundant als „ergänzende Seitenleiste“ angesagt werden.

### Weitere Vorteile

Bestimmte Technologien, etwa Browser-Erweiterungen, können Listen aller Landmark-Rollen auf einer Seite erstellen. So können auch Nutzer ohne Screenreader größere Abschnitte eines Dokuments schnell erkennen und dorthin navigieren.

- [Browser-Erweiterung Landmarks](https://matatk.agrip.org.uk/landmarks/)

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: ARIA verwenden – Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside neu betrachtet | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
