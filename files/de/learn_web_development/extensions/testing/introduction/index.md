---
title: Einführung in das Cross-Browser-Testing
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: was Cross-Browser-Testing ist, einige häufige Probleme und einige Ansätze zur Fehlerbehebung.

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
        Ein Verständnis der übergreifenden Konzepte des Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website auf verschiedenen Browsern und Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones sowie Smart-TVs, mit unterschiedlichen Hardware-Fähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screenreader angewiesen sein könnten oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind - nur weil Ihre Seite auf Ihrem MacBook Pro oder Ihrem High-End Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Benutzer funktioniert!

> [!NOTE] > [Machen Sie das Web für alle zugänglich](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die verschiedenen Browser, ihre Marktanteile und damit verbundene Cross-Browser-Kompatibilitätsprobleme.

Websites sollten auf verschiedenen Browsern und Geräten zugänglich sein und für Menschen mit Behinderungen (z.B. Screenreader-freundlich) funktionieren. Eine Seite muss nicht überall die exakt gleiche Erfahrung bieten, solange die Kernfunktionalität auf irgendeine Weise zugänglich ist. Ein moderner Browser könnte etwas Animiertes, 3D und Glänzendes anzeigen, während ältere Browser einfach eine flache Grafik mit denselben Informationen zeigen könnten.

Auch ist es nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Seiteninhaber eine Einigung über die Bandbreite der Browser und Geräte treffen, auf denen der Code funktionieren wird.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und hier sind wir bei Problemen, bei denen sich Dinge über verschiedene Browser/Geräte/Browsereinstellungen hinweg anders verhalten. Bevor Sie überhaupt auf Cross-Browser-Probleme stoßen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Fehlerbehebung bei HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Fehlerbehebung bei CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ging schief? Problembehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus den vorherigen Themen, um Ihr Gedächtnis bei Bedarf aufzufrischen).

Cross-Browser-Probleme treten häufig auf, weil:

- Browser manchmal Bugs haben oder Funktionen unterschiedlich implementieren. Dieser Zustand ist weitaus weniger schlimm als früher; als IE4 und Netscape 4 in den 1990er Jahren um die Dominanz des Browsers konkurrierten, implementierten die Browserunternehmen absichtlich Dinge unterschiedlich, um einen Wettbewerbsvorteil zu erlangen, was das Leben der Entwickler zur Hölle machte. Browser folgen heutzutage viel besser den Standards, aber Unterschiede und Bugs schleichen sich manchmal dennoch ein.
- Einige Browser möglicherweise unterschiedliche Unterstützungsebenen für technologische Funktionen haben als andere. Dies ist unvermeidlich, wenn Sie mit hochmodernen Funktionen arbeiten, die Browser gerade erst implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr weiterentwickelt werden, was eingefroren sein könnte (d.h. es werden keine neuen Arbeiten mehr daran durchgeführt), lange bevor eine neue Funktion überhaupt erfunden wurde. Wenn Sie zum Beispiel hochmoderne JavaScript-Funktionen auf Ihrer Seite nutzen möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, könnten Sie darauf verzichten müssen, diese zu verwenden, oder Sie konvertieren Ihren Code in eine alte Syntax mit einem Art Cross-Compiler, wo nötig.
- Einige Geräte Beschränkungen haben könnten, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Seite beispielsweise so gestaltet ist, dass sie auf einem Desktop-PC schön aussieht, wird sie auf einem mobilen Gerät wahrscheinlich winzig und schwer lesbar erscheinen. Wenn Ihre Seite eine Menge großer Animationen enthält, kann dies auf einem High-End-Tablet in Ordnung sein, aber auf einem Low-End-Gerät möglicherweise träge oder ruckelig wirken.

…und weitere Gründe.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme untersuchen und Lösungen dafür betrachten.

## Arbeitsabläufe für das Cross-Browser-Testing

All das Cross-Browser-Testing mag zeitaufwändig und beängstigend klingen, muss es aber nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie ausreichend testen an den richtigen Stellen, um nicht auf unerwartete Probleme zu stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und neue Ergänzungen im Code keine alten Funktionen brechen, die zuvor funktionierten.

Wenn Sie alle Tests bis zum Ende eines Projekts liegen lassen, werden die Fehler, die Sie aufdecken, viel teurer und zeitaufwändiger zu beheben sein, als wenn Sie sie während der Entwicklung aufdecken und beheben.

Der Arbeitsablauf für Tests und Fehlerbehebungen in einem Projekt kann grob in folgende vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen könnten dies ganz anders handhaben):

**Erste Planung** > **Entwicklung** > **Testen/Entdeckung** > **Korrekturen/Wiederholungen**

Die Schritte 2–4 werden so oft wiederholt, wie nötig, um die gesamte Implementierung abzuschließen. Wir werden auf die verschiedenen Teile des Testprozesses in späteren Artikeln viel detaillierter eingehen, aber für jetzt fassen wir zusammen, was in jedem Schritt passieren kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Seiteninhaber/Kunden haben (dies könnte Ihr Chef sein oder jemand aus einer externen Firma, für die Sie eine Website erstellen), bei denen Sie genau bestimmen, was die Website sein soll — welche Inhalte und Funktionen sollte sie haben, wie sollte sie aussehen usw. Zu diesem Zeitpunkt möchten Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Website haben — was ist ihre Frist und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir gehen nicht im Detail darauf ein, aber Cross-Browser-Probleme können eine ernsthafte Auswirkung auf solche Planungen haben.

Sobald Sie eine Vorstellung von den benötigten Funktionalitäten und den Technologien haben, die Sie wahrscheinlich zur Entwicklung dieser Funktionen verwenden werden, sollten Sie anfangen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird das Zielpublikum dieser Website verwenden? Der Kunde hat möglicherweise bereits Daten dazu aus vorherigen Forschungen, die sie durchgeführt haben, z.B. von anderen Websites, die sie besitzen, oder von vorherigen Versionen der Website, an der Sie gerade arbeiten. Wenn nicht, können Sie sich einen guten Eindruck verschaffen, indem Sie andere Quellen betrachten, wie Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Seite bedienen wird. Ein bisschen Intuition können Sie auch verwenden.

Vielleicht erstellen Sie zum Beispiel eine E-Commerce-Site, die Kunden in Nordamerika bedient. Die Seite sollte vollumfänglich in den letzten paar Versionen der beliebtesten Desktop- und mobilen Browser funktionieren — dies sollte Chrome (sowie Edge und Opera, da sie auf der gleichen Rendering-Engine wie Chrome basieren), Firefox und Safari einschließen. Sie sollte auch mit WCAG AA Konformität zugänglich sein.

Jetzt, da Sie Ihre Ziel-Testplattformen kennen, sollten Sie die benötigten Funktionalitäten und die Technologien, die Sie verwenden werden, nochmal überprüfen. Zum Beispiel, wenn der Eigentümer des E-Commerce-Sites eine WebGL-basierte 3D-Tour durch jedes Produkt in die Produktseiten integriert haben möchte, muss er akzeptieren, dass dies in älteren Browserversionen einfach nicht funktionieren wird.

Sie sollten eine Liste der potenziellen Problemfelder erstellen.

> [!NOTE]
> Sie können Informationen zur Browserunterstützung von Technologien finden, indem Sie die verschiedenen Funktionen auf MDN nachschlagen — der Seite, auf der Sie gerade sind! Sie sollten auch [caniuse.com](https://caniuse.com/) zu Rate ziehen, um nützliche Details zu erhalten.

Sobald Sie sich über diese Details einig sind, können Sie mit der Entwicklung der Seite beginnen.

### Entwicklung

Nun zur Entwicklung der Seite. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Seite aufteilen — Startseite, Produktseite, Warenkorb, Zahlungsablauf usw. Diese könnten Sie dann weiter unterteilen — eine gemeinsame Seitenüberschrift und Fußzeile implementieren, Detailansicht der Produktseite implementieren, ein persistentes Warenkorb-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien für die Cross-Browser-Entwicklung, zum Beispiel:

- Alle Funktionen so nah wie möglich in allen Ziel-Browsern zum Laufen zu bringen. Dies könnte beinhalten, verschiedene Codepfade zu schreiben, die die Funktionalität auf unterschiedliche Weisen für verschiedene Browser reproduzieren, oder ein {{Glossary("Polyfill", "Polyfill")}} zu verwenden, um fehlende Unterstützung mit JavaScript oder anderen Technologien nachzubilden, oder eine Bibliothek zu verwenden, die Sie einen einzigen Codeabschnitt schreiben lässt und dann im Hintergrund je nach Browser, der den Code ausführt, unterschiedliche Dinge unternimmt.
- Akzeptieren, dass einige Dinge nicht in allen Browsern gleich funktionieren werden, und alternative (akzeptable) Lösungen in Browsern bereitzustellen, die die volle Funktionalität nicht unterstützen. Manchmal ist dies aufgrund von Gerätebeschränkungen unvermeidlich — ein Kino-Bildschirm im Breitbildformat wird keine gleiche visuelle Erfahrung wie ein 4" mobiler Bildschirm bieten, unabhängig davon, wie Sie Ihre Seite programmieren.
- Akzeptieren, dass Ihre Seite in einigen älteren Browsern einfach nicht funktionieren wird, und einfach weitermachen. Dies ist in Ordnung, solange Ihr Kunde/Nutzerbasis damit einverstanden ist.

Normalerweise wird Ihre Entwicklung eine Kombination der obigen drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn übernehmen — lassen Sie nicht alle Tests bis zum Ende!

### Testen/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zu Beginn sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die das Funktionieren Ihrer Funktion verhindern:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Machen Sie einige lo-fi Zugänglichkeitstests, zum Beispiel indem Sie versuchen, Ihre Seite nur mit der Tastatur zu benutzen, oder Ihre Seite über einen Screenreader verwenden, um zu sehen, ob sie navigierbar ist.
3. Testen Sie es auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie versuchen, Ihre Liste der Testbrowser auf die vollständige Liste der Zielgruppenbrowser zu erweitern und damit beginnen, Cross-Browser-Probleme auszusortieren (siehe den nächsten Artikel für weitere Informationen zur [Bestimmung Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Beispielsweise:

- Versuchen Sie die letzte Änderung auf allen modernen Desktop-Browsern zu testen, die Ihnen zur Verfügung stehen — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (Mac, Windows und Linux, idealerweise).
- Testen Sie es in gängigen Handy- und Tablet-Browsern (z.B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die lo-fi Option ist, einfach alle Tests, die Sie selbst durchführen können, zu machen (ziehen Sie Teammitglieder hinzu, wenn Sie in einem Team arbeiten). Sie sollten versuchen, auf echten physischen Geräten zu testen, wo möglich.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser, Betriebssysteme und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (emulieren Sie ein Gerät mit Software auf Ihrem Desktop-Computer) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren). Dies ist eine sehr beliebte Wahl, besonders unter bestimmten Umständen — zum Beispiel erlaubt Windows Ihnen nicht, mehrere Versionen von Windows gleichzeitig auf demselben Rechner zu installieren, daher ist die Verwendung mehrerer virtueller Maschinen hier oft die einzige Option.

Eine andere Möglichkeit sind Nutzergruppen — die Nutzung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Seite zu testen. Dies könnte eine Gruppe von Freunden oder Familie sein, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professionelles Benutzertest-Setup, bei dem Menschen dafür bezahlt werden, Ihre Seite zu testen und Ergebnisse zu liefern.

Schließlich können Sie mit Ihrem Testen durch Auditing- oder Automatisierungstools schlauer werden; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da das Testen von Hand auf diese Weise wirklich lange dauern kann. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl der App), das beispielsweise Ihre Seite in mehreren verschiedenen Browsern laden könnte, und:

- überprüfen, ob ein Klick auf einen Button erfolgreich eine Aktion auslöst (z.B. die Anzeige einer Karte) und die Ergebnisse anzeigt, sobald die Tests abgeschlossen sind,
- einen Screenshot von jedem machen, sodass Sie sehen können, ob ein Layout über die verschiedenen Browser hinweg konsistent ist.

Wenn Sie bereit sind, Geld in Testingen zu investieren, gibt es auch kommerzielle Tools, die einen Großteil des Einrichtens und Testens für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen normalerweise einen kontinuierlichen Integrations-Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository aufgenommen werden.

#### Testen auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/browsers/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien auf Ihrer Seite verwenden und gegen die neuesten Implementierungen testen möchten oder wenn Sie auf einen Bug in der neuesten veröffentlichten Browserversion stoßen und prüfen möchten, ob die Browserentwickler den Bug in einer neueren Version behoben haben.

### Korrekturen/Wiederholungen

Sobald Sie einen Bug entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was Sie tun sollten, ist, so weit wie möglich einzugrenzen, wo der Bug auftritt. Holen Sie so viele Informationen wie möglich von der Person ein, die den Bug meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Versuchen Sie es auf ähnlichen Konfigurationen (z.B. derselben Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedenen Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit der Bug verbreitet ist.

Es könnte nicht Ihr Fehler sein — wenn ein Bug in einem Browser existiert, wird der Anbieter ihn hoffentlich schnell beheben. Es könnte bereits behoben worden sein - zum Beispiel, wenn ein Bug in der Firefox-Version 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann wurde er behoben. Wenn es nicht behoben wurde, möchten Sie möglicherweise einen Bug melden (siehe [Bugs melden](#bugs_melden), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Bugs herauszufinden, erfolgt nach derselben Strategie wie bei jedem Webentwicklungsfehler (siehe erneut [Fehlerbehebung bei HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Fehlerbehebung bei CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ging schief? Problembehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Bug verursacht, müssen Sie entscheiden, wie Sie ihn im spezifischen Browser umgehen, in dem er Probleme verursacht — Sie können nicht einfach den problematischen Code direkt ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz ist es normalerweise, den Code in irgendeiner Weise zu verzweigen, beispielsweise JavaScript-Code zur Feature-Erkennung zu verwenden, um Situationen zu erkennen, in denen ein problematisches Feature nicht funktioniert, und in diesen Fällen einen anderen Code auszuführen, der funktioniert.

Sobald eine Korrektur vorgenommen wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Korrektur ordnungsgemäß funktioniert und nicht dazu führt, dass die Seite an anderen Stellen oder in anderen Browsern bricht.

## Bugs melden

Um zu wiederholen, was oben gesagt wurde, sollten Sie, wenn Sie Bugs in Browsern entdecken, sie melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein Verständnis der wichtigsten Konzepte vermittelt haben, die Sie über das Cross-Browser-Testing wissen müssen. Mit diesem Wissen sind Sie nun bereit, weiterzugehen und sich mit Cross-Browser-Testing-Strategien zu beschäftigen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
