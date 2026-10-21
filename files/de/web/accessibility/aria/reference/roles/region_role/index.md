---
title: "ARIA: region-Rolle"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: 05c1aed375bab88f322b15319e45fb326e4a341c
---

Die **`region`**-Rolle kennzeichnet Bereiche eines Dokuments, die der Autor für wichtig hält. Sie ist eine allgemeine Landmarke, die die Navigation erleichtert, wenn keine der anderen Landmarkenrollen passt.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region`-Rolle ist eine [ARIA-Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).
Sie sollte Abschnitten vorbehalten bleiben, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu ihnen navigieren und sie in einer Seitenübersicht sehen möchten. Die `region`-Rolle ist allgemeiner als andere Landmarkenrollen und sollte nur verwendet werden, wenn keine davon den betreffenden Abschnitt treffend beschreibt, beispielsweise [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit der `region`-Rolle sollte eine Beschriftung haben, die den Zweck des enthaltenen Inhalts beschreibt. Verwenden Sie dafür vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) mit einem Verweis auf eine sichtbare Überschrift. Ist keine passende sichtbare Überschrift vorhanden, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

Der Inhalt einer `region`-Landmarke sollte auch dann verständlich sein, wenn er vom Hauptinhalt des Dokuments getrennt betrachtet wird.

Das Element {{HTMLElement('section')}} vermittelt automatisch die Rolle `region`, wenn es einen zugänglichen Namen hat. Entwickler sollten stets das passende semantische HTML-Element – in diesem Fall `<section>` – gegenüber ARIA bevorzugen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie eines dieser Attribute, um die Region zu beschriften. Häufig ist der Wert des Attributs `aria-labelledby` die id des Elements, das als Überschrift für den Abschnitt dient. Ist keine passende sichtbare Überschrift vorhanden, verwenden Sie `aria-label`.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    This heading's `id` attribute helps this region have an accessible name
  </h2>
  <!-- region content -->
</div>
```

## Bedenken hinsichtlich der Barrierefreiheit

Sparsam verwenden! [Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen nur für größere, übergeordnete Abschnitte eines Dokuments eingesetzt werden. Zu viele Landmarkenrollen können in Screenreadern „Rauschen“ erzeugen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

Verwenden Sie die `region`-Rolle nur, wenn kein anderes passendes [Element zur Inhaltsgliederung](/de/docs/Web/HTML/Reference/Elements#content_sectioning) und keine andere passende [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) infrage kommt. Gibt es mehrere Regionen auf einer Seite, kann es sinnvoll sein, den Gesamtaufbau der Seite noch einmal zu überprüfen.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Das Element {{HTMLElement('section')}} vermittelt automatisch, dass es die Rolle `region` hat. Verwenden Sie nach Möglichkeit das semantische Element `<section>` anstelle der `region`-Rolle.

### Landmarken beschriften

Wenn ein Dokument mehr als eine `region`-Landmarke enthält, geben Sie jeder eine eindeutige Beschriftung. So können Benutzer assistiver Technologien den Zweck jeder Landmarke schnell erkennen.

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

Ein scrollbarer Bereich benötigt möglicherweise `tabindex="0"`, damit Benutzer, die ausschließlich die Tastatur verwenden, ihn fokussieren und scrollen können. Dadurch wird der Bereich allein noch nicht zu einer Landmarke. Verwenden Sie `role="region"` nur für einen ausreichend wichtigen Abschnitt der Seite, den Benutzer über die Landmarkennavigation finden können sollten. Geben Sie jeder solchen Region einen aussagekräftigen, eindeutigen zugänglichen Namen, beispielsweise mit `aria-labelledby`. Informationen zu gewöhnlichen scrollbaren Inhalten, die keine Landmarke erfordern, finden Sie unter der [`group`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role#scrollable_content_areas).

### SVG

`role="region"` kann zusammen mit einem `aria-label` für Bereiche eines {{SVGElement('svg')}} angegeben werden, damit einzelne Abschnitte des SVG beschrieben werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('section')}}
- [ARIA: `banner`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmarkenrollen: ARIA verwenden: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
