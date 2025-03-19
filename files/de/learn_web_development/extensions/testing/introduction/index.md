---
title: Einführung in das plattformübergreifende Testen
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel bietet einen Überblick über das plattformübergreifende Testen: Was plattformübergreifendes Testen ist, häufige Probleme und einige Ansätze zur Fehlerbehebung und Fehlersuche.

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
        Ein Verständnis der Konzepte auf hoher Ebene beim plattformübergreifenden Testen zu erwerben.
      </td>
    </tr>
  </tbody>
</table>

## Was ist plattformübergreifendes Testen?

Plattformübergreifendes Testen ist die Praxis, sicherzustellen, dass eine Website auf verschiedenen Browsern und Geräten funktioniert. Webentwickler sollten dabei Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Unterschiedliche Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones, bis hin zu Smart-TVs mit unterschiedlichen Hardwaremöglichkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screenreader angewiesen sein könnten oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind — nur weil Ihre Seite auf Ihrem MacBook Pro oder einem High-End Galaxy Nexus funktioniert, heißt das nicht, dass sie für alle Ihre Nutzer funktioniert!

> **Note:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die unterschiedlichen Browser, deren Marktanteil und diesbezügliche plattformübergreifende Kompatibilitätsprobleme.

Websites sollten in verschiedenen Browsern und auf verschiedenen Geräten zugänglich sein und für Menschen mit Behinderungen zugänglich sein (z. B. für Screenreader geeignet). Eine Seite muss nicht auf allen Browsern und Geräten die exakt gleiche Erfahrung bieten, solange die Kernfunktionen in irgendeiner Weise zugänglich sind. Beispielsweise könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes zeigen, während ältere Browser lediglich eine flache Grafik mit denselben Informationen anzeigen.

Außerdem ist es nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Seiteninhaber eine Einigung darüber erzielen, auf welchen Browsern und Geräten der Code funktionieren wird.

## Warum treten plattformübergreifende Probleme auf?

Es gibt viele verschiedene Gründe, warum plattformübergreifende Probleme auftreten, und hier reden wir über Probleme, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browser-Einstellungen unterschiedlich verhalten. Bevor Sie überhaupt mit plattformübergreifenden Problemen konfrontiert werden, sollten Sie bereits Fehler in Ihrem Code behoben haben (sehen Sie sich dazu [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus früheren Themen an, um Ihr Gedächtnis bei Bedarf aufzufrischen).

Plattformübergreifende Probleme treten häufig auf, weil:

- Browser manchmal Fehler haben oder Funktionen unterschiedlich implementieren. Diese Situation ist bei weitem nicht mehr so schlimm wie früher; als IE4 und Netscape 4 in den 1990er Jahren darum konkurrierten, der dominierende Browser zu sein, implementierten die Browserunternehmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was Entwicklern das Leben zur Hölle machte. Heutzutage halten sich Browser viel besser an Standards, aber Unterschiede und Fehler schleichen sich manchmal dennoch ein.
- Einige Browser möglicherweise unterschiedliche Unterstützungsebenen für Technologiefunktionen haben. Dies ist unvermeidlich, wenn man mit fortschrittlichen Funktionen arbeitet, die Browser gerade implementieren oder wenn sehr alte Browser unterstützt werden müssen, die nicht mehr weiterentwickelt werden, und lange eingefroren waren, bevor eine neue Funktion überhaupt erfunden wurde. Beispielsweise funktionieren fortschrittliche JavaScript-Funktionen möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, müssen Sie diese möglicherweise nicht verwenden oder Ihren Code bei Bedarf mit einer Art Cross-Compiler in eine altmodische Syntax umwandeln.
- Einige Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Zum Beispiel, wenn eine Seite so gestaltet wurde, dass sie auf einem Desktop-PC gut aussieht, wird sie wahrscheinlich winzig und schwer lesbar auf einem mobilen Gerät aussehen. Wenn Ihre Seite eine Menge großer Animationen enthält, könnte sie auf einem leistungsstarken Tablet in Ordnung sein, aber auf einem Gerät mit niedrigen Spezifikationen träge oder ruckelig wirken.

… und weitere Gründe.

In späteren Artikeln werden wir häufige plattformübergreifende Probleme untersuchen und uns Lösungen für diese ansehen.

## Workflows für plattformübergreifendes Testen

All das plattformübergreifende Testen mag zeitaufwendig und beängstigend klingen, aber das muss es nicht — Sie müssen nur sorgfältig dafür planen und sicherstellen, dass Sie genug an den richtigen Stellen testen, um unerwartete Probleme zu vermeiden. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Features für Ihr Zielpublikum funktionieren und dass neue Code-Ergänzungen keine alten Funktionen brechen, die zuvor funktioniert haben.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, werden alle entdeckten Fehler viel teurer und zeitaufwendiger zu beheben sein, als wenn Sie sie Schritt für Schritt aufdecken und beheben.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt kann in etwa in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen können dies ganz anders handhaben):

**Erste Planung** > **Entwicklung** > **Testen/Entdecken** > **Fehlerbehebungen/Iteration**

Die Schritte 2–4 werden in der Regel so oft wiederholt, wie es nötig ist, um die gesamte Implementierung abzuschließen. Wir werden die unterschiedlichen Phasen des Testprozesses in nachfolgenden Artikeln viel detaillierter untersuchen. Für jetzt fassen wir jedoch zusammen, was in jedem Schritt passieren könnte.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungsmeetings mit dem Seiteninhaber/Kunden haben (das könnte Ihr Vorgesetzter sein oder jemand von einer externen Firma, für die Sie eine Website erstellen), bei denen Sie genau bestimmen, was die Website sein soll — welchen Inhalt und welche Funktionen sie haben soll, wie soll sie aussehen, etc. An diesem Punkt sollten Sie auch wissen, wie viel Zeit Sie zur Entwicklung der Seite haben — was ist ihre Frist, und wie viel werden sie Ihnen für Ihre Arbeit zahlen? Wir werden nicht viel ins Detail gehen, aber plattformübergreifende Probleme können sich erheblich auf solche Planungen auswirken.

Sobald Sie eine Vorstellung von den erforderlichen Funktionen und den Technologien haben, die Sie wahrscheinlich zur Erstellung dieser Funktionen verwenden werden, sollten Sie beginnen, die Zielgruppe zu erkunden — welche Browser, Geräte, etc. wird die Zielgruppe dieser Website verwenden? Der Kunde hat möglicherweise bereits Daten dazu aus vorherigen Recherchen, die er durchgeführt hat, zum Beispiel von anderen Websites, die er besitzt, oder von früheren Versionen der Website, an der Sie arbeiten. Wenn nicht, erhalten Sie eine gute Vorstellung, indem Sie andere Quellen betrachten, wie Nutzungsstatistiken von Konkurrenten oder Länder, in denen die Seite angeboten wird. Sie können auch eine gewisse Intuition nutzen.

Ein Beispiel könnte sein, dass Sie eine E-Commerce-Seite erstellen, die Kunden in Nordamerika bedient. Die Seite sollte in den letzten paar Versionen der populärsten Desktop- und mobilen Browser vollständig funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf demselben Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen.
Sie sollte auch mit WCAG AA-Konformität zugänglich sein.

Nun, da Sie Ihre Zielplattformen für Tests kennen, sollten Sie die erforderlichen Funktionen und die Technologien, die Sie verwenden werden, erneut überprüfen.
Zum Beispiel, wenn der E-Commerce-Seiteninhaber einen WebGL-basierten 3D-Rundgang für jedes Produkt eingebaut haben möchte, müssen sie akzeptieren, dass das in alten Browserversionen einfach nicht funktionieren wird.

Sie sollten eine Liste der potenziellen Problemstellen erstellen.

> [!NOTE]
> Sie können Informationen zur Browserunterstützung für Technologien auf MDN nachschlagen — der Seite, auf der Sie gerade sind! Zudem sollten Sie [caniuse.com](https://caniuse.com/) für weitere nützliche Details konsultieren.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Seite beginnen.

### Entwicklung

Jetzt zur Entwicklung der Seite. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Seite aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsvorgang, etc. Sie könnten diese dann weiter unterteilen — eine gemeinsame Seiten-Kopfzeile und Fußzeile implementieren, Produktseitendetails implementieren, ein persistentes Einkaufswagen-Widget implementieren, etc.

Es gibt mehrere allgemeine Strategien für die plattformübergreifende Entwicklung, z.B.:

- Alle Funktionen so nah wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann bedeuten, dass unterschiedliche Codepfade geschrieben werden, die Funktionen auf verschiedene Weisen für verschiedene Browser reproduzieren, oder ein {{Glossary("Polyfill", "Polyfill")}} verwendet wird, um fehlende Unterstützung mit JavaScript oder anderen Technologien zu simulieren, oder eine Bibliothek zu verwenden, die es ermöglicht, ein einzelnes Stück Code zu schreiben und dann im Hintergrund verschiedene Dinge je nach dem, was der Browser unterstützt, zu tun.
- Akzeptieren, dass einige Dinge nicht auf allen Browsern gleich funktionieren werden, und unterschiedliche (akzeptable) Lösungen für Browser bereitstellen, die die volle Funktionalität nicht unterstützen. Manchmal ist das aufgrund von Geräteeinschränkungen unausweichlich — ein Kinobreitbildschirm wird nicht das gleiche visuelle Erlebnis bieten wie ein 4"-Mobilbildschirm, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach in einigen älteren Browsern nicht funktionieren wird, und weitermachen. Dies ist in Ordnung, sofern Ihr Kunde/Nutzerkreis damit einverstanden ist.

Normalerweise beinhaltet Ihre Entwicklung eine Kombination der oben genannten drei Ansätze. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn fest einbinden — lassen Sie nicht alle Tests bis zum Schluss!

### Testen/Entdecken

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Anfangen sollten Sie damit, sicherzustellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die das Funktionieren Ihres Features verhindern:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige Lo-Fi-Barrierefreiheitstests durch, z. B. versuchen, Ihre Site nur mit der Tastatur zu verwenden oder Ihre Site über einen Screenreader zu nutzen, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

Zu diesem Zeitpunkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als Nächstes sollten Sie Ihre Liste der Testbrowser auf die vollständige Liste der Zielgruppenbrowser ausweiten und sich darauf konzentrieren, plattformübergreifende Probleme auszumerzen (siehe den nächsten Artikel für weitere Informationen über [Bestimmen Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung auf allen modernen Desktop-Browsern zu testen — einschließlich Firefox, Chrome, Opera, Edge, und Safari auf dem Desktop (idealerweise Mac, Windows, und Linux).
- Testen Sie auf gängigen Telefon- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die am wenigsten komplexe Option ist es, alle Tests, die Sie können, selbst durchzuführen (unter Einbeziehung von Teamkollegen, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es auf echten physischen Geräten zu testen, wo immer möglich.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser-, Betriebssystem- und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren) nutzen. Dies ist eine sehr beliebte Wahl, insbesondere in einigen Situationen — zum Beispiel lässt Windows es nicht zu, mehrere Versionen von Windows gleichzeitig auf derselben Maschine installiert zu haben, daher ist die Verwendung mehrerer virtueller Maschinen oft die einzige Option hier.

Eine weitere Möglichkeit sind Benutzergruppen — die Verwendung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Seite zu testen. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder eine professionelle Nutzertest-Einrichtung sein, wo Menschen bezahlt werden, Ihre Website zu testen und Ergebnisse zu liefern.

Schließlich können Sie intelligenter mit Ihren Tests umgehen, indem Sie Audit- oder Automationstools verwenden; dies ist eine vernünftige Wahl, je größer Ihre Projekte werden, da das Durchführen all dieser Tests von Hand wirklich lange dauern kann. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), das zum Beispiel Ihre Seite in einer Reihe verschiedener Browser laden könnte, und:

- Überprüfen, ob ein Klick auf einen Button etwas erfolgreich auslöst (z. B. die Anzeige einer Karte) und die Ergebnisse anzeigt, sobald die Tests abgeschlossen sind
- Einen Screenshot von jedem erstellen, damit Sie sehen können, ob ein Layout auf den verschiedenen Browsern konsistent ist.

Wenn Sie bereit sind, Geld in Tests zu investieren, gibt es auch kommerzielle Tools, die einen Großteil der Einrichtung und Tests für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglicht normalerweise einen kontinuierlichen Integrationsworkflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testen auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders relevant, wenn Sie sehr neue Technologien auf Ihrer Seite verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten veröffentlichten Version eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Fehlerbehebungen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was zu tun ist, ist den Bereich, in dem der Fehler auftritt, so weit wie möglich einzugrenzen. Holen Sie sich so viele Informationen wie möglich von der Person, die den Fehler meldet — auf welcher Plattform(en), Gerät(en), Browserversion(en), etc. Versuchen Sie es mit ähnlichen Konfigurationen (z. B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit verbreitet der Fehler ist.

Es muss nicht Ihre Schuld sein — wenn ein Fehler in einem Browser existiert, wird der Anbieter ihn hoffentlich schnell beheben. Es könnte bereits behoben sein — zum Beispiel, wenn ein Fehler in Firefox Release 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann wurde er behoben. Wenn er nicht behoben wurde, sollten Sie möglicherweise einen Fehler melden (siehe [Fehler melden](#fehler_melden) unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Fehlers herauszufinden, erfordert dieselbe Strategie wie jeder andere Webentwicklungsfehler (sehen Sie sich nochmals [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an). Sobald Sie herausgefunden haben, was Ihren Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser, in dem er Probleme verursacht, umgehen — Sie können den Problemcode nicht einfach direkt ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz ist normalerweise, den Code auf irgendeine Weise zu verzweigen, z. B. JavaScript-Feature-Erkennungscode zu verwenden, um Situationen zu erkennen, in denen eine Problemfunktion nicht funktioniert, und in diesen Fällen anderen Code auszuführen, der funktioniert.

Sobald eine Fehlerbehebung durchgeführt wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Lösung in Ordnung ist und nicht dazu geführt hat, dass die Seite an anderen Stellen oder in anderen Browsern kaputt geht.

## Fehler melden

Um zu wiederholen, was oben gesagt wurde, wenn Sie Fehler in Browsern entdecken, sollten Sie sie melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte im plattformübergreifenden Testen gegeben haben. Mit diesem Wissen sind Sie nun bereit, weiterzumachen und plattformübergreifende Teststrategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
