---
title: Surfen im Internet
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

An diesem Punkt im Modul sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer darauf ein, wie man Browser verwendet, indem wir uns anschauen, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen der alltäglichen Dinge, mit denen Sie interagieren werden, und wie Sie nach Informationen suchen.

> [!NOTE]
> Wenn Sie außer den Standardbrowsern, die mit Ihren Geräten geliefert werden, keine weiteren Browser installiert haben, installieren Sie einige andere. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich gibt es im Web viel Fachjargon und technische Terminologie. Keine Sorge: Wir werden Sie nicht sofort mit allem überfordern (Sie können das [Glossar](/de/docs/Glossary) nachschlagen, wenn Sie neugierig sind). Allerdings gibt es einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen Ihnen unten einige wichtige Begriffe vor.

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
          <li>Wie ein Webbrowser auf einfache Weise funktioniert.</li>
          <li>Nach Informationen suchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden oft von Neulingen im Web verwechselt oder falsch verwendet. Lassen Sie uns sicherstellen, dass Sie wissen, was jeder von ihnen bedeutet! Beginnen wir mit einigen Definitionen:

- **Webseite**
  - : Ein Dokument, das in einem Web{{Glossary("browser", "Browser")}} angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später noch näher eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzigen Ressource zusammengefasst sind und durch Links miteinander verbunden sind. Oft als "Site" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webdienst**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webdienst wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webdienste, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webdienste wären etwas, das Bilder skaliert, einen Wetterbericht bereitstellt oder den Benutzer-Login verwaltet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie Suchen direkt in der Adressleiste von Firefox, Chrome, etc. durchführen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Betrachten wir eine Analogie — eine öffentliche Bibliothek. Dies ist, was Sie allgemein tun würden, wenn Sie eine Bibliothek besuchen:

1. Finden Sie ein Suchverzeichnis und suchen Sie nach dem Titel des Buches, das Sie möchten.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem speziellen Bereich, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Bereiche, was einem Webserver ähnlich ist, der mehrere Websites hostet.
- Die verschiedenen Bereiche (Wissenschaft, Mathematik, Geschichte, etc.) in der Bibliothek sind wie Websites. Jeder Bereich ist wie eine einzigartige Website (zwei Bereiche enthalten nicht die gleichen Bücher).
- Die Bücher in jedem Bereich sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel hat der Wissenschaftsbereich (die Website) Bücher über Wärme, Schall, Thermodynamik, Statik, etc.
- Das Suchverzeichnis ist wie die Suchmaschine. Jedes Buch hat einen eigenen, eindeutigen Standort in der Bibliothek (zwei Bücher können nicht am gleichen Ort aufbewahrt werden), der durch die Katalognummer angegeben ist.

Nehmen wir uns nun die Zeit, jeden Begriff etwas genauer zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl von verschiedenen Arten von Ressourcen einbetten, wie zum Beispiel:

- _Stilinformatonen_ — steuern das Aussehen und das Feeling einer Seite.
- _Skripte_ — fügen der Seite Interaktivität hinzu.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können jeweils an einem einzigartigen Ort (Webadresse, auch {{Glossary("URL", "URL")}} genannt) gefunden werden. Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in Ihrer Browser-Adressleiste ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, eine Ihrer Lieblings-Websites jetzt in einem Browser zu laden.

### Website

Eine _Website_ ist eine Sammlung von verknüpften Webseiten (plus ihre zugehörigen Ressourcen), die einen einzigartigen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer gegebenen Website bietet explizite Links – meistens in Form von anklickbaren Textteilen – die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre bevorzugte Website in einem Browser laden, wird zunächst die Hauptwebseite der Website oder der _Startseite_ angezeigt (umgangssprachlich als "Home" bezeichnet):

![Beispiel eines Website-Domainnamens in der Browser-Adressleiste](web-site.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, auf einige Menüpunkte oder Links zu klicken, um einige verschiedene Seiten auf Ihrer Lieblings-Website anzusehen.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzelnen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und ihre zugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die Dateien der gehosteten Webseiten an den Browser eines Benutzers, wenn dieser versucht, die Seite zu laden.

Verwechseln Sie nicht _Websites_ und _Webserver_. Wenn Sie zum Beispiel jemanden sagen hören, "Meine Website antwortet nicht", bedeutet das eigentlich, dass der _Webserver_ nicht antwortet und daher die _Website_ nicht verfügbar ist. Noch wichtiger ist, dass, da ein Webserver mehrere Websites hosten kann, der Begriff _Webserver_ nie verwendet wird, um eine Website zu bezeichnen, da dies große Verwirrung stiften könnte. In unserem vorherigen Beispiel, wenn wir sagen, "Mein Webserver antwortet nicht", bedeutet das, dass mehrere Websites auf diesem Webserver nicht verfügbar sind.

### Suchmaschine

Suchmaschinen sind eine häufige Quelle der Verwirrung im Web. Eine Suchmaschine ist eine spezielle Art von Website, die Benutzern hilft, Webseiten von _anderen_ Websites zu finden.

Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemeiner Natur, einige sind auf bestimmte Themen spezialisiert.

Viele Webanfänger verwechseln Suchmaschinen mit Browsern. Lassen Sie es uns klar machen: Ein _Browser_ ist ein Softwareprogramm, das Webseiten abruft und anzeigt; eine _Suchmaschine_ ist eine Website, die Menschen hilft, Webseiten von anderen Websites zu finden. Die Verwirrung entsteht, weil der Browser beim ersten Start oft die Startseite einer Suchmaschine anzeigt oder ein Suchfeld, mit dem die Benutzer einen Begriff bei dieser Suchmaschine suchen können. Die meisten Browser ermöglichen es ihren Benutzern auch, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Adressleiste des Browsers eingeben.

Dies macht alles Sinn, da das erste, was Leute mit einem Browser tun wollen, normalerweise darin besteht, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel, wie Firefox eine Google-Suchbox als Standard-Startseite anzeigt:

![Beispiel einer benutzerdefinierten Google-Seite in Firefox als Standard](search-engine.jpg)

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Führen Sie eine Suche in einer Suchmaschine durch, indem Sie:
>
> - Zur Startseite einer Suchmaschine gehen und einen Suchbegriff eingeben.
> - Einen Suchbegriff in die Adressleiste des Browsers eingeben.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web genauso ein unverzichtbares Werkzeug in unserem täglichen Leben wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch erscheint, denken Sie einfach daran, wie oft Sie eine Website oder eine mobile App an einem Tag nutzen! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, besteht eine hohe Wahrscheinlichkeit, dass die von Ihnen verwendete App wahrscheinlich im Hintergrund Webtechnologie nutzt, um Daten abzurufen, die Ihnen präsentiert werden.

Wenn Sie das Web nutzen, passiert einiges zwischen Ihrer ersten Interaktion (zum Beispiel der Eingabe einer Webadresse (URL) in einen Browser und dem Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel dem Laden der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert das gewünschte Ressourcenobjekt (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) von dem Webserver an, auf dem es gespeichert ist. Solche Anfragen (und die daraus resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) gemacht, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Ist die Anfrage erfolgreich, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-Index-HTML-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt er mit dem Parsen und wird wahrscheinlich Anweisungen finden, weitere Anfragen zu stellen. Wie oben besprochen, können diese Anfragen nach eingebetteten Dateien wie Bildern, Stilinformatonen, Skripten und so weiter sein.
4. Wenn alle Ressourcen angefordert wurden, parst und rendert der Webbrowser sie, bevor er das Ergebnis dem Benutzer anzeigt.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Einen detaillierteren Überblick darüber, wie Webseiten von einem Webbrowser angefordert und gerendert werden, finden Sie in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, etwas später.

Für den Moment versuchen Sie, einen Webbrowser zu öffnen und ein paar Ihrer Lieblingsseiten zu laden, während Sie an die oben genannten Schritte denken.

## Nach Informationen suchen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, von einer Syntax, die Sie sich nicht merken können, bis hin zu Lösungen für spezifische Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie nach allgemeinen Informationen über eine bestimmte Webtechnologiefunktion suchen, sollten Sie den Namen der Funktion in die MDN-Suchleiste eingeben. Zum Beispiel versuchen Sie, `box model`, `fetch()` oder `video element` in die Suchleiste einzugeben und sehen Sie, was dabei herauskommt. Wenn Sie die benötigten Informationen nicht finden, versuchen Sie es, Ihre Suche zu erweitern — versuchen Sie es mit Ihrem Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie `how to print out the fibonacci sequence with JavaScript` oder `how to calculate whether a number is a prime number with JavaScript`, ist es eine gute Idee, auf einer Website wie [StackOverflow](https://stackoverflow.com/) zu suchen, die sich der Antwort auf Programmierprobleme widmet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Website Ihnen keine hilfreiche Antwort gibt.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie einige Suchvorgänge, wie oben angegeben:
>
> - Beginnen Sie, indem Sie nach den genauen Begriffen suchen, die wir oben angegeben haben.
> - Fahren Sie als nächstes fort, nach einigen Themen zu suchen, über die Sie mehr lernen möchten. Versuchen Sie es mit spezifischeren und weniger spezifischen Suchen und verschiedenen verwandten Begriffen, um herauszufinden, was am besten funktioniert.
> - Lesen Sie unsere [Suchtipps](#suchtipps) für weitere Dinge, die Sie ausprobieren können.

### AI verwenden

AI-generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine supermächtige Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse zu einer einzigen, leicht verständlichen Antwort zusammenstellen. Häufige Wahlmöglichkeiten sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt in einem Chat-Format oder über KI-gesteuerte In-App-Hilfe oder Automatisierungssysteme aufgerufen werden.

Beim Lernen zu programmieren, können KI-Chat-Prompts auf verschiedene Weise nützlich sein:

- Konventionelle Suchen durchführen, wie die oben erwähnten Beispiele.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie ihn in einen KI-Chat-Prompt einfügen, gefolgt von einer Frage wie `Where is the mistake in this code?`
- Eine optimierte Version eines bestimmten Codeblocks generieren. Dies kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, Sie aber herausfinden möchten, wie er effizienter oder robuster gemacht werden kann, um mehr Anwendungsfälle zu lösen.
- Ratschläge geben, wie man etwas macht. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock liegt, sondern stattdessen Ratschläge benötigen, welche Strategie Sie zur Fehlersuche verwenden sollten.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, ein paar AI-Tools zu verwenden, um einige Suchen durchzuführen.

### Eine warnende Geschichte

Tatsächlich kann KI so viel leisten, dass Sie vielleicht anfangen zu hinterfragen, ob Sie überhaupt noch programmieren lernen müssen.

Aber warten Sie! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf hoher Ebene tun wollen, was der Code macht und wo jeder Teil des Codes verwendet werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung von realen Problemen nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch programmieren lernen müssen. KI kann ein wirklich nützliches Tool sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Sie gestellt bekommen, direkt in einen KI-Prompt eingeben, werden Sie nicht verstehen, wie irgendetwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, können jedoch oft irreführend oder schlichtweg falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz — sie sind im Grunde fortgeschrittene Pattern-Matching-Tools. KI-Tools erstellen ihre Antworten aus anderen Quellen, die es gibt, und nehmen damit sowohl fehlerhafte als auch korrekte Informationen auf. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar oder Antworten können in Richtung älterer und weitverbreiteterer Dokumentation verzerrt werden, sodass "how to do X in JS" Ihnen möglicherweise veraltete Anleitungen gibt.

Daher müssen Sie vorsichtig sein, die Antworten, die sie geben, zu überprüfen und nicht alles ohne Frage zu vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, zu versuchen, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Suchtipps

- Sie sollten die von Ihnen verwendete Sprache in den Suchbegriff einbeziehen, wie in den oben genannten Beispielen gezeigt. Wenn Sie einfach nur `how to print out the fibonacci sequence` eingeben, erhalten Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen — nicht ganz so hilfreich, wenn Sie versuchen, JavaScript zu lernen!
- Wenn Sie eine nützliche Antwort finden, markieren Sie sie als Lesezeichen oder machen Sie eine Kopie davon, damit Sie sie später leicht wiederfinden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, diese Fehlermeldung in eine Suchmaschine oder einen KI-Prompt einzugeben. Andere Leute haben wahrscheinlich bereits in der Vergangenheit das gleiche Problem angegangen und Lösungen öffentlich dokumentiert.
- Wenn möglich, bleiben Sie bei empfohlenen Seiten wie MDN und [StackOverflow](https://stackoverflow.com/).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, die Ihnen bessere Ergebnisse liefern als nur einen einfachen Suchbegriff einzugeben. Das Eingeben eines einfachen Suchbegriffs wie `ant fish cheese` gibt Ergebnisse zurück, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Variationen der folgenden Formate:

  - Das Eingeben von `"ant fish cheese"` (mit Anführungszeichen) wird nur Ergebnisse zurückgeben, die genau diese Phrase enthalten.
  - `"ant cheese" -fish` wird Ergebnisse zurückgeben, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` wird nur Ergebnisse mit einem der beiden Begriffe zurückgeben, nicht beide. Aus unseren Tests scheint dies nur bei Google effektiv zu funktionieren.
  - `intitle:cheese` wird nur Ergebnisse zurückgeben, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie herauszufinden, welche weiteren Sie finden können — einige nützliche Ressourcen sind [Google-Suchen verfeinern](https://support.google.com/websearch/answer/2466433?hl=de), [Wie man erweiterte Syntax bei der DuckDuckGo-Suche verwendet](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
