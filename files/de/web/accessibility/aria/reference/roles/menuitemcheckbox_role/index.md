---
title: "ARIA: menuitemcheckbox Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Typen von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder von einem solchen Element besessen werden, optional eingebettet innerhalb eines Gruppenelements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Die Verschachtelung oder der Besitz (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als zusammengehörende Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Rolle oder einer anderen äquivalenten nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) beinhalten, um den Zustand des Kontrollkästchens für unterstützende Technologie sichtbar zu machen, es sei denn, Sie verwenden [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `checkbox`, gibt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement ausgewählt (`true`), nicht ausgewählt (`false`) ist oder ein Untermenü anderer Menüelemente darstellt, die eine Mischung aus ausgewählten und nicht ausgewählten Werten haben (`mixed`). Der `mixed`-Wert ist ähnlich dem `indeterminate`-Attribut des Kontrollkästchens, das das Erscheinungsbild eines dritten, weder ausgewählten noch nicht ausgewählten Zustands bietet.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name aus einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird, oder aus sichtbaren, untergeordneten Inhalten. Sie sollten erkennen, wenn das Label oder die untergeordneten Inhalte nicht ausreichen, und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, das auf nicht untergeordnete Inhalte verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, diese beiden ARIA-Eigenschaften verbergen andere untergeordnete Inhalte vor unterstützenden Technologien.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, schließen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Beim Festlegen von `aria-setsize` und `aria-posinset` auf ein `menuitemcheckbox` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, wobei Sie alle Trennzeichen ausschließen.

Das `menuitemcheckbox`-Element kann Phrasing-Inhalte haben, jedoch keine interaktiven Inhalte als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente im `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `menuitemcheckbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Da die Nachkommen von `menuitemcheckbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} gleichwertig sind:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Sammlung häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Behälter für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "überprüften" Zustand des `menuitemcheckbox` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder in einem mit einem Menüknopf geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Eingabetaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leerzeichen</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt sich der Fokus auf das übergeordnete Menüleiste-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste verschiebt sich der Fokus auf das nächste Element in der Menüleiste und öffnet ein Untermenü, sofern vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt sich der Fokus auf das vorherige Element in der Menüleiste und öffnet ein Untermenü, sofern vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, verschiebt sich der Fokus auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, verschiebt sich der Fokus auf das letzte Element.
- <kbd>Pos 1</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Bearbeitet Mausklicks sowohl auf dem Kontrollkästchen als auch auf dem zugehörigen Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens so ändert, dass es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Bearbeitet den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens so zu ändern, dass es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint. Es bearbeitet auch alle in der obigen Tastaturnavigationssektion aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` eingeschlossen, hätte es darauf hingewiesen, dass das `menuitemcheckbox` ausgewählt war, und wir hätten den ausgewählten Zustand visuell mit dem Attribut-Selektor `[role='menuitemcheckbox'][aria-checked='true']` stilisiert. Stattdessen weist das Vorhandensein von `aria-checked="false"` unterstützenden Technologien darauf hin, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewähltes Kontrollkästchen, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem es sichtbar gemacht wird und die gleiche Farbe wie der Inhalt hat, indem es mit dem `aria-checked`-Wert synchronisiert wird und CSS [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) und [Vererbung](/de/docs/Web/CSS/inherit) der Farbe verwendet.

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten aufweist, verwenden Sie es anstelle der Umfunktionierung eines Elements und des Hinzufügens einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
