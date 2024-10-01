---
title: "ARIA: menuitemradio Rolle"
slug: Web/Accessibility/ARIA/Roles/menuitemradio_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt werden kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente in einer Gruppe auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt werden kann.

Die drei Menüelemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten oder zugehörig sein, das optional in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verschachtelt ist. Das Verschachteln oder anderweitige Zugehörigkeit zu einem `menu` oder `menubar` identifiziert die Menüelemente als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Status des Optionsfeldbuttons für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio`, gibt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht mehr ausgewählt wird, indem der Wert des `aria-checked`-Attributs auf `false` geändert wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt wird, oder wenn Sie das Auswählen und Abwählen eines Elements ermöglichen möchten, ziehen Sie die Verwendung von `menuitemcheckbox` in Betracht.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, umfassen Sie jede Gruppe von zusammengehörenden `menuitemradio`-Elementen in einem `group`-Element oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer äquivalenten Rolle wie eine {{HTMLElement('fieldset')}}-Gruppierung oder ein thematischer Trenner {{HTMLElement('hr')}}).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, nachgeordnetem Inhalt. Realisieren Sie, wenn das Label oder der nachgeordnete Inhalt nicht ausreichend ist, und vorzugsweise wird [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet, um auf nicht nachgeordneten Inhalt zu verweisen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) wird verwendet, diese beiden ARIA-Eigenschaften werden anderen nachgeordneten Inhalt vor unterstützenden Technologien ausblenden.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, beinhalten Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset). Wenn Sie `aria-setsize` und `aria-posinset` für ein `menuitemradio` angeben, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ausgenommen Trennzeichen.

Das `menuitemradio`-Element kann phrasalen Inhalt haben, darf jedoch keinen interaktiven Inhalt als Nachkommen haben und keine Nachkommen mit einem `tabindex`-Attribut spezifiziert haben.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Repräsentation in einer Plattform-Zugänglichkeit-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `menuitemradio` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) für alle nachgeordneten Elemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Da Nachkommen von `menuitemradio` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte äquivalent zum Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Widget, das eine Liste allgemeiner Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und meist horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, gibt es den aktuellen "ausgewählten" Zustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einer `menubar` oder einem mit einer Menütaste geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Falls nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl aller anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe auf. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Falls nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl aller anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleistelement gesetzt.
- <kbd>Pfeil-rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste gesetzt, und ein Untermenü wird geöffnet, falls eines vorhanden ist.
- <kbd>Pfeil-links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste gesetzt, und ein Untermenü wird geöffnet, falls eines vorhanden ist.
- <kbd>Pfeil-runter</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil-hoch</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Behandeln Sie Mausklicks sowohl auf dem Optionsfeldbutton als auch auf dem zugehörigen Label, die den Zustand des Optionsfeldbuttons durch Ändern des Wertes des `aria-checked`-Attributs ändern und das Aussehen des Optionsfeldbuttons so anpassen, dass es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Optionsfeldbuttons zu ändern, indem der Wert des `aria-checked`-Attributs geändert und das Erscheinungsbild des Optionsfeldbuttons so angepasst wird, dass es für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle in der Tastaturnavigation oben aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber es ist nicht Teil der Tabulatorfolge der Seite. Hätten wir `aria-checked="true"` eingefügt, hätte es angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell so gestylt, dass er mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` als ausgewählt erscheint. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewählter Optionsfeldbutton, den wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem er sichtbar gemacht wird und dieselbe Farbe wie der Inhalt hat, indem CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet werden, die mit dem `aria-checked`-Wert synchronisiert werden, und indem die [`background-color`](/de/docs/Web/CSS/background-color) geändert wird.

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Kurzform-Eigenschaft, da dies die [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreibt, die wir zur Erstellung des Optionsfeldbutton-Effekts verwendet haben.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder Attribut die benötigte Semantik und das Verhalten aufweist, verwenden Sie es anstelle eines Elements und fügen Sie eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzu, um die Zugänglichkeit sicherzustellen. Daher wird empfohlen, das native [HTML-Radio Button](/de/docs/Web/HTML/Element/input/radio) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Optionsfelds mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
