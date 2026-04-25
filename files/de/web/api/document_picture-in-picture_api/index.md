---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Die **Document-Picture-in-Picture-API** ermöglicht es, ein immer im Vordergrund bleibendes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann – zum Beispiel ein Video mit benutzerdefinierten Steuerelementen oder eine Auswahl von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen. Sie erweitert die frühere [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API), die speziell es ermöglicht, ein HTML-{{htmlelement("video")}}-Element in ein immer im Vordergrund bleibendes Fenster zu platzieren.

## Konzepte und Verwendung

Es ist oft hilfreich, für eine Web-App neben dem Hauptfenster, in dem die App läuft, ein weiteres Fenster zur Verfügung zu haben. Sie möchten möglicherweise andere Fenster durchsuchen, während bestimmte App-Inhalte im Blick bleiben, oder Sie möchten diesen Inhalten ihren eigenen Raum geben, während das Haupt-App-Fenster frei bleibt, um andere Inhalte anzuzeigen. Sie könnten dies erreichen, indem Sie einfach ein reguläres neues Browserfenster öffnen, aber das hat zwei wesentliche Probleme:

1. Sie müssen die gemeinsame Nutzung von Zustandsinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Um diese Probleme zu lösen, haben Webbrowser APIs eingeführt, die es Apps ermöglichen, ein immer im Vordergrund bleibendes Fenster zu erzeugen, das Teil derselben Sitzung ist. Der erste anerkannte Anwendungsfall war, Videoinhalte in einem separaten Fenster abzuspielen, sodass der Benutzer sie weiterhin konsumieren kann, während er andere Inhalte ansieht. Dies wird über die [Picture-in-Picture-API für `<video>`](/de/docs/Web/API/Picture-in-Picture_API) gehandhabt, die direkt auf ein {{htmlelement("video")}}-Element angewendet wird, um es in das separate Fenster zu platzieren.

Diese API hat sich als etwas einschränkend erwiesen – Sie können nur ein einzelnes `<video>`-Element in das immer im Vordergrund bleibende Fenster platzieren, mit minimalen vom Browser erzeugten Steuerelementen. Um mehr Flexibilität zu bieten, wurde die **Document-Picture-in-Picture-API** eingeführt. Diese ermöglicht es, _beliebige_ Inhalte in das immer im Vordergrund bleibende Fenster zu platzieren, für zahlreiche Anwendungsfälle, einschließlich:

- Ein immer im Vordergrund bleibender benutzerdefinierter Videoplayer, der ein oder mehrere Videos mit benutzerdefinierten Steuerelementen und Stilen zeigt.
- Ein Videokonferenzsystem, das es dem Benutzer ermöglicht, die Streams der anderen Teilnehmer immer zu sehen, sowie Steuerelemente für das Präsentieren von Inhalten, Stummschalten, Beenden von Anrufen usw.
- Immer sichtbare Produktivitätswerkzeuge wie Timer, Notizen, To-Do-Listen, Messenger-Tools usw.
- Ein separates Fenster, in dem zusätzliche Inhalte aufbewahrt werden, während das Haupt-App-Fenster von Unordnung frei bleibt. Zum Beispiel könnte ein Action- oder Rollenspiel laufen, bei dem Sie die Spielsteuerung, Anweisungen oder Hintergrundinformationen in einem zusätzlichen Fenster anzeigen möchten, während das Hauptfenster für die Anzeige der Spielorte und der Karte frei bleibt.

### Wie funktioniert es?

Eine neue [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objektinstanz, die das immer im Vordergrund bleibende Picture-in-Picture-Fenster für den aktuellen Dokumentenkontext darstellt, ist über [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) verfügbar. Das Picture-in-Picture-Fenster wird durch den Aufruf der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet, die ein {{jsxref("Promise")}} zurückgibt, das mit dem eigenen [`Window`](/de/docs/Web/API/Window)-Objekt des Fensters erfüllt wird.

Das Picture-in-Picture-Fenster ähnelt einem leeren gleichartigen Ursprungsfenster, das über [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, mit einigen Unterschieden:

- Das Picture-in-Picture-Fenster schwebt über anderen Fenstern.
- Das Picture-in-Picture-Fenster überdauert nicht das öffnende Fenster.
- Das Picture-in-Picture-Fenster kann nicht navigiert werden.
- Die Position des Picture-in-Picture-Fensters kann nicht von der Website festgelegt werden.
- Es ist jeweils nur ein Picture-in-Picture-Fenster pro Browser-Tab erlaubt, wobei der User-Agent möglicherweise die globale Anzahl der geöffneten Picture-in-Picture-Fenster weiter einschränkt.

Abgesehen davon können Sie die `Window`-Instanz des Picture-in-Picture-Fensters beliebig manipulieren, indem Sie zum Beispiel den Inhalt, den Sie dort anzeigen möchten, an dessen DOM anfügen und Stylesheets darauf kopieren, sodass der angefügte Inhalt auf dieselbe Weise wie im Hauptfenster gestylt wird. Sie können das Picture-in-Picture-Fenster auch schließen (indem Sie das vom Browser bereitgestellte Steuerungselement anklicken oder [`Window.close()`](/de/docs/Web/API/Window/close) darauf ausführen) und dann darauf reagieren, dass es mit dem Standard-[`pagehide`](/de/docs/Web/API/Window/pagehide_event) ereignis geschlossen wird. Wenn es sich schließt, möchten Sie den angezeigten Inhalt zurück in das Haupt-App-Fenster verschieben.

Siehe [Verwendung der Document-Picture-in-Picture-API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für einen detaillierten Leitfaden.

## Schnittstellen

- [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)
  - : Der Einstiegspunkt zur Erstellung und Handhabung von Document-Picture-in-Picture-Fenstern.
- [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)
  - : Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

## Erweiterungen anderer Schnittstellen

- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)
  - : Gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentenkontext zurück.

## CSS-Ergänzungen

- {{cssxref("@media/display-mode", "display-mode")}}, der `picture-in-picture`-Wert
  - : Ein [CSS](/de/docs/Web/CSS) [Medienmerkmal-Wert](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), der es Entwicklern ermöglicht, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird.

## Beispiele

Siehe [Document-Picture-in-Picture-API-Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für ein vollständig funktionierendes Demo (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
