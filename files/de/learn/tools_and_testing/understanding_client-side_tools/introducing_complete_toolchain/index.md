---
title: Einführung in eine komplette Toolchain
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In den letzten Artikeln dieser Serie werden wir Ihr Wissen über Werkzeuge festigen, indem wir Sie durch den Prozess des Aufbaus einer Beispiel-Toolchain führen. Wir beginnen mit dem Einrichten einer sinnvollen Entwicklungsumgebung und dem Implementieren von Transformationstools bis hin zur tatsächlichen Bereitstellung Ihrer App. In diesem Artikel stellen wir die Fallstudie vor, richten unsere Entwicklungsumgebung ein und konfigurieren unsere Code-Transformationstools.

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
        Um das, was wir bisher gelernt haben, zu festigen, indem wir eine vollständige
        Toolchain-Fallstudie durcharbeiten.
      </td>
    </tr>
  </tbody>
</table>

Es gibt wirklich unbegrenzte Kombinationen von Tools und Anwendungsmöglichkeiten. Was Sie in diesem und im nächsten Artikel sehen, ist nur _eine_ Möglichkeit, wie die vorgestellten Tools in einem Projekt verwendet werden können.

> [!NOTE]
> Es ist auch erwähnenswert, dass nicht alle dieser Tools über die Befehlszeile ausgeführt werden müssen. Viele der heutigen Code-Editoren (wie VS Code) bieten Integrationsunterstützung für _viele_ Tools über Plugins.

## Einführung in unsere Fallstudie

Die Toolchain, die wir in diesem Artikel erstellen, wird verwendet, um eine Mini-Site zu bauen und bereitzustellen, die Daten über das [mdn/content](https://github.com/mdn/content) Repository anzeigt, wobei die Daten aus der [GitHub API](https://docs.github.com/en/rest/metrics/community) stammen.

## In unserer Toolchain verwendete Werkzeuge

In diesem Artikel verwenden wir die folgenden Werkzeuge und Features:

- [JSX](https://react.dev/learn/writing-markup-with-jsx), eine mit [React](https://react.dev/) verbundene Syntaxerweiterung, die es ermöglicht, Komponentenstrukturen direkt in JavaScript zu definieren. Sie müssen React nicht kennen, um diesem Tutorial zu folgen, aber wir haben dies aufgenommen, um Ihnen eine Vorstellung davon zu geben, wie eine nicht-native Websprache in eine Toolchain integriert werden könnte.
- Die neuesten eingebauten JavaScript-Features (zum Zeitpunkt des Schreibens), wie z. B. [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
- Nützliche Entwicklerwerkzeuge wie [Prettier](https://prettier.io/) zum Formatieren und [ESLint](https://eslint.org/) zum Linting.
- [PostCSS](https://postcss.org/), um CSS-Nesting-Fähigkeiten bereitzustellen.
- [Vite](https://vitejs.dev/), um unseren Code zu bauen und zu minimieren und um eine Menge Konfigurationsdateiinhalte automatisch für uns zu schreiben.
- [GitHub](/de/docs/Learn/Tools_and_testing/GitHub), um unsere Quellcodeverwaltung zu steuern und letztendlich unsere Site bereitzustellen (mit GitHub Pages).

Möglicherweise sind Sie mit einigen der oben genannten Features und Werkzeuge oder deren Funktionen nicht vertraut, aber keine Panik — wir erklären jeden Teil im Verlauf dieses Artikels.

## Toolchains und ihre inhärente Komplexität

Wie bei jeder Kette gilt: Je mehr Glieder Sie in Ihrer Toolchain haben, desto komplexer und potenziell anfälliger ist sie — möglicherweise ist sie dann komplizierter zu konfigurieren und leichter zu unterbrechen. Im Gegensatz dazu, je weniger Glieder, desto widerstandsfähiger ist die Toolchain wahrscheinlich.

Alle Webprojekte sind unterschiedlich und Sie müssen berücksichtigen, welche Teile Ihrer Toolchain notwendig sind, und jeden Teil sorgfältig betrachten.

Die kleinste Toolchain ist eine, die überhaupt keine Glieder hat. Sie würden den HTML-Code manuell schreiben, "Vanilla JavaScript" verwenden (d. h. keine Frameworks oder Zwischensprachen), und den gesamten Inhalt manuell auf einen Server hochladen.

Jedoch werden kompliziertere Software-Anforderungen wahrscheinlich von der Verwendung von Tools profitieren, um den Entwicklungsprozess zu vereinfachen. Zusätzlich sollten Sie Tests einfügen, bevor Sie auf Ihrem Produktionsserver bereitstellen, um sicherzustellen, dass Ihre Software wie beabsichtigt funktioniert — das klingt bereits nach einer notwendigen Toolchain.

Für unser Beispielprojekt werden wir eine speziell für unsere Softwareentwicklung entworfene Toolchain verwenden, die die technischen Entscheidungen unterstützt, die während der Software-Designphase getroffen wurden. Wir werden allerdings jegliches überflüssige Werkzeug vermeiden, mit dem Ziel, die Komplexität auf ein Minimum zu reduzieren.

## Überprüfung der Voraussetzungen

Sie sollten die meisten der Softwares bereits haben, wenn Sie den vorherigen Kapiteln gefolgt sind. Hier ist, was Sie haben sollten, bevor Sie zu den eigentlichen Einrichtungsschritten übergehen. Diese müssen nur einmal durchgeführt werden und müssen für zukünftige Projekte nicht noch einmal wiederholt werden.

### Erstellen eines GitHub-Kontos

Neben den Werkzeugen, die wir installieren werden und die zu unserer Toolchain beitragen, müssen Sie ein Konto bei GitHub erstellen, wenn Sie das Tutorial vollständig abschließen möchten. Sie können jedoch trotzdem den Teil zur lokalen Entwicklung ohne ein Konto durchführen. Wie bereits erwähnt, ist GitHub ein Quellcode-Repository-Dienst, der Community-Features wie Problemverfolgung, Nachverfolgen von Projektveröffentlichungen und vieles mehr hinzufügt. Im nächsten Kapitel werden wir in ein GitHub-Code-Repository pushen, was einen Kaskadeneffekt auslösen wird, der (so sollte es sein) alle Software auf einen Heimplatz im Web bereitstellt.

Registrieren Sie sich für [GitHub](https://github.com/), indem Sie auf den Link _Sign Up_ auf der Startseite klicken, wenn Sie noch kein Konto haben, und folgen Sie den Anweisungen.

### Installation von git

Wir werden eine weitere Software, git, installieren, um bei der Versionskontrolle zu helfen.

Möglicherweise haben Sie schon von "git" gehört. [Git](https://git-scm.com/) ist derzeit das beliebteste Tool zur Quellcode-Versionskontrolle für Entwickler — Versionskontrolle bietet viele Vorteile, wie zum Beispiel eine Möglichkeit, Ihre Arbeit an einem entfernten Ort zu sichern, und einen Mechanismus, um in einem Team an demselben Projekt zu arbeiten, ohne Angst zu haben, den Code anderer zu überschreiben.

Es mag für einige offensichtlich sein, aber es muss wiederholt werden: Git ist nicht dasselbe wie GitHub. Git ist das Werkzeug zur Versionskontrolle, während [GitHub](https://github.com/) ein Online-Shop für git-Repositories ist (plus eine Reihe nützlicher Werkzeuge für die Arbeit mit diesen). Beachten Sie, dass wir in diesem Kapitel GitHub verwenden, es jedoch mehrere Alternativen gibt, darunter [GitLab](https://about.gitlab.com/) und [Bitbucket](https://www.atlassian.com/software/bitbucket). Außerdem könnten Sie Ihre eigenen git-Repositories hosten.

Die Verwendung von Versionskontrolle in Ihren Projekten und die Integration in die Toolchain helfen bei der Verwaltung der Entwicklung Ihres Codes. Es bietet eine Möglichkeit, Arbeitsblöcke "festzuschreiben", während Sie fortschreiten, zusammen mit Kommentaren wie "X neues Feature implementiert" oder "Bug Z jetzt behoben durch Y Änderungen".

Die Versionskontrolle kann Ihnen auch erlauben, Ihr Projekt zu _verzweigen_, eine separate Version zu erstellen und neue Funktionalität auszuprobieren, ohne dass diese Änderungen Ihren Originalcode beeinflussen.

Schließlich kann sie Ihnen helfen, Änderungen rückgängig zu machen oder Ihren Code auf einen Zeitpunkt "zurückzusetzen, als er funktionierte", wenn irgendwo ein Fehler eingeführt wurde und Sie Schwierigkeiten haben, ihn zu beheben — etwas, das alle Entwickler hin und wieder tun müssen!

Git kann [heruntergeladen und über die git-scm-Website installiert werden](https://git-scm.com/downloads) — laden Sie das für Ihr System relevante Installationsprogramm herunter, führen Sie es aus und folgen Sie den Anweisungen auf dem Bildschirm. Das reicht vorerst.

Sie können auf verschiedene Weise mit git interagieren, von der Verwendung der Befehlszeile zum Ausgeben von Befehlen bis hin zur Verwendung einer [git GUI-App](https://git-scm.com/downloads/guis), um dieselben Befehle durch Drücken von Buttons auszuführen, oder sogar direkt in Ihrem Code-Editor, wie im Visual Studio Code-Beispiel unten zu sehen:

![Git-Integration in VS Code gezeigt](vscode-git.png)

### Bestehendes Projekt

Wir werden auf dem Projekt aufbauen, das wir im vorherigen Kapitel begonnen haben. Stellen Sie also sicher, dass Sie die Anweisungen unter [Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) befolgen, um das Projekt zuerst einzurichten. Kurz gesagt, hier ist, was Sie haben sollten:

- Node.js und npm installiert.
- Ein neues Projekt namens `npm-experiment` (oder ein anderer Name).
- Vite als Entwicklungsabhängigkeit installiert.
- Das `plotly.js-dist-min` Paket als Abhängigkeit installiert.
- Einige angepasste Skripte in package.json definiert.
- Die Dateien `index.html` und `src/main.jsx` erstellt.

Wie wir in [Kapitel 1](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) besprochen haben, wird die Toolchain in die folgenden Phasen gegliedert sein:

- **Entwicklungsumgebung**: Die Tools, die am grundlegendsten für das Ausführen Ihres Codes sind. Dieser Teil ist im vorherigen Kapitel bereits eingerichtet worden.
- **Sicherheitsnetz**: Gestaltung des Softwareentwicklungserlebnisses stabiler und effizienter. Wir könnten dies auch als unsere Entwicklungsumgebung bezeichnen.
- **Transformation**: Tools, die es uns ermöglichen, die neuesten Features einer Sprache (z. B. JavaScript) oder eine ganz andere Sprache (z. B. JSX oder TypeScript) in unserem Entwicklungsprozess zu verwenden und unseren Code dann so zu transformieren, dass die Produktionsversion weiterhin in einer Vielzahl von Browsern, sowohl modernen als auch älteren, läuft.
- **Nach der Entwicklung**: Tools, die ins Spiel kommen, nachdem Sie mit dem Kern der Entwicklung fertig sind, um sicherzustellen, dass Ihre Software es ins Web schafft und weiterhin läuft. In dieser Fallstudie werden wir uns damit beschäftigen, Ihrem Code Tests hinzuzufügen und Ihre App mit GitHub Pages bereitzustellen, sodass sie für das gesamte Web verfügbar ist.

Beginnen wir damit, diese zu bearbeiten, startend mit unserer Entwicklungsumgebung. Wir werden die gleichen Schritte befolgen, wie bei der Einrichtung eines realen Projekts, sodass Sie, wenn Sie in der Zukunft ein neues Projekt einrichten, dieses Kapitel als Referenz heranziehen und die Schritte erneut befolgen können.

## Erstellen einer Entwicklungsumgebung

Dieser Teil der Toolchain wird manchmal als Verzögerung der eigentlichen Arbeit angesehen, und es kann sehr leicht sein, in ein "Kaninch
