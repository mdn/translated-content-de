---
title: "Medientyp- und Formatleitfaden: Bild-, Audio- und Videoinhalte"
slug: Web/Media/Formats
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Seit nahezu ihrem Beginn enthält das Web Unterstützung für eine Form der visuellen Medienpräsentation. Ursprünglich waren diese Fähigkeiten begrenzt und wurden organisch erweitert, wobei unterschiedliche Browser eigene Lösungen für die Probleme fanden, die mit der Einbindung von Standbildern und Videodarstellungen im Web verbunden waren. Das moderne Web verfügt über leistungsstarke Funktionen zur Unterstützung der Präsentation und Manipulation von Medien, mit mehreren medienbezogenen APIs, die verschiedene Arten von Inhalten unterstützen. Im Allgemeinen liegt es in der Verantwortung der Ersteller des Browsers, welche Medienformate unterstützt werden, was die Arbeit von Webentwicklern verkomplizieren kann.

Dieser Leitfaden bietet einen Überblick über die Medientypen, {{Glossary("codec", "Codecs")}} und Algorithmen, aus denen Medien im Web bestehen können. Er bietet auch Informationen zur Browserunterstützung für verschiedene Kombinationen dieser und Vorschläge zur Priorisierung von Formaten sowie welche Formate sich besonders für bestimmte Inhaltsarten eignen.

## Referenzen

### Bilder

- [Bilddateitypen und Formatleitfaden](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den wichtigsten Bilddateitypen und Inhaltsformaten, die im Internet verwendet werden. Dazu gehören ein Überblick über die Browserunterstützung, Vorteile und Einschränkungen sowie Best-Practice-Richtlinien, um Webdesignern zu helfen, das richtige Bilddateiformat für spezifische Inhaltsarten zu wählen.

### Medien-Dateitypen und Codecs

- [Medienbehälter (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - : Ein Leitfaden zu den Dateitypen, die Mediendaten enthalten. Einige sind spezifisch für Audio, während andere entweder für Audio oder kombinierten audiovisuellen Inhalt wie Filme verwendet werden können. Beinhaltet Übersicht über jeden der von den wichtigsten Webbrowsern unterstützten Dateitypen sowie Informationen zur Browserunterstützung und unterstützten Funktionen.
- [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)
  - : Ein Leitfaden zu den Audio-Codecs, die von den üblichen Medienbehältern sowie von den großen Browsern unterstützt werden. Beinhaltet Vorteile, Einschränkungen, Hauptspezifikationen und Fähigkeiten sowie Anwendungsfälle. Er behandelt auch die Unterstützung der Browser für die Verwendung des Codecs in bestimmten Containern.
- [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Formats/Video_codecs)
  - : Dieser Artikel bietet grundlegende Informationen zu den von den großen Browsern unterstützten Video-Codecs, sowie einige, die nicht allgemein unterstützt werden, denen Sie aber dennoch begegnen könnten. Er behandelt auch Codec-Fähigkeiten, Vorteile, Einschränkungen und Browserunterstützungsniveaus und -beschränkungen.
- [Codecs in allgemeinen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
  - : Beim Festlegen des MIME-Typs, der ein Medienformat beschreibt, können Sie Details mit dem `codecs`-Parameter als Teil des Typ-Strings angeben. Dieser Leitfaden beschreibt das Format und die möglichen Werte des `codecs`-Parameters für die üblichen Medientypen.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet keinen Container, sondern streamt die kodierten Medien selbst von Peer zu Peer unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zur Darstellung jedes Audio- oder Videotracks. Dieser Leitfaden erörtert die häufig mit WebRTC verwendeten Codecs.

## Leitfäden

### Konzepte

- [Konzepte digitaler Audioinhalte](/de/docs/Web/Media/Formats/Audio_concepts)
  - : Eine Einführung in die Umwandlung von Audio in digitale Form und die Speicherung zur Verwendung durch Computer. Er erklärt grundlegende Konzepte darüber, wie Audio abgetastet wird, sowie Konzepte wie Abtastrate, Audioframes und Audiokompression.
- [Konzepte digitaler Videoinhalte](/de/docs/Web/Media/Formats/Video_concepts)
  - : Ein Leitfaden zu grundlegenden Konzepten im Zusammenhang mit digitalem Video, wie es im Web verwendet wird, einschließlich Grundlagen über Farbformate, Chroma-Subsampling, wie die menschliche Wahrnehmung die Videocodierung beeinflusst, und so weiter.

### Tutorials und Anleitungen

- [Lernen: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Dieses Tutorial führt in die Nutzung von Medien im Web ein und erklärt diese im Detail.
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
  - : In diesem Leitfaden betrachten wir, wie man Webinhalte erstellt, die Qualität oder Leistung maximieren, während gleichzeitig die größtmögliche Kompatibilität erzielt wird, indem Medienformate klug gewählt und Fallbacks und alternative Formate angeboten werden, wo dies hilfreich wäre.

## Andere Themen

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht es Ihnen, die Codierungs- und Decodierungsfähigkeiten des Geräts zu entdecken, auf dem Ihre App oder Website läuft. Dadurch können Sie in Echtzeit Entscheidungen darüber treffen, welche Formate verwendet werden sollen und wann.
