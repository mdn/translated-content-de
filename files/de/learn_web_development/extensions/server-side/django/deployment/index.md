---
title: "Django Tutorial Teil 11: Django in der Produktion bereitstellen"
short-title: "11: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet, daher ist es nun an der Zeit, sie auf einem Webserver zu installieren, damit sie von jedem im öffentlichen Internet zugänglich ist. Diese Seite beschreibt, wie man ein Django-Projekt hostet und was nötig ist, um Ihre Website für eine Produktionsbereitstellung vorzubereiten.

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
      <td>Erfahren Sie, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertig ist (oder „fertig genug“, um öffentlich getestet zu werden), müssen Sie sie an einem Ort hosten, der öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt arbeiteten Sie in einer Entwicklungsumgebung und nutzten den Django-Entwicklungs-Webserver, um Ihre Website im lokalen Browser/Netzwerk zu teilen und mit (unsicheren) Entwicklungseinstellungen zu betreiben, die Debug- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App wählen.
- Eine Umgebung für das Hosting von statischen Dateien wählen.
- Eine Infrastruktur auf Produktionsniveau für den Betrieb Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzustellen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website zur externen Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weitergibt.
- Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung könnten Sie auch einen Reverse-Proxy, Lastverteiler usw. haben.

Der Servercomputer könnte sich bei Ihnen vor Ort befinden und durch eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet in Wirklichkeit, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet normalerweise ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis an.

Diese Art von aus der Ferne zugänglichen Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, vollständigere Umgebungen auszuwählen, vielleicht einschließlich einer vollständigen Django- und Webserver-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Systemteile aktualisieren müssen, eine Vorstellung haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art des Hostings müssen Sie sich um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) nicht kümmern, da die Hosting-Plattform dies für Sie übernimmt — zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS bevorzugen, während andere die reduzierte Wartungsbelastung und einfachere Skalierung von PaaS schätzen. Wenn Sie anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollte dieser Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsservern, Reverse-Proxies usw. bereitstellen (dies ist nicht relevant, wenn Sie sich für ein PaaS entscheiden). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekanntermaßen Django aktiv unterstützen oder gut mit Django arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und verschiedene Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Dinge, die bei der Auswahl eines Hosts zu beachten sind:

- Wie viel Traffic Ihre Website wahrscheinlich haben wird und die Kosten der erforderlichen Daten- und Rechenressourcen zur Deckung dieses Bedarfs.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugang wahrscheinlich am schnellsten ist.
- Die historische Uptime- und Downtime-Leistung des Hosts.
- Werkzeuge zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von Stunden "Live-Zeit" an oder bieten nur eine kleine Menge Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, die Sie ansonsten bezahlen müssten.
- Ob der "kostenlose" Plan, auf den Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für die Migration zu einem teureren Plan bedeuten, dass Sie besser von Anfang an einen anderen Dienst genutzt hätten!

Die gute Nachricht bei Ihrem Start ist, dass es einige Websites gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Bewertungs- und Testzwecke gedacht sind.
Diese sind normalerweise ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig, um Websites mit geringem Traffic in einer gehosteten Umgebung zu testen, und können eine einfache Migration zu bezahlt für mehr Ressourcen bieten, wenn Ihre Website mehr Traffic bekommt.
Beliebte Entscheidungen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basic"-Stufe an, die für kleine Produktionswebsites gedacht ist und nützlichere Leistungsstufen und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basic-Computing-Ebene haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit der wichtigste Faktor ist.

## Ihre Website für die Veröffentlichung vorbereiten

Die [Django-Basis-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den Tools _django-admin_ und _manage.py_ erstellt wurde, ist so konfiguriert, dass die Entwicklung einfacher ist. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten aus Sicherheits- oder Leistungsgründen für die Produktion anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder bedingt sensible Einstellungen aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt sein, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dadurch wird verhindert, dass sensible/vertrauenswürdige Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Quellcodeverwaltung oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer Datei, die nur auf dem Server verfügbar ist, gelesen werden sollten. Ändern wir die _LocalLibrary_-Anwendung so, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und schließlich auf die Standardwerte in der Konfigurationsdatei zurückgreifen. Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Diese Bibliothek liest Schlüssel-Wert-Paare aus einer Datei und verwendet sie als Umgebungsvariablen, aber nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installiere die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert wurde, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichert und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte nicht wichtig sein, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „leakt“, da Sie ihn nicht in der Produktion verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG`-Einstellung aus und fügen Sie die neue Zeile unten hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird aber nur `False`, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Beachten Sie bitte, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Daher müssen wir Zeichenfolgen vergleichen. Der einzige Weg, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf Linux auf „False“ setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie in der [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Einstellungen mit dem unten stehenden Terminalbefehl auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim Einrichten der Entwicklungsumgebung erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal in der Kommandozeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites. Leider kann es bei einigen beliebten Hosting-Services, wie Heroku, nicht verwendet werden, da sie keinen beständigen Datenspeicher in der Anwendungsumgebung bereitstellen (eine Voraussetzung für SQLite). Da dies uns möglicherweise bei dem Beispielbereitstellungen nicht betrifft, zeigen wir Ihnen jedoch einen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung mit einer Adresse angesprochen wird, die als Umgebungsvariable übergeben wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten einen beliebigen Datenbank-Hosting-Service Ihrer Wahl nutzen.

Die Informationen zur Datenbankverbindung werden Django über eine Umgebungsvariable namens `DATABASE_URL` zur Verfügung gestellt. Anstatt diese Informationen hart in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die Umgebungsvariable `DATABASE_URL` zu parsen und automatisch ins von Django gewünschte Konfigurationsformat zu konvertieren. Zusätzlich zur Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden sollen:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig auf Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unser dynamisches HTML als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen Django passieren müssen, auch wenn Django nichts mit ihnen macht. Während dies während der Entwicklung keine Rolle spielt, hätte es einen erheblichen Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) zu bedienen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle in unseren Vorlagen referenzierten statischen Dateien sammelt. Nachdem sie gesammelt wurden, können diese dann als Gruppe an den Ort hochgeladen werden, an dem die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse, die vom _collectstatic_-Tool von Django für statische Dateien durchsucht werden sollen.

Django-Vorlagen verweisen auf statische Dateispeicherorte relativ zu einem `static`-Tag (Sie können dies in der Basistemplate sehen, die in [Django Tutorial Part 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum zur `STATIC_URL`-Einstellung führt. Statische Dateien können daher zu jedem Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in dem Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ aufgerufen werden, bevor die Anwendung hochgeladen wird, wodurch alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert werden. `Whitenoise` findet die Dateien dann standardmäßig aus dem durch `STATIC_ROOT` definierten Ort und stellt sie an der Basis-URL, die durch `STATIC_URL` definiert ist, bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Das `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits in der Datei zu dem Zeitpunkt, als sie erstellt wurde, definiert worden sein. Während es keinen Schaden anrichtet, können Sie die doppelte vorherige Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Datei-Servieren tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise-(https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden zum direkten Bereitstellen statischer Assets aus Gunicorn in der Produktion.

Überprüfen Sie die [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) für eine Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode ist, um diese Dateien bereitzustellen.

Die Schritte, um _WhiteNoise_ für die Verwendung mit dem Projekt einzurichten, sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` nahe am Anfang der Liste, direkt unter dem `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter). Fügen Sie einfach das folgende zum Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts mehr tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositories gespeichert werden. Viele Hosting-Dienste werden automatisch Abhängigkeiten in dieser Datei installieren (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ in der Kommandozeile erstellen (führen Sie den folgenden Befehl im Reporoot aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle verschiedenen Abhängigkeiten oben installiert haben, sollte Ihre **requirements.txt** Datei _zumindest_ die untenstehende Liste enthalten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Ihres Anwendungs-Repositories in GitHub

Viele Hosting-Dienste ermöglichen es, Projekte von einem lokalen Repository oder von cloud-basierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten bereits GitHub verwenden, um den Local Library-Quellcode zu speichern (dies wurde eingerichtet in [Source Code-Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github), als Teil des Einrichtens Ihrer Entwicklungsumgebung).

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, bei der Bereitstellung bei jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung) könnten andere es nicht sein. Angenommen, Sie haben bereits alle bisher gemachten Änderungen im `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen wie folgt zu sichern:

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

Dieser Abschnitt zeigt praktisch, wie Sie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hosten können.

### Warum PythonAnywhere?

Wir wählen die Verwendung von PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migrierte, als die vorherigen kostenlosen Pläne eingestellt wurden. Wir haben PythonAnywhere gewählt, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt. Wir haben das Railway-Beispiel ebenfalls aufbewahrt, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer anderswo laufenden Postgres-Datenbank einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Nicht um Server, Lastverteiler, Reverse-Proxies und so weiter kümmern zu müssen, macht es viel einfacher, zu beginnen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von PythonAnywhere lernen, sind übertragbar.
- Die Dienste und Planbeschränkungen beeinträchtigen uns nicht besonders bei der Verwendung von PythonAnywhere für das Tutorial. Zum Beispiel:
  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, geringe CPU/Bandbreite, keine IPython/Jupyter-Notebooks-Unterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz, um unsere Basisseite auszuführen!
  - Eigene Domains werden zum Zeitpunkt des Schreibens nicht unterstützt.
  - Die Umgebung schaltet sich ab, wenn sie nicht verwendet wird, daher kann sie langsam sein, wieder zu starten. Sie können sie für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt eine kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres. In dieser Demonstration verwenden wir einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere ist geeignet, diese Demonstration zu hosten, und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, zu entscheiden, ob es für Ihre eigene Website geeignet ist [wahl eines Hosting-Anbieters](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole mit einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um unser Local Library GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Unterstützung für Postgres. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wird (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie überblicksmäßig brauchen, um loszulegen.

### Einen PythonAnywhere-Account erstellen

Um mit PythonAnywhere zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehe zur PythonAnywhere [Plans & Pricing](https://www.pythonanywhere.com/pricing/)-Seite und wähle die Schaltfläche **Create a Beginner Account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail und Ihrem Passwort, bestätigen Sie die Bedingungen und wählen Sie dann **Register**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen uns den Source-Code der Local Library von GitHub. Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, sodass sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bildschirm zur Verwaltung der Konsole, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass alle erstellten Konsolen für späteren Gebrauch gespeichert werden, zusammen mit ihrer gesamten Historie. Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-Umgebung mit dem Namen "env_local_library" zum Installieren der Abhängigkeiten der Local Library zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der unter [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wurde. Wir hätten die Umgebung beliebig benennen können, und wir können sie mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrer Website-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (beispielsweise müssten Sie, wenn Ihr Benutzername "Odtsetseg" ist, den Local Library-Source in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem gehosteten Computer (genauso, wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank einrichten und damit verbinden](#provisionieren_und_verbinden_einer_postgres-sql-datenbank) und diese durch Setzen der `DATABASE_URL`-Umgebungsvariable anschließen. Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie in der [Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website (wie im Abschnitt [Django Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Angaben, da Sie sie benötigen, um Ihre Website zu testen.

### Einrichten der Webanwendung

Nachdem Sie die Local Library-Quellen geholt und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie diese zu finden und zu verwenden sind als Webanwendung.

1. Navigieren Sie zum _Web_-Bereich der Seite und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web"-Bereich zeigt Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_-Assistent wird dann geöffnet, um Sie durch die Konfiguration der Hauptmerkmale der Webanwendung zu führen.

2. Wählen Sie **Next**, um die Web-App-Domänennamenskonfiguration zu überspringen. Das kostenlose Konto erstellt den Domainnamen basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Erinnerung zur Festlegung des Domainnamens einer neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im _Select a Python Web framework_-Bildschirm die Option **Manual configuration**.

   ![PythonAnywhere-Proband zum Auswählen des Web-Frameworks, verwendet von der Applikation](python_anywhere_web_add_select_framework_manual.png)

   Mithilfe der manuellen Konfiguration haben wir die vollständige Kontrolle darüber, wie die Umgebung konfiguriert ist. Das spielt jetzt nicht so eine große Rolle, aber wenn wir mehrere Sites hosten, möglicherweise mit verschiedenen Versionen von Python und/oder Django, wäre das wichtig.

4. Wählen Sie auf dem _Select a Python version_-Bildschirm **3.10**

   ![PythonAnywhere-Proband zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python auswählen, die von der von Ihnen verwendeten Django-Version zugelassen ist.

5. Wählen Sie auf dem Bildschirm mit der _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Optionen zur Konfiguration)

   ![PythonAnywhere-Proband, der die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, mit der Sie die Web-App neu laden können, nachdem Sie weitere Änderungen vorgenommen haben. Wie auf dem Bildschirm angegeben, müssen Sie auf **Run until 3 months from today** klicken, um die Site für weitere drei Monate am Leben zu erhalten (und darüber hinaus).

   ![PythonAnywhere-configurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten zum Abschnitt "Code" auf dem _Web_-Tab und wählen Sie den Link zur WSGI-Konfigurationsdatei aus. Diese wird einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py` haben.

   ![PythonAnywhere WSGI-Datei im Web-Reiter, Codesektion](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die **Save**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die local library-Anwendung zu finden. PythonAnywhere erwartet, dass diese Datei an diesem Standort ist, weshalb die WSGI-Datei, die sich bereits im Projekt befindet, nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt "Virtuelle Umgebung" des _Web_-Tabs. Wählen Sie den Link **Enter the path to a virtual env, if desired**, und geben Sie den Pfad der virtuellen Umgebung ein, die Sie im vorherigen Abschnitt erstellt haben. Wenn Sie es wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtuelle Umgebung im Web-Tab](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt „Statische Dateien“ des _Web_-Tabs.

   ![PythonAnywhere Statische Dateien im Web-Tab](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_-Tab die **Reload**-Schaltfläche, um die Site neu zu starten. Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit dem Link zur Website](python_anywhere_web_open_site.png)

### Setzen ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Beim Öffnen der Website sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten dargestellt. Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem „zulässigen Host“ ausgeführt wird.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Website dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Protokollstufe auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die URL Ihrer PythonAnywhere-Website einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten gezeigt hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übermitteln Sie sie an Ihr GitHub-Repository.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren. Wenn Sie Ihre Änderungen bereits an den Master-Branch übermittelt haben, können Sie die Änderungen in Ihrem Bash-Prompt im `<user_name>.pythonanywhere.com`-Ordner mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die Schaltfläche **Restart** im `Web`-Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Website aktualisieren, sollte sie jetzt geöffnet werden und die Startseite der Website anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website für die Veröffentlichung vorbereiten](#ihre_website_für_die_veröffentlichung_vorbereiten) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie folgendes setzen können:

- `DJANGO_DEBUG=False`, um das für den Benutzer angezeigte Debug-Tracing bei einem Fehler zu reduzieren.
- `DJANGO_SECRET_KEY` zu einem geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab. Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen. Wir sind bereits dafür eingerichtet, daher müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein Bash-Prompt von PythonAnywhere.
2. Wechseln Sie in Ihr Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben. Beispielsweise, um `DJANGO_DEBUG` auf `False` in der Bash-Konsole festzulegen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Eintrag zu öffnen, der nicht vorhanden ist (z. B. ein Genre erstellen und dann die Nummer in der URL-Leiste erhöhen, um einen Eintrag zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Nachricht anstelle einer detaillierten Debug-Tracing.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren können.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr. Wir haben diese Anleitungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie es nicht müssen. Nicht um Server, Lastverteiler, Reverse-Proxies und so weiter kümmern zu müssen, macht es viel einfacher, zu beginnen.
- Railway hat einen [Fokus auf die Developer-Erfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisstruktur vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich Zeit nehmen, um zu überprüfen, ob Railway für Ihre eigene Website geeignet ist [wahl eines Hosting-Anbieters](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die Programmiersprache und Version an, die verwendet werden soll.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die Ihre Website benötigt, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden müssen, um die Webanwendung zu starten. Für Django wird dies normalerweise der Gunicorn-Webanwendungs-Server sein (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich selbst mithilfe von bereitgestellten [Umgebungsvariablen](https://docs.railway.com/variables) konfigurieren. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten. Der Datenbankdienst selbst kann von Railway oder von einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verbinden, das Repository von dem lokalen Branch zur Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bekommen, müssen wir unsere Django-Webanwendung in ein Git-Repository legen, die oben genannten Dateien hinzufügen, uns mit einem Datenbank-Add-on verbinden und Änderungen vornehmen, um statische Dateien korrekt zu behandeln. Sobald wir all das gemacht haben, können wir ein Railway-Konto einrichten, den Railway-Client holen und unsere Website installieren.

Das ist alles, was Sie brauchen, um loszulegen.

### Die App für Railway aktualisieren

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen eigentlich nur eine `Procfile`- und `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern werden, die bisher erlernten lokalen Tests und Workflows zu verwenden.

#### Procfile

Eine _Procfile_ ist der Einstiegspunkt für die Webanwendung. Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` sagt Railway, dass dies ein Webprozess ist und HTTP-Datenverkehr gesendet werden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in dem Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist (siehe den Abschnitt [Statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungs-Server, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ umfasst und die Bereitstellung statischer Dateien unterstützt!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die **runtime.txt**-Datei, falls definiert, gibt Railway an, welche Python-Version verwendet werden soll. Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minor-Version. Sie verwenden im Allgemeinen die am nächsten unterstützte Version zu dem Wert, den Sie angeben.

#### Erneut testen und Änderungen an GitHub speichern

Bevor Sie fortfahren, testen Sie die Site zuerst erneut lokal und stellen Sie sicher, dass sie nicht von einer der oben genannten Änderungen betroffen ist. Führen Sie den Entwicklungs-Webserver wie gewohnt aus und überprüfen Sie dann, ob die Site im Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als Nächstes die Änderungen an GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann einen PR auf GitHub und verbinden Sie das Änderungsset.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitzustellen.

### Einen Railway-Account erstellen

Um mit Railway zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehe zu [railway.com](https://railway.com/) und klicke auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen einzuloggen
- Sie müssen möglicherweise Ihre E-Mail überprüfen und Ihr Konto überprüfen.
- Sie werden dann beim Railway.com-Dashboard angemeldet: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als Nächstes werden wir Railway einrichten, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst die **Dashboard**-Option im oberen Menü der Site und dann die Schaltfläche **New Project**:

![Railway-Dashboard-Website mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu bereitstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und einer Anzahl von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Websitebildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Websitebildschirm zeigt ein Dialogfeld an, um ein vorhandenes GitHub-Repository zu wählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Deployment wählen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte "Deployments" anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Websitebildschirm - Deployment](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird immer noch nicht funktionieren, da die Einrichtung noch nicht abgeschlossen ist).

### Setzen ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Website geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm, wie unten dargestellt. Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem „zulässigen Host“ ausgeführt wird.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Website dar. Wir zeigen Ihnen, wie Sie diese deaktivieren, sobald die Website läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um die Railway-URL Ihrer Website einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch die Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten gezeigt hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übermitteln Sie sie an Ihr GitHub-Repository (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Provisionieren und Verbinden einer Postgres-SQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und diese mit der von uns bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugänglich ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen könnten.

Wählen Sie auf Railway die **Dashboard**-Option im oberen Menü der Site und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Der **Settings**-Button kann ausgewählt werden, um Projekteinstellungen zu ändern. Wählen Sie den **New**-Button, der verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL** aus, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Projekt - Auswahl von Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst einrichten, der eine leere Datenbank im selben Projekt enthält. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variables_. Wählen Sie **New Variable** und dann im _Variable name_-Feld **Add reference**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variable, die wir eingerichtet haben, damit locallibrary als Umgebungsvariable gelesen wird).

![Railway-Webseite Bildschirm eine DATABASE_URL auswählen](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen und schließlich **Deploy** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie alternativ die Postgres-Datenbank öffnen und dann ihre registerkarte %e hinzufügen kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Wir erledigen das mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie die [hier gegebenen Anweisungen](https://docs.railway.com/cli) befolgen.

Nach der Installation des Clients können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in einem zugeordneten Railway-Projekt (ohne GitHub hochzuladen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen, die Sie auf dem Produktionsserver haben. Wir zeigen dies in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie im Terminal Folgendes eingeben:

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django Tutorial Teil 4: Django Admin-Seite > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben). Railway bietet keinen direkten Zugriff auf die Server-Terminalbefehle an, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, weil er interaktiv ist.

Was wir stattdessen tun können, ist diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktions_-Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er über eine Mechanik verfügt, um Befehle lokal mit denselben Umgebungsvariablen auszuführen, die wie der Produktionsserver, einschließlich der Datenbank-Verbindungszeichenkette, verwendet werden.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres locallibrary-Projekts. Dann melden Sie sich bei Ihrem Railray-Konto an, indem Sie `login` oder `login --browserless` aufrufen (folgen Sie anschließend allen vom Client aufgegebenen oder am Website gespeicherten Gutschein und Anweisungen, um den Anmeldevorgang abzuschließen):

```bash
railway login
```

Nach der Anmeldung verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie aufgefordert werden, ein bestimmtes Projekt auszuwählen/einzugeben:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt nun _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[your-url].railway.app/admin/`) und die Datenbank zu füllen, wie im [Django-Tutorial Teil 4: Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt.

### Einstellen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Website sicher zu machen. Insbesondere müssen wir die Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel einstellen. Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde im [Bereitstellen Ihrer Website](#ihre_website_für_die_veröffentlichung_vorbereiten) (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`) erledigt.

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_. Das sollte bereits die `DATABASE_URL` wie unten gezeigt enthalten.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren. Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **New Variable**-Schaltfläche und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Add**). Dann geben Sie den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Die endgültige Menge an Variablen sollte so aussehen:

![Railway Bildschirm zeigt alle Projektvariablen an](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den commando logs, um den Endbereich der Logs anzuzeigen (ein weiteres vollständigeres Log ist auf der Site für jedes Projekt verfügbar).

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bereitstellt, müssen Sie mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beginnen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch der Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, dass Sie sie nützlich fanden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier anschauen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt ist das Lesen unserer letzten Artikel und das Abschließen der Bewertung.

## Siehe auch

- [Bereitstellen von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-dokumente)
  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie Sie mit WSGI bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Django mit Apache und mod_wsgi verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Django mit Gunicorn verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumente
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [So bedienen Sie Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Django-Community-Dokumente von DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)
  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-dokumente)
  - [Start mit Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-dokumente)
  - [Django und Statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-dokumente)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-dokumente)
  - [Dynos and der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-dokumente)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-dokumente)
  - [Mit Django arbритen](https://devcenter.heroku.com/categories/working-with-django) (Heroku-dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
