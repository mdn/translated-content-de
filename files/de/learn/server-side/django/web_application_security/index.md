---
title: Django Webanwendungssicherheit
slug: Learn/Server-side/Django/web_application_security
l10n:
  sourceCommit: d4c050c653bb05faa1052ecc102b0419cb0a97ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigeren Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt – dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebauter Schutz solche Bedrohungen handhabt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema „<a href="/de/docs/Learn/Server-side/First_steps/Website_security">Website-Sicherheit</a>“ in der serverseitigen Programmierung.
        Schließen Sie die Themen des Django-Tutorials bis (einschließlich) mindestens <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a> ab.
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

## Übersicht

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Website-Sicherheit für serverseitiges Design bedeutet, und einige der häufigeren Bedrohungen, gegen die Sie sich schützen sollten. Eine der wichtigsten Aussagen in diesem Artikel ist, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten vom Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über die Sicherheit von Websites lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dies umfasst `GET`-Anfrage-Daten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Benutzer ist, dass viele der häufigeren Bedrohungen vom Framework gehandhabt werden! Der Artikel [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erklärt Djangos Sicherheitsfunktionen und wie man eine mit Django betriebene Website sichert.

## Häufige Bedrohungen/Schutzmaßnahmen

Anstatt die Django-Dokumentation hier zu duplizieren, werden wir in diesem Artikel lediglich einige der Sicherheitsfunktionen im Kontext unseres Django-Tutorials [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) demonstrieren.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, Client-seitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird normalerweise erreicht, indem bösartige Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, einen Link anzuklicken, der dazu führt, dass das JavaScript des Angreifers vom Browser des Benutzers ausgeführt wird.

Das Templatesystem von Django schützt Sie vor den meisten XSS-Angriffen, indem es [bestimmte Zeichen](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping) „entkommt“, die im HTML „gefährlich“ sind. Wir können dies demonstrieren, indem wir versuchen, etwas JavaScript in unsere LocalLibrary-Website über das Erstell-Author-Formular einzuschleusen, das wir in [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms) eingerichtet haben.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Seite in Ihrem lokalen Browser und melden Sie sich mit Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite zur Erstellung eines Authors (diese sollte unter der URL sein: `http://127.0.0.1:8000/catalog/author/create/`).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text in das Feld Nachname ein:
   `<script>alert('Test alert');</script>`.
   ![Autor-Formular XSS-Test](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das, wenn es ausgeführt wird, ein Alarmfenster in Ihrem Browser anzeigt. Wenn der Alarm angezeigt wird, wenn Sie den Datensatz speichern, dann ist die Seite anfällig für XSS-Bedrohungen.

5. Drücken Sie **Absenden**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird dieser wie unten dargestellt angezeigt. Aufgrund der XSS-Schutzmaßnahmen sollte das `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![Autor Detailansicht XSS-Test](author_detail_alert_xss.png)

Wenn Sie den HTML-Quelltext der Seite anzeigen, sehen Sie, dass die gefährlichen Zeichen für die Skripttags in ihre harmlosen Escape-Code-Äquivalente umgewandelt wurden (zum Beispiel wird `>` jetzt zu `&gt;`)

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor der Mehrheit der XSS-Angriffe. Es ist jedoch möglich, diesen Schutz auszuschalten, und er wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht durch Benutzereingaben gefüllt werden (zum Beispiel wird der `help_text` in einem Formularfeld normalerweise nicht vom Benutzer bereitgestellt, daher entgeht Django diese Werte nicht).

XSS-Angriffe können auch von anderen nicht vertrauenswürdigen Datenquellen stammen, wie Cookies, Webservices oder hochgeladenen Dateien (wann immer die Daten nicht ausreichend bereinigt werden, bevor sie auf einer Seite eingebunden werden). Wenn Sie Daten aus diesen Quellen anzeigen, müssen Sie möglicherweise Ihren eigenen Bereinigungscode hinzufügen.

### Schutz gegen Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen mit den Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen. Betrachten Sie zum Beispiel den Fall, in dem wir einen Hacker haben, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich ist unser Hacker nicht des Geldes wegen dabei! Ein ambitionierter Hacker könnte denselben Ansatz auf anderen Seiten verwenden, um weitaus schädlichere Aufgaben auszuführen (zum Beispiel um Geld auf seine eigenen Konten zu überweisen usw.)

Um dies zu tun, könnten sie eine HTML-Datei wie die untenstehende erstellen, die ein Autoren-Erstellungsformular enthält (wie das, das wir im vorherigen Abschnitt verwendet haben), das gesendet wird, sobald die Datei geladen wird.
Sie würden die Datei dann an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält einige harmlose Informationen, ehrlich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, würde das Formular mit ihren Anmeldeinformationen gesendet und ein neuer Autor würde erstellt.

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

Führen Sie den Entwicklungs-Webserver aus und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie sie dann im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django einen Schutz gegen solche Dinge hat!

Der Weg, wie der Schutz aktiviert wird, besteht darin, dass Sie das `{% csrf_token %}` Template-Tag in Ihre Formulardefinition aufnehmen. Dieses Token wird dann in Ihrem HTML wie unten gezeigt gerendert, mit einem Wert, der spezifisch für den Benutzer im aktuellen Browser ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django erzeugt einen benutzer-/browser-spezifischen Schlüssel und lehnt Formulare ab, die das Feld nicht enthalten oder einen falschen Feldwert für den Benutzer/Browser enthalten.

Um diese Art von Angriff zu verwenden, muss der Hacker jetzt den CSRF-Schlüssel für den spezifischen Zielbenutzer entdecken und einfügen. Sie können auch nicht den "Streuschuss"-Ansatz verwenden und eine bösartige Datei an alle Bibliothekare senden, in der Hoffnung, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browser-spezifisch ist.

Djangos CSRF-Schutz ist standardmäßig aktiviert. Sie sollten immer das `{% csrf_token %}` Template-Tag in Ihren Formularen verwenden und `POST` für Anfragen verwenden, die Daten in die Datenbank ändern oder hinzufügen könnten.

### Andere Schutzmaßnahmen

Django bietet auch andere Schutzmaßnahmen (von denen die meisten schwer oder nicht besonders nützlich zu demonstrieren wären):

- SQL-Injection-Schutz
  - : SQL-Injection-Sicherheitslücken ermöglichen es bösartigen Benutzern, beliebigen SQL-Code in einer Datenbank auszuführen, wodurch Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden können. In fast jedem Fall greifen Sie mit Djangos Abfragen/Modellen auf die Datenbank zu, sodass das resultierende SQL vom zugrunde liegenden Datenbanktreiber ordnungsgemäß entkoppelt wird. Wenn Sie rohe Abfragen oder benutzerdefinierte SQL verwenden müssen, müssen Sie ausdrücklich darüber nachdenken, SQL-Injection zu verhindern.
- Clickjacking-Schutz
  - : Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare oberste Seite bestimmt sind, und leitet sie zu einer darunter liegenden versteckten Seite um. Diese Technik könnte zum Beispiel verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren [`<iframe>`](/de/docs/Web/HTML/Element/iframe) zu erfassen, das vom Angreifer kontrolliert wird. Django enthält [Clickjacking](/de/docs/Glossary/Clickjacking) Schutz in Form der [`X-Frame-Options` Middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Seite innerhalb eines Rahmens gerendert wird.
- Durchsetzen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Traffic zwischen der Website und dem Browser zu verschlüsseln, einschließlich Authentifizierungsausrüstung, die andernfalls im Klartext gesendet würde (das Aktivieren von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmaßnahmen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu überprüfen, ob der Inhalt sicher ist, auch wenn er von einem Nicht-HTTP-Proxy stammt.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dabei handelt es sich um einen HTTP-Header, der einem Browser mitteilt, dass alle zukünftigen Verbindungen zu einer bestimmten Site immer HTTPS verwenden sollen. In Kombination mit der Umleitung von HTTP-Anfragen zu HTTPS stellt diese Einstellung sicher, dass HTTPS immer nach einer erfolgreichen Verbindung verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie „sichere“ Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dadurch wird sichergestellt, dass Cookies nur über HTTPS gesendet werden.
- Host-Header-Validierung
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele andere Schutzmaßnahmen und Einschränkungen bei der Verwendung der oben genannten Mechanismen. Obwohl wir hoffen, dass dies Ihnen einen Überblick über das bietet, was Django bietet, sollten Sie dennoch die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet effektive Schutzmaßnahmen gegen eine Reihe häufiger Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir demonstriert, wie diese speziellen Bedrohungen von Django in unserer _LocalLibrary_ Website gehandhabt werden. Wir haben auch einen kurzen Überblick über einige andere Schutzmaßnahmen gegeben.

Dies war ein sehr kurzer Abstecher in die Web-Sicherheit. Wir empfehlen dringend, [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Modul über Django besteht darin, die [Bewertungsaufgabe](/de/docs/Learn/Server-side/Django/django_assessment_blog) abzuschließen.

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Implementierung von Sicherheit](/de/docs/Web/Security/Practical_implementation_guides)
- [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
