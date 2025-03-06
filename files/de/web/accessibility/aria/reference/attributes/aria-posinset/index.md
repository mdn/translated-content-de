---
title: aria-posinset
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-posinset
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-posinset` definiert die Nummer oder Position eines Elements in der aktuellen Menge von Listenelementen (listitems) oder Baumelementen (treeitems), wenn nicht alle Elemente im DOM vorhanden sind.

## Beschreibung

Kurz für "Position im Satz", definiert das Attribut `aria-posinset` die Position des Elements innerhalb der gesamten Menge von Listenelementen oder Baumelementen, wenn nur eine Teilmenge der Elemente im DOM vorhanden ist.

Wenn alle Elemente einer Liste im DOM vorhanden sind, kann der Browser die Gesamtzahl und die Position jedes Elements berechnen, wodurch `aria-posinset` überflüssig wird. Wenn nur ein Teil einer Menge im DOM ist, fügen Sie `aria-posinset` hinzu, um Informationen über die Position des Elements innerhalb der Menge bereitzustellen, zusammen mit [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), um dem Benutzer mitzuteilen, wie viele Elemente sich in der gesamten Menge befinden.

Das folgende Beispiel zeigt eine Listbox mit vier Elementoptionen aus den 118 des Periodensystems der chemischen Elemente.

```html
<h2 id="periodic-table">Periodic table of chemical elements</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogen</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

Der Wert jedes `aria-posinset` ist eine Ganzzahl, die größer oder gleich `1` und kleiner oder gleich der Größe der Menge ist, wenn diese Größe bekannt ist.

> [!NOTE]
> Wenn Sie `aria-posinset` verwenden, müssen Sie auch einen Wert für [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) angeben, die die Größe der gesamten Menge darstellt. Wenn die Größe der gesamten Menge unbekannt ist, setzen Sie `aria-setsize="-1"`.

Für [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), setzen Sie den Wert von `aria-posinset` in Bezug auf die Gesamtanzahl der Elemente im Menü, ohne jegliche Trennzeichen.

In einem [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role), hat jedes {{HTMLElement('article')}}-Element `aria-posinset` mit einem Wert, der seine Position im Feed repräsentiert, zusammen mit `aria-setsize`, entweder gesetzt auf die Anzahl der geladenen Artikel oder die Gesamtzahl im Feed, abhängig davon, welcher Wert für die Benutzer am hilfreichsten ist.

## Werte

- `<integer>`
  - : Ganzzahl größer oder gleich 1 und kleiner oder gleich dem Wert von `aria-setsize`.

## Zugehörige Schnittstellen

- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-posinset` Attributs wider.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-posinset` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Erbt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
