---
title: Optimieren der Startleistung
slug: Web/Performance/Optimizing_startup_performance
l10n:
  sourceCommit: 3d99c28bf464d39683c27d63081c2d393cc4643b
---

{{QuickLinksWithSubPages("Web/Performance")}}

Die Verbesserung der Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Wie lange dauert es, bis Ihre App startet? Scheint es, als würde das Gerät oder der Browser des Nutzers blockiert, während die App geladen wird? Das lässt Nutzer befürchten, dass Ihre Anwendung abgestürzt ist oder etwas anderes schief läuft. Eine gute Benutzererfahrung beinhaltet, dass Ihre App schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.

## Schnelles asynchrones Laden

Unabhängig von der Plattform ist es immer eine gute Idee, so **schnell** wie möglich zu starten. Da dies ein universelles Problem ist, werden wir hier nicht zu sehr darauf eingehen. Stattdessen konzentrieren wir uns auf ein wichtigeres Thema beim Erstellen von Web-Apps: so **asynchron** wie möglich zu starten. Das bedeutet, dass Ihr gesamter Startcode nicht in einem einzigen Ereignishandler im Hauptthread der App ausgeführt werden sollte.

Erstellen Sie stattdessen einen [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers), der so viel wie möglich in einem Hintergrundthread erledigt (zum Beispiel das Abrufen und Verarbeiten von Daten). Das Übertragen von Aufgaben an einen Web-Worker entlastet den Hauptthread für Aufgaben, die ihn benötigen, wie Benutzereingaben und UI-Rendering. Im Gegenzug sollten Ereignisse im Hauptthread aus vielen kleinen Aufgaben bestehen, die auch als [Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) bekannt sind, anstatt aus größeren, zeitaufwendigen Aufgaben.

Asynchrones Laden hilft zu verhindern, dass Seiten und Benutzeroberflächen unansprechbar erscheinen oder sogar werden. Indem Sie die für jede einzelne Ladevorgang erforderliche Zeit minimieren, wird die [Ereignisschleife](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) der Anwendung weiterhin durchlaufen, während sie startet. Dies verhindert, dass die Anwendung, der Browser und/oder das Gerät eingefroren erscheinen.

Im schlimmsten Fall kann das Blockieren des Hauptthreads dazu führen, dass Nutzer Ihre App deinstallieren; zum Beispiel, wenn jemand Ihre App versehentlich startet und er nicht daran gehindert wird, die Anwendung zu schließen, möchte er möglicherweise Maßnahmen ergreifen, um dies in Zukunft zu vermeiden.

## Wo ein Wille ist

Es ist einfacher, alles gleich beim ersten Mal „richtig“ zu schreiben, als es nachträglich auf Leistung (und Zugänglichkeit) zu optimieren. Wenn Sie bei Null anfangen, bedeutet das, geeignete Codebestandteile asynchron zu gestalten, sodass kein nachträgliches Anpassen erforderlich ist. Alle reinen Startberechnungen sollten in Hintergrundthreads durchgeführt werden, während Sie die Laufzeit von Ereignissen im Hauptthread so kurz wie möglich halten. Anstatt einen Fortschrittsanzeiger einzuschließen, damit der Nutzer weiß, was vor sich geht und wie lange er warten muss, machen Sie den Fortschrittsbalken überflüssig.

Auf der anderen Seite kann das Portieren einer bestehenden App ins Web eine Herausforderung darstellen. Native Anwendungen müssen nicht asynchron geschrieben werden, da das Betriebssystem normalerweise das Laden übernimmt. Die Quellanwendung könnte eine Hauptschleife haben, die leicht asynchron arbeiten kann (indem jede Iteration der Hauptschleife separat ausgeführt wird); der Start ist oft nur ein kontinuierlicher, monolithischer Vorgang, der möglicherweise periodisch einen Fortschrittsbalken aktualisiert.

Während Sie [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden können, um auch sehr große, lang andauernde Teile von [JavaScript](/de/docs/Web/JavaScript)-Code asynchron auszuführen, gibt es ein großes Problem: Web-Worker können das [DOM](/de/docs/Web/API/Document_Object_Model) nicht direkt manipulieren und haben eingeschränkten Zugriff auf Methoden und Eigenschaften des [window](/de/docs/Web/API/Window)-Objekts, einschließlich keinen Zugriff auf [WebGL](/de/docs/Web/API/WebGL_API). Das bedeutet, dass es, sofern Sie nicht leicht die „reinen Berechnungs“-Teile Ihres Startvorgangs in Worker auslagern können, darauf hinausläuft, dass Sie den größten Teil oder den gesamten Startcode im Hauptthread ausführen müssen.

Allerdings kann auch dieser Code mit ein wenig Aufwand asynchron gemacht werden.

## Asynchron werden

Hier sind einige Vorschläge, wie Sie Ihren Startprozess so asynchron wie möglich gestalten können (unabhängig davon, ob es sich um eine neue App oder ein Port handelt):

- Verwenden Sie das [`defer`](/de/docs/Web/HTML/Element/script#defer)- oder [`async`](/de/docs/Web/HTML/Element/script#async)-Attribut bei Script-Tags, die von der Web-Anwendung benötigt werden. Dies ermöglicht HTML-Parsern, fortzufahren, das Dokument zu verarbeiten, ohne warten zu müssen, bis die Skripte heruntergeladen und ausgeführt sind, bevor es weitergeht.
- Wenn Sie Asset-Dateien decodieren müssen (zum Beispiel JPEG-Dateien decodieren und in rohe Texturdaten umwandeln, die später von WebGL verwendet werden), ist das großartig, um es in Workern zu tun.
- Bei der Verarbeitung von Daten, die vom Browser unterstützt werden (zum Beispiel bei der Dekodierung von Bilddaten), verwenden Sie die im Browser oder auf dem Gerät integrierten Decoder, anstatt eigene zu erstellen oder einen aus dem ursprünglichen Codebase zu verwenden. Der bereitgestellte ist fast immer signifikant schneller und verringert darüber hinaus die Größe Ihrer App. Außerdem kann der Browser möglicherweise diese Decoder automatisch parallelisieren.
- Jegliche Datenverarbeitung, die parallel durchgeführt werden kann, sollte auch parallel durchgeführt werden. Verarbeiten Sie nicht einen Datenblock nach dem anderen; tun Sie sie alle auf einmal, wann immer es möglich ist!
- Schließen Sie keine Skripte oder Stylesheets ein, die nicht am [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) in Ihrer Start-HTML-Datei teilnehmen. Laden Sie sie nur bei Bedarf.
- Reduzieren Sie die Größe Ihrer JavaScript-Dateien. Versuchen Sie, die minimierte Version der Datei an den Browser zu senden und verwenden Sie Kompression wie Gzip oder Brotli.
- Nutzen Sie Ressourcenvorgaben (wie preconnect oder preload), wann immer möglich, um dem Browser mitzuteilen, welche Dateien für Ihre Anwendung wichtiger sind.

Je mehr Dinge Sie auf asynchrone Weise durchführen können, desto besser kann Ihre App die Vorteile von Mehrkernprozessoren nutzen.

### Portierungsprobleme

Sobald das anfängliche Laden abgeschlossen ist und der Hauptcode der App zu laufen beginnt, könnte es sein, dass Ihre App, insbesondere wenn es sich um ein Port handelt, einsträngig bleiben muss. Das Wichtigste, was Sie tun können, um beim Startvorgang des Hauptcodes zu helfen, ist, den Code in kleine Stücke zu refaktorisieren. Diese können dann in Blöcken, verteilt über mehrere Aufrufe der Hauptschleife Ihrer App, ausgeführt werden (sodass der Hauptthread Zeit hat, Eingaben zu verarbeiten und dergleichen).

Emscripten bietet eine API, die bei dieser Refaktorisierung helfen kann; zum Beispiel können Sie `emscripten_push_main_loop_blocker()` verwenden, um eine Funktion festzulegen, die ausgeführt werden soll, bevor der Hauptthread fortfahren darf. Indem Sie eine Reihe von Funktionen in einer bestimmten Reihenfolge aufrufen, können Sie das Ausführen von Codeabschnitten leichter verwalten, ohne den Hauptthread zu blockieren.

Das löst jedoch nicht das Problem, dass Ihr bestehender Code tatsächlich so refaktorisiert werden muss, dass er auf diese Weise funktioniert. Das kann einige Zeit in Anspruch nehmen.

### Wie asynchron sollte ich werden?

Je schneller Ihre Website nutzbar wird und je reaktionsfähiger sie auf Benutzereingaben reagiert, desto besser wird sie wahrgenommen. Eine Website, die 1 oder 2 Sekunden benötigt, bevor der Inhalt das erste Mal erscheint, wird normalerweise als schnell angesehen; wenn Sie an Websites gewöhnt sind, die 3 oder 4 Sekunden benötigen, dann fühlen sich 7 oder 8 Sekunden wie eine sehr lange Zeit an.

In Hinsicht auf Reaktionsfähigkeit werden Nutzer eine Verzögerung von 50ms oder weniger nicht bemerken. Jede Verzögerung von über 200ms wird von Nutzern als träge wahrgenommen. Wenn Sie daran arbeiten, das Laden und die Reaktionsfähigkeit Ihrer Anwendungen zu verbessern, denken Sie daran, dass viele Ihrer Nutzer möglicherweise ältere, langsamere Computer als Sie haben und daher längere Verzögerungen erleben als Sie!

## Weitere Vorschläge

Es gibt andere Dinge, über das hinaus gehen, asynchron zu werden, die Ihnen helfen können, die Startzeit Ihrer App zu verbessern. Hier sind einige davon:

- Downloadzeit
  - : Beachten Sie, wie lange es dauern wird, bis der Nutzer die Daten Ihrer Anwendung heruntergeladen hat. Wenn Ihre Anwendung sehr beliebt ist oder Inhalte häufig erneut heruntergeladen werden müssen, sollten Sie versuchen, einen möglichst schnellen Hosting-Server zu haben. Komprimieren Sie Ihre Daten immer {{Glossary("gzip_compression", "gzip compression")}}, um sie so klein wie möglich zu machen.
- Datengröße
  - : Geben Sie Ihr Bestes, um die Größe Ihrer Daten zu optimieren; kleinere Leveldateien werden schneller heruntergeladen und verarbeitet als größere.
- Subjektive Faktoren
  - : Alles, was Sie tun können, um dem Nutzer während des Startprozesses zu helfen, bleibt länger bei Ihnen. Das Anzeigen eines fiktiven Startbildschirms kann die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) verbessern. Für große Websites hilft alles, was dem Benutzer das Gefühl gibt, dass Ihre App etwas tut, anstatt leise dazusitzen.

## Siehe auch

- [Apps](/de/docs/Web/Progressive_web_apps)
- [Spiele](/de/docs/Games)
- [BananaBread (oder ein beliebiger kompilierter Codebase) Start-Erfahrung](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
