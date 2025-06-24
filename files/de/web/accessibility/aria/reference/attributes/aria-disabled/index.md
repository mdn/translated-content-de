---
title: "ARIA: aria-disabled Attribut"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der `aria-disabled` Zustand gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.

## Beschreibung

Das `aria-disabled` Attribut, wenn auf `true` gesetzt, gibt an, dass das Element, auf dem es gesetzt ist, sowie alle seine fokussierbaren Nachkommen sich im deaktivierten Zustand befinden sollen. Diese Erklärung informiert Personen, die unterstützende Technologien nutzen, wie Bildschirmlesegeräte, darüber, dass solche Elemente nicht bearbeitet oder anderweitig bedienbar sein sollen.

Im Gegensatz zu HTMLs [Boolean-Attribut `disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled), welches ein Formularsteuerelement semantisch als deaktiviert kennzeichnet, seinen Stil ändert, um seinen Status widerzuspiegeln, und alle Funktionalitäten unterdrückt sowie den Wert des Elements von der Teilnahme an der Formularübermittlung ausschließt, gibt `aria-disabled="true"` <strong>nur</strong> an, dass diese Elemente semantisch als deaktiviert wahrgenommen werden. Webentwickler müssen manuell sicherstellen, dass solche Elemente ihre Funktionalität unterdrückt haben, wenn sie als deaktiviert angezeigt werden.

Wenn HTML-Formularsteuerelemente deaktiviert werden müssen, sollten Entwickler das Attribut `disabled` angeben, da es standardmäßig alle allgemein erwarteten Funktionen des Deaktivierens eines Steuerelements bietet. Es kann jedoch Fälle geben, in denen Elemente als deaktiviert angezeigt werden müssen, aber für Benutzer weiterhin auffindbar sind, wenn sie mit der <kbd>Tab</kbd>-Taste navigieren. Dies kann ihre Auffindbarkeit verbessern, da sie nicht aus der Fokusreihenfolge der Webseite entfernt werden, da `aria-disabled` die Fokussierbarkeit solcher Elemente nicht ändert, noch werden diese Elemente durch die standardmäßige Browser-Styling-Verdunkelung leichter lesbar gemacht. Einige Beispiele, in denen dies nützlich sein kann, umfassen:

- Das Header-Button-Element, das mit einem nicht zusammenklappbaren Akkordeon-Panel verbunden ist,
- Ein Button, der in der Fokusreihenfolge der Seite wichtig ist, dessen Aktion jedoch derzeit nicht verfügbar ist - wie z. B. das Absenden eines Formulars,
- Vorübergehend inaktive Elemente in einem Menü-Widget, die anderweitig über die standardmäßige Tastaturnavigation übersprungen würden.

In jedem dieser Fälle kann man möchten, dass Benutzer diese Elemente durch die standardmäßige Tastaturnavigation finden, obwohl die Funktionalität dieser Steuerung entfernt oder "deaktiviert" ist. Entwickler müssen dennoch JavaScript verwenden, um die Funktionalität des Elements vollständig zu deaktivieren und gleichzeitig das Erscheinungsbild des Elements zu ändern, damit sehende Benutzer wissen, dass es deaktiviert ist.

> [!NOTE]
> Der Zustand des Deaktiviertseins gilt für das Element mit `aria-disabled="true"` und alle seine fokussierbaren Nachkommen. Seien Sie vorsichtig, wenn Sie dieses Attribut auf Container-Elementen verwenden. Besonders in Fällen, in denen ein Container sowohl Formularsteuerelemente als auch Links enthalten kann - wo die Absicht darin bestehen kann, die Formularsteuerelemente als in einem deaktivierten Zustand anzuzeigen, aber <strong>nicht</strong>, um die Links als "deaktiviert" zu kennzeichnen.

Ein weiterer Grund, das `aria-disabled` Attribut gegenüber dem HTML-Attribut `disabled` zu verwenden, ist, wenn Sie benutzerdefinierte Steuerelemente erstellt haben, die als deaktiviert gekennzeichnet werden müssen, aber kein Element verwenden, das das `disabled` Attribut zulässt. Zum Beispiel, in dem folgenden Code-Snippet wurde ein `<div>` verwendet, um eine benutzerdefinierte Schaltfläche zu erstellen, die als deaktiviert gekennzeichnet werden muss. Das `<div>`-Element erwartet oder respektiert jedoch das Attribut `disabled` nicht - selbst wenn es mit `role="button"` ausgestattet wird, um seine exponierte ARIA-Rolle zu ändern. Das `aria-disabled` Attribut ist erforderlich, um solche benutzerdefinierten Steuerelemente zu deaktivieren.

```html
<div role="button" aria-disabled="true" tabindex="-1">Edit</div>
```

Ähnlich wie das, dass man JavaScript verwenden muss, um sicherzustellen, dass ein Element mit `aria-disabled="true"` nicht funktionell ist, erfordert das Element auch Stiländerungen. Im Gegensatz zum HTML-Attribut `disabled`, bei dem die Angabe die `:disabled` Benutzeragentenstile angewendet werden, tut das Hinzufügen von `aria-disabled="true"` dies nicht. Das Element kann mit dem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` gestylt werden.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Wenn Sie das `aria-disabled` Attribut absichtlich verwenden, um einem Formularsteuerelement zu erlauben, in der Tastaturfokus-Reihenfolge der Seite zu bleiben, insbesondere wenn das Element wichtige Inhalte darstellt, die alle Benutzer wahrnehmen können sollten, dann müssen Sie möglicherweise Stile verwenden, die weiterhin die Anforderungen an den Farbkontrast erfüllen. Beispielsweise ist ein deaktiviertes Button/Überschrift, das ein nicht zusammenklappbares Akkordeon-Panel einführt, ein Inhalt, der weiterhin lesbar sein muss.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

Die [`forced-colors` Medienabfrage](/de/docs/Web/CSS/@media/forced-colors) erkennt, ob der {{Glossary("User_agent", "Benutzeragent")}} einen erzwungenen Farbenmodus aktiviert hat; wenn ja, werden sowohl die Text- als auch die Rahmenfarben auf die [Systemfarbe `greyText`](/de/docs/Web/CSS/system-color#syntax) gesetzt.

Ein weiterer Aspekt, den man beachten sollte, wenn man `aria-disabled` anstelle des nativen HTML-Attributs verwendet, ist, dass das ARIA-Attribut die manuelle Stilgestaltung erfordert, die notwendig ist, um das Element visuell als deaktiviert im Windows High Contrast Mode zu kommunizieren.

> [!NOTE]
> Wenn Sie CSS's [`pointer-events: none;`](/de/docs/Web/CSS/pointer-events) verwenden, um ein Element nicht anklickbar zu machen, stellen Sie sicher, dass Sie die Interaktivität auch mit JavaScript deaktivieren. `pointer-events: none;` verhindert Mausklicks, aber es verhindert nicht, dass das Element über die Tastatur aktiviert wird.

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

1. Den Wert auf `false` umzuschalten (oder das Attribut vollständig zu entfernen),
2. Das Element zu aktivieren, und
3. Dem Benutzer mitzuteilen, dass das Steuerelement jetzt aktiviert ist.

Wenn Sie nur CSS verwendet haben, um den deaktivierten Zustand mit einem Attributselektor zu stylen, wird der Selektor nicht mehr übereinstimmen und das Styling für den deaktivierten Zustand wird nicht mehr wirksam sein.

## Werte

- `true`

  - : Das Element ist deaktiviert

- `false`
  - : Das Element ist nicht deaktiviert

## Zugehörige Schnittstellen

- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, reflektiert den Wert des `aria-disabled` Attributs, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.
- [`ElementInternals.ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled)
  - : Die [`ariaDisabled`](/de/docs/Web/API/ElementInternals/ariaDisabled) Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle reflektiert den Wert des `aria-disabled` Attributs.

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
