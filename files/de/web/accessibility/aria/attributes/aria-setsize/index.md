---
title: aria-setsize
slug: Web/Accessibility/ARIA/Attributes/aria-setsize
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-setsize` Attribut definiert die Anzahl von Elementen in der aktuellen Menge von Listenelementen oder Baumelementen, wenn nicht alle Elemente der Menge im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Anzahl der Elemente und die Position jedes Elements in einer Gruppe von Elementen, wie die Anzahl der {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radio-Buttons](/de/docs/Web/HTML/Element/input/radio) und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Hilfstechnologien, wie Screenreader, nutzen diese Statusverwaltung, um dem Benutzer die Anzahl der Elemente mitzuteilen.

Wenn das DOM nicht vollständig ist, kann die Berechnung der Anzahl der Elemente in einer Menge durch den Browser ungenau sein. Wenn nur ein Teil der Elemente, wie Listenelemente, ins DOM geladen wird, berechnet der Browser die Anzahl der Elemente basierend nur auf den vorhandenen. Das `aria-setsize` Attribut sollte verwendet werden, um die ungenaue Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente in der aktuellen Menge von Listenelementen oder Baumelementen, wenn die gesamte Menge geladen wäre.

Das `aria-setsize` Attribut wird auf jedes Element gesetzt, anstatt auf ein umschließendes Element. Der Wert ist für jedes Element derselbe: eine Ganzzahl, die die Anzahl der Elemente in der vollständigen Menge widerspiegelt, oder `-1`, wenn die Anzahl der Elemente unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Anzahl der Elemente und die Position jedes Elements berechnen, was sowohl `aria-setsize` als auch `aria-posinset` überflüssig macht.

Elemente mit dem `aria-setsize` Attribut haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut, um die Position des Elements innerhalb der Menge anzuzeigen. Der `aria-posinset` Wert liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel sollte in einem Kommentarbereich einer Seite, wenn nicht alle Kommentare im DOM sind, etwa bei Paginierung, die Ebene, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA festgelegt werden. Die hierarchische Ebene von Kommentaren kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) angegeben werden. Positionsinformationen innerhalb der Gruppe werden mit `aria-posinset` und `aria-setsize` angegeben.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` jedem Artikelelement hinzugefügt werden, wobei der Wert entweder die Gesamtanzahl der geladenen Artikel oder die Gesamtanzahl im Feed ist. Der gewählte Wert hängt davon ab, welcher Wert den Benutzern am hilfreichsten ist. Ist die Anzahl der Artikel extrem groß, unbestimmt oder ändert sich häufig, kann `aria-setsize="-1"` gesetzt werden, um die unbekannte Anzahl der Elemente zu kommunizieren.

In einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), wenn die vollständige Liste der verfügbaren Optionen nicht im DOM aufgrund dynamischen Ladens beim Scrollen vorhanden ist, können sowohl `aria-setsize` als auch `aria-posinset` auf jede [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gesetzt werden.

In einer Baumansicht, wenn die vollständige Liste der verfügbaren Knoten nicht im DOM aufgrund dynamischen Ladens beim Fokussieren oder Scrollen durch den Baum vorhanden ist, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle Rollen wie [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) gesetzt, wobei der Wert die Gesamtanzahl der Menüpunkte ist, ausgenommen Trenner.

## Beispiel

Das folgende Beispiel zeigt die Elemente 5 bis 8 in einer Menge von 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Um den Benutzer zu orientieren, würden Hilfstechnologien die Bananen oben als „Element 6 von 16“ auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente in der vollständigen Menge oder `-1`, wenn die Anzahl unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, reflektiert den Wert des `aria-setsize` Attributs.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, reflektiert den Wert des `aria-setsize` Attributs.

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

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [Treegrid Email Inbox](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treegrid/treegrid-1.html) Beispiel
- [Navigation Treeview Using Declared Properties](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treeview/treeview-2/treeview-2b.html) Beispiel
