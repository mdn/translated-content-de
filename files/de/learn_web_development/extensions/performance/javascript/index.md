---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, zu berücksichtigen, wie Sie JavaScript auf Ihren Websites verwenden, und darüber nachzudenken, wie Sie mögliche Leistungsprobleme mildern können, die es verursachen könnte. Während Bilder und Videos über 70 % der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript byteweise ein größeres Potenzial für negative Leistungsauswirkungen — es kann erheblich die Download-Zeiten, die Rendering-Performance und die CPU- und Batterienutzung beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

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
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Erlernen, wie sich JavaScript auf die Webleistung auswirkt
        und wie man damit verbundene Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die so gut wie jedem Web-Projekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon basieren auf ausgeklügelten [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie man Tools wie die integrierten Browser- [Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)-Tools verwendet, um zu sehen, welche Teile des Seitenladens viel Zeit in Anspruch nehmen und optimiert werden müssen.

## JavaScript-Downloads optimieren

Das am besten performante, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie brauchen nicht immer ein Framework**: Sie sind möglicherweise mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie erfahren und zuversichtlich im Umgang mit diesem Framework sind und all die Tools mögen, die es bietet, dann könnte es Ihr bevorzugtes Werkzeug zum Erstellen der meisten Projekte sein. Frameworks sind jedoch schwer mit JavaScript. Wenn Sie eine ziemlich statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das, was Sie benötigen, mit ein paar Zeilen Standard-JavaScript umsetzen.
- **Überlegen Sie sich eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung zur Implementierung haben, aber überlegen Sie, ob Ihre Benutzer dies zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen vorsichtig und bewusst darüber sein, was hinzugefügt und entfernt wird. Alle Skripte werden analysiert, ob sie nun verwendet werden oder nicht; daher wäre ein schneller Weg zur Beschleunigung von Downloads, alle nicht verwendeten Funktionen zu entfernen. Denken Sie auch daran, dass Sie oft nur einen kleinen Teil der Funktionalitäten eines Frameworks nutzen. Ist es möglich, eine benutzerdefinierte Version des Frameworks zu erstellen, die nur den Teil enthält, den Sie benötigen?
- **Erwägen Sie integrierte Browserfunktionen**: Möglicherweise können Sie eine Funktion verwenden, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}} Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten Ihr JavaScript auch in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun, als nur separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minimierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minimieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch im Allgemeinen die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modulpaketierer wie [webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsing und Ausführung

Bevor wir uns die Tipps in diesem Abschnitt ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess der Browser-Seiten-Rendering JavaScript verarbeitet wird. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst in der Reihenfolge, in der es auf der Seite erscheint, analysiert.
2. Immer wenn CSS auftritt, wird es analysiert, um zu verstehen, welche Stile auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Webfonts, abgerufen zu werden.
3. Immer wenn JavaScript auftritt, analysiert, bewertet und führt der Browser es gegen die Seite aus.
4. Etwas später arbeitet der Browser aus, wie jedes HTML-Element gestylt werden soll, angesichts des darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Idee.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung render-blockierend. Das bedeutet, dass der Browser das Parsing von HTML, das nach dem JavaScript-Abschnitt erscheint, bis zur vollständigen Verarbeitung des Skripts blockiert. Infolgedessen werden auch Styling und Malerei blockiert. Dies bedeutet, dass Sie sorgfältig darüber nachdenken müssen, was Sie herunterladen und wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken, um das Parsing und die Ausführung Ihres JavaScripts zu optimieren.

## Laden kritischer Assets so früh wie möglich

Wenn ein Skript wirklich wichtig ist und Sie besorgt sind, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert gut, ist aber render-blockierend. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), um einen Preloader für kritisches JavaScript zu erstellen:

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

Der Preload-{{htmlelement("link")}} ruft das JavaScript so schnell wie möglich ab, ohne das Rendering zu blockieren. Sie können es dann überall in Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Falle eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, wenn Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die Render-Blockierungszeit wird dennoch verkürzt, auch wenn sie nicht vollständig beseitigt wird.

## Ausführung von nicht-kritischem JavaScript verzögern

Andererseits sollten Sie versuchen, das Parsing und die Ausführung von nicht-kritischem JavaScript auf später zu verschieben, wenn es benötigt wird. Alles sofort zu laden, blockiert das Rendering unnötig.

Zunächst können Sie das `async` Attribut zu Ihren `<script>` Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Dokumenten-Parsing, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt wird. Dies hat einen ähnlichen Effekt wie `async`.

Sie könnten das JavaScript auch einfach überhaupt nicht laden, bis ein Ereignis eintritt, bei dem es benötigt wird. Dies könnte über DOM-Scripting erfolgen, beispielsweise:

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

## Aufteilung langer Aufgaben

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie das Erstellen von Fetch-Anfragen, die Benutzerinteraktionen und Eingaben über Ereignis-Handler steuern, das Ausführen von JavaScript-gesteuerten Animationen und so weiter.

Die meisten davon passieren im Hauptthread, mit Ausnahmen wie JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) läuft. Der Hauptthread kann nur eine Aufgabe auf einmal ausführen.

Wenn eine einzige Aufgabe länger als 50 ms dauert, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren, oder eine wichtige UI-Aktualisierung angefordert wird, während eine lange Aufgabe ausgeführt wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder nicht reagierend erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Auf diese Weise hat der Browser mehr Chancen, wichtige Benutzerinteraktionen zu handhaben oder UI-Rendering-Aktualisierungen durchzuführen — der Browser kann sie potenziell zwischen jeder kleineren Aufgabe ausführen, anstatt nur vorher oder nachher. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie einfachere Wartung, Debugging und das Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Hauptthreads. Da alle fünf Funktionen in einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige lange Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, regelmäßig eine "yield"-Funktion auszuführen, um den Code zum _Hauptthread freizugeben_. Das bedeutet, dass unser Code in mehrere Aufgaben unterteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie die Aktualisierung der Benutzeroberfläche zu behandeln. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster wie folgt verwendet werden, um nach jeder ausgeführten Aufgabe zum Hauptthread freizugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu erlauben, vor anderen weniger kritischen Aufgaben in der Warteschlange weiterzulaufen:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen schneller erscheinen lassen und Benutzern das Gefühl geben, dass Fortschritte erzielt werden, während sie darauf warten, dass eine Seite geladen wird (Ladespinner zum Beispiel). Größere Animationen und eine höhere Anzahl an Animationen erfordern jedoch natürlich mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag zu Animationen ist, weniger Animationen zu verwenden — alle nicht wesentlichen Animationen zu entfernen oder Ihren Benutzern eine Präferenz zu geben, die sie einstellen können, um Animationen auszuschalten, zum Beispiel, wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Akkulaufzeit verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstatt von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet einen Weg, direkt in CSS-Animationen mit JavaScript einzuschleusen). Den Browser zu verwenden, um direkt DOM-Animationen durchzuführen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript behandelt werden können, beispielsweise beim Animieren einer HTML {{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür ausgelegt, Animationsrahmen effizient und konsistent zu handhaben, für eine reibungslose Benutzererfahrung. Das grundlegende Muster sieht so aus:

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

Eine gute Einführung in Canvas-Animationen finden Sie unter [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations), und ein detaillierteres Beispiel unter [Objektbau-Praxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie auch unter [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser kostspielig sein, um sie nachzuverfolgen und zu handhaben, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Beispielsweise könnten Sie die Position der Maus mithilfe des [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisses verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Solange sich die Maus innerhalb der Leinwand befindet, möchten Sie ständig auf Mausbewegungen und die Position des Cursors achten und den Spielzustand aktualisieren — einschließlich der Punktzahl, der Zeit, der Position aller Sprites, der Kollisions-Detektionsinformationen usw. Nachdem das Spiel beendet ist, müssen Sie das alles nicht mehr tun, und es wäre tatsächlich eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu lauschen.

Es ist daher eine gute Idee, Event-Listener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) getan werden:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist die Verwendung von Ereignisdelegation, wo immer möglich. Wenn Sie einige Codes als Antwort auf eine Benutzerinteraktion mit einem von vielen untergeordneten Elementen ausführen möchten, können Sie einen Event-Listener auf ihrem übergeordneten Element setzen. Ereignisse, die an einem untergeordneten Element ausgelöst werden, werden zu ihrem Elternteil aufwärts gebubbelt, sodass Sie den Event-Listener nicht auf jedem untergeordneten Element einzeln setzen müssen. Weniger Event-Listener, die verfolgt werden müssen, bedeuten eine bessere Leistung.

Details und ein nützliches Beispiel finden Sie unter [Event-Delegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation).

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter ausführen lassen.

- **DOM-Manipulation reduzieren**: Der Zugriff und das Aktualisieren des DOM sind rechenintensiv, daher sollten Sie die Menge, die Ihr JavaScript tut, minimieren, insbesondere bei der Durchführung von ständigen DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Änderungen im DOM bündeln**: Für wesentliche DOM-Änderungen sollten Sie diese in Gruppen bündeln, die zusammen durchgeführt werden, anstatt jede einzelne Änderung bei ihrem Auftreten abzufeuern. Dies kann die Menge der Arbeit, die der Browser real ausführt, reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche flüssiger wirken lassen, mehrere Updates auf einmal zu erledigen, anstatt ständig kleine Updates durchzuführen. Ein nützlicher Tipp hier ist — wenn Sie einen großen HTML-Block zur Seite hinzufügen müssen, bauen Sie zuerst das gesamte Fragment (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen Sie es dann in einem Schritt zum DOM hinzu, anstatt jedes Element einzeln hinzuzufügen.
- **Ihr HTML vereinfachen**: Je einfacher Ihre DOM-Struktur ist, desto schneller kann sie mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie genau, was Ihre Benutzeroberfläche benötigt und entfernen Sie unnötigen Ballast.
- **Die Menge des Schleifen-Codes reduzieren**: Schleifen sind teuer, daher sollten Sie die Nutzung von Schleifen in Ihrem Code so weit wie möglich reduzieren. In Fällen, in denen Schleifen unumgänglich sind:

  - Vermeiden Sie, dass die volle Schleife ausgeführt wird, wenn sie unnötig ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen entsprechend verwenden. Wenn Sie beispielsweise Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife beenden, sobald der Name gefunden wurde; es gibt keinen Grund, weitere Schleifeniterationen auszuführen:

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

  - Tun Sie Arbeiten, die nur einmal erforderlich sind, außerhalb der Schleife. Dies mag offensichtlich klingen, ist jedoch leicht zu übersehen. Betrachten Sie das folgende Snippet, das ein JSON-Objekt mit zu verarbeitenden Daten abruft. In diesem Fall wird der [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife durchgeführt werden, sodass es nur einmal erfolgt.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Ausführungen vom Hauptthread ausführen**: Wir haben bereits darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben auf dem Hauptthread ausführt, und wie lange Operationen den Hauptthread blockieren können, was möglicherweise zu schlechter UI-Performance führt. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben aufgeteilt werden können, um dieses Problem zu mindern. Eine andere Möglichkeit, solche Probleme zu behandeln, ist es, Aufgaben ganz vom Hauptthread zu verlagern. Es gibt einige Möglichkeiten, dies zu erreichen:

  - **Verwenden Sie asynchronen Code**: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Wesentlichen JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Funktionen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zur Webcam eines Benutzers zu behandeln. Da diese Operationen lange dauern könnten, wäre es schlecht, den Hauptthread einfach zu blockieren, während wir warten, dass sie abgeschlossen werden. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread am Laufen für die nachfolgenden Codes, und diese Funktionen liefern Ergebnisse, sobald sie irgendwann in der Zukunft verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einem JavaScript-Sprachmerkmal, das für die Behandlung asynchroner Operationen entworfen wurde. Es ist möglich, [Ihre eigenen Promise-basierten Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) zu schreiben, wenn Sie Funktionalitäten haben, die davon profitieren würden, asynchron ausgeführt zu werden.
  - **Rechenoperationen in Web Worker ausführen**: [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen erlaubt, einen separaten Thread zu öffnen, um ein Stück JavaScript auszuführen, sodass es den Hauptthread nicht blockiert. Worker haben einige wesentliche Einschränkungen, die größte davon ist, dass Sie keine DOM-Scripting innerhalb eines Workers durchführen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten zu und von dem Hauptthread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viel Rechenleistung benötigen und nicht möchten, dass dies den Hauptthread blockiert. Führen Sie diese Berechnung in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es an den Hauptthread zurück, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die zugrunde liegende GPU (Graphics Processing Unit) des Systems für die Durchführung von Hochleistungsberechnungen zu verwenden und komplexe Bilder zu zeichnen, die im Browser dargestellt werden können. Es ist ziemlich komplex, aber es kann noch bessere Leistungsgewinne bieten als Web Worker.

## Siehe auch

- [Optimieren langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
