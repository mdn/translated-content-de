---
title: Einführung in eine vollständige Werkzeugkette
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten beiden Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie Schritt für Schritt durch den Aufbau einer Beispiel-Werkzeugkette führen. Wir gehen vom Einrichten einer sinnvollen Entwicklungsumgebung und dem Implementieren von Transformationswerkzeugen bis hin zur Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationswerkzeuge.

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
        Werkzeugketten-Fallstudie durchgehen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationsmöglichkeiten von Werkzeugen und deren Einsatzmöglichkeiten. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie z.B. VS Code) unterstützen die Integration einer _Vielzahl_ von Werkzeugen über Plugins.

## Einführung in unsere Fallstudie

Die Werkzeugkette, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Website zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Werkzeuge in unserer Werkzeugkette

In diesem Artikel werden wir die folgenden Werkzeuge und Funktionen verwenden:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/)-verwandte Syntaxerweiterung, die es Ihnen ermöglicht, Strukturen von Komponenten innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um dieses Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-natürliche Websprache in eine Werkzeugkette integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) für die Formatierung und [ESLint](https://eslint.org/) für die Überprüfung des Codes.
- [PostCSS](https://postcss.org/), um CSS-Verschachtelung zu ermöglichen.
- [Vite](https://vite.dev/), um unseren Code zu bauen und zu minimieren, sowie um eine Menge an Konfigurationsdateiinhalten automatisch für uns zu schreiben.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control), um unsere Quellcodeverwaltung zu steuern und schließlich unsere Website (mit GitHub Pages) bereitzustellen.

Sie sind möglicherweise nicht mit allen oben genannten Funktionen und Werkzeugen oder deren Funktionsweise vertraut, aber keine Panik – wir werden jeden Teil erklären, während wir diesen Artikel durchlaufen.

## Werkzeugketten und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Werkzeugkette haben, desto komplexer und potenziell fragiler ist sie. Beispielsweise könnte sie schwieriger zu konfigurieren sein und leichter brechen. Umgekehrt gilt: Je weniger Glieder, desto widerstandsfähiger ist die Werkzeugkette wahrscheinlich.

Alle Webprojekte sind unterschiedlich und Sie müssen überlegen, welche Teile Ihrer Werkzeugkette notwendig sind, und jeden Teil sorgfältig prüfen.

Die kleinste Werkzeugkette ist eine, die überhaupt keine Links hat. Sie würden den HTML-Code von Hand schreiben, "Vanilla JavaScript" verwenden (also keine Frameworks oder Zwischenprogrammiersprachen) und alles manuell auf einen Server hochladen, um es zu hosten.

Allerdings werden komplexere Softwareanforderungen voraussichtlich von der Nutzung von Werkzeugen profitieren, um den Entwicklungsprozess zu vereinfachen. Außerdem sollten Sie Tests durchführen, bevor Sie auf Ihren Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert - das klingt bereits nach einer erforderlichen Werkzeugkette.

Für unser Beispielprojekt werden wir eine Werkzeugkette verwenden, die speziell dazu entwickelt wurde, unsere Softwareentwicklung zu unterstützen und die in der Entwurfsphase der Software getroffenen technischen Entscheidungen zu unterstützen. Wir werden jedoch alle überflüssigen Werkzeuge vermeiden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten Softwareteile bereits installiert haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie mit den eigentlichen Einrichtungsschritten fortfahren. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Werkzeugen, die wir installieren werden und die zu unserer Werkzeugkette beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch der lokalen Entwicklungsteilverlauf ohne es folgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositorys, der Community-Funktionen wie Problemverfolgung, Verfolgung von Projektversionen und vieles mehr bietet. Im nächsten Kapitel werden wir auf ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen sollte, der die gesamte Software auf einen Platz im Web bereitstellt.

Registrieren Sie sich für [GitHub](https://github.com/), indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine weitere Software installieren, git, um die Revisionskontrolle zu unterstützen.

Es ist möglich, dass Sie schon einmal von "git" gehört haben. [Git](https://git-scm.com/) ist derzeit das beliebteste Werkzeug zur Quellcode-Revisionskontrolle, das Entwicklern zur Verfügung steht — die Revisionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit, Ihre Arbeit an einem Remote-Ort zu sichern, und einen Mechanismus, um in einem Team am selben Projekt zu arbeiten, ohne Angst zu haben, den Code des anderen zu überschreiben.

Es könnte für einige offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Revisionskontrollwerkzeug, während [GitHub](https://github.com/) ein Online-Laden für git-Repositorys ist (plus eine Reihe nützlicher Werkzeuge für die Arbeit mit ihnen). Beachten Sie, dass obwohl wir GitHub in diesem Kapitel verwenden, es mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositorys hosten.

Der Einsatz von Revisionskontrolle in Ihren Projekten und deren Einbindung als Teil der Werkzeugkette hilft bei der Verwaltung der Entwicklung Ihres Codes. Es bietet eine Möglichkeit, "Blöcke" von Arbeiten zu übernehmen, während Sie Fortschritte machen, zusammen mit Kommentaren wie "Neue Funktion X implementiert" oder "Fehler Z jetzt behoben aufgrund von Änderungen Y".

Die Revisionskontrolle kann Ihnen auch ermöglichen, Ihre Projektcodes zu `verzweigen`, um eine separate Version zu erstellen und neue Funktionen darauf auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf eine Zeit zurückzusetzen, "als es funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben - etwas, das alle Entwickler irgendwann einmal tun müssen!

Git kann [über die git-scm-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) – laden Sie das passende Installationsprogramm für Ihr System herunter, führen Sie es aus und folgen Sie den Bildschirmaufforderungen. Das ist alles, was Sie vorerst tun müssen.

Sie können mit git auf verschiedene Weise interagieren, vom Verwenden der Befehlszeile für die Eingabe von Befehlen über die Verwendung einer [git-GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Drücken von Tasten auszuführen, bis hin zur direkten Verwendung innerhalb Ihres Code-Editors, wie im Visual Studio Code-Beispiel unten zu sehen:

![Git-Integration gezeigt in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir bereits im vorherigen Kapitel gestartet haben, also stellen Sie sicher, dass Sie den Anweisungen in [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) folgen, um das Projekt zuerst einzurichten. Zur Wiederholung, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min`-Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in der Datei package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Werkzeugkette in folgende Phasen strukturiert:

- **Entwicklungsumgebung**: Die grundlegenden Werkzeuge zum Ausführen Ihres Codes. Dieser Teil wurde im vorherigen Kapitel bereits eingerichtet.
- **Sicherheitsnetz**: Stabilisierung und Verbesserung der Effizienz der Softwareentwicklung. Dies könnte auch als unsere Entwicklungsumgebung bezeichnet werden.
- **Transformation**: Werkzeuge, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z. B. JavaScript) oder einer anderen Sprache vollständig (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so zu transformieren, dass die Produktionsversion auf einer Vielzahl von modernen und älteren Browsern läuft.
- **Nachentwicklung**: Werkzeuge, die nach dem Abschluss der Hauptentwicklung in den Prozess einfließen, um sicherzustellen, dass Ihre Software den Weg ins Web findet und weiter funktioniert. In dieser Fallstudie werden wir uns mit dem Hinzufügen von Tests zu Ihrem Code und der Bereitstellung Ihrer App mit GitHub Pages befassen, damit sie für alle im Web verfügbar ist.

Lassen Sie uns mit der Arbeit an diesen beginnen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte befolgen, wie ein echtes Projekt eingerichtet würde, sodass Sie, wenn Sie in der Zukunft ein neues Projekt einrichten, dieses Kapitel als Referenz zurücknehmen und die Schritte erneut befolgen können.

## Erstellung einer Entwicklungsumgebung

Dieser Teil der Werkzeugkette wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr einfach sein, in ein "Rabbit Hole" der Werkzeuge zu fallen, bei dem man viel Zeit damit verbringt, die Umgebung "genau richtig" einzurichten.

Aber Sie können es auf die gleiche Weise betrachten wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Ports! Es kann wichtige Dekorationen oder Musik geben, die Ihrer mentalen Verfassung helfen – all dies ist wichtig, um Ihre beste Arbeit zu leisten, und sollte bei richtiger Einrichtung auch nur einmal eingerichtet werden müssen.

In gleicher Weise sollte das Einrichten Ihrer Entwicklungsumgebung, wenn gut gemacht, nur einmal durchgeführt werden müssen und in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Werkzeugkette halbjährlich überprüfen und überlegen wollen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht zu oft erforderlich sein.

Ihre Werkzeugkette hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Werkzeugkette werden die folgenden Werkzeuge im Voraus installiert/initialisiert:

- Bibliotheksinstallationswerkzeuge – zum Hinzufügen von Abhängigkeiten.
- Code-Revisionskontrolle.
- Code-Verfeinerungswerkzeuge – zum Verfeinern von JavaScript, CSS und HTML.
- Code-Prüfwerkzeuge – zur Überprüfung unseres Codes.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz finden Sie hier die Befehle (auszuführen im Stammverzeichnis des `npm-experiment`-Verzeichnisses), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Revisionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcode-Kontrollfunktionalität von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie nicht der von uns geschriebene Code sind und jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```plain
node_modules
dist
```

### Code-Verfeinerungswerkzeuge

Für dieses Projekt werden wir Prettier verwenden, das wir erstmals in Kapitel 2 kennengelernt haben, um unseren Code zu verfeinern. Wir werden Prettier erneut in diesem Projekt installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich entwickelte Werkzeuge wird Prettier mit "sinnvollen Standardwerten" geliefert. Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/configuration.html) zufrieden sind). Das lässt Sie sich auf das Wichtige konzentrieren: die kreative Arbeit. Zu Demonstrationszwecken fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung druckt Prettier den `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile statt allein in der nächsten Zeile. Dies ist das Format, das MDN selbst verwendet. Sie können mehr darüber erfahren, wie [Prettier konfiguriert wird](https://prettier.io/docs/configuration.html), in der Dokumentation.

Standardmäßig formatiert Prettier alle Dateien, die Sie angeben. Allerdings müssen wir erneut keine generierten Dateien formatieren oder es könnte bestimmten Legacy-Code geben, den wir nicht anfassen wollen. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Stammverzeichnis des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie möglicherweise für Prettier andere Dateien ignorieren als für git.

Jetzt, da Prettier installiert und konfiguriert ist, kann das Ausführen und Verfeinern Ihres Codes über die Befehlszeile erfolgen, z.B.:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "Wenn es ein Problem im Format meines Codes gibt, behebe es und speichere dann meine Datei". Das ist für unseren Entwicklungsprozess in Ordnung, aber wir können auch `prettier` ohne das Flag verwenden, und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Tests, die vor einem Release laufen - d.h. "Veröffentliche keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` auch durch eine andere Datei oder ein anderes Verzeichnis ersetzen, um sie zu formatieren. Z. B. wird `.` alles im aktuellen Verzeichnis formatieren. Falls Sie die Syntax vergessen haben, können Sie es auch als benutzerdefiniertes Skript in Ihrer package.json hinzufügen:

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

- Verwenden von speziellen "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git hook? Git (nicht GitHub) bietet ein System, mit dem wir Vor- und Nach-Aktionen an die Aufgaben anhängen können, die wir mit git ausführen (z. B. das Committen Ihres Codes). Obwohl git hooks ein wenig übermäßig kompliziert sein können (meiner Meinung nach), können sie, wenn sie einmal eingerichtet sind, sehr leistungsstark sein. Wenn Sie daran interessiert sind, Haken zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg, um Haken zu verwenden.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code automatisch beim Speichern zu formatieren. Dies bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code-Prüfwerkzeuge

Linting hilft mit der Codequalität, ist aber auch eine Art, potenzielle Fehler schneller während der Entwicklung zu erkennen. Es ist eine wesentliche Zutat einer guten Werkzeugkette und eine, die in vielen Entwicklungsprojekten standardmäßig enthalten sein wird.

Linting-Werkzeuge für die Webentwicklung existieren hauptsächlich für JavaScript (obwohl es einige auch für HTML und CSS gibt). Dies macht Sinn: Wenn ein unbekanntes HTML-Element oder ungültiges CSS-Attribut verwendet wird, wird aufgrund der robusten Natur dieser beiden Sprachen wahrscheinlich nichts brechen. JavaScript ist jedoch viel fragiler — das versehentliche Aufrufen einer Funktion, die nicht existiert, führt beispielsweise dazu, dass Ihr JavaScript bricht; JavaScript zu prüfen ist daher sehr wichtig, insbesondere für größere Projekte.

Das Standardwerkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsstarkes und vielseitiges Tool, kann jedoch schwierig korrekt zu konfigurieren sein, und man könnte leicht viele Stunden damit verbringen, eine Konfiguration _perfekt_ zu gestalten!

ESLint wird über npm installiert, daher haben Sie, wie in Kapitel 2 besprochen, die Möglichkeit, dieses Tool lokal oder global zu installieren, aber eine lokale Installation wird dringend empfohlen, da Sie sowieso eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den Befehl, um auszuführen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> **Note:** `eslint@8` installiert die Version 8 von ESLint, während die neueste v9 ist. Dies liegt daran, dass `eslint-plugin-react`, welches wir später verwenden werden, [v9 noch nicht unterstützt](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das `@eslint/js`-Paket bietet vordefinierte ESLint-Konfiguration, während das `globals`-Paket eine Liste bekannter Globalnamen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Aus der Box wird ESLint beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js` im Projektstamm):

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
- Teilt ESLint mit, `.js` und `.jsx`-Dateien einzuschließen
- Teilt ESLint über das Vorhandensein der globalen Variablen des Browsers mit (verwendet von Lint-Regeln wie `no-undef`, um nicht-existente Variablen zu überprüfen).

Der ESLint-Parser versteht JSX standardmäßig nicht und seine empfohlenen Regeln behandeln nicht React-spezifische Semantiken. Daher werden wir einiges an Konfiguration hinzufügen, bereтк1chtigt. Zuerst installieren wir `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren wir die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzubinden, was sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX setzt:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist etwas umständlich im Vergleich zu den einzeiligen Ergänzungen für `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` den neuen ESLint-Konfigurationsstandard noch nicht unterstützt. Siehe mehr dazu unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können. Viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal entweder zur Inspiration oder zur Übernahme einer Ihren eigenen Standards entsprechenden Konfiguration nützlich sein können. Eine Vorwarnung: ESLint-Konfiguration ist ein sehr tiefes Rabbit Hole!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser spezielles Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel verfeinern und durchsetzen möchten, wie Ihr Code aussieht (oder validiert), es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration getan werden kann.

Wie bei anderen Werkzeugen ist die Unterstützung der Code-Editor-Integration für ESLint in der Regel gut und kann potenziell nützlicher sein, da sie uns Echtzeit-Feedback geben kann, wenn Probleme auftreten:

![ESLint-Fehlerintegration gezeigt in VS Code](eslint-error.png)

Damit ist unsere Einrichtung der Entwicklungsumgebung abgeschlossen. Jetzt sind wir (fast) bereit, zu coden.

## Build- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt, wie oben erwähnt, wird React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein sofortiges Problem ist, dass kein Browser native Unterstützung für JSX hat, es ist eine Zwischensprache, die im Produktionscode in Sprachen kompiliert werden soll, die der Browser versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort meckern; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu verwandeln, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Vielzahl von Transformationswerkzeugen und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im Stamm des Projektverzeichnisses unter `vite.config.js` hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für mehr Informationen darüber, wie man Vite konfiguriert. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://ihr-benutzername.github.io/ihr-repo-name` gehostet, also sollten Sie die `base`-Option gemäß dem Namen Ihres GitHub-Repositorys einstellen — dies können Sie später jederzeit anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Packaging_management) gelangen.

### CSS-Transformation

Unser CSS könnte auch eine nicht von Browsern verstandene Syntax verwenden. Wenn Sie zum Beispiel eine Syntax verwenden, die nur in den letzten Browser-Versionen implementiert wurde, werden ältere Browser daran scheitern und einen falschen Stil anzeigen. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle von uns angezielten Browser verstehen.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dafür gedacht, _standardmäßiges_ CSS zu schreiben (d.h. CSS-Syntax, die irgendwann in Browser integriert werden könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert wird. PostCSS ist näher am Web und weist eine viel geringere Lernkurve auf. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), also müssen Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage), wenn Sie Funktionen kompilieren möchten. Sehen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSSTransformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Methoden, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, so dass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt werden. Dies führt häufig zu Namenskonflikten — stellen Sie sich vor, all Ihre JavaScript-Variablen würden im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen für die Seiten, auf denen sie verwendet werden, einzigartig machen. Um zu verstehen, wie es funktioniert, können Sie nach dem Herunterladen des Quellcodes überprüfen, wie wir die `.module.css`-Dateien verwenden und lesen Sie auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules).

Obwohl dieser Abschnitt unserer Werkzeugkette ziemlich schmerzhaft sein kann, gibt es nicht viel mehr, das wir während der Entwicklungsphase tun müssen, weil wir ein Werkzeug gewählt haben, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird durch den Build-Prozess nicht behindert.

Jetzt ist unsere Software bereit, um geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungswerkzeugkette eingerichtet haben, ist es normalerweise Zeit, echten Code zu schreiben — der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Für unsere Zwecke werden wir jedoch nur etwas vorhandenen Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge auszuführen, um Ihnen zu lehren, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie die Inhalte dieses Repos auf Ihr lokales Laufwerk herunter und entpacken Sie sie irgendwo. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich um die anderen Dateien nicht kümmern.

Installieren Sie auch ein paar Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir momentan tun müssen!

## Ausführung der Transformation

Um mit unserem Projekt zu arbeiten, starten wir den Vite-Server über die Befehlszeile. Im Standardmodus wird er auf Änderungen im Code achten und den Server aktualisieren. Dies ist schön, weil wir nicht ständig zwischen dem Code und der Befehlszeile wechseln müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (verwenden Sie das zuvor definierte benutzerdefinierte Skript):

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

2. Gehen Sie zu dieser URL in Ihrem Browser, und Sie werden die Beispiel-App laufen sehen!

Jetzt können wir ein paar Änderungen vornehmen und ihre Auswirkungen live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repository, z.B. `facebook/react`.
3. Speichern Sie die Datei, und gehen Sie dann direkt zurück zur laufenden App in Ihrem Browser. Sie werden bemerken, dass der Browser automatisch aktualisiert wurde und sich die Diagramme geändert haben!

Sie könnten auch versuchen, ESLint und Prettier zu verwenden — versuchen Sie absichtlich, die meisten Leerzeichen aus einer Ihrer Dateien zu entfernen und führen Sie Prettier durch, um es zu bereinigen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den Befehl `eslint` ausführen, oder in Ihrem Editor.

## Zusammenfassung

Wir haben in diesem Kapitel einen weiten Weg zurückgelegt und eine ziemlich schöne lokale Entwicklungsumgebung erstellt, um eine Anwendung zu erstellen.

An diesem Punkt der Web-Softwareentwicklung würden Sie normalerweise Ihren Code für die Software, die Sie erstellen möchten, entwickeln. Da es in diesem Modul jedoch darum geht, die Werkzeuge rund um die Webentwicklung zu erlernen und nicht den Webentwicklungscode selbst, werden wir Ihnen keine eigentliche Codierung beibringen - diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge darauf anzuwenden. Wir schlagen vor, dass Sie den Rest des Kapitels mit unserem Beispielcode durchgehen, und dann können Sie versuchen, den Inhalt des `src`-Verzeichnisses durch Ihr eigenes Projekt zu ersetzen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
