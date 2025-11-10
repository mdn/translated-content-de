---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{ APIRef("CSSOM") }}

Das **`CSSMediaRule`**-Interface repräsentiert eine einzelne CSS {{cssxref("@media")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSMediaRule.media`](/de/docs/Web/API/CSSMediaRule/media) {{ReadOnlyInline}}
  - : Gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das beabsichtigte Zielmedium für Stilinformationen repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das untenstehende CSS enthält eine Media-Abfrage mit einer Stilregel.
Die MDN [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`. Daher verwenden wir zunächst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Blatt zu finden.
`myRules[0]` gibt ein `CSSMediaRule`-Objekt zurück, aus dem wir den `mediaText` erhalten können.

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
const myRules = document.getElementById("css-output").sheet.cssRules;
const mediaList = myRules[0]; // a CSSMediaRule representing the media query.
log.textContent += ` ${mediaList.media.mediaText}`;
```

{{EmbedLiveSample("Examples","100%","50px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
