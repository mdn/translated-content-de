---
title: Erste Schritte mit Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Ember-Artikel werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige anfängliche Setups durchführen, um sie für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein und
          über Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >
          zu verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember intensiv von ihnen
          Gebrauch macht.
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

Ember ist ein Komponenten-Service-Framework, das sich auf das Gesamterlebnis der Webanwendungsentwicklung konzentriert und die trivialen Unterschiede zwischen Anwendungen minimiert — und dabei eine moderne und leichte Schicht über nativem JavaScript bleibt. Ember bietet auch enorme Rückwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu helfen, mit den neuesten Versionen von Ember und den neuesten gemeinschaftsgetriebenen Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel aus Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks wie React, Vue und Angular. Die Serviceseite bietet langanhaltende, geteilte Zustände, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Services machen den Großteil jeder EmberJS-Anwendung aus.

## Anwendungsfälle

Im Allgemeinen eignet sich EmberJS gut für die Entwicklung von Anwendungen, die eines oder beide der folgenden Merkmale wünschen:

- Single Page Applications, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung darstellt.

- Erhöhung der Kohäsion in den Technologie-Stacks vieler Teams
  - Gemeinschaftsunterstützte "Best Practices" ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS verfügt über eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalitäten bieten, ohne dass viel, wenn überhaupt, Konfiguration erforderlich ist.

Beispiele sind:

- [PREmber](https://github.com/ef4/prember): Statische Webseiten-Generierung für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Blogposts in Markdown verfassen und dabei mit PREmber für SEO optimieren.
- [ember-service-worker](https://ember-service-worker.com/): Konfigurieren einer PWA, sodass die App auf Mobilgeräten installiert werden kann, ähnlich wie Apps aus dem jeweiligen App-Store des Geräts.

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz der Entwickler zu steigern, indem sie diese Konventionen erlernen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen unterstützen, die trivialen Unterschiede zwischen Anwendungen zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, unabhängig von Sprache und Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die gesamte Architektur, Muster, Konventionen usw. neu lernen zu müssen.

Während Sie diese Reihe von Tutorials durcharbeiten, werden Sie auf die Meinungen von Ember stoßen — wie z.B. strikte Namenskonventionen von Komponenten-Dateien.

## Wie verhält sich Ember zu "vanilla" JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während es Entwicklern erlaubt, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Hauptsyntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen zu ermöglichen, die sonst nicht möglich wären. Am wichtigsten ist, dass sie eine Obermenge von HTML ist — das bedeutet, dass jeder, der HTML kennt, sinnvolle Beiträge zu jedem Ember-Projekt leisten kann, ohne Angst vor Codebruch zu haben. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne Kenntnisse in JavaScript zu haben, und die Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads, da die Templates in einen "Bytecode" kompiliert werden, der schneller geparst werden kann als JavaScript. Die **Glimmer VM** ermöglicht extrem schnelles Tracking von DOM-Änderungen, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und verglichen werden muss (eine gängige Methode, um die langsame I/O von DOM-Änderungen zu mildern).

Weitere Informationen zu den technischen Aspekten der Glimmer VM finden Sie im GitHub-Repository mit [Dokumentation](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wo jeder Typ von _Objekt_ einen anderen Zweck hat und an einer anderen Stelle in Ihrem Projekt erwartet wird.

Hier ist eine Demonstration der Auswirkung, die Ember auf das JavaScript hat, das in typischen Projekten enthalten ist:
[Gavin demonstriert, wie < 20 % des geschriebenen JS spezifisch für Ember ist](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, das zeigt, dass nur 20 % des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Erste Schritte

Der Rest des hier angebotenen Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen unterwegs beibringen, wie Sie die wesentlichen Funktionen des Ember-Frameworks nutzen. TodoMVC ist eine einfache App zur Aufgabenverfolgung, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die fertige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme in Bezug auf die Einhaltung zugänglicher/standardmäßiger Webpraktiken. Es gibt ein paar offene GitHub-Issues zu diesem Thema bei der TodoMVC-Familie von Projekten:

- [Hinzufügen des Tastaturzugriffs zu Demos](https://github.com/tastejs/todomvc/issues/1017)
- [Wiederherstellen des Umrisses bei fokussierbaren Elementen](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat eine starke Verpflichtung, standardmäßig zugänglich zu sein, und es gibt einen [ganzen Abschnitt der Ember-Leitfäden über Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), in dem erklärt wird, was es bedeutet, eine Webseite/App barrierefrei zu gestalten.

Da dieses Tutorial jedoch den Fokus auf die JavaScript-Seite der Entwicklung einer kleinen Webanwendung legt, ergibt sich der Wert von TodoMVC aus der Bereitstellung von vorgefertigtem CSS und einer empfohlenen HTML-Struktur, die kleine Unterschiede zwischen den Implementierungen beseitigt und so einen einfacheren Vergleich ermöglicht. Später im Tutorial werden wir uns darauf konzentrieren, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI)-Tool zum Erstellen und Gerüsten von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm, bevor Sie ember-cli installieren können. [Besuchen Sie diese Seite, um herauszufinden, wie Sie node und npm installieren können](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie diese noch nicht eingerichtet haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt in Ihrem Terminal das `ember`-Programm zur Verfügung, mit dem Sie Ihre Anwendung erstellen, entwickeln, testen und gerüsten können (führen Sie `ember --help` für eine vollständige Liste der Befehle und ihrer Optionen aus).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis in dem aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen todomvc, das das Gerüst für eine neue Ember-App enthält. Gehen Sie sicher, dass Sie sich an einem geeigneten Ort im Terminal befinden, bevor Sie diesen Befehl ausführen. (Gute Vorschläge sind Ihr "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder auf Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Entwicklungsumgebung, die standardmäßig folgende Funktionen umfasst:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieter-Paketen ermöglicht, Ihre Anwendung umfassend zu erweitern.
- Modernes JavaScript dank Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilierung und Minimierung sowohl von CSS als auch von JavaScript für Produktions-Builds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (ermöglicht einfacheren mentalen Kontextwechsel).

## Vorbereitung auf den Bau unseres Ember-Projekts

Bevor Sie mit Ihrem brandneuen Projekt weiterarbeiten, benötigen Sie einen Code-Editor. Wenn Sie noch keinen konfiguriert haben, enthält [Der Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Anleitungen zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, wie wir sie jetzt durchführen werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht uns jedoch die Verwendung bereits vorhandener gemeinsamer CSS, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Gehen Sie zuerst in Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` auf macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihre App einzufügen:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie anschließend die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich dort im Stammverzeichnis) und öffnen Sie sie in Ihrem gewählten Code-Editor. Ember-cli-build.js ist verantwortlich für die Konfiguration von Details darüber, wie Ihr Projekt gebaut wird — einschließlich der Bündelung aller Ihrer Dateien, Asset-Minimierung und Erzeugung von Sourcemaps — mit vernünftigen Standardwerten, sodass Sie sich normalerweise keine Sorgen über diese Datei machen müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne sie explizit [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) in die `app.css`-Datei zu importieren (dies würde URL-Umschreibungen zur Buildzeit erfordern und wäre daher weniger effizient und komplexer einzurichten).

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

   Weitere Informationen dazu, was `ember-cli-build.js` tut, und andere Möglichkeiten, wie Sie Ihren Build/Pipeline anpassen können, finden Sie in den Ember-Leitfäden auf der Seite [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Suchen Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie Folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Stile, die vom `todomvc-app-css`-npm-Paket bereitgestellt werden, und macht dadurch die Tastaturfokussierung sichtbar. Dies behebt teilweise einen der großen Barrierefreiheitsnachteile der standardmäßigen TodoMVC-App.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungsmodus_ starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

```bash
ember server
```

Dies sollte eine Ausgabe ähnlich der folgenden liefern:

```plain
Build successful (190ms) – Serving on http://localhost:4200/

Slowest Nodes (totalTime >= 5%)          | Total (avg)
-----------------------------------------+-----------
BroccoliMergeTrees (17)                  | 35ms (2 ms)
Package /assets/vendor.js (1)            | 13ms
Concat: Vendor Styles/assets/vend... (1) | 12ms
```

Der Entwicklungsserver startet unter `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um sich anzusehen, wie Ihre bisherige Arbeit aussieht.

Wenn alles funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Comic-Maskottchen, das Gratulationen sagt](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten erleben als auf macOS, Linux und Windows _mit_ WSL.

## Zusammenfassung

So weit so gut. Wir sind an dem Punkt angelangt, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns darauf konzentrieren, die Markup-Struktur unserer App als eine Gruppe logischer Komponenten aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
