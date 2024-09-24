---
title: Optimierung der Startleistung
slug: Web/Performance/Optimizing_startup_performance
l10n:
  sourceCommit: 3d99c28bf464d39683c27d63081c2d393cc4643b
---

{{QuickLinksWithSubPages("Web/Performance")}}

Die Verbesserung Ihrer Startleistung zählt oft zu den wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange dauert es, bis Ihre App startet? Scheint es, als würde die App das Gerät oder den Browser des Benutzers blockieren, während sie lädt? Das lässt Benutzer befürchten, dass Ihre Anwendung abgestürzt ist oder etwas anderes nicht stimmt. Eine gute Benutzererfahrung beinhaltet, dass Ihre App schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für die Erstellung neuer Anwendungen als auch für die Portierung von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da dies ein universelles Problem ist, werden wir nicht zu sehr darauf eingehen. Stattdessen konzentrieren wir uns auf ein wichtigeres Problem beim Erstellen von Web-Apps: so **asynchron** wie möglich zu starten. Das bedeutet, dass Sie nicht Ihren gesamten Startcode in einem einzigen Ereignishandler auf dem Hauptthread der App ausführen.

Stattdessen erstellen Sie einen [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers), der so viel wie möglich in einem Hintergrund-Thread erledigt (z.B. Abrufen und Verarbeiten von Daten). Das Übertragen von Aufgaben auf einen Web-Worker entlastet den Hauptthread für Aufgaben, die ihn erfordern, wie Benutzerevents und die UI-Darstellung. Im Gegenzug sollten Ereignisse im Hauptthread aus vielen kleinen Aufgaben, auch bekannt als [Mikroaufgaben](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), anstatt aus größeren, zeitaufwändigen Aufgaben bestehen.

Asynchrones Laden verhindert, dass Seiten und Benutzeroberflächen den Anschein erwecken, unresponsive zu sein oder tatsächlich unresponsive werden. Durch Minimierung der Zeit für jede einzelne Ladevorgang kann der [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung weiterhin in Betrieb bleiben, während sie startet. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann die Blockierung des Hauptthreads dazu führen, dass Benutzer Ihre App deinstallieren; wenn jemand Ihre App versehentlich startet und nicht daran gehindert wird, die Anwendung zu schließen, könnte er Maßnahmen ergreifen, um dies zukünftig zu verhindern.

## Wo ein Wille ist…

Es ist einfacher, alles von Anfang an "richtig" zu schreiben, als im Nachhinein Leistung (und Zugänglichkeit) zu verbessern. Wenn Sie von Grund auf neu beginnen, bedeutet das, geeignete Codeabschnitte asynchron zu gestalten, dass eine nachträgliche Anpassung nicht erforderlich ist. Alle reinen Startberechnungen sollten in Hintergrund-Threads durchgeführt werden, während Sie die Laufzeit von Ereignissen im Hauptthread so kurz wie möglich halten. Anstatt einen Fortschrittsanzeiger zu integrieren, damit der Benutzer weiß, was passiert und wie lange er warten muss, machen Sie die Fortschrittsanzeige überflüssig.

Andererseits kann die Portierung einer bestehenden App auf das Web herausfordernd sein. Native Anwendungen müssen nicht asynchron geschrieben werden, da das Betriebssystem das Laden normalerweise für Sie übernimmt. Die Quellanwendung könnte eine Hauptschleife haben, die sich leicht asynchron betreiben lässt (indem jede Iteration der Hauptschleife separat ausgeführt wird); der Start ist oft nur ein kontinuierlicher, monolithischer Vorgang, der möglicherweise regelmäßig einen Fortschrittsmesser aktualisiert.

Während Sie [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um sogar sehr große, langandauernde [JavaScript](/de/docs/Web/JavaScript)-Codeblöcke asynchron auszuführen, gibt es ein großes Problem: Web Worker können nicht direkt das [DOM](/de/docs/Web/API/Document_Object_Model) manipulieren und haben nur eingeschränkten Zugriff auf Methoden und Eigenschaften des [Window](/de/docs/Web/API/Window)-Objekts, einschließlich keinem Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Das bedeutet, dass wenn Sie die "reinen Berechnungs"-Teile Ihres Startvorgangs nicht einfach in Worker auslagern können, Sie wahrscheinlich den gesamten oder größten Teil Ihres Startcodes im Hauptthread ausführen müssen.

Auch solche Codes können jedoch mit ein wenig Aufwand asynchron gestaltet werden.

## Asynchronität erreichen

Hier sind einige Vorschläge, wie Sie Ihren Startvorgang so asynchron wie möglich gestalten können (ob es sich um eine neue App oder eine Portierung handelt):

- Verwenden Sie das [`defer`](/de/docs/Web/HTML/Element/script#defer)- oder [`async`](/de/docs/Web/HTML/Element/script#async)-Attribut bei den Skript-Tags, die von der Webanwendung benötigt werden. Dadurch können HTML-Parser die Dokumentverarbeitung fortsetzen, anstatt warten zu müssen, bis die Skripte heruntergeladen und ausgeführt wurden.
- Wenn Sie Assets dekodieren müssen (z. B. JPEG-Dateien dekodieren und in rohe Texturdaten umwandeln, um sie später von WebGL zu verwenden), ist das großartig in Workern zu erledigen.
- Wenn Sie mit Daten arbeiten, die vom Browser unterstützt werden (z. B. Decodierung von Bilddaten), verwenden Sie die im Browser oder Gerät eingebauten Decoder, anstatt Ihre eigenen zu erstellen oder eine aus dem ursprünglichen Code zu verwenden. Die bereitgestellten sind fast immer signifikant schneller und verringern zusätzlich die Größe Ihrer App. Der Browser kann außerdem diese Decoder automatisch parallelisieren.
- Jede Datenverarbeitung, die parallel erfolgen kann, sollte dies auch tun. Verarbeiten Sie keine Datenabschnitte hintereinander; machen Sie es gleichzeitig, wenn möglich!
- Schließen Sie keine Skripte oder Stylesheets ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) beteiligt sind, in Ihre Start-HTML-Datei ein. Laden Sie sie nur bei Bedarf.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versenden Sie die minimierte Version der Datei an den Browser und verwenden Sie Kompressionstechniken wie Gzip oder Brotli.
- Verwenden Sie Ressourcenvorabrufe (wie preconnect oder preload), wann immer möglich, um dem Browser anzugeben, welche Dateien für Ihre Anwendung wichtiger sind.

Je mehr Dinge Sie asynchron erledigen können, desto besser kann Ihre App die Vorteile von Mehrkernprozessoren nutzen.

### Portierungsthemen

Sobald das initiale Laden abgeschlossen ist und der Hauptcode der App zu laufen beginnt, kann es sein, dass Ihre App single-threaded sein muss, insbesondere wenn es sich um eine Portierung handelt. Das Wichtigste, was Sie tun können, um den Startprozess des Hauptcodes zu unterstützen, ist, den Code in kleine Teile zu gliedern. Diese können dann in Blöcken über mehrere Aufrufe der Hauptschleife Ihrer App hinweg ausgeführt werden (sodass der Hauptthread die Eingaben und Ähnliches bearbeiten kann).

Emscripten bietet eine API, die bei dieser Umstrukturierung hilft; zum Beispiel können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion zu etablieren, die vor der weiteren Ausführung des Hauptthreads ausgeführt werden soll. Indem Sie eine Warteschlange von Funktionen erstellen, die nacheinander aufgerufen werden, können Sie leichter das Ausführen von Codeabschnitten verwalten, ohne den Hauptthread zu blockieren.

Das lässt jedoch das Problem bestehen, dass Sie Ihren bestehenden Code umstrukturieren müssen, damit er tatsächlich auf diese Weise funktioniert. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich werden?

Je schneller Ihre Website erstmals nutzbar wird und je besser sie auf Benutzereingaben antwortet, desto besser wird sie wahrgenommen.
Eine Site, die 1 oder 2 Sekunden benötigt, bevor der Inhalt zuerst erscheint, wird normalerweise als schnell angesehen; wenn Sie daran gewöhnt sind, dass Sites 3 oder 4 Sekunden benötigen, fühlen sich 7 oder 8 Sekunden wie eine sehr lange Zeit an.

In Bezug auf die Reaktionsfähigkeit wird der Benutzer eine Verzögerung von 50 ms oder weniger nicht bemerken. Jede Verzögerung von über 200 ms wird von den Benutzern als träge wahrgenommen. Beim Arbeiten an der Verbesserung der Lade- und Reaktionsfähigkeit Ihrer Anwendungen sollten Sie bedenken, dass viele Ihrer Benutzer möglicherweise ältere, langsamere Computer als Sie haben und daher längere Verzögerungen erleben können als Sie!

## Weitere Vorschläge

Es gibt noch andere Dinge jenseits der Asynchronität, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige davon:

- Downloadzeit
  - : Beachten Sie, wie lange es dauern wird, bis der Benutzer die Daten Ihrer Anwendung heruntergeladen hat. Wenn Ihre Anwendung sehr beliebt ist oder oft Inhalte neu herunterladen muss, sollten Sie versuchen, einen möglichst schnellen Hosting-Server zu haben. Komprimieren Sie Ihre Daten immer, um sie so klein wie möglich zu machen.
- Datengröße
  - : Tun Sie Ihr Bestes, um die Größe Ihrer Daten zu optimieren; kleinere Leveldateien werden schneller heruntergeladen und verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um den Benutzer während des Startvorgangs zu beschäftigen, hilft, die Zeit gefühlt schneller vergehen zu lassen. Das Anzeigen eines simulierten Startbildschirms kann die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) verbessern. Bei umfangreichen Sites hilft alles, was den Benutzer das Gefühl gibt, dass Ihre App etwas tut, anstatt einfach still dazusitzen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (oder jede kompilierte Codebasis) Start-Erfahrung](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
