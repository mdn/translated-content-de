---
title: Einführung in eine vollständige Toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir gehen den ganzen Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung über die Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer Anwendung. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und stellen unsere Code-Transformationstools bereit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Festigung dessen, was wir bisher gelernt haben, durch die Bearbeitung einer vollständigen
        Fallstudie zu einer Toolchain.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu verwenden. Was Sie in diesem Artikel und im nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es lohnt sich auch zu wiederholen, dass nicht alle diese Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie z.B. VS Code) bieten Unterstützung zur Integration von _vielen_ Tools über Plugins.

## Einführung unserer Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## In unserer Toolchain verwendete Werkzeuge

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein [React](https://react.dev/)-bezogenes Set von Syntaxerweiterungen, das es Ihnen ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben es aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten, integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie zum Beispiel [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) für das Formatieren und [ESLint](https://eslint.org/) für das Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Verschachtelungsmöglichkeiten.
- [Vite](https://vite.dev/) zum Bauen und Minifizieren unseres Codes und um automatisch eine Menge Konfigurationsdateiinhalte für uns zu generieren.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle und schließlich zur Bereitstellung unserer Seite (mit Hilfe von GitHub Pages).

Es ist möglich, dass Ihnen nicht alle oben genannten Funktionen und Werkzeuge oder ihre Aufgaben vertraut sind, aber keine Panik — wir werden jeden Teil erklären, während wir diesen Artikel durchlaufen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette, desto mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell anfälliger ist sie — zum Beispiel könnte sie komplizierter zu konfigurieren sein und leichter brechen. Im Gegensatz dazu gilt: je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig in Betracht ziehen.

Die kleinste Toolchain ist eine ohne jegliche Glieder. Sie würden das HTML von Hand codieren, "vanilla JavaScript" verwenden (was bedeutet, keine Frameworks oder Zwischen-Sprachen) und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden bei komplexeren Softwareanforderungen wahrscheinlich Werkzeuge von Nutzen sein, die dabei helfen, den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie Tests durchführen, bevor Sie Ihre Software auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie vorgesehen funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell zur Unterstützung unserer Softwareentwicklung und zur Unterstützung der technischen Entscheidungen während der Softwaredesignphase entwickelt wurde. Wir werden jedoch jede überflüssige Tooling vermeiden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfen der Voraussetzungen

Sie sollten die meisten Softwarekomponenten bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsmaßnahmen fortfahren. Diese müssen nur einmal durchgeführt werden und müssen nicht für zukünftige Projekte wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Werkzeugen, die wir installieren werden, um zu unserer Toolchain beizutragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch immer noch dem Teil der lokalen Entwicklung folgen, ohne es. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositories, der Community-Features wie Bug-Tracking, das Verfolgen von Projekt-Releases und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository „pushen“, was einen Kaskadeneffekt auslösen wird, der (sollte) den gesamten Software-Code an einem Heimatort im Web bereitstellen wird.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie den Link _Sign Up_ auf der Startseite anklicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir werden eine andere Software, git, installieren, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie von "git" bereits gehört haben. [Git](https://git-scm.com/) ist derzeit das am meisten genutzte Quellcode-Versionskontrolltool für Entwickler — Versionskontrolle bietet viele Vorteile, wie z. B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern und eine Methode, in einem Team am selben Projekt zu arbeiten, ohne Angst zu haben, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sollte wiederholt werden: Git ist nicht dasselbe wie GitHub. Git ist das Tool für die Versionskontrolle, während [GitHub](https://github.com/) ein Online-Speicher für git-Repositories ist (plus eine Reihe nützlicher Werkzeuge zum Arbeiten mit ihnen). Beachten Sie, dass, auch wenn wir in diesem Kapitel GitHub verwenden, es mehrere Alternativen gibt, einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung von Versionskontrolle in Ihren Projekten und die Einbindung als Teil der Toolchain hilft, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, Arbeitsblöcke "einzubringen", während Sie fortschreiten, sowie Kommentare wie "X neues Feature implementiert" oder "Fehler Z jetzt behoben durch Y Änderungen".

Die Versionskontrolle ermöglicht es Ihnen auch, Ihr Projekt zu „verzweigen“, eine separate Version zu erstellen und neue Funktionen auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Letztendlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zurückzusetzen, zu einem Zeitpunkt, "als es funktionierte", falls ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler von Zeit zu Zeit tun müssen!

Git kann über die [git-scm Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den passenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie im Moment tun müssen.

Sie können auf verschiedene Arten mit git interagieren, von der Verwendung der Befehlszeile zur Ausgabe von Befehlen, über die Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Drücken von Tasten auszugeben, oder sogar direkt innerhalb Ihres Code-Editors, wie im Beispiel von Visual Studio Code unten zu sehen ist:

![Git-Integration gezeigt in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir im vorherigen Kapitel bereits begonnen haben, stellen Sie also sicher, dass Sie die Anweisungen in [Paketmanagement](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zusammenfassend sollte folgendes vorhanden sein:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in der package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in folgende Phasen unterteilt:

- **Entwicklungsumgebung**: Die grundlegenden Werkzeuge, die zur Ausführung Ihres Codes erforderlich sind. Dieser Teil ist bereits im vorherigen Kapitel eingerichtet.
- **Schutznetz**: Den Softwareentwicklungsprozess stabiler und effizienter gestalten. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tooling, das es uns ermöglicht, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder eine ganz andere Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und dann unseren Code so zu transformieren, dass die Produktionsversion noch auf einer Vielzahl moderner und älterer Browser läuft.
- **Nach der Entwicklung**: Tooling, das nach Abschluss der Hauptentwicklung ins Spiel kommt, um sicherzustellen, dass Ihre Software es ins Web schafft und weiterhin läuft. In dieser Fallstudie werden wir uns ansehen, wie Sie Tests in Ihren Code einfügen und Ihre Anwendung mit GitHub Pages bereitstellen, sodass sie für das gesamte Web verfügbar ist.

Beginnen wir mit der Arbeit an diesen Aufgaben, beginnend mit unserer Entwicklungsumgebung. Wir werden dieselben Schritte befolgen, wie es bei einem realen Projekt der Fall wäre, sodass Sie, wenn Sie in Zukunft ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut durchlaufen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht passieren, dass man in ein "Kaninchenloch" der Werkzeugnutzung fällt, in dem man viel Zeit damit verbringt, die Umgebung „genau richtig“ zu gestalten.

Aber Sie können das genauso betrachten, wie Sie Ihre physische Arbeitsumgebung einrichten. Der Stuhl muss bequem sein und in einer guten Position, um Ihrer Haltung zu helfen. Sie brauchen Strom, Wi-Fi und USB-Ports! Es könnten wichtige Dekorationen oder Musik geben, die Ihrem Geisteszustand helfen — all diese Dinge sind wichtig, um die bestmögliche Arbeit zu leisten, und sie sollten auch nur einmalig eingerichtet werden müssen, wenn es richtig gemacht wird.

In derselben Art muss Ihre Entwicklungsumgebung, wenn sie gut eingerichtet ist, nur einmal eingerichtet werden und kann bei vielen zukünftigen Projekten wiederverwendet werden. Sie werden diesen Teil der Toolchain wahrscheinlich halbregelmäßig überprüfen und überlegen wollen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht allzu oft erforderlich sein.

Ihre Toolchain wird von Ihren eigenen Bedürfnissen abhängen, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die folgenden Werkzeuge installiert/initialisiert:

- Werkzeuge zur Bibliotheksinstallation — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Werkzeuge zur Code-Bereinigung — zur Bereinigung von JavaScript, CSS und HTML.
- Werkzeuge zur Code-Kontrolle — zum Linting unseres Codes.

### Werkzeuge zur Bibliotheksinstallation

Sie haben dies bereits getan, aber zur einfachen Referenz, hier sind die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Funktionalität der Quellcodeverwaltung von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da es sich nicht um Code handelt, den wir selbst geschrieben haben, und sie jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore` Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

### Werkzeuge zur Code-Bereinigung

Wir werden Prettier verwenden, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt zu bereinigen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele moderne Werkzeuge kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (solange Sie mit den [Standardeinstellungen](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies ermöglicht Ihnen, sich auf das Wesentliche zu konzentrieren: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses namens `.prettierrc.json`. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML- (HTML, JSX, Vue, Angular) Öffnungstags am Ende der letzten Zeile anstelle von alleine in der nächsten Zeile platzieren. Dies ist das Format, das MDN selbst verwendet. Weitere Informationen zur [Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Wir müssen jedoch keine generierten Dateien formatieren, oder es kann bestimmten Legacy-Code geben, den wir nicht ändern möchten. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Stammverzeichnis des Projektordners erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

Sie hat denselben Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie möglicherweise für Prettier andere Dateien ignorieren als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Bereinigen Ihres Codes über die Befehlszeile erfolgen, z.B.:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem in meinem Codeformat gibt, behebe es und speichere meine Datei". Dies ist gut für unseren Entwicklungsprozess, aber wir können `prettier` auch ohne das Flag verwenden, und es wird die Datei nur überprüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einer Veröffentlichung durchgeführt werden - d.h. "veröffentlichen Sie keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` durch jede andere Datei oder jedes andere Verzeichnis ersetzen, das Sie formatieren möchten. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen, können Sie sie auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

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

Es kann trotzdem mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung von speziellen "git hooks", um zu testen, ob der Code formatiert ist, bevor ein Commit durchgeführt wird.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git Hook? Git (nicht GitHub) bietet ein System, mit dem wir Pre- und Post-Aktionen an die Aufgaben anhängen können, die wir mit git ausführen (wie zum Beispiel das Committen des Codes). Obwohl git Hooks ein wenig überkompliziert erscheinen können (meiner Meinung nach), können sie, wenn sie eingerichtet sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, den Code automatisch beim Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, hübsch formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Der Editor muss lediglich "Format On Save" aktiviert haben.

### Werkzeuge zur Code-Kontrolle

Linting trägt zur Codequalität bei, ist aber auch eine Möglichkeit, potenzielle Fehler frühzeitig während der Entwicklung zu erkennen. Es ist eine Schlüsselzutat für eine gute Toolchain und eine, die viele Entwicklungsprojekte standardmäßig enthalten.

Web-Entwicklungslinting-Tools existieren hauptsächlich für JavaScript (obwohl es auch einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder ungültiges CSS-Attribut verwendet wird, wird aufgrund der belastbaren Natur dieser zwei Sprachen nichts wahrscheinlich kaputtgehen. JavaScript ist viel fragiler — das versehentliche Aufrufen einer Funktion, die nicht existiert, führt zum Beispiel dazu, dass Ihr JavaScript kaputtgeht; das Linting von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das Standard-Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsstarkes und vielseitiges Tool, kann aber schwierig zu konfigurieren sein und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration „genau richtig“ zu bekommen!

ESLint wird über npm installiert, also wie in Kapitel 2 besprochen, haben Sie die Möglichkeit, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird stark empfohlen, da Sie sowieso eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den auszuführenden Befehl:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vordefinierte ESLint-Konfigurationen, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Out of the box wird ESLint sich darüber beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js`, im Stammverzeichnis des Projekts):

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
- Sagt ESLint, generierte Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Sagt ESLint, `.js` und `.jsx` Dateien beim Linting zu berücksichtigen
- Sagt ESLint über die Existenz der globalen Variablen des Browsers (verwendet von Lint-Regeln wie `no-undef` zur Überprüfung nicht existierender Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht und seine empfohlenen Regeln behandeln React-spezifische Semantiken nicht. Daher werden wir ein wenig mehr Konfiguration hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins aufzunehmen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Einstellungen für JSX festlegt:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zu den einzeiligen Ergänzungen für die Konfigurationen von `eslint-plugin-react`. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu bekommen oder um eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung jedoch: Die ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Zur Vereinfachung werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser bestimmtes Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel verfeinern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert wird), es sehr wahrscheinlich ist, dass dies mit der richtigen ESLint-Konfiguration erreicht werden kann.

Wie bei anderen Tools ist die Unterstützung der Integration von Code-Editoren für ESLint in der Regel gut und potenziell nützlicher, da sie uns eine Rückmeldung in Echtzeit geben kann, wenn Probleme auftreten:

![ESLint-Fehlerintegration gezeigt in VS Code](eslint-error.png)

Das war unser Setup für die Entwicklungsumgebung an dieser Stelle. Jetzt sind wir (fast) bereit zu programmieren.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein sofortiges Problem ist, dass kein Browser eine native Unterstützung für JSX hat; es ist eine Zwischensprache, die dazu gedacht ist, in die von den Browsern verstandenen Sprachen im Produktionscode kompiliert zu werden. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu verwandeln, das der Browser ohne Probleme konsumieren kann.

Es gibt mehrere Auswahlmöglichkeiten für Transformatortools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite Config! Fügen Sie eine hinzu in `vite.config.js` im Stammverzeichnis des Projekts:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, sodass Sie die Option `base` entsprechend dem Namen Ihres GitHub-Repositories setzen sollten — aber Sie können es jederzeit anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS verwendet möglicherweise auch Syntax, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten Browser-Versionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen kaputten Stil anzeigen werden. Wir können ein Tool verwenden, um unser CSS in ein Format zu verwandeln, das alle von uns angepeilten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS so konzipiert, dass standardmäßiges CSS (d.h. CSS-Syntax, die eines Tages in Browser gelangen könnte) geschrieben wird, während Sass selbst eine benutzerdefinierte Sprache ist, die in CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS von Haus aus](https://vite.dev/guide/features.html#postcss), sodass Sie es nur [konfigurieren müssen](https://github.com/postcss/postcss#usage), wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist einer der Wege, CSS-Modularisierung zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` gleich gestylt werden. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Scope definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen auf die Seiten beschränken, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie sich ansehen, wie wir die `.module.css` Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl dieser Teil unserer Toolchain recht schmerzhaft sein kann, gibt es, da wir ein Tool gewählt haben, das absichtlich versucht, die Konfiguration und Komplexität zu reduzieren, wirklich nichts weiter, das wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in „normales CSS“ transformiert, und unsere Entwicklung wird durch den Buildprozess nicht behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungstoolchain eingerichtet haben, ist es in der Regel an der Zeit, echten Code zu schreiben — der Teil, in den Sie in der Regel die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir sie selbst geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge darauf auszuführen, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos auf Ihre lokale Festplatte herunter und entpacken Sie sie an einem Ort. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie jetzt den Inhalt des `src` Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Die anderen Dateien müssen Sie nicht beachten.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das war alles, was wir jetzt tun müssen!

## Die Transformation ausführen

Um mit unserem Projekt zu arbeiten, führen wir den Vite-Server in der Befehlszeile aus. In seinem Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server aktualisieren. Dies ist schön, da wir nicht ständig zwischen dem Code und der Befehlszeile hin- und herspringen müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (mit dem benutzerdefinierten Skript, das wir zuvor definiert haben):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe wie diese sehen (nachdem die Abhängigkeiten installiert wurden):

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   Der Server läuft jetzt auf der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispielanwendung laufend sehen!

Jetzt können wir ein paar Änderungen vornehmen und deren Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` mit Ihrem bevorzugten GitHub-Repo, wie z.B. `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann direkt zurück zur App, die in Ihrem Browser läuft. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und die Diagramme sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen weiten Weg zurückgelegt und eine recht schöne lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

Normalerweise würden Sie sich zu diesem Zeitpunkt der Websoftwareentwicklung daran machen, den Code für die Software, die Sie bauen möchten, zu erstellen. Da es in diesem Modul darum geht, etwas über die Tools zur Webentwicklung zu lernen, nicht über den Webentwicklungscode selbst, werden wir Ihnen kein tatsächliches Codieren beibringen — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge darauf anzuwenden. Wir würden Ihnen vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durchgehen, und dann können Sie versuchen, den Inhalt des src-Verzeichnisses zu Ihrem eigenen Projekt zu ändern und das auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
