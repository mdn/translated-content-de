---
title: JavaScript-Leistungsoptimierung
slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

Es ist sehr wichtig, zu überlegen, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie eventuelle Leistungsprobleme, die dadurch verursacht werden könnten, mindern können. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript pro Byte ein größeres Potenzial für negative Leistungseinflüsse – es kann die Downloadzeiten, die Renderleistung sowie die CPU- und Batterienutzung erheblich beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Installierte Basissoftware</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Um mehr über die Auswirkungen von JavaScript auf die Web-Performance zu erfahren und wie man verwandte Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, lautet: „Was muss ich optimieren?“. Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die für fast jedes Webprojekt von Vorteil sind, während andere nur in bestimmten Situationen benötigt werden. Zu versuchen, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, um die Leistung zu messen, einige davon unter Verwendung von ausgeklügelten [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Einstieg ist jedoch, zu lernen, wie man Tools wie die integrierten Browser- [Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile des Seitenlayouts lange dauern und optimiert werden müssen.

## JavaScript-Downloads optimieren

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie brauchen nicht immer ein Framework**: Sie sind möglicherweise mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) vertraut. Wenn Sie erfahren und zuversichtlich im Umgang mit diesem Framework sind und alle von ihm bereitgestellten Tools mögen, dann könnte es Ihr bevorzugtes Werkzeug für die meisten Projekte sein. Rahmenwerke sind jedoch JavaScript-lastig. Wenn Sie eine ziemlich statische Erfahrung mit wenigen JavaScript-Anforderungen schaffen, brauchen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das, was Sie benötigen, mit einigen Zeilen Standard-JavaScript implementieren.
- **Überlegen Sie sich eine einfachere Lösung**: Sie haben möglicherweise eine auffällige, interessante Lösung zu implementieren, aber überlegen Sie, ob Ihre Benutzer diese zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Nicht genutzten Code entfernen:** Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht genutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen sorgfältig und überlegt darüber sein, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, unabhängig davon, ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung von Downloads, jede unnötige Funktionalität zu entfernen. Beachten Sie auch, dass Sie in einem Framework oft nur einen kleinen Teil der verfügbaren Funktionalität verwenden. Ist es möglich, eine benutzerdefinierte Version des Frameworks zu erstellen, die nur den benötigten Teil enthält?
- **Verwenden Sie eingebaute Browserfunktionen**: Möglicherweise können Sie eine Funktion des Browsers verwenden, anstatt Ihre eigene mit JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie die [eingebaute client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen dies effizienter als die einfache Verwendung separater externer JavaScript-Dateien.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifikation")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft die Gzip-Komprimierung jedoch allgemein.

Sie können Ihren Code manuell aufteilen und optimieren, jedoch wird dies häufig durch einen Modulpaketierer wie [Webpack](https://webpack.js.org/) besser erledigt.

## Umgang mit Parsing und Ausführung

Bevor wir die in diesem Abschnitt enthaltenen Tipps betrachten, ist es wichtig, über _wo_ im Prozess des Browserseite-Renderings JavaScript behandelt wird, zu sprechen. Wenn eine Webseite geladen wird:

1. Wird das HTML im Allgemeinen zuerst in der Reihenfolge geparst, in der es auf der Seite erscheint.
2. Wann immer CSS auftritt, wird es geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Assets wie Bilder und Webschriften abgerufen zu werden.
3. Wann immer JavaScript auftritt, wird es vom Browser geparst, evaluiert und gegen die Seite ausgeführt.
4. Etwas später berechnet der Browser, wie jedes HTML-Element gestylt werden soll, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der Schlüsselabschnitt hier ist Schritt 3. Standardmäßig sind das Parsen und die Ausführung von JavaScript renderblockierend. Das bedeutet, dass der Browser das Parsen jedes HTMLs, das nach dem JavaScript auftritt, blockiert, bis das Skript behandelt wurde. Dadurch werden auch das Styling und das Rendern blockiert. Das bedeutet, dass Sie sorgfältig darüber nachdenken müssen, was Sie herunterladen und wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsings und der Ausführung Ihrer JavaScripts.

## Kritische Assets so schnell wie möglich laden

Wenn ein Skript wirklich wichtig ist und Sie besorgt sind, dass es die Leistung beeinträchtigt, indem es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert gut, ist jedoch renderblockierend. Eine bessere Strategie ist, [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) zu verwenden, um einen Preloader für kritisches JavaScript zu erstellen:

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

Das Preload-{{htmlelement("link")}} ruft das JavaScript so schnell wie möglich ab, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder in Ihrem Skript im Fall eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, bis Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die gelegentliche Sperrzeit wird immer noch verkürzt, auch wenn sie nicht vollständig beseitigt wird.

## Ausführung nicht-kritischen JavaScripts verzögern

Andererseits sollten Sie darauf abzielen, das Parsen und die Ausführung von nicht-kritischem JavaScript auf später zu verschieben, wenn es gebraucht wird. Es alles sofort zu laden, blockiert das Rendering unnötigerweise.

Zunächst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript ausgeführt wird, nachdem das Dokument geparst wurde, jedoch bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event ausgelöst wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten auch einfach das JavaScript überhaupt nicht laden, bis ein Ereignis auftritt, bei dem es gebraucht wird. Dies könnte durch DOM-Scripting geschehen, zum Beispiel:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mithilfe der Funktion {{jsxref("operators/import", "import()")}} geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Lange Aufgaben aufteilen

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, etwa das Absetzen von Fetch-Anfragen, Benutzerinteraktionen und Eingaben über Event-Handler, JavaScript-gesteuerte Animationen und so weiter.

Die meisten davon geschehen im Hauptthread, mit Ausnahmen, die JavaScript betreffen, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Hauptthread kann nur eine Aufgabe zur gleichen Zeit ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, um ausgeführt zu werden, wird sie als lange Aufgabe eingestuft. Wenn der Benutzer versucht, mit der Seite zu interagieren oder eine wichtige UI-Aktualisierung während einer langen Aufgabe angefordert wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Reaktion oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder nicht reaktionsfähig erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Chancen, wichtige Benutzerinteraktionsverarbeitungen oder UI-Rende-Aktualisierungen auszuführen – der Browser kann sie möglicherweise zwischen jede kleinere Aufgabe einfügen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies durch das Aufteilen Ihres Codes in separate Funktionen tun. Dies macht auch aus mehreren anderen Gründen Sinn, wie z. B. leichtere Wartung, Debugging und Testschreiben.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als einzige lange Aufgabe aus.

Um dies zu behandeln, neigen wir dazu, eine "yield"-Funktion periodisch auszuführen, um den Code dazu zu bringen, _zum Hauptthread zu yielden_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Gelegenheit hat, hoch priorisierte Aufgaben wie das Aktualisieren der UI zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um nach jeder ausgeführten Aufgabe zum Hauptthread zu yielden:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu ermöglichen, weiterhin vor anderen weniger kritischen Aufgaben in der Warteschlange ausgeführt zu werden:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Oberflächen reaktionsschneller erscheinen lassen und Benutzern das Gefühl vermitteln, dass Fortschritte erzielt werden, während sie auf das Laden einer Seite warten (z. B. Lade-Spinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Verarbeitungskapazität, was die Leistung beeinträchtigen kann.

Der offensichtlichste Rat zu Animationen ist, weniger Animationen zu verwenden – entfernen Sie alle nicht wesentlichen Animationen oder geben Sie Ihren Benutzern eine Präferenz, die sie einstellen können, um Animationen auszuschalten, z. B. wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Batterieleistung verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt mit CSS-Animationen über JavaScript zu interagieren). Die Verwendung des Browsers zur direkten Durchführung von DOM-Animationen anstelle der Manipulation von Inline-Stilen mit JavaScript ist wesentlich schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript behandelt werden können, z. B. das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell darauf ausgelegt, Animationsrahmen effizient und konsistent zu handhaben, um ein reibungsloses Benutzererlebnis zu gewährleisten. Das grundlegende Muster sieht so aus:

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

Sie finden eine schöne Einführung zu Canvas-Animationen unter [Grafiken zeichnen > Animationen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations) und ein ausführlicheres Beispiel unter [Objekterstellungsübung](/de/docs/Learn/JavaScript/Objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie auch unter [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer zu verfolgen und zu handhaben sein, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob es sich noch innerhalb eines bestimmten Bereichs der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie in Ihrer Seite ein `<canvas>`-Spiel aus. Solange sich die Maus innerhalb des Canvas befindet, möchten Sie ständig die Mausbewegung und die Cursorposition überprüfen und den Spielzustand aktualisieren – einschließlich des Punktestands, der Zeit, der Position aller Sprites, der Kollisionserkennungsinformationen usw. Sobald das Spiel vorbei ist, müssen Sie all das nicht mehr tun, und tatsächlich wäre es eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu hören.

Es ist daher eine gute Idee, nicht mehr benötigte Ereignislistener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, Ereignisdelegierung wo immer möglich zu verwenden. Wenn Sie Code haben, der in Reaktion auf eine Benutzerinteraktion mit einem von vielen Kindelementen ausgeführt werden soll, können Sie einen Ereignislistener auf ihrem Elternteil einrichten. Ereignisse, die auf einem Kindelement ausgelöst werden, werden zu ihrem Elternteil hoch gebubbelt, sodass Sie den Ereignislistener nicht auf jedem Kind einzeln einrichten müssen. Weniger zu verfolgende Ereignislistener bedeuten eine bessere Leistung.

Weitere Details und ein nützliches Beispiel finden Sie unter [Ereignisdelegierung](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation).

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter laufen lassen.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff auf und das Aktualisieren des DOM ist rechnerisch teuer, daher sollten Sie die Menge, die Ihr JavaScript tut, minimieren, insbesondere bei der Durchführung von ständigen DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Bündeln Sie DOM-Änderungen**: Für wesentliche DOM-Änderungen sollten Sie diese in Gruppen zusammenfassen, die gemeinsam durchgeführt werden, anstatt jede einzelne Änderung auszuführen, wenn sie auftritt. Dies kann die reale Arbeitslast des Browsers reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche glatter erscheinen lassen, mehrere Aktualisierungen in einem Rutsch abzuwickeln, anstatt ständig kleine Aktualisierungen vorzunehmen. Ein nützlicher Tipp hier ist – wenn Sie ein großes HTML-Fragment zur Seite hinzufügen möchten, bauen Sie das gesamte Fragment zuerst (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen Sie es dann in einem Rutsch an das DOM an, anstatt jedes Element separat anzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind teuer, daher reduzieren Sie die Schleifennutzung in Ihrem Code, wo immer möglich. In Fällen, in denen Schleifen unvermeidlich sind:

  - Vermeiden Sie das Ausführen der vollständigen Schleife, wenn es unnötig ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden wurde; es gibt keine Notwendigkeit, weitere Schleifeniterationenzu durchlaufen:

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

  - Arbeiten, die nur einmal erforderlich sind, außerhalb der Schleife platzieren. Dies mag offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die verarbeitet werden sollen. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation in jeder Schleifeniteration durchgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Rechnungen außerhalb des Hauptthreads ausführen**: Frühere haben wir über den allgemeinen Ablauf, dass JavaScript Aufgaben im Hauptthread verarbeitet, und wie lange Operationen den Hauptthread blockieren können, gesprochen. Wir haben auch gezeigt, wie man lange Aufgaben in kleinere aufteilen kann, um dieses Problem zu mindern. Eine weitere Möglichkeit, diese Probleme anzugehen, besteht darin, Aufgaben ganz aus dem Hauptthread zu verlagern. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing) ist im Wesentlichen JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Operationen zu handhaben wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zu einer Webcam des Benutzers. Weil diese Vorgänge lange dauern könnten, wäre es schlecht, einfach den Hauptthread zu blockieren, während auf ihre Vollendung gewartet wird. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread für nachfolgenden Code am Laufen und diese Funktionen geben Ergebnisse zurück, sobald sie verfügbar sind, _zu einem zukünftigen Zeitpunkt_. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einem JavaScript-Sprachmerkmal, das für die Behandlung asynchroner Operationen entwickelt wurde. Es ist möglich, [eigene auf Promises basierende Funktionen zu schreiben](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), wenn Sie eine Funktionalität haben, die vom asynchronen Ablauf profitieren würde.
  - Rechnungen in Web Workern ausführen: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen erlaubt, einen separaten Thread zum Ausführen eines JavaScript-Blocks zu öffnen, sodass er den Hauptthread nicht blockiert. Worker haben einige große Einschränkungen, die größte davon ist, dass Sie kein DOM-Scripting innerhalb eines Workers tun können. Sie können die meisten anderen Dinge ausführen und Worker können Nachrichten an den Hauptthread senden und von ihm empfangen. Der Hauptanwendungsfall für Worker besteht darin, wenn Sie viele Berechnungen durchführen müssen und nicht möchten, dass sie den Hauptthread blockieren. Führen Sie diese Berechnungen in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es zurück an den Hauptthread, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die Webentwicklern ermöglicht, die zugrundeliegende GPU (Graphics Processing Unit) des Systems zu verwenden, um hochperformante Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch noch bessere Leistungsgewinne als Web Worker bieten.

## Weitere Informationen

- [Optimieren Sie lange Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
