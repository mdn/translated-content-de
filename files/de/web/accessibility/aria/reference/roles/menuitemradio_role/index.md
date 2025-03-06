---
title: "ARIA: Rolle `menuitemradio`"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `menuitemradio` ist ein auswählbares `menuitem` in einer Gruppe von Elementen mit derselben Rolle, von denen immer nur eines ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Typen von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der innerhalb einer Gruppe ausgewählten Menüelemente auf eines zu begrenzen, verwenden Sie die Rolle `menuitemradio` für alle Elemente der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen immer nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelementtypen können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder von einem solchen Element besessen sein, optional innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menü-Element definiert; das `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Status der Optionsschaltfläche für unterstützende Technologien offenzulegen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet, in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden sollte.

Ähnlich wie das Attribut `checked` von {{HTMLElement('input')}}s des Typs `radio` zeigt das Attribut `aria-checked` eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

In einer Gruppe kann immer nur ein `menuitemradio` ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht mehr ausgewählt wird, indem der Attributwert `aria-checked` auf `false` gewechselt wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt sein kann oder wenn Sie das Auswählen und Abwählen eines Elements ermöglichen möchten, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, fassen Sie jede Gruppe von verwandten `menuitemradio`-Elementen in einem `group`-Element zusammen oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle wie einer {{HTMLElement('fieldset')}}-Gruppierung oder einem thematischen Trennzeichen {{HTMLElement('hr')}}).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, nachfolgendem Inhalt. Wenn das Label oder der nachfolgende Inhalt nicht ausreicht, wird vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet, das auf nicht-nachfolgenden Inhalt verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet, wobei diese beiden ARIA-Eigenschaften anderen nachfolgenden Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Wenn `aria-setsize` und `aria-posinset` auf einem `menuitemradio` angegeben werden, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Elemente im Menü, unter Ausschluss von Trennzeichen.

Das `menuitemradio`-Element kann phrasenartigen Inhalt haben, darf jedoch keinen interaktiven Inhalt als Nachfahren haben und keine Nachfahren mit einem `tabindex`-Attribut angegeben haben.

### Alle Nachfahren sind darstellend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente zu vertreten, die in einem `menuitemradio` enthalten sind. Um dieses Problem zu behandeln, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Da Nachfahren eines `menuitemradio` darstellend sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

Aus der Perspektive des Benutzers der unterstützenden Technologie existiert die Überschrift nicht, da die vorhergehenden Code-Schnipsel gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitenschema")}} sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste von häufigen Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu` für eine konsistente Reihe häufig verwendeter Befehle, die sichtbar bleiben und in der Regel horizontal dargestellt werden.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, gibt es den aktuellen "ausgewählten" Zustand des `menuitemradio` an.

### Tastatur-Interaktionen

Wenn ein `menu` geöffnet wird oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn das `menuitemradio` sich in einem Untermenü in einer `menubar` oder einem mit einem Menü-Button geöffneten Menü befindet, müssen die folgenden Tastatur-Interaktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt. Schließt zudem das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe abgewählt, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüelement verschoben.
- <kbd>Rechter Pfeil</kbd>
  - : Schließt das Untermenü. In der Menüleiste wird der Fokus auf das nächste Element in der Menüleiste verschoben, wobei jedes vorhandene Untermenü geöffnet wird.
- <kbd>Linker Pfeil</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das vorherige Element in der Menüleiste verschoben, wobei jedes vorhandene Untermenü geöffnet wird.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird er auf das erste Element verschoben.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird er auf das letzte Element verschoben.
- <kbd>Pos1</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Handhaben Sie Maus-Klicks sowohl auf die Optionsschaltfläche als auch auf das zugehörige Label, die den Zustand der Optionsschaltfläche ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Optionsschaltfläche verändert werden, sodass es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Handhaben Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand der Optionsschaltfläche zu ändern, indem der Wert des `aria-checked`-Attributs und das Erscheinungsbild der Optionsschaltfläche geändert werden, sodass es für den sehenden Benutzer ausgewählt oder nicht ausgewählt erscheint. Handhabt auch alle oben im Abschnitt Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tabulatorsequenz der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell mit dem Attribut-Selektor `[role='menuitemradio'][aria-checked='true']` so gestaltet, dass er ausgewählt aussieht. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist eine ausgewählte Optionsschaltfläche, die wir mit [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, sie sichtbar machen und die gleiche Farbe wie der Inhalt haben, indem wir uns mit dem `aria-checked`-Wert synchronisieren, indem wir CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwenden und die [`background-color`](/de/docs/Web/CSS/background-color) ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background)-Kurzschreibweise, da dies die [`background-clip`](/de/docs/Web/CSS/background-clip)-Eigenschaft überschreibt, die wir verwendet haben, um den Optionsschaltflächen-Effekt zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Neuzuweisung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Radio-Button](/de/docs/Web/HTML/Element/input/radio)-Formular zu verwenden, anstatt die Funktionalität einer Radio-Schaltfläche mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
