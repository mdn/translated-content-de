---
title: Von object zu iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 456c370394c0cd8869feb60c4e9926f35422beaf
---

Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel gehen wir einen kleinen Schritt zur Seite und betrachten einige Elemente, mit denen Sie unterschiedlichste Inhaltstypen in Ihre Webseiten einbetten können: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. Mit diesen Elementen können Sie externe Ressourcen wie andere Webseiten und PDF-Dateien einbetten.

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
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie Elemente mithilfe von
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} in Webseiten einbetten, etwa PDF-Dokumente
        und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es beliebt, **Frames** zum Erstellen von Websites zu verwenden — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Hauptdokument eingebettet, das als **Frameset** bezeichnet wurde und mit dem Sie den Bereich auf dem Bildschirm festlegen konnten, den jeder Frame ausfüllte, ähnlich wie beim Festlegen der Größe von Spalten und Zeilen einer Tabelle. Mitte bis Ende der 90er Jahre galten sie als besonders cool, und es gab Hinweise darauf, dass die Aufteilung einer Webseite in kleinere Abschnitte wie diese bessere Downloadgeschwindigkeiten ermöglichte — besonders deutlich, da Netzwerkverbindungen damals so langsam waren. Sie hatten jedoch viele Probleme, die alle Vorteile bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden; daher werden sie heute nicht mehr verwendet.

Etwas später (Ende der 90er, Anfang der 2000er) wurden Plugin-Technologien wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr beliebt — sie ermöglichten Webentwicklern, umfangreiche Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein mit HTML nicht verfügbar waren. Das Einbetten dieser Technologien erfolgte über Elemente wie {{htmlelement("object")}} und das weniger verwendete {{htmlelement("embed")}}, und sie waren damals sehr nützlich. Seitdem sind sie aufgrund vieler Probleme, darunter Barrierefreiheit, Sicherheit und Dateigröße, aus der Mode gekommen. Heutzutage haben die großen Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das Element {{htmlelement("iframe")}} (zusammen mit anderen Methoden zum Einbetten von Inhalten, etwa {{htmlelement("canvas")}}, {{htmlelement("video")}} usw.). Es ermöglicht, ein vollständiges Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Nachdem die Geschichtsstunde nun beendet ist, gehen wir weiter und sehen uns an, wie einige davon verwendet werden.

## Mit klassischen Einbettungsverwendungen experimentieren

In diesem Artikel beginnen wir direkt mit einer Übung, um Ihnen sofort eine Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt kennt [YouTube](https://www.youtube.com/) sehr gut, aber viele Menschen wissen nichts über einige der dort verfügbaren Freigabemöglichkeiten.

1. Öffnen Sie zunächst den [MDN Playground](/en-US/play).
2. Sehen wir uns nun an, wie YouTube uns ermöglicht, mit einem {{htmlelement("iframe")}} ein Video in jede beliebige Seite einzubetten.
   1. Gehen Sie zu YouTube und suchen Sie ein Video aus, das Ihnen gefällt.
   2. Unter dem Video finden Sie eine Schaltfläche _Teilen_ — wählen Sie diese aus, um die Freigabeoptionen anzuzeigen.
   3. Wählen Sie die Schaltfläche _Einbetten_. Sie erhalten dann etwas `<iframe>`-Code — kopieren Sie ihn.
   4. Fügen Sie ihn im Bereich _HTML_ des Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.
3. Als Zusatzaufgabe können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Playground einzubetten:
   1. Gehen Sie zu Google Maps und suchen Sie eine Karte aus, die Ihnen gefällt.
   2. Klicken Sie oben links in der Benutzeroberfläche auf das „Hamburger-Menü“ (drei horizontale Linien).
   3. Wählen Sie die Option _Karte teilen oder einbetten_.
   4. Wählen Sie die Option _Karte einbetten_. Sie erhalten dann etwas `<iframe>`-Code — kopieren Sie ihn.
   5. Fügen Sie ihn im Bereich _HTML_ des Playground ein und sehen Sie sich das Ergebnis in der Ausgabe an.

Wenn Sie einen Fehler machen, können Sie den Playground jederzeit über die Schaltfläche _Zurücksetzen_ zurücksetzen.

## Webseiten mithilfe von iframes einbetten

Das war einfach und unterhaltsam, oder? Elemente vom Typ {{htmlelement("iframe")}} dienen dazu, andere Webdokumente in das aktuelle Dokument einzubetten. Das eignet sich hervorragend, um Inhalte von Drittanbietern in Ihre Website einzubinden, über die Sie möglicherweise keine direkte Kontrolle haben und für die Sie keine eigene Version implementieren möchten — etwa Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Selbst die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, werden mit `<iframe>`s umgesetzt.

Bevor wir uns mit der Verwendung von `<iframe>`-Elementen befassen, sollten Sie einige Sicherheitsbedenken kennen.
Angenommen, Sie möchten das MDN-Glossar mit dem Element {{htmlelement("iframe")}} in eine Ihrer Webseiten einfügen. Dann könnten Sie etwas wie das nächste Codebeispiel versuchen.
Wenn Sie den folgenden Code zu einer Ihrer Seiten hinzufügen würden, könnten Sie überrascht sein, statt der Glossarseite eine Fehlermeldung zu sehen:

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

Wenn Sie einen Blick in die Konsole Ihres Browsers werfen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) unten erläutert ausführlicher, warum Sie diesen Fehler sehen. Zunächst sehen wir uns jedoch an, was unser Code bewirkt.

Das Beispiel enthält die wesentlichen Grundlagen, die für die Verwendung eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/Reference/Properties/border)
  - : Bei Verwendung wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser `<iframe>`s standardmäßig mit einem umgebenden Rahmen an, was im Allgemeinen unerwünscht ist.
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) im Vollbildmodus angezeigt werden. Dies geht etwas über den Umfang dieses Artikels hinaus.
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute geben die gewünschte Breite und Höhe des iframe an.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als die übrigen `<iframe>`-Funktionen funktioniert (z. B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; im nächsten Abschnitt erfahren Sie mehr darüber.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, empfiehlt es sich, das `src`-Attribut des iframe nach dem Laden des Hauptinhalts mit JavaScript zu setzen. Dadurch wird Ihre Seite früher nutzbar und die offizielle Ladezeit Ihrer Seite verringert, was eine wichtige {{Glossary("SEO", "SEO")}}-Metrik ist.

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — gehen wir nun etwas ausführlicher darauf ein. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Mal vollständig verstehen; wir möchten Sie lediglich auf dieses Thema aufmerksam machen und Ihnen eine Referenz bieten, zu der Sie zurückkehren können, wenn Sie mehr Erfahrung sammeln und die Verwendung von `<iframe>`s in Ihren Experimenten und Ihrer Arbeit in Betracht ziehen. Außerdem gibt es keinen Grund, Angst zu haben und `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter …

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel — der offizielle Begriff lautet **Angriffsvektor** — für böswillige Personen im Web sind, oft als **Hacker** oder genauer als **Cracker** bezeichnet. Sie können damit Ihre Webseite böswillig verändern oder Menschen dazu verleiten, etwas zu tun, das sie nicht möchten, etwa sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Deshalb haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt außerdem bewährte Vorgehensweisen, die Sie beachten sollten — einige davon behandeln wir im Folgenden.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine häufige Art von iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten — oder Ihr Dokument in ihre eigene bösartige Website einbetten — und es verwenden, um Benutzerinteraktionen zu erfassen. Dies ist eine gängige Methode, Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Zunächst jedoch ein kurzes Beispiel: Versuchen Sie, das oben gezeigte vorherige Beispiel in Ihren Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) und auch [den Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html). Statt der erwarteten Seite werden Sie wahrscheinlich eine Meldung wie „Ich kann diese Seite nicht öffnen“ sehen. Wenn Sie sich die _Konsole_ in den [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, wird eine Meldung angezeigt, die Ihnen erklärt, warum. In Firefox erhalten Sie etwa eine Meldung wie _Das Laden von „https\://developer.mozilla.org/de/docs/Glossary“ in einem Frame wird durch die auf „DENY“ gesetzte Direktive „X-Frame-Options“ verweigert_. Dies liegt daran, dass die Entwickler von MDN auf dem Server, der die Webseiten bereitstellt, eine Einstellung vorgenommen haben, die verhindert, dass die Seiten in `<iframe>`s eingebettet werden können. Siehe unten [CSP-Direktiven konfigurieren](#csp-direktiven_konfigurieren). Das ist sinnvoll — eine vollständige MDN-Seite ergibt wenig Sinn, wenn sie in andere Seiten eingebettet wird, es sei denn, Sie möchten sie auf Ihrer Website einbetten und als Ihre eigene ausgeben oder versuchen, über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Daten zu stehlen. Beides sind sehr schlechte Dinge. Außerdem würde die zusätzliche Bandbreite Mozilla viel Geld kosten, wenn alle damit beginnen würden.

#### Nur einbetten, wenn es notwendig ist

Manchmal ist es sinnvoll, Inhalte von Drittanbietern einzubetten — etwa YouTube-Videos und Karten. Sie können sich jedoch viel Ärger ersparen, wenn Sie Drittanbieterinhalte nur dann einbetten, wenn es unbedingt erforderlich ist. Eine gute Regel für die Websicherheit lautet: _„Man kann nie zu vorsichtig sein. Wenn Sie es erstellt haben, überprüfen Sie es trotzdem noch einmal. Wenn jemand anderes es erstellt hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist.“_

Neben der Sicherheit sollten Sie sich auch über Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline wie online, selbst Inhalte, bei denen Sie es möglicherweise nicht erwarten würden — beispielsweise die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, sofern sie Ihnen nicht gehören oder die Eigentümer Ihnen nicht schriftlich und eindeutig die Erlaubnis dazu erteilt haben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Beispielsweise sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß nennen müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### HTTPS verwenden

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites nach Möglichkeit über HTTPS bereitstellen:

1. HTTPS verringert die Wahrscheinlichkeit, dass externe Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen können — und umgekehrt.

Um HTTPS für Ihre Website zu aktivieren, muss ein spezielles Sicherheitszertifikat installiert werden. Viele Hosting-Anbieter bieten HTTPS-aktiviertes Hosting an, ohne dass Sie selbst etwas einrichten müssen, um ein Zertifikat bereitzustellen. Wenn Sie die HTTPS-Unterstützung für Ihre Website jedoch selbst einrichten müssen, stellt [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anweisungen bereit, mit denen Sie das erforderliche Zertifikat automatisch erstellen und installieren können — mit integrierter Unterstützung für die am häufigsten verwendeten Webserver, darunter der Apache-Webserver, Nginx und andere. Die Werkzeuge von Let's Encrypt sind darauf ausgelegt, den Prozess so einfach wie möglich zu machen. Daher gibt es wirklich keinen guten Grund, darauf oder auf andere verfügbare Methoden zur HTTPS-Aktivierung Ihrer Website zu verzichten.

> [!NOTE]
> [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) ermöglichen standardmäßig die Bereitstellung von Inhalten über HTTPS.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung dieser für die Bereitstellung von Inhalten über HTTPS bietet.

#### Verwenden Sie immer das Attribut `sandbox`

Sie möchten Angreifern möglichst wenig Möglichkeiten geben, auf Ihrer Website Schaden anzurichten. Daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die sie zur Erfüllung ihrer Aufgabe benötigen_. Dies gilt natürlich auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet oder getestet werden kann, aber dem Rest der Codebasis keinen Schaden zufügen kann — weder versehentlich noch böswillig — wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox ausgeführt werden, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen festlegen, indem Sie das Attribut `sandbox` ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Falls unbedingt erforderlich, können Sie Berechtigungen einzeln wieder hinzufügen, innerhalb des Attributwerts `sandbox=""`. Alle verfügbaren Optionen finden Sie im Referenzeintrag [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox). Ein wichtiger Hinweis: Sie sollten Ihrem Attribut `sandbox` _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` hinzufügen, wenn der eingebettete Inhalt denselben Ursprung wie die einbettende Seite hat. In diesem Fall könnte der eingebettete Inhalt JavaScript verwenden, um das Attribut zu entfernen und sich selbst neu zu laden, wodurch die Sandbox vollständig deaktiviert würde.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Personen dazu bringen können, bösartige Inhalte direkt — außerhalb eines `iframe` — zu besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte bösartig sein könnten, etwa nutzergenerierte Inhalte, stellen Sie diese bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptwebsite bereit.

#### CSP-Direktiven konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) — Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden —, die die Sicherheit Ihres HTML-Dokuments verbessern sollen. Um `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten, was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl weiterer Angriffe ermöglichen würde. Genau das haben die MDN-Entwickler getan, wie wir zuvor gesehen haben.

> [!NOTE]
> Weitere Hintergrundinformationen zu diesem Thema finden Sie in Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/). Eine vollständige Erklärung würde in diesem Artikel natürlich deutlich über den Umfang hinausgehen.

## Die Elemente \<embed> und \<object>

Genau wie {{htmlelement("iframe")}} können auch die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}} externe Inhalte einbetten. Abhängig vom eingebetteten Inhalt kann dies eine schlankere Option sein, da der Browser keinen vollständigen Browsing-Kontext für den eingebetteten Inhalt erstellen muss.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet wurden. Diese Technologie ist jedoch inzwischen veraltet und wird von modernen Browsern nicht unterstützt. Heute können fast alle ihre Anwendungsfälle durch `<iframe>` abgedeckt werden, das mehr Sicherheitsfunktionen bietet.

Wenn Sie externe Inhalte mit diesen Elementen einbetten müssen, benötigen Sie mindestens folgende Informationen:

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
        <em>Exakter </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite des Kastens für den eingebetteten Inhalt (in CSS-Pixeln)
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
        Innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code>-Tags enthalten
      </td>
    </tr>
  </tbody>
</table>

## PDFs einbetten

Im Web verfügen die meisten Medien bereits über dedizierte Elemente: {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{SVGElement("svg")}} usw. Neben Webseiten besteht der wichtigste weitere Anwendungsfall der Elemente `<iframe>`, `<object>` und `<embed>` darin, PDF-Dokumente einzubetten.

Alle heutigen Browser stellen nativ PDF-Renderer bereit. Diese Renderer führen ausführbare Inhalte bereits in einer Sandbox aus, weshalb das Einbetten von PDFs standardmäßig im Allgemeinen sicher ist. Wenn Sie `<iframe>` verwenden, müssen Sie das Attribut `sandbox` nicht bereitstellen; tatsächlich kann das Hinzufügen von `sandbox` verhindern, dass der PDF-Viewer funktioniert.

Wenn Ihre Seite eine PDF-Vorschau benötigt, wählen Sie ein Element anhand der benötigten Funktionen:

- Das Element {{htmlelement("iframe")}} sollte die erste Wahl sein: Es bietet Steuerelemente wie [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) und [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy).
- Verwenden Sie {{htmlelement("object")}} nur, wenn die Ressource möglicherweise nicht gerendert werden kann und Fallback-Inhalte benötigt werden.
- Das Element {{htmlelement("embed")}} bietet für eine PDF-Vorschau keinen Vorteil.

Da der PDF-Viewer des Browsers bereits seine eigene Sandbox bereitstellt, ist kein Sandboxing für das Element erforderlich. Tatsächlich kann das Hinzufügen von `sandbox` verhindern, dass der PDF-Viewer funktioniert. Wenn Sie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwenden, werden die `<iframe>`-Quellen über {{CSP("frame-src")}} und die `<object>`- sowie `<embed>`-Quellen über {{CSP("object-src")}} gesteuert. Wie auf der Referenzseite zu `object-src` angegeben, sollten Sie im Allgemeinen `object-src 'none'` beibehalten; in diesem Fall ist `<iframe>` die einzige praktikable Option.

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet:

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    The PDF preview is unavailable.
    <a href="my-pdf.pdf">Open the PDF file.</a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digitalem, stellen jedoch viele [Herausforderungen für die Barrierefreiheit](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer lesbar sein. In einigen Bereichen sind sie weiterhin beliebt, aber es ist deutlich besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden. In diesem Artikel haben wir daher versucht, es auf einfache und vertraute Weise einzuführen, die sofort relevant erscheint, und gleichzeitig einige der fortgeschritteneren Funktionen der beteiligten Technologien anzudeuten. Zu Beginn werden Sie Einbettungen wahrscheinlich kaum für mehr als das Einbinden von Drittanbieterinhalten wie Karten und Videos auf Ihren Seiten verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich weitere Verwendungsmöglichkeiten dafür finden.

Neben den hier besprochenen gibt es viele weitere Technologien zum Einbetten externer Inhalte. Einige haben wir in früheren Artikeln gesehen, etwa {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}; andere können Sie noch entdecken, etwa {{htmlelement("canvas")}} für mit JavaScript generierte 2D- und 3D-Grafiken sowie {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
