---
title: "ARIA: Rolle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Ein `menuitemradio` ist ein überprüfbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig aktiviert werden kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüpunkte. Es gibt drei Arten von Menüpunkten: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der aktivierten Menüpunkte innerhalb einer Gruppe auf eins zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein überprüfbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines aktiviert werden kann.

Die drei Menüelemente können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder diesem untergeordnet sein, optional verschachtelt innerhalb eines Gruppenelements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteln oder anderweitige Zuordnen (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als zusammengehörige Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht erforderlich.

Menüpunkte mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Radiobuttons für unterstützende Technologien sichtbar zu machen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, in diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das `checked`-Attribut von {{HTMLElement('input')}}-Elementen vom Typ `radio` zeigt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement aktiviert (`true`) oder nicht aktiviert (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig aktiv sein. Wenn ein Element in der Gruppe aktiviert wird, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor aktivierte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, durch Umschalten des `aria-checked`-Attributwerts auf `false` deaktiviert wird.

Wenn Sie mehr als ein Element in einer Gruppe aktivieren möchten oder das Aktivieren und Deaktivieren eines Elements ermöglichen möchten, verwenden Sie `menuitemcheckbox`.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder das `menu` eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`-Elemente und/oder `menuitemcheckbox`-Elemente enthält, fassen Sie jedes Set verwandter `menuitemradio`-Elemente in einem `group`-Element zusammen oder trennen die `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer gleichwertigen Rolle wie einer {{HTMLElement('fieldset')}}-Gruppe oder einem thematischen {{HTMLElement('hr')}}-Trennstrich).

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name aus einem zugehörigen {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder aus sichtbarem, abgeleitetem Inhalt. Beachten Sie, dass, falls das Label oder der abgeleitete Inhalt nicht ausreicht und vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet wird, das nichtabgeleiteten Inhalt referenziert, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, diese zwei ARIA-Eigenschaften anderen abgeleiteten Inhalt vor unterstützenden Technologien ausblenden.

Wenn nicht alle Elemente im Set im DOM vorhanden sind, geben Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) an. Wenn Sie `aria-setsize` und `aria-posinset` auf einem `menuitemradio` angeben, setzen Sie den Wert mit Bezug auf die Gesamtanzahl der Elemente im Menü abzüglich irgendwelcher Trennstriche.

Das `menuitemradio`-Element kann Formeninhalte haben, darf jedoch keine interaktiven Inhalte als Nachkommen haben und keine Nachkommen mit einem spezifizierten `tabindex`-Attribut.

### Alle Nachkommen sind präsentierend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs können semantische Elemente im `menuitemradio` nicht darstellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente jedes `menuitemradio`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da die Nachkommen von `menuitemradio` präsentierend sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus der Sicht der Benutzer von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem Folgenden im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste häufig verwendeter Aktionen oder Funktionen bietet, die der Benutzer ausführen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für eine konsistente Sammlung häufig verwendeter Befehle, die sichtbar bleiben und normalerweise horizontal präsentiert werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen in einem `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "checked"-Zustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn `menuitemradio` in einem Untermenü in einem `menubar` oder einem mit einer Menütaste geöffneten Menü ist, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Falls nicht aktiviert, aktiviert den fokussierten `menuitemradio` und deaktiviert alle anderen aktivierten `menuitemradio`-Elemente in derselben Gruppe. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Falls nicht aktiviert, aktiviert den fokussierten `menuitemradio` und deaktiviert alle anderen aktivierten `menuitemradio`-Elemente in derselben Gruppe, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In der Menüleiste wird der Fokus auf das übergeordnete Menüleiste-Element verschoben.
- <kbd>Pfeil rechts</kbd>
  - : Schliesst das Untermenü. In der Menüleiste bewegt den Fokus zum nächsten Element in der Menüleiste, öffnet ein beliebiges Untermenü, falls vorhanden.
- <kbd>Pfeil links</kbd>
  - : Schliesst das Menü. In der Menüleiste bewegt den Fokus zum vorherigen Element in der Menüleiste, öffnet ein beliebiges Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Element im Menü. Wenn der Fokus auf dem letzten Element ist, bewegt er den Fokus auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Element im Menü. Wenn der Fokus auf dem ersten Element ist, bewegt er den Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Bewegt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Bewegt den Fokus zum nächsten Element, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

### Erforderliches JavaScript

#### Erforderliche Ereignis-Handler

- `onclick`
  - : Behandeln Sie Mausklicks auf den Radio-Button und das zugehörige Label, die den Zustand des Radio-Buttons ändern, indem sie den Wert des `aria-checked`-Attributs ändern und das Erscheinungsbild des Radio-Buttons so verändern, dass er für sehende Benutzer als aktiviert oder deaktiviert erscheint.
- `onKeyDown`
  - : Behandeln Sie den Fall, in dem der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radio-Buttons zu ändern, indem der Wert des `aria-checked`-Attributs geändert wird und das Erscheinungsbild des Radio-Buttons so verändert wird, dass er für sehende Benutzer als aktiviert oder deaktiviert erscheint. Behandelt auch alle in der Tastaturnavigationssektion oben aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, aber nicht Teil der Tabulatorsequenz der Seite. Hätten wir `aria-checked="true"` eingefügt, hätte dies angezeigt, dass das `menuitemradio` aktiviert war, und wir hätten den ausgewählten Zustand visuell durch das Attributselektor `[role='menuitemradio'][aria-checked='true']` so gestaltet, dass er als aktiviert erscheint. Stattdessen zeigt die Anwesenheit von `aria-checked="false"` assistiven Technologien an, dass das `menuitemradio` überprüfbar, aber derzeit nicht aktiviert ist. Der zugängliche Name "purple" stammt aus den Inhalten.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein aktivierter Radio-Button, den wir mithilfe von [generierten Inhalten](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, indem wir ihn sichtbar und die gleiche Farbe wie der Inhalt machen, indem wir mit dem `aria-checked`-Wert unter Verwendung von CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) synchronisieren und die {{cssxref("background-color")}} ändern.

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

Verwenden Sie nicht die Kurzform {{cssxref("background")}}, da dies die {{cssxref("background-clip")}}-Eigenschaft überschreibt, die wir verwendet haben, um den Radio-Button-Effekt zu erzeugen.

### Bevorzugen Sie HTML

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigten Semantiken und das erwartete Verhalten besitzt, verwenden Sie es, anstatt ein Element umzuwidmen und eine ARIA-Rolle, -Zustand oder -Eigenschaft zur Zugänglichkeit hinzuzufügen. Daher wird empfohlen, das native [HTML Radio-Button](/de/docs/Web/HTML/Reference/Elements/input/radio)-Formularsteuerelement zu verwenden, anstatt die Funktionalität eines Radio-Buttons mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
