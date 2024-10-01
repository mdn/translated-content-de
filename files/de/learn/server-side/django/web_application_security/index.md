---
title: Django-Webanwendungssicherheit
slug: Learn/Server-side/Django/web_application_security
l10n:
  sourceCommit: d4c050c653bb05faa1052ecc102b0419cb0a97ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben in dem Artikel [Web-Sicherheit](/de/docs/Web/Security) einige der gängigsten Sicherheitsbedrohungen erklärt — dieser Artikel bietet eine praktische Demonstration, wie die integrierten Schutzfunktionen von Django solche Bedrohungen handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema „<a href="/de/docs/Learn/Server-side/First_steps/Website_security">Websicherheit</a>“ zur serverseitigen Programmierung.
        Schließen Sie die Django-Tutorial-Themen bis (und inklusive) mindestens <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Hauptmaßnahmen zu verstehen, die Sie ergreifen müssen (oder nicht ergreifen dürfen), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Thema [Web-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Websicherheit für serverseitiges Design bedeutet und einige der häufigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung den Daten des Browsers vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über die Websicherheit lernen können, ist, **niemals den Daten des Browsers zu vertrauen**. Dies beinhaltet `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, vom Benutzer hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigeren Bedrohungen durch das Framework behandelt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine von Django betriebene Website sichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, werden wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django-[LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Tutorials demonstrieren.

### Cross-Site-Scripting (XSS)

XSS ist ein Begriff zur Beschreibung einer Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _durch_ die Website in die Browser anderer Benutzer einzuspeisen. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Templatesystem schützt Sie gegen die Mehrheit der XSS-Angriffe, indem es [spezifische Zeichen](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping) verhindert, die im HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website einzuspeisen, indem wir das Formular zum Erstellen von Autoren verwenden, das wir im [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und loggen Sie sich in Ihr Superuser-Konto ein.
3. Navigieren Sie zur Autorenerstellungsseite (die sich unter der URL befinden sollte: `http://127.0.0.1:8000/catalog/author/create/`).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text dem Feld Nachname hinzu:
   `<script>alert('Test alert');</script>`.
   ![Autorenformular XSS Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn es ausgeführt wird, ein Warnfenster in Ihrem Browser anzeigt. Wenn die Warnung beim Absenden des Datensatzes angezeigt wird, ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Senden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten angezeigt. Aufgrund der XSS-Schutzeinrichtungen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Autoren-Detailansicht XSS Test](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite anzeigen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel ist `>` jetzt `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht von Benutzereingaben gefüllt werden (zum Beispiel wird der `help_text` in einem Formularfeld normalerweise nicht vom Benutzer geliefert, sodass Django diese Werte nicht maskiert).

Es ist auch möglich, dass XSS-Angriffe von anderen nicht vertrauenswürdigen Datenquellen ausgehen, wie Cookies, Webdiensten oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt sind, bevor sie auf einer Seite eingeschlossen werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Schutz vor Cross-Site-Request-Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen unter Verwendung der Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Betrachten Sie zum Beispiel den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht wegen des Geldes dabei! Ein ambitionierterer Hacker könnte den gleichen Ansatz auf anderen Seiten verwenden, um viel schädlichere Aufgaben auszuführen (wie z.B. das Überweisen von Geld auf ihre eigenen Konten usw.).

Um dies zu erreichen, könnte er eine HTML-Datei wie die unten stehende erstellen, die ein Autorenformular (wie das, das wir im vorherigen Abschnitt verwendet haben) enthält, das gesendet wird, sobald die Datei geladen wird.
Er würde die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, würde das Formular mit seinen Anmeldeinformationen gesendet und ein neuer Autor würde erstellt.

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

Führen Sie den Entwicklungswebserver aus und loggen Sie sich mit Ihrem Superuser-Konto ein. Kopieren Sie den obigen Text in eine Datei und öffnen Sie sie im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen diese Art von Angriff hat!

Der Schutz wird aktiviert, indem Sie das `{% csrf_token %}` Template-Tag in Ihre Formular-Definition aufnehmen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt dargestellt, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen nutzer-/browser-spezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder die für den Nutzer/Browser einen falschen Feldwert enthalten.

Um diese Art von Angriff zu verwenden, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einbeziehen. Zudem kann er nicht die „Streuangriffs“-Methode verwenden, indem er eine bösartige Datei an alle Bibliothekare sendet und darauf hofft, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten in der Datenbank ändern oder hinzufügen könnten.

### Andere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (die meisten wären schwer oder nicht besonders nützlich zu demonstrieren):

- Schutz vor SQL-Injection
  - : SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen und so Daten unabhängig von den Benutzerberechtigungen zuzugreifen, zu ändern oder zu löschen. Fast in jedem Fall werden Sie auf die Datenbank mit Hilfe von Djangos Querysets/Modellen zugreifen, sodass das resultierende SQL vom zugrunde liegenden Datenbanktreiber korrekt maskiert wird. Wenn Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, müssen Sie explizit über die Verhinderung von SQL-Injection nachdenken.
- Schutz vor Clickjacking
  - : Bei diesem Angriff entführt ein böswilliger Benutzer Klicks, die für eine sichtbare Top-Level-Site bestimmt sind und leitet sie auf eine darunter liegende, versteckte Seite um. Diese Technik könnte verwendet werden, um beispielsweise eine legitime Bank-Website anzuzeigen, jedoch die Anmeldedaten in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Element/iframe), das vom Angreifer kontrolliert wird, zu erfassen. Django enthält {{Glossary("Clickjacking", "Clickjacking")}}-Schutz in Form der [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Site in einem Frame gerendert wird.
- Durchsetzung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Verkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich Authentifizierungsdaten, die andernfalls im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe von weiteren Schutzmöglichkeiten:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem nicht-HTTP-Proxy stammt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwendung von [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einen Browser darüber informiert, dass alle zukünftigen Verbindungen zu einer bestimmten Site immer HTTPS verwenden sollten. In Kombination mit der Umleitung von HTTP-Anfragen auf HTTPS stellt diese Einstellung sicher, dass nach einer erfolgreichen Verbindung stets HTTPS verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwendung „sicherer“ Cookies durch Setzen der Einstellungen [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True`. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Host-Header-Validierung
  - : Verwendung von [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Vorbehalte bei der Verwendung der oben genannten Mechanismen. Obwohl wir hoffen, dass dies Ihnen einen Überblick über das bietet, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe häufiger Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese speziellen Bedrohungen von Django in unserer _LocalLibrary_-Website gehandhabt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen dringend, dass Sie [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist die Durchführung der [Bewertungsaufgabe](/de/docs/Learn/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
