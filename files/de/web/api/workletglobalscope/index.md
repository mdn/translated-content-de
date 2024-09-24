---
title: WorkletGlobalScope
slug: Web/API/WorkletGlobalScope
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`WorkletGlobalScope`**-Schnittstelle ist eine abstrakte Klasse, von der spezifische Worklet-Scope-Klassen erben. Jeder `WorkletGlobalScope` definiert eine neue globale Umgebung.

> [!NOTE]
> Sie müssen normalerweise nicht mit dieser Schnittstelle interagieren. Es ist eine Basisschnittstelle, die dazu bestimmt ist, unterklassenfähig zu sein. Sie werden auf die Unterklassen {{domxref("AudioWorkletGlobalScope")}} innerhalb von {{domxref("AudioWorklet")}}-Objekten oder {{domxref("PaintWorkletGlobalScope")}} innerhalb von CSS-Paint-{{domxref("Worklet")}}-Objekten stoßen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AudioWorkletGlobalScope")}}
- {{domxref("PaintWorkletGlobalScope")}}
