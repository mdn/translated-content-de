---
title: "ARIA: switch role"
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA **`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, außer dass sie anstelle der Zustände "checked" und "unchecked", die ziemlich allgemein in ihrer Bedeutung sind, die Zustände "on" und "off" repräsentiert.

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

Die ARIA **`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle, außer dass es anstelle von "checked" oder "unchecked" entweder "on" oder "off" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)-Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut erforderlich. Die beiden möglichen Werte sind `true` und `false`. Im Gegensatz zu einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch`-Rolle unterstützt den Wert `mixed` für das `aria-checked`-Attribut nicht; das Zuweisen eines Wertes von `mixed` zu einem `switch` setzt den Wert stattdessen auf `false`.

Hilfstechnologien können `switch`-Widgets mit einer spezialisierten Darstellung zeigen, um die Vorstellung eines Ein-/Ausschalters widerzuspiegeln.

Da ein Switch ein interaktives Steuerungselement ist, muss es fokussierbar und über die Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das `tabindex`-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Wertes eines Switches ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn der Switch umgeschaltet wird.

### Alle Nachkommen sind präsentational

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `switch` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines jeden `switch`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da Nachkommen von `switch` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive des Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}} entsprechen:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut
  - : Das `aria-checked`-Attribut ist **erforderlich**, wenn die `switch`-Rolle verwendet wird, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` repräsentiert den "on"-Zustand; `false` repräsentiert den "off"-Zustand; ein Wert von `mixed` wird von der Switch-Rolle nicht unterstützt und wird als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly`-Attribut wird von der `switch`-Rolle unterstützt. Es zeigt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets ändern _kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets nicht ändern _kann_. Der Standardwert ist `false`.

### Erforderliche JavaScript-Funktionen

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [Klickereignis](/de/docs/Web/API/Element/click_event) ausgelöst, das behandelt werden muss, um den Zustand des Widgets zu ändern.
- Ändern des `aria-checked`-Attributs
  - : Wenn ein Klickereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked`-Attributs von `true` auf `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologien

Wenn die `switch`-Rolle zu einem Element hinzugefügt wird, behandelt der {{Glossary("user_agent", "Benutzeragent")}} es folgendermaßen:

- Das Element wird als `switch`-Rolle an die Systemzugänglichkeitsinfrastruktur weitergegeben.
- Wenn sich der Wert des `aria-checked`-Attributs ändert, wird ein zugängliches Ereignis mit der Systemzugänglichkeits-API ausgelöst, falls verfügbar und unterstützend für die `switch`-Rolle.
- Alle Elemente, die Nachkommen eines Elements mit der `switch`-Rolle sind, werden automatisch mit der Rolle `presentation` versehen. Dies verhindert, dass Elemente, die verwendet werden, um den Switch zu konstruieren, individuell von Hilfstechnologien interagiert werden. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann vom Benutzer gelesen oder anderweitig bereitgestellt werden, es sei denn, er wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie, wenn sie die `switch`-Rolle unterstützt, reagiert, indem sie Folgendes tut:

- Screenreader sollten das Element als einen Switch ankündigen und optional Anweisungen dazu geben, wie der Switch aktiviert werden kann.

> [!NOTE]
> Zu diesem Thema gibt es unterschiedliche Meinungen darüber, wie Hilfstechnologien mit dieser Rolle umgehen sollten; das Obige ist eine empfohlene Praxis und kann von anderen Quellen abweichen.

## Beispiele

Die folgenden Beispiele sollten Ihnen helfen zu verstehen, wie die `switch`-Rolle angewendet und verwendet wird.

### Hinzufügen der switch-Rolle in ARIA

Dieses einfache Beispiel erstellt einfach ein Widget und weist ihm die ARIA `switch`-Rolle zu. Der Button ist mit einem Aussehen gestaltet, das an einen Ein-/Ausschalter erinnert.

#### HTML

Das HTML ist hier ziemlich einfach. Der Switch ist als {{HTMLElement("button")}}-Element implementiert, das zunächst aktiviert ist, da sein `aria-checked`-Attribut auf `"true"` gesetzt ist. Der Switch hat zwei Kindelemente, die die Beschriftungen "off" und "on" enthalten und wird von einem {{HTMLElement("label")}} gefolgt, das den Switch identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klickereignisse auf Switch-Widgets zu behandeln. Die Funktion ändert das `aria-checked`-Attribut von `true` auf `false` oder umgekehrt.

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

Der Zweck des CSS ist es, ein Aussehen und ein Gefühl für den Switch zu schaffen, das an das Paradigma eines Ein-/Ausschalters erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudo-Klassen, um den Wechsel des Erscheinungsbildes des Switches basierend darauf, ob er ein- oder ausgeschaltet ist, zu bewältigen.

#### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
