---
title: Einführung in das plattformübergreifende Testen
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel gibt einen Überblick über das plattformübergreifende Testen: Was plattformübergreifendes Testen ist, einige häufige Probleme und einige Ansätze zur Fehlerbehebung.

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
        Ein Verständnis der hochrangigen Konzepte des plattformübergreifenden Testens zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist plattformübergreifendes Testen?

Plattformübergreifendes Testen ist die Praxis, sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones, zu Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die möglicherweise auf unterstützende Technologien wie Bildschirmleser angewiesen sind oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Nutzer sind – nur weil Ihre Seite auf Ihrem MacBook Pro oder einem High-End Galaxy Nexus funktioniert, bedeutet das nicht, dass sie für alle Ihre Nutzer funktioniert!

> **Hinweis:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) behandelt die verschiedenen Browser, ihren Marktanteil und damit verbundene plattformübergreifende Kompatibilitätsprobleme.

Websites sollten in verschiedenen Browsern und auf verschiedenen Geräten sowie für Menschen mit Behinderungen zugänglich sein (z.B. bildschirmleserfreundlich). Eine Seite muss nicht in allen Browsern und auf allen Geräten dasselbe Erlebnis bieten, solange die Kernfunktionalität auf irgendeine Weise zugänglich ist. Beispielsweise könnte ein moderner Browser eine Animation, 3D und etwas Glänzendes haben, während ältere Browser nur eine flache Grafik mit derselben Information anzeigen.

Außerdem ist es nahezu unmöglich, dass eine Website in ALLEN Browsern und auf allen Geräten funktioniert. Ein Webentwickler sollte sich daher mit dem Website-Besitzer auf die Bandbreite an Browsern und Geräten einigen, auf denen der Code funktionieren soll.

## Warum treten plattformübergreifende Probleme auf?

Es gibt viele verschiedene Gründe, warum plattformübergreifende Probleme auftreten können. Beachten Sie, dass wir hier über Probleme sprechen, bei denen sich das Verhalten in verschiedenen Browsern/Geräten/Browsereinstellungen unterscheidet. Bevor Sie überhaupt zu plattformübergreifenden Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) um Ihr Gedächtnis bei Bedarf aufzufrischen).

Plattformübergreifende Probleme treten häufig auf, weil:

- manchmal Browser Fehler haben oder Funktionen unterschiedlich implementieren. Diese Situation ist weitaus weniger problematisch als früher; als IE4 und Netscape 4 in den 1990er Jahren konkurrierten, um der dominierende Browser zu sein, implementierten Browserunternehmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben der Entwickler zur Hölle machte. Heutzutage halten sich Browser viel besser an Standards, aber Unterschiede und Fehler schleichen sich manchmal trotzdem ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsniveaus für Technologiefunktionen bieten als andere. Dies ist unvermeidlich, wenn Sie mit hochmodernen Funktionen zu tun haben, die Browser gerade implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr entwickelt werden und deren Entwicklung längst eingestellt wurde, bevor eine neue Funktion erfunden wurde. Wenn Sie beispielsweise hochentwickelte JavaScript-Funktionen auf Ihrer Seite verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, könnten Sie gezwungen sein, auf deren Verwendung zu verzichten oder Ihren Code mithilfe eines Art Cross-Compilers bei Bedarf in eine altmodische Syntax zu konvertieren.
- einige Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Website beispielsweise so gestaltet ist, dass sie auf einem Desktop-PC gut aussieht, wird sie auf einem mobilen Gerät wahrscheinlich winzig aussehen und schwer lesbar sein. Wenn Ihre Seite viele große Animationen enthält, könnte sie auf einem High-End-Tablet in Ordnung sein, aber auf einem Low-End-Gerät träge oder ruckelig wirken.

...und weitere Gründe.

In späteren Artikeln werden wir häufige plattformübergreifende Probleme untersuchen und Lösungen dafür betrachten.

## Arbeitsabläufe für plattformübergreifendes Testen

All diese plattformübergreifenden Tests mögen zeitaufwendig und beängstigend klingen, müssen es aber nicht sein — Sie müssen nur sorgfältig planen und sicherstellen, dass Sie an den richtigen Stellen ausreichend testen, um unerwartete Probleme zu vermeiden. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Ergänzungen am Code keine alten Funktionen zerstören, die zuvor funktionierten.

Wenn Sie alle Tests erst am Ende eines Projekts durchführen, sind alle entdeckten Fehler weitaus teurer und zeitaufwendiger zu beheben, als wenn Sie diese während der Entwicklung entdecken und beheben.

Der Workflow für Tests und Fehlerbehebungen in einem Projekt kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob — verschiedene Personen können Dinge ganz anders handhaben):

**Erste Planung** > **Entwicklung** > **Test/Entdeckung** > **Fehlerbehebungen/Wiederholung**

Die Schritte 2–4 werden so oft wie nötig wiederholt, um die gesamte Implementierung abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in nachfolgenden Artikeln viel ausführlicher betrachten, aber im Moment fassen wir kurz zusammen, was in jedem Schritt passieren kann.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungssitzungen mit dem Website-Eigentümer/Kunden (das könnte Ihr Chef sein oder jemand aus einem externen Unternehmen, für den Sie eine Website erstellen) haben, in denen Sie genau festlegen, was die Website sein soll – welchen Inhalt und welche Funktionen sie haben soll, wie sie aussehen soll usw. An diesem Punkt wollen Sie auch wissen, wie viel Zeit Sie für die Entwicklung der Site haben – was ist ihre Deadline und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden nicht ins Detail gehen, aber plattformübergreifende Probleme können solche Planungen erheblich beeinflussen.

Sobald Sie eine Vorstellung vom erforderlichen Funktionsumfang und den Technologien haben, mit denen Sie diese Funktionen wahrscheinlich umsetzen werden, sollten Sie anfangen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird die Zielgruppe für diese Website verwenden? Der Kunde hat möglicherweise bereits Daten dazu aus früheren Recherchen, die er durchgeführt hat, z.B. von anderen Websites, die er besitzt, oder von früheren Versionen der Website, an der Sie gerade arbeiten. Wenn nicht, können Sie sich eine gute Vorstellung machen, indem Sie andere Quellen ansehen, wie z.B. Nutzungsstatistiken von Wettbewerbern oder Länder, die die Seite bedienen wird. Sie können auch etwas Intuition verwenden.

Angenommen, Sie erstellen eine E-Commerce-Website, die Kunden in Nordamerika bedient. Die Seite sollte vollständig in den letzten Versionen der beliebtesten Desktop- und mobilen Browser funktionieren — dies sollte Chrome (und Edge, Opera, da sie auf derselben Rendering-Engine wie Chrome basieren), Firefox und Safari einschließen.
Sie sollte außerdem mit WCAG AA-Konformität zugänglich sein.

Jetzt kennen Sie Ihre Ziel-Test-Plattformen, Sie sollten zurückgehen und die erforderlichen Funktionssets und die Technologien, die Sie verwenden werden, überprüfen.
Wenn der E-Commerce-Seitenbesitzer beispielsweise eine WebGL-gestützte 3D-Tour jedes Produkts in die Produktseiten eingebaut haben möchte, wird er akzeptieren müssen, dass dies einfach nicht in allen älteren Browserversionen funktionieren wird.

Sie sollten eine Liste der potenziellen Problembereiche erstellen.

> [!NOTE]
> Sie können Informationen zur Browserunterstützung für Technologien finden, indem Sie die verschiedenen Funktionen auf MDN nachschlagen — der Seite, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, um einige weitere nützliche Details zu erhalten.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Nun zur Entwicklung der Website. Sie sollten die verschiedenen Entwicklungsbereiche in Module aufteilen, beispielsweise könnten Sie die verschiedenen Website-Bereiche aufteilen – Startseite, Produktseite, Warenkorb, Zahlungsablauf usw. Sie könnten diese dann weiter unterteilen – eine allgemeine Website-Kopfzeile und Fußzeile implementieren, Produktseitendetailsansicht implementieren, persistentes Warenkorb-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien für die plattformübergreifende Entwicklung, zum Beispiel:

- Alle Funktionen so nah wie möglich in allen Zielbrowsern zum Laufen bringen. Dies kann das Schreiben verschiedener Codepfade umfassen, die die Funktionen auf unterschiedliche Weise reproduzieren, die auf verschiedene Browser abzielen, oder die Verwendung eines {{Glossary("Polyfill", "Polyfill")}}, um fehlende Unterstützung mithilfe von JavaScript oder anderen Technologien zu emulieren, oder die Verwendung einer Bibliothek, die es ermöglicht, ein einziges Stück Code zu schreiben und im Hintergrund je nach Browserunterstützung unterschiedliche Dinge auszuführen.
- Akzeptieren, dass manche Dinge nicht in allen Browsern gleich funktionieren und verschiedene (akzeptable) Lösungen in Browsern bieten, die nicht die vollständige Funktionalität unterstützen. Manchmal ist dies aufgrund von Geräteeinschränkungen unvermeidlich – ein Kinowidescreen wird nicht dasselbe visuelle Erlebnis bieten wie ein 4-Zoll-Mobilbildschirm, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach in einigen älteren Browsern nicht funktionieren wird, und damit weitermachen. Das ist in Ordnung, vorausgesetzt, Ihr Kunde/Nutzerbasis ist damit einverstanden.

In der Regel wird Ihre Entwicklung eine Kombination der obigen drei Ansätze umfassen. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn festschreiben – lassen Sie nicht alle Tests bis zum Ende!

### Test/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zuerst sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die Ihre Funktion daran hindern, zu funktionieren:

1. Testen Sie es in ein paar stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Machen Sie einige einfache Zugänglichkeits-Tests, wie zum Beispiel, Ihre Site nur mit der Tastatur zu verwenden, oder Ihre Site über einen Bildschirmleser zu verwenden, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, wie Android oder iOS.

An diesem Punkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als Nächstes sollten Sie Ihre Liste der Testbrowser auf eine vollständige Liste der Zielgruppen-Browser erweitern und sich darauf konzentrieren, plattformübergreifende Probleme auszumerzen (sehen Sie sich den nächsten Artikel für mehr Informationen zum [Bestimmen Ihrer Zielbrowser](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies) an). Beispielsweise:

- Versuchen Sie, die letzte Änderung in allen modernen Desktop-Browsern zu testen, zu denen Sie Zugang haben – einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktops (Mac, Windows und idealerweise Linux).
- Testen Sie es in gängigen Handy- und Tablet-Browsern (z.B. iOS-Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in allen anderen Browsern durch, die Sie in Ihre Ziel-Liste aufgenommen haben.

Die einfachste Option ist es, alle Tests selbst durchzuführen (ziehen Sie Teammitglieder hinzu, wenn Sie in einem Team arbeiten). Sie sollten versuchen, auf echten physischen Geräten zu testen, wo möglich.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser-, Betriebssystem- und Geräte-Kombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren (ein Gerät mit Software auf Ihrem Desktop-Computer emulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssystem-/Softwarekombinationen auf Ihrem Desktop-Computer zu emulieren) verwenden. Dies ist eine sehr beliebte Wahl, besonders in einigen Situationen — beispielsweise erlaubt Windows nicht, mehrfach verschiedene Windows-Versionen gleichzeitig auf derselben Maschine zu installieren, daher ist die Verwendung mehrerer virtueller Maschinen oft die einzige Option hier.

Eine weitere Option sind Benutzergruppen — die Verwendung einer Gruppe von Personen außerhalb Ihres Entwicklungsteams, um Ihre Site zu testen. Dies könnte eine Gruppe von Freunden oder Familie sein, eine Gruppe anderer Mitarbeiter, eine Klasse an einer örtlichen Universität oder ein professionelles Benutzertest-Setup, bei dem Personen bezahlt werden, um Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie Ihre Tests mit Prüf- oder Automatisierungswerkzeugen intelligenter machen; dies ist eine vernünftige Wahl, wenn Ihre Projekte größer werden, da es sehr lange dauern kann, all diese Tests manuell durchzuführen. Sie können Ihr eigenes Testautomationssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl der Anwendung), das zum Beispiel Ihre Website in einer Reihe verschiedener Browser lädt und:

- überprüft, ob ein Klick auf eine Schaltfläche etwas erfolgreich auslöst (wie zum Beispiel das Anzeigen einer Karte), und die Ergebnisse anzeigt, sobald die Tests abgeschlossen sind.
- einen Screenshot von jeder Möglichkeit erstellt, damit Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie in das Testen investieren möchten, gibt es auch kommerzielle Tools, die viel von der Einrichtung und dem Testen für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Arten von Tools ermöglichen normalerweise einen kontinuierlichen Integrations-Workflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository aufgenommen werden dürfen.

#### Testen auf Vorab-Veröffentlichungsbrowsern

Es ist oft eine gute Idee, auf Vorab-Veröffentlichungsversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien in Ihrer Site verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Fehler in der neuesten Releaseversion eines Browsers stoßen und prüfen möchten, ob die Entwickler des Browsers den Fehler in einer neueren Version behoben haben.

### Fehlerbehebungen/Wiederholung

Sobald Sie einen Fehler entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das erste, was zu tun ist, ist herauszufinden, wo der Fehler so genau wie möglich auftritt. Holen Sie so viele Informationen wie möglich von der Person ein, die den Fehler meldet — welche Plattform(en), Gerät(e), Browserversion(en) usw. Testen Sie es auf ähnlichen Konfigurationen (z.B. dieselbe Browserversion auf verschiedenen Desktopplattformen oder einige verschiedene Versionen desselben Browsers auf derselben Plattform), um herauszufinden, in welchem Umfang der Fehler besteht.

Vielleicht ist es nicht Ihr Fehler — wenn ein Fehler in einem Browser existiert, wird der Anbieter hoffentlich schnell einen Fix dafür bereitstellen. Möglicherweise wurde er bereits behoben — wenn zum Beispiel ein Fehler in der Firefox-Version 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann wurde er behoben. Wenn er nicht behoben ist, möchten Sie möglicherweise einen Fehler melden (siehe [Fehler melden](#fehler_melden), unten).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Die Ursache des Fehlers herauszufinden, erfordert dieselbe Strategie wie jeder andere Webentwicklungsfehler (siehe auch [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihr Fehler verursacht, müssen Sie entscheiden, wie Sie ihn in dem bestimmten Browser umgehen, in dem er Probleme verursacht — Sie können den Problemcode nicht einfach ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz besteht normalerweise darin, den Code auf irgendeine Weise zu verzweigen, z.B. JavaScript-Funktionsprüfcode zu verwenden, um Situationen zu erkennen, in denen eine Problemfunktion nicht funktioniert, und in diesen Fällen einen anderen Code auszuführen, der funktioniert.

Sobald eine Fehlerbehebung erfolgt ist, möchten Sie Ihren Testprozess wiederholen, um sicherzustellen, dass Ihre Behebung funktioniert und nicht dazu geführt hat, dass die Site an anderen Stellen oder in anderen Browsern bricht.

## Fehler melden

Nur um das oben Gesagte zu wiederholen, wenn Sie Fehler in Browsern entdecken, sollten Sie diese melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein grundlegendes Verständnis der wichtigsten Konzepte geben, die Sie über das plattformübergreifende Testen wissen müssen. Mit diesem Wissen sind Sie jetzt bereit, weiterzumachen und Cross-Browser-Teststrategien zu erlernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
