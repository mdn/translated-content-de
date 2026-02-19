---
title: "Django Tutorial Teil 11: Deployment von Django in der Produktion"
short-title: "11: Deployment"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet. Nun ist es an der Zeit, diese auf einem Webserver zu installieren, sodass sie über das Internet öffentlich zugänglich ist. Diese Seite beschreibt, wie Sie ein Django-Projekt hosten und was Sie vorbereiten müssen, um Ihre Seite für den Produktiveinsatz bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Themen des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "fertig genug", um öffentlich getestet zu werden), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Seite an den lokalen Browser oder das Netzwerk zu übertragen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debug-Informationen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine produktionsreife Infrastruktur zum Ausliefern Ihrer Website einrichten.

Dieses Tutorial bietet einige Orientierungshilfen zu Ihren Optionen für die Wahl eines Hosting-Dienstes, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Django-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die von dem Servercomputer bereitgestellte Umgebung, in der Sie Ihre Website extern bereitstellen. Die Umgebung umfasst:

- Computer-Hardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Laufzeit für Programmiersprachen und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Applikationsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung können Sie auch einen Reverse Proxy, Lastenausgleich und so weiter haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was dies tatsächlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel eine garantierte Menge an Computerressourcen (CPU, RAM, Speicherplatz usw.) und Internetverbindung für einen bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer- und Netzwerkinfrastruktur wird als _Infrastruktur als Dienst (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem dann die anderen Komponenten Ihrer Produktionsumgebung installiert werden müssen. Andere Anbieter erlauben es Ihnen, vollständiger ausgestattete Umgebungen auszuwählen, möglicherweise einschließlich einer vollständigen Django- und Webserver-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erheblich vereinfachen, indem sie die Konfiguration reduzieren. Allerdings könnten die verfügbaren Optionen Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten bekommen und beim Upgrade von Teilen des Systems wissen, wo Sie beginnen müssen!

Andere Hosting-Anbieter unterstützen Django als Teil eines Plattform als Dienst (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleich) kümmern, da die Hosting-Plattform diese Aufgaben für Sie übernimmt — zusammen mit dem, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht den Deployment-Prozess sehr einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte Serverinfrastruktur.

Manche Entwickler werden die größere Flexibilität von IaaS gegenüber PaaS bevorzugen, während andere den reduzierten Wartungsaufwand und die leichtere Skalierbarkeit von PaaS schätzen werden. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und das ist auch, was wir in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Python/Django unterstützt, sollte er Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy und so weiter bereitstellen (das ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Wahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, Django entweder aktiv zu unterstützen oder gut mit Django zu funktionieren, einschließlich: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Stufen von Computer- und Netzwerkräumen zu unterschiedlichen Preisen an.

Einige der Dinge, die Sie bei der Wahl eines Hosts beachten sollten:

- Wie viel Verkehr Ihre Seite voraussichtlich haben wird und die Kosten für Daten- und Rechnerressourcen, die erforderlich sind, um diesen Bedarf zu decken.
- Unterstützungsniveau für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Aufrüsten auf leistungsfähigere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und wo der Zugang wahrscheinlich am schnellsten ist.
- Historische Verfügbarkeit und Ausfallleistung des Hosts.
- Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen an oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft, und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass Sie von vornherein besser einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht beim Einstieg ist, dass es einige Seiten gibt, die "kostenlose" Computerumgebungen anbieten, die für Bewertung und Testzwecke gedacht sind. Diese sind in der Regel recht ressourcenbeschränkt/limitiert, und Sie müssen sich darüber im Klaren sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und bieten eine einfache Migration zur Zahlung für mehr Ressourcen, wenn Ihre Website mehr Traffic erhält. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Stufen von Rechnerleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Kriterium bei der Auswahl ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit das wichtigste Kriterium ist.

## Bereitmachen Ihrer Website für die Veröffentlichung

Die [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den Werkzeugen _django-admin_ und _manage.py_ erstellt wurde, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten in der Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder umweltabhängige Einstellungen aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Diese Einstellung sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dies verhindert die Anzeige vertraulicher Debug-Informationen und Variablen.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der für CSRF-Schutz und andere verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode enthalten oder von außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumentation schlägt vor, geheime Informationen am besten aus einer Umgebungsvariable zu laden oder aus einer Datei zu lesen, die nur auf dem Server verfügbar ist. Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, falls sie definiert sind, und auf Werte in einer **.env**-Datei im Root-Verzeichnis zurückgreifen, und letztendlich die Standardwerte in der Konfigurationsdatei verwenden. Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek, um Schlüssel-Wert-Paare aus einer Datei zu lesen und sie als Umgebungsvariablen zu verwenden, aber nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR`, aber vor der Sicherheitswarnung ein: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, sofern definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse!_
> Sie müssen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit es nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "aufgedeckt" wird, da Sie ihn in der Produktion nicht verwenden werden).

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

Der Wert von `DEBUG` wird standardmäßig `True` sein, aber nur `False`, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Bitte beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Daher müssen wir Zeichenketten vergleichen. Der einzige Weg, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable auf "False" unter Linux durch Eingabe des folgenden Befehls setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie im [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Einstellungen mit dem folgenden Terminal-Befehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig für die Bereitstellung von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht brauchen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites. Leider kann sie bei einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keinen dauerhaften Datenspeicher in der Anwendungsumgebung bieten (eine Anforderung von SQLite). Obwohl dies uns möglicherweise bei den Beispiel-Bereitstellungen nicht betrifft, werden wir Ihnen einen anderen Ansatz zeigen, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine als Umgebungsvariable übergebene Adresse zugegriffen wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbankdienst verwenden, den Sie möchten.

Die Datenbankverbindungsinformationen werden an Django über eine Umgebungsvariable namens `DATABASE_URL` übergeben. Anstatt diese Informationen fest in Django einzucodieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die Umgebungsvariable `DATABASE_URL` zu parsen und sie automatisch in das von Django gewünschte Konfigurationsformat umzuwandeln. Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für die Einrichtung auf dem Bereitstellungsserver wird:

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

Django wird nun die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig auf Postgres umschalten und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellung von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen durch Django gehen müssen, obwohl Django nichts damit macht. Während dies während der Entwicklung keine Rolle spielt, hätte es bedeutende Leistungsauswirkungen, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content-Delivery-Network (CDN) zu liefern.

Die wichtigen Einstellungvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem statische Dateien bereitgestellt werden, z.B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_-Tool alle in unseren Vorlagen referenzierten statischen Dateien sammeln wird. Nachdem sie gesammelt wurden, können diese dann als Gruppe hochgeladen werden, um die Dateien dorthin zu laden, wo sie gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool beim Suchen nach statischen Dateien durchsuchen soll.

Django-Vorlagen verweisen auf Standorte statischer Dateien relativ zu einem `static`-Tag (Sie sehen dies in der in [Django Tutorial Teil 5: Erstellung unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definierten Basisvorlage), das seinerseits auf die `STATIC_URL`-Einstellung verweist. Statische Dateien können daher auf einen beliebigen Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie über diese Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, und alle statischen Dateien in der Anwendung an den von `STATIC_ROOT` angegebenen Ort kopieren. `Whitenoise` findet dann die Dateien von dem durch `STATIC_ROOT` (standardmäßig) definierten Ort und bedient sie unter der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert worden sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert worden sein, als sie erstellt wurde. Während es keinen Schaden anrichtet, könnten Sie den vorherigen Verweis auch löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Dateidienste tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

Informieren Sie sich in der Dokumentation [WhiteNoise](https://pypi.org/project/whitenoise/), um zu erfahren, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode ist, um diese Dateien bereitzustellen.

Die Schritte zur Einrichtung von _WhiteNoise_ für die Verwendung mit dem Projekt sind [hier beschrieben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` nahe am Anfang der Liste hinzu, gleich unterhalb von `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bedient werden (dies ist effizienter). Fügen Sie einfach Folgendes an das Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts anderes tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositorys gespeichert werden. Viele Hosting-Dienste installieren automatisch Abhängigkeiten aus dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie den folgenden Befehl im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei zumindest diese Punkte auflisten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht unten angegeben sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Sie Ihr Anwendungsrepository auf GitHub

Viele Hosting-Dienste bieten die Möglichkeit, Projekte aus einem lokalen Repository oder von cloudbasierten Source-Code-Verwaltungsplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten bereits GitHub verwenden, um den Local Library-Quellcode zu speichern (dies wurde in [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) beim Einrichten Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, möglicherweise für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sind, andere möglicherweise nicht. Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen in dem `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hosten können.

### Warum PythonAnywhere wählen?

Wir entscheiden uns für PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der wirklich kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migriert, als die bisher kostenlosen Pläne eingestellt wurden. Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieses Angebot wahrscheinlich kostenlos bleiben wird. Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, leichter zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie sich nicht darum kümmern müssen. Da Sie sich nicht um Server, Lastenausgleich, Reverse-Proxys und so weiter kümmern müssen, ist der Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen die Verwendung von PythonAnywhere für das Tutorial nicht wesentlich. Zum Beispiel:
  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff von Ihren Apps, niedrige CPU/Bandbreite, keine Unterstützung für IPython/Jupyter-Notebooks, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz für unsere grundlegende Seite, um zu laufen!
  - Eigene Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung fährt herunter, wenn sie nicht verwendet wird, sodass sie möglicherweise langsam zu starten ist. Sie können sie jedoch für immer betreiben, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres. In dieser Demonstration werden wir einfach die standardmäßige Django SQLite-Datenbank verwenden.

PythonAnywhere eignet sich, um diese Demonstration zu hosten, und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, um zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um unser Local Library-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Im kostenlosen Plan gibt es keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die von Django im gehosteten Ubuntu-Umfeld erstellte standardmäßige SQLite-Datenbank (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie überblicken müssen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur Seite [Pläne und Preise von PythonAnywhere](https://www.pythonanywhere.com/pricing/) und klicken Sie auf die Schaltfläche **Beginner Account erstellen**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, akzeptieren Sie die Allgemeinen Geschäftsbedingungen und klicken Sie dann auf **Registrieren**.
- Sie werden dann eingeloggt und zum Dashboard von PythonAnywhere weitergeleitet: `https://www.pythonanywhere.com/user/<Ihr_Benutzername>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen uns den Local Library-Quellcode von GitHub. Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, damit diese von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bildschirm Konsolenverwaltung, indem Sie im oberen Anwendungsmenü **Consoles** auswählen.
2. Wählen Sie dann den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm der Konsolenverwaltung von PythonAnywhere mit einem Pfeil, der das Öffnen einer neuen Bash-Konsole anzeigt](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für Ihre spätere Verwendung zusammen mit ihrer gesamten Historie gespeichert wird. Der grüne Pfeil oben zeigt an, dass sich in diesem Konto eine Konsole befindet, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" zur Installation der Lokalbibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Vorgang, wie er in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wurde. Wir hätten die Umgebung beliebig benennen können, und wir können sie mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrer Site-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto nutzen, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (wenn Ihr Benutzername z.B. "Odtsetseg" ist, müssen Sie die Local Library-Quelle in einen Ordner mit dem Namen `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in den entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellen_und_verbinden_einer_postgres_sql-datenbank), und durch Setzen der Umgebungsvariable `DATABASE_URL` darauf zugreifen. Wichtig ist, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien in einen Speicherort, an dem sie [in der Produktion bereitgestellt werden](#bereitstellung_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Seite (wie im Abschnitt [Django-Administrationsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie diese benötigen, um Ihre Website zu testen.

### Einrichten der Web-App

Nachdem Sie die Local Library-Quellen abgerufen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie findet und als Web-App nutzt.

1. Navigieren Sie zum Abschnitt _Web_ der Website und wählen Sie den Link **Add a new web app**:

   ![Der "Web"-Abschnitt von PythonAnywhere mit der Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard öffnet sich dann, um Sie durch die Konfiguration der Hauptmerkmale der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domain-Namens der Web-App zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![Eingabeaufforderung von PythonAnywhere zur Festlegung des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![Eingabeaufforderung von PythonAnywhere zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns die vollständige Kontrolle über die Konfiguration der Umgebung. Dies ist jetzt nicht so wichtig, aber es wäre es, wenn wir mehrere Seiten hosten würden, möglicherweise mit unterschiedlichen Python- und/oder Django-Versionen.

4. Wählen Sie im Bildschirm _Select a Python version_ **3.10**

   ![Eingabeaufforderung von PythonAnywhere zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python wählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![Eingabeaufforderung von PythonAnywhere, die nächste Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und als Web-Abschnitt angezeigt, wie gezeigt. Der Bildschirm hat eine Schaltfläche **Reload**, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können. Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Run until 3 months from today** klicken, um die Seite für weitere drei Monate am Leben zu erhalten (und fortlaufend).

   ![Konfigurierte Web-App von PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie bis zum Abschnitt "Code" des _Web_ Tabs und wählen Sie den Link zur WSGI-Konfigurationsdatei. Diese wird einen Namen in Form von `/var/www/<user_name>_pythonanywhere_com_wsgi.py` haben.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Bereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die Local Library-Anwendung zu finden. PythonAnywhere erwartet diese Datei an diesem Ort, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie bis zum Abschnitt "Virtualenv" des _Web_ Tabs. Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der zuvor erstellten virtuellen Umgebung ein. Wenn Sie ihn wie vorgeschlagen "env_local_library" genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtuelle Umgebung Abschnitt des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie bis zum Abschnitt "Static files" des _Web_ Tabs.

   ![PythonAnywhere Abschnitt für statische Dateien des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_ Tab die Schaltfläche **Reload**, um die Seite neu zu starten. Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Webbildschirm mit dem Link, um die Seite zu starten, hervorgehoben](python_anywhere_web_open_site.png)

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Sicherheitsfehler von Django, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie die Einrichtung vornehmen, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Seite dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Art der Protokollierung auf der Live-Seite mithilfe von [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren. Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen im Main-Branch gepusht, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die Schaltfläche **Restart** auf dem `Web` Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen können, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitmachen Ihrer Website für die Veröffentlichung](#bereitmachen_ihrer_website_für_die_veröffentlichung) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen aus einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie:

- `DJANGO_DEBUG=False` einstellen können, um das Debug-Tracing zu reduzieren, das dem Benutzer bei einem Fehler angezeigt wird.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion setzen können.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (in diesem Beispiel tun wir es nicht).

Die Methode, mit der Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab. Bei PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen. Wir sind bereits dafür eingerichtet, sodass wir nur die Datei erstellen müssen.

Die Schritte sind:

1. Öffnen Sie einen PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben. Zum Beispiel, um `DJANGO_DEBUG` auf `False` im Bash-Konsolenfenster zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (z.B. erstellen Sie ein Genre, erhöhen Sie dann die Zahl in der Adressleiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariablen geladen wurden, erhalten Sie eine "Nicht gefunden" Nachricht anstelle einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway bietet keinen vollständig kostenlosen Starter-Tarif mehr an. Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und eine bessere Option für einige Benutzer sein kann.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie sich nicht darum kümmern müssen. Da Sie sich nicht um Server, Lastenausgleich, Reverse-Proxys und so weiter kümmern müssen, ist der Einstieg viel einfacher.
- Railway legt Wert auf die [Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und einfacheren Lernkurve führt als bei vielen anderen Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Damit Ihre Anwendung ausgeführt werden kann, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und zu verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in mehreren Textdateien an:

- **runtime.txt**: beschreibt die zu verwendende Programmiersprache und Version.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Seite erforderlich sind, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die zum Starten der Webanwendung ausgeführt werden sollen. Für Django ist dies in der Regel der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Script).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellt werden. Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse über die Variable `DATABASE_URL` abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tool. Mit dem CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository von dem lokalen Branch auf die Live-Seite hochladen, die Protokolle des laufenden Prozesses anzeigen, Konfigurationsvariablen setzen und abrufen und vieles mehr. Eine der nützlichsten Funktionen besteht darin, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, die Integration mit einem Datenbank-Add-On durchführen und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu behandeln. Sobald wir das alles gemacht haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles an Überblick, den Sie zum Start benötigen.

### Aktualisierung der App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen im Grunde genommen nur eine `Procfile` und `runtime.txt`-Datei erstellen, da beinahe alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Arbeitsabläufe zu verwenden, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung. Er listet die Befehle auf, die von Railway zum Starten Ihrer Seite ausgeführt werden.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Root Ihres GitHub-Repos und kopieren/einfügen Sie folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:`-Präfix gibt Railway an, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert wird (siehe den Abschnitt [Bereitstellung von statischen Dateien in der Produktion](#bereitstellung_von_statischen_dateien_in_der_produktion) unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ enthält und die Bereitstellung statischer Dateien unterstützt!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben vor dem Deployment der Veröffentlichung auszuführen.

#### Runtime

Die **runtime.txt**-Datei, sofern definiert, gibt Railway an, welche Python-Version zu verwenden ist. Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede kleinere Python-Version. Sie verwenden in der Regel die nächste unterstützte Version zu dem Wert, den Sie angeben.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Seite erneut lokal und stellen Sie sicher, dass sie durch keine der oben beschriebenen Änderungen beschädigt wurde. Führen Sie den Entwicklungs-Webserver wie gewohnt aus und überprüfen Sie, ob die Seite in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als nächstes lassen Sie uns die Änderungen in GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann den PR auf GitHub.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitstellen.

### Erstellen Sie ein Railway-Konto

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie oben im Menü auf den **Login**-Link.
- Wählen Sie im Popup GitHub aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann in Ihr E-Mail-Postfach gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die Option **Dashboard** im oberen Menü der Website und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit der Schaltfläche für ein neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und mehreren Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Bildschirm der Railway-Website - Bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die Lokalbibliothek: `<user-name>/django-locallibrary-tutorial`.

![Screen der Railway-Website, der ein Dialogfeld zeigt, um ein vorhandenes GitHub-Repository auszuwählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Bereitstellung auswählen](railway_new_project_deploy_confirm.png)

Railway lädt und bereitstellt dann Ihr Projekt und zeigt den Fortschritt auf dem Tab Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway Webseite Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung nicht abgeschlossen ist).

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Sicherheitsfehler von Django, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Header](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie die Einrichtung vornehmen, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Seite dar. Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Seite läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Bereitstellen und Verbinden einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da auf die Datenbank nicht zugegriffen werden kann). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Wählen Sie bei Railway im oberen Menü der Website die Option **Dashboard** und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Mit der Schaltfläche **Settings** können projektweite Einstellungen geändert werden. Wählen Sie die Schaltfläche **New**, diese wird verwendet, um dem Projekt Dienste hinzuzufügen.

![Railway Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen

![Railway Projekt - Postgres als neuen Dienst auswählen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektübersicht.

![Railway Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den Tab _Variables_. Wählen Sie **New Variable** und dann im _Variable name_ Feld **Add reference**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit sie als Umgebungsvariable gelesen wird von locallibrary).

![Bildschirm der Railway-Website zur Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um den Variablenverweis hinzuzufügen und schließlich **Deploy** (diese Option wird in einem Popup angezeigt). Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann ihren Variablen-Tab und die Variable kopieren konnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Das werden wir mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer tun.

### Den Client installieren

Laden Sie den Railway Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Wenn der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Vorgänge umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem zugehörigen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver. Diese zeigen wir in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie die folgenden Befehle im Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl gegen die Produktionsdatenbank ausführen (dies ist derselbe Vorgang, den wir lokal in [Django Tutorial Teil 4: Django Adminbereich > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben). Railway bietet keinen direkten Terminalzugriff auf den Server und wir können diesen Befehl nicht dem [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal für unser Django-Projekt auszuführen, während es mit der _Produktionsdatenbank_ verbunden ist. Der Railway-Client macht dies einfach durch Bereitstellung eines Mechanismus zum Ausführen von Befehlen lokal mit denselben Umgebungsvariablen wie der Produktionsserver, einschließlich des Datenbankverbindungsstrings.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres Locallibrary-Projekts. Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` in Ihrem Browserkonto an (befolgen Sie alle daraus resultierenden Eingabeaufforderungen und Anweisungen vom Client oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles Locallibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl. Hinweis: Sie müssen ein bestimmtes Projekt auswählen/eingeben, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Sobald das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie Namen, E-Mail und Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Administrationsbereich Ihrer Website (`https://[Ihre-URL].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genau wie in [Django Tutorial Teil 4: Django Adminbereich](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Einstellungen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Seite sicher zu machen. Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit, die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Bereitmachen Ihrer Website für die Veröffentlichung](#bereitmachen_ihrer_website_für_die_veröffentlichung) geleistet (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Tab _Variables_. Dieser sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptographisch sicheren Schlüssel zu generieren. Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann klicken Sie auf **Add**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Die endgültige Variablensammlung sollte in etwa so aussehen:

![Railway Bildschirm, der alle Variablen des Projekts zeigt](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl logs an, um das Tail der Protokolle anzuzeigen (ein umfassenderes Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) auseinandersetzen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zum Setup von Django-Apps in der Produktion und auch der Serie von Tutorials zur Arbeit mit Django. Wir hoffen, Sie fanden sie nützlich. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) überprüfen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe zu absolvieren.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)
  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Bereitstellung mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Verwendung von Django mit Apache und mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Verwendung von Django mit Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)
  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte mit Heroku und Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Parallelität und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzwerte](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellung von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeit mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
