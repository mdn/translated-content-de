---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben können, sich mit ihren eigenen Konten auf Ihrer Website anzumelden und wie Sie steuern können, was sie basierend darauf tun und sehen können, ob sie angemeldet sind und welche Berechtigungen sie haben. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern und Login- und Logout-Seiten sowie benutzer- und mitarbeiterspezifische Seiten zur Ansicht ausgeliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzung-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Benutzerauthentifizierung und -berechtigungen einrichtet und verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigung"), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungs-Framework basiert, und es Ihnen ermöglicht, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework umfasst eingebaute Modelle für `Users` und `Groups` (eine generische Möglichkeit, mehreren Benutzern gleichzeitig Berechtigungen zu erteilen), Berechtigungen/Flags, die angeben, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Einloggen von Benutzern sowie Ansichten-Tools zur Inhaltsbeschränkung.

> [!NOTE]
> Laut Django ist das Authentifizierungssystem sehr generisch ausgelegt und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungssystemen zu finden sind. Lösungen für einige häufige Probleme sind als Drittanbieter-Pakete verfügbar. Beispielsweise {{Glossary("throttle", "Begrenzung")}} von Anmeldeversuchen und Authentifizierung gegenüber Drittanbietern (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, eigene Login- und Logout-Seiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir werden die Authentifizierung/Berechtigungen verwenden, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Templates von Grund auf neu erstellen, wenn Sie möchten, und nur die bereitgestellte API zum Einloggen des Benutzers aufrufen. In diesem Artikel verwenden wir jedoch die Standardauthentifizierungsansichten und -formulare von Django für unsere Login- und Logout-Seiten. Wir müssen dennoch einige Templates erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Templates überprüfen.

## Aktivieren der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2), sodass Sie an diesem Punkt nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir das erste Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration ist in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

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

Sie haben bereits Ihren ersten Benutzer erstellt, als wir die [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) im Tutorial 4 betrachtet haben (dies war ein Superuser, erstellt mit dem Befehl `python manage.py createsuperuser`).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, sodass wir einen Testbenutzer erstellen müssen, um einen normalen Website-Benutzer zu repräsentieren. Wir werden die Admin-Website verwenden, um unsere _locallibrary_-Gruppen und Website-Logins zu erstellen, da dies eine der schnellsten Möglichkeiten ist.

> [!NOTE]
> Sie können auch Benutzer programmatisch erstellen, wie unten gezeigt.
> Sie müssten dies z.B. tun, wenn Sie eine Schnittstelle entwickeln, die es "normalen" Benutzern ermöglicht, ihre eigenen Logins zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Website geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Erstellen Sie den Benutzer und speichern Sie ihn in der Datenbank
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr empfehlenswert ist, beim Start eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten, da Sie es in Zukunft bei Bedarf leicht anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, sähe der Code zur Erstellung desselben Benutzers folgendermaßen aus:
>
> ```python
> # Abrufen des aktuellen Benutzermodells aus den Einstellungen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Verwenden eines benutzerdefinierten Benutzermodells beim Start eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Nachfolgend erstellen wir zunächst eine Gruppe und dann einen Benutzer. Obwohl wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es viel einfacher sein, sie später hinzuzufügen, wenn sie einmal der Gruppe und nicht einzeln jedem Mitglied hinzugefügt werden.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Website in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich auf der Website mit den Anmeldeinformationen für Ihr Superuser-Konto an. Die oberste Ebene der Admin-Website zeigt alle Ihre Modelle an, sortiert nach "Django-Anwendung". Aus dem Abschnitt **Authentication and Authorization** können Sie auf die **Users**- oder **Groups**-Links klicken, um deren vorhandene Datensätze anzuzeigen.

![Admin-Website - hinzufügen von Gruppen oder Benutzern](admin_authentication_add.png)

Erstellen wir zuerst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf den **Add**-Button (neben Group), um eine neue _Group_ zu erstellen; geben Sie den **Name** "Library Members" für die Gruppe ein.
   ![Admin-Website - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, also drücken Sie einfach **SAVE** (Sie werden zu einer Liste der Gruppen weitergeleitet).

Jetzt erstellen wir einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Website.
2. Klicken Sie auf den **Add**-Button neben _Users_, um das _Add user_-Dialogfeld zu öffnen.
   ![Admin-Website - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Username** und **Password**/**Password confirmation** für Ihren Testbenutzer ein.
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Website erstellt den neuen Benutzer und führt Sie sofort zu einem _Change user_-Bildschirm, auf dem Sie Ihren **username** ändern und Informationen für die optionalen Felder des User-Modells hinzufügen können. Diese Felder umfassen den Vornamen, den Nachnamen, die E-Mail-Adresse und den Status sowie die Berechtigungen des Benutzers (nur das **Active**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten zum Benutzer anzeigen (z.B. das Eintrittsdatum und das letzte Login-Datum).
   ![Admin-Website - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste der _Available groups_ aus und drücken Sie dann den **rechtspfeil** zwischen den Feldern, um es in das Feld _Chosen groups_ zu verschieben.
   ![Admin-Website - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, wählen Sie einfach erneut **SAVE**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein "normales Bibliotheksmitglied"-Konto, das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, um ihnen die Anmeldung zu ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Benutzer eines Bibliotheksmitglieds zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zum Umgang mit Anmeldungen, Abmeldungen und Passwortverwaltung "out of the box" zu erstellen. Dazu gehören ein URL Mapper, Ansichten und Formulare, aber es beinhaltet nicht die Templates — wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie man das Standardsystem in die _LocalLibrary_ Website integriert und die Templates erstellt. Wir werden sie in die Hauptprojekt-URLs einfügen.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie möchten, weil es die Dinge viel einfacher macht.
> Sie werden fast sicher den Formularverarbeitungscode ändern müssen, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie die Standardansichtfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten, einschließlich der URLs und Templates, vernünftigerweise innerhalb unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses geteilte Login-Verhalten auszulagern und über die gesamte Website verfügbar zu machen, daher haben wir es hier so dargestellt!

### Projekt-URLs

Fügen Sie das Folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur `http://127.0.0.1:8000/accounts/` URL (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL finden konnte, und listet alle URLs auf, die es versucht hat.
Daraus können Sie sehen, welche URLs funktionieren werden, sobald wir Templates erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/`-Pfads, wie oben gezeigt, fügt folgende URLs hinzu, zusammen mit Namen (in eckigen Klammern angegeben), die zur Umkehrung der URL-Zuordnungen verwendet werden können. Sie müssen nichts anderes implementieren — die oben abgebildete URL-Zuordnung ordnet automatisch den unten genannten URLs zu.
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

Versuchen Sie nun, zur Login-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, aber mit einem Fehler, der Ihnen mitteilt, dass uns das erforderliche Template (**registration/login.html**) im Template-Suchpfad fehlt.
Sie sehen folgende Zeilen im gelben Abschnitt oben aufgelistet:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Templates namens "registration" zu erstellen und dann die **login.html**-Datei hinzuzufügen.

### Template-Verzeichnis

Die URLs (und implizit Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Templates in einem Verzeichnis **/registration/** irgendwo im Template-Suchpfad gefunden werden.

Für diese Website legen wir unsere HTML-Seiten im **templates/registration/**-Verzeichnis ab. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, das heißt im selben Verzeichnis wie die **catalog**- und **locallibrary**-Ordner. Erstellen Sie diese Ordner bitte jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte jetzt wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django Top-Level-Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates**-Verzeichnis für den Template-Lader sichtbar zu machen, müssen wir es in den Template-Suchpfad aufnehmen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os`-Modul (fügen Sie die folgende Zeile oben in die Datei ein, wenn sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES`-Sektion der `'DIRS'`-Zeile wie gezeigt:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Login-Template

> [!WARNING]
> Die in diesem Artikel bereitgestellten Authentifizierungstemplates sind eine sehr einfache/leicht modifizierte Version der Django-Demonstrations-Login-Templates. Möglicherweise müssen Sie sie für Ihren eigenen Gebrauch anpassen!

Erstellen Sie eine neue HTML-Datei namens /**django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr folgenden Inhalt:

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

  {# Assumes you set up the password_reset view in your URLConf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Dieses Template teilt einige Ähnlichkeiten mit denjenigen, die wir zuvor gesehen haben — es erweitert unser Basis-Template und überschreibt den `content`-Block. Der Rest des Codes ist üblicher Formularverarbeitungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass damit ein Formular angezeigt wird, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können und dass, wenn Sie ungültige Werte eingeben, Sie aufgefordert werden, beim Neuladen der Seite korrekte Werte einzugeben.

Navigieren Sie zurück zur Login-Seite (`http://127.0.0.1:8000/accounts/login/`), sobald Sie Ihr Template gespeichert haben, und Sie sollten etwas Ähnliches sehen:

![Bibliothek Login-Seite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten anmelden, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung zu einer Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall sein muss. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text ganz unten hinzu. Jetzt sollten Sie standardmäßig zur Startseite der Website weitergeleitet werden, wenn Sie sich anmelden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Logout-Template

Wenn Sie zur Logout-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 das Abmelden mit `GET` nicht zulässt, sondern nur mit `POST`.
Wir werden gleich ein Formular hinzufügen, das Sie zum Abmelden verwenden können, aber zuerst werden wir die Seite erstellen, auf die die Benutzer nach dem Abmelden gebracht werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach. Es zeigt einfach eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link, auf den Sie klicken können, um zum Login-Bildschirm zurückzukehren. Der Bildschirm wird nach der Abmeldung wie folgt angezeigt:

![Bibliothek Logout-Seite v1](library_logout.png)

### Passwort-Zurücksetzen-Templates

Das Standardpasswortrücksetzsystem verwendet E-Mail, um dem Benutzer einen Link zum Zurücksetzen zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, um E-Mail zu senden, um ein neues Passwort einzugeben und anzugeben, wann der gesamte Prozess abgeschlossen ist.

Die folgenden Templates können als Ausgangspunkt verwendet werden.

#### Passwort zurücksetzen Formular

Dies ist das Formular, um die E-Mail-Adresse des Benutzers zu erhalten (zum Senden der Passwort-Zurücksetzen-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwort zurücksetzen erfolgt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Zurücksetzen-E-Mail

Dieses Template bietet den Text der HTML-E-Mail mit dem Zurücksetzlink, den wir an Benutzer senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort zurücksetzen bestätigen

Diese Seite ist, wo Sie Ihr neues Passwort eingeben, nachdem Sie den Link in der Passwort zurücksetzen E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwort zurücksetzen abgeschlossen

Dies ist das letzte Passwort-Zurücksetzen-Template, das angezeigt wird, um Sie darüber zu informieren, dass das Passwort-Zurücksetzen erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Jetzt, da Sie die URL-Konfiguration hinzugefügt und all diese Templates erstellt haben, sollten die Authentifizierungsseiten (außer Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto über die URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwort-Zurücksetzen-Funktionalität über den Link auf der Login-Seite testen. **Bedenken Sie, dass Django Reset-E-Mails nur an bereits in seiner Datenbank gespeicherte Adressen (Benutzer) sendet!**

Beachten Sie, dass Sie das Abmelden noch nicht testen können, da Logout-Anfragen als `POST` und nicht als `GET` gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetzen-System erfordert, dass Ihre Website E-Mail unterstützt, was außerhalb des Umfangs dieses Artikels liegt, daher wird dieser Teil **noch nicht funktionieren**. Um das Testen zu ermöglichen, fügen Sie die folgende Zeile am Ende Ihrer settings.py-Datei hinzu. Dies protokolliert alle gesendeten E-Mails in der Konsole (damit Sie den Passwort-Zurücksetz-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail versenden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegen authentifizierte Benutzer

In diesem Abschnitt betrachten wir, was wir tun können, um den Inhalt, den der Benutzer sieht, selektiv zu steuern, basierend darauf, ob er angemeldet ist oder nicht.

### Testen in Templates

Sie können Informationen über den aktuell angemeldeten Benutzer in Templates mit der Template-Variable `\{{ user }}` abrufen (diese wird standardmäßig zum Template-Kontext hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Skelett getan haben).

Normalerweise testen Sie zuerst gegen die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, aktualisieren wir als Nächstes unsere Seitenleiste, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar`-Block, unmittelbar vor dem `endblock`-template-tag.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif`-Template-Tags, um Text basierend darauf bedingt anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, daher rufen wir `\{{ user.get_username }}` auf, um ihren Namen anzuzeigen.

Wir erstellen die Login-Link-URL mit dem `url`-Template-Tag und dem Namen der `login`-URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` am Ende der URL angehängt haben. Was dies tut, ist, dem Linked URL einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält. Nachdem sich der Benutzer erfolgreich angemeldet hat, wird die Ansicht diesen `next`-Wert verwenden, um den Benutzer zurück zur Seite zu leiten, auf der er den Login-Link zuerst angeklickt hat.

Der Logout-Template-Code sieht anders aus, da Sie sich ab Django 5 abmelden müssen, indem Sie mit einem Formular mit einer Schaltfläche zum `admin:logout`-URL `POST` senden.
Standardmäßig würde dies als Schaltfläche gerendert, aber Sie können die Schaltfläche so gestalten, dass sie als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, so dass wir die Schaltfläche durch Anwenden von `class="btn btn-link"` wie einen Link aussehen lassen.
Sie müssen die folgenden Stile an **/django-locallibrary-tutorial/catalog/static/css/styles.css** anhängen, um den Logout-Link korrekt neben allen anderen Seitenleistenlinks zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Anmelde-/Abmeldelinks in der Seitenleiste klicken.
Sie sollten auf die Logout-/Loginsseiten weitergeleitet werden, die Sie im [Template-Verzeichnis](#template-verzeichnis) oben definiert haben.

### Testen in Ansichten

Wenn Sie funktionale Ansichten verwenden, ist die einfachste Möglichkeit, den Zugriff auf Ihre Funktionen zu beschränken, das Hinzufügen des Deko-\@login_required-Dekorators zu Ihrer Ansichts-Funktion, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr Ansichts-Code normal ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird auf die in den Projekteinstellungen definierte Login-URL (`settings.LOGIN_URL`) umgeleitet und der aktuelle absolute Pfad als `next`-URL-Parameter übergeben. Wenn sich der Benutzer erfolgreich anmeldet, wird er auf diese Seite zurückgeleitet, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

In ähnlicher Weise ist der einfachste Weg, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Ansichten zu beschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen diesen Mixin zuerst in der Superklassenliste deklarieren, bevor die Hauptansichtsklasse dargestellt wird.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required`-Dekorator. Sie können auch einen alternativen Ort angeben, um den Benutzer umzuleiten, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameternamen anstelle von `next`, um den aktuellen absoluten Pfad (`redirect_field_name`) zu integrieren.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details, sehen Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) an.

## Beispiel — Liste der Bücher des aktuellen Benutzers

Da wir jetzt wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, lassen Sie uns eine Ansicht der Bücher erstellen, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Benutzern Bücher auszuleihen! Bevor wir also die Buchliste erstellen können, erweitern wir das `BookInstance` Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django Admin-Anwendung, um einem unserer Testbenutzer eine Reihe von Büchern auszuleihen.

### Modelle

Zuerst müssen wir es Benutzern ermöglichen, eine `BookInstance` zu leihen (wir haben bereits einen `status` und ein `due_back`-Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine solche mit einem `ForeignKey` (eins-zu-viele) Feld erstellen. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` aus `django.conf` (fügen Sie dies knapp unterhalb der vorherigen Importzeile oben in die Datei ein, damit die Einstellungen für den nachfolgenden Code, der sie verwendet, verfügbar sind):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower`-Feld zum `BookInstance`-Modell hinzu, indem Sie das Benutzermodell für den Schlüssel als den Wert der Einstellung `AUTH_USER_MODEL` setzen.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies auf das Standard-`User`-Modell von `django.contrib.auth.models` abgebildet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Modell auf diese Weise zu importieren, reduziert den Aufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, daher könnten Sie stattdessen das `User`-Modell direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir von unseren Templates aus aufrufen können, um festzustellen, ob ein bestimmtes Buchexemplar überfällig ist.
Obwohl wir dies im Template selbst berechnen könnten, wird es viel effizienter sein, ein [property](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt zu verwenden.

Fügen Sie dies irgendwo oben in der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance`-Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()`-Funktion von Python, die ein Objekt oder das Ergebnisobjekt eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsch", in welchem Fall es `False` zurückgibt.
> In Python ist ein Objekt _falsch_ (bewertet als `False`), wenn es: leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres `due_back`-Feld würde Django veranlassen, einen Fehler auszulösen, anstatt die Seite anzuzeigen: leere Werte sind nicht vergleichbar. Dies ist nicht etwas, das wir unseren Benutzern zumuten wollen!

Nun, da wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen für das Projekt erstellen und diese dann anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower`-Feld zur `BookInstanceAdmin`-Klasse sowohl im `list_display` als auch in den `fieldsets` wie unten gezeigt hinzu.
Dies wird das Feld im Admin-Bereich sichtbar machen, sodass wir einem `BookInstance` bei Bedarf einen `User` zuweisen können.

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

### Leihen Sie ein paar Bücher aus

Da es jetzt möglich ist, einem bestimmten Benutzer Bücher auszuleihen, leihen Sie eine Reihe von `BookInstance`-Einträgen aus. Setzen Sie ihr `borrowed`-Feld auf Ihren Testbenutzer, machen Sie den `status` auf "On loan" und legen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit fest.

> [!NOTE]
> Wir werden den Prozess nicht im Detail beschreiben, da Sie bereits wissen, wie man die Admin-Seite verwendet!

### Ansicht "Geliehen"

Wir fügen jetzt eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische klassenbasierte Listenansicht, mit der wir vertraut sind, importieren und leiten jedoch auch von `LoginRequiredMixin` ab, damit nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir werden uns auch dafür entscheiden, eine `template_name` zu deklarieren, anstatt die Standardeinstellung zu verwenden, da wir möglicherweise einige verschiedene Listen von BookInstance-Einträgen mit unterschiedlichen Ansichten und Templates haben.

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

Um unsere Abfrage nur auf die `BookInstance`-Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` neu, wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem `due_back` Datum sortieren, damit die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für geliehene Bücher

Öffnen Sie jetzt **/catalog/urls.py** und fügen Sie einen `path()`-Eintrag hinzu, der auf die obige Ansicht zeigt (Sie können einfach den unten stehenden Text ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für geliehene Bücher

Jetzt müssen wir nur noch ein Template hinzufügen. Erstellen Sie die Template-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Dieses Template ist sehr ähnlich zu denen, die wir zuvor für die `Book`- und `Author`-Objekte erstellt haben.
Das einzige "Neue" hier ist, dass wir die Methode überprüfen, die wir im Modell hinzugefügt haben `(bookinst.is_overdue`) und sie verwenden, um die Farbe von überfälligen Einträgen zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie in der Lage sein, die Liste für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzuzeigen. Probieren Sie das sowohl mit Ihrem Benutzer angemeldet als auch abgemeldet aus (im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden).

### Fügen Sie die Liste der Seitenleiste hinzu

Der letzte Schritt ist das Hinzufügen eines Links zu dieser neuen Seite in die Seitenleiste. Wir werden dies im selben Abschnitt tun, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die "My Borrowed"-Zeile in der unten gezeigten Position in die Seitenleiste ein.

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

Wenn ein Benutzer angemeldet ist, sieht er den _My Borrowed_-Link in der Seitenleiste, und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben möchten!).

![Bibliothek - von Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verbunden und definieren die Operationen, die von einem Benutzer, der die Berechtigung hat, an einem Modell-Exemplar ausgeführt werden können. Standardmäßig gibt Django automatisch _add_, _change_ und _delete_ Berechtigungen für alle Modelle, die es Benutzern mit den Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Seite durchzuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und diese an bestimmte Benutzer vergeben. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verbunden sind.

Ein Test auf Berechtigungen in Ansichten und Templates ist dann dem Test auf den Authentifizierungsstatus sehr ähnlich (und in der Tat testet das Überprüfen auf eine Berechtigung auch auf Authentifizierung).

### Modelle

Die Definition von Berechtigungen erfolgt im `class Meta`-Abschnitt des Modells unter Verwendung des `permissions`-Felds.
Sie können so viele Berechtigungen wie nötig in einem Tupel angeben, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Berechtigungsanzeigewert enthält.
Beispielsweise könnten wir eine Berechtigung definieren, die einem Benutzer erlaubt anzugeben, dass ein Buch zurückgegeben wurde, wie folgt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten die Berechtigung dann einer "Librarian"-Gruppe auf der Admin-Seite zuweisen.

Öffnen Sie **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers sind in einer Template-Variablen namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden — z.B., `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Wir testen typischerweise die Berechtigung mit dem Template `{% if %}`-Tag, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mithilfe des `permission_required`-Dekorators oder in einer klassenbasierten Ansicht mit Hilfe des `PermissionRequiredMixin` getestet werden. Die Muster entsprechen denen für die Anmeldeauthentifizierung, obwohl Sie natürlich möglicherweise mehrere Berechtigungen hinzufügen müssen.

Funktionen-Ansichten-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungs-Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im obigen Verhalten. Standardmäßig bei einer Berechtigungsverletzung eines angemeldeten Benutzers:
>
> - `@permission_required` leitet zum Anmeldebildschirm um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Verboten).
>
> Normalerweise möchten Sie das `PermissionRequiredMixin`-Verhalten: 403 zurückzugeben, wenn ein Benutzer angemeldet ist, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Wir werden die _LocalLibrary_ hier nicht aktualisieren; vielleicht im nächsten Tutorial!

## Fordere dich selbst heraus

Früher in diesem Artikel haben wir Ihnen gezeigt, wie man eine Seite für den aktuellen Benutzer erstellt, auf der die Bücher aufgeführt sind, die er ausgeliehen hat.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist und _alle_ ausgeliehenen Bücher anzeigt und die Namen der einzelnen Entleiher enthält.

Sie sollten dem gleichen Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies anhand der Tatsache tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekoration: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen Ihnen, stattdessen die Berechtigung `can_mark_returned` und das `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, nicht Ihren Superuser für Berechtigungstests zu verwenden (Berechtigungsprüfungen geben für Superuser immer true zurück, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekare beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben jetzt eine Website erstellt, auf der Bibliotheksmitglieder sich anmelden und ihre eigenen Inhalte anzeigen können und Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Entleiher anzeigen können. Derzeit betrachten wir nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns damit befassen, wie Sie mit Django-Formularen Benutzereingaben sammeln können und dann einige unserer gespeicherten Daten zu ändern beginnen.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwenden des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren klassenbasierter Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
