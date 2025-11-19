---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Nachdem die Formulardaten clientseitig validiert wurden, ist es in Ordnung, das Formular abzuschicken. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir jetzt bereit zum Absenden! Dieser Artikel behandelt, was passiert, wenn ein Benutzer ein Formular absendet — wohin die Daten gehen und wie wir damit umgehen, wenn sie dort ankommen. Außerdem betrachten wir einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        > und grundlegende Kenntnisse von
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps"
          >Server-seitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich
        eines grundlegenden Verständnisses davon, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zunächst besprechen wir, was mit den Daten passiert, wenn ein Formular übermittelt wird.

## Client/Server-Architektur

Im Wesentlichen verwendet das Web eine Client/Server-Architektur, die folgendermaßen zusammengefasst werden kann: Ein Client (meistens ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.), unter Verwendung des [HTTP Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts weiter als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dadurch kann der Benutzer Informationen bereitstellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser [Server-seitige Website-Programmierung: Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) Modul.

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden sollen

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind darauf ausgelegt, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer eine {{Glossary("submit_button", "Submit-Schaltfläche")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält — die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet — `https://www.example.com`:

```html
<form action="https://www.example.com">…</form>
```

Hier verwenden wir eine relative URL — die Daten werden an eine andere URL im selben Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn das {{HTMLElement("form")}}-Element ohne Attribute angegeben wird, wie unten gezeigt, werden die Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Umgekehrt, wenn das Formular auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, jedes Mal, wenn er versucht, die Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der nicht zu Dateityp gehörenden Formular-Controls werden als `name=value`-Paare, verbunden durch Ampersands, an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der serverseitigen Validierung. Der Server antwortet dann in der Regel, indem er die Daten bearbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, und so einen neuen Seitenaufruf auslöst (oder ein Aktualisieren der bestehenden Seite, wenn `action` auf dieselbe Seite zeigt).

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über verschiedene Methoden übertragen werden, wobei die gängigsten die `GET`-Methode und die `POST`-Methode sind.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und betrachten, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die erforderlich sind, damit der Server die spezifische Anfrage verarbeiten kann.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) ist die Methode, mit der der Browser den Server auffordert, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, werden die Daten, wenn ein Formular mit dieser Methode gesendet wird, an die URL angehängt.

Betrachten Sie das folgende Formular:

```html
<form action="https://www.example.com/greet" method="GET">
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

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `https://www.example.com/greet?say=Hi&to=Mom` in der Adressleiste des Browsers, wenn Sie das Formular senden.

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Fehlerseite des Browsers](url-parameters.png)

Die Daten werden als eine Reihe von Name/Wert-Paaren an die URL angehängt. Nachdem die URL-Webadresse geendet hat, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Name/Wert-Paaren, von denen jedes durch ein Ampersand (`&`) getrennt ist. In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: example.com
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu kommunizieren, wenn eine Antwort erforderlich ist, die die im Body der HTTP-Anfrage übermittelten Daten berücksichtigt: "Hey Server, schaue dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten in den Body der HTTP-Anfrage eingefügt.

Schauen wir uns ein Beispiel an — dies ist dasselbe Formular, das wir im `GET`-Abschnitt oben betrachtet haben, aber mit dem [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST` gesetzt.

```html
<form action="https://www.example.com/greet" method="POST">
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

Wenn das Formular mit der `POST`-Methode gesendet wird, erhalten Sie keine Daten, die an die URL angehängt sind, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfrage-Body enthalten sind:

```http
POST / HTTP/2.0
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header gibt den Typ der Ressource an, die an den Server gesendet wird. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel wird Ihre Formulardaten im Chrome-Netzwerk-Tab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklerwerkzeuge.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alles"
4. Wählen Sie "example.com" im "Name"-Tab
5. Wählen Sie "Anfrage" (Firefox) oder "Nutzlast" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im folgenden Bild gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungs-Tab in den Entwicklerwerkzeugen des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, wird bei einer `GET`-Anfrage der Benutzer die Daten in ihrer Adressleiste sehen, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, sonst riskieren Sie, es in der Adressleiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, ist die `POST`-Methode vorzuziehen, da einige Browser die Größe von URLs einschränken. Darüber hinaus begrenzen viele Server die Länge von URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Die Art und Weise, wie Sie auf diese Liste zugreifen, hängt von der Entwicklungsplattform ab, die Sie verwenden, und von speziellen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Raw PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten tun. Sie können sie anzeigen lassen, in einer Datenbank speichern, per E-Mail versenden oder auf eine andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST["say"]);
  $to  = htmlspecialchars($_POST["to"]);

  echo  $say, " ", $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den Daten, die wir gesendet haben. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei in Aktion sehen — die dasselbe Beispielformular enthält, das wir zuvor gesehen haben, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es abgesendet wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den obigen PHP-Codeblock enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", die empfangenen Daten in der Antwort nach dem Absenden von Formulardaten an eine php-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können keinen PHP-Code interpretieren, also bietet der Browser beim Absenden des Formulars einfach an, die PHP-Datei für Sie herunterzuladen. Damit es funktioniert, müssen Sie das Beispiel durch einen PHP-Server laufen lassen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass Sie, wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro-Demozeit abgelaufen ist), möglicherweise Schwierigkeiten haben, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden, dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ wählen können und "Standardversion:" auf "7.2.x" (x wird je nach installierter Version unterschiedlich sein) setzen.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die gesendeten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zur Darstellung der Vorlagen, Behandlung der Formular-Datenübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden Vorlagen, auf die im obigen Code verwiesen wird, sind folgende (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py` Datei befinden, wenn Sie das Beispiel selbst ausprobieren möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/) Vorlage, die im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den Webserver in geschweiften Klammern enthält. `url_for('hello')` bedeutet im Wesentlichen "weiterleiten zu `/hello`, wenn das Formular übermittelt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenelemente rendert, die ihr beim Rendern übergeben wurden. Dies geschieht über die oben gesehene Funktion `hello()`, die ausgeführt wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie ihn einfach direkt in einen Browser laden. Python funktioniert ein wenig anders als PHP — um diesen Code lokal auszuführen, müssen Sie zuerst [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3) und dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann in Ihrem Browser zu `localhost:5042` zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für die Formularbearbeitung verwenden können, darunter Perl, Java, .Net, Ruby usw. Wählen Sie einfach die, die Ihnen am besten gefällt. Es ist jedoch erwähnenswert, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies kompliziert sein kann. Es ist häufiger, eines der vielen hochwertigen Frameworks zu verwenden, die das Arbeiten mit Formularen erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat ein mehr Django-ähnliches Setup)
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

Es ist erwähnenswert, dass selbst mit diesen Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als zu versuchen, alle Funktionen selbst von Grund auf zu schreiben, und es wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die obigen Links bieten Ihnen einige Hilfe, wenn Sie sie lernen möchten.

## Ein spezieller Fall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein besonderer Fall. Dateien sind Binärdaten — oder werden als solche betrachtet —, während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für den Umgang mit Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type` HTTP-Headers anzugeben, der in der Anfrage enthalten ist, die beim Senden des Formulars generiert wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig hat er den Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die Textdaten, die im Formular-Body enthalten sind (falls auch Text in das Formular eingegeben wird).
- Schließen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Controls ein, um Ihren Benutzern das Auswählen der Datei(en) zu ermöglichen, die hochgeladen werden.

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

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie an Sicherheit denken. HTML-Formulare sind bei weitem die häufigsten Angriffspunkte für Server (Stellen, an denen Angriffe erfolgen können). Die Probleme kommen nie von den HTML-Formularen selbst — sie kommen davon, wie der Server Daten verarbeitet.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lernleitfadens behandelt mehrere gängige Angriffe und potenzielle Abwehrmaßnahmen dagegen ausführlich. Sie sollten sich diesen Artikel ansehen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie nie Ihren Benutzern

Wie bekämpfen Sie also diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie beachten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, das umfasst auch Sie selbst; selbst ein vertrauenswürdiger Benutzer könnte gekapert worden sein.

Alle Daten, die zu Ihrem Server gelangen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, die Sie vorsichtig behandeln sollten, variieren je nach dem Kontext, in dem die Daten verwendet werden, und der Serverplattform, die Sie verwenden, aber alle serverseitigen Sprachen haben Funktionen hierfür. Dinge, auf die Sie achten sollten, sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge, um nur das zuzulassen, was erforderlich ist**.
- **Isolieren Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/alle Probleme vermeiden können, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung von einer kompetenten dritten Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie oben angedeutet, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann schwierig sein. Denken Sie einfach daran, dass ein Front-End-Entwickler nicht derjenige sein sollte, der das Sicherheitsmodell der Daten definiert. Es ist möglich, eine [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was client-seitig tatsächlich passiert ist.

Wenn Sie diese Tutorials in der richtigen Reihenfolge durchgearbeitet haben, wissen Sie nun, wie man ein Formular mit Markup und Stil versieht, eine client-seitige Validierung durchführt und haben eine Vorstellung davon, wie ein Formular eingereicht wird.

## Siehe auch

Wenn Sie mehr darüber erfahren möchten, wie Sie eine Webanwendung sichern können, können Sie sich diese Ressourcen genauer ansehen:

- [Server-seitige Website-Programmierung: Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web-Sicherheit von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
