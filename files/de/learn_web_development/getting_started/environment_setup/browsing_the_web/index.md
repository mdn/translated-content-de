---
title: Das Internet durchsuchen
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: b2ac8c61836a6b605977d256ab8dd4d7139594e3
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer darauf ein, wie man Browser verwendet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet gibt es im Internet viele Fachbegriffe und technische Terminologie. Keine Sorge: Wir werden Sie nicht sofort mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) überprüfen, wenn Sie neugierig sind). Einige grundlegende Begriffe müssen Sie jedoch von Anfang an verstehen, da Sie diese Ausdrücke ständig hören werden. Wir stellen unten einige wichtige Begriffe vor.

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
          <li>Der Unterschied zwischen einem Webbrowser, einer Webseite und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegender Ebene funktioniert.</li>
          <li>Wie man nach Informationen sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener internetbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Internetneulingen oft verwechselt oder falsch verwendet. Stellen wir sicher, dass Sie wissen, was sie jeweils bedeuten! Hier beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden auch oft einfach „Seiten“ genannt. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später noch genauer eingehen werden).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einem einzigen Ressourcenset zusammengefasst sind, mit Links, die sie miteinander verbinden. Oft als „Site“ bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie zum Beispiel Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchanfragen in der Adressleiste von Firefox, Chrome usw. direkt ausführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie – eine öffentliche Bibliothek. Dies würden Sie normalerweise tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie den Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie in den bestimmten Abschnitt mit dem Buch, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir nun eine öffentliche Bibliothek mit dem Internet:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was vergleichbar ist mit einem Webserver, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht dieselben Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel enthält der Wissenschaftsabschnitt (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Ort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns nun die Zeit, jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielfalt verschiedener Ressourcentypen einbetten, wie zum Beispiel:

- _Stilinformationen_ — die das Aussehen und Verhalten der Seite steuern.
- _Skripte_ — die Interaktivität zur Seite hinzufügen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem eindeutigen Ort gefunden werden (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für eine Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie jetzt, eine Ihrer Lieblingswebsites in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links - meistens in Form von anklickbaren Textteilen -, die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu gelangen.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird meistens zunächst die Hauptwebseite der Website angezeigt, oder die _Homepage_ (umgangssprachlich "Home" genannt):

![Beispiel für einen Website-Domainnamen in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüelemente oder Links anzuklicken, um sich verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosting“ bedeutet, dass alle _Webseiten_ und deren zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die Dateien der gehosteten Webseite an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn also jemand sagt: „Meine Website reagiert nicht“, bedeutet das eigentlich, dass der _Webserver_ nicht reagiert und deshalb die _Website_ nicht verfügbar ist. Da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ niemals zur Bezeichnung einer Website verwendet, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagten: „Mein Webserver reagiert nicht“, bedeutet es, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Internet. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/), und viele mehr. Einige sind generisch, einige sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Internet verwechseln Suchmaschinen und Browser. Machen wir es klar: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil beim ersten Starten eines Browsers dieser oft die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es ermöglicht, mit dieser Suchmaschine nach einem Begriff zu suchen. Die meisten Browser erlauben es ihren Benutzern auch, eine Suchmaschine zu benutzen, indem sie Suchbegriffe direkt in die Browser-Adressleiste eingeben.

Das alles macht Sinn, weil das erste, was die meisten Menschen mit einem Browser tun möchten, darin besteht, eine Webseite zu finden, die angezeigt werden kann. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel für Firefox, das ein Google-Suchfeld als Standard-Startseite anzeigt:

![Beispiel für Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch, indem Sie:
>
> - Zu einer Homepage einer Suchmaschine navigieren und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Browser-Adressleiste eingeben.

## Wie das Internet funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Internet zu einem ebenso unverzichtbaren Werkzeug in unserem täglichen Leben geworden wie Essbesteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie nur einmal daran, wie oft Sie an einem Tag eine Website oder eine mobile App nutzen! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht die Chance, dass die App, die Sie nutzen, wahrscheinlich Webtechnologien im Hintergrund verwendet, um Ihnen Daten zu präsentieren.

Wenn Sie auf das Internet zugreifen, passiert einiges zwischen ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und das Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Handlung (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource an (zum Beispiel eine Webseite, einige Daten, ein Bild oder Video), die Sie vom Webserver, auf dem sie gespeichert ist, abrufen möchten. Solche Anfragen (und die resultierenden Antworten) werden mithilfe einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) durchgeführt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Homepage der Site angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser, sie zu analysieren und findet wahrscheinlich Anweisungen zur Durchführung weiterer Anfragen. Wie oben besprochen, könnten dies Dateien zum Einbetten von Bildern, Stilinformationen, Skripten usw. sein.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Internet funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem Modul [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards) etwas später.

Versuchen Sie jetzt, einen Webbrowser zu öffnen und einige Ihrer Lieblingsseiten zu laden, während Sie an die oben genannten Schritte denken.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, an die Sie sich nicht erinnern können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie Sie effektiv im Internet suchen.

Wenn Sie nach allgemeinen Informationen zu einem bestimmten Webtechnologiemerkmal suchen, sollten Sie den Namen des Merkmals in das MDN-Suchfeld eingeben. Versuchen Sie zum Beispiel, `Boxmodell`, `fetch()` oder `Videoelement` in das Suchfeld einzugeben und sehen Sie, was herauskommt. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie zum Beispiel `wie man die Fibonacci-Folge mit JavaScript druckt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie auch hier, eine allgemeine Suchmaschine zu verwenden, wenn Ihnen eine bestimmte Website keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchanfragen, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben eingeschlossen haben.
> - Gehen Sie anschließend dazu über, nach einigen Themen zu suchen, über die Sie mehr erfahren möchten. Versuchen Sie, mehr oder weniger spezifische Suchanfragen und verschiedene verwandte Begriffe zu verwenden, um herauszufinden, was am besten funktioniert.
> - Sehen Sie sich unsere [Suchtipps](#suchtipps) an, um weitere Dinge auszuprobieren.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Grunde eine superkräftige Suche: Sie führen im Hintergrund viele Suchen durch, bevor sie die Ergebnisse zu einer einzigen, leicht verdaulichen Antwort zusammenfassen. Häufige Auswahlmöglichkeiten sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt in einem Chat-Format oder über KI-gestützte Hilfe- oder Automatisierungssysteme in Anwendungen genutzt werden.

Beim Erlernen des Programmierens können KI-Chat-Eingaben auf verschiedene Weise nützlich sein:

- Konventionelle Suchanfragen durchführen, ähnlich wie die obigen Beispiele.
- Fehler in einem Codeblock identifizieren. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Eingabe einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber herausfinden möchten, wie er effizienter oder robuster gelöst werden könnte.
- Ratschläge für die Durchführung von Aufgaben geben. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern auch welchen Ansatz Sie verwenden sollten, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann AI so viel leisten, dass Sie sich möglicherweise fragen, warum Sie programmieren lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen trotzdem verstehen, was Sie auf hoher Ebene tun möchten, was der Code tut und wo jedes Stück Code verwendet werden muss**. Wenn Sie das nicht tun, sind Sie bei der Lösung von realen Problemen nicht sehr nützlich. Das bedeutet, dass Sie dennoch programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Ihnen gestellte Frage in eine KI-Eingabe eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einer selbstsicheren, autoritativen Stimme, können jedoch oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz — sie sind im Wesentlichen fortschrittliche Mustererkennungstools. KI-Tools sammeln ihre Antworten aus anderen Quellen und nehmen daher sowohl falsche als auch korrekte Informationen auf. Selbst zwei korrekte Quellen können kombiniert werden, um eine falsche Antwort zu erstellen.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten zugunsten älterer und weit verbreiteter Dokumentationen verzerrt sein, sodass "wie macht man X in JS" Ihnen möglicherweise veraltete Hinweise gibt.

Als Ergebnis müssen Sie vorsichtig sein, die von ihnen gegebenen Antworten zu überprüfen, und nicht einfach alles ungeprüft glauben.

**Beim Lernen sollten Sie Zeit damit verbringen, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie eine konventionelle Suchmaschine oder KI verwenden. Dies macht Sie zu einem besseren Entwickler.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff aufnehmen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `wie man die Fibonacci-Folge druckt` eingeben, erhalten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — nicht ganz so hilfreich, wenn Sie JavaScript lernen!
- Wenn Sie eine hilfreiche Antwort finden, markieren oder kopieren Sie sie irgendwohin, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder KI-Eingabe einzugeben. Andere Menschen haben sich wahrscheinlich bereits mit dem gleichen Fehler auseinandergesetzt und öffentlich irgendwo Lösungen aufgezeichnet.
- Wenn möglich, bleiben Sie bei empfohlenen Seiten wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, um bessere Ergebnisse zu erzielen als nur einen normalen Suchbegriff einzugeben. Das Eingeben eines einfachen Suchbegriffs wie `Ameise Fisch Käse` liefert Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Varianten der folgenden Formate:

  - Das Eingeben von `"Ameise Fisch Käse"` (mit den Anführungszeichen) gibt nur Ergebnisse zurück, die genau diese Phrase enthalten.
  - `"Ameise Käse" -Fisch` gibt Ergebnisse zurück, die `Ameise` und/oder `Käse`, aber nicht `Fisch` enthalten.
  - `Ameise ODER Käse` gibt nur Ergebnisse mit einem der beiden Begriffe zurück, nicht beide. Aus unseren Tests schien diese nur in Google effektiv zu funktionieren.
  - `intitle:Käse` gibt nur Ergebnisse zurück, die "Käse" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=de), [Wie man erweiterte Syntax bei der DuckDuckGo-Suche verwendet](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/de-de/topic/erweiterte-such-optionen-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
