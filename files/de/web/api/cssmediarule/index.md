---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("CSSOM") }}

Die **`CSSMediaRule`** Schnittstelle repräsentiert eine einzelne CSS-{{cssxref("@media")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSMediaRule.media`](/de/docs/Web/API/CSSMediaRule/media) {{ReadOnlyInline}}
  - : Gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das vorgesehene Zielmedium für Stilinformationen repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das folgende CSS enthält eine Media Query mit einer Stilregel.
Da diese Regel im letzten hinzugefügten Stylesheet des Dokuments enthalten ist, wird sie die erste `CSSRule` sein, die vom letzten Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird.
`myRules[0]` gibt ein `CSSMediaRule`-Objekt zurück, aus dem wir das `mediaText` erhalten können.

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
