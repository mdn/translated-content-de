---
title: Von Objekt zu iframe — allgemeine Embedded-Technologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Entwickler denken oft an das Einbetten von Medien wie Bildern, Videos und Audios in Webseiten. In diesem Artikel machen wir einen kleinen Seitenschritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind für das Einbetten anderer Webseiten, und die anderen beiden ermöglichen das Einbetten externer Ressourcen wie PDF-Dateien.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erlernen, wie man Elemente in Webseiten einbettet, wie z. B. PDF-Dokumente und andere Webseiten, unter Verwendung von
        {{htmlelement("object")}}, {{htmlelement("embed")}}, und
        {{htmlelement("iframe")}}.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit war es im Web populär, **Frames** zur Erstellung von Websites zu verwenden — kleine Teile einer Website, die in individuellen HTML-Seiten gespeichert sind. Diese wurden in einem Masterdokument namens **Frameset** eingebettet, das es ermöglichte, den Bereich auf dem Bildschirm zu definieren, den jede Frame einnahm, ähnlich dem Festlegen der Größe der Spalten und Zeilen einer Tabelle. In den mittleren bis späten 90er Jahren galten diese als äußerst cool, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile wie diese besser für die Download-Geschwindigkeit war – besonders bemerkbar bei den damals sehr langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die die Vorteile bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, weshalb sie nicht mehr verwendet werden.

Ein wenig später (späte 90er, frühe 2000er) wurden Plugin-Technologien sehr populär, wie zum Beispiel {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese erlaubten es Webentwicklern, reichhaltige Inhalte in Webseiten einzubetten, wie Videos und Animationen, die allein durch HTML nicht verfügbar waren. Die Einbettung dieser Technologien erfolgte durch Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}}, und sie waren zu ihrer Zeit sehr nützlich. Sie sind mittlerweile aus der Mode gekommen aufgrund vieler Probleme, einschließlich der Barrierefreiheit, Sicherheit, Dateigröße und mehr. Heutzutage unterstützen die großen Browser Plugins wie Flash nicht mehr.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Möglichkeiten der Inhaltseinbettung, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.) Dies bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heutzutage regelmäßig verwendet.

Nach dieser kleinen Geschichtsstunde wenden wir uns nun der praktischen Anwendung dieser Technologien zu.

## Spielen mit klassischen Einbettungsanwendungen

In diesem Artikel springen wir direkt in eine Übung, um Ihnen sofort eine Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen kennen einige der verfügbaren Freigabefunktionen nicht.

1. Öffnen Sie zuerst das [MDN Playground](/en-US/play).
2. Nun werden wir schauen, wie YouTube uns erlaubt, ein Video auf jeder beliebigen Seite mit einem {{htmlelement("iframe")}} einzubetten.
   1. Gehen Sie zu YouTube und finden Sie ein Video, das Ihnen gefällt.
   2. Unterhalb des Videos finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
   3. Wählen Sie den _Einbetten_-Button aus und Sie erhalten ein `<iframe>`-Code — kopieren Sie diesen.
   4. Fügen Sie ihn im _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.
3. Für Bonuspunkte könnten Sie auch versuchen, eine [Google-Karte](https://www.google.com/maps/) im Playground einzubetten:
   1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
   2. Klicken Sie auf das "Hamburger Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
   3. Wählen Sie die Option _Karte teilen oder einbetten_.
   4. Wählen Sie die Option _Karte einbetten_, wodurch Ihnen einige `<iframe>`-Code-Texte gegeben werden — kopieren Sie diese.
   5. Fügen Sie sie im _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button im Playground zurücksetzen.

## iframes im Detail

War das nicht einfach und unterhaltsam? {{htmlelement("iframe")}} Elemente sind dafür ausgelegt, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videodienstanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwenden haben, sind mit `<iframe>`s implementiert.

Bevor Sie `<iframe>`-Elemente verwenden, gibt es einige Sicherheitsbedenken, die Sie beachten sollten.
Angenommen, Sie möchten das MDN-Glossar in eine Ihrer Webseiten einfügen, indem Sie das {{htmlelement("iframe")}}-Element verwenden. Sie könnten etwas Ähnliches wie das nächste Code-Beispiel ausprobieren.
Wenn Sie den folgenden Code auf einer Ihrer Seiten hinzufügen würden, könnten Sie von einer Fehlermeldung überrascht werden, anstatt der Glossar-Seite:

```html
<iframe
  src="https://developer.mozilla.org/en-US/docs/Glossary"
  width="100%"
  height="500"
  allowfullscreen
  sandbox>
  <p>
    <a href="/en-US/docs/Glossary">
      Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

```css
iframe {
  border: none;
}
```

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung ähnlich der folgenden:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) unten geht näher darauf ein, warum Sie diese Fehlermeldung sehen, aber lassen Sie uns zunächst einen Blick darauf werfen, was unser Code tut.

Das Beispiel enthält das Wesentliche, das zum Verwenden eines `<iframe>`s erforderlich ist:

- [`border: none`](/de/docs/Web/CSS/Reference/Properties/border)
  - : Wenn verwendet, wird das `<iframe>` ohne einen umgebenden Rahmen angezeigt. Andernfalls wird das `<iframe>` standardmäßig von Browsern mit einem umgebenden Rahmen angezeigt (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus unter Verwendung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) platziert werden (was etwas über den Rahmen dieses Artikels hinausgeht).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält wie {{htmlelement("video")}}/{{htmlelement("img")}} einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute legen die Breite und Höhe fest, die das iframe haben soll.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut funktioniert in leicht moderneren Browsern als den restlichen `<iframe>`-Funktionen (z. B. IE 10 und höher) und fordert erhöhte Sicherheitsstufen an; wir gehen im nächsten Abschnitt näher darauf ein.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen wurde. Dadurch wird Ihre Seite schneller benutzbar und verkürzt die offizielle Ladezeit der Seite (ein wichtiges {{Glossary("SEO", "SEO")}}-Kriterium).

### Sicherheitsbedenken

Weiter oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns jetzt etwas detaillierter darauf eingehen. Wir erwarten nicht, dass Sie den gesamten Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf diese Bedenken aufmerksam machen und Ihnen eine Referenz zur Verfügung stellen, zu der Sie zurückkehren können, wenn Sie mehr Erfahrung sammeln und anfangen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem besteht kein Grund zur Angst, `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Web sind (oft als **Hacker** bezeichnet, oder genauer gesagt **Cracker**), um anzugreifen, wenn sie versuchen, Ihre Webseite böswillig zu ändern oder Menschen dazu zu bringen, etwas zu tun, das sie nicht wollen, wie z. B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aufgrund dieser Risiken haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen. Es gibt auch bewährte Verfahren, die es zu berücksichtigen gilt — wir werden einige davon unten behandeln.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von üblichen iframe-Angriffen, bei denen Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Webseite einbetten) und es dazu verwenden, die Interaktionen der Nutzer abzufangen. Dies ist eine gängige Methode, um Nutzer irrezuführen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Anstelle der erwarteten Seite wird Ihnen wahrscheinlich eine Nachricht angezeigt, die in etwa besagt: "Ich kann diese Seite nicht öffnen", und wenn Sie die _Konsole_ in den [Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, sehen Sie eine Nachricht, die Ihnen erklärt, warum. In Firefox erhalten Sie möglicherweise die Meldung _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Rahmen wird durch die "X-Frame-Options"-Direktive verweigert, die auf "DENY" gesetzt ist_. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server inkludiert haben, die die Einbettung der Webseiten innerhalb von `<iframe>`s untersagt (siehe [CSP-Direktiven konfigurieren](#csp-direktiven_konfigurieren) unten). Dies ist sinnvoll — eine gesamte MDN-Seite innerhalb anderer Seiten einzubetten, macht keinen Sinn, es sei denn, Sie möchten sie auf Ihrer Website einbetten und als Ihre eigene ausgeben — oder versuchen, Daten zu stehlen mittels [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking), was beides wirklich schlechte Dinge sind. Plus, wenn alle das tun würden, würden die zusätzlichen Bandbreitenanforderungen Mozilla eine Menge Geld kosten.

#### Nur einbetten, wenn es notwendig ist

Manchmal macht es Sinn, Drittinhalte einzubetten — wie Youtube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Drittinhalte nur dann einbetten, wenn es absolut notwendig ist. Eine gute Regel für die Internetsicherheit ist _"Man kann niemals zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem noch einmal. Wenn es jemand anderes gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch über Fragen des geistigen Eigentums im Klaren sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, auch Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie uns [ordnungsgemäß gutschreiben](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert werden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

Das Aktivieren von HTTPS auf Ihrer Site erfordert die Installation eines speziellen Sicherheitszertifikats. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat bereitstellen müssen. Aber wenn Sie _doch_ HTTPS-Unterstützung für Ihre Site selbst einrichten müssen, bieten [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Sie verwenden können, um automatisch das erforderliche Zertifikat zu erstellen und zu installieren – mit integrierter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Das Let's Encrypt-Tooling ist so konzipiert, dass es den Prozess so einfach wie möglich macht, sodass es wirklich keinen guten Grund gibt, es nicht zu verwenden oder andere verfügbare Mittel zu nutzen, um Ihre Site HTTPS-fähig zu machen.

> [!NOTE]
> [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS zu bedienen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung er für das Bereitstellen von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox` Attribut

Sie wollen Angreifern so wenig Macht wie möglich geben, um auf Ihrer Website Schaden anzurichten. Deshalb sollten Sie eingebetteten Inhalten _nur die Berechtigungen erteilen, die zum Ausführen ihrer Aufgabe erforderlich sind._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er ordnungsgemäß verwendet werden kann — oder zum Testen — aber keinen Schaden am übrigen Codebase anrichten kann (entweder versehentlich oder böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht sandboxed sind, können möglicherweise JavaScript ausführen, Formulare übermitteln, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch die Verwendung des `sandbox` Attributs ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Wenn es absolut erforderlich ist, können Sie Berechtigungen einzeln wieder hinzufügen (innerhalb des Wertes des `sandbox=""` Attributs) — siehe den [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox` Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-Origin-Policy")}} umgehen, die Seiten daran hindert, Skripte auszuführen, und JavaScript verwenden, um das Sandboxing insgesamt zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu täuschen können, böswillige Inhalte direkt zu besuchen (außerhalb eines `iframe`). Wenn eine Gefahr besteht, dass bestimmte Inhalte bösartig sein könnten (z.B. nutzergenerierte Inhalte), stellen Sie diese bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereit.

#### CSP-Direktiven konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [einen Satz von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn diese von einem Webserver bereitgestellt werden), die dazu entwickelt wurden, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es um die Sicherung von `<iframe>`s geht, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Seiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir vorhin gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um weitere Hintergrundinformationen zu diesem Thema zu erhalten. Offensichtlich ist dies etwas außerhalb des Rahmens einer vollständigen Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente erfüllen eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungstools zum Einbetten externer Inhalte, wie PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr häufig benutzen. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet werden, aber diese Technologie ist mittlerweile veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie einmal Plugin-Inhalte einbetten müssen, ist dies die Art von Informationen, die Sie benötigen, mindestens:

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
        <em>Genauer </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) der vom Plugin gesteuerten Box
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängige HTML-Inhalte als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code> Tags
      </td>
    </tr>
  </tbody>
</table>

Lassen Sie uns ein `<object>` Beispiel anschauen, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digitalem, aber sie stellen viele [Barrierefreiheits-Herausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. In einigen Kreisen sind sie immer noch beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema der Einbettung anderer Inhalte in Webdokumente kann schnell sehr komplex werden. In diesem Artikel haben wir versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hingewiesen haben. Zu Beginn werden Sie das Einbetten wahrscheinlich nicht für viel mehr als die Aufnahme von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten nutzen. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte betreffen, neben den hier besprochenen. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
