---
title: Einführung in das Cross-Browser-Testing
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: Was Cross-Browser-Testing ist, einige häufige Probleme und einige Ansätze zur Fehlerbehebung.

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
        Ein Verständnis der hochrangigen Konzepte, die beim Cross-Browser-Testing relevant sind, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website auf verschiedenen Browsern und Geräten funktioniert. Webentwickler sollten folgende Punkte berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis zu Tablets und Smartphones sowie Smart-TVs, mit unterschiedlichen Hardware-Fähigkeiten.
- Menschen mit Behinderungen, die möglicherweise auf unterstützende Technologien wie Bildschirmlesegeräte angewiesen sind oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind – nur weil Ihre Website auf Ihrem MacBook Pro oder einem hochwertigen Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Nutzer funktioniert!

> **Note:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) behandelt die verschiedenen Browser, deren Marktanteil und verwandte Probleme der Browser-Kompatibilität.

Websites sollten über verschiedene Browser und Geräte sowie für Menschen mit Behinderungen zugänglich sein (z.B. bildschirmlesegerätefreundlich). Eine Seite muss nicht auf allen Browsern und Geräten genau das gleiche Erlebnis bieten, solange die Kernfunktionalität irgendwie zugänglich ist. Zum Beispiel könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes haben, während ältere Browser nur eine flache Grafik mit den gleichen Informationen anzeigen.

Es ist auch fast unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Site-Inhaber eine Vereinbarung über den Bereich der Browser und Geräte treffen, auf denen der Code funktionieren soll.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie überhaupt zu Cross-Browser-Problemen kommen, sollten Sie bereits Bugs in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) und [Was ist schiefgegangen? Fehlerbehebung JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) aus vorherigen Themen, um Ihr Gedächtnis bei Bedarf aufzufrischen).

Cross-Browser-Probleme treten häufig auf, weil:

- Browser manchmal Bugs haben oder Funktionen unterschiedlich implementieren. Diese Situation ist viel weniger schlimm als früher; als IE4 und Netscape 4 in den 1990er Jahren darum konkurrierten, der dominierende Browser zu sein, implementierten Browserunternehmen absichtlich unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben für Entwickler zur Hölle machte. Browser sind heutzutage viel besser darin, Standards zu folgen, aber Unterschiede und Bugs schleichen sich manchmal trotzdem ein.
- Einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für technologische Funktionen haben als andere. Dies ist unvermeidlich, wenn Sie es mit hochmodernen Funktionen zu tun haben, die Browser gerade implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden, die möglicherweise eingefroren wurden (d.h. keine neuen Arbeiten mehr daran durchgeführt werden), lange bevor eine neue Funktion erfunden wurde. Zum Beispiel könnten moderne JavaScript-Funktionen auf Ihrer Website in älteren Browsern nicht funktionieren. Wenn Sie ältere Browser unterstützen müssen, könnten Sie gezwungen sein, auf diese zu verzichten oder Ihren Code mithilfe eines Cross-Compilers bei Bedarf in alte Syntax umzuwandeln.
- Einige Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Zum Beispiel, wenn eine Seite so gestaltet wurde, dass sie auf einem Desktop-PC gut aussieht, wird sie wahrscheinlich auf einem mobilen Gerät winzig wirken und schwer zu lesen sein. Wenn Ihre Seite viele große Animationen enthält, mag das auf einem High-End-Tablet in Ordnung sein, könnte aber auf einem Low-End-Gerät träge oder ruckelig wirken.

…und noch mehr Gründe.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme untersuchen und nach Lösungen dafür suchen.

## Workflows für das Cross-Browser-Testing

All diese Angelegenheiten des Cross-Browser-Testings mögen zeitaufwendig und beängstigend erscheinen, müssen es aber nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie genügend Tests an den richtigen Stellen durchführen, um sicherzustellen, dass Sie nicht auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Hinzufügungen zum Code keine alten Funktionen brechen, die zuvor funktionierten.

Wenn Sie alle Tests auf das Ende eines Projekts verschieben, werden eventuelle Bugs, die Sie aufdecken, weitaus teurer und zeitaufwendiger zu beheben sein, als wenn Sie sie aufdecken und im Verlauf beheben.

Der Workflow für das Testen und Beheben von Bugs in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen mögen die Dinge ganz anders machen):

**Anfängliche Planung** > **Entwicklung** > **Test/Entdeckung** > **Fehlerbehebung/Iteration**

Die Schritte 2–4 werden so oft wiederholt, wie nötig, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in nachfolgenden Artikeln ausführlicher betrachten, aber vorerst fassen wir zusammen, was in jedem Schritt geschehen kann.

### Anfängliche Planung

In der anfänglichen Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Website-Inhaber/Kunden haben (dies könnte Ihr Chef oder jemand aus einer externen Firma sein, für die Sie eine Website erstellen), in denen Sie genau bestimmen, was die Website sein soll — welchen Inhalt und welche Funktionalität sie haben soll, wie sie aussehen soll usw. An diesem Punkt möchten Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Seite haben — was ist die Deadline und wie viel zahlen sie Ihnen für Ihre Arbeit? Wir werden nicht viel ins Detail gehen, aber Cross-Browser-Probleme können einen ernsthaften Einfluss auf eine solche Planung haben.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang haben und welche Technologien Sie wahrscheinlich verwenden werden, um diese Funktionen zu erstellen, sollten Sie anfangen, das Zielpublikum zu erkunden — welche Browser, Geräte usw. wird das Zielpublikum für diese Seite verwenden? Der Kunde könnte bereits Daten darüber haben, aus früheren Untersuchungen, die er durchgeführt hat, z.B. aus anderen Websites, die er besitzt, oder aus früheren Versionen der Website, an der Sie jetzt arbeiten. Wenn nicht, werden Sie in der Lage sein, eine gute Vorstellung zu bekommen, indem Sie andere Quellen betrachten, wie z.B. Nutzungsstatistiken von Konkurrenten oder Länder, die die Seite bedienen wird. Sie können auch ein wenig Intuition verwenden.

So könnten Sie beispielsweise eine E-Commerce-Seite erstellen, die Kunden in Nordamerika bedient. Die Seite sollte in den letzten paar Versionen der beliebtesten Desktop- und mobilen Browser komplett funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf der gleichen Rendering-Engine wie Chrome basieren), Firefox und Safari einschließen. Sie sollte auch mit WCAG AA-Konformität zugänglich sein.

Jetzt kennen Sie Ihre Ziel-Testplattformen, und sollten zurückgehen und den erforderlichen Funktionsumfang und die Technologien, die Sie verwenden werden, überprüfen. Zum Beispiel, wenn der E-Commerce-Site-Inhaber einen WebGL-gestützten 3D-Rundgang für jedes Produkt auf den Produktseiten wünscht, müssen sie akzeptieren, dass das einfach nicht in allen alten Browserversionen funktionieren wird.

Sie sollten eine Liste der potenziellen Problemstellen erstellen.

> [!NOTE]
> Sie können Informationen zur Browser-Unterstützung für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN — der Seite, auf der Sie sich befinden — nachschlagen! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für weitere nützliche Details.

Sobald Sie sich über diese Details einig sind, können Sie mit der Entwicklung der Site beginnen.

### Entwicklung

Nun zur Entwicklung der Seite. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, zum Beispiel könnten Sie die verschiedenen Site-Bereiche aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsworkflows usw. Sie könnten diese dann weiter aufteilen — ein gemeinsames Site-Header und -Footer implementieren, die Detailansicht der Produktseite implementieren, ein persistentes Einkaufswagen-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien zur Cross-Browser-Entwicklung, zum Beispiel:

- Die gesamte Funktionalität in allen Zielbrowsern möglichst ähnlich zum Laufen bringen. Dies kann das Schreiben verschiedener Code-Pfade beinhalten, die Funktionalitäten auf unterschiedliche Weise für verschiedene Browser reproduzieren, oder die Verwendung eines [Polyfills](/de/docs/Glossary/Polyfill) zur Nachahmung fehlender Unterstützung mittels JavaScript oder anderer Technologien, oder die Nutzung einer Bibliothek, die es Ihnen ermöglicht, einen einzigen Code zu schreiben und dann im Hintergrund unterschiedliche Dinge zu tun, je nachdem, was der Browser unterstützt.
- Akzeptieren, dass einige Dinge nicht auf allen Browsern gleich funktionieren werden, und verschiedene (akzeptable) Lösungen in Browsern bieten, die die volle Funktionalität nicht unterstützen. Manchmal ist dies unvermeidlich aufgrund von Gerätebeschränkungen — ein Kino-Widescreen wird nicht das gleiche visuelle Erlebnis bieten wie ein 4-Zoll-Mobilbildschirm, unabhängig davon, wie Sie Ihre Seite programmieren.
- Akzeptieren, dass Ihre Seite einfach auf einigen älteren Browsern nicht funktionieren wird und weitermachen. Das ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis akzeptiert es.

Normalerweise wird Ihre Entwicklung eine Kombination der obigen drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jedes kleine Teil vor dem Übernehmen testen — lassen Sie nicht alle Tests bis zum Ende!

### Test/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zu Beginn sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die Ihre Funktion daran hindern zu funktionieren:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige Basis-Tests zur Barrierefreiheit durch, zum Beispiel indem Sie versuchen, Ihre Seite nur mit der Tastatur zu nutzen oder sie über einen Screenreader zu betrachten, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, z.B. Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie versuchen, Ihre Liste der Testbrowser auf eine vollständige Liste der Zielpublikumsbrowser zu erweitern und sich darauf konzentrieren, Cross-Browser-Probleme auszusortieren (siehe den nächsten Artikel für weitere Informationen über [Bestimmung Ihrer Zielbrowser](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie die letzte Änderung in allen modernen Desktop-Browsern, die Sie können, zu testen — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (Mac, Windows und Linux, idealerweise).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z.B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die einfachste Option ist es, all das Testen selbst durchzuführen (ziehen Sie Teammitglieder hinzu, wenn Sie in einem Team arbeiten). Sie sollten versuchen, auf realen physischen Geräten zu testen, wenn möglich.

Wenn Sie keine Mittel haben, all diese verschiedenen Browser-, Betriebssystem- und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen erlaubt, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren) nutzen. Dies ist eine sehr beliebte Wahl, insbesondere in einigen Situationen — zum Beispiel erlaubt Windows nicht, mehrere Versionen von Windows gleichzeitig auf demselben Gerät zu haben, daher ist die Verwendung mehrerer virtueller Maschinen oft die einzige Option hier.

Eine weitere Option sind Benutzergruppen — die Nutzung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Seite zu testen. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe anderer Mitarbeiter, eine Klasse an einer örtlichen Universität oder ein professionelles Nutzertesting-Setup sein, bei dem Personen dafür bezahlt werden, Ihre Seite zu testen und Ergebnisse zu liefern.

Schließlich können Sie Ihr Testing mit Auditing- oder Automatisierungstools intelligenter gestalten; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da all diese Tests von Hand eine wirklich lange Zeit in Anspruch nehmen können. Sie können ein eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl der App), das zum Beispiel Ihre Seite in einer Anzahl unterschiedlicher Browser laden könnte, und:

- überprüfen, ob ein Buttonklick etwas erfolgreich auslöst (wie zum Beispiel die Anzeige einer Karte), und die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind
- einen Screenshot von jedem machen, so dass Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie in Testing investieren möchten, gibt es auch kommerzielle Tools, die viel von der Einrichtung und dem Testen für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen normalerweise einen kontinuierlichen Integrations-Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testing auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; sehen Sie die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/browsers/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien in Ihrer Seite verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Bug in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Browser-Entwickler den Bug in einer neueren Version behoben haben.

### Fehlerbehebung/Iteration

Sobald Sie einen Bug entdeckt haben, müssen Sie ihn versuchen zu beheben.

Der erste Schritt besteht darin, den Fehler so genau wie möglich einzugrenzen. Sammeln Sie so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Versuchen Sie es auf ähnlichen Konfigurationen (z.B. die gleiche Browserversion auf verschiedenen Desktop-Plattformen oder einige verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit der Fehler verbreitet ist.

Es könnte nicht Ihr Fehler sein — wenn ein Bug in einem Browser existiert, dann wird der Anbieter ihn hoffentlich schnell beheben. Er könnte bereits behoben worden sein — zum Beispiel, wenn ein Bug in Firefox Release 49 vorhanden ist, aber in Firefox Nightly (Version 52) nicht mehr dort ist, dann haben sie ihn behoben. Wenn er nicht behoben ist, möchten Sie möglicherweise einen Bug melden (siehe [Bug melden](#bugs_melden) unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Das Herausfinden der Ursache des Bugs erfordert dieselbe Strategie wie bei jedem Webentwicklungsfehler (siehe erneut [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) und [Was ist schiefgegangen? Fehlerbehebung JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)). Sobald Sie herausgefunden haben, was den Bug verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser umgehen, in dem er Probleme verursacht — Sie können den problematischen Code nicht einfach ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz besteht typischerweise darin, den Code in irgendeiner Weise zu gabeln, zum Beispiel JavaScript-Feature-Erkennungscode zu verwenden, um Situationen zu erkennen, in denen ein Problemfeature nicht funktioniert, und in diesen Fällen anderen Code auszuführen, der funktioniert.

Sobald eine Korrektur vorgenommen wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Korrektur ordnungsgemäß funktioniert und die Seite nicht an anderen Stellen oder in anderen Browsern zum Absturz gebracht hat.

## Bugs melden

Nur um zu wiederholen, was oben gesagt wurde, wenn Sie Bugs in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein umfassendes Verständnis der wichtigsten Konzepte gegeben haben, die Sie über Cross-Browser-Testing wissen müssen. Mit diesem Wissen bewaffnet, sind Sie nun bereit, weiterzugehen und mehr über Cross-Browser-Testing-Strategien zu lernen.

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}
