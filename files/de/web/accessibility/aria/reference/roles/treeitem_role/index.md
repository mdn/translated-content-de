---
title: "ARIA: Rolle `treeitem`"
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baumes ist `tree`, aber alle Baumknoten sind `treeitem` Elemente, selbst wenn sie selbst geschachtelte `treeitem` Knoten haben.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordner-Elemente, die `treeitem` Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen — das können Dateien, Ordner oder beides sein und alles sind `treeitems` — und zusammengeklappt werden, um den Inhalt zu verbergen.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder zu verbergen. Ein geöffneter Elternknoten, bei dem die untergeordneten Knoten sichtbar sind, ist ein **offener Knoten**. Ein reduzierter Elternknoten, bei dem die untergeordneten Knoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem` Elementen. Diese untergeordneten Knoten sind keine direkten Nachkommen des Elternknotens: Sie sollten stattdessen in ein Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten. Es wird auf `false` gesetzt, wenn es geschlossen ist, und auf `true`, wenn es offen ist. Endknoten sollten das `aria-expanded` Attribut nicht enthalten, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA-Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt und hauptsächlich mit den Pfeiltasten auf der Tastatur statt mit der <kbd>Tab</kbd>-Taste navigiert werden. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, obwohl sie für native Anwendungen normal und erwartet ist. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu realisieren, bevor Sie eine Baumansicht erstellen.

Jedes Element mit einer `treeitem` Rolle muss in einem Element mit der Rolle `tree` geschachtelt oder von einem solchen Element besessen werden. Baumelemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in einem Element mit der Rolle `tree` oder `treeitem` enthalten oder davon besessen ist. Wenn ein `treeitem` nicht innerhalb eines `tree` geschachtelt ist, oder in einer `group`, die von einem `tree` besessen ist, fügen Sie die [`id`](/de/docs/Web/HTML/Global_attributes/id) des `treeitem` in den Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) auf dem besitzenden `tree`, `treeitem` oder `group` Element ein.

Bäume können "einzelne Auswahl" sein, bei denen Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder "mehrfach Auswahl", bei der Benutzer mehr als ein `treeitem` Knoten für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baumabkömmlinge verwaltet werden, um tastaturzugänglich zu sein.

In Bäumen mit einfacher Auswahl kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein Baum mit einfacher Auswahl den Fokus erhält, wird, wenn kein `treeitem` ausgewählt war, bevor der Baum den Fokus erhielt, der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt wurde, bevor der Baum den Fokus erhielt, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` gesetzt hat.

Alle Knoten, die auswählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, sollten weder `aria-selected` noch `aria-checked` enthalten sein, da die Anwesenheit eines der Attribute assistiven Technologien anzeigt, dass der Knoten auswählbar ist.

Es kann nicht mehr als ein Knoten gleichzeitig ausgewählt sein, es sei denn, der `tree` Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) gesetzt.

Wenn ein Baum mit Mehrfachauswahl den Fokus erhält, wird, wenn keiner der Baumknoten ausgewählt war, bevor der Baum den Fokus erhielt, der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumknoten ausgewählt waren, bevor der Baum den Fokus erhielt, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Bäumen mit Mehrfachauswahl sind alle ausgewählten `treeitem` entweder mit `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle `treeitem` Knoten, die auswählbar, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem` Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Bäumen mit einfacher Auswahl und mit `aria-checked` in Bäumen mit Mehrfachauswahl an.

Es wird dringend davon abgeraten, sowohl `aria-selected` als auch `aria-checked` im selben `tree` zu verwenden. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `treeitems` in einem einzigen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands sind offensichtlich, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In Bäumen mit Mehrfachauswahl sollte der ausgewählte Zustand unabhängig vom Fokus sein. Zum Beispiel kann der Benutzer in einem typischen Dateisystem-Navigator den Fokus verwenden, um eine beliebige Anzahl von Dateien für eine Aktion, wie Kopieren oder Verschieben, auszuwählen. Das visuelle Design sollte klarstellen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn der komplette Satz der verfügbaren `treeitems` aufgrund dynamischer Ladung beim Verschieben des Fokus oder Scrollen im Baum nicht im DOM vorhanden ist, sollte jedes `treeitem` die Attribute [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Im Allgemeinen stammt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste der über- und untergeordneten `treeitem` Knoten, die erweitert und reduziert werden können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Kennzeichnet eine Gruppe von untergeordneten `treeitem` Knoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wird am Wurzelbaum und an `group` Knoten gesetzt, die Eltern von `treeitem` Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Setzt `true` oder `false`, um anzuzeigen, dass ein `treeitem` auswählbar ist und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Setzt `true` oder `false`, um zu signalisieren, dass das `treeitem` markiert werden kann, sowie den aktuellen Zustand des Markierens anzuzeigen.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, der die Standardausrichtung darstellt:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Fokus auf den ersten untergeordneten Knoten verschoben.
<li>Wenn der Fokus auf einem Endknoten (ein Baumobjekt ohne Kinder) liegt, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem untergeordneten Knoten liegt, der entweder ein Endknoten oder ein geschlossener Knoten ist, wird der Fokus auf seinen Elternknoten verschoben.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Verschiebt den Fokus auf den nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Verschiebt den Fokus auf den vorherigen Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
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
<td><kbd>Enter</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten wird der Knoten geöffnet oder geschlossen. In Bäumen mit einfacher Auswahl wird, wenn der Knoten keine Kinder hat, der aktuelle Knoten ausgewählt, sofern er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Geben Sie ein Zeichen ein*</td>
<td>
<ul>
<li>Der Fokus wird auf den nächsten Knoten verschoben, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen in schneller Folge eingegeben werden, verschiebt sich der Fokus auf den nächsten Knoten, dessen Name mit der Folge von eingegebenen Zeichen beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf der gleichen Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Das Tippen im Voraus wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Bäume mit Mehrfachauswahl: Während Sie verlangen können, dass Benutzer während der Navigation in der Liste eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten, um Auswahlzustände nicht zu verlieren, wird das Modell, das keine solche Taste erfordert, empfohlen.

#### Empfohlenes Modell für die Mehrfachauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach unten</kbd> (Optional)</td>
<td> Verschiebt den Fokus zum nächsten Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Shift + Pfeil nach oben</kbd> (Optional)</td>
<td> Verschiebt den Fokus zum vorherigen Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten von dem zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum ersten Knoten aus. Optional verschiebt es den Fokus auf den ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit dem Fokus und alle Knoten bis zum letzten Knoten aus. Optional verschiebt es den Fokus auf den letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

## Beispiele

Im Folgenden wird beschrieben, wie man eine Verzeichnisliste von Webentwicklungskursen als Baumansicht markieren könnte:

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

Das Obige bietet die Semantik für eine Baumansicht, bietet jedoch keine der Interaktivitäten. Diese müssen mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) zu allen `treeitems` außer dem, das den Fokus erhalten soll, wenn der Benutzer in den Baum tabbt, das sollte auf `tabIndex="0"` gesetzt werden.

Die gesamte Tastaturfunktionalität in Tastaturinteraktionen und alle Zeigereignisse müssen programmiert werden, einschließlich Fokusmanagement, das Auf- und Abgehen im Baum, das Erweitern und Reduzieren von Elternknoten und das Auswahlmanagement.

Wenn der Baum mehr als 7 `treeitems` hat, wird empfohlen, eine Vorauswahlfunktion zu inkludieren.

## Spezifikationen

{{Specifications}}

## Siehe auch
