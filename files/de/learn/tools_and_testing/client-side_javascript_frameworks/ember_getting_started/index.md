---
title: Einstieg in Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige erste Schritte zur Vorbereitung für die Entwicklung durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens ist es empfehlenswert, mit den grundlegenden Sprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut zu
          sein und Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          > zu haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie
          Klassen, Module usw.) wird äußerst vorteilhaft sein, da Ember diese
          intensiv nutzt.
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

Ember ist ein Komponenten-Service-Framework, das auf die gesamte Webanwendungsentwicklung abzielt und die trivialen Unterschiede zwischen Anwendungen minimiert — und das, während es eine moderne und leichte Schicht über nativem JavaScript bietet. Ember bietet auch immense Abwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Versionen von Ember und den neuesten community-getriebenen Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel aus Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks wie React, Vue und Angular. Die Service-Seite bietet einen langlebigen gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Beispielsweise ist der Router, der später in diesem Tutorial erwähnt wird, ein Service. Komponenten und Services bilden den Großteil jeder EmberJS-Anwendung.

## Anwendungsfälle

Generell eignet sich EmberJS gut für den Bau von Apps, die eine oder beide der folgenden Eigenschaften aufweisen:

- Single Page Applications, einschließlich nativer Web-Apps und [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion zwischen den Technologie-Stacks vieler Teams

  - Community-gestützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitglieder schnell auf den neuesten Stand zu bringen.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionen bereitstellen, ohne dass viel oder überhaupt Konfiguration erforderlich ist.

Beispiele beinhalten:

- [PREmber](https://github.com/ef4/prember): Statische Webseiten-Renderung für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Schreiben von Blogbeiträgen in Markdown, während durch PREmber auf SEO optimiert wird.
- [ember-service-worker](https://ember-service-worker.com/): Konfigurieren einer PWA, sodass die App, ähnlich wie Apps aus dem jeweiligen App-Store des Geräts, auf mobilen Geräten installiert werden kann.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps mittels einer Brücke zur nativen mobilen JavaScript-Kommunikation verwendet werden, wie sie von [Corber](http://corber.io/) bereitgestellt wird.

## Meinungen

EmberJS ist eines der meinungsstärksten Front-End-Frameworks, die es gibt. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu steigern, auf Kosten der Notwendigkeit, diese Konventionen zu lernen. Da Konventionen definiert und geteilt werden, tragen die Meinungen, die diese Konventionen unterstützen, dazu bei, die geringfügigen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, über jede Sprache und jedes Ökosystem hinweg. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu erlernen zu müssen.

Wenn Sie diese Reihe von Tutorials durcharbeiten, werden Sie die Meinungen von Ember erkennen — wie die strikten Namenskonventionen von Komponenten-Dateien.

## Wie steht Ember zu Vanilla JavaScript?

Ember basiert auf JavaScript-Technologien und stellt eine dünne Schicht über traditionelles [objektorientiertes Programmieren](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming) dar, während es Entwicklern weiterhin ermöglicht, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember nutzt zwei Hauptsyntaxe:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templatingsprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templatingsprache wird verwendet, um Build- und Laufzeitoptimierungen zu ermöglichen, die ansonsten nicht möglich wären. Wichtig ist, dass sie eine Obermenge von HTML ist — was bedeutet, dass jeder, der HTML kennt, sinnvolle Beiträge zu jedem Ember-Projekt leisten kann, mit minimaler Angst, den Code zu beschädigen. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne jegliche Kenntnisse von JavaScript zu haben, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch das _Kompilieren_ der Templates in einen "Bytecode", der schneller als JavaScript analysiert werden kann. Die **Glimmer VM** ermöglicht extrem schnelles Überwachen von DOM-Änderungen, ohne dass eine zwischenspeichernde virtuelle Darstellung verwaltet und verglichen werden muss (was ein häufiger Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Für mehr Informationen über die technischen Aspekte der Glimmer VM gibt es im GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jeder Typ von _Ding_ einen anderen Zweck und einen anderen erwarteten Ort innerhalb Ihres Projekts hat.

Hier ist eine Demonstration der Auswirkungen, die Ember auf das JavaScript hat, das in typischen Projekten vorhanden ist:
[Gavin demonstriert, wie < 20% des geschriebenen JS Ember-spezifisch ist](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, das zeigt, dass nur 20% des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Erste Schritte

Das restliche Ember-Material, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispielanwendung](https://todomvc.com/) erstellen und Ihnen dabei die wichtigsten Konzepte des Ember-Frameworks beibringen. TodoMVC ist eine grundlegende To-Do-Tracking-App, die in vielen verschiedenen Technologien implementiert wurde.

[Hier ist die fertiggestellte Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme im Hinblick auf die Einhaltung barrierefreier/Standards für Web-Praktiken. Es gibt ein paar offene GitHub-Themen dazu in der TodoMVC-Projektfamilie:

- [Keyboard-Zugriff zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline bei fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat eine starke Verpflichtung, standardmäßig barrierefrei zu sein, und es gibt ein [ganzes Kapitel in den Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was es für das Design von Websites/Apps bedeutet.

Da das Hauptaugenmerk dieses Tutorials jedoch auf der JavaScript-Seite der Erstellung einer kleinen Webanwendung liegt, ergibt sich der Wert von TodoMVC aus der Bereitstellung vorgefertigter CSS- und empfohlener HTML-Strukturen, die kleine Unterschiede zwischen Implementierungen eliminieren und somit einen einfacheren Vergleich ermöglichen. Später in diesem Tutorial werden wir uns darauf konzentrieren, Code in unsere Anwendung einzufügen, um einige der größten Nachteile von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI)-Tool zum Erstellen und Generieren von Teilen Ihrer Anwendung.

1. Sie benötigen Node und npm, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um herauszufinden, wie Sie Node und npm installieren](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups), falls Sie diese noch nicht installiert haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, welches verwendet wird, um Ihre Anwendung zu erstellen, zu entwickeln, zu testen und zu generieren (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und deren Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt einen neuen Ordner im aktuellen Verzeichnis, in dem Sie sich befinden, namens todomvc, der das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich vor dem Ausführen an einem geeigneten Ort im Terminal befinden (gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsreife Anwendungsentwicklungsumgebung mit folgenden Standardfunktionen:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieterpaketen ermöglicht, Ihre Anwendung umfassend zu erweitern.
- Die neuesten JavaScript-Funktionen über Babel- und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilierung und Minimierung sowohl von CSS als auch von JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (ermöglicht leichteren mentalen Kontextwechsel).

## Vorbereitung auf den Aufbau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt interagieren können. Wenn Sie noch keinen konfiguriert haben, hat [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, wie wir sie gleich durchführen werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, sie ermöglicht es uns jedoch, vorhandenes gemeinsames CSS zu verwenden, sodass wir nicht erraten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Betreten Sie zuerst in Ihrem Terminal das `todomvc`-Verzeichnis, zum Beispiel mit `cd todomvc` in macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame TodoMVC-CSS in Ihre App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als Nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root-Verzeichnis) und öffnen Sie sie in Ihrem bevorzugten Code-Editor. ember-cli-build.js ist für die Konfiguration von Details verantwortlich, wie Ihr Projekt gebaut wird — einschließlich des Bündelns all Ihrer Dateien, der Minimierung von Assets und der Erstellung von Sourcemaps — mit vernünftigen Standardeinstellungen, sodass Sie sich normalerweise keine Gedanken über diese Datei machen müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne dass wir sie explizit in die `app.css`-Datei [`@import`](/de/docs/Web/CSS/@import) müssen (dies würde zur Build-Zeit URL-Umschreibungen erfordern und wäre somit weniger effizient und komplizierter einzurichten).

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

   Weitere Informationen darüber, was `ember-cli-build.js` tut, und zu anderen Möglichkeiten, wie Sie Ihren Build / Pipeline anpassen können, finden Sie in den Ember-Leitfäden auf der Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Suchen Sie schließlich `app.css`, die sich unter `app/styles/app.css` befindet, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der von dem `todomvc-app-css` npm-Paket bereitgestellten Stile und macht den Tastaturfokus somit sichtbar. Dies trägt dazu bei, einen der größten Nachteile der Standard-TodoMVC-App in Bezug auf die Barrierefreiheit zu beheben.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungs_-Modus starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte Ihnen eine Ausgabe ähnlich der folgenden liefern:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver wird unter `http://localhost:4200` gestartet, den Sie in Ihrem Browser besuchen können, um zu sehen, wie Ihre Arbeit bisher aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das "Herzlichen Glückwunsch" sagt](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bis jetzt läuft alles gut. Wir sind an dem Punkt angelangt, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns mit dem Aufbau der Markup-Struktur unserer App als eine Gruppe von logischen Komponenten befassen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
