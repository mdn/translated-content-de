---
title: "ARIA: Rolle menuitemcheckbox"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem ankreuzbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder davon besessen sein, optional verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Dass sie verschachtelt oder anderweitig (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` enthalten sind, identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich der `menuitemcheckbox`-Elemente, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder andere äquivalente native Rollen wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden sollte.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s des Typs `checkbox`, zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) ist oder ein Sub-Level-Menü anderer Menüelemente darstellt, die eine Mischung aus aktivierten und deaktivierten Werten enthalten (`mixed`). Der `mixed`-Wert ist ähnlich dem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Attribut eines Kontrollkästchens, welches das Aussehen eines dritten Zustands, weder aktiviert noch deaktiviert, bietet.

Ein barrierefreier Name ist erforderlich. Idealerweise sollte der barrierefreie Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird oder von sichtbaren Nachkommenelementen. Wenn das Label oder der nachfolgende Inhalt nicht ausreichend sind, und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um sich auf nicht-nachfolgende Inhalte zu beziehen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, verstecken diese beiden ARIA-Eigenschaften anderen nachfolgenden Inhalt vor unterstützenden Technologien.

Wenn nicht alle Elemente des Sets im DOM vorhanden sind, schließen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Beim Spezifizieren von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox` setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ohne Separatoren mitzuzählen.

Das `menuitemcheckbox`-Element kann Phraseninhalte enthalten, jedoch keine interaktiven Inhalte als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentationsorientiert

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `menuitemcheckbox` enthalten sind, darzustellen. Um dieses Limit zu überwinden, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da die Nachkommen des `menuitemcheckbox` präsentationsorientiert sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Sicht eines Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zum Folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} sind:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste allgemeiner Aktionen oder Funktionen anbietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz von häufig verwendeten Befehlen, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` setzen, zeigt den aktuellen "geprüften" Zustand des menuitemcheckbox an

### Tastaturinteraktionen

Wenn ein `menu` öffnet oder wenn eine `menubar` Fokus erhält, wird der Tastaturfokus auf das erste Element gelegt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem über einen Menü-Button geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox` und schließt das Menü.
- <kbd>Space</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox`. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleistenelement verschoben.
- <kbd>Rechter Pfeil</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste verschoben, wobei ein Untermenü geöffnet wird, sofern vorhanden.
- <kbd>Linker Pfeil</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste verschoben, wobei ein Untermenü geöffnet wird, sofern vorhanden.
- <kbd>Nach unten Pfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben.
- <kbd>Nach oben Pfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens ändert, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens geändert wird, sodass es für sehende Benutzer aktiviert oder deaktiviert erscheint.
- `onKeyDown`
  - : Verarbeitet den Fall, bei dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens geändert wird, sodass es für sehende Benutzer aktiviert oder deaktiviert erscheint. Behandelt auch alle Tasten, die im obigen Abschnitt zur Tastaturnavigation aufgelistet sind.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tab-Sequenz der Seite. Hätten wir `aria-checked="true"` eingeschlossen, hätte es angezeigt, dass das `menuitemcheckbox` aktiviert ist, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` als überprüft gestylt. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht aktiviert ist. Der barrierefreie Name "purple" kommt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein überprüftes Kontrollkästchen, das wir mit [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir es sichtbar machen und dieselbe Farbe wie der Inhalt durch Synchronisierung mit dem `aria-checked`-Wert mithilfe von CSS [Attributselekoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und [Vererbung](/de/docs/Web/CSS/inherit) machen.

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

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder -Attribut die Semantik und das Verhalten hat, die Sie benötigen, verwenden Sie es, anstatt ein Element neu zu verwenden und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Checkbox](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Formular-Steuerelement anstelle der Nachbildung der Funktionalität eines Kontrollkästchens mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
