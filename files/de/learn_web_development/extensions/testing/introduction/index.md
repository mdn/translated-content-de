---
title: Einführung in das Cross-Browser-Testing
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das Cross-Browser-Testing: Was Cross-Browser-Testing ist, einige häufige Probleme und einige Ansätze zum Debuggen/Fehlerbehebung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der grundlegenden Konzepte, die beim Cross-Browser-Testing eine Rolle spielen, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Cross-Browser-Testing?

Cross-Browser-Testing ist die Praxis, sicherzustellen, dass eine Website über verschiedene Browser und Geräte hinweg funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Features unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones sowie Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die auf unterstützende Technologien wie Screenreader angewiesen sind oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind — nur weil Ihre Website auf Ihrem MacBook Pro oder einem High-End Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Benutzer funktioniert!

> [!NOTE]
> [Machen Sie das Web für alle nutzbar](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) erörtert die verschiedenen Browser, ihren Marktanteil und damit verbundene Probleme der Cross-Browser-Kompatibilität.

Websites sollten über verschiedene Browser und Geräte hinweg und für Menschen mit Behinderungen zugänglich sein (z.B. Screen-Reader-freundlich). Eine Seite muss nicht das genau gleiche Erlebnis auf allen Browsern und Geräten bieten, solange die Kernfunktionalität auf irgendeine Weise zugänglich ist. Zum Beispiel könnte ein moderner Browser etwas Animiertes, 3D und Glänzendes anzeigen, während ältere Browser einfach eine flache Grafik mit denselben Informationen zeigen.

Ebenso ist es nahezu unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert, daher sollte ein Webentwickler mit dem Seiteninhaber eine Vereinbarung darüber treffen, in welchem Bereich von Browsern und Geräten der Code funktionieren soll.

## Warum treten Cross-Browser-Probleme auf?

Es gibt viele verschiedene Gründe, warum Cross-Browser-Probleme auftreten, und beachten Sie, dass wir hier von Problemen sprechen, bei denen sich Dinge zwischen verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie überhaupt zu Cross-Browser-Problemen kommen, sollten Sie bereits Bugs in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schief gelaufen? Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) aus vorherigen Themen, um Ihr Gedächtnis aufzufrischen, falls nötig).

Cross-Browser-Probleme treten häufig auf, weil:

- mancherorts Browser Bugs haben oder Features unterschiedlich implementieren. Diese Situation ist heutzutage viel weniger schlimm als früher; damals, als IE4 und Netscape 4 in den 1990er Jahren um den dominierenden Browser konkurrierten, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um einen Wettbewerbsvorteil zu erlangen, was das Leben der Entwickler zur Hölle machte. Browser sind heutzutage viel besser darin, Standards zu folgen, aber Unterschiede und Bugs schleichen sich dennoch manchmal ein.
- einige Browser möglicherweise unterschiedliche Unterstützung für technologische Features als andere bieten. Dies ist unvermeidlich, wenn Sie mit hochmodernen Funktionen zu tun haben, die Browser gerade erst implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr weiterentwickelt werden und die längst eingefroren wurden, bevor eine neue Funktion überhaupt erfunden wurde. Zum Beispiel: Wenn Sie hochmoderne JavaScript-Features auf Ihrer Seite verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, müssen Sie möglicherweise darauf verzichten oder Ihren Code mit einem Cross-Compiler in einen altmodischen Syntax umwandeln, wo es nötig ist.
- einige Geräte möglicherweise Einschränkungen aufweisen, die dazu führen, dass eine Website langsam läuft oder schlecht dargestellt wird. Zum Beispiel: Wenn eine Seite so gestaltet wurde, dass sie auf einem Desktop-PC gut aussieht, sieht sie wahrscheinlich winzig aus und ist auf einem mobilen Gerät schwer zu lesen. Wenn Ihre Seite eine Menge großer Animationen enthält, könnte das auf einem hochmodernen Tablet in Ordnung sein, aber auf einem Low-End-Gerät könnte es träge oder ruckelig sein.

…und aus weiteren Gründen.

In späteren Artikeln werden wir häufige Cross-Browser-Probleme erforschen und Lösungen dafür betrachten.

## Workflows für das Cross-Browser-Testing

All dieses Cross-Browser-Testing-Geschäft mag zeitaufwendig und beängstigend klingen, aber das muss es nicht sein - Sie müssen es nur sorgfältig planen und genügend Tests an den richtigen Stellen durchführen, damit Sie nicht auf unerwartete Probleme stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Ergänzungen zum Code keine alten Funktionen brechen, die zuvor funktioniert haben.

Wenn Sie alle Tests bis zum Ende eines Projekts belassen, sind alle gefundenen Fehler viel teurer und zeitaufwendiger zu beheben, als wenn Sie sie entdecken und während des Prozesses beheben.

Der Workflow für das Testen und Fehlerbeheben in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob - verschiedene Personen können dies ganz anders handhaben):

**Erste Planung** > **Entwicklung** > **Testing/Entdeckung** > **Fehlerbehebung/Iteration**

Schritte 2–4 werden so oft wie nötig wiederholt, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testing-Prozesses in den folgenden Artikeln viel detaillierter betrachten, aber für jetzt fassen wir kurz zusammen, was in jedem Schritt passieren kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Seiteninhaber/Klienten haben (das könnte Ihr Chef sein oder jemand von einer externen Firma, für die Sie eine Website erstellen), in denen Sie genau festlegen, was die Website sein soll - welche Inhalte und Funktionen sie haben soll, wie sie aussehen soll, usw. An diesem Punkt möchten Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Seite haben - was ist deren Frist und wie viel werden sie Sie für Ihre Arbeit bezahlen? Wir werden darauf nicht weiter eingehen, aber Cross-Browser-Probleme können erhebliche Auswirkungen auf solche Planungen haben.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang und von den Technologien haben, mit denen Sie diese Funktionen wahrscheinlich umsetzen werden, sollten Sie anfangen, die Zielgruppe zu erkunden — welche Browser, Geräte, etc. wird die Zielgruppe für diese Website verwenden? Der Kunde könnte bereits Daten darüber haben, aus vorherigen Untersuchungen, die er gemacht hat, z. B. von anderen Webseiten, die er besitzt, oder früheren Versionen der Webseite, an der Sie jetzt arbeiten. Wenn nicht, können Sie eine gute Vorstellung gewinnen, indem Sie andere Quellen betrachten, wie Nutzungsstatistiken für Wettbewerber oder Länder, die die Seite bedienen wird. Sie können auch ein wenig Intuition verwenden.

Als Beispiel: Wenn Sie eine E-Commerce-Seite erstellen, die Kunden in Nordamerika bedient, sollte die Seite in den letzten paar Versionen der beliebtesten Desktop- und mobilen Browser vollständig funktionieren - dies sollte Chrome (und Edge, Opera, da sie auf derselben Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen. Sie sollte auch mit WCAG AA-Konformität zugänglich sein.

Nun, da Sie Ihre Ziel-Testplattformen kennen, sollten Sie zurückkehren und den erforderlichen Funktionsumfang und die Technologien, die Sie verwenden werden, überprüfen. Wenn der E-Commerce-Seiteninhaber beispielsweise einen WebGL-gestützten 3D-Rundgang jedes Produkts in die Produktseiten integriert haben möchte, muss er akzeptieren, dass dies einfach nicht mit allen älteren Browserversionen funktioniert.

Sie sollten eine Liste der potenziellen Problembereiche zusammenstellen.

> [!NOTE]
> Sie können Informationen zur Browserunterstützung für Technologien erhalten, indem Sie die verschiedenen Features auf MDN nachschlagen — der Seite, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für einige weitere nützliche Details.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun weiter zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module aufteilen, z. B. könnten Sie die verschiedenen Webseitenbereiche aufsplitten — Startseite, Produktseite, Einkaufswagen, Zahlungsworkflow, usw. Sie könnten diese dann weiter unterteilen — ein gemeinsames Webseiten-Header und -Footer implementieren, die Detailansicht der Produktseite implementieren, ein persistentes Einkaufswagen-Widget implementieren, usw.

Es gibt mehrere allgemeine Strategien für die Cross-Browser-Entwicklung, beispielsweise:

- Lassen Sie alle Funktionen in allen Zielbrowsern so nah wie möglich arbeiten. Dies kann das Schreiben unterschiedlicher Codepfade beinhalten, die Funktionen auf unterschiedliche Weise reproduzieren, die auf verschiedene Browser abzielen, oder die Verwendung eines {{Glossary("Polyfill", "Polyfill")}}, um fehlende Unterstützung mit JavaScript oder anderen Technologien zu imitieren, oder die Verwendung einer Bibliothek, die es ermöglicht, ein einziges Stück Code zu schreiben und dann im Hintergrund je nach Browserunterstützung unterschiedliche Dinge zu tun.
- Akzeptieren, dass manche Dinge nicht bei allen Browsern gleich funktionieren werden, und in Browsern, die nicht die volle Funktionalität unterstützen, unterschiedliche (akzeptable) Lösungen bieten. Manchmal ist dies unvermeidlich aufgrund von Geräteeinschränkungen — ein Kino-Bildschirm im Breitbildformat wird kein visuelles Erlebnis wie ein 4" Mobilscreen bieten, unabhängig davon, wie Sie Ihre Seite programmieren.
- Akzeptieren, dass Ihre Seite einfach nicht in einigen älteren Browsern funktionieren wird, und weitermachen. Das ist in Ordnung, vorausgesetzt, dass Ihr Klient/Nutzerbasis damit einverstanden ist.

Normalerweise wird Ihre Entwicklung eine Kombination der oben genannten drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn einpflegen — belassen Sie das Testen nicht bis zum Ende!

### Testing/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zunächst sollten Sie sicherstellen, dass es keine generellen Probleme mit Ihrem Code gibt, die verhindern, dass Ihr Feature funktioniert:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige lo-fi Accessibility-Tests durch, wie z. B. zu versuchen, Ihre Seite nur mit der Tastatur zu verwenden, oder Ihre Seite über einen Screenreader zu nutzen, um zu sehen, ob sie navigierbar ist.
3. Testen Sie es auf einer Mobilplattform, wie Android oder iOS.

An dieser Stelle beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als nächstes sollten Sie versuchen, Ihre Liste der Testbrowser auf eine vollständige Liste der Zielgruppenbrowser zu erweitern und sich darauf konzentrieren, Cross-Browser-Probleme zu beseitigen (siehe den nächsten Artikel für mehr Informationen zu [der Bestimmung der Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die neueste Änderung in allen modernen Desktop-Browsern zu testen — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (idealerweise Mac, Windows und Linux).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z.B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die lo-fi-Option besteht darin, alle Tests, die Sie können, selbst durchzuführen (Kollegen zur Unterstützung hinzuziehen, wenn Sie in einem Team arbeiten). Sie sollten versuchen, es auf echten physischen Geräten zu testen, wo es möglich ist.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser, Betriebssysteme und Gerätekombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren) einsetzen. Dies ist eine sehr beliebte Wahl, insbesondere in einigen Umständen — zum Beispiel erlaubt Windows es Ihnen nicht, mehrere Versionen von Windows gleichzeitig auf demselben Gerät zu installieren, daher ist die Verwendung mehrerer virtueller Maschinen oft die einzige Option hier.

Eine weitere Option sind Nutzergruppen — eine Gruppe von Personen außerhalb Ihres Entwicklungsteams zur Prüfung Ihrer Seite zu nutzen. Dies könnte eine Gruppe von Freunden oder Familie, eine Gruppe anderer Mitarbeiter, eine Klasse an einer örtlichen Universität oder ein professionelles Nutzer-Test-Setup sein, bei dem Personen bezahlt werden, Ihre Seite zu testen und Ergebnisse zu liefern.

Schließlich können Sie schlauer mit Ihrem Testing werden, indem Sie Auditierungs- oder Automatisierungstools verwenden; dies ist eine sinnvolle Wahl, je größer Ihre Projekte werden, da all diese Tests von Hand zu machen, wirklich lange dauern kann. Sie können Ihr eigenes Testing-Automatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die populäre App der Wahl), das Ihre Seite in einer Anzahl von verschiedenen Browsern laden könnte, und:

- sehen, ob ein Buttonklick dazu führt, dass etwas erfolgreich passiert (wie zum Beispiel eine Karte, die angezeigt wird), die Ergebnisse anzuzeigen, sobald die Tests abgeschlossen sind
- von jedem einen Screenshot machen und Ihnen zeigen, ob ein Layout über die verschiedenen Browser hinweg konsistent ist.

Wenn Sie Geld ins Testing investieren möchten, gibt es auch kommerzielle Werkzeuge, die viel von der Einrichtung und dem Testing für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglichen normalerweise einen {{Glossary("continuous_integration", "kontinuierlichen Integrations")}} Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testing auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; sehen Sie dazu die folgenden Links:

- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
- [Microsoft Edge Insider](https://explore.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies kommt besonders in Betracht, wenn Sie sehr neue Technologien auf Ihrer Seite verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Bug in der neuesten Release-Version eines Browsers stoßen und sehen wollen, ob die Entwickler des Browsers den Bug in einer neueren Version behoben haben.

### Fehlerbehebung/Iteration

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Der erste Schritt besteht darin, das Problem so genau wie möglich einzugrenzen. Holen Sie so viele Informationen wie möglich von der Person, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en), usw. Probieren Sie es auf ähnlichen Konfigurationen (z.B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen desselben Browsers auf derselben Plattform) aus, um zu sehen, wie weit verbreitet der Fehler ist.

Es könnte nicht Ihr Fehler sein — wenn ein Bug in einem Browser vorhanden ist, wird der Anbieter ihn hoffentlich schnell beheben. Es könnte bereits behoben worden sein — wenn z.B. ein Bug in der Firefox-Version 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann haben sie ihn behoben. Wenn er nicht behoben wurde, könnten Sie in Erwägung ziehen, einen Bug zu melden (siehe [Fehler melden](#fehler_melden) unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Bugs herauszufinden, folgt derselben Strategie wie bei jedem Webentwicklung-Bug (siehe erneut [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [Was ist schief gelaufen? Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser umgehen, in dem er Probleme verursacht — Sie können den problematischen Code nicht einfach komplett ändern, da dies den Code in anderen Browsern möglicherweise kaputt machen kann. Der allgemeine Ansatz besteht normalerweise darin, den Code auf irgendeine Weise zu verzweigen, zum Beisp uila mit JavaScript-Feature-Erkennungscode Situationen zu erkennen, in denen ein problematisches Feature nicht funktioniert, und in diesen Fällen einen funktionierenden Code auszuführen.

Wenn eine Behebung erfolgt ist, sollten Sie Ihren Testing-Prozess wiederholen, um sicherzustellen, dass Ihre Behebung korrekt funktioniert und nicht dazu führt, dass die Seite an anderen Stellen oder in anderen Browsern kaputt geht.

## Fehler melden

Um das oben Gesagte zu wiederholen: Wenn Sie Bugs in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte der Cross-Browser-Testing vermitteln. Mit diesem Wissen sind Sie nun bereit, weiterzumachen und mehr über Cross-Browser-Testing-Strategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
