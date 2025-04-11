---
title: "Django-Tutorial Teil 11: Bereitstellen von Django in der Produktion"
short-title: "11: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder sie über das Internet aufrufen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Hoster finden können, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Django-Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliches Testen), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungs-Webserver verwendet, um Ihre Site im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debug-Informationen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung für das Hosting der Django-App wählen.
- Eine Umgebung für das Hosting statischer Dateien wählen.
- Eine Infrastruktur auf Produktionsniveau für das Servieren Ihrer Website einrichten.

Dieses Tutorial gibt einige Hinweise zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Django-App produktionsbereit zu machen, und ein Arbeitsbeispiel, wie man die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Laufzeit der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, auf die Ihre Website angewiesen ist.

> [!NOTE]
> Je nachdem, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, Load Balancer usw. haben.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über ein schnelles Kabel mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem Remote-Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Niveau an Computerressourcen (CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, umfassendere Umgebungen auszuwählen, die möglicherweise ein vollständiges Django- und Web-Server-Setup umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen könnten Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des OS basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Idee, wo Sie anfangen sollten!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich keine Sorgen um den größten Teil Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) machen, da die Hosting-Plattform diese für Sie erledigt – zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung ganz einfach, weil Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die gesamte andere Server-Infrastruktur.

Einige Entwickler werden sich für die erhöhte Flexibilität entscheiden, die IaaS gegenüber PaaS bietet, während andere die reduzierte Wartungsbelastung und einfachere Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website in einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Python/Django-freundlichen Hosting-Anbieter entscheiden, sollten diese Anweisungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsservern, Reverse Proxies usw. bereitstellen (dies ist nicht relevant, wenn Sie sich für ein PaaS entscheiden). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit Django arbeiten, einschließlich: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen.
Diese Anbieter bieten unterschiedliche Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

Einige der Überlegungen bei der Auswahl eines Hosts:

- Wie stark Ihr Website-Verkehr voraussichtlich sein wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Niveau der Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und wo der Zugriff daher voraussichtlich am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit der Anbieter.
- Bereitgestellte Tools zur Verwaltung der Site – sind sie leicht zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von Stunden "Live-Zeit" oder nur eine geringe Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser gewesen wären, einen anderen Dienst zu nutzen!

Die gute Nachricht ist, dass es eine ganze Reihe von Sites gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluation und Tests bestimmt sind, wenn Sie gerade erst anfangen.
Dies sind in der Regel recht ressourcenbeschränkte/limitierte Umgebungen, und Sie sollten sich bewusst sein, dass sie möglicherweise nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben.
Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Verkehr in einer gehosteten Umgebung und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihre Website stärker frequentiert wird.
In diese Kategorie fallen beliebte Optionen wie [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis"-Ebene an, die für kleine Produktionsseiten gedacht ist und ein nützlicheres Niveau an Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website für die Veröffentlichung vorbereiten

Die [Django Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), die mit den _django-admin_ und _manage.py_ Tools erstellt wurde, ist so konfiguriert, dass die Entwicklung vereinfacht wird. Viele der Django-Projekteinstellungen (festgelegt in **settings.py**) sollten für die Produktion unterschiedlich sein, entweder aus Sicherheits- oder aus Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariablen zu importieren. Diese Datei sollte dann geschützt werden, selbst wenn der Rest des Quellcodes in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. Dieser sollte in der Produktion auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass sensible/vertrauenswürdige Debug-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer zufälliger Wert, der zum Schutz vor CSRF usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht in der Quellcodeverwaltung oder außerhalb des Produktionsservers zugänglich ist.

Die Dokumentation von Django schlägt vor, dass geheime Informationen am besten aus einer Umgebungsvariablen geladen oder aus einer nur für den Server zugänglichen Datei gelesen werden.
Lassen Sie uns die _LocalLibrary_ Anwendung so ändern, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, wenn sie definiert sind, und auf Werte zurückgreifen, die in einer **.env** Datei im Stammverzeichnis definiert sind, und schließlich auf die Verwendung der Standardwerte in der Konfigurationsdatei zurückgreifen.
Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration erlaubt.

Zum Lesen von Umgebungswerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zum Lesen von Schlüssel-Wert-Paaren aus einer Datei und ihrer Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie folgenden Code ein, nachdem `BASE_DIR` definiert wurde, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```python
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Stammverzeichnis der Webanwendung.
Variablen, die als `KEY=VALUE` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, falls definiert.

> [!NOTE]
> Alle Werte, die Sie zu **.env** hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen sie nicht auf GitHub speichern, und Sie sollten `.env` zu Ihrer `.gitignore` Datei hinzufügen, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als nächstes die ursprüngliche `SECRET_KEY` Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird für den Schlüssel keine Umgebungsvariable angegeben, sodass der Standardwert verwendet wird (es spielt keine Rolle, welcher Schlüssel hier verwendet wird oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie dann die vorhandene `DEBUG`-Einstellung aus und fügen Sie die nachfolgende Zeile hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert für `DEBUG` ist standardmäßig `True`, wird jedoch nur `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt ist oder `DJANGO_DEBUG=False` in der **.env** Datei eingestellt ist.
Bitte beachten Sie, dass es sich bei Umgebungsvariablen um Zeichenketten und nicht um Python-Typen handelt. Daher müssen wir Zeichenketten vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, besteht darin, sie tatsächlich auf die Zeichenkette `False` zu setzen.

Sie können die Umgebungsvariable unter Linux auf "False" setzen, indem Sie den folgenden Befehl ausgeben:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, ist im [Bereitstellung Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation) bereitgestellt. Sie können auch eine Liste von einigen davon mit dem folgenden Terminalbefehl anzeigen:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein in Python geschriebener HTTP-Server, der häufig zum Servieren von Django WSGI-Anwendungen verwendet wird.

Während wir _Gunicorn_ nicht benötigen, um unsere LocalLibrary-Anwendung während der Entwicklung zu bedienen, werden wir es lokal installieren, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Stellen Sie zunächst sicher, dass Sie sich in der Python-Virtual-Umgebung befinden, die bei der [Einrichtung der Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) erstellt wurde (verwenden Sie den Befehl `workon [name-of-virtual-environment]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die Standard-Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine vernünftige Wahl für kleine bis mittelgroße Websites.
Leider kann es auf einigen beliebten Hosting-Diensten wie Heroku nicht verwendet werden, da sie keinen persistenten Datenspeicher in der Anwendungsumgebung bereitstellen (eine Anforderung von SQLite).
Obwohl das uns für das Beispiel/die Bereitstellung/en möglicherweise nicht betrifft, zeigen wir Ihnen einen anderen Ansatz, der auf Railway, Heroku und einigen anderen Diensten funktioniert.

Der Ansatz besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und auf die über eine Adresse zugegriffen wird, die als Umgebungsvariable von der Django-Bibliotheksanwendung bereitgestellt wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die auch auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hosting-Dienst nach Belieben verwenden.

Die Verbindungsinformationen zur Datenbank werden Django über eine Umgebungsvariable namens `DATABASE_URL` übermittelt.
Anstatt diese Informationen direkt in Django zu codieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL` Umgebungsvariable zu analysieren und sie automatisch in das von Django gewünschte Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu interagieren.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, die auf dem Bereitstellungsserver eingerichtet werden:

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

Django verwendet nun die Datenbankkonfiguration in `DATABASE_URL`, wenn die Umgebungsvariable gesetzt ist; andernfalls wird die standardmäßige SQLite-Datenbank verwendet.
Der Wert `conn_max_age=500` macht die Verbindung persistent, was viel effizienter ist als das Erstellen der Verbindung bei jedem Anforderungszyklus (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, um Railway auf dem Remote-Server einzurichten:

```bash
pip3 install psycopg2-binary
```

Bitte beachten Sie, dass die Django Standardmäßig die SQLite-Datenbank während der Entwicklung verwendet, es sei denn, `DATABASE_URL` ist eingestellt.
Sie können vollständig auf Postgres umsteigen und dieselbe gehostete Datenbank für Entwicklung und Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung festlegen (Railway macht es einfach, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Statische Dateien in der Produktion bereitstellen

Während der Entwicklung verwenden wir Django und den Django-Entwicklungs-Webserver, um sowohl unsere dynamischen HTML- als auch statischen Dateien (CSS, JavaScript usw.) zu bedienen.
Dies ist ineffizient für statische Dateien, da die Anfragen durch Django geleitet werden müssen, auch wenn Django nichts mit ihnen macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Leistungsprobleme, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung trennen wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, sie direkt über den Webserver oder über ein Content Delivery Network (CDN) bereitzustellen.

Die wichtigsten Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem aus statische Dateien bereitgestellt werden, z.B. auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in das Djangos _collectstatic_ Tool alle statischen Dateien sammelt, die in unseren Vorlagen referenziert werden. Nach dem Sammeln können diese dann als Gruppe auf den gewünschten Hosting-Ort hochgeladen werden.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_ Werkzeug auf statische Dateien durchsuchen sollte.

Django-Vorlagen verweisen auf statische Dateipfade relativ zu einem `static` Tag (Sie können dies in der Basisvorlage sehen, die in [Django Tutorial Part 5: Creating our home page](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#the_locallibrary_base_template) definiert wurde), welches wiederum der `STATIC_URL` Einstellung zugeordnet ist.
Statische Dateien können daher an jedem Hoster hochgeladen werden und Sie können Ihre App aktualisieren, um sie mithilfe dieser Einstellung zu finden.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in den Ordner zu sammeln, der durch die `STATIC_ROOT` Projekteinstellung definiert ist.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ ausgeführt werden, bevor die Applikation hochgeladen wird, und alle statischen Dateien in der Applikation an dem in `STATIC_ROOT` definierten Ort kopieren.
`Whitenoise` findet dann die Dateien vom standardmäßig definierten Ort durch `STATIC_ROOT` und bedient sie an der Base-URL, die durch `STATIC_URL` definiert ist.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert worden sein (das `STATIC_URL` könnte bereits innerhalb der Datei beim Erstellen definiert worden sein.
Obwohl es keinen Schaden anrichtet, könnten Sie ebenso die frühere Referenz löschen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Tatsächlich werden wir die Dateibereitstellung mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion zu servieren (wir haben die zugehörigen Django-Einstellungen in den vorhergehenden Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Assets direkt von Gunicorn in der Produktion zu bedienen.

Schauen Sie sich die [WhiteNoise](https://pypi.org/project/whitenoise/) Dokumentation an, um eine Erklärung darüber zu erhalten, wie es funktioniert und warum diese Implementierung eine relativ effiziente Methode ist, um diese Dateien zu bedienen.

Die Schritte zum Einrichten von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier angegeben](https://whitenoise.readthedocs.io/en/stable/django.html) (und nachfolgend reproduziert):

#### Whitenoise installieren

Installieren Sie Whitenoise lokal mit folgendem Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihrer Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, suchen Sie die `MIDDLEWARE` Einstellung und fügen Sie das `WhiteNoiseMiddleware` an die Spitze der Liste ein, direkt unterhalb des `SecurityMiddleware`:

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

Optional können Sie die Größe der statischen Dateien reduzieren, wenn sie serviert werden (es ist effizienter).
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

Sie müssen nichts anderes konfigurieren für _WhiteNoise_, da es Ihre Projekt-Einstellungen für `STATIC_ROOT` und `STATIC_URL` standardmäßig verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Web-Anwendung sollten in einer Datei **requirements.txt** im Stammverzeichnis Ihres Repositories gespeichert sein.
Viele Hosting-Dienste werden automatisch Abhängigkeiten in dieser Datei installieren (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei erstellen, indem Sie _pip_ in der Befehlszeile verwenden (führen Sie den folgenden Befehl im Repo-Stamm aus):

```bash
pip3 freeze > requirements.txt
```

Nach der Installation aller der oben aufgeführten Abhängigkeiten, sollte Ihre **requirements.txt** Datei _mindestens_ diese Elemente auflisten (obwohl die Versionsnummern unterschiedlich sein könnten).
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

Viele Hosting-Dienste erlauben Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den LocalLibrary Quellcode zu speichern (dies wurde in [Source Code Management mit Git und GitHub](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung festgelegt.

Dies ist ein guter Zeitpunkt, um eine Sicherung Ihres "Vanille"-Projekts zu machen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sein könnten, andere jedoch nicht.
Angenommen, dass Sie alle bisher gemachten Änderungen auf dem GitHub Hauptzweig gesichert haben, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Dieser Abschnitt bietet eine praktische Darstellung, wie _LocalLibrary_ auf [PythonAnywhere](https://www.pythonanywhere.com/) gehostet wird.

### Warum PythonAnywhere?

Wir entscheiden uns aus mehreren Gründen, PythonAnywhere zu verwenden:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, allerdings mit einigen Einschränkungen.
  Dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und nun PythonAnywhere gehostet und migriert, als vorher kostenlose Pläne eingestellt wurden.
  > Wir haben uns für PythonAnywhere entschieden, weil wir denken, dass dieser Plan wahrscheinlich kostenlos bleibt.
  > Wir haben auch das Railway-Beispiel behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, besser zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, damit Sie das nicht tun müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies und so weiter kümmern zu müssen, macht es viel einfacher, den Einstieg zu finden.
- Die Fähigkeiten und Konzepte, die Sie beim Arbeiten mit PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen unsere Nutzung von PythonAnywhere für das Tutorial nicht besonders.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<your-username>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugang von Ihren Apps, geringe CPU/Bandbreite, keine Unterstützung für Notebooks von IPython/Jupyter, keine freie Postgres-Datenbank.
    Aber es gibt genug Platz für unsere Basis-Site!
  - Benutzerdefinierte Domains werden derzeit nicht unterstützt.
  - Die Umgebung wird abgeschaltet, wenn sie nicht genutzt wird, wodurch sie möglicherweise langsam startet.
    Sie können es für immer laufen lassen, jedoch müssen Sie die Site alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt eine kostenlose Unterstützung für eine separate MySQL-Datenbank, jedoch nicht für Postgres.
    In dieser Demonstration werden wir einfach die Standard-Django SQLite-Datenbank verwenden.

PythonAnywhere ist geeignet für das Hosting dieser Demonstration und kann auf größere Projekte skaliert werden, wenn nötig.
Sie sollten sich die Zeit nehmen, um festzustellen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Oberfläche zum Hochladen, Bearbeiten und anderweitigen Arbeiten mit Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole in einer Ubuntu Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration werden wir die Konsole verwenden, um unser Local Library GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan stellt keine separate Postgres-Unterstützung bereit.
Während wir einen anderen Hosting-Dienst für unsere Datenbank nutzen könnten, verwenden wir einfach die von Django in der gehosteten Ubuntu-Umgebung erstellte Standard-SQLite-Datenbank (es gibt mehr als genug Platz, um die Bibliotheksfunktionalität zu demonstrieren).

Einmal läuft die Anwendung, kann sie für die Produktion konfiguriert werden, indem sie Umgebungsvariablen über die Bash-Konsole einstellen.

Das ist alles an Übersicht, das Sie benötigen, um loszulegen.

### Richten Sie ein PythonAnywhere-Konto ein

Um PythonAnywhere zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur [Pläne und Preise von PythonAnywhere](https://www.pythonanywhere.com/pricing/) Seite, und wählen Sie die Schaltfläche **Create a Beginner account**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, E-Mail und Passwort, bestätigen Sie die Bedingungen und wählen Sie dann **Registrieren**.
- Sie werden dann eingeloggt und zum PythonAnywhere Dashboard umgeleitet: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Installieren Sie die Bibliothek von GitHub

Als nächstes werden wir ein Bash-Prompt öffnen, eine virtuelle Umgebung einrichten und den lokal Bibliotheks-Quellcode von GitHub holen.
Wir werden auch die Standard-Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Bildschirm zur Konsolenverwaltung, indem Sie im oberen Anwendungsleisten **Consoles** auswählen.
2. Wählen Sie dann den **Bash**-Link, um ein neues Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere Konsoleverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole für eine spätere Wiederverwendung gespeichert wird, zusammen mit der gesamten Historie.
   Der grüne Pfeil oben zeigt, dass dieses Konto eine Konsole hatte, die wir stattdessen hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung namens "env_local_library" für die Installation der lokalen Bibliotheks-Abhängigkeiten zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig benennen können, und wir können sie deaktivieren und reaktivieren, indem wir die folgenden Befehle verwenden:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich dann die Bibliotheksquellen von GitHub.
   PythonAnywhere geht davon aus, dass Sie Anwendungen in einem Verzeichnis installieren, dass nach Ihrer Site-URL benannt ist.

   > [!NOTE]
   > Da wir das kostenlose Konto verwenden, können Sie Ihre Apps nur unter `<your_pythonanywhere_username>.pythonanywhere.com` benennen (zum Beispiel, wenn Ihr Benutzername "Odtsetseg" ist, müssen Sie den lokalen Bibliotheks-Quellcode in ein Verzeichnis namens `odtsetseg.pythonanywhere.com` legen).

   Geben Sie den folgenden Befehl ein, um Ihre Bibliotheksquellen in ein entsprechend benanntes Verzeichnis zu klonen (Sie müssen die Benutzernamenersetzungen mit Ihrem eigenen Namen vornehmen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten unter Verwendung der `requirements.txt` Datei:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Hosting-Computer (genauso wie während der Entwicklung).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir eine [Postgres-Datenbank einrichten und verbinden](#eine_postgres_sql-datenbank_einrichten_und_verbinden) und eine Verbindung zu ihr herstellen, indem wir die `DATABASE_URL` Umgebungsvariable festlegen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration, welche Datenbank verwendet wird, aufgerufen wird.

7. Sammeln Sie alle statischen Dateien in einem Verzeichnis, in dem sie [in der Produktion bereitgestellt](#statische_dateien_in_der_produktion_bereitstellen) werden können:

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser für den Zugriff auf die Seite (wie im Abschnitt [Django admin site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Daten, da Sie sie brauchen werden, um Ihre Seite zu testen.

### Richten Sie die Web-App ein

Nachdem Sie die lokalen Bibliotheksquellen geholt und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie die Quellen zu finden sind und sie als Web-App zu verwenden.

1. Navigieren Sie zum Abschnitt _Web_ der Seite und wählen Sie den **Hinzufügen einer neuen Web-App**-Link:

   ![PythonAnywhere "Web"-Bereich mit der Schaltfläche zum Hinzufügen einer neuen App](python_anywhere_web_add_new_app.png)

   Der _Erstellen einer neuen Webapp_-Assistent wird dann geöffnet, um die Hauptmerkmale der Web-App zu konfigurieren.

2. Wählen Sie **Weiter**, um die Web-App-Domänennamenkonfiguration zu überspringen.
   Das kostenlose Konto erstellt die Domäne basierend auf Ihrem Benutzernamen: `<user_name>.pythonanywhere.com`.

   ![PythonAnywhere Befehlseinstellungen für den Domänennamen der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Wählen Sie ein Python-Webframework aus_ **Manuelle Konfiguration**.

   ![PythonAnywhere Aufforderung zur Auswahl des Web-Frameworks, das von der Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration gibt uns die vollständige Kontrolle darüber, wie die Umgebung konfiguriert wird.
   Das spielt jetzt keine große Rolle, sollte es jedoch, wenn wir mehrere Sites hosten, möglicherweise mit verschiedenen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Wählen Sie eine Python-Version aus_ **3.10**

   ![PythonAnywhere Auswahlaufforderung für die Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Im Allgemeinen sollten Sie die neueste Version von Python auswählen, die von der Django-Version unterstützt wird, die Sie verwenden.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ den **Weiter**-Button (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere Aufforderung, die nächsten Konfigurationsoptionen zu erklären](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Web-Abschnitt wie gezeigt angezeigt.
   Der Bildschirm hat eine **Reload**-Schaltfläche, mit der Sie die Webanwendung nach weiteren Änderungen neu laden können.
   Wie auf dem Bildschirm bemerkt wird, müssen Sie auf die **Run until 3 months from today**-Schaltfläche klicken, um die Site für weitere drei Monate am Leben zu erhalten (und laufend).

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im "Code"-Abschnitt des _Web_-Tabs nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei.
   Diese hat einen Namen in der Form `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI-Datei im Web-Tab, Code-Abschnitt](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt der Datei mit dem folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die **Speichern**-Schaltfläche:

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
   PythonAnywhere erwartet, dass diese Datei an diesem Ort ist, weshalb die bereits im Projekt vorhandene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie im "Virtualenv"-Abschnitt des _Web_-Tabs nach unten.
   Wählen Sie den Link **Pfad zu einer virtuellen Umgebung eingeben, falls gewünscht** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie es wie vorgeschlagen "env_local_library" genannt haben, lautet der Pfad: `/home/<user_name>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtuelle Umgebung Abschnitt des Web-Tabs](python_anywhere_web_virtualenv.png)

8. Scrollen Sie im "Statische Dateien"-Abschnitt des _Web_-Tabs nach unten.

   ![PythonAnywhere Statische Dateien Abschnitt des Web-Tabs](python_anywhere_web_static_files.png)

   Wählen Sie den Link **URL eingeben** und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungs-Einstellungen](#settings.py_2) und zeigt auf den Ort, an den Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben im _Web_-Tab den **Reload**-Button, um die Site neu zu starten.
   Wählen Sie dann den Link zur Site-URL, um die Live-Site zu starten:

![PythonAnywhere-Webbildschirm mit hervorgehobenen Link zum Starten der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site in diesem Punkt geöffnet wird, sehen Sie einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode auf keinem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Seite dar.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie diese Art von Protokollierung auf der Live-Site mithilfe von [Umgebungsvariablen](#verwendung_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre PythonAnywhere-Site-URL einzuschließen:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch die [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die nachfolgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie zu Ihrem GitHub-Repo.

Dann müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Angenommen, Sie verwenden Ihr Bash-Prompt in dem Verzeichnis `<user_name>.pythonanywhere.com` und haben die Änderungen im Main-Bereich gepusht, dann könnten Sie sie im Bash-Prompt mit dem Befehl importieren:

```bash
git pull origin main
```

Verwenden Sie den **Neuladen**-Button auf dem `Web`-Tab, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Site aktualisieren, sollte sie nun geöffnet werden und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden und Autoren, Genres, Bücher und so weiter erstellen können, genau wie auf Ihrem lokalen Computer.

### Verwendung von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt [Ihre Website für die Veröffentlichung bereit machen](#ihre_website_für_die_veröffentlichung_vorbereiten) haben wir die Anwendung so modifiziert, dass sie mithilfe von Umgebungsvariablen oder Variablen in einer **.env**-Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie festlegen können:

- `DJANGO_DEBUG=False` um die Debug-Verfolgung zu reduzieren, die dem Benutzer bei einem Fehler angezeigt wird.
- `DJANGO_SECRET_KEY` um einen geheimen Wert in der Produktion festzulegen.
- `DATABASE_URL`, falls Ihre Anwendung eine gehostete Datenbank verwendet (wir tun das in diesem Beispiel nicht).

Die Art und Weise, wie Umgebungsvariablen festgelegt werden, hängt vom Hosting-Dienst ab.
Bei PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind bereits dafür eingerichtet, daher müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein Bash-Prompt auf PythonAnywhere.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<user-name>` durch Ihren eigenen Account):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie sie als Schlüsselwertpaare in die `.env`-Datei schreiben.
   Zum Beispiel, um `DJANGO_DEBUG` auf `False` im Bash-Konsolen-Prompt zu setzen, geben Sie den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können testen, ob der Vorgang funktioniert hat, indem Sie versuchen, ein nicht existierendes Protokoll zu öffnen (zum Beispiel ein Genre erstellen und dann die Nummer in der Adressleiste erhöhen, um ein Protokoll zu öffnen, das noch nicht erstellt wurde).
Wenn die Umgebungsvariable geladen wurde, erhalten Sie eine "Nicht gefunden"-Meldung anstelle einer detaillierten Debug-Verfolgung.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Darstellung, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen völlig kostenlosen Starter-Plan mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen bietet und für einige Benutzer eine bessere Option ist.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies und so weiter kümmern zu müssen, macht es viel einfacher, den Einstieg zu finden.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und einfacher zu überwindenden Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Arbeiten mit Railway lernen, sind übertragbar.
  Während Railway einige exzellente neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste ähnliche Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst erscheint sehr zuverlässig, und falls Sie ihn lieben, ist der Preis vorhersehbar und es ist sehr einfach, Ihre App zu skalieren.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.
Für Django-Anwendungen stellen wir diese Informationen in einer Reihe von Textdateien bereit:

- **runtime.txt**: gibt die Programmiersprache und Version an, die verwendet werden soll.
- **requirements.txt**: listet die Python-Abhängigkeiten auf, die für Ihre Site erforderlich sind, einschließlich Django.
- **Procfile**: Eine Liste von Prozessen, die zum Starten der Webanwendung ausgeführt werden sollen.
  Bei Django ist dies normalerweise der Gunicorn-Webanwendungsserver (mit einer `.wsgi`-Konfiguration).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung zu starten.

Sobald die Anwendung läuft, kann sie sich mithilfe von [Umgebungsvariablen](https://docs.railway.com/guides/variables) konfigurieren.
Zum Beispiel kann eine Anwendung, die eine Datenbank verwendet, die Adresse über die Variable `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter bereitgestellt werden.

Entwickler interagieren mit Railway über die Railway-Seite und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu überprüfen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir unsere Django Web-Anwendung in ein Git-Repository legen, die oben genannten Dateien erstellen, eine Datenbank-Erweiterung integrieren und Änderungen vornehmen, um statische Dateien ordnungsgemäß zu handhaben.
Sobald wir das alles getan haben, können wir ein Railway-Konto einrichten, das Railway-Client-Tool holen und unsere Website installieren.

Das ist alles an Übersicht, die Sie benötigen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unserer _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zu bekommen.
Wir müssen eigentlich nur eine `Procfile` und `runtime.txt` Datei erstellen, weil fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen nicht verhindern, dass Sie die lokalen Test- und Arbeitsabläufe verwenden können, die wir bereits gelernt haben.

#### Procfile

Ein _Procfile_ ist der "Entry Point" für die Webanwendung.
Es listet die Befehle auf, die von Railway zum Starten Ihrer Site ausgeführt werden.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Stamm Ihres GitHub-Repos und kopieren/einfügen Sie den folgenden Text:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das Präfix `web:` sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Als Nächstes rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den durch die `STATIC_ROOT`-Projekteinstellungen definierten Ordner zu sammeln (siehe Abschnitt [statische Dateien in der Produktion bereitstellen](#statische_dateien_in_der_produktion_bereitstellen) unten).
Schließlich starten wir den _gunicorn_-Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Beachten Sie, dass wir bereits das Projekt eingerichtet haben, um _gunicorn_ einzuschließen und die Bereitstellung statischer Dateien zu unterstützen!

Sie können das Procfile auch verwenden, um Arbeitsprozesse zu starten oder andere nicht-interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die **runtime.txt** Datei, falls definiert, informiert Railway darüber, welche Python-Version verwendet werden soll.
Erstellen Sie die Datei im Stamm des Repos und fügen Sie den folgenden Text hinzu:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Python-Laufzeit-Minor-Version.
> Sie werden im Allgemeinen die nächste unterstützte Version zu dem Wert verwenden, den Sie angeben.

#### Testen und Änderungen erneut speichern auf GitHub

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass nichts durch die vorgenommenen Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, ob die Site in Ihrem Browser noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns die Änderungen an GitHub `pushen`.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert haben) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen und zusammenführen Sie das PR auf GitHub.

Wir sollten nun bereit sein, mit der Bereitstellung von LocalLibrary auf Railway zu beginnen.

### Holen Sie ein Railway-Konto

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail überprüfen und verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Seite, dann wählen Sie die **New Project**-Schaltfläche:

![Railway-Website-Übersichtsseite mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wird, und einer Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Website-Bildschirm – bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die örtliche Bibliothek aus: `<user-name>/django-locallibrary-tutorial`.

![Railway-Website-Bildschirm mit einem Dialog zum Auswählen eines vorhandenen GitHub-Repositorys oder zum Auswählen eines neuen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm - Auswahl bereitstellen](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Bereitstellungslasche an.
Wenn die Bereitstellung erfolgreich abgeschlossen wurde, wird ein Bildschirm wie der unten angezeigt.

![Railway-Website-Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (hervorgehoben oben) klicken, um die Site in einem Browser zu öffnen (sie funktioniert jedoch noch nicht vollständig, da die Einrichtung noch nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm, wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der auftaucht, weil unser Quellcode auf keinem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einer vollständigen Rückverfolgung eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich bei der Einrichtung, stellt jedoch ein Sicherheitsrisiko auf einer bereitgestellten Site dar.
> Wir zeigen Ihnen, wie Sie den Fehler beheben können, sobald die Site fertig eingerichtet ist.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) Einstellung, um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch die [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) Schlüssel festlegen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die nachfolgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie Ihre Einstellungen und committen Sie sie zu Ihrem GitHub-Repo (Railway wird Ihre Anwendung automatisch aktualisieren und neu bereitstellen).

### Eine Postgres SQL-Datenbank einrichten und verbinden

Als Nächstes müssen wir eine Postgres-Datenbank erstellen und sie mit der gerade von Ihnen bereitgestellten Django-Anwendung verbinden.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, weil die Datenbank nicht erreichbar ist).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank in einem eigenen separaten Projekt erstellen könnten.

Wählen Sie auf Railway in der oberen Menüleiste die Option **Dashboard** aus und wählen Sie dann Ihr Anwendungsprojekt aus.
In diesem Stadium enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstdetails festzulegen).
Der Button **Einstellungen** kann ausgewählt werden, um projektübergreifende Einstellungen zu ändern.
Wählen Sie die Schaltfläche **Neu** aus, um dem Projekt Dienste hinzuzufügen.

![Railway-Projekt mit hervorgehobenem Neuen Dienst-Button](railway_project_open_no_database.png)

Wählen Sie **Database**, sobald Sie aufgefordert werden, die Art des hinzuzufügenden Dienstes zu wählen:

![Railway-Projekt – Datenbank als neuen Dienst auswählen](railway_project_add_database.png)

Wählen Sie dann **Add PostgreSQL**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Projekt – Postgres als neuen Dienst hinzufügen](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen.
Sie sehen nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht, sobald sie abgeschlossen sind.

![Railway-Projekt mit Anwendungs- und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webservice und dann die Registerkarte **Variablen**.
Wählen Sie **Neue Variable** und dann das Feld **Variablenname**, wählen Sie **Referenz hinzufügen**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (das ist der Name der Variablen, die wir einrichten, damit locallibrary es als Umgebungsvariable ausliest).

![Railway-Website-Bildschirm mit Auswahl einer DATABASE_URL](railway_postgresql_connect.png)

Wählen Sie dann **Hinzufügen**, um die Variablenreferenz hinzuzufügen und schließlich **Bereitstellen** (dies erscheint in einem Popup).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen, dann die Registerkarte Variablen und die Variable kopiert haben könnten.

Öffnen Sie jetzt das Projekt, sollte es genauso angezeigt werden, wie es lokal war.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu füllen, weil wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI](https://docs.railway.com/guides/cli) Tool auf unserem lokalen Computer tun.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier folgen](https://docs.railway.com/guides/cli).

Sobald der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem zugeordneten Railway-Projekt (ohne es auf GitHub hochladen zu müssen), sowie das Ausführen Ihres Django-Projekts lokal mit den gleichen Einstellungen, die Sie auf dem Produktionsserver haben.
Wir zeigen diese in den nächsten Abschnitten.

Sie können die Liste der möglichen Befehle abrufen, indem Sie im Terminal Folgendes eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verknüpfen.
> Wenn Sie vom System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt erneut zu verlinken.

### Einen Superuser einrichten

Um einen Superuser zu erstellen, müssen wir den Django `createsuperuser`-Befehl für die Produktionsdatenbank aufrufen (dies ist dieselbe Operation wie lokal in [Django Tutorial Teil 4: Django Admin Site > Einen Superuser erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creating_a_superuser)) durchgeführt).
Railway bietet keinen direkten Terminalzugang zum Server, und wir können diesen Befehl nicht in das [Procfile](#procfile) aufnehmen, weil er interaktiv ist.

Was wir tun können, ist diesen Befehl lokal an unserem Django-Projekt auszuführen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, indem er einen Mechanismus bereitstellt, um Befehle lokal mit den gleichen Umgebungsvariablen wie der Produktionsserver auszuführen, einschließlich der Datenbank-Verbindungszeichenkette.

Öffnen Sie zuerst ein Terminal oder ein Eingabeaufforderung in einem git clone Ihres locallibrary-Projekts.
Dann melden Sie sich mit dem `login` oder `login --browserless` Befehl bei Ihrem Browser-Konto an (folgen Sie etwaigen Aufforderungen und Anweisungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verknüpfen Sie Ihr aktuelles locallibrary-Verzeichnis mit dem zugeordneten Railway-Projekt, indem Sie den folgenden Befehl verwenden.
Beachten Sie, dass Sie beim Prompt ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Sobald das lokale Verzeichnis und das Projekt _verbunden_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen.
Stellen Sie zuerst sicher, dass Ihre normale [Django Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) bereit ist.
Dann starten Sie den folgenden Befehl und geben Namen, E-Mail und Passwort ein, wie benötigt:

```bash
railway run python manage.py createsuperuser
```

Sie sollten nun in der Lage sein, Ihr Webadministrationsbereich (`https://[your-url].railway.app/admin/`) zu öffnen und die Datenbank zu füllen, wie im [Django Tutorial Teil 4: Django Admin Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)) gezeigt.

### Konfigurationsvariablen festlegen

Der letzte Schritt besteht darin, die Site sicher zu machen.
Insbesondere müssen wir die Debug-Protokollierung deaktivieren und einen geheimen CSRF-Schlüssel festlegen.
Die Arbeit zum Lesen der benötigten Werte aus Umgebungsvariablen wurde in [Ihre Website für die Veröffentlichung bereit machen](#ihre_website_für_die_veröffentlichung_vorbereiten) erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte **Variablen**.
Dies sollte bereits die `DATABASE_URL` zeigen, wie unten gezeigt.

![Railway – neuer variabler Bildschirm hinzufügen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch sicheren Schlüssel zu generieren.
Ein einfacher Weg besteht darin, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie den **Neue Variable** Button und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (dann wählen Sie **Hinzufügen**).
Dann geben Sie den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der endgültige Satz von Variablen sollte so aussehen:

![Railway Bildschirm, der alle Projektvariablen zeigt](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den `logs`-Befehl bereit, um die `tail` der Protokolle anzuzeigen (ein umfassenderes Protokoll ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

Wenn Sie weitere Informationen benötigen, als dies Ihnen bieten kann, müssen Sie sich [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) ansehen.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch der Serie von Tutorials zu Django. Wir hoffen, Sie fanden sie hilfreich. Sie können einen vollständig durchgearbeiteten Versionscode des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django-Dokumentation)

  - [Bereitstellungscheckliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation)
  - [Bereitstellung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django-Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django-Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django-Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django-Dokumentation)

- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku-Dokumentation (ähnliche Einrichtungskonzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku-Dokumentation)
  - [Erste Schritte auf Heroku mit Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku-Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku-Dokumentation)
  - [Konkurrenz und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku-Dokumentation)
  - [Arbeiten mit Django](https://devcenter.heroku.com/categories/working-with-django) (Heroku-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
