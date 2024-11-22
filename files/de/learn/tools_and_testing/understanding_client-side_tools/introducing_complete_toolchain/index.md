---
title: Einführung in eine vollständige Toolchain
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Tools festigen, indem wir Sie durch den Prozess führen, eine Beispiel-Toolchain aufzubauen. Wir beginnen mit dem Einrichten einer sinnvollen Entwicklungsumgebung und der Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel führen wir die Fallstudie ein, richten unsere Entwicklungsumgebung ein und stellen unsere Code-Transformationstools auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a>, und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das bisher Gelernte zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie durchlaufen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu nutzen. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch wert zu erwähnen, dass nicht alle diese Tools über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) unterstützen die Integration einer _Menge_ von Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu bauen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Tools in unserer Toolchain

In diesem Artikel verwenden wir die folgenden Tools und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/) verbundene Syntaxerweiterung, die es ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies eingeschlossen, um Ihnen eine Vorstellung zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten eingebauten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zur Formatierung und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Verschachtelungsmöglichkeiten.
- [Vite](https://vite.dev/) zum Bauen und Minifizieren unseres Codes und zur automatischen Erstellung einer Reihe von Konfigurationsdateiinhalten für uns.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub) zur Verwaltung unserer Quellcode-Kontrolle sowie zur schlussendlichen Bereitstellung unserer Site (unter Verwendung von GitHub Pages).

Möglicherweise sind Sie nicht mit all den oben genannten Funktionen und Tools oder deren Funktionsweise vertraut, aber keine Panik — wir erklären jeden Teil, während wir uns durch diesen Artikel bewegen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und möglicherweise anfälliger ist sie — beispielsweise könnte sie komplexer zu konfigurieren sein und leichter brechen. Umgekehrt, je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden das HTML von Hand codieren, "vanilla JavaScript" verwenden (d.h. keine Frameworks oder Zwischensprachen) und alles manuell auf einen Server hochladen, um es dort zu hosten.

Aufwendigere Softwareanforderungen profitieren jedoch wahrscheinlich vom Einsatz von Tools, die helfen, den Entwicklungsprozess zu vereinfachen. Zudem sollten Sie Tests durchführen, bevor Sie Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie vorgesehen funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell entwickelt wurde, um unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen während der Softwaredesignphase zu unterstützen. Wir werden jedoch alle überflüssigen Tools vermeiden, um die Komplexität so gering wie möglich zu halten.

## Voraussetzungen überprüfen

Sie sollten die meiste Software bereits installiert haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal durchgeführt werden und Sie müssen diese für zukünftige Projekte nicht noch einmal wiederholen.

### Ein GitHub-Konto erstellen

Neben den Tools, die wir installieren, um zu unserer Toolchain beizutragen, müssen Sie, falls Sie das Tutorial vollständig durchführen möchten, ein Konto bei GitHub erstellen. Sie können jedoch immer noch den lokalen Entwicklungsteil ohne es folgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositories, der Community-Funktionen wie Issue-Tracking, Folgen von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir ein GitHub-Code-Repository einrichten, was einen Kaskadeneffekt verursachen wird, der (hoffentlich) die gesamte Software an einem Ort im Web bereitstellt.

Registrieren Sie sich für [GitHub](https://github.com/) durch Klicken auf den _Sign Up_-Link auf der Homepage, falls Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir installieren ein weiteres Softwareprogramm, git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Versionskontrolltool, das Entwicklern zur Verfügung steht — die Versionskontrolle bietet viele Vorteile, wie z. B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um im Team am gleichen Projekt zu arbeiten, ohne die Angst, die Codes der anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es lohnt sich zu wiederholen: Git ist nicht dasselbe wie GitHub. Git ist das Tool zur Versionskontrolle, während [GitHub](https://github.com/) ein Online-Store für Git-Repositories ist (plus einer Reihe nützlicher Tools zum Arbeiten mit ihnen). Beachten Sie, dass, obwohl wir GitHub in diesem Kapitel verwenden, es mehrere Alternativen einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket) gibt, und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Die Verwendung von Versionskontrolle in Ihren Projekten und deren Einbindung als Teil der Toolchain hilft dabei, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, "Blöcke" von Arbeit zu "committen" während Sie fortschreiten, zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z behoben durch Y Änderungen".

Die Versionskontrolle kann Ihnen auch erlauben, Ihr Projekt zu _verzweigen_, wodurch eine separate Version erstellt wird, und neue Funktionalitäten darauf auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zu einem Zeitpunkt "als er funktionierte" zurückzusetzen, falls irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, was alle Entwickler ab und zu tun müssen!

Git kann über die [git-scm Website](https://git-scm.com/downloads) heruntergeladen und installiert werden — downloaden Sie das entsprechende Installationsprogramm für Ihr System, führen Sie es aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie für jetzt tun müssen.

Sie können mit git auf verschiedene Weise interagieren: von der Kommandozeile aus Befehle ausführen, ein [git GUI-App](https://git-scm.com/downloads/guis) verwenden, um dieselben Befehle durch Tastendrücken auszuführen, oder sogar direkt in Ihrem Code-Editor, wie im Beispiel von Visual Studio Code unten gezeigt:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir im vorherigen Kapitel bereits gestartet haben, also stellen Sie sicher, dass Sie die Anweisungen im Abschnitt [Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zur Wiederholung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt mit dem Namen `npm-experiment` (oder einem anderen Namen).
- Vite als Entwicklungsabhängigkeit installiert.
- Das Paket `plotly.js-dist-min` als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen gegliedert:

- **Entwicklungsumgebung**: Die Tools, die für die Ausführung Ihres Codes am grundlegendsten sind. Dieser Teil wurde im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter zu machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns erlauben, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder eine völlig andere Sprache (z. B. JSX oder TypeScript) in unseren Entwicklungsprozess zu integrieren und dann unseren Code so zu transformieren, dass die Produktionsversion auf einer Vielzahl von modernen und älteren Browsern weiterhin läuft.
- **Nach der Entwicklung**: Tools, die nach Abschluss der Entwicklungsarbeiten ins Spiel kommen, um sicherzustellen, dass Ihre Software ihren Weg ins Web findet und weiterhin läuft. In dieser Fallstudie werden wir uns ansehen, wie Sie Tests zu Ihrem Code hinzufügen und Ihre App mit GitHub Pages bereitstellen, sodass sie für das gesamte Web sichtbar ist.

Lassen Sie uns damit beginnen, ab sofort an unserer Entwicklungsumgebung zu arbeiten. Wir werden die gleichen Schritte befolgen, wie sie bei einem echten Projekt eingerichtet würden, sodass Sie in der Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut befolgen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht sein, sich in einem "Rabbit Hole" der Tools zu verlieren, in dem Sie viel Zeit damit verbringen, die Umgebung "genau richtig" zu machen.

Aber Sie können dies auf die gleiche Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Körperhaltung zu unterstützen. Sie brauchen Strom, Wi-Fi und USB-Ports! Es könnten wichtige Dekorationen oder Musik vorhanden sein, die Ihrem mentalen Zustand helfen — all das ist wichtig, um die bestmögliche Arbeit zu leisten, und sie sollten auch, wenn sie richtig eingerichtet sind, nur einmal eingerichtet werden müssen.

In gleicher Weise, wenn das Einrichten Ihrer Entwicklungsumgebung richtig gemacht wird, muss es nur einmal durchgeführt werden und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich regelmäßig diesen Teil der Toolchain überprüfen und überlegen, ob es Updates oder Änderungen gibt, die Sie einführen sollten, aber das wird nicht allzu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain, werden die Tools, die zu Beginn installiert/initialisiert werden, sein:

- Bibliothek-Installationstools — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufräumtools — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Tools — zum Linting unseres Codes.

### Bibliothek-Installationstools

Sie haben dies bereits getan, aber für eine einfache Referenz, hier sind die Befehle (ausgeführt am Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellkontrollfunktion von git für das Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie keinen Code enthalten, den wir geschrieben haben und jederzeit neu generiert werden können. Wir können git sagen, diese Dateien zu ignorieren, indem wir eine `.gitignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte der Datei hinzu:

```plain
node_modules
dist
```

### Code-Aufräumtools

Wir werden Prettier verwenden, das wir zum ersten Mal in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele Tools, die in letzter Zeit erstellt wurden, kommt Prettier mit "sinnvollen Voreinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies ermöglicht es Ihnen, sich auf das Wichtige zu konzentrieren: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstelle eine Datei im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML- (HTML, JSX, Vue, Angular) -Eröffnungstags am Ende der letzten Zeile ausgeben, anstatt es alleine in der nächsten Zeile zu lassen. Dies ist das Format, das MDN selbst verwendet. Weiteres über die [Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) finden Sie in seiner Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen spezifizierten Dateien. Da wir jedoch keine generierten Dateien formatieren müssen, oder es alten Code geben kann, den wir nicht anfassen möchten, können wir Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise verschiedene Dateien für Prettier als für git ignorieren.

Nun, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes in der Kommandozeile vorgenommen werden, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem im Format meines Codes gibt, gehe voran und behebe sie, dann speichere meine Datei". Dies ist in Ordnung für unseren Entwicklungsprozess, aber wir können `prettier` auch ohne das Flag verwenden und es wird nur die Datei überprüfen. Die Datei zu überprüfen (und nicht zu speichern) ist nützlich für Zwecke wie Prüfungen, die vor einer Veröffentlichung stattfinden - d.h. "veröffentliche keinen Code, der nicht richtig formatiert wurde."

Sie können auch `./index.html` durch eine andere Datei oder einen anderen Ordner ersetzen, um sie zu formatieren. Zum Beispiel würde `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen sollten, können Sie dies auch als ein benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

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

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt ein paar Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um bei jedem Speichern einer Datei Prettier-Befehle auszuführen.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) stellt ein System bereit, das es uns ermöglicht, Vor- und Nach-Aktionen an die Aufgaben zu hängen, die wir mit git ausführen (wie das Committen Ihres Codes). Obwohl git-Hooks in dieser Autorenmeinung manchmal etwas überkompliziert sein können, sind sie, einmal eingerichtet, sehr leistungsstark. Wenn Sie sich für die Verwendung von Hooks interessieren, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code automatisch beim Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor braucht, ist "Format On Save" aktiviert.

### Code-Linting-Tools

Linting hilft bei der Codequalität und erlaubt auch, potenzielle Fehler während der Entwicklung früher zu erkennen. Es ist eine Schlüsselkomponente eines guten Toolchains und eine, die viele Entwicklungsprojekte standardmäßig einbeziehen werden.

Webentwicklungslinting-Tools existieren hauptsächlich für JavaScript (obwohl es mehrere für HTML und CSS gibt). Das macht Sinn: wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, aufgrund der widerstandsfähigen Natur dieser beiden Sprachen, wird höchstwahrscheinlich nichts zusammenbrechen. JavaScript ist viel fragiler — ein versehentliches Aufrufen einer Funktion, die nicht existiert, verursacht zum Beispiel, dass Ihr JavaScript kaputt geht; JavaScript zu linten ist daher sehr wichtig, insbesondere für größere Projekte.

Das Standard-Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsfähiges und vielseitiges Tool, kann jedoch schwierig sein, korrekt zu konfigurieren, und man könnte leicht viele Stunden damit verbringen, eine Konfiguration _gerade richtig_ hinzubekommen!

ESLint wird über npm installiert, und wie in Kapitel 2 diskutiert, haben Sie die Wahl, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird hoch empfohlen, weil Sie eine Konfigurationsdatei für jedes Projekt sowieso benötigen. Denken Sie an den Befehl zum Ausführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vorgefertigte ESLint-Konfigurationen, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Aus der Box wird ESLint bemängeln, dass es die Konfigurationsdatei nicht findet, wenn Sie es mit `npx eslint` laufen lassen:

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

Die oben genannte ESLint-Konfiguration:

- Aktiviert die "empfohlenen" ESLint-Einstellungen
- Teilt ESLint mit, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Teilt ESLint mit, `js` und `jsx` Dateien ins Linting einzubeziehen
- Teilt ESLint über die Existenz der globalen Browservariablen mit (verwendet von Lint-Regeln wie `no-undef` zum Überprüfen nicht vorhandener Variablen).

Der ESLint-Parser versteht JSX nicht standardmäßig, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Deshalb werden wir einige weitere Konfigurationen hinzufügen, um es ordnungsgemäß zu unterstützen. Zuerst installieren Sie `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben korrekter und idiomatischer React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Anschließend aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln laden als auch die Parser-Optionen für JSX setzen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist ein bisschen umständlich, verglichen mit den einzeiligen Ergänzungen für `eslint-plugin-react` Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint Config-Format noch nicht unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für mehr Informationen.

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Lust und Laune anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu erhalten oder eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung jedoch: ESLint-Konfiguration ist ein sehr tiefes Rabbit Hole!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser besonderes Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel darüber verfeinern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert wird), es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration möglich sein kann.

Wie bei anderen Tools ist die Unterstützung der Code-Editor-Integration für ESLint typischerweise gut, und möglicherweise nützlicher, da sie uns Feedback in Echtzeit geben kann, wenn Probleme auftauchen:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

Damit ist unsere Dev-Umgebung zu diesem Zeitpunkt fertig eingerichtet. Jetzt sind wir (fast) bereit, mit dem Codieren zu beginnen.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen nutzen. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischen

sprache, die in den Produktionscode in Sprachen kompiliert werden soll, die der Browser versteht. Wenn der Browser versucht, den Quell-JavaScript-Code auszuführen, wird er sofort reklamieren; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Anzahl von Optionen für Transformationstools und obwohl Babel ein besonders populäres ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine in `vite.config.js` im Stammverzeichnis des Projekts ein:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen darüber, wie man Vite konfiguriert. Da unsere Site auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, also sollten Sie die `base` Option entsprechend dem Namen Ihres GitHub-Repositories einstellen — aber Sie können es später immer anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann möglicherweise auch eine von Browsern nicht verstandene Syntax verwenden. Zum Beispiel können Sie eine Syntax verwenden, die nur in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen kaputten Stil anzeigen werden. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle Zielbrowser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS Postprozessortool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dafür gedacht, _standardmäßiges_ CSS zu schreiben (d.h. eine CSS-Syntax, die eines Tages in Browsern unterstützt wird), während Sass eine eigene Sprache ist, die in CSS kompiliert wird. PostCSS ist näher ans Web und hat eine viel niedrigere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), also müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie Features kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Features unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, also wenn Sie einen Klassennamen wie `.button` haben, werden alle Elemente mit dem Klassennamen `button` gleichartig gestaltet. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Scope definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten, die sie verwenden, machen. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie überprüfen, wie wir die `.module.css`-Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Stufe unserer Toolchain ziemlich schmerzhaft sein kann, weil wir ein Tool ausgewählt haben, das absichtlich versucht, die Konfiguration und Komplexität zu reduzieren, gibt es wirklich nichts mehr zu tun während der Entwicklungsphase. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird nicht vom Build-Prozess behindert.

Jetzt kann unsere Software geschrieben werden!

## Den Quellcode schreiben

Nun, da wir die vollständige Entwicklungstoolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben — der Teil, in den Sie normalerweise die meiste Zeit investieren sollten. Für unsere Zwecke gehen wir jedoch einfach einige bestehende Quellcodes kopieren und so tun, als hätten wir es geschrieben. Wir werden Sie nicht lehren, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Tools auszuführen, um Ihnen zu lehren, wie _sie_ funktionieren.

Besuchen Sie, um die Codedateien zu erhalten, <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos auf Ihre lokale Festplatte irgendwo herunter und packen Sie ihn aus. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Klonen oder herunterladen_ > _ZIP herunterladen_ auswählen.

![Das GitHub-Beispielrepo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich nicht um die anderen Dateien kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir für jetzt tun müssen!

## Die Transformation ausführen

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server in der Kommandozeile ausführen. Im Standardmodus wird er Änderungen in Ihrem Code überwachen und den Server neu laden. Dies ist schön, denn wir müssen nicht zwischen dem Code und der Kommandozeile wechseln.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des benutzerdefinierten Skripts, das wir zuvor definiert haben):

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

   Der Server läuft nun unter der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, z.B. `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann direkt zurück zur App, die in Ihrem Browser läuft. Ihnen wird auffallen, dass der Browser automatisch aktualisiert wurde und die Grafiken sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich eine Menge des Whitespace von einer Ihrer Dateien zu entfernen und Prettier darauf zu laufen zu lassen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen, oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel einen langen Weg gegangen und haben eine ziemlich schöne lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

Zu diesem Zeitpunkt der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software entwerfen, die Sie bauen möchten. Da es in diesem Modul jedoch darum geht, die Tools rund um die Webentwicklung zu lernen, und nicht den Webentwicklungscode selbst, werden wir Ihnen keine tatsächliche Codierung lehren — diese Informationen finden Sie in den restlichen MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Tools darauf umzusetzen. Wir würden empfehlen, dass Sie den Rest des Kapitels durchgehen, indem Sie unseren Beispielcode verwenden, und dann können Sie versuchen, den Inhalt des src-Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
