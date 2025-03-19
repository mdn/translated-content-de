---
title: Einführung in eine vollständige Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln der Serie festigen wir Ihr Wissen über Tools, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir gehen vom Einrichten einer sinnvollen Entwicklungsumgebung und der Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und setzen unsere Code-Transformationstools auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu festigen, was wir bisher gelernt haben, indem wir eine vollständige Toolchain-Fallstudie durcharbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt tatsächlich unbegrenzte Kombinationen von Tools und Möglichkeiten, diese zu verwenden. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Werkzeuge über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) haben Unterstützung für eine _Vielzahl_ von Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt, wobei die Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezogen werden.

## In unserer Toolchain verwendete Tools

In diesem Artikel verwenden wir die folgenden Tools und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine auf [React](https://react.dev/) bezogene Syntaxerweiterung, die es Ihnen ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Fähigkeiten.
- [Vite](https://vite.dev/), um unseren Code zu bauen und zu minimieren, und um automatisch eine Menge Konfigurationsdateiinhalte für uns zu schreiben.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control), um unsere Quellcodeverwaltung zu betreiben und schließlich unsere Website (unter Verwendung von GitHub Pages) bereitzustellen.

Möglicherweise sind Ihnen nicht alle oben genannten Funktionen und Tools oder deren Aufgaben bekannt, aber keine Sorge — wir erklären jeden Teil, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Verbindungen Sie in Ihrer Toolchain haben, desto komplexer und potenziell fragil ist sie — zum Beispiel könnte sie komplexer zu konfigurieren sein und leichter brechen. Umgekehrt, je weniger Verbindungen, desto stabiler ist die Toolchain wahrscheinlich.

Alle Webprojekte sind unterschiedlich und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig erwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Links hat. Sie würden das HTML von Hand codieren, "Vanilla JavaScript" verwenden (was bedeutet, keine Frameworks oder Vermittlungssprachen), und alles manuell auf einen Server zum Hosten hochladen.

Allerdings werden anspruchsvollere Softwareanforderungen wahrscheinlich von der Verwendung von Tools profitieren, die helfen, den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie Tests einbeziehen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie vorgesehen funktioniert — das klingt schon nach einer notwendigen Toolchain.

Für unser Beispielprojekt werden wir eine speziell für unsere Softwareentwicklung entwickelte Toolchain verwenden und die technischen Entscheidungen aus der Softwaredesignphase unterstützen. Wir vermeiden jedoch überflüssige Werkzeuge, um die Komplexität so gering wie möglich zu halten.

## Überprüfung der Voraussetzungen

Wenn Sie den vorhergehenden Kapiteln gefolgt sind, sollten Sie bereits die meisten Softwareteile haben. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Tools, die wir installieren werden, um zu unserer Toolchain beizutragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig absolvieren möchten. Sie können jedoch dennoch den lokalen Entwicklungsteil ohne es absolvieren. Wie bereits erwähnt, ist GitHub ein Quellcoderepository-Service, der Community-Funktionen wie Issue-Tracking, Verfolgung von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir auf ein GitHub-Code-Repository pushen, das einen Kaskadeneffekt auslösen wird, der alle Software auf eine Heimat im Web bereitstellen (sollte).

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir installieren eine weitere Software, git, um bei der Versionskontrolle zu helfen.

Möglicherweise haben Sie schon einmal von "git" gehört. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Versionskontrolltool, das Entwicklern zur Verfügung steht — Versionskontrolle bietet viele Vorteile, wie eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und ein Mechanismus, um in einem Team an demselben Projekt zu arbeiten, ohne Angst haben zu müssen, den Code des anderen zu überschreiben.

Es mag offensichtlich erscheinen, aber es sei erwähnt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrolltool, während [GitHub](https://github.com/) ein Online-Speicher für Git-Repositories ist (plus eine Reihe nützlicher Werkzeuge zur Arbeit mit ihnen). Beachten Sie, dass wir zwar GitHub in diesem Kapitel verwenden, es jedoch mehrere Alternativen gibt, einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und die Einbeziehung als Teil der Toolchain wird helfen, die Weiterentwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, "Blöcke" von Arbeit zu "committen" während Sie fortschreiten, zusammen mit Kommentaren wie "X neue Funktion implementiert" oder "Fehler Z jetzt behoben dank Y Änderungen".

Versionskontrolle kann Ihnen auch erlauben, Ihr Projekt zu _verzweigen_, eine separate Version zu erstellen, und neue Funktionalität auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code betreffen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf eine Zeit zurückzusetzen "als es funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, was alle Entwickler ab und zu tun müssen!

Git kann [über die git-scm-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den entsprechenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie im Moment tun müssen.

Sie können auf mehrere Arten mit git interagieren, von der Verwendung der Befehlszeile, um Befehle auszuführen, bis zur Verwendung einer [git-GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Drücken von Tasten auszuführen, oder sogar direkt innerhalb Ihres Code-Editors, wie im Visual Studio Code-Beispiel unten zu sehen ist:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir im vorhergehenden Kapitel bereits begonnen haben, stellen Sie also sicher, dass Sie die Anweisungen in [Paketmanagement](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Um es zusammenzufassen, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min`-Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in der package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert sein:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter gestalten. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeug, das es uns ermöglicht, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer anderen Sprache insgesamt (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so zu transformieren, dass die Produktionsversion auf einer Vielzahl moderner und älterer Browser läuft.
- **Nach der Entwicklung**: Werkzeug, das nach Abschluss des Hauptentwicklungsabschnitts zum Einsatz kommt, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir uns ansehen, wie Sie Ihrer App Tests hinzufügen und sie mit GitHub Pages bereitstellen, damit sie für das gesamte Web sichtbar ist.

Lassen Sie uns mit diesen Schritten beginnen und mit unserer Entwicklungsumgebung starten. Wir werden denselben Schritten folgen, wie ein reales Projekt eingerichtet würde, sodass Sie in Zukunft, wenn Sie ein neues Projekt einrichten, dieses Kapitel als Referenz verwenden und die Schritte erneut durchführen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Rabbit Hole" von Werkzeugen zu fallen, in dem Sie viel Zeit damit verbringen, zu versuchen die Umgebung "genau richtig" zu gestalten.

Aber Sie können dies auf dieselbe Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position für Ihre Körperhaltung stehen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnte wichtige Dekorationen oder Musik geben, die Ihrem mentalen Zustand helfen — all dies ist wichtig, um Ihre beste Arbeit zu leisten, und sollte nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

In gleicher Weise, wenn die Einrichtung Ihrer Entwicklungsumgebung gut gemacht ist, muss sie nur einmal eingerichtet werden und kann in vielen zukünftigen Projekten wiederverwendet werden. Sie möchten diesen Teil der Toolchain möglicherweise halbregelmäßig überprüfen und überlegen, ob es Verbesserungen oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht allzu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die im Voraus installierten/initialisierten Tools sein:

- Bibliotheksinstallationstools — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufräumwerkzeuge — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Werkzeuge — zum Linting unseres Codes.

### Bibliotheksinstallationstools

Sie haben dies bereits getan, aber zur einfachen Referenz, hier sind die Befehle (auszuführen im Stammverzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um git's Quellkontrollfunktionalität für das Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da es sich nicht um von uns geschriebenen Code handelt und sie jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir im Stammverzeichnis des Projekts die Datei `.gitignore` erstellen und den folgenden Inhalt hinzufügen:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir verwenden Prettier, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir installieren Prettier erneut in diesem Projekt. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich entwickelte Tools kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/configuration.html) zufrieden sind). Dies ermöglicht Ihnen, sich auf das Wesentliche, die kreative Arbeit, zu konzentrieren. Um dies zu demonstrieren, fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML- (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile und nicht allein in der nächsten Zeile drucken. Dies ist das Format, das MDN selbst verwendet. Mehr über das [Konfigurieren von Prettier](https://prettier.io/docs/configuration.html) finden Sie in deren Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen spezifizierten Dateien. Wir müssen jedoch keine generierten Dateien formatieren, oder es gibt möglicherweise bestimmten Legacy-Code, den wir nicht anfassen wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir im Stammverzeichnis des Projekts die Datei `.prettierignore` erstellen und den folgenden Inhalt hinzufügen:

```plain
node_modules
dist
```

Es hat denselben Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Nun, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes auf der Kommandozeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies so, dass es bedeutet, "wenn es Probleme mit meinem Codeformat gibt, behebe sie bitte und speichere meine Datei". Das ist gut für unseren Entwicklungsprozess, aber wir können auch `prettier` ohne das Flag verwenden und es wird nur die Datei überprüfen. Die Überprüfung der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einem Release durchgeführt werden — d.h. "Veröffentlichen Sie keinen Code, der nicht ordnungsgemäß formatiert wurde".

Sie können auch `./index.html` mit jeder anderen Datei oder jedem anderen Ordner ersetzen, um diese zu formatieren. Für den Fall, dass Sie das Syntax vergessen sollten, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Jetzt können Sie den folgenden Befehl ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann dennoch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden von speziellen "git hooks", um zu testen, ob der Code formatiert ist, bevor ein Commit durchgeführt wird.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle bei jedem Speichern einer Datei auszuführen.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Vor- und Nachaktionen an die Aufgaben anzuhängen, die wir mit git ausführen (wie das Committen Ihres Codes). Obwohl git hooks ein bisschen übermäßig kompliziert sein können (meiner Meinung nach), können sie, wenn sie installiert sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht Dateien automatisch beim Speichern zu formatieren. Dies bedeutet, dass eine beliebige Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Der Editor muss nur "Format On Save" aktiviert haben.

### Code-Linting-Werkzeuge

Linting hilft bei der Codequalität und ist auch eine Möglichkeit, potenzielle Fehler frühzeitig während der Entwicklung zu erkennen. Es ist ein wesentlicher Bestandteil einer guten Toolchain und wird bei vielen Entwicklungsprojekten standardmäßig enthalten sein.

Web-Entwicklung Linting-Werkzeuge existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Dies macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der widerstandsfähigen Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist viel anfälliger — das versehentliche Aufrufen einer Funktion, die nicht existiert, führt beispielsweise dazu, dass Ihr JavaScript bricht; JavaScript-Linting ist daher sehr wichtig, insbesondere für größere Projekte.

Das bevorzugte Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann jedoch schwierig richtig zu konfigurieren sein, und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, sodass Sie, wie wir es in Kapitel 2 besprochen haben, die Wahl haben, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie sowieso für jedes Projekt eine Konfigurationsdatei brauchen. Denken Sie daran, den Befehl auszuführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Anmerkung:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das Paket `@eslint/js` stellt vordefinierte ESLint-Konfigurationen bereit, während das `globals`-Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Out of the box wird ESLint beschweren, dass es die Konfigurationsdatei nicht finden kann, falls Sie es mit `npx eslint` ausführen:

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

- Schaltet die "empfohlene" ESLint-Einstellungen ein
- Weist ESLint an, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Weist ESLint an, `.js` und `.jsx`-Dateien in das Linting einzuschließen
- Informiert ESLint über die Existenz der globalen Variablen der Browser (verwendet von Lint-Regeln wie `no-undef` zur Überprüfung nicht vorhandener Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Wir werden daher einige weitere Konfigurationen hinzufügen, um JSX und React ordnungsgemäß zu unterstützen. Installieren Sie zuerst das `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von richtigem und idiomatischen React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins aufzunehmen, die sowohl die empfohlenen Regeln laden als auch die Parser-Optionen für JSX festlegen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas unpraktisch, verglichen mit den Einzeilen-Ergänzungen für die `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Herzenslust anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, um entweder Inspiration zu bekommen oder eine auszuwählen, die zu Ihren eigenen Standards passt. Eine Vorwarnung jedoch: Die ESLint-Konfiguration ist eine sehr tiefgehende Angelegenheit!

Für den Zweck der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und dessen Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel festlegen und durchsetzen möchten, wie Ihr Code aussehen (oder validieren) soll, dies höchstwahrscheinlich mit der richtigen ESLint-Konfiguration möglich ist.

Wie bei anderen Tools ist die Unterstützung für die Integration in den Code-Editor typischerweise gut für ESLint und potenziell nützlicher, da es uns sofortiges Feedback gibt, wenn Probleme auftauchen:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

Damit ist das Setup unserer Entwicklungsumgebung abgeschlossen. Jetzt sind wir (fast) bereit, mit dem Codieren zu beginnen.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt wird, wie oben erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die in einer Sprache kompiliert werden soll, die der Browser in der Produktionsversion versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird es sofort eine Beschwerde geben; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser problemlos konsumieren kann.

Es gibt eine Reihe von Wahlmöglichkeiten für Transformationstools, und während Babel ein besonders beliebtes ist, verwenden wir in Vite ein integriertes Plugin: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine unter `vite.config.js` im Stammverzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://Ihr-Benutzername.github.io/Ihr-Repo-Name` gehostet. Sie sollten die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories setzen — aber Sie können sie jederzeit anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS könnte ebenfalls eine nicht von Browsern verstandene Syntax verwenden. Beispielsweise könnten Sie eine Syntax verwenden, die nur in den letzten Browser-Versionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen fehlerhaften Stil anzeigen. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle Browser, die wir anvisieren, verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachbearbeitungstool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (d.h. CSS-Syntax, die eines Tages in Browser gelangt), während Sass eine eigene, in CSS kompilierte Sprache ist. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie bestimmte Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um herauszufinden, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularität_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf dieselbe Weise gestylt werden. Dies führt häufig zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen werden im globalen Scope definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie überprüfen, wie wir die `.module.css`-Dateien verwenden, und auch die [Dokumentation zu CSS-Modulen](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Stufe unserer Toolchain ziemlich schmerzhaft sein kann, da wir ein Werkzeug ausgewählt haben, das absichtlich versucht, die Konfiguration und Komplexität zu reduzieren, müssen wir während der Entwicklungsphase wirklich nichts mehr tun. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Nun, da wir die vollständige Entwicklungstoolchain eingerichtet haben, ist es normalerweise an der Zeit, damit zu beginnen, echten Code zu schreiben — der Teil, in den Sie normalerweise die meiste Zeit investieren sollten. Für unsere Zwecke jedoch werden wir nur etwas vorhandenen Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht erklären, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge darauf auszuführen, um zu lernen, wie _sie_ arbeiten.

Um die Code-Dateien zu beschaffen, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos herunter und entpacken Sie ihn irgendwo auf Ihrer lokalen Festplatte. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Klonen oder Herunterladen_ > _ZIP herunterladen_ auswählen.

![Das GitHub-Beispielrepo](github-repo.png)

Nun kopieren Sie den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Die anderen Dateien brauchen Sie nicht zu beachten.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, führen wir den Vite-Server auf der Kommandozeile aus. In seinem Standardmodus wird er Änderungen in Ihrem Code überwachen und den Server aktualisieren. Das ist angenehm, weil wir nicht zwischen dem Code und der Kommandozeile hin und her wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des zuvor definierten benutzerdefinierten Skripts):

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

   Der Server läuft nun unter der URL, die gedruckt wurde (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir einige Änderungen vornehmen und deren Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repository, z.B. `facebook/react`.
3. Speichern Sie die Datei, und gehen Sie dann direkt zurück zur App, die in Ihrem Browser läuft. Sie werden bemerken, dass sich der Browser automatisch aktualisiert hat und die Grafiken sich geändert haben!

Sie könnten auch versuchen ESLint und Prettier zu verwenden — versuchen Sie absichtlich eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um es zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint`-Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen langen Weg zurückgelegt und eine recht nette lokale Entwicklungsumgebung für die Erstellung einer Anwendung aufgebaut.

Zu diesem Zeitpunkt der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software, die Sie bauen möchten, erstellen. Da es in diesem Modul jedoch darum geht, die Tools rund um die Webentwicklung zu lernen und nicht den Webentwicklungscode selbst, werden wir Ihnen keinen echten Code beibringen — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie erstellt, um Ihre Werkzeuge darauf zu verwenden. Wir empfehlen Ihnen, den Rest des Kapitels mit unserem Beispielcode durchzuarbeiten, und dann können Sie versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird das Bereitstellen auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
