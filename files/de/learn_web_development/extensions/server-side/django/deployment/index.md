---
title: "Django-Tutorial Teil 11: Django in einer Produktionsumgebung bereitstellen"
short-title: "11: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: cd8d0bb1068b703abe027522a7c0f3e8c9ce9c39
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielwebsite mit Django erstellt und getestet. Jetzt ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie über das öffentliche Internet für alle zugänglich ist.
Diese Seite beschreibt, wie Sie ein Django-Projekt hosten und was Sie vorbereiten müssen, um Ihre Website in einer Produktionsumgebung bereitzustellen.

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
      <td>Erfahren, wo und wie Sie eine Django-App in einer Produktionsumgebung bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder „fertig genug“, um öffentliche Tests zu beginnen), müssen Sie sie an einem Ort hosten, der öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Website für den lokalen Browser bzw. das lokale Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debug- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting statischer Dateien auswählen.
- Eine Infrastruktur auf Produktionsniveau für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet Hinweise zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick über die erforderlichen Schritte, um Ihre Django-App für die Produktion vorzubereiten, sowie ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website beim Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für externe Nutzer ausführen. Die Umgebung umfasst:

- Computerhardware, auf der die Website ausgeführt wird.
- Betriebssystem (z. B. Linux, Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf deren Grundlage Ihre Website erstellt wurde.
- Webserver zur Bereitstellung von Seiten und anderen Inhalten (z. B. Nginx, Apache).
- Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, verfügen Sie möglicherweise auch über einen Reverse Proxy, Load Balancer usw.

Der Servercomputer könnte sich in Ihren eigenen Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein. Weitaus üblicher ist jedoch die Verwendung eines Computers, der „in der Cloud“ gehostet wird. Das bedeutet in der Praxis, dass Ihr Code auf einem Remotecomputer (oder möglicherweise einem „virtuellen“ Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise gegen einen bestimmten Preis ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicher usw.) und Internetverbindung.

Diese Art von remote zugänglicher Rechen- und Netzwerkhardware wird als _Infrastructure as a Service_ (IaaS) bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, umfassendere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, weil sie den Konfigurationsaufwand reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und auf einer älteren Version des Betriebssystems basieren. Häufig ist es besser, Komponenten selbst zu installieren, damit Sie genau die gewünschten Komponenten erhalten und beim Aktualisieren von Teilen des Systems eine Vorstellung davon haben, wo Sie beginnen müssen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_-Angebots (PaaS). Bei dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung kümmern (Webserver, Anwendungsserver, Load Balancer), da die Hosting-Plattform diese Aufgaben für Sie übernimmt — ebenso wie den größten Teil dessen, was erforderlich ist, um Ihre Anwendung zu skalieren.
Das erleichtert die Bereitstellung erheblich, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte übrige Serverinfrastruktur.

Einige Entwickler bevorzugen die größere Flexibilität von IaaS gegenüber PaaS, während andere den geringeren Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Wenn Sie beginnen, ist die Einrichtung Ihrer Website auf einem PaaS-System wesentlich einfacher. Daher werden wir dies in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python-/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zur Einrichtung einer Django-Website mit unterschiedlichen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. (Dies ist nicht relevant, wenn Sie ein PaaS wählen.) Beispielsweise gibt es in der [DigitalOcean-Django-Community-Dokumentation](https://www.digitalocean.com/community/tutorials?q=django) viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen.

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die Django entweder aktiv unterstützen oder gut damit funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter stellen unterschiedliche Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Mengen an Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen bereit.

Bei der Auswahl eines Hosts sollten Sie unter anderem Folgendes berücksichtigen:

- Wie stark Ihre Website voraussichtlich genutzt wird und welche Kosten für Daten- und Rechenressourcen anfallen, um diesen Bedarf zu decken.
- Grad der Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) sowie die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren betreibt und daher der Zugriff voraussichtlich am schnellsten ist.
- Die bisherige Verfügbarkeit und Ausfallzeit des Hosts.
- Werkzeuge zur Verwaltung der Website — sind sie einfach zu verwenden und sicher (z. B. SFTP gegenüber FTP)?
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in bestimmten Preisstufen nur eine bestimmte Anzahl von Stunden „Laufzeit“ oder nur wenig Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter stellen kostenlose Domainnamen und Unterstützung für TLS-Zertifikate bereit, für die Sie andernfalls bezahlen müssten.
- Ob die von Ihnen genutzte „kostenlose“ Stufe im Laufe der Zeit abläuft und ob die Kosten für die Migration in eine teurere Stufe bedeuten, dass ein anderer Dienst von Anfang an die bessere Wahl gewesen wäre!

Die gute Nachricht für Einsteiger ist, dass es zahlreiche Websites gibt, die „kostenlose“ Rechenumgebungen für Evaluierung und Tests bereitstellen.
Diese Umgebungen verfügen gewöhnlich über begrenzte Ressourcen. Sie sollten beachten, dass sie nach einer Einführungsphase ablaufen oder andere Einschränkungen haben können.
Sie eignen sich jedoch hervorragend, um Websites mit geringem Datenverkehr in einer gehosteten Umgebung zu testen, und ermöglichen eine einfache Migration zu kostenpflichtigen Ressourcen, wenn Ihre Website stärker genutzt wird.
Beliebte Optionen in dieser Kategorie umfassen [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten außerdem eine „Basis“-Stufe für kleine Produktionswebsites an, die mehr nutzbare Rechenleistung und weniger Einschränkungen bereitstellt.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter mit einer vergleichsweise günstigen Basis-Rechenstufe (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte Skalierbarkeit der wichtigste Gesichtspunkt werden.

## Ihre Website für die Veröffentlichung vorbereiten

Die [Django-Skelettwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den Werkzeugen _django-admin_ und _manage.py_ erstellt wurde, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele Django-Projekteinstellungen (in **settings.py** angegeben) sollten für die Produktion anders sein, entweder aus Sicherheits- oder aus Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu verwenden und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte geschützt werden, selbst wenn der übrige Quellcode in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Diese Einstellung sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dadurch wird verhindert, dass sensible/vertrauliche Debug-Trace- und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Quellcodeverwaltung enthalten oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumentation empfiehlt, geheime Informationen am besten aus einer Umgebungsvariable oder einer Datei zu laden, die nur auf dem Server verfügbar ist.
Ändern wir die _LocalLibrary_-Anwendung so, dass unsere Variablen `SECRET_KEY` und `DEBUG` aus Umgebungsvariablen gelesen werden, sofern sie definiert sind, andernfalls aus Werten in einer **.env**-Datei im Stammverzeichnis und zuletzt aus den Standardwerten in der Konfigurationsdatei.
Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration erlaubt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zum Verwenden dieser Paare als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek wie gezeigt in Ihrer virtuellen Umgebung (und aktualisieren Sie auch Ihre Datei `requirements.txt`):

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

Dadurch wird die Datei `.env` aus dem Stammverzeichnis der Webanwendung geladen.
Variablen, die in der Datei als `KEY=VALUE` definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls er definiert ist.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer Datei `.gitignore` hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten dargestellt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „durchsickert“, weil Sie ihn nicht in der Produktion verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene Einstellung `DEBUG` aus und fügen Sie die unten dargestellte neue Zeile hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird aber nur dann `False`, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der Datei **.env** gesetzt wird.
Beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Daher müssen wir Zeichenketten vergleichen. Die einzige Möglichkeit, die Variable `DEBUG` auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Unter Linux können Sie die Umgebungsvariable mit dem folgenden Befehl auf „False“ setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Prüfliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können außerdem einige davon mit dem folgenden Terminalbefehl auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zur Bereitstellung von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, installieren wir ihn lokal, damit er bei der Bereitstellung der Anwendung Teil unserer [Abhängigkeiten](#abhängigkeiten) wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie anschließend _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie während der Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie bei einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, weil diese keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Auch wenn dies unsere Beispielbereitstellung(en) möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Dieser Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet ausgeführt wird und auf die die Django-Bibliotheksanwendung über eine als Umgebungsvariable übergebene Adresse zugreift.
In diesem Fall verwenden wir eine ebenfalls bei Railway gehostete Postgres-Datenbank, Sie könnten jedoch jeden beliebigen Datenbank-Hosting-Dienst verwenden.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt.
Statt diese Informationen fest in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die Umgebungsvariable `DATABASE_URL` zu parsen und automatisch in Djangos gewünschtes Konfigurationsformat umzuwandeln.
Neben der Installation des Pakets _dj-database-url_ müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies für die Interaktion mit Postgres-Datenbanken benötigt.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Abhängigkeiten](#abhängigkeiten) wird, die auf dem Bereitstellungsserver eingerichtet werden:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die Standard-SQLite-Datenbank.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was wesentlich effizienter ist als das Neuerstellen der Verbindung in jedem Anfragezyklus (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Abhängigkeiten](#abhängigkeiten) wird, die Railway auf dem Remote-Server einrichtet:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwendet, sofern `DATABASE_URL` nicht gesetzt ist.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway erleichtert die Verwendung derselben Umgebung für Produktion und Entwicklung).
Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unser dynamisches HTML als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, weil die Anfragen durch Django geleitet werden müssen, obwohl Django nichts mit ihnen macht.
Während dies in der Entwicklung keine Rolle spielt, hätte derselbe Ansatz in der Produktion erhebliche Auswirkungen auf die Leistung.

In der Produktionsumgebung trennen wir statische Dateien typischerweise von der Django-Webanwendung, wodurch es einfacher wird, sie direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Speicherort, von dem aus statische Dateien bereitgestellt werden, beispielsweise über ein CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos Werkzeug _collectstatic_ alle statischen Dateien sammelt, auf die in unseren Templates verwiesen wird. Nach dem Sammeln können diese als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Diese Einstellung listet zusätzliche Verzeichnisse auf, die Djangos Werkzeug _collectstatic_ nach statischen Dateien durchsuchen soll.

Django-Templates verweisen relativ zu einem `static`-Tag auf Speicherorte statischer Dateien (dies sehen Sie im Basis-Template, das in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), der wiederum der Einstellung `STATIC_URL` zugeordnet ist.
Statische Dateien können daher zu jedem Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, damit sie diese mithilfe dieser Einstellung findet.

Das Werkzeug _collectstatic_ wird verwendet, um statische Dateien in dem Ordner zu sammeln, der durch die Projekteinstellung `STATIC_ROOT` definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird. Dabei werden alle statischen Dateien der Anwendung an den durch `STATIC_ROOT` angegebenen Speicherort kopiert.
`Whitenoise` findet dann die Dateien am durch `STATIC_ROOT` definierten Speicherort (standardmäßig) und stellt sie unter der durch `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
`BASE_DIR` sollte bereits in Ihrer Datei definiert sein (`STATIC_URL` wurde möglicherweise bereits beim Erstellen der Datei darin definiert.
Obwohl dies keinen Schaden verursacht, können Sie den vorherigen doppelten Verweis ebenso gut löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Die Dateibereitstellung führen wir tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durch, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (die relevanten Django-Einstellungen haben wir in den vorherigen Abschnitten gesehen).
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Methoden, statische Assets in der Produktion direkt über Gunicorn bereitzustellen.

Lesen Sie die [WhiteNoise](https://pypi.org/project/whitenoise/)-Dokumentation für eine Erklärung der Funktionsweise und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für die Verwendung mit dem Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### whitenoise installieren

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die Einstellung `MIDDLEWARE` und fügen Sie die `WhiteNoiseMiddleware` nahe dem Anfang der Liste direkt unter der `SecurityMiddleware` hinzu:

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
Fügen Sie einfach Folgendes an das Ende von **/locallibrary/settings.py** hinzu:

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

### Abhängigkeiten

Die Python-Abhängigkeiten Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden.
Viele Hosting-Dienste installieren die Abhängigkeiten in dieser Datei automatisch (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ über die Befehlszeile erstellen (führen Sie Folgendes im Stammverzeichnis des Repositorys aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre Datei **requirements.txt** _mindestens_ diese Einträge enthalten (die Versionsnummern können jedoch abweichen).
Löschen Sie alle anderen unten nicht aufgeführten Abhängigkeiten, sofern Sie sie nicht ausdrücklich für diese Anwendung hinzugefügt haben.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Ihr Anwendungs-Repository auf GitHub aktualisieren

Viele Hosting-Dienste ermöglichen Ihnen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder aus cloudbasierten Plattformen für die Versionsverwaltung des Quellcodes.
Dies kann die Bereitstellung und iterative Entwicklung wesentlich erleichtern.

Sie sollten GitHub bereits verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) beim Einrichten Ihrer Entwicklungsumgebung konfiguriert.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „unveränderten“ Projekts zu erstellen — einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, können zwar für die Bereitstellung bei jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein, andere jedoch möglicherweise nicht.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen im Branch `main` auf GitHub gesichert, können Sie wie gezeigt einen neuen Branch erstellen, um Ihre Änderungen zu sichern:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hosten.

### Warum PythonAnywhere?

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere bietet einen [kostenlosen Beginner-Plan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass der Dienst für alle Entwickler erschwinglich ist, ist für MDN besonders wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, wobei wir migriert sind, als die zuvor kostenlosen Tarife eingestellt wurden.
  > Wir haben PythonAnywhere ausgewählt, weil wir glauben, dass dieser Tarif wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst ausgeführt wird, einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie dies nicht tun müssen.
  Wenn Sie sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern müssen, ist der Einstieg wesentlich einfacher.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere erlernen, sind übertragbar.
- Die Einschränkungen des Dienstes und Plans beeinträchtigen uns bei der Verwendung von PythonAnywhere für das Tutorial nicht wesentlich.
  Zum Beispiel:
  - Der Beginner-Plan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff aus Ihren Apps, geringe CPU-/Bandbreitenressourcen, keine Unterstützung für IPython-/Jupyter-Notebooks und keine kostenlose Postgres-Datenbank.
    Es gibt jedoch genug Speicherplatz, damit unsere grundlegende Website ausgeführt werden kann!
  - Benutzerdefinierte Domains werden zum Zeitpunkt der Erstellung nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass ein Neustart langsam sein kann.
    Sie können sie dauerhaft betreiben, müssen jedoch die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres.
    In dieser Demonstration verwenden wir lediglich die Standard-Django-SQLite-Datenbank.

PythonAnywhere eignet sich zum Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen, festzustellen, ob es [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere stellt eine vollständig webbasierte Schnittstelle bereit, über die Sie Ihre Anwendung hochladen, bearbeiten und anderweitig mit ihr arbeiten können.

Über die Schnittstelle können Sie eine Bash-Konsole für eine Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Obwohl wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, nutzen wir einfach die Standard-SQLite-Datenbank, die Django in der gehosteten Ubuntu-Umgebung erstellt (es gibt mehr als genug Speicherplatz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung ausgeführt wird, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie als Überblick benötigen, um zu beginnen.

### Ein PythonAnywhere-Konto erstellen

Um PythonAnywhere zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Rufen Sie die Seite [Plans and pricing](https://www.pythonanywhere.com/pricing/) von PythonAnywhere auf und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Benutzername, E-Mail-Adresse und Passwort, bestätigen Sie die Geschäftsbedingungen und wählen Sie dann **Register**.
- Sie werden anschließend angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und laden den Quellcode der lokalen Bibliothek von GitHub.
Wir konfigurieren außerdem die Standarddatenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Bildschirm zur Konsolenverwaltung, indem Sie in der oberen Anwendungsleiste **Consoles** auswählen.
2. Wählen Sie anschließend den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des Bildschirms zur PythonAnywhere-Konsolenverwaltung](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole zur späteren Wiederverwendung gespeichert wird, zusammen mit ihrem gesamten Verlauf.
   Der grüne Pfeil oben zeigt, dass dieses Konto über eine Konsole verfügt, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine virtuelle Python-3.10-Umgebung namens „env_local_library“ zur Installation der Abhängigkeiten der lokalen Bibliothek zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment).
   Wir hätten der Umgebung einen beliebigen Namen geben können und können sie mit den folgenden Befehlen deaktivieren und erneut aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Laden Sie als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Website-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (wenn Ihr Benutzername beispielsweise „Odtsetseg“ lautet, müssen Sie den Quellcode der lokalen Bibliothek in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

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

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie während der Entwicklung).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#eine_postgres-sql-datenbank_bereitstellen_und_verbinden) und uns mit ihr verbinden, indem wir die Umgebungsvariable `DATABASE_URL` setzen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Speicherort, von dem aus sie [in der Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website (wie im Abschnitt [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Website zu testen.

### Die Web-App einrichten

Nachdem wir die Quellen der lokalen Bibliothek abgerufen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie diese gefunden und als Web-App verwendet werden.

1. Navigieren Sie zum Bereich _Web_ der Website und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere-Bereich „Web“ mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der Assistent _Create new web app_ wird geöffnet und führt Sie durch die Konfiguration der wichtigsten Eigenschaften der Web-App.

2. Wählen Sie **Next**, um die Konfiguration des Domainnamens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domain anhand Ihres Benutzernamens: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zum Festlegen des Domainnamens einer neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des für die Anwendung verwendeten Webframeworks](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Das ist jetzt nicht so wichtig, wäre es aber, wenn wir mehrere Websites hosten würden, möglicherweise mit unterschiedlichen Python- und/oder Django-Versionen.

4. Wählen Sie im Bildschirm _Select a Python version_ die Version **3.10** aus.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Python-Version auswählen, die von der verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** aus (der Bildschirm erläutert lediglich einige Konfigurationsoptionen).

   ![PythonAnywhere-Eingabeaufforderung mit Erläuterung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und wie gezeigt im Bereich Web angezeigt.
   Der Bildschirm besitzt eine Schaltfläche **Reload**, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können.
   Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Run until 3 months from today** klicken, damit die Website weitere drei Monate (und fortlaufend) aktiv bleibt.

   ![Konfigurierte PythonAnywhere-Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten zum Abschnitt „Code“ des Tabs _Web_ und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese trägt einen Namen der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere-WSGI-Datei im Tab Web, Abschnitt Code](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zunächst „hamishwillee“ mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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

   Beachten Sie, dass die Aufgabe der WSGI-Datei darin besteht, dem Gunicorn-Server beim Auffinden der lokalen Bibliotheksanwendung zu helfen.
   PythonAnywhere erwartet diese Datei an diesem Speicherort, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt „Virtualenv“ des Tabs _Web_.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der im vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie sie wie vorgeschlagen „env_local_library“ genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere-Abschnitt Virtual env im Tab Web](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt „Static files“ des Tabs _Web_.

   ![PythonAnywhere-Abschnitt Static files im Tab Web](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und entspricht dem Speicherort, an den die Dateien beim Ausführen von `collectstatic` im vorherigen Abschnitt kopiert wurden.

9. Wählen Sie oben im Tab _Web_ die Schaltfläche **Reload**, um die Website neu zu starten.
   Wählen Sie anschließend den Link zur Website-URL, um die Live-Website zu öffnen:

![PythonAnywhere-Webbildschirm mit hervorgehobenem Link zum Starten der Website](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Website geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten dargestellt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem „zulässigen Host“ ausgeführt wird.

![Eine detaillierte Fehlerseite mit vollständigem Traceback eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist beim Einrichten sehr nützlich, stellt jedoch auf einer bereitgestellten Website ein Sicherheitsrisiko dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Protokollierungsebene auf der Live-Website mithilfe von [Umgebungsvariablen](#umgebungsvariablen_auf_pythonanywhere_verwenden) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), damit sie Ihre PythonAnywhere-Website-URL enthält:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwendet, müssen Sie außerdem den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repository.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen in den Branch main gepusht, können Sie sie mit dem folgenden Befehl in der Bash-Eingabeaufforderung importieren:

```bash
git pull origin main
```

Verwenden Sie die Schaltfläche **Restart** im Tab `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Website aktualisieren, sollte sie nun geöffnet werden und die Startseite der Website anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Umgebungsvariablen auf PythonAnywhere verwenden

Im Abschnitt [Ihre Website für die Veröffentlichung vorbereiten](#ihre_website_für_die_veröffentlichung_vorbereiten) haben wir die Anwendung so geändert, dass sie in der Produktion mit Umgebungsvariablen oder Variablen in einer **.env**-Datei konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um die bei einem Fehler für Benutzer angezeigte Debug-Ablaufverfolgung zu reduzieren.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (in diesem Beispiel tun wir dies nicht).

Wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind bereits dafür eingerichtet, daher müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie eine PythonAnywhere-Bash-Eingabeaufforderung.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die Datei `.env` schreiben.
   Um beispielsweise `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen nicht vorhandenen Datensatz zu öffnen (erstellen Sie beispielsweise ein Genre und erhöhen Sie dann die Nummer in der URL-Leiste, um einen noch nicht erstellten Datensatz zu öffnen).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine Meldung „Not found“ anstelle einer detaillierten Debug-Ablaufverfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway verfügt nicht mehr über eine vollständig kostenlose Starter-Stufe.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen bietet und für einige Benutzer die bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht tun müssen.
  Wenn Sie sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern müssen, ist der Einstieg wesentlich einfacher.
- Railway legt einen [Schwerpunkt auf die Developer Experience bei Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und weniger steilen Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway erlernen, sind übertragbar.
  Railway verfügt zwar über einige hervorragende neue Funktionen, andere beliebte Hosting-Dienste verwenden jedoch viele derselben Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein. Falls er Ihnen gefällt, ist die Preisgestaltung vorhersehbar und die Skalierung Ihrer App sehr einfach.

Sie sollten sich die Zeit nehmen, festzustellen, ob Railway [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert Railway?

Webanwendungen werden jeweils in einem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway die passende Umgebung und Abhängigkeiten einrichten können und außerdem verstehen, wie die Anwendung gestartet wird.
Für Django-Apps stellen wir diese Informationen in mehreren Textdateien bereit:

- **runtime.txt**: Gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: Listet die für Ihre Website benötigten Python-Abhängigkeiten auf, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die zum Starten der Webanwendung ausgeführt werden.
  Bei Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung ausgeführt wird, kann sie sich mithilfe von Informationen aus [Umgebungsvariablen](https://docs.railway.com/variables) konfigurieren.
Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variable `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles Werkzeug für die [Command Line Interface (CLI)](https://docs.railway.com/cli).
Mit der CLI können Sie ein lokales GitHub-Repository einem Railway-Projekt zuordnen, das Repository vom lokalen Branch auf die Live-Website hochladen, die Protokolle des laufenden Prozesses prüfen, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eine der nützlichsten Funktionen besteht darin, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Damit unsere Anwendung auf Railway funktioniert, müssen wir unsere Django-Webanwendung in ein Git-Repository legen, die oben genannten Dateien hinzufügen, ein Datenbank-Add-on integrieren und Änderungen zur ordnungsgemäßen Behandlung statischer Dateien vornehmen.
Sobald wir das erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client beziehen und unsere Website installieren.

Das ist alles, was Sie als Überblick benötigen, um zu beginnen.

### Die App für Railway aktualisieren

Dieser Abschnitt erläutert die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, damit sie auf Railway funktioniert.
Wir müssen tatsächlich nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die bereits erlernten lokalen Tests und Workflows zu verwenden.

#### Procfile

Eine _Procfile_ ist der „Einstiegspunkt“ der Webanwendung.
Sie listet die Befehle auf, die Railway zum Starten Ihrer Website ausführt.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stammverzeichnis Ihres GitHub-Repositorys und kopieren Sie den folgenden Text hinein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass dies ein Webprozess ist und HTTP-Datenverkehr an ihn gesendet werden kann.
Anschließend rufen wir den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Danach rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den durch die Projekteinstellung `STATIC_ROOT` definierten Ordner zu sammeln (siehe Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Abschließend starten wir den Prozess _gunicorn_, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (das mit unserem Anwendungsskelett erstellt wurde: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits für die Einbindung von _gunicorn_ und die Unterstützung der Bereitstellung statischer Dateien eingerichtet haben!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die Datei **runtime.txt** teilt Railway, sofern sie definiert ist, mit, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Stammverzeichnis des Repositorys und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Nebenversion.
> Im Allgemeinen verwenden sie die unterstützte Version, die dem von Ihnen angegebenen Wert am nächsten liegt.

#### Änderungen erneut testen und auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Website zunächst erneut lokal und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie anschließend in Ihrem Browser, ob die Website weiterhin erwartungsgemäß funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes `push`en wir die Änderungen auf GitHub.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert sind) die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann den PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Rufen Sie [railway.com](https://railway.com/) auf und klicken Sie in der oberen Symbolleiste auf den Link **Login**.
- Wählen Sie im Pop-up GitHub aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie anschließend Ihre E-Mails aufrufen und Ihr Konto verifizieren.
- Sie werden dann beim Railway.com-Dashboard angemeldet: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als Nächstes richten wir Railway so ein, dass unsere Bibliothek von GitHub bereitgestellt wird.
Wählen Sie zunächst die Option **Dashboard** im oberen Menü der Website und dann die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit Schaltfläche für neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wird, sowie mehrere Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm – bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repositories, die Sie während der Einrichtung für Railway freigegeben haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm mit Dialog zur Auswahl eines vorhandenen GitHub-Repositorys oder eines neuen Repositorys](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung durch Auswahl von **Deploy Now**.

![Bestätigungsbildschirm – Bereitstellung auswählen](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit; der Fortschritt wird im Tab für Bereitstellungen angezeigt.
Nach erfolgreichem Abschluss der Bereitstellung sehen Sie einen Bildschirm wie den unten dargestellten.

![Railway-Website-Bildschirm – Bereitstellung](railway_project_deploy.png)

Sie können auf die Website-URL klicken (oben hervorgehoben), um die Website in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht vollständig ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Website geöffnet wird, sehen Sie an diesem Punkt einen Fehler-Debug-Bildschirm wie unten dargestellt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem „zulässigen Host“ ausgeführt wird.

![Eine detaillierte Fehlerseite mit vollständigem Traceback eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist beim Einrichten sehr nützlich, stellt jedoch auf einer bereitgestellten Website ein Sicherheitsrisiko dar.
> Wir zeigen Ihnen, wie Sie dies deaktivieren, sobald die Website ausgeführt wird.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), damit sie Ihre Railway-Website-URL enthält:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwendet, müssen Sie außerdem den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie anschließend Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repository (Railway aktualisiert Ihre Anwendung automatisch und stellt sie erneut bereit).

### Eine Postgres-SQL-Datenbank bereitstellen und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Website jetzt öffnen, erhalten Sie einen neuen Fehler, weil auf die Datenbank nicht zugegriffen werden kann.)
Wir erstellen die Datenbank als Teil des Anwendungsprojekts, obwohl Sie die Datenbank auch in einem eigenen separaten Projekt erstellen können.

Wählen Sie in Railway die Option **Dashboard** im oberen Menü der Website und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzelnen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die Schaltfläche **Settings** kann ausgewählt werden, um projektweite Einstellungen zu ändern.
Wählen Sie die Schaltfläche **New**, die zum Hinzufügen von Diensten zum Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener Schaltfläche für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach dem hinzuzufügenden Diensttyp gefragt werden:

![Railway-Projekt – Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie anschließend **Add PostgreSQL**, um das Hinzufügen der Datenbank zu beginnen.

![Railway-Projekt – Postgres als neuen Dienst auswählen](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit.
Nach Abschluss sehen Sie in der Projektansicht nun sowohl den Anwendungs- als auch den Datenbankdienst.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und anschließend den Tab _Variables_.
Wählen Sie **New Variable** und dann im Feld _Variable name_ die Option **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` aus (dies ist der Name der Variablen, die wir für die lokale Bibliothek so eingerichtet haben, dass sie als Umgebungsvariable gelesen wird).

![Railway-Website-Bildschirm zur Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie anschließend **Add**, um den Variablenverweis hinzuzufügen, und schließlich **Deploy** (dies wird in einem Pop-up angezeigt).
Beachten Sie, dass Sie auch die Postgres-Datenbank und dann deren Variablen-Tab hätten öffnen und die Variable kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, weil wir noch kein Superuser-Konto erstellt haben.
Dies erledigen wir mit dem Werkzeug [CLI](https://docs.railway.com/cli) auf unserem lokalen Computer.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Zu den wichtigsten Vorgängen gehören die Bereitstellung des aktuellen Verzeichnisses Ihres Computers in einem zugeordneten Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver.
Wir zeigen dies in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie Folgendes in einem Terminal eingeben:

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` für die Produktionsdatenbank aufrufen (dies ist derselbe Vorgang, den wir lokal in [Django-Tutorial Teil 4: Django-Admin-Website > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, weil er interaktiv ist.

Wir können diesen Befehl jedoch lokal für unser Django-Projekt aufrufen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client erleichtert dies, indem er einen Mechanismus bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres locallibrary-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` bei Ihrem Browser-Konto an (folgen Sie allen daraufhin angezeigten Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugehörigen Railway-Projekt über den folgenden Befehl.
Beachten Sie, dass Sie bei Aufforderung ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Nachdem das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie bei Bedarf Name, E-Mail-Adresse und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun den Admin-Bereich Ihrer Website öffnen können (`https://[your-url].railway.app/admin/`) und die Datenbank füllen können, wie in [Django-Tutorial Teil 4: Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) dargestellt.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Website abzusichern.
Insbesondere müssen wir die Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde in [Ihre Website für die Veröffentlichung vorbereiten](#ihre_website_für_die_veröffentlichung_vorbereiten) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Tab _Variables_.
Dieser sollte bereits die `DATABASE_URL` wie unten dargestellt enthalten.

![Railway – Bildschirm zum Hinzufügen einer neuen Variable](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu erzeugen.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Add**).
Geben Sie anschließend den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der endgültige Variablensatz sollte folgendermaßen aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den Befehl logs bereit, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bereitstellen kann, müssen Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beschäftigen.

## Zusammenfassung

Damit endet dieses Tutorial zum Einrichten von Django-Apps in der Produktion und auch die Tutorialreihe zur Arbeit mit Django. Wir hoffen, dass sie für Sie nützlich war. Eine vollständig ausgearbeitete Version des [Quellcodes finden Sie hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und anschließend die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Anleitung: Mit WSGI bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Anleitung: Django mit Apache und mod_wsgi verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Anleitung: Django mit Gunicorn verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellen](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean-Django-Community-Dokumentation](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)
  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Django auf Heroku](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Parallelität und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzwerte](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Mit Django arbeiten](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
