---
title: "ARIA: menuitemcheckbox Rolle"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von diesem besessen sein, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzverhältnis (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Menüelemente, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Rolle oder einer anderen gleichwertigen nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüelemente mit der Rolle `menuitemcheckbox` müssen das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut enthalten, um den Zustand des Kontrollkästchens für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut verwendet werden sollte.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `checkbox` zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) ist oder ein Untermenü von anderen Menüelementen darstellt, die eine Mischung aus aktivierten und deaktivierten Werten aufweisen (`mixed`). Der `mixed`-Wert ähnelt dem [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)-Attribut eines Kontrollkästchens, das das Erscheinungsbild eines dritten Zustands, weder aktiviert noch deaktiviert, vermittelt.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element kommen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbarem, nachgeordnetem Inhalt. Wenn das Label oder der nachgeordnete Inhalt nicht ausreicht, sollte vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, das nicht-nachgeordneten Inhalt referenziert, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, da diese beiden ARIA-Eigenschaften anderen nachgeordneten Inhalt von unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, enthalten Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset). Bei der Angabe von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ausgenommen jegliche Separatoren.

Das `menuitemcheckbox`-Element kann phrasenartige Inhalte enthalten, darf jedoch keinen interaktiven Inhalt als Nachkommen haben und keine Nachkommen mit einem spezifizierten `tabindex`-Attribut haben.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachgeordneten Elemente eines `menuitemcheckbox`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachkommen von `menuitemcheckbox` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus der Perspektive des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig zum folgenden sind:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "geprüften" Zustand des menuitemcheckbox an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einem `menubar` oder einem mit einer Menüschaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox` und schließt das Menü.
- <kbd>Leertaste</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox`. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleiste-Element bewegt.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste bewegt, und ein eventuell vorhandenes Untermenü wird geöffnet.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste bewegt, und ein eventuell vorhandenes Untermenü wird geöffnet.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element bewegt.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element bewegt.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus auf das nächste Element mit einem Namen, der mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignisbehandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Kontrollkästchen als auch das zugehörige Label, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens geändert wird, sodass es für den sehenden Benutzer als aktiviert oder nicht aktiviert erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Kontrollkästchens zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens geändert wird, sodass es für den sehenden Benutzer als aktiviert oder nicht aktiviert erscheint. Behandelt auch alle im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tabulatorabfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemcheckbox` aktiviert war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass er durch den Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` aktiviert aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht aktiviert ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein überprüftes Kontrollkästchen, das wir unter Verwendung von [erzeugtem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, indem es sichtbar und in derselben Farbe wie der Inhalt gemacht wird, indem es mit dem `aria-checked`-Wert unter Verwendung von CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) synchronisiert und die Farbe [erbt](/de/docs/Web/CSS/Reference/Values/inherit).

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

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die von Ihnen benötigten Semantiken und das Verhalten besitzt, verwenden Sie es anstelle der Umfunktionierung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) zu verwenden, anstelle die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
