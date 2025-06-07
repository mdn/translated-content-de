---
title: "ARIA: complementary role"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `complementary`-Rolle [landmark role](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) wird verwendet, um einen unterstützenden Abschnitt zu kennzeichnen, der sich auf den Hauptinhalt bezieht, aber auch eigenständig bestehen kann. Diese Abschnitte werden häufig als Seitenleisten oder Hinweisboxen dargestellt. Wenn möglich, verwenden Sie das [HTML-Element \<aside>](/de/docs/Web/HTML/Reference/Elements/aside).

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

Dies ist eine Seitenleiste, die Links zu Projektsponsoren enthält.

## Beschreibung

Die `complementary`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles). Landmarken können von unterstützenden Technologien verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Der Inhalt, der sich in einem Container mit der `complementary`-Landmarkenrolle befindet, sollte auch dann sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt ist.

> [!NOTE]
> Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Entwickler sollten immer die Verwendung des korrekten semantischen HTML-Elements gegenüber ARIA bevorzugen.

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

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles) sollten sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmarkenrollen kann "Rauschen" in Bildschirmlesegeräten erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('aside')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `complementary` hat. Verwenden Sie es nach Möglichkeit bevorzugt.

### Markieren von Landmarken

#### Mehrfache Landmarken

Wenn es in einem Dokument mehr als eine `complementary`-Landmarkenrolle oder ein {{HTMLElement('aside')}}-Element gibt, versehen Sie jedes Landmarke mit einem Label mithilfe des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs oder, wenn das `aside` einen passenden beschreibenden Titel hat, verweisen Sie darauf mit dem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut. Dieses Label ermöglicht es einem Benutzer von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

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

Bildschirmlesegeräte kündigen die Art der Rolle der Landmarke an. Daher müssen Sie die Landmarke in ihrem Label nicht beschreiben. Beispielsweise kann eine Deklaration von `role="complementary"` mit einem `aria-label="Sidebar"` redundant als "complementary sidebar" angekündigt werden.

### Zusätzliche Vorteile

Bestimmte Technologien, wie z.B. Browser-Erweiterungen, können Listen aller auf einer Seite vorhandenen Landmarkenrollen generieren, was es auch Nicht-Bildschirmleser-Benutzern ermöglicht, große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren.

- [Landmarks-Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [\<aside>: Das Aside-Element](/de/docs/Web/HTML/Reference/Elements/aside)
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Landmarkenrollen: Verwendung von ARIA: Roles, States und Properties](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)
