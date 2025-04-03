---
title: "Django Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Seite anzumelden und wie Sie kontrollieren, was sie basierend auf ihrem _Berechtigungsstatus_ tun und sehen können. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, Anmelde- und Abmeldeseiten hinzufügen und benutzer- sowie personalisierte Seiten zum Anzeigen geliehener Bücher erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorangegangenen Tutorials bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Benutzerauthentifizierung und Berechtigungen einrichtet und verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django bietet ein Authentifizierungs- und Autorisierungssystem („Berechtigungen“) an, aufgebaut auf dem Sitzungssystem, das im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelt wurde. Es ermöglicht Ihnen, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework enthält eingebaute Modelle für `Users` und `Groups` (eine allgemeine Methode, um Berechtigungen auf mehr als einen Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags, die bestimmen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Anmelden von Benutzern und Ansichts-Tools zum Beschränken von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein gehalten sein und bietet daher einige Funktionen anderer Web-Authentifizierungssysteme nicht. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Zum Beispiel das {{Glossary("throttle", "Throttling")}} von Anmeldeversuchen und die Authentifizierung bei Drittanbietern (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung in der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir werden die Authentifizierung/Berechtigungen nutzen, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, wenn Sie möchten, und nur die bereitgestellte API zum Einloggen des Benutzers aufrufen. In diesem Artikel werden wir jedoch die „vorrätigen“ Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen immer noch einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und Berechtigungen in sowohl Ansichten als auch Vorlagen überprüfen.

## Aktivieren der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir [das Grundgerüst für die Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2) erstellt haben, sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die erforderliche Konfiguration wurde für uns getan, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir das erste Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration ist im Abschnitt `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

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

## Erstellen von Benutzern und Gruppen

Sie haben bereits Ihren ersten Benutzer erstellt, als wir uns im Tutorial 4 die [Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde). Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, um einen normalen Benutzer der Seite darzustellen. Wir werden die Admin-Seite verwenden, um unsere _locallibrary_ Gruppen und Website-Logins zu erstellen, da dies einer der schnellsten Wege ist, dies zu tun.

> [!NOTE]
> Sie können auch programmgesteuert Benutzer erstellen, wie unten gezeigt.
> Dies müssten Sie tun, wenn Sie beispielsweise eine Schnittstelle entwickeln, um "normale" Benutzer ihre eigenen Logins erstellen zu lassen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Seite geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in die Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es dringend empfohlen wird, ein _benutzerdefiniertes Benutzermodell_ einzurichten, wenn Sie ein Projekt starten, da Sie es in Zukunft bei Bedarf leicht anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, würde der Code zum Erstellen desselben Benutzers folgendermaßen aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Für weitere Informationen siehe [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumente).

Im Folgenden erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es später viel einfacher sein, sie einmal in die Gruppe aufzunehmen, als sie individuell zu jedem Mitglied hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Seite in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten Ihres Superuser-Kontos auf der Seite an. Die oberste Ebene der Admin-Seite zeigt alle Ihre Modelle an, sortiert nach "Django-Anwendung". Im Abschnitt **Authentifizierung und Autorisierung** können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um deren vorhandene Datensätze zu sehen.

![Admin site - füge Gruppen oder Benutzer hinzu](admin_authentication_add.png)

Zuerst lassen Sie uns eine neue Gruppe für unsere Bibliotheksmitglieder erstellen.

1. Klicken Sie auf die **Hinzufügen**-Schaltfläche (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie den **Namen** "Bibliotheksmitglieder" für die Gruppe ein.
   ![Admin site - füge Gruppe hinzu](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, drücken Sie also einfach **SPEICHERN** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Nun lassen Sie uns einen Benutzer erstellen:

1. Navigieren Sie zurück zur Startseite der Admin-Seite
2. Klicken Sie auf die **Hinzufügen**-Schaltfläche neben _Benutzer_, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin site - füge Benutzer pt1 hinzu](admin_authentication_add_user_prt1.png)
3. Geben Sie einen passenden **Benutzernamen** und **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Seite erstellt den neuen Benutzer und nimmt Sie sofort zu einem _Benutzer ändern_-Bildschirm mit, wo Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzermodells hinzufügen können. Diese Felder beinhalten den Vornamen, Nachnamen, E-Mail-Adresse und den Status und Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Termine im Zusammenhang mit dem Benutzer sehen (z. B. Ihr Eintrittsdatum und das letzte Anmeldedatum).
   ![Admin site - füge Benutzer pt2 hinzu](admin_authentication_add_user_prt2.png)

5. Im Abschnitt _Gruppen_ wählen Sie die **Bibliotheksmitglieder**-Gruppe aus der Liste der _Verfügbaren Gruppen_ und drücken Sie dann den **Rechtspfeil** zwischen den Boxen, um sie in die Box der _Ausgewählten Gruppen_ zu verschieben.
   ![Admin site - füge Benutzer zur Gruppe hinzu](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, wählen Sie einfach erneut **SPEICHERN**, um zur Liste der Benutzer zu gelangen.

Das ist es! Jetzt haben Sie ein "normales Mitglied der Bibliothek"-Konto, das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, um ihnen das Einloggen zu ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglied zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zum Einloggen, Abmelden und zur Passwortverwaltung "Out of the Box" zu erstellen. Dazu gehören ein URL-Mapping, Ansichten und Formulare, aber es sind keine Vorlagen enthalten – diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie das Standardsystem in die _LocalLibrary_ Website integriert wird und wie wir die Vorlagen erstellen. Wir setzen sie in die Hauptprojekt-URLs ein.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie es wollen, weil es die Dinge viel einfacher macht.
> Sie müssen fast sicherlich den Formularverarbeitungscode ändern, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie immer noch die Standardansichts-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, in unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten zu separieren und es auf der gesamten Seite verfügbar zu machen, also genau das zeigen wir hier!

### Projekt-URLs

Fügen Sie das folgende am Ende der Projektdatei **django-locallibrary-tutorial/locallibrary/urls.py** hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass keine Zuordnung für diese URL gefunden wurde, und listet alle URLS auf, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/` Pfads wie oben gezeigt fügt die folgenden URLs hinzu, zusammen mit Namen (in eckigen Klammern angegeben), die verwendet werden können, um die URL-Mappings zu reversen. Sie müssen nichts anderes implementieren – das oben gesagte URL-Mapping ordnet die unten genannten URLs automatisch zu.
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

Versuchen Sie jetzt, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies schlägt erneut fehl, jedoch mit einem Fehler, der Ihnen mitteilt, dass uns die erforderliche Vorlage (**registration/login.html**) im Vorlagensuchpfad fehlt.
Die folgenden Zeilen werden in dem gelben Abschnitt oben aufgelistet:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt ist, ein Verzeichnis für die Vorlagen zu erstellen, das "registration" genannt wird, und dann die **login.html** Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit, Ansichten), die wir gerade hinzugefügt haben, erwarten, dass sie ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** finden, irgendwo im Vorlagensuchpfad.

Für diese Seite werden wir unsere HTML-Seiten im **templates/registration/** Verzeichnis platzieren. Dieses Verzeichnis sollte sich im Projektstammverzeichnis befinden, also im selben Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie jetzt diese Ordner.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django-Toplevel-Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates** Verzeichnis dem Vorlagenlader sichtbar zu machen, müssen wir es in den Vorlagensuchpfad aufnehmen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie die folgende Zeile am Anfang der Datei hinzu, falls sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES` Sektion mit der `'DIRS'` Zeile wie gezeigt:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Anmeldevorlage

> [!WARNING]
> Die Authentifizierungsvorlagen, die in diesem Artikel bereitgestellt werden, sind sehr einfache/leicht modifizierte Versionen der Django-Demonstrations-Anmeldevorlagen. Sie müssen sie möglicherweise für Ihren eigenen Gebrauch anpassen!

Erstellen Sie eine neue HTML-Datei namens /**django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please login with an account that has access.</p>
    {% else %}
      <p>Please login to see this page.</p>
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

  {# Assumes you set up the password_reset view in your URLconf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Diese Vorlage teilt einige Ähnlichkeiten mit den bereits gesehenen – sie erweitert unsere Basistemplate und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardisierte Formularbehandlung, die wir in einem späteren Tutorial besprechen werden. Alles, was Sie im Moment wissen müssen, ist, dass dies ein Formular anzeigt, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie aufgefordert werden, gültige Werte einzugeben, wenn die Seite bei ungültigen Eingaben aktualisiert wird.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), sobald Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas Ähnliches wie dies sehen:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen anmelden, werden Sie auf eine andere Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach dem Anmelden auf eine Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den untenstehenden Text am Ende hinzu. Jetzt sollten Sie nach dem Login standardmäßig zur Startseite der Seite weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 die Abmeldung nur per `POST` und nicht per `GET` zulässt.
Wir werden gleich ein Formular hinzufügen, das Sie zum Abmelden verwenden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach der Abmeldung weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den unten stehenden Text:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Meldung an, die Sie darüber informiert, dass Sie abgemeldet wurden, und stellt einen Link bereit, den Sie drücken können, um zurück zur Anmeldeseite zu gelangen. Die Seite wird wie folgt dargestellt (nach der Abmeldung):

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Passwortrücksetzvorlagen

Das Standard-Passwortrücksetzsystem verwendet E-Mails, um dem Benutzer einen Rücksetzlink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ein neues Passwort einzugeben und um zu vermerken, wann der gesamte Vorgang abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwortrücksetzformular

Dies ist das Formular, mit dem die E-Mail-Adresse des Benutzers abgefragt wird (zum Senden der Passwortrücksetz-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwort-Rücksetzen-erledigt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie den folgenden Inhalt ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwortrücksetz-E-Mail

Diese Vorlage liefert den Text der HTML-E-Mail mit dem Rücksetzlink, den wir an Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie den folgenden Inhalt ein:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Rücksetzen-Bestätigen

Diese Seite ist aufgerufen, um Ihr neues Passwort einzugeben, nachdem Sie auf den Link in der Passwortrücksetz-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie den folgenden Inhalt ein:

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

#### Passwort-Rücksetzen-Abgeschlossen

Dies ist die letzte Passwortrücksetzvorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn das Rücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie den folgenden Inhalt ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Jetzt, wo Sie die URL-Konfiguration hinzugefügt und alle diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit dem URL `http://127.0.0.1:8000/accounts/login/` in Ihr Superuser-Konto einzuloggen.
Sie können die Passwortrücksetz-Funktionalität über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django nur Reset-E-Mails an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie sich noch nicht abmelden können, da Abmeldungen als `POST`s und nicht als `GET`s gesendet werden müssen.

> [!NOTE]
> Das Passwort-Rücksetzsystem erfordert, dass Ihre Website E-Mails unterstützt, was über den Rahmen dieses Artikels hinausgeht, sodass dieser Teil **noch nicht funktioniert**. Um das Testen zu ermöglichen, setzen Sie die folgende Zeile am Ende Ihrer settings.py Datei ein. Dadurch werden alle gesendeten E-Mails im Konsolen-Log protokolliert (damit Sie den Passwort-Rücksetz-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Für weitere Informationen siehe [Sending email](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumente).

## Testen gegen authentifizierte Benutzer

Dieser Abschnitt behandelt, was wir tun können, um selektiv den Inhalt zu steuern, den der Benutzer basierend darauf sehen kann, ob er eingeloggt ist oder nicht.

### Testen in Vorlagen

Sie können Informationen über den derzeit angemeldeten Benutzer in Vorlagen mit der `\{{ user }}`-Variable erhalten (dies wird standardmäßig der Vorlagenkontext hinzugefügt, wenn Sie das Projekt einrichten wie wir es in unserem Grundgerüst getan haben).

In der Regel testen Sie zuerst gegen die `\{{ user.is_authenticated }}`-Variable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, aktualisieren wir als Nächstes unsere Seitenleiste, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er eingeloggt ist.

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor dem `endblock` Template-Tag.

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

Wie Sie sehen, verwenden wir `if` / `else` / `endif` Template-Tags, um Text je nach `\{{ user.is_authenticated }}`-Wert bedingt anzuzeigen. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Login-Link-URL mit dem `url` Template-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was dies tut, ist, einen URL-Parameter `next` mit der Adresse (URL) der _aktuellen_ Seite am Ende der verlinkten URL hinzuzufügen. Nachdem sich der Benutzer erfolgreich angemeldet hat, wird die Ansicht diesen `next`-Wert verwenden, um den Benutzer zurück zu der Seite zu leiten, auf der er ursprünglich den Login-Link geklickt hat.

Der Logout-Vorlagencode ist anders, da Sie von Django 5 aus über die `admin:logout` URL `POST` müssen, unter Verwendung eines Formulars mit einem Button.
Normalerweise würde dies als Button gerendert, aber Sie können den Button als Link formatieren.
In diesem Beispiel verwenden wir _Bootstrap_, sodass wir den Button wie einen Link aussehen lassen durch die Anwendung von `class="btn btn-link"`.
Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Logout-Link korrekt neben allen anderen Seitenleistenlinks zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Login/Logout-Links in der Seitenleiste klicken.
Sie sollten zu den oben im [Vorlagenverzeichnis](#vorlagenverzeichnis) definierten An-/Abmeldeseiten weitergeleitet werden.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, den Zugriff auf Ihre Funktionen zu beschränken, den `login_required` Dekorator auf Ihre Funktionsansicht anzuwenden, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr View-Code wie gewohnt ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird er zur Anmelde-URL in den Projekteinstellungen (`settings.LOGIN_URL`) umgeleitet, wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer sich erfolgreich einloggt, wird er zurück auf diese Seite geleitet, aber diesmal authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können die gleiche Art von Verhalten manuell durch Testen von `request.user.is_authenticated` erreichen, aber der Dekorator ist viel praktischer!

Ähnlich ist der einfachste Weg, um den Zugriff auf eingeloggte Benutzer in Ihren klassenbasierten Ansichten zu beschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen dieses Mixin zuerst in der Superklasse-Liste deklarieren, vor der Hauptansichtsklasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau das gleiche Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, wohin der Benutzer umgeleitet werden soll, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameternamen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für zusätzliche Details, werfen Sie einen Blick auf die [Django-Dokumente hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Auflisten der Bücher des aktuellen Benutzers

Jetzt, wo wir wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher auszuleihen! Bevor wir also die Buchliste erstellen können, werden wir das `BookInstance` Modell erweitern, um das Konzept des Ausleihens zu unterstützen, und die Django Admin-Anwendung verwenden, um mehrere Bücher an unseren Testbenutzer zu verleihen.

### Modelle

Zuerst müssen wir es möglich machen, dass Benutzer eine `BookInstance` als Ausleihe haben. Wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine Zuordnung mit einem `ForeignKey` (Eins-zu-Viele) Feld erstellen. Wir benötigen auch einen einfachen Mechanismus, um zu überprüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` von `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile am oberen Rand der Datei hinzu, damit die Einstellungen für nachfolgende Codes, die sie verwenden, verfügbar sind):

```python
from django.conf import settings
```

Fügen Sie als Nächstes das `borrower` Feld zum `BookInstance` Modell hinzu, wobei das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL` gesetzt wird.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies dem Standard `User` Modell von `django.contrib.auth.models` zugeordnet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise reduziert die Arbeit, wenn Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User` Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir von unseren Vorlagen aufrufen können, um zu überprüfen, ob eine bestimmte Instanz eines Buches überfällig ist.
Obwohl wir dies direkt in der Vorlage berechnen könnten, ist die Verwendung einer [Eigenschaft](https://docs.python.org/3/library/functions.html#property), wie unten gezeigt, viel effizienter.

Fügen Sie dies irgendwo in den oberen Teil der Datei ein:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()` Funktion von Python, die ein Objekt oder das Ergebnis eines Ausdrucks bewertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in diesem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsy_ (bewertet als `False`), wenn es: leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir prüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back` Feld würde dazu führen, dass Django einen Fehler auslöst, statt die Seite anzuzeigen: Leere Werte sind nicht vergleichbar. Dies ist etwas, was unsere Benutzer nicht erleben sollten!

Nachdem wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen im Projekt durchführen und diese Migrationen dann anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie jetzt **catalog/admin.py** und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse sowohl in der `list_display` als auch in den `fieldsets` wie unten gezeigt hinzu.
Dadurch wird das Feld im Admin-Bereich sichtbar, sodass wir bei Bedarf einem `BookInstance` einen `User` zuweisen können.

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

### Verleihen Sie ein paar Bücher

Jetzt, da es möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, verleihen Sie einige `BookInstance`-Datensätze. Setzen Sie ihr `borrowed` Feld auf Ihren Testbenutzer, machen Sie den `status` zu "Ausgeliehen" und setzen Sie Fälligkeitstermine sowohl in die Zukunft als auch in die Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht buchstabieren, da Sie bereits wissen, wie man die Admin-Seite benutzt!

### Ausgeliehene Bücher-Ansicht

Nun fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die an den aktuellen Benutzer verliehen worden sind. Wir verwenden die gleiche generische klassenbasierte Listenansicht, mit der wir vertraut sind, dieses Mal importieren und leiten wir jedoch von `LoginRequiredMixin` ab, damit nur ein eingeloggter Benutzer diese Ansicht aufrufen kann. Wir werden uns auch entscheiden, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir möglicherweise am Ende mehrere verschiedene Listen von BookInstance-Datensätzen mit unterschiedlichen Ansichten und Vorlagen haben.

Fügen Sie das Folgende zu **catalog/views.py** hinzu:

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

Um unsere Abfrage nur auf die `BookInstance` Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass "o" der gespeicherte Code für "Ausgeliehen" ist, und wir nach dem `due_back` Datum sortieren, damit die ältesten Elemente zuerst angezeigt werden.

### URL Konfiguration für ausgeliehene Produkte

Öffnen Sie jetzt **/catalog/urls.py** und fügen Sie ein `path()` hinzu, das auf die oben genannte Ansicht zeigt (Sie können einfach den Text unten am Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Jetzt müssen wir für diese Seite nur noch eine Vorlage hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Diese Vorlage ist denen, die wir bereits für die `Book` und `Author` Objekte erstellt haben, sehr ähnlich.
Das Einzige, was hier "neu" ist, ist, dass wir die Methode überprüfen, die wir im Modell hinzugefügt haben `(bookinst.is_overdue`) und verwenden sie, um die Farbe von überfälligen Artikeln zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie nun in der Lage sein, die Liste für einen eingeloggten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` zu sehen. Versuchen Sie dies mit Ihrem Benutzer, sowohl eingeloggt als auch ausgeloggt (im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden).

### Fügen Sie die Liste zur Seitenleiste hinzu

Der allerletzte Schritt besteht darin, einen Link zu dieser neuen Seite in der Seitenleiste hinzuzufügen. Wir setzen dies in denselben Abschnitt, in dem wir andere Informationen für den eingeloggten Benutzer anzeigen.

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "Meine Ausleihen" in der unten gezeigten Position zur Seitenleiste hinzu.

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

### Wie sieht es aus?

Wenn ein Benutzer eingeloggt ist, sieht er den _Mein Ausgeliehen_ Link in der Seitenleiste und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir hoffentlich in einem späteren Tutorial beheben werden!).

![Bibliothek - von Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verbunden und definieren die Operationen, die von einem Benutzer, der die Berechtigung hat, auf eine Modelldatensatz ausgeführt werden können. Standardmäßig weist Django automatisch _Hinzufügen_-, _Ändern_- und _Löschen_-Berechtigungen allen Modellen zu, die Benutzer mit den Berechtigungen in die Lage versetzen, die zugehörigen Aktionen über die Admin-Seite auszuführen. Sie können eigene Berechtigungen für Modelle definieren und bestimmten Benutzern gewähren. Sie können auch die Berechtigungen ändern, die verschiedenen Instanzen desselben Modells zugeordnet sind.

Das Testen von Berechtigungen in Views und Templates ist dann dem Testen des Authentifizierungsstatus sehr ähnlich (und in der Tat testet das Testen auf eine Berechtigung auch die Authentifizierung).

### Modelle

Das Definieren von Berechtigungen erfolgt im `class Meta` Bereich des Modells mit dem `permissions` Feld.
Sie können so viele Berechtigungen spezifizieren, wie Sie benötigen, in einem Tupel, wobei jede Berechtigung selbst in einem verschachtelten Tupel mit dem Berechtigungsnamen und dem Berechtigungsanzeigewert definiert ist.
Zum Beispiel könnten wir eine Berechtigung definieren, die es einem Benutzer ermöglicht, ein Buch als zurückgegeben zu markieren:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten die Berechtigung dann in der Admin-Seite einer "Bibliothekar"-Gruppe zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut durchführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers sind in einer Template-Variable namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden — z.B. ist `\{{ perms.catalog.can_mark_returned }}` `True`, wenn der Benutzer diese Berechtigung hat, andernfalls `False`. In der Regel testen Sie die Berechtigung mit dem Template `{% if %}` Tag, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansicht mit dem `permission_required` Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Die Muster sind die gleichen wie für die Login-Authentifizierung, obwohl Sie vernünftigerweise möglicherweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungsanforderung-Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. **Standardmäßig** für einen eingeloggten Benutzer mit einem Berechtigungsverstoß:
>
> - `@permission_required` leitet zur Anmeldeseite um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Verboten).
>
> Normalerweise möchten Sie das `PermissionRequiredMixin`-Verhalten: Rückgabe von 403, wenn ein Benutzer eingeloggt ist, aber nicht die richtige Erlaubnis hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True` wie gezeigt:
>
> ```python
> from django.contrib.auth.decorators import login_required, permission_required
>
> @login_required
> @permission_required('catalog.can_mark_returned', raise_exception=True)
> def meine_ansicht(request):
>     # …
> ```

### Beispiel

Wir werden die _LocalLibrary_ hier nicht aktualisieren; vielleicht im nächsten Tutorial!

## Fordern Sie sich selbst heraus

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen können, auf der die Bücher, die er ausgeliehen hat, aufgelistet sind.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, auf der _alle_ ausgeliehenen Bücher aufgelistet sind und die den Namen jedes Ausleihers enthält.

Sie sollten dem gleichen Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen stattdessen, die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, dass Sie Ihren Superuser nicht für Berechtigungstests verwenden (Berechtigungsprüfungen geben für Superuser immer `True` zurück, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie der unten stehende Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekare beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben jetzt eine Website erstellt, auf der Bibliotheksmitglieder sich anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Ausleiher anzeigen können. Im Moment betrachten wir noch nur Inhalte, aber die gleichen Prinzipien und Techniken werden angewendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu sammeln, und dann damit beginnen, einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzer-Authentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumente)
- [Verwendung des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumente)
- [Einführung in klassenbasierte Ansichten > Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
