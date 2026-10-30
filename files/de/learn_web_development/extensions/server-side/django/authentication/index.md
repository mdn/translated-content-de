---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit eigenen Konten auf Ihrer Website anzumelden. Außerdem erfahren Sie, wie Sie anhand des Anmeldestatus und der _Berechtigungen_ steuern, was Benutzer sehen und tun können. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) um Seiten für die Anmeldung und Abmeldung sowie um Seiten für Benutzer und Bibliothekspersonal, auf denen ausgeliehene Bücher angezeigt werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Teile des Tutorials bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django-Tutorial Teil 7: Das Session-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Benutzerauthentifizierung und Berechtigungen eingerichtet und verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django bietet ein System für Authentifizierung und Autorisierung („Berechtigungen“), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelten Session-Framework aufbaut. Damit können Sie Anmeldedaten überprüfen und festlegen, welche Aktionen einzelne Benutzer ausführen dürfen. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen mehreren Benutzern gleichzeitig zuzuweisen), Berechtigungen und Kennzeichen für erlaubte Aufgaben, Formulare und Views zur Anmeldung sowie Werkzeuge für Views, mit denen sich der Zugriff auf Inhalte einschränken lässt.

> [!NOTE]
> Laut Django ist das Authentifizierungssystem bewusst sehr allgemein gehalten. Deshalb fehlen einige Funktionen, die andere Web-Authentifizierungssysteme bieten. Für manche häufigen Anforderungen gibt es Lösungen als Pakete von Drittanbietern, beispielsweise die {{Glossary("throttle", "Begrenzung")}} von Anmeldeversuchen oder die Authentifizierung über Drittanbieter wie OAuth.

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung für [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) einrichten, eigene Seiten für die Anmeldung und Abmeldung erstellen, Ihren Modellen Berechtigungen hinzufügen und den Seitenzugriff steuern. Mithilfe der Authentifizierung und der Berechtigungen zeigen wir Benutzern und Bibliothekaren Listen ausgeliehener Bücher an.

Das Authentifizierungssystem ist sehr flexibel: Sie können URLs, Formulare, Views und Templates selbst erstellen und zum Anmelden lediglich die bereitgestellte API aufrufen. In diesem Artikel verwenden wir jedoch Djangos mitgelieferte Authentifizierungs-Views und -Formulare für die An- und Abmeldung. Einige Templates müssen wir trotzdem erstellen, aber das ist recht einfach.

Außerdem zeigen wir Ihnen, wie Sie Berechtigungen erstellen und den Anmeldestatus sowie Berechtigungen in Views und Templates überprüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir in Tutorial 2 die [Grundstruktur der Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Sie müssen an dieser Stelle also nichts weiter tun.

> [!NOTE]
> Die erforderliche Konfiguration wurde beim Erstellen des Projekts mit `django-admin startproject` vorgenommen. Die Datenbanktabellen für Benutzer und Modellberechtigungen entstanden beim ersten Aufruf von `python manage.py migrate`.

Die Konfiguration befindet sich in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projekteinstellungsdatei (**/locallibrary/settings.py**), wie hier gezeigt:

```python
INSTALLED_APPS = [
    # …
    'django.contrib.auth',  # Core authentication framework and its default models.
    'django.contrib.contenttypes',  # Django content type system (allows permissions to be associated with models).
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',  # Manages sessions across requests
    # …
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Associates users with requests using sessions.
    # …
```

## Benutzer und Gruppen erstellen

Ihren ersten Benutzer haben Sie bereits erstellt, als wir uns in Tutorial 4 die [Django-Admin-Oberfläche](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben. Dabei handelte es sich um einen Superuser, den Sie mit `python manage.py createsuperuser` erstellt haben.
Unser Superuser ist bereits authentifiziert und besitzt alle Berechtigungen. Deshalb benötigen wir zum Testen noch einen gewöhnlichen Website-Benutzer. Wir erstellen unsere _locallibrary_-Gruppen und Benutzerkonten über die Admin-Oberfläche, da das besonders schnell geht.

> [!NOTE]
> Sie können Benutzer auch programmatisch erstellen, wie im folgenden Beispiel.
> Das wäre etwa nötig, wenn Sie eine Oberfläche entwickeln, über die „gewöhnliche“ Benutzer selbst Konten anlegen können. Den meisten Benutzern sollten Sie keinen Zugriff auf die Admin-Oberfläche geben.
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Allerdings wird dringend empfohlen, zu Beginn eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten. So können Sie es später bei Bedarf leicht anpassen.
> Mit einem benutzerdefinierten Benutzermodell sähe der Code zum Erstellen desselben Benutzers so aus:
>
> ```python
> # Get current user model from settings
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Create user from model and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Benutzermodell beim Projektstart verwenden](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) in der Django-Dokumentation.

Wir erstellen zuerst eine Gruppe und anschließend einen Benutzer. Für unsere Bibliotheksmitglieder haben wir zwar noch keine Berechtigungen, die wir hinzufügen könnten. Falls später welche hinzukommen, ist es aber wesentlich einfacher, sie einmal der Gruppe zuzuweisen als jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und öffnen Sie die Admin-Oberfläche im lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Zugangsdaten Ihres Superuser-Kontos an. Auf der obersten Ebene zeigt die Admin-Oberfläche alle Ihre Modelle an, nach „Django-Anwendung“ sortiert. Im Abschnitt **Authentication and Authorization** können Sie über **Users** beziehungsweise **Groups** die vorhandenen Einträge anzeigen.

![Admin-Oberfläche: Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zunächst eine Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie neben „Group“ auf **Add**, um eine neue _Group_ zu erstellen. Geben Sie als **Name** „Library Members“ ein.
   ![Admin-Oberfläche: Gruppe hinzufügen](admin_authentication_add_group.png)
2. Die Gruppe benötigt noch keine Berechtigungen. Klicken Sie daher einfach auf **SAVE**. Anschließend gelangen Sie zur Gruppenliste.

Erstellen wir nun einen Benutzer:

1. Kehren Sie zur Startseite der Admin-Oberfläche zurück.
2. Klicken Sie neben _Users_ auf **Add**, um das Formular _Add user_ zu öffnen.
   ![Admin-Oberfläche: Benutzer hinzufügen, Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen passenden **Username** und ein **Password** sowie die **Password confirmation** für Ihren Testbenutzer ein.
4. Klicken Sie auf **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Oberfläche erstellt den Benutzer und öffnet unmittelbar danach die Seite _Change user_. Dort können Sie den **Username** ändern und die optionalen Felder des User-Modells ausfüllen. Dazu gehören Vorname, Nachname, E-Mail-Adresse sowie Status und Berechtigungen des Benutzers. Von den Statuskennzeichen sollte nur **Active** gesetzt sein. Weiter unten können Sie Gruppen und Berechtigungen zuweisen und wichtige Daten zum Benutzer einsehen, etwa den Zeitpunkt der Registrierung und der letzten Anmeldung.
   ![Admin-Oberfläche: Benutzer hinzufügen, Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste _Available groups_ aus. Klicken Sie anschließend auf den **Pfeil nach rechts** zwischen den Feldern, um sie nach _Chosen groups_ zu verschieben.
   ![Admin-Oberfläche: Benutzer einer Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Weitere Änderungen sind hier nicht nötig. Klicken Sie erneut auf **SAVE**, um zur Benutzerliste zu gelangen.

Das war’s! Sie haben nun ein Konto für ein „gewöhnliches Bibliotheksmitglied“, mit dem Sie später testen können, sobald die Anmeldeseiten eingerichtet sind.

> [!NOTE]
> Erstellen Sie zur Übung ein weiteres Bibliotheksmitglied. Erstellen Sie außerdem eine Gruppe für Bibliothekare und fügen Sie ihr ebenfalls einen Benutzer hinzu!

## Authentifizierungs-Views einrichten

Django stellt fast alles bereit, was Sie für Authentifizierungsseiten zur Anmeldung, Abmeldung und Passwortverwaltung benötigen. Dazu gehören URL-Zuordnungen, Views und Formulare. Templates sind allerdings nicht enthalten – die müssen wir selbst erstellen!

In diesem Abschnitt integrieren wir das Standardsystem in die _LocalLibrary_-Website und erstellen die Templates.

> [!NOTE]
> Django enthält keinen integrierten Authentifizierungs-View für die erstmalige Registrierung von Benutzern.
> Bei Bedarf können Sie selbst einen erstellen. In diesem Tutorial gehen wir jedoch davon aus, dass nur Bibliothekare Benutzer über die Django-Admin-Oberfläche registrieren dürfen.

> [!NOTE]
> Sie müssen diesen Code nicht verwenden, aber er vereinfacht die Arbeit erheblich. Wenn Sie Ihr Benutzermodell ändern, müssen Sie sehr wahrscheinlich den Code zur Formularverarbeitung anpassen. Die mitgelieferten View-Funktionen können Sie dennoch weiterhin verwenden.

> [!NOTE]
> Hier könnten wir die Authentifizierungsseiten einschließlich URLs und Templates auch in der Anwendung `catalog` unterbringen. Bei mehreren Anwendungen wäre es jedoch besser, die gemeinsam genutzte Anmeldefunktion auszulagern und für die gesamte Website bereitzustellen. Genau das tun wir hier.

### Projekt-URLs

Fügen Sie am Ende der Projekt-URL-Datei (**/locallibrary/urls.py**) Folgendes hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Rufen Sie `http://127.0.0.1:8000/accounts/` auf. Beachten Sie den abschließenden Schrägstrich!
Django zeigt einen Fehler an, weil es für diese URL keine Zuordnung findet, und listet alle geprüften URLs auf.
Daran können Sie erkennen, welche URLs funktionieren werden, sobald wir die Templates erstellt haben.

> [!NOTE]
> Durch Hinzufügen des Pfads `accounts/` wie oben gezeigt werden die folgenden URLs samt Namen hinzugefügt. Die Namen stehen in eckigen Klammern und können verwendet werden, um URL-Zuordnungen umzukehren. Sie müssen nichts weiter implementieren – die obige URL-Konfiguration ordnet die folgenden URLs automatisch zu.
>
> ```python
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

Rufen Sie nun die Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) auf. Auch das schlägt zunächst fehl. Diesmal besagt die Fehlermeldung jedoch, dass das benötigte Template (**registration/login.html**) im Template-Suchpfad fehlt.
Im gelben Bereich oben werden unter anderem die folgenden Zeilen angezeigt:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Als Nächstes erstellen wir ein Template-Verzeichnis namens „registration“ und fügen darin die Datei **login.html** hinzu.

### Template-Verzeichnis

Die gerade hinzugefügten URLs und die zugehörigen Views erwarten ihre Templates in einem Verzeichnis **/registration/** innerhalb des Template-Suchpfads.

Für diese Website legen wir die HTML-Seiten unter **templates/registration/** ab. Das Verzeichnis **templates** sollte sich im Stammverzeichnis des Projekts befinden, also dort, wo auch die Ordner **catalog** und **locallibrary** liegen. Erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun so aussehen:
>
> ```plain
> django_local_library/   # Django top level project folder
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Damit der Template-Loader das Verzeichnis **templates** findet, müssen wir es zum Template-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/locallibrary/settings.py**) und passen Sie im Abschnitt `TEMPLATES` die Zeile `'DIRS'` wie folgt an:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [BASE_DIR / 'templates'],
       'APP_DIRS': True,
       # …
```

### Anmelde-Template

> [!WARNING]
> Die Authentifizierungs-Templates in diesem Artikel sind sehr einfache, leicht angepasste Versionen der Django-Demonstrationstemplates. Möglicherweise müssen Sie sie für Ihre Zwecke weiter anpassen!

Erstellen Sie die HTML-Datei **/templates/registration/login.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please log in with an account that has access.</p>
    {% else %}
      <p>Please log in to see this page.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    <table>
      <tr>
        <td>\{{ form.username.label_tag }}</td>
        <td>\{{ form.username }}</td>
      </tr>
      <tr>
        <td>\{{ form.password.label_tag }}</td>
        <td>\{{ form.password }}</td>
      </tr>
    </table>
    <input type="submit" value="login">
    <input type="hidden" name="next" value="\{{ next }}">
  </form>

  {# Assumes you set up the password_reset view in your URLConf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Dieses Template ähnelt den bisher verwendeten: Es erweitert unser Basis-Template und überschreibt den Block `content`. Der übrige Code verarbeitet das Formular auf recht übliche Weise. Darauf gehen wir in einem späteren Tutorial ein. Für den Moment müssen Sie nur wissen, dass ein Formular für Benutzername und Passwort angezeigt wird. Wenn Sie ungültige Werte eingeben, werden Sie nach dem erneuten Laden der Seite aufgefordert, korrekte Angaben zu machen.

Speichern Sie das Template und öffnen Sie erneut die Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`). Sie sollte ungefähr so aussehen:

![Anmeldeseite der Bibliothek, Version 1](library_login.png)

Wenn Sie sich mit gültigen Zugangsdaten anmelden, werden Sie auf eine andere Seite weitergeleitet. Standardmäßig ist das `http://127.0.0.1:8000/accounts/profile/`. Django geht nämlich davon aus, dass Sie nach der Anmeldung eine Profilseite aufrufen möchten – was nicht unbedingt zutreffen muss. Da Sie diese Seite noch nicht definiert haben, erscheint ein weiterer Fehler.

Öffnen Sie die Projekteinstellungen (**/locallibrary/settings.py**) und fügen Sie am Ende den folgenden Text hinzu. Danach werden Sie nach der Anmeldung standardmäßig zur Startseite der Website weitergeleitet.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie die Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) direkt aufrufen, erhalten Sie einen Fehler: Django erlaubt die Abmeldung nicht mit `GET`, sondern nur mit `POST`.
Gleich werden wir ein Formular zum Abmelden hinzufügen. Zuerst erstellen wir jedoch die Seite, die Benutzer nach der Abmeldung sehen.

Erstellen und öffnen Sie **/templates/registration/logged_out.html**. Fügen Sie den folgenden Text ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach: Es informiert Benutzer darüber, dass sie abgemeldet wurden, und bietet einen Link zurück zur Anmeldeseite. Nach der Abmeldung sieht die Seite so aus:

![Abmeldeseite der Bibliothek, Version 1](library_logout.png)

### Templates zum Zurücksetzen des Passworts

Das standardmäßige System zum Zurücksetzen des Passworts verschickt per E-Mail einen Link an den Benutzer. Sie müssen Formulare erstellen, um die E-Mail-Adresse abzufragen, die E-Mail zu versenden und die Eingabe eines neuen Passworts zu ermöglichen. Außerdem benötigen Sie eine Bestätigung nach Abschluss des Vorgangs.

Die folgenden Templates können Ihnen als Ausgangspunkt dienen.

#### Formular zum Zurücksetzen des Passworts

Dieses Formular fragt die E-Mail-Adresse des Benutzers ab, an die der Link zum Zurücksetzen gesendet wird. Erstellen Sie **/templates/registration/password_reset_form.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
    {% csrf_token %}
    \{{ form }}
    <input type="submit" class="btn btn-primary btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Bestätigung der Passwortzurücksetzung

Diese Seite wird angezeigt, nachdem die E-Mail-Adresse übermittelt wurde. Erstellen Sie **/templates/registration/password_reset_done.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### E-Mail zum Zurücksetzen des Passworts

Dieses Template enthält den Text der HTML-E-Mail mit dem Link zum Zurücksetzen, die wir an die Benutzer senden. Erstellen Sie **/templates/registration/password_reset_email.html** mit folgendem Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Eingabe eines neuen Passworts

Auf dieser Seite geben Benutzer ihr neues Passwort ein, nachdem sie auf den Link in der E-Mail geklickt haben. Erstellen Sie **/templates/registration/password_reset_confirm.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
            {% csrf_token %}
            \{{ form }}
            <input type="submit" value="Change my password">
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}
{% endblock %}
```

#### Abschluss der Passwortzurücksetzung

Dies ist das letzte Template für die Passwortzurücksetzung. Es bestätigt, dass das Passwort erfolgreich zurückgesetzt wurde. Erstellen Sie **/templates/registration/password_reset_complete.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Die neuen Authentifizierungsseiten testen

Nachdem Sie die URL-Konfiguration ergänzt und alle Templates erstellt haben, sollten die Authentifizierungsseiten mit Ausnahme der Abmeldung funktionieren.

Testen Sie sie zunächst, indem Sie sich unter `http://127.0.0.1:8000/accounts/login/` mit Ihrem Superuser-Konto anmelden.
Über den Link auf der Anmeldeseite können Sie auch die Passwortzurücksetzung testen. **Beachten Sie, dass Django E-Mails zum Zurücksetzen nur an Adressen von Benutzern sendet, die bereits in der Datenbank gespeichert sind!**

Die Abmeldung können Sie noch nicht testen, weil dafür eine `POST`- statt einer `GET`-Anfrage erforderlich ist.

> [!NOTE]
> Für die Passwortzurücksetzung muss Ihre Website E-Mails unterstützen. Die Einrichtung eines E-Mail-Systems würde jedoch den Rahmen dieses Artikels sprengen.
> Zum Testen enthält die von `startproject` erstellte Einstellungsdatei bereits die folgende Konfiguration. Dadurch werden versendete E-Mails in der Konsole ausgegeben, sodass Sie den Link zum Zurücksetzen dort kopieren können:
>
> ```python
> MAILERS = {
>     'default': {
>         'BACKEND': 'django.core.mail.backends.console.EmailBackend',
>     },
> }
> ```
>
> Weitere Informationen finden Sie unter [E-Mails versenden](https://docs.djangoproject.com/en/6.1/topics/email/) in der Django-Dokumentation.

## Authentifizierte Benutzer prüfen

In diesem Abschnitt sehen wir uns an, wie Sie Inhalte abhängig davon anzeigen können, ob ein Benutzer angemeldet ist.

### Prüfung in Templates

In Templates erhalten Sie über die Template-Variable `\{{ user }}` Informationen zum aktuell angemeldeten Benutzer. Sie wird dem Template-Kontext standardmäßig hinzugefügt, wenn Sie das Projekt wie in unserem Grundgerüst einrichten.

Üblicherweise prüfen Sie zuerst `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer bestimmte Inhalte sehen darf. Als Beispiel passen wir die Seitenleiste so an, dass sie bei abgemeldeten Benutzern einen Link „Login“ und bei angemeldeten Benutzern einen Link „Logout“ anzeigt.

Öffnen Sie das Basis-Template (**/catalog/templates/base_generic.html**) und fügen Sie im Block `sidebar` unmittelbar nach der vorhandenen Liste `<ul class="sidebar-nav">` die folgende neue Liste ein:

```django
  <ul class="sidebar-nav">
    …
  </ul>

  <ul class="sidebar-nav">
   {% if user.is_authenticated %}
     <li>User: \{{ user.get_username }}</li>
     <li>
       <form id="logout-form" method="post" action="{% url 'logout' %}">
         {% csrf_token %}
         <button type="submit" class="btn btn-link">Logout</button>
       </form>
     </li>
   {% else %}
     <li><a href="{% url 'login' %}?next=\{{ request.path }}">Login</a></li>
   {% endif %}
  </ul>
```

Wie Sie sehen, verwenden wir die Template-Tags `if` / `else` / `endif`, um abhängig vom Wahrheitswert von `\{{ user.is_authenticated }}` unterschiedliche Inhalte anzuzeigen. Ist der Benutzer authentifiziert, wissen wir, dass ein gültiger Benutzer vorliegt, und zeigen seinen Namen mit `\{{ user.get_username }}` an.

Die URL des Anmeldelinks erzeugen wir mit dem Template-Tag `url` und dem Namen `login` aus der URL-Konfiguration. Beachten Sie auch das angehängte `?next=\{{ request.path }}`. Damit wird der URL-Parameter `next`, der die Adresse der _aktuellen_ Seite enthält, an den Link angefügt. Nach erfolgreicher Anmeldung verwendet der View diesen Wert, um den Benutzer zu der Seite zurückzuleiten, auf der er den Anmeldelink angeklickt hat.

Der Code für die Abmeldung sieht anders aus, weil Django für die URL `logout` eine `POST`-Anfrage über ein Formular mit Schaltfläche verlangt.
Standardmäßig würde diese als Schaltfläche dargestellt. Sie können sie jedoch so gestalten, dass sie wie ein Link aussieht.
In diesem Beispiel verwenden wir _Bootstrap_ und weisen der Schaltfläche dafür `class="btn btn-link"` zu.
Ergänzen Sie außerdem die folgenden Stile in **/catalog/static/css/styles.css**, damit der Abmeldelink korrekt neben den anderen Links der Seitenleiste positioniert wird:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie in der Seitenleiste auf die Links „Login“ und „Logout“ klicken.
Sie sollten zu den zuvor im Abschnitt [Template-Verzeichnis](#template-verzeichnis) eingerichteten An- und Abmeldeseiten gelangen.

### Prüfung in Views

Bei funktionsbasierten Views lässt sich der Zugriff am einfachsten einschränken, indem Sie den Decorator `login_required` auf die View-Funktion anwenden, wie unten gezeigt. Ist der Benutzer angemeldet, wird der View-Code normal ausgeführt. Ist er nicht angemeldet, erfolgt eine Weiterleitung zur Anmelde-URL aus den Projekteinstellungen (`settings.LOGIN_URL`). Der aktuelle absolute Pfad wird dabei als URL-Parameter `next` übergeben. Nach erfolgreicher Anmeldung kehrt der Benutzer authentifiziert zu dieser Seite zurück.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dieselbe Prüfung auch selbst mit `request.user.is_authenticated` durchführen. Der Decorator ist jedoch wesentlich bequemer!

Bei klassenbasierten Views schränken Sie den Zugriff auf angemeldete Benutzer am einfachsten ein, indem Sie von `LoginRequiredMixin` ableiten. Nennen Sie dieses Mixin in der Liste der Oberklassen vor der eigentlichen View-Klasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Die Weiterleitung verhält sich genauso wie beim Decorator `login_required`. Sie können außerdem eine alternative Weiterleitungsadresse für nicht authentifizierte Benutzer (`login_url`) und statt `next` einen anderen Namen für den URL-Parameter mit dem aktuellen absoluten Pfad (`redirect_field_name`) angeben.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

> [!NOTE]
> Wenn der Großteil Ihrer Website nur für angemeldete Benutzer zugänglich sein soll, können Sie stattdessen [`LoginRequiredMiddleware`](https://docs.djangoproject.com/en/6.1/ref/middleware/#django.contrib.auth.middleware.LoginRequiredMiddleware) in den Einstellungen nach `AuthenticationMiddleware` zur Liste `MIDDLEWARE` hinzufügen.
> Dann ist für jeden View standardmäßig eine Anmeldung erforderlich. Öffentlich zugängliche Views kennzeichnen Sie mit dem Decorator [`login_not_required`](https://docs.djangoproject.com/en/6.1/topics/auth/default/#django.contrib.auth.decorators.login_not_required).
> Für _LocalLibrary_ verwenden wir das nicht, da die meisten Bibliotheksseiten öffentlich zugänglich sein sollen.

Weitere Informationen finden Sie unter [Zugriff auf angemeldete Benutzer beschränken](https://docs.djangoproject.com/en/6.1/topics/auth/default/#limiting-access-to-logged-in-users) in der Django-Dokumentation.

## Beispiel – Bücher des aktuellen Benutzers auflisten

Jetzt wissen wir, wie wir den Zugriff auf eine Seite einschränken. Erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider können Benutzer bisher noch keine Bücher ausleihen! Bevor wir die Liste erstellen, erweitern wir daher das Modell `BookInstance` um eine Zuordnung zu einem Entleiher. Anschließend weisen wir unserem Testbenutzer über die Django-Admin-Oberfläche einige Bücher zu.

### Modelle

Zunächst müssen wir ermöglichen, dass ein Benutzer eine `BookInstance` ausleiht. Ein `status` und ein Rückgabedatum `due_back` sind bereits vorhanden, aber noch keine Zuordnung zu einem bestimmten Benutzer. Dafür erstellen wir ein `ForeignKey`-Feld mit einer Eins-zu-viele-Beziehung. Außerdem benötigen wir eine einfache Möglichkeit zu prüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie `settings` aus `django.conf`. Fügen Sie den Import direkt unter der bisherigen Importzeile am Anfang der Datei ein, damit die Einstellungen für den nachfolgenden Code verfügbar sind:

```python
from django.conf import settings
```

Fügen Sie anschließend dem Modell `BookInstance` das Feld `borrower` hinzu. Verwenden Sie für den Schlüssel das Benutzermodell aus der Einstellung `AUTH_USER_MODEL`.
Da wir diese Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/) überschrieben haben, verweist sie auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Wenn Sie das Modell auf diese Weise einbinden, ist weniger Anpassungsarbeit nötig, falls Sie später doch ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell. Sie könnten `User` daher auch direkt wie folgt importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Fügen wir außerdem eine Eigenschaft hinzu, mit der unsere Templates erkennen können, ob ein bestimmtes Buchexemplar überfällig ist.
Wir könnten das zwar direkt im Template berechnen, aber eine [Eigenschaft](https://docs.python.org/3/builtins/functions.html#property) ist dafür deutlich effizienter.

Fügen Sie nahe dem Anfang der Datei Folgendes ein:

```python
from datetime import date
```

Fügen Sie nun der Klasse `BookInstance` die folgende Eigenschaft hinzu:

> [!NOTE]
> Der folgende Code verwendet die Python-Funktion `bool()`. Sie wertet ein Objekt oder das Ergebnis eines Ausdrucks aus und gibt `True` zurück, sofern das Ergebnis nicht als falsch gilt. Andernfalls gibt sie `False` zurück.
> Ein Objekt gilt in Python als _falsch_ (wird als `False` ausgewertet), wenn es leer ist, beispielsweise `[]`, `()` oder `{}`, oder wenn es `0`, `None` beziehungsweise `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Vor dem Vergleich prüfen wir, ob `due_back` leer ist. Ein leeres Feld `due_back` würde dazu führen, dass Django statt der Seite einen Fehler anzeigt, da leere Werte nicht verglichen werden können. Das möchten wir unseren Benutzern ersparen!

Nach der Änderung unserer Modelle müssen wir neue Migrationen erstellen und anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin-Oberfläche

Öffnen Sie **catalog/admin.py** und ergänzen Sie das Feld `borrower` in der Klasse `BookInstanceAdmin` sowohl in `list_display` als auch in `fieldsets`, wie unten gezeigt.
Dadurch wird das Feld in der Admin-Oberfläche sichtbar und wir können einer `BookInstance` bei Bedarf einen `User` zuweisen.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back', 'borrower')
        }),
    )
```

### Einige Bücher ausleihen

Jetzt können Bücher einem bestimmten Benutzer zugeordnet werden. Weisen Sie Ihrem Testbenutzer daher mehrere `BookInstance`-Einträge zu. Setzen Sie jeweils das Feld `borrower` auf den Testbenutzer und den `status` auf „On loan“. Tragen Sie sowohl zukünftige als auch bereits vergangene Rückgabedaten ein.

> [!NOTE]
> Wir beschreiben die einzelnen Schritte nicht näher, da Sie bereits wissen, wie Sie die Admin-Oberfläche verwenden!

### View für ausgeliehene Bücher

Nun erstellen wir einen View, der alle an den aktuellen Benutzer ausgeliehenen Bücher auflistet. Dafür verwenden wir denselben generischen klassenbasierten Listen-View wie bisher. Diesmal importieren wir zusätzlich `LoginRequiredMixin` und leiten davon ab, sodass nur angemeldete Benutzer den View aufrufen können. Außerdem geben wir `template_name` ausdrücklich an, statt den Standardwert zu verwenden: Möglicherweise benötigen wir später mehrere Listen von `BookInstance`-Einträgen mit unterschiedlichen Views und Templates.

Fügen Sie Folgendes in **catalog/views.py** ein:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name = 'catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return (
            BookInstance.objects.filter(borrower=self.request.user)
            .filter(status__exact=BookInstance.LoanStatus.ON_LOAN)
            .order_by('due_back')
        )
```

Um die Abfrage auf `BookInstance`-Objekte des aktuellen Benutzers zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass `BookInstance.LoanStatus.ON_LOAN` der gespeicherte Code für „on loan“ ist. Außerdem sortieren wir nach dem Datum `due_back`, sodass die ältesten Einträge zuerst erscheinen.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf den obigen View verweist. Sie können den folgenden Text einfach am Dateiende einfügen.

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für ausgeliehene Bücher

Für diese Seite benötigen wir nur noch ein Template. Erstellen Sie die Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

Dieses Template ähnelt stark den Templates, die wir zuvor für `Book`- und `Author`-Objekte erstellt haben.
Neu ist lediglich, dass wir die dem Modell hinzugefügte Eigenschaft (`bookinst.is_overdue`) prüfen und damit die Farbe überfälliger Einträge ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste für einen angemeldeten Benutzer unter `http://127.0.0.1:8000/catalog/mybooks/` im Browser sehen können. Testen Sie die Seite sowohl angemeldet als auch abgemeldet. Im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden.

### Die Liste zur Seitenleiste hinzufügen

Zuletzt fügen wir in der Seitenleiste einen Link auf die neue Seite hinzu. Er kommt in denselben Abschnitt wie die übrigen Informationen für angemeldete Benutzer.

Öffnen Sie das Basis-Template (**/catalog/templates/base_generic.html**) und ergänzen Sie die Zeile „My borrowed“ an der unten gezeigten Stelle in der Seitenleiste.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">My borrowed</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'logout' %}">
       {% csrf_token %}
       <button type="submit" class="btn btn-link">Logout</button>
     </form>
   </li>
   {% else %}
   <li><a href="{% url 'login' %}?next=\{{ request.path }}">Login</a></li>
   {% endif %}
 </ul>
```

### Wie sieht das Ergebnis aus?

Angemeldete Benutzer sehen nun den Link _My borrowed_ in der Seitenleiste und darunter eine Liste ihrer ausgeliehenen Bücher wie im folgenden Bild. Für das erste Buch fehlt ein Rückgabedatum – ein Fehler, den wir hoffentlich in einem späteren Tutorial beheben!

![Bibliothek: ausgeliehene Bücher eines Benutzers](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind Modellen zugeordnet. Sie legen fest, welche Aktionen ein Benutzer mit der entsprechenden Berechtigung an einer Modellinstanz ausführen darf. Django erstellt standardmäßig für alle Modelle Berechtigungen zum _Hinzufügen_, _Ändern_ und _Löschen_. Benutzer mit diesen Berechtigungen können die jeweiligen Aktionen über die Admin-Oberfläche ausführen. Sie können eigene Modellberechtigungen definieren und bestimmten Benutzern zuweisen. Auch Berechtigungen für verschiedene Instanzen desselben Modells lassen sich unterschiedlich festlegen.

Berechtigungen werden in Views und Templates ähnlich wie der Authentifizierungsstatus geprüft. Tatsächlich umfasst eine Berechtigungsprüfung auch die Prüfung der Authentifizierung.

### Modelle

Berechtigungen definieren Sie im Abschnitt `class Meta` eines Modells über das Feld `permissions`.
Sie können beliebig viele Berechtigungen in einem Tupel angeben. Jede Berechtigung ist wiederum ein Tupel aus dem Namen der Berechtigung und ihrer angezeigten Bezeichnung.
Beispielsweise könnten wir wie folgt eine Berechtigung definieren, mit der ein Benutzer ein Buch als zurückgegeben markieren darf:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Anschließend könnten wir diese Berechtigung in der Admin-Oberfläche einer Gruppe „Librarian“ zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Führen Sie anschließend erneut die Migrationen aus (`python3 manage.py makemigrations` und `python3 manage.py migrate`), um die Datenbank zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers stehen in der Template-Variable `\{{ perms }}`. Ob der Benutzer eine bestimmte Berechtigung besitzt, prüfen Sie über den entsprechenden Variablennamen innerhalb der jeweiligen Django-Anwendung. Beispielsweise ist `\{{ perms.catalog.can_mark_returned }}` gleich `True`, wenn der Benutzer diese Berechtigung besitzt, andernfalls `False`. Üblicherweise verwenden wir dafür das Template-Tag `{% if %}`:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

In funktionsbasierten Views können Sie Berechtigungen mit dem Decorator `permission_required` prüfen, in klassenbasierten Views mit `PermissionRequiredMixin`. Das Vorgehen entspricht der Prüfung des Anmeldestatus. Natürlich kann es sinnvoll sein, mehrere Berechtigungen zu verlangen.

Decorator für einen funktionsbasierten View:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Mixin für einen klassenbasierten View mit Berechtigungsprüfung:

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.change_book')
    # Note that 'catalog.change_book' is permission
    # Is created automatically for the book model, along with add_book, and delete_book
```

> [!NOTE]
> Standardmäßig gibt es einen kleinen Unterschied im oben gezeigten Verhalten, wenn ein angemeldeter Benutzer nicht über die erforderliche Berechtigung verfügt:
>
> - `@permission_required` leitet zur Anmeldeseite weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt den HTTP-Status 403 („Forbidden“) zurück.
>
> In der Regel ist das Verhalten von `PermissionRequiredMixin` erwünscht: Ein angemeldeter Benutzer ohne die richtige Berechtigung erhält den Status 403. Verwenden Sie dafür bei einem funktionsbasierten View `@login_required` zusammen mit `@permission_required` und `raise_exception=True`:
>
> ```python
> from django.contrib.auth.decorators import login_required, permission_required
>
> @login_required
> @permission_required('catalog.can_mark_returned', raise_exception=True)
> def my_view(request):
>     # …
> ```

### Beispiel

Wir ändern _LocalLibrary_ an dieser Stelle nicht – vielleicht im nächsten Tutorial!

## Aufgabe

Weiter oben haben wir gezeigt, wie Sie eine Seite erstellen, die dem aktuellen Benutzer seine ausgeliehenen Bücher auflistet.
Erstellen Sie nun eine ähnliche Seite, die nur für Bibliothekare sichtbar ist, _alle_ ausgeliehenen Bücher anzeigt und jeweils den Namen des Entleihers enthält.

Sie können sich am Vorgehen für den anderen View orientieren. Der wesentliche Unterschied besteht darin, den Zugriff auf Bibliothekare zu beschränken. Dafür könnten Sie prüfen, ob der Benutzer zum Personal gehört (Decorator: `staff_member_required`, Template-Variable: `user.is_staff`). Wir empfehlen jedoch, wie im vorherigen Abschnitt beschrieben die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden.

> [!WARNING]
> Verwenden Sie Ihren Superuser nicht zum Testen der Berechtigungen. Bei Superusern liefern Berechtigungsprüfungen immer `True`, selbst wenn eine Berechtigung noch nicht definiert wurde! Erstellen Sie stattdessen einen Bibliothekar-Benutzer und weisen Sie ihm die erforderliche Berechtigung zu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr so aussehen:

![Alle ausgeliehenen Bücher, nur für Bibliothekare zugänglich](library_borrowed_all.png)

## Zusammenfassung

Gut gemacht! Sie haben eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte ansehen können. Bibliothekare mit der richtigen Berechtigung können außerdem alle ausgeliehenen Bücher und ihre Entleiher sehen. Bisher zeigen wir Inhalte nur an. Dieselben Prinzipien und Techniken gelten aber auch, wenn Sie Daten ändern oder hinzufügen möchten.

Im nächsten Artikel sehen wir uns an, wie Sie mit Django-Formularen Benutzereingaben erfassen und damit gespeicherte Daten ändern können.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/6.1/topics/auth/) (Django-Dokumentation)
- [Das (standardmäßige) Django-Authentifizierungssystem verwenden](https://docs.djangoproject.com/en/6.1/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Views > Klassenbasierte Views mit Decorators versehen](https://docs.djangoproject.com/en/6.1/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
