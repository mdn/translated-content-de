---
title: Einführung in das Cross-Browser-Testing
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel bietet einen Überblick über das Cross-Browser-Testing: Was Cross-Browser-Testing ist, einige häufige Probleme und einige Ansätze zum Debuggen/Fehlerbehebung.

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
        Ein Verständnis für die übergeordneten Konzepte, die beim Cross-Browser-Testing eine Rolle spielen, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops über Tablets und Smartphones bis hin zu Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die möglicherweise auf unterstützende Technologien wie Screenreader angewiesen sind oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind — nur weil Ihre Website auf Ihrem MacBook Pro oder einem hochmodernen Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Benutzer funktioniert!

> **Hinweis:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die verschiedenen Browser, deren Marktanteile und damit verbundene Cross-Browser-Kompatibilitätsprobleme.

Websites sollten in verschiedenen Browsern und auf verschiedenen Geräten sowie für Menschen mit Behinderungen zugänglich sein (z. B. Bildschirmleserfreundlich). Eine Webseite muss nicht auf allen Browsern und Geräten die exakt gleiche Erfahrung bieten, solange die Kernfunktionen auf irgendeine Weise zugänglich sind. Ein moderner Browser kann beispielsweise etwas Animiertes, 3D und Glänzendes haben, während ältere Browser möglicherweise nur eine flache Grafik mit denselben Informationen anzeigen.

Außerdem ist es nahezu unmöglich, dass eine Website in ALLEN Browsern und auf allen Geräten funktioniert, daher sollte ein Webentwickler mit dem Website-Eigentümer eine Vereinbarung darüber treffen, in welchem Bereich von Browsern und Geräten der Code funktionieren soll.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge über verschiedene Browser/Geräte/Browsereinstellungen hinweg unterschiedlich verhalten. Bevor Sie überhaupt zu Cross-Browser-Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) und [Was ging schief? Fehlerbehebung JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) aus früheren Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Cross-Browser-Probleme treten häufig auf, weil:

- manchmal Browser Bugs haben oder Funktionen unterschiedlich implementieren. Diese Situation ist viel weniger schlimm als früher; als in den 1990er Jahren IE4 und Netscape 4 um die Dominanz als führender Browser konkurrierten, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben von Entwicklern zur Hölle machte. Heutzutage halten sich Browser viel besser an Standards, dennoch schleichen sich manchmal Unterschiede und Bugs ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für technische Funktionen haben als andere. Dies ist unvermeidlich, wenn Sie mit hochmodernen Funktionen arbeiten, die Browser gerade erst implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr weiterentwickelt werden, und die eingefroren worden sein könnten (d. h. es wird keine neue Arbeit mehr daran erledigt), lange bevor ein neues Feature überhaupt erfunden wurde. Wenn Sie beispielsweise hochmoderne JavaScript-Funktionen auf Ihrer Website verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, sollten Sie diese Funktionen möglicherweise nicht verwenden oder Ihren Code bei Bedarf mit einer Art Quellcode-Compiler in eine ältere Syntax umwandeln.
- einige Geräte Einschränkungen haben können, die dazu führen, dass eine Website langsam läuft oder schlecht dargestellt wird. Wenn eine Website beispielsweise so gestaltet ist, dass sie auf einem Desktop-PC gut aussieht, wird sie auf einem mobilen Gerät wahrscheinlich winzig aussehen und schwer lesbar sein. Wenn Ihre Website eine Menge großer Animationen enthält, könnte sie auf einem Tablet mit hoher Leistung in Ordnung sein, jedoch könnte sie auf einem Gerät mit niedriger Leistung träge oder ruckelig sein.

…und noch mehr Gründe.

In späteren Artikeln werden wir uns mit häufig auftretenden Cross-Browser-Problemen und deren Lösungen beschäftigen.

## Workflows für Cross-Browser-Testing

Diese ganze Sache mit dem Cross-Browser-Testing mag zeitaufwendig und beängstigend klingen, aber das muss nicht sein — Sie müssen es nur sorgfältig planen und sicherstellen, dass Sie an den richtigen Stellen ausreichend testen, um unerwarteten Problemen vorzubeugen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und neue Ergänzungen zum Code keine alten Funktionen beeinträchtigen, die zuvor funktionierten.

Wenn Sie alle Tests bis zur Fertigstellung eines Projekts aufschieben, werden alle Bugs, die Sie aufdecken, deutlich teurer und zeitaufwendiger zu beheben sein, als wenn Sie sie frühzeitig aufdecken und beheben.

Der Workflow für Tests und Bugfixes in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (das ist nur sehr grob — unterschiedliche Personen können dies auf ganz unterschiedliche Weise tun):

**Erste Planung** > **Entwicklung** > **Tests/Entdeckung** > **Fixes/Iteration**

Die Schritte 2–4 werden so oft wiederholt, wie nötig, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in späteren Artikeln viel detaillierter betrachten, aber vorerst fassen wir zusammen, was in jedem Schritt vorkommen kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungsgespräche mit dem Eigentümer/Kunden der Website haben (dies könnte Ihr Chef sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen), in denen Sie feststellen, was die Website genau sein soll — welchen Inhalt und welche Funktionen sie haben soll, wie sie aussehen soll, usw. Zu diesem Zeitpunkt sollten Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Website haben — welcher Zeitrahmen ist geplant und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden hier nicht ins Detail gehen, aber Cross-Browser-Probleme können diese Planung ernsthaft beeinflussen.

Sobald Sie eine Vorstellung über den erforderlichen Funktionsumfang und die voraussichtlich verwendeten Technologien haben, sollten Sie beginnen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird die Zielgruppe dieser Website verwenden? Der Kunde hat möglicherweise bereits Daten dazu aus früheren Recherchen, die er durchgeführt hat, z. B. von anderen Websites, die ihm gehören, oder von früheren Versionen der Website, an der Sie jetzt arbeiten. Wenn nicht, können Sie sich eine gute Vorstellung verschaffen, indem Sie sich andere Quellen ansehen, wie z. B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Website bedienen wird. Sie können auch ein bisschen Intuition verwenden.

Wenn Sie also ein E-Commerce-Site bauen, die Kunden in Nordamerika bedient, sollte die Website in den letzten Versionen der beliebtesten Desktop- und mobilen Browser vollständig funktionieren — dazu sollten Chrome (und Edge, Opera, da sie auf derselben Render-Engine wie Chrome basieren), Firefox und Safari gehören.
Sie sollte auch mit WCAG AA-Konformität zugänglich sein.

Jetzt, da Sie Ihre Ziel-Testplattformen kennen, sollten Sie den erforderlichen Funktionsumfang und die Technologien, die Sie verwenden werden, erneut überprüfen.
Wenn der Eigentümer der E-Commerce-Website beispielsweise eine WebGL-gestützte 3D-Tour jedes Produkts in die Produktseiten eingebettet haben möchte, müssen sie akzeptieren, dass dies in allen nicht mehr unterstützten Browserversionen einfach nicht funktionieren wird.

Sie sollten eine Liste der potenziellen Problembereiche zusammenstellen.

> [!NOTE]
> Sie können Browser-Support-Informationen für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN — der Seite, auf der Sie sich befinden — nachschlagen! Sie sollten auch [caniuse.com](https://caniuse.com/) zu Rate ziehen, für einige weitere nützliche Details.

Sobald diese Details vereinbart sind, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module unterteilen, z. B. könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Warenkorb, Zahlungsablauf usw. Sie könnten diese dann weiter unterteilen — einen gemeinsamen Site-Header und Footer implementieren, Detailansicht der Produktseite implementieren, persistentes Warenkorb-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien zur Cross-Browser-Entwicklung, z. B.:

- Stellen Sie die gesamte Funktionalität so nah wie möglich in allen Zielbrowsern bereit. Dies kann das Schreiben verschiedener Codepfade beinhalten, die Funktionalität auf unterschiedliche Weise reproduzieren, die auf verschiedene Browser abzielen, oder die Verwendung eines [Polyfill](/de/docs/Glossary/Polyfill), um fehlende Unterstützung mit JavaScript oder anderen Technologien zu simulieren, oder die Verwendung einer Bibliothek, die es Ihnen ermöglicht, einen einzigen Codeabschnitt zu schreiben und im Hintergrund je nach Browser verschiedene Dinge ausführt.
- Akzeptieren Sie, dass einige Dinge nicht in allen Browsern gleich funktionieren werden, und bieten Sie in Browsern, die die volle Funktionalität nicht unterstützen, unterschiedliche (akzeptable) Lösungen an. Manchmal ist dies unvermeidlich aufgrund von Geräteeinschränkungen — ein Kinowidescreen wird nicht die gleiche visuelle Erfahrung bieten wie ein 4-Zoll-Mobiltelefonbildschirm, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren Sie, dass Ihre Website in einigen älteren Browsern einfach nicht funktionieren wird, und machen Sie weiter. Das ist in Ordnung, sofern Ihr Kunde/Ihre Benutzerbasis damit einverstanden ist.

Normalerweise beinhaltet Ihre Entwicklung eine Kombination aus den oben genannten drei Ansätzen. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn abschließen — lassen Sie alle Tests nicht bis zum Schluss!

### Tests/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zu Beginn sollten Sie sicherstellen, dass keine allgemeinen Probleme mit Ihrem Code bestehen, die Ihre Funktion vom Arbeiten abhalten:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige grundlegende Barrierefreiheitstests durch, z. B. versuchen Sie, Ihre Website nur mit der Tastatur zu verwenden, oder verwenden Sie Ihre Website über einen Screenreader, um zu sehen, ob sie navigierbar ist.
3. Testen Sie es auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie versuchen, Ihre Liste der Testbrowser auf eine vollständige Liste von Zielgruppen-Browsern zu erweitern und sich auf das Ausmerzen von Cross-Browser-Problemen zu konzentrieren (siehe den nächsten Artikel für weitere Informationen zur [Bestimmung Ihrer Zielbrowser](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern zu testen, die Sie können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf dem Desktop (ideal auf Mac, Windows und Linux).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die in Ihrer Zielliste enthalten sind.

Die einfachste Option ist, alle Tests, die Sie können, selbst durchzuführen (Kollegen zur Hilfe holen, wenn Sie im Team arbeiten). Sie sollten versuchen, es so weit wie möglich auf realen physischen Geräten zu testen.

Wenn Sie nicht die Mittel haben, all diese unterschiedlichen Browser-, Betriebssystem- und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mithilfe von Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren). Dies ist eine sehr beliebte Wahl, insbesondere in bestimmten Umständen — zum Beispiel lässt Windows es nicht zu, dass Sie mehrere Versionen von Windows gleichzeitig auf derselben Maschine installiert haben, sodass die Verwendung mehrerer virtueller Maschinen hier oft die einzige Option ist.

Eine weitere Option sind Benutzergruppen — die Verwendung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Website zu testen. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professioneller Benutzer-Test-Setup sein, bei dem Menschen bezahlt werden, um Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie intelligenter mit Ihren Tests umgehen, indem Sie Prüfungs- oder Automatisierungstools verwenden; das ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da das manuelle Testen viel Zeit in Anspruch nehmen kann. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl), das Ihre Website in einer Reihe von verschiedenen Browsern laden könnte, und:

- prüfen, ob ein Button-Klick etwas erfolgreich bewirkt (z. B. eine Karte anzeigt), und die Ergebnisse anzeigt, sobald die Tests abgeschlossen sind
- einen Screenshot von jedem erstellt und Ihnen ermöglicht zu sehen, ob ein Layout über die verschiedenen Browser hinweg konsistent ist.

Wenn Sie Geld in das Testen investieren möchten, gibt es auch kommerzielle Tools, die Ihnen viel von der Einrichtung und dem Testen abnehmen können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglicht normalerweise einen kontinuierlichen Integrationsworkflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository aufgenommen werden dürfen.

#### Tests in Vorabversionen von Browsern

Es ist oft eine gute Idee, Tests in Vorabversionen von Browsern durchzuführen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/browsers/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien auf Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Bug in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Entwickler den Bug in einer neueren Version behoben haben.

### Fixes/Iteration

Sobald Sie einen Bug entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das Erste, was zu tun ist, ist den Ort des Bugs so weit wie möglich einzugrenzen. Sammeln Sie so viele Informationen wie möglich von der Person, die den Bug meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Versuchen Sie es auf ähnlichen Konfigurationen (z. B. derselben Browserversion auf verschiedenen Desktopplattformen oder einigen verschiedenen Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit der Bug verbreitet ist.

Es könnte nicht Ihre Schuld sein — wenn ein Bug in einem Browser existiert, wird der Anbieter ihn hoffentlich schnell beheben. Möglicherweise wurde er bereits behoben — beispielsweise, wenn ein Bug in der Firefox-Version 49 vorhanden ist, aber in der Firefox Nightly-Version (Version 52) nicht mehr, dann haben sie ihn behoben. Wenn er nicht behoben ist, möchten Sie möglicherweise einen Bug melden (siehe [Melden von Bugs](#melden_von_bugs), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Das Finden der Ursache des Bugs folgt derselben Strategie wie bei jedem anderen Webentwicklungsbug (siehe nochmals [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) und [Was ging schief? Fehlerbehebung JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Bug verursacht, müssen Sie entscheiden, wie Sie ihn in dem spezifischen Browser umgehen, in dem er Probleme verursacht — Sie können nicht einfach den Problemcode vollständig ändern, da dies den Code in anderen Browsern zerstören kann. Der allgemeine Ansatz ist normalerweise, den Code in irgendeiner Weise zu verzweigen, beispielsweise JavaScript-Funktionserkennungscode zu verwenden, um Situationen zu erkennen, in denen eine Problemfunktion nicht funktioniert, und in diesen Fällen einen anderen Code auszuführen, der funktioniert.

Sobald ein Fix durchgeführt wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihr Lösung korrekt funktioniert und die Seite in anderen Bereichen oder anderen Browsern nicht beeinträchtigt hat.

## Melden von Bugs

Um das oben Gesagte nochmals zu betonen, wenn Sie Bugs in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte gegeben haben, die Sie über das Cross-Browser-Testing wissen müssen. Mit diesem Wissen sind Sie nun bereit, weiter voranzuschreiten und mehr über Cross-Browser-Testing-Strategien zu lernen.

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}
