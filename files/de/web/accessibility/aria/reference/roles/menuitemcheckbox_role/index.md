---
title: "ARIA: Rolle menuitemcheckbox"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von ihm besessen sein, möglicherweise verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder anderen gleichwertigen nativen Rollen wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden sollte.

Ähnlich dem Attribut `checked` von {{HTMLElement('input')}}s des Typs `checkbox`, zeigt das Attribut `aria-checked` eines `menuitemcheckbox` an, ob das Menüelement ausgewählt (`true`), nicht ausgewählt (`false`) ist oder ein Untermenü von anderen Menüelementen darstellt, die eine Mischung aus ausgewählten und nicht ausgewählten Werten haben (`mixed`). Der Wert `mixed` ist ähnlich dem Attribut [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) des Kontrollkästchens, das das Erscheinungsbild eines dritten, weder ausgewählten noch nicht ausgewählten Zustands gibt.

Ein zugänglicher Name ist erforderlich. Ideal ist, dass der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element stammt, wenn `<input type="checkbox">` verwendet wird, oder von sichtbaren, nachgeordneten Inhalten. Erkennen Sie, wenn das Label oder die nachgeordneten Inhalte nicht ausreichen, und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um sich auf nicht-nachgeordneten Inhalt zu beziehen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, denn diese beiden ARIA-Eigenschaften verbergen andere nachgeordnete Inhalte vor unterstützenden Technologien.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Bei der Angabe von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ausgenommen jegliche Trennzeichen.

Das Element `menuitemcheckbox` kann phrasierende Inhalte haben, aber keinen interaktiven Inhalt als Nachfahren und keine Nachfahren mit einem spezifizierten `tabindex`-Attribut.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachgeordneten Elemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfahren von `menuitemcheckbox` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Sicht der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} dem folgenden entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)-Rolle
  - : Widget, das eine Liste mit häufig verwendeten Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)-Rolle
  - : Ähnlich wie `menu` für ein konsistentes Set häufig verwendeter Befehle, das sichtbar bleibt und normalerweise horizontal dargestellt wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des menuitemcheckbox an.

### Tastatur-Interaktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn das `menuitemcheckbox` in einem Untermenü in einem `menubar` oder einem mit einer Menü-Schaltfläche geöffneten Menü ist, müssen die folgenden Tastatur-Interaktionen programmiert sein. :

- <kbd>Eingabetaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Esc</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleistenelement gesetzt.
- <kbd>Pfeil-rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste gesetzt und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil-links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste gesetzt und öffnet ein Untermenü, falls vorhanden.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element verschoben.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, wird der Fokus nicht verschoben.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Kontrollkästchen als auch das zugehörige Label, die den Zustand des Kontrollkästchens ändern, indem der Wert des `aria-checked`-Attributs verändert und das Erscheinungsbild des Kontrollkästchens für den sehenden Benutzer angezeigt wird, als wäre es ausgewählt oder nicht ausgewählt.
- `onKeyDown`
  - : Handhabt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens für den sehenden Benutzer geändert wird. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation aufgeführt sind.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, würde es anzeigen, dass das `menuitemcheckbox` ausgewählt ist, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass es durch den Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` als ausgewählt aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` assistiven Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt von den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewähltes Kontrollkästchen, das wir durch [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, indem es sichtbar und in der gleichen Farbe wie der Inhalt ist, indem wir es mit dem `aria-checked`-Wert synchronisieren, indem wir [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und [Vererben](/de/docs/Web/CSS/Reference/Values/inherit) verwenden.

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

Die erste Regel von ARIA lautet: Wenn ein nativer HTML- oder Attribut das erforderliche Semantische und Verhalten bietet, verwenden Sie dieses anstelle der Umnutzung eines Elements und das Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Formularsteuerungselement zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
