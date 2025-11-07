---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die **`CSSCounterStyleRule`** Schnittstelle repräsentiert eine {{CSSxRef("@counter-style")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSCounterStyleRule.name`](/de/docs/Web/API/CSSCounterStyleRule/name)
  - : Ein String, der die Serialisierung des {{CSSxRef("&lt;custom-ident&gt;")}} enthält, der als `name` für die zugehörige Regel definiert ist.
- [`CSSCounterStyleRule.system`](/de/docs/Web/API/CSSCounterStyleRule/system)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/system", "system")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.symbols`](/de/docs/Web/API/CSSCounterStyleRule/symbols)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/symbols", "symbols")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.additiveSymbols`](/de/docs/Web/API/CSSCounterStyleRule/additiveSymbols)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.negative`](/de/docs/Web/API/CSSCounterStyleRule/negative)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/negative", "negative")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.prefix`](/de/docs/Web/API/CSSCounterStyleRule/prefix)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/prefix", "prefix")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.suffix`](/de/docs/Web/API/CSSCounterStyleRule/suffix)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/suffix", "suffix")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.range`](/de/docs/Web/API/CSSCounterStyleRule/range)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/range", "range")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.pad`](/de/docs/Web/API/CSSCounterStyleRule/pad)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/pad", "pad")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.speakAs`](/de/docs/Web/API/CSSCounterStyleRule/speakAs)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/speak-as", "speak-as")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.fallback`](/de/docs/Web/API/CSSCounterStyleRule/fallback)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/fallback", "fallback")}} Deskriptors enthält, der für die zugehörige Regel definiert ist. Wenn der Deskriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifische Methode, erbt jedoch Methoden von ihrem übergeordneten [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@counter-style")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Anleitung
