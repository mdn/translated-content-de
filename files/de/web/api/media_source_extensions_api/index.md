---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("Media Source Extensions")}}

Die **Media Source API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionalitäten, die browserbasierte Streaming-Medien ohne Plugins ermöglichen. Mit MSE können Medienströme über JavaScript erstellt und mit {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Nutzung von Media Source Extensions

Das Abspielen von Video und Audio ist in Webanwendungen seit einigen Jahren ohne Plugins möglich, aber die angebotenen Grundfunktionen waren bisher wirklich nur nützlich, um einzelne ganze Tracks abzuspielen. Wir können zum Beispiel nicht Arraybuffer kombinieren/aufteilen. Das Streaming von Medien war bis vor kurzem das Gebiet von Flash, wobei Technologien wie Flash Media Server Videostreams über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit Media Source Extensions (MSE) ändert sich dies. MSE erlaubt es uns, die übliche einzelne progressive `src`-URI, die Medien-Elementen zugeführt wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen. Dieses ist ein Container für Informationen wie den Bereitschaftszustand der Medien zum Abspielen und Verweise auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Teile der Medien darstellen, die den gesamten Stream ausmachen. MSE bietet uns feinere Steuerungsmöglichkeiten darüber, wie viel und wie oft Inhalte abgerufen werden, und gewisse Kontrollmöglichkeiten über Speicherverwendungsdetails, z. B. wann Puffer entfernt werden. Es legt den Grundstein für adaptiv bitrate Streaming-Clients (wie solche, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Ressourcen, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der erhebliche Zeit, Rechenleistung und Energie erfordert. Die Nutzung externer Tools, um den Inhalt in ein geeignetes Format zu bringen, ist erforderlich. Während die Browser-Unterstützung für die verschiedenen Mediencontainer mit MSE lückenhaft ist, ist die Verwendung des H.264-Videocodecs, AAC-Audiocodecs und des MP4-Containerformats eine häufige Grundlage. MSE bietet auch eine API zur Laufzeiterkennung der Unterstützung von Containern und Codecs.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Laufe der Zeit, die Geschwindigkeit des Inhaltsabrufs oder die Geschwindigkeit der Speichertrennung benötigen, können die {{htmlelement("video")}}- und {{htmlelement("source")}}-Tags eine einfache und angemessene Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Spezifizierung, wie adaptive Inhalte abgerufen werden sollen. Es ist effektiv eine Schicht, die auf MSE aufgebaut ist, um adaptive Bitrate-Streaming-Clients zu entwickeln. Während es andere verfügbare Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die größte Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die Anwendungslogik auf der Client-Seite und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann man DASH mit einem einfachen statischen Dateiserver unterstützen, was auch für CDNs großartig ist. Dies steht im direkten Gegensatz zu vorherigen Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client/Server-Protokollimplementierungen erforderten.

Die zwei häufigsten Anwendungsfälle für DASH beinhalten das Ansehen von Inhalten "on demand" oder "live". Bei On-Demand-Inhalten kann ein Entwickler sich Zeit nehmen, die Ressourcen in mehrere Auflösungen verschiedener Qualität zu transkodieren.

Live-Profil-Inhalte können Latenz einführen, weil sie transkodiert und übertragen werden, daher ist DASH nicht geeignet für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API). Es kann jedoch deutlich mehr Clientverbindungen unterstützen als WebRTC.

Es gibt zahlreiche kostenlose und Open-Source-Tools zum Transkodieren von Inhalten und zur Vorbereitung für die Nutzung mit DASH, DASH-Dateiservern und DASH-Clientbibliotheken, die in JavaScript geschrieben sind.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, was eine verbesserte Leistung bei der Manipulation von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s ermöglicht. Um die Medien abzuspielen, wird die Eigenschaft [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) verwendet, um eine Referenz zu einem [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einem Proxy für die `MediaSource`, der an den Haupt-Thread zurückgegeben und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.

Sehen Sie sich das [MSE-in-Workers-Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel an.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt werden soll.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Repräsentiert ein Medienstück, das über ein `MediaSource`-Objekt an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) weitergegeben wird.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des Videos, das von einem {{htmlelement("video")}}-Element abgespielt wird, wie zum Beispiel die Anzahl der ausgelassenen oder beschädigten Frames. Zurückgegeben von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality).

## Erweiterungen zu anderen Schnittstellen

- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Erstellt eine Objekt-URL, die auf ein `MediaSource`-Objekt verweist, welches dann als `src`-Wert eines HTML-Medienelements angegeben werden kann, um einen Medienstrom abzuspielen.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Wenn ein `MediaSource`-Objekt von einem HTML-Medienelement abgespielt wird, gibt diese Eigenschaft ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer wechseln kann.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Umwandlung von Ressourcen für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
