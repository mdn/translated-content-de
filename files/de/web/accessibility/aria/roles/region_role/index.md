---
title: "ARIA: region Rolle"
slug: Web/Accessibility/ARIA/Roles/region_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`region`**-Rolle wird verwendet, um Dokumentbereiche zu identifizieren, die der Autor als signifikant erachtet. Sie ist ein generisches Landmark zur Unterstützung der Navigation, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region`-Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) Rolle. Die `region`-Rolle sollte für Inhaltsabschnitte reserviert werden, die so wichtig sind, dass Benutzer wahrscheinlich leicht zu dem Abschnitt navigieren möchten und er in einer Zusammenfassung der Seite aufgelistet werden sollte. Eine region-Rolle ist ein generischerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht zutreffend durch eine der anderen Landmark-Rollen beschrieben wird, wie z. B. [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role).

Jedes Element mit einer `region`-Rolle sollte ein Etikett enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine geeignete sichtbare Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

Der Inhalt der `region`-Landmark-Rolle sollte auch außerhalb des Hauptinhalts des Dokuments sinnvoll sein.

Die Verwendung des {{HTMLElement('section')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer bevorzugt das korrekte semantische HTML-Element verwenden, in diesem Fall `<section>`, anstatt ARIA zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Häufig wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das den Abschnitt betitelt. Wenn keine geeignete sichtbare Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

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

Sparsam verwenden! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam eingesetzt werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Rauschen" bei Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

Verwenden Sie die `region`-Rolle nur, wenn kein anderer relevanter [Inhaltsabschnitt](/de/docs/Web/HTML/Element#content_sectioning)-Element oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) zutrifft. Wenn mehrere Regionen auf einer Seite existieren, könnte es sich lohnen, die Gesamtstruktur der Seite erneut zu überprüfen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('section')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `region` hat, wenn ihm ein zugänglicher Name gegeben wird. Wenn irgendwie möglich, sollten Sie {{HTMLElement('section')}} stattdessen verwenden.

### Landmarks kennzeichnen

Wenn es mehr als eine `region`-Landmark-Rolle in einem Dokument gibt, geben Sie jedem eine eindeutige Bezeichnung. Diese Bezeichnung wird einem Benutzer von unterstützender Technologie ermöglichen, schnell den Zweck jedes Landmarks zu verstehen.

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

In diesem Beispiel wird die Bezeichnung der Region durch das [`aria-labelledby`-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) generiert.

### Scrollbare Inhaltsbereiche mit überlaufendem Text

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Benutzern von Screenreadern zu vermitteln, dass es sich um eine generische Region handelt. Dies wird durchgeführt, um es Benutzern, die nur die Tastatur verwenden, zu ermöglichen, Bereiche mit überlaufendem Text zu scrollen.

### SVG

`role="region"` kann auf Bereiche von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte des SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}}-Element
- [region (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
