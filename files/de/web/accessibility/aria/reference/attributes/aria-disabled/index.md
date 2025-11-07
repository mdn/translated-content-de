---
title: "ARIA: aria-disabled-Attribut"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der `aria-disabled`-Zustand zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.

## Beschreibung

Das `aria-disabled`-Attribut, wenn auf `true` gesetzt, zeigt an, dass das Element, auf dem es gesetzt ist, und all seine fokussierbaren Nachkommen in einem deaktivierten Zustand sein sollen. Diese Deklaration informiert Menschen, die unterstützende Technologien wie Bildschirmlesegeräte verwenden, dass solche Elemente nicht bearbeitbar oder anderweitig bedienbar sind.

Anders als das HTML-Boolean-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled), das ein Formularelement als semantisch deaktiviert kommuniziert, seine Gestaltung so ändert, dass sein Zustand erkennbar ist, und alle Funktionen unterdrückt, inklusive der Teilnahme des Elementwerts an der Formularübermittlung, wird mit `aria-disabled="true"` <strong>ausschließlich</strong> semantisch dargestellt, dass diese Elemente deaktiviert sind. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie als deaktiviert angezeigt werden.

Wenn native HTML-Formularelemente deaktiviert werden müssen, sollten Entwickler das `disabled`-Attribut angeben, da es alle allgemein erwarteten Funktionen zur Deaktivierung eines Steuerelements standardmäßig bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber für Benutzer, die mit der <kbd>Tab</kbd>-Taste navigieren, weiterhin zugänglich sein sollen. Dies kann ihre Auffindbarkeit verbessern, da sie nicht aus der Fokusrichtung der Webseite entfernt werden, da `aria-disabled` nicht die Fokussierbarkeit solcher Elemente ändert, noch werden die Elemente durch die Standardeinstellungen des Browsers optisch abgeschwächt, was sie leichter lesbar macht. Einige Beispiele, bei denen dies nützlich sein kann, sind:

- Das Header-Button-Element, das mit einem nicht zusammenklappbaren Akkordeon-Panel verknüpft ist,
- Ein Button, der in der Fokusrichtung der Seite wichtig bleibt, dessen Aktion derzeit jedoch nicht verfügbar ist - wie das Abschicken eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die andernfalls mit der normalen Tastaturnavigation übersprungen würden.

In jedem dieser Fälle möchte man, dass Benutzer diese Elemente durch die normale Tastatur-Navigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen weiterhin JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren, und gleichzeitig das Aussehen des Elements ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut für Containerelemente verwenden. Besonders in dem Fall, dass ein Container sowohl Formularelemente als auch Links enthält - wo die Absicht möglicherweise besteht, die Formularelemente als deaktiviert anzuzeigen, aber <strong>nicht</strong> die Links als "deaktiviert" zu kennzeichnen.

Ein weiterer Grund, das `aria-disabled`-Attribut über das HTML-`disabled`-Attribut zu verwenden, ist, wenn Sie benutzerdefinierte Steuerungen erstellt haben, die als deaktiviert markiert werden müssen, aber kein Element verwenden, das das `disabled`-Attribut zulässt. Zum Beispiel wurde im folgenden Snippet ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert markiert werden muss. Allerdings erwartet das `<div>`-Element nicht das `disabled`-Attribut, noch respektiert es dieses - selbst wenn ihm ein `role="button"` zugewiesen würde, um seine sichtbare ARIA-Rolle zu ändern. Das `aria-disabled`-Attribut ist erforderlich, um solche benutzerdefinierten Steuerungen zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie erforderlich ist, JavaScript zu verwenden, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktionsfähig ist, wird das Element auch stilmäßige Anpassungen benötigen. Im Gegensatz zum HTML-`disabled`-Attribut, bei dem das Angeben dieses Attributs `:disabled`-Benutzeragent-Stile anwendet, tut das Hinzufügen von `aria-disabled="true"` dies nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[aria-disabled="true"]` gestaltet werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled`-Attribut gezielt verwenden, um ein Formularelement in der Tastaturfokusrichtung der Seite zu belassen, insbesondere wenn das Element wichtigen Inhalt darstellt, den alle Benutzer wahrnehmen können sollten, dann müssen Sie eventuell Stile verwenden, die dennoch die Anforderungen an den Farbkontrast erfüllen. Zum Beispiel ist eine deaktivierte Schaltfläche/Überschrift, die ein nicht zusammenklappbares Akkordeon-Panel einführt, ein Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors`-Media-Query](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbmodus aktiviert hat; falls ja, werden sowohl die Text- als auch die Randfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/Reference/Values/system-color#syntax) gesetzt.

Ein weiterer Punkt, den Sie beachten sollten, wenn Sie `aria-disabled` anstelle des nativen HTML-Attributs verwenden, ist, dass das ARIA-Attribut die notwendige manuelle Gestaltung erfordert, um das Element in Windows High Contrast Mode als deaktiviert visuell zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/Reference/Properties/pointer-events) verwenden, um ein Element nicht klickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, hindert das Element jedoch nicht daran, über die Tastatur aktiviert zu werden.

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

Beim Umschalten von `aria-disabled="true"` auf `"false"`, verwenden Sie JavaScript, um:

1. Den Wert auf `false` zu schalten (oder das Attribut ganz zu entfernen),
2. Das Element zu aktivieren, und
3. Den Benutzer darüber zu informieren, dass die Steuerung jetzt aktiviert ist.

Wenn Sie nur CSS zur Gestaltung des deaktivierten Zustands mit einem Attributselektor verwendet haben, trifft der Selektor nicht mehr zu und die deaktivierte Gestaltung tritt nicht mehr in Kraft.

## Werte

- `true`
  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-disabled`-Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle spiegelt den Wert des `aria-disabled`-Attributs wider.

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

Vererbt in Rollen:

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

- [Making disabled buttons more inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/) von Sandrina Pereira
- [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [disabled](/de/docs/Web/HTML/Reference/Attributes/disabled)
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
