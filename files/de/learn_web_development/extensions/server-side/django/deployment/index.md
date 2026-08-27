---
title: "Django-Tutorial Teil 11: Deployment von Django in der Produktion"
short-title: "11: Deployment"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Sie haben bereits eine Beispielwebsite mit Django erstellt und getestet. Jetzt ist es an der Zeit, sie auf einem Webserver zu installieren, damit sie von jedermann im öffentlichen Internet zugänglich ist.
Diese Seite beschreibt, wie man ein Django-Projekt hostet und was Sie vorbereiten müssen, um Ihre Seite für einen Produktionseinsatz bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Kennenlernen, wo und wie Sie eine Django-App in die Produktion überführen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "fertig genug", um mit dem öffentlichen Testen zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten, als es Ihr persönlicher Entwicklungscomputer ist.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet und den Django-Entwicklungs-Webserver verwendet, um Ihre Seite für den lokalen Browser/Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug- und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting von statischen Dateien auswählen.
- Eine produktionsreife Infrastruktur für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial gibt einige Anleitungen zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel dafür, wie man die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Server-Computer bereitgestellt wird, auf dem Ihre Website für den externen Verbrauch betrieben wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B., Linux, Windows).
- Laufzeit der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B., Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Abhängig von der Konfiguration Ihrer Produktionsumgebung können Sie auch einen Reverse-Proxy, einen Lastverteiler usw. haben.

Der Server-Computer könnte an Ihrem Standort sein und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet in der Praxis, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet in der Regel ein gewisses garantiertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internet-Konnektivität zu einem bestimmten Preis.

Diese Art von ferngesteuerter Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, weil sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und, wenn Sie Teile des Systems aktualisieren müssen, eine Vorstellung davon haben, wo Sie beginnen sollen!

Andere Hosting-Provider unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art des Hostings müssen Sie sich um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) nicht kümmern, da die Hostplattform sich um diese für Sie kümmert – zusammen mit dem Meisten, das Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht das Deployment sehr einfach, weil Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartung und einfachere Skalierung von PaaS schätzen werden. Besonders am Anfang ist es einfacher, Ihre Website auf einem PaaS-System einzurichten, und deshalb werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Python/Django-freundlich ist, sollte dieser Anweisungen bereitstellen, wie sie eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichten (das wäre nicht relevant, wenn Sie ein PaaS verwenden). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community Docs](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting Anbieters

Es gibt viele Hosting-Anbieter, die entweder aktiv Django unterstützen oder gut damit arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

Einige Dinge, die Sie bei der Auswahl eines Anbieters beachten sollten:

- Wie stark Ihre Site voraussichtlich frequentiert wird und die Kosten für Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu bedienen.
- Unterstützung für horizontale Skalierung (Hinzufügung weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo daher der Zugriff voraussichtlich am schnellsten ist.
- Die historische Betriebs- und Ausfallleistung des Hosts.
- Tools, die für das Site-Management bereitgestellt werden — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Anbieter blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur für eine bestimmte Anzahl Stunden Live-Zeit in einigen Preisstufen oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu verwenden.

Die gute Nachricht für Anfänger ist, dass es einige Seiten gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Bewertung und Testzwecke gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkt und eingeschränkt, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einer Einführungszeit ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig für das Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen einfachen Übergang zur Bezahlung zusätzlicher Ressourcen ermöglichen, wenn Ihre Site stärker frequentiert wird.
Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung bietet und weniger Einschränkungen hat.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Fertigstellung Ihrer Website für die Veröffentlichung

Das [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den _django-admin_- und _manage.py_-Tools erstellt wurde, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten in der Produktion anders sein, entweder aus Sicherheits- oder aus Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Diese sollte in der Produktion als `False` gesetzt werden (`DEBUG = False`). Das verhindert, dass sensible/vertrauenswürdige Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für CSRF-Schutz verwendet wird, etc. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in einer Versionskontrolle ist oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer nur für den Server zugänglichen Datei gelesen werden.
Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, andernfalls auf Werte zurückgreifen, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und schließlich auf die Standardwerte in der Konfigurationsdatei zurückgreifen.
Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie unten dargestellt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

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

Dies lädt die `.env`-Datei aus dem Stammverzeichnis der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, wenn definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen nicht auf GitHub gespeichert werden, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen hinzu, wie unten gezeigt.
Während der Entwicklung wir keine Umgebungsvariable für den Schlüssel angegeben sein, daher wird der Standardwert verwendet (es sollte egal sein, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "sichtbar" ist, weil Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG`-Einstellung aus und fügen Sie die neue Zeile hinzu, wie unten gezeigt.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert des `DEBUG` wird standardmäßig `True` sein, aber nur `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariable auf `False` gesetzt wird oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Daher müssen wir Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable auf "False" unter Linux setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste mit Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Anzahl dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```bash
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig für die Bereitstellung von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung einrichteten](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es bei einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Obwohl das uns bei den Beispielbereitstellungen möglicherweise nicht beeinträchtigt, zeigen wir Ihnen eine andere Herangehensweise, die bei Railway, Heroku und einigen anderen Services funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliothek mithilfe einer über eine Umgebungsvariable übergebenen Adresse aufgerufen wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Anbieter von Datenbanken zum Hosting verwenden.

Die Datenbankverbindungsinformationen werden Django mithilfe einer Umgebungsvariablen namens `DATABASE_URL` bereitgestellt.
Anstatt diese Informationen in Django fest zu kodieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, um es auf dem Bereitstellungsserver einzurichten:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die standardmäßige SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem entfernten Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung festlegen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellen von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML-Inhalte als auch unsere statischen Dateien (CSS, JavaScript, etc.) bereitzustellen.
Dies ist für statische Dateien ineffizient, da die Anforderungen durch Django geleitet werden müssen, obwohl Django nichts mit ihnen macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es einen signifikanten Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, damit sie direkt vom Webserver oder von einem Content-Delivery-Network (CDN) bereitgestellt werden können.

Die wichtigen Einstellungen sind:

- `STATIC_URL`: Dies ist die Basis-URL, von der statische Dateien bereitgestellt werden, z.B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_-Tool alle in unseren Vorlagen referenzierten statischen Dateien zusammenführt. Sobald sie gesammelt sind, können sie als Gruppe an jeden beliebigen Host hochgeladen werden.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf Standorte statischer Dateien relativ zu einem `static`-Tag (Sie können dies in der Basistevorlage sehen, die in [Django-Tutorial Teil 5: Die Startseite erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL`-Einstellung verweist.
Statische Dateien können daher an jeden Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie durch diese Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, wobei alle statischen Dateien in der Anwendung an den Standort kopiert werden, der in `STATIC_ROOT` angegeben ist.
`WhiteNoise` findet die Dateien dann vom Standort, der durch `STATIC_ROOT` definiert ist (standardmäßig), und dient ihnen an der Basis-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (das `STATIC_URL` könnte bereits innerhalb der Datei definiert worden sein, als sie erstellt wurde.
Auch wenn es keinen Schaden anrichtet, können Sie die doppelte vorherige Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir verwenden tatsächlich die Bibliothek [WhiteNoise](https://pypi.org/project/whitenoise/), um die Dateien bereitzustellen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen im vorherigen Abschnitt gesehen).
Das Projekt [WhiteNoise](https://pypi.org/project/whitenoise/) stellt eine der einfachsten Methoden bereit, um statische Inhalte direkt von Gunicorn in der Produktion bereitzustellen.

Sehen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/)-Dokumentation an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode für das Bereitstellen dieser Dateien ist.

Die Schritte zum Einrichten von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Installieren von Whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware` ganz oben auf der Liste hinzu, direkt unter dem `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (das ist effizienter).
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

Sie müssen nichts weiter tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ in der Eingabeaufforderung erstellen (führen Sie den folgenden Befehl im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei zumindest die folgenden Elemente auflisten (obwohl sich die Versionsnummern unterscheiden können).
Bitte löschen Sie alle anderen nicht aufgelisteten Abhängigkeiten, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Plattformen zur Quellversionierung zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den lokalen Bibliotheks-Quellcode zu speichern (dies wurde im Abschnitt [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "unberührten" Projekts zu erstellen - obwohl einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, möglicherweise für die Bereitstellung auf jedem Hosting-Dienst nützlich sind (oder für die Entwicklung) könnten andere nicht.
Angenommen, Sie haben alle bisher vorgenommenen Änderungen im `main`-Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie unten gezeigt:

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

Wir entscheiden uns aus mehreren Gründen für die Nutzung von PythonAnywhere:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet, und migriert, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns erleichtert, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie das nicht müssen.
  Da Sie sich nicht um Server, Lastverteiler, Reverse Proxies usw. kümmern müssen, ist es viel einfacher, loszulegen.
- Die erlernten Fähigkeiten und Konzepte können auf andere Lösungen übertragen werden.
- Die Service- und Planbeschränkungen beeinträchtigen die Nutzung von PythonAnywhere für das Tutorial nicht besonders.
  Zum Beispiel:
  - Der Anfänger-Plan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Zugang zum Internet von Ihren Apps, geringe CPU/Bandbreite, keine Unterstützung für IPython/Jupyter-Notebook, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere grundlegende Seite läuft!
  - Eigene Domains werden derzeit nicht unterstützt.
  - Die Umgebung schaltet sich ab, wenn sie nicht genutzt wird, kann also langsam wieder starten.
    Sie können sie für immer betreiben, müssen die Website jedoch alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt freien Support für eine separate MySQL-Datenbank, nicht jedoch für Postgres.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django-SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosten dieser Demonstration und kann bei Bedarf zu größeren Projekten skaliert werden.
Sie sollten sich die Zeit nehmen, ob es [geeignet für Ihre eigene Website](#auswahl_eines_hosting_anbieters) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig Web-basierte Oberfläche zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung öffnen, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir die von Django erstellte standardmäßige SQLite-Datenbank in der gehosteten Ubuntu-Umgebung (es gibt mehr als genug Speicherplatz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles der Überblick, den Sie brauchen, um loszulegen.

### Erstellen Sie ein Konto bei PythonAnywhere

Um PythonAnywhere verwenden zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie auf die PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und klicken Sie auf die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Bedingungen und klicken Sie dann auf **Register**.
- Sie werden dann eingeloggt und auf das PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub ab.
Wir werden auch die standardmäßige Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst den Konsolenverwaltungsbildschirm, indem Sie in der oberen Anwendungsleiste **Consoles** auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu öffnen:

   ![Abbildung des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für Ihre spätere Nutzung gespeichert wird, zusammen mit ihrer ganzen Historie.
   Der grüne Pfeil oben zeigt an, dass dieses Konto bereits eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt.
   Wir hätten die Umgebung beliebig benennen können und können sie mit den folgenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie als Nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir den kostenlosen Account verwenden, können Sie Ihren Account nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den lokalen Bibliotheks-Quellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen passend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die bibliothekarischen Abhängigkeiten mithilfe der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellen_und_anschließen_einer_postgres-sql-datenbank) und diese durch Festlegen der `DATABASE_URL`-Umgebungsvariable verbinden.
   > Es ist wichtig, dass `migrate` erst nach der Konfiguration, welche Datenbank verwendet werden soll, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Standort, an dem sie [in der Produktion bereitgestellt werden](#bereitstellen_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Site (wie im Abschnitt [Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) gezeigt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Angaben, da Sie sie benötigen, um Ihre Site zu testen.

### Einrichtung der Web-App

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie man sie findet und als Webanwendung verwendet.

1. Navigieren Sie zum Abschnitt _Web_ der Site und klicken Sie auf den **Add a new web app** Link:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Wizard wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domain-Namens der Web-App zu überspringen.
   Der kostenlose Account erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zum Festlegen des Domain-Namens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des für die Anwendung verwendeten Web-Framework](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns eine vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Das spielt im Moment keine große Rolle, aber es würde es tun, wenn wir mehrere Websites hosten würden, möglicherweise mit unterschiedlichen Python- und/oder Django-Versionen.

4. Wählen Sie auf dem Bildschirm _Select a Python version_ die Option **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner gesagt sollten Sie die neueste Version von Python auswählen, die durch die von Ihnen verwendete Version von Django erlaubt ist.

5. Wählen Sie auf dem Bildschirm _Manual configuration_ die Option **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung mit Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt.
   Der Bildschirm hat einen **Reload**-Button, mit dem Sie die Webanwendung neu laden können, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm angegeben, müssen Sie auf den **Run until 3 months from today** Knopf klicken, um die Site für weitere drei Monate (und fortlaufend) am Leben zu halten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie zum Abschnitt "Code" im _Web_-Tab nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei. Diese hat einen Namen mit der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Reiter, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (zuerst "hamishwillee" durch Ihren eigenen Benutzernamen aktualisieren) und drücken Sie dann die **Speichern**-Schaltfläche.

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

   Beachten Sie, dass die Rolle der WSGI-Datei ist, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden.
   PythonAnywhere erwartet, dass sich diese Datei an diesem Ort befindet, weshalb die WSGI-Datei, die bereits im Projekt vorhanden ist, nicht verwendet werden kann.

7. Scrollen Sie zum Abschnitt "Virtualenv" im _Web_-Tab nach unten.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad zur virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie ihn wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtualenv-Abschnitt im Web-Reiter](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt "Static files" im _Web_-Tab nach unten.

   ![PythonAnywhere Static files-Abschnitt im Web-Reiter](python_anywhere_web_static_files.png)

   Wählen Sie den Link **Enter URL** und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie im oberen Bereich des _Web_ Tabs die **Reload** Schaltfläche, um die Seite neu zu starten.
   Dann klicken Sie auf den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Webbildschirm mit dem zur Site-Start hervorgehobenen Link](python_anywhere_web_open_site.png)

### Festlegen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehlerdebug-Bildschirm wie unten abgebildet.
Dies ist ein Django-Sicherheitsfehler, der angezeigt wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlermeldung mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Protokollierungsebene auf der Live-Site mithilfe von [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie an Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt in dem Ordner `<user_name>.pythonanywhere.com` und Sie haben die Änderungen in den Hauptzweig übertragen, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart** Schaltfläche auf dem `Web` Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem Superuser-Account, den Sie oben erstellt haben, anmelden und Autoren, Genres, Bücher usw. erstellen können, genauso wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Vorbereitung Ihrer Website zur Veröffentlichung](#fertigstellung_ihrer_website_für_die_veröffentlichung) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie festlegen können:

- `DJANGO_DEBUG=False`, um die Debug-Nachverfolgung zu reduzieren, die dem Benutzer bei einem Fehler angezeigt wird.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies nicht in diesem Beispiel).

Der Weg, auf dem Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab.
Für PythonAnywhere müssen Sie sie von einer Umgebungsdatei lesen.
Wir sind bereits dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein Bash-Prompt von PythonAnywhere.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` auf `False` in der Bash-Konsole zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel, erstellen Sie ein Genre, und erhöhen Sie dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle einer detaillierten Debug-Nachverfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Starter-Stufe mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht müssen.
  Da Sie sich nicht um Server, Lastverteiler, Reverse Proxies usw. kümmern müssen, ist es viel einfacher, loszulegen.
- Railway legt besonderen Wert auf die [Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die erlernten Fähigkeiten und Konzepte können auf andere Lösungen übertragen werden.
  Während Railway einige exzellente neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preisgestaltung vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting_anbieters).

### Wie funktioniert Railway?

Webanwendungen laufen jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern.
Um Ihre Anwendung auszuführen, muss Railway die geeignete Umgebung und Abhängigkeiten einstellen können und auch verstehen, wie sie gestartet wird.
Für Django-Apps geben wir diese Informationen in mehreren Textdateien an:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und -version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site erforderlich sind, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die ausgeführt werden, um die Webanwendung zu starten.
  Für Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich durch Informationen, die in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellt werden, konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variable `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli) Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository aus dem lokalen Branch auf die Live-Site hochzuladen, die Protokolle der laufenden Prozesse zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository umwandeln, die Dateien oben hinzufügen, sich mit einem Datenbank-Addon integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben.
Wenn wir das alles getan haben, können wir ein Railway-Konto einrichten, den Railway-Client besorgen und unsere Website installieren.

Das ist alles der Überblick, den Sie brauchen, um loszulegen.

### Aktualisieren Sie die App für Railway

In diesem Abschnitt werden die Änderungen erläutert, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, damit sie auf Railway funktioniert.
Wir müssen wirklich nur eine `Procfile`- und `runtime.txt`-Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokale Testumgebung und Arbeitsabläufe zu verwenden, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der Webanwendungs-"Entry Point".
Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:`-Präfix zeigt Railway an, dass es sich um einen Webprozess handelt und HTTP-Verkehr gesendet werden kann.
Dann rufen wir den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist (siehe den Abschnitt [Statische Dateien in der Produktion bereitstellen](#bereitstellen_von_statischen_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, der Konfigurationsinformationen im Modul `locallibrary.wsgi` erhält (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ zu beinhalten und das Bereitstellen von statischen Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder um andere nicht interaktive Aufgaben vor dem Deployment auszuführen.

#### Laufzeit

Die **runtime.txt**-Datei, wenn definiert, zeigt Railway an, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minor-Version.
> Anbieter verwenden in der Regel die nächste unterstützte Version zu dem von Ihnen angegebenen Wert.

#### Wieder testen und Änderungen in GitHub speichern

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie nicht durch die obenstehenden Änderungen beschädigt wurde.
Führen Sie den Entwicklungs-Webserver wie gewohnt aus und stellen Sie sicher, dass die Site im Browser so funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Als Nächstes `push` die Änderungen nach GitHub.
In der Eingabeaufforderung (nachdem Sie in unser lokales Repository navigiert haben), geben Sie die folgenden Befehle ein:

```bash
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und verschmelzen Sie dann den PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erhalten Sie ein Railway-Konto

Um mit Railway zu beginnen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup-Fenster aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Site, dann klicken Sie auf die **New Project** Schaltfläche:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und eine Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Websitebildschirm - Bereitstellung](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway während des Setups geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Websitebildschirm, der ein Dialogfeld zur Auswahl eines vorhandenen GitHub-Repos oder zur Auswahl eines neuen anzeigt](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Auswahl von Deploy](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen, wobei der Fortschritt auf der Registerkarte Bereitstellungen angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, wird ein Bildschirm wie unten angezeigt.

![Railway-Websitebildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Website-URL klicken (oben hervorgehoben), um die Website in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### Festlegen von ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehlerdebug-Bildschirm wie unten abgebildet.
Dies ist ein Django-Sicherheitsfehler, der angezeigt wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlermeldung mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Wir zeigen Ihnen, wie Sie es deaktivieren können, nachdem die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie an Ihr GitHub-Repo (Railway aktualisiert und löst Ihre Anwendung automatisch neu aus).

### Bereitstellen und Anschließen einer Postgres-SQL-Datenbank

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden.
(Wenn Sie jetzt die Website öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht zugänglich ist).
Wir werden die Datenbank als Teil unseres Anwendungsprojekts erstellen, obwohl Sie die Datenbank in ihrem eigenen separaten Projekt erstellen können.

Wählen Sie auf Railway die Option **Dashboard** aus dem oberen Menü der Site und wählen Sie dann Ihr Anwendungsprojekt.
An dieser Stelle enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die **Settings**-Schaltfläche kann ausgewählt werden, um projektweite Einstellungen zu ändern.
Wählen Sie die **New**-Schaltfläche, die verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Service-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie aufgefordert werden, die Art des hinzuzufügenden Dienstes auszuwählen:

![Railway-Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um die Datenbank hinzuzufügen

![Railway-Projekt - Postgres als neuen Dienst hinzufügen auswählen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sollten nun sowohl der Anwendungs- als auch der Datenbankdienst im Projekt angezeigt werden.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** und dann im Feld _Variable name_ die Option **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variable, die wir eingerichtet haben, damit die locallibrary sie als Umgebungsvariable liest).

![Railway-Websitebildschirm zur Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup angezeigt).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann ihre Variablentabelle und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu befüllen, weil wir noch keinen Superuser-Account erstellt haben.
Das werden wir mithilfe des [CLI-Tools](https://docs.railway.com/cli) auf unserem lokalen Computer tun.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigsten Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne es in GitHub hochzuladen) und das Ausführen Ihres Django-Projekts lokal mit denselben Einstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt neu zu verknüpfen.

### Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dieselbe Operation, die wir lokal in [Django-Tutorial Teil 4: Django-Admin-Site > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keine direkte Terminalzugriff auf den Server an, und wir können diesen Befehl nicht dem [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es an die _Produktionsdatenbank_ angeschlossen ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder Eingabeaufforderung in einem Git-Klon Ihres locallibrary-Projekts.
Melden Sie sich dann mit dem `login` oder `login --browserless` Befehl bei Ihrem Browserkonto an (folgen Sie allen resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um den Anmeldevorgang abzuschließen).

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugeordneten Railway-Projekt, indem Sie den folgenden Befehl verwenden.
Beachten Sie, dass Sie aufgefordert werden, ein bestimmtes Projekt auszuwählen/einzugeben:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Führen Sie dann den folgenden Befehl aus und geben Sie Name, E-Mail und Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, Ihr Website-Admin-Bereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu befüllen, genau wie in [Django-Tutorial Teil 4: Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)).

### Einstellen von Konfigurationsvariablen

Der letzte Schritt, um die Site sicher zu machen.
Im Besonderen müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Vorbereitung Ihrer Website zur Veröffentlichung](#fertigstellung_ihrer_website_für_die_veröffentlichung) ausgeführt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm des Projekts und wählen Sie den Tab _Variables_.
Dieser sollte bereits das `DATABASE_URL`-Wert, wie unten gezeigt.

![Railway - einen neuen Variabelbildschirm hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu erzeugen.
Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **New Variable** Schaltfläche und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der endgültige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm zeigt alle Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den Befehle logs bereit, um die Protokollanzeige zu zeigen (eine umfassendere Protokollanzeige ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie beginnen, [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu betrachten.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch der Serie von Tutorials über die Arbeit mit Django. Wir hoffen, Sie fanden sie nützlich. Sie können eine komplett durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) ansehen.

Der nächste Schritt ist, die letzten paar Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deployment von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)
  - [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Bereitstellung von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django Community Docs](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumente (ähnliche Einrichtungs-Konzepte)
  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Gleichzeitigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellung von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
