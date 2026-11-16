---
title: "ARIA: Attribut aria-current"
short-title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Ein nicht auf `null` gesetzter Zustand von `aria-current` an einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Gruppe zusammengehöriger Elemente darstellt.

## Beschreibung

Wenn Sie eine Gruppe zusammengehöriger Elemente haben, beispielsweise mehrere Links in einer Breadcrumb-Navigation oder Schritte in einem mehrstufigen Ablauf, und ein Element der Gruppe anders gestaltet ist als die übrigen, um sehenden Nutzern zu zeigen, dass es das aktuelle Element der Gruppe ist, sollten Sie `aria-current` verwenden. So erfahren auch Nutzer assistiver Technologien, was durch die Gestaltung angezeigt wird.

Wenn in einer Breadcrumb-Liste ein Link aus einer Gruppe von Seitennavigationslinks so gestaltet ist, dass er die aktuell angezeigte Seite kennzeichnet, sollte für diesen Link `aria-current="page"` gesetzt werden. Wenn bei einem mehrstufigen Prozess mit Schrittanzeige – etwa einer mehrseitigen Umfrage oder einem mehrstufigen Bestell- oder Registrierungsprozess – das Symbol des aktuellen Schritts visuell hervorgehoben ist, sollte sein umschließendes Element `aria-current="step"` erhalten. So können auch Nutzer assistiver Technologien den aktuellen Schritt erkennen, wenn sie den visuellen Unterschied nicht wahrnehmen können.

Das Attribut `aria-current` zeigt an, dass das Element, für das es auf einen anderen Wert als `false` gesetzt ist, das aktuelle Element innerhalb eines Containers oder einer Gruppe zusammengehöriger Elemente darstellt. Kennzeichnen Sie mit `aria-current` nur ein Element einer Gruppe als aktuell.

Das Attribut `aria-current` akzeptiert eine begrenzte Liste von [Werten](#werte): `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht auf `null` gesetzte Zeichenfolgenwert außerhalb dieser Liste wird so behandelt, als wäre `aria-current="true"` gesetzt, und nicht wie der Standardwert `false`. Wenn das Attribut fehlt, eine leere Zeichenfolge enthält, ohne Wert angegeben ist oder auf `aria-current="false"` gesetzt ist, wird es Nutzern nicht angezeigt.

Wenn etwas ausgewählt und nicht aktuell ist, beispielsweise ein [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), um das aktuell angezeigte Tabpanel zu kennzeichnen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) bei [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Werte

- `page`
  - : Kennzeichnet die aktuelle Seite innerhalb einer Gruppe von Seiten, beispielsweise den Link zum aktuellen Dokument in einer Breadcrumb-Navigation.
- `step`
  - : Kennzeichnet den aktuellen Schritt innerhalb eines Prozesses, beispielsweise den aktuellen Schritt eines mehrstufigen Bestellvorgangs.
- `location`
  - : Kennzeichnet die aktuelle Position innerhalb einer Umgebung oder eines Kontexts, beispielsweise das Bild, das als aktuelle Komponente eines Flussdiagramms visuell hervorgehoben ist.
- `date`
  - : Kennzeichnet das aktuelle Datum innerhalb einer Sammlung von Datumsangaben, beispielsweise das aktuelle Datum in einem Kalender.
- `time`
  - : Kennzeichnet die aktuelle Uhrzeit innerhalb einer Gruppe von Uhrzeiten, beispielsweise die aktuelle Uhrzeit in einem Zeitplan.
- `true`
  - : Kennzeichnet das aktuelle Element innerhalb einer Gruppe.
- `false` (Standardwert)
  - : Kennzeichnet nicht das aktuelle Element innerhalb einer Gruppe.

## Zugehörige Schnittstellen

- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Die Eigenschaft [`ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-current` wider.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Die Eigenschaft [`ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-current` wider.

## Zugehörige Rollen

In allen Rollen verwendbar, außer bei Elementen mit den Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), für die [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) verwendet werden sollte.

## Beispiel

Für den Breadcrumb-Link zur „aktuellen Seite“ sollte `aria-current="page"` gesetzt werden.

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

Wenn das Element, das die aktuelle Seite in der Breadcrumb-Navigation darstellt, kein Link ist, ist `aria-current` optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)
