---
title: "ARIA: tree Rolle"
slug: Web/Accessibility/ARIA/Roles/tree_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `tree` ist ein Widget, das es dem Benutzer ermöglicht, ein oder mehrere Elemente aus einer hierarchisch organisierten Sammlung auszuwählen.

## Beschreibung

Ein `tree`-Widget ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Jedes Element in der Hierarchie kann untergeordnete Tree-Elemente haben, die mit [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role) festgelegt werden. Tree-Elemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder zu verbergen.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Ordner können erweitert werden, um den Inhalt des Ordners anzuzeigen – was Dateien, Ordner oder beides sein kann – und reduziert werden, um den Inhalt zu verbergen.

ARIA-Baumansichten werden hauptsächlich mit Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist nicht üblich für die meisten Browserinhalte, aber normal und erwartet bei nativen Anwendungen. Aus diesem Grund sollten Sie, bevor Sie eine Baumansicht erstellen, alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erfüllen.

> [!WARNING]
> Baumansichten verwenden eine Navigation, die eher nativen Anwendungen ähnelt als Webanwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

### Einzel- und Mehrfachauswahlbäume

Bäume können "Einzelauswahl" sein, was es Benutzern erlaubt, nur ein Element für eine Aktion auszuwählen, oder "Mehrfachauswahl", bei der Benutzer mehr als ein Element für eine Aktion auswählen können. In Mehrfachauswahlbäumen ist der `tree` mit [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) auf true gesetzt. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` wird impliziert. In beiden Fällen muss der Fokus für alle Abkömmlinge des Baumes verwaltet werden, um Tastaturzugänglichkeit zu gewährleisten.

In einigen Implementierungen eines Einzelauswahlbaums hat das fokussierte Element auch einen ausgewählten Zustand; das wird als "Selektion folgt dem Fokus" bezeichnet. Wenn ein Einzelauswahlbaum den Fokus erhält und keine der Tree-Elemente ausgewählt sind, wird der Fokus auf den ersten Knoten gesetzt. Wenn ein Tree-Element vor dem Fokuserhalt ausgewählt ist, wird der Fokus auf das ausgewählte Tree-Element gesetzt. In Einzelauswahlbäumen wird [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) für die ausgewählten Tree-Elemente auf `true` gesetzt und ist bei keinem anderen Tree-Element im Baum vorhanden.

In Mehrfachauswahlbäumen haben alle ausgewählten Tree-Elemente `aria-selected="true"` gesetzt, und alle Tree-Knotenelemente, die auswählbar, aber momentan nicht ausgewählt sind, haben `aria-selected="false"` gesetzt. Schließen Sie das `aria-selected` Attribut nicht bei Tree-Elementen ein, die nicht auswählbar sind.

Wenn ein Mehrfachauswahlbaum den Fokus erhält und keines der Tree-Elemente vor dem Fokuserhalt ausgewählt sind, wird der Fokus auf das erste Tree-Element gesetzt. Wenn eines oder mehrere Tree-Elemente vor dem Fokuserhalt ausgewählt sind, wird der Fokus auf den ersten ausgewählten Knoten gesetzt.

In Mehrfachauswahlbäumen ist der ausgewählte Zustand immer unabhängig vom Fokus. Zum Beispiel kann der Benutzer in einem typischen Dateisystemnavigator den Fokus verschieben, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, wie Kopieren oder Verschieben. Das visuelle Design sollte klar darstellen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

### Baumhierarchie

In einer Baumansicht ist der `tree`-Knoten der Wurzelknoten; er kann übergeordnete, untergeordnete und weitere nachfolgende `treeitem`-Knoten haben.

Jedes Element, das als Baumknoten dient, hat die Rolle `treeitem`, mit Ausnahme des Wurzelknotens des Baums, der die Rolle `tree` hat. Ein `tree` hat keinen übergeordneten `tree`-Knoten - er ist der Wurzelknoten. Wenn ein Knoten sowohl in einem Baum verschachtelt ist als auch untergeordnete Tree-Elemente hat, dann hat er die Rolle `treeitem` und das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded); `aria-expanded="false"` wird gesetzt, wenn der Knoten im geschlossenen Zustand ist, `aria-expanded="true"` wird gesetzt, wenn der Knoten im offenen Zustand ist.

`treeitem`-Knoten können direkte Kinder des `tree`-Wurzelknotens sein, innerhalb eines `treeitem`-Knotens verschachtelt oder optional in einem [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Element verschachtelt sein, das, wenn es in einem `tree` verschachtelt ist, eine erweiterbare Sammlung von treeitem-Elementen darstellt.

Schließen Sie `aria-expanded` nicht bei Endknoten ein — bei denen ohne untergeordnete Tree-Elemente — da dies den Knoten fälschlicherweise als Elternknoten für unterstützende Technologien beschreiben würde.

### DOM-Platzierung und Anwesenheit

Alle Tree-Elemente sind in einem Element mit der Rolle `tree` enthalten oder von ihm besessen. Wenn es Tree-Elemente gibt, die keine direkten Nachkommen des `tree` im Markup sind, schließen Sie [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) im besitzenden Baumcontainer ein, um Elemente aufzunehmen, die keine DOM-Kinder des Containers sind. Diese nicht direkt untergeordneten Elemente erscheinen in der Leserichtung in der Reihenfolge, in der sie referenziert werden, und nach allen Tree-Elementen, die DOM-Kinder sind. Skripte, die den Fokus verwalten, müssen sicherstellen, dass die visuelle Fokusreihenfolge dieser Leserichtung der unterstützenden Technologie entspricht.

Wenn der vollständige Satz verfügbarer Knoten aufgrund dynamischen Ladevorgangs beim Verschieben des Fokus im Baum oder beim Scrollen nicht im DOM vorhanden ist, haben alle Knoten [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) angegeben.

### Zugänglicher Name

Dem `tree` muss ein zugänglicher Name zugewiesen werden. Entweder verweisen Sie auf eine sichtbare Bezeichnung mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder geben Sie eine Bezeichnung mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) an.

### Menüausrichtung

Elemente mit der Rolle `tree` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von vertikal. Wenn das Tree-Element horizontal ausgerichtet ist, schließen Sie `aria-orientation="horizontal"` ein.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`role="treeitem"`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)
  - : Ein Element in einem Baum.
- [`role="group"`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Eine erweiterbare Sammlung von Tree-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Identifiziert das Element (oder die Elemente), das/die den `tree` beschriftet/beschriften und den erforderlichen zugänglichen Namen bereitstellt, wenn eine sichtbare Bezeichnung vorhanden ist. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der den `tree` beschriftet, wenn keine sichtbare Bezeichnung vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Baumes horizontal oder vertikal ist; Standardmäßig vertikal, wenn nicht angegeben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf true gesetzt, gibt es an, dass der Benutzer mehr als ein Tree-Item aus den derzeit auswählbaren Nachkommen des Baumes auswählen kann.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechtspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, verschiebt sich der Fokus auf das erste untergeordnete Element.
<li>Wenn der Fokus auf einem Endknoten liegt (ein Tree-Element ohne Kinder), geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Linkspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der ebenfalls entweder ein Endknoten oder ein geschlossener Knoten ist, verschiebt sich der Fokus auf den übergeordneten Knoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Abwärtspfeil</kbd></td>
<td> Verschiebt den Fokus auf den nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Aufwärtspfeil</kbd></td>
<td> Verschiebt den Fokus auf den vorhergehenden Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Verschiebt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Verschiebt den Fokus auf den letzten Knoten im Baum, der fokussierbar ist, ohne den Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei übergeordneten Knoten öffnet oder schließt es den Knoten. In Einzelauswahlbäumen, wenn der Knoten keine Kinder hat, wählt es den aktuellen Knoten aus, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Einen Buchstaben eingeben*</td>
<td>
<ul>
<li>Der Fokus verschiebt sich auf den nächsten Knoten, dessen Name mit dem eingegebenen Buchstaben beginnt.
<li>Wenn mehrere Buchstaben schnell hintereinander eingegeben werden, verschiebt sich der Fokus auf den nächsten Knoten, dessen Name mit der Buchstabenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die auf derselben Ebene wie der aktuelle Knoten sind.
</td>
</tr>
</table>

\* Ein Vorauswahlverfahren wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahlbäume: Während Sie von Benutzern verlangen können, eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> beim Navigieren der Liste zu drücken, um zu vermeiden, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste hält.

#### Empfohlenes Mehrfachbenutzerauswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahlzustand des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd> (Optional)</td>
<td> Verschiebt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd> (Optional)</td>
<td> Verschiebt den Fokus und wechselt den Auswahlzustand des vorhergehenden Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional wird der Fokus auf den ersten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional wird der Fokus auf den letzten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.
</td>
</tr>
</table>

#### Alternatives Mehrfachauswahlmodell

Das alternative Mehrfachauswahlmodell ist ein Modifikatortastenmodell, bei dem das Verschieben des Fokus ohne Halten einer Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> alle ausgewählten Knoten außer dem fokussierten Knoten abwählt:

<table>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd></td>
<td> Verschiebt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd></td>
<td> Verschiebt den Fokus und wechselt den Auswahlzustand des vorhergehenden Knotens.
</td>
</tr>
<tr>
<td><kbd>Strg + Abwärtspfeil</kbd></td>
<td> Ohne den Auswahlzustand zu ändern, verschiebt den Fokus auf den nächsten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Aufwärtspfeil</kbd></td>
<td> Ohne den Auswahlzustand zu ändern, verschiebt den Fokus auf den vorhergehenden Knoten.
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
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional wird der Fokus auf den ersten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional wird der Fokus auf den letzten Knoten verschoben.
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
