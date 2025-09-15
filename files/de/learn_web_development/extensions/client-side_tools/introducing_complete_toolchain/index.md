---
title: Einführung in eine vollständige Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge vertiefen, indem wir Sie durch den Prozess des Aufbauens einer Beispiel-Toolchain-Fallstudie führen. Wir gehen den ganzen Weg von der Einrichtung einer sinnvollen Entwicklungsumgebung und der Implementierung von Transformationstools bis hin zur Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und richten unsere Code-Transformationstools ein.

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
        Was wir bisher gelernt haben, durch eine vollständige
        Toolchain-Fallstudie zu festigen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Werkzeugen und Möglichkeiten, sie zu verwenden. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die präsentierten Werkzeuge für ein Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle diese Werkzeuge über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (z. B. VS Code) unterstützen eine _Menge_ von Werkzeugen über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt, wobei ihre Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezogen werden.

## Verwendete Werkzeuge in unserer Toolchain

In diesem Artikel verwenden wir die folgenden Werkzeuge und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), ein mit [React](https://react.dev/) verbundenes Satz von Syntaxerweiterungen, das es ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben es aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie z.B. [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungswerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linten.
- [PostCSS](https://postcss.org/) zur Bereitstellung von CSS-Verschachtelungsfähigkeiten.
- [Vite](https://vite.dev/) zum Erstellen und Minimieren unseres Codes sowie zum automatischen Schreiben eines Haufens an Konfigurationsdateiinhalten für uns.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) zur Verwaltung unserer Quellcodeverwaltung sowie zur letztendlichen Bereitstellung unserer Site (unter Verwendung von GitHub Pages).

Vielleicht sind Ihnen nicht alle oben genannten Funktionen und Werkzeuge oder deren Aufgaben bekannt, aber keine Panik – wir werden jeden Teil erklären, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell fragiler ist sie - beispielsweise könnte sie komplexer zu konfigurieren und leichter zu brechen sein. Umgekehrt gilt: Je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen überlegen, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code von Hand programmieren, "vanilla JavaScript" verwenden (was bedeutet, keine Frameworks oder Zwischenprogrammiersprachen), und alles manuell auf einen Server hochladen, um es zu hosten.

Komplexere Softwareanforderungen profitieren jedoch wahrscheinlich vom Einsatz von Werkzeugen, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie Tests ausführen, bevor Sie auf Ihrem Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert – dies klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell dazu entwickelt wurde, uns bei der Softwareentwicklung zu unterstützen und die während der Softwareentwurfsphase getroffenen technischen Entscheidungen zu unterstützen. Wir vermeiden jedoch jegliche überflüssigen Werkzeuge, um die Komplexität möglichst gering zu halten.

## Überprüfen der Voraussetzungen

Sie sollten die meiste Software bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den echten Einrichtungsschritten übergehen. Sie müssen sie nur einmal durchführen und für zukünftige Projekte nicht wiederholen.

### Ein GitHub-Konto erstellen

Neben den Werkzeugen, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig abschließen möchten. Sie können jedoch dennoch dem lokalen Entwicklungsteil folgen, ohne es zu erstellen. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Funktionen wie Problemverfolgung, das Verfolgen von Projektversionen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir den Code in ein GitHub-Repository hochladen, was einen Kaskadeneffekt auslösen wird, der (sollte) die gesamte Software auf einem Zuhause im Web bereitstellt.

Melden Sie sich bei [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### git installieren

Wir werden eine weitere Software, git, installieren, um bei der Versionskontrolle zu helfen.

Vielleicht haben Sie schon einmal von "git" gehört. [Git](https://git-scm.com/) ist derzeit das beliebteste Werkzeug für die Versionskontrolle von Quellcode, das Entwicklern zur Verfügung steht – die Versionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern und einen Mechanismus, um in einem Team am selben Projekt zu arbeiten, ohne Angst zu haben, den Code des anderen zu überschreiben.

Es mag offensichtlich erscheinen, aber es sei noch einmal gesagt: Git ist nicht dasselbe wie GitHub. Git ist das Werkzeug für die Versionskontrolle, während [GitHub](https://github.com/) ein Online-Speicher für git-Repositories ist (zusätzlich zu einer Reihe nützlicher Werkzeuge für die Arbeit mit ihnen). Beachten Sie, dass, obwohl wir GitHub in diesem Kapitel verwenden, es mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung der Versionskontrolle in Ihren Projekten und deren Aufnahme in die Toolchain wird dazu beitragen, die Entwicklung Ihres Codes zu verwalten. Sie bietet eine Möglichkeit, "Arbeitsblöcke" im Laufe Ihres Fortschritts zu "commit"en, zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben wegen Y Änderungen".

Mit der Versionskontrolle können Sie auch Ihr Projekt auslagern (branch) und eine separate Version erstellen, um neue Funktionalität auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code betreffen.

Zu guter Letzt kann sie Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code zu einem Zeitpunkt zurückzusetzen, an dem "er funktionierte", wenn ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben - etwas, das alle Entwickler gelegentlich tun müssen!

Git kann [über die Website git-scm heruntergeladen und installiert werden](https://git-scm.com/downloads) – laden Sie den entsprechenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Anweisungen auf dem Bildschirm. Das ist alles, was Sie vorerst tun müssen.

Sie können auf verschiedene Arten mit git interagieren, von der Verwendung der Befehlszeile, um Befehle auszugeben, über die Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch das Drücken von Tasten auszugeben, bis hin zu direkt in Ihrem Code-Editor, wie im folgenden Beispiel von Visual Studio Code gezeigt:

![Git-Integration gezeigt in VS Code](vscode-git.png)

### Bestehendes Projekt

Wir bauen auf dem Projekt auf, das wir im vorherigen Kapitel gestartet haben, also stellen Sie sicher, dass Sie den Anweisungen in [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) gefolgt sind, um das Projekt zuerst einzurichten. Zusammenfassend sollten Sie Folgendes haben:

- Node.js und npm sind installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min`-Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in der package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir im [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen strukturiert sein:

- **Entwicklungsumgebung**: Die Werkzeuge, die am grundlegendsten für das Arbeiten mit Ihrem Code sind. Dieser Teil ist bereits im vorherigen Kapitel eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder einer anderen Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und dann unseren Code so umzuwandeln, dass die Produktionsversion auf einer Vielzahl von Browsern läuft, modern und älter.
- **Nach der Entwicklung**: Tools, die nach Abschluss der Entwicklung in Aktion treten, um sicherzustellen, dass Ihre Software es ins Web schafft und weiterhin läuft. In dieser Fallstudie werden wir uns das Hinzufügen von Tests zu Ihrem Code anschauen und Ihre App mit GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Lassen Sie uns mit diesen Themen beginnen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte folgen, wie ein echtes Projekt eingerichtet würde, damit Sie in der Zukunft, wenn Sie ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut durchgehen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain gilt manchmal als Verzögerung der eigentlichen Arbeit, und es kann sehr leicht passieren, dass man in ein "Kaninchenloch" von Werkzeugen fällt, in dem man viel Zeit damit verbringt, zu versuchen, die Umgebung "genau richtig" zu machen.

Aber Sie können es genauso betrachten, wie das Einrichten Ihrer physischen Arbeitsumgebung. Der Stuhl muss bequem sein und in einer guten Position helfen, um Ihre Haltung zu verbessern. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik sein, die Ihnen helfen, Ihre geistige Verfassung zu verbessern – all dies ist wichtig, um Ihre beste Arbeit leisten zu können, und sie sollten auch nur einmal eingerichtet werden müssen, wenn sie richtig gemacht werden.

In gleicher Weise muss die Einrichtung Ihrer Entwicklungsumgebung, wenn sie gut gemacht ist, nur einmal durchgeführt werden und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie werden wahrscheinlich diesen Teil der Toolchain halbregelmäßig überprüfen wollen und überlegen, ob es Upgrades oder Änderungen gibt, die Sie einführen sollten, aber dies sollte nicht zu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die Werkzeuge, die im Voraus installiert/initialisiert werden, sein:

- Bibliotheksinstallationswerkzeuge – zum Hinzufügen von Abhängigkeiten.
- Code-Versionskontrolle.
- Code-Aufbereitungswerkzeuge – zum Aufbereiten von JavaScript, CSS und HTML.
- Code-Linting-Werkzeuge – zum Überprüfen unseres Codes.

### Bibliotheksinstallationswerkzeuge

Sie haben dies bereits getan, aber zur einfachen Referenz hier noch einmal die Befehle (die im Stammverzeichnis des `npm-experiment`-Verzeichnisses ausgeführt werden), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Funktionsweise von git's Quellcodekontrollfunktion im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da sie kein Code sind, den wir geschrieben haben, und jederzeit neu generiert werden können. Wir können git sagen, dass er diese Dateien ignorieren soll, indem wir eine `.gitignore`-Datei im Stamm des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

### Code-Aufbereitungswerkzeuge

Wir verwenden Prettier, das wir zuerst im Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt aufzubereiten. Wir werden Prettier in diesem Projekt erneut installieren. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele Werkzeuge, die in jüngerer Zeit hergestellt wurden, kommt Prettier mit "sinnvollen Voreinstellungen". Das bedeutet, dass Sie Prettier ohne Konfiguration verwenden können (wenn Sie mit den [Standardeinstellungen](https://prettier.io/docs/configuration.html) einverstanden sind). Dies ermöglicht es Ihnen, mit dem Wichtigen fortzufahren: der kreativen Arbeit. Zum Zwecke der Demonstration fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Stammverzeichnis Ihres `npm-experiment`-Verzeichnisses mit dem Namen `.prettierrc.json`. Fügen Sie den folgenden Inhalt hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile drucken, anstatt alleine in der nächsten Zeile zu stehen. Dies ist das Format, das auch auf MDN selbst verwendet wird. In der Dokumentation von [Prettier](https://prettier.io/docs/configuration.html) finden Sie weitere Informationen zur Konfiguration von Prettier.

Standardmäßig formatiert Prettier alle von Ihnen angegebenen Dateien. Es gibt jedoch wiederum generierte Dateien, die wir nicht formatieren müssen, oder es gibt möglicherweise bestimmte alte Codes, die wir nicht anfassen wollen. Wir können Prettier sagen, dass er diese Dateien immer ignorieren soll, indem wir eine `.prettierignore`-Datei im Stamm des Projektverzeichnisses erstellen. Fügen Sie den folgenden Inhalt in die Datei ein:

```plain
node_modules
dist
```

Dies hat denselben Inhalt wie `.gitignore`, aber in einem echten Projekt möchten Sie für git andere Dateien ignorieren als für Prettier.

Da Prettier installiert und konfiguriert ist, kann es vorkommen, dass Sie Prettier im Zusammenhang mit der Befehlszeile ausführen und den Code aufbereiten, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> In dem obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies im Sinne von "Wenn es ein Problem mit meinem Codeformat gibt, gehe vor und behebe es, speichere dann meine Datei". Dies ist gut für unseren Entwicklungsprozess, aber wir können auch `prettier` ohne das Flag verwenden, und es wird die Datei nur prüfen. Das Überprüfen der Datei (und nicht Speichern) ist nützlich für Zwecke wie Tests, die vor einer Veröffentlichung durchgeführt werden - z.B. "Veröffentlichen Sie keinen Code, der nicht ordnungsgemäß formatiert wurde."

Sie können `./index.html` auch durch jede andere Datei oder jedes andere Verzeichnis ersetzen, um diese zu formatieren. Für den Fall, dass Sie sich an die Syntax nicht mehr erinnern, können Sie es auch als benutzerdefiniertes Skript in Ihrem package.json hinzufügen:

```json
{
  "scripts": {
    // …
    "format": "prettier --write ."
  }
}
```

Jetzt können Sie Folgendes ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann trotzdem mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt ein paar Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden von speziellen "git hooks", um zu testen, ob der Code vor einem Commit formatiert ist.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Vorgänge vor und nach Aufgaben zu verknüpfen, die wir mit git ausführen (wie z.B. das Committen Ihres Codes). Obwohl git-Hooks ein wenig überkompliziert sein können (nach Meinung dieses Autors), können sie, sobald sie eingerichtet sind, sehr leistungsfähig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Weg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die es VS Code ermöglicht, Code automatisch beim Speichern zu formatieren. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Code-Linting-Werkzeuge

Linten hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler früher während der Entwicklung zu erkennen. Es ist ein Schlüsselelement einer guten Toolchain und eines, das viele Entwicklungsprojekte standardmäßig enthalten.

Webentwicklungs-Linting-Werkzeuge existieren hauptsächlich für JavaScript (obwohl es einige für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, führt dies aufgrund der widerstandsfähigen Natur dieser beiden Sprachen höchstwahrscheinlich nicht zu einem Problem. JavaScript ist wesentlich empfindlicher – das versehentliche Aufrufen einer nicht existierenden Funktion verursacht beispielsweise einen Fehler in Ihrem JavaScript; daher ist das Linten von JavaScript, insbesondere für größere projekte, sehr wichtig.

Das bevorzugte Werkzeug zum Linten von JavaScript ist [ESLint](https://eslint.org/). Es ist ein äußerst leistungsfähiges und vielseitiges Werkzeug, kann aber schwierig korrekt zu konfigurieren sein, und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration _perfekt_ zu machen!

ESLint wird über npm installiert, und wie in Kapitel 2 besprochen, haben Sie die Wahl, dieses Werkzeug lokal oder global zu installieren, wobei eine lokale Installation dringend empfohlen wird, da Sie ohnehin eine Konfigurationsdatei für jedes Projekt benötigen. Denken Sie an den Befehl, den Sie ausführen müssen:

```bash
npm install --save-dev eslint@8 @eslint/js globals
```

> [!NOTE]
> `eslint@8` installiert die Version 8 von ESLint, während die neueste Version v9 ist. Dies ist darauf zurückzuführen, dass `eslint-plugin-react`, das wir später verwenden werden, [noch keine Unterstützung für v9 hat](https://github.com/jsx-eslint/eslint-plugin-react/issues/3699).

Das Paket `@eslint/js` bietet vordefinierte ESLint-Konfigurationen, während das Paket `globals` eine Liste bekannter globaler Namen in jeder Umgebung zur Verfügung stellt. Wir werden sie später in der Konfiguration verwenden. Von Haus aus wird ESLint bemängeln, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 8.57.0

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js`, im Stamm des Projekts):

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
- Weist ESLint an, `.js`- und `.jsx`-Dateien in die Linting-Prüfung einzubeziehen
- Informiert ESLint über die Existenz der globalen Variablen des Browsers (wird für Lintregeln wie `no-undef` für die Überprüfung nicht existenter Variablen verwendet).

Der ESLint-Parser versteht JSX standardmäßig nicht, und seine empfohlenen Regeln behandeln React-spezifische Semantiken nicht. Daher fügen wir einige weitere Konfigurationen hinzu, um JSX und React ordnungsgemäß zu unterstützen. Installieren Sie zunächst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Aktualisieren Sie dann die ESLint-Konfigurationsdatei, um die empfohlenen Konfigurationen dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln laden als auch die Parseroptionen für JSX festlegen:

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
> Unsere Konfiguration für `eslint-plugin-react-hooks` ist ein wenig umständlich im Vergleich zu den einzeiligen Hinzufügungen für `eslint-plugin-react`-Konfigurationen. Dies liegt daran, dass `eslint-plugin-react-hooks` das neue ESLint-Konfigurationsformat noch nicht unterstützt. Weitere Informationen finden Sie unter [facebook/react#28313](https://github.com/facebook/react/issues/28313).

Es gibt eine vollständige [Liste von ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, um Inspiration zu bekommen oder um eine auszuwählen, die Ihren eigenen Standards entspricht. Eine Vorwarnung: ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser bestimmtes Projekt und seine Anforderungen funktioniert. Beachten Sie jedoch, dass, wenn Sie eine Regel über das Aussehen Ihres Codes (oder dessen Überprüfung) verfeinern und durchsetzen möchten, es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration getan werden kann.

Wie bei anderen Werkzeugen ist die Unterstützung der Code-Editor-Integration für ESLint im Allgemeinen gut und potenziell nützlicher, da sie uns Echtzeit-Feedback geben kann, wenn Probleme auftauchen:

![ESLint-Fehlerintegration gezeigt in VS Code](eslint-error.png)

Damit ist die Einrichtung unserer Entwicklungsumgebung an diesem Punkt abgeschlossen. Jetzt sind wir (fast) bereit zum Codieren.

## Erstellungs- und Transformationstools

### JavaScript-Transformation

Für dieses Projekt wird, wie bereits erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem besteht darin, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die dazu gedacht ist, in Sprachen kompiliert zu werden, die der Browser in der Produktionsumgebung versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sofort eine Beschwerde erheben; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser ohne Probleme konsumieren kann.

Es gibt eine Reihe von Auswahlmöglichkeiten für Transformationstools, und obwohl Babel ein besonders beliebtes ist, werden wir in Vite ein integriertes Plugin verwenden: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine an der `vite.config.js` im Stamm des Projektverzeichnisses hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Website auf GitHub Pages bereitgestellt wird, wird sie unter `https://ihr-benutzername.github.io/ihr-repo-name` gehostet. Sie sollten die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories festlegen - aber Sie können es jederzeit anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern werden, und der Stil wird kaputt dargestellt. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle von uns anvisierten Browser verstehen können.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Werkzeug. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS dazu gedacht, _standardgemäßes_ CSS zu schreiben (also CSS-Syntax, die eines Tages in Browser gelangen könnte), während Sass eine eigene Sprache ist, die zu CSS kompiliert. PostCSS ist näher an der Webumgebung und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke werden wir eine andere CSS-Transformation demonstrieren: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, um _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass CSS-Selektoren alle global sind, sodass, wenn Sie, haben wie `.button`, alle Elemente mit dem Klassennamen `button` gleich gestylt werden. Dies führt oft zu Namenskonflikten – stellen Sie sich vor, alle Ihre JavaScript-Variablen wären im globalen Bereich definiert! CSS-Module lösen dieses Problem, indem sie den Klassennamen einzigartig für die Seiten machen, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie sich ansehen, wie wir die `.module.css`-Dateien verwenden, und auch die [Dokumentation zu CSS-Modulen](https://github.com/css-modules/css-modules) lesen.

Obwohl diese Phase unserer Toolchain ziemlich schmerzhaft sein kann, da wir ein Werkzeug gewählt haben, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren, müssen wir während der Entwicklungsphase nichts weiter tun. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "reguläres CSS" transformiert, und unsere Entwicklung wird durch den Build-Prozess nicht behindert.

Jetzt ist unsere Software bereit, geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt haben wir die vollständige Entwicklungstoolchain eingerichtet, in der Regel ist es jetzt an der Zeit, echten Code zu schreiben — das Teil, in das Sie tatsächlich die meiste Zeit investieren sollten. Für unser Ziel werden wir nur einige vorhandene Quellcodes kopieren und so tun, als hätten wir sie geschrieben. Wir werden Ihnen nicht erklären, wie sie funktionieren, da dies nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um die Werkzeuge darauf laufen zu lassen, um Ihnen beizubringen, wie _sie_ funktionieren.

Um den Code zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos auf Ihre lokale Festplatte herunter (+ entpacken Sie es). Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie es, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie müssen sich keine Sorgen um die anderen Dateien machen.

Installieren Sie außerdem einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Jetzt haben wir unsere Projektdateien an Ort und Stelle. Das ist alles, was wir im Moment tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, werden wir den Vite-Server auf der Befehlszeile ausführen. Im Standardmodus überwacht er Änderungen in Ihrem Code und aktualisiert den Server. Das ist schön, da wir nicht zwischen dem Code und der Befehlszeile hin- und herfliegen müssen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (unter Verwendung des benutzerdefinierten Skripts, das wir zuvor definiert haben):

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

2. Gehen Sie zu dieser URL in Ihrem Browser, und Sie sehen die Beispiel-App laufen!

Jetzt können wir einige Änderungen vornehmen und ihre Auswirkungen live ansehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repository, z.B. `facebook/react`.
3. Speichern Sie die Datei, und kehren Sie dann direkt zur App in Ihrem Browser zurück. Sie werden feststellen, dass sich der Browser automatisch aktualisiert hat und die Diagramme sich geändert haben!

Sie könnten auch versuchen, ESLint und Prettier ebenfalls zu verwenden — versuchen Sie bewusst, eine Menge Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf laufen zu lassen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler ESLint Ihnen gibt, wenn Sie den `eslint`-Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel einen langen Weg gegangen, um eine ziemlich schöne lokale Entwicklungsumgebung aufzubauen, um eine Anwendung zu erstellen.

Zu diesem Zeitpunkt während der Websoftware-Entwicklung würden Sie normalerweise Ihren Code für die Software, die Sie bauen möchten, verfassen. Da es in diesem Modul darum geht, das Werkzeug um die Webentwicklung zu lernen, nicht den Webentwicklungscode selbst, werden wir Ihnen keinen tatsächlichen Code beibringen – diese Informationen finden Sie im Rest der MDN!

Stattdessen haben wir ein Beispielprojekt für Sie geschrieben, um Ihre Werkzeuge darauf zu verwenden. Wir schlagen vor, dass Sie den Rest des Kapitels mit unserem Beispielcode durcharbeiten und dann den Inhalt des src-Verzeichnisses in Ihr eigenes Projekt ändern und dieses stattdessen auf GitHub Pages veröffentlichen! Und in der Tat wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
