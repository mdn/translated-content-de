---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: ac80d4deda2b072a4fc7e866b5edb14a91226319
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht es, ein immer im Vordergrund stehendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann — zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die es speziell ermöglicht, ein HTML-{{htmlelement("video")}}-Element in ein immer im Vordergrund stehendes Fenster zu setzen.

## Konzepte und Verwendung

Es ist oft hilfreich, zusätzlich zum Hauptfenster, in dem die Web-App läuft, ein anderes Fenster zur Verfügung zu haben. Sie möchten möglicherweise in anderen Fenstern stöbern, während Sie bestimmte App-Inhalte im Blick behalten, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Haupt-App-Fenster frei bleibt, um andere Inhalte anzuzeigen. Sie könnten dies einfach durch das Öffnen eines regulären neuen Browserfensters handhaben, aber dies hat zwei wesentliche Probleme:

1. Sie müssen den Austausch von Statusinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund stehendes Fenster zu erzeugen, das Teil derselben Sitzung ist. Der erste erkannte Anwendungsfall war, Videoinhalte in einem separaten Fenster zu halten, damit der Nutzer diese weiter konsumieren kann, während er andere Inhalte betrachtet. Dies wird mit der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) behandelt, die direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu platzieren.

Diese API wurde jedoch als etwas einschränkend empfunden: Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund stehende Fenster setzen, mit minimalen browsergenerierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Diese erlaubt es, _beliebigen_ Inhalt in das immer im Vordergrund stehende Fenster zu platzieren, für eine Vielzahl von Anwendungsfällen, darunter z.B.:

- Ein immer im Vordergrund stehender benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stil zeigt.
- Ein Videokonferenzsystem, das es dem Nutzer ermöglicht, die Streams der anderen Teilnehmer, sowie Steuerelemente für Präsentationen, Stummschaltung, Gesprächsende usw., stets sichtbar zu haben.
- Immer sichtbare Produktivitätstools wie Timer, Notizen, To-Do-Listen, Messenger-Tools, usw.
- Ein separates Fenster, in dem zusätzliche Inhalte gehalten werden, während das Haupt-App-Fenster frei von Unordnung bleibt. Zum Beispiel könnte ein Action- oder Rollenspiel laufen, bei dem Sie die Spielsteuerung, Anweisungen oder Hintergrundstory in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster frei bleibt, um die Spielorte und Karten anzuzeigen.

### Wie funktioniert es?

Eine neue Instanz des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts, die das immer im Vordergrund stehende Picture-in-Picture-Fenster für den aktuellen Dokumentkontext repräsentiert, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch den Aufruf der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichherkunftsfenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, weist jedoch einige Unterschiede auf:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt das öffnende Fenster nie.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf eins pro Browser-Tab gleichzeitig beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters beliebig manipulieren, zum Beispiel, indem Sie den Inhalt, den Sie dort anzeigen möchten, seinem DOM hinzufügen und Stile dorthin kopieren, sodass der hinzugefügte Inhalt genauso gestylt wird, wie wenn er sich im Hauptfenster befindet. Sie können das Picture-in-Picture-Fenster auch schließen (indem Sie die vom Browser bereitgestellte Steuerung anklicken oder [`Window.close()`](/de/docs/Web/API/Window/close) darauf ausführen) und dann darauf reagieren, indem Sie das Standardereignis [`pagehide`](/de/docs/Web/API/Window/pagehide_event) verwenden. Wenn es geschlossen wird, sollten Sie den Inhalt, den es zeigte, zurück in das Haupt-App-Fenster setzen.

Siehe [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen detaillierten Leitfaden.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Handhaben von Document Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture` Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Media Feature](/de/docs/Web/CSS/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Siehe [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demo (sehen Sie auch den vollständigen [Quellcode](https://github.com/chrisdavidmills/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
