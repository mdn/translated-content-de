---
title: "Django-Tutorial Teil 11: Deployment von Django in der Produktion"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit das Bibliothekspersonal und die Mitglieder sie über das Internet erreichen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden können, um Ihre Website bereitzustellen und was Sie tun müssen, um Ihre Site für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Lernabschnitte abschließen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ziel ist es zu lernen, wo und wie man eine Django-App in die Produktion bringen kann.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Site fertig ist (oder "fertig genug", um öffentlich getestet zu werden), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, mit dem Django-Entwicklungs-Webserver, um Ihre Site im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug-Informationen und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting statischer Dateien auswählen.
- Eine Produktionsinfrastruktur für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen für die Auswahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie man die LocalLibrary-Website auf dem Cloud Hosting Service von [Railway](https://railway.app/) installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux, Windows).
- Laufzeitumgebung für Programmiersprachen und Framework-Bibliotheken, auf deren Grundlage Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf die Ihre Website angewiesen ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, können Sie auch einen Reverse-Proxy, einen Lastenausgleich usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu nutzen, der "in der Cloud" gehostet wird. Dies bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet normalerweise ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher usw.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen die Auswahl umfassenderer Umgebungen, die möglicherweise eine komplette Django- und Webserver-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oftmals ist es besser, die Komponenten selbst zu installieren, so dass Sie die Komponenten, die Sie benötigen, erhalten und, wenn Sie Teile des Systems aktualisieren müssen, eine Vorstellung davon haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art des Hostings müssen Sie sich um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastenausgleicher) nicht kümmern, da die Hostplattform dies für Sie übernimmt — zusammen mit den meisten Maßnahmen, die Sie zur Skalierung Ihrer Anwendung ergreifen müssen.

Das macht die Bereitstellung recht einfach, weil Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte Serverinfrastruktur.

Einige Entwickler wählen die von IaaS gebotene erhöhte Flexibilität gegenüber PaaS, während andere den geringeren Wartungsaufwand und die einfachere Skalierbarkeit von PaaS zu schätzen wissen. Wenn Sie gerade beginnen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen bereitstellen, wie man eine Django-Website mit unterschiedlichen Webserver-, Anwendungsserver-, Reverse-Proxy- usw. Konfigurationen einrichtet (dies ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Django Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie Django entweder aktiv unterstützen oder gut damit arbeiten. Dazu gehören: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Level an Computing- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige Punkte, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie ausgelastet Ihre Seite voraussichtlich sein wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützungsgrad für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) sowie die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher wahrscheinlich am schnellsten ist.
- Die historische Betriebs- und Ausfallleistung des Hosts.
- Bereitgestellte Tools zur Verwaltung der Site - sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Übergang zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Service zu nutzen!

Die gute Nachricht ist, dass es viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluierungs- und Testzwecke bestimmt sind, wenn Sie gerade erst anfangen. Diese sind in der Regel ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer gewissen Einführungsphase ablaufen oder andere Einschränkungen haben können. Sie sind jedoch großartig, um niedrigen Traffic in einer gehosteten Umgebung zu testen und bieten eine einfache Migration zum Bezahlen zusätzlicher Ressourcen, wenn Ihre Website beschäftigter wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis-"Stufe an, die für kleine Produktionssites gedacht ist und nützlichere Level an Rechenleistung und weniger Einschränkungen bietet. Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basiskomputierungsstufe (im Bereich von 5 bis 10 USD pro Monat) haben, sind [Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [Digital Ocean](https://www.digitalocean.com/).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website veröffentlichungsbereit machen

Die mit den _django-admin_ und _manage.py_-Tools erstellte [Django-Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) ist darauf ausgelegt, die Entwicklung zu erleichtern. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die überprüft werden müssen, sind:

- `DEBUG`. Dies sollte in der Produktion als `False` eingestellt werden (`DEBUG = False`). Dies verhindert, dass sensible/geheime Debug-Traces und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Wichtig ist, dass der in der Produktion verwendete Schlüssel nicht im Quellcode steht oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer serverseitigen Datei gelesen werden könnten. Lassen Sie uns die _LocalLibrary_ Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind. Falls keine definiert sind, greifen wir auf die Werte in einer **.env**-Datei im Root-Verzeichnis zurück, und zuletzt auf die Standardwerte in der Konfigurationsdatei. Dies ist sehr flexibel, da es jede Konfiguration unterstützt, die vom Hosting-Server unterstützt wird.

Zum Lesen von Umgebungsvariablen aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Dabei handelt es sich um eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert wurde, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dadurch wird die `.env` Datei vom Root der Webanwendung geladen. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')`, definiert ist.

> [!NOTE]
> Alle hinzugefügten Werte in **.env** sind wahrscheinlich _geheim_!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen hinzu, wie im Folgenden gezeigt.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "leakt", da Sie ihn in der Produktion nicht verwenden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die bestehende `DEBUG`-Einstellung aus und fügen Sie die neu angezeigte Zeile hinzu:

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert von `DEBUG` ist standardmäßig `True`, wird jedoch nur `False` sein, wenn der Wert der Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei eingestellt wird.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Daher müssen wir Zeichenketten vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie im [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch einige dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, sodass es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn/Server-side/Django/development_environment) (verwenden Sie den `workon [name-of-virtual-environment]` Befehl). Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittlere Websites. Leider kann es nicht auf einigen beliebten Hosting-Diensten wie Heroku verwendet werden, weil sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Voraussetzung für SQLite). Auch wenn uns das für das Beispiel der Bereitstellung möglicherweise nicht betrifft, zeigen wir Ihnen einen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine Adresse, die als Umgebungsvariable übergeben wird, zugegriffen wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Service verwenden, den Sie mögen.

Die Datenbankverbindungsinformationen werden Django mithilfe einer Umgebungsvariable mit dem Namen `DATABASE_URL` bereitgestellt. Anstatt diese Informationen in Django fest einzugeben, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die Umgebungsvariable `DATABASE_URL` zu parsen und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Neben der Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden sollen:

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

Django wird nun die Datenbankkonfiguration in `DATABASE_URL` verwenden, falls die Umgebungsvariable gesetzt ist; andernfalls wird die standardmäßige SQLite-Datenbank verwendet. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anfragezyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#anforderungen) wird, die von Railway auf dem Remote-Server eingerichtet werden sollen:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt. Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung einstellen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [eigene gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anfragen durch Django geleitet werden müssen, obwohl Django nichts mit ihnen tut. Während dies während der Entwicklung keine Rolle spielt, würde es erhebliche Leistungsprobleme verursachen, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder über ein Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL, von der die statischen Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Diese können dann als Gruppe an den Ort hochgeladen werden, an dem die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich relativ zu einem `static`-Tag auf statische Dateispeicherorte (Sie können dies in der grundlegenden Vorlage sehen, die in [Django Tutorial Teil 5: Erstellen unserer Homepage](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL`-Einstellung verweist. Statische Dateien können daher überall hochgeladen werden, und Sie können Ihre Anwendung so aktualisieren, dass sie diese mit dieser Einstellung findet.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden und kopiert alle statischen Dateien der Anwendung an den in `STATIC_ROOT` angegebenen Ort. `Whitenoise` findet die Dateien aus dem durch `STATIC_ROOT` definierten Speicherort (standardmäßig) und liefert sie unter der im `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert sein, als sie erstellt wurde. Während dies keinen Schaden anrichtet, können Sie genauso gut den doppelten vorherigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden die Dateibereitstellung tatsächlich mithilfe einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) vornehmen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion bereitzustellen.

Die Schritte zur Einrichtung von _WhiteNoise_ für das Projekt werden [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` an die Spitze der Liste hinzu, direkt unterhalb der `SecurityMiddleware`:

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

Option kannst du die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter). Fügen Sie einfach das Folgende an das Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts weiteres konfigurieren, da _WhiteNoise_ standardmäßig Ihr Projekteinstellungen `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei namens **requirements.txt** im Stammverzeichnis Ihres Repositorys gespeichert werden. Viele Hosting-Dienste werden automatisch Abhängigkeiten in dieser Datei installieren (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ auf der Kommandozeile erstellen (führe den folgenden Befehl im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie all die oben genannten verschiedenen Abhängigkeiten installiert haben, sollte Ihre **requirements.txt** Datei zumindest diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht unten aufgeführt sind, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Ihres Anwendungsrepositorys in GitHub

Viele Hosting-Dienste ermöglichen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder von cloudbasierten Quellversionierung Plattformen. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (das wurde im Thema [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet).

Dies ist ein guter Punkt, um ein Backup Ihres "vanilla" Projekts zu machen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst sein könnten (oder für die Entwicklung), könnten andere nicht. Angenommen, Sie haben alle bisher vorgenommenen Änderungen auf dem `main` Branch von GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet wird.

### Warum PythonAnywhere?

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Starterplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Dass es für alle Entwickler erschwinglich ist, ist uns bei MDN sehr wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und nun auf PythonAnywhere gehostet, wobei bei Einstellung der zuvor kostenlosen Pläne gewechselt wurde.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel ebenfalls beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen einfacher zu demonstrieren, wie die Integration mit Postgres-Datenbanken, die auf einem anderen Dienst laufen.

- PythonAnywhere kümmert sich um die Infrastruktur, damit Sie dies nicht tun müssen.
  Wenn man sich nicht um Server, Lastenausgleicher, Reverse-Proxies usw. kümmern muss, wird der Einstieg erheblich erleichtert.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Plan-Einschränkungen beeinträchtigen uns nicht besonders bei der Verwendung von PythonAnywhere für das Tutorial.
  Beispielsweise:

  - Der Starter-Plan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere Basis-Site läuft!
  - Es werden keine benutzerdefinierten Domains unterstützt (Stand der Schreibzeit).
  - Die Umgebung wird geschlossen, wenn sie nicht genutzt wird, und könnte langsam zum Neustart sein.
    Sie können es für immer nutzen, aber Sie müssen die Site alle drei Monate besuchen und die Web-Anwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir die standardmäßige Django SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten die Zeit nehmen zu prüfen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderen Arbeiten mit Ihrer Anwendung.

Durch die Schnittstelle können Sie einen Bash-Console zu einer Ubuntu Linux-Umgebung öffnen, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration werden wir die Konsole verwenden, um unser lokales Library GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Obwohl wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige Django SQLite-Datenbank, die in der gehosteten Ubuntu-Umgebung erstellt wird (es gibt genügend Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie durch Setzen von Umgebungsvariablen über die Bash-Konsole für die Produktion konfiguriert werden.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Holen Sie sich ein PythonAnywhere Konto

Um mit der Verwendung von PythonAnywhere zu beginnen, müssen Sie zuerst ein Konto erstellen:

- Besuchen Sie die Seite für [Pläne und Preise bei PythonAnywhere](https://www.pythonanywhere.com/pricing/) und wählen Sie die **Erstellen Sie ein Benutzerkonto**-Schaltfläche aus.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie dann **Registrieren**.
- Sie werden dann eingeloggt und zu PythonAnywhere Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als Nächstes werden wir einen Bash-Prompt öffnen, eine virtuelle Umgebung einrichten und den lokalen Bibliotheksquellcode von GitHub abrufen.
Wir werden auch die Standard-Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zunächst die Konsole-Verwaltungsseite, indem Sie im oberen Anwendungsmenü auf **Consoles** klicken.
2. Wählen Sie dann den Link **Bash** aus, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere Console-Verwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede erstellte Konsole für die spätere Wiederverwendung mit all ihrer Historie gespeichert wird.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung zu erstellen, die "env_local_library" genannt wird, um die lokalen Bibliotheksanforderungen zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, wie er im Abschnitt [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können und können sie mit den untenstehenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Als Nächstes laden Sie die Bibliotheksquellen von GitHub herunter.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner mit dem Namen Ihrer Site-URL installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<your_pythonaware_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" lautet, müssen Sie den LocalLibrary-Quellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamenwerte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <pythonaware_username>.pythonanywhere.com

   # In den neuen Folder navigieren
   cd <pythonaware_username>.pythonanywhere.com
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
   > Im Railway-Beispiel werden wir [eine Postgres-Datenbank bereitstellen und verbinden](#eine_postgres_sql-datenbank_bereitstellen_und_verbinden) und durch Einstellen der Umgebungsvariable `DATABASE_URL` darauf zugreifen.
   > Es ist wichtig, dass nach dem Migrieren die zu verwendende Datenbank konfiguriert wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in Produktion bereitgestellt werden können](#statische_dateien_in_der_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Site (wie im Abschnitt [Django Admin-Seite](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie die Details, da Sie sie zum Testen Ihrer Website benötigen.

### Die Web-App einrichten

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie sie als Web-App finden und verwenden können.

1. Navigieren Sie zum _Web_-Bereich der Site und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web" Abschnitt, der die Schaltfläche zum Hinzufügen einer neuen App anzeigt](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Assistent öffnet sich dann, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next** aus, um den Web-App-Domainnamen-Konfigurationsschritt zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere Aufforderung zur Einstellung des Domainnamens für die neue Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere Aufforderung zur Auswahl des Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns die vollständige Kontrolle über die Konfiguration der Umgebung.
   Dies spielt jetzt nicht so eine Rolle, aber wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django, wäre es wichtig.

4. Wählen Sie im Bildschirm _Select a Python version_ die Option **3.10**.

   ![PythonAnywhere Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python auswählen, die von Ihrer verwendeten Django-Version erlaubt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ die Option **Next** aus (der Bildschirm erklärt nur einige der Konfigurationsoptionen).

   ![PythonAnywhere Aufforderung zur Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich angezeigt, wie gezeigt.
   Der Bildschirm hat eine **Reload**-Schaltfläche, mit der Sie die Webanwendung nach Ihrer nächsten Änderung neu laden können.
   Wie auf dem Bildschirm angezeigt, müssen Sie die Schaltfläche **Run until 3 months from today** drücken, um die Site für weitere drei Monate (und kontinuierlich) am Leben zu halten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie in der Registerkarte _Web_ nach unten zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei aus.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![WSGI-Datei in der PythonAnywhere-Registerkarte "Web", Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen), und wählen Sie dann die Schaltfläche **Save**.

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
   PythonAnywhere erwartet diese Datei an diesem Speicherort, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie in der Registerkarte _Web_ nach unten zum Abschnitt "Virtualenv".
   Wählen Sie den Link **Enter the path to a virtual env, if desired** aus und geben Sie den Pfad zu der in einem vorherigen Abschnitt erstellten virtuellen Umgebung ein.
   Wenn Sie es wie vorgeschlagen "env_local_library" genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere-Abschnitt "Virtuelle Umgebung" der Registerkarte "Web"](python_anywhere_web_virtualenv.png)

8. Scrollen Sie in der Registerkarte _Web_ nach unten zum Abschnitt "Statische Dateien".

   ![Abschnitt "Statische Dateien" der Registerkarte "Web" von PythonAnywhere](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link aus und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und reflektiert den Speicherort, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausführten.

9. Wählen Sie in der Registerkarte _Web_ oben die Schaltfläche **Reload** aus, um die Site neu zu starten.
   Wählen Sie dann den URL-Link der Site aus, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit hervorgehobenem Link zum Starten der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Beim Öffnen der Site sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Ein detaillierter Fehlerbericht mit einem vollständigen Rückverfolgungsprotokoll eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debuginformationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch bei einer bereitgestellten Site ein Sicherheitsrisiko dar.
> Im nächsten Abschnitt zeigen wir, wie Sie diese Art der Protokollierung auf der Live-Site mit [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL zu enthalten:

```python
## Zum Beispiel, für eine Site-URL bei 'hamishwillee.pythonanywhere.com'
## (ersetzen Sie die untenstehende Zeichenfolge durch Ihre eigene Site-URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# Während der Entwicklung können Sie stattdessen nur die Basis-URL setzen
# (Sie könnten entscheiden, die Site mehrere Male zu ändern).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## Zum Beispiel, für eine Site-URL bei 'web-production-3640.up.railway.app'
## (ersetzen Sie die untenstehende Zeichenfolge durch Ihre eigene Site-URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# Während der Entwicklung/zu diesem Tutorial können Sie stattdessen nur die Basis-URL setzen
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren. Wenn Sie davon ausgehen, dass Sie Ihr Bash-Prompt im Ordner `<user_name>.pythonanywhere.com` verwenden und die Änderungen auf den main-branch gepusht haben, können Sie sie im Bash-Prompt mit dem Befehl importieren:

```Bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche auf der Registerkarte `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet werden und die Homepage der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher und so weiter erstellen können, wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website veröffentlicht](#ihre_website_veröffentlichungsbereit_machen) haben wir die Anwendung so geändert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Speziell haben wir die Bibliothek so eingerichtet, dass Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um die dem Benutzer gezeigte Debug-Tracing zu reduzieren, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert für die Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt mit dem Hosting-Service zusammen. Für PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen. Wir sind dafür bereits eingerichtet, sodass wir nur die Datei erstellen müssen.

Die Schritte sind:

1. Öffnen Sie einen PythonAware Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben. Um zum Beispiel `DJANGO_DEBUG` auf `False` zu setzen, geben Sie im Bash-Console den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht vorhanden ist (z. B. ein Genre erstellen und dann die Nummer in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Not found"-Meldung statt einer detaillierten Debug-Protokollierung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen völlig kostenlosen Starter-Plan mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und vielleicht eine bessere Option für einige Benutzer ist.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht tun müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse-Proxies usw. kümmern zu müssen, macht den Einstieg erheblich einfacher.
- Railway hat einen [Fokus auf Entwicklererfahrung bei Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar.
  Obwohl Railway einige hervorragende neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und umfassend.
- Der Dienst scheint sehr zuverlässig zu sein, und falls Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer Anwendung ist sehr einfach.

Sie sollten sich die Zeit nehmen, herauszufinden, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in mehreren Textdateien an:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die für Ihre Seite benötigten Python-Abhängigkeiten auf, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die zur Start der Webanwendung ausgeführt werden.
  Für Django wird dies in der Regel der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich selbst mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variablen `DATABASE_URL` abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und über ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli) Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, sich mit einem Datenbank-Add-On integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben. Nachdem wir all dies getan haben, können wir ein Railway-Konto einrichten, den Railway-Client herunterladen und unsere Webseite bereitstellen.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Aktualisieren der App für Railway

In diesem Abschnitt wird erklärt, welche Änderungen Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zu verwenden. Wir müssen wirklich nur eine `Procfile`- und `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht davon abhalten, die lokalen Tests und Workflows zu verwenden, die wir bereits erlernt haben.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Seite zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Stamm Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` weist Railway darauf hin, dass es sich um einen Webprozess handelt und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehlsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinstellung definiert wird (siehe den Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webserver, und geben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**) weiter.

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ enthält und das Bereitstellen statischer Dateien unterstützt wird!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Version bereitgestellt wird.

#### Laufzeit

Die **runtime.txt**-Datei, falls definiert, gibt Railway an, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minderwertversion.
> Sie werden in der Regel die nächstgelegene unterstützte Version zur angegebenen Version verwenden.

#### Erneut testen und Änderungen in GitHub speichern

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie nicht durch eine der oben genannten Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie üblich aus und prüfen Sie dann, ob die Site weiterhin wie erwartet im Browser funktioniert.

```bash
python3 manage.py runserver
```

Als Nächstes pussen wir die Änderungen zu GitHub.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann eine PR und führen Sie sie auf GitHub zusammen.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um mit Railway zu starten, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann in Ihr E-Mail-Postfach gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Deployment auf Railway von GitHub aus

Als Nächstes richten wir Railway so ein, dass unsere Bibliothek von GitHub bereitgestellt wird.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Site aus und anschließend die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und eine Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie bei der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt einen Dialog an, um ein vorhandenes GitHub-Repository auszuwählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** wählen.

![Bestätigungsbildschirm - deploy auswählen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte "Deployments" anzeigen.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Deployment](railway_project_deploy.png)

Sie können auf die oben hervorgehobene Site-URL klicken, um die Site in einem Browser zu öffnen (sie wird noch nicht funktionieren, da das Setup noch nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einrichten

Beim Öffnen der Seite erhalten Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten dargestellt.
Dies ist ein Django-Sicherheitsfehler, der angezeigt wird, weil unser Quellcode nicht auf einem "zulässigen Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_dissallowed_host.png)

> [!NOTE]
> Diese Art von Debuginformationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko in einer bereitgestellten Site darstellt.
> Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site betriebsbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## Zum Beispiel, für eine Site-URL bei 'web-production-3640.up.railway.app'
## (ersetzen Sie die untenstehende Zeichenfolge durch Ihre eigene Site-URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# Während der Entwicklung können Sie stattdessen nur die Basis-URL festlegen
# (Sie könnten entscheiden, die Site einige Male zu ändern).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) festlegen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## Zum Beispiel, für eine Site-URL bei 'web-production-3640.up.railway.app'
## (ersetzen Sie die untenstehende Zeichenfolge durch Ihre eigene Site-URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# Während der Entwicklung/zu diesem Tutorial können Sie stattdessen nur die Basis-URL einstellen
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Eine Postgres SQL-Datenbank bereitstellen und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem separaten Projekt erstellen können.

Wählen Sie bei Railway die **Dashboard**-Option aus dem oberen Menü der Seite und dann Ihr Anwendungsprojekt aus. In diesem Stadium enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes einzustellen). Die Schaltfläche **Settings** kann ausgewählt werden, um projektweite Einstellungen zu ändern. Wählen Sie die **New**-Schaltfläche, die verwendet wird, um dem Projekt Dienste hinzuzufügen.

![Railway-Projekt mit neuer Service-Taste hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie zur Auswahl der Art des hinzuzufügenden Dienstes aufgefordert werden:

![Railway Projekt - Wählen Sie Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Wählen Sie Postgres als neuen Dienst aus](railway_project_add_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit.
Nach dem Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway Projekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variablen_ aus.
Wählen Sie **New Variable** und dann im Feld _Variable name_ **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir das LocalLibrary so eingerichtet haben, dass es als Umgebungsvariable liest).

![Railway-Website-Bildschirm, der eine DATABASE_URL auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um den Variablenverweis hinzuzufügen, und schließlich **Deploy** (dies erscheint in einem Popup).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen und dann ihre Variable-Tabelle öffnen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden, wie es lokal angezeigt wurde.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch keinen Superuser-Account erstellt haben.
Wir machen das mit dem [CLI](https://docs.railway.app/guides/cli) Tool auf unserem lokalen Computer.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den Anweisungen bei [Hilfe hier](https://docs.railway.app/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Vorgänge umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein verbundenes Railway-Projekt (ohne dass Sie es auf GitHub hochladen müssen) und das Ausführen Ihres Django-Projekts lokal mit denselben Einstellungen wie auf dem Produktionsserver.
Wir zeigen dies in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie folgende Zeile in einem Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im nächsten Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Ein Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist der gleiche Vorgang, den wir lokal gemacht haben im [Django Tutorial Teil 4: Django Admin-Seite > Erstellen eines Superusers](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser)).
Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht zum [Procfile](#procfile) hinzufügen, da es interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt aufzurufen, wenn es mit der _Produktions_-Datenbank verbunden ist.
Der Railway client vereinfacht dies, indem er einen Mechanismus bietet, um lokale Befehle mit denselben Umgebungsvariablen wie der Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder einen Kommando-Prompt in einem Git-Klon Ihres LocalLibrary-Projekts.
Loggen Sie sich dann mit dem Befehl `login` oder `login --browserless` in Ihr Konto ein (folgen Sie den daraus resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie möglicherweise aufgefordert werden, ein bestimmtes Projekt auszuwählen/einzugeben:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen von der Produktionsumgebung ausführen.
Stellen Sie zunächst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort nach Bedarf ein:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, Ihre Website-Administrationsbereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genauso wie im [Django-Tutorial Teil 4: Django Admin-Seite](/de/docs/Learn/Server-side/Django/Admin_site).

### Konfigurationsvariablen setzen

Der letzte Schritt besteht darin, die Site sicher zu machen.
Insbesondere müssen wir Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Die Arbeit, die benötigten Werte aus Umgebungsvariablen zu lesen, wurde beim [Publizieren Ihrer Website](#ihre_website_veröffentlichungsbereit_machen) gemacht (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_.
Dies sollte bereits den `DATABASE_URL` anzeigen wie unten gezeigt.

![Railway - Bildschirm für neue Variable hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (und wählen Sie dann **Hinzufügen**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der endgültige Satz von Variablen sollte folgendermaßen aussehen:

![Railway-Bildschirm, der alle Projektvariablen zeigt](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl "logs", um das Ende der Logs anzuzeigen (ein vollständigeres Log steht auf der Website für jedes Projekt zur Verfügung):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen als dies bereitstellen kann, müssen Sie anfangen, sich mit [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu beschäftigen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch der Reihe von Tutorials zur Arbeit mit Django. Wir hoffen, Sie fanden sie nützlich. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt ist es, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Deployment Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Bereitstellen mit WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Django mit Apache und mod_wsgi verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Django mit Gunicorn verwenden](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [So stellen Sie Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereit](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere Digital Ocean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Setup-Konzepte)

  - [Django-Apps für Heroku konfigurieren](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte mit Heroku und Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [So funktioniert Heroku](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Python- und Django-Apps auf Heroku bereitstellen](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
