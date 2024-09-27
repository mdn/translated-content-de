---
title: Wie stellen Sie sicher, dass Ihre Website ordnungsgemäß funktioniert?
slug: Learn/Common_questions/Tools_and_setup/Checking_that_your_web_site_is_working_properly
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel gehen wir verschiedene Schritte zur Fehlerbehebung einer Website durch und einige grundlegende Maßnahmen, um diese Probleme zu lösen.

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
        Sie lernen, wie Sie einige grundlegende Probleme, die auf Ihrer Website auftreten können, diagnostizieren und lösen.
      </td>
    </tr>
  </tbody>
</table>

Haben Sie Ihre Website online veröffentlicht? Sehr gut! Aber sind Sie sicher, dass sie ordnungsgemäß funktioniert?

Ein entfernter Webserver verhält sich oft anders als ein lokaler, daher ist es eine gute Idee, Ihre Website zu testen, sobald sie online ist. Sie könnten überrascht sein, wie viele Probleme auftreten: Bilder werden nicht angezeigt, Seiten laden nicht oder nur langsam und so weiter. Meistens ist das kein großes Problem, sondern nur ein einfacher Fehler oder ein Problem mit Ihrer Webhosting-Konfiguration.

Sehen wir uns an, wie wir diese Probleme diagnostizieren und lösen können.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte, überlegen Sie, ob Sie einen Beitrag leisten möchten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefen

### Testen in Ihrem Browser

Wenn Sie wissen möchten, ob Ihre Website korrekt funktioniert, sollten Sie zuerst Ihren Browser starten und die Seite besuchen, die Sie testen möchten.

#### Oh-oh, wo ist das Bild?

Werfen wir einen Blick auf unsere persönliche Website, `http://demozilla.examplehostingprovider.net/`. Das erwartete Bild wird nicht angezeigt!

![Oops, das 'Einhorn'-Bild fehlt](image-missing.png)

Öffnen Sie das Netzwerkwerkzeug von Firefox (**Tools ➤ Web Developer ➤ Network**) und laden Sie die Seite neu:

![Das Bild hat einen 404 Fehler](error404.png)

Da ist das Problem, das "404" unten. "404" bedeutet "Ressource nicht gefunden", und deshalb haben wir das Bild nicht gesehen.

#### HTTP-Status

Server reagieren mit einer Statusmeldung, wenn sie eine Anfrage erhalten. Hier sind die häufigsten Statusmeldungen:

- **200: OK**
  - : Die angeforderte Ressource wurde übermittelt.
- **301: Dauerhaft verschoben**
  - : Die Ressource wurde an einen neuen Ort verschoben. Dies werden Sie nicht oft in Ihrem Browser sehen, aber es ist gut, über "301" Bescheid zu wissen, da Suchmaschinen diese Information häufig verwenden, um ihre Indexe zu aktualisieren.
- **304: Nicht modifiziert**
  - : Die Datei hat sich seit der letzten Anfrage nicht geändert, sodass Ihr Browser die Version aus dem Cache anzeigen kann, was zu schnelleren Antwortzeiten und einer effizienteren Nutzung der Bandbreite führt.
- **403: Verboten**
  - : Sie dürfen die Ressource nicht anzeigen. In der Regel handelt es sich um einen Konfigurationsfehler (z. B. Ihr Hosting-Provider hat Ihnen nicht die Zugriffsrechte für ein Verzeichnis erteilt).
- **404: Nicht gefunden**
  - : Selbst erklärend. Wir werden im Folgenden erörtern, wie man dieses Problem löst.
- **500: Interner Serverfehler**
  - : Etwas ist auf dem Server schief gelaufen. Zum Beispiel funktioniert vielleicht die serverseitige Sprache ([PHP](/de/docs/Glossary/PHP), .Net, etc.) nicht mehr, oder der Webserver selbst hat ein Konfigurationsproblem. In der Regel ist es am besten, das Support-Team Ihres Hosting-Providers zu kontaktieren.
- **503: Dienst nicht verfügbar**
  - : In der Regel verursacht durch eine kurzfristige Systemüberlastung. Der Server hat ein Problem. Versuchen Sie es nach einer Weile erneut.

Als Anfänger, die unsere (einfache) Website überprüfen, werden wir am häufigsten mit 200, 304, 403 und 404 zu tun haben.

#### Behebung des 404

Was ist also schiefgelaufen?

![Le Liste der Bilder in unserem Projekt](demozilla-images-list.png)

Auf den ersten Blick scheint das Bild, das wir angefordert haben, am richtigen Ort zu sein, aber das Netzwerkwerkzeug meldete ein "404". Es stellt sich heraus, dass wir einen Schreibfehler in unserem HTML-Code gemacht haben: `unicorn_pics.png` anstatt `unicorn_pic.png`. Korrigieren Sie also den Tippfehler in Ihrem Code-Editor, indem Sie das `src`-Attribut des Bildes ändern:

![Das 's' löschen](code-correct.png)

Speichern Sie, [laden Sie auf den Server hoch](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server) und laden Sie die Seite in Ihrem Browser neu:

![Das Bild wird korrekt im Browser geladen](image-corrected.png)

Da haben Sie es! Sehen wir uns noch einmal die [HTTP](/de/docs/Glossary/HTTP)-Status an:

- **200** für `/` und für `unicorn_pic.png` bedeutet, dass es uns gelungen ist, die Seite und das Bild neu zu laden.
- **304** für `basic.css` bedeutet, dass diese Datei seit der letzten Anfrage nicht geändert wurde, sodass der Browser die Datei aus dem Cache verwenden kann, anstatt eine neue Kopie zu erhalten.

So haben wir den Fehler behoben und unterwegs einige HTTP-Status gelernt!

### Häufige Fehler

Die häufigsten Fehler, die wir finden, sind diese:

#### Tippfehler in der Adresse

Wir wollten `http://demozilla.examplehostingprovider.net/` tippen, haben aber zu schnell getippt und ein "l" vergessen:

![Adresse nicht erreichbar](cannot-find-server.png)

Die Adresse kann nicht gefunden werden. In der Tat.

#### 404 Fehler

Oft resultiert der Fehler nur aus einem Tippfehler, aber manchmal haben Sie entweder vergessen, eine Ressource hochzuladen, oder Sie haben Ihre Netzwerkverbindung verloren, während Sie Ihre Ressourcen hochgeladen haben. Überprüfen Sie zuerst die Schreibweise und Genauigkeit des Dateipfads, und wenn es immer noch ein Problem gibt, laden Sie Ihre Dateien erneut hoch. Das wird wahrscheinlich das Problem beheben.

#### JavaScript-Fehler

Jemand (möglicherweise Sie) hat ein Skript zur Seite hinzugefügt und einen Fehler gemacht. Dies verhindert nicht das Laden der Seite, aber Sie werden merken, dass etwas schiefgelaufen ist.

Öffnen Sie die Konsole (**Tools ➤ Web Developer ➤ Web Console**) und laden Sie die Seite neu:

![Ein JavaScript-Fehler wird in der Konsole angezeigt](js-error.png)

In diesem Beispiel erfahren wir (ziemlich deutlich), was der Fehler ist, und wir können ihn beheben (wir werden JavaScript in [einer anderen Serie](/de/docs/Learn/JavaScript) von Artikeln behandeln).

### Weitere Dinge, die überprüft werden sollten

Wir haben einige einfache Möglichkeiten aufgelistet, um zu überprüfen, ob Ihre Website ordnungsgemäß funktioniert, sowie die häufigsten Fehler, auf die Sie stoßen können und wie man sie behebt. Sie können auch testen, ob Ihre Seite diesen Kriterien entspricht:

#### Wie ist die Leistung?

Lädt die Seite schnell genug? Ressourcen wie [WebPageTest.org](https://www.webpagetest.org/) oder Browser-Add-ons wie [YSlow](https://github.com/marcelduran/yslow) können Ihnen einige interessante Dinge sagen:

![Yslow-Diagnosen](yslow-diagnostics.png)

Die Bewertungen reichen von A bis F. Unsere Seite ist nur klein und erfüllt die meisten Kriterien. Aber wir können bereits feststellen, dass es besser gewesen wäre, ein [CDN](/de/docs/Glossary/CDN) zu verwenden. Das spielt keine große Rolle, wenn wir nur ein Bild bereitstellen, aber es wäre entscheidend für eine Website mit hoher Bandbreite, die viele tausende von Bildern bereitstellt.

#### Ist der Server reaktionsfähig genug?

`ping` ist ein nützliches Shell-Werkzeug, das den von Ihnen angegebenen Domainnamen testet und Ihnen sagt, ob der Server reagiert oder nicht:

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

Behalten Sie einfach eine praktische Tastenkombination im Kopf: **Ctrl+C**. Ctrl+C sendet ein "Interrupt"-Signal an die Laufzeitumgebung und teilt ihr mit, dass sie anhalten soll. Wenn Sie die Laufzeitumgebung nicht stoppen, wird `ping` den Server unendlich oft anpingen.

### Eine einfache Checkliste

- Überprüfen Sie auf 404-Fehler
- Stellen Sie sicher, dass alle Webseiten sich so verhalten, wie Sie es erwarten
- Überprüfen Sie Ihre Website in mehreren Browsern, um sicherzustellen, dass sie konsistent dargestellt wird

## Nächste Schritte

Herzlichen Glückwunsch, Ihre Website ist online und kann von jedem besucht werden. Das ist ein großer Erfolg. Nun können Sie anfangen, sich tiefer mit verschiedenen Themen zu befassen.

- Da Menschen aus der ganzen Welt auf Ihre Website kommen können, sollten Sie in Betracht ziehen, sie [für alle zugänglich zu machen](/de/docs/Learn/Common_questions/Design_and_accessibility/What_is_accessibility).
- Ist das Design Ihrer Website ein bisschen zu grob? Es ist an der Zeit, [mehr über CSS zu lernen](/de/docs/Learn/CSS/First_steps/How_CSS_works).
