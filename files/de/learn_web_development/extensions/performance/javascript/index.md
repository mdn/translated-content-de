---
title: JavaScript-Leistungsoptimierung
short-title: Performantes JavaScript
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

Es ist sehr wichtig, zu überlegen, wie Sie JavaScript auf Ihren Websites verwenden und wie Sie potenzielle Leistungsprobleme mindern können, die dadurch verursacht werden könnten. Auch wenn Bilder und Videos über 70 % der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript die größere Fähigkeit, negative Leistungsfolgen zu verursachen — es kann die Download-Zeiten, die Rendering-Leistung und die CPU- sowie die Batterienutzung erheblich beeinträchtigen. Dieser Artikel stellt Tipps und Techniken zur Optimierung von JavaScript vor, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Lernen, welche Auswirkungen JavaScript auf die Webleistung hat
        und wie man damit verbundene Probleme mindert oder behebt.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die so gut wie jedem Webprojekt zugutekommen, während manche nur in bestimmten Situationen benötigt werden. Es ist wahrscheinlich unnötig, alle diese Techniken überall anzuwenden, und kann eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten ausgeklügelte [Performance APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie die eingebauten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Leistungs-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge verwendet, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Optimierung des JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist JavaScript, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie benötigen nicht immer ein Framework**: Sie sind möglicherweise mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn_web_development/Core/Frameworks_libraries) vertraut. Wenn Sie Erfahrung und Vertrauen im Umgang mit diesem Framework haben und alle Werkzeuge mögen, die es bietet, könnte es Ihr bevorzugtes Werkzeug zum Erstellen der meisten Projekte sein. Frameworks sind jedoch JavaScript-lastig. Wenn Sie eine recht statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework wahrscheinlich nicht. Sie könnten in der Lage sein, das, was Sie benötigen, mit nur wenigen Zeilen Standard-JavaScript zu implementieren.
- **Bedenken Sie eine einfachere Lösung**: Sie könnten eine auffällige, interessante Lösung implementieren wollen, aber überlegen Sie, ob Ihre Nutzer dies schätzen werden. Würden sie etwas Einfacheres bevorzugen?
- **Entfernen Sie ungenutzten Code:** Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen vorsichtig und überlegt sein, was hinzugefügt und entfernt wird. Alle Skripte werden geparst, egal ob sie verwendet werden oder nicht. Daher wäre ein schneller Gewinn zur Beschleunigung von Downloads, nicht genutzte Funktionen loszuwerden. Berücksichtigen Sie auch, dass Sie oft nur einen kleinen Teil der verfügbaren Funktionen in einem Framework verwenden. Ist es möglich, ein benutzerdefiniertes Build des Frameworks zu erstellen, das nur die Teile enthält, die Sie benötigen?
- **Berücksichtigen Sie integrierte Browserfunktionen**: Es könnte sein, dass Sie eine Funktion verwenden können, die der Browser bereits hat, anstatt sie über JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebettete clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Animationen handhaben](#umgang_mit_javascript-animationen)).

Sie sollten Ihr JavaScript auch in mehrere Dateien aufteilen, die kritische und nicht kritische Teile repräsentieren. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) erlauben es Ihnen, dies effizienter zu tun als nur separate externe JavaScript-Dateien zu verwenden.

Dann können Sie diese kleineren Dateien optimieren. {{Glossary("Minification", "Minifizierung")}} reduziert die Anzahl der Zeichen in Ihrer Datei und damit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. {{Glossary("Gzip_compression", "Gzipping")}} komprimiert die Datei weiter und sollte verwendet werden, selbst wenn Sie Ihren Code nicht minifizieren. {{Glossary("Brotli_compression", "Brotli")}} ist ähnlich wie Gzip, übertrifft jedoch im Allgemeinen Gzip-Kompression.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft erledigt ein Modul-Bundler wie [webpack](https://webpack.js.org/) dies besser.

## Umgang mit Parsing und Ausführung

Bevor wir uns mit den Tipps in diesem Abschnitt beschäftigen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browser-Seitenrenderings JavaScript behandelt wird. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Jedes Mal, wenn CSS angetroffen wird, wird es geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit werden verknüpfte Assets wie Bilder und Web-Schriften abgerufen.
3. Jedes Mal, wenn JavaScript angetroffen wird, wird es vom Browser geparst, ausgewertet und gegen die Seite ausgeführt.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element gestylt werden sollte, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der Schlüsselschritt hier ist Schritt 3. Standardmäßig sind JavaScript-Parsing und -Ausführung renderblockierend. Das bedeutet, dass der Browser die Verarbeitung jeglichen HTML-Codes, der nach dem JavaScript erscheint, solange blockiert, bis das Skript bearbeitet wurde. Infolgedessen werden auch Styling und Darstellung blockiert. Das bedeutet, dass Sie sorgfältig überlegen müssen, nicht nur, was Sie herunterladen, sondern auch, wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsens und der Ausführung Ihres JavaScripts.

## Laden kritischer Ressourcen so schnell wie möglich

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung beeinträchtigt, weil es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Das funktioniert gut, ist aber renderblockierend. Eine bessere Strategie ist es, [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zu verwenden, um einen Vorlader für kritisches JavaScript zu erstellen:

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

Der Preload {{htmlelement("link")}} holt das JavaScript so schnell wie möglich, ohne die Darstellung zu blockieren. Sie können es dann überall dort verwenden, wo Sie es auf Ihrer Seite wollen:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder in Ihrem Skript, im Fall eines JavaScript-Moduls:

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> Vorladen garantiert nicht, dass das Skript geladen ist, sobald Sie es einbinden, aber es bedeutet, dass es früher heruntergeladen wird. Die renderblockierende Zeit wird dadurch immer noch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Verschieben der Ausführung von nicht-kritischem JavaScript

Andererseits sollten Sie das Parsen und die Ausführung von nicht-kritischem JavaScript auf später verschieben, wenn es benötigt wird. Alles direkt zu laden, blockiert die Darstellung unnötig.

Zuerst können Sie das Attribut `async` zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dadurch wird das Skript parallel zum DOM-Parsing abgerufen, sodass es gleichzeitig bereit ist und die Darstellung nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments ausgeführt wird, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird. Dies hat einen ähnlichen Effekt wie `async`.

Sie könnten auch einfach das JavaScript überhaupt nicht laden, bis ein Ereignis auftritt, bei dem es benötigt wird. Dies könnte über DOM-Scripting geschehen, zum Beispiel:

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

## Aufteilen von langen Aufgaben

Wenn der Browser Ihr JavaScript ausführt, organisiert er das Skript in Aufgaben, die sequenziell ausgeführt werden, wie das Ausführen von Fetch-Anfragen, das Steuern von Benutzerinteraktionen und Eingaben durch Event-Handler, das Ausführen von JavaScript-gesteuerter Animation und so weiter.

Die meisten davon laufen im Haupt-Thread, mit Ausnahmen einschließlich JavaScript, das in [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) läuft. Der Haupt-Thread kann nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms benötigt, um ausgeführt zu werden, wird sie als lange Aufgabe klassifiziert. Wenn der Nutzer versucht, mit der Seite zu interagieren, oder eine wichtige Benutzeroberflächen-Aktualisierung angefordert wird, während eine lange Aufgabe ausgeführt wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelle Aktualisierung wird verzögert, was dazu führt, dass die Benutzeroberfläche träge oder unempfindlich erscheint.

Um dieses Problem zu mildern, müssen Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Gelegenheiten, wichtige Benutzerinteraktions-Handhabungen oder UI-Rendering-Aktualisierungen durchzuführen — der Browser kann sie potenziell zwischen jeder kleineren Aufgabe ausführen, statt nur davor oder danach. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie z.B. einfacherer Wartung, Debugging und Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Haupt-Threads. Da alle fünf Funktionen in einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige lange Aufgabe aus.

Um dies zu bewältigen, tendieren wir dazu, regelmäßig eine "yield"-Funktion auszuführen, um den Code dazu zu bringen, dem Haupt-Thread _nachzugeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu handhaben. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yieldFunc() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters verwendet werden, um dem Haupt-Thread nach jeder ausgeführten Aufgabe nachzugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) dort verwenden, wo verfügbar, um diesem Code zu erlauben, weiterhin vor anderen weniger kritischen Aufgaben in der Warteschlange ausgeführt zu werden:

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

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (zum Beispiel Lade-Spiralen). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch naturgemäß mehr Verarbeitungsleistung, um bearbeitet zu werden, was die Leistung beeinträchtigen kann.

Der offensichtlichste Animationsrat ist, weniger Animationen zu verwenden — schneiden Sie alle nicht essentiellen Animationen aus oder überlegen Sie, ob Sie Ihren Benutzern eine Präferenz geben, um Animationen auszuschalten, zum Beispiel wenn sie ein Gerät mit geringer Leistung oder ein mobiles Gerät mit begrenzter Batterieleistung verwenden.

Für essentielle DOM-Animationen sollten Sie, wenn möglich, [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) statt JavaScript-Animationen verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Den Browser zu verwenden, um direkt DOM-Animationen auszuführen, anstatt Inline-Stile mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn_web_development/Extensions/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript behandelt werden können, beispielsweise das Animieren eines HTML-{{htmlelement("canvas")}}, sollten Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) statt älterer Optionen wie [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden. Die `requestAnimationFrame()`-Methode ist speziell dafür entwickelt worden, Animationsbilder effizient und konsistent zu handhaben, für eine flüssige Benutzererfahrung. Das Grundmuster sieht folgendermaßen aus:

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

Eine nette Einführung in Canvas-Animationen finden Sie unter [Grafiken zeichnen > Animationen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations) und ein tiefergehendes Beispiel unter [Objektaufbau-Praxis](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice). Sie finden auch eine vollständige Reihe von Canvas-Tutorials im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können für den Browser teuer zu überwachen und zu handhaben sein, insbesondere wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel könnten Sie die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu prüfen, ob sie sich noch in einem bestimmten Bereich der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sie könnten ein `<canvas>`-Spiel auf Ihrer Seite ausführen. Solange sich die Maus im Canvas befindet, möchten Sie ständig Mausbewegungen und Cursorposition überprüfen und den Spielzustand aktualisieren — einschließlich des Punktestands, der Zeit, der Position aller Sprites, Kollisionserkennungsinformationen usw. Sobald das Spiel vorbei ist, benötigen Sie all das nicht mehr, und tatsächlich wäre es eine Verschwendung von Rechenleistung, weiterhin auf dieses Ereignis zu hören.

Es ist daher eine gute Idee, Ereignislistener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erfolgen:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wann immer möglich Ereignisdelegation zu verwenden. Wenn Sie Code haben, der als Antwort auf die Interaktion eines Benutzers mit einem beliebigen der vielen Kindelemente ausgeführt werden soll, können Sie einen Ereignislistener auf deren Eltern setzen. Ereignisse, die auf einem beliebigen Kindelement ausgelöst werden, werden zu ihrem Elternteil hochgebubbelt, sodass Sie den Ereignislistener nicht einzeln auf jedem Kind ansetzen müssen. Weniger zu verfolgende Ereignislistener bedeuten eine bessere Leistung.

Details dazu finden Sie unter [Ereignisdelegation](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation) und ein nützliches Beispiel dazu.

## Tipps zum Schreiben effizienteren Codes

Es gibt mehrere allgemeine Best Practices, die Ihren Code effizienter machen.

- **Reduzieren Sie DOM-Manipulationen**: Das Zugreifen auf und das Aktualisieren des DOM ist rechnerisch aufwändig, daher sollten Sie die Menge an Arbeit minimieren, die Ihr JavaScript damit durchführt, insbesondere beim Ausführen von kontinuierlicher DOM-Animation (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Batch-DOM-Änderungen**: Für wesentliche DOM-Änderungen sollten Sie diese in Gruppen zusammenfassen, die zusammen durchgeführt werden, anstatt jede einzelne Änderung sofort auszuführen. Dies kann die Menge der Arbeit, die der Browser tatsächlich erledigt, reduzieren und auch die wahrgenommene Leistung verbessern. Es kann die Benutzeroberfläche flüssiger aussehen lassen, wenn mehrere Aktualisierungen auf einmal erledigt werden, anstatt ständig kleine Aktualisierungen vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie ein großes Stück HTML auf die Seite hinzufügen müssen, bauen Sie das gesamte Fragment zuerst (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und fügen Sie es dann in einem Zug dem DOM hinzu, anstatt jedes Element einzeln hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihr DOM-Baum ist, desto schneller kann er mit JavaScript zugegriffen und manipuliert werden. Überlegen Sie sorgfältig, was Ihre Benutzeroberfläche benötigt und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind teuer, reduzieren Sie daher die Nutzung von Schleifen in Ihrem Code, wo immer möglich. In Fällen, in denen Schleifen unvermeidlich sind:

  - Vermeiden Sie das vollständige Durchlaufen der Schleife, wenn es unnötig ist, indem Sie {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}}-Anweisungen nach Bedarf verwenden. Wenn Sie beispielsweise Arrays nach einem bestimmten Namen durchsuchen, sollten Sie abbrechen, sobald der Name gefunden wurde; es gibt keinen Grund, weitere Schleifen-Durchläufe auszuführen:

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

  - Arbeiten, die nur einmal benötigt werden, außerhalb der Schleife erledigen. Das mag offensichtlich klingen, ist aber leicht zu übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das Daten enthält, die auf irgendeine Weise verarbeitet werden sollen. In diesem Fall wird der [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang bei jedem Schleifen-Durchlauf durchgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängt, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Haupt-Threads aus**: Früher haben wir darüber gesprochen, wie JavaScript im Allgemeinen Aufgaben auf dem Haupt-Thread ausführt und wie lange Operationen den Haupt-Thread blockieren können, was potenziell zu einer schlechten UI-Leistung führt. Wir haben auch gezeigt, wie langwierige Aufgaben in kleinere Aufgaben unterteilt werden können, um dieses Problem zu mildern. Eine weitere Möglichkeit, solche Probleme zu lösen, besteht darin, Aufgaben vollständig vom Haupt-Thread zu entfernen. Es gibt einige Möglichkeiten, dies zu erreichen:
  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) ist im Grunde JavaScript, das den Haupt-Thread nicht blockiert. Asynchrone APIs neigen dazu, Operationen zu erledigen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei auf dem lokalen Dateisystem oder das Öffnen eines Streams zu einer Benutzer-Webcam. Weil diese Operationen lange dauern könnten, wäre es schlecht, einfach den Haupt-Thread zu blockieren, während wir darauf warten, dass sie abgeschlossen werden. Stattdessen führt der Browser diese Funktionen aus, hält den Haupt-Thread am Laufen und die Funktionen werden Ergebnisse zurückgeben, sobald sie zu einem gewissen Zeitpunkt in der Zukunft verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, einem JavaScript-Sprachmerkmal, das für das Handhaben von asynchronen Operationen entwickelt wurde. Es ist möglich, [eigene, Promise-basierte Funktionen zu schreiben](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), wenn Sie eine Funktionalität haben, die von einer asynchronen Ausführung profitieren würde.
  - Berechnungen in Web-Workern ausführen: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen erlaubt, einen separaten Thread zu öffnen, um dort ein JavaScript-Schnipsel auszuführen, sodass es den Haupt-Thread nicht blockiert. Worker haben einige größere Einschränkungen, die größte davon ist, dass Sie innerhalb eines Workers kein DOM-Scripting durchführen können. Sie können jedoch die meisten anderen Dinge tun und Worker können Nachrichten an den Haupt-Thread senden und von ihm empfangen. Der Hauptanwendungsfall für Worker besteht darin, dass Sie eine Menge Berechnungen durchgeführt werden müssen und Sie nicht möchten, dass sie den Haupt-Thread blockieren. Führen Sie diese Berechnungen in einem Worker aus, warten Sie auf das Ergebnis und senden Sie es zurück an den Haupt-Thread, wenn es bereit ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die es Webentwicklern erlaubt, das zugrunde liegende System-GPU (Graphics Processing Unit) zu verwenden, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch bessere Leistungsgewinne bieten als Web-Worker.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
