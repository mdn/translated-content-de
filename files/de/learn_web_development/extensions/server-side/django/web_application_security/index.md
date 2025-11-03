---
title: Sicherheit von Django-Webanwendungen
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt — dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebaute Schutzmechanismen solche Bedrohungen handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema zur serverseitigen Programmierung "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Websitesicherheit</a>".
        Schließen Sie die Django-Tutorialthemen mindestens bis (und einschließlich) <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die Hauptmaßnahmen zu verstehen, die erforderlich sind (oder vermieden werden sollten), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Websitesicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Websitesicherheit für die serverseitige Gestaltung bedeutet und einige der häufigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der Hauptbotschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Websitesicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dies schließt `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, benutzerhochgeladene Dateien usw. ein. Überprüfen und bereinigen Sie stets alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen vom Framework behandelt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsmerkmale und wie man eine von Django unterstützte Website absichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, werden wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django-Tutorials [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) demonstrieren.

### Cross-Site-Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer zu injizieren. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Templatesystem schützt Sie vor den meisten XSS-Angriffen durch [Eskapierung spezifischer Zeichen](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die im HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website über das Create-author-Formular zu injizieren, das wir im [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite zur Erstellung von Autoren (die sich unter der URL: `http://127.0.0.1:8000/catalog/author/create/` befinden sollte).
4. Geben Sie Namen und Datumsdetails für einen neuen Benutzer ein und fügen Sie dann den folgenden Text in das Feld Nachname ein:
   `<script>alert('Test alert');</script>`.
   ![Author Form XSS Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn es ausgeführt wird, ein Warnfenster in Ihrem Browser anzeigt. Wenn die Warnung angezeigt wird, wenn Sie den Datensatz absenden, ist die Site anfällig für XSS-Bedrohungen.

5. Drücken Sie **Submit**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Autorendetailansicht XSS-Test](author_detail_alert_xss.png)

Wenn Sie sich den HTML-Quellcode der Seite ansehen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Codes umgewandelt wurden (zum Beispiel ist `>` jetzt `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Nutzung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht mit Benutzereingaben gefüllt werden (zum Beispiel wird `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, daher wird dieser Wert von Django nicht escaped).

Es ist auch möglich, dass XSS-Angriffe von anderen nicht vertrauenswürdigen Datenquellen ausgehen, wie zum Beispiel Cookies, Webservices oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie auf einer Seite eingebunden werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie eventuell Ihren eigenen Bereinigungscode hinzufügen.

### Schutz vor Cross-Site-Request-Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen unter Verwendung der Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Betrachten Sie zum Beispiel den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht auf das Geld aus! Ein ehrgeizigerer Hacker könnte den gleichen Ansatz auf anderen Websites verwenden, um viel schädlichere Aufgaben durchzuführen (zum Beispiel Geld auf ihre eigenen Konten zu überweisen usw.).

Um dies zu tun, könnten sie eine HTML-Datei wie die untenstehende erstellen, die ein Autoren-Erstellungsformular enthält (ähnlich dem, das wir im vorherigen Abschnitt verwendet haben), das sofort eingereicht wird, sobald die Datei geladen ist.
Sie würden dann die Datei an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit deren Anmeldeinformationen eingereicht und ein neuer Autor erstellt.

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

Führen Sie den Entwicklungs-Webserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie sie dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django gegen so etwas Schutz bietet!

Der Schutz ist dadurch aktiviert, dass Sie das `{% csrf_token %}` Template-Tag in Ihrer Formulardefinition einfügen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt gerendert, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer- und browserspezifischen Schlüssel und wird Formulare ablehnen, die das Feld nicht enthalten oder einen falschen Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff durchzuführen, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einbeziehen. Sie können auch nicht den "Streuwaffe"-Ansatz verwenden, indem sie eine bösartige Datei an alle Bibliothekare senden und hoffen, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browser-spezifisch ist.

Der CSRF-Schutz von Django ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten in der Datenbank ändern oder hinzufügen könnten.

### Andere Schutzmaßnahmen

Django bietet auch andere Schutzmechanismen (die meisten davon wären schwierig oder nicht besonders nützlich zu demonstrieren):

- SQL-Injection-Schutz
  - : SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Berechtigungen des Benutzers zugegriffen, geändert oder gelöscht werden können. In fast allen Fällen werden Sie die Datenbank über Djangos Querysets/Modelle zugreifen, sodass der resultierende SQL-Code vom zugrunde liegenden Datenbanktreiber ordnungsgemäß escaped wird. Wenn Sie jedoch rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, müssen Sie explizit an die Verhinderung von SQL-Injection denken.
- Clickjacking-Schutz
  - : Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare Top-Level-Site gedacht sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Schutz in Form der [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Website innerhalb eines Frames gerendert wird.
- Erzwingen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Site und dem Browser zu verschlüsseln, einschließlich Anmeldeinformationen, die andernfalls im Klartext gesendet würden (die Aktivierung von HTTPS ist dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe anderer Schutzmaßnahmen, die Sie nutzen können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, auch wenn er von einem nicht-HTTP-Proxy stammt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen zu HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Website immer HTTPS verwenden sollten. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS immer nach einer erfolgreichen Verbindung verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie 'sichere' Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Host-Header-Validierung
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Vorbehalte bei der Nutzung der obigen Mechanismen. Obwohl wir hoffen, Ihnen einen Überblick darüber gegeben zu haben, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektiven Schutz gegen eine Reihe häufiger Bedrohungen, einschließlich XSS- und CSRF-Angriffe. In diesem Artikel haben wir gezeigt, wie diese speziellen Bedrohungen von Django in unserer _LocalLibrary_-Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Websicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist das Abschließen der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
