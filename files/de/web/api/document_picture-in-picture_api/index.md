---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht das Öffnen eines immer im Vordergrund liegenden Fensters, das mit beliebigen HTML-Inhalten gefüllt werden kann — zum Beispiel mit einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die es speziell ermöglicht, ein HTML {{htmlelement("video")}}-Element in ein solches Fenster zu setzen.

## Konzepte und Verwendung

Es ist oft hilfreich, zu einer Web-App zusätzlich zum Hauptfenster ein anderes Fenster verfügbar zu haben, in dem die App ausgeführt wird. Man könnte in anderen Fenstern stöbern und dabei bestimmte Inhalte der App im Blick behalten oder diesen Inhalten ihren eigenen Platz geben, während das Hauptfenster der App frei bleibt, um andere Inhalte anzuzeigen. Man könnte dies dadurch erreichen, dass man einfach ein normales neues Browserfenster öffnet, aber dies hat zwei große Probleme:

1. Man muss die Weitergabe von Zustandsinformationen zwischen den beiden Fenstern verwalten.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund liegendes Fenster zu erzeugen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall bestand darin, Videoinhalte in einem separaten Fenster abzuspielen, damit der Benutzer sie weiterhin konsumieren kann, während er andere Inhalte betrachtet. Dies wird mit der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gelöst, die direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu platzieren.

Diese API wurde jedoch als etwas einschränkend empfunden — man kann nur ein einziges `<video>`-Element in das immer im Vordergrund liegende Fenster setzen, mit minimalen browsergenerierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Diese ermöglicht es, _beliebige_ Inhalte in das immer im Vordergrund liegende Fenster zu setzen, für eine Vielzahl von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund liegender benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Styling zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer immer zu sehen, sowie Steuerelemente zur Präsentation von Inhalten, zum Stummschalten, zum Beenden von Anrufen usw.
- Immer sichtbare Produktivitätswerkzeuge wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, um zusätzliche Inhalte zu halten, während das Hauptfenster der App frei von Unordnung bleibt. Zum Beispiel könnte ein Action- oder Rollenspiel laufen, bei dem Sie die Spielsteuerung, Anweisungen oder Überlieferungen in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster dafür frei bleibt, die Spielorte und Karten anzuzeigen.

### Wie funktioniert es?

Ein neues [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt, das das immer im Vordergrund liegende Picture-in-Picture-Fenster für den aktuellen Dokumentkontext darstellt, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch Aufrufen der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichartigen Fenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt niemals das öffnende Fenster.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf eines pro Browser-Tab zu einem gegebenen Zeitpunkt beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie das `Window`-Exemplar des Picture-in-Picture-Fensters beliebig manipulieren, indem Sie beispielsweise die Inhalte, die Sie dort anzeigen möchten, an sein DOM anhängen und Stylesheets darauf kopieren, damit das angehängte Inhalt im selben Stil dargestellt wird wie im Hauptfenster. Sie können auch das Picture-in-Picture-Fenster schließen (indem Sie auf die vom Browser bereitgestellte Steuerung klicken oder indem Sie [`Window.close()`](/de/docs/Web/API/Window/close) darauf ausführen) und dann darauf reagieren, dass es geschlossen wird, indem Sie die standardmäßige [`pagehide`](/de/docs/Web/API/Window/pagehide_event) verwenden. Wenn es schließt, sollten Sie die Inhalte, die es zeigte, wieder in das Hauptfenster der App zurücklegen.

Siehe [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen detaillierten Gebrauchsanleitung.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Verwalten von Document Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, je nachdem, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Siehe [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demo (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
