---
title: "ARIA: Rolle radiogroup"
slug: Web/Accessibility/ARIA/Roles/radiogroup_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `radiogroup` ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radio-Gruppen sind Sammlungen, die eine Reihe von verwandten [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)-Liste, die nur einen einzigen Eintrag oder `radio` zur gleichen Zeit ausgewählt haben kann.

Wenn Sie den nativen HTML-Input-Radio-Button [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) verwenden, werden die Radio-Buttons gruppiert, indem jeder der Input-Radio-Buttons in der Gruppe denselben [`name`](/de/docs/Web/HTML/Element/input#name) hat. Sobald eine Gruppe von gleichnamigen Input-Radio-Buttons erstellt ist, wird durch die Auswahl eines Input-Radio-Buttons in dieser Gruppe automatisch jeder aktuell ausgewählte Input-Radio-Button in derselben Gruppe deselektiert. Obwohl dies die Radio-Buttons miteinander verbindet, müssen Sie die ARIA-Rolle explizit als `radiogroup` setzen, um eine Gruppierung von Radio-Buttons offenzulegen.

Es wird empfohlen, Radio-Gruppen zu erstellen, indem dieselben benannten HTML-Input-Radio-Buttons verwendet werden. Müssen Sie jedoch ARIA-Rollen und -Attribute anstelle von semantischen HTML-Formularsteuerelementen verwenden, können und sollten benutzerdefinierte `radio`-Buttons wie native HTML-Radio-Input-Buttons agieren.

Wenn Sie nicht-semantische Elemente als Radio-Buttons verwenden, müssen Sie sicherstellen, dass Ihre Benutzer jeweils nur einen Radio-Button aus der Gruppe auswählen können. Wenn ein Element in der Gruppe überprüft wird, indem sein [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut auf `true` gesetzt wird, wird das zuvor überprüfte Element nicht markiert und sein `aria-checked`-Attribut wird auf `false` gesetzt. Das `aria-checked`-Attribut wird auf den zugehörigen `radio`-Rollen gesetzt, nicht auf die `radiogroup` selbst.

Einige `radiogroup`-Implementierungen initialisieren das Set mit allen im nicht markierten Zustand befindlichen Buttons. Sobald ein `radio` in einer `radiogroup` markiert ist, ist es im Allgemeinen nicht möglich, zu einem nicht markierten Zustand zurückzukehren.

Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert wird, oder hat ein Label, das mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) angegeben ist. Wenn Elemente zusätzliche Informationen über die Radio-Gruppe bereitstellen, werden diese Elemente durch das `radiogroup`-Element mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role) Rolle
  - : Einer von einer Gruppe von auswählbaren Buttons in einer `radiogroup`, bei der nicht mehr als einer der Buttons gleichzeitig ausgewählt werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das über `aria-labelledby` referenziert wird, oder ein Label, das mit `aria-label` angegeben ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Referenz zu Elementen, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
  - : Gibt an, dass innerhalb der Gruppe ein `radio` mit `aria-checked="true"` gesetzt sein muss, bevor das Formular abgesendet werden kann. Der erforderliche Zustand wird auf dem `radiogroup`-Element angegeben, anstatt auf einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radio-Buttons, bei denen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut direkt auf einem oder mehreren Radio-{{HTMLElement('input')}}-Elementen gesetzt ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls ein Fehler vorliegt. Diese Nachricht sollte verborgen werden, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) ist, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen den Fokus in und aus der `radiogroup`. Wenn der Fokus in eine `radiogroup` verschoben wird, wird der überprüfte Button in den Fokus gesetzt, falls ein Radio-Button überprüft ist. Wenn keiner der Radio-Buttons überprüft ist, wird der Fokus auf den ersten Radio-Button in der Gruppe gesetzt.
- <kbd>Leerzeichen</kbd>
  - : Markiert den fokussierten Radio-Button, falls er nicht bereits markiert ist.
- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Radio-Button in der Gruppe, wobei der zuvor fokussierte Button nicht mehr markiert wird und der neu fokussierte Button markiert wird. Befindet sich der Fokus auf dem letzten Button, wird der Fokus auf den ersten Button verschoben.
- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Radio-Button in der Gruppe, wobei der zuvor fokussierte Button nicht mehr markiert wird und der neu fokussierte Button markiert wird. Befindet sich der Fokus auf dem ersten Button, wird der Fokus auf den letzten Button verschoben.

Pfeiltasten werden verwendet, um zwischen Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in einer Werkzeugleiste verschachtelt ist, müssen Benutzer in der Lage sein, zwischen allen Werkzeugleistenelementen, einschließlich der Radio-Buttons, zu navigieren, ohne zu ändern, welcher Radio-Button markiert ist. Daher ändert sich beim Navigieren durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) mit Pfeiltasten der markierte Button nicht. Wenn sich der Fokus in einer Werkzeugleiste befindet, markieren die Tasten <kbd>Leerzeichen</kbd> und <kbd>Enter</kbd> den fokussierten `radio`-Button, sofern er nicht bereits markiert ist, wobei <kbd>Tab</kbd> den Fokus in die und aus der `toolbar` bewegt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup`s müssen die Benutzerinteraktion eines Benutzers nachbilden, der eine Gruppe von gleichnamigen HTML-Radio-Buttons betritt. Tastaturereignisse für Tabulator-, Leerzeichen- und Pfeiltasten müssen erfasst werden. Klickereignisse sowohl auf die Radio-Elemente als auch auf ihre zugehörigen Labels müssen ebenfalls erfasst werden. Außerdem muss [der Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während das Verlassen eines fokussierten Elements Sie im Allgemeinen zum nächsten fokussierbaren Element in der DOM-Reihenfolge bringt, hält das Verwenden der Pfeiltasten zum Durchlaufen einer Gruppe von Radio-Buttons Sie in der Gruppe, indem der Fokus auf den ersten Radio-Button verschoben wird, wenn die <kbd>Pfeil nach rechts</kbd> oder <kbd>Pfeil nach unten</kbd> Taste losgelassen wird, wenn der Fokus auf dem letzten Radio in der Gruppe war, und zum letzten Radio verschoben wird, wenn die <kbd>Pfeil nach links</kbd> oder <kbd>Pfeil nach oben</kbd> Taste losgelassen wird, wenn der Fokus auf dem ersten Radio war. Das Verwalten eines wechselnden [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist eine Methode, um Pfeiltasteneingaben zu verwalten.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]`- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um den markierten Zustand von markierten Radio-Buttons zu stylen.

Verwenden Sie die CSS {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen, um die visuelle Tastaturfokussierung und das Hovern zu gestalten. Der Fokus- und der Hover-Effekt sollten sowohl den Radio-Button als auch das Label umfassen, um es einfacher zu machen, zu erkennen, welche Option ausgewählt wird, und anzuzeigen, dass das Klicken auf das Label oder den Button den Radio-Button aktiviert.

## Beispiele

Der grundlegende Aufbau für eine `radiogroup` mit nicht-semantischen ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

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

Dies könnte mit semantischem HTML geschrieben worden sein, das kein CSS oder JavaScript erfordert:

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

In diesem {{HTMLElement('fieldset')}}-Beispiel wird `role="radiogroup"` nicht benötigt, um diese Gruppierung explizit als `radiogroup` anzukündigen; jedoch kann die ARIA-Rolle hinzugefügt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('fieldset')}}-Element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} Radio-Button-Element
- [ARIA `radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
