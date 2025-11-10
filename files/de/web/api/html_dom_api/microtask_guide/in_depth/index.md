---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debuggen oder möglicherweise bei der Entscheidung über den besten Ansatz zur Lösung eines Problems rund um das Timing und die Planung von Aufgaben und Microtasks kann es nützlich sein, einige Details darüber zu verstehen, wie die JavaScript-Laufzeit unter der Haube funktioniert.

JavaScript ist eine von Natur aus einzelfädige Sprache. Sie wurde in einer Zeit entwickelt, in der dies eine positive Entscheidung war; es gab nur wenige Mehrprozessor-Computer für die breite Öffentlichkeit und die erwartete Menge an Code, die von JavaScript verarbeitet werden würde, war zu dieser Zeit relativ gering.

Im Laufe der Zeit haben sich Computer natürlich zu leistungsstarken Mehrkernsystemen entwickelt, und JavaScript ist eine der meistgenutzten Sprachen in der Computerwelt geworden. Eine Vielzahl der beliebtesten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekte aus den Einschränkungen einer einzelfädigen Sprache zu befreien.

Beginnend mit der Einführung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval)) hat die von Webbrowsern bereitgestellte JavaScript-Umgebung allmählich fortgeschrittene Funktionen entwickelt, die die Planung von Aufgaben, die Entwicklung mehrfädiger Anwendungen und so weiter ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit beim Planen und Ausführen von Code operiert.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die hier beschriebenen Details sind für die meisten JavaScript-Programmierer im Allgemeinen nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Sie nicht interessiert, können Sie diesen Abschnitt überspringen und später zurückkommen, wenn Sie feststellen, dass Sie es brauchen.

Wenn ein Fragment von JavaScript-Code ausgeführt wird, läuft es in einem **Ausführungskontext**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dieser wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der nicht empfohlenen {{jsxref("Global_Objects/eval", "eval()")}} Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen ein Geltungsbereich innerhalb Ihres Codes. Wenn eines dieser Code-Segmente mit der Ausführung beginnt, wird ein neuer Kontext erstellt, in dem es ausgeführt wird; dieser Kontext wird dann beim Verlassen des Codes zerstört. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige im Laufe der Programmausführung mehrmals erstellt und zerstört werden. Jeder Kontext wird beim Erstellen auf den **Ausführungskontext-Stack** gelegt. Beim Beenden wird der Kontext von diesem Stack entfernt.

- Beim Start des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()`-Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stack geschoben.

    - Wenn `greetUser()` die Funktion `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstack entfernt und zerstört. Die Programmausführung wird mit dem nächsten Kontext im Stack fortgesetzt, was `greetUser()` ist; diese Funktion wird an der Stelle fortgesetzt, an der sie unterbrochen wurde.
    - Die Funktion `greetUser()` kehrt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack geschoben.

    - Wenn `greetUser()` die Funktion `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstack entfernt und zerstört. `greetUser()` wird an der Stelle fortgesetzt, an der es unterbrochen wurde.
    - Die Funktion `greetUser()` kehrt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack geschoben.
    - Wenn `greetUser()` die Funktion `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstack entfernt und zerstört.
    - Die Funktion `greetUser()` kehrt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

- Das Hauptprogramm beendet sich, und sein Ausführungskontext wird aus dem Ausführungsstack entfernt; da keine Kontexte mehr im Stack vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise können jedes Programm und jede Funktion ihre eigene Menge an Variablen und anderen Objekten haben. Jeder Kontext verfolgt zudem die nächste Zeile im Programm, die ausgeführt werden soll, und andere Informationen, die für den Betrieb dieses Kontexts entscheidend sind. Durch die Verwendung der Kontexte und des Kontext-Stacks auf diese Weise können viele der Grundlagen der Programmabläufe verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufen und -rückgaben und so weiter.

Eine besondere Anmerkung zu rekursiven Funktionen—das sind Funktionen, die sich selbst aufrufen, möglicherweise über mehrere Stufen der Rekursion: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Ebenen der Rekursion und die Rückgabe von Ergebnissen durch diese Rekursion zu verfolgen, bedeutet aber auch, dass jedes Mal, wenn eine Funktion rekursiv aufgerufen wird, mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, hält die Laufzeitumgebung ein Set von **Agenten** bereit, in dem JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einem Set von Ausführungskontexten, dem Ausführungskontext-Stack, einem Hauptthread, einem Set für alle zusätzlichen Threads, die möglicherweise erstellt werden, um Worker zu behandeln, einer Aufgabenwarteschlange und einer Microtask-Warteschlange. Abgesehen vom Hauptthread—den einige Browser über mehrere Agenten hinweg teilen—ist jede Komponente eines Agenten einzigartig für diesen Agenten.

Hier schauen wir uns an, wie die Laufzeitumgebung etwas detaillierter funktioniert.

### Event-Loops

Jeder Agent wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) angetrieben, die wiederholt durchlaufen wird. Während jeder Iteration läuft höchstens eine ausstehende JavaScript-Aufgabe, dann alle ausstehenden Microtasks, dann wird jegliches notwendige Rendering und Malen durchgeführt, bevor die Schleife erneut beginnt.

Der Code Ihrer Website oder Anwendung läuft im selben **{{Glossary("thread", "Thread")}}**, der dieselbe **Ereignisschleife** verwendet wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **{{Glossary("main_thread", "Haupt-Thread")}}**, und zusätzlich zur Ausführung des Hauptcodes Ihrer Website behandelt er das Empfangen und Verteilen von Benutzer- und anderen Ereignissen, das Rendern und Malen von Webinhalten und so weiter.

Die Ereignisschleife treibt also alles an, was im Browser in Bezug auf die Interaktion mit dem Benutzer passiert, ist aber wichtiger für unsere Zwecke hier auch verantwortlich für die Planung und Ausführung jedes Code-Snippets, das innerhalb ihres Threads läuft.

Es gibt drei Arten von Ereignisschleifen:

- Fenster-Ereignisschleife
  - : Die Fenster-Ereignisschleife ist diejenige, die alle Fenster antreibt, die einen ähnlichen Origin teilen (obwohl es hier, wie unten beschrieben, weitere Beschränkungen gibt).
- Worker-Ereignisschleife
  - : Eine Worker-Ereignisschleife ist eine, die einen Worker antreibt; dies umfasst alle Arten von Workern, einschließlich grundlegender [Web-Worker](/de/docs/Web/API/Web_Workers_API), [Shared Worker](/de/docs/Web/API/SharedWorker) und [Service Worker](/de/docs/Web/API/Service_Worker_API). Worker befinden sich in einem oder mehreren Agenten, die vom "Haupt"-Code getrennt sind; der Browser kann eine einzelne Ereignisschleife für alle Worker eines bestimmten Typs verwenden oder mehrere Ereignisschleifen, um sie zu handhaben.
- Worklet-Ereignisschleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Ereignisschleife ist die Ereignisschleife, die Agenten antreibt, die den Code für die Worklets eines bestimmten Agenten ausführen. Dazu gehören Worklets des Typs [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet).

Mehrere Fenster, die vom gleichen {{Glossary("origin", "Origin")}} geladen werden, können in derselben Ereignisschleife laufen und Aufgaben in die Ereignisschleife einreihen, damit ihre Aufgaben nacheinander bearbeitet werden. Beachten Sie, dass im Web-Jargon das Wort "Fenster" tatsächlich "Browser-Level-Container, in dem Webinhalte ausgeführt werden" bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Frames.

Es gibt spezifische Umstände, in denen dieses Teilen einer Ereignisschleife unter Fenstern mit einem gemeinsamen Origin möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen diese wahrscheinlich eine Ereignisschleife.
- Wenn ein Fenster tatsächlich ein Container in einem {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Ereignisschleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer Mehrprozess-Webbrowser-Implementierung.

Die Einzelheiten können je nach Browser variieren, je nachdem, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was durch die Standardmechanismen wie das initiale Starten eines Scripts, das asynchrone Senden eines Ereignisses und so weiter geplant wird. Sie können eine Aufgabe auch durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) in die Warteschlange einreihen.

Der Unterschied zwischen der Aufgabenwarteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Ereignisschleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgabenwarteschlange aus. Weitere Aufgaben und Aufgaben, die nach Beginn der Iteration zur Warteschlange hinzugefügt werden, _werden erst in der nächsten Iteration ausgeführt_.
- Jedes Mal, wenn eine Aufgabe beendet ist und der Ausführungskontext-Stack leer ist, werden alle Microtasks in der Microtask-Warteschlange der Reihe nach ausgeführt. Der Unterschied besteht darin, dass die Ausführung von Microtasks fortgesetzt wird, bis die Warteschlange leer ist, selbst wenn zwischenzeitlich neue Microtasks eingeplant werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe beginnt und bevor die aktuelle Iteration der Ereignisschleife endet.

### Probleme

Da Ihr Code im selben Thread läuft und die gleiche Ereignisschleife verwendet wie die Benutzeroberfläche des Browsers, wird der Browser selbst blockiert, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Selbst eine langsame Leistung, sei es durch einen Fehler oder durch komplexe Arbeiten, die von Ihrem Code ausgeführt werden, kann dazu führen, dass der Benutzer einen trägen Browser erlebt.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme gleichzeitig arbeiten möchten, neben einem Browser, der ebenfalls Prozessorzeit benötigt, geschweige denn Zeit, um die Website und ihre eigene Benutzeroberfläche zu rendern und Ereignisse zu verarbeiten, wird heute alles viel zu leicht überlastet.

### Lösungen

Die Verwendung von [Web-Workern](/de/docs/Web/API/Web_Workers_API), die das Hauptskript erlauben, andere Skripte in neuen Threads auszuführen, hilft, dieses Problem zu lindern. Eine gut gestaltete Website oder App verwendet Worker, um komplexe oder langwierige Operationen durchzuführen, während der Haupt-Thread so wenig wie möglich arbeiten muss, abgesehen davon, die Webseite zu aktualisieren, zu layouten und zu rendern.

Dies wird weiter durch die Nutzung von [asynchronem JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) reduziert, wie z.B. durch {{jsxref("Global_Objects/Promise", "Promises", "", 1)}}, um es dem Hauptcode zu ermöglichen, weiterzulaufen, während auf das Ergebnis einer Anfrage gewartet wird. Code, der jedoch auf einer grundlegenderen Ebene läuft–wie Code, der eine Bibliothek oder ein Framework bildet–möglicherweise eine Möglichkeit benötigt, um Code zu einem sicheren Zeitpunkt im Haupt-Thread auszuführen, unabhängig von den Ergebnissen einer einzelnen Anfrage oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem, da sie einen feineren Zugang bieten, indem sie es ermöglichen, Code vor Beginn der nächsten Iteration der Ereignisschleife auszuführen, anstatt bis zur nächsten warten zu müssen.

Die Microtask-Warteschlange gibt es schon eine Weile, wurde aber historisch nur intern genutzt, um Dinge wie Promises anzutreiben. Die Hinzufügung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), das Entwicklern zur Verfügung gestellt wird, schafft eine einheitliche Warteschlange für Microtasks, die überall verwendet wird, wo die Notwendigkeit besteht, Code sicher zu einem Zeitpunkt auszuführen, an dem keine Ausführungskontexte mehr auf dem JavaScript-Ausführungskontext-Stack vorhanden sind. Durch die Verwendung eines standardisierten Warteschlangensystems über mehrere Instanzen und alle Browser und JavaScript-Laufzeiten hinweg arbeiten diese Microtasks zuverlässig in derselben Reihenfolge und vermeiden so potenziell schwer zu findende Fehler.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Geschickte asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
