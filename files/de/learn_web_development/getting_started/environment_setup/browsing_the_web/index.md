---
title: Im Web surfen
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An dieser Stelle des Moduls sollten auf Ihrem Computer oder anderen verfügbaren Geräten mehrere moderne Webbrowser installiert sein. Dieser Artikel befasst sich eingehender mit der Nutzung von Browsern: Sie erfahren, wie ein Webbrowser funktioniert, worin sich einige Dinge unterscheiden, mit denen Sie täglich zu tun haben, und wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn auf Ihren Geräten außer den vorinstallierten Browsern keine weiteren installiert sind, installieren Sie einige zusätzliche Browser. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie jedes Wissensgebiet bringt auch das Web viel Fachjargon und technische Begriffe mit sich. Keine Sorge: Wir werden Sie nicht gleich zu Beginn mit allen Begriffen überhäufen. Wenn Sie neugierig sind, können Sie im [Glossar](/de/docs/Glossary) nachschlagen. Einige grundlegende Begriffe sollten Sie jedoch von Anfang an kennen, da sie Ihnen immer wieder begegnen werden. Im Folgenden stellen wir einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser grundsätzlich funktioniert.</li>
          <li>Nach Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Zunächst beschreiben wir verschiedene Begriffe rund um das Web: Webseiten, Websites, Webserver und Suchmaschinen. Wer neu im Web ist, verwechselt diese Begriffe häufig oder verwendet sie falsch. Sehen wir uns daher an, was sie jeweils bedeuten. Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Solche Dokumente werden auch einfach „Seiten“ genannt. Sie sind in der Sprache {{Glossary("HTML", "HTML")}} geschrieben, die wir uns später genauer ansehen.
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer gemeinsamen Ressource gehören und durch Links miteinander verbunden sind. Sie wird oft auch „Site“ genannt.
- **Webserver**
  - : Ein Computer, der eine Website im Internet bereitstellt.
- **Webdienst**
  - : Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Hinter einem Webdienst steht üblicherweise ein Webserver. Er kann Webseiten bereitstellen, über die Nutzer mit ihm interagieren. Viele Websites sind zugleich Webdienste; manche Websites, etwa MDN, bestehen allerdings nur aus statischen Inhalten. Beispiele für Webdienste sind Dienste, die Bilder skalieren, Wetterberichte bereitstellen oder die Anmeldung von Nutzern abwickeln.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, beispielsweise Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser genutzt. Sie können beispielsweise direkt in der Adressleiste von Firefox, Chrome und anderen Browsern suchen oder eine Webseite wie [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/) aufrufen.

Betrachten wir als Vergleich eine öffentliche Bibliothek. Bei einem Bibliotheksbesuch würden Sie normalerweise Folgendes tun:

1. Einen Suchkatalog finden und nach dem Titel des gewünschten Buches suchen.
2. Die Signatur des Buches notieren.
3. Zum entsprechenden Bereich gehen, anhand der Signatur das Buch finden und es aus dem Regal nehmen.

Vergleichen wir nun die Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Bereiche, ähnlich wie ein Webserver mehrere Websites bereitstellt.
- Die verschiedenen Bereiche der Bibliothek (Naturwissenschaften, Mathematik, Geschichte usw.) sind wie Websites. Jeder Bereich ist eine eigene Website: Zwei Bereiche enthalten nicht dieselben Bücher.
- Die Bücher in den einzelnen Bereichen sind wie Webseiten. Eine Website kann mehrere Webseiten haben. So enthält der Bereich Naturwissenschaften (die Website) beispielsweise Bücher über Wärme, Schall, Thermodynamik, Humanbiologie und weitere Themen.
- Der Suchkatalog ist wie eine Suchmaschine. Jedes Buch hat einen eindeutigen Standort in der Bibliothek – zwei Bücher können nicht am selben Platz stehen –, der durch seine Signatur angegeben wird.

Sehen wir uns nun die einzelnen Begriffe etwas genauer an.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das ein Browser anzeigen kann. Sie kann verschiedene Arten von Ressourcen einbinden, zum Beispiel:

- _Stilinformationen_ – sie bestimmen das Erscheinungsbild der Seite.
- _Skripte_ – sie machen die Seite interaktiv.
- _Medien_ – Bilder, Ton und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien sowie Ressourcen wie Bilder oder Videos anzeigen. Der Begriff **Webseite** bezeichnet jedoch speziell HTML-Dokumente.

Jede Webseite ist unter einer eindeutigen Adresse zu finden (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um eine Seite aufzurufen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für die Adresse einer Webseite in der Adressleiste des Browsers](web-page.jpg)

Rufen Sie jetzt eine Ihrer Lieblingswebsites in einem Browser auf und denken Sie dabei an das oben Beschriebene. Haben Sie die Webadresse selbst eingegeben oder die Website mithilfe einer Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung miteinander verlinkter Webseiten und zugehöriger Ressourcen, die einen gemeinsamen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) haben. Jede Webseite einer Website enthält direkte Links – meist in Form anklickbarer Textstellen –, über die Nutzer von einer Seite der Website zu einer anderen gelangen können.

Wenn Sie Ihre Lieblingswebsite in einem Browser aufrufen, wird normalerweise zuerst ihre Hauptseite oder _Startseite_ angezeigt (auch „Homepage“ genannt):

![Beispiel für den Domainnamen einer Website in der Adressleiste des Browsers](web-site.jpg)

Klicken Sie auf einige Menüpunkte oder Links, um verschiedene Seiten Ihrer Lieblingswebsite anzusehen. Beachten Sie, wie sich die angezeigte Webadresse beim Wechsel zwischen den Seiten ändert.

> [!NOTE]
> Eine Website kann auch eine {{Glossary("SPA", "_Single-Page-App_")}} sein: Sie besteht dann aus nur einer Webseite, deren Inhalt bei Bedarf dynamisch aktualisiert wird. In diesem Fall ändert sich die Webadresse möglicherweise nicht, wenn Sie verschiedene Ansichten aufrufen.

### Webserver

Ein _Webserver_ ist ein Computer, auf dem eine oder mehrere _Websites_ bereitgestellt werden. Das bedeutet, dass alle _Webseiten_ und die zugehörigen Dateien auf diesem Computer verfügbar sind. Wenn ein Nutzer eine Webseite aufruft, sendet der _Webserver_ die entsprechenden Dateien an dessen Browser.

Verwechseln Sie _Websites_ nicht mit _Webservern_. Wenn beispielsweise jemand sagt: „Meine Website antwortet nicht“, bedeutet das wahrscheinlich, dass der _Webserver_ nicht antwortet und die _Website_ deshalb nicht verfügbar ist.

Ein Webserver kann mehrere Websites bereitstellen. Deshalb sollte der Begriff _Webserver_ nicht als Bezeichnung für eine Website verwendet werden, da dies zu Verwechslungen führen kann. Wenn jemand sagt: „Mein Webserver antwortet nicht“, sind möglicherweise mehrere Websites oder Anwendungen, die auf diesem Webserver bereitgestellt werden, nicht verfügbar.

### Suchmaschine

Suchmaschinen werden häufig mit Websites verwechselt. Eine Suchmaschine ist eine besondere Art von Webdienst, der Nutzern hilft, interessante Webseiten sowie bestimmte Arten von Inhalten wie Bilder, Videos oder Nachrichtenartikel zu finden.

Suchmaschinen haben in der Regel eigene Websites, über die ihr Webdienst genutzt werden kann. Es gibt zahlreiche Suchmaschinen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele weitere. Manche sind allgemein ausgerichtet, andere auf bestimmte Themen spezialisiert.

Viele Menschen, die neu im Web sind, verwechseln Suchmaschinen und Browser. Der Unterschied ist:

- Ein _Browser_ ist eine Software, die Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und üblicherweise auch eine Website), der Menschen hilft, Webseiten auf anderen Websites zu finden.

Die Verwechslung entsteht, weil ein Browser beim ersten Start häufig die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, über das sich mit dieser Suchmaschine nach Begriffen suchen lässt. In den meisten Browsern können Nutzer außerdem Suchbegriffe direkt in die Adressleiste eingeben.

Das ist sinnvoll, denn wer einen Browser öffnet, möchte häufig zunächst eine Webseite finden, die angezeigt werden soll. Verwechseln Sie dabei nicht die Software (den Browser) mit dem Dienst (der Suchmaschine).

Hier sehen Sie Firefox mit einem Google-Suchfeld als standardmäßiger Startseite:

![Beispiel für Firefox Nightly mit einer angepassten Google-Seite als Standardstartseite](search-engine.jpg)

Suchen Sie mithilfe einer Suchmaschine nach Informationen zu einem Thema, das Sie interessiert:

1. Rufen Sie die Startseite einer Suchmaschine auf und geben Sie einen Suchbegriff ein.
2. Geben Sie einen Suchbegriff in die Adressleiste des Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web für den Alltag so unverzichtbar geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das übertrieben erscheint, überlegen Sie, wie oft Sie täglich eine Website oder eine Smartphone-App nutzen! Selbst wenn Sie keine Webadresse in einen Browser eingeben, um auf Inhalte oder Dienste zuzugreifen, verwendet die App, die Sie gerade nutzen, wahrscheinlich im Hintergrund Webtechnologien, um die angezeigten Daten abzurufen.

Wenn Sie auf das Web zugreifen, geschieht zwischen Ihrer ersten Aktion – beispielsweise der Eingabe einer Webadresse (URL) in einen Browser und dem Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> – und dem angezeigten Ergebnis, etwa einer Website im Browser, eine ganze Menge:

1. Der Webbrowser fordert die gewünschte Ressource – beispielsweise eine Webseite, Daten, ein Bild oder ein Video – bei dem Webserver an, auf dem sie gespeichert ist. Für solche Anfragen und die zugehörigen Antworten wird eine Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) verwendet. HTTP verwendet Verben wie **GET**, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort mit der angeforderten Ressource an den Webbrowser zurück.
3. In manchen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, auf die weitere Antworten folgen. Zum Beispiel:
   1. Beim Laden einer Website wird zunächst die zentrale HTML-Indexdatei ihrer Startseite angefordert.
   2. Sobald der Browser diese Datei erhalten hat, beginnt er, sie zu analysieren. Dabei findet er wahrscheinlich Anweisungen für weitere Anfragen. Wie oben beschrieben, können diese Dateien betreffen, die eingebunden werden sollen, etwa Bilder, Stilinformationen oder Skripte.
4. Nachdem alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf und zeigt anschließend das Ergebnis an.

Diese Beschreibung der Funktionsweise des Webs ist stark vereinfacht, enthält aber alles, was Sie an dieser Stelle wissen müssen. Eine ausführlichere Erklärung dazu, wie ein Webbrowser Webseiten anfordert und rendert, finden Sie etwas später in unserem Modul [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards).

## Nach Informationen suchen

In der Webentwicklung werden Sie viel Zeit damit verbringen, nach Informationen zu suchen: von einer Syntax, an die Sie sich nicht mehr erinnern, bis hin zu Lösungen für bestimmte Probleme. Deshalb lohnt es sich, zu lernen, wie Sie effektiv im Web suchen.

Wenn Sie eine Website kennen, die auf das Thema spezialisiert ist, mit dem Sie sich beschäftigen, ist sie häufig ein guter Ausgangspunkt.

Wenn Sie beispielsweise allgemeine Informationen zu einer bestimmten Funktion einer Webtechnologie suchen, geben Sie deren Namen in das Suchfeld von MDN ein. Probieren Sie etwa `box model`, `fetch()` oder `video element` aus und sehen Sie sich die Ergebnisse an. Wenn Sie die benötigten Informationen nicht finden, weiten Sie die Suche aus und verwenden Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie eine Lösung für ein konkretes Problem suchen, etwa `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, können Sie auf einer Website wie [Stack Overflow](https://stackoverflow.com/) suchen. Dort beantwortet eine Community Fragen zu Programmierproblemen. Wenn Sie auf einer bestimmten Website keine hilfreiche Antwort finden, versuchen Sie es auch hier mit einer allgemeinen Suchmaschine.

Bevor Sie fortfahren, suchen Sie nach einigen Themen, über die Sie gerne mehr erfahren möchten. Probieren Sie unterschiedlich genaue Suchanfragen und verschiedene verwandte Begriffe aus, um herauszufinden, was am besten funktioniert. Weitere Anregungen finden Sie in unseren [Suchtipps](#suchtipps).

### KI verwenden

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie funktionieren im Grunde wie eine leistungsstarke Suche: Im Hintergrund werden viele Suchanfragen durchgeführt und die Ergebnisse anschließend zu einer einzigen, leicht verständlichen Antwort zusammengefasst. Häufig verwendete Angebote sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.com/). Sie können direkt als Chat oder über KI-gestützte Hilfefunktionen und Automatisierungssysteme in Anwendungen genutzt werden.

Wenn Sie Programmieren lernen, können Anfragen an einen KI-Chat auf verschiedene Weise hilfreich sein:

- Für gewöhnliche Suchanfragen wie in den obigen Beispielen.
- Um Fehler in einem Codeabschnitt zu finden. Wenn Ihr Code nicht funktioniert und Sie nicht weiterkommen, können Sie ihn in einen KI-Chat einfügen und eine Frage wie `Where is the mistake in this code?` voranstellen.
- Um eine optimierte Version eines bestimmten Codeabschnitts zu erzeugen. Das kann nützlich sein, wenn Sie funktionierenden Code geschrieben haben, aber wissen möchten, wie er sich effizienter oder robuster gestalten lässt, sodass er mehr Anwendungsfälle abdeckt.
- Um Ratschläge zum Vorgehen zu erhalten. Vielleicht möchten Sie beispielsweise nicht nur wissen, wo der Fehler in einem Codeabschnitt liegt, sondern auch, mit welcher Strategie Sie ihn finden können.

Probieren Sie einige Suchanfragen mit zwei verschiedenen KI-Werkzeugen aus.

### Ein Wort der Warnung

KI kann so viel, dass Sie sich vielleicht fragen, warum Sie überhaupt noch programmieren lernen sollten.

Aber Vorsicht! Folgendes ist wichtig: **Sie müssen weiterhin grundsätzlich verstehen, was Sie erreichen möchten, was der Code tut und wo die einzelnen Codeabschnitte eingesetzt werden müssen**. Ohne dieses Verständnis können Sie reale Probleme kaum lösen. Sie müssen also weiterhin programmieren lernen. KI kann ein sehr nützliches Werkzeug sein, um schneller Antworten zu finden. Wenn Sie aber jede Frage, die Ihnen gestellt wird, einfach an eine KI weitergeben, werden Sie nicht verstehen, wie die Dinge funktionieren.

Hinzu kommt:

- KI-Werkzeuge formulieren ihre Antworten selbstsicher und bestimmt, können aber irreführend oder schlicht falsch sein. Manche ihrer Fehler sind sehr schwer zu erkennen. Sie besitzen keine eigene angeborene Intelligenz, sondern sind im Grunde fortgeschrittene Werkzeuge zur Mustererkennung. KI-Werkzeuge stellen ihre Antworten aus anderen Quellen zusammen und übernehmen dabei sowohl falsche als auch richtige Informationen. Selbst zwei korrekte Quellen können so kombiniert werden, dass eine falsche Antwort entsteht.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten orientieren sich eher an älterer, weiter verbreiteter Dokumentation. Eine Suche nach „how to do X in JS“ könnte Ihnen deshalb veraltete Empfehlungen liefern.

Prüfen Sie daher die Antworten, die Sie erhalten, sorgfältig, statt ihnen vorbehaltlos zu vertrauen.

**Wenn Sie lernen, versuchen Sie zunächst eine Weile, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen – unabhängig davon, ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Dadurch werden Sie besser in der Entwicklung.**

### Suchtipps

- Nehmen Sie die verwendete Programmiersprache in den Suchbegriff auf, wie in den obigen Beispielen. Wenn Sie nur `how to print out the fibonacci sequence` eingeben, erhalten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen. Das hilft Ihnen wenig, wenn Sie gerade JavaScript lernen möchten!
- Wenn Sie eine hilfreiche Antwort finden, setzen Sie ein Lesezeichen oder speichern Sie eine Kopie an einem Ort, an dem Sie sie später wiederfinden. Sie werden überrascht sein, wie oft Ihnen dasselbe Problem erneut begegnet.
- Wenn Ihr Code eine bestimmte Fehlermeldung ausgibt, geben Sie diese in eine Suchmaschine oder einen KI-Chat ein. Wahrscheinlich haben sich andere bereits mit demselben Fehler beschäftigt und irgendwo öffentlich Lösungen festgehalten.
- Halten Sie sich nach Möglichkeit an empfohlene Websites wie MDN und [Stack Overflow](https://stackoverflow.com/).
- Mit erweiterten Suchtechniken können Sie in Suchmaschinen bessere Ergebnisse erzielen, als wenn Sie lediglich einen einfachen Suchbegriff eingeben. Eine Suche nach `ant fish cheese` liefert Ergebnisse, die beliebige Kombinationen dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Varianten der folgenden Syntaxmuster:
  - Eine Suche nach `"ant fish cheese"` (mit Anführungszeichen) liefert nur Ergebnisse, die genau diese Wortfolge enthalten.
  - `ant cheese -fish` liefert Ergebnisse, die `ant` und/oder `cheese` enthalten, aber nicht `fish`.
  - `ant OR cheese` liefert nur Ergebnisse mit dem einen oder dem anderen Begriff, nicht mit beiden. In unseren Tests schien dies nur bei Google zuverlässig zu funktionieren.
  - `intitle:cheese` liefert nur Ergebnisse, bei denen „cheese“ im Haupttitel der Seite steht.

  > [!NOTE]
  > Es gibt viele weitere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Finden Sie heraus, welche es noch gibt. Hilfreiche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Advanced search options](https://support.microsoft.com/en-us/bing/advanced-search-options).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
