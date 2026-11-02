---
title: Von object bis iframe – allgemeine Technologien zum Einbetten
short-title: Technologien zum Einbetten
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Beim Einbetten von Medien in Webseiten denken Entwickler häufig an Bilder, Videos und Audio. In diesem Artikel betrachten wir Elemente, mit denen Sie ganz unterschiedliche Arten von Inhalten in Ihre Webseiten einbetten können: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. Mit ihnen lassen sich externe Ressourcen wie andere Webseiten und PDF-Dateien einbetten.

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
        >, Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Lernen, wie Sie mit {{htmlelement("object")}}, {{htmlelement("embed")}}
        und {{htmlelement("iframe")}} Inhalte wie PDF-Dokumente und andere
        Webseiten in Webseiten einbetten.
      </td>
    </tr>
  </tbody>
</table>

## Ein kurzer Rückblick auf das Einbetten

Vor langer Zeit waren im Web **Frames** beliebt, um Websites zu erstellen: kleine Teile einer Website, die jeweils in einer eigenen HTML-Seite gespeichert waren. Sie wurden in ein übergeordnetes Dokument namens **Frameset** eingebettet. Darin ließ sich festlegen, welchen Bereich des Bildschirms jeder Frame einnahm – ähnlich wie beim Festlegen der Spalten- und Zeilengrößen einer Tabelle. Mitte bis Ende der 1990er-Jahre galten Frames als besonders modern. Es gab Hinweise darauf, dass sich die Aufteilung einer Webseite in kleinere Teile günstig auf die Ladegeschwindigkeit auswirkte – was bei den damals langsamen Netzwerkverbindungen besonders auffiel. Frames brachten jedoch auch viele Probleme mit sich. Als die Netzwerkgeschwindigkeiten zunahmen, überwogen diese die Vorteile bei Weitem. Deshalb werden Frames heute nicht mehr verwendet.

Etwas später, Ende der 1990er- und Anfang der 2000er-Jahre, wurden Plugin-Technologien wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr beliebt. Sie ermöglichten es Webentwicklern, umfangreiche Inhalte wie Videos und Animationen in Webseiten einzubetten, die sich mit HTML allein damals nicht bereitstellen ließen. Zum Einbetten dienten Elemente wie {{htmlelement("object")}} und das seltener verwendete {{htmlelement("embed")}}. Zu ihrer Zeit waren sie sehr nützlich. Wegen zahlreicher Probleme, unter anderem bei Barrierefreiheit, Sicherheit und Dateigröße, sind sie inzwischen aus der Mode gekommen. Große Browser unterstützen Plugins wie Flash heute nicht mehr.

Schließlich kam das Element {{htmlelement("iframe")}} hinzu – neben weiteren Möglichkeiten zum Einbetten von Inhalten wie {{htmlelement("canvas")}} und {{htmlelement("video")}}. Damit lässt sich ein vollständiges Webdokument in ein anderes einbetten, ähnlich wie ein {{htmlelement("img")}} oder ein vergleichbares Element. Diese Möglichkeit wird heute regelmäßig genutzt.

Nach diesem geschichtlichen Überblick sehen wir uns nun an, wie einige dieser Elemente verwendet werden.

## Klassische Einsatzmöglichkeiten ausprobieren

Wir beginnen direkt mit einer Übung, damit Sie einen Eindruck davon bekommen, wofür sich Technologien zum Einbetten eignen. [YouTube](https://www.youtube.com/) ist weithin bekannt, doch viele Menschen kennen nicht alle Möglichkeiten, die Plattform zum Teilen von Inhalten bietet.

1. Öffnen Sie zunächst den [MDN Playground](/en-US/play).
2. Sehen wir uns nun an, wie Sie mit einem {{htmlelement("iframe")}} ein YouTube-Video in eine beliebige Seite einbetten können.
   1. Rufen Sie YouTube auf und suchen Sie ein Video aus.
   2. Unter dem Video finden Sie die Schaltfläche _Teilen_. Wählen Sie sie aus, um die Optionen zum Teilen anzuzeigen.
   3. Wählen Sie _Einbetten_ aus. Daraufhin wird Ihnen `<iframe>`-Code angezeigt. Kopieren Sie ihn.
   4. Fügen Sie ihn im Playground in den Bereich _HTML_ ein und sehen Sie sich das Ergebnis in der Ausgabe an.
3. Als zusätzliche Übung können Sie auch eine [Google-Karte](https://www.google.com/maps/) in den Playground einbetten:
   1. Rufen Sie Google Maps auf und suchen Sie eine Karte aus.
   2. Klicken Sie oben links auf das „Hamburger-Menü“ mit den drei waagerechten Linien.
   3. Wählen Sie _Karte teilen oder einbetten_ aus.
   4. Wählen Sie _Karte einbetten_ aus. Daraufhin erhalten Sie `<iframe>`-Code. Kopieren Sie ihn.
   5. Fügen Sie ihn im Playground in den Bereich _HTML_ ein und sehen Sie sich das Ergebnis in der Ausgabe an.

Falls Ihnen ein Fehler unterläuft, können Sie den Playground jederzeit mit der Schaltfläche _Zurücksetzen_ zurücksetzen.

## Webseiten mit iframes einbetten

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}}-Elemente dienen dazu, andere Webdokumente in das aktuelle Dokument einzubetten. Das ist besonders nützlich für Inhalte von Drittanbietern, über die Sie möglicherweise keine direkte Kontrolle haben und für die Sie keine eigene Lösung entwickeln möchten: etwa Videos von Online-Videodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartendiensten oder Werbebanner. Selbst die interaktiv bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`-Elementen umgesetzt.

Bevor Sie `<iframe>`-Elemente verwenden, sollten Sie einige Sicherheitsaspekte kennen.
Angenommen, Sie möchten das MDN-Glossar mit einem {{htmlelement("iframe")}}-Element in eine Ihrer Webseiten einbinden. Dazu könnten Sie Code wie im folgenden Beispiel ausprobieren.
Wenn Sie diesen Code in eine Ihrer Seiten einfügen, sehen Sie möglicherweise überraschenderweise eine Fehlermeldung statt der Glossarseite:

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

In der Konsole Ihres Browsers sehen Sie eine Fehlermeldung wie diese:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Im Abschnitt [Sicherheitsaspekte](#sicherheitsaspekte) weiter unten erfahren Sie genauer, warum dieser Fehler auftritt. Sehen wir uns zunächst an, was unser Code bewirkt.

Das Beispiel enthält die wichtigsten Angaben, die für die Verwendung eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/Reference/Properties/border)
  - : Wenn diese Angabe verwendet wird, erscheint der `<iframe>` ohne umgebenden Rahmen. Andernfalls zeigen Browser den `<iframe>` standardmäßig mit einem Rahmen an, was meist unerwünscht ist.
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn dieses Attribut gesetzt ist, kann der `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) im Vollbildmodus angezeigt werden. Darauf gehen wir in diesem Artikel nicht näher ein.
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}} und {{htmlelement("img")}}, einen Pfad zur URL des einzubettenden Dokuments.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute legen die gewünschte Breite und Höhe des iframe fest.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut fordert strengere Sicherheitseinstellungen an. Es funktioniert in etwas neueren Browsern als die übrigen `<iframe>`-Funktionen, beispielsweise ab IE 10. Im nächsten Abschnitt erfahren Sie mehr darüber.

> [!NOTE]
> Um die Ladegeschwindigkeit zu verbessern, empfiehlt es sich, das Attribut `src` des iframe erst dann mit JavaScript zu setzen, wenn der Hauptinhalt geladen wurde. So kann Ihre Seite früher verwendet werden und ihre offiziell gemessene Ladezeit verkürzt sich – eine wichtige Kennzahl für {{Glossary("SEO", "SEO")}}.

### Sicherheitsaspekte

Oben haben wir Sicherheitsaspekte erwähnt. Sehen wir sie uns nun genauer an. Sie müssen nicht alles gleich beim ersten Lesen vollständig verstehen. Wir möchten Sie zunächst auf die Risiken aufmerksam machen und Ihnen eine Referenz bieten, auf die Sie zurückgreifen können, wenn Sie mehr Erfahrung gesammelt haben und `<iframe>`-Elemente in eigenen Projekten einsetzen möchten. Sie müssen deshalb nicht auf `<iframe>`-Elemente verzichten – Sie sollten lediglich vorsichtig sein. Lesen Sie weiter …

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes häufig als Angriffsziel dienen – der Fachbegriff lautet **Angriffsvektor**. Böswillige Akteure im Web, oft **Hacker** oder genauer **Cracker** genannt, können versuchen, Ihre Webseite unerlaubt zu verändern oder Menschen dazu zu bringen, etwas Ungewolltes zu tun, etwa vertrauliche Informationen wie Benutzernamen und Passwörter preiszugeben. Deshalb haben Entwickler von Spezifikationen und Browsern verschiedene Schutzmechanismen entwickelt, um `<iframe>`-Elemente sicherer zu machen. Außerdem gibt es bewährte Vorgehensweisen. Einige davon behandeln wir im Folgenden.

> [!NOTE]
> [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine häufige Art von iframe-Angriff. Dabei betten Angreifer einen unsichtbaren iframe in Ihr Dokument ein – oder Ihr Dokument in ihre eigene schädliche Website –, um Interaktionen von Nutzern abzufangen. Auf diese Weise können Nutzer getäuscht oder vertrauliche Daten gestohlen werden.

Zunächst ein kurzes Beispiel: Laden Sie das zuvor gezeigte Beispiel in Ihren Browser. Sie können es [direkt auf GitHub aufrufen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) und sich auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html). Statt der erwarteten Seite erscheint wahrscheinlich eine Meldung, dass die Seite nicht geöffnet werden kann. Wenn Sie in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) die _Konsole_ öffnen, erfahren Sie den Grund. In Firefox erhalten Sie beispielsweise eine Meldung sinngemäß wie: _Das Laden von „https\://developer.mozilla.org/de/docs/Glossary“ in einem Frame wurde durch die auf „DENY“ gesetzte „X-Frame-Options“-Direktive verweigert._ Der Grund ist eine Einstellung auf dem Server, der die MDN-Seiten ausliefert: Sie verhindert, dass die Seiten in `<iframe>`-Elemente eingebettet werden können (siehe [CSP-Direktiven konfigurieren](#csp-direktiven_konfigurieren) weiter unten). Das ist sinnvoll. Eine vollständige MDN-Seite in eine andere Seite einzubetten, ist kaum zweckmäßig – es sei denn, jemand möchte sie auf der eigenen Website als eigenes Werk ausgeben oder per [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Daten stehlen. Beides wäre höchst problematisch. Würden außerdem alle MDN-Seiten auf diese Weise einbetten, würden die zusätzlichen Datenübertragungen Mozilla viel Geld kosten.

#### Nur einbetten, wenn es nötig ist

Manchmal ist es sinnvoll, Inhalte von Drittanbietern wie YouTube-Videos und Karten einzubetten. Sie ersparen sich jedoch viele Schwierigkeiten, wenn Sie solche Inhalte nur einbetten, wenn es wirklich nötig ist. Eine gute Faustregel für die Sicherheit im Web lautet: _„Man kann nie vorsichtig genug sein. Wenn Sie etwas selbst erstellt haben, überprüfen Sie es trotzdem noch einmal. Wenn es jemand anderes erstellt hat, gehen Sie zunächst davon aus, dass es gefährlich ist – bis das Gegenteil erwiesen ist.“_

Neben der Sicherheit sollten Sie auch geistige Eigentumsrechte beachten. Die meisten Inhalte sind urheberrechtlich geschützt, sowohl online als auch offline. Das gilt selbst für Inhalte, bei denen Sie es vielleicht nicht erwarten, beispielsweise für die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page). Zeigen Sie Inhalte nur dann auf Ihrer Webseite an, wenn sie Ihnen gehören oder Sie eine schriftliche, eindeutige Erlaubnis der Rechteinhaber haben. Urheberrechtsverletzungen können schwerwiegende Folgen haben. Auch hier gilt: Man kann nie vorsichtig genug sein.

Wenn Inhalte unter einer Lizenz stehen, müssen Sie deren Bedingungen einhalten. Die Inhalte auf MDN stehen beispielsweise [unter der Lizenz CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license). Das bedeutet, dass Sie [uns korrekt als Quelle nennen müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren – selbst wenn Sie sie wesentlich verändern.

#### HTTPS verwenden

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Variante von {{Glossary("HTTP", "HTTP")}}. Sie verringert das Risiko, dass Inhalte während der Übertragung gelesen oder manipuliert werden.

Heute sollten alle Inhalte über HTTPS ausgeliefert werden. Browser warnen zunehmend vor Inhalten, die über HTTP bereitgestellt werden; HTTP-Unterressourcen werden auf HTTPS-Seiten nicht geladen; und viele Webfunktionen setzen HTTPS voraus. Um HTTPS für Ihre Website zu aktivieren, muss ein Sicherheitszertifikat installiert sein. Die meisten Hosting-Anbieter stellen HTTPS standardmäßig bereit, sodass Sie selbst kein Zertifikat einrichten müssen.

Falls Sie die HTTPS-Unterstützung für Ihre Website _doch_ selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anleitungen, mit denen Sie das nötige Zertifikat automatisch erstellen und installieren können. Viele Webserver werden unterstützt, darunter Apache und Nginx. Die Werkzeuge von Let's Encrypt sollen diesen Vorgang so einfach wie möglich machen.

#### Immer das Attribut `sandbox` verwenden

Angreifer sollten möglichst wenige Möglichkeiten haben, auf Ihrer Website Schaden anzurichten. Geben Sie eingebetteten Inhalten deshalb _nur die Berechtigungen, die sie für ihre Aufgabe benötigen_. Das gilt selbstverständlich auch für Ihre eigenen Inhalte. Ein abgeschirmter Bereich, in dem Code für seinen vorgesehenen Zweck oder zu Testzwecken ausgeführt werden kann, ohne den übrigen Codebestand versehentlich oder absichtlich zu beschädigen, heißt [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

Inhalte ohne Sandbox können unter Umständen JavaScript ausführen, Formulare absenden oder Popup-Fenster öffnen. Standardmäßig sollten Sie alle verfügbaren Einschränkungen aktivieren, indem Sie das Attribut `sandbox` ohne Parameter verwenden, wie in unserem vorherigen Beispiel.

Falls unbedingt nötig, können Sie Berechtigungen einzeln wieder hinzufügen – innerhalb des Attributwerts `sandbox=""`. Alle verfügbaren Optionen finden Sie in der Referenz zu [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox). Wichtig ist, dass Sie Ihrem `sandbox`-Attribut _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` hinzufügen, wenn der eingebettete Inhalt denselben Ursprung wie die einbettende Seite hat. In diesem Fall könnte der eingebettete Inhalt das Attribut mit JavaScript entfernen und sich selbst neu laden, um die Sandbox vollständig zu deaktivieren.

> [!NOTE]
> Eine Sandbox bietet keinen Schutz, wenn Angreifer Menschen dazu bringen können, schädliche Inhalte direkt aufzurufen – also außerhalb eines `iframe`. Falls bestimmte Inhalte möglicherweise schädlich sind, etwa von Nutzern erstellte Inhalte, stellen Sie sie bitte über eine andere {{Glossary("domain", "Domain")}} als Ihre Hauptwebsite bereit.

#### CSP-Direktiven konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)**. Sie umfasst [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) – Metadaten, die beim Ausliefern Ihrer Webseiten von einem Webserver mitgesendet werden – und dient dazu, die Sicherheit Ihres HTML-Dokuments zu verbessern. Zum Schutz vor Risiken durch `<iframe>`-Elemente können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Damit können Sie verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten. Andernfalls wären [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und zahlreiche weitere Angriffe möglich. Genau diese Maßnahme haben die MDN-Entwickler ergriffen, wie wir zuvor gesehen haben.

> [!NOTE]
> Weitere Hintergrundinformationen finden Sie in Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/). Eine vollständige Erklärung würde den Rahmen dieses Artikels sprengen.

## Die Elemente \<embed> und \<object>

Wie {{htmlelement("iframe")}} können auch die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}} externe Inhalte einbetten. Je nach Inhalt kann das eine ressourcenschonendere Möglichkeit sein, da der Browser keinen vollständigen Browsing-Kontext für den eingebetteten Inhalt erstellen muss.

Früher wurden diese Elemente auch verwendet, um Inhalte einzubetten, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet wurden. Diese Technologie ist jedoch veraltet und wird von modernen Browsern nicht mehr unterstützt. Heute lassen sich nahezu alle entsprechenden Anwendungsfälle mit `<iframe>` abdecken, das zusätzliche Sicherheitsfunktionen bietet.

Wenn Sie externe Inhalte mit diesen Elementen einbetten müssen, benötigen Sie mindestens die folgenden Angaben:

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
        <em>Korrekter </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des Bereichs für den eingebetteten Inhalt
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Eigenständiger HTML-Inhalt als Ersatz, falls die Ressource nicht verfügbar ist</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Zwischen dem öffnenden und dem schließenden
        <code>&#x3C;object></code>-Tag enthalten
      </td>
    </tr>
  </tbody>
</table>

## PDFs einbetten

Für die meisten Medien gibt es im Web eigene Elemente: {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{SVGElement("svg")}} und weitere. Neben Webseiten ist das Einbetten von PDF-Dokumenten der wichtigste Anwendungsfall für `<iframe>`, `<object>` und `<embed>`.

Alle heutigen Browser verfügen über integrierte PDF-Renderer. Diese schirmen ausführbare Inhalte bereits in einer Sandbox ab. Deshalb ist das Einbetten von PDFs im Allgemeinen standardmäßig sicher. Wenn Sie `<iframe>` verwenden, müssen Sie das Attribut `sandbox` nicht angeben. Es kann sogar verhindern, dass die PDF-Anzeige funktioniert.

Wenn Ihre Seite eine PDF-Vorschau benötigt, wählen Sie das Element anhand der benötigten Funktionen:

- Das Element {{htmlelement("iframe")}} sollte Ihre erste Wahl sein: Es bietet Steuerungsmöglichkeiten wie [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) und [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy).
- Verwenden Sie {{htmlelement("object")}} nur, wenn die Ressource möglicherweise nicht dargestellt werden kann und ein Ersatzinhalt benötigt wird.
- Das Element {{htmlelement("embed")}} bietet für eine PDF-Vorschau keinen Vorteil.

Da die PDF-Anzeige des Browsers bereits eine eigene Sandbox verwendet, ist für das Element keine zusätzliche Sandbox nötig. Das Hinzufügen von `sandbox` kann sogar verhindern, dass die PDF-Anzeige funktioniert. Wenn Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwenden, werden Quellen für `<iframe>` über {{CSP("frame-src")}} und Quellen für `<object>` und `<embed>` über {{CSP("object-src")}} gesteuert. Wie auf der Referenzseite zu `object-src` beschrieben, sollten Sie `object-src 'none'` im Allgemeinen beibehalten. In diesem Fall ist `<iframe>` die einzige praktikable Möglichkeit.

Sehen wir uns ein Beispiel an, in dem ein PDF mit `<object>` in eine Seite eingebettet wird:

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    The PDF preview is unavailable.
    <a href="my-pdf.pdf">Open the PDF file.</a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt auf dem Weg vom Papier zum Digitalen. Sie bringen jedoch zahlreiche [Herausforderungen für die Barrierefreiheit](https://webaim.org/techniques/acrobat/acrobat) mit sich und sind auf kleinen Bildschirmen oft schwer zu lesen. In manchen Bereichen sind sie weiterhin beliebt. Dennoch ist es wesentlich besser, auf PDF-Dateien zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, statt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Einbetten anderer Inhalte in Webdokumente kann schnell sehr komplex werden. Deshalb haben wir versucht, das Thema auf einfache und vertraute Weise vorzustellen, sodass sein praktischer Nutzen unmittelbar deutlich wird. Zugleich haben wir einige fortgeschrittenere Funktionen der beteiligten Technologien angesprochen. Zu Beginn werden Sie diese Möglichkeiten wahrscheinlich vor allem nutzen, um Inhalte von Drittanbietern wie Karten und Videos in Ihre Seiten einzubinden. Mit wachsender Erfahrung werden Sie vermutlich weitere Einsatzmöglichkeiten entdecken.

Neben den hier behandelten gibt es viele weitere Technologien zum Einbetten externer Inhalte. Einige davon haben wir bereits in früheren Artikeln kennengelernt, etwa {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}. Andere können Sie noch entdecken, beispielsweise {{htmlelement("canvas")}} für mit JavaScript erzeugte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
