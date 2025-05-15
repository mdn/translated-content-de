---
title: "ARIA: tree-Rolle"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit Eltern- und Kindknoten, die erweitert und reduziert werden können. Jedes Element in der Hierarchie kann Kindbaum-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) festgelegt werden. Baum-Elemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder zu verbergen.

Ein Beispiel für einen `tree` ist eine Dateisystem-Auswahlbenutzeroberfläche: eine Baumansicht, die Ordner und Dateien anzeigt. Ordner-Elemente können erweitert werden, um den Inhalt des Ordners anzuzeigen — dies können Dateien, Ordner oder beides sein — und reduziert werden, um ihren Inhalt zu verbergen.

ARIA Baumansichten werden hauptsächlich mit den Pfeiltasten der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist für die meisten Browser-Inhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie vor der Erstellung einer Baumansicht alternative Optionen in Betracht ziehen, um die erforderliche Funktionalität zu erreichen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die erforderliche Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

### Einzelne und mehrere Auswahlbäume

Bäume können "Einzelauswahl" sein, wodurch Benutzer nur ein Element für eine Aktion auswählen können, oder "Mehrfachauswahl", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In Mehrfachauswahlbäumen wird das `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf true gesetzt. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` ist impliziert. In beiden Fällen muss der Fokus für alle Nachfahren des Baums verwaltet werden, um Tastaturzugänglichkeit zu gewährleisten.

In einigen Implementierungen eines Einzelauswahlbaums hat das fokussierte Element auch einen ausgewählten Zustand; dies wird als "Auswahl folgt dem Fokus" bezeichnet. Wenn ein Einzelauswahlbaum den Fokus erhält, wird der Fokus auf den ersten Knoten gesetzt, wenn vor dem Empfang des Fokus kein Baum-Element ausgewählt ist. Wenn ein Baum-Element vor dem Empfang des Fokus ausgewählt ist, wird der Fokus auf das ausgewählte Baum-Element gesetzt. In Einzelauswahlbäumen wird [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) für die ausgewählten Baum-Elemente auf `true` gesetzt und ist auf keinem anderen Baum-Element im Baum vorhanden.

In Mehrfachauswahlbäumen haben alle ausgewählten Baum-Elemente `aria-selected="true"` gesetzt, und alle auswählbaren, aber derzeit nicht ausgewählten Baum-Elemente haben `aria-selected="false"` gesetzt. Schließen Sie das Attribut `aria-selected` nicht für Baum-Elemente ein, die nicht auswählbar sind.

Wenn ein Mehrfachauswahlbaum den Fokus erhält, wird der Fokus auf das erste Baum-Element gesetzt, wenn vor dem Empfang des Fokus kein Baum-Element ausgewählt ist. Wenn ein oder mehrere Baum-Elemente vor dem Empfang des Fokus ausgewählt sind, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Mehrfachauswahlbäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baum-Hierarchie

In einer Baumansicht ist der `tree`-Knoten der Stammknoten; er kann Kind-, Enkel- und weitere Nachfahren-`treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, außer dem Stamm-Baumknoten, der die Rolle `tree` hat. Ein `tree` hat keinen Elternelement-`tree`-Knoten - er ist der Stammknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch Nachfahren- Baum-Elemente hat, dann hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded); `aria-expanded="false"` wird gesetzt, wenn der Knoten im geschlossenen Zustand ist, `aria-expanded="true"` wird gesetzt, wenn der Knoten im offenen Zustand ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Stammknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Element verschachtelt, welches, wenn es in einem `tree` verschachtelt ist, eine erweiterbare Sammlung von `treeitem`-Elementen ist.

Schließen Sie `aria-expanded` nicht in Endknoten ein — jene ohne Baum-Element-Kinder — da dies dem Hilfstechnologien den Knoten fälschlicherweise als Elternknoten beschreiben würde.

### DOM-Platzierung und Präsenz

Alle `treeitem` sind von einem Element mit der Rolle `tree` enthalten oder besitzen dieses. Wenn es Baum-Elemente gibt, die in der Markierung keine direkten Nachkommen des `tree` sind, schließen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden Baumcontainer ein, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Diese nicht kindlichen besessenen Elemente erscheinen in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden und nach allen Baum-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge dieser Lesereihenfolge für unterstützende Technologien entspricht.

Wenn der vollständige Satz verfügbarer Knoten aufgrund dynamischer Ladeoperationen beim Bewegen des Fokus oder Scrollen im Baum nicht im DOM vorhanden ist, hat jeder Knoten die Attribute [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben.

### Barrierefreier Name

Der `tree` muss mit einem barrierefreien Namen versehen werden. Entweder referenzieren Sie ein sichtbares Label mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder spezifizieren Sie ein Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Menüorientierung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von vertikal. Wenn das Tree-Element horizontal ausgerichtet ist, schließen Sie `aria-orientation="horizontal"` ein.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine erweiterbare Sammlung von Baum-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das/die das `tree` beschriftet, und bietet den erforderlichen barrierefreien Namen, wenn ein sichtbares Label vorhanden ist. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenkettenwert, der das `tree` labelt, wenn kein sichtbares Label vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Baumorientierung horizontal oder vertikal ist; Standardwert ist `vertical`, falls weggelassen.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, wird angegeben, dass der Benutzer mehr als ein Baum-Element aus den derzeit im Baum auswählbaren Nachkommen auswählen kann.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, der die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechter Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus auf den ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten liegt (ein Baum-Element ohne Kinder), tut es nichts.
</td>
</tr>
<tr>
<td><kbd>Linker Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem Kindknoten liegt, der auch entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf den Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, tut es nichts.
</td>
</tr>
<tr>
<td><kbd>Nach unten Pfeil</kbd></td>
<td> Bewegt den Fokus auf den nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Nach oben Pfeil</kbd></td>
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
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten öffnet oder schließt es den Knoten. In Einzelauswahlbäumen, wenn der Knoten keine Kinder hat, wird der aktuelle Knoten ausgewählt, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Einen Buchstaben eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich auf den nächsten Knoten mit einem Namen, der mit dem eingegebenen Buchstaben beginnt.
<li>Wenn mehrere Buchstaben in schneller Folge eingegeben werden, bewegt sich der Fokus auf den nächsten Knoten mit einem Namen, der mit der Zeichenkette der eingegebenen Buchstaben beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Tastaturvorschau wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten.

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahlbäume: Während Sie verlangen können, dass Benutzer eine Modifikatortaste, wie <kbd>Shift</kbd> oder <kbd>Control</kbd>, beim Navigieren durch die Liste drücken, um zu vermeiden, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste hält.

#### Empfohlenes Modell für mehrere Benutzerauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahlzustand des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Nach unten Pfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Nach oben Pfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

#### Alternatives Mehrfachauswahl-Modell

Das alternative Mehrfachauswahl-Modell ist ein Modifikatortastenmodell, bei dem das Bewegen des Fokus ohne das Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> alle ausgewählten Knoten außer dem fokussierten Knoten abwählt:

<table>
<tr>
<td><kbd>Shift + Nach unten Pfeil</kbd></td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Nach oben Pfeil</kbd></td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Strg + Nach unten Pfeil</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, ohne den Auswahlzustand zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Nach oben Pfeil</kbd></td>
<td> Bewegt den Fokus zum vorherigen Knoten, ohne den Auswahlzustand zu ändern.
</td>
</tr>
<tr>
<td><kbd>Strg + Leertaste</kbd></td>
<td> Wechselt den Auswahlzustand des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Start</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus auf den letzten Knoten.
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
