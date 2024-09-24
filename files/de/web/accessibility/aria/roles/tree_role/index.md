---
title: "ARIA: tree-Rolle"
slug: Web/Accessibility/ARIA/Roles/tree_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Jedes Element in der Hierarchie kann untergeordnete Tree-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role) festgelegt werden. Tree-Elemente, die untergeordnete Elemente haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder zu verbergen.

Ein Beispiel für ein `tree` ist eine Dateisystem-Auswahl-Benutzeroberfläche: eine Baumansicht, die Ordner und Dateien anzeigt. Ordner können erweitert werden, um den Inhalt des Ordners anzuzeigen — was Dateien, Ordner oder beides sein können — und reduziert werden, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist für den meisten Browser-Inhalt nicht üblich, aber normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie vor der Erstellung einer Baumansicht alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erfüllen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erfüllen, bevor Sie eine Baumansicht erstellen.

### Einzel- und Mehrfachauswahl-Bäume

Bäume können "Einzel-Auswahl" sein, bei denen Benutzer nur ein Element für eine Aktion auswählen können, oder "Multi-Auswahl", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In Mehrfachauswahl-Bäumen ist das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` wird angenommen. In beiden Fällen muss der Fokus für alle untergeordneten Bäumelemente verwaltet werden, um mit der Tastatur zugänglich zu sein.

In einigen Implementierungen von Einzel-Auswahl-Bäumen hat das fokussierte Element auch einen ausgewählten Zustand; dies ist als "Auswahl folgt Fokus" bekannt. Wenn ein Einzel-Auswahl-Baum den Fokus erhält, wird der Fokus auf den ersten Knoten gesetzt, wenn vorher kein Baum-Element ausgewählt war. Wenn ein Baum-Element ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das ausgewählte Baum-Element gesetzt. In Einzel-Auswahl-Bäumen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) für die ausgewählten Baum-Elemente auf `true` gesetzt und ist bei keinem anderen Baum-Element im Baum vorhanden.

In Mehrfachauswahl-Bäumen haben alle ausgewählten Baum-Elemente `aria-selected="true"` gesetzt, und alle Baum-Element-Knoten, die auswählbar sind, aber derzeit nicht ausgewählt, haben `aria-selected="false"` gesetzt. Fügen Sie das `aria-selected`-Attribut bei Baum-Elementen, die nicht auswählbar sind, nicht hinzu.

Wenn ein Mehrfachauswahl-Baum den Fokus erhält, wird der Fokus auf das erste Baum-Element gesetzt, wenn vorher kein Baum-Element ausgewählt war. Wenn ein oder mehrere Baum-Elemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Mehrfachauswahl-Bäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Beispielsweise kann in einem typischen Dateisystem-Navigationsprogramm der Benutzer den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion, wie Kopieren oder Verschieben, auszuwählen. Das visuelle Design sollte deutlich machen, welche Elemente ausgewählt und welches Element fokussiert sind.

### Baumbereitschaft

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann untergeordnete, untergeordnete und weitere Nachkommen-`treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, mit Ausnahme des Wurzelbaumknotens, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten - er ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum geschachtelt ist als auch untergeordnete Baum-Elemente hat, dann hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded); `aria-expanded="false"` ist gesetzt, wenn der Knoten geschlossen ist, `aria-expanded="true"` ist gesetzt, wenn der Knoten geöffnet ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Wurzelknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt sein oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Element verschachtelt sein, das, wenn es in einem `tree` verschachtelt ist, eine erweiterbare Sammlung von Treeitem-Elementen ist.

Fügen Sie `aria-expanded` nicht bei Endknoten ein — diejenigen ohne untergeordnete Baum-Elemente — da dies den Knoten fälschlicherweise als übergeordneten Knoten für unterstützende Technologien beschreiben würde.

### DOM-Platzierung und Präsenz

Alle Baum-Elemente sind in einem Element mit der Rolle `tree` enthalten oder von einem solchen besessen. Falls es Baum-Elemente gibt, die keine direkten Nachkommen des `tree` in der Markierung sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem besitzenden Baumcontainer hinzu, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht-untergeordneten, besessenen Elemente erscheinen in der Leserichtung in der Reihenfolge, in der sie referenziert werden, und nach allen Baum-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge mit dieser Lesreihenfolge für unterstützende Technologien übereinstimmt.

Wenn der vollständige Satz verfügbarer Knoten aufgrund dynamischen Ladens nicht im DOM vorhanden ist, während der Benutzer den Fokus im Baum bewegt oder scrollt, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) angegeben.

### Barrierefreier Name

Dem `tree` muss ein barrierefreier Name zugewiesen werden. Entweder über ein sichtbares Etikett referenzieren, das mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert wird, oder ein Etikett mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) angeben.

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von vertikal. Wenn das `tree`-Element horizontal ausgerichtet ist, fügen Sie `aria-orientation="horizontal"` hinzu.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baumelementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das den `tree` bezeichnet und den erforderlichen barrierefreien Namen bereitstellt, wenn ein sichtbares Etikett vorhanden ist. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenkettenwert, der den `tree` bezeichnet, wenn kein sichtbares Etikett vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : gibt an, ob die Baum-Ausrichtung horizontal oder vertikal ist; Standardwert ist `vertical`, wenn ausgelassen.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, wird angezeigt, dass der Benutzer mehr als ein Baum-Element aus den aktuellen wählbaren Nachkommen des Baums auswählen kann.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechte Pfeiltaste</kbd></td>
<td>
<ul>
<li> Wenn der Fokus auf einem geschlossenen Knoten ist, öffnet der Knoten; der Fokus bewegt sich nicht.
<li> Wenn der Fokus auf einem geöffneten Knoten ist, bewegt sich der Fokus auf den ersten Kindknoten.
<li> Wenn der Fokus auf einem Endknoten (ein Baumelement ohne Kinder) ist, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Linke Pfeiltaste</kbd></td>
<td>
<ul>
<li> Wenn der Fokus auf einem geöffneten Knoten ist, wird der Knoten geschlossen.
<li> Wenn der Fokus auf einem Kindknoten liegt, der ebenfalls entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf seinen übergeordneten Knoten.
<li> Wenn der Fokus auf einem geschlossenen Baum ist, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus auf den nächsten fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus auf den vorherigen fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pos1</kbd></td>
<td> Bewegt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus auf den letzten fokussierbaren Knoten im Baum, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des derzeit fokussierten Knotens aus. Bei übergeordneten Knoten öffnet oder schließt er den Knoten. In Einzel-Auswahl-Bäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten aus, wenn er noch nicht ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li> Der Fokus bewegt sich auf den nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li> Wenn mehrere Zeichen schnell hintereinander eingegeben werden, bewegt sich der Fokus auf den nächsten Knoten mit einem Namen, der mit dem String beginnt, den die eingegebenen Zeichen ergeben.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister auf derselben Ebene wie der aktuelle Knoten.
</td>
</tr>
</table>

\* Das Eintippen im Voraus wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten.

### Tastaturinteraktionen für Mehrfachauswahl

Es gibt zwei Interaktionsmodelle für Mehrfachauswahl-Bäume: Während Sie verlangen können, dass Benutzer eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> drücken, während sie die Liste navigieren, um Auswahlzustände nicht zu verlieren, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste hält.

#### Empfohlenes Multi-User-Auswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Abwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Aufwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten von dem zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Pos1</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum ersten Knoten aus. Optionale Verschiebung des Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum letzten Knoten aus. Optionale Verschiebung des Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikatortastenmodell, bei dem der Fokus ohne Halten einer Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> alle ausgewählten Knoten außer dem fokussierten Knoten abwählt:

<table>
<tr>
<td><kbd>Umschalt + Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Strg + Abwärtspfeil</kbd></td>
<td> Ohne den Auswahlzustand zu ändern, bewegt sich der Fokus auf den nächsten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Aufwärtspfeil</kbd></td>
<td> Ohne den Auswahlzustand zu ändern, bewegt sich der Fokus auf den vorherigen Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten von dem zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Pos1</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum ersten Knoten aus. Optionale Verschiebung des Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum letzten Knoten aus. Optionale Verschiebung des Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch
