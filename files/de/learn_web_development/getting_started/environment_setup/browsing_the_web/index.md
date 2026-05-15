---
title: Surfen im Internet
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer auf die Nutzung von Browsern ein, indem er untersucht, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen der alltäglichen Dinge, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen können.

> [!NOTE]
> Wenn Sie außer den Standard-Browsern, die mit Ihren Geräten geliefert wurden, keine weiteren installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensgebiet geht das Web mit viel Fachsprache und technischer Terminologie einher. Keine Sorge: Wir überhäufen Sie nicht gleich zu Beginn mit allem (Sie können im [Glossar](/de/docs/Glossary) nachschauen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen einige wichtige Begriffe unten vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem.
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

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neulingen im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was sie bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden auch oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später ausführlicher eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind, mit Links, die sie miteinander verbinden. Häufig als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste sind etwas, das Bilder verkleinert, einen Wetterbericht bereitstellt oder Benutzeranmeldungen verwaltet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie in der Adressleiste von Firefox, Chrome usw. direkt Suchmaschinensuchen durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Schauen wir uns ein Gleichnis an — eine öffentliche Bibliothek. So würden Sie allgemein vorgehen, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem bestimmten Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abschnitte, das ist ähnlich wie ein Webserver, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht dieselben Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel hat der Wissenschaftsabschnitt (die Website) Bücher über Wärme, Schall, Thermodynamik, menschliche Biologie usw.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Platz aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns jetzt die Zeit, jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl verschiedener Ressourcentypen einbetten, wie etwa:

- _Gestaltungsinformationen_ — die den Look-and-Feel einer Seite bestimmen.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Sounds und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem eindeutigen Standort gefunden werden (Webadresse, auch als {{Glossary("URL", "URL")}} bezeichnet). Um eine Seite zu erreichen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

Versuchen Sie, eine Ihrer Lieblingswebsites jetzt mit einem Browser zu laden, und bedenken Sie, was wir oben gesagt haben. Haben Sie die Webadresse selbst eingegeben oder sie mithilfe einer Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer gegebenen Website bietet explizite Links — meist in Form von klickbaren Textabschnitten — die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zuerst die Hauptwebseite der Website, oder _Homepage_ (ungezwungen als "Home" bezeichnet), angezeigt:

![Beispiel eines Websiten-Domainnamens in der Browser-Adressleiste](web-site.jpg)

Versuchen Sie, einige Menüelemente oder Links anzuklicken, um einige verschiedene Seiten auf Ihrer Lieblingswebsite zu betrachten. Beachten Sie, wie sich die angezeigte Webadresse ändert, wenn Sie zwischen den Seiten wechseln.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird. In diesem Fall könnte sich die Webadresse nicht ändern, wenn unterschiedliche Seiten angezeigt werden.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosten" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseiten-Dateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ und _Webserver_ nicht. Wenn Sie jemanden sagen hören, "Meine Website reagiert nicht", bedeutet das wahrscheinlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist.

Wichtiger ist, dass ein Webserver mehrere Websites hosten kann. Der Begriff _Webserver_ wird daher nicht mehr verwendet, um eine Website zu bezeichnen, da dies zu Verwirrung führen könnte. Wenn jemand sagt "Mein Webserver reagiert nicht", können mehrere Websites oder Anwendungen, die auf dem Webserver gehostet werden, nicht verfügbar sein.

### Suchmaschine

Es ist häufig der Fall, dass Menschen Suchmaschinen mit Websites verwechseln. Eine Suchmaschine ist eine spezielle Art von Webdienst, der Benutzern hilft, Webseiten zu finden, an denen sie interessiert sind, sowie spezielle Inhalte wie Bilder, Videos oder Nachrichtenartikel.

Suchmaschinen haben alle in der Regel eigene Websites, die verwendet werden können, um auf den zugrundeliegenden Webdienst zuzugreifen. Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, einige sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Machen wir es klar:

- Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und normalerweise eine Website), der Menschen hilft, auf anderen Websites enthaltene Webseiten zu finden.

Die Verwirrung entsteht, weil der Browser beim ersten Start oft die Website-Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es ermöglicht, über diese Suchmaschine nach einem Begriff zu suchen. Die meisten Browser erlauben es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das alles ergibt Sinn, weil das erste, was Menschen mit einem Browser tun möchten, normalerweise eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel dafür, wie Firefox eine Google-Suchbox als Standardstartseite anzeigt:

![Beispiel dafür, dass Firefox Nightly eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

Versuchen Sie, mit einer Suchmaschine Informationen zu einem Thema zu finden, das Sie interessiert:

1. Gehen Sie zur Startseite einer Suchmaschine und geben Sie einen Suchbegriff ein.
2. Geben Sie einen Suchbegriff in die Adressleiste des Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web zu einem ebenso unverzichtbaren Werkzeug in unserem täglichen Leben geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie einfach darüber nach, wie oft Sie jeden Tag eine Website oder eine mobile App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist es wahrscheinlich, dass die App, die Sie nutzen, im Hintergrund wahrscheinlich Webtechnologien verwendet, um Daten abzurufen und Ihnen bereitzustellen.

Wenn Sie auf das Web zugreifen, passiert zwischen Ihrer ersten Interaktion (z. B. Eingabe einer Webadresse (URL) in einen Browser und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (z. B. das Erscheinen der Website in Ihrem Webbrowser), eine Menge:

1. Der Webbrowser fordert das gewünschte Resource (z. B. eine Webseite, einige Daten oder ein Bild oder Video) vom Webserver an, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gemacht, die eine Sprache aus Verben (z. B. **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen wird die angeforderte Ressource weitere HTTP-Anfragen auslösen, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Hauptindex-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er, sie zu parsen, und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu stellen. Wie oben diskutiert, könnten diese für einzubettende Dateien wie Bilder, Gestaltungsinformationen, Skripte usw. sein.
4. Wenn alle Ressourcen angefordert wurden, parst und rendert der Webbrowser sie nach Bedarf, bevor das Ergebnis dem Benutzer angezeigt wird.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie an diesem Punkt wirklich wissen müssen. Im [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später im Kurs, werden Sie eine detailliertere Darstellung erhalten, wie Webseiten von einem Webbrowser angefordert und gerendert werden.

## Informationen suchen

Als Webentwickler werden Sie viel Zeit mit der Suche nach Informationen verbringen, von Syntaxen, an die Sie sich nicht erinnern können, bis zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie eine Website kennen, die sich auf das Thema spezialisiert, über das Sie lernen, ist es oft eine gute Idee, dort zu beginnen.

Zum Beispiel, wenn Sie allgemeine Informationen über ein bestimmtes Webtechnologie-Feature suchen, sollten Sie den Namen des Features in das MDN-Suchfeld eingeben. Versuchen Sie zum Beispiel, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was herauskommt. Wenn Sie die benötigten Informationen nicht finden, erweitern Sie Ihre Suche — versuchen Sie den Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [Stack Overflow](https://stackoverflow.com/) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie auch hier, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Seite Ihnen keine hilfreiche Antwort gibt.

Bevor Sie weitermachen, versuchen Sie, einige Themen zu suchen, über die Sie lernen möchten. Versuchen Sie es mit spezifischeren und weniger spezifischen Suchen und verschiedenen verwandten Begriffen, um zu sehen, was am besten funktioniert. Sehen Sie sich unsere [Suchtipps](#suchtipps) für weitere Dinge an, die Sie ausprobieren können.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Möglichkeit, Informationen zu erhalten. Sie bieten im Wesentlichen eine supergetriebene Suche: Sie führen im Hintergrund viel Suche durch, bevor sie die Ergebnisse in eine einzige, leicht verdauliche Antwort zusammenfassen. Häufige Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt in einem Chat-Format oder über KI-gestützte In-App-Hilfe oder Automatisierungssysteme genutzt werden.

Beim Lernen des Programmierens können KI-Chatbefehle auf verschiedene Weise nützlich sein:

- Konventionelle Suchen durchführen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in einen KI-Chatbefehl einfügen, mit einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber herausfinden möchten, wie er effizienter gestaltet werden kann oder auf robustere Weise mehr Anwendungsfälle löst.
- Beratung zu einem bestimmten Vorgehen geben. Zum Beispiel, wenn Sie nicht nur wissen wollen, wo der Fehler in einem Codeblock liegt, sondern stattdessen Rat benötigen, welche Strategie zur Fehlersuche verwendet werden sollte.

Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

KI kann so viel leisten, dass Sie sich fragen könnten, warum Sie überhaupt noch programmieren lernen müssen.

Aber Halt! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene zu tun versuchen, was der Code macht, und wo jeder Codeschnipsel eingesetzt werden muss**. Wenn Sie das nicht tun, werden Sie nicht sehr nützlich sein, wenn Sie versuchen, echte Probleme zu lösen. Das bedeutet, dass Sie trotzdem programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um Ihnen zu helfen, Antworten schneller zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in eine KI-Eingabeaufforderung eintippen, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Darüber hinaus:

- KI-Tools präsentieren ihre Antworten in einer selbstsicheren, autoritativen Stimme, können jedoch oft irreführend oder schlicht falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie besitzen keine eigene angeborene Intelligenz – sie sind im Wesentlichen fortgeschrittene Musterabgleichstools. KI-Tools stellen ihre Antworten aus anderen Quellen da draußen zusammen, sie saugen also sowohl falsche als auch korrekte Informationen auf. Sogar zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten können zu älterer und häufiger vorhandener Dokumentation tendieren, also könnte "wie man X in JS macht" Ihnen veraltete Anleitungen geben.

Daher müssen Sie sorgfältig prüfen, ob Sie den Antworten, die sie geben, vertrauen können, und nicht alles ohne Frage glauben.

**Wenn Sie lernen, verbringen Sie Zeit damit, selbst zu versuchen, das Problem zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine konventionelle Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die Sprache, die Sie verwenden, als Suchbegriff einbeziehen, wie in den obigen Beispielen gezeigt. Wenn Sie nur `how to print out the fibonacci sequence` eingeben, erhalten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — das ist nicht sehr hilfreich, wenn Sie JavaScript lernen möchten!
- Wenn Sie eine nützliche Antwort finden, speichern oder kopieren Sie sie, damit Sie sie später wiederfinden können. Sie werden überrascht sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, die Fehlermeldung in eine Suchmaschine oder einen KI-Befehl einzugeben. Andere Menschen werden wahrscheinlich bereits das gleiche Problem in der Vergangenheit behandelt und öffentlich Lösungen dafür dokumentiert haben.
- Wenn möglich, halten Sie sich an empfohlene Seiten wie MDN und [Stack Overflow](https://stackoverflow.com/).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können und die Ihnen bessere Ergebnisse liefern als nur die Eingabe eines einfachen Suchbegriffs. Die Eingabe eines einfachen Suchbegriffs wie `ant fish cheese` liefert Ergebnisse, die jede Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Syntaxmuster:
  - Die Eingabe von `"ant fish cheese"` (mit Anführungszeichen) liefert nur Ergebnisse, die genau diese Phrase enthalten.
  - `ant cheese -fish` liefert Ergebnisse, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` liefert nur Ergebnisse mit einem der Begriffe, nicht beiden. Aus unseren Test hat sich gezeigt, dass dieser nur effektiv in Google funktioniert.
  - `intitle:cheese` liefert nur Ergebnisse, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche anderen Sie finden können — einige nützliche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Advanced search options](https://support.microsoft.com/en-US/bing/advanced-search-options).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
