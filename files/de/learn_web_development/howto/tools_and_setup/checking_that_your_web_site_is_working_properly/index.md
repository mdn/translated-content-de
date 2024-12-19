---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung einer Website durch und einige grundlegende Maßnahmen, die ergriffen werden können, um diese Probleme zu lösen.

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
        Sie lernen, wie man einige grundlegende Probleme diagnostiziert und löst, die auf Ihrer Website auftreten können.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder nur langsam, und so weiter. Meistens ist es kein großes Problem, nur ein einfacher Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Schauen wir uns an, wie man diese Probleme diagnostiziert und löst.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefen

### Testen Sie in Ihrem Browser

Wenn Sie wissen wollen, ob Ihre Website korrekt funktioniert, ist das Erste, das Sie tun sollten, Ihren Browser zu öffnen und zur Seite zu navigieren, die Sie testen möchten.

#### Uh-oh, wo ist das Bild?

Schauen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Das erwartete Bild wird nicht angezeigt!

![Oops, das 'Einhorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerk-Tool von Firefox (**Tools ➤ Web-Entwickler ➤ Netzwerk**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, dieser "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Statuscodes

Server antworten mit einer Statusmeldung, wann immer sie eine Anfrage erhalten. Hier sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde geliefert.
- **301: Moved permanently**
  - : Die Ressource wurde an einen neuen Ort verschoben. Sie werden dies nicht oft in Ihrem Browser sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Informationen häufig nutzen, um ihre Indizes zu aktualisieren.
- **304: Not modified**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was zu schnelleren Antwortzeiten und effizienterer Nutzung der Bandbreite führt.
- **403: Forbidden**
  - : Sie dürfen die Ressource nicht anzeigen. In der Regel handelt es sich um einen Konfigurationsfehler (z.B. hat Ihr Hosting-Anbieter vergessen, Ihnen Zugriffsrechte auf ein Verzeichnis zu geben).
- **404: Not found**
  - : Selbst erklärend. Wir werden unten besprechen, wie man das löst.
- **500: Internal server error**
  - : Etwas ist auf dem Server schiefgelaufen. Beispielsweise könnte die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net, etc.) nicht mehr funktionieren, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, sich an das Support-Team Ihres Hosting-Anbieters zu wenden.
- **503: Service unavailable**
  - : In der Regel aufgrund einer kurzfristigen Systemüberlastung. Der Server hat irgendein Problem. Versuchen Sie es in kurzer Zeit erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir meistens mit 200, 304, 403 und 404 zu tun haben.

#### Beheben des 404

Was ist also schiefgelaufen?

![Le List der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerk-Tool meldete einen "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` anstatt `unicorn_pic.png`. Korrigieren Sie also den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern, [auf den Server hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) und die Seite in Ihrem Browser neu laden:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Schauen wir uns die {{Glossary("HTTP", "HTTP")}} Statuscodes noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass es uns gelungen ist, die Seite und das Bild neu zu laden.
- **304** für `basic.css` bedeutet, dass sich diese Datei seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

So haben wir den Fehler behoben und unterwegs ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler nur aus einem Tippfehler, aber manchmal haben Sie entweder vergessen, eine Ressource hochzuladen, oder Sie haben Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Rechtschreibung und die Genauigkeit des Datei-Pfads, und wenn es immer noch ein Problem gibt, laden Sie Ihre Dateien erneut hoch. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dadurch wird das Laden der Seite nicht verhindert, aber Sie werden das Gefühl haben, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Web-Entwickler ➤ Web-Konsole**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel lernen wir (ziemlich klar), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in einer [anderen Serie](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Punkte zur Überprüfung

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können, und wie Sie diese beheben können. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge mitteilen:

![Yslow-Diagnosen](yslow-diagnostics.png)

Die Noten gehen von A bis F. Unsere Seite ist einfach klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das spielt nicht so eine große Rolle, wenn wir nur ein Bild bereitstellen, aber es wäre entscheidend für eine Website mit hohem Bandbreitenbedarf, die viele Tausende von Bildern bereitstellt.

#### Ist der Server ausreichend reaktionsschnell?

`ping` ist ein nützliches Shell-Tool, das den von Ihnen angegebenen Domainnamen testet und Ihnen sagt, ob der Server antwortet oder nicht:

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

Merken Sie sich eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeitumgebung und sagt ihr, sie soll aufhören. Wenn Sie die Laufzeitumgebung nicht stoppen, wird `ping` den Server auf unbestimmte Zeit anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten so funktionieren, wie Sie es erwarten
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird

## Nächste Schritte

Glückwunsch, Ihre Website ist online und für jeden zugänglich. Das ist ein großer Erfolg. Jetzt können Sie tiefer in verschiedene Themen eintauchen.

- Da Menschen aus der ganzen Welt auf Ihre Website kommen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website etwas zu grob? Es ist Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
