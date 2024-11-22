---
title: Einstieg in Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem ersten Artikel zu Ember werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist. Wir werden das Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige erste Einstellungen vornehmen, um es für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind, und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember stark darauf aufbaut.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie Sie Ember installieren und eine Starter-App erstellen.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Dienst-Framework, das den gesamten Entwicklungsprozess von Webanwendungen fokussiert, indem es die trivialen Unterschiede zwischen Anwendungen minimiert — und dabei eine moderne und leichte Schicht über nativem JavaScript bildet. Ember bietet auch immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Versionen von Ember und den neuesten Community-getriebenen Konventionen Schritt zu halten.

Was bedeutet es, ein Komponenten-Dienst-Framework zu sein? Komponenten sind einzelne Bundles von Verhalten, Stil und Markup — ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Dienstseite stellt langfristig geteilten Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen bereit. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste machen den größten Teil jeder EmberJS-Anwendung aus.

## Anwendungsfälle

Im Allgemeinen funktioniert EmberJS gut mit Apps, die entweder oder beide der folgenden Merkmale wünschen:

- Single Page Applications, einschließlich nativer webähnlicher Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung bildet.

- Steigerung der Kohäsion zwischen den Technologie-Stacks vieler Teams

  - Community-gestützte "Best Practices" ermöglichen schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitgliedern zu helfen, schnell auf den neuesten Stand zu kommen.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalitäten bieten, ohne viel, wenn überhaupt, Konfiguration.

Beispiele umfassen:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketing-Inhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown und Optimierung für SEO mit PREmber.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App auf mobilen Geräten installiert werden kann, genau wie Apps aus dem jeweiligen App-Store des Geräts.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps verwendet werden, die eine native-mobile Brücke zu JavaScript bieten, wie die von [Corber](http://corber.io/).

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die die Effizienz der Entwickler steigern, auf Kosten dessen, dass diese Konventionen gelernt werden müssen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen stützen, die unwesentlichen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarker Frameworks, unabhängig von Sprache und Ökosystem. Entwicklern fällt es dann leichter, zwischen Projekten und Anwendungen zu wechseln, ohne die Architektur, Muster, Konventionen usw. komplett neu lernen zu müssen.

Während Sie dieses Tutorial durchlaufen, werden Sie die Meinungen von Ember bemerken — wie strikte Namenskonventionen für Komponenten-Dateien.

## Wie steht Ember im Vergleich zu reinem JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditionellem [objektorientiertem Programmieren](/de/docs/Learn/JavaScript/Objects/Object-oriented_programming), während es Entwicklern dennoch ermöglicht, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Hauptsynthaxen:

- JavaScript (oder optional, [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Template-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Template-Sprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass sie ein Superset von HTML ist — das bedeutet, dass jeder, der HTML kennt, mit minimaler Angst, Code zu brechen, bedeutungsvolle Beiträge zu jedem Ember-Projekt leisten kann. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne Kenntnisse in JavaScript, und Interaktivitäten können später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads, indem die Templates in ein "Bytecode" kompiliert werden, der schneller als JavaScript geparst werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Change-Tracking, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und differenziert werden muss (was ein häufiger Ansatz ist, um das langsame I/O von DOM-Änderungen zu mindern).

Für weitere Informationen zu den technischen Aspekten von The Glimmer VM hat das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _einfach nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommt der größte Teil der "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, bei denen jeder Typ von _Dingen_ einen anderen Zweck hat und an unterschiedlichen erwarteten Orten innerhalb Ihres Projekts zu finden ist.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript hat, das in typischen Projekten vorkommt:
[Gavin Demonstrates how < 20% of the JS written is specific to Ember](https://x.com/gavinjoyce/status/1174726713101705216).

![ein Satz von Code-Dateien mit den Ember-spezifischen JavaScript-Teilen hervorgehoben, der zeigt, dass nur 20% des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Einstieg

Das übrige Ember-Material, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen zeigen, wie Sie die wesentlichen Funktionen des Ember-Frameworks verwenden. TodoMVC ist eine grundlegende Aufgabenverfolgungs-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die fertige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme in Bezug auf die Einhaltung barrierefreier/Standard-Webpraktiken. Es gibt ein paar GitHub-Issues dazu in der TodoMVC-Projektfamilie:

- [Add keyboard access to demos](https://github.com/tastejs/todomvc/issues/1017)
- [Re-enable Outline on focusable elements](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement dafür, standardmäßig barrierefrei zu sein, und es gibt einen [ganzen Abschnitt in den Ember-Leitfäden zu Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was es für Website-/App-Design bedeutet.

Das gesagt, da dieses Tutorial sich auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung konzentriert, besteht der Wert von TodoMVC darin, vorgefertigtes CSS und empfohlene HTML-Struktur bereitzustellen, was kleine Unterschiede zwischen den Implementierungen eliminiert und dadurch den Vergleich erleichtert. Später im Tutorial werden wir uns darauf konzentrieren, unserer Anwendung Code hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Werkzeuge

Ember verwendet ein Command-Line Interface (CLI) Tool, um Teile Ihrer Anwendung zu erstellen und zu gestalten.

1. Sie benötigen node und npm, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um herauszufinden, wie Sie node und npm installieren](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups), falls Sie diese noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, das zum Erstellen, Entwickeln, Testen und Gestalten Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis innerhalb des aktuellen Verzeichnisses, in dem Sie sich befinden, namens todomvc, das die Scaffolding-Dateien für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich an einem passenden Ort im Terminal befinden, bevor Sie es ausführen. (Gute Vorschläge sind Ihr "Desktop"- oder "Documents"-Verzeichnis, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die folgende Funktionen standardmäßig enthält:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieterpaketen ermöglicht, Ihre Anwendung reichhaltig zu erweitern.
- Das neueste JavaScript via Babel und Webpack-Integration.
- Eine automatisierte Testumgebung, die Ihre Tests im Browser ausführt, damit Sie _wie ein Benutzer testen_ können.
- Transpilation und Minifizierung sowohl von CSS als auch von JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (erleichtert den mentalen Kontextwechsel).

## Vorbereitung für den Bau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weitermachen können. Falls Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Das Installieren gemeinsamer Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte. Aber es ermöglicht uns, vorhandenes gemeinsames CSS zu verwenden, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Gehen Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` in macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihre App zu integrieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root-Verzeichnis) und öffnen Sie sie in dem von Ihnen gewählten Code-Editor. ember-cli-build.js ist verantwortlich für die Konfiguration von Details darüber, wie Ihr Projekt aufgebaut wird — einschließlich des Bündelns aller Ihrer Dateien, der Asset-Minifizierung und der Erstellung von Sourcemaps — mit vernünftigen Standardwerten, sodass Sie sich normalerweise nicht um diese Datei kümmern müssen.

   Wir werden jedoch Zeilen zur Datei ember-cli-build.js hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne sie explizit in die Datei `app.css` [`@import`](/de/docs/Web/CSS/@import) zu müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

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

   Für weitere Informationen darüber, was `ember-cli-build.js` tut und andere Möglichkeiten, wie Sie Ihren Build / Ihre Pipeline anpassen können, haben die Ember-Leitfäden eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich die `app.css`, die sich in `app/styles/app.css` befindet, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Stile, die vom `todomvc-app-css`-npm-Paket bereitgestellt werden, und ermöglicht somit, dass der Tastaturfokus sichtbar ist. Dies behebt einen der größten Barrierefreiheitsnachteile der Standard-TodoMVC-App.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihr Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

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

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das sagt: Glückwunsch](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bisher so gut. Wir haben den Punkt erreicht, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns ansehen, wie wir die Markup-Struktur unserer App als Gruppe logischer Komponenten aufbauen können.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
