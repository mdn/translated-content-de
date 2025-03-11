---
title: "ARIA: treeitem Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baumes ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten haben.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordner, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen—welcher Dateien, Ordner oder beides enthalten kann, und alle sind `treeitems`—und können reduziert werden, um den Inhalt auszublenden.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder auszublenden. Ein Elternknoten, der erweitert ist, sodass seine Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein Elternknoten, der reduziert ist, sodass die Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese Kindknoten sind keine direkten Nachkommen des Elternknotens: Sie sollten vielmehr in ein Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) beinhalten. Es ist auf `false` gesetzt, wenn geschlossen, und auf `true`, wenn offen. Endknoten sollten das Attribut `aria-expanded` nicht enthalten, da die Anwesenheit des Attributs unterstützenden Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA-Baumansichten verwenden Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt, und werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit einer `treeitem`-Rolle muss in ein Element mit der Rolle `tree` verschachtelt sein oder von einem solchen Element besessen werden. Baumitems können ein Kind eines `tree`, `treeitem` oder eines Elements mit der Rolle `group` sein, das in oder von einem Element mit der Rolle `tree` oder `treeitem` besessen wird. Wenn ein `treeitem` nicht innerhalb eines `tree` verschachtelt ist oder in einer `group` verschachtelt ist, die von einem `tree` besessen wird, schließen Sie die [`id`](/de/docs/Web/HTML/Global_attributes/id) des `treeitem` in den Attributwert [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden `tree`, `treeitem` oder `group`-Element ein.

Bäume können "einzelauswählend" sein, sodass Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder "mehrfachauswählend", wobei Benutzer mehr als einen `treeitem`-Knoten für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baum-Nachkommen verwaltet werden, um tastaturzugänglich zu sein.

In einzelauswählenden Bäumen kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein einzelauswählender Baum den Fokus erhält und kein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` gesetzt hat.

Alle Knoten, die auswählbar sind, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, schließen Sie weder `aria-selected` noch `aria-checked` ein, da die Anwesenheit eines dieser Attribute unterstützenden Technologien anzeigt, dass der Knoten auswählbar ist.

Es kann nicht mehr als ein Knoten gleichzeitig ausgewählt sein, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) gesetzt.

Wenn ein mehrfachauswählender Baum den Fokus erhält und keine der Baumitems ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumitems ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In mehrfachauswählenden Bäumen haben alle ausgewählten Baumitems entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumknoten, die auswählbar sind, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl in einzelauswählenden Bäumen mit `aria-selected` und in mehrfachauswählenden Bäumen mit `aria-checked` an.

Die Verwendung sowohl von `aria-selected` als auch von `aria-checked` im selben `tree` wird dringend abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf Treeitems in einem einzigen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands sind offensichtlich, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In mehrfachauswählenden Bäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. Beispielsweise kann der Benutzer in einem typischen Dateisystemnavigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion, wie Kopieren oder Verschieben, auszuwählen. Das visuelle Design sollte deutlich machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn die vollständige Menge verfügbarer Treeitems aufgrund von dynamischem Laden während der Fokusbewegung des Benutzers oder Scrollen im Baum nicht im DOM vorhanden ist, sollte jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben haben.

Ein `treeitem` muss einen zugänglichen Namen haben. In der Regel kommt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste von übergeordneten und untergeordneten `treeitem`-Knoten, die erweitert und reduziert werden können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von `treeitem`-Kindknoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wird auf dem Wurzel-`tree` und auf `group`-Knoten, die Eltern von `treeitem`-Knoten sind, gesetzt, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass ein `treeitem` auswählbar ist und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass das `treeitem` überprüft werden kann, und ob es derzeit überprüft ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, der die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet den Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus auf den ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (ein Baumelement ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt den Knoten.
<li>Wenn der Fokus auf einem Kindknoten liegt, der auch entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf seinen Elternknoten.
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
<td><kbd>Pos1</kbd></td>
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
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten öffnet oder schließt er den Knoten. In einzelauswählenden Bäumen wählt er, wenn der Knoten keine Kinder hat, den aktuellen Knoten aus, falls dieser noch nicht ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Buchstaben eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich auf den nächsten Knoten mit einem Namen, der mit dem eingegebenen Buchstaben beginnt.
<li>Wenn mehrere Buchstaben hintereinander in schneller Folge eingegeben werden, bewegt sich der Fokus auf den nächsten Knoten mit einem Namen, der mit der eingegebenen Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Die Eingabehilfe wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Tastaturinteraktionen für Mehrfachauswahl

Es gibt zwei Interaktionsmodelle für mehrfachauswählende Bäume: Sie können verlangen, dass Benutzer eine Modifikatortaste, wie <kbd>Shift</kbd> oder <kbd>Strg</kbd>, drücken, während sie die Liste navigieren, um zu vermeiden, dass Auswahlzustände verloren gehen. Das Modell, das nicht erfordert, dass der Benutzer eine Modifikatortaste gedrückt hält, wird jedoch empfohlen.

#### Empfohlenes Mehrfachauswahlmodell für Benutzer

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahlzustand des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt durchgängige Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Pos1</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional verschiebt sich der Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional verschiebt sich der Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

## Beispiele

Das folgende Beispiel zeigt, wie man ein Verzeichnis von Webentwicklungskursen als Baumansicht markieren könnte:

```html
<div>
  <h3 id="treeLabel">Developer Learning Path</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Languages</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group">
                <li role="treeitem">Document structure</li>
                <li role="treeitem">Head elements</li>
                <li role="treeitem">Semantic elements</li>
                <li role="treeitem">Attributes</li>
                <li role="treeitem">Web forms</li>
              </ul>
            </li>
            <li role="treeitem">CSS</li>
            <li role="treeitem">JavaScript</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Accessibility</span>
          <ul role="group">
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Web Performance</span>
          <ul role="group">
            <li role="treeitem">Load time</li>
          </ul>
        </li>
        <li role="treeitem">APIs</li>
      </ul>
    </li>
  </ul>
</div>
```

Das oben Genannte bietet die Semantik für eine Baumansicht, stellt jedoch keine der Interaktivitäten bereit. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumitems standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) auf alle Baumitems außer demjenigen zu setzen, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt, und dieses sollte auf `tabIndex="0"` gesetzt sein.

Alle Tastaturfunktionen in Tastaturinteraktionen und alle Zeigerereignisse müssen programmiert werden, einschließlich der Fokusverwaltung, des Navigierens auf und ab im Baum, des Erweiterns und Reduzierens von Elternknoten und der Auswahlverwaltung.

Wenn der Baum mehr als 7 Baumitems hat, wird empfohlen, eine Eingabehilfe-Funktion zu integrieren.

## Spezifikationen

{{Specifications}}
