---
title: "Django Tutorial Teil 11: Django in die Produktion bringen"
short-title: "11: Deployment"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet, jetzt ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie über das öffentliche Internet für jeden zugänglich ist.
Diese Seite beschreibt, wie man ein Django-Projekt hostet und was Sie vorbereiten müssen, um Ihre Website für ein Produktionsdeployment bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder fertig genug, um mit öffentlichen Tests zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Website für den lokalen Browser/das lokale Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an den Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting statischer Dateien wählen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial gibt einige Hinweise zu Ihren Optionen bei der Wahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereit zu machen, und ein funktionierendes Beispiel dafür, wie die LocalLibrary-Website auf dem [Railway](https://railway.com/)-Cloud-Hosting-Dienst installiert wird.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Ihre Website für den externen Zugriff ausgeführt wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website ausgeführt wird.
- Betriebssystem (z. B. Linux, Windows).
- Laufzeit der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf die Ihre Website angewiesen ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse-Proxy, einen Lastenausgleich und so weiter haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und mit einer schnellen Verbindung mit dem Internet verbunden sein, aber es ist weit häufiger, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher, etc.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Hard- und Networking-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen für die Vorinstallation eines bestimmten Betriebssystems an, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, vollständigere Umgebungen auszuwählen, möglicherweise einschließlich eines vollständigen Django- und Web-Server-Setups.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, sodass Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen können!

Andere Hosting-Anbieter unterstützen Django im Rahmen eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleich) kümmern, da die Host-Plattform dies für Sie übernimmt — zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht das Deployment recht einfach, weil Sie sich einfach auf Ihre Webanwendung konzentrieren können und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS bietet, über PaaS wählen, während andere die reduzierte Wartung und einfachere Skalierung von PaaS schätzen. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen bereitstellen, wie man eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy und so weiter einrichtet (das wird nicht relevant sein, wenn Sie ein PaaS wählen). Es gibt zum Beispiel viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Wahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, entweder aktiv Django zu unterstützen oder gut mit Django zu funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Überlegungen bei der Wahl eines Hosts:

- Wie beschäftigt Ihre Website voraussichtlich sein wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Level der Unterstützung für horizontale Skalierung (Hinzufügen von mehr Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher am schnellsten sein wird.
- Historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden „Live-Zeit“ in einigen Preisklassen oder bieten nur eine kleine Menge Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für das Upgrade auf eine teurere Stufe bedeuten, dass Sie von Anfang an einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht ist, wenn Sie gerade erst anfangen, dass es ziemlich viele Websites gibt, die „kostenlose“ Computerumgebungen bereitstellen, die für Bewertung und Tests gedacht sind.
Dies sind in der Regel relativ beschränkte/limitierte Umgebungen und Sie müssen sich bewusst sein, dass sie nach einer gewissen Einführungszeit ablaufen können oder andere Einschränkungen haben.
Sie sind jedoch großartig für das Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen einfachen Übergang zu einer bezahlten Lösung ermöglichen, wenn Ihre Website mehr Verkehr hat.
Beliebte Entscheidungen in diesem Bereich sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine „grundlegende“ Stufe an, die für kleine Produktionswebsites gedacht ist und nützlichere Level von Rechenleistung und weniger Einschränkungen bereitstellt.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ preiswerte grundlegende Rechenstufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website bereit zum Veröffentlichen machen

Die mit _django-admin_ und _manage.py_ erstellte [Django-Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung einfacher ist. Viele der Django-Projekteinstellungen (wie in **settings.py** angegeben) sollten für die Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Trace- und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer, zufälliger Wert, der zum Beispiel für CSRF-Schutz verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer dateibasierten, nur für den Server zugänglichen Datei gelesen werden sollten.
Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, falls sie definiert sind, und auf Werte zurückfallen, die in einer **.env**-Datei im Root definiert sind, und schließlich auf die im Konfigurationsfile definierten Standardwerte. Dies ist sehr flexibel, da es jede von der Hosting-Umgebung unterstützte Konfiguration erlaubt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, aber nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach `BASE_DIR` ein, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung.
Variablen, die in der Datei als `KEY=VALUE` definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht zu GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte egal sein, welchen Schlüssel Sie hier verwenden, oder ob der Schlüssel „veröffentlicht“ wird, denn Sie werden ihn in der Produktion nicht verwenden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die bestehende `DEBUG`-Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur dann `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariable auf `False` gesetzt wird oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt wird.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Daher müssen wir Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf "False" unter Linux durch Eingabe des folgenden Befehls einstellen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie in der [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Eine Anzahl dieser Einstellungen kann auch mit dem folgenden Terminalbefehl aufgelistet werden:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der üblicherweise für das Anbinden von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [requirements](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zuerst sicher, dass Sie sich in der Python-Virtual-Umgebung befinden, die bei [Einrichtung der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie anschließend _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da diese keinen dauerhaften Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Während dies uns für die bereitgestellten Beispielbereitstellungen nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und auf die die Django-Bibliotheksanwendung über eine Adresse zugreift, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hostingdienst verwenden, den Sie möchten.

Die Datenbankverbindungsinformationen werden an Django über eine Umgebungsvariable namens `DATABASE_URL` übergeben.
Anstatt diese Informationen fest in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) wird, um auf dem Bereitstellungsserver eingerichtet zu werden:

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

Django wird nun die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die SQLite-Standarddatenbank verwendet.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung bei jedem Anforderungsvorgang neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) für Railway wird, um auf dem Remote-Server eingerichtet zu werden:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig auf Postgres umschalten und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung festlegen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellung statischer Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript, etc.) bereitzustellen.
Dies ist für statische Dateien ineffizient, weil die Anfragen durch Django gehen müssen, obwohl Django nichts damit macht.
Obwohl dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Leistungsprobleme, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL-Position, von der aus statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Templates referenziert werden. Sobald gesammelt, können sie dann als Gruppe zu dem Ort hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, in denen Djangos _collectstatic_-Tool nach statischen Dateien suchen soll.

Django-Templates beziehen sich auf Standorte statischer Dateien relativ zu einem `static`-Tag (Sie können dies im Basistemplate sehen, das in [Django-Tutorial Teil 5: Erstellen unserer Homepage](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), welches wiederum mit der `STATIC_URL`-Einstellung korrespondiert.
Statische Dateien können also auf jedem Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie unter dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in dem durch die `STATIC_ROOT`-Projekteinstellung definierten Ordner zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung aufgerufen werden und kopiert alle statischen Dateien in der Anwendung an den Ort, der durch `STATIC_ROOT` definiert ist.
`Whitenoise` findet die Dateien aus dem standardmäßig definierten `STATIC_ROOT`-Standort und liefert sie an der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits in der Datei definiert gewesen sein, als sie erstellt wurde.
Während es keinen Schaden anrichten würde, könnten Sie die doppelte frühere Referenz auch löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Datei-Dienste tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) bereitstellen, die wir im nächsten Abschnitt installieren und konfigurieren werden.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet einen der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

In der [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation finden Sie eine Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bereitstellen dieser Dateien ist.

Die Schritte, um _WhiteNoise_ für das Projekt einzurichten, sind [hier angezeigt](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Installieren Sie whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware` nahe dem Anfang der Liste, direkt unter dem `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der bereitgestellten statischen Dateien reduzieren (das ist effizienter).
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

Sie müssen nichts Weiteres tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Abhängigkeiten Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositorys gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten aus dieser Datei (in anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ auf der Kommandozeile erstellen (führen Sie das Folgende im Root des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie all die verschiedenen Abhängigkeiten oben installiert haben, sollte Ihre **requirements.txt** Datei _mindestens_ diese Einträge enthalten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen nicht aufgelisteten Abhängigkeiten, es sei denn, Sie haben sie für diese Anwendung ausdrücklich hinzugefügt.

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

Viele Hosting-Dienste erlauben es Ihnen, Projekte aus einem lokalen Repository oder von cloud-basierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann das Deployment und iterative Entwicklung deutlich erleichtern.

Sie sollten bereits GitHub zur Speicherung des Local-Library-Quellcodes verwenden (dies wurde in [Source Code Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für das Deployment auf jedem Hosting-Dienst sein könnten (oder für die Entwicklung), könnten andere es nicht sein. Vorausgesetzt, Sie haben bereits alle bisher vorgenommenen Änderungen in der `main`-Branche auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen wie folgt zu sichern:

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

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere bietet einen wirklich kostenlosen [Einsteigerplan](https://www.pythonanywhere.com/pricing/), obwohl mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migriert, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben PythonAnywhere ausgewählt, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel auch beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit Postgres-Datenbanken, die auf einem anderen Dienst laufen, einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load-Balancer, Reverse-Proxy usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Der Service und die Planbeschränkungen beeinträchtigen uns nicht besonders, wenn wir PythonAnywhere für das Tutorial verwenden.
  Zum Beispiel:
  - Der Einsteigerplan erlaubt nur eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff von Ihren Apps, niedrigen CPU/Bandbreitenverbrauch, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz für unsere Basis-Site, um zu laufen!
  - Eigene Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, daher kann es zu Verzögerungen beim Neustart kommen.
    Sie können sie für immer betreiben, aber Sie müssen die Site alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen herauszufinden, ob es für Ihre eigene Website [geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet ein vollständig webbasiertes Interface zum Hochladen, Bearbeiten und sonstigen Arbeiten mit Ihrer Anwendung.

Über das Interface können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration werden wir die Konsole verwenden, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Unterstützung für Postgres.
Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die Standard-SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionen zu demonstrieren).

Sobald die Anwendung läuft, kann sie durch das Setzen von Umgebungsvariablen über die Bash-Konsole für die Produktion konfiguriert werden.

Das ist alles, was Sie an Übersicht benötigen, um loszulegen.

### Holen Sie sich ein PythonAnywhere-Konto

Um PythonAnywhere zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur Seite mit den [Plänen und Preisen](https://www.pythonanywhere.com/pricing/) von PythonAnywhere und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, E-Mail und Passwort, bestätigen Sie die Nutzungsbedingungen und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard umgeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes werden wir ein Bash-Prompt öffnen, eine virtuelle Umgebung einrichten und den lokalen Bibliotheksquellcode von GitHub abrufen.
Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bereich „Consoles“ (Konsolensteuerung), indem Sie in der oberen Anwendungsleiste auf **Consoles** (Konsolen) klicken.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirmfoto der PythonAnywhere-Konsolensteuerung mit der Option zur Erstellung einer neuen Bash-Konsole](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für die spätere Wiederverwendung gespeichert wird, zusammen mit der gesamten Verlaufshistorie.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" für die Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau der gleiche Prozess, der unter [Einrichtung einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können, und wir können sie deaktivieren und mit den unten stehenden Befehlen reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes den Bibliotheksquellcode von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrer Site-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername „Odtsetseg“ ist, müssen Sie die lokale Bibliotheksquelle in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihren Bibliotheksquellcode in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt` Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Host-Computer (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#erstellen_und_konfiguration_einer_postgres_sql_datenbank) und eine Verbindung herstellen, indem wir die `DATABASE_URL` Umgebungsvariable setzen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem diese [in der Produktion bereitgestellt](#bereitstellung_statischer_dateien_in_der_produktion) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website (wie im Abschnitt [Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie diese benötigen, um Ihre Website zu testen.

### Richten Sie die Web-App ein

Nachdem Sie den lokalen Bibliotheksquellcode abgerufen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie finden und als Web-App verwenden kann.

1. Navigieren Sie zum _Web_ Bereich der Site und klicken Sie auf den Link **Add a new web app** (Eine neue Webanwendung hinzufügen):

   ![PythonAnywhere-Webbereich mit Schaltfläche zum Hinzufügen einer neuen Anwendung](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domainnamens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zum Einstellen des Domainnamens einer neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zum Auswählen eines in der Anwendung verwendeten Webframeworks](python_anywhere_web_add_select_framework_manual.png)

   Manuelle Konfiguration gibt uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert ist.
   Dies spielt momentan keine große Rolle, aber es würde, wenn wir mehrere Sites hosten würden, möglicherweise mit unterschiedlichen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Select a Python version_ **3.10**

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste von der von Ihnen verwendeten Django-Version zulässige Python-Version auswählen.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Eingabeaufforderung zur Erläuterung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Webbereich wie gezeigt angezeigt.
   Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Webanwendung zu aktualisieren, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm erwähnt, müssen Sie die Schaltfläche **Run until 3 months from today** klicken, um die Website für weitere drei Monate am Leben zu halten (und fortlaufend).

   ![Konfigurierte PythonAnywhere-Webanwendung](python_anywhere_web_configuration.png)

6. Scrollen Sie im "Code"-Abschnitt des _Web_-Tabs nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese wird einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py` haben.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (aktualisieren Sie zuerst „hamishwillee“ mit Ihrem eigenen Benutzernamen), und klicken Sie dann auf die Schaltfläche **Save**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server den Zugriff auf die Local-Library-Anwendung zu ermöglichen.
   PythonAnywhere erwartet, dass sich diese Datei an diesem Ort befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im „Virtualenv“-Abschnitt des _Web_-Tabs nach unten.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der in den vorangegangenen Schritten erstellten virtuellen Umgebung ein.
   Wenn Sie es "env_local_library" genannt haben, wie vorgeschlagen, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env Abschnitt des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im „Static files“-Abschnitt des _Web_-Tabs nach unten.

   ![PythonAnywhere-Statische Dateien-Abteilung auf dem Web-Tab](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein.
   Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Klicken Sie oben im _Web_-Tab auf die Schaltfläche **Reload**, um die Site neu zu starten.
   Klicken Sie dann auf den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere-Bildschirm mit hervorgehobenem Link zum Starten der Site](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem „erlaubten“ Host läuft.

![Ein detaillierter Fehlerbildschirm mit vollständigem Rückverfolgung einer ungültigen HTTP_HOST-Überschrift](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie die Einrichtung abgeschlossen haben, stellt jedoch ein Sicherheitsrisiko bei einer bereitgestellten Site dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Maß an Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com`, und Sie haben die Änderungen in den Main-Branch gepushed, dann könnten Sie sie im Bash-Prompt mit dem folgenden Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche auf dem `Web`-Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun offen sein und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können, Autoren, Genres, Bücher usw. erstellen, genauso wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website bereit für die Veröffentlichung machen](#ihre_website_bereit_zum_veröffentlichen_machen) haben wir die Anwendung so modifiziert, dass sie mit Hilfe von Umgebungsvariablen oder Variablen in einer **.env**-Datei in Produktion konfiguriert werden kann.

Konkret haben wir die Bibliothek so eingerichtet, dass Sie `DJANGO_DEBUG=False` setzen können, um die Debug-Verfolgung, die dem Benutzer bei einem Fehler angezeigt wird, zu reduzieren.

- `DJANGO_SECRET_KEY` auf einen geheimen Wert in Produktion setzen.
- `DATABASE_URL` falls Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Der Weg, auf dem Umgebungsvariablen festgelegt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Das haben wir bereits eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein Bash-Prompt auf PythonAnywhere.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paar in die `.env`-Datei schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel ein Genre erstellen und dann die Nummer in der URL-Leiste inkrementieren, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine „Nicht gefunden“-Nachricht anstelle einer detaillierten Debug-Verfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen komplett kostenlosen Starter Tier mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option ist.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, so dass Sie sich darum nicht kümmern müssen.
  Wenn man sich nicht um Server, Lastenausgleich, Reverse-Proxies und so weiter kümmern muss, ist es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Deployment](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen herauszufinden, ob Railway für Ihre eigene Website [geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Diese Informationen stellen wir für Django-Apps in einer Reihe von Textdateien zur Verfügung:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden müssen, um die Webanwendung zu starten.
  Bei Django wird dies in der Regel der Gunicorn-Webanwendungsserver sein (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung ausgeführt wird, kann sie sich mit Informationen, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden, konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool.
Das CLI erlaubt es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von der lokalen Zweigstelle auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen, und vieles mehr.
Eines der nützlichsten Features ist, dass Sie mit dem CLI-Tool Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository legen, die oben genannten Dateien hinzufügen, eine Datenbankverbindung integrieren und Änderungen vornehmen, um statische Dateien korrekt zu handhaben.
Sobald wir das alles gemacht haben, können wir ein Railway-Konto einrichten, den Railway-Client holen und unsere Website installieren.

Das ist alles, was wir überblicksmäßig brauchen, um loszulegen.

### Die App für Railway aktualisieren

In diesem Abschnitt erklären wir die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachachten Sie, dass diese Änderungen Sie nicht daran hindern, die bereits gelernten lokalen Tests und Arbeitsabläufe zu verwenden.

#### Procfile

Eine _Procfile_ ist der „Einstiegspunkt“ der Webanwendung.
Es listet die Befehle auf, die von Railway ausgeführt werden sollen, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` gibt Railway an, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Dann rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien im Ordner zu sammeln, der von der `STATIC_ROOT`-Projekteinstellung definiert wird (siehe den Abschnitt [Bereitstellung statischer Dateien in der Produktion](#bereitstellung_statischer_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, dem wir Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**) übergeben.

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ umfasst und die Bereitstellung statischer Dateien unterstützt!

Mit dem Procfile können Sie auch Arbeitsprozesse starten oder andere nicht interaktive Aufgaben ausführen, bevor das Release bereitgestellt wird.

#### Runtime

Die **runtime.txt**-Datei gibt, wenn definiert, Railway an, welche Version von Python verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht immer jede Python-Laufzeit-Minor-Version.
> In der Regel verwenden sie die nächste unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Testen und spe

ichern Sie die Änderungen in GitHub

Bevor Sie weitergehen, testen Sie die Site erneut lokal und überprüfen Sie, ob sie durch keine der oben vorgenommenen Änderungen kaputtgegangen ist.
Starten Sie den Entwicklungs-Webserver wie gewohnt und überprüfen Sie dann, ob die Site in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als Nächstes die Änderungen zu GitHub pushen.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann in GitHub einen Pull-Request und führen Sie ihn zusammen.

Jetzt sollten wir bereit sein, LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Werkzeugleiste der Site.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie müssen möglicherweise zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Deployment auf Railway von GitHub

Als Nächstes werden wir Railway einrichten, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Site und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projektbeschreibung Risobene](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Option, ein Projekt von einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, sowie eine Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - Benutzerdefinierte Bereitstellung](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm, der ein Dialogfeld zum Auswahl eines bestehenden GitHub-Repositorys oder zum Auswählen eines neuen anzeigt](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Auswahl bereitstellen](railway_new_project_deploy_confirm.png)

Railway wird Ihr Projekt laden und bereitstellen, und den Fortschritt auf der Registerkarte „Bereitstellungen“ anzeigen.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird jedoch immer noch nicht funktionieren, weil die Einrichtung noch nicht abgeschlossen ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, zu diesem Zeitpunkt werden Sie ein Fehler-Debug-Bildschirm wie unten gezeigt sehen.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten" Host läuft.

![Ein detaillierter Fehlerbildschirm mit vollständiger Rückverfolgung einer ungültigen HTTP_HOST-Überschrift](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie die Einrichtung abgeschlossen haben, stellt jedoch ein Sicherheitsrisiko bei einer bereitgestellten Site dar.
> Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site betriebsbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Erstellen und Konfiguration einer Postgres SQL Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugänglich ist).
Wir erstellen die Datenbank als Teil des Anwendungsprojekts, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen können.

Auf Railway wählen Sie die Option **Dashboard** im oberen Menü der Site und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen Service für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die Schaltfläche **Settings** (Einstellungen) kann zum Ändern der Projekteinstellungen verwendet werden.
Wählen Sie die Schaltfläche „New“, um der Projekt einen neuen Dienst hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie „Database“, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - Wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann „Add PostgreSQL“ (PostgreSQL hinzufügen), um die Datenbank hinzuzufügen.

![Railway-Projekt - Wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss werden nun sowohl der Anwendungs- als auch der Datenbankdienst in der Projektansicht angezeigt.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variables_ (Variablen).
Wählen Sie **New Variable** (Neue Variable) und dann im Feld _Variable name_ (Variablenname), wählen Sie **Add reference** (Referenz hinzufügen).
Scrollen Sie herunter und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit die LocalLibrary eine Umgebungsvariable liest).

![Railway-Website-Bildschirm zur Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add** (Hinzufügen), um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup angezeigt).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann die Registerkarte Variablen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genau wie lokal angezeigt werden.
Beachten Sie jedoch, dass es noch keinen Weg gibt, die Bibliothek mit Daten zu füllen, weil wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer tun.

### Installieren Sie den Client

Laden Sie den Railway-Client herunter und installieren Sie ihn für Ihr lokales Betriebssystem, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen beinhalten das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem verbundenen Railway-Projekt (ohne es auf GitHub hochladen zu müssen), und Ihr Django-Projekt lokal mit den gleichen Einstellungen zu betreiben wie auf dem Produktionsserver.
Wir zeigen diese in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie Folgendes in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System ausgeloggt werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Konfigurieren Sie einen Superuser

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist die gleiche Operation, die wir lokal in [Django-Tutorial Teil 4: Django-Admin-Seite > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht zum [Procfile](#procfile) hinzufügen, weil er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, da er einen Mechanismus bereitstellt, um Befehle lokal mit den gleichen Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres Local-Library-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` an Ihrem Browserkonto an (folgen Sie allen resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Nachdem Sie sich angemeldet haben, verknüpfen Sie Ihr aktuelles Local-Library-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie bei der Aufforderung ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Nachdem das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Produktionseinrichtungseinstellungen ausführen.
Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie wie erforderlich Name, E-Mail-Adresse und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Adminbereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank genauso zu füllen, wie es in [Django-Tutorial Teil 4: Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt wurde.

### Konfigurationsvariablen einstellen

Der letzte Schritt ist, die Site sicher zu machen.
Insbesondere müssen wir das Debug-Protokoll ausschalten und einen geheimen CSRF-Schlüssel einstellen.
Die Arbeit, die benötigten Werte aus Umgebungsvariablen zu lesen, wurde im Abschnitt [Ihre Website bereit zum Veröffentlichen machen](#ihre_website_bereit_zum_veröffentlichen_machen) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_ (Variablen).
Dies sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - Bildschirm für neue Variablen hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptographisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie den **New Variable**-Button und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann **Add** anwählen).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Die letzte Gruppe der Variablen sollte so aussehen:

![Railway-Bildschirm, der alle Projektvariablen anzeigt](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den Befehl logs bereit, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bereitstellen kann, müssen Sie sich in das [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) einarbeiten.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch die Serie von Tutorials über die Arbeit mit Django. Wir hoffen, Sie haben es nützlich gefunden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial) ansehen.

Der nächste Schritt ist, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Bereitstellung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)
  - [Konfiguration von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Einschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
