---
title: Ein vollständiges Toolchain einführen
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln der Serie werden wir Ihr Werkzeugwissen festigen, indem wir Sie durch den Prozess führen, eine Beispiel-Toolchain zu erstellen. Wir gehen von der Einrichtung einer sinnvollen Entwicklungsumgebung und dem Implementieren von Transformationstools bis hin zur Bereitstellung Ihrer App. In diesem Artikel führen wir die Fallstudie ein, richten unsere Entwicklungsumgebung ein und richten unsere Code-Transformationstools ein.

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
        Festigen, was wir bisher gelernt haben, indem wir eine komplette
        Toolchain-Fallstudie bearbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu verwenden. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Tools über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) haben Integrationsunterstützung für _viele_ Tools über Plugins.

## Einführung unserer Fallstudie

Die in diesem Artikel erstellte Toolchain wird verwendet, um eine Mini-Website zu bauen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Tools in unserer Toolchain

In diesem Artikel verwenden wir die folgenden Tools und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein [React](https://react.dev/)-bezogenes Syntaxerweiterungsset, das es Ihnen ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten eingebauten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie z.B. [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Fähigkeiten.
- [Vite](https://vitejs.dev/) zum Erstellen und Minimieren unseres Codes und zum automatischen Schreiben einer Menge von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub) zur Verwaltung unserer Quellcodekontrollen und zur Bereitstellung unserer Website (mit GitHub Pages).

Sie kennen möglicherweise nicht alle oben genannten Funktionen und Tools oder wissen, was sie tun, aber keine Panik — wir erklären jeden Teil, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette, je mehr Glieder man in seiner Toolchain hat, desto komplexer und potenziell fragiler ist sie — zum Beispiel könnte sie komplexer zu konfigurieren sein und leichter brechen. Im Gegensatz dazu, je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und es ist wichtig, zu überlegen, welche Teile Ihrer Toolchain notwendig sind, und jeden Teil sorgfältig zu betrachten.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden das HTML von Hand codieren, "Vanilla JavaScript" (also ohne Frameworks oder Zwischensprachen) verwenden und alles manuell auf einen Server hochladen.

Komplexere Softwareanforderungen profitieren jedoch wahrscheinlich von der Nutzung von Tools, um den Entwicklungsprozess zu vereinfachen. Außerdem sollten Sie Tests durchführen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine speziell entwickelte Toolchain, um unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen zu unterstützen, die während der Softwareentwurfsphase getroffen wurden. Wir werden jedoch jede überflüssige Werkzeugnutzung vermeiden, mit dem Ziel, die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten der Software bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Sie müssen diese nur einmal durchführen und nicht erneut für zukünftige Projekte wiederholen.

### GitHub-Konto erstellen

Zusätzlich zu den Tools, die wir installieren werden und die zur Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch den lokalen Entwicklungsteil dennoch ohne ein Konto verfolgen. Wie zuvor erwähnt, ist GitHub ein Quellcode-Repository-Service, der Community-Funktionen wie Problemverfolgung, Projektversionen folgen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen wird, der (sollte) die gesamte Software auf eine Heimat im Web bereitstellt.

Melden Sie sich für [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Anmelden_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir installieren eine weitere Software, Git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "Git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Versionierungstool, das Entwicklern zur Verfügung steht. Versionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit, Ihre Arbeit an einem Remote-Standort zu sichern und ein Mechanismus, um im Team am selben Projekt zu arbeiten, ohne Angst zu haben, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Speicher für Git-Repositories ist (plus eine Reihe nützlicher Werkzeuge für die Arbeit mit ihnen). Beachten Sie, dass, obwohl wir in diesem Kapitel GitHub verwenden, es mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket). Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und die Einbeziehung als Teil der Toolchain hilft, die Entwicklung Ihres Codes zu verwalten. Es bietet eine Möglichkeit, "Blöcke von Arbeit" zu "commiten", während Sie fortschreiten, zusammen mit Kommentaren wie "Neue Funktion X implementiert" oder "Bug Z jetzt behoben aufgrund der Y-Änderungen".

Versionskontrolle kann Ihnen auch ermöglichen, Ihr Projekt zu "verzweigen", um eine separate Version zu erstellen und neue Funktionalität auszuprobieren, ohne dass die Änderungen Ihren ursprünglichen Code beeinflussen.

Letztendlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zu einem Zeitpunkt "zurückzuversetzen, als er funktionierte", falls irgendwo ein Fehler eingeführt wurde und Sie Probleme haben, ihn zu beheben — etwas, das alle Entwickler ab und zu tun müssen!

Git kann [über die Website von git-scm heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie das entsprechende Installationsprogramm für Ihr System herunter, führen Sie es aus und folgen Sie den Anweisungen auf dem Bildschirm. Dies ist alles, was Sie vorerst tun müssen.

Sie können auf verschiedene Arten mit Git interagieren, von der Verwendung der Kommandozeile zum Ausgeben von Befehlen bis zur Verwendung einer [Git-GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle mit Knopfdruck auszuführen, oder sogar direkt in Ihrem Code-Editor, wie im folgenden Visual Studio Code-Beispiel:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir im vorherigen Kapitel bereits begonnen haben. Vergewissern Sie sich also, dass Sie die Anweisungen im [Package management](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Um es kurz zusammenzufassen, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die grundlegend für das Ausführen Ihres Codes sind. Dieser Teil wurde im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer anderen Sprache insgesamt (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und dann unseren Code so zu transformieren, dass die Produktionsversion immer noch in einer Vielzahl von Browsern läuft, modern und älter.
- **Nach der Entwicklung**: Tools, die nach Abschluss der Entwicklung des Hauptteils Ihrer Software zum Einsatz kommen, um sicherzustellen, dass Ihre Software ins Web gelangt und weiter läuft. In dieser Fallstudie werden wir uns darauf konzentrieren, Tests zu Ihrem Code hinzuzufügen und Ihre App mit GitHub Pages so bereitzustellen, dass sie für das gesamte Web sichtbar ist.

Lassen Sie uns mit unserer Entwicklungsumgebung beginnen und dieselben Schritte wie bei einem echten Projekt folgen. So können Sie in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut durchgehen.

## Eine Entwicklungsumgebung erstellen

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Kaninchenloch" von Werkzeugen zu fallen, wo Sie viel Zeit damit verbringen, die Umgebung "genau richtig" einzurichten.

Aber Sie können dies auf die gleiche Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position aufgestellt werden, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik vorhanden sein, die Ihre mentale Verfassung unterstützen — all dies ist wichtig, um die beste Arbeit zu leisten, und sollte auch nur einmal eingerichtet werden, wenn es richtig gemacht wird.

Auf die gleiche Weise, wenn Sie Ihre Entwicklungsumgebung einrichten und dies gut gemacht wird, muss es nur einmal durchgeführt werden und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain halbregelmäßig überprüfen wollen und überlegen, ob es irgendwelche Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer relativ vollständigen Toolchain werden die folgenden Tools von Anfang an installiert/initiiert:

- Bibliotheksinstallationswerkzeuge — zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufbereitungstools — zum Aufbereiten von JavaScript, CSS und HTML.
- Code-Linting-Tools — zum Linting unseres Codes.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz hier die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcodekontrollfunktionalität von Git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt Git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der von uns geschriebene Code sind und jederzeit neu generiert werden können. Wir können Git sagen, dass es diese Dateien ignorieren soll, indem wir eine `.gitignore`-Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

### Code-Aufbereitungstools

Wir werden Prettier verwenden, das wir erstmals in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzubereiten. Wir installieren Prettier erneut in diesem Projekt. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele neuere Tools wird Prettier mit "sinnvollen Standardwerten" geliefert. Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/en/configuration.html) zufrieden sind). Dies lässt Sie mit dem fortfahren, was wichtig ist: der kreativen Arbeit. Für die Demonstration fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) Öffnungstags am Ende der letzten Zeile drucken, anstatt allein in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Weitere Informationen zur [Konfiguration von Prettier](https://prettier.io/docs/en/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Wir müssen jedoch erneut generierte Dateien nicht formatieren, oder es gibt möglicherweise bestimmten Legacy-Code, den wir nicht anfassen möchten. Wir können Prettier sagen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

Sie hat denselben Inhalt wie `.gitignore`, aber in einem realen Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für Git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufbereiten Ihres Codes in der Kommandozeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies als "wenn es ein Problem im Codeformat gibt, bitte behebe es und speichere meine Datei". Dies ist für unseren Entwicklungsprozess in Ordnung, aber wir können auch `prettier` ohne das Flag verwenden, und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung durchgeführt werden — also "veröffentlichen Sie keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` auch durch jede andere Datei oder jedes andere Verzeichnis ersetzen, um sie zu formatieren. Zum Beispiel formatiert `.` alles im aktuellen Verzeichnis. Falls Sie das Syntax vielleicht vergessen, können Sie es auch als eigenes Skript in Ihrem package.json hinzufügen:

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

- Verwendung spezieller "Git Hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein Git Hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Vor- und Nachhandlungen an die Aufgaben anzuhängen, die wir mit Git ausführen (z. B. das Committen Ihres Codes). Obwohl Git Hooks (in meiner Meinung nach) etwas überkomplex sein können, können sie sehr mächtig sein, wenn sie einmal eingerichtet sind. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein sehr vereinfachter Weg in die Nutzung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VSCode ermöglicht, den Code automatisch beim Speichern zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code Linting Tools

Linting hilft sowohl mit der Codequalität als auch ist es eine Möglichkeit, potenzielle Fehler schon während der Entwicklung früher zu erkennen. Es ist ein Schlüsselbestandteil einer guten Toolchain und eine, die viele Entwicklungsprojekte standardmäßig einbeziehen werden.

Webentwicklungs-Linting-Tools existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der resilienten Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist viel fragiler — das versehentliche Aufrufen einer Funktion, die nicht existiert, führt beispielsweise dazu, dass Ihr JavaScript kaputtgeht; daher ist das Linting von JavaScript sehr wichtig, insbesondere für größere Projekte.

Das Go-to-Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsfähiges und vielseitiges Tool, kann aber schwierig richtig zu konfigurieren sein, und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu machen!

ESLint wird über npm installiert, also wie in Kapitel 2 besprochen haben Sie die Wahl, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, weil Sie sowieso eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den Befehl zum Ausführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Hinweis:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js` Paket bietet vordefinierte ESLint-Konfigurationen, während das `globals` Paket eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Out of the box wird ESLint meckern, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

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
- Sagt ESLint, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Sagt ESLint, `.js` und `.jsx` Dateien in das Linting einzubeziehen
- Sagt ESLint, dass die globalen Variablen des Browsers existieren (verwendet von Lint-Regeln wie `no-undef` zum Überprüfen nicht existierender Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Daher werden wir einige weitere Konfigurationen hinzufügen, um JSX und React ordnungsgemäß zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für korrektes und idiomatisches React bereitstellen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich, im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react` Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sind, um entweder Inspiration zu erhalten oder eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung: Die Konfiguration von ESLint ist ein sehr tiefes Kaninchenloch!

Zur Vereinfachung werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Bedenken Sie jedoch, dass, wenn Sie eine Regel bezüglich des Aussehens (oder der Validierung) Ihres Codes verfeinern und erzwingen möchten, es sehr wahrscheinlich ist, dass dies mit der richtigen ESLint-Konfiguration gemacht werden kann.

Wie bei anderen Tools ist die Code-Editor-Integrationsunterstützung für ESLint typischerweise gut und potenziell nützlicher, da sie uns sofortiges Feedback geben kann, wenn Probleme auftreten:

![ESLint Fehlerintegration in VS Code gezeigt](eslint-error.png)

Das war unser Dev-Umgebungs-Setup für diesen Punkt. Jetzt sind wir (fast) bereit, zu coden.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt wird, wie bereits erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt verwendet auch die neuesten JavaScript-Funktionen. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX bietet; es ist eine Zwischensprache, die in den Produktionscode in Sprachen umgewandelt werden soll, die der Browser versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser problemlos konsumieren kann.

Es gibt eine Reihe von Wahlmöglichkeiten für Transformationstools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im root des Projektverzeichnisses in der Datei `vite.config.js` hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vitejs.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, daher sollten Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositoriums einstellen — aber Sie können sie immer später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS könnte auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die erst in den letzten wenigen Browserversionen implementiert wurde, was bedeutet, dass ältere Browser darauf fehlschlagen und einen defekten Stil anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, dass alle von uns anvisierten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachverarbeitungstool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (das heißt, CSS-Syntax, die eines Tages in Browsern erscheinen könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vitejs.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie irgendwelche Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke demonstrieren wir eine andere CSS-Transformation: [CSS-Module](https://vitejs.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` gleich gestylt werden. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, all Ihre JavaScript-Variablen wären im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie dies funktioniert, können Sie nach dem Herunterladen des Quellcodes sehen, wie wir die `.module.css`-Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, weil wir ein Tool gewählt haben, das bewusst versucht, Konfiguration und Komplexität zu reduzieren, müssen wir wirklich nichts weiter während der Entwicklungsphase tun. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Den Quellcode schreiben

Unsere vollständige Entwicklungs-Toolchain ist jetzt eingerichtet. Normalerweise wäre es an der Zeit, echten Code zu schreiben — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Zu unseren Zwecken werden wir jedoch nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind nur da, um die Tools darauf laufen zu lassen, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos irgendwo auf Ihrer lokalen Festplatte herunter und entpacken Sie ihn. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das Beispiel-Repository von GitHub](github-repo.png)

Kopieren Sie nun den Inhalt des `src` Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Sie müssen sich um die anderen Dateien keine Sorgen machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Die Transformation ausführen

Um mit unserem Projekt zu arbeiten, führen wir den Vite-Server in der Kommandozeile aus. In seinem Standardmodus wird er auf Änderungen in Ihrem Code achten und den Server auffrischen. Das ist schön, weil wir nicht zwischen dem Code und der Kommandozeile hin und her wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des benutzerdefinierten Skripts, das wir zuvor definiert haben):

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

   Der Server läuft jetzt unter der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App sehen, die läuft!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr Lieblings-GitHub-Repo, z.B. `facebook/react`.
3. Speichern Sie die Datei und kehren Sie dann sofort zurück zur App, die in Ihrem Browser läuft. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und sich die Diagramme geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl oder in Ihrem Editor ausführen.

## Zusammenfassung

Wir haben in diesem Kapitel viel erreicht und eine ziemlich nette lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

An diesem Punkt der Web-Softwareentwicklung würden Sie normalerweise Ihren Code für die Software erstellen, die Sie zu bauen beabsichtigen. Da es in diesem Modul jedoch darum geht, die Werkzeuge rund um die Webentwicklung zu erlernen, nicht den Webentwicklungscode selbst, werden wir Ihnen keinen tatsächlichen Code beibringen — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, das Sie mit Ihren Tools verwenden können. Wir empfehlen, dass Sie das restliche Kapitel mit unserem Beispielcode durchgehen und dann die Inhalte des src-Verzeichnisses durch Ihr eigenes Projekt ersetzen und dieses stattdessen auf GitHub Pages veröffentlichen können! Und tatsächlich, die Bereitstellung auf GitHub Pages wird das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
