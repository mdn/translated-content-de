---
title: Einführung in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige erste Schritte zur Vorbereitung für die Entwicklung unternehmen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a>
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen, Module usw.) ist äußerst vorteilhaft, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Ember installiert und eine Starter-App erstellt.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Service-Framework, das sich auf das gesamte Webanwendungserlebnis konzentriert, um die trivialen Unterschiede zwischen Anwendungen zu minimieren - und das alles, während es eine moderne und leichte Schicht über native JavaScript-Bestandteile bietet. Ember bietet auch immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu helfen, mit den neuesten Ember-Versionen und den neuesten gemeinschaftlich entwickelten Konventionen Schritt zu halten.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup - ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Service-Seite bietet lang anhaltenden gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Dienste bilden den Großteil jeder EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut zum Erstellen von Apps, die eines oder beide der folgenden Merkmale aufweisen möchten:

- Single Page Applications, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Steigerung der Kohäsion unter den Technologiestacks vieler Teams
  - Gemeinschaftlich unterstützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungszeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz zu gewährleisten und neuen Teammitgliedern das schnelle Einarbeiten zu erleichtern.

### Ember mit Add-ons

EmberJS verfügt über eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalität ohne viel, wenn überhaupt, Konfiguration bieten.

Beispiele sind:

- [PREmber](https://github.com/ef4/prember): Statische Website-Renderings für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown und Optimierung für SEO mit PREmber.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App auf mobilen Geräten installiert werden kann, ähnlich wie Apps aus dem jeweiligen App-Store des Geräts.

## Meinungen

EmberJS ist eines der meinungsfreudigsten Frontend-Frameworks überhaupt. Aber was bedeutet es, meinungsfreudig zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die helfen, die Effizienz von Entwicklern zu steigern, indem sie jedoch lernen müssen, diese Konventionen zu verstehen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen untermauern, die unwesentlichen Unterschiede zwischen Apps zu reduzieren - ein gemeinsames Ziel aller meinungsfreudigen Frameworks, egal in welcher Sprache und welchem Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Während Sie diese Serie von Tutorials durcharbeiten, werden Sie die Meinungen von Ember bemerken - wie z.B. strenge Namenskonventionen von Komponenten-Dateien.

## Wie verhält sich Ember zu Vanilla JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über der traditionellen [objektorientierten Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während Entwicklern dennoch ermöglicht wird, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu verwenden.

Ember nutzt zwei Hauptsyntaxen:

- JavaScript (oder optional, [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen zu ermöglichen, die andernfalls nicht möglich wären. Am wichtigsten ist, dass es eine Obermenge von HTML ist – das bedeutet, dass jeder, der HTML kennt, sinnvolle Beiträge zu jedem Ember-Projekt leisten kann, ohne viel Angst zu haben, Code zu brechen. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne Kenntnisse von JavaScript zu haben, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch _Kompilierung_ der Templates in einen "Bytecode", der schneller geparst werden kann als JavaScript. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungstracking, ohne dass eine gecachte virtuelle Darstellung verwaltet und verglichen werden muss (was ein gängiger Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM hat das GitHub-Repository einige [Dokumentation](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) – insbesondere [Referenzen](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validatoren](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _einfach_ JavaScript. Insbesondere JavaScript-Klassen. Hierin kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wo jeder Typ von _Ding_ einen anderen Zweck und eine andere erwartete Position innerhalb Ihres Projekts hat.

Hier ist eine Demonstration der Auswirkungen, die Ember auf das JavaScript hat, das in typischen Projekten vorkommt:
[Gavin demonstriert, wie < 20% des geschriebenen JS spezifisch für Ember ist](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, das zeigt, dass nur 20% des Ember-Codes Ember-spezifisch ist](20percent-js-specific-ember.png)

## Erste Schritte

Der Rest des Materials zu Ember, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen dabei die Grundlagen des Ember-Frameworks lehren. TodoMVC ist eine einfache To-Do-Verfolgungs-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die abgeschlossene Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/), zur Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme in Bezug auf die Einhaltung zugänglicher/Standard-Web-Praktiken. Es gibt ein paar GitHub-Probleme, die bei der TodoMVC-Familie von Projekten dazu offen sind:

- [Tastaturzugriff zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline bei fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember verfolgt ein starkes Bekenntnis, standardmäßig zugänglich zu sein, und es gibt ein [ganzes Kapitel der Ember Guides zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), das erklärt, was Barrierefreiheit für Website- / App-Design bedeutet.

Das gesagt, da sich dieses Tutorial auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung konzentriert, besteht der Wert von TodoMVC darin, vordefinierte CSS und empfohlene HTML-Strukturen bereitzustellen, die kleine Unterschiede zwischen Implementierungen eliminieren und somit einen leichteren Vergleich ermöglichen. Später im Tutorial konzentrieren wir uns darauf, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Command-Line Interface (CLI) Tool zum Erstellen und Gerüsten von Anwendungsbestandteilen.

1. Sie benötigen node und npm installiert, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um zu erfahren, wie Sie node und npm installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie dies noch nicht getan haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, mit dem Sie Ihre Anwendung erstellen, entwickeln, testen und gerüsten können (führen Sie `ember --help` für eine vollständige Liste der Befehle und deren Optionen aus).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, namens todomvc, das das Gerüst für eine neue Ember-App enthält. Achten Sie darauf, sich an einen geeigneten Ort im Terminal zu begeben, bevor Sie es ausführen (gute Vorschläge sind Ihr "Desktop" oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies erzeugt eine produktionsreife Anwendungsentwicklungsumgebung, die standardmäßig folgende Funktionen umfasst:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieter-Paketen ermöglicht, Ihre Anwendung reichhaltig zu erweitern.
- Der neueste JavaScript über Babel- und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilierung und Minimierung von sowohl CSS als auch JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (für einfacheren mentalen Kontextwechsel).

## Vorbereitung auf den Aufbau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiterarbeiten können. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Das Installieren gemeinsamer Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht uns jedoch, bestehende gemeinsame CSS-Dateien zu verwenden, damit wir nicht raten müssen, welches CSS zur Erstellung der TodoMVC-Stile erforderlich ist.

1. Betreten Sie zunächst Ihr `todomvc`-Verzeichnis im Terminal, beispielsweise mit `cd todomvc` in macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame TodoMVC-CSS in Ihre App zu bringen:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als Nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im Verzeichnis todomvc (sie befindet sich direkt im Root-Verzeichnis) und öffnen Sie sie in Ihrem gewählten Code-Editor. ember-cli-build.js ist zuständig für die Konfiguration von Details zum Build-Prozess Ihres Projekts - inklusive Bündelung aller Dateien, Asset-Minimierung und Erstellung von Sourcemaps - mit vernünftigen Standardwerten, sodass Sie sich normalerweise keine Sorgen um diese Datei machen müssen.

   Wir fügen jedoch dem ember-cli-build.js-File Zeilen hinzu, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne dass wir sie explizit {{cssxref("@import")}} in die `app.css`-Datei einfügen müssen (dies würde URL-Umleitungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

4. Finden Sie in `ember-cli-build.js` den folgenden Code:

   ```js
   let app = new EmberApp(defaults, {
     // Add options here
   });
   ```

5. Fügen Sie die folgenden Zeilen unterhalb davon hinzu, bevor Sie die Datei speichern:

   ```js
   app.import("node_modules/todomvc-common/base.css");
   app.import("node_modules/todomvc-app-css/index.css");
   ```

   Für weitere Informationen darüber, was `ember-cli-build.js` tut und für andere Möglichkeiten, wie Sie Ihren Build/Pipeline anpassen können, gibt es in den Ember Guides eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Schließlich finden Sie `app.css`, unter `app/styles/app.css`, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der vom `todomvc-app-css`-npm-Paket bereitgestellten Stile und macht dadurch die Tastaturfokussierung sichtbar. Dies geht teilweise darauf ein, einen der großen Zugänglichkeitsnachteile der Standard-TodoMVC-App zu beheben.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte Ihnen eine Ausgabe geben, die der Folgenden ähnelt:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver startet bei `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um zu sehen, wie Ihre Arbeit bislang aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne das [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten erleben als auf macOS, Linux und Windows _mit_ WSL.

## Zusammenfassung

So weit, so gut. Wir sind an dem Punkt angekommen, an dem wir anfangen können, unsere Beispiel TodoMVC-App in Ember weiter aufzubauen. Im nächsten Artikel werden wir uns ansehen, wie wir die Markup-Struktur unserer App als eine Gruppe von logischen Komponenten aufbauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
