---
title: aria-posinset
slug: Web/Accessibility/ARIA/Attributes/aria-posinset
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-posinset`-Attribut definiert die Nummer oder Position eines Elements im aktuellen Satz von Listeneinträgen oder Baumeinträgen, wenn nicht alle Elemente im DOM vorhanden sind.

## Beschreibung

Kurz für "position in set", definiert das `aria-posinset`-Attribut die Position des Elements innerhalb des gesamten Satzes von Listeneinträgen oder Baumeinträgen, wenn nur ein Teil der Elemente im DOM vorhanden ist.

Wenn alle Elemente in einer Liste im DOM vorhanden sind, kann der Browser die Gesamtanzahl und die Position jedes Elements berechnen, wodurch `aria-posinset` überflüssig wird. Wenn nur ein Teil eines Satzes im DOM ist, fügen Sie `aria-posinset` hinzu, um Informationen über die Position des Elements innerhalb des Satzes bereitzustellen, zusammen mit [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), um den Benutzer darüber zu informieren, wie viele Elemente sich im gesamten Satz befinden.

Das folgende Beispiel zeigt ein Listenfeld mit vier Elementoptionen aus den 118 im Periodensystem der chemischen Elemente.

```html
<h2 id="periodic-table">Periodic table of chemical elements</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogen</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

Der Wert jedes `aria-posinset` ist eine ganze Zahl, die größer oder gleich `1` und kleiner oder gleich der Größe des Satzes ist, wenn diese Größe bekannt ist.

> [!NOTE]
> Wenn Sie `aria-posinset` verwenden, müssen Sie auch einen Wert für [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) angeben, der die Größe des gesamten Satzes ist. Wenn die Größe des gesamten Satzes unbekannt ist, setzen Sie `aria-setsize="-1"`.

Für [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) legen Sie den Wert von `aria-posinset` in Bezug auf die Gesamtzahl der Elemente im Menü fest, ohne Trennzeichen einzubeziehen.

In einem [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) hat jedes {{HTMLElement('article')}}-Element `aria-posinset`, das auf einen Wert gesetzt ist, der seine Position im Feed darstellt, zusammen mit `aria-setsize`, das entweder auf die Anzahl der geladenen Artikel oder auf die Gesamtanzahl im Feed gesetzt ist, je nachdem, welcher Wert für die Benutzer am hilfreichsten ist.

## Werte

- `<integer>`
  - : Ganze Zahl, die größer oder gleich 1 und kleiner oder gleich dem Wert von `aria-setsize` ist.

## Zugehörige Schnittstellen

- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-posinset`-Attributes wider.
- [`ElementInternals.ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)
  - : Die [`ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-posinset`-Attributes wider.

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

Vererbt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
