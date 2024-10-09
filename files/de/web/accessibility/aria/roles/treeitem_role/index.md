---
title: "ARIA: Rolle treeitem"
slug: Web/Accessibility/ARIA/Roles/treeitem_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) ist eine hierarchische Liste mit Eltern- und Kindknoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baumes ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten besitzen.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateisystemauswahl: Eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordnerelemente, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen — dies können Dateien, Ordner oder beides sein und sind alle `treeitems` — und können reduziert werden, um den Inhalt auszublenden.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, um ihre Kinder anzuzeigen oder auszublenden. Ein geöffneter Elternknoten, dessen Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein geschlossener Elternknoten, dessen Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese Kindknoten sind nicht direkte Nachkommen des Elternknotens: Sie sollten vielmehr in einem Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten. Es ist auf `false` gesetzt, wenn geschlossen, und `true`, wenn geöffnet. Endknoten sollten das `aria-expanded`-Attribut nicht enthalten, da das Vorhandensein des Attributs assistierenden Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA Baumansichten verwenden eine Navigation, die eher nativen Anwendungen als Webanwendungen ähnelt und hauptsächlich mit den Pfeiltasten auf der Tastatur statt mit der <kbd>Tab</kbd>-Taste navigiert wird. Diese Art der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch für native Anwendungen normal und erwartet. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die benötigte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit der Rolle `treeitem` muss in einem Element mit der Rolle `tree` verschachtelt oder von einem solchen Element besessen sein. Baumelemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in einem Element mit der Rolle `tree` oder `treeitem` enthalten oder von diesem besessen ist. Wenn ein `treeitem` nicht innerhalb eines `tree` verschachtelt ist oder nicht in einer `group` verschachtelt ist, die von einem `tree` besessen wird, fügen Sie die [`id`](/de/docs/Web/HTML/Global_attributes/id) des `treeitem` in den Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem besitzenden `tree`, `treeitem` oder `group`-Element ein.

Bäume können "einzelselektiv" sein, was es Benutzern ermöglicht, nur ein `treeitem` für eine Aktion auszuwählen, oder "mehrfachselektiv", wobei Benutzer mehr als ein `treeitem` für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baumabkömmlinge verwaltet werden, um tastaturzugänglich zu sein.

In einzelselektiven Bäumen kann nur ein `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein einzelselektiver Baum den Fokus erhält und kein `treeitem` vorher ausgewählt wurde, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt wurde, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` gesetzt hat.

Alle auswählbaren, aber nicht ausgewählten Knoten haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, sollten weder `aria-selected` noch `aria-checked` enthalten sein, da das Vorhandensein eines dieser Attribute assistierenden Technologien signalisiert, dass der Knoten auswählbar ist.

Nicht mehr als ein Knoten kann gleichzeitig ausgewählt sein, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) gesetzt.

Wenn ein mehrfachselektiver Baum den Fokus erhält und keine Baumelemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumelemente ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In mehrfachselektiven Bäumen haben alle ausgewählten Baumelemente entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumelementknoten, die auswählbar sind, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen verwenden `aria-selected` zur Anzeige der Auswahl in einzelselektiven Bäumen und `aria-checked` in mehrfachselektiven Bäumen.

Die Verwendung von sowohl `aria-selected` als auch `aria-checked` im selben `tree` wird dringend abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `treeitems` in einem einzigen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands sind offensichtlich, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustandes an.

In mehrfachselektiven Bäumen sollte der gewählte Zustand unabhängig vom Fokus sein. Zum Beispiel kann der Benutzer in einem typischen Dateisystemnavigator den Fokus verschieben, um eine beliebige Anzahl von Dateien für eine Aktion auszuwählen, wie beispielsweise Kopieren oder Verschieben. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn der vollständige Satz an verfügbaren `treeitems` aufgrund dynamischen Ladens beim Bewegen des Fokus im Baum oder beim Scrollen nicht im DOM vorhanden ist, sollte jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Im Allgemeinen stammt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Rolle [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
  - : Der Wurzelknoten für die hierarchische Liste von Eltern- und Kind-`treeitem`-Knoten, die erweitert und reduziert werden können.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Identifiziert eine Menge von `treeitem`-Kindknoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Setzen Sie auf den Wurzel-`tree` und auf `group`-Knoten, die Eltern von `treeitem`-Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt ein `treeitem` an, dass es auswählbar ist und ob es derzeit ausgewählt ist.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt das `treeitem` an, dass es aktiviert werden kann und ob es derzeit aktiviert ist.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, der die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechtspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten ist, öffnet er den Knoten; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten ist, bewegt sich der Fokus auf den ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (ein Baumitem ohne Kinder) ist, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Linkspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten ist, schließt er den Knoten.
<li>Wenn der Fokus auf einem Kindknoten ist, der entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus auf seinen Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum ist, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Abwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Aufwärtspfeil</kbd></td>
<td> Bewegt den Fokus zum vorherigen Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pos1</kbd></td>
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
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten öffnet oder schließt es den Knoten. In einzelselektiven Bäumen, wenn der Knoten keine Kinder hat, wählt er den aktuellen Knoten, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten mit einem Namen, der mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell hintereinander eingegeben werden, bewegt sich der Fokus zum nächsten Knoten mit einem Namen, der mit der Zeichenfolge der eingegebenen Zeichen beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Tippvorauswahl wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für mehrfachselektive Bäume: Während Sie verlangen können, dass Benutzer eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten, während sie in der Liste navigieren, um den Auswählerstatus nicht zu verlieren, wird das Modell empfohlen, das nicht erfordert, dass der Benutzer eine Modifikatortaste hält.

#### Empfohlenes Mehrfachauswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahlzustand des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Abwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Aufwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlzustand des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Pos1</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt es den Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt es den Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann es auch alle Knoten abwählen, wenn alle Knoten ausgewählt sind.</td>
</tr>
</table>

## Beispiele

Das folgende Beispiel zeigt, wie man eine Verzeichnisauflistung von Webentwicklungs-Kursen als Baumansicht markieren könnte:

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

Das obige Beispiel bietet die Semantik für eine Baumansicht, liefert jedoch keine Interaktivität. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) für alle `treeitems` außer dem, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt, das auf `tabIndex="0"` gesetzt werden sollte.

Die gesamte Tastaturfunktionalität bei Tastaturinteraktionen und alle Zeigereignisse müssen programmiert werden, einschließlich der Fokusverwaltung, des Navigierens im Baum, des Erweiterns und Reduzierens von Elternknoten und der Auswahlverwaltung.

Wenn der Baum mehr als 7 Baum-Items hat, wird empfohlen, eine Vorauswahlfunktionalität zu implementieren.

## Spezifikationen

{{Specifications}}

## Siehe auch
