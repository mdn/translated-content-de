---
title: "ARIA: Rolle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einer Gruppe von Elementen mit derselben Rolle. Innerhalb der Gruppe kann jeweils nur ein Eintrag ausgewählt sein.

## Beschreibung

Die Einträge in `menu` und `menubar` sind Menüeinträge. Es gibt drei Arten von Menüeinträgen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Damit innerhalb einer Gruppe höchstens ein Menüeintrag ausgewählt sein kann, verwenden Sie für alle Elemente der Gruppe die Rolle `menuitemradio`.

Ein `menuitemradio` ist ein auswählbarer Menüeintrag in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

Die drei Arten von Menüeinträgen dürfen nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder einem solchen Element zugeordnet werden. Optional können sie zusätzlich in einem Gruppierungselement mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt sein. Durch die Verschachtelung in einem `menu` oder einer `menubar` beziehungsweise durch eine andere Zuordnung zu einem solchen Element (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) werden die Menüeinträge als zusammengehörige Widgets gekennzeichnet.

Wenn alle Einträge eines Untermenüs zur selben Radio-Gruppe gehören, wird die `group` durch das Menüelement definiert; ein `group`-Element ist dann nicht erforderlich.

Menüeinträge mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, damit der Zustand des Radio-Buttons für assistive Technologien erkennbar ist. Eine Ausnahme gilt bei Verwendung von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox): In diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das Attribut `checked` bei {{HTMLElement('input')}}-Elementen vom Typ `radio` gibt das Attribut `aria-checked` eines `menuitemradio` an, ob der Menüeintrag ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Anders als bei `menuitemcheckbox` gibt es keinen Wert `mixed`.

In einer Gruppe kann jeweils nur ein `menuitemradio` ausgewählt sein. Wenn ein Eintrag der Gruppe ausgewählt wird, erhält sein Attribut `aria-checked` den Wert `true`. Ein zuvor ausgewähltes `menuitemradio`-Element derselben Gruppe wird, falls vorhanden, abgewählt, indem der Wert seines Attributs `aria-checked` auf `false` gesetzt wird.

Wenn mehrere Einträge einer Gruppe gleichzeitig ausgewählt sein sollen oder wenn sich ein Eintrag einzeln aus- und abwählen lassen soll, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder eine `menubar` mehrere Gruppen von `menuitemradio`-Elementen enthält oder wenn ein `menu` neben einer Gruppe von `menuitemradio`-Elementen auch andere, nicht zugehörige `menuitem`- und/oder `menuitemcheckbox`-Elemente enthält, fassen Sie jede zusammengehörige Gruppe von `menuitemradio`-Elementen in einem `group`-Element zusammen. Alternativ können Sie die Gruppe der `menuitemradio`-Elemente durch ein `separator`-Element von den anderen Menüeinträgen abgrenzen (oder durch ein HTML-Element mit einer entsprechenden Rolle, etwa eine Gruppierung mit {{HTMLElement('fieldset')}} oder eine thematische Trennung mit {{HTMLElement('hr')}}).

Ein zugänglicher Name ist erforderlich. Idealerweise stammt er bei Verwendung von `<input type="radio">` aus einem zugeordneten {{htmlelement('label')}}-Element, andernfalls aus sichtbarem Inhalt eines Nachfahren. Beachten Sie: Wenn die Beschriftung oder der Inhalt der Nachfahren nicht ausreicht und stattdessen vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf Inhalt außerhalb der Nachfahren verweist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, verbergen diese beiden ARIA-Eigenschaften andere Inhalte von Nachfahren vor assistiven Technologien.

Wenn nicht alle Elemente der Gruppe im DOM vorhanden sind, geben Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) an. Wenn Sie `aria-setsize` und `aria-posinset` für ein `menuitemradio` angeben, beziehen sich die Werte auf die Gesamtzahl der Einträge im Menü, ohne Trennzeichen mitzuzählen.

Das `menuitemradio`-Element darf Textinhalte enthalten, aber weder interaktive Inhalte als Nachfahren noch Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahren sind rein präsentational

Manche Arten von Benutzeroberflächenkomponenten können in einer Accessibility-API der Plattform nur Text enthalten. Accessibility-APIs können semantische Elemente innerhalb eines `menuitemradio` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `menuitemradio`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `menuitemradio`-Element, das eine Überschrift enthält.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

Da Nachfahren von `menuitemradio` rein präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

Aus Sicht einer Person, die assistive Technologien verwendet, existiert die Überschrift nicht, da die vorherigen Codebeispiele dem Folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste häufiger Aktionen oder Funktionen bereitstellt, die Benutzer ausführen können.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu`, jedoch für eine dauerhaft sichtbare Gruppe häufig verwendeter Befehle, die üblicherweise horizontal dargestellt wird.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder einer `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Mit dem Wert `true` oder `false` gibt diese Eigenschaft den aktuellen Auswahlzustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder eine `menubar` den Fokus erhält, wird der Tastaturfokus auf den ersten Eintrag gesetzt. Alle Einträge in beiden Elementen können den Fokus erhalten, einschließlich aller `menuitemradio`-Elemente.

Wenn sich das `menuitemradio` in einem Untermenü einer `menubar` oder in einem über eine Menüschaltfläche geöffneten Menü befindet, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Eingabetaste</kbd>
  - : Wählt das fokussierte `menuitemradio` aus, falls es noch nicht ausgewählt ist, und wählt jedes andere ausgewählte `menuitemradio`-Element derselben Gruppe ab. Schließt außerdem das Menü.
- <kbd>Leertaste</kbd>
  - : Wählt das fokussierte `menuitemradio` aus, falls es noch nicht ausgewählt ist, und wählt jedes andere ausgewählte `menuitemradio`-Element derselben Gruppe ab, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In einer Menüleiste wird der Fokus auf den übergeordneten Menüleisteneintrag verschoben.
- <kbd>Pfeil nach rechts</kbd>
  - : Schließt das Untermenü. In einer Menüleiste wird der Fokus auf den nächsten Eintrag der Menüleiste verschoben und ein zugehöriges Untermenü gegebenenfalls geöffnet.
- <kbd>Pfeil nach links</kbd>
  - : Schließt das Menü. In einer Menüleiste wird der Fokus auf den vorherigen Eintrag der Menüleiste verschoben und ein zugehöriges Untermenü gegebenenfalls geöffnet.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf den nächsten Eintrag im Menü. Befindet sich der Fokus auf dem letzten Eintrag, wird er auf den ersten Eintrag verschoben.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf den vorherigen Eintrag im Menü. Befindet sich der Fokus auf dem ersten Eintrag, wird er auf den letzten Eintrag verschoben.
- <kbd>Pos1</kbd>
  - : Verschiebt den Fokus auf den ersten Eintrag im Menü.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf den letzten Eintrag im Menü.
- <kbd>Zeichen</kbd>
  - : Verschiebt den Fokus auf den nächsten Eintrag, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn kein Eintrag einen entsprechenden Namen hat, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf den Radio-Button als auch auf die zugehörige Beschriftung. Dabei wird der Zustand des Radio-Buttons geändert, indem der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radio-Buttons angepasst werden, sodass er für sehende Benutzer als ausgewählt oder nicht ausgewählt erkennbar ist.
- `onKeyDown`
  - : Verarbeitet das Drücken der <kbd>Leertaste</kbd>, um den Zustand des Radio-Buttons zu ändern. Dazu werden der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radio-Buttons angepasst, sodass er für sehende Benutzer als ausgewählt oder nicht ausgewählt erkennbar ist. Verarbeitet außerdem alle oben im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Durch [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) kann das `menuitemradio` den Fokus erhalten, gehört aber nicht zur Tab-Reihenfolge der Seite. Hätten wir `aria-checked="true"` angegeben, würde dies anzeigen, dass das `menuitemradio` ausgewählt ist. Den ausgewählten Zustand hätten wir mit dem Attributselektor `[role='menuitemradio'][aria-checked='true']` auch visuell entsprechend gestaltet. Stattdessen zeigt `aria-checked="false"` assistiven Technologien an, dass das `menuitemradio` auswählbar, derzeit aber nicht ausgewählt ist. Der zugängliche Name „purple“ stammt aus dem Inhalt.

Der ausgewählte Zustand wird visuell als markierter Radio-Button dargestellt. Diesen können wir mit [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erzeugen. Mithilfe von CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und einer Änderung von {{cssxref("background-color")}} lässt er sich sichtbar machen und seine Farbe mit dem Inhalt und dem Wert von `aria-checked` abstimmen.

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

Verwenden Sie nicht die Kurzschreibweise {{cssxref("background")}}, da sie die Eigenschaft {{cssxref("background-clip")}} überschreiben würde, mit der wir den Radio-Button-Effekt erzeugt haben.

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt einem anderen Element eine neue Funktion zu geben und es durch Hinzufügen einer ARIA-Rolle, eines ARIA-Zustands oder einer ARIA-Eigenschaft zugänglich zu machen. Daher empfiehlt es sich, das native [HTML-Radio-Button](/de/docs/Web/HTML/Reference/Elements/input/radio)-Formularsteuerelement zu verwenden, statt die Funktionalität eines Radio-Buttons mit JavaScript und ARIA nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
