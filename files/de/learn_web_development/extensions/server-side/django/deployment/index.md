---
title: "Django Tutorial Teil 11: Deploying Django in der Produktion"
short-title: "11: Deploying"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun eine großartige [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Webseite erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und -mitgliedern über das Internet zugänglich ist. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Hoster finden könnten, um Ihre Webseite zu deployen, und was Sie tun müssen, um Ihre Seite für die Produktion vorzubereiten.

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
      <td>Erfahren, wo und wie Sie eine Django-App in der Produktion deployen können.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Webseite fertig ist (oder genug fertig ist, um öffentliche Tests zu starten), müssen Sie sie an einem öffentlich zugänglicheren und zugänglicheren Ort als auf Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Seite an lokale Browser/Netzwerke weiterzugeben, und Ihre Webseite mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Webseite extern hosten können, müssen Sie zuerst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App wählen.
- Eine Umgebung zum Hosten von statischen Dateien wählen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Webseite einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion vorzubereiten, und ein praktisches Beispiel dafür, wie Sie die Webseite der Lokalbibliothek auf den [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Webseite für den externen Verbrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Webseite läuft.
- Betriebssystem (z. B. Linux, Windows).
- Programmiersprachenlaufzeit und Bibliotheken, auf denen Ihre Webseite geschrieben ist.
- Webserver zum Bereitstellen von Seiten und anderem Inhalt (z. B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Webseite abhängt.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse-Proxy, einen Load-Balancer usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in dem Rechenzentrum/-zentren Ihres Anbieters ausgeführt wird. Der entfernte Server bietet normalerweise ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher, etc.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständig ausgestattete Umgebungen auszuwählen, die möglicherweise eine komplette Django- und Web-Server-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Webseite sehr einfach machen, da sie die Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie beginnen sollten!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art von Hosting müssen Sie sich um die meisten Teile Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load-Balancer) keine Sorgen machen, da die Host-Plattform diese für Sie erledigt — zusammen mit den meisten Dingen, die Sie tun müssen, um Ihre Anwendung zu skalieren. Das macht den Einsatz ziemlich einfach, weil Sie sich nur auf Ihre Webanwendung und nicht auf die gesamte Serverinfrastruktur konzentrieren müssen.

Manche Entwickler werden die erhöhte Flexibilität schätzen, die IaaS gegenüber PaaS bietet, während andere die reduzierte Wartungsbelastung und das einfachere Skalieren von PaaS schätzen. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Webseite in einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zur Verfügung stellen, wie man eine Django-Website unter Verwendung verschiedener Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichtet (dies trifft nicht zu, wenn Sie ein PaaS wählen). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Einen Hosting-Anbieter wählen

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, entweder aktiv Django zu unterstützen oder gut mit Django zusammenzuarbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/), und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und verschiedene Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie viel Verkehr Ihre Webseite voraussichtlich haben wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um dieser Nachfrage gerecht zu werden.
- Grad der Unterstützung für horizontales Skalieren (Hinzufügen von Maschinen) und vertikales Skalieren (Upgraden auf leistungsstärkere Maschinen) und die damit verbundenen Kosten.
- Wo der Lieferant Rechenzentren hat und damit der Zugriff am wahrscheinlichsten am schnellsten ist.
- Die historische Verfügbarkeit und Leistungsbereitschaft des Hosts.
- Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Rahmenbedingungen für die Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen an oder bieten nur eine kleine Menge Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass Sie von Anfang an besser einen anderen Service genutzt hätten!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es ziemlich viele Seiten gibt, die "kostenlose" Computerumgebungen anbieten, die für Bewertungen und Tests gedacht sind. Diese sind normalerweise ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Beschränkungen haben können. Sie sind jedoch großartig für das Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihre Website stärker frequentiert wird. Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), und so weiter.

Die meisten Anbieter bieten auch eine "Basis" Stufe an, die für kleine Produktionswebseiten gedacht ist und nützlichere Computerressourcen und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basiscomputerebene (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Webseite erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Webseite veröffentlichungsbereit machen

Das [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), das mit den _django-admin_ und _manage.py_-Tools erstellt wurde, ist darauf ausgelegt, die Entwicklung zu erleichtern. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten sich für die Produktion unterscheiden, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt sein (`DEBUG = False`). Dies verhindert, dass sensible/vertrauliche Debugging-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer Zufallswert, der für CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht unter Quellkontrolle steht oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer nur auf dem Server befindlichen Datei gelesen werden. Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env**-Datei im Stammverzeichnis definiert sind, und schließlich auf die Standardwerte in der Konfigurationsdatei zurückgreifen. Das ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration erlaubt.

Für das Lesen von Umgebungswerten aus einer Datei werden wir [python-dotenv](https://pypi.org/project/python-dotenv/) verwenden. Dies ist eine Bibliothek zum Auslesen von Schlüssel-Wert-Paaren aus einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach `BASE_DIR` ein, aber vor die Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Damit wird die `.env`-Datei aus dem Stammverzeichnis der Webanwendung geladen. Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichern und sollten `.env` in Ihr `.gitignore`-Datei eintragen, damit es nicht versehentlich hinzugefügt wird.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu. Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte egal sein, welchen Schlüssel Sie hier verwenden, oder ob der Schlüssel "leaks", da Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die bestehende `DEBUG`-Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert wird `DEBUG` ist standardmäßig auf `True`, wird jedoch nur `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist. Beachten Sie bitte, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Daher müssen wir Zeichenketten vergleichen. Der einzige Weg, um die `DEBUG`-Variable auf `False` zu setzen, ist, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable in Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Deployment-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente). Eine Anzahl dieser können Sie auch mit dem folgenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig zum Bereitstellen von Django WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu betreiben, werden wir es lokal installieren, damit es ein Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zuerst sicher, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) haben (verwenden Sie den Befehl `workon [name-of-virtual-environment]`). Dann installieren Sie _Gunicorn_ lokal über die Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die von Django standardmäßig verwendete Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittlere Websites. Leider kann sie nicht auf einigen beliebten Hosting-Diensten wie Heroku verwendet werden, da sie keine dauerhafte Datenspeicherung in der Anwendungsumgebung bieten (eine Anforderung von SQLite). Während dies uns für die Beispielbereitstellung(en) nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine Adresse angesprochen wird, die als Umgebungsvariable übergeben wird. In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie können jeden beliebigen Datenbank-Hosting-Service verwenden.

Die Datenbankverbindungsinformationen werden an Django mithilfe einer Umgebungsvariablen namens `DATABASE_URL` übergeben. Anstatt diese Informationen in Django hart zu kodieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die Umgebungsvariable `DATABASE_URL` zu analysieren und automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren. Zusätzlich zur Installation des _dj-database-url_ Paketes müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es ein Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden sollen:

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank. Der Wert `conn_max_age=500` macht die Verbindung persistent, was weitaus effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten. Installieren Sie es lokal, damit es ein Teil unserer [Anforderungen](#anforderungen) für das Einrichten auf dem Remote-Server von Railway wird:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django die SQLite-Datenbank während der Entwicklung standardmäßig verwenden wird, es sei denn, `DATABASE_URL` wird gesetzt. Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank sowohl für Entwicklung als auch Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden). Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTMLs als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen. Dies ist für statische Dateien ineffizient, weil die Anfragen durch Django geleitet werden müssen, obwohl Django nichts damit zu tun hat. Während dies während der Entwicklung keine Rolle spielt, hätte es einen signifikanten Leistungseinfluss, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder über ein Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist die Basis-URL, von der statische Dateien bereitgestellt werden, beispielsweise in einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_ Tool alle in unseren Vorlagen referenzierten statischen Dateien sammelt. Sobald diese gesammelt sind, können sie als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_ Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen beziehen sich relativ auf statische Dateispeicherorte mit Bezug auf ein `static`-Tag (dies können Sie in der in Teil 5 der Django-Tutorials definierten Basistemplate sehen), das wiederum auf die `STATIC_URL`-Einstellung verweist. Statische Dateien können daher überall hochgeladen werden und Sie können Ihre Anwendung aktualisieren, um sie mithilfe dieser Einstellung zu finden.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der in der `STATIC_ROOT`-Projekteinstellung definiert ist. Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, wobei alle statischen Dateien der Anwendung an den in `STATIC_ROOT` angegebenen Ort kopiert werden. `Whitenoise` findet dann die Dateien von dem Standort, der durch `STATIC_ROOT` (standardmäßig) definiert ist, und stellt sie an der Basis-URL bereit, die in `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an den Ende der Datei. Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert worden sein, als sie erstellt wurde. Es wird keinen Schaden anrichten, aber Sie können den doppelten vorherigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Datei-Bereitstellen tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen). Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden zum Bereitstellen statischer Assets direkt von Gunicorn in der Produktion.

Sehen Sie in der [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation nach, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Bereitstellen dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal, indem Sie den folgenden Befehl ausführen:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware`-Modul in der Nähe der Spitze der Liste, direkt unter dem `SecurityMiddleware`, hinzu:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen reduzieren (dies ist effizienter). Fügen Sie einfach das folgende am unteren Ende von **/locallibrary/settings.py** hinzu:

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

Sie müssen nichts weiteres tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig die Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositories gespeichert werden. Viele Hosting-Services installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun). Sie können diese Datei mithilfe von _pip_ in der Befehlszeile erstellen (führen Sie den folgenden Befehl im Stammverzeichnis des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller oben genannten Abhängigkeiten sollte Ihre **requirements.txt**-Datei _mindestens_ die folgenden Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die nicht unten aufgeführt sind, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Aktualisieren Sie Ihr Anwendungsrepository auf GitHub

Viele Hosting-Services ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Source Code Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Punkt, um ein Backup Ihres "vanilla" Projekts zu machen — während einige der Änderungen, die wir im folgenden Abschnitt vornehmen werden, für die Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung) nützlich sein können, könnten andere nicht so sein. Angenommen, Sie haben bereits alle bisherigen Änderungen auf dem `main`-Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist wirklich wichtig für MDN!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt PythonAnywhere gehostet und migriert, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben das Railway-Beispiel auch beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, leichter zu demonstrieren.

- PythonAnywhere übernimmt die Infrastruktur, sodass Sie es nicht müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere lernen werden, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen nicht besonders, dass wir PythonAnywhere für das Tutorial verwenden.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere grundlegende Website funktioniert!
  - Benutzerdefinierte Domains werden nicht unterstützt (zum Zeitpunkt der Erstellung).
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass sie möglicherweise langsam neu gestartet wird.
    Sie können sie jedoch für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlosen Support für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden. Sie sollten sich die Zeit nehmen, zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Benutzerschnittstelle zum Hochladen, Bearbeiten und andernfalls Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können. In dieser Demonstration werden wir die Konsole verwenden, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung. Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, werden wir einfach die standardmäßige SQLite-Datenbank verwenden, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz zum Demonstrieren der Bibliotheksfunktionalität).

Sobald die Anwendung läuft, kann sie konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie wissen müssen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um mit PythonAnywhere zu beginnen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Taste **Anfänger-Konto erstellen**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie dann **Registrieren**.
- Sie werden dann angemeldet und zur PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Installation der Bibliothek von GitHub

Als nächstes öffnen wir eine Bash-Eingabeaufforderung, richten eine virtuelle Umgebung ein und holen die Quellen der lokalen Bibliothek von GitHub. Wir werden auch die standardmäßige Datenbank konfigurieren und statische Dateien sammeln, damit diese von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie **Consoles** in der obersten Anwendungsleiste auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bildschirm der Konsolenverwaltung von PythonAnywhere](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für späteren Wiederverwendung mit all ihrer Historie gespeichert wird. Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir stattdessen öffnen könnten.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" zu erstellen, um die Abhängigkeiten der lokalen Bibliothek zu installieren.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Das ist genau das gleiche Verfahren wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) beschrieben. Wir hätten die Umgebung beliebig benennen können, und wir können sie mit den unten stehenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als Nächstes die Bibliotheksquellen von GitHub. PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Website-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur mit `<your_pythonanywhere_username>.pythonanywhere.com` benennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die Quellen der lokalen Bibliothek in einen Ordner namens `odtsetseg.pythonanywhere.com` setzen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzername-Werte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt` Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Host-Computer (genauso wie wir während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [Konfigurieren einer Postgres-Datenbank](#provisionieren_und_anschließen_einer_postgres_sql-datenbank) durchführen und eine Verbindung herstellen, indem wir die Umgebungsvariable `DATABASE_URL` setzen.
   > Es ist wichtig, dass das Migrationskommando _nach_ dem Festlegen der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Webseite zuzugreifen (wie in der [Django-Administrationsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) Abschnitt beschrieben):

   ```bash
   python manage.py createsuperuser
   ```

   Beachten Sie die Details, da Sie sie benötigen, um Ihre Site zu testen.

### Die Web-App einrichten

Nachdem wir die Quellen der lokalen Bibliothek erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie es sie finden und als Web-App verwenden kann.

1. Navigieren Sie zur _Web_-Sektion der Seite und wählen Sie den Link **Eine neue Web-App hinzufügen**:

   ![PythonAnywhere "Web"-Abschnitt mit Taste zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Neue Web-App erstellen_-Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu leiten.

2. Wählen Sie **Weiter**, um die Web-App-Domänennamenkonfiguration zu überspringen. Das kostenlose Konto erstellt die Domäne basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zum Festlegen des Domänennamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Einen Python-Webframework auswählen_ die Option **Manuelle Konfiguration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Mit der manuellen Konfiguration haben wir die volle Kontrolle darüber, wie die Umgebung konfiguriert wird. Dies spielt jetzt nicht so eine große Rolle, aber es würde, wenn wir mehrere Seiten hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Eine Python-Version auswählen_ die Option **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Web-Anwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste von der von Ihnen verwendeten Django-Version erlaubte Python-Version auswählen.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ die Option **Weiter** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung mit Erklärung der nächsten Konfigurationsoptionen](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Abschnitt wie gezeigt angezeigt. Der Bildschirm hat eine **Aktualisieren**-Taste, mit der Sie die Webanwendung nach Änderungen neu laden können. Wie auf dem Bildschirm angezeigt, müssen Sie die Taste **Bis 3 Monate ab heute ausführen** drücken, um die Seite für weitere drei Monate (und laufend) am Leben zu erhalten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im Tab _Web_ nach unten zum Abschnitt "Code" und wählen Sie den Link zur WSGI-Konfigurationsdatei. Diese hat einen Namen mit der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch folgenden Text (aktualisieren Sie "hamishwillee" zuerst mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Taste **Speichern**.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, den Gunicorn-Server zu unterstützen, die lokale Bibliotheksanwendung zu finden. PythonAnywhere erwartet, dass diese Datei sich an diesem Ort befindet, weshalb die bereits im Projekt befindliche WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im Tab _Web_ nach unten zum Abschnitt "Virtualenv". Wählen Sie den Link **Pfad zu einer virtuellen Umgebung eingeben, falls gewünscht** und geben Sie den Pfad zur in der vorherigen Sektion erstellten virtuellen Umgebung ein. Wenn Sie es "env_local_library" genannt haben, wie vorgeschlagen, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Abschnitt Virtualenv des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im Tab _Web_ nach unten zum Abschnitt "Statische Dateien".

   ![PythonAnywhere Abschnitt Statische Dateien des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **URL eingeben** und geben Sie `\static_files\` ein. Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Ort wider, an den Dateien kopiert wurden, als wir `collectstatic` in der vorherigen Sektion durchgeführt haben.

9. Wählen Sie oben im Tab _Web_ die Taste **Aktualisieren**, um die Seite neu zu starten. Wählen Sie dann den Seiten-URL-Link, um die Live-Seite zu starten:

![PythonAnywhere Web-Bildschirm mit hervorgehobenem Link zum Starten der Seite](python_anywhere_web_open_site.png)

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite zu diesem Zeitpunkt geöffnet wird, sehen Sie einen Debug-Fehlerbildschirm, wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie die Einrichtung vornehmen, aber ein Sicherheitsrisiko auf einer bereitgestellten Seite. Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Protokollierungsniveau auf der Live-Seite mithilfe von [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um die URL Ihrer PythonAnywhere-Seite einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und übertragen Sie sie in Ihr GitHub-Repo.

Dann müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren. Angenommen, Sie verwenden Ihr Bash-Eingabeaufforderung im Ordner `<user_name>.pythonanywhere.com` und haben die Änderungen auf die Hauptbranch gepusht, dann könnten Sie in der Basheingabeaufforderung den Befehl ausführen:

```bash
git pull origin main
```

Verwenden Sie die **Neustart**-Taste im `Web` Tab, um die Anwendung neu zu starten. Wenn Sie Ihre gehostete Seite aktualisieren, sollte sie jetzt geöffnet werden und die Homepage der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher usw. erstellen können, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt über [Ihre Webseite veröffentlichungsbereit machen](#ihre_webseite_veröffentlichungsbereit_machen) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie:

- `DJANGO_DEBUG=False` setzen können, um das Debug-Tracing zu reduzieren, das dem Benutzer angezeigt wird, wenn ein Fehler auftritt.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion setzen.
- `DATABASE_URL` setzen, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen festgelegt werden, hängt vom Hosting-Service ab. Bei PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen. Wir sind bereits darauf eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie eine PythonAnywhere Bash-Eingabeaufforderung.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env` Datei schreiben. Um beispielsweise die `DJANGO_DEBUG` Umgebungsvariable auf `False` in der Basheingabeaufforderung zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (z.B. erstellen Sie ein Genre und erhöhen Sie dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde). Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden" Nachricht anstelle eines ausführlichen Debug-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keine komplett kostenlose Starter-Stufe mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer besser geeignet sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway übernimmt die meiste Infrastruktur, sodass Sie es nicht müssen. Sich nicht um Server, Load-Balancer, Reverse-Proxies usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen werden, sind übertragbar. Obwohl Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, festzustellen, ob Railway für Ihre eigene Webseite [geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, benötigt Railway Informationen über die Einrichtung der entsprechenden Umgebung und Abhängigkeiten sowie über deren Start. Für Django-Apps geben wir diese Informationen in verschiedenen Textdateien an:

- **runtime.txt**: Gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: Listet die für Ihre Seite benötigten Python-Abhängigkeiten auf, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die zur Start der Webanwendung ausgeführt werden sollen. Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver sein (mit einem `.wsgi`-Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Nachdem die Anwendung ausgeführt wird, kann sie sich selbst mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Beispielsweise kann eine Anwendung, die eine Datenbank verwendet, die Adresse mit der Variable `DATABASE_URL` abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und mithilfe eines speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tools. Das CLI-Tool ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig auf die Live-Seite hochzuladen, die Protokolle des laufenden Prozesses zu überprüfen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI-Tool Ihr lokales Projekt mit denselben Umgebungsvariablen ausführen können, die Sie auf der Live-Seite verwenden.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository packen, die oben genannten Dateien hinzufügen, mit einer Datenbankerweiterung integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu verarbeiten. Nachdem wir das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie für den Einstieg wissen müssen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen. Wir müssen wirklich nur eine `Procfile` und `runtime.txt` Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokal getesteten und gelernten Arbeitsabläufe zu verwenden.

#### Procfile

Ein _Procfile_ ist der "Einstiegspunkt" der Webanwendung. Es listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Website zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stammverzeichnis Ihres GitHub-Repositories und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` informiert Railway, dass dies ein Webprozess ist, der HTTP-Verkehr senden kann. Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten. Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der in der `STATIC_ROOT` Projekteinstellung definiert ist (siehe Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten). Schließlich starten wir den _gunicorn_ Prozess, einen beliebten Webanwendungsserver, und geben ihm die Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzuschließen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben zu erledigen, bevor die Freigabe bereitgestellt wird.

#### Laufzeit

Die **runtime.txt** Datei, sofern definiert, gibt Railway an, welche Version von Python verwendet werden soll. Erstellen Sie die Datei im Stammverzeichnis des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht notwendigerweise jede Python-Runtime-Minder-Version. Sie werden im Allgemeinen die am nächsten unterstützte Version zum angegebenen Wert verwenden.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Seite zunächst erneut lokal und stellen Sie sicher, dass sie durch Änderungen nicht beschädigt wurde. Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, ob die website noch wie erwartet in Ihrem Browser funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns dann die Änderungen auf GitHub `pushen`. Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und mergen Sie dann die PR auf GitHub.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitzustellen.

### Erstellen Sie ein Railway-Konto

Um mit Railway zu beginnen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Toolbar.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann zum Railway.com-Dashboard: <https://railway.com/dashboard> eingeloggt.

### Auf Railway von GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Seite, und wählen Sie dann die **Neues Projekt**-Taste:

![Railway-Website-Dashboard mit neuer Projekt-Taste](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu bereitstellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Anzahl von Datenbanken. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt einen Dialog zum Auswahl eines vorhandenen GitHub-Repositorys oder zur Auswahl eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm - auswählen bereitstellen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und die Fortschritte auf der Registerkarte Bereitstellungen anzeigen. Sobald die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten stehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL klicken (oben hervorgehoben), um die Seite in einem Browser zu öffnen (sie funktioniert immer noch nicht, da die Einrichtung noch nicht abgeschlossen ist).

### Setzen Sie ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS

Wenn die Seite geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Debug-Fehlerbildschirm, wie unten gezeigt. Dies ist ein Django-Sicherheitsfehler, der auftritt, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr hilfreich, wenn Sie die Einrichtung vornehmen, aber ein Sicherheitsrisiko auf einer bereitgestellten Seite. Wir werden Ihnen zeigen, wie Sie sie deaktivieren können, sobald die Seite läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen. Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und übertragen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Provisionieren und Anschließen einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben. (Wenn Sie die Seite jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugänglich ist). Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank auch in einem eigenen separaten Projekt erstellen können.

Wählen Sie auf Railway die Option **Dashboard** aus dem oberen Menü der Site und wählen Sie dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Die **Einstellungen**-Taste kann ausgewählt werden, um Projekteinstellungen zu ändern. Wählen Sie die **Neu**-Taste, um dem Projekt Dienste hinzuzufügen.

![Railway-Projekt mit hervorgehobener Neuer-Dienst-Taste](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Projekt - Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Postgres als neuen Dienst auswählen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt einrichten. Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann das _Variablen_-Tab. Wählen Sie **Neue Variable** und dann im _Variablennamen_-Feld **Referenz hinzufügen**. Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit die LocalLibrary als Umgebungsvariable gelesen werden kann).

![Railway-Website-Bildschirm, Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablenreferenz hinzuzufügen, und schließlich **Bereitstellen** (dies wird in einem Popup angezeigt). Beachten Sie, dass Sie die Postgres-Datenbank auch geöffnet, dann ihre Variablentab geöffnet und die Variable kopiert haben könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal. Beachten Sie jedoch, dass es derzeit keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben. Das werden wir mithilfe des [CLI](https://docs.railway.com/guides/cli) Tools auf unserem lokalen Computer tun.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Sobald der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen beinhalten das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem verbundenen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal mit den gleichen Einstellungen wie auf dem Produktionsserver. Wir zeigen diese in den nächsten Sektionen.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen. Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt neu zu verknüpfen.

### Konfigurieren Sie einen Superuser-

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser` Befehl gegen die Produktionsdatenbank aufrufen (dies ist der gleiche Vorgang wie wir ihn lokal in [Django Tutorial Teil 4: Django-Administrationsbereich > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) gemacht haben). Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht der [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt aufzurufen, während es mit der _Produktions_-Datenbank verbunden ist. Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal oder eine Befehlszeile in einem Git-Clone Ihres LocalLibrary-Projekts. Melden Sie sich dann mit dem Befehl `login` oder `login --browserless` in Ihrem Browserkonto an (folgen Sie allen daraus resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt, indem Sie den folgenden Befehl verwenden. Beachten Sie, dass Sie ein bestimmtes Projekt auswählen/eingeben müssen, wenn Sie dazu aufgefordert werden:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Produktionseinstellungen ausführen. Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist. Rufen Sie dann den folgenden Befehl auf und geben Sie Name, E-Mail und Passwort bei Bedarf an:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, Ihre Website-Administrationsbereich zu öffnen (`https://[deine-url].railway.app/admin/`) und die Datenbank zu füllen, genau wie im [Django Tutorial Teil 4: Django-Administrationsbereich](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Seite sicher zu machen. Insbesondere müssen wir das Debugging-Protokoll deaktivieren und einen geheimen CSRF-Schlüssel festlegen. Die Arbeit, um die erforderlichen Werte aus Umgebungsvariablen zu lesen, wurde in [Ihre Webseite veröffentlichungsbereit machen](#ihre_webseite_veröffentlichungsbereit_machen) (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`) erledigt.

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie den _Variablen_-Tab. Dies sollte bereits die `DATABASE_URL` wie unten gezeigt enthalten.

![Railway - Neu hinzufügen Variable Bildschirm](railway_variable_new.png)

Es gibt viele Möglichkeiten, eine kryptografisch geheime Schlüssel zu generieren. Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **Neue Variable**-Taste und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann **Hinzufügen** wählen). Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein. Der endgültige Satz von Variablen sollte so aussehen:

![Railway-Bildschirm zeigt alle Projektvariablen](railway_variables_all.png)

### Fehlerbehebung

Der Railway-Client bietet den Befehl `logs`, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bereitstellen kann, müssen Sie sich mit dem [Django-Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) auseinandersetzen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über die Einrichtung von Django-Anwendungen in der Produktion und auch der Reihe von Tutorials über die Arbeit mit Django. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) ansehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Django bereitstellen](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumente)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumente)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumente)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumente)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumente)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumente)

- Railway Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean-Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumente)
  - [Erste Schritte mit Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumente)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumente)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzwerte](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)
  - [Python-Anwendungen mit Gunicorn bereitstellen](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumente)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
