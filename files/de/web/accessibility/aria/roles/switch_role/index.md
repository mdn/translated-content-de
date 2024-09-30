---
title: "ARIA: switch-Rolle"
slug: Web/Accessibility/ARIA/Roles/switch_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA-**`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle, außer dass sie statt der Zustände „aktiviert“ und „deaktiviert“, die ziemlich generisch in ihrer Bedeutung sind, die Zustände „ein“ und „aus“ repräsentiert.

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA-`switch`-Rolle zu.

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

Die ARIA-**`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle, außer dass sie statt „aktiviert“ oder „deaktiviert“ entweder „ein“ oder „aus“ ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch`-Rolle unterstützt den Wert `mixed` für das `aria-checked` Attribut nicht; wenn ein Wert von `mixed` einer `switch` zugewiesen wird, wird der Wert stattdessen auf `false` gesetzt.

Hilfstechnologien können wählen, `switch`-Widgets mit einer speziellen Darstellung darzustellen, die die Vorstellung eines Ein-/Ausschalters widerspiegelt.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und über die Tastatur erreichbar sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Schalters ist die <kbd>Space</kbd>-Taste. Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind nur präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `switch` enthalten sind. Um diese Einschränkung zu umgehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `switch`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive des Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich**, wenn die `switch`-Rolle verwendet wird, da es den aktuellen Status des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` repräsentiert den „ein“-Zustand; `false` repräsentiert den „aus“-Zustand; ein Wert von `mixed` wird von der `switch`-Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch`-Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern kann_. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das bearbeitet werden muss, um den Zustand des Widgets zu ändern.
- Änderung des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologie

Wenn die `switch`-Rolle einem Element hinzugefügt wird, behandelt der [Benutzeragent](/de/docs/Glossary/user_agent) es folgendermaßen:

- Das Element wird in der Zugänglichkeitsinfrastruktur des Systems als Element mit der `switch`-Rolle offengelegt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis unter Verwendung der Zugänglichkeits-API des Systems ausgelöst, falls eine verfügbar ist und die `switch`-Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements mit der `switch`-Rolle sind, werden automatisch der Rolle `presentation` zugewiesen. Dies verhindert, dass die Elemente, die zur Konstruktion des Schalters verwendet werden, von Hilfstechnologien individuell interagiert werden. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann vom Benutzer gelesen oder anderweitig bereitgestellt werden, es sei denn, er wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie antwortet, falls sie die `switch`-Rolle unterstützt, wie folgt:

- Screenreader sollten das Element als Schalter ankündigen und optional Anleitungen zur Aktivierung des Schalters geben.

> [!NOTE]
> Es gibt unterschiedliche Ansichten darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das oben Genannte ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollten Ihnen helfen zu verstehen, wie die `switch`-Rolle angewendet und genutzt wird.

### Hinzufügen der switch-Rolle in ARIA

Dieses einfache Beispiel erstellt nur ein Widget und weist ihm die ARIA-`switch`-Rolle zu. Die Schaltfläche ist stilisiert mit einem Erscheinungsbild, das an einen Ein-/Aus-Power-Schalter erinnert.

#### HTML

Das HTML ist hier ziemlich einfach. Der Schalter wird als {{HTMLElement("button")}}-Element implementiert, das durch sein `aria-checked` Attribut anfänglich aktiviert ist, das auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die Beschriftungen „aus“ und „ein“ enthalten und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

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

Der Zweck des CSS besteht darin, ein Aussehen und Gefühl für den Schalter zu schaffen, das an das Power-Schalter-Paradigma erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um die gesamte Schwerstarbeit des Änderns des Erscheinungsbildes des Schalters basierend darauf, ob er ein- oder ausgeschaltet ist, zu erledigen.

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
