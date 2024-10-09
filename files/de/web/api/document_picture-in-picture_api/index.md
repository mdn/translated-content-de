---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: 26aaa0b6f92933d915563b1d1210cc46f4ec0e09
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture API** ermöglicht das Öffnen eines immer im Vordergrund befindlichen Fensters, das mit beliebigem HTML-Inhalt gefüllt werden kann — zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen. Sie erweitert die frühere [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die es speziell ermöglicht, ein HTML `<video>`-Element in ein immer im Vordergrund befindliches Fenster zu platzieren.

## Konzepte und Nutzung

Es ist oft hilfreich, für eine Web-App ein anderes Fenster zur Verfügung zu haben, zusätzlich zum Hauptfenster, in dem die App läuft. Sie möchten möglicherweise andere Fenster durchsuchen, während Sie bestimmte App-Inhalte im Blick behalten, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Haupt-App-Fenster frei bleibt, um andere Inhalte anzuzeigen. Sie könnten dies einfach durch das Öffnen eines normalen neuen Browserfensters handhaben, aber das hat zwei wesentliche Probleme:

1. Sie müssen den Austausch von Zustandsinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund befindliches Fenster zu öffnen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war, Videoinhalte in einem separaten Fenster weiter abzuspielen, sodass der Benutzer sie konsumieren kann, während er andere Inhalte ansieht. Dies wird mittels der [Picture-in-Picture API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf ein `<video>`-Element angewendet wird, um es in das separate Fenster zu platzieren.

Diese API wurde jedoch als etwas einschränkend empfunden — Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund befindliche Fenster setzen, mit minimalen browsergenerierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture API** eingeführt. Dies ermöglicht es, _beliebige_ Inhalte in das immer im Vordergrund befindliche Fenster zu platzieren, für eine breite Palette von Anwendungsfällen, einschließlich:

- Ein immer im Vordergrund befindlicher benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Styling zeigt.
- Ein Videokonferenzsystem, das dem Benutzer ermöglicht, die Streams des anderen Teilnehmers immer zu sehen, sowie Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätstools wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, in dem zusätzliche Inhalte gehalten werden, während das Haupt-App-Fenster von Unordnung frei bleibt. Zum Beispiel könnten Sie ein Aktions- oder Rollenspiel laufen haben, bei dem Sie die Spielsteuerung, Anleitungen oder Überlieferungen in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster für die Darstellung der Spielorte und -karten frei bleibt.

### Wie funktioniert es?

Eine neue Instanz des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts, das das immer im Vordergrund befindliche Picture-in-Picture-Fenster für den aktuellen Dokumentkontext darstellt, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch Aufrufen der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleich-origin-Fenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster lebt nie länger als das eröffnende Fenster.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf eines pro Browser-Tab zu einem Zeitpunkt beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters beliebig manipulieren, indem Sie beispielsweise die dort anzuzeigenden Inhalte an sein DOM anhängen und Stylesheets darauf kopieren, sodass der angehängte Inhalt genauso gestylt wird, wie wenn er im Hauptfenster ist. Sie können das Picture-in-Picture-Fenster auch schließen (durch Klicken auf das vom Browser bereitgestellte Steuerelement oder durch Ausführen von [`Window.close()`](/de/docs/Web/API/Window/close) darauf) und dann darauf reagieren, dass es mit dem Standard-Event [`pagehide`](/de/docs/Web/API/Window/pagehide_event) geschlossen wird. Wenn es geschlossen wird, möchten Sie den von ihm gezeigten Inhalt in das Haupt-App-Fenster zurücklegen.

Siehe [Using the Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen detaillierten Nutzungsleitfaden.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zum Erstellen und Handhaben von Dokument-Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Event-Objekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Event, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## Zusätze zu CSS

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Siehe [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demo (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
