---
title: aria-current
slug: Web/Accessibility/ARIA/Attributes/aria-current
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AccessibilitySidebar}}

Ein nicht-null `aria-current` Zustand auf einem Element zeigt an, dass dieses Element das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

## Beschreibung

Wenn Sie eine Gruppe verwandter Elemente haben, wie zum Beispiel mehrere Links in einem Breadcrumb oder Schritte in einem mehrstufigen Prozess, bei dem ein Element in der Gruppe anders gestylt ist, um dem sehenden Benutzer anzuzeigen, dass dies das aktuelle Element innerhalb seiner Gruppe ist, sollte `aria-current` verwendet werden, um den Benutzern von unterstützender Technologie mitzuteilen, was durch Styling angezeigt wurde.

In einer Breadcrumb-Liste, wenn ein Link in einer Gruppe von Paginierungslinks so gestylt ist, dass der Benutzer sieht, dass er sich derzeit auf dieser Seite befindet, sollte auf diesem Link `aria-current="page"` gesetzt werden. In einem mehrstufigen Prozess mit einem Schrittindikator wie einem mehrseitigen Umfrage- oder mehrstufigen Checkout- oder Registrierungsprozess, wenn das aktuelle Schrittsymbol visuell unterschiedlich dargestellt wird, um anzuzeigen, dass es der aktuelle Schritt ist, sollte der Container dieses Symbols `aria-current="step"` haben, um Benutzer von unterstützender Technologie über die visuelle Unterschied zu informieren.

Das `aria-current` Attribut gibt an, dass das Element, auf dem es gesetzt ist, mit einem Wert ungleich `false`, das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt. Markieren Sie nur ein Element in einer Gruppe von Elementen als aktuell mit `aria-current`.

Das `aria-current` Attribut akzeptiert eine begrenzte Liste von [Werten](#werte) einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. Jeder nicht-nulle Zeichenkettenwert, der nicht in dieser Liste von enumerierten Werten enthalten ist, wird behandelt, als ob `aria-current="true"` gesetzt wäre, nicht der Standardwert `false`. Wenn das Attribut nicht vorhanden ist, eine leere Zeichenkette darstellt, ohne Wert vorhanden ist, oder auf `aria-current="false"` gesetzt ist, wird es dem Benutzer nicht angezeigt.

Wenn etwas ausgewählt anstatt aktuell ist, wie ein [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), verwenden Sie [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected), um das aktuell angezeigte Tab-Panel anzuzeigen.

> [!NOTE]
> Verwenden Sie `aria-current` nicht als Ersatz für [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) in [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) oder [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).

## Beispiel

Das Breadcrumb für die "aktuelle Seite" sollte mit `aria-current="page"` versehen sein.

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Webtechnologie für Entwickler</a>
    </li>
    <li>
      <a href="../../../../">Barrierefreiheit</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA-Zustände und -Eigenschaften</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA: `aria-current` Attribut</a>
    </li>
  </ol>
</nav>
```

Wenn das Element, das die aktuelle Seite im Breadcrumb darstellt, kein Link war, ist `aria-current` optional.

## Werte

- `page`
  - : Repräsentiert die aktuelle Seite innerhalb einer Menge von Seiten, wie den Link zum aktuellen Dokument in einem Breadcrumb.
- `step`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses, wie den aktuellen Schritt in einem enumerierten mehrstufigen Checkout-Ablauf.
- `location`
  - : Repräsentiert den aktuellen Standort innerhalb einer Umgebung oder eines Kontexts, wie das Bild, das visuell hervorgehoben als aktueller Bestandteil eines Flussdiagramms dargestellt wird.
- `date`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten, wie das aktuelle Datum innerhalb eines Kalenders.
- `time`
  - : Repräsentiert die aktuelle Zeit innerhalb einer Sammlung von Zeiten, wie die aktuelle Uhrzeit innerhalb eines Zeitplans.
- `true`
  - : Repräsentiert das aktuelle Element innerhalb einer Menge.
- `false` (Standard)
  - : Repräsentiert nicht das aktuelle Element innerhalb einer Menge.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaCurrent")}}
  - : Die [`ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-current` Attributs wider.
- {{domxref("ElementInternals.ariaCurrent")}}
  - : Die [`ariaCurrent`](/de/docs/Web/API/ElementInternals/ariaCurrent) Eigenschaft der {{domxref("ElementInternals")}} Schnittstelle spiegelt den Wert des `aria-current` Attributs wider.

## Zugehörige Rollen

Verwendbar in allen Rollen; außer für Elemente mit der Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), bei denen [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) verwendet werden sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Breadcrumb-Navigation mit `aria-current`](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)
