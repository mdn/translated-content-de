---
title: "ARIA: switch-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Die ARIA **`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, mit dem Unterschied, dass sie anstelle der relativ generischen "checked"- und "unchecked"-Zustände die Zustände "on" und "off" darstellt.

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

Die ARIA **`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, außer dass sie anstelle von „checked“ oder „unchecked“ entweder „on“ oder „off“ ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut erforderlich. Die zwei möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch`-Rolle unterstützt nicht den Wert `mixed` für das `aria-checked` Attribut; das Zuweisen eines Wertes von `mixed` zu einem `switch` setzt stattdessen den Wert auf `false`.

Hilfstechnologien können sich entscheiden, `switch` Widgets mit einer spezialisierten Darstellung darzustellen, um den Gedanken eines Ein/Aus-Schalters widerzuspiegeln.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das `tabindex`-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Werts eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommelemente eines `switch`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da die Nachkommen von `switch` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Sicht des Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codebeispiele der folgenden im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich**, wenn die `switch`-Rolle verwendet wird, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` steht für den "on"-Zustand; `false` steht für den "off"-Zustand; ein Wert `mixed` wird von der switch Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch`-Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern kann_. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf das Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologie

Wenn die `switch`-Rolle einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es folgendermaßen:

- Das Element wird der Zugriffsinfrastruktur des Systems als Element mit der `switch` Rolle zugänglich gemacht.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis unter Verwendung der Zugriffs-API des Systems ausgelöst, wenn eine verfügbar ist und die `switch` Rolle unterstützt wird.
- Alle Elemente, die Nachkommen eines Elements mit der `switch` Rolle sind, werden automatisch der Rolle `presentation` zugewiesen. Dies verhindert, dass Elemente, die zur Konstruktion des Schalters verwendet werden, von Hilfstechnologien einzeln angesprochen werden. Der Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann dem Benutzer vorgelesen oder auf andere Weise bereitgestellt werden, es sei denn, er ist ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie reagiert, wenn sie die `switch` Rolle unterstützt, wie folgt:

- Bildschirmlesegeräte sollten das Element als Schalter ankündigen und optional Anweisungen bereitstellen, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen dazu, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann sich von anderen Quellen unterscheiden.

## Beispiele

Die folgenden Beispiele sollten Ihnen helfen zu verstehen, wie die `switch` Rolle angewendet und verwendet wird.

### Hinzufügen der switch Rolle in ARIA

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Der Button ist mit einem Aussehen versehen, das an einen Ein/Aus-Schalter erinnert.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}}-Element implementiert, das dank seines `aria-checked` Attributs mit dem Wert `"true"` initial aktiviert ist. Der Schalter hat zwei Kind-Elemente, die die Labels "off" und "on" enthalten und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klickereignisse auf Switch-Widgets zu bearbeiten. Die Funktion ändert das `aria-checked` Attribut von `true` auf `false` oder umgekehrt.

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

Der Zweck des CSS besteht darin, einen Look für den Schalter zu schaffen, der an das Paradigma des Ein/Aus-Schalters erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, die die Hauptarbeit beim Ändern des Aussehens des Schalters erledigen, je nachdem, ob er ein- oder ausgeschaltet ist.

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
