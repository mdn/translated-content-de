---
title: Übersicht der clientseitigen Tools
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel geben wir einen Überblick über moderne Web-Tools, welche Arten von Tools verfügbar sind und wo Sie diese im Lebenszyklus der Web-App-Entwicklung antreffen, sowie wie Sie Hilfe für einzelne Tools finden können.

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
        Zu verstehen, welche Arten von clientseitigen Tools es gibt, und wie
        man Tools findet und Hilfe zu ihnen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über moderne Tools

Die Entwicklung von Software für das Web ist im Laufe der Zeit anspruchsvoller geworden. Obwohl es immer noch völlig vernünftig ist, HTML, CSS und JavaScript "per Hand" zu schreiben, gibt es jetzt eine Fülle von Tools, die Entwickler nutzen können, um den Prozess des Erstellens einer Website oder App zu beschleunigen.

Es gibt einige äußerst etablierte Tools, die in der Entwicklergemeinschaft zu bekannten "Haushaltsnamen" geworden sind, und jeden Tag werden neue Tools entwickelt und veröffentlicht, um spezifische Probleme zu lösen. Es kann vorkommen, dass Sie ein eigenes Softwarestück entwickeln, um Ihren Entwicklungsprozess zu unterstützen und ein spezifisches Problem zu lösen, das bestehende Tools nicht bereits abdecken.

Es ist leicht, von der schieren Anzahl an Tools überwältigt zu werden, die in ein einzelnes Projekt integriert werden können. Ebenso kann eine einzelne Konfigurationsdatei für ein Tool wie [Webpack](https://webpack.js.org/) Hunderte von Zeilen lang sein, von denen die meisten wie magische Zaubersprüche wirken, die ihren Zweck erfüllen, aber nur ein Meisteringenieur vollständig versteht!

Von Zeit zu Zeit geraten selbst die erfahrensten Webentwickler bei einem Toolproblem ins Stocken; es ist möglich, Stunden damit zu verbringen, eine Toolpipeline zum Laufen zu bringen, bevor auch nur eine einzige Zeile Anwendungs-Code berührt wird. Wenn Sie sich in der Vergangenheit schon einmal in dieser Situation befunden haben, machen Sie sich keine Sorgen — Sie sind nicht allein.

In diesen Artikeln werden wir nicht jede Frage zu Web-Tools beantworten, aber wir werden Ihnen einen nützlichen Ausgangspunkt bieten, um die Grundlagen zu verstehen, auf denen Sie dann aufbauen können. Wie bei jedem komplexen Thema ist es gut, klein anzufangen und sich allmählich zu fortgeschritteneren Anwendungen vorzuarbeiten.

## Das moderne Tooling-Ökosystem

Das moderne Entwickler-Tooling-Ökosystem von heute ist riesig, daher ist es nützlich, eine grobe Vorstellung davon zu haben, welche Hauptprobleme die Tools lösen. Wenn Sie Ihre bevorzugte Suchmaschine verwenden und nach "Front-End-Entwickler-Tools" suchen, stoßen Sie auf eine riesige Palette an Ergebnissen, die von Texteditoren über Browser bis hin zu den Stiften reichen, die Sie zum Notieren verwenden können.

Obwohl die Wahl Ihres Code-Editors sicherlich eine Tooling-Entscheidung ist, wird sich diese Artikelserie auf Entwickler-Tools konzentrieren, die Ihnen helfen, Web-Code effizienter zu produzieren. Wir werden einige besondere Tools empfehlen und die folgenden Tutorials werden Ihnen zeigen, wie Sie sie verwenden. Es handelt sich um Tools, die zum Zeitpunkt des Schreibens beliebt und standardisiert sind. Dies schließt nicht aus, dass Sie andere Tools verwenden können, wenn Sie sich ihrer relativen Vorteile bewusst sind.

Aus einer hohen Perspektive können Sie clientseitige Tools den folgenden vier breiten Kategorien von Problemen zuordnen, die es zu lösen gilt:

- **Umgebung** — Tools, die Ihnen helfen, Ihre Entwicklungsumgebung einzurichten, wie z.B. das Installieren und Ausführen anderer Tools.
- **Schutznetz** — Tools, die während Ihrer Codeentwicklung nützlich sind.
- **Transformation** — Tools, die in irgendeiner Weise Code transformieren, z.B. eine Zwischensprache in JavaScript umwandeln, die ein Browser verstehen kann.
- **Nach der Entwicklung** — Tools, die nach dem Schreiben Ihres Codes nützlich sind, wie z.B. Test- und Bereitstellungstools.

Schauen wir uns jeden dieser Punkte genauer an.

### Umgebung

Der Editor, das Betriebssystem und der Browser sind alles Entwicklungsumgebungen. Wir gehen davon aus, dass Sie sich bereits für eine Wahl entschieden haben, mit der Sie am meisten vertraut sind. Bevor Sie jedoch andere Tools installieren und ausführen, gibt es noch zwei Entscheidungen zu treffen:

- Wo Sie die Tools ausführen werden. Die meisten lokal ausgeführten Tools sind in JavaScript geschrieben, daher benötigen Sie auf Ihrem Computer einen JavaScript-Interpreter, der von der Befehlszeile aus aufgerufen werden kann (nicht der im Browser). [Node.js](https://nodejs.org/) bleibt der Industriestandard und wir werden es verwenden. [Bun](https://bun.sh/) ist als Ersatz für Node.js gedacht, bekannt für seine Geschwindigkeit und leistungsstarken APIs.
- Wie Sie die Tools installieren werden, also der _Paket-Manager_. Node bietet standardmäßig [npm](https://www.npmjs.com/) an, deshalb werden wir es verwenden. [Yarn](https://yarnpkg.com/) und [pnpm](https://pnpm.io/) sind andere beliebte Alternativen, jeweils mit eigenen Vorteilen wie Geschwindigkeit, Projektverwaltung usw.

### Schutznetz

Dies sind Tools, die den von Ihnen geschriebenen Code ein wenig besser machen.

Dieser Teil des Toolings sollte spezifisch für Ihre eigene Entwicklungsumgebung sein, aber es ist nicht ungewöhnlich, dass Unternehmen irgendeine Art von Richtlinie oder vorgefertigte Konfiguration zur Verfügung haben, die installiert werden kann, sodass alle Entwickler die gleichen Prozesse verwenden.

Dies beinhaltet alles, was Ihren Entwicklungsprozess erleichtert, um stabilen und zuverlässigen Code zu generieren. Schutznetz-Tools sollten Ihnen auch helfen, entweder Fehler zu verhindern oder Fehler automatisch zu korrigieren, ohne dass der Code jedes Mal neu erstellt werden muss.

Einige sehr häufig genutzte Schutznetz-Tooltypen, die Sie bei Entwicklern finden werden, sind im Folgenden aufgeführt.

#### Linters

**Linters** sind Tools, die Ihren Code durchgehen und Ihnen von vorhandenen Fehlern berichten, um welche Fehlertypen es sich handelt und in welchen Codezeilen sie vorkommen. Oft können Linters so konfiguriert werden, dass sie nicht nur Fehler melden, sondern auch Verstöße gegen eine spezifizierte Stilrichtlinie, die Ihr Team möglicherweise verwendet (zum Beispiel Code, der eine falsche Anzahl an Leerzeichen für Einrückungen verwendet, oder [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) anstelle von regulären String-Literals).

[ESLint](https://eslint.org/) ist der Industriestandard für JavaScript Linters — ein hoch konfigurierbares Tool zum Auffinden potenzieller Syntaxfehler und zur Förderung von "Best Practices" im gesamten Code. Einige Unternehmen und Projekte haben auch [ihre ESLint-Konfigurationen geteilt](https://www.npmjs.com/search?q=keywords:eslintconfig).

Sie können auch Linting-Tools für andere Sprachen finden, wie zum Beispiel [stylelint](https://stylelint.io/).

#### Versionskontrolle

Auch bekannt als **Versionskontrollsysteme** (VCS), ist eine **Quellcodekontrolle** unerlässlich, um Arbeiten zu sichern und im Team zu arbeiten. Ein typisches VCS beinhaltet das Vorhandensein einer lokalen Version des Codes, zu der Sie Änderungen vornehmen. Sie "pushen" dann Änderungen zu einer "Master"-Version des Codes innerhalb eines entfernten Repositories, das auf einem Server irgendwo gespeichert ist. In der Regel gibt es eine Möglichkeit, zu kontrollieren und zu koordinieren, welche Änderungen wann an der "Master"-Kopie des Codes vorgenommen werden, damit ein Team von Entwicklern nicht ständig gegenseitig ihre Arbeit überschreibt.

[Git](https://git-scm.com/) ist das Quellcodekontrollsystem, das die meisten Leute heutzutage verwenden. Es wird hauptsächlich über die Befehlszeile aufgerufen, kann aber durch benutzerfreundliche Oberflächen aufgerufen werden. Mit Ihrem Code in einem Git-Repository können Sie ihn auf Ihre eigene Serverinstanz pushen oder eine gehostete Quellkontroll-Website wie [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/) verwenden.

In diesem Modul werden wir GitHub verwenden. Mehr Informationen dazu finden Sie unter [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

#### Codeformatter

Codeformatter sind mit Linters verwandt, außer dass sie anstatt Fehler in Ihrem Code aufzuzeigen, in der Regel sicherstellen, dass Ihr Code korrekt formatiert ist, gemäß Ihren Stilregeln, und idealerweise automatisch auftretende Fehler beheben.

[Prettier](https://prettier.io/) ist ein sehr populäres Beispiel für einen Codeformatter, den wir später im Modul verwenden werden.

#### Typenprüfer

Typenprüfer sind Tools, die Ihnen helfen, zuverlässigeren Code zu schreiben, indem sie überprüfen, dass Ihr Code die richtigen Datentypen zur richtigen Zeit verwendet. Dies verhindert häufig auftretende Fehlerklassen wie das Zugreifen auf nicht vorhandene Eigenschaften, unerwartete `undefined`, usw.

[TypeScript](https://www.typescriptlang.org/) ist der de facto Standard in Sachen Typenprüfer für JavaScript. Es bietet seine eigene Typanmerkungssyntax und ist somit eine eigene Sprache, was wir in diesem Modul nicht behandeln werden.

### Transformation

Diese Phase des Lebenszyklus Ihrer Web-App ermöglicht es Ihnen in der Regel, entweder in "Zukunftscode" zu programmieren (wie die neuesten CSS- oder JavaScript-Funktionen, die möglicherweise noch keine native Unterstützung in Browsern haben) oder eine völlig andere Sprache zu verwenden, wie z.B. TypeScript. Transformationstools generieren dann browserkompatiblen Code für Sie, der in der Produktion verwendet werden kann.

Allgemein wird Webentwicklung als drei Sprachen betrachtet: [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript), und es gibt Transformationstools für all diese Sprachen. Transformation bietet drei Hauptvorteile (neben anderen):

1. Die Fähigkeit, Code mit den neuesten Sprachmerkmalen zu schreiben und diesen in Code zu transformieren, der auf gängigen Geräten funktioniert. Beispielsweise möchten Sie vielleicht JavaScript mit cutting-edge neuen Sprachmerkmalen schreiben, aber dennoch Ihren finalen Produktionscode auf älteren Browsern, die diese Merkmale nicht unterstützen, ausführen. Gute Beispiele hier sind:

   - [Babel](https://babeljs.io/): Ein JavaScript-Compiler, der es Entwicklern ermöglicht, ihren Code mit cutting-edge JavaScript zu schreiben, den Babel dann in altmodisches JavaScript umwandelt, das mehr Browser verstehen können. Entwickler können auch [Plugins für Babel schreiben und veröffentlichen](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Macht das Gleiche wie Babel, jedoch für cutting-edge CSS-Merkmale. Wenn es keine äquivalente Möglichkeit gibt, etwas mit älteren CSS-Merkmalen zu tun, wird PostCSS ein JavaScript-Polyfill installieren, um den CSS-Effekt zu emulieren, den Sie haben möchten.

2. Die Option, Ihren Code in einer völlig anderen Sprache zu schreiben und ihn in eine webkompatible Sprache umzuwandeln. Beispiele:

   - [Sass/SCSS](https://sass-lang.com/): Diese CSS-Erweiterung ermöglicht die Verwendung von Variablen, verschachtelten Regeln, Mixins, Funktionen und vielen weiteren Merkmalen, von denen einige in nativem CSS (wie Variablen) verfügbar sind, andere jedoch nicht.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript ist ein Superset von JavaScript, das eine Vielzahl zusätzlicher Features bietet. Der TypeScript-Compiler wandelt TypeScript-Code in JavaScript um, wenn für die Produktion erstellt wird.
   - Frameworks wie [React](https://react.dev/), [Ember](https://emberjs.com/) und [Vue](https://vuejs.org/): Frameworks bieten eine Menge Funktionalität kostenlos und ermöglichen es Ihnen, diese über benutzerdefinierte Syntax zu nutzen, die auf normalen JavaScript aufbaut. Im Hintergrund arbeitet der JavaScript-Code des Frameworks hart daran, diese benutzerdefinierte Syntax zu interpretieren und als finale Web-App darzustellen.

3. Optimierung. Diese wird durch _Bundler_ bereitgestellt, das sind Tools, die Ihren Code für die Produktion vorbereiten, z.B. durch "{{Glossary("Tree_shaking", "Tree Shaking")}}", um sicherzustellen, dass nur die Teile Ihrer Codebibliotheken, die Sie tatsächlich verwenden, in Ihren finalen Produktionscode aufgenommen werden, oder durch "{{Glossary("Minification", "Minifizierung")}}", um allen unnötigen Whitespace in Ihrem Produktionscode zu entfernen, damit er so klein wie möglich ist, bevor er auf einen Server hochgeladen wird. Beispiele:

   - [Webpack](https://webpack.js.org/) war lange Zeit der beliebteste Bundler und bietet eine enorme Anzahl an Plugins und ein leistungsstarkes Konfigurationssystem. Es ist jedoch auch bekannt dafür, recht komplex einzurichten zu sein und im Vergleich zu moderneren Alternativen langsam zu sein.
   - [Vite](https://vitejs.dev/) ist ein moderneres Build-Tool, das für seine Geschwindigkeit, Einfachheit und seinen Reichtum an Features beliebt ist.

### Nach der Entwicklung

Tools nach der Entwicklung stellen sicher, dass Ihre Software ins Web gelangt und weiterläuft. Dies umfasst die Bereitstellungsprozesse, Test-Frameworks, Auditing-Tools und mehr.

Diese Phase des Entwicklungsprozesses ist eine, mit der Sie das geringste Maß an aktiver Interaktion haben möchten, sodass sie, einmal konfiguriert, hauptsächlich automatisch läuft und nur dann Aufmerksamkeit erfordert, wenn etwas schiefgelaufen ist.

#### Testwerkzeuge

Diese nehmen in der Regel die Form eines Tools an, das automatisch Tests gegen Ihren Code durchführt, um sicherzustellen, dass er korrekt ist, bevor Sie weitergehen (z.B. wenn Sie versuchen, Änderungen in ein GitHub-Repo zu pushen). Dies kann Linting umfassen, aber auch weiter entwickelte Verfahren wie Unit-Tests, bei denen Sie Teile Ihres Codes ausführen und sicherstellen, dass sie sich verhalten, wie sie sollten.

- Frameworks zum Schreiben von Tests umfassen [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) und [Jasmine](https://jasmine.github.io/).
- Automatisierte Testrunner- und Benachrichtigungssysteme umfassen [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/) und [andere](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Bereitstellungswerkzeuge

Bereitstellungssysteme ermöglichen es, Ihre Website zu veröffentlichen, und sind sowohl für statische als auch dynamische Seiten verfügbar und tendieren oft dazu, zusammen mit Testsystemen zu arbeiten. Ein typisches Tool-Setup wird darauf warten, dass Sie Änderungen in ein entferntes Repo pushen, einige Tests durchführen, um zu sehen, ob die Änderungen in Ordnung sind, und wenn die Tests bestehen, Ihre App automatisch auf eine Produktionsseite bereitstellen.

[GitHub Pages](https://pages.github.com/) ist schön in GitHub selbst integriert und für alle öffentlichen Repos kostenlos. Andere Dienste, wie [Netlify](https://www.netlify.com/) und [Vercel](https://vercel.com/), sind ebenfalls sehr beliebt, bieten großzügige Freikontingente, reibungslose Bereitstellungs-Workflows und GitHub-Integration.

#### Andere

Es gibt mehrere andere Arten von Tools, die im Nachentwicklungsstadium verwendet werden können, einschließlich [Code Climate](https://codeclimate.com/) zur Erfassung von Codequalitätmetriken, die [webhint Browsererweiterung](https://webhint.io/docs/user-guide/extensions/extension-browser/) zur Durchführung von Laufzeitanalysen der Browser-Kompatibilität und anderen Prüfungen, [GitHub Bots](https://probot.github.io/) zur Bereitstellung leistungsstarker GitHub-Funktionalität, [Updown](https://updown.io/) zur Überwachung der App-Verfügbarkeit und viele mehr!

### Einige Gedanken zu Tooltypen

Es gibt sicherlich eine Reihenfolge, in der die verschiedenen Tooltypen im Entwicklungslebenszyklus angewendet werden, aber seien Sie versichert, dass Sie _all diese_ nicht haben müssen, um eine Website zu veröffentlichen. Tatsächlich benötigen Sie keine dieser Tools. Der Einbau einiger dieser Tools in Ihren Prozess wird jedoch Ihre eigene Entwicklungserfahrung verbessern und wahrscheinlich die Gesamtqualität Ihres Codes erhöhen.

Es dauert oft eine Weile, bis sich neue Entwickler-Tools in ihrer Komplexität etabliert haben. Eines der bekanntesten Tools, Webpack, hat den Ruf, sehr kompliziert zu sein, aber in der neuesten Hauptveröffentlichung gab es einen großen Vorstoß zur Vereinfachung der häufigen Nutzung, sodass die erforderliche Konfiguration auf ein absolutes Minimum reduziert wurde.

Es gibt definitiv keine Wunderwaffe, die Erfolg mit Tools garantiert, aber mit zunehmender Erfahrung werden Sie Workflows finden, die _für Sie_ oder für Ihr Team und deren Projekte funktionieren. Sobald alle Unklarheiten im Prozess behoben sind, sollte Ihre Toolchain etwas sein, das Sie vergessen können, und sie _sollte_ einfach funktionieren.

## Anleitung zur Auswahl und Hilfe bei einem bestimmten Tool

Die meisten Tools werden in Isolation geschrieben und veröffentlicht, daher ist fast sicher Hilfe verfügbar, jedoch nie am selben Ort oder im gleichen Format. Es kann daher schwierig sein, Hilfe zur Verwendung eines Tools zu finden oder sogar zu entscheiden, welches Tool verwendet werden soll. Das Wissen darüber, welche Tools am besten zu verwenden sind, ist ein bisschen stammesmäßig, was bedeutet, dass es schwierig ist herauszufinden, welche man wirklich nutzen sollte, wenn man sich nicht bereits in der Web-Community befindet! Dies ist einer der Gründe, warum wir diese Artikelserie geschrieben haben, um hoffentlich diesen ersten Schritt zu bieten, der ansonsten schwer zu finden ist.

Sie benötigen wahrscheinlich eine Kombination der folgenden Dinge:

- Erfahrene Lehrer, Mentoren, Mitstudierende oder Kollegen, die etwas Erfahrung haben, solche Probleme bereits gelöst haben und Ratschläge geben können.
- Einen nützlichen spezifischen Ort zum Suchen. Allgemeine Websuchen nach Front-End-Entwickler-Tools sind in der Regel nutzlos, es sei denn, Sie kennen bereits den Namen des Tools, nach dem Sie suchen.

  - Wenn Sie beispielsweise den npm Paketmanager verwenden, um Ihre Abhängigkeiten zu verwalten, ist es eine gute Idee, zur [npm Homepage](https://www.npmjs.com/) zu gehen und nach der Art des Tools zu suchen, die Sie benötigen, beispielsweise nach "date", wenn Sie ein Datumsformatierungstool suchen, oder "formatter", wenn Sie einen allgemeinen Codeformatter suchen. Achten Sie auf die Popularitäts-, Qualitäts- und Wartungsbewertungen und wie kürzlich das Paket zuletzt aktualisiert wurde. Klicken Sie auch auf die Tool-Seiten, um zu sehen, wie viele monatliche Downloads ein Paket hat, und ob es eine gute Dokumentation gibt, mit der Sie herausfinden können, ob es das tut, was Sie brauchen. Basierend auf diesen Kriterien sieht die [date-fns Bibliothek](https://www.npmjs.com/package/date-fns) wie ein gutes Datumsformatierungstool aus. Sie werden dieses Tool in Aktion sehen und mehr über Paketmanager im Allgemeinen in Kapitel 3 dieses Moduls erfahren.
  - Wenn Sie nach einem Plugin suchen, um die Funktionalität eines Tools in Ihren Codeeditor zu integrieren, schauen Sie sich die Plugins/Erweiterungsseite des Codeeditors an — siehe [VSCode Erweiterungen](https://marketplace.visualstudio.com/VSCode) als Beispiel. Schauen Sie sich die vorgestellten Erweiterungen auf der Startseite an und versuchen Sie erneut, nach der Art der Erweiterung zu suchen, die Sie möchten (oder nach dem Toolnamen, z.B. suchen Sie nach "ESLint" auf der VSCode Erweiterungsseite). Wenn Sie Ergebnisse erhalten, schauen Sie sich Informationen wie die Anzahl an Sternen oder Downloads an, die die Erweiterung hat, als Indikator für deren Qualität.

- Entwicklungsbezogene Foren, um Fragen zu stellen, welche Tools verwendet werden sollen, beispielsweise [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250) oder [Stack Overflow](https://stackoverflow.com/).

Wenn Sie sich für ein Tool entschieden haben, das Sie verwenden möchten, sollte die erste Anlaufstelle die Homepage des Toolprojekts sein. Dies könnte eine voll ausgebaute Website oder es könnte ein einziges Readme-Dokument in einem Code-Repository sein. Die [date-fns Doku](https://date-fns.org/docs/Getting-Started) zum Beispiel ist ziemlich gut, vollständig und leicht zu folgen. Einige Dokumentationen können jedoch ziemlich technisch und akademisch sein und passen möglicherweise nicht gut zu Ihren Lernbedürfnissen.

Stattdessen möchten Sie vielleicht einige spezielle Tutorials zum Einstieg mit bestimmten Arten von Tools finden. Ein guter Ausgangspunkt ist die Suche auf Websites wie [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/) und [Smashing Magazine](https://www.smashingmagazine.com/), da sie auf die Webentwicklungsindustrie zugeschnitten sind.

Wieder einmal werden Sie wahrscheinlich verschiedene Tools durchprobieren, während Sie nach den richtigen für sich suchen, sie ausprobieren, um zu sehen, ob sie Sinn ergeben, gut unterstützt werden und das tun, was Sie möchten. Dies ist in Ordnung — es ist alles gut für das Lernen, und der Weg wird reibungsloser, je mehr Erfahrung Sie sammeln.

## Zusammenfassung

Damit endet unsere sanfte Einführung in das Thema clientseitige Web-Tools aus einer hohen Perspektive. Als nächstes bieten wir Ihnen einen Crashkurs zur Befehlszeile an, von der aus viele Tools aufgerufen werden. Wir werfen einen Blick darauf, was die Befehlszeile leisten kann und versuchen dann unser erstes Tool zu installieren und zu nutzen.

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
