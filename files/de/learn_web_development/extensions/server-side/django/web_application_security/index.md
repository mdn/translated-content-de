---
title: Sicherheit von Django-Webanwendungen
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Im Artikel [Websicherheit](/de/docs/Web/Security) haben wir zuvor einige der häufigeren Sicherheitsbedrohungen erläutert – dieser Artikel zeigt praktisch, wie die integrierten Schutzmechanismen von Django mit solchen Bedrohungen umgehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema „<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>“ zur serverseitigen Programmierung.
        Bearbeiten Sie die Django-Tutorial-Themen mindestens bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die wichtigsten Maßnahmen zu verstehen, die Sie ergreifen (oder vermeiden) müssen, um Ihre Django-Webanwendung zu schützen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) bietet einen Überblick darüber, was Website-Sicherheit für serverseitiges Design bedeutet, sowie über einige der häufigeren Bedrohungen, vor denen Sie sich schützen sollten. Eine der wichtigsten Aussagen dieses Artikels lautet, dass fast alle Angriffe erfolgreich sind, wenn die Webanwendung Daten aus dem Browser vertraut.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, lautet: **Vertrauen Sie niemals Daten aus dem Browser**. Dazu gehören `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. Prüfen und bereinigen Sie stets alle eingehenden Daten. Gehen Sie immer vom schlimmsten Fall aus.

Die gute Nachricht für Django-Benutzer ist, dass das Framework viele der häufigeren Bedrohungen behandelt! Der Artikel [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation) erläutert die Sicherheitsfunktionen von Django und wie Sie eine mit Django betriebene Website absichern.

## Häufige Bedrohungen/Schutzmechanismen

Anstatt die Django-Dokumentation hier zu duplizieren, zeigen wir in diesem Artikel nur einige Sicherheitsfunktionen im Kontext unseres Django-Tutorials [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website).

### Cross-Site Scripting (XSS)

XSS ist ein Begriff für eine Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Dies wird üblicherweise erreicht, indem schädliche Skripte in der Datenbank gespeichert werden, wo sie abgerufen und anderen Benutzern angezeigt werden können, oder indem Benutzer dazu gebracht werden, auf einen Link zu klicken, der dazu führt, dass das JavaScript des Angreifers im Browser des Benutzers ausgeführt wird.

Das Template-System von Django schützt Sie vor der Mehrzahl der XSS-Angriffe, indem es [bestimmte Zeichen maskiert](https://docs.djangoproject.com/en/5.0/ref/templates/language/#automatic-html-escaping), die in HTML „gefährlich“ sind. Wir können dies demonstrieren, indem wir versuchen, mithilfe des Formulars zum Erstellen von Autoren, das wir in [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben, JavaScript in unsere LocalLibrary-Website einzuschleusen.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Website in Ihrem lokalen Browser und melden Sie sich bei Ihrem Superuser-Konto an.
3. Navigieren Sie zur Seite zum Erstellen von Autoren (sie sollte unter der URL `http://127.0.0.1:8000/catalog/author/create/` erreichbar sein).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und fügen Sie dann den folgenden Text an das Feld „Nachname“ an:
   `<script>alert('Test alert');</script>`.
   ![XSS-Test für Autorenformular](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dies ist ein harmloses Skript, das bei seiner Ausführung in Ihrem Browser ein Warnfeld anzeigt. Wenn die Warnung beim Absenden des Datensatzes angezeigt wird, ist die Website für XSS-Bedrohungen anfällig.

5. Klicken Sie auf **Submit**, um den Datensatz zu speichern.
6. Wenn Sie den Autor speichern, wird er wie unten gezeigt angezeigt. Aufgrund des XSS-Schutzes sollte `alert()` nicht ausgeführt werden. Stattdessen wird das Skript als Klartext angezeigt.
   ![XSS-Test für Autoren-Detailansicht](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite anzeigen, sehen Sie, dass die gefährlichen Zeichen für die Skript-Tags in ihre ungefährlichen Escape-Code-Entsprechungen umgewandelt wurden (beispielsweise ist `>` nun `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Die Verwendung von Django-Templates schützt Sie vor der Mehrzahl der XSS-Angriffe. Es ist jedoch möglich, diesen Schutz zu deaktivieren, und der Schutz wird nicht automatisch auf alle Tags angewendet, die normalerweise nicht durch Benutzereingaben befüllt werden (beispielsweise wird der `help_text` in einem Formularfeld üblicherweise nicht vom Benutzer bereitgestellt, daher maskiert Django diese Werte nicht).

XSS-Angriffe können auch aus anderen nicht vertrauenswürdigen Datenquellen stammen, etwa Cookies, Webdiensten oder hochgeladenen Dateien, wenn die Daten vor dem Einfügen in eine Seite nicht ausreichend bereinigt werden. Wenn Sie Daten aus solchen Quellen anzeigen, müssen Sie möglicherweise eigenen Bereinigungscode hinzufügen.

### Schutz vor Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen mit den Anmeldedaten eines anderen Benutzers auszuführen, ohne dessen Wissen oder Zustimmung. Betrachten wir beispielsweise den Fall eines Hackers, der zusätzliche Autoren für unsere LocalLibrary erstellen möchte.

> [!NOTE]
> Offensichtlich macht unser Hacker das nicht des Geldes wegen! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Websites verwenden, um wesentlich schädlichere Aufgaben auszuführen, etwa Geld auf die eigenen Konten zu überweisen usw.

Um dies zu tun, könnte der Hacker eine HTML-Datei wie die unten gezeigte erstellen, die ein Formular zum Erstellen von Autoren enthält (wie das im vorherigen Abschnitt verwendete), das abgesendet wird, sobald die Datei geladen ist.
Anschließend würde er die Datei an alle Bibliothekare senden und vorschlagen, dass sie die Datei öffnen (sie enthält harmlose Informationen, wirklich!). Wenn die Datei von einem angemeldeten Bibliothekar geöffnet wird, wird das Formular mit dessen Anmeldedaten abgesendet und ein neuer Autor erstellt.

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

Starten Sie den Entwicklungs-Webserver und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie diese anschließend im Browser. Sie sollten einen CSRF-Fehler erhalten, da Django über einen Schutz gegen solche Angriffe verfügt!

Der Schutz wird aktiviert, indem Sie das Template-Tag `{% csrf_token %}` in Ihre Formulardefinition aufnehmen. Dieses Token wird anschließend wie unten gezeigt in Ihrem HTML gerendert, mit einem Wert, der für den Benutzer im aktuellen Browser spezifisch ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generiert einen benutzer-/browserspezifischen Schlüssel und weist Formulare zurück, die das Feld nicht enthalten oder für den Benutzer/Browser einen falschen Feldwert enthalten.

Um diese Art von Angriff zu verwenden, muss der Hacker nun den CSRF-Schlüssel für den jeweiligen Zielbenutzer herausfinden und einfügen. Er kann auch nicht den „Schrotflintenansatz“ verwenden, bei dem eine bösartige Datei an alle Bibliothekare gesendet wird, in der Hoffnung, dass einer von ihnen sie öffnet, da der CSRF-Schlüssel browserspezifisch ist.

Der CSRF-Schutz von Django ist standardmäßig aktiviert. Sie sollten in Ihren Formularen immer das Template-Tag `{% csrf_token %}` verwenden und `POST` für Anfragen einsetzen, die Daten in der Datenbank ändern oder hinzufügen könnten.

### Weitere Schutzmechanismen

Django bietet auch weitere Formen des Schutzes (von denen die meisten schwer oder nicht besonders sinnvoll zu demonstrieren wären):

- Schutz vor SQL-Injection
  - : Schwachstellen für SQL-Injection ermöglichen böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen. Dadurch können Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden. In fast allen Fällen greifen Sie über Djangos Querysets/Models auf die Datenbank zu, sodass das resultierende SQL durch den zugrunde liegenden Datenbanktreiber korrekt maskiert wird. Falls Sie rohe Abfragen oder benutzerdefiniertes SQL schreiben müssen, müssen Sie ausdrücklich darüber nachdenken, wie SQL-Injection verhindert wird.
- Schutz vor Clickjacking
  - : Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare Website der obersten Ebene bestimmt sind, und leitet sie an eine darunter verborgene Seite weiter. Diese Technik könnte beispielsweise dazu verwendet werden, eine legitime Bank-Website anzuzeigen, während die Anmeldedaten in einem unsichtbaren, vom Angreifer kontrollierten [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) erfasst werden. Django enthält Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) in Form der [`X-Frame-Options` middleware](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware), die in einem unterstützenden Browser verhindern kann, dass eine Website innerhalb eines Frames gerendert wird.
- Erzwingen von TLS/HTTPS
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen der Website und dem Browser zu verschlüsseln, einschließlich Authentifizierungsdaten, die andernfalls im Klartext gesendet würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, bietet Django eine Reihe weiterer Schutzmechanismen, die Sie verwenden können:
    - [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) kann verwendet werden, um zu prüfen, ob Inhalte sicher sind, selbst wenn sie von einem Nicht-HTTP-Proxy eingehen.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) wird verwendet, um alle HTTP-Anfragen auf HTTPS umzuleiten.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/5.0/ref/middleware/#http-strict-transport-security) (HSTS). Dies ist ein HTTP-Header, der einen Browser darüber informiert, dass alle zukünftigen Verbindungen zu einer bestimmten Website immer HTTPS verwenden sollen. In Kombination mit der Umleitung von HTTP-Anfragen auf HTTPS stellt diese Einstellung sicher, dass nach einer erfolgreichen Verbindung immer HTTPS verwendet wird. HSTS kann entweder mit [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie „sichere“ Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dadurch wird sichergestellt, dass Cookies ausschließlich über HTTPS gesendet werden.
- Validierung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-ALLOWED_HOSTS), um nur Anfragen von vertrauenswürdigen Hosts zu akzeptieren.

Es gibt viele weitere Schutzmechanismen und Einschränkungen bei der Verwendung der oben genannten Mechanismen. Wir hoffen, dass dies Ihnen einen Überblick über das Angebot von Django gegeben hat, dennoch sollten Sie die Django-Sicherheitsdokumentation lesen.

## Zusammenfassung

Django bietet wirksame Schutzmechanismen gegen eine Reihe häufiger Bedrohungen, einschließlich XSS- und CSRF-Angriffen. In diesem Artikel haben wir gezeigt, wie Django mit diesen speziellen Bedrohungen in unserer _LocalLibrary_-Website umgeht. Außerdem haben wir einen kurzen Überblick über einige weitere Schutzmechanismen gegeben.

Dies war nur ein sehr kurzer Ausflug in die Websicherheit. Wir empfehlen Ihnen dringend, [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Django-Modul besteht darin, die [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog) abzuschließen.

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Leitfäden zur praktischen Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- [Security in Django](https://docs.djangoproject.com/en/5.0/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
