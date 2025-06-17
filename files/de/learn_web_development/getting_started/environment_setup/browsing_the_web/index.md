---
title: Surfen im Internet
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt des Moduls sollten Sie bereits mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer auf die Nutzung von Browsern ein, indem er erklärt, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren, und wie Sie nach Informationen suchen können.

> [!NOTE]
> Falls Sie keine anderen Browser außer den standardmäßig mit Ihren Geräten gelieferten installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet kommt auch das Web mit viel Fachjargon und technischer Terminologie daher. Keine Sorge: Wir werden Sie nicht gleich zu Beginn mit allem überfrachten (falls Sie neugierig sind, können Sie im [Glossar](/de/docs/Glossary) nachsehen). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen unten einige wichtige Begriffe vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computerbetriebssystem.
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

Wir beginnen damit, verschiedene webbezogene Konzepte zu beschreiben: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neulingen oft verwechselt oder falsch verwendet. Stellen wir sicher, dass Sie wissen, was jeder dieser Begriffe bedeutet! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden oft einfach "Seiten" genannt. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache verfasst (auf die wir später noch detaillierter eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource gruppiert sind und durch Links miteinander verbunden sind. Oft einfach "Site" genannt.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste wären etwas, das Bilder verkleinert, einen Wetterbericht bereitstellt oder Benutzeranmeldungen verarbeitet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchmaschinensuchen direkt in der Adressleiste von Firefox, Chrome usw. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie — eine öffentliche Bibliothek. Dies würden Sie im Allgemeinen tun, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Abschnitt, in dem sich das Buch befindet, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was einem Webserver ähnelt, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht dieselben Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel wird die Abteilung Wissenschaft (die Website) Bücher über Wärme, Schall, Thermodynamik, menschliche Biologie usw. haben.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns jetzt die Zeit, jeden Begriff etwas detaillierter zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl von Ressourcen einbetten wie:

- _Stilinformationen_ — die das Aussehen einer Seite steuern.
- _Skripte_ — die Interaktivität zur Seite hinzufügen.
- _Medien_ — Bilder, Töne und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten sind jeweils an einem eindeutigen Ort (Webadresse, auch {{Glossary("URL", "URL")}} genannt) zu finden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Adressleiste des Browsers](web-page.jpg)

Versuchen Sie nun, eine Ihrer Lieblingswebsites in einem Browser zu laden, und bedenken Sie, was wir oben gesagt haben. Haben Sie die Webadresse selbst eingegeben oder sie mit einer Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen eindeutigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) gemeinsam haben. Jede Webseite einer bestimmten Website bietet explizite Links — meist in Form von anklickbarem Text —, die es dem Benutzer ermöglichen, von einer Seite der Website zur nächsten zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zuerst die Hauptwebseite der Website oder _Homepage_ angezeigt (umgangssprachlich als "Home" bezeichnet):

![Beispiel eines Websitedomänennamens in der Adressleiste des Browsers](web-site.jpg)

Versuchen Sie, einige Menüpunkte oder Links anzuklicken, um verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen. Beachten Sie, wie sich die angezeigte Webadresse ändert, wenn Sie zwischen den Seiten wechseln.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_einseitige App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird. In diesem Fall könnte sich die Webadresse nicht ändern, wenn verschiedene Seiten angezeigt werden.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet Dateien von Webseiten, die er hostet, an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ und _Webserver_ nicht. Wenn zum Beispiel jemand sagt: "Meine Website reagiert nicht", bedeutet das wahrscheinlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist.

Wichtiger ist, dass der Begriff _Webserver_ nicht mehr verwendet wird, um eine Website zu bezeichnen, da er Verwirrung stiften könnte. Wenn jemand sagt: "Mein Webserver reagiert nicht", könnte es sein, dass mehrere Websites oder Anwendungen, die auf dem Webserver gehostet werden, nicht verfügbar sind.

### Suchmaschine

Es kommt häufig vor, dass Menschen Suchmaschinen mit Websites verwechseln. Eine Suchmaschine ist eine spezielle Art von Webdienst, die Benutzern hilft, Webseiten zu finden, die sie interessieren, sowie bestimmte Arten von Inhalten wie Bilder, Videos oder Nachrichtenartikel.

Alle Suchmaschinen haben in der Regel ihre eigenen Websites, die dazu verwendet werden können, auf den zugrunde liegenden Webdienst zuzugreifen. Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind generisch, andere sind spezialisiert auf bestimmte Themen.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klarstellen:

- Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und normalerweise eine Website), der Menschen hilft, Webseiten auf anderen Websites zu finden.

Die Verwirrung entsteht, weil beim ersten Start eines Browsers häufig die Website einer Suchmaschine oder ein Suchfeld angezeigt wird, mit dem ein Suchbegriff über diese Suchmaschine gesucht werden kann. Die meisten Browser erlauben es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das macht alles Sinn, da die erste Sache, die die Leute normalerweise mit einem Browser tun wollen, darin besteht, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel von Firefox, das ein Google-Suchfeld als Standardstartseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

Versuchen Sie, mithilfe einer Suchmaschine Informationen zu einem Thema zu finden, das Sie interessiert:

1. Gehen Sie zur Homepage einer Suchmaschine und geben Sie einen Suchbegriff ein.
2. Geben Sie einen Suchbegriff in die Adressleiste des Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web zu einem genauso wichtigen Werkzeug in unserem Alltag geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie einfach daran, wie oft Sie täglich eine Website oder eine Mobiltelefon-App nutzen! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht die Möglichkeit, dass die App, die Sie nutzen, wahrscheinlich im Hintergrund Webtechnologie verwendet, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (zum Beispiel eine Webadresse (URL) in einen Browser einzugeben und <kbd>Enter</kbd>/<kbd>Return</kbd> zu drücken) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, auf die Sie zugreifen möchten, vom Webserver an, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) durchgeführt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was passieren soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er, sie zu analysieren und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu erstellen. Wie bereits oben erwähnt, könnten dies Dateien zum Einbetten sein, wie Bilder, Stilinformationen, Skripte und so weiter.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Sie finden eine detailliertere Darstellung, wie Webseiten von einem Webbrowser angefordert und gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, die Sie sich nicht merken können, bis zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie eine Website kennen, die sich auf das Thema spezialisiert hat, das Sie lernen, ist es oft eine gute Idee, dort zu beginnen.

Wenn Sie beispielsweise nach allgemeinen Informationen zu einer bestimmten Webtechnologiefunktion suchen, sollten Sie den Namen der Funktion in das MDN-Suchfeld eingeben. Versuchen Sie zum Beispiel, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was herauskommt. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein bestimmtes Problem suchen, wie z.B. `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com/) zu suchen, die sich darauf spezialisiert hat, Programmierprobleme zu beantworten. Versuchen Sie ebenfalls, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Seite Ihnen keine hilfreiche Antwort gibt.

Bevor Sie fortfahren, versuchen Sie, nach einigen Themen zu suchen, über die Sie gerne mehr lernen würden. Probieren Sie spezifischere und allgemeinere Suchen sowie verschiedene verwandte Begriffe aus, um herauszufinden, was am besten funktioniert. Siehe unsere [Suchtipps](#suchtipps) für weitere Dinge zum Ausprobieren.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Wesentlichen eine supermächtige Suche: Sie führen eine Menge Suchen im Hintergrund durch, bevor sie die Ergebnisse in eine einzige, leicht verdauliche Antwort zusammenfassen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt in einem Chat-Format oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme aufgerufen werden.

Beim Lernen von Programmierung können KI-Chat-Prompts auf verschiedene Weise nützlich sein:

- Durchführung konventioneller Suchen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in ein KI-Chat-Prompt einfügen, gefolgt von einer Frage wie `Where is the mistake in this code?`
- Generierung einer optimierten Version eines bestimmten Codeblocks. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber Sie wissen möchten, wie er effizienter oder robuster gemacht werden könnte, um mehr Anwendungsfälle abzudecken.
- Beratung, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen wollen, wo der Fehler in einem Codeblock liegt, sondern stattdessen einen Rat haben möchten, welche Strategie Sie zum Debuggen verwenden sollten.

Versuchen Sie, ein paar KI-Tools für Suchen zu nutzen.

### Eine Warnung

KI kann so viel, dass Sie sich fragen könnten, warum Sie noch Programmieren lernen müssen.

Aber warten Sie! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene zu tun versuchen, was der Code tut, und wo jedes Stück Code verwendet werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung von realen Problemen nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch Programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Sie gestellt bekommen, in ein KI-Prompt eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, können aber oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz — sie sind im Wesentlichen fortschrittliche Mustermatching-Tools. KI-Tools erstellen ihre Antworten aus anderen Quellen da draußen, sodass sie falsche Informationen genauso wie korrekte Informationen aufsaugen können. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erzeugen, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten können zu älteren und häufiger verbreiteten Dokumentationen tendieren, sodass "how to do X in JS" Ihnen möglicherweise veraltete Anleitungen gibt.

Aus diesem Grund müssen Sie vorsichtig sein und die Antworten, die sie Ihnen geben, überprüfen und nicht alles ohne Frage vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, sei es durch die Verwendung von KI oder einer herkömmlichen Suchmaschine. Das wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Programmiersprache, die Sie verwenden, in den Suchbegriff aufnehmen, wie in den obigen Beispielen gezeigt. Wenn Sie einfach `how to print out the fibonacci sequence` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten — das ist nicht sehr hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie oder machen Sie eine Kopie davon irgendwo, damit Sie sie später wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine spezifische Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder ein KI-Prompt einzugeben. Andere Leute haben wahrscheinlich bereits denselben Fehler in der Vergangenheit angegangen und öffentlich Lösungen irgendwo aufgezeichnet.
- Wenn möglich, bleiben Sie bei empfohlenen Seiten wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern werden als einfach nur einen Suchbegriff einzugeben. Wenn Sie einen einfachen Suchbegriff wie `ant fish cheese` eingeben, werden Ergebnisse angezeigt, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Syntaxmuster:

  - Das Eingeben von `"ant fish cheese"` (mit den Anführungszeichen) gibt nur Ergebnisse zurück, die genau diesen Ausdruck enthalten.
  - `ant cheese -fish` gibt Ergebnisse zurück, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` gibt nur Ergebnisse mit einem Begriff oder dem anderen zurück, nicht beide. Bei unseren Tests schien dieser nur in Google effektiv zu funktionieren.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche anderen es gibt — einige nützliche Ressourcen sind [Google-Suche verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [Wie man erweiterte Syntax auf DuckDuckGo Search nutzt](https://duckduckgo.com/duckduckgo-help-pages/results/syntax), und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
