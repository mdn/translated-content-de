---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel gehen wir auf verschiedene Schritte zur Fehlerbehebung auf einer Website ein und zeigen einige grundlegende Maßnahmen auf, um diese Probleme zu lösen.

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
        Sie lernen, wie man einige grundlegende Probleme diagnostiziert und löst, auf die Sie bei Ihrer Website stoßen könnten.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler Server, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder nur langsam, und so weiter. Meistens ist es kein großes Problem, sondern nur ein einfacher Fehler oder ein Problem mit der Konfiguration Ihres Web-Hostings.

Sehen wir uns an, wie wir diese Probleme diagnostizieren und lösen können.

## Aktives Lernen

_Es sind noch keine aktiven Lernressourcen verfügbar. [Bitte erwägen Sie, beizutragen](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefergehende Informationen

### Im Browser testen

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, öffnen Sie zuerst Ihren Browser und gehen Sie auf die Seite, die Sie testen möchten.

#### Ähm, wo ist das Bild?

Werfen wir einen Blick auf unsere persönliche Website, `http://demozilla.examplehostingprovider.net/`. Das Bild, das wir erwartet haben, wird nicht angezeigt!

![Oops, das 'unicorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerktool von Firefox (**Werkzeuge ➤ Webentwickler ➤ Netzwerk**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, dieses "404" am Ende. "404" bedeutet "Resource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Statuscodes

Server antworten mit einer Statusmeldung, wenn sie eine Anfrage erhalten. Hier sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Resource wurde geliefert.
- **301: Permanent verschoben**
  - : Die Resource wurde an einen neuen Ort verschoben. Dies werden Sie nicht oft in Ihrem Browser sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Information häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was zu schnelleren Antwortzeiten und einer effizienteren Nutzung der Bandbreite führt.
- **403: Verboten**
  - : Sie dürfen die Resource nicht anzeigen. In der Regel handelt es sich um einen Konfigurationsfehler (z.B. Ihr Hosting-Anbieter hat vergessen, Ihnen Zugriffsrechte auf ein Verzeichnis zu geben).
- **404: Nicht gefunden**
  - : Selbst erklärend. Wir werden unten besprechen, wie man dies löst.
- **500: Interner Serverfehler**
  - : Etwas ist auf dem Server schiefgelaufen. Beispielsweise könnte die Serverseitensprache ({{Glossary("PHP", "PHP")}}, .Net, etc.) aufgehört haben zu funktionieren, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, sich an das Support-Team Ihres Hosting-Anbieters zu wenden.
- **503: Dienst nicht verfügbar**
  - : Meistens das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat irgendein Problem. Versuchen Sie es in einer Weile erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 konfrontiert.

#### Den 404 beheben

Was ist also schiefgelaufen?

![Die Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, an der richtigen Stelle zu sein, aber das Netzwerktool meldete eine "404". Es stellt sich heraus, dass wir einen Tippfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` anstatt `unicorn_pic.png`. Also korrigieren Sie den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern Sie, [pushen Sie auf den Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server), und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da ist es! Lassen Sie uns die {{Glossary("HTTP", "HTTP")}}-Statuscodes noch einmal ansehen:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass wir es geschafft haben, die Seite und das Bild neu zu laden.
- **304** für `basic.css` bedeutet, dass sich diese Datei seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei aus seinem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

So haben wir den Fehler behoben und dabei ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler einfach aus einem Tippfehler, aber manchmal haben Sie vielleicht entweder vergessen, eine Resource hochzuladen, oder Sie haben Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Rechtschreibung und Genauigkeit des Datei-Pfads, und wenn es immer noch ein Problem gibt, laden Sie Ihre Dateien erneut hoch. Das wird wahrscheinlich das Problem beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie selbst) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dies wird nicht verhindern, dass die Seite lädt, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Werkzeuge ➤ Webentwickler ➤ Web-Konsole**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich deutlich), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in [einer anderen Serie](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Überprüfungen

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können und wie Sie sie beheben können. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge mitteilen:

![Yslow-Diagnose](yslow-diagnostics.png)

Die Noten reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das spielt keine große Rolle, wenn wir nur ein Bild bereitstellen, wäre jedoch kritisch für eine website mit hohem Bandbreitenbedarf, die viele Tausende von Bildern bereitstellt.

#### Ist der Server reaktionsschnell genug?

`ping` ist ein nützliches Shell-Tool, das den von Ihnen angegebenen Domain-Namen testet und Ihnen mitteilt, ob der Server antwortet oder nicht:

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

Beachten Sie einfach eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeitumgebung und teilt ihr mit, dass sie stoppen soll. Wenn Sie die Laufzeitumgebung nicht stoppen, wird `ping` den Server unbegrenzt anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404s
- Stellen Sie sicher, dass sich alle Webseiten wie erwartet verhalten
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist online und für jeden zugänglich. Das ist ein großer Erfolg. Jetzt können Sie tiefer in verschiedene Themen eintauchen.

- Da Menschen aus aller Welt auf Ihre Website kommen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website etwas zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
