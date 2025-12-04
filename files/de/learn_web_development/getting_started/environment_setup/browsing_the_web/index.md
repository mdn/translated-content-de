---
title: Surfen im Web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

Zu diesem Zeitpunkt des Moduls sollten Sie mehrere moderne Webbrowser auf Ihrem Computer oder anderen verfügbaren Geräten installiert haben. Dieser Artikel geht tiefer auf die Nutzung von Browsern ein, betrachtet, wie ein Webbrowser funktioniert, den Unterschied zwischen einigen alltäglichen Dingen, mit denen Sie interagieren werden, und wie Sie Informationen suchen.

> [!NOTE]
> Wenn Sie keine anderen Browser als die Standardbrowser, die mit Ihren Geräten geliefert wurden, installiert haben, sollten Sie einige zusätzliche installieren. Weitere Informationen finden Sie unter [Moderne Webbrowser](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers).

Wie in jedem Wissensbereich gibt es im Web eine Menge Fachjargon und technische Terminologie. Keine Sorge: Wir werden Sie nicht mit allem auf einmal überfordern (Sie können das [Glossar](/de/docs/Glossary) durchsuchen, wenn Sie neugierig sind). Es gibt jedoch einige grundlegende Begriffe, die Sie von Anfang an verstehen müssen, da Sie diese Ausdrücke ständig hören werden. Wir stellen einige wichtige Begriffe unten vor.

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
          <li>Wie ein Webbrowser auf grundlegendem Niveau funktioniert.</li>
          <li>Suche nach Informationen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Unterschied zwischen Webseite, Website, Webserver und Suchmaschine

Wir beginnen mit der Beschreibung verschiedener webbezogener Konzepte: Webseiten, Websites, Webserver und Suchmaschinen. Diese Begriffe werden von Neulingen im Web oft verwechselt oder falsch verwendet. Stellen wir sicher, dass Sie wissen, was sie jeweils bedeuten! Beginnen wir mit einigen Definitionen:

- **Webpage**
  - : Ein Dokument, das in einem Web-{{Glossary("browser", "browser")}} angezeigt werden kann. Diese werden oft einfach als "Seiten" bezeichnet. Solche Dokumente sind in der {{Glossary("HTML", "HTML")}}-Sprache geschrieben (auf die wir später genauer eingehen).
- **Website**
  - : Eine Sammlung von Webseiten, die zu einer einzelnen Ressource zusammengefasst sind, mit Verknüpfungen, die sie miteinander verbinden. Oft als "Seite" bezeichnet.
- **Webserver**
  - : Ein Computer, der eine Website im Internet hostet.
- **Webservice**
  - : Eine Software, die auf Anfragen über das Internet reagiert, um eine Funktion auszuführen oder Daten bereitzustellen. Ein Webservice wird typischerweise von einem Webserver unterstützt und kann Webseiten bereitstellen, mit denen Benutzer interagieren können. Viele Websites sind auch Webservices, obwohl einige Websites (wie MDN) nur aus statischen Inhalten bestehen. Beispiele für Webservices sind etwas, das Bilder verkleinert, einen Wetterbericht bereitstellt oder Benutzereinlog-Daten verwaltet.
- **Suchmaschine**
  - : Ein Webdienst, der Ihnen hilft, andere Webseiten zu finden, wie Google, Bing, Yahoo oder DuckDuckGo. Suchmaschinen werden normalerweise über einen Webbrowser aufgerufen (zum Beispiel können Sie in Firefox, Chrome usw. direkt in der Adressleiste nach Suchmaschinen suchen) oder über eine Webseite (zum Beispiel [bing.com](https://www.bing.com/) oder [duckduckgo.com](https://duckduckgo.com/)).

Vergleichen wir das mit einer Analogie — einer öffentlichen Bibliothek. Dies tun Sie im Allgemeinen beim Besuch einer Bibliothek:

1. Suchen Sie einen Suchindex und suchen Sie nach dem Titel des gewünschten Buches.
2. Notieren Sie sich die Katalognummer des Buches.
3. Gehen Sie zu dem speziellen Bereich, der das Buch enthält, finden Sie die richtige Katalognummer und holen Sie sich das Buch.

Vergleichen wir eine öffentliche Bibliothek mit dem Web:

- Die Bibliothek ist wie ein Webserver. Sie hat mehrere Abteilungen, was einem Webserver ähnelt, der mehrere Websites hostet.
- Die verschiedenen Abteilungen (Wissenschaft, Mathematik, Geschichte usw.) in der Bibliothek sind wie Websites. Jede Abteilung ist wie eine einzigartige Website (zwei Abteilungen enthalten nicht dieselben Bücher).
- Die Bücher in jeder Abteilung sind wie Webseiten. Eine Website kann mehrere Webseiten haben, zum Beispiel wird die Wissenschaftsabteilung (die Website) Bücher über Wärme, Schall, Thermodynamik, menschliche Biologie usw. haben.
- Der Suchindex ist wie die Suchmaschine. Jedes Buch hat seinen eigenen einzigartigen Standort in der Bibliothek (zwei Bücher können nicht am selben Ort aufbewahrt werden), der durch die Katalognummer angegeben wird.

Nehmen wir uns nun die Zeit, jeden Begriff etwas detaillierter zu betrachten.

### Webseite

Eine **Webseite** ist ein einfaches Dokument, das von einem Browser angezeigt werden kann. Eine Webseite kann eine Vielzahl verschiedener Arten von Ressourcen einbetten, wie zum Beispiel:

- _Stilinformationen_ — Steuerung des Erscheinungsbildes einer Seite.
- _Skripte_ — die der Seite Interaktivität hinzufügen.
- _Medien_ — Bilder, Klänge und Videos.

> [!NOTE]
> Browser können auch andere Dokumente wie {{Glossary("PDF", "PDF")}}-Dateien und andere Ressourcen wie Bilder oder Videos anzeigen, aber der Begriff **Webseite** bezieht sich speziell auf HTML-Dokumente.

Alle Webseiten können an einem einzigartigen Standort gefunden werden (Webadresse, auch als {{Glossary("URL", "URL")}} bezeichnet). Um auf eine Seite zuzugreifen, geben Sie einfach ihre Adresse in die Adressleiste Ihres Browsers ein:

![Beispiel einer Webseitenadresse in der Browser-Adressleiste](web-page.jpg)

Versuchen Sie nun, eine Ihrer Lieblingswebsites in einem Browser zu laden, wobei Sie im Hinterkopf behalten, was wir oben gesagt haben. Haben Sie die Webadresse selbst eingegeben oder sie über eine Suchmaschine gefunden?

### Website

Eine _Website_ ist eine Sammlung von verlinkten Webseiten (plus deren zugehörige Ressourcen), die einen einzigartigen [Domänennamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) teilen. Jede Webseite einer gegebenen Website bietet explizite Links — meistens in Form von anklickbaren Textteilen —, die es dem Benutzer ermöglichen, von einer Seite der Website zur anderen zu wechseln.

Wenn Sie Ihre Lieblingswebsite in einem Browser laden, wird in der Regel zuerst die Hauptwebseite der Website oder die _Homepage_ (umgangssprachlich "Home" genannt) angezeigt:

![Beispiel eines Websitedomänennamens in der Browser-Adressleiste](web-site.jpg)

Versuchen Sie, einige Menüelemente oder Links zu klicken, um sich einige verschiedene Seiten auf Ihrer Lieblingswebsite anzusehen. Beachten Sie, wie sich die angezeigte Webadresse ändert, wenn Sie zwischen den Seiten wechseln.

> [!NOTE]
> Es ist auch möglich, eine {{Glossary("SPA", "_Single-Page-App_")}} zu haben: eine Website, die aus einer einzigen Webseite besteht, die bei Bedarf dynamisch mit neuen Inhalten aktualisiert wird. In diesem Fall ändert sich die Webadresse möglicherweise nicht, wenn verschiedene Seiten angezeigt werden.

### Webserver

Ein _Webserver_ ist ein Computer, der eine oder mehrere _Websites_ hostet. "Hosting" bedeutet, dass alle _Webseiten_ und die dazugehörigen Dateien auf diesem Computer verfügbar sind. Der _Webserver_ sendet die von ihm gehosteten Webseiten-Dateien an den Browser eines Benutzers, wenn dieser versucht, sie zu laden.

Verwechseln Sie _Websites_ nicht mit _Webservern_. Wenn Sie zum Beispiel jemanden sagen hören "Meine Website reagiert nicht", bedeutet das wahrscheinlich, dass der _Webserver_ nicht reagiert und daher die _Website_ nicht verfügbar ist.

Noch wichtiger ist, da ein Webserver mehrere Websites hosten kann, wird der Begriff _Webserver_ nicht mehr zur Bezeichnung einer Website verwendet, da dies zu Verwirrung führen könnte. Wenn jemand sagt "Mein Webserver antwortet nicht", könnte es sein, dass mehrere auf dem Webserver gehostete Websites oder Anwendungen nicht verfügbar sind.

### Suchmaschine

Es ist üblich, dass Menschen Suchmaschinen mit Websites verwechseln. Eine Suchmaschine ist eine spezielle Art von Webdienst, der Benutzern hilft, Webseiten zu finden, an denen sie interessiert sind, sowie bestimmte Arten von Inhalten wie Bilder, Videos oder Nachrichtenartikel.

Suchmaschinen haben in der Regel eigene Websites, die verwendet werden können, um auf den zugrunde liegenden Webdienst zuzugreifen. Es gibt viele davon: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) und viele mehr. Einige sind allgemein, andere sind auf bestimmte Themen spezialisiert.

Viele Anfänger im Web verwechseln Suchmaschinen und Browser. Lassen Sie uns das klären:

- Ein _Browser_ ist ein Stück Software, das Webseiten abruft und anzeigt.
- Eine _Suchmaschine_ ist ein Webdienst (und in der Regel eine Webseite), der Menschen hilft, Webseiten zu finden, die auf anderen Websites enthalten sind.

Die Verwirrung entsteht, weil ein Browser beim ersten Start oft die Homepage einer Suchmaschinen-Website oder ein Suchfeld anzeigt, das es ermöglicht, einen Begriff mithilfe dieser Suchmaschine zu suchen. Die meisten Browser erlauben es ihren Benutzern außerdem, eine Suchmaschine zu verwenden, indem sie Suchbegriffe direkt in die Browser-Adressleiste eingeben.

Das alles macht Sinn, weil das Erste, das Menschen normalerweise mit einem Browser tun möchten, darin besteht, eine Webseite zu finden, die angezeigt werden soll. Verwechseln Sie nicht die Software (den Browser) mit dem Dienst (die Suchmaschine).

Hier ist ein Beispiel, in dem Firefox ein Google-Suchfeld als Standard-Startseite anzeigt:

![Beispiel von Firefox Nightly, das eine benutzerdefinierte Google-Seite als Standard anzeigt](search-engine.jpg)

Versuchen Sie, eine Suchmaschine zu verwenden, um Informationen zu einem Thema zu finden, das Sie interessiert:

1. Gehen Sie zu einer Homepage einer Suchmaschine und geben Sie einen Suchbegriff ein.
2. Geben Sie einen Suchbegriff in die Adressleiste des Browsers ein.

## Wie das Web funktioniert: die Grundlagen

In vielen Teilen der Welt ist das Web zu einem ebenso unverzichtbaren Werkzeug in unserem Alltag geworden wie Besteck, Fahrräder und Autos oder Zahnbürsten. Wenn Ihnen das unrealistisch klingt, denken Sie einfach daran, wie oft Sie jeden Tag eine Website oder eine mobile App nutzen! Selbst wenn Sie keine Webadresse in einen Webbrowser eingeben, um auf Inhalte oder Dienste zuzugreifen, ist die Wahrscheinlichkeit hoch, dass die App, die Sie verwenden, wahrscheinlich Webtechnologie im Hintergrund verwendet, um Daten zu beschaffen, die Ihnen präsentiert werden.

Wenn Sie auf das Web zugreifen, geschieht eine Menge zwischen Ihrer ersten Interaktion (zum Beispiel das Eingeben einer Webadresse (URL) in einen Browser und Drücken der <kbd>Eingabe</kbd>/<kbd>Return</kbd>) und dem Ergebnis Ihrer Aktion, das Ihnen präsentiert wird (zum Beispiel das Erscheinen der Website in Ihrem Webbrowser):

1. Der Webbrowser fordert die Ressource (zum Beispiel eine Webseite, einige Daten oder ein Bild oder Video) an, die Sie vom Webserver, auf dem sie gespeichert ist, zugreifen möchten. Solche Anfragen (und die resultierenden Antworten) werden mit einer Technologie namens {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) erstellt, die eine Sprache von Verben (wie **GET**) verwendet, um zu beschreiben, was geschehen soll.
2. Wenn die Anfrage erfolgreich ist, sendet der Webserver eine HTTP-Antwort zurück an den Webbrowser, die die angeforderte Ressource enthält.
3. In einigen Fällen löst die angeforderte Ressource dann weitere HTTP-Anfragen aus, die zu weiteren Antworten führen. Zum Beispiel:
   1. Wenn eine Website geladen wird, wird zunächst die Haupt-HMTL-Datei der Startseite der Website angefordert.
   2. Wenn diese Datei vom Browser empfangen wird, beginnt dieser, sie zu parsen, und wird wahrscheinlich Anweisungen finden, um weitere Anfragen zu stellen. Wie oben diskutiert, könnten diese Anfragen Dateien betreffen, die eingebettet werden sollen, wie Bilder, Stilinformationen, Skripts und so weiter.
4. Wenn alle Ressourcen angefordert wurden, parst und rendert der Webbrowser sie wie erforderlich, bevor das Ergebnis dem Benutzer angezeigt wird.

Diese Beschreibung, wie das Web funktioniert, ist stark vereinfacht, aber es ist alles, was Sie zu diesem Zeitpunkt wirklich wissen müssen. Sie finden eine detailliertere Darstellung davon, wie Webseiten vom Webbrowser angefordert und gerendert werden, in unserem [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)-Modul, das etwas später kommt.

## Suche nach Informationen

Als Webentwickler werden Sie viel Zeit damit verbringen, nach Informationen zu suchen, sei es nach Syntax, an die Sie sich nicht erinnern können, oder nach Lösungen für bestimmte Probleme. Es ist daher eine gute Idee, zu lernen, wie man effektiv im Web sucht.

Wenn Sie eine Website kennen, die sich auf das Thema spezialisiert hat, das Sie lernen, ist es oft eine gute Idee, dort zu beginnen.

Zum Beispiel, wenn Sie nach allgemeinen Informationen über ein bestimmtes Webtechnologien-Merkmal suchen, sollten Sie den Namen des Merkmals in das MDN-Suchfeld eingeben. Zum Beispiel, versuchen Sie, `box model`, `fetch()` oder `video element` in das Suchfeld einzugeben und sehen Sie, was erscheint. Wenn Sie die benötigten Informationen nicht finden, weiten Sie Ihre Suche aus — versuchen Sie Ihren Suchbegriff in einer Suchmaschine.

Wenn Sie nach einer Lösung für ein spezifisches Problem suchen, wie etwa `wie man die Fibonacci-Sequenz mit JavaScript ausdruckt` oder `wie man berechnet, ob eine Zahl eine Primzahl mit JavaScript ist`, ist es eine gute Idee, auf einer Website wie [Stack Overflow](https://stackoverflow.com/) zu suchen, die sich der Beantwortung von Programmierproblemen widmet. Versuchen Sie erneut, eine allgemeine Suchmaschine zu verwenden, wenn eine spezifische Site Ihnen keine hilfreiche Antwort gibt.

Bevor Sie fortfahren, versuchen Sie, nach einigen Themen zu suchen, über die Sie gerne mehr lernen möchten. Versuchen Sie, spezifischere und weniger spezifische Suchen und verschiedene verwandte Begriffe zu verwenden, um herauszufinden, was am besten funktioniert. Siehe unsere [Suche-Tipps](#such-tipps) für weitere Dinge, die Sie versuchen können.

### Die Nutzung von KI

KI-generierte Suchergebnisse sind eine sehr beliebte Methode, um Informationen zu erhalten. Sie bieten im Grunde eine super getunte Suche: Sie führen im Hintergrund viele Suchvorgänge durch, bevor sie die Ergebnisse in einer einzigen, leicht verdaulichen Antwort zusammenstellen. Übliche Optionen sind [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) und [Microsoft Copilot](https://copilot.microsoft.com/), die entweder direkt im Chat-Format aufgerufen werden oder über KI-gesteuerte In-App-Hilfs- oder Automatisierungssysteme.

Wenn Sie lernen zu programmieren, können KI-Chat-Anfragen auf verschiedene Weise nützlich sein:

- Ausführen konventioneller Suchen, wie die oben genannten Beispiele.
- Fehler in einem Codeblock herausfinden. Wenn Sie frustriert sind, weil Ihr Code nicht funktioniert, können Sie Ihren Code in einen KI-Chat prompt einfügen, gefolgt von einer Frage wie `Wo ist der Fehler in diesem Code?`
- Generieren einer optimierten Version eines spezifischen Codeblocks. Das kann nützlich sein, wenn Sie einen Codeblock geschrieben haben, der funktioniert, aber herausfinden möchten, wie er effizienter gestaltet oder robuster gemacht werden kann, um mehr Anwendungsfälle zu lösen.
- Ratschläge geben, wie man etwas tut. Zum Beispiel, wenn Sie nicht nur wissen möchten, wo der Fehler in einem Codeblock ist, sondern stattdessen Ratschläge brauchen, welche Strategie Sie verwenden sollen, um ihn zu debuggen.

Versuchen Sie, ein paar KI-Tools zu verwenden, um einige Suchen zu machen.

### Eine warnende Geschichte

KI kann so viel, dass Sie möglicherweise anfangen zu hinterfragen, warum Sie noch programmieren lernen müssen.

Aber halt! Folgendes ist wichtig: **Sie müssen immer noch verstehen, was Sie auf höherer Ebene versuchen zu tun, was der Code tut und wo jedes Stück Code eingesetzt werden muss**. Wenn Sie das nicht tun, werden Sie bei der Lösung realer Probleme nicht sehr nützlich sein. Das bedeutet, dass Sie immer noch programmieren lernen müssen. KI kann ein wirklich nützliches Werkzeug sein, um schneller Antworten zu finden, aber wenn Sie jede Frage, die Ihnen gestellt wird, einfach in eine KI-Anfrage eingeben, werden Sie nicht verstehen, wie etwas funktioniert.

Außerdem:

- KI-Tools präsentieren ihre Antworten in einer selbstbewussten, autoritativen Stimme, aber sie können oft irreführend oder einfach falsch sein. Einige der Fehler, die sie machen, können sehr subtil sein. Sie haben keine eigene Intelligenz — sie sind im Wesentlichen fortschrittliche Mustererkennungs-Tools. KI-Tools erstellen ihre Antworten aus anderen Quellen da draußen, also nehmen sie sowohl falsche Informationen als auch richtige Informationen auf. Selbst zwei korrekte Quellen können kombiniert werden, um eine Antwort zu erstellen, die falsch ist.
- Neuere Informationen sind möglicherweise nicht verfügbar, oder Antworten könnten zugunsten älterer und weit verbreiteterer Dokumentationen verzerrt sein, sodass "wie man X in JS macht" Ihnen veralteten Rat geben könnte.

Deshalb müssen Sie darauf achten, die Antworten, die sie Ihnen geben, zu überprüfen und nicht einfach alles ohne Frage zu vertrauen.

**Wenn Sie lernen, verbringen Sie Zeit damit, das Problem selbst zu lösen, bevor Sie nach einer Antwort suchen, egal ob Sie KI oder eine herkömmliche Suchmaschine verwenden. Es wird Sie zu einem besseren Entwickler machen.**

### Such-Tipps

- Sie sollten die Sprache, die Sie verwenden, in den Suchbegriff einbeziehen, wie in den oben gezeigten Beispielen. Wenn Sie nur `wie man die Fibonacci-Sequenz ausdruckt` eingeben, würden Sie wahrscheinlich mehrere Lösungen in Python, C++, Java, Ruby oder anderen Sprachen erhalten — nicht sehr hilfreich, wenn Sie JavaScript lernen!
- Wenn Sie eine nützliche Antwort finden, setzen Sie ein Lesezeichen oder machen Sie eine Kopie davon, damit Sie sie später wieder finden können. Sie werden erstaunt sein, wie oft Sie auf dasselbe Problem stoßen.
- Wenn Ihr Code eine bestimmte Fehlermeldung zurückgibt, versuchen Sie, den Fehler in eine Suchmaschine oder KI-Anfrage einzugeben. Andere Menschen haben wahrscheinlich bereits denselben Fehler in der Vergangenheit bearbeitet und die Lösungen irgendwo öffentlich festgehalten.
- Wenn möglich, halten Sie sich an empfohlene Websites wie MDN und [Stack Overflow](https://stackoverflow.com/).
- Es gibt viele fortgeschrittene Suchtechniken, die Sie in Suchmaschinen verwenden können, um bessere Ergebnisse zu erzielen, als nur einen einfachen Suchbegriff einzugeben. Das Eingeben eines einfachen Suchbegriffs wie `ant fish cheese` wird Ergebnisse zurückgeben, die eine beliebige Kombination dieser Wörter enthalten. Die meisten Suchmaschinen unterstützen jedoch Varianten der folgenden Syntaxmuster:
  - Durch die Eingabe von `"ant fish cheese"` (mit den Anführungszeichen) werden nur Ergebnisse zurückgegeben, die genau diesen Ausdruck enthalten.
  - `ant cheese -fish` wird Ergebnisse zurückgeben, die `ant` und/oder `cheese`, aber nicht `fish` enthalten.
  - `ant OR cheese` wird nur Ergebnisse mit einem der beiden Begriffe oder dem anderen zurückgeben, nicht mit beiden. Unseren Tests zufolge funktionierte dies nur bei Google effektiv.
  - `intitle:cheese` gibt nur Ergebnisse zurück, die "cheese" im Haupttitel der Seite enthalten.

  > [!NOTE]
  > Es gibt viele andere Techniken, die Sie in verschiedenen Suchmaschinen verwenden können. Versuchen Sie zu sehen, welche anderen Sie finden können — einige nützliche Ressourcen sind [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) und [Microsoft: Erweiterte Suchoptionen](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
