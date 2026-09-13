---
title: "ARIA: switch Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die ARIA **`switch`** Rolle ist funktionell identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit der Ausnahme, dass sie statt der "checked" und "unchecked" Zustände, die relativ allgemein sind, die Zustände "on" und "off" repräsentiert.

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu.

```html
<button
  type="button"
  role="switch"
  aria-checked="true"
  id="speakerPower"
  class="switch">
  <span aria-hidden="true">off</span>
  <span aria-hidden="false">on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

## Beschreibung

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit der Ausnahme, dass sie anstelle von "checked" oder "unchecked" entweder "on" oder "off" ist. Genau wie die [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle erfordert sie das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut. Die zwei möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt nicht den Wert `mixed` für das `aria-checked` Attribut; das Zuweisen eines Wert von `mixed` zu einem `switch` setzt stattdessen den Wert auf `false`.

Assistive Technologien können sich entscheiden, `switch` Widgets mit einer spezialisierten Darstellung zu repräsentieren, um die Idee eines Ein/Aus-Schalters widerzuspiegeln.

Da ein `switch` eine interaktive Steuerelement ist, muss es fokussierbar und über die Tastatur erreichbar sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Das erwartete Tastenkürzel zum Umschalten des Wertes eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler ist dafür verantwortlich, den Wert des `aria-checked` Attributs dynamisch zu ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrelemente eines `switch` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachfahren von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus Sicht der Benutzer von assistiven Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich** bei der Verwendung der `switch` Rolle, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch` Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on" Zustand; `false` repräsentiert den "off" Zustand; ein Wert von `mixed` wird von der `switch` Rolle nicht unterstützt und als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern_ kann; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das `switch` Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf dem `switch` Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` ändern oder umgekehrt.

## Mögliche Effekte auf Benutzeragenten und assistive Technologie

Wenn die `switch` Rolle zu einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es wie folgt:

- Das Element wird dem System-Zugriffs-Infrastruktur als ein Element mit der `switch` Rolle dargestellt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis mithilfe der System-Zugriffs-API ausgelöst, wenn eine verfügbar ist und die `switch` Rolle unterstützt.
- Alle Elemente, die Nachfahren eines Elements mit der `switch` Rolle sind, erhalten automatisch die Rolle `presentation`. Dies verhindert, dass Elemente, die zur Konstruktion des Schalters verwendet werden, individuell von assistiven Technologien angesprochen werden. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann gelesen oder anders an den Benutzer weitergegeben werden, es sei denn, er wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die assistive Technologie, falls sie die `switch` Rolle unterstützt, reagiert wie folgt:

- Bildschirmlesegeräte sollten das Element als Schalter ansagen und optional Anweisungen geben, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie assistive Technologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen zu verstehen, wie die `switch` Rolle angewendet und verwendet wird.

### Hinzufügen der switch Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Die Schaltfläche wird mit einem Erscheinungsbild gestylt, das an einen Ein/Aus-Netzschalter erinnert.

#### HTML

Ein `switch` wird als {{HTMLElement("button")}} Element implementiert, das anfänglich aktiviert ist, dank seines `aria-checked` Attributs, das auf `"true"` gesetzt ist. Der `switch` hat zwei Kindelemente, die die "off" und "on" Beschriftungen enthalten, und wird von einem {{HTMLElement("label")}} zur Identifizierung des Schalters gefolgt.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion zum Behandeln von Klickereignissen auf `switch` Widgets an. Die Funktion ändert das `aria-checked` Attribut von `true` auf `false` oder umgekehrt.

```js
document.querySelectorAll(".switch").forEach((theSwitch) => {
  theSwitch.addEventListener("click", handleClickEvent);
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

Der Zweck des CSS besteht darin, dem `switch` ein Aussehen und Gefühl zu verleihen, das an das Paradigma des Netzschalters erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudo-Klassen, um das Erscheinungsbild des `switch` basierend darauf, ob er ein- oder ausgeschaltet ist, zu ändern.

#### Ergebnis

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
