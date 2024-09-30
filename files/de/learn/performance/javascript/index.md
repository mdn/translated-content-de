---
title: JavaScript-Performanceoptimierung
slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 2503df3c1d544137d75ed8d5d986bd120de06783
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

Es ist sehr wichtig, darüber nachzudenken, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie eventuelle Leistungsprobleme mindern können, die dadurch verursacht werden könnten. Während Bilder und Videos über 70 % der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript pro Byte ein größeres Potenzial für negative Leistungseinflüsse — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Akkunutzung erheblich beeinträchtigen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse der
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Die Auswirkungen von JavaScript auf die Web-Performance zu lernen
        und wie damit verbundene Probleme gemindert oder behoben werden können.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, ist: „Was muss ich optimieren?“ Einige der unten diskutierten Tipps und Techniken sind bewährte Praktiken, die fast jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Webseite messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon erfordern anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie eingebaute Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools)Tools verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung von JavaScript-Downloads

Das effizienteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Sie sind möglicherweise mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) vertraut. Wenn Sie mit der Verwendung dieses Frameworks erfahren und sicher sind und alle damit bereitgestellten Tools mögen, könnte es Ihr bevorzugtes Werkzeug für die meisten Projekte sein. Frameworks sind jedoch JavaScript-intensiv. Wenn Sie ein relativ statisches Erlebnis mit nur wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das, was Sie benötigen, mit ein paar Zeilen Standard-JavaScript umsetzen.
- **Erwägen Sie eine einfachere Lösung**: Vielleicht haben Sie eine auffällige, interessante Lösung zur Implementierung, aber überlegen Sie, ob Ihre Benutzer sie zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler es vergessen, ungenutzte Funktionen, die während des Entwicklungsprozesses hinzugefügt wurden, zu bereinigen. Sie müssen vorsichtig sein und die hinzugefügten und entfernten Inhalte sorgfältig auswählen. Alle Skripte werden analysiert, unabhängig davon, ob sie verwendet werden oder nicht; daher wäre ein schneller Gewinn zur Beschleunigung der Downloads, jede nicht genutzte Funktionalität zu entfernen. Überlegen Sie auch, dass Sie oft nur einen kleinen Teil der Funktionalität eines Frameworks verwenden. Ist es möglich, ein benutzerdefiniertes Build des Frameworks zu erstellen, das nur den benötigten Teil enthält?
- **Erwägen Sie eingebaute Browser-Funktionen**: Möglicherweise können Sie eine Funktion verwenden, die der Browser bereits hat, anstatt Ihre eigene über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie die [eingebaute clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien aufteilen, die kritische und nicht-kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen Ihnen dies effizienter als nur mit separaten externen JavaScript-Dateien.

Dann können Sie diese kleineren Dateien optimieren. [Minifizierung](/de/docs/Glossary/Minification) reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. [Gzipping](/de/docs/Glossary/gzip_compression) komprimiert die Datei weiter und sollte verwendet werden, selbst wenn Sie Ihren Code nicht minifizieren. [Brotli](/de/docs/Glossary/Brotli_compression) ist ähnlich wie Gzip, übertrifft jedoch im Allgemeinen die Gzip-Komprimierung.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modulbündler wie [Webpack](https://webpack.js.org/) diese Aufgabe besser.

## Umgang mit Parsing und Ausführung

Bevor wir uns die in diesem Abschnitt enthaltenen Tipps ansehen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Renderns von Browserseiten JavaScript verarbeitet wird. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS gefunden wird, wird es analysiert, um zu verstehen, welche Stile auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Web-Schriftarten, geladen zu werden.
3. Wann immer JavaScript gefunden wird, parsifiziert, bewertet und führt der Browser es gegen die Seite aus.
4. Etwas später arbeitet der Browser aus, wie jedes HTML-Element gestylt werden sollte, unter Berücksichtigung des angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was geschieht, aber es gibt Ihnen eine Vorstellung.

Der entscheidende Schritt ist hier Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung renderblockierend. Das bedeutet, dass der Browser das Parsing von HTML blockiert, das nach dem Auftreten des JavaScripts erscheint, bis das Skript behandelt wurde. Infolgedessen werden auch Styling und Painting blockiert. Das bedeutet, dass Sie sorgfältig darüber nachdenken müssen, was Sie herunterladen, aber auch, wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsings und der Ausführung Ihres JavaScripts.

## Kritische Assets so schnell wie möglich laden

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert zwar, blockiert jedoch das Rendering. Eine bessere Strategie ist die Verwendung von [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), um einen Preloader für kritisches JavaScript zu erstellen:

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

oder in Ihrem Skript, im Fall eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Preloading garantiert nicht, dass das Skript geladen wird, wenn Sie es einbinden, aber es bedeutet, dass es früher zu laden beginnt. Die renderblockierende Zeit wird dennoch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführung von nicht-kritischem JavaScript verzögern

Andererseits sollten Sie darauf abzielen, das Parsing und die Ausführung von nicht-kritischem JavaScript auf später zu verschieben, wenn es benötigt wird. Das Laden davon im Voraus blockiert das Rendering unnötigerweise.

Zunächst können Sie das Attribut `async` zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Sie könnten das JavaScript auch einfach gar nicht laden, bis ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte beispielsweise über DOM-Scripting erfolgen:

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

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die nacheinander ausgeführt werden, wie etwa das Durchführen von Fetch-Anfragen, die Steuerung von Benutzerinteraktionen und -eingaben über Event Handler, das Ausführen von JavaScript-gesteuerten Animationen und dergleichen.

Das meiste davon geschieht im Hauptthread, mit Ausnahmen einschließlich JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird. Der Hauptthread kann jeweils nur eine Aufgabe ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Benutzer versucht, während einer langen Aufgabe mit der Seite zu interagieren oder ein wichtiges UI-Update angefordert wird, wird sein Erlebnis beeinträchtigt. Eine erwartete Antwort oder eine visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche schleppend oder nicht reagiert erscheint.

Um dieses Problem zu mindern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Gelegenheiten, wichtige Benutzerinteraktionsbehandlungen oder UI-Rendering-Updates durchzuführen — der Browser kann sie möglicherweise zwischen jede kleinere Aufgabe ausführen, anstatt nur vor oder nach der langen Aufgabe. In Ihrem JavaScript könnten Sie dies durch Aufteilen Ihres Codes in separate Funktionen tun. Dies macht auch aus verschiedenen anderen Gründen Sinn, wie einfachere Wartung, Debugging und Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht das Blockieren des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine lang andauernde Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, periodisch eine "yield"-Funktion auszuführen, um den Code dazu zu bringen, dem Hauptthread _nachzugeben_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt ist, zwischen deren Ausführung der Browser die Gelegenheit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/SetTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster wie folgt verwendet werden, um dem Hauptthread nach der Ausführung jeder Aufgabe nachzugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um zu erlauben, dass dieser Code weiterhin vor anderen weniger kritischen Aufgaben in der Warteschlange ausgeführt wird:

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

Animationen können die wahrgenommene Performance verbessern, indem sie Benutzeroberflächen schneller wirken lassen und Benutzern das Gefühl geben, dass Fortschritte erzielt werden, wenn sie darauf warten, dass eine Seite geladen wird (z. B. Ladeanimationen). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungsleistung, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag in Bezug auf Animationen besteht darin, weniger Animationen zu verwenden — verzichten Sie auf nicht wesentliche Animationen oder erwägen Sie, Ihren Benutzern eine Präferenz zu geben, um Animationen zu deaktivieren, beispielsweise wenn sie ein Gerät mit geringer Leistung oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo immer dies möglich ist, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Den Browser zu verwenden, um direkt DOM-Animationen durchzuführen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Performanceoptimierung > Umgang mit Animationen](/de/docs/Learn/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, zum Beispiel das Animieren eines HTML-{{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`setInterval()`](/de/docs/Web/API/SetInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell dazu ausgelegt, Animationsframes effizient und konsistent zu handhaben, um eine reibungslose Benutzererfahrung zu gewährleisten. Das grundlegende Muster sieht so aus:

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

Eine schöne Einführung zu Canvas-Animationen finden Sie unter [Graphics zeichnen > Animationen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations), und ein detaillierteres Beispiel finden Sie unter [Objektbaupraxis](/de/docs/Learn/JavaScript/Objects/Object_building_practice). Eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können aufwändig für den Browser sein, um sie zu verfolgen und zu handhaben, insbesondere, wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu prüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Vielleicht läuft ein `<canvas>`-Spiel auf Ihrer Seite. Solange die Maus sich innerhalb des Canvas befindet, möchten Sie kontinuierlich Mausbewegungen und die Cursorposition überprüfen und den Spielstatus aktualisieren — inklusive des Punktestands, der Zeit, der Position aller Sprites, der Informationen zur Kollisionserkennung usw. Sobald das Spiel vorbei ist, benötigen Sie all das nicht mehr, und in der Tat wäre es eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu hören.

Es ist daher eine gute Idee, Ereignislistener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wann immer möglich, die Ereignisdelegation zu verwenden. Wenn Sie Code für die Antwort auf Benutzerinteraktionen mit einer von vielen Kind-Elementen ausführen möchten, können Sie einen Ereignislistener auf dem Elternelement festlegen. Ereignisse, die auf einem Kindelement ausgelöst werden, werden zu ihrem Elternteil hochgebubbelt, sodass Sie den Ereignislistener nicht auf jedem Kind einzeln festlegen müssen. Weniger Ereignislistener, die verfolgt werden müssen, bedeuten eine bessere Leistung.

Siehe [Ereignisdelegation](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter laufen lassen werden.

- **Reduzieren Sie DOM-Manipulationen**: Der Zugriff auf und das Aktualisieren des DOM ist rechnerisch aufwendig, daher sollten Sie den Anteil, den Ihr JavaScript macht, minimieren, insbesondere bei permanenten DOM-Animationen (siehe oben [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen)).
- **Batch-DOM-Änderungen**: Für wesentliche DOM-Änderungen sollten Sie sie in Gruppen zusammenfassen, die gleichzeitig durchgeführt werden, anstatt jede einzelne Änderung beim Auftreten abzufeuern. Dies kann die Menge an Arbeit reduzieren, die der Browser in realen Zahlen leistet, und auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche flüssiger erscheinen lassen, mehrere Updates auf einmal zu erledigen, anstatt ständig kleine Aktualisierungen vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie einen großen HTML-Block zur Seite hinzufügen müssen, erstellen Sie zuerst das gesamte Fragment (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen Sie es dann in einem Rutsch in das DOM ein, anstatt jedes Element einzeln anzuhängen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller wird er mit JavaScript erreicht und manipuliert. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge des Schleifencodes**: Schleifen sind aufwendig, daher sollten Sie den Schleifeneinsatz in Ihrem Code so weit wie möglich reduzieren. In Fällen, in denen Schleifen unvermeidbar sind:

  - Vermeiden Sie das Durchlaufen der gesamten Schleife, wenn es unnötig ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden, wie es angebracht ist. Zum Beispiel, wenn Sie Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden ist; es gibt keinen Bedarf, weitere Schleifeniterationen auszuführen:

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

  - Führen Sie Arbeiten, die nur einmal benötigt werden, außerhalb der Schleife aus. Das mag offensichtlich klingen, lässt sich jedoch leicht übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die auf eine bestimmte Weise verarbeitet werden sollen. In diesem Fall wird der [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang bei jeder Iteration der Schleife durchgeführt, was eine Verschwendung von Rechenleistung ist. Der Abruf, der nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass er nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Hauptthreads durch**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben im Hauptthread ausführt und wie lange Vorgänge diesen Hauptthread blockieren können, was möglicherweise zu schlechter UI-Performance führt. Wir haben auch gezeigt, wie diese Aufgaben in kleinere Aufgaben aufgebrochen werden können, um dieses Problem zu mindern. Eine andere Möglichkeit, solche Probleme zu behandeln, besteht darin, Aufgaben komplett vom Hauptthread zu entfernen. Dafür gibt es mehrere Möglichkeiten:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing) ist im Prinzip JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs neigen dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei im lokalen Dateisystem oder das Öffnen eines Streams auf die Webcam des Benutzers zu behandeln. Da diese Operationen lange dauern könnten, wäre es schlecht, den Hauptthread einfach zu blockieren, während wir darauf warten, dass sie abgeschlossen werden. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread weiter für die Ausführung nachfolgender Codes offen, und diese Funktionen geben Ergebnisse zurück, sobald sie _zu irgendeinem Zeitpunkt in der Zukunft_ verfügbar sind. Moderne asynchrone APIs sind {{jsxref("Promise")}}-basiert, was eine JavaScript-Sprachfunktion entwickelt für die Behandlung asynchroner Operationen ist. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), wenn Sie Funktionalität haben, die davon profitieren würde, asynchron ausgeführt zu werden.
  - Berechnungen in Web Workern durchführen: [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der Ihnen erlaubt, einen separaten Thread zu öffnen, um ein JavaScript-Stück darin auszuführen, sodass es den Hauptthread nicht blockiert. Worker haben einige große Einschränkungen, die größte ist, dass Sie kein DOM-Scripting innerhalb eines Workers durchführen können. Sie können jedoch die meisten anderen Dinge tun, und Worker können Nachrichten an den Hauptthread senden und empfangen. Der Hauptanwendungsfall für Worker ist, wenn Sie viele Berechnungen zu erledigen haben und nicht wollen, dass der Hauptthread dadurch blockiert wird. Führen Sie diese Berechnungen in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es an den Hauptthread zurück, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die Webentwicklern ermöglicht, die zugrunde liegende GPU (Graphics Processing Unit) des Systems zu verwenden, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch noch bessere Leistungsverbesserungen als Web Worker bieten.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
