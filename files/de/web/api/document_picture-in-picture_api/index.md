---
title: Dokument Picture-in-Picture-API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: ac80d4deda2b072a4fc7e866b5edb14a91226319
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document Picture-in-Picture-API** ermöglicht das Öffnen eines immer-im-Vordergrund Fensters, das mit beliebigem HTML-Inhalt gefüllt werden kann – zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Gruppe von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. Sie erweitert die frühere [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die speziell ein HTML-{{htmlelement("video")}}-Element ermöglicht, in ein immer-im-Vordergrund Fenster gelegt zu werden.

## Konzepte und Nutzung

Es ist oft hilfreich, ein weiteres Fenster für eine Web-App zur Verfügung zu haben, zusätzlich zum Hauptfenster, in dem die App läuft. Vielleicht möchten Sie andere Fenster durchsuchen, während Sie bestimmten App-Inhalt im Blick behalten, oder Sie möchten diesem Inhalt eigenen Platz geben, während das Haupt-App-Fenster für die Anzeige anderer Inhalte freigehalten wird. Dies könnten Sie durch das Öffnen eines regulären neuen Browser-Fensters lösen, aber hierbei gibt es zwei wesentliche Probleme:

1. Sie müssen den Austausch von Zustandsinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer-im-Vordergrund Fenster zu erzeugen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war das Abspielen von Videoinhalten in einem separaten Fenster, sodass der Benutzer diese weiter konsumieren kann, während er andere Inhalte betrachtet. Dies wird mit der [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, welche direkt auf einem {{htmlelement("video")}}-Element verwendet wird, um es in das separate Fenster zu platzieren.

Diese API wurde jedoch als etwas einschränkend empfunden – man kann nur ein einzelnes `<video>`-Element in das immer-im-Vordergrund Fenster setzen, mit minimalen vom Browser generierten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document Picture-in-Picture-API** eingeführt. Dies ermöglicht es, _jeden_ Inhalt in das immer-im-Vordergrund Fenster zu setzen, für eine Vielzahl von Anwendungsfällen, einschließlich:

- Ein immer-im-Vordergrund benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stilen zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer erlaubt, immer die Streams anderer Teilnehmer zu sehen, sowie Steuerelemente zum Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätstools wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, um zusätzlichen Inhalt zu behalten, während das Haupt-App-Fenster frei von Unordnung bleibt. Zum Beispiel könnte ein Action- oder Rollenspiel laufen, bei dem Sie die Spielsteuerungen, Anleitungen oder Überlieferungen in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster frei bleibt, um die Spielorte und die Karte anzuzeigen.

### Wie funktioniert es?

Ein neues {{domxref("DocumentPictureInPicture")}}-Objekt, das das immer-im-Vordergrund Picture-in-Picture-Fenster für den aktuellen Dokumentkontext darstellt, ist über {{domxref("Window.documentPictureInPicture")}} verfügbar. Das Picture-in-Picture-Fenster wird durch den Aufruf der Methode {{domxref("DocumentPictureInPicture.requestWindow()")}} geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen {{domxref("Window")}}-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren same-origin Fenster, das über {{domxref("Window.open()")}} geöffnet wird, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überlebt das öffnende Fenster nicht.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Das Picture-in-Picture-Fenster ist auf eines pro Browser-Tab gleichzeitig beschränkt, wobei der Benutzeragent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters beliebig manipulieren, zum Beispiel den Inhalt, den Sie dort anzeigen möchten, in deren DOM einfügen und Stylesheets kopieren, sodass der eingefügte Inhalt auf die gleiche Weise gestylt wird, wie wenn er im Hauptfenster wäre. Sie können das Picture-in-Picture-Fenster auch schließen (durch Klicken auf die vom Browser bereitgestellte Steuerung oder durch Ausführen von {{domxref("Window.close()")}} darauf) und dann auf das Schließen mit dem Standard-[`pagehide`](/de/docs/Web/API/Window/pagehide_event) reagieren. Beim Schließen sollten Sie den Inhalt, der es zeigte, wieder in das Haupt-App-Fenster zurücklegen.

Siehe [Verwendung der Document Picture-in-Picture-API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für eine detaillierte Gebrauchsanweisung.

## Schnittstellen

- {{domxref("DocumentPictureInPicture")}}
  - : Der Einstiegspunkt zum Erstellen und Verwalten von Dokument-Picture-in-Picture-Fenstern.
- {{domxref("DocumentPictureInPictureEvent")}}
  - : Ereignisobjekt für das {{domxref("DocumentPictureInPicture/enter_event", "enter")}}-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("Window.documentPictureInPicture")}}
  - : Gibt eine Referenz auf das {{domxref("DocumentPictureInPicture")}}-Objekt für den aktuellen Dokumentkontext zurück.

## CSS-Erweiterungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features)-Wert, der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Sehen Sie sich das [Document Picture-in-Picture API-Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionierende Demo an (siehe auch den vollständigen [Quellcode](https://github.com/chrisdavidmills/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
