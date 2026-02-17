---
title: "ARIA: option Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: f6e12d0cba939a2f203119f4514b56b5faff17e1
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um auswählbare Optionen in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) zu identifizieren, die ein Benutzer treffen kann. Diese Optionen sind ähnlich den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, aber sie können Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) entsprechend ihrem Zustand angepasst haben, `true` wenn ausgewählt und `false` wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer zu kommunizieren, dass die Option vorhanden, aber deaktiviert ist.

Die `option`-Rolle dient dazu, auswählbare Optionen einer `listbox` zu identifizieren. Optionen müssen einen zugänglichen Namen haben. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem nachgeordneten Inhalt des Elements stammen.

Autoren können auch ausdrücklich einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch eine sichtbare Textbezeichnung anzeigt, müssen die Autoren darauf achten, dass sie dem <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> folgen.

Es wird dringend empfohlen, wenn möglich ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten Tastaturinteraktion, um den Fokus für alle Nachfahren automatisch zu verwalten.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einer `option` enthalten sind, darzustellen. Um mit diesem Problem umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahren von jedem `option`-Element an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachkommen von `option` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus Sicht des Nutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} entsprechen:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten oder von ihr besessen sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Wird verwendet, um den Auswahlszustand der Option zu beschreiben.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Wird verwendet, um den Aktivierungszustand zu beschreiben, wenn Optionen in einer mehrfachen Auswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Wird verwendet, um die Position im Optionssatz zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie bei virtuellem Scrollen, bei dem nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtzahl der Optionen zu deklarieren. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
  - : Wird verwendet, um die Option vor Zugänglichkeitswerkzeugen zu verbergen. Es sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verbergen, wenn es die Erfahrung von unterstützender Technologie verbessert, wie z. B. redundante Inhalte. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig angesehen wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Wird verwendet, um anzuzeigen, dass ein Element verändert wird, wie z. B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wird verwendet, um anzuzeigen, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo angemessen. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Label im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
