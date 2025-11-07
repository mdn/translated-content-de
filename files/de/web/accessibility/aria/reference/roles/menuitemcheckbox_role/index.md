---
title: "ARIA: Rolle `menuitemcheckbox`"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von einem solchen Element besessen sein, optional eingebettet in ein Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Durch das Eingebettetsein oder das Besitztum (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` werden die Menüelemente als verwandte Widgets identifiziert.

Menüelemente, einschließlich `menuitemcheckbox`-Elemente, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder einer anderen gleichwertigen nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) einschließen, um den Zustand des Kontrollkästchens für unterstützende Technologien offenzulegen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden sollte.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}-Elementen des Typs `checkbox`, gibt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) ist oder ob es ein Untermenü anderer Menüelemente darstellt, die eine Mischung aus aktivierten und deaktivierten Werten haben (`mixed`). Der `mixed`-Wert ist ähnlich dem [`indeterminate`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) eines Kontrollkästchens, welches das Aussehen eines dritten, weder aktivierten noch deaktivierten, Zustands gibt.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element kommen, falls `<input type="checkbox">` verwendet wird oder von sichtbarem, nachfolgendem Inhalt. Wenn das Label oder der nachfolgende Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das auf nicht-nachfolgenden Inhalt verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, verbergen diese zwei ARIA-Eigenschaften anderen nachfolgenden Inhalt für unterstützende Technologien.

Wenn nicht alle Elemente des Sets im DOM vorhanden sind, schließen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Beim Festlegen von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox`, setzen Sie den Wert im Hinblick auf die Gesamtzahl der Elemente im Menü, abzüglich aller Trennzeichen.

Das `menuitemcheckbox`-Element kann Phrasierungsinhalt haben, darf jedoch keinen interaktiven Inhalt als Nachfolger und keine Nachfolger mit einem angegebenen `tabindex`-Attribut haben.

### Alle Nachfolger sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keinen Weg zum Darstellen von semantischen Elementen, die in einem `menuitemcheckbox` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `menuitemcheckbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfolger des `menuitemcheckbox` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Perspektive des Nutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für ein konsistentes Set von häufig genutzten Befehlen, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` eingestellt, gibt es den aktuellen "geprüften" Zustand des `menuitemcheckbox` an

### Tastaturinteraktionen

Wenn ein `menu` öffnet oder ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem mit einer Schaltfläche geöffneten Menü ist, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt es den Fokus auf das übergeordnete Menüleistelement.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste, öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt es den Fokus auf das vorherige Element in der Menüleiste, öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird er auf das erste Element verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird er auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Buchstabe</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Buchstaben beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Buchstaben beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und des Erscheinungsbilds des Kontrollkästchens ändern wird, sodass es aktiviert oder deaktiviert für den sehenden Benutzer aussieht.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs geändert wird und das Erscheinungsbild des Kontrollkästchens so geändert wird, dass es aktiviert oder deaktiviert für den sehenden Benutzer aussieht. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation aufgeführt sind.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Reihenfolge der Seitenregisterkarten. Hätten wir `aria-checked="true"` eingeschlossen, hätte das angezeigt, dass das `menuitemcheckbox` aktiviert war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass er aktiviert aussieht, indem wir den Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` verwenden. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht aktiviert ist. Der zugängliche Name "purple" kommt aus dem Inhalt.

Die visuelle Darstellung des ausgewählten Zustands ist ein überprüftes Kontrollkästchen, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir es sichtbar und in derselben Farbe wie der Inhalt gestalten, indem wir den `aria-checked`-Wert mithilfe von CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und [Vererbung](/de/docs/Web/CSS/Reference/Values/inherit) der Farbe synchronisieren.

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

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die benötigten Semantik und das Verhalten bietet, verwenden Sie es anstelle einer Umnutzung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Formularsteuerung zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
