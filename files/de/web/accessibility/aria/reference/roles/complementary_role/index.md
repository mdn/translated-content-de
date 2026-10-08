---
title: "ARIA: Rolle complementary"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) `complementary` kennzeichnet einen ergänzenden Bereich, der mit dem Hauptinhalt zusammenhängt, aber auch für sich allein verständlich ist. Solche Bereiche werden häufig als Seitenleisten oder hervorgehobene Infokästen dargestellt. Verwenden Sie nach Möglichkeit stattdessen das [HTML-Element \<aside>](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste mit Links zu den Sponsoren des Projekts.

## Beschreibung

Die Rolle `complementary` ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Mithilfe von Landmarks können assistive Technologien größere Bereiche eines Dokuments schnell erkennen und ansteuern. Inhalte in einem Container mit der Landmark-Rolle `complementary` sollten auch dann verständlich sein, wenn sie vom Hauptinhalt des Dokuments getrennt werden.

> [!NOTE]
> Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [sectioning content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt. Entwickler sollten stets das passende semantische HTML-Element gegenüber ARIA bevorzugen.

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

## Aspekte der Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam eingesetzt werden, um größere Bereiche eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können die Ausgabe von Screenreadern unübersichtlich machen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

## Bewährte Praktiken

### HTML bevorzugen

Das Element {{HTMLElement('aside')}} hat implizit die Rolle `complementary`, es sei denn, es hat keinen {{Glossary("accessible_name", "zugänglichen Namen")}} und ist in [sectioning content](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt. Verwenden Sie nach Möglichkeit das semantische Element `<aside>` statt der Rolle `complementary`.

### Landmarks beschriften

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine Landmark mit der Rolle `complementary` oder mehr als ein Element {{HTMLElement('aside')}} enthält, versehen Sie jede Landmark mit einer Beschriftung. Verwenden Sie dazu das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Wenn das `aside`-Element einen passenden, aussagekräftigen Titel hat, können Sie mit dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) darauf verweisen. Anhand dieser Beschriftung können Nutzer assistiver Technologien den Zweck der einzelnen Landmarks schnell erkennen.

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

Screenreader geben den Rollentyp einer Landmark aus. Daher müssen Sie diesen nicht zusätzlich in der Beschriftung beschreiben. Beispielsweise könnte `role="complementary"` zusammen mit `aria-label="Sidebar"` redundant als „complementary sidebar“ ausgegeben werden.

### Weitere Vorteile

Bestimmte Technologien, etwa Browser-Erweiterungen, können eine Liste aller Landmark-Rollen auf einer Seite erstellen. So können auch Nutzer ohne Screenreader größere Bereiche des Dokuments schnell erkennen und ansteuern.

- [Browser-Erweiterung „Landmarks“](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmark-Rollen: ARIA verwenden – Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Barrierefreie Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside erneut betrachtet | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
