---
title: "ARIA: region Rolle"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die **`region`** Rolle wird verwendet, um Dokumentbereiche zu kennzeichnen, die der Autor als bedeutend erachtet. Es handelt sich um ein generisches Landmark, das zur Navigation dient, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Die `region` Rolle sollte für Inhaltsabschnitte reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich einfach zu diesem Abschnitt navigieren möchten und ihn in einer Zusammenfassung der Seite aufgeführt haben möchten. Eine Region-Rolle ist ein allgemeinerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht zutreffend durch eine der anderen Landmark-Rollen, wie etwa [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role), beschrieben werden kann.

Jedes Element mit einer `region` Rolle sollte ein Label enthalten, das den Zweck des Inhalts im Bereich beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut, das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Landmark-Rolle sollte sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt wird.

Die Verwendung des {{HTMLElement('section')}}-Elements zeigt automatisch an, dass ein Abschnitt die Rolle `region` hat, wenn ihm ein zugänglicher Name zugewiesen wird. Entwickler sollten immer das richtige semantische HTML-Element, in diesem Fall `<section>`, gegenüber der Verwendung von ARIA bevorzugen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oft ist der Wert des `aria-labelledby`-Attributs die ID des Elements, das verwendet wird, um den Abschnitt zu betiteln. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Barrierefreiheitshinweise

Verwenden Sie sie sparsam! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen, was das Verständnis der Gesamtstruktur der Seite erschweren kann.

Verwenden Sie die `region` Rolle nur, wenn kein anderes relevantes [Inhaltsstrukturierungselement](/de/docs/Web/HTML/Reference/Elements#content_sectioning) oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) anwendbar ist. Wenn es auf einer Seite mehrere Regionen gibt, kann es sinnvoll sein, die Gesamtstruktur der Seite neu zu bewerten.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('section')}}-Elements zeigt automatisch an, dass das Element die Rolle `region` hat. Wenn möglich, bevorzugen Sie die Verwendung des semantischen `<section>`-Elements anstelle der `region` Rolle.

### Landmarks beschriften

Wenn es mehr als eine `region` Landmark-Rolle in einem Dokument gibt, geben Sie jedem eine eindeutige Bezeichnung. Diese Bezeichnung ermöglicht es einem Benutzer von unterstützender Technologie, schnell den Zweck jedes Landmarks zu verstehen.

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

In diesem Beispiel wird die Beschriftung der Region durch das [`aria-labelledby` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) erzeugt.

### Scrollbare Inhaltsbereiche mit überlaufendem Text

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um den Screenreader-Benutzern mitzuteilen, dass es sich um eine allgemeine Region handelt. Dies wird getan, um Benutzern, die ausschließlich die Tastatur verwenden, zu ermöglichen, Bereiche mit überlaufendem Text zu scrollen.

### SVG

`role="region"` kann auf Bereiche von {{SVGElement('svg')}} deklariert werden, zusammen mit einem `aria-label`, um einzelne Abschnitte des SVG beschreiben zu können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}} Element
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmark-Rollen: ARIA verwenden: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
