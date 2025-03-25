---
title: "ARIA: region-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die **`region`**-Rolle wird verwendet, um Dokumentbereiche zu identifizieren, die der Autor als bedeutend erachtet. Es ist ein generisches Landmark, das zur Unterstützung der Navigation dient, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region`-Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle. Die `region`-Rolle sollte für Inhaltsbereiche reserviert werden, die so wichtig sind, dass Nutzer wahrscheinlich leicht zu diesem Bereich navigieren möchten und er in einer Zusammenfassung der Seite aufgelistet werden sollte. Eine Region-Rolle ist ein allgemeinerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht genau durch eine der anderen Landmark-Rollen beschrieben wird, wie [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Jedes Element mit einer `region`-Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region`-Landmark-Rolle sollte sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt wurde.

Die Verwendung des {{HTMLElement('section')}}-Elements kommuniziert automatisch, dass ein Abschnitt eine Rolle von `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element bevorzugen, in diesem Fall `<section>`, statt ARIA zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oftmals wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das zur Titulierung des Abschnitts verwendet wird. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

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

Sparsam verwenden! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere, übergreifende Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann Bildschirmleser beeinträchtigen, da es schwierig wird, das Gesamtlayout der Seite zu verstehen.

Verwenden Sie die `region`-Rolle nur, wenn kein anderes relevantes [Inhaltsstrukturierungselement](/de/docs/Web/HTML/Element#content_sectioning) oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) zutrifft. Wenn mehrere Regionen auf einer Seite existieren, könnte es sich lohnen, die gesamte Struktur der Seite neu zu überprüfen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}}-Elements kommuniziert automatisch, dass ein Abschnitt eine Rolle von `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Wenn möglich, bevorzugen Sie die Verwendung von {{HTMLElement('section')}}.

### Kennzeichnung von Landmarks

Wenn es mehr als eine `region`-Landmark im Dokument gibt, geben Sie jeder einen eindeutigen Namen. Dieser Name ermöglicht es einem Benutzer von unterstützenden Technologien, den Zweck jedes Landmarks schnell zu verstehen.

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

In diesem Beispiel wird das Label der Region durch das [`aria-labelledby`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) erzeugt.

### Scrollende Inhaltsbereiche mit Überlauftext

Wenn ein Inhaltsbereich mit `tabindex="0"` versehen ist, fügen Sie `role="region"` hinzu, um Bildschirmlesernutzern zu signalisieren, dass es sich um eine generische Region handelt. Dies ermöglicht es Tastaturbenutzern, Bereiche mit Überlauftext zu scrollen.

### SVG

`role="region"` kann in Bereichen von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte der SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}}-Element
- [region (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
