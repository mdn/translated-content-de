---
title: "ARIA: Rolle region"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle **`region`** kennzeichnet Dokumentbereiche, die der Autor als wichtig erachtet. Sie ist eine allgemeine Landmark-Rolle, die die Navigation erleichtert, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die Rolle `region` ist eine [ARIA-Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).
Sie sollte Inhaltsabschnitten vorbehalten bleiben, die so wichtig sind, dass Benutzer sie wahrscheinlich leicht aufrufen und in einer Übersicht der Seite finden möchten. `region` ist eine allgemeine Rolle und sollte nur verwendet werden, wenn keine der anderen Landmark-Rollen den betreffenden Abschnitt zutreffend beschreibt, etwa [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit der Rolle `region` sollte eine Beschriftung haben, die den Zweck seines Inhalts beschreibt. Verwenden Sie dafür vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) mit einem Verweis auf eine sichtbare Überschrift. Ist keine geeignete sichtbare Überschrift vorhanden, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt einer `region` sollte auch dann verständlich sein, wenn er vom Hauptinhalt des Dokuments getrennt betrachtet wird.

Das Element {{HTMLElement('section')}} vermittelt automatisch die Rolle `region`, wenn es einen zugänglichen Namen hat. Entwickler sollten stets das passende semantische HTML-Element verwenden – in diesem Fall `<section>` – statt ARIA einzusetzen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie eines dieser Attribute, um die Region zu beschriften. Häufig enthält `aria-labelledby` die id des Elements, das als Überschrift des Abschnitts dient. Ist keine geeignete sichtbare Überschrift vorhanden, sollte `aria-label` verwendet werden.

## Hinweise zur Barrierefreiheit

Verwenden Sie Landmark-Rollen sparsam! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen größere übergeordnete Abschnitte eines Dokuments kennzeichnen. Zu viele Landmark-Rollen können für Screenreader „Rauschen“ erzeugen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

Verwenden Sie die Rolle `region` nur, wenn kein anderes passendes [Element zur Gliederung von Inhalten](/de/docs/Web/HTML/Reference/Elements#content_sectioning) und keine andere passende [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) infrage kommt. Wenn eine Seite mehrere Regionen enthält, lohnt es sich möglicherweise, ihre Gesamtstruktur erneut zu prüfen.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('section')}} vermittelt automatisch die Rolle `region`, wenn es einen zugänglichen Namen hat. Verwenden Sie nach Möglichkeit das semantische Element `<section>` statt der Rolle `region`.

### Landmarks beschriften

Wenn ein Dokument mehr als eine Landmark mit der Rolle `region` enthält, geben Sie jeder eine eindeutige Beschriftung. So können Benutzer assistiver Technologien den Zweck jeder Landmark schnell erkennen.

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

In diesem Beispiel wird die Beschriftung der Region durch das [Attribut `aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) erzeugt.

### Scrollbare Inhaltsbereiche mit überlaufendem Text

Ein scrollbarer Bereich benötigt möglicherweise `tabindex="0"`, damit Benutzer, die nur die Tastatur verwenden, ihn fokussieren und scrollen können. Dadurch allein wird der Bereich jedoch nicht zu einer Landmark. Verwenden Sie `role="region"` nur für einen ausreichend wichtigen Seitenabschnitt, den Benutzer über die Landmark-Navigation finden können sollen. Geben Sie jeder solchen Region einen beschreibenden, eindeutigen zugänglichen Namen, beispielsweise mit `aria-labelledby`. Informationen zu gewöhnlichen scrollbaren Inhalten, die keine Landmark benötigen, finden Sie unter [der Rolle `group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role#scrollable_content_areas).

### SVG

`role="region"` kann zusammen mit `aria-label` für Bereiche eines {{SVGElement('svg')}} angegeben werden, damit einzelne Abschnitte des SVG beschrieben werden können.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('section')}}
- [ARIA: Rolle `banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: Rolle `main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: Rolle `contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: Rolle `complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: Rolle `navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmark-Rollen: ARIA verwenden – Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
