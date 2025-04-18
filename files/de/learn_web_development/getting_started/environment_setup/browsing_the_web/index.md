---
title: Surfen im Internet
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt des Moduls sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer auf die Nutzung von Browsern ein, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie man nach Informationen sucht.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert wurden, keine weiteren Browser installiert haben, sollten Sie andere installieren. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich gibt es auch im Web eine Menge Fachjargon und technische Begriffe. Keine Sorge: Wir werden Sie nicht mit allem davon gleich zu Beginn überfordern (Sie können das [Glossar](/de/docs/Glossary) nachlesen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen sollten, da Sie diese Ausdrücke ständig hören werden. Im Folgenden stellen wir einige wichtige Begriffe vor.

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
          <li>Suche nach Informationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neulingen im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie verstehen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden auch oft einfach "Seiten" genannt. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später noch ausführlicher eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind und durch Links miteinander verbunden sind. Oft als "Seite" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird normalerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste wären etwas, das Bilder verkleinert, einen Wetterbericht bereitstellt oder eine Benutzeranmeldung abwickelt.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchmaschinen direkt in der Adressleiste von Firefox, Chrome usw. durchsuchen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Vergleichen wir das mit einer Analogien — einer öffentlichen Bibliothek. Dies würde man in der Regel tun, wenn man eine Bibliothek besucht:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie die Katalognummer des Buches.
3. Gehen Sie in den bestimmten Abschnitt, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie das Buch.

Vergleichen wir nun eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abschnitte, was einem Webserver ähnelt, der mehrere Websites hostet.
- Die verschiedenen Abschnitte (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jeder Abschnitt ist wie eine einzigartige Website (zwei Abschnitte enthalten nicht die gleichen Bücher).
- Die Bücher in jedem Abschnitt sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel enthält der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik usw.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen eindeutigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), was durch die Katalognummer angegeben wird.

Nehmen wir uns nun die Zeit, jeden Begriff etwas ausführlicher zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl unterschiedlicher Ressourcentypen einbetten, wie zum Beispiel:

- _Stilinformationen_ — zum Steuern des Aussehens einer Seite.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Jede Webseite kann an einem eindeutigen Standort gefunden werden (Webadresse, auch {{Glossary("URL", "URL")}} genannt). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseiten-Adresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuch Sie eine Ihrer Lieblingswebsites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung verknüpfter Webseiten (plus ihrer zugehörigen Ressourcen), die einen eindeutigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer bestimmten Website bietet explizite Links — meist in Form von klickbaren Teilen des Textes —, die es dem Benutzer ermöglichen, von einer Seite der Website zu einer anderen zu wechseln.

Wenn Sie Ihre Lieblings-Website in einem Browser laden, wird normalerweise zuerst die Haupt-Webseite oder Startseite der Website angezeigt (umgangssprachlich als "Home" bezeichnet):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, auf einige Menüeinträge oder Links zu klicken, um sich einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht und bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, auf dem eine oder mehrere _Websites_ gehostet werden. "Hosting" bedeutet, dass alle _Webseiten_ und die zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet Webseiten-Dateien, die er hostet, an den Browser eines Benutzers, wenn dieser versucht, diese zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Zum Beispiel, wenn jemand sagt: "Meine Website reagiert nicht", bedeutet es tatsächlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass, da ein Webserver mehrere Websites hosten kann, der Begriff _Webserver_ niemals zur Bezeichnung einer Website verwendet wird, da dies zu großer Verwirrung führen könnte. In unserem vorherigen Beispiel, wenn wir sagen würden: "Mein Webserver reagiert nicht", würde es bedeuten, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele da draußen: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Machen wir es deutlich: Ein _Browser_ ist ein Software-Programm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil beim ersten Start eines Browsers dieser oft die Startseite einer Suchmaschine oder ein Suchfeld anzeigt, das es Ihnen ermöglicht, einen Begriff mit dieser Suchmaschine zu suchen. Die meisten Browser ermöglichen es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Das ergibt alles Sinn, da das erste, was die Leute normalerweise mit einem Browser tun wollen, ist, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel von Firefox, das ein Google-Suchfeld als Standard-Startseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche mit einer Suchmaschine durch:
>
> - Gehen Sie zur Startseite einer Suchmaschine und geben Sie einen Suchbegriff ein.
> - Geben Sie einen Suchbegriff in die Browser-Adressleiste ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso zu einem wesentlichen Werkzeug unseres täglichen Lebens geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn das für Sie unrealistisch klingt, denken Sie einfach daran, wie oft Sie täglich eine Website oder eine Handy-App verwenden! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist die Wahrscheinlichkeit groß, dass die von Ihnen genutzte App wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, passiert eine Menge zwischen Ihrer ersten Interaktion (zum Beispiel einer Webadresse (URL) in einen Browser eintippen und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel die Website, die in Ihrem Webbrowser erscheint):

1. Der Webbrowser fordert die Ressource an (z.B. eine Webseite, einige Daten oder ein Bild oder Video), auf die Sie zugreifen möchten, von dem Webserver, auf dem sie gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden unter Verwendung einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gestellt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was passieren soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource dann weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-HTML-Datei der Startseite der Seite angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt sie, sie zu analysieren, und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu stellen. Wie oben erwähnt, können dies Dateien zum Einbetten sein, wie Bilder, Stilinformationen, Skripte usw.
4. Wenn alle Ressourcen angefordert wurden, analysiert und rendert der Webbrowser sie nach Bedarf, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber sie ist alles, was Sie im Moment wirklich wissen müssen. Sie finden eine detailliertere Beschreibung darüber, wie Webseiten von einem Webbrowser angefordert und gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Für den Moment versuchen Sie, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, wobei Sie an die obigen Schritte denken.

## Suche nach Informationen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von Syntax, an die Sie sich nicht erinnern können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen über ein bestimmtes Webtechnologiemerkmal suchen, sollten Sie den Namen des Features in das MDN-Suchfeld eingeben. Zum Beispiel versuchen Sie, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie nicht die benötigten Informationen finden, versuchen Sie, Ihre Suche zu erweitern — versuchen Sie, den Suchbegriff in einer Suchmaschine einzugeben.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie z.B. `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com/) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie wieder, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchen, wie oben angegeben:
>
> - Beginnen Sie mit der Suche nach den genauen Begriffen, die wir oben eingefügt haben.
> - Gehen Sie dann dazu über, nach einigen Themen zu suchen, die Sie gerne lernen möchten. Versuchen Sie, mehr oder weniger spezifische Suchanfragen und verschiedene verwandte Begriffe zu verwenden, um zu sehen, was am besten funktioniert.
> - Sehen Sie sich unsere [Suchetipps](#suchetipps) für weitere Dinge an, die Sie versuchen können.

### Verwendung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Methode, Informationen zu erhalten. Sie bieten im Grunde eine superschnelle Suche: Sie führen im Hintergrund viele Suchen durch, bevor sie die Ergebnisse zu einer einzigen, leicht verständlichen Antwort zusammenfassen. Übliche Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt im Chat-Format oder über KI-unterstützte In-App-Hilfen oder Automatisierungssysteme genutzt werden.

Beim Erlernen des Codierens können KI-Chat-Prozesse auf verschiedene Weise nützlich sein:

- Konventionelle Suchen durchführen, wie in den obigen Beispielen.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in einen KI-Chat-Prozess einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen funktionierenden Codeblock geschrieben haben, aber wissen möchten, wie er effizienter gestaltet oder auf eine robustere Weise gelöst werden kann, die mehr Anwendungsfälle abdeckt.
- Ratschläge erhalten, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern stattdessen Ratschläge zu der Strategie haben möchten, mit der Sie ihn debuggen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

In Wahrheit kann KI so viel, dass Sie vielleicht anfangen zu überlegen, warum Sie überhaupt lernen müssen zu programmieren.

Aber halt! Das Folgende ist wichtig: **Sie müssen immer noch verstehen, was Sie auf höherer Ebene zu tun versuchen, was der Code tut, und wo jede Codezeile verwendet werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung von realen Problemen nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch lernen müssen zu programmieren. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Sie gestellt werden, in eine KI-Eingabeaufforderung eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einem überzeugenden, autoritären Tonfall, können aber oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz - sie sind im Grunde fortgeschrittene Mustererkennungstools. KI-Tools stellen ihre Antworten aus anderen Quellen da draußen zusammen, sodass sie sowohl falsche als auch korrekte Informationen aufnehmen. Selbst zwei korrekte Quellen können kombiniert werden, um eine falsche Antwort zu erzeugen.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten können auf ältere und länger bestehende Dokumentationen fokussiert sein, so dass "wie man X in JS macht" Ihnen möglicherweise veraltete Anleitungen gibt.

Daher ist es wichtig, die Antworten, die sie geben, zu überprüfen und nicht alles vorbehaltlos zu vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchetipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einschließen, wie in den obigen Beispielen gezeigt. Wenn Sie einfach `how to print out the fibonacci sequence` eingeben würden, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen finden — nicht ganz so hilfreich, wenn Sie versuchen, JavaScript zu lernen!
- Wenn Sie eine nützliche Antwort finden, speichern Sie ein Lesezeichen oder machen Sie eine Kopie davon, damit Sie sie später wiederfinden können. Sie werden überrascht sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder eine KI-Eingabeaufforderung einzugeben. Wahrscheinlich haben andere das gleiche Problem bereits in der Vergangenheit angegangen und Lösungen öffentlich irgendwo aufgezeichnet.
- Wenn möglich, halten Sie sich an empfohlene Seiten wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele erweiterte Suchtechniken, die Sie in Suchmaschinen verwenden können, um bessere Ergebnisse zu erzielen, als einfach einen einfachen Suchbegriff einzugeben. Das Eingeben eines einfachen Suchbegriffs wie `ant fish cheese` gibt Ergebnisse zurück, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Das Eingeben von `"ant fish cheese"` (mit den Anführungszeichen) gibt nur Ergebnisse zurück, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` gibt Ergebnisse zurück, die `ant` und/oder `cheese` aber nicht `fish` enthalten.
  - `ant OR cheese` gibt nur Ergebnisse mit einem Term oder dem anderen zurück, nicht beide. Aus unseren Tests scheint dies nur effektiv in Google zu funktionieren.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" im Haupttitel der Seite haben.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche anderen Techniken es gibt — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=en), [Wie man erweiterte Syntax in DuckDuckGo Search verwendet](https://duckduckgo.com/duckduckgo-help-pages/results/syntax), und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
