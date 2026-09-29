---
title: "ARIA: radiogroup-Rolle"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

Die Rolle `radiogroup` bezeichnet eine Gruppe von `radio`-Schaltflächen.

## Beschreibung

Radiogruppen fassen zusammengehörige [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen zusammen. Eine `radiogroup` ist eine Art [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, in der zu jedem Zeitpunkt nur ein Eintrag – ein `radio` – ausgewählt sein kann.

Wenn Sie native HTML-Radiobuttons vom Typ [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) verwenden, werden die Radiobuttons gruppiert, indem Sie allen Radiobuttons der Gruppe denselben [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zuweisen. Sobald eine solche Gruppe besteht, wird bei der Auswahl eines Radiobuttons ein zuvor ausgewählter Radiobutton derselben Gruppe automatisch abgewählt. Dadurch sind die Radiobuttons zwar miteinander verknüpft; damit die Gruppe ausdrücklich als `radiogroup` bereitgestellt wird, müssen Sie jedoch die ARIA-Rolle festlegen.

Es wird empfohlen, Radiogruppen mit HTML-Radiobuttons zu erstellen, die denselben `name` haben. Wenn Sie statt semantischer HTML-Formularsteuerelemente ARIA-Rollen und -Attribute verwenden müssen, können und sollten sich benutzerdefinierte `radio`-Schaltflächen wie native HTML-Radiobuttons verhalten.

Wenn Sie nicht semantische Elemente als Radiobuttons verwenden, müssen Sie sicherstellen, dass immer nur ein Radiobutton der Gruppe ausgewählt sein kann. Wird ein Element der Gruppe ausgewählt, erhält sein Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) den Wert `true`. Beim zuvor ausgewählten Element wird `aria-checked` auf `false` gesetzt. Das Attribut `aria-checked` wird für die zugehörigen `radio`-Rollen festgelegt, nicht für die `radiogroup` selbst.

Bei manchen Implementierungen einer `radiogroup` sind anfangs alle Schaltflächen nicht ausgewählt. Sobald ein `radio` in einer `radiogroup` ausgewählt wurde, ist es in der Regel nicht mehr möglich, zu einem Zustand zurückzukehren, in dem keine Schaltfläche ausgewählt ist.

Ein zugänglicher Name für die Rolle `radiogroup` wird dringend empfohlen, obwohl ARIA ihn nicht vorschreibt. Geben Sie ihn entweder über eine sichtbare Beschriftung an, auf die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verweist, oder über eine mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) festgelegte Beschriftung. Wenn Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, verweist das `radiogroup`-Element mit der Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf diese Elemente.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
  - : Eine von mehreren auswählbaren Schaltflächen in einer `radiogroup`, von denen jeweils höchstens eine ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Vergeben Sie einen zugänglichen Namen für die `radiogroup` – entweder über eine sichtbare Beschriftung, auf die `aria-labelledby` verweist, oder über eine mit `aria-label` festgelegte Beschriftung. Dies wird dringend empfohlen, obwohl ARIA es nicht vorschreibt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verweist auf Elemente, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass für ein `radio` innerhalb der Gruppe `aria-checked="true"` gesetzt sein muss, bevor das Formular abgeschickt werden kann. Anders als bei HTML-Radiobuttons wird der Pflichtzustand am `radiogroup`-Element angegeben und nicht an einem der `radio`-Elemente. Bei HTML-Radiobuttons wird das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) direkt an einem oder mehreren {{HTMLElement('input')}}-Elementen gesetzt.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Kennzeichnet das Element, das im Fehlerfall eine Fehlermeldung für die `radiogroup` bereitstellt. Diese Meldung sollte ausgeblendet sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Schaltflächen in einer `radiogroup`, die sich **nicht** in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Bewegen den Fokus in die `radiogroup` hinein und aus ihr heraus. Wenn der Fokus in eine `radiogroup` gelangt und ein Radiobutton ausgewählt ist, erhält dieser den Fokus. Ist keiner der Radiobuttons ausgewählt, erhält der erste Radiobutton der Gruppe den Fokus.
- <kbd>Leertaste</kbd>
  - : Wählt den fokussierten Radiobutton aus, sofern er nicht bereits ausgewählt ist.
- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Bewegen den Fokus zum nächsten Radiobutton der Gruppe. Dabei wird die zuvor fokussierte Schaltfläche abgewählt und die neu fokussierte ausgewählt. Befindet sich der Fokus auf der letzten Schaltfläche, wechselt er zur ersten.
- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Bewegen den Fokus zum vorherigen Radiobutton der Gruppe. Dabei wird die zuvor fokussierte Schaltfläche abgewählt und die neu fokussierte ausgewählt. Befindet sich der Fokus auf der ersten Schaltfläche, wechselt er zur letzten.

Mit den Pfeiltasten navigieren Benutzer zwischen den Elementen einer Symbolleiste. Wenn eine `radiogroup` in eine Symbolleiste eingebettet ist, müssen sie zwischen allen Elementen der Symbolleiste, einschließlich der Radiobuttons, navigieren können, ohne die Auswahl zu ändern. Bei der Navigation mit den Pfeiltasten durch eine `radiogroup` innerhalb einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) bleibt der ausgewählte Radiobutton daher unverändert. Innerhalb einer `toolbar` wählen stattdessen <kbd>Leertaste</kbd> und <kbd>Enter</kbd> den fokussierten `radio`-Radiobutton aus, sofern er nicht bereits ausgewählt ist. Mit <kbd>Tab</kbd> wird der Fokus in die `toolbar` hinein und aus ihr heraus bewegt.

### Erforderliche JavaScript-Funktionen

Die Benutzerinteraktionen einer `radiogroup` müssen denen einer Gruppe gleichnamiger HTML-Radiobuttons entsprechen. Tastaturereignisse für Tabulator-, Leer- und Pfeiltasten müssen erfasst werden. Auch Klickereignisse auf den Radiobutton-Elementen und den zugehörigen Beschriftungen müssen erfasst werden. Außerdem muss [der Fokus verwaltet werden](https://primer.style/accessibility/design-guidance/focus-management/).

Während der Fokus beim Verlassen eines fokussierten Elements normalerweise zum nächsten fokussierbaren Element in der DOM-Reihenfolge wechselt, bleibt er bei der Navigation mit den Pfeiltasten innerhalb einer Radiogruppe. Wird <kbd>Pfeil nach rechts</kbd> oder <kbd>Pfeil nach unten</kbd> losgelassen, während der letzte Radiobutton der Gruppe fokussiert ist, wechselt der Fokus zum ersten Radiobutton. Wird <kbd>Pfeil nach links</kbd> oder <kbd>Pfeil nach oben</kbd> losgelassen, während der erste Radiobutton fokussiert ist, wechselt er zum letzten. Die Verwaltung eines veränderlichen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Möglichkeit, die Navigation mit den Pfeiltasten umzusetzen.

### Erforderliche CSS-Funktionen

Verwenden Sie den [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[aria-checked="true"]`, um den ausgewählten Zustand von Radiobuttons zu gestalten.

Verwenden Sie die CSS-Pseudoklassen {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}}, um Hover- und sichtbare Tastaturfokuseffekte zu gestalten. Diese Effekte sollten sowohl den Radiobutton als auch seine Beschriftung umfassen. So lässt sich leichter erkennen, welche Option ausgewählt wird und dass ein Klick auf die Beschriftung oder den Radiobutton die Auswahl aktiviert.

## Beispiele

Der grundlegende Aufbau einer `radiogroup` mit nicht semantischen ARIA-Rollen anstelle von semantischem HTML sieht wie folgt aus:

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

Dies ließe sich auch mit semantischem HTML schreiben, ohne CSS oder JavaScript zu benötigen:

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

Im folgenden Beispiel mit {{HTMLElement('fieldset')}} ist `role="radiogroup"` zwar nicht erforderlich. Wenn die Gruppierung ausdrücklich als `radiogroup` angekündigt werden soll, fügen Sie jedoch die ARIA-Rolle hinzu.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('fieldset')}}
- HTML-Radiobutton-Element {{HTMLElement('input/radio', '&lt;input type="radio">')}}
- [ARIA-Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
