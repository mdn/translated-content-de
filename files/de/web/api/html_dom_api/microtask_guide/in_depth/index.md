---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 3e8f6b056bf18def161a88affa70f48a35871a31
---

{{APIRef("HTML DOM")}}

Beim Debuggen oder möglicherweise bei der Entscheidung für den besten Ansatz zur Lösung eines Problems rund um das Timing und die Planung von Aufgaben und Microtasks kann es hilfreich sein, zu verstehen, wie die JavaScript-Laufzeit im Hintergrund arbeitet.

JavaScript ist eine von Natur aus Single-Threaded-Sprache. Es wurde in einer Ära entwickelt, in der dies eine positive Wahl war; es gab nur wenige Mehrprozessor-Computer für die allgemeine Öffentlichkeit, und die erwartete Menge an Code, der von JavaScript gehandhabt werden sollte, war damals relativ gering.

Im Laufe der Zeit wissen wir natürlich, dass Computer sich zu leistungsstarken Mehrkernsystemen entwickelt haben und JavaScript zu einer der am häufigsten verwendeten Sprachen in der Computerwelt geworden ist. Eine große Anzahl der beliebtesten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekte aus den Einschränkungen einer Single-Threaded-Sprache zu befreien.

Beginnend mit der Hinzufügung von Timeouts und Intervallen als Teil der Web-API ({{domxref("setTimeout()")}} und {{domxref("setInterval()")}}) hat sich die von Webbrowsern bereitgestellte JavaScript-Umgebung schrittweise weiterentwickelt, um leistungsstarke Funktionen zu umfassen, die die Planung von Aufgaben, die Entwicklung multi-threadfähiger Anwendungen usw. ermöglichen. Um zu verstehen, wo `queueMicrotask()` hier ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit beim Planen und Ausführen von Code arbeitet.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Details hier sind allgemein nicht wichtig für die meisten JavaScript-Programmierer. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn Sie sich nicht darum kümmern, können Sie dies überspringen und später zurückkehren, wenn Sie feststellen, dass Sie es benötigen.

Wenn ein Ausschnitt von JavaScript-Code ausgeführt wird, läuft er in einem **Ausführungskontext**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der wenig empfehlenswerten {{jsxref("Global_Objects/eval", "eval()")}}-Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Umfangs innerhalb Ihres Codes. Wenn einer dieser Codeabschnitte beginnt, wird ein neuer Kontext erstellt, in dem er ausgeführt werden soll; dieser Kontext wird dann zerstört, wenn der Code beendet wird. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige während der Programmausführung mehrmals erstellt und zerstört werden. Wenn jeder Kontext erstellt wird, wird er auf den **Ausführungskontext-Stack** gelegt. Wenn er beendet wird, wird der Kontext aus dem Kontext-Stack entfernt.

- Beim Starten des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()`-Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stack geschoben.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungs-Stack entfernt und zerstört. Die Programmausführung wird mit dem nächsten Kontext im Stack fortgesetzt, der `greetUser()` ist; diese Funktion setzt die Ausführung dort fort, wo sie aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack gelegt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungs-Stack entfernt und zerstört. `greetUser()` setzt die Ausführung dort fort, wo es aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack gelegt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungs-Stack entfernt und zerstört.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stack entfernt und zerstört.

- Das Hauptprogramm endet und sein Ausführungskontext wird aus dem Ausführungs-Stack entfernt; da keine Kontexte mehr im Stack vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion über eigene Variablen und andere Objekte verfügen. Jeder Kontext verfolgt zusätzlich die nächste Zeile im Programm, die ausgeführt werden sollte, und andere für den Betrieb dieses Kontexts kritische Informationen. Durch die Verwendung der Kontexte und des Kontext-Stacks auf diese Weise können viele der Grundlagen des Betriebs eines Programms verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und Rückgaben und so weiter.

Eine besondere Anmerkung zu rekursiven Funktionen, also Funktionen, die sich möglicherweise über mehrere Ebenen der Rekursion selbst aufrufen: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dadurch kann die JavaScript-Laufzeit die Ebenen der Rekursion und die Rückgabe der Ergebnisse durch diese Rekursion verfolgen, aber es bedeutet auch, dass bei jedem rekursiven Aufruf einer Funktion mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, hält die Laufzeit-Engine eine Reihe von **Agents** für die Ausführung von JavaScript-Code aufrecht. Jeder Agent besteht aus einer Reihe von Ausführungskontexten, dem Ausführungskontext-Stack, einem Haupt-Thread, einer Gruppe für alle zusätzlichen Threads, die zur Bearbeitung von Arbeitern erstellt werden können, einer Aufgabenschlange und einer Microtask-Schlange. Abgesehen vom Haupt-Thread, den einige Browser über mehrere Agents hinweg teilen, ist jede Komponente eines Agents einzigartig für diesen Agent.

Hier betrachten wir, wie die Laufzeit im Detail funktioniert.

### Ereignisschleifen

Jeder Agent wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die wiederholt verarbeitet wird. Während jeder Iteration führt sie höchstens eine ausstehende JavaScript-Aufgabe aus, dann alle ausstehenden Microtasks, führt dann die erforderlichen Rendering- und Malaufgaben aus, bevor sie erneut schleift.

Der Code Ihrer Website oder App läuft im selben **{{Glossary("thread")}}**, der dieselbe **Ereignisschleife** teilt, wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **{{Glossary("main thread")}}**, und zusätzlich zur Ausführung des Hauptcodes Ihrer Seite behandelt er das Empfangen und Verteilen von Benutzer- und anderen Ereignissen, das Rendering und Malen von Webinhalten und so weiter.

Die Ereignisschleife treibt dann alles an, was im Browser passiert, wie es die Interaktion mit dem Benutzer betrifft, aber wichtiger für unsere Zwecke hier ist, dass sie für die Planung und Ausführung jedes Codeabschnitts verantwortlich ist, der innerhalb ihres Threads läuft.

Es gibt drei Arten von Ereignisschleifen:

- Fenster-Ereignisschleife
  - : Die Fenster-Ereignisschleife ist diejenige, die alle Fenster antreibt, die einen ähnlichen Ursprung teilen (obwohl es dazu, wie unten beschrieben, weitere Einschränkungen gibt).
- Arbeiter-Ereignisschleife
  - : Eine Arbeiter-Ereignisschleife ist eine, die einen Arbeiter antreibt; dies umfasst alle Arten von Arbeitern, einschließlich grundlegender [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API), [gemeinsamer Arbeiter](/de/docs/Web/API/SharedWorker) und [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API). Arbeiter werden in einem oder mehreren Agents gehalten, die vom "Haupt"-Code getrennt sind; der Browser kann eine einzige Ereignisschleife für alle Arbeiter eines bestimmten Typs verwenden oder mehrere Ereignisschleifen, um sie zu verarbeiten.
- Worklet-Ereignisschleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Ereignisschleife ist die Ereignisschleife, die Agents antreibt, die den Code für die Worklets eines gegebenen Agents ausführen. Dies umfasst Worklets vom Typ {{domxref("Worklet")}} und {{domxref("AudioWorklet")}}.

Mehrere Fenster, die vom selben {{Glossary("origin")}} geladen werden, können auf derselben Ereignisschleife laufen, wobei jede Aufgaben in die Ereignisschleife einreiht, sodass ihre Aufgaben nacheinander mit dem Prozessor durchgeführt werden. Beachten Sie, dass im Web-Jargon das Wort "Fenster" tatsächlich "Browser-Ebene-Container, in dem Webinhalte laufen" bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Rahmens.

Es gibt bestimmte Umstände, unter denen dieses Teilen einer Ereignisschleife zwischen Fenstern mit einem gemeinsamen Ursprung möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere geöffnet hat, teilen sie sich wahrscheinlich eine Ereignisschleife.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es sich wahrscheinlich eine Ereignisschleife mit dem Fenster, das es enthält.
- Die Fenster teilen denselben Prozess in einer Mehrprozess-Webbrowserimplementierung.

Die Details können von Browser zu Browser variieren, je nachdem, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was durch die Standardmechanismen wie das Initialisieren der Ausführung eines Skripts, das asynchrone Verarbeiten eines Ereignisses usw. geplant ist. Abgesehen von der Verwendung von Ereignissen, können Sie eine Aufgabe planen, indem Sie {{domxref("setTimeout()")}} oder {{domxref("setInterval()")}} verwenden.

Der Unterschied zwischen der Aufgaben- und der Microtask-Schlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Ereignisschleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgaben-Schlange aus. Weitere Aufgaben und Aufgaben, die nach Beginn der Iteration zur Schlange hinzugefügt werden, _laufen erst in der nächsten Iteration_.
- Jedes Mal, wenn eine Aufgabe beendet wird und der Ausführungskontext-Stack leer ist, werden alle Microtasks in der Microtask-Schlange nacheinander ausgeführt. Der Unterschied ist, dass die Ausführung von Microtasks fortgesetzt wird, bis die Schlange leer ist – sogar wenn in der Zwischenzeit neue geplant werden. Mit anderen Worten, Microtasks können neue Microtasks einreihen und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe beginnt, und bevor das Ende der aktuellen Ereignisschleifen-Iteration erreicht ist.

### Probleme

Da Ihr Code im gleichen Thread läuft, der die gleiche Ereignisschleife verwendet wie die Benutzeroberfläche des Browsers, blockiert der Browser selbst, wenn Ihr Code blockiert oder in einer Endlosschleife hängt. Selbst träge Leistung, verursacht durch einen Fehler oder weil Ihr Code komplexe Aufgaben ausführt, kann dazu führen, dass der Benutzer einen trägen Browser erleben muss.

Wenn mehrere Programme und mehrere Code-Objekte innerhalb dieser Programme gleichzeitig arbeiten wollen, zusammen mit einem Browser, der auch Prozessortime benötigt – geschweige denn Zeit, um die Seite zu rendern und zu zeichnen und sein eigenes UI zu verwalten, Benutzereignisse zu handhaben usw. – wird heute alles zu leicht verstopft.

### Lösungen

Die Verwendung von [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, trägt dazu bei, dieses Problem zu lindern. Eine gut gestaltete Website oder App verwendet Arbeiter, um komplexe oder langwierige Operationen auszuführen und den Haupt-Thread so wenig wie möglich zu belasten, jenseits des Aktualisierens, Layouts und Renderns der Webseite.

Dies wird weiter gelindert durch die Verwendung von [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous)-Techniken wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), um es dem Hauptcode zu ermöglichen, weiterzulaufen, während er auf das Ergebnis einer Anfrage wartet. Allerdings kann Code auf einer fundamentalen Ebene – wie z.B. Code, der eine Bibliothek oder ein Framework bildet – eine Möglichkeit benötigen, Code zeitlich sicher zu planen, während er trotzdem auf dem Haupt-Thread ausgeführt wird, unabhängig von den Ergebnissen einer einzelnen Anfrage oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem, da sie eine feinere Zugriffsebene bieten, indem sie ermöglichen, dass Code vor der nächsten Iteration der Ereignisschleife ausgeführt wird, anstatt bis zur nächsten zu warten.

Die Microtask-Schlange gibt es schon seit einiger Zeit, wurde jedoch historisch nur intern verwendet, um Dinge wie Promises anzutreiben. Die Hinzufügung von `queueMicrotask()`, die sie Webentwicklern zur Verfügung stellt, schafft eine einheitliche Schlange für Microtasks, die überall verwendet wird, wo es notwendig ist, die Möglichkeit zu haben, Code sicher auszuführen, wenn keine Ausführungskontexte mehr im JavaScript-Ausführungskontext-Stack sind. Über mehrere Instanzen hinweg und über alle Browser und JavaScript-Laufzeiten bedeutet ein standardisierter Microqueue-Mechanismus, dass diese Microtasks in der gleichen Reihenfolge zuverlässig arbeiten, wodurch möglicherweise schwer auffindbare Fehler vermieden werden.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- {{domxref("queueMicrotask()")}}
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
