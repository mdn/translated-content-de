---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft **`delegatesFocus`** des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt `true` zurück, wenn der Shadow Root den Fokus delegiert, und `false`, andernfalls.

Wenn `true`, erhält der erste fokussierbare Teil den Fokus, wenn ein nicht fokussierbarer Teil des Shadow DOMs angeklickt wird oder `.focus()` auf das Host-Element aufgerufen wird, und der Shadow Host erhält das verfügbare `:focus`-Styling.

Der Fokus ist besonders wichtig für Tastaturbenutzer (einschließlich derjenigen, die Bildschirmleseprogramme verwenden). Das Standardverhalten von `delegatesFocus` besteht darin, das erste fokussierbare Element zu fokussieren — dies kann unerwünscht sein, wenn dieses Element nicht Teil der Tab-Reihenfolge sein soll (zum Beispiel ein Element mit `tabindex="-1"`), oder wenn ein 'wichtigeres' fokussierbares Element den ersten Fokus erhalten sollte (zum Beispiel das erste Textfeld statt der 'Schließen'-Schaltfläche, die ihm vorausgeht). In solchen Fällen kann das `autofocus`-Attribut auf dem Element angegeben werden, das den ersten Fokus erhalten soll. Verwenden Sie das `autofocus`-Attribut mit Vorsicht, da es Barrierefreiheitsprobleme einführen kann, wie z.B. das Überspringen wichtiger Inhalte, die möglicherweise unbemerkt bleiben, da der Fokus auf ein später in der DOM-Reihenfolge liegendes Element gesetzt wird.

Der Eigenschaftswert wird ursprünglich mit der `delegatesFocus`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder mit dem [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des [`<template>`](/de/docs/Web/HTML/Element/template)-Elements, wenn ein Shadow Root deklarativ erstellt wird.

## Wert

`true`, wenn der Shadow Root den Fokus delegiert, und `false`, andernfalls.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

Das Beispiel [Deklaratives Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Element/template#declarative_shadow_dom_with_delegated_focus) in der `<template>`-Dokumentation veranschaulicht die Auswirkungen der Fokussierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
