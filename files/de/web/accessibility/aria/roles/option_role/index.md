---
title: "ARIA: option-Rolle"
slug: Web/Accessibility/ARIA/Roles/option_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `option`-Rolle wird für auswählbare Elemente in einer `listbox` verwendet.

## Beschreibung

Die `option`-Rolle wird verwendet, um Auswahlmöglichkeiten zu identifizieren, die ein Benutzer in einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) treffen kann. Diese Optionen ähneln den {{HTMLElement('option')}}-Elementen in einem {{HTMLElement('select')}}-Element, können jedoch auch Bilder enthalten.

Alle auswählbaren Optionen sollten mit ihrem Status [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) übereinstimmen, `true`, wenn ausgewählt, und `false`, wenn nicht. Wenn eine Option nicht auswählbar ist, kann `aria-selected` weggelassen werden. Eine deaktivierte Option kann [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) und `aria-selected="false"` haben, um dem Benutzer mitzuteilen, dass die Option zwar vorhanden, jedoch deaktiviert ist.

Die `option`-Rolle dient zur Identifizierung der auswählbaren Optionen einer `listbox`. Optionen müssen einen zugänglichen Namen haben. Im Allgemeinen sollte der zugängliche Name für eine Option vom Inhalt der Nachfahrenelemente des Elements stammen.

Autoren können auch explizit einen zugänglichen Namen bereitstellen, indem sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) für das Element mit der `option`-Rolle angeben. Wenn `aria-label` oder `aria-labelledby` verwendet wird und die Option auch ein sichtbares Textlabel anzeigt, müssen Autoren sicherstellen, dass sie das <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG-Erfolgskriterium 2.5.3 Label im Namen</a> einhalten.

Es wird dringend empfohlen, wenn möglich ein {{HTMLElement('select')}}-Element oder ein {{HTMLElement('input')}}-Element mit dem Typ `checkbox` oder `radio` zu verwenden. Diese nativen HTML-Elemente bieten Tastaturinteraktivität, um den Fokus automatisch für alle Nachfahren zu verwalten.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die in einer Plattform-Zugänglichkeits-API dargestellt werden, jedoch nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einer `option` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfahrenelemente eines `option`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten wir das folgende `option`-Element, das eine Überschrift enthält.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Da Nachfahren von `option` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

Aus der Sicht eines Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="option">Title of my option</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Zugehörige Rollen

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
  - : Eine `option` _muss_ in einer `listbox` enthalten oder von einer solchen besessen sein.

#### Zustände und Eigenschaften

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

  - : Wird verwendet, um den Auswahlzustand der Option zu beschreiben. Erforderlich.

- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : Wird verwendet, um den aktivierten Zustand zu beschreiben, wenn Optionen in einer Mehrfachauswahl verwendet werden. Unterstützt `true`, `false` und `mixed`. Optional.

- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)

  - : Wird verwendet, um die Position im Optionssatz zu beschreiben, wenn sie nicht mit dem DOM übereinstimmt, wie bei virtuellem Scrollen, bei dem nur einige Optionen gleichzeitig vorhanden sind. Optional.

- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

  - : Wird in Verbindung mit `aria-posinset` verwendet, um die Gesamtanzahl der Optionen anzugeben. Optional.

- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)

  - : Wird verwendet, um anzuzeigen, dass die Option vorhanden, aber nicht bearbeitbar ist. Optional.

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

  - : Wird verwendet, um die Option vor Zugänglichkeitswerkzeugen zu verbergen. Es sollte nur verwendet werden, um nicht sichtbaren Inhalt oder sichtbaren Inhalt zu verbergen, wenn dadurch die Erfahrung mit unterstützenden Technologien verbessert wird, wie bei redundantem Inhalt. Optional.

- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)

  - : Wird verwendet, um anzuzeigen, dass der Wert der Option von der Anwendung als ungültig angesehen wird. Optional.

- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : Wird verwendet, um anzuzeigen, dass ein Element modifiziert wird, zum Beispiel während es geladen wird. Optional.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Wird verwendet, um anzugeben, welches Element die Option beschriftet. Der Inhalt der Option sollte stattdessen verwendet werden, wo es angebracht ist. Optional.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um die Option zu beschriften. Wenn das Label im DOM vorhanden ist, sollte stattdessen `aria-labelledby` verwendet werden. Optional.

(Für weitere Details und eine vollständige Liste der ARIA-Zustände und Eigenschaften siehe die <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (Rolle)</a>-Dokumentation.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('option')}}-Element
- [ARIA: `combobox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
