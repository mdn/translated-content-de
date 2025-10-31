---
title: "ARIA: switch Rolle"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Die ARIA **`switch`** Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, mit dem Unterschied, dass anstelle der Zustände "geprüft" und "ungeprüft", die relativ generisch sind, die `switch` Rolle die Zustände "ein" und "aus" repräsentiert.

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

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle, außer dass es anstelle von "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt den Wert `mixed` für das `aria-checked` Attribut nicht; eine Zuweisung von `mixed` zu einem `switch` setzt den Wert stattdessen auf `false`.

Assistive Technologien können wählen, `switch` Widgets mit einer speziellen Präsentation darzustellen, um die Vorstellung eines Ein-/Ausschalters zu reflektieren.

Da ein Schalter ein interaktives Bedienelement ist, muss er fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Schalters ist die <kbd>Space</kbd> Taste. Der Entwickler muss den Wert des `aria-checked` Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachfahren sind präsentatisch

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `switch` zu repräsentieren. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkomponentelemente eines beliebigen `switch` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentatisch sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive des Benutzers von assistiver Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich**, wenn die `switch` Rolle verwendet wird, da es den aktuellen Zustand des Widgets darstellt, dem die `switch` Rolle zugewiesen ist. Ein Wert von `true` repräsentiert den "ein" Zustand; `false` repräsentiert den "aus" Zustand; ein Wert `mixed` wird von der `switch` Rolle nicht unterstützt und als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets _ändern_ kann; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [click event](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Änderung des `aria-checked` Attributs
  - : Wenn ein Klickereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und assistive Technologie

Wenn die `switch` Rolle zu einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} dies folgendermaßen:

- Das Element wird dem System-Zugänglichkeitsinfrastruktur als Element mit der `switch` Rolle vorgestellt.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein zugängliches Ereignis über die System-Zugänglichkeits-API ausgelöst, falls eine vorhanden ist und die `switch` Rolle unterstützt.
- Allen Elementen, die Nachkommen eines Elements mit der `switch` Rolle sind, wird automatisch die Rolle `presentation` zugewiesen. Dies verhindert, dass Elemente, die zur Konstruktion des Schalters verwendet werden, individuell von assistiven Technologien angesprochen werden. Der Text in diesen Elementen bleibt dem Benutzeragenten sichtbar und kann gelesen oder anderweitig dem Benutzer übermittelt werden, es sei denn, er wird ausdrücklich durch {{cssxref("display", "display: none")}} oder `aria-hidden="true"` versteckt.

Die assistive Technologie, falls sie die `switch` Rolle unterstützt, reagiert, indem sie folgendes tut:

- Bildschirmlesegeräte sollten das Element als Schalter ankündigen und optional Anweisungen geben, wie der Schalter aktiviert werden kann.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie diese Rolle von assistiven Technologien behandelt werden sollte; das obige ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen, zu verstehen, wie Sie die `switch` Rolle anwenden und nutzen können.

### Die switch Rolle in ARIA hinzufügen

Dieses Beispiel erstellt ein Widget und weist ihm die ARIA `switch` Rolle zu. Die Schaltfläche ist im Stil eines Ein/Aus-Netzschalters gestaltet.

#### HTML

Ein Schalter wird als {{HTMLElement("button")}} Element implementiert, das anfangs überprüft wird, da sein `aria-checked` Attribut auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die "off" und "on" Beschriftungen enthalten und wird durch ein {{HTMLElement("label")}} identifiziert, das den Schalter beschreibt.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klickereignisse auf Switch-Widgets zu behandeln. Die Funktion ändert das `aria-checked` Attribut von `true` auf `false` oder umgekehrt.

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

Der Zweck des CSS besteht darin, ein Look-and-Feel für den Schalter zu etablieren, das an das Paradigma des Netzschalters erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um die gesamte Änderung des Erscheinungsbildes des Schalters abhängig davon, ob er ein- oder ausgeschaltet ist, zu leisten.

#### Ergebnis

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
