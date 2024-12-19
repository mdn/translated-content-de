---
title: Optimierung der Startleistung
slug: Web/Performance/Optimizing_startup_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

Die Verbesserung der Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange dauert es, bis Ihre App startet? Scheint sie das Gerät oder den Browser des Benutzers zu blockieren, während die App geladen wird? Das lässt Benutzer befürchten, dass Ihre Anwendung abgestürzt ist oder dass etwas anderes nicht stimmt. Eine gute Benutzererfahrung stellt sicher, dass Ihre App schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da das ein universelles Problem ist, werden wir uns hier nicht zu sehr darauf konzentrieren. Stattdessen betrachten wir ein wichtigeres Thema beim Erstellen von Web-Apps: so **asynchron** wie möglich zu starten. Das bedeutet, dass nicht der gesamte Startcode in einem einzigen Ereignishandler im Hauptthread der App ausgeführt wird.

Stattdessen sollten Sie einen [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) erstellen, der so viel wie möglich im Hintergrund-Thread erledigt (zum Beispiel das Abrufen und Verarbeiten von Daten). Die Übertragung von Aufgaben an einen Web-Arbeiter entlastet den Hauptthread für Aufgaben, die ihn erfordern, wie Benutzereingaben und UI-Rendering. Im Gegenzug sollten Ereignisse im Hauptthread aus vielen kleinen Aufgaben bestehen, auch bekannt als [Mikro-Aufgaben](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), anstatt aus größeren, zeitaufwendigen Aufgaben.

Asynchrones Laden hilft dabei, zu verhindern, dass Seiten und Benutzeroberflächen unansprechbar erscheinen oder tatsächlich werden. Durch die Minimierung der für einzelne Ladeaufgaben erforderlichen Zeit wird die [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung weiterlaufen, während sie startet. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann das Blockieren des Hauptthreads dazu führen, dass Benutzer Ihre App deinstallieren; zum Beispiel, wenn jemand Ihre App versehentlich startet und nicht daran gehindert wird, die Anwendung zu schließen, könnte er Maßnahmen ergreifen, damit dies nicht versehentlich wieder passiert.

## Wo ein Wille ist…

Es ist einfacher, alles von Anfang an "auf die richtige Weise" zu schreiben, als im Nachhinein für Leistung (und Barrierefreiheit) nachzurüsten. Wenn Sie von Grund auf neu beginnen, bedeutet das Asynchronisieren geeigneter Codeteile, dass ein Nachrüsten nicht erforderlich ist. Alle reinen Startberechnungen sollten in Hintergrund-Threads durchgeführt werden, während Sie die Laufzeit von Ereignissen im Hauptthread so kurz wie möglich halten. Anstatt einen Fortschrittsbalken einzufügen, damit der Benutzer weiß, was passiert und wie lange er warten muss, machen Sie den Fortschrittsbalken überflüssig.

Andererseits kann das Portieren einer bestehenden App ins Web eine Herausforderung darstellen. Native Anwendungen müssen nicht asynchron geschrieben werden, da das Betriebssystem normalerweise das Laden für Sie übernimmt. Die Quellanwendung könnte eine Hauptschleife haben, die leicht so angepasst werden kann, dass sie asynchron arbeitet (indem jede Iteration der Hauptschleife separat ausgeführt wird); der Start ist oft nur ein kontinuierlicher, monolithischer Prozess, der möglicherweise periodisch einen Fortschrittsmesser aktualisiert.

Obwohl Sie [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um auch sehr große, lang andauernde Stücke von [JavaScript](/de/docs/Web/JavaScript)-Code asynchron auszuführen, gibt es ein großes Aber: Web-Arbeiter können nicht direkt das [DOM](/de/docs/Web/API/Document_Object_Model) manipulieren und haben eingeschränkten Zugriff auf Methoden und Eigenschaften des [window](/de/docs/Web/API/Window)-Objekts, einschließlich keinem Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Dies bedeutet, dass, es sei denn, Sie können leicht die "reinen Berechnungs"-Teile Ihres Startprozesses in Arbeiter auslagern, Sie vermutlich den größten Teil oder den gesamten Startcode im Hauptthread ausführen müssen.

Aber auch solcher Code kann mit etwas Arbeit asynchron gemacht werden.

## Asynchronisieren

Hier sind einige Vorschläge, wie Sie Ihren Startprozess so asynchron wie möglich gestalten können (ob es sich um eine neue App oder einen Port handelt):

- Verwenden Sie das Attribut [`defer`](/de/docs/Web/HTML/Element/script#defer) oder [`async`](/de/docs/Web/HTML/Element/script#async) auf `script`-Tags, die von der Webanwendung benötigt werden. Dies ermöglicht es HTML-Parsern, die Dokumentverarbeitung fortzusetzen, anstatt darauf warten zu müssen, bis die Skripte heruntergeladen und ausgeführt wurden, bevor fortgefahren wird.
- Wenn Sie Asset-Dateien dekodieren müssen (zum Beispiel das Dekodieren von JPEG-Dateien und das Umwandeln in rohe Texturdaten zur späteren Verwendung durch WebGL), ist es von Vorteil, dies in Arbeitern zu tun.
- Wenn Sie mit vom Browser unterstützten Daten arbeiten (zum Beispiel die Dekodierung von Bilddaten), verwenden Sie die im Browser oder Gerät integrierten Decoder, anstatt eigene zu entwickeln oder einen aus dem Originalcode zu verwenden. Der bereitgestellte ist fast sicher erheblich schneller und verringert zudem die Größe Ihrer App. Darüber hinaus kann der Browser diese Decoder möglicherweise automatisch parallelisieren.
- Alle Datenverarbeitungen, die parallel durchgeführt werden können, sollten parallel ausgeführt werden. Führen Sie keine Datenstücke nacheinander durch; erledigen Sie sie alle gleichzeitig, wenn möglich!
- Schließen Sie keine Skripte oder Stylesheets in Ihre Start-HTML-Datei ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) teilnehmen. Laden Sie sie nur bei Bedarf nach.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versuchen Sie, die minimierte Version der Datei an den Browser zu senden und Komprimierungen wie Gzip oder Brotli zu verwenden.
- Nutzen Sie Ressourcenvorankündigungen (wie preconnect oder preload), wann immer möglich, um dem Browser anzuzeigen, welche Dateien für Ihre Anwendung kritischer sind.

Je mehr Sie asynchron erledigen können, desto besser kann Ihre App von Mehrkernprozessoren profitieren.

### Portierungsprobleme

Sobald das initiale Laden abgeschlossen ist und der Hauptcode der App ausgeführt wird, ist es möglich, dass Ihre App einspurig arbeiten muss, insbesondere wenn es sich um einen Port handelt. Das Wichtigste, was Sie tun sollten, um beim Startprozess des Hauptcodes zu helfen, ist, den Code in kleine Stücke aufzuteilen. Diese können dann in Stücken über mehrere Aufrufe der Hauptschleife Ihrer App verteilt ausgeführt werden (damit der Hauptthread Eingaben und Ähnliches bearbeiten kann).

Emscripten bietet eine API, die bei dieser Umstrukturierung hilft; zum Beispiel können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion zu etablieren, die ausgeführt wird, bevor der Hauptthread fortfahren darf. Durch die Einrichtung einer Warteschlange von Funktionen, die nacheinander aufgerufen werden, können Sie Teile des Codes einfacher verwalten, ohne den Hauptthread zu blockieren.

Das hinterlässt jedoch das Problem, Ihren vorhandenen Code tatsächlich so zu refaktorisieren, dass er auf diese Weise funktioniert. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich werden?

Je schneller Ihre Seite zuerst nutzbar wird und je reaktionsschneller sie auf Benutzereingaben ist, desto besser wird sie wahrgenommen.
Eine Seite, die 1 oder 2 Sekunden braucht, bevor der Inhalt zuerst erscheint, wird normalerweise als schnell angesehen; wenn Sie es gewohnt sind, dass Seiten 3 oder 4 Sekunden brauchen, dann fühlen sich 7 oder 8 Sekunden sehr lang an.

In Bezug auf die Reaktionsschnelligkeit wird ein Benutzer eine Verzögerung von 50 ms oder weniger nicht bemerken. Jede Verzögerung von über 200 ms lässt Ihre Seite träge erscheinen. Beim Arbeiten zur Verbesserung des Ladens und der Reaktionsfähigkeit Ihrer Anwendungen bedenken Sie, dass viele Ihrer Benutzer möglicherweise über ältere, langsamere Computer verfügen als Sie, wodurch sie möglicherweise längere Verzögerungen erfahren als Sie!

## Weitere Vorschläge

Es gibt noch andere Dinge, die über asynchrones Arbeiten hinausgehen, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige von ihnen:

- Downloadzeit
  - : Berücksichtigen Sie, wie lange es dauern wird, bis der Benutzer die Daten Ihrer Anwendung heruntergeladen hat. Wenn Ihre Anwendung sehr beliebt ist oder häufig Inhalte neu herunterladen muss, sollten Sie versuchen, einen möglichst schnellen Hosting-Server zu haben. Komprimieren Sie immer Ihre Daten {{Glossary("gzip_compression", "komprimieren")}}, um sie so klein wie möglich zu machen.
- Datengröße
  - : Versuchen Sie, die Größe Ihrer Daten bestmöglich zu optimieren; kleinere Level-Dateien werden schneller heruntergeladen und verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um den Benutzer während des Startvorgangs zu beschäftigen, wird helfen, die Zeit schneller vergehen zu lassen. Die Anzeige eines Schein-Splash-Bildschirms kann die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) verbessern. Für umfangreiche Seiten hilft alles, was den Benutzer das Gefühl vermittelt, dass Ihre App etwas tut, anstatt still dazusitzen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (oder jedem kompiliertem Codebase) Start-Up-Erfahrung](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
