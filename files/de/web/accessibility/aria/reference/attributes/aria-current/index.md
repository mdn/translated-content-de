---
title: "ARIA: aria-current Attribut"
short-title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein nicht-nullwertiger `aria-current` Status auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente repräsentiert.

## Beschreibung

Wenn Sie eine Gruppe von verwandten Elementen haben, wie zum Beispiel mehrere Links in einer Brotkrümelnavigation oder Schritte in einem mehrstufigen Prozess, wobei ein Element in der Gruppe visuell anders gestaltet ist als die anderen, um dem sehenden Benutzer zu zeigen, dass dies das aktuelle Element innerhalb seiner Gruppe ist, sollte `aria-current` verwendet werden, um dem Benutzer der unterstützenden Technologie mitzuteilen, was durch die Gestaltung angezeigt wurde.

In einer Brotkrümelliste, wenn ein Link innerhalb eines Satzes von Paginierungslinks gestaltet ist, um anzuzeigen, dass der Benutzer sich derzeit auf dieser Seite befindet, sollte `aria-current="page"` auf diesem Link gesetzt werden. In einem mehrstufigen Prozess mit einem Schrittindikator, wie bei einer Umfrage über mehrere Seiten oder einem mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schrittikon visuell anders ist, um darzustellen, dass es der aktuelle Schritt ist, sollte der Container dieses Icons `aria-current="step"` haben, um Benutzer von unterstützenden Technologien, die den visuellen Unterschied nicht "sehen" können, zu informieren.

Das `aria-current` Attribut zeigt an, dass das Element, auf dem es gesetzt ist, mit einem Wert ungleich `false`, das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente darstellt. Es sollte nur ein Element in einem Satz von Elementen mit `aria-current` als aktuell markiert werden.

Das `aria-current` Attribut akzeptiert eine begrenzte Liste von [Werten](#werte), einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-nullwertige Zeichenfolgenwert, der nicht in dieser Liste von aufgezählten Werten enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt, nicht der Standardwert `false`. Wenn das Attribut nicht vorhanden ist, ein leerer String ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, wird es dem Benutzer nicht angezeigt.

Wenn etwas ausgewählt statt aktuell ist, wie ein [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), um das aktuell angezeigte Tabpanel anzuzeigen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) in [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Beispiel

Das Brotkrümel für die "aktuelle Seite" sollte `aria-current="page"` gesetzt haben.

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

Wenn das Element, das die aktuelle Seite im Brotkrümel darstellt, kein Link war, ist `aria-current` optional.

## Werte

- `page`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten, wie der Link zum aktuellen Dokument in einem Brotkrümel.
- `step`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses, wie den aktuellen Schritt in einem aufgezählten mehrstufigen Checkout-Verlauf.
- `location`
  - : Repräsentiert den aktuellen Ort innerhalb einer Umgebung oder eines Kontexts wie das Bild, das als aktuelles Bauteil eines Flussdiagramms visuell hervorgehoben ist.
- `date`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten, wie das aktuelle Datum innerhalb eines Kalenders.
- `time`
  - : Repräsentiert die aktuelle Zeit innerhalb eines Satzes von Zeiten, wie die aktuelle Zeit in einem Zeitplan.
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

Verwendbar in allen Rollen; mit Ausnahme von Elementen mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) wo [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
