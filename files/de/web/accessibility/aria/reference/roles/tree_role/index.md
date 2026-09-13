---
title: "ARIA: tree Rolle"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: d1fd21c87a4917e56dab84fc0b1d321ebb22874e
---

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit Eltern- und Kindknoten, die erweitert und eingeklappt werden können. Jedes Element in der Hierarchie kann untergeordnete Baum-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) festgelegt sind. Baum-Elemente, die Kinder haben, können erweitert oder eingeklappt werden, um ihre Kinder zu zeigen oder zu verbergen.

Ein Beispiel für einen `tree` ist eine Dateisystemauswahl-Benutzeroberfläche: eine Baumansicht, die Ordner und Dateien anzeigt. Ordner-Elemente können erweitert werden, um den Inhalt des Ordners anzuzeigen — der Dateien, Ordner oder beides sein kann — und eingeklappt werden, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie vor der Erstellung einer Baumansicht alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen ähnelt als Webanwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

### Einzel- und Mehrfachauswahl-Bäume

Bäume können "Einzelauswahl" sein, was bedeutet, dass Benutzer nur ein Element für eine Aktion auswählen können, oder "Mehrfachauswahl", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In Mehrfachauswahl-Bäumen ist `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf "true" gesetzt. Andernfalls ist `aria-multiselectable` entweder auf "false" gesetzt oder der Standardwert von "false" wird impliziert. In beiden Fällen muss, um tastaturzugänglich zu sein, der Fokus für alle Baum-Nachfahren verwaltet werden.

In einigen Implementierungen eines Einzelauswahl-Baums hat das fokussierte Element auch einen ausgewählten Zustand; dies wird als "Auswahl folgt dem Fokus" bezeichnet. Wenn ein Einzelauswahl-Baum den Fokus erhält, wird, falls keine der Baum-Elemente vor dem Erhalt des Fokus ausgewählt wurden, der Fokus auf den ersten Knoten gesetzt. Wenn ein Baum-Element vor Erhalt des Fokus ausgewählt wurde, wird der Fokus auf das ausgewählte Baum-Element gesetzt. In Einzelauswahl-Bäumen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) für die ausgewählten Baum-Elemente auf "true" gesetzt und auf keinem anderen Baum-Element im Baum vorhanden.

In Mehrfachauswahl-Bäumen haben alle ausgewählten Baum-Elemente `aria-selected="true"` gesetzt und alle Baumknoten, die auswählbar, aber nicht derzeit ausgewählt sind, haben `aria-selected="false"` gesetzt. Fügen Sie das `aria-selected`-Attribut nicht auf Baum-Elementen ein, die nicht auswählbar sind.

Wenn ein Mehrfachauswahl-Baum den Fokus erhält, wird der Fokus auf das erste Baum-Element gesetzt, wenn keine Baum-Elemente vor dem Empfang des Fokus ausgewählt wurden. Wenn ein oder mehrere Baum-Elemente vor dem Erhalt des Fokus ausgewählt wurden, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Mehrfachauswahl-Bäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baumhierarchie

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann untergeordnete, Enkel- und weitere Nachkommen `treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, außer für den Wurzel-Baumknoten, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten - es ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch untergeordnete Baum-Elemente hat, dann hat er die Rolle `treeitem` und das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut; `aria-expanded="false"` ist gesetzt, wenn der Knoten in einem geschlossenen Zustand ist, `aria-expanded="true"` ist gesetzt, wenn der Knoten in einem offenen Zustand ist.

`treeitem`-Knoten können direkte Kinder des Wurzel-Baumknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt sein oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Element verschachtelt sein, das, wenn es in einem `tree` verschachtelt ist, eine erweiterbare Sammlung von `treeitem`-Elementen ist.

Fügen Sie `aria-expanded` nicht an Endknoten ein — denen ohne Baum-Element-Kinder — da dies den Knoten gegenüber unterstützenden Technologien fälschlicherweise als Elternknoten beschreiben würde.

### DOM-Platzierung und -Vorhandensein

Alle `treeitems` sind in einem Element mit der Rolle `tree` enthalten oder gehören dazu. Wenn es `tree`-Elemente gibt, die im Markup keine direkten Nachfahren des `tree` sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden Baumcontainer ein, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht-kindlichen besessenen Elemente erscheinen in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen `tree-items`, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge dieser assistiven Technologie-Lesereihenfolge entspricht.

Wenn die vollständige Menge verfügbarer Knoten aufgrund dynamischen Ladens, während sich der Benutzer bewegt oder die Baumansicht scrollt, nicht im DOM vorhanden ist, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben.

### Zugänglicher Name

Der `tree` muss mit einem zugänglichen Namen versehen werden. Entweder referenzieren Sie ein sichtbares Label mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder geben Sie ein Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) an.

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von vertikal. Wenn das Baum-Element horizontal ausgerichtet ist, fügen Sie `aria-orientation="horizontal"` hinzu.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baum-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das den `tree` beschriftet und den erforderlichen zugänglichen Namen bereitstellt, wenn ein sichtbares Label vorhanden ist. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der den `tree` beschriftet, wenn kein sichtbares Label vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baum-Ausrichtung horizontal oder vertikal ist; Standard ist `vertical`, wenn es weggelassen wird.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf "true" gesetzt, zeigt an, dass der Benutzer mehr als ein Baum-Element aus den derzeit auswählbaren Nachfahren des Baums auswählen kann.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechter Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet sich der Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem geöffneten Knoten liegt, bewegt sich der Fokus auf den ersten untergeordneten Knoten.
<li>Wenn der Fokus auf einem Endknoten (einem Baum-Element ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Linker Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geöffneten Knoten liegt, schließt sich der Knoten.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der auch entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf seinen Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum nächsten fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum vorherigen fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Bewegt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus auf den letzten Knoten im Baum, der fokussierbar ist, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Enter</kbd></td>
<td>Führt die Standardaktion des derzeit fokussierten Knotens aus. Für Elternknoten öffnet oder schließt sie den Knoten. In Einzelauswahl-Bäumen, falls der Knoten keine Kinder hat, wählt die aktuelle Node aus, wenn sie nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Einen Buchstaben eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich auf den nächsten Knoten, dessen Name mit dem eingegebenen Buchstaben beginnt.
<li>Wenn mehrere Buchstaben schnell hintereinander eingegeben werden, bewegt sich der Fokus auf den nächsten Knoten, dessen Name mit der Zeichenkette der eingegebenen Buchstaben beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Vorauswahl ist für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Tastaturinteraktionen für Mehrfachauswahl

Es gibt zwei Interaktionsmodelle für Mehrfachauswahlbäume: Während Sie verlangen können, dass Benutzer eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> beim Navigieren durch die Liste gedrückt halten müssen, um den Auswahlzustand beizubehalten, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste gedrückt hält.

#### Empfohlenes Mehrfachauswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional kann der Fokus auch auf den ersten Knoten bewegt werden.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional kann der Fokus auch auf den letzten Knoten bewegt werden.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann, wenn alle Knoten ausgewählt sind, auch alle Knoten abgewählt werden.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikatortastenmodell, bei dem das Bewegen des Fokus ohne das Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> alle ausgewählten Knoten abwählt, außer für den fokussierten Knoten:

<table>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Strg + Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus ohne den Auswahlzustand zu ändern, auf den nächsten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus ohne den Auswahlzustand zu ändern, auf den vorherigen Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional kann der Fokus auch auf den ersten Knoten bewegt werden.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional kann der Fokus auch auf den letzten Knoten bewegt werden.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann, wenn alle Knoten ausgewählt sind, auch alle Knoten abgewählt werden.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}
