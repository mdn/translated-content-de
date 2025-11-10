---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, kann das Formular übermittelt werden. Und da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zur Übermittlung! Dieser Artikel beleuchtet, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten und wie gehen wir damit um, wenn sie dort ankommen? Außerdem betrachten wir einige Sicherheitsaspekte im Zusammenhang mit dem Senden von Formulardaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps"
          >serverseitige Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich einer
        grundlegenden Idee, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst besprechen wir, was mit den Daten passiert, wenn ein Formular übermittelt wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.) mithilfe des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Die ersten Schritte der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element legt fest, wie die Daten gesendet werden sollen. Alle seine Attribute sind so gestaltet, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer auf einen {{Glossary("submit_button", "Submit-Button")}} klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method).

### Das Action-Attribut

Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – also die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL im gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn Sie das {{HTMLElement("form")}} ohne Attribute angeben, werden die Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS (sicheres HTTP)-Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, auf die mit HTTP zugegriffen wird. Andererseits zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, wenn Sie eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angeben, selbst wenn das Formular auf einer sicheren Seite gehostet wird, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Dateiformular-Steuerelemente werden als `name=value`-Paare an den Server gesendet, verbunden mit kaufmännischen Und-Zeichen. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der serverseitigen Validierung. Der Server antwortet dann in der Regel, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, was einen neuen Seitenaufruf (oder eine Aktualisierung der vorhandenen Seite, wenn `action` auf dieselbe Seite verweist) verursacht.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das Method-Attribut

Das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, um eine Anfrage durchzuführen; HTML-Formulardaten können auf verschiedene Arten übermittelt werden, am häufigsten mit der `GET`-Methode und der `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe von Metadaten über die Fähigkeiten des Browsers enthält, und einem Körper, der Informationen enthalten kann, die für die Bearbeitung der spezifischen Anfrage durch den Server erforderlich sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) wird vom Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Körper. Da der Körper leer ist, werden bei einem Formular, das mit dieser Methode gesendet wird, die Daten an die URL angehängt.

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

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `www.foo.com/?say=Hi&to=Mom` in der Adressleiste des Browsers, wenn Sie das Formular abschicken.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode und einer "Server nicht gefunden"-Fehlerseite des Browsers](url-parameters.png)

Die Daten werden der URL als eine Reihe von Namen/Wert-Paaren angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Namen/Wert-Paaren, wobei jeder durch ein kaufmännisches Und-Zeichen (`&`) getrennt ist. In diesem Fall übermitteln wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht so aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu kommunizieren, wenn eine Antwort angefordert wird, die die im Körper der HTTP-Anfrage enthaltenen Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Körper der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an – dies ist dasselbe Formular, das wir im `GET`-Abschnitt oben gesehen haben, aber mit dem [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das auf `POST` gesetzt ist.

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

Wenn das Formular unter Verwendung der `POST`-Methode übermittelt wird, erhalten Sie keine an die URL angehängten Daten, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfragekörper enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Körpers an, und der `Content-Type`-Header zeigt den Typ der an den Server gesendeten Ressource an. Diese Header werden wir später noch besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfragenkörper verarbeiten kann, z.B. `data:`.

### Betrachten von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten wie folgt im Chrome-Netzwerk-Tab angezeigt. Nachdem das Formular übermittelt wurde:

1. Öffnen Sie die Entwickler-Tools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im "Name"-Tab
5. Wählen Sie "Request" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab in den Entwicklerwerkzeugen des Browsers](network-monitor.png)

Das Einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, werden bei einer `GET`-Anfrage die Daten im URL-Feld des Benutzers angezeigt, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie riskieren, es im URL-Feld anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größe von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Welche HTTP-Methode Sie auch immer wählen, der Server empfängt einen String, der geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Wie Sie auf diese Liste zugreifen, hängt von der Entwicklungsplattform ab, die Sie verwenden, und von den speziellen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten an, die an den Benutzer gesandt wurden. Natürlich bleibt es Ihnen überlassen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail senden oder auf eine andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST["say"]);
  $to  = htmlspecialchars($_POST["to"]);

  echo  $say, " ", $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei in Aktion sehen — die dasselbe Formular wie oben, mit einer `method` von `POST` und einem `action` von `php-example.php` enthält. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), die den oben gezeigten PHP-Code enthält. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Andernfalls leere Webseite mit "hi mom", den empfangenen Daten als Antwort nach dem Senden von Formulardaten an eine PHP-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können keinen PHP-Code interpretieren, sodass der Browser, wenn das Formular übermittelt wird, nur anbietet, die PHP-Datei für Sie herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server ausführen. Gute Optionen für lokale PHP-Tests sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass Sie, wenn Sie MAMP verwenden, aber nicht MAMP Pro installiert haben (oder wenn die MAMP Pro Demo-Testversion abgelaufen ist), möglicherweise Schwierigkeiten haben, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, dann die Menüpunkte _MAMP_ > _Einstellungen_ > _PHP_ auswählen und "Standardversion:" auf "7.2.x" setzen können (x variiert je nachdem, welche Version Sie installiert haben).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die übermittelten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) für das Rendern der Templates, den Umgang mit der Formularübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die zwei Templates, auf die im obigen Code verwiesen wird, sehen wie folgt aus (diese müssen sich in einem Unterverzeichnis namens `templates` im gleichen Verzeichnis wie die Datei `python-example.py` befinden, wenn Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/)-Template, das im Wesentlichen HTML sein kann, aber Aufrufe des Python-Codes, der den Webserver enthält, in geschweifte Klammern enthalten kann. `url_for('hello')` bedeutet im Wesentlichen "zu `/hello` weiterleiten, wenn das Formular übermittelt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Dieses Template enthält nur eine Zeile, die die beiden Datenstücke rendert, die ihm beim Rendern übergeben werden. Dies wird über die oben gesehene `hello()`-Funktion ausgeführt, die aufgerufen wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie ihn einfach direkt in einen Browser laden. Python funktioniert ein wenig anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann in Ihrem Browser zu `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für die Formularbearbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die, die Ihnen am meisten zusagt. Es ist jedoch erwähnenswert, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Üblicher ist es, eines der vielen hochwertigen Frameworks zu verwenden, die die Formularbearbeitung erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat ein eher Django-ähnliches Setup)
- Node.js
  - [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - [Next.js](https://nextjs.org/) (für React-Apps)
  - [Nuxt](https://nuxt.com/) (für Vue-Apps)
  - [Remix](https://remix.run/)
- PHP
  - [Laravel](https://laravel.com/)
  - [Laminas](https://getlaminas.org/) (ehemals Zend Framework)
  - [Symfony](https://symfony.com/)
- Ruby
  - [Ruby On Rails](https://rubyonrails.org/)
- Java
  - [Spring Boot](https://spring.io/guides/gs/handling-form-submission/)

Es ist erwähnenswert, dass das Arbeiten mit Formularen auch unter Verwendung dieser Frameworks nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionalitäten selbst von Grund auf neu zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Rahmens dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die obigen Links bieten Ihnen einige Hilfestellung, falls Sie sie lernen möchten.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es besondere Anforderungen für den Umgang mit Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in der bei der Formularübermittlung generierten Anfrage enthalten ist. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet das: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte ausführen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einer für jede Datei plus einer für die im Formularkörper enthaltenen Textdaten (falls der Text auch im Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Steuerelemente hinzu, um Ihren Benutzern zu ermöglichen, die Datei(en) auszuwählen, die hochgeladen werden sollen.

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
> Server können so konfiguriert werden, dass eine Größenbeschränkung für Dateien und HTTP-Anfragen gilt, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffsvektoren für Server (Orte, an denen Angriffe auftreten können). Die Probleme entstehen nie durch die HTML-Formulare selbst — sondern dadurch, wie der Server die Daten verarbeitet.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres Lernbereichs [serverseitige Entwicklung](/de/docs/Learn_web_development/Extensions/Server-side) behandelt mehrere häufige Angriffe und mögliche Abwehrmaßnahmen gegen diese im Detail. Sie sollten sich diesen Artikel anschauen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpft man diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt einige Regeln, die Sie beachten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, einschließlich sich selbst; sogar ein vertrauenswürdiger Benutzer könnte entführt worden sein.

Alle Daten, die an Ihren Server gelangen, müssen überprüft und bereinigt werden. Immer. Ohne Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, bei denen Sie vorsichtig sein sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der Serverplattform, die Sie verwenden, aber alle serverseitigen Sprachen haben Funktionen dafür. Dinge, auf die Sie achten sollten, sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting)- oder [SQL](https://de.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die einzugebende Datenmenge, um nur das zuzulassen, was notwendig ist**.
- **Isolieren Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diesen drei Regeln folgen, sollten Sie in der Lage sein, viele/ die meisten Probleme zu vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung von einer kompetenten Drittpartei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir bereits angedeutet haben, ist das Senden von Formulardaten einfach, aber das Sichern einer Anwendung kann knifflig sein. Denken Sie einfach daran, dass ein Frontend-Entwickler nicht derjenige sein sollte, der das Sicherheitsmodell der Daten definiert. Es ist möglich, eine [clientseitige Formular-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann diesem Validierungsprozess nicht vertrauen, weil er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite passiert ist.

Wenn Sie diese Tutorials in der Reihenfolge durchgearbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und stylen, eine clientseitige Validierung durchführen und haben eine Vorstellung davon, wie Sie ein Formular übermitteln.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie in diesen Ressourcen tiefer eintauchen:

- [Die ersten Schritte der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
