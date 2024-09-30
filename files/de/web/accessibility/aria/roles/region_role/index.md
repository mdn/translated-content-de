---
title: "ARIA: region Rolle"
slug: Web/Accessibility/ARIA/Roles/region_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`region`** Rolle wird verwendet, um Bereiche eines Dokuments zu kennzeichnen, die der Autor als wichtig erachtet. Es handelt sich um ein generisches Landmark, das zur Navigation verwendet werden kann, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) Rolle.
Die `region` Rolle sollte für Inhaltsabschnitte reserviert werden, die ausreichend wichtig sind, sodass Benutzer wahrscheinlich leicht zu dem Abschnitt navigieren und ihn in einer Zusammenfassung der Seite aufgeführt sehen möchten. Eine `region` Rolle ist ein mehr generischer Begriff und sollte nur verwendet werden, wenn der zu kennzeichnende Abschnitt nicht durch eine der anderen Landmark-Rollen genau beschrieben wird, wie z.B. [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role).

Jedes Element mit einer `region` Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare passende Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Landmark Rolle sollte sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt ist.

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt eine `region` Rolle hat, wenn ihm ein zugänglicher Name zugewiesen wird. Entwickler sollten immer das richtige semantische HTML-Element verwenden, in diesem Fall `<section>`, anstatt ARIA zu verwenden.

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu beschriften. Oft wird der Wert des `aria-labelledby` Attributs die ID des Elements sein, das den Abschnitt betitelt. Wenn keine sichtbare passende Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Barrierefreiheitsbedenken

Verwenden Sie es sparsam! [Landmark Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann bei Bildschirmlesegeräten "Rauschen" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

Verwenden Sie die `region` Rolle nur, wenn kein anderes relevantes [Inhaltsabgrenzungs](/de/docs/Web/HTML/Element#content_sectioning) Element oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) zutrifft. Wenn auf einer Seite mehrere Regionen existieren, kann es sich lohnen, die gesamte Struktur der Seite erneut zu überprüfen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt eine `region` Rolle hat, wenn ihm ein zugänglicher Name zugewiesen wird. Sofern möglich, bevorzugen Sie die Verwendung von {{HTMLElement('section')}}.

### Beschriftung von Landmarks

Wenn in einem Dokument mehr als eine `region` Landmark Rolle vorhanden ist, geben Sie jedem eine eindeutige Beschriftung. Diese Beschriftung ermöglicht es einem Benutzer von unterstützenden Technologien, schnell den Zweck jedes Landmarks zu verstehen.

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

In diesem Beispiel wird das Label der Region durch das [`aria-labelledby` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) erzeugt.

### Scrollbare Inhaltsbereiche mit überfließendem Text

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Bildschirmlesegerätebenutzern mitzuteilen, dass es sich um eine generische Region handelt. Dies geschieht, um Tastaturbenutzern das Scrollen von Regionen mit überfließendem Text zu ermöglichen.

### SVG

`role="region"` kann auf Bereiche von {{SVGElement('svg')}} zusammen mit einem `aria-label` erklärt werden, um einzelne Abschnitte des SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}} Element
- [region (Role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [Landmark Rollen: Nutzung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
