---
title: Erste Schritte mit Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Ember-Artikel schauen wir uns an, wie Ember funktioniert und wofür es nützlich ist, installieren das Ember-Toolset lokal, erstellen eine Muster-App und führen dann einige initiale Konfigurationen durch, um sie bereit für die Entwicklung zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) ist äußerst vorteilhaft, da Ember diese intensiv nutzt.
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

Ember ist ein Komponenten-Service-Framework, das sich auf das gesamte Webanwendungsentwicklungserlebnis konzentriert, indem es triviale Unterschiede zwischen Anwendungen minimiert — und das alles als moderne und leichtgewichtige Schicht auf der nativen JavaScript-Basis. Ember bietet auch immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu helfen, mit den neuesten Ember-Versionen und neuesten gemeinschaftsgetriebenen Konventionen Schritt zu halten.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup — ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Service-Seite bietet langlebige geteilte Zustände, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Services bilden den Großteil jeder EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut zum Erstellen von Apps, die eines oder beide der folgenden Merkmale aufweisen möchten:

- Single-Page-Anwendungen, einschließlich nativer Web-Apps und [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung bildet.

- Erhöhung des Zusammenhalts zwischen den Technologie-Stapeln vieler Teams
  - Gemeinschaftsunterstützte „Best Practices“ ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember verfügt über klare Konventionen, die nützlich sind, um Konsistenz zu gewährleisten und Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS verfügt über eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können, um zusätzliche Funktionalität ohne viel oder gar keine Konfiguration bereitzustellen.

Beispiele sind:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketing-Inhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogposts in Markdown, während mit PREmber für SEO optimiert wird.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App auf Mobilgeräten installiert werden kann, genau wie Apps aus dem jeweiligen App-Store des Geräts.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps verwendet werden, mit einer nativen-mobile Brücke zu JavaScript, wie sie von [Corber](http://corber.io/) bereitgestellt wird.

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks überhaupt. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu erhöhen, auf Kosten des Lernens dieser Konventionen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diesen Konventionen zugrunde liegen, die banalen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, in jeder Sprache und jedem Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu erlernen zu müssen.

Während Sie diese Tutorial-Serie durchlaufen, werden Sie Embers Meinungen bemerken — wie strenge Namenskonventionen für Komponenten-Dateien.

## Wie verhält sich Ember zu Vanilla JavaScript?

Ember ist auf JavaScript-Technologien aufgebaut und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während Entwicklern weiterhin [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zur Verfügung stehen.

Ember verwendet zwei Hauptsyntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die ansonsten nicht möglich wären. Am wichtigsten ist, dass sie eine Obermenge von HTML ist — was bedeutet, dass jeder, der HTML kennt, mit minimaler Angst vor Codeproblemen sinnvolle Beiträge zu jedem Ember-Projekt leisten kann. Designer und andere Nicht-Entwickler können ohne jegliche JavaScript-Kenntnisse zu Seitentemplates beitragen, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Pakete durch das _Kompilieren_ der Vorlagen in einen „Bytecode“, der schneller als JavaScript geparst werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Change-Tracking, ohne dass ein gecachtes virtuelles Abbild verwaltet und verglichen werden muss (was ein häufiger Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM gibt es im GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere könnten [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten der „Framework“-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, bei denen jeder Typ von _Sache_ einen anderen Zweck und einen anderen zu erwartenden Speicherort innerhalb Ihres Projekts hat.

Hier eine Demonstration des Einflusses, den Ember auf den JavaScript-Code in typischen Projekten hat:
[Gavin demonstriert, wie unter 20% des geschriebenen JS spezifisch für Ember ist](https://x.com/gavinjoyce/status/1174726713101705216).

![ein Satz von Code-Dateien mit dem spezielleren JavaScript von Ember hervorgehoben, das zeigt, dass nur 20% des Ember-Codes Ember-spezifisch ist](20percent-js-specific-ember.png)

## Erste Schritte

Der Rest des hier gefundenen Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen, wobei Sie lernen, wie Sie die wesentlichen Elemente des Ember-Frameworks nutzen. TodoMVC ist eine grundlegende To-Do-Verfolgungs-App, die in vielen verschiedenen Technologien implementiert wurde.

[Hier ist die abgeschlossene Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/), als Referenz.

### Ein Hinweis zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme hinsichtlich der Einhaltung zugänglicher/standardmäßiger Webpraktiken. Zu diesem Thema gibt es einige offene GitHub-Issues in der TodoMVC-Projektfamilie:

- [Tastaturzugang zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline auf fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember legt großen Wert darauf, von vornherein zugänglich zu sein, und es gibt einen [ganzen Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/) darüber, was Barrierefreiheit für Website-/App-Design bedeutet.

Das gesagt, weil dieses Tutorial den Fokus auf die JavaScript-Seite zur Erstellung einer kleinen Webanwendung legt, liegt der Wert von TodoMVC darin, vorgefertigtes CSS und eine empfohlene HTML-Struktur bereitzustellen, die kleine Unterschiede zwischen Implementierungen beseitigen und einen einfacheren Vergleich ermöglichen. Später im Tutorial konzentrieren wir uns darauf, unserer Anwendung Code hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI)-Tool zum Erstellen und Gerüsterstellen von Teilen Ihrer Anwendung.

1. Sie benötigen Node.js und npm installiert, bevor Sie ember-cli installieren können. [Gehen Sie hier hin, um herauszufinden, wie Sie Node.js und npm installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie sie noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal zur Verfügung, mit dem Sie Ihre Anwendung erstellen, entwickeln, testen und gerüsten können (geben Sie `ember --help` ein, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dadurch wird ein neues Verzeichnis im aktuellen Verzeichnis erstellt, in dem Sie sich befinden, namens todomvc, das das Grundgerüst für eine neue Ember-App enthält. Vergewissern Sie sich, dass Sie sich an einer geeigneten Stelle im Terminal befinden, bevor Sie es ausführen. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies erzeugt eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig folgende Funktionen bietet:

- Entwicklungsserver mit Live-Neuladen.
- Plugin-Architektur, die es Drittanbieter-Paketen ermöglicht, Ihre Anwendung umfassend zu verbessern.
- Der neueste JavaScript-Standard über Babel- und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilation und Minifikation von sowohl CSS als auch JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (ermöglicht ein einfacheres mentales Kontextwechseln).

## Vorbereitung auf den Bau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiterarbeiten können. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden, wie Sie verschiedene Editoren einrichten können.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, die wir gleich durchführen werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, aber sie ermöglicht es uns, vorhandenes gemeinsames CSS zu verwenden, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Styles zu erstellen.

1. Gehen Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, indem Sie z. B. `cd todomvc` auf macOS/Linux verwenden.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihrer App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Finden Sie als Nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root) und öffnen Sie sie in Ihrem ausgewählten Code-Editor. ember-cli-build.js ist verantwortlich für die Konfiguration von Details darüber, wie Ihr Projekt gebaut wird — einschließlich des Bündelns all Ihrer Dateien, der Asset-Minifikation und der Erstellung von Source-Maps — mit vernünftigen Standardeinstellungen, sodass Sie sich normalerweise keine Gedanken über diese Datei machen müssen.

   Wir werden jedoch Zeilen in die ember-cli-build.js-Datei einfügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne dass wir sie explizit [`@import`](/de/docs/Web/CSS/@import) in die `app.css`-Datei einfügen müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

4. Suchen Sie in `ember-cli-build.js` nach folgendem Code:

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

   Für weitere Informationen darüber, was `ember-cli-build.js` macht, und für andere Möglichkeiten, wie Sie Ihren Build / Ihre Pipeline anpassen können, haben die Ember-Leitfäden eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der vom `todomvc-app-css`-npm-Paket bereitgestellten Styles, sodass der Tastaturfokus sichtbar bleibt. Dies trägt dazu bei, einen der großen Barrierefreiheitsnachteile der Standard-TodoMVC-App zu beheben.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte eine Ausgabe liefern, die der folgenden ähnelt:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver startet bei `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um zu überprüfen, wie Ihre Arbeit bisher aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten als unter macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bisher so gut. Wir sind so weit gekommen, dass wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns mit dem Aufbau der Markup-Struktur unserer App als Gruppe logischer Komponenten beschäftigen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
