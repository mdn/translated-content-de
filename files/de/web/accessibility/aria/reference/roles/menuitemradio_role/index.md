---
title: "ARIA: menuitemradio Rolle"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

## Beschreibung

Die Elemente in Menüs und Menüleisten sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Um die Anzahl der ausgewählten Menüelemente in einer Gruppe auf eines zu beschränken, verwenden Sie die Rolle `menuitemradio` für alle Elemente in der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.

Die drei Menüelement-Typen können nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten oder ihnen zugeordnet sein, optional verschachtelt innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Das Verschachteltsein oder anderweitige Zugeordnetsein (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) in einem `menu` oder `menubar` identifiziert die Menüelemente als verwandte Widgets.

Wenn alle Elemente in einem Untermenü Mitglieder derselben Radiogruppe sind, wird die `group` durch das Menüelement definiert; das `group`-Element ist nicht notwendig.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, um den Zustand des Radioknopfes gegenüber unterstützenden Technologien offenzulegen, es sei denn, es wird [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) verwendet, wobei das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) benutzt werden sollte.

Ähnlich dem `checked`-Attribut von {{HTMLElement('input')}}s vom Typ `radio`, gibt das `aria-checked`-Attribut eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Es gibt keinen `mixed`-Wert wie bei `menuitemcheckbox`.

Nur ein `menuitemradio` in einer Gruppe kann gleichzeitig ausgewählt sein. Wenn ein Element in der Gruppe ausgewählt wird, wird das `aria-checked`-Attribut auf `true` gesetzt, während das zuvor ausgewählte `menuitemradio`-Element in derselben Gruppe, falls vorhanden, nicht mehr ausgewählt wird, indem der Wert des `aria-checked`-Attributs auf `false` geändert wird.

Wenn Sie möchten, dass mehr als ein Element in einer Gruppe ausgewählt werden kann, oder wenn Sie die Möglichkeit bieten möchten, ein Element zu aktivieren und zu deaktivieren, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen oder eine Gruppe von `menuitemradio`-Elementen sowie andere, nicht verwandte `menuitem`- und/oder `menuitemcheckbox`-Elemente enthält, sollten Sie jede Gruppe von verwandten `menuitemradio`-Elementen in einem `group`-Element enthalten oder die Gruppe der `menuitemradio`-Elemente von den anderen Menüelementen mit einem `separator`-Element (oder einem HTML-Element mit einer äquivalenten Rolle wie einem {{HTMLElement('fieldset')}} für die Gruppierung oder einem thematischen Trennstrich {{HTMLElement('hr')}}-Separator) abgrenzen.

Ein zugänglicher Name ist erforderlich. Idealerweise sollte der zugängliche Name von einem zugeordneten {{htmlelement('label')}}-Element stammen, wenn `<input type="radio">` verwendet wird, oder von sichtbarem, abgeleitetem Inhalt. Sollte das Label oder der abgeleitete Inhalt nicht ausreichend sein, wird vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet, um nicht-abgeleitete Inhalte zu referenzieren, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wobei diese beiden ARIA-Eigenschaften anderen abgeleiteten Inhalt vor unterstützenden Technologien verbergen.

Wenn nicht alle Elemente in der Gruppe im DOM vorhanden sind, sollten die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) eingeschlossen werden. Beim Festlegen von `aria-setsize` und `aria-posinset` auf einem `menuitemradio` sollte der Wert in Bezug auf die Gesamtanzahl der Elemente im Menü festgelegt werden, ausgenommen aller Separatoren.

Das `menuitemradio`-Element kann Satzinhalte haben, aber keine interaktiven Inhalte als Nachkommen und keine Nachkommen mit einem angegebenen `tabindex`-Attribut.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs können semantische Elemente, die in einem `menuitemradio` enthalten sind, nicht darstellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `menuitemradio`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachkommen von `menuitemradio` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus Sicht der unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} dem folgenden entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Widget, das eine Liste allgemeiner Aktionen oder Funktionen anbietet, die der Benutzer aufrufen kann.
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Ähnlich wie `menu` für einen konsistenten Satz von häufig genutzten Befehlen, die sichtbar bleiben und normalerweise horizontal dargestellt werden.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Behälter für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Erforderlich)
  - : Auf `true` oder `false` gesetzt, zeigt es den aktuellen "ausgewählten" Status des menuitemradio an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder wenn ein `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gelegt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Wenn das `menuitemradio` in einem Untermenü eines `menubar` oder in einem Menü, das über eine Menüschaltfläche geöffnet wird, enthalten ist, müssen die folgenden Tastaturinteraktionen programmiert werden:

- <kbd>Enter</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl eines anderen ausgewählten `menuitemradio`-Elements in derselben Gruppe auf. Schließt auch das Menü.
- <kbd>Leertaste</kbd>
  - : Wenn nicht ausgewählt, wählt das fokussierte `menuitemradio` aus und hebt die Auswahl eines anderen ausgewählten `menuitemradio`-Elements in derselben Gruppe auf, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. Im menubar verschiebt den Fokus auf das übergeordnete menubar-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. Im menubar verschiebt den Fokus auf das nächste Element in der Menüleiste und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. Im menubar verschiebt den Fokus auf das vorherige Element in der Menüleiste und öffnet ein Untermenü, falls vorhanden.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Element im Menü. Wenn der Fokus auf dem letzten Element liegt, verschiebt den Fokus auf das erste Element.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menü. Wenn der Fokus auf dem ersten Element liegt, verschiebt den Fokus auf das letzte Element.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf das nächste Element mit einem Namen, der mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Behandelt Mausklicks sowohl auf den Radiobutton als auch auf das zugehörige Label, das den Zustand des Radiobuttons durch Ändern des Wertes des `aria-checked`-Attributs ändert, sodass er zu einem kontrolliert oder unkontrolliert erscheinenden Radiobutton für sehende Benutzer wird.
- `onKeyDown`
  - : Behandelt den Fall, dass der Benutzer die <kbd>Leertaste</kbd> drückt, um den Zustand des Radiobuttons durch Ändern des Wertes des `aria-checked`-Attributs zu ändern und das Erscheinungsbild des Radiobuttons zu ändern, sodass er für sehende Benutzer als ausgewählt oder nicht ausgewählt erscheint. Behandelt auch alle Tasten, die im Abschnitt zur Tastaturnavigation oben aufgeführt sind.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Der [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das `menuitemradio` fokussierbar, jedoch nicht Teil der Tabulatorsequenz der Seite. Hätten wir `aria-checked="true"` eingeschlossen, hätte dies angezeigt, dass das `menuitemradio` ausgewählt war, und wir hätten den ausgewählten Zustand visuell so gestaltet, dass es ausgewählt aussieht, indem wir den Attributselektor `[role='menuitemradio'][aria-checked='true']` verwenden. Stattdessen zeigt das Vorhandensein von `aria-checked="false"` gegenüber unterstützenden Technologien an, dass das `menuitemradio` auswählbar, aber derzeit nicht ausgewählt ist. Der zugängliche Name "lila" kommt vom Inhalt.

Das visuelle Erscheinungsbild des ausgewählten Zustands ist ein ausgewählter Radiobutton, den wir mittels [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen können, indem wir ihn sichtbar und in derselben Farbe wie der Inhalt erscheinen lassen, indem wir das `aria-checked`-Attribut mit CSS [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) synchronisieren und die {{cssxref("background-color")}} ändern.

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

Verwenden Sie nicht die {{cssxref("background")}}-Kurzform-Eigenschaft, da dies die von uns verwendete {{cssxref("background-clip")}}-Eigenschaft überschreiben würde, die wir zur Erzeugung des Radiobutton-Effekts verwendet haben.

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die erforderliche Semantik und das Verhalten hat, verwenden Sie es anstelle eines Elements, das mit einer ARIA-Rolle, einem Zustand oder einer Eigenschaft neu zu gestalten, um es zugänglich zu machen. Daher wird empfohlen, das native [HTML-Radiobutton](/de/docs/Web/HTML/Reference/Elements/input/radio)-Formularsteuerung anstelle der Nachbildung der Funktionalität eines Radiobuttons mit JavaScript und ARIA zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
