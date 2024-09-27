---
title: "ARIA: tree Rolle"
slug: Web/Accessibility/ARIA/Roles/tree_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `tree` ist ein Widget, das dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die sich erweitern und reduzieren lassen. Jedes Element in der Hierarchie kann untergeordnete Baumelemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role) gesetzt werden. Baumelemente, die Kinder haben, können erweitert oder reduziert werden, um deren Kinder anzuzeigen oder zu verbergen.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Auswahl von Dateisystemen: eine Baumansicht, die Ordner und Dateien anzeigt. Ordnerelemente können erweitert werden, um den Inhalt des Ordners anzuzeigen — der Dateien, Ordner oder beides umfassen kann — und reduziert werden, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit den Pfeiltasten auf der Tastatur navigiert, anstelle der <kbd>Tab</kbd>-Taste. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie, bevor Sie eine Baumansicht erstellen, alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

### Einzel- und Mehrfachauswahl in Bäumen

Bäume können "Einzelauswahl" sein, was Benutzern erlaubt, lediglich ein Element für eine Aktion auszuwählen oder "Mehrfachauswahl", wobei Benutzer in der Lage sind, mehr als ein Element für eine Aktion auszuwählen. In Mehrfachauswahl-Bäumen ist der `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert von `false` wird impliziert. In beiden Fällen muss, um tastaturzugänglich zu sein, der Fokus für alle Baum-Nachkommen verwaltet werden.

In einigen Implementierungen des Einzelauswahl-Baums hat das fokussierte Element auch einen ausgewählten Zustand; dies ist unter dem Begriff "Auswahl folgt Fokus" bekannt. Wenn ein Einzelauswahl-Baum den Fokus erhält und keines der Baumelemente vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf den ersten Knoten gesetzt. Wenn ein Baumelement vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf das ausgewählte Baumelement gesetzt. In Einzelauswahl-Bäumen ist [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) für die ausgewählten Baumelemente auf `true` gesetzt und fehlt bei keinem anderen Baumelement im Baum.

In Mehrfachauswahl-Bäumen sind alle ausgewählten Baumelemente mit `aria-selected="true"` gesetzt und alle Knoten, die auswählbar, aber derzeit nicht ausgewählt sind, haben `aria-selected="false"`. Fügen Sie das Attribut `aria-selected` nicht auf Baumelementen hinzu, die nicht auswählbar sind.

Wenn ein Mehrfachauswahl-Baum den Fokus erhält und keine Baumelemente vor dem Erhalt des Fokus ausgewählt sind, wird der Fokus auf das erste Baumelement gesetzt. Wenn ein oder mehrere Baumelemente vor dem Empfang des Fokus ausgewählt sind, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Mehrfachauswahl-Bäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann in einem typischen Dateisystem-Navigator der Benutzer den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, beispielsweise Kopieren oder Verschieben. Das visuelle Design sollte deutlich machen, welche Elemente ausgewählt und welches Element fokussiert ist.

### Baum-Hierarchie

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann untergeordnete, Enkel- und weitere Nachkommen-`treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, außer für den Wurzelbaumnoten, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten – er ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist und untergeordnete Baumelemente hat, dann hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded); `aria-expanded="false"` ist gesetzt, wenn der Knoten geschlossen ist, `aria-expanded="true"` ist gesetzt, wenn der Knoten geöffnet ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Wurzelknotens sein, in einem `treeitem`-Knoten verschachtelt oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Element verschachtelt, das, wenn es in einem `tree`-Element verschachtelt ist, eine erweiterbare Sammlung von `treeitem`-Elementen darstellt.

Fügen Sie `aria-expanded` nicht bei Endknoten hinzu — solche ohne `treeitem`-Kinder — da dies den Knoten für unterstützende Technologien fälschlicherweise als übergeordneten Knoten beschreiben würde.

### DOM-Platzierung und Anwesenheit

Alle `treeitems` sind in einem Element mit der Rolle `tree` enthalten oder gehören diesem. Wenn es Baumelemente gibt, die keine direkten Nachkommen des `tree` im Markup sind, fügen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) dem besitzenden Baumcontainer hinzu, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht-Kind-besessenen Elemente erscheinen in der Lesereihenfolge in der Sequenz, in der sie referenziert werden und nach allen `treeitems`, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokuseringfolge mit dieser unterstützenden Technologie-Lesereihenfolge übereinstimmt.

Wenn der komplette Satz verfügbarer Knoten nicht im DOM vorhanden ist, aufgrund dynamischen Ladens, während der Benutzer den Fokus verschiebt oder durch den Baum scrollt, hat jeder Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) angegeben.

### Barrierefreier Name

Dem `tree` muss ein barrierefreier Name gegeben werden. Entweder verweisen Sie auf eine sichtbare Beschriftung mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder spezifizieren Sie eine Beschriftung mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Menürichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von vertikal. Wenn das Baum-Element horizontal ausgerichtet ist, fügen Sie `aria-orientation="horizontal"` hinzu.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baumelementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das die `tree`-Rolle beschriftet und den erforderlichen barrierefreien Namen bereitstellt, wenn eine sichtbare Beschriftung vorhanden ist. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der den `tree` beschriftet, wenn keine sichtbare Beschriftung vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Baumausrichtung horizontal oder vertikal ist; Standard ist `vertical`, wenn nicht angegeben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, zeigt an, dass der Benutzer mehr als ein Baumelement aus den derzeit auswählbaren Nachkommen des `tree` auswählen kann.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet er den Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus auf den ersten untergeordneten Knoten.
<li>Wenn der Fokus auf einem Endknoten (einem `treeitem` ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt er den Knoten.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf seinen übergeordneten Knoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Bewegt den Fokus auf den nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus auf den vorherigen Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Start</kbd></td>
<td> Bewegt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Bewegt den Fokus auf den letzten Knoten im Baum, der fokussierbar ist, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des derzeit fokussierten Knotens aus. Für übergeordnete Knoten öffnet oder schließt er den Knoten. In Einzelauswahl-Bäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Geben Sie ein Zeichen ein*</td>
<td>
<ul>
<li>Der Fokus bewegt sich auf den nächsten Knoten, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell hintereinander eingegeben werden, bewegt sich der Fokus auf den nächsten Knoten, dessen Name mit der eingegebenen Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die auf derselben Ebene wie der aktuelle Knoten sind.
</td>
</tr>
</table>

\* Vorauswahl wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Stammknoten.

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahl-Bäume: Während Sie verlangen können, dass Benutzer eine Modifikator-Taste, wie <kbd>Shift</kbd> oder <kbd>Control</kbd>, drücken, während sie in der Liste navigieren, um zu vermeiden, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, bei dem der Benutzer keine Modifikatortaste halten muss.

#### Empfohlenes Mehrbenutzerauswahlmodell

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
<td><kbd>Control + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt es den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt es den Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikatortastenmodell, bei dem das Verschieben des Fokus ohne das Halten einer Modifikatortaste, wie <kbd>Shift</kbd> oder <kbd>Control</kbd>, alle ausgewählten Knoten abwählt, außer dem fokussierten Knoten:

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
<td> Bewegt den Fokus auf den nächsten Knoten, ohne den Auswahlzustand zu ändern.
</td>
</tr>
<tr>
<td><kbd>Control + Pfeil nach oben</kbd></td>
<td> Bewegt den Fokus auf den vorherigen Knoten, ohne den Auswahlzustand zu ändern.
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
<td><kbd>Control + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt es den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt es den Fokus auf den letzten Knoten.
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
