---
title: "Django-Tutorial Teil 11: Django in Produktionsumgebungen bereitstellen"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: 7c5bad7d2c864f3aa0e0b48dbaed3ab8f564f736
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Da Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host finden könnten, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wo und wie Sie eine Django-App in Produktionsumgebungen bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug", um öffentlichem Testen zu unterziehen), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort als auf Ihrem persönlichen Entwicklungscomputer hosten.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debug- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App auswählen.
- Eine Umgebung zum Hosten statischer Dateien auswählen.
- Eine produktionsfähige Infrastruktur für den Betrieb Ihrer Website einrichten.

Dieses Tutorial gibt Ihnen einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App bereit für die Produktion zu machen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.app/) Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die der Servercomputer bereitstellt, auf dem Sie Ihre Website für die externe Nutzung ausführen werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Laufzeit der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf die Ihre Website angewiesen ist.

> [!NOTE]
> Je nachdem, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse-Proxy, Load Balancer usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet Ihnen in der Regel ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fern zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständigere Umgebungen auszuwählen, möglicherweise einschließlich einer kompletten Django- und Webserver-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen.

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) kümmern, da die Hostplattform diese für Sie übernimmt — zusammen mit dem, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte übrige Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität des IaaS gegenüber PaaS wählen, während andere den geringeren Wartungsaufwand und das einfachere Skalieren von PaaS zu schätzen wissen. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und deshalb tun wir das in diesem Tutorial.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollte dieser Anweisungen anbieten, wie Sie eine Django-Website mit unterschiedlichen Webserver-, Anwendungsserver-, Reverse-Proxy-Konfigurationen usw. einrichten können. (Dies ist nicht relevant, wenn Sie sich für ein PaaS entscheiden). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit Django arbeiten, einschließlich: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihr Standort wahrscheinlich frequentiert wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützungsgrad für horizontales Skalieren (Hinzufügen weiterer Maschinen) und vertikales Skalieren (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher am schnellsten sein dürfte.
- Die historische Verfügbarkeit und Ausfallzeit-Leistung des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie einfach zu verwenden und sind sie sicher (z.B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von "Live-Zeit-Stunden" oder nur eine geringe Speichermenge an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob das "kostenlose" Tier, auf das Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einem teureren Tier bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht ist, dass es beim Einstieg ganz schön viele Sites gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluations- und Testzwecke gedacht sind. Diese sind in der Regel recht ressourcenbeschränkte Umgebungen und Sie sollten beachten, dass sie möglicherweise nach einem anfänglichen Zeitraum ablaufen oder andere Einschränkungen haben. Sie sind jedoch ideal zum Testen von Sites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen reibungslosen Übergang dazu bieten, für mehr Ressourcen zu bezahlen, wenn Ihre Site geschäftiger wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktions-Sites gedacht ist und nützlichere Ebenen an Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [Digital Ocean](https://www.digitalocean.com/) sind Beispiele beliebter Hosting-Anbieter, die ein relativ kostengünstiges, einfaches Rechenangebot im Bereich von 5 bis 10 USD pro Monat haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Faktor ist.

## Ihre Website für die Veröffentlichung bereit machen

Die [Django-Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website), die mit den _django-admin_ und _manage.py_ Werkzeugen erstellt wurde, ist so konfiguriert, dass die Entwicklung einfacher wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion anders sein, sei es aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt sein, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Trace- und Variableinformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer, zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer nur vom Server zugänglichen Datei gelesen werden sollten. Lassen Sie uns die _LocalLibrary_ Anwendung so ändern, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, wobei auf Werte aus einer **.env** Datei im Root-Verzeichnis zurückgegriffen wird, und schließlich die Standardwerte in der Konfigurationsdatei verwendet werden. Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zur Nutzung dieser als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code hinzu, nachdem `BASE_DIR` definiert wurde, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Root-Verzeichnis der Webanwendung. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen diese nicht bei GitHub speichern und sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY` Konfiguration und fügen Sie die neuen Zeilen hinzu, wie unten gezeigt. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, daher wird der Standardwert verwendet (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die bestehende `DEBUG` Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei steht. Beachten Sie, dass Umgebungsvariablen Strings und keine Python-Typen sind. Wir müssen daher Strings vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable auf "False" unter Linux mit dem folgenden Befehl setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Anzahl dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Vergewissern Sie sich zunächst, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal über die Kommandozeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Datenbank von Django, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittlere Websites. Leider kann sie auf einigen beliebten Hosting-Diensten, wie Heroku, nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite). Obwohl das uns möglicherweise nicht für das Beispiel Deployment betrifft, werden wir Ihnen einen anderen Ansatz zeigen, der auf Railway, Heroku und einigen anderen Diensten funktionieren wird.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django Bibliotheksanwendung mit einer über eine Umgebungsvariable übermittelten Adresse abgerufen wird. In diesem Fall werden wir eine Postgres-Datenbank verwenden, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die Verbindungsinformationen der Datenbank werden Django über eine Umgebungsvariable namens `DATABASE_URL` zur Verfügung gestellt. Anstatt diese Informationen fest in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL` Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat umzuwandeln. Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) beim Einrichten auf dem Bereitstellungsserver wird:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3): https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber es funktionierte nicht auf Railway!
  Versuchen Sie, es im nächsten Release zu aktualisieren.
-->

Django benötigt _psycopg2_ zur Arbeit mit Postgres-Datenbanken. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem entfernten Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist gesetzt. Sie können zu Postgres komplett wechseln und dieselbe gehostete Datenbank für die Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen durch Django gehen müssen, auch wenn Django nichts mit ihnen macht. Während dies während der Entwicklung keine Rolle spielt, würde es erhebliche Leistungseinbußen bedeuten, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, um sie direkt vom Webserver oder von einem Content Delivery Network (CDN) aus bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL-Position, von der aus statische Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das das _collectstatic_ Werkzeug von Django alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Sobald sie gesammelt wurden, können sie dann gruppenweise hochgeladen werden, zu welchem Host diese auch immer hosten sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_ Werkzeug von Django nach statischen Dateien durchsuchen soll.

Django-Vorlagen verweisen auf statische Dateistandorte relativ zu einem `static`-Tag (das Sie im Basis-Template sehen können, das in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert wurde), das wiederum der `STATIC_URL` Einstellung zugeordnet ist. Daher können statische Dateien zu jedem Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_ Werkzeug wird verwendet, um statische Dateien in den Ordner zu sammeln, der von der `STATIC_ROOT` Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, indem alle statischen Dateien in der Anwendung an die in `STATIC_ROOT` angegebene Position kopiert werden. `Whitenoise` findet dann die Dateien standardmäßig aus der von `STATIC_ROOT` definierten Position und stellt sie an der durch `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert worden sein (der `STATIC_URL` könnte bereits definiert worden sein, als die Datei erstellt wurde. Es würde keinen Schaden verursachen, aber Sie könnten die vorherige doppelte Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Datei tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) bereitstellen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um statische Dateien in Produktionsumgebungen bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt stellt eine der einfachsten Methoden zur Verfügung, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

Lesen Sie die Dokumentation von [WhiteNoise](https://pypi.org/project/whitenoise/) für eine Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt werden [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die Einstellung `MIDDLEWARE` und fügen Sie das `WhiteNoiseMiddleware` nahe oben in der Liste hinzu, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen verringern (das ist effizienter). Fügen Sie einfach Folgendes am Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts weiter tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig die Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositorys gespeichert werden. Viele Hosting-Dienste installieren automatisch die Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ über die Kommandozeile erstellen (führen Sie den folgenden Befehl im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller Abhängigkeiten oben sollte Ihre **requirements.txt** Datei _mindestens_ die folgenden Elemente aufführen (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen nicht aufgeführten Abhängigkeiten, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder von Cloud-basierten Quellversionskontrollplattformen. Dies kann die Bereitstellung und iterativen Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub zur Speicherung des local library Quellcodes verwenden (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) beim Einrichten Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihrer "reinen" Projektversion zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung bei jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, andere möglicherweise nicht. Angenommen, Sie haben bereits alle Änderungen in den `main`-Zweig auf GitHub gesichert, um ein neues Branch zu erstellen und Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet werden kann.

### Warum PythonAnywhere?

Wir entscheiden uns, PythonAnywhere aus mehreren Gründen zu verwenden:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, allerdings mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, umgezogen, wenn die vorher kostenfreien Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, da wir denken, dass dieser Plan voraussichtlich kostenlos bleiben wird. Wir haben das Railway-Beispiel behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie sich nicht darum kümmern müssen. Nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere erlernen, sind übertragbar.
- Die Service- und Plangegenzahlungen beeinträchtigen uns nicht, wenn wir PythonAnywhere für das Tutorial verwenden. Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<Ihr-Benutzername>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff von Ihren Apps, niedrigen CPU/Bandbreite, keine IPython/Jupyter Notebook-Unterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz, um unsere grundlegende Seite auszuführen!
  - Benutzerdefinierte Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird und kann langsam sein, um neu zu starten. Sie können es für immer laufen lassen, aber Sie müssen die Site alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, jedoch keinen für Postgres. In dieser Demonstration verwenden wir einfach die Standard-Django-SQLite-Datenbank.

PythonAnywhere ist für das Hosting dieser Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, um herauszufinden, ob es [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Benutzeroberfläche können Sie eine Bash-Konsole zu einer Ubuntu Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um das local library GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keinen separaten Postgres-Support. Obwohl wir einen anderen Hosting-Dienst für unsere Datenbank nutzen könnten, verwenden wir einfach die Standard-Django-SQLite-Datenbank, die in der gehosteten Ubuntu-Umgebung erstellt wurde (dort gibt es mehr als genug Platz zur Demonstration der Bibliotheksfunktionen).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles an Übersicht, was Sie zum Einstieg benötigen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur [Plans and pricing](https://www.pythonanywhere.com/pricing/) Seite von PythonAnywhere und klicken Sie auf die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, E-Mail und Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<Ihr_Benutzername>/`.

### Installieren der Bibliothek von GitHub

Als nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen uns den Quellcode der local library von GitHub. Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, sodass sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenmanagement-Bildschirm, indem Sie in der oberen Anwendungsleiste auf **Consoles** klicken.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm des PythonAnywhere-Konsolenmanagements mit der Schaltfläche für den Start einer neuen Bash-Konsole](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole zur späteren Wiederverwendung gespeichert wird, zusammen mit allen ihren Protokollen. Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" zur Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist exakt derselbe Prozess wie beschrieben in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment). Wir hätten die Umgebung beliebig benennen können und wir können sie mit den folgenden Befehlen deaktivieren und wieder aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einen Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto nutzen, können Sie Ihren Account nur `<Ihr_pythonanywhere_Benutzername>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den lokalen Bibliotheksquellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` einfügen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt` Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie während der Entwicklung).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [Konfigurieren einer Postgres-Datenbank](#provisionieren_und_verbinden_einer_postgres_sql-datenbank) und eine Verbindung durch das Setzen der `DATABASE_URL` Umgebungsvariable herstellen.
   > Es ist wichtig, dass `migrate` _nach_ dem Konfigurieren der zu nutzenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Speicherort, an dem sie [in der Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Site (wie im Abschnitt [Django-Admin-Seite](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Richten Sie die Web-App ein

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie gefunden und als Web-App verwendet werden können.

1. Navigieren Sie zum Bereich _Web_ und wählen Sie den **Link Add a new web app** aus:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der Assistent _Create new web app_ wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um den Punkt zur Konfiguration des Web-App-Domainnamens zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<Benutzername>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zur Festlegung des Domainnamens für neue Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm zur Auswahl eines Python-Webframeworks **Manuelle Konfiguration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des verwendeten Webframeworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns eine vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird. Das ist jetzt nicht so wichtig, wäre es jedoch, wenn wir mehrere Sites hosten würden, möglicherweise mit unterschiedlichen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm zur Auswahl einer Python-Version **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemein sollte die neueste Version von Python gewählt werden, die von der verwendeten Django-Version erlaubt ist.

5. Im Bildschirm zur manuellen Konfiguration wählen Sie **Next** (der Bildschirm erläutert lediglich einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung, die die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie angezeigt angezeigt. Der Bildschirm hat einen **Reload** Knopf, den Sie verwenden können, um die Webanwendung neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben. Wie am Bildschirm vermerkt, müssen Sie den Knopf **Run until 3 months from today** drücken, um die Site für weitere drei Monate und fortlaufend am Leben zu halten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im Tab _Web_ zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei aus. Diese hat einen Namen im Format `/var/www/<Benutzername>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

   ```py
   import os
   import sys

   path = '/home/hamishwillee/hamishwillee.pythonanywhere.com'
   if path not in sys.path:
       sys.path.append(path)

   os.environ['DJANGO_SETTINGS_MODULE'] = 'locallibrary.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die local library Anwendung zu finden. PythonAnywhere erwartet, dass sich diese Datei an diesem Ort befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im Tab _Web_ zum Abschnitt "Virtuelle Umgebung". Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der im vorherigen Abschnitt erstellten virtuellen Umgebung ein. Falls Sie sie, wie vorgeschlagen, "env_local_library" genannt haben, wird der Pfad sein: `/home/<Benutzername>/.virtualenvs/env_local_library`

   ![PythonAnywhere Abschnitt für virtuelle Umgebung im Web-Tab](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im Tab _Web_ zum Abschnitt "Statische Dateien".

   ![PythonAnywhere Abschnitt für statische Dateien im Web-Tab](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein. Dies ist der `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2), und spiegelt den Speicherort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_-Tab den **Reload** Knopf, um die Site neu zu starten. Wählen Sie dann den Site-URL-Link, um die Live-Site zu öffnen:

![PythonAnywhere Bildschirm im Web mit hervorgehobener Schaltfläche zum Öffnen der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Sicherheitsfehler von Django, der angezeigt wird, da unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit vollständigem Traceback einer ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellen jedoch ein Sicherheitsrisiko in einer bereitgestellten Site dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Art der Protokollierung auf der Live-Site mithilfe von [Umgebungsvariablen](#umgebungsvariablen_auf_pythonanywhere_verwenden) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL zu inkludieren:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren. Wenn Sie Ihr Bash-Prompt im Ordner `<benutzername>.pythonanywhere.com` verwenden und Sie die Änderungen in den Hauptzweig gepusht haben, können Sie sie beim Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie den **Restart** Knopf im `Web`-Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt die Startseite der Site öffnen und anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto einloggen und Autoren, Genres, Bücher usw. erstellen können, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Umgebungsvariablen auf PythonAnywhere verwenden

Im Abschnitt [Ihre Website für die Veröffentlichung bereit machen](#ihre_website_für_die_veröffentlichung_bereit_machen) haben wir die Anwendung so verändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env** Datei in Produktion konfiguriert werden kann.

Konkret haben wir die Bibliothek so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um das Debug-Protokollieren zu reduzieren, das dem Benutzer angezeigt wird, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies nicht in diesem Beispiel).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab. Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen. Wir sind bereits dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<benutzer-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben. Zum Beispiel, um `DJANGO_DEBUG` auf False im Bash-Prompt zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel einen Genre erstellen, dann die Nummer in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle einer detaillierten Debug-Nachverfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.app/) installiert werden kann.

### Warum Railway?

> [!WARNING]
> Railway hat kein komplett kostenloses Starter-Tier mehr. Wir haben diese Anleitungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um die meisten Infrastrukturen, sodass Sie es nicht tun müssen. Nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnellen und sanften Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und die Skalierung Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um herauszufinden, ob Railway [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway die entsprechende Umgebung und Abhängigkeiten einrichten und auch verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in einer Anzahl von Textdateien an:

- **runtime.txt**: gibt die verwendete Programmiersprache und Version an.
- **requirements.txt**: listet die für Ihre Site benötigten Python-Abhängigkeiten, einschließlich Django, auf.
- **Procfile**: Eine Liste der auszuführenden Prozesse, um die Webanwendung zu starten. Für Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden. Zum Beispiel kann eine Anwendung, die eine Datenbank benutzt, die Adresse mit der Variable `DATABASE_URL` erhalten. Der Datenbankdienst kann entwedera von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und über ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli)-Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in einem Git-Repository ablegen, die oben genannten Dateien hinzufügen, sich mit einem Datenbank-Add-on integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben. Sobald wir das alles gemacht haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alle Übersicht, die Sie zum Einstieg benötigen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile` und eine `runtime.txt` Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Test- und Arbeitsabläufe, die wir bereits gelernt haben, weiterhin zu nutzen.

#### Procfile

Eine _Procfile_ ist der Einstiegspunkt für die Webanwendung. Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repo und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:` Präfix sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Dann rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den von der `STATIC_ROOT` Projekteinstellung festgelegten Ordner zu sammeln (siehe Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten). Schließlich starten wir den _gunicorn_ Prozess, einen beliebten Webanwendungsserver, dem Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**) übergeben werden.

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ zu umfassen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können den Procfile auch verwenden, um Arbeiterprozesse zu starten oder andere nicht-interaktive Aufgaben vor der Bereitstellung auszuführen.

#### Laufzeit

Die **runtime.txt** Datei, falls definiert, sagt Railway, welche Version von Python verwendet werden soll. Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede minor Python-Laufzeitversion. Sie werden im Allgemeinen die am nächsten unterstützte Version zu dem von Ihnen angegebenen Wert verwenden.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie weitergehen, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie durch keine der oben vorgenommenen Änderungen beschädigt wurde. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, ob die Site auf Ihrem Browser weiterhin wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Schieben Sie als nächstes die Änderungen zu GitHub. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert sind) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann anschließend und mergen Sie die PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um Railway nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur [railway.app](https://railway.app/) und klicken Sie im oberen Menü auf den **Login** Link.
- Wählen Sie im Popup GitHub, um mit Ihren GitHub-Anmeldedaten einzuloggen.
- Sie müssen dann möglicherweise zu Ihrem E-Mail gehen und Ihr Konto verifizieren.
- Dann sind Sie auf das Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Auf Railway von GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst im oberen Menü der Site die Option **Dashboard**, dann den Knopf **New Project**:

![Railway-Website-Dashboard mit neuem Projektknopf](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Vielzahl von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während des Setups mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<Benutzername>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt einen Dialog zur Auswahl eines vorhandenen GitHub-Repos oder neuen an](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - auswählen bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und installiert Ihr Projekt und zeigt den Fortschritt in der Bereitstellung an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird immer noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Sicherheitsfehler von Django, der angezeigt wird, da unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit vollständigem Traceback einer ungültigen HTTP_HOST-Header](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellen jedoch ein Sicherheitsrisiko in einer bereitgestellten Site dar. Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL zu inkludieren:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird automatisch Ihre Anwendung aktualisieren und neu bereitstellen).

### Provisionieren und Verbinden einer Postgres SQL-Datenbank

Nun müssen wir eine Postgres-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugänglich ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank auch in einem eigenen separaten Projekt erstellen können.

Auf Railway wählen Sie die Option **Dashboard** aus dem oberen Menü der Site und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstdetails zu setzen). Der Knopf **Settings** kann ausgewählt werden, um projektweite Einstellungen zu ändern. Wählen Sie den **New** Knopf, der verwendet wird, um dem Projekt Dienste hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche Neuer Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie aufgefordert werden, den neuen Diensttyp hinzuzufügen:

![Railway-Projekt - wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen

![Railway-Projekt - wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt einrichten. Nach Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den _Variables_-Tab. Wählen Sie **New Variable** und geben Sie dann im _Variablenname_-Feld **Referenz hinzufügen** ein. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit locallibrary sie als Umgebungsvariable lesen kann).

![Railway-Website-Bildschirm Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variable Referenz hinzuzufügen und schließlich **Bereitstellen** (dies erscheint in einem Popup). Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann ihren Variablentab und die Variable kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie es lokal. Beachten Sie jedoch, dass es noch keinen Weg gibt, die Bibliothek mit Daten zu befüllen, da wir noch keinen Superuser-Account erstellt haben. Wir werden dies mit dem [CLI](https://docs.railway.app/guides/cli)-Tool auf unserem lokalen Computer tun.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anleitungen hier](https://docs.railway.app/guides/cli) folgen.

Sobald der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers zu einem zugeordneten Railway-Projekt (ohne es auf GitHub hochzuladen) und das lokale Ausführen Ihres Django-Projekts unter Verwendung derselben Einstellungen wie auf dem Produktionsserver. Wir zeigen diese in den nächsten Abschnitten.

Sie erhalten eine Liste aller möglichen Befehle, indem Sie folgendes im Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie durch das System ausgeloggt werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einrichten eines Superusers

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django-Tutorial Teil 4: Django-Admin-Seite > Erstellen eines Superusers](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben). Railway bietet kein direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht in der [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktions_-Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal unter Verwendung derselben Umgebungsvariablen wie der Produktionsserver auszuführen, einschließlich des Datenbankverbindungsstrings.

Öffnen Sie zuerst ein Terminal oder eine Kommandoprompt in einem Git-Clone Ihres locallibrary-Projekts. Melden Sie sich dann mit dem `login` oder `login --browserless` Befehl bei Ihrem Browser-Konto an (folgen Sie den daraus resultierenden Eingabeaufforderungen und Anweisungen vom Client oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugeordneten Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie möglicherweise aufgefordert werden, ein bestimmtes Projekt auszuwählen/einzugeben:

```bash
railway link
```

Nun, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie Namen, E-Mail und Passwort nach Bedarf ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website (`https://[Ihre-URL].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, wie im [Django-Tutorial Teil 4: Django-Admin-Seite](/de/docs/Learn/Server-side/Django/Admin_site) gezeigt.

### Festlegen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Site sicher zu machen. Insbesondere müssen wir das Debug-Protokollieren deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Ihre Website bereit für die Veröffentlichung machen](#ihre_website_für_die_veröffentlichung_bereit_machen) (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`) durchgeführt.

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den _Variables_ Tab. Dieser sollte bereits das `DATABASE_URL` wie unten gezeigt haben.

![Railway - Hinzufügen einer neuen Variablen Bildschirm](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren. Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem Geheimwert ein (dann **Add**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den Logs-Befehl, um das Ende der Logs zu zeigen (ein volleres Log ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen als dies liefert, müssen Sie beginnen, sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu beschäftigen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in Produktionsumgebungen sowie der Serie von Tutorials zur Arbeit mit Django. Wir hoffen, dass sie nützlich waren. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) überprüfen.

Der nächste Schritt besteht darin, unsere letzten paar Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Störteben von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumente

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Digital Ocean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)

  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Dateien](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Gleichzeitigkeits- und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Einschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Bereitstellen von Python- und Django-Apps auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
