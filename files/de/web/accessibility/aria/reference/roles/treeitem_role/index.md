---
title: "ARIA: Rollenbeschreibung treeitem"
short-title: treeitem
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ist eine hierarchische Liste mit über- und untergeordneten Knoten, die expandiert und kollabiert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baumes ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten haben.

Ein Beispiel für einen `tree` ist eine Dateiverwaltungs-Benutzeroberfläche: Eine Baumansicht, die Ordner und Dateien anzeigt. Jedes Ordner- und Dateielement ist ein `treeitem`. Ordner, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen — der Dateien, Ordner oder beides sein kann und alle `treeitems` sind — und sie können zusammengeklappt werden, um ihren Inhalt auszublenden.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Tree-Elemente, die Kinder haben, können expandiert oder kollabiert werden, wodurch ihre Kinder angezeigt oder verborgen werden. Ein Elternknoten, der erweitert ist, sodass seine Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein Elternknoten, der kollabiert ist, sodass die Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese Kindknoten sind keine direkten Nachkommen des Elternknotens: Sie sollten stattdessen in einem Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten. Es wird auf `false` gesetzt, wenn geschlossen und auf `true` , wenn offen. Endknoten sollten das Attribut `aria-expanded` nicht enthalten, da das Vorhandensein des Attributs assistiven Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA-Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt und hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert wird. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, aber normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie andere Optionen in Betracht ziehen, um die gewünschte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit der Rolle `treeitem` muss in einem Element mit der Rolle `tree` verschachtelt oder von ihm besessen sein. Tree-Elemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in einem Element mit der Rolle `tree` oder `treeitem` enthalten oder von ihm besessen ist. Wenn ein `treeitem` nicht innerhalb eines `tree` oder innerhalb einer `group` verschachtelt ist, die von einem `tree` besessen wird, fügen Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `treeitem` in den Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) des besitzenden `tree`, `treeitem` oder `group`-Elements ein.

Bäume können als "Einzelauswahl" konfiguriert werden, damit Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder als "Mehrfachauswahl", bei der Benutzer mehr als einen `treeitem`-Knoten für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baum-Nachkommen verwaltet werden, um über die Tastatur zugänglich zu sein.

In Einzelauswahlbäumen kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein Einzelauswahlbaum den Fokus erhält und kein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` hat.

Alle Knoten, die auswählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, sollten weder `aria-selected` noch `aria-checked` enthalten sein, da das Vorhandensein eines dieser Attribute assistiven Technologien anzeigt, dass der Knoten auswählbar ist.

Nicht mehr als ein Knoten kann gleichzeitig ausgewählt werden, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable).

Wenn ein Mehrfachauswahlbaum den Fokus erhält und keine Baum-Elemente vorher ausgewählt sind, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baum-Elemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Mehrfachauswahlbäumen haben alle ausgewählten Baum-Elemente entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baum-Elementknoten, die auswählbar sind, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Einzelauswahlbäumen und mit `aria-checked` in Mehrfachauswahlbäumen an.

Die gleichzeitige Verwendung von `aria-selected` und `aria-checked` im selben `tree` ist stark abzulehnen. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `treeitems` in einem einzigen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheidet sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands ist offensichtlich, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In Mehrfachauswahlbäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Explorer den Fokus verschieben, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, wie z.B. Kopieren oder Verschieben. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn nicht das vollständige Set verfügbarer `treeitems` im DOM vorhanden ist, weil sie dynamisch geladen werden, während der Benutzer den Fokus im Baum bewegt oder scrollt, sollte jedes `treeitem` die Attribute [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Dieser Name stammt im Allgemeinen vom Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste der über- und untergeordneten `treeitem`-Knoten, die expandiert und kollabiert werden können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von `treeitem`-Kindknoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wird auf dem Wurzel-`tree` und auf `group`-Knoten gesetzt, die Eltern von `treeitem`-Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder kollabiert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass ein `treeitem` auswählbar ist und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass das `treeitem` überprüft werden kann und ob es derzeit überprüft ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, die die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet er den Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus zum ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (einem Baum-Element ohne Kinder) liegt, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt er den Knoten.
<li>Wenn der Fokus auf einem Kindknoten liegt, der ebenfalls entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, geschieht nichts.
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
<td><kbd>Enter</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Für Elternknoten öffnet oder schließt er den Knoten. In Einzelauswahlbäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten aus, wenn er noch nicht ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen in schneller Folge eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der Zeichenfolge der eingegebenen Zeichen beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf der gleichen Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Vorausschauendes Tippen wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahlbäume: Während Sie verlangen können, dass Benutzer beim Navigieren in der Liste eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> drücken müssen, um den Auswahlszustand nicht zu verlieren, wird das Modell empfohlen, bei dem der Benutzer keine Modifikatortaste gedrückt halten muss.

#### Empfohlenes Modell für die Mehrfachauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlszustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach unten</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlszustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach oben</kbd> (Optional)</td>
<td> Bewegt den Fokus und schaltet den Auswahlszustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

## Beispiele

Das folgende Beispiel zeigt, wie ein Verzeichnis von Webentwicklungskursen als Baumansicht markiert werden könnte:

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

Das obige Beispiel bietet die Semantik für eine Baumansicht, bietet jedoch keine Interaktivität. Diese muss mit JavaScript hinzugefügt werden.

Wenn Baum-Elemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) für alle `treeitems` außer dem Element zu setzen, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt. Dieses sollte auf `tabIndex="0"` gesetzt werden.

Die gesamte Tastaturfunktionalität in den Tastaturinteraktionen und alle Zeigerereignisse müssen programmiert werden, einschließlich des Fokusmanagements, der Auf- und Abbewegung im Baum, des Erweiterns und Kollabierens von Elternknoten und des Auswahlmanagements.

Wenn der Baum mehr als 7 Baum-Elemente enthält, wird die Hinzufügung von vorausschauendem Tippen empfohlen.

## Spezifikationen

{{Specifications}}
