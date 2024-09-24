---
title: aria-setsize
slug: Web/Accessibility/ARIA/Attributes/aria-setsize
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-setsize` Attribut definiert die Anzahl der Elemente im aktuellen Satz von Listeneinträgen oder Baumeinträgen, wenn nicht alle Elemente des Satzes im DOM vorhanden sind.

## Beschreibung

Browser berechnen automatisch die Satzgröße und Position für jedes Element in einer Gruppe von Elementen, wie die Anzahl von {{HTMLelement('li')}}s in einer Liste, Schaltflächen in einer gleichnamigen Gruppe von [Radioschaltern](/de/docs/Web/HTML/Element/input/radio) und {{HTMLelement('option')}}s in einem {{HTMLelement('select')}}. Unterstützende Technologien, wie Bildschirmlesegeräte, nutzen dieses Zustandsmanagement, um Satzgrößen an den Benutzer zu melden.

Wenn das DOM nicht vollständig ist, kann die Browser-Berechnung der Anzahl von Elementen in einem Satz falsch sein. Wenn nur eine Teilmenge von Elementen, wie Listeneinträge, in das DOM geladen ist, berechnet der Browser die Anzahl der Elemente nur basierend auf den vorhandenen. Das `aria-setsize` Attribut sollte verwendet werden, um die falsche Zählung des Browsers zu überschreiben. Es definiert die Anzahl der Elemente im aktuellen Satz von Listeneinträgen oder Baumeinträgen, sofern der gesamte Satz geladen gewesen wäre.

Das `aria-setsize` Attribut ist auf jedem Element einzeln festgelegt, anstatt auf einem enthaltenen Element. Der Wert ist für jedes Element derselbe: eine ganze Zahl, die die Anzahl der Elemente im vollständigen Satz widerspiegelt, oder `-1`, wenn die Satzgröße unbekannt ist. Wenn alle Elemente im DOM vorhanden sind, kann der Browser die Satzgröße und die Position jedes Elements berechnen, wodurch sowohl `aria-setsize` als auch `aria-posinset` überflüssig werden.

Elemente mit `aria-setsize` haben in der Regel auch das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut, um die Position dieses Elements innerhalb des Satzes anzuzeigen. Der Wert von `aria-posinset` liegt zwischen `1` und dem positiven Wert von `aria-setsize`.

Zum Beispiel, in einem Kommentarbereich einer Seite, wenn nicht alle Kommentare im DOM sind, wie bei paginierten Kommentaren, sollten das Level, die Gesamtanzahl der Kommentare und die Position jedes Kommentars mit ARIA festgelegt werden. Das hierarchische Level der Kommentare kann mit [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) angegeben werden. Gruppierte Positionsinformationen werden mit `aria-posinset` und `aria-setsize` angezeigt.

Wenn ein Feed eine feste Anzahl von Artikeln hat, kann `aria-setsize` jedem Artikulelement hinzugefügt werden, wobei der Wert entweder die Gesamtanzahl der geladenen Artikel oder die Gesamtanzahl im Feed ist. Welcher Wert gewählt wird, hängt davon ab, welcher für die Benutzer am hilfreichsten ist. Wenn die Anzahl der Artikel extrem groß, unbestimmt oder oft wechselnd ist, kann `aria-setsize="-1"` festgelegt werden, um mitzuteilen, dass die Satzgröße unbekannt ist.

In einem [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), wenn das vollständige verfügbare Set von Optionen nicht im DOM aufgrund von dynamischem Laden beim Scrollen vorhanden ist, können sowohl `aria-setsize` als auch `aria-posinset` auf jeder [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) festgelegt werden.

In einer Baumansicht, wenn das vollständige Set von verfügbaren Knoten nicht im DOM aufgrund von dynamischem Laden vorhanden ist, wenn der Benutzer den Fokus darauf verschiebt oder die Baumansicht scrollt, hat jeder Knoten `aria-level`, `aria-setsize` und `aria-posinset` festgelegt.

In einem Menü wird `aria-setsize` auf alle [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) oder [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen festgelegt, wobei der Wert die Gesamtanzahl der Elemente im Menü ist, ausgenommen jegliche Trennzeichen.

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

Um den Benutzer zu orientieren, würden unterstützende Technologien die oben genannten Bananen als "Element 6 von 16" aufführen.

## Werte

- `<integer>`
  - : Die Anzahl der Elemente im vollständigen Satz oder `-1`, wenn die Satzgröße unbekannt ist.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaSetSize")}}
  - : Die [`ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.
- {{domxref("ElementInternals.ariaSetSize")}}
  - : Die [`ariaSetSize`](/de/docs/Web/API/ElementInternals/ariaSetSize) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-setsize` Attributs wider.

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

Geht über in Rollen:

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
