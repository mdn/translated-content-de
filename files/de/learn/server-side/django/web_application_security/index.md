---
title: Sicherheit von Django-Webanwendungen
slug: Learn/Server-side/Django/web_application_security
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Webseitendesigns. In dem Artikel [Web-Sicherheit](/de/docs/Web/Security) haben wir bereits einige der häufigeren Sicherheitsbedrohungen erklärt — dieser Artikel bietet eine praktische Darstellung, wie die integrierten Schutzmechanismen von Django solche Bedrohungen handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema „<a href="/de/docs/Learn/Server-side/First_steps/Website_security">Webseitensicherheit</a>“ in der serverseitigen Programmierung.
        Schließen Sie die Django-Tutorial-Themen mindestens bis (einschließlich) <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche wesentlichen Maßnahmen Sie ergreifen (oder nicht ergreifen) sollten, um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Thema [Webseitensicherheit](/de/docs/Web/Security) gibt einen Überblick darüber, was Sicherheit im Web seitens der serverseitigen Gestaltung bedeutet, und über einige der häufigeren Bedrohungen, gegen die Sie sich schützen sollten. Eine der Hauptaussagen in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung den Daten des Browsers vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie zur Websicherheit lernen können, ist, **niemals den Daten des Browsers zu vertrauen**. Dies umfasst `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, vom Benutzer hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Benutzer ist, dass viele der häufigeren Bedrohungen vom Framework gehandhabt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt die Sicherheitsmerkmale von Django und wie Sie eine von Django unterstützte Website sichern können.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, demonstrieren wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Tutorials.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird in der Regel erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, von der aus sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der das JavaScript des Angreifers im Browser des Benutzers ausführt.

Das Templatesystem von Django schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen ausblendet](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website mithilfe des Formulars zum Erstellen eines Autors einzuschleusen, das wir in [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich mit Ihrem Superuser-Konto an.
3. Navigieren Sie zur Autorenerstellungsseite (die sich unter der URL `http://127.0.0.1:8000/catalog/author/create/` befinden sollte).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text am Ende des Feldes für den Nachnamen hinzu:
   `<script>alert('Test alert');</script>`.
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, falls ausgeführt, ein Alarmfeld in Ihrem Browser anzeigt. Wenn der Alarm beim Einreichen des Datensatzes angezeigt wird, ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Senden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten dargestellt angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Author detail view XSS test](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite ansehen, können Sie sehen, dass die gefährlichen Zeichen für die Skripttags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel wird `>` zu `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor der Mehrheit der XSS-Angriffe. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht mit Benutzereingaben gefüllt werden (zum Beispiel wird der `help_text` in einem Formularfeld normalerweise nicht durch Benutzereingaben bereitgestellt, daher entzieht Django diese Werte nicht der Escape-Funktion).

Es ist auch möglich, dass XSS-Angriffe aus anderen nicht vertrauenswürdigen Datenquellen stammen, wie Cookies, Webdiensten oder hochgeladenen Dateien (wenn die Daten nicht ausreichend bereinigt werden, bevor sie in eine Seite aufgenommen werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross-Site Request Forgery (CSRF)-Schutz

CSRF-Angriffe ermöglichen es einem bösartigen Benutzer, Aktionen mithilfe der Anmeldedaten eines anderen Benutzers auszuführen, ohne das Wissen oder die Zustimmung dieses Benutzers. Betrachten Sie beispielsweise den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht auf Geld aus! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Seiten nutzen, um viel schädlichere Aufgaben auszuführen (wie z. B. Geld auf seine eigenen Konten zu übertragen usw.).

Um dies zu tun, könnte er eine HTML-Datei wie die untenstehende erstellen, die ein Autorenerstellungs-Formular enthält (ähnlich dem, das wir im vorherigen Abschnitt verwendet haben), das sofort abgesendet wird, wenn die Datei geladen wird.
Er würde die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit deren Anmeldedaten abgesendet, und ein neuer Autor wird erstellt.

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

Führen Sie den Entwicklungs-Webserver aus, und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie ihn dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz dagegen bietet!

Wie der Schutz aktiviert ist, erfolgt dadurch, dass Sie das Template-Tag `{% csrf_token %}` in Ihre Formulardefinition einfügen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt gerendert, mit einem für den Benutzer im aktuellen Browser spezifischen Wert.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen für Benutzer/Browser spezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder die ein inkorrektes Feld für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu nutzen, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einfügen. Er kann auch nicht mehr die „Streuschuss“-Methode anwenden, bei der er eine bösartige Datei an alle Bibliothekare sendet und hofft, dass sie von einem von ihnen geöffnet wird, da der CSRF-Schlüssel browserspezifisch ist.

Der CSRF-Schutz von Django ist standardmäßig aktiviert. Sie sollten immer das Template-Tag `{% csrf_token %}` in Ihren Formularen verwenden und `POST` für Anfragen nutzen, die Daten in die Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (die meisten davon wären schwer oder nicht besonders nützlich zu demonstrieren):

- Schutz vor SQL-Injection
  - : SQL-Injection-Schwachstellen ermöglichen es bösartigen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, wodurch Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden können. In fast jedem Fall greifen Sie auf die Datenbank mit den Abfrage-Sets/Modellen von Django zu, sodass der resultierende SQL-Code vom zugrunde liegenden Datenbanktreiber korrekt bereinigt wird. Wenn Sie rohe Abfragen oder benutzerdefinierte SQL schreiben müssen, sollten Sie ausdrücklich über den Schutz vor SQL-Injections nachdenken.
- Schutz vor Clickjacking
  - : Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare oberste Webseite bestimmt sind, und leitet sie auf eine versteckte Seite darunter weiter. Diese Technik könnte zum Beispiel verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldedaten in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Element/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Schutz in Form des [`X-Frame-Options` Mittelware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Seite innerhalb eines Rahmens gerendert wird.
- Erzwingen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich der Authentifizierungs-Credentials, die ansonsten im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie nutzen können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem nicht HTTP-Proxy kommt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einen Browser darauf hinweist, dass alle zukünftigen Verbindungen zu einer bestimmten Seite immer HTTPS verwenden sollten. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass immer HTTPS verwendet wird, nachdem eine erfolgreiche Verbindung erfolgt ist. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie 'sichere' Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Validierung von Host-Headern
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Einschränkungen bei der Verwendung der oben genannten Mechanismen. Obwohl wir hoffen, dass dies Ihnen einen Überblick darüber gibt, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmechanismen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese besonderen Bedrohungen von Django in unserer _LocalLibrary_ Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmechanismen gegeben.

Dies war ein sehr kurzer Ausflug in die Websicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist die Durchführung der [Bewertungsaufgabe](/de/docs/Learn/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Implementierungsleitfäden zur Sicherheit](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
