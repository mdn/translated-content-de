---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debugging oder möglicherweise, wenn Sie versuchen, den besten Ansatz zur Lösung eines Problems in Bezug auf Timing und Planung von Aufgaben und Microtasks zu finden, gibt es Aspekte, wie die JavaScript-Laufzeit im Hintergrund funktioniert, die nützlich zu verstehen sind.

JavaScript ist eine von Natur aus einsträngige Sprache. Sie wurde in einer Zeit entwickelt, in der dies eine positive Entscheidung war; es gab nur wenige Mehrprozessrechner, die der Allgemeinheit zur Verfügung standen, und die erwartete Menge an Code, die von JavaScript verarbeitet werden würde, war zu dieser Zeit relativ gering.

Natürlich wissen wir, dass sich Computer im Laufe der Zeit zu leistungsstarken Mehrkernsystemen entwickelt haben und JavaScript eine der am häufigsten verwendeten Sprachen in der Computerwelt geworden ist. Eine Vielzahl der beliebtesten Anwendungen basieren zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekten die Möglichkeit zu geben, die Einschränkungen einer einsträngigen Sprache zu überwinden.

Beginnend mit der Ergänzung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval)) hat sich die von Webbrowsern bereitgestellte JavaScript-Umgebung schrittweise zu leistungsstarken Funktionen entwickelt, die die Planung von Aufgaben, die Entwicklung mehrsträngiger Anwendungen usw. ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier eine Rolle spielt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit beim Planen und Ausführen von Code funktioniert.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Einzelheiten hier sind im Allgemeinen für die meisten JavaScript-Programmierer nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Sie nicht interessiert, können Sie dies überspringen und später darauf zurückkommen, falls Sie feststellen, dass Sie es benötigen.

Wenn ein Fragment von JavaScript-Code ausgeführt wird, läuft es in einem **Ausführungskontext**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der schlecht beratenen Funktion {{jsxref("Global_Objects/eval", "eval()")}} erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Geltungsbereichs innerhalb Ihres Codes. Wenn eines dieser Code-Segmente beginnt, wird ein neuer Kontext erstellt, in dem es ausgeführt wird; dieser Kontext wird dann zerstört, wenn der Code beendet wird. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige im Laufe der Programmausführung mehrmals erstellt und zerstört werden. Wenn jeder Kontext erstellt wird, wird er auf den **Ausführungskontextstapel** gelegt. Wenn er beendet wird, wird der Kontext vom Kontextstapel entfernt.

- Beim Starten des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die Funktion `greetUser()` erstellt; dieser Ausführungskontext wird auf den Ausführungskontextstapel gelegt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion beendet wird, wird der Kontext für `localGreeting()` vom Ausführungskontextstapel entfernt und zerstört. Die Programmausführung wird mit dem nächsten auf dem Stapel gefundenen Kontext fortgesetzt, welchem `greetUser()`; diese Funktion wird an der Stelle fortgesetzt, an der sie unterbrochen wurde.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel gelegt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion beendet wird, wird der Kontext für `localGreeting()` vom Ausführungskontextstapel entfernt und zerstört. `greetUser()` setzt die Ausführung an der unterbrochenen Stelle fort.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel gelegt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion beendet wird, wird der Kontext für `localGreeting()` vom Ausführungskontextstapel entfernt und zerstört.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stapel entfernt und zerstört.

- Das Hauptprogramm beendet sich und sein Ausführungskontext wird vom Ausführungskontextstapel entfernt; da keine Kontexte mehr auf dem Stapel verbleiben, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion über eine eigene Menge von Variablen und anderen Objekten verfügen. Jeder Kontext verfolgt zusätzlich die nächste Zeile im Programm, die ausgeführt werden soll, und andere für den Betrieb dieses Kontexts kritische Informationen. Durch die Verwendung der Kontexte und des Kontextstapels auf diese Weise können viele der Grundlagen der Funktionsweise eines Programms verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufen und Rückgaben usw.

Eine besondere Anmerkung zu rekursiven Funktionen—das sind Funktionen, die sich selbst aufrufen, möglicherweise über mehrere Ebenen oder Tiefen der Rekursion: jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Ebenen der Rekursion und die Rückgabe von Ergebnissen durch diese Rekursion zu verfolgen, aber es bedeutet auch, dass jedes Mal, wenn eine Funktion rekursiv ausgeführt wird, mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, verwaltet die Laufzeitumgebung eine Reihe von **Agenten**, in denen JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einer Reihe von Ausführungskontexten, dem Ausführungskontextstapel, einem Haupt-Thread, einer Menge für möglicherweise erstellte zusätzliche Threads zur Bearbeitung von Arbeitern, einer Aufgabenwarteschlange und einer Microtask-Warteschlange. Abgesehen vom Haupt-Thread—den einige Browser zwischen mehreren Agenten teilen—ist jede Komponente eines Agenten einzigartig für diesen Agenten.

Hier betrachten wir, wie die Laufzeit etwas genauer funktioniert.

### Event-Schleifen

Jeder Agent wird von einer [Event-Schleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die wiederholt verarbeitet wird. Während jeder Iteration führt es höchstens eine ausstehende JavaScript-Aufgabe aus, dann alle ausstehenden Microtasks und führt dann das nötige Rendering und Zeichnen durch, bevor es die Schleife erneut durchläuft.

Der Code Ihrer Website oder App läuft im selben **{{Glossary("thread", "Thread")}}**, der dieselbe **Event-Schleife** teilt, wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **{{Glossary("main_thread", "Haupt-Thread")}}**, und zusätzlich zur Ausführung des Hauptteil des Codes Ihrer Seite verarbeitet er den Empfang und die Verteilung von Benutzer- und anderen Ereignissen, das Rendering und Zeichnen von Webinhalten usw.

Die Event-Schleife treibt dann alles an, was im Browser in Bezug auf die Interaktion mit dem Benutzer geschieht, aber wichtiger für unsere Zwecke hier ist, dass sie für die Planung und Ausführung jedes Codefragments verantwortlich ist, das in seinem Thread ausgeführt wird.

Es gibt drei Arten von Event-Schleifen:

- Fenster-Event-Schleife
  - : Die Fenster-Event-Schleife ist diejenige, die alle Fenster steuert, die einen ähnlichen Ursprung teilen (obwohl es hier weitere Einschränkungen gibt, wie unten beschrieben).
- Worker-Event-Schleife
  - : Eine Worker-Event-Schleife ist eine, die einen Worker steuert; dies umfasst alle Arten von Workern, einschließlich grundlegender [Web Worker](/de/docs/Web/API/Web_Workers_API), [Shared Worker](/de/docs/Web/API/SharedWorker) und [Service Worker](/de/docs/Web/API/Service_Worker_API). Worker werden in einem oder mehreren Agenten gehalten, die vom "Haupt-"Code getrennt sind; der Browser kann eine einzige Event-Schleife für alle Worker eines gegebenen Typs verwenden oder mehrere Event-Schleifen, um sie zu bearbeiten.
- Worklet-Event-Schleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Event-Schleife ist die Event-Schleife, die die Agenten steuert, die den Code für die Worklets eines bestimmten Agenten ausführen. Dies umfasst Worklets vom Typ [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet).

Mehrere Fenster, die vom selben {{Glossary("origin", "Ursprung")}} geladen werden, können in derselben Event-Schleife laufen, wobei jedes Aufgaben in die Event-Schleife einreiht, sodass sie abwechselnd mit dem Prozessor ausgeführt werden. Beachten Sie, dass im Web-Jargon das Wort „Fenster“ tatsächlich „Browser-Level-Container, in dem Webinhalte ausgeführt werden“ bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Frames.

Es gibt spezifische Umstände, unter denen diese gemeinsame Nutzung einer Event-Schleife unter Fenstern mit gemeinsamem Ursprung möglich ist, beispielsweise:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Event-Schleife.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Event-Schleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer Implementierung eines mehrprozessfreien Webbrowsers.

Die Details können von Browser zu Browser variieren, abhängig davon, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was durch die Standardmechanismen geplant wird, wie z.B. das initiale Starten eines Skripts, das asynchrone Senden eines Ereignisses usw. Außerhalb der Verwendung von Ereignissen können Sie eine Aufgabe durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) einreihen.

Der Unterschied zwischen der Aufgabenwarteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Event-Schleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgabenwarteschlange aus. Weitere Aufgaben und Aufgaben, die nach Beginn der Iteration zur Warteschlange hinzugefügt werden, _werden erst in der nächsten Iteration ausgeführt_.
- Immer wenn eine Aufgabe beendet wird und der Ausführungskontextstapel leer ist, werden alle Microtasks in der Microtask-Warteschlange nacheinander ausgeführt. Der Unterschied besteht darin, dass die Ausführung von Microtasks fortgesetzt wird, bis die Warteschlange leer ist—selbst wenn zwischenzeitlich neue hinzugefügt werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen, und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe ausgeführt wird, und bevor die aktuelle Iteration der Event-Schleife beendet ist.

### Probleme

Da Ihr Code im gleichen Thread läuft, der gleiche Event-Schleife verwendet, wie die Benutzeroberfläche des Browsers, wird der Browser selbst blockiert, wenn Ihr Code blockiert oder in eine Endlosschleife eintritt. Sogar eine langsame Leistung, sei es aufgrund eines Fehlers oder wegen der komplexen Arbeit, die Ihr Code leistet, kann dazu führen, dass der Benutzer einen trägen Browser erlebt.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme versuchen, gleichzeitig zu arbeiten, zusammen mit einem Browser, der ebenfalls Prozessorzeit benötigt—ganz zu schweigen von der Zeit, um die Seite zu rendern und zu zeichnen und seine eigene Benutzeroberfläche zu verwalten—wird heutzutage alles viel zu leicht blockiert.

### Lösungen

Die Verwendung von [Web Workern](/de/docs/Web/API/Web_Workers_API), die dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, trägt dazu bei, dieses Problem zu lindern. Eine gut gestaltete Website oder App verwendet Worker, um jede komplexe oder langwierige Operation durchzuführen und lässt dem Haupt-Thread so wenig Arbeit wie möglich, abgesehen von der Aktualisierung, dem Layout und dem Rendering der Webseite.

Dies wird weiter durch den Einsatz von [asynchronem JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) angegangen, wie z.B. {{jsxref("Global_Objects/Promise", "Promises", "", 1)}}, um dem Hauptcode die Ausführung zu ermöglichen, während auf die Ergebnisse einer Anforderung gewartet wird. Code, der jedoch auf einer fundamentalen Ebene läuft—wie z.B. Code, der eine Bibliothek oder ein Framework umfasst—kann einen Weg benötigen, um Code zu einem sicheren Zeitpunkt zu planen, während er weiterhin im Haupt-Thread ausgeführt wird, unabhängig von den Ergebnissen einer einzelnen Anforderung oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem und bieten einen feineren Grad an Zugriff, indem sie es ermöglichen, den Code so zu planen, dass er ausgeführt wird, bevor die nächste Iteration der Event-Schleife beginnt, anstatt bis zur nächsten zu warten.

Die Microtask-Warteschlange gibt es schon eine Weile, wurde jedoch historisch nur intern verwendet, um Dinge wie Promises zu steuern. Die Ergänzung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), die es Webentwicklern zugänglich macht, schafft eine einheitliche Warteschlange für Microtasks, die überall dort verwendet wird, wo die Möglichkeit benötigt wird, Code sicher zu planen, wenn keine Ausführungskontexte mehr im JavaScript-Ausführungskontextstapel vorhanden sind. Über mehrere Instanzen und in allen Browsern und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Warteschlangenmechanismus, dass diese Microtasks zuverlässig in derselben Reihenfolge arbeiten, wodurch potenziell schwer zu findende Fehler vermieden werden.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Event-Schleife](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Elegantes asynchrones Programmieren mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
