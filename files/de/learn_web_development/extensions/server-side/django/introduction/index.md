---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage „Was ist Django?“ und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir beschreiben die wichtigsten Funktionen, einschließlich einiger fortgeschrittener Funktionalitäten, die wir in diesem Modul nicht ausführlich behandeln können. Außerdem zeigen wir Ihnen einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Website-Programmierung</a>, insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit Django, der bereitgestellten Funktionalität und den wichtigsten Bausteinen einer Django-Anwendung vertraut machen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein Python-Web-Framework auf hoher Ebene, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Django wurde von erfahrenen Entwicklern entwickelt und übernimmt einen Großteil der mühsamen Webentwicklung, sodass Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, verfügt über eine lebendige und aktive Community, hervorragende Dokumentation sowie viele Möglichkeiten für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig ist
  - : Django folgt der Philosophie „Batteries included“ und stellt fast alles bereit, was Entwickler „out of the box“ erledigen möchten. Da alles, was Sie benötigen, Teil eines einzigen „Produkts“ ist, funktioniert es nahtlos zusammen, folgt einheitlichen Designprinzipien und verfügt über umfangreiche sowie [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig ist
  - : Django kann für nahezu jede Art von Website verwendet werden (und wurde dafür verwendet) — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework zusammenarbeiten und Inhalte in nahezu jedem Format bereitstellen (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Optionen für fast jede gewünschte Funktionalität (z. B. mehrere beliebte Datenbanken, Template-Engines usw.), kann bei Bedarf aber auch erweitert werden, um andere Komponenten zu verwenden.

- Sicher ist
  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das so entwickelt wurde, dass es automatisch die „richtigen Dinge“ zum Schutz der Website tut. Beispielsweise bietet Django eine sichere Methode zur Verwaltung von Benutzerkonten und Passwörtern und vermeidet dabei häufige Fehler wie das Speichern von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, während die eigentlichen Daten in der Datenbank gespeichert werden), oder das direkte Speichern von Passwörtern statt eines Passwort-Hashs.

    _Ein Passwort-Hash ist ein Wert fester Länge, der entsteht, indem das Passwort durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) geleitet wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es durch die Hash-Funktion geleitet und die Ausgabe mit dem gespeicherten Hash-Wert verglichen wird. Aufgrund der „Einweg“-Natur der Funktion ist es für einen Angreifer jedoch schwierig, das ursprüngliche Passwort herauszufinden, selbst wenn ein gespeicherter Hash-Wert kompromittiert wird._

    Django aktiviert standardmäßig Schutz vor vielen Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (weitere Details zu solchen Angriffen finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

- Skalierbar ist
  - : Django verwendet eine komponentenbasierte „[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)“-Architektur (jeder Teil der Architektur ist von den anderen unabhängig und kann daher bei Bedarf ersetzt oder geändert werden). Die klare Trennung zwischen den verschiedenen Teilen bedeutet, dass die Anwendung bei höherem Datenverkehr durch Hinzufügen von Hardware auf jeder Ebene skaliert werden kann: Caching-Server, Datenbankserver oder Anwendungsserver. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihre Anforderungen zu erfüllen (z. B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar ist
  - : Django-Code wird unter Verwendung von Designprinzipien und -mustern geschrieben, die die Erstellung wartbaren und wiederverwendbaren Codes fördern. Insbesondere verwendet es das Don't-Repeat-Yourself-Prinzip (DRY), sodass keine unnötigen Duplizierungen entstehen und die Code-Menge reduziert wird. Django fördert außerdem die Gruppierung zusammengehöriger Funktionalitäten in wiederverwendbare „Anwendungen“ und gruppiert auf einer niedrigeren Ebene zusammengehörigen Code in Modulen (entsprechend dem Muster {{Glossary("MVC", "Model View Controller (MVC)")}}).
- Portabel ist
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosting von Django-Websites bereitstellen.

## Woher stammt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nach der Erstellung mehrerer Websites begann das Team, viel gemeinsamen Code und Designmuster auszugliedern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem allgemeinen Webentwicklungs-Framework, das im Juli 2005 als Projekt „Django“ als Open Source veröffentlicht wurde.

Django ist seit seiner ersten Meilensteinveröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023 weiter gewachsen und verbessert worden. Jede Veröffentlichung brachte neue Funktionalitäten und Fehlerbehebungen mit sich, von der Unterstützung neuer Arten von Datenbanken, Template-Engines und Caching bis hin zur Hinzufügung „generischer“ View-Funktionen und -Klassen (die die Menge an Code reduzieren, die Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich die [Versionshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu erfahren, was sich in den jüngsten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django fließt.

Django ist heute ein lebendiges, kollaboratives Open-Source-Projekt mit vielen Tausend Nutzern und Mitwirkenden. Obwohl es weiterhin einige Merkmale aufweist, die seinen Ursprung widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie beliebt ist Django?

Es gibt keine leicht verfügbare und endgültige Messgröße für die Beliebtheit serverseitiger Frameworks (obwohl Sie die Beliebtheit mithilfe von Methoden wie dem Zählen der GitHub-Projekte und Stack-Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage lautet, ob Django „beliebt genug“ ist, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe erhalten, wenn Sie sie benötigen? Gibt es für Sie die Möglichkeit, bezahlte Arbeit zu finden, wenn Sie Django lernen?

Gemessen an der Anzahl bekannter Websites, die Django verwenden, der Anzahl der Personen, die zur Codebasis beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung anbieten, lautet die Antwort: Ja, Django ist ein beliebtes Framework!

Zu den bekannten Websites, die Django verwenden, gehören: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich häufig als „meinungsstark“ oder „nicht meinungsstark“.

Meinungsstarke Frameworks haben Vorstellungen darüber, wie eine bestimmte Aufgabe auf die „richtige Weise“ erledigt wird. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (bei der Lösung von Problemen eines bestimmten Typs), da die richtige Vorgehensweise für gewöhnlich gut verstanden und dokumentiert ist. Sie können jedoch bei der Lösung von Problemen außerhalb ihres Hauptbereichs weniger flexibel sein und bieten tendenziell weniger Auswahlmöglichkeiten bei den verwendbaren Komponenten und Ansätzen.

Nicht meinungsstarke Frameworks haben hingegen wesentlich weniger Einschränkungen hinsichtlich der besten Methode, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder sogar hinsichtlich der verwendeten Komponenten. Sie erleichtern Entwicklern die Verwendung der am besten geeigneten Werkzeuge zur Erledigung einer bestimmten Aufgabe, allerdings müssen Sie diese Komponenten selbst finden.

Django ist „etwas meinungsstark“ und bietet daher das „Beste aus beiden Welten“. Es stellt eine Reihe von Komponenten bereit, um die meisten Webentwicklungsaufgaben zu erledigen, sowie einen (oder zwei) bevorzugte Wege, sie zu verwenden. Djangos entkoppelte Architektur bedeutet jedoch, dass Sie in der Regel aus mehreren unterschiedlichen Optionen auswählen oder bei Bedarf Unterstützung für vollständig neue Optionen hinzufügen können.

## Wie sieht Django-Code aus?

Bei einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage eingeht, ermittelt die Anwendung anhand der URL und möglicherweise anhand von Informationen in `POST`-Daten oder `GET`-Daten, was benötigt wird. Je nach Anforderung kann sie dann Informationen aus einer Datenbank lesen oder in sie schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt anschließend eine Antwort an den Webbrowser zurück und erstellt häufig dynamisch eine HTML-Seite, die der Browser anzeigen kann, indem die abgerufenen Daten in Platzhalter eines HTML-Templates eingefügt werden.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte verarbeitet, üblicherweise in separaten Dateien:

![Django – Dateien für Views, Modelle, URLs und Templates](basic-django.png)

- **URLs:** Zwar ist es möglich, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, es ist jedoch deutlich wartbarer, für jede Ressource eine separate View-Funktion zu schreiben. Ein URL-Mapper wird verwendet, um HTTP-Anfragen anhand der Anfrage-URL an die passende View weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern abgleichen, die in einer URL vorkommen, und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Funktion zur Verarbeitung von Anfragen, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen über _Modelle_ auf die zur Erfüllung von Anfragen benötigten Daten zu und delegieren die Formatierung der Antwort an _Templates_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (Hinzufügen, Ändern, Löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (etwa einer HTML-Seite) definiert und Platzhalter zur Darstellung des tatsächlichen Inhalts enthält. Eine _View_ kann mithilfe eines HTML-Templates dynamisch eine HTML-Seite erstellen und diese mit Daten aus einem _Modell_ füllen. Ein Template kann verwendet werden, um die Struktur jeder Art von Datei zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als „Model View Template (MVT)“-Architektur. Sie weist viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}}-Architektur auf.

Die folgenden Abschnitte vermitteln Ihnen einen Eindruck davon, wie diese Hauptbestandteile einer Django-Anwendung aussehen (wir werden später im Kurs ausführlicher darauf eingehen, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Die Anfrage an die richtige View senden (urls.py)

Ein URL-Mapper wird üblicherweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifischen URL-_Mustern_) und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage eingeht, deren URL einem angegebenen Muster entspricht, wird die zugehörige View-Funktion aufgerufen und erhält die Anfrage.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das Objekt `urlpatterns` ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mithilfe eckiger Klammern definiert, wobei Elemente durch Kommas getrennt werden und ein [optionales nachgestelltes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (ein Muster), die abgeglichen wird. Die Methode `path()` verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die Funktion `re_path()` verwendet einen flexiblen Musterabgleichansatz, der als regulärer Ausdruck bekannt ist. Wir werden in einem späteren Artikel darüber sprechen!

Das zweite Argument ist eine andere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Schreibweise `views.book_detail` gibt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` zu finden ist (d.h. in einer Datei namens `views.py`).

### Die Anfrage verarbeiten (views.py)

Views sind das Herzstück der Webanwendung: Sie empfangen HTTP-Anfragen von Web-Clients und geben HTTP-Antworten zurück. Dazwischen organisieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen erhält sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall tun wir nichts mit der Anfrage, und unsere Antwort gibt eine fest codierte Zeichenfolge zurück. In einem späteren Abschnitt zeigen wir Ihnen eine Anfrage, die etwas Interessanteres tut.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind „Bibliotheken“ von Funktionen, die in separaten Dateien gespeichert werden und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das Objekt `HttpResponse` aus dem Modul `django.http`, damit wir es in unserer View verwenden können: `from django.http import HttpResponse`. Es gibt weitere Möglichkeiten, einige oder alle Objekte eines Moduls zu importieren.
> - Funktionen werden, wie oben gezeigt, mit dem Schlüsselwort `def` deklariert. Benannte Parameter werden in Klammern nach dem Namen der Funktion aufgeführt; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, dass die folgenden Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie festlegt, dass die Codezeilen sich innerhalb dieses bestimmten Blocks befinden (die verpflichtende Einrückung ist ein wichtiges Merkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden üblicherweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur gespeicherter Daten, einschließlich der Feld-_Typen_ und möglicherweise auch deren maximaler Größe, Standardwerte, Auswahloptionen für Listen, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine von mehreren auswählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht mehr direkt mit ihr kommunizieren — Sie schreiben lediglich Ihre Modellstruktur und weiteren Code, und Django übernimmt die gesamte „schmutzige Arbeit“ der Kommunikation mit der Datenbank für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die Klasse `Team` leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und die Teamstufe als Zeichenfelder und legt für jeden Datensatz eine maximale Anzahl zu speichernder Zeichen fest. Der Wert `team_level` kann einer von mehreren Werten sein. Daher definieren wir ihn als Auswahlfeld und stellen eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert bereit.

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
> Python unterstützt „objektorientierte Programmierung“, einen Programmierstil, bei dem wir unseren Code in Objekten organisieren, die zusammengehörige Daten und Funktionen zur Verarbeitung dieser Daten enthalten. Objekte können außerdem von anderen Objekten erben/sie erweitern/sich von ihnen ableiten, sodass gemeinsames Verhalten verwandter Objekte geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den „Bauplan“ für ein Objekt zu definieren. Auf Grundlage des Modells in der Klasse können wir mehrere konkrete _Instanzen_ dieses Objekttyps erstellen.
>
> Hier haben wir beispielsweise eine Klasse `Team`, die sich von der Klasse `Model` ableitet. Das bedeutet, dass sie ein Modell ist und alle Methoden eines Modells enthält, wir ihr aber auch eigene spezialisierte Merkmale geben können. In unserem Modell definieren wir die Felder, die unsere Datenbank zum Speichern unserer Daten benötigt, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell stellt eine einfache Abfrage-API bereit, um die zugehörige Datenbank zu durchsuchen. Diese kann gleichzeitig mit unterschiedlichen Kriterien gegen mehrere Felder abgleichen (z. B. exakt, ohne Berücksichtigung von Groß- und Kleinschreibung, größer als usw.) und komplexe Anweisungen unterstützen (beispielsweise können Sie eine Suche nach U11-Teams angeben, deren Teamname mit „Fr“ beginnt oder mit „al“ endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modell-Abfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das Feld `team_level` exakt den Text `U09` enthält (beachten Sie, wie dieses Kriterium als Argument an die Funktion `filter()` übergeben wird, wobei Feldname und Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die Funktion `render()`, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie ein angegebenes HTML-Template und einige in das Template einzufügende Daten kombiniert (bereitgestellt in der Variablen `context`). Im nächsten Abschnitt zeigen wir, wie die Daten in das Template eingefügt werden, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Template-Systeme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments anzugeben und dabei Platzhalter für Daten zu verwenden, die beim Generieren einer Seite ausgefüllt werden. Templates werden oft zum Erstellen von HTML verwendet, können aber auch andere Dokumenttypen erstellen. Django unterstützt standardmäßig sowohl sein eigenes Template-System als auch eine weitere beliebte Python-Bibliothek namens Jinja2 (bei Bedarf kann es auch für die Unterstützung anderer Systeme konfiguriert werden).

Der Codeausschnitt zeigt, wie das HTML-Template aussehen könnte, das von der Funktion `render()` im vorherigen Abschnitt aufgerufen wird. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` haben wird (diese ist in der Variablen `context` innerhalb der obigen Funktion `render()` enthalten). Innerhalb des HTML-Grundgerüsts befindet sich ein Ausdruck, der zunächst prüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife über sie iteriert. Bei jeder Iteration zeigt das Template den Wert `team_name` jedes Teams in einem {{htmlelement("li")}}-Element an.

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

## Was können Sie noch tun?

Die vorhergehenden Abschnitte zeigen die wichtigsten Funktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Modelle und Templates. Zu den weiteren von Django bereitgestellten Funktionen gehören:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten für die Verarbeitung auf dem Server zu erfassen. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes System für Benutzerauthentifizierung und Berechtigungen, das unter Berücksichtigung der Sicherheit entwickelt wurde.
- **Caching**: Das dynamische Erstellen von Inhalten ist wesentlich rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie eine gesamte gerenderte Seite oder Teile davon speichern können, damit sie nur bei Bedarf erneut gerendert wird.
- **Administrationswebsite**: Die Django-Administrationswebsite ist standardmäßig enthalten, wenn Sie eine Anwendung mit dem grundlegenden Grundgerüst erstellen. Sie ermöglicht es auf äußerst einfache Weise, eine Administrationsseite bereitzustellen, auf der Website-Administratoren alle Datenmodelle Ihrer Website erstellen, bearbeiten und anzeigen können.
- **Daten serialisieren**: Django erleichtert die Serialisierung und Bereitstellung Ihrer Daten als XML oder JSON. Dies kann beim Erstellen eines Webdienstes nützlich sein (einer Website, die ausschließlich Daten zur Nutzung durch andere Anwendungen oder Websites bereitstellt und selbst nichts anzeigt) oder beim Erstellen einer Website, bei der der clientseitige Code das gesamte Rendern der Daten übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Django-Reise abgeschlossen! Sie sollten nun die wichtigsten Vorteile von Django, ein wenig über seine Geschichte und ungefähr das Aussehen der einzelnen Hauptbestandteile einer Django-Anwendung verstehen. Außerdem sollten Sie einige Dinge über die Programmiersprache Python gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits echten Django-Code gesehen, aber anders als bei clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
