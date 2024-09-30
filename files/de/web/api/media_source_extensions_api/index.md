---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("Media Source Extensions")}}

Die **Media Source API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionen, die ein pluginfreies, webbasiertes Streaming von Medien ermöglichen. Mit MSE können Medienströme über JavaScript erstellt und mit den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Nutzung der Media Source Extensions

Video- und Audiowiedergabe ist seit einigen Jahren in Webanwendungen ohne Plugins möglich, aber die grundlegenden Funktionen waren bisher meist nur für das Abspielen einzelner kompletter Tracks nützlich. Zum Beispiel können wir keine Arraybuffers kombinieren/teilen. Streaming-Medien waren bis vor kurzem das Gebiet von Flash, wobei Technologien wie Flash Media Server Videostreams über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich das. MSE ermöglicht es uns, die übliche einzelne progressive `src`-URI, die an Medienelemente übergeben wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen. Dieses dient als Container für Informationen wie den Bereitschaftszustand der Medien zur Wiedergabe und Verweise auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Medienblöcke darstellen, aus denen der gesamte Stream besteht. MSE gibt uns eine feinere Kontrolle darüber, wie viel und wie oft Inhalte abgerufen werden, sowie etwas Kontrolle über Details der Speichernutzung, wie das Ausräumen von Puffern. Es legt den Grundstein für adaptive Bitrate-Streaming-Clients (wie diejenigen, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Assets, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der erhebliche Zeit, Rechenleistung und Energie erfordert. Die Verwendung externer Dienstprogramme zur Anpassung der Inhalte in ein geeignetes Format ist erforderlich. Während die Unterstützung der verschiedenen Mediencontainer mit MSE im Browser lückenhaft ist, bildet die Nutzung des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gemeinsame Basis. MSE bietet auch eine API für die Laufzeit-Erkennung von Container- und Codec-Unterstützung.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Laufe der Zeit, die Abrufrate der Inhalte oder die Speicherauslastung benötigen, könnten die {{htmlelement("video")}}- und {{htmlelement("source")}}-Tags eine einfache und ausreichende Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Spezifizierung, wie adaptive Inhalte abgerufen werden sollen. Es ist effektiv eine Schicht, die auf MSE aufbaut, um adaptive Bitrate-Streaming-Clients zu erstellen. Während es andere Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die clientseitige Anwendungslogik und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann man DASH mit einem einfachen statischen Dateiserver unterstützen, was auch für CDNs ideal ist. Dies steht in direktem Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client-/Server-Protokollimplementierungen erforderten.

Die beiden häufigsten Anwendungsfälle für DASH beinhalten das "On-Demand"-Ansehen von Inhalten oder "Live"-Anzeigen. On-Demand ermöglicht einem Entwickler, sich Zeit zu nehmen, um die Assets in mehrere Auflösungen unterschiedlicher Qualität zu transkodieren.

Live-Profilinhalte können aufgrund ihrer Transkodierung und Übertragung Latenz einführen, daher ist DASH nicht für die Echtzeitkommunikation geeignet, wie es [WebRTC](/de/docs/Web/API/WebRTC_API) ist. Es kann jedoch deutlich mehr Clientverbindungen als WebRTC unterstützen.

Es gibt zahlreiche verfügbare kostenlose und Open-Source-Tools für das Transkodieren von Inhalten und deren Vorbereitung für die Verwendung mit DASH, DASH-File-Servern und DASH-Client-Bibliotheken, die in JavaScript geschrieben sind.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, was eine verbesserte Leistung bei der Manipulation von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s ermöglicht. Zum Abspielen der Medien wird die Eigenschaft [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) verwendet, um eine Referenz auf ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einen Proxy für das `MediaSource`, das zurück an den Hauptthread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.

Sehen Sie sich das [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel an.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt werden soll.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Repräsentiert einen Medienblock, der über ein `MediaSource`-Objekt an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben werden soll.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Videoqualität, die von einem {{htmlelement("video")}}-Element abgespielt wird, wie die Anzahl der verlorenen oder beschädigten Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

## Erweiterungen zu anderen Schnittstellen

- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Erstellt eine Objekt-URL, die auf ein `MediaSource`-Objekt zeigt, das dann als `src`-Wert eines HTML-Medienelements angegeben werden kann, um einen Medienstream abzuspielen.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Wenn ein `MediaSource`-Objekt von einem HTML-Medienelement abgespielt wird, gibt diese Eigenschaft ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transcodieren von Assets für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
