---
title: "HTMLElement: translate-Eigenschaft"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

Die **`translate`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt an, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.

Sie spiegelt den Wert des globalen HTML-Attributs [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Übersetzung per Skript aktiviert oder deaktiviert wird:

```html
<div>
  <span>The content may always be translated: </span>
  <span translate="yes">El contenido será traducido</span>
</div>
<div>
  <span id="translate-label">The content may be translated:</span>
  <span id="translate-element" translate="no">
    El contenido puede ser traducido.
  </span>
</div>
<input id="translate-controller" type="checkbox" /> Enable translation
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "The content may be translated:";
  } else {
    element.translate = false;
    label.innerText = "The content may not be translated:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Globales HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
