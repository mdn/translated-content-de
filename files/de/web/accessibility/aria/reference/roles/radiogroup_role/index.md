---
title: "ARIA: Rolle radiogroup"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die Rolle `radiogroup` ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radio-Gruppen sind Sammlungen, die eine Menge von verwandten [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, die jeweils nur einen Eintrag oder `radio` als ausgewählt haben kann.

Wenn Sie das native HTML-`<input type="radio">` verwenden, werden die Radio-Buttons gruppiert, indem jedem Input-Radio-Button in der Gruppe dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Gruppe von gleichnamigen Eingabe-Radio-Buttons erstellt wurde, führt die Auswahl eines beliebigen Eingabe-Radio-Buttons in dieser Gruppe automatisch zur Deselektion eines derzeit ausgewählten Eingabe-Radio-Buttons in derselben Gruppe. Um die Radio-Buttons explizit als `radiogroup` auszuweisen, setzen Sie die ARIA-Rolle entsprechend.

Es wird empfohlen, Radio-Gruppen durch die Verwendung gleichnamiger HTML-Eingabe-Radio-Buttons zu erstellen. Falls Sie jedoch ARIA-Rollen und Attribute anstelle semantischer HTML-Formularsteuerelemente verwenden müssen, sollten benutzerdefinierte `radio`-Buttons sich wie native HTML-Radio-Eingabeschaltflächen verhalten.

Wenn Sie nicht-semantische Elemente als Radio-Buttons verwenden, müssen Sie sicherstellen, dass Ihre Benutzer jeweils nur einen Radio-Button aus der Gruppe auswählen können. Wenn ein Element in der Gruppe ausgewählt ist, indem dessen [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut auf `true` gesetzt wird, wird das zuvor ausgewählte Element de-selected und sein `aria-checked`-Attribut wird zu `false`. Das `aria-checked`-Attribut wird bei den zugehörigen `radio`-Rollen gesetzt, nicht bei der `radiogroup` selbst.

Einige Implementierungen von `radiogroup` initialisieren die Gruppe mit allen Schaltflächen im nicht ausgewählten Zustand. Sobald ein `radio` in einer `radiogroup` ausgewählt ist, ist es in der Regel nicht mehr möglich, in den Zustand "alle nicht ausgewählt" zurückzukehren.

Die `radiogroup` muss entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert wird, oder durch ein mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) spezifiziertes Label einen zugänglichen Namen haben. Wenn Elemente zusätzliche Informationen über die Radio-Gruppe bereitstellen, werden diese Elemente durch das `radiogroup`-Element mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Rolle [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
  - : Teil einer Gruppe von auswählbaren Schaltflächen in einer `radiogroup`, wobei nicht mehr als eine der Schaltflächen gleichzeitig ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Die `radiogroup` muss entweder durch ein sichtbares Label referenziert durch `aria-labelledby` oder durch ein mit `aria-label` spezifiziertes Label einen zugänglichen Namen haben.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verweis auf Elemente, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular abgeschickt werden kann. Der erforderliche Zustand wird am `radiogroup`-Element angegeben und nicht an einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radio-Buttons, bei denen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut direkt auf einem oder mehreren Radio-{{HTMLElement('input')}}-Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls ein Fehler vorliegt. Diese Meldung sollte ausgeblendet werden, wenn sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) ist, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegt den Fokus in die und aus der `radiogroup` heraus. Wenn sich der Fokus in eine `radiogroup` bewegt, wird, falls ein Radio-Button aktiviert ist, der Fokus auf die aktivierte Schaltfläche gesetzt. Falls keiner der Radio-Buttons aktiviert ist, wird der Fokus auf die erste Radio-Schaltfläche in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Aktiviert den fokussierten Radio-Button, falls dieser noch nicht aktiviert ist.
- <kbd>Rechte Pfeiltaste</kbd> und <kbd>Untere Pfeiltaste</kbd>
  - : Bewegt den Fokus zur nächsten Radio-Schaltfläche in der Gruppe, deaktiviert die zuvor fokussierte Schaltfläche und aktiviert die neu fokussierte Schaltfläche. Befindet sich der Fokus auf der letzten Schaltfläche, bewegt sich der Fokus zur ersten Schaltfläche.
- <kbd>Linke Pfeiltaste</kbd> und <kbd>Obere Pfeiltaste</kbd>
  - : Bewegt den Fokus zur vorherigen Radio-Schaltfläche in der Gruppe, deaktiviert die zuvor fokussierte Schaltfläche und aktiviert die neu fokussierte Schaltfläche. Befindet sich der Fokus auf der ersten Schaltfläche, bewegt sich der Fokus zur letzten Schaltfläche.

Pfeiltasten werden zum Navigieren zwischen Elementen einer Toolbar verwendet. Wenn eine `radiogroup` innerhalb einer Toolbar eingebettet ist, müssen Benutzer in der Lage sein, zwischen allen Toolbar-Elementen zu navigieren, einschließlich der Radio-Schaltflächen, ohne zu ändern, welcher Radio-Button ausgewählt wurde. Beim Navigieren durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) mit Pfeiltasten ändert sich der ausgewählte Button nicht. Vielmehr aktivieren bei der Verwendung innerhalb einer `toolbar` die Tasten <kbd>Leertaste</kbd> und <kbd>Enter</kbd> den fokussierten `radio`-Button, falls dieser nicht bereits aktiviert ist, wobei <kbd>Tab</kbd> den Fokus in die und aus der `toolbar` heraus verschiebt.

### Notwendige JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup`s müssen die Interaktionen eines Benutzers mit einer Gruppe von gleichnamigen HTML-Radio-Buttons nachbilden. Tastaturereignisse für Tab, Leertaste und Pfeiltasten müssen erfasst werden. Klick-Ereignisse sowohl auf den Radio-Elementen als auch auf ihren zugehörigen Labels müssen ebenfalls erfasst werden. Zusätzlich muss [der Fokus verwaltet werden](https://primer.style/accessibility/design-guidance/focus-management/).

Obwohl man im Allgemeinen durch das Verlassen eines fokussierten Elements zum nächsten fokussierbaren Element in der DOM-Reihenfolge gelangt, bleibt man bei der Verwendung der Pfeiltasten, um durch eine Gruppe von Radio-Schaltflächen zu navigieren, in der Gruppe, und bewegt den Fokus zur ersten Radio-Schaltfläche, wenn die <kbd>Rechte Pfeiltaste</kbd> oder <kbd>Untere Pfeiltaste</kbd> losgelassen wird, während der Fokus auf der letzten Radio-Schaltfläche in der Gruppe war, und bewegt sich zur letzten Radio-Schaltfläche, wenn die <kbd>Linke Pfeiltaste</kbd> oder <kbd>Obere Pfeiltaste</kbd> losgelassen wird, wenn der Fokus auf der ersten Radio-Schaltfläche war. Das Verwalten eines beweglichen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Methode zur Verwaltung von Pfeil-Tasten-Ereignissen.

### Notwendige CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um den aktivierten Zustand von aktivierten Radio-Buttons zu gestalten.

Verwenden Sie CSS-{{CSSXRef(':hover')}}- und {{CSSXRef(':focus')}}-Pseudoklassen zur Gestaltung der visuellen Tastatur-Fokussierung und des Hover-Effekts. Der Fokus- und Hover-Effekt sollte sowohl den Radio-Button als auch das Label einbeziehen, um es leichter erkennbar zu machen, welche Option gewählt wird und um anzuzeigen, dass das Klicken entweder auf das Label oder den Button den Radio-Button aktiviert.

## Beispiele

Die grundlegende Einrichtung für eine `radiogroup` unter Verwendung nicht-semantischer ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

```html
<div role="radiogroup" aria-labelledby="question">
  <div id="question">Which is the best color?</div>
  <div id="radioGroup">
    <p>
      <span
        id="colorOption_0"
        tabindex="0"
        role="radio"
        aria-checked="false"
        aria-labelledby="purple"></span>
      <span id="purple">Purple</span>
    </p>
    <p>
      <span
        id="colorOption_1"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="aubergine"></span>
      <span id="aubergine">Aubergine</span>
    </p>
    <p>
      <span
        id="colorOption_2"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="magenta"></span>
      <span id="magenta">Magenta</span>
    </p>
    <p>
      <span
        id="colorOption_3"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="all"></span>
      <span id="all">All of the above</span>
    </p>
  </div>
</div>
```

Dies könnte mit semantischem HTML geschrieben worden sein, das keine CSS oder JavaScript erfordert:

```html
<fieldset>
  <legend>Which is the best color?</legend>
  <p>
    <input name="colorOption" type="radio" id="purple" />
    <label for="purple">Purple</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="aubergine" />
    <label for="aubergine">Aubergine</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="magenta" />
    <label for="magenta">Magenta</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="all" />
    <label for="all">All of the above</label>
  </p>
</fieldset>
```

In diesem {{HTMLElement('fieldset')}}-Beispiel ist `role="radiogroup"` zwar nicht notwendig, um diese Gruppierung ausdrücklich als `radiogroup` anzukündigen, sollte die ARIA-Rolle eingeschlossen werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-{{HTMLElement('fieldset')}}-Element
- HTML-{{HTMLElement('input/radio', '&lt;input type="radio">')}}-Radio-Button-Element
- [ARIA-`radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
