---
title: "CompositionEvent: locale-Eigenschaft"
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

Die **`locale`** Schreibgeschützte Eigenschaft des
[`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Interfaces gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Gebietsschema des Tastaturlayouts, wenn die Eingabe mit einem [IME](/de/docs/Glossary/IME) assoziiert ist).

> [!WARNING]
> Selbst für Browser, die es unterstützen, sollten Sie dem in dieser Eigenschaft enthaltenen Wert nicht vertrauen.
> Auch wenn er technisch zugänglich ist, ist es nicht garantiert, dass die Einrichtung bei der Erstellung eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
> kohärent ist.

## Wert

Ein String, der das Gebietsschema der aktuellen Eingabemethode repräsentiert.

## Spezifikationen

Diese Eigenschaft war in frühen Versionen verschiedener Spezifikationen enthalten. Sie wird jetzt nur aus Kompatibilitätsgründen beibehalten, und die Methode, ihren Wert bei der Erstellung eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) festzulegen, ist [nicht gut definiert](https://github.com/w3c/uievents/issues/48).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
