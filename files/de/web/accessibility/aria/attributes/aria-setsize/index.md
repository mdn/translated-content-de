---
title: aria-setsize
slug: Web/Accessibility/ARIA/Attributes/aria-setsize
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-setsize` Attribut definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn nicht alle Elemente des Satzes im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Größe und Position des Sets für jedes Element in einer Gruppe von Elementen, wie der Anzahl von {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radioschaltflächen](/de/docs/Web/HTML/Element/input/radio) und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Assistive Technologien, wie Bildschirmlesegeräte, nutzen diese Zustandsverwaltung, um dem Benutzer die Setgrößen mitzuteilen.

Wenn das DOM nicht vollständig ist, kann die Browserberechnung der Anzahl der Elemente in einem Set falsch sein. Wenn nur ein Teil der Elemente, wie Listenelemente, in das DOM geladen werden, berechnet der Browser die Anzahl der Elemente nur basierend auf den vorhandenen. Das `aria-setsize` Attribut sollte verwendet werden, um die falsche Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn der gesamte Satz geladen wäre.

Das `aria-setsize` Attribut wird auf jedes einzelne Element gesetzt, nicht auf ein übergeordnetes Element. Der Wert ist für jedes Element gleich: Ein Ganzzahlwert, der die Anzahl der Elemente im vollständigen Satz widerspiegelt, oder `-1`, wenn die Setgröße unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Setgröße und die Position jedes Elements berechnen, wodurch sowohl `aria-setsize` als auch `aria-posinset` überflüssig werden.

Elemente mit `aria-setsize` haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut, um die Position dieses Elements innerhalb des Satzes anzugeben. Der `aria-posinset` Wert liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel, in einem Kommentarsektion einer Seite: Wenn nicht alle Kommentare im DOM sind, wie bei paginierten Kommentaren, sollten das Niveau, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA gesetzt werden. Das hierarchische Niveau der Kommentare kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) angegeben werden. Gruppenpositionsinformationen werden mit `aria-posinset` und `aria-setsize` angezeigt.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` zu jedem Artikelelelement hinzugefügt werden, der Wert ist entweder die Gesamtzahl der geladenen Artikel oder die Gesamtzahl im Feed. Der gewählte Wert hängt davon ab, welcher Wert für die Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt oder sich oft ändert, kann `aria-setsize="-1"` gesetzt werden, um zu kommunizieren, dass die Größe des Sets unbekannt ist.

In einem [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), wenn das vollständige Set der verfügbaren Optionen nicht im DOM vorhanden ist aufgrund von dynamischem Laden beim Scrollen, können sowohl `aria-setsize` als auch `aria-posinset` auf jedem [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gesetzt werden.

In einer Baumansicht, wenn das vollständige Set verfügbarer Knoten nicht im DOM vorhanden ist aufgrund von dynamischem Laden, während der Benutzer den Fokus setzt oder im Baum scrollt, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen gesetzt, mit dem Wert, der die Gesamtanzahl der Elemente im Menü ohne Trennzeichen wiedergibt.

## Beispiel

Das folgende Beispiel zeigt die Elemente 5 bis 8 in einem Satz von 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Um den Benutzer zu orientieren, würden assistive Technologien die Bananen oben als "Element 6 von 16" auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente im vollständigen Satz oder `-1`, wenn die Setgröße unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, entspricht dem Wert des `aria-setsize` Attributs.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, entspricht dem Wert des `aria-setsize` Attributs.

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

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [Treegrid Email Inbox](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treegrid/treegrid-1.html) Beispiel
- [Navigation Treeview Using Declared Properties](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treeview/treeview-2/treeview-2b.html) Beispiel
