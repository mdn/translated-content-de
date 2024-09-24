---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSKeywordValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren.

Der Instanzname des Interfaces ist ein {{Glossary("stringifier")}}, was bedeutet, dass, wenn es an einer Stelle verwendet wird, an der ein String erwartet wird, der Wert von `CSSKeyword.value` zurückgegeben wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}}
  - : Erstellt ein neues `CSSKeywordValue` Objekt.

## Instanzeigenschaften

- {{domxref('CSSKeywordValue.value')}}
  - : Gibt den Wert des `CSSKeywordValue` zurück oder setzt ihn.

## Instanzmethoden

_Erbt Methoden von {{domxref('CSSStyleValue')}}._

## Beispiele

Das folgende Beispiel setzt die CSS-{{cssxref('display')}}-Eigenschaft auf ihre Standardwerte zurück und legt das Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) auf `style="display: initial"` fest, wenn es im [Entwickler-Tools-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) betrachtet wird.

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  Überprüfen Sie die Entwickler-Tools, um das Protokoll in der Konsole zu sehen und das
  style-Attribut in diesem div zu inspizieren.
</div>
```

```js
let myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", new CSSKeywordValue("initial"));

console.log(myElement.get("display").value); // 'initial'
```

{{EmbedLiveSample("Examples", 120, 120)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref('CSSImageValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
