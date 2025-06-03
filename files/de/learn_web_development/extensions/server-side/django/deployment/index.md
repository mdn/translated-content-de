---
title: "Django-Tutorial Teil 11: Bereitstellen von Django in der Produktion"
short-title: "11: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet, so dass es nun an der Zeit ist, sie auf einem Webserver zu installieren, damit sie von jedem über das öffentliche Internet erreicht werden kann. Diese Seite beschreibt, wie man ein Django-Projekt hostet und was Sie tun müssen, um Ihre Website für eine produktive Bereitstellung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wo und wie Sie eine Django-App produktiv bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "ausreichend" fertig, um mit dem öffentlichen Testen zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Website mit dem lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine produktionsstarke Infrastruktur für das Servieren Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl eines Hosting-Sites, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App produktionsreif zu machen, und ein praktisches Beispiel, wie Sie die Bibliotheksverwaltung (LocalLibrary) auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Serverrechner bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben werden. Die Umgebung umfasst:

- Die Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Je nachdem, wie Ihre Produktionsumgebung konfiguriert ist, können Sie auch einen Reverse-Proxy, Load Balancer und so weiter haben.

Der Serverrechner könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internet-Konnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Rechen-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, umfassendere Umgebungen auszuwählen, vielleicht einschließlich einer kompletten Django- und Web-Server-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen können!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) nicht kümmern, da die Hostplattform diese für Sie bereitstellt — zusammen mit den meisten Dingen, die Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die geringere Wartungsbelastung und das einfachere Skalieren von PaaS schätzen werden. Wenn Sie gerade anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zum Einrichten einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django-Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit Django arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website wahrscheinlich besucht wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützung für horizontales Skalieren (Hinzufügen weiterer Maschinen) und vertikales Skalieren (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und daher, wo der Zugang wahrscheinlich am schnellsten ist.
- Die historische Betriebszeit- und Ausfallzeit-Leistung des Hosts.
- Bereitgestellte Werkzeuge zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von "Live-Zeit"-Stunden an oder nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht beim Start ist, dass es eine ganze Reihe von Websites gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluierung und Testen gedacht sind. Diese sind in der Regel ziemlich ressourcen- und lizenzbeschränkt, und Sie müssen sich darüber im Klaren sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie sind jedoch ideal, um Websites mit wenig Traffic in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zu einer kostenpflichtigen Nutzung von mehr Ressourcen bieten, wenn Ihre Website mehr besucht wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basisebene für das Rechnen haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit das wichtigste Kriterium ist.

## Vorbereitung Ihrer Website zur Veröffentlichung

Die [Django Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), erstellt mit den Tools _django-admin_ und _manage.py_, ist so konfiguriert, dass sie die Entwicklung erleichtert. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten aus Sicherheits- oder Leistungsgründen für die Produktion unterschiedlich sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder bedingt sensible Einstellungen aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dieses sollte in der Produktion als `False` gesetzt werden (`DEBUG = False`). Dies hindert daran, dass sensible/konfidentielle Debugging-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der Schlüssel, der in der Produktion verwendet wird, weder in der Quellkontrolle noch außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente legen nahe, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer serverseitigen Datei gelesen werden.

Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, falls sie definiert sind. Andernfalls greifen wir auf die in einer **.env**-Datei im Root-Verzeichnis definierten Werte zurück und schließlich auf die Standardwerte in der Konfigurationsdatei. Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR`, aber vor der Sicherheitswarnung `# SECURITY WARNING: keep the secret key used in production secret!` ein.

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _geheim_!
> Sie dürfen sie nicht auf GitHub speichern und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit es nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden).

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

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur dann `False`, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Bitte beachten Sie, dass es sich bei Umgebungsvariablen um Zeichenfolgen und nicht um Python-Typen handelt. Wir müssen daher Zeichenfolgen vergleichen. Der einzige Weg, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie im [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Anzahl dieser Einstellungen mit dem folgenden Terminal-Befehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Servieren von Django WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie während der Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites. Leider kann sie bei einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite). Auch wenn uns das für das (die) Beispiel(e) nicht beeinflusst, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktionieren wird.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Library-Anwendung über eine Adresse, die als Umgebungsvariable übergeben wird, erreicht wird. In unserem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden von Ihnen bevorzugten Datenbankhosting-Dienst verwenden.

Die Datenbankverbindungsinformationen werden an Django über eine Umgebungsvariable mit dem Namen `DATABASE_URL` geliefert. Statt diese Informationen fest in Django zu codieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL` Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbank-Konfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) wird, um auf dem Bereitstellungsserver eingerichtet zu werden:

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist, ansonsten verwendet es die standardmäßige SQLite-Datenbank. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anfragezyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber funktionierte nicht auf Railway!
  Versuchen Sie, beim nächsten Release ein Update durchzuführen.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um auf dem entfernten Server eingerichtet zu werden:

```bash
pip3 install psycopg2-binary
```

Bemerkenswert ist, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist gesetzt. Sie können komplett auf Postgres umstellen und die gleiche gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, die gleiche Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Servieren von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML- als auch statischen Dateien (CSS, JavaScript usw.) zu servieren. Dies ist für statische Dateien ineffizient, da die Anfragen durch Django gehen müssen, obwohl Django nichts mit ihnen macht. Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) zu servieren.

Die wichtigen Einstellungselemente sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool statische Dateien sammelt, die in unseren Vorlagen referenziert werden. Sobald sie gesammelt sind, können diese dann zusammen hochgeladen werden, um dort gehostet zu werden, wo sie bereitgestellt werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf Speicherorte von statischen Dateien relativ zu einem `static`-Tag (Sie können dies in der Basisvorlage sehen, die in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum zur `STATIC_URL`-Einstellung führt. Statische Dateien können daher auf jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in dem Verzeichnis zu sammeln, das durch die `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit folgendem Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden. Dabei werden alle statischen Dateien in der Anwendung in das durch `STATIC_ROOT` angegebene Verzeichnis kopiert. `Whitenoise` findet dann die Dateien vom durch `STATIC_ROOT` definierten Speicherort (standardmäßig) und serviert sie an der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert sein, als sie erstellt wurde. Obwohl es keinen Schaden verursacht, könnten Sie den doppelten vorherigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden tatsächlich die Dateiübertragung mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um statische Dateien in der Produktion zu servieren (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion zu servieren.

Schauen Sie sich die [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) an, die erklärt, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bereitstellen dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_, die mit dem Projekt verwendet werden sollen, sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Whitenoise installieren

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie die `WhiteNoiseMiddleware` ganz oben in der Liste, direkt unter `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien verringern, wenn sie bereitgestellt werden (dies ist effizienter). Fügen Sie einfach das Folgende an das Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts anderes konfigurieren, da _WhiteNoise_ standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert werden. Viele Hosting-Dienste installieren diese Dateien automatisch (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie das folgende im Root des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente enthalten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen nicht aufgeführten Abhängigkeiten, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Services ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder cloud-basierten Quellversionskontrollplatformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten GitHub bereits zur Speicherung Ihres lokalen Library-Quellcodes verwenden (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Zeitpunkt, um eine Sicherung Ihres "Vanilla"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sind, andere nicht. Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen im `main`-Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen zu sichern, wie unten gezeigt:

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

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere bietet einen [kostenlosen Anfängertarif](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, wobei wir migrierten, wenn die bisher freien Tarife eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Tarif wahrscheinlich kostenlos bleibt.
  > Wir haben auch das Railway-Beispiel behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Service läuft, leichter zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht tun müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von PythonAnywhere lernen, sind übertragbar.
- Die Service- und Pläneinschränkungen beeinträchtigen uns nicht besonders bei der Nutzung von PythonAnywhere für das Tutorial. Zum Beispiel:

  - Der Anfängertarif erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notizbuchunterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz für unsere grundlegende Site!
  - Eigene Domains werden derzeit nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht benutzt wird, kann also langsam neu gestartet werden. Sie können sie ständig laufen lassen, aber Sie müssen die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres. In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere ist geeignet für das Hosting dieser Demonstration und kann für größere Projekte skaliert werden, wenn erforderlich. Sie sollten sich die Zeit nehmen zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche für das Hochladen, Bearbeiten und andere Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-Repository auf GitHub zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Tarif bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir nur die standardmäßig von Django erstellte SQLite-Datenbank in der gehosteten Ubuntu-Umgebung (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung ausgeführt wird, kann sie durch das Setzen von Umgebungsvariablen über die Bash-Konsole für die Produktion konfiguriert werden.

Das ist alles, was Sie brauchen, um loszulegen.

### Ein PythonAnywhere-Konto erhalten

Um PythonAnywhere zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur [Plans and pricing](https://www.pythonanywhere.com/pricing/)-Seite von PythonAnywhere und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Nutzungsbedingungen und wählen Sie dann **Register**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes öffnen wir einen Bash-Prompt, richten eine virtuelle Umgebung ein und holen uns den lokalen Bibliotheks-Quellcode von GitHub. Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm der PythonAnywhere-Konsolenverwaltung mit Start der Bash-Konsole](python_anywhere_start_bash_console.png)

   Beachten Sie, dass alle von Ihnen erstellten Konsolen gespeichert werden, damit Sie sie später erneut verwenden können, zusammen mit ihrer gesamten Geschichte. Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir alternativ hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau der gleiche Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird. Wir hätten die Umgebung beliebig benennen können und können sie mit den folgenden Befehlen deaktivieren und wieder aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Als nächstes holen Sie sich die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrer Website-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` benennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den lokalen Bibliotheks-Quellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in ein entsprechend benanntes Verzeichnis zu klonen (Sie müssen die Benutzername-Werte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir eine [Postgres-Datenbank konfigurieren](#bereitstellung_und_verbindung_einer_postgres-sql-datenbank) und durch Setzen der `DATABASE_URL`-Umgebungsvariable mit ihr verbinden. Es ist wichtig, dass `migrate` _nach_ der Konfiguration der Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt](#servieren_von_statischen_dateien_in_der_produktion) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website (wie im Abschnitt [Django Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Website zu testen.

### Einrichten der Web-App

Nachdem wir die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie als Web-App finden und verwenden kann.

1. Navigieren Sie zum _Web_-Bereich der Website und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web"-Bereich zeigt Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard öffnet dann, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domainnamens der Web-App zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zur Festlegung des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umgebung zu konfigurieren. Das ist jetzt nicht so wichtig, wäre es aber, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Select a Python version_ **3.10**

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Python-Version wählen, die von der von Ihnen verwendeten Django-Version erlaubt ist.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Eingabeaufforderung zur Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Web-Anwendung nach weiteren Änderungen neu zu laden. Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** drücken, um die Site für weitere drei Monate am Leben zu halten (und fortlaufend).

   ![PythonAnywhere Konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im "Code"-Abschnitt des _Web_-Tabs nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei aus. Dieser hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Bereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (ersten ersetzen Sie "hamishwillee" durch Ihren eigenen Benutzernamen) und wählen Sie dann die **Save**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden. PythonAnywhere erwartet diese Datei an dieser Stelle, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im "Virtualenv"-Abschnitt des _Web_-Tabs nach unten. Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der zuvor erstellten virtuellen Umgebung ein. Wenn Sie es als "env_local_library" benannt haben, wie vorgeschlagen, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env Abschnitt des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im "Static files"-Abschnitt des _Web_-Tabs nach unten.

   ![PythonAnywhere Static files Abschnitt des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie dann die **Reload**-Schaltfläche oben im _Web_-Tab, um die Site neu zu starten. Wählen Sie dann den Site-URL-Link aus, um die Live-Site zu starten:

![PythonAnywhere Web-Screen mit dem hervorgehobenen Link, um die Site zu starten](python_anywhere_web_open_site.png)

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Beim Öffnen der Site sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt. Es handelt sich um einen Django-Sicherheitsfehler, der angezeigt wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit Vollständiger Rückverfolgung eines ungültigen HTTP_HOST Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debugging-Informationen sind sehr nützlich, wenn Sie sich einrichten, stellen aber ein Sicherheitsrisiko auf einer bereitgestellten Site dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Maß an Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repository.

Jetzt müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren. Angenommen, Sie verwenden Ihren Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen im `main`-Zweig gepusht, dann können Sie sie im Bash-Prompt mit dem folgenden Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Neu laden**-Schaltfläche auf dem `Web`-Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitstellen Ihrer Website zur Veröffentlichung](#vorbereitung_ihrer_website_zur_veröffentlichung) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Konkret richten wir die Bibliothek so ein, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False` um das Debugging-Tracking zu reduzieren, das dem Benutzer angezeigt wird, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY`, um einen geheimen Wert in der Produktion zu setzen.
- `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab. Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen. Wir sind bereits dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie einen PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben. Geben Sie beispielsweise in der Bash-Konsole den folgenden Befehl ein, um `DJANGO_DEBUG` auf `False` zu setzen:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel ein Genre erstellen und dann die Zahl in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung statt einer detaillierten Debugging-Rückverfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Starter-Stufe mehr.
> Wir haben diese Anweisungen behalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie es nicht tun müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf das Entwicklererlebnis für die Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway lernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird. Für Django-Apps stellen wir diese Informationen in einer Reihe von Textdateien bereit:

- **runtime.txt**: gibt die Programmiersprache und Version an, die verwendet werden soll.
- **requirements.txt**: listet die benötigten Python-Abhängigkeiten für Ihre Website auf, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden sollen, um die Webanwendung zu starten. Für Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Script).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe der in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellten Informationen selbst konfigurieren. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mithilfe eines speziellen [Befehlszeilentools (CLI)](https://docs.railway.com/guides/cli). Mit der CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository von dem lokalen Branch zur Live-Site hochladen, die Protokolle des laufenden Prozesses einsehen, Konfigurationsvariablen festlegen und abrufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository stecken, die oben genannten Dateien hinzufügen, eine Datenbank-Integration hinzufügen und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben. Sobald wir das alles getan haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Aktualisieren der App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile`- und `runtime.txt`-Datei erstellen, denn fast alles andere ist bereits vorhanden.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Workflows zu nutzen, die wir bereits gelernt haben.

#### Procfile

Eine _Procfile_ ist der "Eingangspunkt" der Webanwendung. Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist (siehe Abschnitt [Servieren von statischen Dateien in der Produktion](#servieren_von_statischen_dateien_in_der_produktion) unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und geben ihm die Konfiguration im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**) weiter.

Sie sollten feststellen, dass wir das Projekt bereits so eingerichtet haben, dass _gunicorn_ enthalten ist und das Servieren von statischen Dateien unterstützt wird!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die **runtime.txt**-Datei gibt an, falls sie definiert ist, welche Version von Python Railway verwenden soll. Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minor-Version. Sie werden im Allgemeinen die nächstliegende unterstützte Version anstelle des angegebenen Wertes verwenden.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie nicht durch irgendwelche der obigen Änderungen kaputt gegangen ist. Starten Sie den Entwicklungswebserver wie gewohnt und prüfen Sie dann, ob die Site in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als nächstes die Änderungen zu GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann die PR auf GitHub.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erhalten

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann auf das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Website, dann die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste mit Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu erstellen, das zuerst in Ihrem GitHub-Konto erstellt wird, und mehrere Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung für Railway freigegeben haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm, der einen Dialog zum Auswählen eines vorhandenen GitHub-Repositorys oder zum Auswählen eines neuen Repositorys zeigt](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - wählen Sie bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit, wobei der Fortschritt auf dem Bereitstellungstab angezeigt wird. Nach erfolgreicher Bereitstellung sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf den Site-URL-Link klicken (oben hervorgehoben), um die Site in einem Browser zu öffnen (es wird noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Beim Öffnen der Site sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt. Es handelt sich um einen Django-Sicherheitsfehler, der angezeigt wird, da unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debugging-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt aber ein Sicherheitsrisiko auf einer bereitgestellten Site dar. Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site in Betrieb ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende ein:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repository (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Bereitstellung und Verbindung einer Postgres-SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugegriffen werden kann). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Auf Railway wählen Sie die Option **Dashboard** aus dem oberen Menü der Website und wählen dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzelnen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Diensteinstellungen festzulegen). Die Schaltfläche **Einstellungen** kann ausgewählt werden, um Projekteinstellungen zu ändern. Wählen Sie die Schaltfläche **New**, die zum Hinzufügen von Diensten zum Projekt verwendet wird.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Database** aus, wenn Sie nach dem Diensttyp gefragt werden, den Sie hinzufügen möchten:

![Railway-Projekt - Wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen

![Railway-Projekt - Wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webservice und anschließend den Tab _Variables_ aus. Wählen Sie **New Variable** und dann im _Variable name_ Feld wählen Sie **Add reference**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir so eingerichtet haben, dass die Library sie als Umgebungsvariable liest).

![Railway-Website-Bildschirm, der eine Auswahl einer DATABASE_URL zeigt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies erscheint in einem Popup). Beachten Sie, dass Sie alternativ auch die Postgres-Datenbank öffnen, dann ihren Variablentab öffnen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genau so angezeigt werden wie lokal. Beachten Sie jedoch, dass es noch keinen Weg gibt, um die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Wir werden das mit dem [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer tun.

### Den Client installieren

Laden Sie den Railway-Client herunter und installieren Sie ihn für Ihr lokales Betriebssystem, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen sind das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in ein zugeordnetes Railway-Projekt (ohne dass Sie es auf GitHub hochladen müssen) und das Ausführen Ihres Django-Projekts lokal unter Verwendung derselben Einstellungen wie auf dem Produktionsserver. Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im Folgenden verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktions-Datenbank aufrufen (das ist die gleiche Operation, die wir lokal im [Django-Tutorial Teil 4: Django Admin-Site > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) aufgerufen haben). Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt aufzurufen, wenn es mit der _Produktions_-Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er ein Mittel bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbank-Verbindungszeichenfolge.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts. Melden Sie sich dann bei Ihrem Browserkonto mit dem Befehl `login` oder `login --browserless` an (folgen Sie allen sich daraus ergebenden Aufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie bei Aufforderung ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[your-url].railway.app/admin/`) und die Datenbank zu füllen, genau wie im [Django-Tutorial Teil 4: Django Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Konfigurationsvariablen setzen

Der letzte Schritt besteht darin, die Site sicher zu machen. Konkret müssen wir das Debug-Protokoll deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit, die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Bereitstellen Ihrer Website zur Veröffentlichung](#vorbereitung_ihrer_website_zur_veröffentlichung) durchgeführt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Tab _Variables_. Dieser sollte bereits die `DATABASE_URL` wie unten gezeigt enthalten.

![Railway - Neue Webseite für das Hinzufügen von Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptographisch geheimen Schlüssel zu generieren. Ein einfacher Weg besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **New Variable**-Schaltfläche und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Add**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway Bildschirm zeigt alle Projektvariablen](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl `logs` an, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist für jedes Projekt auf der Website verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies liefern kann, müssen Sie mit dem [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu arbeiten beginnen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch die Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, Sie fanden sie hilfreich. Sie können eine vollständig ausgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) einsehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Bereitstellen von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Stilllegen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Wie man mit uWSGI und Nginx auf Ubuntu 16.04 Django-Anwendungen betreibt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Django auf Heroku](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
