---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Sobald die Formulardaten clientseitig validiert wurden, können Sie das Formular übermitteln. Und da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zur Übermittlung! In diesem Artikel betrachten wir, was passiert, wenn ein Benutzer ein Formular absendet – wohin die Daten gehen und wie wir sie dort handhaben. Außerdem betrachten wir einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

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

Zuerst werden wir besprechen, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.) unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein grundlegendes Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts weiter als eine benutzerfreundliche Methode, um eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um ein besseres Verständnis für Client-Server-Architekturen zu bekommen, lesen Sie unser Modul [Erste Schritte mit serverseitiger Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Clientseite: Definition, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so gestaltet, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer auf einen {{Glossary("submit_button", "Absende-Button")}} klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das Action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wird dieses Attribut nicht angegeben, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL am selben Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn es ohne Attribute angegeben wird, wie unten gezeigt, werden die Daten des {{HTMLElement("form")}}-Elements an dieselbe Seite gesendet, auf der das Formular vorhanden ist:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. In diesem Fall werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Auf der anderen Seite, wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, jedes Mal, wenn er versucht, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der nicht-dateibasierten Formularsteuerelemente werden an den Server als `name=value`-Paare gesendet, die mit Ampersands verbunden sind. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung serverseitiger Validierung. Der Server antwortet dann, indem er die Daten verarbeitet und die durch das `action`-Attribut definierte URL lädt, was einen neuen Seitenaufruf (oder eine Aktualisierung der vorhandenen Seite, wenn das `action` auf dieselbe Seite zeigt) verursacht.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das Method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet verschiedene Möglichkeiten, eine Anfrage zu tätigen; HTML-Formulardaten können über eine Reihe verschiedener Methoden übertragen werden, die am häufigsten verwendeten sind die `GET`- und `POST`-Methoden.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe allgemeiner Metadaten über die Browserfähigkeiten enthält, und einem Body, der Informationen enthalten kann, die der Server benötigt, um die spezifische Anfrage zu verarbeiten.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, wenn ein Formular mit dieser Methode gesendet wird, werden die Daten, die an den Server gesendet werden, an die URL angehängt.

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

Da die `GET`-Methode verwendet wurde, sehen Sie die URL `www.foo.com/?say=Hi&to=Mom` in der Browser-Adressleiste, wenn Sie das Formular absenden.

![Die geänderte URL mit Abfrageparametern nach Absenden des Formulars mit der GET-Methode mit einem "Server nicht gefunden"-Browserfehler](url-parameters.png)

Die Daten werden als eine Reihe von Name/Wert-Paaren an die URL angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) gefolgt von den Name/Wert-Paaren hinzu, wobei jedes mit einem Ampersand (`&`) getrennt ist. In diesem Fall übergeben wir zwei Datenstücke an den Server:

- `say`, das den Wert `Hi` hat
- `to`, das den Wert `Mom` hat

Die HTTP-Anfrage sieht so aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z. B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er um eine Antwort bittet, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Schauen wir uns ein Beispiel an – dies ist dasselbe Formular, das wir im Abschnitt `GET` angesehen haben, jedoch mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das auf `POST` gesetzt ist.

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

Wenn das Formular mit der `POST`-Methode abgesendet wird, sehen Sie keine Daten an die URL angehängt, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfragetext enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfrage-Body verarbeiten kann, z. B. `data:`.

### Ansicht von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Ihr Formulardaten werden nach dem Absenden des Formulars im Chrome-Tab "Netzwerk" wie folgt angezeigt:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im "Name"-Tab
5. Wählen Sie "Request" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab in den Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie wir oben erwähnt haben, sieht der Benutzer bei einer `GET`-Anfrage die Daten in der URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenstück) senden müssen, verwenden Sie niemals die `GET`-Methode oder riskieren Sie, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Datenmenge senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größe von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Serverseite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Der Zugriff auf diese Liste hängt von der Entwicklungsplattform ab, die Sie verwenden und von spezifischen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel einfach die Daten an den Benutzer. Natürlich bleibt es Ihnen überlassen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf eine andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten. Sie können dies in Aktion in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei sehen – die dasselbe Beispielformular wie vorher enthält, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es abgesendet wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den oben gesehenen PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", die empfangenen Daten in der Antwort nach dem Senden von Formulardaten an eine php-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einem Browser laden – Browser können PHP-Code nicht interpretieren, sodass der Browser beim Absenden des Formulars nur anbietet, die PHP-Datei für Sie herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server ausführen. Gute Optionen für lokale PHP-Tests sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass Sie Probleme beim Funktionieren haben könnten, wenn Sie MAMP verwenden, jedoch nicht MAMP Pro installiert haben (oder wenn die MAMP Pro Demo-Zeitablauf abgelaufen ist). Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, wählen Sie dann die Menüpunkte _MAMP_ > _Preferences_ > _PHP_ und setzen Sie "Standardversion:" auf "7.2.x" (x wird je nach installierter Version unterschiedlich sein).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden – die eingereichten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Vorlagen, zur Behandlung des Formulardaten-Submissions usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden in den obigen Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie das Beispiel selbst ausführen):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/)-Vorlage, die im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den Webserver enthält, der in geschweiften Klammern läuft. `url_for('hello')` bedeutet im Grunde "leite zu `/hello` weiter, wenn das Formular abgesendet wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden an sie übergebenen Daten rendert, wenn sie gerendert wird. Dies erfolgt über die oben gesehene `hello()`-Funktion, die ausgeführt wird, wenn die `/hello` URL aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einem Browser zu laden. Python funktioniert etwas anders als PHP – um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen, dann navigieren Sie in Ihrem Browser zu `localhost:5042`.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularbearbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die aus, die Ihnen am besten gefällt. Es ist jedoch zu beachten, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist viel üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Bearbeitung von Formularen erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zum Einstieg)
  - [py4web](https://py4web.com/) (vom selben Entwickler wie web2py, hat eine Django-ähnlichere Einrichtung)
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

Es ist zu beachten, dass die Arbeit mit Formularen selbst unter Verwendung dieser Frameworks nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionalitäten selbst von Grund auf zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen eine serverseitige Sprache oder ein Framework beizubringen. Die obenstehenden Links bieten Ihnen einige Hilfestellungen, wenn Sie diese lernen möchten.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten – oder werden als solche angesehen – während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Handhabung von Binärdaten.

### Das Enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type` HTTP-Headers festzulegen, der in der Anfrage enthalten ist, die generiert wird, wenn das Formular abgesendet wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist dessen Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da der Dateiinhalts nicht innerhalb von URL-Parametern eingegeben werden kann.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die Textdaten, die im Formularkörper enthalten sind (wenn auch Text in das Formular eingegeben wird).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente hinzu, um Ihren Benutzern zu ermöglichen, die Datei(en) auszuwählen, die hochgeladen werden sollen.

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
> Server können mit einer Größenbegrenzung für Dateien und HTTP-Anfragen konfiguriert werden, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffspunkte (Orte, an denen Angriffe passieren können). Die Probleme kommen nie von den HTML-Formularen selbst – sie kommen von der Art und Weise, wie der Server die Daten behandelt.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Lernbereichs erörtert mehrere häufige Angriffe und mögliche Abwehrmaßnahmen gegen sie im Detail. Sie sollten diesen Artikel besuchen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie Ihren Benutzern niemals

Wie bekämpfen Sie diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie beachten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, einschließlich sich selbst; sogar ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die auf Ihren Server gelangen, müssen überprüft und bereinigt werden. Immer. Ohne Ausnahme.

- **Entkommen Sie potenziell gefährlichen Zeichen**. Die spezifischen Zeichen, mit denen Sie vorsichtig sein sollten, variieren je nach dem Kontext, in dem die Daten verwendet werden, und der Serverplattform, die Sie verwenden, aber alle serverseitigen Sprachen haben Funktionen dafür. Zu beobachtende Elemente sind Zeichenfolgen, die wie auszuführender Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge, um nur das Notwendige zuzulassen**.
- **Sandkasten hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/meisten Probleme vermeiden können, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung durch eine kompetente dritte Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle potenziellen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber das Sichern einer Anwendung kann schwierig sein. Denken Sie einfach daran, dass ein Frontend-Entwickler nicht die Person sein sollte, die das Sicherheitsmodell der Daten definiert. Es ist möglich, [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Clientseite tatsächlich passiert ist.

Wenn Sie diese Tutorials in der Reihe durchgearbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und gestalten, eine clientseitige Validierung durchführen und haben eine Vorstellung davon, wie Sie ein Formular übermitteln.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie in diese Ressourcen eintauchen:

- [Erste Schritte mit serverseitiger Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web-Sicherheit von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formular-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
