---
title: "ARIA: Rolle radiogroup"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `radiogroup` ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radiogruppen sind Sammlungen, die eine Reihe von verwandten [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, die zu jedem Zeitpunkt nur einen Eintrag oder `radio` geprüft haben kann.

Beim Verwenden von nativen HTML-Input-Radio-Buttons, [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), werden die Radio-Buttons gruppiert, wenn jeder der Input-Radio-Buttons in der Gruppe den gleichen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) hat. Sobald eine Gruppe von gleichnamigen Input-Radio-Buttons erstellt wurde, wird durch Auswahl eines beliebigen Input-Radio-Buttons in dieser Gruppe automatisch jeder aktuell ausgewählte Input-Radio-Button in derselben Gruppe deselektiert. Während dies die Radioschaltflächen miteinander assoziieren wird, sollten Sie, um eine Gruppierung von Radiobuttons als `radiogroup` darzustellen, die ARIA-Rolle explizit festlegen.

Es wird empfohlen, Radiogruppen durch die Verwendung von gleichnamigen HTML-Input-Radio-Buttons zu erstellen, aber falls Sie ARIA-Rollen und Attribute anstelle von semantischen HTML-Formular-Steuerelementen verwenden müssen, sollten und können benutzerdefinierte `radio`-Buttons wie native HTML-Radio-Input-Buttons funktionieren.

Beim Verwenden von nicht-semantischen Elementen als Radiobuttons müssen Sie sicherstellen, dass Ihre Benutzer nur einen Radiobutton aus der Gruppe auswählen können. Wenn ein Element der Gruppe ausgewählt ist, muss dessen [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut auf `true` gesetzt werden, das vorher ausgewählte Element wird ungeprüft, und sein `aria-checked`-Attribut wird zu `false`. Das `aria-checked`-Attribut wird auf die zugehörigen `radio`-Rollen angewendet, nicht auf die `radiogroup` selbst.

Einige `radiogroup`-Implementierungen initialisieren die Gruppe mit allen Buttons im ungeprüften Zustand. Sobald ein `radio` in einer `radiogroup` geprüft ist, ist es in der Regel nicht möglich, in einen vollständig ungeprüften Zustand zurückzukehren.

Die `radiogroup` muss entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert wird, oder durch ein mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) spezifiziertes Label einen zugänglichen Namen haben. Wenn Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, werden diese Elemente mit der `radiogroup`-Element durch die [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Eigenschaft referenziert.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) Rolle
  - : Eine von einer Gruppe von prüfbaren Buttons in einer `radiogroup`, bei denen nicht mehr als einer der Buttons gleichzeitig geprüft sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Die `radiogroup` muss einen zugänglichen Namen entweder durch ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder durch ein mit `aria-label` spezifiziertes Label haben.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Referenz zu Elementen, die zusätzliche Informationen über die `radiogroup` bereitstellen
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular abgeschickt werden kann. Der erforderliche Zustand ist auf dem `radiogroup`-Element festgelegt, anstatt auf einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radio-Buttons, wo das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut direkt auf einem oder mehreren radio {{HTMLElement('input')}}-Elementen festgelegt ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls es einen Fehler gibt. Diese Nachricht sollte verborgen sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die sich NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Verschieben den Fokus in und aus der `radiogroup`. Wenn der Fokus auf eine `radiogroup` verschoben wird, wird der Fokus auf den geprüften Button gesetzt, falls ein Radiobutton geprüft ist. Wenn keiner der Radiobuttons geprüft ist, wird der Fokus auf den ersten Radiobutton in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Prüft den fokussierten Radiobutton, falls er nicht bereits geprüft ist.
- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Verschieben den Fokus auf den nächsten Radiobutton in der Gruppe, indem der zuvor fokussierte Button ungeprüft und der neu fokussierte Button geprüft wird. Falls der Fokus auf dem letzten Button ist, wird der Fokus auf den ersten Button verschoben.
- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Verschieben den Fokus auf den vorherigen Radiobutton in der Gruppe, indem der zuvor fokussierte Button ungeprüft und der neu fokussierte Button geprüft wird. Falls der Fokus auf dem ersten Button ist, wird der Fokus auf den letzten Button verschoben.

Pfeiltasten werden verwendet, um zwischen Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in einer Werkzeugleiste verschachtelt ist, müssen Benutzer in der Lage sein, zwischen allen Werkzeugleistenelementen, einschließlich der Radiobuttons, zu navigieren, ohne zu ändern, welcher Radiobutton geprüft ist. Wenn Sie also mit Pfeiltasten durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) navigieren, ändert sich der Button, der geprüft ist, nicht. Vielmehr prüfen in einer `toolbar` die Tasten <kbd>Leertaste</kbd> und <kbd>Enter</kbd> den fokussierten `radio`-Button, falls er nicht bereits geprüft ist, wobei <kbd>Tab</kbd> den Fokus in und aus der `toolbar` verschiebt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup`s müssen die Benutzerinteraktion eines Benutzers, der in eine Gruppe von gleichnamigen HTML-Radio-Buttons eintritt, nachahmen. Tastaturereignisse für Tab, Leertaste und Pfeiltasten müssen erfasst werden. Klickereignisse sowohl auf den Radioelementen als auch auf ihren zugehörigen Labels müssen ebenfalls erfasst werden. Zusätzlich muss [der Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während das generelle Verlassen eines fokussierten Elements Sie zum nächsten fokussierbaren Element in der DOM-Reihenfolge bringt, halten Sie sich beim Navigieren mit den Pfeiltasten durch eine Gruppe von Radiobuttons in der Gruppe auf und verschieben den Fokus auf den ersten Radiobutton, wenn die <kbd>Pfeil nach rechts</kbd> oder <kbd>Pfeil nach unten</kbd> Taste losgelassen wird, während der Fokus auf dem letzten Radio der Gruppe war, und verschieben Sie den Fokus auf den letzten Radio, wenn die <kbd>Pfeil nach links</kbd> oder <kbd>Pfeil nach oben</kbd> Taste losgelassen wird, wenn der Fokus auf dem ersten Radio war. Die Verwaltung von wanderndem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Methode, um Pfeiltastenereignisse zu verwalten.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um den geprüften Zustand von geprüften Radiobuttons zu stylen.

Verwenden Sie CSS {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen für das Styling des visuellen Tastaturfokus und des Hover-Effekts. Der Fokus- und Hover-Effekt sollte sowohl den Radiobutton als auch das Label umfassen, um es einfacher wahrzunehmen, welche Option gewählt wird und um anzuzeigen, dass das Klicken auf das Label oder den Button den Radiobutton aktiviert.

## Beispiele

Der grundlegende Aufbau für eine `radiogroup`, die nicht-semantische ARIA-Rollen anstelle von semantischem HTML verwendet, ist wie folgt:

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

Dies hätte unter Verwendung von semantischem HTML geschrieben werden können, welches kein CSS oder JavaScript erfordert:

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

In diesem {{HTMLElement('fieldset')}} Beispiel, während `role="radiogroup"` nicht notwendig ist, um diese Gruppierung explizit als `radiogroup` anzukündigen, fügen Sie die ARIA-Rolle hinzu.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('fieldset')}}-Element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} Radio-Button-Element
- [ARIA `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
