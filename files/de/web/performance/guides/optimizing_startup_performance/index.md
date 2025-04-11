---
title: Optimieren der Startleistung
slug: Web/Performance/Guides/Optimizing_startup_performance
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Verbesserung der Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange benötigt Ihre App zum Starten? Scheint sie das Gerät oder den Browser des Benutzers zu blockieren, während die App lädt? Das bereitet den Nutzern Sorgen, dass Ihre Anwendung abgestürzt ist oder etwas anderes nicht stimmt. Eine gute Benutzererfahrung schließt ein, dass Ihre App schnell geladen wird. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da dies ein universelles Problem ist, werden wir darauf nicht allzu sehr eingehen. Stattdessen werden wir auf ein wichtigeres Thema beim Erstellen von Web-Apps eingehen: so **asynchron** wie möglich zu starten. Das bedeutet, nicht den gesamten Startcode in einem einzigen Ereignishandler im Hauptthread der App auszuführen.

Erstellen Sie stattdessen einen [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers), der so viel wie möglich in einem Hintergrundthread erledigt (zum Beispiel das Abrufen und Verarbeiten von Daten). Das Zuweisen von Aufgaben an einen Web Worker entlastet den Hauptthread für Aufgaben, die ihn erfordern, wie Benutzereingaben und das Rendern der Benutzeroberfläche. Im Ergebnis sollten Ereignisse im Hauptthread aus vielen kleinen Aufgaben bestehen, auch bekannt als [Mikroaufgaben](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), anstatt aus größeren, zeitintensiveren Aufgaben.

Asynchrones Laden hilft zu verhindern, dass Seiten und Benutzeroberflächen unempfänglich erscheinen oder tatsächlich werden. Durch die Minimierung der Zeit, die für jede einzelne Ladeaufgabe benötigt wird, wird die [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung weiterhin durchlaufen, während sie startet. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann das Blockieren des Hauptthreads dazu führen, dass Benutzer Ihre App deinstallieren; zum Beispiel, wenn jemand Ihre App versehentlich startet und nicht daran gehindert wird, die Anwendung zu schließen, wollen sie möglicherweise Maßnahmen ergreifen, damit dies nicht wieder aus Versehen geschieht.

## Wo ein Wille ist

Es ist einfacher, alles gleich beim ersten Mal „richtig“ zu schreiben, als es nachträglich für Leistung (und Barrierefreiheit) zu optimieren. Wenn Sie von Grund auf neu beginnen, bedeutet das Asynchronisieren geeigneter Codeabschnitte, dass ein nachträglicher Umbau nicht erforderlich ist. Alle reinen Startberechnungen sollten in Hintergrundthreads durchgeführt werden, während Sie die Ausführungszeit von Ereignissen im Hauptthread so kurz wie möglich halten. Anstatt einen Fortschrittsindikator zu integrieren, damit der Benutzer weiß, was vor sich geht und wie lange er warten muss, machen Sie die Fortschrittsleiste überflüssig.

Andererseits kann das Portieren einer bestehenden App auf das Web eine Herausforderung sein. Native Anwendungen müssen nicht asynchron geschrieben werden, da das Betriebssystem das Laden normalerweise für Sie übernimmt. Die Quellanwendung könnte eine Hauptschleife haben, die leicht asynchron betrieben werden kann (indem jede Iteration der Hauptschleife separat ausgeführt wird); der Start ist oft nur ein kontinuierliches, monolithisches Verfahren, das möglicherweise periodisch einen Fortschrittsbalken aktualisiert.

Obwohl Sie [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um sogar sehr große, lang andauernde Stücke von [JavaScript](/de/docs/Web/JavaScript)-Code asynchron auszuführen, gibt es einen großen Vorbehalt: Web Worker können den [DOM](/de/docs/Web/API/Document_Object_Model) nicht direkt manipulieren und haben eingeschränkten Zugriff auf Methoden und Eigenschaften des [window](/de/docs/Web/API/Window)-Objekts, einschließlich keinem Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Dies bedeutet, dass, es sei denn, Sie können die „reinen Berechnungs“-Teile Ihres Startprozesses leicht herausarbeiten und in Worker verschieben, Sie wahrscheinlich den größten Teil oder den gesamten Startcode im Hauptthread ausführen müssen.

Jedoch kann selbst solcher Code mit ein wenig Arbeit asynchron gemacht werden.

## Asynchron werden

Hier sind einige Vorschläge, wie Sie Ihren Startprozess so asynchron wie möglich gestalten können (ob es sich um eine neue App oder ein Port handelt):

- Verwenden Sie das [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)- oder [`async`](/de/docs/Web/HTML/Reference/Elements/script#async)-Attribut bei Script-Tags, die von der Webanwendung benötigt werden. Dies ermöglicht es HTML-Parsern, das Dokument weiter zu verarbeiten, anstatt bis zur Ausführung der Skripte warten zu müssen.
- Wenn Sie Asset-Dateien dekodieren müssen (zum Beispiel das Dekodieren von JPEG-Dateien und deren Umwandlung in rohe Texturdaten zur späteren Verwendung durch WebGL), eignet sich das hervorragend für Worker.
- Wenn Sie mit Daten arbeiten, die vom Browser unterstützt werden (wie das Dekodieren von Bilddaten), verwenden Sie die im Browser oder Gerät integrierten Decoder, anstatt eigene zu erstellen oder welche aus dem ursprünglichen Code zu verwenden. Der bereitgestellte Decoder ist fast sicher erheblich schneller und verringert auch die Größe Ihrer App. Außerdem kann der Browser diese Decoder automatisch parallelisieren.
- Jegliche Datenverarbeitung, die parallel durchgeführt werden kann, sollte es auch. Verarbeiten Sie nicht ein Datenstück nach dem anderen; führen Sie alle auf einmal aus, wenn möglich!
- Binden Sie keine Skripte oder Stylesheets ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) teilnehmen, in Ihre Start-HTML-Datei. Laden Sie sie nur bei Bedarf.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versuchen Sie, die minimierte Version der Datei an den Browser zu senden und verwenden Sie Kompression wie Gzip oder Brotli.
- Nutzen Sie Ressourceneinstellungen (wie preconnect oder preload), wann immer möglich, um dem Browser anzuzeigen, welche Dateien für Ihre Anwendung wichtiger sind.

Je mehr Sie asynchron erledigen können, desto besser kann Ihre App die Vorteile von Multicore-Prozessoren nutzen.

### Portierungsprobleme

Sobald das initiale Laden abgeschlossen ist und der Hauptcode der App beginnt zu laufen, kann es sein, dass Ihre App einsträngig sein muss, insbesondere wenn es sich um einen Port handelt. Das Wichtigste, was Sie tun können, um den Startprozess des Hauptcodes zu unterstützen, ist, den Code in kleine Stücke zu zerlegen. Diese können dann in Blöcken ausgeführt werden, die über mehrere Aufrufe der Hauptschleife Ihrer App verteilt sind (damit der Hauptthread Eingaben handhaben kann und Ähnliches).

Emscripten bietet eine API, die bei dieser Umgestaltung hilft; zum Beispiel können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion festzulegen, die ausgeführt wird, bevor der Hauptthread fortfahren darf. Durch das Einrichten einer Funktionenschlange, die sequenziell aufgerufen wird, können Sie einfacher kleine Codeabschnitte ausführen, ohne den Hauptthread zu blockieren.

Das Problem, den bestehenden Code auf diese Weise tatsächlich umzuformen, bleibt jedoch bestehen. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich werden?

Je schneller Ihre Seite zuerst nutzbar wird und je reaktionsschneller sie auf Benutzereingaben reagiert, desto besser wird sie wahrgenommen.
Eine Seite, die 1 oder 2 Sekunden benötigt, bevor Inhalte erstmals angezeigt werden, wird üblicherweise als schnell wahrgenommen; wenn Sie an Seiten gewöhnt sind, die 3 oder 4 Sekunden dauern, dann fühlen sich 7 oder 8 Sekunden wie eine sehr lange Zeit an.

In Bezug auf die Reaktionsfähigkeit bemerken Benutzer keine Verzögerung von 50 ms oder weniger. Jede Verzögerung von über 200 ms und der Benutzer wird Ihre Seite als träge wahrnehmen. Wenn Sie daran arbeiten, das Laden und die Reaktionsfähigkeit Ihrer Anwendungen zu verbessern, denken Sie daran, dass viele Ihrer Benutzer möglicherweise ältere, langsamere Computer haben als Sie, und sie längere Verzögerungen erleben könnten als Sie!

## Weitere Vorschläge

Es gibt andere Dinge, die über das Asynchronwerden hinausgehen, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige davon:

- Download-Zeit
  - : Beachten Sie, wie lange es dauert, bis der Benutzer die Daten Ihrer Anwendung heruntergeladen hat. Wenn Ihre Anwendung sehr beliebt ist oder Inhalte häufig erneut herunterladen muss, sollten Sie versuchen, so schnell wie möglich einen Hosting-Server zu haben. Komprimieren Sie Ihre Daten immer, um sie so klein wie möglich zu machen.
- Datengröße
  - : Tun Sie Ihr Bestes, um die Größe Ihrer Daten zu optimieren; kleinere Level-Dateien werden schneller heruntergeladen und verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um den Benutzer während des Startprozesses zu fesseln, wird helfen, die Zeit schneller vergehen zu lassen. Das Anzeigen eines simulierten Ladebildschirms kann die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) verbessern. Bei umfangreichen Sites hilft alles, was den Benutzer dazu bringt, das Gefühl zu haben, dass Ihre App etwas tut, anstatt dort still zu sitzen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (oder jede kompilierte Codebasis) Starterfahrung](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
