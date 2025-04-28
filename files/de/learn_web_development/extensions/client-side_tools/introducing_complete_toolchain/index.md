---
title: Einführung in eine vollständige Toolchain
short-title: Beispielfall Toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln der Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir gehen den ganzen Weg: vom Einrichten einer vernünftigen Entwicklungsumgebung und der Implementierung von Transformationswerkzeugen bis hin zur tatsächlichen Bereitstellung Ihrer Anwendung. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und implementieren unsere Code-Transformationswerkzeuge.

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
        Festigen, was wir bisher gelernt haben, indem wir eine vollständige Toolchain-Fallstudie durcharbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt unendlich viele Kombinationen von Werkzeugen und Möglichkeiten, sie zu verwenden. Was Sie in diesem und im nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt genutzt werden können.

> [!NOTE]
> Es lohnt sich auch zu wiederholen, dass nicht alle dieser Werkzeuge über die Kommandozeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie z. B. VS Code) unterstützen die Integration vieler Werkzeuge über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Werkzeuge in unserer Toolchain

In diesem Artikel verwenden wir die folgenden Werkzeuge und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein mit [React](https://react.dev/) verbundenes Set an Syntaxerweiterungen, die es Ihnen ermöglichen, Dinge wie die Definition von Komponentenstrukturen innerhalb von JavaScript zu tun. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Funktionen.
- [Vite](https://vite.dev/) zum Erstellen und Minimieren unseres Codes und zum automatischen Schreiben einer Reihe von Konfigurationsdateiinhalten.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle sowie zur letztendlichen Bereitstellung unserer Site (mit GitHub Pages).

Möglicherweise sind Sie nicht mit allen oben genannten Funktionen und Werkzeugen oder deren Aufgaben vertraut, aber keine Panik — wir werden jedes Teil erklären, während wir diesen Artikel durchlaufen.

## Toolchains und deren inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell zerbrechlicher ist sie — zum Beispiel könnte sie komplexer zu konfigurieren sein und leichter zu brechen. Andererseits gilt: Je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden das HTML von Hand kodieren, "plain JavaScript" verwenden (bedeutet keine Frameworks oder Zwischenprogramme) und alles manuell auf einen Server hochladen, um es zu hosten.

Komplexere Softwareanforderungen profitieren jedoch wahrscheinlich von der Nutzung von Werkzeugen, um den Entwicklungsprozess zu vereinfachen. Außerdem sollten Sie vor der Bereitstellung auf Ihrem Produktionsserver Tests einschließen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — dies klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt werden wir eine speziell für unsere Softwareentwicklung entworfene Toolchain verwenden und die während der Softwaredesignphase getroffenen technischen Entscheidungen unterstützen. Dabei werden wir jedoch jegliche überflüssige Tools vermeiden, um die Komplexität möglichst gering zu halten.

## Voraussetzungen überprüfen

Sie sollten die meisten Softwarekomponenten bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Setup-Schritten fortfahren. Diese müssen nur einmal durchgeführt werden und Sie müssen dies für zukünftige Projekte nicht wiederholen.

### Ein GitHub-Konto erstellen

Neben den Tools, die wir installieren werden, um zu unserer Toolchain beizutragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch auch den lokalen Entwicklungsteil ohne es ausführen. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir auf ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt haben wird, der (sollte) alle Software ins Netz stellen.

Registrieren Sie sich bei [GitHub](https://github.com/), indem Sie auf der Homepage den Link _Sign Up_ klicken, falls Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir installieren eine weitere Software, git, um bei der Revisionskontrolle zu helfen.

Möglicherweise haben Sie schon von "git" gehört. [Git](https://git-scm.com/) ist derzeit das beliebteste Quellcode-Revisionskontrollwerkzeug, das Entwicklern zur Verfügung steht — Revisionskontrolle bietet viele Vorteile, wie z. B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um im Team am gleichen Projekt zu arbeiten, ohne Angst haben zu müssen, den Code anderer zu überschreiben.

Es mag für einige offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Revisionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Store für Git-Repositories ist (zusätzlich zu einer Reihe nützlicher Werkzeuge, um mit ihnen zu arbeiten). Beachten Sie, dass es, obwohl wir GitHub in diesem Kapitel verwenden, mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen Git-Repositories hosten.

Die Verwendung von Revisionskontrolle in Ihren Projekten und die Einbeziehung als Teil der Toolchain hilft, die Evolution Ihres Codes zu verwalten. Es bietet eine Möglichkeit, "Blöcke" von Arbeit zu committen, während Sie fortschreiten, zusammen mit Kommentaren wie "X neue Funktion implementiert" oder "Bug Z jetzt behoben aufgrund von Y Änderungen".

Revisionskontrolle kann Ihnen auch ermöglichen, Ihre Projektcode zu "verzweigen", um eine separate Version zu erstellen, und neue Funktionen auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt "zurückzusetzen, als er funktionierte", falls ein Fehler irgendwo eingeführt wurde und Sie Probleme haben, ihn zu beheben - etwas, das alle Entwickler ab und zu tun müssen!

Git kann [über die Git-scm Website heruntergeladen und installiert werden](https://git-scm.com/downloads) - laden Sie das relevante Installationsprogramm für Ihr System herunter, führen Sie es aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie jetzt tun müssen.

Sie können auf verschiedene Arten mit Git interagieren, von der Verwendung der Kommandozeile, um Befehle auszuführen, bis hin zur Nutzung einer [Git GUI-App](https://git-scm.com/downloads/guis), um die gleichen Befehle per Knopfdruck auszuführen, oder sogar direkt innerhalb Ihres Code-Editors, wie im Visual Studio Code-Beispiel unten gezeigt:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir werden das Projekt aufbauen, das wir im vorherigen Kapitel bereits gestartet haben. Stellen Sie also sicher, dass Sie den Anweisungen im Abschnitt [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) folgen, um das Projekt zuerst einzurichten. Um zusammenzufassen, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min`-Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir im [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen gegliedert:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist bereits im vorherigen Kapitel eingerichtet.
- **Sicherheitsnetz**: Das Softwareentwicklungserlebnis stabiler und effizienter gestalten. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Werkzeug, das es uns ermöglicht, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer ganz anderen Sprache (z. B. JSX oder TypeScript) im Entwicklungsprozess zu verwenden, und dann unseren Code so transformiert, dass die Produktionsversion auf einer Vielzahl von modernen und älteren Browsern läuft.
- **Post-Entwicklung**: Werkzeuge, die nach Abschluss des Hauptteils der Entwicklung ins Spiel kommen, um sicherzustellen, dass Ihre Software ins Web kommt und läuft. In dieser Fallstudie werden wir uns ansehen, wie man Tests zu Ihrem Code hinzufügt und Ihre App mit GitHub Pages bereitstellt, damit sie für das gesamte Web verfügbar wird.

Beginnen wir mit der Arbeit an diesen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte befolgen, wie ein echtes Projekt eingerichtet würde, damit Sie in Zukunft, wenn Sie ein neues Projekt einrichten, zu diesem Kapitel zurückkehren und die Schritte erneut befolgen können.

## Eine Entwicklungsumgebung erstellen

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Rabbit Hole" der Werkzeuge zu fallen, in dem Sie viel Zeit damit verbringen, die Umgebung "genau richtig" zu bekommen.

Aber Sie können dies auf die gleiche Weise sehen wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position für Ihre Haltung aufgestellt werden. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnte wichtige Dekorationen oder Musik geben, die Ihrem mentalen Zustand helfen — dies alles sind wichtige Dinge, um Ihre beste Arbeit zu leisten, und sie sollten auch nur einmal eingerichtet werden müssen, wenn sie richtig gemacht werden.

In gleicher Weise sollte das Einrichten Ihrer Entwicklungsumgebung, wenn es gut gemacht wird, nur einmal durchgeführt werden und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain regelmäßig überprüfen wollen und überlegen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die Werkzeuge, die im Voraus installiert/initialisiert werden, folgende sein:

- Bibliotheksinstallationstools — um Abhängigkeiten hinzuzufügen.
- Code-Revisionskontrolle.
- Code-Aufräumwerkzeuge — um JavaScript, CSS und HTML aufzuräumen.
- Code-Linting-Werkzeuge — zum Linten unseres Codes.

### Bibliotheksinstallationstools

Sie haben dies bereits getan, aber für einfache Referenz hier die Befehle (ausgeführt im Root-Verzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um die Funktionalität der Quellcodekontrolle von Git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt Git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der von uns geschriebene Code sind und jederzeit neu generiert werden können. Wir können Git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Root-Verzeichnis des Projektes erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

### Code-Aufräumwerkzeuge

Wir verwenden Prettier, den wir zuerst in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir installieren Prettier erneut in diesem Projekt. Installieren Sie es mit folgendem Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich erstellte Werkzeuge kommt Prettier mit "sinnvollen Standardeinstellungen". Das bedeutet, dass Sie Prettier verwenden können, ohne irgendetwas konfigurieren zu müssen (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/configuration.html) zufrieden sind). Dies ermöglicht es Ihnen, sich auf das Wesentliche zu konzentrieren: die kreative Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Root-Verzeichnis Ihres `npm-experiment`-Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular)-Öffnungstags am Ende der letzten Zeile drucken, anstatt alleine in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Weitere Informationen zum [Konfigurieren von Prettier](https://prettier.io/docs/configuration.html) finden Sie in Ihrer Dokumentation.

Standardmäßig formatiert Prettier alle Dateien, die Sie spezifizieren. Es gibt jedoch wieder generierte Dateien, die wir nicht formatieren müssen, oder es gibt eventuell bestimmten Legacy-Code, den wir nicht berühren möchten. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie die folgenden Inhalte zur Datei hinzu:

```plain
node_modules
dist
```

Sie hat denselben Inhalt wie `.gitignore`, aber in einem realen Projekt könnten Sie andere Dateien für Prettier ignorieren als für Git.

Jetzt, da Prettier installiert und konfiguriert ist, können wir unseren Code in der Kommandozeile aufräumen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "Wenn es ein Problem in meinem Code-Format gibt, gehe voran und behebe es, dann speichere meine Datei". Dies ist gut für unseren Entwicklungsprozess, aber wir können auch `prettier` ohne das Flag verwenden und es wird die Datei nur überprüfen. Das Überprüfen der Datei (und nicht speichern) ist nützlich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung laufen - d.h. "veröffentliche keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` auch durch eine andere Datei oder einen anderen Ordner ersetzen, um diese zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie möglicherweise die Syntax vergessen, können Sie sie auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
"scripts": {
  // …
  "format": "prettier --write ."
},
```

Jetzt können Sie das folgende ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt ein paar Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung spezieller "Git-Hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein Git-Hook? Git (nicht GitHub) stellt ein System zur Verfügung, das es uns ermöglicht, vor- und nachgelagerte Aktionen mit Aufgaben zu verknüpfen, die wir mit Git durchführen (wie z. B. das Commiten Ihres Codes). Obwohl Git-Hooks etwas übermäßig kompliziert sein können (nach Meinung dieses Autors), können sie, einmal eingerichtet, sehr mächtig sein. Wenn Sie interessiert an der Verwendung von Hooks sind, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code beim Speichern automatisch zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code-Linting-Werkzeuge

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler bereits während der Entwicklung aufzuspüren. Es ist ein Schlüsselelement einer guten Toolchain und eines, das viele Entwicklungsprojekte standardmäßig einschließen werden.

Linting-Werkzeuge für die Webentwicklung existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, bricht aufgrund der resilienten Natur dieser beiden Sprachen wahrscheinlich nichts. JavaScript ist deutlich fragiler — wenn Sie zum Beispiel fälschlicherweise eine Funktion aufrufen, die nicht existiert, bricht Ihr JavaScript; daher ist das Linten von JavaScript sehr wichtig, insbesondere bei größeren Projekten.

Das führende Werkzeug für das Linten von JavaScript ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsstarkes und vielseitiges Tool, kann jedoch schwierig zu konfigurieren sein, und es wäre leicht, viele Stunden damit zu verbringen, die Konfiguration "genau richtig" zu bekommen!

ESLint wird über npm installiert, daher haben Sie, wie in Kapitel 2 besprochen, die Wahl, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie sowieso eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den Befehl:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Note:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, das wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das Paket `@eslint/js` bietet vordefinierte ESLint-Konfigurationen, während das Paket `globals` eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Von Haus aus wird sich ESLint beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js`, im Root des Projekts):

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
- Weist ESLint an, `.js`- und `.jsx`-Dateien beim Linten einzuschließen
- Informiert ESLint über die Existenz der globalen Variablen im Browser (verwendet durch Lint-Regeln wie `no-undef` zum Prüfen nicht existierender Variablen).

Der ESLint-Parser versteht JSX nicht standardmäßig und seine empfohlenen Regeln behandeln React-spezifische Semantiken nicht. Daher werden wir einige weitere Konfigurationen hinzufügen, um es richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlenen Configs dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln laden als auch die Parser-Optionen für JSX setzen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zu den einzeiligen Ergänzungen für die `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Siehe [facebook/react#28313](https://github.com/facebook/react/issues/28313) für weitere Informationen.

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal eine nützliche Inspirationsquelle sein können oder die Ihnen helfen können, eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung: Die ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Der Einfachheit halber werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezifisches Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass es sehr wahrscheinlich ist, dass alles, was Sie anpassen und durchsetzen wollen, mit der richtigen ESLint-Konfiguration erreicht werden kann.

Wie bei anderen Tools ist die Ausgabe-Editor-Integrationsunterstützung typischerweise gut für ESLint und potenziell nützlicher, da sie uns beim Auftreten von Problemen eine Rückmeldung in Echtzeit geben kann:

![ESLint-Fehlerintegration in VS Code gezeigt](eslint-error.png)

Unser Setup für die Entwicklungsumgebung ist an diesem Punkt vollständig. Nun sind wir (fast) bereit zu codieren.

## Build- und Transformationswerkzeuge

### JavaScript-Transformation

In diesem Projekt, wie bereits oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Features verwenden. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX hat; es handelt sich um eine Zwischensprache, die im Produktionscode in vom Browser verstandene Sprachen kompiliert werden soll. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort Fehler melden. Das Projekt benötigt ein Build-Tool, um den Quellcode in eine Form zu transformieren, die der Browser ohne Probleme verwerten kann.

Es gibt eine Reihe von Auswahlmöglichkeiten für Transformationswerkzeuge, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine unter `vite.config.js` im Root-Verzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, sodass Sie die Option `base` entsprechend dem Namen Ihres GitHub-Repositorys einstellen sollten — aber Sie können dies später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS könnte auch Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten Browser-Versionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und ein kaputtes Stil anzeigen werden. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle Zielbrowser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Nachprocessor-Werkzeug. Im Vergleich zu Build-Werkzeugen wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _Standard_-CSS zu schreiben (d.h. CSS-Syntax, die eines Tages in Browser gelangt), während Sass eine eigene Sprache ist, die zu CSS kompiliert. PostCSS steht dem Web näher und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), es muss also nur [PostCSS konfiguriert werden](https://github.com/postcss/postcss#usage), wenn Sie Funktionen kompilieren möchten. Sehen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, welche Funktionen unterstützt werden.

Für unsere Zwecke demonstrieren wir eine andere CSS-Transformation: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass alle CSS-Selektoren global sind. Wenn Sie also einen Klassennamen wie `.button` haben, werden alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt. Dies führt häufig zu Namenskonflikten — stellen Sie sich alle Ihre JavaScript-Variablen vor, die im globalen Bereich definiert werden! CSS-Module lösen dieses Problem, indem sie den Klassennamen für die Seiten, die sie verwenden, eindeutig machen. Um zu verstehen, wie es funktioniert, können Sie sich, nachdem Sie den Quellcode heruntergeladen haben, ansehen, wie wir die `.module.css`-Dateien verwenden, und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Auch wenn diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, weil wir ein Werkzeug gewählt haben, das bewusst versucht, die Konfiguration und Komplexität zu reduzieren, gibt es wirklich nichts mehr, was wir während der Entwicklungsphase tun müssen. Module werden korrekt importiert, verschachtelte CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt haben wir die vollständige Entwicklungs-Toolchain eingerichtet, es ist normalerweise an der Zeit, mit dem Schreiben von echtem Code zu beginnen — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir sie geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge zu testen, um Ihnen etwas über deren Funktion zu vermitteln.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie die Inhalte dieses Repos auf Ihr lokales Laufwerk herunter und entpacken Sie sie irgendwo. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ wählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Jetzt kopieren Sie die Inhalte des `src`-Verzeichnisses des Projekts und verwenden es, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich keine Sorgen um die anderen Dateien machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, starten wir den Vite-Server in der Kommandozeile. In seinem Standardmodus wird er die Änderungen in Ihrem Code überwachen und den Server aktualisieren. Dies ist nett, weil wir nicht zwischen dem Code und der Kommandozeile hin und her flitzen müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des zuvor definierten benutzerdefinierten Skripts):

   ```bash
   npm run dev
   ```

   Sie sollten eine Ausgabe wie diese sehen (sobald die Abhängigkeiten installiert wurden):

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

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die laufende Beispiel-App sehen!

Nun können wir ein paar Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, wie `facebook/react`.
3. Speichern Sie die Datei und gehen Sie direkt zurück zur App, die in Ihrem Browser läuft. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und die Diagramme sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, einen Großteil des Whitespace aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen beim Ausführen des `eslint`-Befehls oder in Ihrem Editor gibt.

## Zusammenfassung

Wir sind in diesem Kapitel einen langen Weg gegangen, um eine ziemlich angenehme lokale Entwicklungsumgebung zum Erstellen einer Anwendung aufzubauen.

Zu diesem Zeitpunkt der Websoftwareentwicklung würden Sie normalerweise Ihren Code für die Software erstellen, die Sie bauen möchten. Da es in diesem Modul darum geht, die Werkzeuge rund um die Webentwicklung zu lernen, nicht den Webentwicklungscode selbst, werden wir Ihnen keine eigentliche Codierung beibringen — Sie finden diese Informationen im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt geschrieben, um Ihre Werkzeuge darauf anzuwenden. Wir würden vorschlagen, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten, und dann können Sie versuchen, die Inhalte des src-Verzeichnisses auf Ihr eigenes Projekt zu ändern und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und in der Tat wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
