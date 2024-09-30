---
title: "ARIA: Rolle menuitemcheckbox"
slug: Web/Accessibility/ARIA/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemcheckbox` ist ein `menuitem` mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüpunkte. Es gibt drei Arten von Menüpunkten: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und `menuitemcheckbox`.

Diese drei Elemente können nur in oder im Besitz von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) sein, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in einem `menu` oder `menubar` kennzeichnet die Menüpunkte als verwandte Widgets.

Menüpunkte, einschließlich `menuitemcheckbox`-Elemente, können innerhalb von `group`-Elementen gruppiert oder durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) oder andere gleichwertige native Rollen wie {{HTMLElement('fieldset')}} und {{HTMLElement('hr')}} getrennt werden.

Menüpunkte mit der Rolle `menuitemcheckbox` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Zustand der Checkbox für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s des Typs `checkbox` zeigt das `aria-checked`-Attribut eines `menuitemcheckbox` an, ob das Menüelement aktiviert (`true`), deaktiviert (`false`) ist oder ein Untermenü von anderen Menüelementen darstellt, die eine Mischung aus aktivierten und deaktivierten Werten enthalten (`mixed`). Der Wert `mixed` ähnelt dem [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)-Attribut einer Checkbox, das das Erscheinungsbild eines dritten, weder aktivierten noch deaktivierten, Zustands vermittelt.

Ein zugänglicher Name ist erforderlich. Idealweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element kommen, wenn `<input type="checkbox">` verwendet wird, oder von sichtbarem, nachfolgendem Inhalt. Wenn das Label oder der nachfolgende Inhalt nicht ausreichend ist und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet wird, um nicht-nachfolgenden Inhalt zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen nachfolgenden Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, müssen die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) eingeschlossen werden. Bei der Angabe von `aria-setsize` und `aria-posinset` auf einem `menuitemcheckbox` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, wobei alle Separatoren ausgeschlossen sind.

Das `menuitemcheckbox`-Element kann Formatinhalt enthalten, jedoch keinen interaktiven Inhalt als Nachkommen und keine Nachkommen mit einem `tabindex`-Attribut spezifiziert.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattform-Accessibility-API nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemcheckbox` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachfolgenden Elemente eines `menuitemcheckbox`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemcheckbox`-Element, das eine Überschrift enthält.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Da die Nachkommen von `menuitemcheckbox` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codeschnipsel äquivalent zum folgenden im [Accessibility Tree](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
  - : Widget, das eine Liste von üblichen Aktionen oder Funktionen anbietet, die der Benutzer ausführen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemcheckbox`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, gibt es den aktuellen "überprüften" Zustand des menuitemcheckbox an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemcheckbox`-Elemente.

Wenn sich das `menuitemcheckbox` in einem Untermenü in einer `menubar` oder einem Menü befindet, das mit einer Menüschaltfläche geöffnet wurde, müssen die folgenden Tastaturinteraktionen einprogrammiert werden:

- <kbd>Enter</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox` und schließt das Menü.
- <kbd>Space</kbd>
  - : Wechselt den `aria-checked`-Zustand des `menuitemcheckbox`. Schließt das Menü nicht.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste bewegt es den Fokus zum übergeordneten Menüelement.
- <kbd>Rechtspfeil</kbd>
  - : Schließt das Untermenü. In der Menüleiste bewegt es den Fokus zum nächsten Element in der Menüleiste, öffnet jedes Untermenü, falls vorhanden.
- <kbd>Linkspfeil</kbd>
  - : Schließt das Menü. In der Menüleiste bewegt es den Fokus zum vorherigen Element in der Menüleiste, öffnet jedes Untermenü, falls vorhanden.
- <kbd>Abwärtspfeil</kbd>
  - : Bewegt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element bewegt.
- <kbd>Aufwärtspfeil</kbd>
  - : Bewegt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element bewegt.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks auf sowohl das Kontrollkästchen als auch das zugehörige Label, das den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens so ändern wird, dass es für den sehenden Benutzer überprüft oder nicht überprüft erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Kontrollkästchens durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Kontrollkästchens so zu ändern, dass es für den sehenden Benutzer überprüft oder nicht überprüft erscheint. Behandelt auch alle im Abschnitt Tastaturnavigation aufgelisteten Tasten.

## Beispiele

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemcheckbox` fokussierbar, aber nicht Teil der Tabulatortastenfolge der Seite. Hätten wir `aria-checked="true"` eingeschlossen, würde es anzeigen, dass das `menuitemcheckbox` aktiviert ist, und wir hätten den ausgewählten Zustand visuell so gestylt, dass er mit dem Attributselektor `[role='menuitemcheckbox'][aria-checked='true']` aktiviert aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien, dass das `menuitemcheckbox` überprüfbar, aber derzeit nicht überprüft ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein überprüftes Kontrollkästchen, das wir unter Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem es sichtbar und in der gleichen Farbe wie der Inhalt ist und mit dem `aria-checked` Wert unter Verwendung von CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisiert wird und [das Erben](/de/docs/Web/CSS/inherit) der Farbe.

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

### Bevorzugte HTML-Elemente

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die benötigte Semantik und das benötigte Verhalten aufweist, verwenden Sie es anstelle der Umwidmung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Checkbox](/de/docs/Web/HTML/Element/input/checkbox) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Kontrollkästchens mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [Rolle `checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
