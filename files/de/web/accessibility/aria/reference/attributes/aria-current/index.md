---
title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein nicht-leerer `aria-current`-Zustand auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Beschreibung

Wenn Sie eine Gruppe verwandter Elemente haben, wie z.B. mehrere Links in einem Breadcrumb oder Schritte in einem mehrstufigen Ablauf, wobei ein Element in der Gruppe anders als die anderen gestaltet ist, um dem sehenden Benutzer zu signalisieren, dass dies das aktuelle Element innerhalb seiner Gruppe ist, sollte `aria-current` verwendet werden, um dem Benutzer von unterstützender Technologie mitzuteilen, was durch die Gestaltung angezeigt wurde.

In einer Breadcrumb-Liste, wenn ein Link innerhalb eines Sets von Paginierungslinks so gestaltet ist, dass der Benutzer auf dieser Seite ist, sollte `aria-current="page"` auf diesen Link gesetzt werden. In einem auf mehreren Schritten basierenden Prozess mit einem Schrittanzeiger, wie bei einer Umfrage über mehrere Seiten oder einem mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schritticon visuell anders ist, um zu zeigen, dass es sich um den aktuellen Schritt handelt, sollte der Container dieses Icons `aria-current="step"` für Benutzer unterstützender Technologien haben, die den visuellen Unterschied möglicherweise nicht "sehen" können.

Das `aria-current`-Attribut zeigt an, dass das Element, auf dem es gesetzt ist, mit einem Wert ungleich `false` das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt. Markieren Sie nur ein Element in einer Gruppe von Elementen als aktuell mit `aria-current`.

Das `aria-current`-Attribut akzeptiert eine begrenzte Liste von [Werten](#werte), einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-leere Zeichenfolgenwert, der sich nicht in dieser Liste von aufgezählten Werten befindet, wird behandelt, als wäre `aria-current="true"` gesetzt, und nicht als der Standardwert `false`. Wenn das Attribut nicht vorhanden ist, eine leere Zeichenfolge ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, wird es dem Benutzer nicht angezeigt.

Wenn etwas ausgewählt statt aktuell ist, wie z.B. ein [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), um das aktuell angezeigte Tabpanel zu kennzeichnen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) in [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

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

Wenn das Element, das die aktuelle Seite im Breadcrumb darstellt, kein Link wäre, ist `aria-current` optional.

## Werte

- `page`
  - : Stellt die aktuelle Seite innerhalb eines Satzes von Seiten dar, wie z.B. den Link zum aktuellen Dokument in einem Breadcrumb.
- `step`
  - : Stellt den aktuellen Schritt innerhalb eines Prozesses dar, wie z.B. den aktuellen Schritt in einem aufgezählten mehrstufigen Checkout-Ablauf.
- `location`
  - : Stellt den aktuellen Ort innerhalb einer Umgebung oder eines Kontexts dar, wie z.B. das Bild, das als aktueller Bestandteil eines Flussdiagramms visuell hervorgehoben ist.
- `date`
  - : Stellt das aktuelle Datum innerhalb einer Sammlung von Daten dar, wie z.B. das aktuelle Datum innerhalb eines Kalenders.
- `time`
  - : Stellt die aktuelle Zeit innerhalb eines Satzes von Zeiten dar, wie z.B. die aktuelle Zeit innerhalb eines Zeitplans.
- `true`
  - : Stellt das aktuelle Element innerhalb eines Satzes dar.
- `false` (Standard)
  - : Stellt nicht das aktuelle Element innerhalb eines Satzes dar.

## Zugehörige Schnittstellen

- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-current`-Attributs wider.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des `aria-current`-Attributs wider.

## Zugehörige Rollen

Verwendbar in allen Rollen; außer für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), wo [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
