---
title: Django Webanwendungssicherheit
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt – dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebaute Schutzmechanismen solche Bedrohungen handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema Server-seitiges Programmieren "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>".
        Schließen Sie die Themen des Django-Tutorials bis (und einschließlich) mindestens <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, was Sie tun (oder nicht tun) müssen, um Ihre Django-Webanwendung abzusichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Sicherheit im Design von serverseitigen Anwendungen bedeutet, und einige der häufigeren Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Websicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dies schließt `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. ein. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen vom Framework gehandhabt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine von Django unterstützte Website absichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, demonstrieren wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorials.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _durch_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird normalerweise dadurch erreicht, dass schädliche Skripte in der Datenbank gespeichert werden, von wo aus sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Templatesystem schützt Sie vor den meisten XSS-Angriffen, indem es [spezifische Zeichen maskiert](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML als "gefährlich" gelten. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website einzuschleusen, indem wir das Formular zum Erstellen eines Autors verwenden, das wir in [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Autorenerstellungsseite (die URL sollte `http://127.0.0.1:8000/catalog/author/create/` sein).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text im Feld Nachname hinzu:
   `<script>alert('Test alarm');</script>`.
   ![Autor Formular XSS-Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das bei Ausführung eine Warnmeldung in Ihrem Browser anzeigt. Wenn die Warnung angezeigt wird, wenn Sie den Datensatz absenden, dann ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten gezeigt angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte die `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Autor Detailansicht XSS-Test](author_detail_alert_xss.png)

Wenn Sie den Quellcode der Seite anzeigen, sehen Sie, dass die gefährlichen Zeichen für die Skript-Tags in harmlose Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel wird `>` zu `&gt;`)

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf sämtliche Tags angewendet, die normalerweise nicht durch Benutzereingaben gefüllt werden (zum Beispiel wird der `help_text` in einem Formularfeld gewöhnlich nicht vom Benutzer geliefert, daher maskiert Django diese Werte nicht).

XSS-Angriffe können auch von anderen nicht vertrauenswürdigen Datenquellen wie Cookies, Webdiensten oder hochgeladenen Dateien ausgehen (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie auf einer Seite verwendet werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross-Site Request Forgery (CSRF)-Schutz

CSRF-Angriffe erlauben es einem böswilligen Benutzer, Aktionen unter Verwendung der Anmeldeinformationen eines anderen Benutzers auszuführen, ohne dass der Benutzer es weiß oder einwilligt. Beispielsweise könnte ein Hacker versuchen, zusätzliche Autoren für unsere LocalLibrary zu erstellen.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht daran interessiert, damit Geld zu verdienen! Ein ambitionierterer Hacker könnte denselben Ansatz auf anderen Seiten nutzen, um viel schädlichere Aufgaben durchzuführen (wie z.B. Geld auf ihre eigenen Konten zu überweisen).

Um dies zu tun, könnten sie eine HTML-Datei wie die unten stehende erstellen, die ein Autorenerstellungsformular enthält (ähnlich dem, das wir im vorherigen Abschnitt verwendet haben), das gesendet wird, sobald die Datei geladen wird.
Sie würden dann die Datei an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit seinen Anmeldeinformationen gesendet und ein neuer Autor wird erstellt.

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

Starten Sie den Entwicklungswebserver und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie sie im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen so etwas hat!

Der Schutz wird dadurch aktiviert, dass Sie das `{% csrf_token %}` Template-Tag in Ihre Formular-Definition einfügen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt gerendert, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder einen falschen Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu nutzen, muss der Hacker jetzt den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einfügen. Sie können auch nicht die "Streuungsansatz"-Methode verwenden, bei der sie eine böswillige Datei an alle Bibliothekare senden und hoffen, dass einer von ihnen diese öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten in die Datenbank ändern oder hinzufügen könnten.

### Andere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (die meisten wären schwer nachweisbar oder nicht besonders nützlich in einer Demonstration):

- Schutz gegen SQL-Einschleusung
  - : SQL-Einschleusungsschwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code in einer Datenbank auszuführen, wodurch Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden können. In fast jedem Fall greifen Sie mit den Abfrageobjekten/Modellen von Django auf die Datenbank zu, sodass das resultierende SQL ordnungsgemäß durch den zugrunde liegenden Datenbanktreiber maskiert wird. Wenn Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, müssen Sie explizit darüber nachdenken, wie Sie SQL-Einschleusung verhindern.
- Schutz gegen Clickjacking
  - : Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare Seite der obersten Ebene bestimmt sind, und leitet sie zu einer versteckten Seite darunter, um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen unsichtbar in einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält einen [Schutz gegen Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) in Form von [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Seite innerhalb eines Frames gerendert wird.
- Durchsetzung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich Authentifizierungsdaten, die andernfalls im Klartext gesendet würden (HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe anderer Schutzmaßnahmen, die Sie nutzen können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem Nicht-HTTP-Proxy kommt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Website immer HTTPS verwenden sollen. Zusammen mit der Umleitung von HTTP-Anfragen auf HTTPS sorgt diese Einstellung dafür, dass nach einer erfolgreichen Verbindung immer HTTPS verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie "sichere" Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Validierung der Host-Header
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele andere Schutzmaßnahmen und Vorbehalte zur Nutzung der oben genannten Mechanismen. Während wir hoffen, dass dies Ihnen einen Überblick darüber gegeben hat, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django hat effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir gezeigt, wie diese besonderen Bedrohungen von Django auf unserer _LocalLibrary_-Website gehandhabt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist die Durchführung der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
