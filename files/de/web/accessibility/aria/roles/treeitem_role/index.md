---
title: "ARIA: treeitem-Rolle"
slug: Web/Accessibility/ARIA/Roles/treeitem_role
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) ist eine hierarchische Liste mit über- und untergeordneten Knoten, die erweitert und reduziert werden können. Ein `treeitem` ist ein Knoten in einem `tree`. Die Wurzel des Baums ist `tree`, aber alle Baumknoten sind `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten enthalten.

Ein Beispiel für einen `tree` ist eine Dateisystemauswahl-Benutzeroberfläche: Eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordner, die `treeitem`-Elemente sind, können erweitert werden, um den Inhalt des Ordners anzuzeigen — das können Dateien, Ordner oder beides sein, allesamt `treeitems` — und reduziert werden, um den Inhalt zu verbergen.

In einer Baumhierarchie hat der _Wurzelknoten_ die Rolle `tree`. Alle anderen Knoten, außer dem Wurzelknoten, haben die Rolle `treeitem`, unabhängig davon, ob sie Kinder haben oder nicht. Ein `treeitem`, das ein übergeordnetes Element ist, ist ein **übergeordneter Knoten**. Ein `treeitem`, das kein übergeordnetes Element ist, ist ein _Endknoten_.

Baumelemente, die Kinder haben, können erweitert oder reduziert werden, wodurch ihre Kinder angezeigt oder verborgen werden. Ein übergeordneter Knoten, der erweitert ist, sodass seine Kindknoten sichtbar sind, ist ein **offener Knoten**. Ein übergeordneter Knoten, der reduziert ist, sodass die Kindknoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder übergeordnete Knoten enthält oder besitzt ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Ein übergeordneter Knoten ist eine erweiterbare Sammlung von `treeitem`-Elementen. Diese Kindknoten sind keine direkten Nachfahren des übergeordneten Knotens: Sie sollten stattdessen in einem Element mit der Rolle `group` eingeschlossen sein.

Jeder übergeordnete Knoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten. Es ist auf `false` gesetzt, wenn er geschlossen ist, und auf `true`, wenn er geöffnet ist. Endknoten sollten nicht das Attribut `aria-expanded` enthalten, da die Anwesenheit des Attributs assistiven Technologien anzeigt, dass der Knoten ein übergeordneter Knoten ist.

> [!NOTE]
> ARIA-Baumansichten verwenden eine Navigation, die eher nativen Anwendungen ähnelt als Webanwendungen und werden hauptsächlich mit den Pfeiltasten auf der Tastatur anstelle der <kbd>Tab</kbd> navigiert. Diese Form der Navigation ist für die meisten Browser-Inhalte nicht üblich, jedoch normal und erwartet für native Anwendungen. Aus diesem Grund sollten Sie alternative Optionen in Betracht ziehen, um die gewünschte Funktionalität zu erreichen, bevor Sie eine Baumansicht erstellen.

Jedes Element mit einer `treeitem`-Rolle muss in einem Element mit der Rolle `tree` verschachtelt oder von ihm besessen sein. Baumelemente können ein Kind von `tree`, `treeitem` oder einem Element mit der Rolle `group` sein, das in einem Element mit der Rolle `tree` oder `treeitem` enthalten ist oder von ihm besessen wird. Wenn ein `treeitem` nicht in einem `tree` verschachtelt ist oder in einer von einem `tree` besessenen `group` verschachtelt ist, geben Sie die [`id`](/de/docs/Web/HTML/Global_attributes#id) des `treeitem` im Attributwert [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) des besitzenden `tree`, `treeitem` oder `group`-Elements an.

Bäume können "single-select" sein, sodass Benutzer nur ein `treeitem` für eine Aktion auswählen können, oder "multi-select", bei denen Benutzer mehrere `treeitem`-Knoten für eine Aktion auswählen können. In beiden Fällen muss der Fokus für alle Baum-Nachkommen gesteuert werden, um tastaturzugänglich zu sein.

In Single-Select-Bäumen kann nur ein Treeitem das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) auf `true` gesetzt haben. Wenn ein Single-Select-Baum den Fokus erhält, wird, falls kein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, der Fokus auf das erste `treeitem` gesetzt. Wenn ein `treeitem` ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das einzelne `treeitem` gesetzt, das `aria-selected="true"` gesetzt hat.

Alle Knoten, die auswählbar, aber nicht ausgewählt sind, haben entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Wenn der Baum Knoten enthält, die nicht auswählbar sind, sollten weder `aria-selected` noch `aria-checked` enthalten sein, da das Vorhandensein eines der Attribute assistierenden Technologien anzeigt, dass der Knoten auswählbar ist.

Es kann jeweils nicht mehr als ein Knoten ausgewählt werden, es sei denn, der `tree`-Knoten hat [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) gesetzt.

Wenn ein Multi-Select-Baum den Fokus erhält und keiner der Baumknoten ausgewählt ist, bevor der Baum den Fokus erhält, wird der Fokus auf das erste `treeitem` gesetzt. Wenn ein oder mehrere Baumknoten ausgewählt sind, bevor der Baum den Fokus erhält, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Multi-Select-Bäumen haben alle ausgewählten Baumelemente entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Alle Baumelemente, die auswählbar, aber nicht aktuell ausgewählt sind, sollten `aria-selected="false"` (oder `aria-checked="false"`) gesetzt haben.

Entweder `aria-selected` oder `aria-checked` kann verwendet werden, um die Auswahl für `treeitem`-Elemente anzuzeigen. Einige Benutzeroberflächen zeigen die Auswahl in Single-Select-Bäumen mit `aria-selected` an und in Multi-Select-Bäumen mit `aria-checked`.

Die gleichzeitige Verwendung von `aria-selected` und `aria-checked` im selben `tree` wird dringend abgeraten. Verwenden Sie nicht sowohl `aria-selected` als auch `aria-checked` bei Treeitems in einem einzigen Baum, es sei denn, der Sinn und Zweck von `aria-selected` unterscheidet sich von dem von `aria-checked`; der Sinn und Zweck jedes Zustands ist klar, und die Benutzeroberfläche bietet eine separate Methode zur Steuerung jedes Zustands.

In Multi-Select-Bäumen sollte der ausgewählte Zustand unabhängig vom Fokus sein. In einem typischen Dateisystem-Navigator kann der Benutzer beispielsweise den Fokus verschieben, um eine beliebige Anzahl von Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Das visuelle Design sollte klar machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn die gesamte Menge der verfügbaren Treeitems aufgrund dynamischen Ladens nicht im DOM vorhanden ist, während der Benutzer den Fokus verschiebt oder im Baum scrollt, sollte jedes `treeitem` die Attribute [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) spezifiziert haben.

Ein `treeitem` muss einen zugänglichen Namen haben. Normalerweise kommt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) Rolle
  - : Der Wurzelknoten für die hierarchische Liste von über- und untergeordneten `treeitem`-Knoten, die erweitert und reduziert werden können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von `treeitem`-Kindknoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Setzt sowohl auf dem Wurzel-`tree` als auch auf `group`-Knoten, die Eltern von `treeitem`-Knoten sind, um anzuzeigen, ob die Baumansicht erweitert (`true`) oder reduziert (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Auf `true` oder `false` gesetzt, zeigt an, ob ein `treeitem` auswählbar ist und ob es aktuell ausgewählt ist oder nicht.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Auf `true` oder `false` gesetzt, zeigt an, ob das `treeitem` angekreuzt werden kann und ob es aktuell angekreuzt ist oder nicht.

### Tastaturinteraktionen

Für einen vertikal orientierten `tree`, was die Standardausrichtung ist:

<table>
<tr>
<td><kbd>Rechtspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem geschlossenen Knoten liegt, wird der Knoten geöffnet; der Fokus bewegt sich nicht.
<li>Wenn der Fokus auf einem offenen Knoten liegt, bewegt sich der Fokus zum ersten Kindknoten.
<li>Wenn der Fokus auf einem Endknoten (einem Treeitem ohne Kinder) liegt, passiert nichts.
</td>
</tr>
<tr>
<td><kbd>Linkspfeil</kbd></td>
<td>
<ul>
<li>Wenn der Fokus auf einem offenen Knoten liegt, wird der Knoten geschlossen.
<li>Wenn der Fokus auf einem Kindknoten liegt, der entweder ein Endknoten oder ein geschlossener Knoten ist, bewegt sich der Fokus zu seinem übergeordneten Knoten.
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
<td><kbd>Eingabetaste</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei übergeordneten Knoten wird der Knoten geöffnet oder geschlossen. In Single-Select-Bäumen wird, wenn der Knoten keine Kinder hat, der aktuelle Knoten ausgewählt, wenn er nicht bereits ausgewählt ist (was die Standardaktion ist).
</td>
</tr>
<tr>
<td>Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus bewegt sich zum nächsten Knoten, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Wenn mehrere Zeichen schnell hintereinander eingegeben werden, bewegt sich der Fokus zum nächsten Knoten, dessen Name mit der eingegebenen Zeichenkette beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Erweitert alle Geschwister, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Type-ahead wird für alle Bäume empfohlen, insbesondere für Bäume mit mehr als 7 Wurzelknoten

### Multi-Select-Tastaturinteraktionen

Es gibt zwei Interaktionsmodelle für Multi-Select-Bäume: Während Sie verlangen können, dass Benutzer eine Modifizierertaste wie <kbd>Umschalt</kbd> oder <kbd>Steuerung</kbd> gedrückt halten, während sie die Liste navigieren, um zu vermeiden, dass Auswahlstatus verloren gehen, wird das Modell empfohlen, das keine Modifizierertaste erfordert.

#### Empfohlenes Multi-User-Select-Modell

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Wechselt den Auswahlstatus des fokussierten Knotens.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Abwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlstatus des nächsten Knotens.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Aufwärtspfeil</kbd> (Optional)</td>
<td> Bewegt den Fokus und wechselt den Auswahlstatus des vorherigen Knotens.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td> Wählt zusammenhängende Knoten vom zuletzt ausgewählten Knoten bis zum aktuellen Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Home</kbd> (Optional)</td>
<td> Wählt den Knoten im Fokus und alle Knoten bis zum ersten Knoten aus. Optional bewegt sich der Fokus zum ersten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td> Wählt den Knoten im Fokus und alle Knoten bis zum letzten Knoten aus. Optional bewegt sich der Fokus zum letzten Knoten.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten im Baum aus. Optional kann es auch alle Knoten abwählen, wenn alle Knoten ausgewählt sind.</td>
</tr>
</table>

## Beispiele

Im Folgenden wird dargestellt, wie ein Verzeichnis mit Webentwicklungskursen als Baumansicht markiert wird:

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

Das Obige liefert die Semantik für eine Baumansicht, bietet jedoch keine Interaktivität. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann JavaScript verwendet werden, um [`tabIndex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) bei allen Treeitems außer demjenigen, das den Fokus erhalten soll, wenn der Benutzer in den Baum tabbt, auf `tabIndex="0"` zu setzen.

Alle Tastaturfunktionen in den Tastaturinteraktionen und allen Zeigenereignissen müssen programmiert werden, einschließlich Fokusverwaltung, nach oben und unten im Baum navigieren, übergeordnete Knoten erweitern und reduzieren sowie Auswahlverwaltung.

Wenn der Baum mehr als 7 Baumelemente hat, wird empfohlen, eine Type-ahead-Funktionalität einzubauen.

## Spezifikationen

{{Specifications}}

## Siehe auch
