---
title: "ARIA: menuitemcheckbox Rolle"
slug: Web/Accessibility/ARIA/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element enthalten oder davon besessen sein, das die Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) besitzt, optional verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Die Zugehörigkeit zu einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) oder anderen äquivalenten nativen Rollen wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Status des Kontrollkästchens gegenüber unterstützender Technologie darzustellen, es sei denn, es wird ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet; in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `checkbox` gibt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement ausgewählt (`true`), nicht ausgewählt (`false`) ist oder ein Untermenü von anderen Menüelementen darstellt, die eine Mischung aus ausgewählten und nicht ausgewählten Werten (`mixed`) aufweisen. Der Wert `mixed` ist ähnlich dem `indeterminate`-Attribut eines Kontrollkästchens, das das Erscheinungsbild eines dritten, weder ausgewählten noch nicht ausgewählten Zustands ermöglicht.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbarem, untergeordnetem Inhalt. Wenn das Label oder der untergeordnete Inhalt nicht ausreichen und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet wird, das nicht-nachgeordnete Inhalte referenziert, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften andere untergeordnete Inhalte vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente des Sets im DOM vorhanden sind, umfassen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset). Bei der Angabe von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ohne Separatoren zu zählen.

Das `menuitemcheckbox`-Element kann Phrasierungsinhalt haben, aber keinen interaktiven Inhalt als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemcheckbox`-Elementes an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Da Nachkommen von `menuitemcheckbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

Aus der Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem Folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Widget, das eine Liste gemeinsamer Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für ein konsistentes Set häufig genutzter Befehle, das sichtbar bleibt und normalerweise horizontal dargestellt wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "geprüften" Zustand des menuitemcheckbox an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn eine `menubar` fokussiert wird, wird der Tastaturfokus auf das erste Element gelegt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem mit einer Menü-Schaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Esc</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleisten-Element verschoben.
- <kbd>Pfeil rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element der Menüleiste verschoben und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element der Menüleiste verschoben und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben.
- <kbd>Start</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Behandeln von Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens ändert, damit es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandeln des Falls, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs zu ändern und das Erscheinungsbild des Kontrollkästchens, damit es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle oben im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Seiten-Tab-Sequenz. Hätten wir `aria-checked="true"` enthalten, hätte dies angezeigt, dass das `menuitemcheckbox` überprüft wurde, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass er mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` überprüft aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "lila" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein geprüftes Kontrollkästchen, das wir mit [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem es sichtbar und in der gleichen Farbe wie der Inhalt ist, indem wir es mit dem `aria-checked`-Wert mittels CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisieren und die Farbe [vererben](/de/docs/Web/CSS/inherit).

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

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder Attribut die Semantik und das Verhalten aufweist, die Sie benötigen, verwenden Sie es anstelle einer Umgestaltung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Element/input/checkbox) Formular-Control zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
