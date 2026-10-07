---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie sich Benutzer mit eigenen Konten auf Ihrer Website anmelden können und wie Sie anhand ihres Anmeldestatus und ihrer _Berechtigungen_ steuern, was sie sehen und tun dürfen. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) um Seiten zum An- und Abmelden sowie um Seiten, auf denen Benutzer und Bibliothekspersonal ausgeliehene Bücher einsehen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Teile des Tutorials bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django-Tutorial Teil 7: Sitzungsframework</a>.
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

Django bietet ein System zur Authentifizierung und Autorisierung („Berechtigungen“), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelten Sitzungsframework aufbaut. Damit können Sie Anmeldedaten überprüfen und festlegen, welche Aktionen einzelne Benutzer ausführen dürfen. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, mehreren Benutzern gleichzeitig Berechtigungen zuzuweisen), Berechtigungen und Kennzeichen für erlaubte Aktionen, Formulare und Views zur Anmeldung sowie Hilfsmittel, um den Zugriff auf Inhalte einzuschränken.

> [!NOTE]
> Das Authentifizierungssystem von Django ist bewusst allgemein gehalten und bietet daher einige Funktionen nicht, die andere Web-Authentifizierungssysteme bereitstellen. Für manche häufigen Anforderungen gibt es Pakete von Drittanbietern, beispielsweise zur {{Glossary("throttle", "Begrenzung")}} von Anmeldeversuchen oder zur Authentifizierung über Drittanbieter wie OAuth.

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) aktivieren, eigene Anmelde- und Abmeldeseiten erstellen, Ihren Modellen Berechtigungen hinzufügen und den Zugriff auf Seiten steuern. Mithilfe der Authentifizierung und Berechtigungen zeigen wir Benutzern und Bibliothekspersonal Listen ausgeliehener Bücher an.

Das Authentifizierungssystem ist sehr flexibel: Sie können URLs, Formulare, Views und Templates auch vollständig selbst erstellen und lediglich die bereitgestellte API für die Anmeldung verwenden. In diesem Artikel nutzen wir jedoch die standardmäßigen Authentifizierungs-Views und -Formulare von Django für die An- und Abmeldeseiten. Einige Templates müssen wir selbst erstellen, was aber unkompliziert ist.

Außerdem zeigen wir Ihnen, wie Sie Berechtigungen erstellen und in Views und Templates den Anmeldestatus sowie Berechtigungen prüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir in Tutorial 2 das [Grundgerüst der Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Sie müssen an dieser Stelle also nichts weiter tun.

> [!NOTE]
> Die erforderliche Konfiguration wurde beim Erstellen des Projekts mit `django-admin startproject` vorgenommen. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir erstmals `python manage.py migrate` ausgeführt haben.

Die Konfiguration befindet sich in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei **django-locallibrary-tutorial/locallibrary/settings.py**:

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

Ihren ersten Benutzer haben Sie bereits erstellt, als wir uns in Tutorial 4 die [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben: einen Superuser, erstellt mit `python manage.py createsuperuser`.
Dieser Superuser ist bereits authentifiziert und besitzt alle Berechtigungen. Daher benötigen wir einen Testbenutzer, der einen normalen Benutzer der Website repräsentiert. Für die Erstellung unserer _locallibrary_-Gruppen und Benutzerkonten verwenden wir die Admin-Website, da dies besonders schnell geht.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt.
> Das wäre beispielsweise nötig, wenn Sie eine Oberfläche entwickeln, über die „normale“ Benutzer selbst Konten anlegen können. Den meisten Benutzern sollten Sie keinen Zugriff auf die Admin-Website geben.
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
> Es wird allerdings dringend empfohlen, zu Beginn eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten, damit Sie es bei Bedarf später leichter anpassen können.
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
> Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Benutzermodell zu Projektbeginn verwenden](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) in der Django-Dokumentation.

Wir erstellen zunächst eine Gruppe und anschließend einen Benutzer. Noch haben wir keine Berechtigungen für Bibliotheksmitglieder. Falls wir später welche benötigen, ist es jedoch wesentlich einfacher, sie einmalig der Gruppe zuzuweisen als jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und öffnen Sie die Admin-Website in Ihrem lokalen Browser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Zugangsdaten Ihres Superusers an. Auf der Startseite werden alle Modelle nach „Django-Anwendung“ sortiert angezeigt. Im Abschnitt **Authentication and Authorization** können Sie auf **Users** oder **Groups** klicken, um die vorhandenen Einträge anzuzeigen.

![Admin-Website – Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zuerst eine Gruppe für die Bibliotheksmitglieder.

1. Klicken Sie neben _Group_ auf **Add**, um eine neue Gruppe zu erstellen. Geben Sie als **Name** „Library Members“ ein.
   ![Admin-Website – Gruppe hinzufügen](admin_authentication_add_group.png)
2. Die Gruppe benötigt noch keine Berechtigungen. Klicken Sie daher auf **SAVE**. Anschließend wird die Gruppenliste angezeigt.

Erstellen wir nun einen Benutzer:

1. Kehren Sie zur Startseite der Admin-Website zurück.
2. Klicken Sie neben _Users_ auf **Add**, um das Formular _Add user_ zu öffnen.
   ![Admin-Website – Benutzer hinzufügen, Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie für Ihren Testbenutzer einen passenden **Username**, ein **Password** und die **Password confirmation** ein.
4. Klicken Sie auf **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Website erstellt den Benutzer und öffnet direkt die Seite _Change user_. Dort können Sie den **Username** ändern und die optionalen Felder des Benutzermodells ausfüllen. Dazu gehören Vorname, Nachname und E-Mail-Adresse sowie Status und Berechtigungen des Benutzers. Von den Statusoptionen sollte nur **Active** aktiviert sein. Weiter unten können Sie Gruppen und Berechtigungen zuweisen und wichtige Datumsangaben zum Benutzer einsehen, etwa das Registrierungsdatum und die letzte Anmeldung.
   ![Admin-Website – Benutzer hinzufügen, Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Members** aus der Liste _Available groups_ aus. Klicken Sie dann auf den **Pfeil nach rechts** zwischen den Listen, um sie nach _Chosen groups_ zu verschieben.
   ![Admin-Website – Benutzer einer Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Hier müssen Sie nichts weiter tun. Klicken Sie erneut auf **SAVE**, um zur Benutzerliste zu gelangen.

Geschafft! Sie haben jetzt ein Konto für ein „normales Bibliotheksmitglied“, das Sie zum Testen verwenden können, sobald die Anmeldeseiten eingerichtet sind.

> [!NOTE]
> Erstellen Sie zur Übung einen weiteren Benutzer als Bibliotheksmitglied. Erstellen Sie außerdem eine Gruppe für das Bibliothekspersonal und weisen Sie ihr ebenfalls einen Benutzer zu.

## Authentifizierungs-Views einrichten

Django stellt fast alles bereit, was Sie für Seiten zur Anmeldung, Abmeldung und Passwortverwaltung benötigen: URL-Zuordnungen, Views und Formulare. Templates sind allerdings nicht enthalten – die müssen wir selbst erstellen.

In diesem Abschnitt binden wir das Standardsystem in die Website _LocalLibrary_ ein und erstellen die Templates.

> [!NOTE]
> Django enthält keinen integrierten Authentifizierungs-View für die erstmalige Registrierung von Benutzern („Signup“).
> Bei Bedarf können Sie selbst einen erstellen. In diesem Tutorial gehen wir jedoch davon aus, dass nur das Bibliothekspersonal Benutzer über die Django-Admin-Oberfläche registriert.

> [!NOTE]
> Sie müssen diesen Code nicht verwenden, werden ihn aber vermutlich nutzen wollen, weil er vieles vereinfacht.
> Wenn Sie Ihr Benutzermodell ändern, müssen Sie mit hoher Wahrscheinlichkeit den Code zur Formularverarbeitung anpassen. Die standardmäßigen View-Funktionen können Sie dennoch weiterverwenden.

> [!NOTE]
> Hier könnten wir die Authentifizierungsseiten einschließlich URLs und Templates auch in der Kataloganwendung unterbringen.
> Bei mehreren Anwendungen wäre es jedoch besser, die gemeinsam genutzte Anmeldefunktion auszulagern und für die gesamte Website bereitzustellen. Diesen Ansatz verwenden wir hier.

### Projekt-URLs

Fügen Sie Folgendes am Ende der Projektdatei **django-locallibrary-tutorial/locallibrary/urls.py** hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Rufen Sie die URL `http://127.0.0.1:8000/accounts/` auf. Beachten Sie den abschließenden Schrägstrich.
Django meldet, dass für diese URL keine Zuordnung gefunden wurde, und listet alle geprüften URLs auf.
Daran erkennen Sie, welche URLs nach dem Erstellen der Templates funktionieren werden.

> [!NOTE]
> Durch den oben gezeigten Pfad `accounts/` werden die folgenden URLs hinzugefügt. Die Namen in eckigen Klammern können verwendet werden, um die URL-Zuordnungen rückwärts aufzulösen. Sie müssen nichts weiter implementieren: Die obige URL-Konfiguration ordnet die folgenden URLs automatisch zu.
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

Rufen Sie nun die Anmelde-URL `http://127.0.0.1:8000/accounts/login/` auf. Auch das schlägt zunächst fehl. Die Fehlermeldung weist diesmal darauf hin, dass das benötigte Template **registration/login.html** im Template-Suchpfad fehlt.
Im gelben Bereich oben sehen Sie unter anderem die folgenden Zeilen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Als Nächstes erstellen wir ein Template-Verzeichnis namens „registration“ und fügen darin die Datei **login.html** hinzu.

### Template-Verzeichnis

Die gerade hinzugefügten URLs und die zugehörigen Views erwarten ihre Templates in einem Verzeichnis **/registration/** innerhalb des Template-Suchpfads.

Für diese Website legen wir die HTML-Seiten im Verzeichnis **templates/registration/** ab. Das Verzeichnis **templates** gehört in das Stammverzeichnis Ihres Projekts, auf derselben Ebene wie **catalog** und **locallibrary**. Erstellen Sie die Verzeichnisse jetzt.

> [!NOTE]
> Ihre Verzeichnisstruktur sollte nun so aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django top level project folder
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Damit der Template-Loader das Verzeichnis **templates** findet, müssen wir es zum Template-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen unter **/django-locallibrary-tutorial/locallibrary/settings.py**.

Importieren Sie das Modul `os`, indem Sie die folgende Zeile oben in der Datei ergänzen, falls sie noch nicht vorhanden ist:

```python
import os # needed by code below
```

Aktualisieren Sie im Abschnitt `TEMPLATES` die Zeile `'DIRS'` wie gezeigt:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Anmelde-Template

> [!WARNING]
> Die Authentifizierungs-Templates in diesem Artikel sind sehr einfache, leicht angepasste Versionen der Django-Demonstrations-Templates. Möglicherweise müssen Sie sie für Ihre Zwecke anpassen.

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/templates/registration/login.html** mit folgendem Inhalt:

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

Dieses Template ähnelt den bereits bekannten Templates: Es erweitert unser Basis-Template und überschreibt den Block `content`. Der übrige Code verarbeitet das Formular auf übliche Weise; darauf gehen wir in einem späteren Tutorial näher ein. Fürs Erste genügt es zu wissen, dass ein Formular zur Eingabe von Benutzername und Passwort angezeigt wird. Bei ungültigen Eingaben werden Sie nach dem erneuten Laden der Seite aufgefordert, gültige Werte einzugeben.

Speichern Sie das Template und öffnen Sie erneut die Anmeldeseite unter `http://127.0.0.1:8000/accounts/login/`. Sie sollte ungefähr so aussehen:

![Anmeldeseite der Bibliothek, Version 1](library_login.png)

Wenn Sie sich mit gültigen Zugangsdaten anmelden, werden Sie auf eine andere Seite weitergeleitet, standardmäßig auf `http://127.0.0.1:8000/accounts/profile/`. Django geht nämlich standardmäßig davon aus, dass Sie nach der Anmeldung eine Profilseite aufrufen möchten. Da wir diese Seite nicht definiert haben, erscheint ein weiterer Fehler.

Öffnen Sie die Projekteinstellungen unter **/django-locallibrary-tutorial/locallibrary/settings.py** und fügen Sie den folgenden Text am Ende hinzu. Danach werden Sie bei der Anmeldung standardmäßig zur Startseite weitergeleitet.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie die Abmelde-URL `http://127.0.0.1:8000/accounts/logout/` aufrufen, erscheint ein Fehler: Seit Django 5 ist die Abmeldung nicht mehr per `GET`, sondern nur per `POST` möglich.
Gleich fügen wir ein Formular für die Abmeldung hinzu. Zunächst erstellen wir jedoch die Seite, zu der Benutzer nach der Abmeldung gelangen.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Fügen Sie den folgenden Text ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach: Es zeigt eine Meldung über die erfolgreiche Abmeldung und einen Link zurück zur Anmeldeseite. Nach der Abmeldung sieht die Seite so aus:

![Abmeldeseite der Bibliothek, Version 1](library_logout.png)

### Templates zum Zurücksetzen des Passworts

Das Standardsystem zum Zurücksetzen des Passworts verschickt per E-Mail einen Link an den Benutzer. Sie benötigen Formulare, um die E-Mail-Adresse abzufragen, die E-Mail zu versenden, die Eingabe eines neuen Passworts zu ermöglichen und den Abschluss des Vorgangs anzuzeigen.

Die folgenden Templates können als Ausgangspunkt dienen.

#### Formular zum Zurücksetzen des Passworts

Mit diesem Formular wird die E-Mail-Adresse des Benutzers erfasst, an die die Nachricht zum Zurücksetzen des Passworts gesendet wird. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Bestätigung der Anfrage zum Zurücksetzen

Diese Seite wird angezeigt, nachdem die E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### E-Mail zum Zurücksetzen des Passworts

Dieses Template enthält den Text der HTML-E-Mail mit dem Link zum Zurücksetzen, die wir an Benutzer senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** mit folgendem Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Neues Passwort bestätigen

Auf dieser Seite geben Sie Ihr neues Passwort ein, nachdem Sie auf den Link in der E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
        {% csrf_token %}
            <table>
                <tr>
                    <td>\{{ form.new_password1.errors }}
                        <label for="id_new_password1">New password:</label></td>
                    <td>\{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>\{{ form.new_password2.errors }}
                        <label for="id_new_password2">Confirm password:</label></td>
                    <td>\{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Change my password"></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}
{% endblock %}
```

#### Zurücksetzen des Passworts abgeschlossen

Dieses letzte Template wird angezeigt, wenn das Passwort erfolgreich zurückgesetzt wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Neue Authentifizierungsseiten testen

Nachdem Sie die URL-Konfiguration und alle Templates hinzugefügt haben, sollten die Authentifizierungsseiten mit Ausnahme der Abmeldung funktionieren.

Testen Sie die Seiten, indem Sie sich unter `http://127.0.0.1:8000/accounts/login/` mit Ihrem Superuser-Konto anmelden.
Über den Link auf der Anmeldeseite können Sie auch das Zurücksetzen des Passworts testen. **Beachten Sie: Django verschickt E-Mails zum Zurücksetzen nur an Adressen von Benutzern, die bereits in seiner Datenbank gespeichert sind.**

Die Abmeldung können Sie noch nicht testen, da Abmeldeanfragen als `POST`- statt als `GET`-Anfrage gesendet werden müssen.

> [!NOTE]
> Das System zum Zurücksetzen des Passworts setzt voraus, dass Ihre Website E-Mails versenden kann. Die Einrichtung des E-Mail-Versands würde den Rahmen dieses Artikels sprengen; daher **funktioniert dieser Teil noch nicht**. Um ihn dennoch zu testen, fügen Sie die folgende Zeile am Ende Ihrer Datei settings.py ein. Dadurch werden versendete E-Mails in der Konsole ausgegeben, aus der Sie den Link zum Zurücksetzen des Passworts kopieren können.
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mails versenden](https://docs.djangoproject.com/en/5.0/topics/email/) in der Django-Dokumentation.

## Auf authentifizierte Benutzer prüfen

In diesem Abschnitt sehen wir uns an, wie Sie angezeigte Inhalte davon abhängig machen können, ob ein Benutzer angemeldet ist.

### Prüfung in Templates

In Templates erhalten Sie über die Template-Variable `\{{ user }}` Informationen zum aktuell angemeldeten Benutzer. Sie wird standardmäßig zum Template-Kontext hinzugefügt, wenn Sie das Projekt wie in unserem Grundgerüst einrichten.

Üblicherweise prüfen Sie zuerst `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer bestimmte Inhalte sehen darf. Zur Demonstration passen wir die Seitenleiste so an, dass sie bei abgemeldeten Benutzern einen Anmeldelink und bei angemeldeten Benutzern einen Abmeldelink anzeigt.

Öffnen Sie das Basis-Template **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie den folgenden Text im Block `sidebar` direkt vor dem Template-Tag `endblock` ein:

```django
  <ul class="sidebar-nav">
    …
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
    …
  </ul>
```

Wie Sie sehen, verwenden wir die Template-Tags `if`, `else` und `endif`, um abhängig vom Wahrheitswert von `\{{ user.is_authenticated }}` unterschiedliche Inhalte anzuzeigen. Ist der Benutzer authentifiziert, wissen wir, dass ein gültiger Benutzer vorliegt, und zeigen mit `\{{ user.get_username }}` seinen Namen an.

Die URL des Anmeldelinks erstellen wir mit dem Template-Tag `url` und dem Namen `login` aus der URL-Konfiguration. Beachten Sie auch den Zusatz `?next=\{{ request.path }}` am Ende der URL. Dadurch wird der verlinkten URL der URL-Parameter `next` mit der Adresse der _aktuellen_ Seite hinzugefügt. Nach erfolgreicher Anmeldung verwendet der View diesen Wert, um den Benutzer zu der Seite zurückzuleiten, auf der er auf den Anmeldelink geklickt hat.

Der Code für die Abmeldung unterscheidet sich davon: Seit Django 5 muss zum Abmelden ein Formular mit einer Schaltfläche eine `POST`-Anfrage an die URL `admin:logout` senden.
Standardmäßig wird die Schaltfläche als Button angezeigt; Sie können sie jedoch so gestalten, dass sie wie ein Link aussieht.
In diesem Beispiel verwenden wir _Bootstrap_ und geben der Schaltfläche mit `class="btn btn-link"` das Aussehen eines Links.
Damit der Abmeldelink neben den anderen Links in der Seitenleiste korrekt positioniert wird, müssen Sie außerdem die folgenden Formatregeln an **/django-locallibrary-tutorial/catalog/static/css/styles.css** anhängen:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Anmelde- und Abmeldelinks in der Seitenleiste klicken.
Sie sollten zu den oben im Abschnitt [Template-Verzeichnis](#template-verzeichnis) eingerichteten Seiten gelangen.

### Prüfung in Views

Bei funktionsbasierten Views lässt sich der Zugriff am einfachsten mit dem Decorator `login_required` einschränken. Ist der Benutzer angemeldet, wird der View-Code wie gewohnt ausgeführt. Andernfalls erfolgt eine Weiterleitung zur in den Projekteinstellungen definierten Anmelde-URL (`settings.LOGIN_URL`). Dabei wird der aktuelle absolute Pfad als URL-Parameter `next` übergeben. Nach erfolgreicher Anmeldung gelangt der Benutzer authentifiziert zu dieser Seite zurück.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dies auch selbst durch eine Prüfung von `request.user.is_authenticated` umsetzen. Der Decorator ist jedoch deutlich bequemer.

Bei klassenbasierten Views lässt sich der Zugriff für angemeldete Benutzer am einfachsten einschränken, indem Sie von `LoginRequiredMixin` ableiten. Dieses Mixin muss in der Liste der Oberklassen vor der eigentlichen View-Klasse stehen.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Das Weiterleitungsverhalten entspricht genau dem des Decorators `login_required`. Sie können auch ein alternatives Weiterleitungsziel für nicht authentifizierte Benutzer (`login_url`) sowie statt `next` einen anderen Namen für den URL-Parameter mit dem aktuellen absoluten Pfad (`redirect_field_name`) angeben.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Einzelheiten finden Sie in der [Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel: Bücher des aktuellen Benutzers auflisten

Da wir nun wissen, wie sich der Zugriff auf eine Seite einschränken lässt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider gibt es bisher noch keine Möglichkeit, Benutzern Bücher auszuleihen. Bevor wir die Liste erstellen können, erweitern wir daher das Modell `BookInstance` um eine Zuordnung zum ausleihenden Benutzer und verleihen über die Django-Admin-Anwendung einige Bücher an unseren Testbenutzer.

### Modelle

Zunächst müssen wir ermöglichen, dass Benutzer eine `BookInstance` ausleihen können. Die Felder `status` und `due_back` sind bereits vorhanden, aber noch keine Zuordnung zwischen dem Modell und einem bestimmten Benutzer. Diese erstellen wir mit einem `ForeignKey`-Feld für eine Eins-zu-viele-Beziehung. Außerdem benötigen wir eine einfache Möglichkeit, um zu prüfen, ob die Rückgabe eines ausgeliehenen Buchs überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie `settings` aus `django.conf`. Fügen Sie den Import direkt unter der bisherigen Importzeile am Anfang der Datei ein, damit die Einstellungen dem nachfolgenden Code zur Verfügung stehen:

```python
from django.conf import settings
```

Fügen Sie dem Modell `BookInstance` anschließend das Feld `borrower` hinzu. Legen Sie für den Schlüssel das Benutzermodell fest, das in `AUTH_USER_MODEL` konfiguriert ist.
Da wir diese Einstellung nicht durch ein [benutzerdefiniertes Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, verweist sie auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Wenn Sie das Modell auf diese Weise referenzieren, ist weniger Arbeit nötig, falls Sie später doch ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell. Sie könnten `User` daher auch direkt mit den folgenden Zeilen importieren und verwenden:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Fügen wir außerdem eine Eigenschaft hinzu, die unsere Templates abfragen können, um festzustellen, ob die Rückgabe einer bestimmten Buchinstanz überfällig ist.
Wir könnten das zwar direkt im Template berechnen, aber eine [Eigenschaft](https://docs.python.org/3/builtins/functions.html#property) ist hierfür wesentlich effizienter.

Fügen Sie Folgendes im oberen Bereich der Datei ein:

```python
from datetime import date
```

Ergänzen Sie nun die folgende Eigenschaft in der Klasse `BookInstance`:

> [!NOTE]
> Der folgende Code verwendet die Python-Funktion `bool()`. Sie wertet ein Objekt oder das Ergebnis eines Ausdrucks aus und gibt `True` zurück, sofern das Ergebnis nicht „falsy“ ist; andernfalls gibt sie `False` zurück.
> In Python ist ein Objekt _falsy_ – wird also als `False` ausgewertet –, wenn es leer ist, etwa `[]`, `()` oder `{}`, oder wenn es `0`, `None` oder `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Vor dem Vergleich prüfen wir, ob `due_back` leer ist. Bei einem leeren Feld `due_back` würde Django andernfalls einen Fehler auslösen, statt die Seite anzuzeigen, da leere Werte nicht vergleichbar sind. Das möchten wir unseren Benutzern ersparen.

Nachdem wir die Modelle aktualisiert haben, müssen wir neue Migrationen erstellen und anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie **catalog/admin.py** und fügen Sie das Feld `borrower` in der Klasse `BookInstanceAdmin` sowohl zu `list_display` als auch zu `fieldsets` hinzu, wie unten gezeigt.
Dadurch wird das Feld im Admin-Bereich sichtbar, sodass wir bei Bedarf einer `BookInstance` einen `User` zuweisen können.

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

### Einige Bücher verleihen

Sie können nun Bücher an einen bestimmten Benutzer verleihen. Weisen Sie bei mehreren `BookInstance`-Einträgen im Feld `borrower` Ihren Testbenutzer zu, setzen Sie `status` auf „On loan“ und tragen Sie Rückgabedaten ein, von denen einige in der Zukunft und andere in der Vergangenheit liegen.

> [!NOTE]
> Die einzelnen Schritte beschreiben wir nicht näher, da Sie die Admin-Website bereits kennen.

### View für ausgeliehene Bücher

Nun fügen wir einen View hinzu, der alle an den aktuellen Benutzer verliehenen Bücher auflistet. Wir verwenden wieder den bekannten generischen klassenbasierten Listen-View, importieren diesmal aber zusätzlich `LoginRequiredMixin` und leiten davon ab. So können nur angemeldete Benutzer den View aufrufen. Außerdem geben wir `template_name` explizit an, statt den Standardwert zu verwenden: Später könnten mehrere Listen von `BookInstance`-Einträgen mit jeweils unterschiedlichen Views und Templates hinzukommen.

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
            .filter(status__exact='o')
            .order_by('due_back')
        )
```

Damit die Abfrage nur `BookInstance`-Objekte des aktuellen Benutzers zurückgibt, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass „o“ der gespeicherte Code für „on loan“ ist. Wir sortieren nach `due_back`, sodass die Einträge mit dem frühesten Rückgabedatum zuerst erscheinen.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie **/catalog/urls.py** und fügen Sie einen `path()` für den oben erstellten View hinzu. Sie können den folgenden Text einfach ans Ende der Datei kopieren.

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für ausgeliehene Bücher

Jetzt benötigt die Seite nur noch ein Template. Erstellen Sie **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** mit folgendem Inhalt:

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

Dieses Template ähnelt stark den zuvor für `Book`- und `Author`-Objekte erstellten Templates.
Neu ist lediglich, dass wir die im Modell hinzugefügte Eigenschaft `bookinst.is_overdue` prüfen und damit die Farbe überfälliger Einträge ändern.

Bei laufendem Entwicklungsserver sollten Sie die Liste für einen angemeldeten Benutzer unter `http://127.0.0.1:8000/catalog/mybooks/` im Browser anzeigen können. Probieren Sie es im angemeldeten und im abgemeldeten Zustand aus. Im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden.

### Liste zur Seitenleiste hinzufügen

Zum Schluss fügen wir der Seitenleiste einen Link auf die neue Seite hinzu. Er kommt in denselben Abschnitt, in dem wir andere Informationen für angemeldete Benutzer anzeigen.

Öffnen Sie das Basis-Template **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeile „My Borrowed“ an der unten gezeigten Stelle in die Seitenleiste ein.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'admin:logout' %}">
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

Angemeldete Benutzer sehen in der Seitenleiste den Link _My Borrowed_ und eine Liste der Bücher wie unten dargestellt. Für das erste Buch fehlt ein Rückgabedatum – ein Fehler, den wir hoffentlich in einem späteren Tutorial beheben.

![Bibliothek – von einem Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind Modellen zugeordnet und legen fest, welche Aktionen ein Benutzer mit der entsprechenden Berechtigung an einer Modellinstanz ausführen darf. Django erstellt standardmäßig für alle Modelle Berechtigungen zum _Hinzufügen_, _Ändern_ und _Löschen_. Benutzer mit diesen Berechtigungen können die entsprechenden Aktionen über die Admin-Website ausführen. Sie können eigene Berechtigungen für Modelle definieren und bestimmten Benutzern zuweisen. Auch die Berechtigungen für verschiedene Instanzen desselben Modells lassen sich unterschiedlich festlegen.

Die Prüfung von Berechtigungen in Views und Templates funktioniert ähnlich wie die Prüfung des Authentifizierungsstatus. Tatsächlich umfasst die Prüfung einer Berechtigung auch eine Authentifizierungsprüfung.

### Modelle

Berechtigungen definieren Sie im Abschnitt `class Meta` eines Modells über das Feld `permissions`.
Dort können Sie beliebig viele Berechtigungen in einem Tupel angeben. Jede Berechtigung wird wiederum als verschachteltes Tupel aus Berechtigungsname und Anzeigetext definiert.
Beispielsweise könnten wir eine Berechtigung festlegen, mit der ein Benutzer ein Buch als zurückgegeben markieren darf:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Diese Berechtigung könnten wir dann auf der Admin-Website einer Gruppe für das Bibliothekspersonal zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Führen Sie anschließend die Migrationen erneut aus (`python3 manage.py makemigrations` und `python3 manage.py migrate`), um die Datenbank zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers stehen in der Template-Variable `\{{ perms }}`. Ob der Benutzer eine bestimmte Berechtigung hat, prüfen Sie über den entsprechenden Variablennamen innerhalb der zugehörigen Django-Anwendung. Beispielsweise ist `\{{ perms.catalog.can_mark_returned }}` `True`, wenn der Benutzer diese Berechtigung besitzt, andernfalls `False`. Üblicherweise verwenden wir dafür das Template-Tag `{% if %}`:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

In funktionsbasierten Views können Sie Berechtigungen mit dem Decorator `permission_required` prüfen, in klassenbasierten Views mit `PermissionRequiredMixin`. Das Vorgehen ähnelt der Prüfung des Anmeldestatus. Gegebenenfalls müssen Sie allerdings mehrere Berechtigungen berücksichtigen.

Decorator für einen funktionsbasierten View:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Mixin für einen klassenbasierten View, der eine Berechtigung voraussetzt:

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
> Standardmäßig unterscheiden sich die beiden Varianten leicht. Wenn ein angemeldeter Benutzer die erforderliche Berechtigung nicht besitzt:
>
> - leitet `@permission_required` zur Anmeldeseite weiter (HTTP-Status 302);
> - gibt `PermissionRequiredMixin` den Status 403 zurück (HTTP-Status „Forbidden“).
>
> In der Regel ist das Verhalten von `PermissionRequiredMixin` erwünscht: Ist ein Benutzer angemeldet, besitzt aber nicht die richtige Berechtigung, soll der Status 403 zurückgegeben werden. Für einen funktionsbasierten View kombinieren Sie dazu `@login_required` und `@permission_required` mit `raise_exception=True`:
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

_LocalLibrary_ aktualisieren wir an dieser Stelle noch nicht – vielleicht im nächsten Tutorial!

## Übung

Weiter oben haben wir eine Seite erstellt, auf der der aktuelle Benutzer seine ausgeliehenen Bücher sieht.
Erstellen Sie nun eine ähnliche Seite, die nur für das Bibliothekspersonal sichtbar ist, _alle_ ausgeliehenen Bücher auflistet und zu jedem Buch den Namen der ausleihenden Person anzeigt.

Sie können weitgehend genauso vorgehen wie beim anderen View. Der wesentliche Unterschied besteht darin, dass nur Bibliothekspersonal darauf zugreifen darf. Sie könnten dazu prüfen, ob der Benutzer zum Personal gehört (Decorator für Funktionen: `staff_member_required`; Template-Variable: `user.is_staff`). Wir empfehlen jedoch, wie im vorherigen Abschnitt beschrieben, stattdessen die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden.

> [!WARNING]
> Verwenden Sie Ihren Superuser nicht zum Testen von Berechtigungen. Berechtigungsprüfungen liefern bei Superusern immer `True`, selbst wenn eine Berechtigung noch gar nicht definiert wurde. Erstellen Sie stattdessen einen Benutzer für das Bibliothekspersonal und weisen Sie ihm die erforderliche Berechtigung zu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![Alle ausgeliehenen Bücher – Zugriff nur für das Bibliothekspersonal](library_borrowed_all.png)

## Zusammenfassung

Gut gemacht! Sie haben nun eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte ansehen können. Bibliothekspersonal mit der entsprechenden Berechtigung kann alle ausgeliehenen Bücher und die zugehörigen Benutzer einsehen. Derzeit zeigen wir Daten nur an. Dieselben Grundsätze und Techniken gelten aber auch, wenn Sie später Daten ändern oder hinzufügen möchten.

Im nächsten Artikel sehen wir uns an, wie Sie mit Django-Formularen Benutzereingaben erfassen und damit gespeicherte Daten verändern können.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Das standardmäßige Django-Authentifizierungssystem verwenden](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Views > Klassenbasierte Views mit Decorators versehen](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
