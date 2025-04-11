---
title: Einstieg in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Ember-Artikel werden wir untersuchen, wie Ember funktioniert und wofür es nützlich ist. Wir installieren die Ember-Toolchain lokal, erstellen eine Beispielanwendung und führen dann einige erste Einrichtungsschritte durch, um die Anwendung für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sein und Kenntnisse im
          Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/der Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis von modernen JavaScript-Funktionen (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember sie intensiv nutzt.
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

Ember ist ein Komponenten-Service-Framework, das sich auf die gesamte Webanwendungsentwicklungs-Erfahrung konzentriert und die trivialen Unterschiede zwischen Anwendungen minimiert — und das alles, während es eine moderne und schlanke Schicht auf nativen JavaScript bleibt. Ember hat zudem eine immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu helfen, mit den neuesten Versionen von Ember und den neuesten Community-getriebenen Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Pakete aus Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks sie bereitstellen, wie React, Vue und Angular. Die Dienstseite bietet einen langlebigen, gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste machen den Großteil jeder EmberJS-Anwendung aus.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut für den Bau von Anwendungen, die entweder oder beide der folgenden Merkmale wünschen:

- Single-Page-Anwendungen, einschließlich webnativer Anwendungen und [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion zwischen den Technologiestacks vieler Teams

  - Community-gestützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklung.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und den Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionen ohne viel oder gar keine Konfiguration bieten.

Beispiele sind:

- [PREmber](https://github.com/ef4/prember): Statische Webseiten-Renderung für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Schreiben von Blogbeiträgen in Markdown, während gleichzeitig für SEO mit PREmber optimiert wird.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, damit die App auf mobilen Geräten wie Apps aus dem jeweiligen App-Store des Geräts installiert werden kann.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps verwendet werden, mittels einer nativen mobilen Brücke zu JavaScript, wie sie von [Corber](http://corber.io/) bereitgestellt wird.

## Meinungen

EmberJS ist eines der am stärksten meinungsbetonten Frontend-Frameworks. Aber was bedeutet es, meinungsbetont zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu steigern, auf Kosten der Notwendigkeit, diese Konventionen zu erlernen. Da diese Konventionen definiert und geteilt werden, helfen die Meinungen, die diesen Konventionen zugrunde liegen, dabei, die trivialen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsbetonten Frameworks in jeder Sprache und jedem Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Während Sie diese Serie von Tutorials durchlaufen, werden Sie die Meinungen von Ember bemerken — wie strikte Namenskonventionen von Komponenten-Dateien.

## Wie steht Ember zu Vanilla JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditionellem [objektorientierten Programmieren](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während es den Entwicklern dennoch erlaubt, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Haupt-Syntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Vorlagensprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Vorlagensprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass sie ein Superset von HTML ist — das bedeutet, dass jede Person, die HTML kennt, sinnvolle Beiträge zu jedem Ember-Projekt leisten kann, ohne Angst haben zu müssen, Code zu brechen. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne JavaScript-Kenntnisse, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Nutzlasten durch _Kompilierung_ der Templates in einen "Bytecode", der schneller geparst werden kann als JavaScript. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Change-Tracking, ohne dass ein gecachtes virtuelles Abbild verwaltet und differenziert werden muss (was ein häufig verwendeter Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM hat das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — speziell [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _einfach nur_ JavaScript. Besonders JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, bei denen jeder Typ von _Ding_ einen anderen Zweck und einen anderen erwarteten Ort innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript hat, das in typischen Projekten ist:
[Gavin demonstriert, wie weniger als 20 % des geschriebenen JS Ember-spezifisch sind](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, was zeigt, dass nur 20 % des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Einstieg

Das restliche Ember-Material hier besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen unterwegs zeigen, wie Sie die wesentlichen Elemente des Ember-Frameworks verwenden. TodoMVC ist eine grundlegende To-do-Tracking-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die abgeschlossene Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme, was die Einhaltung von barrierefreien/Standard-Webpraktiken betrifft. Es gibt einige GitHub-Issues dazu in der TodoMVC-Projektfamilie:

- [Hinzufügen des Tastaturzugriffs zu Demos](https://github.com/tastejs/todomvc/issues/1017)
- [Reaktivierung der Umrissanzeige auf fokussierbaren Elementen](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement für die Standardmäßige Barrierefreiheit und es gibt einen [ganzen Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/) darüber, was es für das Design von Websites/Apps bedeutet.

Da dieses Tutorial jedoch den JavaScript-Teil der Erstellung einer kleinen Webanwendung in den Vordergrund stellt, besteht der Wert von TodoMVC darin, vorgemachtes CSS und empfohlene HTML-Struktur bereitzustellen, was kleine Unterschiede zwischen Implementierungen eliminiert und so den Vergleich erleichtert. Später im Tutorial werden wir uns darauf konzentrieren, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel des TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI) Tool zum Erstellen und Gerüstbau von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um zu erfahren, wie Sie node und npm installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie sie noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember` Programm in Ihrem Terminal zur Verfügung, das zum Erstellen, Entwickeln, Testen und Gerüstbau Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie die folgende Anweisung in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis innerhalb des aktuellen Verzeichnisses, in dem Sie sich befinden, namens todomvc, das das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich an einem geeigneten Ort im Terminal befinden, bevor Sie sie ausführen. (Gute Vorschläge sind Ihr "Desktop"- oder "Dokumente"-Verzeichnis, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder, unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig folgende Funktionen umfasst:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittherstellerpaketen ermöglicht, Ihre Anwendung reichhaltig zu erweitern.
- Der neueste JavaScript-Standard über Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilation und Minifizierung von sowohl CSS als auch JavaScript für Produktionsbuilds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (ermöglicht einfacheren geistigen Kontextwechsel).

## Vorbereitung für den Bau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt fortfahren können. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Das Installieren gemeinsamer Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht es uns jedoch, vorhandene gemeinsame CSS zu verwenden, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Gehen Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` unter macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihrer App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (es befindet sich direkt im Root-Verzeichnis) und öffnen Sie es in Ihrem gewählten Code-Editor. ember-cli-build.js ist verantwortlich für die Konfiguration von Details, wie Ihr Projekt gebaut wird — einschließlich der Bündelung aller Ihrer Dateien, der Asset-Minifizierung und der Erstellung von Sourcemaps — mit vernünftigen Standards, sodass Sie sich normalerweise nicht um diese Datei kümmern müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne dass wir sie ausdrücklich in die [`@import`](/de/docs/Web/CSS/@import) `app.css` Datei einfügen müssen (dies würde URL-Umleitungen zur Build-Zeit erfordern und daher weniger effizient und komplizierter zu setzen sein).

4. Suchen Sie in `ember-cli-build.js` nach dem folgenden Code:

   ```js
   let app = new EmberApp(defaults, {
     // Add options here
   });
   ```

5. Fügen Sie die folgenden Zeilen darunter hinzu, bevor Sie die Datei speichern:

   ```js
   app.import("node_modules/todomvc-common/base.css");
   app.import("node_modules/todomvc-app-css/index.css");
   ```

   Für weitere Informationen darüber, was `ember-cli-build.js` tut, und für andere Möglichkeiten, wie Sie Ihr Build/Pipeline anpassen können, haben die Ember-Leitfäden eine Seite über [Add-ons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der vom `todomvc-app-css` npm-Paket bereitgestellten Stile, sodass der Tastaturfokus sichtbar bleibt. Dies geht einen Schritt zur Behebung eines der größten Barrierefreiheitsprobleme der Standard-TodoMVC-App.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihr Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte Ihnen eine Ausgabe ähnlich dem Folgenden geben:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver wird unter `http://localhost:4200` gestartet, den Sie in Ihrem Browser besuchen können, um zu sehen, wie Ihre Arbeit bisher aussieht.

Wenn alles richtig funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standardstartseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das "Herzlichen Glückwunsch" sagt](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie generell langsamere Build-Zeiten erleben im Vergleich zu macOS, Linux und Windows _mit_ WSL.

## Zusammenfassung

Bisher läuft alles gut. Wir haben den Punkt erreicht, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns den Aufbau der Markup-Struktur unserer App als eine Gruppe logischer Komponenten ansehen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
