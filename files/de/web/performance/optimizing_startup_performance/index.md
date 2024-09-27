---
title: Optimierung der Startleistung
slug: Web/Performance/Optimizing_startup_performance
l10n:
  sourceCommit: 3d99c28bf464d39683c27d63081c2d393cc4643b
---

{{QuickLinksWithSubPages("Web/Performance")}}

Die Verbesserung der Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange dauert es, bis Ihre App startet? Scheint es, als würde das Gerät oder der Browser des Benutzers blockiert, während die App geladen wird? Das lässt Benutzer befürchten, dass Ihre Anwendung abgestürzt ist oder dass etwas nicht stimmt. Eine gute Benutzererfahrung umfasst, dass Ihre App schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für die Portierung von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da das ein universelles Problem ist, werden wir uns hier nicht zu sehr darauf konzentrieren. Stattdessen betrachten wir ein wichtigeres Problem beim Erstellen von Web-Apps: so **asynchron** wie möglich zu starten. Das bedeutet, dass Sie nicht all Ihren Startcode in einem einzelnen Ereignishandler auf dem Hauptthread der App ausführen.

Erstellen Sie stattdessen einen [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers), der so viel wie möglich in einem Hintergrund-Thread erledigt (zum Beispiel das Abrufen und Verarbeiten von Daten). Das Auslagern von Aufgaben an einen Web Worker entlastet den Hauptthread für Aufgaben, die ihn erfordern, wie Benutzereingaben und das Rendern der Benutzeroberfläche. Im Gegenzug sollten Haupt-Thread-Ereignisse aus vielen kleinen Aufgaben bestehen, auch bekannt als [Mikroaufgaben](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), anstatt aus größeren, zeitaufwendigeren Aufgaben.

Asynchrones Laden hilft zu verhindern, dass Seiten und Benutzeroberflächen unansprechbar erscheinen oder tatsächlich werden. Durch die Minimierung der für einzelne Ladeaufgaben erforderlichen Zeit bleibt der [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung während des Starts erhalten. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann das Blockieren des Hauptthreads dazu führen, dass Benutzer Ihre App deinstallieren; zum Beispiel, wenn jemand Ihre App versehentlich startet und nicht daran gehindert wird, die Anwendung zu schließen, können sie Maßnahmen ergreifen, um zu verhindern, dass dies versehentlich wieder passiert.

## Wo ein Wille ist…

Es ist einfacher, alles beim ersten Mal "richtig" zu schreiben, als es nachträglich auf Leistung (und Zugänglichkeit) zu optimieren. Wenn Sie von Grund auf neu beginnen, bedeutet das, dass das Asynchronisieren entsprechender Codeteile eine nachträgliche Anpassung überflüssig macht. Alle reinen Startberechnungen sollten in Hintergrund-Threads ausgeführt werden, während Sie die Laufzeit von Haupt-Thread-Ereignissen so kurz wie möglich halten. Anstatt einen Fortschrittsbalken einzubeziehen, damit der Benutzer weiß, was vor sich geht und wie lange er warten wird, machen Sie den Fortschrittsbalken überflüssig.

Andererseits kann die Portierung einer bestehenden App auf das Web eine Herausforderung sein. Native Anwendungen müssen nicht asynchron geschrieben werden, da das Betriebssystem das Laden in der Regel für Sie übernimmt. Die Quellanwendung könnte eine Hauptschleife haben, die leicht asynchron betrieben werden kann (indem jede Hauptschleifeniteration separat ausgeführt wird); der Start ist oft nur ein kontinuierlicher, monolithischer Prozess, der möglicherweise regelmäßig ein Fortschrittsmessgerät aktualisiert.

Während Sie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um sogar sehr große, lang andauernde Stücke von [JavaScript](/de/docs/Web/JavaScript)-Code asynchron auszuführen, gibt es einen großen Vorbehalt: Web Workers können den [DOM](/de/docs/Web/API/Document_Object_Model) nicht direkt manipulieren und haben nur eingeschränkten Zugriff auf Methoden und Eigenschaften des [window](/de/docs/Web/API/Window)-Objekts, einschließlich keinem Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Dies bedeutet, dass, es sei denn, Sie können die "reinen Berechnungs"-Teile Ihres Startprozesses einfach in Worker auslagern, müssen Sie wahrscheinlich den Großteil oder gesamten Startcode im Hauptthread ausführen.

Aber auch solcher Code kann mit ein wenig Arbeit asynchronisiert werden.

## Asynchronisieren

Hier sind einige Vorschläge, wie Sie Ihren Startprozess so asynchron wie möglich gestalten können (ob es sich um eine neue App oder eine Portierung handelt):

- Verwenden Sie das [`defer`](/de/docs/Web/HTML/Element/script#defer) oder [`async`](/de/docs/Web/HTML/Element/script#async)-Attribut bei den Skripttags, die von der Webanwendung benötigt werden. Dadurch können HTML-Parser weiterhin das Dokument verarbeiten, anstatt warten zu müssen, bis die Skripts heruntergeladen und ausgeführt wurden.
- Wenn Sie Asset-Dateien dekodieren müssen (zum Beispiel JPEG-Dateien dekodieren und sie in rohe Texturdaten für die spätere Verwendung durch WebGL umwandeln), ist das in Workern hervorragend zu erledigen.
- Wenn Sie mit Daten arbeiten, die vom Browser unterstützt werden (zum Beispiel das Dekodieren von Bilddaten), verwenden Sie die im Browser oder Gerät integrierten Decoder, anstatt eigene zu erstellen oder einen aus der ursprünglichen Codebasis zu verwenden. Der bereitgestellte ist fast sicher deutlich schneller und reduziert auch die Größe Ihrer App. Zusätzlich kann der Browser diese Decoder möglicherweise automatisch parallelisieren.
- Jede Datenverarbeitung, die parallel durchgeführt werden kann, sollte es auch sein. Bearbeiten Sie nicht einen Datenblock nach dem anderen, sondern führen Sie alle gleichzeitig aus, wenn möglich!
- Schließen Sie keine Skripte oder Stylesheets ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) Ihres Start-HTML-Dokuments beteiligt sind. Laden Sie sie nur bei Bedarf.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versuchen Sie, die minifizierte Version der Datei an den Browser zu senden und verwenden Sie Komprimierung wie Gzip oder Brotli.
- Nutzen Sie Ressourcenvorhersagen (wie Preconnect oder Preload) wann immer möglich, um dem Browser anzuzeigen, welche Dateien für Ihre Anwendung kritischer sind.

Je mehr Sie asynchron tun können, desto besser kann Ihre App die Vorteile von Mehrkernprozessoren nutzen.

### Portierungsprobleme

Sobald das initiale Laden abgeschlossen ist und der Hauptcode der App zu laufen beginnt, ist es möglich, dass Ihre App besonders dann, wenn sie eine Portierung ist, einthreadsynchron sein muss. Das Wichtigste, um dem Hauptstartprozess des Codes zu helfen, ist, den Code in kleine Stücke zu refaktorisieren. Diese können dann in Stücken über mehrere Aufrufe der Hauptschleife Ihrer App hinweg ausgeführt werden (damit der Hauptthread Input und Ähnliches verarbeiten kann).

Emscripten bietet eine API, die bei dieser Refaktorisierung hilft; zum Beispiel können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion festzulegen, die ausgeführt wird, bevor der Hauptthread fortfahren darf. Indem Sie eine Warteschlange von Funktionen aufstellen, die der Reihe nach aufgerufen werden, können Sie Bits von Code einfacher ausführen, ohne den Hauptthread zu blockieren.

Es bleibt jedoch das Problem, Ihren vorhandenen Code tatsächlich so zu refaktorisieren, dass er so funktioniert. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich sein?

Je schneller Ihre Seite zuerst nutzbar wird und je reaktionsschneller sie auf Benutzereingaben reagiert, desto besser wird sie wahrgenommen.
Eine Seite, die 1 oder 2 Sekunden benötigt, bevor Inhalte erscheinen, wird normalerweise als schnell angesehen; wenn Sie es gewohnt sind, dass Seiten 3 oder 4 Sekunden benötigen, dann fühlen sich 7 oder 8 Sekunden wie eine sehr lange Zeit an.

In Bezug auf die Reaktionsfähigkeit werden Benutzer Verzögerungen von 50 ms oder weniger nicht bemerken. Jede Verzögerung von über 200 ms lässt die Seite als träge erscheinen. Denken Sie bei der Verbesserung der Ladezeiten und der Reaktionsfähigkeit Ihrer Anwendungen daran, dass viele Ihrer Benutzer möglicherweise ältere, langsamere Computer als Sie haben, weshalb sie längere Verzögerungen erleben könnten!

## Weitere Vorschläge

Es gibt andere Dinge, abgesehen vom Asynchronisieren, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige davon:

- Downloadzeit
  - : Bedenken Sie, wie lange es dauern wird, bis der Benutzer die Daten Ihrer Anwendung herunterlädt. Wenn Ihre Anwendung sehr beliebt ist oder häufig Inhalte neu laden muss, sollten Sie versuchen, den schnellstmöglichen Hosting-Server zu haben. Komprimieren Sie immer [die Daten](/de/docs/Glossary/gzip_compression), um sie so klein wie möglich zu halten.
- Datengröße
  - : Optimieren Sie die Größe Ihrer Daten bestmöglich; kleinere Dateien laden und werden schneller verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um den Benutzer während des Startvorgangs zu beschäftigen, hilft dabei, die Zeit schneller vergehen zu lassen. Ein Mock-Splashscreen kann die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) verbessern. Bei schweren Seiten hilft alles, was den Benutzer das Gefühl gibt, dass Ihre App etwas tut, anstatt still dazustehen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (oder jede kompilierte Codebasis) Startup-Erfahrung](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
