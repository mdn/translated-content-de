---
title: "Django-Tutorial Teil 11: Django in der Produktion bereitstellen"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, werden Sie diese auf einem öffentlichen Webserver installieren wollen, damit sie vom Bibliothekspersonal und den Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu erfahren, wo und wie Sie eine Django-App für die Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "fertig genug", um mit dem öffentlichen Testen zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet und den Django-Entwicklungs-Webserver verwendet, um Ihre Seite im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Einige Änderungen an den Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App auswählen.
- Eine Umgebung für das Hosting der statischen Dateien auswählen.
- Eine produktionsreife Infrastruktur für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitung bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereit zu machen, und ein praktisches Beispiel, wie man die LocalLibrary-Website auf dem [Railway](https://railway.app/) Cloudhostingdienst installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die vom Servercomputer bereitgestellte Umgebung, in der Sie Ihre Website für den externen Verbrauch betreiben werden. Die Umgebung umfasst:

- Hardware des Computers, auf dem die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf denen Ihre Website basiert.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, Lastenausgleich, usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was das tatsächlich bedeutet, ist, dass Ihr Code auf einem Remote-Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel garantierte Rechenressourcen (CPU, RAM, Speicher, etc.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von extern zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die weiteren Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Django- und Webserver-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten bekommen und beim Upgraden von Teilen des Systems wissen, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. In dieser Art von Hosting müssen Sie sich keine Sorgen um die meisten Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) machen, da die Host-Plattform diese Aufgaben für Sie übernimmt — zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung sehr einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte Serverinfrastruktur.

Einige Entwickler werden die zusätzliche Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartungsbelastung und die einfachere Skalierung von PaaS schätzen werden. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen dazu geben, wie eine Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. einzurichten ist. (das wird nicht relevant sein, wenn Sie ein PaaS wählen). Es gibt zum Beispiel viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

## Einen Hosting-Anbieter auswählen

Es gibt viele Hosting-Anbieter, die dafür bekannt sind, entweder aktiv zu unterstützen oder gut mit Django zu arbeiten, einschließlich: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Rechen- und Netzwerkressourcen zu verschiedenen Preisen.

Einige der zu berücksichtigenden Dinge bei der Auswahl eines Hosts sind:

- Wie beschäftigt Ihre Website voraussichtlich sein wird und die Kosten der Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützungsebene für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher am schnellsten sein wird.
- Die historische Verfügbarkeit und Ausfallzeitenleistung des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine begrenzte Anzahl von Stunden "Live-Zeit" in einigen Preiskategorien oder bieten nur eine geringe Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie ansonsten bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht ist, dass es einige Anbieter gibt, die "kostenlose" Umgebungen bereitstellen, die für Evaluierung und Testen gedacht sind, wenn Sie gerade erst anfangen. Dies sind in der Regel recht ressourcenbeschränkte/langsame Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einem Einführungspreis ablaufen können oder andere Einschränkungen haben. Sie sind jedoch großartig, um Low-Traffic-Sites in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zur Zahlung für mehr Ressourcen bieten, wenn Ihre Website stärker frequentiert wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "grundlegende" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Mengen an Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [Digital Ocean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige grundlegende Rechenstufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website für die Veröffentlichung bereit machen

Die mit den Werkzeugen _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung einfacher wird. Viele der Django-Projekteinstellungen (in **settings.py** angegeben) sollten aus Sicherheits- oder Leistungsgründen in der Produktion anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben, und/oder vertrauliche Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debug-Trace- und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Quellkontrolle oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder von einer serverseitigen Datei gelesen werden sollten.
Ändern wir die _LocalLibrary_-Anwendung so, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env**-Datei im Root definiert sind, und zuletzt die Standardwerte in der Konfigurationsdatei verwenden.
Dies ist sehr flexibel, da es jede Konfiguration unterstützt, die vom Hosting-Server unterstützt wird.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/). Diese Bibliothek liest Schlüssel-Wert-Paare aus einer Datei und verwendet sie als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert ist, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung. In der Datei als `KEY=VALUE` definierte Variablen werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, wenn definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie müssen sie nicht auf GitHub speichern und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte egal sein, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "leakt", da Sie ihn in der Produktion nicht verwenden werden).

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

Der Wert von `DEBUG` ist standardmäßig `True`, aber nur `False`, wenn der Wert der `DJANGO_DEBUG`-Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei gesetzt wird. Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Die einzige Möglichkeit, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable auf "False" setzen, indem Sie den folgenden Befehl auf Linux ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste mit Einstellungen, die Sie möglicherweise ändern möchten, finden Sie im [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Sie können auch eine Reihe dieser Einstellungen mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django-WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu betreiben, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#psycopg2) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die beim [Einrichten der Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Installieren Sie dann _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßig von Django verwendete Datenbank, eignet sich für kleine bis mittlere Websites. Leider kann sie auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da diese im Anwendungsumfeld keine persistenten Datenspeicherung bereitstellen (eine Anforderung von SQLite). Während das uns für das Beispieldeployment nicht betrifft, zeigen wir Ihnen eine andere Herangehensweise, die auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung mit einer Adresse aufgerufen wird, die als Umgebungsvariable übergeben wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Dienst verwenden, den Sie möchten.

Die Datenbankverbindungsinformationen werden Django mit einer Umgebungsvariablen namens `DATABASE_URL` zur Verfügung gestellt. Anstatt diese Informationen hart in Django zu kodieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Neben der Installation des _dj-database-url_-Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies zur Interaktion mit Postgres-Datenbanken benötigt.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, sodass es Teil unserer [Anforderungen](#psycopg2) für die Einrichtung auf dem Bereitstellungsserver wird:

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung in jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#psycopg2) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwenden wird, es sei denn, `DATABASE_URL` wird gesetzt. Sie können vollständig auf Postgres umschalten und dieselbe gehostete Datenbank sowohl für die Entwicklung als auch für die Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für die Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, da die Anforderungen durch Django gehen müssen, obwohl Django nichts mit ihnen macht. Während dies während der Entwicklung keine Rolle spielt, hätte es einen erheblichen Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, sodass sie direkt vom Webserver oder von einem Content Delivery Network (CDN) bereitgestellt werden können.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, beispielsweise auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle statischen Dateien, die in unseren Vorlagen referenziert werden, sammelt. Einmal gesammelt, können diese dann als Gruppe hochgeladen werden, wo immer die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet weitere Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich auf statische Dateipfade relativ zu einem `static`-Tag (das in der Basismvorlage definiert ist, wie in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) gezeigt), das wiederum auf die Einstellung `STATIC_URL` verweist. Statische Dateien können daher auf jedem Host hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie mithilfe dieser Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in den im `STATIC_ROOT`- Projekteinstellung definierten Ordner zu sammeln. Es wird mit folgendem Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, indem alle statischen Dateien in der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert werden. `Whitenoise` findet dann die Dateien standardmäßig an dem in `STATIC_ROOT` definierten Ort und stellt sie unter der in `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration ans Ende der Datei. Das `BASE_DIR` sollte bereits in Ihrer Datei definiert worden sein (das `STATIC_URL` könnte bereits in der Datei vorhanden gewesen sein, als sie erstellt wurde. Obwohl es keinen Schaden verursachen wird, können Sie ebenso gut die doppelte vorherige Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden tatsächlich das Dateidienst-Tool namens [WhiteNoise](https://pypi.org/project/whitenoise/) verwenden, das wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, um in der Produktion statische Dateien bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Ressourcen direkt aus Gunicorn in der Produktion zu bedienen.

Schauen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation für eine Erklärung an, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode ist, um diese Dateien bereitzustellen.

Die Schritte, um _WhiteNoise_ mit dem Projekt zu verwenden, sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### whitenoise installieren

Installieren Sie whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie `WhiteNoiseMiddleware` nahe der Spitze der Liste hinzu, direkt unter der `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen reduzieren (das ist effizienter). Fügen Sie einfach das Folgende ans Ende von **/locallibrary/settings.py** hinzu:

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

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert werden. Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (in anderen müssen Sie dies selbst tun). Sie können diese Datei mit _pip_ auf der Befehlszeile erstellen (führen Sie das folgende Kommando im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre **requirements.txt**-Datei _mindestens_ diese Einträge auflisten (obwohl die Versionsnummern unterschiedlich sein können). Bitte löschen Sie alle anderen Abhängigkeiten, die nicht unten aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren oder zu synchronisieren. Das kann die Bereitstellung und iterative Entwicklung viel einfacher machen.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde beim Einrichten Ihrer Entwicklungsumgebung als Teil des [Quellcode-Managements mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) etabliert).

Dies ist ein guter Punkt, um ein Backup Ihres "Vanille"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, könnten andere es nicht sein. Angenommen, Sie haben alle bisher vorgenommenen Änderungen auf dem GitHub `main`-Zweig gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängertarif](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und wurde migriert, als die zuvor kostenlosen Tarife eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Tarif wahrscheinlich kostenlos bleibt.
  > Wir haben auch das Railway-Beispiel beibehalten, das nicht kostenlos ist, um den Vergleich zu erleichtern und um Funktionen wie die Integration mit einer auf einem anderen Service laufenden Postgres-Datenbank leichter demonstrieren zu können.

- PythonAnywhere kümmert sich um die Infrastruktur, damit Sie es nicht tun müssen. Nicht sich um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher anzufangen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere erlernen, sind übertragbar.
- Die Dienst- und Plangrenzen beeinträchtigen uns nicht, PythonAnywhere für das Tutorial zu verwenden. Zum Beispiel:

  - Der Anfängertarif erlaubt eine Web-App auf `<your-username>.pythonanywhere.com`, eingeschränkter Internetzugriff aus Ihren Apps, niedriger CPU/ Bandbreite, keine IPython/ Jupyter Notebook Unterstützung, keine kostenlose Postgres-Datenbank. Aber es gibt genug Platz, um unsere grundlegende Site zum Laufen zu bringen!
  - Benutzerdefinierte Domains werden derzeit nicht unterstützt.
  - Die Umgebung schaltet sich aus, wenn sie nicht genutzt wird, kann also langsam sein, um neu zu starten. Sie kann auf Dauer laufen, aber Sie müssen alle drei Monate die Site besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres. In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere eignet sich hervorragend zur Demonstration dieses Hostings und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten die Zeit investieren, um zu bestimmen, ob es [für Ihre eigene Website geeignet](#einen_hosting-anbieter_auswählen) ist.

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine komplett webbasierte Oberfläche zum Hochladen, Bearbeiten und Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie eine Bash-Konsole auf einer Ubuntu Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In diesem Demonstrieren verwenden wir die Konsole, um unser lokales Bibliotheks-Repository von GitHub zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung. Obwohl wir einige andere Hosting-Dienste für unsere Datenbank benutzen könnten, verwenden wir einfach die im gehosteten Ubuntu-System von Django erstellte standardmäßige SQLite-Datenbank (es gibt mehr als genug Platz, um die Funktionalität der Bibliothek zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist der gesamte Überblick, den Sie benötigen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere zu benutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite von PythonAnywhere und klicken Sie auf die **Create a Beginner account** Schaltfläche.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, E-Mail und Passwort, akzeptieren Sie die Allgemeinen Geschäftsbedingungen und klicken Sie dann auf **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den lokalen Bibliotheksquellcode von GitHub. Wir konfigurieren auch die standardmäßige Datenbank und sammeln statische Dateien, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolen-Verwaltungsbildschirm, indem Sie im oberen Anwendungsmenü auf **Consoles** klicken.
2. Klicken Sie dann auf den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirmfoto der PythonAnywhere Console-Verwaltung mit einem Bash-Startbalken](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für Ihre spätere Nutzung zusammen mit ihrer gesamten Geschichte gespeichert wird. Der grüne Pfeil oben zeigt an, dass es für dieses Konto eine Konsole gibt, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" für die Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Vorgang wie im [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) beschrieben. Wir hätten die Umgebung beliebig benennen können und sie mithilfe der folgenden Befehle deaktivieren und wieder aktivieren können:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem nach Ihrer Site-URL benannten Ordner installieren.

   > [!NOTE]
   > Da wir den kostenlosen Account nutzen, können Sie Ihren Account nur `<your_pythonaware_username>.pythonanywhere.com` nennen (wenn Ihr Benutzername z.B. "Odtsetseg" ist, müssen Sie den lokalen Bibliotheksquellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen passend benannten Ordner zu klonen (Sie müssen die Benutzernamen mit Ihrem eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <pythonaware_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <pythonaware_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mithilfe der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen Sie und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#warum_pythonanywhere?) und diese durch ein Einrichten der `DATABASE_URL` Umgebungsvariable verbinden. Es ist wichtig, dass `migrate` _nach_ dem Konfigurieren der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt](#gunicorn) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Site (wie im Abschnitt [Django-Admin-Site](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, Sie benötigen sie, um Ihre Site zu testen.

### Richten Sie die Web-App ein

Nachdem wir die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie gefunden und als Web-App verwendet werden können.

1. Navigieren Sie zum Website-Abschnitt und klicken Sie auf den **Add a new web app**-Link:

   ![PythonAnywhere Der Abschnitt "Web" zeigt die Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der `Create new web app`-Assistent wird dann geöffnet, um Sie bei der Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Klicken Sie auf **Next**, um die Konfiguration des Web-App-Domainnamens zu überspringen. Der kostenlose Account erstellt die Domain basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![Eingabeaufforderung von PythonAnywhere zum Festlegen des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie auf dem Bildschirm `Select a Python Web framework` **Manuelle Konfiguration**.

   ![Eingabeaufforderung von PythonAnywhere zur Auswahl des Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Manuelkonfiguration ermöglicht uns die vollständige Kontrolle über die Konfiguration der Umgebung. Das spielt jetzt vielleicht nicht so eine Rolle, aber es wäre, wenn wir mehrere Websites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie auf dem Bildschirm `Select a Python Version` **3.10**

   ![Eingabeaufforderung von PythonAnywhere zur Auswahl der Python-Version für die Web-Applictation](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python auswählen, die von der Version von Django unterstützt wird, die Sie verwenden.

5. Wählen Sie auf dem Bildschirm `Manual Configuration` **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen).

   ![Eingabeaufforderung von PythonAnywhere zur Erläuterung der weiteren Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und in den Web-Abschnitt wie gezeigt angezeigt. Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Web-App neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben. Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Bis 3 Monate ab heute ausführen** klicken, um die Site für weitere drei Monate am Leben zu erhalten (und weiter fortlaufend).

   ![Konfigurierte Web-App in PythonAnywhere](python_anywhere_web_configuration.png)

6. Scrollen Sie im Tab _Web_ nach unten zum Abschnitt "Code" und klicken Sie auf den Link zur WSGI-Konfigurationsdatei. Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![WSGI-Datei in der Kategorie "Web", Codeabschnitt von PythonAnywhere](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie vorher "hamishwillee" mit Ihrem eigenen Benutzernamen) und klicken Sie dann auf die Schaltfläche **Speichern**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server zu helfen, die lokale Bibliotheksanwendung zu finden. PythonAnywhere erwartet, dass diese Datei an diesem Ort ist, weshalb die im Projekt bereits vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im Tab "Web" nach unten zum Abschnitt "Virtuelle Umgebung". Klicken Sie auf den Link **Geben Sie den Pfad zu einem virtuellen env ein, falls gewünscht** und geben Sie den Pfad der in der vorherigen Sektion erstellten virtuellen Umgebung ein. Wenn Sie es wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![Virtueller env-Abschnitt des Web-Tabs in PythonAnywhere](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im Tab "Web" nach unten zum Abschnitt "Statische Dateien".

   ![Abschnitt "Statische Dateien" des Web-Tabs in PythonAnywhere](python_anywhere_web_static_files.png)

   Klicken Sie auf den Link **Enter URL** und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie ganz oben im Tab _Web_ die Schaltfläche **Reload**, um die Site neu zu starten. Klicken Sie dann auf den Link der Site-URL, um die Live-Site zu starten:

![PythonAnywhere Webbildschirm mit markiertem Link zum Starten der Site](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt. Dies ist ein Sicherheitsfehler von Django, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverweis eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich gerade einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Seite dar. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Ebene des Loggings auf der Live-Site mit [Umgebungsvariablen](#settings.py) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten gezeigt hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übergeben Sie sie an Ihr GitHub-Repo.

Sie müssen dann die Version Ihres Projekts in PythonAnywhere aktualisieren. Wenn Sie Ihre Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` verwenden und die Änderungen auf den Hauptzweig gepusht haben, können Sie sie in der Bash-Eingabeaufforderung mit dem Befehl importieren:

```Bash
git pull origin main
```

Verwenden Sie die **Reload**-Schaltfläche auf der `Web`-Registerkarte, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Seite aktualisieren, sollte sie jetzt die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website für die Veröffentlichung bereit machen](#ihre_website_für_die_veröffentlichung_bereit_machen) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Speziell haben wir die Bibliothek eingerichtet, damit Sie Folgendes setzen können:

- `DJANGO_DEBUG=False`, um das vom Benutzer gezeigte Debug-Tracing zu reduzieren, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Service ab. Für PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen. Wir sind bereits darauf vorbereitet, sodass alles, was wir tun müssen, das Erstellen der Datei ist.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere-Bash-Prompt.
2. Gehen Sie in Ihr Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben. Zum Beispiel, um `DJANGO_DEBUG` auf `False` in der Bash-Konsole zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel, erstellen Sie ein Genre und erhöhen Sie dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle eines detaillierten Debug-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr. Wir haben diese Anweisungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer die bessere Option sein wird.

Railway ist aus folgenden Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht tun müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für die Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige exzellente neue Funktionen hat, verwenden viele andere populäre Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten Zeit investieren, um zu bestimmen, ob Railway geeignet für Ihre [eigene Website](#einen_hosting-anbieter_auswählen) ist.

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container betrieben. Um Ihre Anwendung ausführen zu können, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird. Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die verwendete Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die gestartet werden, um die Webanwendung zu starten. Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver mit einem `.wsgi`-Skript sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich selbst mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden. Beispielsweise kann eine Datenbank verwendende Anwendung die Adresse mit der Variablen `DATABASE_URL` abrufen. Der Datenbankservice selbst kann von Railway oder einem anderen Anbieter bereitgestellt werden.

Entwickler interagieren mit Railway über die Railway-Site und ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli)-Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bekommen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, sich mit einem Datenbank-Addon integrieren und Änderungen vornehmen, um statische Dateien korrekt zu behandeln. Sobald wir das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client abrufen und unsere Website installieren.

Das ist der gesamte Überblick, den Sie benötigen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_-Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile`- und `runtime.txt`-Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Arbeitsabläufe weiter zu nutzen, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der Einstiegspunkt der Webanwendung. Er listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateiendung) im Root Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` teilt Railway mit, dass dies ein Webprozess ist und HTTP-Verkehr empfangen kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Anschließend rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den im `STATIC_ROOT` Projekt Einstellungszielordner (siehe Abschnitt [Statische Dateien in der Produktion bereitstellen](#gunicorn) unten) zu sammeln. Schließlich starten wir den _gunicorn_-Prozess, ein beliebter Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden bemerken, dass wir das Projekt bereits so eingerichtet haben, dass _gunicorn_ unterstützt und statische Dateien unterstützt werden!

Sie können das Procfile auch verwenden, um Arbeiterprozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die Datei **runtime.txt**, wenn sie definiert ist, teilt Railway mit, welche Python-Version verwendet werden soll. Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting Anbieter unterstützen nicht notwendigerweise jede spezifische Python Laufzeitversion. Sie verwenden in der Regel die nächstgelegene unterstützte Version zum Wert, den Sie angeben.

#### Retest und Änderungen in GitHub speichern

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie nicht durch eine der oben genannten Änderungen beschädigt wurde. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann die Site, ob sie in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Als nächstes wollen wir die Änderungen nach GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) folgende Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann und vereinigen Sie die PR auf GitHub.

Wir sollten nun bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um Railway verwenden zu können, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste der Site.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Gehen Sie dann möglicherweise zu Ihrer E-Mail und bestätigen Sie Ihren Account.
- Sie werden dann in das Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Auf Railway über GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst die **Dashboard** Option aus dem oberen Menü der Site, dann klicken Sie auf die **Neues Projekt** Schaltfläche:

![Railway-Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage zu erstellen, das zuerst auf Ihrem GitHub-Konto erstellt wird, und einer Anzahl von Datenbanken. Wählen Sie **Aus GitHub-Repo bereitstellen**.

![Railway-Website-Bildschirm - Deploy](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt ein Dialogfeld, um ein bestehendes GitHub-Repository zu wählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Auswahl von deploy](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit und zeigt den Fortschritt im Bereich Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Website-Bildschirm - Deployment](railway_project_deploy.png)

Sie können auf die Site-URL (oben markiert) klicken, um die Site in einem Browser zu öffnen (sie funktioniert noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### Set ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie jetzt einen Fehler-Bildschirm wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverweis eines ungültigen HTTP_HOST-Headers](site_error_dissallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn man sich gerade einrichtet, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Website dar. Wir zeigen Ihnen, wie Sie dies deaktivieren, sobald die Site funktioniert.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie unten gezeigt hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übergeben Sie diese an Ihr GitHub-Repo (Railway aktualisiert und stellt Ihre Anwendung automatisch erneut bereit).

### Provision und eine Postgres SQL-Datenbank verbinden

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade bereitgestellten Django-Anwendung verbinden. (Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil auf die Datenbank nicht zugegriffen werden kann). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, auch wenn Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Auf Railway wählen Sie die Option **Dashboard** aus dem oberen Menü der Site und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur eine einzige Service für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstdetails festzulegen). Der **Einstellungen**-Button kann ausgewählt werden, um Projekteinstellungen zu ändern. Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste zum Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Diensten-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie zur Auswahl der Art des hinzuzufügenden Dienstes aufgefordert werden:

![Railway-Projekt - wählen Sie die Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen** aus, um die Datenbankerstellung zu starten:

![Railway-Projekt - wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railwayprojekt mit Anwendung und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann den Tab _Variablen_. Klicken Sie auf **Neue Variable** und dann im _Variablenname_-Feld auf **Referenz hinzufügen**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit die Bibliothek als Umgebungsvariable liest).

![Railway-Website-Bildschirm Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen** aus, um die Variable-Referenz hinzuzufügen und zuletzt **Bereitstellen** (dies erscheint in einem Popup). Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann den Variablentab und die Variable kopiert hätten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es derzeit keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Dies erledigen wir mithilfe des [CLI](https://docs.railway.app/guides/cli)-Tools auf unserem lokalen Computer.

### Client installieren

Herunterladen und installieren Sie den Railway-Client für Ihr lokales Betriebssystem, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen. Einige der wichtigeren Operationen beinhalten das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem zugewiesenen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mithilfe derselben Einstellungen wie auf dem Produktionsserver. Wir zeigen diese in den nächsten Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende Kommando im Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet sind, müssen Sie beide Befehle erneut aufrufen, um das Projekt neu zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django Tutorial Part 4: Django Admin-Seite> Erstellen eines Superusers](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) aufgerufen haben). Railway bietet keinen direkten Terminalzugriff auf den Server und wir können diesen Befehl nicht zum [Procfile](#fetch_the_latest_main_branch) hinzufügen, weil er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal in unserem Django-Projekt auszuführen, wenn er mit der _Produktions_ Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er einen Mechanismus bietet, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich des Datenbankverbindungsstrings.

Öffnen Sie zuerst ein Terminal oder eine Eingabeaufforderung in einem Git-Klon Ihres LocalLibrary-Projekts. Loggen Sie sich dann in Ihr Browser-Konto mit dem Befehl `login` oder `login --browserless` ein (befolgen Sie gegebenenfalls alle daraus resultierenden Aufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Wenn Sie angemeldet sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugewiesenen Railway-Projekt mit dem folgenden Befehl. Beachten Sie, dass Sie ein bestimmtes Projekt auswählen/eingeben müssen, wenn Sie aufgefordert werden dies zu tun:

```bash
railway link
```

Sobald das lokale Verzeichnis und das Projekt _verbunden_ sind, können Sie das lokale Django-Projekt mit den Einstellungen der Produktionsumgebung ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Name, E-Mail und Passwort ein, wenn erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, Ihre Website-Verwaltungsbereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genau wie im [Django Tutorial Part 4: Django-Verwaltungsseite](/de/docs/Learn/Server-side/Django/Admin_site) gezeigt.

### Konfigurationsvariablen setzen

Der letzte Schritt besteht darin, die Site sicher zu machen. Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel festlegen. Die Arbeit zur Umgebungsvariables Lesung der benötigten Werte wurde in [Ihre Website für die Veröffentlichung bereit machen](#ihre_website_für_die_veröffentlichung_bereit_machen) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den Tab _Variablen_. Dies sollte bereits die `DATABASE_URL` wie unten gezeigt haben.

![Railway - Neuen Variablenbildschirm hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu erzeugen. Eine einfache Möglichkeit besteht darin, das folgende Python-Kommando auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Klicken Sie auf den **Neue Variable**-Button und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem Geheimwert ein (dann **Hinzufügen**). Dann geben Sie den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Das endgültige Satz von Variablen sollten so aussehen:

![Railway-Bildschirm mit allen Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den ```logs```-Befehl, um das Ende der Protokolle zu zeigen (ein ausführlicheres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie anfangen, mit [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu arbeiten.

## Zusammenfassung

Das ist das Ende dieses Tutorials zum Einrichten von Django-Apps in der Produktion und auch der Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) finden.

Der nächste Schritt ist das Lesen unserer letzten Artikel und dann die Durchführung der Bewertungsaufgabe.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Bereitstellen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Digital Ocean Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Setup-Konzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Ressourcen](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Bereitstellen von Python- und Django-Apps auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
