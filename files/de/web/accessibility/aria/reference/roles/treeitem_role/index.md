---
title: "ARIA: Rolle treeitem"
short-title: treeitem
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: 9abb432251513c5fdcaf5aad0764126fc68413c4
---

Ein `treeitem` ist ein Element in einem `tree`.

## Beschreibung

Ein [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ist eine hierarchische Liste mit übergeordneten und untergeordneten Knoten, die sich auf- und zuklappen lassen. Ein `treeitem` ist ein Knoten in einem `tree`. Der Container für die Baumstruktur hat die Rolle `tree`. Alle Knoten der Baumstruktur sind jedoch `treeitem`-Elemente, auch wenn sie selbst verschachtelte `treeitem`-Knoten enthalten.

Ein Beispiel für einen `tree` ist eine Benutzeroberfläche zur Auswahl von Dateien und Ordnern: eine Baumansicht, die Ordner und Dateien anzeigt. Jeder Ordner und jede Datei ist ein `treeitem`. Ordnereinträge sind `treeitem`-Elemente, die aufgeklappt werden können, um den Ordnerinhalt anzuzeigen – Dateien, Ordner oder beides, jeweils als `treeitem`-Elemente. Sie können auch wieder zugeklappt werden, um den Inhalt auszublenden.

In einer Baumhierarchie sind die `treeitem`-Knoten auf der obersten Ebene _Wurzelknoten_. Ein `treeitem` mit untergeordneten Knoten ist ein **Elternknoten**. Ein `treeitem` ohne untergeordnete Knoten ist ein _Endknoten_.

Baumelemente mit untergeordneten Knoten können auf- oder zugeklappt werden, um diese Knoten ein- oder auszublenden. Ein aufgeklappter Elternknoten, dessen untergeordnete Knoten sichtbar sind, ist ein **offener Knoten**. Ein zugeklappter Elternknoten, dessen untergeordnete Knoten nicht sichtbar sind, ist ein **geschlossener Knoten**.

Jeder Elternknoten enthält ein Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder ist dessen Eigentümer. Die Gruppe ist eine aufklappbare Sammlung von `treeitem`-Elementen. Diese untergeordneten Knoten sind keine direkten Kindelemente des Elternknotens. Stattdessen sollten sie im Element mit der Rolle `group` enthalten sein oder diesem zugeordnet sein.

Jeder Elternknoten sollte das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten. Es ist auf `false` gesetzt, wenn der Knoten geschlossen ist, und auf `true`, wenn er offen ist. Endknoten sollten das Attribut `aria-expanded` nicht enthalten, da dessen Vorhandensein assistiven Technologien signalisiert, dass es sich bei dem Knoten um einen Elternknoten handelt.

> [!NOTE]
> Die Navigation in ARIA-Baumansichten ähnelt eher der in nativen Anwendungen als der in Webanwendungen: Sie erfolgt hauptsächlich mit den Pfeiltasten statt mit <kbd>Tab</kbd>. Diese Art der Navigation ist für die meisten Browserinhalte unüblich, in nativen Anwendungen jedoch normal und zu erwarten. Prüfen Sie daher andere Möglichkeiten, die benötigte Funktionalität umzusetzen, bevor Sie eine Baumansicht erstellen.

Jedes `treeitem` muss zu einem `tree` gehören. Platzieren Sie Wurzelelemente innerhalb des `tree`-Elements und untergeordnete Elemente innerhalb des `group`-Elements ihres Elternknotens.

Wenn sich ein Baumelement im DOM außerhalb seines `tree`- oder `group`-Containers befindet, fügen Sie dessen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) dem Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) des Containers hinzu.

Baumansichten können eine Einfachauswahl erlauben, bei der Benutzer für eine Aktion nur ein `treeitem` auswählen können, oder eine Mehrfachauswahl, bei der sie mehrere `treeitem`-Knoten auswählen können. In beiden Fällen muss der Fokus für alle Knoten der Baumansicht verwaltet werden, damit sie per Tastatur zugänglich sind.

In Baumansichten mit Einfachauswahl darf bei nur einem `treeitem` [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (oder [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) auf `true` gesetzt sein. Wenn die Baumansicht den Fokus erhält und zuvor kein `treeitem` ausgewählt war, wird der Fokus auf das erste `treeitem` gesetzt. War zuvor ein `treeitem` ausgewählt, wird der Fokus auf dieses `treeitem` gesetzt.

Bei allen auswählbaren, aber nicht ausgewählten Knoten ist entweder `aria-selected` oder `aria-checked` auf `false` gesetzt. Enthält die Baumansicht nicht auswählbare Knoten, verwenden Sie bei diesen weder `aria-selected` noch `aria-checked`: Das Vorhandensein eines dieser Attribute signalisiert assistiven Technologien, dass der Knoten auswählbar ist.

Es darf jeweils höchstens ein Knoten ausgewählt sein, es sei denn, auf dem `tree`-Knoten ist [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) gesetzt.

Wenn eine Baumansicht mit Mehrfachauswahl den Fokus erhält und zuvor keines ihrer Elemente ausgewählt war, wird der Fokus auf das erste `treeitem` gesetzt. Waren zuvor ein oder mehrere Elemente ausgewählt, wird der Fokus auf das erste ausgewählte `treeitem` gesetzt.

In Baumansichten mit Mehrfachauswahl ist bei allen ausgewählten Baumelementen entweder `aria-selected="true"` (oder `aria-checked="true"`) gesetzt. Bei allen auswählbaren, aber derzeit nicht ausgewählten `treeitem`-Knoten sollte `aria-selected="false"` (oder `aria-checked="false"`) gesetzt sein.

Sowohl `aria-selected` als auch `aria-checked` kann verwendet werden, um die Auswahl von `treeitem`-Elementen anzuzeigen. Manche Benutzeroberflächen verwenden `aria-selected` für Baumansichten mit Einfachauswahl und `aria-checked` für solche mit Mehrfachauswahl.

Von der gemeinsamen Verwendung von `aria-selected` und `aria-checked` innerhalb desselben `tree` wird dringend abgeraten. Verwenden Sie nicht beide Attribute für `treeitem`-Elemente in einer Baumansicht, es sei denn, Bedeutung und Zweck von `aria-selected` unterscheiden sich von denen von `aria-checked`, Bedeutung und Zweck der jeweiligen Zustände sind erkennbar und die Benutzeroberfläche bietet eine eigene Möglichkeit, jeden Zustand zu steuern.

In Baumansichten mit Mehrfachauswahl sollte der Auswahlzustand unabhängig vom Fokus sein. In einem typischen Dateisystem-Navigator können Benutzer beispielsweise den Fokus verschieben, um beliebig viele Dateien für eine Aktion wie Kopieren oder Verschieben auszuwählen. Die visuelle Gestaltung sollte deutlich machen, welche Elemente ausgewählt sind und welches Element den Fokus hat.

Wenn aufgrund dynamischen Ladens beim Verschieben des Fokus oder beim Scrollen durch die Baumansicht nicht alle verfügbaren `treeitem`-Elemente im DOM vorhanden sind, sollten für jedes `treeitem` [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) angegeben werden.

Ein `treeitem` muss einen zugänglichen Namen haben. In der Regel stammt dieser Name aus dem Inhalt des `treeitem`. Der zugängliche Name kann auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
  - : Der Container für die hierarchische Liste über- und untergeordneter `treeitem`-Knoten, die sich auf- und zuklappen lassen.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Kennzeichnet eine Gruppe untergeordneter `treeitem`-Knoten.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wird für übergeordnete `treeitem`-Knoten gesetzt und zeigt an, ob die Gruppe ihrer untergeordneten Knoten aufgeklappt (`true`) oder zugeklappt (`false`) ist.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Wird auf `true` oder `false` gesetzt und zeigt an, dass ein `treeitem` auswählbar ist und ob es derzeit ausgewählt ist.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Wird auf `true` oder `false` gesetzt und zeigt an, dass ein `treeitem` angehakt werden kann und ob es derzeit angehakt ist.

### Tastaturinteraktionen

Für einen vertikal ausgerichteten `tree`, die Standardausrichtung, gilt:

<table>
<tr>
<td><kbd>Pfeil nach rechts</kbd></td>
<td>
<ul>
<li>Liegt der Fokus auf einem geschlossenen Knoten, wird dieser geöffnet; der Fokus bleibt unverändert.
<li>Liegt der Fokus auf einem offenen Knoten, wechselt er zum ersten untergeordneten Knoten.
<li>Liegt der Fokus auf einem Endknoten (einem Baumelement ohne untergeordnete Knoten), geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach links</kbd></td>
<td>
<ul>
<li>Liegt der Fokus auf einem offenen Knoten, wird dieser geschlossen.
<li>Liegt der Fokus auf einem untergeordneten Knoten, der zugleich ein Endknoten oder ein geschlossener Knoten ist, wechselt er zum Elternknoten.
<li>Liegt der Fokus auf einem Wurzelknoten, der zugleich ein Endknoten oder ein geschlossener Knoten ist, geschieht nichts.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach unten</kbd></td>
<td> Verschiebt den Fokus zum nächsten fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pfeil nach oben</kbd></td>
<td> Verschiebt den Fokus zum vorherigen fokussierbaren Knoten, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Pos1</kbd></td>
<td> Verschiebt den Fokus zum ersten Knoten der Baumansicht, ohne einen Knoten zu öffnen oder zu schließen.
</td>
</tr>
<tr>
<td><kbd>Ende</kbd></td>
<td> Verschiebt den Fokus zum letzten fokussierbaren Knoten der Baumansicht, ohne einen Knoten zu öffnen.
</td>
</tr>
<tr>
<td><kbd>Eingabe</kbd></td>
<td>Führt die Standardaktion des aktuell fokussierten Knotens aus. Bei Elternknoten kann die Standardaktion darin bestehen, den Knoten zu öffnen oder zu schließen. In Baumansichten mit Einfachauswahl, bei denen die Auswahl nicht dem Fokus folgt, wird durch die Standardaktion üblicherweise der aktuelle Knoten ausgewählt, sofern er nicht bereits ausgewählt ist.
</td>
</tr>
<tr>
<td>Ein Zeichen eingeben*</td>
<td>
<ul>
<li>Der Fokus wechselt zum nächsten Knoten, dessen Name mit dem eingegebenen Zeichen beginnt.
<li>Werden mehrere Zeichen schnell hintereinander eingegeben, wechselt der Fokus zum nächsten Knoten, dessen Name mit der eingegebenen Zeichenfolge beginnt.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Klappt alle Geschwisterknoten auf, die sich auf derselben Ebene wie der aktuelle Knoten befinden.
</td>
</tr>
</table>

\* Die Suche durch Eingabe wird für alle Baumansichten empfohlen, insbesondere für solche mit mehr als 7 Wurzelknoten.

### Tastaturinteraktionen bei Mehrfachauswahl

Für Baumansichten mit Mehrfachauswahl gibt es zwei Interaktionsmodelle: Sie können verlangen, dass Benutzer beim Navigieren durch die Liste eine Modifikatortaste wie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt halten, damit Auswahlzustände nicht verloren gehen. Empfohlen wird jedoch das Modell, bei dem keine Modifikatortaste gedrückt gehalten werden muss.

#### Empfohlenes Modell für die Mehrfachauswahl

<table>
<tr>
<td><kbd>Leertaste</kbd></td>
<td> Schaltet den Auswahlzustand des fokussierten Knotens um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach unten</kbd> (Optional)</td>
<td> Verschiebt den Fokus zum nächsten Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Pfeil nach oben</kbd> (Optional)</td>
<td> Verschiebt den Fokus zum vorherigen Knoten und schaltet dessen Auswahlzustand um.
</td>
</tr>
<tr>
<td><kbd>Umschalt + Leertaste</kbd> (Optional)</td>
<td> Wählt alle aufeinanderfolgenden Knoten vom zuletzt ausgewählten bis zum aktuellen Knoten aus.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Pos1</kbd> (Optional)</td>
<td> Wählt den fokussierten Knoten und alle Knoten bis zum ersten Knoten aus. Optional wird der Fokus zum ersten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + Umschalt + Ende</kbd> (Optional)</td>
<td> Wählt den fokussierten Knoten und alle Knoten bis zum letzten Knoten aus. Optional wird der Fokus zum letzten Knoten verschoben.
</td>
</tr>
<tr>
<td><kbd>Strg + A</kbd> (Optional)</td>
<td> Wählt alle Knoten der Baumansicht aus. Optional können bei bereits ausgewählten Knoten auch alle Knoten abgewählt werden.</td>
</tr>
</table>

## Beispiele

So könnte eine Verzeichnisliste mit Kursen zur Webentwicklung als Baumansicht ausgezeichnet werden:

```html
<div>
  <h3 id="treeLabel">Developer Learning Path</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Languages</span>
          <ul role="group" hidden>
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group" hidden>
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
          <ul role="group" hidden>
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Web Performance</span>
          <ul role="group" hidden>
            <li role="treeitem">Load time</li>
          </ul>
        </li>
        <li role="treeitem">APIs</li>
      </ul>
    </li>
  </ul>
</div>
```

Das obige Beispiel stellt die Semantik für eine Baumansicht bereit, jedoch keine Interaktivität. Diese muss mit JavaScript hinzugefügt werden.

Wenn die Baumelemente standardmäßig nicht fokussierbar sind, kann mit JavaScript für alle Baumelemente [`tabIndex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) gesetzt werden. Für das Element, das den Fokus erhalten soll, wenn Benutzer mit der Tabulatortaste in die Baumansicht wechseln, sollte stattdessen `tabIndex="0"` gesetzt werden.

Die gesamte unter „Tastaturinteraktionen“ beschriebene Tastaturfunktionalität sowie alle Pointer-Ereignisse müssen programmiert werden. Dazu gehören die Fokusverwaltung, die Navigation durch die Baumansicht nach oben und unten, das Auf- und Zuklappen von Elternknoten sowie die Verwaltung der Auswahl.

Wenn die Baumansicht mehr als 7 Baumelemente enthält, wird eine Suchfunktion durch Eingabe empfohlen.

## Spezifikationen

{{Specifications}}
