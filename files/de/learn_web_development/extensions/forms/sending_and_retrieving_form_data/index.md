---
title: Absenden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular abzusenden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, das Formular abzusenden! Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten, und wie gehen wir damit um, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Versenden von Formulardaten verbunden sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps"
          >serverseitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was passiert, wenn Formulardaten abgesendet werden, einschließlich eines grundlegenden Verständnisses davon, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst werden wir besprechen, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/), etc.) unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client-Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Serverseitige Website-Programmierung: Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so konzipiert, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer auf einen {{Glossary("submit_button", "Submit-Button")}} klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält — die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL — `https://example.com` — gesendet:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL — die Daten werden an eine andere URL innerhalb desselben Ursprungs gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Wenn das Formular andererseits auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an, jedes Mal, wenn der Benutzer versucht, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerungen werden als `name=value`-Paare an den Server gesendet, die mit Kaufmanns-Und-Zeichen verknüpft sind. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten behandeln kann, einschließlich der Sicherstellung serverseitiger Validierung. Der Server antwortet dann, indem er die Daten meistens verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, wodurch ein neuer Seiten-Ladevorgang (oder ein Neuladen der bestehenden Seite, wenn das `action` auf dieselbe Seite zeigt) ausgelöst wird.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet verschiedene Möglichkeiten zur Durchführung einer Anfrage; HTML-Formulardaten können über eine Reihe unterschiedlicher Methoden übertragen werden, die häufigsten sind die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und betrachten, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe von Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die für den Server zur Verarbeitung der spezifischen Anfrage notwendig sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden bei einer Formulierung, die mit dieser Methode gesendet wird, die Daten an die URL angehängt.

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

Da die `GET`-Methode verwendet wurde, sehen Sie im Browser-Adressfeld die URL `www.foo.com/?say=Hi&to=Mom`, wenn Sie das Formular absenden.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden" Browser-Fehlerseite](url-parameters.png)

Die Daten werden der URL als Reihe von Name/Wert-Paaren angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) ein, gefolgt von den Name/Wert-Paaren, die jeweils durch ein Kaufmanns-Und-Zeichen (`&`) getrennt sind. In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu kommunizieren, wenn eine Antwort angefordert wird, die die im HTTP-Anfrage-Body bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir im `GET`-Abschnitt oben betrachtet haben, aber mit dem `method`-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode gesendet wird, werden keine Daten an die URL angehängt, und die HTTP-Anfrage sieht dann so aus, mit den Daten im Anfrage-Body enthalten:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header zeigt den Typ der an den Server gesendeten Ressource an. Diese Header werden wir später noch besprechen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### HTTP-Anfragen anzeigen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Zum Beispiel werden Ihre Formulardaten wie folgt in der Chrome-Netzwerklasche angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklerwerkzeuge.
2. Wählen Sie "Netzwerk" aus
3. Wählen Sie "Alle" aus
4. Wählen Sie "foo.com" in der "Name"-Lasche aus
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im unteren Bild gezeigt.

![HTTP-Anfragen und Antwortdaten in der Netzwerküberwachungslasche in den Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, sieht der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie sie in der URL-Leiste anzeigen würden, was sehr unsicher wäre.
2. Wenn Sie eine große Menge Daten versenden müssen, ist die `POST`-Methode zu bevorzugen, da einige Browser die Größen von URLs beschränken. Darüber hinaus beschränken viele Server die Längen von URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, erhält der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu extrahieren. Der Zugriff auf diese Liste hängt von der Entwicklungsplattform ab, die Sie verwenden, sowie von den spezifischen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, nimmt das folgende Beispiel einfach die Daten und zeigt sie dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder anderweitig verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in Aktion in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) sehen, das dasselbe Beispiel-Formular enthält, das wir zuvor gesehen haben, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es abgeschickt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den in obigem Block gesehenen PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", den empfangenen Daten in der Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn es lokal in einen Browser geladen wird — Browser können PHP-Code nicht interpretieren, sodass der Browser beim Absenden des Formulars einfach anbietet, die PHP-Datei herunterzuladen. Um es zum Laufen zu bringen, müssen Sie ein Beispiel über einen PHP-Server jeglicher Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, wenn Sie MAMP verwenden, aber nicht MAMP Pro installiert haben (oder wenn die MAMP Pro-Demoversion abgelaufen ist), dass es schwierig sein kann, es zum Laufen zu bringen. Wir haben festgestellt, dass Sie die MAMP-App laden und dann im Menü die Optionen _MAMP_ > _Einstellungen_ > _PHP_ auswählen und "Standardversion:" auf "7.2.x" setzen sollten (x variiert je nach installierter Version), um es wieder zum Laufen zu bringen.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die gesendeten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Vorlagen, zum Verarbeiten der Formulardatenübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden Vorlagen, auf die im obigen Code verwiesen wird, sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im gleichen Verzeichnis wie die Datei `python-example.py` befinden, wenn Sie das Beispiel selbst ausprobieren möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, aber mit dem `action`-Attribut auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Wesentlichen HTML ist, aber Aufrufe des Python-Codes enthalten kann, der den Webserver ausführt, der in geschweiften Klammern enthalten ist. `url_for('hello')` bedeutet im Wesentlichen "umleiten zu `/hello`, wenn das Formular abgeschickt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenstücke rendert, die an sie übergeben werden, wenn sie gerendert wird. Dies erfolgt über die oben gesehene `hello()`-Funktion, die aufgerufen wird, wenn die `/hello`-URL aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert etwas anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3) und dann Flask mit `pip3 install flask` installieren. Danach sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann im Browser zu `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularbearbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die aus, die Ihnen am besten gefällt. Es ist jedoch anzumerken, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist häufiger, eines der vielen hochwertigen Frameworks zu verwenden, die den Umgang mit Formularen erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (vom selben Team wie web2py entwickelt, hat eine eher Django-ähnliche Struktur)
- Node.js
  - [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
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

Es sei darauf hingewiesen, dass die Arbeit mit Formularen auch unter Verwendung dieser Frameworks nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionen selbst von Grund auf neu zu schreiben und wird Ihnen eine Menge Zeit sparen.

> [!NOTE]
> Es liegt jenseits des Umfangs dieses Artikels, Ihnen Programmiersprachen oder -frameworks für den Server beizubringen. Die oben genannten Links bieten Hilfe, wenn Sie sie lernen möchten.

## Ein Sonderfall: Dateien versenden

Das Versenden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Handhabung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in der Anfrage enthalten ist, die beim Absenden des Formulars generiert wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet wird. Standardmäßig ist der Wert `application/x-www-form-urlencoded`. Das bedeutet in menschlichen Worten: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden — einen für jede Datei plus einen für die Textdaten, die im Formularbody enthalten sind (falls der Text ebenfalls ins Formular eingegeben wurde).
- Fügen Sie einen oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente hinzu, um Ihren Benutzern die Auswahl der Datei(en) zu ermöglichen, die hochgeladen werden sollen.

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
> Server können so konfiguriert werden, dass sie eine Größenbeschränkung für Dateien und HTTP-Anfragen haben, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffsvektoren für Server (Punkte, an denen Angriffe auftreten können). Die Probleme entstehen nie durch die HTML-Formulare selbst — sie entstehen durch die Art und Weise, wie der Server mit Daten umgeht.

Der Artikel [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lernmoduls beschreibt mehrere häufige Angriffe und mögliche Abwehrmaßnahmen im Detail. Sie sollten sich diesen Artikel ansehen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Trauen Sie niemals Ihren Benutzern

Wie bekämpft man diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie beachten sollten. Die wichtigste Regel ist: Trauen Sie niemals Ihren Benutzern, einschließlich Ihrer selbst; selbst ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die an Ihren Server gelangen, müssen geprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, auf die Sie achten sollten, variieren je nachdem, in welchem Kontext die Daten verwendet werden und welche Serverplattform Sie verwenden, aber alle serverseitigen Sprachen haben Funktionen dafür. Achten Sie auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge, um nur das Nötigste zuzulassen**.
- **Sandboxen Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder, noch besser, über eine völlig andere Domain.

Wenn Sie sich an diese drei Regeln halten, sollten Sie in der Lage sein, viele/most Probleme zu vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente Drittpartei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie bereits erwähnt, ist das Senden von Formulardaten einfach, aber das Sichern einer Anwendung kann schwierig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, eine [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht trauen, da er keinen Weg hat, wirklich zu wissen, was auf der Client-Seite geschehen ist.

Wenn Sie diese Tutorials der Reihe nach durcharbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und stylen, eine Client-seitige Validierung durchführen und haben eine Vorstellung davon, wie Sie ein Formular absenden.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie in diese Ressourcen eintauchen:

- [Serverseitige Website-Programmierung: Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web-Sicherheit von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
