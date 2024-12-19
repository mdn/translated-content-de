---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debuggen oder möglicherweise bei der Entscheidung über den besten Ansatz zur Lösung eines Problems im Zusammenhang mit Timing und der Planung von Aufgaben und Microtasks kann es nützlich sein, zu verstehen, wie die JavaScript-Laufzeit unter der Oberfläche arbeitet.

JavaScript ist von Natur aus eine Single-Threaded Sprache. Es wurde in einer Zeit entwickelt, in der dies eine positive Wahl war; es gab nur wenige Mehrprozessor-Computer für die Allgemeinheit und die erwartete Menge an Code, die von JavaScript verarbeitet werden sollte, war zu dieser Zeit relativ gering.

Mit der Zeit wissen wir natürlich, dass sich Computer zu leistungsstarken Mehrkernsystemen entwickelt haben und JavaScript zu einer der am häufigsten genutzten Sprachen in der Computerwelt geworden ist. Eine Vielzahl der beliebtesten Anwendungen basieren zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, Projekte aus den Beschränkungen einer Single-Threaded Sprache zu befreien.

Beginnend mit der Hinzufügung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval)) hat sich die JavaScript-Umgebung, die von Web-Browsern bereitgestellt wird, schrittweise zu leistungsstarken Funktionen entwickelt, die die Planung von Aufgaben, die Entwicklung von Multi-Threaded Anwendungen usw. ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit beim Planen und Ausführen von Code arbeitet.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Details hier sind für die meisten JavaScript-Programmierer im Allgemeinen nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Ihnen egal ist, können Sie dies überspringen und später darauf zurückkommen, wenn Sie feststellen, dass Sie es brauchen.

Wenn ein Fragment von JavaScript-Code ausgeführt wird, läuft es in einem **Ausführungskontext**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erzeugen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der unklugen Funktion {{jsxref("Global_Objects/eval", "eval()")}} erstellt ebenfalls einen neuen Ausführungskontext.

Jede Kontext ist im Wesentlichen eine Ebene des Geltungsbereichs innerhalb Ihres Codes. Sobald eines dieser Code-Segmente die Ausführung beginnt, wird ein neuer Kontext erstellt, in dem es ausgeführt wird; dieser Kontext wird dann zerstört, wenn der Code endet. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige im Laufe der Programmausführung mehrfach erstellt und zerstört werden. Jeder Kontext wird auf den **Ausführungskontext-Stack** geschoben, sobald er erstellt wird, und entfernt, sobald er beendet ist.

- Beim Starten des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()` Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stack geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört. Die Programmausführung wird mit dem nächsten auf dem Stack gefundenen Kontext fortgesetzt, der `greetUser()` ist; diese Funktion wird dort fortgesetzt, wo sie aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext für sie erstellt und auf den Stack geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört. `greetUser()` setzt die Ausführung dort fort, wo es aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext für sie erstellt und auf den Stack geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

- Das Hauptprogramm endet und sein Ausführungskontext wird vom Ausführungsstack entfernt; da keine Kontexte mehr auf dem Stack vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion ihr eigenes Set von Variablen und anderen Objekten haben. Jeder Kontext verfolgt zusätzlich die nächste Zeile im Programm, die ausgeführt werden sollte, und andere Informationen, die für den Betrieb dieses Kontexts entscheidend sind. Durch die Verwendung der Kontexte und des Kontext-Stacks auf diese Weise können viele Grundlagen der Funktionsweise eines Programms verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und -rückgaben und so weiter.

Ein besonderer Hinweis zu rekursiven Funktionen, also Funktionen, die sich selbst aufrufen, möglicherweise über mehrere Ebenen von Tiefe oder Rekursion: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Rekursionsebenen zu verfolgen und die Rückgabe der Ergebnisse durch diese Rekursion zu verfolgen, bedeutet jedoch auch, dass jedes Mal, wenn eine Funktion rekursiert, mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, unterhält die Laufzeit-Engine eine Menge **Agents**, in denen JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einer Reihe von Ausführungskontexten, dem Ausführungskontext-Stack, einem Hauptthread, einem Satz für zusätzliche Threads, die möglicherweise erstellt werden, um Arbeiter zu bearbeiten, einer Aufgabenwarteschlange und einer Microtask-Warteschlange. Mit Ausnahme des Hauptthreads, den einige Browser über mehrere Agents hinweg teilen, ist jede Komponente eines Agents einzigartig für diesen Agenten.

Hier betrachten wir, wie die Laufzeit im Detail funktioniert.

### Event Loops

Jeder Agent wird durch eine [Event-Schleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die wiederholt durchlaufen wird. Während jeder Iteration wird höchstens eine ausstehende JavaScript-Aufgabe ausgeführt, dann alle ausstehenden Microtasks, dann erfolgt bei Bedarf Rendering und Malen, bevor die Schleife erneut beginnt.

Der Code Ihrer Website oder App wird im gleichen **{{Glossary("thread", "Thread")}}** ausgeführt, der die gleiche **Event-Schleife** wie die Benutzeroberfläche des Webbrowsers teilt. Dies ist der **{{Glossary("main_thread", "Hauptthread")}}**, und zusätzlich zum Ausführen des Hauptcodes Ihrer Site, kümmert er sich um das Empfangen und Verteilen von Benutzer- und anderen Ereignissen, Rendern und Malen von Webinhalten und so weiter.

Die Event-Schleife steuert also alles, was im Browser passiert, was die Interaktion mit dem Benutzer betrifft. Wichtiger ist jedoch, dass sie für die Planung und Ausführung jedes Codes verantwortlich ist, der innerhalb ihres Threads läuft.

Es gibt drei Arten von Event-Schleifen:

- Fenster Event-Schleife
  - : Die Fenster-Event-Schleife ist diejenige, die alle Fenster mit einem ähnlichen Ursprung antreibt (obwohl es dazu weitere Einschränkungen gibt, wie unten beschrieben).
- Arbeiter-Event-Schleife
  - : Eine Arbeiter-Event-Schleife treibt einen Arbeiter an; dazu gehören alle Formen von Arbeitern, einschließlich grundlegender [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API), [Shared Workers](/de/docs/Web/API/SharedWorker) und [Service Workers](/de/docs/Web/API/Service_Worker_API). Arbeiter werden in einem oder mehreren Agents gehalten, die vom „Haupt“-Code getrennt sind; der Browser kann eine einzige Event-Schleife für alle Arbeiter eines bestimmten Typs oder mehrere Event-Schleifen verwenden, um sie zu handhaben.
- Worklet-Event-Schleife
  - : Eine [worklet](/de/docs/Web/API/Worklet)-Event-Schleife ist die Event-Schleife, die Agents antreibt, die den Code für die Worklets eines bestimmten Agenten ausführen. Dazu gehören Worklets des Typs [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet).

Mehrere Fenster, die vom gleichen {{Glossary("origin", "Ursprung")}} geladen wurden, können auf der gleichen Event-Schleife laufen und Aufgaben in die Event-Schleife einreihen, sodass ihre Aufgaben abwechselnd vom Prozessor bearbeitet werden. Beachten Sie, dass im Web-Jargon das Wort „Fenster“ tatsächlich „Browser-Level-Container bedeutet, in dem Webinhalte ausgeführt werden“, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Rahmens.

Es gibt spezifische Umstände, unter denen diese gemeinsame Nutzung einer Event-Schleife zwischen Fenstern mit einem gemeinsamen Ursprung möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Event-Schleife.
- Wenn ein Fenster tatsächlich ein Container in einem {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Event-Schleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer mehrprozessigen Webbrowser-Implementierung.

Die Details können sich je nach Browser unterscheiden, abhängig von ihrer Implementierung.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was durch die Standardmechanismen ausgeführt werden soll, wie zum Beispiel das initiale Starten der Ausführung eines Skripts, das asynchrone Auslösen eines Ereignisses und so weiter. Neben der Verwendung von Ereignissen können Sie eine Aufgabe auch durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) einreihen.

Der Unterschied zwischen der Aufgabenwarteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Event-Schleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgabenwarteschlange aus. Weitere Aufgaben und Aufgaben, die der Warteschlange nach Beginn der Iteration hinzugefügt werden, _werden erst in der nächsten Iteration_ ausgeführt.
- Immer wenn eine Aufgabe endet und der Ausführungskontext-Stack leer ist, werden alle Microtasks in der Microtask-Warteschlange nacheinander ausgeführt. Der Unterschied besteht darin, dass die Ausführung der Microtasks so lange fortgesetzt wird, bis die Warteschlange leer ist – selbst wenn zwischendurch neue hinzugefügt werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen und diese neuen Microtasks werden vor der nächsten Aufgabe und vor dem Ende der aktuellen Event-Schleifeniteration ausgeführt.

### Probleme

Da Ihr Code im gleichen Thread läuft, der dieselbe Event-Schleife wie die Benutzeroberfläche des Browsers nutzt, bleibt der Browser selbst blockiert, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Auch eine schleppende Leistung, sei es durch einen Fehler oder durch komplexe Arbeit, die von Ihrem Code erledigt wird, kann dazu führen, dass der Benutzer einen langsam reagierenden Browser erlebt.

Wenn mehrere Programme und mehrere Codestücke innerhalb dieser Programme gleichzeitig zu arbeiten beginnen, neben einem Browser, der ebenfalls Prozessorzeit benötigt – ganz zu schweigen von der Zeit, die benötigt wird, um die Site und ihre eigene Benutzeroberfläche zu rendern und zu zeichnen, Benutzerereignisse zu behandeln usw. – wird heutzutage alles viel zu leicht verstopft.

### Lösungen

Die Verwendung von [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, hilft, dieses Problem zu lindern. Eine gut gestaltete Website oder App nutzt Worker, um jede komplexe oder langwierige Operation auszuführen, wobei der Hauptthread so wenig Arbeit wie möglich jenseits der Aktualisierung, Layouts und Darstellung der Webseite übernimmt.

Dieses Problem wird weiter gemildert durch die Verwendung von [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous) Techniken wie {{jsxref("Global_Objects/Promise", "Promises", "", 1)}} um dem Hauptcode zu erlauben, weiterzulaufen, während auf die Ergebnisse einer Anfrage gewartet wird. Code, der auf einer grundlegenderen Ebene läuft – wie Code, der eine Bibliothek oder ein Framework umfasst – benötigt jedoch möglicherweise eine Möglichkeit, Code sicher zu einem späteren Zeitpunkt im Hauptthread auszuführen, unabhängig von den Ergebnissen einer einzelnen Anfrage oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem und bieten einen feinen Grad an Zugriff, indem sie die Möglichkeit bieten, Code vor Beginn der nächsten Iteration der Event-Schleife auszuführen, anstatt warten zu müssen, bis die nächste beginnt.

Die Microtask-Warteschlange gibt es schon eine Weile, aber sie wurde historisch nur intern verwendet, um Dinge wie Promises zu steuern. Die Hinzufügung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), das es Webentwicklern verfügbar macht, erstellt eine einheitliche Warteschlange für Microtasks, die überall dort verwendet wird, wo die Notwendigkeit besteht, Code sicher auszuführen, wenn keine Ausführungskontexte mehr auf dem JavaScript-Ausführungskontextstack vorhanden sind. Über mehrere Instanzen hinweg und in allen Browsern und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Warteschlangenmechanismus, dass diese Microtasks zuverlässig in derselben Reihenfolge arbeiten, wodurch potenziell schwer auffindbare Fehler vermieden werden.

## Siehe auch

- [Microtask Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Event-Schleife](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
