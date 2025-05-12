---
title: "ARIA: switch Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA **`switch`** Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit dem Unterschied, dass sie anstelle der Zustände "checked" und "unchecked", die ziemlich generisch in ihrer Bedeutung sind, die Zustände "on" und "off" repräsentiert.

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

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit dem Unterschied, dass sie statt "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle ist das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) erforderlich. Die zwei möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt nicht den Wert `mixed` für das `aria-checked` Attribut; das Zuweisen eines `mixed` Wertes zu einem `switch` setzt den Wert stattdessen auf `false`.

Assistive Technologien können `switch` Widgets mit einer speziellen Darstellung darstellen, um die Vorstellung eines An/Aus Schalters widerzuspiegeln.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht-fokussierbares Element angewendet wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `switch` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrelemente eines jeden `switch` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachfahren von `switch` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive eines Nutzers von assistiver Technologie existiert die Überschrift nicht, da die vorherigen Code-Schnipsel gleichwertig sind mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}:

```html
<div role="switch">Title of my switch</div>
```

### Zugeordnete ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich**, wenn die `switch` Rolle verwendet wird, da es den aktuellen Zustand des Widgets repräsentiert, auf das die `switch` Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on" Zustand; `false` repräsentiert den "off" Zustand; ein Wert von `mixed` wird von der switch Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets ändern _kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht_ ändern kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Features

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf das Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf User Agents und assistive Technologie

Wenn die `switch` Rolle zu einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "User Agent")}} es wie folgt:

- Das Element wird als Rolle `switch` der System-Zugänglichkeitsinfrastruktur ausgesetzt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis über die System-Zugänglichkeits-API ausgelöst, falls eine verfügbar ist und sie die `switch` Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements mit der `switch` Rolle sind, erhalten automatisch die Rolle `presentation`. Dies verhindert, dass Elemente, die zur Konstruktion des Schalters verwendet werden, von assistiven Technologien individuell interagiert werden können. Text in diesen Elementen bleibt für den User Agent sichtbar und kann gelesen oder anderweitig an den Benutzer übermittelt werden, es sei denn, er ist ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` verborgen.

Die assistive Technologie, sofern sie die `switch` Rolle unterstützt, reagiert, indem sie Folgendes tut:

- Bildschirmleser sollten das Element als Schalter ankündigen und optional Anweisungen geben, wie man den Schalter aktiviert.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie assistive Technologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollten Ihnen helfen, zu verstehen, wie die `switch` Rolle angewendet und verwendet wird.

### Hinzufügen der Switch-Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Die Schaltfläche wird mit einem Aussehen gestylt, das an einen An/Aus-Schalter erinnert.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}} Element implementiert, das anfangs als geprüft gilt, weil sein `aria-checked` Attribut auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die "off" und "on" Beschriftungen enthalten und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

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

Der Zweck des CSS besteht darin, ein Aussehen und eine Haptik für den Schalter zu schaffen, die an das Paradigma des Ein/Aus-Schalters erinnern.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um das gesamte Aussehen des Schalters zu ändern, basierend darauf, ob er an oder aus ist.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
