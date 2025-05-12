---
title: "ARIA: option Rolle"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `option` Rolle wird für auswählbare Elemente in einem `listbox` verwendet.

## Beschreibung

Die `option` Rolle wird verwendet, um Optionen zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) auswählen kann. Diese Optionen sind ähnlich den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten mit [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) ihrem Zustand entsprechen, `true` im ausgewählten Zustand und `false`, wenn nicht ausgewählt. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option vorhanden, aber deaktiviert ist.

Die `option` Rolle dient zur Identifizierung von auswählbaren Möglichkeiten in einer `listbox`. Optionen müssen einen zugänglichen Namen erhalten. Im Allgemeinen sollte der zugängliche Name für eine Option aus dem untergeordneten Inhalt des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen bereitstellen, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das Element mit der `option` Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch eine sichtbare Textbezeichnung anzeigt, müssen Autoren sicherstellen, dass sie sich an das <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> halten.

Es wird dringend empfohlen, stattdessen ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden, wenn möglich. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus für alle Nachkommen automatisch zu verwalten.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einer `option` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel folgendes `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachkommen von `option` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} äquivalent sind:

```html
<div role="option">Title of my option</div>
```

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

#### Zugeordnete Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten sein oder dieser zugeordnet sein

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)

  - : Wird verwendet, um den Kontrollkästchenzustand zu beschreiben, wenn Optionen in einem Mehrfachauswahlmodus verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)

  - : Wird verwendet, um die Position innerhalb des Satzes von Optionen zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie z. B. bei virtuellem Scrollen, bei dem nur einige Optionen auf einmal vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)

  - : Wird verwendet, um anzugeben, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugangs-Tools zu verbergen. Es sollte nur verwendet werden, um nicht sichtbaren Inhalt oder sichtbaren Inhalt zu verbergen, wenn dies die Erfahrung mit unterstützender Technologie verbessert, wie z. B. redundanter Inhalt. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)

  - : Wird verwendet, um anzugeben, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

  - : Wird verwendet, um anzugeben, dass ein Element geändert wird, z. B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option etikettiert. Der Inhalt der Option sollte stattdessen verwendet werden, wo es angemessen ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um die Option zu etikettieren. Wenn die Bezeichnung im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

(Für weitere Details und eine vollständige Liste der ARIA-Zustände und -Eigenschaften siehe die <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (Rolle)</a> Dokumentation.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
