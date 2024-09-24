---
title: "HTMLElement: spellcheck-Eigenschaft"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
l10n:
  sourceCommit: b39037d337dc89b86229e862f2f3f1e66000d281
---

{{APIRef("HTML DOM")}}

Die **`spellcheck`**-Eigenschaft des {{domxref("HTMLElement")}} Interfaces repräsentiert einen booleschen Wert, der den Hinweis für die [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Sie ist bei allen HTML-Elementen verfügbar, beeinflusst jedoch nicht alle von ihnen.

Sie spiegelt den Wert des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) HTML Global-Attributs wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Rechtschreibung und Grammatik des Textinhalts im Element überprüft werden können, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hinweis für die [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) über ein Skript gesteuert werden kann:

```html
<div>
  <span id="sc-label">Die Rechtschreibung und Grammatik können überprüft werden: </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input id="sc-controller" type="checkbox" checked />Rechtschreibung und Grammatik aktivieren
```

```js
const label = document.getElementById("sc-label");
const element = document.getElementById("sc-element");
const controller = document.getElementById("sc-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "Die Rechtschreibung und Grammatik können überprüft werden: ";
  } else {
    element.spellcheck = false;
    label.innerText = "Die Rechtschreibung und Grammatik können nicht überprüft werden: ";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

Beachten Sie, dass Sie die Browsereinstellung zur Überprüfung der Rechtschreibung und Grammatik aktivieren müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck) HTML Global-Attribut
