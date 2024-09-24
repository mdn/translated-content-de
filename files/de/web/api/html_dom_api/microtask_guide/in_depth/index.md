---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debuggen oder, möglicherweise, wenn Sie versuchen, den besten Ansatz zur Lösung eines Problems bezüglich Timing und Planung von Tasks und Microtasks zu finden, gibt es Aspekte, wie die JavaScript-Laufzeit im Hintergrund arbeitet, die nützlich zu verstehen sein können.

JavaScript ist eine von Natur aus einthreadige Sprache. Es wurde in einer Zeit entworfen, in der dies eine positive Wahl war; es gab nur wenige Mehrprozessor-Computer für die breite Öffentlichkeit, und der erwartete Umfang an Code, der von JavaScript verarbeitet werden sollte, war zu dieser Zeit relativ gering.

Im Laufe der Zeit wissen wir natürlich, dass sich Computer zu leistungsstarken Mehrkernsystemen entwickelt haben und JavaScript zu einer der am häufigsten verwendeten Sprachen in der Computerwelt geworden ist. Eine Vielzahl der beliebtesten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekte von den Einschränkungen einer einthreadigen Sprache zu befreien.

Beginnend mit der Einführung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval)), hat sich die JavaScript-Umgebung, die von Webbrowsern bereitgestellt wird, schrittweise weiterentwickelt, um leistungsstarke Funktionen bereitzustellen, die die Planung von Aufgaben, die Entwicklung von Mehrthread-Anwendungen und so weiter ermöglichen. Um zu verstehen, an welcher Stelle [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit bei der Planung und Ausführung von Code arbeitet.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Einzelheiten hier sind für die meisten JavaScript-Programmierer im Allgemeinen nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Ihnen egal ist, können Sie dies überspringen und später zurückkehren, wenn Sie feststellen, dass Sie es benötigen.

Wenn ein Fragment von JavaScript-Code ausgeführt wird, läuft es innerhalb eines **Ausführungskontextes**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der nicht empfohlenen {{jsxref("Global_Objects/eval", "eval()")}}-Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Scopes innerhalb Ihres Codes. Wenn eines dieser Code-Segmente mit der Ausführung beginnt, wird ein neuer Kontext erstellt, um ihn auszuführen; dieser Kontext wird dann zerstört, wenn der Code beendet wird. Betrachten Sie das folgende JavaScript-Programm:

```js
const outputElem = document.getElementById("output");

const userLanguages = {
  Mike: "en",
  Teresa: "es",
};

function greetUser(user) {
  function localGreeting(user) {
    let greeting;
    const language = userLanguages[user];

    switch (language) {
      case "es":
        greeting = `¡Hola, ${user}!`;
        break;
      case "en":
      default:
        greeting = `Hello, ${user}!`;
        break;
    }
    return greeting;
  }
  outputElem.innerText += `${localGreeting(user)}\n`;
}

greetUser("Mike");
greetUser("Teresa");
greetUser("Veronica");
```

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige im Laufe der Programmausführung mehrmals erstellt und zerstört werden. Wenn jeder Kontext erstellt wird, wird er auf den **Ausführungskontext-Stack** gelegt. Wenn er beendet wird, wird der Kontext aus dem Kontext-Stack entfernt.

- Beim Programmstart wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()`-Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stack geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. Die Programmausführung wird mit dem nächsten im Stapel gefundenen Kontext fortgesetzt, der `greetUser()` ist; diese Funktion setzt die Ausführung dort fort, wo sie aufgehört hat.
    - Die `greetUser()`-Funktion kehrt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. `greetUser()` wird dort fortgesetzt, wo es aufgehört hat.
    - Die `greetUser()`-Funktion kehrt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört.
    - Die `greetUser()`-Funktion kehrt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

- Das Hauptprogramm endet und sein Ausführungskontext wird aus dem Ausführungsstapel entfernt; da keine Kontexte mehr im Stapel vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten in dieser Weise kann jedes Programm und jede Funktion ihre eigenen Variablen und anderen Objekte besitzen. Jeder Kontext verfolgt außerdem die nächste Zeile im Programm, die ausgeführt werden soll, und andere für den Betrieb dieses Kontexts kritische Informationen. Indem die Kontexte und der Kontext-Stack auf diese Weise genutzt werden, können viele der Grundlagen dafür, wie ein Programm arbeitet, verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und Rückgaben und so weiter.

Ein besonderer Hinweis zu rekursiven Funktionen, das heißt, Funktionen, die sich möglicherweise über mehrere Ebenen der Tiefe oder der Rekursion selbst aufrufen: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Rekursionsebenen und die Rückgabe der Ergebnisse durch diese Rekursion zu verfolgen, bedeutet jedoch auch, dass bei jedem Aufrufen der Funktion mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, unterhält die Laufzeit-Engine eine Reihe von **Agenten**, in denen JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einer Reihe von Ausführungskontexten, dem Ausführungskontext-Stack, einem Haupt-Thread, einem Set für alle zusätzlichen Threads, die erstellt werden können, um Worker zu behandeln, einer Task-Warteschlange und einer Microtask-Warteschlange. Abgesehen vom Haupt-Thread – den einige Browser über mehrere Agenten hinweg teilen – ist jede Komponente eines Agenten einzigartig für diesen Agenten.

Hier betrachten wir, wie die Laufzeit im Detail funktioniert.

### Event-Loops

Jeder Agent wird durch einen [Event-Loop](/de/docs/Web/JavaScript/Event_loop) angetrieben, der wiederholt verarbeitet wird. Während jeder Iteration führt er höchstens eine ausstehende JavaScript-Task aus, danach alle ausstehenden Microtasks, dann führt er alle erforderlichen Rendering- und Zeichenoperationen durch, bevor er erneut aufruft.

Der Code Ihrer Website oder App läuft im gleichen **{{Glossary("thread", "Thread")}}**, der gleichen **Event-Loop**, wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **{{Glossary("main_thread", "Haupt-Thread")}}**, und zusätzlich zur Ausführung des Hauptcodes Ihrer Website bearbeitet er den Empfang und die Verteilung von Benutzer- und anderen Ereignissen, das Rendering und Zeichnen von Web-Inhalten und so weiter.

Der Event-Loop treibt dann alles an, was im Browser passiert, wenn es um die Interaktion mit dem Benutzer geht, aber wichtiger noch für unsere Zwecke hier, ist er verantwortlich für die Planung und Ausführung jedes Codes, der innerhalb seines Threads ausgeführt wird.

Es gibt drei Arten von Event-Loops:

- Window-Event-Loop
  - : Der Window-Event-Loop ist derjenige, der alle Fenster mit gemeinsamem Ursprung steuert (obwohl es dazu weitere Einschränkungen gibt, wie unten beschrieben).
- Worker-Event-Loop
  - : Ein Worker-Event-Loop ist einer, der einen Worker steuert; dies umfasst alle Formen von Workern, einschließlich einfacher [Web-Worker](/de/docs/Web/API/Web_Workers_API), [Shared-Worker](/de/docs/Web/API/SharedWorker), und [Service-Worker](/de/docs/Web/API/Service_Worker_API). Worker werden in einem oder mehreren Agenten gehalten, die vom "Haupt"-Code getrennt sind; der Browser kann einen einzelnen Event-Loop für alle Worker eines bestimmten Typs verwenden oder mehrere Event-Loops einsetzen, um sie zu handhaben.
- Worklet-Event-Loop
  - : Ein {{domxref("Worklet", "worklet", "", 1)}}-Event-Loop ist der Event-Loop, der Agenten antreibt, welche den Code für die Worklets eines gegebenen Agenten ausführen. Dies schließt Worklets des Typs [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ein.

Mehrere Fenster, die vom gleichen {{Glossary("origin", "Origin")}} geladen wurden, können auf dem gleichen Event-Loop laufen, wobei jedes Aufgaben in die Event-Loop-Warteschlange einreiht, damit ihre Aufgaben abwechselnd mit dem Prozessor ausgeführt werden. Bedenken Sie, dass im Web-Jargon das Wort "Window" tatsächlich "Browser-Ebene-Container bedeutet, in dem Web-Inhalt läuft," einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Frames.

Es gibt spezifische Umstände, unter denen dieses Teilen einer Event-Loop unter Fenstern mit gemeinsamen Ursprung möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Event-Loop.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Event-Loop mit dem Fenster, das ihn enthält.
- Die Fenster teilen zufällig denselben Prozess in einer Mehrprozess-Webbrowser-Implementierung.

Die Details können je nach Browser variieren, abhängig davon, wie sie implementiert sind.

#### Tasks vs. Microtasks

Eine **Task** ist alles, was durch die Standardmechanismen geplant wird, wie beispielsweise das anfängliche Ausführen eines Skripts, das asynchrone Verteilen eines Ereignisses, und so weiter. Abgesehen von der Verwendung von Ereignissen können Sie eine Task mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) einreihen.

Der Unterschied zwischen der Task-Warteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Event-Loop beginnt, führt die Laufzeit die nächste Task aus der Task-Warteschlange aus. Weitere Tasks und Tasks, die nach Beginn der Iteration zur Warteschlange hinzugefügt werden, _werden erst in der nächsten Iteration ausgeführt_.
- Immer wenn eine Task endet und der Ausführungskontext-Stack leer ist, werden alle Microtasks in der Microtask-Warteschlange der Reihe nach ausgeführt. Der Unterschied besteht darin, dass die Ausführung der Microtasks so lange fortgesetzt wird, bis die Warteschlange leer ist – selbst wenn zwischenzeitlich neue Microtasks geplant werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen und diese neuen Microtasks werden ausgeführt, bevor die nächste Task beginnt und bevor das Ende der aktuellen Event-Loop-Iteration erreicht ist.

### Probleme

Da Ihr Code im gleichen Thread läuft, unter Verwendung der gleichen Event-Loop, wie die Benutzeroberfläche des Browsers, blockiert der Browser selbst, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Sogar langsame Leistung, die entweder durch einen Fehler oder durch komplexe Arbeiten in Ihrem Code verursacht wird, kann den Benutzer mit einem trägen Browser belasten.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme versuchen, gleichzeitig zu arbeiten, zusammen mit einem Browser, der ebenfalls Verarbeitungszeit benötigt – geschweige denn Zeit zum Rendern und Zeichnen der Seite und seiner eigenen Benutzeroberfläche, zur Behandlung von Benutzerereignissen usw. – wird heutzutage alles viel zu leicht verstopft.

### Lösungen

Die Nutzung von [Web-Workern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript erlauben, andere Skripte in neuen Threads auszuführen, trägt dazu bei, dieses Problem zu lindern. Eine gut gestaltete Website oder App nutzt Worker, um alle komplexen oder langwierigen Operationen durchzuführen, während der Haupt-Thread so wenig Arbeit wie möglich außerhalb der Aktualisierung, des Layouts und des Renderns der Webseite verrichtet.

Dies wird weiter erleichtert durch die Verwendung von [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous)-Techniken wie {{jsxref("Global_Objects/Promise", "Promises", "", 1)}}, um den Hauptcode weiterlaufen zu lassen, während auf die Ergebnisse einer Anforderung gewartet wird. Dennoch könnte Code, der auf einer grundlegenderen Ebene läuft – wie Code, der eine Bibliothek oder ein Framework bildet – eine Möglichkeit benötigen, Code zu einem sicheren Zeitpunkt einzuplanen, während er immer noch auf dem Haupt-Thread läuft, unabhängig von den Ergebnissen einer einzelnen Anfrage oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem, indem sie einen feineren Zugriff ermöglichen, indem es möglich ist, Code einzuplanen, der ausgeführt werden soll, bevor die nächste Iteration der Event-Loop beginnt, anstatt bis zur nächsten warten zu müssen.

Die Microtask-Warteschlange gibt es schon seit einiger Zeit, wurde aber historisch nur intern benutzt, um Dinge wie Promises zu betreiben. Die Ergänzung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), das es Web-Entwicklern zugänglich macht, schafft eine einheitliche Warteschlange für Microtasks, die überall dort verwendet wird, wo die Fähigkeit benötigt wird, Code sicher einzuplanen, wenn keine Ausführungskontexte mehr auf dem JavaScript-Ausführungskontext-Stack sind. Über mehrere Instanzen und über alle Browser und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Microqueue-Mechanismus, dass diese Microtasks zuverlässig in der gleichen Reihenfolge arbeiten und somit schwer zu findende Fehler vermeiden.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Der Event-Loop](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
