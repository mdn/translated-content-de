---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Web-Browser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer darauf ein, wie man Browser verwendet, und betrachtet, wie ein Web-Browser funktioniert, den Unterschied zwischen einigen Alltagsbegriffen, mit denen Sie interagieren werden, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie über keine weiteren Browser als die Standardbrowser verfügen, die mit Ihren Geräten geliefert wurden, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Web-Browser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet kommt das Web mit viel Fachjargon und technischer Terminologie. Keine Sorge: Wir werden Sie nicht von Anfang an mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) einsehen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir führen unten einige wichtige Begriffe ein.

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
          <li>Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Web-Server und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Web-Server und Suchmaschinen. Diese Begriffe werden oft von Neueinsteigern ins Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir später näher betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst und durch Links miteinander verbunden sind. Oft als "Site" bezeichnet.
- **Web-Server**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Web-Server unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste sind Bildgröße ändern, Wetterbericht liefern oder Benutzeranmeldungen bearbeiten.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Web-Browser aufgerufen (z. B. können Sie Suchmaschinen direkt in der Adressleiste von Firefox, Chrome usw. durchsuchen) oder über eine Webseite (z. B. [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie — eine öffentliche Bibliothek. Das würden Sie im Allgemeinen tun, wenn Sie eine Bibliothek besuchen:

1. Einen Suchindex finden und nach dem Titel des Buches suchen, das Sie möchten.
2. Die Katalognummer des Buches notieren.
3. Zur betreffenden Abteilung gehen, die das Buch enthält, die richtige Katalognummer finden und das Buch holen.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Web-Server. Sie hat mehrere Abteilungen, was einem Web-Server entspricht, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht die gleichen Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel enthält die Wissenschaftsabteilung (die Website) Bücher über Wärme, Schall, Thermodynamik, menschliche Biologie usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Lassen Sie uns nun die Zeit nehmen, jeden Begriff etwas detaillierter zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl unterschiedlicher Ressourcentypen einbetten, wie zum Beispiel:

- _Stilinformationen_ — Steuerung des Erscheinungsbildes einer Seite.
- _Skripte_ — die Interaktivität zur Seite hinzufügen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem einzigartigen Ort (Webadresse, auch {{Glossary("URL", "URL")}} genannt) gefunden werden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Adressleiste des Browsers](web-page.jpg)

Versuchen Sie jetzt eine Ihrer Lieblingswebsites in einem Browser zu laden, wobei Sie das oben Gesagte beachten. Haben Sie die Web-Adresse selbst eingegeben oder mit einer Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus ihre zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meistens in Form von anklickbaren Textteilen —, die dem Benutzer erlauben, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird zunächst meistens die Hauptwebseite der Website oder die _Startseite_ angezeigt (umgangssprachlich als "Home" bezeichnet):

![Beispiel eines Website-Domainnamens in der Adressleiste des Browsers](web-site.jpg)

Versuchen Sie, auf einige Menüelemente oder Links zu klicken, um sich einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen. Beachten Sie, wie sich die angezeigte Webadresse ändert, wenn Sie zwischen den Seiten wechseln.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird. Falls dies der Fall ist, könnte sich die Webadresse nicht ändern, wenn verschiedene Seiten angesehen werden.

### Web-Server

Ein _Web-Server_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Web-Server_ sendet Webseitendateien, die er hostet, an einen Benutzerbrowser, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ und _Web-Server_ nicht. Wenn Sie zum Beispiel jemanden sagen hören "Meine Website reagiert nicht", bedeutet das wahrscheinlich, dass der _Web-Server_ nicht reagiert und daher die _Website_ nicht verfügbar ist.

Wichtiger ist, dass ein Web-Server mehrere Websites hosten kann, weshalb der Begriff _Web-Server_ nicht mehr verwendet wird, um eine Website zu bezeichnen, da dies Verwirrung stiften könnte. Wenn jemand sagt "Mein Web-Server reagiert nicht", kann es sein, dass mehrere Websites oder Anwendungen, die auf dem Web-Server gehostet werden, nicht verfügbar sind.

### Suchmaschine

Es ist üblich, dass Menschen Suchmaschinen mit Websites verwechseln. Eine Suchmaschine ist eine spezielle Art von Webdienst, die Benutzern hilft, Webseiten zu finden, die sie interessieren, sowie bestimmte Arten von Inhalten wie Bilder, Videos oder Nachrichtenartikel.

Suchmaschinen haben in der Regel ihre eigenen Websites, die verwendet werden können, um auf den zugrunde liegenden Webdienst zuzugreifen. Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/), und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie es uns klarstellen:

- Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und in der Regel eine Website), der Menschen hilft, Webseiten auf anderen Websites zu finden.

Die Verwirrung entsteht, weil der Browser beim ersten Start oft die Website-Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es ihnen ermöglicht, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser erlauben ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Brower-Adressleiste eingeben.

Das alles ergibt Sinn, da das Erste, was Menschen mit einem Browser tun wollen, ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie also nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel für Firefox, das eine Google-Suchbox als Standard-Startseite anzeigt:

![Beispiel für Firefox Nightly mit einer benutzerdefinierten Google-Seite als Standard](search-engine.jpg)

Versuchen Sie, eine Suchmaschine zu verwenden, um Informationen zu einem Thema zu finden, das Sie interessiert, indem Sie:

1. Zur Startseite einer Suchmaschine gehen und einen Suchbegriff eingeben.
2. Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web ein ebenso wichtiges Werkzeug geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das für Sie unrealistisch klingt, denken Sie nur daran, wie oft Sie jeden Tag eine Website oder eine mobile App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um Inhalte oder Dienste abzurufen, ist die Wahrscheinlichkeit groß, dass die von Ihnen verwendete App wahrscheinlich Webtechnologie im Hintergrund nutzt, um Daten abzurufen und Ihnen anzuzeigen.

Wenn Sie auf das Web zugreifen, passiert zwischen Ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und das Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser) eine Menge:

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, die Sie vom Webserver, auf dem sie gespeichert ist, aufrufen möchten. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gemacht, die eine Sprache der Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort an den Webbrowser zurück, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser, sie zu parsen, und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu machen. Wie oben diskutiert, könnten diese Dateien zum Einbetten von Inhalten wie Bilder, Stilinformationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert wurden, parst und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

## Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen, sei es zur Syntax, die Sie sich nicht merken können, oder zur Lösung spezifischer Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie eine Website kennen, die sich auf das Thema spezialisiert, das Sie erlernen, ist es oft eine gute Idee, dort zu beginnen.

Wenn Sie zum Beispiel allgemeine Informationen über ein bestimmtes Webtechnologiemerkmal suchen, sollten Sie den Namen des Merkmals in das MDN-Suchfeld eingeben. Geben Sie zum Beispiel `box model`, `fetch()` oder `video element` in das Suchfeld ein und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `wie man die Fibonacci-Sequenz mit JavaScript ausgibt` oder `wie man berechnet, ob eine Zahl mit JavaScript eine Primzahl ist`, sollten Sie auf einer Website wie [StackOverflow](https://stackoverflow.com/) suchen, die sich der Beantwortung von Programmierfragen widmet. Versuchen Sie erneut die Nutzung einer allgemeinen Suchmaschine, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

Bevor Sie fortfahren, versuchen Sie, nach einigen Themen zu suchen, über die Sie mehr erfahren möchten. Probieren Sie sowohl spezifischere als auch allgemeinere Suchen und verschiedene verwandte Begriffe aus, um herauszufinden, was am besten funktioniert. Sehen Sie sich unsere [Suchtipps](#suchtipps) für weitere Anregungen an.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie liefern im Grunde eine Super-Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse zu einer einzelnen, leicht verdaulichen Antwort zusammenstellen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), auf die entweder direkt im Chat-Format oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme zugegriffen wird.

Beim Erlernen des Programmierens können KI-Chat-Eingaben auf verschiedene Weise nützlich sein:

- Konventionelle Suchen wie die oben genannten durchführen.
- Fehler in einem Codeblock identifizieren. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in ein KI-Chat-Eingabefeld einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber herausfinden möchten, wie er effizienter oder robuster für mehr Anwendungsfälle gemacht werden könnte.
- Beratung geben, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen wollen, wo der Fehler in einem Codeblock liegt, sondern stattdessen Rat suchen, welche Strategie zur Fehlerbehebung verwendet werden soll.

Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

KI kann so viel leisten, dass Sie sich vielleicht fragen, warum Sie überhaupt Programmieren lernen sollten.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer höheren Ebene tun wollen, was der Code tut und wo jeder Codeabschnitt verwendet werden muss**. Andernfalls werden Sie nicht sehr nützlich sein, wenn es darum geht, reale Probleme zu lösen. Das bedeutet, dass Sie immer noch Programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in eine KI-Eingabe eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Des Weiteren:

- KI-Tools präsentieren ihre Antworten in einem selbstbewussten, autoritären Ton, können jedoch oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine angeborene Intelligenz — sie sind im Grunde fortgeschrittene Musterabgleichswerkzeuge. KI-Tools sammeln ihre Antworten aus anderen Quellen, daher nehmen sie sowohl falsche als auch korrekte Informationen auf. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu geben, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten auf ältere und verbreitetere Dokumentationen verzerrt sein, sodass "wie man X in JS macht" Ihnen möglicherweise veraltete Ratschläge gibt.

Daher müssen Sie vorsichtig sein, die Antworten zu überprüfen, die sie Ihnen geben, und nichts blind vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `wie man die Fibonacci-Sequenz ausgibt` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten — das ist nicht sehr hilfreich, wenn Sie JavaScript lernen!
- Wenn Sie eine nützliche Antwort finden, markieren oder speichern Sie sie irgendwo, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf das gleiche Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, die Fehlermeldung in eine Suchmaschine oder ein KI-Eingabefeld einzugeben. Andere Menschen haben das gleiche Problem wahrscheinlich in der Vergangenheit bereits gelöst und die Lösungen öffentlich irgendwo dokumentiert.
- Halten Sie sich möglichst an empfohlene Websites wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können und die Ihnen bessere Ergebnisse liefern als das bloße Eingeben eines einfachen Suchbegriffs. Das Eingeben eines einfachen Suchbegriffs wie `Ameise Fisch Käse` wird Ergebnisse liefern, die jede Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Syntaxmuster:

  - Das Eingeben von `"Ameise Fisch Käse"` (mit Anführungszeichen) liefert nur Ergebnisse, die genau diese Phrase enthalten.
  - `Ameise Käse -Fisch` wird Ergebnisse liefern, die `Ameise` und/oder `Käse` aber nicht `Fisch` enthalten.
  - `Ameise ODER Käse` wird nur Ergebnisse mit einem der beiden Begriffe, nicht beiden gleichzeitig liefern. Nach unseren Tests funktionierte dies nur effektiv bei Google.
  - `intitle:Käse` wird nur Ergebnisse liefern, die "Käse" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen anwenden können. Versuchen Sie herauszufinden, welche anderen Sie finden können — einige nützliche Ressourcen sind [Verfeinerte Google-Suchen](https://support.google.com/websearch/answer/2466433?hl=en), [Erweiterte Syntax in der DuckDuckGo-Suche verwenden](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
