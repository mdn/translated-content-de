---
title: Optimierung der Startleistung
slug: Web/Performance/Guides/Optimizing_startup_performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Die Verbesserung Ihrer Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange dauert es, bis Ihre App startet? Blockiert sie scheinbar das Gerät oder den Browser des Benutzers, während die App lädt? Das sorgt dafür, dass Nutzer befürchten, Ihre Anwendung sei abgestürzt oder dass etwas anderes nicht stimmt. Eine gute Benutzererfahrung umfasst, dass Ihre App schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für die Portierung von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da das ein universelles Problem ist, werden wir hier nicht allzu sehr darauf eingehen. Stattdessen schauen wir uns ein wichtigeres Problem beim Erstellen von Web-Apps an: so **asynchron** wie möglich zu starten. Das bedeutet, dass nicht Ihr gesamter Startcode in einem einzelnen Ereignis-Handler im Hauptthread der App ausgeführt wird.

Stattdessen sollten Sie einen [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) erstellen, der so viel wie möglich in einem Hintergrundthread erledigt (zum Beispiel das Abrufen und Verarbeiten von Daten). Die Zuweisung von Aufgaben an einen Web Worker entlastet den Hauptthread für Aufgaben, die diesen brauchen, wie Benutzereingaben und das Rendern der Benutzeroberfläche. Im Gegenzug sollten Ereignisse auf dem Hauptthread aus vielen kleinen Aufgaben bestehen, auch bekannt als [Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), anstatt aus größeren, zeitaufwendigeren Aufgaben.

Asynchrones Laden hilft, zu verhindern, dass Seiten und Benutzeroberflächen den Anschein erwecken, unempfindlich zu sein oder es tatsächlich werden. Indem die für jede einzelne Ladeaufgabe benötigte Zeit minimiert wird, kann die [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung während des Startens weiterlaufen. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann das Blockieren des Hauptthreads dazu führen, dass Benutzer Ihre App deinstallieren; zum Beispiel, wenn jemand Ihre App versehentlich startet und nicht daran gehindert wird, die Anwendung zu schließen, könnte er Maßnahmen ergreifen, damit das nicht aus Versehen erneut passiert.

## Wo ein Wille ist…

Es ist einfacher, alles von Anfang an "richtig" zu schreiben, anstatt nachträglich für Leistung (und Barrierefreiheit) zu optimieren. Wenn Sie von Grund auf neu anfangen, bedeutet das Asynchronisieren geeigneter Codeabschnitte, dass ein nachträglicher Umbau nicht erforderlich ist. Alle reinen Startberechnungen sollten in Hintergrundthreads ausgeführt werden, während Sie die Ausführungszeit von Ereignissen auf dem Hauptthread so kurz wie möglich halten. Anstatt einen Fortschrittsanzeiger einzuschließen, damit der Benutzer weiß, was passiert und wie lange er warten muss, machen Sie die Fortschrittsleiste überflüssig.

Auf der anderen Seite kann die Portierung einer bestehenden App ins Web herausfordernd sein. Native Anwendungen müssen nicht unbedingt asynchron geschrieben werden, da das Betriebssystem normalerweise das Laden für Sie übernimmt. Die ursprüngliche Anwendung könnte eine Hauptschleife haben, die leicht asynchron betrieben werden kann (indem jede Iteration der Hauptschleife separat ausgeführt wird); der Start ist oft nur ein kontinuierlicher, monolithischer Prozess, der möglicherweise regelmäßig einen Fortschrittsmesser aktualisiert.

Obwohl Sie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um auch sehr große, lange JavaScript-Codeblöcke asynchron auszuführen, gibt es ein großes Problem: Web Workers können den [DOM](/de/docs/Web/API/Document_Object_Model) nicht direkt manipulieren und haben begrenzten Zugriff auf Methoden und Eigenschaften des [window](/de/docs/Web/API/Window)-Objekts, einschließlich keinem Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Das bedeutet, dass Sie, es sei denn, Sie können die "reinen Berechnungs"teile Ihres Startprozesses leicht in Workers auslagern, meist den gesamten oder größten Teil Ihres Startcodes im Hauptthread ausführen müssen.

Jedoch kann auch solcher Code, mit ein wenig Arbeit, asynchron gemacht werden.

## Asynchronität erreichen

Hier sind einige Vorschläge, wie Sie Ihren Startprozess so asynchron wie möglich gestalten können (egal ob es sich um eine neue App oder eine Portierung handelt):

- Verwenden Sie das [`defer`](/de/docs/Web/HTML/Element/script#defer)- oder [`async`](/de/docs/Web/HTML/Element/script#async)-Attribut bei Script-Tags, die von der Webanwendung benötigt werden. Dadurch können HTML-Parser das Dokument weiter verarbeiten, anstatt warten zu müssen, bis die Skripte heruntergeladen und ausgeführt wurden, bevor es weitergehen kann.
- Wenn Sie Asset-Dateien dekodieren müssen (zum Beispiel das Dekodieren von JPEG-Dateien und deren Umwandlung in Rohtexturdaten zur späteren Verwendung durch WebGL), ist das idealerweise in Workers zu tun.
- Wenn Sie Daten verarbeiten, die vom Browser unterstützt werden (etwa das Dekodieren von Bilddaten), sollten Sie die im Browser oder Gerät eingebauten Decoder verwenden, anstatt Ihre eigenen zu erstellen oder einen aus dem ursprünglichen Code zu verwenden. Die bereitgestellte Version ist fast sichererweise deutlich schneller und verringert außerdem die Größe Ihrer App. Zudem kann der Browser diese Decoder möglicherweise automatisch parallelisieren.
- Jede Datenverarbeitung, die parallel durchgeführt werden kann, sollte auch so ausgeführt werden. Bearbeiten Sie nicht einen Datenblock nach dem anderen; verarbeiten Sie am besten alle auf einmal!
- Binden Sie keine Skripte oder Stylesheets in Ihre Start-HTML-Datei ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) teilnehmen. Laden Sie sie nur bei Bedarf.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versuchen Sie, die minifizierte Version der Datei an den Browser zu senden und verwenden Sie Komprimierung wie Gzip oder Brotli.
- Nutzen Sie Ressourceneinweise (wie preconnect oder preload), wann immer möglich, um dem Browser anzuzeigen, welche Dateien für Ihre Anwendung wichtiger sind.

Je mehr Prozesse Sie asynchron ausführen können, desto besser kann Ihre App von Mehrkernprozessoren profitieren.

### Portierungsprobleme

Sobald das anfängliche Laden abgeschlossen ist und der Hauptcode der App ausgeführt wird, könnte Ihre App, insbesondere bei einer Portierung, ein Single-Thread bleiben müssen. Das Wichtigste, was Sie tun können, um den Startprozess des Hauptcodes zu unterstützen, besteht darin, den Code in kleine Teile zu zerlegen. Diese können dann in separate Blöcke aufgeteilt und zwischen mehreren Aufrufen der Hauptschleife Ihrer App ausgeführt werden (damit der Hauptthread Eingaben verarbeiten und Ähnliches durchführen kann).

Emscripten bietet eine API, die bei dieser Neustrukturierung hilft; z.B. können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion zu etablieren, die vor der Fortführung des Hauptthreads ausgeführt werden soll. Durch die Einrichtung einer Sequenz von Funktionen, die nacheinander aufgerufen werden, können Sie besser verwalten, Codeabschnitte auszuführen, ohne den Hauptthread zu blockieren.

Dies hinterlässt jedoch das Problem, Ihren bestehenden Code tatsächlich so umzugestalten, dass er auf diese Weise funktioniert. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich werden?

Je schneller Ihre Seite erstmalig nutzbar wird und je reaktionsschneller sie auf Benutzereingaben ist, desto besser wird sie wahrgenommen.
Eine Seite, die 1 oder 2 Sekunden benötigt, bevor der Inhalt zum ersten Mal erscheint, wird normalerweise als schnell angesehen; wenn Sie daran gewöhnt sind, dass Seiten 3 oder 4 Sekunden benötigen, dann fühlen sich 7 oder 8 Sekunden wie eine sehr lange Zeit an.

In Bezug auf die Reaktionsfähigkeit bemerken Benutzer keine Verzögerung von 50ms oder weniger. Jede Verzögerung von über 200ms lässt Ihre Webseite träge erscheinen. Wenn Sie daran arbeiten, das Laden und die Reaktionsfähigkeit Ihrer Anwendungen zu verbessern, denken Sie daran, dass viele Ihrer Nutzer möglicherweise ältere, langsamere Computer als Sie verwenden und sie daher längere Verzögerungen erleben als Sie!

## Weitere Vorschläge

Es gibt andere Dinge außerhalb der Asynchronität, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige davon:

- Download-Zeit
  - : Bedenken Sie, wie lange der Benutzer braucht, um die Daten Ihrer Anwendung herunterzuladen. Wenn Ihre Anwendung sehr beliebt ist oder häufig Inhalte erneut heruntergeladen werden müssen, sollten Sie versuchen, einen möglichst schnellen Hosting-Server zu haben. Komprimieren Sie immer Ihre Daten, um sie so klein wie möglich zu machen.
- Datengröße
  - : Tun Sie Ihr Bestes, um die Größe Ihrer Daten zu optimieren; kleinere Level-Dateien werden schneller heruntergeladen und verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um den Benutzer während des Startvorgangs zu beschäftigen, hilft, die Zeit schneller vergehen zu lassen. Die Anzeige eines simulierten Startbildschirms kann die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) verbessern. Bei schweren Seiten hilft alles, was dem Benutzer das Gefühl gibt, dass Ihre App etwas tut, anstatt ruhig dazusitzen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (or any compiled codebase) Startup Experience](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
