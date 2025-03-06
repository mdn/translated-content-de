---
title: "Im Detail: Microtasks und die JavaScript-Laufzeitumgebung"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{DefaultAPISidebar("HTML DOM")}}

Wenn Sie Debugging durchführen oder möglicherweise entscheiden wollen, welcher der beste Ansatz zur Lösung eines Problems rund um das Timing und die Planung von Aufgaben und Microtasks ist, gibt es einige Aspekte darüber, wie die JavaScript-Laufzeit im Hintergrund arbeitet, die nützlich zu verstehen sein könnten.

JavaScript ist von Natur aus eine einsträngige Sprache. Sie wurde in einer Zeit entworfen, in der dies eine bewusste Entscheidung war; es gab nur wenige Mehrprozessorrechner, die der breiten Öffentlichkeit zugänglich waren, und die zu erwartende Menge an Code, der von JavaScript verarbeitet werden würde, war zu dieser Zeit relativ gering.

Im Laufe der Zeit haben sich Computer natürlich zu leistungsfähigen Multi-Core-Systemen entwickelt, und JavaScript ist zu einer der am häufigsten verwendeten Sprachen in der Computerwelt geworden. Eine Vielzahl der populärsten Anwendungen basiert zumindest teilweise auf JavaScript-Code. Um dies zu unterstützen, war es notwendig, Wege zu finden, Projekte von den Einschränkungen einer einsträngigen Sprache zu befreien.

Beginnend mit der Einführung von Timeouts und Intervallen als Teil der Web-API ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval)), hat sich die von Webbrowsern bereitgestellte JavaScript-Umgebung allmählich weiterentwickelt, um leistungsstarke Funktionen zu umfassen, die die Planung von Aufgaben, die Entwicklung multithreadfähiger Anwendungen und vieles mehr ermöglichen. Um zu verstehen, wo [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) hier ins Spiel kommt, ist es hilfreich zu verstehen, wie die JavaScript-Laufzeit beim Planen und Ausführen von Code funktioniert.

## JavaScript-Ausführungskontexte

> [!NOTE]
> Die hier beschriebenen Details sind für die meisten JavaScript-Programmierer im Allgemeinen nicht wichtig. Diese Informationen werden als Grundlage dafür bereitgestellt, warum Microtasks nützlich sind und wie sie funktionieren; wenn es Sie nicht interessiert, können Sie diesen Abschnitt überspringen und später zurückkommen, wenn Sie feststellen, dass Sie ihn benötigen.

Wenn ein Fragment eines JavaScript-Codes ausgeführt wird, läuft es innerhalb eines **Ausführungskontextes**. Es gibt drei Arten von Code, die einen neuen Ausführungskontext erstellen:

- Der globale Kontext ist der Ausführungskontext, der erstellt wird, um den Hauptteil Ihres Codes auszuführen; das heißt, jeder Code, der außerhalb einer JavaScript-Funktion existiert.
- Jede Funktion wird in ihrem eigenen Ausführungskontext ausgeführt. Dies wird häufig als "lokaler Kontext" bezeichnet.
- Die Verwendung der nicht empfehlenswerten {{jsxref("Global_Objects/eval", "eval()")}}-Funktion erstellt ebenfalls einen neuen Ausführungskontext.

Jeder Kontext ist im Wesentlichen eine Ebene des Scopes innerhalb Ihres Codes. Wenn eines dieser Code-Segmente mit der Ausführung beginnt, wird ein neuer Kontext erstellt, um es auszuführen; dieser Kontext wird dann zerstört, wenn der Code beendet wird. Betrachten Sie das folgende JavaScript-Programm:

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

Dieses kurze Programm enthält drei Ausführungskontexte, von denen einige im Laufe der Programmausführung mehrfach erstellt und zerstört werden. Wenn jeder Kontext erstellt wird, wird er auf den **Ausführungskontextstapel** gestellt. Wenn er beendet wird, wird der Kontext aus dem Kontextstapel entfernt.

- Beim Start des Programms wird der globale Kontext erstellt.

  - Wenn `greetUser("Mike")` erreicht wird, wird ein Kontext für die `greetUser()`-Funktion erstellt; dieser Ausführungskontext wird auf den Ausführungskontextstapel geschoben.

    - Wenn `greetUser()` die `localGreeting()`-Funktion aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. Die Programmausführung wird mit dem nächsten Kontext auf dem Stapel fortgesetzt, was `greetUser()` ist; diese Funktion wird dort fortgesetzt, wo sie aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

  - Wenn `greetUser("Teresa")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel geschoben.

    - Wenn `greetUser()` die `localGreeting()`-Funktion aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört. `greetUser()` wird dort fortgesetzt, wo es aufgehört hat.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

  - Wenn `greetUser("Veronica")` erreicht wird, wird ein Kontext dafür erstellt und auf den Stapel geschoben.

    - Wenn `greetUser()` die `localGreeting()`-Funktion aufruft, wird ein weiterer Kontext erstellt, um diese Funktion auszuführen. Wenn diese Funktion zurückkehrt, wird der Kontext für `localGreeting()` aus dem Ausführungsstapel entfernt und zerstört.
    - Die `greetUser()`-Funktion gibt zurück und ihr Kontext wird aus dem Stapel entfernt und zerstört.

- Das Hauptprogramm beendet sich und sein Ausführungskontext wird aus dem Ausführungskontextstapel entfernt; da keine Kontexte mehr im Stapel vorhanden sind, endet die Programmausführung.

Durch die Verwendung von Ausführungskontexten auf diese Weise kann jedes Programm und jede Funktion ihren eigenen Satz von Variablen und anderen Objekten haben. Jeder Kontext verfolgt außerdem die nächste Zeile im Programm, die ausgeführt werden sollte, sowie andere für den Betrieb dieses Kontexts kritische Informationen. Durch die Verwendung der Kontexte und des Kontextstapels auf diese Weise können viele der Grundlagen der Programmausführung verwaltet werden, einschließlich lokaler und globaler Variablen, Funktionsaufrufe und Rückgaben und so weiter.

Eine besondere Anmerkung zu rekursiven Funktionen—das sind Funktionen, die sich selbst aufrufen, möglicherweise über mehrere Rekursionsebenen hinweg: Jeder rekursive Aufruf der Funktion erstellt einen neuen Ausführungskontext. Dies ermöglicht es der JavaScript-Laufzeit, die Rekursionsebenen und die Rückgabe von Ergebnissen durch diese Rekursion zu verfolgen. Es bedeutet aber auch, dass jedes Mal, wenn eine Funktion rekursiv aufgerufen wird, mehr Speicher benötigt wird, um den neuen Kontext zu erstellen.

## Lauf, JavaScript, lauf

Um JavaScript-Code auszuführen, hält die Laufzeitmaschine einen Satz von **Agents** bereit, in denen JavaScript-Code ausgeführt wird. Jeder Agent besteht aus einem Satz von Ausführungskontexten, dem Ausführungskontextstapel, einem Hauptthread, einem Satz für alle zusätzlichen Threads, die möglicherweise zur Bearbeitung von Workern erstellt werden, einer Aufgabenwarteschlange und einer Microtask-Warteschlange. Abgesehen vom Hauptthread—den einige Browser über mehrere Agents hinweg teilen—ist jede Komponente eines Agents einzigartig für diesen Agenten.

Hier betrachten wir genauer, wie die Laufzeit funktioniert.

### Ereignisschleifen

Jeder Agent wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) gesteuert, die wiederholt durchlaufen wird. Während jeder Iteration führt sie maximal eine anstehende JavaScript-Aufgabe aus, dann alle anstehenden Microtasks und führt schließlich das benötigte Rendering und Zeichnen durch, bevor sie erneut durchläuft.

Der Code Ihrer Website oder App läuft im gleichen **{{Glossary("thread", "Thread")}}** und teilt die gleiche **Ereignisschleife** wie die Benutzerschnittstelle des Webbrowsers selbst. Dies ist der **{{Glossary("main_thread", "Hauptthread")}}**, und neben dem Ausführen des Hauptcodes Ihrer Seite, verwaltet er das Empfangen und Verteilen von Benutzer- und anderen Ereignissen, das Rendern und Zeichnen von Web-Inhalten und so weiter.

Die Ereignisschleife steuert also alles, was im Browser in Bezug auf die Interaktion mit dem Benutzer passiert, aber was für uns hier noch wichtiger ist: Sie ist verantwortlich für die Planung und Ausführung jedes Codestücks, das innerhalb seines Threads läuft.

Es gibt drei Typen von Ereignisschleifen:

- Fenster-Ereignisschleife
  - : Die Fenster-Ereignisschleife ist diejenige, die alle Fenster mit ähnlichem Ursprung steuert (obwohl es dazu weitere Einschränkungen gibt, die unten beschrieben werden).
- Worker-Ereignisschleife
  - : Eine Worker-Ereignisschleife ist eine, die einen Worker steuert; dies umfasst alle Arten von Workern, einschließlich grundlegender [Web-Worker](/de/docs/Web/API/Web_Workers_API), [Shared-Worker](/de/docs/Web/API/SharedWorker) und [Service-Worker](/de/docs/Web/API/Service_Worker_API). Worker werden in einem oder mehreren Agents gehalten, die vom "Haupt"-Code getrennt sind; der Browser kann eine einzelne Ereignisschleife für alle Worker eines bestimmten Typs verwenden oder mehrere Ereignisschleifen zur Verwaltung verwenden.
- Worklet-Ereignisschleife
  - : Eine [Worklet](/de/docs/Web/API/Worklet)-Ereignisschleife ist die Ereignisschleife, die Agents steuert, die den Code für die Worklets eines bestimmten Agenten ausführen. Dazu gehören Worklets des Typs [`Worklet`](/de/docs/Web/API/Worklet) und [`AudioWorklet`](/de/docs/Web/API/AudioWorklet).

Mehrere Fenster, die von derselben {{Glossary("origin", "Herkunft")}} geladen wurden, können in der gleichen Ereignisschleife laufen, wobei jedes Aufgaben in die Ereignisschleife stellt, sodass deren Aufgaben der Reihe nach von dem Prozessor bearbeitet werden. Beachten Sie, dass im Web-Jargon das Wort "Fenster" tatsächlich "Browser-Level-Container, in dem Webinhalt läuft" bedeutet, einschließlich eines tatsächlichen Fensters, eines Tabs oder eines Rahmens.

Es gibt spezifische Umstände, unter denen diese gemeinsame Nutzung einer Ereignisschleife unter Fenstern mit gemeinsamen Ursprung möglich ist, wie zum Beispiel:

- Wenn ein Fenster das andere Fenster geöffnet hat, teilen sie wahrscheinlich eine Ereignisschleife.
- Wenn ein Fenster tatsächlich ein Container innerhalb eines {{HTMLElement("iframe")}} ist, teilt es wahrscheinlich eine Ereignisschleife mit dem Fenster, das es enthält.
- Die Fenster teilen zufällig denselben Prozess in einer Mehrprozess-Webbrowser-Implementierung.

Die spezifischen Details können von Browser zu Browser variieren, abhängig davon, wie sie implementiert sind.

#### Aufgaben vs. Microtasks

Eine **Aufgabe** ist alles, was durch die Standardmechanismen wie das anfängliche Starten eines Skripts, das asynchrone Versenden eines Ereignisses usw. geplant wird. Abgesehen von der Verwendung von Ereignissen können Sie eine Aufgabe mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) in die Warteschlange stellen.

Der Unterschied zwischen der Aufgabenwarteschlange und der Microtask-Warteschlange ist einfach, aber sehr wichtig:

- Wenn eine neue Iteration der Ereignisschleife beginnt, führt die Laufzeit die nächste Aufgabe aus der Aufgabenwarteschlange aus. Weitere Aufgaben und Aufgaben, die nach Beginn der Iteration zur Warteschlange hinzugefügt werden, _werden nicht bis zur nächsten Iteration ausgeführt_.
- Jedes Mal, wenn eine Aufgabe beendet wird und der Ausführungskontextstapel leer ist, werden alle Microtasks in der Microtask-Warteschlange nacheinander ausgeführt. Der Unterschied ist, dass die Ausführung von Microtasks fortgesetzt wird, bis die Warteschlange leer ist—even wenn zwischenzeitlich neue geplant werden. Mit anderen Worten, Microtasks können neue Microtasks in die Warteschlange stellen und diese neuen Microtasks werden ausgeführt, bevor die nächste Aufgabe beginnt, und vor dem Ende der aktuellen Teiliteration der Ereignisschleife.

### Probleme

Da Ihr Code im gleichen Thread läuft, der die gleiche Ereignisschleife wie die Benutzeroberfläche des Browsers verwendet, wird der Browser selbst stehen bleiben, wenn Ihr Code blockiert oder in eine Endlosschleife gerät. Selbst schleppende Leistungen, sei es durch einen Fehler oder aufgrund komplexer Arbeiten, die von Ihrem Code durchgeführt werden, können dazu führen, dass der Benutzer unter einem langsamen Browser leidet.

Wenn mehrere Programme und mehrere Codeobjekte innerhalb dieser Programme gleichzeitig versuchen zu arbeiten, neben einem Browser, der ebenfalls Prozessorzeit benötigt—ganz zu schweigen von der Zeit, um die Seite und seine eigene UI zu rendern und zu zeichnen, Benutzereignisse zu handhaben usw.—dann wird heutzutage alles viel zu schnell verstopft.

### Lösungen

Der Einsatz von [Web-Workern](/de/docs/Web/API/Web_Workers_API), die es dem Hauptskript ermöglichen, andere Skripte in neuen Threads auszuführen, hilft, dieses Problem zu lindern. Eine gut gestaltete Website oder App verwendet Worker, um komplexe oder umfangreiche Operationen auszuführen, während der Hauptthread so wenig Arbeit wie möglich erledigt, abgesehen von der Aktualisierung, Gestaltung und dem Rendern der Webseite.

Dies wird weiter durch den Einsatz von [asynchronem JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) gelindert, wie z.B. {{jsxref("Global_Objects/Promise", "Promisen", "", 1)}}, die es dem Hauptcode ermöglichen, weiterzulaufen, während auf die Ergebnisse einer Anfrage gewartet wird. Allerdings kann Code, der auf einer grundlegenderen Ebene läuft—wie Code, der aus einer Bibliothek oder einem Framework besteht—möglicherweise eine Möglichkeit benötigen, um Code zu einem sicheren Zeitpunkt auf dem Hauptthread auszuführen, unabhängig von den Ergebnissen einer einzelnen Anfrage oder Aufgabe.

Microtasks sind eine weitere Lösung für dieses Problem und bieten einen feineren Grad des Zugriffs, indem sie es ermöglichen, Code vor dem Beginn der nächsten Iteration der Ereignisschleife auszuführen, anstatt darauf zu warten, dass die nächste beginnt.

Die Microtask-Warteschlange gibt es schon eine Weile, wurde aber historisch gesehen nur intern verwendet, um Dinge wie Promises anzutreiben. Die Hinzufügung von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), bietet diese nun Webentwicklern und schafft eine einheitliche Warteschlange für Microtasks, die verwendet wird, wann immer es notwendig ist, die Fähigkeit zu haben, Code sicher zu planen, der ausgeführt wird, wenn keine Ausführungskontexte mehr im JavaScript-Ausführungskontextstapel vorhanden sind. Über mehrere Instanzen und in allen Browsern und JavaScript-Laufzeiten hinweg bedeutet ein standardisierter Warteschlangenmechanismus, dass diese Microtasks zuverlässig in der gleichen Reihenfolge arbeiten werden, was potenziell schwer zu findende Bugs vermeidet.

## Siehe auch

- [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Die Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
