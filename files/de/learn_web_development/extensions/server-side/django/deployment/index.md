---
title: "Django-Tutorial Teil 11: Deployment von Django in Produktion"
short-title: "11: Deployment"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispiel-Website mit Django erstellt und getestet. Jetzt ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie über das öffentliche Internet zugänglich ist. Diese Seite beschreibt, wie ein Django-Projekt gehostet wird und was Sie vorbereiten müssen, um Ihre Website für ein Produktions-Deployment bereit zu machen.

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
      <td>Lernen, wo und wie Sie eine Django-App in Produktion deployen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder zumindest ausreichend fertig, um öffentlich getestet zu werden), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debug- und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine produktionsreife Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App auf die Produktion vorzubereiten, und ein funktionierendes Beispiel, wie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installiert wird.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für externe Aufrufe betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website erstellt wurde.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Je nach Konfiguration Ihrer Produktionsumgebung können Sie auch über einen Reverse Proxy, einen Lastverteiler usw. verfügen.

Der Server-Computer könnte sich in Ihren Räumlichkeiten befinden und mit einem schnellen Zugang mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im oder den Rechenzentren Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet normalerweise eine garantierte Menge an Computerressourcen (CPU, RAM, Speicherkapazität usw.) und Internet-Konnektivität zu einem bestimmten Preis.

Dieses Art von fernzugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, mehr voll ausgestattete Umgebungen auszuwählen, die möglicherweise eine komplette Django- und Webserver-Einrichtung enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können es sehr einfach machen, Ihre Website einzurichten, da die Konfiguration reduziert wird, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, sodass Sie diejenigen erhalten, die Sie möchten und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) kümmern, da die Hostplattform diese für Sie übernimmt - zusammen mit den meisten Aufgaben, die Sie zum Skalieren Ihrer Anwendung ausführen müssen. Das macht das Deployment ziemlich einfach, weil Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden sich für die erhöhte Flexibilität entscheiden, die IaaS im Vergleich zu PaaS bietet, während andere den reduzierten Wartungsaufwand und das leichtere Skalieren von PaaS schätzen werden. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollten Sie Anweisungen erhalten, wie man eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. einrichtet. (Dies wird nicht relevant sein, wenn Sie sich für ein PaaS entscheiden). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Einen Hosting-Anbieter auswählen

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, entweder aktiv Django zu unterstützen oder gut mit Django zu arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) - um nur einige zu nennen. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie viel Verkehr Ihre Seite voraussichtlich haben wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um dieser Nachfrage gerecht zu werden.
- Unterstützung für horizontales Skalieren (Hinzufügen weiterer Maschinen) und vertikales Skalieren (Upgrade auf leistungsstärkere Maschinen) und die Kosten hierfür.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff voraussichtlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallleistung des Hosts.
- Bereitgestellte Tools für die Verwaltung der Website - sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von Stunden „Live-Zeit“ an oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass Sie von Anfang an besser einen anderen Dienst genutzt hätten!

Die gute Nachricht ist, dass es, wenn Sie anfangen, recht viele Sites gibt, die „kostenlose“ Computerumgebungen bereitstellen, die für Evaluierung und Testing gedacht sind. Dies sind normalerweise eher ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen können oder andere Beschränkungen haben. Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen einfachen Umstieg auf die Bezahlung für mehr Ressourcen bieten, wenn Ihre Website mehr Traffic erhält. Beliebte Optionen in dieser Kategorie umfassen [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten außerdem eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computerleistungsebenen und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass die Skalierbarkeit der wichtigste Aspekt ist.

## Ihre Website bereitstellen

Das mit _django-admin_ und _manage.py_ erstellte [Django-Grundgerüst](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung leichter fällt. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion entweder aus Sicherheits- oder Leistungsgründen von denen für die Entwicklung abweichen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensiblere Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die wichtigsten Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den Schutz gegen CSRF usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode hinterlegt oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumentation schlägt vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer ausschließlichen Server-Datei gelesen werden sollten. Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, sofern sie definiert sind, zurückgreifend auf Werte, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und schließlich die Standardwerte in der Konfigurationsdatei verwenden. Dies ist sehr flexibel, da es alle vom Hosting-Server unterstützten Konfigurationen ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Nutzung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert wurde, aber vor der Sicherheitserinnerung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung. In der Datei definierte Variablen als `KEY=VALUE` werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, wenn definiert.

> [!NOTE]
> Alle Werte, die Sie der **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen nicht in GitHub gespeichert werden und Sie sollten `.env` Ihrer `.gitignore`-Datei hinzufügen, damit es nicht aus Versehen hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen ein, wie unten gezeigt. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel „leakt“, da Sie ihn nicht in der Produktion verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG`-Konfiguration aus und fügen Sie die neue Zeile ein, wie unten gezeigt.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` wird standardmäßig `True` sein, aber nur dann `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariablen auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist. Bitte beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Daher müssen wir Zeichenketten vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable auf "False" auf Linux setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Reihe dieser Einstellungen über den Terminalbefehl unten auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Obwohl wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [requirements](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Zuerst stellen Sie sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) haben (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie während der Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites. Leider kann sie jedoch auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da diese keinen permanenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite). Obwohl das uns für das Beispiel-Deployment(s) nicht betreffen könnte, werden wir Ihnen einen anderen Ansatz zeigen, der auf Railway, Heroku und einigen anderen Diensten funktionieren wird.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und auf die von der Django-Bibliotheksanwendung über eine Adresse zugegriffen wird, die als Umgebungsvariable übergeben wird. In diesem Fall werden wir eine Postgres-Datenbank verwenden, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Dienst Ihrer Wahl verwenden.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` bereitgestellt. Anstatt diese Informationen in Django festzucodieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das gewünschte Konfigurationsformat von Django zu konvertieren. Zusätzlich zur Installation des _dj-database-url_-Pakets werden wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) wird, die auf dem Deployment-Server einzurichten sind:

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

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung in jedem Anfragezyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [requirements](#anforderungen) wird, die Railway anwenden muss, um den Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwenden wird, sofern `DATABASE_URL` nicht gesetzt ist. Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank für Entwicklung und Produktion nutzen, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine selbst gehostete [Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist ineffizient für statische Dateien, da die Anfragen Django passieren müssen, auch wenn Django nichts mit ihnen tut. Während dies während der Entwicklung keine Rolle spielt, würde es einen signifikanten Leistungseinbruch verursachen, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir normalerweise die statischen Dateien von der Django-Webanwendung, was es erleichtert, sie direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Pfad, von dem aus statische Dateien bereitgestellt werden, z. B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool statische Dateien sammelt, die in unseren Vorlagen referenziert werden. Sobald sie gesammelt sind, können diese dann als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die das _collectstatic_-Tool von Django nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf statische Dateipfade relativ zu einem `static`-Tag (dies können Sie in der Basisvorlage in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) sehen), das wiederum auf die `STATIC_URL`-Einstellung verweist. Statische Dateien können daher auf jeden Host hochgeladen werden, und Sie können Ihre Anwendung so aktualisieren, dass sie diese über diese Einstellung findet.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, und kopiert alle statischen Dateien in der Anwendung an den Speicherort, der in `STATIC_ROOT` angegeben ist. 'Whitenoise' findet dann die Dateien am Ort, der durch `STATIC_ROOT` definiert ist (standardmäßig) und serviert sie unter der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Das `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert gewesen sein, als sie erstellt wurde. Es wird keinen Schaden anrichten, wenn Sie diese doppelte vorherige Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden tatsächlich die Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) verwenden, um Datei-Serving zu implementieren, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die dazugehörigen Django-Einstellungen in den vorherigen Abschnitten gesehen). Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) stellt eine der einfachsten Methoden zur Verfügung, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

Schauen Sie sich die [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode ist, um diese Dateien bereitzustellen.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware` nahe am Anfang der Liste ein, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien verringern, wenn sie bereitgestellt werden (dies ist effizienter). Fügen Sie einfach das Folgende am Ende von **/locallibrary/settings.py** hinzu:

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

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden. Viele Hosting-Services installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ über die Befehlszeile erstellen (führen Sie das Folgende im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller verschiedenen Abhängigkeiten oben sollte Ihre **requirements.txt**-Datei _zumindest_ diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen, nicht genannten Abhängigkeiten, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Services ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder cloudbasierten Quellcode-Verwaltungsplattformen zu importieren und/oder zu synchronisieren. Dies kann Deployment und iterative Entwicklung erheblich vereinfachen.

Sie sollten GitHub bereits zur Speicherung des Local-Library-Quellcodes verwenden (dies wurde bei der [Verwaltung des Quellcodes mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Punkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich sein könnten, um sie auf jedem Hosting-Service (oder für Entwicklung) bereitzustellen, könnten andere dies nicht sein. Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen im `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Wir entscheiden uns aus mehreren Gründen für die Verwendung von PythonAnywhere:

- PythonAnywhere hat einen [kostenlosen Einsteiger-Tarif](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Erschwinglichkeit für alle Entwickler ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und nun PythonAnywhere gehostet, wobei es migriert wurde, als die vorherigen kostenlosen Tarife eingestellt wurden. Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt. Wir haben auch das Railway-Beispiel beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Features wie die Integration mit einer Postgres-Datenbank zu zeigen, die auf einem anderen Service läuft.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie dies nicht tun müssen. Nicht über Server, Lastverteiler, Reverse Proxies und ähnliche Dinge nachdenken zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von PythonAnywhere lernen, sind übertragbar.
- Die Service- und Planbeschränkungen betreffen uns nicht besonders bei der Nutzung von PythonAnywhere für das Tutorial. Beispielsweise:
  - Der Einsteigerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten eingehenden Internetzugang von Ihren Apps, geringe CPU-/Bandbreite, keine Unterstützung für IPython/Jupyter-Notebook, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz für unsere grundlegende Seite!
  - Eigene Domains werden derzeit nicht unterstützt.
  - Die Umgebung schaltet sich ab, wenn sie nicht verwendet wird, kann also langsam beim Neustart sein. Sie können sie jedoch fortlaufend betreiben, aber Sie müssen die Website alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres. In dieser Demonstration verwenden wir einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere ist angemessen für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skalieren. Sie sollten sich die Zeit nehmen zu bestimmen, ob es [geeignet für Ihre eigene Website ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration werden wir die Konsole nutzen, um unser Local-Library-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Tarif bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Plans and pricing](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail und Ihrem Passwort, bestätigen Sie die Bedingungen und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek aus GitHub installieren

Als Nächstes öffnen wir ein Bash-Fenster, richten eine virtuelle Umgebung ein und holen den Local-Library-Quellcode aus GitHub. Wir werden auch die Standard-Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie in der oberen Anwendungsleiste auf **Consoles** klicken.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für eine spätere Wiederverwendung gespeichert wird, zusammen mit all ihrer Historie. Der grüne Pfeil oben zeigt an, dass dieses Konto eine bereits geöffnete Konsole hat, die wir stattdessen öffnen könnten.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-Virtual-Umgebung namens "env_local_library" für die Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Vorgang, den wir beim [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) durchgeführt haben. Wir hätten die Umgebung beliebig benennen können und wir können sie mit den folgenden Befehlen deaktivieren und wieder aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner mit dem Namen Ihrer Website-URL installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die lokalen Bibliotheksquellen in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank bereitstellen und verbinden](#bereitstellung_und_verbindung_einer_postgres-sql-datenbank) und diese durch Setzen der `DATABASE_URL`-Umgebungsvariable verbinden. Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt werden können](#statische_dateien_in_der_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Site zuzugreifen (wie im Abschnitt [Django Admin Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Richten Sie die Web-App ein

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie gefunden und als Web-App genutzt werden können.

1. Navigieren Sie zum _Web_-Bereich der Website und wählen Sie den **Add a new web app**-Link:

   ![PythonAnywhere "Web"-Bereich mit der Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app Wizard_ öffnet sich, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Web-App-Domänennamenkonfiguration zu überspringen. Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Prompt zur Einstellung des Domänennamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![PythonAnywhere-Prompt zur Auswahl des verwendeten Web-Frameworks der Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht es uns, die Umgebung vollständig zu kontrollieren. Dies spielt jetzt vielleicht keine große Rolle, aber es würde, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Python- und/oder Django-Versionen.

4. Wählen Sie im Bildschirm _Select a Python version_ **3.10**.

   ![PythonAnywhere-Prompt zur Auswahl der Python-Version für die Web-Anwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python auswählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen).

   ![PythonAnywhere-Prompt, der die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich angezeigt, wie gezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können. Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Run until 3 months from today** klicken, um die Website für drei weitere Monate (und fortlaufend) am Leben zu halten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie nach unten zum Bereich "Code" der Registerkarte _Web_ und wählen Sie den Link zur WSGI-Konfigurationsdatei. Dieser hat einen Namen mit der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei in der Web-Registerkarte, Code-Bereich](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Save**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server das Finden der lokalen Bibliotheksanwendung zu erleichtern. PythonAnywhere erwartet diese Datei an diesem Ort, weshalb die WSGI-Datei, die sich bereits im Projekt befindet, nicht verwendet werden kann.

7. Scrollen Sie nach unten zum Abschnitt "Virtualenv" der Web-Registerkarte. Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad zur in der vorherigen Abschnitt erstellten virtuellen Umgebung ein. Wenn Sie ihn wie vorgeschlagen "env_local_library" genannt haben, ist der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env-Bereich der Web-Registerkarte](python_anywhere_web_virtualenv.png)

8. Scrollen Sie nach unten zum Abschnitt "Static files" der Web-Registerkarte.

   ![PythonAnywhere Static files-Bereich der Web-Registerkarte](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und gibt den Ort wieder, an dem die Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben auf der Web-Registerkarte die Schaltfläche **Reload**, um die Website neu zu starten. Wählen Sie dann den URL-Link der Website, um die Live-Site zu starten:

![PythonAnywhere-Webseite, auf der der Link zum Start der Website hervorgehoben ist](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site geöffnet wird, sehen Sie nun einen Fehler-Debug-Bildschirm, wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem „erlaubten Host“ ausgeführt wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback einer ungültigen HTTP_HOST-Header](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Art von Logging auf der Live-Site mithilfe von [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repository.

Anschließend müssen Sie die Version Ihres Projekts in PythonAnywhere aktualisieren. Angenommen, Sie verwenden Ihren Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` und hatten die Änderungen in den Hauptbranch gepusht, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche auf der `Web`-Registerkarte, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Seite aktualisieren, sollte sie jetzt öffnen und die Startseite der Website anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitstellen Ihrer Website](#ihre_website_bereitstellen) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder in der Produktion in einer **.env**-Datei gespeicherten Variablen konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie `DJANGO_DEBUG=False` setzen können, um die angezeigte Debug-Spur zu minimieren. Sie können in der Produktion `DJANGO_SECRET_KEY` auf einen geheimen Wert setzen. `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet (was wir in diesem Beispiel jedoch nicht tun).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab. Bei PythonAnywhere müssen sie aus einer Umgebungsdatei gelesen werden. Wir sind dafür schon eingerichtet, somit müssen wir nur die Datei erstellen.

Die Schritte sind wie folgt:

1. Öffnen Sie einen PythonAnywhere-Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Legen Sie die Umgebungsvariablen fest, indem Sie diese im `.env`-Datei als Key-Value-Paare schreiben. Um beispielsweise `DJANGO_DEBUG` auf `False` in der Bash-Konsole zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel einen Genre erstellen, dann die Nummer in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine „Nicht gefunden“-Nachricht anstelle einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr. Wir haben diese Anweisungen beibehalten, da Railway einige hervorragende Funktionen hat und für manche Benutzer eine bessere Option sein wird.

Railway ist aufgrund mehrerer Gründe eine attraktive Hosting-Option:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie das nicht tun müssen. Nicht über Server, Lastverteiler, Reverse Proxies und so weiter nachdenken zu müssen, macht es viel einfacher, loszulegen.
- Railway hat eine [Fokus auf Entwicklererfahrung für Entwicklung und Deployment](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway lernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und umfassend.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu bestimmen, ob Railway [geeignet für Ihre eigene Website ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird. Für Django-Apps stellen wir diese Informationen in einer Reihe von Textdateien bereit:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden sollen, um die Webanwendung zu starten. Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung zu starten.

Sobald die Anwendung läuft, kann sie sich mithilfe der in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten. Der Datenbankdienst selbst kann von Railway gehostet werden oder von einem anderen Anbieter.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tool. Das CLI-Tool ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI-Tool verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository setzen, die oben genannten Dateien hinzufügen, ein Datenbank-Add-on integrieren und Änderungen vornehmen, um statische Dateien korrekt zu behandeln. Wenn wir das alles getan haben, können wir ein Railway-Konto einrichten, den Railway-Client beschaffen und unsere Website installieren.

Das ist alles, was Sie wissen müssen, um loszulegen.

### App für Railway aktualisieren

In diesem Abschnitt wird erläutert, welche Änderungen Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile`- und eine `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern werden, die lokalen Tests und Workflows zu verwenden, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung. Er listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass es sich um einen Webprozess handelt und HTTP-Traffic gesendet werden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist (siehe Abschnitt [Statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten). Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ umfasst und das Bereitstellen von statischen Dateien unterstützt!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben vor dem Deployment des Releases auszuführen.

#### Runtime

Die Datei **runtime.txt**, falls definiert, teilt Railway mit, welche Version von Python verwendet werden soll. Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen in der Regel nicht jede Python-Runtime-Minor-Version. Sie verwenden in der Regel die nächstgelegene unterstützte Version zu dem angegebenen Wert.

#### Testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie zuerst die Site erneut lokal und stellen Sie sicher, dass sie nicht durch eine der obigen Änderungen beschädigt wurde. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, ob die Site in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als nächstes die Änderungen auf GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Dann erstellen und zusammenführen Sie den PR auf GitHub.

Wir sollten jetzt bereit sein, mit dem Bereitstellen von LocalLibrary auf Railway zu starten.

### Erstellen Sie ein Railway-Konto

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie im Popup GitHub aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto bestätigen.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Deployment auf Railway über GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub zu deployen. Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Website aus und klicken dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Option, ein Projekt aus einer Vorlage zu deployen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - Deploy](railway_new_project_button_deploy_github_repo.png)

Alle Projekte, die in den GitHub-Repos vorkommen, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm, der einen Dialog zur Auswahl eines vorhandenen GitHub-Repositorys oder zur Auswahl eines neuen zeigt](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihr Deployment, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Select Deploy](railway_new_project_deploy_confirm.png)

Railway lädt und deployt dann Ihr Projekt und zeigt den Fortschritt auf der Bereitstellungsregisterkarte an. Wenn das Deployment erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Deployment](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site geöffnet wird, sehen Sie nun einen Fehler-Debug-Bildschirm wie unten angezeigt. Dies ist ein Django-Sicherheitsfehler, der aufgrund des ausgeführt wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site dar. Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site betriebsbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird automatisch Ihre Anwendung aktualisieren und erneut bereitstellen).

### Bereitstellung und Verbindung einer Postgres-SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugänglich ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen können.

Wählen Sie in Railway die **Dashboard**-Option im oberen Menü der Site aus und wählen dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Service für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Die Schaltfläche **Settings** kann ausgewählt werden, um projektweite Einstellungen zu ändern. Wählen Sie die Schaltfläche **New**, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach dem hinzuzufügenden Diensttyp gefragt werden:

![Railway-Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Postgres als neuen Diensttyp auswählen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst aus und dann die Registerkarte _Variables_. Wählen Sie **New Variable** und dann im Feld _Variable name_ **Add reference**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variable, die wir so eingerichtet haben, dass die LocalLibrary als Umgebungsvariable lesen soll).

![Railway-Website-Bildschirm, der eine DATABASE_URL auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann deren Variablentabelle und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso wie lokal angezeigt werden. Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu befüllen, da wir noch kein Superuser-Konto erstellt haben. Das werden wir mit dem [CLI](https://docs.railway.com/cli)-Tool auf unserem lokalen Computer erledigen.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in einem verknüpften Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Django-Projekts mit denselben Einstellungen wie auf dem Produktionsserver. Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie Folgendes in einem Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System ausgeloggt werden, müssen sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Konfigurieren Sie einen Superuser

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django-Tutorial Teil 4: Django Admin Site > Creating a Superuser](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben). Railway bietet keinen direkten Terminalzugriff auf den Server und wir können diesen Befehl nicht der [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist. Der Railway-Client macht dies einfach, indem er eine Mechanismus bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder eine Eingabeaufforderung in einem Git-Clone Ihres LocalLibrary-Projekts. Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` in Ihrem Browserkonto an (folgen Sie allen resultierenden Eingabeaufforderungen und Anweisungen vom Client oder der Website, um das Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie möglicherweise aufgefordert werden, ein bestimmtes Projekt auszuwählen/einzugeben:

```bash
railway link
```

Nun, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie nach Aufforderung Name, E-Mail und Passwort ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu befüllen, genauso wie in [Django-Tutorial Teil 4: Django Admin Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Konfigurierbare Variablen festlegen

Der letzte Schritt besteht darin, die Site sicher zu machen. Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen. Die Arbeit zum Lesen der notwendigen Werte aus Umgebungsvariablen wurde in [Bereitstellen Ihrer Website](#ihre_website_bereitstellen) gemacht (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm des Projekts und wählen Sie die Registerkarte _Variables_. Dies sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - neue Variable hinzufügen Bildschirm](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptographisch geheimen Schlüssel zu erzeugen. Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (und wählen Sie dann **Add**). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm, der alle Projektvariablen anzeigt](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den logs-Befehl zur Verfügung, um das Ende der Logs anzuzeigen (ein ausführlichers Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen als diese erhalten müssen, müssen Sie mit dem [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) anfangen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und der Serie von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier finden](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django-Deployment](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Bereitstellen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumente
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (konzeptuell ähnliche Einrichtung)
  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Heroku und Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Concurrency und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurations-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Deployment von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
