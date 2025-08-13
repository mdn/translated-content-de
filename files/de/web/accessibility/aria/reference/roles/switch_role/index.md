---
title: "ARIA: switch Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Die ARIA **`switch`** Rolle ist funktionell identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, außer dass anstelle der relativ generischen "checked" und "unchecked"-Zustände die `switch` Rolle die Zustände "on" und "off" repräsentiert.

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu.

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

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, außer dass sie anstatt "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt nicht den Wert `mixed` für das `aria-checked` Attribut; die Zuordnung eines `mixed` Wertes zu einem `switch` setzt den Wert stattdessen auf `false`.

Assistive Technologien können `switch` Widgets mit einer spezialisierten Darstellung versehen, um die Idee eines Ein/Aus-Schalters widerzuspiegeln.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Werts eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `switch` Elements an, da es sich um eine Rolle handelt, die semantische Kinder nicht unterstützt.

Betrachten Sie zum Beispiel das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive von assistiven Technologie-Nutzern existiert die Überschrift nicht, da die vorherigen Codebeispiele der folgenden Darstellung im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich** bei Verwendung der `switch` Rolle, da es den aktuellen Zustand des Widgets repräsentiert, auf das die `switch` Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on"-Zustand; `false` repräsentiert den "off"-Zustand; ein Wert von `mixed` wird von der Switch-Rolle nicht unterstützt und als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern_ kann; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf das Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und assistive Technologien

Wenn die `switch` Rolle einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es wie folgt:

- Das Element wird als Element mit der `switch` Rolle an die Zugänglichkeitsinfrastruktur des Systems übermittelt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis unter Verwendung der Zugänglichkeits-API des Systems ausgelöst, sofern eine verfügbar ist und die `switch` Rolle unterstützt wird.
- Alle Elemente, die Nachkommen eines Elements mit der `switch` Rolle sind, werden automatisch mit der Rolle `presentation` versehen. Dies verhindert, dass Elemente, die zum Aufbau des Schalters verwendet werden, einzeln von assistiver Technologie angesprochen werden. Text in diesen Elementen bleibt dem Benutzeragenten sichtbar und kann dem Benutzer vorgelesen oder anderweitig zugänglich gemacht werden, es sei denn, es wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` verborgen.

Die assistive Technologie, falls sie die `switch` Rolle unterstützt, reagiert wie folgt:

- Bildschirmleser sollten das Element als Schalter ankündigen und optional Anweisungen geben, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie assistive Technologien diese Rolle handhaben sollten; das oben Angegebene ist eine vorgeschlagene Vorgehensweise und kann sich von anderen Quellen unterscheiden.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen zu verstehen, wie die `switch` Rolle angewendet und genutzt wird.

### Hinzufügen der switch Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Der Button ist im Stil eines Ein/Aus-Schalters gehalten.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}} Element implementiert, das anfänglich dank seines `aria-checked` Attributs auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die Labels "off" und "on" enthalten und wird von einem {{HTMLElement("label")}} begleitet, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion zur Behandlung von Klickereignissen auf Switch-Widgets an. Die Funktion ändert das `aria-checked` Attribut von `true` auf `false` oder umgekehrt.

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

Das Ziel des CSS ist es, ein Aussehen für den Schalter zu schaffen, das an ein Power-Switch-Paradigma erinnert.

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
  background: #226622;
  color: #eeeeff;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbbbdd;
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

Der interessanteste Teil ist vermutlich die Verwendung von Attributselektoren und der {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um das gesamte Erscheinungsbild des Schalters je nach Zustand ("on" oder "off") zu ändern.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
