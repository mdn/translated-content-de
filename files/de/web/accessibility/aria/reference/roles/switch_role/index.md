---
title: "ARIA: switch Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Die ARIA **`switch`** Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit dem Unterschied, dass sie anstelle der eher allgemein gehaltenen Zustände "checked" und "unchecked" die Zustände "on" und "off" repräsentiert.

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

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, außer dass sie anstelle von "checked" oder "unchecked", entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle ist das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt nicht den Wert `mixed` für das `aria-checked` Attribut; die Zuweisung eines `mixed` Wertes zu einem `switch` setzt den Wert stattdessen auf `false`.

Hilfstechnologien können wählen, `switch` Widgets mit einer speziellen Präsentation darzustellen, um das Konzept eines Ein-/Ausschalters widerzuspiegeln.

Da ein Switch ein interaktives Steuerelement ist, muss er fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen ist, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Werts eines Switches ist die <kbd>Leertaste</kbd> Taste. Der Entwickler ist dafür verantwortlich, den Wert des `aria-checked` Attributs dynamisch zu ändern, wenn der Switch umgeschaltet wird.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in eine Plattform-Zugänglichkeits-API übersetzt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `switch` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `switch` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus Sicht der Benutzer von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "barrierefreien Baum")}} dem folgenden entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich** bei der Verwendung der `switch` Rolle, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch` Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on" Zustand; `false` repräsentiert den "off" Zustand; ein Wert von `mixed` wird von der `switch` Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist oder nicht. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets ändern _kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klick-Events
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klick-Event](/de/docs/Web/API/Element/click_event) ausgelöst, das gehandhabt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked` Attributs
  - : Wenn ein Klick-Event auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologie

Wenn der `switch` Rolle einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es so:

- Das Element wird dem Zugangsinfrastruktur des Systems als `switch` Rolle bereitgestellt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis unter Verwendung der Zugänglichkeits-API des Systems ausgelöst, falls eine vorhanden ist und sie die `switch` Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements mit der angewandten `switch` Rolle sind, erhalten automatisch die Rolle `presentation`. Dies verhindert, dass Elemente, die zur Konstruktion des Switches verwendet werden, individuell von Hilfstechnologien angesprochen werden können. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann gelesen oder anderweitig dem Benutzer unterbreitet werden, es sei denn, er ist ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie, sofern sie die `switch` Rolle unterstützt, reagiert folgendermaßen:

- Bildschirmleseprogramme sollten das Element als Schalter ankündigen und optional Anweisungen zum Aktivieren des Schalters bereitstellen.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann sich von anderen Quellen unterscheiden.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen zu verstehen, wie Sie die `switch` Rolle anwenden und verwenden können.

### Hinzufügen der switch Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Die Schaltfläche wird mit einem Aussehen gestaltet, das an einen Ein-/Ausschalter erinnert.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}} Element implementiert, das anfänglich als überprüft markiert ist, da sein `aria-checked` Attribut auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die "off" und "on" Beschriftungen enthalten, und wird von einem {{HTMLElement("label")}} begleitet, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion zum Behandeln von Klick-Events auf Switch-Widgets an. Die Funktion ändert das `aria-checked` Attribut von `true` auf `false` oder umgekehrt.

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

Der Zweck des CSS ist es, ein Aussehen und Gefühl für den Schalter zu etablieren, das an das Ein-/Ausschalter-Paradigma erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um das Erscheinungsbild des Schalters je nach Zustand zu ändern.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
