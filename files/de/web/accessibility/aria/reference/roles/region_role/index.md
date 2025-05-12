---
title: "ARIA: region Rolle"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die **`region`** Rolle wird verwendet, um Dokumentbereiche zu identifizieren, die der Autor als signifikant erachtet. Es ist ein generisches Landmark, das zur Unterstützung der Navigation zur Verfügung steht, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Die `region` Rolle sollte für Inhaltsabschnitte reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich einfach zu diesem Abschnitt navigieren möchten und ihn in einer Zusammenfassung der Seite aufgelistet haben wollen. Eine Region-Rolle ist ein allgemeinerer Begriff und sollte nur verwendet werden, wenn der Abschnitt, der identifiziert werden muss, nicht genau von einer der anderen Landmark-Rollen beschrieben werden kann, wie [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit einer `region` Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das auf einen sichtbaren Header verweist. Wenn kein geeigneter sichtbarer Header vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Landmark Rolle sollte auch dann Sinn ergeben, wenn er vom Hauptinhalt des Dokuments getrennt ist.

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element verwenden, in diesem Fall `<section>`, statt ARIA zu verwenden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu benennen. Oft ist der Wert des `aria-labelledby` Attributs die ID des Elements, das verwendet wird, um den Abschnitt zu betiteln. Wenn kein sichtbarer geeigneter Header vorhanden ist, sollte `aria-label` verwendet werden.

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

Verwenden Sie es sparsam! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Geräusche" in Screenreadern schaffen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

Verwenden Sie die `region` Rolle nur, wenn kein anderes relevantes [Inhaltsstrukturierungs-](/de/docs/Web/HTML/Reference/Elements#content_sectioning) Element oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) anwendbar ist. Wenn mehrere Regionen auf einer Seite existieren, kann es sich lohnen, die Gesamtstruktur der Seite erneut zu überprüfen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Wenn möglich, bevorzugen Sie die Verwendung von {{HTMLElement('section')}}.

### Beschriftung von Landmarks

Wenn es mehr als eine `region` Landmark-Rolle in einem Dokument gibt, geben Sie jedem eine eindeutige Beschriftung. Diese Beschriftung ermöglicht es einem Benutzer von unterstützender Technologie, den Zweck jeder Landmark schnell zu verstehen.

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

### Scrollbare Inhaltsbereiche mit Überfilltext

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Benutzern von Screenreadern mitzuteilen, dass es sich um eine generische Region handelt. Dies wird getan, um Tastaturbenutzern zu ermöglichen, Regionen mit Überflusstext zu scrollen.

### SVG

`role="region"` kann in Bereichen von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte der SVG zu beschreiben.

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
- [Landmark-Rollen: ARIA verwenden: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
