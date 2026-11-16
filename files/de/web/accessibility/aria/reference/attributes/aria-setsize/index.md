---
title: "ARIA: aria-setsize-Attribut"
short-title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-setsize` definiert die Anzahl der Elemente in der aktuellen Gruppe von listitems oder treeitems, wenn nicht alle Elemente der Gruppe im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Gruppengröße und die Position jedes Elements innerhalb einer Gruppe, beispielsweise die Anzahl der {{HTMLelement('li')}}-Elemente in einer Liste, der Buttons in einer Gruppe gleichnamiger [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio) oder der {{HTMLelement('option')}}-Elemente in einem {{HTMLelement('select')}}-Element. Unterstützende Technologien wie Screenreader nutzen diese Informationen, um Nutzern die Gruppengröße mitzuteilen.

Wenn das DOM nicht vollständig ist, kann die vom Browser berechnete Anzahl der Elemente in einer Gruppe falsch sein. Sind nur einige Elemente, etwa Listeneinträge, in das DOM geladen, berücksichtigt der Browser bei seiner Berechnung nur die vorhandenen Elemente. Das Attribut `aria-setsize` sollte verwendet werden, um diese falsche Anzahl zu korrigieren. Es gibt an, wie viele listitems oder treeitems die aktuelle Gruppe umfasst, wenn alle Elemente geladen wären.

Das Attribut `aria-setsize` wird für jedes einzelne Element festgelegt, nicht für ein umschließendes Element. Der Wert ist für alle Elemente gleich: eine Ganzzahl, die die Anzahl der Elemente in der vollständigen Gruppe angibt, oder `-1`, wenn die Gruppengröße unbekannt ist. Sind alle Elemente im DOM vorhanden, kann der Browser die Gruppengröße und die Position jedes Elements selbst berechnen. In diesem Fall sind weder `aria-setsize` noch `aria-posinset` erforderlich.

Elemente mit `aria-setsize` haben in der Regel auch das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), das die Position des Elements innerhalb der Gruppe angibt. Der Wert von `aria-posinset` liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Wenn beispielsweise im Kommentarbereich einer Seite nicht alle Kommentare im DOM vorhanden sind, etwa weil sie auf mehrere Seiten verteilt sind, sollten die Hierarchieebene, die Gesamtzahl der Kommentare und die Position jedes Kommentars mit ARIA angegeben werden. Die Hierarchieebene der Kommentare lässt sich mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) angeben. `aria-posinset` und `aria-setsize` geben die Position innerhalb der Gruppe und deren Größe an.

Wenn ein Feed eine feste Anzahl von Artikeln enthält, kann `aria-setsize` jedem article-Element hinzugefügt werden. Als Wert kann entweder die Anzahl der geladenen Artikel oder die Gesamtzahl der Artikel im Feed verwendet werden. Wählen Sie den Wert, der für Nutzer am hilfreichsten ist. Ist die Anzahl der Artikel sehr groß, unbestimmt oder ändert sie sich häufig, kann `aria-setsize="-1"` verwendet werden, um anzugeben, dass die Gruppengröße unbekannt ist.

Wenn in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) aufgrund des dynamischen Nachladens beim Scrollen nicht alle verfügbaren Optionen im DOM vorhanden sind, können `aria-setsize` und `aria-posinset` für jede [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) festgelegt werden.

Wenn in einer Baumansicht aufgrund des dynamischen Nachladens beim Verschieben des Fokus oder beim Scrollen nicht alle verfügbaren Knoten im DOM vorhanden sind, werden für jeden Knoten `aria-level`, `aria-setsize` und `aria-posinset` festgelegt.

In einem Menü wird `aria-setsize` für alle Elemente mit der Rolle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) festgelegt. Der Wert entspricht der Gesamtzahl der Menüeinträge ohne Trennlinien.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente in der vollständigen Gruppe oder `-1`, wenn die Gruppengröße unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die Eigenschaft [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-setsize` wider.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die Eigenschaft [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-setsize` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

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

Wird an folgende Rollen vererbt:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Beispiel

Das folgende Beispiel zeigt die Elemente 5 bis 8 einer Gruppe von 16 Elementen.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Zur Orientierung würden unterstützende Technologien die oben genannten Bananen als „Element 6 von 16“ ansagen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C-WAI-ARIA-Praktiken:
  - [Treegrid-Beispiel für einen E-Mail-Posteingang](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Beispiel für eine Navigationsbaumansicht](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Beispiel für eine Dateiverzeichnis-Baumansicht mit explizit angegebenen Eigenschaften](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
