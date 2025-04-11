---
title: Django Webanwendungssicherheit
short-title: Django Sicherheit
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Zuvor haben wir einige der häufigsten Sicherheitsbedrohungen im Artikel [Websicherheit](/de/docs/Web/Security) erklärt — dieser Artikel bietet eine praktische Demonstration, wie Djangos integrierte Schutzmaßnahmen solche Bedrohungen abwehren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema Server-seitige Programmierung "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>".
        Schließen Sie die Django-Tutorial-Themen bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Sie tun müssen (oder nicht tun sollten), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Websicherheit für das Serverseitige Design bedeutet, und einige der häufigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Websicherheit lernen können, ist, **nie Daten vom Browser zu vertrauen**. Dies schließt `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, benutzerhochgeladene Dateien usw. ein. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen vom Framework gehandhabt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine von Django betriebene Website absichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu wiederholen, demonstrieren wir in diesem Artikel nur einige der Sicherheitsmerkmale im Kontext unseres Django [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorials.

### Cross Site Scripting (XSS)

XSS beschreibt eine Klasse von Angriffen, die einem Angreifer erlauben, clientseitige Skripte _über_ die Website in den Browsern anderer Benutzer einzuschleusen. Dies wird in der Regel erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden, oder indem Benutzer dazu verleitet werden, einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Template-System schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen maskiert](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die im HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website über das Formular zum Erstellen eines Autors einzuschleusen, das wir in [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich bei Ihrem Administrator-Konto an.
3. Navigieren Sie zur Seite zur Erstellung von Autoren (die URL sollte `http://127.0.0.1:8000/catalog/author/create/` sein).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text in das Feld "Nachname" ein:
   `<script>alert('Test alert');</script>`.
   ![Author Form XSS Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, falls es ausgeführt wird, ein Warnfenster in Ihrem Browser anzeigen wird. Wenn die Warnung beim Speichern des Datensatzes angezeigt wird, ist die Seite für XSS-Bedrohungen anfällig.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten gezeigt angezeigt. Aufgrund der XSS-Strukturmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Autor Detailansicht XSS Test](author_detail_alert_xss.png)

Wenn Sie den Seitenquellcode anzeigen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel ist `>` jetzt `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz auszuschalten, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht mit Benutzereingaben gefüllt werden würden (zum Beispiel ist der `help_text` in einem Formularfeld normalerweise nicht benutzergesteuert, daher maskiert Django diese Werte nicht).

Es ist auch möglich, dass XSS-Angriffe von anderen nicht vertrauenswürdigen Datenquellen wie Cookies, Webdiensten oder hochgeladenen Dateien stammen (immer dann, wenn die Daten nicht ausreichend bereinigt werden, bevor sie in eine Seite aufgenommen werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross Site Request Forgery (CSRF) Schutz

CSRF-Angriffe ermöglichen einem böswilligen Benutzer das Ausführen von Aktionen mit den Zugangsdaten eines anderen Nutzers, ohne dass dieser davon weiß oder zustimmt. Denken Sie zum Beispiel an den Fall, dass ein Hacker zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Natürlich ist unser Hacker nicht auf das Geld aus! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Websites nutzen, um wesentlich schädlichere Aufgaben auszuführen (wie Geldüberweisungen auf seine eigenen Konten usw.).

Um dies zu tun, könnten sie eine HTML-Datei wie die unten stehende erstellen, die ein Autoren-Formular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das gesendet wird, sobald die Datei geladen wird.
Sie würden die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit deren Zugangsdaten abgeschickt und ein neuer Autor würde erstellt.

```html
<html lang="en">
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <table>
        <tr>
          <th><label for="id_first_name">First name:</label></th>
          <td>
            <input
              id="id_first_name"
              maxlength="100"
              name="first_name"
              type="text"
              value="Mad"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_last_name">Last name:</label></th>
          <td>
            <input
              id="id_last_name"
              maxlength="100"
              name="last_name"
              type="text"
              value="Man"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_birth">Date of birth:</label></th>
          <td>
            <input id="id_date_of_birth" name="date_of_birth" type="text" />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_death">Died:</label></th>
          <td>
            <input
              id="id_date_of_death"
              name="date_of_death"
              type="text"
              value="12/10/2016" />
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Starten Sie den Development-Webserver und melden Sie sich mit Ihrem Administrator-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie diese im Browser. Sie sollten einen CSRF-Fehler erhalten, weil Django einen Schutz gegen diese Art von Angriffen hat!

Wie der Schutz aktiviert ist, besteht darin, dass Sie das `{% csrf_token %}` Template-Tag in Ihre Formulardefinition einfügen. Dieses Token wird dann in Ihrem HTML so gerendert, wie unten gezeigt, mit einem Wert, der benutzerspezifisch für den aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder für Benutzer/Browsers eine falsche Feldwert enthalten.

Um diese Art von Angriff zu nutzen, muss der Hacker jetzt den CSRF-Schlüssel des spezifischen Zielbenutzers herausfinden und einfügen. Außerdem können sie nicht die "Streuschuss"-Methode verwenden, um eine böswillige Datei an alle Bibliothekare zu senden und darauf hoffen, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten in die Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (die meisten davon wären schwer oder nicht besonders nützlich zu demonstrieren):

- Schutz gegen SQL-Injektion
  - : SQL-Injektionsanfälligkeiten ermöglichen böswilligen Benutzern die Ausführung von beliebigem SQL-Code in einer Datenbank, wodurch Daten unabhängig von den Berechtigungen des Benutzers zugegriffen, geändert oder gelöscht werden können. In fast jedem Fall greifen Sie mit Djangos Querysets/Modellen auf die Datenbank zu, sodass das resultierende SQL korrekt vom zugrunde liegenden Datenbanktreiber maskiert wird. Wenn Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, sollten Sie explizit über die Verhinderung von SQL-Injektionen nachdenken.
- Clickjacking-Schutz
  - : Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare obere Website-Ebene bestimmt sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte zum Beispiel verwendet werden, um eine legitime Bankseite anzuzeigen, jedoch die Anmeldedaten in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) zu erfassen, das vom Angreifer gesteuert wird. Django enthält einen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Schutz in Form der [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Seite in einem Frame gerendert wird.
- Erzwingen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich Authentifizierungsdaten, die ansonsten im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie nutzen können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem nicht-HTTP-Proxy eingeht.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einen Browser darüber informiert, dass alle zukünftigen Verbindungen zu einer bestimmten Seite immer HTTPS verwenden sollen. In Kombination mit der Umleitung von HTTP-Anfragen auf HTTPS stellt diese Einstellung sicher, dass nach einer erfolgreichen Verbindung immer HTTPS verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie "sichere" Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Host-Header-Validierung
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele andere Schutzmaßnahmen und Einschränkungen bei der Nutzung der oben genannten Mechanismen. Wir hoffen, dass dies Ihnen einen Überblick darüber gegeben hat, was Django bietet, aber Sie sollten dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe gängiger Bedrohungen, einschließlich XSS und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese speziellen Bedrohungen von Django in unserer _LocalLibrary_ Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmechanismen gegeben.

Dies war ein sehr kurzer Ausflug in die Websicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist der Abschluss der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
