---
title: Senden von Formulardaten
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular abzusenden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, es abzusenden! Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten, und wie behandeln wir sie, wenn sie dort ankommen? Wir betrachten auch einige Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> und
        <a href="/de/docs/Learn/Server-side/First_steps"
          >Server-seitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was passiert, wenn Formulardaten abgesendet werden, einschließlich eines grundlegenden Verständnisses davon, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zunächst besprechen wir, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (in der Regel ein Webbrowser) sendet eine Anfrage an einen Server (meistens einen Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) etc.), unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage unter Verwendung desselben Protokolls.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine bequeme, benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Server-seitige Website-Programmierung – Erste Schritte](/de/docs/Learn/Server-side/First_steps).

## Auf der Clientseite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so gestaltet, dass sie Ihnen ermöglichen, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer einen {{Glossary("Submit-Button")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL auf dem gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn es ohne Attribute angegeben wird, wie unten gezeigt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL zu spezifizieren, die das HTTPS (sicheres HTTP)-Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Andererseits: Wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser dem Benutzer jedes Mal eine Sicherheitswarnung an, wenn sie versuchen, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularelemente werden an den Server als `name=value`-Paare gesendet, die mit Ampersands verbunden sind. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der Server-seitigen Validierung. Der Server antwortet dann im Allgemeinen, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, was zu einem neuen Seitenladen (oder einem Aktualisieren der vorhandenen Seite, wenn das `action` auf dieselbe Seite zeigt) führt.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie die Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage auszuführen; HTML-Formulardaten können über eine Reihe verschiedener Methoden übertragen werden, wobei die am häufigsten verwendeten die `GET`-Methode und die `POST`-Methode sind.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie auf eine Ressource im Web zugreifen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der eine Reihe globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die notwendig sind, damit der Server die spezifische Anfrage verarbeitet.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: „Hey Server, ich möchte diese Ressource erhalten.“ In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden die Daten, wenn ein Formular mit dieser Methode gesendet wird, an die URL angehängt.

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

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `www.foo.com/?say=Hi&to=Mom` in der Adressleiste des Browsers erscheinen, wenn Sie das Formular absenden.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer „Server nicht gefunden“-Fehlerseite des Browsers](url-parameters.png)

Die Daten werden an die URL als eine Reihe von Namen/Wert-Paaren angehängt. Nachdem die Webadresse der URL beendet ist, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Namen/Wert-Paaren, wobei jedes Paar durch ein Ampersand (`&`) getrennt wird. In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er eine Antwort anfordert, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: „Hey Server, schauen Sie sich diese Daten an und senden Sie mir ein passendes Ergebnis zurück.“ Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir uns im Abschnitt `GET` angesehen haben, jedoch mit dem `method`-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode abgesendet wird, erhalten Sie keine an die URL angehängten Daten, und die HTTP-Anfrage sieht etwa so aus, wobei die Daten stattdessen im Body der Anfrage enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Das `Content-Length`-Header gibt die Größe des Bodys an, und das `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Request Body verarbeiten kann, z.B. `data:`.

### Anzeige von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome-Entwicklertools](https://developer.chrome.com/docs/devtools/) verwenden). Zum Beispiel werden Ihre Formulardaten im Chrome-Netzwerktab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie „Netzwerk“.
3. Wählen Sie „Alle“.
4. Wählen Sie „foo.com“ im Tab „Name“.
5. Wählen Sie „Anfrage“ (Firefox) oder „Payload“ (Chrome/Edge).

Sie können dann die Formulardaten erhalten, wie im folgenden Bild gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab in den Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, wird bei einer `GET`-Anfrage der Benutzer die Daten in seiner URL-Leiste sehen, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenstück) senden müssen, verwenden Sie niemals die `GET`-Methode oder riskieren Sie, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größen der URLs begrenzen. Außerdem begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Serverseite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Der Zugriff auf diese Liste hängt von der von Ihnen verwendeten Entwicklungsplattform und von spezifischen Frameworks ab, die Sie verwenden.

### Beispiel: Raw PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten an, die an den Benutzer gesendet wurden. Natürlich liegt es an Ihnen, was Sie mit den Daten tun. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // Die globale $_POST-Variable ermöglicht es Ihnen, auf die mit der POST-Methode gesendeten Daten nach Namen zuzugreifen
  // Um auf die mit der GET-Methode gesendeten Daten zuzugreifen, können Sie $_GET verwenden
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie sehen dies in Aktion in unserer Datei [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) — die dasselbe Beispielformular wie zuvor enthält, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), die den PHP-Code enthält, den wir im obigen Block gesehen haben. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Ansonsten leere Webseite mit "hi mom", den empfangenen Daten als Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es in einem Browser lokal laden — Browser können PHP-Code nicht interpretieren, also wird der Browser beim Absenden des Formulars nur anbieten, die PHP-Datei für Sie herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testen sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [AMPPS](https://ampps.com/downloads/) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass, wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro-Demoversion abgelaufen ist), Sie Schwierigkeiten haben könnten, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, dann die Menüoptionen _MAMP_ > _Preferences_ > _PHP_ wählen und "Standard Version:" auf "7.2.x" setzen (x wird je nachdem variieren, welche Version Sie installiert haben).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden – die eingesendeten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Templates, Handhaben der Formulareinreichung, usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden Templates, die im obigen Code referenziert werden, sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im gleichen Verzeichnis wie die Datei `python-example.py` befinden, wenn Sie versuchen, das Beispiel selbst auszuführen):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/) Template, das im Wesentlichen HTML ist, jedoch Aufrufe des Python-Codes enthalten kann, der den Webserver in geschweiften Klammern ausführt. `url_for('hello')` bedeutet im Wesentlichen „weiterleiten an `/hello`, wenn das Formular eingereicht wird“.
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Dieses Template enthält nur eine Zeile, die die beiden Datenstücke rendert, die beim Rendern an es übergeben werden. Dies geschieht über die Funktion `hello()`, die oben zu sehen ist und die ausgeführt wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch hier funktioniert dieser Code nicht, wenn Sie ihn direkt in einem Browser zu laden versuchen. Python funktioniert ein bisschen anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3) und dann Flask mit `pip3 install flask` installieren. An dieser Stelle sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen, und dann zu `localhost:5042` in Ihrem Browser zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularverarbeitung verwenden können, darunter Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige aus, die Ihnen am besten gefällt. Es ist jedoch erwähnenswert, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies knifflig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Arbeit mit Formularen erleichtern, wie:

- Python
  - [Django](/de/docs/Learn/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat eine mehr Django-ähnliche Einrichtung)
- Node.js
  - [Express](/de/docs/Learn/Server-side/Express_Nodejs)
  - [Next.js](https://nextjs.org/) (für React-Anwendungen)
  - [Nuxt](https://nuxt.com/) (für Vue-Anwendungen)
  - [Remix](https://remix.run/)
- PHP
  - [Laravel](https://laravel.com/)
  - [Laminas](https://getlaminas.org/) (ehemals Zend Framework)
  - [Symfony](https://symfony.com/)
- Ruby
  - [Ruby On Rails](https://rubyonrails.org/)
- Java
  - [Spring Boot](https://spring.io/guides/gs/handling-form-submission/)

Es ist erwähnenswert, dass selbst mit diesen Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionalitäten selbst von Grund auf neu zu schreiben, und es wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen irgendeine serverseitige Sprache oder Frameworks beizubringen. Die obigen Links geben Ihnen einige Hilfen, sollten Sie sie lernen wollen.

## Ein besonderer Fall: Senden von Dateien

Das Senden von Dateien mit HTML-Formularen ist ein besonderer Fall. Dateien sind Binärdaten – oder werden als solche betrachtet – während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Handhabung von Binärdaten.

### Das enctype Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers zu spezifizieren, der in der bei der Formularübermittlung generierten Anfrage enthalten ist. Dieses Header ist sehr wichtig, da es dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig lautet sein Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet das: „Dies sind Formulardaten, die in URL-Parameter codiert wurden.“

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die Textdaten, die im Formularkörper enthalten sind (wenn der Text ebenfalls in das Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Felder hinzu, damit Ihre Benutzer die Datei(en) auswählen können, die hochgeladen werden sollen.

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
> Server können mit einer Größenbeschränkung für Dateien und HTTP-Anfragen konfiguriert werden, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffspunkte für Server (Stellen, an denen Angriffe auftreten können). Die Probleme kommen nie von den HTML-Formularen selbst – sie kommen von der Art und Weise, wie der Server Daten verarbeitet.

Der [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)-Artikel unseres [Server-seitigen Lernprogramms](/de/docs/Learn/Server-side) erörtert mehrere gängige Angriffe und mögliche Verteidigungen dagegen im Detail. Sie sollten sich diesen Artikel ansehen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpfen Sie also diese Bedrohungen? Dieses Thema geht weit über dieses Handbuch hinaus, aber es gibt einige Regeln, die Sie im Hinterkopf behalten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals, niemals Ihren Benutzern, einschließlich sich selbst; selbst ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die an Ihren Server kommen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahmen.

- **Vermeiden Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, auf die Sie vorsichtig sein sollten, variieren je nachdem, in welchem Kontext die Daten verwendet werden und welche Serverplattform Sie verwenden, aber alle serverseitigen Sprachen haben dafür Funktionen. Dinge, auf die man achten sollte, sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn/JavaScript) oder [SQL](https://en.wikipedia.org/wiki/SQL) Befehle).
- **Begrenzen Sie die ankommende Datenmenge, um nur das zuzulassen, was notwendig ist**.
- **Isolieren Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder, noch besser, über eine ganz andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie in der Lage sein, viele/meisten Probleme zu vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung von einem kompetenten Dritten durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben schon angedeutet haben, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann knifflig sein. Denken Sie einfach daran, dass ein Frontend-Entwickler nicht derjenige sein sollte, der das Sicherheitsmodell der Daten definiert. Es ist möglich, eine [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, weil er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite passiert ist.

Wenn Sie diese Tutorials in der Reihenfolge durchgearbeitet haben, wissen Sie nun, wie man ein Formular auszeichnet und stilisiert, die Client-seitige Validierung durchführt und wie man ein Formular absendet.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie in diese Ressourcen eintauchen:

- [Server-seitige Website-Programmierung – Erste Schritte](/de/docs/Learn/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security by Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
