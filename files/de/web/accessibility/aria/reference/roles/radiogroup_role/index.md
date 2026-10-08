---
title: "ARIA: radiogroup-Rolle"
short-title: radiogroup
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die Rolle `radiogroup` bezeichnet eine Gruppe von `radio`-Schaltflächen.

## Beschreibung

Radiogruppen fassen zusammengehörige [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)-Optionen zusammen. Eine `radiogroup` ist eine Art [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)-Liste, in der jeweils nur ein Eintrag beziehungsweise eine `radio`-Option ausgewählt sein kann.

Wenn Sie native HTML-Radioschaltflächen vom Typ [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) verwenden, werden diese gruppiert, indem Sie jeder Radioschaltfläche der Gruppe denselben Wert für das Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zuweisen. Sobald eine solche Gruppe eingerichtet ist, wird durch die Auswahl einer Radioschaltfläche automatisch die zuvor ausgewählte Schaltfläche derselben Gruppe abgewählt. Dadurch sind die Radioschaltflächen zwar einander zugeordnet; um die Gruppierung ausdrücklich als `radiogroup` bereitzustellen, legen Sie zusätzlich die ARIA-Rolle fest.

Es wird empfohlen, Radiogruppen mit gleichnamigen HTML-Radioschaltflächen zu erstellen. Wenn Sie statt semantischer HTML-Formularsteuerelemente ARIA-Rollen und -Attribute verwenden müssen, können und sollten sich benutzerdefinierte `radio`-Schaltflächen wie native HTML-Radioschaltflächen verhalten.

Wenn Sie nicht semantische Elemente als Radioschaltflächen verwenden, müssen Sie sicherstellen, dass Benutzer jeweils nur eine Schaltfläche der Gruppe auswählen können. Wird für ein Element der Gruppe das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) auf `true` gesetzt, muss das zuvor ausgewählte Element abgewählt werden, indem dessen `aria-checked`-Attribut auf `false` gesetzt wird. Das Attribut `aria-checked` wird für die zugehörigen `radio`-Rollen festgelegt, nicht für die `radiogroup` selbst.

Bei manchen Implementierungen einer `radiogroup` sind anfangs alle Schaltflächen nicht ausgewählt. Sobald eine `radio`-Schaltfläche in einer `radiogroup` ausgewählt wurde, lässt sich in der Regel nicht mehr zu einem Zustand zurückkehren, in dem keine Schaltfläche ausgewählt ist.

Ein zugänglicher Name für die Rolle `radiogroup` wird dringend empfohlen, ist nach ARIA jedoch nicht erforderlich. Geben Sie ihn entweder über eine sichtbare Beschriftung an, auf die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verweist, oder über eine mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) festgelegte Beschriftung. Wenn Elemente zusätzliche Informationen über die Radiogruppe bereitstellen, verweist das `radiogroup`-Element über die Eigenschaft [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf diese Elemente.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
  - : Eine auswählbare Schaltfläche innerhalb einer `radiogroup`, in der jeweils höchstens eine Schaltfläche ausgewählt sein kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Geben Sie der `radiogroup` einen zugänglichen Namen, entweder über eine sichtbare Beschriftung, auf die `aria-labelledby` verweist, oder über eine mit `aria-label` festgelegte Beschriftung. Dies wird dringend empfohlen, ist nach ARIA jedoch nicht erforderlich.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verweis auf Elemente, die zusätzliche Informationen über die `radiogroup` bereitstellen.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass für eine `radio`-Schaltfläche innerhalb der Gruppe `aria-checked="true"` festgelegt sein muss, bevor das Formular übermittelt werden kann. Der Pflichtzustand wird für das `radiogroup`-Element festgelegt und nicht für eines der `radio`-Elemente. Bei HTML-Radioschaltflächen wird dagegen das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) direkt für eines oder mehrere {{HTMLElement('input')}}-Elemente festgelegt.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Kennzeichnet das Element, das bei einem Fehler eine Fehlermeldung für die `radiogroup` bereitstellt. Die Meldung sollte ausgeblendet sein, solange sie nicht relevant ist.

### Tastaturinteraktionen

Für `radio`-Schaltflächen in einer `radiogroup`, die sich **nicht** in einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Tab</kbd> und <kbd>Shift + Tab</kbd>
  - : Verschieben den Fokus in die `radiogroup` hinein und aus ihr heraus. Wenn der Fokus in eine `radiogroup` gelangt und eine Radioschaltfläche ausgewählt ist, erhält diese den Fokus. Ist keine Radioschaltfläche ausgewählt, erhält die erste Radioschaltfläche der Gruppe den Fokus.
- <kbd>Leertaste</kbd>
  - : Wählt die fokussierte Radioschaltfläche aus, sofern sie nicht bereits ausgewählt ist.
- <kbd>Pfeil nach rechts</kbd> und <kbd>Pfeil nach unten</kbd>
  - : Verschieben den Fokus zur nächsten Radioschaltfläche der Gruppe. Dabei wird die zuvor fokussierte Schaltfläche abgewählt und die neu fokussierte ausgewählt. Befindet sich der Fokus auf der letzten Schaltfläche, wechselt er zur ersten.
- <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach oben</kbd>
  - : Verschieben den Fokus zur vorherigen Radioschaltfläche der Gruppe. Dabei wird die zuvor fokussierte Schaltfläche abgewählt und die neu fokussierte ausgewählt. Befindet sich der Fokus auf der ersten Schaltfläche, wechselt er zur letzten.

Mit den Pfeiltasten wird zwischen den Elementen einer Toolbar navigiert. Wenn eine `radiogroup` innerhalb einer Toolbar verschachtelt ist, müssen Benutzer zwischen allen Toolbar-Elementen einschließlich der Radioschaltflächen navigieren können, ohne die Auswahl zu ändern. Daher ändert sich die ausgewählte Schaltfläche nicht, wenn Sie mit den Pfeiltasten durch eine `radiogroup` innerhalb einer [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) navigieren. Stattdessen wählen innerhalb einer `toolbar` die Tasten <kbd>Leertaste</kbd> und <kbd>Enter</kbd> die fokussierte `radio`-Schaltfläche aus, sofern sie nicht bereits ausgewählt ist. Mit <kbd>Tab</kbd> wird der Fokus in die `toolbar` hinein oder aus ihr heraus verschoben.

### Erforderliche JavaScript-Funktionen

Die Benutzerinteraktionen mit einer `radiogroup` müssen denen einer Gruppe gleichnamiger HTML-Radioschaltflächen entsprechen. Tastaturereignisse für die Tabulatortaste, die Leertaste und die Pfeiltasten müssen verarbeitet werden. Auch Klickereignisse sowohl auf den Radioelementen als auch auf den zugehörigen Beschriftungen müssen verarbeitet werden. Darüber hinaus [muss der Fokus verwaltet werden](https://primer.style/accessibility/design-guidance/focus-management/).

Während das Verlassen eines fokussierten Elements normalerweise zum nächsten fokussierbaren Element in der DOM-Reihenfolge führt, bleibt der Fokus bei der Navigation mit den Pfeiltasten innerhalb einer Gruppe von Radioschaltflächen. Wenn die letzte Radioschaltfläche der Gruppe fokussiert ist und <kbd>Pfeil nach rechts</kbd> oder <kbd>Pfeil nach unten</kbd> losgelassen wird, wechselt der Fokus zur ersten Radioschaltfläche. Wenn die erste Radioschaltfläche fokussiert ist und <kbd>Pfeil nach links</kbd> oder <kbd>Pfeil nach oben</kbd> losgelassen wird, wechselt er zur letzten. Die Verwaltung eines wechselnden [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist eine Möglichkeit, Pfeiltastenereignisse zu verarbeiten.

### Erforderliche CSS-Funktionen

Verwenden Sie den [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[aria-checked="true"]`, um den ausgewählten Zustand von Radioschaltflächen zu gestalten.

Verwenden Sie die CSS-Pseudoklassen {{CSSXRef(':hover')}} und {{CSSXRef(':focus')}}, um den Tastaturfokus und den Hover-Zustand visuell zu gestalten. Der Fokus- und Hover-Effekt sollte sowohl die Radioschaltfläche als auch ihre Beschriftung umfassen. So ist leichter zu erkennen, welche Option ausgewählt wird und dass ein Klick auf die Beschriftung oder die Schaltfläche die Radioschaltfläche aktiviert.

## Beispiele

Der grundlegende Aufbau einer `radiogroup` mit nicht semantischen ARIA-Rollen statt semantischem HTML sieht wie folgt aus:

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

Dies hätte auch mit semantischem HTML geschrieben werden können, wofür weder CSS noch JavaScript erforderlich ist:

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

Im folgenden Beispiel mit {{HTMLElement('fieldset')}} ist `role="radiogroup"` nicht erforderlich. Wenn die Gruppierung jedoch ausdrücklich als `radiogroup` angekündigt werden soll, fügen Sie die ARIA-Rolle hinzu.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('fieldset')}}
- HTML-Radioschaltflächenelement {{HTMLElement('input/radio', '&lt;input type="radio">')}}
- [ARIA-Rolle `radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
