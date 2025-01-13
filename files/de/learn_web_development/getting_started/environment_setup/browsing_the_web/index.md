---
title: Durchsuchen des Webs
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt des Moduls sollten Sie mehrere moderne Web-Browser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer auf die Nutzung von Browsern ein, erklärt, wie ein Web-Browser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn Sie außer den standardmäßig auf Ihren Geräten vorhandenen Browsern keine weiteren installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Web-Browser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich kommt das Web mit viel Fachjargon und technischer Terminologie. Keine Sorge: Wir werden Sie nicht sofort mit allem überfluten (wenn Sie neugierig sind, können Sie das [Glossar](/de/docs/Glossary) durchsuchen). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke regelmäßig hören werden. Wir stellen unten einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computer-Betriebssystems.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Web-Browser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Web-Browser auf grundlegender Ebene funktioniert.</li>
          <li>Suche nach Informationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Web-Neulingen oft verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was jeder bedeutet! Beginnen wir mit einigen Definitionen:

- **Webpage**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden auch oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später noch näher eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzelnen Ressource zusammengefasst sind und durch Links miteinander verbunden sind. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser (zum Beispiel können Sie Suchmaschinensuchen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)) aufgerufen.

Sehen wir uns ein Beispiel an — eine öffentliche Bibliothek. Dies würden Sie normalerweise tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und erhalten Sie das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Sektionen, was ähnlich ist wie das Hosten mehrerer Websites auf einem Webserver.
- Die verschiedenen Sektionen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Sektion ist wie eine einzigartige Website (zwei Sektionen enthalten nicht dieselben Bücher).
- Die Bücher in jeder Sektion sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel wird die Wissenschaftssektion (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am gleichen Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir nun die Zeit, jeden Begriff etwas genauer zu betrachten.

### Webpage

Eine **Webpage** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl verschiedener Ressourcentypen einbetten, wie zum Beispiel:

- _Style-Informationen_ — die das Aussehen einer Seite steuern.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Sounds und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webpage** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können jeweils an einem eindeutigen Standort gefunden werden (Web-Adresse, auch genannt {{Glossary("URL", "URL")}}). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für eine Webadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblingswebsites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung von verlinkten Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meist in Form von anklickbaren Teilen des Textes – die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu navigieren.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zuerst die Hauptwebseite der Website oder die _Homepage_ (umgangssprachlich als "Home" bezeichnet) angezeigt:

![Beispiel für einen Domainnamen einer Website in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüelemente oder Links anzuklicken, um sich einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die dynamisch mit neuen Inhalten aktualisiert wird, wenn dies erforderlich ist.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die auf ihm gehosteten Webseiten-Dateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ nicht mit _Webservern_. Wenn Sie beispielsweise hören, dass jemand sagt: "Meine Website antwortet nicht", bedeutet dies tatsächlich, dass der _Webserver_ nicht antwortet und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, sodass der Begriff _Webserver_ niemals verwendet wird, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen würden: "Mein Webserver antwortet nicht", bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Verwirrungsquelle im Web. Eine Suchmaschine ist eine besondere Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klarstellen: Ein _Browser_ ist ein Stück Software, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil der Browser, wenn er zum ersten Mal gestartet wird, oft die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es ermöglicht, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser ermöglichen es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Dies alles ist sinnvoll, da das erste, was die Leute normalerweise mit einem Browser tun möchten, darin besteht, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel für Firefox, das ein Google-Suchfeld als seine Standard-Startseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Machen Sie eine Suche in einer Suchmaschine, indem Sie:
>
> - Auf eine Startseite einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt hat sich das Web zu einem ebenso unverzichtbaren Werkzeug in unserem Alltagsleben entwickelt wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie nur daran, wie oft Sie täglich eine Website oder eine mobile App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht eine gute Chance, dass die von Ihnen genutzte App wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten für Sie abzurufen.

Wenn Sie auf das Web zugreifen, passiert zwischen Ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und das Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser), eine ganze Menge:

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, auf die Sie zugreifen möchten, vom Webserver, auf dem sie gespeichert ist. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gestellt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindexdatei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er, sie zu analysieren, und wird wahrscheinlich finden, dass weitere Anfragen gestellt werden müssen. Wie oben diskutiert, können dies Dateien zum Einbetten wie Bilder, Style-Informationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie wie erforderlich, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie an diesem Punkt wirklich wissen müssen. Sie werden eine detailliertere Darstellung darüber finden, wie Webseiten angefordert und von einem Webbrowser gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Probieren Sie es vorerst selbst aus, indem Sie einen Webbrowser öffnen und ein paar Ihrer Lieblingsseiten laden, während Sie an die obigen Schritte denken.

## Suchen nach Informationen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, die Sie sich nicht merken können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie allgemeine Informationen zu einem bestimmten Webtechnologie-Feature suchen, sollten Sie den Namen des Features in das MDN-Suchfeld eingeben. Versuchen Sie zum Beispiel, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche auszuweiten - versuchen Sie, Ihren Suchbegriff in einer Suchmaschine zu verwenden.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `wie man die Fibonacci-Folge mit JavaScript ausgibt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchen, wie oben beschrieben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben angegeben haben.
> - Fahren Sie damit fort, nach einigen Themen zu suchen, über die Sie mehr lernen möchten. Versuchen Sie, mehr oder weniger spezifische Suchen und verschiedene verwandte Begriffe zu verwenden, um herauszufinden, was am besten funktioniert.
> - Sehen Sie sich unsere [Suche-Tipps](#suche-tipps) für weitere Dinge an, die Sie ausprobieren können.

### Nutzung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine Super-Power-Suche: Sie führen im Hintergrund viele Suchen durch, bevor sie die Ergebnisse in einer einzigen, leicht verständlichen Antwort zusammenfassen. Häufige Wahlmöglichkeiten sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), entweder direkt in einem Chat-Format aufgerufen, oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme.

Beim Lernen zu programmieren können AI-Chat-Anfragen auf verschiedene Weise nützlich sein:

- Herkömmliche Suchanfragen durchführen, wie die obigen Beispiele.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in ein AI-Chat-Fenster einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines spezifischen Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber wissen möchten, wie er effizienter oder auf eine robustere Weise umgesetzt werden könnte, die mehr Anwendungsfälle löst.
- Ratschläge geben, wie etwas zu tun ist. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern stattdessen wissen möchten, welche Strategie verwendet werden soll, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige KI-Tools für einige Suchen zu verwenden.

### Eine warnende Geschichte

Tatsächlich kann KI so viel leisten, dass Sie sich fragen könnten, warum Sie überhaupt Programmieren lernen müssen.

Aber warten Sie! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer hohen Ebene tun möchten, was der Code tut und wo jedes Stück Code verwendet werden muss**. Wenn Sie das nicht tun, werden Sie nicht sehr nützlich sein, wenn Sie versuchen, reale Probleme zu lösen. Das bedeutet, dass Sie immer noch das Programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Sie stellen, einfach in eine KI-Anfrage eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Darüber hinaus:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, können aber oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keinen eigenen angeborenen Verstand – sie sind im Grunde fortschrittliche Werkzeuge zur Mustererkennung. KI-Tools erstellen ihre Antworten aus anderen Quellen, die es da draußen gibt, und werden daher falsche Informationen ebenso verschlingen wie korrekte Informationen. Selbst zwei richtige Quellen können kombiniert werden, um eine Antwort zu erstellen, die falsch ist.
- Neuere Informationen könnten nicht verfügbar sein, oder Antworten könnten zugunsten älterer und weiter verbreiteter Dokumentationen verzerrt sein, sodass "wie man X in JS macht" Ihnen veraltete Anleitungen geben könnte.

Daher müssen Sie vorsichtig mit den Antworten umgehen, die sie Ihnen geben, und nicht einfach alles ohne Frage vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suche-Tipps

- Sie sollten die Sprache, die Sie verwenden, im Suchbegriff enthalten, wie in den obigen Beispielen gezeigt. Wenn Sie nur `wie man die Fibonacci-Folge ausgibt` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten – nicht ganz so hilfreich, wenn Sie JavaScript lernen!
- Wenn Sie eine nützliche Antwort finden, sollten Sie diese als Lesezeichen speichern oder irgendwo eine Kopie davon machen, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder AI-Anfrage einzugeben. Andere Menschen haben sich wahrscheinlich schon einmal mit demselben Fehler auseinandergesetzt und öffentlich irgendwo Lösungen aufgezeichnet.
- Wenn möglich, halten Sie sich an empfohlene Websites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern als einfach nur einen Suchbegriff einzugeben. Das Eingeben eines Suchbegriffs wie `Ameise Fisch Käse` gibt Ergebnisse zurück, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Durch Eingabe von `"Ameise Fisch Käse"` (mit den Anführungszeichen) werden nur Ergebnisse zurückgegeben, die genau diese Phrase enthalten.
  - `"Ameise Käse" -Fisch` gibt Ergebnisse zurück, die `Ameise` und/oder `Käse`, aber nicht `Fisch` enthalten.
  - `and OR Käse` gibt nur Ergebnisse zurück, die entweder einen der Begriffe enthalten, jedoch nicht beide. Nach unseren Tests schien dies nur in Google effektiv zu funktionieren.
  - `intitle:Käse` gibt nur Ergebnisse zurück, die "Käse" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können — einige nützliche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Advanced search options](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
