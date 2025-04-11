---
title: "ARIA: `treeitem` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baums ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, selbst wenn sie verschachtelte `treeitem`-Knoten enthalten.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordner, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen—diese können Dateien, Ordner oder beides sein und sind alle `treeitems`—und können reduziert werden, um den Inhalt zu verbergen.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können ein- oder ausgeklappt werden, um ihre Kinder anzuzeigen oder zu verbergen. Ein Elternknoten, der erweitert ist, sodass seine untergeordneten Knoten sichtbar sind, ist ein **offener Knoten**. Ein Elternknoten, der reduziert ist, sodass die untergeordneten Knoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese untergeordneten Knoten sind keine direkten Nachkommen des Elternknotens, sondern sollten in einem Element mit der Rolle `group` eingeschlossen sein.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten. Es wird auf `false` gesetzt, wenn geschlossen, und auf `true`, wenn offen. Endknoten sollten das `aria-expanded`-Attribut nicht enthalten, da die Anwesenheit des Attributs assistive Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA-Baumansichten verwenden eine Navigation, die eher nativen Anwendungen ähnelt als Webanwendungen, und werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert. Diese Form der Navigation ist nicht für die meisten Browserinhalte üblich, aber normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie alternative Optionen in Erwägung ziehen, um die gewünschte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit einer `treeitem`-Rolle muss in ein Element mit der Rolle `tree` eingebettet sein oder von diesem besessen werden. Baumelemente können ein Kind von `tree`, `treeitem` oder ein Element mit der Rolle `group` sein, das in ein Element mit der Rolle `tree` oder `treeitem` eingebettet oder von diesem besessen ist. Wenn ein `treeitem` nicht innerhalb eines `tree` eingebettet ist oder in einer `group`, die von einem `tree` besessen wird, aufgenommen wird, schließen Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `treeitem` in den Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden `tree`, `treeitem` oder `group`-Element ein.

Bäume können „Einzelauswahl“ sein, sodass Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder „Mehrfachauswahl“, bei der Benutzer mehr als einen `treeitem`-Knoten für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baumnachkommen verwaltet werden, um tastaturzugänglich zu sein.

In Einzelauswahlbäumen kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein Einzelauswahlbaum den Fokus erhält und kein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` mit `aria-selected="true"` gesetzt.

Alle Knoten, die auswählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, schließen Sie weder `aria-selected` noch `aria-checked` ein, da die Anwesenheit eines dieser Attribute assistiven Technologien anzeigt, dass der Knoten auswählbar ist.

Nicht mehr als ein Knoten kann gleichzeitig ausgewählt werden, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) gesetzt.

Wenn ein Mehrfachauswahlbaum den Fokus erhält und keiner der Baumknoten ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumknoten ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Mehrfachauswahlbäumen haben alle ausgewählten Baumknoten entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumknoten, die auswählbar, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Einzelauswahlbäumen und mit `aria-checked` in Mehrfachauswahlbäumen an.

Die Verwendung von sowohl `aria-selected` als auch `aria-checked` im selben `tree` wird dringend abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf treeitems in einem einzelnen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` ist unterschiedlich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands sind offensichtlich, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In Mehrfachauswahlbäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. Beispielsweise kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus verschieben, um eine beliebige Anzahl von Dateien für eine Aktion, wie kopieren oder verschieben, auszuwählen. Das visuelle Design sollte deutlich machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn die vollständige Menge der verfügbaren treeitems aufgrund dynamischer Ladungen nicht im DOM vorhanden ist, während der Benutzer den Fokus verschiebt oder im Baum scrollt, sollte jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Normalerweise kommt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste der übergeordneten und untergeordneten `treeitem`-Knoten, die erweitert und reduziert werden können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von untergeordneten `treeitem`-Knoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wird auf dem Wurzel-`tree` und auf `group`-Knoten gesetzt, die Eltern von `treeitem`-Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt ein `treeitem` an, das auswählbar ist, und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt das `treeitem` an, das angekreuzt werden kann, und ob es derzeit angekreuzt ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, der die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem geöffneten Knoten liegt, wird der Fokus auf den ersten untergeordneten Knoten verschoben.
<li>Wenn der Fokus auf einem Endknoten (ein Baumelement ohne Kinder) liegt, passiert nichts.
</ul>
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geöffneten Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der auch entweder ein Endknoten oder ein geschlossener Knoten ist, wird der Fokus auf seinen übergeordneten Knoten verschoben.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</ul>
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Verschiebt den Fokus auf den nächsten Knoten, der ohne das Öffnen oder Schließen eines Knotens fokussierbar ist.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Verschiebt den Fokus auf den vorherigen Knoten, der ohne das Öffnen oder Schließen eines Knotens fokussierbar ist.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Verschiebt den Fokus auf den ersten Knoten im Baum, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Verschiebt den Fokus auf den letzten Knoten im Baum, der ohne das Öffnen des Knotens fokussierbar ist.
</td>
</tr>
<tr>
<td><kbd>Enter</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten öffnet oder schließt es den Knoten. In Einzelauswahlbäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten aus, wenn nicht bereits ausgewählt (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Geben Sie ein Zeichen ein*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen in schneller Folge eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der eingegebenen Zeichenfolge beginnt.
</ul>
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Type-Ahead wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Multi-Select-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahlbäume: Während Sie verlangen können, dass Benutzer eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Strg</kbd> gedrückt halten, während sie die Liste navigieren, um zu vermeiden, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste hält.

#### Empfohlenes Mehrbenutzer-Auswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den AuswahZustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Verschiebt den Fokus und schaltet den AuswahZustand des nächsten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Verschiebt den Fokus und schaltet den AuswahZustand des vorherigen Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Verschiebt optional den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Verschiebt optional den Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann es auch alle Knoten abwählen, wenn alle Knoten ausgewählt sind.
</td>
</tr>
</table>

## Beispiele

Das folgende ist, wie man eine Verzeichnisauswahl von Webentwicklungskursen als Baumansicht markieren könnte:

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

Das oben Genannte bietet die Semantik für eine Baumansicht, jedoch nicht die Interaktivität. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) zu allen treeitems hinzuzufügen, außer zu dem, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt, was auf `tabIndex="0"` gesetzt werden sollte.

Die gesamte Tastaturfunktionalität in den Tastaturinteraktionen und alle Zeigerereignisse müssen programmiert werden, einschließlich der Fokusverwaltung, der Aufwärts- und Abwärtsnavigation im Baum, der Erweiterung und Reduzierung von Elternknoten und der Auswahlverwaltung.

Wenn der Baum mehr als 7 treeitems hat, wird die Implementierung der Type-Ahead-Funktionalität empfohlen.

## Spezifikationen

{{Specifications}}
