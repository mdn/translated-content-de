---
title: "ARIA: switch-Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

Die ARIA **`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, außer dass sie anstelle der Zustände "checked" und "unchecked", die recht allgemein sind, die Zustände "on" und "off" darstellt.

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch`-Rolle zu.

```html
<button
  type="button"
  role="switch"
  aria-checked="true"
  id="speakerPower"
  class="switch">
  <span aria-hidden="true">off</span>
  <span aria-hidden="true">on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

## Beschreibung

Die ARIA **`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, außer dass sie anstelle der Zustände "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch`-Rolle unterstützt nicht den Wert `mixed` für das `aria-checked`-Attribut; die Zuweisung eines `mixed`-Wertes an eine `switch` setzt stattdessen den Wert auf `false`.

Hilfstechnologien können wählen, `switch`-Widgets mit einer speziellen Darstellung darzustellen, um die Idee eines Ein-/Ausschalters widerzuspiegeln.

Da ein Schalter ein interaktives Steuerelement ist, muss es fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen wird, verwenden Sie das `tabindex`-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler ist verpflichtet, den Wert des `aria-checked`-Attributs dynamisch zu ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen eines `switch`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive der Benutzer von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked`-Attribut ist **erforderlich**, wenn die `switch`-Rolle verwendet wird, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` steht für den "on"-Zustand; `false` steht für den "off"-Zustand; ein Wert von `mixed` wird von der switch-Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly`-Attribut wird von der `switch`-Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern_ kann; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klick-Ereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [click event](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Änderung des `aria-checked`-Attributs
  - : Wenn ein Klick-Ereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked`-Attributs von `true` zu `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologien

Wenn die `switch`-Rolle einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es wie folgt:

- Das Element wird als `switch`-Rolle in die Zugänglichkeitsinfrastruktur des Systems eingebunden.
- Wenn sich der Wert des `aria-checked`-Attributs ändert, wird ein zugängliches Ereignis über die Zugänglichkeits-API des Systems ausgelöst, sofern diese verfügbar ist und die `switch`-Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements mit der `switch`-Rolle sind, werden automatisch mit der Rolle `presentation` versehen. Dies verhindert, dass Elemente, die zum Konstruieren des Schalters verwendet werden, individuell von Hilfstechnologien interagiert werden können. Text in diesen Elementen bleibt für den Benutzeragent sichtbar und kann vom Benutzer gelesen oder anderweitig geliefert werden, es sei denn, es ist ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` verborgen.

Die Hilfstechnologie, falls sie die `switch`-Rolle unterstützt, reagiert, indem sie Folgendes tut:

- Bildschirmleser sollten das Element als Schalter ankündigen und optional Anweisungen geben, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen zu verstehen, wie die `switch`-Rolle angewendet und verwendet wird.

### Hinzufügen der switch-Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch`-Rolle zu. Der Button ist mit einem Aussehen gestylt, das an einen Ein-/Aus-Schalter erinnert.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}}-Element implementiert, das zunächst dank seines `aria-checked`-Attributs auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die Labels "off" und "on" enthalten, und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Click-Ereignisse auf Switch-Widgets zu behandeln. Die Funktion ändert das `aria-checked`-Attribut von `true` zu `false` oder umgekehrt.

```js
document.querySelectorAll(".switch").forEach((theSwitch) => {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  const el = evt.target;

  if (el.getAttribute("aria-checked") === "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}
```

#### CSS

Der Zweck des CSS ist es, ein Erscheinungsbild für den Schalter zu schaffen, das an das Paradigma des Ein-/Aus-Schalters erinnert.

```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  vertical-align: middle;
  text-align: center;
  font:
    12px / 20px "Open Sans",
    "Arial",
    serif;
}

button.switch span {
  padding: 0 4px;
  pointer-events: none;
}

[role="switch"][aria-checked="false"] :first-child,
[role="switch"][aria-checked="true"] :last-child {
  background: #262;
  color: #eef;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbd;
}

label.switch {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
  line-height: 20px;
  vertical-align: middle;
  user-select: none;
}
```

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um die gesamte Arbeit zu erledigen, das Erscheinungsbild des Schalters je nach Zustand zu ändern.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
