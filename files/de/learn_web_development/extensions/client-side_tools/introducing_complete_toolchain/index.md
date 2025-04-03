---
title: Einführung in eine vollständige Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln der Serie werden wir Ihr Wissen über Tools festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir beginnen mit der Einrichtung einer sinnvollen Entwicklungsumgebung, über die Implementierung von Transformationstools, bis hin zur Bereitstellung Ihrer Anwendung. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationstools.

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
        Das bisher Gelernte durch die Bearbeitung einer vollständigen
        Toolchain-Fallstudie zu festigen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unendlich viele Kombinationen von Tools und Nutzungsmöglichkeiten. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools in einem Projekt eingesetzt werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle dieser Tools über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie z.B. VS Code) bieten Unterstützung für _viele_ Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Tools in unserer Toolchain

In diesem Artikel werden wir die folgenden Tools und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/) verwandte Syntaxerweiterung, die es Ihnen ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies hinzugefügt, um Ihnen eine Vorstellung zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt der Erstellung), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) für die Formatierung und [ESLint](https://eslint.org/) für Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Verschachtelungsfähigkeiten.
- [Vite](https://vite.dev/) zum Erstellen und Minifizieren unseres Codes und zum automatischen Schreiben einer Menge von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle sowie zur Bereitstellung unserer Website (unter Verwendung von GitHub Pages).

Möglicherweise sind Ihnen nicht alle oben genannten Funktionen und Tools oder deren Funktionen bekannt, aber keine Panik — wir werden jeden Teil erklären, während wir diesen Artikel durchlaufen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell brüchiger ist sie – sie könnte zum Beispiel komplexer zu konfigurieren sein und leichter kaputt gehen. Umgekehrt gilt: Je weniger Glieder, desto stabiler ist die Toolchain voraussichtlich.

Alle Webprojekte unterscheiden sich und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig prüfen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code von Hand schreiben, "vanilla JavaScript" verwenden (was bedeutet, dass keine Frameworks oder Zwischensprachen genutzt werden), und alles manuell auf einen Server zum Hosting hochladen.

Komplexere Softwareanforderungen werden wahrscheinlich von der Verwendung von Tools profitieren, die den Entwicklungsprozess vereinfachen. Darüber hinaus sollten Sie Tests durchführen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt schon nach einer notwendigen Toolchain.

Für unser Beispielprojekt werden wir eine speziell entwickelte Toolchain verwenden, die unsere Softwareentwicklung unterstützt und die technischen Entscheidungen während der Softwaredesignphase unterstützt. Wir vermeiden jedoch jegliche überflüssigen Tools, um die Komplexität auf ein Minimum zu beschränken.

## Überprüfung der Voraussetzungen

Sie sollten die meisten Softwareteile bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie vor den eigentlichen Einrichtungsschritten haben sollten. Diese müssen nur einmal durchgeführt werden, und Sie müssen dies für zukünftige Projekte nicht wiederholen.

### Ein GitHub-Konto erstellen

Neben den Tools, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch weiterhin den lokalen Entwicklungsabschnitt ohne es verfolgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcoderepositories, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektfreigaben und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was eine Kaskadeneffekt verursacht, der (hoffentlich) die gesamte Software auf einen Platz im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie den _Sign Up_ Link auf der Startseite anklicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir installieren eine weitere Software, git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie bereits von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Versionskontrollsystem für Quellcode, das Entwicklern zur Verfügung steht — Versionskontrolle bietet viele Vorteile wie eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern und ein Mechanismus, um im Team am selben Projekt zu arbeiten, ohne Angst davor zu haben, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Shop für git-Repositories ist (plus eine Reihe von nützlichen Tools, um mit ihnen zu arbeiten). Beachten Sie, dass, obwohl wir in diesem Kapitel GitHub verwenden, es mehrere Alternativen gibt, einschließlich [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories selbst hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und die Einbeziehung als Teil der Toolchain wird Ihnen helfen, die Evolution Ihres Codes zu verwalten. Es bietet eine Möglichkeit, Blöcke von Arbeit zu "committen", während Sie fortschreiten, zusammen mit Kommentaren wie "Neue Funktion X implementiert" oder "Bug Z wurde jetzt durch Änderungen an Y behoben".

Versionskontrolle kann Ihnen auch erlauben, Ihr Projektcode zu _verzweigen_, um eine separate Version zu erstellen und neue Funktionalitäten auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code betreffen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf eine Zeit "zurückzusetzen", "als er funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler von Zeit zu Zeit brauchen!

Git kann über die [git-scm-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den entsprechenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Bildschirmaufforderungen. Das ist alles, was Sie vorerst tun müssen.

Sie können mit git auf verschiedene Arten interagieren, von der Verwendung der Befehlszeile zum Ausführen von Befehlen, über die Verwendung einer [git GUI App](https://git-scm.com/downloads/guis), um die gleichen Befehle durch das Drücken von Buttons auszuführen, bis hin zur direkten Nutzung in Ihrem Code-Editor, wie im Visual Studio Code Beispiel unten gezeigt:

![Git-Integration in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir im vorherigen Kapitel bereits begonnen haben, daher stellen Sie sicher, dass Sie die Anweisungen im [Paket-Management](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgt haben, um das Projekt zuerst einzurichten. Zur Erinnerung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder einem anderen Namen).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir im [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die grundlegend für den Betrieb Ihres Codes sind. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Um das Softwareentwicklungserlebnis stabiler und effizienter zu machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer anderen Sprache gänzlich (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu nutzen und dann unseren Code so zu transformieren, dass die Produktionsversion dennoch auf einer Vielzahl von Browsern, modernen und älteren, läuft.
- **Post-Entwicklung**: Werkzeuge, die nach der Entwicklung des Hauptteils ins Spiel kommen, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir uns das Hinzufügen von Tests zu Ihrem Code ansehen und Ihre App mit GitHub Pages bereitstellen, damit sie für alle im Web sichtbar ist.

Lassen Sie uns damit beginnen, an diesen zu arbeiten, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte wie bei der Einrichtung eines echten Projekts befolgen, damit Sie in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückverweisen und die Schritte erneut befolgen können.

## Eine Entwicklungsumgebung erstellen

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit betrachtet, und es kann sehr leicht passieren, dass man in ein "Kaninchenloch" von Tools fällt, in dem man viel Zeit damit verbringt, die Umgebung "genau richtig" einzurichten.

Aber Sie können dies auf die gleiche Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position, um Ihre Körperhaltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnte wichtige Dekorationen oder Musik geben, die Ihr mentales Wohlbefinden unterstützen — all das ist wichtig, um Ihre beste Arbeit zu leisten, und sollte auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

Ebenso sollte das Einrichten Ihrer Entwicklungsumgebung, wenn es gut gemacht wird, nur einmal getan werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain halb-regelmäßig überprüfen wollen und nachdenken, ob es irgendwelche Aktualisierungen oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die folgenden Tools installiert/initialisiert:

- Bibliotheksinstallationswerkzeuge — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufräumwerkzeuge — zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linting-Werkzeuge — um unseren Code zu linden.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz hier die Befehle (auszuführen im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellkontrollfunktion von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht von uns geschriebener Code sind und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir verwenden Prettier, das wir erstmals in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit folgendem Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich erstellte Werkzeuge kommt Prettier mit "sinnvollen Voreinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (sofern Sie mit den [Voreinstellungen](https://prettier.io/docs/configuration.html) zufrieden sind). Dies ermöglicht es Ihnen, sich auf das Wesentliche zu konzentrieren: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) Eröffnungstags am Ende der letzten Zeile drucken, anstatt alleine in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Mehr Informationen zur [Konfiguration von Prettier](https://prettier.io/docs/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Es gibt jedoch auch hier generierte Dateien, die wir nicht formatieren müssen, oder es gibt möglicherweise bestimmten Al-Code, den wir nicht berühren wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes in der Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem mit meinem Code-Format gibt, gehen Sie vor und beheben Sie es, speichern Sie dann meine Datei". Dies ist für unseren Entwicklungsprozess in Ordnung, aber wir können `prettier` auch ohne das Flag verwenden, um die Datei nur zu überprüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einer Veröffentlichung durchgeführt werden – d.h. "veröffentliche keinen Code, der nicht ordnungsgemäß formatiert ist."

Sie können `./index.html` auch durch eine andere Datei oder einen anderen Ordner ersetzen, um sie zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie das Syntaxeinhaben vergessen, können Sie sie ebenfalls als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // ...
  "format": "prettier --write ."
},
```

Nun können Sie das folgende ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann dennoch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System an, mit dem wir prä- und post-Aktionen an die Aufgaben anhängen können, die wir mit git ausführen (wie das Begehen Ihres Codes). Obwohl git hooks etwas übermäßig kompliziert sein können (meiner Meinung nach), können sie, einmal eingerichtet, sehr mächtig sein. Wenn Sie an der Verwendung von Hooks interessiert sind, bietet [Husky](https://github.com/typicode/husky) einen stark vereinfachten Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, automatisch Code beim Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "On Save" aktiviert.

### Code-Linting-Werkzeuge

Linting trägt zur Codequalität bei und ist auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist ein Schlüsselelement einer guten Toolchain und eines, das viele Entwicklungsprojekte standardmäßig beinhalten werden.

Linting-Tools für die Webentwicklung existieren hauptsächlich für JavaScript (obwohl es ein paar für HTML und CSS gibt). Dies macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der stabilen Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist viel fragiler – wenn z.B. eine Funktion, die nicht existiert, irrtümlich aufgerufen wird, wird Ihr JavaScript brechen; das Linting von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das Standard-Tool zum Linting von JavaScript ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Tool, kann aber schwierig sein, richtig zu konfigurieren, und Sie könnten viele Stunden damit verbringen, die Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, daher haben Sie, wie in der Diskussion in Kapitel 2 erwähnt, die Wahl, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie ohnehin für jedes Projekt eine Konfigurationsdatei benötigen. Denken Sie daran, den Befehl auszuführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Note:** `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Das liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vordefinierte ESLint-Konfiguration, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Out-of-the-box wird sich ESLint beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

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

Die obenstehende ESLint Konfiguration:

- Aktiviert die "empfohlene" ESLint-Einstellungen
- Weist ESLint an, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools gemacht haben
- Weist ESLint an, `.js` und `.jsx` Dateien in das Linting einzubeziehen
- Informiert ESLint über die Existenz der globalen Browser-Variablen (verwendet durch Linting-Regeln wie `node-undef`, um nicht existierende Variablen zu überprüfen).

Der ESLint-Pareser versteht JSX standardmäßig nicht und seine empfohlenen Regeln handhaben keine React-spezifischen Semantiken. Daher werden wir einige zusätzliche Konfigurationen hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzubeziehen, die sowohl die empfohlenen Regeln lädt als auch die Parseroptionen für JSX setzt:

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

Es gibt eine vollständige [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Herzenslust anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu bekommen oder eine auszuwählen, die Sie für Ihre eigenen Standards geeignet finden. Eine Vorwarnung jedoch: ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Um der Einfachheit willen werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser besonderes Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel darüber verfeuern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert wird), es sehr wahrscheinlich mit der richtigen ESLint-Konfiguration gemacht werden kann.

Wie beianderen Tools ist die Unterstützung von Code-Editor-Integrationen in der Regel gut für ESLint und potenziell nützlich, da sie uns sofort Feedback geben kann, wenn Probleme auftreten:

![ESLint Fehlerintegration in VS Code](eslint-error.png)

Damit ist unser Dev-Umgebungssetup an diesem Punkt abgeschlossen. Jetzt sind wir (fast) bereit, mit dem Programmieren zu beginnen.

## Build- und Transformation-Tools

### JavaScript-Transformation

Für dieses Projekt wird, wie oben erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein sofortiges Problem ist, dass kein Browser JSX nativ unterstützt; es handelt sich um eine Zwischensprache, die im Produktionscode in vom Browser verstandene Sprachen kompiliert werden soll. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort beschweren; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Wahlmöglichkeiten für Transfom-Tools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im Dateiverzeichnis des Projekts in `vite.config.js` hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für mehr Informationen darüber, wie Vite konfiguriert wird. Da unsere Website auf GitHub-Pages bereitgestellt wird, wird sie unter `https://Ihr-Benutzername.github.io/Ihr-Repo-Name` gehostet, daher sollten Sie die `base` Option entsprechend dem Namen Ihres GitHub-Repositoriums setzen — aber Sie können es immer später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch eine Syntax verwenden, die von den Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern werden und einen kaputten Stil anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle von uns anvisierten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessortool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS darauf ausgelegt, _Standard CSS_ zu schreiben (d.h. CSS-Syntax, die eines Tages in Browsern erhältlich sein könnte), während Sass eine eigene individuelle Sprache ist, die in CSS kompiliert wird. PostCSS steht dem Web näher und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), daher müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie Features kompilieren möchten. Schauen Sie in die [cssdb](https://preset-env.cssdb.org/features/), welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass wenn Sie einen Klassenname wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt werden. Dies führt häufig zu Namenskonflikten — vorstellen, dass alle Ihre JavaScript-Variablen im globalen Bereich definiert sind! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie sehen, wie wir die `.module.css` Dateien verwenden, und auch die [Dokumentation der CSS-Module](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, weil wir ein Tool ausgewählt haben, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren, gibt es wirklich nichts mehr, das wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird nicht vom Buildprozess behindert.

Jetzt ist unsere Software einsatzbereit!

## Den Quellcode schreiben

Jetzt, da wir die vollständige Entwicklungs-Toolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben — der Teil, in den Sie normalerweise die meiste Zeit investieren sollten. Für unseren Zweck werden wir jedoch einfach etwas bestehenden Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht das Ziel dieses Kapitels ist. Sie sind nur hier, um die Tools auf sie anzuwenden und zu zeigen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden und entpacken Sie den Inhalt dieses Repos irgendwo auf Ihrem lokalen Laufwerk. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src` Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Sie müssen sich über die anderen Dateien keine Sorgen machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir jetzt tun müssen!

## Die Transformation ausführen

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server auf der Befehlszeile ausführen. Im Standardmodus wird er auf Änderungen in Ihrem Code reagieren und den Server aktualisieren. Das ist schön, denn wir müssen nicht ständig zwischen dem Code und der Befehlszeile wechseln.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen den folgenden Befehl aus (unter Verwendung des benutzerdefinierten Skripts, das wir zuvor definiert haben):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe wie diese sehen (nachdem die Abhängigkeiten installiert sind):

   ```plain
   > client-toolchain-example@1.0.0 dev
   > vite

   Re-optimizing dependencies because lockfile has changed

     VITE v5.2.13  ready in 157 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   Der Server läuft jetzt auf der gedruckten URL (in diesem Fällen localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Nun können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, z.B. `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann direkt zurück zur App, die in Ihrem Browser läuft. Sie werden bemerken, dass sich der Browser automatisch aktualisiert hat und die Graphen sich geändert haben!

Sie können auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, eine Menge der Leerstellen aus einer Ihrer Dateien zu entfernen und Prettier darauf laufen zu lassen, um sie aufzuräumen, oder fügen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen, oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen langen Weg zurückgelegt und eine ziemlich schöne lokale Entwicklungsumgebung gebaut, um eine Anwendung zu erstellen.

Normalerweise würden Sie zu diesem Zeitpunkt der Websoftwareentwicklung Ihren Code für die Software, die Sie erstellen möchten, entwickeln. Da dieses Modul sich darum dreht, die Werkzeuge in der Webentwicklung zu lernen und nicht der Webentwicklungscode selbst, werden wir Ihnen kein tatsächliches Code-Schreiben beibringen — Sie finden diese Informationen im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge darauf anzuwenden. Wir würden vorschlagen, dass Sie den Rest des Kapitels mithilfe unseres Beispielcodes durchlaufen, und dann können Sie versuchen, den Inhalt des src Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und in der Tat, die Bereitstellung auf GitHub Pages wird das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
