---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, darüber nachzudenken, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie eventuelle Leistungsprobleme minimieren können. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript, Byte für Byte, ein größeres Potenzial für negative Auswirkungen auf die Leistung — es kann die Download-Zeiten, die Rendering-Leistung sowie die CPU- und Batterienutzung erheblich beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Um über die Auswirkungen von JavaScript auf die Webleistung zu lernen
        und wie man verwandte Probleme mildert oder behebt.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, ist "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich nicht notwendig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der obige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige beinhalten anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Werkzeuge wie eingebaute [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Tools des Browsers verwendet, um zu sehen, welche Teile des Seitenladeprozesses viel Zeit in Anspruch nehmen und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste und am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Möglicherweise sind Sie mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie erfahren und sicher im Umgang mit diesem Framework sind und alle Tools mögen, die es bietet, könnte es Ihr bevorzugtes Werkzeug für die meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine recht statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie wahrscheinlich dieses Framework nicht. Möglicherweise können Sie das, was Sie benötigen, mit nur wenigen Zeilen Standard-JavaScript implementieren.
- **Überlegen Sie sich eine einfachere Lösung**: Möglicherweise haben Sie eine auffällige, interessante Lösung zur Implementierung, aber überlegen Sie, ob Ihre Benutzer sie zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionen, die während des Entwicklungsprozesses hinzugefügt wurden, zu bereinigen. Sie müssen vorsichtig und überlegt sein, was hinzugefügt und entfernt wird. Alle Skripte werden analysiert, ob sie verwendet werden oder nicht. Daher wäre es ein schneller Gewinn, ungenutzte Funktionen zu entfernen, um die Downloads zu beschleunigen. Bedenken Sie auch, dass Sie oft nur einen kleinen Teil der Funktionen in einem Framework nutzen. Ist es möglich, einen benutzerdefinierten Build des Frameworks zu erstellen, der nur die benötigten Teile enthält?
- **Berücksichtigen Sie integrierte Browser-Funktionen**: Möglicherweise können Sie eine Funktion verwenden, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Beispielsweise:
  - Verwenden Sie die [eingebaute Formularvalidierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun, als nur separate externe JavaScript-Dateien zu verwenden.

Anschließend können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifikation")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzippen")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch in der Regel die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modulpaket wie [webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsen und Ausführung

Bevor Sie sich die in diesem Abschnitt enthaltenen Tipps ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browser-Seitenrenderings JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Das HTML wird in der Regel zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS auftritt, wird es analysiert, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Webfonts abgerufen zu werden.
3. Wann immer JavaScript auftritt, wird es von dem Browser analysiert, ausgewertet und auf die Seite angewendet.
4. Etwas später wird ermittelt, wie jedes HTML-Element gestylt werden soll, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm angezeigt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es liefert Ihnen eine Vorstellung.

Der Schlüsselpunkt hier ist Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung render-blockierend. Das bedeutet, dass der Browser das Parsen von HTML, das nach dem JavaScript erscheint, stoppt, bis das Skript verarbeitet wurde. Infolgedessen werden auch Styling und Malen blockiert. Das bedeutet, dass Sie nicht nur sorgfältig darüber nachdenken müssen, was Sie herunterladen, sondern auch, wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Laden kritischer Ressourcen so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass seine nicht schnelle genug Laden die Leistung beeinflusst, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Das funktioniert gut, ist aber render-blockierend. Eine bessere Strategie ist es, [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) zu verwenden, um einen Preloader für kritisches JavaScript zu erstellen:

```html
<head>
  ...
  <!-- Preload a JavaScript file -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- Preload a JavaScript module -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

Der Preload-{{htmlelement("link")}} holt das JavaScript so schnell wie möglich, ohne das Rendering zu blockieren. Anschließend können Sie es überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skriptes, im Fall eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, bevor Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Render-blockierende Zeit wird dennoch verkürzt, auch wenn nicht vollständig entfernt.

## Verzögerung der Ausführung von nicht-kritischem JavaScript

Andererseits sollten Sie das Parsen und die Ausführung von nicht-kritischem JavaScript möglichst bis zu einem späteren Zeitpunkt aufschieben, wenn es benötigt wird. Es gleich zu Beginn zu laden, blockiert unnötigerweise das Rendering.

Zunächst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Das bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es zur gleichen Zeit einsatzbereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten auch einfach das JavaScript überhaupt nicht laden, bis ein Ereignis auftritt, wenn es benötigt wird. Dies könnte über DOM-Scripting erledigt werden, zum Beispiel:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mit der {{jsxref("operators/import", "import()")}}-Funktion geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Aufteilen von langen Aufgaben

Wenn der Browser Ihr JavaScript ausführt, wird es in Aufgaben strukturiert, die nacheinander ausgeführt werden, z. B. das Abrufen von Daten, das Verarbeiten von Benutzereingaben über Ereignishandler, das Ausführen von JavaScript-gesteuerten Animationen und so weiter.

Das meiste davon läuft auf dem Haupt-Thread, mit Ausnahmen einschließlich JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Haupt-Thread kann jeweils nur eine Aufgabe ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer während einer langen Aufgabe versucht, mit der Seite zu interagieren oder ein wichtiger UI-Update angefordert wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelles Update wird verzögert, wodurch die Benutzeroberfläche träge oder nicht reagierend erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Chancen, wichtige Nutzerinteraktionen oder UI-Rendering-Updates durchzuführen — der Browser kann sie möglicherweise zwischen jede kleinere Aufgabe legen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Das macht auch aus mehreren anderen Gründen Sinn, wie z.B. einfachere Wartung, Debugging und das Schreiben von Tests.

Zum Beispiel:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

Eine solche Struktur hilft jedoch nicht bei der Haupt-Thread-Blockierung. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, läuft der Browser sie alle als eine einzelne lange Aufgabe.

Um dies zu bewältigen, führen wir regelmäßig eine "yield"-Funktion aus, um den Code dazu zu bringen, _an den Haupt-Thread_ abzugeben. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit hat, hochpriorisierte Aufgaben wie das Aktualisieren des Benutzeroberfläch anzeigen anzunehmen. Ein verbreitetes Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster verwendet werden, um nach jeder Aufgabe an den Haupt-Thread abzugeben:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yield();
  }
}
```

Um dies weiter zu verbessern, können wir, wo verfügbar, [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, um diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter auszuführen:

```js
function yield() {
  // Use scheduler.yield() if available
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // Fall back to setTimeout:
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## Umgang mit JavaScript-Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsschneller wirken lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während eine Seite geladen wird (z.B. Ladekreise). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlicherweise mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der offensichtlichste animationstechnische Ratschlag ist die Verwendung von weniger Animationen — entferne nicht essentielle Animationen oder erwäge, Ihren Benutzern eine Option zu geben, Animationen abzuschalten, insbesondere wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit eingeschränkter Akkulaufzeit verwenden.

Für essentielle DOM-Animationen sollten Sie nach Möglichkeit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) verwenden, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Es ist viel schneller und effizienter, den Browser direkt DOM-Animationen durchführen zu lassen, anstatt mit JavaScript Inline-Stile zu manipulieren. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, z.B. das Animieren eines HTML {{htmlelement("canvas")}}, sollten Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden. Die `requestAnimationFrame()`-Methode wurde speziell für die effiziente und konsistente Handhabung von Animationsbildern entwickelt, um ein reibungsloses Benutzererlebnis zu gewährleisten. Das grundlegende Muster sieht so aus:

```js
function loop() {
  // Clear the canvas before drawing the next frame of the animation
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // Draw objects on the canvas and update their positioning data
  // ready for the next frame
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // Call requestAnimationFrame to run the loop() function again
  // at the right time to keep the animation smooth
  requestAnimationFrame(loop);
}

// Call the loop() function once to set the animation running
loop();
```

Eine schöne Einführung in Canvas-Animationen finden Sie unter [Zeichnen von Grafiken > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations), und ein ausführlicheres Beispiel unter [Objektbaupraxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie unter [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer in der Verfolgung und Handhabung sein, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Solange sich die Maus im Canvas befindet, möchten Sie ständig Mausbewegungen und den Cursor positionieren und den Spielzustand aktualisieren — einschließlich der Punkte, der Zeit, der Position aller Sprites, der Kollisionserkennungsinformationen usw. Sobald das Spiel vorbei ist, werden Sie dies alles nicht mehr benötigen, und in der Tat wäre es eine Verschwendung von Rechenleistung, weiterhin dieses Ereignis zu behandeln.

Es ist daher eine gute Idee, Ereignislistener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist die Verwendung der Ereignisdelegierung, wo immer möglich. Wenn Sie einige Codezeilen haben, die als Antwort auf eine Benutzerinteraktion mit einem von vielen untergeordneten Elementen ausgeführt werden sollen, können Sie einen Ereignislistener auf deren übergeordnetem Element festlegen. Ereignisse, die auf einem untergeordneten Element ausgelöst werden, werden an ihren Eltern übermittelt, sodass Sie den Ereignislistener nicht auf jedem untergeordneten Element einzeln festlegen müssen. Weniger Ereignislistener zu verfolgen bedeutet bessere Leistung.

Siehe [Ereignisdelegierung](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein hilfreiches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine bewährte Praktiken, die dazu führen, dass Ihr Code effizienter läuft.

- **Reduzieren Sie die DOM-Manipulation**: Das Zugreifen und Aktualisieren des DOM ist rechenintensiv, daher sollten Sie minimieren, was Ihr JavaScript tut, insbesondere wenn Sie ständig DOM-Animation ausführen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Gruppierung von DOM-Änderungen**: Für notwendige DOM-Änderungen sollten Sie diese in Gruppen zusammenführen, die zusammen ausgeführt werden, anstatt jede Änderung einzeln auszuführen, sobald sie auftritt. Dies kann die Menge der tatsächlichen Arbeit, die der Browser leistet, reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche glatter aussehen lassen, wenn mehrere Updates auf einmal erledigt werden, anstatt ständig kleine Updates auszuführen. Ein nützlicher Tipp hier ist — wenn Sie einen großen HTML-Block zur Seite hinzufügen möchten, bauen Sie das gesamte Fragment zuerst (in der Regel innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen es dann alles auf einmal dem DOM hinzu, anstatt jedes Element einzeln hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge des wiederholenden Codes**: Schleifen sind teuer, also reduzieren Sie den Schleifeneinsatz in Ihrem Code, wo immer möglich. In Fällen, in denen Schleifen unvermeidbar sind:

  - Vermeiden Sie das Ausführen der gesamten Schleife, wenn es nicht notwendig ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden, soweit zutreffend. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife verlassen, sobald der Name gefunden wurde; es besteht keine Notwendigkeit, weitere Schleifeniterationen auszuführen:

    ```js
    function processGroup(array) {
      const toFind = "Bob";
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === toFind) {
          processMatchingArray(array);
          break;
        }
      }
    }
    ```

  - Arbeiten, die nur einmal erforderlich sind, sollten außerhalb der Schleife durchgeführt werden. Dies mag offensichtlich klingen, aber es ist leicht zu übersehen. Betrachten Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die auf irgendeine Weise verarbeitet werden sollen. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Der Abruf, der nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass er nur einmal ausgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Ausführung außerhalb des Haupt-Threads**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben auf dem Haupt-Thread ausführt, und wie lange Operationen den Haupt-Thread blockieren können, was zu schlechter UI-Leistung führt. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben aufgeteilt werden können, um dieses Problem zu mildern. Eine weitere Möglichkeit, solche Probleme zu behandeln, besteht darin, Aufgaben vollständig vom Haupt-Thread zu verschieben. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde JavaScript, das den Haupt-Thread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk auszuführen, auf eine Datei im lokalen Dateisystem zuzugreifen oder einen Stream auf die Kamera eines Benutzers zu öffnen. Da diese Operationen lange dauern können, wäre es schlecht, einfach den Haupt-Thread zu blockieren, während wir auf ihre Fertigstellung warten. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptqaad running, and those functions will return results once they are available _at some point in the future_. Modern asynchronous APIs are {{jsxref("Promise")}}-based, which is a JavaScript language feature designed for handling asynchronous operations. It is possible to [write your own Promise-based functions](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) if you have functionality that would benefit from being run asynchronously.
  - Führen Sie Berechnungen in Web-Workern aus: [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, mit dem Sie einen separaten Thread öffnen können, um ein Stück JavaScript darin auszuführen, sodass es den Haupt-Thread nicht blockiert. Worker haben einige große Einschränkungen, die größte ist, dass Sie kein DOM-Scripting in einem Worker ausführen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten an den Haupt-Thread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viele Berechnungen durchführen müssen und nicht möchten, dass der Haupt-Thread blockiert wird. Führen Sie diese Berechnungen in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es zurück an den Haupt-Thread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, das GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um hochleistungsfähige Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser angezeigt werden können. Es ist ziemlich komplex, aber es kann noch größere Leistungsverbesserungen als Web-Worker bieten.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
