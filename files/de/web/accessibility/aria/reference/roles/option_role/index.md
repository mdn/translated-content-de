---
title: "ARIA: option Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) entsprechend ihrem Zustand haben, `true`, wenn ausgewählt, und `false`, wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option vorhanden, allerdings deaktiviert ist.

Die `option`-Rolle dient zur Identifikation von auswählbaren Optionen einer `listbox`. Optionen müssen einen zugänglichen Namen haben. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem Inhalt der Nachfahren des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle spezifizieren. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch eine sichtbare Textbezeichnung anzeigt, müssen Autoren sicherstellen, dass sie dem <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> entsprechen.

Es wird dringend empfohlen, nach Möglichkeit ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus für alle Nachfahren automatisch zu verwalten.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Aktivierungs-API dargestellt werden, nur Text enthalten können. Accessibility-APIs verfügen nicht über eine Möglichkeit, semantische Elemente darzustellen, die in einer `option` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren von `option`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie folgendes `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachfahren von `option` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Perspektive des Nutzers von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} dem folgenden entsprechen:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einem `listbox` enthalten sein oder von einem `listbox` besessen sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Wird verwendet, um den markierten Zustand zu beschreiben, wenn Optionen in mehrfacher Auswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)

  - : Wird verwendet, um die Position in der Menge der Optionen zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie z.B. beim virtuellen Scrollen, bei dem nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)

  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugänglichkeitstools zu verbergen. Es sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verbergen, wenn dies die Erfahrung der assistiven Technologie verbessert, wie z.B. redundante Inhalte. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)

  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig angesehen wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Wird verwendet, um anzuzeigen, dass ein Element gerade geändert wird, z.B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option bezeichnet. Der Inhalt der Option sollte stattdessen verwendet werden, wo dies angemessen ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu benennen. Wenn das Label im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
