---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`delegatesFocus`**-Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt `true` zurück, wenn der Shadow-Root den Fokus delegiert, und `false` andernfalls.

Wenn `true`, wird beim Klicken auf einen nicht fokussierbaren Teil des Shadow DOM oder wenn `.focus()` auf das Host-Element aufgerufen wird, der erste fokussierbare Teil fokussiert, und dem Shadow-Host wird jeder verfügbare `:focus`-Stil zugewiesen.

Fokus ist besonders wichtig für Tastaturnutzer (einschließlich derjenigen, die Bildschirmlesegeräte verwenden). Das Standardverhalten von `delegatesFocus` ist, das erste fokussierbare Element zu fokussieren — was unerwünscht sein kann, wenn dieses Element nicht Teil der Tabulatorreihenfolge sein soll (zum Beispiel ein Element mit `tabindex="-1"`), oder wenn ein 'wichtigeres' fokussierbares Element den anfänglichen Fokus erhalten soll (zum Beispiel das erste Textfeld anstelle des 'Schließen'-Buttons, der ihm vorhergeht). In solchen Fällen kann das `autofocus`-Attribut auf dem Element angegeben werden, das den anfänglichen Fokus erhalten soll. Verwenden Sie das `autofocus`-Attribut mit Vorsicht, da es Barrierefreiheitsprobleme verursachen kann, wie zum Beispiel das Überspringen wichtiger Inhalte, die möglicherweise unbemerkt bleiben, weil der Fokus auf ein Element später in der DOM-Reihenfolge gesetzt wird.

Der Wert der Eigenschaft wird ursprünglich mit der `delegatesFocus`-Eigenschaft des Objekts festgelegt, das an {{domxref("Element.attachShadow()")}} übergeben wird, oder durch das [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des [`<template>`](/de/docs/Web/HTML/Element/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

`true`, wenn der Shadow-Root den Fokus delegiert, und `false` andernfalls.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Delegiert es den Fokus?
let hostElem = shadow.delegatesFocus;
```

Das [Deklarative Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Element/template#declarative_shadow_dom_with_delegated_focus)-Beispiel in der `<template>`-Dokumentation zeigt die Auswirkungen der Fokussierung durch Delegation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
