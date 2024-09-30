---
title: aria-posinset
slug: Web/Accessibility/ARIA/Attributes/aria-posinset
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-posinset` definiert die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumelementen, wenn nicht alle Elemente im DOM vorhanden sind.

## Beschreibung

Kurz für "Position im Satz" definiert das Attribut `aria-posinset` die Position des Elements innerhalb des gesamten Satzes von Listenelementen oder Baumelementen, wenn nur eine Teilmenge der Elemente im DOM vorhanden ist.

Wenn alle Elemente in einer Liste im DOM vorhanden sind, kann der Browser die Gesamtzahl und die Position jedes Elements berechnen, wodurch `aria-posinset` überflüssig wird. Wenn nur ein Teil eines Satzes im DOM ist, verwenden Sie `aria-posinset`, um Informationen über die Position des Elements im Satz bereitzustellen, zusammen mit [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), um den Benutzer darüber zu informieren, wie viele Elemente im gesamten Satz sind.

Das folgende Beispiel zeigt eine Auswahlbox mit vier Elementoptionen von insgesamt 118 im Periodensystem der chemischen Elemente.

```html
<h2 id="periodic-table">Periodic table of chemical elements</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogen</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

Der Wert jedes `aria-posinset` ist eine Ganzzahl, die größer oder gleich `1` und kleiner oder gleich der Größe des Satzes ist, wenn diese Größe bekannt ist.

> [!NOTE]
> Wenn Sie `aria-posinset` verwenden, müssen Sie auch einen Wert für [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) einschließen, der die Größe des gesamten Satzes ist. Wenn die Größe des gesamten Satzes unbekannt ist, setzen Sie `aria-setsize="-1"`.

Für [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), setzen Sie den Wert von `aria-posinset` in Bezug auf die Gesamtanzahl der Elemente im Menü, ohne Trennzeichen.

In einem [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) hat jedes {{HTMLElement('article')}}-Element `aria-posinset` auf einen Wert gesetzt, der seine Position im Feed darstellt, zusammen mit `aria-setsize`, das entweder die Anzahl der geladenen Artikel oder die Gesamtzahl im Feed angibt, je nachdem, welcher Wert für die Benutzer am hilfreichsten ist.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich 1 und kleiner oder gleich dem Wert von `aria-setsize` ist.

## Zugehörige Schnittstellen

- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, gibt den Wert des `aria-posinset`-Attributs wieder.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, gibt den Wert des `aria-posinset`-Attributs wieder.

## Zugehörige Rollen

Verwendet in Rollen:

- [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemvalue`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`comment`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)

Erbt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
