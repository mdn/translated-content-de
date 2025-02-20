---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die Schnittstelle **`CSSCounterStyleRule`** repräsentiert eine {{CSSxRef("@counter-style")}}- [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSCounterStyleRule.name`](/de/docs/Web/API/CSSCounterStyleRule/name)
  - : Ein String, der die Serialisierung des {{CSSxRef("&lt;custom-ident&gt;")}} enthält, das als `name` für die zugehörige Regel definiert wurde.
- [`CSSCounterStyleRule.system`](/de/docs/Web/API/CSSCounterStyleRule/system)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/system", "system")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.symbols`](/de/docs/Web/API/CSSCounterStyleRule/symbols)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/symbols", "symbols")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.additiveSymbols`](/de/docs/Web/API/CSSCounterStyleRule/additiveSymbols)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.negative`](/de/docs/Web/API/CSSCounterStyleRule/negative)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/negative", "negative")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.prefix`](/de/docs/Web/API/CSSCounterStyleRule/prefix)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/prefix", "prefix")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.suffix`](/de/docs/Web/API/CSSCounterStyleRule/suffix)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/suffix", "suffix")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.range`](/de/docs/Web/API/CSSCounterStyleRule/range)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/range", "range")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.pad`](/de/docs/Web/API/CSSCounterStyleRule/pad)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/pad", "pad")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.speakAs`](/de/docs/Web/API/CSSCounterStyleRule/speakAs)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/speak-as", "speak-as")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.
- [`CSSCounterStyleRule.fallback`](/de/docs/Web/API/CSSCounterStyleRule/fallback)
  - : Ein String, der die Serialisierung des {{CSSxRef("@counter-style/fallback", "fallback")}}-Descriptors enthält, der für die zugehörige Regel definiert wurde. Wenn der Descriptor in der zugehörigen Regel nicht angegeben wurde, gibt das Attribut einen leeren String zurück.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@counter-style")}}
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Leitfaden
