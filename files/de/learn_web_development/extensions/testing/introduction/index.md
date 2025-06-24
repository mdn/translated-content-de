---
title: Einführung in das Cross-Browser-Testing
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: was Cross-Browser-Testing ist, einige häufige Probleme und einige Ansätze zum Debuggen/Fehlerbehebung.

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
        Ein Verständnis für die wichtigsten Konzepte im Cross-Browser-Testing zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones sowie Smart-TVs mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screenreader angewiesen sein können oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind — nur weil Ihre Seite auf Ihrem MacBook Pro oder einem High-End Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Benutzer funktioniert!

> [!NOTE] > [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die verschiedenen Browser, deren Marktanteile und damit verbundene Cross-Browser-Kompatibilitätsprobleme.

Websites sollten in verschiedenen Browsern und auf verschiedenen Geräten sowie für Menschen mit Behinderungen (z. B. screenreader-freundlich) zugänglich sein. Eine Website muss nicht in allen Browsern und auf allen Geräten das gleiche Erlebnis bieten, solange die Kernfunktionalität in irgendeiner Weise zugänglich ist. Zum Beispiel könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes haben, während ältere Browser nur eine flache Grafik mit denselben Informationen anzeigen.

Es ist auch nahezu unmöglich, dass eine Website in ALLEN Browsern und auf allen Geräten funktioniert, daher sollte ein Webentwickler mit dem Seiteninhaber eine Vereinbarung darüber treffen, in welcher Bandbreite von Browsern und Geräten der Code funktionieren wird.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass hier über Probleme gesprochen wird, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie überhaupt zu Cross-Browser-Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Fehlersuche in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus früheren Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Cross-Browser-Probleme treten häufig auf, weil:

- Browser manchmal Bugs haben oder Funktionen unterschiedlich implementieren. Diese Situation ist viel weniger schlimm als früher; als IE4 und Netscape 4 in den 1990er Jahren darum kämpften, der dominierende Browser zu sein, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um einen Wettbewerbsvorteil zu erlangen, was das Leben von Entwicklern zur Hölle machte. Heutzutage sind Browser viel besser darin, Standards zu folgen, aber Unterschiede und Bugs schleichen sich manchmal trotzdem ein.
- Einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für Technologiefunktionen haben als andere. Dies ist unvermeidlich, wenn Sie mit brandneuen Funktionen zu tun haben, die Browser gerade erst implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden und lange vor der Erfindung einer neuen Funktion eingefroren wurden. Wenn Sie beispielsweise hochmoderne JavaScript-Funktionen auf Ihrer Website verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, müssen Sie diese möglicherweise nicht verwenden oder Ihren Code mit einem Cross-Compiler in altmodische Syntax umwandeln, wo nötig.
- Einige Geräte können Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Website beispielsweise so gestaltet wurde, dass sie auf einem Desktop-PC gut aussieht, wird sie wahrscheinlich winzig und schwer lesbar auf einem mobilen Gerät aussehen. Wenn Ihre Seite eine Menge großer Animationen enthält, mag sie auf einem hochspezifizierten Tablet in Ordnung sein, könnte jedoch auf einem Gerät mit niedriger Leistung träge oder ruckartig sein.

…und noch mehr Gründe.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme untersuchen und nach Lösungen suchen.

## Workflows für das Cross-Browser-Testing

All dieses Cross-Browser-Testing-Geschäft mag zeitaufwendig und beängstigend klingen, aber das muss es nicht sein — Sie müssen es nur sorgfältig planen und sicherstellen, dass Sie genug Tests an den richtigen Stellen durchführen, um sicherzustellen, dass Sie nicht auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Ergänzungen zum Code keine alten, zuvor funktionierenden Funktionen brechen.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, werden alle entdeckten Bugs viel teurer und zeitaufwendiger zu beheben sein, als wenn Sie sie aufdecken und beheben, während Sie fortfahren.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen können Dinge ziemlich anders machen als dies):

**Initiale Planung** > **Entwicklung** > **Testen/Entdeckung** > **Fehlerbehebungen/Iteration**

Die Schritte 2–4 werden so oft wie nötig wiederholt, um alle Implementierungen abzuschließen. Wir werden uns die verschiedenen Teile des Testprozesses in viel detaillierterer Weise in nachfolgenden Artikeln ansehen, aber vorerst fassen wir kurz zusammen, was in jedem Schritt geschehen könnte.

### Initiale Planung

In der initialen Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Website-Inhaber/Kunden haben (das könnte Ihr Chef sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen), in denen Sie genau bestimmen, was die Website sein soll — welchen Inhalt und welche Funktionalität sie haben sollte, wie sie aussehen soll usw. Zu diesem Zeitpunkt möchten Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Seite haben — was ist ihr Zeitrahmen und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden hier nicht weiter ins Detail gehen, aber Cross-Browser-Probleme können einen ernsthaften Einfluss auf eine solche Planung haben.

Sobald Sie eine Vorstellung von den benötigten Funktionen haben und wissen, mit welchen Technologien Sie diese Funktionen möglicherweise implementieren werden, sollten Sie damit beginnen, das Zielpublikum zu erkunden — welche Browser, Geräte usw. wird das Zielpublikum für diese Seite verwenden? Der Kunde hat möglicherweise bereits Daten hierzu aus früheren Recherchen, die er durchgeführt hat, z. B. von anderen Websites, die er besitzt, oder von früheren Versionen der Website, an der Sie jetzt arbeiten. Wenn nicht, können Sie eine gute Vorstellung gewinnen, indem Sie andere Quellen prüfen, wie z. B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Seite bedienen wird. Sie können auch ein wenig Intuition verwenden.

Angenommen, Sie bauen beispielsweise eine E-Commerce-Website, die Kunden in Nordamerika bedient. Die Seite sollte vollständig in den letzten Versionen der beliebtesten Desktop- und Mobilbrowser funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf der gleichen Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen. Sie sollte auch mit der WCAG AA-Konformität zugänglich sein.

Jetzt kennen Sie Ihre Ziel-Testplattformen und sollten die erforderlichen Funktionalitäten und Technologien, die Sie verwenden möchten, überprüfen. Beispielsweise, wenn der E-Commerce-Website-Inhaber einen WebGL-gestützten 3D-Rundgang jedes Produkts in die Produktseiten einbauen möchte, müssen sie akzeptieren, dass dies einfach nicht in allen älteren Browserversionen funktionieren wird.

Sie sollten eine Liste von potenziellen Problembereichen zusammenstellen.

> [!NOTE]
> Sie können Kompatibilitätsinformationen zu Browsern für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN nachschlagen - genau auf der Seite, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für einige weitere nützliche Details.

Sobald Sie sich über diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsprozess usw. Sie könnten diese dann weiter unterteilen — ein gemeinsames Website-Header und Footer implementieren, Detailansicht der Produktseite implementieren, beständige Einkaufswagen-Widgets implementieren usw.

Es gibt mehrere allgemeine Strategien für die Entwicklung über mehrere Browser hinweg, zum Beispiel:

- Die gesamte Funktionalität so nah wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann das Schreiben verschiedener Codepfade, die Funktionalität auf unterschiedliche Weise für unterschiedliche Browser reproduzieren, das Verwenden eines {{Glossary("Polyfill", "Polyfills")}} beinhalten, um fehlende Unterstützung mit JavaScript oder anderen Technologien nachzuahmen, oder eine Bibliothek verwenden, die es ermöglicht, einen einzigen Code zu schreiben, und dann im Hintergrund abhängig davon, was der Browser unterstützt, unterschiedliche Dinge tun.
- Akzeptieren, dass einige Dinge nicht gleich in allen Browsern funktionieren, und unterschiedliche (akzeptable) Lösungen in Browsern bieten, die die vollständige Funktionalität nicht unterstützen. Manchmal ist dies aufgrund von Gerätebeschränkungen unumgänglich — ein Kino-Breitbildschirm wird nicht die gleiche visuelle Erfahrung bieten wie ein 4-Zoll-Mobilscreen, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach in einigen älteren Browsern nicht funktionieren wird, und weitermachen. Dies ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis ist damit einverstanden.

Normalerweise umfasst Ihre Entwicklung eine Kombination der oben genannten drei Ansätze. Das Wichtigste ist, dass Sie jede kleine Komponente testen, bevor Sie sie festschreiben — lassen Sie nicht alle Tests bis zum Schluss!

### Testen/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zunächst sollten Sie sicherstellen, dass keine allgemeinen Probleme mit Ihrem Code vorliegen, die Ihre Funktion daran hindern:

1. Testen Sie es in einigen stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einen lo-fi Barrierefreiheitstest durch, z. B. versuchen Sie, Ihre Website nur mit der Tastatur zu verwenden oder Ihre Website über einen Screenreader zu navigieren, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie Ihre Liste der Testbrowser auf eine vollständige Liste von Zielgruppenbrowsern erweitern und beginnen, sich auf die Ausmerzung von Cross-Browser-Problemen zu konzentrieren (siehe den nächsten Artikel für weitere Informationen zu [Bestimmung Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Beispielsweise:

- Versuchen Sie, die neuesten Änderungen in allen modernen Desktop-Browsern zu testen, die Sie können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf dem Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Handy- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Ziel-Liste aufgenommen haben.

Die lo-fi Option besteht darin, alle Tests selbst durchzuführen (oder Teamkollegen einzubeziehen, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es auf echten physischen Geräten zu testen, wo es möglich ist.

Wenn Sie nicht die Mittel haben, all diese unterschiedlichen Browser-, Betriebssystem- und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren). Dies ist eine sehr beliebte Wahl, besonders in einigen Fällen — zum Beispiel ermöglicht Windows es Ihnen nicht, mehrere Versionen von Windows gleichzeitig auf derselben Maschine installiert zu haben, daher ist die Verwendung mehrerer virtueller Maschinen oft die einzige Option hier.

Eine andere Option sind Benutzergruppen — die Benutzung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Website zu testen. Dies könnte eine Gruppe von Freunden oder Familie sein, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professionelles Benutzertestsystem, bei dem Menschen dafür bezahlt werden, Ihre Website zu testen und Ergebnisse zu liefern.

Schließlich können Sie mit Ihrem Testen durch Audits oder Automatisierung intelligenter werden; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da all dieses Testen von Hand sehr lange dauern kann. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), das zum Beispiel Ihre Seite in einer Anzahl verschiedener Browser laden könnte, und:

- überprüfen, ob ein Klick auf einen Button erfolgreich etwas bewirkt (wie z. B. das Anzeigen einer Karte), die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind
- einen Screenshot von jedem machen, um zu sehen, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie Geld in das Testen investieren möchten, gibt es auch kommerzielle Tools, die einen Großteil der Einrichtung und des Testens für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen in der Regel einen kontinuierlichen Integrationsworkflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code Repository eingereicht werden dürfen.

#### Testen auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders wichtig, wenn Sie sehr neue Technologien auf Ihrer Seite verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Fehlerbehebungen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was zu tun ist, ist, den Ort des Fehlers so weit wie möglich einzugrenzen. Holen Sie sich so viele Informationen wie möglich von der Person, die den Fehler meldet — welches/welche Plattform(en), Gerät(e), Browserversion(en) usw. Versuchen Sie es auf ähnlichen Konfigurationen (z. B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen des gleichen Browsers auf derselben Plattform), um zu sehen, wie weit verbreitet der Fehler ist.

Es könnte nicht Ihr Fehler sein — wenn ein Fehler in einem Browser existiert, dann wird der Anbieter ihn hoffentlich schnell beheben. Er könnte bereits behoben worden sein — zum Beispiel, wenn ein Fehler in Firefox Version 49 vorliegt, aber in Firefox Nightly (Version 52) nicht mehr vorhanden ist, dann wurde er behoben. Wenn er nicht behoben ist, möchten Sie möglicherweise einen Fehler melden (siehe [Fehler melden](#fehler_melden), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Das Finden der Ursache des Fehlers folgt derselben Strategie wie bei jedem anderen Webentwicklungsfehler (siehe wiederum [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Fehlersuche in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem speziellen Browser, in dem das Problem auftritt, umgehen — Sie können den problematischen Code nicht einfach ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz besteht normalerweise darin, den Code auf irgendeine Weise zu verzweigen, zum Beispiel JavaScript-Funktionsdetektion zu verwenden, um Situationen zu erkennen, in denen eine problematische Funktion nicht funktioniert, und in diesen Fällen, in denen es funktioniert, einen anderen Code auszuführen.

Sobald ein Fix vorgenommen wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihr Fix in Ordnung ist und die Seite nicht an anderen Stellen oder in anderen Browsern gebrochen hat.

## Fehler melden

Um das oben Gesagte nochmals zu wiederholen: Wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte zum Cross-Browser-Testing vermittelt haben. Mit diesem Wissen sind Sie nun bereit, weiterzumachen und mehr über Cross-Browser-Testing-Strategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
