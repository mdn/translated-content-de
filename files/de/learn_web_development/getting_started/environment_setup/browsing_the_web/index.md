---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 523d14433912228edd781fd7994aa0efae062b0b
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel vertieft das Thema der Nutzung von Browsern, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen.

> [!NOTE]
> Falls Sie außer den standardmäßig mit Ihren Geräten gelieferten Browsern keine weiteren installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich bringt das Web eine Menge Fachjargon und technische Terminologie mit sich. Keine Sorge: Wir werden Sie nicht sofort mit allem überfordern (wenn Sie neugierig sind, können Sie das [Glossar](/de/docs/Glossary) nachschlagen). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir führen einige wichtige Begriffe unten ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem.
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
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet. Solche Dokumente werden in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir später im Detail betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource gruppiert sind und durch Links miteinander verbunden sind. Oft als "Seite" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie in der Adressleiste von Firefox, Chrome usw. direkt Suchanfragen ausführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Sehen wir uns einen Vergleich an – eine öffentliche Bibliothek. Das ist das allgemeine Vorgehen beim Besuch einer Bibliothek:

1. Finden Sie einen Suchindex und suchen Sie nach dem Titel des Buches, das Sie wollen.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zum betreffenden Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, ähnlich wie ein Webserver mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht die gleichen Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel die Wissenschaftsabteilung (die Website) hat Bücher über Wärme, Schall, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns jetzt die Zeit, um jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser dargestellt werden kann. Eine Webseite kann eine Vielzahl unterschiedlicher Ressourcentypen einbetten, wie z.B.:

- _Stilinformationen_ — Steuerung des Aussehens einer Seite.
- _Skripte_ — welche der Seite Interaktivität verleihen.
- _Medien_ — Bilder, Geräusche und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem einzigartigen Ort gefunden werden (Webadresse, auch als {{Glossary("URL", "URL")}} bezeichnet). Um auf eine Seite zuzugreifen, geben Sie einfach die Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblingswebsites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meistens in Form von anklickbaren Textteilen – die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird im Allgemeinen zuerst die Hauptwebseite der Website oder die _Startseite_ angezeigt (umgangssprachlich als "Home" bezeichnet):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüpunkte oder Links anzuklicken, um verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht und bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseitendateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie jemanden sagen hören, "Meine Website reagiert nicht", bedeutet das tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Wichtiger noch, da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ nie verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagten, "Mein Webserver reagiert nicht", bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/), und viele mehr. Einige sind allgemein, einige sind spezialisiert auf bestimmte Themen.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie es uns klarstellen: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und darstellt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil beim ersten Start eines Browsers dieser oft die Homepage einer Suchmaschine oder ein Suchfeld anzeigt, das es ermöglicht, einen Suchbegriff mit dieser Suchmaschine zu durchsuchen. Die meisten Browser ermöglichen es ihren Nutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Browser-Adressleiste eingeben.

Dies alles macht Sinn, weil das erste, was die Leute in der Regel mit einem Browser tun wollen, darin besteht, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel von Firefox, das ein Google-Suchfeld als Standardstartseite anzeigt:

![Beispiel von Firefox nightly, das eine angepasste Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch:
>
> - Gehen Sie zu einer Suchmaschinen-Homepage und geben Sie einen Suchbegriff ein.
> - Geben Sie einen Suchbegriff in die Browser-Adressleiste ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso ein unverzichtbares Werkzeug in unserem täglichen Leben geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das unrealistisch für Sie klingt, denken Sie nur daran, wie oft Sie eine Website oder eine Mobiltelefon-App jeden Tag nutzen! Auch wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist die Wahrscheinlichkeit groß, dass die von Ihnen genutzte App wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten zu präsentieren.

Wenn Sie auf das Web zugreifen, passiert einiges zwischen Ihrer ersten Interaktion (zum Beispiel, wenn Sie eine Webadresse (URL) in einen Browser eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken) und dem Ergebnis Ihrer Aktion (zum Beispiel, die Website erscheint in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, die Sie auf dem Webserver, auf dem sie gespeichert ist, aufrufen möchten. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) durchgeführt, die eine Sprache der Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource mehr HTTP-Anfragen aus, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-Index-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser sie zu analysieren und findet wahrscheinlich Anweisungen, um weitere Anfragen zu stellen. Wie oben besprochen, könnten diese Anfragen für einzubettende Dateien wie Bilder, Stilinformationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert sind, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie im Moment wirklich wissen müssen. Sie werden eine detailliertere Beschreibung finden, wie Webseiten angefordert und von einem Webbrowser gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Fürs Erste versuchen Sie, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, und denken Sie dabei an die oben genannten Schritte.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, die Sie sich nicht merken können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Internet sucht.

Wenn Sie nach allgemeinen Informationen zu einer bestimmten Webtechnologie-Funktion suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Beispielsweise versuchen Sie, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche zu erweitern – versuchen Sie, Ihren Suchbegriff in einer Suchmaschine zu verwenden.

Wenn Sie nach einer Lösung für ein spezielles Problem suchen, wie „wie man die Fibonacci-Folge mit JavaScript ausgibt“ oder „wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist“, ist es eine gute Idee, eine Website wie [StackOverflow](https://stackoverflow.com) zu durchsuchen, die einer Gemeinschaft gewidmet ist, die Programmierprobleme beantwortet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, wenn eine bestimmte Seite Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige der oben genannten Suchen durchzuführen:
>
> - Beginnen Sie, indem Sie nach den genauen Begriffen suchen, die wir oben angegeben haben.
> - Gehen Sie dann weiter zu eigenen Themen, die Sie lernen möchten. Versuchen Sie, spezifischere und weniger spezifische Suchanfragen zu verwenden und verschiedene verwandte Begriffe, um zu sehen, was am besten funktioniert.
> - Sehen Sie sich unsere [Suchtipps](#suchtipps) für weitere Tipps an.

### Verwendung von KI

Durch KI generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine superschnelle Suche: Sie führen im Hintergrund viele Suchen durch, bevor sie die Ergebnisse in einer einzigen, leicht verdaulichen Antwort zusammenstellen. Beliebte Optionen sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt im Chat-Format oder über KI-gestützte Hilfe oder Automatisierungssysteme in Apps aufgerufen werden.

Beim Lernen zu programmieren können KI-Chatbefehle auf verschiedene Weise nützlich sein:

- Durchführung konventioneller Suchen, wie in den obigen Beispielen.
- Fehler in einem Codeblock feststellen. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Eingabeaufforderung einfügen, gefolgt von einer Frage wie „Wo ist der Fehler in diesem Code?“
- Einen optimierten Codeblock generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber herausfinden möchten, wie er effizienter gemacht werden könnte oder auf eine robustere Weise, die mehr Anwendungsfälle abdeckt.
- Beratung zu erhalten, wie man etwas umsetzt. Zum Beispiel, wenn Sie nicht nur wissen wollen, wo der Fehler in einem Codeblock ist, sondern stattdessen Beratung zu der Strategie wünschen, die Sie zur Fehlerbehebung verwenden sollten.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit können KI-Tools so viel leisten, dass Sie sich fragen könnten, warum Sie überhaupt programmieren lernen sollten.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer höheren Ebene zu tun versuchen, was der Code bewirkt und wo jedes Stück Code verwendet werden muss**. Andernfalls sind Sie bei der Lösung realer Probleme nicht sehr hilfreich. Das bedeutet, dass Sie trotzdem programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, in eine KI-Eingabeaufforderung eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einer sicheren, autoritären Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz – sie sind im Grunde fortschrittliche Mustererkennungstools. KI-Tools kompilieren ihre Antworten aus anderen Quellen, daher nehmen sie sowohl falsche als auch richtige Informationen auf. Auch zwei korrekte Quellen können kombiniert werden, um eine falsche Antwort zu ergeben.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder die Antworten werden möglicherweise in Richtung älterer und weiter verbreiteter Dokumentationen verzerrt, sodass „wie man X in JS macht“ möglicherweise veraltete Anleitungen liefert.

Daher sollten Sie vorsichtig sein und die Antworten, die sie Ihnen geben, überprüfen und nicht einfach alles ohne Frage vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie eine Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur „wie man die Fibonacci-Folge ausgibt“ eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten – nicht ganz so hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie oder machen Sie eine Kopie davon, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder eine KI-Eingabeaufforderung einzugeben. Andere Leute haben wahrscheinlich bereits denselben Fehler in der Vergangenheit gelöst und Lösungen irgendwo öffentlich dokumentiert.
- Wenn möglich, bleiben Sie bei empfohlenen Websites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern, als einfach einen einfachen Suchbegriff einzugeben. Das Eingeben eines einfachen Suchbegriffs wie „ant fish cheese“ liefert Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Das Eingeben von `"ant fish cheese"` (mit den Anführungszeichen) wird nur Ergebnisse zurückgeben, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` wird Ergebnisse zurückgeben, die `ant` und/oder `cheese` aber nicht `fish` enthalten.
  - `ant OR cheese` wird nur Ergebnisse mit einem Begriff oder dem anderen, nicht beiden zurückgeben. Laut unseren Tests schien dies nur in Google effektiv zu funktionieren.
  - `intitle:cheese` wird nur Ergebnisse zurückgeben, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können – einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=de), [Erweiterte Syntax auf DuckDuckGo-Suche verwenden](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
