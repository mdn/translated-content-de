---
title: "ARIA: Rolle switch"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die ARIA-Rolle **`switch`** ist funktional identisch mit der Rolle [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role). Statt der eher allgemein gehaltenen Zustände „checked“ und „unchecked“ stellt `switch` jedoch die Zustände „on“ und „off“ dar.

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA-Rolle `switch` zu.

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

Die ARIA-Rolle **`switch`** ist identisch mit der Rolle [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), außer dass sie statt „checked“ und „unchecked“ die Zustände „on“ und „off“ hat. Wie bei der Rolle [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) ist das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) erforderlich. Die beiden möglichen Werte sind `true` und `false`. Anders als bei `<input type="checkbox">` oder `role="checkbox"` gibt es keinen Zustand `indeterminate` oder `mixed`. Die Rolle `switch` unterstützt für das Attribut `aria-checked` nicht den Wert `mixed`; wird einem `switch` dennoch `mixed` zugewiesen, wird der Wert stattdessen auf `false` gesetzt.

Unterstützende Technologien können `switch`-Widgets auf besondere Weise darstellen, um das Konzept eines Ein-/Aus-Schalters zu vermitteln.

Da ein Schalter ein interaktives Steuerelement ist, muss er fokussierbar und per Tastatur bedienbar sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen wird, verwenden Sie das Attribut `tabindex`, um dies zu ändern. Die vorgesehene Taste zum Umschalten ist die <kbd>Leertaste</kbd>. Bei jedem Umschalten muss der Wert des Attributs `aria-checked` dynamisch geändert werden.

### Alle Nachfahren sind rein präsentational

Einige Arten von Benutzeroberflächenkomponenten können in der Barrierefreiheits-API einer Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb eines `switch` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `switch`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachfahren von `switch` rein präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus Sicht einer Person, die eine unterstützende Technologie verwendet, existiert die Überschrift nicht: Die vorherigen Codebeispiele entsprechen im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem Folgenden:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Das Attribut `aria-checked` ist bei Verwendung der Rolle `switch` **erforderlich**, da es den aktuellen Zustand des Widgets angibt, dem die Rolle zugewiesen ist. Der Wert `true` steht für „on“, `false` für „off“. Der Wert `mixed` wird von der Rolle `switch` nicht unterstützt und als `false` behandelt.
- Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Das Attribut `aria-readonly` wird von der Rolle `switch` unterstützt. Es gibt an, ob Benutzer den Zustand des Widgets ändern können. Der Wert `false` bedeutet, dass Benutzer den Zustand _ändern können_; `true` bedeutet, dass sie ihn _nicht ändern können_. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn Benutzer auf das Schalter-Widget klicken, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst. Dieses muss verarbeitet werden, um den Zustand des Widgets zu ändern.
- Ändern des Attributs `aria-checked`
  - : Wenn auf dem Schalter-Widget ein Klickereignis ausgelöst wird, muss der Handler den Wert des Attributs `aria-checked` von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf User Agents und unterstützende Technologien

Wenn einem Element die Rolle `switch` zugewiesen wird, behandelt der {{Glossary("user_agent", "User Agent")}} es wie folgt:

- Das Element wird der Barrierefreiheitsinfrastruktur des Systems mit der Rolle `switch` bereitgestellt.
- Wenn sich der Wert des Attributs `aria-checked` ändert, wird über die Barrierefreiheits-API des Systems ein entsprechendes Ereignis ausgelöst, sofern eine solche API verfügbar ist und die Rolle `switch` unterstützt.
- Allen Nachfahren eines Elements mit der Rolle `switch` wird automatisch die Rolle `presentation` zugewiesen. Dadurch wird verhindert, dass unterstützende Technologien einzeln mit Elementen interagieren, aus denen der Schalter aufgebaut ist. Text in diesen Elementen bleibt für den User Agent sichtbar und kann vorgelesen oder auf andere Weise an Benutzer ausgegeben werden, sofern er nicht ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet wird.

Wenn eine unterstützende Technologie die Rolle `switch` unterstützt, reagiert sie folgendermaßen:

- Screenreader sollten das Element als Schalter ankündigen und gegebenenfalls Hinweise zur Bedienung geben.

> [!NOTE]
> Es gibt unterschiedliche Auffassungen darüber, wie unterstützende Technologien mit dieser Rolle umgehen sollten. Das oben beschriebene Verhalten ist eine Empfehlung und kann von Angaben anderer Quellen abweichen.

## Beispiele

Die folgenden Beispiele zeigen, wie Sie die Rolle `switch` zuweisen und verwenden.

### Die Rolle `switch` in ARIA zuweisen

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA-Rolle `switch` zu. Der Button ist so gestaltet, dass er an einen Ein-/Aus-Schalter erinnert.

#### HTML

Der Schalter ist als {{HTMLElement("button")}}-Element implementiert. Sein Attribut `aria-checked` ist zunächst auf `"true"` gesetzt. Der Schalter hat zwei Kindelemente mit den Beschriftungen „off“ und „on“. Darauf folgt ein {{HTMLElement("label")}}, das den Schalter bezeichnet.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### CSS

Das CSS soll dem Schalter ein Erscheinungsbild verleihen, das an einen Ein-/Aus-Schalter erinnert.

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

Besonders interessant ist die Verwendung von Attributselektoren sowie der Pseudoklassen {{cssxref(":first-child")}} und {{cssxref(":last-child")}}. Sie übernehmen die wesentliche Arbeit, um das Erscheinungsbild des Schalters abhängig von seinem Zustand zu ändern.

#### JavaScript

Dieser JavaScript-Code definiert eine Funktion zur Verarbeitung von Klickereignissen auf Schalter-Widgets und bindet sie ein. Die Funktion ändert das Attribut `aria-checked` von `true` auf `false` oder umgekehrt.

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

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: Rolle `checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
