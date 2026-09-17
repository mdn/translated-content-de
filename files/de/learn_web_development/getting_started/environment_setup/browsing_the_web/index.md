---
title: Im Web surfen
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel beschäftigt sich eingehender mit der Verwendung von Browsern: wie ein Webbrowser funktioniert, mit dem Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und damit, wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren Browser installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie jeder Wissensbereich bringt auch das Web viel Fachjargon und technische Terminologie mit sich. Keine Sorge: Wir werden Sie nicht gleich zu Beginn mit all dem überfordern (bei Interesse können Sie das [Glossar](/de/docs/Glossary) nachschlagen). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Im Folgenden stellen wir einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegender Ebene funktioniert.</li>
          <li>Nach Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener Konzepte rund um das Web: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neueinsteigern im Web oft verwechselt oder falsch verwendet. Stellen wir sicher, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden oft auch einfach als „Seiten“ bezeichnet. Solche Dokumente werden in der Sprache {{Glossary("HTML", "HTML")}} geschrieben (die wir später noch genauer betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst und durch Links miteinander verbunden sind. Oft auch „Site“ genannt.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzende interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste wären etwas, das Bilder in der Größe verändert, einen Wetterbericht bereitstellt oder die Benutzeranmeldung verarbeitet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, etwa Google, Bing, Yahoo oder DuckDuckGo. Auf Suchmaschinen wird normalerweise über einen Webbrowser zugegriffen (Sie können beispielsweise Suchanfragen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (beispielsweise [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie — eine öffentliche Bibliothek. Dies würden Sie im Allgemeinen bei einem Bibliotheksbesuch tun:

1. Einen Suchindex finden und nach dem Titel des gewünschten Buchs suchen.
2. Die Katalognummer des Buchs notieren.
3. Zum entsprechenden Bereich gehen, der das Buch enthält, die richtige Katalognummer finden und das Buch nehmen.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Bereiche, ähnlich wie ein Webserver mehrere Websites hostet.
- Die verschiedenen Bereiche (Naturwissenschaften, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Bereich ist wie eine eigene Website (zwei Bereiche enthalten nicht dieselben Bücher).
- Die Bücher in jedem Bereich sind wie Webseiten. Eine Website kann mehrere Webseiten haben; beispielsweise enthält der Bereich Naturwissenschaften (die Website) Bücher über Wärme, Schall, Thermodynamik, menschliche Biologie usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen eindeutigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns nun etwas Zeit, um jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann verschiedene Arten von Ressourcen einbetten, beispielsweise:

- _Stilinformationen_ — steuern das Erscheinungsbild einer Seite.
- _Skripte_ — fügen der Seite Interaktivität hinzu.
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten sind jeweils an einem eindeutigen Ort auffindbar (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

Versuchen Sie jetzt, eine Ihrer Lieblingswebsites in einem Browser zu laden, und berücksichtigen Sie dabei das oben Gesagte. Haben Sie die Webadresse selbst eingegeben oder sie mithilfe einer Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung verlinkter Webseiten (einschließlich der zugehörigen Ressourcen), die einen eindeutigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) gemeinsam haben. Jede Webseite einer bestimmten Website enthält explizite Links — meist in Form anklickbarer Textabschnitte — die es Benutzenden ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zuerst die Hauptwebseite der Website angezeigt, die _Startseite_ (umgangssprachlich auch „Home“ genannt):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

Versuchen Sie, einige Menüelemente oder Links anzuklicken, um verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen. Beachten Sie, wie sich die angezeigte Webadresse verändert, wenn Sie zwischen Seiten wechseln.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird. In diesem Fall ändert sich die Webadresse möglicherweise nicht, wenn unterschiedliche Seiten angezeigt werden.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosting“ bedeutet, dass alle _Webseiten_ und die zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseitendateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ und _Webserver_ nicht. Wenn Sie beispielsweise jemanden sagen hören: „Meine Website reagiert nicht“, bedeutet das wahrscheinlich, dass der _Webserver_ nicht reagiert und die _Website_ daher nicht verfügbar ist.

Noch wichtiger ist, dass der Begriff _Webserver_ nicht mehr verwendet wird, um eine Website zu bezeichnen, da ein Webserver mehrere Websites hosten kann und dies zu Verwirrung führen könnte. Wenn jemand sagt: „Mein Webserver reagiert nicht“, kann es sein, dass mehrere auf dem Webserver gehostete Websites oder Anwendungen nicht verfügbar sind.

### Suchmaschine

Es kommt häufig vor, dass Menschen Suchmaschinen mit Websites verwechseln. Eine Suchmaschine ist eine besondere Art von Webdienst, der Benutzenden hilft, Webseiten zu finden, die sie interessieren, sowie bestimmte Arten von Inhalten wie Bilder, Videos oder Nachrichtenartikel.

Suchmaschinen haben in der Regel jeweils eigene Websites, über die auf den zugrunde liegenden Webdienst zugegriffen werden kann. Es gibt sehr viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele weitere. Einige sind allgemein gehalten, andere auf bestimmte Themen spezialisiert.

Viele Web-Einsteiger verwechseln Suchmaschinen und Browser. Stellen wir es klar:

- Ein _Browser_ ist eine Software, die Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und in der Regel auch eine Website), der Menschen hilft, Webseiten auf anderen Websites zu finden.

Die Verwirrung entsteht, weil ein Browser beim ersten Start oft die Startseite der Website einer Suchmaschine oder ein Suchfeld anzeigt, über das mit dieser Suchmaschine nach einem Begriff gesucht werden kann. Die meisten Browser erlauben ihren Benutzenden außerdem, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das ergibt Sinn, denn das Erste, was Menschen mit einem Browser tun möchten, ist in der Regel, eine Webseite zum Anzeigen zu finden. Verwechseln Sie die Software (den Browser) nicht mit dem Dienst (der Suchmaschine).

Hier sehen Sie ein Beispiel, in dem Firefox ein Google-Suchfeld als Standardstartseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

Versuchen Sie, mithilfe einer Suchmaschine Informationen zu einem Thema zu finden, das Sie interessiert:

1. Rufen Sie die Startseite einer Suchmaschine auf und geben Sie einen Suchbegriff ein.
2. Geben Sie einen Suchbegriff in die Adressleiste des Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web für unseren Alltag genauso unverzichtbar geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Falls Ihnen das unrealistisch erscheint, denken Sie einfach daran, wie oft Sie täglich eine Website oder eine Mobiltelefon-App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, verwendet die App, die Sie nutzen, wahrscheinlich im Hintergrund Webtechnologie, um Daten abzurufen und sie Ihnen zu präsentieren.

Wenn Sie auf das Web zugreifen, geschieht zwischen Ihrer ersten Interaktion (beispielsweise der Eingabe einer Webadresse (URL) in einen Browser und dem Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und der Anzeige des Ergebnisses Ihrer Aktion (beispielsweise dem Erscheinen der Website in Ihrem Webbrowser) ziemlich viel:

1. Der Webbrowser fordert die Ressource (beispielsweise eine Webseite, einige Daten oder ein Bild bzw. Video), auf die Sie zugreifen möchten, von dem Webserver an, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden mithilfe einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) ausgeführt, die eine Sprache aus Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort mit der angeforderten Ressource an den Webbrowser zurück.
3. In einigen Fällen löst die angeforderte Ressource anschließend weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Beispiel:
   1. Beim Laden einer Website wird zunächst die HTML-Hauptindexdatei der Startseite der Website angefordert.
   2. Wenn der Browser diese Datei erhalten hat, beginnt er, sie zu analysieren, und findet wahrscheinlich Anweisungen für weitere Anfragen. Wie oben erläutert, können diese Dateien zum Einbetten betreffen, etwa Bilder, Stilinformationen, Skripte usw.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung der Funktionsweise des Webs ist stark vereinfacht, aber zu diesem Zeitpunkt ist das alles, was Sie wirklich wissen müssen. Eine ausführlichere Darstellung dazu, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie etwas später in unserem Modul [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards).

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen — von Syntax, an die Sie sich nicht erinnern können, bis zu Lösungen für bestimmte Probleme. Daher ist es eine gute Idee, zu lernen, wie Sie effektiv im Web suchen.

Wenn Sie eine Website kennen, die auf das Thema spezialisiert ist, über das Sie lernen, ist es oft eine gute Idee, dort zu beginnen.

Wenn Sie beispielsweise allgemeine Informationen über ein bestimmtes Merkmal einer Webtechnologie suchen, sollten Sie den Namen des Merkmals in das MDN-Suchfeld eingeben. Versuchen Sie beispielsweise, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben, und sehen Sie, was angezeigt wird. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein bestimmtes Problem suchen, etwa `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [Stack Overflow](https://stackoverflow.com/) zu suchen, einer Community, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie auch hier, eine allgemeine Suchmaschine zu verwenden, wenn Ihnen eine bestimmte Website keine hilfreiche Antwort liefert.

Bevor Sie fortfahren, versuchen Sie, nach einigen Themen zu suchen, über die Sie gerne etwas lernen würden. Probieren Sie spezifischere und weniger spezifische Suchanfragen sowie verschiedene verwandte Begriffe aus, um herauszufinden, was am besten funktioniert. Weitere Vorschläge finden Sie in unseren [Suchtipps](#suchtipps).

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Grunde eine leistungsstarke Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse zu einer einzigen, leicht verständlichen Antwort zusammenstellen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), auf die entweder direkt in einem Chatformat oder über KI-gestützte Hilfe- oder Automatisierungssysteme in Anwendungen zugegriffen wird.

Beim Erlernen des Programmierens können KI-Chat-Prompts auf verschiedene Weise nützlich sein:

- Herkömmliche Suchvorgänge durchführen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in einen KI-Chat-Prompt einfügen und ihm eine Frage wie `Where is the mistake in this code?` voranstellen.
- Eine optimierte Version eines bestimmten Codeblocks generieren. Das kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber herausfinden möchten, wie er effizienter oder robuster umgesetzt werden könnte, um mehr Anwendungsfälle abzudecken.
- Ratschläge dazu geben, wie etwas gemacht werden kann. Beispielsweise, wenn Sie nicht nur wissen möchten, wo sich der Fehler in einem Codeblock befindet, sondern stattdessen Ratschläge dazu möchten, welche Strategie Sie zum Debuggen verwenden sollten.

Versuchen Sie, mit einigen KI-Tools Suchvorgänge durchzuführen.

### Eine warnende Geschichte

KI kann so viel, dass Sie sich vielleicht fragen, warum Sie überhaupt programmieren lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen weiterhin auf einer übergeordneten Ebene verstehen, was Sie erreichen möchten, was der Code tut und wo jeder Codeabschnitt verwendet werden muss**. Andernfalls werden Sie bei der Lösung realer Probleme nicht besonders nützlich sein. Das bedeutet, dass Sie weiterhin programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in einen KI-Prompt eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einem selbstsicheren, autoritativen Ton, aber sie können oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie besitzen keine eigene angeborene Intelligenz — im Grunde sind sie fortgeschrittene Werkzeuge zur Mustererkennung. KI-Tools stellen ihre Antworten aus anderen verfügbaren Quellen zusammen und übernehmen daher sowohl falsche als auch korrekte Informationen. Sogar zwei korrekte Quellen können zu einer falschen Antwort kombiniert werden.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten sind zugunsten älterer und weiter verbreiteter Dokumentationen verzerrt. Daher könnte „how to do X in JS“ Ihnen veraltete Hinweise liefern.

Daher müssen Sie die Antworten, die sie Ihnen geben, sorgfältig überprüfen und dürfen nicht einfach alles ungefragt glauben.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen — unabhängig davon, ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Das wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die von Ihnen verwendete Sprache in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `how to print out the fibonacci sequence` eingeben, erhalten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — nicht besonders hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, setzen Sie ein Lesezeichen oder erstellen Sie irgendwo eine Kopie davon, damit Sie sie später wiederfinden können. Sie werden überrascht sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder einen KI-Prompt einzugeben. Andere Personen haben sich wahrscheinlich bereits in der Vergangenheit mit demselben Fehler beschäftigt und Lösungen irgendwo öffentlich dokumentiert.
- Bleiben Sie nach Möglichkeit bei empfohlenen Websites wie MDN und [Stack Overflow](https://stackoverflow.com/).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können und die bessere Ergebnisse liefern als die bloße Eingabe eines einfachen Suchbegriffs. Die Eingabe eines einfachen Suchbegriffs wie `ant fish cheese` liefert Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Varianten der folgenden Syntaxmuster:
  - Die Eingabe von `"ant fish cheese"` (mit Anführungszeichen) liefert nur Ergebnisse, die genau diese Wortgruppe enthalten.
  - `ant cheese -fish` liefert Ergebnisse, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` liefert nur Ergebnisse mit dem einen oder dem anderen Begriff, nicht mit beiden. Nach unseren Tests schien dies nur bei Google effektiv zu funktionieren.
  - `intitle:cheese` liefert nur Ergebnisse, deren Haupttitel der Seite „cheese“ enthält.

  > [!NOTE]
  > Es gibt viele weitere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche weiteren Sie finden können — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [Verwendung der erweiterten Syntax bei der DuckDuckGo-Suche](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/bing/advanced-search-options).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
