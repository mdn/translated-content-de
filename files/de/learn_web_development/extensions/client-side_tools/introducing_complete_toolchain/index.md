---
title: Einführung in eine vollständige Toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir werden den gesamten Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung über die Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App gehen. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationstools.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um das bisher Gelerntes zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie durchgehen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu nutzen. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt genutzt werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle dieser Tools über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Unterstützung für die Integration _vieler_ Tools über Plugins.

## Vorstellung unserer Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um ein Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Werkzeuge, die in unserer Toolchain verwendet werden

In diesem Artikel verwenden wir die folgenden Werkzeuge und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein [React](https://react.dev/)-bezogenes Set von Syntaxerweiterungen, das es Ihnen ermöglicht, Komponentenstrukturen in JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt der Erstellung), wie zum Beispiel [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zur Formatierung und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Fähigkeiten.
- [Vite](https://vite.dev/) zum Bauen und Minifizieren unseres Codes und zum automatischen Schreiben einer Reihe von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle sowie zur eventualen Bereitstellung unserer Website (unter Verwendung von GitHub Pages).

Vielleicht sind Ihnen nicht alle oben genannten Funktionen und Werkzeuge oder deren Funktionsweise vertraut, aber keine Panik — wir werden jeden Teil ausführlich erläutern, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell fragiler ist sie — beispielsweise könnte sie komplexer zu konfigurieren und leichter zu brechen sein. Im Gegensatz dazu ist die Toolchain umso widerstandsfähiger, je weniger Glieder sie hat.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Links hat. Sie würden den HTML-Code manuell schreiben, "vanilla JavaScript" verwenden (d.h. keine Frameworks oder Zwischen-Sprachen), und alles manuell auf einen Server hochladen, um es zu hosten.

Jedoch werden komplizierte Softwareanforderungen wahrscheinlich von der Verwendung von Tools profitieren, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie Tests durchführen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie vorgesehen funktioniert — das klingt schon nach einer notwendigen Toolchain.

Für unser Beispielprojekt werden wir eine speziell entwickelte Toolchain verwenden, die unsere Softwareentwicklung unterstützt und die während der Software-Design-Phase getroffenen technischen Entscheidungen unterstützt. Wir werden jedoch darauf achten, kein überflüssiges Werkzeug zu verwenden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meiste Software bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Sie müssen diese nur einmal durchführen und nicht für zukünftige Projekte wiederholen.

### Erstellung eines GitHub-Kontos

Neben den Tools, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können dem lokalen Entwicklungsteil jedoch auch ohne ein Konto folgen. Wie bereits erwähnt, ist GitHub ein Dienst für die Aufbewahrung von Quellcode, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, wodurch ein Kaskadeneffekt ausgelöst wird, der (hoffentlich) die gesamte Software an einem Platz im Web bereitstellt.

Erstellen Sie ein Konto bei [GitHub](https://github.com/), indem Sie den _Sign Up_ Link auf der Startseite anklicken, wenn Sie noch kein Konto haben, und den Anweisungen folgen.

### Git installieren

Wir installieren eine weitere Software, git, um bei der Revisionskontrolle zu helfen.

Vielleicht haben Sie schon einmal von "git" gehört. [Git](https://git-scm.com/) ist derzeit das beliebteste Tool zur Quellcode-Revisionskontrolle für Entwickler — Revisionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern und ein Mechanismus, um im Team an demselben Projekt zu arbeiten, ohne Angst davor zu haben, den Code des anderen zu überschreiben.

Vielleicht ist es für einige offensichtlich, aber es sei daran erinnert: Git ist nicht dasselbe wie GitHub. Git ist das Revisionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Speicher für Git-Repositories ist (plus einer Reihe nützlicher Tools zur Arbeit mit ihnen). Beachten Sie, dass es neben GitHub noch verschiedene Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Durch die Verwendung von Revisionskontrolle in Ihren Projekten und die Aufnahme in die Toolchain können Sie die Entwicklung Ihres Codes besser verwalten. Es bietet eine Möglichkeit, Blöcke von Arbeit beim Fortschritt zu "committen", zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben durch Y Änderungen".

Die Revisionskontrolle kann Ihnen auch ermöglichen, Ihren Projektcode _abzuspalten_, eine separate Version zu erstellen und neue Funktionen darauf auszuprobieren, ohne dass diese Änderungen den Originalcode beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zu einer Zeit "zurückzusetzen, als er funktionierte", wenn ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler hin und wieder tun müssen!

Git kann [über die Git-SCM-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den entsprechenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Bildschirmanweisungen. Das ist alles, was Sie im Moment tun müssen.

Sie können auf verschiedene Weisen mit git interagieren, vom Verwenden der Kommandozeile zum Ausgeben von Befehlen über die Verwendung einer [Git-GUI-App](https://git-scm.com/downloads/guis) zum Ausführen derselben Befehle durch das Drücken von Tasten bis hin zur direkten Nutzung innerhalb Ihres Code-Editors, wie im folgenden Visual Studio Code Beispiel gezeigt:

![Git-Integration in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem bereits im vorherigen Kapitel begonnenen Projekt aufbauen, also stellen Sie sicher, dass Sie die Anweisungen in [Paketmanagement](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zunächst einzurichten. Zur Zusammenfassung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) gesprochen haben, wird die Toolchain in die folgenden Phasen strukturiert sein:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für die Ausführung Ihres Codes sind. Dieser Teil wurde im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Das Erleben der Software-Entwicklung stabiler und effizienter machen. Wir könnten darauf auch als unsere Entwicklungsumgebung verweisen.
- **Transformation**: Werkzeuge, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer anderen Sprache ganz zu nutzen (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und dann unseren Code so zu transformieren, dass die Produktionsversion noch in einer Vielzahl von Browsern, modernen und älteren, läuft.
- **Nach der Entwicklung**: Werkzeuge, die ins Spiel kommen, nachdem Sie mit dem Hauptteil der Entwicklung fertig sind, um sicherzustellen, dass Ihre Software ins Web kommt und weiter funktioniert. In dieser Fallstudie werden wir uns das Hinzufügen von Tests zu Ihrem Code und das Bereitstellen Ihrer App mit GitHub Pages ansehen, damit sie für alle im Web sichtbar ist.

Beginnen wir mit diesen Schritten, beginnend mit unserer Entwicklungsumgebung. Wir werden denselben Schritten folgen, wie ein echtes Projekt eingerichtet werden würde, so dass Sie sich in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel beziehen und die Schritte erneut ausführen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und man kann sehr leicht in ein "Rabbit Hole" der Tooling-Optimierung fallen, in dem man viel Zeit damit verbringt, die Umgebung "genau richtig" zu machen.

Aber Sie können dies auf dieselbe Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in guter Position eingerichtet, um zu Ihrer Körperhaltung beizutragen. Sie brauchen Strom, WLAN, und USB-Anschlüsse! Es könnte wichtige Dekorationen oder Musik geben, die zu Ihrem mentalen Zustand beitragen — all das ist wichtig, um Ihre beste Arbeit leisten zu können, und sie sollten auch richtig eingerichtet werden, wenn sie einmal gut gemacht wurden.

Ähnlich sollte Ihre Entwicklungsumgebung, wenn sie gut eingerichtet ist, nur einmal eingerichtet und dann in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain regelmäßig überprüfen und überlegen wollen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht allzu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die folgenden Werkzeuge installiert/initiiert:

- Bibliotheksinstallationswerkzeuge — für das Hinzufügen von Abhängigkeiten.
- Quellcode-Revisionskontrolle.
- Code-Aufräumwerkzeuge — zum Aufräumen von JavaScript-, CSS- und HTML-Code.
- Code-Linting-Werkzeuge — für das Linting unseres Codes.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz, hier sind die Befehle, die Sie im Stammverzeichnis des `npm-experiment`-Verzeichnisses ausführen müssen, um ein npm-Paket zu initialisieren und die erforderlichen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Quellcode-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellkontrollfunktion von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der Code sind, den wir geschrieben haben, und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie die folgenden Inhalte in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir verwenden Prettier, das wir erstmals in Kapitel 2 kennengelernt haben, um in diesem Projekt unseren Code aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich erstellte Werkzeuge kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/configuration.html) zufrieden sind). Dies ermöglicht Ihnen, das Wesentliche: die kreative Arbeit. Für die Demonstration fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses namens `.prettierrc.json`. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile drucken, anstatt allein in der nächsten Zeile. Dies ist das Format, das MDN selbst verwendet. Mehr über [Prettier-Konfiguration](https://prettier.io/docs/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Jedoch müssen wir generierte Dateien nicht formatieren oder möglicherweise gibt es bestimmten Legacy-Code, den wir nicht berühren wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie die folgenden Inhalte in die Datei ein:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie möglicherweise andere Dateien für Prettier als für git ignorieren.

Nun, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Kommandozeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "Wenn es ein Problem im Format meines Codes gibt, gehe voran und behebe sie, dann speichern Sie meine Datei". Dies ist gut für unseren Entwicklungsprozess, aber wir können auch `prettier` ohne das Flag verwenden, und es wird nur die Datei prüfen. Das Prüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einem Release durchgeführt werden - d.h. "Veröffentlichen Sie keinen Code, der nicht korrekt formatiert ist."

Sie können `./index.html` auch durch eine andere Datei oder Verzeichnis ersetzen, um diese zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie das Syntax vergessen, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Jetzt können Sie das Folgende ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal zu laufen, wenn wir etwas ändern, und es gibt verschiedene Wege, diesen Prozess zu automatisieren:

- Verwenden spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle bei jedem Speichern einer Datei auszuführen.

> [!NOTE]
> Was ist ein git Hook? Git (nicht GitHub) stellt ein System zur Verfügung, das uns ermöglicht, Vor- und Nach-Aktionen an die Aufgaben zu anhängen, die wir mit git durchführen (wie z.B. das Commits Ihres Codes). Obwohl git hooks (in der Meinung dieses Autors) manchmal etwas zu kompliziert sind, können sie, einmal eingerichtet, sehr leistungsfähig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Weg, um mit der Verwendung von Hooks zu beginnen.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), welche VS Code automatisch den Code bei jedem Speichern formatiert. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist die "Format On Save" Funktionalität aktiviert.

### Code-Linting-Werkzeuge

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler während der Entwicklung früher zu erkennen. Es ist eine Schlüsselzutat einer guten Toolchain und wird bei vielen Entwicklungsprojekten standardmäßig eingeschlossen.

Linting-Tools für Webentwicklung existieren hauptsächlich für JavaScript (obwohl es einige wenige für HTML und CSS gibt). Das ergibt Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der widerstandsfähigen Natur dieser beiden Sprachen nichts Schlimmes passieren. JavaScript ist viel fragiler — das versehentliche Aufrufen einer Funktion, die nicht existiert, zum Beispiel führt dazu, dass Ihr JavaScript kaputt geht; das Linting von JavaScript ist daher sehr wichtig, besonders für größere Projekte.

Das beliebteste Werkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann aber schwierig korrekt zu konfigurieren sein und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, daher haben Sie gemäß den Diskussionen in Kapitel 2 die Möglichkeit, dieses Tool lokal oder global zu installieren. Eine lokale Installation wird jedoch dringend empfohlen, da Sie ohnehin eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie daran, den Befehl zu verwenden:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das Paket `@eslint/js` stellt vordefinierte ESLint-Konfiguration zur Verfügung, während das Paket `globals` eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Out-of-the-box wird ESLint sich beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

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
- Teilt ESLint mit, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Werkzeuge getan haben
- Teilt ESLint mit, `.js` und `.jsx` Dateien beim Linting einzuschließen
- Teilt ESLint von der Existenz der globalen Browser-Variablen mit (verwendet durch Lint-Regeln wie `no-undef` zur Überprüfung nicht existierender Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Deshalb werden wir einige weitere Konfigurationen hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX festlegt:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zur einzeiligen Ergänzung für `eslint-plugin-react` Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für mehr Informationen.

Es gibt eine komplette [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu bekommen oder eine zu wählen, die Ihrem eigenen Standard entspricht. Eine Vorwarnung: ESLint-Konfiguration ist ein sehr tiefes Rabbit Hole!

Der Einfachheit halber werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Bedenken Sie jedoch, dass, wenn Sie eine Regel raffinieren und durchsetzen möchten, wie Ihr Code aussehen soll (oder validiert wird), es sehr wahrscheinlich ist, dass dies mit der richtigen ESLint-Konfiguration möglich ist.

Wie bei anderen Tools ist die Unterstützung der Integration von Code-Editoren im Allgemeinen gut für ESLint und potenziell nützlicher, da sie uns in Echtzeit Feedback geben kann, wenn Probleme auftreten:

![ESLint Fehler-Integration in VS Code](eslint-error.png)

Das ist unser Dev-Umgebung-Setup, das zu diesem Punkt abgeschlossen ist. Nun, endlich sind wir (fast) bereit, Code zu schreiben.

## Build- und Transformationswerkzeuge

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem ist, dass kein Browser native Unterstützung für JSX hat; es handelt sich um eine Zwischensprache, die zum Kompiliertwerden in Sprachen gedacht ist, die der Browser im Produktionscode versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sich sofort beschweren; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Auswahlmöglichkeiten für Transformationswerkzeuge und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im Stammverzeichnis des Projektverzeichnisses bei `vite.config.js` hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für mehr Informationen darüber, wie Vite zu konfigurieren ist. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, so dass Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories setzen sollten — Sie können sie jedoch später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS könnte auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die erst in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen gebrochenen Stil anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle Browser, die wir anvisieren, verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (das heißt, CSS-Syntax, die eines Tages in Browser gelangen könnte), während Sass eine eigene Sprache ist, die nach CSS kompiliert wird. PostCSS steht näher zum Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), so dass Sie einfach [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie Funktionen kompilieren wollen. Schau dir [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Features unterstützt werden.

Für unsere Zwecke demonstrieren wir eine weitere CSS-Transformation: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, so dass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf dieselbe Weise gestylt werden. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen eindeutig für die Seiten machen, die sie nutzen. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie sehen, wie wir die `.module.css`-Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, gibt es, weil wir bewusst ein Tool gewählt haben, das versucht, Konfiguration und Komplexität zu reduzieren, wirklich nichts weiter, was wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da die vollständige Entwicklungs-Toolchain eingerichtet ist, ist es normalerweise an der Zeit, realen Code zu schreiben — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur ein bisschen bestehenden Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir zeigen Ihnen nicht, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind einfach hier, um die Werkzeuge darauf laufen zu lassen, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos irgendwo auf Ihrer lokalen Festplatte herunter und entpacken Sie ihn. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie brauchen sich keine Sorgen um die anderen Dateien zu machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Durchführung der Transformation

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server auf der Kommandozeile laufen lassen. Im Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server aktualisieren. Das ist schön, denn wir müssen nicht hin- und herflitzen zwischen dem Code und der Kommandozeile.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des speziell definierten Skripts, das wir vorher definiert haben):

   ```bash
   npm run dev
   ```

   Sie sollten ein Ausgabe wie diese sehen (sobald die Abhängigkeiten installiert sind):

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   Der Server läuft nun auf der URL, die gedruckt wurde (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir ein paar Änderungen machen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihren bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` mit Ihrem bevorzugten GitHub-Repo, zum Beispiel `facebook/react`.
3. Speichern Sie die Datei und gehen Sie direkt zurück zur App, die in Ihrem Browser läuft. Sie werden feststellen, dass der Browser automatisch aktualisiert wurde und die Grafiken sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie, absichtlich eine Menge des Abstands in einer Ihrer Dateien zu entfernen und Prettier darauf laufen zu lassen, um es aufzuräumen, oder fügen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den Befehl `eslint` ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel einen weiten Weg gegangen, indem wir eine ziemlich nette lokale Entwicklungsumgebung aufgebaut haben, um eine Anwendung zu erstellen.

An diesem Punkt während der Web-Software-Entwicklung würden Sie normalerweise Ihren Code für die Software schreiben, die Sie bauen möchten. Da es in diesem Modul darum geht, die Tools rund um die Webentwicklung zu lernen, und nicht den Webentwicklungscode selbst, werden wir Ihnen keinen tatsächlichen Code beibringen — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt geschrieben, das Sie verwenden können, um Ihre Werkzeuge darauf anzuwenden. Wir würden vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann können Sie versuchen, den Inhalt des `src`-Verzeichnisses zu ändern und Ihr eigenes Projekt zu veröffentlichen und es stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird das Bereitstellen auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
