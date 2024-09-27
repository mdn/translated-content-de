---
title: "ARIA: radiogroup-Rolle"
slug: Web/Accessibility/ARIA/Roles/radiogroup_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `radiogroup`-Rolle ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radiogruppen sind Sammlungen, die eine Gruppe verwandter [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)-Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)-Liste, die nur einen Eintrag oder `radio` zur gleichen Zeit ausgewählt haben kann.

Bei der Verwendung von HTML-eigenen Eingabe-Radiobuttons, [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), werden die Radiobuttons gruppiert, wenn jeder Eingabe-Radiobutton in der Gruppe denselben [`name`](/de/docs/Web/HTML/Element/input#name) erhält. Sobald eine Gruppe von Eingabe-Radiobuttons mit demselben Namen erstellt ist, wird beim Auswählen eines beliebigen Eingabe-Radiobuttons in dieser Gruppe automatisch jeder derzeit ausgewählte Eingabe-Radiobutton in derselben Gruppe deselektiert. Während dies die Radiobuttons miteinander verbindet, setzt die explizite Definition der ARIA-Rolle die Radiobuttons als `radiogroup` zusammen.

Es wird empfohlen, Radiogruppen mit gleichnamigen HTML-Eingabe-Radiobuttons zu erstellen, aber wenn Sie ARIA-Rollen und Attribute anstelle von semantischen HTML-Formularsteuerungen verwenden müssen, können und sollten benutzerdefinierte `radio`-Buttons wie native HTML-Eingabe-Radiobuttons funktionieren.

Bei der Verwendung von nicht-semantischen Elementen als Radiobuttons müssen Sie sicherstellen, dass Ihre Benutzer nur einen Radiobutton aus der Gruppe zur gleichen Zeit auswählen können. Wenn ein Element in der Gruppe ausgewählt ist, indem das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut auf `true` gesetzt wird, wird das zuvor ausgewählte Element deselektiert, wobei sein `aria-checked`-Attribut auf `false` gesetzt wird. Das `aria-checked`-Attribut wird auf die zugehörigen `radio`-Rollen gesetzt, nicht auf die `radiogroup` selbst.

Einige `radiogroup`-Implementierungen initialisieren die Gruppe mit allen Buttons im nicht ausgewählten Zustand. Sobald ein `radio` in einer `radiogroup` ausgewählt ist, ist es in der Regel nicht möglich, zu einem Zustand zurückzukehren, in dem alle nicht ausgewählt sind.

Die `radiogroup` muss entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert wird, oder durch ein mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) angegebenes Label einen zugänglichen Namen haben. Wenn Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, werden diese Elemente vom `radiogroup`-Element mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Eigenschaft referenziert.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role) Rolle
  - : Eins von einer Gruppe auswählbarer Buttons in einer `radiogroup`, wobei nicht mehr als einer zur gleichen Zeit ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Die `radiogroup` muss entweder durch ein sichtbares Label von `aria-labelledby` referenziert oder durch ein Label mit `aria-label` spezifiziert einen zugänglichen Namen haben.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Referenz auf Elemente, die zusätzliche Informationen über die `radiogroup` bereitstellen
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
  - : Gibt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular abgeschickt werden kann. Der erforderliche Zustand wird auf dem `radiogroup`-Element angegeben und nicht auf einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radiobuttons, bei denen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut direkt auf einem oder mehreren Radio-{{HTMLElement('input')}}-Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls ein Fehler vorliegt. Diese Nachricht sollte verborgen werden, wenn sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die sich NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen den Fokus in und aus der `radiogroup`. Wenn der Fokus in eine `radiogroup` geht, wird, falls ein Radiobutton ausgewählt ist, der Fokus auf den ausgewählten Button gesetzt. Wenn keiner der Radiobuttons ausgewählt ist, wird der Fokus auf den ersten Radiobutton in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Wählt den fokussierten Radiobutton aus, wenn er nicht bereits ausgewählt ist.
- <kbd>Rechte Pfeiltaste</kbd> und <kbd>Nach unten</kbd>
  - : Bewegt den Fokus auf den nächsten Radiobutton in der Gruppe, deselektiert den zuvor fokussierten Button und selektiert den neu fokussierten Button. Wenn der Fokus auf dem letzten Button ist, bewegt sich der Fokus auf den ersten Button.
- <kbd>Linke Pfeiltaste</kbd> und <kbd>Nach oben</kbd>
  - : Bewegt den Fokus auf den vorherigen Radiobutton in der Gruppe, deselektiert den zuvor fokussierten Button und selektiert den neu fokussierten Button. Wenn der Fokus auf dem ersten Button ist, bewegt sich der Fokus auf den letzten Button.

Pfeiltasten werden verwendet, um zwischen den Elementen einer `toolbar` zu navigieren. Wenn eine `radiogroup` in einer `toolbar` verschachtelt ist, müssen Benutzer in der Lage sein, zwischen allen Elementen der `toolbar` zu navigieren, einschließlich der Radiobuttons, ohne zu ändern, welcher Radiobutton ausgewählt ist. Wenn Sie also mit den Pfeiltasten durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) navigieren, ändert sich der ausgewählte Button nicht. Vielmehr wählen die <kbd>Leertaste</kbd> und <kbd>Eingabetaste</kbd> die fokussierte `radio`-Schaltfläche aus, wenn sie nicht bereits ausgewählt ist, wobei <kbd>Tab</kbd> den Fokus in und aus der `toolbar` bewegt.

### Erforderliche JavaScript-Funktionen

Nutzerinteraktionen für `radiogroup`s müssen die Nutzerinteraktion mit einer Gruppe gleichnamiger HTML-Radiobuttons nachahmen. Tastaturereignisse für Tab, Leertaste und Pfeiltasten müssen erfasst werden. Klickereignisse sowohl auf den Radiobutonelementen als auch auf ihren zugehörigen Labels müssen ebenfalls erfasst werden. Zudem muss der [Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während im Allgemeinen das Verlassen eines fokussierten Elements einen zum nächsten fokussierbaren Element in der DOM-Reihenfolge bringt, bleibt bei der Navigierung durch eine Gruppe von Radiobuttons mit den Pfeiltasten der Fokus in der Gruppe, und der Fokus bewegt sich beim Loslassen der <kbd>Rechte Pfeiltaste</kbd> oder <kbd>Nach unten</kbd>, wenn der Fokus auf dem letzten Radio der Gruppe lag, auf den ersten Radiobutton, und beim Loslassen der <kbd>Linke Pfeiltaste</kbd> oder <kbd>Nach oben</kbd>, wenn der Fokus auf dem ersten Radio lag, auf den letzten Radiobutton. Die Verwaltung von Verschieben-`tabindex` ist eine Methode, um Pfeiltastenergeignisse zu steuern.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um den ausgewählten Zustand der ausgewählten Radiobuttons zu gestalten.

Verwenden Sie CSS-{{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen, um den visuellen Tastaturfokus und Hover zu gestalten. Der Fokus- und Hover-Effekt sollte sowohl den Radiobutton als auch das Label umfassen, um leichter erkennbar zu machen, welche Option ausgewählt wird und um anzuzeigen, dass das Klicken sowohl auf das Label als auch auf die Schaltfläche den Radiobutton aktiviert.

## Beispiele

Das grundlegende Setup für eine `radiogroup` unter Anwendung nicht-semantischer ARIA-Rollen anstelle von semantischem HTML sieht wie folgt aus:

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

Dies könnte unter Verwendung von semantischem HTML geschrieben werden, was weder CSS noch JavaScript erfordert:

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

In diesem {{HTMLElement('fieldset')}}-Beispiel ist, obwohl `role="radiogroup"` nicht erforderlich ist, um diese Gruppierung explizit als `radiogroup` anzukündigen, die Einbeziehung der ARIA-Rolle sinnvoll.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-{{HTMLElement('fieldset')}}-Element
- HTML-{{HTMLElement('input/radio', '&lt;input type="radio">')}}-Radiobutonelement
- [ARIA `radio`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
