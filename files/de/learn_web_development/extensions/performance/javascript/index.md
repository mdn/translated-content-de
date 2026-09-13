---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 690498c3dbaebcf8b9a21220fbb23d192a30a225
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, zu berücksichtigen, wie Sie JavaScript auf Ihren Websites verwenden, und darüber nachzudenken, wie Sie mögliche Leistungsprobleme, die es verursachen könnte, mindern können. Während Bilder und Videos über 70 % der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript pro Byte das Potenzial für eine negative Leistungswirkung — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Erfahren über die Auswirkungen von JavaScript auf die Web-Performance
        und wie man damit verbundene Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Zu optimieren oder nicht zu optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie [die Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige unter Verwendung fortschrittlicher [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie integrierte Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## JavaScript-Downloads optimieren

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie im Hinterkopf behalten sollten:

- **Sie brauchen nicht immer ein Framework**: Sie könnten bereits mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut sein. Wenn Sie Erfahrung und Sicherheit im Umgang mit diesem Framework haben und alle bereitgestellten Werkzeuge mögen, dann könnte es Ihr bevorzugtes Werkzeug für den Bau der meisten Projekte sein. Allerdings sind Frameworks JavaScript-lastig. Wenn Sie eine eher statische Erfahrung mit wenigen JavaScript-Anforderungen schaffen, benötigen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das, was Sie brauchen, mit ein paar Zeilen standardmäßigem JavaScript implementieren.
- **Erwägen Sie eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung haben, aber überlegen Sie, ob Ihre Nutzer sie schätzen werden. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code**: Das mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, ungenutzte Funktionalität zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurde. Sie müssen sorgfältig und bewusst vorgehen, was hinzugefügt und entfernt wird. Alle Skripte werden analysiert, egal ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung der Downloads, jegliche nicht genutzte Funktionalität zu beseitigen. Bedenken Sie auch, dass Sie oft nur einen kleinen Teil der Funktionalität eines Frameworks nutzen werden. Ist es möglich, einen benutzerdefinierten Build des Frameworks zu erstellen, der nur den benötigten Teil enthält?
- **Berücksichtigen Sie integrierte Browserfunktionen**: Möglicherweise können Sie eine Funktion nutzen, die der Browser bereits bietet, anstatt eine eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [integrierte client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Nutzen Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile repräsentieren. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun als nur separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch im Allgemeinen die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) dies besser.

## Verarbeitung und Ausführung handhaben

Bevor Sie sich die in diesem Abschnitt enthaltenen Tipps ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browserseitenrenderings JavaScript gehandhabt wird. Wenn eine Webseite geladen wird:

1. Im Allgemeinen wird das HTML zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS gefunden wird, wird es analysiert, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit werden verknüpfte Ressourcen wie Bilder und Web-Schriftarten zu laden begonnen.
3. Wann immer JavaScript gefunden wird, analysiert, bewertet und führt der Browser es auf der Seite aus.
4. Etwas später berechnet der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist ein sehr vereinfachter Bericht darüber, was passiert, aber er gibt Ihnen eine Vorstellung.

Der wichtigste Schritt hier ist Schritt 3. Standardmäßig sind die JavaScript-Analyse und -Ausführung renderblockierend. Dies bedeutet, dass der Browser die Analyse von jeglichem HTML blockiert, das nach dem JavaScript erscheint, bis das Skript bearbeitet wurde. Infolgedessen werden auch das Styling und das Malen blockiert. Das bedeutet, dass Sie nicht nur darüber nachdenken müssen, was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung der Analyse und Ausführung Ihres JavaScripts.

## Kritische Ressourcen so schnell wie möglich laden

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es sich auf die Leistung auswirkt, indem es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert zwar, ist jedoch renderblockierend. Eine bessere Strategie ist es, [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu verwenden, um einen Preloader für kritisches JavaScript zu erstellen:

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

Mit dem Preload-{{htmlelement("link")}} wird das JavaScript so schnell wie möglich heruntergeladen, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder in Ihrem Skript, im Falle eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, wenn Sie es einfügen, bedeutet jedoch, dass es früher heruntergeladen wird. Die renderblockierende Zeit wird verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführung nicht-kritischen JavaScripts aufschieben

Auf der anderen Seite sollten Sie anstreben, die Analyse und Ausführung von nicht-kritischem JavaScript auf später zu verschieben, wenn es benötigt wird. Alles gleich zu Beginn zu laden, blockiert unnötigerweise das Rendering.

Zunächst können Sie das Attribut `async` zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zur DOM-Analyse abgerufen wird, sodass es zur gleichen Zeit bereit sein wird und das Rendering nicht blockieren wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach der Analyse des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses ausgeführt wird. Dies hat einen ähnlichen Effekt wie `async`.

Sie könnten auch einfach das JavaScript gar nicht laden, bis ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte zum Beispiel über DOM-Scripting geschehen:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mit der {{jsxref("Operators/import", "import()")}}-Funktion geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Lange Aufgaben aufteilen

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie z. B. das Abrufen von Daten, die Steuerung von Benutzerinteraktionen und Eingaben über Event-Handler, das Ausführen von JavaScript-gesteuerter Animation usw.

Die meisten dieser Aufgaben werden im Haupt-Thread ausgeführt, mit Ausnahmen wie JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) läuft. Der Haupt-Thread kann immer nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer während einer langen Aufgabe versucht, mit der Seite zu interagieren oder ein wichtiges UI-Update angefordert wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Reaktion oder visuelle Aktualisierung wird verzögert, was dazu führt, dass das UI träge oder nicht reagiert erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Möglichkeiten, wichtige Benutzerinteraktions-Handling- oder UI-Rendering-Updates auszuführen — der Browser kann sie möglicherweise zwischen den einzelnen kleineren Aufgaben ausführen, anstatt nur davor oder danach. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie z. B. einfachere Wartung, Fehlersuche und Testschreiben.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Haupt-Threads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, behandelt der Browser sie alle als eine einzige lange Aufgabe.

Um dies zu handhaben, neigen wir dazu, regelmäßig eine "yield"-Funktion auszuführen, um den Code dazu zu bringen, _dem Haupt-Thread nachzugeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung dem Browser die Möglichkeit gegeben wird, hochpriorisierte Aufgaben wie das Aktualisieren von UI zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yieldFunc() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um nach jeder ausgeführten Aufgabe dem Haupt-Thread nachzugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) dort verwenden, wo es verfügbar ist, um diesem Code zu erlauben, noch vor anderen weniger kritischen Aufgaben in der Warteschlange weiter auszuführen:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flinker wirken lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (z. B. Ladeanzeigen). Größere Animationen und eine höhere Anzahl an Animationen erfordern jedoch natürlich mehr Verarbeitungskapazität, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag für Animationen ist, weniger Animationen zu verwenden — schneiden Sie alle nicht wesentlichen Animationen aus oder geben Sie Ihren Benutzern eine Option, mit der sie Animationen deaktivieren können, z. B. wenn sie ein Gerät mit geringer Leistung oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) nach Möglichkeit zu verwenden, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Der Einsatz des Browsers zur direkten Durchführung von DOM-Animationen anstelle der Manipulation von Inline-Stilen mit JavaScript ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, z. B. das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür ausgelegt, Animationsframes effizient und konsistent zu handhaben, für eine flüssige Benutzererfahrung. Das Grundmuster sieht folgendermaßen aus:

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

Eine schöne Einführung in Canvas-Animationen finden Sie unter [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations) und ein detaillierteres Beispiel unter [Objekt-Aufbaupraxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können teuer für den Browser sein, um sie zu verfolgen und zu handhaben, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignis verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sie könnten ein `<canvas>`-Spiel auf Ihrer Seite betreiben. Solange sich die Maus im Canvas befindet, möchten Sie ständig Mausbewegungen und Cursorposition überprüfen und den Spielzustand aktualisieren — einschließlich des Punkts, der Zeit, der Position aller Sprites, Kollisionserkennungsinformationen usw. Sobald das Spiel beendet ist, benötigen Sie all das nicht mehr und in der Tat ist es eine Verschwendung von Verarbeitungsleistung, weiterhin auf dieses Ereignis zu lauschen.

Es ist daher eine gute Idee, Event-Listener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) gemacht werden:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wann immer möglich, Event-Delegation zu verwenden. Wenn Sie Code haben, der als Reaktion auf eine Benutzerinteraktion mit einem von vielen Kinderelementen ausgeführt werden soll, können Sie einen Event-Listener auf ihrem übergeordneten Element setzen. Ereignisse, die auf einem beliebigen Kinderelement ausgelöst werden, werden zu ihrem übergeordneten Element weitergeleitet, sodass Sie den Event-Listener nicht auf jedem einzelnen Kind festlegen müssen. Weniger zu verfolgende Event-Listener bedeutet bessere Leistung.

Siehe [Event-Delegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps zur effizienteren Code-Schreibung

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter ausführen lassen.

- **DOM-Manipulation reduzieren**: Der Zugriff auf und die Aktualisierung des DOM ist rechenaufwendig, daher sollten Sie die Menge, die Ihr JavaScript tut, minimieren, insbesondere bei der Durchführung von konstanten DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **DOM-Änderungen bündeln**: Für wesentliche DOM-Änderungen sollten Sie sie in Gruppen zusammenfassen, die zusammen durchgeführt werden, anstatt jede einzelne Änderung im Moment ihres Auftretens zu senden. Dies kann die tatsächliche Arbeitsbelastung des Browsers verringern, aber auch die wahrgenommene Leistung verbessern. Es kann das UI glatter aussehen lassen, mehrere Aktualisierungen in einem Durchgang zu erledigen, anstatt ständig kleine Updates vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie ein großes HTML-Fragment haben, das Sie der Seite hinzufügen möchten, erstellen Sie das gesamte Fragment zuerst (typischerweise in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen es dann alles in einem Durchgang an das DOM an, anstatt jedes Element einzeln anzuhängen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann darauf zugegriffen und mit JavaScript manipuliert werden. Denken Sie sorgfältig darüber nach, was Ihr UI braucht, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind teuer, also reduzieren Sie die Nutzung von Schleifen in Ihrem Code, wo immer möglich. In Fällen, in denen Schleifen unvermeidbar sind:
  - Vermeiden Sie es, die vollständige Schleife auszuführen, wenn es unnötig ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen nach Bedarf verwenden. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden ist; es gibt keinen Grund, weitere Schleifeniterationen auszuführen:

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

  - Arbeiten, die nur einmal nötig sind, außerhalb der Schleife ausführen. Dies mag ein bisschen offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die auf irgendeine Weise verarbeitet werden sollen. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Der Abruf, der nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass er nur einmal erfolgt.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Berechnungen außerhalb des Haupt-Threads ausführen**: Früher sprachen wir darüber, wie JavaScript im Allgemeinen Aufgaben im Haupt-Thread ausführt und wie lange Operationen den Haupt-Thread blockieren können, was möglicherweise zu einer schlechten UI-Leistung führt. Wir haben auch gezeigt, wie man lange Aufgaben in kleinere Aufgaben aufteilt, um dieses Problem zu mindern. Eine andere Möglichkeit, solche Probleme zu handhaben, besteht darin, Aufgaben vollständig außerhalb des Haupt-Threads zu verschieben. Es gibt einige Möglichkeiten, dies zu erreichen:
  - Asynchronen Code verwenden: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Wesentlichen JavaScript, das den Haupt-Thread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen vom Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zu einer Benutzer-Webcam zu handhaben. Da diese Operationen lange dauern könnten, wäre es schlecht, einfach den Haupt-Thread zu blockieren, während wir auf ihre Fertigstellung warten. Stattdessen führt der Browser diese Funktionen aus, hält den Haupt-Thread zum Ausführen nachfolgenden Codes am Laufen, und diese Funktionen geben Ergebnisse zurück, sobald sie verfügbar sind — irgendwann in der Zukunft. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einer JavaScript-Sprachfunktion, die für die Handhabung asynchroner Operationen gedacht ist. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie Funktionen haben, die davon profitieren würden, asynchron ausgeführt zu werden.
  - Berechnungen in Web Workern ausführen: [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen ermöglicht, einen separaten Thread zu öffnen, um darin ein JavaScript-Stück auszuführen, sodass es den Haupt-Thread nicht blockiert. Worker haben einige große Einschränkungen, die größte davon ist, dass Sie kein DOM-Scripting innerhalb eines Workers durchführen können. Sie können jedoch die meisten anderen Dinge tun, und Worker können Nachrichten an den Haupt-Thread senden und von diesem empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viele Berechnungen durchführen müssen und nicht möchten, dass dies den Haupt-Thread blockiert. Führen Sie diese Berechnung in einem Worker durch, warten Sie auf das Ergebnis und senden Sie es zurück an den Haupt-Thread, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die zugrunde liegende GPU des Systems (Graphics Processing Unit) zu nutzen, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, aber es kann noch bessere Leistungsgewinne als Web Worker bieten.

## Siehe auch

- [Lange Aufgaben optimieren](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
