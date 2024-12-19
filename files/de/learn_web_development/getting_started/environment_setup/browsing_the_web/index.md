---
title: Browsen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

> [!NOTE]
> Der Inhalt in diesem Artikel ist derzeit unvollständig, entschuldigen Sie das bitte! Wir arbeiten hart daran, den MDN-Bereich Webentwicklung lernen zu verbessern, und wir werden bald die als unvollständig ("TODO") markierten Stellen vervollständigen.

An diesem Punkt des Moduls sollten Sie mindestens zwei Webbrowser auf Ihrem Computer installiert haben. Dieser Artikel behandelt die Verwendung von Browsern etwas detaillierter, indem er betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen der üblichen Elemente, mit denen Sie interagieren werden, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer dem Standardbrowser, der mit Ihrem Gerät geliefert wurde, keine weiteren Browser installiert haben, sollten Sie weitere installieren. Siehe [Moderne Webbrowser installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#installing_modern_web_browsers).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Verständnis davon, wie ein Webbrowser funktioniert</li>
          <li>Der Unterschied zwischen einem Webbrowser, einer Webseite und einer Suchmaschine.</li>
          <li>Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie das Web funktioniert: die Grundlagen

TODO

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

In diesem Abschnitt beschreiben wir verschiedene webbezogene Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden häufig von Neueinsteigern im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie jeweils bedeuten!

Wie mit jedem Wissensgebiet geht das Web mit viel Fachjargon einher. Keine Sorge, wir werden Sie nicht mit allem überfluten (wir haben ein [Glossar](/de/docs/Glossary), wenn Sie neugierig sind). Es gibt jedoch ein paar grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden, wenn Sie weiterlesen. Es ist leicht, diese Begriffe zu verwechseln, da sie sich auf verwandte, aber unterschiedliche Funktionen beziehen. Sie werden diese Begriffe manchmal in Nachrichtenberichten und anderswo falsch verwendet sehen, daher ist es verständlich, sie zu verwechseln.

Wir werden diese Begriffe und Technologien noch detaillierter behandeln, wenn wir weiter erkunden, aber diese schnellen Definitionen werden ein guter Start für Sie sein:

- Webseite
  - : Ein Dokument, das in einem Webbrowser wie Firefox, Google Chrome, Opera, Microsoft Edge oder Apple Safari angezeigt werden kann. Diese werden auch oft einfach "Seiten" genannt.
- Website
  - : Eine Sammlung von Webseiten, die zusammengefasst und in der Regel auf verschiedene Weise miteinander verbunden sind. Oft als "Website" oder "Seite" bezeichnet.
- Webserver
  - : Ein Computer, der eine Website im Internet hostet.
- Suchmaschine
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser (z.B. Sie können Suchanfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (z.B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)) aufgerufen.

Schauen wir uns eine Analogie an — eine öffentliche Bibliothek. Das ist, was Sie allgemein tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des gewünschten Buches.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem speziellen Bereich, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir die Bibliothek mit einem Webserver:

- Die Bibliothek ist wie ein Webserver. Sie hat verschiedene Bereiche, was ähnlich ist wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Bereiche (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Bereich ist wie eine einzigartige Website (zwei Bereiche enthalten nicht die gleichen Bücher).
- Die Bücher in jedem Bereich sind wie Webseiten. Eine Website kann mehrere Webseiten haben, z.B. wird der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben (die Webseiten). Webseiten können an einem einzigartigen Ort (URL) gefunden werden.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat einen eigenen einzigartigen Platz in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer spezifiziert ist.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem {{Glossary("browser", "Browser")}} angezeigt werden kann. Solche Dokumente werden in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir in [anderen Artikeln](/de/docs/Web/HTML) genauer betrachten). Eine Webseite kann eine Vielzahl verschiedener Ressourcen einbetten, wie zum Beispiel:

- _Stilinformationen_ — Steuerung des Aussehens und der Darstellung einer Seite
- _Skripte_ — die der Seite Interaktivität hinzufügen
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente anzeigen, wie {{Glossary("PDF", "PDF")}}-Dateien oder Bilder, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente. Ansonsten verwenden wir nur den Begriff **Dokument**.

Alle im Web verfügbaren Webseiten sind über eine eindeutige Adresse erreichbar. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für eine Webseiten-Adresse in der Adressleiste des Browsers](web-page.jpg)

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen eindeutigen Domainnamen teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meist in Form von anklickbaren Textstellen —, die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Um auf eine Website zuzugreifen, geben Sie ihren Domainnamen in die Adressleiste Ihres Browsers ein, und der Browser zeigt die Hauptwebseite der Website an, oder die _Homepage_ (umgangssprachlich als "das Zuhause" bezeichnet):

![Beispiel für einen Website-Domainnamen in der Adressleiste des Browsers](web-site.jpg)

Beachten Sie, dass es auch möglich ist, eine _Einzelseiten-Website_ zu haben: eine Website, die aus einer einzelnen Webseite besteht, die bei Bedarf dynamisch mit neuem Inhalt aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre unterstützenden Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet jede _Webseite_ von der _Website_, die er hostet, an den Browser eines Nutzers, gemäß der Benutzeranfrage.

Verwechseln Sie _Websites_ nicht mit _Webservern_. Wenn Sie zum Beispiel jemanden sagen hören: "Meine Website reagiert nicht", bedeutet das tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann; der Begriff _Webserver_ wird niemals verwendet, um eine Website zu bezeichnen, da dies große Verwirrung stiften könnte. In unserem vorherigen Beispiel, wenn wir sagen würden: "Mein Webserver reagiert nicht", bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle von Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generisch, einige sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie es uns klarstellen: Ein **_Browser_** ist ein Stück Software, das Webseiten abruft und anzeigt; eine **_Suchmaschine_** ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil der Browser beim ersten Start die Homepage einer Suchmaschine anzeigt. Das macht Sinn, denn offensichtlich ist das erste, was Sie mit einem Browser tun möchten, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Infrastruktur (z.B. den Browser) mit dem Dienst (z.B. die Suchmaschine). Diese Unterscheidung wird Ihnen sehr helfen, aber auch einige Profis sprechen locker, also fühlen Sie sich deswegen nicht unbehaglich.

Hier ist ein Beispiel für Firefox, das als Standard-Startseite ein Google-Suchfenster zeigt:

![Beispiel für Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

## Informationen suchen

TODO

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
