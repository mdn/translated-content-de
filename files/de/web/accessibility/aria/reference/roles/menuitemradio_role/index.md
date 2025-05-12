---
title: "ARIA: Menüelement mit Radio-Button-Funktion"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einem Set von Elementen mit derselben Rolle, von denen immer nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Typen von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente auf eins innerhalb einer Gruppe zu begrenzen, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einem Set von Elementen mit derselben Rolle, von denen immer nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelemente können nur in, oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten bzw. verwaltet werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als miteinander verbundene Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Radio-Buttons für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet. In diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio` zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie beim `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht ausgewählt wird, indem der Wert des `aria-checked`-Attributes auf `false` gewechselt wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt werden kann, oder wenn Sie das Auswählen und Abwählen eines Elements ermöglichen möchten, sollten Sie ein `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen zusammen mit anderen, nicht zusammenhängenden `menuitem`- oder `menuitemcheckbox`-Elementen enthält, umfassen Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element oder grenzen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen durch ein `separator`-Element (oder ein HTML-Element mit einer äquivalenten Rolle, wie z.B. eine {{HTMLElement('fieldset')}}-Gruppierung oder ein thematischer {{HTMLElement('hr')}}-Trennstrich) ab.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem assoziierten {{htmlelement('label')}}-Element kommen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, abgeleitetem Inhalt. Beachten Sie, dass wenn das Label oder der abgeleitete Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das auf nicht-abgeleiteten Inhalt verweist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, diese beiden ARIA-Eigenschaften anderen abgeleiteten Inhalt für unterstützende Technologien verbergen.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, beinhalten Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset). Beim Angeben von `aria-setsize` und `aria-posinset` auf einem `menuitemradio`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, ausgenommen Trennzeichen.

Das `menuitemradio`-Element kann phrasenhaften Inhalt haben, darf jedoch keinen interaktiven Inhalt als Nachkommen haben und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommene sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `menuitemradio` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `menuitemradio`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachkommen eines `menuitemradio` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Sicht eines Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen anbietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz von häufig verwendeten Befehlen, die sichtbar bleiben und in der Regel horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einem `menubar` befindet oder ein Menü mit einem Menü-Button geöffnet wird, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Eingabetaste</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl aller anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe auf. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl aller anderen ausgewählten `menuitemradio`-Elemente in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In `menubar` wird der Fokus auf das übergeordnete `menubar`-Element verschoben.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In `menubar` wird der Fokus auf das nächste Element in der `menubar` verschoben, öffnet jedes vorhandene Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In `menubar` wird der Fokus auf das vorherige Element in der `menubar` verschoben, öffnet jedes vorhandene Untermenü.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, verschiebt er ihn auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, verschiebt er ihn auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, wird der Fokus nicht verschoben.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf den Radio-Button als auch auf das zugehörige Label, das den Zustand des Radio-Buttons ändern wird, indem der Wert des `aria-checked`-Attributes und das Erscheinungsbild des Radio-Buttons geändert wird, sodass er für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radio-Buttons zu ändern, indem der Wert des `aria-checked`-Attributes und das Erscheinungsbild des Radio-Buttons geändert wird, sodass er für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle in der Tastaturnavigationssektion oben aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, jedoch nicht Teil der Tabulatorsequenz der Seite. Hätten wir `aria-checked="true"` eingefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt ist, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` so gestylt, dass er wie ausgewählt aussieht. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" kommt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewählter Radio-Button, den wir durch [generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem er sichtbar und in derselben Farbe wie der Inhalt ist, indem er mit dem `aria-checked`-Wert durch CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisiert wird und die [`background-color`](/de/docs/Web/CSS/background-color) ändert.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Abkürzungseigenschaft, da diese die [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreiben würde, die wir verwendet haben, um den Radio-Button-Effekt zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Tag oder ein Attribut die Semantik und das Verhalten bietet, das Sie benötigen, verwenden Sie es anstelle der Wiederverwendung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Status oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML Radio-Button](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerelement zu verwenden, anstatt die Funktionalität eines Radio-Buttons mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
