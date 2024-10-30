---
title: aria-setsize
slug: Web/Accessibility/ARIA/Attributes/aria-setsize
l10n:
  sourceCommit: 58ffb2cb2a05105f1a5eaa5c659782a85f7a4606
---

{{AccessibilitySidebar}}

Das `aria-setsize` Attribut definiert die Anzahl der Elemente in der aktuellen Menge von `listitems` oder `treeitems`, wenn nicht alle Elemente der Menge im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Größe der Menge und die Position jedes Elements in einer Gruppe von Elementen, wie z. B. die Anzahl der {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radiobuttons](/de/docs/Web/HTML/Element/input/radio) und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Unterstützende Technologien, wie Bildschirmleseprogramme, nutzen dieses Zustandsmanagement, um dem Benutzer die Größen der Mengen mitzuteilen.

Wenn das DOM nicht vollständig ist, kann die Browserberechnung der Anzahl der Elemente in einer Menge falsch sein. Wenn nur ein Teil der Elemente, wie Listenelemente, in das DOM geladen wird, berechnet der Browser die Anzahl der Elemente nur anhand der vorhandenen. Das `aria-setsize` Attribut sollte verwendet werden, um die fehlerhafte Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente in der aktuellen Menge von `listitems` oder `treeitems`, wenn die gesamte Menge geladen wäre.

Das `aria-setsize` Attribut wird auf jedes Element gesetzt, anstatt auf ein enthaltenes Element. Der Wert ist für jedes Element gleich: eine ganze Zahl, die die Anzahl der Elemente in der vollständigen Menge widerspiegelt, oder `-1`, falls die Größe der Menge unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Größe der Menge und die Position jedes Elements berechnen, was sowohl `aria-setsize` als auch `aria-posinset` überflüssig macht.

Elemente mit `aria-setsize` haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut, um die Position des Elements innerhalb der Menge anzugeben. Der `aria-posinset` Wert liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel in einem Kommentarbereich einer Seite, wenn nicht alle Kommentare im DOM sind, wie z. B. bei paginierten Kommentaren, sollten die Ebene, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA gesetzt werden. Die hierarchische Ebene der Kommentare kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) angegeben werden. Positionsinformationen der Gruppe werden mit `aria-posinset` und `aria-setsize` angegeben.

Wenn ein Feed eine statische Anzahl von Artikeln hat, kann `aria-setsize` zu jedem Artikelelement hinzugefügt werden, mit dem Wert entweder der insgesamt geladenen Artikel oder der Gesamtzahl im Feed. Der gewählte Wert hängt davon ab, welcher für die Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt oder sich oft ändert, kann `aria-setsize="-1"` gesetzt werden, um mitzuteilen, dass die Größe der Menge unbekannt ist.

In einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), wenn der vollständige Satz der verfügbaren Optionen aufgrund von dynamischem Laden beim Scrollen nicht im DOM vorhanden ist, können sowohl `aria-setsize` als auch `aria-posinset` auf jedes [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gesetzt werden.

In einer Baumansicht, wenn der vollständige Satz der verfügbaren Knoten aufgrund von dynamischem Laden nicht im DOM vorhanden ist, während der Benutzer den Fokus verschiebt oder den Baum scrollt, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen gesetzt, mit dem Wert der Gesamtzahl der im Menü enthaltenen Elemente, abzüglich etwaiger Trennzeichen.

## Beispiel

Folgendes Beispiel zeigt die Elemente 5 bis 8 in einer Menge von 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Um den Benutzer zu orientieren, würden unterstützende Technologien die oben genannten Bananen als "Element 6 von 16" auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente in der gesamten Menge oder `-1`, wenn die Größe der Menge unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.

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
- W3C WAI-ARIA Praktiken:
  - [Treegrid Email Inbox Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Navigationsbaumansicht Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Dateiverzeichnis Baumansicht Beispiel mit deklarierten Eigenschaften](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
