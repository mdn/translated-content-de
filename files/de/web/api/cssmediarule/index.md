---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die **`CSSMediaRule`**-Schnittstelle repräsentiert eine einzelne CSS {{cssxref("@media")}}-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihren Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSMediaRule.media`](/de/docs/Web/API/CSSMediaRule/media) {{ReadOnlyInline}}
  - : Gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das beabsichtigte Zielmedium für Stilinformationen repräsentiert.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von ihren Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das folgende CSS enthält eine Medienabfrage mit einer Stilregel. Da diese Regel im zuletzt hinzugefügten Stylesheet des Dokuments lebt, wird sie die erste `CSSRule` sein, die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). `myRules[0]` gibt ein `CSSMediaRule`-Objekt zurück, von dem wir `mediaText` erhalten können.

```html
<p id="log"></p>
```

```css
@media (width >= 500px) {
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
