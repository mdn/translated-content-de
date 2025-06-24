---
title: Server-seitige Webframeworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 1eeb7d6d790627d1555aa90555522c6c6b5362eb
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen im Gepäck ist es an der Zeit, zu erkunden, wie Webframeworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung wählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse darüber, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf antwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Übersicht über Client-Server</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Webframeworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und die Leser dazu zu bringen, über die Auswahl eines Frameworks
        für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus realen Webframeworks. Seien Sie nicht besorgt, wenn nicht alles jetzt Sinn macht; wir werden Sie durch den Code in unseren framework-spezifischen Modulen führen.

## Überblick

Server-seitige Webframeworks (auch "Webanwendungs-Frameworks" genannt) sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Webentwicklungsaufgaben vereinfachen, einschließlich der Zuordnung von URLs zu geeigneten Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z. B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Details darüber, wie Webframeworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erläutern wir einige der Kriterien, die Sie bei der Auswahl eines Webframeworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Webframework für Sie tun?

Webframeworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Webframework verwenden, aber es wird dringend empfohlen – es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen besprochen, die oft von Webframeworks bereitgestellt werden (nicht jedes Framework bietet unbedingt alle diese Funktionen!).

### Direkte Arbeit mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll – Server warten auf HTTP-Anfragen des Browsers und geben dann Informationen in HTTP-Antworten zurück. Webframeworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code zur Arbeit mit diesen Anfragen und Antworten generiert. Dies bedeutet, dass Sie mit einfacheren, höherstufigen Code interagieren können, anstatt mit primitiven Netzwerkkonstrukten auf niedriger Ebene.

Das folgende Beispiel zeigt, wie dies im Django (Python) Webframework funktioniert. Jede "View"-Funktion (ein Anfragen-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

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

Die meisten Websites bieten eine Reihe verschiedener Ressourcen, die über unterschiedliche URLs zugänglich sind. Das Verarbeiten all dieser Ressourcen in einer Funktion wäre schwer zu warten, daher bieten Webframeworks einfache Mechanismen, um URL-Muster spezifischen Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile im Hinblick auf die Wartung, da Sie die URL, die für eine bestimmte Funktionalität verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Webframework Routen zu View-Funktionen mit einem Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Wohingegen Django von Entwicklern erwartet, dass sie eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können auf verschiedene Weisen in einer HTTP-Anfrage kodiert werden. Eine HTTP `GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann kodieren, welche Daten in URL-Parametern oder innerhalb der URL-Struktur erforderlich sind. Eine HTTP `POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Hauptteil der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem Client-seitigen Cookie enthalten.

Webframeworks bieten programmierersprachenangepasste Mechanismen, um auf diese Informationen zuzugreifen. Beispielsweise enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anfrage-Typ (z. B. eine HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen dekodieren, die in der Struktur der URL codiert sind, indem es "Capture-Muster" im URL-Mapper definiert (siehe das letzte Codefragment im Abschnitt oben).

### Abstrahieren und Vereinfachen des Datenbankzugriffs

Websites nutzen Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer zu speichern. Webframeworks bieten oft eine Datenbankschicht, die Datenbank-Lese-, Schreib-, Abfrage- und Löschoperationen abstrahiert. Diese Abstraktionsebene wird als Objektrelationaler Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrundeliegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht Entwicklern, basierend auf ihren Anforderungen die Eigenschaften verschiedener Datenbanken zu optimieren.
- Die grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies macht es einfacher und sicherer zu überprüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert sind, das richtige Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise böswillig sind (Hacker können bestimmte Code-Muster verwenden, um bösartige Dinge zu tun, wie z. B. Datenbankeinträge zu löschen).

Das Django Webframework bietet beispielsweise einen ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell spezifiziert die Feldtypen, die gespeichert werden sollen, was auf Feldebene eine Validierung darüber bietet, welche Informationen gespeichert werden können (z. B. erlaubt ein E-Mail-Feld nur gültige E-Mail-Adressen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für die Dokumentation, Beschriftungen für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Es speichert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` ist ein Auswahlfeld, sodass wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert bereitstellen.

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

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Diese kann mit einer Reihe von Feldern gleichzeitig und mit unterschiedlichen Kriterien (z. B. exakt, nicht fallabhängig, größer als usw.) übereinstimmen und unterstützt komplexe Ausdrücke (zum Beispiel können Sie eine Suche nach U11-Teams angeben, deren Teamname mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als ein Argument mit Feldname und Übereinstimmungstyp, getrennt durch doppelte Unterstriche, übergeben wird: **team_level\_\_exact**).

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

Webframeworks bieten häufig Templating-Systeme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments mit Platzhaltern für Daten zu spezifizieren, die beim Generieren einer Seite hinzugefügt werden. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Webframeworks bieten häufig einen Mechanismus, um es einfach zu machen, andere Formate aus gespeicherten Daten zu erzeugen, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Das Django-Templating-System ermöglicht es beispielsweise, Variablen mit einer "doppelten Klammern"-Syntax (z. B. `\{{ variable_name }}`) zu spezifizieren, die durch Werte ersetzt werden, die von der View-Funktion beim Rendern einer Seite übergeben werden. Das Templating-System unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Vorlagen ermöglichen, einfache Operationen wie das Iterieren von in die Vorlage übergebenen Listenwerten durchzuführen.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Das untenstehende Code-Snippet zeigt, wie dies funktioniert. Fortfahrend mit dem Beispiel "jüngste Teams" aus dem vorhergehenden Abschnitt, erhält die HTML-Vorlage eine Listenvariable namens `youngest_teams` von der View. Innerhalb des HTML-Rahmens haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und dann diese in einer `for`-Schleife iteriert. Bei jeder Iteration zeigt die Vorlage den `team_name`-Wert des Teams in einem Listenelement an.

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

## Wie wählt man ein Webframework aus?

Es gibt zahlreiche Webframeworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populärsten im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig sein zu entscheiden, welches Framework den besten Startpunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand eines Webframeworks hängt davon ab, wie vertraut Sie mit der zugrundeliegenden Programmiersprache sind, der Konsistenz seiner API, der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie absolut keine Programmiererfahrung haben, sollten Sie Django in Betracht ziehen (es ist eines der am leichtesten zu lernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits erhebliche Erfahrung mit einem bestimmten Webframework oder einer Programmiersprache hat, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben als auch zu warten (denn Sie können keine neuen Funktionen schreiben, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen des Lernaufwands – z. B. Dokumentation, Community, Programmiererfahrung usw. – andere Faktoren umfassen:

  - _Zweck/Ursprung des Frameworks_: Einige Webframeworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind nach wie vor _besser_ für die Erstellung von Web-Apps mit ähnlichen Einschränkungen geeignet. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, sodass es gut für Blogs und andere Seiten geeignet ist, die das Veröffentlichen von Inhalten umfassen. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. unopinionated_: Ein meinungsstarkes Framework ist eines, in dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks sind tendenziell produktiver, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, sie sind jedoch manchmal weniger flexibel.
  - _Batterien inklusive vs. alles selbst besorgen_: Einige Webframeworks enthalten standardmäßig Tools/Bibliotheken, die jedes Problem adressieren, das ihre Entwickler sich vorstellen können, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen. Frameworks, die alles enthalten, sind oft einfacher zu starten, da Sie bereits alles haben, was Sie benötigen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (je) benötigen, kann es in eingeschränkteren Umgebungen laufen und hat eine kleinere und einfachere Menge an Dingen zu lernen.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, wird zu wartbarerem Code führen als eines, das keine Erwartungen an Entwickler hat. Ähnlich kann das Framework-Design einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Auswahlfaktor, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Sites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durch die Kosten für Lernen und Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, können Sie feststellen, dass sie nicht mehr mit der Anzahl der Anfragen umgehen kann, die sie erhält, wenn Anwender darauf zugreifen. An diesem Punkt könnten Sie in Betracht ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der ein Teil oder die gesamte Antwort einer Webanwendung gespeichert wird, sodass sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Die Rückgabe einer zwischengespeicherten Antwort ist viel schneller als das ursprüngliche Berechnen. Caching kann im Code oder auf dem Server implementiert werden (siehe [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Webframeworks haben unterschiedliche Unterstützungsniveaus, um zu definieren, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ihre Webanwendung auf leistungsfähigerer Hardwar
