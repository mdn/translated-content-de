---
title: "ARIA: option-Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um die Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) entsprechend ihrem Zustand haben, `true`, wenn ausgewählt, und `false`, wenn nicht ausgewählt. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option zwar vorhanden, aber deaktiviert ist.

Die `option`-Rolle dient zur Identifizierung auswählbarer Auswahlmöglichkeiten einer `listbox`. Optionen müssen einen zugänglichen Namen haben. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem Inhalt der Nachfahren des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch ein sichtbares Textetikett anzeigt, müssen die Autoren sicherstellen, dass sie das <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> einhalten.

Es wird dringend empfohlen, wenn möglich ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten eine Tastaturinteraktivität, um den Fokus für alle Nachfahren automatisch zu verwalten.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `option` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachfahren von `option` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Perspektive der Benutzer assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}} dem folgenden entsprechen:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten oder von ihr besitzt sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Wird verwendet, um den aktivierten Zustand zu beschreiben, wenn Optionen in einem Mehrfachauswahlmodus verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Wird verwendet, um die Position im Satz der Optionen zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie z.B. beim virtuellen Scrollen, wo nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Wird zusammen mit `aria-posinset` verwendet, um die Gesamtzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
  - : Wird verwendet, um die Option vor Zugänglichkeitstools zu verbergen. Es sollte nur verwendet werden, um nicht sichtbaren Inhalt oder sichtbaren Inhalt zu verbergen, wenn dies die Erfahrung mit assistierender Technologie verbessert, z.B. redundanter Inhalt. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Wird verwendet, um anzuzeigen, dass ein Element geändert wird, z.B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wird verwendet, um anzugeben, welches Element die Option etikettiert. Der Inhalt der Option sollte stattdessen verwendet werden, wenn dies angebracht ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu etikettieren. Wenn das Etikett im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
