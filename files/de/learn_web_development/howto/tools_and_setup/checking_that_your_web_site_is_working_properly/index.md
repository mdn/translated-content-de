---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlersuche einer Website durch und zeigen einige grundlegende Maßnahmen, um diese Probleme zu lösen.

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
        Sie werden lernen, wie Sie einige grundlegende Probleme diagnostizieren und lösen können, auf die Sie mit Ihrer Website stoßen könnten.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft ganz anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder laden langsam usw. Meistens handelt es sich um kein großes Problem, nur einen einfachen Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Sehen wir uns an, wie Sie diese Probleme diagnostizieren und lösen können.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte ziehen Sie eine Mitwirkung in Erwägung](/de/docs/MDN/Community/Getting_started)._

## Graben Sie tiefer

### Test im Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, ist das Erste, was Sie tun sollten, Ihren Browser zu öffnen und zur Seite zu gehen, die Sie testen möchten.

#### Uh-oh, wo ist das Bild?

Sehen wir uns unsere persönliche Website an, `http://demozilla.examplehostingprovider.net/`. Sie zeigt nicht das Bild an, das wir erwartet haben!

![Oops, das 'unicorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Firefox-Netzwerktool (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404-Fehler](error404.png)

Da ist das Problem, dieser "404" am unteren Rand. "404" bedeutet "Ressource nicht gefunden", und aus diesem Grund haben wir das Bild nicht gesehen.

#### HTTP-Statuscodes

Server antworten mit einer Statusmeldung, wann immer sie eine Anfrage erhalten. Hier sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde ausgeliefert.
- **301: Moved permanently**
  - : Die Ressource wurde an einen neuen Ort verschoben. Sie werden dies in Ihrem Browser nicht oft sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Informationen häufig verwenden, um ihre Indizes zu aktualisieren.
- **304: Not modified**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus seinem Cache anzeigen kann, was zu schnelleren Antwortzeiten und effizienterer Bandbreitennutzung führt.
- **403: Forbidden**
  - : Sie dürfen die Ressource nicht anzeigen. Üblicherweise hat es mit einem Konfigurationsfehler zu tun (z. B. hat Ihr Hosting-Anbieter Ihnen versehentlich keine Zugriffsrechte auf ein Verzeichnis eingeräumt).
- **404: Not found**
  - : Selbst erklärend. Wir werden weiter unten besprechen, wie man dieses Problem löst.
- **500: Internal server error**
  - : Etwas ist auf dem Server schiefgelaufen. Vielleicht ist die serverseitige Programmiersprache ({{Glossary("PHP", "PHP")}}, .Net usw.) nicht mehr funktionstüchtig, oder der Webserver selbst hat ein Konfigurationsproblem. Es ist meistens am besten, sich an den Support Ihres Hosting-Anbieters zu wenden.
- **503: Service unavailable**
  - : Normalerweise das Ergebnis einer kurzfristigen Systemüberlastung. Der Server hat irgendeine Art von Problem. Versuchen Sie es in einer Weile erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 konfrontiert.

#### Behebung des 404-Fehlers

Was ist also schiefgelaufen?

![Die Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerktool meldete einen "404". Es stellt sich heraus, dass wir in unserem HTML-Code einen Tippfehler gemacht haben: `unicorn_pics.png` statt `unicorn_pic.png`. Korrigieren Sie den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das Entfernen des 's'](code-correct.png)

Speichern Sie, [schieben Sie die Datei auf den Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server), und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird im Browser korrekt geladen](image-corrected.png)

Da haben Sie es! Schauen wir uns die {{Glossary("HTTP", "HTTP")}}-Statuscodes noch einmal an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass wir die Seite und das Bild erfolgreich erneut geladen haben.
- **304** für `basic.css` bedeutet, dass sich diese Datei seit der letzten Anfrage nicht geändert hat, sodass der Browser die Datei in seinem Cache verwenden kann, anstatt eine frische Kopie zu erhalten.

Wir haben den Fehler behoben und dabei ein paar HTTP-Statuscodes gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` eingeben, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse unerreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404-Fehler

Oft resultiert der Fehler einfach aus einem Tippfehler, aber manchmal haben Sie vielleicht entweder vergessen, eine Ressource hochzuladen oder Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zunächst das korrekte Buchstabieren und die Genauigkeit des Dateipfads, und wenn es immer noch ein Problem gibt, laden Sie Ihre Dateien erneut hoch. Das wird wahrscheinlich das Problem beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dies wird das Laden der Seite nicht verhindern, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Webentwickler ➤ Web-Konsole**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich klar), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in einer [anderen Serie](/de/docs/Learn_web_development/Core/Scripting) von Artikeln behandeln).

### Weitere Dinge zu überprüfen

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, die Sie möglicherweise antreffen, und wie Sie diese beheben können. Sie können auch testen, ob Ihre Seite diese Kriterien erfüllt:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge verraten:

![Yslow-Diagnosen](yslow-diagnostics.png)

Die Noten reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können schon feststellen, dass es besser gewesen wäre, ein {{Glossary("CDN", "CDN")}} zu verwenden. Das spielt nicht so eine große Rolle, wenn wir nur ein Bild bereitstellen, aber es wäre entscheidend für eine Website mit hoher Bandbreite, die viele Tausende von Bildern bereitstellt.

#### Ist der Server reaktionsschnell genug?

`ping` ist ein nützliches Shell-Tool, das den von Ihnen bereitgestellten Domainnamen testet und Ihnen sagt, ob der Server antwortet oder nicht:

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

Merken Sie sich eine praktische Tastenkombination: **Strg+C**. Strg+C sendet ein "Interrupt"-Signal an die Laufzeitumgebung und sagt ihr, dass sie stoppen soll. Wenn Sie die Laufzeit nicht stoppen, wird `ping` den Server auf unbestimmte Zeit anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten wie erwartet funktionieren
- Testen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent gerendert wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist für jeden besuchbar. Das ist eine große Leistung. Jetzt können Sie anfangen, tiefer in verschiedene Themen einzutauchen.

- Da Menschen aus der ganzen Welt Ihre Website besuchen können, sollten Sie überlegen, sie [zugänglich für alle](/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility) zu machen.
- Ist das Design Ihrer Website etwas zu grob? Es ist Zeit, [mehr über CSS zu lernen](/de/docs/Learn_web_development/Core/Styling_basics).
