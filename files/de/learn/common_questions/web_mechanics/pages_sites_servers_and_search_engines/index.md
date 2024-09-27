---
title: Was ist der Unterschied zwischen web page, website, web server und search engine?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel beschreiben wir verschiedene webbezogene Konzepte: web pages, websites, web servers und search engines. Diese Begriffe werden oft von Neueinsteigern ins Web verwechselt oder falsch verwendet. Lassen Sie uns lernen, was sie jeweils bedeuten!

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
        In der Lage sein, die Unterschiede zwischen einer web page, einer website, einem web server und einer search engine zu beschreiben.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wie in jedem Wissensgebiet bringt auch das Web eine Menge Fachjargon mit sich. Keine Sorge, wir werden Sie nicht mit allem überfordern (wir haben ein [Glossar](/de/docs/Glossary), wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie zu Beginn verstehen sollten, da Sie diese Ausdrücke ständig hören werden, während Sie weiterlesen. Es ist einfach, diese Begriffe zu verwechseln, da sie sich auf verwandte, aber unterschiedliche Funktionen beziehen. Sie werden diese Begriffe manchmal in Nachrichtenberichten und anderswo falsch verwendet sehen, daher ist es verständlich, wenn man sie durcheinander bringt.

Wir werden diese Begriffe und Technologien im weiteren Verlauf ausführlicher behandeln, aber diese kurzen Definitionen sind ein guter Anfang für Sie:

- web page
  - : Ein Dokument, das in einem Webbrowser wie Firefox, Google Chrome, Opera, Microsoft Edge oder Apple Safari angezeigt werden kann. Diese werden oft einfach "pages" genannt.
- website
  - : Eine Sammlung von web pages, die zusammengefasst und normalerweise in verschiedenen Weisen miteinander verbunden sind. Oft auch "website" oder "site" genannt.
- web server
  - : Ein Computer, der eine Webseite im Internet hostet.
- search engine
  - : Ein Webdienst, der Ihnen hilft, andere web pages zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Search engines sind normalerweise über einen Webbrowser zugänglich (z.B. können Sie Suchmaschinenabfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (z.B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir ein einfaches Beispiel - eine öffentliche Bibliothek. Dies würden Sie normalerweise tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des gewünschten Buches.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem speziellen Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und nehmen Sie das Buch.

Vergleichen wir die Bibliothek mit einem web server:

- Die Bibliothek ist wie ein web server. Sie hat mehrere Abteilungen, was einem Webserver ähnelt, der mehrere Webseiten hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie websites. Jede Abteilung ist wie eine einzigartige website (zwei Abteilungen enthalten nicht die gleichen Bücher).
- Die Bücher in jeder Abteilung sind wie web pages. Eine Website kann mehrere web pages haben, z.B. wird die Wissenschaftsabteilung (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben (die Webseiten). Webseiten können jeweils an einem einzigartigen Ort (URL) gefunden werden.
- Der Suchindex ist wie die search engine. Jedes Buch hat seinen eigenen einzigartigen Ort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben ist.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte, erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefter Einblick

Lassen Sie uns tiefer in die Beziehung zwischen diesen vier Begriffen eintauchen und warum sie manchmal miteinander verwechselt werden.

### Web page

Eine **web page** ist ein einfaches Dokument, das von einem [Browser](/de/docs/Glossary/browser) angezeigt werden kann. Solche Dokumente sind in der Sprache [HTML](/de/docs/Glossary/HTML) geschrieben (die wir in [anderen Artikeln](/de/docs/Web/HTML) genauer betrachten). Eine web page kann verschiedene Arten von Ressourcen einbetten, wie:

- _Stilinformationen_ — Kontrolle über das Aussehen und Verhalten einer Seite
- _Skripte_ — die Interaktivität zur Seite hinzufügen
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie [PDF](/de/docs/Glossary/PDF)-Dateien oder Bilder anzeigen, aber der Begriff **web page** bezieht sich speziell auf HTML-Dokumente. Ansonsten verwenden wir nur den Begriff **Dokument**.

Alle im Web verfügbaren web pages sind über eine eindeutige Adresse erreichbar. Um auf eine Seite zuzugreifen, geben Sie einfach deren Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webpage-Adresse in der Adressleiste des Browsers](web-page.jpg)

### Website

Eine _website_ ist eine Sammlung von verlinkten web pages (plus ihrer zugehörigen Ressourcen), die einen einzigartigen Domainnamen teilen. Jede web page einer bestimmten Website bietet explizite Links—meist in Form von klickbaren Textabschnitten—, die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Um auf eine Website zuzugreifen, geben Sie deren Domainnamen in die Adressleiste Ihres Browsers ein, und der Browser zeigt die Hauptwebseite der Website oder _Homepage_ an (im Allgemeinen als "das Zuhause" bezeichnet):

![Beispiel eines Website-Domainnamens in der Adressleiste des Browsers](web-site.jpg)

Beachten Sie, dass es auch möglich ist, eine _Einzelseiten-Website_ zu haben: eine Site, die aus einer einzigen web page besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Web server

Ein _web server_ ist ein Computer, der eine oder mehrere _websites_ hostet. "Hosting" bedeutet, dass alle _web pages_ und ihre unterstützenden Dateien auf diesem Computer verfügbar sind. Der _web server_ wird jede _web page_ der _website_, die er hostet, auf Anfrage des Benutzers an dessen Browser senden.

Verwechseln Sie nicht _websites_ und _web servers_. Wenn Sie zum Beispiel hören, dass jemand sagt: "Meine Website reagiert nicht", bedeutet das eigentlich, dass der _web server_ nicht reagiert und daher die _website_ nicht verfügbar ist. Wichtiger noch, da ein Webserver mehrere Websites hosten kann, wird der Begriff _web server_ niemals verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen: "Mein web server reagiert nicht", bedeutet dies, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Search engine

Search engines sind eine häufige Quelle der Verwirrung im Web. Eine search engine ist eine spezielle Art von Website, die Benutzern hilft, web pages von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generisch, einige sind auf bestimmte Themen spezialisiert. Verwenden Sie, was Sie bevorzugen.

Viele Webanfänger verwechseln search engines und Browser. Lassen Sie es uns klären: Ein **_Browser_** ist ein Softwareprogramm, das web pages abruft und anzeigt; eine **_search engine_** ist eine Website, die Menschen hilft, web pages von anderen Websites zu finden. Die Verwirrung entsteht, weil beim ersten Start eines Browsers die Startseite einer Suchmaschine angezeigt wird. Das macht Sinn, denn offensichtlich ist das Erste, was Sie mit einem Browser tun möchten, eine Webseite zum Anzeigen zu finden. Verwechseln Sie nicht die Infrastruktur (z.B. den Browser) mit dem Service (z.B. die Suchmaschine). Die Unterscheidung wird Ihnen sehr helfen, selbst wenn einige Fachleute locker sprechen, also fühlen Sie sich deshalb nicht verunsichert.

Hier ist ein Beispiel von Firefox, das ein Google-Suchfeld als seine Standard-Startseite anzeigt:

![Beispiel für Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

## Nächste Schritte

- Tiefer eintauchen: [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- Sehen Sie, wie Webpages zu einer Website verknüpft sind: [Verstehen von Links im Web](/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks)
