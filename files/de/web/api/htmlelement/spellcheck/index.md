---
title: "HTMLElement: spellcheck-Eigenschaft"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}

Die **`spellcheck`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert einen booleschen Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Sie ist auf allen HTML-Elementen verfügbar, obwohl sie nicht alle betrifft.

Sie spiegelt den Wert des globalen HTML-Attributs [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Rechtschreibung und Grammatik des Textinhalts im Element geprüft werden können, ansonsten `false`.

## Beispiele

Das folgende Beispiel zeigt, wie man den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) über ein Skript steuert:

```html
<div>
  <span id="sc-label">The spelling and grammar may be checked: </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input id="sc-controller" type="checkbox" checked />Enable spelling and grammar
check
```

```js
const label = document.getElementById("sc-label");
const element = document.getElementById("sc-element");
const controller = document.getElementById("sc-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "The spelling and grammar may be checked: ";
  } else {
    element.spellcheck = false;
    label.innerText = "The spelling and grammar may not be checked: ";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

Beachten Sie, dass Sie die Browsereinstellung zur Prüfung von Rechtschreibung und Grammatik aktivieren müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) globales HTML-Attribut
