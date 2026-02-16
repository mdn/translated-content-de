---
title: "Django-Tutorial Teil 11: Bereitstellung von Django für die Produktion"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 5ea9b7a35cf3a540b52b88eae986b4e593ee726f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielswebsite mit Django erstellt und getestet. Nun ist es an der Zeit, sie auf einem Webserver zu installieren, sodass sie über das öffentliche Internet zugänglich ist. Diese Seite beschreibt, wie man ein Django-Projekt hostet und was Sie tun müssen, um Ihre Website für eine Produktionsbereitstellung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Absolvieren Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wo und wie Sie eine Django-App in die Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertig ist (oder soweit fertig ist, dass öffentliche Tests beginnen können), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver genutzt, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug- und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine Produktionsinfrastruktur einrichten, um Ihre Website bereitzustellen.

Dieses Tutorial bietet einige Leitlinien zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver übergibt.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie außerdem einen Reverse-Proxy, einen Lastverteiler usw. haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet üblicherweise ein garantiertes Niveau an Computerressourcen (CPU, RAM, Speichermedien usw.) und Internetverbindung für einen bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten die Möglichkeit, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, umfassendere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Konfiguration enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Ahnung, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) kümmern, da die Hostplattform dies für Sie übernimmt – zusammen mit dem meiste, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität bevorzugen, die IaaS gegenüber PaaS bietet, während andere den geringeren Wartungsaufwand und die einfachere Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen des Webservers, Anwendungsservers, Reverse-Proxys usw. bieten. (dies trifft nicht zu, wenn Sie ein PaaS wählen). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekanntermaßen entweder aktiv Django unterstützen oder gut mit Django funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Überlegungen bei der Auswahl eines Hosts:

- Wie ausgelastet Ihre Website wahrscheinlich sein wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu erfüllen.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die Kosten hierfür.
- Wo der Anbieter Rechenzentren hat und folglich, wo der Zugang wahrscheinlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallleistung des Hosts.
- Tools zum Verwalten der Website – sind sie einfach zu verwenden und sind sie sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisstufen nur eine bestimmte Anzahl von „Live-Zeit“-Stunden oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, mit der Zeit ausläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser bedient worden wären, einen anderen Service zu nutzen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es ziemlich viele Websites gibt, die „kostenlose“ Computerumgebungen für Evaluierungs- und Testzwecke bieten.
Diese sind in der Regel recht ressourcenschonend/beschränkt und Sie müssen darauf achten, dass sie nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben können.
Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Verkehr in einer gehosteten Umgebung und können bei zunehmendem Website-Traffic einen einfachen Wechsel zur Bezahlung für mehr Ressourcen ermöglichen.
Beliebte Entscheidungen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine „Standard“-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Niveaus an Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Standard-Computing-Stufe (im Bereich von 5 bis 10 US-Dollar pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Faktor ist.

## Machen Sie Ihre Website bereit zur Veröffentlichung

Die mit Hilfe der Tools _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist darauf ausgelegt, die Entwicklung zu erleichtern. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion entweder aus Sicherheits- oder Leistungsgründen anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository zugänglich ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`: Dies sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`: Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer serverseitigen Datei gelesen werden sollten.
Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, zurückfallen auf Werte, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und zuletzt die Standardwerte in der Konfigurationsdatei verwenden.
Dies ist sehr flexibel, da es jede Konfiguration ermöglicht, die der Hosting-Server unterstützt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zur Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code hinzu, nachdem `BASE_DIR` definiert wurde, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung.
Die in der Datei als `KEY=VALUE` definierten Variablen werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, wenn definiert.

> [!NOTE]
> Alle Werte, die Sie der **.env** hinzufügen, sind wahrscheinlich _geheim_!
> Sie dürfen sie nicht auf GitHub speichern und sollten **.env** zu Ihrer **.gitignore**-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie anschließend die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „leakt“, da Sie ihn in der Produktion nicht verwenden).

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

Der Wert der `DEBUG` wird standardmäßig `True` sein, sie wird jedoch nur `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariablen auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt wird.
Bitte beachten Sie, dass Umgebungsvariablen Strings und keine Python-Typen sind. Daher müssen wir Strings vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf „False“ setzen, indem Sie den folgenden Befehl eingeben:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie in der [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Eine Anzahl dieser Einstellungen können Sie auch mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es ein Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie zur Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie auf einigen beliebten Hosting-Diensten, wie Heroku, nicht verwendet werden, da sie keinen persistente Datenspeicherung im Anwendungsumfeld bereitstellen (eine Anforderung von SQLite).
Auch wenn uns das bei diesem Beispieldeployment nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und über eine vom Django-Anwendungs-Library übergebene Adresse aufgerufen wird.
In diesem Fall verwenden wir eine auf Railway gehostete Postgres-Datenbank, aber Sie könnten jeden beliebigen Datenbankhost-Service verwenden.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt.
Anstatt diese Informationen in Django hart zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die Umgebungsvariable `DATABASE_URL` zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu arbeiten.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es ein Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver einzurichten sind:

```bash
pip3 install dj-database-url
```

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei:

```python
# Update database configuration from $DATABASE_URL environment variable (if defined)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django wird nun die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` sorgt dafür, dass die Verbindung persistent bleibt, was viel effizienter ist, als die Verbindung bei jedem Anfragezyklus neu zu erstellen (dies ist optional und kann nach Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt nun Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber funktionierte nicht auf Railway!
  Versuchen Sie, es in der nächsten Version zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es ein Teil unserer [Anforderungen](#anforderungen) wird, die Railway auf dem entfernten Server einrichten soll:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung festlegen (Railway erleichtert es, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML-Dateien als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, da die Anfragen Django durchlaufen müssen, obwohl Django nichts mit ihnen macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir normalerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Grund-URL-Standort, von dem aus die statischen Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_-Tool alle in unseren Templates referenzierten statischen Dateien sammelt. Nach dem Sammeln können diese dann als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_-Tool von Django nach statischen Dateien durchsuchen soll.

Django-Templates verweisen relativ zu einem `static`-Tag auf statische Dateistandorte (Sie können dies im Basistemplate sehen, das in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL`-Einstellung verweist.
Statische Dateien können daher auf jedem Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in das im Projekt als `STATIC_ROOT` definierte Verzeichnis zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden und dabei alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` angegebenen Speicherort kopieren.
`Whitenoise` findet dann die Dateien vom standardmäßig definierten Speicherort `STATIC_ROOT` und dient ihnen an der in `STATIC_URL` definierten Basis-URL.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` wurde möglicherweise bereits in der Datei definiert, als sie erstellt wurde. Während es keinen Schaden anrichtet, könnten Sie den doppelten vorherigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Dateibereitstellung tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden, um statische Assets direkt aus Gunicorn in der Produktion bereitzustellen.

Überprüfen Sie die [WhiteNoise](https://pypi.org/project/whitenoise/)-Dokumentation für eine Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier beschrieben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren Sie whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware`-Element nahe dem Anfang der Liste, direkt unter dem `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen reduzieren (dies ist effizienter).
Fügen Sie einfach Folgendes am Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts weiter tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ auf der Kommandozeile erstellen (führen Sie das folgende Kommando im Stammverzeichnis des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten verschiedenen Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ die folgenden Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die unten nicht aufgelistet sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hostingdienst (oder für die Entwicklung) sein könnten, andere vielleicht nicht.
Angenommen, Sie haben bereits alle bisher gemachten Änderungen im `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie das _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet werden kann.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen für die Verwendung von PythonAnywhere:

- PythonAnywhere verfügt über einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und nun PythonAnywhere gehostet, wobei wir migrierten, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben PythonAnywhere ausgewählt, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben auch das Railway-Beispiel beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank zu demonstrieren, die auf einem anderen Dienst läuft.

- PythonAnywhere kümmert sich um die Infrastruktur, so dass Sie es nicht müssen.
  Nicht über Server, Lastverteiler, Reverse-Proxys usw. nachdenken zu müssen, macht es viel einfacher, den Einstieg zu finden.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Plan-Einschränkungen beeinträchtigen uns nicht besonders bei der Nutzung von PythonAnywhere für das Tutorial.
  Zum Beispiel:
  - Der Anfängerplan erlaubt eine Webanwendung unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff von Ihren Apps, niedrigen CPU-/Bandbreitenverbrauch, keine Unterstützung für IPython/Jupyter-Notebooks, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere grundlegende Seite läuft!
  - Eigene Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass es beim Neustart langsam sein kann.
    Sie können es für immer betreiben, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt freie Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration werden wir einfach die von Django erstellte Standard-SQLite-Datenbank verwenden.

PythonAnywhere ist für die Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen, festzustellen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keinen separaten Postgres-Support.
Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, werden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank verwenden (es gibt mehr als genug Platz, um die Bibliotheksfunktionen zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles an Übersicht, die Sie brauchen, um loszulegen.

### Erhalten Sie ein PythonAnywhere-Konto

Um mit der Verwendung von PythonAnywhere zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/)-Seite und wählen Sie den **Create a Beginner account**-Button.
- Erstellen Sie ein Konto mit Ihrem Benutzername, Ihrer E-Mail und Ihrem Passwort, erkennen Sie die AGB an und klicken Sie dann auf **Register**.
- Dann werden Sie angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes eröffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub.
Wir werden auch die Standard-Datenbanken konfigurieren und statische Dateien sammeln, damit diese von PythonAnywhere bedient werden können.

1. Öffnen Sie zunächst den Konsolenverwaltungsbildschirm, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann den **Bash**-Link aus, um eine neue Konsole zu erstellen und zu starten:

   ![Image of PythonAnywhere Console management screen](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole mit all ihrer Historie für einen späteren Einsatz gespeichert wird.
   Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir öffnen könnten statt dieser.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" zu erstellen, um die lokalen Bibliotheksab dependencies zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Vorgang, wie er in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung anders nennen können, und wir können sie mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliothek Quellcodes von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrem Seiten-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername „Odtsetseg“ ist, müssen Sie den Quellcode der lokalen Bibliothek in einen Ordner mit dem Namen `odtsetseg.pythonanywhere.com` speichern).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheks-Quellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte mit Ihrem eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliothek-Abhängigkeiten mithilfe der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [Configure a Postgres database](#bereitstellen_und_verbinden_einer_postgres_sql-datenbank), und verbinden Sie es, indem Sie die `DATABASE_URL` Umgebungsvariable setzen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank zu verwenden ist, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bedient werden können](#statische_dateien_in_der_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die site (wie in [Django Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) Abschnitt behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Website zu testen.

### Richten Sie die Web-App ein

Nach dem Erhalt der LocalLibrary-Quellen und der Installation der Abhängigkeiten in einer virtuellen Umgebung müssen wir PythonAnywhere mitteilen, wie man sie findet und als Web-App verwendet.

1. Navigieren Sie zum _Web_-Abschnitt der Website und wählen Sie den **Add a new web app**-Link:

   ![PythonAnywhere "Web" section showing button for adding a new app](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard wird dann geöffnet, um Ihnen bei der Konfiguration der wichtigsten Eigenschaften der Web-App zu helfen.

2. Wählen Sie **Next**, um die Web-App-Domänennamenkonfiguration zu überspringen.
   Das kostenlose Konto wird die Domäne basierend auf Ihrem Benutzernamen erstellen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere prompt for setting the domain name of new web app](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere prompt for selecting web framework used for the application](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration erlaubt uns die vollständige Kontrolle über die Konfiguration der Umgebung.
   Das spielt jetzt keine große Rolle, aber es würde, wenn wir mehrere Sites hosten, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Select a Python version_ die Option **3.10** aus

   ![PythonAnywhere prompt for selecting Python version for Web application](python_anywhere_web_add_select_python_version.png)

   Allgemeiner gesagt sollten Sie die neueste Version von Python wählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ die Option **Next** (der Bildschirm erklärt nur einige der Optionen zur Konfiguration)

   ![PythonAnywhere prompt explaining next configuration options](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Abschnitt wie gezeigt angezeigt.
   Der Bildschirm hat einen **Reload**-Button, den Sie verwenden können, um die Webanwendung nach weiteren Änderungen neu zu laden.
   Wie auf dem Bildschirm angegeben, müssen Sie auf den **Run until 3 months from today**-Button klicken, um die Site für weitere drei Monate (und dauerhaft) am Leben zu halten.

   ![PythonAnywhere Configured Web app](python_anywhere_web_configuration.png)

6. Scrollen Sie im Web-Tab nach unten zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei aus.
   Diese wird den Namen `/var/www/<user_name>_pythonanywhere_com_wsgi.py` haben.

   ![PythonAnywhere WSGI file in Web tab, code section](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und klicken Sie dann auf den **Save**-Button.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die LocalLibrary-Anwendung zu finden.
   PythonAnywhere erwartet, dass sich diese Datei an diesem Speicherort befindet, weshalb die im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im Web-Tab nach unten zum Abschnitt "Virtualenv".
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der in der vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie sie in "env_local_library" benannt haben, wie vorgeschlagen, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env section of Web tab](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im Web-Tab nach unten zum Abschnitt "Static files".

   ![PythonAnywhere Static files section of Web tab](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link aus und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Applicationseinstellungen](#settings.py_2) und reflektiert den Ort, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im Web-Tab den **Reload**-Button, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link aus, um die Live-Site zu starten:

![PythonAnywhere Web screen with the link to launch the site highlighted](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten abgebildet.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![A detailed error page with a full traceback of an invalid HTTP_HOST header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, ist aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Protokollierungsniveau auf der Live-Site mit [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die URL Ihrer PythonAnywhere-Site einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projektes auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und Sie haben die Änderungen im Branch main gepusht, dann können Sie sie im Bash-Prompt mit dem folgenden Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie den **Restart**-Button im `Web`-Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto einloggen können und Autoren, Genres, Bücher usw. erstellen, genau so, wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitmachen Ihrer Website zur Veröffentlichung](#machen_sie_ihre_website_bereit_zur_veröffentlichung) haben wir die Anwendung modifiziert, sodass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Speziell haben wir die Bibliothek so eingestellt, dass Sie setzen können:

- `DJANGO_DEBUG=False`, um das gezeigte Debug-Tracking für den Benutzer zu reduzieren, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun es in diesem Beispiel nicht).

Wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei einlesen.
Wir sind schon dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere-Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare an die `.env`-Datei schreiben.
   Zum Beispiel um `DJANGO_DEBUG` auf `False` im Bash-Konsolenfenster zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel erstellen Sie ein Genre, dann erhöhen Sie die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine „Nicht gefunden“-Nachricht anstelle einer ausführlichen Debug-Trace.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert werden kann.

### Warum Railway?

> [!WARNING]
> Railway hat kein vollständig kostenloses Starterpaket mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein könnte.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen.
  Nicht über Server, Lastverteiler, Reverse-Proxies usw. nachdenken zu müssen, macht es viel einfacher, den Einstieg zu finden.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar.
  Während Railway einige exzellente neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben werden, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen, isolierten und unabhängigen virtualisierten Containern ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und verstehen, wie sie gestartet wird.
Für Django-Apps liefern wir diese Informationen in einer Reihe von Textdateien:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Website benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die zum Starten der Webanwendung ausgeführt werden sollen.
  Für Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe von in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellten Informationen konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren durch die Railway-Site und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Werkzeug mit Railway.
Mit dem CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository von der lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses überprüfen, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eines der nützlichsten Features ist, dass Sie mit dem CLI Ihren lokalen Projekt mit denselben Umgebungsvariablen wie in Ihrem Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein git-Repository einfügen, die oben genannten Dateien hinzufügen, sich mit einem Datenbank-Add-On integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu behandeln.
Nachdem wir all das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client bekommen und unsere Website installieren.

Das ist alles an Übersicht, die Sie brauchen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine Procfile- und eine runtime.txt-Datei erstellen, denn fast alles andere ist bereits vorhanden.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Workflows, die wir bereits gelernt haben, zu verwenden.

#### Procfile

Ein _Procfile_ ist der "Eingabepunkt" der Webanwendung.
Es listet die Befehle auf, die von Railway zum Starten Ihrer Site ausgeführt werden.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stammverzeichnis Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass dies ein Webprozess ist und HTTP-Verkehr übermittelt werden kann.
Wir rufen dann den Befehl Django-Migration `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in das durch die `STATIC_ROOT`-Projekteinstellung definierte Verzeichnis zu sammeln (siehe den Abschnitt [statistische Dateien in Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzubeziehen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor das Release bereitgestellt wird.

#### Runtime

Die **runtime.txt**-Datei gibt an, wenn sie definiert ist, welche Version von Python Railway verwenden soll.
Erstellen Sie die Datei im Stammverzeichnis des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Neben-Version.
> Sie werden in der Regel die nächste unterstützte Version auf den Wert verwenden, den Sie angeben.

#### Erneut testen und Änderungen in GitHub speichern

Bevor Sie fortfahren, testen Sie die Seite noch einmal lokal und stellen Sie sicher, dass sie nicht durch eine der oben genannten Änderungen gebrochen wurde.
Führen Sie den Entwicklungs-Webserver wie gewohnt aus und überprüfen Sie dann die Website in Ihrem Browser, um sicherzustellen, dass sie noch wie gewünscht funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns die Änderungen in GitHub `push`.
Geben Sie im Terminal (nachdem Sie in unser lokales Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und verschmelzen Sie dann den PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um mit Railway zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie im oberen Menü auf den **Login**-Link.
- Wählen Sie im Popup-Fenster GitHub aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Danach werden Sie im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitzustellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wähle zuerst die Option **Dashboard** aus dem oberen Menü der Seite aus, dann klicke auf den **New Project**-Button:

![Railway website dashboard with new project button](railway_new_project_button.png)

Railway wird eine Liste von Optionen für das neue Projekt anzeigen, einschließlich der Option, ein Projekt vor Ort von Ihrem GitHub-Konto als Vorlage bereitzustellen und eine Reihe von Datenbanken.
Wähle **Deploy from GitHub repo**.

![Railway website screen - deploy](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway website screen showing a dialog to choose an existing GitHub repository or choose a new one](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Confirmation screen - select deploy](railway_new_project_deploy_confirm.png)

Railway lädt und bereitstellt Ihr Projekt, wobei der Fortschritt auf der Registerkarte "Deployments" angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway website screen - deployment](railway_project_deploy.png)

Sie können auf die Site-URL klicken (oben hervorgehoben), um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten abgebildet.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![A detailed error page with a full traceback of an invalid HTTP_HOST header](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, ist aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Wir werden Ihnen zeigen, wie Sie es deaktivieren, sobald die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die URL Ihrer Railway-Site einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Bereitstellen und verbinden einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem separaten Projekt erstellen könnten.

Auf Railway wählen Sie im oberen Menü der Site die Option **Dashboard** und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes einzustellen).
Die **Settings**-Taste kann ausgewählt werden, um projektweite Einstellungen zu ändern.
Wählen Sie die **New**-Taste aus, die zum Hinzufügen von Diensten zum Projekt verwendet wird.

![Railway project with new service button highlighted](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie aufgefordert werden, die Art des hinzuzufügenden Dienstes auszuwählen:

![Railway project - select database as new service](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL** aus, um die Datenbank hinzuzufügen

![Railway project - select postgres as new service](railway_project_add_database_select_type.png)

Railway erstellt dann einen Dienst, der eine leere Datenbank im selben Projekt enthält.
Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste im Projektansicht.

![Railway project with application and Postgres database service](railway_project_two_services.png)

Wählen Sie den Webdienst aus und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** und dann in der Box _Variable name_ die Option **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, um die locallibrary als Umgebungsvariable zu lesen).

![Railway website screen selecting a DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um das Variablenreferenz hinzuzufügen und schließlich **Deploy** (dies wird in einem Popup angezeigt).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen könnten, dann ihre Registerkarte "Variablen" und die Variable kopieren.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Wir werden dies mit dem [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer tun.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier folgen](https://docs.railway.com/guides/cli).

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Zu den wichtigsten Operationen gehört das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in einem zugehörigen Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Django-Projekts mit den gleichen Einstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese in den folgenden Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das Folgende in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verlinken.

### Einrichten eines Superusers

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django-Tutorial Teil 4: Django-Admin-Site > Erstellung eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminalzugang zum Server und wir können diesen Befehl nicht im [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bietet, um Befehle lokal mit den gleichen Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich des Datenbankverbindungsstrings.

Öffnen Sie zunächst ein Terminal oder Eingabeaufforderung in einem Git-Clone Ihres locallibrary-Projekts.
Melden Sie sich dann mit dem `login` oder `login --browserless`-Befehl bei Ihrem Browser-Konto an (folgen Sie allen resultierenden Aufforderungen und Anweisungen vom Client oder der Website, um den Login abzuschließen):

```bash
railway login
```

Nachdem Sie sich eingeloggt haben, verlinken Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie, wenn Sie aufgefordert werden, ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt nun _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort gemäß den Anforderungen ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[your-url].railway.app/admin/`) und die Datenbank zu füllen, so wie wir es in [Django Tutorial Teil 4: Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt haben.

### Konfigurationsvariablen einstellen

Der letzte Schritt ist es, die Seite sicher zu machen.
Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel einstellen.
Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde in [Vorbereitung Ihrer Website zur Veröffentlichung](#machen_sie_ihre_website_bereit_zur_veröffentlichung) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_ aus.
Dies sollte bereits `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - add a new variable screen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie den **New Variable**-Button und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann wählen Sie **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Die endgültige Liste der Variablen sollte so aussehen:

![Railway screen showing all the project variables](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den logs-Befehl, um das Tail der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie sich mit [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) vertraut machen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie diese nützlich fanden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt ist, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe zu absolvieren.

## Siehe auch

- [Bereitstellung von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Bereitstellen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [So bedienen Sie Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungsverfahren)
  - [Konfiguration von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
