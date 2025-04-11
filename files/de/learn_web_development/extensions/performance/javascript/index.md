---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, darüber nachzudenken, wie JavaScript auf Ihren Websites genutzt wird und wie mögliche Leistungsprobleme gemindert werden können. Während Bilder und Videos über 70% der heruntergeladenen Bytes einer durchschnittlichen Website ausmachen, hat JavaScript Byte für Byte ein größeres Potenzial für negative Leistungsauswirkungen — es kann signifikant die Download-Zeiten, die Rendering-Leistung und die CPU- und Batterienutzung beeinflussen. Dieser Artikel führt Tipps und Techniken zur JavaScript-Optimierung ein, um die Leistung Ihrer Website zu verbessern.

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
        Lernen, welche Auswirkungen JavaScript auf die Web-Performance hat
        und wie man damit verbundene Probleme mindern oder beheben kann.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihren Code zu optimieren, ist "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt nützen, während andere nur in bestimmten Situationen benötigt werden. Zu versuchen, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Ihre Zeit verschwenden. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Performance Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Wege, die Performance zu messen, einige davon beinhalten ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht allerdings darin, zu lernen, wie man Tools wie die eingebauten [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) des Browsers nutzt, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Optimierung des JavaScript-Downloads

Das performanteste JavaScript, das am wenigsten blockiert, ist das JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Möglicherweise sind Sie mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie Erfahrung und Vertrauen im Umgang mit diesem Framework haben und alle damit verbundenen Tools mögen, dann könnte es Ihr bevorzugtes Werkzeug sein, um die meisten Projekte zu entwickeln. Frameworks sind jedoch JavaScript-intensiv. Wenn Sie eine relativ statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie wahrscheinlich kein Framework. Möglicherweise können Sie das, was Sie benötigen, mit ein paar Zeilen Standard-JavaScript umsetzen.
- **Erwägen Sie eine einfachere Lösung**: Vielleicht haben Sie eine auffällige, interessante Lösung zu implementieren, aber überlegen Sie, ob Ihre Benutzer sie zu schätzen wissen werden. Würden sie vielleicht etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Das mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, unbenutzte Funktionalitäten, die während des Entwicklungsprozesses hinzugefügt wurden, zu bereinigen. Sie müssen sorgfältig und bewusst darauf achten, was hinzugefügt und entfernt wird. Jeder Skript wird geparst, egal ob er genutzt wird oder nicht; daher wäre eine schnelle Möglichkeit, die Downloads zu beschleunigen, jegliche nicht genutzte Funktionalität zu entfernen. Bedenken Sie auch, dass Sie in einem Framework oft nur einen kleinen Teil der verfügbaren Funktionalität nutzen werden. Ist es möglich, einen benutzerdefinierten Build des Frameworks zu erstellen, der nur den Teil enthält, den Sie benötigen?
- **Nutzen Sie eingebaute Funktionen des Browsers**: Es könnte sein, dass Sie eine Funktion verwenden können, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Nutzen Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen Ihnen dies effizienter als beim einfachen Einsatz separater externer JavaScript-Dateien.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch in der Regel die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsing und Ausführung

Bevor Sie sich die Tipps in diesem Abschnitt ansehen, ist es wichtig zu klären, _wo_ im Prozess des Browser-Seiten-Renderings JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Der HTML-Code wird in der Regel zuerst in der Reihenfolge, in der er auf der Seite erscheint, geparst.
2. Wann immer CSS angetroffen wird, wird es geparst, um die zu formatierenden Styles zu verstehen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Webfonts, abgerufen zu werden.
3. Wann immer JavaScript angetroffen wird, wird es geparst, ausgewertet und gegen die Seite ausgeführt.
4. Etwas später arbeitet der Browser aus, wie jedes HTML-Element gestylt werden sollte, betrachtet man das angewendete CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Idee.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig sind das Parsen und die Ausführung von JavaScript render-blockierend. Das bedeutet, dass der Browser das Parsen des HTML, das nach dem JavaScript erscheint, blockiert, bis das Skript behandelt wurde. Infolgedessen sind auch das Styling und das Rendering blockiert. Das bedeutet, dass Sie sorgfältig darüber nachdenken müssen, nicht nur was Sie herunterladen, sondern auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Laden kritischer Assets so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass seine langsame Ladegeschwindigkeit die Leistung beeinträchtigt, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert, ist jedoch render-blockierend. Eine bessere Strategie ist es, [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu verwenden, um einen Preloader für kritisches JavaScript zu erstellen:

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

oder innerhalb Ihres Skripts, im Falle eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen ist, wenn es eingebunden wird, aber es bedeutet, dass es früher heruntergeladen wird. Die Render-Blockierungszeit wird verkürzt, selbst wenn sie nicht vollständig entfernt wird.

## Aufschieben der Ausführung von nicht-kritischem JavaScript

Andererseits sollten Sie das Parsen und die Ausführung von nicht-kritischem JavaScript auf später verschieben, wenn es benötigt wird. Alles auf einmal zu laden blockiert das Rendering unnötig.

Zuerst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dadurch wird das Skript parallel mit dem DOM-Parsen abgerufen, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein anderes Attribut, `defer`, das das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausführt. Dieses hat eine ähnliche Wirkung wie `async`.

Sie könnten auch einfach das JavaScript überhaupt nicht laden, bis ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte über DOM-Scripting erfolgen, zum Beispiel:

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

## Lang andauernde Aufgaben aufteilen

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in aufeinanderfolgende Aufgaben, wie das Durchführen von Abrufanforderungen, die Benutzerinteraktionen und Eingaben durch Event-Handler, das Ausführen von JavaScript-gesteuerten Animationen und so weiter.

Das meiste davon geschieht im Haupt-Thread, mit Ausnahmen wie JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Haupt-Thread kann immer nur eine Aufgabe auf einmal ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, mit der Seite zu interagieren oder ein wichtiger UI-Update angefordert wird, während eine lang andauernde Aufgabe ausgeführt wird, wird dies die Benutzererfahrung beeinträchtigen. Eine erwartete Antwort oder ein visueller Update wird verzögert, was dazu führt, dass die UI träge oder nicht reaktionsfähig erscheint.

Um dieses Problem zu mindern, müssen Sie lang andauernde Aufgaben in kleinere Aufgaben aufteilen. Dadurch hat der Browser mehr Gelegenheiten, wesentliche Benutzerinteraktionsbehandlungen oder UI-Rendering-Updates durchzuführen — der Browser kann sie potenziell zwischen jeder kleineren Aufgabe durchführen, anstatt nur vor oder nach der lang andauernden Aufgabe. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Das macht auch aus mehreren anderen Gründen Sinn, wie einfachere Wartung, Fehlerbehebung und Testentwicklung.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Haupt-Threads. Da alle fünf Funktionen in einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige lang andauernde Aufgabe aus.

Um dies zu Handhaben, tendieren wir dazu, regelmäßig eine "Yield"-Funktion auszuführen, um den Code dazu zu bringen, _dem Haupt-Thread nachzugeben_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Gelegenheit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der UI zu behandeln. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
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
    await yield();
  }
}
```

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

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

Animationen können die wahrgenommene Performance verbessern, indem sie Schnittstellen flinker wirken lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie darauf warten, dass eine Seite geladen wird (zum Beispiel Lade-Spinnereien). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Performance beeinträchtigen kann.

Der offensichtlichste Ratschlag für Animationen ist, weniger Animationen zu verwenden — schneiden Sie alle nicht-essentiellen Animationen aus, oder überlegen Sie, Ihren Benutzern eine Präferenz anzubieten, die es ihnen ermöglicht, Animationen auszuschalten, wenn sie beispielsweise ein Gerät mit geringer Leistung oder ein Mobilgerät mit begrenzter Batterieleistung verwenden.

Für essentielle DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt über JavaScript in CSS-Animationen einzugreifen). Den Browser selbst DOM-Animationen durchführen zu lassen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, beispielsweise das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell für das effiziente und konsistente Handling von Animationsbildern entwickelt, um ein reibungsloses Benutzererlebnis zu gewährleisten. Das grundlegende Muster sieht so aus:

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

Sie finden eine gute Einführung in Canvas-Animationen unter [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations), und ein tiefergehendes Beispiel unter [Objektaufbau Praxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Sie finden auch eine vollständige Reihe von Canvas-Tutorials im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignis-Performance

Ereignisse können teuer für den Browser sein, um sie zu verfolgen und zu behandeln, besonders wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Während sich die Maus im Canvas befindet, möchten Sie ständig die Mausbewegung und die Cursorposition überwachen und den Spielstatus aktualisieren — einschließlich des Punktestands, der Zeit, der Position aller Sprites, der Kollisionsdetektionsinformationen usw. Sobald das Spiel vorbei ist, benötigen Sie all das nicht mehr, und tatsächlich wäre es eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu lauschen.

Es ist daher eine gute Idee, nicht mehr benötigte Ereignis-Listener zu entfernen. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) geschehen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wann immer möglich, Ereignis-Delegation zu verwenden. Wenn Sie einen Code haben, der als Antwort auf die Interaktion eines Benutzers mit einem von vielen untergeordneten Elementen ausgeführt werden soll, können Sie das Ereignis auf deren Eltern-Element setzen. Ereignisse, die auf einem untergeordneten Element ausgelöst werden, steigen zu ihrem Elternteil auf, sodass Sie das Ereignis nicht auf jedem untergeordneten Element individuell setzen müssen. Weniger zu verfolgende Ereignis-Listener bedeuten eine bessere Performance.

Siehe [Ereignis-Delegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps für effizientere Code-Schreibung

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter machen.

- **Reduzieren Sie DOM-Manipulationen**: Der Zugriff auf und das Aktualisieren des DOM ist rechenintensiv, daher sollten Sie dies minimieren, insbesondere bei ständigem DOM-Animation (siehe oben [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen)).
- **Batchen Sie DOM-Änderungen**: Für essentielle DOM-Änderungen sollten Sie diese in Gruppen zusammenfassen, die gemeinsam erfolgen, anstatt jede einzelne Änderung bei ihrem Auftreten auszulösen. Dies kann die tatsächliche Arbeitslast des Browsers reduzieren, aber auch die wahrgenommene Performance verbessern. Es kann die Benutzeroberfläche flüssiger erscheinen lassen, mehrere Updates gleichzeitig durchzuführen, anstatt ständig kleine Updates vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie ein großes HTML-Fragment zur Seite hinzufügen möchten, erstellen Sie das gesamte Fragment zuerst (typischerweise in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen Sie es dann in einem Schritt dem DOM hinzu, anstatt jeden Artikel separat hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihre DOM-Struktur ist, desto schneller kann sie mit JavaScript abgerufen und manipuliert werden. Überlegen Sie genau, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind kostspielig, also reduzieren Sie die Verwendung von Schleifen in Ihrem Code so weit wie möglich. In Fällen, in denen Schleifen unvermeidbar sind:

  - Vermeiden Sie die Durchführung der vollständigen Schleife, wenn dies nicht erforderlich ist, und verwenden Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen nach Bedarf. Wenn Sie beispielsweise Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife beenden, sobald der Name gefunden wurde; es besteht keine Notwendigkeit, weitere Schleifendurchläufe durchzuführen:

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

  - Machen Sie Arbeiten, die nur einmal benötigt werden, außerhalb der Schleife. Dies mag offensichtlich klingen, aber es ist leicht zu übersehen. Nehmen Sie zum Beispiel den folgenden Code-Schnipsel, der ein JSON-Objekt abruft, das Daten enthält, die auf bestimmte Weise verarbeitet werden sollen. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation in jeder Iteration der Schleife durchgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Haupt-Threads aus**: Früher sprachen wir darüber, wie JavaScript im Allgemeinen Aufgaben im Haupt-Thread ausführt, und wie lang andauernde Operationen den Haupt-Thread blockieren können, was potenziell zu einer schlechten UI-Leistung führt. Wir zeigten auch, wie man lang andauernde Aufgaben in kleinere auftaile, um dieses Problem zu mindern. Eine weitere Möglichkeit, solche Probleme zu behandeln, besteht darin, Aufgaben vollständig vom Haupt-Thread zu verlagern. Es gibt ein paar Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde JavaScript, das den Haupt-Thread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei auf dem lokalen Dateisystem oder das Öffnen eines Streams zu einer Webcam eines Benutzers zu behandeln. Da diese Operationen lange dauern könnten, wäre es schlecht, einfach den Haupt-Thread zu blockieren, während wir darauf warten, dass sie abgeschlossen sind. Stattdessen führt der Browser diese Funktionen aus, hält den Haupt-Thread weiter laufen, und diese Funktionen werden Ergebnisse zurückgeben, sobald sie _irgendwann in der Zukunft_ verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, das ist eine JavaScript-Sprachfunktion, die für die Behandlung asynchroner Operationen entwickelt wurde. Es ist möglich, [Ihre eigenen promise-basierten Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie Funktionalität haben, die davon profitieren würde, asynchron ausgeführt zu werden.
  - Führen Sie Berechnungen in Web-Workern aus: [Web-Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der Ihnen erlaubt, einen separaten Thread zu öffnen, um dort ein Stück JavaScript auszuführen, sodass es den Haupt-Thread nicht blockiert. Worker haben einige wesentliche Einschränkungen, die größte davon ist, dass Sie kein DOM-Scripting innerhalb eines Workers durchführen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten an und von dem Haupt-Thread senden und empfangen. Das Hauptanwendungsfeld für Worker ist, wenn Sie viele Berechnungen durchführen müssen und nicht möchten, dass sie den Haupt-Thread blockieren. Führen Sie diese Berechnungen in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es zurück an den Haupt-Thread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern ermöglicht, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, aber es kann sogar bessere Leistungsverbesserungen bieten als Web-Worker.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
