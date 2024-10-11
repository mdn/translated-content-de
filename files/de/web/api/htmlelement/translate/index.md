---
title: "HTMLElement: translate Eigenschaft"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}

Die **`translate`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt an, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt werden sollen oder ob sie unverändert bleiben.

Sie spiegelt den Wert des [`translate`](/de/docs/Web/HTML/Global_attributes/translate) globalen HTML-Attributs wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt werden sollen, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Übersetzung über Skript aktiviert oder deaktiviert wird:

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

- [`translate`](/de/docs/Web/HTML/Global_attributes/translate) globales HTML-Attribut
