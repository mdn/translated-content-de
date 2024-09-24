---
title: "ARIA: switch-Rolle"
slug: Web/Accessibility/ARIA/Roles/switch_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA **`switch`**-Rolle ist funktional identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)-Rolle, außer dass anstelle der eher allgemein gehaltenen "gecheckt" und "nicht gecheckt"-Zustände die `switch`-Rolle die Zustände "ein" und "aus" darstellt.

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

Die ARIA **`switch`**-Rolle ist identisch mit der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)-Rolle, außer dass sie anstelle von "gecheckt" oder "nicht gecheckt" entweder "ein" oder "aus" ist. Wie bei der [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)-Rolle ist das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attribut erforderlich. Die zwei möglichen Werte sind `true` und `false`. Anders als bei einem `<input type="checkbox">` oder `role="checkbox"` gibt es keinen `indeterminate` oder `mixed` Zustand. Die `switch`-Rolle unterstützt den Wert `mixed` für das `aria-checked`-Attribut nicht; die Zuweisung eines Wertes von `mixed` zu einem `switch` setzt den Wert stattdessen auf `false`.

Hilfstechnologien können `switch`-Widgets mit einer speziellen Darstellung darstellen, um das Konzept eines Ein/Aus-Schalters widerzuspiegeln.

Da ein Schalter ein interaktives Steuerungselement ist, muss er fokussierbar und per Tastatur zugänglich sein. Wenn die Rolle auf ein nicht fokussierbares Element angewendet wird, verwenden Sie das `tabindex`-Attribut, um dies zu ändern. Die erwartete Tastenkombination zum Umschalten des Schalters ist die <kbd>Leertaste</kbd>. Der Entwickler muss den Wert des `aria-checked`-Attributs dynamisch ändern, wenn der Schalter umgeschaltet wird.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `switch` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, weisen Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) allen Nachfolgeelementen eines `switch`-Elements zu, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `switch`-Element, das eine Überschrift enthält.

```html
<div role="switch"><h3>Title of my switch</h3></div>
```

Da die Nachkommen von `switch` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="switch"><h3 role="presentation">Title of my switch</h3></div>
```

Aus der Perspektive des Benutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorhergehenden Code-Schnipsel äquivalent zu dem Folgenden im [Accessibility-Tree](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="switch">Title of my switch</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut
  - : Das `aria-checked`-Attribut ist **erforderlich** bei Verwendung der `switch`-Rolle, da es den aktuellen Zustand des Widgets darstellt, auf das die `switch`-Rolle angewendet wird. Ein Wert von `true` repräsentiert den "ein"-Zustand; `false` repräsentiert den "aus"-Zustand; ein Wert von `mixed` wird von der switch-Rolle nicht unterstützt und als `false` behandelt.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Das `aria-readonly`-Attribut wird von der `switch`-Rolle unterstützt. Es gibt an, ob der Zustand des Widgets vom Benutzer bearbeitbar ist. Ein Wert von `false` bedeutet, dass der Benutzer den Zustand des Widgets ändern _kann_; ein Wert von `true` bedeutet, dass der Benutzer den Zustand des Widgets _nicht ändern_ kann. Der Standardwert ist `false`.

### Erforderliche JavaScript-Features

- Handler für Klickereignisse
  - : Wenn der Benutzer auf das Switch-Widget klickt, wird ein [click event](/de/docs/Web/API/Element/click_event) ausgelöst, das gehandhabt werden muss, um den Zustand des Widgets zu ändern.
- Änderung des `aria-checked`-Attributs
  - : Wenn ein Klickereignis auf dem Switch-Widget ausgelöst wird, muss der Handler den Wert des `aria-checked`-Attributs von `true` zu `false` oder umgekehrt ändern.

## Mögliche Auswirkungen auf Benutzeragenten und Hilfstechnologie

Wenn die `switch`-Rolle einem Element hinzugefügt wird, behandelt der {{Glossary("user agent")}} es so:

- Das Element wird dem Zugänglichkeitsinfrastruktur des Systems als Element mit der `switch`-Rolle ausgesetzt.
- Wenn sich der Wert des `aria-checked`-Attributs ändert, wird ein zugängliches Ereignis über die Zugänglichkeits-API des Systems ausgelöst, falls eine verfügbar ist und die `switch`-Rolle unterstützt.
- Alle Elemente, die Nachkommen eines Elements sind, dem die `switch`-Rolle zugewiesen ist, erhalten automatisch die Rolle `presentation`. Dies verhindert, dass Elemente, die zur Konstruktion des Schalters verwendet werden, individuell von Hilfstechnologien angesprochen werden. Text in diesen Elementen bleibt für den Benutzeragenten sichtbar und kann gelesen oder dem Benutzer auf andere Weise mitgeteilt werden, es sei denn, er wird ausdrücklich mit {{cssxref("display", "display: none")}} oder `aria-hidden="true"` ausgeblendet.

Die Hilfstechnologie, wenn sie die `switch`-Rolle unterstützt, reagiert, indem sie Folgendes tut:

- Bildschirmausleseprogramme sollten das Element als Schalter ankündigen und optional Anweisungen liefern, wie der Schalter aktiviert wird.

> [!NOTE]
> Es gibt unterschiedliche Ansichten darüber, wie Hilfstechnologien diese Rolle handhaben sollten; das Obige ist eine empfohlene Praxis und kann sich von anderen Quellen unterscheiden.

## Beispiele

Die folgenden Beispiele sollten Ihnen helfen zu verstehen, wie Sie die `switch`-Rolle anwenden und verwenden können.

### Hinzufügen der switch-Rolle in ARIA

Dieses einfache Beispiel erstellt ein Widget und weist ihm die ARIA `switch`-Rolle zu. Der Button ist im Stil eines Ein/Aus-Schalters gestaltet.

#### HTML

Das HTML ist hier ziemlich einfach. Der Schalter wird als {{HTMLElement("button")}}-Element implementiert, das dank seines `aria-checked`-Attributs initial als "gecheckt" gesetzt ist. Der Schalter hat zwei Kindelemente, die die "off" und "on"-Labels enthalten, und wird von einem {{HTMLElement("label")}} gefolgt, das den Schalter identifiziert.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

Dieser JavaScript-Code definiert und wendet eine Funktion an, um Klickereignisse auf Switch-Widgets zu verarbeiten. Die Funktion ändert das `aria-checked`-Attribut von `true` auf `false` oder umgekehrt.

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

Der Zweck des CSS ist es, einen Look und ein Gefühl für den Schalter zu etablieren, das an das Paradigma eines Ein/Aus-Schalters erinnert.

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

Der interessanteste Teil ist wahrscheinlich die Verwendung von Attributselektoren und den {{cssxref(":first-child")}} und {{cssxref(":last-child")}} Pseudoklassen, um das gesamte Aussehen des Schalters zu ändern, je nachdem, ob er ein- oder ausgeschaltet ist.

#### Ergebnis

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
