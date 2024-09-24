---
title: JavaScript-Leistungsoptimierung
slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

Es ist sehr wichtig zu berücksichtigen, wie Sie JavaScript auf Ihren Websites verwenden, und darüber nachzudenken, wie Sie eventuelle Leistungsprobleme, die dadurch verursacht werden könnten, mindern können. Während Bilder und Videos über 70 % der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript pro Byte ein höheres Potenzial für negative Leistungsbeeinträchtigungen — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinflussen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

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
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Das Ziel ist es, die Auswirkungen von JavaScript auf die Web-Performance zu verstehen und zu lernen, wie damit zusammenhängende Probleme behoben oder gemildert werden können.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um loszulegen, besteht jedoch darin, zu lernen, wie man Tools wie integrierte [Netzwerk](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) Bildschirme nutzen kann, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie berücksichtigen sollten:

- **Sie brauchen nicht immer ein Framework**: Sie sind vielleicht mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) vertraut. Wenn Sie erfahren und sicher im Umgang mit diesem Framework sind und alle von ihm bereitgestellten Tools mögen, könnte es Ihr bevorzugtes Werkzeug zum Erstellen der meisten Projekte sein. Allerdings sind Frameworks JavaScript-intensiv. Wenn Sie eine eher statische Erfahrung mit wenigen JavaScript-Anforderungen schaffen, benötigen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das benötigte mithilfe weniger Zeilen Standard-JavaScript umsetzen.
- **Erwägen Sie eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung implementieren, aber überlegen Sie, ob Ihre Nutzer sie wirklich zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen vorsichtig und gezielt vorgehen, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, unabhängig davon, ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung von Downloads, jegliche nicht genutzte Funktionalität zu entfernen. Überlegen Sie auch, dass Sie oft nur einen kleinen Teil der in einem Framework verfügbaren Funktionalität nutzen. Ist es möglich, ein benutzerdefiniertes Build des Frameworks zu erstellen, das nur den benötigten Teil enthält?
- **Überlegen Sie, ob eingebaute Browserfunktionen genutzt werden können**: Möglicherweise können Sie eine Funktion verwenden, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Beispielsweise:
  - Verwenden Sie eingebaute klientseitige [Formularvalidierung](/de/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Handling animations](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun als nur mit separaten externen JavaScript-Dateien.

Dann können Sie diese kleineren Dateien optimieren. [Minimierung](/de/docs/Glossary/Minification) reduziert die Anzahl der Zeichen in Ihrer Datei, wodurch die Anzahl der Bytes oder das Gewicht Ihres JavaScripts verringert wird. [Gzipping](/de/docs/Glossary/gzip_compression) komprimiert die Datei weiter und sollte verwendet werden, auch wenn Sie Ihren Code nicht minimieren. [Brotli](/de/docs/Glossary/Brotli_compression) ähnelt Gzip, übertrifft jedoch in der Regel die Gzip-Kompression.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft wird ein Modul-Bundler wie [Webpack](https://webpack.js.org/) diese Aufgabe besser übernehmen.

## Umgang mit Parsing und Ausführung

Bevor wir uns den in diesem Abschnitt enthaltenen Tipps zuwenden, ist es wichtig zu besprechen, _wo_ im Prozess des Browser-Seiten-Renderings JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Das HTML wird normalerweise zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Immer wenn CSS auftritt, wird es geparst, um die auf die Seite anzuwendenden Stile zu verstehen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Web-Schriftarten heruntergeladen zu werden.
3. Immer wenn JavaScript auftritt, parst, evaluiert und führt der Browser es auf der Seite aus.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element gestylt werden sollte, gegeben das CSS, das darauf angewendet wird.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm angezeigt.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der wesentliche Schritt hier ist Schritt 3. Standardmäßig sind Parsing und Ausführung von JavaScript rendeblockierend. Das bedeutet, dass der Browser das Parsen von HTML, das nach dem JavaScript erscheint, blockiert, bis das Skript behandelt wurde. Infolgedessen werden auch das Styling und das Rendering blockiert. Das bedeutet, dass Sie nicht nur darüber nachdenken müssen, was Sie herunterladen, sondern auch, wann und wie dieser Code ausgeführt wird.

In den nächsten Abschnitten werden nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScript vorgestellt.

## Lade kritische Assets so bald wie möglich

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung dadurch beeinträchtigt, dass es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} der Seite laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Das funktioniert gut, ist jedoch rendeblockierend. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), um einen Vorlader für kritisches JavaScript zu erstellen:

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

Der Preload-{{htmlelement("link")}}-Tag ruft das JavaScript so schnell wie möglich ab, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden, wo es sinnvoll ist:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Falle eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen ist, wenn Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die Renderblockierungszeit wird dennoch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Verschieben der Ausführung von nicht-kritischem JavaScript

Andererseits sollten Sie darauf abzielen, Parsing und Ausführung von nicht-kritischem JavaScript auf später zu verschieben, wenn es benötigt wird. Alles sofort zu laden, blockiert unnötigerweise das Rendering.

Erstens können Sie das Attribut `async` zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es zur gleichen Zeit bereit sein wird und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments ausgeführt wird, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignisses. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten das JavaScript auch einfach erst laden, wenn ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte über DOM-Scripting geschehen, zum Beispiel:

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

## Aufteilen langer Aufgaben

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie zum Beispiel das Ausführen von Fetch-Anfragen, das Steuern von Benutzerinteraktionen und -eingaben über Ereignishandler, das Ausführen von JavaScript-gestützten Animationen und so weiter.

Das meiste davon geschieht im Main-Thread, mit Ausnahmen wie JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Main-Thread kann nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer während der Ausführung einer langen Aufgabe versucht, mit der Seite zu interagieren, oder eine wichtige UI-Aktualisierung angefordert wird, wird dadurch seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder nicht reagiert erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Gelegenheit, wichtige Benutzerinteraktionen oder UI-Rendering-Aktualisierungen durchzuführen – der Browser kann sie potenziell zwischen den einzelnen kleineren Aufgaben durchführen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Das ergibt auch aus anderen Gründen Sinn, wie z.B. einfachere Wartung, Debugging und Tests schreiben.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzelne lange Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, eine "yield"-Funktion periodisch auszuführen, um den Code _dem Hauptthread zu übergeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung dem Browser die Möglichkeit gegeben wird, hochpriorisierte Aufgaben wie die Aktualisierung der Benutzeroberfläche zu behandeln. Ein gebräuchliches Muster für diese Funktion verwendet {{domxref("setTimeout()")}}, um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um nach jeder ausgeführten Aufgabe dem Hauptthread zu übergeben:

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

Um dies weiter zu verbessern, können wir {{domxref("Scheduling.isInputPending", "navigator.scheduling.isInputPending()")}} verwenden, um die `yield()`-Funktion nur dann auszuführen, wenn der Benutzer versucht, mit der Seite zu interagieren:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```

Dies ermöglicht es Ihnen, das Blockieren des Hauptthreads zu vermeiden, wenn der Benutzer aktiv mit der Seite interagiert, was potenziell eine flüssigere Benutzererfahrung bietet. Indem wir jedoch nur dann nachgeben, wenn es notwendig ist, können wir die aktuelle Aufgabe weiter ausführen, wenn es keine Benutzerinteraktionen gibt, die verarbeitet werden müssen. Dies vermeidet auch, dass Aufgaben hinter anderen nicht wesentlichen, vom Browser initiierten Aufgaben zurückgesetzt werden, die nach der aktuellen eine eingereiht wurden.

## Umgang mit JavaScript-Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsschneller erscheinen lassen und den Nutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (zum Beispiel Lade-Spinner). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungskraft, um gehandhabt zu werden, was die Leistung beeinträchtigen kann.

Der offensichtlichste Hinweis zur Animation besteht darin, weniger Animationen zu verwenden – unnötige Animationen zu entfernen oder Ihren Nutzern die Möglichkeit zu geben, Animationen abzuschalten, wenn sie beispielsweise ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden.

Für essentielle DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) dort zu verwenden, wo es möglich ist, anstelle von JavaScript-Animationen (das [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Die Verwendung des Browsers, um direkt DOM-Animationen auszuführen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS performance optimization > Handling animations](/de/docs/Learn/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript behandelt werden können, beispielsweise das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, {{domxref("Window.requestAnimationFrame()")}} anstelle älterer Optionen wie {{domxref("setInterval()")}} zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür konzipiert, Animationsbilder effizient und konsistent zu handhaben, für eine reibungslose Benutzererfahrung. Das grundlegende Muster sieht so aus:

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

Sie finden eine nette Einführung in Canvas-Animationen unter [Drawing graphics > Animations](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations) und ein ausführlicheres Beispiel bei [Object building practice](/de/docs/Learn/JavaScript/Objects/Object_building_practice). Sie können auch ein vollständiges Satz an Canvas-Tutorials im [Canvas tutorial](/de/docs/Web/API/Canvas_API/Tutorial) finden.

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer zu verfolgen und zu behandeln sein, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignis verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sie könnten ein `<canvas>`-Spiel auf Ihrer Seite ausführen. Solange sich die Maus im Canvas befindet, möchten Sie ständig Mausbewegungen und Cursorpositionen überprüfen und den Spielzustand aktualisieren - einschließlich Punktestand, Zeit, Position aller Sprites, Kollisionsinformationen usw. Wenn das Spiel vorbei ist, benötigen Sie das alles nicht mehr, und es wird tatsächlich eine Verschwendung von Rechenleistung sein, dieses Ereignis weiterhin zu überwachen.

Es ist daher eine gute Idee, Ereignislistener zu entfernen, die nicht mehr benötigt werden. Dies kann mit {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} geschehen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, Ereignisdelegation wann immer möglich zu verwenden. Wenn Sie etwas Code haben, der als Reaktion auf eine Benutzerinteraktion mit einem von vielen Kind-Elementen ausgeführt werden soll, können Sie einen Ereignislistener auf deren Eltern setzen. Ereignisse, die auf einem Kind-Element ausgelöst werden, blubbern zu ihrem Elternteil hoch, sodass Sie den Ereignislistener nicht einzeln auf jedes Kind setzen müssen. Weniger zu verfolgende Ereignislistener bedeuten bessere Leistung.

Siehe [Event delegation](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation) für mehr Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Code

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter ausführen lassen.

- **Reduzieren Sie DOM-Manipulationen**: Das Zugreifen und Aktualisieren des DOM ist rechnerisch teuer, daher sollten Sie die Menge an JavaScript, die dies tut, minimieren, besonders beim Ausführen konstanter DOM-Animation (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Bündeln Sie DOM-Änderungen**: Bei wesentlichen DOM-Änderungen sollten Sie diese in Gruppen zusammenführen, die zusammen durchgeführt werden, anstatt jede einzelne Änderung direkt zu senden, wenn sie auftritt. Dies kann die tatsächliche Arbeitslast des Browsers reduzieren, aber auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche glatter erscheinen lassen, mehrere Aktualisierungen aus dem Weg zu räumen, anstatt ständig kleine Aktualisierungen vorzunehmen. Ein nützlicher Hinweis ist hier — wenn Sie ein großes HTML-Fragment zur Seite hinzufügen müssen, erstellen Sie das gesamte Fragment zuerst (typischerweise innerhalb eines {{domxref("DocumentFragment")}}) und hängen es dann in einem Schritt ans DOM, anstatt jedes Element einzeln anzuhängen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihre DOM-Struktur ist, desto schneller kann darauf zugegriffen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an wiederholtem Code**: Schleifen sind teuer, daher reduzieren Sie den Einsatz von Schleifen überall dort, wo möglich. In Fällen, in denen Schleifen unumgänglich sind:

  - Vermeiden Sie das Durchlaufen der gesamten Schleife, wenn es unnötig ist, indem Sie die {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}} Anweisungen entsprechend verwenden. Wenn Sie beispielsweise Arrays auf einen bestimmten Namen durchsuchen, sollten Sie die Schleife beenden, sobald der Name gefunden ist; es besteht keine Notwendigkeit, weitere Schleifeniterationen auszuführen:

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

  - Führen Sie Arbeiten, die nur einmal gemacht werden müssen, außerhalb der Schleife aus. Das mag offensichtlich erscheinen, ist aber leicht zu übersehen. Betrachten Sie den folgenden Code-Schnipsel, welcher ein JSON-Objekt holt, das Daten zur weiteren Verarbeitung enthält. In diesem Fall wird die {{domxref("Window/fetch", "fetch()")}}-Operation bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, welches nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Ausführen von Berechnungen außerhalb des Hauptthreads**: Zu Beginn sprachen wir darüber, wie JavaScript in der Regel Aufgaben im Hauptthread ausführt, und wie lange Operationen den Hauptthread blockieren können, was potenziell zu schlechter UI-Leistung führt. Wir zeigten auch, wie man lange Aufgaben in kleinere aufteilt, um dieses Problem zu mildern. Eine weitere Möglichkeit, solche Probleme zu handhaben, besteht darin, Aufgaben ganz aus dem Hauptthread zu verlagern. Es gibt einige Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing) ist im Wesentlichen JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine lokale Datei oder das Öffnen eines Streams zu einer Webkamera eines Benutzers zu behandeln. Weil diese Operationen lange dauern können, wäre es schlecht, den Hauptthread während des Wartens zu blockieren. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread für den nachfolgenden Code am Laufen, und diese Funktionen geben Ergebnisse zurück, sobald sie _irgendwann in der Zukunft_ verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einem JavaScript-Sprachmerkmal, das für die Handhabung asynchroner Operationen entworfen wurde. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), wenn Sie Funktionalitäten haben, die von der asynchronen Ausführung profitieren würden.
  - Ausführen von Berechnungen in Web Workern: [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind eine Mechanik, die es Ihnen ermöglicht, einen separaten Thread zu öffnen, um ein JavaScript-Stück auszuführen, sodass es den Hauptthread nicht blockiert. Worker haben einige wesentliche Einschränkungen, die größte ist, dass Sie kein DOM-Scripting innerhalb eines Workers durchführen können. Sie können jedoch die meisten anderen Dinge tun und Worker können Nachrichten an den Hauptthread senden und von diesem empfangen. Der Hauptzweck von Workern besteht darin, wenn Sie viele Berechnungen durchführen müssen und nicht wollen, dass sie den Hauptthread blockieren. Verarbeiten Sie diese Berechnungen in einem Worker, warten Sie auf das Ergebnis und senden Sie es zurück an den Hauptthread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann aber sogar bessere Leistungsverbesserungen bieten als Web Worker.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
