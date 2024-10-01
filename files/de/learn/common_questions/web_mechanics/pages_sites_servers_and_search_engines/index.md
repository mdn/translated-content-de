---
title: Was ist der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel beschreiben wir verschiedene webbezogene Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neulingen im Web verwechselt oder falsch verwendet. Lassen Sie uns lernen, was sie jeweils bedeuten!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, die Unterschiede zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine zu beschreiben.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wie in jedem Wissensgebiet gibt es auch im Web viel Fachjargon. Keine Sorge, wir werden Sie nicht mit allem überhäufen (wir haben ein [Glossar](/de/docs/Glossary), wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie am Anfang verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Diese Begriffe zu verwechseln ist einfach, da sie sich auf verwandte, aber unterschiedliche Funktionen beziehen. Sie werden diese Begriffe manchmal in Nachrichtensendungen und anderswo falsch verwendet sehen, daher ist das Durcheinanderbringen verständlich.

Wir werden diese Begriffe und Technologien eingehender behandeln, wenn wir uns weiter erkunden, aber diese kurzen Definitionen sind ein guter Anfang für Sie:

- Webseite
  - : Ein Dokument, das in einem Webbrowser wie Firefox, Google Chrome, Opera, Microsoft Edge oder Apple Safari angezeigt werden kann. Diese werden oft auch nur als "Seiten" bezeichnet.
- Website
  - : Eine Sammlung von Webseiten, die zusammengefasst und meist auf verschiedene Weise miteinander verbunden sind. Häufig als "Website" oder "Site" bezeichnet.
- Webserver
  - : Ein Computer, der eine Website im Internet hostet.
- Suchmaschine
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (z. B. können Sie Suchmaschinensuchen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (z. B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine einfache Analogie – eine öffentliche Bibliothek. Das ist das, was Sie im Allgemeinen beim Besuch einer Bibliothek tun würden:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Bereich, in dem sich das Buch befindet, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir die Bibliothek mit einem Webserver:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was einem Webserver ähnlich ist, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht dieselben Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, z.B. die Wissenschaftsabteilung (die Website) wird Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben (die Webseiten). Webseiten können jeweils an einem eindeutigen Ort (URL) gefunden werden.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Ort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefer eintauchen

Lassen Sie uns also tiefer in die Beziehung dieser vier Begriffe eintauchen und warum sie manchmal miteinander verwechselt werden.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem {{Glossary("browser", "Browser")}} angezeigt werden kann. Solche Dokumente sind in der Sprache {{Glossary("HTML", "HTML")}} geschrieben (die wir ausführlicher in [anderen Artikeln](/de/docs/Web/HTML) betrachten). Eine Webseite kann eine Vielzahl verschiedener Ressourcen einbetten wie:

- _Stilinformationen_ – Steuerung des Aussehens und der Haptik einer Seite
- _Skripte_ – die der Seite Interaktivität hinzufügen
- _Medien_ – Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien oder Bilder anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente. Ansonsten verwenden wir nur den Begriff **Dokument**.

Alle im Web verfügbaren Webseiten sind über eine eindeutige Adresse erreichbar. Um auf eine Seite zuzugreifen, geben Sie einfach deren Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webadresse in der Browser-Adressleiste](web-page.jpg)

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus deren zugehörigen Ressourcen), die einen einzigartigen Domainnamen teilen. Jede Webseite einer bestimmten Website bietet explizite Links—meist in Form von anklickbaren Textteilen—die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu navigieren.

Um auf eine Website zuzugreifen, geben Sie den Domainnamen in die Adressleiste Ihres Browsers ein, und der Browser zeigt die Hauptwebseite oder _Homepage_ der Website an (umgangssprachlich auch als "Home" bezeichnet):

![Beispiel eines Websitedomainnamens in der Browser-Adressleiste](web-site.jpg)

Beachten Sie, dass es auch möglich ist, eine _Einzelseiten-Website_ zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre unterstützenden Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet jede _Webseite_ von der _Website_, die er hostet, an den Browser eines Benutzers, auf Anforderung dieses Benutzers.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise jemanden sagen hören: "Meine Website reagiert nicht", bedeutet dies tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Wichtiger noch: Da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ niemals verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel würde die Aussage "Mein Webserver reagiert nicht" bedeuten, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, einige sind auf bestimmte Themen spezialisiert. Verwenden Sie, welches Sie bevorzugen.

Viele Anfänger im Web verwechseln Suchmaschinen mit Browsern. Lassen Sie uns das klarstellen: Ein **_Browser_** ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine **_Suchmaschine_** ist eine Website, die Menschen dabei hilft, Webseiten von anderen Websites zu finden. Darüber entsteht Verwirrung, da der Browser beim ersten Start die Startseite einer Suchmaschine anzeigt. Das macht Sinn, da das Erste, was man mit einem Browser tun möchte, offensichtlich ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Infrastruktur (z. B. den Browser) mit dem Dienst (z. B. die Suchmaschine). Diese Unterscheidung wird Ihnen sehr helfen, aber selbst einige Profis sprechen locker darüber, also fühlen Sie sich nicht unwohl deshalb.

Hier ist ein Beispiel, bei dem Firefox ein Google-Suchfeld als Standardstartseite anzeigt:

![Beispiel für Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

## Nächste Schritte

- Tiefer eintauchen: [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- Sehen Sie, wie Webseiten zu einer Website verknüpft sind: [Links im Web verstehen](/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks)
