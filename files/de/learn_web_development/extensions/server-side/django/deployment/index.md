---
title: "Django Tutorial Teil 11: Django in Produktion bereitstellen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, sodass Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden könnten, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite für die Produktivumgebung bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorials vollständig absolvieren, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie irgendwo hosten, das öffentlicher und besser zugänglich ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, indem Sie den Django-Entwicklungswebserver verwendet haben, um Ihre Seite an den lokalen Browser/das lokale Netzwerk zu teilen und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt haben, die Debug- und andere private Informationen freigeben. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting aller statischen Dateien auswählen.
- Eine Infrastruktur auf Produktionsniveau einrichten, um Ihre Website auszuliefern.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereit zu machen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch ausführen. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver vermittelt.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, Lastausgleich, etc. haben.

Der Server-Computer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher, etc.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von fern zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, vollständigere Umgebungen auszuwählen, möglicherweise einschließlich eines vollständigen Django- und Web-Server-Setups.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Webseite sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Idee, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um die meisten Ihrer Produktionsumgebung kümmern (Webserver, Anwendungsserver, Lastausgleicher), da die Host-Plattform diese für Sie übernimmt - zusammen mit dem größten Teil dessen, was Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung recht einfach, weil Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erweiterte Flexibilität, die IaaS bietet, PaaS vorziehen, während andere die reduzierte Wartungsbelastung und das einfachere Skalieren von PaaS schätzen werden. Wenn Sie anfangen, ist die Einrichtung Ihrer Webseite auf einem PaaS-System viel einfacher, und daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy, etc. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, entweder aktiv Django zu unterstützen oder gut mit Django zusammenzuarbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) - um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

Einige der Dinge, die Sie bei der Auswahl eines Hosts beachten sollten:

- Wie ausgelastet Ihre Website voraussichtlich sein wird und die Kosten für Daten und Computerressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützung für horizontales (Hinzufügen weiterer Maschinen) und vertikales (Upgrade auf leistungsfähigere Maschinen) Skalierbarkeit und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und somit, wo der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallleistung des Hosts.
- Bereitgestellte Tools zur Verwaltung der Seite - sind sie einfach zu bedienen und sind sie sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Manche Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preiskategorien oder bieten nur eine kleine Menge an Speicher.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, die Sie ansonsten bezahlen müssten.
- Ob der "kostenlose" Tarif, auf den Sie sich verlassen, mit der Zeit abläuft, und ob die Kosten für den Umstieg auf einen teureren Tarif bedeuten, dass Sie von Anfang an besser einen anderen Dienst hätten verwenden sollen!

Die gute Nachricht ist, dass es viele Websites gibt, die "kostenlose" Computerumgebungen anbieten, die für Evaluierungs- und Testzwecke gedacht sind, wenn Sie anfangen. Diese sind in der Regel relativ ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Trotzdem sind sie großartig für die Prüfung von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen leichten Übergang zu mehr bezahlten Ressourcen bieten, wenn Ihre Website geschäftiger wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis" Tarifoption an, die für kleine Produktionsseiten gedacht ist und nützlichere Ebenen von Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die einen relativ preiswerten Basistarif (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Bereitmachen Ihrer Website für die Veröffentlichung

Die mit _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung einfacher wird. Viele der in **settings.py** angegebenen Django-Projekteinstellungen sollten entweder aus Sicherheits- oder Leistungsgründen in der Produktion anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/geheime Debug-Spur und variable Informationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheimen Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer nur für den Server zugänglichen Datei gelesen werden.
Ändern Sie die _LocalLibrary_-Anwendung so, dass wir unsere `SECRET_KEY` und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, zurückgreifen auf in einer **.env** Datei im Stammverzeichnis definierte Werte und zuletzt die Standardwerte in der Konfigurationsdatei verwenden.
Dies ist sehr flexibel, da es jede vom Hostingserver unterstützte Konfiguration ermöglicht.

Um Umgebungswerte aus einer Datei zu lesen, verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert wurde, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Stamm der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY` Konfiguration und fügen die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel spezifiziert, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "leaks", weil Sie ihn in der Produktion nicht verwenden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG` Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert des `DEBUG` wird standardmäßig `True` sein, wird aber nur `False` sein, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable unter Linux mit folgendem Befehl auf "False" setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Prüfliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch einige dieser Einstellungen mit dem Terminalbefehl unten auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bedienen von Django WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-Virtuellen Umgebung befinden, die bei der [Einrichtung der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den `workon [name-of-virtual-environment]` Befehl).
Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie bei einigen beliebten Hosting-Diensten, wie Heroku, nicht verwendet werden, da diese keinen permanenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Voraussetzung für SQLite).
Auch wenn das uns für die Beispielbereitstellungen möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft, und die von der Django-Bibliotheksanwendung über eine als Umgebungsvariable übergebene Adresse aufgerufen wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die Datenbank-Verbindungsinformationen werden an Django über eine als `DATABASE_URL` genannte Umgebungsvariable übermittelt.
Anstatt diese Informationen hart in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL` Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden:

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
Der Wert `conn_max_age=500` macht die Verbindung persistent, was weit effizienter ist, als die Verbindung für jeden Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber funktionierte nicht auf Railway!
  Versuchen Sie es beim nächsten Release zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die für Railway eingerichtet sind, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellen statischer Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript, etc.) zu bedienen.
Dies ist ineffizient für statische Dateien, da die Anfragen durch Django gehen müssen, obwohl Django nichts damit macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es einen erheblichen Leistungseinbruch, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir normalerweise die statischen Dateien von der Django-Webanwendung, was es erleichtert, sie direkt vom Webserver oder einem Content Delivery Network (CDN) zu bedienen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, beispielsweise in einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das das _collectstatic_ Tool von Django alle in unseren Vorlagen referenzierten statischen Dateien sammelt. Sobald sie gesammelt sind, können diese dann gruppenweise dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_ Tool von Django auf statische Dateien durchsuchen soll.

In den Django-Vorlagen wird auf statische Dateipfade relativ zu einem `static` Tag verwiesen (Sie können dies in der Basistemplate sehen, die in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#The_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL` Einstellung verweist.
Statische Dateien können daher an jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in das Verzeichnis zu sammeln, das durch die `STATIC_ROOT` Projekteinstellung definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstaticmethod_ durchgeführt werden, bevor die Anwendung hochgeladen wird, indem alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` festgelegten Ort kopiert werden.
`Whitenoise` findet dann die Dateien aus dem in `STATIC_ROOT` definierten Ort (standardmäßig) und stellt sie an der Basis-URL bereit, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Das `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (das `STATIC_URL` könnte bereits definiert sein, wenn die Datei erstellt wurde. Während es keinen Schaden verursacht, könnten Sie auch die vorherige doppelte Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Tatsächlich erledigen wir das Bereitstellen der Dateien mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/), die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Wege, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Methoden an, um statische Assets direkt von Gunicorn in der Produktion zu bedienen.

Schauen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode für die Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ bei Verwendung des Projekts werden [hier](https://whitenoise.readthedocs.io/en/stable/django.html) beschrieben (und unten wiederholt):

#### Installieren Sie whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` nahe am Anfang der Liste, direkt unter `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn diese bereitgestellt werden (dies ist effizienter).
Fügen Sie einfach das folgende am Ende von **/locallibrary/settings.py** hinzu:

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

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch die Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ über die Befehlszeile erstellen (führen Sie das Folgende im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die hier nicht aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Das kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten GitHub bereits verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung festgelegt).

Dies ist ein guter Zeitpunkt, um eine Sicherung Ihres "unveränderten" Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sein könnten, könnten andere es nicht sein.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen auf den `main`-Zweig auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Wir entscheiden uns aus mehreren Gründen für die Verwendung von PythonAnywhere:

- PythonAnywhere bietet einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass der Plan für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und nun PythonAnywhere gehostet, wobei migriert wurde, als die vorher kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, da wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir behalten auch das Railway-Beispiel bei, das nicht kostenlos ist, zum Vergleich und weil es uns erlaubt, Funktionen wie die Integration mit einer auf einem anderen Dienst laufenden Postgres-Datenbank leichter zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie dies nicht müssen.
  Sich nicht um Server, Lastausgleicher, Reverse Proxy etc. kümmern zu müssen, macht es viel einfacher anzufangen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Der Dienst und die Planbeschränkungen beeinflussen uns nicht besonders bei der Verwendung von PythonAnywhere für das Tutorial.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, beschränkten ausgehenden Internetzugang von Ihren Apps, geringe CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es ist genug Platz, damit unsere Basisseite läuft!
  - Benutzerdefinierte Domains werden derzeit nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht in Gebrauch ist, kann also langsam neu starten.
    Sie können sie jedoch für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres.
    In dieser Demonstration werden wir einfach die standardmäßige SQLite-Datenbank von Django verwenden.

PythonAnywhere ist für das Hosting dieser Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und für andere Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser local library GitHub Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keinen separaten Postgres-Support.
Obwohl wir einige andere Hosting-Dienste für unsere Datenbank verwenden könnten, werden wir einfach die standardmäßig von Django in der gehosteten Ubuntu-Umgebung erstellte SQLite-Datenbank verwenden (es gibt mehr als genug Speicherplatz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist der gesamte Überblick, den Sie brauchen, um loszulegen.

### Erhalten eines PythonAnywhere Kontos

Um PythonAnywhere zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und klicken Sie auf die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und klicken dann auf **Register**.
- Sie werden dann angemeldet und zu den PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<dein_benutzername>/`.

### Installation der Bibliothek von GitHub

Als Nächstes werden wir ein Bash-Fenster öffnen, eine virtuelle Umgebung einrichten und den lokalen Bibliotheksquellcode von GitHub abrufen.
Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Bildschirm zur Konsolenverwaltung, indem Sie **Consoles** in der oberen Anwendungsleiste wählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirmabbildung des PythonAnywhere Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für Ihre spätere Wiederverwendung zusammen mit ihrer gesamten Historie gespeichert wird.
   Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-Virtuelle Umgebung namens "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Vorgang wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) beschrieben.
   Wir hätten die Umgebung nach Belieben benennen können und können sie mit den untenstehenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Als Nächstes holen Sie sich die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem nach ihrer Site-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den LocalLibrary-Quellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen passenden benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Richten Sie eine SQLite-Datenbank auf dem Hosting-Computer ein und konfigurieren Sie sie (genau wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [Eine Postgres-Datenbank bereitstellen und verbinden](#eine_postgres_sql-datenbank_bereitstellen_und_verbinden) und durch Setzen der `DATABASE_URL`-Umgebungsvariable darauf zugreifen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet werden soll, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#bereitstellen_statischer_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Seite (wie im Abschnitt [Django-Administrator-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Seite zu testen.

### Web-App einrichten

Nachdem Sie die LocalLibrary-Quellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie die App gefunden und als Web-App verwendet werden soll.

1. Navigieren Sie zum _Web_-Bereich der Seite und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere Abschnitt "Web" mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domain-Namens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere Aufforderung zum Einstellen des Domain-Namens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere Aufforderung zur Auswahl des Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umgebung vollständig zu steuern.
   Das ist momentan nicht so wichtig, aber würde es, wenn wir mehrere Seiten mit möglicherweise unterschiedlichen Python- und/oder Django-Versionen hosten würden.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ die Option **3.10**

   ![PythonAnywhere Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner gesprochen sollten Sie die neueste von der verwendeten Django-Version erlaubte Python-Version wählen.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ die Option **Next** (der Bildschirm erklärt nur einige der Optionen zur Konfiguration)

   ![PythonAnywhere Aufforderung mit Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt.
   Der Bildschirm hat eine **Reload** Schaltfläche, die Sie verwenden können, um die Web-App neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** drücken, um die Seite für weitere drei Monate (und fortlaufend) am Leben zu halten.

   ![PythonAnywhere Konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im _Web_ Tab zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, den Gunicorn-Server zu helfen, die LocalLibrary-Anwendung zu finden.
   PythonAnywhere erwartet, dass sich diese Datei an dieser Stelle befindet, weswegen die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im _Web_ Tab zum Abschnitt "Virtualenv".
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad zur im vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie sie wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad lauten: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env Bereich des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im _Web_ Tab zum Abschnitt "Static files".

   ![PythonAnywhere Static files Bereich des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL** Link und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2), und widerspiegelt den Speicherort, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_ Tab die Schaltfläche **Reload**, um die Seite neu zu starten.
   Wählen Sie dann den URL-Link der Seite, um die Live-Seite zu starten:

![PythonAnywhere Web-Bildschirm mit hervorgehobenem Link, um die Seite zu starten](python_anywhere_web_open_site.png)

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, werden Sie zu diesem Zeitpunkt einen Fehlerbildschirm sehen, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Detaillierte Fehlerseite mit vollständigem Rückverfolgung einer ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, jedoch ist ein Sicherheitsrisiko auf einer bereitgestellten Seite.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Ebene der Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um die URL Ihrer PythonAnywhere-Seite einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungs-CSRF Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übergeben Sie sie an Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Fenster im Ordner `<user_name>.pythonanywhere.com`, und Sie haben die Änderungen in den Haupt-Branch gepusht, dann könnten Sie sie im Bash-Terminal mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart** Taste auf dem `Web` Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Seite aktualisieren, sollte sie nun geöffnet werden und die Startseite der Seite anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitmachen Ihrer Website für die Veröffentlichung](#bereitmachen_ihrer_website_für_die_veröffentlichung) haben wir die Anwendung so geändert, dass sie mithilfe von Umgebungsvariablen oder Variablen in einer **.env** Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie festlegen können:

- `DJANGO_DEBUG=False`, um die angezeigte Debug-Verfolgung beim Auftreten eines Fehlers zu reduzieren.
- `DJANGO_SECRET_KEY`, um einen geheimen Wert in der Produktion festzulegen.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir nicht in diesem Beispiel).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind dafür bereits eingerichtet, daher müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Fenster.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` auf `False` in der Bash-Konsole zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können überprüfen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (z.B. ein Genre erstellen und dann die Nummer in der URL-Leiste inkrementieren, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine Meldung "Nicht gefunden" anstelle einer detaillierten Debug-Verfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt liefert eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen komplett kostenlosen Starter-Tarif mehr.
> Wir haben diese Anleitung behalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway übernimmt den Großteil der Infrastruktur, so dass Sie dies nicht müssen.
  Sich nicht um Server, Lastausgleich, Reverse Proxies, etc., kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und einfacheren Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die man bei der Verwendung von Railway lernt, sind übertragbar.
  Während Railway einige exzellente neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway die passende Umgebung und die Abhängigkeiten einrichten können und auch verstehen, wie die Anwendung gestartet wird.
Für Django-Apps stellen wir diese Informationen in einer Reihe von Textdateien bereit:

- **runtime.txt**: gibt die Programmiersprache und die zu verwendende Version an.
- **requirements.txt**: listet die benötigten Python-Abhängigkeiten für Ihre Site, einschließlich Django, auf.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden, um die Webanwendung zu starten.
  Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi` Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe von in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellten Informationen selbst konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank nutzt, die Adresse mithilfe der Variable `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Befehlszeilen-Interface (CLI)](https://docs.railway.com/guides/cli) Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von einem lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eines der nützlichsten Funktionen ist, dass Sie das CLI dazu verwenden können, Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unser Django-Webanwendungsprojekt in ein Git-Repository packen, die oben genannten Dateien hinzufügen, uns mit einem Database-Add-On integrieren und Änderungen vornehmen, um statische Dateien richtig zu handhaben.
Sobald wir all dies erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client abrufen und unsere Webseite installieren.

Das ist der gesamte Überblick, den Sie brauchen, um loszulegen.

### Aktualisieren der App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen nicht verhindern werden, dass Sie weiterhin die lokalen Test- und Workflows verwenden, die wir bereits gelernt haben.

#### Procfile

Eine _Procfile_ ist der "Einstiegspunkt" der Web-Anwendung.
Es listet die Befehle auf, die Railway ausführen wird, um Ihre Seite zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Stamm Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass es sich um einen Webprozess handelt und HTTP-Verkehr gesendet werden kann.
Dann rufen wir den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in das durch die `STATIC_ROOT` Projektdefinition festgelegte Verzeichnis zu sammeln (siehe den Abschnitt [Bereitstellen statischer Dateien in der Produktion](#bereitstellen_statischer_dateien_in_der_produktion) unten).
Zuletzt starten wir den _gunicorn_ Prozess, einem beliebten Webanwendungsserver, dem wir Konfigurationsinformationen im Modul `locallibrary.wsgi` übergeben (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Beachten Sie, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzuschließen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Workerprozesse zu starten oder andere nicht interaktive Aufgaben vor der Bereitstellung zu erledigen.

#### Runtime

Die **runtime.txt** Datei, wenn definiert, teilt Railway mit, welche Version von Python zu verwenden ist.
Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht notwendigerweise jede Python-Runtime-Minder-Version.
> Sie verwenden im Allgemeinen die nächstgelegene unterstützte Version zum von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Seite erneut lokal und stellen Sie sicher, dass sie nicht durch eine der oben genannten Änderungen unterbrochen wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann die Seite, damit sie in Ihrem Browser so funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Als Nächstes `pushen` wir die Änderungen zu GitHub.
Im Terminal (nachdem wir zu unserem lokalen Repository navigiert sind) geben Sie die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann den PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erhalten eines Railway Kontos

Um Railway zu nutzen, müssen Sie zunächst ein Konto einrichten:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie im oberen Toolbar auf den **Login** Link.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie zu Ihrer E-Mail-Adresse gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.com Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zunächst die **Dashboard** Option aus dem oberen Menü der Seite und dann die **New Project** Schaltfläche:

![Railway Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Option, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, sowie eine Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway Website Bildschirm - Bereitstellung](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway Website-Bildschirm zeigt einen Dialog zur Auswahl eines vorhandenen GitHub-Repositorys oder zur Auswahl eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** wählen.

![Bestätigungsbildschirm - Auswahl Bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte Deployments an.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten stehenden.

![Railway Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf den Site-URL-Link (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert immer noch nicht, da die Einrichtung nicht abgeschlossen ist).

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, werden Sie zu diesem Zeitpunkt einen Fehler auf dem Debug-Bildschirm sehen, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Detaillierte Fehlerseite mit vollständigem Rückverfolgung einer ungültigen HTTP_HOST-Header](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, sie ist jedoch ein Sicherheitsrisiko auf einer bereitgestellten Seite.
> Wir zeigen Ihnen, wie Sie diese deaktivieren, sobald die Seite läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um die URL Ihrer Railway-Seite einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übergeben Sie sie an Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Eine Postgres SQL-Datenbank bereitstellen und verbinden

Als Nächstens müssen wir eine Postgres-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Seite jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugänglich ist).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen könnten.

Bei Railway wählen Sie die **Dashboard** Option aus dem oberen Menü der Seite und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Service für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die **Settings**-Taste kann ausgewählt werden, um Projekteinstellungen global zu ändern.
Wählen Sie die **New**-Schaltfläche, die verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobenem neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database** aus, wenn Sie gefragt werden, welche Art von Dienst hinzugefügt werden soll:

![Railway-Projekt - Wählen Sie Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen

![Railway Projekt - Wählen Sie Postgres als neuen Dienst aus](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste im Projektansicht.

![Railway Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** und klicken Sie dann im _Variable name_ Feld auf **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variable, die wir eingerichtet haben, um die locallibrary als Umgebungsvariable zu lesen).

![Railway-Website Bildschirm Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add** um die Variablereferenz hinzuzufügen und schließlich **Deploy** (dies wird in einem Popup erscheinen).
Beachten Sie, dass Sie auch die Postgres-Datenbank geöffnet, dann deren Variablentab, und die Variable kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden, wie es lokal war.
Beachten Sie jedoch, dass es momentan keine Möglichkeit gibt, die Bibliothek mit Daten zu befüllen, da wir noch keinen Superuser-Konto erstellt haben.
Das erledigen wir mit dem [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer.

### Installieren des Clients

Laden Sie die Railway-Client-Anwendung für Ihr lokales Betriebssystem herunter und installieren Sie sie, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigsten Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein verknüpftes Railway-Projekt (ohne es auf GitHub hochzuladen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver.
Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie die folgende Eingabeaufforderung im Terminal eingeben:

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Konfigurieren eines Superusers

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser` Befehl gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django Tutorial Teil 4: Django-Administrator-Site > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, weil es interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es zur _Produktion_ Datenbank verbunden ist.
Der Railway Client macht dies einfach, indem er ein Mechanismus bereitstellt, um lokale Befehle aufzurufen, die dieselben Umgebungsvariablen wie der Produktionsserver, einschließlich der Datenbank-Verbindungszeichenfolgen, verwenden.

Öffnen Sie zuerst ein Terminal oder eine Befehlseingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts.
Melden Sie sich dann bei Ihrem Browser-Konto mit dem Befehl `login` oder `login --browserless` an (befolgen Sie alle resultierenden Aufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie ein bestimmtes Projekt auswählen/eintippen müssen, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt jetzt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf, indem Sie Name, E-Mail und Passwort eingeben, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[Your-url].railway.app/admin`) und die Datenbank zu füllen, genau wie in [Django Tutorial Part 4: Django-Administrator-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)).

### Setzen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Seite zu sichern.
Insbesondere müssen wir Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde bei [Bereitmachen Ihrer Website für die Veröffentlichung](#bereitmachen_ihrer_website_für_die_veröffentlichung) (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`) erledigt.

Öffnen Sie das Informationsfenster für das Projekt und wählen Sie die Registerkarte _Variables_.
Diese sollte bereits die `DATABASE_URL` haben, wie unten gezeigt.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit ist es, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Die endgültige Menge Variablen sollte folgendermaßen aussehen:

![Railway Bildschirm, der alle Projektvariablen zeigt](railway_variables_all.png)

### Fehlerbehebung

Der Railway Client bietet den Befehl logs, um die Logtail anzuzeigen (ein umfassenderes Log ist für jedes Projekt auf der Website verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies liefern kann, müssen Sie möglicherweise anfangen sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu befassen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch die Reihe von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Beurteilungsaufgabe abzuschließen.

## Siehe auch

- [Bereitstellen von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django Dokumente)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django Dokumente)
  - [Bereitstellung mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django Dokumente)
  - [Django mit Apache und mod_wsgi verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django Dokumente)
  - [Django mit Gunicorn verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django Dokumente)

- Railway Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellen](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku Dokumentation (ähnliche Aufbaukonzepte)

  - [Konfiguration von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku Dokumente)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku Dokumente)
  - [Django und Statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku Dokumente)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku Dokumente)
  - [Dynos und Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku Dokumente)
  - [Bereitstellung von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
