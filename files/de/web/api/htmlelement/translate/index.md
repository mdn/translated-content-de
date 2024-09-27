---
title: "HTMLElement: translate Eigenschaft"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 1442377111a1649dfce278eac688e06efce34b83
---

{{APIRef("HTML DOM")}}

Die **`translate`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces zeigt an, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder bei der Lokalisierung der Seite übersetzt werden sollen oder ob sie unverändert bleiben.

Sie spiegelt den Wert des globalen HTML-Attributs [`translate`](/de/docs/Web/HTML/Global_attributes/translate) wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder bei der Lokalisierung der Seite übersetzt werden sollen; andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Übersetzung mittels Skript aktiviert oder deaktiviert werden kann:

```html
<div>
  <span>The content may always be translated: </span>
  <span translate="yes">El contenido será traducido</div>
</div>
<div>
  <span id="translate-label">The content may be translated:</span>
  <span id="translate-element" translate="no">El contenido puede ser traducido.</div>
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

- [`translate`](/de/docs/Web/HTML/Global_attributes#translate) globales HTML-Attribut
