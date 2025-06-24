---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig zu überlegen, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie etwaige Leistungsprobleme, die es verursachen könnte, abmildern können. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript, Byte für Byte, ein größeres Potenzial für negative Leistungsauswirkungen — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinträchtigen. Dieser Artikel führt Tipps und Techniken zur Optimierung von JavaScript ein, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Um die Auswirkungen von JavaScript auf die Webleistung zu lernen und wie man damit verbundene Probleme abmildert oder behebt.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, ist "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die so gut wie jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Zu versuchen, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon unter Verwendung ausgeklügelter [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie Sie Tools wie eingebaute Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwenden, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung der JavaScript-Downloads

Das performativste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige zu beachtende Tipps:

- **Sie brauchen nicht immer ein Framework**: Vielleicht sind Sie vertraut mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries). Wenn Sie erfahren und selbstbewusst im Umgang mit diesem Framework sind und alle angebotenen Tools mögen, könnte es Ihr bevorzugtes Werkzeug zum Erstellen der meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine ziemlich statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework wahrscheinlich nicht. Sie könnten das, was Sie benötigen, mit einigen Zeilen Standard-JavaScript implementieren.
- **Erwägen Sie eine einfachere Lösung**: Sie haben möglicherweise eine auffällige, interessante Lösung zur Implementierung, aber überlegen Sie, ob Ihre Nutzer sie schätzen werden. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionalität zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurde. Sie müssen vorsichtig und überlegt sein, was hinzugefügt und entfernt wird. Alles Skript wird geparst, ob es verwendet wird oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung des Downloads, alle nicht genutzten Funktionalitäten zu entfernen. Bedenken Sie auch, dass Sie oft nur eine kleine Menge der in einem Framework verfügbaren Funktionalität verwenden. Ist es möglich, ein benutzerdefiniertes Build des Frameworks zu erstellen, das nur den Teil enthält, den Sie benötigen?
- **Berücksichtigen Sie eingebaute Browser-Funktionen**: Es könnte sein, dass Sie eine Funktion verwenden können, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Nutzen Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile repräsentieren. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun, als nur separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minimierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte verwendet werden, selbst wenn Sie Ihren Code nicht minimieren. {{Glossary("Brotli_compression", "Brotli")}} ist Gzip ähnlich, übertrifft aber in der Regel die Gzip-Kompression.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) dies besser.

## Umgang mit Parsing und Ausführung

Bevor wir uns die Tipps in diesem Abschnitt ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browserseiten-Renderings JavaScript gehandhabt wird. Wenn eine Webseite geladen wird:

1. Der HTML-Code wird im Allgemeinen zuerst geparst, in der Reihenfolge, in der er auf der Seite erscheint.
2. Wenn CSS aufgerufen wird, wird es geparst, um zu verstehen, welche Stile auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Assets wie Bilder und Webfonts, abgerufen zu werden.
3. Wenn JavaScript aufgerufen wird, wird es vom Browser geparst, ausgewertet und an der Seite ausgeführt.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gezeichnet.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, aber sie gibt Ihnen eine Vorstellung.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung rendermäßig blockierend. Das bedeutet, dass der Browser das Parsen von HTML blockiert, das nach dem JavaScript aufgerufen wird, bis das Skript gehandhabt wurde. Dadurch werden auch das Styling und das Zeichnen blockiert. Das bedeutet, dass Sie nicht nur darüber nachdenken müssen, was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Laden Sie kritische Assets so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie besorgt sind, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Das funktioniert gut, ist aber rendermäßig blockierend. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), um einen Preloader für kritisches JavaScript zu erstellen:

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

Der Preload-{{htmlelement("link")}} lädt das JavaScript so schnell wie möglich herunter, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts im Falle eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, bis Sie es einfügen, aber es bedeutet, dass es früher heruntergeladen wird. Die rendermäßige Blockierungszeit wird dadurch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführung von nicht-kritischem JavaScript verschieben

Andererseits sollten Sie anstreben, das Parsen und die Ausführung von nicht-kritischem JavaScript auf einen späteren Zeitpunkt zu verschieben, an dem es benötigt wird. Alles upfront zu laden, blockiert das Rendering unnötigerweise.

Zuerst können Sie das `async` Attribut zu Ihren `<script>` Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies führt dazu, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es zur gleichen Zeit bereit sein wird und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das dazu führt, dass das Skript nach dem Parsen des Dokuments ausgeführt wird, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten das JavaScript auch einfach nicht laden, bis ein Ereignis eintritt, bei dem es benötigt wird. Dies könnte beispielsweise über das DOM-Scripting erfolgen:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript-Module können mithilfe der {{jsxref("operators/import", "import()")}} Funktion dynamisch geladen werden:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Aufbrechen langer Aufgaben

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie z. B. das Abrufen von Fetch-Anfragen, das Verarbeiten von Benutzerinteraktionen und Eingaben durch Ereignishandler, das Ausführen von JavaScript-gesteuerten Animationen usw.

Das meiste davon geschieht im Hauptthread, mit Ausnahmen wie JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Hauptthread kann immer nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren oder ein wichtiger UI-Update angefordert wird, während eine lange Aufgabe ausgeführt wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was zu einer trägen oder nicht reagierenden Benutzeroberfläche führt.

Um dieses Problem zu mildern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Gelegenheiten, wichtige Benutzerinteraktionshandlungen oder UI-Rendering-Updates auszuführen — der Browser kann sie möglicherweise zwischen jeder kleineren Aufgabe ausführen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie z. B. einfachere Wartung, Debugging und Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, laufen sie alle als eine lange Aufgabe ab.

Um dies zu handhaben, führen wir tendenziell regelmäßig eine "yield"-Funktion aus, um den Code _dem Hauptthread nachzugeben_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit hat, wichtige Aufgaben wie die Aktualisierung der Benutzeroberfläche zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um nach jeder ausgeführten Aufgabe zum Hauptthread zurückzukehren:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu ermöglichen, weiterhin vor anderen weniger kritischen Aufgaben in der Warteschlange auszuführen:

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

Animationen können die wahrgenommene Leistung verbessern, da sie Schnittstellen geschmeidiger machen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie darauf warten, dass eine Seite geladen wird (zum Beispiel Ladekreise). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch von Natur aus mehr Rechenleistung, was die Leistung verschlechtern kann.

Der offensichtlichste Ratschlag zur Animation ist, weniger Animationen zu verwenden — schneiden Sie alle nicht wesentlichen Animationen aus oder überlegen Sie, Ihren Benutzern eine Präferenz zur Verfügung zu stellen, mit der sie Animationen deaktivieren können, beispielsweise wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden.

Für wesentliche DOM-Animationen wird empfohlen, wenn möglich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle von JavaScript-Animationen zu verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt mit CSS-Animationen mithilfe von JavaScript zu arbeiten). Den Browser direkt DOM-Animationen ausführen zu lassen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, beispielsweise das Animieren eines HTML {{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür ausgelegt, Animationsbilder effizient und konsistent zu handhaben, um ein reibungsloses Benutzererlebnis zu gewährleisten. Das grundlegende Muster sieht wie folgt aus:

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

Sie finden eine nette Einführung zu Canvas-Animationen unter [Zeichnen von Grafiken > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations), und ein ausführlicheres Beispiel unter [Objektaufbaupraxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Sie können auch eine vollständige Reihe von Canvas-Tutorials unter [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) finden.

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer sein, um sie zu verfolgen und zu bearbeiten, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Beispielsweise könnten Sie die Position der Maus mithilfe des [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisses verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Solange sich die Maus im Canvas befindet, möchten Sie ständig die Mausbewegung und die Cursorposition überprüfen und den Spielstatus aktualisieren — einschließlich der Punkte, der Zeit, der Position aller Sprites, der Kollisionsdetektionsinformationen usw. Sobald das Spiel vorbei ist, benötigen Sie all das nicht mehr, und es wäre tatsächlich eine Verschwendung von Rechenleistung, dieses Ereignis weiter zu verfolgen.

Es ist daher eine gute Idee, nicht mehr benötigte Ereignislistener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist die Verwendung von Ereignisdelegation, wo immer dies möglich ist. Wenn Sie Code in Reaktion auf eine Benutzeraktion mit einem von vielen Kinderelementen ausführen möchten, können Sie einen Ereignislistener auf ihrem übergeordneten Element setzen. Ereignisse, die auf irgendeinem Kinderelement ausgelöst werden, blubbern zu ihrem übergeordneten Element hoch, sodass der Ereignislistener nicht auf jedem Kind einzeln gesetzt werden muss. Weniger Ereignislistener zu verfolgen bedeutet bessere Leistung.

Siehe [Ereignisdelegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt einige allgemeine Best Practices, die Ihren Code effizienter ausführen lassen.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff auf und die Aktualisierung des DOM ist rechentechnisch teuer, daher sollten Sie die Menge, die Ihr JavaScript erledigt, minimieren, insbesondere bei der Ausführung konstanter DOM-Animationen (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Bündeln Sie DOM-Änderungen**: Für wesentliche DOM-Änderungen sollten Sie sie in Gruppen bündeln, die zusammen erledigt werden, anstatt jede einzelne Änderung auszuführen, sobald sie auftreten. Dies kann die Menge der vom Browser tatsächlich erledigten Arbeit reduzieren, verbessert aber auch die wahrgenommene Leistung. Es kann das UI glatter aussehen lassen, mehrere Aktualisierungen auf einmal zu erledigen, anstatt ständig kleine Updates zu machen. Ein nützlicher Tipp hier ist — wenn Sie einen großen HTML-Block zur Seite hinzufügen müssen, bauen Sie das gesamte Fragment zuerst (typischerweise in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen Sie es dann in einem Schritt an das DOM an, anstatt jedes Element einzeln anzuhängen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript abgerufen und manipuliert werden. Denken Sie sorgfältig darüber nach, was Ihre Benutzeroberfläche braucht, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge des Schleifencodes**: Schleifen sind teuer, daher sollten Sie die Menge der Schleifenverwendung in Ihrem Code wo immer möglich reduzieren. In Fällen, in denen Schleifen unvermeidbar sind:

  - Führen Sie nicht die vollständige Schleife aus, wenn sie nicht erforderlich ist, und verwenden {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}} Anweisungen wie geeignet. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden ist; es gibt keinen Grund, weitere Schleifendurchläufe auszuführen:

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

  - Arbeiten, die nur einmal erforderlich sind, außerhalb der Schleife ausführen. Dies mag ein bisschen offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die auf irgendeine Weise verarbeitet werden sollen. In diesem Fall wird der [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal gemacht wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Ausführung außerhalb des Hauptthreads**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben im Hauptthread ausführt und wie lange Aufgaben möglicherweise den Hauptthread blockieren, was zu schlechter UI-Leistung führen kann. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben aufgeteilt werden können, um dieses Problem zu mildern. Eine weitere Möglichkeit, solche Probleme zu handhaben, besteht darin, Aufgaben vollständig vom Hauptthread zu verschieben. Es gibt einige Möglichkeiten, dies zu erreichen:
  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde Javascript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams zur Webcam eines Benutzers zu behandeln. Da diese Operationen lange dauern können, wäre es schlecht, den Hauptthread einfach zu blockieren, während wir darauf warten, dass sie abgeschlossen werden. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread in Betrieb für nachfolgenden Code, und diese Funktionen geben Ergebnisse zurück, sobald sie zu einem späteren Zeitpunkt verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}-basierte, einer JavaScript-Sprachfunktion, die für die Handhabung asynchroner Operationen entwickelt wurde. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie Funktionalität haben, die vom asynchronen Betrieb profitieren würde.
  - Berechnungen in Web Workern durchführen: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen erlaubt, einen separaten Thread zu öffnen, um ein Stück JavaScript auszuführen, sodass er den Hauptthread nicht blockiert. Worker haben einige große Einschränkungen, wobei die größte darin besteht, dass Sie kein DOM-Scripting innerhalb eines Workers durchführen können. Sie können jedoch die meisten anderen Aufgaben ausführen, und Worker können Nachrichten an und vom Hauptthread senden und empfangen. Die Hauptanwendung für Worker ist, wenn Sie viele Berechnungen durchführen müssen, die Sie nicht den Hauptthread blockieren lassen wollen. Führen Sie diese Berechnungen in einem Worker durch, warten Sie auf das Ergebnis und senden Sie es zurück an den Hauptthread, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, das zugrunde liegende GPU (Graphics Processing Unit) des Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch bessere Leistungsverbesserungen bieten als Web Worker.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
