---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 55249a2a8863471125f07eb5b7e714b2b6b11ee4
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Bis zu diesem Punkt in diesem Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer in die Nutzung von Browsern ein, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen der alltäglichen Dinge, mit denen Sie interagieren, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren Browser installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich kommt auch das Web mit einer Menge Fachjargon und technischer Begriffe. Keine Sorge: Wir werden Sie nicht gleich zu Anfang mit allem überfluten (Sie können bei Interesse das [Glossar](/de/docs/Glossary) nachschlagen). Es gibt jedoch einige Grundbegriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen einige wichtige Begriffe unten vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis Ihres Computer-Betriebssystems.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegender Ebene funktioniert.</li>
          <li>Suche nach Informationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neueinsteigern im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie verstehen, was jeder von ihnen bedeutet! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden oft einfach "Seiten" genannt. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache verfasst (die wir später noch genauer betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind und durch Links miteinander verbunden sind. Oft als "Seite" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die Anfragen über das Internet beantwortet, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste wären ein Dienst, der Bilder in der Größe ändert, Wetterberichte bereitstellt oder Benutzeranmeldungen verwaltet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchmaschinen-Suchen direkt in der Adressleiste von Firefox, Chrome etc. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie — eine öffentliche Bibliothek. Dies ist, was Sie im Allgemeinen tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abschnitte, ähnlich wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht dieselben Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben. Beispielsweise enthält der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer spezifiziert wird.

Nehmen wir uns nun die Zeit, jeden Begriff etwas ausführlicher zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl verschiedener Ressourcentypen einbetten wie:

- _Stylinginformationen_ — Steuerung des Aussehens und der Gestaltung der Seite.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Geräusche und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten sind jeweils an einem einzigartigen Ort auffindbar (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um auf eine Seite zuzugreifen, geben Sie einfach deren Adresse in Ihre Browser-Adressleiste ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie jetzt, eine Ihrer Lieblingswebseiten in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus deren zugehörige Ressourcen), die einen einzigartigen [Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meist in Form von anklickbaren Teilen von Text – die es dem Benutzer ermöglichen, von einer Seite der Website zur nächsten zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, zeigt sie zuerst die Hauptwebseite oder _Homepage_ der Website an (umgangssprachlich "Home" genannt):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüelemente oder Links anzuklicken, um sich verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzelnen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet Dateien von Webseiten, die er hostet, an einen Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise hören, "Meine Website antwortet nicht", bedeutet das eigentlich, dass der _Webserver_ nicht antwortet und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, daher wird der Begriff _Webserver_ nie verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen, "Mein Webserver antwortet nicht", bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle von Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klarstellen: Ein _Browser_ ist eine Software, die Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil, wenn jemand zum ersten Mal einen Browser startet, der Browser oft die Homepage einer Suchmaschine oder ein Suchfeld anzeigt, das es ihnen ermöglicht, einen Begriff mithilfe dieser Suchmaschine zu suchen. Die meisten Browser erlauben es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Browser-Adressleiste eingeben.

Das alles ergibt Sinn, da das erste, was die Leute normalerweise mit einem Browser tun möchten, ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel, wie Firefox ein Google-Suchfeld als Standard-Starteite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Machen Sie eine Suche in einer Suchmaschine, indem Sie:
>
> - Auf die Startseite einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Browser-Adressleiste eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso zu einem wesentlichen Werkzeug unseres täglichen Lebens geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Sollten Sie das für unrealistisch halten, überlegen Sie einfach, wie oft Sie jeden Tag eine Website oder eine Mobile-App nutzen! Selbst wenn Sie keine Webadresse in einem Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist es wahrscheinlich, dass die App, die Sie verwenden, wahrscheinlich Webtechnologie im Hintergrund nutzt, um Daten abzufragen und Ihnen zu präsentieren.

Wenn Sie auf das Web zugreifen, passiert zwischen Ihrer ersten Interaktion (zum Beispiel Eingabe einer Webadresse (URL) in einen Browser und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel die Webseite, die in Ihrem Webbrowser erscheint), eine Menge:

1. Der Webbrowser fordert die Ressource an (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video), die Sie auf dem Webserver, auf dem sie gespeichert ist, zugreifen möchten. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gemacht, die eine Sprache von Verben (wie **GET**) nutzt, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort an den Webbrowser zurück, die die angeforderte Ressource enthält.
3. In einigen Fällen wird die angeforderte Ressource dann weitere HTTP-Anfragen auslösen, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er sie zu analysieren und wird wahrscheinlich Anweisungen finden, weitere Anfragen zu stellen. Wie oben diskutiert, könnten dies Dateien zum Einbetten wie Bilder, Stylinginformationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Sie finden eine detailliertere Darstellung davon, wie Webseiten von einem Webbrowser angefordert und gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas weiter unten.

Versuchen Sie nun, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, und denken Sie dabei über die oben beschriebenen Schritte nach.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, die Sie sich nicht merken können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen zu einem bestimmten Webtechnologie-Feature suchen, sollten Sie den Namen des Features in das MDN-Suchfeld eingeben. Beispielsweise versuchen Sie, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was Sie finden. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche zu erweitern – versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie z.B. `wie man die Fibonacci-Folge mit JavaScript ausgibt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Seite Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchen, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Bedingungen, die wir oben erwähnt haben.
> - Gehen Sie als nächstes zu der Suche nach einigen Themen über, die Sie selbst lernen möchten. Versuchen Sie, mehr und weniger spezifische Suchen sowie unterschiedliche verwandte Begriffe zu verwenden, um herauszufinden, was am besten funktioniert.
> - Siehe unseren [Suchtipps](#suchtipps) für weitere Dinge, die Sie ausprobieren können.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit zur Informationsbeschaffung. Sie bieten im Grunde genommen eine supermächtige Suche: Sie führen eine Menge von Suchen im Hintergrund durch, bevor sie die Ergebnisse in einer einzigen, leicht verdaulichen Antwort zusammenstellen. Häufige Optionen sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt in einem Chat-Format oder über KI-unterstützte In-App-Hilfs- oder Automatisierungssysteme aufgerufen werden.

Beim Erlernen der Programmierung können KI-Chat-Prompts auf verschiedene Arten nützlich sein:

- Herkömmliche Suchen durchführen, wie die obigen Beispiele.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in ein KI-Chat-Prompt einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber Sie möchten herausfinden, wie er effizienter oder auf eine robustere Weise, die mehr Anwendungsfälle löst, umgesetzt werden könnte.
- Beratung, wie man etwas macht. Beispielsweise wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern stattdessen Ratschläge wünschen, welche Strategie zur Fehlerbehebung verwendet werden sollte.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Probieren Sie einige KI-Tools aus, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann KI so viel, dass es Ihnen in den Sinn kommen könnte zu hinterfragen, warum Sie noch programmieren lernen müssen.

Aber warten Sie! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer hohen Ebene zu tun versuchen, was der Code macht und wo jedes Stück Code verwendet werden muss**. Andernfalls werden Sie nicht sehr nützlich sein, wenn Sie versuchen, reale Probleme zu lösen. Das bedeutet, dass Sie immer noch Programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, das Ihnen hilft, schneller Antworten zu finden, aber wenn Sie jede Frage, die Sie gestellt bekommen, in ein KI-Prompt eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz – sie sind im Grunde fortgeschrittene Mustermatching-Tools. KI-Tools sammeln ihre Antworten aus anderen Quellen da draußen, saugen also falsche Informationen genauso auf wie korrekte Informationen. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die inkorrekt ist.
- Neuere Informationen sind möglicherweise nicht verfügbar oder Antworten können zu älterer und verbreiteterer Dokumentation geneigt sein, sodass "wie man X in JS macht" Ihnen veraltete Anleitungen geben könnte.

Daher müssen Sie vorsichtig sein und die Antworten überprüfen, die sie Ihnen geben, und nicht alles ohne Frage vertrauen.

**Wenn Sie lernen, nehmen Sie sich Zeit, das Problem selbst zu lösen, bevor Sie eine Antwort suchen, egal ob Sie KI oder eine konventionelle Suchmaschine verwenden. Es macht Sie zu einem besseren Entwickler.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie einfach `wie man die Fibonacci-Folge ausgibt` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten – nicht ganz so hilfreich, wenn Sie JavaScript lernen!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie mit einem Lesezeichen oder erstellen Sie eine Kopie davon an einem Ort, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezielle Fehlermeldung zurückgibt, versuchen Sie diese in eine Suchmaschine oder ein KI-Prompt einzugeben. Andere Leute haben wahrscheinlich bereits dasselbe Problem in der Vergangenheit gelöst und Lösungen irgendwo öffentlich aufgezeichnet.
- Wenn möglich, halten Sie sich an empfohlene Websites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern als nur einen einfachen Suchbegriff einzutippen. Das Eingeben eines einfachen Suchbegriffs wie `Blackhead computer Web` liefert Ergebnisse, die irgendeine Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Versionen der folgenden Formate:

  - Das Eingeben von `"ant fish cheese"` (mit den Anführungszeichen) liefert nur Ergebnisse, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` liefert Ergebnisse, die `ant` und/oder `cheese`, jedoch nicht `fish` enthalten.
  - `ant OR cheese` liefert nur Ergebnisse mit einem der beiden Begriffe, nicht beiden. Bei unseren Tests schien dies nur in Google effektiv zu funktionieren.
  - `intitle:cheese` liefert nur Ergebnisse, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele weitere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche weiteren Sie finden können – einige nützliche Quellen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
