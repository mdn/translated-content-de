---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir werden die Hauptmerkmale skizzieren, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um diese zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Webseiten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Django ist, welche Funktionalitäten es bietet und den Hauptbausteinen einer Django-Anwendung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung von sicheren und wartbaren Websites ermöglicht. Django, das von erfahrenen Entwicklern erstellt wurde, nimmt Ihnen einen Großteil der Mühe bei der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Community, eine großartige Dokumentation und viele Optionen für kostenlosen und kostenpflichtigen Support.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig
  - : Django folgt der Philosophie "Batterien enthalten" und bietet fast alles, was Entwickler möglicherweise "out of the box" tun möchten. Da alles, was Sie benötigen, Teil eines einzigen "Produkts" ist, funktioniert alles nahtlos zusammen, folgt konsistenten Designprinzipien und hat eine umfassende und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig
  - : Django kann (und wurde) für den Bau fast jeder Art von Website verwendet werden – von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Auswahlmöglichkeiten für fast jede gewünschte Funktionalität (z. B. mehrere beliebte Datenbanken, Template-Engines usw.), kann aber auch erweitert werden, um bei Bedarf andere Komponenten zu verwenden.

- Sicher
  - : Django hilft Entwicklern, viele gängige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das so konzipiert ist, dass es die "richtigen Dinge" tut, um die Website automatisch zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit zur Verwaltung von Benutzerkonten und Passwörtern und vermeidet gängige Fehler wie das Speichern von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, und die eigentlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der erzeugt wird, indem das Passwort durch eine [kryptographische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) gesendet wird. Django kann prüfen, ob ein eingegebenes Passwort korrekt ist, indem es durch die Hash-Funktion läuft und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg-Natur" der Funktion ist es jedoch selbst dann, wenn ein gespeicherter Hash-Wert kompromittiert wird, für einen Angreifer schwer, das ursprüngliche Passwort herauszufinden._

    Django ermöglicht standardmäßig Schutz vor vielen Schwachstellen, einschließlich SQL-Injection, Cross-Site Scripting, Cross-Site Request Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[shared-nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Datenverkehr skalieren kann, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbankserver oder Anwendungsserver. Einige der geschäftigsten Seiten haben erfolgreich Django skaliert, um ihre Anforderungen zu erfüllen (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird nach Designprinzipien und -mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere nutzt es das Prinzip Don't Repeat Yourself (DRY), sodass es keine unnötige Duplikation gibt, was die Code-Menge reduziert. Django fördert auch das Gruppieren von zusammengehöriger Funktionalität in wiederverwendbare "Anwendungen" und auf niedriger Ebene das Gruppieren von zusammengehörigem Code in Module (entlang des {{Glossary("MVC", "Model View Controller (MVC)")}}-Musters).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Server-Plattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezielle Infrastrukturen und Dokumentation für das Hosting von Django-Websites bereitstellen.

## Woher kommt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Wartung von Zeitungswebseiten verantwortlich war. Nachdem eine Reihe von Seiten erstellt worden waren, begann das Team, viel gemeinsamen Code und Entwurfsmuster auszulagern und wieder zu verwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungsframework, das im Juli 2005 als "Django"-Projekt als Open Source veröffentlicht wurde.

Django wächst und verbessert sich stetig, von der ersten Meilensteinversion (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung fügte neue Funktionalitäten und Fehlerbehebungen hinzu, angefangen bei der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Hinzufügung generischer View-Funktionen und -Klassen (die die Menge des Codes reduzieren, den Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Schauen Sie sich die [Veröffentlichungshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django investiert wird.

Django ist jetzt ein florierendes, kollaboratives Open-Source-Projekt mit vielen tausend Benutzern und Mitwirkenden. Obwohl es noch einige Merkmale aufweist, die seine Herkunft widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbare und definitive Maßnahme für die Popularität von serverseitigen Frameworks (obwohl Sie die Popularität anhand von Mechanismen wie der Zählung der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform abschätzen können). Eine bessere Frage ist, ob Django "beliebt genug" ist, um die Probleme von unbeliebten Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochkarätiger Seiten, die Django verwenden, der Anzahl der Personen, die zum Code-Base beitragen, und der Anzahl der Personen, die sowohl kostenlosen als auch kostenpflichtigen Support bieten, ist Django ein beliebtes Framework!

Hochkarätige Seiten, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django Übersicht Seite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind solche, die eine Meinung darüber haben, wie eine bestimmte Aufgabe "richtig" zu bewältigen ist. Sie unterstützen oft die schnelle Entwicklung _in einer bestimmten Domäne_ (Lösung von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihrer Hauptdomäne zu lösen, und bieten tendenziell weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze.

Nicht meinungsstarke Frameworks hingegen haben viel weniger Einschränkungen hinsichtlich der besten Möglichkeit, Komponenten zu kombinieren, um ein Ziel zu erreichen, oder sogar, welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas meinungsstark" und bietet daher das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten, um die meisten Webentwicklungsaufgaben zu bewältigen, und eine (oder zwei) bevorzugte Möglichkeiten, sie zu verwenden. Die entkoppelte Architektur von Django bedeutet jedoch, dass Sie in der Regel aus einer Reihe verschiedener Optionen auswählen oder Unterstützung für völlig neue hinzufügen können, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage eingegangen ist, ermittelt die Anwendung, was basierend auf der URL und möglicherweise in `POST` oder `GET` Daten benötigten Informationen erforderlich ist. Abhängig davon, was benötigt wird, kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere erforderliche Aufgaben zur Erfüllung der Anfrage ausführen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, häufig durch dynamisches Erstellen einer HTML-Seite für den Browser, indem die abgerufenen Daten in Platzhalter in einem HTML-Template eingefügt werden.

Django-Webanwendungen gruppieren normalerweise den Code, der jeden dieser Schritte handhabt, in separaten Dateien:

![Django - Dateien für Views, Modell, URLs, Template](basic-django.png)

- **URLs:** Es ist zwar möglich, Anfragen jeder einzelnen URL über eine einzige Funktion zu verarbeiten, aber es ist weitaus wartbarer, eine separate View-Funktion zu schreiben, die jede Ressource handhabt. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anforderungs-URL zur entsprechenden View weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenketten oder Ziffern, die in einer URL erscheinen, erkennen und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsverarbeitungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen über _Models_ auf die benötigten Daten zu, um Anfragen zu erfüllen, und überlassen die Formatierung der Antwort den _Templates_.
- **Models:** Models sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen bereitstellen, um Datensätze in der Datenbank zu verwalten (hinzufügen, ändern, löschen) und abzufragen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, wobei Platzhalter verwendet werden, um tatsächlichen Inhalt darzustellen. Eine _View_ kann eine HTML-Seite dynamisch unter Verwendung eines HTML-Templates erstellen und sie mit Daten aus einem _Model_ ausfüllen. Ein Template kann verwendet werden, um die Struktur jedes Dateityps zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)"-Architektur. Es hat viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}}-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen könnten (wir werden später im Kurs mehr ins Detail gehen, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Weiterleitung der Anforderung zur richtigen View (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei mit dem Namen **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (bestimmten URL-Mustern)\_ und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage mit einer URL eingeht, die einem bestimmten Muster entspricht, wird die zugeordnete View-Funktion aufgerufen und die Anfrage übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()` und/oder `re_path()`-Funktionen (Python-Listen werden in eckigen Klammern definiert, wobei Elemente durch Kommas getrennt sind und optional ein [nachgestelltes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) enthalten können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument für beide Methoden ist eine Route (Muster), die übereinstimmen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichsansatz, der als regulärer Ausdruck bekannt ist. Wir werden darüber in einem späteren Artikel sprechen!

Das zweite Argument ist eine andere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` heißt und sich in einem Modul namens `views` befindet (d.h. in einer Datei namens `views.py`).

### Verarbeiten der Anfrage (views.py)

Views sind das Herzstück der Webanwendung, sie empfangen HTTP-Anfragen von Web-Clients und geben HTTP-Antworten zurück. Dazwischen orchestrieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das unten stehende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage und unsere Antwort gibt eine fest codierte Zeichenkette zurück. Wir zeigen Ihnen eine Anfrage, die in einem späteren Abschnitt etwas Interessanteres tut.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind und die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem Modul `django.http`, damit wir es in unserer View verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, mit den angegebenen Parametern in Klammern nach dem Funktionsnamen; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block enthalten sind (mandatory Einrückung ist ein Hauptmerkmal von Python und einer der Gründe, warum Python-Code so einfach zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Definieren von Datenmodellen (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feld`typen` und möglicherweise ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Auswahllisten, Hilfstext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen auswählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code und Django erledigt die ganze "dreckige Arbeit" der Kommunikation mit der Datenbank für Sie.

Der unten stehende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse ist von der Django-Klasse `models.Model` abgeleitet. Es definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einer von mehreren Werten sein, daher definieren wir es als Auswahlfeld und bieten eine Zuordnung zwischen anzeigbaren Auswahlmöglichkeiten und zu speichernden Daten zusammen mit einem Standardwert an.

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
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die zugehörige Daten und Funktionen zum Verarbeiten dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/abgeleitet werden, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ der Art von Objekt erstellen, die auf dem Modell in der Klasse basieren.
>
> So haben wir hier beispielsweise eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass es ein Modell ist und alle Methoden eines Modells enthalten wird, aber wir können ihm auch spezielle eigene Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Datenabfrage (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der zugehörigen Datenbank. Diese kann anhand einer Anzahl von Feldern gleichzeitig anhand verschiedener Kriterien (z. B. exakt, ohne Berücksichtigung der Groß-/Kleinschreibung, größer als usw.) suchen und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) für das Anzeigen all unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` enthält (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Abgleichstyp durch einen Doppelunterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um das `HttpResponse`, das an den Browser zurückgesendet wird, zu erstellen. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie ein angegebenes HTML-Template und einige Daten, die in das Template eingefügt werden sollen, kombiniert (bereitgestellt in der Variable namens `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten in ihm eingefügt hat, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgangedokuments zu spezifizieren, indem Platzhalter für Daten verwendet werden, die eingefügt werden, wenn eine Seite generiert wird. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen. Django unterstützt sowohl sein natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 „out of the box“ (es kann bei Bedarf auch andere Systeme unterstützen).

Der Codeausschnitt zeigt, wie das HTML-Template aussieht, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wurde. Dieses Template wurde unter der Annahme geschrieben, dass es Zugriff auf eine Listenvariable namens `youngest_teams` haben wird, wenn es gerendert wird (dies ist in der `context`-Variable innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst prüft, ob die `youngest_teams`-Variable existiert, und dann in einer `for`-Schleife iteriert. Bei jeder Iteration zeigt das Template den `team_name`-Wert jedes Teams in einem \<li\> Element an.

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

## Was können Sie sonst noch tun?

Die vorangehenden Abschnitte zeigen die Hauptfunktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Modelle und Templates. Ein paar der anderen Dinge, die von Django bereitgestellt werden, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Blick auf die Sicherheit erstellt wurde.
- **Caching**: Das Erstellen von Inhalten dynamisch ist viel rechenintensiver (und langsamer) als das Liefern von statischen Inhalten. Django bietet flexibles Caching, sodass Sie alle oder Teile einer gerenderten Seite speichern können, damit sie nicht unnötig erneut gerendert wird.
- **Admin-Site**: Die Django-Admin-Site ist standardmäßig enthalten, wenn Sie eine App mit dem Basisskelett erstellen. Dadurch wird es unglaublich einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um beliebige Datenmodelle in Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites genutzt werden und nichts selbst angezeigt), oder wenn Sie eine Website erstellen, auf der der clientseitige Code die gesamte Datenrendering vornimmt.

## Zusammenfassung

Glückwunsch, Sie haben den ersten Schritt in Ihrem Django-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte erfahren und grob wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch ein paar Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits einige echte Django-Codes gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
