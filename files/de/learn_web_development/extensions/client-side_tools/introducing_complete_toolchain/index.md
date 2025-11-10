---
title: Einführung in eine vollständige Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge vertiefen, indem wir Sie durch den Aufbau einer Beispiel-Toolchain führen. Wir beginnen mit der Einrichtung einer sinnvollen Entwicklungsumgebung und der Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel führen wir die Fallstudie ein, richten unsere Entwicklungsumgebung ein und setzen unsere Code-Transformationstools auf.

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
        Toolchain-Fallstudie durchgehen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Möglichkeiten von Werkzeugkombinationen und deren Anwendung; was Sie in diesem und dem nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt genutzt werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Werkzeuge über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Unterstützung für eine _Vielzahl_ von Werkzeugen über Plugins.

## Vorstellung unserer Fallstudie

Die in diesem Artikel erstellte Toolchain wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Werkzeuge, die in unserer Toolchain verwendet werden

In diesem Artikel verwenden wir die folgenden Werkzeuge und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein Satz von Syntaxerweiterungen, die mit [React](https://react.dev/) zusammenhängen und es Ihnen ermöglichen, Dinge wie das Definieren von Komponentenstrukturen innerhalb von JavaScript zu tun. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben das aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linten.
- [PostCSS](https://postcss.org/) für CSS-Verschachtelungsmöglichkeiten.
- [Vite](https://vite.dev/) zur Erstellung und Minimierung unseres Codes und zur automatischen Erstellung einer Reihe von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zum Verwalten unserer Quellcodeverwaltung sowie zur letztlichen Bereitstellung unserer Website (unter Verwendung von GitHub Pages).

Möglicherweise sind Sie nicht mit allen oben genannten Funktionen und Werkzeugen oder deren Einsatz vertraut, aber keine Panik — wir werden jeden Teil erklären, während wir uns durch diesen Artikel bewegen.

## Toolchains und deren inhärente Komplexität

Wie bei jeder Kette ist es so, dass je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell brüchiger ist sie — zum Beispiel könnte sie komplexer zu konfigurieren sein und leichter brechen. Umgekehrt gilt: Je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte sind unterschiedlich, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig betrachten.

Die kleinste Toolchain ist eine, die gar keine Glieder hat. Sie würden das HTML von Hand kodieren, "Vanilla JavaScript" verwenden (d.h. keine Frameworks oder Zwischen-Sprachen), und alles manuell auf einen Server hochladen, um es zu hosten.

Komplexere Softwareanforderungen profitieren jedoch wahrscheinlich von der Verwendung von Werkzeugen, die den Entwicklungsprozess vereinfachen. Zusätzlich sollten Sie Tests einfügen, bevor Sie auf Ihren Produktivserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell dazu entwickelt wurde, unsere Softwareentwicklung zu unterstützen und die technischen Entscheidungen zu unterstützen, die während der Softwaredesignphase getroffen wurden. Wir werden jedoch jegliche überflüssige Werkzeuge vermeiden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfen der Voraussetzungen

Wenn Sie den vorherigen Kapiteln gefolgt sind, sollten Sie die meisten Softwareteile bereits haben. Hier ist, was Sie haben sollten, bevor Sie zu den tatsächlichen Einrichtungs-Schritten übergehen. Sie müssen nur einmal durchgeführt werden und brauchen nicht für zukünftige Projekte wiederholt zu werden.

### Ein GitHub-Konto erstellen

Neben den Werkzeugen, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch trotzdem dem Lokalentwicklungs-Teil ohne ein Konto folgen. GitHub ist, wie bereits erwähnt, ein Dienst für Quellcode-Repositorien, der Community-Funktionen wie Issue-Tracking, Projektverfolgung und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, wodurch ein Kaskadeneffekt ausgelöst wird, der (sollte) die gesamte Software ins Web bereitstellen.

Registrieren Sie sich für [GitHub](https://github.com/) durch Klicken auf den _Sign Up_-Link auf der Startseite, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir installieren eine weitere Software, git, um bei der Revisionskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Werkzeug zur Quellcode-Revisionskontrolle, das Entwicklern zur Verfügung steht — Revisionskontrolle bietet viele Vorteile, z. B. eine Möglichkeit, Ihre Arbeit remote zu sichern, und einen Mechanismus, um in einem Team am gleichen Projekt zu arbeiten, ohne die Sorge, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei nochmals betont: Git ist nicht dasselbe wie GitHub. Git ist das Werkzeug zur Revisionskontrolle, während [GitHub](https://github.com/) ein Online-Shop für Git-Repositories ist (plus eine Reihe von nützlichen Werkzeugen zur Arbeit mit ihnen). Beachten Sie, dass es, obwohl wir in diesem Kapitel GitHub verwenden werden, mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Das Verwenden von Revisionskontrolle in Ihren Projekten und deren Integration als Teil der Toolchain wird beim Management der Entwicklung Ihres Codes helfen. Es bietet die Möglichkeit, während des Fortschritts Code-Blöcke sowie Kommentare wie "X neuen Feature implementiert" oder "Bug Z jetzt behoben durch Y Änderungen" zu "committen".

Revisionskontrolle kann Ihnen auch ermöglichen, Ihr Projekt zu "branchen", wodurch eine separate Version erstellt wird, auf der Sie neue Funktionalitäten ausprobieren können, ohne dass sich diese Änderungen auf Ihren Originalcode auswirken.

Letztendlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt zurückzusetzen, "an dem er noch funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Probleme haben, ihn zu beheben — etwas, das jeder Entwickler von Zeit zu Zeit tun muss!

Git kann über die [Git-SCM-Website](https://git-scm.com/downloads/) heruntergeladen und installiert werden — laden Sie den relevanten Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie fürs Erste tun müssen.

Sie können über verschiedene Wege mit git arbeiten, vom Verwenden der Kommandozeile, um Befehle auszuführen, bis hin zur Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Klicken auf Schaltflächen auszuführen, oder sogar direkt innerhalb Ihres Code-Editors, wie im Visual Studio Code-Beispiel unten zu sehen ist:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir bereits im vorherigen Kapitel gestartet haben, also stellen Sie sicher, dass Sie die Anweisungen in [Paketmanagement](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Um zusammenzufassen, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min`-Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripts definiert in package.json.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in folgende Phasen unterteilt:

- **Entwicklungsumgebung**: Die Werkzeuge, die grundlegend dafür sind, Ihren Code auszuführen. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Die Erfahrung der Softwareentwicklung stabiler und effizienter gestalten. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeugunterstützung, die es uns ermöglicht, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer völlig anderen Sprache (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu nutzen und unseren Code dann so zu transformieren, dass die Produktionsversion auf einer Vielzahl moderner und älterer Browser läuft.
- **Nach der Entwicklung**: Werkzeuge, die nach Abschluss der Entwicklungsarbeit zum Einsatz kommen, um sicherzustellen, dass Ihre Software ins Web gelangt und dort weiterhin läuft. In dieser Fallstudie werden wir das Testen Ihres Codes und die Bereitstellung Ihrer App über GitHub Pages zu behandeln, sodass sie für das gesamte Web verfügbar ist.

Beginnen wir mit der Arbeit an diesen Themen, beginnend mit unserer Entwicklungsumgebung. Wir werden denselben Schritten folgen, wie ein echtes Projekt eingerichtet wird, sodass Sie, wenn Sie in Zukunft ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut ausführen können.

## Einrichtung einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht sein, in ein "Kanincheloch" von Werkzeugen zu fallen, in dem man viel Zeit damit verbringt, die Umgebung "genau richtig" einzurichten.

Aber Sie können dies auf dieselbe Weise betrachten, wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position stehen, um Ihre Haltung zu unterstützen. Sie brauchen Strom, WLAN und USB-Anschlüsse! Vielleicht gibt es wichtige Dekorationen oder Musik, die Ihre mentale Verfassung unterstützen — all das ist wichtig, um Ihre beste Arbeit leisten zu können, und sollte auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wird.

In gleicher Weise muss, wenn Ihre Entwicklungsumgebung gut eingerichtet ist, dies nur einmal gemacht werden und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden diesen Teil der Toolchain wahrscheinlich in regelmäßigen Abständen überprüfen wollen, um zu überlegen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die Werkzeuge sein, die zu Beginn installiert/initialisiert werden:

- Bibliothek-Installationswerkzeuge — zum Hinzufügen von Abhängigkeiten.
- Code-Revisionskontrolle.
- Code-Aufräumwerkzeuge — um JavaScript, CSS und HTML aufzuräumen.
- Code-Linting-Effekte — um unseren Code zu linten.

### Bibliothek-Installationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz, hier sind die Befehle (ausgeführt im Stammverzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcode-Steuerungsfunktionalität von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht Code sind, den wir geschrieben haben und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie dem Dateiinhalt Folgendes hinzu:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir verwenden Prettier, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich entwickelte Werkzeuge kommt Prettier mit "vernünftigen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/configuration.html) zufrieden sind). Dies erlaubt Ihnen, sich auf das Wesentliche zu konzentrieren: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses namens `.prettierrc.json`. Fügen Sie dem Dateiinhalt Folgendes hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML-(HTML, JSX, Vue, Angular) -Öffnungstags am Ende der letzten Zeile drucken, anstatt alleine in der nächsten Zeile. Das ist das Format, das MDN selbst verwendet. Sie können mehr über [die Konfiguration von Prettier](https://prettier.io/docs/configuration.html) in seiner Dokumentation erfahren.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Sie müssen jedoch nicht generierte Dateien formatieren oder es gibt möglicherweise bestimmten Legacy-Code, den Sie nicht berühren möchten. Sie können Prettier anweisen, diese Dateien immer zu ignorieren, indem Sie eine `.prettierignore`-Datei im Stammverzeichnis des Projekts erstellen. Fügen Sie dem Dateiinhalt Folgendes hinzu:

```plain
node_modules
dist
```

Es hat denselben Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie möglicherweise andere Dateien für Prettier ignorieren als für git.

Da Prettier nun installiert und konfiguriert ist, kann das Ausführen und Aufräumen des Codes über die Kommandozeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als Aufforderung: "Wenn es ein Problem im Codeformat gibt, korrigieren und speichern Sie die Datei". Dies ist gut geeignet für unseren Entwicklungsprozess, aber wir können `prettier` auch ohne das Flag verwenden und es wird nur die Datei prüfen. Die Prüfung der Datei (ohne sie zu speichern) ist nützlich für Zwecke wie Prüfungen, die vor einer Veröffentlichung durchgeführt werden — z. B. "Veröffentlichen Sie keinen Code, der nicht richtig formatiert wurde."

Sie können auch `./index.html` durch jede andere Datei oder jedes andere Verzeichnis ersetzen, um diese zu formatieren. Für den Fall, dass Sie die Syntax vergessen, können Sie sie auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

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

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn Sie etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden spezieller "Git-Hooks", um zu testen, ob der Code formatiert ist, bevor ein Commit gemacht wird.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle auszuführen, jedes Mal wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein Git-Hook? Git (nicht GitHub) bietet ein System, mit dem wir Pre- und Post-Aktionen an die Aufgaben anhängen können, die wir mit Git ausführen (wie das Commiten Ihres Codes). Obwohl Git-Hooks etwas zu kompliziert (nach Meinung des Autors) sein können, sind sie, einmal eingerichtet, sehr mächtig. Wenn Sie interessiert sind, [Husky](https://github.com/typicode/husky) ist ein stark vereinfachter Weg, um in das Verwenden von Hooks einzusteigen.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), der es VS Code ermöglicht, Code beim Speichern automatisch zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Der Editor benötigt lediglich "Format On Save" aktiviert.

### Code-Linting-Werkzeuge

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler bereits während der Entwicklung zu erkennen. Es ist eine wesentliche Zutat einer guten Toolchain und eine, die viele Entwicklungsprojekte standardmäßig einbeziehen werden.

Webentwicklungs-Linting-Werkzeuge gibt es hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird aufgrund der robusten Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist weitaus fragiler — wenn Sie beispielsweise versuchen, eine Funktion zu verwenden, die nicht existiert, stürzt Ihr JavaScript ab; daher ist das Linten von JavaScript sehr wichtig, insbesondere für größere Projekte.

Das Standardwerkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann jedoch schwierig zu konfigurieren sein, und es kann leicht viele Stunden dauern, die Konfiguration _genau richtig_ zu machen!

ESLint wird über npm installiert, wodurch Sie, wie in Kapitel 2 besprochen, die Möglichkeit haben, dieses Werkzeug lokal oder global zu installieren, wobei jedoch dringend eine lokale Installation empfohlen wird, da Sie für jedes Projekt ohnehin eine Konfigurationsdatei benötigen. Der Befehl, um auszuführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> [!NOTE]
> `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies ist, weil `eslint-plugin-react`, das wir später verwenden werden, [noch nicht v9 unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js`-Paket liefert vordefinierte ESLint-Konfiguration, während das `globals`-Paket eine Liste bekannter globaler Namen in jeder Umgebung liefert. Wir werden diese später in der Konfiguration verwenden. Ohne Konfigurationsdatei wird ESLint mit `npx eslint` direkt sagen, dass keine existiert:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js` im Projektstammverzeichnis):

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
- Weißt ESLint an, die generierten Dateien zu ignorieren, wie wir es für die anderen Werkzeuge schon getan haben
- Weißt ESLint an, `.js-` und `.jsx-`Dateien beim Linten einzubeziehen
- Informiert ESLint über die Existenz der Browser-Global-Variablen (verwendet bei Lint-Regeln wie `no-undef` zum Überprüfen von nicht existierenden Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine react-spezifischen Semantiken. Deshalb werden wir noch ein paar Konfigurationen hinzufügen, um die Unterstützung von JSX und React zu gewährleisten. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für korrekte und idiomatische React-Skripte bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie anschließend die ESLint-Konfigurationsdatei, um die empfohlenen Configs dieser Plugins einzuschließen, welche sowohl die empfohlenen Regeln laden als auch die Parseroptionen für JSX setzen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich, im Vergleich zu den Einzeilen-Zusätzen für `eslint-plugin-react`-Konfigurationsdateien. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für mehr Informationen.

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen veröffentlicht](https://www.npmjs.com/search?q=keywords:eslintconfig), die manchmal nützlich sein können, entweder um Inspiration zu sammeln oder um eine Auswahl zu treffen, die Ihren eigenen Standards entspricht. Ein Vorwarnung jedoch: Die ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Features von ESLint erkunden, da diese Konfiguration für unser spezifisches Projekt und seine Anforderungen funktioniert. Bedenken Sie jedoch, dass es sehr wahrscheinlich ist, dass Sie mit einer richtigen ESLint-Konfiguration jede Regel, die Sie für das Aussehen oder die Validierung Ihres Codes festlegen möchten, verfeinern und durchsetzen können.

Wie bei anderen Werkzeugen ist die Unterstützung der Code-Editor-Integration in der Regel gut für ESLint und kann potenziell nützlicher sein, da sie uns Feedback in Echtzeit geben kann, wenn Probleme auftreten:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

Das ist unsere Entwicklungsumgebungs-Einrichtung, die an diesem Punkt abgeschlossen ist. Nun sind wir (quasi) bereit, den Code zu schreiben.

## Build- und Transformationswerkzeuge

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX bietet; es ist eine Zwischensprache, die in Sprachen kompiliert werden muss, die der Browser im Produktionscode versteht. Wenn der Browser versucht, den Quell-JavaScript-Code auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Optionen für Transform-Werkzeuge, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

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

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen darüber, wie Vite konfiguriert wird. Da unsere Website auf GitHub-Seiten bereitgestellt wird, wird sie unter `https://Ihr-Benutzername.github.io/Ihr-Repo-Name` gehostet, also sollten Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories setzen — Sie können es jedoch später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten Browser-Versionen implementiert wurde, was bedeutet, dass ältere Browser damit scheitern und einen kaputten Style anzeigen. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das alle Ziele-Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachbearbeitungswerkzeug. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dafür gedacht, standardmäßiges CSS (d.h. CSS-Syntax, die eines Tages in Browser kommt) zu schreibend, während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel niedrigere

Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie es nur konfigurieren müssen, wenn Sie Funktionen kompiliert wollen; siehe die [cssdb](https://preset-env.cssdb.org/features/) für die verfügbaren Funktionen.

Für unsere Zwecke werden wir eine weitere CSS-Transformation vorstellen: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, daher wird, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf dieselbe Weise gestylt. Dies führt oft zu Namenskonflikten — stellen Sie sich vor, all Ihre JavaScript-Variablen wären im globalen Scope definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie überprüfen, wie wir die `.module.css`-Dateien verwenden und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl dieses Stadium unserer Toolchain ziemlich schmerzhaft sein kann, gibt es in der Entwicklungsphase wirklich nichts, was wir weiter tun müssen, da wir bewusst ein Werkzeug gewählt haben, das die Konfiguration und Komplexität reduzieren möchte. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" umgewandelt, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit geschrieben zu werden!

## Quellcode schreiben

Da wir nun die vollständige Entwicklungstoolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben — der Teil, in dem Sie eigentlich die meiste Zeit investieren sollten. Für unsere Zwecke kopieren wir jedoch nur etwas bestehenden Quellcode und geben vor, dass wir ihn geschrieben haben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge darauf anwenden zu können, um Ihnen beizubringen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie die Inhalte dieses Repos auf Ihrem lokalen Laufwerk irgendwo herunter und entpacken Sie sie. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun die Inhalte des `src`-Verzeichnisses des Projekts und verwenden Sie es, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie brauchen sich keine Sorgen über die anderen Dateien machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir jetzt tun müssen!

## Durchführung der Transformation

Um mit unserem Projekt zu arbeiten, starten wir den Vite-Server auf der Kommandozeile. Im Standardmodus wird er Änderungen in Ihrem Code überwachen und den Server aktualisieren. Dies ist praktisch, da wir nicht ständig zwischen dem Code und der Kommandozeile wechseln müssen.

1. Um Vite im Hintergrund zu starten, wechseln Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (mit dem zuvor definierten benutzerdefinierten Skript):

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

   Der Server läuft nun unter der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die laufende Beispiel-App sehen!

Nun können wir einige Änderungen vornehmen und deren Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, wie `facebook/react`.
3. Speichern Sie die Datei, dann gehen Sie direkt zurück zur App, die in Ihrem Browser läuft. Ihnen wird auffallen, dass der Browser automatisch aktualisiert wurde und die Diagramme sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier auszuprobieren — versuchen Sie absichtlich, eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie zu säubern, oder führen Sie einen Syntaxfehler in einer Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint`-Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel viel hinter uns gebracht und eine sehr schöne lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

An diesem Punkt in der Web-Softwareentwicklung würden Sie normalerweise Ihren Code für die Software verfassen, die Sie erstellen möchten. Da es in diesem Modul darum geht, die Werkzeuge rund um die Webentwicklung zu lernen, nicht den Webentwicklungscode selbst, lehren wir Ihnen keinen tatsächlichen Code — diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, mit dem Sie Ihre Werkzeuge verwenden können. Wir schlagen vor, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann versuchen, den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt zu ändern und dies stattdessen über GitHub Pages zu veröffentlichen! Und in der Tat wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
