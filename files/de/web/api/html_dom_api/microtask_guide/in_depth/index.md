---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debugging oder möglicherweise bei der Entscheidung über den besten Ansatz zur Lösung eines Problems in Bezug auf Timing und Planung von Aufgaben und Microtasks gibt es Dinge, wie die JavaScript-Laufzeit im Hintergrund arbeitet, die nützlich zu verstehen sein könnten.

JavaScript ist eine von Natur aus einsträngige Sprache. Es wurde in einer Ära entwickelt, in der dies eine positive Entscheidung war; es gab nur wenige Mehrprozessor-Computer für die breite Öffentlichkeit, und die zu erwartende Menge an Code, die von JavaScript verarbeitet werden sollte, war zu dieser Zeit relativ gering.

Mit der Zeit wissen wir natürlich, dass Computer sich zu leistungsstarken Multicore-Systemen entwickelt haben und JavaScript zu einer der am häufigsten verwendeten Sprachen in der Computerwelt geworden ist. Eine Vielzahl der beliebtesten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekten die Möglichkeit zu geben, die Einschränkungen einer einsträngigen Sprache zu überwinden.

Beginnend mit der Einführung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval)) hat sich die JavaScript-Umgebung, die von Webbrowsern bereitgestellt wird, schrittweise weiterentwickelt, um leistungsstarke Funktionen zu umfassen, die die Planung von Aufgaben, die Entwicklung mehrsträngiger Anwendungen und so weiter ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit funktioniert, wenn Code geplant und ausgeführt wird.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Details hier sind im Allgemeinen für die meisten JavaScript-Programmierer nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn Sie es nicht wichtig finden, können Sie dies überspringen und später darauf zurückkommen, wenn Sie feststellen, dass Sie es benötigen.

Wenn ein Fragment von JavaScript-Code ausgeführt wird, läuft es in einem **Ausführungskontext**. Es gibt drei Codearten, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der schlecht beratenen {{jsxref("Global_Objects/eval", "eval()")}}-Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Geltungsbereichs innerhalb Ihres Codes. Wenn eines dieser Code-Segmente mit der Ausführung beginnt, wird ein neuer Kontext erstellt, in dem es ausgeführt wird; dieser Kontext wird dann zerstört, wenn der Code beendet wird. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige mehrmals im Laufe der Programmausführung erstellt und zerstört werden. Wenn jeder Kontext erstellt wird, wird er auf den **Ausführungskontext-Stapel** gelegt. Beim Beenden wird der Kontext aus dem Kontext-Stapel entfernt.

- Beim Start des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()`-Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stapel gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. Die Programmausführung wird mit dem nächsten auf dem Stapel gefundenen Kontext fortgesetzt, der `greetUser()` ist; diese Funktion setzt die Ausführung dort fort, wo sie unterbrochen wurde.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. `greetUser()` setzt die Ausführung dort fort, wo sie unterbrochen wurde.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

- Die Hauptprogrammbeendung und ihr Ausführungskontext wird vom Ausführungsstapel entfernt; da keine Kontexte mehr auf dem Stapel verbleiben, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion ihre eigenen Variablen und anderen Objekte haben. Jeder Kontext verfolgt zusätzlich die nächste Zeile im Programm, die ausgeführt werden soll, und andere Informationen, die für den Betrieb dieses Kontextes entscheidend sind. Durch die Verwendung der Kontexte und des Kontextstapels auf diese Weise können viele der Grundlagen der Programmoperationen verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und Rückgaben und so weiter.

Eine besondere Bemerkung zu rekursiven Funktionen — das sind Funktionen, die sich selbst über mehrere Rekursionsebenen oder -stufen aufrufen: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht der JavaScript-Laufzeit, die Rekursionsebenen zu verfolgen und die Rückgabe von Ergebnissen durch diese Rekursion zu steuern, bedeutet jedoch auch, dass bei jedem Rekurs der Funktion mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, hält die Laufzeitengine eine Reihe von **Agenten** bereit, um JavaScript-Code auszuführen. Jeder Agent besteht aus einer Reihe von Ausführungskontexten, dem Ausführungskontext-Stapel, einem Hauptthread, einem Set für alle zusätzlichen Threads, die möglicherweise erstellt werden, um Worker zu verwalten, einer Aufgaben-Warteschlange und einer Microtask-Warteschlange. Abgesehen vom Hauptthread — den einige Browser über mehrere Agenten hinweg teilen — ist jede Komponente eines Agenten einzigartig für diesen Agenten.

Hier betrachten wir, wie die Laufzeit im Detail funktioniert.

### Ereignisschleifen

Jeder Agent wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) gesteuert, die wiederholt durchlaufen wird. Während jeder Iteration führt sie höchstens eine anstehende JavaScript-Aufgabe aus, dann alle anstehenden Microtasks, und führt dann gegebenenfalls das Rendering und Zeichnung durch, bevor sie erneut durchläuft.

Der Code Ihrer Website oder Anwendung läuft im selben **[Thread](/de/docs/Glossary/thread)**, der dieselbe **Ereignisschleife** teilt, wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **[Hauptthread](/de/docs/Glossary/main_thread)**, und zusätzlich zur Ausführung des Hauptcodekörpers Ihrer Site behandelt er auch das Empfangen und Verteilen von Benutzer- und anderen Ereignissen, das Rendern und Zeichnen von Webinhalten und so weiter.

Die Ereignisschleife treibt alles an, was im Browser bezüglich der Interaktion mit dem Benutzer passiert, aber für unsere Zwecke hier ist sie wichtiger, da sie für die Planung und Ausführung jedes Code-Segments verantwortlich ist, das innerhalb ihres Threads läuft.

Es gibt drei Arten von Ereignisschleifen:

- Fensterereignisschleife
  - : Die Fensterereignisschleife ist diejenige, die alle Fenster mit einem ähnlichen Ursprung steuert (obwohl es weitere Einschränkungen gibt, wie unten beschrieben).
- Worker-Ereignisschleife
  - : Eine Worker-Ereignisschleife ist diejenige, die einen Worker steuert; dies schließt alle Formen von Workern ein, einschließlich grundlegender [Web Worker](/de/docs/Web/API/Web_Workers_API), [Shared Worker](/de/docs/Web/API/SharedWorker) und [Service Worker](/de/docs/Web/API/Service_Worker_API). Worker werden in einem oder mehreren Agenten gehalten, die vom "Haupt"code getrennt sind; der Browser kann eine einzige Ereignisschleife für alle Worker eines bestimmten Typs verwenden oder mehrere Ereignisschleifen verwenden, um sie zu handhaben.
- Worklet-Ereignisschleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Ereignisschleife ist die Ereignisschleife, die Agenten steuert, die den Code für die Worklets eines bestimmten Agenten ausführen. Dies schließt Worklets vom Typ [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ein.

Mehrere Fenster, die aus demselben [Ursprung](/de/docs/Glossary/origin) geladen wurden, können auf derselben Ereignisschleife laufen, wobei jede Aufgaben in die Ereignisschleife einreiht, sodass ihre Aufgaben der Reihe nach mit dem Prozessor abgearbeitet werden. Beachten Sie, dass im Web-Sprachgebrauch das Wort "Fenster" tatsächlich "Browser-Level-Container, in dem Webinhalte laufen" bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Frames.

Es gibt spezielle Umstände, unter denen dieses Teilen einer Ereignisschleife zwischen Fenstern mit gemeinsamen Ursprung möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Ereignisschleife.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Ereignisschleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer Multi-Prozess-Webbrowser-Implementierung.

Die Details können von Browser zu Browser variieren, abhängig davon, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was geplant ist, durch die Standardmechanismen wie das anfängliche Starten der Skriptausführung, das asynchrone Senden eines Ereignisses usw. ausgeführt zu werden. Abgesehen von der Verwendung von Ereignissen können Sie eine Aufgabe durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`setInterval()`](/de/docs/Web/API/SetInterval) in die Warteschlange einreihen.

Der Unterschied zwischen der Aufgaben-Warteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Ereignisschleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgaben-Warteschlange aus. Weitere Aufgaben und Aufgaben, die nach dem Start der Iteration zur Warteschlange hinzugefügt werden, _werden bis zur nächsten Iteration nicht ausgeführt_.
- Jedes Mal, wenn eine Aufgabe beendet wird und der Ausführungskontextstapel leer ist, werden alle Microtasks in der Microtask-Warteschlange der Reihe nach ausgeführt. Der Unterschied besteht darin, dass die Ausführung von Microtasks fortgesetzt wird, bis die Warteschlange leer ist — selbst wenn in der Zwischenzeit neue geplant werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen, und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe beginnt, und bevor die aktuelle Ereignisschleifen-Iteration endet.

### Probleme

Da Ihr Code im selben Thread läuft, der dieselbe Ereignisschleife verwendet wie die Benutzeroberfläche des Browsers, wird der Browser selbst blockiert, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Selbst eine träge Leistung, sei es durch einen Fehler oder aufgrund komplexer Arbeiten, die von Ihrem Code ausgeführt werden, kann dazu führen, dass der Benutzer unter einem trägen Browser leidet.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme gleichzeitig arbeiten wollen, zusammen mit einem Browser, der auch Prozessorzeit benötigt — ganz zu schweigen von der Zeit, die für das Rendern und Zeichnen der Website und seiner eigenen Benutzeroberfläche, die Bearbeitung von Benutzereignissen usw. benötigt wird — wird heutzutage alles viel zu leicht verstopft.

### Lösungen

Die Verwendung von [Web Workern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, hilft, dieses Problem zu lindern. Eine gut gestaltete Website oder Anwendung verwendet Worker, um alle komplexen oder langwierigen Operationen auszuführen und lässt den Hauptthread so wenig wie möglich über die Aktualisierung, das Layout und das Rendering der Webseite hinaus arbeiten.

Dies wird weiter durch die Verwendung von [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous) und Techniken wie [Promisen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) alleviiert, die es dem Hauptcode ermöglichen, weiterzulaufen, während auf die Ergebnisse einer Anfrage gewartet wird. Code, der jedoch auf einer grundlegenderen Ebene ausgeführt wird — beispielsweise Code, der eine Bibliothek oder ein Framework bildet — benötigt möglicherweise eine Möglichkeit, Code zu einem sicheren Zeitpunkt einzuplanen, während er immer noch auf dem Hauptthread ausgeführt wird, unabhängig von den Ergebnissen jeder einzelnen Anfrage oder Aufgabe.

Microtasks stellen eine weitere Lösung für dieses Problem dar, indem sie einen genaueren Zugriff ermöglichen, indem es möglich ist, Code zu planen, der ausgeführt werden soll, bevor die nächste Iteration der Ereignisschleife beginnt, anstatt bis zur nächsten warten zu müssen.

Die Microtask-Warteschlange gibt es schon eine Weile, aber sie wurde historisch nur intern verwendet, um Dinge wie Promises anzutreiben. Die Einführung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), das Entwicklern zugänglich gemacht wurde, schafft eine einheitliche Warteschlange für Microtasks, die überall dort verwendet wird, wo es notwendig ist, die Fähigkeit zu haben, Code sicher einzuplanen, wenn keine Ausführungskontexte mehr auf dem JavaScript-Ausführungskontextstapel sind. Über mehrere Instanzen hinweg und in allen Browsern und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Microqueue-Mechanismus, dass diese Microtasks zuverlässig in der gleichen Reihenfolge arbeiten und so potenziell schwer zu findende Bugs vermieden werden.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Angenehme asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
