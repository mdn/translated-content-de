---
title: Übersicht über Client-seitige Werkzeuge
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel geben wir einen Überblick über moderne Web-Werkzeuge, welche Arten von Werkzeugen verfügbar sind und wo Sie diese im Lebenszyklus der Web-App-Entwicklung finden, sowie wie Sie Hilfe zu einzelnen Werkzeugen erhalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a>, und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Arten von Client-seitigen Werkzeugen es gibt und wie man
        Werkzeuge findet und Hilfe bei diesen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht über moderne Werkzeuge

Die Erstellung von Software für das Web ist im Laufe der Zeit anspruchsvoller geworden. Obwohl es noch immer völlig vernünftig ist, HTML, CSS und JavaScript "von Hand" zu schreiben, gibt es inzwischen eine Vielzahl von Werkzeugen, die Entwickler nutzen können, um den Prozess des Aufbaus einer Website oder App zu beschleunigen.

Es gibt einige äußerst etablierte Werkzeuge, die in der Entwicklergemeinschaft zu bekannten "Hausnamen" geworden sind, und jeden Tag werden neue Werkzeuge geschrieben und veröffentlicht, um spezifische Probleme zu lösen. Möglicherweise werden Sie sogar ein Stück Software schreiben, um Ihren eigenen Entwicklungsprozess zu unterstützen und ein spezifisches Problem zu lösen, das vorhandene Werkzeuge nicht abzudecken scheinen.

Es ist leicht, von der schieren Zahl an Werkzeugen, die in ein einziges Projekt einfließen können, überwältigt zu werden. Ebenso kann eine einzige Konfigurationsdatei für ein Werkzeug wie [Webpack](https://webpack.js.org/) Hunderte von Zeilen lang sein, von denen die meisten magische Formeln sind, die scheinbar ihre Aufgabe erfüllen, aber nur von einem Meisteringenieur vollständig verstanden werden.

Von Zeit zu Zeit geraten selbst die erfahrensten Webentwickler in eine Werkzeugfalle; es ist möglich, Stunden mit dem Versuch zu verschwenden, eine Werkzeugpipeline zum Laufen zu bringen, bevor auch nur eine einzige Zeile Anwendungs-Code berührt wird. Wenn Sie in der Vergangenheit damit zu kämpfen hatten, machen Sie sich keine Sorgen — Sie sind nicht allein.

In diesen Artikeln werden wir nicht jede Frage zu Web-Werkzeugen beantworten, aber wir werden Ihnen einen nützlichen Ausgangspunkt zum Verständnis der Grundlagen bieten, auf dem Sie dann aufbauen können. Wie bei jedem komplexen Thema ist es gut, klein anzufangen und sich allmählich zu fortgeschritteneren Anwendungen vorzuarbeiten.

## Das moderne Werkzeug-Ökosystem

Heutiges modernes Entwicklerwerkzeug-Ökosystem ist riesig, daher ist es nützlich, eine breite Vorstellung davon zu haben, welche Hauptprobleme die Werkzeuge lösen. Wenn Sie Ihre Lieblingssuchmaschine öffnen und nach "Front-End-Entwicklerwerkzeuge" suchen, werden Sie auf ein breites Spektrum an Ergebnissen stoßen, die von Texteditoren über Browser bis hin zu den Stiften reichen, die Sie zum Notieren verwenden können.

Obwohl die Wahl des Code-Editors sicherlich eine Werkzeugentscheidung ist, wird sich diese Artikelreihe über diesen Punkt hinaus bewegen und sich auf Entwicklerwerkzeuge konzentrieren, die Ihnen helfen, Webcode effizienter zu erstellen. Wir werden einige besondere Werkzeuge empfehlen, und die folgenden Tutorials zeigen Ihnen, wie Sie sie verwenden. Dies sind Werkzeuge, die zum Zeitpunkt des Schreibens beliebt und Standard sind. Das schließt nicht aus, dass Sie andere Werkzeuge verwenden, wenn Sie sich ihrer relativen Vorteile bewusst sind.

Aus einer übergeordneten Perspektive lassen sich Client-seitige Werkzeuge in die folgenden vier groben Kategorien einteilen:

- **Umgebung** — Werkzeuge, die Ihnen beim Einrichten Ihrer Entwicklungsumgebung helfen, wie z. B. bei der Installation und Ausführung anderer Werkzeuge.
- **Sicherheit** — Werkzeuge, die während der Codeentwicklung nützlich sind.
- **Transformation** — Werkzeuge, die Code auf irgendeine Weise transformieren, z. B. indem sie eine Zwischen-sprache in JavaScript umwandeln, das ein Browser verstehen kann.
- **Nach der Entwicklung** — Werkzeuge, die nützlich sind, nachdem Sie Ihren Code geschrieben haben, wie Test- und Bereitstellungswerkzeuge.

Schauen wir uns jeden dieser Punkte genauer an.

### Umgebung

Der Editor, das Betriebssystem und der Browser sind alle Entwicklungsumgebungen. Wir gehen davon aus, dass Sie bereits eine Wahl getroffen haben, mit der Sie sich am wohlsten fühlen. Allerdings gibt es vor der Installation und Ausführung anderer Werkzeuge zwei Entscheidungen zu treffen:

- Wo Sie die Werkzeuge ausführen werden. Die meisten lokal ausgeführten Werkzeuge sind in JavaScript geschrieben, daher benötigen Sie einen JavaScript-Interpreter auf Ihrem Computer, der vom Befehlszeilenmodus aus aufgerufen werden kann (nicht der in Ihrem Browser). [Node.js](https://nodejs.org/) bleibt der Branchenstandard und wir werden es verwenden. [Bun](https://bun.sh/) ist als Drop-In-Ersatz für Node.js gedacht, bekannt für seine Geschwindigkeit und leistungsstarke APIs.
- Wie Sie die Werkzeuge installieren werden, mit anderen Worten, der _Paketmanager_. Node bietet standardmäßig [npm](https://www.npmjs.com/) an, daher werden wir es verwenden. [Yarn](https://yarnpkg.com/) und [pnpm](https://pnpm.io/) sind andere beliebte Optionen, jede mit eigenen Vorteilen wie Geschwindigkeit, Projektmanagement usw.

### Sicherheitsnetz

Dies sind Werkzeuge, die den von Ihnen geschriebenen Code etwas besser machen.

Dieser Teil der Werkzeuge sollte spezifisch für Ihre eigene Entwicklungsumgebung sein, obwohl es nicht ungewöhnlich ist, dass Unternehmen irgendeine Art von Richtlinie oder vorkonfiguriertes Setup zur Verfügung haben, das installiert werden kann, damit alle Entwickler die gleichen Prozesse verwenden.

Dazu gehört alles, was Ihren Entwicklungsprozess beim Erstellen von stabilem und zuverlässigem Code erleichtert. Sicherheitsnetz-Werkzeuge sollten Ihnen auch helfen, entweder Fehler zu verhindern oder Fehler automatisch zu korrigieren, ohne Ihren Code jedes Mal von Grund auf neu zu erstellen.

Ein paar sehr häufige Sicherheitsnetz-Werkzeugtypen, die von Entwicklern verwendet werden, sind die folgenden.

#### Linters

**Linters** sind Werkzeuge, die Ihren Code durchsehen und Ihnen von vorhandenen Fehlern berichten, welche Fehlertypen sie sind und in welchen Codezeilen sie auftreten. Oft können Linters so konfiguriert werden, dass sie nicht nur Fehler melden, sondern auch Verstöße gegen einen angegebenen Stil-Guide, den Ihr Team möglicherweise verwendet (zum Beispiel Code, der die falsche Anzahl von Leerzeichen für Einrückungen verwendet oder [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) anstelle von regulären String-Literalen).

[ESLint](https://eslint.org/) ist der Industriestandard JavaScript-Linter — ein hoch konfigurierbares Werkzeug zum Erkennen potenzieller Syntaxfehler und zur Förderung von Best Practices in Ihrem Code. Einige Unternehmen und Projekte haben auch [ihre ESLint-Konfigurationen geteilt](https://www.npmjs.com/search?q=keywords:eslintconfig).

Sie können auch Linting-Werkzeuge für andere Sprachen finden, wie [stylelint](https://stylelint.io/).

#### Versionskontrollsysteme

Auch bekannt als **Versionskontrollsysteme** (VCS), sind **Quellcodekontrollsysteme** essentiell für die Sicherung und Teamarbeit. Ein typisches VCS beinhaltet eine lokale Version des Codes, die Sie ändern. Anschließend "pushen" Sie Änderungen an eine "Master"-Version des Codes in einem entfernten Repository, das auf einem Server irgendwo gespeichert ist. Es gibt in der Regel eine Möglichkeit, zu kontrollieren und zu koordinieren, welche Änderungen an der "Master"-Kopie des Codes vorgenommen werden und wann, damit ein Entwicklerteam nicht ständig die Arbeit der anderen überschreibt.

[Git](https://git-scm.com/) ist das Quellcode-Kontrollsystem, das heutzutage die meisten Leute verwenden. Es wird hauptsächlich über die Befehlszeile aufgerufen, kann aber auch über benutzerfreundliche Schnittstellen aufgerufen werden. Mit Ihrem Code in einem Git-Repository können Sie ihn auf Ihre eigene Serverinstanz pushen oder eine gehostete Quellkontroll-Website wie [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/) verwenden.

Wir werden GitHub in diesem Modul verwenden. Weitere Informationen finden Sie unter [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

#### Code-Formatter

Code-Formatter sind irgendwie mit Linters verwandt, sie zeigen jedoch nicht auf Fehler im Code, sondern stellen in der Regel sicher, dass Ihr Code korrekt formatiert ist, gemäß Ihren Stilregeln, und idealerweise automatisch die Fehler beheben, die sie finden.

[Prettier](https://prettier.io/) ist ein sehr beliebtes Beispiel für einen Code-Formatter, den wir später im Modul verwenden werden.

#### Typprüfer

Typprüfer sind Werkzeuge, die Ihnen helfen, zuverlässigeren Code zu schreiben, indem sie überprüfen, ob Ihr Code die richtigen Datentypen an den richtigen Stellen verwendet. Dies verhindert gängige Klassen von Fehlern wie den Zugriff auf nicht existierende Eigenschaften, unerwartete `undefined`-Werte usw.

[TypeScript](https://www.typescriptlang.org/) ist der De-facto-Standard-Typprüfer für JavaScript. Es bietet seine eigene Syntax für Typ-Anmerkungen und ist quasi eine eigene Sprache, daher werden wir es in diesem Modul nicht behandeln.

### Transformation

Diese Phase des Lebenszyklus Ihrer Web-App ermöglicht es Ihnen, entweder in "zukünftigen Code" (wie die neuesten CSS- oder JavaScript-Funktionen, die möglicherweise noch nicht nativ von Browsern unterstützt werden) oder vollständig in einer anderen Sprache, wie TypeScript, zu programmieren. Transformationswerkzeuge generieren dann für Sie browserkompatiblen Code, der in der Produktion verwendet werden kann.

Allgemein wird Web-Entwicklung als drei Sprachen betrachtet: [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS), und [JavaScript](/de/docs/Learn/JavaScript), und es gibt Transformationswerkzeuge für alle diese Sprachen. Transformation bietet drei Hauptvorteile (unter anderem):

1. Die Möglichkeit, Code mit den neuesten Sprachfunktionen zu schreiben und diesen in Code zu transformieren, der auf alltäglichen Geräten funktioniert. Beispielsweise möchten Sie vielleicht JavaScript mit neuen, innovativen Sprachfeatures schreiben, aber dennoch Ihren finalen Produktionscode auf älteren Browsern, die diese Features nicht unterstützen, lauffähig halten. Gute Beispiele hierfür sind:

   - [Babel](https://babeljs.io/): Ein JavaScript-Compiler, der es Entwicklern ermöglicht, ihren Code mit modernem JavaScript zu schreiben, das Babel dann nimmt und in altmodisches JavaScript umwandelt, das mehr Browser verstehen können. Entwickler können auch [Plugins für Babel schreiben und veröffentlichen](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Macht dasselbe wie Babel, aber für innovative CSS-Funktionen. Wenn es keine äquivalente Möglichkeit gibt, mit älteren CSS-Funktionen dasselbe zu tun, installiert PostCSS ein JavaScript-Polyfill, um den gewünschten CSS-Effekt zu emulieren.

2. Die Option, Ihren Code in einer vollständig anderen Sprache zu schreiben und diesen in eine Web-kompatible Sprache zu transformieren. Zum Beispiel:

   - [Sass/SCSS](https://sass-lang.com/): Diese CSS-Erweiterung ermöglicht es Ihnen, Variablen, verschachtelte Regeln, Mixins, Funktionen und viele andere Funktionen zu verwenden, von denen einige in nativen CSS verfügbar sind (wie Variablen), und einige nicht.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript ist ein Superset von JavaScript, das eine Reihe zusätzlicher Funktionen bietet. Der TypeScript-Compiler konvertiert TypeScript-Code zu JavaScript, wenn für die Produktion aufgebaut wird.
   - Frameworks wie [React](https://react.dev/), [Ember](https://emberjs.com/) und [Vue](https://vuejs.org/): Frameworks bieten eine Menge Funktionalität kostenlos und erlauben es Ihnen, diese über eine benutzerdefinierte Syntax, die auf Vanilla-JavaScript aufbaut, zu nutzen. Im Hintergrund arbeitet der JavaScript-Code des Frameworks hart daran, diese benutzerdefinierte Syntax zu interpretieren und als finale Web-App zu rendern.

3. Optimierung. Dies wird von _Bundlern_ bereitgestellt, die Ihre Code für die Produktion bereit machen, z.B. durch "[Tree-shaking](/de/docs/Glossary/Tree_shaking)", sodass nur die Teile Ihrer Code-Bibliotheken, die Sie tatsächlich nutzen, in Ihrem finalen Produktionscode landen, oder durch "[Minifying](/de/docs/Glossary/Minification)", um alle Leerzeichen in Ihrem Code zu entfernen, damit dieser so klein wie möglich ist, bevor er auf einen Server hochgeladen wird. Zum Beispiel:

   - [Webpack](https://webpack.js.org/) war lange Zeit der beliebteste Bundler und bietet eine riesige Anzahl von Plugins und ein leistungsstarkes Konfigurationssystem. Es ist jedoch auch bekannt dafür, ziemlich komplex einzurichten zu sein und im Vergleich zu moderneren Alternativen langsam zu sein.
   - [Vite](https://vitejs.dev/) ist ein moderneres Build-Tool, das für seine Geschwindigkeit, Einfachheit und Funktionsvielfalt beliebt ist.

### Nach der Entwicklung

Werkzeuge für die Phase nach der Entwicklung sorgen dafür, dass Ihre Software ins Web gelangt und weiterläuft. Dazu gehören die Bereitstellungsprozesse, Testframeworks, Prüfwerkzeuge und mehr.

Dieser Abschnitt des Entwicklungsprozesses ist einer, mit dem Sie so wenig wie möglich interagieren möchten, so dass er, sobald er konfiguriert ist, größtenteils automatisch läuft und sich nur dann meldet, wenn etwas schiefgeht.

#### Testwerkzeuge

Diese Werkzeuge bieten in der Regel eine Möglichkeit, automatisch Tests gegen Ihren Code laufen zu lassen, um sicherzustellen, dass er korrekt ist, bevor Sie weitergehen (zum Beispiel, wenn Sie versuchen, Änderungen in einem GitHub-Repo zu pushen). Dies kann Linting einschließen, aber auch anspruchsvollere Verfahren wie Unittests, bei denen Sie Teile Ihres Codes ausführen, um sicherzustellen, dass sie sich wie erwartet verhalten.

- Frameworks zum Schreiben von Tests umfassen [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), und [Jasmine](https://jasmine.github.io/).
- Systeme für das automatische Ausführen von Tests und die Benachrichtigung dazu umfassen [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/), und [andere](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Bereitstellungswerkzeuge

Bereitstellungssysteme ermöglichen es Ihnen, Ihre Website zu veröffentlichen. Sie sind sowohl für statische als auch dynamische Seiten verfügbar und neigen dazu, eng mit Testsystemen zusammenzuarbeiten. Beispielsweise wartet eine typische Toolchain darauf, dass Sie Änderungen an einem Remote-Repo pushen, führt einige Tests durch, um zu sehen, ob die Änderungen in Ordnung sind, und wenn die Tests bestanden werden, wird Ihre App automatisch auf eine Produktionsseite bereitgestellt.

[GitHub Pages](https://pages.github.com/) ist gut in GitHub selbst integriert und für alle öffentlichen Repos kostenlos. Andere Dienste wie [Netlify](https://www.netlify.com/) und [Vercel](https://vercel.com/) sind ebenfalls sehr beliebt, bieten großzügige Freiberechtigungen, reibungslose Bereitstellungsworkflows und GitHub-Integration.

#### Andere

Es gibt mehrere andere verfügbare Werkzeugtypen für die Nutzung in der Phase nach der Entwicklung, wie [Code Climate](https://codeclimate.com/) zur Sammlung von Codequalitätsmetriken, die [webhint Browsererweiterung](https://webhint.io/docs/user-guide/extensions/extension-browser/) zur Laufzeitanalyse von Cross-Browser-Kompatibilität und weiteren Überprüfungen, [GitHub Bots](https://probot.github.io/) zur Bereitstellung leistungsfähigerer GitHub-Funktionen, [Updown](https://updown.io/) zur Überwachung der Laufzeit von Apps und viele mehr!

### Einige Gedanken zu Werkzeugtypen

Es gibt sicherlich eine Reihenfolge, in der die verschiedenen Werkzeugtypen im Entwicklungszyklus Anwendung finden, aber seien Sie versichert, dass Sie nicht _all diese_ parat haben müssen, um eine Website zu veröffentlichen. Tatsächlich brauchen Sie keines davon. Allerdings wird die Integration einiger dieser Werkzeuge in Ihren Prozess Ihre eigene Entwicklungserfahrung verbessern und wahrscheinlich die Gesamtqualität Ihres Codes verbessern.

Es dauert oft einige Zeit, bis sich neue Entwicklerwerkzeuge in ihrer Komplexität eingespielt haben. Eines der bekanntesten Werkzeuge, Webpack, hat den Ruf, übermäßig kompliziert im Umgang zu sein, aber in der letzten großen Version gab es einen großen Vorstoß, die gängige Nutzung zu vereinfachen, so dass die benötigte Konfiguration auf ein absolutes Minimum reduziert wurde.

Es gibt sicherlich keinen Zaubertrick, der den Erfolg mit Werkzeugen garantiert, aber mit wachsender Erfahrung werden Sie Arbeitsabläufe finden, die _für Sie_ oder Ihr Team und deren Projekte funktionieren. Sobald alle Knoten im Prozess geglättet sind, sollte Ihre Toolchain etwas sein, das Sie vergessen können, und es _sollte_ einfach funktionieren.

## Wie man ein bestimmtes Werkzeug auswählt und Hilfe bekommt

Die meisten Werkzeuge werden in Isolation geschrieben und veröffentlicht, so dass zwar fast immer Hilfe verfügbar ist, diese jedoch nie am gleichen Ort oder im gleichen Format ist. Es kann daher schwierig sein, Hilfe bei der Verwendung eines Werkzeugs zu finden oder gar auszuwählen, welches Werkzeug man verwenden soll. Das Wissen darüber, welche die besten Werkzeuge sind, ist etwas volksweisheitsmäßig, was bedeutet, dass es schwer ist, genau herauszufinden, welche man verwenden sollte, wenn man noch nicht in der Web-Community ist! Das ist ein Grund, warum wir diese Artikelreihe geschrieben haben, um hoffentlich diesen ersten Schritt zu erleichtern, der sonst schwer zu finden ist.

Sie werden wahrscheinlich eine Kombination der folgenden Dinge benötigen:

- Erfahrene Lehrer, Mentoren, Mitstudierende oder Kollegen, die über Erfahrung verfügen, solche Probleme bereits gelöst haben und Ratschläge geben können.
- Einen nützlichen spezifischen Ort, um zu suchen. Allgemeine Websuchen nach Front-End-Entwicklerwerkzeugen sind im Allgemeinen nutzlos, es sei denn, Sie kennen bereits den Namen des Werkzeugs, nach dem Sie suchen.

  - Wenn Sie zum Beispiel den npm-Paketmanager zur Verwaltung Ihrer Abhängigkeiten verwenden, ist es eine gute Idee, zur [npm-Homepage](https://www.npmjs.com/) zu gehen und nach der Art des Werkzeugs zu suchen, nach dem Sie suchen. Versuchen Sie zum Beispiel nach „Date“ zu suchen, wenn Sie ein Datumsformatierungs-Dienstprogramm suchen, oder „Formatter“, wenn Sie nach einem allgemeinen Codeformatierer suchen. Achten Sie auf die Popularitäts-, Qualitäts- und Wartungsscores und darauf, wann das Paket zuletzt aktualisiert wurde. Klicken Sie auch auf die Tool-Seiten, um herauszufinden, wie viele monatliche Downloads ein Paket hat und ob es eine gute Dokumentation gibt, die Sie verwenden können, um herauszufinden, ob es tut, was Sie brauchen. Basierend auf diesen Kriterien sieht die [date-fns Bibliothek](https://www.npmjs.com/package/date-fns) wie ein gutes Datumsformatierungstool aus. Sie werden dieses Werkzeug in Aktion sehen und mehr über Paketmanager im Allgemeinen in Kapitel 3 dieses Moduls erfahren.
  - Wenn Sie ein Plugin suchen, das die Funktionalität eines Werkzeugs in Ihren Code-Editor integriert, schauen Sie auf die Plugins/Erweiterungs-Seite des Code-Editors — siehe z.B. die [VSCode-Erweiterungen](https://marketplace.visualstudio.com/VSCode). Sehen Sie sich die vorgestellten Erweiterungen auf der Startseite an, und versuchen Sie erneut, nach der Art der Erweiterung zu suchen, die Sie möchten (oder dem Tool-Namen, suchen Sie z.B. nach „ESLint“ auf der VSCode-Erweiterungsseite). Wenn Sie Ergebnisse erhalten, achten Sie auf Informationen wie die Anzahl der Sterne oder Downloads der Erweiterung als Indikatoren für ihre Qualität.

- Entwicklungsbezogene Foren, um Fragen zu stellen, welche Tools verwendet werden sollen, z.B. [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250) oder [Stack Overflow](https://stackoverflow.com/).

Wenn Sie ein Werkzeug gewählt haben, das Sie verwenden möchten, sollte der erste Anlaufpunkt die Projekt-Homepage des Werkzeugs sein. Dies kann eine vollständig entwickelte Website sein oder es könnte sich um ein einzelnes README-Dokument in einem Code-Repository handeln. Die [date-fns-Dokumente](https://date-fns.org/docs/Getting-Started) sind zum Beispiel ziemlich gut, vollständig und leicht zu folgen. Einige Dokumentationen können jedoch eher technisch und akademisch sein und nicht gut zu Ihren Lernbedürfnissen passen.

Stattdessen möchten Sie vielleicht spezielle Tutorials finden, um mit bestimmten Arten von Werkzeugen zu beginnen. Ein guter Ausgangspunkt ist die Suche auf Websites wie [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/) und [Smashing Magazine](https://www.smashingmagazine.com/), da sie auf die Webentwicklungsbranche zugeschnitten sind.

Erneut, Sie werden wahrscheinlich durch mehrere verschiedene Werkzeuge gehen, während Sie nach den richtigen für sich suchen, sie ausprobieren, um zu sehen, ob sie Sinn machen, gut unterstützt werden und tun, was Sie wollen, dass sie tun. Das ist in Ordnung — es ist alles gut für das Lernen und der Weg wird glatter, je mehr Erfahrung Sie sammeln.

## Zusammenfassung

Damit schließen wir unsere sanfte Einführung in das Thema client-seitige Web-Werkzeuge von einer hohen Ebene ab. Als nächstes bieten wir Ihnen einen Crashkurs zur Befehlszeile an, von der aus viele Werkzeuge aufgerufen werden. Wir werden uns ansehen, was die Befehlszeile tun kann und dann unseren ersten Werkzeug installieren und verwenden.

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
