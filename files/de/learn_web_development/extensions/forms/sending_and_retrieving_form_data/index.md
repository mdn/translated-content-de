---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten clientseitig validiert wurden, können Sie das Formular senden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zum Absenden! In diesem Artikel sehen wir uns an, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten und wie behandeln wir sie, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsaspekte, die mit dem Senden von Formulardaten verbunden sind.

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
        Verstehen, was passiert, wenn Formulardaten gesendet werden, sowie ein grundlegendes Verständnis davon bekommen, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst besprechen wir, was mit den Daten passiert, wenn ein Formular gesendet wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.) unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage unter Verwendung desselben Protokolls.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine bequeme benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um ein besseres Verständnis dafür zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Erste Schritte in der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Clientseite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind darauf ausgelegt, die Konfiguration der Anfrage festzulegen, die gesendet wird, wenn ein Benutzer auf einen {{Glossary("submit_button", "Submit-Button")}} klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben ist, werden die Daten zur URL der Seite gesendet, die das Formular enthält — also zur aktuellen Seite.

In diesem Beispiel werden die Daten an eine absolute URL — `https://www.example.com` — gesendet:

```html
<form action="https://www.example.com">…</form>
```

Hier verwenden wir eine relative URL — die Daten werden an eine andere URL innerhalb des gleichen Ursprungs gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten gezeigt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet ist, die über HTTP aufgerufen wird. Wenn das Formular jedoch auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an, die den Benutzer darauf hinweist, dass die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerungen werden als Paare `name=value` an den Server gesendet, die durch kaufmännische Unds (`&`) verbunden sind. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich serverseitiger Validierung. Der Server antwortet dann, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, was zu einem neuen Seitenaufruf führt (oder zu einer Aktualisierung der vorhandenen Seite, wenn `action` auf dieselbe Seite verweist).

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über mehrere verschiedene Methoden übertragen werden, wobei `GET` und `POST` die gebräuchlichsten sind.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, gehen wir einen Schritt zurück und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe von globalen Metadaten über die Fähigkeiten des Browsers enthält, und einem Körper, der Informationen enthalten kann, die für den Server notwendig sind, um die spezifische Anfrage zu bearbeiten.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) ist die Methode, die der Browser verwendet, um den Server darum zu bitten, eine gegebene Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Körper. Da der Körper leer ist, werden die Daten, wenn ein Formular mit dieser Methode gesendet wird, an die URL angehängt.

Betrachten Sie das folgende Formular:

```html
<form action="https://www.example.com" method="GET">
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

Da die `GET`-Methode verwendet wurde, erscheint die URL `https://www.example.com/?say=Hi&to=Mom` in der Adressleiste des Browsers, wenn Sie das Formular absenden.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode](url-parameters.png)

Die Daten werden als eine Reihe von name/value-Paaren an die URL angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) ein, gefolgt von den name/value-Paaren, die jeweils durch ein kaufmännisches Und (`&`) getrennt sind. In diesem Fall übermitteln wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: example.com
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er um eine Antwort bittet, die die im HTTP-Anfragekörper bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Körper der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir im Abschnitt über die `GET`-Methode betrachtet haben, aber mit dem [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST` gesetzt.

```html
<form action="https://www.example.com" method="POST">
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

Wenn das Formular mit der `POST`-Methode gesendet wird, werden keine Daten an die URL angehängt, und die HTTP-Anfrage sieht folgendermaßen aus, wobei die Daten im Anfragekörper enthalten sind:

```http
POST / HTTP/2.0
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Körpers an, und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später noch einmal besprechen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfragetext verarbeiten kann, z.B. `data:`.

### HTTP-Anfragen ansehen

HTTP-Anfragen werden nie dem Benutzer angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Zum Beispiel werden Ihre Formulardaten wie folgt im Chrome-Netzwerktab angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "example.com" im "Name"-Tab
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im folgenden Bild gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab in den Entwicklertools des Browsers](network-monitor.png)

Das Einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie bereits erwähnt, sieht der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenstück) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie sonst riskieren, dass es in der URL-Leiste angezeigt wird, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größe von URLs begrenzen. Außerdem begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Serverseite: Abrufen der Daten

Welches HTTP-Verfahren Sie auch wählen, der Server erhält einen String, der analysiert wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Wie Sie auf diese Liste zugreifen, hängt von der von Ihnen verwendeten Entwicklungsplattform und von spezifischen Frameworks ab, die Sie möglicherweise verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, dann nimmt das folgende Beispiel einfach die Daten und zeigt sie dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Möglicherweise zeigen Sie sie an, speichern Sie in einer Datenbank, senden Sie per E-Mail oder verarbeiten Sie auf andere Weise.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST["say"]);
  $to  = htmlspecialchars($_POST["to"]);

  echo  $say, " ", $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) sehen — das enthält dasselbe Beispielformular wie oben gesehen, mit der `method` `POST` und einer `action` von `php-example.php`. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den obigen PHP-Code enthält. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", die Empfangsdaten in der Antwort nach dem Absenden der Formulardaten an eine php-Datei mit POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einem Browser laden — Browser können keinen PHP-Code interpretieren, sodass der Browser beim Absenden des Formulars einfach anbieten wird, Ihnen die PHP-Datei herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass Sie möglicherweise Schwierigkeiten haben, es zum Laufen zu bringen, wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro Demo-Zeitprobe abgelaufen ist). Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ wählen und "Standardversion:" auf "7.2.x" setzen können (x wird je nach installierter Version variieren).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie Python verwenden würden, um dasselbe zu tun — die übermittelten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Vorlagen, zur Behandlung der Formularübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden oben im Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, falls Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, aber mit `action` auf `\{{ url_for('hello') }}`. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der auf dem in geschweiften Klammern geschriebenen Webserver läuft. `url_for('hello')` bedeutet im Grunde "Umleitung zu `/hello`, wenn das Formular übermittelt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenstücke rendert, die ihm beim Rendern übergeben werden. Dies geschieht über die `hello()`-Funktion wie oben gesehen, die ausgeführt wird, wenn die `/hello`-URL navigiert wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert ein wenig anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. Danach sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann in Ihrem Browser zu `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularbehandlung verwenden können, darunter Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige, die Ihnen am besten gefällt. Es ist jedoch zu beachten, dass es sehr selten ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die den Umgang mit Formularen erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu starten)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat ein mehr Django-ähnliches Setup)
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

Es ist zu beachten, dass der Umgang mit Formularen selbst unter Verwendung dieser Frameworks nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionalitäten komplett selbst von Grund auf zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen eine serverseitige Sprache oder ein Framework beizubringen. Die oben genannten Links werden Ihnen dabei etwas Hilfe bieten, wenn Sie diese lernen möchten.

## Ein besonderer Fall: Senden von Dateien

Das Senden von Dateien mit HTML-Formularen ist ein besonderer Fall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es besondere Anforderungen für die Handhabung von Binärdaten.

### Das enctype-Attribut

Mit diesem Attribut können Sie den Wert des HTTP-Headers `Content-Type` festlegen, der in der beim Absenden des Formulars generierten Anfrage enthalten ist. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden. Ein Teil für jede Datei plus einen für die im Formularkörper enthaltenen Textdaten (falls der Text auch in das Formular eingegeben wird).
- Fügen Sie eine oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Steuerelemente hinzu, damit Ihre Benutzer die Dateien auswählen können, die hochgeladen werden sollen.

Zum Beispiel:

```html
<form
  method="post"
  action="https://example.com/upload"
  enctype="multipart/form-data">
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

## Sicherheitsfragen

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind mit Abstand die häufigsten Angriffspunkte für Server. Die Probleme kommen nie von den HTML-Formularen selbst — sie kommen davon, wie der Server die Daten behandelt.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres [Server-seitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lernprogramms behandelt mehrere gängige Angriffe und mögliche Abwehrmaßnahmen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Nutzern

Wie bekämpfen Sie also diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie im Hinterkopf behalten sollten. Die wichtigste Regel ist: Vertrauen Sie niemals Ihren Nutzern, einschließlich sich selbst; selbst ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die an Ihren Server gelangen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, bei denen Sie vorsichtig sein sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und je nach der von Ihnen eingesetzten Serverplattform. Alle serverseitigen Sprachen verfügen jedoch über Funktionen dafür. Achten Sie auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Beschränken Sie die eingehende Datenmenge, um nur das zuzulassen, was notwendig ist**.
- **Beschränken Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie in der Lage sein, viele/außergewöhnlichste Probleme zu vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente dritte Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie oben angedeutet, ist das Senden von Formulardaten einfach, aber das Sicherstellen einer Anwendung kann knifflig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige sein sollte, der das Sicherheitsmodell der Daten definiert. Es ist möglich, eine [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Clientseite passiert ist.

Wenn Sie diese Tutorials in Reihenfolge durchgearbeitet haben, wissen Sie jetzt, wie man ein Formular markiert und gestaltet, wie man eine client-seitige Validierung durchführt und haben eine Vorstellung davon, wie man ein Formular absendet.

## Siehe auch

Wenn Sie mehr darüber lernen möchten, wie Sie eine Webanwendung sichern können, könnten Ihnen diese Ressourcen helfen:

- [Erste Schritte in der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web-Sicherheit von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
