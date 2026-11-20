---
title: "ARIA: Rolle menuitemcheckbox"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein `menuitemcheckbox` ist ein `menuitem` mit einem ankreuzbaren Zustand, der die Werte `true`, `false` oder `mixed` annehmen kann.

## Beschreibung

Die Einträge in Menüs und Menüleisten sind Menüpunkte. Es gibt drei Arten von Menüpunkten: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Arten von Elementen dürfen nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder diesem zugeordnet werden. Optional können sie in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt sein. Durch die Verschachtelung in einem `menu` oder einer `menubar` beziehungsweise eine andere Zuordnung dazu (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) werden die Menüpunkte als zusammengehörige Widgets erkannt.

Menüpunkte, einschließlich `menuitemcheckbox`-Elementen, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) beziehungsweise einer entsprechenden nativen Rolle wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} voneinander getrennt werden.

Menüpunkte mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand der Checkbox für assistive Technologien zugänglich zu machen. Eine Ausnahme ist die Verwendung von [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox); in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das Attribut `checked` bei {{HTMLElement('input')}}-Elementen vom Typ `checkbox` gibt das Attribut `aria-checked` eines `menuitemcheckbox` an, ob der Menüpunkt ausgewählt (`true`) oder nicht ausgewählt (`false`) ist oder ob er ein untergeordnetes Menü mit Menüpunkten repräsentiert, die teils ausgewählt und teils nicht ausgewählt sind (`mixed`). Der Wert `mixed` ähnelt dem Zustand [`indeterminate`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) einer Checkbox: Er stellt einen dritten Zustand dar, der weder ausgewählt noch nicht ausgewählt ist.

Ein zugänglicher Name ist erforderlich. Idealerweise stammt er bei Verwendung von `<input type="checkbox">` aus einem zugehörigen {{htmlelement('label')}}-Element oder andernfalls aus sichtbarem Inhalt eines Nachfahrenelements. Wenn die Beschriftung oder der Inhalt der Nachfahrenelemente nicht ausreicht und stattdessen vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) mit einem Verweis auf Inhalt außerhalb der Nachfahrenelemente oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, beachten Sie: Diese beiden ARIA-Eigenschaften verbergen anderen Inhalt von Nachfahrenelementen vor assistiven Technologien.

Wenn nicht alle Elemente der Gruppe im DOM vorhanden sind, geben Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) an. Legen Sie deren Werte bei einem `menuitemcheckbox` bezogen auf die Gesamtzahl der Menüpunkte fest, ohne Trennelemente mitzuzählen.

Ein `menuitemcheckbox`-Element darf Textinhalt enthalten, aber keine interaktiven Nachfahrenelemente und keine Nachfahrenelemente mit einem `tabindex`-Attribut.

### Alle Nachfahrenelemente sind rein präsentational

Manche Arten von Benutzeroberflächenkomponenten können in einer Accessibility-API der Plattform nur Text enthalten. Accessibility-APIs können semantische Elemente innerhalb eines `menuitemcheckbox` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahrenelementen eines `menuitemcheckbox`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

Da Nachfahrenelemente von `menuitemcheckbox` rein präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

Aus Sicht einer Person, die assistive Technologien verwendet, existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem Folgenden entsprechen:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste gängiger Aktionen oder Funktionen anbietet, die Benutzer ausführen können.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu`, jedoch für eine dauerhaft sichtbare Gruppe häufig verwendeter Befehle, die üblicherweise horizontal angeordnet ist.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder einer `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Gibt mit dem Wert `true`, `false` oder `mixed` den aktuellen Auswahlzustand des `menuitemcheckbox` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder eine `menubar` den Fokus erhält, wird der Tastaturfokus auf den ersten Menüpunkt gesetzt. Alle Menüpunkte in beiden Elementen sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Befindet sich das `menuitemcheckbox` in einem Untermenü einer `menubar` oder in einem Menü, das über eine Menüschaltfläche geöffnet wurde, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Enter</kbd>
  - : Wechselt den Zustand von `aria-checked` beim `menuitemcheckbox` und schließt das Menü.
- <kbd>Space</kbd>
  - : Wechselt den Zustand von `aria-checked` beim `menuitemcheckbox`. Das Menü bleibt geöffnet.
- <kbd>Escape</kbd>
  - : Schließt das Menü. Bei einer Menüleiste wird der Fokus auf den übergeordneten Menüpunkt gesetzt.
- <kbd>Right Arrow</kbd>
  - : Schließt das Untermenü. Bei einer Menüleiste wird der Fokus auf den nächsten Menüpunkt der Menüleiste gesetzt und gegebenenfalls dessen Untermenü geöffnet.
- <kbd>Left Arrow</kbd>
  - : Schließt das Menü. Bei einer Menüleiste wird der Fokus auf den vorherigen Menüpunkt der Menüleiste gesetzt und gegebenenfalls dessen Untermenü geöffnet.
- <kbd>Down Arrow</kbd>
  - : Setzt den Fokus auf den nächsten Menüpunkt. Befindet sich der Fokus auf dem letzten Menüpunkt, wird er auf den ersten gesetzt.
- <kbd>Up Arrow</kbd>
  - : Setzt den Fokus auf den vorherigen Menüpunkt. Befindet sich der Fokus auf dem ersten Menüpunkt, wird er auf den letzten gesetzt.
- <kbd>Home</kbd>
  - : Setzt den Fokus auf den ersten Menüpunkt.
- <kbd>End</kbd>
  - : Setzt den Fokus auf den letzten Menüpunkt.
- <kbd>Character</kbd>
  - : Setzt den Fokus auf den nächsten Menüpunkt, dessen Name mit dem eingegebenen Zeichen beginnt. Trifft dies auf keinen Menüpunkt zu, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Ereignisbehandlungsroutinen

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf die Checkbox als auch auf die zugehörige Beschriftung. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild der Checkbox geändert, sodass sie für sehende Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Verarbeitet das Drücken der Taste <kbd>Space</kbd>. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild der Checkbox geändert, sodass sie für sehende Benutzer ausgewählt oder nicht ausgewählt erscheint. Verarbeitet außerdem alle oben im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Bewährte Verfahren

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und es durch eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft zugänglich zu machen. Daher empfiehlt es sich, das native [HTML-Formularsteuerelement für Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) zu verwenden, statt die Funktionalität einer Checkbox mit JavaScript und ARIA nachzubilden.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Durch [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist das `menuitemcheckbox` fokussierbar, gehört aber nicht zur Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` angegeben, würde dies kennzeichnen, dass das `menuitemcheckbox` ausgewählt ist. Den ausgewählten Zustand würden wir dann mithilfe des Attributselektors `[role='menuitemcheckbox'][aria-checked='true']` visuell als ausgewählt darstellen. Stattdessen signalisiert `aria-checked="false"` assistiven Technologien, dass das `menuitemcheckbox` auswählbar, derzeit aber nicht ausgewählt ist. Der zugängliche Name „purple“ stammt aus dem Inhalt.

Das sichtbare Erscheinungsbild des ausgewählten Zustands ist eine ausgewählte Checkbox. Wir können sie mithilfe von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen, sichtbar machen und ihr dieselbe Farbe wie dem Inhalt geben, indem wir ihren Zustand über CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) mit dem Wert von `aria-checked` synchronisieren und die Farbe [vererben](/de/docs/Web/CSS/Reference/Values/inherit).

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [Rolle `checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
