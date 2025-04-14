---
title: "ARIA: Rolle menuitemradio"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Typen von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der im Menü markierten Einträge auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelemente können nur in einem Element enthalten oder von einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) besessen sein, optional innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Besitzverhältnis (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Wenn alle Einträge in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Status der Optionsschaltfläche für unterstützende Technologien offen zu legen, es sei denn, es wird ein [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in welchem Fall das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut verwendet werden sollte.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio`, gibt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt ist, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio` Element in derselben Gruppe, falls vorhanden, deselektiert wird, indem der Wert des `aria-checked`-Attributs auf `false` geändert wird.

Wenn mehr als ein Element in einer Gruppe ausgewählt sein soll, oder wenn das Aus- und Abwählen eines Elements ermöglicht werden soll, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält, oder wenn das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`- und/oder `menuitemcheckbox`-Elemente enthält, sollte jede Gruppe verwandter `menuitemradio`-Elemente in einem `group`-Element enthalten sein oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle, wie z.B. ein {{HTMLElement('fieldset')}} Gruppierung oder ein thematischer {{HTMLElement('hr')}} Trenner) abgegrenzt werden.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugehörigen {{htmlelement('label')}} Element stammen, wenn ein `<input type="radio">` verwendet wird, oder von sichtbarem, untergeordnetem Inhalt. Wenn das Label oder der Nachkommeninhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, um nicht-Nachkommeninhalte zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, werden diese beiden ARIA-Eigenschaften anderen nachrangigen Inhalten für unterstützende Technologien ausblenden.

Wenn nicht alle Elemente im Satz im DOM vorhanden sind, schließen Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) ein. Beim Festlegen von `aria-setsize` und `aria-posinset` auf einem `menuitemradio`, setzen Sie den Wert in Bezug auf die Gesamtzahl der Elemente im Menü, exklusive etwaiger Trenner.

Das `menuitemradio`-Element kann phrasenhaften Inhalt haben, darf jedoch keine interaktiven Inhalte als Nachkommen haben und keine Nachkommen mit einem `tabindex`-Attribut spezifizieren.

### Alle Nachkommen sind Präsentationsinhalte

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `menuitemradio` enthalten sind. Um dieses Problem zu bewältigen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemradio`-Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachkommen von `menuitemradio` Präsentationsinhalt sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Schnipsel im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} äquivalent zu dem folgenden sind:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste von allgemeinen Aktionen oder Funktionen anbietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Gruppe von häufig verwendeten Befehlen, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, gibt es den aktuellen "ausgewählten" Zustand des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio` Elemente.

Wenn sich das `menuitemradio` in einem Untermenü einer `menubar` befindet oder ein Menü mit einer Menütaste geöffnet wird, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` und deselektiert jedes andere ausgewählte `menuitemradio` Element in derselben Gruppe. Schließt auch das Menü.
- <kbd>Leerzeichen</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` und deselektiert jedes andere ausgewählte `menuitemradio` Element in derselben Gruppe, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In einer Menüleiste bewegt sich der Fokus zum übergeordneten Menüleiste-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In einer Menüleiste bewegt sich der Fokus zum nächsten Element in der Menüleiste und öffnet ein vorhandenes Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In einer Menüleiste bewegt sich der Fokus zum vorherigen Element in der Menüleiste und öffnet ein vorhandenes Untermenü.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Element im Menü. Befindet sich der Fokus auf dem letzten Element, wird der Fokus auf das erste Element verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Element im Menü. Befindet sich der Fokus auf dem ersten Element, wird der Fokus auf das letzte Element verschoben.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandeln von Mausklicks sowohl auf die Optionsschaltfläche als auch auf das zugehörige Label, das den Zustand der Optionsschaltfläche durch Ändern des Wertes des `aria-checked`-Attributs und des Erscheinungsbildes der Optionsschaltfläche ändert, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint.
- `onKeyDown`
  - : Behandeln des Falls, in dem der Benutzer die <kbd>Leerzeichen</kbd>-Taste drückt, um den Zustand der Optionsschaltfläche durch Ändern des Wertes des `aria-checked`-Attributs und das Erscheinungsbild der Optionsschaltfläche zu ändern, sodass sie für den sehenden Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle im Abschnitt Tastaturnavigation oben aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Das [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tabulatorenfolge der Seite. Hätten wir `aria-checked="true"` hinzugefügt, hätte es angezeigt, dass das `menuitemradio` markiert war, und wir hätten den ausgewählten Zustand visuell mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` stilisiert. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` unterstützenden Technologien, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "purple" stammt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist eine markierte Optionsschaltfläche, die wir mithilfe von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) erstellen können, indem wir sie sichtbar und in derselben Farbe wie der Inhalt machen, indem wir mit dem `aria-checked`-Wert synchronisieren und CSS [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwenden, um die [`background-color`](/de/docs/Web/CSS/background-color) zu ändern.

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

Verwenden Sie nicht die [`background`](/de/docs/Web/CSS/background) Kurzschreibweise, da diese die [`background-clip`](/de/docs/Web/CSS/background-clip) Eigenschaft überschreibt, die wir verwendet haben, um den Effekt der Optionsschaltfläche zu erstellen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein nativen HTML-Element oder Attribut die Semantik und das Verhalten besitzt, die Sie benötigen, verwenden Sie es anstelle eines umfunktionierten Elements und fügen eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzu, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML Optionsschaltflächen-](/de/docs/Web/HTML/Reference/Elements/input/radio) Formularsteuerung zu verwenden, anstatt die Funktionalität einer Optionsschaltfläche mit JavaScript und ARIA neu zu erstellen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
