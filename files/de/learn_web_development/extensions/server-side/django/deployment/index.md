---
title: "Django Tutorial Teil 11: Django für die Produktion bereitstellen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet, daher ist es jetzt an der Zeit, sie auf einem Webserver zu installieren, damit sie über das öffentliche Internet zugänglich ist. Diese Seite beschreibt, wie ein Django-Projekt gehostet wird und was Sie tun müssen, um Ihre Website für eine Produktionsbereitstellung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wo und wie Sie eine Django-App in die Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug" für erste öffentliche Tests), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Website für den lokalen Browser/das Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen veröffentlichen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Ein paar Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine Infrastruktur auf Produktionsebene einrichten, um Ihre Website bereitstellen zu können.

Dieses Tutorial bietet Ihnen einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App bereit für die Produktion zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachenlaufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung könnten Sie auch einen Reverse-Proxy, Load Balancer usw. haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und mit einer schnellen Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicher usw.) und Internetkonnektivität für einen bestimmten Preis.

Diese Art von entfernt zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen Ihnen die Auswahl von vollständiger ausgestatteten Umgebungen, die möglicherweise eine komplette Django- und Webserver-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wissen, wo Sie mit dem Upgrade von Teilen des Systems beginnen können!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) kümmern, da die Hosting-Plattform dies für Sie übernimmt – zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren und nicht auf die gesamte Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität, die von IaaS geboten wird, gegenüber PaaS wählen, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie Django aktiv unterstützen oder gut mit ihm arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen. Diese Anbieter stellen unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen bereit.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website voraussichtlich frequentiert wird und die Kosten für die erforderlichen Daten- und Rechenressourcen, um die Nachfrage zu decken.
- Unterstützungsebene für horizontales (Hinzufügen weiterer Maschinen) und vertikales (Upgrade auf leistungsstärkere Maschinen) Skalieren und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff am schnellsten ist.
- Historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Tools, die zur Verwaltung der Website bereitgestellt werden – sind sie einfach zu benutzen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisstufen nur eine bestimmte Anzahl von Stunden "Live-Zeit" an oder bieten nur eine kleine Menge an Speicherplatz an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für die Migration zu einer teureren Stufe bedeuten, dass Sie besser einen anderen Dienst genutzt hätten!

Die gute Nachricht ist, dass viele Websites "kostenlose" Computerumgebungen bieten, die für Bewertung und Tests gedacht sind. Diese sind in der Regel ressourcenbeschränkt/limitiert und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit auslaufen können oder andere Einschränkungen haben. Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und bieten eine einfache Migration zu mehr bezahlten Ressourcen, wenn Ihre Website beschäftigter wird. Beliebte Wahlmöglichkeiten in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basic"-Stufe an, die für kleine Produktionswebsites gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basic-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website bereit machen zur Veröffentlichung

Die mit den _django-Admin_- und _manage.py_-Tools erstellte [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist darauf ausgelegt, die Entwicklung zu erleichtern. Viele der Django-Projekteinstellungen (die in **settings.py** festgelegt sind) sollten in der Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensitive Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dadurch wird verhindert, dass sensible/vertrauliche Debug-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der z. B. für CSRF-Schutz verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht unter Quellkontrolle steht oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer serverseitigen Datei gelesen werden könnten. Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, auf Werte zurückgreifen, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und zuletzt auf die in der Konfigurationsdatei definierten Standardwerte zurückgreifen. Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zum Verwenden dieser als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie unten gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert ist, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung. Variablen, die in der Datei als `KEY=VALUE` definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_! Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen ein, wie unten gezeigt. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die bestehende `DEBUG`-Einstellung aus und fügen Sie die neue Zeile hinzu, wie unten gezeigt.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` wird standardmäßig `True` sein, aber nur `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariablen auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Bitte beachten Sie, dass Umgebungsvariablen Strings und keine Python-Typen sind. Daher müssen wir Strings vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable auf "False" auf Linux setzen, indem Sie den folgenden Befehl ausgeben:

```bash
export DJANGO_DEBUG=False
```

Ein vollständiger Überprüfungsplan von Einstellungen, die Sie möglicherweise ändern möchten, wird in der [Bereitstellungscheckliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente) bereitgestellt. Sie können auch eine Reihe dieser Einstellungen mithilfe des folgenden Terminalbefehls auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig für das Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der virtuellen Python-Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) haben (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittlere Websites. Leider kann es auf einigen bekannten Hosting-Diensten, wie Heroku, nicht verwendet werden, da sie im Anwendungsumfeld keine persistenten Datenspeicherung bereitstellen (eine Anforderung von SQLite). Obwohl das uns für das (die) Beispiel Bereitstellung(en) möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet ausgeführt wird und auf die über eine vom Django-Bibliothekssystem übergebene Adresse als Umgebungsvariable zugegriffen wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die

Datenbankverbindungsinformationen werden an Django über eine Umgebungsvariable mit dem Namen `DATABASE_URL` übermittelt. Statt diese Informationen fest in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und sie automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Neben der Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden müssen:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die standardmäßige SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weit effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3): https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem entfernten Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwendet, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellung von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen durch Django laufen müssen, auch wenn Django nichts mit ihnen macht. Während dies während der Entwicklung keine Rolle spielt, hätte es erheblichen Einfluss auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir normalerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) aus bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle in unseren Vorlagen referenzierten statischen Dateien sammelt. Sobald gesammelt, können diese dann als Gruppe an den Ort hochgeladen werden, an dem sie gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich relativ zu einem `static`-Tag auf die Standorte statischer Dateien (Sie können dies in der Basistemplate sehen, die in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), der wiederum der `STATIC_URL`-Einstellung entspricht. Statische Dateien können daher auf jeden Host hochgeladen werden, und Sie können Ihre Anwendung so aktualisieren, dass sie mithilfe dieser Einstellung gefunden werden.

Mit dem _collectstatic_-Tool werden statische Dateien in den Ordner kopiert, der in der `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird und alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` festgelegten Speicherort kopiert wurden. `Whitenoise` findet die Dateien dann aus dem standardmäßig definierten Standort von `STATIC_ROOT` und bedient sie an der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (möglicherweise wurde `STATIC_URL` bereits innerhalb der Datei definiert, als diese erstellt wurde. Während es keinen Schaden anrichtet, können Sie ruhig die vorherige doppelte Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir verwenden tatsächlich eine Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/), die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um statische Dateien in der Produktion zu bedienen (wir haben die entsprechenden Django-Einstellungen in den vorhergehenden Abschnitten gesehen). Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion zu bedienen.

Sehen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation an, um zu erfahren, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bedienen dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt sind [hier zu finden](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie die `WhiteNoiseMiddleware` fast zu Beginn der Liste ein, direkt unter der `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bedient werden (dies ist effizienter). Fügen Sie einfach das folgende am Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts anderes konfigurieren, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stamm Ihres Repositories gespeichert werden. Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie den folgenden Befehl im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente enthalten (obwohl sich die Versionsnummern unterscheiden können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht hier aufgelistet sind, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder aus cloud-basierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten GitHub bereits zur Speicherung des Quellcodes der lokalen Bibliothek verwenden (dies wurde als Teil der Einrichtung Ihrer Entwicklungsumgebung in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "vanilla" Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, möglicherweise andere nicht. Angenommen, Sie haben alle bisher gemachten Änderungen auf dem `main`-Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet wird.

### Warum PythonAnywhere?

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Dass es für alle Entwickler erschwinglich ist, ist wirklich wichtig für MDN!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migriert, als die zuvor kostenlosen Pläne eingestellt wurden. Wir haben PythonAnywhere ausgewählt, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt. Wir haben das Railway-Beispiel auch beibehalten, das nicht kostenlos ist, zum Vergleich, und weil es uns ermöglicht, Funktionen wie die Integration mit einer auf einem anderen Dienst ausgeführten Postgres-Datenbank einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie das nicht tun müssen. Sich um Server, Load Balancer, Reverse-Proxies usw. keine Sorgen machen zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen uns nicht wesentlich bei der Verwendung von PythonAnywhere für das Tutorial. Zum Beispiel:
  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, geringe CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz, damit unsere grundlegende Website läuft!
  - Benutzerdefinierte Domains werden nicht unterstützt (zum Zeitpunkt der Veröffentlichung).
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass der Neustart langsam sein kann. Man kann sie ununterbrochen laufen lassen, aber Sie müssen die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres. In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, um zu ermitteln, ob es [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte standardmäßige SQLite-Datenbank (es gibt mehr als genug Platz, um die Bibliothekst

unktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie als Überblick benötigen, um loszulegen.

### Ein PythonAnywhere-Konto erstellen

Um PythonAnywhere zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie dann **Register**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub. Wir konfigurieren auch die standardmäßige Datenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Konsolenverwaltungsbildschirm, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, mit all ihrer Historie für die zukünftige Wiederverwendung gespeichert wird. Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt. Wir hätten die Umgebung beliebig benennen können, und wir können sie mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrem Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Konto nur an `<your_pythonanywhere_username>.pythonanywhere.com` benennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die Local Library-Quelle in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie während der Entwicklung).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir eine [Postgres-Datenbank konfigurieren](#eine_postgres_sql-datenbank_bereitstellen_und_verbinden) und sie durch Setzen der `DATABASE_URL`-Umgebungsvariable mit der Datenbank verbinden. Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet werden soll, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, von dem aus sie [in der Produktion bereitgestellt werden können](#bereitstellung_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Website zuzugreifen (wie im Abschnitt [Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Beachten Sie die Details, da Sie sie benötigen, um Ihre Website zu testen.

### Richtige Einrichtung der Webapp

Nachdem Sie die Local Library-Quellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen Sie PythonAnywhere mitteilen, wie es sie finden und als Webapp verwenden kann.

1. Navigieren Sie zum Webbereich der Seite und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web"-Abschnitt, der die Schaltfläche zum Hinzufügen einer neuen App zeigt](python_anywhere_web_add_new_app.png)

   Der _Create new web app_-Assistent öffnet sich dann, um Sie durch die Konfiguration der Hauptmerkmale der Webapp zu führen.

2. Wählen Sie **Next**, um durch die Konfiguration der Webapp-Domainnamen zu gehen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zur Einstellung des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Environment-Konfiguration vollständig zu kontrollieren. Dies spielt jetzt keine große Rolle, könnte jedoch wichtig sein, wenn wir mehrere Sites hosten, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemein sollten Sie die neueste Version von Python auswählen, die von der Version von Django, die Sie verwenden, unterstützt wird.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt einfach einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung, die die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Webapp wird erstellt und im Webabschnitt wie gezeigt angezeigt. Der Bildschirm hat einen **Reload**-Button, mit dem Sie die Webanwendung nach weiteren Änderungen neu starten können. Wie auf dem Bildschirm bemerkt, müssen Sie die **Run until 3 months from today**-Schaltfläche anklicken, um die Site für weitere drei Monate (und fortlaufend) am Leben zu halten.

   ![PythonAnywhere konfigurierter Webapp](python_anywhere_web_configuration.png)

6. Scrollen Sie zum Abschnitt "Code" des _Web_-Reiters und wählen Sie den Link zur WSGI-Konfigurationsdatei. Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Reiter, Codeabschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei mit dem folgenden Text (zuerst aktualisieren Sie "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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

   Beachten Sie, dass die Funktion der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die Anwendung der Local Library zu finden. PythonAnywhere erwartet, dass diese Datei an diesem Ort ist, weshalb die bereits im Projekt enthaltene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie zum Abschnitt "Virtualenv" des _Web_-Reiters. Wählen Sie den **Enter the path to a virtual env, if desired**-Link und geben Sie den Pfad der in der vorherigen Sektion erstellten virtuellen Umgebung ein. Wenn Sie es als "env_local_library" benannt haben, wie vorgeschlagen, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtuelle Umgebung Abschnitt des Web-Reiters](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt "Static files" des _Web_-Reiters.

   ![PythonAnywhere Statische Dateien Abschnitt des Web-Reiters](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link und geben Sie `\static_files\` ein. Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Speicherort wider, an den Dateien kopiert wurden, als wir `collectstatic` in der vorherigen Sektion ausgeführt haben.

9. Wählen Sie oben im _Web_-Reiter den **Reload**-Button, um die Site neu zu starten. Wählen Sie dann den Site-URL-Links aus, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit dem hervorgehobenen Link zum Starten der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie loslegen, ist jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site. Im nächsten Abschnitt zeigen wir Ihnen, wie man diese Art von Logging auf der Live-Site mithilfe von [Umgebungsvariablen auf PythonAnywhere](#umgebungsvariablen_auf_pythonanywhere_verwenden) deaktiviert.

Öffnen Sie in Ihrem GitHub-Projekt **/locallibrary/settings.py** und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die URL Ihrer PythonAnywhere-Site zu include:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Sie werden dann die Version Ihres Projekts auf PythonAnywhere aktualisieren müssen. Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com`, und Sie haben die Änderungen im Hauptzweig gepusht, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie den **Reload**-Button auf dem `Web`-Reiter, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt öffnen und die Startseite der Site anzeigen.

Sie sollten in der Lage sein, sich mit dem oben erstellten Superuser-Account anzumelden und Autoren, Genres, Bücher usw. anzulegen, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Umgebungsvariablen auf PythonAnywhere verwenden

In dem Abschnitt [Ihre Website bereit machen zur Veröffentlichung](#ihre_website_bereit_machen_zur_veröffentlichung) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Genauer gesagt haben wir die Bibliothek so vorbereitet, dass Sie Folgendes festlegen können:

- `DJANGO_DEBUG=False`, um die für den Benutzer angezeigten Debug-Spuren bei einem Fehler zu reduzieren.
- `DJANGO_SECRET_KEY` für einen geheimen Wert in der Produktion setzen.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (dies tun wir nicht in diesem Beispiel).

Wie die Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab. Auf PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen. Wir sind bereits darauf vorbereitet, daher müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungspfad (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben. Um `DJANGO_DEBUG` auf `False` zu setzen, geben Sie im Bash-Konsolenfenster zum Beispiel den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, ein Datensatz zu öffnen, der nicht existiert (zum Beispiel, erstellen Sie ein Genre, erhöhen dann die Nummer in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt gibt eine praktische Demonstration davon, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine komplett kostenlose Starter-Stufe mehr. Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und eine bessere Option für einige Benutzer sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht tun müssen. Sich um Server, Load Balancer, Reverse Proxies usw. keine Sorgen machen zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für die Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele derselben Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie es am Ende lieben, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App sehr einfach.

Sie sollten sich die Zeit nehmen, um herauszufinden, ob Railway für Ihre eigene Website geeignet ist.

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung ausführen zu können, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch verstehen, wie sie gestartet wird. Für Django-Apps liefern wir diese Informationen in einigen Textdateien:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden müssen, um die Webanwendung zu starten. Für Django wird dies normalerweise der Gunicorn Web Application Server (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe von in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren. Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und mithilfe eines speziellen [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tools. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von dem lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository setzen, die oben genannten Dateien hinzufügen, mit einem Datenbank-Addon integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben. Sobald wir das alles erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie als Überblick benötigen, um loszulegen.

### App für Railway aktualisieren

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen tatsächlich nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokale Tests und Workflows zu nutzen, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der Einstiegspunkt der Webanwendung. Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repo und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann. Dann rufen wir den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der in der `STATIC_ROOT`-Projekteinstellung definiert ist (siehe Abschnitt [Statische Dateien in der Produktion bereitstellen](#bereitstellung_von_statischen_dateien_in_der_produktion) unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Web Application Server, und übergeben ihm Konfigurationsinformationen im `locallibrary.wsgi`-Modul (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ zu unterstützen und statische Dateien bereitzustellen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Version bereitgestellt wird.

#### Laufzeit

Die **runtime.txt**-Datei, falls definiert, gibt an, welche Version von Python Railway verwenden soll. Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeitzwischenversion. Sie verwenden im Allgemeinen die am nächsten liegende unterstützte Version zu dem Wert, den Sie angeben.

#### Testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Site noch einmal lokal und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen kaputt geht. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, dass die Site in Ihrem Browser noch so funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Lassen Sie uns nun die Änderungen an GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository gewechselt haben) die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann das PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Einen Railway-Account erstellen

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Dann müssen Sie möglicherweise in Ihr E-Mail-Postfach gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst die **Dashboard**-Option im Top-Menü der Website, und dann den **New Project**-Button:

![Railway Website-Dashboard mit neuem Projekt-Button](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Möglichkeit, ein Projekt von einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt ein Dialogfeld an, um ein vorhandenes GitHub-Repository auszuwählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm - Auswahl bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie unten.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einrichten

Wenn die Site geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie loslegen, ist jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site. Wir zeigen Ihnen, wie man sie deaktiviert, sobald die Site betriebsbereit ist.

Öffnen Sie in Ihrem GitHub-Projekt **/locallibrary/settings.py** und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die URL Ihrer Railway-Site zu beinhalten:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway aktualisiert und stellt Ihre Anwendung automatisch erneut bereit).

### Eine Postgres SQL-Datenbank bereitstellen und verbinden

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der soeben bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugreifbar ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen können.

Öffnen Sie auf Railway die **Dashboard**-Option im obersten Menü der Website und wählen Sie dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstedetails einzurichten). Der **Einstellungen**-Button kann ausgewählt werden, um proj

ektweite Einstellungen zu ändern. Wählen Sie den **Neuen** Button, der verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobenem neuen Dienst-Button](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen**, um mit der Datenbankerstellung zu beginnen

![Railway-Projekt - wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst bereit, der eine leere Datenbank im selben Projekt enthält. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die _Variablen_-Registerkarte aus. Wählen Sie **New Variable** aus und dann im _Variablenname_-Feld **Add Reference **. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (das ist der Name der Variablen, die wir so eingerichtet haben, dass locallibrary sie als Umgebungsvariable liest).

![Railway-Website-Bildschirm, der eine `DATABASE_URL` auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um den Variablenverweis hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie auch die Postgres-Datenbank hätten öffnen, dann ihre Variablen-Registerkarte hätten öffnen und die Variable hätten kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Wir werden dies mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer tun.

### Den Kunden installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den Anweisungen [hier](https://docs.railway.com/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen. Einige der wichtigsten Operationen umfassen das erneute Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein verknüpftes Railway-Projekt (ohne es auf GitHub hochzuladen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver. Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie Folgendes in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> In den folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erne

ut aufrufen, um das Projekt neu zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank ausführen (dies ist derselbe Vorgang, den wir lokal in [Django Tutorial Teil 4: Django-Admin-Site > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben). Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht in das [Procfile](#procfile) aufnehmen, da es interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktions_-Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er eine Möglichkeit bietet, Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts. Dann loggen Sie sich in Ihrem Browser-Konto mit dem Befehl `login` oder `login --browserless` ein (folgen Sie allen nachfolgenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Nachdem Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mithilfe des folgenden Befehls. Beachten Sie, dass Sie ein bestimmtes Projekt auswählen/eingeben müssen, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie den Namen, die E-Mail-Adresse und das Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Admin-Bereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu eröffnen und die Datenbank zu füllen, wie in [Django Tutorial Teil 4: Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt.

### Konfigurationsvariablen einstellen

Der letzte Schritt ist es, die Site sicher zu machen. Speziell müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [ihre Website bereit machen zur Veröffentlichung](#ihre_website_bereit_machen_zur_veröffentlichung) behandelt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die _Variablen_-Registerkarte. Dies sollte bereits die `DATABASE_URL` wie unten gezeigt haben.

![Railway - fügt eine neue Variablenseite hinzu](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu erzeugen. Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl in Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie den Button **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann auswählen **Add**). Dann geben Sie den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm, der alle Projektvariablen zeigt](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den Befehlsprotokolle bereit, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist für jedes Projekt auf der Site verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen als das, was das bietet, müssen Sie beginnen [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu betrachten.

## Zusammenfassung

Das ist das Ende dieses Tutorials über die Einrichtung von Django-Apps in der Produktion und auch der Reihe von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) überprüfen.

Der nächste Schritt ist es, unsere letzten wenigen Artikel zu lesen und dann die Bewertungsaufgabe zu vervollständigen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)
  - [Bereitstellungscheckliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean-Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)
  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Einstieg mit Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellung von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
