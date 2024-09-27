---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: ac80d4deda2b072a4fc7e866b5edb14a91226319
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Dokument-Picture-in-Picture-API** ermöglicht es, ein immer im Vordergrund bleibendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann - zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videotelefonats zeigen. Sie erweitert die frühere [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die speziell ein HTML-{{htmlelement("video")}}-Element in einem immer im Vordergrund bleibenden Fenster platzieren kann.

## Konzepte und Verwendung

Es ist oft hilfreich, neben dem Hauptfenster, in dem eine Web-App ausgeführt wird, ein zusätzliches Fenster zur Verfügung zu haben. Sie könnten andere Fenster durchsuchen, während spezifische App-Inhalte im Blick bleiben, oder diese Inhalte in einem eigenen Bereich präsentieren, während das Haupt-App-Fenster frei bleibt, um andere Inhalte anzuzeigen. Dies könnte durch das Öffnen eines gewöhnlichen neuen Browser-Fensters gehandhabt werden, jedoch gibt es hierbei zwei Hauptprobleme:

1. Sie müssen die gemeinsame Nutzung von Statusinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund bleibendes Fenster zu öffnen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war, Videoinhalte in einem separaten Fenster abzuspielen, damit der Benutzer sie weiterhin konsumieren kann, während er andere Inhalte betrachtet. Dies wird über die [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu platzieren.

Diese API wurde jedoch als etwas einschränkend empfunden – Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund bleibende Fenster einfügen, mit minimal vom Browser generierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Dokument-Picture-in-Picture-API** eingeführt. Diese erlaubt es, _beliebige_ Inhalte in das immer im Vordergrund bleibende Fenster zu platzieren, für eine Vielzahl von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund bleibender benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stil zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer immer zu sehen, plus Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätswerkzeuge wie Timer, Notizen, To-do-Listen, Messenger-Tools usw.
- Ein separates Fenster, in dem zusätzliche Inhalte aufbewahrt werden können, während das Haupt-App-Fenster frei von Unordnung bleibt. Beispielsweise könnten Sie ein Action- oder Rollenspiel starten, bei dem Sie die Spielsteuerungen, Anweisungen oder die Spielgeschichte in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster frei bleibt, um die Spielorte und die Karte anzuzeigen.

### Wie funktioniert es?

Ein neues [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt, das das immer im Vordergrund bleibende Picture-in-Picture-Fenster für den aktuellen Dokumentkontext darstellt, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch Aufrufen der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die eine {{jsxref("Promise")}} zurückgibt, die mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichherkunftsfenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überdauert nie das öffnende Fenster.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf je eines pro Browsertab zur gleichen Zeit begrenzt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters beliebig manipulieren, indem Sie beispielsweise den Inhalt, den Sie dort anzeigen möchten, in dessen DOM einfügen und Stylesheets kopieren, damit der eingefügte Inhalt in gleicher Weise gestylt wird wie im Hauptfenster. Sie können das Picture-in-Picture-Fenster auch schließen (durch Klicken auf die vom Browser bereitgestellte Steuerung oder durch Ausführen von [`Window.close()`](/de/docs/Web/API/Window/close) darauf) und dann auf das Schließen mit dem Standard-[`pagehide`](/de/docs/Web/API/Window/pagehide_event) reagieren. Wenn es geschlossen wird, sollten Sie den Inhalt, den es angezeigt hat, zurück in das Haupt-App-Fenster einfügen.

Für eine ausführliche Gebrauchsanleitung siehe [Verwendung der Dokument-Picture-in-Picture-API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using).

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Verwalten von Dokument-Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der Wert `picture-in-picture`
  - : Ein [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, je nachdem, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Sehen Sie sich das [Beispiel zur Dokument-Picture-in-Picture-API](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demonstration an (sehen Sie sich auch den gesamten [Quellcode](https://github.com/chrisdavidmills/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
