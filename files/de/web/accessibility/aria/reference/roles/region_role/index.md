---
title: "ARIA: region role"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die **`region`**-Rolle wird verwendet, um Dokumentbereiche zu kennzeichnen, die der Autor für bedeutsam hält. Es ist ein generisches Landmark verfügbar, das bei der Navigation hilft, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- region content -->
</div>
```

## Beschreibung

Die `region`-Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) Rolle.
Die `region`-Rolle sollte für Inhaltsabschnitte reserviert sein, die so wichtig sind, dass Benutzer wahrscheinlich leicht zu diesem Abschnitt navigieren möchten und ihn in einer Zusammenfassung der Seite aufgeführt haben möchten. Eine Region-Rolle ist ein generischerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht genau durch eine der anderen Landmark-Rollen wie [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) beschrieben wird.

Jedes Element mit einer `region`-Rolle sollte ein Label enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

Der Inhalt der `region`-Landmark-Rolle sollte Sinn ergeben, wenn er vom Hauptinhalt des Dokuments getrennt wird.

Die Verwendung des {{HTMLElement('section')}}-Elements kommuniziert automatisch, dass ein Abschnitt eine `region`-Rolle hat, wenn ihm ein zugänglicher Name gegeben wird. Entwickler sollten immer das korrekte semantische HTML-Element, in diesem Fall `<section>`, der Verwendung von ARIA vorziehen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oft wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das zur Titelgebung des Abschnitts verwendet wird. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

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

Sparsam verwenden! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind darauf ausgelegt, sparsam eingesetzt zu werden, um größere Gesamtabschnitte des Dokuments zu kennzeichnen. Die Verwendung zu vieler Landmark-Rollen kann in Bildschirmlesern "Rauschen" erzeugen, was das Verständnis des Gesamtlayouts der Seite erschwert.

Verwenden Sie die `region`-Rolle nur, wenn kein anderes relevantes [Inhaltsabschnitts-](/de/docs/Web/HTML/Reference/Elements#content_sectioning) Element oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) zutrifft. Wenn auf einer Seite mehrere Regionen existieren, könnte es sinnvoll sein, die Gesamtstruktur der Seite erneut zu prüfen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('section')}}-Elements kommuniziert automatisch, dass ein Abschnitt eine `region`-Rolle hat, wenn ihm ein zugänglicher Name gegeben wird. Wo immer möglich, sollte die Verwendung von {{HTMLElement('section')}} bevorzugt werden.

### Kennzeichnung von Landmarks

Wenn in einem Dokument mehr als eine `region`-Landmark-Rolle vorhanden ist, geben Sie jedem eine eindeutige Kennzeichnung. Dieses Label ermöglicht einem Benutzer von unterstützender Technologie, den Zweck jeder Landmark schnell zu verstehen.

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

### Rollende Inhaltsbereiche mit Überlauftext

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um Benutzern von Bildschirmlesern mitzuteilen, dass dies eine generische Region ist. Dies ermöglicht es ausschließlich Tastaturnutzern, Regionen mit Überlauftext zu scrollen.

### SVG

`role="region"` kann auf Bereiche von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte des SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}}-Element
- [ARIA: `banner`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `main`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `contentinfo`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `complementary`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `navigation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Landmark-Rollen: Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques#landmark_roles)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
