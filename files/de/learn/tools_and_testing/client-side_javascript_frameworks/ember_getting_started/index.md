---
title: Erste Schritte mit Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Einrichtungsschritte durchführen, um sie für die Entwicklung bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>
          vertraut sind und Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module usw.) wird äußerst nützlich sein, da Ember sie stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Ember installiert wird und eine Start-App erstellt wird.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Dienst-Framework, das sich auf das gesamte Webanwendungsentwicklungserlebnis konzentriert und die trivialen Unterschiede zwischen Anwendungen minimiert — und das alles als moderne und leichte Schicht über nativen JavaScript. Ember bietet außerdem immense Abwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu helfen, mit den neuesten Ember-Versionen und den neuesten communitygesteuerten Konventionen Schritt zu halten.

Was bedeutet es, ein Komponenten-Dienst-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup, ähnlich wie sie andere Frontend-Frameworks wie React, Vue und Angular bereitstellen. Die Dienstseite bietet langanhaltenden gemeinsamen Status, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste bilden den Großteil jeder EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut für den Bau von Apps, die eine oder beide der folgenden Eigenschaften anstreben:

- Single Page Applications, einschließlich nativer webähnlicher Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohärenz zwischen den Technologie-Stacks vieler Teams

  - Community-basierte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-Ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-Ons installiert werden können, um zusätzliche Funktionen bereitzustellen, ohne dass viel Konfiguration erforderlich ist.

Beispiele sind:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown, während die SEO-Optimierung mit PREmber erfolgt.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, damit die App auf mobilen Geräten installiert werden kann, genau wie Apps aus dem jeweiligen App-Store des Geräts.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps mit einer nativen mobilen Brücke zu JavaScript verwendet werden, wie etwa der von [Corber](http://corber.io/) bereitgestellten.

## Meinungen

EmberJS ist eines der am meisten meinungsbetonten Frontend-Frameworks. Aber was bedeutet es, meinungsbetont zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz von Entwicklern zu erhöhen, auf Kosten der Notwendigkeit, diese Konventionen zu erlernen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen unterstützen, die einfachen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsbetonten Frameworks, in jeder Sprache und jedem Ökosystem. Entwickler sind dann leichter in der Lage, zwischen Projekten und Anwendungen zu wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Im Verlauf dieser Reihe von Tutorials werden Sie auf Ember's Meinungen stoßen — wie z.B. strikte Benennungskonventionen von Komponenten-Dateien.

## Wie steht Ember in Beziehung zu Vanilla JavaScript?

Ember ist auf JavaScript-Technologien aufgebaut und eine dünne Schicht über dem traditionellen [objektorientierten Programmieren](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming), während es Entwicklern dennoch ermöglicht, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Hauptsyntaxeformen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen zu ermöglichen, die andernfalls nicht möglich wären. Am wichtigsten ist, dass es sich um eine Obermenge von HTML handelt — was bedeutet, dass jeder, der HTML kennt, einen sinnvollen Beitrag zu jedem Ember-Projekt leisten kann, ohne große Angst vor Codefehlern. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne JavaScript-Kenntnisse, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch _Kompilieren_ der Templates in einen "Byte-Code", der schneller geparst werden kann als JavaScript. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungs-Tracking, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und diffed werden muss (was ein häufiger Ansatz zur Minderung des langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM gibt es im GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [Referenzen](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validatoren](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jede Art von _Ding_ einen anderen Zweck und unterschiedliche erwartete Positionierung innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript in typischen Projekten hat:
[Gavin Demonstriert, wie < 20% des geschriebenen JS spezifisch für Ember ist](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, das zeigt, dass nur 20% des Ember-Codes spezifisch für Ember ist](20percent-js-specific-ember.png)

## Erste Schritte

Der Rest des hier gefundenen Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen, und Ihnen dabei beibringen, wie Sie die wesentlichen Funktionen des Ember-Frameworks verwenden. TodoMVC ist eine grundlegende Aufgabenverfolgungs-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die fertiggestellte Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) zur Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme hinsichtlich der Einhaltung zugänglicher/Standard-Webpraktiken. Es gibt einige offene GitHub-Issues zu diesem Thema im TodoMVC-Projekten:

- [Tastaturzugriff zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline auf fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement, standardmäßig zugänglich zu sein, und es gibt einen [ganzen Abschnitt in den Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), der erläutert, was dies für das Design von Websites / Apps bedeutet.

Da dieses Tutorial sich jedoch auf den JavaScript-Teil der Erstellung einer kleinen Webanwendung konzentriert, liegt der Wert von TodoMVC darin, vorgefertigtes CSS und eine empfohlene HTML-Struktur bereitzustellen, die kleine Unterschiede zwischen Implementierungen eliminiert und so einen leichteren Vergleich ermöglicht. Später im Tutorial werden wir uns darauf konzentrieren, unserer Anwendung Code hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Command-Line Interface (CLI)-Tool zum Erstellen und Scaffolding von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm installiert, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um herauszufinden, wie Sie node und npm installieren können](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups), falls Sie sie noch nicht installiert haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, mit dem Sie Ihre Anwendung erstellen, entwickeln, testen und einrichten können (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dadurch wird ein neues Verzeichnis im aktuellen Verzeichnis erstellt, in dem Sie sich befinden, mit dem Namen todomvc, das das Scaffolding für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie in Ihrem Terminal zu einem geeigneten Ort navigieren, bevor Sie es ausführen. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder auf Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Entwicklungsumgebung, die standardmäßig die folgenden Funktionen enthält:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieterpaketen ermöglicht, Ihre Anwendung umfassend zu verbessern.
- Neuestes JavaScript über Babel- und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilation und Minifizierung von sowohl CSS als auch JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (für einfacheren gedanklichen Kontextwechsel).

## Vorbereitung auf den Bau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt interagieren können. Wenn Sie noch keinen konfiguriert haben, hat [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsam genutzten Assets für TodoMVC-Projekte

Die Installation gemeinsam genutzter Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, aber sie ermöglicht es uns, bestehendes gemeinsames CSS zu verwenden, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Gehen Sie zunächst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` unter macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihre App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie dann die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root) und öffnen Sie sie in Ihrem gewählten Code-Editor. ember-cli-build.js ist dafür verantwortlich, Details zur Erstellung Ihres Projekts zu konfigurieren — einschließlich des Bündelns aller Dateien, der Asset-Minifizierung und der Erstellung von Sourcemaps — mit angemessenen Standardeinstellungen, sodass Sie sich normalerweise keine Gedanken über diese Datei machen müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsam genutzten CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne sie explizit in die `app.css`-Datei importieren zu müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

4. Suchen Sie in `ember-cli-build.js` den folgenden Code:

   ```js
   let app = new EmberApp(defaults, {
     // Add options here
   });
   ```

5. Fügen Sie die folgenden Zeilen darunter ein, bevor Sie die Datei speichern:

   ```js
   app.import("node_modules/todomvc-common/base.css");
   app.import("node_modules/todomvc-app-css/index.css");
   ```

   Für weitere Informationen darüber, was `ember-cli-build.js` tut und auf welche anderen Arten Sie Ihre Build-Pipeline anpassen können, haben die Ember-Leitfäden eine Seite über [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Suchen Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie das Folgende ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der vom `todomvc-app-css`-npm-Paket bereitgestellten Stile, sodass die Tastaturfokussierung sichtbar ist. Dies trägt in gewissem Maße dazu bei, einen der großen Zugänglichkeitsnachteile der Standard-TodoMVC-App zu beheben.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte Ihnen eine ähnliche Ausgabe geben wie die folgende:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver wird unter `http://localhost:4200` gestartet, den Sie in Ihrem Browser besuchen können, um zu sehen, wie Ihre Arbeit bisher aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite sehen, die so aussieht:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bisher läuft alles gut. Wir sind an dem Punkt angelangt, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns mit dem Aufbau der Markup-Struktur unserer App als eine Gruppe von logischen Komponenten befassen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
