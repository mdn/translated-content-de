---
title: "CompositionEvent: locale-Eigenschaft"
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

Die **`locale`**-Schreibgeschützte Eigenschaft der
{{domxref("CompositionEvent")}}-Schnittstelle gibt das Gebietsschema der aktuellen Eingabemethode zurück
(zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem {{glossary("IME")}} verbunden ist).

> [!WARNING]
> Selbst bei Browsern, die dies unterstützen, sollten Sie dem Wert in dieser Eigenschaft nicht vertrauen.
> Auch wenn er technisch zugänglich ist, ist die Einrichtung beim Erstellen eines {{domxref("CompositionEvent")}}
> nicht zwingend konsistent.

## Wert

Ein String, der das Gebietsschema der aktuellen Eingabemethode darstellt.

## Spezifikationen

Diese Eigenschaft war in frühen Versionen verschiedener Spezifikationen enthalten. Sie wird jetzt nur noch aus Kompatibilitätsgründen beibehalten, und die Art und Weise,
wie ihr Wert bei der Erstellung eines {{domxref("CompositionEvent")}} festgelegt werden kann, ist [nicht gut definiert](https://github.com/w3c/uievents/issues/48).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CompositionEvent")}}
