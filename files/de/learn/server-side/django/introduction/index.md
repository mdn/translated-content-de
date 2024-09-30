---
title: Django Einführung
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Wir zeigen Ihnen auch einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie an diesem Punkt noch keine Entwicklungsumgebung haben, um sie zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Allgemeines Verständnis von <a href="/de/docs/Learn/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere der Mechanik von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit erlangen mit dem, was Django ist, welche Funktionalität es bietet und den wichtigsten Bausteinen einer Django-Anwendung.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochrangiges Python-Web-Framework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Entwickelt von erfahrenen Entwicklern, nimmt Django Ihnen viel von der Mühe der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre Anwendung zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Community, großartige Dokumentation und viele Möglichkeiten für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig
  - : Django folgt der Philosophie "Batterien inklusive" und bietet fast alles, was Entwickler "out of the box" tun möchten. Da alles, was Sie benötigen, Teil des einen "Produkts" ist, arbeitet alles nahtlos zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und [aktuelle Dokumentationen](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann verwendet werden (und wurde verwendet), um fast jede Art von Website zu erstellen — von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Optionen für fast jede Funktionalität, die Sie möchten (z. B. mehrere beliebte Datenbanken, Template-Engines usw.), es kann jedoch auch erweitert werden, um andere Komponenten zu nutzen, wenn dies erforderlich ist.

- Sicher

  - : Django hilft Entwicklern, viele gängige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das darauf ausgelegt ist, "die richtigen Dinge" automatisch zum Schutz der Website zu tun. Beispielsweise bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten, wodurch häufige Fehler wie das Speichern von Sitzungsinformationen in Cookies, wo sie gefährdet sind, vermieden werden (stattdessen enthalten Cookies nur einen Schlüssel und die tatsächlichen Daten werden in der Datenbank gespeichert) oder Passwörter direkt statt Passwort-Hashes zu speichern.

    _Ein Passwort-Hash ist ein Wert fester Länge, der durch das Senden des Passworts durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion laufen lässt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg"-Natur der Funktion ist es jedoch selbst dann schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden, wenn ein gespeicherter Hash-Wert kompromittiert wird._

    Django ermöglicht Standardmäßig Schutzmaßnahmen gegen viele Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Glossary/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen ermöglicht es, es für erhöhten Datenverkehr zu skalieren, indem Hardware auf beliebiger Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Applikationsserver. Einige der verkehrsreichsten Seiten haben erfolgreich Django skaliert, um ihren Anforderungen gerecht zu werden (z. B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird nach Designprinzipien und Mustern geschrieben, die die Erstellung wartbarer und wiederverwendbarer Codes fördern. Insbesondere nutzt es das Don't Repeat Yourself (DRY)-Prinzip, sodass keine unnötigen Duplikationen vorhanden sind, was die Menge des Codes reduziert. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbare "Anwendungen" und auf einer niedrigeren Ebene die Gruppierung verwandten Codes in Module (nach dem Vorbild des [Model View Controller (MVC)](/de/docs/Glossary/MVC) Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Linux-Versionen, Windows und macOS ausführen können. Zudem wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Django-Sites bieten.

## Woher stammt Django?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nachdem sie eine Reihe von Sites erstellt hatten, begann das Team, eine Menge gemeinsamen Codes und Designmuster zu extrahieren und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungs-Framework, das im Juli 2005 als "Django"-Projekt als Open Source veröffentlicht wurde.

Django ist gewachsen und hat sich verbessert, angefangen mit seiner ersten Meilensteinveröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung hat neue Funktionalitäten und Fehlerbehebungen gebracht, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Einführung "generischer" View-Funktionen und Klassen (die die Menge an Code reduzieren, die Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Schauen Sie sich die [Release-Notes](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit darauf verwendet wird, Django zu verbessern.

Django ist jetzt ein florierendes, kollaboratives Open-Source-Projekt mit vielen tausend Benutzern und Mitwirkenden. Obwohl es immer noch einige Funktionen gibt, die seinen Ursprung widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbare und definitive Messung der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit schätzen können, indem Sie Mechanismen wie das Zählen der Zahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform nutzen). Eine bessere Frage ist, ob Django "populär genug" ist, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es eine Chance, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl von hochkarätigen Sites, die Django verwenden, der Anzahl von Personen, die zum Codebase beitragen, und der Anzahl von Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist Django ein beliebtes Framework!

Hochkarätige Sites, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich oft selbst als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, wie eine bestimmte Aufgabe am besten zu erledigen ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösungsfindung eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Allerdings können sie weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze.

Nicht meinungsstarke Frameworks dagegen haben weitaus weniger Einschränkungen hinsichtlich der besten Art und Weise, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge für eine bestimmte Aufgabe zu nutzen, allerdings um den Preis, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas meinungsstark" und bietet daher das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten zur Handhabung der meisten Webentwicklung-Aufgaben und eine (oder zwei) bevorzugte Möglichkeiten, diese zu nutzen. Djangos entkopplte Architektur ermöglicht es Ihnen jedoch, in der Regel aus einer Reihe von Optionen zu wählen oder Unterstützung für vollständig neue hinzuzufügen, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer herkömmlichen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage eingegangen ist, wird die Anwendung herausfinden, was benötigt wird, basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten. Abhängig von dem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben erledigen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie oft dynamisch eine HTML-Seite für den Browser erstellt, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Django Webanwendungen gruppieren den Code, der diese Schritte verarbeitet, typischerweise in separate Dateien:

![Django - Dateien für Ansichten, Modell, URLs, Vorlage](basic-django.png)

- **URLs:** Während es möglich ist, Anfragen von jeder einzelnen URL über eine einzelne Funktion zu verarbeiten, ist es viel wartbarer, eine separate View-Funktion zu schreiben, um jede Ressource zu verarbeiten. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anforderungs-URL an die entsprechende Ansicht weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern erkennen, die in einer URL erscheinen, und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsbearbeitungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen auf die Daten zu, die zur Erfüllung von Anfragen über _Modelle_ benötigt werden, und delegieren die Formatierung der Antwort an _Templates_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (hinzufügen, ändern, löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen. Eine _View_ kann eine HTML-Seite dynamisch erstellen, indem sie eine HTML-Vorlage verwendet und diese mit Daten aus einem _Modell_ füllt. Ein Template kann verwendet werden, um die Struktur jeder Art von Datei zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)"-Architektur. Es hat viele Ähnlichkeiten mit der bekannteren [Model View Controller](/de/docs/Glossary/MVC) Architektur.

Die folgenden Abschnitte geben Ihnen einen Einblick, wie diese Hauptteile einer Django-App aussehen (wir gehen später im Kurs detaillierter darauf ein, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Senden der Anfrage an die richtige Ansicht (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL-_Muster)_ und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage empfangen wird, die mit einem angegebenen Muster übereinstimmt, wird die zugehörige View-Funktion aufgerufen und die Anfrage übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()` und/oder `re_path()`-Funktionen (Python-Listen werden mithilfe von eckigen Klammern definiert, wobei die Elemente durch Kommata getrennt sind und gegebenenfalls ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (Muster), das überprüft wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und in die View-Funktion als benannte Argumente übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichsansatz, der als regulärer Ausdruck bekannt ist. Wir werden in einem späteren Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` genannt wird und in einem Modul namens `views` gefunden werden kann (d.h. in einer Datei namens `views.py`).

### Verarbeitung der Anfrage (views.py)

Ansichten sind das Herzstück der Webanwendung, empfangen HTTP-Anfragen von Web-Clients und geben HTTP-Antworten zurück. Dazwischen greifen sie auf die anderen Ressourcen des Frameworks zurück, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage, und unsere Antwort gibt eine fest codierte Zeichenfolge zurück. Wir zeigen Ihnen später eine Anfrage, die etwas Interessanteres macht.

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
> Ein bisschen Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind und die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer Ansicht verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` wie oben gezeigt deklariert, wobei benannte Parameter in Klammern nach dem Namen der Funktion aufgelistet sind; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Das Einrücken ist wichtig, da es angibt, dass die Codezeilen innerhalb dieses bestimmten Blocks sind (das obligatorische Einrücken ist ein Schlüsselmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Definition von Datenmodellen (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur gespeicherter Daten, einschließlich des Feld-Typs und möglicherweise deren maximaler Größe, Standardwerten, Auswahlmöglichkeiten zur Auswahl, Hilfetext für die Dokumentation, Label-Text für Formularfelder usw. Die Definition des Modells ist unabhängig von der darunterliegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen wählen. Sobald Sie festgelegt haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte "dreckige Arbeit" der Kommunikation mit der Datenbank für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Das `team_level` kann einer von mehreren Werten sein, daher definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen den angezeigten Auswahlmöglichkeiten und den zu speichernden Daten bereit, zusammen mit einem Standardwert.

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
> Ein bisschen Python:
>
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, in dem wir unseren Code in Objekte organisieren, die zugehörige Daten und Funktionen zur Bearbeitung dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> Beispielsweise haben wir hier eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass es sich um ein Modell handelt und alle Methoden eines Modells enthält, aber wir können ihm auch eigene spezialisierte Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank zum Speichern unserer Daten benötigt, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die darunterliegende Datenbank zu erstellen.

### Abfragen von Daten (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der zugehörigen Datenbank. Dies kann gegen eine Reihe von Feldern gleichzeitig mit unterschiedlichen Kriterien (z.B. exakt, case-insensitiv, größer als, usw.) abgeglichen werden und kann komplexe Anweisungen unterstützen (z.B. können Sie eine Suche auf U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen all unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um nach allen Datensätzen zu filtern, bei denen das `team_level`-Feld genau den Text `U09` enthält (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie eine spezifizierte HTML-Vorlage mit einigen in die Vorlage einzufügenden Daten kombiniert (bereitgestellt in der Variablen namens `context`). Im nächsten Abschnitt zeigen wir, wie die Vorlage die Daten in sich einfügt, um das HTML zu erstellen.

### Rendern von Daten (HTML-Vorlagen)

Templating-Systeme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die dann gefüllt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten generieren. Django unterstützt sowohl sein natives Templesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 direkt (es kann auf Anfrage auch andere Systeme unterstützen).

Der Codeausschnitt zeigt, wie die HTML-Vorlage aussehen könnte, die von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wurde. Diese Vorlage wurde unter der Annahme geschrieben, dass sie beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` haben wird (diese ist in der Variable `context` innerhalb der `render()`-Funktion oben enthalten). Im HTML-Skelett haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife darüber iteriert. Bei jeder Iteration zeigt die Vorlage den `team_name`-Wert jedes Teams in einem `<li>` Element an.

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
        <li>\{\{ team.team_name \}\}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
</body>
</html>
```

## Was können Sie noch tun?

Die vorhergehenden Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Ansichten, Modelle und Vorlagen. Nur einige der anderen Dinge, die von Django bereitgestellt werden, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Blick auf die Sicherheit entwickelt wurde.
- **Caching**: Die dynamische Erstellung von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen von statischen Inhalten. Django bietet flexibles Caching, damit Sie die ganze oder Teile einer gerenderten Seite speichern können, sodass sie nicht erneut gerendert werden muss, es sei denn, es ist notwendig.
- **Administrationsseite**: Die Django-Administrationsseite wird standardmäßig mitgeliefert, wenn Sie eine App mit dem Basisskelett erstellen. Es macht es trivial einfach, eine Admin-Seite für Administratoren bereitzustellen, um Datenmodelle in Ihrer Site zu erstellen, zu bearbeiten und anzusehen.
- **Serialisieren von Daten**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites konsumiert werden sollen und selbst nichts anzeigt), oder wenn Sie eine Website erstellen, in der der Client-seitige Code alle Datenrendrierung übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, etwas über seine Geschichte wissen und ungefähr wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben bereits oben einige echte Django-Codes gesehen, aber im Gegensatz zu client-seitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn ausführen zu können. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
