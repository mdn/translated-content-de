---
title: "ARIA: Rolle treeitem"
slug: Web/Accessibility/ARIA/Roles/treeitem_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baums ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten haben.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Dateisystemauswahl: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordner-Elemente, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen - das können Dateien, Ordner oder beides sein und alle sind `treeitems` - und können reduziert werden, um den Inhalt zu verbergen.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein Elternteil ist, ist ein **Elternknoten**. Ein `treeitem`, das kein Elternteil ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, indem ihre Kinder angezeigt oder verborgen werden. Ein Elternknoten, der erweitert ist, sodass seine Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein Elternknoten, der reduziert ist, sodass die Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Ein Elternknoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese untergeordneten Knoten sind keine direkten Nachkommen des Elternknotens: vielmehr sollten sie in einem Element mit der Rolle `group` eingeschlossen werden.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten. Es wird auf `false` gesetzt, wenn geschlossen, und auf `true`, wenn geöffnet. Endknoten sollten das Attribut `aria-expanded` nicht enthalten, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass der Knoten ein Elternteil ist.

> [!NOTE]
> ARIA Baumansichten verwenden eine Navigation, die ähnlicher zu nativen Anwendungen ist als zu Webanwendungen und hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd>-Taste navigiert wird. Diese Form der Navigation ist für die meisten Browserinhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die Funktionalität zu adressieren, die Sie benötigen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit einer `treeitem`-Rolle muss in einem Element mit der Rolle `tree` verschachtelt oder diesem zugeordnet sein. Baumelemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in oder von einem Element mit der Rolle `tree` oder `treeitem` enthalten oder diesem zugeordnet ist. Wenn ein `treeitem` nicht innerhalb eines `tree` verschachtelt oder in einer `group` verschachtelt ist, die einem `tree` zugeordnet ist, muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) des `treeitem` im Wert des Attributs [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) auf dem zugeordneten `tree`, `treeitem` oder `group` enthalten sein.

Bäume können "Einzelauswahl" sein, bei der Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder "Mehrfachauswahl", bei der Benutzer mehr als einen `treeitem`-Knoten für eine Aktion auswählen können. In beiden Fällen muss, um tastaturzugänglich zu sein, der Fokus für alle Baum-Nachkommen verwaltet werden.

In Einzelauswahl-Bäumen kann nur ein Treeitem [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein Einzelauswahl-Baum den Fokus erhält und kein `treeitem` vor dem Fokuserhalt ausgewählt ist, wird der Fokus auf das erste `treeitem` gelegt. Wenn ein `treeitem` vor dem Fokuserhalt ausgewählt ist, wird der Fokus auf das ausgewählte `treeitem` mit `aria-selected="true"` gesetzt.

Alle Knoten, die auswählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, schließen Sie weder `aria-selected` noch `aria-checked` ein, da die Anwesenheit eines dieser Attribute assistiven Technologien anzeigt, dass der Knoten auswählbar ist.

Es dürfen nicht mehr als ein Knoten gleichzeitig ausgewählt werden, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) gesetzt.

Wenn ein Mehrfachauswahl-Baum den Fokus erhält und keiner der Baum-Elemente vor dem Fokuserhalt ausgewählt ist, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baum-Elemente vor dem Fokuserhalt ausgewählt sind, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Mehrfachauswahl-Bäumen haben alle ausgewählten Baumelemente entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumelement-Knoten, die auswählbar, aber derzeit nicht ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl bei Einzelauswahl-Bäumen mit `aria-selected` an und bei Mehrfachauswahl-Bäumen mit `aria-checked`.

Die gleichzeitige Verwendung von `aria-selected` und `aria-checked` in demselben `tree` wird stark abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` auf Treeitems in einem einzelnen Baum, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheidet sich von der Bedeutung und dem Zweck von `aria-checked`, die Bedeutung und der Zweck jedes Zustands ist klar, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In Mehrfachauswahl-Bäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. Zum Beispiel kann der Benutzer in einem typischen Dateisystemnavigator den Fokus bewegen, um eine beliebige Anzahl von Dateien für eine Aktion, wie Kopieren oder Verschieben, auszuwählen. Das visuelle Design sollte deutlich machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn das vollständige Set der verfügbaren Treeitems aufgrund dynamischer Ladeprozesse beim Bewegen des Fokus im Baum oder Scrollen nicht im DOM vorhanden ist, sollte jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) explizit angegeben haben.

Ein `treeitem` muss einen zugänglichen Namen haben. In der Regel stammt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste von übergeordneten und untergeordneten `treeitem`-Knoten, die erweitert und reduziert werden können
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Identifiziert ein Set von `treeitem`-Kindknoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Auf dem Wurzel-`tree` und den `group`-Knoten, die Eltern von `treeitem`-Knoten sind, eingestellt, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Ob auf `true` oder `false` gesetzt, zeigt an, dass ein `treeitem` auswählbar ist, und ob es derzeit ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Ob auf `true` oder `false` gesetzt, zeigt an, dass das `treeitem` überprüft werden kann, und ob es derzeit überprüft ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, der die Standardorientierung ist:

<table>
<tr>
<td><kbd>Rechter Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus zum ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (ein Baumelement ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Linker Pfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem Kindknoten liegt, das auch entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem Elternknoten.
<li>Wenn der Fokus auf einem geschlossenen Baum liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Nach-unten-Pfeil</kbd></td>
<td> Bewegt den Fokus zum nächsten Knoten, der fokussierbar ist, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Nach-oben-Pfeil</kbd></td>
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
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Für Elternknoten öffnet oder schließt es den Knoten. In Einzelauswahl-Bäumen, wenn der Knoten keine Kinder hat, wählt es den aktuellen Knoten aus, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell nacheinander eingegeben werden, bewegt sich der Fokus zum nächsten Knoten, dessen Name mit der Zeichenfolge der eingegebenen Zeichen beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die auf derselben Ebene wie der aktuelle Knoten sind.
</td>
</tr>
</table>

\* Type-ahead wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Mehrfachauswahl-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Mehrfachauswahl-Bäume: Während Sie von Benutzern verlangen können, dass sie eine Modifikatortaste wie <kbd>Shift</kbd> oder <kbd>Control</kbd> beim Navigieren durch die Liste gedrückt halten, um die Auswahlzustände zu behalten, wird das Modell empfohlen, das keine Modifikatortaste erfordert.

#### Empfohlenes Mehrfachauswahlmodell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswah status des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Nach-unten-Pfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahstatus des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Nach-oben-Pfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahstatus des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Shift + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten mit Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional, wenn alle Knoten ausgewählt sind, kann es auch alle Knoten abwählen.</td>
</tr>
</table>

## Beispiele

Im Folgenden wird gezeigt, wie man eine Verzeichnisauflistung von Webentwicklungskursen als Baumansicht auszeichnen könnte:

```html
<div>
  <h3 id="treeLabel">Entwickler Lernen Pfad</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Sprachen</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group">
                <li role="treeitem">Dokumentenstruktur</li>
                <li role="treeitem">Kopf-Elemente</li>
                <li role="treeitem">Semantische Elemente</li>
                <li role="treeitem">Attribute</li>
                <li role="treeitem">Webformulare</li>
              </ul>
            </li>
            <li role="treeitem">CSS</li>
            <li role="treeitem">JavaScript</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Barrierefreiheit</span>
          <ul role="group">
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Web-Performance</span>
          <ul role="group">
            <li role="treeitem">Ladezeit</li>
          </ul>
        </li>
        <li role="treeitem">APIs</li>
      </ul>
    </li>
  </ul>
</div>
```

Das obige Markup bietet die Semantik für eine Baumansicht, aber stellt keine der Interaktivitäten zur Verfügung. Diese müssen mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) auf alle Baumelemente außer demjenigen zu setzen, das den Fokus erhalten soll, wenn der Benutzer in den Baum wechselt, der auf `tabIndex="0"` gesetzt werden sollte.

Alle Tastaturfunktionen in den Tastaturinteraktionen und alle Zeigereignisse müssen programmiert werden, einschließlich der Fokusverwaltung, des Auf- und Abbewegens im Baum, des Erweiterns und Reduzierens von Elternknoten und der Auswahlverwaltung.

Wenn der Baum mehr als 7 Baumelemente hat, wird empfohlen, eine Schnellsuchfunktion einzubeziehen.

## Spezifikationen

{{Specifications}}

## Siehe auch
