---
title: Erste Schritte mit Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gewartet und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

In unserem ersten Ember-Artikel werden wir untersuchen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige grundlegende Einstellungen vornehmen, um diese für die Entwicklung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          >
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Ember installiert wird und wie man eine Starter-App erstellt.</td>
    </tr>
  </tbody>
</table>

## Einführung in Ember

Ember ist ein Komponenten-Service-Framework, das sich auf das allgemeine Webentwicklungs-Erlebnis konzentriert und dabei die trivialen Unterschiede zwischen Anwendungen minimiert — und das Ganze als moderne und schlanke Schicht auf nativen JavaScript. Ember verfügt auch über eine immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Versionen von Ember und den neuesten communitygetriebenen Konventionen Schritt zu halten.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel von Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks es bieten, wie etwa React, Vue und Angular. Die Service-Seite bietet langlebige gemeinsame Zustände, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Services bilden die Mehrheit jeder EmberJS-Anwendung.

## Anwendungsfälle

Generell eignet sich EmberJS gut für den Bau von Apps, die eines oder beides der folgenden Merkmale aufweisen:

- Single Page Applications, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung ist.

- Erhöhung der Kohäsion in den Technologie-Stacks vieler Teams
  - Communitygestützte „Best Practices“ ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz zu gewährleisten und neuen Teammitgliedern zu helfen, sich schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS hat eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können, um ohne viel, wenn überhaupt, Konfiguration zusätzliche Funktionen bereitzustellen.

Beispiele umfassen:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Verfassung von Blogbeiträgen in Markdown bei gleichzeitiger SEO-Optimierung mit PREmber.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, damit die App auf mobilen Geräten installiert werden kann, genau wie Apps aus dem jeweiligen App-Store des Geräts.

## Meinungen

EmberJS ist eines der am stärksten meinungsbetonten Frontend-Frameworks. Aber was bedeutet es, meinungsbetont zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die dazu beitragen, die Effizienz von Entwicklern zu erhöhen, auf Kosten dessen, dass sie diese Konventionen lernen müssen. Da Konventionen definiert und geteilt werden, tragen die Meinungen, die diese Konventionen stützen, dazu bei, die geringfügigen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsbetonten Frameworks, unabhängig von Sprache und Ecosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Während Sie diese Reihe von Tutorials durcharbeiten, werden Sie Ember „Meinungen“ bemerken — wie z. B. strikte Namenskonventionen für Komponenten-Dateien.

## Wie verhält sich Ember zu Vanilla-JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während Entwickler weiterhin [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) nutzen können.

Ember verwendet zwei Haupt-Syntaxen:

- JavaScript (oder optional [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Templating-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Templating-Sprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die ansonsten nicht möglich wären. Am wichtigsten ist, dass es ein Superset von HTML ist — was bedeutet, dass jeder, der HTML kennt, einen wertvollen Beitrag zu jedem Ember-Projekt leisten kann, ohne große Angst zu haben, dass der Code beschädigt wird. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne JavaScript zu kennen, und die Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch das _Kompilieren_ der Templates in einen „Bytecode“, der schneller geparst werden kann als JavaScript. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Change-Tracking, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und diff verwendet werden muss (was ein gängiger Ansatz zur Minderung der langsamen I/O von DOM-Änderungen ist).

Weitere Informationen zu den technischen Aspekten der Glimmer VM finden Sie in einigen [Dokumentationen](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) im GitHub-Repository — insbesondere [Referenzen](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validatoren](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Dies ist der Punkt, an dem die meisten „Framework“-Teile ins Spiel kommen, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jede Art von _Ding_ einen anderen Zweck und einen anderen erwarteten Standort innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses, den Ember auf das JavaScript hat, das in typischen Projekten vorkommt:
[Gavin demonstriert, wie weniger als 20 % des geschriebenen JS spezifisch für Ember sind](https://x.com/gavinjoyce/status/1174726713101705216).

![Ein Satz von Code-Dateien mit dem Ember-spezifischen JavaScript hervorgehoben, das zeigt, dass nur 20% des Ember-Codes spezifisch für Ember sind](20percent-js-specific-ember.png)

## Erste Schritte

Der Rest des hier zu findenden Ember-Materials besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen dabei beibringen, wie Sie die Grundlagen des Ember-Frameworks verwenden können. TodoMVC ist eine grundlegende To-Do-Tracking-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die fertige Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) als Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme hinsichtlich der Einhaltung von barrierefreien/standardmäßigen Webpraktiken. Es gibt einige offene GitHub-Issues zu dieser Problematik in der TodoMVC-Familie von Projekten:

- [Tastaturzugriff zu Demos hinzufügen](https://github.com/tastejs/todomvc/issues/1017)
- [Outline auf fokussierbaren Elementen wieder aktivieren](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement für Barrierefreiheit als Standard und es gibt einen [ganzen Abschnitt der Ember-Leitfäden zu Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), der erklärt, was es für das Design von Websites/Apps bedeutet.

Das gesagt, da dieses Tutorial den Fokus auf die JavaScript-Seite der Erstellung einer kleinen Web-App legt, besteht der Wert von TodoMVC darin, vordefinierte CSS und empfohlene HTML-Strukturen bereitzustellen, die kleine Unterschiede zwischen Implementierungen eliminieren und so einen leichteren Vergleich ermöglichen. Später im Tutorial werden wir uns darauf konzentrieren, unserem Projekt Code hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Toolchain

Ember verwendet ein Befehlszeilen-Tool (CLI) zum Erstellen und Gerüstbau von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm, bevor Sie ember-cli installieren können. [Gehen Sie hierhin, um herauszufinden, wie Sie node und npm installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), wenn Sie diese noch nicht haben.
2. Geben Sie nun das Folgende in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, das zum Erstellen, Entwickeln, Testen und Gerüstbau Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen todomvc, das das Gerüst für eine neue Ember-App enthält. Achten Sie darauf, sich vorher im Terminal an einen passenden Ort zu bewegen. (Gute Vorschläge sind Ihre "Desktop"- oder "Dokumente"-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder auf Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsbereite Anwendungsentwicklung-Umgebung, die standardmäßig folgende Funktionen umfasst:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es Drittanbieter-Paketen ermöglicht, Ihre Anwendung umfassend zu erweitern.
- Das neueste JavaScript dank Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführt und Ihnen ermöglicht, _wie ein Nutzer zu testen_.
- Transpilation und Minimierung von sowohl CSS als auch JavaScript für Produktions-Builds.
- Konventionen zur Minimierung von Unterschieden zwischen Anwendungen (was einen einfacher mentalen Kontextwechsel ermöglicht).

## Vorbereitung auf den Aufbau unseres Ember-Projekts

Sie benötigen einen Code-Editor, bevor Sie mit Ihrem brandneuen Projekt weiterarbeiten. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden zur Einrichtung verschiedener Editoren.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, wie wir es gleich tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte; jedoch ermöglicht sie uns die Nutzung vorhandener, geteilter CSS, sodass wir nicht raten müssen, welche CSS benötigt werden, um die TodoMVC-Stile zu erstellen.

1. Zuerst wechseln Sie in das `todomvc`-Verzeichnis im Terminal, z. B. mit `cd todomvc` in macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc CSS in Ihrer App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Finden Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root-Verzeichnis) und öffnen Sie diese in Ihrem gewählten Code-Editor. ember-cli-build.js ist dafür verantwortlich, Details darüber zu konfigurieren, wie Ihr Projekt erstellt wird — einschließlich der Bündelung aller Ihrer Dateien, der Minimierung von Assets und der Erstellung von Source-Maps — mit vernünftigen Voreinstellungen, sodass Sie sich normalerweise keine Sorgen um diese Datei machen müssen.

   Wir werden jedoch Zeilen zur ember-cli-build.js-Datei hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, sodass sie Teil unseres Builds werden, ohne sie explizit in die `app.css`-Datei {{cssxref("@import")}} zu müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und daher weniger effizient und komplizierter einzurichten sein).

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

   Weitere Informationen darüber, was `ember-cli-build.js` macht, und für andere Möglichkeiten, wie Sie Ihren Build/Pipeline anpassen können, haben die Ember Guides eine Seite zu [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Finden Sie schließlich `app.css`, das sich unter `app/styles/app.css` befindet, und fügen Sie den folgenden Code ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Styles, die vom `todomvc-app-css`-npm-Paket bereitgestellt werden und ermöglicht so, dass der Tastaturfokus sichtbar ist. Dies ist ein Schritt zur Behebung eines der Hauptnachteile bezüglich der Barrierefreiheit der Standard TodoMVC-App.

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

Der Entwicklungsserver startet unter `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um zu überprüfen, wie Ihre Arbeit bis jetzt aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bis jetzt sieht alles gut aus. Wir haben den Punkt erreicht, an dem wir beginnen können, unsere Beispiel-TodoMVC-App in Ember aufzubauen. Im nächsten Artikel werden wir uns mit der Strukturierung des Markups unserer App als eine Gruppe von logischen Komponenten befassen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
