---
title: Serverseitige Web-Frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen in der Tasche ist es an der Zeit, zu erforschen, wie Web-Frameworks diese Aufgaben vereinfachen können, und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen bearbeitet und darauf reagiert (siehe <a
          href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Übersicht Client-Server</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und Leser dazu bringen, über die Auswahl eines Frameworks
        für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten, die aus echten Web-Frameworks entnommen wurden. Seien Sie unbesorgt, wenn das nicht **alles** sofort verständlich ist; wir werden Ihnen den Code in unseren frameworkspezifischen Modulen näherbringen.

## Überblick

Serverseitige Web-Frameworks (auch bekannt als "Web-Anwendungs-Frameworks") sind Software-Frameworks, die es erleichtern, Webanwendungen zu schreiben, zu warten und zu skalieren. Sie bieten Werkzeuge und Bibliotheken, die gängige Webentwicklungsaufgaben vereinfachen, darunter das Routen von URLs zu entsprechenden Bearbeitungsprogrammen, die Interaktion mit Datenbanken, die Unterstützung von Sitzungen und Benutzerauthorisierung, das Formatieren von Ausgaben (z. B. HTML, JSON, XML) und die Verbesserung der Sicherheit gegen Web-Attacken.

Der nächste Abschnitt liefert weitere Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erklären wir einige der Kriterien, die Sie zur Auswahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

Dieser Abschnitt diskutiert einige der Funktionen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise all diese Funktionen!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Web-Server und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und liefern dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die clientseitigen Code generiert, der mit diesen Anfragen und Antworten arbeitet. Dies bedeutet, dass Sie leichter mit einfacheren, höheren Ebenen des Codes interagieren können, anstatt mit niedrigeren Netzwerkgrundlagen.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfragenreservierer) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen an den entsprechenden Handler weiterleiten

Die meisten Websites bieten eine Reihe von verschiedenen Ressourcen an, die über unterschiedliche URLs zugänglich sind. Diese alle in einer einzigen Funktion zu bearbeiten, wäre schwer zu warten, deshalb bieten Web-Frameworks einfache Mechanismen, um URL-Muster auf bestimmte Bearbeitungsfunktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die für eine bestimmte Funktion verwendet wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu Ansichts-Funktionen mithilfe eines Decorators hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django Entwickler erwartet, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion zu definieren.

````python
urlpatterns = [
    url(r'^

### Einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Arten kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server wird stattdessen die Update-Informationen als "POST-Daten" im Körper der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten sprachspezifische Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django jeder View-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, die Art der Anfrage (z. B. eine HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen, die in der Struktur der URL kodiert sind, über "Erfassungsmuster" im URL-Abbild definieren (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Webseiten verwenden Datenbanken, um Informationen sowohl Benutzern mitzuteilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankebene, die Lese-, Schreib-, Abfrage- und Löschvorgänge von Datenbanken abstrahiert. Diese Abstraktionsebene wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann im Framework implementiert werden. Dies macht es einfacher und sicherer zu prüfen, ob Daten im richtigen Datenbankfeldtyp gespeichert sind, das korrekte Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Mustercodes verwenden, um schädliche Dinge wie das Löschen von Datenbankeinträgen zu tun).

Beispielsweise bietet das Django-Web-Framework einen ORM, und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell gibt die zu speichernden Feld-_Typen_ an, die eine Feld-validierung darüber ermöglichen, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetext für Dokumentation, Bezeichnungstext für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und das Teamlevel als Charakterfelder und legt eine maximale Anzahl von Zeichen fest, die für jeden Datensatz gespeichert werden dürfen. Das `team_level` ist ein Wahlfeld, daher stellen wir auch eine Zuordnung zwischen anzuzeigenden Auswahlen und zu speichernden Daten sowie einem Standardwert bereit.

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
````

Das Django-Modell bietet eine einfache Abfrageschnittstelle zum Durchsuchen der Datenbank. Diese kann gleichzeitig gegen eine Anzahl von Feldern anhand unterschiedlicher Kriterien (z. B. genau, nicht Groß-/Kleinschreibung beachten, größer als usw.) abgeglichen werden und kann komplexe Aussagen unterstützen (zum Beispiel können Sie eine Suche auf U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir nach allen Datensätzen filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Abgleichstyp, getrennt durch doppelte Unterstriche, übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templatingsysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments mit Platzhaltern für Daten zu spezifizieren, die beim Generieren der Seite hinzugefügt werden. Templates werden oft verwendet, um HTML zu erzeugen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der das Erzeugen anderer Formate aus gespeicherten Daten erleichtert, einschließlich [JSON](/de/docs/Glossary/JSON) und [XML](/de/docs/Glossary/XML).

Zum Beispiel erlaubt das Django Templatesystem die Angabe von Variablen mit einer "Doppelgriffe"-Syntax (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Templatesystem unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die in das Template übergeben wurden, durchzuführen.

> [!NOTE]
> Viele andere Templatingsysteme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript) usw.

Das Code-Snippet unten zeigt, wie dies funktioniert. Im Beispiel des "jüngsten Teams" aus dem vorherigen Abschnitt übergibt die View der HTML-Vorlage eine Listenvariable namens `youngest_teams`. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zunächst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife darüber iteriert. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listeneintrag an.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{\{ team.team_name \}\}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

## Wie wählt man ein Web-Framework aus?

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen ein paar der populäreren Frameworks im folgenden Abschnitt auf). Angesichts der vielen Wahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, von der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie ganz am Anfang ohne jegliche Programmiererfahrung stehen, sollten Sie Django in Betracht ziehen (es ist einer der am einfachsten zu lernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits über umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache verfügt, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand zum Schreiben als auch zur Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte fehlerhaft sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich wie die für "Lernaufwand" — z. B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren umfassen:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind immer noch _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Beispielsweise wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, weshalb es sich gut für Blogs und andere Websites eignet, die das Veröffentlichen von Inhalten beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Gewicht Framework und eignet sich ausgezeichnet zur Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Gegensätzlichkeit vs. Neutralität_: Ein gegensätzliches Framework ist eines, bei dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Gegensätzliche Frameworks tendieren dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, sind aber manchmal weniger flexibel.
  - _Standardmäßig vollständig vs. eigenständig_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die alle Probleme ansprechen, während leichtere Frameworks erwarten, dass Webentwickler die Lösungen zu Problemen aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher, um mit der Arbeit zu beginnen, da Sie bereits alles haben, was Sie benötigen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles enthält, was Sie (jemals) benötigen, kann es in eingeschränkteren Umgebungen laufen und wird eine kleinere und einfach zu erlernende Menge an Dingen haben.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird ein Framework, das eine [Model-View-Controller](/de/docs/Glossary/MVC) Architektur fördert, um Code in logische Funktionen zu trennen, zu besser wartbarem Code führen als eines, das keine Erwartungen an die Entwickler hat. Ähnlich kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, weil selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommene Geschwindigkeitsvorteile einer anderen Sprache wie C++ oder JavaScript können durch die Lern- und Wartungskosten ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, könnten Sie feststellen, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, während Benutzer darauf zugreifen. In diesem Punkt könnten Sie darüber nachdenken, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine Webantwort ganz oder teilweise speichern, damit sie bei späteren Anfragen nicht erneut berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller als das Berechnen einer neuen. Caching kann in Ihrem Code oder auf dem Server (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)) implementiert werden. Web-Frameworks haben unterschiedliche Ebenen der Unterstützung für die Definition, welcher Inhalt zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ihre Webanwendung auf leistungsstärkere Hardware laufen zu lassen). An diesem Punkt müssen Sie eventuell _horizontal skalieren_ (die Last durch Verteilung Ihrer Website auf mehrere Webserver und Datenbanken teilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz vor gängigen Web-Angriffen. Django zum Beispiel säubert alle Nutzereingaben aus HTML-Templates, sodass benutzereigenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber dieser ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, darunter Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht, usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie wahrscheinlich Ihr Framework basierend auf "Lernfreundlichkeit" auswählen. Neben der "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentation/Tutorials und eine aktive Gemeinschaft, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebsites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenülinks (genannt wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Vorlagen und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Website (erreichbar über die Gemeinschaftslinks).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und über einige spezifische serverseitige Web-Frameworks sprechen.

Die folgenden serverseitigen Frameworks repräsentieren _einige_ der zum Zeitpunkt des Schreibens am meisten verbreiteten. Alle von ihnen bieten alles, was Sie für produktive Arbeit benötigen — sie sind Open-Source, werden aktiv entwickelt, haben enthusiastische Communities, die Dokumentationen erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in einer großen Anzahl von hochkarätigen Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Webseiten der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern nimmt es Ihnen viele der Ärgernisse der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Batteries Included" und bietet nahezu alles, was die meisten Entwickler benötigen könnten, "out of the box". Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht lesbar und zu warten.

Beliebte Websites, die Django verwenden (von der Django-Homepage), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask aus dem Stand ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und Debugger sowie Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templates, sichere Cookies, [Einheitstests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragenzustellung. Es verfügt über gute Dokumentation und eine aktive Community.

Flask ist äußerst populär geworden, insbesondere für Entwickler, die Webdienste auf kleinen, ressourcenbegrenzten Systemen bereitstellen müssen (z. B. das Betreiben eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unvoreingenommenes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung zum Ausführen von JavaScript). Es bietet einen robusten Satz von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und [Middleware](/de/docs/Glossary/Middleware).

Express ist äußerst populär, teilweise weil es den Übergang von clientseitigen JavaScript-Webprogrammierern in die serverseitige Entwicklung erleichtert, und teilweise weil es ressourceneffizient ist (die darunterliegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime-Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — eine auf Rust basierende asynchrone Laufzeitumgebung, die es ihm ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der von Natur aus bessere Sicherheit gewährleistet.

Zu den Funktionen von Deno gehören:

- Standardmäßig Sicherheit. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für **Datei**-, **Netzwerk**- oder **Umgebungs**zugriff, es sei denn, sie werden ausdrücklich erlaubt.
- Unterstützung für TypeScript **out-of-the-box**.
- Erstklassige Await-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript-)Browserkompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, mit Ausnahme des `Deno`-Namensraums (oder einem Feature-Test dafür), sollten direkt in jedem modernen Browser funktionieren.
- Skriptbündelung in eine einzige JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (in der Regel "Ruby on Rails" genannt) ist ein Web-Framework, das für die Ruby-Programmiersprache geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es Standardmechanismen zum Routen von URLs, zum Zugriff auf Daten aus einer Datenbank, zum Erstellen von HTML aus Templates und zum Formatieren von Daten als [JSON](/de/docs/Glossary/JSON) oder [XML](/de/docs/Glossary/XML). Es fördert gleichermaßen die Verwendung von Designmustern wie DRY ("don't repeat yourself" — Code nur einmal schreiben, wenn es möglich ist), MVC (Model-View-Controller) und eine Reihe anderer.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu vereinfachen, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, vereinfacht, z. B.:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injektion-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Sitzungen](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrucksstarkes, intuitives [(Datenbank-ORM)](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundjob-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für die Erstellung moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für die Verwendung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Datenüberformulare oder Echtzeitkommunikation hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist, sodass Programmierer ASP.NET-Code in jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) schreiben können. Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwicklergemeinschaft und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache anzufangen, und gleichzeitig leistungsfähig genug, um lange Zeit weiterzumachen. Mojolicious setzt diese Idee mit Spitzentechnologien um.

Einige der Funktionen, die von Mojolicious bereitgestellt werden, sind:

- Ein Echtzeit-Web-Framework, um schnell einseitige Prototypen zu gut strukturierten MVC-Webanwendungen auszubauen.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlung, Sitzungsmanagement, Formvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Verbindungs-Pooling, Timeout, Cookie, Multipart und gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Eine sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die Durchführung von serverseitigem Web-Development mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige auf [Java](https://www.java.com/) basierende Framework, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die einfach "laufen". Es ist eine tendenzielle Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht jedoch einen Start mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt in der Erstellung von Anwendungen größeren Maßstabs, die einen Cloud-Ansatz verwenden. In der Regel laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Dienste für die Benutzerinteraktion und andere Dienste für die Backend-Arbeit bereitstellen (z. B. der Zugriff auf Datenbanken oder andere Dienstleistungen). Lastenausgleich sorgt für Redundanz und Zuverlässigkeit oder ermöglicht eine geografisch lokalisierte Bearbeitung von Benutzeranfragen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick auf hoher Ebene über einige populäre Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks erörtert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann keine Sorge — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen einige Erfahrungen in der tatsächlichen Arbeit mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul ändern wir die Richtung ein wenig und betrachten die Web-Sicherheit.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}, views.index), # example: /best/myteamname/5/
url(r'^best/(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/

### Einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Arten kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server wird stattdessen die Update-Informationen als "POST-Daten" im Körper der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten sprachspezifische Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django jeder View-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, die Art der Anfrage (z. B. eine HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen, die in der Struktur der URL kodiert sind, über "Erfassungsmuster" im URL-Abbild definieren (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Webseiten verwenden Datenbanken, um Informationen sowohl Benutzern mitzuteilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankebene, die Lese-, Schreib-, Abfrage- und Löschvorgänge von Datenbanken abstrahiert. Diese Abstraktionsebene wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann im Framework implementiert werden. Dies macht es einfacher und sicherer zu prüfen, ob Daten im richtigen Datenbankfeldtyp gespeichert sind, das korrekte Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Mustercodes verwenden, um schädliche Dinge wie das Löschen von Datenbankeinträgen zu tun).

Beispielsweise bietet das Django-Web-Framework einen ORM, und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell gibt die zu speichernden Feld-_Typen_ an, die eine Feld-validierung darüber ermöglichen, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetext für Dokumentation, Bezeichnungstext für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und das Teamlevel als Charakterfelder und legt eine maximale Anzahl von Zeichen fest, die für jeden Datensatz gespeichert werden dürfen. Das `team_level` ist ein Wahlfeld, daher stellen wir auch eine Zuordnung zwischen anzuzeigenden Auswahlen und zu speichernden Daten sowie einem Standardwert bereit.

![](3-416e5f6f.md)

Das Django-Modell bietet eine einfache Abfrageschnittstelle zum Durchsuchen der Datenbank. Diese kann gleichzeitig gegen eine Anzahl von Feldern anhand unterschiedlicher Kriterien (z. B. genau, nicht Groß-/Kleinschreibung beachten, größer als usw.) abgeglichen werden und kann komplexe Aussagen unterstützen (zum Beispiel können Sie eine Suche auf U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir nach allen Datensätzen filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Abgleichstyp, getrennt durch doppelte Unterstriche, übergeben wird: **team_level\_\_exact**).

![](4-a1db2ea9.md)

### Daten rendern

Web-Frameworks bieten oft Templatingsysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments mit Platzhaltern für Daten zu spezifizieren, die beim Generieren der Seite hinzugefügt werden. Templates werden oft verwendet, um HTML zu erzeugen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der das Erzeugen anderer Formate aus gespeicherten Daten erleichtert, einschließlich [JSON](/de/docs/Glossary/JSON) und [XML](/de/docs/Glossary/XML).

Zum Beispiel erlaubt das Django Templatesystem die Angabe von Variablen mit einer "Doppelgriffe"-Syntax (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Templatesystem unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die in das Template übergeben wurden, durchzuführen.

> [!NOTE]
> Viele andere Templatingsysteme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript) usw.

Das Code-Snippet unten zeigt, wie dies funktioniert. Im Beispiel des "jüngsten Teams" aus dem vorherigen Abschnitt übergibt die View der HTML-Vorlage eine Listenvariable namens `youngest_teams`. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zunächst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife darüber iteriert. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listeneintrag an.

![](5-390324fe.md)

## Wie wählt man ein Web-Framework aus?

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen ein paar der populäreren Frameworks im folgenden Abschnitt auf). Angesichts der vielen Wahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, von der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie ganz am Anfang ohne jegliche Programmiererfahrung stehen, sollten Sie Django in Betracht ziehen (es ist einer der am einfachsten zu lernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits über umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache verfügt, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand zum Schreiben als auch zur Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte fehlerhaft sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich wie die für "Lernaufwand" — z. B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren umfassen:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind immer noch _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Beispielsweise wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, weshalb es sich gut für Blogs und andere Websites eignet, die das Veröffentlichen von Inhalten beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Gewicht Framework und eignet sich ausgezeichnet zur Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Gegensätzlichkeit vs. Neutralität_: Ein gegensätzliches Framework ist eines, bei dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Gegensätzliche Frameworks tendieren dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, sind aber manchmal weniger flexibel.
  - _Standardmäßig vollständig vs. eigenständig_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die alle Probleme ansprechen, während leichtere Frameworks erwarten, dass Webentwickler die Lösungen zu Problemen aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher, um mit der Arbeit zu beginnen, da Sie bereits alles haben, was Sie benötigen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles enthält, was Sie (jemals) benötigen, kann es in eingeschränkteren Umgebungen laufen und wird eine kleinere und einfach zu erlernende Menge an Dingen haben.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird ein Framework, das eine [Model-View-Controller](/de/docs/Glossary/MVC) Architektur fördert, um Code in logische Funktionen zu trennen, zu besser wartbarem Code führen als eines, das keine Erwartungen an die Entwickler hat. Ähnlich kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, weil selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommene Geschwindigkeitsvorteile einer anderen Sprache wie C++ oder JavaScript können durch die Lern- und Wartungskosten ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, könnten Sie feststellen, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, während Benutzer darauf zugreifen. In diesem Punkt könnten Sie darüber nachdenken, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine Webantwort ganz oder teilweise speichern, damit sie bei späteren Anfragen nicht erneut berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller als das Berechnen einer neuen. Caching kann in Ihrem Code oder auf dem Server (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)) implementiert werden. Web-Frameworks haben unterschiedliche Ebenen der Unterstützung für die Definition, welcher Inhalt zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ihre Webanwendung auf leistungsstärkere Hardware laufen zu lassen). An diesem Punkt müssen Sie eventuell _horizontal skalieren_ (die Last durch Verteilung Ihrer Website auf mehrere Webserver und Datenbanken teilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz vor gängigen Web-Angriffen. Django zum Beispiel säubert alle Nutzereingaben aus HTML-Templates, sodass benutzereigenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber dieser ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, darunter Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht, usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie wahrscheinlich Ihr Framework basierend auf "Lernfreundlichkeit" auswählen. Neben der "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentation/Tutorials und eine aktive Gemeinschaft, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebsites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenülinks (genannt wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Vorlagen und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Website (erreichbar über die Gemeinschaftslinks).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und über einige spezifische serverseitige Web-Frameworks sprechen.

Die folgenden serverseitigen Frameworks repräsentieren _einige_ der zum Zeitpunkt des Schreibens am meisten verbreiteten. Alle von ihnen bieten alles, was Sie für produktive Arbeit benötigen — sie sind Open-Source, werden aktiv entwickelt, haben enthusiastische Communities, die Dokumentationen erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in einer großen Anzahl von hochkarätigen Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Webseiten der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern nimmt es Ihnen viele der Ärgernisse der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Batteries Included" und bietet nahezu alles, was die meisten Entwickler benötigen könnten, "out of the box". Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht lesbar und zu warten.

Beliebte Websites, die Django verwenden (von der Django-Homepage), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask aus dem Stand ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und Debugger sowie Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templates, sichere Cookies, [Einheitstests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragenzustellung. Es verfügt über gute Dokumentation und eine aktive Community.

Flask ist äußerst populär geworden, insbesondere für Entwickler, die Webdienste auf kleinen, ressourcenbegrenzten Systemen bereitstellen müssen (z. B. das Betreiben eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unvoreingenommenes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung zum Ausführen von JavaScript). Es bietet einen robusten Satz von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und [Middleware](/de/docs/Glossary/Middleware).

Express ist äußerst populär, teilweise weil es den Übergang von clientseitigen JavaScript-Webprogrammierern in die serverseitige Entwicklung erleichtert, und teilweise weil es ressourceneffizient ist (die darunterliegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime-Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — eine auf Rust basierende asynchrone Laufzeitumgebung, die es ihm ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der von Natur aus bessere Sicherheit gewährleistet.

Zu den Funktionen von Deno gehören:

- Standardmäßig Sicherheit. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für **Datei**-, **Netzwerk**- oder **Umgebungs**zugriff, es sei denn, sie werden ausdrücklich erlaubt.
- Unterstützung für TypeScript **out-of-the-box**.
- Erstklassige Await-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript-)Browserkompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, mit Ausnahme des `Deno`-Namensraums (oder einem Feature-Test dafür), sollten direkt in jedem modernen Browser funktionieren.
- Skriptbündelung in eine einzige JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (in der Regel "Ruby on Rails" genannt) ist ein Web-Framework, das für die Ruby-Programmiersprache geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es Standardmechanismen zum Routen von URLs, zum Zugriff auf Daten aus einer Datenbank, zum Erstellen von HTML aus Templates und zum Formatieren von Daten als [JSON](/de/docs/Glossary/JSON) oder [XML](/de/docs/Glossary/XML). Es fördert gleichermaßen die Verwendung von Designmustern wie DRY ("don't repeat yourself" — Code nur einmal schreiben, wenn es möglich ist), MVC (Model-View-Controller) und eine Reihe anderer.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu vereinfachen, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, vereinfacht, z. B.:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injektion-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Sitzungen](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrucksstarkes, intuitives [(Datenbank-ORM)](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundjob-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für die Erstellung moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für die Verwendung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Datenüberformulare oder Echtzeitkommunikation hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist, sodass Programmierer ASP.NET-Code in jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) schreiben können. Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwicklergemeinschaft und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache anzufangen, und gleichzeitig leistungsfähig genug, um lange Zeit weiterzumachen. Mojolicious setzt diese Idee mit Spitzentechnologien um.

Einige der Funktionen, die von Mojolicious bereitgestellt werden, sind:

- Ein Echtzeit-Web-Framework, um schnell einseitige Prototypen zu gut strukturierten MVC-Webanwendungen auszubauen.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlung, Sitzungsmanagement, Formvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Verbindungs-Pooling, Timeout, Cookie, Multipart und gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Eine sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die Durchführung von serverseitigem Web-Development mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige auf [Java](https://www.java.com/) basierende Framework, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die einfach "laufen". Es ist eine tendenzielle Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht jedoch einen Start mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt in der Erstellung von Anwendungen größeren Maßstabs, die einen Cloud-Ansatz verwenden. In der Regel laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Dienste für die Benutzerinteraktion und andere Dienste für die Backend-Arbeit bereitstellen (z. B. der Zugriff auf Datenbanken oder andere Dienstleistungen). Lastenausgleich sorgt für Redundanz und Zuverlässigkeit oder ermöglicht eine geografisch lokalisierte Bearbeitung von Benutzeranfragen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick auf hoher Ebene über einige populäre Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks erörtert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann keine Sorge — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen einige Erfahrungen in der tatsächlichen Arbeit mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul ändern wir die Richtung ein wenig und betrachten die Web-Sicherheit.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}, views.best),
]

```

### Einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Arten kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server wird stattdessen die Update-Informationen als "POST-Daten" im Körper der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten sprachspezifische Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django jeder View-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, die Art der Anfrage (z. B. eine HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen, die in der Struktur der URL kodiert sind, über "Erfassungsmuster" im URL-Abbild definieren (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Webseiten verwenden Datenbanken, um Informationen sowohl Benutzern mitzuteilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankebene, die Lese-, Schreib-, Abfrage- und Löschvorgänge von Datenbanken abstrahiert. Diese Abstraktionsebene wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann im Framework implementiert werden. Dies macht es einfacher und sicherer zu prüfen, ob Daten im richtigen Datenbankfeldtyp gespeichert sind, das korrekte Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Mustercodes verwenden, um schädliche Dinge wie das Löschen von Datenbankeinträgen zu tun).

Beispielsweise bietet das Django-Web-Framework einen ORM, und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell gibt die zu speichernden Feld-_Typen_ an, die eine Feld-validierung darüber ermöglichen, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetext für Dokumentation, Bezeichnungstext für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und das Teamlevel als Charakterfelder und legt eine maximale Anzahl von Zeichen fest, die für jeden Datensatz gespeichert werden dürfen. Das `team_level` ist ein Wahlfeld, daher stellen wir auch eine Zuordnung zwischen anzuzeigenden Auswahlen und zu speichernden Daten sowie einem Standardwert bereit.

![](3-416e5f6f.md)

Das Django-Modell bietet eine einfache Abfrageschnittstelle zum Durchsuchen der Datenbank. Diese kann gleichzeitig gegen eine Anzahl von Feldern anhand unterschiedlicher Kriterien (z. B. genau, nicht Groß-/Kleinschreibung beachten, größer als usw.) abgeglichen werden und kann komplexe Aussagen unterstützen (zum Beispiel können Sie eine Suche auf U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir nach allen Datensätzen filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Abgleichstyp, getrennt durch doppelte Unterstriche, übergeben wird: **team_level\_\_exact**).

![](4-a1db2ea9.md)

### Daten rendern

Web-Frameworks bieten oft Templatingsysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments mit Platzhaltern für Daten zu spezifizieren, die beim Generieren der Seite hinzugefügt werden. Templates werden oft verwendet, um HTML zu erzeugen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der das Erzeugen anderer Formate aus gespeicherten Daten erleichtert, einschließlich [JSON](/de/docs/Glossary/JSON) und [XML](/de/docs/Glossary/XML).

Zum Beispiel erlaubt das Django Templatesystem die Angabe von Variablen mit einer "Doppelgriffe"-Syntax (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Templatesystem unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die in das Template übergeben wurden, durchzuführen.

> [!NOTE]
> Viele andere Templatingsysteme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript) usw.

Das Code-Snippet unten zeigt, wie dies funktioniert. Im Beispiel des "jüngsten Teams" aus dem vorherigen Abschnitt übergibt die View der HTML-Vorlage eine Listenvariable namens `youngest_teams`. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zunächst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife darüber iteriert. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listeneintrag an.

![](5-390324fe.md)

## Wie wählt man ein Web-Framework aus?

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen ein paar der populäreren Frameworks im folgenden Abschnitt auf). Angesichts der vielen Wahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, von der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie ganz am Anfang ohne jegliche Programmiererfahrung stehen, sollten Sie Django in Betracht ziehen (es ist einer der am einfachsten zu lernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits über umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache verfügt, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand zum Schreiben als auch zur Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte fehlerhaft sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich wie die für "Lernaufwand" — z. B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren umfassen:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind immer noch _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Beispielsweise wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, weshalb es sich gut für Blogs und andere Websites eignet, die das Veröffentlichen von Inhalten beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Gewicht Framework und eignet sich ausgezeichnet zur Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Gegensätzlichkeit vs. Neutralität_: Ein gegensätzliches Framework ist eines, bei dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Gegensätzliche Frameworks tendieren dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, sind aber manchmal weniger flexibel.
  - _Standardmäßig vollständig vs. eigenständig_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die alle Probleme ansprechen, während leichtere Frameworks erwarten, dass Webentwickler die Lösungen zu Problemen aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher, um mit der Arbeit zu beginnen, da Sie bereits alles haben, was Sie benötigen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles enthält, was Sie (jemals) benötigen, kann es in eingeschränkteren Umgebungen laufen und wird eine kleinere und einfach zu erlernende Menge an Dingen haben.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird ein Framework, das eine [Model-View-Controller](/de/docs/Glossary/MVC) Architektur fördert, um Code in logische Funktionen zu trennen, zu besser wartbarem Code führen als eines, das keine Erwartungen an die Entwickler hat. Ähnlich kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, weil selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommene Geschwindigkeitsvorteile einer anderen Sprache wie C++ oder JavaScript können durch die Lern- und Wartungskosten ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, könnten Sie feststellen, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, während Benutzer darauf zugreifen. In diesem Punkt könnten Sie darüber nachdenken, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine Webantwort ganz oder teilweise speichern, damit sie bei späteren Anfragen nicht erneut berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller als das Berechnen einer neuen. Caching kann in Ihrem Code oder auf dem Server (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)) implementiert werden. Web-Frameworks haben unterschiedliche Ebenen der Unterstützung für die Definition, welcher Inhalt zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ihre Webanwendung auf leistungsstärkere Hardware laufen zu lassen). An diesem Punkt müssen Sie eventuell _horizontal skalieren_ (die Last durch Verteilung Ihrer Website auf mehrere Webserver und Datenbanken teilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz vor gängigen Web-Angriffen. Django zum Beispiel säubert alle Nutzereingaben aus HTML-Templates, sodass benutzereigenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber dieser ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, darunter Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht, usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie wahrscheinlich Ihr Framework basierend auf "Lernfreundlichkeit" auswählen. Neben der "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentation/Tutorials und eine aktive Gemeinschaft, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebsites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenülinks (genannt wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Vorlagen und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Website (erreichbar über die Gemeinschaftslinks).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und über einige spezifische serverseitige Web-Frameworks sprechen.

Die folgenden serverseitigen Frameworks repräsentieren _einige_ der zum Zeitpunkt des Schreibens am meisten verbreiteten. Alle von ihnen bieten alles, was Sie für produktive Arbeit benötigen — sie sind Open-Source, werden aktiv entwickelt, haben enthusiastische Communities, die Dokumentationen erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in einer großen Anzahl von hochkarätigen Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Webseiten der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern nimmt es Ihnen viele der Ärgernisse der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Batteries Included" und bietet nahezu alles, was die meisten Entwickler benötigen könnten, "out of the box". Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht lesbar und zu warten.

Beliebte Websites, die Django verwenden (von der Django-Homepage), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask aus dem Stand ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und Debugger sowie Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templates, sichere Cookies, [Einheitstests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragenzustellung. Es verfügt über gute Dokumentation und eine aktive Community.

Flask ist äußerst populär geworden, insbesondere für Entwickler, die Webdienste auf kleinen, ressourcenbegrenzten Systemen bereitstellen müssen (z. B. das Betreiben eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unvoreingenommenes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung zum Ausführen von JavaScript). Es bietet einen robusten Satz von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und [Middleware](/de/docs/Glossary/Middleware).

Express ist äußerst populär, teilweise weil es den Übergang von clientseitigen JavaScript-Webprogrammierern in die serverseitige Entwicklung erleichtert, und teilweise weil es ressourceneffizient ist (die darunterliegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime-Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — eine auf Rust basierende asynchrone Laufzeitumgebung, die es ihm ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der von Natur aus bessere Sicherheit gewährleistet.

Zu den Funktionen von Deno gehören:

- Standardmäßig Sicherheit. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für **Datei**-, **Netzwerk**- oder **Umgebungs**zugriff, es sei denn, sie werden ausdrücklich erlaubt.
- Unterstützung für TypeScript **out-of-the-box**.
- Erstklassige Await-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript-)Browserkompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, mit Ausnahme des `Deno`-Namensraums (oder einem Feature-Test dafür), sollten direkt in jedem modernen Browser funktionieren.
- Skriptbündelung in eine einzige JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (in der Regel "Ruby on Rails" genannt) ist ein Web-Framework, das für die Ruby-Programmiersprache geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es Standardmechanismen zum Routen von URLs, zum Zugriff auf Daten aus einer Datenbank, zum Erstellen von HTML aus Templates und zum Formatieren von Daten als [JSON](/de/docs/Glossary/JSON) oder [XML](/de/docs/Glossary/XML). Es fördert gleichermaßen die Verwendung von Designmustern wie DRY ("don't repeat yourself" — Code nur einmal schreiben, wenn es möglich ist), MVC (Model-View-Controller) und eine Reihe anderer.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu vereinfachen, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, vereinfacht, z. B.:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injektion-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Sitzungen](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrucksstarkes, intuitives [(Datenbank-ORM)](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundjob-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für die Erstellung moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für die Verwendung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Datenüberformulare oder Echtzeitkommunikation hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist, sodass Programmierer ASP.NET-Code in jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) schreiben können. Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwicklergemeinschaft und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache anzufangen, und gleichzeitig leistungsfähig genug, um lange Zeit weiterzumachen. Mojolicious setzt diese Idee mit Spitzentechnologien um.

Einige der Funktionen, die von Mojolicious bereitgestellt werden, sind:

- Ein Echtzeit-Web-Framework, um schnell einseitige Prototypen zu gut strukturierten MVC-Webanwendungen auszubauen.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlung, Sitzungsmanagement, Formvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Verbindungs-Pooling, Timeout, Cookie, Multipart und gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Eine sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die Durchführung von serverseitigem Web-Development mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige auf [Java](https://www.java.com/) basierende Framework, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die einfach "laufen". Es ist eine tendenzielle Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht jedoch einen Start mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt in der Erstellung von Anwendungen größeren Maßstabs, die einen Cloud-Ansatz verwenden. In der Regel laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Dienste für die Benutzerinteraktion und andere Dienste für die Backend-Arbeit bereitstellen (z. B. der Zugriff auf Datenbanken oder andere Dienstleistungen). Lastenausgleich sorgt für Redundanz und Zuverlässigkeit oder ermöglicht eine geografisch lokalisierte Bearbeitung von Benutzeranfragen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick auf hoher Ebene über einige populäre Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks erörtert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann keine Sorge — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen einige Erfahrungen in der tatsächlichen Arbeit mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul ändern wir die Richtung ein wenig und betrachten die Web-Sicherheit.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
```
