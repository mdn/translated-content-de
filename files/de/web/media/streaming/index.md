---
title: Leitfaden zum Streamen von Audio und Video
slug: Web/Media/Streaming
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Leitfaden werden wir die Techniken untersuchen, die zum Streamen von Audio- und/oder Videomedien im Web verwendet werden, und wie Sie Ihr Code, Ihre Medien, Ihren Server und die von Ihnen verwendeten Optionen während des Streamings optimieren können, um die bestmögliche Qualität und Leistung zu erzielen.

## Protokolle

Zusätzlich zur Konfiguration des Servers und des Streaming-Codes gibt es manchmal spezielle Protokolle, die verwendet werden können, um die Leistung zu optimieren.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) ist ein von Apple entwickeltes Protokoll, das von Safari auf allen ihren Plattformen unterstützt wird. HLS kann auch in anderen Umgebungen unterstützt werden, obwohl diese Unterstützung in einigen Fällen bedingt ist.

Zum Beispiel unterstützt Firefox für Android HLS, da viele Websites für mobile Inhalte voraussetzen, dass mobile Browser HLS unterstützen. Dies geschieht, um zu vermeiden, dass merkwürdige Kompatibilitätsfehler aufgrund dieser falschen Annahme auftreten. Die Desktop-Version von Firefox unterstützt jedoch kein HLS.

HLS verwendet Playlists, um dem Benutzer nicht nur die Auswahl des zu streamenden Mediums zu ermöglichen, sondern auch zwischen verschiedenen Versionen oder Formen desselben Mediums zu wählen. Beispielsweise lässt HLS den Server ein Video mit mehreren Audio-Streams streamen, aus denen der Benutzer wählen kann, um seine eigene Sprache zu hören. Darüber hinaus können Formen des Streams bereitgestellt werden, die für verschiedene Netzwerkbedingungen optimiert sind. Auf diese Weise können Live-Streams flexibel und leistungsstark gestaltet werden.

Seit Mitte 2017 ist HLS als {{RFC(8216)}} standardisiert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
