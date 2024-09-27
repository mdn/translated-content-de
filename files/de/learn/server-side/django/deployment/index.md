---
title: "Django-Tutorial Teil 11: Django in der Produktion bereitstellen"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, sodass sie von Bibliotheksmitarbeitern und Mitgliedern über das Internet abgerufen werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Site für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Erledigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Site fertig ist (oder „fertig genug“, um mit dem öffentlichen Testen zu beginnen), müssen Sie sie irgendwo öffentlich zugänglicher und zugänglicher hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Site an den lokalen Browser/das Netzwerk weiterzugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting beliebiger statischer Dateien auswählen.
- Eine Produktionsinfrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial gibt Ihnen ein paar Hinweise zu Ihren Möglichkeiten bei der Auswahl einer Hosting-Website, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.app/)-Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch ausführen. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website erstellt wurde.
- Webserver, der zur Bereitstellung von Seiten und anderen Inhalten verwendet wird (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Je nachdem, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, Lastverteiler usw. haben.

Der Servercomputer könnte sich in Ihrem Unternehmen befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet eigentlich, dass Ihr Code auf einem Remote-Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise einen gewissen garantierten Grad an Computerressourcen (CPU, RAM, Speicher usw.) und Internet-Konnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerktechnologie wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, um ein bestimmtes Betriebssystem vorzuinstallieren. Darauf müssen Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren. Andere Anbieter ermöglichen es Ihnen, umfassendere Umgebungen auszuwählen, vielleicht einschließlich eines vollständigen Django- und Webservers.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und können auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten Komponenten erhalten. Und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie zumindest, wo Sie anfangen müssen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) kümmern, da die Hostplattform dies für Sie übernimmt — zusammen mit den meisten Anforderungen, die Sie erfüllen müssen, um Ihre Anwendung zu skalieren. Dies macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität schätzen, die IaaS über PaaS bietet, während andere die reduzierte Wartungslast und einfachere Skalierung von PaaS bevorzugen. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollte dieser Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsservern, Reverse-Proxies usw. bereitstellen. (Dies ist nicht relevant, wenn Sie sich für ein PaaS entscheiden.) Zum Beispiel gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [Digital Ocean Django-Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, Django aktiv zu unterstützen oder gut mit Django zu arbeiten, darunter: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter stellen verschiedene Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Grade an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen zur Verfügung.

Einige Dinge, die bei der Auswahl eines Anbieters zu berücksichtigen sind:

- Wie stark Ihre Website voraussichtlich frequentiert ist und die Kosten für Daten- und Rechnerressourcen, die zur Deckung dieses Bedarfs erforderlich sind.
- Unterstützungsniveau für horizontales (Hinzufügen weiterer Maschinen) und vertikales (Upgrade auf leistungsstärkere Maschinen) Skalieren sowie die Kosten dafür.
- Wo der Anbieter Rechenzentren hat, und daher wo der Zugriff am schnellsten sein dürfte.
- Historische Betriebs- und Ausfallzeiten des Anbieters.
- Tools zur Verwaltung der Site — sind sie einfach zu bedienen und sind sie sicher (z.B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Anbieter blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von "Live-Stunden" oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie andernfalls bezahlen müssten.
- Ob der "kostenlose" Tarif, auf den Sie sich verlassen, mit der Zeit abläuft, und ob die Kosten für den Wechsel zu einem teureren Tarif bedeuten, dass Sie von Anfang an besser einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht ist, dass es recht viele Websites gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Evaluierungs- und Testzwecke vorgesehen sind. Diese sind im Allgemeinen recht ressourcenbeschränkt/-limitiert und es ist wichtig zu beachten, dass sie möglicherweise nach einer Einführungszeit ablaufen oder andere Einschränkungen haben. Sie sind jedoch großartig, um Webseiten mit geringem Traffic in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihre Website beliebter wird. Zu den beliebten Optionen in dieser Kategorie gehören [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computerkapazitäten und weniger Beschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [Digital Ocean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe haben (im Bereich von 5 bis 10 US-Dollar pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Kriterium ist. Wenn Ihre Website Erfolg hat, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Aspekt ist.

## Bereiten Sie Ihre Website auf die Veröffentlichung vor

Die mit den Tools _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten zur Produktionsfreigabe entweder aus Sicherheits- oder Leistungsgründen anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/geheime Debug-Traces und Variablinformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht unter Versionskontrolle steht oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer Datei, die nur für den Server zugänglich ist, gelesen werden sollten. Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, falls sie definiert sind; falls nicht, aus einem im Root befindlichen **.env**-Datei und zuletzt auf die in der Konfigurationsdatei definierten Standardwerte zurückgreifen. Dies ist sehr flexibel, da es jede von der Hosting-Umgebung unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Auslesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR` ein, aber bevor Sie die Sicherheitswarnung `# SECURITY WARNING: keep the secret key used in production secret!` einfügen:

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung. In der Datei als `KEY=VALUE` definierte Variablen werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, werden wahrscheinlich _geheim_ sein!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit es nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „durchsickert“, da Sie diesen in der Produktion nicht verwenden werden).

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

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur `False`, wenn der Wert der Umgebungsvariablen `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Beachten Sie bitte, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable unter Linux durch Eingabe des folgenden Befehls auf "False" setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste für Einstellungen, die Sie ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser über den folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zur Bereitstellung von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu betreiben, installieren wir es lokal, damit es Teil unserer [Anforderungen](#psycopg2) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie in der Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites. Leider kann sie auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da diese keinen persistenten Datenspeicher in der Anwendungsumgebung bieten (eine Anforderung von SQLite). Auch wenn uns das für das Beispiel nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft, und auf die von der Django-Bibliotheksanwendung mit einer als Umgebungsvariable übergebenen Adresse zugegriffen wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hostingdienst Ihrer Wahl verwenden.

Die Datenbankverbindungsinformationen werden Django in einer Umgebungsvariablen namens `DATABASE_URL` zur Verfügung gestellt. Anstatt diese Informationen hart in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Zusätzlich zur Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#psycopg2) wird, die auf dem Bereitstellungsserver eingerichtet werden müssen:

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist als eine neue Verbindung bei jedem Anforderungszyklus zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber funktionierte nicht auf Railway!
  Versuchen Sie es erneut, im nächsten Release zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#psycopg2) für Railway ist, um auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwendet, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für die Entwicklung und Produktion verwenden, indem Sie die gleiche Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine lokal gehostete [Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen über Django verlaufen müssen, obwohl Django damit nichts tun muss. Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, wodurch es einfacher wird, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitstellen zu lassen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, z. B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Django's _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Einmal gesammelt, können diese dann zusammen hochgeladen werden an den Standort, an dem die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die vom _collectstatic_-Tool von Django nach statischen Dateien durchsucht werden sollen.

Django-Vorlagen verweisen auf statische Dateipfade, die relativ zu einem `static`-Tag sind (Sie können dies in der Basisvorlage sehen, die in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert wurde), das dann auf die `STATIC_URL`-Einstellung verweist. Statische Dateien können also an jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie an diesem Ort zu suchen.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in das Verzeichnis zu sammeln, das in der Projekteinstellung `STATIC_ROOT` definiert ist. Es wird mit folgendem Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen auf die Anwendung ausgeführt werden, wodurch alle in der Anwendung enthaltenen statischen Dateien in die von `STATIC_ROOT` definierte Position kopiert werden. `Whitenoise` findet die Dateien aus dem Ort, der von `STATIC_ROOT` (standardmäßig) definiert ist und sie im Basis-URL bereitstellt, der durch `STATIC_URL` definiert wird.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei bei ihrer Erstellung definiert worden sein. Es wird keinen Schaden verursachen, jedoch könnten Sie den doppelten früheren Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Bereitstellung der Dateien tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) vornehmen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion bereitzustellen.

Sehen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation für eine Erklärung an, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Installieren Sie whitenoise

Installieren Sie whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware` an die Spitze der Liste ein, direkt unterhalb des `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter). Fügen Sie einfach das Folgende an das Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts anderes konfigurieren, denn _WhiteNoise_ verwendet standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL`.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden. Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ über die Befehlszeile erstellen (führen Sie Folgendes im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation der verschiedenen oben genannten Abhängigkeiten sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente auflisten (obwohl sich die Versionsnummern unterscheiden können). Bitte löschen Sie andere nicht aufgeführte Abhängigkeiten, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder von cloudbasierten Plattformen zur Quellcodeverwaltung. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten GitHub bereits zur Speicherung des Quellcodes Ihrer lokalen Bibliothek verwenden (dies wurde als Teil der Einrichtung Ihrer Entwicklungsumgebung in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) eingerichtet).

Dies ist ein guter Zeitpunkt, um eine Sicherung Ihres "Vanille"-Projekts zu erstellen – während einige Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder zur Entwicklung) nützlich sein könnten, könnten andere dies nicht sein. Wenn Sie alle bisher vorgenommenen Änderungen im `main`-Zweig auf GitHub gesichert haben, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

## Beispiel: Hosting bei PythonAnywhere

Dieser Abschnitt bietet ein praktisches Beispiel dafür, wie die _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet wird.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen, PythonAnywhere zu verwenden:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und erfolgte in jedem Fall, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel beibehalten, das nicht kostenlos ist, um einen Vergleich zu ermöglichen, und weil es uns ermöglicht, Funktionen wie die Integration mit Postgres-Datenbanken zu demonstrieren, die auf einem anderen Dienst laufen.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Darüber hinaus müssen Sie sich nicht um Server, Lastverteiler, Reverse-Proxys usw. kümmern, wodurch es viel einfacher wird, anzufangen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Einschränkungen des Services und Plans haben keinen besonderen Einfluss auf unseren Einsatz von PythonAnywhere im Tutorial. Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App auf `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz, damit unsere grundlegende Website laufen kann!
  - Benutzerdefinierte Domains werden (zum Zeitpunkt des Schreibens) nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird, sodass es beim Neustart möglicherweise langsam ist. Sie können es unbegrenzt ausführen, müssen die Website jedoch alle drei Monate aufrufen und die Web-Anwendung erneuern.
  - Es gibt die kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres. In diesem Demonstrationsbeispiel werden wir einfach die standardmäßige Django-SQLite-Datenbank verwenden.

PythonAnywhere ist geeignet, um diese Demonstration zu hosten, und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten darauf achten, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In diesem Demonstrationsbeispiel verwenden wir die Konsole, um unser LocalLibrary GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für den produktiven Einsatz konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das sind alle Informationen, die Sie benötigen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu der Seite [Pläne und Preise](https://www.pythonanywhere.com/pricing/) von PythonAnywhere und klicken Sie auf den Button **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Bedingungen und klicken Sie dann auf **Registrieren**.
- Sie werden dann angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<ihr_benutzername>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub. Wir werden auch die standardmäßige Datenbank konfigurieren und statische Dateien sammeln, sodass sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Bildschirm „Konsolenverwaltung“, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Klicken Sie dann auf den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirmabbild von PythonAnywhere Console-Management-Bildschirm](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für die spätere Wiederverwendung gespeichert wird, zusammen mit ihrem gesamten Verlauf. Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung zu erstellen, die „env_local_library“ genannt wird, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der in [Einrichten der Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) behandelt wurde. Wir hätten die Umgebung beliebig benennen können und können sie mit den Befehlen unten deaktivieren und erneut aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet von Ihnen, dass Sie Anwendungen in einem Verzeichnis installieren, das nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<your_pythonaware_username>.pythonanywhere.com` nennen (z.B. wenn Ihr Benutzername „Odtsetseg“ ist, müssen Sie den Quellcode der lokalen Bibliothek in einem Verzeichnis namens `odtsetseg.pythonanywhere.com` speichern).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in ein entsprechend benanntes Verzeichnis zu klonen (Sie müssen den Benutzernamenswert mit Ihrem eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <pythonaware_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <pythonaware_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hostrechner (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Im Railway-Beispiel werden wir eine [Postgres-Datenbank konfigurieren](#warum_pythonanywhere?) und durch das Setzen der `DATABASE_URL`-Umgebungsvariable eine Verbindung dazu herstellen. Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, von dem aus sie [in der Produktion bereitgestellt](#gunicorn) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Site zuzugreifen (wie im Abschnitt [Django Admin-Site](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Einrichtung der Webanwendung

Nachdem Sie die Quellen der lokalen Bibliothek erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie finden und als Webanwendung verwenden kann.

1. Navigieren Sie zu dem Abschnitt _Web_ der Seite und klicken Sie auf **Add a new web app**:

   ![PythonAnywhere "Web"-Abschnitt mit Knopf zum Hinzufügen der neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ -Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Klicken Sie auf **Next**, um den Konfigurationsbildschirm für Domainnamen der Web-App zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<benutzername>.pythonanywhere.com`.

   ![PythonAnywhere Aufforderung zum Festlegen des Domainnamens der neuen Webanwendung](python_anywhere_web_add_new_app_prompt.png)

3. Im Bildschirm _Select a Python Web framework_ wählen Sie **Manual configuration**.

   ![PythonAnywhere Aufforderung zum Auswählen des Webframeworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umgebung vollständig zu steuern, wie sie konfiguriert ist. Das spielt jetzt keine Rolle, würde es jedoch, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Im Bildschirm _Select a Python version_ wählen Sie **3.10**

   ![PythonAnywhere Aufforderung zum Auswählen der Python-Version für Webanwendungen](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python wählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Im Bildschirm _Manual configuration_ wählen Sie **Next** (der Bildschirm erklärt nur einige der Optionen zur Konfiguration).

   ![PythonAnywhere Aufforderung, die kommenden Konfigurationsoptionen zu erklären](python_anywhere_web_add_manual_config.png)

   Die Webanwendung wird erstellt und in der Webansicht wie gezeigt angezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Webanwendung neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben. Wie auf dem Bildschirm vermerkt, müssen Sie alle drei Monate auf die Schaltfläche **Run until 3 months from today** klicken, um die Seite für weitere drei Monate am Leben zu erhalten (und weiter).

   ![PythonAnywhere Konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten in den „Code“-Abschnitt des _Web_-Tabs und wählen Sie den Link zur WSGI-Konfigurationsdatei. Dieser hat einen Namen in der Form `/var/www/<benutzername>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei mit dem folgenden Text (zuerst „hamishwillee“ mit Ihrem eigenen Benutzernamen aktualisieren) und klicken Sie dann auf die **Speichern** -Schaltfläche.

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

   Beachten Sie, dass die WSGI-Datei die Gunicorn-Bereitstellung unterstützt, die lokale Bibliotheksanwendung zu finden. PythonAnywhere erwartet, dass sich diese Datei in diesem Verzeichnis befindet, weshalb die WSGI-Datei, die bereits im Projekt vorhanden ist, nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt „Virtualenv“ des _Web_-Tabs. Wählen Sie den Link **Der Pfad zu einem virtuellen env eingeben, wenn gewünscht** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde. Wenn Sie sie "env_local_library" genannt haben, wie vorgeschlagen, ist der Pfad: `/home/<benutzername>/.virtualenvs/env_local_library`

   ![PythonAnywhere Abschnitt Virtuelle Umgebung des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt „Statische Dateien“ des _Web_-Tabs.

   ![PythonAnywhere Abschnitt Statische Dateien des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **URL eingeben** und geben Sie `\static_files\` ein. Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt das Verzeichnis wider, in das Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_-Tab die **Neustarten** -Schaltfläche, um die Site neu zu starten. Wählen Sie dann den Site-URL-Link aus, um die Live-Site zu starten:

![PythonAnywhere Webbildschirm mit dem hervorgehobenen Link zum Öffnen der Site](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Website geöffnet wird, werden Sie zu diesem Zeitpunkt einen Fehler-Debugbildschirm wie unten gezeigt sehen. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich mit dem Einrichten der Umgebung beschäftigen, aber birgt ein Sicherheitsrisiko auf einer bereitgestellten Site. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Protokollierungsniveau auf der Live-Site mit [Umgebungsvariablen](#settings.py) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung von [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), um Ihre PythonAnywhere-Site-Adresse einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile ähnlich wie unten hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und führen Sie sie an Ihr GitHub-Repo weiter.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren. Angenommen, Sie verwenden Ihr Bash-Prompt im Verzeichnis `<benutzername>.pythonanywhere.com` und haben die Änderungen auf den Hauptbranch gepusht, können Sie die Änderungen im Bash-Prompt mit dem Befehl einführen:

```Bash
git pull origin main
```

Verwenden Sie die **Restart** -Schaltfläche im `Web`-Tab, um die Anwendung neu zu starten. Wenn Sie die gehostete Site aktualisieren, sollte sie jetzt geöffnet und die Startseite der Site angezeigt werden.

Sie sollten sich mit dem zuvor erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen können, so wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitstellen Ihrer Website zur Veröffentlichung](#bereiten_sie_ihre_website_auf_die_veröffentlichung_vor) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie die folgenden Variablen setzen können:

- `DJANGO_DEBUG=False`, um die Debug-Traces zu reduzieren, die dem Benutzer gezeigt werden, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies nicht in diesem Beispiel).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab. Für PythonAnywhere müssen diese aus einer Umgebungsdatei gelesen werden. Wir sind dafür schon eingerichtet, alles was wir tun müssen ist, die Datei zu erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<benutzer-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben. Geben Sie beispielsweise im Bash-Fenster den folgenden Befehl ein, um `DJANGO_DEBUG` auf `False` zu setzen:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Eintrag zu öffnen, der nicht existiert (z.B. erstellen Sie ein Genre, dann erhöhen Sie die Zahl in der URL-Leiste, um einen Eintrag zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie die Meldung „Nicht gefunden“, anstatt einer detaillierten Debug-Traces.

## Beispiel: Hosting bei Railway

Dieser Abschnitt bietet ein praktisches Beispiel dafür, wie _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr.
> Wir haben diese Anweisungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer die bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus verschiedenen Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie es nicht müssen. Darüber hinaus müssen Sie sich nicht um Server, Lastverteiler, Reverse-Proxys usw. kümmern, wodurch es viel einfacher wird, anzufangen.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn schließlich lieben sollten, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App ist ganz einfach.

Sie sollten darauf achten zu prüfen, ob Railway für Ihre [eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway die entsprechende Umgebung und Abhängigkeiten festlegen können und verstehen, wie sie gestartet wird. Für Django-Apps stellen wir diese Informationen in Form von Textdateien bereit:

- **runtime.txt**: gibt die Programmiersprache und Version an, die verwendet werden soll.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die zum Starten der Webanwendung ausgeführt werden sollen. Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver sein (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung ausgeführt wird, kann sie sich selbst mit bereitgestellten Informationen in [Umgebungsvariablen](https://docs.railway.app/guides/variables) konfigurieren. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli)-Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Seite hochzuladen, die Protokolle des ausgeführten Prozesses zu prüfen, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, eine Verbindung mit einem Datenbank-Add-on herstellen und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben. Sobald wir all das getan haben, können wir ein Railway-Konto erstellen, den Railway-Client abrufen und unsere Website installieren.

Das ist alles, was Sie brauchen, um loszulegen.

### Aktualisierung der App für Railway

Dieser Abschnitt erklärt, welche Änderungen Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Im Wesentlichen müssen wir nur eine `Procfile`- und `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht davon abhalten werden, die bereits erlernten lokalen Tests und Workflows zu verwenden.

#### Procfile

Ein _Procfile_ ist der „Einstiegspunkt“ der Webanwendung. Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass dies ein Webprozess ist, der HTTP-Verkehr empfangen kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Danach rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die Projekteinstellung `STATIC_ROOT` definiert ist (siehe den Abschnitt [statische Dateien in der Produktion bereitstellen](#gunicorn) weiter unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm die Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzuschließen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben vor der Bereitstellung auszuführen.

#### Runtime

Die Datei **runtime.txt**, falls definiert, teilt Railway mit, welche Version von Python verwendet werden soll. Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minderversion. Sie werden im Allgemeinen die am nächsten unterstützte Version zum angegebenen Wert verwenden.

#### Erneuter Test und Speichern von Änderungen auf GitHub

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen beschädigt wurde. Führen Sie den Entwicklungswebserver wie gewohnt aus und prüfen Sie dann, ob die Site im Browser immer noch funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Als Nächstes „pushen“ wir die Änderungen auf GitHub. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Anschließend erstellen und verschmelzen Sie den PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um Railway nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Navigationsleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Sie müssen dann möglicherweise auf Ihre E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.app-Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellen auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst die **Dashboard**-Option aus dem oberen Menü der Website und dann den **New Project**-Button:

![Railway-Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Möglichkeit, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, sowie eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Websitebildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<benutzername>/django-locallibrary-tutorial`.

![Railway Websitebildschirm zeigt einen Dialog zum Auswählen eines vorhandenen GitHub-Repositorys oder zum Auswählen eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - auswählen bereitstellen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte „Deployments“ anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, wird ein Bildschirm wie der unten angezeigt.

![Railway-Websitebildschirm - Deployment](railway_project_deploy.png)

Sie können auf die im obigen Bild hervorgehobene Website-URL klicken, um die Site in einem Browser zu öffnen (sie funktioniert immer noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, wird zu diesem Zeitpunkt ein Fehler-Debugbildschirm wie unten gezeigt angezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_dissallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich mit dem Einrichten der Umgebung beschäftigen, aber birgt ein Sicherheitsrisiko auf einer bereitgestellten Site. Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Website betriebsbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), um Ihre Railway-Site-URL zu inkludieren:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins)-Schlüssel setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übergeben Sie sie an Ihr GitHub-Repo (Railway aktualisiert und stellt Ihre Anwendung automatisch erneut bereit).

### Bereitstellung und Verbindung einer PostgreSQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Website jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht erreichbar ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen, separaten Projekt erstellen können.

Wählen Sie auf Railway die **Dashboard**-Option im oberen Menü der Seite und dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (diese kann ausgewählt werden, um Variablen und andere Details des Dienstes einzustellen). Die **Einstellungen**-Schaltfläche kann ausgewählt werden, um projektweite Einstellungen zu ändern. Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie aufgefordert werden, den Diensttyp hinzuzufügen:

![Railway-Projekt - Datenbank als neuen Dienst hinzufügen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL** aus, um das Hinzufügen der Datenbank zu starten

![Railway-Projekt - Postgres als neuen Dienst hinzufügen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den Tab _Variables_. Wählen Sie **Neue Variable** und füllen Sie dann im Feld _Variable name_ das **Referenz hinzufügen** aus. Scrollen Sie herunter und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir die LocalLibrary lesen lassen):

![Railway Websitebildschirm zur Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablereferenz hinzuzufügen, und schließlich **Bereitstellen** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann deren Variablen-Tab und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es derzeit keine Möglichkeit gibt, die Bibliothek mit Daten zu befüllen, da wir noch keinen Superuser-Account erstellt haben. Dies werden wir mit dem [CLI](https://docs.railway.app/guides/cli)-Tool auf unserem lokalen Computer erledigen.

### Client installieren

Laden Sie den Railway-Client für Ihr eigenes Betriebssystem herunter und installieren Sie ihn, indem Sie die [hier gegebenen Anweisungen](https://docs.railway.app/guides/cli) befolgen.

Sobald der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen sind das Bereitstellen des aktuellen Verzeichnisses auf Ihrem Computer zu einem zugehörigen Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal mit den gleichen Einstellungen wie auf dem Produktionsserver. Wir zeigen dies in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie Folgendes in einem Terminal eingeben:

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verbinden. Wenn Sie vom System ausgeloggt werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verlinken.

### Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank ausführen (dies ist derselbe Vorgang, den wir lokal im [Django-Tutorial Teil 4: Django Admin-Site > Erstellen eines Superusers](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben). Railway bietet keinen direkten Terminalzugriff auf den Server an und wir können diesen Befehl nicht zur [Procfile](#fetch_the_latest_main_branch) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktions_ datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um lokale Befehle mit den gleichen Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich des Datenbankverbindungsstrings.

Öffnen Sie zunächst ein Terminal- oder Befehlsfenster in einem Git-Klon Ihres LocalLibrary-Projekts. Melden Sie sich dann bei Ihrem Browsers

-Konto mit dem Befehl `login` oder `login --browserless` an (folgen Sie eventuellen Aufforderungen und Anweisungen vom Client oder der Website, um den Anmeldevorgang abzuschließen):

```bash
railway login
```

Nachdem Sie angemeldet sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugeordneten Railway-Projekt mithilfe des folgenden Befehls. Beachten Sie, dass Sie beim Aufforderungsfeld möglicherweise ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt nun _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist. Führen Sie dann den folgenden Befehl aus und geben Sie Name, E-Mail-Adresse und Passwort wie erforderlich ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[ihre-url].railway.app/admin/ `) und die Datenbank zu befüllen, wie in [Django-Tutorial Teil 4: Django Admin-Site](/de/docs/Learn/Server-side/Django/Admin_site) beschrieben.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Website sicher zu machen. Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit, die erforderlichen Werte aus Umgebungsvariablen zu lesen, wurde in [Die eigene Website zur Veröffentlichung bereitstellen](#bereiten_sie_ihre_website_auf_die_veröffentlichung_vor) geleistet (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_. Diese sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren. Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **Neue Variable**-Schaltfläche und geben Sie den Schlüssel `DJANGO_SECRET_KEY` zusammen mit Ihrem geheimen Wert ein (und wählen Sie dann **Hinzufügen**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Die endgültige Anordnung der Variablen sollte folgendermaßen aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl logs, um das Ende der Protokolle anzuzeigen (ein ausführlicheres Protokoll ist für jedes Projekt auf der Website verfügbar):

```bash
railway logs
```

Wenn Sie weitere Informationen benötigen, als dies bieten kann, müssen Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beschäftigen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können sich eine vollständig durchgeführte Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt ist das Lesen unserer letzten Artikel und dann die Vervollständigung der Bewertungsaufgabe.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie wird bereitgestellt mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentationen

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Digital Ocean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentationen (ähnliche Einrichtungskonzepte)

  - [Django-Apps konfigurieren für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentationen)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentationen)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentationen)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentationen)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentationen)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentationen)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentationen)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentationen)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentationen)
  - [Python- und Django-Apps auf Heroku bereitstellen](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumentationen)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
