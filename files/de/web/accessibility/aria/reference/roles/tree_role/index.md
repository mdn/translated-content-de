---
title: "ARIA: tree-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Jedes Element in der Hierarchie kann untergeordnete Tree-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) festgelegt werden. Tree-Elemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder zu zeigen oder zu verbergen.

Ein Beispiel für ein `tree` ist eine Benutzeroberfläche zur Dateiauswahl: Eine Baumansicht, die Ordner und Dateien anzeigt. Ordner können erweitert werden, um den Inhalt des Ordners anzuzeigen – dieser kann Dateien, Ordner oder beides enthalten – und reduziert werden, um deren Inhalt zu verbergen.

ARIA-Baumansichten werden in erster Linie mit den Pfeiltasten auf der Tastatur navigiert, anstatt mit der <kbd>Tab</kbd>-Taste. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, aber für native Anwendungen normal und erwartet. Aus diesem Grund sollten Sie vor dem Erstellen einer Baumansicht alternative Optionen in Betracht ziehen, um die benötigte Funktionalität bereitzustellen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die nativen Anwendungen ähnlicher ist als Webanwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität bereitzustellen, bevor Sie eine Baumansicht erstellen.

### Einzelne und mehrfache Auswahl in Bäumen

Bäume können "einzelne Auswahl" sein, wobei Benutzer nur ein Element für eine Aktion wählen können, oder "mehrfache Auswahl", wobei Benutzer mehr als ein Element für eine Aktion auswählen können. In Bäumen zur Mehrfachauswahl ist das `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf true gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert von `false` ist impliziert. In beiden Fällen muss der Fokus für alle Tree-Nachkommen verwaltet werden, um tastaturzugänglich zu sein.

In einigen Implementierungen eines Baumes zur Einzelauswahl hat das fokussierte Element ebenfalls einen ausgewählten Zustand; dies wird als "Auswahl folgt dem Fokus" bezeichnet. Wenn ein Baum zur Einzelauswahl den Fokus erhält und kein Tree-Element ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten Knoten gesetzt. Wenn ein Tree-Element ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das ausgewählte Tree-Element gesetzt. In Bäumen zur Einzelauswahl ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) für die ausgewählten Tree-Elemente auf `true` gesetzt und ist auf keinem anderen Tree-Element im Baum vorhanden.

In Bäumen zur Mehrfachauswahl sind alle ausgewählten Tree-Elemente auf `aria-selected="true"` gesetzt und alle Tree-Element-Knoten, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected="false"` gesetzt. Schließen Sie das `aria-selected`-Attribut nicht auf Tree-Elementen ein, die nicht auswählbar sind.

Wenn ein Baum zur Mehrfachauswahl den Fokus erhält und kein Tree-Element ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste Tree-Element gesetzt. Wenn eines oder mehrere Tree-Elemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Bäumen zur Mehrfachauswahl ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Explorer den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, z. B. Kopieren oder Verschieben. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Hierarchie des Baums

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann untergeordnete, Enkel- und weiter nachfolgende `treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, außer dem Wurzelbaumknoten, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten - er ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch Nachkommen von Tree-Elementen hat, hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded); `aria-expanded="false"` ist gesetzt, wenn der Knoten geschlossen ist, `aria-expanded="true"` ist gesetzt, wenn der Knoten geöffnet ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Wurzelknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Element verschachtelt, das, wenn es in einem `tree` verschachtelt ist, eine erweiterbare Sammlung von Tree-Elementen ist.

Schließen Sie `aria-expanded` nicht auf Endknoten ein – diejenigen ohne Tree-Element-Kinder – da dies das Element fälschlicherweise als übergeordnetes Element für unterstützende Technologien beschreiben würde.

### DOM-Platzierung und Präsenz

Alle Tree-Elemente sind in einem Element mit der Rolle `tree` enthalten oder werden von ihm besessen. Wenn es Tree-Elemente gibt, die nicht direkte Nachkommen des `tree` im Markup sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden Baum-Container hinzu, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht kindlich besessenen Elemente erscheinen in der Leseordnung in der Reihenfolge, in der sie referenziert werden, und nach allen Tree-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge dieser Leseordnung für unterstützende Technologien entspricht.

Wenn die vollständige Menge der verfügbaren Knoten aufgrund von dynamischem Laden nicht im DOM vorhanden ist, während der Benutzer den Fokus bewegt oder durch den Baum scrollt, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) spezifiziert.

### Zugänglicher Name

Dem `tree` muss ein zugänglicher Name zugewiesen werden. Entweder verweisen Sie auf ein sichtbares Etikett, referenziert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), oder spezifizieren Sie ein Etikett mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von vertikal. Wenn das Baum-Element horizontal ausgerichtet ist, schließen Sie `aria-orientation="horizontal"` ein.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baumelementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das/die den `tree` etikettiert und den erforderlichen zugänglichen Namen bereitstellt, wenn ein sichtbares Etikett vorhanden ist. Verwenden Sie andernfalls `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgewert, der den `tree` etikettiert, wenn kein sichtbares Etikett vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baumausrichtung horizontal oder vertikal ist; standardmäßig auf `vertical`, wenn weggelassen.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, zeigt dies an, dass der Benutzer mehr als ein Tree-Element aus den derzeit auswählbaren Nachkommen des Baums auswählen kann.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus zum ersten untergeordneten Knoten.
<li>Wenn der Fokus auf einem Endknoten (einem Tree-Element ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt sich der Knoten.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der ebenfalls entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem übergeordneten Knoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus zum nächsten fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus zum vorherigen fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Bewegt den Fokus zum ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus zum letzten fokussierbaren Knoten im Baum, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Für übergeordnete Knoten öffnet oder schließt er den Knoten. In Bäumen zur Einzelauswahl, wenn der Knoten keine Kinder hat, wird der aktuelle Knoten ausgewählt, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Geben Sie ein Zeichen ein*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen in rascher Folge eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der eingegebenen Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Vorausschauendes Schreiben wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Tastaturinteraktionen bei Mehrfachauswahl

Es gibt zwei Interaktionsmodelle für Bäume zur Mehrfachauswahl: Obwohl Sie verlangen können, dass Benutzer beim Navigieren durch die Liste eine Modifikatortaste, wie <kbd>Shift</kbd> oder <kbd>Strg</kbd>, drücken, um den Auswahlstatus nicht zu verlieren, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste gedrückt hält.

#### Empfohlenes Multi-User-Auswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlstatus des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlstatus des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlstatus des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten wieder abwählen.
</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikatorschlüsselmodell, bei dem das Bewegen des Fokus ohne Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> alle ausgewählten Knoten außer dem fokussierten Knoten abwählt:

<table>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlstatus des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlstatus des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus ohne Änderung des Auswahlstatus zum nächsten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus ohne Änderung des Auswahlstatus zum vorherigen Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td> Schaltet den Auswahlstatus des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten wieder abwählen.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}
