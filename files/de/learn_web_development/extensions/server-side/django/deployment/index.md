---
title: "Django-Tutorial Teil 11: Django in der Produktionsumgebung bereitstellen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielwebsite mit Django erstellt und getestet. Jetzt ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie über das öffentliche Internet für alle zugänglich ist.
Diese Seite beschreibt, wie Sie ein Django-Projekt hosten und was Sie vorbereiten müssen, um Ihre Website in einer Produktionsumgebung bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Teile des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Eine Django-Webanwendung testen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-Anwendung in einer Produktionsumgebung bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist – oder zumindest „fertig genug“ für öffentliche Tests –, müssen Sie sie an einem Ort hosten, der besser zugänglich ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet: Sie haben Ihre Website mit dem Django-Entwicklungswebserver im lokalen Browser oder Netzwerk verfügbar gemacht und sie mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug- und andere vertrauliche Informationen offenlegen. Bevor Sie eine Website öffentlich hosten können, müssen Sie:

- Einige Projekteinstellungen ändern.
- Eine Hosting-Umgebung für die Django-Anwendung auswählen.
- Eine Hosting-Umgebung für statische Dateien auswählen.
- Eine produktionsgeeignete Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet Orientierung bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick über die Vorbereitung Ihrer Django-Anwendung für die Produktionsumgebung und ein praktisches Beispiel für die Installation der LocalLibrary-Website beim Cloud-Hosting-Dienst [Railway](https://railway.com/).

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung auf dem Server, auf dem Ihre Website für externe Besucher betrieben wird. Sie umfasst:

- Die Computerhardware, auf der die Website läuft.
- Das Betriebssystem (z. B. Linux oder Windows).
- Die Laufzeitumgebung der Programmiersprache und die Framework-Bibliotheken, auf denen Ihre Website basiert.
- Den Webserver, der Seiten und andere Inhalte ausliefert (z. B. Nginx oder Apache).
- Den Anwendungsserver, der „dynamische“ Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Die Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Je nach Konfiguration Ihrer Produktionsumgebung können auch ein Reverse-Proxy, ein Load Balancer und weitere Komponenten dazugehören.

Der Server könnte sich in Ihren eigenen Räumlichkeiten befinden und über eine schnelle Verbindung ans Internet angeschlossen sein. Weitaus üblicher ist es jedoch, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer – möglicherweise einem „virtuellen“ Computer – in einem Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet in der Regel gegen einen bestimmten Preis ein zugesichertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internetanbindung.

Diese Art von aus der Ferne zugänglicher Computer- und Netzwerkinfrastruktur wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten die Möglichkeit, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die übrigen Komponenten Ihrer Produktionsumgebung selbst installieren müssen. Bei anderen Anbietern können Sie eine umfassendere Umgebung auswählen, die beispielsweise bereits Django und einen Webserver enthält.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erheblich erleichtern, weil weniger Konfiguration nötig ist. Die verfügbaren Optionen können Sie jedoch auf einen ungewohnten Server oder andere ungewohnte Komponenten beschränken und auf einer älteren Betriebssystemversion basieren. Häufig ist es besser, die Komponenten selbst zu installieren. So erhalten Sie genau die gewünschten Komponenten und wissen bei späteren Upgrades eher, wo Sie anfangen müssen.

Andere Hosting-Anbieter unterstützen Django im Rahmen eines _Platform as a Service (PaaS)_-Angebots. Bei dieser Art von Hosting müssen Sie sich um den Großteil Ihrer Produktionsumgebung – Webserver, Anwendungsserver und Load Balancer – nicht selbst kümmern: Die Hosting-Plattform übernimmt dies für Sie, ebenso wie viele Aufgaben zur Skalierung Ihrer Anwendung.
Das erleichtert die Bereitstellung erheblich, weil Sie sich auf Ihre Webanwendung konzentrieren können statt auf die übrige Serverinfrastruktur.

Manche Entwickler bevorzugen die größere Flexibilität von IaaS gegenüber PaaS, während andere den geringeren Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Für den Einstieg ist die Einrichtung einer Website auf einer PaaS-Plattform wesentlich einfacher. Deshalb verwenden wir in diesem Tutorial eine solche Plattform.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Python und Django unterstützt, sollte dieser Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Kombinationen aus Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Bei einem PaaS-Angebot ist das nicht relevant. Beispielsweise finden Sie in der [Django-Community-Dokumentation von DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django) viele Schritt-für-Schritt-Anleitungen für unterschiedliche Konfigurationen.

## Einen Hosting-Anbieter auswählen

Viele Hosting-Anbieter unterstützen Django aktiv oder eignen sich gut dafür. Dazu gehören beispielsweise [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [PythonAnywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan).
Diese Anbieter stellen unterschiedliche Umgebungen (IaaS oder PaaS) sowie Rechen- und Netzwerkressourcen in unterschiedlichem Umfang und zu unterschiedlichen Preisen bereit.

Bei der Auswahl eines Anbieters sollten Sie unter anderem Folgendes berücksichtigen:

- Wie viel Datenverkehr Ihre Website voraussichtlich haben wird und welche Kosten für die dafür erforderlichen Daten- und Rechenressourcen entstehen.
- Wie gut horizontale Skalierung (zusätzliche Rechner) und vertikale Skalierung (leistungsfähigere Rechner) unterstützt werden und welche Kosten damit verbunden sind.
- Wo sich die Rechenzentren des Anbieters befinden und von wo aus der Zugriff daher voraussichtlich am schnellsten ist.
- Wie zuverlässig der Anbieter in der Vergangenheit war und wie häufig Ausfälle auftraten.
- Welche Werkzeuge zur Verwaltung der Website bereitstehen – ob sie einfach zu bedienen und sicher sind (z. B. SFTP statt FTP).
- Welche integrierten Möglichkeiten zur Überwachung Ihres Servers vorhanden sind.
- Bekannte Einschränkungen. Manche Anbieter sperren bestimmte Dienste bewusst (z. B. E-Mail). Andere bieten in manchen Tarifen nur eine begrenzte Anzahl von Betriebsstunden oder wenig Speicherplatz.
- Zusätzliche Vorteile. Manche Anbieter stellen kostenlose Domainnamen und Unterstützung für TLS-Zertifikate bereit, für die Sie andernfalls bezahlen müssten.
- Ob der kostenlose Tarif, auf den Sie setzen, nach einiger Zeit ausläuft und ob die Kosten eines späteren Wechsels in einen teureren Tarif bedeuten, dass ein anderer Dienst von Anfang an günstiger gewesen wäre.

Für den Einstieg ist erfreulich, dass einige Anbieter kostenlose Rechenumgebungen für Evaluierungs- und Testzwecke bereitstellen.
Diese Umgebungen sind in der Regel hinsichtlich ihrer Ressourcen deutlich eingeschränkt. Beachten Sie außerdem, dass sie nach einer Einführungsphase auslaufen oder anderen Beschränkungen unterliegen können.
Dennoch eignen sie sich hervorragend, um Websites mit wenig Datenverkehr in einer gehosteten Umgebung zu testen. Wenn Ihre Website stärker genutzt wird, ermöglichen sie oft einen einfachen Wechsel zu einem kostenpflichtigen Tarif mit mehr Ressourcen.
Beliebte Optionen in dieser Kategorie sind unter anderem [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [PythonAnywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter haben außerdem einen Basistarif für kleinere produktive Websites, der mehr nutzbare Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter mit einem vergleichsweise günstigen Basistarif im Bereich von 5 bis 10 US-Dollar pro Monat.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte die Skalierbarkeit zum wichtigsten Faktor werden.

## Ihre Website auf die Veröffentlichung vorbereiten

Die mit den Werkzeugen _django-admin_ und _manage.py_ erstellte [Django-Grundstruktur einer Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass sie die Entwicklung erleichtert. Viele der Django-Projekteinstellungen in **settings.py** sollten in der Produktionsumgebung anders sein – aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Üblicherweise wird für die Produktionsumgebung eine separate **settings.py**-Datei verwendet und/oder vertrauliche Einstellungen werden abhängig von den Bedingungen aus einer separaten Datei oder einer Umgebungsvariable importiert. Diese Datei sollte geschützt werden, selbst wenn der übrige Quellcode in einem öffentlichen Repository verfügbar ist.

Die wichtigsten Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`: Dieser Wert sollte in der Produktionsumgebung auf `False` gesetzt sein (`DEBUG = False`). So werden vertrauliche Debug-Traces und Informationen über Variablen nicht angezeigt.
- `SECRET_KEY`: Dies ist ein großer Zufallswert, der unter anderem für den CSRF-Schutz verwendet wird. Der in der Produktionsumgebung verwendete Schlüssel darf weder in der Versionsverwaltung liegen noch außerhalb des Produktionsservers zugänglich sein.

Die Django-Dokumentation empfiehlt, vertrauliche Informationen aus einer Umgebungsvariable oder einer nur auf dem Server verfügbaren Datei zu laden.
Wir ändern die Anwendung _LocalLibrary_ nun so, dass sie die Variablen `SECRET_KEY` und `DEBUG` zunächst aus Umgebungsvariablen liest, sofern diese definiert sind. Andernfalls verwendet sie Werte aus einer **.env**-Datei im Stammverzeichnis und zuletzt die Standardwerte aus der Konfigurationsdatei.
Das ist sehr flexibel und ermöglicht jede Konfiguration, die der Hosting-Server unterstützt.

Um Umgebungswerte aus einer Datei zu lesen, verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Diese Bibliothek liest Schlüssel-Wert-Paare aus einer Datei und verwendet sie als Umgebungsvariablen – allerdings nur, wenn die entsprechende Umgebungsvariable noch nicht definiert ist.

Installieren Sie die Bibliothek wie gezeigt in Ihrer virtuellen Umgebung und aktualisieren Sie auch Ihre `requirements.txt`-Datei:

```bash
pip3 install python-dotenv
```

Öffnen Sie anschließend **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR`, aber vor dem Sicherheitshinweis `# SECURITY WARNING: keep the secret key used in production secret!` ein:

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dadurch wird die `.env`-Datei aus dem Stammverzeichnis der Webanwendung geladen.
Variablen, die in der Datei als `KEY=VALUE` definiert sind, werden bei Verwendung des Schlüssels in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` importiert, sofern sie vorhanden sind.

> [!NOTE]
> Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _vertraulich_!
> Speichern Sie sie nicht auf GitHub. Nehmen Sie `.env` in Ihre `.gitignore`-Datei auf, damit die Datei nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung ist keine Umgebungsvariable für den Schlüssel festgelegt, sodass der Standardwert verwendet wird. Welchen Schlüssel Sie hier verwenden oder ob er bekannt wird, spielt keine Rolle, da Sie ihn nicht in der Produktionsumgebung verwenden.

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie anschließend die vorhandene `DEBUG`-Einstellung aus und fügen Sie die unten gezeigte neue Zeile hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`. Er wird nur dann `False`, wenn die Umgebungsvariable `DJANGO_DEBUG` den Wert `False` hat oder `DJANGO_DEBUG=False` in der **.env**-Datei steht.
Beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Deshalb müssen wir Zeichenketten vergleichen. Um `DEBUG` auf `False` zu setzen, müssen Sie tatsächlich die Zeichenkette `False` angeben.

Unter Linux können Sie die Umgebungsvariable mit folgendem Befehl auf „False“ setzen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Liste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) der Django-Dokumentation. Mit dem folgenden Terminalbefehl können Sie einige dieser Einstellungen ebenfalls auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein in reinem Python geschriebener HTTP-Server, der häufig zur Bereitstellung von Django-WSGI-Anwendungen verwendet wird.

Während der Entwicklung benötigen wir _Gunicorn_ nicht, um unsere LocalLibrary-Anwendung bereitzustellen. Wir installieren es dennoch lokal, damit es bei der Bereitstellung der Anwendung zu unseren [Abhängigkeiten](#abhängigkeiten) gehört.

Vergewissern Sie sich zuerst, dass Sie sich in der virtuellen Python-Umgebung befinden, die Sie beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt haben (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie anschließend _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie während der Entwicklung verwendet haben, ist für kleine bis mittelgroße Websites eine vernünftige Wahl.
Leider kann sie bei einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, weil diese keinen dauerhaften Datenspeicher in der Anwendungsumgebung bereitstellen, den SQLite benötigt.
Auch wenn uns das bei den Beispielbereitstellungen möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der mit Railway, Heroku und einigen weiteren Diensten funktioniert.

Dabei verwenden wir eine Datenbank, die irgendwo im Internet in einem eigenen Prozess läuft. Die Django-Bibliotheksanwendung greift über eine Adresse darauf zu, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine ebenfalls bei Railway gehostete Postgres-Datenbank. Sie können aber auch einen beliebigen anderen Datenbank-Hosting-Dienst verwenden.

Die Informationen für die Datenbankverbindung werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt.
Statt diese Informationen fest in Django einzutragen, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/). Es verarbeitet die Umgebungsvariable `DATABASE_URL` und wandelt sie automatisch in das von Django benötigte Konfigurationsformat um.
Zusätzlich zum Paket _dj-database-url_ müssen wir [psycopg2](https://www.psycopg.org/) installieren, damit Django mit Postgres-Datenbanken arbeiten kann.

#### dj-database-url

_dj-database-url_ liest die Django-Datenbankkonfiguration aus einer Umgebungsvariable.

Installieren Sie es lokal, damit es zu unseren [Abhängigkeiten](#abhängigkeiten) gehört und auf dem Bereitstellungsserver eingerichtet wird:

```bash
pip3 install dj-database-url
```

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und fügen Sie die folgende Konfiguration am Ende der Datei ein:

```python
# Update database configuration from $DATABASE_URL environment variable (if defined)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django verwendet nun die Datenbankkonfiguration aus `DATABASE_URL`, sofern die Umgebungsvariable gesetzt ist. Andernfalls wird die standardmäßige SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` sorgt dafür, dass die Verbindung bestehen bleibt. Das ist wesentlich effizienter, als sie bei jedem Anfragezyklus neu aufzubauen. Die Einstellung ist optional und kann bei Bedarf entfernt werden.

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es zu unseren [Abhängigkeiten](#abhängigkeiten) gehört und Railway es auf dem entfernten Server einrichtet:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwendet, sofern `DATABASE_URL` nicht gesetzt ist.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie die entsprechende Umgebungsvariable auch in Ihrer Entwicklungsumgebung setzen. Railway erleichtert die Verwendung derselben Umgebung für Entwicklung und Produktion.
Alternativ können Sie auf Ihrem lokalen Computer eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) installieren und verwenden.

### Statische Dateien in der Produktionsumgebung bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl dynamisches HTML als auch statische Dateien (CSS, JavaScript usw.) auszuliefern.
Für statische Dateien ist das ineffizient: Die Anfragen müssen Django durchlaufen, obwohl Django nichts mit ihnen tun muss.
Während der Entwicklung spielt das keine Rolle. In der Produktionsumgebung hätte derselbe Ansatz jedoch erhebliche Auswirkungen auf die Leistung.

In der Produktionsumgebung trennen wir statische Dateien üblicherweise von der Django-Webanwendung. So können sie einfacher direkt über den Webserver oder ein Content Delivery Network (CDN) ausgeliefert werden.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Die Basis-URL, unter der statische Dateien bereitgestellt werden, beispielsweise über ein CDN.
- `STATIC_ROOT`: Der absolute Pfad zu einem Verzeichnis, in dem Djangos Werkzeug _collectstatic_ alle statischen Dateien sammelt, auf die unsere Templates verweisen. Anschließend können diese Dateien gemeinsam an den Hosting-Ort hochgeladen werden.
- `STATICFILES_DIRS`: Eine Liste zusätzlicher Verzeichnisse, die Djangos Werkzeug _collectstatic_ nach statischen Dateien durchsuchen soll.

Django-Templates verweisen mithilfe eines `static`-Tags auf statische Dateien. Ein Beispiel sehen Sie im Basis-Template unter [Django-Tutorial Teil 5: Unsere Startseite erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template). Dieses Tag bezieht sich wiederum auf die Einstellung `STATIC_URL`.
Statische Dateien können daher bei einem beliebigen Anbieter hochgeladen werden. Über diese Einstellung teilen Sie Ihrer Anwendung mit, wo sie die Dateien findet.

Das Werkzeug _collectstatic_ sammelt statische Dateien in dem Ordner, der durch die Projekteinstellung `STATIC_ROOT` festgelegt ist.
Sie rufen es mit folgendem Befehl auf:

```bash
python3 manage.py collectstatic
```

In diesem Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden. Dabei werden alle statischen Dateien der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert.
`Whitenoise` findet die Dateien anschließend standardmäßig an dem durch `STATIC_ROOT` festgelegten Ort und stellt sie unter der durch `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und fügen Sie die folgende Konfiguration am Ende der Datei ein.
`BASE_DIR` sollte in Ihrer Datei bereits definiert sein. Auch `STATIC_URL` wurde möglicherweise schon beim Erstellen der Datei definiert.
Die doppelte Definition richtet zwar keinen Schaden an, Sie können die frühere Definition aber entfernen.

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Für die Bereitstellung der Dateien verwenden wir eine Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/), die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktionsumgebung bereitzustellen. Die relevanten Django-Einstellungen haben wir in den vorherigen Abschnitten kennengelernt.
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) bietet eine der einfachsten Möglichkeiten, statische Ressourcen in der Produktionsumgebung direkt über Gunicorn auszuliefern.

In der [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) erfahren Sie, wie dies funktioniert und warum die Implementierung eine vergleichsweise effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für dieses Projekt sind [hier beschrieben](https://whitenoise.readthedocs.io/en/stable/django.html) und werden im Folgenden wiedergegeben:

#### whitenoise installieren

Installieren Sie whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung einzurichten, öffnen Sie **/locallibrary/settings.py**, suchen Sie die Einstellung `MIDDLEWARE` und fügen Sie `WhiteNoiseMiddleware` weit oben in der Liste ein, direkt unter `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien bei der Bereitstellung reduzieren. Das ist effizienter.
Fügen Sie dazu Folgendes am Ende von **/locallibrary/settings.py** ein:

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

Sie müssen _WhiteNoise_ nicht weiter konfigurieren, da es standardmäßig die Projekteinstellungen `STATIC_ROOT` und `STATIC_URL` verwendet.

### Abhängigkeiten

Die Python-Abhängigkeiten Ihrer Webanwendung sollten in einer Datei namens **requirements.txt** im Stammverzeichnis Ihres Repositorys stehen.
Viele Hosting-Dienste installieren die dort aufgeführten Abhängigkeiten automatisch. Bei anderen müssen Sie dies selbst tun.
Sie können die Datei mit _pip_ über die Befehlszeile erstellen. Führen Sie dazu im Stammverzeichnis des Repositorys Folgendes aus:

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ die folgenden Einträge enthalten. Die Versionsnummern können abweichen.
Entfernen Sie bitte alle weiteren Abhängigkeiten, die unten nicht aufgeführt sind, sofern Sie sie nicht ausdrücklich für diese Anwendung hinzugefügt haben.

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

Viele Hosting-Dienste können Projekte aus einem lokalen Repository oder von cloudbasierten Plattformen zur Quellcodeverwaltung importieren und/oder synchronisieren.
Das kann die Bereitstellung und die schrittweise Weiterentwicklung erheblich erleichtern.

Sie sollten den Quellcode von LocalLibrary bereits auf GitHub speichern. Dies wurde unter [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) beim Einrichten Ihrer Entwicklungsumgebung beschrieben.

Jetzt ist ein guter Zeitpunkt, eine Sicherung Ihres unveränderten Ausgangsprojekts zu erstellen. Einige Änderungen in den folgenden Abschnitten können auch für die Bereitstellung bei anderen Hosting-Diensten oder für die Entwicklung nützlich sein, andere möglicherweise nicht.
Wenn Sie alle bisherigen Änderungen bereits im Branch `main` auf GitHub gesichert haben, können Sie wie gezeigt einen neuen Branch erstellen, um Ihre Änderungen zu sichern:

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

Wir verwenden PythonAnywhere aus mehreren Gründen:

- PythonAnywhere bietet einen [kostenlosen Einsteigertarif](https://www.pythonanywhere.com/pricing/), der trotz einiger Einschränkungen _wirklich_ kostenlos ist.
  Dass er für alle Entwickler erschwinglich ist, ist MDN besonders wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde bisher auf Heroku, Railway und nun PythonAnywhere gehostet. Wir sind jeweils gewechselt, als die zuvor kostenlosen Tarife eingestellt wurden.
  > Wir haben PythonAnywhere gewählt, weil wir davon ausgehen, dass dieser Tarif kostenlos bleiben wird.
  > Das Railway-Beispiel haben wir zum Vergleich beibehalten, obwohl es nicht kostenlos ist. Zudem können wir damit Funktionen wie die Anbindung einer Postgres-Datenbank auf einem anderen Dienst leichter demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, damit Sie es nicht tun müssen.
  Wenn Sie sich nicht mit Servern, Load Balancern, Reverse-Proxys usw. beschäftigen müssen, fällt der Einstieg deutlich leichter.
- Die Kenntnisse und Konzepte, die Sie bei der Arbeit mit PythonAnywhere erwerben, lassen sich auf andere Dienste übertragen.
- Die Einschränkungen des Dienstes und des Tarifs beeinträchtigen unsere Verwendung von PythonAnywhere für dieses Tutorial nicht wesentlich.
  Beispielsweise:
  - Der Einsteigertarif erlaubt eine Webanwendung unter `<your-username>.pythonanywhere.com`. Er bietet eingeschränkten ausgehenden Internetzugriff für Ihre Anwendungen, geringe CPU-Leistung und Bandbreite, keine Unterstützung für IPython/Jupyter-Notebooks und keine kostenlose Postgres-Datenbank.
    Für unsere einfache Website ist jedoch genug Platz vorhanden!
  - Eigene Domains werden zum Zeitpunkt der Erstellung dieses Artikels nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird. Deshalb kann ein Neustart etwas dauern.
    Sie können sie dauerhaft betreiben, müssen dafür aber alle drei Monate die Website besuchen und die Webanwendung verlängern.
  - Eine separate MySQL-Datenbank wird kostenlos unterstützt, Postgres dagegen nicht.
    Für diese Demonstration verwenden wir einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und lässt sich bei Bedarf auch für größere Projekte skalieren.
Nehmen Sie sich die Zeit zu prüfen, ob der Dienst [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und Verwalten Ihrer Anwendung.

Über diese Oberfläche können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten und dort Ihre Anwendung einrichten.
In dieser Demonstration klonen wir über die Konsole unser LocalLibrary-Repository von GitHub und erstellen eine Python-Umgebung, in der wir die Webanwendung ausführen können.

Der kostenlose Tarif bietet keine separate Unterstützung für Postgres.
Wir könnten unsere Datenbank zwar bei einem anderen Dienst hosten, verwenden aber stattdessen die standardmäßige SQLite-Datenbank, die Django in der gehosteten Ubuntu-Umgebung erstellt. Für die Demonstration der Bibliotheksfunktionen ist mehr als genug Speicherplatz vorhanden.

Sobald die Anwendung läuft, kann sie über Umgebungsvariablen in der Bash-Konsole für die Produktionsumgebung konfiguriert werden.

Damit haben Sie alle Grundlagen, die Sie für den Einstieg benötigen.

### Ein PythonAnywhere-Konto erstellen

Um PythonAnywhere zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Öffnen Sie die PythonAnywhere-Seite [Tarife und Preise](https://www.pythonanywhere.com/pricing/) und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Benutzername, E-Mail-Adresse und Passwort, stimmen Sie den Nutzungsbedingungen zu und wählen Sie **Register**.
- Anschließend sind Sie angemeldet und werden zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Die Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und laden den LocalLibrary-Quellcode von GitHub.
Außerdem konfigurieren wir die Standarddatenbank und sammeln die statischen Dateien, damit PythonAnywhere sie bereitstellen kann.

1. Öffnen Sie zunächst die Konsolenverwaltung, indem Sie in der oberen Anwendungsleiste **Consoles** auswählen.
2. Wählen Sie anschließend den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Ansicht der Konsolenverwaltung von PythonAnywhere](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole mit ihrem gesamten Verlauf gespeichert wird und später wiederverwendet werden kann.
   Der grüne Pfeil oben zeigt, dass für dieses Konto bereits eine Konsole vorhanden ist, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine virtuelle Python-3.10-Umgebung namens „env_local_library“ für die Installation der LocalLibrary-Abhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies entspricht genau dem unter [Eine Django-Entwicklungsumgebung einrichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) beschriebenen Vorgehen.
   Wir hätten der Umgebung einen beliebigen Namen geben können. Mit den folgenden Befehlen können wir sie deaktivieren und erneut aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Laden Sie als Nächstes den Quellcode der Bibliothek von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach der URL Ihrer Website benannt ist.

   > [!NOTE]
   > Da wir ein kostenloses Konto verwenden, kann Ihre Website nur `<your_pythonanywhere_username>.pythonanywhere.com` heißen. Wenn Ihr Benutzername beispielsweise „Odtsetseg“ lautet, müssen Sie den LocalLibrary-Quellcode in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen.

   Geben Sie den folgenden Befehl ein, um den Quellcode Ihrer Bibliothek in einen passend benannten Ordner zu klonen. Ersetzen Sie dabei die Benutzernamen durch Ihren eigenen:

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Abhängigkeiten der Bibliothek anhand der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Rechner, wie Sie es bereits während der Entwicklung getan haben.

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Im Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#eine_postgres-sql-datenbank_bereitstellen_und_verbinden) und die Verbindung herstellen, indem wir die Umgebungsvariable `DATABASE_URL` setzen.
   > Wichtig ist, dass `migrate` _erst nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, von dem aus sie [in der Produktionsumgebung bereitgestellt werden können](#statische_dateien_in_der_produktionsumgebung_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website, wie im Abschnitt über die [Django-Admin-Oberfläche](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) beschrieben:

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Zugangsdaten, da Sie sie zum Testen Ihrer Website benötigen.

### Die Webanwendung einrichten

Nachdem wir den LocalLibrary-Quellcode heruntergeladen und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wo sich diese befinden und wie sie als Webanwendung verwendet werden sollen.

1. Öffnen Sie den Bereich _Web_ und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere-Bereich „Web“ mit der Schaltfläche zum Hinzufügen einer neuen Anwendung](python_anywhere_web_add_new_app.png)

   Daraufhin öffnet sich der Assistent _Create new web app_, der Sie durch die Konfiguration der wichtigsten Eigenschaften der Webanwendung führt.

2. Wählen Sie **Next**, um die Konfiguration des Domainnamens zu überspringen.
   Beim kostenlosen Konto wird die Domain anhand Ihres Benutzernamens erstellt: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zum Festlegen des Domainnamens der neuen Webanwendung](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration gibt uns vollständige Kontrolle über die Einrichtung der Umgebung.
   Im Moment ist das nicht besonders wichtig. Beim Hosting mehrerer Websites mit möglicherweise unterschiedlichen Python- und/oder Django-Versionen wäre es jedoch relevant.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ die Version **3.10**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Python-Version auswählen, die von Ihrer Django-Version unterstützt wird.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ die Option **Next**. Der Bildschirm erläutert lediglich einige Konfigurationsmöglichkeiten.

   ![PythonAnywhere-Eingabeaufforderung mit Erläuterungen zu den nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Webanwendung wird erstellt und wie gezeigt im Bereich _Web_ angezeigt.
   Dort befindet sich eine Schaltfläche **Reload**, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können.
   Wie auf dem Bildschirm vermerkt, müssen Sie auf **Run until 3 months from today** klicken, damit die Website für weitere drei Monate – und bei erneuter Verlängerung auch darüber hinaus – aktiv bleibt.

   ![Konfigurierte Webanwendung bei PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie im Tab _Web_ zum Abschnitt „Code“ und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Ihr Name hat die Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![WSGI-Datei von PythonAnywhere im Abschnitt „Code“ des Tabs „Web“](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Dateiinhalt durch den folgenden Text. Ersetzen Sie dabei zuerst „hamishwillee“ durch Ihren eigenen Benutzernamen und wählen Sie anschließend **Save**.

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

   Die WSGI-Datei hilft dem Gunicorn-Server, die LocalLibrary-Anwendung zu finden.
   PythonAnywhere erwartet diese Datei an genau diesem Ort. Deshalb kann die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden.

7. Scrollen Sie im Tab _Web_ zum Abschnitt „Virtualenv“.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der virtuellen Umgebung ein, die Sie im vorherigen Abschnitt erstellt haben.
   Wenn Sie sie wie vorgeschlagen „env_local_library“ genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![Abschnitt „Virtual env“ im PythonAnywhere-Tab „Web“](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im Tab _Web_ zum Abschnitt „Static files“.

   ![Abschnitt „Static files“ im PythonAnywhere-Tab „Web“](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein.
   Dies entspricht `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und dem Ort, an den die Dateien beim Ausführen von `collectstatic` im vorherigen Abschnitt kopiert wurden.

9. Wählen Sie oben im Tab _Web_ die Schaltfläche **Reload**, um die Website neu zu starten.
   Wählen Sie anschließend den Link zur Website-URL, um die öffentlich erreichbare Website zu öffnen:

![PythonAnywhere-Ansicht „Web“ mit hervorgehobenem Link zum Öffnen der Website](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn Sie die Website jetzt öffnen, sehen Sie wie unten gezeigt eine Debug-Fehlerseite.
Es handelt sich um einen Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ ausgeführt wird.

![Ausführliche Fehlerseite mit vollständigem Traceback zu einem ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Information ist bei der Einrichtung sehr hilfreich, stellt auf einer bereitgestellten Website aber ein Sicherheitsrisiko dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese ausführliche Fehlerausgabe auf der öffentlich erreichbaren Website mithilfe von [Umgebungsvariablen](#umgebungsvariablen_auf_pythonanywhere_verwenden) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) so, dass sie die URL Ihrer PythonAnywhere-Website enthält:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen.
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
Wenn Sie sich in Ihrer Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` befinden und die Änderungen in den Branch `main` gepusht haben, können Sie sie dort mit folgendem Befehl übernehmen:

```bash
git pull origin main
```

Verwenden Sie die Schaltfläche **Restart** im Tab `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Website aktualisieren, sollte nun ihre Startseite angezeigt werden.

Sie sollten sich mit dem zuvor erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. anlegen können – genau wie auf Ihrem lokalen Computer.

### Umgebungsvariablen auf PythonAnywhere verwenden

Im Abschnitt [Ihre Website auf die Veröffentlichung vorbereiten](#ihre_website_auf_die_veröffentlichung_vorbereiten) haben wir die Anwendung so geändert, dass sie in der Produktionsumgebung über Umgebungsvariablen oder Variablen in einer **.env**-Datei konfiguriert werden kann.

Konkret haben wir die Bibliothek so eingerichtet, dass Sie Folgendes festlegen können:

- `DJANGO_DEBUG=False`, um bei Fehlern die dem Benutzer angezeigten Debug-Informationen zu reduzieren.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert für die Produktionsumgebung.
- `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet. In diesem Beispiel ist das nicht der Fall.

Wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Dafür ist unsere Anwendung bereits eingerichtet. Wir müssen also nur noch die Datei erstellen.

Gehen Sie wie folgt vor:

1. Öffnen Sie eine PythonAnywhere-Bash-Eingabeaufforderung.
2. Wechseln Sie in Ihr Anwendungsverzeichnis. Ersetzen Sie dabei `<user-name>` durch Ihren eigenen Benutzernamen:

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Legen Sie die Umgebungsvariablen fest, indem Sie sie als Schlüssel-Wert-Paare in die Datei `.env` schreiben.
   Um beispielsweise `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können überprüfen, ob es funktioniert hat, indem Sie versuchen, einen nicht vorhandenen Datensatz zu öffnen. Erstellen Sie beispielsweise ein Genre und erhöhen Sie anschließend die Zahl in der URL, um einen noch nicht angelegten Datensatz aufzurufen.
Wenn die Umgebungsvariable geladen wurde, erhalten Sie statt eines ausführlichen Debug-Traces die Meldung „Not found“.

## Beispiel: Hosting auf Railway

Dieser Abschnitt zeigt praktisch, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway bietet keinen vollständig kostenlosen Einsteigertarif mehr an.
> Wir haben diese Anleitung beibehalten, weil Railway einige hervorragende Funktionen bietet und für manche Benutzer die bessere Wahl ist.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway übernimmt den Großteil der Infrastruktur.
  Wenn Sie sich nicht mit Servern, Load Balancern, Reverse-Proxys usw. beschäftigen müssen, fällt der Einstieg deutlich leichter.
- Railway legt einen [Schwerpunkt auf die Erfahrung von Entwicklern bei Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku). Dadurch ist die Lernkurve im Vergleich zu vielen Alternativen flacher und der Einstieg schneller.
- Die Kenntnisse und Konzepte, die Sie bei der Arbeit mit Railway erwerben, lassen sich auf andere Dienste übertragen.
  Railway bietet zwar einige ausgezeichnete neue Funktionen, doch andere beliebte Hosting-Dienste nutzen viele derselben Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist verständlich und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein. Wenn Sie ihn dauerhaft nutzen möchten, sind die Kosten gut vorhersehbar und Ihre Anwendung lässt sich leicht skalieren.

Nehmen Sie sich die Zeit zu prüfen, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Jede Webanwendung läuft in einem eigenen, isolierten und unabhängigen virtualisierten Container.
Damit Railway Ihre Anwendung ausführen kann, muss der Dienst die passende Umgebung und die Abhängigkeiten einrichten und wissen, wie die Anwendung gestartet wird.
Für Django-Anwendungen stellen wir diese Informationen in mehreren Textdateien bereit:

- **runtime.txt**: Gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: Listet die Python-Abhängigkeiten Ihrer Website auf, einschließlich Django.
- **Procfile**: Enthält die Prozesse, die zum Starten der Webanwendung ausgeführt werden sollen.
  Bei Django ist dies üblicherweise der Webanwendungsserver Gunicorn mit einem `.wsgi`-Skript.
- **wsgi.py**: Die [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich anhand von Informationen aus [Umgebungsvariablen](https://docs.railway.com/variables) selbst konfigurieren.
Eine Anwendung mit Datenbank kann beispielsweise deren Adresse über die Variable `DATABASE_URL` beziehen.
Der Datenbankdienst selbst kann bei Railway oder einem anderen Anbieter gehostet werden.

Entwickler nutzen Railway über die Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli).
Mit dem CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository aus einem lokalen Branch auf die öffentlich erreichbare Website hochladen, die Logs des laufenden Prozesses einsehen, Konfigurationsvariablen setzen und auslesen und vieles mehr.
Besonders nützlich ist die Möglichkeit, Ihr lokales Projekt mit denselben Umgebungsvariablen wie das bereitgestellte Projekt auszuführen.

Damit unsere Anwendung auf Railway funktioniert, müssen wir unsere Django-Webanwendung in einem Git-Repository speichern, die oben genannten Dateien hinzufügen, eine Datenbank anbinden und Änderungen für die korrekte Bereitstellung statischer Dateien vornehmen.
Anschließend können wir ein Railway-Konto einrichten, den Railway-Client installieren und unsere Website bereitstellen.

Damit haben Sie alle Grundlagen, die Sie für den Einstieg benötigen.

### Die Anwendung für Railway aktualisieren

In diesem Abschnitt werden die Änderungen erläutert, die Sie an unserer Anwendung _LocalLibrary_ vornehmen müssen, damit sie auf Railway funktioniert.
Eigentlich müssen wir nur die Dateien `Procfile` und `runtime.txt` erstellen, da fast alles andere bereits vorhanden ist.

Diese Änderungen hindern Sie nicht daran, die bereits erlernten lokalen Testverfahren und Arbeitsabläufe weiterzuverwenden.

#### Procfile

Ein _Procfile_ definiert den Einstiegspunkt der Webanwendung.
Es listet die Befehle auf, die Railway zum Starten Ihrer Website ausführt.

Erstellen Sie im Stammverzeichnis Ihres GitHub-Repositorys die Datei `Procfile` ohne Dateiendung und kopieren Sie den folgenden Text hinein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass es sich um einen Webprozess handelt, der HTTP-Anfragen empfangen kann.
Anschließend führen wir den Django-Migrationsbefehl `python manage.py migrate` aus, um die Datenbanktabellen einzurichten.
Danach rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in dem Ordner zu sammeln, der durch die Projekteinstellung `STATIC_ROOT` definiert ist (siehe den Abschnitt über die [Bereitstellung statischer Dateien in der Produktionsumgebung](#statische_dateien_in_der_produktionsumgebung_bereitstellen)).
Zum Schluss starten wir den beliebten Webanwendungsserver _gunicorn_ und übergeben ihm Konfigurationsinformationen aus dem Modul `locallibrary.wsgi`, das mit der Grundstruktur unserer Anwendung erstellt wurde: **/locallibrary/wsgi.py**.

Das Projekt haben wir bereits so eingerichtet, dass es _gunicorn_ enthält und die Bereitstellung statischer Dateien unterstützt!

Mit dem Procfile können Sie auch Worker-Prozesse starten oder vor der Bereitstellung eines Releases andere nicht interaktive Aufgaben ausführen.

#### Runtime

Falls die Datei **runtime.txt** vorhanden ist, teilt sie Railway mit, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Stammverzeichnis des Repositorys und fügen Sie folgenden Text ein:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Unterversion.
> In der Regel verwenden sie die nächstliegende unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Website erneut lokal und vergewissern Sie sich, dass keine der obigen Änderungen ihre Funktion beeinträchtigt hat.
Starten Sie wie gewohnt den Entwicklungswebserver und prüfen Sie im Browser, ob die Website weiterhin wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes pushen wir die Änderungen zu GitHub.
Wechseln Sie im Terminal in Ihr lokales Repository und geben Sie die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie anschließend den Pull Request auf GitHub und führen Sie ihn zusammen.

Jetzt sollten wir bereit sein, LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Öffnen Sie [railway.com](https://railway.com/) und klicken Sie in der oberen Symbolleiste auf **Login**.
- Wählen Sie im Popup GitHub aus, um sich mit Ihren GitHub-Zugangsdaten anzumelden.
- Möglicherweise müssen Sie anschließend Ihre E-Mail-Adresse bestätigen.
- Danach sind Sie angemeldet und gelangen zum Railway.com-Dashboard: <https://railway.com/dashboard>.

### Von GitHub auf Railway bereitstellen

Als Nächstes richten wir Railway so ein, dass unsere Bibliothek von GitHub bereitgestellt wird.
Wählen Sie im oberen Menü der Website zunächst **Dashboard** und anschließend die Schaltfläche **New Project**:

![Railway-Dashboard mit der Schaltfläche für ein neues Projekt](railway_new_project_button.png)

Railway zeigt verschiedene Möglichkeiten für das neue Projekt an, darunter die Bereitstellung eines Projekts aus einer Vorlage, die zuerst in Ihrem GitHub-Konto erstellt wird, sowie mehrere Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Ansicht zur Bereitstellung eines Projekts](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repositorys, die Sie bei der Einrichtung für Railway freigegeben haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für LocalLibrary: `<user-name>/django-locallibrary-tutorial`.

![Railway-Dialog zur Auswahl eines vorhandenen oder neuen GitHub-Repositorys](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie die Bereitstellung mit **Deploy Now**.

![Bestätigungsbildschirm mit der Bereitstellungsoption](railway_new_project_deploy_confirm.png)

Railway lädt Ihr Projekt hoch und stellt es bereit. Der Fortschritt wird im Tab für Bereitstellungen angezeigt.
Nach erfolgreichem Abschluss sehen Sie einen Bildschirm wie den folgenden.

![Railway-Ansicht einer Bereitstellung](railway_project_deploy.png)

Sie können auf die oben hervorgehobene Website-URL klicken, um die Website im Browser zu öffnen. Sie funktioniert allerdings noch nicht, da die Einrichtung noch nicht abgeschlossen ist.

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn Sie die Website jetzt öffnen, sehen Sie wie unten gezeigt eine Debug-Fehlerseite.
Es handelt sich um einen Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ ausgeführt wird.

![Ausführliche Fehlerseite mit vollständigem Traceback zu einem ungültigen HTTP_HOST-Header](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Information ist bei der Einrichtung sehr hilfreich, stellt auf einer bereitgestellten Website aber ein Sicherheitsrisiko dar.
> Wir zeigen Ihnen, wie Sie sie deaktivieren, sobald die Website läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) so, dass sie die URL Ihrer Railway-Website enthält:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie anschließend Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repository. Railway aktualisiert Ihre Anwendung daraufhin automatisch und stellt sie erneut bereit.

### Eine Postgres-SQL-Datenbank bereitstellen und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und mit der gerade bereitgestellten Django-Anwendung verbinden.
Wenn Sie die Website jetzt öffnen, erhalten Sie einen neuen Fehler, weil auf die Datenbank nicht zugegriffen werden kann.
Wir erstellen die Datenbank innerhalb des Anwendungsprojekts. Sie könnten sie aber auch in einem eigenen Projekt erstellen.

Wählen Sie bei Railway im oberen Menü der Website **Dashboard** und anschließend Ihr Anwendungsprojekt aus.
Derzeit enthält es nur einen Dienst für Ihre Anwendung. Sie können ihn auswählen, um Variablen und andere Dienstdetails festzulegen.
Über die Schaltfläche **Settings** können Sie projektweite Einstellungen ändern.
Wählen Sie die Schaltfläche **New**, um dem Projekt einen Dienst hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche für einen neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des neuen Dienstes gefragt werden:

![Railway-Projekt mit Auswahl einer Datenbank als neuem Dienst](railway_project_add_database.png)

Wählen Sie anschließend **Add PostgreSQL**, um die Datenbank hinzuzufügen:

![Railway-Projekt mit Auswahl von Postgres als neuem Dienst](railway_project_add_database_select_type.png)

Railway stellt daraufhin innerhalb desselben Projekts einen Dienst mit einer leeren Datenbank bereit.
Anschließend sehen Sie in der Projektansicht sowohl den Anwendungs- als auch den Datenbankdienst.

![Railway-Projekt mit Anwendungsdienst und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und anschließend den Tab _Variables_.
Wählen Sie **New Variable** und im Feld _Variable name_ die Option **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL`. Unter diesem Namen liest unsere LocalLibrary-Anwendung die Umgebungsvariable.

![Railway-Ansicht zur Auswahl von DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie anschließend **Add**, um die Variablenreferenz hinzuzufügen, und zuletzt **Deploy**. Diese Option erscheint in einem Popup.
Alternativ hätten Sie auch die Postgres-Datenbank und dort den Variablen-Tab öffnen und die Variable kopieren können.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso aussehen wie lokal.
Allerdings können Sie die Bibliothek noch nicht mit Daten füllen, weil wir noch kein Superuser-Konto erstellt haben.
Das erledigen wir mit dem [CLI](https://docs.railway.com/cli) auf unserem lokalen Computer.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn gemäß [dieser Anleitung](https://docs.railway.com/cli).

Nach der Installation können Sie Befehle ausführen.
Zu den wichtigsten Möglichkeiten gehören die Bereitstellung des aktuellen Verzeichnisses Ihres Computers in einem verknüpften Railway-Projekt – ohne den Umweg über GitHub – sowie die lokale Ausführung Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver.
Diese Möglichkeiten zeigen wir in den nächsten Abschnitten.

Eine Liste aller verfügbaren Befehle erhalten Sie, indem Sie Folgendes in ein Terminal eingeben:

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Falls Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut ausführen, um die Projektverknüpfung wiederherzustellen.

### Einen Superuser einrichten

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` für die Produktionsdatenbank ausführen. Das ist derselbe Vorgang, den wir lokal unter [Django-Tutorial Teil 4: Django-Admin-Oberfläche > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben.
Railway bietet keinen direkten Terminalzugriff auf den Server. Da der Befehl interaktiv ist, können wir ihn auch nicht zum [Procfile](#procfile) hinzufügen.

Wir können den Befehl jedoch lokal in unserem Django-Projekt ausführen, während es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client erleichtert dies: Er kann lokale Befehle mit denselben Umgebungsvariablen wie auf dem Produktionsserver ausführen, einschließlich der Verbindungszeichenfolge für die Datenbank.

Öffnen Sie zunächst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` bei Ihrem Browserkonto an. Folgen Sie den Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen:

```bash
railway login
```

Verknüpfen Sie nach der Anmeldung Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt. Verwenden Sie dazu den folgenden Befehl.
Beachten Sie, dass Sie bei entsprechender Aufforderung ein Projekt auswählen oder eingeben müssen:

```bash
railway link
```

Nachdem das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen.
Vergewissern Sie sich zunächst, dass Ihre übliche [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie bei Aufforderung Name, E-Mail-Adresse und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Nun sollten Sie den Administrationsbereich Ihrer Website unter `https://[your-url].railway.app/admin/` öffnen und die Datenbank füllen können, wie in [Django-Tutorial Teil 4: Django-Admin-Oberfläche](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Website abzusichern.
Dazu müssen wir insbesondere die Debug-Ausgabe deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Das Einlesen der benötigten Werte aus Umgebungsvariablen haben wir bereits unter [Ihre Website auf die Veröffentlichung vorbereiten](#ihre_website_auf_die_veröffentlichung_vorbereiten) eingerichtet (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie die Informationsansicht des Projekts und wählen Sie den Tab _Variables_.
Dort sollte `DATABASE_URL` bereits wie unten gezeigt vorhanden sein.

![Railway-Ansicht zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren geheimen Schlüssel zu erzeugen.
Eine einfache Möglichkeit besteht darin, auf Ihrem Entwicklungscomputer den folgenden Python-Befehl auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein. Wählen Sie anschließend **Add**.
Fügen Sie danach den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` hinzu.
Die vollständige Liste der Variablen sollte nun so aussehen:

![Railway-Ansicht mit allen Projektvariablen](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl `logs`, mit dem Sie die neuesten Log-Einträge anzeigen können. Ein vollständigeres Log ist für jedes Projekt auf der Website verfügbar:

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als diese Logs liefern, sollten Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beschäftigen.

## Zusammenfassung

Damit endet sowohl dieses Tutorial zur Einrichtung von Django-Anwendungen in der Produktionsumgebung als auch die Tutorialreihe zur Arbeit mit Django. Wir hoffen, dass sie Ihnen geholfen hat. Eine vollständig ausgearbeitete Version des [Quellcodes finden Sie hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

Lesen Sie als Nächstes unsere letzten Artikel und bearbeiten Sie anschließend die Bewertungsaufgabe.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Anleitung zur Bereitstellung mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Anleitung zur Verwendung von Django mit Apache und mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Anleitung zur Verwendung von Django mit Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Anleitung zur Bereitstellung von Django-Anwendungen mit uWSGI und Nginx unter Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere Django-Community-Dokumentation von DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Konzepte für die Einrichtung)
  - [Django-Anwendungen für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Django auf Heroku](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Beschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Mit Django arbeiten](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
