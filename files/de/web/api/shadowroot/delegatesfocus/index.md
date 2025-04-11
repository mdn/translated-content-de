---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die **`delegatesFocus`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt `true` zurück, wenn der Shadow-Root den Fokus delegiert, und `false`, wenn nicht.

Wenn `true`, wird beim Klicken auf einen nicht fokussierbaren Bereich des Shadow DOM oder bei Aufruf von `.focus()` auf das Host-Element, der erste fokussierbare Teil innerhalb des Shadow DOM des Hosts fokussiert und der Shadow-Host erhält jegliches verfügbare `:focus`-Styling.

Der Fokus ist besonders wichtig für Tastaturbenutzer (einschließlich derjenigen, die Screenreader verwenden). Das Standardverhalten von `delegatesFocus` ist es, das erste fokussierbare Element zu fokussieren – was unerwünscht sein kann, wenn dieses Element nicht Teil der Tab-Reihenfolge sein soll (zum Beispiel ein Element mit `tabindex="-1"`) oder wenn ein 'wichtigeres' fokussierbares Element den initialen Fokus erhalten sollte (zum Beispiel das erste Textfeld anstatt des vorangestellten 'Schließen'-Buttons). In solchen Fällen kann das `autofocus`-Attribut auf das Element gesetzt werden, welches den initialen Fokus erhalten soll. Das `autofocus`-Attribut sollte mit Vorsicht verwendet werden, da es Barrierefreiheitsprobleme verursachen kann, wie zum Beispiel das Umgehen wichtiger Inhalte, die aufgrund des gesetzten Fokus auf ein später im DOM angeordnetes Element unbemerkt bleiben könnten.

Der Eigenschaftswert wird ursprünglich durch die `delegatesFocus`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder durch das [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attribut des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

`true`, wenn der Shadow-Root den Fokus delegiert, andernfalls `false`.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

Das Beispiel [Deklaratives Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom_with_delegated_focus) in der `<template>`-Dokumentation demonstriert die Effekte des Fokusdelegierens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
