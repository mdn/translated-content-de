---
title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-setsize` Attribut definiert die Anzahl der Elemente in der aktuellen Menge von `listitems` oder `treeitems`, wenn nicht alle Elemente der Menge im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Größe des Sets und die Position für jedes Element in einer Gruppe von Elementen, wie die Anzahl der {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio), und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Unterstützungstechnologien, wie z. B. Bildschirmleser, nutzen dieses Statusmanagement, um Benutzern die Set-Größen mitzuteilen.

Wenn das DOM nicht vollständig ist, kann die Browserberechnung der Anzahl der Elemente in einem Set falsch sein. Wenn nur eine Teilmenge von Elementen, wie Listenpunkte, in das DOM geladen werden, berechnet der Browser die Anzahl der Elemente nur basierend auf den vorhandenen. Das `aria-setsize` Attribut sollte verwendet werden, um die falsche Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente im aktuellen Set von `listitems` oder `treeitems`, wenn das gesamte Set geladen wäre.

Das `aria-setsize` Attribut wird auf jedes Element gesetzt, anstatt auf ein enthaltendes Element. Der Wert ist für jedes Element derselbe: ein ganzzahliger Wert, der die Anzahl der Elemente im vollständigen Set widerspiegelt, oder `-1`, wenn die Set-Größe unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Set-Größe und die Position jedes Elements berechnen, wodurch sowohl `aria-setsize` als auch `aria-posinset` überflüssig werden.

Elemente mit dem `aria-setsize` Attribut haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) Attribut, um die Position dieses Elements innerhalb des Sets anzugeben. Der `aria-posinset` Wert liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel in einem Kommentarbereich einer Seite: Wenn Kommentare nicht alle im DOM sind, wie bei paginierten Kommentaren, sollten das Niveau, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA festgelegt werden. Das hierarchische Niveau der Kommentare kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) angegeben werden. Gruppenpositionsinformationen werden mit `aria-posinset` und `aria-setsize` angegeben.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` zu jedem Artikel-Element hinzugefügt werden, wobei der Wert entweder die Gesamtzahl der geladenen Artikel oder die Gesamtanzahl im Feed ist. Der gewählte Wert hängt davon ab, welcher für Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt oder sich oft ändert, kann `aria-setsize="-1"` gesetzt werden, um mitzuteilen, dass die Größe des Sets unbekannt ist.

In einem [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), wenn das vollständige Set an verfügbaren Optionen aufgrund von dynamischem Laden beim Scrollen nicht im DOM vorhanden ist, können sowohl `aria-setsize` als auch `aria-posinset` auf jede [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) gesetzt werden.

In einer Baumansicht, wenn das vollständige Set an verfügbaren Knoten aufgrund von dynamischem Laden, während der Benutzer den Fokus verschiebt oder durch den Baum scrollt, nicht im DOM vorhanden ist, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen gesetzt, wobei der Wert die Gesamtanzahl der Elemente im Menü darstellt, exklusive Separatoren.

## Beispiel

Das folgende Beispiel zeigt die Elemente 5 bis 8 in einem Set von 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Um den Benutzer zu orientieren, würden Unterstützungstechnologien die Bananen oben als "Element 6 von 16" auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente im vollständigen Set oder `-1`, wenn die Set-Größe unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.

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

Geerbt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C WAI-ARIA Praktiken:
  - [Beispiel einer Treegrid E-Mail-Inbox](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Beispiel einer Navigations-Baumansicht](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Beispiel eines Datei-Verzeichnis-Baums mit deklarierten Eigenschaften](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
