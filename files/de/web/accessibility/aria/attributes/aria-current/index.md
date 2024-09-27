---
title: aria-current
slug: Web/Accessibility/ARIA/Attributes/aria-current
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Ein nicht-null `aria-current` Zustand auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Menge von verwandten Elementen repräsentiert.

## Beschreibung

Wenn Sie eine Gruppe verwandter Elemente haben, wie zum Beispiel mehrere Links in einem Breadcrumb oder Schritte in einem mehrstufigen Ablauf, mit einem Element in der Gruppe, das optisch anders als die anderen gestaltet ist, um dem sehenden Benutzer zu zeigen, dass dies das aktuelle Element innerhalb seiner Gruppe ist, sollte `aria-current` verwendet werden, um dem Nutzer von unterstützenden Technologien mitzuteilen, was durch das Styling angezeigt wurde.

In einer Breadcrumb-Liste, wenn ein Link innerhalb einer Reihe von Paginierungslinks so gestaltet ist, dass er anzeigt, dass der Benutzer sich derzeit auf dieser Seite befindet, sollte `aria-current="page"` auf diesen Link gesetzt werden. In einem mehrstufigen Prozess mit einem Schrittindikator, wie zum Beispiel einem mehrseitigen Fragebogen oder einem mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schritticon visuell abweicht, um zu repräsentieren, dass es der aktuelle Schritt ist, sollte der Container dieses Icons `aria-current="step"` für die Nutzer von unterstützenden Technologien haben, die die visuelle Abweichung möglicherweise nicht "sehen" können.

Das `aria-current` Attribut zeigt an, dass das Element, auf dem es gesetzt ist, zu einem anderen Wert als `false`, das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente repräsentiert. Markieren Sie nur ein Element in einer Elementmenge als aktuell mit `aria-current`.

Das `aria-current` Attribut akzeptiert eine begrenzte Liste von [Werten](#werte) einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-null Zeichenkettenwert, der nicht in dieser Liste von aufgezählten Werten enthalten ist, wird behandelt, als ob `aria-current="true"` gesetzt wäre, nicht dem Standardwert `false`. Wenn das Attribut nicht vorhanden ist, eine leere Zeichenkette ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, wird es nicht benutzerseitig exponiert.

Wenn etwas ausgewählt statt aktuell ist, wie z.B. ein [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einem [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected), um das derzeit angezeigte Tabpanel anzuzeigen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) in [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).

## Beispiel

Das Breadcrumb für die "aktuelle Seite" sollte `aria-current="page"` darauf gesetzt haben.

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Web technology for developers</a>
    </li>
    <li>
      <a href="../../../../">Accessibility</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA States and Properties</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA: `aria-current` attribute</a>
    </li>
  </ol>
</nav>
```

Wenn das Element, das die aktuelle Seite im Breadcrumb repräsentiert, kein Link war, ist `aria-current` optional.

## Werte

- `page`
  - : Repräsentiert die aktuelle Seite innerhalb einer Menge von Seiten, wie z.B. den Link zum aktuellen Dokument in einem Breadcrumb.
- `step`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses, wie zum Beispiel den aktuellen Schritt in einem aufgelisteten mehrstufigen Checkout-Ablauf.
- `location`
  - : Repräsentiert den aktuellen Standort innerhalb einer Umgebung oder eines Kontextes, wie zum Beispiel das Bild, das visuell hervorgehoben ist als der aktuelle Bestandteil eines Flussdiagramms.
- `date`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten, wie das aktuelle Datum innerhalb eines Kalenders.
- `time`
  - : Repräsentiert die aktuelle Zeit innerhalb einer Reihe von Zeiten, wie die aktuelle Zeit innerhalb eines Fahrplans.
- `true`
  - : Repräsentiert das aktuelle Element innerhalb einer Menge.
- `false` (Standard)
  - : Repräsentiert nicht das aktuelle Element innerhalb einer Menge.

## Zugehörige Schnittstellen

- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-current` Attributs wider.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-current` Attributs wider.

## Zugehörige Rollen

Verwendbar in allen Rollen; außer für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), wo [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
