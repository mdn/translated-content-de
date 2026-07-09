---
title: Erste Schritte mit Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN-Ember-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Siehe [diese Diskussion](https://github.com/orgs/mdn/discussions/827) für weitere Informationen.

Im ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige Ersteinrichtungen vornehmen, um sie für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sein und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird von großem Nutzen sein, da Ember davon stark Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Ember installiert wird und eine Starter-App erstellt wird.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Service-Framework, das den Fokus auf das gesamte Webanwendungs-Entwicklungserlebnis legt und die trivialen Unterschiede zwischen Anwendungen minimiert — während es eine moderne und leichte Schicht über nativem JavaScript bietet. Ember bietet auch immense Abwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Ember-Versionen und community-getriebenen Konventionen auf dem neuesten Stand zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel aus Verhalten, Stil und Markup — ähnlich wie bei anderen Frontend-Frameworks wie React, Vue und Angular. Die Service-Seite bietet langlebige geteilte Zustände, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Services bilden den Großteil einer EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen funktioniert EmberJS gut für die Erstellung von Apps, die eines oder beide der folgenden Merkmale aufweisen:

- Single Page Applications, einschließlich nativer Webanwendungen und [progressiver Webanwendungen](/de/docs/Web/Progressive_web_apps) (PWAs)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion zwischen den Technologie-Stacks vieler Teams
  - Community-unterstützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalität ohne viel, wenn überhaupt, Konfiguration bieten.

Beispiele beinhalten:

- [PREmber](https://github.com/ef4/prember): Statische Website-Rendering für Blogs oder Marketing-Inhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown und Optimierung für SEO mit PREmber.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, damit die App auf mobilen Geräten installiert werden kann, wie Apps aus dem jeweiligen App-Store des Geräts.

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu steigern, auf Kosten des Lernens dieser Konventionen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen unterstützen, die unwichtigen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsgesteuerten Frameworks, über jede Sprache und jedes Ökosystem hinweg. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Während Sie diese Serie von Tutorials durchlaufen, werden Sie die Meinungen von Ember bemerken — wie zum Beispiel strikte Namenskonventionen für Komponenten-Dateien.

## Wie hängt Ember mit Vanilla JavaScript zusammen?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während es Entwicklern immer noch ermöglicht, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet hauptsächlich zwei Syntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass es ein Superset von HTML ist — was bedeutet, dass jeder, der HTML kennt, mit minimaler Angst vor Codebrüchen sinnvolle Beiträge zu jedem Ember-Projekt leisten kann. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne JavaScript-Kenntnisse zu haben, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch das _Kompilieren_ der Templates in einen "Bytecode", der schneller als JavaScript geparst werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungstracking, ohne die Notwendigkeit, eine zwischengespeicherte virtuelle Darstellung zu verwalten und zu vergleichen (was ein häufiger Ansatz zur Minderung des langsamen I/O von DOM-Änderungen ist).

Für weitere Informationen zu den technischen Aspekten der Glimmer VM hat das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommt der Großteil der "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, bei denen jeder Typ von _Ding_ einen anderen Zweck und eine andere erwartete Position innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses von Ember auf den JavaScript-Code in typischen Projekten:
[Gavin zeigt, wie weniger als 20 % des geschriebenen JS spezifisch für Ember sind](https://x.com/gavinjoyce/status/1174726713101705216).

![eine Gruppe von Code-Dateien mit hervorgehobenem Ember-spezifischem JavaScript, das zeigt, dass nur 20 % des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Erste Schritte

Das restliche Ember-Material, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen, wobei wir Ihnen beibringen, wie Sie die wesentlichen Bestandteile des Ember-Frameworks nutzen. TodoMVC ist eine grundlegende Aufgabenverwaltung-App, die in vielen verschiedenen Technologien implementiert wird.

[Hier ist die vollständige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Ein Hinweis zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme in Bezug auf die Einhaltung zugänglicher/standardmäßiger Web-Praktiken. Es sind ein paar GitHub-Probleme zu diesem Thema in der TodoMVC-Projektfamilie offen:

- [Fügen Sie Tastaturzugriff zu den Demos hinzu](https://github.com/tastejs/todomvc/issues/1017)
- [Aktivieren Sie die Umrandung auf fokussierbaren Elementen erneut](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement, standardmäßig zugänglich zu sein, und es gibt einen [ganzen Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was es bedeutet, für Website / App-Design zugänglich zu sein.

Angesichts dessen, dass dieses Tutorial einen Schwerpunkt auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung legt, ist der Wert von TodoMVC die Bereitstellung vorgefertigter CSS und empfohlener HTML-Struktur, wodurch kleine Unterschiede zwischen Implementierungen eliminiert werden und ein einfacher Vergleich ermöglicht wird. Später im Tutorial konzentrieren wir uns darauf, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Werkzeuge

Ember verwendet ein Befehlszeilen-Interface (CLI)-Werkzeug zum Erstellen und Gerüsteinrichten von Teilen Ihrer Anwendung.

1. Sie benötigen Node und npm installiert, bevor Sie ember-cli installieren können. [Hier finden Sie heraus, wie Sie Node und npm installieren können](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie diese noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Werkzeug stellt das `ember` Programm in Ihrem Terminal bereit, das zum Erstellen, Entwickeln, Testen und Gerüsteinrichten Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dadurch wird ein neues Verzeichnis im aktuellen Verzeichnis erstellt, in dem Sie sich befinden, mit dem Namen todomvc, das das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich an einem geeigneten Ort im Terminal befinden, bevor Sie es ausführen (gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder unter Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig die folgenden Funktionen beinhaltet:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieterpakte ermöglicht, Ihre Anwendung reichhaltig zu erweitern.
- Der neueste JavaScript-Stand über Babel und Webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt, sodass Sie _wie ein Benutzer testen_ können.
- Transpilierung und Minimierung von sowohl CSS als auch JavaScript für Produktionsbuilds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (erleichtert den mentalen Kontextwechsel).

## Vorbereitung auf den Bau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiter interagieren können. Wenn Sie noch keinen konfiguriert haben, hat [The Ember Atlas](https://app.notion.com/p/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, wie wir es jetzt tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht es uns jedoch, vorhandenes gemeinsames CSS zu verwenden, sodass wir nicht erraten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Navigieren Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit dem Befehl `cd todomvc` unter macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame TodoMVC-CSS in Ihrer App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als Nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Stammverzeichnis) und öffnen Sie sie in Ihrem ausgewählten Code-Editor. ember-cli-build.js ist dafür verantwortlich, Details darüber zu konfigurieren, wie Ihr Projekt erstellt wird — einschließlich des Zusammenfassens aller Ihre Dateien, der Minimierung von Assets und der Erstellung von Source Maps — mit vernünftigen Standards, sodass Sie sich normalerweise um diese Datei nicht kümmern müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, damit sie Teil unseres Builds werden, ohne dass sie explizit mit {{cssxref("@import")}} in die Datei `app.css` importiert werden müssen (dies würde URL-Neuschreibungen zur Build-Zeit erfordern und wäre daher weniger effizient und komplizierter einzurichten).

4. In `ember-cli-build.js`, finden Sie den folgenden Code:

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

   Für weitere Informationen darüber, was `ember-cli-build.js` macht, und für andere Wege, wie Sie Ihren Build / Ihre Pipeline anpassen können, haben die Ember-Leitfäden eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie den folgenden Inhalt ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der von dem npm-Paket `todomvc-app-css` bereitgestellten Styles und ermöglicht daher, dass der Tastaturfokus sichtbar bleibt. Dies behebt eines der größten Barrierefreiheitsnachteile der Standard-TodoMVC-App.

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

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das Glückwünsche ausspricht](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bis hierhin scheint alles gut zu laufen. Wir haben den Punkt erreicht, an dem wir unsere Beispiel-TodoMVC-App in Ember aufbauen können. Im nächsten Artikel werden wir uns ansehen, wie wir die Markup-Struktur unserer App als eine Gruppe logischer Komponenten aufbauen können.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
