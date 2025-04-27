---
title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

Der `aria-disabled` Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig operabel ist.

## Beschreibung

Das `aria-disabled` Attribut, wenn auf `true` gesetzt, zeigt an, dass das Element, auf dem es gesetzt ist, und alle seine fokussierbaren Nachkommen im deaktivierten Zustand sein sollen. Diese Deklaration informiert Personen, die unterstützende Technologien nutzen, wie Bildschirmleser, dass solche Elemente nicht bearbeitet oder anderweitig operabel sein sollen.

Im Gegensatz zu HTMLs [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Boolean-Attribut, das ein Formularelement als semantisch deaktiviert kommuniziert, sein Styling ändert, um seinen Zustand widerzuspiegeln und alle Funktionalität unterdrückt sowie den Wert des Elements von der Formularübermittlung ausschließt, gibt `aria-disabled="true"` <strong>nur</strong> diese Elemente semantisch als deaktiviert wieder. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie im deaktivierten Zustand angezeigt werden.

Wenn native HTML-Formularelemente deaktiviert werden müssen, müssen Entwickler das `disabled` Attribut angeben, da es alle allgemein erwarteten Funktionen des Deaktivierens eines Steuerungselements standardmäßig bereitstellt. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden sollen, aber immer noch für Benutzer auffindbar sind, wenn sie über die <kbd>Tab</kbd>-Taste navigieren. Dies kann ihre Auffindbarkeit verbessern, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokusfähigkeit solcher Elemente nicht ändert, noch werden die Elemente im Standard-Browserstyling gedimmt, was sie leichter lesbar macht. Einige Beispiele, wo dies nützlich sein könnte, umfassen:

- Das Header-Button-Element, das mit einem nicht zusammenklappbaren Akkordeon-Panel verknüpft ist,
- Ein Button, der wichtig ist, in der Fokusreihenfolge der Seite zu bleiben, dessen Aktion aber derzeit nicht verfügbar ist - wie das Einreichen eines Formulars,
- Temporär inaktive Elemente in einem Menü-Widget, das ansonsten nicht durch Standardtastaturnavigation übersprungen würde.

In jedem dieser Fälle möchte man vielleicht, dass Benutzer diese Elemente durch standardmäßige Tastaturnavigation finden, obwohl die Funktionalität dieser Steuerungen entfernt oder "deaktiviert" ist. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und gleichzeitig das Erscheinungsbild des Elements zu ändern, sodass sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der deaktivierte Zustand gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Container-Elementen verwenden, insbesondere, wenn ein Container sowohl Formularelemente als auch Links enthält - wo die Absicht darin besteht, die Formularelemente als im deaktivierten Zustand zu exponieren, aber <strong>nicht</strong>, um die Links als "deaktiviert" zu kommunizieren.

Ein weiterer Grund, das `aria-disabled` Attribut über das HTML `disabled` Attribut zu verwenden, ist, wenn Sie benutzerdefinierte Steuerungen erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled` Attribut erlaubt. Zum Beispiel wurde im folgenden Snippet ein `<div>` verwendet, um einen benutzerdefinierten Button zu erstellen, der als deaktiviert markiert werden muss. Allerdings erwartet oder respektiert das `<div>`-Element das `disabled` Attribut nicht - selbst wenn es mit einem `role="button"` versehen wird, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerungen zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie JavaScript benötigt wird, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktional ist, benötigen die Elemente auch Stiländerungen. Im Gegensatz zum HTML `disabled` Attribut, bei dem durch das Angeben Benutzeragent-Stile `:disabled` angewendet werden, tut dies `aria-disabled="true"` nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` formatiert werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut bewusst verwenden, um ein Formularelement in der Tastaturfokusreihenfolge der Seite zu belassen, insbesondere wenn das Element wichtige Inhalte darstellt, die alle Benutzer wahrnehmen können sollten, müssen Sie möglicherweise Stile verwenden, die immer noch den Farbkontrastanforderungen entsprechen. Zum Beispiel ist ein deaktivierter Button/Überschrift, der ein nicht zusammenklappbares Akkordeon-Panel einführt, Inhalt, der lesbar bleiben muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Media Query](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbmodus aktiviert hat; in diesem Fall werden sowohl die Text- als auch die Rahmenfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer Punkt, den Sie beachten sollten, wenn Sie `aria-disabled` gegenüber dem nativen HTML-Attribut verwenden, ist, dass das ARIA-Attribut das manuelle Styling erfordert, das notwendig ist, um das Element im Windows High Contrast Mode visuell als deaktiviert zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie auch die Interaktivität mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, verhindert jedoch nicht, dass das Element über die Tastatur aktiviert wird.

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    // element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "The element is now enabled.";
    element.addEventListener("click", onClick);
  } else {
    // element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "The element is now disabled.";
    element.removeEventListener("click", onClick);
  }
}
```

Beim Wechsel von `aria-disabled="true"` zu `"false"`, verwenden Sie JavaScript, um:

1. Den Wert auf `false` umzuschalten (oder das Attribut vollständig zu entfernen),
2. Das Element zu aktivieren und
3. Den Benutzer darüber zu informieren, dass die Steuerung jetzt aktiv ist.

Wenn Sie nur CSS verwendeten, um den deaktivierten Zustand mit einem Attributselektor zu gestalten, wird der Selektor nicht mehr übereinstimmen und das deaktivierte Styling wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled` Attributs wider, das anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig operabel ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-disabled` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`input`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Erbt in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Machen Sie deaktivierte Schaltflächen inklusiver](https://css-tricks.com/making-disabled-buttons-more-inclusive/) von Sandrina Pereira
- [Styling für Windows High Contrast mit neuen Standards für erzwungene Farben](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Reference/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
