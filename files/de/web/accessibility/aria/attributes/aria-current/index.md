---
title: aria-current
slug: Web/Accessibility/ARIA/Attributes/aria-current
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Ein nicht-null `aria-current` Zustand auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Beschreibung

Wenn Sie eine Gruppe verwandter Elemente haben, wie beispielsweise mehrere Links in einem Breadcrumb oder Schritte in einem mehrstufigen Ablauf, bei dem ein Element in der Gruppe anders gestaltet ist als die anderen, um dem sehenden Benutzer anzuzeigen, dass dies das aktuelle Element innerhalb seiner Gruppe ist, sollte `aria-current` verwendet werden, um dem Nutzer von unterstützender Technologie mitzuteilen, was über das Styling angezeigt wurde.

In einer Breadcrumb-Liste, wenn ein Link innerhalb eines Satzes von Paginierungslinks gestaltet ist, um anzuzeigen, dass der Benutzer sich derzeit auf dieser Seite befindet, sollte `aria-current="page"` auf diesem Link gesetzt werden. In einem mehrstufigen Prozess mit einem Schrittindikator wie einem mehrseitigen Fragebogen oder einem mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schritt-Symbol visuell anders dargestellt wird, um zu zeigen, dass es der aktuelle Schritt ist, sollte der Container dieses Symbols `aria-current="step"` für Nutzer von unterstützender Technologie haben, die den visuellen Unterschied möglicherweise nicht "sehen" können.

Das `aria-current` Attribut zeigt an, dass das Element, auf dem es gesetzt ist, mit einem Wert ungleich `false`, das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt. Markieren Sie immer nur ein Element in einem Satz von Elementen als aktuell mit `aria-current`.

Das `aria-current` Attribut akzeptiert eine begrenzte Liste von [Werten](#werte) einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-null-String-Wert, der nicht in dieser Liste der aufgezählten Werte enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt, nicht der Standardwert `false`. Wenn das Attribut nicht vorhanden ist, ein leerer String ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, wird es dem Benutzer nicht angezeigt.

Wenn etwas ausgewählt statt aktuell ist, wie beispielsweise ein [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected), um das derzeit angezeigte Tabpanel anzuzeigen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) in [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).

## Beispiel

Das Breadcrumb für die "aktuelle Seite" sollte `aria-current="page"` gesetzt haben.

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
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten, wie der Link zum aktuellen Dokument in einem Breadcrumb.
- `step`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses, wie den aktuellen Schritt in einem aufgezählten mehrstufigen Checkout-Ablauf.
- `location`
  - : Repräsentiert den aktuellen Standort innerhalb einer Umgebung oder eines Kontextes, wie das Bild, das visuell hervorgehoben ist als das aktuelle Element eines Flussdiagramms.
- `date`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten, wie das aktuelle Datum innerhalb eines Kalenders.
- `time`
  - : Repräsentiert die aktuelle Zeit innerhalb eines Satzes von Zeiten, wie die aktuelle Zeit innerhalb eines Zeitplans.
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

Verwendbar in allen Rollen; außer für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), bei denen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
