---
title: "ARIA: Rolle treeitem"
slug: Web/Accessibility/ARIA/Roles/treeitem_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) ist eine hierarchische Liste mit Eltern- und Kindknoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baums ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, selbst wenn sie verschachtelte `treeitem`-Knoten haben.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateiauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordnerelemente, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners zu zeigen — dies können Dateien, Ordner oder beides sein, und alles sind `treeitems` — und reduziert, um den Inhalt zu verbergen.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder zu zeigen oder zu verbergen. Ein Elternknoten, der erweitert ist, sodass seine Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein Elternknoten, der reduziert ist, sodass die Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese Kindknoten sind keine direkten Nachkommen des Elternknotens: Vielmehr sollten sie in ein Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten. Es wird auf `false` gesetzt, wenn es geschlossen ist, und auf `true`, wenn es geöffnet ist. Endknoten sollten nicht das Attribut `aria-expanded` enthalten, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass der Knoten ein Elternknoten ist.

> [!NOTE]
> ARIA-Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt und hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert wird. Diese Form der Navigation ist nicht üblich für die meisten Browserinhalte, jedoch normal und erwartet bei nativen Anwendungen. Aus diesem Grund sollten Sie alternative Optionen zur Erfüllung der benötigten Funktionalität in Betracht ziehen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit der Rolle `treeitem` muss in ein Element mit der Rolle `tree` eingebettet oder von einem solchen Element enthalten sein. Baumelemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in ein Element von `tree` oder `treeitem` eingebettet oder von einem solchen Element enthalten ist. Wenn ein `treeitem` nicht innerhalb eines `tree` verschachtelt ist oder nicht in einer `group` verschachtelt ist, die von einem `tree` besessen wird, fügen Sie das [`id`](/de/docs/Web/HTML/Global_attributes#id) des `treeitem` in den Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem besitzenden `tree`, `treeitem` oder `group`-Element ein.

Bäume können "einzelauswählend" sein, sodass Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder "mehrfachauswählend", wobei Benutzer in der Lage sind, mehr als einen `treeitem`-Knoten für eine Aktion auszuwählen. In beiden Fällen muss, um mit der Tastatur zugänglich zu sein, der Fokus für alle Baumnachkommen verwaltet werden.

In einzelauswählenden Bäumen kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein einzelauswählender Baum den Fokus erhält und kein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` gesetzt hat.

Alle Knoten, die wählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht wählbar sind, schließen Sie weder `aria-selected` noch `aria-checked` ein, da die Anwesenheit eines dieser Attribute assistiven Technologien anzeigt, dass der Knoten wählbar ist.

Nicht mehr als ein Knoten kann gleichzeitig ausgewählt sein, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) gesetzt.

Wenn ein mehrfachauswählender Baum den Fokus erhält und kein Baumknoten ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumknoten ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In mehrfachauswählenden Bäumen haben alle ausgewählten Baumelemente entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumelementknoten, die wählbar sind, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in einzelauswählenden Bäumen und mit `aria-checked` in mehrfachauswählenden Bäumen an.

Die Verwendung von sowohl `aria-selected` als auch `aria-checked` im selben `tree` wird stark abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `treeitems` in einem einzelnen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands sind offensichtlich und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In mehrfachauswählenden Bäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. Zum Beispiel kann der Benutzer in einem typischen Dateinavigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion, wie Kopieren oder Verschieben, auszuwählen. Das visuelle Design sollte klarstellen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn der vollständige Satz verfügbarer `treeitems` aufgrund dynamischen Ladens bei Fokussierungsbewegungen oder beim Scrollen im Baum nicht im DOM vorhanden ist, sollte jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Im Allgemeinen stammt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) festgelegt werden.

### Zuordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste von Eltern- und Kindknoten `treeitem`, die erweitert und reduziert werden können
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Identifiziert einen Satz von Kindknoten `treeitem`.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wird auf dem Wurzel `tree` und auf `group`-Knoten gesetzt, die Eltern von `treeitem`-Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass ein `treeitem` wählbar ist, und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt an, dass das `treeitem` überprüft werden kann, und ob es derzeit überprüft ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechtspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, öffnet sich der Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus zum ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (einem Baumitem ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Linkspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, schließt sich der Knoten.
<li>Wenn der Fokus auf einem Kindknoten liegt, der entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, der ohne Öffnen oder Schließen eines Knotens fokussierbar ist.
</td>
</tr>
<tr>
<td><kbd>Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum vorherigen Knoten, der ohne Öffnen oder Schließen eines Knotens fokussierbar ist.
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
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten öffnet oder schließt es den Knoten. In einzelauswählenden Bäumen, wenn der Knoten keine Kinder hat, wählt es den aktuellen Knoten, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell hintereinander eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der Zeichenfolge beginnt, die eingegeben wurde.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister auf derselben Ebene wie der aktuelle Knoten.
</td>
</tr>
</table>

\* Vorauseilende Eingabe wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Multi-Select-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für mehrfachauswählende Bäume: Während Sie verlangen können, dass Benutzer beim Navigieren in der Liste eine Modiﬁkationstaste wie <kbd>Shift</kbd> oder <kbd>Steuerung</kbd> drücken, um zu vermeiden, dass Auswahlzustände verloren gehen, wird das Modell empfohlen, das es den Benutzern ermöglicht, ohne Drücken einer Modiﬁkationstaste zu navigieren.

#### Empfohlenes Multi-User-Select-Modell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus zum nächsten Knoten und schaltet den Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus zum vorherigen Knoten und schaltet den Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten.
</td>
</tr>
<tr>
<td><kbd>Steuerung + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Steuerung + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Steuerung + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann, wenn alle Knoten ausgewählt sind, auch alle Knoten abwählen.</td>
</tr>
</table>

## Beispiele

Das Folgende zeigt, wie man eine Verzeichnisliste von Webentwicklungskursen als Baumansicht markieren könnte:

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

Das obige bietet die Semantik für eine Baumansicht, stellt jedoch keine der Interaktivitäten bereit. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) auf alle Baumelemente zu setzen, außer auf dasjenige, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt. Dieses sollte auf `tabIndex="0"` gesetzt werden.

Die gesamte in Tastaturinteraktionen beschriebene Tastaturfunktionalität und alle Zeigerereignisse müssen programmiert werden, einschließlich Fokusmanagement, Auf- und Ab-Navigation im Baum, Erweitern und Reduzieren von Elternknoten und Auswahlmanagement.

Wenn der Baum mehr als 7 Baumelemente hat, wird empfohlen, Funktionalitäten mit vorhersehender Eingabe zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch
