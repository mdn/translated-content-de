---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht das Öffnen eines immer im Vordergrund bleibenden Fensters, das mit beliebigem HTML-Inhalt gefüllt werden kann — zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die es speziell ermöglicht, ein HTML-{{htmlelement("video")}}-Element in ein immer sichtbares Fenster zu platzieren.

## Konzepte und Nutzung

Häufig ist es hilfreich, einer Web-App ein zusätzliches Fenster zur Verfügung zu stellen, neben dem Hauptfenster, in dem die App läuft. Sie möchten möglicherweise andere Fenster durchsuchen, während Sie bestimmte App-Inhalte im Blick behalten, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Haupt-App-Fenster freigehalten wird, um anderen Inhalt anzuzeigen. Sie könnten dies einfach handhaben, indem Sie ein reguläres neues Browserfenster öffnen, aber das hat zwei große Probleme:

1. Sie müssen die gemeinsame Nutzung von Statusinformationen zwischen den beiden Fenstern verwalten.
2. Das zusätzliche App-Fenster bleibt nicht immer oben und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund bleibendes Fenster zu erzeugen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war, Videoinhalte in einem separaten Fenster abzuspielen, sodass der Benutzer sie weiter konsumieren kann, während er andere Inhalte ansieht. Dies wird unter Verwendung der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf ein {{htmlelement("video")}}-Element angewendet wird, um es in das separate Fenster zu platzieren.

Allerdings wurde festgestellt, dass diese API etwas einschränkend ist — Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund bleibende Fenster setzen, mit minimalen browsergenerierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Diese erlaubt es, _jeden_ Inhalt in das immer im Vordergrund bleibende Fenster zu platzieren, für eine breite Palette von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund bleibender, benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stil zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer sowie Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw. immer zu sehen.
- Immer sichtbare Produktivitätstools wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, um zusätzliche Inhalte zu behalten, während das Haupt-App-Fenster frei von übermäßigen Inhalten bleibt. Zum Beispiel könnten Sie ein Action- oder Rollenspiel laufen haben, bei dem Sie die Spielkontrollen, Anweisungen oder Hintergrundgeschichten in einem zusätzlichen Fenster zeigen möchten, während das Hauptfenster für die Darstellung der Spielorte und der Karte freigehalten wird.

### Wie funktioniert es?

Eine neue Instanz des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts, die das immer im Vordergrund bleibende Picture-in-Picture-Fenster für den aktuellen Dokumentkontext repräsentiert, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch den Aufruf der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ist ähnlich einem leeren Fenster gleicher Herkunft, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt nicht länger als das eröffnende Fenster.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf eines pro Browser-Tab gleichzeitig beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters manipulieren, wie Sie möchten, zum Beispiel indem Sie den anzuzeigenden Inhalt in sein DOM einfügen und Stylesheets darauf kopieren, damit der hinzugefügte Inhalt auf die gleiche Weise wie im Hauptfenster gestylt wird. Sie können das Picture-in-Picture-Fenster auch schließen (durch Klicken auf die vom Browser bereitgestellte Steuerung oder durch Ausführen von [`Window.close()`](/de/docs/Web/API/Window/close) darauf) und dann auf das Schließen reagieren, indem Sie die standardmäßige [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis verwenden. Wenn es geschlossen wird, sollten Sie den Inhalt, den es zeigte, zurück in das Haupt-App-Fenster verschieben.

Siehe [Die Document Picture-in-Picture API verwenden](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen detaillierten Nutzungsleitfaden.

> [!NOTE]
> Sie können Code ausführen, wenn das immer im Vordergrund bleibende Fenster programmatisch geöffnet wird, indem Sie das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis verwenden. Dieses Ereignis wird jedoch nicht ausgelöst, wenn der Browser selbst (anstatt Ihres Codes) das Verschieben von Inhalten in das immer im Vordergrund bleibende Fenster auslöst. Dies kann beispielsweise geschehen, wenn der Inhalt verdeckt wird, der angezeigte Tab gewechselt wird oder der Benutzer die Option "Bild-in-Bild" aus dem Kontextmenü eines relevanten Inhalts oder aus der Browser-Chrome auswählt.
>
> Um auf solche Aktionen zu reagieren, richten Sie einen Medien-Sitzungsaktionshandler ein, indem Sie [`MediaSession.setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) mit einem `type` des `enterpictureinpicture` verwenden.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt für das Erstellen und Verwalten von Document Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen für andere Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Sehen Sie sich [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demo an (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
