---
title: Einführung in das plattformübergreifende Testen
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel bietet einen Überblick über das plattformübergreifende Testen: was es ist, einige häufige Probleme und Ansätze zum Debugging/Fehlerbehebung.

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
        Ein Verständnis der hochrangigen Konzepte des plattformübergreifenden Testens zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist plattformübergreifendes Testen?

Plattformübergreifendes Testen ist die Praxis, sicherzustellen, dass eine Website auf verschiedenen Browsern und Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, inklusive leicht älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Unterschiedliche Geräte von Desktops und Laptops bis hin zu Tablets und Smartphones sowie Smart-TVs mit unterschiedlichen Hardware-Fähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Bildschirmlesegeräte angewiesen sein könnten oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind — nur weil Ihre Seite auf Ihrem MacBook Pro oder hochmodernen Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Benutzer funktionieren wird!

> [!NOTE]
> [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) behandelt die verschiedenen Browser, ihren Marktanteil und damit verbundene plattformübergreifende Kompatibilitätsprobleme.

Websites sollten über verschiedene Browser und Geräte sowie für Menschen mit Behinderungen (z.B. Bildschirmleser-freundlich) zugänglich sein. Eine Site muss nicht unbedingt das gleiche Erlebnis auf allen Browsern und Geräten bieten, solange die Kernfunktionen in irgendeiner Weise zugänglich sind. Zum Beispiel könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes darstellen, während ältere Browser nur eine flache Grafik mit denselben Informationen zeigen.

Es ist außerdem nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, sodass ein Webentwickler mit dem Website-Besitzer eine Vereinbarung über die Browser und Geräte treffen sollte, auf denen der Code funktionieren wird.

## Warum treten plattformübergreifende Probleme auf?

Es gibt viele verschiedene Gründe, warum plattformübergreifende Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browser-Einstellungen unterschiedlich verhalten. Bevor Sie überhaupt zu plattformübergreifenden Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS), und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus den vorherigen Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Plattformübergreifende Probleme treten häufig auf, weil:

- manchmal Browser Bugs haben oder Funktionen unterschiedlich implementieren. Diese Situation ist viel weniger schlimm als früher; als IE4 und Netscape 4 in den 1990er Jahren darum kämpften, der dominierende Browser zu sein, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben der Entwickler zur Hölle machte. Browser sind heutzutage viel besser darin, Standards zu befolgen, aber Unterschiede und Bugs schleichen sich manchmal immer noch ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsebenen für technische Funktionen haben als andere. Dies ist unvermeidlich, wenn Sie es mit Spitzentechnologien zu tun haben, die Browser gerade implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden, und die möglicherweise eingefroren wurden (d.h. es wird keine neue Arbeit mehr daran gemacht), lange bevor eine neue Funktion erfunden wurde. Zum Beispiel, wenn Sie Spitzentechnologien in JavaScript in Ihrer Website verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, können Sie diese Funktionen möglicherweise nicht verwenden oder Ihren Code in veraltete Syntax mit einem Cross-Compiler umwandeln, wo erforderlich.
- einige Geräte Einschränkungen haben, die eine Website langsam laufen lassen oder schlecht anzeigen. Zum Beispiel, wenn eine Seite so gestaltet ist, dass sie auf einem Desktop-PC gut aussieht, wird sie wahrscheinlich klein und schwer lesbar auf einem mobilen Gerät sein. Wenn Ihre Seite viele große Animationen enthält, könnte es auf einem hochentwickelten Tablet in Ordnung sein, aber träge oder ruckelig auf einem Gerät mit geringem Leistungsumfang.

…und viele weitere Gründe.

In späteren Artikeln werden wir häufige plattformübergreifende Probleme untersuchen und Lösungen dafür finden.

## Arbeitsabläufe für plattformübergreifendes Testen

Dieser ganze plattformübergreifende Testprozess mag zeitaufwändig und beängstigend klingen, aber das muss nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie an den richtigen Stellen genügend Tests durchführen, um sicherzustellen, dass Sie nicht auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihre Zielgruppe funktionieren und dass neue Ergänzungen des Codes keine alten Funktionen unterbrechen, die zuvor funktionierten.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, werden alle Fehler, die Sie entdecken, viel teurer und zeitaufwändiger zu beheben sein, als wenn Sie sie schrittweise aufdecken und beheben.

Der Arbeitsablauf für Tests und Fehlerbehebungen in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen können Dinge ziemlich anders machen als dies):

**Erste Planung** > **Entwicklung** > **Test/Entdeckung** > **Behebungen/Iteration**

Die Schritte 2–4 werden tendenziell so oft wiederholt, wie nötig, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in späteren Artikeln viel genauer betrachten, aber für den Moment fassen wir zusammen, was in jedem Schritt vorkommen kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Website-Besitzer/Kunden haben (dies könnte Ihr Chef sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen), bei denen Sie genau bestimmen, was die Website sein soll — welche Inhalte und Funktionen sie haben soll, wie sie aussehen soll, usw. Zu diesem Zeitpunkt möchten Sie auch wissen, wie viel Zeit Sie zur Entwicklung der Website haben — was ist ihre Deadline, und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden hier nicht ins Detail gehen, aber plattformübergreifende Probleme können solche Planungsdetails erheblich beeinflussen.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang haben und mit welchen Technologien Sie diese Funktionen wahrscheinlich entwickeln werden, sollten Sie anfangen, die Zielgruppe zu erkunden — welche Browser, Geräte, etc. wird die Zielgruppe dieser Website verwenden? Der Kunde hat möglicherweise bereits Daten darüber aus vorherigen Untersuchungen, die sie durchgeführt haben, z.B. von anderen Websites, die sie besitzen, oder von früheren Versionen der Website, an der Sie jetzt arbeiten. Wenn nicht, werden Sie eine gute Vorstellung davon bekommen, indem Sie andere Quellen betrachten, wie z.B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Website bedienen wird. Sie können auch ein wenig Intuition verwenden.

Zum Beispiel könnten Sie eine E-Commerce-Website erstellen, die Kunden in Nordamerika bedient. Die Website sollte vollständig in den letzten Versionen der beliebtesten Desktop- und mobilen Browser funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf derselben Rendering-Engine wie Chrome basieren), Firefox und Safari beinhalten.
Sie sollte auch mit WCAG AA Konformität zugänglich sein.

Nun, da Sie Ihre Ziel-Testplattformen kennen, sollten Sie zurückgehen und den erforderlichen Funktionsumfang und die Technologien, die Sie verwenden werden, überprüfen.
Zum Beispiel, wenn der Besitzer der E-Commerce-Website eine durch WebGL unterstützte 3D-Tour jedes Produkts in den Produktseiten eingebaut haben möchte, müssen sie akzeptieren, dass dies einfach nicht in allen alten Browserversionen funktioniert.

Sie sollten eine Liste der potenziellen Problemfelder zusammenstellen.

> [!NOTE]
> Sie können Informationen zur Browser-Unterstützung für Technologien finden, indem Sie die verschiedenen Features auf MDN — der Seite, auf der Sie sich befinden! — nachschlagen. Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, um einige weitere nützliche Details zu erhalten.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module unterteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsworkflow usw. Sie könnten diese dann weiter unterteilen — ein gemeinsames Kopf- und Fußzeilenmodul implementieren, Produktseite Detailansicht implementieren, persistenten Einkaufswagen-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien für die plattformübergreifende Entwicklung, zum Beispiel:

- Alle Funktionen so nah wie möglich in allen Ziel-Browsern zum Laufen bringen. Dies kann bedeuten, unterschiedliche Code-Pfade zu schreiben, die Funktionen auf unterschiedliche Weisen reproduzieren, die auf verschiedene Browser abzielen, oder ein {{Glossary("Polyfill", "Polyfill")}} zu verwenden, um fehlende Unterstützung mit JavaScript oder anderen Technologien zu simulieren, oder eine Bibliothek zu verwenden, die Ihnen erlaubt, ein einziges Stück Code zu schreiben, und dann im Hintergrund je nach dem, was der Browser unterstützt, unterschiedliche Dinge ausführt.
- Akzeptieren, dass einige Dinge nicht gleich auf allen Browsern funktionieren werden, und verschiedene (akzeptable) Lösungen in Browsern bieten, die die volle Funktionalität nicht unterstützen. Manchmal ist dies unvermeidlich aufgrund von Geräteeinschränkungen — ein Kinoleinwand wird nicht das gleiche visuelle Erlebnis bieten wie ein 4" Mobilbildschirm, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach nicht in einigen älteren Browsern funktionieren wird, und weitermachen. Das ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis ist damit einverstanden.

Normalerweise wird Ihre Entwicklung eine Kombination der oben genannten drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn übernehmen — lassen Sie nicht alle Tests bis zum Ende!

### Test/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zunächst sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die verhindern, dass Ihre Funktion funktioniert:

1. Testen Sie sie in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige einfache Barrierefreiheitstests durch, wie z.B. den Versuch, Ihre Website nur mit der Tastatur zu nutzen, oder Ihre Website über einen Bildschirmleser zu verwenden, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

Zu diesem Zeitpunkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie Ihre Liste von Test-Browsern auf eine vollständige Liste der Zielgruppen-Browser erweitern und anfangen, sich auf die Beseitigung plattformübergreifender Probleme zu konzentrieren (siehe den nächsten Artikel für weitere Informationen zur [Bestimmung Ihrer Ziel-Browser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern, die Sie können, zu testen — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (Mac, Windows und Linux, idealerweise).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z.B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie auf Ihrer Zielliste enthalten haben.

Die am wenigsten aufwendige Option ist, einfach alle Tests, die Sie können, selbst durchzuführen (ziehen Sie Teammitglieder hinzu, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es auf realen physischen Geräten zu testen, wo immer möglich.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser-, Betriebssystem- und Geräte-Kombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Software-Kombinationen auf Ihrem Desktop-Computer zu emulieren). Dies ist eine sehr beliebte Wahl, besonders in einigen Situationen — zum Beispiel lässt Windows nicht zu, dass Sie mehrere Versionen von Windows gleichzeitig auf derselben Maschine installiert haben, daher ist die Verwendung mehrerer virtueller Maschinen hier oft die einzige Option.

Eine andere Option sind Benutzergruppen — eine Gruppe von Personen außerhalb Ihres Entwicklerteams verwenden, um Ihre Website zu testen. Dies könnte eine Gruppe von Freunden oder Familie sein, eine Gruppe von anderen Mitarbeitern, eine Klasse an einer lokalen Universität, oder ein professionelles Benutzer-Test-Setup, bei dem Personen bezahlt werden, um Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie mit Ihrer Teststrategie cleverer werden, indem Sie Auditing oder Automatisierungstools verwenden; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da das manuelle Testen wirklich lange dauern kann. Sie können Ihr eigenes Test-Automatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), das zum Beispiel Ihre Website in einer Reihe von verschiedenen Browsern laden könnte und:

- feststellen, ob ein Mausklick erfolgreich etwas auslöst (beispielsweise eine Karte anzeigt) und die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind
- ein Screenshot von jedem machen, um zu sehen, ob ein Layout über die verschiedenen Browser hinweg konsistent ist.

Wenn Sie bereit sind, in Tests zu investieren, gibt es auch kommerzielle Tools, die einen Großteil der Einrichtung und Tests für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen in der Regel einen kontinuierlichen Integrations-Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository aufgenommen werden dürfen.

#### Testen auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders relevant, wenn Sie sehr neue Technologien in Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten oder wenn Sie auf einen Fehler in der neuesten Veröffentlichungsversion eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Behebungen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das Erste, was zu tun ist, ist die fehlerhafte Stelle so weit wie möglich einzugrenzen. Holen Sie so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Versuchen Sie es auf ähnlichen Konfigurationen (z.B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit sich der Fehler durchsetzt.

Es könnte nicht Ihr Fehler sein — wenn in einem Browser ein Bug existiert, wird der Anbieter hoffentlich schnell Abhilfe schaffen. Möglicherweise wurde es bereits behoben — zum Beispiel, wenn ein Bug in Firefox Version 49 vorhanden ist, aber in Firefox Nightly (Version 52) nicht mehr auftaucht, dann wurde er behoben. Wenn es nicht behoben ist, möchten Sie möglicherweise einen Bug melden (siehe [Fehler berichten](#fehler_melden) unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Das Herausfinden der Ursache des Bets riguarda hiss hätte schauen necess into bleibendes Strategie wie bitte so bisher her Entwicklung Bug (wieder £rchela tweak [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML]), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS]), und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong])). Wenn Sie herausgefunden haben, was Ihren Bug verursacht, müssen Sie entscheiden, wie Sie ihn in dem spezifischen Browser umgehen, indem

Problemcode nicht bereit ergibt brechen werden in anderen Browsers. Der allgemeine Ansatz besteht normalerweise darin, den Code in gewisser Weise zu trennen, beispielsweise Feature-Erkennungs-Code in JavaScript zu verwenden, um Situationen zu erkennen, in denen eine Problemfunktion nicht funktioniert, und dann in den Fällen, die funktionieren, anderen Code auszuführen.

Sobald eine Lösung gefunden wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Lösung in Ordnung ist und die Website nicht an anderen Stellen oder in anderen Browsern gebrochen hat.

## Fehler melden

Nur zur Wiederholung dessen, was oben gesagt wurde, wenn Sie Fehler in Browsern entdecken, sollten Sie diese berichten:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte gegeben haben, die Sie über plattformübergreifendes Testen wissen müssen. Mit diesem Wissen sind Sie jetzt bereit, weiterzumachen und mehr über plattformübergreifende Teststrategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
