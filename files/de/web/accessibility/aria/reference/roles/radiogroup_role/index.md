---
title: "ARIA: radiogroup Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `radiogroup` Rolle ist eine Gruppe von `radio` Schaltflächen.

## Beschreibung

Radiogruppen sind Sammlungen, die eine Reihe verwandter [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) Optionen beschreiben. Eine `radiogroup` ist eine Art von [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role) Liste, die nur einen Eintrag oder `radio` zeitgleich aktiviert haben kann.

Beim Verwenden des nativen HTML Eingabe-Radio-Buttons, [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), werden die Radiobuttons gruppiert, wenn jedem der Eingabe-Radioknöpfe in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Gruppe von gleichnamigen Eingabe-Radioknöpfen erstellt ist, deaktiviert das Auswählen eines beliebigen Radioknopfes in dieser Gruppe automatisch jeden momentan ausgewählten Radioknopf in derselben Gruppe. Während dies die Radioknöpfe miteinander verknüpft, setzen Sie zur expliziten Darstellung einer Gruppe von Radioknöpfen die ARIA-Rolle als `radiogroup`.

Es wird empfohlen, Radiogruppen durch die Verwendung gleichnamiger HTML-Eingabe-Radioknöpfe zu erstellen, aber falls Sie ARIA-Rollen und Attribute anstelle von semantischen HTML-Formularsteuerelementen verwenden müssen, sollten benutzerdefinierte `radio` Schaltflächen wie native HTML-Radioeingabeknöpfe funktionieren.

Wenn unspezifische Elemente als Radioknöpfe verwendet werden, müssen Sie sicherstellen, dass Ihre Benutzer nur einen Radioknopf aus der Gruppe zur gleichen Zeit auswählen können. Wenn ein Element in der Gruppe aktiviert ist, indem sein [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut auf `true` gesetzt ist, wird das zuvor aktivierte Element deaktiviert und sein `aria-checked` Attribut wird `false`. Das `aria-checked` Attribut wird auf den zugehörigen `radio` Rollen gesetzt, nicht auf die `radiogroup` selbst.

Einige `radiogroup` Implementierungen initialisieren die Einstellung mit allen Schaltflächen im deaktivierten Zustand. Sobald ein `radio` in einer `radiogroup` aktiviert ist, ist es im Allgemeinen nicht möglich, zu einem vollständig deaktivierten Zustand zurückzukehren.

Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert wird, oder mit einem Label, das mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) angegeben ist. Wenn Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, werden diese Elemente vom `radiogroup` Element mit der [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Eigenschaft referenziert.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) Rolle
  - : Eine von einer Gruppe von auswählbaren Schaltflächen in einer `radiogroup`, wobei nie mehr als eine der Schaltflächen auf einmal ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Die `radiogroup` muss einen zugänglichen Namen haben, entweder durch ein sichtbares Label, das durch `aria-labelledby` referenziert wird, oder mit einem Label, das mit `aria-label` angegeben ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Referenz zu Elementen, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Zeigt an, dass ein `radio` innerhalb der Gruppe `aria-checked="true"` haben muss, bevor das Formular übermittelt werden kann. Der erforderliche Status wird auf dem `radiogroup` Element festgelegt, anstatt auf einem der `radio` Elemente, anders als bei Verwendung von HTML-Radioknöpfen, wo das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut direkt auf einem oder mehreren Radio {{HTMLElement('input')}} Elementen gesetzt wird.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Identifiziert das Element, das eine Fehlermeldung für die `radiogroup` bereitstellt, falls ein Fehler vorliegt. Diese Meldung sollte versteckt sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio` Buttons in einer `radiogroup`, die NICHT in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) ist, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegt den Fokus in und aus der `radiogroup`. Wenn der Fokus in eine `radiogroup` bewegt wird, wird der Fokus auf die aktivierte Schaltfläche gesetzt, wenn eine Radioknopf aktiviert ist. Wenn keiner der Radioknöpfe aktiviert ist, wird der Fokus auf den ersten Radioknopf in der Gruppe gesetzt.
- <kbd>Leertaste</kbd>
  - : Aktiviert den fokussierten Radioknopf, wenn er nicht bereits aktiviert ist.
- <kbd>Rechte Pfeiltaste</kbd> und <kbd>Nach unten Pfeiltaste</kbd>
  - : Bewegt den Fokus zur nächsten Radiotaste in der Gruppe und deaktiviert die zuvor fokussierte Schaltfläche, sowie aktiviert die neu fokussierte Schaltfläche. Wenn der Fokus auf die letzte Schaltfläche gesetzt ist, wird der Fokus auf die erste Schaltfläche bewegt.
- <kbd>Linke Pfeiltaste</kbd> und <kbd>Nach oben Pfeiltaste</kbd>
  - : Bewegt den Fokus zur vorherigen Radiotaste in der Gruppe und deaktiviert die zuvor fokussierte Schaltfläche, sowie aktiviert die neu fokussierte Schaltfläche. Wenn der Fokus auf die erste Schaltfläche gesetzt ist, wird der Fokus auf die letzte Schaltfläche bewegt.

Pfeiltasten werden verwendet, um zwischen den Elementen einer Werkzeugleiste zu navigieren. Wenn eine `radiogroup` in eine Werkzeugleiste verschachtelt ist, müssen Benutzer in der Lage sein, zwischen allen Werkzeugleisten-Elementen, einschließlich der Radioknöpfe zu navigieren, ohne zu ändern, welcher Radioknopf ausgewählt ist. Wenn Sie also durch eine `radiogroup` in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) mit den Pfeiltasten navigieren, ändert sich der ausgewählte Knopf nicht. Vielmehr aktivieren die <kbd>Leertaste</kbd> und die <kbd>Eingabetaste</kbd> innerhalb einer `toolbar` die fokussierte `radio` Schaltfläche, wenn sie nicht bereits aktiviert ist, wobei <kbd>Tab</kbd> den Fokus in und aus der `toolbar` bewegt.

### Erforderliche JavaScript-Funktionen

Benutzerinteraktionen für `radiogroup` müssen die Benutzerinteraktionen nachahmen, die leicht sind bei einer Gruppe von gleichnamigen HTML-Radioknöpfen. Tastaturereignisse für Tab, Leertaste und Pfeiltasten müssen erfasst werden. Klickevents auf sowohl die Radioelemente als auch deren zugehörige Labels müssen ebenfalls erfasst werden. Zusätzlich muss der [Fokus verwaltet werden](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability).

Während generell das Verlassen eines fokussierten Elements Sie zum nächsten fokussierbaren Element in der DOM-Reihenfolge bringt, hält die Verwendung der Pfeiltasten für die Navigation in einer Gruppe von Radio-Schaltflächen Sie in der Gruppe, indem sie den Fokus auf den ersten Radioknopf bewegt, wenn die <kbd>Rechte Pfeiltaste</kbd> oder die <kbd>Nach unten Pfeiltaste</kbd> losgelassen wird, während der Fokus auf dem letzten Radio in der Gruppe war, und zum letzten Radio wechselt, wenn die <kbd>Linke Pfeiltaste</kbd> oder <kbd>Nach oben Pfeiltaste</kbd> losgelassen wird, wenn der Fokus auf dem ersten Radio war. Die Verwaltung des `tabindex` ist eine Methode zum Verwalten von Pfeiltastenevents.

### Erforderliche CSS-Funktionen

Verwenden Sie den `[aria-checked="true"]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um den aktivierten Zustand von Radiotasten zu gestalten.

Verwenden Sie CSS {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}} Pseudoklassen für die Gestaltung der visuellen Tastaturfokussierung und Hervorhebung. Der Fokus- und Hoverefekt sollte sowohl den Radioknopf als auch das Label umfassen, um es einfacher zu machen, zu erkennen, welche Option gewählt wird und um zu zeigen, dass das Klicken auf das Label oder den Knopf den Radioknopf aktiviert.

## Beispiele

Der grundlegende Aufbau einer `radiogroup` unter Verwendung unspezifischer ARIA-Rollen anstelle von semantischem HTML ist wie folgt:

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

Dies könnte unter Verwendung von semantischem HTML geschrieben worden sein, das kein CSS oder JavaScript erfordert:

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

In diesem {{HTMLElement('fieldset')}} Beispiel ist zwar `role="radiogroup"` nicht notwendig, aber um diese Gruppierung explizit als `radiogroup` anzukündigen, fügen Sie die ARIA-Rolle hinzu.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('fieldset')}} Element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} Radioknopf-Element
- [ARIA `radio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
