---
title: Was ist der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel beschreiben wir verschiedene webbezogene Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neulingen im Web oft verwechselt oder falsch verwendet. Lassen Sie uns lernen, was sie jeweils bedeuten!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen
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

Wie in jedem Wissensbereich bringt auch das Internet eine Menge Fachjargon mit sich. Keine Sorge, wir werden Sie nicht mit allem überhäufen (wir haben ein [Glossar](/de/docs/Glossary), wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke immer wieder hören werden, während Sie weiterlesen. Es ist einfach, diese Begriffe zu verwechseln, da sie sich auf verwandte, aber unterschiedliche Funktionen beziehen. Sie werden diese Begriffe manchmal in Nachrichtenberichten und anderswo falsch verwendet sehen, daher ist es verständlich, dass sie verwechselt werden.

Wir werden diese Begriffe und Technologien in weiteren Erkundungen detaillierter behandeln, aber diese schnellen Definitionen werden ein guter Start für Sie sein:

- Webseite
  - : Ein Dokument, das in einem Webbrowser wie Firefox, Google Chrome, Opera, Microsoft Edge oder Apple Safari angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet.
- Website
  - : Eine Sammlung von Webseiten, die zusammen gruppiert sind und normalerweise auf verschiedene Weise miteinander verbunden sind. Oft als "Website" oder "Site" bezeichnet.
- Webserver
  - : Ein Computer, der eine Website im Internet hostet.
- Suchmaschine
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (z.B. können Sie Suchmaschinenabfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (z.B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir ein einfaches Beispiel — eine öffentliche Bibliothek. Dies ist das, was Sie normalerweise tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchregister und suchen Sie nach dem Titel des Buches, das Sie wollen.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zum bestimmten Abschnitt mit dem Buch, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir die Bibliothek mit einem Webserver:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, ähnlich wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht dieselben Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, z.B. wird der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw. (die Webseiten) haben. Webseiten können an einem eindeutigen Ort (URL) gefunden werden.
- Das Suchregister ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Platz in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer spezifiziert ist.

## Aktives Lernen

_Es gibt derzeit kein aktives Lernen. [Bitte erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefere Einsicht

Lassen Sie uns tiefer in die Zusammenhänge zwischen diesen vier Begriffen schauen und warum sie manchmal miteinander verwechselt werden.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem {{Glossary("browser")}} angezeigt werden kann. Solche Dokumente sind in der Sprache {{Glossary("HTML")}} geschrieben (die wir in [anderen Artikeln](/de/docs/Web/HTML) näher betrachten). Eine Webseite kann eine Vielzahl von unterschiedlichen Ressourcentypen einbetten, wie:

- _Stilinformationen_ — Regelung des Erscheinungsbildes einer Seite
- _Skripten_ — die der Seite Interaktivität hinzufügen
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente anzeigen, wie {{Glossary("PDF")}}-Dateien oder Bilder, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente. Andernfalls verwenden wir nur den Begriff **Dokument**.

Alle im Web verfügbaren Webseiten sind über eine eindeutige Adresse erreichbar. Um auf eine Seite zuzugreifen, geben Sie einfach deren Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitadresse in der Adressleiste des Browsers](web-page.jpg)

### Website

Eine _Website_ ist eine Sammlung von verlinkten Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen Domainnamen teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meist in Form von klickbaren Textteilen — die es dem Nutzer erlauben, von einer Seite der Website zu einer anderen zu wechseln.

Um auf eine Website zuzugreifen, geben Sie deren Domainnamen in die Adressleiste Ihres Browsers ein, und der Browser zeigt die Hauptwebseite der Website an, oder die _Homepage_ (umgangssprachlich als "die Startseite" bezeichnet):

![Beispiel eines Website-Domainnamens in der Adressleiste des Browsers](web-site.jpg)

Bitte beachten Sie, dass es auch möglich ist, eine _einseitige Website_ zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und deren unterstützenden Dateien auf diesem Computer verfügbar sind. Der _Webserver_ wird auf Anfrage des Nutzers jede _Webseite_ von der von ihm gehosteten _Website_ an den Browser des Nutzers senden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise jemanden sagen hören: "Meine Website reagiert nicht," bedeutet dies eigentlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, der Begriff _Webserver_ wird niemals verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen würden: "Mein Webserver reagiert nicht," bedeutet dies, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Nutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generell, andere sind auf bestimmte Themen spezialisiert. Verwenden Sie diejenige, die Sie bevorzugen.

Viele Webanfänger verwechseln Suchmaschinen und Browser. Machen wir es klar: Ein **_Browser_** ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine **_Suchmaschine_** ist eine Website, die den Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil, wenn jemand zum ersten Mal einen Browser öffnet, der Browser die Startseite einer Suchmaschine anzeigt. Dies ist sinnvoll, da offensichtlich das Erste, was Sie mit einem Browser tun möchten, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Infrastruktur (z. B. den Browser) mit dem Service (z. B. die Suchmaschine). Diese Unterscheidung wird Ihnen sehr helfen, aber sogar einige Fachleute sprechen locker darüber, also seien Sie deshalb nicht besorgt.

Hier ist ein Beispiel, in dem Firefox ein Google-Suchfeld als Standard-Startseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

## Nächste Schritte

- Vertiefen Sie sich: [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- Sehen Sie, wie Webseiten zu einer Website verlinkt sind: [Verstehen von Links im Web](/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks)
