---
title: "CompositionEvent: locale-Eigenschaft"
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: cede06423af0242a18670246e1b25562d21c0004
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

Die **`locale`**-Schreibgeschützte Eigenschaft des
[`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Interfaces gibt das Gebietsschema der aktuellen Eingabemethode zurück
(zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem {{Glossary("Input_method_editor", "Input Method Editor")}} verbunden ist).

> [!WARNING]
> Selbst bei Browsern, die es unterstützen, sollten Sie dem Wert, der in dieser Eigenschaft enthalten ist, nicht vertrauen.
> Auch wenn er technisch zugänglich ist, ist die Methode, ihn beim Erstellen eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
> festzulegen, nicht garantiert kohärent.

## Wert

Ein String, der das Gebietsschema der aktuellen Eingabemethode darstellt.

## Spezifikationen

Diese Eigenschaft war in frühen Versionen verschiedener Spezifikationen enthalten. Sie wird jetzt nur aus Kompatibilitätsgründen beibehalten, und die Methode,
ihren Wert beim Erstellen eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) festzulegen, ist [nicht gut definiert](https://github.com/w3c/uievents/issues/48).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
