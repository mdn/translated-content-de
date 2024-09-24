---
title: "ARIA: Rolle menuitemradio"
slug: Web/Accessibility/ARIA/Roles/menuitemradio_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einem Satz von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüpunkte. Es gibt drei Arten von Menüpunkten: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüpunkte innerhalb einer Gruppe auf einen zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einem Satz von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

Die drei Menüelemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten oder von diesem verwaltet werden, eventuell verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Die Verschachtelung oder anderweitige Besitzverhältnisse (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in einem `menu` oder `menubar` identifizieren die Menüpunkte als miteinander verbundene Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüpunkte mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Status der Optionsschaltfläche für unterstützende Technologien sichtbar zu machen, es sei denn, Sie verwenden [`<input type="radio">`](/de/docs/Web/HTML/Element/input/checkbox), in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio` zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob der Menüpunkt ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, sofern vorhanden, abgewählt wird, indem der Wert des Attributs `aria-checked` auf `false` gesetzt wird.

Wenn Sie mehr als ein Element in einer Gruppe auswählbar machen möchten oder wenn Sie das Ein- und Ausschalten eines Elements ermöglichen möchten, ziehen Sie in Betracht, `menuitemcheckbox` zu verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` sowohl eine Gruppe von `menuitemradio`-Elementen als auch andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, dann fassen Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element zusammen oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle, wie eine {{HTMLElement('fieldset')}}-Gruppierung oder ein thematischer Bruch {{HTMLElement('hr')}}-Separator).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, nachfolgendem Inhalt. Wenn das Label oder der nachfolgende Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet wird, um auf nicht-nachfolgenden Inhalt zu verweisen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet wird, verbergen diese beiden ARIA-Eigenschaften andere nachfolgende Inhalte vor unterstützenden Technologien.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, fügen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) hinzu. Beim Angeben von `aria-setsize` und `aria-posinset` für ein `menuitemradio` setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ohne Trennzeichen, ein.

Das `menuitemradio`-Element kann Phraseninhalt haben, aber keinen interaktiven Inhalt als Nachfahren und keine Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahren sind presentational

Es gibt einige Arten von Benutzeroberflächen-Komponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `menuitemradio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfahrenelemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name meiner Radio-Schaltfläche</h6></li>
```

Da Nachfahren von `menuitemradio` presentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio"><h6 role="presentation">Name meiner Radio-Schaltfläche</h6></li>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Barrierefreiheitstree](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="menuitemradio">Name meiner Radio-Schaltfläche</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Widget, das eine Liste mit allgemeinen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Reihe häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einem `menubar` befindet oder ein Menü mit einem Menüknopf geöffnet wurde, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt. Schließt außerdem das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. Im menubar verschiebt es den Fokus auf das übergeordnete menubar-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. Im menubar verschiebt es den Fokus auf das nächste Element in der menubar, öffnet dabei ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. Im menubar verschiebt es den Fokus auf das vorherige Element in der menubar, öffnet dabei ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, verschiebt er den Fokus auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, verschiebt er den Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf die Optionsschaltfläche als auch auf das zugehörige Label, das den Status der Optionsschaltfläche ändern wird, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Optionsschaltfläche so geändert werden, dass sie für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Status der Optionsschaltfläche zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Optionsschaltfläche so geändert werden, dass sie für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt außerdem alle Tasten, die im Abschnitt zur Tastaturnavigation oben aufgeführt sind.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Seitentabsequenz. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell gestylt, sodass er mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` wie ausgewählt aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt vom Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist eine ausgewählte Radio-Schaltfläche, die wir mit [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir mit dem `aria-checked`-Wert mithilfe von CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisieren und die [`background-color`](/de/docs/Web/CSS/background-color) ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Kurzform-Eigenschaft, da diese die [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreibt, die wir verwendet haben, um den Radio-Schaltflächen-Effekt zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die benötigten Semantiken und das Verhalten aufweist, verwenden Sie es anstelle der erneuten Zweckentfremdung eines Elements und der Hinzufügung einer ARIA Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML Radio-Schaltfläche](/de/docs/Web/HTML/Element/input/radio) Formularsteuerung anstelle der Nachbildung der Funktionalität einer Radio-Schaltfläche mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
