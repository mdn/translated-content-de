---
title: Von Objekt zu iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Umweg und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhalten in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, während die anderen beiden es Ihnen erlauben, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a>, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Elemente in Webseiten einbettet, indem man
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} verwendet, zum Beispiel PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit war es im Web populär, **Frames** zu verwenden, um Websites zu erstellen – kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Master-Dokument namens **Frameset** eingebettet, das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich wie beim Anpassen der Spalten und Reihen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als der Höhepunkt der Coolness, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Abschnitte wie dieser besser für die Download-Geschwindigkeit war – besonders auffällig bei den damals so langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die jedes Positive bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, und deshalb sieht man sie heute nicht mehr im Einsatz.

Ein wenig später (späte 90er, frühe 2000er Jahre) wurden Plugin-Technologien sehr populär, wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} – diese erlaubten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die durch HTML allein nicht verfügbar waren. Die Einbettung dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}} erreicht, und sie waren zu ihrer Zeit sehr nützlich. Sie sind jedoch aus der Mode gekommen, aufgrund vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heute haben große Browser aufgehört, Plugins wie Flash zu unterstützen.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.), das eine Möglichkeit bietet, ein vollständiges Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein anderes solches Element wäre, und es wird heute regelmäßig verwendet.

Nachdem der Geschichtsunterricht vorbei ist, lassen Sie uns weitermachen und sehen, wie man einige dieser Techniken anwendet.

## Spielen mit klassischen Einbettungsanwendungen

In diesem Artikel werden wir gleich in eine Übung einsteigen, um Ihnen sofort eine Idee zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der zur Verfügung stehenden Sharing-Optionen Bescheid.

1. Öffnen Sie zunächst den [MDN Playground](/en-US/play).
2. Nun werden wir uns ansehen, wie YouTube uns ermöglicht, ein Video in jede beliebige Seite, die wir mögen, mithilfe eines {{htmlelement("iframe")}} einzubetten.
   1. Gehen Sie zu YouTube und suchen Sie ein Video, das Sie mögen.
   2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Sharing-Optionen anzuzeigen.
   3. Wählen Sie den _Einbetten_-Button und Sie erhalten einen `<iframe>`-Code — kopieren Sie diesen.
   4. Fügen Sie ihn in das _HTML_-Feld im Playground ein und sehen Sie, was das Ergebnis in der Ausgabe ist.
3. Als Bonusaufgabe können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Playground einzubetten:
   1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Sie mögen.
   2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
   3. Wählen Sie die Option _Teilen oder Karte einbetten_.
   4. Wählen Sie die Option _Eine Karte einbetten_, die Ihnen etwas `<iframe>`-Code gibt — kopieren Sie ihn.
   5. Fügen Sie ihn in das _HTML_-Feld im Playground ein und sehen Sie, was das Ergebnis in der Ausgabe ist.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button im Playground rückgängig machen.

## iframes im Detail

Das war einfach und spaßig, oder? {{htmlelement("iframe")}}-Elemente sind dafür ausgelegt, andere Webdokumente in das aktuelle Dokument einzubetten. Das ist großartig, um Inhalte von Drittanbietern in Ihre Webseite zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner, etc. Sogar die Live-beispielhaften Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie in die Verwendung von `<iframe>`-Elementen eintauchen, gibt es einige Sicherheitsbedenken, die beachtet werden müssen. Wenn Sie beispielsweise das MDN-Glossar auf einer Ihrer Webseiten einbeziehen möchten und dafür das {{htmlelement("iframe")}}-Element verwenden, könnten Sie etwas wie das folgende Codebeispiel versuchen. Wenn Sie den unten stehenden Code auf einer Ihrer Seiten hinzufügen würden, könnten Sie überrascht sein, anstelle der Glossar-Seite eine Fehlermeldung zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie möglicherweise eine Fehlermeldung ähnlich der folgenden:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) weiter unten geht genauer darauf ein, warum Sie diesen Fehler sehen, aber zunächst werfen wir einen Blick darauf, was unser Code macht.

Das Beispiel enthält die wesentlichen Bestandteile, die für die Verwendung eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig ein `<iframe>` mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) angezeigt werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut, wie auch bei {{htmlelement("video")}}/{{htmlelement("img")}}, enthält einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute spezifizieren die Breite und Höhe, die Sie für das iframe möchten.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr darüber sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dadurch wird Ihre Seite schneller benutzbar und die offizielle Ladezeit Ihrer Seite verringert (ein wichtiges {{Glossary("SEO", "SEO")}}-Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — gehen wir nun etwas genauer darauf ein. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Durchlesen perfekt verstehen; wir möchten Sie nur auf dieses Thema aufmerksam machen und eine Referenz bieten, auf die Sie zurückkommen können, wenn Sie mehr Erfahrung gesammelt haben und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Außerdem gibt es keinen Grund, Angst zu haben und `<iframe>`s nicht zu verwenden – Sie müssen nur vorsichtig sein. Lesen Sie weiter …

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böse Menschen im Web sind (oft als **Hacker** bezeichnet, genauer gesagt, **Cracker**), die versuchen, Ihre Webseite bösartig zu verändern oder Menschen dazu zu bringen, Dinge zu tun, die sie nicht wollen, wie sensitive Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch Best Practices, die berücksichtigt werden sollten – einige davon werden wir im Folgenden behandeln.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei der Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Webseite einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine übliche Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein kurzes Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihren Browser zu laden – Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Statt der erwarteten Seite werden Sie wahrscheinlich eine Nachricht sehen, die darauf hinweist, dass die Seite nicht geöffnet werden kann, und wenn Sie die _Konsole_ in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) anzeigen, werden Sie eine Nachricht sehen, die Ihnen sagt, warum. In Firefox erhalten Sie eine Nachricht wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wurde durch die "X-Frame-Options"-Direktive verweigert, die auf "DENY" gesetzt ist_. Dies liegt daran, dass die Entwickler, die MDN gebaut haben, eine Einstellung auf dem Server enthalten haben, der die Webseiten bereitstellt, um zu verhindern, dass sie in `<iframe>`s eingebettet werden (siehe [Konfigurieren von CSP-Direktiven](#konfigurieren_von_csp-direktiven) unten). Das macht Sinn – eine gesamte MDN-Seite ergibt wirklich keinen Sinn, in andere Seiten eingebettet zu werden, es sei denn, man möchte etwas wie sie auf seiner eigenen Seite einbetten und als seine eigene ausgeben – oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem, wenn jeder damit anfängt, würde all die zusätzliche Bandbreite beginnen, Mozilla viel Geld zu kosten.

#### Nur einbetten, wenn notwendig

Manchmal ergibt es Sinn, Inhalte von Drittanbietern einzubetten – wie YouTube-Videos und Karten –, aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es absolut notwendig ist. Eine gute Regel für Web-Sicherheit lautet: _"Man kann nie vorsichtig genug sein. Wenn Sie es gemacht haben, überprüfen Sie es doppelt. Wenn es jemand anderes gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Probleme im Zusammenhang mit geistigem Eigentum bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst solche Inhalte, die Sie nicht erwarten würden (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Genehmigung gegeben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie vorsichtig genug sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns korrekt anerkennen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwendung von HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Wahrscheinlichkeit, dass Remote-Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

HTTPS-Enablement Ihrer Seite erfordert ein spezielles Sicherheitszertifikat, das installiert werden muss. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst eine Einrichtung vornehmen müssen, um ein Zertifikat zu installieren. Wenn Sie jedoch auf Ihrer eigenen Seite HTTPS-Unterstützung einrichten müssen, stellt [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen bereit, die Sie verwenden können, um automatisch das notwendige Zertifikat zu erstellen und zu installieren – mit integrierter Unterstützung für die am häufigsten verwendeten Webserver, einschließlich dem Apache-Webserver, Nginx und anderen. Die Let's Encrypt-Tooling ist darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten. Es gibt also wirklich keinen guten Grund, es oder andere verfügbare Mittel zu vermeiden, um Ihre Seite HTTPS-fähig zu machen.

> [!NOTE]
> [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung sie für die Bereitstellung von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um schlechte Dinge auf Ihrer Webseite zu tun. Deshalb sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für ihre Aufgabe erforderlich sind_. Dies gilt natürlich auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann – oder zum Testen – aber keinen Schaden im Rest des Codes verursachen kann (entweder unbeabsichtigt oder böswillig), wird eine [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) genannt.

Inhalte, die nicht in einer Sandbox sind, könnten in der Lage sein, JavaScript auszuführen, Formulare abzuschicken, Pop-up-Fenster auszulösen etc. Standardmäßig sollten Sie alle verfügbaren Einschränkungen auferlegen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn es absolut erforderlich ist, können Sie Berechtigungen Stück für Stück wieder hinzufügen (innerhalb des `sandbox=""` Attributwertes) – sehen Sie sich den [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen an. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten – in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin policy")}}, die das Ausführen von Skripten von Seiten verhindert, umgehen und JavaScript verwenden, um das Sandboxing vollständig auszuschalten.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Leute dazu verleiten können, bösartigen Inhalt direkt zu besuchen (außerhalb eines `iframe`). Wenn es irgendeine Möglichkeit gibt, dass bestimmte Inhalte bösartig sein könnten (z.B. nutzergenerierte Inhalte), stellen Sie sicher, dass sie von einer anderen {{Glossary("domain", "Domain")}} als Ihre Hauptseite bereitgestellt werden.

#### Konfigurieren von CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Inhaltssicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten über einen Webserver bereitgestellt werden), die dazu entworfen wurden, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s zu sichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Webseiten Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich liegt es etwas außerhalb des Umfangs einer vollständigen Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente erfüllen eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungstools für das Einbetten externer Inhalte, wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in der Seite einzubetten.

Historisch wurden diese Elemente auch verwendet, um Inhalte, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet wurden, einzubinden, aber diese Technologie ist jetzt obsolet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen, dass Sie Plugin-Inhalte einbetten müssen, sind dies die Informationen, die Sie benötigen, mindestens:

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
        Höhe und Breite (in CSS-Pixel) des durch das Plugin kontrollierten Kastens
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
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
      <td>
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code> Tags
      </td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (sehen Sie das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Zugänglichkeitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer lesbar sein. Sie sind in einigen Kreisen immer noch populär, aber es ist viel besser, auf sie zu verlinken, so dass sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema der Einbettung anderer Inhalte in Webdokumente kann schnell sehr komplex werden. Deshalb haben wir in diesem Artikel versucht, es auf einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während noch einige der fortgeschritteneren Funktionen der beteiligten Technologien angedeutet werden. Zunächst werden Sie Einbettungen wahrscheinlich nicht viel mehr verwenden als zum Einfügen von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich weitere Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben den hier besprochenen. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
