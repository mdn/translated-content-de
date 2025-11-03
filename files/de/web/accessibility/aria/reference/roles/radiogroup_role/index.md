---
title: "ARIA: radiogroup-Rolle"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die `radiogroup`-Rolle ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radiogruppen sind Sammlungen, die eine Menge verwandter [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, die nur einen Eintrag oder `radio` gleichzeitig als gewählt haben kann.

Bei der Verwendung des nativen HTML-Input-Radiobuttons, [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), werden die Radiobuttons gruppiert, wenn jedem der Input-Radiobuttons in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Gruppe von gleichnamigen Input-Radiobuttons erstellt wurde, deaktiviert das Auswählen eines Input-Radiobuttons in dieser Gruppe automatisch jeden derzeit gewählten Input-Radiobutton in derselben Gruppe. Auch wenn dies die Radiobuttons zusammen gruppiert, muss zum expliziten Ausweisen einer Radiobutton-Gruppe als `radiogroup` die ARIA-Rolle gesetzt werden.

Es wird empfohlen, Radiogruppen zu erstellen, indem gleichnamige HTML-Input-Radiobuttons verwendet werden. Wenn jedoch ARIA-Rollen und -Attribute anstelle von semantischen HTML-Formularsteuerungen verwendet werden müssen, können und sollten benutzerdefinierte `radio`-Buttons wie native HTML-Radio-Input-Buttons agieren.

Wenn nicht-semantische Elemente als Radiobuttons verwendet werden, müssen Sie sicherstellen, dass Ihre Nutzer nur einen Radiobutton aus der Gruppe gleichzeitig auswählen können. Wenn ein Element in der Gruppe gewählt ist und sein [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut auf `true` gesetzt ist, wird das zuvor gewählte Element deaktiviert, wobei sein `aria-checked`-Attribut `false` wird. Das `aria-checked`-Attribut wird bei den zugehörigen `radio`-Rollen und nicht bei der `radiogroup` selbst gesetzt.

Einige `radiogroup`-Implementierungen initialisieren die Gruppe mit allen Buttons im ungeprüften Zustand. Sobald ein `radio` in einer `radiogroup` geprüft ist, ist es im Allgemeinen nicht möglich, in einen vollständig ungeprüften Zustand zurückzukehren.

Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert wird, oder hat ein Label, das mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) angegeben wird. Falls Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, werden diese Elemente mit der `radiogroup`-Element mittels der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Rolle
  - : Eine Gruppe von auswählbaren Buttons in einer `radiogroup`, bei der nicht mehr als einer der Buttons gleichzeitig ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder hat ein Label, das mit `aria-label` angegeben wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Referenz auf Elemente, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Zeigt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular gesendet werden kann. Der erforderliche Zustand wird bei dem `radiogroup`-Element angegeben und nicht bei einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radiobuttons, bei denen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut direkt bei einem oder mehreren {{HTMLElement('input')}}-Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, wenn ein Fehler vorliegt. Diese Nachricht sollte verborgen sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die sich NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) befindet, müssen folgende Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen den Fokus in und aus der `radiogroup`. Wenn der Fokus in eine `radiogroup` verschoben wird, wird der Fokus auf den gewählten Button gesetzt, falls ein Radiobutton gewählt ist. Falls keiner der Radiobuttons gewählt ist, wird der Fokus auf den ersten Radiobutton in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Wählt den fokussierten Radiobutton, falls er noch nicht gewählt ist.
- <kbd>Rechter Pfeil</kbd> und <kbd>Abwärtspfeil</kbd>
  - : Bewegt den Fokus zum nächsten Radiobutton in der Gruppe, deaktiviert den zuvor fokussierten Button und wählt den neu fokussierten Button. Falls der Fokus auf dem letzten Button ist, wird der Fokus auf den ersten Button verschoben.
- <kbd>Linker Pfeil</kbd> und <kbd>Aufwärtspfeil</kbd>
  - : Bewegt den Fokus zum vorherigen Radiobutton in der Gruppe, deaktiviert den zuvor fokussierten Button und wählt den neu fokussierten Button. Falls der Fokus auf dem ersten Button ist, wird der Fokus auf den letzten Button verschoben.

Pfeiltasten werden verwendet, um zwischen den Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in einer Werkzeugleiste verschachtelt ist, müssen Nutzer in der Lage sein, zwischen allen Elementen der Werkzeugleiste, einschließlich der Radiobuttons, zu navigieren, ohne die Auswahl zu ändern, welcher Radiobutton geprüft ist. Beim Navigieren durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) mit Pfeiltasten ändert sich der Button, der geprüft ist, nicht. Vielmehr setzen in einer Werkzeugleiste die <kbd>Leertaste</kbd> und <kbd>Eingabetaste</kbd> den fokussierten `radio`-Button, falls er noch nicht geprüft ist, wobei <kbd>Tab</kbd> den Fokus in und aus der `toolbar` bewegt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroups` müssen die Benutzerinteraktion nachbilden, die ein Benutzer beim Eingeben in eine Gruppe gleichnamiger HTML-Radiobuttons hat. Tastaturereignisse für Tabulatoren, Leerzeichen und Pfeiltasten müssen erfasst werden. Klickevents sowohl auf den Radioelementen als auch auf ihren zugehörigen Labels müssen ebenfalls erfasst werden. Zusätzlich muss der [Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während das Entfernen des Fokus von einem konzentrierten Element im Allgemeinen dazu führt, dass man zum nächsten fokussierbaren Element in der DOM-Reihenfolge gelangt, bleibt man beim Verwenden der Pfeiltasten, um durch eine Gruppe von Radiobuttons zu navigieren, in der Gruppe, wobei der Fokus auf den ersten Radiobutton verschoben wird, wenn die <kbd>Rechter Pfeil</kbd> oder <kbd>Abwärtspfeil</kbd> losgelassen wird, wenn der Fokus auf dem letzten Radio in der Gruppe war, und zum letzten Radio, wenn der <kbd>Linker Pfeil</kbd> oder <kbd>Aufwärtspfeil</kbd> losgelassen wird, wenn der Fokus auf dem ersten Radio war. Das Verwalten eines sich bewegenden [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Möglichkeit, um Pfeiltastenevents zu verwalten.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um den geprüften Zustand von ausgewählten Radiobuttons zu stylen.

Verwenden Sie CSS {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen, um den visuellen Tastaturfokus und Hover zu gestalten. Der Fokus- und Hovereffekt sollte sowohl den Radiobutton als auch das Label umfassen, um die Wahrnehmung zu erleichtern, welche Option gewählt wird, und anzuzeigen, dass sowohl durch Klicken auf das Label als auch auf den Button der Radiobutton aktiviert wird.

## Beispiele

Das grundlegende Setup für eine `radiogroup` mit nicht-semantischen ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

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

Dies hätte mit semantischem HTML geschrieben werden können, das kein CSS oder JavaScript erfordert:

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

In diesem {{HTMLElement('fieldset')}}-Beispiel, während `role="radiogroup"` nicht notwendig ist, um diese Gruppierung explizit als `radiogroup` ankündigen zu lassen, fügen Sie die ARIA-Rolle hinzu.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('fieldset')}}-Element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} Radiobutton-Element
- [ARIA `radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
