---
title: "ARIA: menuitemradio Rolle"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Ein `menuitemradio` ist ein auswählbares Menüpunktelement in einer Menge von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt werden kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente innerhalb einer Gruppe auf eines zu begrenzen, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüpunktelement in einer Menge von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt werden kann.

Die drei Menüelemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von ihm besessen sein, optional innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt. Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) beinhalten, um den Status des Optionsfelds für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio` zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls es eines gab, abgewählt wird, indem der Wert des `aria-checked`-Attributs auf `false` geändert wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt werden kann, oder wenn Sie das Aus- und Abwählen eines Elements ermöglichen möchten, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` sowohl eine Gruppe von `menuitemradio`-Elementen als auch andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, sollten Sie jede Gruppe von zusammenhängenden `menuitemradio`-Elementen in einem `group`-Element enthalten oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüpunkten mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle, wie z. B. einem {{HTMLElement('fieldset')}}-Gruppierung oder einem thematischen {{HTMLElement('hr')}}-Trennstrich) abtrennen.

Ein barrierefreier Name ist erforderlich. Idealerweise sollte der barrierefreie Name aus einem zugehörigen {{htmlelement('label')}}-Element kommen, wenn `<input type="radio">` verwendet wird, oder aus sichtbarem, untergeordnetem Inhalt. Beachten Sie, dass wenn das Label oder der untergeordnete Inhalt nicht ausreichend ist und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um nicht-nachfolgende Inhalte zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, diese beiden ARIA-Eigenschaften anderen untergeordneten Inhalt vor unterstützenden Technologien ausblenden werden.

Wenn nicht alle Elemente der Gruppe im DOM vorhanden sind, fügen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Beim Spezifizieren von `aria-setsize` und `aria-posinset` auf einem `menuitemradio`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ausgenommen jegliche Trennzeichen.

Das `menuitemradio`-Element kann phrasalen Inhalt haben, darf jedoch keinen interaktiven Inhalt als Nachkommen haben und keine Nachkommen mit einem `tabindex`-Attribut spezifiziert haben.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzerschnittstellen-Komponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `menuitemradio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachkommen von `menuitemradio` präsentational sind, ist folgender Code gleichwertig:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Für den Benutzer assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von allgemeinen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, der sichtbar bleibt und typischerweise horizontal präsentiert wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` eingestellt, zeigt es den aktuellen "ausgewählten" Zustand des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn das `menuitemradio` in einem Untermenü einer `menubar` oder eines mit einem Menüknopf geöffneten Menüs ist, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl von jedem anderen ausgewählten `menuitemradio`-Element in derselben Gruppe auf. Schließt außerdem das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl von jedem anderen ausgewählten `menuitemradio`-Element in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleistelement verschoben.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste verschoben, wobei jedes vorhandene Untermenü geöffnet wird.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste verschoben, wobei jedes vorhandene Untermenü geöffnet wird.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf den Radio-Button als auch auf das zugehörige Label, das den Status des Radio-Buttons ändert, indem es den Wert des `aria-checked`-Attributs und das Aussehen des Radio-Buttons ändert, damit es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, wo der Benutzer die <kbd>Leertaste</kbd> drückt, um den Status des Radio-Buttons zu ändern, indem der Wert des `aria-checked`-Attributs und das Aussehen des Radio-Buttons geändert wird, damit es für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint. Verwaltet auch alle im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand so visuell gestaltet, dass er durch den Attributselektor `[role='menuitemradio'][aria-checked='true']` als ausgewählt erscheint. Stattdessen zeigt die Präsenz von `aria-checked="false"` unterstützenden Technologien, dass das `menuitemradio` auswählbar ist, aber derzeit nicht ausgewählt. Der zugängliche Name "purple" stammt vom Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein aktiviertes Optionsfeld, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir es sichtbar und dieselbe Farbe wie der Inhalt machen, indem wir es mit dem `aria-checked`-Wert synchronisieren, indem wir CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwenden und die [`background-color`](/de/docs/Web/CSS/background-color) ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Kurzschrift-Eigenschaft, da diese die von uns verwendete [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreibt, um den Effekt des Radio-Buttons zu erzeugen.

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die Semantik und das Verhalten besitzt, die Sie benötigen, verwenden Sie es anstelle der Neuzuweisung eines Elements und das Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Radio-Button](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Radio-Buttons mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
