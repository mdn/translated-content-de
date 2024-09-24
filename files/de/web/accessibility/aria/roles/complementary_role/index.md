---
title: "ARIA: Rolle complementary"
slug: Web/Accessibility/ARIA/Roles/complementary_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `complementary` [Landmarkrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, jedoch auch alleinstehend sinnvoll ist. Diese Abschnitte werden häufig als Seitenleisten oder Hervorhebungskästen präsentiert. Wenn möglich, verwenden Sie stattdessen das [HTML-Element \<aside>](/de/docs/Web/HTML/Element/aside).

```html
<div role="complementary">
  <h2>Unsere Partner</h2>
  <!-- Inhalt des ergänzenden Abschnitts -->
</div>
```

Dies ist eine Seitenleiste, die Links zu Projektsponsoren enthält.

## Beschreibung

Die Rolle `complementary` ist [eine Landmarkrolle](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles). Landmarken können von unterstützenden Technologien verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Inhalte, die in einem Container mit der `complementary`-Landmarkrolle aufgeführt sind, sollten sinnvoll sein, wenn sie vom Hauptinhalt des Dokuments getrennt werden.

> [!NOTE]
> Bei Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch mitgeteilt, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber der Nutzung von ARIA bevorzugen.

## Beispiele

```html
<div role="complementary">
  <h2>Trendartikel</h2>
  <ul>
    <li><a href="#">18 Tweets, die alle Emotionen in Ihnen wecken werden</a></li>
    <li>
      <a href="#">Hören Sie auf zu suchen! Ich habe die perfekten Mittagsschalen gefunden.</a>
    </li>
    <li>
      <a href="#">Es ist an der Zeit, zu entscheiden, wie diese Lebensmittel genannt werden</a>
    </li>
    <li><a href="#">17 wirklich gute Beiträge, die wir diese Woche auf Tumblr gesehen haben</a></li>
    <li><a href="#">10 Eltern-Hacks, die wir ausprobiert haben und die funktionieren</a></li>
  </ul>
</div>
```

## Zugänglichkeitsbedenken

[Landmarkrollen](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Nutzung zu vieler Landmarkrollen kann „Rauschen“ in Screenreadern erzeugen, was es erschwert, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}}-Elements wird automatisch mitteilen, dass ein Abschnitt die Rolle `complementary` hat. Wenn möglich, bevorzugen Sie die Verwendung.

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `complementary`-Landmarkrolle oder ein {{HTMLElement('aside')}} gibt, geben Sie für jede Landmarke mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut eine Bezeichnung an, oder wenn das 'aside' einen entsprechend beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut. Diese Bezeichnung ermöglicht es einem Nutzer von unterstützender Technologie, schnell den Zweck jeder Landmarke zu verstehen.

```html
<aside aria-label="Hinweis zur Nutzung">
  <!-- Inhalt -->
</aside>

…

<aside id="sidebar" aria-label="Sponsoren">
  <!-- Inhalt -->
</aside>
```

#### Überflüssige Beschreibungen

Screenreader geben den Typ der Rolle der Landmarke bekannt. Aus diesem Grund brauchen Sie in ihrer Bezeichnung nicht zu beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` als, "ergänzende Sidebar" redundant angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmarkrollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Element/aside)
- [complementary (Rolle): Zugängliche Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Landmarkrollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside erneut betrachtet | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
