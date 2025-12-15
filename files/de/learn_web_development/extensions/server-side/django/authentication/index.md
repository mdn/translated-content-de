---
title: "Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 668056c1a1f2950a734e9669e88c642b890bbf3e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie kontrollieren, was sie basierend auf ihrem Anmeldestatus und ihren _Berechtigungen_ sehen und tun können. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website und fügen Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Ansehen ausgeliehener Bücher hinzu.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Benutzer-Authentifizierung und Berechtigungen eingerichtet und verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django bietet ein Authentifizierungs- und Autorisierungs- ("Berechtigungs-") System, das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungs-Framework aufbaut und es Ihnen ermöglicht, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jedem Benutzer erlaubt sind. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine generische Möglichkeit, Berechtigungen auf mehr als einen Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags zur Bezeichnung von Benutzeraufgaben, Formulare und Ansichten zur Anmeldung von Benutzern sowie Ansichts-Tools zur Inhaltsbeschränkung.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr generisch sein und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungssystemen bereitgestellt werden. Lösungen für einige häufige Probleme sind als Drittanbieter-Pakete verfügbar. Zum Beispiel {{Glossary("throttle", "Drosselung")}} von Anmeldeversuchen und Authentifizierung gegen Dritte (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website aktivieren, eigene Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern können. Wir verwenden das Authentifizierungs-/Berechtigungs-System, um Listen von ausgeliehenen Büchern für Benutzer und Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu aufbauen, indem Sie einfach die bereitgestellte API zur Anmeldung des Benutzers aufrufen. In diesem Artikel werden wir jedoch die "Lager"-Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen immer noch einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie man Berechtigungen erstellt und den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüft.

## Aktivieren der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2) erstellt haben, sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns erledigt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufriefen.

Die Konfiguration erfolgt in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**), wie unten gezeigt:

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir uns das [Django Admin Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) im Tutorial 4 angesehen haben (dies war ein Superuser, erstellt mit dem Befehl `python manage.py createsuperuser`).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, also müssen wir einen Testbenutzer erstellen, der einen normalen Website-Benutzer repräsentiert. Wir werden die Admin-Site verwenden, um unsere _locallibrary_ Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten ist.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt.
> Sie müssten dies tun, wenn Sie beispielsweise eine Schnittstelle entwickeln, die "gewöhnliche" Benutzer ihre eigenen Logins erstellen lässt (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Site geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Nutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr empfehlenswert ist, ein _benutzerdefiniertes Benutzermodell_ zu erstellen, wenn Sie ein Projekt starten, da Sie dieses in Zukunft bei Bedarf problemlos anpassen können.
> Wenn ein benutzerdefiniertes Benutzermodell verwendet wird, sieht der Code zum Erstellen desselben Benutzers so aus:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Nutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Verwendung eines benutzerdefinierten Benutzermodells beim Start eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir für unsere Bibliotheksmitglieder noch keine Berechtigungen hinzufügen müssen, wird es später viel einfacher sein, sie einmal der Gruppe hinzuzufügen, als sie jedem Mitglied einzeln zuzuweisen.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Site in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten für Ihr Superuser-Konto an. Auf der obersten Ebene der Admin-Site werden alle Ihre Modelle nach „Django-Anwendung“ sortiert angezeigt. Im Abschnitt **Authentifizierung und Berechtigungen** können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um deren vorhandene Datensätze anzuzeigen.

![Admin-Site - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Zuerst erstellen wir eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Hinzufügen** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie **Name** "Bibliotheksmitglieder" für die Gruppe ein.
   ![Admin-Site - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, daher drücken Sie einfach **SPEICHERN** (Sie werden zu einer Liste der Gruppen weitergeleitet).

Erstellen wir jetzt einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Site
2. Klicken Sie auf die Schaltfläche **Hinzufügen** neben _Benutzer_, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin-Site - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Benutzernamen** und ein **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Site erstellt den neuen Benutzer und führt Sie sofort zu einem _Benutzer ändern_-Bildschirm, in dem Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzer-Modells hinzufügen können. Diese Felder umfassen den Vor- und Nachnamen, die E-Mail-Adresse und den Status und die Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten im Zusammenhang mit dem Benutzer anzeigen (z. B. sein Beitrittsdatum und das Datum der letzten Anmeldung).
   ![Admin-Site - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Gruppen_ die Gruppe **Bibliotheksmitglied** aus der Liste der _Verfügbaren Gruppen_ aus und drücken Sie dann den **Rechtspfeil** zwischen den Kästchen, um sie in das _Ausgewählte Gruppen_-Kästchen zu verschieben.
   ![Admin-Site - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Hier müssen wir nichts weiter tun, wählen Sie also einfach erneut **SPEICHERN**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein "normales Bibliotheksmitglieds"-Konto, das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, die ihnen das Anmelden ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksbenutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie einen Benutzer hinzu!

## Einrichten der Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten "out of the box" zu erstellen, um die Anmeldung, Abmeldung und das Passwortmanagement zu bearbeiten. Dazu gehören ein URL-Mapping, Ansichten und Formulare, jedoch keine Vorlagen – diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LocalLibrary_ Website integrieren und die Vorlagen erstellen.

> [!NOTE]
> Django enthält keine eingebaute Authentifizierungsansicht für die Erstregistrierung von Benutzern ("Anmeldung").
> Sie können bei Bedarf selbst eine erstellen, aber für dieses Tutorial gehen wir davon aus, dass nur Bibliothekare Benutzer registrieren dürfen und dies über die Django-Admin-Oberfläche tun.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie dies tun möchten, da es die Dinge erheblich vereinfacht.
> Sie müssen fast sicher den Code zur Formularbearbeitung ändern, wenn Sie Ihr Benutzermodell ändern, aber selbst dann können Sie die Standard-Ansichtsfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, innerhalb unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten zu trennen und auf der ganzen Website verfügbar zu machen, daher haben wir das hier gezeigt!

### Projekt-URLs

Fügen Sie das Folgende an das Ende der Datei urls.py des Projekts (\*\*django-locallibrary-tutorial/locallibrary/urls.py\*\*) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es dieses URL-Mapping nicht finden konnte, und listet alle URLs auf, die es versucht hat.
Daraus können Sie sehen, welche URLs funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Durch Hinzufügen des `accounts/` Pfades wie oben gezeigt, werden die folgenden URLs hinzugefügt, zusammen mit Namen (in eckigen Klammern), die verwendet werden können, um die URL-Mappings zu reversen. Sie müssen nichts Weiteres implementieren – das obige URL-Mapping mappt automatisch die unten genannten URLs.
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, jedoch mit einem Fehler, der Ihnen mitteilt, dass die erforderliche Vorlage (**registration/login.html**) im Vorlagen-Suchpfad fehlt.
Sie sehen die folgenden Zeilen oben im gelben Abschnitt aufgeführt:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen namens "registration" zu erstellen und dann die **login.html**-Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit die Ansichten), die wir gerade hinzugefügt haben, erwarten, dass die zugehörigen Vorlagen in einem Verzeichnis namens **/registration/** irgendwo im Vorlagen-Suchpfad gefunden werden.

Für diese Website werden wir unsere HTML-Seiten im **templates/registration/**-Verzeichnis ablegen. Dieses Verzeichnis sollte sich in Ihrem Projektstammverzeichnis befinden, also im selben Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django oberstes Projektverzeichnis
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates**-Verzeichnis für den Vorlagenlader sichtbar zu machen, müssen wir es im Vorlagen-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os`-Modul (fügen Sie die folgende Zeile nahe der Oberseite der Datei hinzu, wenn sie nicht bereits vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES`-Sektion des `'DIRS'`-Eintrags wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr einfache/leicht modifizierte Version der Django-Demonstrationsanmeldevorlagen. Möglicherweise müssen Sie sie für Ihre eigenen Zwecke anpassen!

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

  {# Assumes you set up the password_reset view in your URLConf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Diese Vorlage weist einige Ähnlichkeiten mit den zuvor gesehenen auf – sie erweitert unsere Basisklasse und überschreibt den `content` Block. Der Rest des Codes ist ein ziemlich standardmäßiger Formularbearbeitungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass dies ein Formular anzeigt, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie aufgefordert werden, gültige Werte einzugeben, wenn Sie ungültige Werte eingeben und die Seite aktualisiert wird.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas sehen, das so aussieht:

![Library Login-Seite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten anmelden, werden Sie auf eine andere Seite umgeleitet (standardmäßig `http://127.0.0.1:8000/accounts/profile/`). Das Problem ist, dass Django standardmäßig davon ausgeht, dass Sie nach der Anmeldung zu einer Profilseite weitergeleitet werden möchten, was der Fall sein _kann_ oder auch nicht. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text am Ende hinzu. Nun sollten Sie nach der Anmeldung standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 keine Abmeldung über `GET`, sondern nur über `POST` erlaubt.
Wir werden in Kürze ein Formular hinzufügen, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach der Abmeldung weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt nur eine Meldung an, dass Sie abgemeldet wurden, und bietet einen Link an, über den Sie zurück zur Anmeldeseite gelangen. Der Bildschirm rendert so (nach Abmeldung):

![Library Abmeldeseite v1](library_logout.png)

### Passwort-Zurücksetzen-Vorlagen

Das Standard-Passwort-Zurücksetzungssystem verwendet E-Mail, um dem Benutzer einen Link zum Zurücksetzen zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, dem Benutzer die Eingabe eines neuen Passworts zu ermöglichen und den Abschluss des gesamten Prozesses zu vermerken.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwort-Zurücksetzungs-Formular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers (zum Senden der Passwort-Zurücksetzungs-E-Mail) zu erhalten. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwort-Zurücksetzen abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Zurücksetzungs-E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail mit dem Zurücksetzungslink, den wir an Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Zurücksetzen-Confirm

Diese Seite ist der Ort, an dem Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwort-Zurücksetzungs-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwort-Zurücksetzen abgeschlossen

Dies ist die letzte Passwort-Zurücksetzen-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn das Zurücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (ausgenommen Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto unter der URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwort-Zurücksetzungs-Funktionalität über den Link in der Anmeldeseite testen. **Beachten Sie, dass Django nur Zurücksetzungs-E-Mails an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Abmeldung noch nicht testen können, da Abmeldeanforderungen als `POST` und nicht als `GET`-Anfrage gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetzen-System erfordert, dass Ihre Website E-Mail unterstützt, was über den Umfang dieses Artikels hinausgeht, sodass dieser Teil **nicht funktioniert**. Um das Testen zu ermöglichen, platzieren Sie die folgende Zeile am Ende Ihrer settings.py Datei. Dies protokolliert alle gesendeten E-Mails in der Konsole (sodass Sie den Passwort-Zurücksetzungs-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mails senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegen authentifizierte Benutzer

In diesem Abschnitt wird erläutert, was wir tun können, um selektiv zu steuern, welche Inhalte der Benutzer sieht, basierend darauf, ob er angemeldet ist oder nicht.

### Testen in Vorlagen

Sie können in Vorlagen Informationen über den aktuell angemeldeten Benutzer mit der `\{{ user }}`-Vorlagenvariable abrufen (diese wird dem Vorlagenkontext standardmäßig hinzugefügt, wenn Sie das Projekt wie bei unserem Gerüst eingerichtet haben).

Typischerweise werden Sie zuerst die `\{{ user.is_authenticated }}`-Vorlagenvariable testen, um zu bestimmen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, aktualisieren wir als nächstes unsere Sidebar, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie die Basiseinheit (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar-block`, unmittelbar vor dem `endblock-Template-Tag`.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif`-Template-Tags, um Text basierend darauf bedingt anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, weshalb wir `\{{ user.get_username }}` aufrufen, um seinen Namen anzuzeigen.

Wir erstellen den Anmeldelink der URL mithilfe des `url`-Template-Tags und dem Namen der URL-Konfiguration `login`. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was dies tut, ist, einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verknüpften URL. Nachdem der Benutzer sich erfolgreich angemeldet hat, wird die Ansicht diesen `next`-Wert verwenden, um den Benutzer zurück auf die Seite zu leiten, von der aus er auf den Anmeldelink geklickt hat.

Der Logout-Template-Code ist anders, da Sie sich bei Django 5 abmelden müssen, indem Sie an die URL `admin:logout` über ein Formular mit einer Schaltfläche `POST` senden.
Standardmäßig würde dies als Schaltfläche gerendert werden, aber Sie können die Schaltfläche so gestalten, dass sie wie ein Link aussieht.
Für dieses Beispiel verwenden wir _Bootstrap_, sodass wir die Schaltfläche durch Anwendung von `class="btn btn-link"` wie einen Link ansehen lassen.
Sie müssen auch die folgenden Styles der Datei **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Logout-Link korrekt neben allen anderen Sidebar-Links zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Anmelde-/Abmelde-Links in der Sidebar klicken.
Sie sollten zu den Anmeldeseiten gelangen, die Sie im [Vorlagenverzeichnis](#vorlagenverzeichnis) definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist es der einfachste Weg, den Zugriff auf Ihre Funktionen zu beschränken, den `login_required`-Decorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr Ansichtscode wie gewohnt ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird dies zur Anmeldeseite weiterleiten, die in den Projekteinstellungen (`settings.LOGIN_URL`) definiert ist, und den aktuellen absoluten Pfad als `next' URL-Parameter übergeben. Wenn der Benutzer sich erfolgreich anmeldet, wird er zurück auf diese Seite geleitet, jetzt jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell machen, indem Sie auf `request.user.is_authenticated` testen, aber der Decorator ist viel bequemer!

In ähnlicher Weise besteht die einfachste Möglichkeit, den Zugriff auf angemeldete Benutzer in Ihren klassengebasierten Ansichten einzuschränken, darin, von `LoginRequiredMixin` abgeleitet zu werden. Sie müssen diesen Mixin zuerst in der Liste der Superklassen angeben, vor der Hauptansichtsklasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dieses Verhalten hat genau dasselbe Umleitungsverhalten wie der `login_required`-Decorator. Sie können auch einen alternativen Ort angeben, um den Benutzer im Falle einer fehlenden Authentifizierung umzuleiten (`login_url`) und einen URL-Parameter-Namen anstelle von `next`, um den aktuellen absoluten Pfad (`redirect_field_name`) einzufügen.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Informationen finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Auflisten der Bücher des aktuellen Benutzers

Da wir wissen, wie wir eine Seite auf einen bestimmten Benutzer beschränken können, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher auszuleihen! Bevor wir die Buchliste erstellen können, erweitern wir das `BookInstance`-Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django-Admin-Anwendung, um eine Anzahl von Büchern an unseren Testbenutzer auszuleihen.

### Modelle

Zuerst müssen wir es Benutzern ermöglichen, eine `BookInstance` auszuleihen (wir haben bereits einen `status` und ein `due_back`-Datum, aber wir haben noch keine Verknüpfung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine solche Verknüpfung mithilfe eines `ForeignKey` (One-to-Many)-Felds. Wir benötigen auch eine einfache Mechanismus, um zu überprüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorhergehenden Import-Zeile an der Oberseite der Datei hinzu, sodass die Einstellungen für den nachfolgenden Code, der sie verwendet, verfügbar sind):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower`-Feld zum `BookInstance`-Modell hinzu und setzen Sie das Benutzermodell für den Schlüssel als den Wert der Einstellung `AUTH_USER_MODEL`.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, mappt dies auf das Standard-Benutzermodell von `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Indem Sie das Modell auf diese Weise importieren, verringern Sie die Arbeit, die erforderlich ist, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, daher könnten Sie das `User`-Modell auch direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Da wir hier sind, lassen Sie uns eine Methode hinzufügen, die wir aus unseren Vorlagen aufrufen können, um zu überprüfen, ob eine bestimmte Buchinstanz überfällig ist.
Obwohl wir dies in der Vorlage selbst berechnen könnten, wird die Verwendung einer [Methode](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt viel effizienter sein.

Fügen Sie das irgendwo nahe der Oberseite der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Methode zu der `BookInstance`-Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet Python's `bool()`-Funktion, die ein Objekt oder das resultierende Objekt eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in diesem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsch_ (wertet als `False`), wenn es: leer (wie `[]`, `()`, `{}`), `0`, `None` ist oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back`-Feld würde Django einen Fehler auslösen lassen, anstatt die Seite anzuzeigen: Leere Werte sind nicht vergleichbar. Dies möchten wir unseren Benutzern nicht erleben lassen!

Nachdem wir unsere Modelle aktualisiert haben, müssen wir auf dem Projekt neue Migrationen durchführen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das `borrower`-Feld zur `BookInstanceAdmin`-Klasse sowohl in die `list_display` als auch in die `fieldsets` ein, wie unten gezeigt.
Dies macht das Feld im Admin-Bereich sichtbar, sodass wir einem `BookInstance` bei Bedarf einen `User` zuweisen können.

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

Nun, da es möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, leihen Sie eine Anzahl von `BookInstance`-Datensätzen aus. Setzen Sie deren `borrower`-Feld auf Ihren Testbenutzer, setzen Sie den `status` auf "On loan" und setzen Sie sowohl zukünftige als auch vergangene Fälligkeitsdaten.

> [!NOTE]
> Wir werden den Prozess nicht im Detail erläutern, da Sie bereits mit der Nutzung der Admin-Site vertraut sind!

### Zur-ausleihe-Ansicht

Nun werden wir eine Ansicht hinzufügen, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer geliehen wurden. Wir verwenden die gleiche generische klassengebundene Listenansicht, die wir bereits kennen, importieren und leiten jedoch von `LoginRequiredMixin` ab, damit nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir entscheiden uns auch dafür, einen `template_name` anzugeben, anstatt den Standard zu verwenden, da wir möglicherweise einige verschiedene Listen von `BookInstance`-Datensätzen mit verschiedenen Ansichten und Vorlagen haben.

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

Um unsere Abfrage nur auf die `BookInstance`-Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem `due_back`-Datum ordnen, sodass die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für geliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht verweist (Sie können den folgenden Text einfach ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für geliehene Bücher

Jetzt müssen wir nur noch eine Vorlage für diese Seite hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich zu denjenigen, die wir zuvor für die `Book`- und `Author`-Objekte erstellt haben.
Das einzige "neue" hier ist, dass wir die Methode überprüfen, die wir im Modell hinzugefügt haben (`bookinst.is_overdue`) und verwenden, um die Farbe überfälliger Elemente zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie jetzt die Liste für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzeigen können. Testen Sie dies mit Ihrem Benutzer, sowohl wenn Sie angemeldet sind als auch abgemeldet (im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden).

### Fügen Sie die Liste zur Sidebar hinzu

Der allerletzte Schritt besteht darin, einen Link für diese neue Seite in die Sidebar hinzuzufügen. Wir werden dies im gleichen Abschnitt machen, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basiseinheit (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "Meine Ausleihen" in die Sidebar in der unten gezeigten Position ein.

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

Wenn ein Benutzer angemeldet ist, wird er den _Meine Ausleihen_-Link in der Sidebar sehen und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben möchten!).

![Bibliothek - ausgeliehene Bücher nach Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die ein Benutzer mit der Berechtigung an einem Modell-Exemplar durchführen kann. Standardmäßig gibt Django automatisch _Hinzufügen_-, _Ändern_- und _Löschen_-Berechtigungen für alle Modelle, die Benutzern mit den Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Site durchzuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und bestimmten Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich wie das Testen des Authentifizierungsstatus (und tatsächlich testet das Überprüfen einer Berechtigung auch die Authentifizierung).

### Modelle

Berechtigungen werden im Abschnitt `class Meta` eines Modells definiert, indem das Feld `permissions` verwendet wird.
Sie können so viele Berechtigungen wie nötig in einem Tupel angeben, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert wird, bestehend aus dem Berechtigungsnamen und dem Wert zur Anzeige.
Zum Beispiel könnten wir eine Berechtigung definieren, die es einem Benutzer erlaubt, zu markieren, dass ein Buch, wie gezeigt, zurückgegeben wurde:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung einer "Librarian"-Gruppe auf der Admin-Site zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die aktuellen Berechtigungen des Benutzers werden in einer Vorlagenvariable namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-"App" verwenden — z. B. wird `\{{ perms.catalog.can_mark_returned }}` `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Normalerweise prüfen wir die Berechtigung mit dem `{% if %}`-Tag der Vorlage, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required`-Decorator oder in einer klassengebundenen Ansicht mit dem `PermissionRequiredMixin` getestet werden. Das Muster ist das gleiche wie bei der Anmeldeauthentifizierung, allerdings müssen Sie möglicherweise mehrere Berechtigungen hinzufügen.

Decorator für Funktionsansichten:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Mixin, das Berechtigungen für klassengebundene Ansichten erfordert.

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. Standardverhalten für einen angemeldeten Benutzer bei einer Berechtigungsverletzung:
>
> - `@permission_required` leitet zur Anmeldeseite um (HTTP Status 302).
> - `PermissionRequiredMixin` gibt 403 (HTTP Status Verboten) zurück.
>
> Normalerweise möchten Sie das Verhalten von `PermissionRequiredMixin`: 403 zurückgeben, wenn ein Benutzer angemeldet, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True` wie unten gezeigt:
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

## Fordern Sie sich heraus

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die sie ausgeliehen haben.
Die Herausforderung besteht jetzt darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist und die _alle_ ausgeliehenen Bücher anzeigt, einschließlich des Namens jedes Ausleihers.

Sie sollten demselben Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur für Bibliothekare einschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdecorator: `staff_member_required`, Vorlagenvariable: `user.is_staff`), aber wir empfehlen, dass Sie stattdessen die `can_mark_returned`-Berechtigung und `PermissionRequiredMixin` verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, dass Sie Ihren Superuser nicht für berechtigungsbasierte Tests verwenden sollten (Berechtigungsprüfungen geben immer `true` für Superuser zurück, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekarbenutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite wie der untenstehende Screenshot aussehen.

![Alle ausgeliehenen Bücher, beschränkt auf Bibliothekar](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben nun eine Website erstellt, auf der Bibliotheksmitglieder sich anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der entsprechenden Berechtigung) alle ausgeliehenen Bücher und ihre Ausleiher sehen können. Im Moment betrachten wir immer noch nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie anfangen wollen, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie mit Django-Formularen Benutzereingaben sammeln können, und beginnen, einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzer-Authentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwenden des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassengebundene Ansichten > Dekorieren von klassengebundenen Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
