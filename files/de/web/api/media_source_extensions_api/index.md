---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 226c823808b3ee9f2e48fd019ca92a7b51fc474f
---

{{DefaultAPISidebar("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Media Source API**, formell bekannt als **Media Source Extensions** (**MSE**), bietet Funktionen, die plugin-freies webbasiertes Streaming von Medien ermöglichen. Mit MSE können Medienstreams über JavaScript erstellt und mit den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen abgespielt werden.

## Konzepte und Verwendung

Das Abspielen von Video und Audio ist seit einigen Jahren in Webanwendungen ohne Plugins möglich, aber die angebotenen Grundfunktionen waren wirklich nur dafür nützlich, einzelne vollständige Tracks abzuspielen. Zum Beispiel können wir Arraybuffers nicht kombinieren/teilen. Medienstreaming war bis vor kurzem das Gebiet von Flash, mit Technologien wie dem Flash Media Server, der Videostreams über das RTMP-Protokoll bereitstellte.

### Der MSE-Standard

Mit den Media Source Extensions (MSE) ändert sich das. MSE ermöglicht es uns, die übliche einzelne progressive `src`-URI, die an Medienelemente übergeben wird, durch einen Verweis auf ein `MediaSource`-Objekt zu ersetzen, das ein Container für Informationen wie den Bereitschaftszustand der Medien zum Abspielen und Verweise auf mehrere `SourceBuffer`-Objekte ist, die die verschiedenen Medienstücke darstellen, aus denen der gesamte Stream besteht. MSE gibt uns eine feinkörnigere Kontrolle über die Menge und Häufigkeit der abgerufenen Inhalte sowie über Details zur Speichernutzung, wie zum Beispiel wann Puffer gelöscht werden. Es legt den Grundstein für adaptive Bitraten-Streaming-Clients (wie die, die DASH oder HLS verwenden), die auf seiner erweiterbaren API aufgebaut werden können.

Das Erstellen von Inhalten, die mit MSE in modernen Browsern funktionieren, ist ein mühsamer Prozess, der erhebliche Zeit, Rechenleistung und Energie erfordert. Die Nutzung externer Hilfsprogramme zur Anpassung der Inhalte in ein geeignetes Format ist erforderlich. Obwohl die Unterstützung der verschiedenen Mediencontainer mit MSE bei Browsern uneinheitlich ist, sind der H.264-Videocodec, der AAC-Audiocodec und das MP4-Containerformat eine gemeinsame Basislinie. MSE bietet auch eine API zum Laufzeittest von Container- und Codec-Unterstützung.

Wenn Sie keine explizite Kontrolle über die Videoqualität im Laufe der Zeit, die Abholfrequenz von Inhalten oder die Auswerferate des Speichers benötigen, können die {{htmlelement("video")}}- und {{htmlelement("source")}}-Tags eine einfache und angemessene Lösung sein.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) ist ein Protokoll zur Spezifizierung, wie adaptive Inhalte abgerufen werden sollten. Es ist tatsächlich eine Schicht, die auf MSE aufsetzt, um adaptive Bitraten-Streaming-Clients zu entwickeln. Obwohl es andere Protokolle gibt (wie HTTP Live Streaming (HLS)), hat DASH die meiste Plattformunterstützung.

DASH verlagert viel Logik aus dem Netzwerkprotokoll in die Anwendungslogik auf der Clientseite und verwendet das einfachere HTTP-Protokoll zum Abrufen von Dateien. Tatsächlich kann man DASH mit einem einfachen statischen Dateiserver unterstützen, was auch für CDNs hervorragend ist. Dies steht im direkten Gegensatz zu früheren Streaming-Lösungen, die teure Lizenzen für proprietäre, nicht standardisierte Client/Server-Protokollimplementierungen erforderten.

Die zwei häufigsten Anwendungsfälle für DASH sind das Anschauen von Inhalten "auf Abruf" oder "live". On-Demand ermöglicht es einem Entwickler, sich Zeit zu nehmen, um die Assets in mehrere Auflösungen unterschiedlicher Qualität zu transkodieren.

Live-Profilinhalte können aufgrund von Transkodierung und Übertragung Latenz einführen, daher ist DASH für Echtzeitkommunikation, wie sie [WebRTC](/de/docs/Web/API/WebRTC_API) bietet, nicht geeignet. Es kann jedoch deutlich mehr Clientverbindungen als WebRTC unterstützen.

Es gibt zahlreiche verfügbare kostenlose und Open Source-Tools zum Transkodieren von Inhalten und zur Vorbereitung für den Einsatz mit DASH, DASH-Dateiserver und DASH-Client-Bibliotheken, die in JavaScript geschrieben sind. Der Artikel [DASH Adaptive Streaming für HTML-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) bietet ein Beispiel dafür, wie DASH mit MSE verwendet werden kann.

### Verfügbarkeit in Workern

Ab Chrome 108 stehen MSE-Funktionen in dedizierten [Webworkern](/de/docs/Web/API/Web_Workers_API) zur Verfügung, was eine verbesserte Leistung bei der Manipulation von [`MediaSource`](/de/docs/Web/API/MediaSource)s und [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)s ermöglicht. Um die Medien abzuspielen, wird die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft verwendet, um eine Referenz auf ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zu erhalten, einen Proxy für die `MediaSource`, der an den Hauptthread zurückübertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.

Siehe [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) für ein Live-Beispiel.

## Schnittstellen

- [`MediaSource`](/de/docs/Web/API/MediaSource)
  - : Repräsentiert eine Medienquelle, die über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt abgespielt werden soll.
- [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)
  - : Ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), der von einem dedizierten Worker an den Hauptthread zurückübertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
  - : Repräsentiert ein Medienstück, das über ein `MediaSource`-Objekt an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben wird.
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
  - : Eine einfache Containerliste für mehrere `SourceBuffer`-Objekte.
- [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)
  - : Enthält Informationen über die Qualität des von einem {{htmlelement("video")}}-Element abgespielten Videos, wie z.B. die Anzahl der ausgelassenen oder beschädigten Frames. Wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser (falls vorhanden) zum Zeitpunkt des Zugriffs auf die `buffered`-Eigenschaft gepuffert hat.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, die vom Benutzer angesteuert werden können, falls vorhanden.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Medienanbieterobjekt, das die abzuspielende oder die im aktuellen `HTMLMediaElement` abgespielte Medienressource darstellt, oder `null`, wenn nicht zugewiesen.
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt für das aktuell abgespielte Video zurück.
- [`AudioTrack.sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer), [`VideoTrack.sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer), [`TextTrack.sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer)
  - : Gibt den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zurück, der den betreffenden Track erstellt hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Transcoding von Assets für Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Verwendung von MSE zur Erstellung eines grundlegenden Streaming-Dienstes (TBD)
- Verwendung von MPEG DASH zur Erstellung einer Streaming-Anwendung (TBD)
- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement).
