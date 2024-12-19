---
title: JavaScript-Leistungsoptimierung
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, zu überlegen, wie Sie JavaScript auf Ihren Websites verwenden, und darüber nachzudenken, wie Sie eventuelle Leistungsprobleme, die dadurch verursacht werden könnten, mindern können. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript Byte für Byte ein größeres Potenzial für negative Leistungseinflüsse — es kann erheblich die Downloadzeiten, die Renderleistung sowie die CPU- und Batterienutzung beeinflussen. Dieser Artikel führt Tipps und Techniken ein, um JavaScript zu optimieren und die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Informationen über die Auswirkungen von JavaScript auf die Webleistung zu lernen und wie
        man zusammenhängende Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, ist "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen können, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon unter Verwendung fortschrittlicher [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie man Tools wie integrierte Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Leistungstools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript ist solches, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Möglicherweise sind Sie mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie erfahren und zuversichtlich im Umgang mit diesem Framework sind und alle von ihm angebotenen Tools mögen, könnte es Ihr Standardwerkzeug zum Erstellen der meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine relativ statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie wahrscheinlich kein Framework. Möglicherweise können Sie das, was Sie benötigen, mit wenigen Zeilen Standard-JavaScript umsetzen.
- **Betrachten Sie eine einfachere Lösung**: Möglicherweise haben Sie eine auffällige, interessante Lösung zur Implementierung vorgesehen, aber überlegen Sie, ob Ihre Benutzer sie schätzen werden. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code**: Dies mag offensichtlich erscheinen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionalität zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurde. Sie müssen sorgfältig und überlegt vorgehen, was hinzugefügt und entfernt wird. Alle Skripte werden analysiert, egal ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung von Downloads, jegliche ungenutzte Funktionalität zu entfernen. Überlegen Sie auch, dass Sie häufig nur einen kleinen Teil der in einem Framework verfügbaren Funktionalität verwenden werden. Ist es möglich, eine benutzerdefinierte Version des Frameworks zu erstellen, die nur den benötigten Teil enthält?
- **Betrachten Sie integrierte Browser-Funktionen**: Es könnte sein, dass Sie eine Funktion nutzen können, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Nutzen Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Handling animations](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen Ihnen, dies effizienter zu tun, als einfach separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch in der Regel Gzip-Kompression.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsing und Ausführung

Bevor Sie sich die Tipps in diesem Abschnitt ansehen, ist es wichtig zu verstehen, _wo_ im Prozess des Renderings einer Browserseite JavaScript verarbeitet wird. Wenn eine Webseite geladen wird:

1. Das HTML wird normalerweise zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS angetroffen wird, wird es analysiert, um zu verstehen, welche Styles auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Ressourcen wie Bilder und Webfonts, geladen zu werden.
3. Wann immer JavaScript angetroffen wird, parst der Browser es, wertet es aus und führt es gegen die Seite aus.
4. Etwas später arbeitet der Browser aus, wie jedes HTML-Element gestylt werden sollte, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der Schlüssel hier ist Schritt 3. Standardmäßig blockieren JavaScript-Parsing und -Ausführung das Rendering. Das bedeutet, dass der Browser das Parsen von HTML, das nach dem Auffinden von JavaScript erscheint, blockiert, bis das Skript verarbeitet wurde. Infolgedessen werden auch Styling und Malen blockiert. Dies bedeutet, dass Sie sorgfältig darüber nachdenken müssen, nicht nur was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsings und der Ausführung Ihres JavaScripts.

## Laden kritischer Assets so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie sich Sorgen machen, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert gut, blockiert aber das Rendering. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), um einen Preloader für kritisches JavaScript zu erstellen:

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

Das Preload-{{htmlelement("link")}} lädt das JavaScript so schnell wie möglich herunter, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Fall eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, bevor Sie es einbinden, aber es bedeutet, dass es früher heruntergeladen wird. Die renderblockierende Zeit wird dennoch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführung nicht kritischen JavaScripts verzögern

Auf der anderen Seite sollten Sie darauf abzielen, das Parsen und Ausführen von nicht-kritischem JavaScript später zu verschieben, wenn es benötigt wird. Es alles sofort zu laden, blockiert das Rendering unnötig.

Zunächst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zur DOM-Analyse abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten auch JavaScript einfach bis zum Auftreten eines Ereignisses, wenn es benötigt wird, gar nicht laden. Dies könnte zum Beispiel über DOM-Scripting erfolgen:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können dynamisch mittels der {{jsxref("operators/import", "import()")}}-Funktion geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Lange Aufgaben aufbrechen

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die sequenziell ausgeführt werden, wie z.B. das Ausführen von Fetch-Anfragen, das Verarbeiten von Benutzerinteraktionen und -eingaben durch Ereignishandler, das Ausführen von JavaScript-getriebener Animation und so weiter.

Das meiste davon passiert im Hauptthread, mit Ausnahmen wie JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Hauptthread kann nur eine Aufgabe gleichzeitig verarbeiten.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren oder ein wichtiger UI-Aktualisierungswunsch ausgelöst wird, während eine lange Aufgabe ausgeführt wird, wird dies seine Erfahrung beeinträchtigen. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder nicht antwortend erscheint.

Um dieses Problem zu mildern, müssen Sie lange Aufgaben in kleinere Aufgaben unterteilen. Dies gibt dem Browser mehr Gelegenheiten, wesentliche Benutzerinteraktionen oder UI-Rendering-Updates durchzuführen — der Browser kann dies zwischen den einzelnen kleineren Aufgaben möglicherweise tun und nicht nur davor oder danach. In Ihrem JavaScript könnten Sie dies erreichen, indem Sie Ihren Code in separate Funktionen aufteilen. Dies ergibt auch aus mehreren anderen Gründen Sinn, wie z.B. einfachere Wartung, Debugging und das Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie als einzige lange Aufgabe aus.

Um dies zu lösen, neigen wir dazu, gelegentlich eine "Yield"-Funktion auszuführen, um den Code _an den Hauptthread zu übergeben_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit hat, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche durchzuführen. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters verwendet werden, um nach jeder ausgeführten Aufgabe an den Hauptthread zu übergeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu erlauben, weiter ausgeführt zu werden, vor anderen weniger kritischen Aufgaben in der Warteschlange:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (Ladespinner zum Beispiel). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch natürlicherweise mehr Rechenleistung zur Verarbeitung, was die Leistung beeinträchtigen kann.

Der offensichtlichste Rat zu Animationen ist es, weniger Animationen zu verwenden — schneiden Sie alle nicht wesentlichen Animationen aus oder erwägen Sie, Ihren Benutzern eine Präferenz geben, mit der sie Animationen ausschalten können, zum Beispiel wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Batterieleistung verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet einen Weg, direkt über JavaScript in CSS-Animationen einzugreifen). Die direkte Ausführung von DOM-Animationen durch den Browser, anstelle der Manipulation von Inline-Styles mit JavaScript, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript behandelt werden können, wie z.B. das Animieren eines HTML-{{htmlelement("canvas")}}, wird geraten, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell für die effiziente und konsistente Behandlung von Animationsframes entworfen, für ein flüssiges Benutzererlebnis. Das grundlegende Muster sieht so aus:

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

Sie können eine schöne Einführung in Canvas-Animationen im Abschnitt [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations) finden, und ein detaillierteres Beispiel im Abschnitt [Objektbaupraxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials ist ebenfalls verfügbar unter [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können teuer für den Browser sein, um verfolgt und gehandhabt zu werden, vor allem, wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch innerhalb eines bestimmten Bereichs der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sie könnten ein `<canvas>`-Spiel auf Ihrer Seite ausführen. Solange sich die Maus im Canvas befindet, möchten Sie ständig Mausbewegungen und die Cursorposition überprüfen und den Spielstatus aktualisieren — einschließlich Punktestand, Zeit, Position aller Sprites, Kollisionserkennungsinformationen usw. Sobald das Spiel vorbei ist, müssen Sie dies nicht mehr tun, und tatsächlich wäre es reine Verschwendung von Rechnerleistung, dieses Ereignis weiter zu verfolgen.

Es ist daher eine gute Idee, nicht mehr benötigte Ereignislistener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) geschehen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist es, wo möglich, Ereignisdelegation zu verwenden. Wenn Sie etwas Code haben, das als Antwort auf eine Benutzerinteraktion mit einem von vielen untergeordneten Elementen ausgeführt werden soll, können Sie einen Ereignislistener auf ihrem übergeordneten Element setzen. Ereignisse, die auf einem untergeordneten Element ausgelöst werden, steigen zu ihrem übergeordneten Element auf, sodass Sie den Ereignislistener nicht auf jedem Kind einzeln setzen müssen. Weniger zu verfolgenden Ereignislistener bedeuten bessere Leistung.

Siehe [Ereignisdelegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für mehr Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine bewährte Praktiken, die Ihren Code effizienter machen.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff auf und die Aktualisierung des DOM ist rechenaufwendig, daher sollten Sie die Menge, die Ihr JavaScript tut, minimieren, besonders bei der Ausführung konstanten DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Batch-Änderungen im DOM**: Für notwendige DOM-Änderungen sollten Sie sie in Gruppen zusammenfassen, die zusammen ausgeführt werden, anstatt jede einzelne Änderung sofort auszuführen, wenn sie auftritt. Dies kann die Menge an Arbeit, die der Browser in realen Zahlen leistet, verringern, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche flüssiger erscheinen lassen, mehrere Updates auf einmal zu erledigen, anstatt ständig kleine Updates vorzunehmen. Ein nützlicher Tipp ist hier – wenn Sie einen großen Block HTML auf die Seite hinzufügen müssen, erstellen Sie das gesamte Fragment zuerst (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen Sie es dann alles in einem Zug zum DOM hinzu, anstatt jedes Element einzeln.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript abgerufen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötiges Überflüssiges.
- **Reduzieren Sie die Menge an Schleifencode**: Schleifen sind teuer, reduzieren Sie daher den Gebrauch von Schleifen in Ihrem Code, wo immer möglich. In Fällen, in denen Schleifen unvermeidbar sind:

  - Vermeiden Sie es, die vollständige Schleife laufen zu lassen, wenn es nicht nötig ist, indem Sie {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}} Anweisungen angemessen verwenden. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden ist; es gibt keinen Grund, die Schleife weiterlaufen zu lassen:

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

  - Machen Sie Arbeiten, die nur einmal erforderlich sind, außerhalb der Schleife. Das mag offensichtlich erscheinen, ist jedoch leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten zur Verarbeitung auf eine bestimmte Weise enthält. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jedem Durchlauf der Schleife durchgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Berechnen Sie außerhalb des Hauptthreads**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben im Hauptthread ausführt und wie lange Operationen den Hauptthread blockieren können, was potenziell zu schlechter UI-Leistung führt. Wir haben auch gezeigt, wie man lange Aufgaben in kleinere Aufgaben aufteilt, um dieses Problem zu mildern. Ein weiterer Weg, solche Probleme zu bewältigen, besteht darin, Aufgaben komplett außerhalb des Hauptthreads zu verschieben. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei auf dem lokalen Dateisystem oder das Öffnen eines Streams zu einer Benutzer-Webcam zu bearbeiten. Da solche Operationen lange dauern könnten, wäre es schlecht, einfach den Hauptthread zu blockieren, während wir darauf warten, dass sie abgeschlossen sind. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread am Laufen, um nachfolgenden Code auszuführen, und diese Funktionen liefern Ergebnisse, sobald sie verfügbar sind _irgendwann in der Zukunft_. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, was ein JavaScript-Sprachfeature ist, das für den Umgang mit asynchronen Operationen entworfen wurde. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie Funktionalität haben, die davon profitieren würde, asynchron ausgeführt zu werden.
  - Berechnungen in Webworkern ausführen: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen ermöglicht, einen separaten Thread zu öffnen, um ein Stück JavaScript auszuführen, wobei der Hauptthread nicht blockiert wird. Worker haben einige wesentliche Einschränkungen, die größte ist, dass Sie kein DOM-Scripting innerhalb eines Workers machen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten an den Hauptthread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viel Berechnung durchführen müssen und nicht möchten, dass der Hauptthread blockiert wird. Führen Sie diese Berechnung in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es zurück an den Hauptthread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist recht komplex, aber es kann noch bessere Leistungsverbesserungen bieten als Web Worker.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
