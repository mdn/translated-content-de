---
title: "Leitfaden zu Medientypen und -formaten: Bild-, Audio- und Videoinhalte"
slug: Web/Media/Formats
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Seit fast ihren Anfängen unterstützt das Web die Präsentation von visuellen Medien. Ursprünglich waren diese Fähigkeiten begrenzt und wurden organisch erweitert, wobei verschiedene Browser ihre eigenen Lösungen für die Probleme rund um die Einbindung von Stand- und Bewegtbildern im Web fanden. Das moderne Web bietet leistungsstarke Funktionen zur Unterstützung der Präsentation und Manipulation von Medien, wobei mehrere medienbezogene APIs verschiedene Arten von Inhalten unterstützen. Im Allgemeinen hängt die Unterstützung von Medienformaten durch einen Browser vollständig von den Entwicklern des Browsers ab, was die Arbeit eines Webentwicklers erschweren kann.

Dieser Leitfaden bietet einen Überblick über die Medientypen, [Codecs](/de/docs/Glossary/codec) und Algorithmen, die Medien im Web umfassen können. Er bietet auch Informationen zur Browser-Unterstützung für verschiedene Kombinationen dieser sowie Vorschläge zur Priorisierung von Formaten und zu den Formaten, die bei bestimmten Arten von Inhalten hervorragend abschneiden.

## Referenzen

### Bilder

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den wichtigsten Bilddateitypen und Inhaltsformaten, die im Internet verwendet werden. Dies umfasst eine Übersicht über: Browser-Unterstützung, Vorteile und Einschränkungen sowie Best-Practice-Richtlinien, die Webdesignern helfen, das richtige Bilddateiformat für bestimmte Arten von Inhalten auszuwählen.

### Dateitypen und Codecs für Medien

- [Mediencontainer (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - : Ein Leitfaden zu den Dateitypen, die Mediendaten enthalten. Einige sind speziell für Audio, während andere für Audio oder kombinierte audiovisuelle Inhalte wie Filme verwendet werden können. Enthält Übersichten über jeden der von den großen Webbrowsern unterstützten Dateitypen sowie Informationen zur Browser-Unterstützung und unterstützten Funktionen.
- [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs)
  - : Ein Leitfaden zu den von den gängigen Mediencontainern sowie den wichtigsten Browsern erlaubten Audio-Codecs. Beinhaltet Vorteile, Einschränkungen, wichtige Spezifikationen und Fähigkeiten sowie Anwendungsfälle. Es behandelt auch die Unterstützung jedes Browsers für die Verwendung des Codecs in bestimmten Containern.
- [Leitfaden zu Web-Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs)
  - : Dieser Artikel bietet grundlegende Informationen über die von den wichtigsten Browsern unterstützten Video-Codecs sowie einige, die nicht allgemein unterstützt werden, auf die Sie aber dennoch stoßen könnten. Er behandelt auch Codec-Fähigkeiten, Vorteile, Einschränkungen sowie Unterstützungsniveaus und -beschränkungen durch Browser.
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
  - : Bei der Angabe des MIME-Typs, der ein Medienformat beschreibt, können Sie Einzelheiten mit dem `codecs`-Parameter als Teil der Typzeichenfolge angeben. Dieser Leitfaden beschreibt das Format und die möglichen Werte des `codecs`-Parameters für die gängigen Medientypen.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet keinen Container, sondern überträgt die kodierten Medien stattdessen direkt von Peer zu Peer, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Audio- oder Videospur zu repräsentieren. Dieser Leitfaden diskutiert die Codecs, die häufig mit WebRTC verwendet werden.

## Leitfäden

### Konzepte

- [Konzepte der digitalen Audiotechnik](/de/docs/Web/Media/Formats/Audio_concepts)
  - : Eine Einführung, wie Audio in digitale Form umgewandelt und für die Verwendung durch Computer gespeichert wird. Es werden grundlegende Konzepte erklärt, wie Audio abgetastet wird, sowie Konzepte wie Abtastrate, Audio-Frames und Audiokompression.
- [Konzepte der digitalen Videotechnik](/de/docs/Web/Media/Formats/Video_concepts)
  - : Ein Leitfaden zu den grundlegenden Konzepten im Zusammenhang mit digitalem Video, das im Web verwendet wird, einschließlich Grundlagen zu Farbformaten, Chroma-Subsampling, wie die menschliche Wahrnehmung die Videokodierung beeinflusst, und so weiter.

### Tutorials und Anleitungen

- [Lernen: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Dieses Tutorial führt in die Verwendung von Medien im Web ein und erläutert sie im Detail.
- [Umgang mit Problemen der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
  - : In diesem Leitfaden schauen wir uns an, wie man Webinhalte erstellt, die Qualität oder Leistung maximieren und gleichzeitig die größtmögliche Kompatibilität bieten, indem Mediendateiformate sinnvoll ausgewählt und Fallbacks und alternative Formate bereitgestellt werden, wo es hilfreich wäre.

## Andere Themen

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es, die Codierungs- und Decodierungsmöglichkeiten des Geräts zu entdecken, auf dem Ihre Anwendung oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate verwendet werden sollen und wann.
