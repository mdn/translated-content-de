---
title: "ARIA: Rolle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Einträge in Menüs und Menüleisten sind Menüeinträge. Es gibt drei Arten von Menüeinträgen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Zahl der ausgewählten Menüeinträge innerhalb einer Gruppe auf eins zu begrenzen, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

Die drei Menüeintrags-Elemente können nur in, oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder besessen werden, optional verschachtelt in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Die geschachtelte oder anderweitige Zugehörigkeit (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder einer `menubar` identifiziert die Menüeinträge als zusammengehörende Widgets.

Wenn alle Items in einem Untermenü Mitglieder derselben Radio-Gruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüeinträge mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) beinhalten, um den Zustand des Auswahlknopfs für unterstützende Technologie anzuzeigen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut verwendet werden sollte.

Ähnlich dem `checked` Attribut von {{HTMLElement('input')}}s des Typs `radio` zeigt das `aria-checked` Attribut eines `menuitemradio` an, ob der Menüeintrag ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed` Wert wie beim `menuitemcheckbox`.

Es kann jeweils nur ein `menuitemradio` in einer Gruppe ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das `aria-checked` Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio` Element in derselben Gruppe, falls vorhanden, durch das Umschalten des `aria-checked` Attributwerts auf `false` nicht mehr ausgewählt wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt wird, oder wenn Sie das Auswählen und Abwählen eines Elements ermöglichen möchten, erwägen Sie die Verwendung von `menuitemcheckbox`.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio` Elementen enthält, oder wenn das `menu` eine Gruppe von `menuitemradio` Elementen sowie andere, nicht zusammenhängende `menuitem` Elemente und/oder `menuitemcheckbox` Elemente enthält, fassen Sie jede Gruppe von zusammenhängenden `menuitemradio` Elementen in einem `group` Element zusammen oder grenzen Sie die `menuitemradio` Elemente von den anderen Menüeinträgen durch ein `separator` Element (oder ein HTML-Element mit einer gleichwertigen Rolle wie ein {{HTMLElement('fieldset')}} für Gruppierung oder ein thematischer Unterbrechung {{HTMLElement('hr')}} Separator) ab.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}} Element kommen, wenn `<input type="radio">` verwendet wird oder sichtbarer, nachfolgender Inhalt. Wenn das Label oder der nachfolgende Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das sich auf nicht nachfolgenden Inhalt bezieht, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA Eigenschaften anderen nachfolgenden Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente in der Gruppe im DOM vorhanden sind, enthalten Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset). Wenn Sie `aria-setsize` und `aria-posinset` auf einem `menuitemradio` festlegen, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, ohne Trennzeichen.

Das `menuitemradio` Element kann Phraseninhalt haben, aber keinen interaktiven Inhalt als Nachfolger und keine Nachfolger mit einem angegebenen `tabindex` Attribut.

### Alle Nachfolger sind präsentational

Es gibt einige Arten von Benutzerkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keinen Weg, semantische Elemente zu repräsentieren, die in einem `menuitemradio` enthalten sind. Um mit diesem Limit umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfolger von `menuitemradio` Elementen an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Als Beispiel betrachte man folgendes `menuitemradio` Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachfolger von `menuitemradio` präsentational sind, entspricht der folgende Code:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Perspektive eines Benutzers unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} äquivalent zu folgendem sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von gängigen Aktionen oder Funktionen bietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich einem `menu` für eine konsistente Reihe häufig benutzter Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Behälter für eine Gruppe von `menuitem` Elementen, einschließlich `menuitemradio` Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird, oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio` Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einer `menubar` oder einem mit einer Menütaste geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen einprogrammiert werden:

- <kbd>Enter</kbd>
  - : Falls nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl eines anderen ausgewählten `menuitemradio` Elements in derselben Gruppe auf. Schließt außerdem das Menü.
- <kbd>Space</kbd>
  - : Falls nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl eines anderen ausgewählten `menuitemradio` Elements in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In einer Menüleiste verschiebt sich der Fokus zum übergeordneten Menüleisten-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In einer Menüleiste verschiebt sich der Fokus zum nächsten Element in der Menüleiste und öffnet unter Umständen ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In einer Menüleiste verschiebt sich der Fokus zum vorhergehenden Element in der Menüleiste und öffnet unter Umständen ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus zum nächsten Element im Menü. Befindet sich der Fokus auf dem letzten Element, verschiebt er sich auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus zum vorhergehenden Element im Menü. Befindet sich der Fokus auf dem ersten Element, verschiebt er sich auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf die Radio-Schaltfläche als auch auf das zugehörige Label, das den Zustand des Auswahlknopfs ändert, indem der Wert des `aria-checked` Attributs geändert wird und das Erscheinungsbild des Auswahlknopfs so geändert wird, dass es für sehende Benutzer ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandelt den Fall, bei dem der Benutzer die <kbd>Leerzeichen</kbd> Taste drückt, um den Zustand des Auswahlknopfs zu ändern, indem der Wert des `aria-checked` Attributs geändert wird und das Erscheinungsbild des Auswahlknopfs so geändert wird, dass es für sehende Benutzer ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle im obigen Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tabulatorsequenz der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass es mit dem Attribut-Selektor `[role='menuitemradio'][aria-checked='true']` ausgewählt aussah. Stattdessen zeigt die Präsenz von `aria-checked="false"` unterstützender Technologien, dass das `menuitemradio` auswählbar ist, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" kommt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewählter Radiobutton, den wir mittels [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, indem wir es mit dem `aria-checked` Wert synchronisieren und die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) mithilfe von CSS-[Attribut-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/Reference/Properties/background) Kurzform-Eigenschaft, da diese die [`background-clip`](/de/docs/Web/CSS/Reference/Properties/background-clip) Eigenschaft überschreiben würde, die wir verwendet haben, um den Radio-Button-Effekt zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Tag oder ein Attribut die Semantik und das Verhalten hat, das Sie benötigen, verwenden Sie es anstelle der Neuverwendung eines Elements und dem Hinzufügen eines ARIA-Rolle, Zustands- oder Eigenschaftswerts, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML Radio-Button](/de/docs/Web/HTML/Reference/Elements/input/radio) Form-Kontrolle zu verwenden, anstatt die Funktion eines Radio-Buttons mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
