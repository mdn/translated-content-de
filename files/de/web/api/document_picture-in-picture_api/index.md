---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: 74c92544977217347d3c461f9386bb2d32cdf99d
---

{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann — zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die speziell es ermöglicht, ein HTML-{{htmlelement("video")}}-Element in ein immer im Vordergrund befindliches Fenster zu setzen.

## Konzepte und Nutzung

Es ist oft hilfreich, einer Web-App ein anderes Fenster zusätzlich zu dem Hauptfenster zur Verfügung zu stellen, in dem die App läuft. Möglicherweise möchten Sie andere Fenster durchsuchen, während Sie spezifische App-Inhalte im Blick behalten, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Hauptfenster der App frei bleibt, um andere Inhalte anzuzeigen. Sie könnten dies einfach tun, indem Sie ein reguläres neues Browser-Fenster öffnen, aber das hat zwei Hauptprobleme:

1. Sie müssen den Austausch von Zustandsinformationen zwischen den beiden Fenstern behandeln.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund befindliches Fenster zu öffnen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war das Abspielen von Videoinhalten in einem separaten Fenster, sodass der Benutzer sie weiterhin konsumieren kann, während er sich andere Inhalte ansieht. Dies wird mit der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu setzen.

Diese API erwies sich jedoch als etwas einschränkend — Sie können nur ein einzelnes `<video>`-Element im immer im Vordergrund befindlichen Fenster platzieren, mit minimalen, vom Browser generierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Diese erlaubt es, _beliebige_ Inhalte in das immer im Vordergrund befindliche Fenster zu platzieren, für eine breite Palette von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund befindlicher benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stil zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer immer zu sehen, plus Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätswerkzeuge wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, um zusätzliche Inhalte zu behalten, während das Hauptfenster der App von Unordnung frei bleibt. Zum Beispiel könnten Sie ein Action- oder Rollenspiel haben, bei dem Sie die Spielsteuerung, Anweisungen oder Überlieferungen in einem zusätzlichen Fenster zeigen möchten, während das Hauptfenster frei bleibt, um die Spielumgebungen und die Karte anzuzeigen.

### Wie funktioniert es?

Eine neue [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Objektinstanz, die das immer im Vordergrund befindliche Picture-in-Picture-Fenster für den aktuellen Dokumentkontext repräsentiert, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch Aufrufen der [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow)-Methode geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichursprünglichen Fenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt das öffnende Fenster niemals.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website bestimmt werden.
- Das Picture-in-Picture-Fenster ist auf eines pro Browsertab gleichzeitig beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters nach Belieben manipulieren, zum Beispiel indem Sie den Inhalt, den Sie dort anzeigen möchten, in ihren DOM einfügen und Stylesheets darauf kopieren, damit der eingefügte Inhalt genauso gestylt wird, wie wenn er sich im Hauptfenster befindet. Sie können auch das Picture-in-Picture-Fenster schließen (durch Klicken auf das vom Browser bereitgestellte Steuerelement oder durch Ausführen von [`Window.close()`](/de/docs/Web/API/Window/close) darauf) und dann darauf reagieren, dass es mit dem standardmäßigen [`pagehide`](/de/docs/Web/API/Window/pagehide_event) geschlossen wird. Wenn es geschlossen wird, sollten Sie den Inhalt, den es gezeigt hat, wieder in das Hauptanwendungsfenster zurückbringen.

Siehe [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen ausführlichen Nutzungsleitfaden.

> [!NOTE]
> Sie können Code ausführen, wenn das immer im Vordergrund befindliche Fenster programmgesteuert geöffnet wird, indem Sie das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis verwenden. Dieses Ereignis wird jedoch nicht ausgelöst, wenn der Browser selbst (anstatt Ihres Codes) das Verschieben von Inhalten in das immer im Vordergrund befindliche Fenster auslöst. Dies kann zum Beispiel passieren, wenn der Inhalt verdeckt wird, indem der angezeigte Tab gewechselt wird oder der Benutzer eine "Picture-in-Picture"-Option aus dem Kontextmenü eines relevanten Inhalts oder der Browser-Benutzeroberfläche auswählt.
>
> Um Code als Reaktion auf solche Aktionen auszuführen, richten Sie einen Mediensitzungsaktions-Handler mit [`MediaSession.setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) ein, der einen `type` von `enterpictureinpicture` hat.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Verwalten von Document Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture` Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Sehen Sie sich das vollständige funktionierende Demo [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) an (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
