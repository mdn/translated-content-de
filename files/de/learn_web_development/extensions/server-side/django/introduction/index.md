---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Artikel zu Django beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework so besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie es testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere die Mechanismen von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
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

Django ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Von erfahrenen Entwicklern erstellt, nimmt Django Ihnen vieles von der Mühe der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Gemeinschaft, großartige Dokumentation und viele Optionen für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Komplett ist
  - : Django folgt der Philosophie "Batteries Included" und bietet fast alles, was Entwickler "out of the box" machen möchten. Da alles, was Sie brauchen, Teil des einen "Produkts" ist, funktioniert es nahtlos zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig ist

  - : Django kann (und wurde) verwendet, um fast jede Art von Website zu erstellen — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Auswahlmöglichkeiten für fast jede Funktionalität, die Sie benötigen könnten (z.B. mehrere populäre Datenbanken, Templating-Engines usw.), kann aber auch erweitert werden, um andere Komponenten zu verwenden, falls nötig.

- Sicher ist

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bietet, das darauf ausgelegt ist, automatisch die richtigen Dinge zu tun, um die Website zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten und vermeidet häufige Fehler wie das Speichern von Sitzungsinformationen in Cookies, wo sie anfällig sind (anstatt dessen enthalten Cookies nur einen Schlüssel, und die tatsächlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der durch das Senden des Passworts durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion führt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg"-Natur der Funktion ist es jedoch schwierig für einen Angreifer, aus einem kompromittierten Hash-Wert das ursprüngliche Passwort herauszufinden._

    Django ermöglicht standardmäßig den Schutz vor vielen Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar ist
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Ein klarer Unterschied zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Verkehr skalierbar ist, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungsserver. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihren Anforderungen gerecht zu werden (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar ist
  - : Django-Code wird nach Designprinzipien und Mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere wird das Prinzip "Don't Repeat Yourself" (DRY) angewendet, sodass keine unnötige Duplizierung entsteht und die Code-Menge reduziert wird. Django fördert auch die Gruppierung verwandter Funktionalität in wiederverwendbare "Anwendungen" und auf niedrigerem Niveau die Gruppierung verwandten Codes in Module (im Sinne des {{Glossary("MVC", "Model View Controller (MVC)")}}-Patterns).
- Portabel ist
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf verschiedenen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Django-Sites bereitstellen.

## Woher kam es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das für die Erstellung und Pflege von Zeitungswebsites verantwortlich war. Nachdem eine Reihe von Websites erstellt worden waren, begann das Team, viel gemeinsamen Code und Designmuster herauszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Web-Entwicklungs-Framework, das im Juli 2005 als "Django"-Projekt Open Source freigegeben wurde.

Django wurde kontinuierlich weiterentwickelt und verbessert, von seiner ersten Meilensteinveröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Version hat neue Funktionalitäten und Fehlerbehebungen hinzugefügt, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis zur Einführung von "generischen" View-Funktionen und -Klassen (die die Menge an Code reduzieren, den Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich auf der Django-Website die [Release Notes](https://docs.djangoproject.com/en/stable/releases/) an, um herauszufinden, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django gesteckt wird.

Django ist nun ein florierendes, kooperatives Open-Source-Projekt mit vielen tausend Benutzern und Mitwirkenden. Während es immer noch einige Merkmale hat, die seine Ursprünge widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbaren und endgültigen Messungen zur Popularität von serverseitigen Frameworks (obwohl Sie die Popularität durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Django "beliebt genug" ist, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl der bekannten Websites, die Django verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung anbieten, dann ja, Django ist ein beliebtes Framework!

Bekannte Websites, die Django verwenden, sind unter anderem: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django "opinionated"?

Web-Frameworks bezeichnen sich selbst oft als "opinionated" oder "unopinionated".

Opinionated-Frameworks sind diejenigen, die Meinungen darüber haben, wie eine bestimmte Aufgabe auf die "richtige Weise" gehandhabt werden sollte. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), da die richtige Vorgehensweise normalerweise gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel beim Lösen von Problemen außerhalb ihres Hauptbereichs sein und tendieren dazu, weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze zu bieten.

Unopinionated-Frameworks hingegen haben weit weniger Einschränkungen in Bezug darauf, wie Komponenten am besten zusammengefügt werden sollten, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die geeignetsten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Django ist "einigermaßen opinionated" und bietet somit das "Beste aus beiden Welten". Es stellt einen Satz von Komponenten zur Verfügung, um die meisten Aufgaben der Webentwicklung zu erledigen, und eine (oder zwei) bevorzugte Arten, diese zu verwenden. Django's entkoppelte Architektur bedeutet jedoch, dass Sie in der Regel aus mehreren Optionen wählen oder Unterstützung für komplett neue hinzufügen können, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen von einem Webbrowser (oder einem anderen Client). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, was benötigt wird, basierend auf der URL und möglicherweise Informationen in den `POST`- oder `GET`-Daten. Abhängig von den Anforderungen kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite für den Browser, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Django-Webanwendungen gruppieren typischerweise den Code, der jeden dieser Schritte ausführt, in separate Dateien:

![Django - Dateien für Ansichten, Modelle, URLs, Vorlagen](basic-django.png)

- **URLs:** Obwohl es möglich ist, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, ist es viel wartbarer, eine separate Ansichts-Funktion zu schreiben, um jede Ressource zu behandeln. Ein URL-Mapping wird verwendet, um HTTP-Anfragen basierend auf der Anforderungs-URL an die entsprechende Ansicht weiterzuleiten. Der URL-Mapping kann auch bestimmte Muster von Zeichenfolgen oder Zahlen, die in einer URL erscheinen, erkennen und diese als Daten an eine Ansichts-Funktion übergeben.
- **Ansicht:** Eine Ansicht ist eine Anforderungs-Handler-Funktion, die HTTP-Anfragen erhält und HTTP-Antworten zurückgibt. Ansichten greifen über _Modelle_ auf die benötigten Daten zu, um Anfragen zu erfüllen, und überlassen die Formatierung der Antwort _Vorlagen_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen bereitstellen, um Datensätze in der Datenbank zu verwalten (hinzufügen, ändern, löschen) und abzufragen.
- **Vorlagen:** Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (wie eine HTML-Seite), mit Platzhaltern, die den tatsächlichen Inhalt darstellen. Eine _Ansicht_ kann dynamisch eine HTML-Seite mit einer HTML-Vorlage erstellen, indem sie sie mit Daten aus einem _Modell_ füllt. Eine Vorlage kann verwendet werden, um die Struktur jeglichen Dateityps zu definieren; sie muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als die "Model View Template (MVT)"-Architektur. Sie hat viele Gemeinsamkeiten mit der eher vertrauten {{Glossary("MVC", "Model View Controller")}}-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs, sobald wir eine Entwicklungsumgebung eingerichtet haben, mehr ins Detail gehen).

### Die Anforderung an die richtige Ansicht senden (urls.py)

Ein URL-Mapping wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapping (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL-_Muster_) und den entsprechenden Ansichts-Funktionen.
Wenn eine HTTP-Anforderung empfangen wird, die mit einem bestimmten Muster übereinstimmt, wird die zugeordnete Ansichts-Funktion aufgerufen und erhält die Anforderung übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mithilfe von eckigen Klammern definiert, wobei Elemente durch Kommata getrennt sind und möglicherweise ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument für beide Methoden ist eine Route (ein Muster), das übereinstimmen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die Ansichts-Funktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Mustermatch-Ansatz, der als regulärer Ausdruck bekannt ist. Wir werden später in einem anderen Artikel darüber sprechen!

Das zweite Argument ist eine andere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` zu finden ist (d.h. in einer Datei namens `views.py`).

### Die Anforderung bearbeiten (views.py)

Ansichten sind das Herz der Webanwendung, die HTTP-Anfragen von Web-Clients empfangen und HTTP-Antworten zurückgeben. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Vorlagen zu rendern etc.

Das folgende Beispiel zeigt eine minimale Ansichts-Funktion `index()`, die von unserem URL-Mapping im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle Ansichts-Funktionen erhält sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anforderung, und unsere Antwort gibt einen festcodierten String zurück. Wir zeigen Ihnen später eine interessantere Anforderung.

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
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, mit benannten Parametern, die in Klammern nach dem Namen der Funktion aufgelistet sind; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen innerhalb dieses speziellen Blocks stehen (obligatorische Einrückung ist ein Schlüsselelement von Python und ein Grund, warum Python-Code so leicht zu lesen ist).

Ansichten werden in der Regel in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren Die Struktur der gespeicherten Daten, einschließlich der Feld*Typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahllistenoptionen, Hilfstext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren Datenbanken im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt alle "dreckigen Arbeiten" der Kommunikation mit der Datenbank für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und das Teamlevel als Zeichenfelder und legt eine maximale Anzahl von Zeichen fest, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einen von mehreren Werten haben, daher definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen den angezeigten und den gespeicherten Daten bereit, zusammen mit einem Standardwert.

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
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zum Arbeiten mit diesen Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um die "Blaupause" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir beispielsweise eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Das bedeutet, dass sie ein Modell ist und alle Methoden eines Modells enthält, wir können ihr aber auch eigene spezialisierte Merkmale geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell stellt eine einfache Abfrage-API zur Verfügung, um in der zugehörigen Datenbank zu suchen. Dies kann gegen eine Reihe von Feldern gleichzeitig mit verschiedenen Kriterien (z.B. genau, nicht groß-/kleinschreibungsempfindlich, größer als usw.) übereinstimmen und komplexe Anweisungen unterstützen (z.B. können Sie eine Suche auf U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine Ansichts-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modell-Abfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` hat (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Match-Typ durch einen Doppel-Understore getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser gesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie eine angegebene HTML-Vorlage und einige Daten kombiniert, die in die Vorlage eingefügt werden sollen (bereitgestellt in der Variable namens `context`). Im nächsten Abschnitt zeigen wir, wie die Vorlage die Daten einfügt, um das HTML zu erstellen.

### Daten rendern (HTML-Vorlagen)

Vorlagensysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für die Daten verwenden, die gefüllt werden, wenn eine Seite generiert wird. Vorlagen werden häufig verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen. Django unterstützt sowohl sein eigenes Vorlagensystem als auch eine weitere beliebte Python-Bibliothek namens Jinja2 von Haus aus (es kann auch so gestaltet werden, dass es andere Systeme unterstützt, wenn nötig).

Der Codeausschnitt zeigt, wie die HTML-Vorlage aussehen könnte, die von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird. Diese Vorlage wurde unter der Annahme geschrieben, dass sie beim Rendern auf eine Listenvariable namens `youngest_teams` zugreifen kann (diese ist in der `context`-Variable innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und dann in einer `for`-Schleife über sie iteriert. In jedem Durchgang zeigt die Vorlage den `team_name`-Wert jedes Teams in einem `<li>`-Element an.

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

## Was kann man sonst noch tun?

Die vorherigen Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Ansichten, Modelle und Vorlagen. Nur einige der anderen von Django bereitgestellten Funktionen umfassen:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django beinhaltet ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Sicherheit im Hinterkopf entwickelt wurde.
- **Caching**: Das dynamische Erstellen von Inhalten ist viel ressourcenaufwendiger (und langsamer) als das Bereitstellen von statischen Inhalten. Django bietet flexibles Caching, sodass Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf neu gerendert wird.
- **Administrationsseite**: Die Django-Administrationsseite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Gerüst erstellen. Es macht es trivial einfach, eine Admin-Seite für Website-Administratoren bereitzustellen, um Datenmodelle in Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und auszugeben. Dies kann nützlich sein, wenn Sie einen Webservice erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Websites konsumiert werden und selbst nichts anzeigt), oder wenn Sie eine Website erstellen, bei der der Client-Code die gesamte Darstellung der Daten übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und grob wissen, wie jeder der wichtigsten Teile einer Django-App aussehen könnte. Sie haben auch ein paar Dinge über die Programmiersprache Python gelernt, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits echten Django-Code gesehen, aber im Gegensatz zu Client-seitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
