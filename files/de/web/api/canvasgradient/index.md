---
title: CanvasGradient
slug: Web/API/CanvasGradient
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`CanvasGradient`**-Interface repräsentiert ein [opakes Objekt](https://en.wikipedia.org/wiki/Opaque_data_type), das einen Verlauf beschreibt. Es wird durch die Methoden {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}, {{domxref("CanvasRenderingContext2D.createConicGradient()")}} oder {{domxref("CanvasRenderingContext2D.createRadialGradient()")}} zurückgegeben.

Es kann als {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} verwendet werden.

## Instanz-Eigenschaften

_Als opakes Objekt gibt es keine offengelegten Eigenschaften._

## Instanz-Methoden

- {{domxref("CanvasGradient.addColorStop()")}}
  - : Fügt dem Verlauf einen neuen Stopp hinzu, der durch einen `offset` und eine `color` definiert ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Erstellmethoden in {{domxref("CanvasRenderingContext2D")}}.
- Das {{HTMLElement("canvas")}}-Element und sein zugehöriges Interface, {{domxref("HTMLCanvasElement")}}.
