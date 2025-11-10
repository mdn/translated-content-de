---
title: Von object zu iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Entwickler denken oft daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Seitenschritt und betrachten einige Elemente, die Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Elemente in Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}}, und
        {{htmlelement("iframe")}} einbettet, wie z.B. PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es beliebt, **Frames** zu nutzen, um Websites zu erstellen — kleine Teile einer Website, die in individuellen HTML-Seiten gespeichert waren. Diese wurden in ein Hauptdokument, ein sogenanntes **Frameset**, eingebettet, das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich wie bei der Größenbestimmung von Spalten und Zeilen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als besonders cool, und es gab Hinweise darauf, dass es besser für Download-Geschwindigkeiten war, eine Webseite in kleinere Stücke aufzuteilen, insbesondere bei damals so langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die alle Vorteile bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass Sie sie heute nicht mehr verwenden.

Ein wenig später (Ende der 90er, Anfang der 2000er) wurden Plug-in-Technologien sehr populär, wie z.B. {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein durch HTML nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}} erreicht, und sie waren damals sehr nützlich. Sie sind inzwischen aus der Mode gekommen aufgrund vieler Probleme, einschließlich Barrierefreiheit, Sicherheit, Dateigröße und mehr. Heutzutage haben große Browser die Unterstützung für Plug-ins wie Flash eingestellt.

Schließlich tauchte das {{htmlelement("iframe")}}-Element auf (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, usw.). Es bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, so, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Nachdem nun die Geschichtsstunde abgeschlossen ist, lassen Sie uns fortfahren und sehen, wie einige dieser Technologien genutzt werden.

## Spielen mit klassischen Einbettungsverwendungen

In diesem Artikel werden wir direkt in eine Übung einsteigen, um Ihnen sofort einen Eindruck davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der zur Verfügung stehenden Sharing-Funktionen Bescheid.

1. Öffnen Sie zuerst den [MDN Playground](/en-US/play).
2. Jetzt schauen wir uns an, wie YouTube es uns ermöglicht, ein Video in jede beliebige Seite einzubetten, die wir mögen, und zwar mit einem {{htmlelement("iframe")}}.
   1. Gehen Sie zu YouTube und suchen Sie ein Video, das Ihnen gefällt.
   2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
   3. Wählen Sie den _Einbetten_-Button und Sie erhalten etwas `<iframe>`-Code — kopieren Sie diesen.
   4. Fügen Sie ihn in den _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.
3. Für Bonuspunkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Playground einzubetten:
   1. Gehen Sie zu Google Maps und suchen Sie eine Karte, die Ihnen gefällt.
   2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
   3. Wählen Sie die '_Karte teilen oder einbetten_'-Option aus.
   4. Wählen Sie die '_Karte einbetten_'-Option aus, die Ihnen etwas `<iframe>`-Code gibt — kopieren Sie diesen.
   5. Fügen Sie ihn in den _HTML_-Bereich im Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button im Playground zurücksetzen.

## iframes im Detail

War das nicht einfach und spaßig? {{htmlelement("iframe")}}-Elemente sind dafür konzipiert, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Dies ist großartig, um Inhalte von Drittanbietern in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und von denen Sie nicht Ihre eigene Version implementieren wollen — wie z.B. Video von Online-Videodienstanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Auch die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie sich mit der Verwendung von `<iframe>`-Elementen beschäftigen, gibt es einige Sicherheitsbedenken, die Sie beachten sollten.
Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, dann könnten Sie etwas wie das folgende Code-Beispiel versuchen.
Wenn Sie den nachstehenden Code in eine Ihrer Seiten einfügen, sind Sie möglicherweise überrascht, statt der Glossar-Seite eine Fehlermeldung zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, werden Sie eine Fehlermeldung wie die folgende sehen:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) unten geht genauer darauf ein, warum Sie diese Fehlermeldung sehen, aber zunächst schauen wir uns an, was unser Code macht.

Das Beispiel enthält die grundlegenden Elemente, die zur Nutzung eines `<iframe>` benötigt werden:

- [`border: none`](/de/docs/Web/CSS/Reference/Properties/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umliegenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem umliegenden Rahmen an (was in der Regel unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) angezeigt werden (was etwas über den Umfang dieses Artikels hinausgeht).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute geben die gewünschte Breite und Höhe des iframes an.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als die übrigen `<iframe>`-Funktionen (z.B. IE 10 und höher) funktioniert, fordert erhöhte Sicherheitseinstellungen an; mehr dazu im nächsten Abschnitt.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen wurde. Dadurch wird Ihre Seite schneller nutzbar und die offizielle Seitenladezeit verringert (ein wichtiges {{Glossary("SEO", "SEO")}}-Kriterium).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt – lassen Sie uns nun etwas genauer darauf eingehen. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf dieses Thema aufmerksam machen und eine Referenz bereitstellen, auf die Sie zurückkommen können, wenn Sie mehr Erfahrung sammeln und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem besteht kein Grund zur Panik und dazu, `<iframe>`s nicht zu verwenden – Sie müssen lediglich sorgfältig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler mussten auf die harte Tour lernen, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böswillige Menschen im Web sind (oft als **Hacker**, genauer gesagt als **Cracker** bezeichnet), um anzugreifen, wenn sie versuchen, Ihre Webseite böswillig zu verändern oder Leute dazu zu bringen, etwas zu tun, was sie nicht tun wollen, wie z.B. sensible Informationen wie Benutzername und Passwort preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Verfahren, die zu berücksichtigen sind — wir werden einige davon unten behandeln.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Webseite einbetten) und es dazu verwenden, die Interaktionen der Benutzer zu erfassen. Dies ist eine gängige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an.) Anstelle der erwarteten Seite werden Sie wahrscheinlich eine Meldung sehen, die auf etwas hinweist wie "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, werden Sie eine Meldung sehen, die Ihnen erklärt, warum. In Firefox erhalten Sie eine Meldung, die in etwa lautet: _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch den "X-Frame-Options"-Header, der auf "DENY" gesetzt ist, verweigert._ Der Grund dafür ist, dass die Entwickler, die MDN aufgebaut haben, eine Einstellung auf dem Server, der die Webseiten bedient, integriert haben, die es verbietet, dass sie in `<iframe>`s eingebettet werden (siehe [Konfigurieren von CSP-Richtlinien](#konfigurieren_sie_csp-richtlinien) unten). Das macht Sinn — eine ganze MDN-Seite macht nicht wirklich Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einfügen und als Ihre eigene ausgeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem würde, wenn jeder dies tun würde, der zusätzliche Datenverkehr beginnen, Mozilla viel Geld zu kosten.

#### Nur bei Bedarf einbetten

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten — wie z.B. YouTube-Videos und -Karten —, aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Inhalte von Drittanbietern nur einbetten, wenn es absolut notwendig ist. Eine gute Regel für die Websicherheit lautet: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es nochmal. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch über Fragen des geistigen Eigentums im Klaren sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst solche Inhalte, bei denen Sie es nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, unmissverständliche Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind streng. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel ist der Inhalt auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, Sie müssen [uns korrekt zitieren](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unseren Inhalt zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen und umgekehrt.

Das Ermöglichen von HTTPS auf Ihrer Website erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Falls Sie jedoch die Unterstützung für HTTPS auf Ihrer Website selbst einrichten müssen, stellt [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen zur Verfügung, die Sie zum automatischen Erstellen und Installieren des erforderlichen Zertifikats nutzen können — mit integriertem Support für die am häufigsten verwendeten Webserver, einschließlich des Apache-Webservers, Nginx und anderen. Die Tools von Let's Encrypt sind so gestaltet, dass der Prozess so einfach wie möglich ist, sodass es wirklich keinen guten Grund gibt, sie oder andere verfügbare Mittel nicht zu verwenden, um Ihre Website mit HTTPS zu versehen.

> [!NOTE]
> [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung dieser für die Bereitstellung von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich einräumen, um schlechte Dinge auf Ihrer Website zu tun, deshalb sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für ihre Aufgabe benötigt werden._ Es versteht sich von selbst, dass dies auch für Ihre eigenen Inhalte gilt. Ein Container für Code, wo er angemessen verwendet werden kann — oder für Tests —, aber keinen Schaden am Rest der Codebasis anrichten kann (entweder versehentlich oder böswillig), wird als [Sandbox](<https://de.wikipedia.org/wiki/Sandbox_(Computersicherheit)>) bezeichnet.

Inhalte, die nicht in einer Sandbox sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen mit dem `sandbox`-Attribut ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Wenn unbedingt erforderlich, können Sie Berechtigungen einzeln zurückgeben (im `sandbox=""`-Attributwert) — siehe den Referenzeintrag für [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _nie_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-Origin-Richtlinie")}} umgehen, die Seiten daran hindert, Skripte auszuführen, und JavaScript verwenden, um das Sandboxing ganz zu deaktivieren.

> [!NOTE]
> Das Sandboxing bietet keinen Schutz, wenn Angreifer Personen täuschen können, indem sie bösartige Inhalte direkt (außerhalb eines `iframe`) besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte bösartig sein können (z.B. nutzergenerierte Inhalte), dann stellen Sie sie bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptsite bereit.

#### Konfigurieren Sie CSP-Richtlinien

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die zur Verbesserung der Sicherheit Ihres HTML-Dokuments entwickelt wurden. Wenn es um die Sicherung von `<iframe>`s geht, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_. Dies verhindert, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir bereits gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [Über den X-Frame-Options-Sicherheitsheader](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich liegt eine vollständige Erklärung dieses Themas außerhalb des Umfangs dieses Artikels.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente dienen einer anderen Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge zum Einbetten externer Inhalte, wie z.B. PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins gehandhabt werden, wie {{Glossary("Adobe_Flash", "Adobe Flash")}}, aber diese Technologie ist inzwischen veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie sich in der Situation befinden, Plug-in-Inhalte einbetten zu müssen, ist dies die Art von Informationen, die Sie mindestens benötigen:

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
        <em>Genaue</em> {{Glossary("MIME_type", "media type")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixel) des vom Plugin kontrollierten Kastens
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code>-Tags
      </td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Schritt zwischen Papier und Digital, aber sie stellen viele [Barrierefreiheitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in manchen Kreisen noch immer beliebt, aber es ist viel besser, auf sie zu verlinken, sodass sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf einfache, vertraute Weise einzuführen, die sofort relevant erscheint, und gleichzeitig auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinzuweisen. Zu Beginn werden Sie das Einbetten wahrscheinlich nicht für viel mehr als das Einbinden von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten nutzen. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte betreffen, neben denjenigen, die wir hier diskutiert haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
