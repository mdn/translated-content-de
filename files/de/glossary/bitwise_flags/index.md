---
title: Bitwise flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Bitweise Flags** sind Sätze von Variablen, meist einfache Zahlenwerte, die verwendet werden können, um bestimmte Nutzungen oder Funktionen einer Methode oder einer anderen Code-Struktur zu aktivieren oder zu deaktivieren. Sie können dies schnell und effizient tun, weil sie auf Bit-Ebene arbeiten. Verwandte Flags in derselben Gruppe werden im Allgemeinen komplementäre Werte zugewiesen, die unterschiedliche Bit-Positionen in einem einzigen Wert (z.B. hexadezimal) darstellen, sodass mehrere Flag-Einstellungen durch einen einzigen Wert dargestellt werden können.

Zum Beispiel wird im [WebGPU API](/de/docs/Web/API/WebGPU_API) ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz mit der Methode [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Beim Aufruf dieser Methode definieren Sie eine `usage`-Eigenschaft im Deskriptor, die ein oder mehrere Flags enthält, die unterschiedliche erlaubte Nutzungen dieses Buffers aktivieren.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

Diese Werte sind innerhalb desselben Namespace definiert und jeder hat einen hexadezimalen Wert:

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

Wenn Sie die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage)-Eigenschaft abfragen, erhalten Sie eine einzelne dezimale Zahl, die die Summe der verschiedenen dezimalen Werte für die verschiedenen Nutzungs-Flags ist. Bei Rückkehr zum obigen Beispiel würde die Abfrage von `GPUBuffer.usage` für den `GPUBuffer`, der mit dem zuvor spezifizierten `usage` erstellt wurde, Folgendes zurückgeben:

- Dezimales Äquivalent von `GPUBufferUsage.COPY_SRC`, 4
- Hinzufügen des dezimalen Äquivalents von `GPUBufferUsage.MAP_WRITE`, 2
- Ergibt 6.

Aufgrund der gewählten Werte für die unterschiedlichen Flags ist jede Kombination von Werten einzigartig, sodass das Programm auf einen Blick erkennen kann, welche Flags aus einem einzigen Wert gesetzt sind. Darüber hinaus können Sie leicht testen, welche Flags im kombinierten Wert mit dem Bitweisen Und-Operator gesetzt sind:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer has MAP_WRITE usage
}
```

## Siehe auch

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitweise Operation](https://en.wikipedia.org/wiki/Bitwise_operation) auf Wikipedia
