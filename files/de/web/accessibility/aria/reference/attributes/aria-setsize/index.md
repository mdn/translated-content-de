---
title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-setsize` definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn nicht alle Elemente des Sets im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Gruppengröße und Position für jedes Element in einer Gruppe von Elementen, wie z. B. die Anzahl der {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Optionsfeldern](/de/docs/Web/HTML/Element/input/radio), und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Unterstützende Technologien, wie Bildschirmleseprogramme, nutzen dieses Zustandsmanagement, um die Gruppengrößen dem Benutzer zu melden.

Wenn das DOM nicht vollständig ist, kann die Berechnung der Anzahl der Elemente in einer Gruppe durch den Browser fehlerhaft sein. Wenn nur ein Teil der Elemente, wie z.B. Listenelemente, in das DOM geladen wird, berechnet der Browser die Anzahl der Elemente nur basierend auf den vorhandenen. Das `aria-setsize`-Attribut sollte verwendet werden, um die falsche Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen, wenn der gesamte Satz geladen wäre.

Das `aria-setsize`-Attribut wird auf jedes Element gesetzt, anstatt auf ein umgebendes Element. Der Wert ist für jedes Element gleich: eine ganze Zahl, die die Anzahl der Elemente im vollständigen Satz widerspiegelt, oder `-1`, wenn die Größe des Sets unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Gruppengröße und die Position jedes Elements berechnen, wodurch sowohl `aria-setsize` als auch `aria-posinset` unnötig werden.

Elemente mit `aria-setsize` haben im Allgemeinen auch das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) enthalten, um die Position dieses Elements innerhalb des Sets anzuzeigen. Der Wert von `aria-posinset` liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel, in einem Kommentarsektor einer Seite, wenn Kommentare nicht alle im DOM sind, wie bei paginierten Kommentaren, sollten der Level, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA gesetzt werden. Der hierarchische Level von Kommentaren kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) angezeigt werden. Die gruppenspezifische Positionsinformation wird mit `aria-posinset` und `aria-setsize` angegeben.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` jedem Artikelelement hinzugefügt werden, wobei der Wert entweder die Gesamtanzahl geladener Artikel oder die Gesamtanzahl im Feed ist. Der gewählte Wert hängt davon ab, welcher Wert für die Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt ist oder sich häufig ändert, kann `aria-setsize="-1"` gesetzt werden, um zu kommunizieren, dass die Größe des Sets unbekannt ist.

In einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), wenn der komplette Satz verfügbarer Optionen nicht im DOM aufgrund dynamischen Ladens bei Bildlauf vorhanden ist, können sowohl `aria-setsize` als auch `aria-posinset` auf jedes [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) gesetzt werden.

In einer Baumansicht, wenn der vollständige Satz verfügbarer Knoten aufgrund dynamischen Ladens, wie der Benutzer den Fokus auf Kinder verschiebt oder durch den Baum scrollt, nicht im DOM vorhanden ist, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` gesetzt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen gesetzt, wobei der Wert die Gesamtanzahl der Elemente im Menü ohne Trennzeichen ist.

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

Um den Benutzer zu orientieren, würden unterstützende Technologien die oben genannten Bananen als „Element 6 von 16“ auflisten.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente im vollständigen Set oder `-1`, wenn die Set-Größe unbekannt ist.

## Zugehörige Schnittstellen

- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) -Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-setsize`-Attributs wider.
- [`ElementInternals.ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize)
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) -Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-setsize`-Attributs wider.

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

Vererbt in Rollen:

- [`comment`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C WAI-ARIA-Praktiken:
  - [Beispiel für E-Mail-Posteingang im Treegrid](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Beispiel für die Navigation in einer Baumansicht](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Beispiel eines Dateiverzeichnis-Baums unter Verwendung deklarierter Eigenschaften](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
