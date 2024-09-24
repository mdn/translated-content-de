---
title: Senden von Formulardaten
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular zu übermitteln. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zur Übermittlung! Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Versenden von Formulardaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn/Server-side/First_steps"
          >serverseitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich eines grundlegenden Verständnisses der Datenverarbeitung auf dem Server.
      </td>
    </tr>
  </tbody>
</table>

Zuerst besprechen wir, was mit den Daten passiert, wenn ein Formular übermittelt wird.

## Client-Server-Architektur

Grundsätzlich verwendet das Web eine Client-Server-Architektur, die folgendermaßen zusammengefasst werden kann: Ein Client (meist ein Webbrowser) sendet eine Anfrage an einen Server (meist ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.) über das [HTTP-Protokoll](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client-Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dadurch kann der Benutzer Informationen bereitstellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Clients-Server-Architekturen funktionieren, lesen Sie unser [Server-seitige Website-Programmierung Erste Schritte](/de/docs/Learn/Server-side/First_steps)-Modul.

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden sollen

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden sollen. Alle seine Attribute sind dafür ausgelegt, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer einen {{Glossary("submit_button", "Submit-Button")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben ist, werden die Daten an die URL der Seite gesendet, die das Formular enthält — die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL — `https://example.com` — gesendet:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL — die Daten werden an eine andere URL im selben Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn das {{HTMLElement("form")}}-Element ohne Attribute angegeben wird, werden die Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS (sichere HTTP)-Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wurde. Wenn das Formular jedoch auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser jedes Mal, wenn der Benutzer Daten senden möchte, eine Sicherheitswarnung an, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerelemente werden als `name=value`-Paare, die mit Ampersands verbunden sind, an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich einer serverseitigen Validierung. Der Server antwortet dann, bearbeitet die Daten und lädt die URL, die durch das `action`-Attribut definiert ist, wodurch ein neuer Seitenaufruf erfolgt (oder ein Refresh der vorhandenen Seite, wenn das `action` auf dieselbe Seite verweist).

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, auf welche Weise Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage auszuführen; HTML-Formulardaten können über verschiedene Methoden übertragen werden, am häufigsten sind dies die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, gehen wir einen Schritt zurück und betrachten, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der eine Reihe globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die der Server benötigt, um die spezifische Anfrage zu verarbeiten.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden die Daten, wenn ein Formular mit dieser Methode gesendet wird, an die URL angehängt.

Betrachten Sie das folgende Formular:

```html
<form action="http://www.foo.com" method="GET">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `www.foo.com/?say=Hi&to=Mom` in der Adressleiste des Browsers erscheinen, wenn Sie das Formular abschicken.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Fehlerseite des Browsers](url-parameters.png)

Die Daten werden als eine Reihe von Namens-/Wert-Paaren an die URL angehängt. Nachdem die URL-Adresse beendet ist, fügen wir ein Fragezeichen (`?`) ein, gefolgt von den Namens-/Wert-Paaren, die jeweils durch ein Ampersand (`&`) getrennt sind. In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht so aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn die `action`-URL-Struktur keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Methods/POST) ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er um eine Antwort bittet, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir im Abschnitt zur `GET`-Methode betrachtet haben, jedoch mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST` gesetzt.

```html
<form action="http://www.foo.com" method="POST">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

Wenn das Formular mit der `POST`-Methode abgeschickt wird, erhalten Sie keine Daten, die an die URL angehängt sind, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfragekörper enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später näher besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird verwendet, wenn die `action`-URL-Struktur keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### Betrachten von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie das [Firefox Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten im Chrome-Netzwerktab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im Tab "Name"
5. Wählen Sie "Anfrage" (Firefox) oder "Nutzlast" (Chrome/Edge)

Dann können Sie die Formulardaten abrufen, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungs-Tab in den Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, wird der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste sehen, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie riskieren, diese Daten in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, ist die `POST`-Methode vorzuziehen, da einige Browser die Größen von URLs begrenzen. Außerdem begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Egal, welche HTTP-Methode Sie wählen, der Server erhält einen String, der geparst wird, um die Daten als Liste von Namens-/Wert-Paaren zu bekommen. Wie Sie auf diese Liste zugreifen, hängt von der Entwicklungsplattform ab, die Sie verwenden, und von den spezifischen Frameworks, die Sie möglicherweise verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in Aktion sehen in unserer Beispieldatei [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) — sie enthält dasselbe Formularbeispiel, das wir vorher gesehen haben, mit `method` auf `POST` und `action` auf `php-example.php`. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den oben gezeigten PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Ansonsten leere Webseite mit "hi mom", die Daten, die als Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit der POST-Methode empfangen wurden](php-result.png)

> [!NOTE]
> Dieses Beispiel wird nicht funktionieren, wenn Sie es lokal in einem Browser laden — Browser können keinen PHP-Code interpretieren, daher wird der Browser, wenn das Formular übermittelt wird, einfach anbieten, die PHP-Datei für Sie herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [AMPPS](https://ampps.com/downloads/) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass wenn Sie MAMP verwenden, MAMP Pro jedoch nicht installiert haben (oder wenn die MAMP Pro-Demoversion abgelaufen ist), es Probleme geben kann, es zum Funktionieren zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App starten und dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ auswählen und die "Standard Version:" auf "7.2.x" (der x-Wert hängt von der installierten Version ab) setzen müssen.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die gesendeten Daten auf einer Webseite anzeigen. Dies nutzt das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Templates, zur Verarbeitung der Formulardatenübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
```

Die beiden in dem obigen Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, falls Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt zur [POST-Methode](#die_post-methode) gesehen haben, aber mit dem `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Wesentlichen HTML ist, aber Aufrufe zum Python-Code enthalten kann, der den auf dem Webserver laufenden Code darstellt, enthalten in geschweiften Klammern. `url_for('hello')` bedeutet im Grunde "leite zu `/hello` weiter, wenn das Formular gesendet wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenstücke rendert, die an sie übergeben werden, wenn sie gerendert wird. Dies geschieht über die oben gesehenen `hello()`-Funktion, die ausgeführt wird, wenn die `/hello`-URL aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie ihn direkt in einen Browser laden. Python funktioniert ein bisschen anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3) und dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann im Browser auf `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularverarbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die aus, die Ihnen am besten gefällt. Allerdings ist es erwähnenswert, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Formularverarbeitung erleichtern, wie:

- Python
  - [Django](/de/docs/Learn/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am leichtesten anzufangen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat ein mehr Django-ähnliches Setup)
- Node.js
  - [Express](/de/docs/Learn/Server-side/Express_Nodejs)
  - [Next.js](https://nextjs.org/) (für React-Anwendungen)
  - [Nuxt](https://nuxt.com/) (für Vue-Anwendungen)
  - [Remix](https://remix.run/)
- PHP
  - [Laravel](https://laravel.com/)
  - [Laminas](https://getlaminas.org/) (früher Zend Framework)
  - [Symfony](https://symfony.com/)
- Ruby
  - [Ruby On Rails](https://rubyonrails.org/)
- Java
  - [Spring Boot](https://spring.io/guides/gs/handling-form-submission/)

Es ist erwähnenswert, dass selbst bei der Verwendung dieser Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher als zu versuchen, die gesamte Funktionalität selbst von Grund auf neu zu schreiben, und es wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Scopes dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die oben genannten Links bieten Ihnen einige Hilfen, falls Sie sie erlernen möchten.

## Ein Sonderfall: Senden von Dateien

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet —, während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es besondere Anforderungen für den Umgang mit Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in die Anfrage aufgenommen wird, die beim Absenden des Formulars generiert wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. Dies bedeutet in menschlichen Worten: "Das sind Formulardaten, die in URL-Parameter kodiert sind."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Datei-Inhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die in den Formular-Body eingegebenen Textdaten (falls der Text ebenfalls in das Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente hinzu, um Ihren Benutzern die Auswahl der hochzuladenen Datei(en) zu ermöglichen.

Zum Beispiel:

```html
<form method="post" action="https://www.foo.com" enctype="multipart/form-data">
  <div>
    <label for="file">Choose a file</label>
    <input type="file" id="file" name="myFile" />
  </div>
  <div>
    <button>Send the file</button>
  </div>
</form>
```

> [!NOTE]
> Server können konfiguriert werden, um die Größe von Dateien und HTTP-Anfragen zu begrenzen, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffsvektoren auf Server (stellen, an denen Angriffe stattfinden können). Die Probleme kommen nie von den HTML-Formularen selbst — sie kommen von der Art und Weise, wie der Server die Daten verarbeitet.

Der Artikel [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) unseres [serverseitigen](/de/docs/Learn/Server-side) Lernbereichs diskutiert mehrere häufige Angriffe und mögliche Abwehrmaßnahmen gegen sie im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpfen Sie diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln zu beachten. Die wichtigste Regel ist: Vertrauen Sie niemals, niemals Ihren Benutzern, einschließlich sich selbst; selbst ein vertrauenswürdiger Benutzer könnte gekapert worden sein.

Alle Daten, die an Ihren Server kommen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, bei denen Sie vorsichtig sein sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der Serverplattform, die Sie verwenden, aber alle serverseitigen Sprachen haben Funktionen dafür. Achten Sie vor allem auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn/JavaScript) oder [SQL](https://de.wikipedia.org/wiki/SQL)-Befehle).
- **Beschränken Sie die einzugehenden Datenmengen auf das, was notwendig ist**.
- **Sandboxen Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie in der Lage sein, viele/den meisten Problemen aus dem Weg zu gehen, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente dritte Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber das Sichern einer Anwendung kann schwierig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten festlegen sollte. Es ist möglich, [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite passiert ist.

Wenn Sie sich durch diese Tutorials durcharbeiten, wissen Sie jetzt, wie man ein Formular markiert und stylt, Client-seitige Validierung durchführt und haben eine Vorstellung vom Absenden eines Formulars.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung lernen möchten, können Sie sich mit diesen Ressourcen befassen:

- [Server-seitige Website-Programmierung Erste Schritte](/de/docs/Learn/Server-side/First_steps)
- [Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Kompatibilitätstabelle für Formularkomponenten-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
