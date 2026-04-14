---
title: Einführung in eine umfassende Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: f85c3e78806c6df7b439a81b46a1828b281ae6a3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln der Serie festigen wir Ihr Wissen über Werkzeuge, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir beginnen mit der Einrichtung einer sinnvollen Entwicklungsumgebung und dem Implementieren von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer Anwendung. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationswerkzeuge.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den wichtigsten <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das bisher Gelernte zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie bearbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt tatsächlich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu nutzen. Was Sie in diesem Artikel und im nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools in einem Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Tools auf der Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Integrationsunterstützung für eine _Menge_ von Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Werkzeuge in unserer Toolchain

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/) verbundene Syntaxerweiterung, die es ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben es aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linten.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Nesting-Fähigkeiten.
- [Vite](https://vite.dev/) zum Bauen und Minimieren unseres Codes und zum automatischen Erstellen wichtiger Konfigurationsdateinhalte für uns.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodekontrolle und zur Bereitstellung unserer Website (unter Verwendung von GitHub Pages).

Es ist möglich, dass Sie nicht mit allen oben genannten Funktionen und Tools oder deren Arbeitsweise vertraut sind, aber keine Panik — wir werden jeden Teil erklären, während wir uns durch diesen Artikel bewegen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell anfälliger ist sie — zum Beispiel könnte sie komplexer zu konfigurieren und leichter zu brechen sein. Umgekehrt gilt: Je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig überlegen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden das HTML von Hand codieren, "Vanilla JavaScript" verwenden (was bedeutet, dass keine Frameworks oder Zwischensprachen verwendet werden) und alles manuell auf einen Server hochladen, um es zu hosten.

Kompliziertere Softwareanforderungen profitieren jedoch wahrscheinlich von der Nutzung von Tools, um den Entwicklungsprozess zu vereinfachen. Zudem sollten Sie Tests durchführen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie vorgesehen funktioniert — dies klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine speziell entwickelte Toolchain, um unsere Softwareentwicklung zu unterstützen und die während der Softwaredesignphase getroffenen technischen Entscheidungen zu unterstützen. Wir werden jedoch überflüssige Tools vermeiden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten Softwarekomponenten bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den echten Einrichtungsschritten übergehen. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Tools, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig abschließen möchten. Sie können jedoch auch ohne Konto dem lokalen Entwicklungsteil folgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositories, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir ein GitHub-Code-Repository einrichten, was einen Kaskadeneffekt auslösen wird, der (sollte) die gesamte Software an einem Ort im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir installieren eine weitere Software, git, um bei der Überarbeitungskontrolle zu helfen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Tool zur Quellcode-Revisionskontrolle, das Entwicklern zur Verfügung steht — die Revisionskontrolle bietet viele Vorteile, wie zum Beispiel eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um gemeinsam im Team an demselben Projekt zu arbeiten, ohne befürchten zu müssen, den Code des anderen zu überschreiben.

Es mag für einige offensichtlich sein, aber es lohnt sich, es zu wiederholen: Git ist nicht dasselbe wie GitHub. Git ist das Revisionskontroll-Tool, während [GitHub](https://github.com/) ein Online-Speicher für git-Repositories (plus eine Reihe nützlicher Tools zum Arbeiten mit ihnen) ist. Beachten Sie, dass wir zwar GitHub in diesem Kapitel verwenden, es jedoch mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung der Revisionskontrolle in Ihren Projekten und die Einbeziehung davon als Teil der Toolchain hilft, die Entwicklung Ihres Codes zu verwalten. Es bietet die Möglichkeit, "Blöcke" von Arbeitsschritten zu "committen", wobei Kommentare wie "neues Feature X implementiert" oder "Bug Z nun behoben dank Y-Änderungen" hinzugefügt werden.

Die Revisionskontrolle ermöglicht es Ihnen auch, Ihren Projektcode zu "branch" – eine separate Version zu erstellen und neue Funktionen auszuprobieren, ohne dass diese Änderungen den ursprünglichen Code beeinflussen.

Schließlich kann sie Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt "zurückzusetzen", an dem er funktionierte, falls ein Fehler irgendwo eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler einmal tun müssen.

Git kann [über die Website von git-scm heruntergeladen und installiert werden](https://git-scm.com/downloads/) — laden Sie das für Ihr System relevante Installationsprogramm herunter, führen Sie es aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie im Moment tun müssen.

Sie können auf verschiedene Weise mit git interagieren, von der Verwendung der Befehlszeile zum Ausführen von Befehlen bis zur Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis) oder sogar direkt in Ihrem Code-Editor, wie im folgenden Beispielszenario mit Visual Studio Code gezeigt:

![Git-Integration in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir bereits im vorherigen Kapitel gestartet haben. Stellen Sie also sicher, dass Sie die Anweisungen in [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Zusammenfassend sollten Sie Folgendes haben:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder einen anderen Namen).
- Vite als Entwicklungsabhängigkeit installiert.
- Das Paket `plotly.js-dist-min` als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in folgende Phasen strukturiert:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist bereits im vorherigen Kapitel eingerichtet.
- **Sicherheitsnetz**: Die Entwicklungserfahrung stabiler und effizienter gestalten. Wir können dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tooling, das es uns ermöglicht, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer völlig anderen Sprache (z.B. JSX oder TypeScript) im Entwicklungsprozess zu verwenden, und dann unseren Code so umzuwandeln, dass die Produktionsversion immer noch auf einer Vielzahl von Browsern läuft, sowohl modernen als auch älteren.
- **Nach der Entwicklung**: Tooling, das nach Abschluss der Entwicklung zum Einsatz kommt, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir Tests hinzufügen und Ihre Anwendung mit GitHub Pages bereitstellen, sodass sie für alle im Web sichtbar ist.

Lassen Sie uns diese Bereiche angehen, beginnend mit unserer Entwicklungsumgebung. Wir werden denselben Schritten folgen, wie ein echtes Projekt eingerichtet würde, sodass Sie in Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückverweisen und die Schritte erneut durchgehen können.

## Eine Entwicklungsumgebung erstellen

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es ist sehr einfach, in ein "Werkzeug-Wunderland" zu verfallen, in dem Sie viel Zeit damit verbringen, die Umgebung "genau richtig" zu gestalten.

Aber Sie können das auf dieselbe Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik vorhanden sein, die Ihnen helfen, sich geistig zu konzentrieren – all diese sind wichtig, um Ihre beste Arbeit zu leisten, und sie sollten auch nur einmal eingerichtet werden müssen, wenn sie richtig gemacht werden.

In ähnlicher Weise sollte das Einrichten Ihrer Entwicklungsumgebung gut gemacht, nur einmal durchgeführt werden und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden diesen Teil der Toolchain wahrscheinlich halbjährlich überprüfen wollen und überlegen, ob es irgendwelche Aktualisierungen oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die Tools, die im Voraus installiert/initialisiert werden, folgende sein:

- Bibliotheksinstallationstools – zum Hinzufügen von Abhängigkeiten.
- Code-Revisionskontrolle.
- Code-Aufräumungswerkzeuge – zum Aufräumen von JavaScript, CSS und HTML.
- Code-Luftlinien-Werkzeuge – zum Linten unseres Codes.

### Bibliotheksinstallationstools

Sie haben das bereits getan, aber zur einfachen Referenz sind hier die Befehle (die im Root-Verzeichnis des `npm-experiment` Verzeichnisses ausgeführt werden), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um git's Quellkontrollfunktion auf dem Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da es sich nicht um selbst geschriebene Codes handelt und sie jederzeit neu generiert werden können. Wir können git mitteilen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```plain
node_modules
dist
```

### Code-Aufräumungswerkzeuge

Wir verwenden Prettier, das wir bereits im Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzuräumen. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele neuere Tools kommt Prettier mit "sinnvollen Voreinstellungen". Das bedeutet, dass Sie Prettier ohne Konfiguration verwenden können (wenn Sie mit den [Voreinstellungen](https://prettier.io/docs/configuration.html) zufrieden sind). Dies lässt Sie mit dem Wichtigen fortfahren: der kreativen Arbeit. Zur Demonstration werden wir eine Konfigurationsdatei hinzufügen. Erstellen Sie eine Datei im Root-Verzeichnis Ihres `npm-experiment` Verzeichnisses, die `.prettierrc.json` genannt wird. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile anstelle von allein in der nächsten Zeile drucken. Dies ist das von MDN selbst verwendete Format. Sie können mehr darüber erfahren, [wie Sie Prettier konfigurieren](https://prettier.io/docs/configuration.html) in seiner Dokumentation.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Aber auch hier brauchen wir generierte Dateien nicht zu formatieren, oder es könnte bestimmten alten Code geben, den wir nicht ändern wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore` Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```plain
node_modules
dist
```

Es hat denselben Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie vielleicht für Prettier andere Dateien ignorieren als Sie es für git tun.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes in der Befehlszeile durchgeführt werden, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "wenn es ein Problem im Code-Format gibt, beheben Sie diese und speichern Sie meine Datei". Das ist für unseren Entwicklungsprozess in Ordnung, aber wir können auch `prettier` ohne dieses Flag verwenden, und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und kein Speichern) ist nützlich für Zwecke wie Überprüfungen, die vor einer Veröffentlichung stattfinden - also "veröffentlichen Sie keinen Code, der nicht richtig formatiert wurde."

Sie können auch `./index.html` durch eine andere Datei oder ein anderes Verzeichnis ersetzen, um sie zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

```json
{
  "scripts": {
    // …
    "format": "prettier --write ."
  }
}
```

Jetzt können Sie das folgende verwenden, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann trotzdem mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwendung spezieller "git hooks", um zu testen, ob der Code vor einem Commit formatiert wurde.
- Verwendung von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Aktionen vor und nach den vom git ausgeführten Aufgaben (wie dem Committen Ihres Codes) anzuhängen. Obwohl git-Hooks etwas übermäßig kompliziert sein können (in der Meinung dieses Autors), können sie, sobald sie eingerichtet sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Weg, um mit der Nutzung von Hooks zu beginnen.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), der VS Code es ermöglicht, Code beim Speichern automatisch zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor braucht, ist "Format On Save" aktiviert.

### Code-Luftlinien-Werkzeuge

Das Linten hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist eine Schlüsselzutat einer guten Toolchain und eine, die viele Entwicklungsprojekte standardmäßig enthalten werden.

Webentwicklungs-Linting-Tools existieren hauptsächlich für JavaScript (obwohl es auch einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, wird wahrscheinlich aufgrund der widerstandsfähigen Natur dieser beiden Sprachen nichts kaputtgehen. Bei JavaScript ist es viel fragiler – wenn zum Beispiel versehentlich eine Funktion aufgerufen wird, die nicht existiert, bricht Ihr JavaScript; das Linten von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das bevorzugte Tool für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsstarkes und vielseitiges Tool, kann jedoch schwierig sein, korrekt zu konfigurieren, und es können viele Stunden erforderlich sein, um eine Konfiguration _genau richtig_ zu gestalten!

ESLint wird über npm installiert, sodass Sie die Wahl haben, dieses Tool lokal oder global zu installieren, wie in Kapitel 2 besprochen, aber eine lokale Installation wird dringend empfohlen, da Sie für jedes Projekt eine Konfigurationsdatei benötigen. Denken Sie daran, den Befehl auszuführen:

```bash
npm install --save-dev eslint@9 @eslint/js@9 globals
```

> [!NOTE]
> Der `@9`-Spezifizierer installiert die neueste Veröffentlichung der v9-Hauptversion. Halten Sie die Hauptversionen von `eslint` und `@eslint/js` ausgerichtet, damit die vordefinierten Konfigurationen kompatibel bleiben. Zum Zeitpunkt des Schreibens ist das neueste ESLint v10. Es dauert jedoch normalerweise eine Weile, bis die Plugins aufholen, also bleiben wir an dieser Stelle bei v9. Sobald Probleme wie die [ESLint v10-Kompatibilität von `eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react/issues/3977) behoben sind, sind Beiträge willkommen, um unseren Artikel zu aktualisieren, um die neuesten Versionen zu verwenden.

Das Paket `@eslint/js` stellt vordefinierte ESLint-Konfigurationen bereit, während das Paket `globals` eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Außerhalb der Box wird ESLint meckern, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 9.39.4

ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

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
- Teilt ESLint mit, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Teilt ESLint mit, `.js` und `.jsx` Dateien im Linting einzuschließen
- Teilt ESLint über die Existenz der globalen Browser-Variablen mit (verwendet durch Lint-Regeln wie `no-undef` zur Überprüfung nicht existierender Variablen).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln keine React-spezifischen Semantiken. Daher werden wir einige zusätzliche Konfigurationen hinzufügen, um es zu unterstützen JSX und React richtig. Zuerst installieren Sie `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von richtigem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parseroptionen für JSX setzt:

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

Es gibt eine vollständige [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint Konfigurationen veröffentlicht](https://www.npmjs.com/search?q=keywords:eslintconfig), die manchmal nützlich sein können, um entweder Inspiration zu bekommen oder eine auszuwählen, die Sie für zu Ihren eigenen Standards passend halten. Ein Vorwarnung jedoch: ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel verfeinern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert), es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration erreicht werden kann.

Wie bei anderen Tools ist die Unterstützung für Code-Editor-Integration bei ESLint in der Regel gut und potenziell nützlicher, da es uns sofortiges Feedback geben kann, wenn Probleme auftauchen:

![ESLint Fehlerintegration in VS Code gezeigt](eslint-error.png)

Das ist unsere Entwicklungsumgebung jetzt vollständig. Jetzt sind wir (fast) bereit, mit dem Programmieren zu beginnen.

## Build- und Transformationswerkzeuge

### JavaScript-Transformation

Für dieses Projekt wird, wie bereits erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem ist, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die in den Produktionscode übersetzt werden soll, den der Browser versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, das den Quellcode in etwas verwandelt, das der Browser ohne Probleme konsumieren kann.

Es gibt zahlreiche Auswahlmöglichkeiten für Transformations-Tools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

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

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Seite auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, daher sollten Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositorys setzen – aber Sie können es immer später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS könnte auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Beispielsweise könnte es eine Syntax verwenden, die nur in den letzten wenigen Browser-Versionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen gebrochenen Stil anzeigen werden. Wir können ein Tool verwenden, um unser CSS in ein Format zu transformieren, das von allen Browsern, die wir anvisieren, verstanden wird.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardmäßiges_ CSS zu schreiben (also CSS-Syntax, die möglicherweise eines Tages in Browser kommen könnte), während Sass eine eigene Sprache ist, die in CSS kompiliert wird. PostCSS ist näher am Web und hat eine viel niedrigere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), daher müssen Sie einfach nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie irgendwelche Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke zeigen wir eine andere CSS-Transformation: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass alle CSS-Selektoren global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf dieselbe Weise gestylt werden. Dies führt oft zu Namenskonflikten – stellen Sie sich vor, all Ihre JavaScript-Variablen würden im globalen Scope definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen nur für die Seiten, die sie verwenden, einzigartig machen. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie prüfen, wie wir die `.module.css` Dateien verwenden, und auch die [Dokumentation über CSS-Module](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, gibt es wirklich nichts mehr, was wir während der Entwicklungsphase tun müssen, da wir uns für ein Tool entschieden haben, das absichtlich versucht, die Konfiguration und Komplexität zu reduzieren. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungstoolchain eingerichtet haben, ist es normalerweise an der Zeit, realen Code zu schreiben – der Teil, in den Sie tatsächlich am meisten Zeit investieren sollten. Für unsere Zwecke jedoch werden wir einfach einen vorhandenen Quellcode übernehmen und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Tools darauf anzuwenden und Ihnen beizubringen, wie _sie_ funktionieren.

Besuchen Sie <https://github.com/mdn/client-toolchain-example>, um den Code herunterzuladen und entpacken Sie den Inhalt dieses Repos irgendwo auf Ihrem lokalen Laufwerk. Sie können das gesamte Projekt als ZIP-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispielrepo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich über die anderen Dateien keine Sorgen machen.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien bereit. Das ist alles, was wir derzeit tun müssen!

## Die Transformation ausführen

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server in der Befehlszeile ausführen. Im Standardmodus wird er auf Änderungen Ihres Codes achten und den Server aktualisieren. Das ist schön, weil wir nicht ständig zwischen dem Code und der Befehlszeile hin und her wechseln müssen.

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

   Der Server läuft nun auf der gedruckten URL (in diesem Fall localhost:5173).

2. Gehen Sie zu dieser URL in Ihrem Browser, und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, zum Beispiel `facebook/react`.
3. Speichern Sie die Datei und kehren Sie dann direkt zur App in Ihrem Browser zurück. Sie werden bemerken, dass der Browser sich automatisch aktualisiert hat, und die Diagramme haben sich geändert!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie, absichtlich eine Menge des Leerzeichens aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um es aufzuräumen, oder einen Syntaxfehler in eine Ihrer JavaScript-Dateien einzuführen und zu sehen, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint` Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel weit gekommen und haben eine ziemlich nette lokale Entwicklungsumgebung für die Erstellung einer Anwendung aufgebaut.

An diesem Punkt der Websoftware-Entwicklung würden Sie normalerweise Ihren Code für die Software, die Sie erstellen möchten, fertigstellen. Da es in diesem Modul jedoch darum geht, die Werkzeuge rund um die Webentwicklung zu erlernen, nicht den eigentlichen Webentwicklungs-Code selbst, werden wir Ihnen keinen tatsächlichen Code beibringen — Sie finden diese Informationen im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, auf dem Sie Ihre Werkzeuge anwenden können. Wir empfehlen Ihnen, den Rest des Kapitels mit unserem Beispielcode durchzuarbeiten und dann können Sie versuchen, den Inhalt des src-Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
