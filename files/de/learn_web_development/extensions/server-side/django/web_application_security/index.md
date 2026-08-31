---
title: Django Web-Anwendungssicherheit
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jeder Webseitengestaltung. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erläutert — dieser Artikel bietet eine praktische Demonstration, wie die eingebauten Schutzfunktionen von Django mit solchen Bedrohungen umgehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema zum serverseitigen Programmieren "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Webseitensicherheit</a>".
        Schließen Sie die Django-Tutorial-Themen bis (einschließlich) mindestens <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die wichtigsten Dinge zu verstehen, die Sie tun müssen (oder nicht tun müssen), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Thema [Webseitensicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Webseitensicherheit für die serverseitige Gestaltung bedeutet, und einige der häufigsten Bedrohungen, vor denen Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Webseitensicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dazu gehören `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, vom Benutzer hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen vom Framework gehandhabt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt die Sicherheitsfunktionen von Django und wie man eine Django-betriebene Website sichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt hier die Django-Dokumentation zu wiederholen, werden wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorials demonstrieren.

### Cross-Site-Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, Client-seitige Skripte _über_ die Website in die Browser anderer Benutzer einzubetten. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Templatesystem schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen "escaped"](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website über das Formular "Autor erstellen" einzufügen, das wir in [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite zur Erstellung eines Autors (die URL sollte sein: `http://127.0.0.1:8000/catalog/author/create/`).
4. Geben Sie Namen und Datumsdetails für einen neuen Benutzer ein und fügen Sie dann den folgenden Text zum Feld Nachname hinzu: `<script>alert('Test alert');</script>`.
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn es ausgeführt wird, ein Alarmfenster in Ihrem Browser anzeigt. Wenn der Alarm angezeigt wird, wenn Sie den Datensatz übermitteln, ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Übermitteln**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten dargestellt angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Author detail view XSS test](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite ansehen, können Sie sehen, dass die gefährlichen Zeichen der Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel ist `>` jetzt `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht von Benutzereingaben gefüllt würden (zum Beispiel wird `help_text` in einem Formularfeld normalerweise nicht vom Benutzer geliefert, daher werden diese Werte von Django nicht "escaped").

Es ist auch möglich, dass XSS-Angriffe von anderen nicht vertrauenswürdigen Datenquellen ausgehen, wie z. B. Cookies, Webdienste oder hochgeladene Dateien (wenn die Daten nicht ausreichend bereinigt werden, bevor sie auf einer Seite eingefügt werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Schutz vor Cross-Site-Request-Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem bösartigen Benutzer, Aktionen mit den Anmeldeinformationen eines anderen Benutzers auszuführen, ohne dessen Wissen oder Zustimmung. Zum Beispiel betrachten wir den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht auf das Geld aus! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Seiten verwenden, um viel schädlichere Aufgaben auszuführen (z. B. Geld auf seine eigenen Konten überweisen usw.).

Um dies zu tun, könnten sie eine HTML-Datei wie die untenstehende erstellen, die ein Autor-Erstellungsformular enthält (wie das, das wir in der vorherigen Abschnitt verwendet haben), das eingereicht wird, sobald die Datei geladen wird.
Sie würden dann die Datei an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem eingeloggten Bibliothekar geöffnet wird, würde das Formular mit ihren Anmeldeinformationen eingereicht und ein neuer Autor würde erstellt werden.

```html
<html lang="en">
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <label for="id_first_name">First name:</label>
      <input
        id="id_first_name"
        maxlength="100"
        name="first_name"
        type="text"
        value="Mad"
        required />
      <label for="id_last_name">Last name:</label>
      <input
        id="id_last_name"
        maxlength="100"
        name="last_name"
        type="text"
        value="Man"
        required />
      <label for="id_date_of_birth">Date of birth:</label>
      <input id="id_date_of_birth" name="date_of_birth" type="text" />
      <label for="id_date_of_death">Died:</label>
      <input
        id="id_date_of_death"
        name="date_of_death"
        type="text"
        value="12/10/2016" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Führen Sie den Entwicklungswebserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie ihn dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django Schutz gegen solche Dinge hat!

Der Schutz wird aktiviert, indem Sie das `{% csrf_token %}` Template-Tag in Ihre Formulardefinition aufnehmen. Dieses Token wird dann wie unten gezeigt in Ihrem HTML gerendert, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die nicht das Feld enthalten oder die ein falsches Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu nutzen, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einbeziehen. Sie können auch nicht den "Streuschuss"-Ansatz verwenden, eine bösartige Datei an alle Bibliothekare zu senden und zu hoffen, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Der CSRF-Schutz von Django ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen nutzen, die Daten zur Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes, von denen die meisten schwer oder nicht besonders nützlich zu demonstrieren wären:

- Schutz vor SQL-Injektionen
  - : SQL-Injektionslücken ermöglichen es bösartigen Benutzern, beliebigen SQL-Code in einer Datenbank auszuführen, wodurch Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden können. In fast allen Fällen werden Sie auf die Datenbank durch die Abfrage-Sets/Modelle von Django zugreifen, sodass das resultierende SQL vom darunterliegenden Datenbanktreiber ordnungsgemäß "escaped" wird. Wenn Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, dann sollten Sie explizit über das Verhindern von SQL-Injektionen nachdenken.
- Schutz gegen Clickjacking
  - : Bei diesem Angriff entführt ein bösartiger Benutzer Klicks, die für eine sichtbare oberste Website bestimmt sind, und leitet sie zu einer versteckten Seite darunter weiter. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bankenseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält [Clickjacking](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware)-Schutz in Form des [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die, in einem unterstützenden Browser, verhindern kann, dass eine Seite innerhalb eines Frames gerendert wird.
- Erzwingen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich der Authentifizierungsdaten, die ansonsten im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob Inhalte sicher sind, selbst wenn sie von einem nicht HTTP-Proxy stammen.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen zu HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Website immer HTTPS verwenden sollten. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS nach einer erfolgreichen Verbindung immer verwendet wird. HSTS kann entweder über [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie "sichere" Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Überprüfung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele andere Schutzmaßnahmen und Vorbehalte bei der Verwendung der oben genannten Mechanismen. Wir hoffen, dass dies Ihnen einen Überblick darüber gegeben hat, was Django bietet, Sie sollten jedoch trotzdem die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese speziellen Bedrohungen von Django auf unserer _LocalLibrary_ Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen dringend, dass Sie [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) lesen, um ein tieferes Verständnis zu gewinnen.

Der nächste und letzte Schritt in diesem Modul über Django ist die Vervollständigung der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
