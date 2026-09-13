---
title: "ARIA: option-Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) entsprechend ihrem Zustand haben, `true` wenn ausgewählt und `false`, wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option vorhanden, aber deaktiviert ist.

Die `option`-Rolle dient dazu, auswählbare Optionen einer `listbox` zu identifizieren. Optionen müssen einen zugänglichen Namen haben. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem Inhalt der Nachfahren des Elements entnommen werden.

Autoren können auch explizit einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet werden und die Option auch ein sichtbares Textlabel zeigt, müssen Autoren sicherstellen, dass sie <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> einhalten.

Es wird dringend empfohlen, ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden, wenn möglich. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus automatisch für alle Nachfahren zu steuern.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugangs-API dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `option` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachfahren von `option` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} äquivalent zu folgendem sind:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten oder von ihr besessen sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Wird verwendet, um den Auswählungszustand der Option zu beschreiben.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Wird verwendet, um den Prüfzustand zu beschreiben, wenn Optionen in einer Mehrfachauswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Wird verwendet, um die Position im Optionssatz zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, z.B. bei virtuellem Scrollen, wenn nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Wird zusammen mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
  - : Wird verwendet, um die Option vor Zugangs-Tools zu verbergen. Sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verbergen, wenn es die Erfahrung für unterstützende Technologie verbessert, wie redundante Inhalte. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig angesehen wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Wird verwendet, um anzuzeigen, dass ein Element modifiziert wird, zum Beispiel während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wird verwendet, um anzugeben, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo es angebracht ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Label im DOM vorhanden ist, sollte stattdessen `aria-labelledby` verwendet werden. Optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
