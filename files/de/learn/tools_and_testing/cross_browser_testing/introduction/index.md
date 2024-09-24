---
title: Einführung in die plattformübergreifende Browser-Testung
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel gibt einen Überblick über die plattformübergreifende Browser-Testung: Was plattformübergreifende Tests sind, einige häufige Probleme und einige Ansätze zur Fehlerbehebung.

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
        Ein Verständnis der allgemeinen Konzepte im Zusammenhang mit plattformübergreifenden Tests zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist plattformübergreifende Browser-Testung?

Plattformübergreifende Browser-Testung ist die Praxis, sicherzustellen, dass eine Website auf verschiedenen Browsern und Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Features unterstützen.
- Verschiedene Geräte, von Desktops und Laptops über Tablets und Smartphones bis hin zu Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Bildschirmleser angewiesen sein könnten oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind — nur weil Ihre Website auf Ihrem MacBook Pro oder High-End Galaxy Nexus funktioniert, heißt das nicht, dass sie für alle Ihre Nutzer funktioniert!

> **Hinweis:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die verschiedenen Browser, ihre Marktanteile und verwandte plattformübergreifende Kompatibilitätsprobleme.

Websites sollten über verschiedene Browser und Geräte hinweg zugänglich sein und auch für Menschen mit Behinderungen (z. B. Bildschirmleser-freundlich) verfügbar sein. Eine Website muss nicht in allen Browsern und auf allen Geräten exakt dasselbe Erlebnis bieten, solange die Kernfunktionalität auf irgendeine Weise zugänglich ist. Beispielsweise könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes haben, während ältere Browser nur eine flache Grafik mit denselben Informationen anzeigen könnten.

Außerdem ist es nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert. Ein Webentwickler sollte daher mit dem Website-Besitzer die Bandbreite der Browser und Geräte vereinbaren, auf denen der Code funktionieren soll.

## Warum treten plattformübergreifende Probleme auf?

Es gibt viele verschiedene Gründe, warum plattformübergreifende Probleme auftreten. Beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie überhaupt mit plattformübergreifenden Problemen konfrontiert werden, sollten Sie bereits die Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS), und [Was ist schiefgelaufen? Fehlersuche in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong), um Ihr Gedächtnis aufzufrischen, falls nötig).

Plattformübergreifende Probleme treten häufig auf, weil:

- Browser manchmal Fehler haben oder Features unterschiedlich implementieren. Diese Situation ist viel weniger schlimm als früher; zurück in den 1990er Jahren, als IE4 und Netscape 4 versuchten, der dominante Browser zu werden, setzten Browserfirmen bewusst unterschiedliche Implementierungen um, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben der Entwickler zur Hölle machte. Heutzutage folgen die Browser Standards viel besser, aber Unterschiede und Fehler schleichen sich manchmal dennoch ein.
- Einige Browser können unterschiedliche Unterstützungslevel für Technologie-Features aufweisen als andere. Dies ist unvermeidlich, wenn Sie mit modernsten Funktionen zu tun haben, die Browser gerade erst implementieren, oder wenn Sie sehr alte, nicht mehr weiterentwickelte Browser unterstützen müssen, die eingefroren wurden (d. h. keine neuen Arbeiten mehr an ihnen durchgeführt werden), lange bevor ein neues Feature überhaupt erfunden wurde. Wenn Sie beispielsweise modernste JavaScript-Features auf Ihrer Website nutzen möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, könnten Sie dazu gezwungen sein, diese nicht zu nutzen oder Ihren Code mit irgendeiner Art von Cross-Compiler bei Bedarf in altmodische Syntax zu konvertieren.
- Einige Geräte können Einschränkungen aufweisen, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Seite beispielsweise für ein schönes Erscheinungsbild auf einem Desktop-PC gestaltet wurde, sieht sie auf einem mobilen Gerät wahrscheinlich winzig aus und ist schwer zu lesen. Wenn Ihre Website viele große Animationen enthält, mag sie auf einem leistungsstarken Tablet in Ordnung sein, könnte aber auf einem minderwertigen Gerät träge oder ruckelig wirken.

...und weitere Gründe.

In späteren Artikeln werden wir uns mit häufigen plattformübergreifenden Problemen befassen und Lösungen dafür untersuchen.

## Workflows für plattformübergreifende Tests

All diese plattformübergreifende Testangelegenheit mag zeitaufwändig und beängstigend klingen, muss es aber nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie ausreichend Tests an den richtigen Stellen durchführen, um sicherzustellen, dass keine unerwarteten Probleme auftreten. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Features für Ihre Zielgruppe funktionieren und neue Ergänzungen im Code keine alten, zuvor funktionierenden Funktionen zerstören.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, werden alle Fehler, die Sie aufdecken, viel teurer und zeitaufwändiger zu beheben sein, als wenn Sie sie aufdecken und beheben, während Sie fortfahren.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt lässt sich grob in die folgenden vier Phasen unterteilen (dies ist nur sehr grob — verschiedene Personen können Dinge ganz anders machen):

**Initiale Planung** > **Entwicklung** > **Tests/Entdeckung** > **Korrekturen/Iteration**

Die Schritte 2–4 werden so oft wie nötig wiederholt, um die gesamte Implementierung abzuschließen. Wir werden uns die verschiedenen Teile des Testprozesses in den folgenden Artikeln viel genauer ansehen, aber vorerst fassen wir zusammen, was in jedem Schritt passieren kann.

### Initiale Planung

In der Anfangsphase der Planung werden Sie wahrscheinlich mehrere Planungsgespräche mit dem Website-Eigentümer/Klienten haben (das könnte Ihr Vorgesetzter oder jemand aus einem externen Unternehmen sein, für das Sie eine Website erstellen), in denen Sie genau festlegen, was die Website sein soll — welchen Inhalt und welche Funktionalität sie haben soll, wie sie aussehen soll usw. An diesem Punkt werden Sie auch wissen wollen, wie viel Zeit Sie haben, um die Website zu entwickeln — wie lautet ihre Frist und wie viel sind sie bereit, Ihnen für Ihre Arbeit zu zahlen? Wir werden nicht ins Detail gehen, aber plattformübergreifende Probleme können ernsthafte Auswirkungen auf solche Planungen haben.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang haben und wissen, welche Technologien Sie wahrscheinlich verwenden werden, sollten Sie damit beginnen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird die Zielgruppe dieser Website verwenden? Der Kunde könnte bereits über Daten aus vorherigen Forschungen verfügen, die sie durchgeführt haben, z. B. von anderen Websites, die sie besitzen, oder von früheren Versionen der gegenwärtigen Website, an der Sie arbeiten. Wenn nicht, können Sie eine Vorstellung gewinnen, indem Sie andere Quellen betrachten, z. B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Website bedienen wird. Sie können auch ein wenig Intuition verwenden.

Wenn Sie beispielsweise eine E-Commerce-Website erstellen, die Kunden in Nordamerika bedient, sollte die Website in den letzten Versionen der beliebtesten Desktop- und mobilen Browser vollständig funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf demselben Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen.
Sie sollte auch mit WCAG AA-Konformität zugänglich sein.

Wenn Sie nun Ihre Ziel-Testplattformen kennen, sollten Sie nochmal den erforderlichen Funktionsumfang und die zu verwendenden Technologien überprüfen.
Wenn der Eigentümer der E-Commerce-Site beispielsweise eine WebGL-gestützte 3D-Tour jedes Produkts in den Produktseiten möchte, müssen sie akzeptieren, dass dies in älteren Browserversionen einfach nicht funktioniert.

Sie sollten eine Liste der potenziellen Problembereiche zusammenstellen.

> [!NOTE]
> Sie können Informationen über die Unterstützung von Browsern für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN nachschlagen — die Seite, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, um weitere nützliche Details zu erhalten.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module teilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsablauf usw. Sie könnten diese dann weiter unterteilen — eine gemeinsame Kopf- und Fußzeile der Website implementieren, Detailansicht der Produktseite implementieren, persistentes Einkaufswagen-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien für die plattformübergreifende Entwicklung, zum Beispiel:

- Alle Funktionalitäten so nah wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann das Schreiben unterschiedlicher Codepfade beinhalten, die die Funktionalität auf unterschiedliche Weise für verschiedene Browser reproduzieren, oder verwenden Sie ein {{glossary("Polyfill")}}, um fehlende Unterstützung mit JavaScript oder anderen Technologien zu imitieren, oder verwenden Sie eine Bibliothek, die Ihnen erlaubt, ein einzelnes Stück Code zu schreiben und dann im Hintergrund je nach Browser unterschiedliche Dinge zu tun.
- Akzeptieren Sie, dass einige Dinge nicht auf allen Browsern gleich funktionieren werden, und bieten Sie in Browsern, die die volle Funktionalität nicht unterstützen, unterschiedliche (akzeptable) Lösungen an. Manchmal ist dies unvermeidlich aufgrund von Geräteeinschränkungen — ein Kinobreitbildschirm wird nicht das gleiche visuelle Erlebnis bieten wie ein 4"-Bildschirm eines Mobilgeräts, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren Sie, dass Ihre Website in einigen älteren Browsern einfach nicht funktionieren wird und gehen Sie weiter. Das ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis ist damit einverstanden.

Normalerweise wird Ihre Entwicklung eine Kombination der oben genannten drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jedes kleine Teil testen, bevor Sie es festschreiben — lassen Sie nicht alle Tests bis zum Ende!

### Tests/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zu Beginn sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die das Funktionieren Ihres Features verhindern:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige grundlegende Tests zur Barrierefreiheit durch, z. B. versuchen Sie, Ihre Website nur mit der Tastatur zu verwenden oder verwenden Sie Ihre Website mit einem Bildschirmleser, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, z. B. Android oder iOS.

An diesem Punkt beheben Sie eventuell gefundene Probleme mit Ihrem neuen Code.

Als nächstes sollten Sie versuchen, Ihre Liste der Testbrowser auf eine vollständige Liste der Zielgruppenbrowser auszuweiten und beginnen, sich auf das Beheben von plattformübergreifenden Problemen zu konzentrieren (siehe den nächsten Artikel für weitere Informationen zum [Bestimmen Ihrer Zielbrowser](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern zu testen, die Sie können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf dem Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Handy- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android).
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die einfachste Option ist, alle Tests selbst durchzuführen (Kollegen hinzuzuziehen, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es nach Möglichkeit auf realen physischen Geräten zu testen.

Wenn Sie nicht über die Möglichkeiten verfügen, all diese verschiedenen Browser, Betriebssysteme und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mittels Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, mit der Sie mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer emulieren können). Dies ist eine sehr beliebte Wahl, insbesondere in einigen Umständen — zum Beispiel erlaubt Windows es nicht, mehrere Versionen von Windows gleichzeitig auf demselben Gerät zu installieren, sodass die Verwendung mehrerer virtueller Maschinen oft die einzige Option ist.

Eine weitere Möglichkeit sind Benutzergruppen — die Verwendung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Website zu testen. Diese könnten eine Gruppe von Freunden oder Familienmitgliedern sein, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professionelles Benutzertest-Setup, bei dem Menschen dafür bezahlt werden, Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie Ihre Tests intelligenter gestalten, indem Sie Audit- oder Automatisierungstools verwenden; dies ist eine sinnvolle Wahl, da Ihre Projekte größer werden, da all diese Tests von Hand sehr lange dauern können. Sie können ein eigenes System für Testautomatisierung einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), das zum Beispiel Ihre Website in einer Reihe verschiedener Browser laden könnte, und:

- überprüfen, ob ein Klick auf einen Button erfolgreich etwas bewirkt (wie zum Beispiel das Anzeigen einer Karte) und die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind.
- einen Screenshot jeder Seite aufnehmen, damit Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie bereit sind, Geld für Tests zu investieren, gibt es auch kommerzielle Tools, die viel von der Einrichtung und den Tests für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglicht normalerweise einen kontinuierlichen Integrations-Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testen in Vorabversionen von Browsern

Es ist oft eine gute Idee, in Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/browsers/opera/developer)

Dies ist besonders wichtig, wenn Sie sehr neue Technologien auf Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten oder wenn Sie auf einen Fehler in der neuesten Release-Version eines Browsers stoßen und überprüfen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Korrekturen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was zu tun ist, ist den Ort, an dem der Fehler auftritt, zu verengen, so weit wie möglich. Sammeln Sie so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Testen Sie es auf ähnlichen Konfigurationen (z. B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit der Fehler auftritt.

Es könnte nicht Ihr Fehler sein — wenn ein Fehler in einem Browser vorliegt, wird der Anbieter ihn hoffentlich schnell beheben. Möglicherweise wurde er bereits behoben — wenn zum Beispiel ein Fehler in der Firefox-Release-Version 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann wurde er behoben. Wenn er nicht behoben wurde, könnten Sie einen Fehler melden wollen (siehe [Fehler melden](#fehler_melden), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Fehlers herauszufinden, beinhaltet dieselbe Strategie wie bei jedem Webentwicklungsfehler (siehe noch einmal [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) und [Was ist schiefgelaufen? Fehlersuche in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Fehler verursacht, müssen Sie entscheiden, wie Sie ihn im betreffenden Browser beheben, in dem er Probleme verursacht — Sie können den problematischen Code nicht einfach direkt ändern, da dies den Code in anderen Browsern beschädigen könnte. Der allgemeine Ansatz besteht normalerweise darin, den Code in irgendeiner Weise zu verzweigen, z. B. JavaScript-Feature-Erkennungscode zu verwenden, um Situationen zu erkennen, in denen ein Problemfeature nicht funktioniert, und in diesen Fällen, in denen es funktioniert, anderen Code auszuführen.

Sobald eine Korrektur vorgenommen wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Korrektur funktioniert und die Website in anderen Bereichen oder anderen Browsern nicht kaputt gemacht hat.

## Fehler melden

Um das Obige noch einmal zu wiederholen: Wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein umfassendes Verständnis der wichtigsten Konzepte vermittelt haben, die Sie über plattformübergreifende Tests wissen müssen. Mit diesem Wissen sind Sie nun bereit, weiterzugehen und Cross-Browser-Teststrategien zu lernen.

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}
