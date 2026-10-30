---
title: "Django-Tutorial Teil 11: Django in der Produktionsumgebung bereitstellen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielwebsite mit Django erstellt und getestet. Nun ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie für alle über das öffentliche Internet erreichbar ist.
Diese Seite beschreibt, wie Sie ein Django-Projekt hosten und was Sie vorbereiten müssen, um Ihre Website in einer Produktionsumgebung bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Teile des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Eine Django-Webanwendung testen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-Anwendung in einer Produktionsumgebung bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist – oder zumindest „fertig genug“ für öffentliche Tests –, müssen Sie sie an einem Ort hosten, der öffentlicher und besser erreichbar ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet: Sie haben Ihre Website mit dem Django-Entwicklungswebserver im lokalen Browser oder Netzwerk bereitgestellt und sie mit Entwicklungseinstellungen betrieben, die Debug-Informationen und andere vertrauliche Daten offenlegen können. Bevor Sie eine Website extern hosten können, müssen Sie:

- Einige Projekteinstellungen ändern.
- Eine Umgebung zum Hosten der Django-Anwendung auswählen.
- Eine Umgebung zum Hosten statischer Dateien auswählen.
- Eine für den Produktionsbetrieb geeignete Infrastruktur für Ihre Website einrichten.

Dieses Tutorial gibt Ihnen Orientierung bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick über die Vorbereitung Ihrer Django-Anwendung für den Produktionsbetrieb und ein praktisches Beispiel für die Installation der LocalLibrary-Website beim Cloud-Hosting-Dienst [Railway](https://railway.com/).

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung auf dem Server, auf dem Ihre Website für externe Nutzer ausgeführt wird. Sie umfasst:

- Die Computerhardware, auf der die Website läuft.
- Das Betriebssystem (z. B. Linux oder Windows).
- Die Laufzeitumgebung der Programmiersprache und die Framework-Bibliotheken, mit denen Ihre Website erstellt wurde.
- Den Webserver, der Seiten und andere Inhalte ausliefert (z. B. Nginx oder Apache).
- Den Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Die Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Je nach Konfiguration Ihrer Produktionsumgebung können auch ein Reverse Proxy, ein Load Balancer und weitere Komponenten dazugehören.

Der Server könnte sich in Ihren eigenen Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein. Wesentlich häufiger wird jedoch ein Computer genutzt, der „in der Cloud“ gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer – möglicherweise einem „virtuellen“ Computer – in einem Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet in der Regel gegen Bezahlung ein zugesichertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internetanbindung.

Diese Art von aus der Ferne zugänglicher Computer- und Netzwerkinfrastruktur wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die übrigen Komponenten Ihrer Produktionsumgebung selbst installieren müssen. Bei anderen Anbietern können Sie eine umfangreicher ausgestattete Umgebung wählen, die möglicherweise bereits eine vollständige Django- und Webserver-Konfiguration enthält.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erheblich vereinfachen, da weniger Konfiguration nötig ist. Die verfügbaren Optionen können Sie jedoch auf einen ungewohnten Server oder andere ungewohnte Komponenten beschränken und auf einer älteren Betriebssystemversion basieren. Oft ist es besser, Komponenten selbst zu installieren. So erhalten Sie genau die Komponenten, die Sie möchten, und wissen bei späteren Aktualisierungen eher, wo Sie anfangen müssen.

Andere Hosting-Anbieter unterstützen Django im Rahmen eines _Platform as a Service (PaaS)_-Angebots. Bei dieser Art des Hostings müssen Sie sich um den Großteil Ihrer Produktionsumgebung – etwa Webserver, Anwendungsserver und Load Balancer – nicht selbst kümmern. Das übernimmt die Hosting-Plattform für Sie, ebenso wie die meisten Aufgaben, die zur Skalierung Ihrer Anwendung erforderlich sind.
Die Bereitstellung wird dadurch recht einfach, weil Sie sich auf Ihre Webanwendung konzentrieren können statt auf die übrige Serverinfrastruktur.

Manche Entwickler bevorzugen die größere Flexibilität von IaaS gegenüber PaaS, während andere den geringeren Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Für den Einstieg ist es wesentlich einfacher, Ihre Website auf einem PaaS-System einzurichten. Deshalb verwenden wir in diesem Tutorial diesen Ansatz.

> [!NOTE]
> Wenn Sie einen Python- und Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zum Einrichten einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. Bei einem PaaS-Angebot ist das nicht relevant. Beispielsweise finden Sie in der [Django-Community-Dokumentation von DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django) zahlreiche Schritt-für-Schritt-Anleitungen für unterschiedliche Konfigurationen.

## Einen Hosting-Anbieter auswählen

Es gibt viele Hosting-Anbieter, die Django aktiv unterstützen oder gut damit funktionieren, darunter [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen.
Diese Anbieter stellen unterschiedliche Arten von Umgebungen (IaaS und PaaS) sowie unterschiedliche Mengen an Rechen- und Netzwerkressourcen zu verschiedenen Preisen bereit.

Bei der Auswahl eines Anbieters sollten Sie unter anderem Folgendes berücksichtigen:

- Wie stark Ihre Website voraussichtlich genutzt wird und was die dafür erforderlichen Daten- und Rechenressourcen kosten.
- Wie gut horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Umstieg auf leistungsfähigere Maschinen) unterstützt werden und welche Kosten dabei entstehen.
- Wo der Anbieter Rechenzentren betreibt und von welchen Standorten aus der Zugriff daher voraussichtlich am schnellsten ist.
- Wie zuverlässig der Anbieter in der Vergangenheit war und wie häufig Ausfälle auftraten.
- Welche Werkzeuge zur Verwaltung der Website bereitgestellt werden und ob sie einfach und sicher zu verwenden sind (z. B. SFTP statt FTP).
- Welche integrierten Möglichkeiten zur Überwachung Ihres Servers vorhanden sind.
- Bekannte Einschränkungen. Manche Anbieter blockieren bestimmte Dienste absichtlich (z. B. E-Mail). Andere bieten in einigen Preismodellen nur eine bestimmte Anzahl an Betriebsstunden oder nur wenig Speicherplatz.
- Zusätzliche Vorteile. Manche Anbieter stellen kostenlose Domainnamen oder Unterstützung für TLS-Zertifikate bereit, für die Sie sonst bezahlen müssten.
- Ob ein Tarif, auf dessen „kostenlose“ Nutzung Sie setzen, nach einiger Zeit ausläuft und ob die Kosten eines Wechsels zu einem teureren Tarif bedeuten, dass ein anderer Dienst von Anfang an die bessere Wahl gewesen wäre.

Für den Einstieg ist es hilfreich, dass einige Anbieter „kostenlose“ Rechenumgebungen zum Ausprobieren und Testen bereitstellen.
Diese Umgebungen haben meist recht knappe oder eingeschränkte Ressourcen. Beachten Sie außerdem, dass sie nach einer Einführungsphase auslaufen oder anderen Beschränkungen unterliegen können.
Sie eignen sich dennoch hervorragend, um Websites mit geringem Datenverkehr in einer gehosteten Umgebung zu testen, und ermöglichen häufig einen einfachen Wechsel zu einem kostenpflichtigen Tarif, wenn Ihre Website stärker genutzt wird.
Zu den bekannten Angeboten dieser Art gehören [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter haben außerdem einen „Basistarif“ für kleinere produktive Websites. Er bietet mehr nutzbare Rechenleistung und weniger Einschränkungen.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für bekannte Hosting-Anbieter mit einem vergleichsweise günstigen Basistarif für Rechenressourcen (etwa 5 bis 10 US-Dollar pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich die Skalierbarkeit als wichtigster Faktor erweisen.

## Ihre Website auf die Veröffentlichung vorbereiten

Das mit den Werkzeugen _django-admin_ und _manage.py_ erstellte [Django-Projektgerüst](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass es die Entwicklung erleichtert. Viele der Django-Projekteinstellungen in **settings.py** sollten für den Produktionsbetrieb anders gesetzt werden – aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Häufig gibt es für den Produktionsbetrieb eine separate **settings.py**-Datei. Alternativ oder zusätzlich werden sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen importiert. Eine solche Datei sollte geschützt werden, selbst wenn der übrige Quellcode in einem öffentlichen Repository verfügbar ist.

Die wichtigsten Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Im Produktionsbetrieb sollte dieser Wert `False` sein (`DEBUG = False`). Dadurch wird verhindert, dass vertrauliche Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der unter anderem für den CSRF-Schutz verwendet wird. Der im Produktionsbetrieb verwendete Schlüssel darf weder in der Versionsverwaltung liegen noch außerhalb des Produktionsservers zugänglich sein.

Die Django-Dokumentation empfiehlt, geheime Informationen aus einer Umgebungsvariablen oder einer nur auf dem Server vorhandenen Datei zu laden.
Wir ändern die Anwendung _LocalLibrary_ so, dass sie `SECRET_KEY` und `DEBUG` zunächst aus Umgebungsvariablen liest, sofern diese definiert sind. Andernfalls verwendet sie Werte aus einer **.env**-Datei im Projektstamm und zuletzt die Standardwerte aus der Konfigurationsdatei.
Dieser Ansatz ist sehr flexibel und ermöglicht jede vom Hosting-Server unterstützte Konfiguration.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Diese Bibliothek liest Schlüssel-Wert-Paare aus einer Datei und stellt sie als Umgebungsvariablen bereit – allerdings nur, wenn die jeweilige Umgebungsvariable noch nicht definiert ist.

Installieren Sie die Bibliothek wie gezeigt in Ihrer virtuellen Umgebung und aktualisieren Sie auch Ihre `requirements.txt`-Datei:

```bash
pip3 install python-dotenv
```

Öffnen Sie anschließend **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR`, aber vor dem Sicherheitshinweis `# SECURITY WARNING: keep the secret key used in production secret!` ein:

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

load_dotenv(BASE_DIR / ".env")
```

Dadurch wird die Datei `.env` aus dem Stammverzeichnis der Webanwendung geladen, sofern sie existiert.
Als `KEY=VALUE` in der Datei definierte Variablen werden bei Verwendung des jeweiligen Schlüssels in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` übernommen, sofern sie definiert sind.

> [!NOTE]
> Alle Werte, die Sie in **.env** eintragen, sind wahrscheinlich _geheime Informationen_!
> Speichern Sie die Datei nicht auf GitHub. Fügen Sie `.env` Ihrer `.gitignore`-Datei hinzu, damit sie nicht versehentlich hochgeladen wird.

Deaktivieren Sie als Nächstes die bisherige `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie folgt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel gesetzt, sodass der Standardwert verwendet wird. Welchen Schlüssel Sie hier verwenden oder ob er bekannt wird, sollte keine Rolle spielen, da Sie ihn nicht im Produktionsbetrieb einsetzen.

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie anschließend die vorhandene `DEBUG`-Einstellung aus und fügen Sie die folgende neue Zeile hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`. Er wird nur dann `False`, wenn die Umgebungsvariable `DJANGO_DEBUG` den Wert `False` hat oder `DJANGO_DEBUG=False` in der Datei **.env** steht.
Beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Deshalb müssen wir Zeichenketten vergleichen. Um `DEBUG` auf `False` zu setzen, müssen Sie tatsächlich die Zeichenkette `False` angeben.

Unter Linux können Sie die Umgebungsvariable mit dem folgenden Befehl auf „False“ setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Liste von Einstellungen, die Sie gegebenenfalls ändern sollten, finden Sie in der [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/) der Django-Dokumentation. Einige dieser Einstellungen können Sie auch mit dem folgenden Terminalbefehl überprüfen:

```bash
python3 manage.py check --deploy
```

> [!NOTE]
> Dieser Befehl meldet einen Fehler (`mail.E001`), weil die von `startproject` erstellte Einstellung `MAILERS` das Console-E-Mail-Backend verwendet, das wir zum [Testen des Zurücksetzens von Passwörtern](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#testing_the_new_authentication_pages) genutzt haben.
> Dieses Backend schreibt E-Mails in die Standardausgabe – während der Entwicklung ins Terminal und nach der Bereitstellung ins Serverprotokoll –, statt sie zu versenden.
> Für eine echte Website würden Sie es durch ein E-Mail-Backend für den Produktionsbetrieb ersetzen, beispielsweise SMTP. Das geht über den Rahmen dieses Tutorials hinaus.

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein in Python geschriebener HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während der Entwicklung benötigen wir _Gunicorn_ nicht, um unsere LocalLibrary-Anwendung bereitzustellen. Wir installieren es dennoch lokal, damit es bei der Bereitstellung zu unseren [Abhängigkeiten](#abhängigkeiten) gehört.

Stellen Sie zunächst sicher, dass Sie sich in der virtuellen Python-Umgebung befinden, die Sie beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt haben. Aktivieren Sie sie unter Linux/macOS mit `source my_django_environment/bin/activate` oder unter Windows mit `my_django_environment\Scripts\activate.bat`.
Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie bisher für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie bei manchen bekannten Hosting-Diensten wie Heroku nicht verwendet werden, weil diese im Anwendungsumfeld keinen dauerhaften Datenspeicher bereitstellen, den SQLite benötigt.
Auch wenn uns das bei den Beispielbereitstellungen möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen weiteren Diensten funktioniert.

Dabei verwenden wir eine Datenbank, die irgendwo im Internet in einem eigenen Prozess läuft. Die Django-Bibliotheksanwendung greift über eine Adresse darauf zu, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine ebenfalls auf Railway gehostete Postgres-Datenbank. Sie können jedoch einen beliebigen Datenbank-Hosting-Dienst wählen.

Die Informationen zur Datenbankverbindung werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt.
Statt diese Informationen fest in Django einzutragen, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/). Es verarbeitet die Umgebungsvariable `DATABASE_URL` und wandelt sie automatisch in das von Django erwartete Konfigurationsformat um.
Zusätzlich zu _dj-database-url_ müssen wir [psycopg3](https://www.psycopg.org/psycopg3/) installieren, damit Django mit Postgres-Datenbanken kommunizieren kann.

#### dj-database-url

_dj-database-url_ liest die Django-Datenbankkonfiguration aus einer Umgebungsvariablen.

Installieren Sie das Paket lokal, damit es zu den [Abhängigkeiten](#abhängigkeiten) gehört, die auf dem Bereitstellungsserver installiert werden:

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

Django verwendet nun die Datenbankkonfiguration aus `DATABASE_URL`, wenn diese Umgebungsvariable gesetzt ist. Andernfalls verwendet es die standardmäßige SQLite-Datenbank.
Der Wert `conn_max_age=500` sorgt dafür, dass die Verbindung bestehen bleibt. Das ist wesentlich effizienter, als sie bei jedem Anfragezyklus neu aufzubauen. Diese Einstellung ist optional und kann bei Bedarf entfernt werden.

#### psycopg

Django benötigt _psycopg_ (Version 3), um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es zu den [Abhängigkeiten](#abhängigkeiten) gehört, die Railway auf dem entfernten Server installiert:

```bash
pip3 install "psycopg[binary]"
```

Die Option `[binary]` installiert eine Version von _psycopg_, die die Postgres-Clientbibliotheken enthält. Sie müssen diese daher nicht separat installieren.

> [!NOTE]
> Django unterstützt auch die ältere Bibliothek _psycopg2_, empfiehlt jedoch _psycopg_ (Version 3). Die Unterstützung für _psycopg2_ wird voraussichtlich künftig entfernt.

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwendet, sofern `DATABASE_URL` nicht gesetzt ist.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktionsbetrieb verwenden, indem Sie in Ihrer Entwicklungsumgebung dieselbe Umgebungsvariable setzen. Railway erleichtert die Verwendung derselben Umgebung für Entwicklung und Produktionsbetrieb.
Alternativ können Sie auf Ihrem lokalen Computer eine [selbst gehostete Postgres-Datenbank](https://www.postgresql.org/download/) installieren und verwenden.

### Statische Dateien im Produktionsbetrieb bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl dynamisches HTML als auch statische Dateien wie CSS und JavaScript bereitzustellen.
Für statische Dateien ist das ineffizient: Die Anfragen müssen Django durchlaufen, obwohl Django nichts mit ihnen tun muss.
Während der Entwicklung spielt das kaum eine Rolle. Im Produktionsbetrieb hätte derselbe Ansatz jedoch erhebliche Auswirkungen auf die Leistung.

In der Produktionsumgebung trennen wir statische Dateien üblicherweise von der Django-Webanwendung. So können sie einfacher direkt vom Webserver oder über ein Content Delivery Network (CDN) ausgeliefert werden.

Die wichtigsten Einstellungsvariablen sind:

- `STATIC_URL`: Die Basis-URL, über die statische Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Der absolute Pfad zu einem Verzeichnis, in dem Djangos Werkzeug _collectstatic_ alle statischen Dateien sammelt, auf die unsere Templates verweisen. Anschließend können diese Dateien gemeinsam an den Ort hochgeladen werden, an dem sie gehostet werden sollen.
- `STATICFILES_DIRS`: Eine Liste zusätzlicher Verzeichnisse, die Djangos Werkzeug _collectstatic_ nach statischen Dateien durchsuchen soll.

Django-Templates verweisen auf statische Dateien relativ zu einem `static`-Tag. Ein Beispiel finden Sie im Basis-Template aus [Django-Tutorial Teil 5: Unsere Startseite erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template). Das Tag wiederum ist der Einstellung `STATIC_URL` zugeordnet.
Statische Dateien können daher bei einem beliebigen Anbieter hochgeladen werden. Über diese Einstellung können Sie Ihre Anwendung so aktualisieren, dass sie die Dateien dort findet.

Das Werkzeug _collectstatic_ sammelt statische Dateien in dem Ordner, der durch die Projekteinstellung `STATIC_ROOT` festgelegt ist.
Sie rufen es mit folgendem Befehl auf:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden. Dabei werden alle statischen Dateien der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert.
`Whitenoise` findet die Dateien dann standardmäßig am durch `STATIC_ROOT` festgelegten Ort und stellt sie unter der in `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
`BASE_DIR` sollte in Ihrer Datei bereits definiert sein. Möglicherweise wurde auch `STATIC_URL` bei der Erstellung der Datei schon definiert.
Eine doppelte Definition würde zwar keinen Schaden anrichten, Sie können den früheren Eintrag aber entfernen.

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.1/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Für das eigentliche Bereitstellen der Dateien verwenden wir die Bibliothek [WhiteNoise](https://pypi.org/project/whitenoise/), die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien im Produktionsbetrieb bereitzustellen. Die entsprechenden Django-Einstellungen haben wir in den vorherigen Abschnitten kennengelernt.
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Möglichkeiten, statische Dateien im Produktionsbetrieb direkt über Gunicorn bereitzustellen.

In der [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) erfahren Sie, wie es funktioniert und warum diese Implementierung eine vergleichsweise effiziente Methode zur Bereitstellung solcher Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für dieses Projekt sind [hier beschrieben](https://whitenoise.readthedocs.io/en/stable/django.html) und werden im Folgenden wiedergegeben:

#### whitenoise installieren

Installieren Sie whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung einzubinden, öffnen Sie **/locallibrary/settings.py**, suchen Sie die Einstellung `MIDDLEWARE` und fügen Sie `WhiteNoiseMiddleware` weit oben in der Liste ein, direkt unter `SecurityMiddleware`:

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

Optional können Sie die Größe der ausgelieferten statischen Dateien reduzieren, was die Bereitstellung effizienter macht.
Fügen Sie dazu am Ende von **/locallibrary/settings.py** Folgendes hinzu:

```python
# Static file serving.
# https://whitenoise.readthedocs.io/en/stable/django.html#add-compression-and-caching-support
STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
```

Die Einstellung `STORAGES` ersetzt Djangos standardmäßige Speicherkonfiguration. Deshalb müssen wir neben dem Speicher `"staticfiles"`, den wir ändern möchten, auch den Speicher `"default"` aufnehmen, der für von Nutzern hochgeladene Dateien verwendet wird.

Sie müssen _WhiteNoise_ nicht weiter konfigurieren, da es standardmäßig die Projekteinstellungen `STATIC_ROOT` und `STATIC_URL` verwendet.

### Abhängigkeiten

Die Python-Abhängigkeiten Ihrer Webanwendung sollten in der Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys stehen.
Viele Hosting-Dienste installieren die Abhängigkeiten aus dieser Datei automatisch; bei anderen müssen Sie dies selbst tun.
Sie können die Datei mit _pip_ über die Befehlszeile erstellen. Führen Sie dazu im Stammverzeichnis des Repositorys Folgendes aus:

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ die folgenden Einträge enthalten, auch wenn die Versionsnummern abweichen können.
Entfernen Sie alle anderen nicht aufgeführten Abhängigkeiten, sofern Sie sie nicht ausdrücklich für diese Anwendung hinzugefügt haben.

```plain
Django==6.1.1
dj-database-url==3.1.2
gunicorn==26.2.0
psycopg==3.3.6
psycopg-binary==3.3.6
whitenoise==6.12.0
python-dotenv==1.2.3
```

### Ihr Anwendungs-Repository auf GitHub aktualisieren

Viele Hosting-Dienste ermöglichen es, Projekte aus einem lokalen Repository oder von cloudbasierten Plattformen zur Quellcodeverwaltung zu importieren oder mit ihnen zu synchronisieren.
Das kann die Bereitstellung und die schrittweise Weiterentwicklung erheblich erleichtern.

Sie sollten den Quellcode von LocalLibrary bereits auf GitHub speichern. Das haben Sie beim Einrichten Ihrer Entwicklungsumgebung unter [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) vorbereitet.

Jetzt ist ein guter Zeitpunkt, eine Sicherung Ihres ursprünglichen Projekts anzulegen. Einige Änderungen in den folgenden Abschnitten können bei jedem Hosting-Dienst oder während der Entwicklung nützlich sein, andere möglicherweise nicht.
Wenn Sie alle bisherigen Änderungen bereits im Branch `main` auf GitHub gesichert haben, können Sie wie gezeigt einen neuen Branch zur Sicherung Ihres aktuellen Stands erstellen:

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

Dieser Abschnitt zeigt praktisch, wie Sie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hosten.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen für PythonAnywhere:

- PythonAnywhere bietet einen [kostenlosen Einsteigertarif](https://www.pythonanywhere.com/pricing/), der trotz einiger Einschränkungen _wirklich_ kostenlos ist.
  Dass er für alle Entwickler erschwinglich ist, ist für MDN besonders wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde bereits auf Heroku und Railway gehostet und wird nun auf PythonAnywhere gehostet. Wir sind jeweils umgezogen, wenn die zuvor kostenlosen Tarife eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir davon ausgehen, dass dieser Tarif wahrscheinlich kostenlos bleibt.
  > Das Railway-Beispiel haben wir zum Vergleich ebenfalls beibehalten. Es ist nicht kostenlos, erleichtert uns aber die Demonstration von Funktionen wie der Anbindung einer Postgres-Datenbank, die auf einem anderen Dienst läuft.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie das nicht selbst tun müssen.
  Wenn Sie sich nicht mit Servern, Load Balancern, Reverse Proxys usw. beschäftigen müssen, fällt der Einstieg wesentlich leichter.
- Die Kenntnisse und Konzepte, die Sie bei der Verwendung von PythonAnywhere erwerben, lassen sich auf andere Dienste übertragen.
- Die Einschränkungen des Dienstes und des Tarifs beeinträchtigen die Verwendung von PythonAnywhere für dieses Tutorial kaum.
  Zum Beispiel:
  - Der Einsteigertarif erlaubt eine Webanwendung unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff für Ihre Anwendungen, wenig CPU-Leistung und Bandbreite, keine Unterstützung für IPython-/Jupyter-Notebooks und keine kostenlose Postgres-Datenbank.
    Für unsere einfache Website ist dennoch genug Platz vorhanden!
  - Eigene Domains werden zum Zeitpunkt der Erstellung dieses Textes nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird, und benötigt daher beim Neustart möglicherweise etwas Zeit.
    Sie können sie dauerhaft betreiben, müssen dafür aber alle drei Monate die Website besuchen und die Webanwendung verlängern.
  - Eine separate MySQL-Datenbank ist kostenlos verfügbar, Postgres jedoch nicht.
    In dieser Demonstration verwenden wir daher einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf für größere Projekte skaliert werden.
Prüfen Sie in Ruhe, ob es [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und Verwalten Ihrer Anwendung.

Über diese Oberfläche können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung öffnen und dort Ihre Anwendung einrichten.
In dieser Demonstration verwenden wir die Konsole, um unser LocalLibrary-Repository von GitHub zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Tarif bietet keine separate Postgres-Unterstützung.
Wir könnten für die Datenbank zwar einen anderen Hosting-Dienst verwenden, nutzen aber stattdessen die standardmäßige SQLite-Datenbank, die Django in der gehosteten Ubuntu-Umgebung erstellt. Für die Demonstration der Bibliotheksfunktionen ist mehr als genug Speicherplatz vorhanden.

Sobald die Anwendung läuft, kann sie mithilfe von Umgebungsvariablen über die Bash-Konsole für den Produktionsbetrieb konfiguriert werden.

Das ist alles, was Sie für den Einstieg wissen müssen.

### Ein PythonAnywhere-Konto erstellen

Um PythonAnywhere zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Rufen Sie die PythonAnywhere-Seite [Tarife und Preise](https://www.pythonanywhere.com/pricing/) auf und wählen Sie **Create a Beginner account**.
- Erstellen Sie ein Konto mit Benutzername, E-Mail-Adresse und Passwort, bestätigen Sie die Nutzungsbedingungen und wählen Sie **Register**.
- Anschließend werden Sie angemeldet und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und laden den LocalLibrary-Quellcode von GitHub herunter.
Außerdem konfigurieren wir die standardmäßige Datenbank und sammeln statische Dateien, damit PythonAnywhere sie bereitstellen kann.

1. Öffnen Sie zunächst die Konsolenverwaltung, indem Sie in der oberen Anwendungsleiste **Consoles** auswählen.
2. Wählen Sie dann den Link **Bash**, um eine neue Konsole zu erstellen und zu öffnen:

   ![PythonAnywhere-Bildschirm zur Konsolenverwaltung](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole mitsamt ihrem Verlauf für die spätere Wiederverwendung gespeichert wird.
   Der grüne Pfeil im Screenshot zeigt, dass für dieses Konto bereits eine Konsole vorhanden ist, die wir stattdessen hätten öffnen können.

3. In PythonAnywhere-Konsolen ist _virtualenvwrapper_ vorinstalliert.
   Das Feld „Virtualenv“ auf dem PythonAnywhere-Tab _Web_, den wir unter [Webanwendung einrichten](#webanwendung_einrichten) konfigurieren, erwartet eine Umgebung, die mit dem Befehl `mkvirtualenv` erstellt wurde. Daher verwenden wir diesen statt des Moduls `venv`, das unter [Eine Django-Entwicklungsumgebung einrichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wurde.

   Geben Sie den folgenden Befehl ein, um eine virtuelle Python-3.13-Umgebung namens „env_local_library“ für die Installation der LocalLibrary-Abhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.13 env_local_library
   ```

   Wir hätten die Umgebung beliebig benennen können. Mit den folgenden Befehlen können wir sie deaktivieren und erneut aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Laden Sie als Nächstes den Quellcode der Bibliothek von GitHub herunter.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, dessen Name der URL Ihrer Website entspricht.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, kann Ihre Website nur `<your_pythonanywhere_username>.pythonanywhere.com` heißen. Wenn Ihr Benutzername beispielsweise „Odtsetseg“ lautet, müssen Sie den LocalLibrary-Quellcode in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen.

   Geben Sie den folgenden Befehl ein, um den Quellcode Ihrer Bibliothek in einen entsprechend benannten Ordner zu klonen. Ersetzen Sie dabei die Benutzernamen durch Ihren eigenen:

   ```bash
   git clone https://github.com/<github_username>/django_local_library.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Abhängigkeiten der Bibliothek mithilfe der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie auf dem Hosting-Computer eine SQLite-Datenbank, genau wie während der Entwicklung.

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Im Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#eine_postgres-sql-datenbank_bereitstellen_und_verbinden) und die Verbindung über die Umgebungsvariable `DATABASE_URL` herstellen.
   > Wichtig ist, `migrate` erst _nach_ der Konfiguration der zu verwendenden Datenbank aufzurufen.

7. Sammeln Sie alle statischen Dateien an einem Ort, von dem aus sie [im Produktionsbetrieb bereitgestellt](#statische_dateien_im_produktionsbetrieb_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website, wie im Abschnitt zur [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) beschrieben:

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Zugangsdaten, da Sie sie zum Testen Ihrer Website benötigen.

### Webanwendung einrichten

Nachdem wir den LocalLibrary-Quellcode heruntergeladen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wo es die Dateien findet und wie es sie als Webanwendung verwendet.

1. Navigieren Sie zum Bereich _Web_ der Website und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere-Bereich „Web“ mit einer Schaltfläche zum Hinzufügen einer neuen Anwendung](python_anywhere_web_add_new_app.png)

   Der Assistent _Create new web app_ wird geöffnet und führt Sie durch die Konfiguration der wichtigsten Eigenschaften der Webanwendung.

2. Wählen Sie **Next**, um die Konfiguration des Domainnamens der Webanwendung zu überspringen.
   Beim kostenlosen Konto wird die Domain aus Ihrem Benutzernamen gebildet: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zum Festlegen des Domainnamens einer neuen Webanwendung](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des Webframeworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration gibt uns vollständige Kontrolle über die Einrichtung der Umgebung.
   Im Moment ist das nicht besonders wichtig. Wenn wir jedoch mehrere Websites mit möglicherweise unterschiedlichen Python- oder Django-Versionen hosten würden, wäre es relevant.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ die Version **3.13**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Python-Version wählen, die von Ihrer Django-Version unterstützt wird.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ die Option **Next**. Dieser Bildschirm erklärt lediglich einige Konfigurationsmöglichkeiten.

   ![PythonAnywhere-Eingabeaufforderung mit Erläuterungen zu den nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Webanwendung wird erstellt und wie gezeigt im Bereich „Web“ angezeigt.
   Auf diesem Bildschirm befindet sich eine Schaltfläche **Reload**, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können.
   Wie auf dem Bildschirm angegeben, müssen Sie **Run until 3 months from today** auswählen, um die Website für weitere drei Monate aktiv zu halten. Danach müssen Sie dies regelmäßig wiederholen.

   ![Konfigurierte Webanwendung auf PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie auf dem Tab _Web_ zum Abschnitt „Code“ und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Ihr Name hat die Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere-WSGI-Datei im Code-Abschnitt des Tabs „Web“](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text. Ersetzen Sie zuvor „hamishwillee“ durch Ihren eigenen Benutzernamen und wählen Sie anschließend **Save**.

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

   Die WSGI-Datei hilft dem Gunicorn-Server dabei, die LocalLibrary-Anwendung zu finden.
   PythonAnywhere erwartet diese Datei an genau diesem Ort. Deshalb kann die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden.

7. Scrollen Sie auf dem Tab _Web_ zum Abschnitt „Virtualenv“.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der im vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie sie wie vorgeschlagen „env_local_library“ genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![Abschnitt „Virtualenv“ auf dem PythonAnywhere-Tab „Web“](python_anywhere_web_virtualenv.png)

8. Scrollen Sie auf dem Tab _Web_ zum Abschnitt „Static files“.

   ![Abschnitt „Static files“ auf dem PythonAnywhere-Tab „Web“](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `/static/` ein.
   Dies ist `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2).
   Wählen Sie dann den Link **Enter path** und geben Sie `/home/<your_pythonanywhere_username>/<your_pythonanywhere_username>.pythonanywhere.com/staticfiles` ein.
   Dies ist der durch `STATIC_ROOT` festgelegte Ordner, in den die Dateien beim Ausführen von `collectstatic` im vorherigen Abschnitt kopiert wurden.

9. Wählen Sie oben auf dem Tab _Web_ die Schaltfläche **Reload**, um die Website neu zu starten.
   Wählen Sie anschließend den Link zur Website-URL, um die live geschaltete Website zu öffnen:

![PythonAnywhere-Bildschirm „Web“ mit hervorgehobenem Link zum Öffnen der Website](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn Sie die Website jetzt öffnen, sehen Sie einen Debug-Fehlerbildschirm wie unten dargestellt.
Django meldet diesen Sicherheitsfehler, weil unser Quellcode nicht auf einem „erlaubten Host“ ausgeführt wird.

![Ausführliche Fehlerseite mit vollständigem Traceback zu einem ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Solche Debug-Informationen sind beim Einrichten sehr hilfreich, stellen auf einer bereitgestellten Website aber ein Sicherheitsrisiko dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese ausführliche Fehlerausgabe auf der live geschalteten Website mithilfe von [Umgebungsvariablen](#umgebungsvariablen_auf_pythonanywhere_verwenden) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/6.1/ref/settings/#allowed-hosts) so, dass sie die URL Ihrer PythonAnywhere-Website enthält:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie außerdem den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/6.1/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie die Einstellungen und committen Sie sie in Ihr GitHub-Repository.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Wenn Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` geöffnet ist und Sie die Änderungen in den Branch `main` gepusht haben, können Sie sie mit folgendem Befehl übernehmen:

```bash
git pull origin main
```

Verwenden Sie die Schaltfläche **Restart** auf dem Tab `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Website aktualisieren, sollte sich nun ihre Startseite öffnen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. anlegen können – genau wie auf Ihrem lokalen Computer.

### Umgebungsvariablen auf PythonAnywhere verwenden

Im Abschnitt [Ihre Website auf die Veröffentlichung vorbereiten](#ihre_website_auf_die_veröffentlichung_vorbereiten) haben wir die Anwendung so geändert, dass sie im Produktionsbetrieb über Umgebungsvariablen oder Variablen in einer **.env**-Datei konfiguriert werden kann.

Konkret haben wir die Bibliothek so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um die Debug-Ausgaben zu reduzieren, die Nutzern bei einem Fehler angezeigt werden.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert für den Produktionsbetrieb.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet. In diesem Beispiel tun wir das nicht.

Wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen sie aus einer Umgebungsdatei gelesen werden.
Dafür ist unsere Anwendung bereits eingerichtet; wir müssen nur noch die Datei erstellen.

Gehen Sie wie folgt vor:

1. Öffnen Sie eine PythonAnywhere-Bash-Eingabeaufforderung.
2. Wechseln Sie in Ihr Anwendungsverzeichnis und ersetzen Sie `<user-name>` durch Ihren eigenen Benutzernamen:

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die Datei `.env` schreiben.
   Um beispielsweise `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können prüfen, ob es funktioniert hat, indem Sie versuchen, einen nicht vorhandenen Datensatz zu öffnen. Erstellen Sie beispielsweise ein Genre und erhöhen Sie dann die Nummer in der URL-Leiste, um einen noch nicht angelegten Datensatz aufzurufen.
Wenn die Umgebungsvariable geladen wurde, erhalten Sie statt eines ausführlichen Debug-Traces eine Meldung, dass die Seite nicht gefunden wurde.

## Beispiel: Hosting auf Railway

Dieser Abschnitt zeigt praktisch, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway bietet keinen vollständig kostenlosen Einsteigertarif mehr.
> Wir haben diese Anleitung beibehalten, weil Railway einige hervorragende Funktionen bietet und für manche Nutzer die bessere Wahl sein kann.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht selbst tun müssen.
  Wenn Sie sich nicht mit Servern, Load Balancern, Reverse Proxys usw. beschäftigen müssen, fällt der Einstieg wesentlich leichter.
- Railway legt [besonderen Wert auf die Benutzerfreundlichkeit für Entwickler bei Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku). Dadurch ist der Einstieg schneller und einfacher als bei vielen Alternativen.
- Die Kenntnisse und Konzepte, die Sie bei der Verwendung von Railway erwerben, lassen sich auf andere Dienste übertragen.
  Railway bietet zwar einige ausgezeichnete neue Funktionen, doch viele andere bekannte Hosting-Dienste verwenden ähnliche Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist verständlich und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein. Wenn er Ihnen gefällt, sind die Kosten gut vorhersehbar und Ihre Anwendung lässt sich sehr einfach skalieren.

Prüfen Sie in Ruhe, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Jede Webanwendung läuft in einem eigenen, isolierten und unabhängigen virtualisierten Container.
Damit Railway Ihre Anwendung ausführen kann, muss der Dienst wissen, wie die passende Umgebung und die Abhängigkeiten eingerichtet werden und wie die Anwendung gestartet wird.
Für Django-Anwendungen stellen wir diese Informationen in mehreren Textdateien bereit:

- **runtime.txt**: Gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: Listet die Python-Abhängigkeiten Ihrer Website auf, einschließlich Django.
- **Procfile**: Enthält eine Liste der Prozesse, die zum Starten der Webanwendung ausgeführt werden.
  Bei Django ist dies normalerweise der Gunicorn-Webanwendungsserver mit einem `.wsgi`-Skript.
- **wsgi.py**: Die [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, mit der unsere Django-Anwendung in der Railway-Umgebung aufgerufen wird.

Sobald die Anwendung läuft, kann sie sich anhand von Informationen aus [Umgebungsvariablen](https://docs.railway.com/variables) konfigurieren.
Eine Anwendung, die eine Datenbank verwendet, kann deren Adresse beispielsweise über die Variable `DATABASE_URL` beziehen.
Der Datenbankdienst selbst kann bei Railway oder einem anderen Anbieter gehostet werden.

Entwickler arbeiten über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli) mit Railway.
Mit dem CLI können Sie ein lokales GitHub-Repository einem Railway-Projekt zuordnen, das Repository aus einem lokalen Branch auf die live geschaltete Website hochladen, die Protokolle des laufenden Prozesses einsehen, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Besonders nützlich ist die Möglichkeit, Ihr lokales Projekt mit denselben Umgebungsvariablen wie das live geschaltete Projekt auszuführen.

Damit unsere Anwendung auf Railway funktioniert, müssen wir die Django-Webanwendung in einem Git-Repository ablegen, die oben genannten Dateien hinzufügen, eine Datenbank einbinden und Änderungen für den korrekten Umgang mit statischen Dateien vornehmen.
Danach können wir ein Railway-Konto einrichten, den Railway-Client installieren und unsere Website bereitstellen.

Das ist alles, was Sie für den Einstieg wissen müssen.

### Anwendung für Railway aktualisieren

Dieser Abschnitt erklärt, welche Änderungen an unserer _LocalLibrary_-Anwendung nötig sind, damit sie auf Railway funktioniert.
Im Wesentlichen müssen wir nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Diese Änderungen hindern Sie nicht daran, Ihre bisherigen lokalen Testverfahren und Arbeitsabläufe weiterzuverwenden.

#### Procfile

Ein _Procfile_ ist der „Einstiegspunkt“ der Webanwendung.
Es listet die Befehle auf, die Railway zum Starten Ihrer Website ausführt.

Erstellen Sie im Stammverzeichnis Ihres GitHub-Repositorys die Datei `Procfile` ohne Dateiendung und kopieren Sie den folgenden Text hinein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass es sich um einen Webprozess handelt, an den HTTP-Anfragen weitergeleitet werden können.
Anschließend rufen wir mit `python manage.py migrate` den Django-Migrationsbefehl auf, um die Datenbanktabellen einzurichten.
Danach rufen wir mit `python manage.py collectstatic` einen Django-Befehl auf, der statische Dateien in dem durch die Projekteinstellung `STATIC_ROOT` festgelegten Ordner sammelt. Weitere Informationen finden Sie im Abschnitt [Statische Dateien im Produktionsbetrieb bereitstellen](#statische_dateien_im_produktionsbetrieb_bereitstellen).
Schließlich starten wir _gunicorn_, einen bekannten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi`, das mit unserem Anwendungsgerüst unter **/locallibrary/wsgi.py** erstellt wurde.

Das Projekt haben wir bereits so eingerichtet, dass es _gunicorn_ enthält und statische Dateien bereitstellen kann!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder vor der Bereitstellung einer neuen Version andere nicht interaktive Aufgaben auszuführen.

#### Laufzeitumgebung

Falls die Datei **runtime.txt** vorhanden ist, teilt sie Railway mit, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Stammverzeichnis des Repositorys und fügen Sie folgenden Text hinzu:

```plain
python-3.14.7
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Unterversion der Python-Laufzeitumgebung.
> In der Regel verwenden sie die nächstliegende unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Website erneut lokal und stellen Sie sicher, dass keine der obigen Änderungen sie beeinträchtigt hat.
Starten Sie wie gewohnt den Entwicklungswebserver und prüfen Sie dann im Browser, ob die Website weiterhin wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes `push`en wir die Änderungen zu GitHub.
Navigieren Sie im Terminal zu Ihrem lokalen Repository und geben Sie die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie anschließend den PR auf GitHub und führen Sie ihn zusammen.

Nun sollten wir bereit sein, LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Rufen Sie [railway.com](https://railway.com/) auf und klicken Sie oben in der Werkzeugleiste auf **Login**.
- Wählen Sie im Pop-up GitHub, um sich mit Ihren GitHub-Zugangsdaten anzumelden.
- Möglicherweise müssen Sie anschließend Ihr E-Mail-Postfach öffnen und Ihr Konto bestätigen.
- Danach werden Sie angemeldet und gelangen zum Railway.com-Dashboard: <https://railway.com/dashboard>.

### Von GitHub auf Railway bereitstellen

Als Nächstes richten wir Railway so ein, dass es unsere Bibliothek von GitHub bereitstellt.
Wählen Sie im oberen Menü der Website zunächst **Dashboard** und dann **New Project**:

![Railway-Dashboard mit Schaltfläche für ein neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Bereitstellung eines Projekts aus einer Vorlage, die zunächst in Ihrem GitHub-Konto erstellt wird, sowie verschiedene Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Bildschirm zur Bereitstellung](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repositorys, die Sie bei der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für LocalLibrary: `<user-name>/django_local_library`.

![Railway-Dialog zur Auswahl eines vorhandenen oder neuen GitHub-Repositorys](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie die Bereitstellung mit **Deploy Now**.

![Bestätigungsbildschirm zur Bereitstellung](railway_new_project_deploy_confirm.png)

Railway lädt Ihr Projekt und stellt es bereit. Den Fortschritt sehen Sie auf dem Tab für Bereitstellungen.
Nach erfolgreichem Abschluss sehen Sie einen Bildschirm wie den folgenden.

![Railway-Bildschirm mit der bereitgestellten Anwendung](railway_project_deploy.png)

Sie können auf die oben hervorgehobene Website-URL klicken, um die Website im Browser zu öffnen. Sie wird noch nicht funktionieren, weil die Einrichtung nicht abgeschlossen ist.

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn Sie die Website jetzt öffnen, sehen Sie einen Debug-Fehlerbildschirm wie unten dargestellt.
Django meldet diesen Sicherheitsfehler, weil unser Quellcode nicht auf einem „erlaubten Host“ ausgeführt wird.

![Ausführliche Fehlerseite mit vollständigem Traceback zu einem ungültigen HTTP_HOST-Header](site_error_disallowed_host.png)

> [!NOTE]
> Solche Debug-Informationen sind beim Einrichten sehr hilfreich, stellen auf einer bereitgestellten Website aber ein Sicherheitsrisiko dar.
> Sobald die Website läuft, zeigen wir Ihnen, wie Sie sie deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/6.1/ref/settings/#allowed-hosts) so, dass sie die URL Ihrer Railway-Website enthält:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.app','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie außerdem den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/6.1/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie die Einstellungen und committen Sie sie in Ihr GitHub-Repository. Railway aktualisiert Ihre Anwendung dann automatisch und stellt sie erneut bereit.

### Eine Postgres-SQL-Datenbank bereitstellen und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden.
Wenn Sie die Website jetzt öffnen, erhalten Sie einen weiteren Fehler, weil noch nicht auf die Datenbank zugegriffen werden kann.
Wir erstellen die Datenbank als Teil des Anwendungsprojekts. Sie könnten sie aber auch in einem eigenen Projekt erstellen.

Wählen Sie auf Railway im oberen Menü **Dashboard** und anschließend Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung. Sie können ihn auswählen, um Variablen und andere Dienstdetails festzulegen.
Über **Settings** können Sie projektweite Einstellungen ändern.
Wählen Sie **New**, um dem Projekt einen Dienst hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche für einen neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt: Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen:

![Railway-Projekt: Postgres als neuen Dienst auswählen](railway_project_add_database_select_type.png)

Railway stellt nun im selben Projekt einen Dienst mit einer leeren Datenbank bereit.
Nach Abschluss sehen Sie in der Projektansicht sowohl den Anwendungs- als auch den Datenbankdienst.

![Railway-Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den Tab _Variables_.
Wählen Sie **New Variable** und anschließend im Feld _Variable name_ die Option **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL`. Das ist der Name der Variablen, die LocalLibrary als Umgebungsvariable liest.

![Railway-Bildschirm zur Auswahl von DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy**. Diese Option erscheint in einem Pop-up.
Sie hätten auch die Postgres-Datenbank und dort den Tab für Variablen öffnen und die Variable von dort kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Allerdings können Sie die Bibliothek noch nicht mit Daten füllen, weil wir noch kein Superuser-Konto erstellt haben.
Das erledigen wir mit dem [CLI](https://docs.railway.com/cli) auf unserem lokalen Computer.

### Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn gemäß [dieser Anleitung](https://docs.railway.com/cli).

Nach der Installation können Sie Befehle ausführen.
Zu den wichtigsten Möglichkeiten gehören die Bereitstellung des aktuellen Verzeichnisses Ihres Computers in einem zugeordneten Railway-Projekt, ohne es zuvor auf GitHub hochzuladen, und die lokale Ausführung Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver.
Beides zeigen wir in den nächsten Abschnitten.

Eine Liste aller verfügbaren Befehle erhalten Sie, indem Sie Folgendes in ein Terminal eingeben:

```bash
railway help
```

> [!NOTE]
> Im nächsten Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn das System Sie abmeldet, müssen Sie beide Befehle erneut ausführen, um das Projekt wieder zu verknüpfen.

### Einen Superuser einrichten

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` für die Produktionsdatenbank ausführen. Das ist derselbe Vorgang, den wir lokal unter [Django-Tutorial Teil 4: Django-Admin-Website > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben.
Railway bietet keinen direkten Terminalzugriff auf den Server. Da der Befehl interaktiv ist, können wir ihn auch nicht zum [Procfile](#procfile) hinzufügen.

Stattdessen können wir den Befehl lokal in unserem Django-Projekt ausführen, während es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client erleichtert das, indem er Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver ausführen kann, einschließlich der Verbindungszeichenfolge für die Datenbank.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` bei Ihrem Konto an. Befolgen Sie gegebenenfalls die Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen:

```bash
railway login
```

Verknüpfen Sie nach der Anmeldung Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt. Verwenden Sie dazu den folgenden Befehl.
Beachten Sie, dass Sie bei entsprechender Aufforderung ein bestimmtes Projekt auswählen oder eingeben müssen:

```bash
railway link
```

Nachdem das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie nach Aufforderung Namen, E-Mail-Adresse und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun den Admin-Bereich Ihrer Website unter `https://[your-url].railway.app/admin/` öffnen und die Datenbank befüllen können, wie unter [Django-Tutorial Teil 4: Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Website abzusichern.
Konkret müssen wir die Debug-Ausgabe deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Die Anwendung haben wir unter [Ihre Website auf die Veröffentlichung vorbereiten](#ihre_website_auf_die_veröffentlichung_vorbereiten) bereits so eingerichtet, dass sie die benötigten Werte aus Umgebungsvariablen liest. Siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`.

Öffnen Sie den Informationsbildschirm des Projekts und wählen Sie den Tab _Variables_.
Dort sollte `DATABASE_URL` bereits wie unten gezeigt vorhanden sein.

![Railway-Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren geheimen Schlüssel zu erzeugen.
Eine einfache Möglichkeit ist, auf Ihrem Entwicklungscomputer den folgenden Python-Befehl auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie **New Variable**, geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein und wählen Sie **Add**.
Geben Sie anschließend den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Die fertige Variablenliste sollte wie folgt aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Fehlersuche

Der Railway-Client bietet den Befehl `logs`, mit dem Sie die neuesten Protokolleinträge anzeigen können. Ein vollständigeres Protokoll ist für jedes Projekt auf der Website verfügbar:

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, sollten Sie sich mit dem [Logging in Django](https://docs.djangoproject.com/en/6.1/topics/logging/) beschäftigen.

## Zusammenfassung

Damit endet dieses Tutorial zur Bereitstellung von Django-Anwendungen im Produktionsbetrieb – und zugleich die Tutorialreihe zur Arbeit mit Django. Wir hoffen, dass sie Ihnen geholfen hat. Eine vollständig ausgearbeitete Version des [Quellcodes finden Sie hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

Lesen Sie als Nächstes die letzten Artikel und bearbeiten Sie anschließend die Bewertungsaufgabe.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/6.1/howto/deployment/) (Django-Dokumentation)
  - [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/6.1/howto/static-files/deployment/) (Django-Dokumentation)
  - [Bereitstellung mit WSGI](https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Django mit Apache und mod_wsgi verwenden](https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Django mit Gunicorn verwenden](https://docs.djangoproject.com/en/6.1/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Django-Anwendungen mit uWSGI und Nginx unter Ubuntu 16.04 bereitstellen](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere Django-Community-Dokumentation von DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)
  - [Django-Anwendungen für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Django auf Heroku](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Dateien](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [So funktioniert Heroku](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Einschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Mit Django arbeiten](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
