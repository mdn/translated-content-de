---
title: "CompositionEvent: locale-Eigenschaft"
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Die **`locale`**-Eigenschaft des [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Interfaces gibt die Gebietsschema-Einstellung der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem {{Glossary("Input_method_editor", "Input method editor")}} verbunden ist).

> [!WARNING]
> Auch bei Browsern, die diese Funktion unterstützen, sollten Sie dem Wert in dieser Eigenschaft nicht vertrauen.
> Selbst wenn sie technisch zugänglich ist, ist die Art und Weise, wie sie beim Erstellen eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) eingerichtet wird,
> nicht garantiert kohärent.

## Wert

Ein String, der das Gebietsschema der aktuellen Eingabemethode darstellt.

## Spezifikationen

Diese Eigenschaft war in frühen Versionen verschiedener Spezifikationen enthalten. Sie wird jetzt nur noch aus Kompatibilitätsgründen beibehalten, und die Methode, wie der Wert beim Erstellen eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) festgelegt wird, ist [nicht gut definiert](https://github.com/w3c/uievents/issues/48).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
