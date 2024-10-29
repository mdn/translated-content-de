---
title: Senden von Formulardaten
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: ca1fc680cd7c7c04bed18d8ab1fa3988bf7e972e
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Nachdem die Formulardaten auf der Clientseite validiert wurden, können Sie das Formular absenden. Da wir die Validierung im vorherigen Artikel behandelt haben, sind wir bereit zum Absenden! In diesem Artikel wird untersucht, was passiert, wenn ein Benutzer ein Formular absendet – wohin die Daten gehen und wie wir sie handhaben, wenn sie dort ankommen. Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Versenden von Formulardaten verbunden sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        > und grundlegende Kenntnisse von
        <a href="/de/docs/Web/HTTP">HTTP</a> und
        <a href="/de/docs/Learn/Server-side/First_steps"
          >serverseitiger Programmierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was passiert, wenn Formulardaten übermittelt werden, einschließlich
        eines grundlegenden Verständnisses der serverseitigen Datenverarbeitung.
      </td>
    </tr>
  </tbody>
</table>

Zuerst werden wir besprechen, was mit den Daten passiert, wenn ein Formular abgesendet wird.

## Client/Server-Architektur

Im einfachsten Fall benutzt das Web eine Client/Server-Architektur, die wie folgt zusammengefasst werden kann: Ein Client (normalerweise ein Webbrowser) sendet eine Anfrage an einen Server (meistens ein Webserver wie [Apache](https://httpd.apache.org/), [Nginx](https://nginx.org/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/), etc.), unter Verwendung des [HTTP-Protokolls](/de/docs/Web/HTTP). Der Server antwortet auf die Anfrage mit demselben Protokoll.

![Ein einfaches Schema der Web-Client/Server-Architektur](client-server.png)

Ein HTML-Formular auf einer Webseite ist nichts weiter als eine benutzerfreundliche Möglichkeit, eine HTTP-Anfrage zu konfigurieren, um Daten an einen Server zu senden. Dadurch kann der Benutzer Informationen bereitstellen, die in der HTTP-Anfrage übermittelt werden sollen.

> [!NOTE]
> Um eine bessere Vorstellung davon zu bekommen, wie Client-Server-Architekturen funktionieren, lesen Sie unser Modul [Erste Schritte mit der serverseitigen Webprogrammierung](/de/docs/Learn/Server-side/First_steps).

## Auf der Clientseite: Definieren, wie die Daten gesendet werden

Das {{HTMLElement("form")}}-Element definiert, wie die Daten gesendet werden. Alle seine Attribute sind so gestaltet, dass Sie die Anfrage konfigurieren können, die gesendet wird, wenn ein Benutzer einen {{Glossary("submit_button", "Absende-Button")}} drückt. Die beiden wichtigsten Attribute sind [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

### Das action-Attribut

Das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut definiert, wohin die Daten gesendet werden. Sein Wert muss eine gültige relative oder absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein. Wenn dieses Attribut nicht angegeben wird, werden die Daten an die URL der Seite gesendet, die das Formular enthält – die aktuelle Seite.

In diesem Beispiel werden die Daten an eine absolute URL gesendet – `https://example.com`:

```html
<form action="https://example.com">…</form>
```

Hier verwenden wir eine relative URL – die Daten werden an eine andere URL auf demselben Ursprung gesendet:

```html
<form action="/somewhere_else">…</form>
```

Wenn keine Attribute angegeben sind, wie unten, werden die {{HTMLElement("form")}}-Daten an dieselbe Seite gesendet, auf der sich das Formular befindet:

```html
<form>…</form>
```

> [!NOTE]
> Es ist möglich, eine URL zu spezifizieren, die das HTTPS-Protokoll (sicheres HTTP) verwendet. Wenn Sie dies tun, werden die Daten zusammen mit dem Rest der Anfrage verschlüsselt, auch wenn das Formular selbst auf einer unsicheren Seite gehostet wird, auf die per HTTP zugegriffen wird. Andererseits, wenn das Formular auf einer sicheren Seite gehostet wird, Sie aber eine unsichere HTTP-URL mit dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angeben, zeigen alle Browser eine Sicherheitswarnung an den Benutzer, sobald er versucht, Daten zu senden, da die Daten nicht verschlüsselt werden.

Die Namen und Werte der Nicht-Datei-Formularsteuerelemente werden als `name=value`-Paare mit Ampersands verbunden an den Server gesendet. Der `action`-Wert sollte eine Datei auf dem Server sein, die die eingehenden Daten verarbeiten kann, einschließlich der Sicherstellung der serverseitigen Validierung. Der Server antwortet dann in der Regel, indem er die Daten verarbeitet und die URL lädt, die durch das `action`-Attribut definiert ist, was einen neuen Seitenaufruf (oder eine Aktualisierung der bestehenden Seite, wenn `action` auf dieselbe Seite verweist) verursacht.

Wie die Daten gesendet werden, hängt vom `method`-Attribut ab.

### Das method-Attribut

Das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut definiert, wie Daten gesendet werden. Das [HTTP-Protokoll](/de/docs/Web/HTTP) bietet mehrere Möglichkeiten, eine Anfrage durchzuführen; HTML-Formulardaten können über eine Reihe verschiedener Methoden übertragen werden, am häufigsten über die `GET`- und `POST`-Methode.

Um den Unterschied zwischen diesen beiden Methoden zu verstehen, gehen wir einen Schritt zurück und betrachten, [wie HTTP funktioniert](/de/docs/Web/HTTP/Overview). Jedes Mal, wenn Sie auf eine Ressource im Web zugreifen möchten, sendet der Browser eine Anfrage an eine URL. Eine HTTP-Anfrage besteht aus zwei Teilen: einem [Header](/de/docs/Web/HTTP/Headers), der einen Satz globaler Metadaten über die Fähigkeiten des Browsers enthält, und einem Body, der Informationen enthalten kann, die für den Server notwendig sind, um die spezifische Anfrage zu verarbeiten.

#### Die GET-Methode

Die [`GET`-Methode](/de/docs/Web/HTTP/Methods/GET) ist die Methode, die der Browser verwendet, um den Server zu bitten, eine bestimmte Ressource zurückzusenden: "Hey Server, ich möchte diese Ressource erhalten." In diesem Fall sendet der Browser einen leeren Body. Da der Body leer ist, wird, wenn ein Formular mit dieser Methode gesendet wird, die an den Server gesendeten Daten an die URL angehängt.

Betrachten Sie folgendes Formular:

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

![Die geänderte URL mit Anfrageparametern nach dem Absenden des Formulars mit der GET-Methode und einer "Server nicht gefunden"-Fehlerseite im Browser](url-parameters.png)

Die Daten werden als eine Reihe von Namens-/Wert-Paaren an die URL angehängt. Nachdem die URL-Webadresse beendet ist, fügen wir ein Fragezeichen (`?`) ein, gefolgt von den Namens-/Wert-Paaren, die jeweils durch ein Ampersand (`&`) getrennt sind. In diesem Fall übergeben wir zwei Datenelemente an den Server:

- `say`, dessen Wert `Hi` ist
- `to`, dessen Wert `Mom` ist

Die HTTP-Anfrage sieht folgendermaßen aus:

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub – siehe [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([siehe es live](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

> [!NOTE]
> Die Daten werden nicht angehängt, wenn das `action` URL-Schema keine Anfragen verarbeiten kann, z.B. `file:`.

#### Die POST-Methode

Die [`POST`-Methode](/de/docs/Web/HTTP/Methods/POST) ist etwas anders. Es ist die Methode, die der Browser verwendet, um mit dem Server zu kommunizieren und um eine Antwort zu bitten, die die im HTTP-Anfrage-Body bereitgestellten Daten berücksichtigt: "Hey Server, schau dir diese Daten an und sende mir ein entsprechendes Ergebnis zurück." Wenn ein Formular mit dieser Methode gesendet wird, werden die Daten an den Body der HTTP-Anfrage angehängt.

Werfen wir einen Blick auf ein Beispiel – dies ist dasselbe Formular, das wir im `GET`-Abschnitt oben gesehen haben, aber mit dem [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST` gesetzt.

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

Wenn das Formular mit der `POST`-Methode gesendet wird, werden keine Daten an die URL angehängt, und die HTTP-Anfrage sieht so aus, mit den Daten, die im Body der Anfrage enthalten sind:

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Der `Content-Length`-Header gibt die Größe des Bodys an, und der `Content-Type`-Header gibt den Typ der an den Server gesendeten Ressource an. Wir werden diese Header später besprechen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden – siehe [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([siehe es live](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

> [!NOTE]
> Die `GET`-Methode wird stattdessen verwendet, wenn das `action` URL-Schema keinen Anfrage-Body verarbeiten kann, z.B. `data:`.

### Anzeigen von HTTP-Anfragen

HTTP-Anfragen werden dem Benutzer nie angezeigt (wenn Sie sie sehen möchten, müssen Sie Werkzeuge wie den [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder die [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) verwenden). Zum Beispiel werden Ihre Formulardaten im Chrome-Netzwerktab wie folgt angezeigt. Nach dem Absenden des Formulars:

1. Öffnen Sie die Entwicklertools.
2. Wählen Sie "Netzwerk".
3. Wählen Sie "Alle".
4. Wählen Sie "foo.com" im "Name"-Tab.
5. Wählen Sie "Anfrage" (Firefox) oder "Payload" (Chrome/Edge).

Dann können Sie die Formulardaten erhalten, wie im Bild unten gezeigt.

![HTTP-Anfragen und Antwortdaten im Netzwerküberwachungstab der Entwicklerwerkzeuge des Browsers](network-monitor.png)

Das einzige, was dem Benutzer angezeigt wird, ist die aufgerufene URL. Wie oben erwähnt, sieht der Benutzer bei einer `GET`-Anfrage die Daten in seiner URL-Leiste, bei einer `POST`-Anfrage hingegen nicht. Dies kann aus zwei Gründen sehr wichtig sein:

1. Wenn Sie ein Passwort (oder ein anderes sensibles Datum) senden müssen, verwenden Sie niemals die `GET`-Methode, da Sie riskieren, es in der URL-Leiste anzuzeigen, was sehr unsicher wäre.
2. Wenn Sie eine große Datenmenge senden müssen, wird die `POST`-Methode bevorzugt, da einige Browser die Größe von URLs begrenzen. Zusätzlich begrenzen viele Server die Länge der URLs, die sie akzeptieren.

## Auf der Serverseite: Abrufen der Daten

Unabhängig davon, welche HTTP-Methode Sie wählen, empfängt der Server einen String, der geparst wird, um die Daten als Liste von Schlüssel-/Wert-Paaren zu erhalten. Wie Sie auf diese Liste zugreifen, hängt von der Entwicklungsplattform ab, die Sie verwenden, und von den spezifischen Frameworks, die Sie möglicherweise damit verwenden.

### Beispiel: Raw PHP

[PHP](https://www.php.net/) bietet einige globale Objekte, um auf die Daten zuzugreifen. Angenommen, Sie haben die `POST`-Methode verwendet, das folgende Beispiel nimmt einfach die Daten und zeigt sie dem Benutzer an. Natürlich liegt es an Ihnen, was Sie mit den Daten machen. Sie könnten sie anzeigen, in einer Datenbank speichern, per E-Mail senden oder auf eine andere Weise verarbeiten.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

Dieses Beispiel zeigt eine Seite mit den gesendeten Daten an. Sie können dies in Aktion in unserer Beispieldatei [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) sehen – die dasselbe Beispielformular enthält, das wir zuvor gesehen haben, mit einer `method` von `POST` und einem `action` von `php-example.php`. Wenn es abgeschickt wird, sendet es die Formulardaten an [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), das den obigen PHP-Code enthält. Wenn dieser Code ausgeführt wird, lautet die Ausgabe im Browser `Hi Mom`.

![Andernfalls leere Webseite mit "hi mom", den Daten, die als Antwort nach dem Absenden von Formulardaten an eine PHP-Datei mit der POST-Methode empfangen wurden](php-result.png)

> [!NOTE]
> Dieses Beispiel funktioniert nicht, wenn Sie es lokal in einen Browser laden – Browser können keinen PHP-Code interpretieren, daher bietet der Browser beim Absenden des Formulars nur an, die PHP-Datei für Sie herunterzuladen. Um es zum Laufen zu bringen, müssen Sie das Beispiel über einen PHP-Server irgendeiner Art ausführen. Gute Optionen für lokales PHP-Testing sind [MAMP](https://www.mamp.info/en/downloads/) (Mac und Windows) und [XAMPP](https://www.apachefriends.org/download.html) (Mac, Windows, Linux).
>
> Beachten Sie auch, dass, wenn Sie MAMP verwenden, aber MAMP Pro nicht installiert haben (oder wenn die MAMP Pro Demo-Zeit abgelaufen ist), Sie möglicherweise Schwierigkeiten haben, es zum Laufen zu bringen. Um es wieder zum Laufen zu bringen, haben wir festgestellt, dass Sie die MAMP-App laden können, dann die Menüpunkte _MAMP_ > _Preferences_ > _PHP_ auswählen und "Standard Version:" auf "7.2.x" setzen (x unterscheidet sich je nach der installierten Version).

### Beispiel: Python

Dieses Beispiel zeigt, wie Sie mit Python dasselbe tun würden – die übermittelten Daten auf einer Webseite anzeigen. Dies verwendet das [Flask Framework](https://flask.palletsprojects.com/) zum Rendern der Templates, Verarbeiten der Formulardatenübertragung usw. (siehe [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

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

Die beiden im obigen Code referenzierten Templates sind wie folgt (diese müssen sich in einem Unterverzeichnis namens `templates` im selben Verzeichnis wie die `python-example.py` Datei befinden, wenn Sie versuchen, das Beispiel selbst auszuführen):

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): Dasselbe Formular, das wir im Abschnitt [Die POST-Methode](#die_post-methode) oben gesehen haben, aber mit dem `action` auf `\{{ url_for('hello') }}` gesetzt. Dies ist ein [Jinja](https://jinja.palletsprojects.com/) Template, das im Wesentlichen HTML ist, aber Aufrufe des Python-Codes enthalten kann, der den Webserver in geschweiften Klammern ausführt. `url_for('hello')` sagt im Grunde "leite zu `/hello` um, wenn das Formular eingereicht wird".
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): Dieses Template enthält lediglich eine Zeile, die die beiden Datenstücke rendert, die ihm beim Rendern übergeben werden. Dies geschieht durch die `hello()` Funktion, die oben zu sehen ist und läuft, wenn die URL `/hello` aufgerufen wird.

> [!NOTE]
> Auch dieser Code funktioniert nicht, wenn Sie versuchen, ihn direkt in einen Browser zu laden. Python funktioniert etwas anders als PHP – um diesen Code lokal auszuführen, müssen Sie [Python/PIP installieren](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3), dann Flask mit `pip3 install flask` installieren. An diesem Punkt sollten Sie in der Lage sein, das Beispiel mit `python3 python-example.py` auszuführen, dann navigieren Sie in Ihrem Browser zu `localhost:5042`.

### Andere Sprachen und Frameworks

Es gibt viele andere serverseitige Technologien, die Sie zum Verarbeiten von Formularen verwenden können, einschließlich Perl, Java, .Net, Ruby usw. Wählen Sie einfach die aus, die Ihnen am besten gefällt. Es ist jedoch erwähnenswert, dass es sehr ungewöhnlich ist, diese Technologien direkt zu verwenden, da dies schwierig sein kann. Es ist üblicher, eines der vielen hochwertigen Frameworks zu verwenden, die das Verarbeiten von Formularen einfacher machen, wie:

- Python
  - [Django](/de/docs/Learn/Server-side/Django)
  - [Flask](https://flask.palletsprojects.com/)
  - [web2py](https://github.com/web2py/web2py) (am einfachsten zu beginnen)
  - [py4web](https://py4web.com/) (von den gleichen Entwicklern wie web2py geschrieben, hat eine eher Django-ähnliche Konfiguration)
- Node.js
  - [Express](/de/docs/Learn/Server-side/Express_Nodejs)
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

Es ist erwähnenswert, dass selbst unter Verwendung dieser Frameworks die Arbeit mit Formularen nicht unbedingt _einfach_ ist. Aber es ist viel einfacher, als alle Funktionen selbst von Grund auf zu schreiben und spart Ihnen viel Zeit.

> [!NOTE]
> Es liegt außerhalb des Rahmens dieses Artikels, Ihnen serverseitige Sprachen oder Frameworks beizubringen. Die obigen Links geben Ihnen einige Hilfe, sollten Sie Interesse haben, diese zu lernen.

## Ein besonderer Fall: Dateien senden

Das Versenden von Dateien mit HTML-Formularen ist ein besonderer Fall. Dateien sind binäre Daten – oder werden als solche betrachtet – während alle anderen Daten Textdaten sind. Da HTTP ein Textprotokoll ist, gibt es spezielle Anforderungen für die Verarbeitung von Binärdaten.

### Das enctype-Attribut

Dieses Attribut ermöglicht es Ihnen, den Wert des `Content-Type` HTTP-Headers anzugeben, der in der Anfrage enthalten ist, die beim Absenden des Formulars generiert wird. Dieser Header ist sehr wichtig, da er dem Server mitteilt, welche Art von Daten gesendet werden. Standardmäßig ist sein Wert `application/x-www-form-urlencoded`. In menschlichen Worten bedeutet das: "Dies sind Formulardaten, die in URL-Parameter kodiert wurden."

Wenn Sie Dateien senden möchten, müssen Sie drei zusätzliche Schritte unternehmen:

- Setzen Sie das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut auf `POST`, da Dateiinhalte nicht in URL-Parameter eingefügt werden können.
- Setzen Sie den Wert von [`enctype`](/de/docs/Web/HTML/Element/form#enctype) auf `multipart/form-data`, da die Daten in mehrere Teile aufgeteilt werden, einen für jede Datei plus einen für die in den Formularinhalt aufgenommenen Textdaten (falls der Text ebenfalls in das Formular eingegeben wird).
- Schließen Sie ein oder mehrere [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Steuerelemente ein, um Ihren Benutzern die Auswahl der Dateien zu ermöglichen, die hochgeladen werden sollen.

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

Jedes Mal, wenn Sie Daten an einen Server senden, müssen Sie die Sicherheit in Betracht ziehen. HTML-Formulare sind bei weitem die häufigsten Angriffsvektoren für Server (Orte, an denen Angriffe auftreten können). Die Probleme kommen nie von den HTML-Formularen selbst – sie kommen davon, wie der Server die Daten verarbeitet.

Der Artikel [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) in unserem [serverseitigen](/de/docs/Learn/Server-side) Lernbereich diskutiert mehrere häufige Angriffe und potenzielle Abwehrmaßnahmen im Detail. Sie sollten diesen Artikel lesen, um eine Vorstellung davon zu bekommen, was möglich ist.

### Seien Sie paranoid: Vertrauen Sie niemals Ihren Benutzern

Wie bekämpfen Sie also diese Bedrohungen? Dies ist ein Thema, das weit über diesen Leitfaden hinausgeht, aber es gibt ein paar Regeln, die Sie im Kopf behalten sollten. Die wichtigste Regel ist: Vertrauen Sie niemals Ihren Benutzern, einschließlich Ihnen selbst; sogar ein vertrauenswürdiger Benutzer könnte gehackt worden sein.

Alle Daten, die an Ihren Server kommen, müssen überprüft und gereinigt werden. Immer. Keine Ausnahme.

- **Entfernen Sie potenziell gefährliche Zeichen**. Die spezifischen Zeichen, mit denen Sie vorsichtig sein sollten, variieren je nach Kontext, in dem die Daten verwendet werden, und der Serverplattform, die Sie verwenden, aber alle serverseitigen Sprachen haben dafür Funktionen. Achten Sie auf Zeichenfolgen, die wie ausführbarer Code aussehen (wie [JavaScript](/de/docs/Learn/JavaScript) oder [SQL](https://en.wikipedia.org/wiki/SQL)-Befehle).
- **Begrenzen Sie die eingehende Datenmenge auf das Notwendige**.
- **Sandkasten für hochgeladene Dateien**. Speichern Sie sie auf einem anderen Server und erlauben Sie den Zugriff auf die Datei nur über eine andere Subdomain oder noch besser durch eine komplett andere Domain.

Wenn Sie diese drei Regeln befolgen, sollten Sie viele/meisten Probleme vermeiden können, aber es ist immer eine gute Idee, eine Sicherheitsüberprüfung von einer kompetenten Drittpartei durchführen zu lassen. Gehen Sie nicht davon aus, dass Sie alle möglichen Probleme gesehen haben.

## Zusammenfassung

Wie wir oben angedeutet haben, ist das Senden von Formulardaten einfach, aber das Absichern einer Anwendung kann knifflig sein. Denken Sie daran, dass ein Frontend-Entwickler nicht derjenige sein sollte, der das Sicherheitsmodell der Daten definiert. Es ist möglich, eine [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) durchzuführen, aber der Server kann dieser Validierung nicht vertrauen, da er keine Möglichkeit hat, wirklich zu wissen, was auf der Clientseite tatsächlich passiert ist.

Wenn Sie diese Tutorials der Reihe nach durchgearbeitet haben, wissen Sie jetzt, wie Sie ein Formular markieren und gestalten, eine clientseitige Validierung durchführen und haben eine Vorstellung davon, wie Sie ein Formular übermitteln.

## Siehe auch

Wenn Sie mehr über die Sicherung einer Webanwendung erfahren möchten, können Sie sich diese Ressourcen ansehen:

- [Erste Schritte mit der serverseitigen Webprogrammierung](/de/docs/Learn/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security by Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschafts-Kompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
