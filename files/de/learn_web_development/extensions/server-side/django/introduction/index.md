---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Webframework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Außerdem zeigen wir Ihnen einige der Hauptbausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um dies zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis für <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">Server-seitige Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich vertraut zu machen, was Django ist, welche Funktionalitäten es bietet und die Hauptbausteine einer Django-Anwendung zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochgradiges Python-Webframework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Entwickelt von erfahrenen Entwicklern, nimmt Django den größten Teil der lästigen Arbeit der Webentwicklung ab, damit Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine blühende und aktive Community, großartige Dokumentation und viele Optionen für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig
  - : Django folgt der Philosophie "Batteries included" und bietet fast alles, was Entwickler "out of the box" tun möchten. Da alles, was Sie brauchen, Teil eines einzigen "Produkts" ist, arbeitet alles nahtlos zusammen, folgt konsistenten Designprinzipien und hat eine umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) zum Erstellen fast jeder Art von Website verwendet — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtensites. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in nahezu jedem Format bereitstellen (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar für fast jede gewünschte Funktionalität Auswahlmöglichkeiten (z.B. mehrere beliebte Datenbanken, Template-Engines usw.), kann jedoch auch erweitert werden, um andere Komponenten zu verwenden, falls erforderlich.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das "die richtigen Dinge" tut, um die Website automatisch zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten und vermeidet häufige Fehler wie das Speichern von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel und die tatsächlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern statt eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der durch Senden des Passworts durch eine [kryptographische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es durch die Hash-Funktion gesendet und die Ausgabe mit dem gespeicherten Hash-Wert verglichen wird. Aufgrund der "Einweg-Natur" der Funktion ist es jedoch selbst dann schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden, wenn ein gespeicherter Hash-Wert kompromittiert wurde._

    Django ermöglicht den Schutz vor vielen Standardangriffen wie SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Webseiten-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing-Architektur](https://en.wikipedia.org/wiki/Shared_nothing_architecture)" (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Traffic skalieren kann, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungsserver. Einige der meistbesuchten Websites haben erfolgreich Django skaliert, um ihre Anforderungen zu erfüllen (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Verwendung von Designprinzipien und -mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere wird das Prinzip "Don't Repeat Yourself" (DRY) verwendet, sodass keine unnötige Duplikation besteht, was die Menge an Code reduziert. Django fördert auch die Gruppierung verwandter Funktionalität in wiederverwendbare "Anwendungen" und auf niedrigerer Ebene die Gruppierung verwandten Codes in Module (nach dem {{Glossary("MVC", "Model View Controller (MVC)")}} Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft eine spezielle Infrastruktur und Dokumentation für Hosting von Django-Sites bereitstellen.

## Woher kommt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nachdem sie eine Reihe von Sites erstellt hatten, begann das Team, viel gemeinsamen Code und Designmuster herauszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungsframework, das im Juli 2005 als "Django"-Projekt Open Source gestellt wurde.

Django hat sich seitdem weiterentwickelt und verbessert, von seiner ersten Meilenstein-Veröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung hat neue Funktionen und Fehlerbehebungen hinzugefügt, die von der Unterstützung neuer Formen von Datenbanken, Template-Engines und Caching bis hin zur Einführung von "generischen" View-Funktionen und -Klassen reichen (die die Menge an Code reduzieren, die Entwickler für eine Anzahl von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Schauen Sie sich die [Releasenotes](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django investiert wird.

Django ist heute ein blühendes, kollaboratives Open-Source-Projekt mit vielen Tausenden Nutzern und Beiträgern. Während es noch einige Funktionen hat, die seinen Ursprung widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das fähig ist, jede Art von Website zu entwickeln.

## Wie beliebt ist Django?

Es gibt keine leicht verfügbare und definitive Messung der Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit über Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen kann). Eine besser Frage ist, ob Django "beliebt genug" ist, um die Probleme von unpopulären Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, für Sie bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochkarätiger Websites, die Django verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist Django ein beliebtes Framework!

Hochkarätige Websites, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Webframeworks bezeichnen sich oft als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind diejenigen, die eine Meinung darüber haben, wie eine bestimmte Aufgabe "richtig" erledigt werden sollte. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel sein, Probleme außerhalb ihres Hauptbereichs zu lösen, und bieten tendenziell weniger Auswahlmöglichkeiten bei den Komponenten und Ansätzen, die sie verwenden können.

Unmeinungsstarke Frameworks hingegen haben weit weniger Einschränkungen, wie Komponenten zusammengefügt werden sollten, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie ermöglichen Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, allerdings auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas meinungsstark" und liefert damit das "Beste aus beiden Welten". Es bietet einen Satz von Komponenten, um die meisten Aufgaben der Webentwicklung zu bearbeiten und eine (oder zwei) bevorzugte Möglichkeiten, sie zu verwenden. Dank Djangos entkoppelter Architektur können Sie jedoch in der Regel aus einer Reihe von Optionen auswählen oder Unterstützung für völlig neue hinzufügen, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage eingeht, ermittelt die Anwendung, was basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten benötigt wird. Abhängig von den Anforderungen kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung wird dann eine Antwort an den Webbrowser zurückgeben, oft eine HTML-Seite dynamisch für den Browser generieren, indem sie die abgerufenen Daten in Platzhalter in einem HTML-Template einfügt.

Django-Webanwendungen gruppieren typischerweise den Code, der jeden dieser Schritte behandelt, in separate Dateien:

![Django - Dateien für Views, Models, URLs, Template](basic-django.png)

- **URLs:** Obwohl es möglich ist, Anfragen von jeder URL über eine einzige Funktion zu verarbeiten, ist es viel wartbarer, eine separate View-Funktion zu schreiben, um jede Ressource zu bearbeiten. Ein URL-Mapper wird verwendet, um HTTP-Anfragen je nach Anforderungs-URL zur entsprechenden View weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, erkennen und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsbearbeitungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen auf die Daten zu, die zur Erfüllung von Anforderungen über _Models_ benötigt werden, und delegieren die Formatierung der Antwort an _Templates_.
- **Models:** Models sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zur Verwaltung (Hinzufügen, Ändern, Löschen) und Abfrage von Datensätzen in der Datenbank bieten.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, mit Platzhaltern, die den tatsächlichen Inhalt darstellen. Eine _View_ kann eine HTML-Seite dynamisch unter Verwendung eines HTML-Templates erstellen, indem sie sie mit Daten aus einem _Model_ füllt. Ein Template kann verwendet werden, um die Struktur eines beliebigen Dateityps zu definieren; es muss nicht unbedingt HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)" Architektur. Sie hat viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}} Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs detaillierter darauf eingehen, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Die Anforderung an die richtige View senden (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (bestimmten URL-\_Mustern) und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage eingeht, die eine URL enthält, die einem angegebenen Muster entspricht, wird die zugehörige View-Funktion aufgerufen und die Anforderung übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns` Objekt ist eine Liste von `path()` und/oder `re_path()` Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei Elemente durch Kommas getrennt sind und möglicherweise ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument für beide Methoden ist eine Route (ein Muster), das abgeglichen wird. Die `path()`-Methode verwendet Winkelklammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichsansatz, der als regulärer Ausdruck bekannt ist. Wir werden in einem späteren Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` genannt wird und in einem Modul namens `views` zu finden ist (d.h. in einer Datei namens `views.py`)

### Anfrage bearbeiten (views.py)

Views sind das Herzstück der Webanwendung, empfangen HTTP-Anfragen von Webclients und geben HTTP-Antworten zurück. Dazwischen organisieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anforderung, und unsere Antwort gibt eine fest codierte Zeichenfolge zurück. Wir zeigen Ihnen eine Anforderung, die in einem späteren Abschnitt etwas interessanteres tut.

```python
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

> [!NOTE]
> Ein wenig Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer View verwenden können: `from django.http import HttpResponse`. Es gibt auch andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` wie oben gezeigt deklariert, wobei benannte Parameter in Klammern nach dem Namen der Funktion aufgeführt werden; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block sind (obligatorische Einrückung ist ein Schlüsselmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Models bezeichnet werden. Models definieren die Struktur der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahloptionen, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Models ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen auswählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code und Django kümmert sich um die gesamte "Dreckarbeit" der Kommunikation mit der Datenbank für Sie.

Der Codeausschnitt unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse wird von der Django-Klasse `models.Model` abgeleitet. Sie definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden. Das `team_level` kann einen von mehreren Werten haben, daher definieren wir es als Auswahlfeld und bieten eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten, zusammen mit einem Standardwert.

```python
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # …
        # list other team levels
    )
    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')
```

> [!NOTE]
> Ein wenig Python:
>
> Python unterstützt "objektorientierte Programmierung", eine Programmierweise, bei der wir unseren Code in Objekte organisieren, die zugehörige Daten und Funktionen zur Bearbeitung dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> Hier haben wir beispielsweise eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass es ein Modell ist und alle Methoden eines Modells enthält, aber wir können ihm auch spezialisierte Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen bestimmte Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der zugehörigen Datenbank. Diese kann gleichzeitig mehrere Felder anhand verschiedener Kriterien (z.B. genau, nicht case-sensitiv, größer als usw.) abgleichen und komplexe Anweisungen unterstützen (z.B. können Sie eine Abfrage für U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcenhandler) zur Anzeige aller unserer U09-Teams. Der `list_teams = Team.objects.filter(team_level__exact="U09")`-Befehl zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` hat (beachten Sie, wie dieses Kriterium als Argument an die `filter()`-Funktion übergeben wird, wobei Feldname und Abgleichstyp durch einen Doppelunterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser gesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie ein angegebenes HTML-Template und einige Daten kombiniert, die in das Template eingefügt werden sollen (bereitgestellt in der Variablen `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten eingefügt bekommt, um das HTML zu erstellen.

### Daten rendern (HTML Templates)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für die Daten verwenden, die beim Erstellen einer Seite gefüllt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erstellen. Django unterstützt sowohl sein eigenes Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 von Haus aus (es kann auch so erweitert werden, dass es andere Systeme unterstützt, wenn nötig).

Der Codeausschnitt zeigt, wie das HTML-Template aussieht, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese befindet sich in der `context`-Variablen innerhalb der `render()`-Funktion oben). Innerhalb des HTML-Grundgerüsts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template für jedes Team den `team_name`-Wert in einem `<li>`-Element an.

```django
## filename: best/templates/best/index.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home page</title>
</head>
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

## Was kann man noch tun?

Die vorherigen Abschnitte zeigen die Hauptfunktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Models und Templates. Nur einige der anderen Dinge, die Django bietet, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu erfassen. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und -berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Blick auf die Sicherheit entwickelt wurde.
- **Caching**: Dynamisch erstellte Inhalte sind viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, damit Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf neu gerendert wird.
- **Administrationssite**: Die Django-Administrationssite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Gerüst erstellen. Es macht es trivial einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um beliebige Datenmodelle auf Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites genutzt werden und selbst nichts anzeigt) oder wenn Sie eine Website erstellen, bei der der clientseitige Code alle Daten anzeigt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Django-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und grob wissen, wie die einzelnen Hauptteile einer Django-App aussehen könnten. Sie sollten auch ein paar Dinge über die Programmiersprache Python gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben bereits etwas echten Django-Code oben gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
