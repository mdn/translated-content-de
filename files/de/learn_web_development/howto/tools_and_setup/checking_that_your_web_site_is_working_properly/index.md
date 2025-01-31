---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung bei einer Website durch und erläutern einige grundlegende Maßnahmen, um diese Probleme zu lösen.

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
        Sie lernen, wie Sie einige grundlegende Probleme diagnostizieren und lösen können, auf die Sie bei Ihrer Website stoßen könnten.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie richtig funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftauchen: Bilder werden nicht angezeigt, Seiten laden nicht oder nur langsam usw. Meistens ist es kein großes Problem, sondern nur ein einfacher Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Sehen wir uns an, wie Sie diese Probleme diagnostizieren und lösen können.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte ziehen Sie es in Betracht, beizutragen](/de/docs/MDN/Community/Getting_started)._

## Vertiefen

### Testen in Ihrem Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu starten und zur Seite zu gehen, die Sie testen möchten.

#### Uh-oh, wo ist das Bild?

Schauen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Sie zeigt nicht das erwartete Bild an!

![Oops, das 'unicorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerktool von Firefox (**Werkzeuge ➤ Webentwickler ➤ Netzwerk**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, das "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Status

Server antworten mit einer Statusmeldung, wenn sie eine Anfrage erhalten. Hier sind die häufigsten Statusmeldungen:

- **200: OK**
  - : Die angeforderte Ressource wurde bereitgestellt.
- **301: Dauerhaft verschoben**
  - : Die Ressource wurde an einen neuen Speicherort verschoben. Sie werden dies nicht oft in Ihrem Browser sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Information häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus dem Cache anzeigen kann, was schnellere Antwortzeiten und eine effizientere Nutzung der Bandbreite ermöglicht.
- **403: Verboten**
  - : Sie haben keine Berechtigung, die Ressource anzuzeigen. In der Regel hat es mit einem Konfigurationsfehler zu tun (z. B. hat Ihr Hostinganbieter vergessen, Ihnen Zugriffsrechte auf ein Verzeichnis zu geben).
- **404: Nicht gefunden**
  - : Selbst erklärend. Wir werden später besprechen, wie man das löst.
- **500: Interner Serverfehler**
  - : Etwas ist auf dem Server schiefgelaufen. Vielleicht funktioniert die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net usw.) nicht mehr, oder der Webserver selbst hat ein Konfigurationsproblem. Normalerweise ist es am besten, sich an das Support-Team Ihres Hostinganbieters zu wenden.
- **503: Dienst nicht verfügbar**
  - : In der Regel infolge einer kurzfristigen Systemüberlastung. Der Server hat ein Problem. Versuchen Sie es in kurzer Zeit erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir meistens mit den Status 200, 304, 403 und 404 zu tun haben.

#### Die 404 beheben

Was ist also schiefgelaufen?

![Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerktool meldete einen "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` statt `unicorn_pic.png`. Korrigieren Sie den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' wird gelöscht](code-correct.png)

Speichern, [auf den Server hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) und die Seite in Ihrem Browser neu laden:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Schauen wir uns die {{Glossary("HTTP", "HTTP")}}-Status noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass es uns gelungen ist, die Seite und das Bild neu zu laden.
- **304** für `basic.css` bedeutet, dass diese Datei seit der letzten Anfrage nicht geändert wurde, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

So haben wir den Fehler behoben und auf dem Weg ein paar HTTP-Status gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber beim schnellen Tippen ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler einfach aus einem Tippfehler, aber manchmal haben Sie möglicherweise eine Ressource nicht hochgeladen oder Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Rechtschreibung und Genauigkeit des Dateipfads, und wenn das Problem weiterhin besteht, laden Sie Ihre Dateien erneut hoch. Das wird das Problem wahrscheinlich beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat ein Skript zur Seite hinzugefügt und dabei einen Fehler gemacht. Dies verhindert nicht das Laden der Seite, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Werkzeuge ➤ Webentwickler ➤ Webkonsole**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich deutlich), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in [einer anderen Reihe](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Dinge, die überprüft werden sollten

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können, und wie Sie sie beheben. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge sagen:

![Yslow-Diagnosen](yslow-diagnostics.png)

Die Noten reichen von A bis F. Unsere Seite ist klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das ist nicht sehr relevant, wenn wir nur ein Bild bereitstellen, aber es wäre entscheidend für eine Website mit hohem Bandbreitenbedarf, die viele Tausende von Bildern bereitstellt.

#### Reagiert der Server ausreichend?

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

Merken Sie sich einfach eine nützliche Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeit und signalisiert ihr, dass sie stoppen soll. Wenn Sie die Laufzeit nicht stoppen, wird `ping` den Server unbegrenzt pingen.

### Eine einfache Checkliste

- Überprüfen Sie 404-Fehler
- Stellen Sie sicher, dass alle Webseiten wie erwartet funktionieren
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist online und für jeden Besucher zugänglich. Das ist ein großer Erfolg. Jetzt können Sie anfangen, tiefer in verschiedene Themen einzutauchen.

- Da Menschen aus der ganzen Welt Ihre Website besuchen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility) zu machen.
- Ist das Design Ihrer Website etwas zu schlicht? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
