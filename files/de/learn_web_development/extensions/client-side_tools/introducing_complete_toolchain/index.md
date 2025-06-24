---
title: Einführung in eine vollständige Werkzeugkette
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Fallstudien-Werkzeugkette führen. Wir gehen den gesamten Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung über die Implementierung von Umwandlungswerkzeugen bis hin zur eigentlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und richten unsere Code-Umwandlungswerkzeuge ein.

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
        Festigung dessen, was wir bisher gelernt haben, indem wir eine vollständige
        Werkzeugketten-Fallstudie durcharbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu verwenden. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, die vorgestellten Werkzeuge für ein Projekt zu nutzen.

> [!NOTE]
> Es lohnt sich auch zu wiederholen, dass nicht alle dieser Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Integrationsunterstützung für _viele_ Werkzeuge über Plugins.

## Einführung unserer Fallstudie

Die Werkzeugkette, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## In unserer Werkzeugkette verwendete Werkzeuge

In diesem Artikel verwenden wir die folgenden Werkzeuge und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine [React](https://react.dev/)-bezogene Syntaxerweiterung, die es Ihnen ermöglicht, Dinge wie die Definition von Komponentenstrukturen innerhalb von JavaScript durchzuführen. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Werkzeugkette integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt der Erstellung), wie zum Beispiel [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linten.
- [PostCSS](https://postcss.org/) um CSS-Verschachtelungsfähigkeiten zu bieten.
- [Vite](https://vite.dev/) zum Erstellen und Minifizieren unseres Codes und zum automatischen Schreiben einer Menge von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle sowie zur letztlichen Bereitstellung unserer Website (mit GitHub Pages).

Möglicherweise sind Sie nicht mit allen oben genannten Funktionen und Werkzeugen vertraut oder wissen, was sie tun, aber keine Panik — wir werden jeden Teil erklären, während wir diesen Artikel durchgehen.

## Werkzeugketten und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Werkzeugkette haben, desto komplexer und potenziell anfälliger ist sie — beispielsweise könnte sie komplexer zu konfigurieren und leichter zu brechen sein. Im Gegensatz dazu, je weniger Glieder, desto widerstandsfähiger ist die Werkzeugkette wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Werkzeugkette erforderlich sind und jeden Teil sorgfältig bewerten.

Die kleinste Werkzeugkette ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code von Hand schreiben, "vanilla JavaScript" verwenden (was bedeutet, keine Frameworks oder Zwischenprogrammiersprachen) und alles manuell auf einen Server hochladen.

Allerdings profitieren wahrscheinlich kompliziertere Softwareanforderungen von der Verwendung von Werkzeugen, um den Entwicklungsprozess zu vereinfachen. Außerdem sollten Sie vor der Bereitstellung auf Ihrem Produktionsserver Tests einschließen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — dies ist bereits der Klang einer notwendigen Werkzeugkette.

Für unser Beispielprojekt werden wir eine Werkzeugkette verwenden, die speziell entwickelt wurde, um unsere Softwareentwicklung zu unterstützen und die während der Softwaredesignphase getroffenen technischen Entscheidungen zu unterstützen. Wir werden jedoch jegliche überflüssige Werkzeuganwendung vermeiden, um die Komplexität auf ein Minimum zu beschränken.

## Voraussetzungen überprüfen

Sie sollten die meisten Softwarekomponenten bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal erledigt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Ein GitHub-Konto erstellen

Abgesehen von den Werkzeugen, die wir installieren werden und die zu unserer Werkzeugkette beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig durchführen möchten. Sie können jedoch trotzdem dem lokalen Entwicklungsteil folgen, ohne es zu tun. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Problemverfolgung, Verfolgung von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen wird, der (sollte) die gesamte Software zu einer Heimat im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine weitere Software installieren, git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Versionskontrollwerkzeug für Entwickler — die Versionskontrolle bietet viele Vorteile, wie zum Beispiel eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um im Team am selben Projekt zu arbeiten, ohne Angst, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei wiederholt: Git und GitHub sind nicht dasselbe. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Onlinespeicher für git-Repositories (plus eine Reihe nützlicher Werkzeuge für die Arbeit mit ihnen) ist. Beachten Sie, dass wir zwar GitHub in diesem Kapitel verwenden, es aber auch mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und die Einbindung als Teil der Werkzeugkette hilft, die Evolution Ihres Codes zu verwalten. Es bietet eine Möglichkeit, Abschnitte der Arbeit zu "committen" während des Fortschritts, zusammen mit Kommentaren wie "Neue Funktion X implementiert" oder "Fehler Z nun behoben aufgrund von Y Änderungen".

Die Versionskontrolle kann Ihnen auch ermöglichen, Ihr Projekt zu _branchieren_, also eine separate Version zu erstellen, um neue Funktionalitäten auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Schließlich kann sie Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt zurückzusetzen, "als er noch funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler von Zeit zu Zeit tun müssen!

Git kann [über die Webseite von git-scm heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie das für Ihr System relevante Installationsprogramm herunter, führen Sie es aus, und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie vorerst tun müssen.

Sie können mit git auf verschiedene Arten interagieren, von der Verwendung der Befehlszeile zur Ausführung von Befehlen bis hin zur Verwendung einer [git-GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle über Tastendrücke auszuführen, oder sogar direkt innerhalb Ihres Code-Editors, wie im Visual Studio Code-Beispiel unten zu sehen:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Vorhandenes Projekt

Wir werden auf dem Projekt aufbauen, das wir im vorherigen Kapitel begonnen haben. Stellen Sie also sicher, dass Sie den Anweisungen in [Package management](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) gefolgt sind, um das Projekt zuerst einzurichten. Zur Erinnerung: Hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklerabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir im [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Werkzeugkette in die folgenden Phasen unterteilt:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist bereits im letzten Kapitel eingerichtet worden.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter gestalten. Dies könnte auch als unsere Entwicklungsumgebung bezeichnet werden.
- **Transformation**: Werkzeuge, die uns erlauben, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer anderen Sprache vollständig (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so zu transformieren, dass die Produktionsversion auf einer Vielzahl von Browsern, modernen und älteren, weiterhin ausgeführt wird.
- **Nach der Entwicklung**: Werkzeuge, die ins Spiel kommen, nachdem die Entwicklung abgeschlossen ist, um sicherzustellen, dass Ihre Software es ins Web schafft und weiterläuft. In dieser Fallstudie werden wir uns das Hinzufügen von Tests zu Ihrem Code ansehen und Ihre App mit GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Lassen Sie uns damit beginnen und unsere Entwicklungsumgebung einrichten. Wir werden denselben Schritten folgen, wie sie bei einem echten Projekt eingerichtet würden, so dass Sie in Zukunft, wenn Sie ein neues Projekt einrichten, wieder auf dieses Kapitel zurückgreifen und die Schritte erneut befolgen können.

## Eine Entwicklungsumgebung erstellen

Dieser Teil der Werkzeugkette wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Rabbit Hole" der Werkzeuge zu fallen, in dem Sie viel Zeit damit verbringen, die Umgebung "genau richtig" zu bekommen.

Aber Sie können dies in der gleichen Weise sehen wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position, um Ihre Haltung zu unterstützen. Sie brauchen Strom, WLAN und USB-Anschlüsse! Es könnte wichtige Dekorationen oder Musik geben, die Ihrem mentalen Zustand helfen — all diese Dinge sind wichtig, um die bestmögliche Arbeit zu leisten, und sie sollten, wenn sie richtig eingerichtet sind, auch nur einmal eingerichtet werden müssen.

Auf die gleiche Weise sollte das Einrichten Ihrer Entwicklungsumgebung, wenn es gut gemacht wird, nur einmal getan werden und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Werkzeugkette regelmäßig überprüfen und erwägen wollen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht allzu oft erforderlich sein.

Ihre Werkzeugkette hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Werkzeugkette werden die Werkzeuge, die im Vorfeld installiert/initiiert werden, folgende sein:

- Tools zur Bibliotheksinstallation — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufräumwerkzeuge — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Werkzeuge — zum Linten unseres Codes.

### Tools zur Bibliotheksinstallation

Dies haben Sie bereits getan, aber zur einfachen Referenz hier die Befehle (auszuführen im Root-Verzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um git's Quellcodekontrollfunktionalität im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie kein Code sind, den wir geschrieben haben, und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir werden Prettier verwenden, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklerabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele Werkzeuge, die kürzlich entwickelt wurden, kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/configuration.html) zufrieden sind). Dies erlaubt Ihnen, sich auf das Wesentliche zu konzentrieren: die kreative Arbeit. Zum Demonstrationszweck werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Root-Verzeichnis Ihres `npm-experiment`-Verzeichnisses, die `.prettierrc.json` genannt wird. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) Öffnungstags am Ende der letzten Zeile platzieren, anstatt alleine in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Weitere Informationen zum [Konfigurieren von Prettier](https://prettier.io/docs/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Allerdings müssen wir generierte Dateien nicht formatieren, oder es könnte bestimmten Legacy-Code geben, den wir nicht ändern wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte in die Datei ein:

```plain
node_modules
dist
```

Der Inhalt ist mit dem der `.gitignore` identisch, aber in einem echten Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Nun, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem im Codeformat gibt, gehe voran und behebe es und speichere dann meine Datei ab". Dies ist gut für unseren Entwicklungsprozess, aber wir können auch Prettier ohne das Flag verwenden und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und nicht speichern) ist nützlich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung ausgeführt werden - d.h. "veröffentlichen Sie keinen Code, der nicht richtig formatiert wurde".

Sie können auch `./index.html` durch jede andere Datei oder jedes andere Verzeichnis ersetzen, um diese zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Für den Fall, dass Sie sich nicht mehr an die Syntax erinnern, können Sie dies auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // …
  "format": "prettier --write ."
},
```

Jetzt können Sie das Verzeichnis folgendermaßen formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal zu laufen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) bietet ein System, das es uns erlaubt, Vor- und Nachaktionen an die Aufgaben zu hängen, die wir mit git ausführen (wie das Commit Ihres Codes). Obwohl git-Hooks etwas überkompliziert sein können (nach Meinung dieses Autors), können sie, sobald sie eingerichtet sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), der es VS Code ermöglicht, Code beim Speichern automatisch zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code-Linting-Werkzeuge

Linting hilft mit der Codequalität und ist auch eine Möglichkeit, potenzielle Fehler früher im Entwicklungsprozess zu erkennen. Es ist eine Schlüsselzutat einer guten Werkzeugkette und eine, die viele Entwicklungsprojekte standardmäßig einschließen werden.

Die meisten Linting-Tools für die Webentwicklung existieren für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der resilienten Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist weitaus anfälliger — der fehlerhafte Aufruf einer nicht vorhandenen Funktion führt beispielsweise dazu, dass Ihr JavaScript bricht; daher ist JavaScript-Linting besonders für größere Projekte sehr wichtig.

Das bewährte Werkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann jedoch schwierig zu konfigurieren sein, und es ist leicht, viele Stunden mit dem Versuch zu verbringen, eine Konfiguration _genau richtig_ hinzubekommen!

ESLint wird über npm installiert, sodass Sie, wie in Kapitel 2 besprochen, die Wahl haben, dieses Werkzeug lokal oder global zu installieren, aber es wird dringend empfohlen, es lokal zu installieren, da Sie ohnehin eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den Befehl, um es zu starten:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> [!NOTE] > `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket stellt vordefinierte ESLint-Konfiguration zur Verfügung, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Aus der Box wird ESLint sich darüber beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js`, im Root-Verzeichnis des Projekts):

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
- Weist ESLint an, die generierten Dateien wie bereits bei den anderen Tools zu ignorieren
- Weist ESLint an, `.js` und `.jsx` Dateien im Linting zu berücksichtigen
- Informiert ESLint über die Existenz der globalen Browser-Variablen (verwendet von Lint-Regeln wie `no-undef` zur Überprüfung nicht vorhandener Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Daher werden wir einige weitere Konfigurationen hinzufügen, um JSX und React korrekt zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX setzt:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für weitere Informationen.

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu erhalten oder eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung jedoch: Die ESLint-Konfiguration ist ein sehr tiefes Rabbit Hole!

Zur Vereinfachung werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel verfeinern und durchsetzen möchten, wie Ihr Code aussehen soll (oder validiert wird), dies mit der richtigen ESLint-Konfiguration sehr wahrscheinlich möglich ist.

Wie bei anderen Tools ist auch die Unterstützung der Code-Editor-Integration für ESLint typischerweise gut und potenziell nützlicher, da sie uns sofortiges Feedback geben kann, wenn Probleme auftreten:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

An dieser Stelle ist unsere Einrichtung der Entwicklungsumgebung abgeschlossen. Jetzt sind wir (so gut wie) bereit, mit dem Codieren zu beginnen.

## Build- und Umwandlungswerkzeuge

### JavaScript-Umwandlung

Für dieses Projekt wird, wie oben erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem besteht darin, dass kein Browser nativ Unterstützung für JSX bietet; es handelt sich um eine Zwischenprogrammiersprache, die in der Produktionsversion in Sprachen kompiliert werden soll, die der Browser versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas umzuwandeln, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Optionen für Umwandlungswerkzeuge, und obwohl Babel besonders beliebt ist, verwenden wir in Vite ein integriertes Plugin: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im `vite.config.js` im Root-Verzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen dazu, wie Sie Vite konfigurieren können. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://ihr-benutzername.github.io/ihr-repo-name` gehostet, daher sollten Sie die `base`-Option gemäß dem Namen Ihres GitHub-Repositories setzen — aber Sie können dies jederzeit später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Umwandlung

Unser CSS kann auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel können Sie eine Syntax verwenden, die nur in den letzten wenigen Browser-Versionen umgesetzt wurde, was bedeutet, dass ältere Browser daran scheitern werden und ein defektes Design anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle Browser, die wir anvisieren, verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Werkzeugen wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardisiertes_ CSS zu schreiben (d.h. CSS-Syntax, die eines Tages in Browsern landen könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel niedrigere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), daher müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine weitere CSS-Umwandlung demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, daher werden, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf dieselbe Weise gestylt. Dies führt häufig zu Benennungskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Gültigkeitsbereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen für die Seiten, die sie verwenden, einzigartig machen. Um zu verstehen, wie es funktioniert, können Sie nach dem Herunterladen des Quellcodes überprüfen, wie wir die `.module.css`-Dateien verwenden, und auch die [Dokumentation zu CSS-Modulen](https://github.com/css-modules/css-modules) lesen.

Auch wenn diese Stufe unserer Werkzeugkette recht schmerzhaft sein kann, weil wir ein Werkzeug gewählt haben, das bewusst versucht, Konfiguration und Komplexität zu reduzieren, gibt es wirklich nicht mehr, was wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" umgewandelt, und unsere Entwicklung wird vom Build-Prozess nicht behindert.

Nun ist unsere Software bereit, geschrieben zu werden!

## Den Quellcode schreiben

Nun haben wir die vollständige Entwicklungswerkzeugkette eingerichtet, es ist in der Regel an der Zeit, echten Code zu schreiben — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir sie geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind hier nur vorhanden, um die Werkzeuge darauf auszuführen, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos irgendwo auf Ihrem lokalen Laufwerk herunter und entpacken Sie es. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Um die anderen Dateien müssen Sie sich keine Sorgen machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Die Umwandlung ausführen

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server über die Befehlszeile starten. In seinem Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server aktualisieren. Dies ist schön, weil wir nicht ständig zwischen dem Code und der Befehlszeile wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (verwenden Sie das zuvor definierte benutzerdefinierte Skript):

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

   Der Server läuft nun auf der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Nun können wir einige Änderungen vornehmen und ihre Effekte live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repository, z. B. `facebook/react`.
3. Speichern Sie die Datei, dann gehen Sie direkt zurück zur App, die in Ihrem Browser läuft. Sie werden feststellen, dass sich der Browser automatisch aktualisiert hat und die Grafiken sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf laufen zu lassen, um es zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen langen Weg zurückgelegt und eine ziemlich nette lokale Entwicklungsumgebung eingerichtet, um eine Anwendung zu erstellen.

An diesem Punkt der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software schreiben, die Sie bauen möchten. Da dieses Modul darum geht, die Werkzeuge rund um die Webentwicklung zu erlernen und nicht den Webentwicklungscode selbst, werden wir Ihnen keine tatsächliche Codierung beibringen — diese Informationen finden Sie in den restlichen MDN-Dokumentationen!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge daran auszuprobieren. Wir würden vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und das stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
