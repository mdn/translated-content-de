---
title: "ARIA: role-menuitemcheckbox"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder besessen werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Dass sie in einem `menu` oder `menubar` verschachtelt oder anderweitig besessen sind (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)), identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder einer anderen gleichwertigen nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien offenzulegen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet. In diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}-Elementen vom Typ `checkbox` zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement markiert (`true`), nicht markiert (`false`) oder ein untergeordnetes Menü aus anderen Menüelementen darstellt, die eine Mischung aus markierten und nicht markierten Werten aufweisen (`mixed`). Der Wert `mixed` ist ähnlich dem Attribut [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) des Kontrollkästchens, das das Erscheinungsbild eines dritten Zustands verleiht, der weder markiert noch nicht markiert ist.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element kommen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbarem, abgeleiteten Inhalt. Wenn das Label oder der abgeleitete Inhalt nicht ausreichend ist und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um auf nicht-abgeleiteten Inhalt zu verweisen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen abgeleiteten Inhalt vor unterstützende Technologien verbergen.

Wenn alle Elemente des Satzes nicht im DOM vorhanden sind, fügen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) hinzu. Wenn `aria-setsize` und `aria-posinset` bei einem `menuitemcheckbox` angegeben werden, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ohne Trennzeichen eingeschlossen.

Das `menuitemcheckbox`-Element kann Phraseninhalt haben, darf jedoch keinen interaktiven Inhalt als Nachfahren haben und keine Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrelemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfahren von `menuitemcheckbox` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste von allgemeinen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu` für einen konsistenten Satz von häufig verwendeten Befehlen, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, gibt es den aktuellen "geprüften" Zustand des `menuitemcheckbox` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem mit einem Menüknopf geöffneten Menü ist, müssen die folgenden Tastaturinteraktionen einprogrammiert werden:

- <kbd>Enter</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Space</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüelement verschoben.
- <kbd>Rechtspfeil</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste verschoben, wobei jedes Untermenü geöffnet wird, falls vorhanden.
- <kbd>Linkspfeil</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste verschoben, wobei jedes Untermenü geöffnet wird, falls vorhanden.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element verschoben.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Verarbeitung von Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Werts des `aria-checked`-Attributs und des Erscheinungsbilds des Kontrollkästchens ändert, damit es für den sehenden Benutzer markiert oder nicht markiert erscheint.
- `onKeyDown`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Kontrollkästchens durch Ändern des Werts des `aria-checked`-Attributs und des Erscheinungsbilds des Kontrollkästchens zu ändern, damit es für den sehenden Benutzer markiert oder nicht markiert erscheint. Bearbeitet auch alle im Abschnitt Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Seiten-Tab-Sequenz. Hätten wir `aria-checked="true"` eingeschlossen, hätte dies angezeigt, dass das `menuitemcheckbox` markiert war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass er mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` markiert aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar ist, aber derzeit nicht markiert ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein markiertes Kontrollkästchen, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, was es sichtbar und von derselben Farbe wie der Inhalt macht, indem es mit dem `aria-checked`-Wert unter Verwendung von CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisiert und die Farbe [vererbt](/de/docs/Web/CSS/inherit) wird.

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

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder -Attribut die erforderlichen Semantiken und Verhaltensweisen hat, verwenden Sie es, anstatt ein Element neu zu zuweisen und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
