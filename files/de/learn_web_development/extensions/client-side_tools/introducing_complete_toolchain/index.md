---
title: Einführung in eine vollständige Werkzeugkette
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 61feb286e2c197272c397e08b40a9488cb65e3cd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Fallstudien-Werkzeugkette führen. Wir beginnen mit dem Einrichten einer vernünftigen Entwicklungsumgebung und der Implementierung von Transformationstools, bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationstools.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen der <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Festigung dessen, was wir bisher gelernt haben, indem wir eine vollständige Werkzeugketten-Fallstudie bearbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt in der Tat unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu nutzen. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle dieser Werkzeuge über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Integrationssupport für eine Vielzahl von Werkzeugen über Plugins.

## Einführung in unsere Fallstudie

Die Werkzeugkette, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Werkzeuge in unserer Werkzeugkette

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein Satz von Syntaxerweiterungen in Verbindung mit [React](https://react.dev/), der es Ihnen ermöglicht, z. B. Komponentenstrukturen in JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben es aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Werkzeugkette integriert werden könnte.
- Die neuesten eingebauten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) um CSS-Verschachtelungsfähigkeiten bereitzustellen.
- [Vite](https://vite.dev/) um unseren Code zu kompilieren und zu minimieren und um automatisch eine Menge Konfigurationsdateien zu erstellen.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zum Verwalten unserer Quellcode-Kontrolle und um schließlich unsere Seite (mit GitHub Pages) bereitzustellen.

Es ist möglich, dass Ihnen nicht alle oben genannten Funktionen und Werkzeuge oder deren Funktionsweise vertraut sind, aber keine Panik — wir werden jedes Teil erklären, während wir diesen Artikel durchgehen.

## Werkzeugketten und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Werkzeugkette haben, desto komplexer und potenziell anfälliger ist sie — beispielsweise könnte sie komplexer zu konfigurieren sein und leichter brechen. Umgekehrt gilt: Je weniger Glieder, desto widerstandsfähiger ist die Werkzeugkette.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Werkzeugkette notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Werkzeugkette ist eine, die keine Glieder hat. Sie würden das HTML von Hand codieren, "vanilla JavaScript" (d. h. ohne Frameworks oder Zwischenlanguages) verwenden und alles manuell auf einen Server zur Bereitstellung hochladen.

Allerdings profitieren kompliziertere Softwareanforderungen wahrscheinlich von der Nutzung von Werkzeugen, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie Tests durchführen, bevor Sie Ihre Software auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass sie wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Werkzeugkette.

Für unser Beispielprojekt werden wir eine Werkzeugkette verwenden, die speziell darauf ausgelegt ist, unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen während der Softwaredesignphase zu tragen. Wir werden jedoch auf nicht notwendiges Werkzeug verzichten, um die Komplexität so gering wie möglich zu halten.

## Überprüfung der Voraussetzungen

Sie sollten den größten Teil der Software bereits installiert haben, wenn Sie die vorherigen Kapitel befolgt haben. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Diese müssen nur einmal durchgeführt werden und Sie müssen diese nicht für zukünftige Projekte wiederholen.

### Erstellen eines GitHub-Kontos

Neben den Tools, die wir installieren werden und die zu unserer Werkzeugkette beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig abschließen möchten. Sie können jedoch trotzdem den lokalen Entwicklungsteil ohne es verfolgen. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Fehlerverfolgung, das Verfolgen von Projektveröffentlichungen und vieles mehr bietet. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository einchecken, was einen Kaskadeneffekt auslöst, der (hoffentlich) die gesamte Software ins Web bringt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von Git

Wir werden eine weitere Software installieren, git, um uns bei der Versionskontrolle zu unterstützen.

Es ist möglich, dass Sie schon von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Versionierungstool, das Entwicklern zur Verfügung steht — Versionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit zur Sicherung Ihrer Arbeit an einem entfernten Ort und einen Mechanismus, in einem Team am selben Projekt zu arbeiten, ohne Angst zu haben, den Code eines anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei gesagt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Speicher für Git-Repositories ist (plus eine Reihe nützlicher Werkzeuge für die Arbeit damit). Beachten Sie, dass es, obwohl wir GitHub in diesem Kapitel verwenden, mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Die Verwendung von Versionskontrolle in Ihren Projekten und deren Einbindung als Teil der Werkzeugkette wird die Evolution Ihres Codes verwalten. Es bietet eine Möglichkeit, "Blöcke" von Arbeit mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben aufgrund von Y Änderungen" zu commiten.

Versionskontrolle kann Ihnen auch erlauben, Ihr Projekt zu "verzweigen", d.h. eine separate Version zu erstellen und neue Funktionalitäten auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code betreffen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zurückzusetzen auf eine frühere Version "wann es funktionierte", falls ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler ab und zu tun müssen!

Git kann [über die Git-SCM-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den relevanten Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie für den Moment tun müssen.

Sie können mit Git auf verschiedene Arten interagieren, von der Nutzung der Kommandozeile zum Ausführen von Befehlen, zur Verwendung einer [Git-GUI-App](https://git-scm.com/downloads/guis) zum Ausführen derselben Befehle durch Drücken von Tasten, oder sogar direkt innerhalb Ihres Code-Editors, wie im folgenden Beispiel in Visual Studio Code gezeigt:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir bereits im vorherigen Kapitel begonnen haben, also stellen Sie sicher, dass Sie die Anweisungen in [Package management](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zur Wiederholung, hier ist was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Werkzeugkette in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten sind, um Ihren Code auszuführen. Dieser Teil wurde im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabil und effizienter gestalten. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeuge, die uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer ganz anderen Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und unseren Code dann so zu transformieren, dass die Produktionsversion auf zahlreichen Browsern ausgeführt wird, sowohl modernen als auch älteren.
- **Nach der Entwicklung**: Werkzeuge, die nach Abschluss der Entwicklungsphase ins Spiel kommen, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir uns damit beschäftigen, Ihrem Code Tests hinzuzufügen und Ihre App mithilfe von GitHub Pages bereitzustellen, damit sie im gesamten Web verfügbar ist.

Lassen Sie uns damit anfangen und mit unserer Entwicklungsumgebung beginnen. Wir werden die gleichen Schritte befolgen, wie ein echtes Projekt eingerichtet wird, so dass Sie sich in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel beziehen und die Schritte erneut befolgen können.

## Einrichten einer Entwicklungsumgebung

Dieser Teil der Werkzeugkette wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht passieren, dass man in ein "Kaninhole" von Werkzeugen fällt, in dem man viel Zeit damit verbringt, die Umgebung "genau richtig" einzustellen.

Aber man kann das alltägliche Arbeitsumgebung auf die gleiche Weise sehen. Der Stuhl muss bequem sein und in einer guten Position sein, um bei Ihrer Haltung zu helfen. Sie brauchen Strom, WLAN und USB-Anschlüsse! Möglicherweise gibt es wichtige Dekorationen oder Musik, die bei Ihrem geistigen Zustand helfen — diese sind alle wichtig, um Ihre bestmögliche Arbeit zu leisten, und sie sollten auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

In gleicher Weise sollte das Einrichten Ihrer Entwicklungsumgebung, wenn es gut gemacht ist, nur einmal durchgeführt werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Werkzeugkette halb regulär überprüfen und überlegen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht allzu oft erforderlich sein.

Ihre Werkzeugkette hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Werkzeugkette, werden die im Voraus installierten/initialisierten Werkzeuge folgende sein:

- Bibliotheksinstallationswerkzeuge — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufbereitungswerkzeuge — zum Aufbereiten von JavaScript, CSS und HTML.
- Code-Linting-Werkzeuge — zum Linting unseres Codes.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz, hier sind die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm-Paket initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcodekontrollfunktionalität von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie kein Code sind, den wir geschrieben haben und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufbereitungswerkzeuge

Wir werden Prettier verwenden, das wir zuerst in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzubereiten. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich entwickelte Werkzeuge kommt auch Prettier mit "vernünftigen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies lässt Ihnen mehr Zeit für das Wesentliche: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses eine Datei namens `.prettierrc.json`. Fügen Sie folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` einer mehrzeiligen HTML (HTML, JSX, Vue, Angular) Eröffnungs-Tag am Ende der letzten Zeile anstatt allein in der nächsten Zeile anzeigen. Dies ist das Format, das MDN selbst verwendet. Sie können mehr über die [Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) in der Dokumentation erfahren.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Allerdings müssen wir generierte Dateien nicht formatieren, oder es gibt möglicherweise bestimmten Legacy-Code, den wir nicht anrühren möchten. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise andere Dateien für Prettier als für git ignorieren.

Jetzt, wo Prettier installiert und konfiguriert ist, kann das Aufbereiten und Ausführen von Code über die Kommandozeile erfolgen, z.B.:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies so, dass es "wenn es ein Problem in meinem Codeformat gibt, gehen Sie vor und beheben Sie es, dann speichern Sie meine Datei". Dies ist für unseren Entwicklungsprozess in Ordnung, aber wir können auch `prettier` ohne das Flag verwenden und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und das nicht Speichern) ist nützlich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung durchgeführt werden — d.h. "veröffentlichen Sie keinen Code, der nicht richtig formatiert wurde."

Sie können auch `./index.html` durch jede andere Datei oder Ordner ersetzen, um sie zu formatieren. Beispielsweise wird `.` alles im aktuellen Verzeichnis formatieren. Für den Fall, dass Sie sich die Syntax nicht merken können, können Sie es auch als benutzerdefiniertes Skript in Ihre package.json einfügen:

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

Es kann dennoch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git Hook? Git (nicht GitHub) bietet ein System, das uns erlaubt, Vor- und Nachaktionen an Aufgaben zu hängen, die wir mit git ausführen (wie das Committen Ihres Codes). Obwohl git Hooks ein wenig zu kompliziert sein können (nach Meinung dieses Autors), können sie sehr mächtig sein, wenn sie eingerichtet sind. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die VS Code automatisch den Code bei jedem Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist das Aktivieren von "Format on Save".

### Code-Linting-Werkzeuge

Linting hilft bei der Code-Qualität, ist aber auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist eine Schlüsselingredienz einer guten Werkzeugkette und eine, die viele Entwicklungsprojekte standardmäßig einbeziehen werden.

Webentwicklungslinting-Werkzeuge existieren meist für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: wenn ein unbekanntes HTML-Element oder ungültige CSS-Eigenschaft verwendet wird, aufgrund der resilienten Natur dieser beiden Sprachen wird nichts Großes brechen. JavaScript ist viel fragiler — das versehentliche Aufrufen einer Funktion, die nicht existiert, führt dazu, dass Ihr JavaScript fehlschlägt; JavaScript-Linting ist daher sehr wichtig, insbesondere für größere Projekte.

Das Standardwerkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst mächtiges und vielseitiges Werkzeug, kann jedoch knifflig zu konfigurieren sein und es ist leicht möglich, viele Stunden damit zu verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, also haben Sie wie in Kapitel 2 besprochen die Wahl, dieses Werkzeug lokal oder global zu installieren, aber eine lokale Installation ist sehr zu empfehlen, da Sie für jedes Projekt ohnehin eine Konfigurationsdatei haben müssen. Denken Sie an den Befehl, um auszuführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [noch nicht v9 unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vordefinierte ESLint-Konfigurationen, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Aus der Box wird ESLint beklagen, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

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

Die obenstehende ESLint-Konfiguration:

- Aktiviert die "empfohlenen" ESLint-Einstellungen
- Weist ESLint an, die generierten Dateien zu ignorieren, wie wir es bereits bei den anderen Werkzeugen getan haben
- Weist ESLint an, `.js` und `.jsx` Dateien beim Linting einzubeziehen
- Informiert ESLint über die Existenz der globalen Variablen des Browsers (verwendet von Lint-Regeln wie `no-undef` zum Überprüfen nicht existenter Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Daher werden wir etwas mehr Konfiguration hinzufügen, um es zu ermöglichen, JSX und React ordnungsgemäß zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für korrektes und idiomatisches React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX setzt:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react` Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu bekommen oder um eine auszuwählen, die Ihren eigenen Standards entspricht. Ein Vorwarnung allerdings: ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Im Interesse der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und dessen Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel verfeinern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert wird), es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration durchgeführt werden kann.

Wie bei anderen Werkzeugen ist die Code-Editor-Integration für ESLint in der Regel gut und möglicherweise nützlicher, da es uns sofortiges Feedback geben kann, wenn Probleme bei der Arbeit auftauchen:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

Das ist unser Entwicklungsumgebung-Setup zu diesem Zeitpunkt abgeschlossen. Nun sind wir (fast) bereit, zu codieren.

## Bau- und Transformationswerkzeuge

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem ist, dass kein Browser native Unterstützung für JSX bietet; es ist eine Zwischenlanguage, die dazu gedacht ist, in Sprachen übersetzt zu werden, die der Browser in der Produktionsversion versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort Fehler anzeigen; das Projekt benötigt ein Bauwerkzeug, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Auswahlmöglichkeiten für Transformationswerkzeuge, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine an der Stelle `vite.config.js` im Stammverzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen darüber, wie Sie Vite konfigurieren können. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, also sollten Sie die `base` Option entsprechend dem Namen Ihres GitHub-Repositorys einstellen — aber Sie können es später immer noch anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel können Sie eine Syntax verwenden, die erst in den letzten wenigen Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern werden und einen gebrochenen Stil anzeigen. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle Browser, die wir anvisieren, verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Werkzeug. Im Vergleich zu Bauwerkzeugen wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (das heißt, CSS-Syntax, die eines Tages in Browsern eintreten könnte), während Sass eine eigene Sprache ist, die zu CSS compiliert wird. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), also müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie irgendwelche Funktionen kompilieren möchten. Sehen Sie sich den [cssdb](https://preset-env.cssdb.org/features/) für die unterstützten Funktionen an.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, so dass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt werden. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Rahmen definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie sehen, wie wir die `.module.css` Dateien verwenden, und lesen Sie auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules).

Obwohl diese Phase unserer Werkzeugkette ziemlich schmerzhaft sein kann, weil wir ein Werkzeug gewählt haben, das absichtlich versucht, die Konfiguration und Komplexität zu reduzieren, gibt es während der Entwicklungsphase tatsächlich nichts weiter, was wir tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird nicht durch den Bauprozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungswerkzeugkette eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben — der Teil, auf den Sie die meiste Zeit investieren sollten. Für unsere Zwecke jedoch werden wir einfach bestehenden Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge auszuführen, damit wir Ihnen beibringen können, wie _sie_ funktionieren.

Um an die Code-Dateien zu gelangen, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos herunter und entpacken Sie ihn irgendwo auf Ihrer lokalen Festplatte. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie jetzt den Inhalt des `src` Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Sie müssen sich keine Sorgen um die anderen Dateien machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server auf der Kommandozeile starten. Im Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server aktualisieren. Das ist schön, weil wir nicht ständig zwischen dem Code und der Kommandozeile hin und her wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des zuvor definierten benutzerdefinierten Skripts):

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

   Der Server läuft nun auf der URL, die ausgegeben wurde (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Nun können wir einige Änderungen vornehmen und ihre Auswirkungen live beobachten.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repository, z.B. `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann sofort zurück zur App, die in Ihrem Browser läuft. Sie werden feststellen, dass sich der Browser automatisch aktualisiert hat und die Diagramme sich verändert haben!

Sie können auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, viel von dem Leerraum aus einer Ihrer Dateien zu entfernen und führen Sie Prettier darauf aus, um es zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen, oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen langen Weg zurückgelegt und eine recht schöne lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

An diesem Punkt der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software erstellen, die Sie beabsichtigen zu bauen. Da dieses Modul jedoch darum geht, die Werkzeuge der Webentwicklung zu lernen und nicht den Webentwicklungscode selbst, werden wir Ihnen keinen tatsächlichen Code beibringen — Sie finden diese Informationen im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, mit dem Sie Ihre Werkzeuge verwenden können. Wir empfehlen Ihnen, den Rest des Kapitels mit unserem Beispielcode durchzuarbeiten und dann können Sie versuchen, den Inhalt des `src` Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! In der Tat wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
