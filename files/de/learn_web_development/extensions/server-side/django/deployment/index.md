---
title: "Django Tutorial Teil 11: Django in der Produktion bereitstellen"
short-title: "11: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet, jetzt ist es an der Zeit, diese auf einem Webserver zu installieren, sodass sie über das öffentliche Internet zugänglich ist.
Diese Seite beschreibt, wie ein Django-Projekt gehostet wird und was Sie vorbereiten müssen, um Ihre Website für eine Produktions-Bereitstellung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Website auf dem lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App wählen.
- Eine Umgebung für das Hosting von statischen Dateien wählen.
- Eine Produktions-Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen für die Auswahl eines Hosting-Anbieters, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Django-Anwendung bereit für die Produktion zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/)-Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Gebrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprachenlaufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf die Ihre Website angewiesen ist.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung könnte auch ein Reverse Proxy, ein Lastenausgleich usw. vorhanden sein.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im oder den Rechenzentren Ihres Hostingunternehmens ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Niveau an Computerressourcen (CPU, RAM, Speicherkapazität usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von ferngesteuerter Computer-/Netzwerkinfrastruktur wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen Ihnen die Auswahl von voll ausgestatteten Umgebungen, die möglicherweise eine vollständige Django- und Webserver-Konfiguration umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und eine Vorstellung davon haben, wo Sie bei der Aktualisierung anfangen können!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleich) kümmern, da die Hostplattform diese für Sie bereitstellt — zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartung und einfachere Skalierung von PaaS schätzen werden. Wenn Sie anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollten sie Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. (Dies ist nicht relevant, wenn Sie einen PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django-Gemeinschaftsdokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Wahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit Django zusammenarbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Dinge, die bei der Auswahl eines Hosts zu berücksichtigen sind:

- Wie stark Ihre Website wahrscheinlich ausgelastet ist und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontales Skalieren (Hinzufügen weiterer Maschinen) und vertikales Skalieren (Aufrüsten auf leistungsstärkere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und wo der Zugang daher am schnellsten wahrscheinlich ist.
- Die historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Werkzeuge zur Verwaltung der Website — sind sie benutzerfreundlich und sicher (z.B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen, oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für das Migrieren zu einer teureren Stufe bedeuten, dass Sie besser gleich einen anderen Dienst genutzt hätten.

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Websites gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluierung und Tests gedacht sind.
Diese sind in der Regel ressourcenbeschränkte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Anfangszeit ablaufen oder andere Einschränkungen haben können.
Sie sind jedoch großartig, um Websites mit geringem Datenverkehr in einer gehosteten Umgebung zu testen und können eine einfache Migration zur Zahlung für mehr Ressourcen ermöglichen, wenn Ihre Website geschäftiger wird.
Beliebte Entscheidungen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Level an Computerleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website für die Veröffentlichung vorbereiten

Das mit _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten aus Sicherheits- oder Leistungsgründen für die Produktion unterschiedlich sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder bedingt sensible Einstellungen aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dieser sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensitive/geheime Debugging-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode enthalten ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumentation schlägt vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer nur serverseitigen Datei gelesen werden sollten.
Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, auf Werte aus einer **.env**-Datei im Stammverzeichnis zurückgreifen und schließlich die Standardwerte in der Konfigurationsdatei verwenden.
Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration ermöglicht.

Für das Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach `BASE_DIR` ein, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>', '<DEFAULT VALUE>')` verwendet wird, sofern definiert.

> [!NOTE]
> Jeder Wert, den Sie zu **.env** hinzufügen, ist wahrscheinlich ein _Geheimnis_!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Nächstes deaktivieren Sie die ursprüngliche `SECRET_KEY`-Konfiguration und fügen die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG`-Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert des `DEBUG` wird standardmäßig `True` sein, aber nur `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei festgelegt ist.
Bitte beachten Sie, dass Umgebungsvariablen Strings und keine Python-Typen sind. Daher müssen wir Strings vergleichen. Der einzige Weg, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie im [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Reihe dieser Einstellungen mit dem folgenden Terminal-Befehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python HTTP-Server, der häufig zum Bereitstellen von Django WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht zum Bereitstellen unserer LocalLibrary-Anwendung während der Entwicklung benötigen, installieren wir es lokal, damit es Teil unserer [requirements](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-Virtual-Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) haben (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal auf der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie während der Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keine persistenten Datenspeicher im Anwendungsumfeld bereitstellen (eine Anforderung von SQLite).
Obwohl das für die Beispielbereitstellung(en) möglicherweise keine Auswirkungen hat, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktionieren wird.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine Adresse zugegriffen wird, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` zur Verfügung gestellt.
Anstatt diese Informationen in Django hart zu kodieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dieses benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbank-Konfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) ist, die auf dem Bereitstellungsserver eingerichtet werden sollen:

```bash
pip3 install dj-database-url
```

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei:

```python
# Update database configuration from $DATABASE_URL environment variable (if defined)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django wird nun die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die Standard-SQLite-Datenbank.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist als das erneute Erstellen der Verbindung in jedem Anfragezyklus (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3): https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber es hat nicht auf Railway funktioniert!
  Beim nächsten Release erneut versuchen zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) für Railway ist, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwendet, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig auf Postgres umsteigen und die gleiche gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie die gleiche Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, die gleiche Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst-gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellung von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamische HTML als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, da die Anfragen durch Django geleitet werden müssen, auch wenn Django nichts damit macht.
Während dies in der Entwicklung keine Rolle spielt, hätte es einen erheblichen Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL, von dem aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem das _collectstatic_-Tool von Django alle in unseren Vorlagen referenzierten statischen Dateien sammeln wird. Sobald gesammelt, können diese dann als Gruppe an den Ort hochgeladen werden, an dem die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_-Tool von Django nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf statische Dateipositionen relativ zu einem `static`-Tag (wie Sie es in der Basismaschine definiert in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) sehen können), das wiederum auf die `STATIC_URL`-Einstellung abgebildet wird.
Statische Dateien können daher an jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den im `STATIC_ROOT`-Projekteinstellungen definierten Ordner zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden, wobei alle statischen Dateien in der Anwendung an den Ort kopiert werden, der mit `STATIC_ROOT` angegeben ist.
`Whitenoise` findet dann die Dateien von dem im `STATIC_ROOT` definierten Ort (standardmäßig) und stellt sie bei der mit `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits bei der Erstellung der Datei innerhalb der Datei definiert worden sein.
Während es keinen Schaden anrichtet, können Sie die doppelte frühere Referenz auch löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden tatsächlich das Bereitstellen der Dateien mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Wege, um statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion bereitzustellen.

Schauen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/)-Dokumentation für eine Erklärung an, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien darstellt.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` nahe der Spitze der Liste ein, direkt unter `SecurityMiddleware`:

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

Optional können Sie die Grösse der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter).
Fügen Sie einfach das Folgende am Ende von **/locallibrary/settings.py** hinzu:

```python
# Static file serving.
# https://whitenoise.readthedocs.io/en/stable/django.html#add-compression-and-caching-support
STORAGES = {
    # ...
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
```

Sie müssen nichts Weiteres tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden.
Viele Hosting-Dienste installieren Abhängigkeiten automatisch in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie Folgendes im Stammverzeichnis des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller unterschiedlichen Abhängigkeiten sollten in Ihrer **requirements.txt**-Datei _mindestens_ diese Elemente aufgelistet sein (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die nicht unten aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Sie Ihr Anwendungs-Repository auf GitHub

Viele Hosting-Dienste erlauben Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Source-Control-Plattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung sehr erleichtern.

Sie sollten bereits GitHub verwenden, um den lokalen Quellcode der Bibliothek zu speichern (dies wurde im Abschnitt [Source Control Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den nächsten Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung), mögen andere das nicht sein.
Angenommen, Sie haben bereits alle bisher gemachten Änderungen im `main`-Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie folgt zu sichern:

```bash
# Fetch the latest main branch
git checkout main
git pull origin main

# Create branch vanilla_deployment from the current branch (main)
git checkout -b vanilla_deployment

# Push the new branch to GitHub
git push origin vanilla_deployment

# Switch back to main
git checkout main

# Make any further changes in a new branch
git checkout -b my_changes_for_deployment # Create a new branch
```

## Beispiel: Hosting auf PythonAnywhere

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hostet.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen dafür, PythonAnywhere zu verwenden:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, und es wurde migriert, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass es wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, um es zum Vergleich zu verwenden und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, besser zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie sich nicht darum kümmern müssen.
  Sich nicht um Server, Lastenausgleich, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere erlernen, sind übertragbar.
- Die Dienst- und Pläneinschränkungen beeinträchtigen uns bei der Nutzung von PythonAnywhere für das Tutorial nicht besonders.
  Zum Beispiel:
  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unser Grundseite läuft!
  - Benutzerdefinierte Domains werden zum Zeitpunkt des Schreibens nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht in Gebrauch ist, sodass sie möglicherweise langsam neu startet.
    Sie können sie dauerhaft betreiben, aber Sie müssen die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber keine für Postgres.
    In dieser Demonstration verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank.

PythonAnywhere ist für das Hosting dieser Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden.
Nehmen Sie sich die Zeit, um zu bestimmen, ob es [für Ihre eigene Website geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Dienst für unsere Datenbank nutzen könnten, werden wir einfach die standardmäßige SQLite-Datenbank verwenden, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie durch das Setzen von Umgebungsvariablen über die Bash-Konsole für die Produktion konfiguriert werden.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur [Plans and Pricing-PythonAnywhere](https://www.pythonanywhere.com/pricing/) Seite und klicken Sie auf die Schaltfläche **Erstellen Sie ein Anfänger-Konto**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie **Registrieren**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Jetzt werden wir ein Bash-Prompt öffnen, eine virtuelle Umgebung einrichten und den Quellcode der Bibliothek von GitHub abrufen.
Wir werden auch die Standard-Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Konsolenmanagement-Bildschirm, indem Sie in der oberen Anwendungsleiste **Konsolen** auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirmansicht des Konsolenverwaltung bei PythonAnywhere](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole zur späteren Wiederverwendung zusammen mit ihrem gesamten Verlauf gespeichert wird.
   Der grüne Pfeil zeigt, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 Virtual-Umgebung namens "env_local_library" zu erstellen, in der die Abhängigkeiten der lokalen Bibliothek installiert werden.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau die gleiche Vorgehensweise wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) beschrieben.
   Wir hätten die Umgebung beliebig benennen können und sie mit den untenstehenden Befehlen deaktivieren und wieder aktivieren können:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` benennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die Bibliotheksquelle in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten über die `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [Eine Postgres-Datenbank bereitstellen und verbinden](#eine_postgres-sql-datenbank_bereitstellen_und_verbinden) und diese durch Setzen der `DATABASE_URL`-Umgebungsvariable verbinden.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank zu verwenden ist, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#bereitstellung_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Seite zuzugreifen (wie im Abschnitt [Django Adminseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) erläutert):

   ```bash
   python manage.py createsuperuser
   ```

   Merken Sie sich die Details, da Sie sie benötigen, um Ihre Seite zu testen.

### Web-App einrichten

Nachdem wir die Quellcodes der lokalen Bibliothek erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie diese zu finden sind und wie sie als Web-App verwendet werden können.

1. Navigieren Sie zum Bereich _Web_ der Website und wählen Sie den **Neue Webapp hinzufügen**-Link:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_-Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Weiter**, um den Schritt zur Konfiguration des Domänennamens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domäne basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zur Festlegung des Domänennamens der neuen Webanwendung](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manuelle Konfiguration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des Webframeworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert ist.
   Im Moment spielt das keine große Rolle, wäre es jedoch, wenn wir mehrere Seiten hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Select a Python version_ die Option **3.10**

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemein sollten Sie die neueste von Ihrer Version von Django unterstützte Python-Version auswählen.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ die Option **Weiter** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Eingabeaufforderung zum Erklären der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Webbereich wie gezeigt angezeigt.
   Der Bildschirm hat eine **Neu laden**-Schaltfläche, die Sie verwenden können, um die Webanwendung neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** klicken, um die Seite weitere drei Monate (und fortlaufend) am Leben zu erhalten.

   ![Konfigurierte Web-App bei PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie im "Code"-Bereich der Registerkarte _Web_ nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![WSGI-Datei bei PythonAnywhere im Web-Tab, Codebereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen), und wählen Sie dann die Schaltfläche **Speichern**.

   ```python
   import os
   import sys

   path = '/home/hamishwillee/hamishwillee.pythonanywhere.com'
   if path not in sys.path:
       sys.path.append(path)

   os.environ['DJANGO_SETTINGS_MODULE'] = 'locallibrary.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden.
   PythonAnywhere erwartet, dass sich diese Datei an diesem Standort befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im "Virtualenv"-Bereich des _Web_-Tabs nach unten.
   Wählen Sie den Link **Pfad zu einem virtuellen Environment eingeben, falls gewünscht** und geben Sie den Pfad der vorherigen virtuellen Umgebung ein.
   Wenn Sie es "env_local_library" wie vorgeschlagen benannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![Virtual env-Bereich im Web-Reiter bei PythonAnywhere](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im "Static files"-Bereich des _Web_-Tabs nach unten.

   ![Statische Dateien-Sektion im Web-Reiter bei PythonAnywhere](python_anywhere_web_static_files.png)

   Wählen Sie den **URL eingeben**-Link und geben Sie `\static_files\` ein.
   Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie im oberen Bereich des _Web_-Tabs die Schaltfläche **Neu laden**, um die Seite neu zu starten.
   Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![Web-Bildschirm bei PythonAnywhere mit Highlight des Links zur Site-Start](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungspfad eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist beim Einrichten sehr nützlich, aber ein Sicherheitsrisiko auf einer live Website.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Protokollierungsebene auf der live Website über [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übergeben Sie sie an Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen in den Hauptzweig gepusht, können Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Neustart**-Schaltfläche auf der `Web`-Registerkarte, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Seite aktualisieren, sollte sie jetzt geöffnet werden und die Startseite der Seite anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto einloggen und Autoren, Genres, Bücher usw. genau wie auf Ihrem lokalen Computer erstellen können.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt über [Ihre Website zur Veröffentlichung bereitmachen](#ihre_website_für_die_veröffentlichung_vorbereiten) haben wir die Anwendung verändert, sodass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Wir haben die Bibliothek speziell so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um die für den Benutzer angezeigte Debug-Spur zu reduzieren, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY`, um einen geheimen Wert in der Produktion zu setzen.
- `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet (wir verwenden dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen sie aus einer Umgebungsdatei gelesen werden.
Das ist bereits eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein Bash-Prompt bei PythonAnywhere.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben.
   Um zum Beispiel `DJANGO_DEBUG` auf `False` im Bash-Konsolenfenster zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Eintrag zu öffnen, der nicht existiert (zum Beispiel: erstellen Sie ein Genre, dann erhöhen Sie die Nummer in der URL-Leiste, um einen Eintrag zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat kein völlig kostenloses Starter-Tier mehr.
> Wir haben diese Anleitungen behalten, da Railway einige großartige Funktionen bietet und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie sich nicht darum kümmern müssen.
  Sich nicht um Server, Lastenausgleich, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway legt [großen Wert auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und umfassend.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Nehmen Sie sich die Zeit, um zu bestimmen, ob Railway für [Ihre eigene Website geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die für Ihre Seite erforderlichen Python-Abhängigkeiten auf, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden sollen, um die Webanwendung zu starten.
  Für Django ist dies normalerweise der Gunicorn-Webanwendungs-Server (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellt werden.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/cli)-Werkzeug.
Das CLI erlaubt Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig auf die live Seite hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokal projektiertes Projekt mit denselben Umgebungsvariablen wie das live Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, eine Datenbank-Add-on integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben.
Nachdem wir all dies getan haben, können wir ein Railway-Konto einrichten, den Railway-Client abrufen und unsere Website installieren.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Aktualisieren der App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, da ansonsten fast alles bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Workflows, die wir bereits gelernt haben, zu verwenden.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Er listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Seite zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Stammverzeichnis Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:`-Präfix teilt Railway mit, dass es sich um einen Webprozess handelt, der HTTP-Verkehr empfangen kann.
Wir führen dann den Django-Migrationsbefehl `python manage.py migrate` aus, um die Datenbanktabellen einzurichten.
Anschließend führen wir den Django-Befehl `python manage.py collectstatic` aus, um statische Dateien im `STATIC_ROOT`-Projekteinstellung definierten Verzeichnis zu sammeln (siehe den Abschnitt [Bereitstellung statischer Dateien in der Produktion](#bereitstellung_von_statischen_dateien_in_der_produktion) unten).
Zuletzt starten wir den _gunicorn_-Prozess, einen beliebten Webapplikations-Server, und übergeben ihm die Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Projektskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ enthält und die Bereitstellung statischer Dateien unterstützt!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben vor der Veröffentlichung auszuführen.

#### Laufzeit

Die **runtime.txt**-Datei, falls definiert, informiert Railway darüber, welche Version von Python verwendet werden soll.
Erstellen Sie die Datei im Stammverzeichnis des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Minorversion.
> Sie verwenden im Allgemeinen die unterstützte Version, die dem von Ihnen angegebenen Wert am nächsten kommt.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie zunächst die Seite erneut lokal und stellen Sie sicher, dass sie nicht durch die oben genannten Änderungen unterbrochen wurde.
Führen Sie den Entwicklungs-Webserver wie gewohnt aus und prüfen Sie dann, ob die Seite in Ihrem Browser immer noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns nun die `push`-Änderungen an GitHub durchführen.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und verbinden Sie dann die PR auf GitHub.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um Railway nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Sie müssen möglicherweise dann zu Ihrem E-Mail-Postfach gehen und Ihr Konto bestätigen.
- Sie werden dann im Railway.com-Dashboard angemeldet: <https://railway.com/dashboard>.

### Bereitstellen aus GitHub auf Railway

Als Nächstes richten wir Railway so ein, dass es unsere Bibliothek aus GitHub bereitstellt.
Wählen Sie zunächst die Option **Dashboard** aus dem oberen Menü der Website und dann die Schaltfläche **Neues Projekt**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway wird Ihnen eine Liste von Optionen für das neue Projekt anzeigen, einschließlich der Option, ein Projekt aus einer Vorlage, die zuerst in Ihrem GitHub-Konto erstellt wurde, bereitstellen zu können, und einer Anzahl an Datenbanken.
Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den von Ihnen mit Railway geteilten GitHub-Repos werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm - auswählen eines existierenden GitHub-Repositorys oder erstellen eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** wählen.

![Bestätigungsbildschirm - bereitstellen auswählen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen, wobei der Fortschritt auf der Registerkarte Bereitstellungen angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, wird Ihnen ein Screen wie der unten angezeigt.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL klicken (oben hervorgehoben), um die Seite in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht vollständig ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungspfad eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist beim Einrichten sehr nützlich, aber ein Sicherheitsrisiko auf einer live Website.
> Wir werden Ihnen zeigen, wie Sie es deaktivieren, sobald die Seite eingerichtet und verfügbar ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übergeben Sie sie an Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Eine Postgres-SQL-Datenbank bereitstellen und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden.
(Falls Sie die Seite jetzt öffnen, erhalten Sie einen neuen Fehler, da nicht auf die Datenbank zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen könnten.

Wählen Sie auf Railway aus dem oberen Menü der Website die Option **Dashboard** und wählen Sie dann Ihr Anwendungsprojekt.
Ihr Projekt enthält zu diesem Zeitpunkt nur einen Service für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Services festzulegen).
Mit der Schaltfläche **Einstellungen** können projektweite Einstellungen geändert werden.
Wählen Sie die Schaltfläche **Neu**, mit der Sie Services zum Projekt hinzufügen.

![Railway-Projekt mit hervorgehobener neuer Service-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie über die Art des hinzuzufügenden Services aufgefordert werden:

![Railway-Projekt - Datenbank als neuen Service wählen](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen** aus, um die Datenbank hinzuzufügen

![Railway-Projekt - Postgres als neuen Service wählen](railway_project_add_database_select_type.png)

Railway wird dann einen Service mit einer leeren Datenbank im gleichen Projekt bereitstellen.
Nach dem Abschluss werden Sie nun die Services für die Anwendung und die Datenbank im Projektansicht sehen.

![Railway-Projekt mit Anwendung und Postgres-Datenbankservice](railway_project_two_services.png)

Wählen Sie den Webservice aus, dann die Registerkarte _Variables_.
Wählen Sie **Neue Variable** und dann im _Variable name_-Feld **Referenz hinzufügen**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir für die lokale Bibliothek so eingerichtet haben, dass sie als Umgebungsvariable gelesen wird).

![Railway-Website-Bildschirm - Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablenreferenz hinzuzufügen, und schließlich **Bereitstellen** (dies erscheint in einem Popup).
Sie könnten auch die Dienst-Postgres-Datenbank öffnen, dann ihre Variable-Registerkarte und die Variable kopieren.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer tun.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie die [Anleitungen hier](https://docs.railway.com/cli) befolgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigeren Vorgänge umfassen das Bereitstellen des aktuellen Verzeichnisses auf Ihrem Computer in ein zugeordnetes Railway-Projekt (ohne sie in GitHub hochzuladen) und das Ausführen Ihres Django-Projekts lokal unter den gleichen Einstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie die folgende in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser einzurichten, müssen wir den Django-Befehl `createsuperuser` für die Produktions-Datenbank aufrufen (dies ist derselbe Vorgang, den wir lokal im Abschnitt [Django Tutorial Teil 4: Django Adminseite > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminal-Zugriff auf den Server, und wir können diesen Befehl nicht in das [Procfile](#procfile) einfügen, da er interaktiv ist.

Stattdessen können wir diesen Befehl lokal in unserem Django-Projekt ausführen, während wir mit der _Produktions_-Datenbank verbunden sind.
Der Railway-Client erleichtert dies, indem er einen Mechanismus bereitstellt, um Befehle lokal unter Verwendung derselben Umgebungsvariablen aus der Produktionsumgebung auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Clone Ihres locallibrary-Projekts.
Dann melden Sie sich in Ihrem Browserkonto mit dem `login` oder `login --browserless`-Befehl an (folgen Sie allen daraus resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugeordneten Railway-Projekt, indem Sie den folgenden Befehl verwenden.
Beachten Sie, dass Sie möglicherweise ein bestimmtes Projekt auswählen/eingeben müssen, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Nun, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie Ihr lokales Django-Projekt mit Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie Namen, E-Mail und Passwort nach Bedarf ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Admin-Bereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, so wie in [Django Tutorial Teil 4: Django Adminseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site).

### Konfigurationsvariable einstellen

Der letzte Schritt ist, die Seite sicher zu machen.
Insbesondere müssen wir die Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen einzulesen, wurde in [Ihre Website zur Veröffentlichung bereitmachen](#ihre_website_für_die_veröffentlichung_vorbereiten) durchgeführt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm des Projekts und wählen Sie die Registerkarte _Variablen_.
Dieser sollte bereits die `DATABASE_URL` wie unten gezeigt enthalten.

![Railway - Bild wird alle Projektvariablen zeigen]railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren.
Eine einfache Möglichkeit wäre, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **Neue Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann auswählen **Hinzufügen**).
Dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` eingeben.
Der endgültige Satz an Variablen sollte so aussehen:

![Railway Ansicht, die alle Projektvariablen anzeigt]railway_variables_all.png)

### Debugging

Der Railway-Client bietet den Befehl log, um das Ende von Protokollen anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen als dies benötigen, müssen Sie beginnen, sich in [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) einzuarbeiten.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion, und auch das Ende der Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, dass Sie diese hilfreich fanden. Eine vollständig durchgearbeitete Version des [Quellcodes in GitHub finden Sie hier](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [So etwa mit WSGI bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [So verwenden Sie Django mit Apache und mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [So verwenden Sie Django mit Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [So bedienen Sie Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)
  - [Django-Anwendungen für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Anfangen mit Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [So funktioniert Heroku](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
