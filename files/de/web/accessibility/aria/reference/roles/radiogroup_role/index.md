---
title: "ARIA: Rolle `radiogroup`"
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Rolle `radiogroup` ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radio-Gruppen sind Sammlungen, die eine Menge verwandter [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, die nur einen Eintrag oder `radio` zur gleichen Zeit überprüft haben kann.

Wenn Sie den nativen HTML Radio-Button verwenden, [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), werden die Radio-Buttons gruppiert, wenn jeder der Input-Radio-Buttons in der Gruppe denselben [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) erhält. Sobald eine Gruppe von gleichnamigen Input-Radio-Buttons erstellt ist, wird durch das Auswählen eines beliebigen Input-Radio-Buttons in dieser Gruppe automatisch ein derzeit ausgewählter Input-Radio-Button in derselben Gruppe deselektiert. Während dies die Radio-Buttons miteinander verbindet, sollte die Gruppierung der Radio-Buttons als `radiogroup` exponiert werden, indem die ARIA-Rolle explizit gesetzt wird.

Es wird empfohlen, Radio-Gruppen zu erstellen, indem gleichnamige HTML-Input-Radio-Buttons verwendet werden. Wenn Sie jedoch ARIA-Rollen und Attribute anstelle von semantischen HTML-Formularsteuerungen verwenden müssen, können und sollten benutzerdefinierte `radio`-Buttons wie native HTML-Radio-Input-Buttons fungieren.

Wenn nicht-semantische Elemente als Radio-Buttons verwendet werden, müssen Sie sicherstellen, dass Ihre Nutzer immer nur einen Radio-Button aus der Gruppe auswählen können. Wenn ein Element in der Gruppe überprüft wird, indem sein [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut auf `true` gesetzt wird, wird das zuvor markierte Element deselektiert, wobei sein `aria-checked`-Attribut `false` wird. Das `aria-checked`-Attribut wird auf die zugehörigen `radio`-Rollen gesetzt, nicht auf das `radiogroup` selbst.

Einige `radiogroup`-Implementierungen initialisieren den Satz mit allen Buttons im nicht geprüften Zustand. Sobald ein `radio` in einer `radiogroup` überprüft ist, ist es in der Regel nicht möglich, zum Zustand ohne Überprüfung zurückzukehren.

Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label referenziert durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder hat ein Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) spezifiziert. Wenn Elemente zusätzliche Informationen über die Radio-Gruppe bereitstellen, werden diese Elemente durch die `radiogroup`-Elemente mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
  - : Einer aus einer Gruppe von überprüfbaren Buttons in einer `radiogroup`, wo nicht mehr als einer der Buttons gleichzeitig überprüft werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label referenziert durch `aria-labelledby` oder hat ein Label mit `aria-label` spezifiziert.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Referenz zu Elementen, die zusätzliche Informationen über die `radiogroup` bereitstellen
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular gesendet werden kann. Der erforderliche Zustand wird auf dem `radiogroup`-Element angegeben und nicht auf einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radio-Buttons, bei denen das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut direkt auf einem oder mehreren Radio-{{HTMLElement('input')}}-Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` anbietet, wenn ein Fehler vorliegt. Diese Nachricht sollte versteckt sein, während sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) ist, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Verschieben den Fokus in die `radiogroup` und wieder heraus. Wenn der Fokus in eine `radiogroup` verschoben wird, wenn ein Radio-Button überprüft ist, wird der Fokus auf den überprüften Button gesetzt. Wenn keiner der Radio-Buttons überprüft ist, wird der Fokus auf den ersten Radio-Button in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Überprüft den fokussierten Radio-Button, wenn er nicht bereits überprüft ist.
- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Radio-Button in der Gruppe, hebt die Markierung des vorher fokussierten Buttons auf und markiert den neu fokussierten Button. Wenn der Fokus auf dem letzten Button ist, bewegt sich der Fokus zum ersten Button.
- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Radio-Button in der Gruppe, hebt die Markierung des vorher fokussierten Buttons auf und markiert den neu fokussierten Button. Wenn der Fokus auf dem ersten Button ist, bewegt sich der Fokus zum letzten Button.

Pfeiltasten werden verwendet, um zwischen Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in einer Werkzeugleiste verschachtelt ist, müssen die Benutzer in der Lage sein, zwischen allen Werkzeugleisten-Elementen, einschließlich der Radio-Buttons, zu navigieren, ohne zu ändern, welcher Radio-Button überprüft ist. Wenn also innerhalb einer `toolbar` durch eine `radiogroup` mit den Pfeiltasten navigiert wird, ändert sich der überprüfte Button nicht. Vielmehr überprüfen innerhalb einer `toolbar` die Tasten <kbd>Leertaste</kbd> und <kbd>Eingabetaste</kbd> den fokussierten `radio`-Button, wenn er nicht bereits überprüft ist, wobei <kbd>Tab</kbd> den Fokus in die und aus der `toolbar` verschiebt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup`-s müssen die Benutzerinteraktion eines Benutzers in eine Gruppe von gleichnamigen HTML-Radio-Buttons nachbilden. Tastaturereignisse für Tabs, Leertasten und Pfeiltasten müssen erfasst werden. Klickereignisse sowohl auf die Radio-Elemente als auch auf deren zugehörige Labels müssen ebenfalls erfasst werden. Zusätzlich muss [der Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während das Verschieben von einem fokussierten Element im Allgemeinen das nächste fokussierbare Element in der DOM-Reihenfolge bringt, hält Sie die Verwendung der Pfeiltasten, um durch eine Gruppe von Radio-Buttons zu navigieren, in der Gruppe, indem der Fokus auf den ersten Radio-Button gesetzt wird, wenn die Taste <kbd>Pfeil nach rechts</kbd> oder <kbd>Pfeil nach unten</kbd> losgelassen wird, wenn der Fokus auf dem letzten Radio in der Gruppe war, und indem zum letzten Radio gewechselt wird, wenn die Taste <kbd>Pfeil nach links</kbd> oder <kbd>Pfeil nach oben</kbd> losgelassen wird, wenn der Fokus auf dem ersten Radio war. Das Verwalten von umherwandernden [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Methode, um Pfeiltastenevents zu verwalten.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um den überprüften Zustand von überprüften Radio-Buttons zu stylen.

Verwenden Sie CSS-{{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen, um den visuellen Tastaturfokus und Hover zu stylen. Der Fokus- und Hover-Effekt sollte sowohl den Radio-Button als auch das Label umfassen, um es einfacher zu machen, wahrzunehmen, welche Option gewählt wird, und um anzuzeigen, dass das Klicken sowohl auf das Label als auch auf den Button den Radio-Button aktiviert.

## Beispiele

Die grundlegende Einrichtung für eine `radiogroup` unter Verwendung von nicht-semantischen ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

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

In diesem {{HTMLElement('fieldset')}}-Beispiel, während `role="radiogroup"` nicht erforderlich ist, um diese Gruppierung explizit als `radiogroup` anzukündigen, schließen Sie die ARIA-Rolle ein.

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
