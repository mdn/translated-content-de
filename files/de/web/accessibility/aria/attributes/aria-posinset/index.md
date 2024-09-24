---
title: aria-posinset
slug: Web/Accessibility/ARIA/Attributes/aria-posinset
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-posinset` definiert die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumelementen, wenn nicht alle Elemente im DOM vorhanden sind.

## Beschreibung

Kurz für "Position im Satz", definiert das Attribut `aria-posinset` die Position des Elements innerhalb des gesamten Satzes von Listenelementen oder Baumelementen, wenn nur ein Teil der Elemente im DOM vorhanden ist.

Wenn alle Elemente einer Liste im DOM vorhanden sind, kann der Browser die Gesamtheit und die Position jedes Elements berechnen, wodurch `aria-posinset` überflüssig wird. Sind nur Teile eines Satzes im DOM, fügt man `aria-posinset` hinzu, um Informationen über die Position des Elements im Satz zu liefern, zusammen mit [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), um den Benutzer darüber zu informieren, wie viele Elemente im gesamten Satz enthalten sind.

Das folgende Beispiel zeigt ein Listenfeld mit vier Elementeoptionen von den 118 im Periodensystem der chemischen Elemente.

```html
<h2 id="periodic-table">Periodensystem der chemischen Elemente</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Wasserstoff</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Natrium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Kalium</li>
</ul>
```

Der Wert jedes `aria-posinset` ist eine Ganzzahl, die größer oder gleich `1` und kleiner oder gleich der Größe des Satzes ist, wenn diese Größe bekannt ist.

> [!NOTE]
> Bei der Verwendung von `aria-posinset` müssen Sie auch einen Wert für [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) angeben, der die Größe des gesamten Satzes darstellt. Wenn die Größe des gesamten Satzes unbekannt ist, setzen Sie `aria-setsize="-1"`.

Für [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) setzen Sie den Wert von `aria-posinset` in Bezug auf die Gesamtzahl der Elemente im Menü, ohne Trennzeichen einzuschließen.

In einem [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) hat jedes {{HTMLElement('article')}}-Element `aria-posinset` auf einen Wert eingestellt, der seine Position im Feed darstellt, zusammen mit `aria-setsize`, das entweder auf die Anzahl der geladenen Artikel oder die Gesamtzahl im Feed gesetzt ist, je nachdem, welcher Wert für die Benutzer am hilfreichsten ist.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich 1 ist, und kleiner oder gleich dem Wert von `aria-setsize`.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaPosInSet")}}
  - : Die Eigenschaft [`ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet), Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-posinset` wider.
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : Die Eigenschaft [`ariaPosInSet`](/de/docs/Web/API/ElementInternals/ariaPosInSet), Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-posinset` wider.

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
