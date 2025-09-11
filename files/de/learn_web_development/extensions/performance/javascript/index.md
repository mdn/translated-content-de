---
title: JavaScript Performance-Optimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 7ce9e2d83db83b211a902cff080a9ef1b85252c6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, darüber nachzudenken, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie eventuelle Leistungsprobleme, die dadurch verursacht werden könnten, mindern können. Während Bilder und Videos über 70 % der heruntergeladenen Bytes auf der durchschnittlichen Website ausmachen, hat JavaScript, Byte für Byte, ein höheres Potenzial für negative Leistungsauswirkungen — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Erfahren, welchen Einfluss JavaScript auf die Web-Performance hat
        und wie man damit verbundene Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, lautet: "Was muss ich optimieren?". Einige der nachstehend behandelten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Performance Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorhergehende Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Performance zu messen, einige erfordern anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um loszulegen, ist jedoch, zu lernen, wie man Werkzeuge wie die eingebauten [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge in Browsern verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Sie sind möglicherweise vertraut mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries). Wenn Sie erfahren und sicher im Umgang mit diesem Framework sind und alle damit verbundenen Tools mögen, könnte es Ihr bevorzugtes Werkzeug zum Erstellen der meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine ziemlich statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie wahrscheinlich kein Framework. Möglicherweise können Sie das, was Sie benötigen, mit wenigen Zeilen Standard-JavaScript implementieren.
- **Erwägen Sie eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung implementieren, aber überlegen Sie, ob Ihre Benutzer diese schätzen werden. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Dies mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, ungenutzte Funktionalität zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurde. Sie müssen vorsichtig und gezielt dabei sein, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, egal ob sie verwendet werden oder nicht; daher wäre es ein schneller Gewinn, um die Downloads zu beschleunigen, jegliche nicht verwendete Funktionalität zu entfernen. Beachten Sie auch, dass Sie oft nur einen kleinen Teil der im Framework verfügbaren Funktionalität nutzen werden. Ist es möglich, eine benutzerdefinierte Version des Frameworks zu erstellen, die nur den benötigten Teil enthält?
- **Erwägen Sie eingebaute Browserfunktionen**: Es könnte sein, dass Sie eine Funktion verwenden können, die der Browser bereits hat, anstatt diese über JavaScript selbst zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebautes clientseitiges Formular-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten Ihr JavaScript auch in mehrere Dateien aufteilen, die kritische und nicht kritische Teile repräsentieren. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) erlauben Ihnen, dies effizienter zu tun als nur separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte selbst dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch Gzip-Kompression in der Regel.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) dies besser.

## Umgang mit Parsen und Ausführung

Bevor wir auf die in diesem Abschnitt enthaltenen Tipps eingehen, ist es wichtig zu verstehen, _wo_ im Prozess des Browser-Seiten-Renderings JavaScript gehandhabt wird. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst in der Reihenfolge geparst, in der es auf der Seite erscheint.
2. Wann immer CSS auftritt, wird es geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit wird begonnen, verlinkte Assets wie Bilder und Web-Schriften abzurufen.
3. Wann immer JavaScript auftritt, parst der Browser es, bewertet es und führt es gegen die Seite aus.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden sollte, gemessen an dem CSS, das darauf angewendet wurde.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung render-blockierend. Dies bedeutet, dass der Browser das Parsen von HTML, das nach dem JavaScript erscheint, blockiert, bis das Skript behandelt wurde. Folglich werden Styling und Rendering ebenfalls blockiert. Dies bedeutet, dass Sie sorgfältig nicht nur darüber nachdenken müssen, was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Laden kritischer Assets so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie besorgt sind, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Das funktioniert, ist aber render-blockierend. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), um einen Preloader für kritisches JavaScript zu erstellen:

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

Der Preload-{{htmlelement("link")}} lädt das JavaScript so schnell wie möglich, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Falle eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, bis Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die Render-Blockierungszeit wird dadurch trotzdem verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Aufschieben der Ausführung von nicht-kritischem JavaScript

Auf der anderen Seite sollten Sie darauf abzielen, das Parsen und die Ausführung von nicht-kritischem JavaScript später zu verschieben, wenn es gebraucht wird. Alles sofort zu laden, blockiert unnötigerweise das Rendering.

Zunächst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt wird. Dies hat einen ähnlichen Effekt wie `async`.

Sie könnten auch einfach das JavaScript erst dann laden, wenn ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte beispielsweise mit DOM-Scripting gemacht werden:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mit der {{jsxref("operators/import", "import()")}} Funktion geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Aufteilen langer Aufgaben

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie z. B. das Abrufen von Fetch-Anfragen, das Treiben von Benutzerinteraktionen und Eingaben durch Ereignis-Handler, das Ausführen von JavaScript-gesteuerten Animationen usw.

Die meisten davon geschehen im Haupt-Thread, mit Ausnahmen wie JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) läuft. Der Haupt-Thread kann nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren, oder wenn eine wichtige UI-Aktualisierung angefordert wird, während eine lange Aufgabe ausgeführt wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was dazu führen kann, dass die UI träge oder nicht reagiert erscheint.

Um dieses Problem zu mildern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies bietet dem Browser mehr Chancen, wichtige Benutzerinteraktionen zu bearbeiten oder UI-Rendering-Aktualisierungen durchzuführen — der Browser kann dies potenziell zwischen jeder kleineren Aufgabe tun, statt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Das macht auch aus mehreren anderen Gründen Sinn, wie z. B. einfachere Wartung, Fehlerbehebung und das Schreiben von Tests.

Beispielsweise:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

Diese Art von Struktur hilft jedoch nicht bei der Blockierung durch den Haupt-Thread. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, behandelt der Browser sie alle als eine einzige lange Aufgabe.

Um damit umzugehen, neigen wir dazu, regelmäßig eine "Yield"-Funktion auszuführen, um den Code _an den Haupt-Thread zurückzugeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung dem Browser die Möglichkeit gegeben wird, vorrangige Aufgaben wie die Aktualisierung der Benutzeroberfläche zu bearbeiten. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yieldFunc() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters so verwendet werden, um nach jeder ausgeführten Aufgabe an den Haupt-Thread zurückzugeben:

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
    await yieldFunc();
  }
}
```

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

```js
function yieldFunc() {
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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie darauf warten, dass eine Seite lädt (z. B. Lade-Spinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung verringern kann.

Der offensichtlichste Ratschlag für Animationen ist, weniger Animationen zu verwenden — entfernen Sie alle nicht wesentlichen Animationen, oder geben Sie Ihren Benutzern eine Präferenz, die sie einstellen können, um Animationen auszuschalten, z. B. wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden.

Bei wesentlichen DOM-Animationen wird empfohlen, wenn möglich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle von JavaScript-Animationen zu verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzuhaken). Den Browser direkt DOM-Animationen durchführen zu lassen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Bei Animationen, die nicht in JavaScript behandelt werden können, wie z. B. das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell für das effiziente und konsistente Steuerung von Animationsbildern konzipiert, um ein flüssiges Benutzererlebnis zu bieten. Das grundlegende Muster sieht folgendermaßen aus:

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

Eine schöne Einführung in Canvas-Animationen finden Sie unter [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations) und ein ausführlicheres Beispiel unter [Objektbau-Praxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer sein, um sie zu verfolgen und zu bearbeiten, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Beispielsweise könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch innerhalb eines bestimmten Bereichs der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Während sich die Maus innerhalb des Canvas befindet, möchten Sie ständig Mausbewegungen und Cursorpositionen überprüfen und den Spielstatus aktualisieren - einschließlich der Punktzahl, der Zeit, der Position aller Sprites, Kollisionsdetektionsinformationen usw. Sobald das Spiel vorbei ist, benötigen Sie all das nicht mehr, und in der Tat wäre es eine Verschwendung von Rechenleistung, dieses Ereignis weiterhin zu überwachen.

Es ist daher eine gute Idee, Event-Listener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) geschehen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist es, wo immer möglich Ereignisdelegation zu verwenden. Wenn Sie einen Code haben, der als Reaktion auf Benutzerinteraktionen mit einem von vielen untergeordneten Elementen ausgeführt werden soll, können Sie einen Event-Listener auf deren übergeordnetem Element setzen. Ereignisse, die auf einem untergeordneten Element ausgelöst werden, steigen zu ihrem übergeordneten Element auf, sodass Sie den Event-Listener nicht auf jedes untergeordnete Element einzeln setzen müssen. Weniger Event-Listener zu überwachen, bedeutet bessere Performance.

Siehe [Ereignisdelegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine bewährte Praktiken, die Ihren Code effizienter laufen lassen.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff auf und das Aktualisieren des DOM ist rechenintensiv, daher sollten Sie die Menge, die Ihr JavaScript damit macht, minimieren, insbesondere bei ständigen DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Bündeln Sie DOM-Änderungen**: Bei wesentlichen DOM-Änderungen sollten Sie diese in Gruppen bündeln, die zusammen durchgeführt werden, anstatt jede einzelne Änderung jeweils auszuführen. Dies kann die Menge an Arbeit reduzieren, die der Browser real ausführt, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche flüssiger aussehen lassen, mehrere Aktualisierungen auf einmal zu erledigen, anstatt ständig kleine Aktualisierungen vorzunehmen. Ein nützlicher Tipp hier ist: Wenn Sie einen großen Teil von HTML auf die Seite hinzufügen müssen, bauen Sie zuerst das gesamte Fragment (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen Sie es dann in einem Aufwasch an das DOM an, anstatt jedes Element einzeln hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind teuer, daher reduzieren Sie die Menge an Schleifenverwendung im Code überall, wo es möglich ist. In Fällen, in denen Schleifen unvermeidlich sind:
  - Vermeiden Sie es, die volle Schleife auszuführen, wenn dies nicht notwendig ist, unter Verwendung von {{jsxref("Statements/break", "Break")}}- oder {{jsxref("Statements/continue", "Continue")}}-Statements, wie es angebracht ist. Wenn Sie beispielsweise Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden wurde; es gibt keinen Grund, weitere Schleifendurchläufe auszuführen:

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

  - Arbeiten, die nur einmal benötigt werden, außerhalb der Schleife tätigen. Dies mag offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt enthält, das auf irgendeine Weise verarbeitet werden soll. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jedem Schleifen-Durchlauf durchgeführt, was eine Verschwendung von Rechenleistung ist. Das Abholen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Haupt-Threads durch**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben im Haupt-Thread ausführt und wie lange Operationen den Haupt-Thread blockieren können, was potenziell zu schlechter UI-Leistung führen kann. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben aufgeteilt werden können, um dieses Problem zu mildern. Eine weitere Möglichkeit, mit solchen Problemen umzugehen, ist, Aufgaben ganz aus dem Haupt-Thread zu verschieben. Es gibt einige Möglichkeiten, dies zu erreichen:
  - Asynchroner Code verwenden: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) blockiert im Wesentlichen nicht den Haupt-Thread. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zu einer Benutzer-Webcam zu bearbeiten. Da diese Operationen lange dauern könnten, wäre es schlecht, den Haupt-Thread einfach zu blockieren, während wir darauf warten, dass sie abgeschlossen sind. Stattdessen führt der Browser diese Funktionen aus und hält den Haupt-Thread mit nachfolgendem Code am Laufen; diese Funktionen werden Ergebnisse zurückgeben, sobald sie verfügbar sind, _irgendwann in der Zukunft_. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einer JavaScript-Sprachfunktion, die zum Umgang mit asynchronen Operationen ausgelegt ist. Es ist möglich, [Ihre eigenen promise-basierten Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie über Funktionen verfügen, die davon profitieren könnten, asynchron ausgeführt zu werden.
  - Berechnung in Web-Workern durchführen: [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, mit dem Sie einen separaten Thread öffnen können, um ein Stück JavaScript darin auszuführen, sodass es den Haupt-Thread nicht blockiert. Worker haben einige große Einschränkungen, die größte ist, dass Sie in einem Worker kein DOM-Scripting durchführen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten an und von dem Haupt-Thread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie eine Menge Berechnungen durchführen müssen und nicht möchten, dass diese den Haupt-Thread blockieren. Führen Sie diese Berechnung in einem Worker durch, warten Sie auf das Ergebnis, und senden Sie es an den Haupt-Thread zurück, wenn es fertig ist.
  - **WebGPU verwenden**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die Webentwicklern ermöglicht, die GPU (Grafikprozessor) des darunterliegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann aber noch bessere Leistungsverbesserungen als Web-Worker bieten.

## Siehe auch

- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
