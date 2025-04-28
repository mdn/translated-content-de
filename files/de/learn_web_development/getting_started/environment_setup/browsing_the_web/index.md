---
title: Surfen im Internet
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel vertieft die Verwendung von Browsern, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn auf Ihren Geräten nur die standardmäßig vorinstallierten Browser installiert sind, sollten Sie weitere installieren. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet gibt es im Web viel Fachjargon und technische Terminologie. Keine Sorge: Wir werden Sie nicht sofort mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) nachschlagen, wenn Sie neugierig sind). Es gibt jedoch einige Grundbegriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Unten stellen wir einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegende Weise funktioniert.</li>
          <li>Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Webanfängern oft verwechselt oder falsch verwendet. Stellen wir sicher, dass Sie wissen, was sie bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden auch oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später ausführlicher eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind und durch Links miteinander verbunden sind. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischem Inhalt bestehen. Beispiele für Webdienste wären etwas, das Bilder verkleinert, einen Wetterbericht liefert oder Benutzereingaben verarbeitet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchanfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Schauen wir uns eine Analogie an — eine öffentliche Bibliothek. Dies würden Sie im Allgemeinen tun, wenn Sie eine Bibliothek besuchen:

1. Einen Suchindex finden und nach dem Titel des gewünschten Buches suchen.
2. Die Katalognummer des Buches notieren.
3. Zum bestimmten Bereich mit dem Buch gehen, die richtige Katalognummer finden und das Buch holen.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Bereiche, ähnlich wie ein Webserver mehrere Websites hostet.
- Die verschiedenen Bereiche (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Bereich ist eine einzigartige Website (zwei Bereiche enthalten nicht die gleichen Bücher).
- Die Bücher in jedem Bereich sind wie Webseiten. Eine Website kann mehrere Webseiten haben, beispielsweise enthält der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben ist.

Nehmen wir uns nun die Zeit, um jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann verschiedene Arten von Ressourcen einbetten wie:

- _Stilinformations_ – Steuert das Aussehen und Verhalten einer Seite.
- _Scripts_ – die Interaktivität zur Seite hinzufügen.
- _Medien_ – Bilder, Geräusche und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten haben ihren eigenen einzigartigen Standort (Webadresse, auch als {{Glossary("URL", "URL")}} bekannt). Um auf eine Seite zuzugreifen, geben Sie einfach deren Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für eine Webadresse in der Adressleiste des Browsers](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblingswebsites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung verlinkter Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meistens in Form von anklickbaren Textabschnitten –, die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird normalerweise als erstes die Hauptwebseite der Website oder die _Homepage_ (umgangssprachlich als „Home“ bezeichnet) angezeigt:

![Beispiel eines Website-Domainnamen in der Adressleiste des Browsers](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, einige Menüelemente oder Links anzuklicken, um andere Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuem Inhalt aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosting“ bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseiten-Dateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ nicht mit _Webservern_. Wenn Sie beispielsweise jemanden sagen hören: „Meine Website reagiert nicht“, bedeutet das tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Wichtiger ist, dass ein Webserver mehrere Websites hosten kann, der Begriff _Webserver_ wird niemals verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagten: „Mein Webserver reagiert nicht“, bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generisch, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen mit Browsern. Lassen Sie uns das klarstellen: Ein _Browser_ ist ein Programm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht oft, weil beim ersten Start eines Browsers oft die Homepage einer Suchmaschine oder ein Suchfeld angezeigt wird, das es ermöglicht, einen Begriff über diese Suchmaschine zu suchen. Die meisten Browser ermöglichen es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das macht alles Sinn, denn das erste, was die Leute in der Regel mit einem Browser tun möchten, ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel von Firefox, das eine Google-Suchbox als Standardstartseite anzeigt:

![Beispiel für Firefox nightly, zeigt eine benutzerdefinierte Google-Seite als Standard](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Machen Sie eine Suche in einer Suchmaschine, indem Sie:
>
> - Zur Homepage einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web ebenso zu einem unverzichtbaren Werkzeug unseres täglichen Lebens geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das für Sie unrealistisch klingt, denken Sie nur daran, wie oft Sie täglich eine Website oder eine mobile App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht die Wahrscheinlichkeit, dass die Anwendung, die Sie verwenden, wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, passiert viel zwischen Ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel dem Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, die Sie vom Webserver abrufen möchten, auf dem sie gespeichert ist. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) durchgeführt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er mit der Analyse und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu stellen. Wie oben diskutiert, könnte es sich dabei um einzubettende Dateien wie Bilder, Stilinformationen, Skripte usw. handeln.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser diese nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie an diesem Punkt wirklich wissen müssen. Sie finden eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, in unserem später im Modul folgenden [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul.

Probieren Sie nun das Öffnen eines Webbrowsers und das Laden einiger Ihrer Lieblingssites aus und denken Sie dabei an die oben genannten Schritte.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, die Sie sich nicht merken können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen zu einer bestimmten Funktion der Webtechnologie suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Zum Beispiel, versuchen Sie `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche zu erweitern – versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie zum Beispiel `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com/) zu suchen, die sich einer Gemeinschaft widmet, die Programmierprobleme löst. Versuchen Sie auch hier die Nutzung einer allgemeinen Suchmaschine, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Probieren Sie einige Suchen aus, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben angegeben haben.
> - Suchen Sie als Nächstes nach Themen, über die Sie mehr erfahren möchten. Versuchen Sie es mit spezifischeren und weniger spezifischen Suchen und verschiedenen verwandten Begriffen, um herauszufinden, was am besten funktioniert.
> - Sehen Sie sich unsere [Such-Tipps](#such-tipps) für weitere Dinge an, die Sie ausprobieren können.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Grunde eine leistungsstarke Suche: Sie führen im Hintergrund viele Suchen durch, bevor sie die Ergebnisse zu einer einzigen, leicht verdaulichen Antwort zusammenstellen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt in einem Chat-Format oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme genutzt werden.

Beim Erlernen des Programmierens können KI-Chat-Eingaben auf verschiedene Weise nützlich sein:

- Konventionelle Suchen durchführen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Eingabe einfügen, gefolgt von einer Frage wie `Wo liegt der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks erstellen. Dies kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber herausfinden möchten, wie es effizienter oder robuster gemacht werden kann, um mehr Anwendungsfälle abzudecken.
- Ratschläge geben, wie etwas gemacht werden soll. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern stattdessen einen Rat benötigen, welche Strategie bei der Fehlersuche zu verwenden ist.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu nutzen, um einige Suchen durchzuführen.

### Eine warnende Geschichte

Tatsächlich kann KI so viel leisten, dass Sie sich vielleicht fragen, warum Sie überhaupt noch programmieren lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hohem Niveau zu erreichen versuchen, was der Code macht und wo jedes Stück Code verwendet werden muss**. Wenn Sie das nicht tun, werden Sie nicht sehr nützlich sein, wenn es darum geht, reale Probleme zu lösen. Das bedeutet, dass Sie immer noch lernen müssen, zu programmieren. KI kann ein sehr nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jedes Problem, das Ihnen gestellt wird, in eine KI-Eingabe tippen, werden Sie nicht verstehen, wie etwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einem selbstbewussten, autoritativen Ton, können jedoch oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz – sie sind im Grunde fortschrittliche Werkzeuge zur Mustererkennung. KI-Tools kompilieren ihre Antworten aus anderen Quellen, die es gibt, und nehmen falsche Informationen genauso auf wie richtige Informationen. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten auf ältere und verbreitetere Dokumentationen ausgelegt sein, sodass "how to do X in JS" Ihnen möglicherweise veraltete Anleitungen gibt.

Daher müssen Sie vorsichtig sein und die Antworten, die sie Ihnen geben, überprüfen und nicht einfach alles ohne Frage vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie AI oder eine konventionelle Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Such-Tipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `how to print out the fibonacci sequence` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten – nicht ganz so hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, speichern Sie sie als Lesezeichen oder machen Sie eine Kopie davon irgendwo, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder eine AI-Eingabe einzugeben. Andere Leute werden wahrscheinlich das gleiche Problem in der Vergangenheit angegangen haben und Lösungen öffentlich irgendwo aufgezeichnet haben.
- Wenn möglich, bleiben Sie bei empfohlenen Websites wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern als nur das Eingeben eines einfachen Suchbegriffs. Das Eingeben eines einfachen Suchbegriffs wie `ant fish cheese` gibt Ergebnisse zurück, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Das Eingeben von `"ant fish cheese"` (mit den Anführungszeichen) liefert nur Ergebnisse, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` liefert Ergebnisse, die `ant` und/oder `cheese` aber nicht `fish` enthalten.
  - `ant OR cheese` gibt nur Ergebnisse mit einem der beiden Begriffe zurück, nicht beiden. Aus unseren Tests schien diese nur effektiv in Google zu funktionieren.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können – einige nützliche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Advanced search options](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
