---
title: "ARIA: switch Rolle"
slug: Web/Accessibility/ARIA/Roles/switch_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA **`switch`** Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle, mit dem Unterschied, dass sie anstelle der relativ generischen Zustände "checked" und "unchecked" die Zustände "on" und "off" repräsentiert.

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

Die ARIA **`switch`** Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle, außer dass sie anstelle von "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut erforderlich. Die zwei möglichen Werte sind `true` und `false`. Im Unterschied zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch` Rolle unterstützt den Wert `mixed` für das `aria-checked` Attribut nicht; die Zuweisung eines Wertes von `mixed` zu einem `switch` setzt den Wert stattdessen auf `false`.

Hilfstechnologien können `switch` Widgets mit einer spezialisierten Darstellung präsentieren, um den Charakter eines Ein/Aus-Schalters zu spiegeln.

Da ein Schalter eine interaktive Steuerung ist, muss er fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle einem nicht fokussierbaren Element zugewiesen wird, verwenden Sie das `tabindex` Attribut, um dies zu ändern. Der erwartete Tastaturkurzbefehl zum Umschalten des Werts eines Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler ist verpflichtet, den Wert des `aria-checked` Attributs dynamisch zu ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `switch` Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `switch` Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive eines Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Accessibility Tree](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut
  - : Das `aria-checked` Attribut ist **erforderlich**, wenn die `switch` Rolle verwendet wird, da es den aktuellen Zustand des Widgets repräsentiert, auf das die `switch` Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on"-Zustand; `false` repräsentiert den "off"-Zustand; ein Wert von `mixed` wird von der `switch` Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly` Attribut wird von der `switch` Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitet werden kann. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets ändern _kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht_ ändern kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klick-Ereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klick-Ereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Änderung des `aria-checked` Attributs
  - : Wenn ein Klick-Ereignis auf das Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked` Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologien

Wenn die `switch` Rolle einem Element hinzugefügt wird, behandelt der [Benutzeragent](/de/docs/Glossary/user_agent) es folgendermaßen:

- Das Element wird dem barrierefreien Infrastruktur des Systems als `switch` Rolle zugänglich gemacht.
- Wenn sich der Wert des `aria-checked` Attributs ändert, wird ein barrierefreies Ereignis mit der barrierefreien API des Systems ausgelöst, falls eine verfügbar ist und sie die `switch` Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements mit der `switch` Rolle sind, erhalten automatisch die Rolle `presentation`. Dies verhindert, dass Elemente, die verwendet werden, um den Schalter zu erstellen, einzeln mit Hilfstechnologien interagiert werden können. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann dem Benutzer vorgelesen oder anderweitig übermittelt werden, es sei denn, er ist ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` versteckt.

Die Hilfstechnologie, falls sie die `switch` Rolle unterstützt, reagiert folgendermaßen:

- Bildschirmleseprogramme sollten das Element als Schalter ankündigen und optional Anweisungen geben, wie der Schalter aktiviert wird.

> [!NOTE]
> Es gibt unterschiedliche Meinungen darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das oben Genannte ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollen Ihnen helfen, zu verstehen, wie die `switch` Rolle angewendet und verwendet wird.

### Hinzufügen der switch Rolle in ARIA

Dieses einfache Beispiel erstellt lediglich ein Widget und weist ihm die ARIA `switch` Rolle zu. Die Schaltfläche ist mit einem Aussehen im Stil eines Ein/Aus-Leistungsschalters gestaltet.

#### HTML

Das HTML ist hier ziemlich einfach. Der Schalter wird als {{HTMLElement("button")}} Element implementiert, das anfänglich dank seines `aria-checked` Attributs auf `"true"` gesetzt ist. Der Schalter hat zwei Kindelemente, die die "off" und "on" Beschriftungen enthalten und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klick-Ereignisse auf Switch-Widgets zu behandeln. Die Funktion ändert das `aria-checked` Attribut von `true` zu `false` oder umgekehrt.

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

Der Zweck des CSS besteht darin, ein Aussehen und Gefühl für den Schalter zu etablieren, das an das Ein/Aus-Leistungsschalter-Paradigma erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um den Großteil der Arbeit zu leisten, das Erscheinungsbild des Schalters basierend darauf, ob er ein- oder ausgeschaltet ist, zu ändern.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
