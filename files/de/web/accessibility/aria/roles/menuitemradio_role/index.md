---
title: "ARIA: Rolle `menuitemradio`"
slug: Web/Accessibility/ARIA/Roles/menuitemradio_role
l10n:
  sourceCommit: 842ce8e92ad213cf93a625ac71c8dae6be8866e3
---

{{AccessibilitySidebar}}

Ein `menuitemradio` ist ein auswählbares Menüpunktelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menübalken sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente innerhalb einer Gruppe auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüpunktelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

Die drei Menüelemente dürfen nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten sein oder von einem solchen Element "besessen" werden, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role). Die Verschachtelung oder anderweitige Zugehörigkeit (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) enthalten, um den Zustand der Optionsschaltfläche für unterstützende Technologie sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Element/input/checkbox) verwendet. In diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) verwendet werden.

Ähnlich wie das Attribut `checked` von {{HTMLElement('input')}}s des Typs `radio`, zeigt das Attribut `aria-checked` eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert, wie es bei `menuitemcheckbox` der Fall ist.

In einer Gruppe kann nur ein `menuitemradio` gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das Attribut `aria-checked` auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, deselektiert wird, indem der Wert des Attributs `aria-checked` auf `false` geändert wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt sein kann, oder wenn Sie es ermöglichen möchten, ein Element ein- und auszuwählen, sollten Sie `menuitemcheckbox` verwenden.

Falls ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, sollten Sie jede Gruppe von verwandten `menuitemradio`-Elementen in ein `group`-Element aufnehmen oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle wie einem {{HTMLElement('fieldset')}}-Gruppierungselement oder einem thematischen Trennzeichen {{HTMLElement('hr')}}) abgrenzen.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element kommen, wenn `<input type="radio">` verwendet wird oder von sichtbarem, nachgeordnetem Inhalt. Wenn das Label oder der nachgeordnete Inhalt nicht ausreichend ist und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet wird, das nicht-nachgeordneten Inhalt referenziert, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen nachgeordneten Inhalt vor unterstützende Technologien verbergen.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, fügen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) hinzu. Beim Festlegen von `aria-setsize` und `aria-posinset` bei einem `menuitemradio` setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, abgesehen von Trennern.

Das `menuitemradio`-Element kann Phraseninhalt enthalten, aber keinen interaktiven Inhalt als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente im `menuitemradio` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemradio`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie folgendes `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Da Nachkommen von `menuitemradio` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

Aus der Perspektive eines Nutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
  - : Widget, das eine Liste allgemeiner Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
  - : Ähnlich wie `menu` für einen konsistenten Satz häufig verwendeter Befehle, die sichtbar bleiben und in der Regel horizontal dargestellt werden.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Zustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü in einem `menubar` oder einem mit einer Menü-Schaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen programmiert sein:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe deselektiert. Schließt auch das Menü.
- <kbd>Space</kbd>
  - : Wenn nicht ausgewählt, wird das fokussierte `menuitemradio` ausgewählt und jedes andere ausgewählte `menuitemradio`-Element in derselben Gruppe deselektiert, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. Im Menübalken verschiebt sich der Fokus auf das übergeordnete Menübalkenelement.
- <kbd>Rechter Pfeil</kbd>
  - : Schließt das Untermenü. Im Menübalken verschiebt sich der Fokus auf das nächste Element im Menübalken und öffnet ein eventuelles Untermenü.
- <kbd>Linker Pfeil</kbd>
  - : Schließt das Menü. Im Menübalken verschiebt sich der Fokus auf das vorherige Element im Menübalken und öffnet ein eventuelles Untermenü.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, verschiebt sich der Fokus auf das erste Element.
- <kbd>Aufwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, verschiebt sich der Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element, dessen Name mit dem eingetippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingetippten Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Bearbeiten von Mausklicks sowohl auf der Optionsschaltfläche als auch auf dem zugehörigen Label, um den Zustand der Optionsschaltfläche durch Ändern des Wertes des `aria-checked`-Attributs und des Erscheinungsbildes der Optionsschaltfläche zu ändern, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Bearbeiten des Falls, in dem der Benutzer die <kbd>Space</kbd>-Taste drückt, um den Zustand der Optionsschaltfläche durch Ändern des Wertes des `aria-checked`-Attributs und des Erscheinungsbildes der Optionsschaltfläche zu ändern, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle oben in der Tastaturnavigation gelisteten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tabulator-Sequenz der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` so gestaltet, dass er als ausgewählt aussieht. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` unterstützende Technologien, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus dem Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist eine ausgewählte Optionsschaltfläche, die wir unter Verwendung von [generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem sie sichtbar und von derselben Farbe wie der Inhalt gemacht wird, indem sie mit dem `aria-checked`-Wert unter Verwendung von CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) synchronisiert wird und die [`background-color`](/de/docs/Web/CSS/background-color) geändert wird.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Kurzschreibweise, da diese die zuvor verwendete [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreiben würde, die wir benutzt haben, um den Effekt der Optionsschaltfläche zu erstellen.

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder ein Attribut die Semantik und das Verhalten aufweist, die Sie benötigen, verwenden Sie es anstelle der Zweckentfremdung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustandes oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, die native [HTML-Optionsschaltflächen](/de/docs/Web/HTML/Element/input/radio)-Formularsteuerung zu verwenden, anstatt die Funktionalität einer Optionsschaltfläche mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
