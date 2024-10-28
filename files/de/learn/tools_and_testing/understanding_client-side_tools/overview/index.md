---
title: Überblick über Client-seitige Werkzeuge
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel geben wir einen Überblick über moderne Web-Tools, welche Arten von Tools verfügbar sind und wo Sie ihnen im Lebenszyklus der Web-App-Entwicklung begegnen, und wie Sie Hilfe für einzelne Tools finden können.

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
        Zu verstehen, welche Arten von Client-seitigen Werkzeuge es gibt und
        wie man Werkzeuge findet und Hilfe dazu bekommt.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über moderne Werkzeuge

Software für das Web zu schreiben ist im Laufe der Jahre anspruchsvoller geworden. Obwohl es nach wie vor völlig vernünftig ist, HTML, CSS und JavaScript "von Hand" zu schreiben, gibt es jetzt eine Fülle von Tools, die Entwickler verwenden können, um den Prozess des Erstellens einer Website oder App zu beschleunigen.

Es gibt einige äußerst etablierte Werkzeuge, die in der Entwicklergemeinschaft zu bekannten "Alltagsnamen" geworden sind, und täglich werden neue Werkzeuge entwickelt und veröffentlicht, um spezifische Probleme zu lösen. Möglicherweise finden Sie sich sogar dabei wieder, ein Stück Software zu schreiben, um Ihren eigenen Entwicklungsprozess zu unterstützen und ein spezifisches Problem zu lösen, das bestehende Werkzeuge bisher nicht zu bearbeiten scheinen.

Es ist leicht, von der schieren Anzahl an Werkzeugen, die in ein einziges Projekt einbezogen werden können, überwältigt zu werden. Ebenso kann eine einzelne Konfigurationsdatei für ein Werkzeug wie [Webpack](https://webpack.js.org/) Hunderte von Zeilen lang sein, von denen die meisten wie magische Beschwörungen erscheinen, die die Aufgabe erledigen, aber die nur ein Meisteringenieur vollständig verstehen wird!

Von Zeit zu Zeit bleiben sogar die erfahrensten Web-Entwickler bei einem Werkzeugproblem stecken; es ist möglich, Stunden damit zu verschwenden, eine Werkzeugpipeline zum Laufen zu bringen, bevor Sie auch nur eine einzige Zeile Anwendungscode berühren. Wenn Sie in der Vergangenheit gestruggelt haben, machen Sie sich keine Sorgen – Sie sind nicht allein.

In diesen Artikeln werden wir nicht jede Frage zu Web-Werkzeugen beantworten, aber wir bieten Ihnen einen nützlichen Ausgangspunkt zum Verständnis der Grundlagen, auf dem Sie weiter aufbauen können. Wie bei jedem komplexen Thema ist es gut, klein anzufangen und sich nach und nach zu fortgeschritteneren Anwendungen vorzuarbeiten.

## Das moderne Werkzeug-Ökosystem

Das moderne Ökosystem der Entwicklerwerkzeuge von heute ist riesig, daher ist es nützlich, eine breite Vorstellung davon zu haben, welche Hauptprobleme die Werkzeuge lösen. Wenn Sie in Ihrer Lieblingssuchmaschine nach "Frontend-Entwicklerwerkzeuge" suchen, erhalten Sie ein breites Spektrum an Ergebnissen, die von Texteditoren über Browser bis hin zu den Stiften reichen, die Sie zum Notizenmachen verwenden können.

Obwohl Ihre Wahl des Code-Editors sicher eine Werkzeugwahl ist, wird diese Artikelserie darüber hinausgehen und sich auf Entwicklerwerkzeuge konzentrieren, die Ihnen helfen, Webcode effizienter zu erstellen. Wir werden einige spezielle Werkzeuge empfehlen und die folgenden Tutorials zeigen Ihnen, wie man sie benutzt. Dies sind Werkzeuge, die zum Zeitpunkt des Schreibens populär und üblich sind. Dies schließt nicht aus, dass Sie andere Werkzeuge verwenden können, wenn Sie sich ihrer relativen Vorteile bewusst sind.

Aus einer höheren Perspektive lassen sich Client-seitige Werkzeuge in die folgenden vier breiten Kategorien von zu lösenden Problemen einteilen:

- **Umgebung** — Werkzeuge, die Ihnen helfen, Ihre Entwicklungsumgebung einzurichten, z. B. die Installation und den Betrieb anderer Werkzeuge.
- **Sicherheitsnetz** — Werkzeuge, die während der Code-Entwicklung nützlich sind.
- **Transformation** — Werkzeuge, die Code auf irgendeine Weise transformieren, z. B. eine Zwischensprache in für einen Browser verständliches JavaScript umwandeln.
- **Nach der Entwicklung** — Werkzeuge, die nützlich sind, nachdem Sie Ihren Code geschrieben haben, wie z.B. Test- und Bereitstellungswerkzeuge.

Lassen Sie uns jede dieser Kategorien genauer betrachten.

### Umgebung

Der Editor, das Betriebssystem und der Browser sind alle Entwicklungsumgebungen. Wir gehen davon aus, dass Sie sich bereits für eine Wahl entschieden haben, mit der Sie sich am wohlsten fühlen. Bevor Sie jedoch andere Werkzeuge installieren und betreiben, sind noch zwei Entscheidungen zu treffen:

- Wo Sie die Werkzeuge ausführen möchten. Die meisten lokal ausgeführten Tools sind in JavaScript geschrieben, daher benötigen Sie einen JavaScript-Interpreter auf Ihrem Computer, der über die Befehlszeile aufgerufen werden kann (nicht der in Ihrem Browser). [Node.js](https://nodejs.org/) bleibt der Industriestandard und wir werden es verwenden. [Bun](https://bun.sh/) ist als Drop-in-Ersatz für Node.js gedacht, bekannt für seine Geschwindigkeit und leistungsstarken APIs.
- Wie Sie die Werkzeuge installieren möchten, mit anderen Worten, der _Paketmanager_. Node bietet standardmäßig [npm](https://www.npmjs.com/), daher werden wir es benutzen. [Yarn](https://yarnpkg.com/) und [pnpm](https://pnpm.io/) sind andere beliebte Optionen, jede mit ihren eigenen Vorteilen wie Geschwindigkeit, Projektmanagement usw.

### Sicherheitsnetz

Dies sind Werkzeuge, die den von Ihnen geschriebenen Code etwas besser machen.

Dieser Teil der Werkzeugkette sollte spezifisch für Ihre eigene Entwicklungsumgebung sein, obwohl es nicht ungewöhnlich ist, dass Unternehmen eine Art von Richtlinie oder vorgefertigte Konfiguration zur Installation haben, damit alle Entwickler die gleichen Prozesse verwenden.

Dazu gehört alles, was Ihren Entwicklungsprozess erleichtert, um stabilen und zuverlässigen Code zu erzeugen. Sicherheitsnetz-Werkzeuge sollten Ihnen auch helfen, Fehler zu verhindern oder automatisch zu korrigieren, ohne Ihren Code jedes Mal von Grund auf neu erstellen zu müssen.

Einige sehr häufig von Entwicklern verwendete Sicherheitsnetz-Werkzeugtypen sind wie folgt.

#### Linters

**Linters** sind Werkzeuge, die Ihren Code durchsehen und Ihnen über vorhandene Fehler informieren, welche Fehlertypen sie sind und in welchen Codezeilen sie vorhanden sind. Linters können häufig so konfiguriert werden, dass sie nicht nur Fehler melden, sondern auch Verstöße gegen einen angegebenen Stilguide, den Ihr Team möglicherweise verwendet (z. B. Code, der die falsche Anzahl von Leerzeichen für Einrückungen verwendet oder [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) anstelle von regulären Zeichenfolgenliteralen verwendet).

[ESLint](https://eslint.org/) ist der Industriestandard-JavaScript-Linter – ein hoch konfigurierbares Werkzeug, um potenzielle Syntaxfehler zu erkennen und "Best Practices" in Ihrem gesamten Code zu fördern. Einige Unternehmen und Projekte haben auch [ihre ESLint-Konfigurationen geteilt](https://www.npmjs.com/search?q=keywords:eslintconfig).

Es gibt auch Linting-Tools für andere Sprachen, wie [stylelint](https://stylelint.io/).

#### Quellcode-Kontrolle

Auch bekannt als **Versionskontrollsysteme** (VCS), ist die **Quellcode-Kontrolle** unerlässlich für die Sicherung Ihrer Arbeit und die Teamarbeit. Ein typisches VCS beinhaltet, dass Sie eine lokale Version des Codes haben, an der Sie Änderungen vornehmen können. Sie "pushen" dann Änderungen zu einer "Master"-Version des Codes in einem irgendwo auf einem Server gespeicherten entfernten Repository. Es gibt normalerweise eine Möglichkeit, zu steuern und zu koordinieren, welche Änderungen an der "Master"-Kopie des Codes und wann vorgenommen werden, damit ein Team von Entwicklern nicht ständig die Arbeit der anderen überschreibt.

[Git](https://git-scm.com/) ist das heutzutage von den meisten Menschen verwendete Quellcode-Kontrollsystem. Es wird hauptsächlich über die Befehlszeile genutzt, kann jedoch auch über benutzerfreundliche Benutzeroberflächen zugegriffen werden. Mit Ihrem Code in einem Git-Repository können Sie es auf Ihre eigene Serverinstanz pushen oder eine gehostete Quellcode-Kontrollwebsite wie [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/) verwenden.

Wir werden in diesem Modul GitHub verwenden. Weitere Informationen dazu finden Sie unter [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

#### Code-Formatter

Code-Formatter sind mit Lintern verwandt, anstatt jedoch Fehler in Ihrem Code aufzuzeigen, sorgen sie dafür, dass Ihr Code korrekt formatiert ist, gemäß Ihren Stilregeln, und Fehler, die sie finden, idealerweise automatisch korrigieren.

[Prettier](https://prettier.io/) ist ein sehr beliebtes Beispiel für einen Code-Formatter, den wir später in diesem Modul verwenden werden.

#### Typ-Prüfer

Typ-Prüfer sind Werkzeuge, die Ihnen helfen, zuverlässigeren Code zu schreiben, indem sie überprüfen, ob Ihr Code die richtigen Datentypen an den richtigen Stellen verwendet. Dies verhindert gängige Fehlerklassen wie der Zugriff auf nicht vorhandene Eigenschaften, unerwartete `undefined`, usw.

[TypeScript](https://www.typescriptlang.org/) ist der de facto Standard-Typ-Prüfer für JavaScript. Es bietet seine eigene Typannotations-Syntax und ist gewissermaßen eine eigene Sprache, deshalb werden wir es in diesem Modul nicht abdecken.

### Transformation

Diese Phase des Lebenszyklus Ihrer Web-App ermöglicht es Ihnen typischerweise, in entweder "zukünftigem Code" zu programmieren (wie die neuesten CSS- oder JavaScript-Funktionen, die möglicherweise noch keinen nativen Support in Browsern haben) oder in einer ganz anderen Sprache, wie TypeScript. Transformationstools werden dann browserkompatiblen Code für Sie generieren, der in der Produktion verwendet wird.

Im Allgemeinen wird Webentwicklung als drei Sprachen betrachtet: [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript), und es gibt Transformationstools für alle diese Sprachen. Transformation bietet drei Hauptvorteile (unter anderem):

1. Die Fähigkeit, Code mit den neuesten Sprachfunktionen zu schreiben und diesen in Code zu transformieren, der auf alltäglichen Geräten funktioniert. Zum Beispiel möchten Sie möglicherweise JavaScript mit neuesten Sprachfunktionen schreiben, aber dennoch soll Ihr endgültiger Produktionscode auf älteren Browsern funktionieren, die diese Funktionen nicht unterstützen. Gute Beispiele hier sind:

   - [Babel](https://babeljs.io/): Ein JavaScript-Compiler, der es Entwicklern ermöglicht, ihren Code mit modernen JavaScript-Funktionen zu schreiben, den Babel dann nimmt und in altmodisches JavaScript umwandelt, das mehr Browser verstehen können. Entwickler können auch [Plugins für Babel schreiben und veröffentlichen](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Tut das gleiche wie Babel, aber für moderne CSS-Funktionen. Wenn es keine gleichwertige Möglichkeit gibt, etwas mit älteren CSS-Funktionen zu tun, wird PostCSS ein JavaScript-Polyfill installieren, um den gewünschten CSS-Effekt zu emulieren.

2. Die Möglichkeit, Ihren Code in einer völlig anderen Sprache zu schreiben und ihn in eine webkompatible Sprache zu transformieren. Zum Beispiel:

   - [Sass/SCSS](https://sass-lang.com/): Diese CSS-Erweiterung ermöglicht Ihnen die Verwendung von Variablen, geschachtelten Regeln, Mixins, Funktionen und vielen weiteren Funktionen, von denen einige in nativem CSS verfügbar sind (wie Variablen), und einige nicht.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript ist eine Obermenge von JavaScript, die eine Vielzahl zusätzlicher Funktionen bietet. Der TypeScript-Compiler wandelt TypeScript-Code in JavaScript um, wenn er für die Produktion gebaut wird.
   - Frameworks wie [React](https://react.dev/), [Ember](https://emberjs.com/) und [Vue](https://vuejs.org/): Frameworks bieten viel Funktionalität kostenlos und ermöglichen Ihnen die Nutzung über benutzerdefinierte Syntax, die auf Vanilla-JavaScript aufbaut. Im Hintergrund arbeitet der JavaScript-Code des Frameworks hart daran, diese benutzerdefinierte Syntax zu interpretieren und sie als endgültige Web-App darzustellen.

3. Optimierung. Dies wird durch _Bundler_ bereitgestellt, das sind Werkzeuge, die Ihren Code für die Produktion vorbereiten, beispielsweise durch "{{Glossary("Tree_shaking", "Tree-Shaking")}}", um sicherzustellen, dass nur die Teile Ihrer Code-Bibliotheken, die Sie tatsächlich verwenden, in Ihren endgültigen Produktionscode aufgenommen werden, oder "{{Glossary("Minification", "Minifizieren")}}", um alle Leerzeichen in Ihrem Produktionscode zu entfernen und ihn so klein wie möglich zu machen, bevor er auf einen Server hochgeladen wird. Zum Beispiel:

   - [Webpack](https://webpack.js.org/) war lange Zeit der beliebteste Bundler mit einer großen Anzahl von Plugins und einem leistungsstarken Konfigurationssystem. Es ist jedoch auch dafür bekannt, dass es ziemlich kompliziert einzurichten ist und im Vergleich zu moderneren Alternativen langsam ist.
   - [Vite](https://vite.dev/) ist ein moderneres Build-Tool, das für seine Geschwindigkeit, Einfachheit und den Reichtum der Funktionen populär ist.

### Nach der Entwicklung

Werkzeuge nach der Entwicklung stellen sicher, dass Ihre Software ins Web gelangt und weiterhin funktioniert. Dazu gehören die Bereitstellungsprozesse, Test-Frameworks, Audit-Tools und mehr.

Diese Phase des Entwicklungsprozesses ist eine, mit der Sie möglichst wenig aktive Interaktion wünschen, sodass sie, sobald sie konfiguriert ist, größtenteils automatisch läuft und nur dann „Hello“ sagt, wenn etwas schiefgelaufen ist.

#### Testwerkzeuge

Diese nehmen im Allgemeinen die Form eines Werkzeugs an, das automatisch Tests gegen Ihren Code ausführt, um sicherzustellen, dass er korrekt ist, bevor Sie weiter gehen (zum Beispiel, wenn Sie versuchen, Änderungen in ein GitHub-Repo zu pushen). Dies kann Linting einschließen, aber auch kompliziertere Prozeduren wie Unit-Tests, bei denen Sie einen Teil Ihres Codes ausführen, um sicherzustellen, dass sie sich wie vorgesehen verhalten.

- Frameworks zum Schreiben von Tests umfassen [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) und [Jasmine](https://jasmine.github.io/).
- Automatisierte Test- und Benachrichtigungssysteme umfassen [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/) und [andere](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Bereitstellungswerkzeuge

Bereitstellungssysteme ermöglichen Ihnen, Ihre Website zu veröffentlichen. Sie sind sowohl für statische als auch für dynamische Websites verfügbar und arbeiten häufig mit Testsystemen zusammen. Zum Beispiel wartet eine typische Werkzeugkette darauf, dass Sie Änderungen in ein Remote-Repo pushen, führt einige Tests durch, um zu sehen, ob die Änderungen in Ordnung sind, und wenn die Tests bestehen, wird Ihre App automatisch auf eine Produktionsseite bereitgestellt.

[GitHub Pages](https://pages.github.com/) ist schön in GitHub selbst integriert und ist für alle öffentlichen Repos kostenlos. Andere Dienste wie [Netlify](https://www.netlify.com/) und [Vercel](https://vercel.com/) sind ebenfalls sehr beliebt und bieten großzügige Quoten für kostenlose Tarife, reibungslose Bereitstellungsabläufe und GitHub-Integration.

#### Andere

Es gibt mehrere andere Werkzeugtypen, die im Stadium nach der Entwicklung genutzt werden können, einschließlich [Code Climate](https://codeclimate.com/) zur Erhebung von Code-Qualitätsmetriken, der [Webhint-Browsererweiterung](https://webhint.io/docs/user-guide/extensions/extension-browser/) zur Durchführung von Laufzeitanalysen zur plattformübergreifenden Kompatibilität und anderen Checks, [GitHub-Bots](https://probot.github.io/) zur Bereitstellung leistungsfähigerer GitHub-Funktionalitäten, [Updown](https://updown.io/) zur Bereitstellung von App-Uptime-Monitoring und vielen mehr!

### Einige Gedanken über Werkzeugtypen

Es gibt sicherlich eine Reihenfolge, in der die verschiedenen Werkzeugtypen im Entwicklungslebenszyklus angewendet werden, aber Sie müssen keineswegs alle davon haben, um eine Website zu veröffentlichen. Tatsächlich benötigen Sie keines davon. Die Einbeziehung einiger dieser Werkzeuge in Ihren Prozess wird jedoch Ihre eigene Entwicklungserfahrung verbessern und wahrscheinlich die Gesamtqualität Ihres Codes erhöhen.

Es dauert oft einige Zeit, bis sich neue Entwicklerwerkzeuge in ihrer Komplexität beruhigen. Eines der bekanntesten Werkzeuge, Webpack, hat den Ruf, sehr kompliziert zu sein, aber in der neuesten großen Veröffentlichung gab es eine große Anstrengung, die gängige Verwendung zu vereinfachen, sodass die erforderliche Konfiguration auf ein absolutes Minimum reduziert wird.

Es gibt definitiv keine magische Lösung, die mit Sicherheit Erfolg mit Werkzeugen garantiert, aber mit zunehmender Erfahrung werden Sie Arbeitsabläufe finden, die _für Sie_ oder Ihr Team und ihre Projekte funktionieren. Wenn alle Unregelmäßigkeiten im Prozess geglättet sind, sollte Ihre Werkzeugkette etwas sein, über das Sie vergessen können und es _sollte_ einfach funktionieren.

## Anleitung zur Auswahl und Hilfestellung für ein bestimmtes Werkzeug

Die meisten Werkzeuge tendieren dazu, isoliert entwickelt und veröffentlicht zu werden, daher gibt es fast sicher Hilfe, aber sie ist niemals am selben Ort oder im selben Format. Es kann daher schwierig sein, Hilfe zu einem Werkzeug zu finden, oder sogar zu entscheiden, welches Werkzeug verwendet werden soll. Das Wissen darüber, welche die besten Werkzeuge sind, ist etwas tribal, was bedeutet, dass es schwer ist, herauszufinden, welche man nutzen sollte, wenn man nicht bereits Teil der Web-Community ist! Das ist ein Grund, warum wir diese Artikelserie geschrieben haben, um hoffentlich diesen ersten Schritt zu bieten, der ansonsten schwer zu finden ist.

Sie werden wahrscheinlich eine Kombination der folgenden Dinge benötigen:

- Erfahrene Lehrer, Mentoren, Mitstudierende oder Kolleginnen und Kollegen, die etwas Erfahrung haben, solche Probleme bereits gelöst haben und Ratschläge geben können.
- Einen nützlichen spezifischen Suchort. Allgemeine Websuchen zu Frontend-Entwicklerwerkzeugen sind im Allgemeinen nutzlos, es sei denn, Sie kennen bereits den Namen des Werkzeugs, das Sie suchen.

  - Wenn Sie beispielsweise den npm-Paketmanager zur Verwaltung Ihrer Abhängigkeiten verwenden, ist es eine gute Idee, zur [npm-Startseite](https://www.npmjs.com/) zu gehen und nach der Art von Werkzeug zu suchen, die Sie suchen, beispielsweise "date" für ein Datumsausgabe-Werkzeug oder "formatter" für einen allgemeinen Code-Formatter. Achten Sie auf die Beliebtheit, Qualität und Wartungsbewertungen und darauf, wann das Paket zuletzt aktualisiert wurde. Klicken Sie auch auf die Werkzeugseiten, um herauszufinden, wie viele monatliche Downloads ein Paket hat und ob es gute Dokumentationen hat, die Sie verwenden können, um zu beurteilen, ob es das tut, was Sie brauchen. Basierend auf diesen Kriterien scheint die [date-fns Bibliothek](https://www.npmjs.com/package/date-fns) ein gutes Werkzeug zur Datumsausgabe zu sein. Sie werden dieses Werkzeug in Aktion sehen und mehr über Paketmanager im dritten Kapitel dieses Moduls erfahren.
  - Wenn Sie nach einem Plugin suchen, um die Funktionalität eines Werkzeugs in Ihren Code-Editor zu integrieren, schauen Sie sich die Plugin/Erweiterungs-Seite des Code-Editors an — siehe [VSCode-Erweiterungen](https://marketplace.visualstudio.com/VSCode) zum Beispiel. Werfen Sie einen Blick auf die vorgestellten Erweiterungen auf der Startseite und versuchen Sie wieder, nach der Art von Erweiterung zu suchen, die Sie möchten (oder dem Werkzeugnamen, zum Beispiel suchen Sie nach "ESLint" auf der VSCode-Erweiterungsseite). Wenn Sie Ergebnisse erhalten, schauen Sie sich Informationen wie die Anzahl der Sterne oder Downloads an, die die Erweiterung hat, als Indikator für ihre Qualität.

- Entwicklungsbezogene Foren, um Fragen zu stellen, welche Werkzeuge verwendet werden sollten, zum Beispiel [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250) oder [Stack Overflow](https://stackoverflow.com/).

Wenn Sie sich für ein Werkzeug entschieden haben, sollte die erste Anlaufstelle die Homepage des Werkzeugprojekts sein. Dies könnte eine vollständige Website sein oder ein einzelnes Readme-Dokument in einem Code-Repository. Die [date-fns Doks](https://date-fns.org/docs/Getting-Started) sind zum Beispiel ziemlich gut, umfassend und leicht zu befolgen. Einige Dokumentationen können jedoch ziemlich technisch und akademisch sein und nicht gut für Ihre Lernbedürfnisse geeignet.

Stattdessen möchten Sie möglicherweise spezielle Tutorials zum Einstieg mit bestimmten Arten von Werkzeugen finden. Ein guter Ausgangspunkt ist die Suche auf Websites wie [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/) und [Smashing Magazine](https://www.smashingmagazine.com/), da diese auf die Webentwicklungsbranche zugeschnitten sind.

Wahrscheinlich werden Sie mehrere verschiedene Werkzeuge durchgehen, während Sie nach den richtigen für Sie suchen, um sie auszuprobieren und zu sehen, ob sie Sinn machen, gut unterstützt sind und tun, was Sie möchten. Das ist in Ordnung — es ist alles gut fürs Lernen und der Weg wird reibungsloser, sobald Sie mehr Erfahrung sammeln.

## Zusammenfassung

Damit schließen wir unsere sanfte Einführung in das Thema der client-seitigen Web-Werkzeuge aus einer hohen Perspektive ab. Als nächstes geben wir Ihnen einen Crashkurs in der Befehlszeile, von der aus viele Werkzeuge aufgerufen werden. Wir werden uns ansehen, was die Befehlszeile kann und dann versuchen, unser erstes Werkzeug zu installieren und zu benutzen.

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
