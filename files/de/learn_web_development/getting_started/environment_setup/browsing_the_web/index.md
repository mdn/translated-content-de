---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer darauf ein, wie man Browser verwendet, wie ein Webbrowser funktioniert, die Unterschiede zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren Browser installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich gibt es auch im Web viel Fachjargon und technische Begriffe. Keine Sorge: Wir werden Sie nicht gleich zu Anfang mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) nachschlagen, wenn Sie neugierig sind). Einige grundlegende Begriffe müssen Sie jedoch von Anfang an verstehen, da Sie diese Ausdrücke ständig hören werden. Wir stellen unten einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem.
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

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neueinsteigern oft verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden oft einfach "Seiten" genannt. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (die wir später detaillierter betrachten).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind, mit Links, die sie miteinander verbinden. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die Anfragen über das Internet beantwortet, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, aber einige Websites (wie z. B. MDN) bestehen nur aus statischem Inhalt. Beispiele für Webdienste wären etwas, das Bilder verkleinert, einen Wetterbericht bereitstellt oder Benutzern die Anmeldung ermöglicht.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchmaschinen direkt in der Adressleiste von Firefox, Chrome usw. durchsuchen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Schauen wir uns eine Analogie an — eine öffentliche Bibliothek. Dies ist, was Sie normalerweise tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des gewünschten Buches.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zum entsprechenden Abschnitt, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir nun eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was ähnlich ist wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht die gleichen Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel die Wissenschaftsabteilung (die Website) wird Bücher über Wärme, Schall, Thermodynamik, Statik usw. haben.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat einen eindeutigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben ist.

Lassen Sie uns nun jeden Begriff etwas detaillierter betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl von verschiedenen Ressourcentypen einbetten wie:

- _Stilinformationen_ — die das Aussehen und Verhalten einer Seite steuern.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können jeweils an einem eindeutigen Standort gefunden werden (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um auf eine Seite zuzugreifen, tippen Sie einfach deren Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel für eine Webadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Laden Sie jetzt eine Ihrer Lieblingswebsites in einem Browser.

### Website

Eine _Website_ ist eine Sammlung von verlinkten Webseiten (plus ihren zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links – meist in Form von anklickbaren Textteilen –, die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird zuerst die Hauptwebseite oder _Startseite_ der Website angezeigt (umgangssprachlich "Home" genannt):

![Beispiel für einen Website-Domainnamen in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Klicken Sie auf einige Menüelemente oder Links, um einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf mit neuem Inhalt dynamisch aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet vom Benutzer angeforderte Webseiten-Dateien an dessen Browser, wenn dieser versucht, sie zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie beispielsweise jemanden sagen hören: "Meine Website reagiert nicht", bedeutet dies, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass ein Webserver mehrere Websites hosten kann, sodass der Begriff _Webserver_ niemals verwendet wird, um eine Website zu bezeichnen, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel würde die Aussage "Mein Webserver reagiert nicht" bedeuten, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/), und viele mehr. Einige sind generisch, einige sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klären: Ein _Browser_ ist eine Software, die Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil, wenn jemand einen Browser zum ersten Mal startet, dieser oft die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es dem Benutzer ermöglicht, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser erlauben ihren Benutzern auch, eine Suchmaschine zu benutzen, indem sie Suchbegriffe direkt in die Browser-Adressleiste eingeben.

Das macht alles Sinn, da die erste Aktion, die Menschen mit einem Browser vornehmen möchten, darin besteht, eine Webseite zu finden, um sie anzuzeigen. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel, bei dem Firefox eine Google-Suchbox als Standard-Startseite anzeigt:

![Beispiel für Firefox Nightly, das eine angepasste Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch:
>
> - Gehen Sie zur Startseite einer Suchmaschine und geben Sie einen Suchbegriff ein.
> - Geben Sie einen Suchbegriff in die Browser-Adressleiste ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web zu einem ebenso unverzichtbaren Werkzeug in unserem Alltag geworden wie Besteck, Fahrräder, Autos oder Zahnbürsten. Falls das für Sie unrealistisch klingt, denken Sie nur daran, wie oft Sie jeden Tag eine Website oder eine App auf Ihrem Handy verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um Inhalte oder Dienste zu nutzen, besteht die Möglichkeit, dass die von Ihnen verwendete App wahrscheinlich Webtechnologie hinter den Kulissen nutzt, um Ihnen Daten zu präsentieren.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (z. B. das Eingeben einer Webadresse (URL) in einen Browser und das Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (z. B. das Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die von Ihnen gewünschte Ressource (z. B. eine Webseite, einige Daten oder ein Bild oder Video) vom Webserver an, auf dem sie gespeichert ist. Solche Anfragen (und die resultierenden Antworten) werden mithilfe einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gestellt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was passieren soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen wird die angeforderte Ressource weitere HTTP-Anfragen auslösen, was zu weiteren Antworten führt. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser mit dem Parsen und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu stellen. Wie oben besprochen, könnten diese für einzubettende Dateien wie Bilder, Stilinformationen, Skripte usw. sein.
4. Sobald alle Ressourcen angefordert wurden, parst und rendert der Webbrowser sie nach Bedarf, bevor das Ergebnis dem Benutzer angezeigt wird.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber sie ist alles, was Sie wirklich wissen müssen. Eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Für den Moment, versuchen Sie, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, und denken Sie dabei an die oben genannten Schritte.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen, von Syntax, an die Sie sich nicht erinnern können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen über ein bestimmtes Webtechnologie-Feature suchen, sollten Sie den Namen des Features in das MDN-Suchfeld eingeben. Zum Beispiel, versuchen Sie `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie, Ihre Suche zu erweitern – versuchen Sie Ihr Suchwort in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie z. B. `wie man die Fibonacci-Sequenz mit JavaScript ausgibt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com) zu suchen, die einer Community gewidmet ist, die Programmierprobleme löst. Versuchen Sie auch hier, eine allgemeine Suchmaschine zu verwenden, wenn eine bestimmte Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchen, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben aufgeführt haben.
> - Gehen Sie dann über dazu, nach einigen Themen zu suchen, über die Sie gerne mehr lernen möchten. Versuchen Sie, mehr oder weniger spezifische Suchen und verschiedene verwandte Begriffe auszuprobieren, um herauszufinden, was am besten funktioniert.
> - Siehe unsere [Suche-Tipps](#suche-tipps) für weitere Dinge, die Sie ausprobieren können.

### KI nutzen

Durch KI generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine superpowered Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse zu einer einzigen, leicht verständlichen Antwort zusammenfassen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app), und [Microsoft Copilot](https://copilot.microsoft.com/), entweder direkt im Chat-Format oder über KI-gestützte In-App-Hilfen oder Automatisierungssysteme abrufbar.

Beim Lernen von Code können KI-Chat-Aufforderungen auf verschiedene Weise nützlich sein:

- Konventionelle Suchen durchführen, wie die oben genannten Beispiele.
- Bugs in einem Codeblock identifizieren. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in eine KI-Chat-Aufforderung einfügen, und die Frage stellen, z. B. `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Das kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber Sie herausfinden möchten, wie er effizienter gestaltet werden könnte oder robuster für mehr Anwendungsfälle.
- Ratschläge geben, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen wollen, wo der Fehler in einem Codeblock liegt, sondern auch, welche Strategie Sie anwenden sollen, um ihn zu debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann KI so viel, dass Sie sich vielleicht fragen, warum Sie das Programmieren überhaupt lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf einer höheren Ebene zu tun versuchen, was der Code macht und wo jeder Codebaustein verwendet werden muss**. Wenn Sie das nicht tun, werden Sie beim Versuch, reale Probleme zu lösen, wahrscheinlich nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch lernen müssen, wie man programmiert. KI kann ein wirklich nützliches Werkzeug sein, um Ihnen zu helfen, schneller Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, in eine KI-Aufforderung eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritären Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz – sie sind im Grunde fortgeschrittene Mustererkennungswerkzeuge. KI-Tools kompilieren ihre Antworten aus anderen Quellen da draußen, daher werden sie auch falsche Informationen ebenso wie richtige Informationen aufsaugen. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die inkorrekt ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten können zu älterer und weiter verbreiteter Dokumentation tendieren, sodass „wie man X in JS macht“ Ihnen möglicherweise veraltete Anleitungen gibt.

Deshalb müssen Sie vorsichtig sein, die Antworten zu überprüfen, die sie Ihnen geben, und nicht alles unbesehen zu glauben.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suche-Tipps

- Sie sollten die Sprache, die Sie verwenden, im Suchbegriff enthalten, wie in den obigen Beispielen gezeigt. Wenn Sie einfach `wie man die Fibonacci-Sequenz ausgibt` eingeben würden, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten — nicht ganz so hilfreich, wenn Sie versuchen, JavaScript zu lernen!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie oder machen Sie eine Kopie davon irgendwo, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder eine KI-Aufforderung einzugeben. Andere Leute werden sich wahrscheinlich bereits mit demselben Fehler auseinandergesetzt und öffentlich irgendwo Lösungen aufgezeichnet haben.
- Wenn möglich, bleiben Sie bei empfohlenen Websites wie MDN und [StackOverflow](https://stackoverflow.com).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern, als nur einen einfachen Suchbegriff einzugeben. Wenn Sie einen einfachen Suchbegriff wie `Ameise Fisch Käse` eingeben, werden Ergebnisse angezeigt, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Wenn Sie `"Ameise Fisch Käse"` (mit den Anführungszeichen) eingeben, werden nur Ergebnisse angezeigt, die genau diesen Ausdruck enthalten.
  - `"Ameise Käse" -Fisch` liefert Ergebnisse, die `Ameise` und/oder `Käse`, aber nicht `Fisch` enthalten.
  - `Ameise OR Käse` liefert nur Ergebnisse mit einem der beiden Begriffe, nicht beiden gleichzeitig. Unserer Erfahrung nach schien dies nur in Google effektiv zu funktionieren.
  - `intitle:Käse` liefert nur Ergebnisse, die "Käse" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
