---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn/Common_questions/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung für eine Website durch und erläutern einige grundlegende Maßnahmen, um diese Probleme zu lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen, wie Sie
        <a
          href="/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server"
          >Dateien auf einen Webserver hochladen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen, wie Sie einige grundlegende Probleme diagnostizieren und lösen können, die bei Ihrer Website auftreten können.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online gestellt? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder laden langsam und so weiter. Meistens handelt es sich nur um einfache Fehler oder ein Problem mit der Konfiguration Ihres Webhostings.

Sehen wir uns an, wie diese Probleme diagnostiziert und gelöst werden können.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte ziehen Sie eine Mitwirkung in Betracht](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefer gehende Informationen

### Testen Sie in Ihrem Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu starten und die Seite aufzurufen, die Sie testen möchten.

#### Oh-oh, wo ist das Bild?

Sehen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Sie zeigt nicht das erwartete Bild!

![Hoppla, das 'Einhorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerk-Tool von Firefox (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, das "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Status

Server antworten mit einer Statusmeldung, wenn sie eine Anfrage erhalten. Hier sind die häufigsten Status:

- **200: OK**
  - : Die angeforderte Ressource wurde geliefert.
- **301: Permanent verschoben**
  - : Die Ressource wurde an einen neuen Ort verschoben. Dies werden Sie in Ihrem Browser nicht oft sehen, aber es ist gut, dass Suchmaschinen diese Information häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus dem Cache anzeigen kann, was zu schnelleren Reaktionszeiten und effizienterer Bandbreitennutzung führt.
- **403: Verboten**
  - : Sie dürfen die Ressource nicht anzeigen. Meistens handelt es sich um einen Konfigurationsfehler (z. B. hat Ihr Hoster vergessen, Ihnen Zugriffsrechte auf ein Verzeichnis zu geben).
- **404: Nicht gefunden**
  - : Selbsterklärend. Wir werden weiter unten besprechen, wie Sie dieses Problem lösen können.
- **500: Interner Serverfehler**
  - : Auf dem Server ist ein Fehler aufgetreten. Beispielsweise könnte die serverseitige Sprache ({{Glossary("PHP")}}, .Net, usw.) nicht mehr funktionieren, oder der Webserver hat ein Konfigurationsproblem. Meistens ist es am besten, das Support-Team Ihres Hosters zu konsultieren.
- **503: Dienst nicht verfügbar**
  - : Üblicherweise das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat ein Problem. Versuchen Sie es in einigen Minuten erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir am häufigsten auf die Status 200, 304, 403 und 404 stoßen.

#### Behebung des 404-Fehlers

Was ist schiefgelaufen?

![Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerk-Tool hat einen "404"-Fehler gemeldet. Es stellte sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` statt `unicorn_pic.png`. Korrigieren Sie also den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern, [auf den Server hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server) und die Seite in Ihrem Browser neu laden:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Sehen wir uns die {{Glossary("HTTP")}}-Status erneut an:

- **200** für `/` und `unicorn_pic.png` bedeutet, dass wir die Seite und das Bild erfolgreich neu geladen haben.
- **304** für `basic.css` bedeutet, dass diese Datei seit der letzten Anfrage nicht geändert wurde, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

Also haben wir den Fehler behoben und dabei ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler einfach aus einem Tippfehler, aber manchmal haben Sie vielleicht vergessen, eine Ressource hochzuladen oder Ihre Netzwerkverbindung ist während des Hochladens Ihrer Ressourcen verloren gegangen. Überprüfen Sie zuerst die Rechtschreibung und Genauigkeit des Dateipfads und laden Sie Ihre Dateien erneut hoch, wenn immer noch ein Problem besteht. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat ein Skript auf der Seite hinzugefügt und einen Fehler gemacht. Dies wird das Laden der Seite nicht verhindern, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Webdeveloper ➤ Web Console**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich deutlich), worin der Fehler besteht, und können ihn beheben (wir werden JavaScript in [einer anderen Reihe](/de/docs/Learn/JavaScript) von Artikeln behandeln).

### Weitere Dinge zu überprüfen

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, die auftreten können, und wie Sie diese beheben. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge mitteilen:

![Yslow-Diagnosen](yslow-diagnostics.png)

Die Bewertungen reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN")}} zu verwenden. Das ist nicht besonders wichtig, wenn wir nur ein Bild bereitstellen, aber es wäre kritisch für eine Website mit hohem Bandbreitenverbrauch, die viele Tausend Bilder bereitstellt.

#### Ist der Server reaktionsschnell genug?

`ping` ist ein nützliches Shell-Tool, das den angegebenen Domainnamen testet und Ihnen mitteilt, ob der Server antwortet oder nicht:

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

Denken Sie daran, eine praktische Tastenkombination: **Ctrl+C**. Ctrl+C sendet ein "Abbruch"-Signal an die Laufzeitumgebung und sagt dieser, dass sie aufhören soll. Wenn Sie die Laufzeitumgebung nicht stoppen, wird `ping` den Server unendlich lang anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten so funktionieren, wie Sie es erwarten
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent dargestellt wird

## Nächste Schritte

Glückwunsch, Ihre Website ist für jeden zugänglich und läuft. Das ist ein großer Erfolg. Jetzt können Sie anfangen, tiefer in verschiedene Themen einzutauchen.

- Da Menschen aus der ganzen Welt auf Ihre Website kommen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn/Common_questions/Design_and_accessibility/What_is_accessibility).
- Findet Sie das Design Ihrer Website etwas zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn/CSS/First_steps/How_CSS_works).