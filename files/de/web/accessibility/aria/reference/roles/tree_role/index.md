---
title: "ARIA: tree Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und eingeklappt werden können. Jedes Element in der Hierarchie kann untergeordnete Baum-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) festgelegt werden. Baum-Elemente, die Kinder haben, können erweitert oder eingeklappt werden, um ihre Kinder anzuzeigen oder zu verbergen.

Ein Beispiel für einen `tree` ist eine Dateisystem-Auswahl Benutzeroberfläche: eine Baumansicht, die Ordner und Dateien anzeigt. Ordner-Elemente können erweitert werden, um den Inhalt des Ordners anzuzeigen – dieser kann Dateien, Ordner oder beides enthalten – und eingeklappt werden, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit den Pfeiltasten auf der Tastatur und nicht mit der <kbd>Tab</kbd>-Taste navigiert. Diese Art der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch für native Anwendungen normal und erwartet. Aus diesem Grund sollten Sie, bevor Sie eine Baumansicht erstellen, alternative Optionen in Betracht ziehen, um die Funktionalität zu adressieren, die Sie benötigen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die Funktionalität zu adressieren, die Sie benötigen, bevor Sie eine Baumansicht erstellen.

### Einzelne und mehrere Auswahl-Bäume

Bäume können "Einzelauswahl" sein, was es Benutzern ermöglicht, nur ein Element für eine Aktion auszuwählen, oder "Mehrfachauswahl", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In Mehrfachauswahl-Bäumen ist der `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf true gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` wird angenommen. In beiden Fällen muss der Fokus für alle Baumnachkommen verwaltet werden, um mit der Tastatur zugänglich zu sein.

In einigen Implementierungen des Einzelauswahl-Baums hat das fokussierte Element auch einen ausgewählten Zustand; dies wird als "Selection follows Focus" bezeichnet. Wenn ein Einzelauswahl-Baum den Fokus erhält und keines der Baum-Elemente ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten Knoten gesetzt. Wenn ein Baum-Element ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das ausgewählte Baum-Element gesetzt. In Einzelauswahl-Bäumen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) auf `true` für die ausgewählten Baum-Elemente gesetzt und auf keinem anderen Baum-Element im Baum vorhanden.

In Mehrfachauswahl-Bäumen haben alle ausgewählten Baum-Elemente `aria-selected="true"` gesetzt und alle Baumknoten, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected="false"` gesetzt. Verwenden Sie das `aria-selected`-Attribut nicht für Baum-Elemente, die nicht auswählbar sind.

Wenn ein Mehrfachauswahl-Baum den Fokus erhält und keines der Baum-Elemente ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste Baum-Element gesetzt. Wenn eines oder mehrere Baum-Elemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf den ersten gewählten Knoten gesetzt.

In Mehrfachauswahl-Bäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus nutzen, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, wie z. B. Kopieren oder Verschieben. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baumhierarchie

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann untergeordnete, Enkel- und weitere Nachkommen-`treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, außer für den Wurzel-Baumknoten, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten – er ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch untergeordnete Baum-Elemente hat, dann hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded); `aria-expanded="false"` wird gesetzt, wenn der Knoten im geschlossenen Zustand ist, `aria-expanded="true"`, wenn der Knoten im offenen Zustand ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Wurzelknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt sein oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Element verschachtelt sein, welches, wenn im `tree` verschachtelt, eine erweiterbare Sammlung von `treeitem`-Elementen ist.

Fügen Sie `aria-expanded` nicht für Endknoten – solche ohne untergeordnete Baum-Elemente – hinzu, da dies den Knoten gegenüber unterstützenden Technologien fälschlicherweise als übergeordneten Knoten beschreiben würde.

### DOM-Platzierung und Präsenz

Alle treeitems sind von einem Element mit der Rolle `tree` enthalten oder werden von einem solchen Element verwaltet. Wenn es Baum-Elemente gibt, die keine direkten Nachkommen des `tree` im Markup sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden Baum-Container hinzu, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht-kindlichen besessenen Elemente erscheinen in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Baum-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokus-Reihenfolge mit dieser Lesereihenfolge für unterstützende Technologien übereinstimmt.

Wenn der vollständige Satz verfügbarer Knoten nicht im DOM vorhanden ist, da sie dynamisch geladen werden, während der Benutzer den Fokus im Baum bewegt oder scrollt, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben.

### Zugänglicher Name

Der `tree` muss mit einem zugänglichen Namen versehen werden. Entweder wird ein sichtbares Etikett mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert oder ein Etikett wird mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) angegeben.

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert von vertikal. Wenn das Baum-Element horizontal ausgerichtet ist, fügen Sie `aria-orientation="horizontal"` hinzu.

### Zuverlässige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baum-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das Element oder die Elemente, die den `tree` kennzeichnen und den erforderlichen zugänglichen Namen bereitstellen, wenn ein sichtbares Etikett vorhanden ist. Andernfalls `aria-label` verwenden.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgewert, der den `tree` kennzeichnet, wenn kein sichtbares Etikett vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baumausrichtung horizontal oder vertikal ist; standardmäßig ist vertikal, wenn es weggelassen wird.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, gibt dies an, dass der Benutzer mehr als ein Baum-Element aus den aktuellen auswählbaren Nachkommen des Baums auswählen darf.

### Tastatur-Interaktionen

Für einen vertikal orientierten `tree`, der die Standardorientierung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus auf den ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten liegt (ein Baum-Element ohne Kinder), passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem Kindknoten liegt, der auch entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem übergeordneten Knoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus zum vorherigen Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Bewegt den Fokus zum ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus zum letzten Knoten im Baum, der fokussierbar ist, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Für übergeordnete Knoten öffnet oder schließt es den Knoten. In Einzelauswahl-Bäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten aus, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Geben Sie ein Zeichen ein*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen in schneller Folge eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der Zeichenfolge der eingegebenen Zeichen beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Typvorausschau wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten.

### Mehrfachauswahl-Tastatur-Interaktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahl-Bäume: Während Sie verlangen können, dass Benutzer beim Navigieren in der Liste eine Modifikator-Taste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten, um zu vermeiden, dass Auswahldaten verloren gehen, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikator-Taste gedrückt hält.

#### Empfohlenes Modell zur Mehrbenutzerauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt er den Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt er den Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahl-Modell

Das alternative Mehrfachauswahlmodell ist ein Modifikator-Tastemodell, bei dem das Bewegen des Fokus ohne das Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> alle ausgewählten Knoten außer dem fokussierten Knoten abwählt:

<table>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus und schaltet den Auswahlzustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Control + Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus ohne Änderung des Auswahlzustandes zum nächsten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus ohne Änderung des Auswahlzustandes zum vorherigen Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt er den Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt er den Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.
</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch
