---
title: "ARIA: Rolle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

## Beschreibung

Die Einträge in `menu` und `menubar` sind Menüelemente. Es gibt drei Arten von Menüelementen: [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und `menuitemradio`. Damit innerhalb einer Gruppe nur ein Menüelement ausgewählt werden kann, verwenden Sie die Rolle `menuitemradio` für alle Elemente der Gruppe.

Ein `menuitemradio` ist ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen jeweils nur eines ausgewählt sein kann.

Die drei Arten von Menüelementen dürfen nur in einem Element mit der Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sein oder diesem zugeordnet werden. Sie können optional innerhalb eines Gruppierungselements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt sein. Durch die Verschachtelung in einem `menu` oder einer `menubar` oder eine andere Form der Zuordnung (siehe [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) werden die Menüelemente als zusammengehörige Widgets erkannt.

Wenn alle Elemente eines Untermenüs zur selben Radio-Gruppe gehören, wird die Gruppe durch das Menüelement definiert; ein `group`-Element ist nicht erforderlich.

Menüelemente mit der Rolle `menuitemradio` müssen das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) enthalten, damit der Zustand des Radiobuttons für unterstützende Technologien erkennbar ist. Eine Ausnahme ist die Verwendung von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox): In diesem Fall sollte das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) verwendet werden.

Ähnlich wie das Attribut `checked` bei {{HTMLElement('input')}}-Elementen vom Typ `radio` gibt das Attribut `aria-checked` eines `menuitemradio` an, ob das Menüelement ausgewählt (`true`) oder nicht ausgewählt (`false`) ist. Anders als bei `menuitemcheckbox` gibt es keinen Wert `mixed`.

In einer Gruppe kann jeweils nur ein `menuitemradio` ausgewählt sein. Wird ein Element der Gruppe ausgewählt, wird sein Attribut `aria-checked` auf `true` gesetzt. Beim zuvor ausgewählten `menuitemradio`-Element derselben Gruppe wird der Wert von `aria-checked`, falls vorhanden, auf `false` gesetzt.

Wenn Sie mehrere Elemente einer Gruppe gleichzeitig auswählen oder ein Element unabhängig auswählen und die Auswahl wieder aufheben möchten, sollten Sie `menuitemcheckbox` verwenden.

Wenn ein `menu` oder eine `menubar` mehr als eine Gruppe von `menuitemradio`-Elementen enthält oder wenn ein `menu` neben einer Gruppe von `menuitemradio`-Elementen auch andere, nicht zugehörige `menuitem`- und/oder `menuitemcheckbox`-Elemente enthält, fassen Sie jede Gruppe zusammengehöriger `menuitemradio`-Elemente in einem `group`-Element zusammen. Alternativ können Sie die Gruppe mit einem `separator`-Element von den anderen Menüelementen abgrenzen (oder mit einem HTML-Element mit einer entsprechenden Rolle, etwa einer Gruppierung durch {{HTMLElement('fieldset')}} oder einem thematischen Trenner durch {{HTMLElement('hr')}}).

Ein zugänglicher Name ist erforderlich. Idealerweise stammt er bei Verwendung von `<input type="radio">` aus einem zugehörigen {{htmlelement('label')}}-Element oder aus sichtbarem Inhalt eines Nachfahrenelements. Falls die Beschriftung oder der Inhalt der Nachfahrenelemente nicht ausreicht und stattdessen vorzugsweise [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf Inhalt außerhalb der Nachfahrenelemente verweist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet wird, beachten Sie: Diese beiden ARIA-Eigenschaften verbergen andere Inhalte von Nachfahrenelementen vor unterstützenden Technologien.

Wenn nicht alle Elemente der Gruppe im DOM vorhanden sind, geben Sie die Eigenschaften [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) und [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) an. Legen Sie deren Werte bei einem `menuitemradio` anhand der Gesamtzahl der Elemente im Menü fest, ohne Trennelemente mitzuzählen.

Das `menuitemradio`-Element kann Textinhalt enthalten, aber weder interaktiven Inhalt als Nachfahren noch Nachfahren mit einem angegebenen `tabindex`-Attribut.

### Alle Nachfahrenelemente sind rein präsentational

Einige Arten von Benutzeroberflächenkomponenten können in einer Barrierefreiheits-API einer Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb eines `menuitemradio` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahrenelementen eines `menuitemradio`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

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

Aus Sicht einer Person, die unterstützende Technologien verwendet, existiert die Überschrift nicht, da die vorangehenden Codebeispiele dem Folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} entsprechen:

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget, das eine Liste häufiger Aktionen oder Funktionen anbietet, die Benutzer ausführen können.
- Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Ähnlich wie `menu`, jedoch für eine dauerhaft sichtbare Gruppe häufig verwendeter Befehle, die üblicherweise horizontal dargestellt wird.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Container für eine Gruppe von `menuitem`-Elementen, einschließlich `menuitemradio`-Elementen innerhalb eines `menu` oder einer `menubar`.
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (erforderlich)
  - : Gibt mit dem Wert `true` oder `false` den aktuellen Auswahlzustand des `menuitemradio` an.

### Tastaturinteraktionen

Wenn ein `menu` geöffnet wird oder eine `menubar` den Fokus erhält, wird der Tastaturfokus auf das erste Element gesetzt. Alle Elemente in beiden sind fokussierbar, einschließlich aller `menuitemradio`-Elemente.

Befindet sich das `menuitemradio` in einem Untermenü einer `menubar` oder in einem Menü, das über eine Menüschaltfläche geöffnet wurde, müssen die folgenden Tastaturinteraktionen implementiert werden:

- <kbd>Enter</kbd>
  - : Ist das fokussierte `menuitemradio` noch nicht ausgewählt, wird es ausgewählt und die Auswahl eines anderen ausgewählten `menuitemradio`-Elements derselben Gruppe aufgehoben. Außerdem wird das Menü geschlossen.
- <kbd>Space</kbd>
  - : Ist das fokussierte `menuitemradio` noch nicht ausgewählt, wird es ausgewählt und die Auswahl eines anderen ausgewählten `menuitemradio`-Elements derselben Gruppe aufgehoben, ohne das Menü zu schließen.
- <kbd>Escape</kbd>
  - : Schließt das Menü. In einer `menubar` wird der Fokus auf das übergeordnete Menüelement gesetzt.
- <kbd>Right Arrow</kbd>
  - : Schließt das Untermenü. In einer `menubar` wird der Fokus auf das nächste Element gesetzt und dessen Untermenü, falls vorhanden, geöffnet.
- <kbd>Left Arrow</kbd>
  - : Schließt das Menü. In einer `menubar` wird der Fokus auf das vorherige Element gesetzt und dessen Untermenü, falls vorhanden, geöffnet.
- <kbd>Down Arrow</kbd>
  - : Setzt den Fokus auf das nächste Element im Menü. Befindet sich der Fokus auf dem letzten Element, wird er auf das erste Element gesetzt.
- <kbd>Up Arrow</kbd>
  - : Setzt den Fokus auf das vorherige Element im Menü. Befindet sich der Fokus auf dem ersten Element, wird er auf das letzte Element gesetzt.
- <kbd>Home</kbd>
  - : Setzt den Fokus auf das erste Element im Menü.
- <kbd>End</kbd>
  - : Setzt den Fokus auf das letzte Element im Menü.
- <kbd>Character</kbd>
  - : Setzt den Fokus auf das nächste Element, dessen Name mit dem eingegebenen Zeichen beginnt. Gibt es kein solches Element, bleibt der Fokus unverändert.

### Erforderliches JavaScript

#### Erforderliche Event-Handler

- `onclick`
  - : Verarbeitet Mausklicks sowohl auf den Radiobutton als auch auf seine zugehörige Beschriftung. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radiobuttons geändert, sodass er für sehende Benutzer als ausgewählt oder nicht ausgewählt erkennbar ist.
- `onKeyDown`
  - : Verarbeitet das Drücken der Taste <kbd>Space</kbd>. Dabei werden der Wert des Attributs `aria-checked` und das Erscheinungsbild des Radiobuttons geändert, sodass er für sehende Benutzer als ausgewählt oder nicht ausgewählt erkennbar ist. Verarbeitet außerdem alle oben im Abschnitt zur Tastaturnavigation aufgeführten Tasten.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt ein Element zweckzuentfremden und es durch eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft zugänglich zu machen. Daher empfiehlt es sich, das native [HTML-Formularsteuerelement für Radiobuttons](/de/docs/Web/HTML/Reference/Elements/input/radio) zu verwenden, anstatt die Funktion eines Radiobuttons mit JavaScript und ARIA nachzubilden.

## Beispiele

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

Durch [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist das `menuitemradio` fokussierbar, gehört aber nicht zur Tabulatorreihenfolge der Seite. Mit `aria-checked="true"` würden wir angeben, dass das `menuitemradio` ausgewählt ist, und den ausgewählten Zustand mithilfe des Attributselektors `[role='menuitemradio'][aria-checked='true']` auch optisch entsprechend gestalten. Das vorhandene `aria-checked="false"` signalisiert unterstützenden Technologien dagegen, dass das `menuitemradio` auswählbar, derzeit aber nicht ausgewählt ist. Der zugängliche Name „purple“ stammt aus dem Inhalt.

Der ausgewählte Zustand wird optisch als ausgewählter Radiobutton dargestellt. Diesen können wir mit [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) erstellen. Mithilfe von CSS-[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) und durch Ändern von {{cssxref("background-color")}} stimmen wir seine Sichtbarkeit und Farbe anhand des Werts von `aria-checked` auf den Inhalt ab.

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

Verwenden Sie nicht die Kurzschreibweise {{cssxref("background")}}, da sie die Eigenschaft {{cssxref("background-clip")}} überschreiben würde, die wir für den Radiobutton-Effekt verwendet haben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
