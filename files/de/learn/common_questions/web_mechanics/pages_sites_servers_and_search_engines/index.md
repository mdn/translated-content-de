---
title: Was ist der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel beschreiben wir verschiedene webbezogene Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neueinsteigern ins Web verwechselt oder falsch verwendet. Lassen Sie uns lernen, was sie jeweils bedeuten!

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

Wie in jedem Wissensbereich gibt es im Web viele Fachbegriffe. Keine Sorge, wir werden Sie nicht mit allen davon überhäufen (wir haben ein [Glossar](/de/docs/Glossary), falls Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie zu Beginn verstehen müssen, da Sie diese Ausdrücke häufig hören werden, wenn Sie weiterlesen. Es ist leicht, diese Begriffe zu verwechseln, da sie sich auf verwandte, aber unterschiedliche Funktionen beziehen. Sie werden diese Begriffe manchmal in Nachrichtenberichten und anderswo falsch verwendet sehen, also ist es verständlich, sie zu verwechseln.

Wir werden diese Begriffe und Technologien in weiteren Details behandeln, während wir weiterforschen, aber diese kurzen Definitionen sind ein guter Start für Sie:

- Webseite
  - : Ein Dokument, das in einem Webbrowser wie Firefox, Google Chrome, Opera, Microsoft Edge oder Apple Safari angezeigt werden kann. Diese werden auch oft einfach als "Seiten" bezeichnet.
- Website
  - : Eine Sammlung von Webseiten, die zusammengefasst und in der Regel auf verschiedene Weise miteinander verbunden sind. Oft als "Website" oder "Site" bezeichnet.
- Webserver
  - : Ein Computer, der eine Website im Internet hostet.
- Suchmaschine
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (z.B. können Sie Suchanfragen direkt in der Adressleiste von Firefox, Chrome, etc. durchführen) oder über eine Webseite (z.B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir einen Vergleich - eine öffentliche Bibliothek. Dies ist das, was Sie normalerweise tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie wollen.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Bereich, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir die Bibliothek mit einem Webserver:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Bereiche, was einem Webserver ähnlich ist, der mehrere Websites hostet.
- Die verschiedenen Bereiche (Wissenschaft, Mathematik, Geschichte, usw.) in der Bibliothek sind wie Websites. Jeder Bereich ist wie eine einzigartige Website (zwei Bereiche enthalten nicht dieselben Bücher).
- Die Bücher in jedem Bereich sind wie Webseiten. Eine Website kann mehrere Webseiten haben, z.B. der Wissenschaftsbereich (die Website) wird Bücher über Wärme, Klang, Thermodynamik, Statik usw. haben (die Webseiten). Webseiten können jeweils an einem eindeutigen Ort (URL) gefunden werden.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Ort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte, erwägen Sie ein Mitwirken](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefere Einblicke

Lassen Sie uns tiefer in die Frage eintauchen, wie diese vier Begriffe zusammenhängen und warum sie manchmal miteinander verwechselt werden.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem {{Glossary("browser", "Browser")}} anzeigbar ist. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir in [anderen Artikeln](/de/docs/Web/HTML) näher betrachten). Eine Webseite kann eine Vielzahl von verschiedenen Ressourcentypen einbetten, wie:

- _Stilinformationen_ — die das Aussehen einer Seite steuern
- _Skripte_ — die der Seite Interaktivität hinzufügen
- _Medien_ — Bilder, Geräusche und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien oder Bilder anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente. Andernfalls verwenden wir nur den Begriff **Dokument**.

Alle im Web verfügbaren Webseiten sind über eine eindeutige Adresse erreichbar. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

### Website

Eine _Website_ ist eine Sammlung von verlinkten Webseiten (plus ihrer zugehörigen Ressourcen), die einen eindeutigen Domainnamen teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meist in Form von anklickbaren Textabschnitten — die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Um auf eine Website zuzugreifen, geben Sie ihren Domainnamen in die Adressleiste Ihres Browsers ein, und der Browser zeigt die Hauptwebseite der Website oder die _Homepage_ (umgangssprachlich als "home" bezeichnet) an:

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

Beachten Sie, dass es auch möglich ist, eine _Ein-Seiten-Website_ zu haben: eine Site, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosting“ bedeutet, dass alle _Webseiten_ und ihre unterstützenden Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet jede _Webseite_ von der von ihm gehosteten _Website_ auf Anfrage eines Benutzers an den Browser eines Benutzers.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise jemanden sagen hören: „Meine Website reagiert nicht“, bedeutet das eigentlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass, da ein Webserver mehrere Websites hosten kann, der Begriff _Webserver_ niemals verwendet wird, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen würden: „Mein Webserver reagiert nicht“, bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert. Verwenden Sie, welche Sie bevorzugen.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Machen wir es klar: Ein **_Browser_** ist eine Software, die Webseiten abruft und anzeigt; eine **_Suchmaschine_** ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil beim ersten Starten eines Browsers die Startseite einer Suchmaschine angezeigt wird. Das macht Sinn, denn offensichtlich ist das erste, was Sie mit einem Browser tun wollen, eine Webseite zu finden, die angezeigt werden kann. Verwechseln Sie nicht die Infrastruktur (z.B. den Browser) mit dem Dienst (z.B. die Suchmaschine). Die Unterscheidung wird Ihnen sehr helfen, aber selbst einige Profis sprechen locker darüber, also machen Sie sich keine Sorgen darüber.

Hier ist ein Beispiel von Firefox, das eine Google-Suchleiste als Standard-Startseite zeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

## Nächste Schritte

- Gehen Sie tiefer: [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- Sehen Sie, wie Webseiten zu einer Website verlinkt sind: [Verständnis von Links im Web](/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks)
