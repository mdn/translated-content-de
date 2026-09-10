---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung bei einer Website sowie einige grundlegende Maßnahmen durch, die Sie ergreifen können, um diese Probleme zu lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen, wie Sie
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server"
          >Dateien auf einen Webserver hochladen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen, wie Sie einige grundlegende Probleme diagnostizieren und beheben können, auf die Sie bei Ihrer Website stoßen können.
      </td>
    </tr>
  </tbody>
</table>

Sie haben Ihre Website also online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler Server. Daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie werden vielleicht überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder laden langsam und so weiter. Meistens ist das keine große Sache, sondern nur ein einfacher Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Sehen wir uns an, wie Sie diese Probleme diagnostizieren und lösen können.

## Tiefer einsteigen

### In Ihrem Browser testen

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, sollten Sie zuerst Ihren Browser öffnen und die Seite aufrufen, die Sie testen möchten.

#### Oh je, wo ist das Bild?

Sehen wir uns unsere persönliche Website an: `http://demozilla.examplehostingprovider.net/`. Sie zeigt nicht das Bild an, das wir erwartet haben!

![Hoppla, das „unicorn“-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerk-Werkzeug von Firefox (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem: die „404“ unten. „404“ bedeutet „resource not found“, weshalb wir das Bild nicht gesehen haben.

#### HTTP-Statuscodes

Server antworten mit einer Statusmeldung, sobald sie eine Anfrage erhalten. Hier sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde bereitgestellt.
- **301: Moved permanently**
  - : Die Ressource wurde an einen neuen Ort verschoben. Sie werden dies in Ihrem Browser nicht oft sehen, aber es ist gut, „301“ zu kennen, da Suchmaschinen diese Information häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Not modified**
  - : Die Datei hat sich seit Ihrer letzten Anfrage nicht geändert. Ihr Browser kann daher die Version aus seinem Cache anzeigen, was zu schnelleren Antwortzeiten und einer effizienteren Nutzung der Bandbreite führt.
- **403: Forbidden**
  - : Sie dürfen die Ressource nicht anzeigen. In der Regel liegt dies an einem Konfigurationsfehler (z. B. weil Ihr Hosting-Anbieter vergessen hat, Ihnen Zugriffsrechte für ein Verzeichnis zu geben).
- **404: Not found**
  - : Selbsterklärend. Wie Sie dies beheben, besprechen wir weiter unten.
- **500: Internal server error**
  - : Auf dem Server ist etwas schiefgelaufen. Beispielsweise funktioniert möglicherweise die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net usw.) nicht mehr, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, sich an das Support-Team Ihres Hosting-Anbieters zu wenden.
- **503: Service unavailable**
  - : Dies ist in der Regel das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat irgendein Problem. Versuchen Sie es nach einer kurzen Weile erneut.

Als Einsteiger, die unsere (einfache) Website überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 zu tun haben.

#### Den 404-Fehler beheben

Was ist also schiefgelaufen?

![Die Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint sich das angeforderte Bild am richtigen Ort zu befinden, aber das Netzwerk-Werkzeug meldete einen „404“-Fehler. Es stellte sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht hatten: `unicorn_pics.png` statt `unicorn_pic.png`. Korrigieren Sie den Tippfehler daher in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das „s“ löschen](code-correct.png)

Speichern Sie die Datei, [laden Sie sie auf den Server hoch](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird im Browser korrekt geladen](image-corrected.png)

Geschafft! Sehen wir uns die {{Glossary("HTTP", "HTTP")}}-Statuscodes noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass wir die Seite und das Bild erfolgreich neu geladen haben.
- **304** für `basic.css` bedeutet, dass sich diese Datei seit der letzten Anfrage nicht geändert hat. Der Browser kann daher die Datei aus seinem Cache verwenden, statt eine neue Kopie zu erhalten.

Wir haben also den Fehler behoben und dabei einige HTTP-Statuscodes kennengelernt!

### Häufige Fehler

Dies sind die häufigsten Fehler, die wir finden:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein „l“ vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. Tatsächlich.

#### 404-Fehler

Oft entsteht der Fehler einfach durch einen Tippfehler. Manchmal haben Sie jedoch möglicherweise eine Ressource nicht hochgeladen oder Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Prüfen Sie zuerst die Schreibweise und Genauigkeit des Dateipfads. Wenn das Problem weiterhin besteht, laden Sie Ihre Dateien erneut hoch. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat der Seite ein Skript hinzugefügt und dabei einen Fehler gemacht. Dies verhindert nicht, dass die Seite geladen wird, aber Sie werden merken, dass etwas nicht stimmt.

Öffnen Sie die Konsole (**Tools ➤ Web developer ➤ Web Console**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich deutlich), worin der Fehler besteht, und können ihn beheben (JavaScript behandeln wir in [einer anderen Artikelreihe](/de/docs/Learn_web_development/Core/Scripting)).

### Weitere Dinge, die Sie überprüfen sollten

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können, und wie Sie sie beheben. Sie können außerdem testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Informationen liefern:

![Yslow-Diagnose](yslow-diagnostics.png)

Die Bewertungen reichen von A bis F. Unsere Seite ist sehr klein und erfüllt die meisten Kriterien. Wir können jedoch bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das ist nicht besonders wichtig, wenn wir nur ein Bild bereitstellen, wäre aber für eine Website mit hoher Bandbreite, die viele Tausend Bilder bereitstellt, entscheidend.

#### Reagiert der Server schnell genug?

`ping` ist ein nützliches Shell-Werkzeug, das den von Ihnen angegebenen Domainnamen testet und Ihnen mitteilt, ob der Server antwortet oder nicht:

```plain
$ ping mozilla.org
PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=44 time=148.741 ms
64 bytes from 63.245.215.20: icmp_seq=1 ttl=44 time=148.541 ms
64 bytes from 63.245.215.20: icmp_seq=2 ttl=44 time=148.734 ms
64 bytes from 63.245.215.20: icmp_seq=3 ttl=44 time=147.857 ms
^C
--- mozilla.org ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 147.857/148.468/148.741/0.362 ms
```

Behalten Sie einfach eine praktische Tastenkombination im Hinterkopf: **Ctrl+C**. Ctrl+C sendet ein „interrupt“-Signal an die Laufzeitumgebung und weist sie an, anzuhalten. Wenn Sie die Laufzeitumgebung nicht anhalten, wird `ping` den Server unbegrenzt anpingen.

### Eine einfache Checkliste

- Prüfen Sie auf 404-Fehler.
- Stellen Sie sicher, dass sich alle Webseiten wie erwartet verhalten.
- Prüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird.

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist in Betrieb und kann von allen besucht werden. Das ist eine große Leistung. Jetzt können Sie sich eingehender mit verschiedenen Themen beschäftigen.

- Da Menschen aus der ganzen Welt auf Ihre Website zugreifen können, sollten Sie erwägen, sie [für alle zugänglich zu machen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website noch etwas zu grob? Es ist Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
