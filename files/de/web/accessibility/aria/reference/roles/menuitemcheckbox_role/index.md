---
title: "ARIA: Rolle menuitemcheckbox"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in oder in Besitz eines Elements mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein, optional eingebettet in ein Gruppenelement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Eingebettet-Sein oder anderweitig im Besitz-Sein (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder einer anderen äquivalenten nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien offenzulegen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}-Elementen vom Typ `checkbox`, zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) ist oder ein Untermenü von anderen Menüelementen darstellt, die eine Mischung aus aktiven und inaktiven Werten aufweisen (`mixed`). Der Wert `mixed` ist ähnlich dem Attribut [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) des Kontrollkästchens, welches das Erscheinungsbild eines dritten, weder aktivierten noch deaktivierten Zustands gibt.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem assoziierten {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird oder aus sichtbarem, untergeordnetem Inhalt bestehen. Wenn das Label oder untergeordneter Inhalt nicht ausreichend ist, und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das nicht-untergeordneten Inhalt referenziert, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen untergeordneten Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente der Menge im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Wenn `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox` spezifiziert werden, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü ohne jegliche Separatoren.

Das `menuitemcheckbox`-Element kann Inhaltsbestandteile enthalten, darf jedoch keine interaktiven Inhalte als Nachfahren haben und keine Nachfahren mit einem spezifizierten `tabindex`-Attribut haben.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibilty-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachgeordneten Elemente eines jeden `menuitemcheckbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Da Nachkommen von `menuitemcheckbox` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codefragmente dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste gemeinsamer Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu` für eine konsistente Gruppe häufig verwendeter Befehle, die sichtbar bleibt und normalerweise horizontal dargestellt wird.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "aktivierten" Zustand des `menuitemcheckbox` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem mit einem Menü-Button geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der `menubar` wird der Fokus auf das übergeordnete `menubar`-Element verschoben.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der `menubar` wird der Fokus auf das nächste Element in der `menubar` verschoben und öffnet ein eventuell vorhandenes Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der `menubar` wird der Fokus auf das vorherige Element in der `menubar` verschoben und öffnet ein eventuell vorhandenes Untermenü.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element mit einem Namen, der mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Bearbeitet Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und des Aussehens des Kontrollkästchens ändert, damit es für sehende Benutzer aktiviert oder deaktiviert erscheint.
- `onKeyDown`
  - : Bearbeitet den Fall, wenn der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und des Aussehens des Kontrollkästchens zu ändern, damit es für sehende Benutzer aktiviert oder deaktiviert erscheint. Bearbeitet auch alle in der oben genannten Tastaturnavigationssektion aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, gehört aber nicht zur Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte es angezeigt, dass das `menuitemcheckbox` aktiviert ist, und wir hätten den ausgewählten Zustand mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` visuell so gestaltet, dass es aktiviert aussieht. Stattdessen zeigt die Präsenz von `aria-checked="false"` den unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar ist, aber derzeit nicht aktiviert ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein geprüftes Kontrollkästchen, das wir durch die Verwendung von [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir es sichtbar machen und in der gleichen Farbe wie der Inhalt durch Synchronisation mit dem `aria-checked`-Wert unter Verwendung von CSS- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) und [Vererbung](/de/docs/Web/CSS/inherit) gestalten.

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

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder -Attribut die benötigten Semantiken und Verhaltensweisen bietet, verwenden Sie es anstelle der Zweckentfremdung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Element/input/checkbox) Formsteuerung zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
