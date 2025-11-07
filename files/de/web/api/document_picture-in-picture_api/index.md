---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht das Öffnen eines Fensters, das immer im Vordergrund bleibt und mit beliebigem HTML-Inhalt gefüllt werden kann — zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder ein Satz von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die es speziell ermöglicht, ein HTML {{htmlelement("video")}}-Element in ein Fenster zu versetzen, das immer im Vordergrund bleibt.

## Konzepte und Nutzung

Es ist oft hilfreich, ein separates Fenster für eine Web-App zur Verfügung zu haben, zusätzlich zum Hauptfenster, in dem die App ausgeführt wird. Sie möchten vielleicht andere Fenster durchsuchen, während spezifische App-Inhalte im Blick bleiben, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Hauptfenster der App frei bleibt, um andere Inhalte anzuzeigen. Dies könnte dadurch gehandhabt werden, einfach ein reguläres neues Browserfenster zu öffnen, aber das hat zwei wesentliche Probleme:

1. Sie müssen den Austausch von Zustandsinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein Fenster zu erstellen, das immer im Vordergrund bleibt und Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war das Halten von Videoinhalten in einem separaten Fenster, sodass der Benutzer sie weiterhin ansehen kann, während er andere Inhalte betrachtet. Dies wird mit der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu platzieren.

Diese API erwies sich jedoch als etwas einschränkend — Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund bleibende Fenster einfügen, mit minimalen, vom Browser generierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Diese erlaubt es, _beliebige_ Inhalte in das immer im Vordergrund bleibende Fenster zu platzieren für eine Vielzahl von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund bleibender benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Styles zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer immer zu sehen, plus Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätstools wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, in dem zusätzliche Inhalte gehalten werden, während das Hauptfenster der App frei von Unordnung bleibt. Beispielsweise könnten Sie ein Action- oder Rollenspiel ausführen, bei dem Sie die Spielsteuerelemente, Anweisungen oder Überlieferungen in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster zur Anzeige der Spielorte und der Karte frei bleibt.

### Wie funktioniert das?

Eine neue [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objektinstanz, die das immer im Vordergrund bleibende Picture-in-Picture-Fenster für den aktuellen Dokumentkontext darstellt, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch Aufruf der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem `Window`-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichherkunftsberechtigten Fenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt das öffnende Fenster nie.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website aus festgelegt werden.
- Das Picture-in-Picture-Fenster ist pro Browser-Tab auf eines limitiert, wobei der User-Agent die Gesamtzahl der geöffneten Picture-in-Picture-Fenster möglicherweise weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters nach Belieben manipulieren, zum Beispiel den Inhalt, den Sie dort anzeigen möchten, in sein DOM anhängen und Stylesheets darauf kopieren, sodass der angehängte Inhalt auf die gleiche Weise gestylt wird, wie wenn er sich im Hauptfenster befindet. Sie können das Picture-in-Picture-Fenster auch schließen (durch Klicken auf das vom Browser bereitgestellte Steuerelement oder durch Ausführen von [`Window.close()`](/de/docs/Web/API/Window/close) auf ihm), und dann darauf reagieren, indem Sie das Standard[`pagehide`](/de/docs/Web/API/Window/pagehide_event) verwenden. Wenn es schließt, sollten Sie den Inhalt, den es angezeigt hat, wieder in das Hauptfenster der App zurücksetzen.

Sehen Sie sich die [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für eine ausführliche Nutzungsanleitung an.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Handhaben von Picture-in-Picture-Fenstern im Dokument.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Erweiterungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS basierend darauf anzuwenden, ob ein Dokument im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Sehen Sie sich das [Document Picture-in-Picture API-Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionsfähige Demonstration an (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
