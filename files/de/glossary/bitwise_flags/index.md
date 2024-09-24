---
title: Bitweise Flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Bitweise Flags** sind Sätze von Variablen, in der Regel einfache Zahlenwerte, die verwendet werden können, um spezifische Nutzungen oder Funktionen einer Methode oder einer anderen Code-Struktur zu aktivieren oder zu deaktivieren. Sie können dies schnell und effizient tun, da sie auf Bit-Ebene operieren. Zusammengehörige Flags in derselben Gruppe erhalten in der Regel komplementäre Werte, die unterschiedliche Bit-Positionen in einem einzelnen Wert (z.B. hexadezimal) darstellen, sodass mehrere Flag-Einstellungen durch einen einzigen Wert dargestellt werden können.

Zum Beispiel wird im {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} ein {{domxref("GPUBuffer")}} Objektinstanz mit der {{domxref("GPUDevice.createBuffer()")}} Methode erstellt. Bei Aufruf dieser Methode definieren Sie eine `usage`-Eigenschaft im Deskriptor, die ein oder mehrere Flags enthält, die unterschiedliche erlaubte Nutzungen dieses Puffers aktivieren.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

Diese Werte sind innerhalb desselben Namespace definiert, und jeder hat einen hexadezimalen Wert:

| Nutzungsflag                   | Hexadezimale Darstellung   | Dezimaläquivalent  |
| ------------------------------ | -------------------------- | ------------------ |
| `GPUBufferUsage.MAP_READ`      | 0x0001                     | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                     | 2                  |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                     | 4                  |
| `GPUBufferUsage.COPY_DST`      | 0x0008                     | 8                  |
| `GPUBufferUsage.INDEX`         | 0x0010                     | 16                 |
| `GPUBufferUsage.VERTEX`        | 0x0020                     | 32                 |
| `GPUBufferUsage.UNIFORM`       | 0x0040                     | 64                 |
| `GPUBufferUsage.STORAGE`       | 0x0080                     | 128                |
| `GPUBufferUsage.INDIRECT`      | 0x0100                     | 256                |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                     | 512                |

Wenn Sie die {{domxref("GPUBuffer.usage")}} Eigenschaft abfragen, erhalten Sie eine einzelne dezimale Zahl zurück, die die Summe der unterschiedlichen Dezimalwerte für die verschiedenen Nutzungsflags ist. Zurückgehend auf das obige Beispiel würde das Abfragen von `GPUBuffer.usage` für den `GPUBuffer`, der mit der vorher spezifizierten Nutzung erstellt wurde, Folgendes zurückgeben:

- Dezimaläquivalent von `GPUBufferUsage.COPY_SRC`, 4
- Hinzufügen des Dezimaläquivalents von `GPUBufferUsage.MAP_WRITE`, 2
- Ergibt 6.

Aufgrund der gewählten Werte für die verschiedenen Flags ist jede Kombination von Werten einzigartig, sodass das Programm auf einen Blick feststellen kann, welche Flags von einem einzelnen Wert gesetzt sind. Außerdem können Sie leicht testen, welche Flags im kombinierten Wert gesetzt sind, indem Sie den bitweisen Und-Operator verwenden:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer hat MAP_WRITE Nutzung
}
```

## Siehe auch

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitweise Operation](https://en.wikipedia.org/wiki/Bitwise_operation) auf Wikipedia
