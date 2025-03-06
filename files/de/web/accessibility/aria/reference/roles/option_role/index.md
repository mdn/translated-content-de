---
title: "ARIA: Option-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlen zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) treffen kann. Diese Optionen sind ähnlich den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, aber sie können Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) im Einklang mit ihrem Zustand haben, `true` wenn ausgewählt und `false` wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option vorhanden, aber deaktiviert ist.

Die `option`-Rolle dient der Identifizierung auswählbarer Auswahlmöglichkeiten einer `listbox`. Optionen müssen einen zugänglichen Namen erhalten. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem Nachkommeninhalt des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen bereitstellen, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch ein sichtbares Textlabel anzeigt, müssen Autoren sicherstellen, dass sie dem <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> entsprechen.

Es wird sehr empfohlen, stattdessen, wenn möglich, ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus für alle Nachkommen automatisch zu verwalten.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente innerhalb einer `option` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da die Nachkommen von `option` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codefragmente gleichbedeutend mit dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten sein oder von ihr besessen werden

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Wird verwendet, um den Überprüfungszustand zu beschreiben, wenn Optionen in einer Mehrfachauswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)

  - : Wird verwendet, um die Position in der Menge von Optionen zu beschreiben, wenn sie nicht dem DOM entspricht, wie bei virtuellem Scrollen, bei dem nur einige Optionen gleichzeitig präsent sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)

  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Accessibility-Tools zu verbergen. Sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verstecken, wenn es die Erfahrung von unterstützender Technologie verbessert, wie zum Beispiel redundante Inhalte. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)

  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Wird verwendet, um anzuzeigen, dass ein Element modifiziert wird, zum Beispiel während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wird verwendet, um anzuzeigen, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, falls zutreffend. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Label im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

(Für weitere Details und eine vollständige Liste der ARIA-Zustände und -Eigenschaften siehe die <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (Rolle)</a>-Dokumentation.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
