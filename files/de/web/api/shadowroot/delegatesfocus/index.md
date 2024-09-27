---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die **`delegatesFocus`** Leseeigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn der Shadow-Root den Fokus delegiert, und `false` andernfalls.

Wenn `true`, erhält der erste fokussierbare Teil den Fokus, wenn auf einen nicht fokussierbaren Teil des Shadow DOM geklickt wird oder `.focus()` auf dem Host-Element aufgerufen wird. Der Shadow-Host erhält dann jegliche verfügbare `:focus`-Stilierung.

Fokus ist von besonderer Bedeutung für Benutzer, die die Tastatur verwenden (einschließlich derjenigen, die Bildschirmlesegeräte benutzen). Das Standardverhalten von `delegatesFocus` ist es, das erste fokussierbare Element in den Fokus zu setzen – was unerwünscht sein kann, wenn dieses Element nicht Teil der Tab-Reihenfolge sein soll (zum Beispiel ein Element mit `tabindex="-1"`) oder wenn ein wichtigeres fokussierbares Element den initialen Fokus erhalten sollte (zum Beispiel das erste Textfeld statt des vorangestellten Schließen-Buttons). In solchen Fällen kann das `autofocus`-Attribut auf dem Element spezifiziert werden, welches den initialen Fokus erhalten soll. Verwenden Sie das `autofocus`-Attribut mit Vorsicht, da es Barrierefreiheitsprobleme verursachen kann, wie zum Beispiel das Überspringen wichtiger Inhalte, die übersehen werden könnten, weil der Fokus auf ein Element gesetzt wird, das später in der DOM-Reihenfolge erscheint.

Der Wert der Eigenschaft wird ursprünglich mithilfe der `delegatesFocus`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mithilfe des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des [`<template>`](/de/docs/Web/HTML/Element/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

`true` wenn der Shadow-Root den Fokus delegiert, und `false` andernfalls.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

Das Beispiel [Deklaratives Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Element/template#declarative_shadow_dom_with_delegated_focus) in der `<template>`-Dokumentation zeigt die Effekte des Fokus-Delegierens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
