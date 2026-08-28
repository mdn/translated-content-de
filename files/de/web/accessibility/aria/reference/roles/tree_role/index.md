---
title: "ARIA: tree Rolle"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
---

Ein `tree` ist ein Widget, das dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit Eltern- und untergeordneten Knoten, die erweitert und reduziert werden können. Jedes Element in der Hierarchie kann untergeordnete Tree-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) festgelegt werden. Tree-Elemente mit untergeordneten Elementen können erweitert oder reduziert werden, wodurch ihre untergeordneten Elemente angezeigt oder ausgeblendet werden.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: Eine Baumansicht, die Ordner und Dateien anzeigt. Ordner können erweitert werden, um den Inhalt des Ordners anzuzeigen — was Dateien, Ordner oder beides sein können — und reduziert, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd> navigiert. Diese Art der Navigation ist für die meisten Browserinhalte nicht üblich, aber bei nativen Anwendungen normal und erwartet. Aus diesem Grund sollten Sie vor der Erstellung einer Baumansicht alternative Optionen in Betracht ziehen, um die erforderliche Funktionalität zu erfüllen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die nativen Anwendungen ähnlicher ist als Webanwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die erforderliche Funktionalität zu erfüllen, bevor Sie eine Baumansicht erstellen.

### Einzel- und Mehrfachauswahlbäume

Bäume können "einzeln wählbar" sein, was es Benutzern ermöglicht, nur ein Element für eine Aktion auszuwählen, oder "mehrfach wählbar", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In mehrfach wählbaren Bäumen ist `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf true gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert von `false` wird angenommen. In beiden Fällen muss der Fokus für alle Tree-Nachkommen verwaltet werden, um tastaturzugänglich zu sein.

In einigen Implementierungen von einzeln wählbaren Bäumen hat das fokussierte Element auch einen ausgewählten Status; dies wird als "Auswahl folgt dem Fokus" bezeichnet. Wenn ein einzeln wählbarer Baum den Fokus erhält und keines der Tree-Elemente ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten Knoten gesetzt. Wenn ein Tree-Element vor dem Empfang des Fokus durch den Baum ausgewählt ist, wird der Fokus auf das ausgewählte Tree-Element gesetzt. In einzeln wählbaren Bäumen wird [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` für die ausgewählten Tree-Elemente gesetzt und ist bei keinem anderen Tree-Element im Baum vorhanden.

In mehrfach wählbaren Bäumen haben alle ausgewählten Tree-Elemente `aria-selected="true"` gesetzt, und alle auswählbaren, aber derzeit nicht ausgewählten Tree-Knoten haben `aria-selected="false"` gesetzt. Fügen Sie das Attribut `aria-selected` nicht bei nicht auswählbaren Tree-Elementen ein.

Wenn ein mehrfach wählbarer Baum den Fokus erhält und keines der Tree-Elemente ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste Tree-Element gesetzt. Wenn ein oder mehrere Tree-Elemente vor dem Empfang des Fokus durch den Baum ausgewählt sind, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In mehrfach wählbaren Bäumen ist der ausgewählte Status immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Das visuelle Design sollte klar aufzeigen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baumhierarchie

In einer Baumansicht ist der `tree`-Knoten der Stammknoten; er kann untergeordnete, Enkel- und weitere Nachfahren-`treeitem`-Knoten haben.

Jedes Element, das als Baumknoten fungiert, hat die Rolle `treeitem`, mit Ausnahme des Stammbaumknotens, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten - es ist der Stammknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch untergeordnete Tree-Elemente hat, hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded); `aria-expanded="false"` wird gesetzt, wenn der Knoten in einem geschlossenen Zustand ist, `aria-expanded="true"` wird gesetzt, wenn der Knoten in einem offenen Zustand ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Stammknotens sein, in einem `treeitem`-Knoten verschachtelt oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Element verschachtelt, das bei Verschachtelung in einem `tree` eine erweiterbare Sammlung von `treeitem`-Elementen ist.

Fügen Sie `aria-expanded` nicht an Endknoten ein — jene ohne untergeordnete Tree-Elemente — da dies den Knoten fälschlicherweise als übergeordneten Knoten für Hilfstechnologien beschreiben würde.

### DOM-Platzierung und Vorhandensein

Alle `treeitem`-Elemente sind in oder von einem Element mit der Rolle `tree` enthalten oder werden von ihm verwaltet. Wenn es Tree-Elemente gibt, die keine direkten Nachkommen des `tree` im Markup sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) zum besitzenden Baumcontainer hinzu, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht kindlichen verwalteten Elemente erscheinen in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen `treeitem`-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokussierungsreihenfolge dieser Lesereihenfolge der unterstützenden Technologie entspricht.

Wenn die vollständige Menge der verfügbaren Knoten aufgrund dynamischer Ladeprozesse, die fokussiert werden oder den Baum durchscrollen, nicht im DOM vorhanden ist, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben.

### Zugänglicher Name

Dem `tree` muss ein zugänglicher Name gegeben werden. Entweder referenzieren Sie ein sichtbares Label mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder spezifizieren ein Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten Wert von [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) von vertikal. Wenn das Baum-Element horizontal ausgerichtet ist, fügen Sie `aria-orientation="horizontal"` hinzu.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baum-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das oder die Elemente, die das `tree` labeln und den erforderlichen zugänglichen Namen bereitstellen, wenn ein sichtbares Label vorhanden ist. Ansonsten verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das `tree` labelt, wenn kein sichtbares Label vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baumausrichtung horizontal oder vertikal ist; standardmäßig auf `vertical`, falls nicht angegeben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, zeigt es an, dass der Benutzer mehr als ein Tree-Element aus den gegenwärtig wählbaren Nachkommen des Baums auswählen darf.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet er den Knoten; der Fokus bleibt unverändert.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt er den Fokus zum ersten untergeordneten Knoten.
<li>Wenn der Fokus auf einem Endknoten (ein Tree-Element ohne untergeordnete Elemente) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt er den Knoten.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt er den Fokus zu seinem übergeordneten Knoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus zum nächsten Fokus-Element, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus zum vorherigen Fokus-Element, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Bewegt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus auf den letzten Fokus-Element im Baum, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Enter</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei übergeordneten Knoten öffnet oder schließt er den Knoten. In einzeln wählbaren Bäumen, wenn der Knoten keine untergeordneten Elemente hat, wählt er den aktuellen Knoten aus, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Tippen Sie ein Zeichen*</td>
<td>
<ul>
<li>Der Fokus verschiebt sich zum nächsten Knoten mit einem Namen, der mit dem getippten Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell hintereinander getippt werden, verschiebt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der getippten Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Vorauswahl beim Tippen wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Stammknoten

### Mehrfachauswahl Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für mehrfach wählbare Bäume: Während Sie verlangen können, dass Benutzer eine Modifiziertaste wie <kbd>Shift</kbd> oder <kbd>Steuerung</kbd> drücken, während sie in der Liste navigieren, um zu verhindern, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifizierungstaste hält.

#### Empfohlenes Mehrbenutzerauswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahllstatus des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahllstatus des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahllstatus des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt aufeinanderfolgende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional verschiebt er den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional verschiebt er den Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann es auch alle Knoten abwählen, wenn alle Knoten ausgewählt sind.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikator-Tastenmodell, bei dem der Fokus verschoben wird, ohne eine Modifikator-Taste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> zu halten, und alle ausgewählten Knoten außer dem fokussierten Knoten deselektiert werden:

<table>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus und ändert den Auswahllstatus des nächsten Knotens nicht.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus und ändert den Auswahllstatus des vorherigen Knotens nicht.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, ohne den Auswahllstatus zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus zum vorherigen Knoten, ohne den Auswahllstatus zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td> Wechselt den Auswahllstatus des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt aufeinanderfolgende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional verschiebt er den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional verschiebt er den Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann es auch alle Knoten abwählen, wenn alle Knoten ausgewählt sind.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}
