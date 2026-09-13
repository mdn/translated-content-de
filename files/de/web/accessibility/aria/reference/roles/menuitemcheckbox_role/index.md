---
title: "ARIA: menuitemcheckbox Rolle"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem Überprüfungsstatus, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüeinträge. Es gibt drei Arten von Menüeinträgen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder besessen werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüeinträge als zugehörige Widgets.

Menüeinträge, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder andere gleichwertige native Rollen wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüeinträge mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Status des Kontrollkästchens für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `checkbox`, zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement überprüft (`true`), nicht überprüft (`false`) ist oder ein Untermenü von anderen Menüeinträgen darstellt, die einen Mix von überprüften und nicht überprüften Werten (`mixed`) haben. Der `mixed`-Wert ist dem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Attribut des Kontrollkästchens ähnlich, das das Erscheinungsbild eines dritten, weder überprüften noch nicht überprüften Status vermittelt.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name aus einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird, oder aus sichtbar nachgefahrenem Inhalt. Beachten Sie, wenn das Label oder der Nachfahreninhalt nicht ausreicht, und vorzugsweise wird [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet, das auf nicht-nachfahren Inhalte verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) wird verwendet, werden diese beiden ARIA-Eigenschaften anderen Nachfahreninhalten für unterstützende Technologien verbergen.

Wenn nicht alle Elemente in der Menge im DOM vorhanden sind, schließen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Wenn `aria-setsize` und `aria-posinset` für ein `menuitemcheckbox` angegeben wird, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, wobei alle Trennzeichen ausgeschlossen sind.

Das `menuitemcheckbox`-Element kann Textinhalt haben, darf aber keinen interaktiven Inhalt als Nachfahren haben und keine Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `menuitemcheckbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da die Nachfahren von `menuitemcheckbox` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus Sicht der unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codefragmente dem folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Reihe häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "überprüften" Status des `menuitemcheckbox` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird die Tastatur auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einem `menubar` befindet oder ein Menü mit einer Menütaste geöffnet wurde, müssen folgende Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Schaltet den `aria-checked`-Status des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Status des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Esc</kbd>
  - : Schließt das Menü. Im Menüband bewegt sich der Fokus auf das übergeordnete Menübanditem.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. Im Menüband bewegt sich der Fokus auf das nächste Element im Menüband und öffnet gegebenenfalls ein Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. Im Menüband bewegt sich der Fokus auf das vorherige Element im Menüband und öffnet gegebenenfalls ein Untermenü.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, bewegt sich der Fokus auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, bewegt sich der Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Status des Kontrollkästchens ändert, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens ändert, sodass es für den sehenden Benutzer überprüft oder nicht überprüft erscheint.
- `onKeyDown`
  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Status des Kontrollkästchens zu ändern, indem es den Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens ändert, sodass es für den sehenden Benutzer überprüft oder nicht überprüft erscheint. Behandelt auch alle im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemcheckbox` überprüft wurde, und wir hätten den ausgewählten Status visuell gestylt, um mithilfe des Attributselektors `[role='menuitemcheckbox'][aria-checked='true']` überprüft auszusehen. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht überprüft ist. Der zugängliche Name "purple" stammt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Status ist ein überprüftes Kontrollkästchen, das wir durch [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, um es sichtbar und in derselben Farbe wie der Inhalt zu machen, indem wir mit dem `aria-checked`-Wert mithilfe von CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und [Vererbung](/de/docs/Web/CSS/Reference/Values/inherit) der Farbe synchronisieren.

```css
[role="menuitemcheckbox"]::before {
  display: inline-block;
  content: "";
  color: transparent;
  width: 1em;
  text-align: center;
  outline: 1px solid;
  margin-inline-end: 2px;
  font-family: sans-serif;
}
[role="menuitemcheckbox"][aria-checked="true"]::before {
  color: inherit;
  content: "X";
}
```

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die Semantik und das Verhalten hat, die Sie benötigen, verwenden Sie dieses anstelle der Umfunktionierung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Formularsteuerung anstelle der Neuerstellung der Funktionalität einer Checkbox mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
