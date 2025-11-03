---
title: "ARIA: menuitemradio Rolle"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Ein `menuitemradio` ist ein auswählbarer Menüpunkt in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüeinträge. Es gibt drei Arten von Menüeinträgen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der markierten Menüeinträge auf einen innerhalb einer Gruppe zu begrenzen, verwenden Sie die `menuitemradio`-Rolle für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbarer Menüpunkt in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig markiert sein kann.

Die drei Menüpunktelemente können nur von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder besessen werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüeinträge als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menuelement definiert; das `group`-Element ist nicht notwendig.

Menüeinträge mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Optionsfelds für unterstützende Technologien anzuzeigen, es sei denn, Sie verwenden [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio` gibt das `aria-checked`-Attribut eines `menuitemradio` an, ob der Menüpunkt markiert (`true`) oder nicht markiert (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig markiert sein. Wenn ein Element in der Gruppe markiert wird, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor markierte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht markiert wird, indem der Wert des `aria-checked`-Attributs auf `false` geändert wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe markiert wird oder wenn Sie das Markieren und Entmarkieren eines Elements ermöglichen möchten, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, sollten Sie jede Gruppe von zusammengehörigen `menuitemradio`-Elementen in einem `group`-Element enthalten oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüeinträgen mit einem `separator`-Element (oder einem HTML-Element mit einer äquivalenten Rolle, wie einem {{HTMLElement('fieldset')}}-Gruppierung oder einem thematischen Trennstrich {{HTMLElement('hr')}}) abgrenzen.

Ein barrierefreier Name ist erforderlich. Idealerweise sollte der barrierefreie Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn Sie `<input type="radio">` oder sichtbaren, nachgeordneten Inhalt verwenden. Wenn das Label oder der nachgeordnete Inhalt nicht ausreichen, verwenden Sie vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), um nicht-nachgeordneten Inhalt zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), da diese beiden ARIA-Eigenschaften anderen nachgeordneten Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Set im DOM präsent sind, fügen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) hinzu. Wenn Sie `aria-setsize` und `aria-posinset` auf einem `menuitemradio` festlegen, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, wobei Trennzeichen ausgeschlossen werden.

Das `menuitemradio`-Element kann Phänomeninhalt enthalten, aber keinen interaktiven Inhalt als Nachkommen oder Nachkommen mit einem angegebenen `tabindex`-Attribut haben.

### Alle Nachkommen sind präsentierend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `menuitemradio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachgeordneten Elemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachkommen von `menuitemradio` präsentierend sind, ist der folgende Code äquivalent:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Perspektive eines Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste gemeinsamer Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "marked"-Zustand des menuitemradio an

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einem `menubar` oder einem mit einer Menüschaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht markiert, markiert den fokussierten `menuitemradio` und entmarkiert jedes andere markierte `menuitemradio`-Element in derselben Gruppe. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht markiert, markiert den fokussierten `menuitemradio` und entmarkiert jedes andere markierte `menuitemradio`-Element in derselben Gruppe, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt der Fokus auf das übergeordnete Menüelement.
- <kbd>Rechter Pfeil</kbd>
  - : Schließt das Untermenü. In der Menüleiste verschiebt der Fokus auf das nächste Element in der Menüleiste und öffnet gegebenenfalls ein Untermenü.
- <kbd>Linker Pfeil</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt der Fokus auf das vorherige Element in der Menüleiste und öffnet gegebenenfalls ein Untermenü.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Befindet sich der Fokus auf dem letzten Element, wird er auf das erste Element verschoben.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Befindet sich der Fokus auf dem ersten Element, wird er auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Buchstabe</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Buchstaben beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Buchstaben beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignisbehandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Optionsfeld als auch auf das zugehörige Label, die den Zustand des Optionsfelds ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Optionsfelds so geändert wird, dass es für sehende Benutzer als markiert oder nicht markiert erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Optionsfelds zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Optionsfelds so geändert wird, dass es für sehende Benutzer als markiert oder nicht markiert erscheint. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation oben aufgeführt sind.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht den `menuitemradio` fokussierbar, aber nicht Teil der Tabulatorreihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte es angezeigt, dass der `menuitemradio` markiert war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass er mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` markiert aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass der `menuitemradio` auswählbar, aber derzeit nicht markiert ist. Der barrierefreie Name "lila" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein markiertes Optionsfeld, das wir mithilfe von [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, es sichtbar und in derselben Farbe wie der Inhalt machen, indem wir es mit dem `aria-checked`-Wert mithilfe von CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) synchronisieren und die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) ändern.

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/Reference/Properties/background) Kurzschrift-Eigenschaft, da diese die von uns verwendete [`background-clip`](/de/docs/Web/CSS/Reference/Properties/background-clip) Eigenschaft zum Erstellen des Optionsfeldeffekts überschreibt.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder Attribut die Semantik und das Verhalten aufweist, die Sie benötigen, verwenden Sie diesen anstelle der Zweckentfremdung eines Elements und des Hinzufügens einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerung anstelle der Neuschaffung der Funktionalität eines Optionsfelds mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
