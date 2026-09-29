---
title: "ARIA: tree-Rolle"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: 9abb432251513c5fdcaf5aad0764126fc68413c4
---

Ein `tree` ist ein Widget, mit dem Benutzer ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auswählen können.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit über- und untergeordneten Knoten, die sich auf- und zuklappen lassen. Jedes Element der Hierarchie kann untergeordnete Tree-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) gekennzeichnet sind. Tree-Elemente mit untergeordneten Elementen können aufgeklappt werden, um diese anzuzeigen, und zugeklappt werden, um sie auszublenden.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Auswahl von Dateisystemelementen: eine Baumansicht, die Ordner und Dateien anzeigt. Ordnerelemente können aufgeklappt werden, um den Inhalt des Ordners anzuzeigen – Dateien, Ordner oder beides – und zugeklappt werden, um ihn auszublenden.

Die Navigation in ARIA-Baumansichten erfolgt hauptsächlich mit den Pfeiltasten der Tastatur statt mit der <kbd>Tab</kbd>-Taste. Diese Art der Navigation ist für die meisten Browserinhalte unüblich, bei nativen Anwendungen jedoch normal und zu erwarten. Prüfen Sie daher vor dem Erstellen einer Baumansicht, ob sich die benötigte Funktionalität auf andere Weise umsetzen lässt.

> [!WARNING]
> Die Navigation in Baumansichten ähnelt eher der in nativen Anwendungen als der in Webanwendungen. Prüfen Sie daher vor dem Erstellen einer Baumansicht, ob sich die benötigte Funktionalität auf andere Weise umsetzen lässt.

Weitere Informationen zur Auszeichnung einzelner Baumknoten finden Sie unter [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role).

### Baumansichten mit Einfach- und Mehrfachauswahl

Baumansichten können eine Einfachauswahl ermöglichen, bei der Benutzer nur ein Element für eine Aktion auswählen, oder eine Mehrfachauswahl, bei der sie mehrere Elemente für eine Aktion auswählen können. Bei Baumansichten mit Mehrfachauswahl ist [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) für den `tree` auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` gilt implizit. In beiden Fällen muss der Fokus für alle Nachfahren der Baumansicht verwaltet werden, damit sie per Tastatur zugänglich sind.

Bei manchen Implementierungen einer Baumansicht mit Einfachauswahl ist das fokussierte Element zugleich ausgewählt. Dies wird als „Auswahl folgt dem Fokus“ bezeichnet. Wenn eine solche Baumansicht den Fokus erhält und zuvor keines ihrer Elemente ausgewählt war, wird der Fokus auf den ersten Knoten gesetzt. War zuvor ein Tree-Element ausgewählt, wird der Fokus auf dieses Element gesetzt.

Wenn eine Baumansicht mit Mehrfachauswahl den Fokus erhält und zuvor keines ihrer Elemente ausgewählt war, wird der Fokus auf das erste Tree-Element gesetzt. Waren zuvor ein oder mehrere Tree-Elemente ausgewählt, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

Bei Baumansichten mit Mehrfachauswahl ist der Auswahlzustand stets unabhängig vom Fokus. In einer typischen Dateisystemnavigation können Benutzer beispielsweise den Fokus bewegen, um beliebig viele Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Die visuelle Gestaltung sollte deutlich machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baumhierarchie

In einer Baumansicht ist das `tree`-Element der Container für die Hierarchie der `treeitem`-Knoten. Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`. Tree-Elemente auf der obersten Ebene sind Wurzelknoten; sie können untergeordnete Knoten, Enkelknoten und weitere Nachfahren haben.

### Position und Vorhandensein im DOM

Alle Tree-Elemente sind in einem Element mit der Rolle `tree` enthalten oder diesem zugeordnet. Wenn Wurzelknoten im DOM nicht im `tree` enthalten sind, verwenden Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) am zugehörigen Tree-Container, um auf sie zu verweisen. Diese zugeordneten Elemente, die keine DOM-Nachfahren sind, erscheinen in der Lesereihenfolge nach den Tree-Elementen, die DOM-Nachfahren sind, und untereinander in der Reihenfolge ihrer Referenzierung. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge für Hilfstechnologien übereinstimmt.

### Zugänglicher Name

Der `tree` muss einen zugänglichen Namen erhalten. Verweisen Sie entweder mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf eine sichtbare Beschriftung oder geben Sie mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) eine Beschriftung an.

### Ausrichtung der Baumansicht

Elemente mit der Rolle `tree` haben implizit den Wert `vertical` für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation). Wenn das Tree-Element horizontal ausgerichtet ist, geben Sie `aria-orientation="horizontal"` an.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einer Baumansicht.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine aufklappbare Sammlung von Tree-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Kennzeichnet das Element oder die Elemente, die den `tree` beschriften und bei vorhandener sichtbarer Beschriftung den erforderlichen zugänglichen Namen bereitstellen. Verwenden Sie andernfalls `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert eine Zeichenfolge, die den `tree` beschriftet, wenn keine sichtbare Beschriftung vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baumansicht horizontal oder vertikal ausgerichtet ist; wird die Eigenschaft weggelassen, gilt standardmäßig `vertical`.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Gibt bei einem Wert von `true` an, dass Benutzer unter den aktuell auswählbaren Nachfahren der Baumansicht mehr als ein Tree-Element auswählen können.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, die Standardausrichtung, gelten folgende Tastaturinteraktionen:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn sich der Fokus auf einem zugeklappten Knoten befindet, wird der Knoten aufgeklappt; der Fokus bleibt unverändert.
<li>Wenn sich der Fokus auf einem aufgeklappten Knoten befindet, wird der Fokus auf den ersten untergeordneten Knoten verschoben.
<li>Wenn sich der Fokus auf einem Endknoten befindet (einem Tree-Element ohne untergeordnete Elemente), geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn sich der Fokus auf einem aufgeklappten Knoten befindet, wird der Knoten zugeklappt.
<li>Wenn sich der Fokus auf einem Wurzelknoten befindet, der zugleich ein Endknoten oder ein zugeklappter Knoten ist, geschieht nichts.
<li>Wenn sich der Fokus auf einem untergeordneten Knoten befindet, der zugleich ein Endknoten oder ein zugeklappter Knoten ist, wird der Fokus auf dessen übergeordneten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td>Verschiebt den Fokus auf den nächsten fokussierbaren Knoten, ohne einen Knoten auf- oder zuzuklappen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td>Verschiebt den Fokus auf den vorherigen fokussierbaren Knoten, ohne einen Knoten auf- oder zuzuklappen.
</td>
</tr>
<tr>
<td><kbd>Pos1</kbd></td>
<td>Verschiebt den Fokus auf den ersten Knoten der Baumansicht, ohne einen Knoten auf- oder zuzuklappen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td>Verschiebt den Fokus auf den letzten fokussierbaren Knoten der Baumansicht, ohne einen Knoten aufzuklappen.
</td>
</tr>
<tr>
<td><kbd>Eingabe</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei übergeordneten Knoten kann das Auf- oder Zuklappen des Knotens eine mögliche Standardaktion sein. In Baumansichten mit Einfachauswahl, bei denen die Auswahl nicht dem Fokus folgt, besteht die Standardaktion normalerweise darin, den aktuellen Knoten auszuwählen, falls er noch nicht ausgewählt ist.
</td>
</tr>
<tr>
<td>Ein Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus wird auf den nächsten Knoten verschoben, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen rasch hintereinander eingegeben werden, wird der Fokus auf den nächsten Knoten verschoben, dessen Name mit der eingegebenen Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td>Klappt alle Knoten auf, die sich auf derselben Ebene wie der aktuelle Knoten befinden und denselben übergeordneten Knoten haben.
</td>
</tr>
</table>

\* Die Navigation durch Eingabe von Zeichen wird für alle Baumansichten empfohlen, insbesondere für Baumansichten mit mehr als sieben Wurzelknoten.

### Tastaturinteraktionen bei Mehrfachauswahl

Für Baumansichten mit Mehrfachauswahl gibt es zwei Interaktionsmodelle: Sie können verlangen, dass Benutzer beim Navigieren durch die Liste eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt halten, damit bestehende Auswahlzustände erhalten bleiben. Empfohlen wird jedoch das Modell, bei dem keine Modifikatortaste gedrückt gehalten werden muss.

#### Empfohlenes Modell für die Mehrfachauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td>Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach unten</kbd> (Optional)</td>
<td>Verschiebt den Fokus auf den nächsten Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach oben</kbd> (Optional)</td>
<td>Verschiebt den Fokus auf den vorherigen Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td>Wählt alle aufeinanderfolgenden Knoten vom zuletzt ausgewählten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Pos1</kbd> (Optional)</td>
<td>Wählt den fokussierten Knoten und alle Knoten bis zum ersten Knoten aus. Optional wird der Fokus auf den ersten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td>Wählt den fokussierten Knoten und alle Knoten bis zum letzten Knoten aus. Optional wird der Fokus auf den letzten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td>Wählt alle Knoten der Baumansicht aus. Optional können auch alle Knoten abgewählt werden, wenn bereits alle ausgewählt sind.</td>
</tr>
</table>

#### Alternatives Modell für die Mehrfachauswahl

Das alternative Modell für die Mehrfachauswahl verwendet Modifikatortasten: Wird der Fokus verschoben, ohne eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt zu halten, werden alle ausgewählten Knoten außer dem fokussierten Knoten abgewählt.

<table>
<tr>
<td><kbd>Umschalt + Pfeil nach unten</kbd></td>
<td>Verschiebt den Fokus auf den nächsten Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach oben</kbd></td>
<td>Verschiebt den Fokus auf den vorherigen Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach unten</kbd></td>
<td>Verschiebt den Fokus auf den nächsten Knoten, ohne den Auswahlzustand zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach oben</kbd></td>
<td>Verschiebt den Fokus auf den vorherigen Knoten, ohne den Auswahlzustand zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td>Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td>Wählt alle aufeinanderfolgenden Knoten vom zuletzt ausgewählten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Pos1</kbd> (Optional)</td>
<td>Wählt den fokussierten Knoten und alle Knoten bis zum ersten Knoten aus. Optional wird der Fokus auf den ersten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td>Wählt den fokussierten Knoten und alle Knoten bis zum letzten Knoten aus. Optional wird der Fokus auf den letzten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td>Wählt alle Knoten der Baumansicht aus. Optional können auch alle Knoten abgewählt werden, wenn bereits alle ausgewählt sind.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}
