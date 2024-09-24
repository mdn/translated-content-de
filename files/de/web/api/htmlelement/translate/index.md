---
title: "HTMLElement: Eigenschaft translate"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 1442377111a1649dfce278eac688e06efce34b83
---

{{APIRef("HTML DOM")}}

Die **`translate`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces gibt an, ob die Attributwerte eines Elements und die Werte seiner {{domxref("Text")}}-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.

Sie spiegelt den Wert des [`translate`](/de/docs/Web/HTML/Global_attributes/translate) HTML-Globalattributs wider.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Attributwerte eines Elements und die Werte seiner {{domxref("Text")}}-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Übersetzung über ein Skript aktiviert oder deaktiviert werden kann:

```html
<div>
  <span>Der Inhalt darf immer übersetzt werden: </span>
  <span translate="yes">El contenido será traducido</span>
</div>
<div>
  <span id="translate-label">Der Inhalt darf übersetzt werden:</span>
  <span id="translate-element" translate="no">El contenido puede ser traducido.</span>
</div>
<input id="translate-controller" type="checkbox" /> Übersetzung aktivieren
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "Der Inhalt darf übersetzt werden:";
  } else {
    element.translate = false;
    label.innerText = "Der Inhalt darf nicht übersetzt werden:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`translate`](/de/docs/Web/HTML/Global_attributes#translate) HTML-Globalattribut
