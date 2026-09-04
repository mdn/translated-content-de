---
title: Sicherheit von Django-Webanwendungen
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt – dieser Artikel liefert eine praktische Demonstration, wie Djangos eingebaute Schutzmechanismen mit solchen Bedrohungen umgehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>" zur serverseitigen Programmierung.
        Schließen Sie die Django-Tutorial-Themen bis (und inklusive) mindestens <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür entwickeln, was Sie tun müssen (oder nicht tun sollten), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Website-Sicherheit für das serverseitige Design bedeutet und welche häufigen Bedrohungen es abzuwehren gilt. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung den Daten des Browsers vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie bezüglich Website-Sicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dazu gehören `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, vom Benutzer hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom schlimmsten Fall aus.

Die gute Nachricht für Django-Benutzer ist, dass viele der häufigeren Bedrohungen bereits durch das Framework abgedeckt sind! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine von Django betriebene Website sichert.

## Häufige Bedrohungen/Schutzmechanismen

Anstatt die Django-Dokumentation hier zu wiederholen, demonstrieren wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django-Tutorials [LokaleBibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website).

### Cross-Site Scripting (XSS)

XSS ist ein Begriff zur Beschreibung einer Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, von wo aus sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der das JavaScript des Angreifers im Browser des Benutzers ausführt.

Djangos Template-System schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen entwertet](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LokaleBibliothek-Website über das erstellte Formular für Autoren einzuschleusen, das wir in [Django Tutorial Part 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Autor-Erstellungsseite (die sich unter der URL `http://127.0.0.1:8000/catalog/author/create/` befinden sollte).
4. Geben Sie Namen und Datum für einen neuen Benutzer ein und fügen Sie dann dem Feld Nachname den folgenden Text hinzu: `<script>alert('Test alert');</script>`.
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn es ausgeführt wird, ein Warnfeld in Ihrem Browser anzeigt. Wenn die Warnung beim Absenden des Datensatzes angezeigt wird, ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird der Datensatz wie unten angezeigt. Aufgrund der XSS-Schutzmechanismen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als einfacher Text angezeigt.
   ![Author detail view XSS test](author_detail_alert_xss.png)

Wenn Sie den Quellcode der Seite anzeigen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel wird aus `>` nun `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht durch Benutzereingaben gefüllt werden (zum Beispiel wird `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, daher entwertet Django diese Werte nicht).

Es ist auch möglich, dass XSS-Angriffe von anderen nicht vertrauenswürdigen Datenquellen ausgehen, wie z.B. Cookies, Webdiensten oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie in eine Seite eingebunden werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise ihren eigenen Bereinigungscode hinzufügen.

### Schutz vor Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen unter Verwendung der Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Beispielsweise stellen Sie sich den Fall vor, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LokaleBibliothek erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht im Geldgeschäft! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Websites verwenden, um wesentlich schädlichere Aufgaben durchzuführen (z. B. Geld auf ihre eigenen Konten überweisen usw.)

Um dies zu tun, könnte er eine HTML-Datei wie die unten stehende erstellen, die ein Autoren-Erstellungsformular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das eingereicht wird, sobald die Datei geladen ist.
Er könnte die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet würde, dann würde das Formular mit ihren Anmeldeinformationen eingereicht und ein neuer Autor würde erstellt.

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

Führen Sie den Entwicklungs-Webserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie diese dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen diese Art von Angriff bietet!

Der Schutz wird dadurch aktiviert, dass Sie das `{% csrf_token %}`-Template-Tag in Ihr Formular einfügen. Dieses Token wird dann in Ihrem HTML gerendert, wie unten gezeigt, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder die ein falsches Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu verwenden, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer herausfinden und einfügen. Sie können auch nicht den "Streuschuss"-Ansatz verwenden, bei dem eine bösartige Datei an alle Bibliothekare gesendet wird und darauf gehofft wird, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}`-Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen nutzen, die Daten in der Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmechanismen

Django bietet auch andere Formen des Schutzes an (die meistens schwer oder nicht besonders nützlich zu demonstrieren wären):

- Schutz vor SQL-Injection
  - : Schwachstellen bei SQL-Injections ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Berechtigungen des Nutzers zugegriffen, modifiziert oder gelöscht werden können. In fast allen Fällen greifen Sie mit Djangos Querysets/Models auf die Datenbank zu, sodass der resultierende SQL korrekt durch den zugrunde liegenden Datenbanktreiber entwertet wird. Wenn Sie rohe Abfragen oder benutzerdefinierte SQL schreiben müssen, benötigen Sie ein explizites Vorgehen zur Verhinderung von SQL-Injection.
- Schutz vor Clickjacking
  - : Bei diesem Angriff entführt ein böswilliger Benutzer Klicks, die für eine sichtbare oberste Website bestimmt sind, und leitet sie an eine darunter verborgene Seite weiter. Diese Technik könnte zum Beispiel verwendet werden, um eine legitime Bank-Website anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) in Form des [`X-Frame-Options`-Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), das in einem unterstützenden Browser verhindern kann, dass eine Website innerhalb eines Rahmens gerendert wird.
- Erzwingung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Website und dem Browser zu verschlüsseln, einschließlich Authentifizierungsinformationen, die sonst im Klartext gesendet würden (es wird dringend empfohlen, HTTPS zu aktivieren). Wenn HTTPS aktiviert ist, bietet Django eine Reihe anderer Schutzmaßnahmen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob Inhalte sicher sind, selbst wenn sie von einem Nicht-HTTP-Proxy eingehen.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie HTTP Strict Transport Security (HSTS). Dies ist ein HTTP-Header, der einen Browser darüber informiert, dass alle zukünftigen Verbindungen zu einer bestimmten Website immer HTTPS verwenden sollten. Kombiniert mit der Umleitung von HTTP auf HTTPS stellt diese Einstellung sicher, dass HTTPS immer nach einer erfolgreichen Verbindung verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie ‚sichere‘ Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dadurch wird sichergestellt, dass Cookies nur über HTTPS gesendet werden.
- Host-Header-Validierung
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Vorbehalte zur Verwendung der oben genannten Mechanismen. Während wir hoffen, dass dieser Artikel Ihnen einen Überblick darüber gegeben hat, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir gezeigt, wie Django diese besonderen Bedrohungen in unserer _LokaleBibliothek_-Website behandelt. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen Ihnen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django besteht darin, die [Assessment-Aufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog) abzuschließen.

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Anleitungen zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
