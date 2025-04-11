---
title: "ARIA: switch-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die ARIA **`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, mit dem Unterschied, dass sie anstelle von "checked" und "unchecked", die recht allgemein gehalten sind, die Zustände "on" und "off" darstellt.

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

Die ARIA **`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, jedoch ist sie anstelle von "checked" oder "unchecked" entweder "on" oder "off". Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle ist das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate`- oder `mixed`-Zustand. Die `switch`-Rolle unterstützt nicht den Wert `mixed` für das `aria-checked`-Attribut; wird ein Wert von `mixed` einem `switch` zugewiesen, wird der Wert stattdessen auf `false` gesetzt.

Hilfstechnologien können sich dazu entscheiden, `switch`-Widgets mit einer speziellen Darstellung zu präsentieren, die eher einem Ein-/Ausschalter entspricht.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und per Tastatur bedienbar sein. Wird eine Rolle auf ein nicht fokussierbares Element angewendet, verwenden Sie das `tabindex`-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachfahrenelemente sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `switch` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines beliebigen `switch`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachfahren von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Sicht eines Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked`-Attribut ist **erforderlich**, wenn die `switch`-Rolle verwendet wird, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on"-Zustand; `false` repräsentiert den "off"-Zustand; ein Wert von `mixed` wird von der switch-Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly`-Attribut wird von der `switch`-Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern_ kann; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht_ ändern kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked`-Attributs
  - : Wenn ein Klickereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked`-Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologien

Wenn die `switch`-Rolle zu einem Element hinzugefügt wird, verarbeitet der {{Glossary("user_agent", "Benutzeragent")}} es folgendermaßen:

- Das Element wird dem Zugänglichkeitsinfrastruktur des Systems als Rolle `switch` präsentiert.
- Wenn sich der Wert des `aria-checked`-Attributs ändert, wird ein zugängliches Ereignis über die Zugänglichkeits-API des Systems ausgelöst, falls eine vorhanden ist und sie die `switch`-Rolle unterstützt.
- Alle Elemente, die Nachfahren eines Elements mit der `switch`-Rolle sind, werden automatisch mit der Rolle `presentation` versehen. Dies verhindert, dass Elemente, die zum Aufbau des Switches verwendet werden, individuell von Hilfstechnologien interagiert werden. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann gelesen oder anderweitig dem Benutzer übermittelt werden, es sei denn, er wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie reagiert, wenn sie die `switch`-Rolle unterstützt, wie folgt:

- Screenreader sollten das Element als Schalter ankündigen und optional Anweisungen bereitstellen, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das oben Genannte ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen, zu verstehen, wie Sie die `switch`-Rolle anwenden und nutzen können.

### Hinzufügen der Switch-Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch`-Rolle zu. Die Schaltfläche wird mit einem Aussehen gestaltet, das an einen Ein-/Ausschalter erinnert.

#### HTML

Ein Switch wird als {{HTMLElement("button")}}-Element implementiert, das dank seines `aria-checked`-Attributs zunächst auf `"true"` gesetzt ist. Der Switch hat zwei Kindelemente, die die Beschriftungen "off" und "on" enthalten, und wird von einem {{HTMLElement("label")}} gefolgt, das den Switch identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klickereignisse auf Switch-Widgets zu behandeln. Die Funktion ändert das `aria-checked`-Attribut von `true` auf `false`, oder umgekehrt.

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

Der Zweck des CSS ist es, eine Optik zu schaffen, die an das Paradigma eines Ein-/Ausschaltknopfes erinnert.

```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font:
    12px "Open Sans",
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

Der wahrscheinlich interessanteste Teil ist die Verwendung von Attributselektoren und der {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um das Erscheinungsbild des Switches basierend darauf, ob er ein- oder ausgeschaltet ist, umfassend zu ändern.

#### Ergebnis

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
