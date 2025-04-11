---
title: Einführung in das plattformübergreifende Testen
short-title: Introduction
slug: Learn_web_development/Extensions/Testing/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel bietet einen Überblick über das plattformübergreifende Testen: was plattformübergreifendes Testen ist, einige häufige Probleme und einige Ansätze zum Debuggen/Fehlerbehebung.

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
        Ein Verständnis der übergeordneten Konzepte des plattformübergreifenden Testens zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist plattformübergreifendes Testen?

Plattformübergreifendes Testen ist die Praxis, sicherzustellen, dass eine Website in verschiedenen Browsern und auf verschiedenen Geräten funktioniert. Webentwickler sollten Folgendes berücksichtigen:

- Verschiedene Browser, einschließlich etwas älterer, die nicht alle neuesten JS/CSS-Funktionen unterstützen.
- Verschiedene Geräte, von Desktops und Laptops bis hin zu Tablets und Smartphones, bis zu Smart-TVs, mit unterschiedlichen Hardwarefähigkeiten.
- Menschen mit Behinderungen, die möglicherweise auf Hilfstechnologien wie Bildschirmlesegeräte angewiesen sind oder nur eine Tastatur verwenden.

Denken Sie daran, dass Sie nicht Ihre Benutzer sind – nur weil Ihre Seite auf Ihrem MacBook Pro oder einem High-End Galaxy Nexus funktioniert, heißt das nicht, dass sie für alle Ihre Benutzer funktionieren wird!

> **Note:** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) behandelt die verschiedenen Browser, deren Marktanteil und damit verbundene plattformübergreifende Kompatibilitätsprobleme.

Websites sollten über verschiedene Browser und Geräte hinweg zugänglich sein und auch für Menschen mit Behinderungen zugänglich sein (z. B. bildschirmleserfreundlich). Eine Seite muss nicht die exakt gleiche Erfahrung in allen Browsern und Geräten liefern, solange die Kernfunktionen auf irgendeine Weise zugänglich sind. Zum Beispiel könnte ein moderner Browser etwas animiertes, 3D und glänzendes haben, während ältere Browser nur eine flache Grafik mit denselben Informationen anzeigen.

Es ist außerdem praktisch unmöglich, dass eine Website auf ALLEN Browsern und Geräten funktioniert. Daher sollte ein Webentwickler eine Vereinbarung mit dem Website-Besitzer treffen, auf welcher Bandbreite von Browsern und Geräten der Code funktionieren wird.

## Warum treten plattformübergreifende Probleme auf?

Es gibt viele verschiedene Gründe, warum plattformübergreifende Probleme auftreten, und beachten Sie, dass wir hier über Probleme sprechen, bei denen sich Dinge in verschiedenen Browsern/Geräten/Browsereinstellungen unterschiedlich verhalten. Bevor Sie überhaupt zu plattformübergreifenden Problemen kommen, sollten Sie bereits Fehler in Ihrem Code behoben haben (siehe [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), um Ihr Gedächtnis bei Bedarf aufzufrischen).

Plattformübergreifende Probleme treten häufig auf, weil:

- manchmal Browser Bugs haben oder Funktionen unterschiedlich implementieren. Diese Situation ist bei weitem nicht mehr so schlimm wie früher; als IE4 und Netscape 4 in den 1990er Jahren darum kämpften, der dominierende Browser zu sein, implementierten die Browserunternehmen absichtlich Dinge unterschiedlich, um sich einen Wettbewerbsvorteil zu verschaffen, was das Leben der Entwickler zur Hölle machte. Heutzutage folgen Browser viel besser den Standards, aber Unterschiede und Bugs schleichen sich manchmal immer noch ein.
- einige Browser möglicherweise unterschiedliche Unterstützungsstufen für Technologie-Features haben als andere. Dies ist unvermeidlich, wenn Sie mit modernen Features zu tun haben, die Browser gerade beginnen zu implementieren, oder wenn Sie sehr alte Browser unterstützen müssen, die nicht mehr weiterentwickelt werden und möglicherweise lange eingefroren wurden, bevor ein neues Feature überhaupt erfunden wurde. Als Beispiel: Wenn Sie hochmoderne JavaScript-Features auf Ihrer Seite verwenden möchten, funktionieren diese möglicherweise nicht in älteren Browsern. Wenn Sie ältere Browser unterstützen müssen, können Sie diese möglicherweise nicht verwenden oder müssen Ihren Code mithilfe eines Cross-Compilers in eine altmodische Syntax konvertieren.
- einige Geräte Einschränkungen haben, die dazu führen, dass eine Website langsam läuft oder schlecht angezeigt wird. Wenn eine Seite beispielsweise so gestaltet wurde, dass sie auf einem Desktop-PC gut aussieht, wird sie auf einem mobilen Gerät wahrscheinlich winzig erscheinen und schwer zu lesen sein. Wenn Ihre Seite viele große Animationen enthält, könnte sie auf einem High-End-Tablet in Ordnung laufen, jedoch auf einem Low-End-Gerät langsam oder ruckelig sein.

…und noch mehr Gründe.

In späteren Artikeln werden wir häufige plattformübergreifende Probleme erkunden und uns deren Lösungen ansehen.

## Arbeitsabläufe für plattformübergreifendes Testen

Das ganze plattformübergreifende Testen klingt möglicherweise zeitaufwändig und beängstigend, muss es aber nicht sein – Sie müssen nur sorgfältig dafür planen und sicherstellen, dass Sie ausreichend in den richtigen Bereichen testen, um nicht auf unerwartete Probleme zu stoßen. Wenn Sie an einem großen Projekt arbeiten, sollten Sie es regelmäßig testen, um sicherzustellen, dass neue Funktionen für Ihr Zielpublikum funktionieren und dass neue Ergänzungen zum Code keine alten, zuvor funktionierenden Funktionen brechen.

Wenn Sie alle Tests bis zum Ende eines Projekts aufschieben, sind die von Ihnen entdeckten Bugs viel teurer und zeitaufwändiger zu beheben, als wenn Sie sie entdecken und beheben, während Sie vorankommen.

Der Arbeitsablauf für Tests und Bugfixes eines Projekts kann grob in die folgenden vier Phasen unterteilt werden (dies ist nur sehr grob – verschiedene Personen können Dinge ganz anders machen):

**Erste Planung** > **Entwicklung** > **Testen/Entdeckung** > **Korrekturen/Iteration**

Schritte 2–4 werden so oft wie nötig wiederholt, um alle Implementierungen abzuschließen. Wir werden die verschiedenen Teile des Testprozesses in nachfolgenden Artikeln viel detaillierter betrachten, allerdings fassen wir zunächst zusammen, was in jedem Schritt vorkommen könnte.

### Erste Planung

In der ersten Planungsphase werden Sie wahrscheinlich mehrere Planungstreffen mit dem Site-Inhaber/Klienten haben (dies könnte Ihr Vorgesetzter sein oder jemand von einem externen Unternehmen, für das Sie eine Website erstellen), in denen Sie genau bestimmen, was die Website sein soll — welchen Inhalt und welche Funktionen sie haben soll, wie sie aussehen soll usw. Zu diesem Zeitpunkt möchten Sie auch wissen, wie viel Zeit Sie zur Entwicklung der Website haben — was ist ihre Frist und wie viel werden sie Ihnen für Ihre Arbeit bezahlen? Wir werden hier nicht ins Detail gehen, aber plattformübergreifende Probleme können erhebliche Auswirkungen auf solche Planungen haben.

Sobald Sie eine Idee der erforderlichen Funktionen haben und welche Technologien Sie wahrscheinlich für deren Herstellung verwenden werden, sollten Sie beginnen, die Zielgruppe zu erkunden — welche Browser, Geräte usw. wird die Zielgruppe für diese Website verwenden? Der Kunde hat möglicherweise bereits Daten darüber aus früheren Recherchen, die sie durchgeführt haben, z. B. von anderen Websites, die sie besitzen, oder von vorherigen Versionen der Website, an der Sie jetzt arbeiten. Falls nicht, können Sie sich ein gutes Bild machen, indem Sie andere Quellen betrachten, wie z. B. Nutzungsstatistiken von Wettbewerbern oder Länder, die die Website bedienen wird. Sie können auch etwas Intuition verwenden.

Beispielsweise könnten Sie eine E-Commerce-Website erstellen, die Kunden in Nordamerika bedient. Die Website sollte voll funktionsfähig in den letzten Versionen der beliebtesten Desktop- und mobilen Browser sein — dies sollte Chrome (und Edge, Opera, da sie auf derselben Rendering-Engine wie Chrome basieren), Firefox und Safari umfassen.
Es sollte auch mit WCAG AA-Konformität zugänglich sein.

Jetzt, wo Sie Ihre Ziel-Testplattformen kennen, sollten Sie zurückgehen und die erforderlichen Funktionen und Technologien, die Sie verwenden werden, erneut überprüfen.
Zum Beispiel, wenn der E-Commerce-Site-Inhaber eine WebGL-unterstützte 3D-Führung durch jedes Produkt auf den Produktseiten integriert haben möchte, müssen sie akzeptieren, dass dies einfach nicht in allen alten Browserversionen funktioniert.

Sie sollten eine Liste mit potenziellen Problemfeldern erstellen.

> [!NOTE]
> Sie können Browser-Kompatibilitätsinformationen für Technologien finden, indem Sie die verschiedenen Features auf MDN nachschlagen — die Website, auf der Sie sich befinden! Sie sollten auch [caniuse.com](https://caniuse.com/) konsultieren, für einige weitere nützliche Details.

Sobald Sie sich auf diese Details geeinigt haben, können Sie mit der Entwicklung der Website beginnen.

### Entwicklung

Weiter zur Entwicklung der Website. Sie sollten die verschiedenen Teile der Entwicklung in Module unterteilen, beispielsweise könnten Sie die verschiedenen Bereiche der Website aufteilen — Startseite, Produktseite, Einkaufswagen, Zahlungsablauf usw. Sie könnten diese dann noch weiter unterteilen — gemeinsame Site-Kopf- und Fußzeile implementieren, Produktseite Detailansicht implementieren, persistentes Einkaufswagen-Widget implementieren usw.

Es gibt mehrere allgemeine Strategien für die plattformübergreifende Entwicklung, zum Beispiel:

- Alle Funktionen so nah wie möglich in allen Ziel-Browsern arbeiten lassen. Dies kann das Schreiben von verschiedenen Code-Pfaden erfordern, die die Funktionalität auf unterschiedliche Weise reproduzieren, die für verschiedene Browser gedacht sind, oder ein {{Glossary("Polyfill", "Polyfill")}} verwenden, um fehlende Unterstützung mithilfe von JavaScript oder anderen Technologien zu imitieren, oder eine Bibliothek verwenden, die es Ihnen ermöglicht, einen einzigen Code zu schreiben und dann im Hintergrund verschiedene Dinge je nach Browser-Unterstützung zu tun.
- Akzeptieren, dass einige Dinge nicht auf allen Browsern gleich funktionieren werden, und unterschiedliche (akzeptable) Lösungen in Browsern bereitstellen, die die volle Funktionalität nicht unterstützen. Manchmal ist dies unvermeidlich aufgrund von Geräteeinschränkungen — ein Kinobreitbildschirm wird nicht dasselbe visuelle Erlebnis wie ein 4-Zoll-Bildschirm bieten, unabhängig davon, wie Sie Ihre Website programmieren.
- Akzeptieren, dass Ihre Website einfach auf einigen älteren Browsern nicht funktionieren wird, und weitermachen. Dies ist in Ordnung, vorausgesetzt Ihr Kunde/Nutzerkreis ist damit einverstanden.

Normalerweise wird Ihre Entwicklung eine Kombination der oben genannten drei Ansätze beinhalten. Das Wichtigste ist, dass Sie jeden kleinen Teil testen, bevor Sie ihn endgültig festlegen — lassen Sie nicht alle Tests bis zum Ende!

### Testen/Entdeckung

Nach jeder Implementierungsphase müssen Sie die neue Funktionalität testen. Zunächst sollten Sie sicherstellen, dass es keine allgemeinen Probleme mit Ihrem Code gibt, die das Funktionieren Ihres Features stoppen:

1. Testen Sie es in einigen stabilen Browsern auf Ihrem System, wie Firefox, Safari, Chrome oder Edge.
2. Führen Sie einige einfache Barrierefreiheitsprüfungen durch, beispielsweise indem Sie versuchen, Ihre Website nur mit der Tastatur zu verwenden, oder Ihre Website über einen Bildschirmleser verwenden, um zu sehen, ob sie navigierbar ist.
3. Testen Sie auf einer mobilen Plattform, z. B. Android oder iOS.

Zu diesem Zeitpunkt beheben Sie alle Probleme, die Sie mit Ihrem neuen Code finden.

Als Nächstes sollten Sie versuchen, Ihre Liste der Test-Browser auf eine vollständige Liste der Zielpublikum-Browser zu erweitern und sich darauf konzentrieren, plattformübergreifende Probleme zu beseitigen (siehe der nächste Artikel für weitere Informationen darüber, wie Sie Ihren Zielbrowser bestimmen können: [determining your target browsers](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)). Zum Beispiel:

- Versuchen Sie, die neueste Änderung auf allen modernen Desktop-Browsern zu testen, die Sie können — einschließlich Firefox, Chrome, Opera, Edge und Safari auf Desktop (Mac, Windows und Linux, idealerweise).
- Testen Sie es in gängigen Telefon- und Tablet-Browsern (z. B. iOS Safari auf iPhone/iPad, Chrome und Firefox auf iPhone/iPad/Android),
- Führen Sie auch Tests in anderen Browsern durch, die Sie in Ihre Zielliste aufgenommen haben.

Die einfachste Möglichkeit ist, einfach alle Tests, die Sie können, selbst durchzuführen (indem Sie, falls Sie in einem Team arbeiten, Teammitglieder zur Hilfe heranziehen). Sie sollten versuchen, es auf echten physischen Geräten, wenn möglich, zu testen.

Wenn Sie nicht die Mittel haben, all diese verschiedenen Browser-, Betriebsplattform- und Geräte-Kombinationen auf physischer Hardware zu testen, können Sie auch Emulatoren verwenden (ein Gerät mithilfe von Software auf Ihrem Desktop-Computer simulieren) und virtuelle Maschinen (Software, die es Ihnen ermöglicht, mehrere Betriebssysteme/Softwarekombinationen auf Ihrem Desktop-Computer zu simulieren). Dies ist eine sehr beliebte Wahl, insbesondere in einigen Fällen — zum Beispiel erlaubt Windows nicht, dass Sie mehrere Windows-Versionen gleichzeitig auf demselben Rechner installiert haben, daher ist die Verwendung mehrerer virtueller Maschinen hier oft die einzige Option.

Eine weitere Möglichkeit sind Benutzergruppen — die Nutzung einer Gruppe von Menschen außerhalb Ihres Entwicklungsteams, um Ihre Website zu testen. Dies könnte eine Gruppe von Freunden oder Familienmitgliedern, eine Gruppe anderer Mitarbeiter, eine Klasse an einer lokalen Universität oder ein professionelles Benutzertest-Setup sein, bei dem Personen bezahlt werden, um Ihre Website zu testen und Ergebnisse bereitzustellen.

Schließlich können Sie mit Ihrem Testen intelligenter werden, indem Sie Auditierungs- oder Automatisierungstools verwenden; dies ist eine sinnvolle Wahl, wenn Ihre Projekte größer werden, da all dieses Testen per Hand begonnen kann, wirklich lange zu dauern. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl), das beispielsweise Ihre Website in einer Anzahl verschiedener Browser laden und:

- prüfen kann, ob ein Button-Klick erfolgreich etwas bewirkt (wie zum Beispiel die Anzeige einer Karte), wobei die Ergebnisse angezeigt werden, sobald die Tests abgeschlossen sind,
- einen Screenshot von jedem machen kann, sodass Sie sehen können, ob ein Layout in den verschiedenen Browsern konsistent ist.

Wenn Sie Geld in Tests investieren möchten, gibt es auch kommerzielle Tools, die viel von der Einrichtung und dem Testen für Sie automatisieren können (wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/)). Diese Art von Tools ermöglicht normalerweise einen kontinuierlichen Integrationsworkflow, bei dem Codeänderungen automatisch getestet werden, bevor sie in Ihr Code-Repository eingereicht werden dürfen.

#### Testen auf Vorabversionen von Browsern

Es ist oft eine gute Idee, auf Vorabversionen von Browsern zu testen; siehe die folgenden Links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Microsoft Edge Insider](https://www.microsoft.com/en-us/edge/download/insider)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Opera Developer](https://www.opera.com/opera/developer)

Dies ist besonders verbreitet, wenn Sie sehr neue Technologien auf Ihrer Website verwenden und gegen die neuesten Implementierungen testen möchten, oder wenn Sie auf einen Bug in der neuesten Release-Version eines Browsers stoßen und sehen möchten, ob die Entwickler des Browsers den Bug in einer neueren Version behoben haben.

### Korrekturen/Iteration

Sobald Sie einen Bug entdeckt haben, müssen Sie versuchen, ihn zu beheben.

Das Erste, was zu tun ist, den Bereich, in dem der Bug auftritt, so weit wie möglich einzugrenzen. Holen Sie so viele Informationen wie möglich von der Person ein, die den Bug meldet — welche Plattform(en), Gerät(e), Browserversion(en) etc. Versuchen Sie es mit ähnlichen Konfigurationen (z. B. dieselbe Browserversion auf verschiedenen Desktop-Plattformen oder ein paar verschiedene Versionen desselben Browsers auf derselben Plattform), um zu sehen, wie weit verbreitet der Bug ist.

Es könnte nicht Ihre Schuld sein — wenn ein Bug in einem Browser existiert, dann wird der Anbieter diesen hoffentlich schnell beheben. Es könnte schon behoben worden sein — beispielsweise, wenn ein Bug in der Firefox-Version 49 vorhanden ist, aber nicht mehr in Firefox Nightly (Version 52), dann haben sie ihn behoben. Wenn er nicht behoben ist, dann möchten Sie möglicherweise einen Bug melden (siehe unten [Melden von Bugs](#melden_von_bugs)).

Wenn es Ihr Fehler ist, müssen Sie ihn beheben! Das Finden der Ursache des Bugs beinhaltet dieselbe Strategie wie bei jedem Webentwicklungs-Bug (siehe erneut [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML), [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) und [What went wrong? Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)). Sobald Sie herausgefunden haben, was Ihren Bug verursacht, müssen Sie entscheiden, wie Sie es in dem bestimmten Browser umgehen, in dem es Probleme verursacht — Sie können das Problemverursachende Code nicht einfach ändern, da dies den Code in anderen Browsern brechen könnte. Der allgemeine Ansatz besteht normalerweise darin, den Code auf irgendeine Weise zu verzweigen, z. B. JavaScript-Feature-Erkennungscode zu verwenden, um Situationen zu erkennen, in denen ein Problem-Feature nicht funktioniert, und in diesen Fällen anderen Code auszuführen, der funktioniert.

Sobald eine Korrektur vorgenommen wurde, möchten Sie Ihren Testprozess erneut durchlaufen, um sicherzustellen, dass Ihre Korrektur in Ordnung ist und die Website nicht anderweitig oder in anderen Browsern beschädigt.

## Melden von Bugs

Um das oben Gesagte zu wiederholen, wenn Sie Bugs in Browsern entdecken, sollten Sie sie melden:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://issues.chromium.org/issues)
- [Opera](https://opera.atlassian.net/servicedesk/customer/portal/9)

## Zusammenfassung

Dieser Artikel sollte Ihnen ein übergeordnetes Verständnis der wichtigsten Konzepte gegeben haben, die Sie über plattformübergreifendes Testen wissen müssen. Mit diesem Wissen sind Sie jetzt bereit, weiterzumachen und beginnen, mehr über plattformübergreifende Teststrategien zu lernen.

{{NextMenu("Learn_web_development/Extensions/Testing/Testing_strategies", "Learn_web_development/Extensions/Testing")}}
