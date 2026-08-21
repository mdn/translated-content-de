---
title: "ARIA: Rolle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit der gleichen Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente innerhalb einer Gruppe auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit der gleichen Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelemente können nur von einem Element enthalten oder besessen werden, das die Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) hat, wobei sie optional in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) genestet sind. Durch das Einordnen oder anderweitige Zuordnen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` werden die Menüelemente als verwandte Widgets identifiziert.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüelemente, die die Rolle `menuitemradio` enthalten, müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) einschließen, um den Zustand des Optionsfeldes für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s des Typs `radio` gibt das Attribut `aria-checked` eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht ausgewählt wird, indem der Wert des Attributs `aria-checked` auf `false` umgeschaltet wird.

Wenn in einer Gruppe mehr als ein Element ausgewählt werden soll oder wenn Sie das Auswählen und Abwählen eines Elements ermöglichen möchten, erwägen Sie die Verwendung von `menuitemcheckbox`.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, umfassen Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle wie eine {{HTMLElement('fieldset')}}-Gruppe oder ein thematischer Trennstrich {{HTMLElement('hr')}}).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, abgeleitetem Inhalt. Wenn das Label oder der abgeleitete Inhalt nicht ausreichend ist und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das auf nicht abgeleiteten Inhalt verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen abgeleiteten Inhalt von unterstützenden Technologien ausblenden.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Bei der Angabe von `aria-setsize` und `aria-posinset` für ein `menuitemradio` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, wobei jegliche Trennzeichen ausgeschlossen werden.

Das `menuitemradio`-Element kann phrasierenden Inhalt haben, darf jedoch keine interaktiven Inhalte als Nachkommen haben und keine Nachkommen mit einem `tabindex`-Attribut aufweisen.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Zugänglichkeits-API der Plattform dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `menuitemradio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren von `menuitemradio`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachfahren von `menuitemradio` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Perspektive der Benutzer von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele der folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von gängigen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für ein konsistentes Set häufiger Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des `menuitemradio`.

### Tastatur-Interaktionen

Wenn ein `menu` geöffnet wird, oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einem `menubar` oder einem mit einer Menütaste geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt. Schließt auch das Menü.
- <kbd>Leerzeichen</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüelement gesetzt.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste gesetzt und jedes vorhandene Untermenü wird geöffnet.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste gesetzt und jedes vorhandene Untermenü wird geöffnet.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element gesetzt.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element gesetzt.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Bearbeitet Mausklicks sowohl auf das Optionsfeld als auch auf das zugehörige Label, das den Zustand des Optionsfeldes durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Optionsfeldes ändert, sodass es für den sehenden Benutzer ausgewählt oder abgewählt erscheint.
- `onKeyDown`
  - : Bearbeitet den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Optionsfeldes durch Ändern des Wertes des `aria-checked`-Attributs und des Erscheinungsbildes des Optionsfeldes zu ändern, sodass es für den sehenden Benutzer ausgewählt oder abgewählt erscheint. Bearbeitet auch alle Tasten, die im Abschnitt zur Tastaturnavigation oben aufgeführt sind.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, jedoch nicht Teil der Tab-Sequenz der Seite. Hätten wir `aria-checked="true"` eingeschlossen, hätte es angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand optisch so gestaltet, dass er mithilfe des Attributselektors `[role='menuitemradio'][aria-checked='true']` wie ausgewählt aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar aber derzeit nicht ausgewählt ist. Der zugängliche Name "lila" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewähltes Optionsfeld, das wir mit [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, es sichtbar machen und in der gleichen Farbe wie der Inhalt färben, indem wir es mittels CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) mit dem `aria-checked`-Wert synchronisieren und die {{cssxref("background-color")}} ändern.

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

Verwenden Sie nicht die {{cssxref("background")}}-Kurzschreibweise, da diese die {{cssxref("background-clip")}}-Eigenschaft überschreiben würde, die wir verwendet haben, um den Effekt des Optionsfeldes zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die Semantik und das Verhalten besitzt, das Sie benötigen, verwenden Sie es anstelle der Umnutzung eines Elements und das Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Optionsfeld](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerung anstelle der Nachbildung der Funktionalität eines Optionsfelds mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
