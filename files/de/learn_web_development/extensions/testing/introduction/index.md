---
title: Einführung in Cross-Browser-Tests
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über Cross-Browser-Tests: was das ist, einige häufige Probleme und einige Ansätze zum Debuggen und zur Fehlerbehebung.

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
        Ein Verständnis für die grundlegenden Konzepte im Zusammenhang mit Cross-Browser-Tests zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Cross-Browser-Tests?

Cross-Browser-Tests sind die Praxis, sicherzustellen, dass eine Website über verschiedene Browser und Geräte hinweg funktioniert. Web-Entwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Features unterstützen.
- Verschiedene Geräte, von Desktops und Laptops über Tablets und Smartphones bis hin zu Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screenreader angewiesen sind oder nur die Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind – nur weil Ihre Website auf Ihrem MacBook Pro oder einem High-End-Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Nutzer funktioniert!

> [!NOTE]
> [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) behandelt die verschiedenen Browser, deren Marktanteil und damit verbundene Cross-Browser-Kompatibilitätsprobleme.

Websites sollten über verschiedene Browser und Geräte hinweg zugänglich sein, und für Menschen mit Behinderungen (z. B. screenreaderfreundlich). Eine Website muss nicht dieselbe Erfahrung auf allen Browsern und Geräten bieten, solange die Kernfunktionen in irgendeiner Weise zugänglich sind. So könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes haben, während ältere Browser nur ein flaches Grafikbild mit derselben Information anzeigen.

Es ist auch nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Web-Entwickler mit dem Website-Besitzer eine Vereinbarung über die Bandbreite der Browser und Geräte treffen, auf denen der Code funktionieren wird.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge auf verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie sich überhaupt mit Cross-Browser-Problemen befassen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Fehlerbehebung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus vorherigen Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Cross-Browser-Probleme treten häufig auf, weil:

- manchmal Browser Fehler haben oder Funktionen unterschiedlich implementieren. Diese Situation ist nicht mehr so schlimm, wie sie es früher war; als IE4 und Netscape 4 in den 1990er Jahren um die Dominanz als Browser kämpften, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um einen Wettbewerbsvorteil zu erlangen, was den Entwicklern das Leben zur Hölle machte. Heutzutage sind Browser viel besser darin, Standards zu folgen, aber Unterschiede und Fehler schleichen sich manchmal immer noch ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für Technologiefunktionen haben als andere. Das ist unvermeidlich, wenn Sie mit innovativen Funktionen zu tun haben, die Browser gerade umzusetzen beginnen, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden, die möglicherweise eingefroren sind (d.h. es wird keine neue Arbeit mehr an ihnen durchgeführt), lange bevor eine neue Funktion überhaupt erfunden wurde. Wenn Sie beispielsweise hochmoderne JavaScript-Funktionen in Ihrer Website verwenden möchten, funktionieren sie möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, müssen Sie möglicherweise darauf verzichten, diese zu verwenden, oder Ihren Code bei Bedarf mit einem Cross-Compiler in altmodische Syntax umwandeln.
- einige Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Website beispielsweise so gestaltet ist, dass sie auf einem Desktop-PC gut aussieht, wird sie auf einem mobilen Gerät wahrscheinlich winzig und schwer lesbar sein. Wenn Ihre Website eine Menge großer Animationen enthält, könnte das auf einem leistungsstarken Tablet in Ordnung sein, auf einem Low-End-Gerät jedoch möglicherweise träge oder ruckelig.

…und noch mehr Gründe.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme erkunden und Lösungen dafür betrachten.

## Workflows für Cross-Browser-Tests

All diese Cross-Browser-Testaufgaben mögen zeitaufwändig und beängstigend erscheinen, aber das muss nicht so sein – Sie müssen nur sorgfältig dafür planen und sicherstellen, dass Sie genug an den richtigen Stellen testen, um keine unerwarteten Probleme zu bekommen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihre Zielgruppe funktionieren und dass neue Ergänzungen zum Code keine alten Funktionen, die zuvor funktionierten, beeinträchtigen.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, sind die aufgedeckten Bugs viel teurer und zeitaufwändiger zu beheben, als wenn Sie sie aufdecken und beheben, während Sie voranschreiten.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt kann ungefähr in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob – verschiedene Personen machen Dinge möglicherweise ganz anders):

**Erste Planung** > **Entwicklung** > **Tests/Entdeckungen** > **Fehlerbehebungen/Iterationen**

Schritte 2–4 werden so oft wie nötig wiederholt, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in späteren Artikeln viel detaillierter betrachten, aber für jetzt fassen wir zusammen, was in jedem Schritt passieren kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Website-Besitzer/Kunden haben (das könnte Ihr Chef sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen), in denen genau festgelegt wird, was die Website sein soll – welche Inhalte und Funktionen sie haben soll, wie sie aussehen soll, etc. Zu diesem Zeitpunkt sollten Sie auch wissen, wie viel Zeit Sie haben, um die Website zu entwickeln – was ist ihre Deadline, und wie viel werden sie Ihnen für Ihre Arbeit zahlen? Wir werden nicht näher auf dieses Thema eingehen, aber Cross-Browser-Probleme können eine ernsthafte Auswirkung auf solche Planungen haben.

Sobald Sie eine Vorstellung von den erforderlichen Funktionen und den Technologien, mit denen Sie diese Funktionen wahrscheinlich entwickeln werden, haben, sollten Sie beginnen, die Zielgruppe zu erkunden – welche Browser, Geräte, etc. wird die Zielgruppe dieser Website verwenden? Der Kunde hat möglicherweise bereits Daten dazu aus früheren Forschungen, die er durchgeführt hat, z. B. von anderen Websites, die er besitzt, oder von früheren Versionen der Website, an der Sie jetzt arbeiten. Falls nicht, Sie können eine gute Vorstellung davon bekommen, indem Sie andere Quellen betrachten, wie z. B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Website bedienen wird. Auch ein wenig Intuition kann dabei helfen.

So könnten Sie beispielsweise eine E-Commerce-Website für Kunden in Nordamerika erstellen. Die Website sollte in den letzten Versionen der beliebtesten Desktop- und mobilen Browser vollständig funktionieren – dazu sollten Chrome (und Edge, Opera, da sie auf derselben Rendering-Engine wie Chrome basieren), Firefox und Safari gehören. Außerdem sollte sie mit WCAG AA-Konformität zugänglich sein.

Jetzt kennen Sie Ihre Zieltest-Plattformen und sollten die Anforderungen an den Funktionsumfang und die Technologien, die Sie verwenden werden, erneut überprüfen.
Wenn der E-Commerce-Website-Besitzer beispielsweise einen WebGL-gestützten 3D-Rundgang für jedes Produkt auf den Produktseiten eingebaut haben möchte, muss er akzeptieren, dass dies in allen älteren Browserversionen einfach nicht funktioniert.

Sie sollten eine Liste der potenziellen Problemfelder erstellen.

> [!NOTE]
> Sie können Informationen zur Browser-Unterstützung von Technologien finden, indem Sie die verschiedenen Funktionen auf MDN nachschlagen — der Website, auf der Sie sich gerade befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für einige weitere nützliche Details.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module unterteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsablauf, etc. Diese könnten Sie dann weiter unterteilen — eine gemeinsame Website-Kopf- und Fußzeile implementieren, Implementierung der Detailansicht der Produktseite, Implementierung eines persistenten Einkaufswagen-Widgets, etc.

Es gibt mehrere allgemeine Strategien für die Cross-Browser-Entwicklung, zum Beispiel:

- Alle Funktionalitäten so weit wie möglich in allen Zielbrowsern zum Laufen bringen. Dies erfordert möglicherweise das Schreiben verschiedener Codepfade, die die Funktionalität auf unterschiedliche Weise für verschiedene Browser reproduzieren, oder die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}, um fehlende Unterstützung mithilfe von JavaScript oder anderen Technologien nachzuahmen, oder die Nutzung einer Bibliothek, die es Ihnen ermöglicht, eine einzelne Codezeile zu schreiben und dann im Hintergrund unterschiedliche Dinge je nach Browserunterstützung zu tun.
- Akzeptieren, dass einige Dinge nicht in allen Browsern gleich funktionieren werden, und in Browsern, die die volle Funktionalität nicht unterstützen, unterschiedliche (akzeptable) Lösungen anbieten. Manchmal ist dies aufgrund von Geräteeinschränkungen unvermeidlich — ein Kino-Bildschirm mit Breitbild wird nicht das gleiche visuelle Erlebnis wie ein 4" mobiles Display bieten, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach in einigen älteren Browsern nicht funktioniert, und weitermachen. Das ist in Ordnung, sofern Ihr Kunde/Ihre Benutzerbasis damit einverstanden ist.

Normalerweise beinhaltet Ihre Entwicklung eine Kombination der oben genannten drei Ansätze. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn festschreiben — lassen Sie nicht alle Tests bis zum Schluss!

### Tests/Entdeckungen

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zuerst sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die dazu führen, dass Ihre Funktion nicht funktioniert:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Machen Sie einige einfache Barrierefreiheitstests, wie den Versuch, Ihre Website nur mit der Tastatur zu verwenden, oder das Navigieren Ihrer Website über einen Screenreader, um festzustellen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

Zu diesem Zeitpunkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als Nächstes sollten Sie Ihre Liste der Test-Browser auf eine vollständige Liste der Zielgruppenbrowser erweitern und beginnen, sich auf die Behebung von Cross-Browser-Problemen zu konzentrieren (siehe den nächsten Artikel für mehr Informationen zum [Bestimmen Ihrer Ziel-Browser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern zu testen, die Sie können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die einfachste Methode ist, alle Tests, die Sie können, selbst durchzuführen (wenn Sie in einem Team arbeiten, auch Teammitglieder einzubeziehen). Sie sollten versuchen, auf echten physischen Geräten zu testen, wo immer es möglich ist.

Wenn Sie nicht die Mittel haben, alle diese verschiedenen Browser, Betriebssysteme und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren). Dies ist eine sehr beliebte Wahl, insbesondere in einigen Szenarien — zum Beispiel erlaubt es Windows nicht, mehrere Versionen von Windows gleichzeitig auf demselben Computer zu installieren, daher sind mehrere virtuelle Maschinen oft die einzige Option hier.

Eine andere Möglichkeit sind Benutzergruppen — die Verwendung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams zum Testen Ihrer Website. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe von anderen Mitarbeitern, eine Klasse an einer lokalen Universität oder eine professionelle Benutzer-Testeinrichtung sein, bei der Menschen dafür bezahlt werden, Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie intelligenter testen, indem Sie Auditing- oder Automationstools verwenden; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da all diese Tests von Hand zu machen, sehr lange dauern kann. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), das zum Beispiel Ihre Website in einer Reihe von verschiedenen Browsern laden könnte, und:

- prüfen, ob ein Mausklick erfolgreich etwas bewirkt (z. B. eine Karte anzeigt), und die Ergebnisse anzeigen, nachdem die Tests abgeschlossen sind.
- einen Screenshot von jedem erstellen, sodass Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie bereit sind, Geld in Tests zu investieren, gibt es auch kommerzielle Tools, die viele der Einrichtung und Tests für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen in der Regel einen {{Glossary("continuous_integration", "Continuous Integration")}} Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Tests auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
- [Microsoft Edge Insider](https://explore.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien auf Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten freigegebenen Version eines Browsers stoßen und feststellen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Fehlerbehebungen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was Sie tun sollten, ist, den Bereich, in dem der Fehler auftritt, so weit wie möglich einzugrenzen. Beschaffen Sie sich so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en), etc. Versuchen Sie es mit ähnlichen Konfigurationen (z. B. derselbe Browser auf verschiedenen Desktop-Plattformen oder einige verschiedene Versionen desselben Browsers auf derselben Plattform), um festzustellen, wie weit verbreitet der Fehler ist.

Vielleicht ist es nicht Ihr Fehler — wenn ein Fehler in einem Browser vorhanden ist, wird der Anbieter ihn hoffentlich schnell beheben. Er könnte bereits behoben sein — wenn beispielsweise ein Fehler in Firefox-Version 49 vorhanden ist, aber in Firefox Nightly (Version 52) nicht mehr, wurde er behoben. Wenn er nicht behoben ist, möchten Sie möglicherweise einen Fehler melden (siehe [Fehlermeldung](#fehlermeldung), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Fehlers herauszufinden, erfordert dieselbe Strategie wie bei jedem Webentwicklungsfehler (siehe auch [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Fehlerbehebung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was den Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser, in dem er Probleme verursacht, umgehen — Sie können den Problemcode nicht einfach komplett ändern, da dies den Code in anderen Browsern ebenfalls beschädigen könnte. Der allgemeine Ansatz ist normalerweise, den Code in irgendeiner Weise zu teilen, z. B. JavaScript-Feature-Erkennungscode zu verwenden, um Situationen zu erkennen, in denen eine Problemfunktion nicht funktioniert, und in diesen Fällen einen anderen Code auszuführen, der funktioniert.

Sobald eine Behebung erfolgt ist, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Behebung in Ordnung ist und die Website nicht an anderen Stellen oder in anderen Browsern kaputtgegangen ist.

## Fehlermeldung

Um zu wiederholen, was oben gesagt wurde, wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte im Bereich Cross-Browser-Tests vermittelt haben. Mit diesem Wissen sind Sie bereit, fortzufahren und mehr über Cross-Browser-Teststrategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
