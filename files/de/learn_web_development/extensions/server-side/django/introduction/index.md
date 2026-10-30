---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Artikel über Django beantworten wir die Frage „Was ist Django?“ und geben Ihnen einen Überblick darüber, was dieses Web-Framework auszeichnet.

Wir stellen die wichtigsten Funktionen vor, darunter auch einige fortgeschrittene Möglichkeiten, auf die wir in diesem Modul nicht näher eingehen können. Außerdem zeigen wir Ihnen einige der grundlegenden Bausteine einer Django-Anwendung (auch wenn Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Funktionsweise von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen auf Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Django ist, welche Funktionen es bietet und aus welchen grundlegenden Bausteinen eine Django-Anwendung besteht.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein Python-Web-Framework auf hohem Abstraktionsniveau, mit dem sich sichere und wartbare Websites schnell entwickeln lassen. Django wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen einen großen Teil der mühsamen Arbeit bei der Webentwicklung ab. So können Sie sich auf Ihre Anwendung konzentrieren, statt das Rad neu zu erfinden. Es ist kostenlos und quelloffen, hat eine lebendige und aktive Community, eine hervorragende Dokumentation sowie viele kostenlose und kostenpflichtige Supportangebote.

Django hilft Ihnen, Software mit folgenden Eigenschaften zu schreiben:

- Vollständig
  - : Django folgt dem „Batteries included“-Prinzip und bietet fast alles, was Entwickler benötigen könnten, direkt mit. Da alles, was Sie brauchen, Teil desselben „Produkts“ ist, arbeiten die Komponenten nahtlos zusammen, folgen einheitlichen Gestaltungsprinzipien und verfügen über eine umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig
  - : Mit Django lassen sich nahezu alle Arten von Websites erstellen – von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichtenseiten. Es kann mit jedem clientseitigen Framework zusammenarbeiten und Inhalte in nahezu jedem Format ausgeben, darunter HTML, RSS-Feeds, JSON und XML.

    Django bietet für fast jede gewünschte Funktion verschiedene Optionen, etwa mehrere verbreitete Datenbanken und Template-Engines. Bei Bedarf lässt es sich außerdem um andere Komponenten erweitern.

- Sicher
  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden. Das Framework ist darauf ausgelegt, automatisch die richtigen Maßnahmen zum Schutz der Website zu ergreifen. Beispielsweise bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten. So vermeidet es häufige Fehler wie das Ablegen von Sitzungsinformationen in Cookies, wo sie angreifbar wären (stattdessen enthalten Cookies nur einen Schlüssel, während die eigentlichen Daten in der Datenbank gespeichert werden), oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der entsteht, indem das Passwort durch eine [kryptografische Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) verarbeitet wird. Django kann prüfen, ob ein eingegebenes Passwort korrekt ist, indem es dieses durch die Hashfunktion verarbeitet und das Ergebnis mit dem gespeicherten Hashwert vergleicht. Da die Funktion jedoch nur in eine Richtung arbeitet, lässt sich selbst aus einem kompromittierten Hashwert das ursprüngliche Passwort nur schwer ermitteln._

    Django bietet standardmäßig Schutz vor vielen Sicherheitslücken, darunter SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Weitere Informationen zu solchen Angriffen finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

- Skalierbar
  - : Django verwendet eine komponentenbasierte „[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)“-Architektur: Jeder Teil der Architektur ist von den anderen unabhängig und kann bei Bedarf ersetzt oder verändert werden. Durch die klare Trennung der Komponenten lässt sich die Anwendung bei steigendem Datenverkehr skalieren, indem auf jeder Ebene zusätzliche Hardware eingesetzt wird – etwa Caching-Server, Datenbankserver oder Anwendungsserver. Einige der meistbesuchten Websites haben Django erfolgreich entsprechend ihren Anforderungen skaliert, darunter Instagram und Disqus.
- Wartbar
  - : Django-Code folgt Gestaltungsprinzipien und Mustern, die wartbaren und wiederverwendbaren Code fördern. Insbesondere setzt Django das Prinzip „Don't Repeat Yourself“ (DRY) ein: Unnötige Wiederholungen werden vermieden und dadurch wird weniger Code benötigt. Django fördert außerdem die Zusammenfassung zusammengehöriger Funktionen in wiederverwendbaren „Anwendungen“ und gruppiert zusammengehörigen Code auf einer niedrigeren Ebene in Modulen – ähnlich dem {{Glossary("MVC", "Model-View-Controller-Muster (MVC)")}}.
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Sie sind daher nicht an eine bestimmte Serverplattform gebunden und können Ihre Anwendungen auf verschiedenen Linux-Varianten sowie unter Windows und macOS ausführen. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezielle Infrastruktur und Dokumentation für das Hosting von Django-Websites bereitstellen.

## Woher kommt Django?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Pflege von Zeitungswebsites zuständig war. Nachdem das Team mehrere Websites erstellt hatte, begann es, gemeinsamen Code und wiederkehrende Gestaltungsmuster auszulagern und wiederzuverwenden. Daraus entstand ein allgemeines Framework für die Webentwicklung, das im Juli 2005 unter dem Namen „Django“ als Open-Source-Projekt veröffentlicht wurde.

Django ist seitdem stetig gewachsen und verbessert worden – von seiner ersten wichtigen Veröffentlichung (1.0) im September 2008 bis zur Version 6.1 im August 2026. Jede Veröffentlichung brachte neue Funktionen und Fehlerbehebungen mit sich: von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching-Verfahren bis zur Einführung „generischer“ View-Funktionen und -Klassen, die den Codeumfang für verschiedene Programmieraufgaben verringern.

> [!NOTE]
> Sehen Sie sich die [Versionshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu erfahren, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django fließt.

Django ist heute ein lebendiges, gemeinschaftlich entwickeltes Open-Source-Projekt mit vielen Tausend Nutzern und Mitwirkenden. Obwohl einige Funktionen noch seine Ursprünge widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, mit dem sich jede Art von Website erstellen lässt.

## Wie beliebt ist Django?

Es gibt keine leicht verfügbare, eindeutige Messgröße für die Beliebtheit serverseitiger Frameworks. Sie können sie allerdings anhand von Anhaltspunkten abschätzen, etwa der Anzahl der GitHub-Projekte und Stack-Overflow-Fragen zu einer Plattform. Die wichtigere Frage ist, ob Django „beliebt genug“ ist, um die Probleme wenig verbreiteter Plattformen zu vermeiden. Wird es weiterentwickelt? Können Sie bei Bedarf Hilfe bekommen? Gibt es Möglichkeiten, mit Django-Kenntnissen bezahlte Arbeit zu finden?

Gemessen an der Zahl bekannter Websites, die Django verwenden, der Mitwirkenden an der Codebasis und der Menschen, die kostenlose oder kostenpflichtige Unterstützung anbieten, lautet die Antwort: Ja, Django ist ein beliebtes Framework!

Zu den bekannten Websites und Organisationen, die Django verwenden, gehören Disqus, Instagram, die Knight Foundation, die MacArthur Foundation, Mozilla, National Geographic, die Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Gibt Django eine bestimmte Vorgehensweise vor?

Web-Frameworks bezeichnen sich häufig als „opinionated“ oder „unopinionated“ – je nachdem, wie stark sie bestimmte Vorgehensweisen vorgeben.

„Opinionated“-Frameworks haben klare Vorstellungen davon, wie eine bestimmte Aufgabe „richtig“ zu lösen ist. Oft ermöglichen sie eine schnelle Entwicklung _in einem bestimmten Anwendungsbereich_, weil geeignete Vorgehensweisen dafür bekannt und gut dokumentiert sind. Bei Problemen außerhalb ihres Hauptanwendungsbereichs können sie jedoch weniger flexibel sein und bieten meist weniger Auswahl bei Komponenten und Ansätzen.

„Unopinionated“-Frameworks machen dagegen deutlich weniger Vorgaben dazu, wie Komponenten am besten kombiniert werden sollten, um ein Ziel zu erreichen, oder welche Komponenten überhaupt verwendet werden sollten. Dadurch können Entwickler leichter die für eine Aufgabe am besten geeigneten Werkzeuge einsetzen. Allerdings müssen sie diese Komponenten selbst finden.

Django gibt „bis zu einem gewissen Grad“ Vorgehensweisen vor und vereint damit „das Beste aus beiden Welten“. Es stellt Komponenten für die meisten Aufgaben der Webentwicklung bereit und empfiehlt eine oder zwei Arten, sie einzusetzen. Dank seiner entkoppelten Architektur können Sie aber in der Regel zwischen verschiedenen Optionen wählen oder bei Bedarf Unterstützung für völlig neue hinzufügen.

## Wie sieht Django-Code aus?

Bei einer herkömmlichen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen eines Webbrowsers oder eines anderen Clients. Wenn eine Anfrage eingeht, ermittelt die Anwendung anhand der URL und gegebenenfalls der Informationen in den `POST`- oder `GET`-Daten, was benötigt wird. Je nach Anforderung liest oder schreibt sie anschließend Daten in einer Datenbank oder führt andere Aufgaben aus, um die Anfrage zu beantworten. Danach sendet die Anwendung eine Antwort an den Webbrowser. Häufig erstellt sie dabei dynamisch eine HTML-Seite für die Anzeige im Browser, indem sie abgerufene Daten in Platzhalter eines HTML-Templates einsetzt.

Django-Webanwendungen verteilen den Code für diese Schritte normalerweise auf separate Dateien:

![Django – Dateien für Views, Model, URLs und Template](basic-django.png)

- **URLs:** Zwar könnten Anfragen für sämtliche URLs von einer einzigen Funktion verarbeitet werden, doch für jede Ressource eine eigene View-Funktion zu schreiben, erleichtert die Wartung erheblich. Ein URL-Mapper leitet HTTP-Anfragen anhand der angefragten URL an die passende View weiter. Er kann auch bestimmte Muster aus Zeichenfolgen oder Ziffern in einer URL erkennen und sie als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Funktion zur Verarbeitung von Anfragen. Sie empfängt HTTP-Anfragen und gibt HTTP-Antworten zurück. Views greifen über _Models_ auf die zur Beantwortung benötigten Daten zu und überlassen die Formatierung der Antwort den _Templates_.
- **Models:** Models sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren. Sie stellen außerdem Mechanismen bereit, um Datensätze in der Datenbank zu verwalten (hinzuzufügen, zu ändern und zu löschen) und abzufragen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei, etwa einer HTML-Seite, definiert. Platzhalter stehen dabei für die tatsächlichen Inhalte. Eine _View_ kann mithilfe eines HTML-Templates dynamisch eine HTML-Seite erstellen und sie mit Daten aus einem _Model_ füllen. Templates können die Struktur beliebiger Dateitypen definieren – nicht nur die von HTML-Dateien!

> [!NOTE]
> Django bezeichnet diese Organisation als „Model-View-Template-Architektur (MVT)“. Sie weist viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model-View-Controller-Architektur")}} auf.

Die folgenden Abschnitte vermitteln Ihnen einen Eindruck davon, wie diese Hauptbestandteile einer Django-Anwendung aussehen. Wir gehen später im Kurs näher darauf ein, sobald wir eine Entwicklungsumgebung eingerichtet haben.

### Die Anfrage an die richtige View weiterleiten (urls.py)

Ein URL-Mapper befindet sich üblicherweise in einer Datei namens **urls.py**.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (bestimmten URL-_Mustern_) und den zugehörigen View-Funktionen.
Wenn eine HTTP-Anfrage mit einer URL eingeht, die einem festgelegten Muster entspricht, wird die zugehörige View-Funktion aufgerufen und erhält die Anfrage als Argument.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das Objekt `urlpatterns` ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert; ihre durch Kommas getrennten Einträge dürfen auch ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben. Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Funktionen ist eine Route (ein Muster), mit der die URL abgeglichen wird. Die Funktion `path()` verwendet spitze Klammern, um Teile einer URL festzulegen, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die Funktion `re_path()` nutzt ein flexibles Verfahren zum Musterabgleich, das als regulärer Ausdruck bezeichnet wird. Darauf kommen wir in einem späteren Artikel zurück!

Das zweite Argument ist eine weitere Funktion, die bei einer Übereinstimmung mit dem Muster aufgerufen wird. Die Schreibweise `views.book_detail` zeigt an, dass die Funktion `book_detail()` heißt und sich in einem Modul namens `views` befindet (also in einer Datei namens `views.py`).

### Die Anfrage verarbeiten (views.py)

Views sind das Herzstück der Webanwendung: Sie empfangen HTTP-Anfragen von Webclients und geben HTTP-Antworten zurück. Dazwischen binden sie andere Ressourcen des Frameworks ein, um etwa auf Datenbanken zuzugreifen oder Templates zu rendern.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die vom URL-Mapper aus dem vorherigen Abschnitt aufgerufen werden könnte. Wie jede View-Funktion erhält sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall verwenden wir die Anfrage nicht weiter; die Antwort enthält eine fest vorgegebene Zeichenfolge. In einem späteren Abschnitt zeigen wir Ihnen eine Anfrage, die etwas Interessanteres bewirkt.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind „Bibliotheken“ von Funktionen, die in separaten Dateien gespeichert sind und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das Objekt `HttpResponse` aus dem Modul `django.http`, damit wir es in unserer View verwenden können: `from django.http import HttpResponse`. Es gibt auch andere Möglichkeiten, einzelne oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden wie oben gezeigt mit dem Schlüsselwort `def` deklariert. Auf den Funktionsnamen folgen benannte Parameter in Klammern; die Zeile endet mit einem Doppelpunkt. Beachten Sie, dass die folgenden Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, denn sie kennzeichnet die Codezeilen, die zu diesem Block gehören. Diese obligatorische Einrückung ist ein wesentliches Merkmal von Python und einer der Gründe, weshalb Python-Code so gut lesbar ist.

Views werden üblicherweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und durchsuchen Daten mithilfe von Python-Objekten, die Models genannt werden. Models definieren die Struktur der gespeicherten Daten, darunter die _Typen_ der Felder und gegebenenfalls ihre maximale Länge, Standardwerte, Optionen für Auswahllisten, Hilfetexte für die Dokumentation, Beschriftungen für Formulare und mehr. Die Definition eines Models ist unabhängig von der zugrunde liegenden Datenbank – Sie können im Rahmen Ihrer Projekteinstellungen eine von mehreren Datenbanken auswählen. Sobald Sie sich für eine Datenbank entschieden haben, müssen Sie nicht mehr direkt mit ihr arbeiten: Sie definieren lediglich die Struktur Ihres Models und schreiben den übrigen Code. Django übernimmt die gesamte aufwendige Kommunikation mit der Datenbank.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Model für ein `Team`-Objekt. Die Klasse `Team` leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und die Teamstufe als Zeichenfelder und legt fest, wie viele Zeichen jeweils höchstens gespeichert werden können. Für `team_level` sind mehrere Werte möglich. Deshalb definieren wir sie in einer Klasse `TeamLevel`, die jedem gespeicherten Wert eine Anzeigebeschriftung zuordnet.
Diese Klasse übergeben wir als `choices` des Feldes und legen außerdem einen Standardwert fest.

```python
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    class TeamLevel(models.TextChoices):
        U09 = 'U09', 'Under 09s'
        U10 = 'U10', 'Under 10s'
        U11 = 'U11', 'Under 11s'
        # …
        # list other team levels

    team_level = models.CharField(max_length=3, choices=TeamLevel, default=TeamLevel.U11)
```

> [!NOTE]
> Ein wenig Python:
>
> Python unterstützt die „objektorientierte Programmierung“. Bei diesem Programmierstil gliedern wir Code in Objekte, die zusammengehörige Daten und Funktionen zur Verarbeitung dieser Daten enthalten. Objekte können außerdem von anderen Objekten erben, sie erweitern oder von ihnen abgeleitet werden. So lässt sich gemeinsames Verhalten verwandter Objekte wiederverwenden. In Python definieren wir mit dem Schlüsselwort `class` den „Bauplan“ für ein Objekt. Auf Grundlage der Klasse können wir mehrere konkrete _Instanzen_ dieses Objekttyps erstellen.
>
> Hier haben wir beispielsweise eine Klasse `Team`, die von der Klasse `Model` abgeleitet ist. Damit ist sie ein Model und verfügt über alle Methoden eines Models. Zusätzlich können wir ihr eigene, spezialisierte Funktionen geben. In unserem Model definieren wir die Felder, die die Datenbank zum Speichern unserer Daten benötigt, und geben ihnen bestimmte Namen. Django verwendet diese Definitionen einschließlich der Feldnamen, um die zugrunde liegende Datenbank anzulegen.

### Daten abfragen (views.py)

Das Django-Model stellt eine einfache Abfrage-API bereit, mit der Sie die zugehörige Datenbank durchsuchen können. Damit lassen sich mehrere Felder gleichzeitig anhand unterschiedlicher Kriterien abgleichen, etwa auf exakte Übereinstimmung, ohne Beachtung der Groß- und Kleinschreibung oder mit einem Größer-als-Vergleich. Auch komplexe Abfragen sind möglich: Sie könnten beispielsweise nach U11-Teams suchen, deren Name mit „Fr“ beginnt oder mit „al“ endet.

Der Codeausschnitt zeigt eine View-Funktion zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir mit der Abfrage-API des Models nach allen Datensätzen filtern, bei denen das Feld `team_level` exakt den Text `U09` enthält. Beachten Sie, dass dieses Kriterium der Funktion `filter()` als Argument übergeben wird. Feldname und Abgleichstyp sind dabei durch einen doppelten Unterstrich getrennt: **`team_level__exact`**.

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

Diese Funktion verwendet `render()`, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. `render()` ist eine _Kurzform_: Die Funktion kombiniert ein angegebenes HTML-Template mit Daten, die in das Template eingefügt werden sollen (bereitgestellt in der Variablen `context`), und erstellt daraus eine HTML-Datei. Im nächsten Abschnitt zeigen wir, wie die Daten in das Template eingesetzt werden, um das HTML zu erzeugen.

### Daten rendern (HTML-Templates)

Mit Template-Systemen können Sie die Struktur eines Ausgabedokuments festlegen. Platzhalter stehen für Daten, die beim Erstellen der Seite eingefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen. Django unterstützt sowohl sein eigenes Template-System als auch die beliebte Python-Bibliothek Jinja2 direkt. Bei Bedarf kann auch Unterstützung für weitere Systeme hinzugefügt werden.

Der Codeausschnitt zeigt, wie das HTML-Template aussehen könnte, das im vorherigen Abschnitt von `render()` verwendet wurde. Dieses Template setzt voraus, dass beim Rendern eine Listenvariable namens `youngest_teams` verfügbar ist (sie befindet sich in der Variablen `context` innerhalb der oben gezeigten Funktion `render()`). Innerhalb des HTML-Grundgerüsts prüft ein Ausdruck zunächst, ob die Variable `youngest_teams` existiert, und durchläuft sie anschließend in einer `for`-Schleife. Bei jedem Durchlauf gibt das Template den Wert `team_name` eines Teams in einem {{htmlelement("li")}}-Element aus.

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

Die vorherigen Abschnitte zeigen die wichtigsten Funktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Zuordnung, Views, Models und Templates. Django bietet darüber hinaus unter anderem Folgendes:

- **Formulare**: HTML-Formulare erfassen Benutzerdaten, die auf dem Server verarbeitet werden. Django vereinfacht das Erstellen, Validieren und Verarbeiten von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein zuverlässiges System zur Benutzerauthentifizierung und Berechtigungsverwaltung, das mit Blick auf die Sicherheit entwickelt wurde.
- **Caching**: Die dynamische Erstellung von Inhalten erfordert deutlich mehr Rechenleistung und Zeit als die Bereitstellung statischer Inhalte. Django bietet flexible Caching-Möglichkeiten: Sie können eine gerenderte Seite ganz oder teilweise zwischenspeichern, damit sie nur bei Bedarf neu gerendert werden muss.
- **Administrationsoberfläche**: Wenn Sie eine Anwendung anhand des grundlegenden Gerüsts erstellen, ist die Django-Administrationsoberfläche standardmäßig enthalten. Damit können Sie Website-Administratoren auf einfache Weise eine Verwaltungsseite bereitstellen, auf der sie die Datenmodelle Ihrer Website erstellen, bearbeiten und ansehen können.
- **Datenserialisierung**: Mit Django können Sie Daten einfach als XML oder JSON serialisieren und bereitstellen. Das ist beispielsweise nützlich, wenn Sie einen Webdienst erstellen – eine Website, die ausschließlich Daten für andere Anwendungen oder Websites bereitstellt und selbst nichts anzeigt – oder wenn bei Ihrer Website der clientseitige Code die gesamte Darstellung der Daten übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrem Weg mit Django geschafft! Sie sollten nun die wichtigsten Vorteile von Django verstehen, ein wenig über seine Geschichte wissen und eine ungefähre Vorstellung davon haben, wie die Hauptbestandteile einer Django-Anwendung aussehen. Außerdem haben Sie einiges über die Programmiersprache Python gelernt, darunter die Syntax für Listen, Funktionen und Klassen.

Oben haben Sie bereits echten Django-Code gesehen. Anders als bei clientseitigem Code benötigen Sie jedoch eine Entwicklungsumgebung, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
