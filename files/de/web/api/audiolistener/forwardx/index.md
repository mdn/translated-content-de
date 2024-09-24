---
title: "AudioListener: forwardX-Eigenschaft"
short-title: forwardX
slug: Web/API/AudioListener/forwardX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardX` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das den x-Wert des Richtungsvektors repräsentiert, welcher die Vorwärtsrichtung bestimmt, in die der Hörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "panningModel")}} auf equalpower eingestellt ist, oder _k-rate_ anderweitig.

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist 0 und er kann zwischen positivem und negativem Unendlich reichen.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
