---
title: Senden von Formulardaten
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Sobald die Formulardaten auf der Client-Seite validiert wurden, ist es in Ordnung, das Formular abzuschicken. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, es abzuschicken! Dieser Artikel beleuchtet, was passiert, wenn ein Benutzer ein Formular absendet – wohin die Daten gehen und wie wir sie dort handhaben. Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        > und Grundkenntnisse über
        <a href="/de/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> und
        <a href="/de/docs/Learn/Server-side/First_steps"
          >serverseitige Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was passiert, wenn Formulardaten gesendet werden, einschließlich einer grundlegenden Vorstellung davon, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zuerst besprechen wir, was mit den Daten passiert, wenn ein Formular abgeschickt wird.

## Client/Server-Architektur

Im einfachsten Fall verwendet das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.), unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Client/Server-Architektur des Webs](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden.

> [!NOTE]
> Um ein besseres Verständnis davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser [Leitfaden zu den ersten Schritten der serverseitigen Webprogrammierung](/de/docs/Learn/Server-side/First_steps) Modul.

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind dafür gedacht, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer auf einen [Submit-Button](/de/docs/Glossary/submit_button) klickt. Die zwei wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL im gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die mit HTTP aufgerufen wird. Andererseits zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, weil die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerungen werden als `name=value`-Paare, die mit Ampersands verbunden sind, an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich serverseitiger Validierung. Der Server antwortet dann im Allgemeinen, indem er die Daten verarbeitet und die URL lädt, die im `action`-Attribut angegeben ist, was einen neuen Seitenaufruf oder eine Aktualisierung der vorhandenen Seite verursacht, wenn `action` auf dieselbe Seite zeigt.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über eine Reihe von verschiedenen Methoden übermittelt werden, die gebräuchlichsten sind die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns zurücktreten und betrachten, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen wollen, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der eine Reihe von globalen Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die der Server benötigt, um die spezifische Anfrage zu verarbeiten.

#### Die GET-Methode

Die [`GET`](https://developer.mozilla.org/de/docs/Web/HTTP/Methods/GET)-Methode ist die Methode, die der Browser verwendet, um den Server zu bitten, eine gegebene Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource abrufen." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, wenn ein Formular mit dieser Methode gesendet wird, werden die an den Server gesendeten Daten an die URL angehängt.

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

![Die geänderte URL mit Abfrageparametern nach Einreichen des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Fehlerseite im Browser](url-parameters.png)

Die Daten werden als Reihe von Namens-/Werte-Paaren an die URL angehängt. Nachdem die Webadresse der URL beendet ist, fügen wir ein Fragezeichen (`?`) gefolgt von den Namens-/Werte-Paaren ein, wobei jedes durch ein Ampersand (`&`) getrennt ist. In diesem Fall übermitteln wir dem Server zwei Datenelemente:

- `say`, das einen Wert von `Hi` hat
- `to`, das einen Wert von `Mom` hat

Die HTTP-Anfrage sieht so aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z. B. `file:`.

#### Die POST-Methode

Die [`POST`](https://developer.mozilla.org/de/docs/Web/HTTP/Methods/POST)-Methode ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu sprechen, wenn er eine Antwort anfordert, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und schick mir eine entsprechende Antwort zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Betrachten wir ein Beispiel — dies ist dasselbe Formular, das wir oben im `GET`-Abschnitt betrachtet haben, aber mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode abgesendet wird, sehen Sie keine Daten, die der URL angehängt sind, und die HTTP-Anfrage sieht so aus, wobei die Daten stattdessen im Anfragetext enthalten sind:

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
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfragetext verarbeiten kann, z. B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer niemals angezeigt (wenn Sie sie sehen möchten, müssen Sie Tools wie den [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome-Entwicklertools](https://developer.chrome.com/docs/devtools/) verwenden). Ihr Formulardaten werden in der Registerkarte "Netzwerk" von Chrome wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" in der Registerkarte "Name"
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge)

Sie können dann die Formulardaten abrufen, wie im folgenden Bild gezeigt.

![HTTP-Anfragen und Antwortdaten in der Registerkarte zur Netzwerküberwachung in den Entwicklertools des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, sieht der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenelement) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie es riskieren, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Datenmenge senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größen von URLs einschränken. Zusätzlich begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Server-Seite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, erhält der Server eine Zeichenkette, die geparst wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Der Zugriff auf diese Liste hängt von der Entwicklungsplattform ab, die Sie verwenden, und von den speziellen Frameworks, die Sie damit möglicherweise verwenden.

### Beispiel: Rohes PHP

[PHP](https://www.php.net/) bietet einige globale Objekte zum Zugriff auf die Daten. Angenommen, Sie haben die `POST`-Methode verwendet, dann nimmt das folgende Beispiel nur die Daten und zeigt sie dem Benutzer an. Natürlich liegt es bei Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) Datei sehen — die dasselbe Beispielformular enthält, wie wir es zuvor gesehen haben, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es abgesendet wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den oben gesehenen PHP-Code enthält. Wenn dieser Code ausgeführt wird, ist die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", den Daten, die nach dem Absenden der Formulardaten an eine PHP-Datei mit der POST-Methode empfangen wurden](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können PHP-Code nicht interpretieren, sodass der Browser nur anbietet, die PHP-Datei für Sie herunterzuladen, wenn das Formular gesendet wird. Um es funktionsfähig zu machen, müssen Sie das Beispiel auf einem PHP-Server jeglicher Art ausführen. Gute Optionen für das lokale PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [AMPPS](https://ampps.com/downloads/) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass, wenn Sie MAMP ohne MAMP Pro installiert haben (oder wenn die MAMP Pro-Demotestphase abgelaufen ist), es möglicherweise zu Schwierigkeiten beim Funktionieren kommt. Wir haben festgestellt, dass Sie die MAMP-App laden können und dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ wählen und "Standardversion:" auf "7.2.x" setzen können (x variiert je nach installierter Version).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python genau das Gleiche tun würden – die übermittelten Daten auf einer Webseite anzeigen. Es verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Templates, Verarbeitung der Formulardatenübermittlung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die zwei im oben gezeigten Code referenzierten Vorlagen sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im gleichen Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie das Beispiel selbst ausführen möchten):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben im Abschnitt [Die POST-Methode](#die_post-methode) gesehen haben, jedoch mit `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/)-Template, das im Wesentlichen HTML ist, aber Aufrufe an den die Webseite betreibenden Python-Code enthalten kann, der in geschweiften Klammern eingeschlossen ist. `url_for('hello')` bedeutet im Grunde "nach `/hello` umleiten, wenn das Formular übermittelt wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Diese Vorlage enthält nur eine Zeile, die die beiden beim Rendern übergebenen Datenelemente anzeigt. Dies geschieht über die oben gesehene `hello()`-Funktion, die ausgeführt wird, wenn die `/hello`-URL aufgerufen wird.

> [!NOTE]
> Auch hier funktioniert dieser Code nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert etwas anders als PHP – um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3) und dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie das Beispiel mit `python3 python-example.py` ausführen können und dann in Ihrem Browser zu `localhost:5042` navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie für die Formularverarbeitung verwenden können, darunter Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige aus, die Ihnen am besten gefällt. Es ist jedoch wichtig zu beachten, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Oftmals verwendet man eines der vielen hochwertigen Frameworks, die die Verarbeitung von Formularen erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von denselben Entwicklern wie web2py, hat einen mehr Django-ähnlichen Aufbau)
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

Es ist wichtig zu beachten, dass selbst mit diesen Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als zu versuchen, die gesamte Funktionalität selbst von Grund auf zu schreiben, und es wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es liegt außerhalb des Umfangs dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die obigen Links geben Ihnen einige Hilfe, falls Sie sie lernen möchten.

## Ein Sonderfall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten – oder werden als solche betrachtet – während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es besondere Anforderungen für den Umgang mit Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type`-HTTP-Headers anzugeben, der in die Anfrage eingefügt wird, wenn das Formular übermittelt wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig hat er den Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet dies: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter gepackt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei sowie einen für die im Formulartext eingegebenen Textdaten (falls auch Text im Formular eingegeben wurde).
- Fügen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente hinzu, um Ihren Benutzern das Auswählen der hochzuladenden Datei(en) zu ermöglichen.

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

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind mit Abstand die häufigsten Angriffspunkte auf Server (Stellen, an denen Angriffe auftreten können). Die Probleme entstehen nie aus den HTML-Formularen selbst – sie entstehen aus der Art und Weise, wie der Server die Daten behandelt.

Der Artikel [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) unseres [serverseitigen](/de/docs/Learn/Server-side) Lernprogramms behandelt mehrere gängige Angriffe und mögliche Abwehrmaßnahmen im Detail. Sie sollten sich diesen Artikel ansehen, um eine Vorstellung von den Möglichkeiten zu bekommen.

### Seien Sie paranoid: Vertrauen Sie Ihren Nutzern niemals

Wie bekämpfen Sie diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt einige Regeln zu beachten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Nutzern, einschließlich sich selbst; selbst ein vertrauenswürdiger Nutzer könnte gehackt worden sein.

Alle Daten, die an Ihren Server kommen, müssen überprüft und bereinigt werden. Immer. Ohne Ausnahme.

- **Escapen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, auf die man achten sollte, variieren je nach Kontext, in dem die Daten verwendet werden und der verwendeten Serverplattform, aber alle serverseitigen Sprachen haben dafür Funktionen. Dinge, auf die Sie achten sollten, sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn/JavaScript)- oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die Menge der eingehenden Daten auf das, was notwendig ist**.
- **Sandboxen Sie hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser über eine komplett andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/der meisten Probleme vermeiden können, aber es ist immer eine gute Idee, sich von einem kompetenten Dritten eine Sicherheitsüberprüfung durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber die Sicherung einer Anwendung kann knifflig sein. Denken Sie daran, dass ein Front-End-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, eine [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht trauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite geschehen ist.

Wenn Sie diese Tutorials in der richtigen Reihenfolge durchgearbeitet haben, wissen Sie jetzt, wie man ein Formular markiert und gestaltet, eine Client-seitige Validierung durchführt und haben eine Vorstellung davon, wie ein Formular abgesendet wird.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie sich in diese Ressourcen vertiefen:

- [Erste Schritte bei der serverseitigen Webprogrammierung](/de/docs/Learn/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularsteuerelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Kompatibilitätstabelle für Eigenschaften von Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
