---
title: Einführung in eine vollständige Toolchain
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Tools festigen, indem wir Sie durch den Prozess des Aufbaus einer Muster-Toolchain führen. Wir gehen den ganzen Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung und dem Einrichten von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel werden wir die Fallstudie vorstellen, unsere Entwicklungsumgebung einrichten und unsere Code-Transformationstools einrichten.

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
        Um das bisher Gelernte zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie durchlaufen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu verwenden. Was Sie in diesem und dem nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools für ein Projekt genutzt werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Tools über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) haben Integrationsunterstützung für _eine Menge_ von Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt, wobei die Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezogen werden.

## In unserer Toolchain verwendete Tools

In diesem Artikel verwenden wir die folgenden Tools und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein [React](https://react.dev/)-bezogenes Satz von Syntaxerweiterungen, die es Ihnen ermöglichen, Komponentenstrukturen in JavaScript zu definieren. Sie müssen React nicht kennen, um dieses Tutorial zu folgen, aber wir haben dies integriert, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten eingebauten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zur Formatierung und [ESLint](https://eslint.org/) zur Fehlererkennung.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Funktionen.
- [Vite](https://vite.dev/), um unseren Code zu erstellen und zu minimieren und eine Menge Konfigurationsdatei-Inhalte automatisch für uns zu schreiben.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub), um unsere Quellcodeverwaltung zu verwalten und schließlich unsere Site bereitzustellen (unter Verwendung von GitHub Pages).

Sie sind möglicherweise nicht mit allen oben genannten Funktionen und Tools oder deren Nutzung vertraut, aber keine Panik — wir erklären jeden Teil, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Links Sie in Ihrer Toolchain haben, desto komplexer und potenziell brüchiger ist sie — zum Beispiel kann sie komplexer zu konfigurieren und leichter zu brechen sein. Umgekehrt, je weniger Verbindungen, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Verbindungen hat. Sie würden das HTML von Hand codieren, "Vanilla JavaScript" verwenden (was bedeutet, dass keine Frameworks oder Zwischen-Sprachen verwendet werden) und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden kompliziertere Softwareanforderungen wahrscheinlich von der Nutzung von Tools profitieren, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten vor der Bereitstellung auf Ihrem Produktionsserver Tests durchgeführt werden, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell dazu entwickelt wurde, unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen zu unterstützen, die während der Softwareentwurfsphase getroffen wurden. Wir werden jedoch unnötige Tools vermeiden, mit dem Ziel, die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meiste Software bereits besitzen, wenn Sie die vorherigen Kapitel befolgt haben. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Ein GitHub-Konto erstellen

Neben den Tools, die wir installieren, um zu unserer Toolchain beizutragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Allerdings können Sie den lokalen Entwicklungsteil auch ohne es verfolgen. Wie zuvor erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Problemverfolgung, Verfolgung von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir ein GitHub-Code-Repository pushen, das einen Kaskadeneffekt auslösen sollte, der die gesamte Software in ein Zuhause im Web bereitstellt.

Registrieren Sie sich für [GitHub](https://github.com/), indem Sie auf der Startseite den _Sign Up_ Link anklicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine andere Software installieren, git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Versionskontrollwerkzeug für Quellcode, das Entwicklern zur Verfügung steht — Versionskontrolle bietet viele Vorteile, wie zum Beispiel eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um im Team am selben Projekt zu arbeiten, ohne Angst zu haben, sich gegenseitig den Code zu überschreiben.

Es mag offensichtlich für einige sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Speicher für git-Repositories ist (plus eine Reihe nützlicher Tools für die Arbeit damit). Beachten Sie, dass, obwohl wir GitHub in diesem Kapitel verwenden, es mehrere Alternativen gibt, einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und dass Sie sogar Ihre eigenen git-Repositories hosten könnten.

Die Verwendung von Versionskontrolle in Ihren Projekten und deren Einbindung in die Toolchain wird Ihnen helfen, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, Blockarbeitsschritte zu "committen", während Sie voranschreiten, zusammen mit Kommentaren wie "Funktion X neu implementiert" oder "Fehler Z jetzt behoben aufgrund von Änderungen Y".

Versionskontrolle kann Ihnen auch erlauben, Ihren Projektcode in verschiedene "Branches" aufzuteilen, eine separate Version zu erstellen und neue Funktionen auszuprobieren, ohne dass diese Änderungen den ursprünglichen Code betreffen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zu einem Zeitpunkt "als es noch funktionierte" zurückzukehren, wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler von Zeit zu Zeit tun müssen!

Git kann [über die git-scm-Webseite heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie das relevante Installationsprogramm für Ihr System herunter, führen Sie es aus und folgen Sie den On-Screen-Anweisungen. Das ist alles, was Sie im Moment tun müssen.

Sie können mit git auf verschiedene Weisen interagieren, von der Verwendung der Befehlszeile zum Ausführen von Befehlen bis hin zur Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Drücken von Schaltflächen auszuführen, oder sogar direkt innerhalb Ihres Code-Editors, wie im folgenden Visual Studio Code-Beispiel zu sehen:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir bereits im vorherigen Kapitel gestartet haben, also stellen Sie sicher, dass Sie die Anweisungen in [Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zusammenfassend sollten Sie Folgendes haben:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder einen anderen Namen).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert sein:

- **Entwicklungsumgebung**: Die grundlegenden Tools zur Ausführung Ihres Codes. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns erlauben, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer anderen Sprache ganz (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und unseren Code dann so zu transformieren, dass die Produktionsversion immer noch auf einer Vielzahl von Browsern läuft, modern und älter.
- **Post-Entwicklung**: Tools, die nach der Entwicklung des Hauptteils in Aktion treten, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir das Hinzufügen von Tests für Ihren Code untersuchen und Ihre App mit GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Lassen Sie uns mit diesen beginnen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte befolgen, wie ein reales Projekt eingerichtet werden würde, damit Sie bei der Erstellung eines neuen Projekts zukünftig wieder auf dieses Kapitel zurückgreifen und die Schritte erneut befolgen können.

## Erstellung einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit betrachtet, und es kann sehr leicht passieren, dass man in ein "Kaninchennest" voller Tools gerät, in dem man viel Zeit damit verbringt, die Umgebung "genau richtig" zu gestalten.

Aber Sie können dies auf die gleiche Weise betrachten wie das Einrichten Ihres physischen Arbeitsumfelds. Der Stuhl muss bequem sein und in einer guten Position stehen, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Ports! Es könnten wichtige Dekorationen oder Musik sein, die Ihrem mentalen Zustand helfen — all diese sind wichtig, um Ihre beste Arbeit leisten zu können, und sie sollten auch nur einmal eingerichtet werden müssen, wenn sie richtig ausgeführt werden.

In der gleichen Weise sollte die Einrichtung Ihrer Entwicklungsumgebung, wenn sie gut gemacht ist, nur einmal durchgeführt werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain von Zeit zu Zeit überprüfen und in Betracht ziehen wollen, ob es irgendwelche Upgrades oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer recht vollständigen Toolchain werden die Tools, die von Anfang an installiert/initiiert werden, sein:

- Bibliotheksinstallations-Tools — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufräumtools — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Fehlererkennungstools — zur Fehlererkennung in unserem Code.

### Bibliotheksinstallations-Tools

Sie haben dies bereits getan, aber zur einfachen Referenz hier die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcode-Kontrollfunktion von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie keinen Code enthalten, den wir geschrieben haben, und jederzeit neu erzeugt werden können. Wir können git auffordern, diese Dateien zu ignorieren, indem wir eine `.gitignore` Datei im Stamm des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufräumtools

Wir werden Prettier verwenden, das wir in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier in diesem Projekt erneut installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie wieder, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele neue Werkzeuge kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dadurch können Sie sich auf das Wichtige konzentrieren: die kreative Arbeit. Zur Demonstration fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stamm Ihres `npm-experiment` Verzeichnisses namens `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) Öffnungstags am Ende der letzten Zeile drucken, anstatt allein auf der nächsten Zeile zu sein. Dies ist das Format, das das MDN selbst verwendet. Sie können mehr über [die Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) in seiner Dokumentation nachlesen.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Allerdings müssen wir erneut keine generierten Dateien formatieren, oder es gibt möglicherweise bestimmten Alt-Code, den wir nicht berühren wollen. Wir können Prettier mitteilen, immer diese Dateien zu ignorieren, indem wir eine `.prettierignore` Datei im Stamm des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

Es hat denselben Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem in meinem Codeformat gibt, gehe voran und behebe sie, dann speichere meine Datei". Dies ist in unserem Entwicklungsprozess in Ordnung, aber wir können auch `prettier` ohne das Flag verwenden und es wird nur die Datei prüfen. Die Prüfung der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einer Freigabe laufen - d.h. "veröffentliche keinen Code, der nicht richtig formatiert wurde."

Sie können auch `./index.html` durch eine andere Datei oder einen anderen Ordner ersetzen, um diese zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Nun können Sie das Verzeichnis folgendermaßen formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden spezieller "git hooks", um zu testen, ob der Code formatiert ist, bevor ein Kommit erfolgt.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System, das uns ermöglicht, Vor- und Nach-Aktionen an die Aufgaben anzuhängen, die wir mit git durchführen (wie das Kommentieren Ihres Codes). Auch wenn git hooks ein wenig zu kompliziert sein können (nach Meinung dieses Autors), können sie, wenn sie einmal im Einsatz sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), der es VSCode ermöglicht, Code automatisch beim Speichern zu formatieren. Dies bedeutet, dass jede Datei in dem Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markup und mehr. Alles, was der Editor braucht, ist "Format On Save" aktiviert.

### Code-Linting-Tools

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler früher im Entwicklungsprozess zu erkennen. Es ist ein Schlüsselelement einer guten Toolchain, und eine, die viele Entwicklungsprojekte standardmäßig beinhalten werden.

Linting-Tools für die Webentwicklung existieren hauptsächlich für JavaScript (obwohl es auch einige für HTML und CSS gibt). Das ist sinnvoll: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der widerstandsfähigen Natur dieser beiden Sprachen wahrscheinlich nichts kaputtgehen. JavaScript ist wesentlich anfälliger — wenn zum Beispiel versucht wird, eine Funktion aufzurufen, die nicht existiert, bricht Ihr JavaScript; das Linting von JavaScript ist daher sehr wichtig, insbesondere bei größeren Projekten.

Das bevorzugte Werkzeug zum Linting von JavaScript ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsfähiges und vielseitiges Werkzeug, kann jedoch schwierig richtig zu konfigurieren sein, und man könnte leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, sodass Sie, wie in Kapitel 2 besprochen, die Möglichkeit haben, dieses Tool lokal oder global zu installieren. Eine lokale Installation wird jedoch dringend empfohlen, da Sie ohnehin für jedes Projekt eine Konfigurationsdatei benötigen. Denken Sie an den Befehl:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, den wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vordefinierte ESLint-Konfigurationen, während das `globals`-Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Von Haus aus wird ESLint sich beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js`, im Wurzelverzeichnis des Projekts):

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
- Sagt ESLint, `.js`- und `.jsx`-Dateien ins Linting einzubeziehen
- Sagt ESLint die Existenz der Browser-Globalvariablen (verwendet von Lint-Regeln wie `no-undef` zum Überprüfen nicht existierender Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln berücksichtigen keine React-spezifischen Semantiken. Daher werden wir einige weitere Konfigurationen hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben korrekter und idiomatischer React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln laden als auch die Parser-Optionen für JSX setzen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist ein bisschen ungeschickt im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben optimieren und konfigurieren können, und viele Unternehmen und Teams haben [ihre eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sind, entweder um Inspiration zu bekommen oder um eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung jedoch: Die Konfiguration von ESLint ist ein sehr tiefes Kaninchenloch!

Der Einfachheit halber werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezifisches Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel für das Aussehen (oder die Validierung) Ihres Codes verfeinern und erzwingen möchten, dies mit der richtigen ESLint-Konfiguration sehr wahrscheinlich möglich ist.

Wie bei anderen Tools ist die Integration in Code-Editoren für ESLint in der Regel gut und potenziell nützlicher, da wir Echtzeit-Feedback erhalten können, wenn Probleme auftreten:

![ESLint-Fehler-Integration in VS Code gezeigt](eslint-error.png)

Das ist unser Setup der Entwicklungsumgebung zu diesem Zeitpunkt abgeschlossen. Nun, letztendlich, sind wir (fast) bereit zu coden.

## Bau- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen nutzen. Ein sofortiges Problem ist, dass kein Browser JSX nativ unterstützt; es ist eine Zwischen-Sprache, die in Sprachen kompiliert werden soll, die der Browser in der Produktionsversion versteht. Wenn der Browser versucht, den Quell-JavaScript auszuführen, wird er sofort beschweren; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser problemlos konsumieren kann.

Es gibt eine Reihe von Wahlmöglichkeiten für Transformationstools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit folgendem Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine in `vite.config.js` im Stammverzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen darüber, wie Sie Vite konfigurieren. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, also sollten Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositorys setzen — aber Sie können es immer noch später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser sie nicht erkennen und einen gebrochenen Stil anzeigen. Wir können ein Tool verwenden, um unser CSS so zu transformieren, dass alle von uns angezielten Browser es verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachbearbeitungstool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (das heißt, CSS-Syntax, die eines Tages in Browser kommen kann), während Sass eine eigene benutzerdefinierte Sprache ist, die in CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel niedrigere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie Funktionen kompilieren möchten. Überprüfen Sie die [cssdb](https://preset-env.cssdb.org/features/) für die unterstützten Funktionen.

Für unsere Zwecke demonstrieren wir eine andere CSS-Transformation: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt werden. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen werden im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem der Klassenname nur für die Seiten eindeutig ist, die sie verwenden. Um zu verstehen, wie es funktioniert, können Sie nach dem Herunterladen des Quellcodes sehen, wie wir die `.module.css`-Dateien verwenden, und lesen Sie auch die [CSS-Module-Dokumentation](https://github.com/css-module/css-modules).

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, müssen wir, weil wir ein Tool gewählt haben, das bewusst versucht, Konfigurationen und Komplexität zu reduzieren, während der Entwicklungsphase wirklich nichts weiter tun. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Development-Toolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben — der Teil, in den Sie eigentlich die meiste Zeit investieren sollten. Für unseren Zweck jedoch werden wir nur einige bestehende Quellcodes kopieren und so tun, als hätten wir sie geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich da, um die Tools darauf anzuwenden, um Ihnen zu zeigen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden und entpacken Sie die Inhalte dieses Repos irgendwo auf Ihrem lokalen Laufwerk. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich nicht um die anderen Dateien kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Transformation durchführen

Um mit unserem Projekt zu arbeiten, führen wir den Vite-Server auf der Befehlszeile aus. Im Standardmodus wird er Änderungen an Ihrem Code überwachen und den Server aktualisieren. Das ist schön, weil wir nicht ständig zwischen dem Code und der Befehlszeile hin- und herwechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (verwenden Sie das benutzerdefinierte Skript, das wir zuvor definiert haben):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe wie diese sehen (sobald die Abhängigkeiten installiert sind):

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   Der Server läuft jetzt unter der URL, die gedruckt wurde (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir ein paar Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, wie `facebook/react`.
3. Speichern Sie die Datei, gehen Sie dann direkt zurück zu der App, die in Ihrem Browser läuft. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und die Diagramme sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, viel des Leerzeichens aus einer Ihrer Dateien zu entfernen, und führen Sie Prettier darauf aus, um sie zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint`-Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel einen weiten Weg gegangen, um eine ziemlich schöne lokale Entwicklungsumgebung aufzubauen, um eine Anwendung zu erstellen.

Zu diesem Zeitpunkt während der Entwicklung von Websoftware würden Sie normalerweise Ihren Code für die Software entwickeln, die Sie erstellen möchten. Da es in diesem Modul darum geht, die Werkzeuge rund um die Webentwicklung zu lernen und nicht die Webentwicklungs-Codes selbst, werden wir Ihnen keine wirklichen Codes beibringen — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Tools darauf anzuwenden. Wir würden vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten, und dann können Sie versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
