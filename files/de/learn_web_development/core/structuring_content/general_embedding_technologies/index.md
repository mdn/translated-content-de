---
title: Von Objekten zu iframes — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: f08b3d623c43e0256072013372ba393b5bd1a5a0
---

Entwickler denken oft darüber nach, Medien wie Bilder, Videos und Audiodateien in Webseiten einzubetten. In diesem Artikel machen wir einen etwas anderen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden es ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Elemente in Webseiten einbettet, indem man
        {{htmlelement("object")}}, {{htmlelement("embed")}}, und
        {{htmlelement("iframe")}} verwendet, wie PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es populär, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Meisterdokument eingefügt, das als **Frameset** bezeichnet wurde und es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich wie beim Festlegen der Größe von Spalten und Reihen einer Tabelle. Diese galten in den späten 90er Jahren als das Nonplusultra, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile die Download-Geschwindigkeit verbesserte — was besonders bemerkbar war, da die Netzwerkverbindungen damals so langsam waren. Allerdings hatten sie viele Probleme, die alle Vorteile überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, weshalb man sie heute nicht mehr benutzt.

Etwas später (Ende der 90er, Anfang der 2000er) wurden Plugin-Technologien sehr populär, wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese erlaubten Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die HTML allein nicht bieten konnte. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger gebräuchliche {{htmlelement("embed")}} erreicht, und sie waren damals sehr nützlich. Sie sind inzwischen aus der Mode gekommen aufgrund vieler Probleme, einschließlich Barrierefreiheit, Sicherheit, Dateigröße und mehr. Heutzutage haben große Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Methoden zur Einbettung von Inhalten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Dieses bietet eine Möglichkeit, ein gesamtes Webdokument innerhalb eines anderen einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Mit dieser Geschichtsstunde abgehakt, lassen Sie uns weitermachen und sehen, wie man einige dieser Techniken verwendet.

## Spielen mit klassischen Einbettungsanwendungen

In diesem Artikel werden wir direkt in eine Übung einsteigen, um Ihnen sofort eine Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der integrierten Sharing-Funktionen Bescheid.

1. Öffnen Sie zuerst den [MDN Playground](/en-US/play).
2. Schauen wir uns nun an, wie YouTube es uns erlaubt, ein Video in jede beliebige Seite einzubetten, die wir mögen, mithilfe eines {{htmlelement("iframe")}}.
   1. Gehen Sie zu YouTube und finden Sie ein Video, das Ihnen gefällt.
   2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Sharing-Optionen anzuzeigen.
   3. Wählen Sie den _Einbetten_-Button, und Sie erhalten einige `<iframe>`-Codes — kopieren Sie diese.
   4. Fügen Sie es in den _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.
3. Für Bonuspunkte können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in den Playground einzubetten:
   1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
   2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
   3. Wählen Sie die Option _Karte teilen oder einbetten_.
   4. Wählen Sie die Option _Karte einbetten_, die Ihnen einen `<iframe>`-Code gibt – kopieren Sie diesen.
   5. Fügen Sie ihn in den _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Reset_-Button im Playground zurücksetzen.

## iframes im Detail

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}}-Elemente sind dafür vorgesehen, andere Web-Dokumente in das aktuelle Dokument einzubetten. Das ist großartig, um Drittanbieterinhalte in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und deren eigene Version Sie nicht implementieren möchten — wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die Live-Editierbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie sich in die Nutzung von `<iframe>`-Elementen stürzen, gibt es einige Sicherheitsbedenken, die beachtet werden sollten.
Angenommen, Sie möchten das MDN-Lexikon auf einer Ihrer Webseiten mithilfe des {{htmlelement("iframe")}}-Elements einbinden. In diesem Fall könnten Sie versuchen, etwas wie das folgende Codebeispiel zu verwenden.
Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen würden, wären Sie wahrscheinlich überrascht, eine Fehlermeldung anstelle der Lexikonseite zu sehen:

```html
<iframe
  src="https://developer.mozilla.org/en-US/docs/Glossary"
  width="100%"
  height="500"
  allowfullscreen
  sandbox>
</iframe>
```

```css
iframe {
  border: none;
}
```

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der [Sicherheits-Abschnitt](#sicherheitsbedenken) unten geht näher auf die Gründe ein, warum diese Fehlermeldung angezeigt wird, aber zuerst werfen wir einen Blick darauf, was unser Code macht.

Das Beispiel enthält die wesentlichen Grundlagen, die zum Verwenden eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/Reference/Properties/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus versetzt werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute spezifizieren die Breite und Höhe, die Sie für das iframe möchten.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern funktioniert als der Rest der `<iframe>`-Funktionen (z. B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; hierzu später mehr im nächsten Abschnitt.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt fertig geladen ist. Dies macht Ihre Seite schneller verwendbar und verringert Ihre offizielle Ladezeit der Seite (ein wichtiges {{Glossary("SEO", "SEO")}}-Maß).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — gehen wir nun etwas detaillierter darauf ein. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf dieses Problem aufmerksam machen und eine Referenz bereitstellen, auf die Sie zurückkommen können, wenn Sie erfahrener werden und anfangen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem besteht kein Grund, sich zu fürchten und keine `<iframe>`s zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter …

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Web sind (oft **Hacker** genannt, oder genauer **Cracker**), die versuchen, Ihre Webseite böswillig zu ändern oder Personen dazu zu bringen, etwas zu tun, das sie nicht tun wollen, wie Benutzername und Passwort preiszugeben. Aufgrund dessen haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Verfahren, die beachtet werden müssen — einige davon werden wir im Folgenden behandeln.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von Angriff auf iframes, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einfügen (oder Ihr Dokument in ihre eigene böswillige Webseite einbetten) und es verwenden, um die Interaktion der Benutzer zu erfassen. Dies ist eine gängige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zunächst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ebenfalls an). Anstelle der erwarteten Seite sehen Sie wahrscheinlich eine Art Nachricht mit dem Effekt "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, erhalten Sie eine Nachricht, die Ihnen sagt, warum. In Firefox wird Ihnen etwas wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Anweisung, die auf "DENY" gesetzt ist, verweigert._

Dies ist, weil die Entwickler, die MDN gebaut haben, eine Einstellung auf dem Server, der die Webseiten bereitstellt, hinzugefügt haben, die das Einbetten innerhalb von `<iframe>`s untersagt (siehe [Konfigurieren von CSP-Richtlinien](#konfigurieren_von_csp-richtlinien), unten). Das macht Sinn — eine vollständige MDN-Seite macht wirklich keinen Sinn in andere Seiten eingebettet zu werden, es sei denn, Sie möchten etwas wie das Einbetten auf Ihrer Seite tun und sie als Ihre eigenen beanspruchen — oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Auch, wenn jeder damit anfangen würde, all die zusätzlichen Bandbreitenkosten würden Mozilla viel Geld kosten.

#### Nur einbetten, wenn nötig

Manchmal macht es Sinn, Drittinhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie nur dann Drittinhalte einbetten, wenn es absolut notwendig ist. Eine gute Regel für Websicherheit ist _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem doppelt. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie auch auf Fragen des geistigen Eigentums achten. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, auch Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, wenn Sie sie nicht besitzen oder die Eigentümer Ihnen keine schriftliche, eindeutige Erlaubnis erteilt haben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Wieder einmal gilt: Man kann nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Der Inhalt auf MDN ist beispielsweise [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, Sie müssen [uns ordnungsgemäß creditieren](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen daran vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich mit HTTPS ausliefern:

1. HTTPS reduziert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen können und umgekehrt.

Das Aktivieren von HTTPS für Ihre Seite erfordert die Installation eines speziellen Sicherheitszertifikats. Viele Hostinganbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Wenn Sie jedoch den https-Support für Ihre Site selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen für das automatische Erstellen und Installieren des erforderlichen Zertifikats — mit integrierter Unterstützung für die am weitesten verbreiteten Web-Server, einschließlich des Apache-Webservers, Nginx und andere. Das Let's Encrypt-Tooling ist so konzipiert, dass der Prozess so einfach wie möglich ist, es gibt also keinen wirklich guten Grund, es zu vermeiden oder andere zur Verfügung stehende Mittel nicht zu nutzen, um Ihre Site mit HTTPS zu sichern.

> [!NOTE]
> [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) ermöglichen die Auslieferung von Inhalten standardmäßig über HTTPS.
> Wenn Sie einen anderen Hostinganbieter verwenden, sollten Sie herausfinden, welche Unterstützung er für die Bereitstellung von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie sollten Angreifern so wenig Macht wie möglich geben, um schlechte Dinge auf Ihrer Website zu tun, deshalb sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die notwendig sind, um ihre Aufgabe zu erfüllen_. Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen — aber dem Rest des Codes (entweder versehentlich oder böswillig) keinen Schaden zufügen kann, wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalts, das nicht in einer Sandbox ausgeführt wird, kann möglicherweise JavaScript ausführen, Formulare absenden, Pop-up-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Falls unbedingt erforderlich, können Sie die Berechtigungen einzeln wieder hinzufügen (innerhalb des Werts des `sandbox=""`-Attributs) — siehe den [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnten die eingebetteten Inhalte die {{Glossary("Same-origin_policy", "Same-Origin-Richtlinie")}} umgehen, die das Ausführen von Skripten auf Websites verhindert, und JavaScript verwenden, um das Sandboxing komplett zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu verleiten können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn es wahrscheinlich ist, dass bestimmte Inhalte bösartig sein könnten (z. B. von Benutzern generierte Inhalte), dann sollten Sie diese von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereitstellen.

#### Konfigurieren von CSP-Richtlinien

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten bereitgestellt werden, wenn sie von einem Webserver bereitgestellt werden), die darauf ausgelegt sind, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s sicherer zu machen, können Sie _[Ihren Server konfigurieren, um einen geeigneten "X-Frame-Options"-Header zu senden.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist es außerhalb des Rahmens für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungstools zum Einbetten externer Inhalte, wie PDFs.

Allerdings werden Sie diese Elemente vermutlich nicht sehr oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, einen Link zu ihnen zu setzen, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins](/de/docs/Glossary/Plugin) wie {{Glossary("Adobe_Flash", "Adobe Flash")}} gehandhabt werden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie sich in der Situation befinden, Plugin-Inhalte einbetten zu müssen, benötigen Sie mindestens diese Art von Informationen:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Glossary("URL", "URL")}} des eingebetteten Inhalts</td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genaue </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin kontrollierten Kastens
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Rückfalloption für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Zwischen dem öffnenden und schließenden
        <code>&#x3C;object></code> enthalten
      </td>
    </tr>
  </tbody>
</table>

Schauen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, stellen jedoch viele [Barrierefreiheitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind immer noch in manchen Kreisen beliebt, es ist jedoch viel besser, zu ihnen zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden. In diesem Artikel haben wir versucht, es auf einfache, vertraute Weise zu präsentieren, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien anspielen. Zunächst werden Sie das Einbetten wahrscheinlich nicht viel mehr verwenden als Inhalte von Drittanbietern wie Karten und Videos auf Ihren Seiten einzubetten. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich weitere Anwendungen dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, zusätzlich zu den hier besprochenen. Wir haben einige in früheren Artikeln gesehen, wie etwa {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie etwa {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für die Einbettung von Vektorgrafiken.
