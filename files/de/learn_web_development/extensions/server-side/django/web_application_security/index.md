---
title: Django-Webanwendungssicherheit
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. In dem Artikel [Websicherheit](/de/docs/Web/Security) haben wir zuvor einige der häufigsten Sicherheitsbedrohungen erklärt — dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebaute Schutzmaßnahmen mit solchen Bedrohungen umgehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema "Websicherheit" in der serverseitigen Programmierung "<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Websicherheit</a>".
        Schließen Sie die Django-Tutorial-Themen bis (und einschließlich) mindestens <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die wichtigsten Dinge zu verstehen, die Sie tun müssen (oder nicht tun dürfen), um Ihre Django-Webanwendung zu sichern.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Thema [Websicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Websicherheit für das serverseitige Design bedeutet, und einige der häufigsten Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Botschaften in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung den Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Websicherheit lernen können, ist **niemals den Daten vom Browser zu vertrauen**. Dies umfasst `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Nutzer ist, dass viele der häufigsten Bedrohungen durch das Framework behandelt werden! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie Sie eine von Django betriebene Website sichern.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, demonstrieren wir in diesem Artikel nur einige der Sicherheitsfunktionen im Kontext unseres Django-[LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Tutorials.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem die Benutzer dazu gebracht werden, auf einen Link zu klicken, der bewirkt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Djangos Vorlagensystem schützt Sie vor der Mehrheit der XSS-Angriffe, indem es [bestimmte Zeichen entfaltet](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML "gefährlich" sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website über das von uns eingerichtete Formular zur Erstellung von Autoren in [Django Tutorial Part 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) einzuschleusen.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Website in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Autorenerstellungsseite (URL: `http://127.0.0.1:8000/catalog/author/create/`).
4. Geben Sie Namen und Datumsdetails für einen neuen Benutzer ein und fügen Sie dann den folgenden Text zum Feld Nachname hinzu:
   `<script>alert('Test alert');</script>`.
   ![Autorenerstellungsformular XSS-Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, falls ausgeführt, ein Benachrichtigungsfeld in Ihrem Browser anzeigt. Wenn die Benachrichtigung beim Einreichen des Datensatzes angezeigt wird, ist die Site anfällig für XSS-Bedrohungen.

5. Drücken Sie **Submit**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Author Detailansicht XSS-Test](author_detail_alert_xss.png)

Wenn Sie sich den HTML-Quellcode der Seite ansehen, können Sie sehen, dass die gefährlichen Zeichen für die Skript-Tags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel ist `>` jetzt `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Vorlagen schützt Sie vor der Mehrheit der XSS-Angriffe. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht durch Benutzereingaben gefüllt werden (zum Beispiel wird `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, sodass Django diese Werte nicht entfaltet).

Es ist auch möglich, dass XSS-Angriffe aus anderen unzuverlässigen Datenquellen stammen, wie z.B. Cookies, Webdienste oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie in einer Seite eingeschlossen werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Cross-Site Request Forgery (CSRF) Schutz

CSRF-Angriffe ermöglichen es einem bösartigen Benutzer, Aktionen mit den Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Betrachten Sie beispielsweise den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich hat unser Hacker nicht das Geld im Sinn! Ein ambitionierterer Hacker könnte denselben Ansatz auf anderen Seiten verwenden, um viel schädlichere Aufgaben durchzuführen (z.B. Geld auf seine eigenen Konten zu überweisen usw.)

Um dies zu tun, könnte er eine HTML-Datei wie die untenstehende erstellen, die ein Autorenerstellungsformular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das gesendet wird, sobald die Datei geladen wird.
Er würde die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, würde das Formular mit dessen Anmeldeinformationen übermittelt und ein neuer Autor würde erstellt.

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

Führen Sie den Entwicklungs-Webserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie ihn dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen solche Dinge hat!

Der Schutz wird dadurch aktiviert, dass Sie das `{% csrf_token %}` Template-Tag in Ihre Formular-Definition aufnehmen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt gerendert, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder die ein falsches Feldwert für den Benutzer/Browser enthalten.

Um diesen Angriffstyp zu verwenden, muss der Hacker nun den CSRF-Schlüssel für den spezifischen Zielbenutzer herausfinden und einfügen. Er kann auch nicht die "Streuschuss"-Methode verwenden, um eine bösartige Datei an alle Bibliothekare zu senden und zu hoffen, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen nutzen, die Daten in der Datenbank ändern oder hinzufügen könnten.

### Andere Schutzmaßnahmen

Django bietet auch andere Formen des Schutzes (von denen die meisten schwer oder nicht besonders nützlich zu demonstrieren wären):

- SQL-Injection-Schutz
  - : SQL-Injection-Schwachstellen ermöglichen es bösartigen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Benutzerberechtigungen zugegriffen, modifiziert oder gelöscht werden können. In fast jedem Fall greifen Sie mit Djangos Querysets/Modellen auf die Datenbank zu, sodass die resultierenden SQL-Anweisungen vom zugrunde liegenden Datenbanktreiber ordnungsgemäß entwertet werden. Wenn Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, müssen Sie ausdrücklich über die Verhinderung von SQL-Injection nachdenken.
- Klickjacking-Schutz
  - : Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare oberste Seite bestimmt sind, und leitet sie auf eine verborgene Seite darunter um. Diese Technik könnte verwendet werden, um beispielsweise eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Schutz durch die [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Seite innerhalb eines Frames gerendert wird.
- Durchsetzung von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um alle Daten zwischen der Seite und dem Browser zu verschlüsseln, einschließlich Authentifizierungsanmeldeinformationen, die sonst im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, selbst wenn er von einem nicht-HTTP-Proxy stammt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der dem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Seite immer HTTPS verwenden sollten. Kombiniert mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS nach einer erfolgreichen Verbindung immer verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie "sichere" Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dies stellt sicher, dass Cookies nur über HTTPS gesendet werden.
- Überprüfung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmaßnahmen und Vorbehalte zur Nutzung der oben genannten Mechanismen. Während wir hoffen, dass dies Ihnen einen Überblick darüber gegeben hat, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe von häufigen Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie genau diese Bedrohungen durch Django auf unserer _LocalLibrary_ Website gehandhabt werden. Wir haben auch einen kurzen Überblick über einige der anderen Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Ausflug in die Websicherheit. Wir empfehlen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django ist die Durchführung der [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog).

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Anleitungen zur Sicherheitsumsetzung](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
