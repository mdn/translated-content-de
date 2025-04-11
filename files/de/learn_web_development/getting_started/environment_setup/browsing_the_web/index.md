---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt des Moduls sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer darauf ein, wie Browser verwendet werden, wie ein Webbrowser funktioniert, was der Unterschied zwischen einigen der alltäglichen Dinge ist, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen können.

> [!NOTE]
> Wenn Sie keine Browser installiert haben, die über die Standardbrowser hinausgehen, die mit Ihren Geräten geliefert wurden, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich verfügt das Web über eine Menge Fachjargon und technische Terminologie. Keine Sorge: Wir werden Sie nicht sofort mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) nachschlagen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Einige wichtige Begriffe stellen wir unten vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegender Ebene funktioniert.</li>
          <li>Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neulingen im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden auch oft einfach als "Seiten" bezeichnet. Solche Dokumente werden in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später detaillierter eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource gruppiert sind und durch Links miteinander verbunden sind. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webservice**
  - : Eine Software, die Anfragen über das Internet beantwortet, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webservice wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webservices, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webservices wären etwas, das Bilder skaliert, einen Wetterbericht bereitstellt oder den Benutzer-Login verwaltet.
- **Suchmaschine**
  - : Ein Webservice, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie im Adressfeld von Firefox, Chrome usw. Suchmaschinensuchen durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Schauen wir uns ein Beispiel an — eine öffentliche Bibliothek. Dies ist das, was Sie normalerweise tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abschnitte, was einem Webserver gleicht, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht die gleichen Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel wird der Wissenschaftsabschnitt (die Website) Bücher über Wärme, Klang, Thermodynamik, Statik usw. haben.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns jetzt die Zeit, jeden Begriff etwas genauer anzusehen.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl unterschiedlicher Ressourcen einbetten, wie zum Beispiel:

- _Stilinformationen_ — Steuerung des Aussehens und der Haptik einer Seite.
- _Skripte_ — die der Seite Interaktivität verleihen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem einzigartigen Ort (Webadresse, auch genannt {{Glossary("URL", "URL")}}) gefunden werden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webadresse in der Adressleiste des Browsers](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblingswebsites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domänennamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links—meist in Form von anklickbarem Text—die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu gelangen.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, zeigt sie normalerweise zuerst die Hauptwebseite der Website oder die _Homepage_ (umgangssprachlich „Home“ genannt) an:

![Beispiel eines Website-Domänennamens in der Adressleiste des Browsers](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüelemente oder Links zu klicken, um verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_ (Einseitenanwendung)")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosten“ bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseiten-Dateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie zum Beispiel jemanden sagen hören: „Meine Website antwortet nicht“, bedeutet das tatsächlich, dass der _Webserver_ nicht antwortet und deshalb die _Website_ nicht verfügbar ist. Wichtiger noch, da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ niemals zur Bezeichnung einer Website verwendet, da dies große Verwirrung stiften könnte. In unserem vorherigen Beispiel, wenn wir gesagt hätten: „Mein Webserver antwortet nicht“, bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind spezialisiert auf bestimmte Themen.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klarstellen: Ein _Browser_ ist eine Software, die Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung tritt auf, weil beim ersten Start eines Browsers der Browser oft die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es dem Benutzer ermöglicht, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser ermöglichen es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das macht alles Sinn, da das erste, was Menschen in einem Browser tun wollen, oft ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel für Firefox, das ein Google-Suchfeld als Standardstartseite anzeigt:

![Beispiel für Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch, indem Sie:
>
> - Zur Homepage einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web zu einem genauso unverzichtbaren Werkzeug für unser tägliches Leben geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das für Sie unrealistisch klingt, denken Sie einfach daran, wie oft Sie jeden Tag eine Website oder eine Handy-App verwenden! Auch wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist die Wahrscheinlichkeit groß, dass die App, die Sie verwenden, wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (zum Beispiel das Eintippen einer Webadresse (URL) in einen Browser und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel erscheint die Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, auf die Sie zugreifen möchten, vom Webserver, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gemacht, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was passieren soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen wird die angeforderte Ressource dann weitere HTTP-Anfragen auslösen, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser, sie zu analysieren, und findet wahrscheinlich Anweisungen, um weitere Anfragen zu stellen. Wie oben besprochen, könnten dies Dateien sein, die eingebettet werden sollen, wie Bilder, Stilinformationen, Skripte usw.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie an diesem Punkt wirklich wissen müssen. Eine detailliertere Darstellung, wie Webseiten angefordert und von einem Webbrowser gerendert werden, finden Sie in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Versuchen Sie jetzt, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, während Sie über die oben genannten Schritte nachdenken.

## Suche nach Informationen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntaxen, an die Sie sich nicht erinnern können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen zu einer bestimmten Funktion der Webtechnologie suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Versuchen Sie zum Beispiel, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was herauskommt. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche zu erweitern — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `wie man die Fibonacci-Sequenz mit JavaScript ausgibt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com/) zu suchen, die sich der Lösung von Programmierproblemen widmet. Versuchen Sie wiederum, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Site keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchen, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben angegeben haben.
> - Suchen Sie anschließend nach einigen Themen, über die Sie mehr erfahren möchten. Versuchen Sie es mit spezifischeren und weniger spezifischen Suchanfragen und verschiedenen verwandten Begriffen, um herauszufinden, was am besten funktioniert.
> - Siehe unsere [Suchtipps](#suchtipps) für weitere Dinge, die Sie ausprobieren können.

### Verwendung von KI

Von KI-generierte Suchergebnisse sind eine sehr beliebte Methode, Informationen zu erhalten. Sie bieten im Grunde eine superleserstarke Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse in einer einzigen, leicht verdaulichen Antwort zusammenfassen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt in einem Chat-Format oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme aufgerufen werden.

Beim Erlernen des Programmierens können KI-Chat-Eingabeaufforderungen auf verschiedene Weise nützlich sein:

- Konventionelle Suchen wie die obigen Beispiele durchzuführen.
- Fehler in einem Codeblock herauszufinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Eingabeaufforderung einfügen, vorausgesetzt, mit einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks zu generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber Sie herausfinden möchten, wie er effizienter ausgeführt werden könnte oder auf robustere Weise, die mehr Anwendungsfälle löst.
- Ratschläge zu geben, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock ist, sondern Sie stattdessen Rat wünschen, welche Strategie Sie verwenden sollten, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

Tatsächlich kann KI so viel, dass Sie vielleicht anfangen zu fragen, warum Sie programmieren lernen müssen.

Aber warten Sie! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene erreichen wollen, was der Code macht und wo jeder Codeteil verwendet werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung realer Probleme nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch Programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schnellere Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in eine KI-Aufforderung eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Werkzeuge präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene angeborene Intelligenz — sie sind im Grunde fortgeschrittene Mustererkennungstools. KI-Werkzeuge kompilieren ihre Antworten aus anderen Quellen da draußen, also sammeln sie falsche Informationen ebenso wie richtige. Selbst zwei richtige Quellen können zu einer Antwort kombiniert werden, die inkorrekt ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder die Antworten können auf ältere und häufiger vorhandene Dokumentationen verzerrt sein, sodass „wie man X in JS macht“ Ihnen möglicherweise veraltete Anleitungen gibt.

Folglich müssen Sie darauf achten, die Antworten, die sie Ihnen geben, zu überprüfen und nicht alles ohne Frage zu vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, zu versuchen, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, sei es, dass Sie KI oder eine konventionelle Suchmaschine verwenden. Das wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff aufnehmen, wie in den oben gezeigten Beispielen. Wenn Sie einfach nur `wie man die Fibonacci-Sequenz ausdruckt` eingeben würden, hätten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — nicht ganz so hilfreich, wenn Sie JavaScript lernen wollen!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie oder machen Sie eine Kopie davon an einem Ort, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder KI-Aufforderung einzugeben. Andere Leute haben wahrscheinlich bereits denselben Fehler in der Vergangenheit gelöst und Lösungen öffentlich irgendwo aufgezeichnet.
- Wenn möglich, halten Sie sich an empfohlene Websites wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können und die Ihnen bessere Ergebnisse liefern als nur einen einfachen Suchbegriff einzugeben. Wenn Sie einen einfachen Suchbegriff wie `ant fish cheese` eingeben, erhalten Sie Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Wenn Sie `"ant fish cheese"` (mit den Anführungszeichen) eingeben, werden nur Ergebnisse zurückgegeben, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` gibt Ergebnisse zurück, die `ant` und/oder `cheese` enthalten, aber nicht `fish`.
  - `ant OR cheese` gibt nur Ergebnisse mit einem oder dem anderen Begriff, nicht beide. Laut unseren Tests funktionierte dies effektiv nur bei Google.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche anderen Sie finden können — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [Wie man erweiterte Syntax bei DuckDuckGo Search verwendet](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
