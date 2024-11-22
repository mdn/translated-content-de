---
title: JavaScript-Leistungsoptimierung
slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

Es ist sehr wichtig, zu berücksichtigen, wie Sie JavaScript auf Ihren Websites verwenden und darüber nachzudenken, wie Sie mögliche Leistungsprobleme, die dadurch verursacht werden könnten, mindern können. Während Bilder und Videos über 70 % der für die durchschnittliche Website heruntergeladenen Bytes ausmachen, hat JavaScript Byte für Byte ein größeres Potenzial für negative Leistungsauswirkungen – es kann die Downloadzeiten, die Renderleistung sowie die CPU- und Batterienutzung signifikant beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >Client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Zu lernen, welche Auswirkungen JavaScript auf die Web-Performance hat
        und wie man damit verbundene Probleme mindert oder behebt.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, lautet: "Was muss ich optimieren?" Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die nahezu jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie [die Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten fortgeschrittene [Performance-APIs](/de/docs/Web/API/Performance_API). Die beste Möglichkeit, um anzufangen, ist jedoch, zu lernen, wie man Werkzeuge wie die integrierten Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Werkzeuge](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) nutzt, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Nicht immer benötigt man ein Framework**: Sie sind vielleicht mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) vertraut. Wenn Sie erfahren sind und sich mit der Verwendung dieses Frameworks sicher fühlen und alle bereitgestellten Tools mögen, könnte es Ihr bevorzugtes Werkzeug für die Erstellung der meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine relativ statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework vermutlich nicht. Möglicherweise können Sie das, was Sie benötigen, mit ein paar Zeilen Standard-JavaScript implementieren.
- **Erwägen Sie eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung implementieren wollen. Überlegen Sie jedoch, ob Ihre Benutzer diese zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Nicht genutzten Code entfernen**: Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht genutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen vorsichtig und überlegt sein, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, egal ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung der Downloads, jede nicht genutzte Funktionalität loszuwerden. Bedenken Sie auch, dass Sie oft nur einen kleinen Teil der in einem Framework verfügbaren Funktionalität nutzen werden. Ist es möglich, einen benutzerdefinierten Build des Frameworks zu erstellen, das nur den benötigten Teil enthält?
- **In Betracht ziehen, integrierte Browser-Funktionen zu verwenden**: Möglicherweise können Sie eine bestehende Funktion des Browsers nutzen, anstatt über JavaScript Ihre eigene zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten Ihr JavaScript auch in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun als nur separate externe JavaScript-Dateien zu verwenden.

Anschließend können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minimierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und somit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch verwendet werden, wenn Sie Ihren Code nicht minimieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft aber die Gzip-Komprimierung in der Regel.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) dies besser.

## Umgang mit Parsen und Ausführung

Bevor wir uns die in diesem Abschnitt enthaltenen Tipps ansehen, ist es wichtig zu besprechen, _wo_ im Prozess des Browser-Seiten-Renderings JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Das HTML wird in der Regel zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS angetroffen wird, wird es geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Ressourcen wie Bilder und Web-Schriften, abgerufen zu werden.
3. Wann immer JavaScript angetroffen wird, parst der Browser es, wertet es aus und führt es auf der Seite aus.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element stilisiert werden sollte, abhängig vom darauf angewendeten CSS.
5. Das stilisierte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, gibt Ihnen jedoch eine Vorstellung.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig blockiert das Parsen und Ausführen von JavaScript das Rendern. Das bedeutet, dass der Browser das Parsen von HTML blockiert, das nach der JavaScript-Begegnung erscheint, bis das Skript behandelt wurde. Infolgedessen werden auch Stilisierung und Darstellung blockiert. Daher sollten Sie sorgfältig darüber nachdenken, nicht nur, was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und Ausführens Ihres JavaScripts.

## Laden kritischer Ressourcen so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert zwar, ist aber render-blockierend. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) zur Erstellung eines Preloaders für kritisches JavaScript:

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

Der Preload-{{htmlelement("link")}} ruft das JavaScript so schnell wie möglich ab, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Falle eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, wenn Sie es einfügen; es bedeutet jedoch, dass es früher heruntergeladen wird. Die Render-Blockierungszeit wird zwar verkürzt, aber nicht vollständig entfernt.

## Verschieben der Ausführung von nicht-kritischem JavaScript

Andererseits sollten Sie bestrebt sein, das Parsen und Ausführen von nicht-kritischem JavaScript zu einem späteren Zeitpunkt zu verschieben, wenn es benötigt wird. Alles sofort zu laden, blockiert das Rendering unnötig.

Zunächst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zur DOM-Analyse abgerufen wird, sodass es bereit sein wird, ohne das Rendering zu blockieren.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript ausgeführt wird, nachdem das Dokument analysiert wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten auch einfach das JavaScript gar nicht laden, bis ein Ereignis eintritt, bei dem es benötigt wird. Dies könnte zum Beispiel über DOM-Scripting geschehen:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mit der Funktion {{jsxref("operators/import", "import()")}} geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Lange Aufgaben aufteilen

Wenn der Browser Ihr JavaScript ausführt, wird das Skript in Aufgaben organisiert, die nacheinander ausgeführt werden, wie das Abrufen von Ressourcen, die Steuerung von Benutzerinteraktionen und Eingaben über Ereignishandler, das Ausführen von JavaScript-gesteuerten Animationen und so weiter.

Der Großteil davon geschieht im Haupt-Thread, mit Ausnahmen einschließlich JavaScript, das in [Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Haupt-Thread kann immer nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren oder eine wichtige Benutzeroberflächenaktualisierung während einer langen Aufgabe benötigt wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Reaktion oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder nicht reagierend erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Gelegenheiten, wichtige Aufgaben der Benutzerinteraktion oder UI-Rendering-Updates durchzuführen — der Browser kann dies möglicherweise zwischen jeder kleineren Aufgabe tun, anstatt nur davor oder danach mit der langen Aufgabe fertig zu werden. In Ihrem JavaScript könnten Sie dies erreichen, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, z. B. für einfachere Wartung, Debugging und das Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Haupt-Threads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als einzelne lange Aufgabe aus.

Um dies zu bewältigen, tendieren wir dazu, eine "Yield"-Funktion periodisch auszuführen, um den Code _an den Haupt-Thread zu übergeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit hat, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um nach jeder gelaufenen Aufgabe an den Haupt-Thread weiterzugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) dort verwenden, wo es verfügbar ist, damit dieser Code vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt werden kann:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen schneller erscheinen lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (z. B. Lade-Spinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungsleistung, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag zu Animationen lautet, weniger Animationen zu verwenden – schneiden Sie jede nicht essentielle Animation aus oder geben Sie Ihren Benutzern eine Option, um Animationen auszuschalten, beispielsweise wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Batteriekapazität verwenden.

Für essentielle DOM-Animationen sollten Sie, wo möglich, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle von JavaScript-Animationen verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt auf CSS-Animationen mit JavaScript zuzugreifen). Den Browser direkt für DOM-Animationen zu verwenden, anstatt inline Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript bearbeitet werden können, zum Beispiel das Animieren eines HTML-{{htmlelement("canvas")}}, sollten Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden. Die Methode `requestAnimationFrame()` ist speziell dafür ausgelegt, Animationsframes effizient und konsistent zu handhaben, für eine flüssige Benutzererfahrung. Das Grundmuster sieht folgendermaßen aus:

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

Sie finden eine schöne Einführung zu Canvas-Animationen unter [Grafiken zeichnen > Animationen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations) und ein ausführlicheres Beispiel bei [Objektbauübung](/de/docs/Learn/JavaScript/Objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer sein, um sie zu verfolgen und zu handhaben, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch innerhalb eines bestimmten Bereichs der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sie könnten ein `<canvas>`-Spiel auf Ihrer Seite betreiben. Solange sich die Maus innerhalb des Canvas befindet, möchten Sie kontinuierlich Mausbewegungen und Cursorpositionen überprüfen und den Spielstatus aktualisieren – einschließlich des Spielsstands, der Zeit, der Position aller Sprites, der Kollisionserkennungsinformationen usw. Sobald das Spiel vorbei ist, brauchen Sie das alles nicht mehr zu tun, und in der Tat wäre es eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu hören.

Es ist daher eine gute Idee, nicht mehr benötigte Ereignis-Listener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist die Verwendung von Ereignisdelegation, wo immer möglich. Wenn Sie einen Code haben, der auf die Interaktion eines Benutzers mit einem von vielen Kinderelementen reagieren soll, können Sie einen Ereignis-Listener auf deren Eltern setzen. Ereignisse, die an einem Kind-Element ausgelöst werden, steigen zum Eltern-Element auf, so dass Sie den Ereignis-Listener nicht an jedem Kind einzeln setzen müssen. Weniger Ereignis-Listener, die verfolgt werden müssen, bedeuten bessere Leistung.

Siehe [Ereignisdelegation](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation) für mehr Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter laufen lassen.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff auf und die Aktualisierung des DOM ist rechnerisch teuer, daher sollten Sie die Menge, die Ihr JavaScript tut, minimieren, insbesondere wenn Sie ständige DOM-Animationen durchführen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Bündeln Sie DOM-Änderungen**: Für wesentliche DOM-Änderungen sollten Sie diese in Gruppen bündeln, die zusammen durchgeführt werden, anstatt jede einzelne Änderung bei ihrem Auftreten auszuführen. Dies kann die Menge der Arbeit, die der Browser tatsächlich leistet, reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche glatter erscheinen lassen, mehrere Updates auf einmal abzuschließen, anstatt ständig kleine Updates vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie einen großen Block von HTML zur Seite hinzufügen müssen, bauen Sie das gesamte Fragment zunächst vollständig auf (normalerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen Sie es dann in einem Zug dem DOM hinzu, anstatt jeden Punkt einzeln hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript abgerufen und manipuliert werden. Denken Sie sorgfältig darüber nach, was Ihre Benutzeroberfläche braucht, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Code, der in Schleifen läuft**: Schleifen sind teuer, also sollten Sie die Schleifennutzung in Ihrem Code, wo immer möglich, reduzieren. In Fällen, wo Schleifen unvermeidlich sind:

  - Vermeiden Sie das Ausführen der vollständigen Schleife, wenn es nicht notwendig ist, unter Verwendung von {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen, wie angebracht. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife verlassen, sobald der Name gefunden wurde; es gibt keinen Grund, weitere Schleifen-Iterationen auszuführen:

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

  - Führen Sie die Arbeit, die nur einmal benötigt wird, außerhalb der Schleife aus. Das mag offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie den folgenden Code-Schnipsel, der ein JSON-Objekt abruft, das Daten zur Verarbeitung auf irgendeine Weise enthält. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Haupt-Threads aus**: Weiter oben sprachen wir darüber, wie JavaScript Aufgaben normalerweise im Haupt-Thread ausführt und wie lange Vorgänge den Haupt-Thread blockieren können, was zu einer schlechten UI-Performance führen kann. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben unterteilt werden können, was dieses Problem mildert. Eine andere Möglichkeit, dieses Problem zu lösen, besteht darin, Aufgaben komplett vom Haupt-Thread zu verlagern. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing) ist im Grunde JavaScript, das den Haupt-Thread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zur Webkamera eines Benutzers zu bearbeiten. Da diese Operationen lange dauern könnten, wäre es schlecht, einfach den Haupt-Thread zu blockieren, während wir warten, dass sie abgeschlossen werden. Stattdessen führt der Browser diese Funktionen aus, lässt den Haupt-Thread weiter nachfolgenden Code ausführen, und diese Funktionen liefern die Ergebnisse zurück, sobald sie _zu einem späteren Zeitpunkt_ verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einer JavaScript-Sprachfunktion, die für den Umgang mit asynchronen Operationen entwickelt wurde. Es ist möglich, [eigene Funktionen auf Promise-Basis zu schreiben](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), wenn Sie Funktionalität haben, die davon profitieren würde, asynchron zu laufen.
  - Führen Sie Berechnungen in Web-Arbeitern aus: [Webarbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen ermöglicht, einen separaten Thread zu eröffnen, um ein Stück JavaScript auszuführen, damit es den Haupt-Thread nicht blockiert. Webarbeiter haben einige wichtige Einschränkungen, die größte ist, dass Sie kein DOM-Scripting innerhalb eines Web-Arbeiters durchführen können. Sie können jedoch die meisten anderen Dinge tun, und Web-Arbeiter können Nachrichten senden und empfangen, um sich mit dem Haupt-Thread auszutauschen. Der Hauptanwendungsfall für Webarbeiter ist, wenn Sie viele Berechnungen durchführen müssen und nicht möchten, dass sie den Haupt-Thread blockieren. Führen Sie diese Berechnungen in einem Web-Arbeiter durch, warten Sie auf das Ergebnis und senden Sie es zurück an den Haupt-Thread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems für die Durchführung von Hochleistungsberechnungen zu verwenden und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch noch bessere Leistungsverbesserungen bieten als Web-Arbeiter.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
