---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular abzusenden. Und da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, es abzusenden! Dieser Artikel behandelt, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten und wie gehen wir damit um, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

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
        Zu verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich eines grundlegenden Verständnisses, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zunächst besprechen wir, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client/Server-Architektur

Im Grunde genommen verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens einen Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/), etc.) unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server antwortet auf die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts weiter als eine bequeme, benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Serverseitige Website-Programmierung Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind darauf ausgelegt, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer einen {{Glossary("submit_button", "Submit-Button")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben ist, werden die Daten an die URL der Seite gesendet, die das Formular enthält — die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet — `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier nutzen wir eine relative URL — die Daten werden an eine andere URL im gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wird ein Formular wie unten ohne Attribute festgelegt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS (sicheres HTTP) Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP abgerufen wird. Andererseits, wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angeben, zeigen alle Browser dem Benutzer jedes Mal, wenn sie versuchen, Daten zu senden, eine Sicherheitswarnung, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerelemente werden als `name=value`-Paare mit Ampersands an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der serverseitigen Validierung. Der Server antwortet dann in der Regel, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert wird, was zu einem neuen Seitenaufruf (oder einer Aktualisierung der vorhandenen Seite, wenn das `action` auf dieselbe Seite verweist) führt.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage auszuführen; HTML-Formulardaten können über eine Reihe verschiedener Methoden übertragen werden, wobei die gebräuchlichsten die `GET`-Methode und die `POST`-Methode sind.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurücktreten und uns ansehen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie auf eine Ressource im Web zugreifen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Menge globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die für die Bearbeitung der spezifischen Anfrage durch den Server erforderlich sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) wird vom Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden die Daten, wenn ein Formular mit dieser Methode gesendet wird, an die URL angehängt.

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

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `www.foo.com/?say=Hi&to=Mom` in der Adressleiste des Browsers, wenn Sie das Formular absenden.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Browserfehlerseite](url-parameters.png)

Die Daten werden der URL als eine Reihe von Namens-/Wertepaaren angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) gefolgt von den Namens-/Wertepaaren hinzu, wobei jedes Paar durch ein Ampersand (`&`) getrennt wird. In diesem Fall übermitteln wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht wie folgt aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er eine Antwort anfordert, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir oben im `GET`-Abschnitt angesehen haben, aber mit dem [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode abgesendet wird, erhalten Sie keine Daten, die an die URL angehängt werden, und die HTTP-Anfrage sieht so aus, mit den Daten im Anfrage-Body:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Request-Body verarbeiten kann, z.B. `data:`.

### Betrachtung von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten wie folgt im Chrome-Netzwerktab angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklerwerkzeuge.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im Register "Name"
5. Wählen Sie "Anfrage" (Firefox) oder "Nutzlast" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerkmonitor-Tab in den Entwicklerwerkzeugen des Browsers](network-monitor.png)

Das einzig Sichtbare für den Benutzer ist die aufgerufene URL. Wie oben erwähnt, sieht der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes empfindliches Datenstück) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie riskieren, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, ist die `POST`-Methode zu bevorzugen, da einige Browser die Größe von URLs begrenzen. Außerdem begrenzen viele Server die Länge der akzeptierten URLs.

## Auf der Server-Seite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server einen String, der analysiert wird, um die Daten als Liste von Schlüssel-/Wertepaaren zu erhalten. Wie Sie auf diese Liste zugreifen, hängt von der von Ihnen verwendeten Entwicklungsplattform und den spezifischen Frameworks ab, die Sie möglicherweise verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, so nimmt das folgende Beispiel einfach die Daten und zeigt sie dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei — die dasselbe Beispiel-Formular wie zuvor gesehen enthält, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es gesendet wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den im obigen Block gezeigten PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "Hi Mom", die empfangenen Daten als Antwort nach dem Senden von Formulardaten an eine PHP-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können PHP-Code nicht interpretieren, daher bietet der Browser einfach an, die PHP-Datei für Sie herunterzuladen, wenn das Formular gesendet wird. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro Demo-Testversion abgelaufen ist), Sie Schwierigkeiten haben könnten, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App öffnen, dann die Menüpunkte _MAMP_ > _Preferences_ > _PHP_ auswählen und "Standard Version:" auf "7.2.x" (x hängt davon ab, welche Version Sie installiert haben) setzen können.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die übermittelten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) für das Rendering von Templates, das Handling der Formularübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden im obigen Code referenzierten Templates sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie versuchen, das Beispiel selbst auszuführen):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post_methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/)-Template, das im Wesentlichen HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den auf dem Webserver laufenden Code in geschweiften Klammern enthält. `url_for('hello')` sagt im Wesentlichen "umleiten zu `/hello`, wenn das Formular übermittelt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Dieses Template enthält nur eine Zeile, die die zwei Datenstücke rendert, die beim Rendern an es übergeben werden. Dies geschieht über die obige `hello()`-Funktion, die ausgeführt wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch hier funktioniert dieser Code nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert etwas anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann installieren Sie Flask mit `pip3 install flask`. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen, dann in Ihrem Browser zu `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularverarbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige, die Ihnen am besten gefällt. Es ist jedoch zu beachten, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Formularverarbeitung erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat ein Django-ähnlicheres Setup)
- Node.js
  - [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - [Next.js](https://nextjs.org/) (für React-Apps)
  - [Nuxt](https://nuxt.com/) (für Vue-Apps)
  - [Remix](https://remix.run/)
- PHP
  - [Laravel](https://laravel.com/)
  - [Laminas](https://getlaminas.org/) (früher Zend Framework)
  - [Symfony](https://symfony.com/)
- Ruby
  - [Ruby On Rails](https://rubyonrails.org/)
- Java
  - [Spring Boot](https://spring.io/guides/gs/handling-form-submission/)

Es ist erwähnenswert, dass selbst mit diesen Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als wenn Sie versuchen, alle Funktionen selbst von Grund auf zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es übersteigt den Umfang dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die oben genannten Links werden Ihnen einige Hilfestellungen geben, falls Sie sie erlernen möchten.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Verarbeitung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in der beim Absenden des Formulars generierten Anfrage enthalten ist. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet wird. Standardmäßig lautet sein Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter codiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte durchführen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die Textdaten, die im Formularkörper enthalten sind (wenn der Text ebenfalls im Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Steuerelemente hinzu, damit Ihre Benutzer die Datei(en) auswählen können, die hochgeladen werden sollen.

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

## Sicherheitsaspekte

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit in Betracht ziehen. HTML-Formulare sind mit Abstand die häufigsten Angriffspunkte auf Server (Stellen, an denen Angriffe stattfinden können). Die Probleme gehen nie von den HTML-Formularen selbst aus — sie entstehen daraus, wie der Server mit den Daten umgeht.

Der [Website Security](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)-Artikel unseres [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lernbereichs behandelt mehrere häufige Angriffe und potentielle Abwehrmechanismen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Also, wie bekämpfen Sie diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt einige Regeln, die Sie im Hinterkopf behalten sollten. Die wichtigste Regel ist: Vertrauen Sie niemals, überhaupt nie Ihren Benutzern, einschließlich sich selbst; sogar ein vertrauenswürdiger Benutzer könnte entführt worden sein.

Alle Daten, die an Ihren Server kommen, müssen überprüft und bereinigt werden. Immer. Ohne Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, auf die Sie achten sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der von Ihnen verwendeten Serverplattform, aber alle serverseitigen Sprachen haben dafür Funktionen. Dinge, auf die man achten sollten, sind Zeichenfolgen, die wie ausführbarer Code aussehen (z. B. [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge, um nur das Nötige zu erlauben**.
- **Sandkasten für hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/mehrere Probleme vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente dritte Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann schwierig sein. Denken Sie immer daran, dass ein Frontend-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite passiert ist.

Wenn Sie diese Tutorials der Reihe nach durchgearbeitet haben, wissen Sie jetzt, wie man ein Formular markiert und gestaltet, clientseitige Validierung durchführt und eine Vorstellung davon bekommt, wie man ein Formular absendet.

## Siehe auch

Wenn Sie mehr darüber erfahren möchten, wie man eine Webanwendung sichert, können Sie diese Ressourcen erkunden:

- [Serverseitige Website-Programmierung Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
