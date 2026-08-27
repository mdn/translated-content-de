---
title: Einführung in eine vollständige Toolchain
short-title: Sample toolchain
slug: Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Entwicklungstools vertiefen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir beginnen mit der Einrichtung einer vernünftigen Entwicklungsumgebung und der Implementierung von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer Anwendung. In diesem Artikel werden wir die Fallstudie einführen, unsere Entwicklungsumgebung einrichten und unsere Code-Transformationstools konfigurieren.

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
        Vertiefung des bisher Gelernten durch die Bearbeitung einer vollständigen
        Toolchain-Fallstudie.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Möglichkeiten, sie zu verwenden. Was Sie in diesem Artikel und dem nächsten sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools für ein Projekt verwendet werden können.

> [!NOTE]
> Es lohnt sich auch zu wiederholen, dass nicht alle diese Tools über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Unterstützung für _viele_ Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu erstellen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content)-Repository anzeigt und deren Daten von der [GitHub API](https://docs.github.com/en/rest/metrics/community) bezieht.

## Verwendete Tools in unserer Toolchain

In diesem Artikel verwenden wir die folgenden Tools und Funktionen:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/) verbundene Syntax-Erweiterung, die es ermöglicht, Komponentenstrukturen innerhalb von JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten integrierten JavaScript-Funktionen (zum Zeitpunkt des Schreibens), wie z.B. [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklungstools wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linten.
- [PostCSS](https://postcss.org/) um CSS-Verschachtelungen zu ermöglichen.
- [Vite](https://vite.dev/) um unseren Code zu erstellen und zu verkleinern sowie um eine Menge Konfigurationsdateien automatisch für uns zu schreiben.
- [GitHub](/de/docs/Learn_web_development/Core/Version_control) um unsere Quellcodeverwaltung zu steuern und schließlich unsere Site (mithilfe von GitHub Pages) bereitzustellen.

Sie sind möglicherweise nicht mit allen oben genannten Funktionen und Werkzeugen vertraut, oder wissen nicht, was sie tun, aber keine Angst — wir werden jeden Teil erklären, während wir diesen Artikel durchgehen.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und möglicherweise anfälliger ist sie — zum Beispiel kann es komplexer sein, sie zu konfigurieren, und leichter, sie zu brechen. Umgekehrt: Je weniger Glieder, desto robuster ist die Toolchain wahrscheinlich.

Alle Webprojekte werden unterschiedlich sein, und Sie müssen bedenken, welche Teile Ihrer Toolchain notwendig sind und jeden Teil sorgfältig abwägen.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder enthält. Sie würden HTML handcodieren, "Vanilla JavaScript" verwenden (also keine Frameworks oder Zwischen-Sprachen), und alles manuell auf einen Server zur Bereitstellung hochladen.

Allerdings werden wahrscheinlich komplexere Softwareanforderungen von der Verwendung von Tools profitieren, um den Entwicklungsprozess zu vereinfachen. Darüber hinaus sollten Sie vor der Bereitstellung auf Ihrem Produktionsserver Tests durchführen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — dies klingt bereits wie eine notwendige Toolchain.

Für unser Beispielprojekt verwenden wir eine Toolchain, die speziell dazu entwickelt wurde, unsere Softwareentwicklung zu unterstützen und die während der Softwaredesignphase getroffenen technischen Entscheidungen zu unterstützen. Wir werden jedoch alle überflüssigen Werkzeuge vermeiden, um die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten Softwareteile bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Sie müssen sie nur einmal ausführen und für zukünftige Projekte nicht wiederholen.

### Ein GitHub-Konto erstellen

Abgesehen von den Tools, die wir in unserer Toolchain installieren, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial abschließen möchten. Sie können jedoch dennoch den lokalen Entwicklungsteil ohne es verfolgen. Wie bereits erwähnt, ist GitHub ein Dienst für Quellcode-Repositories, der Community-Funktionen wie Issue-Tracking, das Verfolgen von Projektreleases und vieles mehr hinzufügt. Im nächsten Kapitel werden wir ein GitHub-Code-Repository erstellen, was einen Kaskadeneffekt auslösen wird, der (sollte) alle Software in einem Zuhause im Web bereitstellen wird.

Melden Sie sich für [GitHub](https://github.com/) an, indem Sie auf der Startseite auf den Link _Sign Up_ klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Git installieren

Wir werden eine weitere Software, Git, installieren, um bei der Versionskontrolle zu helfen.

Es ist möglich, dass Ihnen "Git" schon einmal begegnet ist. [Git](https://git-scm.com/) ist derzeit das beliebteste Versionskontrollwerkzeug für Quellcode, das Entwicklern zur Verfügung steht — Versionskontrolle bietet viele Vorteile, wie z.B. eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und ein Mechanismus, um in einem Team am selben Projekt zu arbeiten, ohne Angst haben zu müssen, den Code des anderen zu überschreiben.

Es mag offensichtlich sein, aber es sei wiederholt: Git ist nicht dasselbe wie GitHub. Git ist das Versionskontrollwerkzeug, während [GitHub](https://github.com/) ein Onlinespeicher für git-Repositories ist (plus einer Reihe nützlicher Werkzeuge, um mit ihnen zu arbeiten). Beachten Sie, dass es, obwohl wir GitHub in diesem Kapitel verwenden, mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket), und Sie könnten sogar Ihre eigenen git-Repositories hosten.

Die Verwendung von Versionskontrolle in Ihren Projekten und als Teil der Toolchain hilft, die Weiterentwicklung Ihres Codes zu steuern. Es bietet eine Möglichkeit, Blöcke von Arbeit zu "committen", während Sie Fortschritte machen, zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben durch Y-Änderungen".

Die Versionskontrolle erlaubt es Ihnen auch, _Zweige_ Ihres Projektcodes zu erstellen, eine separate Version zu erstellen und neue Funktionalitäten auszuprobieren, ohne dass diese Änderungen Ihren ursprünglichen Code beeinflussen.

Schließlich kann es Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt "zurückzusetzen", "als er funktionierte", falls irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler ab und zu tun müssen!

Git kann [über die git-scm-Website heruntergeladen und installiert werden](https://git-scm.com/downloads) — laden Sie den entsprechenden Installer für Ihr System herunter, führen Sie ihn aus und folgen Sie den Bildschirmanweisungen. Das ist alles, was Sie vorerst tun müssen.

Sie können in vielerlei Hinsicht mit git interagieren, von der Verwendung der Befehlszeile, um Befehle auszugeben, über die Verwendung einer [git-GUI-App](https://git-scm.com/downloads/guis), um die gleichen Befehle durch Drücken von Tasten auszuführen, bis hin zur direkten Nutzung in Ihrem Code-Editor, wie im folgenden Visual Studio Code-Beispiel:

![Git-Integration in VS Code dargestellt](vscode-git.png)

### Vorhandenes Projekt

Wir bauen auf dem Projekt auf, das wir im vorherigen Kapitel begonnen haben, also stellen Sie sicher, dass Sie den Anweisungen in [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) folgen, um das Projekt zuerst einzurichten. Zusammengefasst, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige benutzerdefinierte Skripte in der package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen aufgeteilt:

- **Entwicklungsumgebung**: Die grundlegendsten Werkzeuge, um Ihren Code auszuführen. Dieser Teil wurde bereits im vorherigen Kapitel eingerichtet.
- **Sicherheitsnetz**: Die Softwareentwicklungserfahrung stabiler und effizienter machen. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns ermöglichen, die neuesten Funktionen einer Sprache (z.B. JavaScript) oder eine ganz andere Sprache (z.B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden, und dann unseren Code so transformieren, dass die Produktionsversion auf einer Vielzahl von Browsern, sowohl modernen als auch älteren, läuft.
- **Nachentwicklung**: Tools, die nach Abschluss der Entwicklung zum Einsatz kommen, um sicherzustellen, dass Ihre Software ins Web gelangt und weiterhin läuft. In dieser Fallstudie werden wir uns mit dem Hinzufügen von Tests zu Ihrem Code befassen und Ihre Anwendung mit GitHub Pages bereitstellen, damit sie für das gesamte Web verfügbar ist.

Lassen Sie uns mit diesen beginnen, beginnend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte wie bei einem echten Projekt durchlaufen, sodass Sie, wenn Sie in Zukunft ein neues Projekt einrichten, auf dieses Kapitel zurückgreifen und die Schritte erneut befolgen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit gesehen, und es ist sehr leicht, in ein "Kaninchenloch" der Werkzeuge zu fallen, in dem Sie viel Zeit damit verbringen, die Umgebung "ganz richtig" einzurichten.

Aber Sie können dies als das Einrichten Ihrer physischen Arbeitsumgebung betrachten. Der Stuhl muss bequem sein und in einer guten Position sein, um Ihre Haltung zu unterstützen. Sie benötigen Strom, WLAN und USB-Anschlüsse! Es könnten wichtige Dekorationen oder Musik geben, die Ihren mentalen Zustand unterstützen — all das ist wichtig, um Ihre beste Arbeit zu leisten, und sollte auch nur einmal eingerichtet werden müssen, wenn es richtig gemacht wurde.

In gleicher Weise muss die Einrichtung Ihrer Entwicklungsumgebung, wenn sie gut gemacht ist, nur einmal durchgeführt werden und sollte in vielen zukünftigen Projekten wiederverwendbar sein. Sie möchten diesen Teil der Toolchain wahrscheinlich halbregelmäßig überprüfen und überlegen, ob es Verbesserungen oder Änderungen gibt, die Sie einführen sollten, aber das sollte nicht allzu oft erforderlich sein.

Ihre Toolchain hängt von Ihren eigenen Bedürfnissen ab, aber für dieses Beispiel einer ziemlich vollständigen Toolchain werden die folgenden Tools vorinstalliert/initialisiert:

- Werkzeuge zur Bibliotheksinstallation — um Abhängigkeiten hinzuzufügen.
- Code-Versionskontrolle.
- Tools zur Code-Auffrischung — zum Auffrischen von JavaScript, CSS und HTML.
- Tools zur Code-Linting — zum Linten unseres Codes.

### Werkzeuge zur Bibliotheksinstallation

Sie haben dies bereits getan, aber zur einfachen Bezugnahme hier sind die Befehle (ausgeführt im Root-Verzeichnis des `npm-experiment`), um ein npm-Paket zu initialisieren und die notwendigen Abhängigkeiten zu installieren:

```bash
npm init
npm install --save-dev vite
npm install plotly.js-dist-min
```

### Code-Versionskontrolle

Geben Sie den folgenden Befehl ein, um die Quellcode-Kontrollfunktion von git im Verzeichnis zu starten:

```bash
git init
```

Standardmäßig verfolgt git die Änderungen aller Dateien. Es gibt jedoch einige generierte Dateien, die wir nicht verfolgen müssen, da es sich nicht um von uns geschriebenen Code handelt und sie jederzeit neu generiert werden können. Wir können git anweisen, diese Dateien zu ignorieren, indem wir eine `.gitignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

### Tools zur Code-Auffrischung

Wir verwenden Prettier, das wir bereits in Kapitel 2 kennengelernt haben, um unseren Code in diesem Projekt zu bereinigen. Wir installieren Prettier erneut in diesem Projekt. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev prettier
```

Beachten Sie erneut, dass wir `--save-dev` verwenden, um es als Entwicklungsabhängigkeit hinzuzufügen, da wir es nur während der Entwicklung verwenden.

Wie viele kürzlich entwickelte Tools kommt Prettier mit "sinnvollen Standardwerten". Das bedeutet, dass Sie Prettier verwenden können, ohne etwas konfigurieren zu müssen (wenn Sie mit den [Standardwerten](https://prettier.io/docs/configuration.html) zufrieden sind). Dies ermöglicht es Ihnen, sich auf das Wichtige zu konzentrieren: die kreative Arbeit. Zum Demonstrationszweck fügen wir eine Konfigurationsdatei hinzu. Erstellen Sie eine Datei im Root-Verzeichnis Ihres `npm-experiment`-Verzeichnisses namens `.prettierrc.json`. Fügen Sie der Datei die folgenden Inhalte hinzu:

```json
{
  "bracketSameLine": true
}
```

Mit dieser Einstellung wird Prettier das `>` eines mehrzeiligen HTML (HTML, JSX, Vue, Angular) öffnenden Tags am Ende der letzten Zeile drucken, anstatt alleine in der nächsten Zeile zu stehen. Dies ist das Format, das MDN selbst verwendet. Mehr Informationen zum [Konfigurieren von Prettier](https://prettier.io/docs/configuration.html) finden Sie in der Dokumentation.

Standardmäßig formatiert Prettier alle Dateien, die Sie angeben. Erneut müssen wir jedoch generierte Dateien nicht formatieren, oder es gibt möglicherweise bestimmten Legacy-Code, den wir nicht berühren möchten. Wir können Prettier anweisen, diese Dateien immer zu ignorieren, indem wir eine `.prettierignore`-Datei im Root-Verzeichnis des Projekts erstellen. Fügen Sie der Datei die folgenden Inhalte hinzu:

```plain
node_modules
dist
```

Es hat den gleichen Inhalt wie `.gitignore`, aber in einem echten Projekt könnten Sie andere Dateien für Prettier ignorieren als für git.

Sobald Prettier installiert und konfiguriert ist, kann das Ausführen und Aufräumen Ihres Codes über die Befehlszeile erfolgen, zum Beispiel:

```bash
npx prettier --write ./index.html
```

> [!NOTE]
> Im obigen Befehl verwenden wir Prettier mit dem `--write`-Flag. Prettier versteht dies als "wenn es Probleme im Code-Format gibt, gehe vor und behebe sie, dann speichere meine Datei". Dies ist für unseren Entwicklungsprozess geeignet, aber wir können `prettier` auch ohne das Flag verwenden und es wird nur die Datei überprüfen. Das Überprüfen der Datei (und nicht das Speichern) ist nützlich für Zwecke wie Prüfungen, die vor einem Release ausgeführt werden - d.h. "veröffentlichen Sie keinen Code, der nicht korrekt formatiert wurde."

Sie können `./index.html` auch durch eine andere Datei oder ein anderes Verzeichnis ersetzen, um diese zu formatieren. Zum Beispiel wird `.` alles im aktuellen Verzeichnis formatieren. Für den Fall, dass Sie sich an die Syntax nicht erinnern, können Sie es auch als benutzerdefiniertem Skript in Ihre package.json einfügen:

```json
{
  "scripts": {
    // …
    "format": "prettier --write ."
  }
}
```

Nun können Sie Folgendes ausführen, um das Verzeichnis zu formatieren:

```bash
npm run format
```

Es kann immer noch mühsam sein, den Befehl jedes Mal auszuführen, wenn wir etwas ändern, und es gibt einige Möglichkeiten, diesen Prozess zu automatisieren:

- Verwenden spezieller "git-Hooks", um zu testen, ob der Code formatiert ist, bevor ein Commit durchgeführt wird.
- Verwenden von Code-Editor-Plugins, um Prettier-Befehle jedes Mal auszuführen, wenn eine Datei gespeichert wird.

> [!NOTE]
> Was ist ein git-Hook? Git (nicht GitHub) bietet ein System, das es uns ermöglicht, Aktionen vor und nach den Aufgaben, die wir mit git durchführen (wie das Committen Ihres Codes), anzuhängen. Obwohl git-Hooks ein wenig zu kompliziert sein können (aus der Sicht dieses Autors), können sie, sobald sie eingerichtet sind, sehr mächtig sein. Wenn Sie daran interessiert sind, Hooks zu verwenden, ist [Husky](https://github.com/typicode/husky) ein stark vereinfachter Einstieg in die Verwendung von Hooks.

Für VS Code ist eine nützliche Erweiterung der [Prettier Code Formatter von Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), die VS Code automatisch Code beim Speichern formatieren lässt. Das bedeutet, dass jede Datei im Projekt, an dem wir arbeiten, schön formatiert wird, einschließlich HTML, CSS, JavaScript, JSON, Markdown und mehr. Alles, was der Editor benötigt, ist "Format On Save" aktiviert.

### Tools zur Code-Linting

Linting hilft bei der Codequalität, ist aber auch eine Möglichkeit, potenzielle Fehler während der Entwicklung früher zu erkennen. Es ist eine wichtige Zutat einer guten Toolchain und eine, die viele Entwicklungsprojekte standardmäßig enthalten werden.

Webentwicklungs-Linting-Tools existieren hauptsächlich für JavaScript (obwohl es ein paar für HTML und CSS gibt). Das macht Sinn: Wenn ein unbekanntes HTML-Element oder eine ungültige CSS-Eigenschaft verwendet wird, ist aufgrund der robusten Natur dieser beiden Sprachen ist es unwahrscheinlich, dass etwas kaputtgeht. JavaScript ist viel anfälliger – das versehentliche Aufrufen einer Funktion, die nicht existiert, führt dazu, dass Ihr JavaScript fehlschlägt; das Linten von JavaScript ist daher sehr wichtig, insbesondere für größere Projekte.

Das bewährte Werkzeug für JavaScript-Linting ist [ESLint](https://eslint.org/). Es ist ein extrem leistungsstarkes und vielseitiges Werkzeug, kann aber schwierig zu konfigurieren sein, und Sie könnten leicht viele Stunden damit verbringen, eine Konfiguration _genau richtig_ hinzubekommen!

ESLint wird über npm installiert, sodass Sie, wie in Kapitel 2 besprochen, die Wahl haben, dieses Tool lokal oder global zu installieren, aber eine lokale Installation ist sehr zu empfehlen, da Sie in jedem Fall eine Konfigurationsdatei für jedes Projekt haben müssen. Denken Sie an den Befehl, um auszuführen:

```bash
npm install --save-dev eslint@9 @eslint/js@9 globals
```

> [!NOTE]
> Der `@9`-Spezifizierer installiert die neueste Version der Hauptversion v9. Halten Sie die Hauptversionen von `eslint` und `@eslint/js` synchron, damit die vordefinierten Konfigurationen kompatibel bleiben. Zum Zeitpunkt des Schreibens ist die neueste Version von ESLint v10. Allerdings dauert es normalerweise eine Weile, bis die Plugins aufgeholt haben, sodass wir an dieser Stelle bei v9 bleiben. Sobald Probleme wie die [ESLint v10-Kompatibilität von `eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react/issues/3977) gelöst sind, sind Beiträge willkommen, um unseren Artikel zu aktualisieren, um die neuesten Versionen zu verwenden.

Das Paket `@eslint/js` bietet vordefinierte ESLint-Konfigurationen, während das Paket `globals` eine Liste bekannter globaler Namen in jeder Umgebung bereitstellt. Wir werden sie später in der Konfiguration verwenden. Von Haus aus wird ESLint sich beschweren, dass es die Konfigurationsdatei nicht finden kann, wenn Sie es mit `npx eslint` ausführen:

```plain
Oops! Something went wrong! :(

ESLint: 9.39.4

ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

...
```

Hier ist ein minimales Beispiel, das funktioniert (in einer Datei namens `eslint.config.js` im Wurzelverzeichnis des Projekts):

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
- Weist ESLint an, die generierten Dateien zu ignorieren, wie wir es bereits für die anderen Tools getan haben
- Weist ESLint an, `.js`- und `.jsx`-Dateien beim Linten einzuschließen
- Weist ESLint über die Existenz der globalen Browser-Variablen hin (wird von Lint-Regeln wie `no-undef` zur Überprüfung nicht existenter Variablen verwendet).

Der ESLint-Parser versteht JSX nicht standardmäßig, und die empfohlenen Regeln unterstützen keine Reakt-spezifischen Semantiken. Daher werden wir einige weitere Konfigurationen hinzufügen, um JSX und React richtig zu unterstützen. Installieren Sie zuerst `eslint-plugin-react` und `eslint-plugin-react-hooks`, die Regeln für das Schreiben von korrektem und idiomatischem React bereitstellen:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

Dann aktualisieren Sie die ESLint-Konfigurationsdatei, um die empfohlene Konfiguration dieser Plugins einzuschließen, die sowohl die empfohlenen Regeln lädt als auch die Parser-Optionen für JSX setzt:

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

Es gibt eine vollständige [Liste der ESLint-Regeln](https://eslint.org/docs/latest/rules/), die Sie nach Belieben anpassen und konfigurieren können, und viele Unternehmen und Teams haben ihre [eigenen ESLint-Konfigurationen](https://www.npmjs.com/search?q=keywords:eslintconfig) veröffentlicht, die manchmal nützlich sein können, um Inspiration zu bekommen oder um eine auszuwählen, die Ihrer Meinung nach Ihren eigenen Standards entspricht. Eine Vorwarnung jedoch: Die ESLint-Konfiguration ist ein sehr tiefes Kaninchenloch!

Aus Gründen der Einfachheit werden wir in diesem Kapitel nicht alle Funktionen von ESLint erkunden, da diese Konfiguration für unser besonderes Projekt und seine Anforderungen funktioniert. Bedenken Sie jedoch, dass, wenn Sie eine Regel über das Aussehen Ihres Codes (oder dessen Gültigkeit) verfeinern und durchsetzen möchten, es sehr wahrscheinlich ist, dass es mit der richtigen ESLint-Konfiguration umgesetzt werden kann.

Wie bei anderen Tools ist die Code-Editor-Integrationsunterstützung für ESLint typischerweise gut und potenziell nützlicher, da es uns in Echtzeit Feedback geben kann, wenn Probleme auftauchen:

![ESLint-Fehlerintegration in VS Code dargestellt](eslint-error.png)

Das ist der Abschluss unserer Entwicklungsumgebung. Jetzt sind wir (fast) bereit, Programmcode zu schreiben.

## Build- und Transformations-Tools

### JavaScript-Transformation

Für dieses Projekt wird, wie oben erwähnt, React verwendet, was auch bedeutet, dass JSX im Quellcode verwendet wird. Das Projekt wird auch die neuesten JavaScript-Funktionen verwenden. Ein unmittelbares Problem ist, dass kein Browser native Unterstützung für JSX hat; es ist eine Zwischensprache, die in den Produktionscode in Sprachen kompiliert werden soll, die der Browser versteht. Wenn der Browser versucht, das Quell-JavaScript auszuführen, wird er sich sofort beschweren; das Projekt benötigt ein Build-Tool, um den Quellcode in etwas zu transformieren, das der Browser problemlos verarbeiten kann.

Es gibt eine Anzahl von Wahlmöglichkeiten für Transformationstools, und obwohl Babel ein besonders beliebtes ist, verwenden wir in Vite ein integriertes Plugin: `@vitejs/plugin-react`. Installieren Sie es mit dem folgenden Befehl:

```bash
npm install --save-dev @vitejs/plugin-react
```

Wir haben noch keine Vite-Konfiguration! Fügen Sie eine im `vite.config.js` im Wurzelverzeichnis des Projekts hinzu:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/npm-experiment/",
});
```

Lesen Sie die [Vite-Dokumentation](https://vite.dev/guide/) für weitere Informationen zur Konfiguration von Vite. Da unsere Site auf GitHub Pages bereitgestellt wird, wird sie unter `https://your-username.github.io/your-repo-name` gehostet, sodass Sie die `base`-Option entsprechend dem Namen Ihres GitHub-Repositories festlegen sollten - aber Sie können ihn immer noch später anpassen, wenn wir zur [Bereitstellung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Deployment) kommen.

### CSS-Transformation

Unser CSS kann auch eine Syntax verwenden, die von Browsern nicht verstanden wird. Zum Beispiel könnten Sie eine Syntax verwenden, die nur in den letzten paar Browserversionen implementiert wurde, was bedeutet, dass ältere Browser daran scheitern und einen kaputten Stil anzeigen. Wir können ein Werkzeug verwenden, um unser CSS in ein Format zu transformieren, das alle von uns angezielten Browser verstehen.

[PostCSS](https://postcss.org/) ist ein CSS-Postprozessor-Tool. Im Vergleich zu Build-Tools wie [Sass](https://sass-lang.com/) ist PostCSS darauf ausgelegt, _normales_ CSS zu schreiben (das heißt CSS, das möglicherweise eines Tages in Browsern verfügbar ist), während Sass eine eigene Sprache ist, die in CSS kompiliert wird. PostCSS steht näher am Web und hat eine viel geringere Lernkurve. [Vite unterstützt PostCSS standardmäßig](https://vite.dev/guide/features.html#postcss), sodass Sie nur [PostCSS konfigurieren](https://github.com/postcss/postcss#usage) müssen, wenn Sie Funktionen kompilieren möchten. Schauen Sie sich die [cssdb](https://preset-env.cssdb.org/features/) an, um zu sehen, welche Funktionen unterstützt werden.

Für unsere Zwecke demonstrieren wir eine andere CSS-Transformation: [CSS-Module](https://vite.dev/guide/features.html#css-modules). Es ist eine der Möglichkeiten, _CSS-Modularisierung_ zu erreichen. Denken Sie daran, dass alle CSS-Selektoren global sind, sodass, wenn Sie einen Klassennamen wie `.button` haben, alle Elemente mit dem Klassennamen `button` auf die gleiche Weise gestylt werden. Dies führt oft zu Namenskonflikten - stellen Sie sich alle Ihre JavaScript-Variablen vor, die im globalen Bereich definiert sind! CSS-Module lösen dieses Problem, indem die Klassennamen einzigartig für die Seiten sind, die sie verwenden. Um zu verstehen, wie es funktioniert, nachdem Sie den Quellcode heruntergeladen haben, können Sie überprüfen, wie wir die `.module.css`-Dateien verwenden und auch die [CSS-Module-Dokumentation](https://github.com/css-modules/css-modules) lesen.

Obwohl dieser Teil unserer Toolchain ziemlich schmerzhaft sein kann, müssen wir, weil wir ein Tool gewählt haben, das absichtlich versucht, Konfiguration und Komplexität zu reduzieren, während der Entwicklungsphase wirklich nichts weiter tun. Module werden korrekt importiert, verschachteltes CSS wird korrekt in "normales CSS" transformiert, und unsere Entwicklung wird nicht durch den Build-Prozess behindert.

Jetzt ist unsere Software bereit geschrieben zu werden!

## Schreiben des Quellcodes

Jetzt, da wir die vollständige Entwicklungs-Toolchain eingerichtet haben, ist es normalerweise an der Zeit, echten Code zu schreiben – der Teil, in den Sie tatsächlich die meiste Zeit investieren sollten. Für unseren Zweck jedoch werden wir lediglich etwas vorhandenen Quellcode kopieren und so tun, als hätten wir ihn geschrieben. Wir werden Ihnen nicht beibringen, wie sie funktionieren, da das nicht der Punkt dieses Kapitels ist. Sie sind lediglich hier, um sie auf die Werkzeuge laufen zu lassen, um Ihnen zu zeigen, wie _sie_ funktionieren.

Um die Code-Dateien zu erhalten, besuchen Sie <https://github.com/mdn/client-toolchain-example> und laden Sie den Inhalt dieses Repos auf Ihr lokales Laufwerk herunter und entpacken Sie ihn. Sie können das gesamte Projekt als Zip-Datei herunterladen, indem Sie _Clone or download_ > _Download ZIP_ auswählen.

![Das GitHub-Beispiel-Repo](github-repo.png)

Kopieren Sie nun den Inhalt des `src`-Verzeichnisses des Projekts und verwenden Sie ihn, um Ihr aktuelles `src`-Verzeichnis zu ersetzen. Sie brauchen sich um die anderen Dateien nicht zu kümmern.

Installieren Sie auch einige Abhängigkeiten, die der Quellcode verwendet:

```bash
npm install react react-dom @tanstack/react-query
```

Wir haben unsere Projektdateien an Ort und Stelle. Das ist alles, was wir jetzt tun müssen!

## Ausführen der Transformation

Um mit unserem Projekt zu arbeiten, starten wir den Vite-Server in der Befehlszeile. Im Standardmodus wird er Änderungen in Ihrem Code beobachten und den Server aktualisieren. Das ist schön, denn wir müssen nicht zwischen dem Code und der Befehlszeile hin- und herflitzen.

1. Um Vite im Hintergrund zu starten, gehen Sie zu Ihrem Terminal und führen Sie den folgenden Befehl aus (verwenden Sie das benutzerdefinierte Skript, das wir zuvor definiert haben):

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

2. Gehen Sie zu dieser URL in Ihrem Browser und Sie werden die Beispiel-App laufen sehen!

Nun können wir einige Änderungen vornehmen und ihre Effekte live sehen.

1. Laden Sie die Datei `src/App.jsx` in Ihrem bevorzugten Texteditor.
2. Ersetzen Sie alle Vorkommen von `mdn/content` durch Ihr bevorzugtes GitHub-Repo, z.B. `facebook/react`.
3. Speichern Sie die Datei, gehen Sie dann sofort zurück zur App, die in Ihrem Browser läuft. Ihnen wird auffallen, dass der Browser automatisch aktualisiert wurde und die Grafiken sich geändert haben!

Sie können auch versuchen, ESLint und Prettier zu verwenden – versuchen Sie, absichtlich viele Leerzeichen aus einer Ihrer Dateien zu entfernen und Prettier darauf auszuführen, um sie aufzuräumen, oder führen Sie einen Syntaxfehler in eine Ihrer JavaScript-Dateien ein und sehen Sie, welche Fehler Ihnen ESLint gibt, wenn Sie den `eslint`-Befehl ausführen oder in Ihrem Editor.

## Zusammenfassung

Wir sind in diesem Kapitel weit gekommen und haben eine ziemlich schöne lokale Entwicklungsumgebung aufgebaut, um eine Anwendung zu erstellen.

Zu diesem Punkt der Websoftware-Entwicklung würden Sie normalerweise Ihren Code für die Software erstellen, die Sie entwickeln möchten. Da es in diesem Modul jedoch darum geht, die Tools rund um die Webentwicklung zu lernen, nicht den Webentwicklungscode selbst, werden wir Ihnen keinen tatsächlichen Code beibringen – diese Informationen finden Sie im Rest von MDN!

Stattdessen haben wir Ihnen ein Beispielprojekt geschrieben, bei dem Sie Ihre Tools verwenden können. Wir empfehlen Ihnen, den Rest des Kapitels mit unserem Beispielcode durchzuarbeiten und dann zu versuchen, den Inhalt des `src`-Verzeichnisses gegen Ihr eigenes Projekt auszutauschen und dieses stattdessen auf GitHub Pages zu veröffentlichen! Und tatsächlich wird die Bereitstellung auf GitHub Pages das Endziel des nächsten Kapitels sein!

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Package_management","Learn_web_development/Extensions/Client-side_tools/Deployment", "Learn_web_development/Extensions/Client-side_tools")}}
