---
title: Leitfaden zum Streaming von Audio und Video
slug: Web/Media/Streaming
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Leitfaden untersuchen wir die Techniken, die zum Streamen von Audio- und/oder Videomedien im Web verwendet werden, und wie Sie Ihren Code, Ihre Medien, Ihren Server und die von Ihnen verwendeten Optionen beim Streaming optimieren können, um die bestmögliche Qualität und Leistung zu erzielen.

## Protokolle

Zusätzlich zur Konfiguration des Servers und des Streaming-Codes gibt es manchmal spezielle Protokolle, die zur Leistungsoptimierung verwendet werden können.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) ist ein von Apple entwickeltes Protokoll, das von Safari auf all ihren Plattformen unterstützt wird. HLS kann auch in anderen Umgebungen unterstützt werden, obwohl diese Unterstützung in einigen Fällen bedingt ist.

Zum Beispiel unterstützt Firefox für Android HLS, da viele Websites annehmen, dass mobile Browser HLS unterstützen, um seltsame Kompatibilitätsfehler zu vermeiden, die aufgrund dieser falschen Annahme auftreten könnten. Die Desktop-Version von Firefox unterstützt HLS jedoch nicht.

HLS verwendet Playlists, um dem Benutzer nicht nur die Auswahl der zu streamenden Medien zu ermöglichen, sondern auch die Auswahl zwischen verschiedenen Versionen oder Formen desselben Mediums. Beispielsweise ermöglicht HLS dem Server, ein Video mit mehreren Audiostreams zu streamen, aus denen der Benutzer seine eigene Sprache wählen kann. Zusätzlich können Formen des Streams bereitgestellt werden, die für unterschiedliche Netzwerkbedingungen optimiert sind. Auf diese Weise können Livestreams flexibel und hochleistungsfähig gestaltet werden.

Seit Mitte 2017 ist HLS als {{RFC(8216)}} standardisiert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
