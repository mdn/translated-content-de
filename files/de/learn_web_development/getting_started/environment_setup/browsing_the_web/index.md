---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel vertieft den Umgang mit Browsern, erklärt, wie ein Webbrowser funktioniert, unterscheidet zwischen einigen Begriffen, die Sie regelmäßig verwenden werden, und zeigt, wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn Sie über keinen Browser jenseits der Standardbrowser, die mit Ihren Geräten geliefert wurden, verfügen, installieren Sie weitere. Siehe [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers) für weitere Informationen.

Wie in jedem Wissensgebiet gibt es im Web viel Fachjargon und technische Terminologie. Keine Sorge: Wir werden Sie nicht gleich zu Beginn mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) konsultieren, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen einige wichtige Begriffe unten vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computer-Betriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine kennen.</li>
          <li>Grundlegendes Verständnis, wie ein Webbrowser funktioniert.</li>
          <li>Suchstrategien für Informationen beherrschen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Begriffe: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Web-Neulingen häufig verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie verstehen, was sie bedeuten. Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden oft einfach als „Seiten“ bezeichnet. Solche Dokumente werden in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir später noch genauer betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource gruppiert sind und durch Links miteinander verbunden sind. Oft als „Seite“ bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie z. B. Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (z. B. können Sie Suchanfragen direkt in der Adressleiste von Firefox, Chrome usw. ausführen) oder über eine Webseite (z. B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir hierzu eine Analogie – eine öffentliche Bibliothek. In einer Bibliothek würden Sie generell Folgendes tun:

1. Ein Suchverzeichnis finden und nach dem Titel des gewünschten Buches suchen.
2. Die Katalognummer des Buches notieren.
3. Den entsprechenden Abschnitt der Bibliothek aufsuchen, die richtige Katalognummer finden und das Buch entnehmen.

Vergleichen wir nun eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek entspricht einem Webserver. Sie hat mehrere Abschnitte, was einem Webserver ähnelt, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek entsprechen Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht dieselben Bücher).
- Die Bücher in jedem Abschnitt entsprechen Webseiten. Eine Website kann mehrere Webseiten haben, z. B. enthält der Wissenschaftsabschnitt (die Website) Bücher zu Wärme, Schall, Thermodynamik, Statik usw.
- Das Suchverzeichnis entspricht der Suchmaschine. Jedes Buch hat einen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort stehen), der durch die Katalognummer angegeben wird.

Sehen wir uns nun jeden Begriff etwas genauer an.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann verschiedene Arten von Ressourcen einbetten, wie z. B.:

- _Stilinformationen_ – zur Steuerung des Erscheinungsbildes einer Seite.
- _Skripte_ – die der Seite Interaktivität hinzufügen.
- _Medien_ – Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Jede Webseite kann unter einer eindeutigen Adresse (Webadresse, auch als {{Glossary("URL", "URL")}} bezeichnet) gefunden werden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Laden Sie eine Ihrer Lieblingswebsites jetzt in einem Browser.

### Website

Eine _Website_ ist eine Sammlung von miteinander verknüpften Webseiten (zusätzlich zu den zugehörigen Ressourcen), die einen eindeutigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meistens in der Form von anklickbaren Textabschnitten –, die es dem Nutzer ermöglichen, von einer Seite der Website zu einer anderen zu navigieren.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zunächst die Hauptwebseite der Website oder die _Homepage_ angezeigt (im Alltag oft „Home“ genannt):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Klicken Sie auf einige Menüeinträge oder Links, um verschiedene Seiten Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. „Hosten“ bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die Dateien der von ihm gehosteten Webseiten an den Browser eines Nutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie zum Beispiel jemanden sagen hören: „Meine Website reagiert nicht“, bedeutet das eigentlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger: Da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ niemals verwendet, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel würde die Aussage „Mein Webserver reagiert nicht“ bedeuten, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Nutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generell, andere auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen mit Browsern. Lassen Sie uns das klarstellen: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Nutzern hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht oft, weil Browser beim ersten Start häufig die Startseite einer Suchmaschine oder ein Suchfeld anzeigen, das es Nutzern ermöglicht, einen Suchbegriff direkt einzugeben. Die meisten Browser erlauben es ihren Nutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste eingeben.

Das macht Sinn, da die erste Aktion, die viele Menschen mit einem Browser durchführen, oft das Auffinden einer anzuzeigenden Webseite ist. Verwechseln Sie aber nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel eines Firefox-Browsers, der eine Google-Suchbox als Standard-Startseite zeigt:

![Beispiel von Firefox Nightly mit einer benutzerdefinierten Google-Seite als Standard](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch:
>
> - Besuchen Sie die Homepage einer Suchmaschine und geben Sie einen Suchbegriff ein.
> - Geben Sie einen Suchbegriff in die Adressleiste Ihres Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web ebenso ein unverzichtbares Werkzeug in unserem Alltag geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das unrealistisch klingt, denken Sie einfach daran, wie oft Sie täglich eine Website oder eine mobile App nutzen! Selbst wenn Sie keine Webadresse in einen Browser eingeben, verwendet die von Ihnen genutzte App wahrscheinlich Webtechnologie, um Daten im Hintergrund abzurufen und anzuzeigen.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (z. B. das Eingeben einer Webadresse (URL) in einen Browser und Drücken der Taste <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis, das Ihnen angezeigt wird (z. B. die Anzeige der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (z. B. eine Webseite, einige Daten oder ein Bild oder Video) an, auf die Sie zugreifen möchten, von dem Webserver an, auf dem sie gespeichert ist. Solche Anforderungen (und die daraus resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) durchgeführt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was passieren soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort mit der angeforderten Ressource an den Webbrowser zurück.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, was zu weiteren Antworten führt. Zum Beispiel:
   1. Beim Laden einer Website wird zunächst die Haupt-HTML-Datei der Startseite der Website angefordert.
   2. Nach Erhalt dieser Datei beginnt der Browser, sie zu analysieren. Wahrscheinlich findet er darin Anweisungen für weitere Anforderungen, z. B. Dateien zum Einbetten wie Bilder, Stilinformationen, Skripte usw.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie wie erforderlich, bevor er das Ergebnis dem Nutzer anzeigt.

Diese Beschreibung der Funktionsweise des Webs ist stark vereinfacht, aber für den Moment reicht dieses Wissen aus. Eine detailliertere Erklärung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem Modul [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards), welches später behandelt wird.

Für jetzt können Sie einen Webbrowser öffnen und einige Ihrer Lieblingsseiten laden. Denken Sie dabei an die oben genannten Schritte.

## Nach Informationen suchen

Als Webentwickler verbringen Sie viel Zeit mit der Suche nach Informationen, sei es, um eine Syntax zu finden, die Sie sich nicht merken können, oder um spezifische Probleme zu lösen. Es ist daher ratsam, zu lernen, wie das Web effektiv durchsucht werden kann.

Wenn Sie allgemeine Informationen zu einer spezifischen Webtechnologie suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Zum Beispiel: Geben Sie `box model`, `fetch()` oder `video element` ein und sehen Sie, welche Ergebnisse erscheinen. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie Ihre Suchbegriffe in einer Suchmaschine.

Wenn Sie eine Lösung für ein spezifisches Problem suchen, wie z. B. `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es sinnvoll, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, einer Community, die sich der Beantwortung von Programmierproblemen widmet. Auch hier kann Ihnen eine allgemeine Suchmaschine helfen, wenn eine spezifische Seite keine hilfreiche Antwort liefert.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Testen Sie einige oben genannte Suchen:
>
> - Beginnen Sie mit der Suche nach den genau angegebenen Begriffen.
> - Suchen Sie danach nach Themen, die Sie interessieren. Probieren Sie spezifischere und allgemeinere Suchanfragen aus, und nutzen Sie verschiedene verwandte Begriffe, um herauszufinden, was am besten funktioniert.
> - Siehe unsere [Suchtipps](#suchtipps) für weitere Anregungen.

### Nutzung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Wesentlichen eine hochentwickelte Suche: Sie führen viele Suchen im Hintergrund durch, bevor sie die Ergebnisse in einer einzigen, leicht verdaulichen Antwort zusammenstellen. Bekannte Optionen sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt in einem Chat-Format oder über KI-gestützte Hilfe- oder Automatisierungssysteme in Apps verfügbar sind.

Beim Programmieren lernen können KI-Chat-Eingabeaufforderungen auf verschiedene Weise nützlich sein:

- Konventionelle Suchanfragen stellen, wie in den obigen Beispielen.
- Bugfindung in einem Codeblock. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Eingabeaufforderung einfügen, mit einer Frage wie `Where is the mistake in this code?`.
- Einen optimierten Codeblock generieren. Dies ist nützlich, wenn Sie einen funktionierenden Code geschrieben haben, aber wissen wollen, wie er effizienter oder robuster gestaltet werden könnte.
- Ratschläge geben, wie etwas gemacht werden kann. Wenn Sie z. B. nicht nur wissen wollen, wo der Fehler liegt, sondern wissen möchten, welche Strategie zum Debugging geeignet ist.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Testen Sie einige Suchen mit KI-Tools.

### Eine vorsichtige Betrachtung

In Wahrheit kann KI so viel, dass man sich fragen könnte, warum man überhaupt noch programmieren lernen muss.

Doch aufgepasst! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer höheren Ebene erreichen wollen, was der Code bewirkt und wo jedes Code-Stück verwendet werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung von Problemen in der realen Welt nicht hilfreich sein. Das bedeutet, dass Sie immer noch programmieren lernen müssen. KI kann ein äußerst nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage direkt in eine KI-Eingabeaufforderung eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Zusätzlich:

- KI-Tools präsentieren ihre Antworten in einem selbstbewussten, autoritären Ton, können jedoch oft irreführend oder schlichtweg falsch sein. Einige ihrer Fehler können sehr subtil sein. Sie besitzen keine eigene Intelligenz – sie sind im Wesentlichen fortgeschrittene Mustererkennungstools. KI-Tools erstellen ihre Antworten aus bestehenden Quellen, sodass sie falsche sowie richtige Informationen aufnehmen. Sogar zwei korrekte Quellen können zu einer falschen Antwort kombiniert werden.
- Neuere Informationen könnten fehlen oder Antworten könnten zu älterer und weiter verbreiteter Dokumentation verzerrt sein. Eine Anfrage wie „how to do X in JS“ könnte Ihnen veraltete Anleitungen liefern.

Daher sollten Sie die von KI bereitgestellten Antworten sorgfältig prüfen und nicht alles ungeprüft als richtig akzeptieren.

**Wenn Sie lernen, nehmen Sie sich die Zeit, selbst eine Lösung zu finden, bevor Sie nach einer Antwort suchen, sei es durch KI oder eine herkömmliche Suchmaschine. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `how to print out the fibonacci sequence` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten – nicht besonders hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine hilfreiche Antwort finden, setzen Sie ein Lesezeichen oder machen Sie eine Kopie davon, damit Sie sie später wiederfinden. Sie werden überrascht sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung liefert, versuchen Sie, den Fehler in eine Suchmaschine oder KI-Eingabeaufforderung einzugeben. Andere haben wahrscheinlich schon dieselbe Fehlermeldung erlebt und die Lösung öffentlich niedergeschrieben.
- Wenn möglich, halten Sie sich an empfohlene Seiten wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele fortgeschrittene Suchtechniken, die Ihnen in Suchmaschinen bessere Ergebnisse liefern können, als einfach nur einen einfachen Suchbegriff einzugeben. Wenn Sie z. B. einen einfachen Suchbegriff wie `ant fish cheese` eingeben, erhalten Sie Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Wenn Sie `"ant fish cheese"` (mit Anführungszeichen) eingeben, werden nur Ergebnisse zurückgegeben, die exakt diese Phrase enthalten.
  - `"ant cheese" -fish` gibt Ergebnisse zurück, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` gibt nur Ergebnisse mit einem der Begriffe oder dem anderen zurück, nicht mit beiden. In unseren Tests schien dies jedoch nur in Google effektiv zu funktionieren.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" in den Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Schauen Sie nach, welche Sie sonst noch finden können – einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=de), [Wie man erweiterte Syntax in DuckDuckGo verwendet](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/de-de/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
