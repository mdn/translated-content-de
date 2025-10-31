---
title: "ARIA: menuitemradio Rolle"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einem Satz von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente innerhalb einer Gruppe auf eines zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einem Satz von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder diesem zugeordnet sein, optional verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Dass sie verschachtelt sind oder anderweitig zugeordnet (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar`, identifiziert die Menüelemente als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Optionsfeldes für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio`, zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, durch Umschaltung des Attributwerts `aria-checked` auf `false` abgewählt wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt werden kann oder ein Element ausgewählt und wieder abgewählt werden kann, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält, oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, sollten Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element enthalten oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer äquivalenten Rolle wie eine {{HTMLElement('fieldset')}} Gruppierung oder einem thematischen Trenner {{HTMLElement('hr')}} Separator) abgrenzen.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird oder von sichtbarem, nachfolgendem Inhalt. Falls das Label oder der nachfolgende Inhalt nicht ausreichen, sollte vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um nicht-nachfolgenden Inhalt zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden, diese beiden ARIA-Eigenschaften werden anderen nachfolgenden Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, sollten die Attribute [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) enthalten sein. Beim Festlegen von `aria-setsize` und `aria-posinset` auf einem `menuitemradio`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü ohne Berücksichtigung der Trenner.

Das `menuitemradio`-Element kann Phraseninhalt enthalten, aber keinen interaktiven Inhalt als Nachfahren und keine Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächen-Komponenten, die, wenn sie in einer plattformübergreifenden Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `menuitemradio` enthalten sind. Um dieses Problem zu umgehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente jedes `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachfahren von `menuitemradio` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Perspektive eines Nutzers unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheit-Baum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen anbietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz von häufig genutzten Befehlen, der sichtbar bleibt und normalerweise horizontal dargestellt wird.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Status des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn das `menuitemradio` sich in einem Untermenü in einer `menubar` oder einem durch eine Menü-Schaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Falls nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und alle anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe abgewählt. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Falls nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und alle anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe abgewählt, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleistelement verschoben.
- <kbd>Pfeil-rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste verschoben, bei vorhandenen Untermenüs werden diese geöffnet.
- <kbd>Pfeil-links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste verschoben, bei vorhandenen Untermenüs werden diese geöffnet.
- <kbd>Pfeil-runter</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil-hoch</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf das Optionsfeld als auch auf das zugehörige Label und ändert den Zustand des Optionsfelds durch Änderung des Werts des `aria-checked`-Attributs und das Erscheinungsbild des Optionsfelds, damit es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Optionsfeldes zu ändern, indem der Wert des `aria-checked`-Attributs und die visuelle Darstellung des Optionsfeldes geändert werden, sodass es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle oben im Abschnitt zur Tastaturnavigation aufgelisteten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tab-Sequenz der Seite. Hätten wir `aria-checked="true"` hinzugefügt, würde das anzeigen, dass das `menuitemradio` ausgewählt ist, und wir könnten den ausgewählten Zustand visuell gestalten, sodass er ausgewählt aussieht, indem wir den Attributselektor `[role='menuitemradio'][aria-checked='true']` verwenden. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewähltes Optionsfeld, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir es mittels CSS-Attributselektoren mit dem `aria-checked` Wert synchronisieren und die Hintergrundfarbe so ändern, dass sie sichtbar und in der gleichen Farbe wie der Inhalt erscheint.

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/Reference/Properties/background) Kurzform-Eigenschaft, da diese die [`background-clip`](/de/docs/Web/CSS/Reference/Properties/background-clip) Eigenschaft überschreiben würde, die wir verwendet haben, um den Effekt des Optionsfelds zu erstellen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die erforderliche Semantik und das Verhalten bereitstellt, verwenden Sie es anstelle davon, einem Element eine ARIA-Rolle, einen Zustand oder eine Eigenschaft zuzuordnen, um es barrierefrei zu machen. Daher wird empfohlen, die native [HTML Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formular-Kontrolle zu verwenden, anstatt die Funktionalität eines Optionsfelds mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
