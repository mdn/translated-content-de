---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, kann das Formular übermittelt werden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zur Übermittlung! Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular abschickt – wohin gehen die Daten und wie gehen wir damit um, sobald sie dort ankommen? Wir schauen uns auch einige Sicherheitsbedenken an, die mit dem Senden von Formulardaten verbunden sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        > und Grundkenntnisse über
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

Zuerst werden wir besprechen, was mit den Daten passiert, wenn ein Formular übermittelt wird.

## Client/Server-Architektur

In seiner grundlegendsten Form verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meist ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.), unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage unter Verwendung desselben Protokolls.

![Ein grundlegendes Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dadurch kann der Benutzer Informationen bereitstellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um ein besseres Verständnis dafür zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul über [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so konzipiert, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer auf einen {{Glossary("submit_button", "submit button")}} klickt. Die zwei wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method).

### Das Action-Attribut

Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL – `https://example.com` – gesendet:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL am gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten gezeigt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular selbst auf einer unsicheren Seite gehostet wird, auf die mithilfe von HTTP zugegriffen wird. Auf der anderen Seite, wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, jedes Mal, wenn sie versuchen, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der nicht-Datei-Formularkontrollen werden als `name=value`-Paare, die durch Ampersands verbunden sind, an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der serverseitigen Validierung. Der Server antwortet dann, verarbeitet die Daten im Allgemeinen und lädt die URL, die durch das `action`-Attribut definiert wird, sodass eine neue Seite geladen wird (oder eine Aktualisierung der vorhandenen Seite erfolgt, wenn das `action`-Attribut auf dieselbe Seite verweist).

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das Method-Attribut

Das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über eine Reihe verschiedener Methoden übertragen werden, die am häufigsten verwendeten sind die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, betrachten wir zurück und untersuchen [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Menge globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die für die Verarbeitung der spezifischen Anfrage durch den Server notwendig sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) wird vom Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden, wenn ein Formular mit dieser Methode gesendet wird, die an den Server gesendeten Daten an die URL angehängt.

Berücksichtigen Sie das folgende Formular:

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

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer Browser-Fehlerseite "Server nicht gefunden"](url-parameters.png)

Die Daten werden an die URL als eine Serie von Namen/Wert-Paaren angehängt. Nachdem die Webadresse der URL beendet ist, fügen wir nach einem Fragezeichen (`?`) die Namen/Wert-Paare hinzu, jedes getrennt durch ein Ampersand (`&`). In diesem Fall übergeben wir zwei Datenpakete an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er um eine Antwort bittet, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schauen Sie sich diese Daten an und senden Sie mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an – dies ist das gleiche Formular, das wir im `GET`-Abschnitt oben gesehen haben, aber mit dem [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode übermittelt wird, werden keine Daten an die URL angehängt, und die HTTP-Anfrage sieht folgendermaßen aus, wobei die Daten stattdessen im Anfragebody enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header zeigt die Größe des Bodys an und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfragebody verarbeiten kann, z.B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Ihr Formulardaten werden im Chrome-Netzwerktab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im Tab "Name"
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Dann können Sie die Formulardaten abrufen, wie unten im Bild gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab im Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie wir oben erwähnt haben, sieht der Benutzer bei einer `GET`-Anfrage die Daten in ihrer URL-Leiste, aber bei einer `POST`-Anfrage nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie sonst riskieren, sie in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, ist die `POST`-Methode vorzuziehen, da einige Browser die Größe von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge von URLs, die sie akzeptieren.

## Auf der Serverseite: Die Daten abrufen

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server eine Zeichenfolge, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Der Zugriff auf diese Liste hängt von der Entwicklungsplattform ab, die Sie verwenden, und den spezifischen Frameworks, die Sie damit möglicherweise verwenden.

### Beispiel: Raw PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten, die der Benutzer übermittelt hat. Natürlich bleibt es Ihnen überlassen, was Sie mit den Daten tun. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail senden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den Daten, die wir gesendet haben. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei – die dasselbe Beispielformular wie oben mit einer `method` von `POST` und einer `action` von `php-example.php` enthält. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den oben gezeigten PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", die empfangene Daten als Antwort nach Absenden der Formulardaten an eine PHP-Datei mit POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einem Browser laden – Browser können PHP-Code nicht interpretieren, also wird der Browser Ihnen beim Absenden des Formulars einfach anbieten, die PHP-Datei herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel auf einem PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie ebenfalls, dass Sie MAMP installieren müssen, aber kein MAMP Pro installiert haben (oder wenn die MAMP Pro Testzeit abgelaufen ist), könnte es sein, dass Sie Probleme bekommen, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ auswählen und "Standardversion:" auf "7.2.x" setzen können (x wird je nach installierter Version unterschiedlich sein).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden – die übermittelten Daten auf einer Webseite anzeigen. Hier wird das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Vorlagen, zur Formularübermittlung usw. verwendet (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die zwei in dem obigen Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit dem `action` auf `\{{ url_for('hello') }}`. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den Webserver in geschweiften Klammern ausführt. `url_for('hello')` bedeutet im Grunde "leite zu `/hello` weiter, wenn das Formular gesendet wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die zwei Datenstücke rendert, die bei der Ausführung an sie übergeben werden. Dies erfolgt über die obige `hello()`-Funktion, die ausgeführt wird, wenn die `/hello` URL aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert ein wenig anders als PHP – um diesen Code lokal auszuführen, müssen Sie zuerst [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. Zu diesem Zeitpunkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen, dann zu `localhost:5042` in Ihrem Browser zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für das Formularhandling verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige aus, die Ihnen am besten gefällt. Es sei jedoch darauf hingewiesen, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die das Handhaben von Formularen vereinfachen, wie z.B.:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten, um anzufangen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat eine eher Django-ähnliche Einrichtung)
- Node.js
  - [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
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

Es ist wichtig zu beachten, dass die Arbeit mit Formularen selbst mit diesen Frameworks nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alles selbst von Grund auf neu zu schreiben, und erspart Ihnen viel Zeit.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen Programmiersprachen oder Frameworks für die Server-Seite beizubringen. Die oben genannten Links bieten Ihnen jedoch einige Hilfestellungen, falls Sie sie lernen möchten.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten – oder werden als solche angesehen – während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Behandlung von Binärdaten.

### Das Enctype-Attribut

Dieses Attribut lässt Sie den Wert des `Content-Type`-HTTP-Headers angeben, der in der beim Absenden des Formulars generierten Anfrage enthalten ist. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die im Formularbody enthaltenen Textdaten (wenn der Text ebenfalls in das Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Steuerelemente hinzu, damit Ihre Benutzer die(s) Datei(en) auswählen können, die hochgeladen werden sollen.

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

Jedes Mal, wenn Sie Daten zu einem Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Server-Angriffsvektoren (Orte, an denen Angriffe auftreten können). Die Probleme stammen niemals von den HTML-Formularen selbst – sie kommen von der Art und Weise, wie der Server Daten behandelt.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres Lernmoduls [serverseitig](/de/docs/Learn_web_development/Extensions/Server-side) behandelt detailliert mehrere häufige Angriffe und mögliche Abwehrmaßnahmen dagegen. Sie sollten sich diesen Artikel anschauen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpfen Sie nun diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt einige Regeln, die Sie beachten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, einschließlich Ihnen selbst; selbst ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die zu Ihrem Server kommen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die speziellen Zeichen, mit denen Sie vorsichtig sein sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der von Ihnen verwendeten Serverplattform, aber alle serverseitigen Sprachen haben dafür geeignete Funktionen. Zu beachten sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge auf das Notwendige**.
- **Isolieren Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und gewähren Sie Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine komplett andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/alle Probleme vermeiden können, allerdings ist es eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente Drittpartei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie oben angedeutet, ist das Senden von Formulardaten einfach, doch das Sichern einer Anwendung kann knifflig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was clientseitig tatsächlich passiert ist.

Wenn Sie diese Tutorials in chronologischer Reihenfolge durchgearbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und stylen, eine clientseitige Validierung durchführen, und haben eine Vorstellung davon, wie ein Formular übermittelt wird.

## Siehe auch

Wenn Sie mehr darüber lernen möchten, wie Sie eine Webanwendung sichern, können Sie in diese Ressourcen eintauchen:

- [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security by Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
