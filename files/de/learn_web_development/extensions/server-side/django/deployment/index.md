---
title: "Django-Tutorial Teil 11: Bereitstellung von Django für die Produktion"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit Bibliotheksmitarbeiter und -mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zum Bereitstellen Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-Anwendung in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertiggestellt ist (oder ausreichend fertiggestellt, um mit öffentlichen Tests zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Seite im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug-Informationen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App wählen.
- Eine Umgebung für das Hosting statischer Dateien wählen.
- Eine produktionsfähige Infrastruktur für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Wahl eines Hosting-Standorts, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App produktionsbereit zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.app/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website zur externen Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängt.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, einen Load Balancer usw. haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Computerressourcen (CPU, RAM, Speicher usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese art von Fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen für die Vorinstallation eines bestimmten Betriebssystems an, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, funktionsreichere Umgebungen auszuwählen, möglicherweise einschließlich einer vollständigen Django- und Webservereinrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei diesem Hosting müssen Sie sich nicht um die meisten Aspekte Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) kümmern, da die Hostplattform diese für Sie übernimmt — zusammen mit den meisten Dingen, die Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, bevorzugen, während andere den reduzierten Wartungsaufwand und das leichtere Skalieren von PaaS schätzen werden. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

## Einen Hosting-Anbieter wählen

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, Django entweder aktiv zu unterstützen oder gut damit zu arbeiten, darunter: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten unterschiedliche Umgebungen (IaaS, PaaS) an und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Überlegungen bei der Auswahl eines Anbieters:

- Wie groß ist die Wahrscheinlichkeit, dass Ihre Seite frequentiert wird, und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen von mehr Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und deren Kosten.
- Wo der Anbieter Rechenzentren hat und wo der Zugang somit wahrscheinlich am schnellsten ist.
- Die bisherige Verfügbarkeit und Ausfallleistung des Anbieters.
- Tools zur Verwaltung der Website — sind diese einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Anbieter werden absichtlich bestimmte Dienste blockieren (z.B. E-Mail). Andere bieten in einigen Preisklassen nur eine begrenzte Anzahl von "Live-Zeiten" Stunden oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit verfällt und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten würden, dass Sie von Anfang an besser einen anderen Dienst genutzt hätten!

Die gute Nachricht ist, dass es einige Websites gibt, die "kostenlose" Computerenvironmenten anbieten, die für Evaluierung und Tests gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkt, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einer Einführungphase verfallen oder andere Einschränkungen haben.
Sie sind jedoch großartig zum Testen von wenig frequentierten Seiten in einer gehosteten Umgebung und bieten eine einfache Migration zur Bezahlung von mehr Ressourcen, wenn Ihre Seite belebter wird.
Beliebte Entscheidungen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "grundlegende" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Stufen von Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ preiswerte grundlegende Computer-Stufe anbieten (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit der wichtigste Aspekt ist.

## Ihre Website veröffentlichungsbereit machen

Die mit _django-admin_ und _manage.py_ erstellte [Django Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (die in **settings.py** angegeben sind) sollten für die Produktion entweder aus Sicherheits- oder Leistungsgründen anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensitive Einstellungen bedingungsgesteuert aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository zur Verfügung steht.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/private Debug-Tracings und Variableinformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der beispielsweise für den CSRF-Schutz verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Versionskontrolle ist oder von außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder aus einer nur für den Server zugänglichen Datei gelesen werden könnten.
Ändern wir die _LocalLibrary_ Anwendung so, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, zurückgreifend auf Werte, die in einer **.env** Datei im Root-Verzeichnis definiert sind und zuletzt auf die Verwendung der Standardwerte in der Konfigurationsdatei.
Dies ist sehr flexibel, da es jede Konfiguration unterstützt, die vom Hosting-Server unterstützt wird.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek, um Schlüssel-Wert-Paare aus einer Datei zu lesen und sie als Umgebungsvariablen zu verwenden, allerdings nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung, wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code ein, nachdem `BASE_DIR` definiert wurde, aber vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Root-Verzeichnis der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie Ihrer **.env** Datei hinzufügen, sind wahrscheinlich _geheim_!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt wird.

Deaktivieren Sie nun die ursprüngliche `SECRET_KEY` Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben sein, also wird der Standardwert verwendet (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "leakt", da Sie ihn in der Produktion nicht verwenden werden).

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

Der Wert von `DEBUG` wird standardmäßig `True` sein, wird aber nur dann `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist.
Beachten Sie bitte, dass Umgebungsvariablen Zeichenketten und keine Python-Typen sind. Wir müssen daher Zeichenketten vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable auf Linux setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste für Einstellungen, die Sie möglicherweise ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django docs). Sie können eine Reihe dieser Einstellungen auch mit dem unten stehenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig verwendet wird, um Django WSGI-Anwendungen bereitzustellen.

Während wir Gunicorn nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung bereitzustellen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Vergewissern Sie sich zunächst, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) haben (verwenden Sie den Befehl `workon [Name-der-virtuellen-Umgebung]`).
Installieren Sie dann Gunicorn lokal über die Befehlszeile mit pip:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann sie auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Obwohl dies uns bei der Beispielbereitstellung(en) nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet ausgeführt wird und von der Django-Bibliotheksanwendung über eine als Umgebungsvariable übermittelte Adresse aufgerufen wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Dienst Ihrer Wahl verwenden.

Die Datenbankverbindungsinformationen werden Django mittels einer Umgebungsvariablen namens `DATABASE_URL` zugeführt.
Anstatt diese Informationen fest in Django zu kodieren, verwenden wir das [dj-database-url](https://pypi.org/project/dj-database-url/) Paket, um die `DATABASE_URL`-Umgebungsvariable zu analysieren und automatisch in das gewünschte Konfigurationsformat von Django zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die Standard-SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist, als die Verbindung in jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 unterstützt jetzt Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber hat auf Railway nicht funktioniert!
  Versuchen Sie, es beim nächsten Release zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, um es auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django während der Entwicklung standardmäßig die SQLite-Datenbank verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können vollständig zu Postgres wechseln und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine selbst gehostete [Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML-Dateien als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist ineffizient für statische Dateien, da die Anfragen durch Django geleitet werden müssen, obwohl Django nichts damit tut.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Leistungseinbußen, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder über ein Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus die statischen Dateien bereitgestellt werden, zum Beispiel über ein CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Nach dem Sammeln können diese dann als Gruppe an den Ort hochgeladen werden, an dem die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_-Tool nach statischen Dateien durchsuchen soll.

Django-Vorlagen verweisen auf statische Dateistandorte relativ zu einem `static`-Tag (Sie können dies in der Basistemplate sehen, die in [Django Tutorial Teil 5: Erstellen unserer Homepage](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert wurde), das wiederum auf die `STATIC_URL`-Einstellung verweist.
Statische Dateien können somit auf jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie über diese Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in dem durch die `STATIC_ROOT`-Projekteinstellung definierten Ordner zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, indem alle statischen Dateien in der Anwendung an den Ort kopiert werden, der in `STATIC_ROOT` angegeben ist.
`Whitenoise` findet dann die Dateien von dem in `STATIC_ROOT` definierten Ort (standardmäßig) und stellt sie unter der Basis-URL bereit, die in `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Das `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte bereits innerhalb der Datei definiert sein, als sie erstellt wurde.
Obwohl es keinen Schaden anrichtet, könnten Sie auch den doppelten vorherigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Dateiserve tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die relevanten Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/)-Projekt bietet eine der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion bereitzustellen.

Wenn Sie sich für eine Erklärung interessieren, wie _WhiteNoise_ funktioniert und warum die Implementierung eine relativ effiziente Methode zur Bereitstellung dieser Dateien ist, sollten Sie die [WhiteNoise-Dokumentation](https://pypi.org/project/whitenoise/) durchlesen.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier beschrieben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten reproduziert):

#### Installieren Sie Whitenoise

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE`-Einstellung und fügen Sie das `WhiteNoiseMiddleware` direkt nach dem `SecurityMiddleware` hinzu:

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

Optional können Sie die Größe der statischen Dateien beim Bereitstellen reduzieren (was effizienter ist).
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

Sie müssen nichts weiter konfigurieren, um _WhiteNoise_ zu verwenden, da es standardmäßig die Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert werden.
Viele Hosting-Dienste installieren automatisch die Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit pip auf der Befehlszeile erstellen (führen Sie den folgenden Befehl im Root des Repos aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente enthalten (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen nicht aufgeführten Abhängigkeiten, es sei denn, Sie haben sie explizit für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellcode-Verwaltungsplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten GitHub bereits zur Speicherung des lokalen Bibliotheksquellcodes verwenden (dies wurde in [Quellcode-Verwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Punkt, um ein Backup Ihres "Vanilla"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung), könnten andere es nicht sein.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen an den `main` Branch auf GitHub gesichert, können Sie einen neuen Branch erstellen, um Ihre Änderungen zu sichern, wie gezeigt:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) hostet.

### Warum PythonAnywhere?

Wir wählen PythonAnywhere aus mehreren Gründen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet und migriert, als die zuvor kostenlosen Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben auch das Railway-Beispiel beibehalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie dies nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von PythonAnywhere lernen, sind übertragbar.
- Die Service- und Planbeschränkungen beeinträchtigen uns nicht besonders bei der Verwendung von PythonAnywhere für das Tutorial.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<Ihr-Benutzername>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugriff von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere Grundseite laufen kann!
  - Benutzerdefinierte Domains werden zum Zeitpunkt des Schreibens nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird und könnte langsam starten.
    Sie können es endlos laufen lassen, allerdings müssen Sie alle drei Monate die Website besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die von Django erstellte Standard-SQLite-Datenbank auf der gehosteten Ubuntu-Umgebung.

PythonAnywhere ist für das Hosten dieser Demonstration geeignet und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen, um zu bestimmen, ob es [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole für eine Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Obwohl wir einen anderen Hosting-Dienst für unsere Datenbank nutzen könnten, verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole festgelegt werden.

Das ist alles, was Sie brauchen, um loszulegen.

### Erstellen Sie ein Konto bei PythonAnywhere

Um PythonAnywhere nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu der PythonAnywhere [Plans and pricing](https://www.pythonanywhere.com/pricing/) Seite, und wählen Sie die **Create a Beginner account** Schaltfläche.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail und Ihrem Passwort, erkennen Sie die Allgemeinen Geschäftsbedingungen an und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<Ihr_Benutzername>/`.

### Library von GitHub installieren

Als nächstes werden wir ein Bash-Prompt öffnen, eine virtuelle Umgebung einrichten und den lokalen Bibliotheksquellcode von GitHub abrufen.
Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere Consolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede Konsole, die Sie erstellen, für Ihre spätere Wiederverwendung zusammen mit dem gesamten Verlauf gespeichert wird.
   Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hat, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10 virtuelle Umgebung namens "env_local_library" für die Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dieser Vorgang entspricht genau dem, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können, und wir können sie deaktivieren und reaktivieren, indem wir die unten stehenden Befehle verwenden:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihren Account nur `<Ihr_pythonanywhere_benutzername>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie die lokale Bibliotheksquelle in einem Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

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

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie wir es während der Entwicklung gemacht haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir eine [Postgres-Datenbank konfigurieren](#eine_postgres_sql-datenbank_bereithalten_und_verbinden) und diese durch Setzen der `DATABASE_URL`-Umgebungsvariable verbinden.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration der zu verwendenden Datenbank aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in der Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Seite zuzugreifen (wie im [Django Admin-Bereich](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) Abschnitt behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie zum Testen Ihrer Seite benötigen.

### Richten Sie die Web-App ein

Nachdem wir die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie zu finden und als Web-App zu verwenden sind.

1. Navigieren Sie zum _Web_-Bereich der Website und wählen Sie den **Add a new web app** Link:

   ![Web-Bereich von PythonAnywhere mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Web-App-Domainnamen-Konfiguration zu überspringen.
   Das kostenlose Konto erstellt die Domain basierend auf Ihrem Benutzernamen: `<benutzer_name>.pythonanywhere.com`.

   ![PythonAnywhere-Eingabeaufforderung zur Einstellung des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ die Option **Manual configuration**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des verwendeten Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Mit der manuellen Konfiguration haben wir die vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Das spielt jetzt keine Rolle, aber es würde, wenn mehrere Seiten gehostet würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Im Bildschirm _Select a Python version_ wählen Sie **3.10**.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Python-Version auswählen, die von der Version von Django, die Sie verwenden, unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ die Option **Next** (der Bildschirm erklärt nur einige der Konfigurationsmöglichkeiten).

   ![PythonAnywhere-Eingabeaufforderung, die die nächsten Konfigurationsoptionen erklärt](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt.
   Der Bildschirm hat eine **Reload**-Schaltfläche, die Sie verwenden können, um die Webanwendung neu zu laden, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm angegeben, müssen Sie auf die Schaltfläche **Run until 3 months from today** klicken, um die App weitere drei Monate am Leben zu erhalten (und fortlaufend).

   ![PythonAnywhere konfiguriertes Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie zum Abschnitt "Code" der _Web_-Registerkarte und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen in der Form `/var/www/<benutzer_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei in der Registerkarte Web, Abschnitt Code](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die **Save**-Schaltfläche aus.

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

   Beachten Sie, dass die Rolle der WSGI-Datei darin besteht, dem Gunicorn-Server das Finden der LocalLibrary-Anwendung zu erleichtern.
   PythonAnywhere erwartet diese Datei an diesem Ort, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie zum Abschnitt "Virtualenv" der _Web_-Registerkarte.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie sie "env_local_library" wie vorgeschlagen genannt haben, lautet der Pfad: `/home/<benutzer_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtualenv-Abschnitt der Registerkarte Web](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt "Static files" der _Web_-Registerkarte.

   ![PythonAnywhere Static files-Abschnitt der Registerkarte Web](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Standort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausführen ließen.

9. Wählen Sie im oberen Bereich der _Web_-Registerkarte die Schaltfläche **Reload**, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit dem hervorgehobenen Link, um die Site zu starten](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko bei einer bereitgestellten Site.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Niveau der Protokollierung auf der Live-Site mithilfe von [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Danach müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt im Ordner `<benutzer_name>.pythonanywhere.com`, und Sie haben die Änderungen in den Hauptbranch gepusht, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche auf der `Web`-Registerkarte, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie jetzt geöffnet werden und die Homepage der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen können, genauso wie auf Ihrem lokalen Computer.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt über das [Bereitmachen Ihrer Website für die Veröffentlichung](#ihre_website_veröffentlichungsbereit_machen) haben wir die Anwendung so geändert, dass sie mithilfe von Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Konkret haben wir die Library so eingerichtet, dass Sie:

- `DJANGO_DEBUG=False` setzen können, um die dem Benutzer angezeigten Debug-Traces bei einem Fehler zu reduzieren.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion setzen können.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (was wir in diesem Beispiel nicht tun).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie diese aus einer Umgebungsdatei lesen.
Wir sind dafür bereits eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<benutzer-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben.
   Geben Sie beispielsweise den folgenden Befehl ein, um `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel einen Genre erstellen, dann die Zahl in der URL-Leiste erhöhen, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung, anstatt eines detaillierten Debug-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.app/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlose Einstiegsstufe mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht bewältigen müssen.
  Nicht sich um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher anzufangen.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, nutzen andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und Ihre App zu skalieren ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Für Django-Apps liefern wir diese Informationen in einer Reihe von Textdateien:

- **runtime.txt**: gibt die zu verwendende Programmiersprache und Version an.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Website benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die gestartet werden sollen, um die Webanwendung zu starten.
  Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)-Konfiguration zum Aufrufen unserer Django-Anwendung in der Railway-Umgebung.

Sobald die Anwendung läuft, kann sie sich mit Informationen aus [Umgebungsvariablen](https://docs.railway.app/guides/variables) konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mithilfe eines speziellen [Befehlszeilenschnittstellen (CLI)](https://docs.railway.app/guides/cli) Tools.
Der CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Liveseite hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie den CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bekommen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, sich mit einem Datenbank-Add-On integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben.
Sobald wir das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie brauchen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile` und eine `runtime.txt` Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die lokalen Tests und Workflows zu verwenden, die wir bereits gelernt haben.

#### Procfile

Eine _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Seite zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repo und kopieren Einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Der Präfix `web:` teilt Railway mit, dass dies ein Webprozess ist und HTTP-Verkehr gesendet wird.
Wir rufen dann den Befehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT`-Projekteinrichtung definiert ist (siehe Abschnitt [Statische Dateien im Produktionsbetrieb bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Schließlich starten wir den _gunicorn_ Prozess, einem beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskeleton: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ unterstützt und die Bereitstellung statischer Dateien unterstützt!

Sie können die Procfile auch verwenden, um Worke 

#### Runtime

Die **runtime.txt** Datei, wenn definiert, teilt Railway mit, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Kleinversion.
> Sie verwenden im Allgemeinen die engste unterstützte Version für den von Ihnen angegebenen Wert.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie zuerst die Site erneut lokal und stellen Sie sicher, dass sie nicht durch eine der oben genannten Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und prüfen Sie dann, ob die Site noch wie erwartet in Ihrem Browser funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als nächstes die Änderungen nach GitHub `push`en.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann die PR auf GitHub und führen Sie den Merge durch.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway bereitzustellen.

### Holen Sie sich ein Railway-Konto

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie im Popup GitHub aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.app-Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway so ein, dass unsere Bibliothek von GitHub bereitgestellt wird.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website, und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit Schaltfläche für neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Websitebildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während des Setups bei Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<Benutzername>/django-locallibrary-tutorial`.

![Railway-Websitebildschirm zeigt einen Dialog zum Auswählen eines vorhandenen GitHub-Repositories oder der Wahl eines neuen aus](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** wählen.

![Bestätigungsbildschirm - wählen Sie bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte Bereitstellungen an.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Websitebildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL klicken (oben hervorgehoben), um die Site in einem Browser zu öffnen (es funktioniert noch nicht, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Traceback eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko bei einer bereitgestellten Site.
> Wir zeigen Ihnen, wie Sie es deaktivieren, sobald die Site einsatzbereit ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts)-Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendung CSRF-Schutz verwendet, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die unten stehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und erneut bereitstellen).

### Eine Postgres SQL-Datenbank bereithalten und verbinden

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen können.

Wählen Sie auf Railway die **Dashboard**-Option im oberen Menü der Website und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen Service für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Servicedetails einzustellen).
Die Schaltfläche **Settings** kann ausgewählt werden, um projectweite Einstellungen zu ändern.
Wählen Sie die Schaltfläche **New**, die verwendet wird, um dem Projekt Dienste hinzuzufügen.

![Railway-Projekt mit neuer Dienstschaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie gefragt werden, welche Art von Dienst hinzugefügt werden soll:

![Railway-Projekt - wählen Sie Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Projekt - wählen Sie Postgres als neuen Dienst aus](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste im Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Web-Service und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** aus und wählen Sie im Feld _Variable name_ **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variable, die wir eingerichtet haben, damit locallibrary als Umgebungsvariable liest).

![Railway-Websitebildschirm, der eine DATABASE_URL auswählt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um die Variablenreferenz hinzuzufügen, und schließlich **Deploy** (dies wird in einem Popup angezeigt).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann die Variable-Registerkarte öffnen und die Variable kopieren hätten können.

Wenn Sie das Projekt jetzt öffnen, sollte es angezeigt werden, genau wie es lokal tat.
Beachten Sie, dass es jedoch noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, da wir noch kein Superuser-Konto erstellt haben.
Wir werden dies mit dem [CLI](https://docs.railway.app/guides/cli)-Tool auf unserem lokalen Computer tun.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [hier beschriebenen Anweisungen](https://docs.railway.app/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers auf ein verbundenes Railway-Projekt (ohne hochladen auf GitHub zu müssen) und das Ausführen Ihres Django-Projekts lokal unter Verwendung derselben Einstellungen wie auf dem Produktionsserver.
Wir zeigen diese im nächsten Abschnitt.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie Folgendes in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um ein Projekt mit einem Verzeichnis zu verbinden.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Konfigurieren Sie einen Superuser

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl gegen die Produktionsdatenbank aufrufen (dies ist dieselbe Operation, die wir lokal in [Django Tutorial Teil 4: Django Admin Site > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht in der [Procfile](#procfile) hinzufügen, weil er interaktiv ist.

Was wir tun können, ist, diesen Befehl lokal auf unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal mit denselben Umgebungsvariablen wie auf dem Produktionsserver, einschließlich der Datenbankverbindungszeichenfolge, auszuführen.

Öffnen Sie zuerst ein Terminal oder Command Prompt in einem Git-Klon Ihres locallibrary-Projekts.
Melden Sie sich dann mit dem `login` oder `login --browserless` Befehl bei Ihrem Browserkonto an (folgen Sie allen resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem verbundenen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie gegebenenfalls ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Führen Sie dann den folgenden Befehl aus, geben Sie Namen, E-Mail und Passwort ein, wie erforderlich:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, Ihren Website-Admin-Bereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, genau wie im [Django Tutorial Teil 4: Django Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Einstellen von Konfigurationsvariablen

Der letzte Schritt ist, die Site sicher zu machen.
Insbesondere müssen wir Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde im Abschnitt [Bereitmachen Ihrer Website für die Veröffentlichung](#ihre_website_veröffentlichungsbereit_machen) (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`) erledigt.

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variables_.
Diese sollte bereits die `DATABASE_URL` haben, wie unten gezeigt.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren.
Ein einfacher Weg besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **New Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann wählen Sie **Add**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Das endgültige Set von Variablen sollte so aussehen:

![Railway-Bildschirm, der alle Projektvariablen zeigt](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den logs-Befehl an, um das Ende der Protokolle anzuzeigen (ein ausführlicheres Protokoll ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen haben müssen, als dies bereitstellen kann, müssen Sie sich in die [Django-Protokollierung](https://docs.djangoproject.com/en/5.0/topics/logging/) vertiefen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion sowie der Serie von Tutorials zum Arbeiten mit Django. Wir hoffen, Sie fanden sie nützlich. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/django-locallibrary-tutorial) einsehen.

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django docs)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django docs)
  - [Bereitstellen statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django docs)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django docs)
  - [So verwenden Sie Django mit Apache und mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django docs)
  - [So verwenden Sie Django mit Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django docs)

- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- DigitalOcean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Weitere DigitalOcean-Django-Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)

  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Einstieg mit Heroku und Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Concurrency und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Bereitstellen von Python- und Django-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
