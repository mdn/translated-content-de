---
title: Streaming von Audio und Video
slug: Web/Media/Guides/Streaming
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

In diesem Leitfaden werden wir die Techniken untersuchen, die zum Streamen von Audio- und/oder Videomedien im Web verwendet werden, und wie Sie Ihren Code, Ihre Medien, Ihren Server und die von Ihnen verwendeten Optionen optimieren können, um die bestmögliche Qualität und Leistung zu erzielen.

## Protokolle

Zusätzlich zur Konfiguration des Servers und des Streaming-Codes gibt es manchmal spezielle Protokolle, die zur Leistungsoptimierung verwendet werden können.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) ist ein von Apple entwickeltes Protokoll, das von Safari auf all ihren Plattformen unterstützt wird. HLS wird möglicherweise auch in anderen Umgebungen unterstützt, obwohl in einigen Fällen diese Unterstützung bedingt ist.

Zum Beispiel unterstützt Firefox für Android HLS, da viele Websites mit mobil-spezifischen Inhalten davon ausgehen, dass mobile Browser HLS unterstützen. Dadurch können seltsame Kompatibilitätsfehler vermieden werden, die aufgrund dieser Annahme entstehen könnten. Die Desktop-Version von Firefox unterstützt HLS jedoch nicht.

HLS verwendet Playlists, damit der Benutzer nicht nur das zu streamende Medium auswählen, sondern auch zwischen verschiedenen Versionen oder Formen desselben Mediums wählen kann. Zum Beispiel ermöglicht HLS es dem Server, ein Video mit mehreren Audio-Streams zu streamen, aus denen der Benutzer auswählen kann, um seine eigene Sprache zu hören. Zusätzlich können Formen des Streams bereitgestellt werden, die für unterschiedliche Netzwerkbedingungen optimiert sind. Auf diese Weise können Live-Streams flexibel und hoch performant gestaltet werden.

Seit Mitte 2017 wurde HLS als {{RFC(8216)}} standardisiert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
