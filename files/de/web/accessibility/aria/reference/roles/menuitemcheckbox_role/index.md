---
title: "ARIA: Rolle menuitemcheckbox"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem ankreuzbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von einem solchen Element besessen sein, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Verschachtelt oder auf andere Weise besessen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließend `menuitemcheckbox`-Elemente, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) oder einer anderen gleichwertigen nativen Rolle, wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}}, getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien offenzulegen, es sei denn, es wird ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet. In diesem Fall sollte das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}} vom Typ `checkbox` gibt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement angekreuzt (`true`), nicht angekreuzt (`false`) ist oder ob es ein Untermenü darstellt, dessen Menüelemente gemischte Werte von angekreuzt und nicht angekreuzt haben (`mixed`). Der `mixed`-Wert ähnelt dem `indeterminate`-Attribut eines Kontrollkästchens, das den Anschein eines dritten Zustands gibt, der weder angekreuzt noch nicht angekreuzt ist.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem assoziierten {{htmlelement('label')}} Element kommen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbaren, nachgeordneten Inhalten. Sollte das Label oder der nachgeordnete Inhalt nicht ausreichen, wird vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet, um auf nicht-nachgeordneten Inhalt zu verweisen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) wird verwendet. Diese beiden ARIA-Eigenschaften werden andere nachgeordnete Inhalte vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente der Gruppe im DOM vorhanden sind, fügen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) hinzu. Bei der Angabe von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ohne Trennzeichen.

Das `menuitemcheckbox`-Element kann phrasing content enthalten, aber keinen interaktiven Inhalt als Nachfolger und keine Nachfolger mit einem angegebenen `tabindex` Attribut haben.

### Alle Nachfolger sind präsentationsbezogen

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Kompatibilitäts-API dargestellt werden, nur Text enthalten können. Kompatibilitäts-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `menuitemcheckbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfolger von `menuitemcheckbox` präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele gleichwertig mit dem folgenden sind im {{Glossary("Accessibility_tree", "Kompatibilitätsbaum")}}:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von gängigen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Menge häufig verwendeter Befehle, die sichtbar bleibt und normalerweise horizontal präsentiert wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Setzt auf `true`, `false` oder `mixed` und zeigt den aktuellen "geprüft" Zustand des menuitemcheckbox an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gelegt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem mit einer Menütaste geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox` und schließt das Menü.
- <kbd>Space</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox`. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüpunktelement verschoben.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus zum nächsten Element verschoben und ein eventuelles Untermenü geöffnet.
- <kbd>Linke Pfeiltaste</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus zum vorherigen Element verschoben und ein eventuelles Untermenü geöffnet.
- <kbd>Runter Pfeiltaste</kbd>
  - : Verschiebt den Fokus zum nächsten Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben.
- <kbd>Hoch Pfeiltaste</kbd>
  - : Verschiebt den Fokus zum vorherigen Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf dem Kontrollkästchen als auch auf dem zugehörigen Label, die den Zustand der Checkbox ändern, indem der Wert des `aria-checked` Attributs geändert und das Erscheinungsbild der Checkbox so angepasst wird, dass es für den sehenden Benutzer angekreuzt oder nicht angekreuzt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, dass der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand der Checkbox zu ändern, indem der Wert des `aria-checked` Attributs geändert und das Erscheinungsbild der Checkbox so angepasst wird, dass es für den sehenden Benutzer angekreuzt oder nicht angekreuzt erscheint. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation oben aufgeführt sind.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Reihung mit der Tabulator-Taste. Hätten wir `aria-checked="true"` eingefügt, hätte es angezeigt, dass das `menuitemcheckbox` markiert war, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` als markiert gestylt. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien, dass das `menuitemcheckbox` ankreuzbar, aber derzeit nicht angekreuzt ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein angekreuztes Kontrollkästchen, das wir unter Zuhilfenahme von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) erstellen können. Wir machen es sichtbar und in derselben Farbe wie der Inhalt, indem wir den `aria-checked` Wert mit CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisieren und die Farbe [vererben](/de/docs/Web/CSS/inherit).

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die Semantik und das Verhalten hat, das Sie benötigen, verwenden Sie es anstelle eines modifizierten Elements mit einer ARIA-Rolle, einem Zustand oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Formularsteuerelement zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
