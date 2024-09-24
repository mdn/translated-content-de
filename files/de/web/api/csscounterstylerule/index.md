---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("CSS Counter Styles")}}

Die **`CSSCounterStyleRule`** Schnittstelle repräsentiert eine {{CSSxRef("@counter-style")}} [at-rule](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{DOMxRef("CSSRule")}}._

- {{DOMxRef("CSSCounterStyleRule.name")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("&lt;custom-ident&gt;")}} enthält, der als `name` für die zugehörige Regel definiert ist.
- {{DOMxRef("CSSCounterStyleRule.system")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/system", "system")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.symbols")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/symbols", "symbols")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.additiveSymbols")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.negative")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/negative", "negative")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.prefix")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/prefix", "prefix")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.suffix")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/suffix", "suffix")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.range")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/range", "range")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.pad")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/pad", "pad")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.speakAs")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/speak-as", "speak-as")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- {{DOMxRef("CSSCounterStyleRule.fallback")}}
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/fallback", "fallback")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil {{DOMxRef("CSSRule")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@counter-style")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
