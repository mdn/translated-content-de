---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 591d0000e9daab3d6d6abcd0eb823dd76a9a6210
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, formal bekannt als **Media Source Extensions** (**MSE**), bietet Funktionalität zur plugin-freien web-basierten Streaming-Medien. Mit MSE können Medienströme über JavaScript erstellt und mit {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Nutzung

Das Abspielen von Video und Audio war in Webanwendungen bereits seit einigen Jahren ohne Plugins möglich, aber die angebotenen Basisfunktionen waren meist nur zum Abspielen einzelner kompletter Tracks nützlich. Wir können beispielsweise nicht `arraybuffers` kombinieren/teilen. Streaming-Medien waren bis vor Kurzem noch die Domäne von Flash, wobei Technologien wie Flash Media Server Videostreams über das RTMP-Protokoll bereitstellten.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich das. MSE ermöglicht es uns, die üblicherweise einfachen progressiven `src`-URIs, die den Medienelementen zugeführt werden, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen. Dieses Objekt ist ein Container für Informationen wie den Bereitschaftszustand der Medien zur Wiedergabe und Verweise auf mehrere `SourceBuffer`-Objekte, die die verschiedenen Medienabschnitte repräsentieren, aus denen der gesamte Stream besteht. MSE gibt uns eine feinere Kontrolle darüber, wie viel und wie oft Inhalte abgerufen werden, sowie teilweise Kontrolle über Details der Speichernutzung, wie das Entfernen von Puffern. Es legt den Grundstein für adaptive Bitraten-Streaming-Clients (wie solche, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Assets, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der erheblich Zeit, Rechenleistung und Energie erfordert. Die Verwendung von externen Dienstprogrammen, um die Inhalte in ein geeignetes Format zu bringen, ist erforderlich. Während die Unterstützung von Browsern für die verschiedenen Mediencontainer mit MSE unterschiedlich ist, sind die Verwendung des H.264-Videocodecs, des AAC-Audiocodecs und des MP4-Containerformats eine gängige Basis. MSE bietet auch eine API zur Laufzeiterkennung von Container- und Codec-Unterstützung.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Zeitverlauf, die Geschwindigkeit, mit der Inhalte abgerufen werden, oder die Geschwindigkeit, mit der Speicherplatz freigegeben wird, benötigen, könnten die {{htmlelement("video")}} und {{htmlelement("source")}} Tags eine einfache und ausreichende Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll, das spezifiziert, wie adaptive Inhalte abgerufen werden sollen. Es ist effektiv eine Schicht, die auf MSE aufbaut, um adaptive Bitraten-Streaming-Clients zu erstellen. Während es andere Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verschiebt viel Logik aus dem Netzwerkprotokoll in die Anwendungslogik auf der Client-Seite, indem das einfachere HTTP-Protokoll zum Abrufen von Dateien verwendet wird. Tatsächlich kann DASH mit einem einfachen statischen Dateiserver unterstützt werden, was auch für CDNs großartig ist. Dies steht im direkten Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre nicht-standardisierte Client-/Server-Protokollimplementierungen erforderten.

Die zwei häufigsten Anwendungsfälle für DASH sind das "On-Demand"-Ansehen von Inhalten oder "live". On-Demand ermöglicht es einem Entwickler, sich Zeit zu nehmen, um die Assets in mehreren Auflösungen unterschiedlicher Qualität zu transkodieren.

Live-Profil-Inhalte können aufgrund ihrer Transkodierung und Übertragung Latenzen einführen, sodass DASH nicht für Echtzeitkommunikation wie [WebRTC](/de/docs/Web/API/WebRTC_API) geeignet ist. Es kann jedoch signifikant mehr Clientverbindungen als WebRTC unterstützen.

Es gibt zahlreiche verfügbare kostenlose und Open-Source-Tools zum Transkodieren von Inhalten und zur Vorbereitung auf die Nutzung mit DASH, DASH-Dateiservern und DASH-Client-Bibliotheken, die in JavaScript geschrieben sind.

### Verfügbarkeit in Workern

Ab Chrome 108 sind MSE-Funktionen in dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, was eine verbesserte Leistung beim Manipulieren von [`MediaSource`](/de/docs/Web/API/MediaSource)- und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten ermöglicht. Um die Medien abzuspielen, wird die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft verwendet, um eine Referenz zu einem [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einem Proxy für die `MediaSource`, der an den Hauptthread zurückgegeben und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.

Sehen Sie sich das [MSE-in-Workers-Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel an.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt werden soll.
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
  - : Ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), der von einem dedizierten Worker zurück an den Hauptthread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Stellt einen Abschnitt von Medien dar, der über ein `MediaSource`-Objekt in ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben werden soll.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des Videos, das von einem {{htmlelement("video")}}-Element abgespielt wird, wie z.B. die Anzahl der fallengelassenen oder beschädigten Frames. Wird von der [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode zurückgegeben.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser (falls vorhanden) im Moment des Zugriffs auf die `buffered`-Eigenschaft gepuffert hat.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, die der Benutzer anpeilen kann, falls vorhanden.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienanbieterobjekt, das die Medienressource darstellt, die im aktuellen `HTMLMediaElement` abgespielt werden soll oder wurde, oder `null`, wenn nicht zugewiesen.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transkodierung von Assets für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Nutzung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Nutzung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
