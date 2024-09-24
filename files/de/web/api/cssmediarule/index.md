---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("CSSOM") }}

Die **`CSSMediaRule`**-Schnittstelle repräsentiert eine einzelne CSS-{{cssxref("@media")}}-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

- {{domxref("CSSMediaRule.media")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("MediaList")}} zurück, die das beabsichtigte Zielmedium für Stilinformationen darstellt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

## Beispiele

Das untenstehende CSS enthält eine Medienabfrage mit einer Stilregel.
Da diese Regel in dem zuletzt zum Dokument hinzugefügten Stylesheet lebt, wird sie die erste CSS-Regel sein, die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`).
`myRules[0]` gibt ein `CSSMediaRule`-Objekt zurück, von dem wir den `mediaText` erhalten können.

```html
<p id="log"></p>
```

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
const log = document.getElementById("log");
const myRules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const mediaList = myRules[0]; // a CSSMediaRule representing the media query.
log.textContent += ` ${mediaList.media.mediaText}`;
```

{{EmbedLiveSample("Examples","100%","50px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
