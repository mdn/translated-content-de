---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung für eine Website durch und zeigen grundlegende Maßnahmen, die zur Lösung dieser Probleme ergriffen werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie man
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

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder nur langsam usw. Meistens ist es kein großes Problem, nur ein einfacher Fehler oder ein Problem mit der Konfiguration des Webhostings.

Sehen wir uns an, wie diese Probleme diagnostiziert und gelöst werden können.

## Gründen Sie tiefer

### Test im Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu öffnen und die zu testende Seite aufzurufen.

#### Oh oh, wo ist das Bild?

Schauen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Sie zeigt nicht das erwartete Bild an!

![Oh nein, das 'Einhorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerk-Tool von Firefox (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, das "404" am unteren Rand. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Statuscodes

Server senden eine Statusmeldung als Antwort, wann immer sie eine Anfrage erhalten. Hier sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde geliefert.
- **301: Dauerhaft verschoben**
  - : Die Ressource wurde an einen neuen Ort verschoben. Sie werden dies nicht oft in Ihrem Browser sehen, aber es ist gut, den "301" zu kennen, da Suchmaschinen diese Informationen häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht verändert**
  - : Die Datei hat sich seit der letzten Anforderung nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was schnellere Antwortzeiten und eine effizientere Nutzung der Bandbreite ermöglicht.
- **403: Verboten**
  - : Sie dürfen die Ressource nicht anzeigen. Normalerweise hängt dies mit einem Konfigurationsfehler zusammen (z.B. Ihr Hosting-Anbieter hat Ihnen keine Zugriffsrechte auf ein Verzeichnis gegeben).
- **404: Nicht gefunden**
  - : Selbsterklärend. Wir werden weiter unten besprechen, wie man dies löst.
- **500: Interner Serverfehler**
  - : Auf dem Server ist etwas schiefgelaufen. Zum Beispiel könnte die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net, etc.) nicht mehr funktionieren, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, den Support Ihres Hosting-Anbieters zu kontaktieren.
- **503: Dienst nicht verfügbar**
  - : Normalerweise das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat irgendein Problem. Versuchen Sie es in einem Moment noch einmal.

Als Anfänger bei der Überprüfung unserer (einfachen) Website werden wir am häufigsten mit 200, 304, 403 und 404 konfrontiert.

#### Behebung des 404-Fehlers

Was ist also schiefgelaufen?

![Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerk-Tool meldete einen "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` statt `unicorn_pic.png`. Korrigieren Sie den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' wird gelöscht](code-correct.png)

Speichern Sie, [laden Sie auf den Server hoch](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Schauen wir uns die {{Glossary("HTTP", "HTTP")}} Statuscodes noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass wir die Seite und das Bild erfolgreich neu geladen haben.
- **304** für `basic.css` bedeutet, dass sich diese Datei seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

Also haben wir den Fehler behoben und dabei ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eintippen, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler nur aus einem Tippfehler, aber manchmal haben Sie möglicherweise eine Ressource vergessen hochzuladen oder Ihre Netzwerkverbindung ist abgebrochen, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Schreibweise und Genauigkeit des Dateipfads und falls es immer noch ein Problem gibt, laden Sie Ihre Dateien erneut hoch. Das wird wahrscheinlich das Problem lösen.

#### JavaScript-Fehler

Jemand (möglicherweise Sie) hat ein Skript zur Seite hinzugefügt und dabei einen Fehler gemacht. Dies wird das Laden der Seite nicht verhindern, aber Sie werden bemerken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Web developer ➤ Web Console**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich klar), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in einer [anderen Serie](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Dinge, die überprüft werden sollten

Wir haben ein paar einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können und wie Sie sie beheben können. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie steht es um die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge sagen:

![Yslow-Diagnose](yslow-diagnostics.png)

Die Noten reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das ist nicht sehr wichtig, wenn wir nur ein Bild servieren, aber es wäre kritisch für eine Website mit hohem Bandbreitenbedarf, die viele Tausend Bilder bereitstellt.

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

Merken Sie sich einfach eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "interrupt" Signal an die Laufzeit und sagt ihr, sie soll aufhören. Wenn Sie die Laufzeit nicht stoppen, wird `ping` den Server unendlich lange anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten so funktionieren, wie Sie es erwarten
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist live und für jeden zu besuchen. Das ist ein großer Erfolg. Nun können Sie beginnen, sich intensiver mit verschiedenen Themen zu beschäftigen.

- Da Menschen aus der ganzen Welt auf Ihre Website kommen können, sollten Sie in Erwägung ziehen, diese [für alle zugänglich zu machen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website etwas zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
