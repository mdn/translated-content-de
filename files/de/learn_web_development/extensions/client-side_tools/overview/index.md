---
title: Überblick über clientseitige Tools
short-title: Overview
slug: Learn_web_development/Extensions/Client-side_tools/Overview
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

{{NextMenu("Learn_web_development/Extensions/Client-side_tools/Package_management", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel geben wir einen Überblick über moderne Tools für die Webentwicklung: welche Arten von Tools es gibt, wo sie Ihnen im Entwicklungszyklus einer Web-App begegnen und wie Sie Hilfe zu einzelnen Tools finden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Arten clientseitiger Tools es gibt und wie Sie Tools
        finden und Hilfe zu ihnen erhalten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über moderne Tools

Die Entwicklung von Software für das Web ist im Laufe der Zeit anspruchsvoller geworden. Zwar ist es nach wie vor völlig sinnvoll, HTML, CSS und JavaScript „von Hand“ zu schreiben, doch stehen Entwicklerinnen und Entwicklern inzwischen zahlreiche Tools zur Verfügung, mit denen sie Websites oder Apps schneller erstellen können.

Einige Tools sind seit Langem etabliert und in der Entwicklergemeinschaft weithin bekannt. Gleichzeitig werden täglich neue Tools entwickelt und veröffentlicht, die bestimmte Probleme lösen sollen. Vielleicht schreiben Sie sogar selbst ein Programm, das Ihnen bei der Entwicklung hilft, weil vorhandene Tools ein bestimmtes Problem offenbar noch nicht lösen.

Die schiere Anzahl an Tools, die in einem einzigen Projekt zum Einsatz kommen können, kann überwältigend sein. Schon eine einzige Konfigurationsdatei für ein Tool wie [webpack](https://webpack.js.org/) kann Hunderte Zeilen umfassen. Viele davon wirken wie Zaubersprüche, die zwar ihren Zweck erfüllen, aber nur von besonders erfahrenen Fachleuten vollständig verstanden werden!

Selbst erfahrene Webentwicklerinnen und Webentwickler bleiben gelegentlich bei einem Tool-Problem stecken. Es ist möglich, Stunden damit zu verbringen, eine Tool-Pipeline zum Laufen zu bringen, bevor man auch nur eine Zeile Anwendungscode geschrieben hat. Falls Sie damit schon einmal Schwierigkeiten hatten, machen Sie sich keine Sorgen – Sie sind nicht allein.

In diesen Artikeln beantworten wir nicht jede Frage zu Tools für die Webentwicklung. Wir vermitteln Ihnen aber ein grundlegendes Verständnis, auf dem Sie aufbauen können. Wie bei jedem komplexen Thema ist es sinnvoll, klein anzufangen und sich schrittweise zu fortgeschritteneren Anwendungen vorzuarbeiten.

## Das moderne Tool-Ökosystem

Das heutige Ökosystem von Entwicklungstools ist riesig. Deshalb ist es hilfreich, zunächst einen groben Überblick über die wichtigsten Probleme zu gewinnen, die diese Tools lösen. Wenn Sie in Ihrer bevorzugten Suchmaschine nach „front-end developer tools“ suchen, erhalten Sie eine breite Palette von Ergebnissen – von Texteditoren und Browsern bis hin zu Stiften, mit denen Sie Notizen machen können.

Die Wahl Ihres Code-Editors ist zwar ebenfalls eine Entscheidung für ein Tool, doch diese Artikelreihe geht darüber hinaus. Sie konzentriert sich auf Entwicklungstools, mit denen Sie Webcode effizienter erstellen können. Wir empfehlen einige konkrete Tools und zeigen Ihnen in den folgenden Tutorials, wie Sie sie verwenden. Diese Tools sind zum Zeitpunkt der Erstellung beliebt und verbreitet. Das schließt andere Tools nicht aus, wenn Sie deren jeweilige Vorteile kennen.

Auf einer übergeordneten Ebene lassen sich clientseitige Tools in vier Kategorien einteilen, die unterschiedliche Probleme lösen:

- **Umgebung** – Tools, mit denen Sie Ihre Entwicklungsumgebung einrichten, beispielsweise indem Sie andere Tools installieren und ausführen.
- **Sicherheitsnetz** – Tools, die Sie beim Entwickeln Ihres Codes unterstützen.
- **Transformation** – Tools, die Code auf irgendeine Weise umwandeln, etwa eine Zwischensprache in JavaScript, das ein Browser verstehen kann.
- **Nach der Entwicklung** – Tools, die nach dem Schreiben des Codes nützlich sind, beispielsweise für Tests und die Bereitstellung.

Sehen wir uns die einzelnen Kategorien genauer an.

### Umgebung

Editor, Betriebssystem und Browser gehören zur Entwicklungsumgebung. Wir gehen davon aus, dass Sie bereits die Optionen gewählt haben, mit denen Sie am besten zurechtkommen. Bevor Sie weitere Tools installieren und ausführen, müssen Sie allerdings noch zwei Entscheidungen treffen:

- **Wo die Tools ausgeführt werden sollen.** Die meisten lokal ausgeführten Tools sind in JavaScript geschrieben. Sie benötigen daher auf Ihrem Computer einen JavaScript-Interpreter, den Sie über die Kommandozeile aufrufen können – nicht den Interpreter in Ihrem Browser. [Node.js](https://nodejs.org/) ist nach wie vor der Industriestandard und wird in diesem Modul verwendet. [Bun](https://bun.com/) ist als direkt einsetzbarer Ersatz für Node.js gedacht und für seine Geschwindigkeit und leistungsfähigen APIs bekannt.
- **Wie Sie die Tools installieren**, also welchen _Paketmanager_ Sie verwenden. Node stellt standardmäßig [npm](https://www.npmjs.com/) bereit, das wir hier verwenden werden. [Yarn](https://yarnpkg.com/) und [pnpm](https://pnpm.io/) sind weitere beliebte Optionen, die jeweils eigene Vorteile etwa bei Geschwindigkeit oder Projektverwaltung bieten.

### Sicherheitsnetz

Diese Tools helfen Ihnen dabei, den Code, den Sie schreiben, ein wenig zu verbessern.

Dieser Teil Ihrer Tool-Ausstattung sollte zu Ihrer eigenen Entwicklungsumgebung passen. Allerdings stellen Unternehmen häufig Richtlinien oder vorkonfigurierte Einstellungen zur Installation bereit, damit alle Entwicklerinnen und Entwickler nach denselben Verfahren arbeiten.

Dazu gehört alles, was Ihnen die Entwicklung von stabilem und zuverlässigem Code erleichtert. Tools dieser Kategorie sollten Ihnen außerdem helfen, Fehler zu vermeiden oder automatisch zu korrigieren, ohne dass Sie Ihren Code jedes Mal von Grund auf neu erstellen müssen.

Im Folgenden finden Sie einige Arten solcher Tools, die häufig verwendet werden.

#### Linters

**Linters** prüfen Ihren Code und zeigen Ihnen, welche Fehler vorhanden sind, um welche Fehlertypen es sich handelt und in welchen Codezeilen sie auftreten. Häufig lassen sie sich so konfigurieren, dass sie nicht nur Fehler melden, sondern auch Verstöße gegen einen vom Team verwendeten Styleguide. Dazu gehören beispielsweise eine falsche Anzahl von Leerzeichen bei der Einrückung oder die Verwendung von [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) anstelle gewöhnlicher String-Literale.

[ESLint](https://eslint.org/) ist der Industriestandard unter den JavaScript-Linters. Das vielseitig konfigurierbare Tool hilft dabei, potenzielle Syntaxfehler aufzuspüren und bewährte Vorgehensweisen im gesamten Code zu fördern. Einige Unternehmen und Projekte haben auch [ihre ESLint-Konfigurationen veröffentlicht](https://www.npmjs.com/search?q=keywords:eslintconfig).

Auch für andere Sprachen gibt es Linting-Tools, beispielsweise [stylelint](https://stylelint.io/).

#### Versionsverwaltung

Die **Versionsverwaltung**, auch als **Version Control System** (VCS) oder **Source Code Control** bezeichnet, ist unerlässlich, um Arbeit zu sichern und im Team zusammenzuarbeiten. Bei einem typischen VCS haben Sie eine lokale Version des Codes, an der Sie Änderungen vornehmen. Diese Änderungen „pushen“ Sie anschließend in eine zentrale Version des Codes in einem entfernten Repository, das auf einem Server gespeichert ist. In der Regel lässt sich steuern und koordinieren, welche Änderungen wann an dieser zentralen Kopie vorgenommen werden, damit sich die Mitglieder eines Entwicklungsteams nicht ständig gegenseitig ihre Arbeit überschreiben.

[Git](https://git-scm.com/) ist das Versionsverwaltungssystem, das heutzutage die meisten Menschen verwenden. Es wird hauptsächlich über die Kommandozeile bedient, ist aber auch über benutzerfreundliche grafische Oberflächen zugänglich. Wenn Ihr Code in einem Git-Repository liegt, können Sie ihn auf einen eigenen Server übertragen oder einen gehosteten Versionsverwaltungsdienst wie [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product) nutzen.

In diesem Modul verwenden wir GitHub. Weitere Informationen finden Sie unter [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

#### Code-Formatierer

Code-Formatierer sind mit Linters verwandt. Statt auf Fehler in Ihrem Code hinzuweisen, sorgen sie jedoch in erster Linie dafür, dass der Code gemäß Ihren Stilregeln formatiert ist. Idealerweise korrigieren sie gefundene Formatierungsfehler automatisch.

[Prettier](https://prettier.io/) ist ein sehr beliebter Code-Formatierer, den wir später in diesem Modul verwenden werden.

#### Typprüfer

Typprüfer helfen Ihnen, zuverlässigeren Code zu schreiben. Sie überprüfen, ob Ihr Code an den jeweiligen Stellen die richtigen Datentypen verwendet. Dadurch lassen sich häufige Fehler vermeiden, etwa der Zugriff auf nicht vorhandene Eigenschaften oder unerwartete `undefined`-Werte.

[TypeScript](https://www.typescriptlang.org/) ist der De-facto-Standard für die Typprüfung von JavaScript. Es bietet eine eigene Syntax für Typannotationen und ist in gewisser Weise eine eigenständige Sprache. Deshalb behandeln wir es in diesem Modul nicht.

### Transformation

In dieser Phase des Entwicklungszyklus Ihrer Web-App können Sie typischerweise entweder „Code der Zukunft“ schreiben – etwa mit den neuesten CSS- oder JavaScript-Funktionen, die Browser möglicherweise noch nicht nativ unterstützen – oder eine ganz andere Sprache wie TypeScript verwenden. Transformationstools erzeugen daraus browserkompatiblen Code für den Produktiveinsatz.

Webentwicklung wird im Allgemeinen mit drei Sprachen verbunden: [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting). Für alle drei gibt es Transformationstools. Die Transformation bietet unter anderem drei wesentliche Vorteile:

1. Sie können Code mit den neuesten Sprachfunktionen schreiben und ihn in Code umwandeln lassen, der auf gängigen Geräten funktioniert. So möchten Sie vielleicht aktuelle JavaScript-Funktionen verwenden, während der fertige Produktivcode auch in älteren Browsern laufen soll, die diese Funktionen nicht unterstützen. Gute Beispiele sind:
   - [Babel](https://babeljs.io/): Ein JavaScript-Compiler, mit dem Entwicklerinnen und Entwickler moderne JavaScript-Funktionen verwenden können. Babel wandelt den Code anschließend in älteres JavaScript um, das mehr Browser verstehen. Sie können auch [Plugins für Babel schreiben und veröffentlichen](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Erfüllt eine ähnliche Aufgabe wie Babel, allerdings für moderne CSS-Funktionen. Wenn sich ein gewünschter CSS-Effekt nicht mit älteren CSS-Funktionen umsetzen lässt, installiert PostCSS ein JavaScript-Polyfill, das den Effekt nachbildet.

2. Sie können Ihren Code in einer völlig anderen Sprache schreiben und ihn in eine webkompatible Sprache umwandeln lassen. Beispiele dafür sind:
   - [Sass/SCSS](https://sass-lang.com/): Diese CSS-Erweiterung ermöglicht die Verwendung von Variablen, verschachtelten Regeln, Mixins, Funktionen und vielen weiteren Möglichkeiten. Einige davon sind auch in nativem CSS verfügbar, etwa Variablen, andere nicht.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript ist eine Obermenge von JavaScript mit zahlreichen zusätzlichen Funktionen. Beim Erstellen des Produktivcodes wandelt der TypeScript-Compiler TypeScript-Code in JavaScript um.
   - Frameworks wie [React](https://react.dev/), [Ember](https://emberjs.com/) und [Vue](https://vuejs.org/): Frameworks stellen viele Funktionen bereit und ermöglichen deren Nutzung über eine eigene Syntax, die auf gewöhnlichem JavaScript aufbaut. Im Hintergrund interpretiert der JavaScript-Code des Frameworks diese Syntax und rendert daraus die fertige Web-App.

3. Optimierung. Dafür sorgen _Bundlers_: Tools, die Ihren Code für den Produktiveinsatz vorbereiten. Mithilfe von „{{Glossary("Tree_shaking", "Tree-Shaking")}}“ stellen sie beispielsweise sicher, dass nur tatsächlich verwendete Teile Ihrer Codebibliotheken im fertigen Produktivcode landen. Durch „{{Glossary("Minification", "Minifizierung")}}“ entfernen sie Leerraum aus dem Produktivcode, damit er vor dem Hochladen auf einen Server möglichst klein ist. Beispiele dafür sind:
   - [webpack](https://webpack.js.org/) war lange Zeit der beliebteste Bundler. Er bietet sehr viele Plugins und ein leistungsfähiges Konfigurationssystem. Allerdings gilt seine Einrichtung auch als recht komplex, und im Vergleich zu moderneren Alternativen ist er langsam.
   - [Vite](https://vite.dev/) ist ein moderneres Build-Tool, das wegen seiner Geschwindigkeit, Einfachheit und seines Funktionsumfangs beliebt ist.

### Nach der Entwicklung

Tools für die Zeit nach der Entwicklung sorgen dafür, dass Ihre Software im Web bereitgestellt wird und weiterhin funktioniert. Dazu gehören Bereitstellungsprozesse, Testframeworks, Audit-Tools und mehr.

Mit dieser Phase des Entwicklungsprozesses möchten Sie möglichst wenig aktiv zu tun haben: Sobald alles konfiguriert ist, sollte es weitgehend automatisch ablaufen und sich nur melden, wenn etwas schiefgeht.

#### Test-Tools

Diese Tools führen im Allgemeinen automatisch Tests für Ihren Code aus, um vor dem nächsten Schritt zu prüfen, ob er korrekt ist – beispielsweise bevor Sie Änderungen in ein GitHub-Repository pushen. Dazu kann Linting gehören, aber auch anspruchsvollere Verfahren wie Unit-Tests. Bei diesen führen Sie Teile Ihres Codes aus und prüfen, ob sie sich wie erwartet verhalten.

- Frameworks zum Schreiben von Tests sind beispielsweise [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) und [Jasmine](https://jasmine.github.io/).
- Zu den Systemen für die automatische Testausführung und Benachrichtigung gehören [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/) und [weitere](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Bereitstellungstools

Mit Bereitstellungssystemen können Sie Ihre Website veröffentlichen. Sie stehen sowohl für statische als auch für dynamische Websites zur Verfügung und arbeiten häufig mit Testsystemen zusammen. Eine typische Toolchain wartet beispielsweise darauf, dass Sie Änderungen in ein entferntes Repository pushen. Anschließend führt sie Tests aus und stellt Ihre App automatisch auf einer produktiven Website bereit, wenn die Tests erfolgreich sind.

[GitHub Pages](https://pages.github.com/) ist direkt in GitHub integriert und für alle öffentlichen Repositories kostenlos. Auch Dienste wie [Netlify](https://www.netlify.com/) und [Vercel](https://vercel.com/) sind sehr beliebt. Sie bieten großzügige kostenlose Kontingente, unkomplizierte Bereitstellungsabläufe und eine GitHub-Integration.

#### Weitere Tools

Für die Zeit nach der Entwicklung stehen noch viele andere Arten von Tools zur Verfügung: etwa [Code Climate](https://codeclimate.com/) zum Erfassen von Kennzahlen zur Codequalität, die [Webhint-Browsererweiterung](https://webhint.io/docs/user-guide/extensions/extension-browser/) für Laufzeitanalysen zur browserübergreifenden Kompatibilität und weitere Prüfungen, [GitHub-Bots](https://probot.github.io/) für erweiterte GitHub-Funktionen und [Updown](https://updown.io/) zur Überwachung der Verfügbarkeit Ihrer App – und viele mehr!

### Einige Überlegungen zu Tool-Kategorien

Die verschiedenen Tool-Kategorien kommen im Entwicklungszyklus in einer gewissen Reihenfolge zum Einsatz. Für die Veröffentlichung einer Website _müssen_ Sie aber keineswegs alle davon verwenden. Tatsächlich brauchen Sie keines dieser Tools zwingend. Wenn Sie einige davon in Ihren Arbeitsablauf aufnehmen, wird das jedoch Ihre Entwicklungserfahrung verbessern und wahrscheinlich auch die Gesamtqualität Ihres Codes erhöhen.

Bei neuen Entwicklungstools dauert es oft eine Weile, bis ihre Komplexität beherrschbar wird. Eines der bekanntesten Tools, webpack, gilt als übermäßig kompliziert. Bei seiner letzten Hauptversion wurde jedoch viel dafür getan, die häufigsten Anwendungsfälle zu vereinfachen und die erforderliche Konfiguration auf ein absolutes Minimum zu reduzieren.

Eine Patentlösung, die den erfolgreichen Einsatz von Tools garantiert, gibt es nicht. Mit zunehmender Erfahrung werden Sie jedoch Arbeitsabläufe finden, die _für Sie_ oder für Ihr Team und dessen Projekte funktionieren. Sobald die Schwierigkeiten im Ablauf beseitigt sind, sollten Sie sich um Ihre Toolchain kaum noch kümmern müssen – sie _sollte_ einfach funktionieren.

## Ein Tool auswählen und Hilfe dazu finden

Die meisten Tools werden unabhängig voneinander entwickelt und veröffentlicht. Hilfe ist daher zwar fast immer verfügbar, aber nie am selben Ort oder im selben Format. Das kann es schwierig machen, Unterstützung bei der Verwendung eines Tools zu finden oder überhaupt das richtige Tool auszuwählen. Das Wissen darüber, welche Tools sich am besten eignen, wird innerhalb der Web-Community oft informell weitergegeben. Wenn Sie noch keinen Zugang zu dieser Community haben, ist es schwer herauszufinden, welche Tools Sie wählen sollten. Das ist einer der Gründe für diese Artikelreihe: Sie soll Ihnen einen ersten, sonst schwer zu findenden Einstieg bieten.

Wahrscheinlich hilft Ihnen eine Kombination aus Folgendem:

- Erfahrene Lehrkräfte, Mentorinnen und Mentoren, Mitlernende oder Kolleginnen und Kollegen, die ähnliche Probleme bereits gelöst haben und Ihnen Ratschläge geben können.
- Eine geeignete Anlaufstelle für die gezielte Suche. Allgemeine Websuchen nach Frontend-Entwicklungstools sind meist wenig hilfreich, solange Sie den Namen des gesuchten Tools nicht kennen.
  - Wenn Sie beispielsweise den Paketmanager npm verwenden, um Ihre Abhängigkeiten zu verwalten, können Sie auf der [npm-Startseite](https://www.npmjs.com/) nach der gewünschten Art von Tool suchen. Suchen Sie etwa nach „date“, wenn Sie ein Tool zur Datumsformatierung benötigen, oder nach „formatter“, wenn Sie einen allgemeinen Code-Formatierer suchen. Achten Sie auf die Bewertungen für Beliebtheit, Qualität und Pflege sowie darauf, wann das Paket zuletzt aktualisiert wurde. Öffnen Sie auch die einzelnen Tool-Seiten: Dort sehen Sie, wie viele Downloads ein Paket pro Monat hat und ob die Dokumentation Ihnen hilft zu beurteilen, ob es Ihre Anforderungen erfüllt. Gemessen an diesen Kriterien erscheint die [Bibliothek date-fns](https://www.npmjs.com/package/date-fns) als gute Wahl für die Datumsformatierung. Im dritten Kapitel dieses Moduls sehen Sie dieses Tool in Aktion und erfahren mehr über Paketmanager im Allgemeinen.
  - Wenn Sie nach einem Plugin suchen, das ein Tool in Ihren Code-Editor integriert, sehen Sie auf der Seite für Plugins oder Erweiterungen des Editors nach – beispielsweise bei den [VS Code-Erweiterungen](https://marketplace.visualstudio.com/vscode). Schauen Sie sich die hervorgehobenen Erweiterungen auf der Startseite an und suchen Sie nach der gewünschten Art von Erweiterung oder nach dem Namen des Tools, etwa „ESLint“ auf der Seite für VS Code-Erweiterungen. Bei den Suchergebnissen können Angaben wie die Anzahl der Sterne oder Downloads Hinweise auf die Qualität einer Erweiterung geben.

- Entwicklungsforen, in denen Sie Fragen zur Tool-Auswahl stellen können, beispielsweise [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250) oder [Stack Overflow](https://stackoverflow.com/).

Wenn Sie sich für ein Tool entschieden haben, sollte Ihre erste Anlaufstelle die Projekt-Homepage sein. Das kann eine vollständige Website oder auch nur eine README-Datei in einem Code-Repository sein. Die [Dokumentation von date-fns](https://date-fns.org/docs/Getting-Started) beispielsweise ist gut, vollständig und leicht verständlich. Manche Dokumentationen sind allerdings sehr technisch oder akademisch und passen möglicherweise nicht zu Ihren Lernbedürfnissen.

In diesem Fall können Sie nach Tutorials suchen, die den Einstieg in bestimmte Tool-Arten erklären. Gute Ausgangspunkte sind Websites wie [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/) und [Smashing Magazine](https://www.smashingmagazine.com/), die sich an Menschen in der Webentwicklung richten.

Auf der Suche nach den passenden Tools werden Sie wahrscheinlich mehrere ausprobieren. So finden Sie heraus, ob sie für Sie verständlich sind, gut unterstützt werden und Ihre Anforderungen erfüllen. Das ist völlig in Ordnung – dabei lernen Sie viel, und mit wachsender Erfahrung wird Ihnen die Suche leichter fallen.

## Zusammenfassung

Damit endet unsere Einführung in die clientseitigen Tools für die Webentwicklung. Als Nächstes sehen wir uns Paketmanager an.

{{NextMenu("Learn_web_development/Extensions/Client-side_tools/Package_management", "Learn_web_development/Extensions/Client-side_tools")}}
