---
title: JavaScript-Leistungsoptimierung
slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 2503df3c1d544137d75ed8d5d986bd120de06783
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

Es ist sehr wichtig, zu berücksichtigen, wie Sie JavaScript auf Ihren Websites verwenden, und darüber nachzudenken, wie Sie eventuell entstehende Leistungsprobleme abmildern können. Während Bilder und Videos über 70% der heruntergeladenen Bytes für die durchschnittliche Website ausmachen, hat JavaScript byteweise ein größeres Potenzial für negative Leistungsbeeinträchtigung — es kann die Downloadzeiten, die Rendering-Leistung sowie die CPU- und Batterieauslastung erheblich beeinflussen. Dieser Artikel führt Tipps und Techniken zur Optimierung von JavaScript ein, um die Leistung Ihrer Website zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Erlernen der Auswirkungen von JavaScript auf die Webleistung
        und wie man damit verbundene Probleme mindert oder behebt.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres Codes beginnen, lautet: "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind bewährte Vorgehensweisen, die jedes Webprojekt verbessern, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dafür müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten zur Leistungsüberprüfung, einige davon unter Verwendung ausgefeilter [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, Werkzeuge wie die eingebauten [Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Leistungswerkzeuge](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) zu verwenden, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Optimierung der JavaScript-Downloads

Das performanteste, am wenigsten blockierende JavaScript, das Sie verwenden können, ist solches, das Sie überhaupt nicht verwenden. Sie sollten so wenig JavaScript wie möglich verwenden. Einige Tipps, die Sie beachten sollten:

- **Sie brauchen nicht immer ein Framework**: Möglicherweise sind Sie mit der Verwendung eines [JavaScript-Frameworks](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) vertraut. Wenn Sie erfahren und sicher im Umgang mit diesem Framework sind und alle bereitgestellten Werkzeuge mögen, könnte es Ihr bevorzugtes Werkzeug für den Aufbau der meisten Projekte sein. Frameworks sind jedoch JavaScript-intensiv. Wenn Sie eine eher statische Erfahrung mit wenigen JavaScript-Anforderungen erstellen, benötigen Sie dieses Framework wahrscheinlich nicht. Möglicherweise können Sie das, was Sie brauchen, mit ein paar Zeilen Standard-JavaScript implementieren.
- **Erwägen Sie eine einfachere Lösung**: Vielleicht haben Sie eine auffällige, interessante Lösung zu implementieren, aber überlegen Sie, ob Ihre Benutzer sie zu schätzen wissen. Würden sie etwas Einfacheres bevorzugen?
- **Unbenutzten Code entfernen:** Das mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, ungenutzte Funktionen zu bereinigen, die während des Entwicklungsprozesses hinzugefügt wurden. Sie müssen vorsichtig und überlegt damit umgehen, was hinzugefügt und entfernt wird. Jeder Skript wird geparst, ob er verwendet wird oder nicht; daher wäre ein schneller Gewinn, die Downloads zu beschleunigen, jegliche ungenutzte Funktionalität zu entfernen. Berücksichtigen Sie auch, dass Sie oft nur einen kleinen Teil der Funktionalität verwenden, die in einem Framework verfügbar ist. Ist es möglich, ein benutzerdefiniertes Build des Frameworks zu erstellen, das nur den benötigten Teil enthält?
- **Erwägen Sie eingebaute Browser-Funktionen**: Es könnte sein, dass Sie eine Funktion verwenden können, die der Browser bereits hat, anstatt Ihre eigene mit JavaScript zu erstellen. Zum Beispiel:
  - Verwenden Sie [eingebaute clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Verwenden Sie den eigenen {{htmlelement("video")}}-Player des Browsers.
  - Verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle einer JavaScript-Animationsbibliothek (siehe auch [Umgang mit Animationen](#umgang_mit_javascript-animationen)).

Sie sollten auch Ihr JavaScript in mehrere Dateien unterteilen, die kritische und nicht kritische Teile darstellen. [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) ermöglichen es Ihnen, dies effizienter zu tun als nur durch die Verwendung separater externer JavaScript-Dateien.

Diese kleineren Dateien können Sie dann optimieren. [Minifizierung](/de/docs/Glossary/Minification) reduziert die Anzahl der Zeichen in Ihrer Datei und somit die Anzahl der Bytes oder das Gewicht Ihres JavaScripts. [Gzipping](/de/docs/Glossary/gzip_compression) komprimiert die Datei weiter und sollte auch dann verwendet werden, wenn Sie Ihren Code nicht minifizieren. [Brotli](/de/docs/Glossary/Brotli_compression) ist ähnlich wie Gzip, übertrifft jedoch Gzip-Kompression in der Regel.

Sie können Ihren Code manuell aufteilen und optimieren, aber oft macht ein Modul-Bundler wie [Webpack](https://webpack.js.org/) dies besser.

## Umgang mit Parsing und Ausführung

Bevor wir uns die Tipps in diesem Abschnitt anschauen, ist es wichtig, darüber zu sprechen, _wo_ im Prozess des Browser-Seiten-Renderings JavaScript gehandhabt wird. Wenn eine Webseite geladen wird:

1. Zuerst wird das HTML allgemein analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wann immer CSS auftritt, wird es analysiert, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Web-Schriftarten abgerufen zu werden.
3. Wann immer JavaScript auftritt, analysiert, bewertet und führt der Browser es auf der Seite aus.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden soll, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gezeichnet.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Der entscheidende Schritt hier ist Schritt 3. Standardmäßig blockieren JavaScript-Parsing und Ausführung das Rendering. Das bedeutet, dass der Browser das Parsen von HTML unterbricht, das nach dem JavaScript erscheint, bis das Skript behandelt wurde. Infolgedessen werden auch das Styling und das Zeichnen blockiert. Das bedeutet, dass Sie sorgfältig darüber nachdenken müssen, was Sie herunterladen, aber auch wann und wie dieser Code ausgeführt wird.

Die nächsten Abschnitte bieten nützliche Techniken zur Optimierung des Parsings und der Ausführung Ihres JavaScripts.

## Kritische Assets so früh wie möglich laden

Wenn ein Skript wirklich wichtig ist und Sie befürchten, dass es die Leistung beeinträchtigt, indem es nicht schnell genug geladen wird, können Sie es im {{htmlelement("head")}} des Dokuments laden:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Dies funktioniert gut, blockiert jedoch das Rendering. Eine bessere Strategie besteht darin, [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) zu verwenden, um einen Vorlader für kritisches JavaScript zu erstellen:

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

Mit dem Preload-{{htmlelement("link")}} wird das JavaScript so schnell wie möglich abgerufen, ohne das Rendering zu blockieren. Sie können es dann überall auf Ihrer Seite verwenden:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

oder innerhalb Ihres Skripts, im Fall eines JavaScript-Moduls:

```js
import { function } from "important-module.js";
```

> [!NOTE]
> Vorladen garantiert nicht, dass das Skript geladen ist, wenn Sie es einbinden, aber es bedeutet, dass es früher mit dem Download beginnt. Die Renderblock-Zeit wird dennoch verkürzt, auch wenn sie nicht vollständig entfernt wird.

## Ausführung von nicht kritischem JavaScript aufschieben

Auf der anderen Seite sollten Sie anstreben, das Parsen und die Ausführung von nicht kritischem JavaScript auf einen späteren Zeitpunkt zu verschieben, wenn es benötigt wird. Alles sofort zu laden, blockiert das Rendering unnötigerweise.

Zuerst können Sie das `async`-Attribut zu Ihren `<script>`-Elementen hinzufügen:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript ausgeführt wird, nachdem das Dokument analysiert wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird. Dies hat einen ähnlichen Effekt wie `async`.

Sie könnten auch einfach das JavaScript erst laden, wenn ein Ereignis eintritt, wenn es benötigt wird. Dies könnte beispielsweise durch DOM-Scripting erfolgen:

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

Wenn der Browser Ihr JavaScript ausführt, wird es in Aufgaben organisiert, die sequenziell ausgeführt werden, wie das Durchführen von Netzwerkanfragen, die Handhabung von Benutzerinteraktionen und Eingaben durch Ereignis-Handler, das Ausführen von JavaScript-gesteuerten Animationen usw.

Das meiste davon geschieht im Hauptthread, mit Ausnahmen wie JavaScript, das in [Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) läuft. Der Hauptthread kann immer nur eine Aufgabe gleichzeitig ausführen.

Wenn eine einzelne Aufgabe länger als 50 ms dauert, wird sie als lange Aufgabe eingestuft. Wenn der Benutzer versucht, mit der Seite zu interagieren oder ein wichtiges UI-Update während einer langen Aufgabe angefordert wird, wird seine Erfahrung beeinträchtigt. Eine erwartete Antwort oder visuelles Update wird verzögert, was dazu führt, dass die UI träge oder nicht reagiert.

Um dieses Problem zu mildern, sollten Sie lange Aufgaben in kleinere Aufgaben aufteilen. Dies gibt dem Browser mehr Chancen, wichtige Benutzerinteraktionsverarbeitung oder UI-Rendering-Updates durchzuführen — der Browser kann sie potenziell zwischen jede kleinere Aufgabe einfügen, anstatt nur davor oder danach. In Ihrem JavaScript könnten Sie dies tun, indem Sie Ihren Code in separate Funktionen aufteilen. Dies macht auch aus mehreren anderen Gründen Sinn, wie z.B. einfachere Wartung, Debugging und das Schreiben von Tests.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Hauptthreads. Da alle fünf Funktionen innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige lange Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, eine "yield"-Funktion periodisch auszuführen, um den Code dazu zu bringen, sich dem Hauptthread zurückzugeben. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen denen der Browser die Chance erhält, hochpriorisierte Aufgaben wie das Aktualisieren der UI zu handhaben. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/SetTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um sich nach jeder ausgeführten Aufgabe dem Hauptthread zurückzugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wo verfügbar, um diesem Code zu erlauben, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

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

Animationen können die wahrgenommene Leistung verbessern, da sie Schnittstellen flüssiger erscheinen lassen und den Benutzern das Gefühl vermitteln können, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (z. B. Ladeanimationen). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der offensichtlichste Ratschlag zu Animationen ist, weniger Animationen zu verwenden — nicht wesentliche Animationen zu entfernen oder Benutzern die Möglichkeit geben, sich dafür zu entscheiden, Animationen auszuschalten, wenn sie z. B. ein Gerät mit geringer Leistung oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) soweit wie möglich zu verwenden, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen). Den Browser direkt DOM-Animationen durchführen zu lassen, anstatt inline Styles mit JavaScript zu manipulieren, ist viel schneller und effizienter. Siehe auch [CSS-Leistungsoptimierung > Umgang mit Animationen](/de/docs/Learn/Performance/CSS#handling_animations).

Für Animationen, die nicht in JavaScript gehandhabt werden können, wie z.B. das Animieren eines HTML {{htmlelement("canvas")}}, wird empfohlen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle älterer Optionen wie [`setInterval()`](/de/docs/Web/API/SetInterval) zu verwenden. Die `requestAnimationFrame()`-Methode ist speziell darauf ausgelegt, Animationsrahmen effizient und konsistent zu verarbeiten, für ein reibungsloseres Benutzererlebnis. Das grundlegende Muster sieht so aus:

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

Eine gute Einführung in Canvas-Animationen finden Sie unter [Grafiken zeichnen > Animationen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations) und ein ausführlicheres Beispiel unter [Objekterstellungsübung](/de/docs/Learn/JavaScript/Objects/Object_building_practice). Auch eine vollständige Reihe von Canvas-Tutorials finden Sie im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Optimierung der Ereignisleistung

Ereignisse können teuer für den Browser zu verfolgen und zu handhaben sein, insbesondere, wenn Sie ein Ereignis kontinuierlich ausführen. Zum Beispiel möchten Sie möglicherweise die Position der Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verfolgen, um zu überprüfen, ob sie sich noch innerhalb eines bestimmten Bereichs der Seite befindet:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Möglicherweise führen Sie ein `<canvas>`-Spiel auf Ihrer Seite aus. Während sich die Maus innerhalb des Canvas befindet, möchten Sie ständig die Mausbewegung und die Cursorposition überprüfen und den Spielzustand aktualisieren — einschließlich des Punktestands, der Zeit, der Position aller Sprites, der Kollisionsdetektionsinformationen usw. Sobald das Spiel vorbei ist, benötigen Sie dies alles nicht mehr, und es wird tatsächlich eine Verschwendung von Rechenleistung sein, dieses Ereignis weiterhin abzuhören.

Es ist daher eine gute Idee, Ereignis-Listener zu entfernen, die nicht mehr benötigt werden. Dies kann mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) erledigt werden:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Ein weiterer Tipp ist, wo immer möglich Ereignisdelegierung zu verwenden. Wenn Sie Code haben, der als Reaktion auf die Benutzerinteraktion mit einem von vielen Kindelementen ausgeführt wird, können Sie einen Ereignis-Listener auf ihrem Elternteil setzen. Ereignisse, die auf einem Kindelement ausgelöst werden, steigen zu ihrem Elternteil auf, sodass Sie den Ereignis-Listener nicht für jedes Kind einzeln setzen müssen. Weniger Ereignis-Listener, die verfolgt werden müssen, bedeuten eine bessere Leistung.

Siehe [Ereignisdelegierung](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation) für weitere Details und ein nützliches Beispiel.

## Tipps zum Schreiben effizienterer Codes

Es gibt mehrere allgemeine Best Practices, die dafür sorgen können, dass Ihr Code effizienter läuft.

- **Reduzieren Sie die DOM-Manipulation**: Der Zugriff und das Aktualisieren des DOM ist rechnerisch teuer, daher sollten Sie die Menge, die Ihr JavaScript erledigt, minimieren, insbesondere bei der konstanten DOM-Animation (siehe [Umgang mit JavaScript-Animationen](#umgang_mit_javascript-animationen) oben).
- **Stapeln Sie DOM-Änderungen**: Für notwendige DOM-Änderungen sollten Sie diese in Gruppen zusammenfassen, die zusammen ausgeführt werden, anstatt jede einzelne Änderung bei Auftreten auszuführen. Dies kann die Menge der Arbeit, die der Browser tatsächlich erledigt, reduzieren, verbessert jedoch auch die wahrgenommene Leistung. Die UI kann flüssiger aussehen, wenn mehrere Updates in einem Durchgang erledigt werden, anstatt ständig kleine Updates vorzunehmen. Ein nützlicher Tipp hier ist — wenn Sie ein großes Stück HTML zur Seite hinzufügen möchten, bauen Sie zuerst das gesamte Fragment (typischerweise innerhalb eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)) und hängen es dann in einem Rutsch zum DOM, anstatt jedes Element einzeln hinzuzufügen.
- **Vereinfachen Sie Ihr HTML**: Je einfacher Ihre DOM-Struktur ist, desto schneller kann sie von JavaScript zugegriffen und manipuliert werden. Denken Sie sorgfältig darüber nach, was Ihre UI benötigt, und entfernen Sie unnötigen Ballast.
- **Reduzieren Sie die Menge an Schleifen-Code**: Schleifen sind teuer, daher reduzieren Sie die Menge an Schleifennutzung in Ihrem Code so weit wie möglich. In Fällen, in denen Schleifen unvermeidlich sind:

  - Vermeiden Sie es, die volle Schleife auszuführen, wenn sie nicht erforderlich ist, indem Sie {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisungen wie angemessen verwenden. Wenn Sie zum Beispiel Arrays nach einem bestimmten Namen durchsuchen, sollten Sie die Schleife abbrechen, sobald der Name gefunden wurde; es besteht keine Notwendigkeit, weitere Schleifendurchläufe auszuführen:

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

  - Arbeiten, die nur einmal erforderlich sind, außerhalb der Schleife erledigen. Das mag offensichtlich klingen, wird aber leicht übersehen. Nehmen Sie das folgende Snippet, das ein JSON-Objekt abruft, das auf irgendeine Weise verarbeitet wird. In diesem Fall wird die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation bei jeder Iteration der Schleife ausgeführt, was eine Verschwendung von Rechenleistung ist. Das Abrufen, das nicht von `i` abhängig ist, könnte außerhalb der Schleife verschoben werden, sodass es nur einmal durchgeführt wird.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Führen Sie Berechnungen außerhalb des Hauptthreads aus**: Früher haben wir darüber gesprochen, dass JavaScript im Allgemeinen Aufgaben im Hauptthread ausführt, und wie lange Operationen den Hauptthread blockieren können, was potenziell zu schlechter UI-Leistung führt. Wir haben auch gezeigt, wie lange Aufgaben in kleinere Aufgaben aufgeteilt werden können, um dieses Problem zu mildern. Eine weitere Möglichkeit, solche Probleme zu handhaben, besteht darin, Aufgaben ganz vom Hauptthread zu verlagern. Es gibt mehrere Möglichkeiten, dies zu erreichen:

  - Verwenden Sie asynchronen Code: [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing) ist im Grunde JavaScript, das den Hauptthread nicht blockiert. Asynchrone APIs führen tendieren dazu, Operationen wie das Abrufen von Ressourcen aus dem Netzwerk, den Zugriff auf eine Datei auf dem lokalen Dateisystem oder das Öffnen eines Streams zu einer Webcam des Benutzers durchzuführen. Da diese Operationen lange dauern können, wäre es schlecht, den Hauptthread zu blockieren, während wir auf deren Abschluss warten. Stattdessen führt der Browser diese Funktionen aus, hält den Hauptthread am Laufen für nachstehenden Code, und diese Funktionen werden Ergebnisse zurückgeben, sobald sie zu einem zukünftigen Zeitpunkt verfügbar sind. Moderne asynchrone APIs basieren auf {{jsxref("Promise")}}, das ist eine JavaScript-Sprachfunktion zum Umgang mit asynchronen Operationen. Es ist möglich, [eigene Promise-basierte Funktionen zu schreiben](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API), wenn Sie eine Funktionalität haben, die davon profitieren würde, asynchron ausgeführt zu werden.
  - Führen Sie Berechnungen in Web Workern durch: [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) sind ein Mechanismus, der es Ihnen ermöglicht, einen separaten Thread zu öffnen, um einen JavaScript-Block auszuführen, sodass er den Hauptthread nicht blockiert. Worker haben einige wesentliche Einschränkungen, wobei die größte darin besteht, dass Sie innerhalb eines Workers kein DOM-Scripting durchführen können. Sie können die meisten anderen Dinge tun, und Worker können Nachrichten an den Hauptthread senden und von ihm empfangen. Die Hauptanwendung für Worker besteht darin, dass Sie eine Menge Berechnungen zu erledigen haben und nicht möchten, dass diese den Hauptthread blockieren. Führen Sie diese Berechnungen in einem Worker durch, warten Sie auf das Ergebnis und senden Sie es zurück an den Hauptthread, wenn es fertig ist.
  - **Verwenden Sie WebGPU**: [WebGPU](/de/docs/Web/API/WebGPU_API) ist eine Browser-API, die Webentwicklern ermöglicht, die zugrundeliegende GPU (Graphics Processing Unit) des Systems zu verwenden, um hochleistungsfähige Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können. Es ist ziemlich komplex, kann jedoch noch bessere Leistungsvorteile bieten als Web Worker.

## Siehe auch

- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
