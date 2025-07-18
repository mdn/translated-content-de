---
title: Einstieg in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_getting_started
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem ersten Artikel über Ember werden wir uns ansehen, wie Ember funktioniert und wofür es nützlich ist, die Ember-Toolchain lokal installieren, eine Beispiel-App erstellen und dann einige Grundeinstellungen vornehmen, um sie für die Entwicklung bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember diese intensiv nutzt.
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

Ember ist ein Komponenten-Service-Framework, das sich auf die gesamte Webanwendungsentwicklung konzentriert und dabei die trivialen Unterschiede zwischen Anwendungen minimiert — und gleichzeitig eine moderne und leichte Schicht über nativen JavaScript bietet. Ember bietet auch eine immense Rückwärts- und Vorwärtskompatibilität, um Unternehmen zu helfen, mit den neuesten Versionen von Ember und den neuesten gemeinschaftsgesteuerten Konventionen auf dem Laufenden zu bleiben.

Was bedeutet es, ein Komponenten-Service-Framework zu sein? Komponenten sind einzelne Bündel aus Verhalten, Stil und Markup — ähnlich wie andere Frontend-Frameworks bieten, wie React, Vue und Angular. Die Service-Seite bietet einen langlebigen gemeinsamen Zustand, Verhalten und eine Schnittstelle zur Integration mit anderen Bibliotheken oder Systemen. Zum Beispiel ist der Router (der später in diesem Tutorial erwähnt wird) ein Service. Komponenten und Dienste bilden den Großteil einer EmberJS-Anwendung.

## Anwendungsfälle

Im Allgemeinen funktioniert EmberJS gut für den Aufbau von Apps, die eine oder beide der folgenden Eigenschaften wünschen:

- Einseitige Anwendungen, einschließlich nativer Web-Apps und [progressiver Web-Apps](/de/docs/Web/Progressive_web_apps) (PWA)
  - Ember funktioniert am besten, wenn es das gesamte Frontend Ihrer Anwendung bildet.

- Erhöhung der Kohäsion zwischen den Technologie-Stacks vieler Teams
  - Gemeinschaftlich unterstützte „Best Practices“ ermöglichen eine schnellere langfristige Entwicklungsgeschwindigkeit.
  - Ember hat klare Konventionen, die nützlich sind, um Konsistenz zu fördern und Teammitglieder schnell einzuarbeiten.

### Ember mit Add-ons

EmberJS verfügt über eine Plugin-Architektur, was bedeutet, dass Add-ons installiert werden können und zusätzliche Funktionalitäten bieten, ohne dass viel, wenn überhaupt, Konfiguration erforderlich ist.

Beispiele umfassen:

- [PREmber](https://github.com/ef4/prember): Statisches Website-Rendering für Blogs oder Marketinginhalte.
- [empress-blog](https://empress-blog.netlify.app/welcome/): Blog-Posts in Markdown verfassen und dabei die SEO mit PREmber optimieren.
- [ember-service-worker](https://ember-service-worker.com/): Konfiguration einer PWA, sodass die App auf Mobilgeräten installiert werden kann, genauso wie Apps aus dem jeweiligen App-Store des Geräts.

## Meinungen

EmberJS ist eines der meinungsstärksten Frontend-Frameworks. Aber was bedeutet es, meinungsstark zu sein? In Ember sind Meinungen eine Reihe von Konventionen, die helfen, die Effizienz von Entwicklern zu steigern, indem sie diese Konventionen lernen müssen. Da Konventionen definiert und geteilt werden, helfen die dahinterstehenden Meinungen, die kleinen Unterschiede zwischen Apps zu reduzieren — ein gemeinsames Ziel aller meinungsstarken Frameworks, unabhängig von Sprache und Ökosystem. Entwickler können dann leichter zwischen Projekten und Anwendungen wechseln, ohne die Architektur, Muster, Konventionen usw. vollständig neu lernen zu müssen.

Während Sie diese Reihe von Tutorials durcharbeiten, werden Sie die Meinungen von Ember bemerken — wie z.B. strikte Namenskonventionen für Komponentendateien.

## Wie verhält sich Ember im Vergleich zu normalem JavaScript?

Ember basiert auf JavaScript-Technologien und ist eine dünne Schicht über traditioneller [objektorientierter Programmierung](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming), während es Entwicklern weiterhin ermöglicht, [funktionale Programmiertechniken](https://opensource.com/article/17/6/functional-javascript) zu nutzen.

Ember verwendet zwei Hauptsyntaxen:

- JavaScript (oder optional, [TypeScript](https://www.typescriptlang.org/))
- Embers eigene Template-Sprache, die lose auf [Handlebars](https://handlebarsjs.com/guide/) basiert.

Die Template-Sprache wird verwendet, um Build- und Laufzeitoptimierungen vorzunehmen, die sonst nicht möglich wären. Am wichtigsten ist, dass sie ein Superset von HTML ist — das bedeutet, dass jeder, der HTML kennt, mit minimaler Angst vor Codebrüchen sinnvolle Beiträge zu jedem Ember-Projekt leisten kann. Designer und andere Nicht-Entwickler können zu Seitentemplates beitragen, ohne JavaScript-Kenntnisse zu besitzen, und Interaktivität kann später hinzugefügt werden.

Diese Sprache ermöglicht auch leichtere Asset-Payloads durch das _Kompilieren_ der Templates in einen „Bytecode“, der schneller als JavaScript analysiert werden kann. Die **Glimmer VM** ermöglicht extrem schnelles DOM-Änderungs-Tracking, ohne dass eine zwischengespeicherte virtuelle Darstellung verwaltet und verglichen werden muss (was ein häufiger Ansatz zur Minderung des langsamen I/O von DOM-Änderungen ist).

Weitere Informationen zu den technischen Aspekten der Glimmer VM finden Sie im GitHub-Repository mit [Dokumentation](https://github.com/glimmerjs/glimmer-vm/tree/main/guides) — insbesondere [References](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/04-references.md) und [Validators](https://github.com/glimmerjs/glimmer-vm/blob/main/guides/05-validators.md) könnten von Interesse sein.

Alles andere in Ember ist _nur_ JavaScript. Insbesondere JavaScript-Klassen. Hier kommen die meisten „Framework“-Teile ins Spiel, da es [Superklassen](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses>) gibt, wobei jeder Typ von _Ding_ einen anderen Zweck und einen anderen erwarteten Standort innerhalb Ihres Projekts hat.

Hier ist eine Demonstration des Einflusses von Ember auf das JavaScript, das in typischen Projekten enthalten ist:
[Gavin Demonstrates how < 20% of the JS written is specific to Ember](https://x.com/gavinjoyce/status/1174726713101705216).

![Eine Reihe von Code-Dateien mit den ember-spezifischen JavaScript hervorgehoben, die zeigt, dass nur 20% des Ember-Codes spezifisch für Ember sind](20percent-js-specific-ember.png)

## Erste Schritte

Das restliche Ember-Material, das Sie hier finden, besteht aus einem mehrteiligen Tutorial, in dem wir eine Version der klassischen [TodoMVC-Beispiel-App](https://todomvc.com/) erstellen und Ihnen dabei beibringen, wie man die wichtigsten Funktionen des Ember-Frameworks verwendet. TodoMVC ist eine einfache To-Do-Tracking-App, die in vielen verschiedenen Technologien implementiert ist.

[Hier ist die abgeschlossene Ember-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) zur Referenz.

### Eine Anmerkung zu TodoMVC und Barrierefreiheit

Das TodoMVC-Projekt hat ein paar Probleme in Bezug auf die Einhaltung zugänglicher/standardmäßiger Webpraktiken. Es gibt ein paar GitHub-Issues dazu in der TodoMVC-Projektfamilie:

- [Add keyboard access to demos](https://github.com/tastejs/todomvc/issues/1017)
- [Re-enable Outline on focusable elements](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember hat ein starkes Engagement für Barrierefreiheit als Standard und es gibt einen [gesamten Abschnitt der Ember-Leitfäden zu Barrierefreiheit](https://guides.emberjs.com/release/accessibility/), was das für Webseitengestaltung/App-Design bedeutet.

Da dies gesagt ist, da sich dieses Tutorial auf den JavaScript-Teil der Erstellung einer kleinen Webanwendung konzentriert, liegt der Wert von TodoMVC darin, vorgeneriertes CSS und eine empfohlene HTML-Struktur bereitzustellen, die kleine Unterschiede zwischen Implementierungen beseitigt und so einen einfacheren Vergleich ermöglicht. Später im Tutorial werden wir uns darauf konzentrieren, Code zu unserer Anwendung hinzuzufügen, um einige der größten Mängel von TodoMVC zu beheben.

## Installation der Ember-Tools

Ember verwendet ein Kommandozeilen-Tool (CLI) zum Erstellen und Gerüstbau von Teilen Ihrer Anwendung.

1. Sie benötigen node und npm, bevor Sie ember-cli installieren können. [Hier erfahren Sie, wie Sie node und npm installieren können](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups), falls Sie diese noch nicht haben.
2. Geben Sie jetzt Folgendes in Ihr Terminal ein, um ember-cli zu installieren:

   ```bash
   npm install -g ember-cli
   ```

   Dieses Tool stellt das `ember`-Programm in Ihrem Terminal bereit, das zum Erstellen, Entwickeln, Testen und Gerüstbau Ihrer Anwendung verwendet wird (führen Sie `ember --help` aus, um eine vollständige Liste der Befehle und ihrer Optionen zu erhalten).

3. Um eine brandneue Anwendung zu erstellen, geben Sie Folgendes in Ihr Terminal ein. Dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, namens todomvc, das das Gerüst für eine neue Ember-App enthält. Stellen Sie sicher, dass Sie sich an einem geeigneten Ort im Terminal befinden, bevor Sie es ausführen. (Gute Vorschläge sind Ihre „Desktop“- oder „Dokumente“-Verzeichnisse, damit es leicht zu finden ist):

   ```bash
   ember new todomvc
   ```

   Oder, auf Windows:

   ```bash
   npx ember-cli new todomvc
   ```

Dies generiert eine produktionsreife Anwendungsentwicklungsumgebung, die standardmäßig folgende Merkmale beinhaltet:

- Entwicklungsserver mit Live-Reload.
- Plugin-Architektur, die es ermöglicht, dass Drittanbieterpakete Ihre Anwendung umfassend erweitern.
- Das neueste JavaScript über Babel- und webpack-Integration.
- Automatisierte Testumgebung, die Ihre Tests im Browser ausführen lässt und es Ihnen ermöglicht, _wie ein Benutzer zu testen_.
- Transpiltion und Minifizierung sowohl von CSS als auch von JavaScript für Produktions-Builds.
- Konventionen zur Minimierung von Unterschieden zwischen Anwendungen (um leichter mentale Kontextwechsel zu ermöglichen).

## Vorbereitung zum Erstellen unseres Ember-Projekts

Bevor Sie weiterhin mit Ihrem brandneuen Projekt interagieren, benötigen Sie einen Code-Editor. Wenn Sie noch keinen konfiguriert haben, bietet [The Ember Atlas](https://www.notion.so/Editors-Tooling-5da96f0b2baf4ce1bf3fd58e3b60c7f6) einige Leitfäden, wie Sie verschiedene Editoren einrichten können.

### Installation der gemeinsamen Assets für TodoMVC-Projekte

Die Installation gemeinsamer Assets, wie wir es jetzt tun werden, ist normalerweise kein erforderlicher Schritt für neue Projekte, ermöglicht es aber, vorhandenes gemeinsames CSS zu nutzen, sodass wir nicht raten müssen, welches CSS benötigt wird, um die TodoMVC-Stile zu erstellen.

1. Geben Sie zuerst in das `todomvc`-Verzeichnis im Terminal ein, zum Beispiel mit `cd todomvc` auf macOS/Linux.
2. Führen Sie nun den folgenden Befehl aus, um das gemeinsame todomvc-CSS in Ihre App zu platzieren:

   ```bash
   npm install --save-dev todomvc-app-css todomvc-common
   ```

3. Suchen Sie als nächstes die Datei [ember-cli-build.js](https://github.com/ember-cli/ember-cli/blob/master/packages/app-blueprint/files/ember-cli-build.js) im todomvc-Verzeichnis (sie befindet sich direkt im Root-Verzeichnis) und öffnen Sie sie in Ihrem bevorzugten Editor. ember-cli-build.js ist für die Konfiguration der Details zuständig, wie Ihr Projekt gebaut wird — einschließlich der Bündelung all Ihrer Dateien, der Asset-Minimierung und der Erstellung von Quellkarten — mit vernünftigen Standardwerten, sodass Sie sich normalerweise nicht um diese Datei kümmern müssen.

   Wir werden jedoch Zeilen zur Datei ember-cli-build.js hinzufügen, um unsere gemeinsamen CSS-Dateien zu importieren, damit sie Teil unseres Builds werden, ohne sie explizit in die `app.css`-Datei [`@import`](/de/docs/Web/CSS/@import) zu müssen (dies würde URL-Umschreibungen zur Build-Zeit erfordern und daher weniger effizient und komplizierter einzurichten sein).

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

   Weitere Informationen darüber, was `ember-cli-build.js` macht, und andere Möglichkeiten, wie Sie Ihren Build/Pipeline anpassen können, finden Sie auf der Seite der Ember-Leitfäden über [Addons und Abhängigkeiten](https://guides.emberjs.com/release/addons-and-dependencies/).

6. Suchen Sie schließlich `app.css`, zu finden unter `app/styles/app.css`, und fügen Sie folgendes ein:

   ```css
   :focus,
   .view label:focus,
   .todo-list li .toggle:focus + label,
   .toggle-all:focus + label {
     /* !important needed because todomvc styles deliberately disable the outline */
     outline: #d86f95 solid !important;
   }
   ```

Dieses CSS überschreibt einige der Stile, die vom `todomvc-app-css`-npm-Paket bereitgestellt werden, sodass der Tastaturfokus sichtbar ist. Dies trägt dazu bei, einen der größten Nachteile in Bezug auf Barrierefreiheit der Standard-TodoMVC-App zu beheben.

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

Der Entwicklungsserver startet unter `http://localhost:4200`, den Sie in Ihrem Browser besuchen können, um zu überprüfen, wie Ihr bisheriges Werk aussieht.

Wenn alles korrekt funktioniert, sollten Sie eine Seite wie diese sehen:

![Die Standard-Startseite, wenn Sie eine neue Ember-App erstellen, mit einem Cartoon-Maskottchen, das gratuliert](ember-start-page.png)

> [!NOTE]
> Auf Windows-Systemen ohne [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) werden Sie insgesamt langsamere Build-Zeiten im Vergleich zu macOS, Linux und Windows _mit_ WSL erleben.

## Zusammenfassung

Bis jetzt läuft alles gut. Wir sind an dem Punkt, an dem wir unsere TodoMVC-Beispiel-App in Ember aufbauen können. Im nächsten Artikel werden wir uns mit dem Aufbau der Markup-Struktur unserer App als Gruppe logischer Komponenten befassen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization", "Learn_web_development/Core/Frameworks_libraries")}}
