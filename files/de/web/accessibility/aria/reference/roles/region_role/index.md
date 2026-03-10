---
title: "ARIA: region Rolle"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die **`region`** Rolle wird verwendet, um Bereiche im Dokument zu identifizieren, die der Autor als bedeutend erachtet. Es ist ein allgemeines Wegweiser-Element, das zur Navigation eingesetzt wird, wenn keine der anderen Wegweiser-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA Wegweiser](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Die `region` Rolle sollte für Inhaltsbereiche reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu diesem Abschnitt navigieren und ihn in einer Zusammenfassung der Seite aufgeführt haben möchten. Eine `region` Rolle ist ein generischer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht treffend durch eine der anderen Wegweiser-Rollen beschrieben wird, wie z. B. [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role), oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit einer `region` Rolle sollte ein Label enthalten, das den Zweck des Inhalts im Bereich beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine passende sichtbare Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Wegweiser-Rolle sollte auch ohne den Hauptinhalt des Dokuments sinnvoll sein.

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `region` hat, wenn er einen zugänglichen Namen erhält. Entwickler sollten immer die Verwendung des korrekten semantischen HTML-Elements, in diesem Fall `<section>`, der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu beschriften. Häufig besteht der Wert des `aria-labelledby` Attributs aus der ID des Elements, das den Abschnitt betitelt. Wenn keine passende sichtbare Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Zugänglichkeitsbedenken

Verwenden Sie die `region` Rolle sparsam! [Wegweiser-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, sparsam eingesetzt zu werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Wegweiser-Rollen kann "Rauschen" in Bildschirmleseprogrammen erzeugen und es schwierig machen, die Gesamtstruktur der Seite zu verstehen.

Verwenden Sie die `region` Rolle nur, wenn kein anderes relevantes [Inhalts-Sectioning](/de/docs/Web/HTML/Reference/Elements#content_sectioning) Element oder [Wegweiser-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) zutrifft. Wenn auf einer Seite mehrere Regionen existieren, könnte es sinnvoll sein, die Gesamtstruktur der Seite erneut zu überdenken.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass das Element die Rolle `region` hat. Wenn möglich, ziehen Sie es vor, das semantische `<section>` Element anstelle der `region` Rolle zu verwenden.

### Bezeichnen von Wegweisern

Wenn es in einem Dokument mehr als eine `region` Wegweiser-Rolle gibt, geben Sie jeder eine eindeutige Bezeichnung. Diese Bezeichnung ermöglicht es einem Benutzer mit assistiver Technologie, schnell den Zweck jedes Wegweisers zu verstehen.

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

### Scrollende Inhaltsbereiche mit Überlauftext

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Bildschirmleser-Benutzern zu signalisieren, dass es sich um eine generische Region handelt. Dies wird getan, um Benutzern, die nur die Tastatur verwenden, das Scrollen in Bereichen mit überlaufendem Text zu ermöglichen.

### SVG

`role="region"` kann auf Bereiche eines {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelnen Abschnitten der SVG eine Beschreibung zu geben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}} Element
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Wegweiser-Rollen: Verwenden von ARIA: Rollen, Zuständen und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
