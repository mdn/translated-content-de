---
title: Media-Source-API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("Media Source Extensions")}}

Die **Media-Source-API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionen zur pluginfreien, webbasierten Streaming-Medien-Wiedergabe. Mithilfe von MSE können Mediastreams über JavaScript erstellt und mit {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Verwendung der Media Source Extensions

Video- und Audiowiedergabe ohne Plugins ist in Webanwendungen seit einigen Jahren möglich, aber die angebotenen Grundfunktionen waren wirklich nur nützlich, um einzelne vollständige Tracks abzuspielen. Wir können beispielsweise keine Arraybuffer kombinieren oder teilen. Streaming-Medien waren bis vor kurzem das Gebiet von Flash, wobei Technologien wie Flash Media Server Video-Streams mit dem RTMP-Protokoll bedienten.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich das. MSE ermöglicht es uns, die übliche einzelne progressive `src` URI, die den Medienelementen zugeführt wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen, das ein Container für Informationen wie den Bereitschaftszustand der Medien zur Wiedergabe ist, sowie Verweise auf mehrere `SourceBuffer`-Objekte enthält, die die verschiedenen Medienstücke darstellen, die den gesamten Stream ausmachen. MSE gibt uns eine feinere Kontrolle darüber, wie viel und wie oft Inhalte abgerufen werden, und gewährt Kontrolle über Details der Speichernutzung, z. B. wann Puffer gelöscht werden. Es legt die Grundlage für Clients zum adaptiven Bitraten-Streaming (wie jene, die DASH oder HLS verwenden), die über seine erweiterbare API aufgebaut werden können.

Die Erstellung von Ressourcen, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der erhebliche Zeit, Rechenleistung und Energie erfordert. Der Einsatz externer Hilfsmittel zur Anpassung des Inhalts in ein geeignetes Format ist erforderlich. Obwohl die Unterstützung der verschiedenen Mediencontainer mit MSE in Browsern uneinheitlich ist, sind der Einsatz des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gemeinsame Basis. MSE bietet auch eine API zur Laufzeit-Erkennung von Container- und Codec-Unterstützung.

Wenn Sie keine explizite Kontrolle über die zeitliche Qualität des Videos, die Abrufrate von Inhalten oder die Speicherausstoßrate benötigen, könnten die {{htmlelement("video")}}- und {{htmlelement("source")}}-Tags eine einfache und ausreichende Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll, das spezifiziert, wie adaptive Inhalte abgerufen werden sollten. Es ist effektiv eine Schicht über MSE zum Aufbau von Clients für adaptives Bitraten-Streaming. Während es andere Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die Anwendungslogik auf Client-Seite und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann man DASH mit einem einfachen statischen Dateiserver unterstützen, was auch für CDNs großartig ist. Dies steht im klaren Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client/Server-Protokollimplementierungen erforderten.

Die zwei häufigsten Anwendungsfälle für DASH sind das Ansehen von Inhalten "on demand" oder "live". On-demand ermöglicht es einem Entwickler, sich Zeit zu nehmen, um die Ressourcen in mehreren Auflösungen verschiedener Qualität zu transkodieren.

Live-Profil-Inhalte können aufgrund von Transkodierung und Übertragung Latenzzeit einführen, daher ist DASH nicht geeignet für Echtzeitkommunikation, wie es [WebRTC](/de/docs/Web/API/WebRTC_API) ist. Es kann jedoch wesentlich mehr Clientverbindungen unterstützen als WebRTC.

Es gibt zahlreiche kostenlose und Open-Source-Werkzeuge für die Transkodierung von Inhalten und deren Vorbereitung für die Verwendung mit DASH, DASH-Dateiserver und DASH-Client-Bibliotheken, die in JavaScript geschrieben sind.

### Verfügbarkeit in Web-Workern

Ab Chrome 108 stehen MSE-Funktionen in dedizierten {{domxref("Web Workers API", "Web-Workern", "", "nocode")}} zur Verfügung, was eine verbesserte Leistung beim Manipulieren von {{domxref("MediaSource")}}s und {{domxref("SourceBuffer")}}s ermöglicht. Um die Medien wiederzugeben, wird die {{domxref("MediaSource.handle")}}-Eigenschaft verwendet, um eine Referenz auf ein {{domxref("MediaSourceHandle")}}-Objekt zu erhalten, einen Proxy für das `MediaSource`, der zurück in den Haupt-Thread übertragen und einem Medienelement über dessen {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft angehängt werden kann.

Sehen Sie sich [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel an.

## Schnittstellen

- {{domxref("MediaSource")}}
  - : Repräsentiert eine Medienquelle, die über ein {{domxref("HTMLMediaElement")}}-Objekt abgespielt werden soll.
- {{domxref("SourceBuffer")}}
  - : Stellt ein Medienstück dar, das über ein `MediaSource`-Objekt an ein {{domxref("HTMLMediaElement")}} übergeben wird.
- {{domxref("SourceBufferList")}}
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- {{domxref("VideoPlaybackQuality")}}
  - : Enthält Informationen über die Qualität des von einem {{htmlelement("video")}}-Element abgespielten Videos, wie die Anzahl der fallengelassenen oder beschädigten Frames. Wird von der Methode {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} zurückgegeben.

## Erweiterungen anderer Schnittstellen

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : Erstellt eine Objekt-URL, die auf ein `MediaSource`-Objekt zeigt, das dann als `src`-Wert eines HTML-Medienelements angegeben werden kann, um einen Medienstream abzuspielen.
- {{domxref("HTMLMediaElement.seekable")}}
  - : Wenn ein `MediaSource`-Objekt von einem HTML-Medienelement abgespielt wird, gibt diese Eigenschaft ein {{domxref("TimeRanges")}}-Objekt zurück, das die Zeitbereiche enthält, die der Benutzer ansteuern kann.
- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Gibt ein {{domxref("VideoPlaybackQuality")}}-Objekt für das aktuell abgespielte Video zurück.
- {{domxref("AudioTrack.sourceBuffer")}}, {{domxref("VideoTrack.sourceBuffer")}}, {{domxref("TextTrack.sourceBuffer")}}
  - : Gibt den {{domxref("SourceBuffer")}} zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transkodierung von Ressourcen für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- {{domxref("HTMLMediaElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}.
