---
title: "ShadowRoot: delegatesFocus-Eigenschaft"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`delegatesFocus`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle gibt `true` zurück, wenn das Shadow Root den Fokus delegiert, und `false` andernfalls.

Wenn `true`, wird der erste fokussierbare Teil innerhalb des Shadow DOM des Hosts fokussiert, wenn ein nicht fokussierbarer Teil des Shadow DOM angeklickt wird oder `.focus()` auf das Host-Element aufgerufen wird, und der Shadow Host erhält jegliche verfügbare `:focus`-Stilisierung.

Der Fokus ist insbesondere für Tastaturnutzer (einschließlich derjenigen, die Bildschirmleser verwenden) von Bedeutung. Das Standardverhalten von `delegatesFocus` ist, das erste fokussierbare Element zu fokussieren – was unerwünscht sein kann, wenn dieses Element nicht Teil der Tabulatorreihenfolge sein soll (z. B. ein Element mit `tabindex="-1"`), oder wenn ein wichtigeres fokussierbares Element den initialen Fokus erhalten sollte (zum Beispiel das erste Textfeld anstelle des davor liegenden 'Schließen'-Buttons). In solchen Fällen kann das `autofocus`-Attribut auf dem Element angegeben werden, welches den initialen Fokus erhalten soll. Verwenden Sie das `autofocus`-Attribut mit Vorsicht, da es Barrierefreiheitsprobleme verursachen kann, wie das Übergehen wichtiger Inhalte, die unbemerkt bleiben können, wenn der Fokus auf ein später im DOM auftauchendes Element gesetzt wird.

Der Eigenschaftswert wird ursprünglich über die `delegatesFocus`-Eigenschaft des Objekts gesetzt, das an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben wird, oder durch das [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attribut des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements, wenn ein Shadow Root deklarativ erstellt wird.

## Wert

`true`, wenn das Shadow Root den Fokus delegiert, und `false` andernfalls.

## Beispiele

```js
const customElem = document.querySelector("my-shadow-dom-element");
const shadow = customElem.shadowRoot;

// …

// Does it delegate focus?
const hostElem = shadow.delegatesFocus;
```

Das Beispiel [Deklaratives Shadow DOM mit delegiertem Fokus](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom_with_delegated_focus) in der `<template>`-Dokumentation demonstriert die Auswirkungen des fokussierenden Delegierens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
