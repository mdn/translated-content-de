---
title: Einführung in eine vollständige Werkzeugkette
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 969c3ca835e0a43a403ed61a3ea8245539fcc4dd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer beispielhaften Fallstudien-Werkzeugkette führen. Wir beginnen bei der Einrichtung einer sinnvollen Entwicklungsumgebung und dem Einsatz von Transformationswerkzeugen bis hin zur eigentlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und setzen unsere Code-Transformationswerkzeuge auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen der <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Festigung dessen, was wir bisher gelernt haben, indem wir eine vollständige Fallstudie zur Werkzeugkette durchgehen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu nutzen, was Sie in diesem und dem nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Unterstützung für die Integration von _vielen_ Werkzeugen über Plugins.

## Einführung unserer Fallstudie

Die Werkzeugkette, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Werkzeuge, die in unserer Werkzeugkette verwendet werden

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine [React](https://react.dev/)-Verwandte Syntaxerweiterung, die es Ihnen ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Es ist nicht notwendig, React zu kennen, um diesem Tutorial zu folgen, aber wir haben es aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Werkzeugkette integriert werden könnte.
- Die neuesten eingebauten JavaScript-Features (zum Zeitpunkt des Schreibens), wie zum Beispiel [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) für das Formatieren und [ESLint](https://eslint.org/) für das Linting.
- [PostCSS](https://postcss.org/), um CSS-Nesting-Fähigkeiten bereitzustellen.
- [Vite](https://vite.dev/), um unseren Code zu bauen und zu minimieren und um eine Menge von Konfigurationsdateien automatisch für uns zu schreiben.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub), um unsere Quellcodeverwaltung zu verwalten und schließlich unsere Website bereitzustellen (mittels GitHub Pages).

Vielleicht sind Sie mit all den oben genannten Funktionen und Werkzeugen oder deren Aufgaben nicht vertraut, aber keine Panik — wir werden jeden Teil erklären, während wir diesen Artikel durchgehen.

## Werkzeugketten und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Werkzeugkette haben, desto komplexer und potenziell zerbrechlicher ist sie — zum Beispiel könnte sie komplexer zu konfigurieren und leichter zu brechen sein. Im Gegenzug werden weniger Glieder Ihre Werkzeugkette wahrscheinlich robuster machen.

Alle Webprojekte sind unterschiedlich, und Sie müssen überlegen, welche Teile Ihrer Werkzeugkette notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Werkzeugkette ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code von Hand schreiben, "vanilla JavaScript" verwenden (bedeutet keine Frameworks oder Zwischenprogrammiersprachen) und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden kompliziertere Softwareanforderungen wahrscheinlich von der Nutzung von Werkzeugen zur Vereinfachung des Entwicklungsprozesses profitieren. Außerdem sollten Sie vor der Bereitstellung auf Ihrem Produktionsserver Tests einfügen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert - dies klingt bereits nach einer notwendigen Werkzeugkette.

Für unser Musterprojekt werden wir eine speziell entwickelte Werkzeugkette verwenden, um unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen, die während der Entwurfsphase der Software getroffen wurden, zu unterstützen. Wir werden jedoch jegliche überflüssige Tooling vermeiden, mit dem Ziel, die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten Softwareteile bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal durchgeführt werden und müssen nicht für zukünftige Projekte wiederholt werden.

### Erstellen eines GitHub-Kontos

Zusätzlich zu den Werkzeugen, die wir installieren werden und die zu unserer Werkzeugkette beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können den lokalen Entwicklungsteil jedoch auch ohne abschließen. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Fehlerverfolgung, Projektverfolgung und vieles mehr hinzufügt. Im nächsten Kapitel werden wir ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslöst, der (sollte) alle Software auf ein Zuhause im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf den _Sign Up_ Link auf der Homepage klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir installieren eine weitere Software, git, um bei der Revisionskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Tool zur Quellcode-Revisionskontrolle, das Entwicklern zur Verfügung steht — Revisionskontrolle bietet viele Vorteile, wie eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und ein Mittel, um im Team an demselben Projekt zu arbeiten, ohne Angst, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei wiederholt gesagt: Git ist nicht dasselbe wie GitHub. Git ist das Tool zur Revisionskontrolle, während [GitHub](https://github.com/) ein Online-Store für git Repositories ist (plus eine Reihe nützlicher Werkzeuge zur Arbeit mit ihnen). Beachten Sie, dass es zwar in diesem Kapitel um GitHub geht, es aber mehrere Alternativen gibt, einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git Repositories hosten.

Revision Control in Ihre Projekte zu integrieren und sie als Teil der Werkzeugkette zu verwenden, hilft, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, "Blöcke" von Arbeit zu begehen, während Sie vorankommen, zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Fehler Z jetzt aufgrund von Y Änderungen behoben".

Revisionskontrolle kann Ihnen auch erlauben, aus Ihrem Projektcode heraus einen separate Version zu erstellen und neue Funktionalität auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinträchtigen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt zurückzubringen, "als er funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler hin und wieder tun müssen!

Git kann [über die git-scm Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie das relevante Installationsprogramm für Ihr System herunter, führen Sie es aus und folgen Sie den Bildschirmaufforderungen. Das ist alles, was Sie im Moment tun müssen.

Sie können auf verschiedene Weise mit git interagieren, von der Befehlszeile zur Ausgabe von Befehlen über eine [git GUI App](https://git-scm.com/downloads/guis), mit der dieselben Befehle durch das Drücken von Schaltflächen ausgegeben werden, bis hin zur direkten Verwendung in Ihrem Code-Editor, wie im Beispiel von Visual Studio Code unten zu sehen:

![Git-Integration gezeigt in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir bereits im vorherigen Kapitel begonnen haben. Stellen Sie daher sicher, dass Sie den Anweisungen in [Paketmanagement](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) folgen, um das Projekt zuerst einzurichten. Zur Erinnerung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Werkzeugkette in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten sind, um Ihren Code auszuführen. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherungsnetz**: Die Entwicklungserfahrung stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeuge, die es uns ermöglichen, die neuesten Features einer Sprache zu benutzen (z.B. JavaScript) oder eine andere Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so zu transformieren, dass die Produktionsversion immer noch auf einer Vielzahl von Browsern, modernen und älteren, läuft.
- **Nach der Entwicklung**: Werkzeuge, die ins Spiel kommen, nachdem Sie mit dem Hauptteil der Entwicklung fertig sind, um sicherzustellen, dass Ihre Software ins Web gelangt und weiter läuft. In dieser Fallstudie werden wir uns ansehen, wie Sie Ihrem Code Tests hinzufügen und Ihre App mit GitHub Pages bereitstellen, damit sie für alle im Web verfügbar ist.

Lassen Sie uns beginnen, daran zu arbeiten, beginnend mit unserer Entwicklungsumgebung. Wir werden denselben Schritten folgen, wie ein echtes Projekt eingerichtet würde, damit Sie in Zukunft, wenn Sie ein neues Projekt einrichten, zu diesem Kapitel zurückkehren und die Schritte erneut befolgen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Werkzeugkette wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Kaninhole" von Werkzeugen zu fallen, bei dem Sie viel Zeit damit verbringen, zu versuchen, die Umgebung "genau richtig" zu bekommen.

Aber Sie können dies auf die gleiche Weise wie das Einrichten Ihrer physischen Arbeitsumgebung sehen. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es kann wichtige Dekorationen oder Musik geben, die Ihrem geistigen Zustand helfen - all dies sind wichtige Dinge, um Ihre beste Arbeit zu leisten, und sie sollten nur einmal eingerichtet werden müssen, wenn sie richtig gemacht werden.

In gleicher Weise muss, wenn Ihre Entwicklungsumgebung gut eingerichtet ist, dies nur einmal geschehen und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden diesen Teil der Werkzeugkette wahrscheinlich halbregelmäßig überprüfen und überlegen, ob es irgendwelche Upgrades oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht so oft erforderlich sein.

Ihre Werkzeugkette hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer relativ vollständigen Werkzeugkette werden die Werkzeuge, die im Voraus installiert/initialisiert werden, sein:

- Werkzeuge zur Installation von Bibliotheken — zum Hinzufügen von Abhängigkeiten.
- Code-Revisionskontrolle.
- Code-Bereinigungstools — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Tools — zum Linting unseres Codes.

### Werkzeuge zur Installation von Bibliotheken

Sie haben dies bereits getan, aber zur einfachen Referenz sind hier die Befehle (am Wurzelverzeichnis des `npm-experiment` Verzeichnisses ausgeführt), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um die Funktion zur Quellcodekontrolle von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Allerdings gibt es einige generierte Dateien, die wir nicht verfolgen müssen, da sie kein Code sind, den wir geschrieben haben, und sie jederzeit erneut generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Wurzelverzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

### Code-Bereinigungstools

Wir werden Prettier verwenden, das wir erstmals in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Dev-Abhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele Werkzeuge, die heutzutage entwickelt wurden, kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne irgendetwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies lässt Sie mit dem Wichtigen weitermachen: der kreativen Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Wurzelverzeichnis Ihres `npm-experiment` Verzeichnisses namens `.prettierrc.json` und fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung druckt Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) Öffnungstag am Ende der letzten Zeile und nicht alleine in der nächsten Zeile. Dies ist das Format, das MDN selbst verwendet. In seiner Dokumentation finden Sie mehr über [die Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html).

Standardmäßig formatiert Prettier alle Dateien, die Sie spezifizieren. Allerdings benötigen wir nicht, generierte Dateien zu formatieren, oder es kann bestimmten Legacy-Code geben, den wir nicht berühren wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Wurzelverzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

Sie hat den gleichen Inhalt wie `.gitignore`, aber bei einem realen Projekt könnte es notwendig sein, andere Dateien für Prettier als für git zu ignorieren.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem im Format meines Codes gibt, gehe voran und behebe es, dann speichere meine Datei". Dies ist in unserem Entwicklungsprozess in Ordnung, aber wir können `prettier` auch ohne das Flag verwenden und es überprüft nur die Datei. Das Überprüfen der Datei (und das nicht Speichern) ist hilfreich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung ausgeführt werden - i.e. "veröffentlichen Sie keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` auch durch jede andere Datei oder jeden anderen Ordner ersetzen, um sie zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Für den Fall, dass Sie sich an die Syntax nicht erinnern, können Sie es als benutzerdefiniertes Skript in Ihrem package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Jetzt können Sie das folgende ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Spezielle "git hooks" verwenden, um zu testen, ob der Code formatiert ist, bevor ein Commit gemacht wird.
- Code-Editor-Plugins verwenden, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Vor- und Nachaktionen an die Aufgaben zu hängen, die wir mit git durchführen (wie das Commiten Ihres Codes). Obwohl git hooks ein bisschen heiß überkompliziert sein können (nach Meinung dieses Autors), können sie, sobald sie eingerichtet sind, sehr leistungsfähig sein. Wenn Sie an dem Verwenden von Hooks interessiert sind, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Weg, um Hooks zu verwenden.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code beim Speichern automatisch zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code-Linting-Tools

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist eine Schlüsselkomponente einer guten Werkzeugkette und eine, die viele Entwicklungsprojekte standardmäßig enthalten werden.

Webentwicklungs-Linting-Tools existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Dies macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der Widerstandsfähigkeit dieser beiden Sprachen wahrscheinlich nichts kaputt gehen. JavaScript ist viel brüchiger — das irrtümliche Aufrufen einer nicht existierenden Funktion zum Beispiel lässt Ihr JavaScript zusammenbrechen; das Linting von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das Go-to-Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann jedoch schwierig richtig zu konfigurieren sein und Sie könnten leicht viele Stunden verlieren, um eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, also haben Sie wie in Kapitel 2 besprochen die Wahl, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie ohnehin eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den auszuführenden Befehl:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, obwohl die neueste Version v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket stellt vordefinierte ESLint-Konfiguration zur Verfügung, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Ohne Konfiguration gibt ESLint sofort Fehlermeldungen aus, wenn man es mit `npx eslint` ausführt:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js` im Wurzelverzeichnis des Projekts):

```js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
```

Die obige ESLint-Konfiguration:

- Aktiviert die "empfohlenen" ESLint-Einstellungen
- Teilt ESLint mit, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Teilt ESLint mit, `.js` und `.jsx` Dateien in das Linting einzuschließen
- Informiert ESLint über das Vorhandensein der globalen Variablen des Browsers (verwendet durch Lint-Regeln wie `no-undef`, um nicht vorhandene Variablen zu überprüfen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln React-spezifische Semantiken nicht. Daher werden wir ein paar weitere Konfigurationen hinzufügen, um es ordnungsgemäß zu unterstützen. Installieren Sie zunächst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln zum Schreiben von korrekt und idiomatisch React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann, aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX einstellt:

```js
import js from "@eslint/js";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactRecommended,
  reactJSXRuntime,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
];
```

> [!NOTE]
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich, im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react` Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` noch nicht das neue ESLint-Konfigurationsformat unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für weitere Informationen.

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Ihren Vorstellungen anpassen können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu bekommen oder um eine auszuwählen, die Sie für Ihre eigenen Standards geeignet halten. Eine Vorwarnung allerdings: Die Konfiguration von ESLint ist ein sehr tiefes Kaninchenloch!

Im Sinne der Einfachheit werden wir in diesem Kapitel nicht alle Features von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Bedenken Sie jedoch, dass, wenn Sie eine Regel präzisieren und durchsetzen möchten, wie Ihr Code aussieht (oder validiert wird), es sehr wahrscheinlich ist, dass dies mit der richtigen ESLint-Konfiguration getan werden kann.

Wie bei anderen Werkzeugen ist die Integration in Code-Editoren typischerweise gut für ESLint, und potenziell nützlicher, da es uns Echtzeit-Feedback geben kann, wenn Probleme auftreten:

![ESLint-Fehler-Integration gezeigt in VS Code](eslint-error.png)

Das ist unser Entwicklungsumgebung-Setup zu diesem Zeitpunkt abgeschlossen. Jetzt sind wir endlich (fast) bereit zum Codieren.

## Build- und Transformationswerkzeuge

### JavaScript-Transformation

Für dieses Projekt, wie bereits oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Features verwenden. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die gedacht ist, in Sprachen kompiliert zu werden, die der Browser in der Produktionscode versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, was der Browser problemlos konsumieren kann.

Es gibt eine Reihe von Möglichkeiten für Transformations-Tools und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine in `vite.config.js` im Wurzelverzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen darüber, wie Vite konfiguriert wird. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, daher sollten Sie die `base` Option gemäß dem Namen Ihres GitHub-Repositories einstellen - aber Sie können dies später immer noch anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) übergehen.

### CSS-Transformation

Unser CSS kann auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die erst in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen kaputten Stil anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle von uns anvisierten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachbearbeitungs-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS darauf ausgelegt, _standard_ CSS zu schreiben (d.h. CSS-Syntax, die irgendwann in Browser gelangen kann), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, also wenn Sie einen Klassennamen wie `.button` haben, werden alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, all Ihre JavaScript-Variablen wären im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem der Klassenname einzigartig für die Seiten gemacht wird, die sie verwenden. Um zu verstehen, wie das funktioniert, können Sie, nachdem Sie den Quellcode heruntergeladen haben, überprüfen, wie wir die `.module.css` Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Werkzeugkette ziemlich schmerzhaft sein kann, gibt es dank der Wahl eines Werkzeugs, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren, wirklich nichts mehr, was wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, geschachteltes CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird durch den Buildprozesses nicht behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungswerkzeugkette eingerichtet haben, ist es normalerweise Zeit, mit dem Schreiben echten Codes zu beginnen — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Zu unseren Zwecken werden wir jedoch nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir sie geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge darauf anzuwenden, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos irgendwo auf Ihrem lokalen Laufwerk herunter und entpacken Sie ihn. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispielrepo](github-repo.png)

Kopieren Sie nun den Inhalt des Projekts `src` Verzeichnis und verwenden Sie ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Sie müssen sich um die anderen Dateien nicht kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server in der Befehlszeile ausführen. In seinem Standardmodus wird er auf Änderungen im Code achten und den Server aktualisieren. Dies ist schön, da wir nicht zwischen dem Code und der Befehlszeile hin und her wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des zuvor definierten benutzerdefinierten Skripts):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe sehen, die wie folgt aussieht (sobald die Abhängigkeiten installiert sind):

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   Der Server läuft nun unter der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App sehen, die läuft!

Jetzt können wir ein paar Änderungen vornehmen und deren Auswirkungen live ansehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr liebstes GitHub-Repo, wie `facebook/react`.
3. Speichern Sie die Datei und kehren Sie dann direkt zurück zur im Browser laufenden App. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und sich die Grafiken geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie, absichtlich eine Menge Leerraum aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie zu bereinigen, oder fügen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehlermeldungen Ihnen ESLint gibt, wenn Sie den `eslint` Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel weit gekommen, indem wir eine recht nette lokale Entwicklungsumgebung aufgebaut haben, um eine Anwendung zu erstellen.

Zu diesem Zeitpunkt während der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software, die Sie bauen möchten, erstellen. Da dieses Modul sich mit dem Erlernen der Werkzeuge rund um die Webentwicklung und nicht mit dem Webentwicklungscode selbst befasst, werden wir Ihnen keinen tatsächlichen Code beibringen — Sie werden diese Informationen im Rest von MDN finden!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge darauf anzuwenden. Wir würden vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann versuchen, den Inhalt des `src` Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
