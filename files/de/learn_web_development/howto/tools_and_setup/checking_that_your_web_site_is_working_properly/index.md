---
title: Wie stellen Sie sicher, dass Ihre Webseite ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Artikel behandeln wir verschiedene Schritte zur Fehlersuche auf einer Webseite und einige grundlegende Maßnahmen, um diese Probleme zu lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen, wie man
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server"
          >Dateien auf einen Webserver hochlädt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden lernen, wie man einige grundlegende Probleme diagnostiziert und löst, die auf Ihrer Webseite auftreten können.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Webseite online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Webseite zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder laden langsam, usw. Meistens ist es keine große Sache, nur ein einfacher Fehler oder ein Problem mit Ihrer Webhost-Konfiguration.

Schauen wir uns an, wie man diese Probleme diagnostiziert und löst.

## Aktives Lernen

_Es gibt derzeit kein aktives Lernen. [Bitte ziehen Sie in Betracht, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Graben Sie tiefer

### Im Browser testen

Wenn Sie wissen möchten, ob Ihre Webseite korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu öffnen und zur Seite zu gehen, die Sie testen möchten.

#### Oh nein, wo ist das Bild?

Schauen wir uns unsere persönliche Webseite an, `http://demozilla.examplehostingprovider.net/`. Es wird nicht das Bild angezeigt, das wir erwartet hatten!

![Ups, das 'unicorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerk-Tool von Firefox (**Extras ➤ Webentwickler ➤ Netzwerkanalyse**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, die "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Status

Server antworten mit einer Statusmeldung, wann immer sie eine Anfrage erhalten. Hier sind die gängigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde bereitgestellt.
- **301: Permanent verschoben**
  - : Die Ressource wurde an einen neuen Ort verschoben. Dies werden Sie in Ihrem Browser nicht oft sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Information verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was zu schnelleren Antwortzeiten und effizienterem Bandbreiteneinsatz führt.
- **403: Verboten**
  - : Sie dürfen die Ressource nicht anzeigen. Normalerweise liegt dies an einem Konfigurationsfehler (z.B. Ihr Hosting-Anbieter hat Ihnen nicht die Zugriffsrechte auf ein Verzeichnis gegeben).
- **404: Nicht gefunden**
  - : Selbsterklärend. Wir werden weiter unten besprechen, wie man dieses Problem löst.
- **500: Interner Serverfehler**
  - : Etwas ist auf dem Server schiefgelaufen. Zum Beispiel hat vielleicht die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net, etc.) aufgehört zu funktionieren, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, sich an den Support Ihres Hosting-Anbieters zu wenden.
- **503: Dienst nicht verfügbar**
  - : Meistens das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat irgendein Problem. Versuchen Sie es nach einer Weile noch einmal.

Als Anfänger, die unsere (einfache) Webseite überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 konfrontiert.

#### Behebung des 404-Fehlers

Was ist also schiefgelaufen?

![Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerk-Tool meldete einen "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` anstelle von `unicorn_pic.png`. Korrigieren Sie also den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern Sie, [senden Sie es an den Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Schauen wir uns die {{Glossary("HTTP", "HTTP")}}-Statuscodes noch einmal an:

- **200** für `/` und `unicorn_pic.png` bedeutet, dass wir es geschafft haben, die Seite und das Bild neu zu laden.
- **304** für `basic.css` bedeutet, dass diese Datei sich seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

So haben wir den Fehler behoben und dabei noch ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler nur aus einem Tippfehler, aber manchmal haben Sie entweder vergessen, eine Ressource hochzuladen, oder Sie haben Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Rechtschreibung und Genauigkeit des Dateipfads, und wenn das Problem weiterhin besteht, laden Sie Ihre Dateien erneut hoch. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dies wird das Laden der Seite nicht verhindern, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Extras ➤ Webentwickler ➤ Webkonsole**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich eindeutig), worin der Fehler liegt, und wir können ihn beheben (wir werden JavaScript in einer [anderen Reihe](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Dinge, die zu überprüfen sind

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Webseite ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können, und wie Sie diese beheben können. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Erweiterungen wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge verraten:

![Yslow-Diagnose](yslow-diagnostics.png)

Die Noten reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das spielt keine große Rolle, wenn wir nur ein Bild bereitstellen, wäre aber entscheidend für eine Webseite mit hohem Bandbreitenbedarf, die viele Tausende von Bildern bereitstellt.

#### Ist der Server ausreichend reaktionsfähig?

`ping` ist ein nützliches Shell-Tool, das den von Ihnen bereitgestellten Domainnamen testet und Ihnen mitteilt, ob der Server reagiert oder nicht:

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

Denken Sie einfach an eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeitumgebung und teilt ihr mit, dass sie stoppen soll. Wenn Sie die Laufzeit nicht stoppen, wird `ping` den Server unendlich lange anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten so funktionieren, wie Sie es erwarten
- Überprüfen Sie Ihre Webseite in mehreren Browsern, um sicherzustellen, dass sie konsistent dargestellt wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Webseite ist für jeden zugänglich online. Das ist ein großer Erfolg. Jetzt können Sie tiefer in verschiedene Themen einsteigen.

- Da Menschen aus aller Welt Ihre Webseite besuchen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Webseite etwas zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
