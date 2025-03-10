---
title: "Django-Tutorial Teil 11: Django in der Produktion bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliotheksmitarbeitern und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zum Bereitstellen Ihrer Website finden können und was Sie tun müssen, um Ihre Website für die Produktion bereitzumachen.

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
      <td>Lernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertiggestellt ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk zu übertragen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debugging- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App auswählen.
- Eine Umgebung zum Hosten von statischen Dateien auswählen.
- Eine Infrastruktur auf Produktionsniveau zum Servieren Ihrer Website einrichten.

Dieses Tutorial bietet einige Orientierungshilfen zu Ihren Optionen für die Auswahl eines Hosting-Sites, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Django-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website ausgeführt wird.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf denen Ihre Website basiert.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse-Proxy, einen Lastverteiler usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (CPU, RAM, Speicherplatz usw.) und Internet-Konnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer- und Netzwerkinfrastruktur wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zum Vorinstallieren eines bestimmten Betriebssystems, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen die Auswahl umfassenderer Umgebungen, die möglicherweise eine vollständige Django- und Webserver-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen ungewohnten Server (oder andere Komponenten) beschränken und auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, eine Idee haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS)-Angebots. Bei dieser Art des Hostings müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Lastverteiler) kümmern, da die Host-Plattform diese für Sie übernimmt - zusammen mit den meisten Dingen, die Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS bevorzugen, während andere die reduzierte Wartungsbelastung und einfachere Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy und so weiter bereitstellen. (Das ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie entweder Django aktiv unterstützen oder gut mit ihm zusammenarbeiten, einschließlich: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) — um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Level an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Dinge, die bei der Auswahl eines Hosts zu beachten sind:

- Wie ausgelastet Ihre Website wahrscheinlich sein wird und die Kosten für Daten- und Rechenressourcen, die benötigt werden, um diese Nachfrage zu decken.
- Unterstützungsgrad für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und daher, wo der Zugang wahrscheinlich am schnellsten ist.
- Historische Verfügbarkeits- und Ausfallzeiten des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website – sind sie einfach zu benutzen und sind sie sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder bieten nur eine kleine Menge Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die von Ihnen genutzte "kostenlose" Stufe mit der Zeit abläuft und ob die Kosten für den Übergang zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es durchaus einige Seiten gibt, die "kostenlose" Computerumgebungen bereitstellen, die zur Bewertung und zum Testen vorgesehen sind.
Dies sind in der Regel recht ressourcenbeschränkte/-begrenzte Umgebungen, und Sie müssen wissen, dass sie nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihre Website beschäftigter wird.
Beliebte Entscheidungen in dieser Kategorie umfassen [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Levels an Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Anbieter, die eine relativ preisgünstige Basis-Computing-Stufe haben (im Bereich von 5 bis 10 US-Dollar pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website bereit für die Veröffentlichung machen

Das mit _django-admin_ und _manage.py_ erstellte [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) ist so konfiguriert, dass die Entwicklung einfacher wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten entweder aus Sicherheits- oder Leistungsgründen für die Produktion anders sein.

> [!NOTE]
> Es ist üblich, eine separate **settings.py**-Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt sein, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dies sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dadurch wird verhindert, dass sensible/vertrauliche Debugging- und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode gespeichert oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente schlagen vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer serverseitigen Datei gelesen werden sollten.
Lassen Sie uns die _LocalLibrary_-Anwendung so ändern, dass wir unsere `SECRET_KEY`- und `DEBUG`-Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, andernfalls auf in einer **.env**-Datei im Root-Verzeichnis definierte Werte zurückzugreifen und zuletzt die in der Konfigurationsdatei definierten Standardwerte zu verwenden.
Diese Methode ist sehr flexibel, da sie jede vom Hosting-Server unterstützte Konfiguration erlaubt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und zur Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt`-Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR`, aber vor der Sicherheitshinweis-Meldung `# SECURITY WARNING: keep the secret key used in production secret!` ein:

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env`-Datei aus dem Root der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht in GitHub speichern und sollten `.env` zu Ihrer `.gitignore`-Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY`-Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, daher wird der Standardwert verwendet (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn nicht in der Produktion verwenden werden).

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

Der Wert des `DEBUG` wird standardmäßig `True` sein, aber wird nur `False`, wenn die Umgebungsvariable `DJANGO_DEBUG` auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env**-Datei eingestellt ist.
Bitte beachten Sie, dass Umgebungsvariablen Strings und keine Python-Typen sind. Wir müssen daher Strings vergleichen. Der einzige Weg, die `DEBUG`-Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf den String `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Prüfliste der Einstellungen, die Sie möglicherweise ändern möchten, finden Sie im [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Reihe dieser Einstellungen im Terminal mit dem unten stehenden Befehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python-HTTP-Server, der häufig verwendet wird, um Django-WSGI-Anwendungen bereitzustellen.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Vergewissern Sie sich zuerst, dass Sie sich in der Python-Virtual-Environment befinden, die bei der [Einrichtung der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie für die Entwicklung verwenden, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es auf einigen beliebten Hosting-Diensten, wie Heroku, nicht verwendet werden, weil diese keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Obwohl uns das für das/die Beispiel/e zur Bereitstellung nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in einem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliotheksanwendung über eine Adresse abgerufen wird, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Dienst verwenden, den Sie mögen.

Die Datenbankverbindungsinformationen werden Django über eine Umgebungsvariable namens `DATABASE_URL` zur Verfügung gestellt.
Anstatt diese Informationen direkt in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL`-Umgebungsvariable zu parsen und automatisch in Django's gewünschtem Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariablen zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden müssen:

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

Django verwendet jetzt die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; ansonsten verwendet es die standardmäßige SQLite-Datenbank.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was wesentlich effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway wird, die auf dem Remote-Server eingerichtet werden müssen:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig während der Entwicklung die SQLite-Datenbank verwenden wird, sofern `DATABASE_URL` nicht gesetzt ist.
Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank sowohl für Entwicklung als auch Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway erleichtert es, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbst gehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Web-Server, um sowohl unsere dynamischen HTML-Dateien als auch unsere statischen Dateien (CSS, JavaScript usw.) bereitzustellen.
Dies ist ineffizient für statische Dateien, da die Anfragen durch Django passieren müssen, auch wenn Django nichts damit macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir typischerweise die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt vom Webserver oder über ein Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, zum Beispiel über ein CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Django's _collectstatic_-Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Sobald gesammelt, können diese dann als Gruppe dorthin hochgeladen werden, wo die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dieses listet zusätzliche Verzeichnisse auf, die von Django's _collectstatic_-Tool auf statische Dateien durchsucht werden sollen.

Django-Vorlagen beziehen sich auf statische Dateistandorte relativ zu einem `static`-Tag (Sie können dies in der Basistemplate definieren, die in [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist)), das wiederum auf die `STATIC_URL`-Einstellung verweist.
Statische Dateien können daher auf jeden Host hochgeladen und Ihre Anwendung aktualisiert werden, um sie über diese Einstellung zu finden.

Das _collectstatic_-Tool wird verwendet, um statische Dateien in das im `STATIC_ROOT`-Projekteinstellung definierte Verzeichnis zu kopieren.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Anwendung hochgeladen wird, um alle statischen Dateien in der Anwendung in den in `STATIC_ROOT` angegebenen Standort zu kopieren.
`Whitenoise` findet dann die Dateien aus dem standardmäßig definierten Speicherort `STATIC_ROOT` und stellt sie unter der in `STATIC_URL` definierten Basis-URL bereit.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (der `STATIC_URL` ist möglicherweise bereits innerhalb der Datei beim Erstellen definiert worden.
Obwohl es keinen Schaden anrichtet, können Sie auch den doppelten vorigen Verweis löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Dateiservieren eigentlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion zu servieren (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden zum direkten Servieren von statischen Assets aus Gunicorn in der Produktion.

Sehen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode zum Servieren dieser Dateien ist.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier gegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und unten wiedergegeben):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE`-Einstellung und fügen Sie die `WhiteNoiseMiddleware` nahe der Spitze der Liste, direkt unterhalb der `SecurityMiddleware` hinzu:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie bereitgestellt werden (dies ist effizienter).
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

Sie müssen nichts anderes konfigurieren, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositories gespeichert werden.
Viele Hosting-Dienste werden automatisch Abhängigkeiten in dieser Datei installieren (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ auf der Befehlszeile erstellen (führen Sie das folgende im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle verschiedenen oben genannten Abhängigkeiten installiert haben, sollte Ihre **requirements.txt**-Datei _mindestens_ diese Elemente aufführen (obwohl die Versionsnummern unterschiedlich sein können).
Bitte löschen Sie alle anderen Abhängigkeiten, die nicht aufgelistet sind, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Versionierungskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und die iterative Entwicklung viel einfacher machen.

Sie sollten schon GitHub verwenden, um den lokalen Bibliotheksquellcode zu speichern (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung).

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "vanilla" Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, andere möglicherweise nicht.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen auf dem `main` -Zweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Wir entscheiden uns aus mehreren Gründen, PythonAnywhere zu verwenden:

- PythonAnywhere hat einen [kostenlosen Anfänger-Plan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass es für alle Entwickler erschwinglich ist, ist MDN sehr wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet und wurde migriert, als die vorher kostenlosen Pläne eingestellt wurden.
  > Wir haben PythonAnywhere gewählt, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel auch behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Features wie die Integration mit einer Postgres-Datenbank zu demonstrieren, die auf einem anderen Dienst läuft.

- PythonAnywhere kümmert sich um die Infrastruktur, damit Sie das nicht müssen.
  Sich nicht um Server, Lastverteiler, Reverse-Proxies und so weiter kümmern zu müssen, macht es viel einfacher, anzufangen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Plan-Einschränkungen beeinträchtigen nicht besonders unsere Nutzung von PythonAnywhere für das Tutorial.
  Zum Beispiel:

  - Der Anfänger-Plan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkten ausgehenden Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz, damit unsere Basis-Website laufen kann!
  - Benutzerdefinierte Domains werden zum Zeitpunkt der Erstellung nicht unterstützt.
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird. Das bedeutet, dass sie langsam neu gestartet werden kann.
    Sie können sie dauerhaft ausführen, müssen die Website jedoch alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir nur die standardmäßige Django SQLite-Datenbank.

PythonAnywhere ist geeignet, um diese Demonstration zu hosten, und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten sich die Zeit nehmen zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und anderweitig Arbeiten mit Ihrer Anwendung.

Über die Oberfläche können Sie ein Bash-Konsolenfenster zu einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration verwenden wir die Konsole, um unser lokales Bibliothek-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Dienst für unsere Datenbank verwenden könnten, verwenden wir die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole gesetzt werden.

Das ist alles, was Sie brauchen, um loszulegen.

### Holen Sie sich ein PythonAnywhere-Konto

Um mit PythonAnywhere zu starten, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur PythonAnywhere [Pläne und Preise](https://www.pythonanywhere.com/pricing/) Seite und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die Allgemeinen Geschäftsbedingungen und wählen Sie dann **Register**.
- Sie werden dann eingeloggt und zum PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Bibliothek von GitHub installieren

Als nächstes öffnen wir ein Bash-Fenster, richten eine virtuelle Umgebung ein und holen den lokalen Bibliotheksquellcode von GitHub.
Wir werden auch die Standarddatenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bildschirm Konsolenverwaltung, indem Sie **Consoles** in der oberen Anwendungsleiste auswählen.
2. Wählen Sie dann den **Bash**-Link, um eine neue Konsole zu erstellen und zu starten:

   ![Bild vom PythonAnywhere Konsolenverwaltung-Bildschirm](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole gespeichert wird, damit Sie sie später wieder nutzen können, zusammen mit ihrem gesamten Verlauf.
   Der grüne Pfeil oben zeigt an, dass dieses Konto eine Konsole hat, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" zur Installation der lokalen Bibliotheksabhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess wie in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt.
   Wir hätten die Umgebung beliebig nennen können, und wir können sie mit den unten stehenden Befehlen deaktivieren und reaktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einem Ordner installieren, der nach Ihrer Website-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihr Konto nur `<your_pythonanywhere_username>.pythonanywhere.com` nennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" lautet, müssen Sie den lokalen Bibliotheksquellcode in einen Ordner namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzernamen-Werte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der `requirements.txt`-Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genau wie während der Entwicklung).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellen_und_verbinden_einer_postgres_sql-datenbank) und sie verbinden, indem die `DATABASE_URL` Umgebungsvariable gesetzt wird.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank zu verwenden ist, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, an dem sie [in Produktion bereitgestellt werden](#statische_dateien_in_der_produktion_bereitstellen):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Website zuzugreifen (wie im Abschnitt [Django Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie sie benötigen, um Ihre Website zu testen.

### Einrichtung der Web-App

Nachdem wir die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie sie gefunden und als Web-App verwendet werden können.

1. Navigieren Sie zum _Web_-Abschnitt der Website und wählen Sie den Link **Add a new web app**:

   ![PythonAnywhere "Web"-Bereich mit Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Create new web app_ Assistent öffnet sich dann, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Next**, um die Konfiguration des Domänennamens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domäne basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zum Festlegen des Domänennamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Select a Python Web framework_ **Manual configuration**.

   ![PythonAnywhere-Aufforderung zur Auswahl des Web-Frameworks für die Anwendung](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Dies spielt jetzt zwar keine Rolle, aber es würde, wenn wir mehrere Sites hosten würden, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Select a Python version_ **3.10**

   ![PythonAnywhere-Aufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Version von Python wählen, die von der von Ihnen verwendeten Django-Version unterstützt wird.

5. Wählen Sie im Bildschirm _Manual configuration_ **Next** (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Aufforderung, die nächsten Konfigurationsoptionen zu erklären](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Bereich wie gezeigt angezeigt.
   Der Bildschirm verfügt über eine **Reload**-Schaltfläche, mit der Sie die Web-Anwendung neu laden können, nachdem Sie weitere Änderungen vorgenommen haben.
   Wie auf dem Bildschirm vermerkt, müssen Sie die Schaltfläche **Run until 3 months from today** drücken, um die Website für weitere drei Monate (und darüber hinaus) am Leben zu halten.

   ![PythonAnywhere Konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie herunter zum Bereich "Code" der _Web_-Registerkarte und wählen Sie den Link zur WSGI-Konfigurationsdatei aus.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die **Save**-Schaltfläche.

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
   PythonAnywhere erwartet, dass sich diese Datei an diesem Speicherort befindet, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie herunter zum Bereich "Virtualenv" der _Web_-Registerkarte.
   Wählen Sie den Link **Enter the path to a virtual env, if desired** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie es "env_local_library" genannt haben, wie vorgeschlagen, wird der Pfad sein: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual env Abschnitt der Web-Registerkarte](python_anywhere_web_virtualenv.png)

8. Scrollen Sie herunter zum Abschnitt "Static files" der _Web_-Registerkarte.

   ![PythonAnywhere Static files Abschnitt der Web-Registerkarte](python_anywhere_web_static_files.png)

   Wählen Sie den **Enter URL**-Link aus und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Standort wider, an den die Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben auf der _Web_-Registerkarte die **Reload**-Schaltfläche, um die Site neu zu laden.
   Wählen Sie dann den Link zur Site-URL, um die Live-Site zu starten:

![PythonAnywhere Web-Bildschirm mit hervorgehobenem Link zur Website-Startseite](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubte Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit vollständiger Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debugging-Informationen ist sehr nützlich, wenn Sie gerade eingerichtet werden, aber ist ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Level des Loggings auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel einstellen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und stellen Sie sie auf Ihr GitHub-Repo zurück.

Sie müssen dann die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Fenster im Ordner `<user_name>.pythonanywhere.com`, und Sie haben die Änderungen auf den Hauptzweig gedrückt, dann könnten Sie sie im Bash-Fenster mit dem folgenden Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie die **Restart**-Schaltfläche in der `Web`-Registerkarte, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site neu laden, sollte sie sich jetzt öffnen und die Homepage der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Zugangsdaten einloggen können und Autoren, Genres, Bücher und so weiter erstellen, genau wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Bereitstellen Ihrer Website für die Veröffentlichung](#ihre_website_bereit_für_die_veröffentlichung_machen) haben wir die Anwendung so geändert, dass sie in der Produktion unter Verwendung von Umgebungsvariablen oder Variablen in einer **.env**-Datei konfiguriert werden kann.

Konkreter haben wir die Bibliothek so eingerichtet, dass Sie setzen können:

- `DJANGO_DEBUG=False`, um die dem Benutzer gezeigten Debug-Tracing im Fehlerfall zu reduzieren.
- `DJANGO_SECRET_KEY` auf einen geheimen Wert in der Produktion.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (wir tun dies in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen gesetzt werden, hängt vom Hosting-Dienst ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungdatei lesen.
Wir sind bereits dafür eingerichtet, sodass wir nur die Datei erstellen müssen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Fenster.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüssel-Wert-Paare in die `.env`-Datei schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` in der Bash-Konsole auf `False` zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob die Operation funktioniert hat, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel erstellen Sie ein Genre und erhöhen dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Nachricht anstelle eines detaillierten Debugging-Traces.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat kein vollständig kostenloses Starter-Paket mehr.
> Wir haben diese Anweisungen behalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie dies nicht müssen.
  Sich nicht um Server, Lastverteiler, Reverse-Proxies und so weiter kümmern zu müssen, macht es viel einfacher, anzufangen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für die Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und die Abhängigkeiten einzurichten und verstehen, wie sie gestartet wird.
Für Django-Apps geben wir diese Informationen in einer Reihe von Textdateien an:

- **runtime.txt**: gibt die Programmiersprache und die Version an, die verwendet werden soll.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site benötigt werden, einschließlich Django.
- **Procfile**: Eine Liste der Prozesse, die zum Starten der Webanwendung ausgeführt werden sollen.
  Für Django wird dies normalerweise der Gunicorn-Webanwendungsserver (mit einem `.wsgi`-Skript) sein.
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich mithilfe von Informationen in [Umgebungsvariablen](https://docs.railway.com/guides/variables) konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe der Variablen `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann entweder von Railway oder von einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von dem lokalen Zweig auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und auszulesen und vieles mehr.
Ein besonders nützliches Feature ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django-Webanwendung in ein Git-Repository einfügen, die oben genannten Dateien hinzufügen, eine Integration mit einem Datenbank-Add-on vornehmen und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu behandeln.
Sobald wir all das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles an Überblick, den Sie benötigen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie vornehmen müssen, damit unsere _LocalLibrary_-Anwendung auf Railway funktioniert.
Wir müssen wirklich nur eine `Procfile` und eine `runtime.txt` Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern, die bereits gelernten lokalen Tests und Workflows zu verwenden.

#### Procfile

Eine _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Seite zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Der `web:` Präfix sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate`, um die Datenbanktabellen einzurichten.
Als nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien im durch das `STATIC_ROOT`-Projekt definierte Verzeichnis zu sammeln (siehe Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Schließlich starten wir den _gunicorn_ Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungs-Skelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits eingerichtet haben, um _gunicorn_ einzuschließen und statische Dateien zu unterstützen!

Sie können die Procfile auch verwenden, um Worker-Prozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Bereitstellung abgeschlossen ist.

#### Runtime

Die **runtime.txt** Datei, wenn definiert, sagt Railway, welche Version von Python verwendet werden soll.
Erstellen Sie die Datei im Repository-Root und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Runtime-Minor-Version.
> Sie werden in der Regel die nächstgelegene unterstützte Version zu dem von Ihnen angegebenen Wert verwenden.

#### Erneut testen und Änderungen auf GitHub speichern

Bevor Sie fortfahren, testen Sie die Website erneut lokal und stellen Sie sicher, dass sie nicht durch irgendeine der oben genannten Änderungen gebrochen wurde.
Führen Sie den Entwicklungs-Webserver wie gewohnt aus und überprüfen Sie dann, ob die Website in Ihrem Browser noch funktioniert, wie Sie es erwarten.

```bash
python3 manage.py runserver
```

Lassen Sie uns als Nächstes die Änderungen auf GitHub verschieben.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und verbinden Sie dann die PR auf GitHub.

Wir sollten jetzt bereit sein, das LocalLibrary auf Railway bereitzustellen.

### Ein Railway-Konto erhalten

Um mit Railway zu starten, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Möglicherweise müssen Sie dann in Ihr E-Mail-Postfach gehen und Ihr Konto bestätigen.
- Sie werden dann in das Railway.com Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Website aus und dann die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer auf Ihrem GitHub-Konto erstellten Vorlage bereitzustellen und eine Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm zeigt einen Dialog zur Auswahl eines vorhandenen GitHub-Repositorys oder zur Auswahl eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** drücken.

![Bestätigungsbildschirm - Auswahl bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte "Deployments" an.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert jedoch noch nicht, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS einstellen

Wenn die Site geöffnet wird, sehen Sie zu diesem Zeitpunkt einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubte Host" ausgeführt wird.

![Eine detaillierte Fehlerseite mit vollständiger Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debugging-Informationen ist sehr nützlich, wenn Sie gerade eingerichtet werden, aber ist ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Wir zeigen Ihnen, wie Sie es deaktivieren, wenn die Site in Betrieb ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel einstellen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die untenstehende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern und committen Sie dann Ihre Einstellungen in Ihrem GitHub-Repo (Railway aktualisiert und stellt Ihre Anwendung automatisch neu bereit).

### Bereitstellen und Verbinden einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Seite jetzt öffnen, erhalten Sie einen neuen Fehler, da auf die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank auch in ihrem eigenen separaten Projekt erstellen könnten.

Wählen Sie auf Railway oben im Menü der Site die Option **Dashboard** und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Mit der **Settings**-Schaltfläche können projektweite Einstellungen geändert werden.
Wählen Sie die **New**-Schaltfläche, mit der Dienste zum Projekt hinzugefügt werden können.

![Railway-Projekt mit hervorgehobener neuer Dienstschaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie aufgefordert werden, welche Art von Dienst hinzugefügt werden soll:

![Railway-Projekt - Wählen Sie eine Datenbank als neuen Dienst aus](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt - Wählen Sie PostgreSQL als neuen Diensttyp aus](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun beide, die Anwendungs- und Datenbankdienste, in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Postgresdatenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variables_.
Wählen Sie **New Variable** und dann im _Variable name_ Feld **Add reference**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir die LocalLibrary als Umgebungsvariable einrichten ließen).

![Railway-Website-Bildschirm, der eine Auswahl einer DATABASE_URL zeigt](railway_postgresql_connect.png)

Wählen Sie dann **Add**, um den Variablenverweis hinzuzufügen, und schließlich **Deploy** (dies erscheint in einem Popup).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann ihre Variablenregisterkarte und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keinen Weg gibt, die Bibliothek mit Daten zu befüllen, da wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem Railway [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer erledigen.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier folgen](https://docs.railway.com/guides/cli).

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Zu den wichtigeren Operationen gehören das Bereitstellen des aktuellen Verzeichnisses Ihres Computers bei einem zugeordneten Railway-Projekt (ohne es auf GitHub hochladen zu müssen) sowie das Ausführen Ihres Django-Projekts lokal mit denselben Einstellungen wie auf dem Produktionsserver.
Wir zeigen diese in den folgenden Abschnitten.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie folgendes im Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verknüpfen.

### Einen Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist derselbe Vorgang, den wir lokal in [Django Tutorial Teil 4: Django Admin Site > Erstellen eines Superusers](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) ausgeführt haben).
Railway bietet keinen direkten Terminal-Zugriff auf den Server und wir können diesen Befehl nicht in die [Procfile](#procfile) einfügen, da er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal auf unserem Django-Projekt aufzurufen, wenn es mit der _Produktions_-Datenbank verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bietet, um lokale Befehle mit denselben Umgebungsvariablen wie auf dem Produktionsserver auszuführen, einschließlich der Datenbankverbindungszeichenfolge.

Öffnen Sie zuerst ein Terminal- oder Eingabeaufforderungsfenster in einem Git-Klon Ihres LocalLibrary-Projekts.
Melden Sie sich dann bei Ihrem Browserkonto mit dem Befehl `login` oder `login --browserless` an (folgen Sie den daraus resultierenden Eingabeaufforderungen und Anweisungen des Clients oder der Website, um die Anmeldung abzuschließen):

```bash
railway login
```

Sobald Sie angemeldet sind, verknüpfen Sie Ihr aktuelles LocalLibrary-Verzeichnis mit dem zugehörigen Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie bei der Aufforderung ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Nun, da das lokale Verzeichnis und das Projekt _verknüpft_ sind, können Sie das lokale Django-Projekt mit Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zuerst sicher, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Geben Sie dann den folgenden Befehl ein, wobei Name, E-Mail und Passwort wie erforderlich eingegeben werden:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, den Admin-Bereich Ihrer Website zu öffnen (`https://[your-url].railway.app/admin/`) und die Datenbank zu befüllen, genau wie in [Django Tutorial Teil 4: Django Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Konfigurationsvariablen einstellen

Der letzte Schritt besteht darin, die Site sicherer zu machen.
Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen zu lesen, wurde in [Ihre Website bereit machen für die Veröffentlichung](#ihre_website_bereit_für_die_veröffentlichung_machen) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Infobildschirm für das Projekt und wählen Sie die Registerkarte _Variables_.
Diese sollte bereits die `DATABASE_URL` wie unten gezeigt haben.

![Railway - neuen Variablenbildschirm hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Eine einfache Möglichkeit besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die **New Variable**-Schaltfläche aus und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (und wählen Sie dann **Add** aus).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der abschließende Satz von Variablen sollte wie folgt aussehen:

![Railway-Bildschirm zeigt alle Projektvariablen](railway_variables_all.png)

### Debugging

Der Railway-Client bietet den Befehl `logs`, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, als dies bieten kann, müssen Sie beginnen, sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) zu befassen.

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Django-Apps in der Produktion und auch die Reihe von Tutorials zur Arbeit mit Django. Wir hoffen, dass sie Ihnen nützlich waren. Sie können eine vollständig ausgearbeitete Version des [Quellcodes auf GitHub hier] ansehen(https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Statische Dateien bereitstellen](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django Community-Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Setup-Konzepte)

  - [Konfiguration von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellung von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
