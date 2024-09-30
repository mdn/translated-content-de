---
title: Leitfaden zum Streaming von Audio und Video
slug: Web/Media/Streaming
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Leitfaden untersuchen wir die Techniken, die verwendet werden, um Audio- und/oder Videomedien im Web zu streamen, und wie Sie Ihren Code, Ihre Medien, Ihren Server und die Optionen, die Sie während des Streamings verwenden, optimieren können, um die bestmögliche Qualität und Leistung zu erzielen.

## Protokolle

Zusätzlich zur Konfiguration des Servers und des Streaming-Codes gibt es manchmal spezielle Protokolle, die verwendet werden können, um die Leistung zu optimieren.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) ist ein von Apple entwickeltes Protokoll, das von Safari auf all ihren Plattformen unterstützt wird. HLS kann auch in anderen Umgebungen unterstützt werden, obwohl diese Unterstützung in einigen Fällen bedingt ist.

Zum Beispiel unterstützt Firefox für Android HLS, weil viele Webseiten davon ausgehen, dass mobile Browser HLS unterstützen, um merkwürdige Kompatibilitätsfehler zu vermeiden, die aufgrund dieser Annahme auftreten könnten. Die Desktop-Version von Firefox unterstützt HLS jedoch nicht.

HLS verwendet Playlists, damit der Benutzer nicht nur das zu streamende Medium auswählen, sondern auch zwischen Versionen oder Formen desselben Mediums wählen kann. HLS ermöglicht dem Server beispielsweise, ein Video mit mehreren Audiostreams zu streamen, aus denen der Benutzer seine Sprache auswählen kann. Darüber hinaus können Formen des Streams bereitgestellt werden, die für unterschiedliche Netzwerkbedingungen optimiert sind. Auf diese Weise können Livestreams flexibel und hochleistungsfähig gemacht werden.

Seit Mitte 2017 ist HLS als {{RFC(8216)}} standardisiert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
