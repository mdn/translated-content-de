---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn/Common_questions/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlersuche auf einer Website durch und einige grundlegende Aktionen, um diese Probleme zu lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen, wie man
        <a
          href="/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server"
          >Dateien auf einen Webserver hochlädt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen, wie Sie einige grundlegende Probleme diagnostizieren und lösen können, die auf Ihrer Website auftreten können.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder laden langsam und so weiter. Meistens ist es kein großes Problem, nur ein einfacher Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Sehen wir uns an, wie man diese Probleme diagnostiziert und löst.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefen

### Testen Sie in Ihrem Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu starten und die Seite aufzurufen, die Sie testen möchten.

#### Oje, wo ist das Bild?

Sehen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Das Bild, das wir erwartet haben, wird nicht angezeigt!

![Oops, das 'unicorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Firefox-Netzwerkwerkzeug (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Dort ist das Problem, diese "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Status

Server antworten mit einer Statusmeldung, wann immer sie eine Anforderung erhalten. Hier sind die häufigsten Status:

- **200: OK**
  - : Die angeforderte Ressource wurde geliefert.
- **301: Permanent verschoben**
  - : Die Ressource ist an einen neuen Ort verschoben worden. Sie werden dies nicht oft in Ihrem Browser sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Informationen häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was zu schnelleren Antwortzeiten und effizienterer Bandbreitennutzung führt.
- **403: Verboten**
  - : Sie dürfen die Ressource nicht anzeigen. Gewöhnlich hat dies mit einem Konfigurationsfehler zu tun (z.B. hat Ihr Hosting-Anbieter vergessen, Ihnen Zugriffsrechte auf ein Verzeichnis zu gewähren).
- **404: Nicht gefunden**
  - : Selbsterklärend. Wir werden unten besprechen, wie Sie dies beheben können.
- **500: Interner Serverfehler**
  - : Auf dem Server ist etwas schiefgelaufen. Vielleicht hat die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net, etc.) aufgehört zu arbeiten, oder der Webserver selbst hat ein Konfigurationsproblem. Normalerweise ist es am besten, sich an den Support Ihres Hosting-Anbieters zu wenden.
- **503: Dienst nicht verfügbar**
  - : Gewöhnlich aufgrund einer kurzfristigen Systemüberlastung. Der Server hat ein Problem. Versuchen Sie es in kurzer Zeit erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 zu tun haben.

#### Behebung des 404

Was ist also schiefgelaufen?

![Die Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das von uns angeforderte Bild am richtigen Ort zu sein, aber das Netzwerk-Tool meldete eine "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` statt `unicorn_pic.png`. Also korrigieren Sie den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern Sie die Datei, [pushen Sie zum Server](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server) und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Sehen wir uns die {{Glossary("HTTP", "HTTP")}}-Statuscodes noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass wir die Seite und das Bild erfolgreich erneut geladen haben.
- **304** für `basic.css` bedeutet, dass diese Datei sich seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

Wir haben also den Fehler behoben und dabei ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft ist der Fehler nur ein Tippfehler, aber manchmal haben Sie vielleicht vergessen, eine Ressource hochzuladen, oder Ihre Netzwerkverbindung ist abgebrochen, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Rechtschreibung und Genauigkeit des Dateipfads, und wenn das Problem weiterhin besteht, laden Sie Ihre Dateien erneut hoch. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dies wird das Laden der Seite nicht verhindern, aber Sie werden spüren, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Web developer ➤ Web Console**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ganz eindeutig), worin der Fehler besteht, und können ihn beheben (wir werden JavaScript in [einer anderen Serie](/de/docs/Learn/JavaScript) von Artikeln behandeln).

### Weitere Dinge, die Sie überprüfen sollten

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können, und wie man sie behebt. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge verraten:

![Yslow-Diagnosen](yslow-diagnostics.png)

Noten reichen von A bis F. Unsere Seite ist einfach klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das ist nicht sehr wichtig, wenn wir nur ein Bild bereitstellen, aber es wäre entscheidend für eine Website mit hohem Bandbreitenbedarf, die viele Tausend Bilder bereitstellt.

#### Ist der Server reaktionsschnell genug?

`ping` ist ein nützliches Shell-Tool, das den von Ihnen angegebenen Domainnamen testet und Ihnen mitteilt, ob der Server reagiert oder nicht:

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

Denken Sie nur an eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeit und sagt ihr, dass sie stoppen soll. Wenn Sie die Laufzeit nicht stoppen, wird `ping` den Server unendlich oft anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404s
- Stellen Sie sicher, dass alle Webseiten wie erwartet funktionieren
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent dargestellt wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist online und für jeden zugänglich. Das ist eine große Leistung. Jetzt können Sie anfangen, sich weiter in verschiedene Themen zu vertiefen.

- Da Menschen aus der ganzen Welt auf Ihre Website kommen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn/Common_questions/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website etwas zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn/CSS/First_steps/How_CSS_works).
