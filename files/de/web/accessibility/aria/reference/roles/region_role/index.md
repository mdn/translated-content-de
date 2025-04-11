---
title: "ARIA: region role"
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die **`region`**-Rolle wird verwendet, um Dokumentbereiche zu kennzeichnen, die der Autor als bedeutend erachtet. Es ist ein generisches Landmark verfügbar, um bei der Navigation zu helfen, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region`-Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)-Rolle. Die `region`-Rolle sollte für Inhaltsabschnitte reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich leicht zu diesem Abschnitt navigieren möchten und ihn in einer Zusammenfassung der Seite aufgelistet haben möchten. Eine `region`-Rolle ist ein generischerer Begriff und sollte nur verwendet werden, wenn der Abschnitt, der identifiziert werden muss, nicht genau durch eine der anderen Landmark-Rollen beschrieben werden kann, wie zum Beispiel [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit einer `region`-Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region`-Landmark-Rolle sollte verständlich sein, wenn er vom Hauptinhalt des Dokuments getrennt wird.

Die Verwendung des {{HTMLElement('section')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element, in diesem Fall `<section>`, gegenüber der Verwendung von ARIA bevorzugen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oftmals wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das den Abschnitt betitelt. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

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

Verwenden Sie es sparsam! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu bestimmt, sparsam verwendet zu werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern "Rauschen" erzeugen, was es schwierig macht, das gesamte Layout der Seite zu verstehen.

Verwenden Sie die `region`-Rolle nur, wenn kein anderes relevantes [Inhalts-Sektionierungselement](/de/docs/Web/HTML/Reference/Elements#content_sectioning) oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) zutrifft. Wenn mehrere Regionen auf einer Seite existieren, kann es sich lohnen, die gesamte Struktur der Seite zu überdenken.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Wenn möglich, bevorzugen Sie die Verwendung von {{HTMLElement('section')}}.

### Markieren von Landmarks

Wenn es mehr als eine `region`-Landmark-Rolle in einem Dokument gibt, geben Sie für jede eine eindeutige Bezeichnung an. Dieses Label ermöglicht es einem Benutzer der Assistenztechnologie, den Zweck jedes Landmarks schnell zu verstehen.

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

In diesem Beispiel wird das Label der Region durch das [`aria-labelledby`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) generiert.

### Scrollende Inhaltsbereiche mit überlaufendem Text

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Screenreader-Nutzern zu vermitteln, dass es sich um eine generische Region handelt. Dies geschieht, um Benutzern, die nur die Tastatur verwenden, das Scrollen von Regionen mit überlaufendem Text zu ermöglichen.

### SVG

`role="region"` kann in Bereichen von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte des SVGs zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}}-Element
- [region (Rolle): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmark-Rollen: Verwenden von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
