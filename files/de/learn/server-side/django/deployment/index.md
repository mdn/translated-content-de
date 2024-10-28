---
title: "Django-Tutorial Teil 11: Bereitstellen von Django im Produktionsmodus"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliotheksmitarbeitern und Mitgliedern über das Internet genutzt werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden können, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertiggestellt ist (oder genug fertiggestellt, um öffentlich getestet zu werden), müssen Sie sie an einem öffentlich zugänglicheren Ort als auf Ihrem persönlichen Entwicklungsrechner hosten.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, indem Sie den Django-Entwicklungs-Webserver verwendet haben, um Ihre Seite mit dem lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben haben, die Debug-Informationen und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App wählen.
- Eine Umgebung zum Hosten von statischen Dateien wählen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.app/) Cloud-Hosting-Service installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Serverrechner bereitgestellt wird, auf dem Sie Ihre Website zur Nutzung durch Externe betreiben. Die Umgebung umfasst:

- Rechnerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website aufgebaut ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver vermittelt.
- Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung können Sie auch einen Reverse-Proxy oder Lastenausgleich haben und so weiter.

Der Serverrechner könnte bei Ihnen vor Ort sein und über eine schnelle Leitung mit dem Internet verbunden sein, aber es ist wesentlich häufiger, einen Rechner zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet in der Praxis, dass Ihr Code auf einem entfernten Rechner (oder möglicherweise einem "virtuellen" Rechner) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicherkapazität usw.) und Internet-Konnektivität zu einem festen Preis.

Solche aus der Ferne zugänglichen Computer-/Netzwerk-Hardware bezeichnet man als _Infrastructure as a Service (IaaS)_. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die weiteren Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, funktionsreichere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da die Konfiguration reduziert wird. Die verfügbaren Optionen können Sie jedoch an einen Ihnen unbekannten Server (oder andere Komponenten) binden und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, sodass Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung, wo Sie anfangen müssen!

Andere Hosting-Provider unterstützen Django als Teil eines _Platform as a Service_-Angebots (PaaS). Bei dieser Art von Hosting müssen Sie sich um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleich) nicht kümmern, da die Hostplattform dies für Sie übernimmt - zusammen mit den meisten Anforderungen, um Ihre Anwendung zu skalieren. Das macht die Bereitstellung recht einfach, weil Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, wählen, während andere die geringere Wartung und einfachere Skalierung von PaaS schätzen. Beim Einstieg ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python-/Django-freundlichen Hosting-Provider wählen, sollten diese Ihnen Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsservern, Reverse-Proxys usw. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Es gibt beispielsweise viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Providers

Es gibt viele Hosting-Provider, die bekanntlich entweder aktiv Django unterstützen oder gut damit arbeiten, darunter: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Level an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Überlegungen, die bei der Auswahl eines Hosts zu beachten sind:

- Wie stark frequentiert Ihre Website voraussichtlich sein wird und die Kosten für Daten- und Rechenressourcen, die erforderlich sind, um dieser Nachfrage gerecht zu werden.
- Unterstützung für horizontale (hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und daher, wo der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Verfügbarkeits- und Ausfallleistungsfähigkeit des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website - sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in bestimmten Preisklassen nur eine begrenzte Anzahl von "Live-Zeiten" oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie im ersten Schritt mit einem anderen Dienst besser gefahren wären!

Die gute Nachricht beim Einstieg ist, dass es recht viele Sites gibt, die "kostenlose" Umgebungen bereitstellen, die für Evaluierung und Testen gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkte/limitierte Umgebungen und Sie müssen sich bewusst sein, dass sie nach einer Einführungsphase ablaufen oder andere Einschränkungen haben können.
Sie eignen sich jedoch hervorragend zum Testen von wenig frequentierten Seiten in einer gehosteten Umgebung und können eine einfache Migration zu mehr Ressourcen ermöglichen, wenn Ihre Seite stärker besucht wird.
Beliebte Wahlmöglichkeiten in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Provider bieten auch eine "Basic"-Stufe an, die für kleine Produktions-Websites gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/), und [Digital Ocean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Provider, die eine relativ kostengünstige Basisstufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit der wichtigste Faktor ist.

## Vorbereitung Ihrer Website zur Veröffentlichung

Die [Django-Gerüst-Website](/de/docs/Learn/Server-side/Django/skeleton_website), die mit den _django-admin_ und _manage.py_ Tools erstellt wurde, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten in der Produktion anders sein, sei es aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/geheime Debug-Trace- und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer serverseitigen Datei gelesen werden.
Ändern wir die _LocalLibrary_ Anwendung so, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte aus einer **.env** Datei im Root zurückgreifen, schließlich die Standardwerte in der Konfiguration verwenden.
Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek, die Schlüssel-Wert-Paare aus einer Datei liest und sie als Umgebungsvariablen verwendet, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR` ein, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Root der Webanwendung.
In der Datei als `KEY=VALUE` definierte Variablen werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, sofern definiert.

> [!NOTE]
> Alle Werte, die Sie **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht in GitHub speichern und sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Als nächstes deaktivieren Sie die ursprüngliche `SECRET_KEY` Konfiguration und fügen die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "leaks", da Sie ihn in der Produktion nicht verwenden).

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

Der Wert der `DEBUG` wird standardmäßig `True` sein, wird jedoch nur `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariablen auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf "False" in Linux setzen, indem Sie den folgenden Befehl ausgeben:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie in der [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Einstellungen mit dem untenstehenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [requirements](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zuerst sicher, dass Sie in der Python-virtuellen Umgebung sind, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_::

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es nicht auf einigen beliebten Hosting-Diensten wie Heroku verwendet werden, da sie im Anwendungsumfeld keine persistenten Datenspeicherung bereitstellen (eine Anforderung von SQLite).
Obwohl dies uns für das Beispiel-Bereitstellungen möglicherweise nicht beeinträchtigt, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung mithilfe einer Adresse zugegriffen wird, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine auf Railway gehostete Postgres-Datenbank, Sie können jedoch jeden beliebigen Datenbank-Hosting-Service nutzen.

Die Datenbankverbindungsinformationen werden Django mit einer Umgebungsvariablen namens `DATABASE_URL` bereitgestellt.
Anstatt diese Informationen in Django zu hartcodieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL` Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat umzuwandeln.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, sodass es Teil unserer [requirements](#anforderungen) wird, um es auf dem Bereitstellungsserver einzurichten:

```bash
pip3 install dj-database-url
```

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration am Ende der Datei:

```python
# Update database configuration from $DATABASE_URL environment variable (if defined)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber hat auf Railway nicht funktioniert!
  Versuchen Sie, es beim nächsten Release zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwendet, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig auf Postgres umsteigen und die gleiche gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellen von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist ineffizient für statische Dateien, da die Anfragen durch Django geleitet werden müssen, obwohl Django nichts mit ihnen macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir im Produktionsumfeld denselben Ansatz verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL, von der aus statische Dateien bereitgestellt werden, z. B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_ Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Nach dem Sammeln können diese dann als Gruppe an einen beliebigen Host hochgeladen werden.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_ Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf statische Dateispeicherorte relativ zu einem `static` Tag (Sie können dies in der Basisvorlage sehen, die in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das im Gegenzug auf die `STATIC_URL` Einstellung verweist.
Statische Dateien können daher auf jeden Host hochgeladen werden und Sie können Ihre Anwendung so aktualisieren, dass sie sie über diese Einstellung findet.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT` Projekteinstellung definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird und alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` angegebenen Speicherort kopiert werden.
`Whitenoise` findet dann die Dateien von dem durch `STATIC_ROOT` definierten Speicherort (standardmäßig) und stellt sie an der durch `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (der `STATIC_URL` könnte bereits innerhalb der Datei definiert sein, als sie erstellt wurde.
Auch wenn es keinen Schaden verursacht, sollten Sie die doppelte frühere Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Bereitstellen der Dateien tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Objekte direkt von Gunicorn in der Produktion bereitzustellen.

Siehe die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation für eine Erklärung, wie sie funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu integrieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE` Einstellung und fügen Sie das `WhiteNoiseMiddleware` nahtlos oben in die Liste ein, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen reduzieren (dies ist effizienter).
Fügen Sie einfach Folgendes unten in **/locallibrary/settings.py** hinzu:

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

Weitere Konfigurationen zu _WhiteNoise_ sind nicht erforderlich, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` nutzt.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert sein.
Viele Hosting-Dienste installieren Abhängigkeiten automatisch in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ über die Befehlszeile erstellen (führen Sie folgendes im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre **requirements.txt** Datei _mindestens_ die aufgeführten Artikel enthalten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die nicht aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte entweder von einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung viel einfacher machen.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcodemanagement mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil des Einrichtens Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Punkt, um eine Sicherung Ihres "unveränderten" Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für Entwicklung) sind, könnten andere es nicht sein. Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen auf die `main`-Branche auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie folgt zu sichern:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet werden kann.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen für die Verwendung von PythonAnywhere:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass er für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet, wobei bei Einstellung der zuvor kostenlosen Pläne eine Migration stattfand.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel ebenfalls behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer auf einem anderen Dienst laufenden Postgres-Datenbank leichter zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere erlernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen uns bei der Nutzung von PythonAnywhere für das Tutorial nicht wesentlich.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Webanwendung unter `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugang für Ihre Apps, geringe CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere Basis-Website läuft!
  - Benutzerdefinierte Domains werden derzeit nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass das Neustarten langsam sein kann.
    Sie können sie auf ewig laufen lassen, aber Sie müssen die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die von Django erstellte Standard-SQLite-Datenbank in der gehosteten Ubuntu-Umgebung.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten die Zeit investieren, um festzustellen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-providers).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Benutzeroberfläche können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir einfach die in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank von Django (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung ausgeführt wird, kann sie durch Festlegen von Umgebungsvariablen über die Bash-Konsole für die Produktion konfiguriert werden.

Das ist alles, was Sie als Überblick brauchen, um loszulegen.

### Holen Sie sich ein PythonAnywhere-Konto

Um PythonAnywhere nutzen zu können, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen, und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen den lokalen Bibliotheksquellcode von GitHub.
Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bildschirm zur Konsolenverwaltung, indem Sie im oberen Anwendungsbalken auf **Consoles** klicken.
2. Wählen Sie den Link **Bash**, um eine neue Konsole zu erstellen und zu starten:

   ![Bild der PythonAnywhere Konsolenverwaltung](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für Ihre spätere Wiederverwendung gespeichert wird, zusammen mit allem Verlauf.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" zu erstellen, um die lokalen Bibliotheksabhängigkeiten zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau der gleiche Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) behandelt wird.
   Wir hätten dem Environment jeden beliebigen Namen geben können und können es mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur mit dem Namen `<your_pythonanywhere_username>.pythonanywhere.com` benennen (wenn Ihr Benutzername z. B. "Odtsetseg" ist, müssen Sie den lokalen Bibliotheksquellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` einfügen).

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

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren und verbinden](#bereitstellen_und_verbinden_einer_postgres-sql-datenbank) und durch Setzen der `DATABASE_URL` Umgebungsvariable eine Verbindung dazu herstellen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet wird, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien in einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#bereitstellen_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Site zuzugreifen (wie im Abschnitt [Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Beachten Sie die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Einrichten der Web-App

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie als Web-App finden und nutzen kann.

1. Navigieren Sie zum Abschnitt „Web“ der Site und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere „Web“-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard öffnet sich dann, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Web-App-Domainnamen-Konfiguration zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere Eingabeaufforderung zum Einrichten des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration** aus.

   ![PythonAnywhere Eingabeaufforderung zur Auswahl des für die Anwendung verwendeten Web-Frameworks](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration gibt uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Jetzt ist das nicht so wichtig, aber es wäre es, wenn wir mehrere Sites hosten würden, möglicherweise mit unterschiedlichen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm für die _Select a Python version_ **3.10** aus.

   ![PythonAnywhere Eingabeaufforderung zur Auswahl der Python-Version für Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Python-Version auswählen, die von der Django-Version unterstützt wird, die Sie verwenden.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt lediglich einige der Konfigurationsoptionen).

   ![PythonAnywhere-Eingabeaufforderung zur Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich angezeigt, wie gezeigt.
   Der Bildschirm hat eine **Reload** Schaltfläche, mit der Sie die Webanwendung neu laden können, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Run until 3 months from today** klicken, um die Site für weitere drei Monate am Leben zu erhalten (und fortlaufend).

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten zum Abschnitt "Code" des _Web_ Tabs und wählen Sie den Link zur WSGI-Konfigurationsdatei aus.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Bereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei mit dem folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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
   PythonAnywhere erwartet, dass diese Datei an diesem Ort ist, weshalb die bereits im Projekt enthaltene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt „Virtualenv“ des _Web_ Tabs.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der im vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie es, wie vorgeschlagen, "env_local_library" genannt haben, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere virtueller Env-Bereich des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt „Static files“ des _Web_ Tabs.

   ![PythonAnywhere statischer Datei-Bereich des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** aus und geben Sie `\static_files\` ein.
   Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Speicherort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben auf dem _Web_ Tab die Schaltfläche **Reload**, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Webscreen mit hervorgehobenem Link zum Starten der Website](python_anywhere_web_open_site.png)

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Debug-Fehlerbildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" betrieben wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko auf einer bereitgestellten Seite.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Protokollierungsebene auf der Live-Site mithilfe von [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` und Sie haben die Änderungen auf den Main-Zweig gepusht, könnten Sie sie dann in der Bash-Eingabeaufforderung mit dem Befehl importieren:

```Bash
git pull origin main
```

Verwenden Sie die **Restart** Schaltfläche im `Web` Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt öffnen und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitmachen Ihrer Website zur Veröffentlichung](#vorbereitung_ihrer_website_zur_veröffentlichung) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env** Datei konfiguriert werden kann.

Konkret haben wir die Bibliothek so eingerichtet, dass Sie Folgendes festlegen können:

- `DJANGO_DEBUG=False`, um die Debug-Traces zu reduzieren, die dem Benutzer angezeigt werden, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (dies tun wir in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen festgelegt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen sie aus einer Umgebungsdatei gelesen werden.
Wir sind bereits darauf eingerichtet, sodass wir nur die Datei erstellen müssen.

Die Schritte sind:

1. Öffnen Sie eine Bash-Eingabeaufforderung bei PythonAnywhere.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` mit Ihrem eigenen Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben.
   Um beispielsweise `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel erstellen Sie ein Genre, und inkrementieren dann die Nummer in der URL-Leiste, um einen Eintrag zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen ist, erhalten Sie eine "Not found" Meldung anstelle eines ausführlichen Debug-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.app/) installiert werden kann.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starterplan mehr.
> Wir haben diese Anweisungen behalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, damit Sie es nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxys usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), der zu einer schnelleren und sanfteren Lernkurve führt als bei vielen alternativen Diensten.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway erlernen, sind übertragbar.
  Während Railway einige großartige neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste dieselben Ideen und Ansätze.
- Die [Railway Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Kosten vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-providers).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrer eigenen isolierten und unabhängigen virtualisierten Umgebung ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Für Django-Apps liefern wir diese Informationen in einer Reihe von Textdateien:

- **runtime.txt**: Gibt die Programmiersprache und die Version an, die verwendet werden soll.
- **requirements.txt**: Listet die Python-Abhängigkeiten auf, die für Ihre Website benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die zum Start der Webanwendung gestartet werden sollen.
  Für Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi` Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren über die Railway-Site und ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli) Werkzeug mit Railway.
Das CLI ermöglicht Ihnen die Verknüpfung eines lokalen GitHub-Repositories mit einem Railway-Projekt, das Hochladen des Repositorys vom lokalen Zweig auf die Live-Site, das Durchführen von Logs der laufenden Prozesse, das Setzen und Abrufen von Konfigurationsvariablen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI-Tool verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung bei Railway lauffähig zu machen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die Dateien oben hinzufügen, eine Verbindung zu einem Datenbank-Add-on herstellen und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben.
Sobald wir all das erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client abrufen und unsere Website installieren.

Das ist alles, was Sie als Überblick benötigen, um loszulegen.

### Die App für Railway aktualisieren

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie bei Railway lauffähig zu machen.
Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, denn fast alles andere ist bereits vorhanden.

Beachten Sie, dass diese Änderungen Ihnen nicht den lokalen Testbetrieb und die Arbeitsabläufe, die wir bereits gelernt haben, verhindern.

#### Procfile

Eine _Procfile_ ist der Einstiegspunkt der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:` Präfix teilt Railway mit, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Dann rufen wir den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in dem Ordner zu sammeln, der durch die `STATIC_ROOT` Projekteinstellung definiert ist (siehe den Abschnitt [Bereitstellen von statischen Dateien in der Produktion](#bereitstellen_von_statischen_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_ Prozess, einen beliebten Web-Anwendungs-Server, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (das mit unserem Anwendungsgerüst erstellt wurde: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir bereits das Projekt eingerichtet haben, um _gunicorn_ einzuschließen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben vor dem Bereitstellen der Implementierung auszuführen.

#### Laufzeit

Die **runtime.txt** Datei, falls definiert, teilt Railway mit, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Minor-Version.
> Sie verwenden im Allgemeinen die nächste unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen beschädigt wurde.
Starten Sie den Entwicklungs-Webserver wie üblich und überprüfen Sie dann die Site, dass sie auf Ihrem Browser wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes `pushen` wir die Änderungen auf GitHub.
Geben Sie im Terminal (nachdem Sie zum lokalen Repository navigiert sind) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann das PR auf GitHub.

Wir sollten nun bereit sein, die LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um Railway nutzen zu können, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login** Link in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mails aufrufen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Deployment auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard** Option aus dem oberen Menü der Seite und klicken Sie dann auf den **New Project** Button:

![Railway Website-Dashboard mit neuem Projekt-Button](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer zuerst in Ihrem GitHub-Konto erstellten Vorlage bereitzustellen, und eine Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway Website-Bildschirm, der eine Dialogbox zum Auswählen eines bestehenden GitHub-Repositories oder eines neuen zeigt](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung durch Auswahl von **Deploy Now**.

![Bestätigungsbildschirm - bereitstellen wählen](railway_new_project_deploy_confirm.png)

Railway lädt und bereitstellt dann Ihr Projekt und zeigt den Fortschritt auf der Registerkarte _Deployments_ an.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Klicken Sie auf die Site-URL (oben markiert), um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Debug-Fehlerbildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" betrieben wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST Headers](site_error_dissallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie zuerst eingerichtet werden, aber sie ist ein Sicherheitsrisiko in einer bereitgestellten Site.
> Wir zeigen Ihnen, wie Sie es deaktivieren, wenn die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und bereitstellen).

### Bereitstellen und Verbinden einer Postgres-SQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil auf die Datenbank nicht zugegriffen werden kann).
Wir erstellen die Datenbank als Teil des Anwendungsprojekts, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Wählen Sie auf Railway die **Dashboard** Option aus dem oberen Menü der Site und wählen Sie dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Dienstdetails festzulegen).
Der **Einstellungs** Button kann ausgewählt werden, um projekteweite Einstellungen zu ändern.
Wählen Sie den **Neuen** Button, der zum Hinzufügen von Diensten zum Projekt verwendet wird.

![Railway-Projekt mit hervorgehobenem Button für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn nach der Art des hinzuzufügenden Dienstes gefragt wird:

![Railway-Projekt - wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen:

![Railway-Projekt - wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereit.
Nach Abschluss sehen Sie nun beide Dienste, die Anwendung und die Datenbank, in der Projektansicht.

![Railway-Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst aus und wählen Sie dann die Registerkarte _Variablen_.
Wählen Sie **Neue Variable** und dann im _Variablennamen_ Feld **Referenz hinzufügen** aus.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (das ist der Name der Variablen, von der wir die Lokalbibliothek als Umgebungsvariable lesen lassen).

![Railway Website-Bildschirm Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablenreferenz hinzuzufügen, und schließlich **Bereitstellen** (dies erscheint in einem Popup).
Beachten Sie, dass Sie auch die Postgres-Datenbank und dann deren Variablenregisterkarte öffnen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es bisher keinen Weg gibt, die Bibliothek mit Daten zu befüllen, da wir noch keine Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.app/guides/cli) Werkzeug auf unserem lokalen Computer erledigen.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigsten Operationen sind das Bereitstellen des aktuellen Verzeichnisses auf Ihrem Computer an ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal mit denselben Einstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das Folgende in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie durch das System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt neu zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser` Befehl gegen die Produktionsdatenbank ausführen (dies ist dieselbe Operation, die wir lokal in [Django Tutorial Teil 4: Django-Administrationsseite > Superuser erstellen](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben).
Railway bietet keinen direkten Termialzugriff auf den Server an, und wir können diesen Befehl nicht in die [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus ermöglicht, um Befehle lokal mit denselben Umgebungsvariablen wie der Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres Lokalbibliothekprojekts.
Melden Sie sich dann mit dem `login` oder `login --browserless` Befehl in Ihrem Browser-Konto an (befolgen Sie etwaige resultierende Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Wenn Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles Lokalbibliotheksverzeichnis mit dem zugeordneten Railway-Projekt, indem Sie den folgenden Befehl ausführen.
Beachten Sie, dass Sie bei der Aufforderung ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Da das lokale Verzeichnis und das Projekt nun _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen.
Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Adminbereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu befüllen, genau wie in [Django Tutorial Teil 4: Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site)) dargestellt.

### Einstellen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Site sicher zu machen.
Insbesondere müssen wir die Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit, um die benötigten Werte aus den Umgebungsvariablen zu lesen, wurde in [Bereitmachen Ihrer Website zur Veröffentlichung](#vorbereitung_ihrer_website_zur_veröffentlichung) durchgeführt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variablen_ aus.
Dies sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - Bildschirm für Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann wählen Sie **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der vollständige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm zeigt alle Projektvariablen](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Logs-Befehl, um das Tail der Logs anzuzeigen (ein vollständigeres Log ist für jedes Projekt auf der Site verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies liefern kann, müssen Sie mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) beginnen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch die Serie von Tutorials über die Arbeit mit Django. Wir hoffen, Sie fanden sie nützlich. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) einsehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Bereitstellen mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Verwendung von Django mit Apache und mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Verwendung von Django mit Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumente

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Digital Ocean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)

  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte mit Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Bereitstellung von Python- und Django-Apps auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
