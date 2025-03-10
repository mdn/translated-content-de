---
title: Einführung in das Cross-Browser-Testing
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: was Cross-Browser-Testing ist, einige häufige Probleme und Ansätze zum Debuggen/Fehlerbeheben.

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
        Ein Verständnis für die grundlegenden Konzepte des Cross-Browser-Testings zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Unterschiedliche Browser, einschließlich etwas älterer, die nicht alle aktuellen JS/CSS-Features unterstützen.
- Unterschiedliche Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones sowie Smart-TVs mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die auf assistive Technologien wie Screenreader angewiesen sein können oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind — nur weil Ihre Website auf Ihrem MacBook Pro oder High-End Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Benutzer funktioniert!

> **Note:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) erörtert die verschiedenen Browser, ihren Marktanteil und damit verbundene Cross-Browser-Kompatibilitätsprobleme.

Websites sollten zugänglich über verschiedene Browser und Geräte sowie für Menschen mit Behinderungen sein (z.B. screenreader-freundlich). Eine Seite muss nicht auf allen Browsern und Geräten das genau gleiche Erlebnis bieten, solange die Kernfunktionen auf irgendeine Weise zugänglich sind. Zum Beispiel könnte ein moderner Browser etwas Animiertes, 3D und Schickes darstellen, während ältere Browser nur eine flache Grafik mit den gleichen Informationen zeigen.

Es ist auch fast unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Website-Besitzer vereinbaren, auf welchen Browsern und Geräten der Code funktionieren soll.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen Dinge über verschiedene Browser/Geräte/Browsing-Präferenzen hinweg unterschiedlich funktionieren. Bevor Sie überhaupt zu Cross-Browser-Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus früheren Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Cross-Browser-Probleme treten häufig auf, weil:

- manchmal Browser Fehler haben oder Features unterschiedlich implementieren. Diese Situation ist viel weniger problematisch als früher; als IE4 und Netscape 4 in den 1990er Jahren darum kämpften, der dominante Browser zu werden, implementierten die Browserunternehmen absichtlich Dinge unterschiedlich, um einen Wettbewerbsvorteil zu erlangen, was das Leben für Entwickler zur Hölle machte. Browser befolgen heutzutage viel besser die Standards, aber Unterschiede und Fehler schleichen sich manchmal immer noch ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für technologische Funktionen haben als andere. Dies ist unvermeidlich, wenn Sie mit hochmodernen Features arbeiten, die Browser gerade implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden und die eingefroren wurden (d.h. keine neuen Arbeiten mehr an ihnen), lange bevor ein neues Feature überhaupt erfunden wurde. Beispielsweise könnten fortschrittliche JavaScript-Features auf Ihrer Website in älteren Browsern nicht funktionieren. Wenn Sie ältere Browser unterstützen müssen, müssen Sie möglicherweise auf diese verzichten oder Ihren Code mit einer Art Cross-Compiler in althergebrachten Syntax umwandeln.
- einige Geräte Beschränkungen aufweisen, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Zum Beispiel, wenn eine Website für einen Desktop-PC entworfen wurde, wird sie wahrscheinlich auf einem mobilen Gerät winzig aussehen und schwer lesbar sein. Wenn Ihre Website eine Menge großer Animationen enthält, könnte sie auf einem hochspezifizierten Tablet in Ordnung sein, auf einem Low-End-Gerät jedoch träge oder ruckelig wirken.

…und weitere Gründe.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme untersuchen und uns Lösungen dafür anschauen.

## Arbeitsabläufe für Cross-Browser-Testing

All das Cross-Browser-Testing mag zeitaufwändig und beängstigend klingen, muss es aber nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie genug Testing an den richtigen Stellen durchführen, um sicherzustellen, dass Sie nicht auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Features für Ihre Zielgruppe funktionieren und dass neue Ergänzungen zum Code keine alten Features brechen, die zuvor funktionierten.

Wenn Sie alle Tests auf das Ende eines Projekts verschieben, werden alle Fehler, die Sie aufdecken, viel teurer und zeitaufwändiger zu beheben sein, als wenn Sie sie aufdecken und beheben, während Sie fortfahren.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur eine sehr grobe Einteilung — unterschiedliche Leute könnten Dinge ziemlich anders machen als hier beschrieben):

**Erste Planung** > **Entwicklung** > **Testen/Entdeckung** > **Lösen/Iteration**

Die Schritte 2–4 werden so oft wiederholt, wie nötig, um alle Implementierungen abzuschließen. Wir werden uns die verschiedenen Teile des Testprozesses in den nachfolgenden Artikeln genauer ansehen, aber für den Moment fassen wir zusammen, was in jedem Schritt passieren könnte.

### Erste Planung

In der ersten Planungsphase haben Sie wahrscheinlich mehrere Planungstreffen mit dem Website-Besitzer/Kunden (dies könnte Ihr Chef sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen) in denen Sie genau festlegen, was die Website sein soll — welchen Inhalt und welche Funktionen sie haben soll, wie sie aussehen soll, etc. Zu diesem Zeitpunkt möchten Sie auch wissen, wie viel Zeit Sie zur Entwicklung der Website haben — was ist ihre Frist und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden hier nicht ins Detail gehen, aber Cross-Browser-Probleme können erhebliche Auswirkungen auf solche Planungen haben.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang haben und mit welchen Technologien Sie diese Funktionen wahrscheinlich umsetzen werden, sollten Sie beginnen, die Zielgruppe zu erforschen — welche Browser, Geräte etc. wird die Zielgruppe für diese Website verwenden? Der Kunde hat möglicherweise bereits Daten hierzu aus früheren Untersuchungen, die sie gemacht haben, z.B. von anderen Websites, die sie besitzen, oder von früheren Versionen der Website, an der Sie jetzt arbeiten. Falls nicht, werden Sie durch das Betrachten anderer Quellen eine gute Vorstellung davon bekommen, wie Nutzungsstatistiken von Wettbewerbern oder den Ländern, die die Seite bedienen wird. Sie können auch ein wenig Intuition verwenden.

Zum Beispiel könnten Sie eine E-Commerce-Website erstellen, die Kunden in Nordamerika bedient. Die Seite sollte vollständig in den letzten Versionen der beliebtesten Desktop- und mobilen Browser funktionieren — dies sollte Chrome (und Edge, Opera, da diese auf demselben Rendering-Engine wie Chrome basieren), Firefox und Safari enthalten.
Sie sollte auch mit WCAG AA Konformität zugänglich sein.

Nachdem Sie nun Ihre Ziel-Testplattformen kennen, sollten Sie den erforderlichen Funktionsumfang und die Technologien, die Sie verwenden werden, überprüfen.
Zum Beispiel, wenn der E-Commerce-Website-Besitzer eine WebGL-gestützte 3D-Tour jedes Produkts in die Produktseiten integriert haben möchte, müssen sie akzeptieren, dass dies in allen älteren Browserversionen einfach nicht funktionieren wird.

Sie sollten eine Liste potenzieller Problembereiche erstellen.

> [!NOTE]
> Sie können Informationen zur Browserunterstützung für Technologien finden, indem Sie die verschiedenen Features auf MDN nachschlagen — der Seite, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) zu Rate ziehen, für einige weitere nützliche Details.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, zum Beispiel könnten Sie die verschiedenen Website-Bereiche aufteilen — Startseite, Produktseite, Warenkorb, Zahlungsablauf, etc. Sie könnten dann diese weiter unterteilen — Implementierung eines allgemeinen Website-Headers und -Footers, Implementierung der Produktseite-Detailansicht, Implementierung eines permanenten Warenkorb-Widgets, etc.

Es gibt mehrere allgemeine Strategien für die Cross-Browser-Entwicklung, zum Beispiel:

- Alle Funktionalitäten so eng wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann das Schreiben unterschiedlicher Codepfade beinhalten, die die Funktionalität auf unterschiedliche Weise reproduzieren, die auf verschiedene Browser abzielen, oder die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}, um fehlende Unterstützung mit JavaScript oder anderen Technologien zu imitieren, oder die Verwendung einer Bibliothek, die es Ihnen ermöglicht, ein einzelnes Code-Stück zu schreiben und dann im Hintergrund je nach Browser unterschiedlich agiert.
- Akzeptieren, dass einige Dinge nicht gleich in allen Browsern funktionieren werden und unterschiedliche (akzeptable) Lösungen in den Browsern bieten, die die volle Funktionalität nicht unterstützen. Manchmal ist dies aufgrund von Gerätebeschränkungen unvermeidlich — ein Kino-Widescreen wird nicht das gleiche visuelle Erlebnis bieten wie ein 4"-Mobilbildschirm, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website in einigen älteren Browsern einfach nicht funktionieren wird, und weitermachen. Dies ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis stimmt dem zu.

Normalerweise wird Ihre Entwicklung eine Kombination der obigen drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn festlegen — verschieben Sie die Tests nicht auf das Ende!

### Testen/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zunächst sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die verhindern, dass Ihr Feature funktioniert:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige lo-fi Barrierefreiheitstests durch, wie zum Beispiel zu versuchen, Ihre Website nur mit der Tastatur zu benutzen, oder Ihre Website über einen Screenreader zu nutzen, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als Nächstes sollten Sie Ihre Liste der Testbrowser auf eine vollständige Liste der Zielgruppen-Browser erweitern und beginnen, sich auf die Beseitigung von Cross-Browser-Problemen zu konzentrieren (siehe den nächsten Artikel für weitere Informationen zum [Bestimmen Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern zu testen, die Sie erreichen können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf dem Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z.B. iOS-Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie außerdem Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die losester Ansatz ist es, einfach so viele Tests wie möglich selbst zu machen (Teampartner zur Hilfe holen, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es auf echten physischen Geräten zu testen, wo immer möglich.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser-, Betriebssystem- und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren) verwenden. Dies ist eine sehr beliebte Wahl, insbesondere in einigen Fällen — zum Beispiel erlaubt Windows Ihnen nicht, mehrere Versionen von Windows gleichzeitig auf derselben Maschine zu installieren, daher ist die Verwendung mehrerer virtueller Maschinen hier oft die einzige Option.

Eine weitere Option sind Benutzergruppen — eine Gruppe von Personen außerhalb Ihres Entwicklungsteams zur Bewertung Ihrer Website zu verwenden. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe anderer Mitarbeiter, eine Klasse an einer örtlichen Universität oder eine professionelle Benutzertestumgebung sein, in der Personen bezahlt werden, um Ihre Website zu testen und Ergebnisse zu liefern.

Schließlich können Sie mit Ihrem Testing intelligenter werden, indem Sie Audit- oder Automatisierungstools verwenden; dies ist eine sinnvolle Wahl, da Ihre Projekte größer werden, da das manuelle Testen dieser Art mit der Zeit wirklich lange dauern kann. Sie können Ihr eigenes Testing-Automatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl der Anwendung), das zum Beispiel Ihre Website in einer Anzahl verschiedener Browser laden könnte, und:

- überprüfen, ob ein Button-Klick etwas erfolgreich bewirkt (wie zum Beispiel das Anzeigen einer Karte), die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind
- einen Screenshot von jedem machen, sodass Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie bereit sind, Geld in das Testing zu investieren, gibt es auch kommerzielle Tools, die einen Großteil des Setups und Testens für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen normalerweise einen kontinuierlichen Integrationsworkflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testing auf Vorabversionen von Browsern

Es ist oft eine gute Idee, Tests auf Vorabversionen von Browsern durchzuführen; sehen Sie sich die folgenden Links an:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders häufig, wenn Sie sehr neue Technologien auf Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Lösen/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das Erste, was zu tun ist, den Bereich, in dem der Fehler auftritt, so genau wie möglich einzugrenzen. Sammeln Sie so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en), etc. Versuchen Sie es mit ähnlichen Konfigurationen (z.B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder einige verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit der Fehler besteht.

Es könnte nicht Ihr Fehler sein — wenn ein Fehler in einem Browser besteht, wird der Anbieter ihn hoffentlich schnell beheben. Es könnte bereits behoben sein — zum Beispiel, wenn ein Fehler in der Firefox-Version 49 vorhanden ist, aber nicht mehr in der Firefox Nightly (Version 52), dann haben sie ihn behoben. Wenn es nicht behoben ist, möchten Sie möglicherweise einen Fehler melden (siehe [Fehler melden](#fehler_melden) unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ermittlung der Ursache des Fehlers erfolgt nach derselben Strategie wie jeder andere Webentwicklungsfehler (siehe erneut [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie entdeckt haben, was den Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser, in dem er Probleme verursacht, umgehen können — Sie können nicht einfach den problematischen Code ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz besteht normalerweise darin, den Code irgendwie zu verzweigen, zum Beispiel, indem Sie JavaScript-Feature-Detection-Code verwenden, um Situationen zu erkennen, in denen ein problematisches Feature nicht funktioniert, und in diesen Fällen ein anderes funktionierendes Stück Code ausführen.

Sobald eine Lösung gefunden wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Behebung in Ordnung ist und nicht die Website an anderer Stelle oder in anderen Browsern beschädigt hat.

## Fehler melden

Nochmal zur Betonung, was oben gesagt wurde: Wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte gegeben haben, die Sie über das Cross-Browser-Testing wissen müssen. Mit diesem Wissen sind Sie nun bereit, weiter zu lernen und die Strategien des Cross-Browser-Testings zu verstehen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
