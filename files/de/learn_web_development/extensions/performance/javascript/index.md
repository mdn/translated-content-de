---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, darüber nachzudenken, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie eventuelle Leistungsprobleme mindern können, die es verursachen könnte. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript Byte für Byte ein größeres Potenzial für negative Leistungsauswirkungen - es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinflussen. Dieser Artikel führt Tipps und Techniken ein, um JavaScript zu optimieren und die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Zu verstehen, wie JavaScript die Webleistung beeinflusst
        und wie man damit verbundene Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, lautet: "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen werden, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon unter Einbeziehung anspruchsvoller [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie man Werkzeuge wie die eingebauten [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Werkzeuge des Browsers verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Vielleicht sind Sie mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie erfahren und selbstbewusst im Umgang mit diesem Framework sind und alle Tools mögen, die es bietet, dann mag es Ihr bevorzugtes Werkzeug für die meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine ziemlich statische Erfahrung mit wenigen JavaScript-Anforderungen schaffen, benötigen Sie dieses Framework wahrscheinlich nicht. Sie könnten in der Lage sein, das, was Sie brauchen, mit ein paar Zeilen Standard-JavaScript zu implementieren.
- **Erwägen Sie eine einfachere Lösung**: Sie haben vielleicht eine auffällige, interessante Lösung zu implementieren, aber überlegen Sie, ob Ihre Benutzer diese zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code**: Das mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, ungenutzte Funktionalitäten zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen sorgfältig und gezielt darauf achten, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, egal ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung der Downloads, ungenutzte Funktionalitäten zu beseitigen. Bedenken Sie auch, dass Sie oft nur einen kleinen Teil der in einem Framework verfügbaren Funktionalitäten nutzen. Ist es möglich, eine benutzerdefinierte Version des Frameworks zu erstellen, die nur den benötigten Teil enthält?
- **Nutzen Sie eingebaute Browser-Funktionen**: Es könnte sein, dass Sie eine Funktion des Browsers verwenden können, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eingebauten {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun, als einfach separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzip-Komprimierung")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch in der Regel die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsen und Ausführung

Bevor wir uns die Tipps in diesem Abschnitt ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browserseitigen Rendern JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Zunächst wird das HTML im Allgemeinen in der Reihenfolge, in der es auf der Seite erscheint, geparst.
2. Wann immer CSS angetroffen wird, wird es geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Ressourcen wie Bilder und Web-Schriftarten geladen zu werden.
3. Wann immer JavaScript angetroffen wird, parst, bewertet und führt der Browser es gegen die Seite aus.
4. Etwas später entscheidet der Browser, wie jedes HTML-Element gestaltet werden soll, basierend auf dem angewendeten CSS.
5. Das gestaltete Ergebnis wird dann auf den Bildschirm gezeichnet.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Idee.

Der Schlüsselschritt hier ist Schritt 3. Standardmäßig sind das Parsen und Ausführen von JavaScript Render-Blockierungen. Das bedeutet, dass der Browser das Parsen von HTML, das nach dem JavaScript erscheint, blockiert, bis das Skript behandelt wurde. Infolgedessen werden auch das Styling und das Zeichnen blockiert. Daher müssen Sie sorgfältig darüber nachdenken, nicht nur was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Kritische Ressourcen so schnell wie möglich laden

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung durch langsames Laden beeinträchtigt, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert gut, blockiert jedoch den Rendern. Eine bessere Strategie ist es, [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) zu verwenden, um einen Preloader für kritisches JavaScript zu erstellen:

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

Der Preload-{{htmlelement("link")}} lädt das JavaScript so schnell wie möglich herunter, ohne das Rendern zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Fall eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen ist, wenn Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die Render-Blockierungszeit wird dennoch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführen nicht-kritischen JavaScripts verschieben

Andererseits sollten Sie das Parsen und Ausführen von nicht-kritischem JavaScript auf später verschieben, wenn es benötigt wird. Es gleich zu Beginn zu laden blockiert das Rendering unnötigerweise.

Zuerst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es gleichzeitig bereit ist und das Rendern nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten auch einfach das JavaScript gar nicht laden, bis ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte beispielsweise über DOM-Scripting erfolgen:

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

## Lange Aufgaben aufteilen

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie das Tätigen von Abrufanfragen, das Verarbeiten von Benutzerinteraktionen und Eingaben über Ereignishandler, das Ausführen von JavaScript-gesteuerten Animationen und so weiter.

Das meiste davon geschieht im Hauptthread, mit Ausnahmen, einschließlich JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Hauptthread kann nur eine Aufgabe zu einem Zeitpunkt laufen lassen.

Wenn eine einzelne Aufgabe länger als 50 ms zur Ausführung benötigt, wird sie als lange Aufgabe eingestuft. Wenn der Benutzer während einer langen Aufgabe versucht, mit der Seite zu interagieren oder ein wichtiges UI-Update angefordert wird, wird seine Erfahrung beeinflusst. Eine erwartete Reaktion oder visuelle Aktualisierung wird verzögert, was dazu führt, dass das UI träge oder nicht reagierend erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dadurch bietet sich dem Browser mehr Gelegenheiten, wichtige Benutzerinteraktionsverarbeitungen oder UI-Render-Updates durchzuführen - der Browser kann sie potenziell zwischen jeder kleineren Aufgabe durchführen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie etwa einfacher Wartung, Fehlersuche und Testen.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie als eine einzige lange Aufgabe aus.

Um dies zu bewältigen, neigen wir dazu, eine "yield"-Funktion periodisch auszuführen, um den Code dazu zu bringen, sich dem Hauptthread zu überlassen. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, wichtige Aufgaben wie das Aktualisieren der Benutzeroberfläche zu behandeln. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster wie folgt verwendet werden, um dem Hauptthread nach Ausführung jeder Aufgabe die Möglichkeit zur Verfügung zu stellen:

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

Um dies weiter zu verbessern, können wir wo verfügbar [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, um diesem Code zu erlauben, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter zu laufen:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flinker erscheinen lassen und Benutzer das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (z.B. Ladespinner). Größere Animationen und eine höhere Anzahl von Animationen benötigen jedoch natürlich mehr Verarbeitungskraft, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag zur Animation ist, weniger Animationen zu verwenden - streichen Sie alle nicht wesentlichen Animationen oder geben Sie Ihren Benutzern eine Präferenz, die sie einstellen können, um Animationen zu deaktivieren, beispielsweise wenn sie ein leistungsschwaches oder mobiles Gerät mit begrenzter Akkukapazität verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wo möglich zu verwenden, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Die Verwendung des Browsers zum direkten Ausführen von DOM-Animationen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die in JavaScript gehandhabt werden müssen, beispielsweise das Animieren eines HTML {{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) statt älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür ausgelegt, Animationsrahmen effizient und konsistent zu handhaben, um eine reibungslose Benutzererfahrung zu gewährleisten. Das grundlegende Muster sieht so aus:

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

Eine nette Einführung in Canvas-Animationen finden Sie unter [Zeichnen von Grafiken > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations), und ein umfassenderes Beispiel unter [Objektbau-Praxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer sein, um sie zu verfolgen und zu handhaben, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Beispielsweise könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sich die Maus noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Vielleicht führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Solange sich die Maus im Canvas befindet, möchten Sie kontinuierlich Mausbewegungen und Cursorpositionen überprüfen und den Spielzustand aktualisieren - mit Spielstand, Zeit, Position aller Sprites, Kollisionsprüfung usw. Sobald das Spiel vorbei ist, wird all dies nicht mehr benötigt und es ist tatsächlich eine Verschwendung von Rechenleistung, das Ereignis weiter zu verfolgen.

Deshalb ist es eine gute Idee, nicht mehr benötigte Ereignis-Listener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wo immer möglich, Ereignisdelegierung zu verwenden. Wenn Sie Code haben, der als Reaktion auf Benutzerinteraktionen mit einem von vielen Kind-Elementen ausgeführt werden soll, können Sie einen Ereignis-Listener beim übergeordneten Element festlegen. Ereignisse, die auf einem Kind-Element ausgelöst werden, werden zu ihrem Elternteil weitergeleitet, sodass Sie das Ereignis-Listener nicht auf jedem Kind einzeln festlegen müssen. Weniger zu verfolgende Ereignis-Listener bedeutet bessere Leistung.

Siehe [Ereignisdelegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein hilfreiches Beispiel.

## Tipps zum Schreiben effizienteren Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter laufen lassen.

- **Reduzieren Sie die DOM-Manipulation**: Das Zugreifen und Aktualisieren den DOM ist rechnerisch teuer, daher sollten Sie den Umfang dessen, was Ihr JavaScript tut, minimieren, besonders bei der Durchführung kontinuierlicher DOM-Animation (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Batch-DOM-Änderungen**: Bei wesentlichen DOM-Änderungen sollten Sie sie in Gruppen zusammenfassen, die zusammen durchgeführt werden, anstatt jede einzelne Änderung sofort bei ihrem Auftreten auszuführen. Dies kann die Arbeitslast des Browsers in realen Zahlen reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche glatter aussehen lassen, wenn mehrere Updates auf einmal erledigt werden, anstatt ständig kleine Updates zu machen. Ein hilfreicher Tipp hier ist – wenn Sie einen großen HTML-Block zur Seite hinzufügen müssen, bauen Sie zuerst das gesamte Fragment (typischerweise in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen es dann in einem Rutsch in den DOM ein, anstatt jedes Element einzeln anzuhängen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie genau, was Ihre Benutzeroberfläche benötigt und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifencode**: Schleifen sind teuer, daher sollten Sie den Einsatz von Schleifen in Ihrem Code so weit wie möglich reduzieren. In Fällen, in denen Schleifen unvermeidlich sind:

  - Vermeiden Sie es, die gesamte Schleife zu durchlaufen, wenn es unnötig ist, indem Sie {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}}-Anweisungen nach Bedarf verwenden. Beispielsweise sollten Sie, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, die Schleife abbrechen, sobald der Name gefunden wurde; es gibt keinen Grund, weitere Schleifeniterationenzu durchlaufen:

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

  - Arbeiten, die nur einmal benötigt werden, sollten außerhalb der Schleife erfolgen. Dies mag offensichtlich erscheinen, wird jedoch leicht übersehen. Nehmen Sie folgendes Snippet, das ein JSON-Objekt abruft, das auf irgendeine Weise verarbeitet werden soll. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jeder Iteration der Schleife durchgeführt, was Verschwendung von Rechenleistung ist. Die Abrufoperation, die nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass sie nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Hauptthreads aus**: Zuvor haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben auf dem Hauptthread ausführt und wie lange Operationen den Hauptthread blockieren können, was potenziell zu einer schlechten Benutzeroberfläche führt. Wir haben auch gezeigt, wie man lange Aufgaben in kleinere Aufgaben aufteilt, um dieses Problem zu mindern. Eine weitere Möglichkeit, diese Probleme zu bewältigen, besteht darin, Aufgaben vollständig außerhalb des Hauptthreads auszuführen. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde genommen JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs tendieren dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zur Webcam eines Benutzers abzuwickeln. Da diese Operationen lange dauern können, wäre es schlecht, den Hauptthread einfach zu blockieren, während wir auf ihre Fertigstellung warten. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread am Laufen und diese Funktionen geben Ergebnisse zurück, sobald sie _zu einem späteren Zeitpunkt_ verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einer JavaScript-Sprachfunktion, die für die Handhabung asynchroner Operationen entwickelt wurde. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie Funktionalitäten haben, die davon profitieren würden, asynchron ausgeführt zu werden.
  - Berechnungen in Webarbeitern ausführen: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen ermöglicht, einen separaten Thread zu öffnen, um darin ein Stück JavaScript auszuführen, sodass es den Hauptthread nicht blockiert. Worker haben einige große Einschränkungen, wobei die größte darin besteht, dass Sie keine DOM-Scripte innerhalb eines Workers ausführen können. Sie können jedoch die meisten anderen Dinge tun und Worker können Nachrichten an den und vom Hauptthread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viele Berechnungen ausführen müssen und nicht möchten, dass diese den Hauptthread blockieren. Führen Sie diese Berechnungen in einem Worker durch, warten Sie auf das Ergebnis und senden Sie es zurück zum Hauptthread, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems für hochleistungsfähige Berechnungen und das Zeichnen komplexer Bilder zu nutzen, die im Browser gerendert werden können. Es ist ziemlich komplex, bietet jedoch noch bessere Leistungsverbesserungen als Webarbeiter.

## Siehe auch

- [Optimieren Sie lange Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
