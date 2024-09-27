---
title: "PannerNode: Eigenschaft maxDistance"
short-title: maxDistance
slug: Web/API/PannerNode/maxDistance
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `maxDistance` des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein Doppelwert, der die maximale Entfernung zwischen der Audioquelle und dem Zuhörer darstellt. Nach dieser Entfernung wird die Lautstärke nicht weiter reduziert. Dieser Wert wird nur vom `linear` Distanzmodell verwendet.

Der Standardwert der Eigenschaft `maxDistance` ist `10000`.

## Wert

Ein Doppelwert. Der Standardwert ist `10000`, und nicht positive Werte sind nicht erlaubt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
