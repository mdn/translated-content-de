---
title: "ARIA: region Rolle"
slug: Web/Accessibility/ARIA/Roles/region_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`region`** Rolle wird verwendet, um Dokumentbereiche zu identifizieren, die der Autor als bedeutend erachtet. Es handelt sich um ein generisches Merkmal zur Unterstützung der Navigation, wenn keine der anderen Landmark-Rollen geeignet ist.

```html
<div role="region" aria-label="Example">
  <!-- Region-Inhalt -->
</div>
```

## Beschreibung

Die `region` Rolle ist eine [ARIA-Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) Rolle.
Die `region` Rolle sollte für Abschnitte von Inhalten reserviert werden, die so bedeutend sind, dass Benutzer wahrscheinlich leicht zu diesem Abschnitt navigieren möchten und dieser in einer Zusammenfassung der Seite aufgelistet wird. Eine Region-Rolle ist ein allgemeinerer Begriff und sollte nur verwendet werden, wenn der zu identifizierende Abschnitt nicht genau durch eine der anderen Landmark-Rollen beschrieben werden kann, wie z.B. [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role), [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role), [`complementary`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) oder [`navigation`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role).

Jedes Element mit einer `region` Rolle sollte ein Etikett enthalten, das den Zweck des Inhalts in der Region beschreibt, vorzugsweise mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), das auf eine sichtbare Überschrift verweist. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

Der Inhalt der `region` Landmark-Rolle sollte sinnvoll sein, wenn er vom Hauptinhalt des Dokuments getrennt ist.

Die Verwendung des {{HTMLElement('section')}} Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `region` hat, wenn er einen zugänglichen Namen erhält. Entwickler sollten immer das korrekte semantische HTML-Element verwenden, in diesem Fall `<section>`, anstatt ARIA zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Verwenden Sie dieses Attribut, um die Region zu kennzeichnen. Oft wird der Wert des `aria-labelledby` Attributs die ID des Elements sein, das den Abschnitt betitelt. Wenn keine sichtbare geeignete Überschrift vorhanden ist, sollte `aria-label` verwendet werden.

## Beispiele

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    Dieses Überschriftselement's `id` Attribut hilft dieser Region, einen zugänglichen Namen zu erhalten
  </h2>
  <!-- Region-Inhalt -->
</div>
```

## Barrierefreiheitsbedenken

Sparsam anwenden! [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dafür gedacht, sparsam eingesetzt zu werden, um größere übergreifende Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Geräusche" in Bildschirmleseprogrammen erzeugen, was es schwierig macht, das Layout der Seite insgesamt zu verstehen.

Verwenden Sie die `region` Rolle nur, wenn kein anderer relevanter [Inhaltsstrukturierungs](/de/docs/Web/HTML/Element#content_sectioning) Element oder [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) zutrifft. Wenn mehrere Regionen auf einer Seite existieren, könnte es sich lohnen, die gesamte Struktur der Seite zu überdenken.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('section')}} Elements wird automatisch kommunizieren, dass ein Abschnitt eine Rolle von `region` hat, wenn er einen zugänglichen Namen erhält. Wenn möglich, bevorzugen Sie die Verwendung von {{HTMLElement('section')}}.

### Kennzeichnung von Merkmalen

Wenn in einem Dokument mehr als eine `region` Landmark Rolle vorhanden ist, geben Sie jeder einen eindeutigen Namen. Dieses Etikett ermöglicht es einem Benutzer assistiver Technologien, schnell den Zweck jedes Merkmals zu verstehen.

```html
<div role="region" aria-labelledby="use-discretion">
  <h3 id="use-discretion">Bitte verwenden Sie die `region` Rolle mit Bedacht</h3>
  <!-- Inhalt -->
</div>

…

<div role="region" aria-labelledby="please-reconsider">
  <h3 id="please-reconsider">Bitte überdenken Sie Ihre Dokumentenstruktur</h3>
  <!-- Inhalt -->
</div>
```

In diesem Beispiel wird das Etikett der Region durch das [`aria-labelledby` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) erzeugt.

### Scrollbare Inhaltsbereiche mit Überlaufinhalten

Wenn es einen Inhaltsbereich mit `tabindex="0"` gibt, fügen Sie `role="region"` hinzu, um den Benutzern von Bildschirmlesetools anzuzeigen, dass es sich um eine generische Region handelt. Dies ermöglicht es Benutzern, die nur die Tastatur verwenden, in Bereichen mit Überlauftext zu scrollen.

### SVG

`role="region"` kann in Bereichen von {{SVGElement('svg')}} zusammen mit einem `aria-label` deklariert werden, um einzelne Abschnitte von SVG zu beschreiben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('section')}} Element
- [region (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#region)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [Landmark-Rollen: Verwenden von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
