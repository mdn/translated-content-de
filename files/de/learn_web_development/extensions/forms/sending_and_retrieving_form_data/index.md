---
title: Senden von Formulardaten
slug: Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

Nachdem die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular abzusenden. Und da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zum Absenden! In diesem Artikel betrachten wir, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten und wie gehen wir mit ihnen um, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

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
        Zu verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich eines grundlegenden Verständnisses dafür, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst werden wir darüber sprechen, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client-Server-Architektur

Im Wesentlichen verwendet das Web eine Client-Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/), etc.), mit dem [HTTP-Protokoll](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web Client-Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Erste Schritte zur serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden sollen

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so gestaltet, dass Sie die zu sendende Anfrage konfigurieren können, wenn ein Benutzer auf einen {{Glossary("submit_button", "Absenden-Button")}} klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das Action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht bereitgestellt wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL – `https://example.com` – gesendet:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL innerhalb desselben Ursprungs gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten gezeigt, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS (sicheres HTTP)-Protokoll verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die mit HTTP abgerufen wird. Auf der anderen Seite, wenn das Formular auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser jedes Mal, wenn ein Benutzer versucht, Daten zu senden, eine Sicherheitswarnung an, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei Formularelemente werden als `name=value`-Paare mit Undzeichen verbunden an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung serverseitiger Validierung. Der Server antwortet dann, verarbeitet die Daten und lädt die URL, die durch das `action`-Attribut definiert ist, was ein neues Laden der Seite (oder ein erneutes Laden der vorhandenen Seite, wenn `action` auf dieselbe Seite verweist) verursacht.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das Method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über verschiedene Methoden übertragen werden, die gebräuchlichsten sind `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, nehmen wir einen Schritt zurück und untersuchen [wie HTTP funktioniert](/de/docs/Web/HTTP/Guides/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Reference/Headers), der eine Reihe globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der die für die Verarbeitung der spezifischen Anfrage erforderlichen Informationen enthalten kann.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Reference/Methods/GET) ist die Methode, mit der der Browser den Server bittet, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource abrufen." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, wenn ein Formular mit dieser Methode gesendet wird, werden die Daten, die an den Server gesendet werden, an die URL angehängt.

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

Die Daten werden als eine Reihe von Namen/Wert-Paaren an die URL angehängt. Nachdem die Webadresse der URL beendet ist, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Namen/Wert-Paaren, von denen jedes mit einem Undzeichen (`&`) voneinander getrennt ist. In diesem Fall übergeben wir zwei Datensätze an den Server:

- `say`, das einen Wert von `Hi` hat
- `to`, das einen Wert von `Mom` hat

Die HTTP-Anfrage sieht wie folgt aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um dem Server zu signalisieren, dass er auf eine Antwort wartet, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten dem Body der HTTP-Anfrage hinzugefügt.

Schauen wir uns ein Beispiel an – dies ist dasselbe Formular, das wir im Abschnitt `GET` oben gesehen haben, jedoch mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das auf `POST` gesetzt ist.

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

Wenn das Formular mit der `POST`-Methode abgesendet wird, werden keine Daten an die URL angehängt, und die HTTP-Anfrage sieht etwa so aus, wobei die Daten stattdessen im Anfrage-Body enthalten sind:

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
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie anzeigen möchten, müssen Sie Tools wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten im Chrome Network-Tab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklerwerkzeuge.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im "Name"-Tab
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerk-Monitor-Tab des Browsers Entwickler-Tools](network-monitor.png)

Das Einzige, was dem Benutzer angezeigt wird, ist die URL, die aufgerufen wird. Wie wir oben erwähnt haben, sieht der Benutzer bei einer `GET`-Anfrage die Daten in der URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder andere sensible Daten) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie sonst riskieren, dass es in der URL-Leiste angezeigt wird, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größe von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server eine Zeichenfolge, die analysiert wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Der Weg, wie Sie auf diese Liste zugreifen, hängt von der Entwicklungsplattform ab, die Sie verwenden, und von speziellen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, zeigt das folgende Beispiel die Daten einfach dem Benutzer an. Natürlich liegt es bei Ihnen, was Sie mit den Daten tun. Sie können sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html)-Dokument sehen — das das gleiche Beispiel-Formular enthält, das wir zuvor gesehen haben, mit einer `method` von `POST` und einem `action` von `php-example.php`. Wenn es abgesendet wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den in dem oben gesehenen Code enthält. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Andernfalls leere Webseite mit "hi mom", den Daten, die als Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit der POST-Methode empfangen wurden](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können PHP-Code nicht interpretieren, daher wird der Browser das PHP-Dokument einfach herunterladen, wenn das Formular gesendet wird. Um es funktional zu machen, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testen sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro-Probetrial-Zeit abgelaufen ist), Sie möglicherweise Probleme haben, es zum Laufen zu bringen. Wir haben festgestellt, dass Sie die MAMP-App laden können, dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ auswählen und "Standardversion:" auf "7.2.x" (x hängt davon ab, welche Version Sie installiert haben) setzen müssen, um es wieder zum Laufen zu bringen.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie Python verwenden würden, um dasselbe zu tun — die übermittelten Daten auf einer Webseite anzuzeigen. Es verwendet das [Flask Framework](https://flask.palletsprojects.com/) zum Rendern der Vorlagen, zur Behandlung der Formularübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden in dem obigen Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis befinden wie die `python-example.py`-Datei, wenn Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Das gleiche Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, aber mit dem `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist eine [Jinja](https://jinja.palletsprojects.com/) Vorlage, die im Grunde HTML ist, aber Aufrufe zum Python-Code enthalten kann, der den Webserver enthält, der in geschweiften Klammern läuft. `url_for('hello')` sagt im Grunde "wenn das Formular abgesendet wird, weiterleiten an `/hello`".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden Datenelemente rendert, die beim Rendern an sie übergeben werden. Dies geschieht über die `hello()`-Funktion, die oben sichtbar ist und ausgeführt wird, wenn die `/hello`-URL aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert ein bisschen anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie das Beispiel mit `python3 python-example.py` ausführen können, und dann auf `localhost:5042` in Ihrem Browser navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für die Formularverarbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby, etc. Wählen Sie einfach die, die Ihnen am besten gefällt. Es sei jedoch darauf hingewiesen, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies knifflig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die den Umgang mit Formulardaten erleichtern, wie:

- Python
  - [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten mit zu starten)
  - [py4web](https://py4web.com/) (geschrieben von den gleichen Entwicklern wie web2py, hat ein eher Django-ähnliches Setup)
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

Es sei darauf hingewiesen, dass auch bei der Verwendung dieser Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher als zu versuchen, alle Funktionen selbst von Grund auf zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es geht über den Umfang dieses Artikels hinaus, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die oben genannten Links werden Ihnen einige Hilfe geben, sollten Sie sie erlernen wollen.

## Ein Sonderfall: Das Senden von Dateien

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Verarbeitung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type` HTTP-Headers anzugeben, der in die bei der Absendung des Formulars generierte Anfrage aufgenommen wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. In menschlichen Begriffen bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei und einen für die im Formular-Bereich enthaltenen Textdaten (wenn auch Text in das Formular eingegeben wird).
- Fügen Sie einen oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Controls hinzu, damit Ihre Benutzer die auszuwählenden Dateien hochladen können.

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
> Server können so konfiguriert werden, dass sie eine Größenbeschränkung für Dateien und HTTP-Anfragen festlegen, um Missbrauch zu verhindern.

## Sicherheitsprobleme

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Angriffspunkte für Server (Orte, an denen Angriffe erfolgen können). Die Herausforderungen kommen nie von den HTML-Formularen selbst — sie stammen davon, wie der Server die Daten verarbeitet.

Der Artikel [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) unseres Lernkapitels zur [Serverseitigen Entwicklung](/de/docs/Learn_web_development/Extensions/Server-side) behandelt mehrere häufige Angriffe und mögliche Abwehrmaßnahmen dagegen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie misstrauisch: Vertrauen Sie niemals Ihren Benutzern

Wie begegnen Sie nun diesen Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie beachten sollten. Die wichtigste Regel ist: Vertrauen Sie niemals Ihren Benutzern, einschließlich Ihnen selbst; sogar ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die zu Ihrem Server kommen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, auf die Sie achten sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der von Ihnen verwendeten Serverplattform, aber alle serverseitigen Sprachen haben dafür Funktionen. Achten Sie auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die einlangende Datenmenge auf das notwendige**.
- **Sandkasten für hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine völlig andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie in der Lage sein, viele/meiste Probleme zu vermeiden, aber es ist immer eine gute Idee, ein Sicherheitsreview von einer kompetenten dritten Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie oben angedeutet, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann trickreich sein. Denken Sie nur daran, dass nicht der Frontend-Entwickler das Sicherheitskonzept der Daten definieren sollte. Es ist möglich, [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keinerlei Möglichkeit hat, zu wissen, was wirklich auf der Client-Seite passiert ist.

Wenn Sie diese Tutorials der Reihe nach durchgearbeitet haben, wissen Sie jetzt, wie man ein Formular markiert und stylt, clientseitige Validierung durchführt und eine Vorstellung davon hat, wie man ein Formular absendet.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie sich diese Ressourcen ansehen:

- [Erste Schritte zur serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
