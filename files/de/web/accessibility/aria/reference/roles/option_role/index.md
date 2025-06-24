---
title: "ARIA: option-Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) entsprechend ihrem Zustand angepasst haben, `true` wenn ausgewählt und `false` wenn nicht. Ist eine Option nicht auswählbar, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option zwar vorhanden, aber deaktiviert ist.

Die `option`-Rolle wird verwendet, um auswählbare Entscheidungen einer `listbox` zu identifizieren. Optionen müssen einen zugänglichen Namen haben. In der Regel sollte der zugängliche Name für eine Option aus dem untergeordneten Inhalt des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen bereitstellen, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch einen sichtbaren Textbeschriftung enthält, müssen die Autoren sicherstellen, dass sie dem <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Beschriftung im Namen</a> entsprechen.

Es wird dringend empfohlen, ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` stattdessen zu verwenden, wenn möglich. Diese nativen HTML-Elemente bieten Tastatur-Interaktivität, um den Fokus für alle Nachfahren automatisch zu verwalten.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente, die in einem `option` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachgeordneten Elemente eines `option`-Elements an, da es sich bei dieser Rolle um eine handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Weil Nachfahren von `option` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Sicht der Benutzer von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Zugriffsbarkeitsbaum")}} sind:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten sein oder von ihr verwaltet werden

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Wird verwendet, um den ausgewählten Zustand zu beschreiben, wenn Optionen in einer Mehrfachauswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)

  - : Wird verwendet, um die Position in der Menge der Optionen zu beschreiben, wenn diese nicht mit dem DOM übereinstimmt, z. B. bei virtuellem Scrollen, wenn nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)

  - : Wird verwendet, um anzugeben, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugriffs-Tools zu verbergen. Es sollte nur verwendet werden, um nicht sichtbaren Inhalt oder sichtbaren Inhalt zu verbergen, wenn es die Erfahrung mit unterstützender Technologie verbessert, z. B. redundanter Inhalt. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)

  - : Wird verwendet, um anzugeben, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Wird verwendet, um anzugeben, dass ein Element modifiziert wird, z. B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo dies zutrifft. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn die Beschriftung im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
