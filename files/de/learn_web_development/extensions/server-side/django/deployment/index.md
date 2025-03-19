---
title: "Django Tutorial Teil 11: Bereitstellung von Django in der Produktion"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliotheksmitarbeitern und -mitgliedern über das Internet zugänglich ist. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host finden können, um Ihre Website bereitzustellen, und was Sie tun müssen, damit Ihre Website für die Produktion bereit ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorhergehenden Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Kennenlernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug", um öffentlich getestet zu werden), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, indem Sie den Django-Entwicklungswebserver verwendet haben, um Ihre Site mit dem lokalen Browser/Netzwerk zu teilen, und Ihre Website mit unsicheren Entwicklungseinstellungen ausgeführt, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App auswählen.
- Eine Umgebung zum Hosten statischer Dateien auswählen.
- Eine produktionsreife Infrastruktur für den Betrieb Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen zur Auswahl eines Hosting-Standorts, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel dafür, wie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installiert wird.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Gebrauch ausführen. Die Umgebung umfasst:

- Computerhardware, auf der die Website ausgeführt wird.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse-Proxy, einen Lastenausgleich usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum/Ihren Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicherspeicher usw.) und Internetverbindung zu einem bestimmten Preis.

Hardware, die auf diese Weise remote zugänglich ist, wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Web-Server-Installation enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen nicht vertrauten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie genau die Komponenten erhalten, die Sie möchten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleich) kümmern, da die Hostplattform diese für Sie übernimmt – zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS über PaaS wählen, während andere den geringeren Wartungsaufwand und die einfachere Skalierbarkeit von PaaS schätzen werden. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website in einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zum Einrichten einer Django-Website mit unterschiedlichen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen (das ist nicht relevant, wenn Sie sich für PaaS entscheiden). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die dafür bekannt sind, entweder aktiv Django zu unterstützen oder gut damit zu funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website vermutlich besucht wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützungsniveau für horizontales (Hinzufügen weiterer Maschinen) und vertikales (Upgrade auf leistungsfähigere Maschinen) Skalieren sowie die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und daher wo der Zugang wahrscheinlich am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website – sind sie einfach zu bedienen und sind sie sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von Stunden „Live-Zeit“ an oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich stützen, im Laufe der Zeit abläuft und ob die Kosten für den Übergang zu einer teureren Stufe bedeuten, dass Sie besser bedient worden wären, wenn Sie von Anfang an einen anderen Dienst verwendet hätten!

Die gute Nachricht ist, dass es bei der Einführung eine ganze Reihe von Websites gibt, die „kostenlose“ Computerumgebungen bereitstellen, die für Evaluierungs- und Testzwecke gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkte/-begrenzte Umgebungen und Sie müssen sich darüber im Klaren sein, dass sie möglicherweise nach einem Einführungszeitraum ablaufen oder andere Einschränkungen aufweisen.
Sie sind jedoch großartig zum Testen von ressourcenbeschränkten Websites in einer gehosteten Umgebung und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihre Website belebter wird.
Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine „Basic“-Stufe an, die für kleine Produktionssites gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige grundlegende Computing-Stufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit der wichtigste Faktor ist.

## Ihre Website bereiten

Die [Django Skeleton Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den Tools _django-admin_ und _manage.py_ erstellt wurde, ist darauf konfiguriert, die Entwicklung zu erleichtern. Viele der Django-Projekteinstellungen (in **settings.py** angegeben) sollten in der Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion als `False` festgelegt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer serverseitigen Datei gelesen werden.
Lassen Sie uns die _LocalLibrary_-Anwendung ändern, sodass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, falls diese definiert sind. Andernfalls fallen wir auf Werte zurück, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und zuletzt auf die Standardwerte in der Konfigurationsdatei.
Dies ist sehr flexibel, da es jede von den Hosting-Servern unterstützte Konfiguration ermöglicht.

Zum Lesen der Umgebungswerte aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert ist, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, sofern definiert.

> [!NOTE]
> Alle Werte, die Sie **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit es nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „leakt“, da Sie ihn in der Produktion nicht verwenden werden).

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

Der Wert von `DEBUG` ist standardmäßig `True`, aber nur dann `False`, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Daher müssen wir Zeichenfolgen vergleichen. `DEBUG` kann nur auf `False` gesetzt werden, indem es tatsächlich auf die Zeichenfolge `False` gesetzt wird.

Sie können die Umgebungsvariable auf Linux durch Ausführen des folgenden Befehls auf „False“ setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste mit Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Informationen mithilfe des folgenden Terminalbefehls auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie im Anwendungsumfeld keinen permanenten Datenspeicher bereitstellen (eine Anforderung von SQLite).
Obwohl uns das für das Beispiel-Bereitstellung(en) nicht betreffen wird, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung mit einer über eine Umgebungsvariable übergebenen Adresse abgerufen wird.
In diesem Fall verwenden wir eine PostgreSQL-Datenbank, die ebenfalls auf Railway gehostet wird. Sie könnten jedoch jeden Datenbank-Hosting-Service Ihrer Wahl verwenden.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt.
Anstatt diese Informationen direkt in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit PostgreSQL-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration über eine Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, um es auf dem Bereitstellungsserver einzurichten:

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

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die standardmäßige SQLite-Datenbank verwendet.
Mit dem Wert `conn_max_age=500` wird die Verbindung beständig, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3): https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Hat aber nicht auf Railway funktioniert!
  Versuchen Sie bei der nächsten Veröffentlichung ein Update.
-->

Django benötigt _psycopg2_, um mit PostgreSQL-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwendet, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können komplett zu PostgreSQL wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrem Entwicklungsumfeld setzen (Railway macht es einfach, dasselbe Umfeld für Produktion und Entwicklung zu nutzen).
Alternativ können Sie auch eine [selbst gehostete PostgreSQL-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellen statischer Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, da die Anfragen über Django gehen müssen, obwohl Django nichts damit macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Leistungseinbußen, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, wodurch es einfacher wird, diese direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL-Position, von der aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_-Tool alle im Template referenzierten statischen Dateien sammelt. Sobald alle gesammelt sind, können diese als Gruppe hochgeladen werden, wohin auch immer die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, in denen das _collectstatic_-Tool von Django nach statischen Dateien suchen sollte.

Django-Templates beziehen sich auf Speicherorte statischer Dateien relativ zu einem `static`-Tag (dies können Sie im Basistemplate sehen, das in [Django Tutorial Teil 5: Erstellung unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert wurde), das wiederum auf die Einstellung `STATIC_URL` verweist.
Statische Dateien können daher auf jeden Host hochgeladen werden und Sie können Ihre Anwendung so aktualisieren, dass sie diese Dateien mithilfe dieser Einstellung findet.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu kopieren, der durch die `STATIC_ROOT`-Einstellung des Projekts definiert wurde.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ aufgerufen werden, bevor die Anwendung hochgeladen wird, wobei alle statischen Dateien in der Anwendung an den Speicherort kopiert werden, der in `STATIC_ROOT` angegeben wurde.
`Whitenoise` findet die Dateien von dem in `STATIC_ROOT` definierten Speicherort (standmäßig) und liefert sie an der Basis-URL zurück, die in `STATIC_URL` festgelegt wurde.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert worden sein (der `STATIC_URL` könnte bei Erstellen der Datei bereits innerhalb der Datei definiert worden sein).
Während das keinen Schaden verursacht, können Sie die doppelte vorherige Referenz genauso gut löschen.

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Datei-Serving tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt stellt eine der einfachsten Methoden für die direkte Bereitstellung statischer Inhalte von Gunicorn in der Produktion bereit.

Siehe [WhiteNoise](https://pypi.org/project/whitenoise/)-Dokumentation für eine Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode für die Bereitstellung dieser Dateien darstellt.

Die Schritte zur Einrichtung von _WhiteNoise_ mit dem Projekt stehen [hier](https://whitenoise.readthedocs.io/en/stable/django.html) (und werden unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie die `WhiteNoiseMiddleware` nahe am Anfang der Liste hinzu, direkt unter der `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter).
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

Sie müssen _WhiteNoise_ nicht weiter konfigurieren, da es standardmäßig die Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stamm Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (in anderen müssen Sie dies selbst tun).
Sie können diese Datei mithilfe von _pip_ in der Befehlszeile erstellen (führen Sie das Folgende im stamminternen Repo aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten verschiedenen Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die hier nicht aufgeführt sind, es sei denn, Sie haben sie für diese Anwendung explizit hinzugefügt.

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

Viele Hosting-Dienste erlauben es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Plattformen zur Versionskontrolle zu importieren und/oder zu synchronisieren.
Dies kann Bereitstellung und iterative Entwicklung viel einfacher machen.

Sie sollten bereits GitHub verwenden, um den Quellcode der LocalLibrary zu speichern (dies wurde in [Versionskontrolle mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) im Rahmen des Aufbaus Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Punkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung bei jedem beliebigen Host von Nutzen sind (oder für die Entwicklung), könnten andere dies nicht sein.
Vorausgesetzt, dass Sie bereits alle bisher vorgenommenen Änderungen mit dem `main`-Branch auf GitHub gesichert haben, können Sie einen neuen Branch zur Sicherung Ihrer Änderungen erstellen, wie unten gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie man LocalLibrary auf [PythonAnywhere](https://www.pythonanywhere.com/) hostet.

### Warum PythonAnywhere?

Wir haben uns entschieden, PythonAnywhere aus mehreren Gründen zu verwenden:

- PythonAnywhere bietet einen [kostenlosen Anfängertarif](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet, wobei wir migrieren, wenn die vorherigen kostenlosen Tarife eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und da es uns ermöglicht, einfacher Funktionen wie die Integration mit einer auf einem anderen Service laufenden PostgreSQL-Datenbank zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie das nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere erlernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen uns nicht sonderlich bei der Verwendung von PythonAnywhere für das Tutorial.
  Zum Beispiel:

  - Der Anfängertarif erlaubt eine Web-App bei `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugriff von Ihren Apps, geringe CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose PostgreSQL-Datenbank.
    Aber es gibt genug Platz, damit unsere Basis-Website läuft!
  - Benutzerdefinierte Domains werden zum Zeitpunkt des Schreibens nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass sie möglicherweise langsam startet.
    Sie können es für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für PostgreSQL.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere ist für das Hosting dieser Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen, zu bestimmen, ob es [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung aufrufen, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate PostgreSQL-Unterstützung.
Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Speicherplatz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole festgelegt werden.

Das sind alle Informationen, die Sie benötigen, um zu beginnen.

### Holen Sie sich ein PythonAnywhere-Konto

Um PythonAnywhere zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Plan- und Preisgestaltung](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, erkennen Sie die Bedingungen an und klicken dann auf **Anmelden**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir ein Bash-Eingabeaufforderungsfenster, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub.
Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit diese von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Konsolenverwaltungsbildschirm, indem Sie im oberen Anwendungsbereich **Konsolen** auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für Ihre spätere Wiederverwendung gespeichert wird, zusammen mit sämtlicher ihrer Historie.
   Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir stattdessen hätte öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine virtuelle Python 3.10-Umgebung mit dem Namen „env_local_library“ zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können, und wir können sie deaktivieren und wieder aktivieren, indem wir die unten stehenden Befehle verwenden:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` benennen (z. B. wenn Ihr Benutzername „Odtsetseg“ ist, müssen Sie den Quellcode der lokalen Bibliothek in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzername-Werte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Im Railway-Beispiel werden wir [eine PostgreSQL-Datenbank konfigurieren und verbinden](#erstellen_und_verbinden_sie_eine_postgresql-datenbank) und eine Verbindung dazu herstellen, indem die `DATABASE_URL`-Umgebungsvariable eingestellt wird.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet werden soll, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie in [der Produktion bereitgestellt werden können](#bereitstellen_statischer_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Site zuzugreifen (wie im Abschnitt [Django Admin-Bereich](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie diese benötigen, um Ihre Site zu testen.

### Einrichten der Web-App

Nachdem Sie die lokalen Bibliotheksquellen geladen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es diese finden und als Web-App nutzen kann.

1. Navigieren Sie zum Bereich „Web“ der Site und wählen Sie den Link **Neue Web-App hinzufügen**:

   ![PythonAnywhere „Web“-Abschnitt, zeigt die Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der Assistent zum Erstellen einer neuen Web-App wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Weiter** aus, um die Konfiguration des Web-App-Domainnamens zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zum Festlegen des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Wählen Sie ein Python-Web-Framework aus_ **Manuelle Konfiguration** aus.

   ![PythonAnywhere-Abfrage zum Auswählen des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert ist.
   Dies spielt jetzt nicht so eine große Rolle, aber es würde, wenn wir mehrere Seiten hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Wählen Sie eine Python-Version aus_ **3.10**

   ![PythonAnywhere-Aufforderung zum Auswählen der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Generell sollten Sie die neueste Python-Version auswählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ **Weiter** aus (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung, die nächste Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Bereich „Web“ angezeigt, wie gezeigt.
   Der Bildschirm verfügt über eine **Neu laden**-Schaltfläche, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können.
   Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** anklicken, um die Site für weitere drei Monate (und fortlaufend) am Leben zu erhalten.

   ![Konfigurierte Web-App auf PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie zum Bereich „Code“ auf dem Tab _Web_ und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Codebereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen), und wählen Sie dann die **Speichern**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden.
   PythonAnywhere erwartet, dass sich diese Datei an dieser Stelle befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie zum Abschnitt „Virtualenv“ auf dem Tab _Web_.
   Wählen Sie den Link **Geben Sie den Pfad zu einer virtuellen Umgebung ein, falls gewünscht** aus und geben Sie den Pfad der in Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie sie wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere-virtuelle Umgebung Abschnitt der Web-Tabelle](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt „Statische Dateien“ auf dem Tab _Web_.

   ![PythonAnywhere Statische Dateien Abschnitt der Web-Tabelle](python_anywhere_web_static_files.png)

   Wählen Sie den **URL eingeben**-Link und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und reflektiert den Ort, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben auf dem _Web_-Tab die **Neu laden**-Schaltfläche, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link, um die Live-Site zu öffnen:

![PythonAnywhere-Webbildschirm mit dem hervorgehobenen Link zum Starten der Site](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie an diesem Punkt ein Debug-Bildschirm mit einem Fehler, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ läuft.

![Eine detaillierte Fehlermeldung mit einem vollständigen Zurückverfolgbereich eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen sind sehr nützlich, wenn Sie sich einrichten, stellen jedoch ein Sicherheitsrisiko für eine bereitgestellte Site dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diesen Grad an Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Key [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übertragen Sie sie in Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Vorausgesetzt, Sie verwenden Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com`, und Sie haben die Änderungen in den Hauptbranch übertraget, dann könnten Sie sie in der Bash-Eingabeaufforderung mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche auf dem Reiter `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen können, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website bereit machen, um veröffentlicht zu werden](#ihre_website_bereiten) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Wir haben die Bibliothek speziell so eingerichtet, dass Sie Folgendes einstellen können:

- `DJANGO_DEBUG=False`, um die Debug-Nachführung zu reduzieren, die dem Benutzer angezeigt wird, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (was wir in diesem Beispiel nicht tun).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen.
Wir sind dafür bereits eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie eine PythonAnywhere-Bash-Eingabeaufforderung.
2. Navigieren Sie zu Ihrem Anwendungs-Verzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie diese als Schlüssel-Wert-Paare in die `.env`-Datei schreiben.
   Um zum Beispiel `DJANGO_DEBUG` auf `False` einzustellen, geben Sie in der Bash-Konsole den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel, erstellen Sie ein Genre, erhöhen Sie dann die Nummer in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Nachricht anstelle einer detaillierten Debug-Nachverfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway bietet keinen vollständig kostenlosen Startertarif mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway übernimmt den größten Teil der Infrastruktur, sodass Sie das nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway legt [großen Wert auf Benutzererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schneller und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste ähnliche Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn am Ende lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, zu bestimmen, ob Railway [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten, sowie zu verstehen, wie sie gestartet wird.
Für Django-Apps liefern wir diese Informationen in einer Reihe von Textdateien:

- **runtime.txt**: gibt die Programmiersprache und die Version an, die verwendet werden soll.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden, um die Webanwendung zu starten.
  Für Django wird dies in der Regel der Gunicorn-Webanwendungs-Server (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufruf unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und mit einem speziellen [Befehlszeilen-Interface (CLI)](https://docs.railway.com/guides/cli)-Tool.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu abrufen und vieles mehr.
Eines der nützlichsten Features ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen ausführen können, die auch auf dem Live-Projekt verwendet werden.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, eine Datenbankerweiterung integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu behandeln.
Sobald wir das alles getan haben, können wir ein Railway-Konto einrichten, den Railway-Client abrufen und unsere Website installieren.

Das ist alle Übersicht, die Sie benötigen, um anzufangen.

### Die App für Railway aktualisieren

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen nicht verhindern, dass Sie die örtlichen Testabläufe und Workflows nutzen, die wir bereits kennengelernt haben.

#### Procfile

Eine _Procfile_-Datei ist der "Einstiegspunkt" der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass es sich um einen Webprozess handelt und HTTP-Verkehr empfangen kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Anschließend rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der in der `STATIC_ROOT`-Projekteinstellung definiert ist (siehe Abschnitt [Bereitstellen statischer Dateien in der Produktion](#bereitstellen_statischer_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm die Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzubeziehen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die **runtime.txt**-Datei, wenn definiert, teilt Railway mit, welche Version von Python verwendet werden soll.
Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Minder-Version.
> Sie verwenden in der Regel die nächste unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Testen Sie die Site erneut lokal, bevor Sie fortfahren, und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen gestört wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann die Site immer noch wie erwartet in Ihrem Browser.

```bash
python3 manage.py runserver
```

Als Nächstes `pushen` wir die Änderungen zu GitHub.
Geben Sie in das Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und führen Sie dann die PR auf GitHub zusammen.

Wir sollten jetzt bereit sein, die LocalLibrary auf Railway bereitzustellen.

### Eine Railway-Konto erstellen

Um Railway nutzen zu können müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Menüleiste.
- Wählen Sie in der Popup-Nachricht GitHub, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie anschließend zu Ihrer E-Mail-Adresse gehen und Ihr Konto bestätigen.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als Nächstes stellen wir Railway so ein, dass es unsere Bibliothek von GitHub bereitstellt.
Wählen Sie zunächst die Option **Dashboard** aus dem oberen Menü der Website und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Template-Projekt zu bereitstellen, das zuerst in Ihrem GitHub-Konto erstellt wird, und mehrere Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - Bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung für Railway verfügbar gemacht haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Websitebildschirm zeigt ein Dialogfeld, um ein vorhandenes GitHub-Repository auszuwählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Wählen Sie Bereitstellen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt im Reiter „Deployments“ anzeigen.
Wenn die Bereitstellung erfolgreich abgeschlossen wird, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Website-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert immer noch nicht, da das Setup noch nicht abgeschlossen ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie an diesem Punkt ein Debug-Bildschirm mit einem Fehler, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ läuft.

![Eine detaillierte Fehlermeldung mit einem vollständigen Zurückverfolgbereich eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen sind sehr nützlich, wenn Sie sich einrichten, stellen jedoch ein Sicherheitsrisiko für eine bereitgestellte Seite dar.
> Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Seite eingerichtet und funktionsfähig ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Key [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern und übertragen Sie dann Ihre Einstellungen in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Erstellen und verbinden Sie eine PostgreSQL-Datenbank

Als nächstes müssen wir eine PostgreSQL-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugänglich ist).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem separaten Projekt erstellen können.

Wählen Sie auf Railway die Option **Dashboard** aus dem oberen Menü der Website und wählen Sie dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes einzustellen).
Mit der Schaltfläche **Einstellungen** können projektweite Einstellungen geändert werden.
Wählen Sie die **Neu**-Schaltfläche aus, mit der Sie dem Projekt Dienste hinzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche Neuen Dienst hinzufügen](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - Wählen Sie die Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Wählen Sie PostgreSQL als neuen Dienst aus](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Beim Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und PostgreSQL-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variablen_ aus.
Wählen Sie **Neue Variable** aus und wählen Sie im Feld _Variablenname_ **Referenz hinzufügen**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit locallibrary sie als Umgebungsvariable liest).

![Railway-Website-Bildschirm, der eine DATABASE_URL auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablenreferenz hinzuzufügen und schließlich **Bereitstellen** (dies wird in einem Popup angezeigt).
Beachten Sie, dass Sie die PostgreSQL-Datenbank auch öffnen, dann deren Variablenregisterkarte aufrufen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden, wie es lokal tat.
Beachten Sie jedoch, dass es derzeit keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Das machen wir mit dem [CLI](https://docs.railway.com/guides/cli)-Tool auf unserem lokalen Computer.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie die [Anweisungen hier](https://docs.railway.com/guides/cli) befolgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses auf Ihrem Computer in einem mit Railway-Projekt verknüpften Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen, wie sie auf dem Produktionsserver verwendet werden.
Wir zeigen diese in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das Folgende in einem Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie von dem System abgemeldet sind, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-`createsuperuser`-Befehl gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal bei [Django-Tutorial Teil 4: Django-Admin-Bereich > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal über unser Django-Projekt aufzurufen, wenn es mit der _Produktions_-Datenbank verbunden ist.
Der Railway-Client macht das einfach, indem er einen Mechanismus bietet, mit dem Befehle lokal unter Verwendung derselben Umgebungsvariablen wie auf dem Produktionsserver ausgeführt werden, einschließlich der Datenbankverbindungszeichenkette.

Öffnen Sie zuerst ein Terminal oder einen Kommandozeilen-Prompt in einem Git-Klon Ihres locallibrary-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` bei Ihrem Browserkonto an (befolgen Sie alle daraus resultierenden Aufforderungen und Anweisungen des Clients oder der Website, um den Anmeldevorgang abzuschließen):

```bash
railway login
```

Nachdem Sie sich eingeloggt haben, verbinden Sie Ihr aktuelles locallibrary Verzeichnis mit dem zugehörigen Railway-Projekt über den folgenden Befehl.
Beachten Sie, dass Sie bei der Eingabe möglicherweise ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Nun, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus dem Produktionsumgebung laufen lassen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort wie erforderlich ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Verwaltungsbereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genau wie in [Django Tutorial Teil 4: Django-Admin-Bereich](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Festlegung der Konfigurationsvariablen

Der letzte Schritt ist, die Site sicherzustellen.
Insbesondere müssen wir die Debugprotokolle deaktivieren und ein geheimes CSRF-Schlüssel festlegen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Ihre Website bereit machen, um veröffentlicht zu werden](#ihre_website_bereiten) ausgeführt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Reiter _Variablen_.
Hier sollte bereits die `DATABASE_URL` angezeigt werden.

![Railway - Bildschirm, um eine neue Variable hinzuzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **Neue Variable**-Schaltfläche und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (und klicken Sie dann auf **Hinzufügen**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Die endgültige Liste der Variablen sollte so aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Fehlersuche

Der Railway-Client bietet den Logs-Befehl an, um das Ende der Protokolle zu zeigen (ein vollständigeres Protokoll ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bereitstellen kann, müssen Sie sich in das [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) einlesen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch die Serie von Tutorials über die Arbeit mit Django. Wir hoffen, dass sie für Sie nützlich waren. Sie können eine vollständige Durcharbeitung des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) ansehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Bereitstellen von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellung-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Dateien](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzwerte](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
