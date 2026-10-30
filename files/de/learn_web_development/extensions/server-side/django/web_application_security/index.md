---
title: Sicherheit von Django-Webanwendungen
short-title: Django security
slug: Learn_web_development/Extensions/Server-side/Django/web_application_security
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}

Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil der Gestaltung jeder Website. Einige der häufigsten Sicherheitsbedrohungen haben wir bereits im Artikel [Websicherheit](/de/docs/Web/Security) erläutert. Dieser Artikel zeigt anhand praktischer Beispiele, wie die integrierten Schutzmechanismen von Django mit solchen Bedrohungen umgehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie das Thema „<a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security">Website-Sicherheit</a>“ zur serverseitigen Programmierung.
        Bearbeiten Sie die Themen des Django-Tutorials mindestens bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die wichtigsten Maßnahmen kennenzulernen, die Sie ergreifen oder vermeiden sollten, um Ihre Django-Webanwendung abzusichern.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Das Thema [Website-Sicherheit](/de/docs/Web/Security) gibt einen Überblick darüber, was Website-Sicherheit bei der serverseitigen Entwicklung bedeutet und gegen welche häufigen Bedrohungen Sie sich schützen sollten. Eine der wichtigsten Aussagen des Artikels lautet: Fast alle Angriffe sind erfolgreich, wenn die Webanwendung Daten aus dem Browser vertraut.

> [!WARNING]
> Die wichtigste Lehre zur Website-Sicherheit lautet: **Vertrauen Sie niemals Daten aus dem Browser**. Dazu gehören `GET`-Anfragedaten in URL-Parametern, `POST`-Daten, HTTP-Header und Cookies, von Benutzern hochgeladene Dateien usw. Prüfen und bereinigen Sie alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Die gute Nachricht für Django-Benutzer ist, dass das Framework viele der häufigsten Bedrohungen abwehrt! Der Artikel [Sicherheit in Django](https://docs.djangoproject.com/en/6.1/topics/security/) (Django-Dokumentation) erläutert die Sicherheitsfunktionen von Django und wie Sie eine Django-gestützte Website absichern.

## Häufige Bedrohungen und Schutzmechanismen

Statt hier die Django-Dokumentation zu wiederholen, demonstrieren wir in diesem Artikel einige Sicherheitsfunktionen anhand unseres Django-Tutorials zu [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website).

### Cross-Site-Scripting (XSS)

XSS bezeichnet eine Klasse von Angriffen, bei denen Angreifer clientseitige Skripte _über_ eine Website in die Browser anderer Benutzer einschleusen. Dies geschieht meist, indem schädliche Skripte in der Datenbank gespeichert werden, wo sie später abgerufen und anderen Benutzern angezeigt werden. Eine andere Möglichkeit besteht darin, Benutzer zum Anklicken eines Links zu bewegen, der das JavaScript des Angreifers in deren Browser ausführt.

Das Template-System von Django schützt Sie vor den meisten XSS-Angriffen, indem es bestimmte in HTML „gefährliche“ Zeichen [maskiert](https://docs.djangoproject.com/en/6.1/ref/templates/language/#automatic-html-escaping). Wir können dies demonstrieren, indem wir versuchen, über das Formular zum Anlegen von Autoren, das wir in [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) eingerichtet haben, JavaScript in unsere LocalLibrary-Website einzuschleusen.

1. Starten Sie die Website mit dem Entwicklungsserver (`python3 manage.py runserver`).
2. Öffnen Sie die Website in Ihrem lokalen Browser und melden Sie sich mit Ihrem Superuser-Konto an.
3. Rufen Sie die Seite zum Anlegen eines Autors auf (sie sollte unter `http://127.0.0.1:8000/catalog/author/create/` erreichbar sein).
4. Geben Sie Namen und Datumsangaben für einen neuen Benutzer ein und hängen Sie im Feld „Last Name“ den folgenden Text an:
   `<script>alert('Test alert');</script>`.
   ![XSS-Test im Formular zum Anlegen eines Autors](author_create_form_alert_xss.png)

   > [!NOTE]
   > Dieses Skript ist harmlos. Wenn es ausgeführt wird, zeigt es in Ihrem Browser ein Hinweisfenster an. Erscheint der Hinweis beim Absenden des Datensatzes, ist die Website für XSS-Angriffe anfällig.

5. Klicken Sie auf **Submit**, um den Datensatz zu speichern.
6. Nach dem Speichern wird der Autor wie unten dargestellt angezeigt. Dank der XSS-Schutzmechanismen sollte `alert()` nicht ausgeführt werden. Stattdessen erscheint das Skript als reiner Text.
   ![XSS-Test in der Detailansicht eines Autors](author_detail_alert_xss.png)

Wenn Sie den HTML-Quellcode der Seite anzeigen, sehen Sie, dass die gefährlichen Zeichen der Script-Tags durch ihre harmlosen Escape-Sequenzen ersetzt wurden (beispielsweise ist `>` nun `&gt;`).

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#x27;Test alert&#x27;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Django-Templates schützen Sie vor den meisten XSS-Angriffen. Allerdings lässt sich dieser Schutz deaktivieren. Außerdem wird er nicht automatisch auf alle Tags angewendet, deren Werte normalerweise nicht aus Benutzereingaben stammen (beispielsweise wird der `help_text` eines Formularfelds gewöhnlich nicht von Benutzern bereitgestellt, weshalb Django diese Werte nicht maskiert).

XSS-Angriffe können auch von anderen nicht vertrauenswürdigen Datenquellen ausgehen, etwa von Cookies, Webdiensten oder hochgeladenen Dateien – immer dann, wenn die Daten vor dem Einfügen in eine Seite nicht ausreichend bereinigt werden. Wenn Sie Daten aus solchen Quellen anzeigen, müssen Sie möglicherweise eigenen Code zur Bereinigung hinzufügen.

### Content Security Policy (CSP)

Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) bietet eine zusätzliche Schutzebene gegen XSS und andere Injection-Angriffe.
Eine CSP ist ein HTTP-Header, der dem Browser mitteilt, aus welchen Quellen eine Seite Inhalte wie Skripte, Stylesheets und Bilder laden darf.
Gelingt es einem Angreifer, ein Skript in eine Seite einzuschleusen, verweigert der Browser dessen Ausführung, sofern es nicht aus einer erlaubten Quelle stammt.

Ab Django 6.0 können Sie eine CSP mit der integrierten [`ContentSecurityPolicyMiddleware`](https://docs.djangoproject.com/en/6.1/ref/middleware/#django.middleware.csp.ContentSecurityPolicyMiddleware) von Django festlegen.
Um sie für LocalLibrary zu aktivieren, öffnen Sie **/locallibrary/settings.py** und fügen Sie die Middleware am Ende der Liste `MIDDLEWARE` hinzu:

```python
MIDDLEWARE = [
    # …
    'django.middleware.csp.ContentSecurityPolicyMiddleware',
]
```

Definieren Sie anschließend die Richtlinie über die Einstellung [`SECURE_CSP`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_CSP):

```python
# Content Security Policy: only allow resources from this site,
# plus the Bootstrap stylesheet from the jsDelivr CDN.
from django.utils.csp import CSP

SECURE_CSP = {
    "default-src": [CSP.SELF],
    "style-src": [CSP.SELF, "https://cdn.jsdelivr.net"],
}
```

Die Direktive `default-src` erlaubt dem Browser, Ressourcen nur von unserer eigenen Website zu laden (`CSP.SELF` steht für die Quelle `'self'`).
Die Direktive `style-src` erlaubt zusätzlich Stylesheets von dem CDN, das das in unserem Basis-Template verwendete Bootstrap-CSS bereitstellt.

Da diese Richtlinie keine Inline-Skripte oder Inline-Styles zulässt, blockiert der Browser auch Inline-`<script>`-Elemente, `style`-Attribute und ähnlichen Code, der in die Seite eingebettet ist.
Genau solchen Code schleusen XSS-Angriffe ein.
Deshalb verwenden die LocalLibrary-Templates CSS-Klassen statt `style`-Attributen.
Wenn Sie ein Inline-Skript benötigen, kann Django dafür eine [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) erzeugen.
Fügen Sie die Nonce dem Attribut [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce) des Skripts hinzu, um dessen Ausführung zu erlauben. Dies wird in [Djangos Content Security Policy verwenden](https://docs.djangoproject.com/en/6.1/howto/csp/#nonce-config) beschrieben.

Starten Sie den Entwicklungsserver und öffnen Sie auf einer beliebigen Seite die Entwicklertools Ihres Browsers.
In der Antwort sollten Sie den Header `Content-Security-Policy` sehen; in der Konsole sollten keine CSP-Fehler erscheinen.

> [!NOTE]
> Mit der Einstellung [`SECURE_CSP_REPORT_ONLY`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_CSP_REPORT_ONLY) können Sie eine Richtlinie testen, bevor Sie sie durchsetzen.
> Der Browser meldet dann Verstöße in der Konsole, blockiert aber nichts.

### Schutz vor Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, ohne Wissen oder Einwilligung eines anderen Benutzers Aktionen mit dessen Zugangsdaten auszuführen. Stellen Sie sich beispielsweise einen Hacker vor, der zusätzliche Autoren für unsere LocalLibrary anlegen möchte.

> [!NOTE]
> Natürlich geht es unserem Hacker dabei nicht ums Geld! Ein ehrgeizigerer Hacker könnte denselben Ansatz auf anderen Websites nutzen, um wesentlich größeren Schaden anzurichten, etwa indem er Geld auf eigene Konten überweist.

Dazu könnte er eine HTML-Datei wie die folgende erstellen. Sie enthält ein Formular zum Anlegen eines Autors (wie das im vorherigen Abschnitt verwendete), das unmittelbar nach dem Laden der Datei abgesendet wird.
Anschließend würde er die Datei an alle Bibliothekare senden und ihnen nahelegen, sie zu öffnen (sie enthält ganz bestimmt nur harmlose Informationen!). Öffnet ein angemeldeter Bibliothekar die Datei, wird das Formular mit dessen Zugangsdaten abgesendet und ein neuer Autor angelegt.

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

Starten Sie den Web-Entwicklungsserver und melden Sie sich mit Ihrem Superuser-Konto an. Kopieren Sie den obigen Text in eine Datei und öffnen Sie diese anschließend im Browser. Sie sollten einen CSRF-Fehler erhalten, denn Django schützt vor solchen Angriffen!

Der Schutz wird aktiviert, indem Sie das Template-Tag `{% csrf_token %}` in Ihre Formulardefinition aufnehmen. Dieses Token erscheint dann wie unten gezeigt in Ihrem HTML, mit einem Wert, der für den Benutzer im aktuellen Browser spezifisch ist.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django erzeugt einen benutzer- und browserspezifischen Schlüssel und weist Formulare zurück, die das Feld nicht enthalten oder für den jeweiligen Benutzer und Browser einen falschen Feldwert aufweisen.

Um diesen Angriff durchzuführen, müsste der Hacker nun den CSRF-Schlüssel des betreffenden Benutzers herausfinden und einfügen. Auch die „Gießkannenmethode“, eine schädliche Datei an alle Bibliothekare zu senden und darauf zu hoffen, dass einer sie öffnet, funktioniert nicht mehr, da der CSRF-Schlüssel browserspezifisch ist.

Der CSRF-Schutz von Django ist standardmäßig aktiviert. Verwenden Sie in Ihren Formularen immer das Template-Tag `{% csrf_token %}` und für Anfragen, die Daten in der Datenbank ändern oder hinzufügen könnten, `POST`.

### Weitere Schutzmechanismen

Django bietet außerdem weitere Schutzmechanismen, von denen sich die meisten nur schwer demonstrieren ließen oder deren Demonstration wenig aufschlussreich wäre:

- Schutz vor SQL-Injection
  - : Sicherheitslücken für SQL-Injection ermöglichen es böswilligen Benutzern, beliebigen SQL-Code in einer Datenbank auszuführen. Dadurch können sie unabhängig von ihren Berechtigungen auf Daten zugreifen sowie diese ändern oder löschen. In fast allen Fällen greifen Sie über die QuerySets und Modelle von Django auf die Datenbank zu. Der zugrunde liegende Datenbanktreiber maskiert das daraus erzeugte SQL daher ordnungsgemäß. Wenn Sie Raw Queries oder eigenes SQL schreiben müssen, sollten Sie ausdrücklich darauf achten, SQL-Injection zu verhindern.
- Schutz vor Clickjacking
  - : Bei diesem Angriff fängt ein böswilliger Benutzer Klicks ab, die für eine sichtbare Website bestimmt sind, und leitet sie an eine darunter verborgene Seite weiter. Mit dieser Technik könnte beispielsweise eine echte Bankwebsite angezeigt werden, während die Anmeldedaten über ein unsichtbares, vom Angreifer kontrolliertes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) abgefangen werden. Django bietet [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Schutz durch die [`X-Frame-Options`-Middleware](https://docs.djangoproject.com/en/6.1/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware). Sie kann in Browsern, die diese Funktion unterstützen, verhindern, dass eine Website innerhalb eines Frames dargestellt wird.
- TLS/HTTPS erzwingen
  - : TLS/HTTPS kann auf dem Webserver aktiviert werden, um den gesamten Datenverkehr zwischen Website und Browser zu verschlüsseln. Dazu gehören auch Anmeldedaten, die andernfalls im Klartext übertragen würden (die Aktivierung von HTTPS wird dringend empfohlen). Wenn HTTPS aktiviert ist, stellt Django weitere Schutzmechanismen bereit:
    - Mit [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_PROXY_SSL_HEADER) lässt sich prüfen, ob Inhalte über eine sichere Verbindung übertragen werden, auch wenn sie über einen Nicht-HTTP-Proxy eingehen.
    - [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_SSL_REDIRECT) leitet alle HTTP-Anfragen an HTTPS weiter.
    - Verwenden Sie [HTTP Strict Transport Security](https://docs.djangoproject.com/en/6.1/ref/middleware/#http-strict-transport-security) (HSTS). Dieser HTTP-Header teilt dem Browser mit, dass er für alle künftigen Verbindungen zu einer bestimmten Website stets HTTPS verwenden soll. Zusammen mit der Weiterleitung von HTTP-Anfragen an HTTPS stellt diese Einstellung sicher, dass nach einer erfolgreichen Verbindung immer HTTPS verwendet wird. HSTS kann entweder über [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_HSTS_SECONDS) und [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) oder auf dem Webserver konfiguriert werden.
    - Verwenden Sie „sichere“ Cookies, indem Sie [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-SESSION_COOKIE_SECURE) und [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-CSRF_COOKIE_SECURE) auf `True` setzen. Dadurch werden Cookies ausschließlich über HTTPS gesendet.
- Validierung des Host-Headers
  - : Verwenden Sie [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-ALLOWED_HOSTS), um nur Anfragen für vertrauenswürdige Hosts anzunehmen.

Es gibt viele weitere Schutzmechanismen und Einschränkungen bei der Verwendung der oben genannten Verfahren. Wir hoffen, Ihnen einen Überblick über die Möglichkeiten von Django gegeben zu haben. Lesen Sie dennoch die Sicherheitsdokumentation von Django.

## Zusammenfassung

Django bietet wirksamen Schutz vor einer Reihe häufiger Bedrohungen, darunter XSS- und CSRF-Angriffe. In diesem Artikel haben wir anhand unserer _LocalLibrary_-Website gezeigt, wie Django mit diesen Bedrohungen umgeht, und als zusätzliche Abwehr gegen XSS eine Content Security Policy hinzugefügt. Außerdem haben wir einige weitere Schutzmechanismen kurz vorgestellt.

Dies war nur ein kurzer Ausflug in die Websicherheit. Wir empfehlen Ihnen dringend, [Sicherheit in Django](https://docs.djangoproject.com/en/6.1/topics/security/) zu lesen, um ein tieferes Verständnis zu erlangen.

Der nächste und letzte Schritt in diesem Django-Modul besteht darin, die [Bewertungsaufgabe](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog) abzuschließen.

## Siehe auch

- [Sicherheit im Web](/de/docs/Web/Security)
- [Praktische Leitfäden zur Implementierung von Sicherheitsmaßnahmen](/de/docs/Web/Security/Practical_implementation_guides)
- [Sicherheit in Django](https://docs.djangoproject.com/en/6.1/topics/security/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django/django_assessment_blog", "Learn_web_development/Extensions/Server-side/Django")}}
