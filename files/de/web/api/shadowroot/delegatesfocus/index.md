---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 04f132184ce50bea94aee4dacafd5c110170cf60
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`delegatesFocus`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn das Shadow-Root den Fokus delegiert, und `false` andernfalls.

Wenn `true`, wird beim Klicken auf einen nicht fokussierbaren Teil des Shadow DOMs oder beim Aufrufen von `.focus()` auf das Host-Element der erste fokussierbare Teil innerhalb des Shadow DOMs des Hosts fokussiert, und der Shadow-Host erhält jegliche verfügbare `:focus`-Stilgestaltung.

Fokus ist von besonderer Bedeutung für Tastaturnutzer (einschließlich derjenigen, die Bildschirmlesegeräte verwenden). Das Standardverhalten von `delegatesFocus` ist, das erste fokussierbare Element zu fokussieren – was unerwünscht sein kann, wenn dieses Element nicht Teil der Tabulatorreihenfolge sein soll (zum Beispiel ein Element mit `tabindex="-1"`), oder wenn ein wichtigeres fokussierbares Element anfänglich den Fokus erhalten sollte (zum Beispiel das erste Textfeld statt des "Schließen"-Buttons davor). In solchen Fällen kann das `autofocus`-Attribut auf dem Element angegeben werden, das den anfänglichen Fokus erhalten soll. Verwenden Sie das `autofocus`-Attribut mit Vorsicht, da es Barrierefreiheitsprobleme verursachen kann, z. B. das Übergehen wichtiger Inhalte, die unbemerkt bleiben, weil der Fokus auf ein Element später in der DOM-Reihenfolge gesetzt wird.

Der Eigenschaftswert wird ursprünglich mit der `delegatesFocus`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mit dem [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des [`<template>`](/de/docs/Web/HTML/Element/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

`true`, wenn das Shadow-Root den Fokus delegiert, und `false` andernfalls.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

Das Beispiel [Deklaratives Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Element/template#declarative_shadow_dom_with_delegated_focus) in der `<template>`-Dokumentation demonstriert die Effekte der Fokusdelegierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
