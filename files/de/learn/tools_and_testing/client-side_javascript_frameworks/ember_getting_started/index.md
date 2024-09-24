---
title: Erste Schritte mit Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige anfängliche Einstellungen vornehmen, um sie für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          über Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlszeile</a
          >verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember stark von diesen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie man Ember installiert und eine Start-App erstellt.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Dienst-Framework, das sich auf das gesamte Webanwendungsentwicklungserlebnis konzentriert und dabei triviale Unterschiede zwischen Anwendungen minimiert — während es gleichzeitig eine moderne und leichte Schicht über nativem JavaScript darstellt. Ember zeichnet sich zudem durch eine immense Abwärts- und Aufwärtskompatibilität aus, um Unternehmen zu unterstützen, mit den neuesten Versionen von Ember und den neuesten community-getriebenen Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Dienst-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup — ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Dienstseite bietet einen langlebigen gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste bilden den Großteil jeder EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut für den Aufbau von Apps, die eine oder beide der folgenden Eigenschaften wünschen:

- Einseitige Anwendungen, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion zwischen den Technologiestacks vieler Teams

  - Community-gestützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz zu erzwingen und Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Erweiterungen

EmberJS verfügt über eine Plugin-Architektur, was bedeutet, dass Add-Ons installiert werden können und zusätzliche Funktionen bereitstellen, ohne dass viel oder überhaupt keine Konfiguration erforderlich ist.

Beispiele umfassen:

- [PREmber](https://github.com/ef4/prember): Statische Website-Generierung für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Erstellen von Blogbeiträgen in Markdown, während die SEO mit PREmber optimiert wird.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App wie Apps aus dem jeweiligen App-Store eines Geräts auf mobilen Geräten installiert werden kann.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps verwendet werden, die eine native-mobile Brücke zu JavaScript bieten, wie die von [Corber](http://corber.io/).

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu steigern, indem sie verlangen, dass diese Konventionen erlernt werden. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen untermauern, die trivialen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, unabhängig von Sprache und Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die gesamte Architektur, Muster und Konventionen erneut lernen zu müssen.

Während Sie diese Serie von Tutorials durcharbeiten, werden Ihnen die Meinungen von Ember auffallen — beispielsweise strikte Namenskonventionen von Komponenten-Dateien.

## Wie steht Ember im Vergleich zu einfachem JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming), erlaubt Entwicklern jedoch weiterhin, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Hauptsyntaxen:

- JavaScript (oder optional, [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Template-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Template-Sprache wird verwendet, um Optimierungen beim Aufbau und zur Laufzeit vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass es sich um eine Obermenge von HTML handelt — das bedeutet, dass jeder, der HTML kennt, mit minimalen Bedenken, Code zu beschädigen, sinnvolle Beiträge zu jedem Ember-Projekt leisten kann. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne Kenntnisse in JavaScript haben zu müssen, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch das _Kompilieren_ der Templates in einen "Byte-Code", der schneller als JavaScript geparst werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungsverfolgen, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und verglichen werden muss (was ein häufig verwendeter Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM hat das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere, [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten der "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jeder Typ von _Dingen_ einen anderen Zweck und einen anderen erwarteten Standort innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript in typischen Projekten hat:
[Gavin Demonstrates how < 20% of the JS written is specific to Ember](https://x.com/gavinjoyce/status/1174726713101705216).

![ein Satz von Code-Dateien mit dem ember-spezifischen JavaScript hervorgehoben, zeigt, dass nur 20 % des Ember-Codes spezifisch für Ember sind](20percent-js-specific-ember.png)

## Einstieg

Der Rest des hier zu findenden Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen auf dem Weg beibringen, wie Sie die Grundlagen des Ember-Frameworks nutzen. TodoMVC ist eine grundlegende To-Do-Tracking-App, die in vielen verschiedenen Technologien implementiert wurde.

[Hier ist die fertiggestellte Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/), zur Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme in Bezug auf die Einhaltung zugänglicher/standardmäßiger Webpraktiken. Es gibt ein paar GitHub-Issues zu diesem Thema in der TodoMVC-Familie von Projekten:

- [Add keyboard access to demos](https://github.com/tastejs/todomvc/issues/1017)
- [Re-enable Outline on focusable elements](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement, standardmäßig zugänglich zu sein, und es gibt einen [ganzen Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was es bedeutet, Websites / App-Design zu entwerfen.

Dies gesagt, da sich dieses Tutorial auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung konzentriert, besteht der Wert von TodoMVC darin, vordefinierte CSS und empfohlene HTML-Strukturen bereitzustellen, die kleine Unterschiede zwischen Implementierungen eliminieren und somit einen einfacheren Vergleich ermöglichen. Später im Tutorial werden wir uns darauf konzentrieren, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Befehlszeilenschnittstellen (CLI)-Werkzeug zum Erstellen und Gerüsten von Teilen Ihrer Anwendung.

1. Sie benötigen Node und npm, bevor Sie ember-cli installieren können. [Gehen Sie hierher, um herauszufinden, wie Sie Node und npm installieren](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups), falls Sie diese noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, das zum Erstellen, Entwickeln, Testen und Gerüsten Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und deren Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie im Terminal Folgendes ein. Dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, genannt todomvc, das das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie im Terminal an einen geeigneten Ort navigieren, bevor Sie es ausführen. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig die folgenden Funktionen umfasst:

- Entwicklungsserver mit Live-Neuladen.
- Plugin-Architektur, die es Drittanbieter-Paketen ermöglicht, Ihre Anwendung umfassend zu verbessern.
- Das neueste JavaScript dank Babel- und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilation und Minimierung sowohl von CSS als auch von JavaScript für Produktionsbuilds.
- Konventionen, um die Unterschiede zwischen Anwendungen zu minimieren (erleichtert den kontextuellen Wechsel).

## Vorbereitung unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiterarbeiten können. Falls Sie noch keinen konfiguriert haben, bietet [Der Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden, wie Sie verschiedene Editoren einrichten können.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Ressourcen, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht es uns jedoch, bestehende gemeinsame CSS zu verwenden, damit wir nicht erraten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Gehen Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` unter macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc CSS in Ihre App zu übernehmen:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie anschließend die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Projektstamm) und öffnen Sie sie in Ihrem bevorzugten Code-Editor. ember-cli-build.js ist verantwortlich für die Konfiguration von Details, wie Ihr Projekt aufgebaut wird — einschließlich des Bündelns aller Ihrer Dateien, der Minimierung der Ressourcen und der Erstellung von Sourcemaps — mit vernünftigen Standardeinstellungen, sodass Sie normalerweise keine Sorge um diese Datei haben müssen.

   Wir werden jedoch Zeilen zur Datei ember-cli-build.js hinzufügen, um unsere geteilten CSS-Dateien zu importieren, damit sie ein Teil unseres Builds werden, ohne dass wir sie explizit in die Datei `app.css` [`@import`](/de/docs/Web/CSS/@import) müssen (das würde URL-Umschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

4. Finden Sie in `ember-cli-build.js` den folgenden Code:

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

   Für weitere Informationen darüber, was `ember-cli-build.js` macht, und um andere Möglichkeiten zu sehen, in denen Sie Ihren Build / Ihre Pipeline anpassen können, haben die Ember-Leitfäden eine Seite über [Add-ons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !wichtig nötig, da todomvc-Stile das Outline absichtlich deaktivieren */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Stile, die von dem npm-Paket `todomvc-app-css` bereitgestellt werden, und erlaubt daher, dass die Tastaturfokushervorhebung sichtbar ist. Dies geht einen großen Teil des Weges, um einen der Hauptnachteile der Barrierefreiheit bei der Standard-TodoMVC-App zu beheben.

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

Der Entwicklungsserver wird unter `http://localhost:4200` gestartet, den Sie in Ihrem Browser besuchen können, um zu überprüfen, wie Ihre Arbeit bisher aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne das [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten erleben im Vergleich zu macOS, Linux und Windows _mit_ WSL.

## Zusammenfassung

Bisher läuft alles gut. Wir sind an dem Punkt angelangt, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns ansehen, wie wir die Markup-Struktur unserer App als eine Gruppe logischer Komponenten erstellen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
