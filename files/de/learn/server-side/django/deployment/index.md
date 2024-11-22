---
title: "Django-Tutorial Teil 11: Django in Produktion bereitstellen"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese wahrscheinlich auf einem öffentlichen Webserver installieren, sodass Bibliothekspersonal und -mitglieder über das Internet darauf zugreifen können. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host finden könnten, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-App in Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Seite fertig ist (oder "ausreichend fertig", um den öffentlichen Test zu starten), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, indem Sie den Django-Entwicklungswebserver genutzt haben, um Ihre Seite an den lokalen Browser/das lokale Netzwerk weiterzugeben, und Ihre Website mit (unsicheren) Entwicklereinstellungen ausgeführt, die Debug-Informationen und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an den Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App wählen.
- Eine Umgebung zum Hosten von statischen Dateien wählen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial gibt einige Anleitungen zu Ihren Optionen zur Auswahl eines Hosting-Sites, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereit zu machen, und ein funktionierendes Beispiel dafür, wie man die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.app/) installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Sie Ihre Website zur externen Nutzung betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprachruntime und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver übergibt.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, Load Balancer und so weiter haben.

Der Server-Computer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weit häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet normalerweise ein gewisses garantiertes Niveau an Computerressourcen (CPU, RAM, Speicher, etc.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von zugänglicher Rechen-/Netzwerkhardware wird als _Infrastruktur als Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Web-Servereinrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und bei der Notwendigkeit, Teile des Systems zu aktualisieren, wissen, wo Sie anfangen müssen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Plattform als Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich keine Gedanken über den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) machen, da die Hostplattform diese für Sie übernimmt — zusammen mit dem Meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität bevorzugen, die IaaS im Vergleich zu PaaS bietet, während andere die reduzierte Wartung und einfachere Skalierung von PaaS schätzen werden. Wenn Sie gerade anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python-/Django-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen bereitstellen, wie Sie eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy und so weiter einrichten (dies ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Leitfäden in den [DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django) für verschiedene Konfigurationen.

## Wahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie entweder Django aktiv unterstützen oder gut damit funktionieren, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und verschiedene Niveaus an Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie viel Besucherverkehr Sie erwarten und die Kosten für Daten und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Niveau der Unterstützung für horizontales (Hinzufügen von mehr Maschinen) und vertikales (Upgrade auf leistungsfähigere Maschinen) Skalieren und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher am schnellsten ist.
- Die historische Leistung des Hosts in Bezug auf Betriebszeiten und Ausfallzeiten.
- Bereitgestellte Tools zur Verwaltung der Site — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preiskategorien nur eine begrenzte Anzahl von Stunden "Live-Zeit" an oder bieten nur wenig Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, die Sie verwenden, mit der Zeit ausläuft und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen.

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Sites gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Evaluierung und Tests bestimmt sind.
Diese sind in der Regel recht ressourcenbeschränkte Umgebungen, und Sie müssen sich darüber im Klaren sein, dass sie möglicherweise nach einer Einführungszeit auslaufen oder andere Einschränkungen haben.
Sie sind jedoch ideal zum Testen von Sites mit geringem Besucherverkehr in einer gehosteten Umgebung und können einen einfachen Übergang zur Zahlung für mehr Ressourcen bieten, wenn Ihre Site stärker besucht wird.
Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basic"-Stufe an, die für kleine Produktionssites gedacht ist und nützlichere Rechenressourcen und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website für die Veröffentlichung bereit machen

Die mit _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung vereinfacht wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten in der Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben, und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Spuren und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer nur für den Server verfügbaren Datei gelesen werden.
Lassen Sie uns die _LocalLibrary_ Anwendung so ändern, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, falls sie definiert sind, und auf Werte zurückgreifen, die in einer **.env** Datei im Hauptverzeichnis definiert sind, und schließlich auf die Verwendung der Standardwerte in der Konfigurationsdatei setzen.
Dies ist sehr flexibel, da es jede vom Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zur Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

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

Dies lädt die `.env` Datei aus dem Hauptverzeichnis der Webanwendung.
In der Datei als `KEY=VALUE` definierte Variablen werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** hinzufügen, werden wahrscheinlich _geheim_ sein!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY` Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird für den Schlüssel keine Umgebungsvariable angegeben, daher wird der Standardwert verwendet werden (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden, oder ob der Schlüssel "leakt", weil Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die aktuelle `DEBUG`-Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur `False`, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Liste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Reihe dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Auch wenn wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn/Server-side/Django/development_environment) (verwenden Sie den `workon [name-of-virtual-environment]` Befehl).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Programmbibliothek von Django, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine und mittlere Websites.
Leider kann es nicht auf einigen beliebten Hosting-Services verwendet werden, wie z.B. Heroku, da sie in der Anwendungsumgebung keinen persistenten Datenspeicher bereitstellen (eine Anforderung von SQLite).
Auch wenn dies uns für das Beispiel der Bereitstellung nicht beeinflussen könnte, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine als Umgebungsvariable übergebene Adresse angesprochen wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, Sie könnten jedoch jeden beliebigen Datenbank-Hosting-Service verwenden.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable mit dem Namen `DATABASE_URL` bereitgestellt.
Anstatt diese Informationen fest in Django zu codieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL` Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Neben der Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden müssen:

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

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) für Railway wird, die auf dem entfernten Server eingerichtet werden sollen:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML-Dateien als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, weil die Anfragen durch Django gehen müssen, auch wenn Django nichts mit ihnen macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es einen erheblichen Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem statische Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Django's _collectstatic_ Tool alle in unseren Vorlagen referenzierten statischen Dateien sammelt. Sobald gesammelt, können sie dann als Gruppe hochgeladen werden, wohin immer die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, in denen Django's _collectstatic_ Tool nach statischen Dateien suchen soll.

Django-Vorlagen verweisen auf Speicherorte von statischen Dateien relativ zu einem `static` Tag (dies können Sie in der Basisschablone sehen, die in [Django Tutorial Teil 5: Erstellung unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL` Einstellung verweist.
Statische Dateien können daher zu jedem Host hochgeladen und Ihre Anwendung so aktualisiert werden, dass sie sie mit dieser Einstellung findet.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in das durch das Projektsettings angegebene Verzeichnis "STATIC_ROOT" zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, wobei alle statischen Dateien der Anwendung an den in `STATIC_ROOT` definierten Speicherort kopiert werden.
`Whitenoise` findet die Dateien (standardmäßig) aus dem durch `STATIC_ROOT` festgelegten Speicherort und stellt sie an der durch `STATIC_URL` festgelegten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (das `STATIC_URL` ist möglicherweise bereits innerhalb der Datei definiert, als sie erstellt wurde.
Obwohl es keinen Schaden anrichtet, können Sie den vorherigen doppelten Verweis ruhig löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das tatsächliche Bereitstellen der Dateien mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorhergehenden Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Inhalte direkt von Gunicorn in der Produktion bereitzustellen.

Schauen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation für eine Erklärung an, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung im Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE` Einstellung und fügen Sie das `WhiteNoiseMiddleware` nahe an der Spitze der Liste hinzu, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien verringern, wenn sie bereitgestellt werden (dies ist effizienter).
Fügen Sie einfach Folgendes ans Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen _WhiteNoise_ nicht weiter konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Hauptverzeichnis Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie das folgende im Hauptverzeichnis des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle verschiedenen oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt** Datei mindestens diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie andere Abhängigkeiten, die nicht unten aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Sie Ihr Anwendungs-Repository in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloud-basierten Plattformen für die Quellcode-Verwaltung zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) im Rahmen der Einrichtung Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "unveränderten" Projekts zu machen – auch wenn einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, könnten andere es nicht sein.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen auf dem `main`-Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie LocalLibrary auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet werden kann.

### Warum PythonAnywhere?

Wir wählen die Nutzung von PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet, wobei es migrierte, wenn die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben PythonAnywhere ausgewählt, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel auch beibehalten, das nicht kostenlos ist, zum Vergleich, und weil es uns ermöglicht, Funktionen wie die Integration mit einer auf einem anderen Dienst ausgeführten Postgres-Datenbank einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie dies nicht müssen.
  Das Erfordernis, sich keine Gedanken um Server, Load Balancer, Reverse Proxys und so weiter kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere lernen, sind übertragbar.
- Die Dienstleistung und Planbeschränkungen beeinträchtigen uns nicht besonders bei der Nutzung von PythonAnywhere für das Tutorial.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebooks-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unser grundlegendes Site läuft!
  - Benutzerdefinierte Domains werden zum Zeitpunkt der Artikelerstellung nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, kann daher beim Neustart langsam sein.
    Sie können sie dauerhaft betreiben, müssen aber alle drei Monate die Website besuchen und die Web-Anwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere ist geeignet für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten die Zeit nehmen zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasiierte Oberfläche zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser LocalLibrary-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Obwohl wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie überblicksmäßig benötigen, um loszulegen.

### Ein PythonAnywhere-Konto erstellen

Um PythonAnywhere nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur Seite [Pläne und Preise](https://www.pythonanywhere.com/pricing/) von PythonAnywhere und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Geschäftsbedingungen und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard umgeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den LocalLibrary-Quellcode von GitHub.
Wir konfigurieren auch die Standarddatenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie im oberen Anwendungsmenü **Consoles** auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm der PythonAnywhere Console-Verwaltung mit grünem Pfeil](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, zur späteren Wiederverwendung zusammen mit ihrer gesamten Historie gespeichert wird.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen öffnen könnten.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung mit dem Namen "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) behandelt wurde.
   Wir hätten die Umgebung beliebig benennen können, und wir können sie deaktivieren und wieder aktivieren, indem wir die folgenden Befehle verwenden:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner mit dem Namen Ihrer Site-URL installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den LocalLibrary-Source in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

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
   > Für das Railway-Beispiel werden wir [Eine Postgres-Datenbank konfigurieren](#bereitstellung_und_verbindung_einer_postgres-sql-datenbank) und durch Setzen der `DATABASE_URL` Umgebungsvariable auf sie zugreifen.
   > Es ist wichtig, dass `migrate` nach der Konfiguration zur Verwendung welcher Datenbank, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#statische_dateien_in_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Site (wie im Abschnitt [Django Admin Site](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie zum Testen Ihrer Site benötigen.

### Einrichtung der Web-App

Nachdem Sie die LocalLibrary-Quellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie als Web-App finden und verwenden kann.

1. Navigieren Sie zum Bereich _Web_ der Seite und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zur Hinzufügung einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Erstellen einer neuen Web-App_ Assistent öffnet sich dann, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Web-App-Domänennamenkonfiguration zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![Linux python Management console](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Auswahl eines Python-Web-Frameworks_ **Manuelle Konfiguration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des für die Anwendung verwendeten Web-Frameworks](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umwelt vollständig zu steuern.
   Dies spielt jetzt keine Rolle, würde es aber, wenn wir mehrere Sites mit möglicherweise unterschiedlichen Versionen von Python und/oder Django hosten würden.

4. Wählen Sie im Bildschirm _Python-Version auswählen_ **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Web-Anwendung](python_anywhere_web_add_select_python_version.png)

   Allgemein gesprochen sollten Sie die neueste von der von Ihnen verwendeten Version von Django unterstützte Python-Version auswählen.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen).

   ![PythonAnywhere bittet um Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich angezeigt, wie unten dargestellt.
   Der Bildschirm hat eine **Neuladen**-Schaltfläche, die Sie verwenden können, um die Web-Anwendung nach weiteren Änderungen neu zu laden.
   Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** drücken, um die Site für weitere drei Monate (und weitergehend) am Leben zu erhalten.

   ![PythonAnywhere-konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten zum Abschnitt "Code" der Registerkarte _Web_ und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die **Speichern**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die LocalLibrary-Anwendung zu finden.
   PythonAnywhere erwartet, dass diese Datei sich an diesem Speicherort befindet, weshalb die WSGI-Datei, die sich bereits im Projekt befindet, nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt "Virtualenv" der Registerkarte _Web_.
   Wählen Sie den Link **Geben Sie den Pfad zu einer virtuellen Umgebung ein, falls gewünscht** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie sie "env_local_library" genannt haben, wie vorgeschlagen, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere-Virtual-Env-Bereich des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt "Statische Dateien" der Registerkarte _Web_.

   ![PythonAnywhere Statische Dateien-Bereich des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL** Link und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Speicherort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie nahe der Oberseite der Registerkarte _Web_ die **Reload**-Schaltfläche, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit hervorgehobenem Link zum Starten der Site](python_anywhere_web_open_site.png)

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, da unser Quellcode nicht auf einem "zulässigen Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungsfehler eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Ebene der Protokollierung auf der Live-Site mithilfe von [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung so, dass sie Ihre PythonAnywhere-Site-URL enthält:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übergeben Sie sie Ihrem GitHub-Repository.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen auf den Hauptzweig übertragen, dann könnten Sie sie im Bash-Prompt mit diesem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche im `Web`-Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, so wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website bereit machen zur Veröffentlichung](#ihre_website_für_die_veröffentlichung_bereit_machen) haben wir die Anwendung so modifiziert, dass sie mithilfe von Umgebungsvariablen oder Variablen in einer **.env** Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um die Debug-Verfolgung zu reduzieren, die dem Benutzer bei einem Fehler angezeigt wird.
- `DJANGO_SECRET_KEY` für einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind bereits darauf vorbereitet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die Datei `.env` schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` auf `False` zu setzen, geben Sie folgendes in die Bash-Konsole ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel, erstellen Sie ein Genre, und erhöhen Sie dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden" Nachricht anstelle eines detaillierten Debug-Protokolls.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie LocalLibrary auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Starterstufe mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option ist.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht müssen.
  Das Erfordernis, sich keine Gedanken um Server, Lastenausgleicher, Reverse Proxys und so weiter machen zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf die Benutzererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway lernen, sind übertragbar.
  Auch wenn Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und falls Sie ihn lieben, sind die Preise vorhersehbar und die Skalierung Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu bestimmen, ob Railway für Ihre eigene Website geeignet ist([#choosing_a_hosting_provider](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Für Django-Apps stellen wir diese Informationen in einer Reihe von Textdateien bereit:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Website benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die zum Starten der Web-Anwendung ausgeführt werden müssen.
  Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe der in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellten Informationen konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Befehlszeilenschnittstellen-Tool](https://docs.railway.app/guides/cli) (CLI).
Das CLI-Tool ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu überprüfen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eines der nützlichsten Features ist, dass Sie mithilfe des CLI-Tools Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung in Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in einem Git-Repository ablegen, die oben genannten Dateien hinzufügen, mit einem Datenbank-Add-on integrieren und Änderungen vornehmen, um statische Dateien richtig zu handhaben.
Sobald wir all das erledigt haben, können wir ein Railway-Konto einrichten, den Railway-Client herunterladen und unsere Website installieren.

Das ist alles, was Sie an Überblick benötigen, um loszulegen.

### Die App für Railway aktualisieren

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer LocalLibrary-Anwendung vornehmen müssen, um sie in Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern werden, die bereits erlernten lokalen Test- und Workflows zu verwenden.

#### Procfile

Eine _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Hauptverzeichnis Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` zeigt Railway an, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Nächste rufen wir das Django-Tool `python manage.py collectstatic` auf, um statische Dateien in das durch die `STATIC_ROOT` Projekteinstellung definierte Verzeichnis zu sammeln (siehe Abschnitt [statische Dateien in Produktion bereitstellen](#statische_dateien_in_produktion_bereitstellen) unten).
Schließlich starten wir den Gunicorn-Prozess, einen beliebten Webanwendungsserver, und übergeben Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden bemerken, dass wir das Projekt bereits auf _gunicorn_ eingerichtet und den Support für das Bereitstellen statischer Dateien enthalten haben!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor die Bereitstellung veröffentlicht wird.

#### Laufzeit

Die **runtime.txt** Datei, falls definiert, gibt Railway an, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Hauptverzeichnis des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Nebenversionsnummer.
> Sie verwenden im Allgemeinen die der definierten Version am nächsten liegende unterstützte Version.

#### Testen Sie erneut und speichern Sie Änderungen in GitHub

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie durch keine der obigen Änderungen beschädigt wurde.
Führen Sie den Entwicklungsserver wie gewohnt aus und prüfen Sie dann, ob die Site in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes "pushen" wir die Änderungen zu GitHub.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Dann erstellen Sie und führen Sie den PR auf GitHub zusammen.

Wir sollten jetzt bereit sein, die LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erhalten

Um Railway nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Besuchen Sie [railway.app](https://railway.app/) und klicken Sie auf den **Login** Link in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Sie müssen dann möglicherweise auf Ihre E-Mail zugreifen und Ihr Konto verifizieren.
- Sie werden dann im Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Website und wählen Sie dann die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste der Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer in Ihrem GitHub-Account zuerst erstellten Vorlage bereitzustellen, und einer Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repository**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die LocalLibrary: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website zeigt einen Dialog an, in dem ein vorhandenes GitHub-Repository gewählt werden kann](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - auswählen und bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt Ihr Projekt dann bereit und zeigt den Fortschritt auf der Registerkarte "Deployments" an.
Wenn die Bereitstellung erfolgreich abgeschlossen wurde, sehen Sie einen Bildschirm wie unten.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung nicht abgeschlossen ist).

### Setzen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, da unser Quellcode nicht auf einem "zulässigen Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungsfehler eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site dar.
> Wir zeigen Ihnen, wie Sie dies deaktivieren können, sobald die Site betriebsbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung so, dass sie Ihre Railway-Site-URL enthält:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie Ihre Einstellungen und übergeben Sie sie Ihrem GitHub-Repository (Railway aktualisiert und stellt Ihre Anwendung automatisch erneut bereit).

### Bereitstellung und Verbindung einer Postgres-SQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht erreichbar ist).
Wir erstellen die Datenbank als Teil des Anwendungsprojekts, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Wählen Sie bei Railway aus dem oberen Menü der Website die Option **Dashboard** und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die Schaltfläche **Settings** kann ausgewählt werden, um projektübergreifende Einstellungen zu ändern.
Wählen Sie nun die Schaltfläche **New**, mit der Dienste zu dem Projekt hinzugefügt werden können.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie beim Aufforderung zum Hinzufügen des Typs Dienst **Database** aus:

![Railway-Projekt - wählen Sie Database als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL** aus, um die Datenbank hinzuzufügen

![Railway-Projekt - wählen Sie Postgres als neuen Diensttyp](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im gleichen Projekt zur Verfügung.
Wenn eine Datenbank erstellt wurde, sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst aus und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** und dann in der _Variable name_-Box **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir die LocalLibrary lesen lassen, um sie als Umgebungsvariable zu lesen).

![Railway - Auswahl einer DATABASE_URL auf der Website](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies erscheint in einem Popup).
Beachten Sie, dass Sie alternativ die Postgres-Datenbank öffnen, dann die Variablenregisterkarte öffnen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genau wie lokal angezeigt werden.
Beachten Sie jedoch, dass es momentan noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.app/guides/cli) Tool auf unserem lokalen Computer tun.

### Den Client installieren

Laden Sie den Railway-Kunden für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier folgen](https://docs.railway.app/guides/cli).

Nachdem der Kunde installiert wurde, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne auf GitHub hochzuladen) und das Ausführen Ihres Django-Projekts lokal mithilfe der gleichen Umgebungseinstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie folgendes in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System ausgeloggt werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank ausführen (dies ist derselbe Vorgang, den wir lokal in [Django Tutorial Teil 4: Django Admin Site > Creating a superuser](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt aufzurufen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht das einfach, indem er einen Mechanismus bietet, Benutzerbefehle lokal mithilfe der gleichen Umgebungseinstellungen wie der Produktionsserver, einschließlich der Datenbankverbindungszeichenfolge, auszuführen.

Öffnen Sie zunächst ein Terminal- oder Befehlsfenster in einem nocherstellen des Locallibrary Projekts.
Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` in dem Nutzer auf Ihrer inneren Railway Konto Browser Test (folgen Sie den Aufforderungen und Anweisungen des Clients oder der Website zur Completen des Enterinoten Eingloggenteprozesses):

```bash
railway login
```

Sobald Sie eingelogt sind, verknüpfen Sie das aktuelle Locallibrary-Verzeichnis mit Ihrem zugehörigen Railway-Projekt mithilfe des folgenden Befehls.
Beachten Sie, dass Sie, wenn dazugehörig beauftragt, ein bestimmtes Projekt ausgewählen/eingeben müssen:

```bash
railway link
```

Wenn das Projekt nun verknüpft ist, können Sie die lokale Django-Projekt mit den gleichen Umgebungseinstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zuvor sicher, dass Ihre normale [Django Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist.
Führen Sie dann den folgenden Befehl aus, um den Namen, die E-Mail und das Passwort einzugeben, falls erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen, d.h. d.j. (https://[your-url].railway.app/admin/) und die Datenbank zu füllen, genau wie in [Django Tutorial Teil 4: Django Admin Site](/de/docs/Learn/Server-side/Django/Admin_site)).

### Konfigurationsvariablen setzen

Der letzte Schritt besteht darin, die Seite zu sichern.
Insbesondere müssen wir das Debug-Protokoll deaktivieren und einen geheimen CSRF-Schlüssel Ihrer Website Saintiff-Sangendersen-Schlüssel.
Die Arbeit, um die zum Lesen der erforderlichen Werte aus den Umgebungsvariablen erforderlichen Werte in der Erreichung auf (source:*doing_your_website_ready_publish) (Bezo*´ ettervonen Forumstet `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Tab _Variablen_.
Dies sollte bereits die `DATABASE_URL` unten drüfterstellt sein:

![Railway - Hinzufügen eines neuen Variablenschirms](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografischen geheimen Schlüssel zu generieren.
Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf dem Entwicklungskomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **New Variable** Schaltfläche und geben Sie den Key `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann wählen Sie **Add**).
Geben Sie dann den Key `DJANGO_DEBUG` mit dem Wert `False` ein.
Das vollständige Set von Variablen sollte so aussehen:

![Railway-Bildschirm, das alle Projektvariablen anzeigt](railway_variables_all.png)

### Debugging

Der Railway Client bietet den Logs-Befehl, um den Endpunkt der Logs anzuzeigen (auf der Website gibt es ein ausführlicheres Log für jedes Projekt):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als diese aufzeigen können, müssen Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) befassen.

## Zusammenfassung

Das ist das Ende dieser Anleitung zur Einrichtung von Django-Apps in Produktion, und auch der Serie von Tutorials über die Arbeit mit Django. Wir hoffen, Sie haben davon profitiert. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier einsehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt ist, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Bereitstellung von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)

  - [Checkliste für die Bereitstellung](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- DigitalOcean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean-Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)

  - [Konfiguration von Django-Anwendungen für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Heroku unter Verwendung von Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Concurrency und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Verwalter](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Einschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Geinorarbeit Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Bereitstellung von Python- und Django-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
