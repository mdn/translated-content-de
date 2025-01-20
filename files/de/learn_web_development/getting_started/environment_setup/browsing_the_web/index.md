---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 42486674aa48d4816dc97bd57e53cdcbb1fd559f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. In diesem Artikel gehen wir tiefer auf die Verwendung von Browsern ein, betrachten, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den voreingestellten Browsern, die mit Ihren Geräten geliefert wurden, keine weiteren installiert haben, sollten Sie einige andere installieren. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet geht auch das Web mit viel Fachjargon und technischer Terminologie einher. Keine Sorge: Wir werden Sie nicht mit allem von Anfang an überfordern (wenn Sie neugierig sind, können Sie im [Glossar](/de/docs/Glossary) nachsehen). Einige grundlegende Begriffe müssen Sie jedoch von Anfang an verstehen, da Sie diese Ausdrücke ständig hören werden. Wir stellen Ihnen im Folgenden einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse mit Ihrem Computerbetriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf einfachem Niveau funktioniert.</li>
          <li>Nach Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neueinsteigern im Web oft verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was jeder bedeutet! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Webbrowser angezeigt werden kann. Diese werden auch oft einfach „Seiten“ genannt. Solche Dokumente sind in der Sprache HTML geschrieben (die wir später noch genauer betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzelnen Ressource zusammengefasst sind, mit Links, die sie miteinander verbinden. Oft als „Site“ bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie z. B. Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser genutzt (zum Beispiel können Sie Suchanfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Schauen wir uns ein Beispiel an — eine öffentliche Bibliothek. Dies ist das, was Sie normalerweise tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem speziellen Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abschnitte, was ähnlich ist wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht dieselben Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel wird der Wissenschaftsabschnitt (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns nun die Zeit, jeden Begriff ein wenig detaillierter zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl verschiedener Arten von Ressourcen einbetten, wie zum Beispiel:

- _Stilinformations_ — Steuerung des Aussehens einer Seite.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie PDF-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem eindeutigen Ort gefunden werden (Webadresse, auch URL genannt). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Laden Sie jetzt eine Ihrer Lieblingswebsites in einem Browser.

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen _Domainnamen_ teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meistens in Form von anklickbaren Textbereichen –, die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu gelangen.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird zuerst die Hauptwebseite der Website oder die _Homepage_ angezeigt (im Allgemeinen als „Home“ bezeichnet):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Probieren Sie aus, einige Menüpunkte oder Links zu klicken, um sich unterschiedliche Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine _Single-Page-App_ zu haben: eine Website, die aus einer einzigen Webseite besteht, die dynamisch mit neuen Inhalten aktualisiert wird, wann immer dies nötig ist.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosten“ bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die Webdateien, die er hostet, an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise jemanden sagen hören: „Meine Website reagiert nicht“, bedeutet das tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, daher wird der Begriff _Webserver_ niemals zur Bezeichnung einer Website verwendet, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen: „Mein Webserver reagiert nicht“, bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, einige sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Um es klarzustellen: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil der Browser häufig beim ersten Start die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es dem Benutzer ermöglicht, einen Suchbegriff über diese Suchmaschine einzugeben. Außerdem ermöglichen die meisten Browser ihren Benutzern, durch die Eingabe von Suchbegriffen direkt in der Adressleiste des Browsers eine Suchmaschine zu verwenden.

Das ergibt alles Sinn, da das erste, was Menschen in der Regel mit einem Browser tun wollen, das Finden einer Webseite zum Anzeigen ist. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel für Firefox, das ein Google-Suchfenster als Standardstartseite anzeigt:

![Beispiel von Firefox Nightly, das eine angepasste Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch, indem Sie:
>
> - Auf die Homepage einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso ein unverzichtbares Werkzeug für unser tägliches Leben geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn sich das für Sie unrealistisch anhört, denken Sie nur daran, wie oft Sie jeden Tag eine Website oder eine Handy-App nutzen! Auch wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht die Wahrscheinlichkeit, dass die von Ihnen verwendete App wahrscheinlich im Hintergrund Webtechnologien verwendet, um Daten abzurufen und Ihnen anzuzeigen.

Wenn Sie auf das Web zugreifen, passiert zwischen Ihrer ersten Interaktion (zum Beispiel die Eingabe einer Webadresse (URL) in einen Browser und das Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser), eine Menge:

1. Der Webbrowser fordert die Ressource an (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video), die Sie vom Webserver, auf dem sie gespeichert ist, zugreifen möchten. Solche Anfragen (und die resultierenden Antworten) erfolgen mit einer Technologie namens HTTP (Hypertext Transfer Protocol), die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-Index-HTML-Datei der Startseite der Site angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser, sie zu analysieren, und wird wahrscheinlich Anweisungen zur weiteren Anforderung finden. Wie oben erwähnt, können diese Anfragen nach einzubettenden Dateien wie Bildern, Stilinformations, Skripten usw. erfolgen.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie wie erforderlich, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber das ist alles, was Sie an diesem Punkt wirklich wissen müssen. Sie finden eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, in unserem Modul über [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards), etwas später.

Versuchen Sie jetzt, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, und denken Sie dabei an die obigen Schritte.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen, von Syntax, an die Sie sich nicht erinnern, bis zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie allgemeine Informationen zu einer bestimmten Funktion der Webtechnologie suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Versuchen Sie beispielsweise, „box model“, „fetch()“ oder „video element“ in das Suchfeld einzugeben und zu sehen, was herauskommt. Wenn Sie nicht die benötigten Informationen finden, versuchen Sie, Ihre Suche zu erweitern – versuchen Sie den Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie zum Beispiel „wie man die Fibonacci-Folge mit JavaScript ausdruckt“ oder „wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist“, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die sich darauf spezialisiert hat, Programmierprobleme zu beantworten. Versuchen Sie erneut, eine allgemeine Suchmaschine zu nutzen, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige der oben vorgeschlagenen Suchen:
>
> - Beginnen Sie mit der Suche nach den exakten Begriffen, die wir oben erwähnt haben.
> - Suchen Sie anschließend nach einigen Themen, über die Sie gerne mehr erfahren möchten. Versuchen Sie es mit spezifischeren oder weniger spezifischen Suchen und verschiedenen verwandten Begriffen, um herauszufinden, was am besten funktioniert.
> - Siehe unsere [Suchtipps](#suchtipps) für weitere Dinge, die Sie ausprobieren können.

### Die Nutzung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Methode zur Informationsbeschaffung. Sie bieten im Grunde eine supermächtige Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse in eine einzige, leicht verdauliche Antwort zusammenfassen. Häufige Optionen sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt im Chat-Format oder über KI-gesteuerte In-App-Hilfs- oder Automatisierungssysteme aufgerufen werden.

Beim Erlernen des Codierens können KI-Chat-Eingaben auf verschiedene Weise nützlich sein:

- Durchführung konventioneller Suchen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Eingabe einfügen, begleitet von einer Frage wie „Wo ist der Fehler in diesem Code?“
- Eine optimierte Version eines spezifischen Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber wissen möchten, wie er effizienter oder zuverlässiger gemacht werden kann, um weitere Anwendungsfälle zu lösen.
- Ratschläge geben, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock ist, sondern stattdessen Ratschläge benötigen, welche Strategie Sie verwenden können, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann KI so viel leisten, dass Sie sich vielleicht fragen, warum Sie überhaupt noch das Codieren lernen müssen.

Aber halt! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene zu tun versuchen, was der Code tut und wo jedes einzelne Stück Code verwendet werden muss.** Wenn Sie das nicht tun, sind Sie kaum nützlich für das Lösen realer Probleme. Dies bedeutet, dass Sie trotzdem das Programmieren erlernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um Antworten schneller zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in eine KI-Eingabe eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, können jedoch oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben kein eigenes angeborenes Wissen — sie sind im Grunde fortgeschrittene Mustererkennungswerkzeuge. KI-Tools erstellen ihre Antworten aus anderen Quellen, die es gibt, und saugen dabei sowohl falsche als auch richtige Informationen auf. Sogar zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die inkorrekt ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten durch ältere und verbreitetere Dokumentationen verzerrt werden, sodass „wie man X in JS macht“ Ihnen veraltete Anleitungen geben könnte.

Als Ergebnis sollten Sie die Antworten, die sie Ihnen geben, sorgfältig überprüfen und nicht einfach blind alles glauben.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie eine Antwort suchen, egal ob Sie dazu KI oder eine herkömmliche Suchmaschine verwenden. Das wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die von Ihnen verwendete Sprache in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie einfach nur „wie man die Fibonacci-Folge ausdruckt“ eingetippt hätten, bekämen Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — nicht gerade hilfreich, wenn Sie JavaScript lernen.
- Wenn Sie eine nützliche Antwort finden, setzen Sie ein Lesezeichen oder machen Sie eine Kopie davon, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder KI-Eingabe einzugeben. Andere Menschen werden wahrscheinlich bereits denselben Fehler angegangen und ihre Lösungen irgendwo öffentlich aufgezeichnet haben.
- Wenn möglich, halten Sie sich an empfohlene Sites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, um bessere Ergebnisse zu erzielen, als einfach einen einfachen Suchbegriff einzugeben. Wenn Sie einen einfachen Suchbegriff wie „Ameise Fisch Käse“ eingeben, erhalten Sie Ergebnisse, die jede Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Die Eingabe von „ant fish cheese“ (mit den Anführungszeichen) liefert nur Ergebnisse, die genau diese Phrase enthalten.
  - „ant cheese“ -fish liefert Ergebnisse, die `ant` und/oder `cheese` enthalten, aber nicht `fish`.
  - `ant OR cheese` liefert nur Ergebnisse mit einem dieser Begriffe, aber nicht beiden. Bei unseren Tests schien dies effektiv nur in Google zu funktionieren.
  - `intitle:cheese` liefert nur Ergebnisse, bei denen „cheese“ im Haupttitel der Seite steht.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen anwenden können. Versuchen Sie zu finden, welche anderen nützlichen Ressourcen Sie finden können – einige nützliche Quellen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), und [Microsoft: Advanced search options](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
