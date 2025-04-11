---
title: "ARIA: menuitemradio Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `menuitemradio` ist ein auswählbarer Menüpunkt in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente innerhalb einer Gruppe auf eines zu beschränken, verwenden Sie die `menuitemradio` Rolle für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbarer Menüpunkt in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelementtypen können nur in oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder verwaltet werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Verschachtelt oder anderweitig verwaltet (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Radiobuttons gegenüber unterstützender Technologie offenzulegen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden sollte.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio` zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt ist (`true`) oder nicht (`false`). Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht ausgewählt wird, indem der Wert des `aria-checked`-Attributs auf `false` umgestellt wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt wird, oder wenn Sie das Ein- und Ausschalten eines Elements ermöglichen möchten, ziehen Sie die Verwendung von `menuitemcheckbox` in Betracht.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, fassen Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element zusammen oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle wie {{HTMLElement('fieldset')}} Gruppierung oder einer thematischen Trengliederung {{HTMLElement('hr')}} Separator).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, abgestammtem Inhalt. Wenn das Label oder der abstammende Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um nicht-abstammenden Inhalt zu referenzieren oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen abstammenden Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Bei der Angabe von `aria-setsize` und `aria-posinset` für ein `menuitemradio`, setzen Sie den Wert in Bezug auf die Gesamtanzahl der Menüelemente, mit Ausnahme von Trennern.

Das `menuitemradio`-Element kann enthaltenen Text enthalten, jedoch keine interaktiven Inhalte als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeitsschnittstelle dargestellt werden, nur Text enthalten können. Zugänglichkeitsschnittstellen haben keine Möglichkeit, semantische Elemente in einem `menuitemradio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Da Nachkommen eines `menuitemradio` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

Aus der Sicht eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets in dem {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} dem folgenden entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von üblichen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt den aktuellen "ausgewählten" Zustand des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Befindet sich das `menuitemradio` in einem Untermenü in einem `menubar` oder einem mit einem Menü-Button geöffneten Menü, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` und hebt die Auswahl jedes anderen `menuitemradio`-Elements in derselben Gruppe auf. Schließt auch das Menü.
- <kbd>Space</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` und hebt die Auswahl jedes anderen `menuitemradio`-Elements in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. Im Menubar verschiebt den Fokus auf das übergeordnete Menubar-Element.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Schließt das Untermenü. Im Menubar verschiebt den Fokus auf das nächste Element im Menubar, öffnet ein Untermenü, falls vorhanden.
- <kbd>Linke Pfeiltaste</kbd>
  - : Schließt das Menü. Im Menubar verschiebt den Fokus auf das vorherige Element im Menubar, öffnet ein Untermenü, falls vorhanden.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, wird der Fokus auf das erste Element verschoben.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Behandelt Mausklicks sowohl auf den Radiobutton als auch auf das zugehörige Label, die den Zustand des Radiobuttons durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radiobuttons ändern, sodass er für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand des Radiobuttons durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild des Radiobuttons zu ändern, sodass er für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle oben aufgeführten Tasten in der Tastaturnavigationssektion.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte es angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell so gestylt, dass er wie eine Auswahl aussieht, indem wir den Attributselektor `[role='menuitemradio'][aria-checked='true']` verwenden. Stattdessen signalisiert die Anwesenheit von `aria-checked="false"` gegenüber unterstützenden Technologien, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewählter Radiobutton, den wir mit [erzeugtem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir ihn sichtbar machen und dieselbe Farbe wie der Inhalt verwenden, indem wir mit dem `aria-checked`-Wert über CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisieren und die [`background-color`](/de/docs/Web/CSS/background-color) ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Verallgemeinerungseigenschaft, da diese die [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreiben würde, die wir verwendet haben, um den Radiobutton-Effekt zu erstellen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die Semantik und das Verhalten bietet, die Sie benötigen, verwenden Sie es, anstatt ein Element neu zu verwenden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerung zu verwenden, anstatt die Funktionalität eines Radiobuttons mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
