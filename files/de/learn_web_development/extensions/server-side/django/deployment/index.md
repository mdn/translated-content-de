---
title: "Django Tutorial Teil 11: Django in Produktion bereitstellen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet. Jetzt ist es an der Zeit, diese auf einem Webserver zu installieren, damit sie über das öffentliche Internet für jeden zugänglich ist. Diese Seite beschreibt, wie man ein Django-Projekt hostet und was man vorbereiten muss, um Ihre Website für eine Produktionsbereitstellung vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorialthemen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wo und wie Sie eine Django-App in Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder „fertig genug“, um öffentlich getestet zu werden), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungsrechner hosten.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver genutzt, um Ihre Website im lokalen Browser/Netzwerk zu teilen und Ihr Website mit (unsicheren) Entwicklereinstellungen betrieben, die Debugging und andere private Informationen freigeben. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an den Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzustellen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Ihre Website für externen Verbrauch ausgeführt wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Laufzeit des Programmiersystems und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, einen Lastenausgleich etc. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet eigentlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicher, etc.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von remote zugänglicher Computervernetzungshardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, um ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, umfangreichere Umgebungen auszuwählen, möglicherweise einschließlich einer vollständigen Django- und Webserver-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschte erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen.

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. In diesem Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung kümmern (Webserver, Anwendungsserver, Lastenausgleich), da die Hosting-Plattform diese für Sie übernimmt — zusammen mit dem Großteil dessen, was Sie tun müssen, um Ihre Anwendung skalieren zu können. Das erleichtert die Bereitstellung erheblich, denn Sie müssen sich nur auf Ihre Webanwendung konzentrieren und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler bevorzugen die durch IaaS gebotene erhöhte Flexibilität gegenüber PaaS, während andere die reduzierte Wartungsbelastung und die einfachere Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade anfangen, ist es oft einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-kompatiblen Hosting-Anbieter wählen, sollten sie Anweisungen zur Einrichtung einer Django-Website mithilfe verschiedener Konfigurationen von Webservern, Anwendungsservern, Reverse Proxys usw. bereitstellen. (Dies wird nicht relevant sein, wenn Sie sich für ein PaaS entscheiden). Beispielsweise gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die entweder aktiv Django unterstützen oder gut damit funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Faktoren, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website voraussichtlich frequentiert wird und die Kosten für Daten- und Rechenressourcen, um diese Nachfrage zu decken.
- Level der Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade zu leistungsstärkeren Maschinen) sowie die Kosten hierfür.
- Wo der Anbieter Rechenzentren hat und daher auf welchem Weg der Zugriff am schnellsten erfolgt.
- Die historische Verfügbarkeit und Ausfallzeit des Hosts.
- Werkzeuge zur Verwaltung der Website — sind sie benutzerfreundlich und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von Stunden "Live-Zeit" oder nur eine geringe Speichermenge an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie andernfalls bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es von Anfang an besser gewesen wäre, einen anderen Dienst zu verwenden.

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Websites gibt, die kostenlose Rechnerumgebungen anbieten, die für Auswertungs- und Testzwecke vorgesehen sind. Diese sind in der Regel recht ressourcenbeschränkte Umgebungen, und Sie müssen beachten, dass sie nach einer bestimmten Einführungsphase ablaufen oder andere Einschränkungen haben können. Sie sind jedoch ideal zum Testen von Websites mit geringem Verkehr in einer gehosteten Umgebung geeignet und können einen einfachen Übergang zur Bezahlung weiterer Ressourcen bieten, wenn Ihr Standort geschäftiger wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsstandorte vorgesehen ist und nützlichere Ebenen von Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basis-Rechenstufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Machen Sie Ihre Website bereit zur Veröffentlichung

Die mit _django-admin_ und _manage.py_ erstellte [Django Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion unterschiedlich sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug- und Variable-Informationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der z. B. für CSRF-Schutz verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode enthalten oder außerhalb des Produktionsservers zugänglich ist.

In den Django-Dokumenten wird vorgeschlagen, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer serverseitigen Datei gelesen werden sollten. Lassen Sie uns die _LocalLibrary_ -Anwendung so ändern, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env** Datei im Hauptverzeichnis definiert sind, und schließlich auf die Standardwerte in der Konfigurationsdatei zurückgreifen. Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration zulässt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zur Verwendung dieser als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR` ein, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Hauptverzeichnis der Webanwendung. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** Datei hinzufügen, sind wahrscheinlich _geheime Informationen_!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY` -Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, daher wird der Standardwert verwendet (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden, oder ob der Schlüssel "geleakt" wird, da Sie ihn nicht in der Produktion verwenden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG` -Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert der `DEBUG` wird standardmäßig `True` sein, wird jedoch nur `False`, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist. Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf "False" unter Linux einstellen, indem Sie den folgenden Befehl eingeben:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste mit Einstellungen, die Sie möglicherweise ändern möchten, finden Sie im [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe davon mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ zur Bereitstellung unserer LocalLibrary-Anwendung während der Entwicklung nicht benötigen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung einrichteten](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (verwenden Sie den `workon [name-of-virtual-environment]` Befehl). Installieren Sie dann _Gunicorn_ lokal auf der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittlere Websites. Leider kann sie bei einigen beliebten Hosting-Diensten, wie Heroku, nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite). Obwohl dies uns bei dem Beispiel der Bereitstellung(en) nicht beeinflussen kann, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliothek Anwendung mithilfe einer Adresse aufgerufen wird, die als Umgebungsvariable übergeben wird. In diesem Fall werden wir eine Postgres-Datenbank verwenden, die ebenfalls auf Railway gehostet wird, aber Sie könnten einen beliebigen Datenbank-Hosting-Dienst Ihrer Wahl verwenden.

Die Datenbankverbindungsinformationen werden Django mithilfe einer Umgebungsvariablen namens `DATABASE_URL` bereitgestellt. Anstatt diese Informationen fest in Django zu codieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL` Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Neben der Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django das zum Interagieren mit Postgres-Datenbanken benötigt.

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariablen gesetzt ist; andernfalls verwendet es die Standard-SQLite-Datenbank. Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um ihn auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig auf Postgres umsteigen und die gleiche gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie die gleiche Umgebungsvariable in Ihrer Entwicklungsumgebung einstellen (Railway erleichtert es, dieselbe Umgebung für Produktion und Entwicklung zu nutzen). Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML-Inhalte als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist ausgereizt für statische Dateien, da die Anfragen durch Django geschickt werden müssen, obwohl Django nichts damit tut. Obwohl dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir häufig die statischen Dateien von der Django-Webanwendung, was es erleichtert, diese direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das das _collectstatic_ Werkzeug von Django alle statischen Dateien sammeln wird, die in unseren Templates referenziert werden. Einmal gesammelt, können diese dann als Gruppe an den Ort hochgeladen werden, an dem die Dateien gehostet werden.
- `STATICFILES_DIRS`: Dieses Listet zusätzliche Verzeichnisse auf, die das _collectstatic_ Werkzeug von Django nach statischen Dateien durchsuchen soll.

Django-Templates beziehen sich auf statische Dateipfade relativ zu einem `static` Tag (dies können Sie in dem Basistemplate sehen, das im [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum der `STATIC_URL` Einstellung entspricht. Statische Dateien können daher auf jeden beliebigen Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mithilfe dieser Einstellung zu finden.

Das _collectstatic_ Werkzeug wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch das `STATIC_ROOT` Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird und dabei alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert werden. `Whitenoise` findet dann die Dateien von dem Ort, der standardmäßig durch `STATIC_ROOT` definiert ist, und stellt sie unter der Basis-URL bereit, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (der `STATIC_URL` könnte bereits angegeben worden sein, als die Datei erstellt wurde. Dies wird keinen Schaden anrichten, aber Sie sollten den vorherigen doppelten Verweis dennoch löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden tatsächlich das Datei-Serving mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

Sehen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bereitstellen dieser Dateien darstellt.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Installieren Sie Whitenoise

Installieren Sie Whitenoise lokal, indem Sie den folgenden Befehl ausführen:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE` Einstellung und fügen Sie das `WhiteNoiseMiddleware` oben in der Liste hinzu, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (das ist effizienter). Fügen Sie einfach das folgende am Ende von **/locallibrary/settings.py** hinzu:

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

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden. Viele Hostingdienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ erstellen, indem Sie den folgenden Befehl auf der Kommandozeile eingeben (führen Sie den folgenden Befehl im Root-Repo aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Unterschiede sollte Ihre **requirements.txt** Datei _zumindest_ diese Elemente aufgeführt haben (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht aufgelistet sind, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Source-Code-Verwaltungsplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erleichtern.

Sie sollten bereits GitHub verwenden, um den lokalen Bibliotheksquellcode zu speichern (dies wurde in [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „Vanilla“-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, für die Bereitstellung bei jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung), werden andere dies möglicherweise nicht tun. Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen im `main` Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen wie folgt zu sichern:

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

Wir entscheiden uns aus mehreren Gründen für PythonAnywhere:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migriert, als die bisher kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel auch beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, leichter zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie das nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Planbegrenzungen hindern uns nicht daran, PythonAnywhere für das Tutorial zu verwenden.
  Zum Beispiel:
  - Der Anfängerplan ermöglicht eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz für unsere grundlegende Website, um zu laufen!
  - Benutzerdefinierte Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird, sodass sie möglicherweise langsam neu gestartet wird.
    Sie können es für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung verlängern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, nicht jedoch Postgres.
    In dieser Demonstration verwenden wir einfach die Standard-Django-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, um zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet ein vollständig webbasiertes Interface zum Hochladen, Bearbeiten und anderweitig mit Ihrer Anwendung arbeiten.

Durch das Interface können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, werden wir einfach die Standard-SQLite-Datenbank von Django in der gehosteten Ubuntu-Umgebung verwenden (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Nachdem die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie für den Einstieg benötigen.

### Erhalten Sie ein PythonAnywhere-Konto

Um PythonAnywhere nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite von PythonAnywhere und klicken Sie auf die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Bedingungen und klicken Sie auf **Registrieren**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek aus GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub. Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie im oberen Anwendungsleiste auf **Consoles** klicken.
2. Wählen Sie dann **Bash** aus, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole zum späteren Gebrauch zusammen mit ihrer gesamten Geschichte gespeichert wird. Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir anstelle hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" zu erstellen, um die lokalen Bibliotheksabhängigkeiten zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der im [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird. Wir hätten die Umbenennung beliebig nennen können und können sie mit den unten genannten Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen aus GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrem Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto nutzen, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die lokale Bibliotheksquelle in einen Ordner mit dem Namen `odtsetseg.pythonanywhere.com` verschieben).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihre eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt` Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir dies während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellung_und_verbindung_einer_postgres_sql-datenbank) und diese anschließen, indem wir die `DATABASE_URL` Umgebungsvariable festlegen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet werden soll, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einen Ort, an dem sie in Produktion [bereitgestellt werden können](#statische_dateien_in_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Seite zuzugreifen (siehe Abschnitt [Django Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser)):

   ```bash
   python manage.py createsuperuser
   ```

   Merken Sie sich die Details, da Sie sie benötigen, um Ihre Seite zu testen.

### Einrichten der Web-App

Nachdem Sie die lokalen Bibliotheksquellen abgerufen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere sagen, wie sie sie finden und als Web-App verwenden können.

1. Navigieren Sie zum Abschnitt _Web_ der Website und klicken Sie auf den **Add a new web app** Link:

   ![PythonAnywhere "Web"-Abschnitt zeigt Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteinstellungen der Web-App zu führen.

2. Klicken Sie auf **Next**, um die Konfiguration des Domain-Namens der Web-App zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zum Einstellen des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Ein Python-Webframework auswählen_ die Option **Manuelle Konfiguration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des für die Anwendung verwendeten Webframeworks](python_anywhere_web_add_select_framework_manual.png)

   Bei der manuellen Konfiguration haben wir die volle Kontrolle darüber, wie die Umgebung konfiguriert wird. Das spielt jetzt nicht so sehr eine Rolle, wäre aber wichtig, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie auf dem Bildschirm _Eine Python-Version auswählen_ **3.10** aus

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemein sollten Sie die neueste Version von Python auswählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie auf dem Bildschirm _Manuelle Konfiguration_ **Next** (der Bildschirm erklärt nur einige der Optionen für die Konfiguration)

   ![PythonAnywhere-Eingabeaufforderung, die die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Webbereich wie gezeigt angezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Webanwendung nach weiteren Änderungen neu zu laden. Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Run until 3 months from today** klicken, damit die Site für weitere drei Monate (und fortlaufend) am Leben bleibt.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie zum Abschnitt "Code" des _Web_-Tabs und klicken Sie auf den Link zur WSGI-Konfigurationsdatei. Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI Datei im Web-Tab, Codesektion](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (aktualisieren Sie zuerst „hamishwillee“ mit Ihrem eigenen Benutzernamen) und klicken Sie dann auf die Schaltfläche **Save**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden. PythonAnywhere erwartet, dass sich diese Datei an diesem Standort befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie zum Abschnitt "Virtuelle Umgebung" des _Web_-Tabs herunter. Klicken Sie auf den Link **Pfad zu einer virtuellen Umgebung eingeben, falls erwünscht** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorhergehenden Abschnitt erstellt wurde. Wenn Sie ihn wie vorgeschlagen „env_local_library“ genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual Env-Abschnitt des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt "Statische Dateien" des _Web_-Tabs herunter.

   ![PythonAnywhere Statische Dateien Sektion des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **URL eingeben** und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an dem die Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausführten.

9. Wählen Sie oben im _Web_-Tab die Schaltfläche **Reload**, um die Website neu zu starten. Klicken Sie dann auf den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Web-Screen mit dem hervorgehobenen Link zum Öffnen der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt aber ein Sicherheitsrisiko auf einer bereitgestellten Seite dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Maß an Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um die URL Ihrer PythonAnywhere-Site aufzunehmen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz nutzen, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel einstellen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren. Wenn Sie davon ausgehen, dass Sie Ihre Änderungen bereits auf den Haupt-Branch gepusht haben, können Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Taste auf dem `Web`-Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet und die Startseite der Website angezeigt werden.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher und so weiter erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereiten Sie Ihre Website zur Veröffentlichung vor](#machen_sie_ihre_website_bereit_zur_veröffentlichung) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env** Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie `DJANGO_DEBUG=False` setzen können, um das gezeigt das Debugging vermindert wird, wenn es einen Fehler gibt und dem Benutzer nicht mehr so viel angezeigt wird, wenn es einen Fehler gibt; und `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion gesetzt wird; und `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (dies tun wir in diesem Beispiel nicht).

Die Methode, die Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab. Bei PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen. Wir sind bereits dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie eine PythonAnywhere Bash-Eingabeaufforderung.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben. Zum Beispiel, um `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel ein Genre erstellen, dann die Zahl in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine „Nicht gefunden“-Meldung anstatt einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert werden kann.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Starterstufe mehr.
> Wir haben diese Anweisungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht müssen. Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und einfacheren Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar. Railway hat einige exzellente neue Funktionen, aber andere beliebte Hosting-Dienste verwenden viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie es am Ende lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen laufen jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Website benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden sollen, um die Webanwendung zu starten. Bei Django handelt es sich dabei in der Regel um den Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung zu starten.

Sobald die Anwendung läuft, kann sie sich selbst mithilfe von [Umgebungsvariablen](https://docs.railway.com/guides/variables) konfigurieren. Eine Anwendung, welche eine Datenbank verwendet, kann z. B. die Adresse mit der Variable `DATABASE_URL` erhalten. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von der lokalen Branch auf die Live-Site hochzuladen, das Protokoll des laufenden Prozesses zu inspizieren, Konfigurationsvariablen einzurichten und abzurufen und vieles mehr. Einer der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die obigen Dateien hinzufügen, mit einer Datenbank-Erweiterung integrieren und Änderungen vornehmen, um statische Dateien richtig zu verwalten. Sobald wir das alles erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie zur Einführung wissen müssen.

### Aktualisierung der App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Workflows, die wir bereits gelernt haben, zu verwenden.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung. Er listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stammverzeichnis Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Der `web:` Präfix gibt Railway an, dass es sich um einen Web-Prozess handelt, und kann HTTP-Verkehr gesendet werden. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Anschließend rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT` Projekt-Einstellung definiert ist (siehe den Abschnitt [Statische Dateien in der Produktion bereitstellen](#statische_dateien_in_produktion_bereitstellen) unten). Zum Schluss starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm die Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ zu verwenden und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Version bereitgestellt wird.

#### Laufzeit

Die Datei **runtime.txt**, falls definiert, gibt der Railway an, welche Version von Python verwendet werden soll. Erstellen Sie die Datei im Stammverzeichnis des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Nebenversion. Sie wählen in der Regel die nächstgelegene unterstützte Version zu der von Ihnen angegebenen Version aus.

#### Neu testen und Änderungen in GitHub speichern

Bevor Sie fortfahren, testen Sie die Site noch einmal lokal und stellen Sie sicher, dass sie durch die oben genannten Änderungen nicht kaputt gegangen ist. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie anschließend die Site in Ihrem Browser.

```bash
python3 manage.py runserver
```

Als Nächstes `pushen` wir die Änderungen nach GitHub. Geben Sie im Terminal (nach der Navigation zu unserem lokalen Repository) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann einen PR auf GitHub und führen Sie ihn zusammen.

Wir sollten jetzt bereit sein, die LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Pop-up aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto bestätigen.
- Sie werden dann zum Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Seite aus und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Option, ein Projekt von einer Vorlage, die zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Anzahl von Datenbanken bereitzustellen. Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - Bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt einen Dialog zur Auswahl eines bestehenden GitHub-Repositorys oder zur Auswahl eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie auf **Deploy Now** klicken.

![Bestätigungsbildschirm - Auswahl bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite zeigt eine vollständige Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt aber ein Sicherheitsrisiko auf einer bereitgestellten Seite dar. Wir zeigen Ihnen, wie Sie sie deaktivieren, sobald die Seite läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL aufzunehmen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz nutzen, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel einstellen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Bereitstellung und Verbindung einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und an die Django-Anwendung anschließen, die wir gerade bereitgestellt haben. (Wenn Sie die Seite jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht erreicht werden kann). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen können.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Seite aus und klicken Sie dann auf Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann gewählt werden, um Variablen und andere Details des Dienstes einzurichten). Die Schaltfläche **Einstellungen** kann ausgewählt werden, um projektweite Einstellungen zu ändern. Wählen Sie die **Neu**-Taste aus, die verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway Projekt mit hervorgehobener neuer Diensttaste](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway Projekt - wählen Sie Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Hinzufügen von PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway Projekt - wählen Sie Postgres als neuen Dienst aus](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit. Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste in der Projektübersicht.

![Railway Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst aus und dann die Registerkarte Variablen. Wählen Sie **Neue Variable** und dann im Feld _Variablenname_, wählen Sie **Referenz hinzufügen**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir dem LocalLibrary hinzugefügt haben, um sie als Umgebungsvariable zu lesen).

![Railway Webseite Bildschirm, der eine DATABASE_URL auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um den Variablenbezug hinzuzufügen und schließlich **Bereitstellen** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie es auch hätten tun können, indem Sie die Postgres-Datenbank öffnen, dann auf ihre Registerkarte Variablen und die Variable kopieren.

Wenn Sie das Projekt jetzt öffnen, sollte es genau wie lokal angezeigt werden. Beachten Sie jedoch, dass es keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch keinen Superuser-Account erstellt haben. Wir werden das mit dem [CLI](https://docs.railway.com/guides/cli) -Werkzeug auf unserem lokalen Computer tun.

### Den Client installieren

Laden und installieren Sie den Railway-Client für Ihr lokales Betriebssystem, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal unter Verwendung der gleichen Einstellungen wie auf dem Produktionsserver. Wir zeigen diese in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl gegen die Produktionsdatenbank aufrufen (dies ist derselbe Vorgang, den wir lokal in [Django-Tutorial Teil 4: Django-Admin-Seite > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben). Railway bietet keinen direkten Zugriff auf das Terminal des Servers und wir können diesen Befehl nicht zum [Procfile](#procfile) hinzufügen, weil es interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt aufzurufen, wenn er mit der _Produktions_ Datenbank verbunden ist. Der Railway-Client macht es einfach, indem eine Möglichkeit zum Ausführen von Befehlen lokal bereitgestellt wird, die dieselben Umgebungsvariablen wie der Produktionsserver verwenden, einschließlich des Datenbank-Verbindungsstrings.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts. Melden Sie sich dann bei Ihrem Browserkonto mit dem Befehl `login` oder `login --browserless` an (folgen Sie ggf. den Aufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Nachdem Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugeordneten Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie ein bestimmtes Projekt auswählen/eingeben müssen, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt jetzt _verlinkt_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Dann rufen Sie den folgenden Befehl auf, geben Sie Name, E-Mail und Passwort ein, wenn Sie dazu aufgefordert werden:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, Ihr Website-Admin-Bereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genau wie im [Django-Tutorial Teil 4: Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)).

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Seite sicher zu machen. Insbesondere müssen wir das Debugging deaktivieren und einen geheimen CSRF-Schlüssel festlegen. Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde im Abschnitt [Bereiten Sie Ihre Website zur Veröffentlichung vor](#machen_sie_ihre_website_bereit_zur_veröffentlichung) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie die Informationsseite für das Projekt und wählen Sie die Registerkarte _Variablen_ aus. Diese sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - neuen Variablenbildschirm hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu erstellen. Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungskomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **Neue Variable**-Taste und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (klicken Sie dann auf **Hinzufügen**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway Bildschirm zeigt alle Projektvariablen an](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den Befehl logs, um den Protokollnachlauf anzuzeigen (ein ausführlicheres Protokoll ist für jedes Projekt auf der Seite verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen als dies, müssten Sie mit [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beginnen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in Produktion, und auch die Serie von Tutorials zur Arbeit mit Django. Wir hoffen, Sie fanden es nützlich. Sie können eine vollständig durchgearbeitete Version des [Source-Codes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) ansehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)
  - [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Deploying static files](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway Docs
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Other DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku Docs (ähnliches Setup-Konzept)
  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Working with Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
