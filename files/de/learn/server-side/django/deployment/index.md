---
title: "Django Tutorial Teil 11: Bereitstellen von Django in der Produktion"
slug: Learn/Server-side/Django/Deployment
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Nachdem Sie jetzt eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet aufgerufen werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Site für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vollständiger Abschluss aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Testing">Django Tutorial Teil 10: Testen einer Django-Webanwendung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wo und wie Sie eine Django-App in der Produktion bereitstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort als auf Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer Entwicklungsumgebung gearbeitet, den Django-Entwicklungswebserver verwendet, um Ihre Site im lokalen Browser/Netzwerk zu teilen und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debuggen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Umgebung zum Hosten der Django-App auswählen.
- Eine Umgebung zum Hosten von statischen Dateien auswählen.
- Eine Produktionsinfrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen zur Auswahl einer Hosting-Site, einen kurzen Überblick über die Dinge, die Sie tun müssen, um Ihre Django-App bereitzustellen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem Cloud-Hostingdienst [Railway](https://railway.app/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Server-Computer bereitgestellt wird, auf dem Sie Ihre Website zum externen Gebrauch ausführen werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux, Windows).
- Programmiersprach-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website erstellt ist.
- Webserver, der Seiten und andere Inhalte bereitstellt (z.B. Nginx, Apache).
- Anwendungsserver, der "dynamische" Anfragen zwischen Ihrer Django-Website und dem Webserver weiterleitet.
- Datenbanken, von denen Ihre Website abhängig ist.

> [!NOTE]
> Abhängig davon, wie Ihre Produktionsumgebung konfiguriert ist, könnten Sie auch einen Reverse Proxy, einen Load Balancer usw. haben.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was das tatsächlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Niveau an Rechnerressourcen (CPU, RAM, Speicher usw.) und Internetverbindung für einen bestimmten Preis.

Diese Art von fern zugänglicher Computer-/Netzwerkhardware wird als _Infrastruktur als Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zum Vorinstallieren eines bestimmten Betriebssystems an, auf das Sie andere Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, umfangreichere Umgebungen auszuwählen, möglicherweise einschließlich einer kompletten Django- und Webservereinrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Die verfügbaren Optionen könnten Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten Komponenten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Django als Teil eines _Platform as a Service_ (PaaS) Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um die meisten Ihrer Produktionsumgebung (Webserver, Anwendungsserver, Load Balancer) kümmern, da die Host-Plattform diese für Sie betreibt – zusammen mit dem meisten, was Sie tun müssen, um Ihre Anwendung zu skalieren.
Das macht die Bereitstellung ziemlich einfach, weil Sie sich einfach auf Ihre Webanwendung und nicht auf die gesamte andere Server-Infrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität schätzen, die IaaS im Vergleich zu PaaS bietet, während andere den geringeren Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Wenn Sie gerade anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher. Daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Python/Django-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zur Einrichtung einer Django-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsserver, Reverse Proxy usw. bereitstellen (dies ist nicht relevant, wenn Sie ein PaaS wählen). Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Django Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=django).

## Auswahl eines Hosting-Anbieters

Es gibt viele Hosting-Anbieter, die bekannt dafür sind, Django aktiv zu unterstützen oder gut mit Django zu funktionieren, darunter: [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), [Railway](https://railway.app/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) und [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan) – um nur einige zu nennen.
Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

Einige Punkte, die bei der Auswahl eines Hosts zu berücksichtigen sind:

- Wie viel Verkehr Ihre Seite voraussichtlich haben wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu erfüllen.
- Unterstützungsgrad für horizontale Skalierung (Hinzufügen von mehr Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Wo der Anbieter Rechenzentren hat und daher wo der Zugriff wahrscheinlich am schnellsten ist.
- Die bisherige Betriebszeit und Leistungsausfälle des Hosts.
- Bereitgestellte Tools zur Verwaltung der Site – sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preiskategorien nur eine begrenzte Anzahl von "Live-Zeit"-Stunden oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie sonst zahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit ausläuft und ob die Kosten für die Migration zu einer teureren Stufe bedeuten, dass Sie besser dran gewesen wären, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht, wenn Sie gerade anfangen, ist, dass es ziemlich viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für Bewertung und Tests gedacht sind.
Diese sind in der Regel recht ressourcenkonservierte/limitierte Umgebungen, und Sie müssen wissen, dass sie möglicherweise nach einer Einführungsphase ablaufen oder andere Einschränkungen aufweisen.
Sie sind jedoch großartig, um wenig frequentierte Seiten in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zur Bezahlung von mehr Ressourcen bieten, wenn Ihre Seite geschäftiger wird.
Beliebte Optionen in dieser Kategorie sind [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) und so weiter.

Die meisten Anbieter bieten auch eine "Basis"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/) und [Digital Ocean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe im Bereich von 5 bis 10 USD pro Monat bieten.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Faktor ist.

## So machen Sie Ihre Website bereit zur Veröffentlichung

Das [Django-Skelett-Website-Framework](/de/docs/Learn/Server-side/Django/skeleton_website), das mit den _django-admin_ und _manage.py_ Tools erstellt wird, ist so konfiguriert, dass die Entwicklung erleichtert wird. Viele der Django-Projekteinstellungen (angegeben in **settings.py**) sollten für die Produktion anders sein, entweder aus Sicherheits- oder Leistungsgründen.

> [!NOTE]
> Es ist üblich, eine separate **settings.py** Datei für die Produktion zu haben und/oder sensible Einstellungen bedingt aus einer separaten Datei oder einer Umgebungsvariable zu importieren. Diese Datei sollte dann geschützt werden, auch wenn der gesamte Quellcode in einem öffentlichen Repository verfügbar ist.

Die kritischen Einstellungen, die Sie überprüfen müssen, sind:

- `DEBUG`. In der Produktion sollte dieser Wert auf `False` gesetzt werden (`DEBUG = False`). Dies verhindert, dass vertrauliche Debug-Informationen und Variableninformationen angezeigt werden.
- `SECRET_KEY`. Dies ist ein großer, zufälliger Wert, der für den CSRF-Schutz usw. verwendet wird. Es ist wichtig, dass der in der Produktion verwendete Schlüssel nicht im Quellcode kontrolliert oder außerhalb des Produktionsservers zugänglich ist.

Die Django-Dokumente empfehlen, dass geheime Informationen am besten aus einer Umgebungsvariable geladen oder von einer nur für den Server zugänglichen Datei gelesen werden sollten.
Lassen Sie uns die _LocalLibrary_ Anwendung so ändern, dass wir unsere `SECRET_KEY` und `DEBUG` Variablen aus Umgebungsvariablen lesen, falls diese definiert sind, und auf Werte in einer **.env** Datei im Root zurückfallen und zuletzt auf die Standardwerte in der Konfigurationsdatei.
Dies ist sehr flexibel, da es jede von dem Hosting-Server unterstützte Konfiguration ermöglicht.

Zum Lesen von Umgebungwerten aus einer Datei verwenden wir [python-dotenv](https://pypi.org/project/python-dotenv/).
Dies ist eine Bibliothek zur Ausgabe von Schlüssel-Wert-Paaren einer Datei und deren Verwendung als Umgebungsvariablen, jedoch nur, wenn die entsprechende Umgebungsvariable nicht definiert ist.

Installieren Sie die Bibliothek in Ihrer virtuellen Umgebung wie gezeigt (und aktualisieren Sie auch Ihre `requirements.txt` Datei):

```bash
pip3 install python-dotenv
```

Öffnen Sie dann **/locallibrary/settings.py** und fügen Sie den folgenden Code nach der Definition von `BASE_DIR` ein, jedoch vor der Sicherheitswarnung: `# SECURITY WARNING: keep the secret key used in production secret!`

```py
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv
env_path = load_dotenv(os.path.join(BASE_DIR, '.env'))
load_dotenv(env_path)
```

Dies lädt die `.env` Datei aus dem Root der Webanwendung.
Variablen, die als `KEY=WERT` in der Datei definiert sind, werden importiert, wenn der Schlüssel in `os.environ.get('<KEY>'', '<DEFAULT VALUE>')` verwendet wird, sofern definiert.

> [!NOTE]
> Alle Werte, die Sie zur **.env** Datei hinzufügen, sind wahrscheinlich _Geheimnisse_!
> Sie dürfen nicht auf GitHub gespeichert werden und sollten zu Ihrer `.gitignore` Datei hinzugefügt werden, damit sie nicht versehentlich hinzugefügt werden.

Deaktivieren Sie als Nächstes die ursprüngliche `SECRET_KEY` Konfiguration und fügen Sie die neuen Zeilen wie unten gezeigt hinzu.
Während der Entwicklung wird keine Umgebungsvariable für den Schlüssel angegeben, sodass der Standardwert verwendet wird (es sollte keine Rolle spielen, welchen Schlüssel Sie hier verwenden oder ob der Schlüssel "durchsickert", da Sie ihn in der Produktion nicht verwenden werden).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Kommentieren Sie anschließend die bestehende `DEBUG` Einstellung aus und fügen Sie die neue Zeile wie unten gezeigt hinzu.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Der Wert der `DEBUG` Variablen wird standardmäßig `True` sein, wird jedoch nur `False` sein, wenn der Wert der `DJANGO_DEBUG` Umgebungsvariable auf `False` gesetzt wird oder `DJANGO_DEBUG=False` in der **.env** Datei gesetzt ist.
Bitte beachten Sie, dass Umgebungsvariablen Zeichenfolgen und keine Python-Typen sind. Wir müssen daher Zeichenfolgen vergleichen. Der einzige Weg, die `DEBUG` Variable auf `False` zu setzen, ist, sie tatsächlich auf die Zeichenfolge `False` zu setzen.

Sie können die Umgebungsvariable auf Linux setzen, indem Sie den folgenden Befehl ausführen:

```bash
export DJANGO_DEBUG=False
```

Eine vollständige Checkliste der Einstellungen, die Sie ändern möchten, finden Sie in der [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django-Dokumentation). Sie können auch eine Anzahl dieser Einstellungen mit dem unten stehenden Terminalbefehl auflisten:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) ist ein reiner Python HTTP-Server, der häufig verwendet wird, um Django WSGI-Anwendungen bereitzustellen.

Während wir _Gunicorn_ während der Entwicklung nicht benötigen, um unsere LocalLibrary-Anwendung bereitzustellen, installieren wir es lokal, damit es Teil unserer [Anforderungen](#anforderungen) wird, wenn die Anwendung bereitgestellt wird.

Vergewissern Sie sich zuerst, dass Sie sich in der Python-virtuellen Umgebung befinden, die erstellt wurde, als Sie die [Entwicklungsumgebung eingerichtet haben](/de/docs/Learn/Server-side/Django/development_environment) (verwenden Sie den Befehl `workon [Name-der-virtuellen-Umgebung]`).
Installieren Sie dann _Gunicorn_ lokal in der Befehlszeile mit _pip_:

```bash
pip3 install gunicorn
```

### Datenbankkonfiguration

SQLite, die standardmäßige Django-Datenbank, die Sie für die Entwicklung verwendet haben, ist eine angemessene Wahl für kleine bis mittlere Websites.
Unglücklicherweise kann es nicht auf einigen beliebten Hosting-Diensten wie Heroku verwendet werden, da diese im Anwendungskontext keine dauerhafte Datenspeicherung bieten (was bei SQLite erforderlich ist).
Während dies uns nicht bei der Beispielbereitstellung(en) betrifft, werden wir Ihnen eine andere Herangehensweise zeigen, die auf Railway, Heroku und einigen anderen Diensten funktionieren wird.

Die Methode besteht darin, eine Datenbank zu verwenden, die in ihrem eigenen Prozess irgendwo im Internet läuft und von der Django-Bibliothekanwendung mit einer Adresse angesprochen wird, die als Umgebungsvariable übergeben wird.
In diesem Fall verwenden wir eine Postgres-Datenbank, die ebenfalls auf Railway gehostet wird, aber Sie könnten jeden beliebigen Datenbank-Hostingdienst Ihrer Wahl nutzen.

Die Datenbankverbindungsinformationen werden über eine Umgebungsvariable namens `DATABASE_URL` an Django geliefert.
Anstatt diese Informationen starr in Django zu kodieren, verwenden wir das Paket [dj-database-url](https://pypi.org/project/dj-database-url/), um die `DATABASE_URL` Umgebungsvariable zu analysieren und automatisch in das gewünschte Django-Konfigurationsformat zu konvertieren.
Zusätzlich zur Installation des _dj-database-url_ Pakets müssen wir auch [psycopg2](https://www.psycopg.org/) installieren, da Django dies benötigt, um mit Postgres-Datenbanken zu arbeiten.

#### dj-database-url

_dj-database-url_ wird verwendet, um die Django-Datenbankkonfiguration aus einer Umgebungsvariable zu extrahieren.

Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) bei der Einrichtung auf dem Bereitstellungsserver wird:

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

Django wird jetzt die Datenbankkonfiguration in `DATABASE_URL` verwenden, wenn die Umgebungsvariable gesetzt ist; andernfalls verwendet es die standardmäßige SQLite-Datenbank.
Der Wert `conn_max_age=500` sorgt dafür, dass die Verbindung persistent ist, was weit effizienter ist, als die Verbindung bei jedem Anforderungszyklus neu zu erstellen (dies ist optional und kann bei Bedarf entfernt werden).

#### psycopg2

<!-- Django 4.2 jetzt unterstützt Psycopg (3): https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  Aber auf Railway nicht funktioniert!
  Versuchen Sie es im nächsten Release erneut zu aktualisieren.
-->

Django benötigt _psycopg2_, um mit Postgres-Datenbanken zu arbeiten.
Installieren Sie es lokal, damit es Teil unserer [Anforderungen](#anforderungen) für Railway zur Einrichtung auf dem Remote-Server wird:

```bash
pip3 install psycopg2-binary
```

Beachten Sie, dass Django standardmäßig die SQLite-Datenbank während der Entwicklung verwenden wird, es sei denn, `DATABASE_URL` ist gesetzt.
Sie können komplett auf Postgres umsteigen und dieselbe gehostete Datenbank sowohl für die Entwicklung als auch für die Produktion verwenden, indem Sie dieselbe Umgebungsvariable in Ihrer Entwicklungsumgebung setzen (Railway ermöglicht es, dieselbe Umgebung für Produktion und Entwicklung zu verwenden).
Alternativ können Sie auch eine [selbstgehostete Postgres-Datenbank](https://www.psycopg.org/docs/install.html) auf Ihrem lokalen Computer installieren und verwenden.

### Bereitstellen von statischen Dateien in der Produktion

Während der Entwicklung verwenden wir Django und den Django-Entwicklungswebserver, um sowohl unsere dynamischen HTML- als auch unsere statischen Dateien (CSS, JavaScript, usw.) bereitzustellen.
Dies ist für statische Dateien ineffizient, da die Anfragen durch Django gehen müssen, obwohl Django nichts damit macht.
Während dies während der Entwicklung keine Rolle spielt, hätte es erhebliche Auswirkungen auf die Leistung, wenn wir denselben Ansatz in der Produktion verwenden würden.

In der Produktionsumgebung separieren wir in der Regel die statischen Dateien von der Django-Webanwendung, was es einfacher macht, diese direkt vom Webserver oder einem Content Delivery Network (CDN) bereitzustellen.

Die wichtigen Einstellungsvariablen sind:

- `STATIC_URL`: Dies ist der Basis-URL-Standort, von dem statische Dateien bereitgestellt werden, zum Beispiel auf einem CDN.
- `STATIC_ROOT`: Dies ist der absolute Pfad zu einem Verzeichnis, in dem Djangos _collectstatic_ Tool alle in unseren Templates referenzierten statischen Dateien sammelt. Sobald sie gesammelt sind, können diese dann in einer Gruppe hochgeladen werden, wo immer die Dateien gehostet werden sollen.
- `STATICFILES_DIRS`: Dies listet zusätzliche Verzeichnisse auf, die Djangos _collectstatic_ Tool nach statischen Dateien durchsuchen soll.

Django-Templates beziehen sich auf Speicherorte für statische Dateien in Bezug auf ein `static` Tag (Sie können dies im Basistemplate sehen, das in [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page#the_locallibrary_base_template) definiert ist), das wiederum auf die `STATIC_URL` Einstellung verweist.
Statische Dateien können daher auf jeden Host hochgeladen werden, und Sie können Ihre Anwendung aktualisieren, um sie mit dieser Einstellung zu finden.

Das _collectstatic_ Tool wird verwendet, um statische Dateien in das von der `STATIC_ROOT` Projekteinstellung definierte Verzeichnis zu sammeln.
Es wird mit dem folgenden Befehl aufgerufen:

```bash
python3 manage.py collectstatic
```

Für dieses Tutorial kann _collectstatic_ vor dem Hochladen der Anwendung ausgeführt werden, indem alle statischen Dateien der Anwendung an den Ort kopiert werden, der in `STATIC_ROOT` angegeben ist.
`Whitenoise` findet dann die Dateien standardmäßig aus dem von `STATIC_ROOT` definierten Ort und dient ihnen an die Basis-URL, die von `STATIC_URL` definiert wird.

#### settings.py

Öffnen Sie **/locallibrary/settings.py** und kopieren Sie die folgende Konfiguration an das Ende der Datei.
Der `BASE_DIR` sollte bereits in Ihrer Datei definiert sein (die `STATIC_URL` könnte ebenfalls bereits in der Datei definiert gewesen sein, als sie erstellt wurde.
Während es keinen Schaden anrichtet, können Sie den doppelten vorherigen Verweis auch entfernen).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Wir werden das Bereitstellen von Dateien tatsächlich mit einer Bibliothek namens [WhiteNoise](https://pypi.org/project/whitenoise/) durchführen, die wir im nächsten Abschnitt installieren und konfigurieren.

### Whitenoise

Es gibt viele Möglichkeiten, statische Dateien in der Produktion bereitzustellen (wir haben die entsprechenden Django-Einstellungen in den vorherigen Abschnitten gesehen).
Das [WhiteNoise](https://pypi.org/project/whitenoise/) Projekt bietet eine der einfachsten Methoden, um statische Ressourcen direkt von Gunicorn in der Produktion bereitzustellen.

Schauen Sie sich die [WhiteNoise Dokumentation](https://pypi.org/project/whitenoise/) an, um eine Erklärung zu erhalten, wie es funktioniert und warum die Implementierung eine relativ effiziente Methode ist, um diese Dateien bereitzustellen.

Die Schritte zur Einrichtung von _WhiteNoise_ zur Verwendung mit dem Projekt sind [hier](https://whitenoise.readthedocs.io/en/stable/django.html) gegeben (und unten wiedergegeben):

#### Installieren von whitenoise

Installieren Sie whitenoise lokal mit dem folgenden Befehl:

```bash
pip3 install whitenoise
```

#### settings.py

Um _WhiteNoise_ in Ihre Django-Anwendung zu installieren, öffnen Sie **/locallibrary/settings.py**, finden Sie die `MIDDLEWARE` Einstellung und fügen Sie das `WhiteNoiseMiddleware` nahe an die Spitze der Liste unter der `SecurityMiddleware` hinzu:

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

Sie müssen nichts anderes tun, um _WhiteNoise_ zu konfigurieren, da es standardmäßig Ihre Projekteinstellungen für `STATIC_ROOT` und `STATIC_URL` verwendet.

### Anforderungen

Die Python-Anforderungen Ihrer Webanwendung sollten in einer Datei **requirements.txt** im Root Ihres Repositorys gespeichert sein.
Viele Hosting-Dienste installieren automatisch Abhängigkeiten in dieser Datei (bei anderen müssen Sie dies selbst tun).
Sie können diese Datei mit _pip_ in der Befehlszeile erstellen (führen Sie Folgendes im Repo-Root aus):

```bash
pip3 freeze > requirements.txt
```

Nachdem Sie alle oben genannten unterschiedlichen Abhängigkeiten installiert haben, sollte Ihre **requirements.txt** Datei _mindestens_ diese Einträge enthalten (die Versionsnummern könnten unterschiedlich sein).
Bitte löschen Sie alle anderen nicht aufgeführten Abhängigkeiten, es sei denn, Sie haben sie ausdrücklich für diese Anwendung hinzugefügt.

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

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Versionierungskontrolldiensten zu importieren und/oder zu synchronisieren.
Dies kann Bereitstellung und iterative Entwicklung erheblich erleichtern.

Sie sollten bereits GitHub verwenden, um den Quellcode der lokalen Bibliothek zu speichern (dies wurde in [Quellcodeverwaltung mit Git und GitHub](/de/docs/Learn/Server-side/Django/development_environment#source_code_management_with_git_and_github) als Teil der Einrichtung Ihrer Entwicklungsumgebung eingerichtet.

Dies ist ein guter Punkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst oder für die Entwicklung nützlich sein könnten, andere möglicherweise nicht.
Angenommen, Sie haben bereits alle bisher vorgenommenen Änderungen im Hauptzweig auf GitHub gesichert, können Sie einen neuen Zweig erstellen, um Ihre Änderungen wie gezeigt zu sichern:

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

Wir entscheiden uns aus mehreren Gründen dafür, PythonAnywhere zu nutzen:

- PythonAnywhere hat einen [kostenlosen Anfängerplan](https://www.pythonanywhere.com/pricing/), der _wirklich_ kostenlos ist, wenngleich mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!

  > [!NOTE]
  > Dieses Tutorial wurde auf Heroku, Railway und jetzt auf PythonAnywhere gehostet, wobei migriert wurde, als der zuvor kostenlose Plan eingestellt wurde.
  > Wir haben uns für PythonAnywhere entschieden, weil wir glauben, dass dieser Plan wahrscheinlich kostenlos bleiben wird.
  > Wir haben das Railway-Beispiel ebenfalls behalten, das nicht kostenlos ist, zum Vergleich und weil es uns ermöglicht, Funktionen wie die Integration mit einer Postgres-Datenbank, die auf einem anderen Dienst läuft, einfacher zu demonstrieren.

- PythonAnywhere kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load-Balancer, Reverse-Proxys und so weiter kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von PythonAnywhere lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen die Nutzung von PythonAnywhere für das Tutorial nicht wirklich.
  Zum Beispiel:

  - Der Anfängerplan erlaubt eine Web-App unter `<Ihr-Benutzername>.pythonanywhere.com`, eingeschränkter ausgehender Internetzugang von Ihren Apps, niedrige CPU/Bandbreite, keine IPython/Jupyter-Notebook-Unterstützung, keine kostenlose Postgres-Datenbank.
    Aber es gibt genug Platz für unsere grundlegende Website, um zu laufen!
  - Benutzerdefinierte Domains werden nicht unterstützt (zum Zeitpunkt des Schreibens).
  - Die Umgebung wird heruntergefahren, wenn sie nicht verwendet wird, sodass sie möglicherweise langsam neu gestartet wird.
    Sie können es für immer laufen lassen, aber Sie müssen die Seite alle drei Monate besuchen und die Webanwendung erneuern.
  - Es gibt kostenlose Unterstützung für eine separate MySQL-Datenbank, aber nicht für Postgres.
    In dieser Demonstration verwenden wir einfach die standardmäßige Django SQLite-Datenbank.

PythonAnywhere eignet sich für das Hosting dieser Demonstration und kann bei Bedarf auf größere Projekte skaliert werden.
Sie sollten die Zeit investieren, um festzustellen, ob es für [Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert PythonAnywhere?

PythonAnywhere bietet eine vollständig webbasierte Schnittstelle zum Hochladen, Bearbeiten und anderweitigen Bearbeiten Ihrer Anwendung.

Über die Schnittstelle können Sie eine Bash-Konsole in einer Ubuntu-Linux-Umgebung starten, in der Sie Ihre Anwendung erstellen können.
In dieser Demonstration werden wir die Konsole verwenden, um unser lokales Bibliotheks-GitHub-Repository zu klonen und eine Python-Umgebung zu erstellen, in der wir die Webanwendung ausführen können.

Der kostenlose Plan bietet keine separate Postgres-Unterstützung.
Während wir einen anderen Hosting-Service für unsere Datenbank verwenden könnten, verwenden wir einfach die standardmäßige SQLite-Datenbank, die von Django in der gehosteten Ubuntu-Umgebung erstellt wurde (es gibt mehr als genug Speicherplatz, um die Bibliotheksfunktionalität zu demonstrieren).

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem Umgebungsvariablen über die Bash-Konsole eingestellt werden.

Das ist alles, was Sie an Übersicht brauchen, um loszulegen.

### Erstellen Sie ein PythonAnywhere-Konto

Um PythonAnywhere zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zur Seite [Pläne und Preise von PythonAnywhere](https://www.pythonanywhere.com/pricing/) und wählen Sie die Schaltfläche **Kostenloses Anfänger-Konto erstellen**.
- Erstellen Sie ein Konto mit Ihrem Benutzernamen, Ihrer E-Mail-Adresse und Ihrem Passwort, bestätigen Sie die allgemeinen Geschäftsbedingungen und wählen Sie dann **Registrieren**.
- Sie werden dann angemeldet und auf das PythonAnywhere-Dashboard weitergeleitet: `https://www.pythonanywhere.com/user/<Ihr_Benutzername>/`.

### Installieren der Bibliothek von GitHub

Als nächstes öffnen wir ein Bash-Prompt, richten eine virtuelle Umgebung ein und holen den Quellcode der lokalen Bibliothek von GitHub ab.
Wir werden auch die standardmäßige Datenbank konfigurieren und statische Dateien sammeln, damit sie von PythonAnywhere bereitgestellt werden können.

1. Öffnen Sie zuerst den Konsolenverwaltungsbildschirm, indem Sie in der oberen Anwendungsleiste **Consoles** auswählen.
2. Wählen Sie dann den **Bash** Link aus, um eine neue Konsole zu erstellen und zu starten:

   ![Bild des PythonAnywhere-Konsolenverwaltungsbildschirms](python_anywhere_start_bash_console.png)

   Beachten Sie, dass jede von Ihnen erstellte Konsole für die spätere Wiederverwendung zusammen mit der gesamten Geschichte gespeichert wird.
   Der grüne Pfeil oben zeigt, dass dieses Konto über eine Konsole verfügt, die wir hätten öffnen können.

3. Geben Sie in der Konsole den folgenden Befehl ein, um eine Python 3.10-virtuelle Umgebung mit dem Namen "env_local_library" zum Installieren der Abhängigkeiten der lokalen Bibliothek zu erstellen.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Dies ist genau derselbe Prozess, der in [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) behandelt wird.
   Wir hätten die Umgebung beliebig nennen können, und wir können sie mit den unten stehenden Befehlen deaktivieren und wieder aktivieren:

   ```bash
   deactivate
   workon env_local_library
   ```

4. Holen Sie sich als nächstes die Bibliotheksquellen von GitHub.
   PythonAnywhere erwartet, dass Sie Anwendungen in einen Ordner mit dem Namen Ihrer Website-URL installieren.

   > [!NOTE]
   > Da wir das kostenlose Konto nutzen, können Sie Ihr Konto nur `<Ihr_PythonAnywhere_Benutzername>.pythonanywhere.com` nennen (wenn Ihr Benutzername beispielsweise "Odtsetseg" ist, müssen Sie die lokalen Bibliotheksquellen in einen Ordner namens `odtsetseg.pythonanywhere.com` ablegen).

   Führen Sie den folgenden Befehl aus, um Ihre Bibliotheksquellen in einen entsprechend benannten Ordner zu klonen (Sie müssen die Benutzername-Werte durch Ihren eigenen Namen ersetzen):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navigate into the new folder
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Installieren Sie die Bibliotheksabhängigkeiten mit der Datei `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Erstellen und konfigurieren Sie eine SQLite-Datenbank auf dem Host-Computer (genau wie wir es während der Entwicklung getan haben).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Für das Railway-Beispiel werden wir [eine Postgres-Datenbank konfigurieren](#bereitstellen_und_verbinden_einer_postgres_sql-datenbank) und durch Setzen der `DATABASE_URL` Umgebungsvariable eine Verbindung herstellen.
   > Es ist wichtig, dass `migrate` _nach_ der Konfiguration genutzt wird, um welche Datenbank auch immer verwendet wird.

7. Sammeln Sie alle statischen Dateien an einem Ort, wo sie [in der Produktion bereitgestellt werden können](#bereitstellen_von_statischen_dateien_in_der_produktion):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Erstellen Sie einen Superuser, um auf die Site zuzugreifen (wie im Abschnitt [Django Admin Site](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) behandelt):

   ```bash
   python manage.py createsuperuser
   ```

   Notieren Sie sich die Details, da Sie diese benötigen, um Ihre Site zu testen.

### Web-App einrichten

Nachdem Sie die lokalen Bibliotheksquellen erhalten und die Abhängigkeiten in einer virtuellen Umgebung installiert haben, müssen wir PythonAnywhere mitteilen, wie man sie findet und sie als Web-App verwendet.

1. Navigieren Sie zum Abschnitt _Web_ der Seite und wählen Sie den Link **Eine neue Web-App hinzufügen** aus:

   ![PythonAnywhere "Web"-Abschnitt, der die Schaltfläche zum Hinzufügen einer neuen App zeigt](python_anywhere_web_add_new_app.png)

   Der _Erstellen neuer Web-App_-Assistent wird dann geöffnet, um Sie durch die Konfiguration der Haupteigenschaften der Web-App zu führen.

2. Wählen Sie **Weiter**, um die Konfiguration des Domain-Namens der Web-App zu überspringen.
   Das kostenlose Konto erstellt die Domäne basierend auf Ihrem Benutzernamen: `<Benutzername>.pythonanywhere.com`.

   ![PythonAnywhere-Aufforderung zum Festlegen des Domainnamens der neuen Web-App](python_anywhere_web_add_new_app_prompt.png)

3. Wählen Sie im Bildschirm _Wählen Sie ein Python-Webframework aus_ **Manuelle Konfiguration** aus.

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl des Web-Frameworks, das für die Anwendung verwendet wird](python_anywhere_web_add_select_framework_manual.png)

   Die manuelle Konfiguration ermöglicht die vollständige Kontrolle über die Konfiguration der Umgebung.
   Das spielt jetzt nicht so eine große Rolle, aber es würde es, wenn wir mehrere Sites hosten, möglicherweise mit unterschiedlichen Versionen von Python und/oder Django.

4. Wählen Sie im Bildschirm _Python-Version auswählen_ **3.10**

   ![PythonAnywhere-Eingabeaufforderung zur Auswahl der Python-Version für die Webanwendung](python_anywhere_web_add_select_python_version.png)

   Allgemeiner sollten Sie die neueste Version von Python auswählen, die von der verwendeten Django-Version zugelassen ist.

5. Wählen Sie im Bildschirm _Manuelle Konfiguration_ **Weiter** aus (der Bildschirm erklärt nur einige der Konfigurationsoptionen)

   ![PythonAnywhere-Eingabeaufforderung, die erklärt, welche Konfigurationsoptionen als nächstes möglich sind](python_anywhere_web_add_manual_config.png)

   Die Web-App wird erstellt und im Abschnitt Web wie gezeigt angezeigt.
   Der Bildschirm hat eine **Neu laden**-Schaltfläche, die Sie verwenden können, um die Webanwendung nach weiteren Änderungen neu zu laden.
   Wie auf dem Bildschirm angegeben, müssen Sie die Schaltfläche **Bis zu 3 Monate ab heute laufen** klicken, um die Site für drei weitere Monate (und weiterlaufend) am Leben zu erhalten.

   ![PythonAnywhere konfigurierte Web-App](python_anywhere_web_configuration.png)

6. Scrollen Sie im "Code"-Abschnitt der Registerkarte _Web_ nach unten und wählen Sie den Link zur WSGI-Konfigurationsdatei aus.
   Diese hat einen Namen in der Form `/var/www/<Benutzername>_pythonanywhere_com_wsgi.py`.

   ![PythonAnywhere WSGI Datei im Web-Tab, Codesektion](python_anywhere_web_code_wsgi_select.png)

   Ersetzen Sie den Inhalt in der Datei durch den folgenden Text (aktualisieren Sie zuerst "hamishwillee" mit Ihrem eigenen Benutzernamen) und wählen Sie dann die Schaltfläche **Speichern** aus.

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
   PythonAnywhere erwartet, dass sich diese Datei an diesem Ort befindet, sodass die im Projekt enthaltene WSGI-Datei nicht verwendet werden kann.

7. Scrollen Sie auf der Registerkarte _Web_ nach unten zum Abschnitt "Virtualenv".
   Wählen Sie den Link **Geben Sie den Pfad zu einer virtuellen Umgebung ein, falls gewünscht** und geben Sie den Pfad der virtuellen Umgebung ein, die im vorherigen Abschnitt erstellt wurde.
   Wenn Sie sie wie vorgeschlagen "env_local_library" genannt haben, wird der Pfad: `/home/<Benutzername>/.virtualenvs/env_local_library`

   ![PythonAnywhere Virtual Environment Abschnitt der Web-Registerkarte](python_anywhere_web_virtualenv.png)

8. Scrollen Sie zum Abschnitt "Statische Dateien" der Registerkarte _Web_ nach unten.

   ![PythonAnywhere Abschnitt für statische Dateien der Web-Registerkarte](python_anywhere_web_static_files.png)

   Wählen Sie den **Geben Sie die URL ein** Link und geben Sie `\static_files\` ein.
   Dies ist die `STATIC_URL` in den [Anwendungseinstellungen](#settings.py_2) und spiegelt den Standort wider, an dem Dateien kopiert wurden, als wir `collectstatic` im vorherigen Abschnitt ausgeführt haben.

9. Wählen Sie oben auf der Registerkarte _Web_ die Schaltfläche **Neu laden**, um die Site neu zu starten.
   Wählen Sie dann den Site-URL-Link aus, um die Live-Site zu starten:

![PythonAnywhere-Webbildschirm mit der hervorgehobenen Schaltfläche zum Starten der Site](python_anywhere_web_open_site.png)

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungspfad eines ungültigen HTTP_HOST-Headers](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Im nächsten Abschnitt zeigen wir Ihnen, wie Sie dieses Log-Level auf der Live-Site mit [Umgebungsvariablen](#verwenden_von_umgebungsvariablen_auf_pythonanywhere) deaktivieren können.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) so, dass sie Ihre PythonAnywhere Site-URL enthält:

```python
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Speichern Sie diese Einstellungen und committen Sie sie in Ihr GitHub-Repo.

Anschließend müssen Sie die Version Ihres Projekts auf PythonAnywhere aktualisieren.
Wenn Sie das Bash-Prompt im Ordner `<Benutzername>.pythonanywhere.com` verwenden und die Änderungen in den master-Zweig gepusht haben, können Sie sie mit dem Befehl im Bash-Prompt importieren:

```Bash
git pull origin main
```

Verwenden Sie den **Neuladen**-Button auf der Registerkarte `Web`, um die Anwendung neu zu starten.
Wenn Sie Ihre gehostete Seite, die Sie aktualisiert haben, wiederherstellen, sollte sie sich nun öffnen und die Startseite der Site anzeigen.

Sie sollten sich mit dem oben erstellten Superuser-Konto anmelden können und Autoren, Genres, Bücher usw. erstellen, genauso wie Sie es auf Ihrem lokalen Computer getan haben.

### Verwenden von Umgebungsvariablen auf PythonAnywhere

Im Abschnitt über das [Vorbereiten Ihrer Website zur Veröffentlichung](#so_machen_sie_ihre_website_bereit_zur_veröffentlichung) haben wir die Anwendung so modifiziert, dass sie mit Umgebungsvariablen oder Variablen in einer **.env** Datei in der Produktion konfiguriert werden kann.

Insbesondere haben wir die Bibliothek so eingerichtet, dass Sie Folgendes einstellen können:

- `DJANGO_DEBUG=False`, um die Debug-Nachverfolgung zu reduzieren, die dem Benutzer bei einem Fehler angezeigt wird.
- `DJANGO_SECRET_KEY` für ein geheimes Produkt.
- `DATABASE_URL`, wenn Ihre Anwendung eine gehostete Datenbank verwendet (dies tun wir in diesem Beispiel nicht).

Die Art, wie Umgebungsvariablen gesetzt werden, hängt von dem Hosting-Service ab.
Für PythonAnywhere müssen Sie sie aus einer Umgebungsdatei lesen.
Wir sind bereits dafür eingerichtet, also müssen wir nur die Datei erstellen.

Die Schritte sind:

1. Öffnen Sie ein PythonAnywhere Bash-Prompt.
2. Navigieren Sie zu Ihrem Anwendungsverzeichnis (ersetzen Sie `<Benutzername>` durch Ihr eigenes Konto):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Setzen Sie die Umgebungsvariablen, indem Sie ihnen als Schlüssel-Wert-Paare in der Datei `.env` schreiben.
   Um beispielsweise `DJANGO_DEBUG` auf `False` zu setzen, geben Sie im Bash-Konsolenbildschirm den folgenden Befehl ein:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Starten Sie die Anwendung neu.

Sie können überprüfen, ob der Vorgang erfolgreich war, indem Sie versuchen, einen Datensatz zu öffnen, der nicht existiert (zum Beispiel erstellen Sie ein Genre und erhöhen dann die Zahl in der URL-Leiste, um einen Datensatz zu öffnen, der noch nicht erstellt wurde).
Wenn die Umgebungsvariablen geladen wurden, erhalten Sie eine "Nicht gefunden" Nachricht anstelle einer detaillierten Debug-Spur.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.app/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine komplett kostenlose Starter-Stufe mehr.
> Wir haben diese Anweisungen behalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option darstellt.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway übernimmt den Großteil der Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load-Balancer, Reverse-Proxys usw. kümmern zu müssen, macht es einfacher, loszulegen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für die Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar.
  Während Railway einige exzellente neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele derselben Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten die Zeit investieren, um festzustellen, ob Railway für [Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in einem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie läuft.
Für Django-Apps liefern wir diese Informationen in einer Reihe von Textdateien:

- **runtime.txt**: Gibt die Programmiersprache und Version an, die verwendet werden soll.
- **requirements.txt**: Listet die Python-Abhängigkeiten auf, die für Ihre Website, einschließlich Django, benötigt werden.
- **Procfile**: Eine Liste von Prozessen, die zum Starten der Webanwendung ausgeführt werden sollen.
  Bei Django handelt es sich in der Regel um den Gunicorn-Webanwendungsserver (mit einem `.wsgi` Skript).
- **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) Konfiguration, um unsere Django-Anwendung in der Railway-Umgebung aufzurufen.

Sobald die Anwendung läuft, kann sie sich selbst mit Informationen aus [Umgebungsvariablen](https://docs.railway.app/guides/variables) konfigurieren.
Eine Anwendung, die eine Datenbank verwendet, kann die Adresse beispielsweise mit der Variablen `DATABASE_URL` erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und verwenden ein spezielles [Befehlszeilen-Interface (CLI)](https://docs.railway.app/guides/cli) Tool.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von dem lokalen Zweig auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Um unsere Anwendung auf Railway zum Laufen zu bringen, müssen wir zunächst unsere Django-Webanwendung in einem Git-Repository speichern, die oben genannten Dateien hinzufügen, uns mit einem Datenbank-Add-On verbinden und Änderungen vornehmen, um statische Dateien richtig zu handhaben.
Sobald wir das getan haben, können wir ein Railway-Konto einrichten, den Railway-Client erhalten und unsere Website installieren.

Das ist alles, was Sie an Überblick brauchen, um loszulegen.

### Aktualisieren Sie die App für Railway

Dieser Abschnitt erklärt die Änderungen, die Sie an unsere _LocalLibrary_ Anwendung vornehmen müssen, um sie auf Railway zum Laufen zu bringen.
Wir müssen wirklich nur eine `Procfile` und eine `runtime.txt` Datei erstellen, da fast alles andere bereits vorhanden ist.

Beachten Sie, dass diese Änderungen Sie nicht daran hindern werden, die lokalen Test- und Arbeitsabläufe zu nutzen, die wir bereits gelernt haben.

#### Procfile

Eine _Procfile_ ist der "Einstiegspunkt" der Webanwendung.
Sie listet die Befehle auf, die von Railway ausgeführt werden, um Ihre Site zu starten.

Erstellen Sie die Datei `Procfile` (ohne Dateierweiterung) im Root Ihres GitHub-Repos und kopieren/fügen Sie den folgenden Text ein:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

Das `web:` Präfix sagt Railway, dass dies ein Webprozess ist und HTTP-Verkehr gesendet werden kann.
Wir rufen dann den Django-Migrationsbefehl `python manage.py migrate` auf, um die Datenbanktabellen einzurichten.
Anschließend rufen wir den Django-Befehl `python manage.py collectstatic` auf, um statische Dateien in den von der `STATIC_ROOT` Projekteinstellung definierten Ordner zu sammeln (siehe den Abschnitt [Bereitstellen von statischen Dateien in der Produktion](#bereitstellen_von_statischen_dateien_in_der_produktion) unten).
Schließlich starten wir den _gunicorn_ Prozess, einen beliebten Webanwendungsserver, und übergeben ihm Konfigurationsinformationen im Modul `locallibrary.wsgi` (erstellt mit unserem Anwendungsskelett: **/locallibrary/wsgi.py**).

Sie werden feststellen, dass wir das Projekt bereits so eingerichtet haben, dass es _gunicorn_ enthält und das Bereitstellen von statischen Dateien unterstützt!

Sie können auch die Procfile verwenden, um Worker-Prozesse zu starten oder andere nicht interaktive Aufgaben auszuführen, bevor die Veröffentlichung bereitgestellt wird.

#### Laufzeit

Die **runtime.txt** Datei, wenn definiert, sagt Railway, welche Version von Python verwendet werden soll.
Erstellen Sie die Datei im Root des Repos und fügen Sie den folgenden Text ein:

```plain
python-3.10.2
```

> [!NOTE]
> Hosting-Anbieter unterstützen nicht unbedingt jede Minor-Version der Python-Laufzeit.
> Sie werden in der Regel die am nächsten unterstützte Version zum angegebenen Wert verwenden.

#### Testen Sie erneut und speichern Sie die Änderungen auf GitHub

Bevor Sie fortfahren, testen Sie die Site erneut lokal und stellen Sie sicher, dass sie nicht durch eine der obigen Änderungen beschädigt wurde.
Führen Sie den Entwicklungswebserver wie gewohnt aus und überprüfen Sie dann, ob die Site in Ihrem Browser immer noch wie erwartet funktioniert.

```bash
python3 manage.py runserver
```

Lassen Sie uns als Nächstes die Änderungen zu GitHub `pushen`.
Geben Sie im Terminal (nachdem Sie zu unserem lokalen Repository navigiert sind) die folgenden Befehle ein:

```python
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Erstellen Sie dann einen PR auf GitHub und führen Sie diesen zusammen.

Wir sollten jetzt bereit sein, LocalLibrary auf Railway zu installieren.

### Erhalten Sie ein Railway-Konto

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Loggen Sie sich ein** Link in der oberen Toolbar.
- Wählen Sie im Popup GitHub aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie dann in Ihre E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.app-Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellen auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Seite und dann die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Option, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wird, sowie eine Reihe von Datenbanken.
Wählen Sie **Vom GitHub-Repo bereitstellen**.

![Railway-Website Bildschirm - bereitstellen](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den während der Einrichtung mit Railway geteilten GitHub-Repos werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<Benutzername>/django-locallibrary-tutorial`.

![Railway-Website Bildschirm zeigt einen Dialog an, um ein vorhandenes GitHub-Repository auszuwählen oder ein neues auszuwählen](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie dann Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm - wählen Sie Bereitstellung](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit, wobei der Fortschritt auf der Bereitstellungsregisterkarte angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie unten.

![Railway-Website Bildschirm - Bereitstellung](railway_project_deploy.png)

Sie können auf die Site-URL (oben hervorgehoben) klicken, um die Site in einem Browser zu öffnen (sie wird noch nicht funktionieren, da die Einrichtung nicht abgeschlossen ist).

### ALLOWED_HOSTS und CSRF_TRUSTED_ORIGINS festlegen

Wenn die Site geöffnet wird, sehen Sie an dieser Stelle einen Fehler-Debug-Bildschirm wie unten gezeigt.
Dies ist ein Django-Sicherheitsfehler, der ausgelöst wird, weil unser Quellcode nicht auf einem "erlaubten Host" läuft.

![Eine detaillierte Fehlerseite mit einem vollständigen Rückverfolgungspfad eines ungültigen HTTP_HOST-Headers](site_error_disallowed_host.png)

> [!NOTE]
> Diese Art von Debug-Informationen ist sehr nützlich, wenn Sie sich einrichten, aber ein Sicherheitsrisiko auf einer bereitgestellten Site.
> Wir zeigen Ihnen, wie Sie es deaktivieren können, sobald die Site läuft.

Öffnen Sie **/locallibrary/settings.py** in Ihrem GitHub-Projekt und ändern Sie die Einstellung [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts), um Ihre Railway-Site-URL einzuschließen:

```python
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Da die Anwendungen CSRF-Schutz verwenden, müssen Sie auch den Schlüssel [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins) setzen.
Öffnen Sie **/locallibrary/settings.py** und fügen Sie eine Zeile wie die folgende hinzu:

```python
## For example, for a site URL is at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Speichern Sie dann Ihre Einstellungen und committen Sie sie in Ihr GitHub-Repo (Railway wird automatisch Ihre Anwendung aktualisieren und neu bereitstellen).

### Bereitstellen und Verbinden einer Postgres SQL-Datenbank

Als nächstes müssen wir eine Postgres-Datenbank erstellen und mit der Django-Anwendung verbinden, die wir gerade bereitgestellt haben.
(Wenn Sie die Site jetzt öffnen, erhalten Sie einen neuen Fehler, da die Datenbank nicht zugegriffen werden kann).
Wir werden die Datenbank als Teil des Anwendungsprojekts erstellen, obwohl Sie die Datenbank auch in einem eigenen Projekt erstellen können.

Auf Railway wählen Sie die **Dashboard**-Option aus dem oberen Menü der Seite und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Die Schaltfläche **Einstellungen** kann ausgewählt werden, um Projektweiteneinstellungen zu ändern.
Wählen Sie die Schaltfläche **Neu**, über die Dienste zum Projekt hinzugefügt werden.

![Railway-Projekt mit neuer Dienstschaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie bei der Eingabe der Art des hinzuzufügenden Dienstes **Datenbank** aus:

![Railway-Projekt - wählen Sie Datenbank als neuen Dienst](railway_project_add_database.png)

Wählen Sie dann **PostgreSQL hinzufügen**, um die Datenbank hinzuzufügen

![Railway-Projekt - wählen Sie Postgres als neuen Dienst](railway_project_add_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendungsdienste als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungsdiensten und Postgres-Datenbankdienst](railway_project_two_services.png)

Wählen Sie den Webdienst und dann die Registerkarte _Variablen_ aus.
Wählen Sie **Neue Variable** und dann im _Variablenname_-Feld die Option **Referenz hinzufügen**.
Scrollen Sie nach unten und wählen Sie `DATABASE_URL` (dies ist der Name der Variablen, die wir eingerichtet haben, damit die LocalLibrary es als Umgebungsvariable liest).

![Railway-Website Bildschirm, der eine Auswahl einer DATABASE_URL zeigt](railway_postgresql_connect.png)

Wählen Sie dann die Optionen **Hinzufügen** und schließlich **Bereitstellen** (dies erscheint in einem Popup).
Beachten Sie, dass Sie auch die Postgres-Datenbank öffnen und dann deren Variablen-Registerkarte öffnen und die Variable kopieren könnten.

Wenn Sie das Projekt jetzt öffnen, sollte es genauso angezeigt werden wie lokal.
Beachten Sie jedoch, dass es noch keine Möglichkeit gibt, die Bibliothek mit Daten zu befüllen, da wir noch kein Superuser-Konto erstellt haben.
Das werden wir mit dem [CLI-Tool](https://docs.railway.app/guides/cli) auf unserem lokalen Computer tun.

### Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigeren Operationen sind das Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das Ausführen Ihres Django-Projekts lokal mit denselben Einstellungen, die Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

> [!NOTE]
> Im folgenden Abschnitt verwenden wir `railway login` und `railway link`, um das aktuelle Projekt mit einem Verzeichnis zu verlinken.
> Wenn Sie durch das System abgemeldet werden, müssen Sie beide Befehle erneut aufrufen, um das Projekt neu zu verlinken.

### Superuser konfigurieren

Um einen Superuser zu erstellen, müssen wir den Django-Befehl `createsuperuser` gegen die Produktionsdatenbank aufrufen (dies ist das gleiche Vorgehen, das wir lokal in [Django Tutorial Teil 4: Django Admin Site > Creating a superuser](/de/docs/Learn/Server-side/Django/Admin_site#creating_a_superuser) durchgeführt haben).
Railway bietet keinen direkten Terminalzugriff auf den Server, und wir können diesen Befehl nicht zur [Procfile](#procfile) hinzufügen, da er interaktiv ist.

Was wir tun können, ist dieser Befehl lokal auf unserem Django-Projekt aufzurufen, wenn es mit der _Produktionsdatenbank_ verbunden ist.
Der Railway-Client macht dies einfach, indem er eine Möglichkeit bietet, Befehle lokal mit denselben Umgebungsvariablen wie der Produktionsserver aufzurufen.

Öffnen Sie zuerst ein Terminal oder eine Eingabeaufforderung in einem Git-Clone Ihres lokalen Bibliotheksprojekts.
Melden Sie sich dann mit dem `login` oder `login --browserless` Befehl bei Ihrem Browser-Konto an (folgen Sie den Anweisungen und Aufforderungen des Clients oder der Website, um den Login abzuschließen):

```bash
railway login
```

Sobald Sie eingeloggt sind, verlinken Sie Ihr aktuelles lokales Bibliotheksverzeichnis mit dem assoziierten Railway-Projekt mit dem folgenden Befehl.
Beachten Sie, dass Sie bei der Eingabe möglicherweise ein bestimmtes Projekt auswählen/eingeben müssen:

```bash
railway link
```

Jetzt, da das lokale Verzeichnis und das Projekt _verlinkt_ sind, können Sie das lokale Django-Projekt mit den Einstellungen aus der Produktionsumgebung ausführen.
Vergewissern Sie sich zuerst, dass Ihre normale [Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment) bereit ist.
Rufen Sie dann den folgenden Befehl auf, indem Sie Name, E-Mail und Passwort wie erforderlich eingeben:

```bash
railway run python manage.py createsuperuser
```

Sie sollten jetzt in der Lage sein, den Adminbereich Ihrer Website (`https://[Ihre-url].railway.app/admin/`) zu öffnen und die Datenbank zu befüllen, genau wie in [Django Tutorial Teil 4: Django Admin Site](/de/docs/Learn/Server-side/Django/Admin_site)) dargestellt.

### Konfigurationsvariablen einstellen

Der letzte Schritt ist, die Site sicher zu machen.
Insbesondere müssen wir das Debug-Logging deaktivieren und einen geheimen CSRF-Schlüssel setzen.
Die Arbeit, um die benötigten Werte aus Umgebungsvariablen im Abschnitt [Ihre Website bereit zur Veröffentlichung machen](#so_machen_sie_ihre_website_bereit_zur_veröffentlichung) zu lesen, wurde erledigt (siehe `DJANGO_DEBUG` und `DJANGO_SECRET_KEY`).

Öffnen Sie den Informationsbildschirm für das Projekt und wählen Sie die Registerkarte _Variablen_.
Dies sollte bereits die `DATABASE_URL` enthalten, wie unten gezeigt.

![Railway - Bildschirm zum Hinzufügen einer neuen Variablen](railway_variable_new.png)

Es gibt viele Möglichkeiten, einen kryptografisch geheimen Schlüssel zu generieren.
Eine einfache Möglichkeit ist, den folgenden Python-Befehl auf Ihrem Entwicklungscomputer auszuführen:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Wählen Sie die Schaltfläche **Neue Variable** und geben Sie den Schlüssel `DJANGO_SECRET_KEY` mit Ihrem geheimen Wert ein (wählen Sie dann **Hinzufügen**).
Geben Sie dann den Schlüssel `DJANGO_DEBUG` mit dem Wert `False` ein.
Der finale Satz an Variablen sollte so aussehen:

![Railway-Bildschirm zeigt alle Projektvariablen an](railway_variables_all.png)

### Debugging

Der Railway-Client stellt den logs-Befehl bereit, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll steht auf der Website für jedes Projekt zur Verfügung):

```bash
railway logs
```

Wenn Sie mehr Informationen benötigen, müssen Sie sich mit [Django Logging](https://docs.djangoproject.com/en/5.0/topics/logging/) anfreunden.

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Django-Apps in der Produktion und auch der Reihe von Tutorials zur Arbeit mit Django. Wir hoffen, dass Sie sie nützlich fanden. Sie können sich eine vollständig ausgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/django-locallibrary-tutorial).

Der nächste Schritt besteht darin, unsere letzten Artikel zu lesen und dann die Bewertungsaufgabe abzuschließen.

## Siehe auch

- [Bereitstellen von Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (Django Dokumentation)

  - [Bereitstellungs-Checkliste](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (Django Dokumentation)
  - [Bereitstellen von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (Django Dokumentation)
  - [Wie man mit WSGI bereitstellt](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (Django Dokumentation)
  - [Wie man Django mit Apache und mod_wsgi verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (Django Dokumentation)
  - [Wie man Django mit Gunicorn verwendet](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (Django Dokumentation)

- Railway Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Wie man Django-Anwendungen mit uWSGI und Nginx auf Ubuntu 16.04 bereitstellt](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Andere Digital Ocean Django Community Dokumente](https://www.digitalocean.com/community/tutorials?q=django)

- Heroku Dokumentation (ähnliche Einrichtungskonzepte)

  - [Konfigurieren von Django-Apps für Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku Dokumentation)
  - [Erste Schritte mit Heroku und Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku Dokumentation)
  - [Django und statische Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku Dokumentation)
  - [Nebenläufigkeit und Datenbankverbindungen in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku Dokumentation)
  - [Einschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku Dokumentation)
  - [Bereitstellen von Python-Anwendungen mit Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku Dokumentation)
  - [Bereitstellen von Python- und Django-Apps auf Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
