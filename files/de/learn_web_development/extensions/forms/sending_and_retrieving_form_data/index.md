---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten auf der Clientseite validiert wurden, ist es in Ordnung, das Formular einzureichen. Und da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, einzureichen! Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten, und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        > und Grundkenntnisse in
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps"
          >serverseitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich eines grundlegenden Verständnisses darüber, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst werden wir darüber sprechen, was mit den Daten passiert, wenn ein Formular eingereicht wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.), unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein grundlegendes Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Methode, um eine HTTP-Anfrage zu konfigurieren, die Daten an einen Server sendet. Dies ermöglicht dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Clientseite: Festlegen, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind darauf ausgelegt, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer einen {{Glossary("submit_button", "submit button")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben ist, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL im selben Ursprungsort gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten gezeigt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der das Formular vorhanden ist:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS- (sicheres HTTP-) Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Wenn das Formular jedoch auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser dem Benutzer jedes Mal eine Sicherheitswarnung an, wenn er versucht, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Datei-freien Formularelemente werden als `name=value`-Paare an den Server gesendet, verbunden mit Kaufmanns-Und-Zeichen. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich einer serverseitigen Validierung. Der Server antwortet dann normalerweise, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, was einen neuen Seitenaufruf (oder eine Aktualisierung der bestehenden Seite, wenn `action` auf dieselbe Seite zeigt) verursacht.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie die Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage auszuführen; HTML-Formulardaten können über mehrere Methoden übertragen werden, die häufigsten sind die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie im Web auf eine Ressource zugreifen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der eine Reihe globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Körper, der Informationen enthalten kann, die für die Verarbeitung der spezifischen Anfrage durch den Server erforderlich sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource abrufen." In diesem Fall sendet der Browser einen leeren Körper. Da der Körper leer ist, wenn ein Formular mit dieser Methode gesendet wird, werden die an den Server gesendeten Daten an die URL angehängt.

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

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Fehlerseite im Browser](url-parameters.png)

Die Daten werden der URL als eine Serie von Name/Wert-Paaren angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Name/Wert-Paaren, jeder getrennt durch ein Kaufmanns-Und-Zeichen (`&`). In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, welches den Wert `Hi` hat
- `to`, welches den Wert `Mom` hat

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Methods/POST) ist ein wenig anders. Sie ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er um eine Antwort bittet, die die im Körper der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten dem Körper der HTTP-Anfrage hinzugefügt.

Schauen wir uns ein Beispiel an – dies ist das gleiche Formular, das wir uns im Abschnitt `GET` angesehen haben, aber mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode gesendet wird, werden keine Daten der URL angehängt, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfragekörper enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Körpers an, und der `Content-Type`-Header gibt den Typ der Ressource an, die an den Server gesendet wurde. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfragekörper verarbeiten kann, z.B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome-Entwicklertools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten wie folgt im Chrome-Netzwerk-Tab angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwickler-Tools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im "Name"-Tab
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im untenstehenden Bild gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab in den Entwicklerwerkzeugen des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie wir oben erwähnt haben, wird der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste sehen, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenelement) senden müssen, verwenden Sie niemals die `GET`-Methode, da sonst die Gefahr besteht, dass es in der URL-Leiste angezeigt wird, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größen von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Serverseite: Daten abrufen

Unabhängig davon, welche HTTP-Methode Sie wählen, erhält der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu bekommen. Die Art und Weise, wie Sie auf diese Liste zugreifen, hängt von der von Ihnen verwendeten Entwicklungsplattform und den speziellen Frameworks ab, die Sie möglicherweise mit ihr verwenden.

### Beispiel: Roh-PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, nimmt das folgende Beispiel einfach die Daten und zeigt sie dem Benutzer an. Natürlich bleibt es Ihnen überlassen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail senden oder auf eine andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) sehen — welches dasselbe Beispielformular enthält, das wir zuvor gesehen haben, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es eingereicht wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den im obigen Block gesehenen PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Andernfalls leere Webseite mit "hi mom", den empfangenen Daten als Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden – Browser können PHP-Code nicht interpretieren, sodass der Browser beim Absenden des Formulars nur anbietet, die PHP-Datei für Sie herunterzuladen. Damit es funktioniert, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass Sie, wenn Sie MAMP verwenden, aber nicht MAMP Pro installiert haben (oder wenn die MAMP Pro-Demozeit abgelaufen ist), möglicherweise Probleme haben, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden und dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ auswählen und "Standardversion:" auf "7.2.x" setzen können (x unterscheidet sich je nach der installierten Version).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden — die übermittelten Daten auf einer Webseite anzeigen. Dabei wird das [Flask-Framework](https://flask.palletsprojects.com/) verwendet, um die Vorlagen zu rendern, die Formulardatenübermittlung zu handhaben usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden im obigen Code erwähnten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post_method) gesehen haben, aber mit der `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den in geschweiften Klammern enthaltenen Webserver betreibt. `url_for('hello')` bedeutet im Grunde "umleiten zu `/hello`, wenn das Formular eingereicht wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenstücke darstellt, die ihr beim Rendern übergeben werden. Dies geschieht über die oben gesehene Funktion `hello()`, die ausgeführt wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch hier funktioniert dieser Code nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert etwas anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen und dann zu `localhost:5042` in Ihrem Browser zu navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für die Formularbearbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die aus, die Ihnen am besten gefällt. Es sei jedoch darauf hingewiesen, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Formularbearbeitung erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu starten)
  - [py4web](https://py4web.com/) (geschrieben von den gleichen Entwicklern wie web2py, hat ein Setup ähnlich wie Django)
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

Es ist erwähnenswert, dass selbst mit diesen Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionalitäten selbst von Grund auf zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Sie in serverseitige Sprachen oder Frameworks einzuführen. Die obigen Links geben Ihnen einige Hilfestellungen, sollten Sie sie lernen wollen.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Verarbeitung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in der beim Einreichen des Formulars generierten Anfrage enthalten ist. Dieser Header ist sehr wichtig, denn er teilt dem Server mit, welche Art von Daten gesendet werden. Standardmäßig lautet sein Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet das: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da der Dateiinhalt nicht in URL-Parameter eingefügt werden kann.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die Textdaten, die im Formularkörper enthalten sind (wenn der Text ebenfalls in das Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente ein, damit Ihre Benutzer die Datei(en) auswählen können, die hochgeladen werden sollen.

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
> Server können mit einem Größenlimit für Dateien und HTTP-Anfragen konfiguriert werden, um Missbrauch zu verhindern.

## Sicherheitsfragen

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffspunkte für Server (Orte, an denen Angriffe stattfinden können). Die Probleme entstehen nie durch die HTML-Formulare selbst – sie entstehen durch die Art und Weise, wie der Server Daten verwaltet.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres [Server-seitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lern-Themas behandelt mehrere mögliche Angriffe und potenzielle Abwehrmaßnahmen dagegen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie nie Ihren Benutzern

Wie bekämpfen Sie also diese Bedrohungen? Dies ist ein Thema weit über diesen Leitfaden hinaus, aber es gibt einige Regeln, die zu beachten sind. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, einschließlich Ihnen selbst; selbst ein vertrauenswürdiger Benutzer könnte gekapert worden sein.

Alle Daten, die zu Ihrem Server kommen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Escapen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, bei denen Sie vorsichtig sein sollten, variieren je nachdem, in welchem Kontext die Daten verwendet werden und welche Serverplattform Sie einsetzen, aber alle serverseitigen Sprachen haben Funktionen dafür. Achten Sie auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie z.B. [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge so, dass nur das Notwendige zugelassen wird**.
- **Sandkasten für hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine komplett andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/mehrere Probleme vermeiden können, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente dritte Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann schwierig sein. Denken Sie daran, dass ein Front-End-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, eine [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Clientseite passiert ist.

Wenn Sie diese Tutorials der Reihe nach durchgearbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und gestalten, eine Client-seitige Validierung durchführen und haben eine Vorstellung davon, wie Sie ein Formular absenden.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie in diese Ressourcen eintauchen:

- [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
