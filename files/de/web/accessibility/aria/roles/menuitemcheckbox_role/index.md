---
title: "ARIA: Rolle menuitemcheckbox"
slug: Web/Accessibility/ARIA/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemcheckbox` ist ein `menuitem` mit einem prüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten oder davon besessen sein, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Das Geschachteltsein oder anderweitig Besitzsein (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als zusammengehörige Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elemente, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) oder einer anderen äquivalenten nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Zustand des Kontrollkästchens assistierenden Technologien bekannt zu machen, es sei denn, sie verwenden [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden sollte.

Ähnlich wie das Attribut `checked` von {{HTMLElement('input')}}-Elementen des Typs `checkbox` zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) oder ein Untermenü anderer Menüelemente mit einer Mischung aus aktivierten und deaktivierten Werten (`mixed`) darstellt. Der Wert `mixed` ähnelt dem Attribut [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) eines Kontrollkästchens, welches das Erscheinungsbild eines dritten, weder aktivierten noch deaktivierten Zustands ergibt.

Ein barrierefreier Name ist erforderlich. Idealerweise sollte der barrierefreie Name von einem zugeordneten {{htmlelement('label')}}-Element stammen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbarem, nachfolgendem Inhalt. Beachten Sie, dass, wenn das Label oder der nachfolgende Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet wird, das auf nicht-nachfolgenden Inhalt verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), diese beiden ARIA-Eigenschaften anderen nachfolgenden Inhalt vor assistierenden Technologien verbergen.

Wenn nicht alle Elemente in der Menge im DOM vorhanden sind, schließen Sie die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) ein. Beim Spezifizieren von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox`, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ohne Separatoren.

Das `menuitemcheckbox`-Element kann phrasierenden Inhalt haben, darf aber keinen interaktiven Inhalt als Nachkommen haben und keine Nachkommen mit einem bestimmten `tabindex`-Attribut.

### Alle Nachkommen sind Präsentationsform

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `menuitemcheckbox` enthalten sind. Um dieses Limit zu überwinden, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Da Nachkommen von `menuitemcheckbox` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

Aus der Perspektive des Nutzers von assistierenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Widget, das eine Liste häufig verwendeter Aktionen oder Funktionen bietet, die der Nutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, der sichtbar bleibt und in der Regel horizontal präsentiert wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "aktiviert"-Zustand des menuitemcheckbox an.

### Tastaturinteraktionen

Wenn ein `menu` öffnet oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem durch eine Menü-Schaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Eingabe</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Schaltet den `aria-checked`-Zustand des `menuitemcheckbox` um. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt sich der Fokus auf das übergeordnete Menüleistenelement.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste verschiebt der Fokus sich auf das nächste Element in der Menüleiste und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt der Fokus sich auf das vorherige Element in der Menüleiste und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, verschiebt er sich auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, verschiebt er sich auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Kontrollkästchen als auch auf das zugehörige Label, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs geändert und das Kontrollkästchen visuell so darstellt wird, dass es für sehende Nutzer aktiviert oder deaktiviert erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Nutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs geändert und das Kontrollkästchen visuell so darstellt wird, dass es für sehende Nutzer aktiviert oder deaktiviert erscheint. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation aufgeführt sind.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tabulatorsequenz der Seite. Hätten Sie `aria-checked="true"` eingeschlossen, hätte dies angezeigt, dass das `menuitemcheckbox` aktiviert ist, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` so gestylt, dass es aktiviert aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` assistierenden Technologien an, dass das `menuitemcheckbox` prüfbar, aber derzeit nicht aktiviert ist. Der barrierefreie Name "purple" stammt aus dem Inhalt.

Die visuelle Darstellung des ausgewählten Zustands ist ein markiertes Kontrollkästchen, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem es sichtbar gemacht und die gleiche Farbe wie der Inhalt verwendet wird, indem mit dem `aria-checked`-Wert mittels CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisiert und die Farbe [geerbt](/de/docs/Web/CSS/inherit) wird.

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die von Ihnen benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle das Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML Kontrollkästchen](/de/docs/Web/HTML/Element/input/checkbox) Formularsteuerung anstelle der Nachbildung der Funktionalität eines Kontrollkästchens mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`checkbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
