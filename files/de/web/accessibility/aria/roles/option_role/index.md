---
title: "ARIA: option Rolle"
slug: Web/Accessibility/ARIA/Roles/option_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu kennzeichnen, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch Bilder enthalten.

Alle auswählbaren Optionen sollten [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) haben, das ihrem Zustand entspricht, `true` wenn ausgewählt und `false` wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer zu vermitteln, dass die Option vorhanden ist, aber deaktiviert.

Die `option`-Rolle dient zur Kennzeichnung auswählbarer Entscheidungen in einer `listbox`. Optionen müssen einen zugänglichen Namen haben. In der Regel sollte der zugängliche Name für eine Option aus den Nachkommeninhalten des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen angeben, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch eine sichtbare Textbeschriftung anzeigt, müssen Autoren sicherstellen, dass sie dem <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label in Name</a> entsprechen.

Es wird dringend empfohlen, ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden, wann immer möglich. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus automatisch für alle Nachkommen zu verwalten.

### Alle Nachkommen sind darstellend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeit-API dargestellt werden, nur Text enthalten können. Zugänglichkeit-APIs haben keine Möglichkeit, semantische Elemente, die in einer `option` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachkommen von `option` darstellend sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus Sicht eines Benutzers einer assistiven Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele gleichwertig sind mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}}:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
  - : Ein `option` _muss_ in einer `listbox` enthalten oder von dieser besessen sein

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlszustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Wird verwendet, um den Kontrollkästchenzustand zu beschreiben, wenn Optionen in einer Mehrfachauswahlweise verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)

  - : Wird verwendet, um die Position im Optionssatz zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie z.B. beim virtuellen Scrollen, bei dem nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)

  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugänglichkeitstools zu verbergen. Sollte nur verwendet werden, um nicht sichtbare Inhalte oder sichtbare Inhalte zu verbergen, wenn es die Erfahrung der assistiven Technologie verbessert, wie z.B. redundante Inhalte. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)

  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig betrachtet wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wird verwendet, um anzuzeigen, dass ein Element bearbeitet wird, z.B. während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo es angemessen ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Label im DOM vorhanden ist, sollte `aria-labelledby` stattdessen verwendet werden. Optional.

(Für weitere Details und eine vollständige Liste der ARIA-Zustände und -Eigenschaften, siehe die <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (Rolle)</a> Dokumentation.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
