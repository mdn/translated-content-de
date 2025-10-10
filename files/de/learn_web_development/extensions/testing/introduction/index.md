---
title: Einführung in das Testing von Cross-Browser-Kompatibilität
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: Was ist Cross-Browser-Testing, welche häufigen Probleme gibt es, und welche Ansätze gibt es zum Debuggen und zur Fehlerbehebung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der grundlegenden Konzepte des Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes in Betracht ziehen:

- Verschiedene Browser, einschließlich etwas älterer Varianten, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones, zu Smart-TVs, mit unterschiedlichen Hardware-Möglichkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screen Reader angewiesen sind oder nur eine Tastatur benutzen.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind — nur weil Ihre Website auf Ihrem MacBook Pro oder einem hochwertigen Galaxy Nexus funktioniert, heißt das nicht, dass sie für alle Ihre Nutzer funktioniert!

> [!NOTE]
> [Machen Sie das Web für alle zugänglich](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) diskutiert die verschiedenen Browser, deren Marktanteile und damit verbundene Probleme der Browser-Kompatibilität.

Websites sollten über verschiedene Browser und Geräte hinweg und für Menschen mit Behinderungen (z. B. screen-reader-freundlich) zugänglich sein. Eine Seite muss nicht überall die exakt gleiche Erfahrung bieten, solange die Kernfunktionen auf irgendeine Weise zugänglich sind. Beispielsweise könnte ein moderner Browser etwas animiertes, glänzendes 3D anzeigen, während ältere Browser nur eine flache Grafik mit den gleichen Informationen zeigen.

Es ist nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Website-Besitzer eine Vereinbarung über die Bandbreite an Browsern und Geräten treffen, auf denen der Code funktionieren wird.

## Warum treten Probleme bei der Cross-Browser-Kompatibilität auf?

Es gibt viele verschiedene Gründe, warum Probleme bei der Cross-Browser-Kompatibilität auftreten können, wobei hier von Problemen die Rede ist, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browser-Präferenzen unterschiedlich verhalten. Bevor Sie sich mit Problemen der Cross-Browser-Kompatibilität beschäftigen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus vorherigen Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Probleme der Cross-Browser-Kompatibilität treten häufig auf, weil:

- manchmal Browser Fehler haben oder Funktionen unterschiedlich implementieren. Diese Situation ist heute viel weniger schlimm als früher; als in den 1990er Jahren IE4 und Netscape 4 darum kämpften, der dominierende Browser zu werden, implementierten Browserfirmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben für Entwickler zur Hölle machte. Browser halten sich heutzutage viel besser an Standards, aber Unterschiede und Fehler schleichen sich manchmal dennoch ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für Technologie-Funktionen haben. Dies ist unvermeidbar, wenn Sie es mit modernen Funktionen zu tun haben, die Browser gerade zu implementieren beginnen, oder wenn Sie sehr alte Browser unterstützen müssen, die möglicherweise seit langem nicht mehr entwickelt werden. Wenn Sie beispielsweise hochmoderne JavaScript-Funktionen auf Ihrer Website verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, müssen Sie möglicherweise auf die Verwendung dieser Funktionen verzichten oder Ihren Code bei Bedarf mithilfe eines Cross-Compilers in eine altmodische Syntax konvertieren.
- manche Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Seite beispielsweise so gestaltet ist, dass sie auf einem Desktop-PC schön aussieht, wird sie wahrscheinlich winzig sein und auf einem mobilen Gerät schwer zu lesen sein. Wenn Ihre Website eine Menge großer Animationen enthält, könnte sie auf einem High-End-Tablet in Ordnung sein, auf einem Low-End-Gerät jedoch träge oder ruckelig.

…und noch mehr Gründe.

In späteren Artikeln werden wir häufige Probleme der Cross-Browser-Kompatibilität erkunden und Lösungen dafür betrachten.

## Workflows für das Cross-Browser-Testing

Das ganze Thema Cross-Browser-Testing mag zeitaufwändig und beängstigend klingen, aber das muss es nicht sein — Sie müssen nur sorgfältig dafür planen und sicherstellen, dass Sie genug an den richtigen Stellen testen, um sicherzustellen, dass Sie nicht plötzlich auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Ergänzungen am Code keine alten Funktionen, die zuvor funktionierten, kaputt machen.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, werden alle gefundenen Fehler viel teurer und zeitaufwändiger zu beheben sein, als wenn Sie sie aufdecken und unterwegs beheben würden.

Der Workflow für das Testen und Beheben von Fehlern in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen könnten Dinge ganz anders machen als das Folgende):

**Erste Planung** > **Entwicklung** > **Testing/Erkennung** > **Fehlerbehebung/Iteration**

Die Schritte 2–4 werden so oft wie nötig wiederholt, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in späteren Artikeln viel detaillierter betrachten, aber vorerst fassen wir kurz zusammen, was in jedem Schritt geschehen kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungsbesprechungen mit dem Website-Besitzer/Klienten (dies könnte Ihr Chef sein oder jemand von einer externen Firma, für die Sie eine Website erstellen) haben, in denen Sie genau festlegen, was die Website sein sollte — welchen Inhalt und welche Funktionen sie haben sollte, wie sie aussehen sollte usw. An diesem Punkt möchten Sie auch wissen, wie viel Zeit Ihnen für die Entwicklung der Seite zur Verfügung steht — welches ist ihre Frist und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden nicht ins Detail gehen, aber Probleme der Cross-Browser-Kompatibilität können ernsthafte Auswirkungen auf solche Planungen haben.

Sobald Sie eine Vorstellung vom gewünschten Funktionsumfang haben und welche Technologien Sie wahrscheinlich verwenden werden, um diese Funktionen zu erstellen, sollten Sie damit beginnen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird die Zielgruppe für diese Seite verwenden? Der Kunde könnte bereits Daten darüber haben, basierend auf vorhergehenden Recherchen, die sie gemacht haben, z. B. von anderen Websites, die sie besitzen, oder von vorherigen Versionen der Website, an der Sie jetzt arbeiten. Wenn nicht, können Sie sich durch die Betrachtung anderer Quellen einen guten Eindruck verschaffen, wie z. B. Nutzungsstatistiken von Wettbewerbern oder Ländern, die die Seite bedienen wird. Sie können auch ein bisschen Intuition verwenden.

Angenommen, Sie erstellen eine E-Commerce-Website, die Kunden in Nordamerika bedient. Die Website sollte vollständig in den letzten Versionen der beliebtesten Desktop- und Mobilbrowser funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf der gleichen Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen. Es sollte auch barrierefrei mit Konformität zur WCAG AA sein.

Jetzt kennen Sie Ihre Zieltestplattformen und sollten zurückgehen und den benötigten Funktionsumfang und die Technologien, die Sie verwenden werden, noch einmal überdenken. Beispielsweise muss der Eigentümer der E-Commerce-Website akzeptieren, dass ein WebGL-gesteuertes 3D-Produkt-Tour auf den Produktseiten in alten Browserversionen einfach nicht funktionieren wird.

Sie sollten eine Liste der potenziellen Problembereiche erstellen.

> [!NOTE]
> Sie können Informationen zur Browser-Unterstützung für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN — der Seite, auf der Sie sich befinden — nachschlagen! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für einige weitere nützliche Details.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Seite fortfahren.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die unterschiedlichen Teile der Entwicklung in Module unterteilen, zum Beispiel könnten Sie die verschiedenen Bereiche der Website unterteilen — Startseite, Produktseite, Warenkorb, Bezahlprozess usw. Sie könnten diese dann weiter unterteilen — Implementierung einer gemeinsamen Kopf- und Fußzeile der Website, Implementierung der Produktdetailansicht, Implementierung eines permanenten Warenkorb-Widgets usw.

Es gibt mehrere allgemeine Strategien für die Entwicklung für verschiedene Browser, zum Beispiel:

- Alle Funktionen so eng wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann die das Schreiben verschiedener Codepfade erfordern, die Funktionen auf unterschiedliche Weise reproduzieren, die auf verschiedene Browser abzielen, oder die Verwendung eines {{Glossary("Polyfill", "Polyfill")}} zur Nachahmung fehlender Unterstützung mit JavaScript oder anderen Technologien oder die Verwendung einer Bibliothek, die es Ihnen ermöglicht, einmal einen Code zu schreiben und dann im Hintergrund unterschiedliche Dinge zu tun, abhängig davon, was der Browser unterstützt.
- Akzeptieren, dass einige Dinge nicht in allen Browsern gleich funktionieren werden, und unterschiedliche (annehmbare) Lösungen in Browsern anzubieten, die die volle Funktionalität nicht unterstützen. Manchmal ist dies aufgrund von Gerätebeschränkungen unvermeidlich — ein Kinowidescreen wird nicht das gleiche visuelle Erlebnis bieten wie ein 4-Zoll-Mobildisplay, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach in einigen älteren Browsern nicht funktionieren wird, und weitermachen. Dies ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis ist damit einverstanden.

Normalerweise wird die Entwicklung eine Kombination der oben genannten drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn einpflegen — lassen Sie nicht alle Tests bis zum Ende!

### Testing/Erkennung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zu Beginn sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die verhindern, dass Ihre Funktion funktioniert:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige Lo-Fi-Tests zur Barrierefreiheit durch, wie z. B. der Versuch, Ihre Website nur mit der Tastatur zu verwenden, oder der Einsatz eines Screenreaders, um zu sehen, ob sie navigierbar ist.
3. Testen Sie es auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Anschließend sollten Sie Ihre Liste der Testbrowser auf eine komplette Liste der Zielbrowser erweitern und damit beginnen, Cross-Browser-Probleme auszumerzen (siehe den nächsten Artikel für weitere Informationen zur [Bestimmung Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie die letzte Änderung in allen modernen Desktop-Browsern zu testen, die Sie können — dazu gehören Firefox, Chrome, Opera, Edge und Safari auf dem Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die lo-fieste Option ist es, alle Tests selbst zu machen (ziehen Sie Teamkollegen hinzu, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es, soweit möglich, auf echten physischen Geräten zu testen.

Wenn Sie nicht die Möglichkeit haben, all diese verschiedenen Browser, Betriebssysteme und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die Ihnen erlaubt, mehrere Betriebssystem-/Software-Kombinationen auf Ihrem Desktop-Computer zu emulieren) verwenden. Diese Option ist sehr beliebt, besonders in einigen Fällen — zum Beispiel erlaubt Windows es Ihnen nicht, mehrere Versionen von Windows gleichzeitig auf demselben Computer zu installieren, die Verwendung mehrerer virtueller Maschinen ist hier oft die einzige Option.

Eine andere Möglichkeit sind Benutzergruppen — die Verwendung einer Gruppe von Menschen außerhalb Ihres Entwicklungsteams, um Ihre Website zu testen. Dies könnte eine Gruppe von Freunden oder der Familie sein, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professioneller Benutzer-Testaufbau, bei dem Menschen dafür bezahlt werden, Ihre Website zu testen und Ergebnisse zu liefern.

Zuletzt können Sie intelligenter testen, indem Sie Prüfungs- oder Automatisierungstools verwenden; dies ist eine vernünftige Wahl, da Ihre Projekte größer werden, da all diese Tests von Hand zu machen, wirklich lange dauern kann. Sie können Ihr eigenes Testautomatisierungssystem aufsetzen (wobei [Selenium](https://www.selenium.dev/) die beliebte App der Wahl ist), das zum Beispiel Ihre Website in einer Anzahl verschiedener Browser lädt und:

- sehen, ob ein Buttonklick erfolgreich etwas bewirkt (wie zum Beispiel die Anzeige einer Karte), die Ergebnisse anzeigen, sobald die Tests abgeschlossen sind
- einen Screenshot von jedem machen, so dass Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie Geld in Tests investieren möchten, gibt es auch kommerzielle Tools, die einen Großteil der Einrichtung und Tests für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglicht normalerweise einen {{Glossary("continuous_integration", "kontinuierlichen Integrations")}} Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingepflegt werden dürfen.

#### Testing auf Pre-Release-Browsern

Es ist oft eine gute Idee, auf Pre-Release-Versionen von Browsern zu testen; siehe folgende Links:

- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders verbreitet, wenn Sie auf Ihrer Website sehr neue Technologien einsetzen und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Fehlerbehebung/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was zu tun ist, ist es, die Stellen so weit wie möglich einzugrenzen, an denen der Fehler auftritt. Suchen Sie so viele Informationen wie möglich von der Person, die den Fehler gemeldet hat — welche Plattform(en), Gerät(e), Browserversion(en) etc. Versuchen Sie es auf ähnlichen Konfigurationen (z. B. gleiche Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit verbreitet der Fehler ist.

Es könnte nicht Ihr Fehler sein — wenn ein Fehler in einem Browser existiert, wird ihn hoffentlich der Anbieter schnell beheben. Er könnte bereits behoben worden sein — zum Beispiel, wenn ein Fehler in Firefox Release 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann haben sie ihn behoben. Wenn er nicht behoben wurde, möchten Sie möglicherweise einen Fehler melden (siehe [Fehler melden](#fehler_melden), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Fehlers herauszufinden, erfordert die gleiche Strategie wie jeder andere Webentwicklungsfehler (siehe, noch einmal, [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schiefgelaufen? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser, in dem er Probleme verursacht, umgehen können — Sie können den problematischen Code nicht einfach ändern, da dies den Code in anderen Browsern kaputt machen könnte. Der allgemeine Ansatz ist normalerweise, den Code auf irgendeine Weise zu verzweigen, zum Beispiel JavaScript-Funktionserkennungscode zu verwenden, um Situationen zu erkennen, in denen eine problematische Funktion nicht funktioniert, und in diesen Fällen anderen Code laufen zu lassen, der funktioniert.

Nachdem eine Lösung implementiert wurde, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Lösung ordnungsgemäß funktioniert und die Website nicht an anderer Stelle oder in anderen Browsern kaputt gegangen ist.

## Fehler melden

Um es noch einmal zu wiederholen, wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte, die Sie über Cross-Browser-Testing wissen müssen, geliefert haben. Mit diesem Wissen sind Sie jetzt bereit, sich weiter mit Strategien für Cross-Browser-Testing zu beschäftigen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
