---
title: Einstieg in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

Im ersten Artikel zu Ember werden wir uns anschauen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispielanwendung erstellen und dann einige erste Schritte zur Einrichtung für die Entwicklung durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind, und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen, Module usw.) wird äußerst vorteilhaft sein, da Ember intensiv davon Gebrauch macht.
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

Ember ist ein Komponenten-Service-Framework, das sich auf die Gesamterfahrung der Webanwendungsentwicklung konzentriert, indem es die trivialen Unterschiede zwischen Anwendungen minimiert — während es eine moderne und leichte Schicht über nativem JavaScript bildet. Ember bietet auch eine immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen dabei zu unterstützen, mit den neuesten Versionen von Ember und den neuesten communitygetriebenen Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks wie React, Vue und Angular bieten. Die Dienstseite bietet einen langlebigen gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Dienst. Komponenten und Dienste machen den Großteil jeder EmberJS-Anwendung aus.

## Anwendungsfälle

Generell eignet sich EmberJS gut für den Aufbau von Apps, die eine oder beide der folgenden Eigenschaften wünschen:

- Einzelseitenanwendungen, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)

  - Ember funktioniert am besten, wenn es die gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion zwischen den Technologiestapeln vieler Teams
  - Gemeinschaftlich unterstützte „Best Practices“ ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz durchzusetzen und Teammitgliedern dabei zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können, um zusätzliche Funktionalität bereitzustellen, ohne viel, wenn überhaupt, Konfiguration.

Beispiele beinhalten:

- [PREmber](https://github.com/ef4/prember): Statische Website-Renderung für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassen von Blogbeiträgen in Markdown bei gleichzeitiger Optimierung für SEO mit PREmber.
- [ember-service-worker](https://ember-service-worker.com/): Konfigurieren einer PWA, damit die App auf mobilen Geräten installiert werden kann, ähnlich wie Apps aus dem jeweiligen App-Store des Geräts.

### Native mobile Apps

Ember kann auch mit nativen mobilen Apps mit einer nativen mobilen Brücke zu JavaScript verwendet werden, wie sie z. B. von [Corber](http://corber.io/) bereitgestellt wird.

## Ansichten

EmberJS ist eines der meinungsstärksten Frontend-Frameworks überhaupt. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die die Effizienz der Entwickler steigern, auf Kosten der Notwendigkeit, diese Konventionen zu lernen. Da Konventionen definiert und geteilt werden, helfen die Meinungen, die diese Konventionen stützen, dabei, die unwesentlichen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, in jeder Sprache und jedem Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. komplett neu lernen zu müssen.

Während Sie diese Serie von Tutorials durchlaufen, werden Sie die Meinungen von Ember bemerken — wie etwa strenge Namenskonventionen für Komponenten-Dateien.

## Wie steht Ember in Bezug zu Vanilla JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditionellem [objektorientierten Programmieren](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während es Entwicklern dennoch erlaubt, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Haupt-Syntaxen:

- JavaScript (oder optional, [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen durchzuführen, die sonst nicht möglich wären. Am wichtigsten ist, dass sie eine Obermenge von HTML ist — was bedeutet, dass jeder, der HTML kennt, einen sinnvollen Beitrag zu jedem Ember-Projekt leisten kann, ohne Angst zu haben, den Code zu zerstören. Designer und andere Nicht-Entwickler können Beiträge zu Seitentemplates leisten, ohne Kenntnisse von JavaScript zu haben, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads aufgrund der _Kompilierung_ der Templates in einen „Bytecode“, der schneller geparst werden kann als JavaScript. Das **Glimmer VM** ermöglicht ein extrem schnelles DOM-Änderungsverfolgung, ohne dass ein gecachtes virtuelles Abbild verwaltet und verglichen werden muss (was ein üblicher Ansatz ist, um das langsame I/O von DOM-Änderungen zu mildern).

Für mehr Informationen über die technischen Aspekte des Glimmer VM hat das GitHub-Repository einige [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — speziell, [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten "Framework"-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jeder Typ von _Dingen_ einen anderen Zweck und eine andere erwartete Position innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript hat, das in typischen Projekten enthalten ist:
[Gavin demonstriert, wie weniger als 20% des geschriebenen JS spezifisch für Ember sind](https://x.com/gavinjoyce/status/1174726713101705216).

![eine Reihe von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, die zeigen, dass nur 20% des Ember-Codes Ember-spezifisch sind](20percent-js-specific-ember.png)

## Loslegen

Der Rest des Ember-Materials, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen, die Ihnen zeigt, wie Sie die wesentlichen Elemente des Ember-Frameworks nutzen können. TodoMVC ist eine grundlegende Aufgabenverfolgungs-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die vollständige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/), zum Nachschlagen.

### Eine Bemerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat einige Probleme in Bezug auf die Einhaltung zugänglicher/standardmäßiger Webpraktiken. Es gibt ein paar offene GitHub-Probleme zu diesem Thema in der TodoMVC-Projektfamilie:

- [Tastaturzugang zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline bei fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement, standardmäßig zugänglich zu sein, und es gibt einen [gesamten Abschnitt der Ember-Leitfäden zur Barrierefreiheit](https://guides.emberjs.com/release/accessibility/) darüber, was Barrierefreiheit beim Website-/App-Design bedeutet.

Das gesagt, da sich dieses Tutorial auf die JavaScript-Seite der Erstellung einer kleinen Webanwendung konzentriert, besteht der Wert von TodoMVC darin, vorgefertigtes CSS und empfohlene HTML-Struktur bereitzustellen, die kleine Unterschiede zwischen Implementierungen eliminiert und einen leichteren Vergleich ermöglicht. Später im Tutorial werden wir uns darauf konzentrieren, Code zu unserer Anwendung hinzuzufügen, um einige der größten Schwächen von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Interface (CLI)-Tool zum Erstellen und Gerüstbauen von Teilen Ihrer Anwendung.

1. Sie müssen node und npm installiert haben, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um zu erfahren, wie Sie node und npm installieren können](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), wenn Sie diese noch nicht haben.
2. Geben Sie nun Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, das verwendet wird, um Ihre Anwendung zu erstellen, zu bauen, zu entwickeln, zu testen und zu gerüsten (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu sehen).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihrem Terminal ein. Dadurch wird ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, namens todomvc erstellt, das das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich an einer geeigneten Stelle im Terminal befinden, bevor Sie dies ausführen. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder auf Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklungsumgebung, die standardmäßig die folgenden Funktionen beinhaltet:

- Entwicklungsserver mit Live-Neuladen.
- Plugin-Architektur, die es Drittanbieterpaketen erlaubt, Ihre Anwendung reichhaltig zu erweitern.
- Das neueste JavaScript durch Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpilation und Minimierung von sowohl CSS als auch JavaScript für Produktionsbuilds.
- Konventionen zur Minimierung der Unterschiede zwischen Anwendungen (ermöglicht einfacheres Switching des mentalen Kontexts).

## Vorbereitung zur Erstellung unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiter interagieren können. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden, wie man verschiedene Editoren einrichtet.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Das Installieren gemeinsamer Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, aber es ermöglicht uns die Verwendung bestehender gemeinsamer CSS-Dateien, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Betreten Sie zuerst Ihr `todomvc`-Verzeichnis im Terminal, zum Beispiel mit `cd todomvc` auf macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihre App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Finden Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js) im todomvc-Verzeichnis (es befindet sich direkt im Stammverzeichnis) und öffnen Sie diese in Ihrem gewählten Code-Editor. ember-cli-build.js ist verantwortlich für die Konfiguration von Details zur Erstellung Ihres Projekts — einschließlich der Zusammenführung aller Dateien, der Minimierung von Assets und der Erstellung von Sourcemaps — mit vernünftigen Standardeinstellungen, sodass Sie sich normalerweise nicht um diese Datei kümmern müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne sie explizit in die `app.css`-Datei [`@import`](/de/docs/Web/CSS/@import) zu müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und daher weniger effizient und komplizierter zu konfigurieren sein).

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

   Für mehr Informationen darüber, was `ember-cli-build.js` macht, und für andere Möglichkeiten zur Anpassung Ihres Builds / Ihrer Pipeline, haben die Ember-Leitfäden eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie das Folgende ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der vom `todomvc-app-css`-npm-Paket bereitgestellten Stile und ermöglicht somit, dass der Tastaturfokus sichtbar ist. Dies geht einen Schritt in Richtung der Lösung eines der großen Zugänglichkeitsnachteile der Standard-TodoMVC-App.

### Starten des Entwicklungsservers

Sie können die App im _Entwicklungs_-Modus starten, indem Sie den folgenden Befehl in Ihrem Terminal eingeben, während Sie sich im `todomvc`-Verzeichnis befinden:

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

Wenn alles korrekt funktioniert, sollten Sie eine solche Seite sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bis jetzt so gut. Wir haben den Punkt erreicht, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns anschauen, wie wir die Markup-Struktur unserer App als eine Gruppe logischer Komponenten aufbauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
