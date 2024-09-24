---
title: "ARIA: Option-Rolle"
slug: Web/Accessibility/ARIA/Roles/option_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) treffen kann. Diese Optionen sind ähnlich den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) entsprechend ihrem Zustand zugeordnet haben: `true`, wenn ausgewählt, und `false`, wenn nicht ausgewählt. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option vorhanden, aber deaktiviert ist.

Die `option`-Rolle dient zur Identifizierung der auswählbaren Optionen einer `listbox`. Optionen müssen mit einem zugänglichen Namen versehen werden. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem nachfolgenden Inhalt des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch ein sichtbares Textetikett anzeigt, müssen Autoren sicherstellen, dass sie das <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> einhalten.

Es wird dringend empfohlen, wann immer möglich, ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten Tastaturinteraktivität zur automatischen Verwaltung des Fokus für alle Nachkommen.

### Alle Nachkommen sind präsentationsbezogen

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `option` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachfolgenden Elemente eines beliebigen `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachkommen von `option` präsentationsbezogen sind, ist der folgende Code gleichbedeutend:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus Sicht des Benutzers mit assistiver Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im [Accessibility-Tree](/de/docs/Glossary/Accessibility_tree) äquivalent zum folgenden sind:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
  - : Eine `option` _muss_ in oder von einer `listbox` enthalten sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Wird verwendet, um den überprüften Zustand zu beschreiben, wenn Optionen in einer Mehrfachauswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)

  - : Wird verwendet, um die Position in der Menge von Optionen zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, z. B. bei virtuellem Scrollen, wo nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)

  - : Wird verwendet, um anzugeben, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugänglichkeitstools zu verbergen. Es sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verbergen, wenn dies die Erfahrung mit assistiver Technologie verbessert, z. B. redundanter Inhalt. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)

  - : Wird verwendet, um anzugeben, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wird verwendet, um anzugeben, dass ein Element bearbeitet wird, z. B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo dies zutrifft. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Etikett im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

(Für weitere Details und eine vollständige Liste von ARIA-Zuständen und Eigenschaften siehe die <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (Rolle)</a> Dokumentation.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
