---
title: Senden von Formulardaten
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Sobald die Formulardaten clientseitig validiert wurden, kann das Formular abgesendet werden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit, das Formular zu übermitteln! Dieser Artikel erläutert, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten und wie werden sie an ihrem Bestimmungsort verarbeitet? Außerdem befassen wir uns mit einigen Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        > und Grundkenntnisse in
        <a href="/de/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> und
        <a href="/de/docs/Learn/Server-side/First_steps"
          >serverseitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich
        eines grundlegenden Verständnisses davon, wie Daten auf dem Server verarbeitet werden.
      </td>
    </tr>
  </tbody>
</table>

Zunächst besprechen wir, was mit den Daten passiert, wenn ein Formular übermittelt wird.

## Client-Server-Architektur

Das Web verwendet in seiner einfachsten Form eine Client-Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (in der Regel ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/) usw.) und verwendet dabei das [HTTP-Protokoll](/de/docs/Web/HTTP). Der Server beantwortet die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client-Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts anderes als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dies ermöglicht es dem Benutzer, Informationen bereitzustellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser [Modul über die ersten Schritte der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps).

## Auf der Client-Seite: Definieren, wie die Daten gesendet werden sollen

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind dafür ausgelegt, die Anfrage zu konfigurieren, die gesendet wird, wenn ein Benutzer auf einen [Submit-Button](/de/docs/Glossary/submit_button) klickt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben ist, werden die Daten an die URL der Seite gesendet, die das Formular enthält — die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet — `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL — die Daten werden zu einer anderen URL im gleichen Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn das {{HTMLElement("form")}}-Element ohne Attribute angegeben wird, werden die Daten an die gleiche Seite gesendet, auf der das Formular vorhanden ist:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL anzugeben, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, sind die Daten zusammen mit dem Rest der Anfrage verschlüsselt, selbst wenn das Formular selbst auf einer unsicheren Seite gehostet wird, die über HTTP aufgerufen wird. Andererseits, wenn das Formular auf einer sicheren Seite gehostet wird, Sie jedoch eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an den Benutzer an, jedes Mal, wenn er versucht, Daten zu senden, weil die Daten nicht verschlüsselt sind.

Die Namen und Werte der nicht-Datei-Formularsteuerungen werden als `name=value`-Paare mit Ampersands an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der serverseitigen Validierung. Der Server antwortet dann, verarbeitet in der Regel die Daten und lädt die URL, die durch das `action`-Attribut definiert ist, was zu einem neuen Seitenaufruf führt (oder einem Refresh der bestehenden Seite, wenn `action` auf dieselbe Seite verweist).

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet verschiedene Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über mehrere Methoden übertragen werden, die gängigsten sind die `GET`-Methode und die `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, lassen Sie uns einen Schritt zurückgehen und untersuchen, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie eine Ressource im Web erreichen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der einen Satz globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die für die Verarbeitung der spezifischen Anfrage durch den Server notwendig sind.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, wird, wenn ein Formular mit dieser Methode gesendet wird, die gesendeten Daten an die URL angehängt.

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

![Die geänderte URL mit Abfrageparametern nach dem Absenden des Formulars mit der GET-Methode mit einer "Server nicht gefunden"-Browser-Fehlerseite](url-parameters.png)

Die Daten werden als Serie von Name/Wert-Paaren an die URL angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) hinzu, gefolgt von den Name/Wert-Paaren, jede durch ein Ampersand (`&`) getrennt. In diesem Fall übermitteln wir zwei Datensätze an den Server:

- `say`, die den Wert `Hi` hat
- `to`, die den Wert `Mom` hat

Die HTTP-Anfrage sieht so aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action`-URL-Schema keine Abfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Methods/POST) ist ein wenig anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu kommunizieren, wenn er um eine Reaktion bittet, die die im Body der HTTP-Anfrage bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und schick mir ein angemessenes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Sehen wir uns ein Beispiel an — dies ist das gleiche Formular, das wir im `GET`-Abschnitt oben betrachtet haben, aber mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode übermittelt wird, erhalten Sie keine Daten an der URL angehängt, und die HTTP-Anfrage sieht so aus, mit den in den Anfrage-Body eingeschlossenen Daten:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub — siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action`-URL-Schema keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### HTTP-Anfragen anzeigen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Als Beispiel werden Ihre Formulardaten wie folgt im Chrome Network-Tab angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklerwerkzeuge.
2. Wählen Sie "Netzwerk"
3. Wählen Sie "Alle"
4. Wählen Sie "foo.com" im "Name"-Tab
5. Wählen Sie "Anfrage" (Firefox) oder "Nutzlast" (Chrome/Edge)

Sie können dann die Formulardaten erhalten, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerkmonitor-Tab in den Entwicklertools des Browsers](network-monitor.png)

Das Einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie wir oben erwähnt haben, wird bei einer `GET`-Anfrage der Benutzer die Daten in seiner URL-Leiste sehen, bei einer `POST`-Anfrage jedoch nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datenstück) senden müssen, verwenden Sie niemals die `GET`-Methode, sonst riskieren Sie, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Menge an Daten senden müssen, wird die `POST`-Methode bevorzugt, weil einige Browser die Größe von URLs begrenzen. Darüber hinaus begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Server-Seite: Die Daten abrufen

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server einen String, der analysiert wird, um die Daten als Liste von Schlüssel/Wert-Paaren zu erhalten. Wie Sie auf diese Liste zugreifen, hängt von der von Ihnen verwendeten Entwicklungsplattform und gegebenenfalls von spezifischen Frameworks ab, die Sie damit verwenden.

### Beispiel: Raw PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, das folgende Beispiel nimmt einfach die Daten und zeigt sie dem Benutzer. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail versenden oder auf andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in unserem Beispiel [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) sehen — das enthält dasselbe Formularbeispiel, das wir zuvor gesehen haben, mit einer `method` von `POST` und einer `action` von `php-example.php`. Wenn es übermittelt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), die den PHP-Code enthält, der im obigen Block zu sehen ist. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Sonst leere Webseite mit "hi mom", den empfangenen Daten als Antwort nach dem Senden von Formulardaten an eine PHP-Datei mit der POST-Methode](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden — Browser können PHP-Code nicht interpretieren, sodass der Browser beim Absenden des Formulars Ihnen nur anbietet, die PHP-Datei herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über eine PHP-Server-Schnittstelle betreiben. Gute Optionen zum lokalen Testen von PHP sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [AMPPS](https://ampps.com/downloads/) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass, wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder die MAMP Pro Demoversion abgelaufen ist), Sie möglicherweise Probleme haben, es zum Laufen zu bringen. Um es wieder in Betrieb zu nehmen, haben wir festgestellt, dass Sie die MAMP-App öffnen können und dann die Menüoptionen _MAMP_ > _Einstellungen_ > _PHP_ wählen und "Standardversion:" auf "7.2.x" (x kann je nach installierter Version variieren) setzen.

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe erreichen — die angezeigten Daten auf einer Webseite. Es verwendet das [Flask-Framework](https://flask.palletsprojects.com/) zum Rendern der Templates, für die Verarbeitung des Formulardatenversands usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden in dem obigen Code referenzierten Templates sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im gleichen Verzeichnis wie die `python-example.py`-Datei befinden, wenn Sie versuchen, das Beispiel selbst auszuführen):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir oben in [Der POST-Methode](#die_post-methode) Abschnitt gesehen haben, aber mit dem `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/) Template, das im Grunde HTML ist, aber Aufrufe an den Python-Code enthalten kann, der den Webserver in geschweiften Klammern laufen lässt. `url_for('hello')` bedeutet im Wesentlichen "leite zu `/hello` weiter, wenn das Formular eingereicht wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Dieses Template enthält nur eine Zeile, die die beiden Datenstücke rendert, die beim Rendern an es übergeben werden. Dies erfolgt über die `hello()`-Funktion, die oben zu sehen ist und ausgeführt wird, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch hier funktioniert dieser Code nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert ein wenig anders als PHP — um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. Zu diesem Punkt sollten Sie das Beispiel mit `python3 python-example.py` ausführen können und dann zu `localhost:5042` in Ihrem Browser navigieren.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zur Formularverarbeitung verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach diejenige aus, die Ihnen am besten gefällt. Es ist jedoch zu beachten, dass es sehr unüblich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die die Formularverarbeitung erleichtern, wie zum Beispiel:

- Python
  - [Django](/de/docs/Learn/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (geschrieben von den gleichen Entwicklern wie web2py, hat eine mehr Django-ähnliche Struktur)
- Node.js
  - [Express](/de/docs/Learn/Server-side/Express_Nodejs)
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

Selbst bei Verwendung dieser Frameworks ist es zu beachten, dass die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionen selbst von Grund auf neu zu schreiben, und wird Ihnen viel Zeit sparen.

> [!NOTE]
> Es ist nicht im Umfang dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die obigen Links bieten Ihnen einige Hilfe, falls Sie sie lernen möchten.

## Ein spezieller Fall: Dateien senden

Das Senden von Dateien mit HTML-Formularen ist ein Sonderfall. Dateien sind Binärdaten — oder werden als solche betrachtet — während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Verarbeitung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type` HTTP-Headers festzulegen, der in der Anfrage enthalten ist, die erzeugt wird, wenn das Formular übermittelt wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig hat er den Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet das: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden: einen für jede Datei plus einen für die im Formularbody enthaltenen Textdaten (falls auch Text im Formular eingegeben wird).
- Zusätzlich müssen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Kontrollen einschließen, damit Ihre Benutzer die Datei(en) auswählen können, die hochgeladen werden sollen.

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

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit berücksichtigen. HTML-Formulare sind bei weitem die häufigsten Serverangriffsvektoren (Orte, an denen Angriffe stattfinden können). Die Probleme kommen nie von den HTML-Formularen selbst — sie stammen von der Art und Weise, wie der Server Daten behandelt.

Der Artikel über [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) in unserem [serverseitigen](/de/docs/Learn/Server-side) Lernbereich behandelt mehrere häufige Angriffe und mögliche Abwehrmaßnahmen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpfen Sie diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt einige Regeln, die Sie im Kopf behalten sollten. Die wichtigste Regel lautet: Vertrauen Sie niemals Ihren Benutzern, einschließlich sich selbst; selbst ein vertrauenswürdiger Benutzer könnte gekapert worden sein.

Alle Daten, die an Ihren Server gelangen, müssen überprüft und bereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die Zeichen, auf die Sie achten sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der Server-Plattform, die Sie verwenden. Aber alle serverseitigen Sprachen haben Funktionen dafür. Dinge, auf die Sie achten sollten, sind Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn/JavaScript) oder [SQL](https://de.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die Menge der eingehenden Daten auf das Notwendige**.
- **Sandkasten hochgeladener Dateien**. Speichern Sie sie auf einem anderen Server und erlauben den Zugriff auf die Datei nur über eine andere Subdomäne oder noch besser über eine vollständige andere Domain.

Indem Sie diese drei Regeln befolgen, sollten Sie in der Lage sein, viele/mehrere Probleme zu vermeiden, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung von einer kompetenten dritten Partei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir bereits angedeutet haben, ist das Senden von Formulardaten einfach, aber das Sichern einer Anwendung kann schwierig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige ist, der das Sicherheitsmodell der Daten definieren sollte. Es ist möglich, eine [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, weil er keine Möglichkeit hat, wirklich zu wissen, was auf der Client-Seite passiert ist.

Wenn Sie diese Tutorials der Reihe nach durchgegangen sind, wissen Sie nun, wie Sie ein Formular markieren und gestalten, eine clientseitige Validierung durchführen und haben eine Vorstellung vom Absenden eines Formulars.

## Siehe auch

Wenn Sie mehr darüber erfahren möchten, wie Sie eine Webanwendung sichern können, können Sie sich in diese Ressourcen vertiefen:

- [Erste Schritte der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps)
- [Das Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security von Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
