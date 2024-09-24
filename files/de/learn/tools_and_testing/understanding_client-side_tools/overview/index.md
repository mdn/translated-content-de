---
title: Überblick über Client-seitige Tools
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel geben wir einen Überblick über moderne Web-Tools, welche Arten von Tools verfügbar sind und wo Sie ihnen im Lebenszyklus der Web-App-Entwicklung begegnen, sowie wie Sie Hilfe zu einzelnen Tools finden.

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
        Zu verstehen, welche Arten von Client-seitigen Tools es gibt und wie man
        Tools findet und Hilfe zu ihnen bekommt.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über moderne Tools

Die Erstellung von Software für das Web ist im Laufe der Zeit anspruchsvoller geworden. Obwohl es immer noch möglich ist, HTML, CSS und JavaScript "von Hand" zu schreiben, gibt es inzwischen eine Fülle von Tools, die Entwickler nutzen können, um den Prozess des Erstellens einer Website oder App zu beschleunigen.

Es gibt einige sehr etablierte Tools, die in der Entwicklergemeinde zu bekannten "Namen" geworden sind, und neue Tools werden täglich entwickelt und veröffentlicht, um spezifische Probleme zu lösen. Möglicherweise schreiben Sie sogar ein Stück Software, um Ihren eigenen Entwicklungsprozess zu unterstützen und ein spezifisches Problem zu lösen, das bestehende Tools noch nicht abdecken zu scheinen.

Es ist leicht, von der schieren Anzahl der Tools, die in ein einziges Projekt integriert werden können, überwältigt zu werden. Ebenso kann eine einzelne Konfigurationsdatei für ein Tool wie [Webpack](https://webpack.js.org/) Hunderte von Zeilen lang sein, von denen die meisten magische Beschwörungen sind, die zwar die Aufgabe zu erledigen scheinen, aber die nur ein Master-Ingenieur vollständig versteht!

Von Zeit zu Zeit geraten sogar die erfahrensten Web-Entwickler in Schwierigkeiten bei einem Tooling-Problem; es ist möglich, Stunden mit dem Versuch zu verschwenden, eine Tool-Pipeline zum Laufen zu bringen, bevor man auch nur eine Zeile Anwendungs-Code anfasst. Wenn Sie sich in der Vergangenheit damit schwer getan haben, machen Sie sich keine Sorgen – Sie sind nicht allein.

In diesen Artikeln werden wir nicht jede Frage zu Web-Tools beantworten, aber wir werden Ihnen einen nützlichen Ausgangspunkt für das Verständnis der Grundlagen bieten, von dem aus Sie weiter aufbauen können. Wie bei jedem komplexen Thema ist es gut, klein anzufangen und sich allmählich zu fortgeschritteneren Anwendungen hochzuarbeiten.

## Das moderne Tooling-Ökosystem

Das heutige moderne Entwickler-Tooling-Ökosystem ist riesig, daher ist es nützlich, einen breiten Überblick darüber zu haben, welche Hauptprobleme die Tools lösen. Wenn Sie Ihre bevorzugte Suchmaschine aufrufen und nach "Front-End-Entwickler-Tools" suchen, werden Sie auf ein breites Spektrum an Ergebnissen stoßen, von Texteditoren über Browser bis hin zu Stiften, die Sie zum Notizenmachen verwenden können.

Obwohl Ihre Wahl des Code-Editors sicherlich eine Tooling-Entscheidung ist, werden diese Artikel über diesen hinausgehen und sich auf Entwickler-Tools konzentrieren, die Ihnen helfen, Web-Code effizienter zu erstellen. Wir werden einige bestimmte Tools empfehlen, und die folgenden Tutorials zeigen Ihnen, wie Sie diese verwenden. Sie sind zum Zeitpunkt des Schreibens beliebte und standardmäßige Tools. Dies schließt jedoch nicht aus, dass Sie andere Werkzeuge verwenden, wenn Sie sich ihrer relativen Vorteile bewusst sind.

Aus einer höheren Perspektive können Sie Client-seitige Tools in die folgenden vier großen Kategorien von zu lösenden Problemen einordnen:

- **Umgebung** — Tools, die Ihnen helfen, Ihre Entwicklungsumgebung einzurichten, wie das Installieren und Ausführen anderer Werkzeuge.
- **Sicherheitsnetz** — Tools, die während der Code-Entwicklung nützlich sind.
- **Transformation** — Tools, die Code auf irgendeine Weise transformieren, z.B. indem sie eine Zwischensprache in JavaScript umwandeln, das ein Browser verstehen kann.
- **Post-Entwicklung** — Tools, die nach dem Schreiben Ihres Codes nützlich sind, wie Test- und Deployment-Tools.

Schauen wir uns jeden dieser Punkte genauer an.

### Umgebung

Der Editor, das Betriebssystem und der Browser sind alles Entwicklungsumgebungen. Wir gehen davon aus, dass Sie sich bereits für eine entschieden haben, mit der Sie sich am wohlsten fühlen. Bevor Sie jedoch andere Werkzeuge installieren und ausführen, stehen noch zwei Entscheidungen an:

- Wo Sie die Werkzeuge ausführen werden. Die meisten lokal laufenden Tools sind in JavaScript geschrieben, daher benötigen Sie einen JavaScript-Interpreter auf Ihrem Computer, der über die Befehlszeile aufgerufen werden kann (nicht der in Ihrem Browser). [Node.js](https://nodejs.org/) bleibt der Industriestandard, und wir werden es verwenden. [Bun](https://bun.sh/) ist als Ersatz für Node.js gedacht und ist bekannt für seine Geschwindigkeit und leistungsstarken APIs.
- Wie Sie die Werkzeuge installieren werden, mit anderen Worten den _Paket-Manager_. Node bietet standardmäßig [npm](https://www.npmjs.com/), daher werden wir es nutzen. [Yarn](https://yarnpkg.com/) und [pnpm](https://pnpm.io/) sind andere beliebte Optionen, jede mit ihren eigenen Vorteilen wie Geschwindigkeit, Projektmanagement usw.

### Sicherheitsnetz

Dies sind Werkzeuge, die den von Ihnen geschriebenen Code ein wenig verbessern.

Dieser Teil der Tooling-Umgebung sollte spezifisch für Ihre eigene Entwicklungsumgebung sein, obwohl es nicht ungewöhnlich ist, dass Unternehmen eine Art Richtlinie oder vorgefertigte Konfiguration bereitstellen, die installiert werden kann, sodass alle ihre Entwickler dieselben Prozesse verwenden.

Dazu gehören alle Hilfsmittel, die den Entwicklungsprozess erleichtern, um stabilen und verlässlichen Code zu generieren. Sicherheitsnetz-Tools sollten Ihnen auch dabei helfen, entweder Fehler zu verhindern oder automatisch zu korrigieren, ohne Ihren Code jedes Mal von Grund auf neu erstellen zu müssen.

Einige sehr gängige Arten von Sicherheitsnetz-Tools, die von Entwicklern verwendet werden, sind folgende.

#### Linter

**Linter** sind Werkzeuge, die Ihren Code durchgehen und Sie über vorhandene Fehler informieren, welche Fehlertypen sie sind und auf welchen Codezeilen sie sich befinden. Oft können Linter so konfiguriert werden, dass sie nicht nur Fehler melden, sondern auch Verstöße gegen einen angegebenen Stil-Leitfaden, den Ihr Team möglicherweise verwendet (zum Beispiel Code, der die falsche Anzahl von Leerzeichen für Einrückungen verwendet oder [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) statt regulärer String-Literale).

[ESLint](https://eslint.org/) ist der Industriestandard-JavaScript-Linter – ein hochgradig konfigurierbares Tool zum Auffinden potenzieller Syntaxfehler und zur Förderung "best practices" in Ihrem Code. Einige Unternehmen und Projekte haben auch [ihre ESLint-Konfigurationen geteilt](https://www.npmjs.com/search?q=keywords:eslintconfig).

Sie können auch Linting-Tools für andere Sprachen finden, wie [stylelint](https://stylelint.io/).

#### Quellcodeverwaltung

Auch bekannt als **Versionskontrollsysteme** (VCS), ist **Quellcodeverwaltung** unerlässlich, um Arbeit zu sichern und in Teams zu arbeiten. Ein typisches VCS umfasst eine lokale Version des Codes, die Sie ändern. Sie "pushen" dann Änderungen zu einer "Master"-Version des Codes in einem entfernten Repository, das auf einem Server irgendwo gespeichert ist. Es gibt normalerweise eine Möglichkeit, zu kontrollieren und zu koordinieren, welche Änderungen an der "Master"-Kopie des Codes vorgenommen und wann sie gemacht werden, sodass ein Team von Entwicklern nicht ständig die Arbeit der anderen überschreibt.

[Git](https://git-scm.com/) ist das Quellcode-Verwaltungssystem, das heutzutage die meisten Menschen verwenden. Es wird hauptsächlich über die Befehlszeile zugegriffen, kann jedoch auch über benutzerfreundliche Schnittstellen genutzt werden. Mit Ihrem Code in einem Git-Repository können Sie es an Ihre eigene Serverinstanz pushen oder eine gehostete Quellcode-Verwaltungswebsite wie [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/) verwenden.

Wir werden GitHub in diesem Modul verwenden. Weitere Informationen dazu finden Sie unter [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

#### Code-Formatter

Code-Formatter sind den Lintern etwas ähnlich, jedoch weisen sie nicht auf Fehler in Ihrem Code hin, sondern sorgen normalerweise dafür, dass Ihr Code korrekt gemäß Ihren Stilregeln formatiert ist und idealerweise automatisch gefundene Fehler behebt.

[Prettier](https://prettier.io/) ist ein sehr beliebtes Beispiel für einen Code-Formatter, den wir später im Modul verwenden werden.

#### Typprüfer

Typprüfer sind Werkzeuge, die Ihnen helfen, zuverlässigeren Code zu schreiben, indem sie überprüfen, ob Ihr Code die richtigen Datentypen an den richtigen Stellen verwendet. Dies verhindert häufige Fehlerklassen wie den Zugriff auf nicht existierende Eigenschaften, unerwartete `undefined` usw.

[TypeScript](https://www.typescriptlang.org/) ist der De-facto-Standardtypprüfer für JavaScript. Es bietet seine eigene Typannotationssyntax und ist in gewisser Weise eine eigene Sprache, deshalb werden wir es in diesem Modul nicht behandeln.

### Transformation

Diese Phase des Lebenszyklus Ihrer Web-App ermöglicht es Ihnen normalerweise, entweder in "zukünftigen Code" (wie die neuesten CSS- oder JavaScript-Features, die möglicherweise noch nicht nativ in Browsern unterstützt werden) oder in einer anderen Sprache zu schreiben, wie TypeScript. Transformationswerkzeuge erzeugen dann für Sie browserkompatiblen Code, der in der Produktion verwendet wird.

Web-Entwicklung wird im Allgemeinen als drei Sprachen angesehen: [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript), und es gibt Transformationswerkzeuge für all diese Sprachen. Transformation bietet drei Hauptvorteile (unter anderem):

1. Die Möglichkeit, Code unter Verwendung der neuesten Sprachmerkmale zu schreiben und diesen in Code zu verwandeln, der auf alltäglichen Geräten funktioniert. Zum Beispiel könnten Sie JavaScript mit den neuesten Sprachmerkmalen schreiben wollen, aber dennoch möchten Sie, dass Ihr endgültiger Produktionscode auch auf älteren Browsern funktioniert, die diese Funktionen nicht unterstützen. Gute Beispiele hierfür umfassen:

   - [Babel](https://babeljs.io/): Ein JavaScript-Compiler, der es Entwicklern ermöglicht, ihren Code mit modernen JavaScript-Features zu schreiben, die Babel dann aufnimmt und in althergebrachtes JavaScript umwandelt, das mehr Browser verstehen können. Entwickler können auch [Plugins für Babel schreiben und veröffentlichen](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Macht dasselbe wie Babel, aber für moderne CSS-Funktionen. Wenn es keine entsprechende Möglichkeit gibt, etwas mit älteren CSS-Funktionen zu tun, installiert PostCSS ein JavaScript-Polyfill, um den gewünschten CSS-Effekt zu emulieren.

2. Die Möglichkeit, Ihren Code in einer völlig anderen Sprache zu schreiben und ihn in eine webkompatible Sprache umzuwandeln. Zum Beispiel:

   - [Sass/SCSS](https://sass-lang.com/): Diese CSS-Erweiterung ermöglicht die Verwendung von Variablen, verschachtelten Regeln, Mixins, Funktionen und vielen anderen Features, von denen einige in nativem CSS verfügbar sind (wie Variablen), und einige nicht.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript ist eine Erweiterung von JavaScript, die eine Reihe zusätzlicher Funktionen bietet. Der TypeScript-Compiler wandelt TypeScript-Code in JavaScript um, wenn er für die Produktion gebaut wird.
   - Frameworks wie [React](https://react.dev/), [Ember](https://emberjs.com/), und [Vue](https://vuejs.org/): Frameworks bieten viel Funktionalität kostenlos und erlauben es Ihnen, diese über benutzerdefinierte Syntax zu nutzen, die auf Vanilla JavaScript aufbaut. Im Hintergrund arbeitet der JavaScript-Code des Frameworks hart, um diese benutzerdefinierte Syntax zu interpretieren und sie als endgültige Web-App zu rendern.

3. Optimierung. Dies wird von _Bundlern_ bereitgestellt, die Ihre Codes für die Produktion vorbereiten, z.B. durch "{{Glossary("Tree_shaking", "Tree-Shaking")}}", um sicherzustellen, dass nur die Teile Ihrer Bibliotheken, die Sie tatsächlich verwenden, in Ihren endgültigen Produktionscode aufgenommen werden, oder durch "{{Glossary("Minification", "Minifizierung")}}", um alle Leerzeichen in Ihrem Produktionscode zu entfernen, damit er so klein wie möglich ist, bevor er auf einen Server hochgeladen wird. Beispiele hierfür sind:

   - [Webpack](https://webpack.js.org/) war lange Zeit der beliebteste Bundler und bietet eine riesige Anzahl von Plugins und ein leistungsstarkes Konfigurationssystem. Allerdings ist es auch bekannt dafür, dass es ziemlich komplex einzurichten ist und langsamer ist im Vergleich zu moderneren Alternativen.
   - [Vite](https://vite.dev/) ist ein moderneres Build-Tool, das für seine Geschwindigkeit, Einfachheit und Vielzahl an Funktionen beliebt ist.

### Post-Entwicklung

Post-Entwicklungs-Tools sorgen dafür, dass Ihre Software im Web veröffentlicht wird und weiterhin läuft. Dazu gehören die Deployment-Prozesse, Test-Frameworks, Prüf-Tools und mehr.

Diese Phase des Entwicklungsprozesses ist eine, mit der Sie möglichst wenig aktive Interaktion haben möchten, sodass sie, einmal konfiguriert, überwiegend automatisch läuft und nur dann in Erscheinung tritt, wenn etwas schiefgegangen ist.

#### Testwerkzeuge

Diese nehmen in der Regel die Form von Werkzeugen an, die automatisch Tests gegen Ihren Code ausführen, um sicherzustellen, dass er korrekt ist, bevor Sie weitergehen (z.B. wenn Sie versuchen, Änderungen an ein GitHub-Repo zu pushen). Dies kann Linting beinhalten, aber auch fortschrittlichere Verfahren wie Unit-Tests, bei denen Sie einen Teil Ihres Codes ausführen, um sicherzustellen, dass sie sich wie gewünscht verhalten.

- Frameworks zum Schreiben von Tests umfassen [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), und [Jasmine](https://jasmine.github.io/).
- Automatisierte Testlauf- und Benachrichtigungssysteme umfassen [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/), und [andere](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Deployment-Werkzeuge

Deployment-Systeme ermöglichen es Ihnen, Ihre Website zu veröffentlichen. Sie sind sowohl für statische als auch dynamische Seiten verfügbar und arbeiten normalerweise mit Testsystemen zusammen. Zum Beispiel wird eine typische Toolchain warten, bis Sie Änderungen an ein Remote-Repository gepusht haben, einige Tests durchführen, um zu sehen, ob die Änderungen in Ordnung sind, und wenn die Tests bestanden werden, automatisch Ihre App auf eine Produktionsseite bereitstellen.

[GitHub Pages](https://pages.github.com/) ist schön integriert mit GitHub selbst und ist für alle öffentlichen Repos kostenlos. Andere Dienste, wie [Netlify](https://www.netlify.com/) und [Vercel](https://vercel.com/), sind ebenfalls sehr beliebt und bieten großzügige kostenlose Kontingente, reibungslose Deployment-Workflows und GitHub-Integration.

#### Weitere

Es gibt mehrere andere Werkzeugtypen, die in der Post-Entwicklungsphase verwendet werden können, einschließlich [Code Climate](https://codeclimate.com/) zur Erfassung von Code-Qualitätsmetriken, die [webhint Browser-Erweiterung](https://webhint.io/docs/user-guide/extensions/extension-browser/) zur Durchführung von Laufzeitanalysen zur plattformübergreifenden Kompatibilität und anderen Prüfungen, [GitHub Bots](https://probot.github.io/) zur Bereitstellung mächtigerer GitHub-Funktionen, [Updown](https://updown.io/) zur Bereitstellung von App-Uptime-Überwachungen, und viele mehr!

### Einige Gedanken zu Tooling-Typen

Es gibt sicherlich eine Reihenfolge, in der die verschiedenen Tooling-Typen im Lebenszyklus der Entwicklung angewendet werden, aber seien Sie versichert, dass Sie keines dieser Tools eingerichtet haben _müssen_, um eine Website zu veröffentlichen. Tatsächlich benötigen Sie keines dieser Tools. Allerdings wird die Einbeziehung einiger dieser Werkzeuge in Ihren Prozess Ihre eigene Entwicklungserfahrung verbessern und wahrscheinlich die Gesamtqualität Ihres Codes steigern.

Es dauert oft eine Weile, bis sich neue Entwickler-Tools in ihrer Komplexität beruhigen. Eines der bekanntesten Tools, Webpack, hat den Ruf, übermäßig kompliziert in der Anwendung zu sein, aber in der letzten großen Veröffentlichung gab es einen großen Vorstoß, um die allgemeine Nutzung zu vereinfachen, sodass die erforderliche Konfiguration auf ein absolutes Minimum reduziert wurde.

Es gibt definitiv keine Patentlösung, die Erfolg mit Tools garantiert, aber mit zunehmender Erfahrung werden Sie Workflows finden, die für _Sie_ oder Ihr Team und ihre Projekte funktionieren. Sobald alle Probleme im Prozess geglättet sind, sollte Ihre Toolchain etwas sein, das Sie vergessen können, und es sollte einfach _funktionieren_.

## Wie man ein bestimmtes Werkzeug auswählt und Hilfe bekommt

Die meisten Tools werden in der Regel isoliert entwickelt und veröffentlicht, daher gibt es fast immer Hilfe, aber sie ist nie am selben Ort oder im gleichen Format. Es kann daher schwierig sein, Hilfe bei der Verwendung eines Tools zu finden oder sogar zu entscheiden, welches Tool man verwenden soll. Das Wissen darüber, welche die besten Werkzeuge sind, die man verwenden sollte, ist ein wenig tribal, was bedeutet, dass es schwer zu finden ist, wenn man nicht bereits in der Web-Community ist! Dies ist ein Grund, warum wir diese Artikelreihe verfasst haben, um hoffentlich den ersten Schritt zu bieten, der sonst schwer zu finden ist.

Sie werden wahrscheinlich eine Kombination der folgenden Dinge benötigen:

- Erfahrene Lehrer, Mentoren, Mitstudierende oder Kollegen, die über einige Erfahrungen verfügen, solche Probleme bereits gelöst haben und Ratschläge geben können.
- Ein nützlicher spezifischer Suchort. Allgemeine Web-Suchen nach Front-End-Entwickler-Tools sind im Allgemeinen nutzlos, es sei denn, Sie kennen bereits den Namen des Tools, nach dem Sie suchen.

  - Wenn Sie beispielsweise den npm-Paketmanager verwenden, um Ihre Abhängigkeiten zu verwalten, ist es eine gute Idee, zur [npm-Homepage](https://www.npmjs.com/) zu gehen und nach der Art von Tool zu suchen, die Sie suchen, versuchen Sie zum Beispiel nach "date" zu suchen, wenn Sie ein Datumsformattierungs-Utility wünschen, oder nach "formatter", wenn Sie einen allgemeinen Code-Formatter suchen. Achten Sie auf die Beliebtheits-, Qualitäts- und Wartungsscores und das Datum der letzten Aktualisierung des Pakets. Klicken Sie auch auf die Tool-Seiten, um herauszufinden, wie viele monatliche Downloads ein Paket hat und ob es eine gute Dokumentation hat, die Sie verwenden können, um herauszufinden, ob es das tut, was Sie benötigen. Basierend auf diesen Kriterien sieht die [date-fns-Bibliothek](https://www.npmjs.com/package/date-fns) wie ein gutes Mietdatumsformatierungstool aus. Sie werden dieses Tool in Aktion sehen und mehr über Paketmanager im Allgemeinen im dritten Kapitel dieses Moduls erfahren.
  - Wenn Sie nach einem Plugin suchen, um Toolfunktionalität in Ihren Code-Editor zu integrieren, schauen Sie auf der Plugin-/Erweiterungsseite des Code-Editors nach – sehen Sie sich z.B. die [VSCode-Erweiterungen](https://marketplace.visualstudio.com/VSCode) an. Schauen Sie sich die vorgestellten Erweiterungen auf der Startseite an und versuchen Sie erneut, nach der Art der Erweiterung zu suchen, die Sie möchten (oder dem Toolnamen, suchen Sie beispielsweise nach "ESLint" auf der VSCode-Erweiterungsseite). Wenn Sie Ergebnisse erhalten, achten Sie auf Informationen wie die Anzahl der Sterne oder Downloads, die die Erweiterung hat, als Indikator für ihre Qualität.

- Entwicklerbezogene Foren, um Fragen dazu zu stellen, welche Werkzeuge zu verwenden sind, z.B. [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250), oder [Stack Overflow](https://stackoverflow.com/).

Wenn Sie ein Tool ausgewählt haben, sollte der erste Anlaufpunkt die Homepage des Tools sein. Dies könnte eine vollwertige Website sein oder ein einzelnes Readme-Dokument in einem Repository. Zum Beispiel sind die [date-fns Docs](https://date-fns.org/docs/Getting-Started) ziemlich gut, vollständig und leicht zu folgen. Manche Dokumentationen können jedoch sehr technisch und akademisch sein und passen nicht gut zu Ihren Lernbedürfnissen.

Stattdessen möchten Sie vielleicht einige spezielle Tutorials finden, die Ihnen den Einstieg in bestimmte Arten von Tools erleichtern. Ein guter Ausgangspunkt dafür ist die Suche auf Websites wie [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/) und [Smashing Magazine](https://www.smashingmagazine.com/), da sie auf die Webentwicklungsbranche zugeschnitten sind.

Nochmals, Sie werden wahrscheinlich durch mehrere verschiedene Tools gehen, während Sie nach den richtigen für sich suchen, sie ausprobieren, um zu sehen, ob sie sinnvoll sind, gut unterstützt werden und das tun, was Sie von ihnen erwarten. Das ist in Ordnung – es ist alles gut fürs Lernen, und der Weg wird mit zunehmender Erfahrung reibungsloser.

## Zusammenfassung

Damit schließen wir unsere sanfte Einführung in das Thema Client-seitige Web-Tools aus einer hohen Ebene ab. Als nächstes bieten wir Ihnen einen Schnellkurs über die Befehlszeile an, von wo aus viele Tools aufgerufen werden. Wir werden uns ansehen, was die Befehlszeile leisten kann und dann versuchen, unser erstes Werkzeug zu installieren und zu benutzen.

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
