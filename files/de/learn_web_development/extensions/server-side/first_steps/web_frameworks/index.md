---
title: Server-seitige Web-Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und Servern aussieht, die Natur von HTTP-Anfragen und -Antworten sowie was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen in unserem Repertoire ist es an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf reagiert (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und Leser dazu bringen,
        über die Auswahl eines Frameworks für ihre eigene Entwicklung
        nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus echten Web-Frameworks. Machen Sie sich keine Sorgen, wenn nicht **alles** jetzt Sinn macht; wir werden Sie in unseren frameworkspezifischen Modulen durch den Code führen.

## Übersicht

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die es einfacher machen, Webanwendungen zu schreiben, zu warten und zu skalieren. Sie bieten Werkzeuge und Bibliotheken, die typische Aufgaben der Webentwicklung vereinfachen, wie z. B. das Routing von URLs zu entsprechenden Handlern, die Interaktion mit Datenbanken, die Unterstützung von Sitzungen und Benutzerautorisierung, die Formatierung von Ausgaben (z. B. HTML, JSON, XML) und die Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Detail darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Danach erklären wir einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um übliche Webentwicklungsoperationen zu vereinfachen. Sie müssen kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihr Leben erheblich erleichtern.

Dieser Abschnitt behandelt einige der Funktionalitäten, die oft von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird notwendigerweise alle diese Funktionen bieten!).

### Arbeiten Sie direkt mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine einfachere Aufgabe haben werden, mit einfacherer, höherstufigerem Code zu arbeiten, anstatt mit niederrangigen Netzwerkgrundlagen.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt mit Anfrageninformationen und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall eine Zeichenkette).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Leiten Sie Anfragen an den entsprechenden Handler weiter

Die meisten Websites bieten eine Reihe unterschiedlicher Ressourcen an, die über verschiedene URLs zugänglich sind. All dies in einer Funktion zu handhaben, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die verwendet wird, um eine bestimmte Funktion zu liefern, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für das Mapping. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen über einen Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django von Entwicklern erwartet, dass sie eine Liste von Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Erleichtert den Zugriff auf Daten in der Anfrage

Daten können in einer HTTP-Anfrage auf verschiedene Weise kodiert werden. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server zu erhalten, kann erforderliche Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, enthält stattdessen Aktualisierungsinformationen als "POST-Daten" im Anfragekörper. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem Client-seitigen Cookie beinhalten.

Web-Frameworks bieten programmgemäße Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften, um auf die Ziel-URL, den Anfragetyp (z. B. eine HTTP-`GET`-Anfrage), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. zuzugreifen. Django kann auch Informationen kodieren, die in der Struktur der URL durch die Definition von "Capture Patterns" im URL-Mapping übergeben werden (siehe das letzte Codefragment im obigen Abschnitt).

### Abstrahieren und vereinfachen Sie den Datenbankzugriff

Websites verwenden Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer festzuhalten. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code, der sie verwendet, ändern zu müssen. Dies ermöglicht es Entwicklern, basierend auf ihrem Einsatz die Eigenschaften verschiedener Datenbanken zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks umgesetzt werden. Dies erleichtert und sichert die Überprüfung, dass Daten im korrekten Typ von Datenbankfeld gespeichert sind, das richtige Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schädliche Dinge zu tun, z. B. Datenbankdatensätze zu löschen).

Zum Beispiel bietet das Django Web-Framework ein ORM und bezeichnet das Objekt, das verwendet wird, um die Struktur eines Datensatzes zu definieren, als _Model_. Das Model spezifiziert die zu speichernden Feld*typen*, was eine Validierung auf Feldebene bietet, welche Informationen gespeichert werden können (z. B. ein E-Mail-Feld würde nur gültige E-Mail-Adressen erlauben). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für Dokumentation, Textbezeichnungen für Formulare usw. angeben. Das Model sagt nichts über die zugrunde liegende Datenbank aus, da dies eine Konfigurationseinstellung ist, die separat von unserem Code geändert werden kann.

Der erste Codeausschnitt unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und die Teamstufe als Zeichenfelder und spezifiziert die maximale Anzahl an Zeichen, die für jeden Datensatz gespeichert werden sollen. Die `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und zu speichernden Daten sowie einen Standardwert.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # List our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Dies kann gegen eine Anzahl von Feldern gleichzeitig unter Verwendung verschiedener Kriterien (z. B. genau, groß-/kleinschreibungsunabhängig, größer als, etc.) abgleichen und kann komplexe Aussagen unterstützen (z. B. können Sie eine Suche nach U11-Teams angeben, deren Teamname mit "Fr" beginnt oder mit "al" endet).

Der zweite Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Abgleichstyp getrennt durch doppelte Unterstriche:**team_level\_\_exact** übergeben wird).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Daten rendern

Web-Frameworks bieten oft Templating-Systeme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die hinzugefügt werden, wenn eine Seite generiert wird. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten häufig einen Mechanismus, um die einfache Generierung anderer Formate aus gespeicherten Daten zu erleichtern, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel ermöglicht es das Django-Templating-System, Variablen mit einer "doppelten Klammer"-Syntax zu spezifizieren (z. B. `\{{ variable_name }}`), die durch Werte ersetzt werden, die von der View-Funktion übergeben werden, wenn eine Seite gerendert wird. Das Templating-System unterstützt auch Ausdrücke (mit Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Durchlaufen von Listenelementen durchzuführen, die in das Template übergeben werden.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Moustache (JavaScript) etc.

Der folgende Codeausschnitt zeigt, wie dies funktioniert. In Fortsetzung des "jüngste Team"-Beispiels aus dem vorherigen Abschnitt wird dem HTML-Template eine Listenvariable namens `youngest_teams` von der View übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst prüft, ob die Variable `youngest_teams` existiert und dann in einer `for`-Schleife iteriert wird. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listeneintrag.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{{ team.team_name }}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

## Anleitung zur Auswahl eines Web-Frameworks

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populäreren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, der Konsistenz seiner API, der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie absolut keine Programmiererfahrung haben, dann ziehen Sie Django in Betracht (es ist eines der am leichtesten zu erlernenden anhand der obigen Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits erhebliche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben als auch zu warten (da Sie keine neuen Funktionen schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für "Lernaufwand" — z. B. Dokumentation, Community, Programmerfahrung etc. — weitere Faktoren sind:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich erstellt, um bestimmte Arten von Problemen zu lösen, und sind weiterhin _besser_ beim Erstellen von Web-Apps mit ähnlichen Einschränkungen. Django wurde beispielsweise entwickelt, um die Entwicklung von Zeitungs-Websites zu unterstützen, daher ist es gut für Blogs und andere Seiten, die Dinge veröffentlichen. Im Gegensatz dazu ist Flask ein viel leichtergewichtiges Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsbildend vs. unmeinungsbildend_: Ein meinungsbildendes Framework ist eines, bei dem es empfohlene "beste" Wege gibt, ein bestimmtes Problem zu lösen. Meinungsbildende Frameworks sind tendenziell produktiver, wenn Sie versuchen, allgemeine Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Inklusive vs. selbst besorgen_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die jedes Problem adressieren, das ihre Entwickler sich vorstellen können, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles beinhalten, sind oft leichter zu starten, da Sie bereits alles haben, was Sie benötigen, und die Wahrscheinlichkeit ist hoch, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (jemals) benötigen, kann es in eingeschränkteren Umgebungen laufen und bietet eine kleinere und einfachere Menge an Dingen zu lernen.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Beispielsweise wird ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, zu wartbarerem Code führen als eines, das keine Erwartungen an Entwickler hat. Ähnlich kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** In der Regel ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Seiten sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können gut durch die Kosten für das Erlernen und Warten ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihr Website-Erfolg steigt, stellen Sie möglicherweise fest, dass sie die Anzahl der eingehenden Anfragen nicht mehr bewältigen kann. Zu diesem Zeitpunkt können Sie überlegen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie die ganze oder einen Teil einer Webantwort speichern, sodass sie bei späteren Anfragen nicht neu berechnet werden muss. Das Zurückgeben einer gecachten Antwort ist viel schneller als das Berechnen einer neuen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Niveaus an Unterstützung für die Definition, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Caching ausschöpfen und sogar die Grenzen der _vertikalen Skalierung_ (Betrieb Ihrer Webanwendung auf leistungsfähigerer Hardware) erreichen. Zu diesem Zeitpunkt müssen Sie _horizontal skalieren_ (die Last verteilen, indem Sie Ihre Site auf mehrere Webserver und Datenbanken verteilen) oder "geografisch" skalieren, da einige Ihrer Kunden weit entfernt von Ihrem Server ansässig sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied machen, wie einfach es ist, Ihre Site zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz gegen häufige Webangriffe. Django beispielsweise saniert sämtliche Nutzereingaben aus HTML-Templates, sodass eingetragener JavaScript-Code nicht ausgeführt werden kann. Andere Frameworks bieten ähnlichen Schutz, der jedoch nicht immer standardmäßig aktiviert ist.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie Ihr Framework wahrscheinlich basierend auf "Lernleichtigkeit" auswählen. Zusätzlich zur "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Nutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu illustrieren, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns die Hauptwebsites für [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) besuchen und ihre Dokumentationen und Community überprüfen.
>
> 1. Besuchen Sie die Hauptseiten (oben verlinkt).
>
>    - Klicken Sie auf die Dokumentationsmenüs (benannt wie "Documentation, Guide, API Reference, Getting Started" etc.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Templates und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Besuchen Sie die Mailinglisten für jede Seite (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks besprechen.

Die unten aufgeführten serverseitigen Frameworks stellen _einige_ der zur Zeit des Schreibens populärsten Frameworks dar. Alle von ihnen haben alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv entwickelt, haben eine begeisterte Community, die Dokumentation erstellt und Benutzern in Diskussionsforen hilft, und werden auf einer großen Anzahl von hochkarätigen Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie durch eine einfache Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen kommen (teilweise) von den Framework-Websites!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochrangiges Python-Web-Framework, das eine schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen viel von den lästigen Aufgaben der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre Anwendung zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Inklusive Batteries" und bietet fast alles, was die meisten Entwickler tun möchten, "aus der Box". Da alles enthalten ist, funktioniert alles zusammen, folgt einheitlichen Designprinzipien und hat umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Sites, die Django verwenden (von der Django-Startseite), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask aus der Box ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und einen Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templating, sichere Cookies, [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Request-Dispatching. Es hat eine gute Dokumentation und eine aktive Community.

Flask ist besonders bei Entwicklern beliebt geworden, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z. B. den Betrieb eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) etc.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unmeinungsbildendes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung für die Ausführung von JavaScript). Es bietet eine robuste Suite von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogramme und {{Glossary("Middleware", "Middleware")}}.

Express ist extrem populär, teilweise weil es JavaScript-Webprogrammierern den Übergang zur Server-Programmierung erleichtert und teilweise weil es ressourcenschonend ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Multitasking-Ansätze innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, integriert es nicht jedes Komponenten, die Sie möglicherweise nutzen möchten (Beispielsweise werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch eigenständige Bibliotheken bereitgestellt). Es gibt viele exzellente unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (die sowohl server- als auch clientseitige Frameworks umfassen) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen nutzen Express, darunter: Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit- und Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) basiert.

Deno wird von [Tokio](https://tokio.rs/) unterstützt — einer in Rust entwickelten asynchronen Laufzeit, die es ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Nutzung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu füllen, indem es einen Mechanismus bereitstellt, der eine bessere Sicherheit natürlicherweise aufrechterhält.

Features von Deno sind:

- Standardmäßige Sicherheit. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für **Datei**, **Netzwerk** oder **Umgebungs**zugriff, es sei denn, diese werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **von Haus aus**.
- Erstrangiger `await` Mechanismus.
- Eingebaute Test- und Codeformatierungseinrichtung (`deno fmt`).
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind und den `Deno` Namespace ausgenommen (oder ihn testen), sollten direkt in allen modernen Browsern funktionieren.
- Script-Bündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache und dennoch leistungsstarke Möglichkeit, JavaScript sowohl für die Programmierung auf Client- als auch auf Server-Seite zu nutzen.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (oft als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby entwickelt wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django stellt es Standardmechanismen für das Routing von URLs, den Zugriff auf Daten aus einer Datenbank, die Erzeugung von HTML aus Templates und die Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}} bereit. Es fördert auch die Verwendung von Designmustern wie DRY ("don't repeat yourself" — schreiben Sie Code nur einmal, wenn überhaupt möglich), MVC (Model-View-Controller) und mehreren anderen.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Entwurfsentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Sites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem häufige Aufgaben, die in den meisten Webprojekten verwendet werden, erleichtert werden, wie z. B.:

- [Einfaches, schnelles Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Back-Ends für [Session](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache) Speicherung.
- Ausdrückliches, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundauftragsverarbeitung](https://laravel.com/docs/queues).
- [Echtzeitereignis-Übertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open Source Web-Framework, das von Microsoft entwickelt wurde, um moderne Webanwendungen und -dienste zu erstellen. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, die für die Nutzung durch Millionen von Benutzern skaliert werden können, und problemlos komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, die es Programmierern ermöglicht, ASP.NET-Code mithilfe jeder unterstützten .NET-Sprache (C#, Visual Basic, etc.) zu schreiben. Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Werkzeugen (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen genutzt.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

Zurück in den frühen Tagen des Webs haben viele Menschen Perl gelernt wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache zu beginnen, und mächtig genug, um Sie am Laufen zu halten. Mojolicious setzt diese Idee mit modernster Technologie um.

Einige der Funktionen, die Mojolicious bietet, sind:

- Ein Echtzeit-Web-Framework, um leicht Ein-Datei-Prototypen in gut strukturierte MVC-Webanwendungen zu überführen.
- RESTful-Routen, Plugins, Befehle, Perl-artige Templates, Inhaltsaushandlung, Sitzungsmanagement, Formularvalidierung, Test-Framework, statische Dateiserver, CGI/[PSGI](https://plackperl.org/) Erkennung, und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket und Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxi, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Verbindungspooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Sehr saubere, portierbare und objektorientierte reine-Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Web-Entwicklung mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige Framework auf Basis von [Java](https://www.java.com/), ist es einfach zu verwenden, um eigenständige, produktionsreife, Spring-basierte Anwendungen zu erstellen, die Sie "einfach ausführen" können. Es ist eine meinungsbildende Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, erlaubt jedoch einen minimalen Aufwand beim Start.

Es kann für kleine Probleme verwendet werden, doch seine Stärke ist der Aufbau größerer Anwendungen, die auf einer Cloud-Architektur basieren. Normalerweise laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige die Benutzerinteraktion bereitstellen und andere Backend-Aufgaben ausführen (z. B. Zugriff auf Datenbanken oder andere Dienste). Lastenausgleicher helfen, Redundanz und Zuverlässigkeit zu gewährleisten oder geolokalisiertes Handling von Benutzeranfragen zu erlauben, um die Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat außerdem einen Überblick über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungsframeworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann machen Sie sich keine Sorgen — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen Erfahrung im tatsächlichen Arbeiten mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul werden wir uns ein wenig in eine andere Richtung bewegen und die Web-Sicherheit betrachten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
