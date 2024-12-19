---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Außerdem zeigen wir Ihnen einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Allgemeines Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Django zu gewinnen, welche Funktionalität es bietet und die Hauptbausteine einer Django-Anwendung kennenzulernen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochentwickeltes Python-Web-Framework, das eine schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Entwickelt von erfahrenen Entwicklern nimmt Django Ihnen viel der Mühe der Web-Entwicklung ab, so dass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Community, ausgezeichnete Dokumentation und viele Optionen für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig ist
  - : Django folgt der "Batterien inklusive"-Philosophie und bietet fast alles, was Entwickler "out of the box" tun möchten. Da alles, was Sie brauchen, Teil eines Produkts ist, funktioniert es nahtlos zusammen, folgt konsistenten Designprinzipien und verfügt über umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) verwendet, um fast jeden Typ von Website zu erstellen – von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Optionen für fast jede gewünschte Funktionalität (z.B. mehrere beliebte Datenbanken, Vorlagen-Engines usw.), kann aber auch erweitert werden, um bei Bedarf andere Komponenten zu verwenden.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bietet, das darauf ausgelegt ist, die "richtigen Dinge" automatisch zu tun, um die Website zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten und vermeidet dabei häufige Fehler wie das Ablegen von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, und die tatsächlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein festgelegter Längenwert, der durch das Senden des Passworts durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion sendet und das Ergebnis mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg"-Natur der Funktion ist es jedoch auch bei einem kompromittierten Hash-Wert schwierig, das ursprüngliche Passwort zu ermitteln._

    Django bietet standardmäßig Schutz gegen viele Schwachstellen, einschließlich SQL-Injection, Cross-Site Scripting, Cross-Site Request Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung der verschiedenen Teile bedeutet, dass es sich für erhöhten Datenverkehr durch Hinzufügen von Hardware auf jeder Ebene skalieren lässt: Caching-Server, Datenbankserver oder Applikationsserver. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihre Anforderungen zu erfüllen (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Verwendung von Designprinzipien und -mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere nutzt es das Don't Repeat Yourself (DRY)-Prinzip, sodass keine unnötige Duplikation stattfindet, was den Code reduziert. Django fördert auch die Gruppierung verwandter Funktionalität in wiederverwendbare "Anwendungen" und auf niedrigerer Ebene die Gruppierung verwandten Codes in Module (ähnlich dem {{Glossary("MVC", "Model View Controller (MVC)")}}-Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Linux-Varianten, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosting von Django-Sites bereitstellen.

## Woher kommt Django?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nach der Erstellung einer Reihe von Websites begann das Team, viel gemeinsamen Code und Designmuster herauszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Web-Entwicklungs-Framework, das im Juli 2005 als "Django"-Projekt veröffentlicht wurde.

Django hat sich stetig weiterentwickelt und verbessert, von seiner ersten Meilenstein-Version (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung brachte neue Funktionalitäten und Fehlerbehebungen, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Hinzufügung von "generischen" View-Funktionen und -Klassen (die die Menge an Code reduzieren, die Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich die [Veröffentlichungshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django gesteckt wird.

Django ist jetzt ein florierendes, kollaboratives Open-Source-Projekt mit vielen Tausenden von Benutzern und Mitwirkenden. Während es immer noch einige Funktionen hat, die seine Herkunft widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbaren und endgültigen Messungen der Beliebtheit von serverseitigen Frameworks (obwohl man die Beliebtheit durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform abschätzen kann). Eine bessere Frage ist, ob Django "beliebt genug" ist, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Gelegenheit für Sie, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochkarätiger Websites, die Django verwenden, der Anzahl der Personen, die zum Codebasis beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, dann ja, Django ist ein beliebtes Framework!

Hochkarätige Websites, die Django nutzen, sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django "Opinionated"?

Web-Frameworks bezeichnen sich oft als "opinionated" oder "unopinionated".

Opinionated-Frameworks sind solche, die Meinungen darüber haben, wie man eine bestimmte Aufgabe "richtig" erledigt. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel darin sein, Probleme außerhalb ihres Hauptbereichs zu lösen, und neigen dazu, weniger Auswahlmöglichkeiten für die verwendeten Komponenten und Ansätze zu bieten.

Unopinionated-Frameworks haben im Gegensatz dazu viel weniger Einschränkungen darüber, was der beste Weg ist, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, allerdings auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas opinionated" und bietet daher das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten zur Bearbeitung der meisten Webentwicklungsaufgaben und eine (oder zwei) bevorzugte Methoden zur Verwendung derselben. Djangos entkoppelte Architektur bedeutet jedoch, dass Sie in der Regel aus einer Reihe verschiedener Optionen auswählen oder bei Bedarf Unterstützung für völlig neue Optionen hinzufügen können.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anforderungen des Webbrowsers (oder eines anderen Clients). Wenn eine Anforderung empfangen wird, arbeitet die Anwendung heraus, was benötigt wird, basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anforderung erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie oft dynamisch eine HTML-Seite für den Browser erstellt, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte verarbeitet, typischerweise in separate Dateien:

![Django - Dateien für Ansichten, Modell, URLs, Vorlage](basic-django.png)

- **URLs:** Während es möglich ist, Anforderungen von jeder einzelnen URL über eine einzelne Funktion zu verarbeiten, ist es viel wartbarer, eine separate View-Funktion zu schreiben, um jede Ressource zu verarbeiten. Ein URL-Mapper wird verwendet, um HTTP-Anforderungen basierend auf der Anforderungs-URL an die entsprechende View umzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern erkennen, die in einer URL erscheinen, und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsverarbeitungsfunktion, die HTTP-Anforderungen empfängt und HTTP-Antworten zurückgibt. Views greifen über _Modelle_ auf die zur Befriedigung von Anforderungen benötigten Daten zu und überlassen das Formatieren der Antwort den _Vorlagen_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (Hinzufügen, Ändern, Löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Vorlagen:** Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (z.B. einer HTML-Seite), mit Platzhaltern, die tatsächlichen Inhalt darstellen. Eine _View_ kann eine HTML-Seite dynamisch erstellen, indem sie eine HTML-Vorlage verwendet und diese mit Daten aus einem _Modell_ füllt. Eine Vorlage kann verwendet werden, um die Struktur eines beliebigen Dateityps zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)"-Architektur. Es gibt viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}}-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs, sobald wir eine Entwicklungsumgebung eingerichtet haben, mehr ins Detail gehen).

### Senden der Anfrage an die richtige Ansicht (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im untenstehenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL-_Muster)_ und den entsprechenden View-Funktionen.
Wenn eine HTTP-Anforderung empfangen wird, die eine URL hat, die einem bestimmten Muster entspricht, wird die zugehörige View-Funktion aufgerufen und die Anforderung übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei die Elemente durch Kommas getrennt sind und ein [optional nachgestelltes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (Muster), die übereinstimmen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die Funktion `re_path()` verwendet einen flexiblen Musterabgleichsansatz, bekannt als regulärer Ausdruck. Wir werden später in einem Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` heißt und sich in einem Modul namens `views` befindet (d.h. in einer Datei namens `views.py`).

### Bearbeiten der Anfrage (views.py)

Views sind das Herzstück der Webanwendung, sie empfangen HTTP-Anforderungen von Web-Clients und geben HTTP-Antworten zurück. Zwischendurch organisieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Vorlagen zu rendern usw.

Das untenstehende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorhergehenden Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage, und unsere Antwort gibt einen fest codierten String zurück. Wir zeigen Ihnen später eine Anfrage, die etwas Interessanteres macht.

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
> - Funktionen werden mit dem `def`-Schlüsselwort deklariert, wie oben gezeigt, mit benannten Parametern in Klammern nach dem Namen der Funktion; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingezogen** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen zu diesem speziellen Block gehören (verpflichtende Einrückungen sind ein Hauptmerkmal von Python und ein Grund dafür, dass Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Definieren von Datenmodellen (models.py)

Django-Webanwendungen verwalten und fragen Daten durch Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feldtypen und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für die Dokumentation, Bezeichnungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine von mehreren als Teil Ihrer Projekteinstellungen auswählen. Sobald Sie entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr sprechen – Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die gesamte "Drecksarbeit" der Kommunikation mit der Datenbank für Sie.

Der untenstehende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse ist von der Django-Klasse `models.Model` abgeleitet. Sie definiert den Teamnamen und das Team-Level als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einer von mehreren Werten sein, daher definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen angezeigten Auswahlmöglichkeiten und zu speichernden Daten zusammen mit einem Standardwert bereit.

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
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zum Anfassen dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Blueprint" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir hier zum Beispiel eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass sie ein Modell ist und alle Methoden eines Modells enthalten wird, aber wir können ihr auch eigene spezialisierte Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, indem wir ihnen spezifische Namen geben. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Abfragen von Daten (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zur Suche in der zugehörigen Datenbank. Diese kann mit einer Anzahl von Feldern gleichzeitig mit verschiedenen Kriterien abgeglichen werden (z.B. exakt, ohne Groß-/Kleinschreibung, größer als usw.) und unterstützt komplexe Anweisungen (z.B. können Sie eine Suche nach U11-Teams durchführen, deren Teamname mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Resource-Handler) zum Anzeigen aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld exakt den Text `U09` enthält (beachten Sie, wie dieses Kriterium als Argument an die `filter()`-Funktion übergeben wird, wobei der Feldname und der Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um das `HttpResponse` zu erstellen, das an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie eine angegebene HTML-Vorlage und einige Daten kombiniert, die in die Vorlage eingefügt werden (bereitgestellt in der Variablen `context`). Im nächsten Abschnitt zeigen wir, wie die Vorlage die Daten einfügt, um das HTML zu erstellen.

### Rendern von Daten (HTML-Vorlagen)

Vorlagensysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die eingefügt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erzeugen. Django unterstützt sowohl sein natives Vorlagensystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 standardmäßig (es kann auch so erweitert werden, dass es bei Bedarf andere Systeme unterstützt).

Der Codeausschnitt zeigt, wie die HTML-Vorlage, die in der vorherigen Sektion von der `render()`-Funktion aufgerufen wurde, aussehen könnte. Diese Vorlage wurde unter der Annahme geschrieben, dass sie beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese ist in der `context`-Variablen innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife iteriert. Bei jeder Iteration zeigt die Vorlage den `team_name`-Wert jedes Teams in einem `{{htmlelement("li")}}`-Element an.

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

## Was sonst können Sie tun?

Die vorangegangenen Abschnitte zeigen die wichtigsten Funktionen, die Sie in fast jeder Webanwendung verwenden: URL-Mapping, Views, Modelle und Vorlagen. Nur einige der anderen von Django bereitgestellten Dinge sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu erfassen. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes System zur Benutzerauthentifizierung und Berechtigung, das mit Blick auf Sicherheit entwickelt wurde.
- **Caching**: Das dynamische Erstellen von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie eine ganze oder Teile einer gerenderten Seite speichern können, sodass sie nicht erneut gerendert wird, es sei denn, es ist notwendig.
- **Administrationsseite**: Die Django-Administrationsseite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Skelett erstellen. Sie macht es extrem einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um beliebige Datenmodelle auf Ihrer Website zu erstellen, zu bearbeiten und anzuzeigen.
- **Serialisieren von Daten**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, um von anderen Anwendungen oder Sites konsumiert zu werden, und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, bei der der clientseitige Code alle Daten rendert.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und ungefähr wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch ein paar Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits ein wenig echten Django-Code gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
