---
title: Sicherheit bei Django-Webanwendungen
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil des Webdesigns. In dem Artikel [Web-Sicherheit](/de/docs/Web/Security) haben wir zuvor einige der häufigsten Sicherheitsbedrohungen erläutert – dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebaute Schutzmaßnahmen diese Bedrohungen abwehren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema zur serverseitigen Programmierung "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>".
        Schließen Sie die Django-Tutorial-Themen bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zum Verständnis der Hauptmaßnahmen, die Sie ergreifen müssen (oder nicht ergreifen dürfen), um Ihre Django-Webanwendung abzusichern.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Website-Sicherheit für das serverseitige Design bedeutet, und über einige der häufigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dies umfasst `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen vom Framework behandelt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine Django-basierte Website absichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu wiederholen, demonstrieren wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django-[LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Tutorials.

### Cross-Site-Scripting (XSS)

XSS ist ein Begriff für eine Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird üblicherweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der das JavaScript des Angreifers im Browser des Benutzers ausführt.

Djangos Templatesystem schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen entwertet](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML als "gefährlich" gelten. Wir können dies demonstrieren, indem wir versuchen, JavaScript in unsere LocalLibrary-Website über das von uns eingerichtete Autor-Erstellungsformular in [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) einzuschleusen.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich mit Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite zur Autor-Erstellung (die sich unter der URL `http://127.0.0.1:8000/catalog/author/create/` befinden sollte).
4. Geben Sie Namen und Datum für einen neuen Benutzer ein und fügen Sie dann den folgenden Text zum Feld Nachname hinzu:
   `<script>alert('Test alert');</script>`.
   ![Autor-Formular XSS-Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, falls ausgeführt, eine Alert-Box in Ihrem Browser anzeigen wird. Wenn die Alert-Box angezeigt wird, wenn Sie den Datensatz absenden, dann ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Detailansicht des Autors XSS-Test](author_detail_alert_xss.png)

Wenn Sie den Quellcode der Seite anzeigen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel wurde `>` zu `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Der Einsatz von Django-Templates schützt Sie vor den meisten XSS-Angriffen. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewandt, die normalerweise nicht mit Benutzereingaben gefüllt würden (zum Beispiel wird der `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, daher entwertet Django diese Werte nicht).

XSS-Angriffe können auch von anderen nicht vertrauenswürdigen Datenquellen, wie Cookies, Webdiensten oder hochgeladenen Dateien, ausgehen (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie in eine Seite eingebunden werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross-Site-Request-Forgery-(CSRF)-Schutz

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen mit den Anmeldedaten eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Betrachten Sie zum Beispiel den Fall, in dem ein Hacker zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht auf das Geld aus! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Seiten nutzen, um viel schädlichere Aufgaben auszuführen (wie das Überweisen von Geld auf eigene Konten usw.).

Um dies zu erreichen, könnten sie eine HTML-Datei wie die untenstehende erstellen, die ein Autor-Erstellungsformular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das sofort beim Laden der Datei übermittelt wird.
Sie würden dann die Datei an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit seinen Anmeldedaten übermittelt und ein neuer Autor erstellt.

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

Führen Sie den Entwicklungswebserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie diese im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django gegen solche Aktivitäten schützt!

Die Aktivierung des Schutzes erfolgt, indem Sie das Template-Tag `{% csrf_token %}` in die Formular-Definition aufnehmen. Dieses Token wird dann wie unten gezeigt in Ihrem HTML mit einem Wert gerendert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browser-spezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder einen falschen Feldwert für den Benutzer/Browser enthalten.

Um diesen Angriffstyp zu nutzen, muss der Hacker nun den CSRF-Schlüssel des spezifischen Zielbenutzers entdecken und einfügen. Sie können auch nicht mehr die „Streuerschuss“-Methode verwenden, einer böswilligen Datei an alle Bibliothekare zu senden und darauf zu hoffen, dass einer von ihnen die Datei öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das Template-Tag `{% csrf_token %}` in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten zur Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmaßnahmen

Django bietet auch andere Schutzmechanismen (von denen die meisten schwer oder nicht besonders nützlich zu demonstrieren sind):

- Schutz vor SQL-Injection
  - : SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Benutzerberechtigungen zugegriffen, geändert oder gelöscht werden können. In fast jedem Fall greifen Sie mit Djangos Querysets/Models auf die Datenbank zu, sodass der resultierende SQL-Code vom zugrunde liegenden Datenbanktreiber ordnungsgemäß entwertet wird. Wenn Sie rohe Abfragen oder benutzerdefinierten SQL-Code schreiben müssen, müssen Sie explizit über die Verhinderung von SQL-Injections nachdenken.
- Schutz gegen Clickjacking
  - : Bei diesem Angriff nimmt ein böswilliger Benutzer Klicks, die für eine sichtbare Top-Level-Seite gedacht sind, und leitet sie auf eine versteckte Seite darunter. Diese Technik könnte beispielsweise genutzt werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Element/iframe) zu erfassen, der vom Angreifer kontrolliert wird. Django enthält einen [Clickjacking-Schutz](/de/docs/Web/Security/Attacks/Clickjacking) in Form des [`X-Frame-Options`-Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), der in einem unterstützenden Browser verhindern kann, dass eine Seite in einem Rahmen gerendert wird.
- Durchsetzung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Verkehr zwischen der Seite und dem Browser zu verschlüsseln, einschließlich Anmeldeinformationen, die sonst im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django mehrere weitere Schutzmaßnahmen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem Nicht-HTTP-Proxy stammt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Seite immer HTTPS verwenden sollen. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS nach einer erfolgreichen Verbindung immer verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie 'sichere' Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Validierung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Hinweise zur Nutzung der oben genannten Mechanismen. Wir hoffen, dass dies Ihnen einen Überblick darüber gibt, was Django bietet, aber Sie sollten trotzdem die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese spezifischen Bedrohungen von Django auf unserer _LocalLibrary_-Website behandelt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war nur ein sehr kurzer Ausflug in die Web-Sicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu gewinnen.

Der nächste und letzte Schritt in diesem Modul über Django ist die abschließende Bearbeitung der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Umsetzung von Sicherheitsmaßnahmen](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
