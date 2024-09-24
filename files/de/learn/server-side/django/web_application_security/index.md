---
title: Sicherheit von Django-Webanwendungen
slug: Learn/Server-side/Django/web_application_security
l10n:
  sourceCommit: d4c050c653bb05faa1052ecc102b0419cb0a97ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben bereits einige der gängigeren Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erläutert — dieser Artikel bietet eine praktische Demonstration, wie Djangos integrierte Schutzmechanismen solche Bedrohungen behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema Server-seitige Programmierung "<a href="/de/docs/Learn/Server-side/First_steps/Website_security">Website-Sicherheit</a>".
        Schließen Sie die Django-Tutorial-Themen bis einschließlich <a href="/de/docs/Learn/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die wichtigsten Dinge zu verstehen, die Sie tun (oder nicht tun) müssen, um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Website-Sicherheit für serverseitiges Design bedeutet und einige der gängigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals Daten aus dem Browser zu vertrauen**. Dazu gehören `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, Benutzerdaten hochgeladener Dateien usw. Überprüfen und bereinigen Sie stets alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Benutzer ist, dass viele der gängigeren Bedrohungen vom Framework abgewickelt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsmerkmale und wie man eine von Django betriebene Website sichert.

## Gängige Bedrohungen/Schutzmaßnahmen

Anstatt hier die Django-Dokumentation zu duplizieren, werden wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Tutorials demonstrieren.

### Cross-Site-Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer erlauben, clientseitige Skripte _über_ die Website in den Browsern anderer Benutzer einzuschleusen. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers im Browser des Benutzers ausgeführt wird.

Das Templatesystem von Django schützt Sie vor der Mehrheit der XSS-Angriffe durch [Entschärfen spezifischer Zeichen](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die im HTML als „gefährlich“ gelten. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript mithilfe des Formulars „Erstellen eines Autors“ in unserer LocalLibrary-Website einzuschleusen, das wir in [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Website in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite Autorenerstellung (die URL sollte `http://127.0.0.1:8000/catalog/author/create/` sein).
4. Geben Sie Namen und Datum für einen neuen Benutzer ein und fügen Sie dann folgenden Text in das Feld Nachname ein:
   `<script>alert('Test alert');</script>`.
   ![Autor Formular XSS-Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn ausgeführt, ein Alert-Fenster in Ihrem Browser anzeigen würde. Wenn der Alarm beim Absenden des Datensatzes angezeigt wird, ist die Site anfällig für XSS-Bedrohungen.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten gezeigt angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte die `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Ansicht des Autorendetails XSS-Test](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite anzeigen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (z. B. `>` ist jetzt `&gt;`)

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor der Mehrheit der XSS-Angriffe. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht von Benutzereingaben gefüllt werden (z. B. wird der `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, sodass Django diese Werte nicht entschärft).

Es ist auch möglich, dass XSS-Angriffe von anderen unzuverlässigen Datenquellen ausgehen, wie z. B. Cookies, Webdiensten oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie in eine Seite eingefügt werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross-Site-Request-Forgery (CSRF)-Schutz

CSRF-Angriffe ermöglichen es einem bösartigen Benutzer, mit den Anmeldeinformationen eines anderen Benutzers Aktionen auszuführen, ohne dass der Benutzer davon weiß oder zustimmt. Ziehen Sie beispielsweise den Fall in Betracht, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht hinter dem Geld her! Ein ehrgeizigerer Hacker könnte denselben Ansatz auch auf anderen Websites verwenden, um weitaus schädlichere Aufgaben auszuführen (z. B. Geld auf seine eigenen Konten zu überweisen usw.).

Um dies zu tun, könnten sie eine HTML-Datei wie die untenstehende erstellen, die ein Autorenerstellungsformular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das sofort übermittelt wird, sobald die Datei geladen wird. Sie würden die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, würde das Formular mit dessen Anmeldeinformationen abgeschickt und ein neuer Autor erstellt werden.

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

Starten Sie den Entwicklungs-Webserver und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie ihn dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen diese Art von Angriffen hat!

Der Schutz wird aktiviert, indem Sie das `{% csrf_token %}` Template-Tag in Ihre Formular-Definition einfügen. Dieses Token wird dann, wie unten gezeigt, mit einem Wert gerendert, der für den Benutzer im aktuellen Browser spezifisch ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten, oder die ein falsches Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu verwenden, muss der Hacker jetzt den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einfügen. Sie können auch nicht die "Streuungstaktik" verwenden, indem sie eine bösartige Datei an alle Bibliothekare senden und hoffen, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen nutzen, die Daten in die Datenbank ändern oder hinzufügen können.

### Andere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (die meisten davon wären schwer oder nicht besonders nützlich zu demonstrieren):

- Schutz vor SQL-Injection
  - : SQL-Injection-Schwachstellen ermöglichen es bösartigen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, wodurch auf Daten zugegriffen, diese geändert oder gelöscht werden können, unabhängig von den Berechtigungen des Benutzers. In fast jedem Fall greifen Sie mit Djangos Querysets/Modellen auf die Datenbank zu, sodass das resultierende SQL ordnungsgemäß durch den zugrunde liegenden Datenbanktreiber entschärft wird. Wenn Sie rohe Abfragen oder benutzerdefinierten SQL schreiben müssen, sollten Sie explizit über den Schutz vor SQL-Injection nachdenken.
- Schutz vor Clickjacking
  - : Bei diesem Angriff entführt ein bösartiger Benutzer Klicks, die für eine sichtbare obere Site bestimmt sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte verwendet werden, um beispielsweise eine legitime Bank-Website anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Element/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält Schutz vor [Clickjacking](/de/docs/Glossary/Clickjacking) in Form der [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Site in einem Frame angezeigt wird.
- Durchsetzung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Site und dem Browser zu verschlüsseln, einschließlich Anmeldeinformationen, die andernfalls im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie nutzen können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob Inhalte sicher sind, selbst wenn sie von einem nicht-HTTP-Proxy eingehen.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Site immer HTTPS verwenden sollen. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS immer nach einer erfolgreichen Verbindung verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie "sichere" Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Überprüfung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Vorbehalte bei der Nutzung der oben genannten Mechanismen. Während wir hoffen, dass Ihnen dies einen Überblick darüber gegeben hat, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese besonderen Bedrohungen von Django auf unserer _LocalLibrary_ Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu gewinnen.

Der nächste und letzte Schritt in diesem Modul über Django ist das Abschließen der [Bewertungsaufgabe](/de/docs/Learn/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
