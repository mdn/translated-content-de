---
title: "ARIA: region Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die **`region`** Rolle wird verwendet, um Dokumentbereiche zu identifizieren, die der Autor als bedeutend erachtet. Sie ist ein generischer Orientierungspunkt, der zur Navigation unterstützt, wenn keine der anderen Rollen für Orientierungspunkte geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA-Orietierungspunkt](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Die `region` Rolle sollte für Inhaltsabschnitte reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich leicht zu diesem Abschnitt navigieren möchten und ihn in einer Übersicht der Seite aufgelistet haben möchten. Eine `region` Rolle ist ein allgemeinerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht genau von einer der anderen Rollen für Orientierungspunkte beschrieben werden kann, wie z.B. [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit einer `region` Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), welches auf eine sichtbare Überschrift verweist. Wenn keine geeignete sichtbare Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Orientierungspunktsrolle sollte Sinn machen, auch wenn er vom Hauptinhalt des Dokuments getrennt ist.

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt eine `region` Rolle hat, wenn er einen zugänglichen Namen erhält. Entwickler sollten immer das korrekte semantische HTML-Element verwenden, in diesem Fall `<section>`, anstatt ARIA zu verwenden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oft ist der Wert des `aria-labelledby` Attributs die ID des Elements, das zur Überschrift des Abschnitts verwendet wird. Wenn keine geeignete sichtbare Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Barrierefreiheitserwägungen

Sparsam verwenden! [Rollen für Orientierungspunkte](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Rollen für Orientierungspunkte kann in Screenreadern "Geräusche" erzeugen, was es schwierig machen kann, das Gesamtlayout der Seite zu verstehen.

Verwenden Sie die `region` Rolle nur, wenn kein anderer relevanter [Inhaltsstrukturierung](/de/docs/Web/HTML/Element#content_sectioning) Element oder [Orientierungspunktrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) zutrifft. Wenn mehrere Regionen auf einer Seite existieren, kann es sich lohnen, die Gesamtstruktur der Seite erneut zu überprüfen.

## Best Practices

### HTML bevorzugen

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt eine `region` Rolle hat, wenn er einen zugänglichen Namen erhält. Wenn möglich, bevorzugen Sie die Verwendung des {{HTMLElement('section')}} Elements.

### Kennzeichnung von Orientierungspunkten

Wenn es mehr als eine `region` Orientierungspunktrolle in einem Dokument gibt, geben Sie jedem eine einzigartige Kennzeichnung. Diese Kennzeichnung ermöglicht es einem Benutzer mit unterstützender Technologie, schnell den Zweck jedes Orientierungspunkts zu verstehen.

```html
<div role="region" aria-labelledby="use-discretion">
  <h3 id="use-discretion">Please use the `region` role with discretion</h3>
  <!-- content -->
</div>

…

<div role="region" aria-labelledby="please-reconsider">
  <h3 id="please-reconsider">Please reconsider your document structure</h3>
  <!-- content -->
</div>
```

In diesem Beispiel wird das Label der Region durch das [`aria-labelledby` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) erzeugt.

### Scrollbare Inhaltsbereiche mit Überlauftext

Wenn ein Inhaltsbereich mit `tabindex="0"` versehen ist, fügen Sie `role="region"` hinzu, um Benutzer von Screenreadern darauf hinzuweisen, dass es sich um eine generische Region handelt. Dies geschieht, um Tastaturbenutzern zu ermöglichen, Bereiche mit Überlauftext zu scrollen.

### SVG

`role="region"` kann in Bereichen von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte des SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}} Element
- [region (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Rollen für Orientierungspunkte: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Orientierungspunkten – 2013 | Die Paciello-Gruppe](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Orientierungspunkte | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
