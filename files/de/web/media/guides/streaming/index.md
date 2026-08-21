---
title: Streaming von Audio und Video
slug: Web/Media/Guides/Streaming
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

In diesem Leitfaden werden wir die Techniken untersuchen, die verwendet werden, um Audio- und/oder Videomedien im Web zu streamen, und wie Sie Ihren Code, Ihre Medien, Ihren Server und die Optionen beim Streaming optimieren können, um die bestmögliche Qualität und Leistung zu erzielen.

## Protokolle

Zusätzlich zur Konfiguration des Servers und des Streaming-Codes gibt es manchmal spezielle Protokolle, die zur Optimierung der Leistung verwendet werden können.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) ist ein von Apple entwickeltes Protokoll, das auf allen Plattformen von Safari unterstützt wird. HLS kann auch in anderen Umgebungen unterstützt werden, obwohl diese Unterstützung in einigen Fällen bedingt ist.

Zum Beispiel unterstützt Firefox für Android HLS, weil viele Websites bei mobil-spezifischen Inhalten davon ausgehen, dass mobile Browser HLS unterstützen, um merkwürdige Kompatibilitätsprobleme zu vermeiden, die durch diese Annahme entstehen könnten. Die Desktop-Version von Firefox hingegen unterstützt HLS nicht.

HLS verwendet Playlisten, damit der Benutzer nicht nur das zu streamende Medium auswählen kann, sondern auch unter verschiedenen Versionen oder Formen desselben Mediums wählen kann. Zum Beispiel ermöglicht HLS dem Server, ein Video mit mehreren Audio-Streams zu streamen, aus denen der Benutzer auswählen kann, um so seine eigene Sprache zu hören. Zusätzlich können Formate des Streams bereitgestellt werden, die für verschiedene Netzwerkbedingungen optimiert sind. Auf diese Weise können Live-Streams flexibel und hoch performant gestaltet werden.

Seit Mitte 2017 ist HLS als {{RFC(8216)}} standardisiert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
