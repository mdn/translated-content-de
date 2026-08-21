---
title: "Django Tutorial Teil 11: Django in die Produktion einsetzen"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielwebsite mit Django erstellt und getestet. Jetzt ist es an der Zeit, diese auf einem Webserver zu installieren, damit sie von jedem über das öffentliche Internet zugänglich ist.
Diese Seite beschreibt, wie Sie ein Django-Projekt hosten und was Sie vorbereiten müssen, damit Ihre Seite für eine Produktionsbereitstellung bereit ist.

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
      <td>Erfahren Sie, wo und wie Sie eine Django-App in die Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Site fertig ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Site im lokalen Browser/Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug- und andere vertrauliche Informationen anzeigen. Bevor Sie Ihre Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App auswählen.
- Eine Umgebung für das Hosten von statischen Dateien auswählen.
- Eine Infrastruktur auf Produktionsniveau einrichten, um Ihre Website bereitzustellen.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Django-App für die Produktion bereit zu machen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprache Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver zur Bereitstellung von Seiten und anderem Inhalt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Je nachdem, wie Ihre Produktionsumgebung konfiguriert ist, können Sie auch einen Reverse Proxy, einen Load Balancer usw. haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher, etc.) und Internetverbindung für einen bestimmten Preis.

Solche ferngesteuerten Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen für die Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständiger funktionsfähige Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Konfiguration enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django im Rahmen eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art des Hostings müssen Sie sich keine Gedanken über Ihre Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) machen, da die Hostplattform diese für Sie erledigt — zusammen mit den meisten Aufgaben, die Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung sehr einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte Server-Infrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS schätzen, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS bevorzugen. Wenn Sie anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollten diese Anweisungen dazu bereitstellen, wie eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. eingerichtet wird (das ist nicht relevant, wenn Sie sich für ein PaaS entscheiden). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django-Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit Django funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und verschiedene Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

Einige Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie viel Verkehr Ihre Website voraussichtlich haben wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo daher der Zugriff voraussichtlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Tools, die zur Verwaltung der Site bereitgestellt werden - sind sie leicht zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zum Überwachen Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mails). Andere bieten nur eine begrenzte Anzahl von Stunden "Live-Zeit" in einigen Preiskategorien oder bieten nur eine geringe Menge an Speicher.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie ansonsten bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser wären, einen anderen Dienst zu nutzen!

Die gute Nachricht beim Start ist, dass es ziemlich viele Sites gibt, die "kostenlose" Computerumgebungen bieten, die für Bewertungen und Tests gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkt/limitiert, und Sie sollten sich darüber im Klaren sein, dass sie nach einem Einführungszeitraum ablaufen können oder andere Einschränkungen haben.
Sie sind jedoch ideal, um Sites mit geringem Traffic in einer gehosteten Umgebung zu testen und bieten eine einfache Migration, wenn Ihre Site mehr Ressourcen benötigt.
Beliebte Wahlmöglichkeiten in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe, die für kleine Produktions-Sites gedacht ist und nützlichere Leistungsstufen und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website veröffentlichungsbereit machen

Die [Django-Skelettwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den Tools _django-admin_ und _manage.py_ erstellt wurde, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (in **settings.py** angegeben) sollten für die Produktion unterschiedlich sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder vertrauliche Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Quellkontrolle oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer nur für den Server zugänglichen Datei gelesen werden.
Wir ändern die Anwendung _LocalLibrary_, so dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env**-Datei im Root-Verzeichnis definiert sind, und schließlich auf die Standardwerte in der Konfigurationsdatei.
Dies ist sehr flexibel, da es jede von der Hosting-Plattform unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert ist, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>', '<DEFAULT VALUE>')` verwendet wird, wenn sie definiert sind.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, werden wahrscheinlich _Geheimnisse_ sein!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, daher wird der Standardwert verwendet (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden).

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

Der Wert von `DEBUG` wird standardmäßig `True` sein, aber nur `False` sein, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf Linux setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie unter [Bereitstellungscheckliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es nicht auf einigen beliebten Hosting-Diensten wie Heroku verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Während dies uns für das Beispiel-Bereitstellung(en) möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet ausgeführt wird und von der Django-Bibliotheksanwendung mit einer Adresse zugegriffen wird, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die Datenbankverbindungsinformationen werden mit einer Umgebungsvariablen namens `DATABASE_URL` an Django übergeben.
Anstatt diese Informationen hart in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und sie automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Neben der Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden sollen:

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

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank.
Der Wert `conn_max_age=500` macht die Verbindung dauerhaft, was weit effizienter ist als das erneute Erstellen der Verbindung bei jedem Anforderungszyklus (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway ist, die auf dem Remote-Server eingerichtet werden sollen:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellung statischer Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist bei statischen Dateien ineffizient, da die Anfragen durch Django gehen müssen, obwohl Django nichts damit tut.
Während dies in der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir den gleichen Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir normalerweise die statischen Dateien von der Django-Webanwendung, was das Bereitstellen direkt vom Webserver oder von einem Content-Delivery-Network (CDN) erleichtert.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL, von der aus statische Dateien bereitgestellt werden, z.B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Sobald sie gesammelt wurden, können sie dann als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_-Tool von Django nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf statische Dateistandorte relativ zu einem `static`-Tag (Sie können dies in der Basisschablone sehen, die in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL`-Einstellung verweist.
Statische Dateien können daher auf jeden Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Einstellung des Projekts definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden, kopiert alle statischen Dateien der Anwendung an den durch `STATIC_ROOT` angegebenen Ort.
`Whitenoise` findet die Dateien aus dem standardmäßig definierten Ort von `STATIC_ROOT` und stellt sie unter der Basis-URL zur Verfügung, die in `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL`-Einstellung könnte bereits in der Datei definiert gewesen sein, als sie erstellt wurde.
Obwohl es keinen Schaden verursacht, sollten Sie den doppelten vorherigen Verweis am besten löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Datei-Bereitstellung tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion zu bedienen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion zu bedienen.

Weitere Informationen zu [WhiteNoise](https://pypi.org/project/whitenoise/) finden Sie in der Dokumentation zur Erklärung, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bereitstellen dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die Einstellung `MIDDLEWARE` und fügen Sie `WhiteNoiseMiddleware` nahe am oberen Rand der Liste, direkt unterhalb von `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie ausgeliefert werden (dies ist effizienter).
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

Sie müssen nichts Weiteres tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig die Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ auf der Befehlszeile erstellen (führen Sie den folgenden Befehl im Root-Verzeichnis des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle verschiedenen oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei mindestens diese Einträge enthalten (obwohl sich die Versionsnummern unterscheiden können).
Bitte löschen Sie alle anderen nicht aufgeführten Abhängigkeiten, es sei denn, Sie haben sie explizit zu dieser Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Sie Ihr Anwendungsrepo in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionierungssystemen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den Source-Code der Lokalbibliothek zu speichern (dies wurde in [Source Code Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) im Rahmen der Einrichtung Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein können, andere nicht.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen auf dem `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie die _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hosten.

### Warum PythonAnywhere?

Wir entscheiden uns, PythonAnywhere aus mehreren Gründen zu verwenden:

- PythonAnywhere bietet einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass er für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, mit einer Migration, als die vorherigen kostenlosen Pläne eingestellt wurden.
  > Wir haben PythonAnywhere ausgewählt, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns erlaubt, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, so dass Sie es nicht müssen.
  Sich keine Gedanken über Server, Load Balancer, Reverse Proxies usw. machen zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Plan-Beschränkungen wirken sich nicht besonders darauf aus, dass wir PythonAnywhere für das Tutorial nutzen.
  Beispiel:
  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugriff von Ihren Apps, niedrige CPU/Bandbreite, keine Unterstützung für IPython/Jupyter-Notebooks, keine kostenlose Postgres-Datenbank.
    Es ist jedoch genug Platz für unsere grundlegende Site, um zu laufen!
  - Eigene Domains werden zum Zeitpunkt des Schreibens nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht genutzt wird, daher kann sie langsam neu starten.
    Sie können es für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf zu größeren Projekten skaliert werden.
Sie sollten sich die Zeit nehmen, um zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole in einer Ubuntu Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie zum Starten benötigen.

### Holen Sie sich ein PythonAnywhere-Konto

Um PythonAnywhere zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur [Plans and pricing](https://www.pythonanywhere.com/pricing/) Seite von PythonAnyWhere und klicken Sie auf die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Geschäftsbedingungen und klicken Sie auf **Register**.
- Sie werden dann eingeloggt und auf das PythonAnywhere-Dashboard umgeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub.
Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Bildschirm zur Konsolenverwaltung, indem Sie in der oberen Anwendungsleiste auf **Consoles** klicken.
2. Wählen Sie dann den **Bash**-Link aus, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm zur Konsolenverwaltung von PythonAnywhere](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole für Ihre spätere Wiederverwendung gespeichert wird, zusammen mit ihrem gesamten Verlauf.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung für die Installation der lokalen Bibliotheksabhängigkeiten zu erstellen, die "env_local_library" genannt wird.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau der gleiche Prozess, wie er in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können und können sie mit den folgenden Befehlen deaktivieren und erneut aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner mit dem Namen Ihrer Site-URL installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto nutzen, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (wenn Ihr Benutzername z.B. "Odtsetseg" ist, müssen Sie die Quelle der lokalen Bibliothek in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen passend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellung_und_verbindung_zu_einer_postgres-sql-datenbank) und verbinden, indem wir die Umgebungsvariable `DATABASE_URL` setzen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#bereitstellung_statischer_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Website (wie im Abschnitt [Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Richten Sie die Web-App ein

Nachdem Sie die Quellcodes der lokalen Bibliothek erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie diese finden und als Web-App verwenden kann.

1. Navigieren Sie zum Bereich _Web_ der Site und wählen Sie den **Add a new web app**-Link:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der Itz findeniglich Ihre Webanwendung konfigurieren.

2. Wählen Sie **Next**, um den Namenskonfigurationsvorgang der Web-App zu überspringen.
   Der kostenlose Account wird die Domain basierend auf Ihrem Benutzernamen erstellen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere Eingabeaufforderung zur Domainnamenfestlegung der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere Eingabeaufforderung zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umgebung vollständig zu steuern, wie sie konfiguriert ist.
   Das spielt jetzt keine große Rolle, aber es wäre es, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ **3.10**

   ![PythonAnywhere Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Version von Python auswählen, die von der Version von Django, die Sie verwenden, erlaubt wird.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere Eingabeaufforderung mit Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt.
   Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Webanwendung neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben.
   Beachten Sie am Bildschirm, dass Sie auf die Schaltfläche **Run until 3 months from today** klicken müssen, um die Site noch drei Monate (und weiter) am Leben zu halten.

   ![Konfigurierte Web-App von PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie im _Web_-Tab nach unten zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese wird eine Bezeichnung mit der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py` haben.

   ![PythonAnywhere-WSGI-Datei im Web-Tab, Abschnitt Code](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei mit dem folgenden Text (zuerst aktualisieren Sie "hamishwillee" mit Ihrem eigenen Benutzernamen) und klicken Sie auf die **Save**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden.
   PythonAnywhere erwartet, dass diese Datei an diesem Ort ist, weshalb die bereits im Projekt befindliche WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im _Web_-Tab zum Abschnitt "Virtualenv" nach unten.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der in dem vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie es als "env_local_library" benannt haben, ist der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere virtuelle Umgebungssektion des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im _Web_-Tab zum Abschnitt "Static files" nach unten.

   ![PythonAnywhere statische Dateien-Sektion des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein.
   Dies ist das `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausführten.

9. Wählen Sie oben im _Web_-Tab die Schaltfläche **Reload**, um die Site neu zu starten.
   Klicken Sie dann auf den Seiten-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Web-Screen mit hervorgehobenem Link zum Start der Site](python_anywhere_web_open_site.png)

### Set ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit vollständigem Traceback eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Solche Debug-Informationen sind sehr nützlich, wenn man das Setup einrichtet, stellen aber ein Sicherheitsrisiko auf einer bereitgestellten Site dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Maß an Protokollierung auf der Live-Site mithilfe von [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übertragen Sie sie in Ihr GitHub-Repository.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` und Sie haben die Änderungen in den Main-Branch gepusht, dann könnten Sie sie in der Bash-Eingabeaufforderung mit dem folgenden Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche im `Web`-Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt öffnen und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt über [Das Vorbereiten Ihrer Website für die Veröffentlichung](#ihre_website_veröffentlichungsbereit_machen) haben wir die Anwendung geändert, damit sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Wir haben die Bibliothek so eingerichtet, dass Sie Folgendes festlegen können:

- `DJANGO_DEBUG=False`, um die Debug-Ausgabe zu reduzieren, die dem Benutzer angezeigt wird, wenn es einen Fehler gibt.
- `DJANGO_SECRET_KEY`, um einen geheimen Wert in der Produktion festzulegen.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (dies tun wir in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen festgelegt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind bereits dafür eingerichtet, daher müssen wir nur noch die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie eine PythonAnywhere-Bash-Eingabeaufforderung.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in der `.env`-Datei schreiben.
   Um beispielsweise `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (z. B. einen Genre erstellen und dann die Zahl in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Nachricht anstelle eines detaillierten Debug-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Starterstufe mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um die meiste Infrastruktur, so dass Sie dies nicht müssen.
  Sich keine Gedanken über Server, Load Balancer, Reverse Proxies usw. machen zu müssen, vereinfacht den Einstieg erheblich.
- Railway legt einen [Fokus auf die Entwicklererfahrung in Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und einfacheren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar.
  Während Railway einige exzellente neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste ähnliche Ideen und Ansätze.
- Die [Dokumentation von Railway](https://docs.railway.com/) ist klar und vollständig.
- Wenn Sie den Dienst lieben und verwenden, bietet er vorhersehbare Preise, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen laufen jeweils in einem eigenen, isolierten und unabhängigen virtualisierten Container.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch verstehen, wie sie gestartet wird.
Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die gestartet werden müssen, um die Webanwendung zu starten.
  Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration für den Aufruf unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich selbst mit Informationen aus [Umgebungsvariablen](https://docs.railway.com/variables) konfigurieren.
Eine Anwendung, die eine Datenbank verwendet, kann beispielsweise die Adresse mithilfe der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren über die Railway-Website und ein spezielles [Befehlszeilen-Interface (CLI)](https://docs.railway.com/cli)-Tool mit Railway.
Mit dem CLI-Tool können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository aus dem lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses inspectieren, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI-Tool Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bekommen, müssen wir unsere Django-Webanwendung in ein Git-Repository packen, die oben genannten Dateien hinzufügen, ein Datenbank-Add-on integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu verarbeiten.
Sobald wir das alles erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Die App für Railway aktualisieren

In diesem Abschnitt erklären wir die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen eigentlich nur eine `Procfile` und eine `runtime.txt` Datei erstellen, denn fast alles andere ist bereits vorhanden.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern werden, die lokalen Test- und Arbeitsabläufe zu verwenden, die wir bereits gelernt haben.

#### Procfile

Eine _Procfile_ ist der "Entry Point" der Webanwendung.
Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:`-Präfix sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen anschließend den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu kopieren, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist (siehe Abschnitt [Bereitstellung statischer Dateien in der Produktion](#bereitstellung_statischer_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass _GUNICORN_ eingeschlossen und das Bereitstellen von statischen Dateien unterstützt wird!

Sie können auch das Procfile verwenden, um Worker-Programme zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die Datei **runtime.txt**, wenn sie definiert ist, gibt Railway an, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Nebenversion.
> Im Allgemeinen wird die nächstliegende unterstützte Version zur angegebenen Version verwendet.

#### Nochmals testen und Änderungen in GitHub speichern

Bevor Sie weitermachen, testen Sie die Site zuerst erneut lokal und stellen Sie sicher, dass sie durch keine der oben genannten Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann auf Ihrem Browser, ob die Site noch funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Lassen Sie uns als nächstes die Änderungen an GitHub `pushen`.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert wurden) die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann und führen Sie die PR auf GitHub zusammen.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Menüleiste.
- Wählen Sie GitHub im Pop-up aus, um sich mit Ihren GitHub-Zugangsdaten anzumelden.
- Sie müssen möglicherweise Ihre E-Mail überprüfen und Ihr Konto verifizieren.
- Sie werden dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub aus

Als nächstes werden wir Railway einrichten, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die Option **Dashboard** im oberen Menü der Site, dann klicken Sie auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und einer Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Screen - Bereitstellung](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Screen mit einem Dialog zur Auswahl eines vorhandenen GitHub-Repositories oder zur Auswahl eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Auswahl verwenden](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf dem Bereitstellungs-Tab an. Sobald die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird immer noch nicht funktionieren, da die Einrichtung noch nicht abgeschlossen ist).

### Set ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit vollständigem Traceback eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Solche Debug-Informationen sind sehr nützlich, wenn man das Setup einrichtet, stellen aber ein Sicherheitsrisiko auf einer bereitgestellten Site dar.
> Wir werden Ihnen zeigen, wie Sie sie deaktivieren können, sobald die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern und committen Sie dann Ihre Einstellungen in Ihrem GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Bereitstellung und Verbindung zu einer Postgres-SQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der soeben bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen könnten.

Wählen Sie auf Railway die Option **Dashboard** im oberen Menü der Site und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstedetails festzulegen).
Die Schaltfläche **Settings** kann verwendet werden, um projktweite Einstellungen zu ändern.
Wählen Sie die Schaltfläche **New**, die zum Hinzufügen von Diensten zum Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener Schaltfläche neuer Dienst](railway_project_open_no_database.png)

Wählen Sie **Database** aus, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Postgres als neuen Dienst auswählen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den _Variables_-Tab.
Wählen Sie **New Variable** und dann im _Variable name_-Feld **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, um die locallibrary als Umgebungsvariable zu lesen).

![Railway-Website-Bildschirm Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um den Variablenverweis hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup erscheinen).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen können, dann ihren Variablentab und die Variable kopieren.

Wenn Sie das Projekt jetzt öffnen, sollte es genau so angezeigt werden, wie es lokal war.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer tun.

### Installieren des Kunden

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anleitungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in ein verbundenes Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal mit den gleichen Einstellungen, die Sie auf dem Produktionsserver haben.
Wir demonstrieren dies in den folgenden Abschnitten.

Sie erhalten eine Liste aller möglichen Befehle, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl auf der Produktionsdatenbank aufrufen (dies ist die gleiche Operation wie wir lokal in [Django Tutorial Teil 4: Django Admin Site > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) gelaufen sind).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht in der [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der Produkt

ionsdatenbank verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal mit den gleichen Umgebungsvariableneinstellungen wie der Produktionsserver (einschließlich der Datenbankverbindung) auszuführen.

Öffnen Sie zunächst ein Terminal oder Befehlszeilenfenster in einem Git-Clone Ihres Locallibrary-Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` bei Ihrem Browserkonto an (folgen Sie allen resultierenden Aufforderungen und Anweisungen des Kunden oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie bei der Aufforderung ein bestimmtes Projekt auswählen/eintippen müssen:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den produktionsebene Umgebungsvariablen ausführen.
Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf, geben Sie Namen, E-Mail und Passwort an, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Administrationsbereich Ihrer Website zu öffnen (`https://[your-url].railway.app/admin/`) und die Datenbank zu befüllen, genau wie in [Django Tutorial Teil 4: Django Admin Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) gezeigt.

### Festlegen von Konfigurationsvariablen

Der letzte Schritt besteht darin, die Site sicher zu machen.
Insbesondere müssen wir das Debug-Protokollierungslevel deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [das Vorbereiten Ihrer Website zur Veröffentlichung](#ihre_website_veröffentlichungsbereit_machen) gemacht (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den _Variables_-Tab.
Dieser sollte bereits die `DATABASE_URL` wie unten gezeigt enthalten.

![Railway - neue Variable hinzufügen Bildschirm](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie dann die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (und klicken Sie dann auf **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der endgültige Satz von Variablen sollte so aussehen:

![Railway Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den Befehl logs, um den Schwanz der Logs anzuzeigen (ein umfassenderes Log ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie anfangen, sich in [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) einzuarbeiten.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Anwendungen in der Produktion und auch der Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Source Codes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) überprüfen.

Der nächste Schritt besteht darin, die letzten paar Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)
  - [Bereitstellungscheckliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumente
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungskonzepte)
  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte bei Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Concurrency und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limitierungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
