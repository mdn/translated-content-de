---
title: "ARIA: aria-current Attribut"
short-title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Ein nicht-null `aria-current` Zustand auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Beschreibung

Wenn Sie eine Gruppe verwandter Elemente haben, wie zum Beispiel mehrere Links in einem "Breadcrumb" oder Schritte in einem mehrstufigen Ablauf, bei denen ein Element in der Gruppe anders als die anderen gestaltet ist, um dem sehenden Benutzer anzuzeigen, dass dies das aktuelle Element in seiner Gruppe ist, sollte `aria-current` verwendet werden, um dem Nutzer von unterstützender Technologie mitzuteilen, was durch das Styling angezeigt wurde.

In einer Breadcrumb-Liste, wenn ein Link innerhalb einer Gruppe von Paginierungs-Links so gestaltet ist, dass angezeigt wird, dass der Benutzer sich aktuell auf dieser Seite befindet, sollte `aria-current="page"` auf diesem Link gesetzt werden. In einem mehrstufigen Prozess mit einem Schritt-Indikator wie einem mehrseitigen Fragebogen oder einem mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schritt-Symbol visuell anders ist, um zu zeigen, dass es der aktuelle Schritt ist, sollte der Container dieses Symbols `aria-current="step"` für Benutzer von unterstützender Technologie haben, die möglicherweise den visuellen Unterschied nicht "sehen" können.

Das `aria-current` Attribut zeigt an, dass das Element, auf dem es gesetzt ist, auf einen Wert ungleich `false`, das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt. Markieren Sie nur ein Element in einer Gruppe von Elementen als aktuell mit `aria-current`.

Das `aria-current` Attribut akzeptiert eine begrenzte Liste von [Werten](#werte) wie `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-null Zeichenkettenwert, der nicht in dieser Liste von enumerierten Werten enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt, nicht der Standardwert `false`. Wenn das Attribut nicht vorhanden ist, ein leerer String ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, wird es dem Benutzer nicht angezeigt.

Wenn etwas ausgewählt statt aktuell ist, wie ein [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), um das aktuell angezeigte `tabpanel` anzuzeigen.

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

Wenn das Element, das die aktuelle Seite im Breadcrumb darstellt, kein Link war, ist `aria-current` optional.

## Werte

- `page`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten, wie den Link zum aktuellen Dokument in einem Breadcrumb.
- `step`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses, wie den aktuellen Schritt in einem enumerierten mehrstufigen Checkout-Ablauf.
- `location`
  - : Repräsentiert den aktuellen Standort innerhalb einer Umgebung oder eines Kontexts, wie das Bild, das visuell hervorgehoben als aktuelles Element eines Flussdiagramms ist.
- `date`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten, wie das aktuelle Datum in einem Kalender.
- `time`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb eines Satzes von Zeiten, wie die aktuelle Zeit innerhalb eines Zeitplans.
- `true`
  - : Repräsentiert das aktuelle Element innerhalb eines Satzes.
- `false` (Standard)
  - : Repräsentiert nicht das aktuelle Element innerhalb eines Satzes.

## Zugehörige Schnittstellen

- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-current` Attributs wider.
- [`ElementInternals.ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent)
  - : Die [`ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-current` Attributs wider.

## Zugehörige Rollen

Anwendbar in allen Rollen; außer für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), wo [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)
