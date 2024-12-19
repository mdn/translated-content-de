---
title: "Leitfaden zu Medientypen und -formaten: Bild-, Audio- und Videoinhalte"
slug: Web/Media/Formats
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Seit nahezu ihrem Beginn hat das Web Unterstützung für verschiedene Formen der visuellen Medienpräsentation geboten. Ursprünglich waren diese Funktionen begrenzt und wurden organisch erweitert, wobei verschiedene Browser ihre eigenen Lösungen für die Herausforderungen fanden, Standbilder und Videoimpressionen im Web einzubinden. Das moderne Web verfügt über leistungsstarke Funktionen zur Unterstützung der Präsentation und Manipulation von Medien, mit mehreren medienbezogenen APIs, die verschiedene Arten von Inhalten unterstützen. Im Allgemeinen liegen die Medienformate, die von einem Browser unterstützt werden, ausschließlich in der Hand der Browser-Ersteller, was die Arbeit eines Webentwicklers erschweren kann.

Dieser Leitfaden bietet einen Überblick über die Medientypen, {{Glossary("codec", "Codecs")}} und Algorithmen, die Medien im Web ausmachen können. Er bietet außerdem Informationen zur Browser-Kompatibilität für verschiedene Kombinationen dieser und gibt Empfehlungen zur Priorisierung von Formaten sowie welche Formate für bestimmte Inhaltsarten besonders geeignet sind.

## Referenzen

### Bilder

- [Leitfaden zu Bild-Dateitypen und Formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den wichtigsten Bild-Dateitypen und Inhaltsformaten, die im Internet verwendet werden. Dies umfasst einen Überblick über: Browser-Unterstützung, Vorteile und Einschränkungen, zusammen mit bewährten Verfahren, die Webdesignern dabei helfen, das richtige Bilddateiformat für bestimmte Inhaltsarten auszuwählen.

### Medien-Dateitypen und Codecs

- [Mediencontainer (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - : Ein Leitfaden zu den Dateitypen, die Mediendaten enthalten. Einige sind speziell für Audio, während andere entweder für Audio oder kombinierte audiovisuelle Inhalte wie Filme verwendet werden können. Enthält Übersichten zu jedem von den wichtigsten Webbrowsern unterstützten Dateityp, zusammen mit Informationen zur Browser-Unterstützung und unterstützten Funktionen.
- [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs)
  - : Ein Leitfaden zu den Audio-Codecs, die von den gängigen Mediencontainern sowie von den wichtigsten Browsern erlaubt sind. Beinhaltet Vorteile, Einschränkungen, Hauptspezifikationen und -fähigkeiten sowie Anwendungsfälle. Es behandelt auch die Unterstützung jedes Browsers für die Verwendung des Codecs in gegebenen Containern.
- [Leitfaden zu Web-Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs)
  - : Dieser Artikel bietet grundlegende Informationen über die Video-Codecs, die von den wichtigsten Browsern unterstützt werden, sowie einige, die nicht häufig unterstützt werden, auf die Sie jedoch möglicherweise dennoch stoßen. Es behandelt auch Codec-Fähigkeiten, Vorteile, Einschränkungen sowie Unterstützungsebenen und Einschränkungen im Browser.
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
  - : Bei der Angabe des MIME-Typs, der ein Medienformat beschreibt, können Sie Details mithilfe des `codecs`-Parameters als Teil der Typzeichenfolge bereitstellen. Dieser Leitfaden beschreibt das Format und die möglichen Werte des `codecs`-Parameters für die gängigen Medientypen.
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet keinen Container, sondern streamt die kodierten Medien selbst von Peer zu Peer unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zur Darstellung jeder Audio- oder Videospur. Dieser Leitfaden behandelt die Codecs, die häufig mit WebRTC verwendet werden.

## Leitfäden

### Konzepte

- [Konzepte der digitalen Audioverarbeitung](/de/docs/Web/Media/Formats/Audio_concepts)
  - : Eine Einführung, wie Audio in digitale Form umgewandelt und zur Nutzung durch Computer gespeichert wird. Es erklärt grundlegende Konzepte, wie Audio abgetastet wird, sowie Konzepte wie Abtastrate, Audio-Frames und Audiokomprimierung.
- [Konzepte der digitalen Videowiedergabe](/de/docs/Web/Media/Formats/Video_concepts)
  - : Ein Leitfaden zu grundlegenden Konzepten der digitalen Videowiedergabe, wie sie im Web verwendet wird, einschließlich Grundlagen zu Farbformaten, Chroma-Subsampling, wie die menschliche Wahrnehmung die Videocodierung beeinflusst und so weiter.

### Tutorials und Anleitungen

- [Lernen: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Dieses Tutorial führt in die Verwendung von Medien im Web ein und vertieft diese.
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
  - : In diesem Leitfaden untersuchen wir, wie man Webinhalte erstellt, die Qualität oder Leistung maximieren und gleichzeitig die größtmögliche Kompatibilität bieten, indem Medienformate weise ausgewählt und Fallbacks und alternative Formate angeboten werden, wo dies hilfreich wäre.

## Andere Themen

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu entdecken, auf dem Ihre App oder Website läuft. Dies ermöglicht es Ihnen, in Echtzeit Entscheidungen darüber zu treffen, welche Formate verwendet werden sollen und wann.
