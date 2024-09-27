---
title: "ARIA: Rolle menuitemradio"
slug: Web/Accessibility/ARIA/Roles/menuitemradio_role
l10n:
  sourceCommit: f1d4cbb12c5441b4147cfc541853d33105abcc9c
---

{{AccessibilitySidebar}}

Ein `menuitemradio` ist ein überprüfbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig aktiviert sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüpunkte. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der aktivierten Menüelemente innerhalb einer Gruppe auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein überprüfbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines aktiviert sein kann.

Diese drei Menüelemente dürfen nur in oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten oder besessen werden, die optional in ein Gruppierungselement mit der Rolle von [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) eingebettet sind. Das Verschachteln oder anderweitige Einbinden (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in ein `menu` oder eine `menubar` identifiziert die Menüelemente als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüe-Element definiert; das `group`-Element ist nicht notwendig.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Status der Radiotaste für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das Attribut `checked` von {{HTMLElement('input')}}s vom Typ `radio`, zeigt das Attribut `aria-checked` eines `menuitemradio` an, ob das Menüelement aktiviert (`true`), nicht aktiviert (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

In einer Gruppe kann immer nur ein `menuitemradio` aktiviert sein. Wenn ein Element in der Gruppe aktiviert wird, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor aktivierte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, deaktiviert wird, indem der Wert des Attributs `aria-checked` auf `false` geändert wird.

Falls Sie möchten, dass mehr als eines in einer Gruppe aktiviert werden kann oder Sie das Aktivieren und Deaktivieren eines Elements ermöglichen möchten, sollten Sie `menuitemcheckbox` verwenden.

Falls ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, platzieren Sie jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element oder trennen Sie die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer entsprechenden Rolle wie eine {{HTMLElement('fieldset')}}-Gruppe oder einen thematischen Bruch {{HTMLElement('hr')}}-Separator).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, nachgeordnetem Inhalt. Wenn das Label oder der nachgeordnete Inhalt nicht ausreichend ist, sollten vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), das auf nicht-nachgeordneten Inhalt verweist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden, da diese beiden ARIA-Eigenschaften anderen nachgeordneten Inhalt vor unterstützenden Technologien verbergen.

Wenn alle Elemente im Set nicht im DOM vorhanden sind, fügen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) hinzu. Beim Festlegen von `aria-setsize` und `aria-posinset` auf ein `menuitemradio` wird der Wert in Bezug auf die Gesamtzahl der Elemente im Menü festgelegt, wobei alle Separatoren ausgeschlossen sind.

Das `menuitemradio`-Element kann kategorisierte Inhalte haben, darf jedoch keine interaktiven Inhalte als Nachkommen haben und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs können keine semantischen Elemente enthalten, die in einem `menuitemradio` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachgeordneten Elemente eines `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachte man folgendes `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Da die Nachkommen von `menuitemradio` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

Aus der Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) äquivalent sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Widget, das eine Liste gemeinsamer Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen einheitlichen Satz häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true`, `false` oder `mixed` gesetzt, zeigt den aktuellen "checked" Zustand des menuitemradio an

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einer `menubar` oder einem mit einem Menübutton geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht aktiviert, aktiviert es das fokussierte `menuitemradio` und deaktiviert jedes andere aktivierte `menuitemradio`-Element in derselben Gruppe. Außerdem wird das Menü geschlossen.
- <kbd>Space</kbd>
  - : Wenn nicht aktiviert, aktiviert es das fokussierte `menuitemradio` und deaktiviert jedes andere aktivierte `menuitemradio`-Element in derselben Gruppe, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt sich der Fokus auf das übergeordnete Menüpunktelement.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Schließt das Untermenü. In der Menüleiste verschiebt sich der Fokus auf das nächste Element in der Menüleiste, öffnet jedes Untermenü, falls vorhanden.
- <kbd>Linke Pfeiltaste</kbd>
  - : Schließt das Menü. In der Menüleiste verschiebt sich der Fokus auf das vorherige Element in der Menüleiste, öffnet jedes Untermenü, falls vorhanden.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element ist, verschiebt sich der Fokus auf das erste Element.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element ist, verschiebt sich der Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, wird der Fokus nicht verschoben.

### Erforderliches JavaScript

#### Erforderliche Ereignishandler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf die Radiotaste als auch auf das zugehörige Label, das den Status der Radiotaste durch Ändern des Wertes des `aria-checked`-Attributs und des Aussehens der Radiotaste ändert, sodass sie dem sehenden Benutzer als aktiviert oder deaktiviert erscheint.
- `onKeyDown`
  - : Behandelt den Fall, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Status der Radiotaste zu ändern, indem der Wert des `aria-checked`-Attributs und das Aussehen der Radiotaste geändert werden, sodass sie dem sehenden Benutzer als aktiviert oder deaktiviert erscheint. Behandelt auch alle oben im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, jedoch nicht Teil der Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, würde es anzeigen, dass das `menuitemradio` aktiviert ist, und wir hätten den ausgewählten Zustand visuell so gestylt, dass er mithilfe des Attributselektors `[role='menuitemradio'][aria-checked='true']` aktiviert aussieht. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` unterstützenden Technologien an, dass das `menuitemradio` überprüfbar, aber derzeit nicht aktiviert ist. Der zugängliche Name "lila" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist eine aktivierte Radiotaste, die wir mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, wodurch sie sichtbar wird und dieselbe Farbe wie der Inhalt erhält, indem wir sie mit dem Wert `aria-checked` mithilfe von CSS-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisieren und die [`background-color`](/de/docs/Web/CSS/background-color) ändern.

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

Verwenden Sie nicht die Kurzform [`background`](/de/docs/Web/CSS/background), da dies die Eigenschaft [`background-clip`](/de/docs/Web/CSS/background-clip) überschreiben würde, die wir verwendet haben, um den Radiotaste-Effekt zu erstellen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die Semantik und das Verhalten hat, das Sie benötigen, verwenden Sie es anstelle der Umwidmung eines Elements und dem Hinzufügen einer ARIA-Rolle, -Zustand oder -Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Radiobutton](/de/docs/Web/HTML/Element/input/radio)-Formularsteuerelement zu verwenden, anstatt die Funktionalität eines Radiobuttons mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` role](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
