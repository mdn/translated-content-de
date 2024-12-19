---
title: Einstieg in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Artikel zu Ember werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige erste Schritte zur Einrichtung für die Entwicklung vornehmen.

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
          Kenntnisse im Umgang mit dem
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie man Ember installiert und eine Starter-App erstellt.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Service-Framework, das sich auf die gesamte Entwicklungserfahrung von Webanwendungen konzentriert, indem es die trivialen Unterschiede zwischen Anwendungen minimiert — dabei ist es eine moderne und schlanke Schicht über nativem JavaScript. Ember bietet zudem immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Versionen von Ember und den neuesten gemeinschaftsgetriebenen Konventionen auf dem neuesten Stand zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel aus Verhalten, Stil und Markup — ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Dienstseite bietet langlebigen, gemeinsam genutzten Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste machen den Großteil jeder EmberJS-Anwendung aus.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut für die Erstellung von Apps, die eine oder beide der folgenden Eigenschaften aufweisen:

- Single Page Applications, einschließlich nativer webähnlicher Apps und [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung darstellt.

- Erhöhung des Zusammenhalts zwischen den Technologie-Stacks vieler Teams

  - Von der Gemeinschaft unterstützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz zu erzwingen und dabei zu helfen, dass Teammitglieder sich schnell einarbeiten können.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalität bieten, ohne dass viel oder überhaupt keine Konfiguration erforderlich ist.

Beispiele beinhalten:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown, während mit PREmber für SEO optimiert wird.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App auf mobilen Geräten installiert werden kann, genau wie Apps aus dem jeweiligen App-Store des Geräts.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps verwendet werden, indem eine native-mobile Brücke zu JavaScript genutzt wird, wie sie von [Corber](http://corber.io/) bereitgestellt wird.

## Meinungen

EmberJS ist eines der am stärksten von Meinungen geprägten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die helfen, die Effizienz von Entwicklern zu steigern, jedoch auf Kosten der Notwendigkeit, diese Konventionen zu lernen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diesen Konventionen zugrunde liegen, dabei, die unwesentlichen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel unter allen meinungsstarken Frameworks, unabhängig von Sprache und Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die gesamte Architektur, Muster, Konventionen usw. komplett neu lernen zu müssen.

Während Sie diese Reihe von Tutorials durcharbeiten, werden Ihnen die Meinungen von Ember auffallen — wie zum Beispiel strenge Benennungskonventionen von Komponenten-Dateien.

## Wie steht Ember zu Vanilla JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditionellem [objektorientierten Programmieren](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während Entwicklern weiterhin die Nutzung von [funktionalen Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) ermöglicht wird.

Ember verwendet zwei Hauptsyntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird genutzt, um Build- und Laufzeitoptimierungen vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass es sich um eine Obermenge von HTML handelt — was bedeutet, dass jeder, der HTML kennt, bedeutende Beiträge zu jedem Ember-Projekt leisten kann, ohne Angst zu haben, Code zu brechen. Designer und andere Nicht-Entwickler können an Seitentemplates mitarbeiten, ohne JavaScript-Kenntnisse zu haben, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Ladevolumina, da die Templates in einen "Bytecode" kompiliert werden, der schneller als JavaScript geparst werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungs-Tracking, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und differenziert werden muss (was ein häufiger Ansatz ist, um das langsame I/O von DOM-Änderungen zu mildern).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM bietet das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, bei denen jeder Typ von _Ding_ einen anderen Zweck und eine andere erwartete Position innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript hat, das in typischen Projekten vorkommt:
[Gavin Demonstriert wie weniger als 20% des geschriebenen JS spezifisch für Ember ist](https://x.com/gavinjoyce/status/1174726713101705216).

![eine Sammlung von Code-Dateien, bei denen der ember-spezifische JavaScript hervorgehoben ist und zeigt, dass nur 20% des Ember-Codes spezifisch für Ember sind](20percent-js-specific-ember.png)

## Loslegen

Der Rest des hier verfügbaren Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispielanwendung](https://todomvc.com/) erstellen und Ihnen die wesentlichen Funktionen des Ember-Frameworks beibringen. TodoMVC ist eine grundlegende To-Do-Tracking-App, die in vielen verschiedenen Technologien umgesetzt wird.

[Hier ist die fertige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) zur Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme in Bezug auf die Einhaltung von zugänglichen/standardmäßigen Webpraktiken. Es gibt ein paar GitHub-Probleme zu diesem Thema in der TodoMVC-Familie von Projekten:

- [Tastaturzugang zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Kontur auf fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement, standardmäßig zugänglich zu sein, und es gibt einen [kompletten Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was Zugänglichkeit für Webdesigns bedeutet.

Das gesagt, weil sich dieses Tutorial auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung konzentriert, besteht der Wert von TodoMVC darin, vordefiniertes CSS und empfohlene HTML-Strukturen anzubieten, die die kleinen Unterschiede zwischen Implementierungen eliminieren, was einen einfacheren Vergleich ermöglicht. Später im Tutorial konzentrieren wir uns darauf, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI) Tool zum Erstellen und Generieren von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm installiert, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um zu erfahren, wie man node und npm installiert](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie diese noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal zur Verfügung, das verwendet wird, um Ihre Anwendung zu erstellen, zu entwickeln, zu testen und zu generieren (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und deren Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis in dem aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen todomvc, das das Grundgerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie vor dem Ausführen des Befehls an einen geeigneten Ort im Terminal wechseln. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder, unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig die folgenden Funktionen enthält:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieterpaketen ermöglicht, Ihre Anwendung reichhaltig zu erweitern.
- Das neueste JavaScript durch Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt, sodass Sie _wie ein Benutzer testen_ können.
- Transpilation und Minifizierung von sowohl CSS als auch JavaScript für Produktionsversionen.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (die einen einfacheren Wechsel des mentalen Kontextes ermöglichen).

## Vorbereitung zur Erstellung unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt interagieren. Wenn Sie noch keinen konfiguriert haben, hat [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, die wir gleich machen werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, aber sie erlaubt uns, bestehendes gemeinsames CSS zu nutzen, sodass wir nicht raten müssen, welches CSS nötig ist, um die TodoMVC-Stile zu erstellen.

1. Betreten Sie zuerst Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` in macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame TodoMVC-CSS in Ihre App zu laden:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im `todomvc`-Verzeichnis (sie befindet sich direkt im Stammverzeichnis) und öffnen Sie sie in Ihrem gewählten Code-Editor. Ember-cli-build.js ist dafür verantwortlich, Konfigurationsdetails darüber festzulegen, wie Ihr Projekt gebaut wird — einschließlich des gemeinsamen Zusammenfügens aller Dateien, der Minifizierung von Assets und der Erstellung von Sourcemaps — mit vernünftigen Standardwerten, sodass Sie sich normalerweise nicht um diese Datei kümmern müssen.

   Wir werden jedoch Zeilen zur Datei ember-cli-build.js hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, damit sie Teil unseres Builds werden, ohne dass wir sie explizit [`@import`](/de/docs/Web/CSS/@import) in die `app.css`-Datei einfügen müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und aufwendiger einzurichten).

4. Finden Sie in `ember-cli-build.js` den folgenden Code:

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

   Für weitere Informationen dazu, was `ember-cli-build.js` tut, und zu anderen Möglichkeiten, wie Sie Ihren Build/Pipeline anpassen können, finden Sie in den Ember-Leitfäden eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich in `app/styles/app.css` befindet, und fügen Sie dort Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Stile, die von dem npm-Paket `todomvc-app-css` bereitgestellt werden, und ermöglicht somit, dass der Tastaturfokus sichtbar ist. Dies behebt einen der großen Zugänglichkeitsnachteile der Standard-TodoMVC-App.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte Ihnen eine Ausgabe ähnlich der folgenden geben:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver startet unter `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um zu sehen, wie Ihre Arbeit bisher aussieht.

Wenn alles richtig funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bisher so gut. Wir sind an dem Punkt angekommen, an dem wir damit beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns mit dem Aufbau der Markup-Struktur unserer App als eine Gruppe logischer Komponenten befassen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
