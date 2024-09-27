---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("CSS Counter Styles")}}

Die **`CSSCounterStyleRule`**-Schnittstelle repräsentiert eine {{CSSxRef("@counter-style")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSCounterStyleRule.name`](/de/docs/Web/API/CSSCounterStyleRule/name)
  - : Ein String, der die Serialisierung des als `name` definierten {{CSSxRef("&lt;custom-ident&gt;")}} für die zugehörige Regel enthält.
- [`CSSCounterStyleRule.system`](/de/docs/Web/API/CSSCounterStyleRule/system)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/system", "system")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.symbols`](/de/docs/Web/API/CSSCounterStyleRule/symbols)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/symbols", "symbols")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.additiveSymbols`](/de/docs/Web/API/CSSCounterStyleRule/additiveSymbols)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.negative`](/de/docs/Web/API/CSSCounterStyleRule/negative)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/negative", "negative")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.prefix`](/de/docs/Web/API/CSSCounterStyleRule/prefix)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/prefix", "prefix")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.suffix`](/de/docs/Web/API/CSSCounterStyleRule/suffix)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/suffix", "suffix")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.range`](/de/docs/Web/API/CSSCounterStyleRule/range)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/range", "range")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.pad`](/de/docs/Web/API/CSSCounterStyleRule/pad)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/pad", "pad")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.speakAs`](/de/docs/Web/API/CSSCounterStyleRule/speakAs)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/speak-as", "speak-as")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.fallback`](/de/docs/Web/API/CSSCounterStyleRule/fallback)
  - : Ein String, der die Serialisierung des für die zugehörige Regel definierten {{CSSxRef("@counter-style/fallback", "fallback")}} Deskriptors enthält. Wenn der Deskriptor in der zugehörigen Regel nicht spezifiziert wurde, gibt das Attribut einen leeren String zurück.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifische Methode, erbt jedoch Methoden von ihrem übergeordneten [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@counter-style")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
