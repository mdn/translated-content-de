---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 34e4f9a1e1d492f79d5b87709539df9b571419cc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel vertieft sich in die Nutzung von Browsern, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren Browser installiert haben, installieren Sie einige andere. Siehe [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers) für weitere Informationen.

Wie in jedem Wissensgebiet kommt das Web mit viel Fachjargon und technischen Begriffen. Keine Sorge: Wir werden Sie nicht von Anfang an mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) durchsuchen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen einige wichtige Begriffe unten vor.

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
          <li>Der Unterschied zwischen einem Webbrowser, einer Website und einer Suchmaschine.</li>
          <li>Wie ein Webbrowser auf grundlegender Ebene funktioniert.</li>
          <li>Nach Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neueinsteigern im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Webbrowser angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der Sprache {{Glossary("HTML", "HTML")}} geschrieben (auf die wir später noch genauer eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource gruppiert sind, mit Links, die sie miteinander verbinden. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchmaschinen direkt in der Suchleiste von Firefox, Chrome usw. durchsuchen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir ein Analogon — eine öffentliche Bibliothek. Dies ist das, was Sie normalerweise tun würden, wenn Sie eine Bibliothek besuchen:

1. Einen Suchindex finden und nach dem Titel des Buches suchen, das Sie wollen.
2. Die Katalognummer des Buches notieren.
3. Zur entsprechenden Abteilung gehen, die das Buch enthält, die richtige Katalognummer finden und das Buch holen.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was einem Webserver ähnelt, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht die gleichen Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel hat die Wissenschaftsabteilung (die Website) Bücher über Wärme, Klang, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am gleichen Ort aufbewahrt werden), der durch die Katalognummer spezifiziert ist.

Nehmen wir uns jetzt die Zeit, jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches, von einem Browser darstellbares Dokument. Eine Webseite kann eine Vielzahl unterschiedlicher Ressourcentypen einbetten, wie:

- _Stilinformationen_ — zur Steuerung des Aussehens und der Anmutung einer Seite.
- _Skripte_ — die Interaktivität zur Seite hinzufügen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können jeweils an einem einzigartigen Ort (Webadresse, auch {{Glossary("URL", "URL")}} genannt) gefunden werden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Adressleiste des Browsers](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblings-Websites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung verlinkter Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domänennamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meistens in Form von anklickbaren Textteilen — die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblings-Website in einem Browser laden, wird normalerweise zuerst die Hauptwebseite der Website oder _Homepage_ angezeigt (im Volksmund als "Startseite" bezeichnet):

![Beispiel eines Websitedomänennamens in der Adressleiste des Browsers](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, auf einige Menüpunkte oder Links zu klicken, um sich einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Einseiten-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und deren zugehörige Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseitendateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie zum Beispiel jemanden sagen hören, "Meine Website reagiert nicht", bedeutet das eigentlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, weshalb der Begriff _Webserver_ niemals zur Bezeichnung einer Website verwendet wird, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel würde es bedeuten, wenn wir sagten, "Mein Webserver reagiert nicht", dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generisch, einige sind auf bestimmte Themen spezialisiert.

Viele Einsteiger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klarstellen: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Leuten hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, da der Browser beim ersten Start oft die Startseite einer Suchmaschine oder ein Suchfeld zeigt, das ihnen erlaubt, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser ermöglichen es ihren Nutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das alles macht Sinn, denn das erste, was Menschen in der Regel mit einem Browser tun möchten, ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (der Suchmaschine).

Hier ist ein Beispiel von Firefox, das ein Google-Suchfeld als seine Standard-Startseite zeigt:

![Beispiel von Firefox nightly, das eine benutzerdefinierte Google-Seite als Standard darstellt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch, indem Sie:
>
> - Zu einer Suchmaschinen-Homepage gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso zu einem unverzichtbaren Werkzeug für unser tägliches Leben geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie einfach daran, wie oft Sie jeden Tag eine Website oder eine mobile App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist die Wahrscheinlichkeit hoch, dass die App, die Sie verwenden, wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und Drücken auf <kbd>Eingabe</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, auf die Sie zugreifen möchten, von dem Webserver an, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) erfolgen mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol), die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die weitere Antworten nach sich ziehen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er, sie zu parse, und findet wahrscheinlich Anweisungen, weitere Anfragen zu stellen. Wie bereits diskutiert, können diese für eingebettete Dateien wie Bilder, Stilinformationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor das Ergebnis dem Benutzer angezeigt wird.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber das ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Versuchen Sie jetzt, einen Webbrowser zu öffnen und einige Ihrer Lieblingswebsites zu laden, und denken Sie dabei an die oben beschriebenen Schritte.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen, sei es nach Syntax, die Sie sich nicht merken können, oder nach Lösungen für spezifische Probleme. Es ist daher eine gute Idee, effizient im Web zu suchen.

Wenn Sie nach allgemeinen Informationen zu einem bestimmten Webtechnologiemerkmal suchen, sollten Sie den Namen des Merkmals in das MDN-Suchfeld eingeben. Zum Beispiel versuchen Sie, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie nach, was herauskommt. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche auszuweiten — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, falls eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchvorgänge, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben enthalten haben.
> - Gehen Sie dann dazu über, nach einigen Themen zu suchen, über die Sie mehr erfahren möchten. Versuchen Sie, mehr oder weniger spezifische Suchvorgänge zu verwenden und verschiedene verwandte Begriffe auszuprobieren, um zu sehen, was am besten funktioniert.
> - Siehe unsere [Suchtipps](#suchtipps) für weitere Dinge, die Sie ausprobieren können.

### Verwendung von KI

Mit KI generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine superoptimierte Suche: Sie führen viele Suchen im Hintergrund durch, bevor sie die Ergebnisse zu einer einzigen, leicht verdaulichen Antwort zusammenstellen. Häufige Optionen sind [ChatGPT](https://chatgpt.com), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com), die entweder direkt in einem Chat-Format oder über KI-gestützte In-App-Hilfen oder Automatisierungssysteme zugänglich sind.

Beim Lernen, wie man programmiert, können KI-Chat-Anfragen auf verschiedene Weise nützlich sein:

- Durchführen konventioneller Suchen, wie oben in den Beispielen gezeigt.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in einen KI-Chat-Prompt einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Generieren einer optimierten Version eines bestimmten Codeblocks. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber Sie möchten herausfinden, wie er effizienter oder auf robustere Weise gemacht werden könnte, die mehr Anwendungsfälle abdeckt.
- Ratschläge geben, wie etwas zu tun ist. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock ist, sondern Ratschläge wünschen, welche Strategie zu wählen ist, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann KI so viel leisten, dass Sie vielleicht anfangen zu fragen, warum Sie programmieren lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene erreichen möchten, was der Code tut und wo jedes Stück Code verwendet werden muss**. Wenn Sie das nicht tun, werden Sie nicht sehr hilfreich sein, wenn es darum geht, reale Probleme zu lösen. Das bedeutet, dass Sie immer noch lernen müssen, zu programmieren. AI kann ein wirklich nützliches Werkzeug sein, um Ihnen zu helfen, schnellere Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, in ein KI-Eingabefeld eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Darüber hinaus:

- AI-Tools präsentieren ihre Antworten in einer zuversichtlichen, autoritativen Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine angeborene Intelligenz — sie sind im Grunde fortgeschrittene Mustererkennungswerkzeuge. AI-Tools erstellen ihre Antworten aus anderen Quellen und saugen dabei sowohl falsche als auch richtige Informationen auf. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu generieren, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten zu älterer und stärker verbreiteter Dokumentation verzerrt sein, sodass "wie man X in JS macht" möglicherweise veraltete Anleitungen liefert.

Daher müssen Sie vorsichtig sein, die Antworten, die sie Ihnen geben, zu überprüfen und nicht alles ohne Frage anzunehmen.

**Wenn Sie lernen, verbringen Sie Zeit damit, zu versuchen, das Problem selbst zu lösen, bevor Sie eine Antwort suchen, egal ob Sie eine KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `how to print out the fibonacci sequence` eingeben würden, würden Sie wahrscheinlich auf mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen stoßen — nicht ganz so hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie oder fertigen Sie eine Kopie an einem Ort an, an dem Sie sie später wiederfinden können. Sie werden überrascht sein, wie oft Sie auf das gleiche Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder ein KI-Prompt einzugeben. Andere Menschen haben wahrscheinlich schon mit demselben Fehler zu kämpfen gehabt und Lösungen irgendwo öffentlich festgehalten.
- Wenn möglich, halten Sie sich an empfohlene Websites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern als nur ein einfacher Suchbegriff. Das Eingeben eines einfachen Suchbegriffs wie `ant fish cheese` liefert Ergebnisse, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Wenn Sie `"ant fish cheese"` (mit Anführungszeichen) eingeben, werden nur Ergebnisse zurückgegeben, die diese genaue Phrase enthalten.
  - `"ant cheese" -fish` liefert Ergebnisse, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `and OR cheese` liefert nur Ergebnisse mit einem Begriff oder dem anderen, nicht beide. Nach unseren Tests schien dies nur effektiv in Google zu funktionieren.
  - `intitle:cheese` liefert nur Ergebnisse, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche anderen Sie finden können — einige nützliche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), und [Microsoft: Advanced search options](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
