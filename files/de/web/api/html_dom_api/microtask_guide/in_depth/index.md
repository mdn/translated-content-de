---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{DefaultAPISidebar("HTML DOM")}}

Beim Debuggen oder möglicherweise beim Versuch, die beste Vorgehensweise zur Lösung eines Problems im Bereich Timing und Planung von Aufgaben und Microtasks zu entscheiden, gibt es Aspekte darüber, wie die JavaScript-Laufzeit im Hintergrund arbeitet, die möglicherweise nützlich zu verstehen sind.

JavaScript ist eine von Natur aus einsträngige Sprache. Es wurde in einer Ära entworfen, in der dies eine positive Wahl war; es gab nur wenige Mehrprozessor-Computer für die breite Öffentlichkeit, und die erwartete Menge an Code, die von JavaScript verarbeitet werden sollte, war zu dieser Zeit relativ gering.

Mit der Zeit wissen wir natürlich, dass sich Computer zu leistungsstarken Mehrkernsystemen entwickelt haben und JavaScript eine der am häufigsten verwendeten Sprachen in der Computerwelt geworden ist. Eine Vielzahl der beliebtesten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, um Projekte von den Einschränkungen einer einsträngigen Sprache zu befreien.

Mit der Einführung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval)) hat sich die JavaScript-Umgebung, die von Webbrowsern bereitgestellt wird, schrittweise weiterentwickelt, um leistungsstarke Funktionen bereitzustellen, die die Aufgabenplanung, die Entwicklung mehrsträngiger Anwendungen usw. ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier ins Spiel kommt, ist es hilfreich, zu verstehen, wie die JavaScript-Laufzeit bei der Planung und Ausführung von Code arbeitet.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die Details hier sind für die meisten JavaScript-Programmierer im Allgemeinen nicht wichtig. Diese Informationen dienen als Grundlage dafür, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Sie nicht interessiert, können Sie dies überspringen und später zurückkommen, wenn Sie feststellen, dass Sie es benötigen.

Wenn ein Fragment von JavaScript-Code läuft, läuft es in einem **Ausführungskontext**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; also jeden Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der schlecht beratenen {{jsxref("Global_Objects/eval", "eval()")}}-Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Geltungsbereichs innerhalb Ihres Codes. Während eines dieser Code-Segmente die Ausführung beginnt, wird ein neuer Kontext erstellt, um ihn auszuführen; dieser Kontext wird dann zerstört, wenn der Code beendet ist. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige während der Ausführung des Programms mehrmals erstellt und zerstört werden. Sobald ein Kontext erstellt wird, wird er auf den **Ausführungskontext-Stack** gelegt. Wenn es beendet ist, wird der Kontext vom Kontext-Stack entfernt.

- Beim Starten des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die Funktion `greetUser()` erstellt; dieser Ausführungskontext wird auf den Ausführungskontext-Stack gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört. Die Programmausführung wird mit dem nächsten Kontext im Stapel fortgesetzt, der `greetUser()` ist; diese Funktion setzt die Ausführung dort fort, wo sie aufgehört hat.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört. `greetUser()` fährt fort, wo es aufgehört hat.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stack gedrückt.

    - Wenn `greetUser()` `localGreeting()` aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` vom Ausführungsstack entfernt und zerstört.
    - Die Funktion `greetUser()` gibt zurück und ihr Kontext wird vom Stack entfernt und zerstört.

- Das Hauptprogramm wird beendet und sein Ausführungskontext wird vom Ausführungsstack entfernt; da keine Kontexte mehr auf dem Stack vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion ihren eigenen Satz von Variablen und anderen Objekten haben. Jeder Kontext verfolgt außerdem die nächste Zeile im Programm, die ausgeführt werden soll, und andere für den Betrieb dieses Kontexts kritische Informationen. Durch die Verwendung der Kontexte und des Kontext-Stacks auf diese Weise können viele grundlegende Funktionen eines Programms verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und Rückgaben usw.

Eine besondere Bemerkung zu rekursiven Funktionen, das sind Funktionen, die sich selbst aufrufen, möglicherweise über mehrere Ebenen der Rekursion: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Ebenen der Rekursion und die Rückgabe von Ergebnissen durch diese Rekursion zu verfolgen, bedeutet jedoch auch, dass jedes Mal, wenn eine Funktion rekursiert, mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, hält die Laufzeitumgebung eine Menge von **Agenten** bereit, in denen JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einem Satz von Ausführungskontexten, dem Ausführungskontext-Stack, einem Haupt-Thread, einem Satz für alle zusätzlichen Threads, die möglicherweise erstellt werden, um Worker zu handhaben, einer Aufgabenwarteschlange und einer Microtask-Warteschlange. Abgesehen vom Haupt-Thread, den einige Browser über mehrere Agenten hinweg teilen, ist jede Komponente eines Agenten einzigartig für diesen Agenten.

Hier betrachten wir, wie die Laufzeit im Detail funktioniert.

### Event Loops

Jeder Agent wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) gesteuert, die wiederholt verarbeitet wird. Während jeder Iteration führt sie höchstens eine ausstehende JavaScript-Aufgabe aus, dann alle ausstehenden Microtasks, und führt dann alle erforderlichen Render- und Zeichenaufgaben aus, bevor sie wiederholt.

Der Code Ihrer Website oder App läuft im selben **[Thread](/de/docs/Glossary/thread)**, teilt dieselbe **Ereignisschleife**, wie die Benutzeroberfläche des Webbrowsers selbst. Dies ist der **[Haupt-Thread](/de/docs/Glossary/main_thread)**, und neben der Ausführung des Hauptteil Ihres Website-Codes ist er für den Empfang und die Zustellung von Benutzer- und anderen Ereignissen, das Rendern und Zeichnen von Webinhalten usw. verantwortlich.

Die Ereignisschleife treibt also alles an, was im Browser passiert, was die Interaktion mit dem Benutzer betrifft, aber wichtiger für unsere Zwecke hier ist, dass sie für die Planung und Ausführung jedes Codes verantwortlich ist, der in ihrem Thread läuft.

Es gibt drei Arten von Ereignisschleifen:

- Fenster-Ereignisschleife
  - : Die Fenster-Ereignisschleife ist diejenige, die alle Fenster mit einem ähnlichen Ursprung steuert (obwohl es, wie unten beschrieben, weitere Einschränkungen gibt).
- Worker-Ereignisschleife
  - : Eine Worker-Ereignisschleife ist eine, die einen Worker steuert; dies schließt alle Formen von Workern ein, einschließlich der grundlegenden [Web Worker](/de/docs/Web/API/Web_Workers_API), [Shared Worker](/de/docs/Web/API/SharedWorker) und [Service Worker](/de/docs/Web/API/Service_Worker_API). Worker werden in einem oder mehreren Agenten gehalten, die vom "Haupt"-Code getrennt sind; der Browser kann eine einzelne Ereignisschleife für alle Worker eines bestimmten Typs verwenden oder mehrere Ereignisschleifen verwenden, um sie zu handhaben.
- Worklet-Ereignisschleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Ereignisschleife ist die Ereignisschleife, die Agenten treibt, die den Code für die Worklets eines bestimmten Agenten ausführen. Dies schließt Worklets des Typs [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ein.

Mehrere Fenster, die von demselben [Ursprung](/de/docs/Glossary/origin) geladen werden, können in derselben Ereignisschleife ausgeführt werden, wobei Aufgaben in die Ereignisschleife gestellt werden, sodass ihre Aufgaben nacheinander mit dem Prozessor wechseln. Beachten Sie, dass im Sprachgebrauch des Webs das Wort "Fenster" tatsächlich "Browser-level-Container, in dem Webinhalte ausgeführt werden" bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Frames.

Es gibt bestimmte Umstände, unter denen das Teilen einer Ereignisschleife zwischen Fenstern mit einem gemeinsamen Ursprung möglich ist, z.B.:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Ereignisschleife.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Ereignisschleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer mehrprozessorfähigen Webbrowser-Implementierung.

Die spezifischen Details können je nach Browser variieren, je nachdem, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was dazu geplant ist, durch die Standardmechanismen ausgeführt zu werden, wie z.B. das initiale Starten eines Skripts, das asynchrone Zustellen eines Ereignisses usw. Abgesehen von der Verwendung von Ereignissen können Sie eine Aufgabe in die Warteschlange stellen, indem Sie [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`setInterval()`](/de/docs/Web/API/SetInterval) verwenden.

Der Unterschied zwischen der Aufgabenwarteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Ereignisschleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgabenwarteschlange aus. Weitere Aufgaben und Aufgaben, die der Warteschlange nach Beginn der Iteration hinzugefügt werden, _laufen nicht, bis die nächste Iteration_ beginnt.
- Wann immer eine Aufgabe endet und der Ausführungskontext-Stack leer ist, werden alle Microtasks in der Microtask-Warteschlange der Reihe nach ausgeführt. Der Unterschied besteht darin, dass die Ausführung von Microtasks fortgesetzt wird, bis die Warteschlange leer ist – sogar wenn währenddessen neue eingeplant werden. Mit anderen Worten, Microtasks können neue Microtasks in die Warteschlange stellen, und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe zu laufen beginnt und vor dem Ende der aktuellen Ereignisschleifeniteration.

### Probleme

Weil Ihr Code im selben Thread läuft, mit derselben Ereignisschleife, wie die Benutzeroberfläche des Browsers, wird der Browser selbst blockiert, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Sogar schleppende Leistung, sei es durch einen Fehler oder durch komplexe Arbeit, die von Ihrem Code erledigt wird, kann den Benutzer in einem trägen Browser welken lassen.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme gleichzeitig versuchen zu arbeiten, zusammen mit einem Browser, der ebenfalls Prozessorzeit benötigt – geschweige denn Zeit, um die Webseite und die eigene Benutzeroberfläche zu rendern und zu zeichnen, Benutzereignisse zu verarbeiten usw. – wird heutzutage alles viel zu leicht verstopft.

### Lösungen

Die Verwendung von [Web Workern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, trägt zur Entlastung dieses Problems bei. Eine gut gestaltete Website oder App verwendet Worker, um jegliche komplexe oder langwierige Operationen auszuführen und den Haupt-Thread so wenig Arbeit wie möglich tun zu lassen, außer das Aktualisieren, Layout und Rendern der Webseite.

Dies wird weiter durch den Einsatz von [asynchronem JavaScript](/de/docs/Learn/JavaScript/Asynchronous)-Techniken wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) erleichtert, um dem Hauptcode zu ermöglichen, weiterzulaufen, während auf die Ergebnisse einer Anforderung gewartet wird. Code, der auf einer grundlegenderen Ebene läuft – wie Code, der eine Bibliothek oder ein Framework umfasst – benötigt jedoch möglicherweise eine Möglichkeit, Code zu einem sicheren Zeitpunkt zu planen, während er immer noch auf dem Haupt-Thread ausgeführt wird, unabhängig von den Ergebnissen irgendeiner einzelnen Anforderung oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem, indem sie einen feineren Zugriff bieten, indem sie es ermöglichen, Code zu planen, bevor die nächste Iteration der Ereignisschleife beginnt, anstatt bis zur nächsten zu warten.

Die Microtask-Warteschlange gibt es schon eine Weile, wurde jedoch historisch gesehen nur intern genutzt, um Dinge wie Promises zu steuern. Die Hinzufügung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), die sie Webentwicklern zugänglich macht, schafft eine einheitliche Warteschlange für Microtasks, die verwendet wird, wo immer die Möglichkeit notwendig ist, Code sicher zu programmieren, wenn auf dem JavaScript-Ausführungskontext-Stack keine Ausführungskontexte mehr vorhanden sind. Über mehrere Instanzen hinweg und über alle Browser und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Microqueue-Mechanismus, dass diese Microtasks zuverlässig in derselben Reihenfolge ablaufen, wodurch potenziell schwer zu findende Fehler vermieden werden.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Event_loop)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Graciles asynchrones Programmieren mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
