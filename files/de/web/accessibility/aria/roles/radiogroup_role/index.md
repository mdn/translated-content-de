---
title: "ARIA: radiogroup Rolle"
slug: Web/Accessibility/ARIA/Roles/radiogroup_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `radiogroup`-Rolle ist eine Gruppe von `radio`-Buttons.

## Beschreibung

Radio-Gruppen sind Sammlungen, die eine Reihe von verwandten [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role) Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)-Liste, bei der nur ein Eintrag oder `radio` gleichzeitig ausgewählt sein kann.

Bei der Verwendung des nativen HTML-Input-Radio-Buttons, [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), werden die Radio-Buttons gruppiert, indem jedem Radio-Button in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Gruppe von gleichnamigen Input-Radio-Buttons eingerichtet ist, wird bei der Auswahl eines Radio-Buttons in dieser Gruppe automatisch ein aktuell ausgewählter Radio-Button in derselben Gruppe abgewählt. Während dies die Radio-Buttons miteinander verbindet, stellen Sie sicher, dass Sie eine Gruppierung von Radio-Buttons als `radiogroup` explizit durch Setzen der ARIA-Rolle darstellen.

Es wird empfohlen, Radio-Gruppen mithilfe gleichnamiger HTML-Input-Radio-Buttons zu erstellen, jedoch können und sollten benutzerdefinierte `radio`-Buttons, wenn Sie statt semantischer HTML-Formularelemente ARIA-Rollen und Attribute verwenden müssen, wie native HTML-Radio-Input-Buttons funktionieren.

Wenn Sie nicht-semantische Elemente als Radio-Buttons verwenden, müssen Sie sicherstellen, dass Ihre Benutzer immer nur einen Radio-Button aus der Gruppe auswählen können. Wenn ein Element in der Gruppe ausgewählt ist, wobei dessen [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut auf `true` gesetzt ist, wird das zuvor ausgewählte Element abgewählt, wobei sein `aria-checked`-Attribut auf `false` gesetzt wird. Das `aria-checked`-Attribut wird auf die zugehörigen `radio`-Rollen gesetzt, nicht auf die `radiogroup` selbst.

Einige `radiogroup`-Implementierungen initialisieren den Satz mit allen Schaltflächen im nicht-ausgewählten Zustand. Sobald ein `radio` in einer `radiogroup` ausgewählt wird, ist es im Allgemeinen nicht möglich, zu einem vollständig abgewählten Zustand zurückzukehren.

Die `radiogroup` muss entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert wird, oder durch ein Label, das mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) angegeben ist, einen zugänglichen Namen haben. Wenn Elemente zusätzliche Informationen zur Radiogruppe bieten, werden diese Elemente durch das `radiogroup`-Element mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role) Rolle
  - : Eine von einer Gruppe von auswählbaren Schaltflächen in einer `radiogroup`, bei der nicht mehr als eine der Schaltflächen gleichzeitig ausgewählt werden kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Die `radiogroup` muss entweder durch ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder durch ein Label, das mit `aria-label` angegeben ist, einen zugänglichen Namen haben.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verweis auf Elemente, die zusätzliche Informationen zur `radiogroup` liefern
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
  - : Gibt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt haben muss, bevor das Formular gesendet werden kann. Der erforderliche Zustand wird auf dem `radiogroup`-Element angegeben, nicht auf einem der `radio`-Elemente, im Gegensatz zur Verwendung von HTML-Radio-Buttons, bei denen das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut direkt auf einem oder mehreren Radio {{HTMLElement('input')}}-Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls ein Fehler vorliegt. Diese Nachricht sollte verborgen sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Buttons in einer `radiogroup`, die NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) ist, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Umschalt + Tab</kbd>
  - : Verschiebt den Fokus in die und aus der `radiogroup`. Wenn der Fokus in eine `radiogroup` verschoben wird, wird der Fokus auf den ausgewählten Button gesetzt, wenn ein Radio-Button ausgewählt ist. Wenn keiner der Radio-Buttons ausgewählt ist, wird der Fokus auf den ersten Radio-Button in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Wählt den fokussierten Radio-Button aus, wenn er nicht bereits ausgewählt ist.
- <kbd>Pfeil rechts</kbd> und <kbd>Pfeil unten</kbd>
  - : Verschiebt den Fokus auf den nächsten Radio-Button in der Gruppe, hebt die Auswahl des zuvor fokussierten Buttons auf und wählt den neu fokussierten Button aus. Wenn der Fokus auf dem letzten Button ist, wird der Fokus auf den ersten Button verschoben.
- <kbd>Pfeil links</kbd> und <kbd>Pfeil oben</kbd>
  - : Verschiebt den Fokus auf den vorherigen Radio-Button in der Gruppe, hebt die Auswahl des zuvor fokussierten Buttons auf und wählt den neu fokussierten Button aus. Wenn der Fokus auf dem ersten Button ist, wird der Fokus auf den letzten Button verschoben.

Pfeiltasten werden verwendet, um zwischen Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in einer Werkzeugleiste verschachtelt ist, müssen Benutzer in der Lage sein, zwischen allen Werkzeugleistenelementen, einschließlich der Radio-Buttons, zu navigieren, ohne die Auswahl des Radio-Buttons zu verändern. Wenn Sie also mit Pfeiltasten durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role) navigieren, ändert sich die Auswahl der Schaltfläche nicht. Vielmehr wählen innerhalb einer `toolbar` die Tasten <kbd>Leertaste</kbd> und <kbd>Eingabetaste</kbd> den fokussierten `radio`-Button aus, wenn er nicht bereits ausgewählt ist, wobei <kbd>Tab</kbd> den Fokus in die und aus der `toolbar` verschiebt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup`s müssen die Benutzerinteraktion mit einer Gruppe von gleichnamigen HTML-Radio-Buttons replizieren. Tastaturereignisse für Tabs, Leertaste und Pfeiltasten müssen erfasst werden. Klickereignisse sowohl auf den Radio-Elementen als auch auf ihren zugehörigen Labels müssen ebenfalls erfasst werden. Zusätzlich muss der [Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Obwohl das Verschieben von einem fokussierten Element im Allgemeinen das nächste fokussierbare Element in der DOM-Reihenfolge erreicht, bleibt bei der Verwendung der Pfeiltasten zur Navigation durch eine Gruppe von Radio-Buttons der Fokus in der Gruppe, wobei der Fokus auf den ersten Radio-Button verschoben wird, wenn die <kbd>Pfeil rechts</kbd>- oder <kbd>Pfeil unten</kbd>-Taste losgelassen wird, wenn der Fokus auf dem letzten Radio in der Gruppe lag, und sich auf das letzte Radio verschiebt, wenn die <kbd>Pfeil links</kbd>- oder <kbd>Pfeil oben</kbd>-Taste losgelassen wird, wenn der Fokus auf dem ersten Radio war. Das Verwalten des wandernden [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist eine Methode zur Verwaltung von Pfeiltastenereignissen.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um den ausgewählten Zustand der ausgewählten Radio-Buttons zu gestalten.

Verwenden Sie CSS {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen, um die visuelle Tastaturfokussierung und das Hover zu gestalten. Der Fokussierungs- und Hover-Effekt sollte sowohl den Radio-Button als auch das Label umfassen, um es einfacher zu machen zu erkennen, welche Option ausgewählt wird und um anzuzeigen, dass das Klicken auf das Label oder den Button den Radio-Button aktiviert.

## Beispiele

Die grundlegende Einrichtung einer `radiogroup` mit nicht-semantischen ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

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

In diesem {{HTMLElement('fieldset')}}-Beispiel, während `role="radiogroup"` nicht notwendig ist, um diese Gruppierung explizit als `radiogroup` angezeigt zu bekommen, schließen Sie die ARIA-Rolle ein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('fieldset')}}-Element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}}-Radio-Button-Element
- [ARIA `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
