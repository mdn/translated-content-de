---
title: Einführung einer vollständigen Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie Schritt für Schritt durch den Aufbau einer Beispiel-Toolchain führen. Wir beginnen mit der Einrichtung einer sinnvollen Entwicklungsumgebung und der Einführung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationstools.

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
        Um das bisher Gelernte zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie durchlaufen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzt viele Kombinationen von Werkzeugen und Möglichkeiten, sie zu verwenden. Was Sie in diesem und dem nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge in einem Projekt genutzt werden können.

> [!NOTE]
> Außerdem sei wiederholt, dass nicht alle dieser Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie z.B. VS Code) unterstützen die Integration einer _Vielzahl_ von Werkzeugen über Plugins.

## Einführung unserer Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Werkzeuge in unserer Toolchain

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine [React](https://react.dev/)-bezogene Syntaxerweiterung, die es erlaubt, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden kann.
- Die neuesten eingebauten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie z.B. [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) um CSS-Verschachtelungen zu ermöglichen.
- [Vite](https://vite.dev/) zur Erstellung und Minimierung unseres Codes sowie zum automatischen Schreiben einer Vielzahl von Konfigurationsinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unseres Quellcodekontrollsystems und zur späteren Bereitstellung unserer Site (unter Verwendung von GitHub Pages).

Sie sind möglicherweise nicht mit allen oben genannten Funktionen und Werkzeugen oder deren Funktionsweise vertraut, aber keine Panik — wir werden jeden Teil erklären, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette ist die Toolchain umso komplexer und potenziell fragiler, je mehr Glieder sie hat – zum Beispiel könnte sie schwieriger zu konfigurieren und leichter zu brechen sein. Im Gegenteil, je weniger Glieder, desto robuster ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig prüfen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden das HTML von Hand codieren, "Vanilla JavaScript" (d.h. keine Frameworks oder Zwischen-Sprachen) verwenden und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden komplexere Softwareanforderungen wahrscheinlich von der Verwendung von Werkzeugen profitieren, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie vor dem Einsatz auf Ihrem Produktivserver Tests durchführen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert – dies klingt schon nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell entwickelt wurde, um unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen zu unterstützen, die während der Softwaredesignphase getroffen wurden. Wir werden jedoch unnötige Tools vermeiden, um die Komplexität so gering wie möglich zu halten.

## Überprüfung der Voraussetzungen

Sie sollten die meisten der Softwareteile bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Das sollten Sie haben, bevor Sie mit den eigentlichen Setup-Schritten fortfahren. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Werkzeugen, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig abschließen möchten. Sie können den lokalen Entwicklungsteil jedoch auch ohne durchführen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositorys, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektveröffentlichungen und vieles mehr umfasst. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen wird, der (sollte) alle Software ins Web bereitstellen.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Homepage auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine weitere Software installieren, git, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Sie schon von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Werkzeug zur Quellcode-Versionskontrolle, das Entwicklern zur Verfügung steht – die Versionskontrolle bietet viele Vorteile, wie z. B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern und einen Mechanismus, um im Team an demselben Projekt zu arbeiten, ohne Angst zu haben, den Code eines anderen zu überschreiben.

Es mag offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Werkzeug zur Versionskontrolle, während [GitHub](https://github.com/) ein Online-Store für git-Repositorys ist (plus eine Reihe nützlicher Tools für die Arbeit mit ihnen). Beachten Sie, dass wir zwar GitHub in diesem Kapitel verwenden, es aber mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositorys hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und ihrer Integration in die Toolchain wird helfen, die Entwicklung Ihres Codes zu verwalten. Es bietet einen Weg, "Blöcke" der Arbeit zu "committen", während Sie fortschreiten, zusammen mit Kommentaren wie "X neue Funktion implementiert" oder "Fehler Z jetzt behoben durch Y Änderungen".

Die Versionskontrolle kann Ihnen auch erlauben, Ihr Projekt in verschiedene "Zweige" zu verzweigen, um eine separate Version zu erstellen und neue Funktionen auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code betreffen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt "zurückzusetzen, als er funktionierte", wenn ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben – etwas, das alle Entwickler ab und zu tun müssen!

Git kann [heruntergeladen und über die Website git-scm installiert werden](https://git-scm.com/downloads/) — laden Sie den relevanten Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie zunächst tun müssen.

Sie können mit git auf verschiedene Weise interagieren, von der Verwendung der Befehlszeile zum Ausführen von Befehlen bis hin zur Verwendung einer [git-GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle auszuführen, indem Sie Tasten drücken, oder sogar direkt innerhalb Ihres Code-Editors, wie im folgenden Beispiel von Visual Studio Code:

![Git-Integration in VS Code](vscode-git.png)

### Vorhandenes Projekt

Wir werden auf dem Projekt aufbauen, das wir im vorherigen Kapitel begonnen haben. Stellen Sie sicher, dass Sie die Anweisungen in [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Hier ist eine Zusammenfassung dessen, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir im [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Den Softwareentwicklungsprozess stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeuge, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer anderen Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so transformieren, dass die Produktionsversion auf einer Vielzahl von Browsern, neuen und alten, läuft.
- **Nach der Entwicklung**: Werkzeuge, die ins Spiel kommen, nachdem Sie mit der Hauptentwicklung fertig sind, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin ausgeführt wird. In dieser Fallstudie werden wir das Hinzufügen von Tests zu Ihrem Code untersuchen und Ihre App mit GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Lassen Sie uns mit diesen beginnen, beginnend mit unserer Entwicklungsumgebung. Wir folgen denselben Schritten, wie ein echtes Projekt eingerichtet würde, damit Sie in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut befolgen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht sein, in ein "Werkzeugkaninchenloch" zu fallen, in dem Sie viel Zeit damit verbringen, zu versuchen, die Umgebung "genau richtig" einzurichten.

Aber Sie können dies auf dieselbe Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik sein, die Ihrem mentalen Zustand helfen – all das ist wichtig, um Ihre beste Arbeit zu machen, und sie sollten auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

In gleicher Weise sollte, wenn Ihre Entwicklungsumgebung gut eingerichtet wird, nur einmal eingerichtet werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden diesen Teil der Toolchain wahrscheinlich in regelmäßigen Abständen überprüfen und überlegen wollen, ob es Verbesserungen oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht zu oft nötig sein.

Ihre Toolchain wird von Ihren eigenen Bedürfnissen abhängen. Im Beispiel einer ziemlich vollständigen Toolchain werden die Werkzeuge, die im Voraus installiert/initialisiert werden, die folgenden sein:

- Bibliotheks-Installationstools – zum Hinzufügen von Abhängigkeiten.
- Quellcode-Versionskontrolle.
- Code-Aufräumtools – zum Aufräumen von JavaScript, CSS und HTML.
- Code-Linttools – um unseren Code zu testen.

### Bibliotheks-Installationstools

Das haben Sie bereits getan, aber zur einfachen Referenz hier die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment` Verzeichnisses), um ein npm Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Quellcode-Versionskontrolle

Geben Sie den folgenden Befehl ein, um gits Quellsteuerungsfunktionalität für das Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der Code sind, den wir geschrieben haben und jederzeit neu erstellt werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

### Code-Aufräumtools

Wir werden Prettier verwenden, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir installieren Prettier erneut in diesem Projekt. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele neuerliche Tools kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/configuration.html) einverstanden sind). Das lässt Sie mit dem vorankommen, was wichtig ist: der kreativen Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment` Verzeichnisses namens `.prettierrc.json`. Fügen Sie folgendes ein:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile drucken, anstatt allein auf der nächsten Zeile zu sein. Dies ist das Format, das MDN selbst verwendet. Sie können mehr über die [Konfiguration von Prettier](https://prettier.io/docs/configuration.html) in seiner Dokumentation erfahren.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Wir müssen jedoch keine generierten Dateien formatieren, oder es kann bestimmten Legacy-Code geben, den wir nicht anfassen wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

Es hat denselben Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes auf der Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write` Flag. Prettier versteht dies so: "Wenn mein Codeformat ein Problem aufweist, behebe es und speichere meine Datei". Dies ist für unseren Entwicklungsprozess in Ordnung, aber wir können `prettier` auch ohne das Flag verwenden, dann wird die Datei nur überprüft. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Überprüfungen vor einer Veröffentlichung - d.h. "keinen Code veröffentlichen, der nicht richtig formatiert wurde."

Sie können `./index.html` auch durch eine andere Datei oder ein anderes Verzeichnis ersetzen, um sie zu formatieren. Zum Beispiel formatiert `.` alles im aktuellen Verzeichnis. Falls Sie die Syntax vergessen könnten, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
{
  "scripts": {
    // …
    "format": "prettier --write ."
  }
}
```

Jetzt können Sie das folgende ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann trotzdem mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden von speziellen "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Vor- und Nachaktionen an die Aufgaben, die wir mit git ausführen (wie das Committen Ihres Codes), anzuhängen. Obwohl git hooks ein bisschen zu kompliziert sein können (nach Meinung dieses Autors), können sie, einmal eingerichtet, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Nutzung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code automatisch beim Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Der Editor benötigt nur "Format On Save" aktiviert.

### Code-Linttools

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler während der Entwicklung früher zu erkennen. Es ist ein Schlüsselinstrument einer guten Toolchain und eines, mit dem viele Entwicklungsprojekte standardmäßig arbeiten.

Web-Entwicklungslinienwerkzeuge existieren hauptsächlich für JavaScript (obwohl es einige auch für HTML und CSS gibt). Dies macht Sinn: wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, ist es aufgrund der belastbaren Natur dieser beiden Sprachen wenig wahrscheinlich, dass etwas kaputt geht. JavaScript ist erheblich zerbrechlicher - das irrtümliche Aufrufen einer Funktion, die nicht existiert, verursacht zum Beispiel, dass Ihr JavaScript abbricht; das Linting von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das bevorzugte Werkzeug für das JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsstarkes und vielseitiges Werkzeug, kann aber schwierig sein, es korrekt zu konfigurieren und man kann leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ zu bekommen!

ESLint wird über npm installiert, so dass Sie, wie in Kapitel 2 besprochen, die Wahl haben, dieses Werkzeug lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie sowieso eine Konfigurationsdatei für jedes Projekt haben müssen. Denken Sie daran, den Befehl auszuführen:

```bash
npm install --save-dev eslint@9 @eslint/js@9 globals
```

> [!NOTE]
> Der `@9`-Specifier installiert die neueste Veröffentlichung der Hauptversion v9. Halten Sie die Hauptversionen von `eslint` und `@eslint/js` in Einklang, damit die vordefinierten Konfigurationen kompatibel bleiben. Zum Zeitpunkt des Schreibens ist die neueste ESLint v10. Es dauert jedoch normalerweise eine Weile, bis die Plugins aufgeschlossen sind, so dass wir zu diesem Zeitpunkt in v9 bleiben. Sobald Probleme wie die [ESLint v10 Kompatibilität von `eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react/issues/3977) gelöst sind, sind Beiträge willkommen, um unseren Artikel zu aktualisieren, um die neuesten Versionen zu verwenden.

Das Paket `@eslint/js` bietet vordefinierte ESLint-Konfigurationen, während das Paket `globals` eine Liste der bekannten globalen Namen in jedem Umfeld bietet. Wir werden sie später in der Konfiguration verwenden. Aus der Box wird ESLint sich darüber beschweren, dass die Konfigurationsdatei nicht gefunden wird, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 9.39.4

ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

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
- Weist ESLint an, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Werkzeuge getan haben
- Teilt ESLint mit, .js und .jsx Dateien im Linting zu berücksichtigen
- Teilt ESLint über das Vorhandensein der globalen Browser-Variablen mit (verwendet von Lint-Regeln wie `no-undef`, um nicht existierende Variablen zu überprüfen).

Der ESLint-Parser versteht JSX standardmäßig nicht und seine empfohlenen Regeln behandeln keine Reakt-spezifischen Semantiken. Daher werden wir einige weitere Konfigurationen hinzufügen, um sie richtig mit JSX und React zu unterstützen. Installieren Sie zunächst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bieten:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlene Config dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX einstellt:

```js
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

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
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
];
```

Es gibt eine komplette [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Herzenslust anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, entweder um Inspiration zu erhalten oder um eine auszuwählen, die Sie für die eigenen Standards geeignet finden. Eine Vorwarnung: ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Der Einfachheit halber werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel über das Aussehen oder die Validierung Ihres Codes verfeinern und durchsetzen möchten, es sehr wahrscheinlich ist, dass dies mit der richtigen ESLint-Konfiguration möglich ist.

Wie bei anderen Tools ist auch die Unterstützung für die Code-Editor-Integration typischerweise gut für ESLint und potenziell nützlicher, da sie uns Rückmeldungen in Echtzeit gibt, wenn Probleme auftreten:

![ESLint-Fehlerintegration in VS Code](eslint-error.png)

Damit ist unser Setup der Entwicklungsumgebung abgeschlossen. Jetzt sind wir (fast) bereit, zu programmieren.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt wird, wie bereits erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen nutzen. Ein sofortiges Problem ist, dass kein Browser JSX nativ unterstützt; es ist eine Zwischen-Sprache, die gedacht ist, um in Sprachen kompiliert zu werden, die der Browser in der Produktionsversion versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort eine Fehlermeldung ausgegeben; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme interpretieren kann.

Es gibt eine Reihe von Wahlmöglichkeiten für Transformationswerkzeuge und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin namens `@vitejs/plugin-react` verwenden. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfigurationsdatei! Fügen Sie eine im Stammverzeichnis des Projekts namens `vite.config.js` hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/), um mehr über die Konfiguration von Vite zu erfahren. Da unsere Site auf GitHub Pages bereitgestellt wird, wird sie unter `https://ihr-benutzername.github.io/ihr-repo-name` gehostet. daher sollten Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositorys einstellen – aber Sie können diese Einstellung später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel können Sie eine Syntax verwenden, die nur in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern werden, sie anzuzeigen und gebrochene Stile anzeigen. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle von uns anvisierten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standard_ CSS zu schreiben (d.h. CSS-Syntax, die eines Tages in Browser eintreten könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), also müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), um Funktionen zu kompilieren. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind. Wenn Sie also einen Klassennamen wie `.button` haben, werden alle Elemente mit dem Klassennamen `button` auf die gleiche Weise stilisiert sein. Das führt oft zu Namenskonflikten – stellen Sie sich vor, dass alle Ihre JavaScript-Variablen im globalen Bereich definiert sind! CSS-Module lösen dieses Problem, indem sie den Klassennamen zu den Seiten, die sie verwenden, einzigartig machen. Um zu verstehen, wie es funktioniert, wenn Sie den Quellcode heruntergeladen haben, können Sie überprüfen, wie wir die `.module.css` Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, da wir ein Werkzeug gewählt haben, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren, gibt es wirklich nichts mehr, was wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachteltes CSS korrekt in "normales CSS" transformiert, und unsere Entwicklung wird durch den Build-Prozess nicht behindert.

Nun ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungstoolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben – der Bestandteil, in den Sie eigentlich die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur einige bestehende Quellcodes kopieren und so tun, als ob wir es geschrieben hätten. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind nur da, um die Tools darauf auszuführen und Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie die Inhalte dieses Repos irgendwo auf Ihrem lokalen Laufwerk herunter und entpacken Sie es. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Jetzt kopieren Sie den Inhalt des `src` Verzeichnisses des Projekts und verwenden ihn, um Ihr aktuelles `src` Verzeichnis zu ersetzen. Sie müssen sich um die anderen Dateien nicht kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server von der Befehlszeile ausführen. Im Standardmodus wird er Änderungen in Ihrem Code beobachten und den Server aktualisieren. Das ist nett, weil wir nicht zwischen dem Code und der Befehlszeile hin und her wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen den folgenden Befehl aus (unter Verwendung des zuvor definierten benutzerdefinierten Skriptes):

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

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden das Beispiel-App laufen sehen!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, zum Beispiel `facebook/react`.
3. Speichern Sie die Datei und gehen Sie dann direkt zurück zur App in Ihrem Browser. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde, und die Grafiken haben sich geändert!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden – versuchen Sie absichtlich, ein Loch in die Leerzeichen einer Ihrer Dateien hinzuzufügen und Prettier darauf auszuführen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen oder in Ihrem Editor ausführen.

## Zusammenfassung

Wir sind in diesem Kapitel weit gekommen und haben eine ziemlich nette lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

Zu diesem Zeitpunkt in der Websoftwareentwicklung würden Sie normalerweise den Code für die Software erstellen, die Sie entwickeln möchten. Da es in diesem Modul darum geht, die Werkzeuge rund um die Webentwicklung zu lernen, nicht den eigentlichen Webentwicklungscode, werden wir Ihnen keine tatsächliche Programmierung beibringen – diese Informationen finden Sie im restlichen MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, in dem Sie Ihre Werkzeuge anwenden können. Wir schlagen vor, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
