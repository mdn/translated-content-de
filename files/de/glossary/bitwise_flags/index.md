---
title: Bitweise Flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Bitweise Flags** sind Sätze von Variablen, meistens einfache Zahlenwerte, die verwendet werden können, um bestimmte Verwendungen oder Funktionen einer Methode oder einer anderen Code-Struktur zu aktivieren oder zu deaktivieren. Sie können dies schnell und effizient tun, da sie auf Bit-Ebene arbeiten. Verwandte Flags in derselben Gruppe erhalten im Allgemeinen komplementäre Werte, die verschiedene Bitpositionen in einem einzelnen Wert (z. B. hexadezimal) darstellen, sodass mehrere Flag-Einstellungen durch einen einzigen Wert dargestellt werden können.

Ein Beispiel hierfür ist die [WebGPU API](/de/docs/Web/API/WebGPU_API), bei der ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt mit der Methode [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wird. Beim Aufruf dieser Methode definiert man eine `usage`-Eigenschaft im Deskriptor, die ein oder mehrere Flags enthält, die verschiedene zulässige Verwendungen dieses Puffers aktivieren.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

Diese Werte werden innerhalb desselben Namensraums definiert, und jeder hat einen hexadezimalen Wert:

| Nutzungs-Flag                  | Hexadezimale Darstellung | Dezimaläquivalent |
| ------------------------------ | ------------------------ | ----------------- |
| `GPUBufferUsage.MAP_READ`      | 0x0001                   | 1                 |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                   | 2                 |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                   | 4                 |
| `GPUBufferUsage.COPY_DST`      | 0x0008                   | 8                 |
| `GPUBufferUsage.INDEX`         | 0x0010                   | 16                |
| `GPUBufferUsage.VERTEX`        | 0x0020                   | 32                |
| `GPUBufferUsage.UNIFORM`       | 0x0040                   | 64                |
| `GPUBufferUsage.STORAGE`       | 0x0080                   | 128               |
| `GPUBufferUsage.INDIRECT`      | 0x0100                   | 256               |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                   | 512               |

Wenn Sie die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage)-Eigenschaft abfragen, erhalten Sie eine einzige Dezimalzahl zurück, die die Summe der verschiedenen Dezimalwerte für die verschiedenen Nutzungs-Flags ist. Bezogen auf das obige Beispiel würde die Abfrage von `GPUBuffer.usage` für das `GPUBuffer`, das mit der zuvor angegebenen Nutzung erstellt wurde, folgende Rückgabe liefern:

- Dezimaläquivalent von `GPUBufferUsage.COPY_SRC`, 4
- Hinzufügen des Dezimaläquivalents von `GPUBufferUsage.MAP_WRITE`, 2
- Ergibt 6.

Aufgrund der gewählten Werte für die verschiedenen Flags ist jede Kombination von Werten eindeutig, sodass das Programm auf einen Blick erkennen kann, welche Flags aus einem einzigen Wert gesetzt sind. Darüber hinaus können Sie mit dem bitweisen UND-Operator leicht testen, welche Flags im kombinierten Wert gesetzt sind:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer has MAP_WRITE usage
}
```

## Siehe auch

- [Bitweise Flags sind schön, und hier ist warum](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitweise Operation](https://en.wikipedia.org/wiki/Bitwise_operation) auf Wikipedia
