---
title: "CompositionEvent: locale-Eigenschaft"
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

Die **`locale`**-Eigenschaft der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das Gebietsschema der aktuellen Eingabemethode zurückgibt (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem {{Glossary("IME", "IME")}} verbunden ist).

> [!WARNING]
> Selbst für Browser, die es unterstützen, sollten Sie den Wert, der in dieser Eigenschaft enthalten ist, nicht vertrauen.
> Auch wenn er technisch zugänglich ist, ist die Art und Weise, wie er bei der Erstellung eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) festgelegt wird, nicht garantiert konsistent.

## Wert

Ein Zeichenfolgenwert, der das Gebietsschema der aktuellen Eingabemethode darstellt.

## Spezifikationen

Diese Eigenschaft war in frühen Versionen verschiedener Spezifikationen enthalten. Sie wird jetzt nur aus Kompatibilitätsgründen beibehalten, und die Methode, ihren Wert bei der Erstellung eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) festzulegen, ist [nicht gut definiert](https://github.com/w3c/uievents/issues/48).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
