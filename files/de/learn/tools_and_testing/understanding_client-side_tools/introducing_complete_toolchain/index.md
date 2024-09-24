---
title: Einführung in eine vollständige Toolchain
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 3bfbb30511072e6318b12b56c0b4208448fa36bf
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln dieser Serie festigen wir Ihr Wissen über Tools, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir werden den gesamten Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung und der Implementierung von Umwandlungstools bis hin zur tatsächlichen Bereitstellung Ihrer App gehen. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und setzen unsere Code-Umwandlungstools auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Festigung dessen, was wir bisher gelernt haben, indem wir eine vollständige
        Toolchain-Fallstudie durchgehen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu verwenden. Was Sie in diesem und dem nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Tools über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) verfügen über Integrationsunterstützung für eine _Menge_ Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Tools, die in unserer Toolchain verwendet werden

In diesem Artikel verwenden wir die folgenden Tools und Features:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein [React](https://react.dev/)-bezogenes Set von Syntaxerweiterungen, die es ermöglichen, Strukturen von Komponenten innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen einen Eindruck davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Features (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Verschachtelungsfunktionen.
- [Vite](https://vitejs.dev/) zum Aufbau und zur Minimierung unseres Codes sowie zur automatischen Erstellung einer Reihe von Konfigurationsdateiinhalten für uns.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub), um unser Quellcode-Management zu übernehmen sowie letztendlich unsere Website bereitzustellen (unter Verwendung von GitHub Pages).

Es ist möglich, dass Sie nicht mit allen oben genannten Features und Tools vertraut sind oder wissen, was sie tun, aber keine Panik — wir erklären jeden Teil, während wir uns durch diesen Artikel bewegen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Ihre Toolchain hat, desto komplexer und potenziell brüchiger ist sie — zum Beispiel könnte es komplexer sein, sie zu konfigurieren, und leichter zu brechen. Im Umkehrschluss gilt: Je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte sind unterschiedlich, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind, und jeden Teil sorgfältig prüfen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code manuell schreiben, "vanilla JavaScript" verwenden (das heißt, keine Frameworks oder Zwischen-Sprachen), und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden komplexere Softwareanforderungen wahrscheinlich von der Nutzung von Tools profitieren, um den Entwicklungsprozess zu vereinfachen. Außerdem sollten Sie vor der Bereitstellung auf Ihrem Produktionsserver Tests einbeziehen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell darauf ausgelegt ist, unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen, die während der Software-Design-Phase getroffen wurden, zu unterstützen. Wir werden jedoch jegliche überflüssigen Tools vermeiden, mit dem Ziel, die Komplexität auf ein Minimum zu reduzieren.

## Überprüfen der Voraussetzungen

Sie sollten die meisten der benötigten Softwares bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal durchgeführt werden und müssen nicht für zukünftige Projekte wiederholt werden.

### Erstellen eines GitHub-Kontos

Zusätzlich zu den Tools, die wir installieren werden, um zu unserer Toolchain beizutragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch den lokalen Entwicklungsteil auch ohne es verfolgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositories, der Community-Features wie Problemverfolgung, die Verfolgung von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen wird, der (sollte) die gesamte Software auf einer Heimat im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine andere Software, git, installieren, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Werkzeug zur Versionskontrolle von Quellcode für Entwickler — die Versionskontrolle bietet viele Vorteile, wie eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um in einem Team am gleichen Projekt zu arbeiten, ohne Angst zu haben, den Code des anderen zu überschreiben.

Vielleicht ist es für einige offensichtlich, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Tool zur Versionskontrolle, während [GitHub](https://github.com/) ein Online-Store für git-Repositories ist (plus eine Reihe nützlicher Werkzeuge zur Arbeit mit ihnen). Beachten Sie, dass, obwohl wir GitHub in diesem Kapitel verwenden, es mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und deren Einbeziehung als Teil der Toolchain wird helfen, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, Arbeitsblöcke während des Fortschritts zu "committen", zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben dank Y Änderungen".

Die Versionskontrolle kann Ihnen auch erlauben, Ihren Projektcode zu _verzweigen_, eine separate Version zu erstellen und neue Funktionalitäten auszuprobieren, ohne dass diese Änderungen Ihren Originalcode beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt zurückzusetzen, "als er funktionierte", wenn ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler hin und wieder tun müssen!

Git kann [über die git-scm-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie das entsprechende Installationsprogramm für Ihr System herunter, führen Sie es aus, und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie derzeit tun müssen.

Sie können mit git auf verschiedene Arten interagieren, indem Sie entweder die Befehlszeile verwenden, um Befehle auszugeben, eine [git GUI-App](https://git-scm.com/downloads/guis) nutzen, um die gleichen Befehle durch Klicken von Schaltflächen auszugeben, oder direkt in Ihrem Code-Editor, wie im folgenden Visual Studio Code-Beispiel gezeigt:

![Git-Integration gezeigt in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir werden auf der Grundlage des Projekts aufbauen, das wir im vorherigen Kapitel begonnen haben. Stellen Sie also sicher, dass Sie die Anweisungen in [Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zur Erinnerung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder einen anderen Namen).
- Vite als Dev-Dependency installiert.
- Das Paket `plotly.js-dist-min` als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Tools, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist bereits im vorherigen Kapitel eingerichtet.
- **Sicherheitsnetz**: Machen Sie die Softwareentwicklungserfahrung stabiler und effizienter. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Umwandlung**: Tools, die es uns ermöglichen, die neuesten Features einer Sprache (z.B. JavaScript) oder eine andere Sprache vollständig (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und dann unseren Code so zu transformieren, dass die Produktionsversion immer noch auf einer Vielzahl von Browsern, modernen und älteren, läuft.
- **Nachentwicklung**: Tools, die ins Spiel kommen, nachdem Sie mit dem Hauptteil der Entwicklung fertig sind, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterläuft. In dieser Fallstudie werden wir uns ansehen, wie Sie Tests zu Ihrem Code hinzufügen und Ihre App mithilfe von GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Beginnen wir mit der Arbeit an diesen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte befolgen, wie ein echtes Projekt eingerichtet würde. Wenn Sie in Zukunft ein neues Projekt einrichten, können Sie sich auf dieses Kapitel beziehen und die Schritte erneut befolgen.

## Erstellung einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht sein, in ein "Rabbit Hole" von Tools zu fallen, bei dem Sie viel Zeit damit verbringen, die Umgebung "genau richtig" zu bekommen.

Aber Sie können dies genauso sehen wie die Einrichtung Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik vorhanden sein, die Ihrem Geisteszustand helfen – diese sind alle wichtig, um die bestmögliche Arbeit zu leisten, und sollten auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

In gleicher Weise sollte die Einrichtung Ihrer Entwicklungsumgebung, wenn gut gemacht, nur einmal durchgeführt werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain halbregelmäßig überprüfen wollen und überlegen, ob es irgendwelche Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht allzu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die Tools, die im Voraus installiert/eingeleitet werden, sein:

- Tools zur Bibliotheksinstallation – um Abhängigkeiten hinzuzufügen.
- Code-Versionskontrolle.
- Code-Aufräumtools – zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Tools – zum Linting unseres Codes.

### Tools zur Bibliotheksinstallation

Das haben Sie bereits getan, aber zur einfachen Bezugnahme, hier sind die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcode-Kontrollfunktionalität von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der von uns geschriebene Code sind und jederzeit neu generiert werden können. Wir können git sagen, dass diese Dateien ignoriert werden sollen, indem wir eine Datei `.gitignore` im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

### Code-Aufräumtools

Wir werden Prettier verwenden, das wir erstmals in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Wieder beachten wir, dass wir `--save-dev` verwenden, um es als Dev-Abhängigkeit hinzuzufügen, weil wir es nur während der Entwicklung verwenden.

Wie viele kürzlich erstellte Tools kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies lässt Sie sich auf das Wesentliche konzentrieren: die kreative Arbeit. Zum Demonstrationszweck fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier den `>` eines mehrzeiligen HTML- (HTML, JSX, Vue, Angular) Anfangstags am Ende der letzten Zeile ausgeben, anstatt allein in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Weitere Informationen zur [Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Wir müssen jedoch wiederum keine generierten Dateien formatieren, oder es kann bestimmter Legacy-Code vorhanden sein, den wir nicht berühren möchten. Wir können Prettier sagen, diese Dateien immer zu ignorieren, indem wir eine Datei `.prettierignore` im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

Sie hat den gleichen Inhalt wie `.gitignore`, aber in einem echten Projekt könnten Sie für Prettier andere Dateien ignorieren wollen als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "wenn es ein Problem im Codeformat gibt, beheben Sie es und speichern Sie meine Datei". Dies ist für unseren Entwicklungsprozess in Ordnung, aber wir können `prettier` auch ohne das Flag verwenden, und es wird nur die Datei prüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Checks, die vor einer Veröffentlichung laufen - d.h. "veröffentliche keinen Code, der nicht richtig formatiert ist."

Sie können `./index.html` auch durch eine andere Datei oder ein anderes Verzeichnis ersetzen, um sie zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Jetzt können Sie Folgendes ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann jedoch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden von speziellen "git hooks", um zu testen, ob der Code vor einem Commit formatiert wurde.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) bietet ein System, mit dem wir prä- und post-Aktionen an die Aufgaben anhängen können, die wir mit git ausführen (wie das Committen Ihres Codes). Obwohl git-Hooks etwas übermäßig kompliziert sein können (nach Meinung des Autors), können sie, sobald sie eingerichtet sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein sehr vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VSCode ermöglicht, Code automatisch beim Speichern zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist, dass "Format On Save" aktiviert ist.

### Code-Linting-Tools

Linting hilft bei der Code-Qualität, ist aber auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist eine Schlüsselkomponente einer guten Toolchain und eine, die viele Entwicklungsprojekte standardmäßig enthalten.

Webentwicklungs-Linting-Tools existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Das ist sinnvoll: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der widerstandsfähigen Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist viel zerbrechlicher — das versehentliche Aufrufen einer nicht existierenden Funktion verursacht zum Beispiel, dass Ihr JavaScript bricht; das Linting von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das gängigste Tool für das JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Tool, kann jedoch schwierig sein, korrekt zu konfigurieren, und Sie könnten viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, sodass Sie die Wahl haben, dieses Tool lokal oder global zu installieren, aber eine lokale Installation ist sehr zu empfehlen, da Sie für jedes Projekt ohnehin eine Konfigurationsdatei benötigen. Erinnere dich an den auszuführenden Befehl:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Note:** `eslint@8` installiert die Version 8 von ESLint, während die neueste Version 9 ist. Das liegt daran, dass `eslint-plugin-react`, das wir später verwenden, [Version 9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js`-Paket stellt vordefinierte ESLint-Konfigurationen bereit, während das `globals`-Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Direkt nach der Installation beschwert sich ESLint, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js` im Stammverzeichnis des Projekts):

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
- Sagt ESLint, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Sagt ESLint, `.js` und `.jsx`-Dateien in die Linting einzubeziehen
- Informiert ESLint über die Existenz der globalen Variablen des Browsers (verwendet durch Lint-Regeln wie `no-undef` zur Überprüfung nicht existierender Variablen).

Der ESLint-Parser versteht JSX nicht standardmäßig, und seine empfohlenen Regeln handhaben keine React-spezifische Semantik. Daher werden wir einige weitere Konfigurationen hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins zu enthalten, die sowohl die empfohlenen Regeln laden als auch die Parseroptionen für JSX festlegen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich, verglichen mit den Einzeilen-Ergänzungen für die `eslint-plugin-react`-Konfiguration. Das liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Mehr Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine komplette [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Ihrem Geschmack und Ihren Bedürfnissen anpassen können. Viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu finden oder um eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Warnung: Die ESLint-Konfiguration ist ein sehr tiefes Thema!

Zur Vereinfachung werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel für das Aussehen Ihres Codes (oder seine Validierung) verfeinern und durchsetzen möchten, dies sehr wahrscheinlich mit der richtigen ESLint-Konfiguration möglich ist.

Wie bei anderen Tools ist die Unterstützung von Code-Editor-Integrationen für ESLint in der Regel gut und möglicherweise nützlicher, da es uns Echtzeit-Feedback geben kann, wenn Probleme auftreten:

![ESLint-Fehlerintegration gezeigt in VS Code](eslint-error.png)

Das war die Einrichtung unserer Entwicklungsumgebung. Jetzt sind wir (fast) bereit, mit dem Codieren zu beginnen.

## Build- und Umwandlungstools

### JavaScript-Umwandlung

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Features verwenden. Ein sofortiges Problem besteht darin, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die in den Produktionendcode kompiliert werden soll. Wenn der Browser versucht, den Quell-JavaScript-Code auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser problemlos verarbeiten kann.

Es gibt eine Reihe von Möglichkeiten für Transformations-Tools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im `vite.config.js` im Stammverzeichnis des Projektverzeichnisses hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vitejs.dev/guide/) für weitere Informationen darüber, wie Sie Vite konfigurieren können. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie bei `https://your-username.github.io/your-repo-name` gehostet, sodass Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories setzen sollten – aber Sie können es immer noch später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) kommen.

### CSS-Umwandlung

Unser CSS kann auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel können Sie eine Syntax verwenden, die nur in den letzten wenigen Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen gestörten Stil anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle von uns angezielten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachbearbeitungstool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) zielt PostCSS darauf ab, _standardmäßiges_ CSS zu schreiben (das heißt CSS-Syntax, die eines Tages in Browser gelangen könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS steht dem Web näher und hat eine wesentlich niedrigere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vitejs.dev/guide/features.html#postcss), also müssen Sie es nur [konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Umwandlung demonstrieren: [CSS-Module](https://vitejs.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind. Wenn Sie also einen Klassennamen wie `.button` haben, werden alle Elemente mit dem Klassennamen `button` gleich gestylt. Dies führt häufig zu Namenskonflikten – stellen Sie sich vor, all Ihre JavaScript-Variablen würden im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen für die Seiten, die sie verwenden, einzigartig machen. Um zu verstehen, wie es funktioniert, können Sie nach dem Herunterladen des Quellcodes überprüfen, wie wir die `.module.css`-Dateien verwenden, und auch die [CSS-Modules-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl dieser Schritt unserer Toolchain ziemlich schmerzhaft sein können, gibt es dank der Wahl eines Tools, das bewusst versucht, die Konfiguration und Komplexität zu reduzieren, wirklich nichts mehr, das wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird durch den Build-Prozess nicht behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungs-Toolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben – der Teil, in den Sie eigentlich die meiste Zeit investieren sollten. Für unseren Zweck werden wir jedoch nur etwas bestehenden Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Tools darauf laufen zu lassen, um Ihnen zu zeigen, wie _sie_ arbeiten.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie die Inhalte dieses Repos auf Ihre lokale Festplatte herunter und entpacken Sie sie. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispielrepo](github-repo.png)

Kopieren Sie nun die Inhalte des `src`-Verzeichnisses des Projekts und verwenden Sie sie, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich um die anderen Dateien nicht kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir derzeit tun müssen!

## Ausführen der Umwandlung

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server in der Befehlszeile ausführen. In seinem Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server aktualisieren. Das ist schön, weil wir nicht ständig zwischen dem Code und der Befehlszeile wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (durch das benutzerdefinierte Skript, das wir zuvor definiert haben):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe sehen wie diese (sobald die Abhängigkeiten installiert sind):

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

2. Gehen Sie zu dieser URL in Ihrem Browser, und Sie werden die Beispiel-App sehen, die läuft!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr beliebtes GitHub-Repo, z.B. `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann direkt zurück zur App, die in Ihrem Browser läuft. Sie werden feststellen, dass der Browser automatisch aktualisiert wurde, und die Diagramme haben sich geändert!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden – versuchen Sie, absichtlich eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier auszuführen, um sie zu bereinigen, oder fügen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und prüfen, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint`-Befehl ausführen, oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel einen langen Weg gegangen und haben eine ziemlich nette lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

An diesem Punkt in der Websoftwareentwicklung würden Sie normalerweise den Code für die Software erstellen, die Sie entwickeln möchten. Da dieses Modul jedoch dem Erlernen der Tools rund um die Webentwicklung gewidmet ist und nicht dem Code der eigentlichen Webentwicklung selbst, werden wir Ihnen kein wirkliches Programmieren beibringen – diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Tools darauf zu verwenden. Wir empfehlen Ihnen, den Rest des Kapitels mit unserem Beispielcode durchzuarbeiten, und dann können Sie versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
