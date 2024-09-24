---
title: "Medientyp- und Formatleitfaden: Bild-, Audio- und Videoinhalte"
slug: Web/Media/Formats
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Seit fast seinem Beginn hat das Web Unterstützung für eine Form der visuellen Medienpräsentation enthalten. Ursprünglich waren diese Fähigkeiten begrenzt und haben sich organisch erweitert, wobei verschiedene Browser ihre eigenen Lösungen für die Probleme rund um die Einbindung von Standbildern und Videomaterial im Web fanden. Das moderne Web bietet leistungsfähige Funktionen zur Unterstützung der Präsentation und Manipulation von Medien, mit mehreren medienbezogenen APIs, die verschiedene Arten von Inhalten unterstützen. Generell liegen die unterstützten Medienformate vollständig in der Hand der Browser-Entwickler, was die Arbeit eines Webentwicklers kompliziert machen kann.

Dieser Leitfaden bietet eine Übersicht über die Mediendateitypen, {{Glossary("codec", "Codecs")}} und Algorithmen, die Medien im Web umfassen können. Er bietet auch Informationen zur Browserunterstützung für verschiedene Kombinationen dieser Formate und Vorschläge zur Priorisierung von Formaten sowie zu den Formaten, die sich besonders für bestimmte Inhaltsarten eignen.

## Referenzen

### Bilder

- [Dateitypen und Formatleitfaden für Bilder](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den wichtigsten Bilddateitypen und Inhaltsformaten, die im Internet verwendet werden. Er enthält eine Übersicht über: Browserunterstützung, Vor- und Nachteile sowie Best-Practice-Richtlinien, die Webdesignern helfen, das richtige Bilddateiformat für spezifische Arten von Inhalten auszuwählen.

### Medientypen und Codecs

- [Mediencontainer (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - : Ein Leitfaden zu den Dateitypen, die Mediendaten enthalten. Einige sind speziell für Audio, während andere sowohl für Audio als auch für kombinierten audiovisuellen Inhalt wie Filme verwendet werden können. Enthält Übersichten über die von den wichtigsten Webbrowsern unterstützten Dateitypen sowie Informationen zur Browserunterstützung und unterstützten Funktionen.
- [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)
  - : Ein Leitfaden zu den Audio-Codecs, die von den gängigen Mediencontainern und von den großen Browsern unterstützt werden. Beinhaltet Vorteile, Einschränkungen, wichtige Spezifikationen und Fähigkeiten sowie Anwendungsfälle. Er behandelt auch die Unterstützung jedes Browsers für die Verwendung des Codecs in bestimmten Containern.
- [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Formats/Video_codecs)
  - : Dieser Artikel bietet grundlegende Informationen über die von den großen Browsern unterstützten Video-Codecs sowie über einige, die nicht allgemein unterstützt werden, mit denen Sie jedoch möglicherweise dennoch konfrontiert werden. Er behandelt auch Codec-Fähigkeiten, Vorteile, Einschränkungen und die Unterstützungsstufen und -einschränkungen der Browser.
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
  - : Beim Festlegen des MIME-Typs, der ein Medienformat beschreibt, können Sie Details mithilfe des `codecs`-Parameters als Teil des Typs angeben. Dieser Leitfaden beschreibt das Format und die möglichen Werte des `codecs`-Parameters für die gängigen Medientypen.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/de/docs/Web/API/WebRTC_API) verwendet keinen Container, sondern streamt die kodierten Medien selbst von Peer zu Peer mithilfe von {{domxref("MediaStreamTrack")}}-Objekten zur Darstellung jeder Audio- oder Videospur. Dieser Leitfaden diskutiert die Codecs, die häufig mit WebRTC verwendet werden.

## Leitfäden

### Konzepte

- [Digitale Audiokonzepte](/de/docs/Web/Media/Formats/Audio_concepts)
  - : Eine Einführung, wie Audio in digitale Form konvertiert und zur Verwendung durch Computer gespeichert wird. Es erklärt grundlegende Konzepte, wie Audio abgetastet wird, sowie Konzepte wie Abtastrate, Audioframes und Audiokompression.
- [Digitale Videokonzepte](/de/docs/Web/Media/Formats/Video_concepts)
  - : Ein Leitfaden zu den grundlegenden Konzepten, die bei digitalem Video im Web verwendet werden, einschließlich Grundlagen über Farbformate, Chroma-Subsampling, wie menschliche Wahrnehmung die Videokodierung beeinflusst und so weiter.

### Tutorials und Anleitungen

- [Lernen: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Dieses Tutorial führt in die Nutzung von Medien im Web ein und beschreibt sie im Detail.
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
  - : In diesem Leitfaden gehen wir darauf ein, wie Webinhalte erstellt werden können, die Qualität oder Leistung maximieren und gleichzeitig die größtmögliche Kompatibilität bieten, indem Medientypen weise gewählt und Rückfallebenen und alternative Formate dort angeboten werden, wo es hilfreich wäre.

## Andere Themen

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
  - : Die Media Capabilities API ermöglicht Ihnen, die Kodier- und Dekodierfähigkeiten des Geräts, auf dem Ihre App oder Website läuft, zu entdecken. Damit können Sie in Echtzeit entscheiden, welche Formate wann zu verwenden sind.
