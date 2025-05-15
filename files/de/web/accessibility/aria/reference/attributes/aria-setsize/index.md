---
title: "ARIA: aria-setsize-Attribut"
short-title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-setsize`-Attribut definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn nicht alle Elemente des Satzes im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Satzgröße und Position für jedes Element in einer Gruppe von Elementen, wie z. B. die Anzahl der {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio) und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Hilfstechnologien, wie Bildschirmleseprogramme, nutzen diesen Zustandsverwaltungsmechanismus, um dem Benutzer die Größe der Sätze zu melden.

Wenn das DOM nicht vollständig ist, kann die Browserberechnung der Anzahl der Elemente in einem Satz inkorrekt sein. Wenn nur ein Teil der Elemente, wie Listenelemente, ins DOM geladen wird, berechnet der Browser die Anzahl der Elemente nur auf Basis der vorhandenen. Das `aria-setsize`-Attribut sollte verwendet werden, um die inkorrekte Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn der gesamte Satz geladen worden wäre.

Das `aria-setsize`-Attribut wird auf jedes Element gesetzt, statt auf ein enthaltendes Element. Der Wert ist für jedes Element gleich: eine ganze Zahl, die die Anzahl der Elemente im vollständigen Satz widerspiegelt, oder `-1`, wenn die Satzgröße unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Satzgröße und die Position jedes Elements berechnen, wodurch sowohl `aria-setsize` als auch `aria-posinset` unnötig werden.

Elemente mit dem `aria-setsize`-Attribut haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attribut enthalten, um die Position dieses Elements innerhalb des Satzes anzuzeigen. Der `aria-posinset`-Wert liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel, in einem Kommentarbereich einer Seite, wenn nicht alle Kommentare im DOM sind, wie z.B. bei paginierten Kommentaren, sollten die Ebene, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA festgelegt werden. Die hierarchische Ebene von Kommentaren kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) angezeigt werden. Die Gruppenpositionsinformation wird mit `aria-posinset` und `aria-setsize` angegeben.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` zu jedem Artikelelelement hinzugefügt werden, wobei der Wert entweder die insgesamt geladenen Artikel oder die Gesamtanzahl der Artikel im Feed sind. Der gewählte Wert hängt davon ab, welcher Wert für Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt oder oft wechselnd ist, kann `aria-setsize="-1"` gesetzt werden, um zu signalisieren, dass die Größe des Satzes unbekannt ist.

In einem [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), wenn der vollständige Satz der verfügbaren Optionen nicht im DOM vorhanden ist, aufgrund von dynamischem Laden beim Scrollen, können sowohl `aria-setsize` als auch `aria-posinset` auf jedem [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) gesetzt werden.

In einer Baumansicht (tree view), wenn der vollständige Satz der verfügbaren Knoten nicht im DOM vorhanden ist, aufgrund von dynamischem Laden, während sich der Fokus des Nutzers bewegt oder der Baum gescrollt wird, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen gesetzt, wobei der Wert die Gesamtanzahl der Elemente im Menü ohne Separatoren ist.

## Beispiel

Das folgende Beispiel zeigt die Elemente 5 bis 8 in einem Satz von insgesamt 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

Um den Benutzer zu orientieren, würden Hilfstechnologien die Bananen oben als "Element 6 von 16" auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente im vollständigen Satz oder `-1`, wenn die Satzgröße unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-setsize`-Attributs wider.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-setsize`-Attributs wider.

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

Übernimmt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C WAI-ARIA Praktiken:
  - [Treegrid Email Inbox Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Navigationsbaumansichts-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Dateiverzeichnisbaumansicht-Beispiel unter Verwendung deklarierter Eigenschaften](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
