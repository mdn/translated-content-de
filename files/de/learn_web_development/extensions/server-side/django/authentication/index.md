---
title: "Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Seite anzumelden und wie Sie kontrollieren können, was sie abhängig davon, ob sie angemeldet sind und welche _Berechtigungen_ sie haben, tun und sehen können. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Webseite erweitern, indem wir Anmelde- und Abmeldeseiten sowie Benutzer- und mitarbeiterbezogene Seiten hinzufügen, auf denen ausgeliehene Bücher angezeigt werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungsrahmen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Benutzer-Authentifizierung und Berechtigungen einrichtet und verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigungen"), das auf dem Sitzungsrahmen basiert, der im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) beschrieben wurde. Dadurch können Sie Benutzeranmeldeinformationen überprüfen und definieren, welche Aktionen ein Benutzer ausführen darf. Der Rahmen enthält integrierte Modelle für `Users` und `Groups` (eine generische Möglichkeit, Berechtigungen auf mehr als einen Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Anmelden von Benutzern sowie Werkzeuge zur Ansichtsfilterung von Inhalten.

> [!NOTE]
> Laut Django ist das Authentifizierungssystem sehr allgemein gehalten und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungssystemen vorhanden sind. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Zum Beispiel {{Glossary("throttle", "Throttling")}} von Anmeldeversuchen und Authentifizierung gegen Dritte (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Webseite aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir nutzen die Authentifizierung/Berechtigungen, um Listen der ausgeliehenen Bücher sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, wenn Sie möchten, und lediglich die bereitgestellte API zum Einloggen des Benutzers aufrufen. In diesem Artikel werden wir jedoch die "Standard"-Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen dennoch einige Vorlagen erstellen, aber das ist relativ einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skeleton-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2), sodass Sie an diesem Punkt nichts weiter unternehmen müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde bereits vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden beim ersten Aufruf von `python manage.py migrate` angelegt.

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

## Benutzer und Gruppen erstellen

Sie haben bereits Ihren ersten Benutzer erstellt, als Sie sich das [Django-Admin-Portal](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) im Tutorial 4 angeschaut haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, der einen normalen Benutzer der Website repräsentieren soll. Wir werden das Admin-Portal verwenden, um unsere _locallibrary_ Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten ist.

> [!NOTE]
> Sie können auch programmgesteuert Benutzer erstellen, wie unten gezeigt.
> Dies müssten Sie tun, wenn Sie beispielsweise eine Schnittstelle entwickeln, um "normalen" Benutzern zu erlauben, ihre eigenen Anmeldungen zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf das Admin-Portal geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@beispiel.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr zu empfehlen ist, ein _benutzerdefiniertes Benutzer Modell_ einzurichten, wenn Sie ein Projekt starten, da Sie es dann in der Zukunft leicht anpassen können, falls erforderlich.
> Wenn Sie ein benutzerdefiniertes Benutzer-Modell verwenden, würde der Code zum Erstellen des gleichen Benutzers folgendermaßen aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@beispiel.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Nachfolgend erstellen wir zunächst eine Gruppe und dann einen Benutzer. Auch wenn wir noch keine Berechtigungen zum Hinzufügen für unsere Bibliotheksmitglieder haben, wird es erheblich einfacher sein, diese später der Gruppe als individuell jedem Mitglied hinzuzufügen, wenn wir welche benötigen.

Starten Sie den Entwicklungsserver und navigieren Sie im lokalen Webbrowser zur Admin-Site (`http://127.0.0.1:8000/admin/`). Melden Sie sich auf der Seite mit den Anmeldedaten für Ihr Superuser-Konto an. Die oberste Ebene der Admin-Site zeigt alle Ihre Modelle an, sortiert nach "Django Anwendung". Aus dem **Authentication and Authorization** Abschnitt können Sie auf die Links **Users** oder **Groups** klicken, um deren bestehende Datensätze zu sehen.

![Admin-Portal - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zunächst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** (neben Group), um eine neue _Gruppe_ zu erstellen; geben Sie den **Namen** "Bibliotheksmitglieder" für die Gruppe ein.
   ![Admin-Portal - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, also drücken Sie einfach **SAVE** (Sie werden zu einer Liste der Gruppen weitergeleitet).

Erstellen wir nun einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Site
2. Klicken Sie neben _Users_ auf die Schaltfläche **Add**, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin-Portal - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Benutzernamen** und **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Site erstellt den neuen Benutzer und leitet Sie sofort zu einem _Benutzer ändern_ Bildschirm weiter, in dem Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzer Modells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse und den Status und die Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten im Zusammenhang mit dem Benutzer sehen (z. B. ihr Beitrittsdatum und das letzte Anmeldedatum).
   ![Admin-Portal - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Gruppen_ die **Bibliotheksmitglied**-Gruppe aus der Liste der _Verfügbaren Gruppen_ aus, und drücken Sie dann den **Rechtspfeil** zwischen den Kästen, um diese in den _Ausgewählte Gruppen_ Kasten zu verschieben.
   ![Admin-Portal - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, wählen Sie einfach erneut **SAVE**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein Konto als "normales Bibliotheksmitglied", das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, um ihnen die Anmeldung zu ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglied-Benutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zu erstellen, die sich um Anmeldung, Abmeldung und Passwortverwaltung kümmern. Das umfasst einen URL-Mapping, Ansichten und Formulare, aber keine Vorlagen – diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie man das Standard-System in die _LocalLibrary_ Website integriert und die Vorlagen erstellt. Wir werden sie in die Hauptprojekt-URLs einfügen.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie es möchten, da es die Angelegenheit erheblich einfacher macht.
> Sie werden höchstwahrscheinlich den Formular-Behandlungscode ändern müssen, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie immer noch die Standard-View-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, in unserer Kataloganwendung unterbringen.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten herauszutrennen und es auf der gesamten Seite verfügbar zu machen, weshalb wir dies hier gezeigt haben!

### Projekt-URLs

Fügen Sie Folgendes am Ende der Datei **urls.py** des Projekts (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den abschließenden Schrägstrich!).
Django wird einen Fehler anzeigen, dass es keine Zuordnung für diese URL finden konnte, und alle URLs auflisten, die es versucht hat.
Aus diesen können Sie die URLs sehen, die funktionieren, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Durch Hinzufügen des Pfades `accounts/` wie oben gezeigt, werden die folgenden URLs hinzugefügt, zusammen mit Namen (in eckigen Klammern), die verwendet werden können, um die URL-Zuordnungen zurückzukonvertieren. Sie müssen nichts weiter implementieren – das obige URL-Mapping ordnet automatisch die unten erwähnten URLs zu.
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

Versuchen Sie jetzt, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, aber mit einem Fehler, der Ihnen mitteilt, dass uns die erforderliche Vorlage (**registration/login.html**) im Vorlagen-Suchpfad fehlt.
Folgende Zeilen werden in dem gelben Abschnitt oben aufgelistet:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen mit dem Namen "registration" zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit, die Ansichten), die wir gerade hinzugefügt haben, erwarten, ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagen-Suchpfad zu finden.

Für diese Seite werden wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ablegen. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im gleichen Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte jetzt wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django übergeordnetes Projektverzeichnis
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates** Verzeichnis für den Vorlagenlader sichtbar zu machen, müssen wir es im Vorlagen-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie die folgende Zeile oben in der Datei hinzu, sofern sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `'DIRS'` Zeile im `TEMPLATES` Abschnitt wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungs-Vorlagen sind eine sehr einfache/etwas modifizierte Version der Django-Demonstrationsanmeldevorlagen. Möglicherweise müssen Sie diese für Ihre eigenen Zwecke anpassen!

Erstellen Sie eine neue HTML-Datei namens **/django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr folgenden Inhalt:

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

Diese Vorlage weist einige Ähnlichkeiten mit denjenigen auf, die wir bereits zuvor gesehen haben – sie erweitert unsere Basistemplate und überschreibt den `content` Block. Der Rest des Codes ist recht standardmäßiger Formularbehandlungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass dies ein Formular anzeigt, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie bei der Eingabe ungültiger Werte aufgefordert werden, bei der Aktualisierung der Seite korrekte Werte einzugeben.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), sobald Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas wie das Folgende sehen:

![Bibliotheksanmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen einloggen, werden Sie zu einer anderen Seite umgeleitet (standardmäßig ist das die `http://127.0.0.1:8000/accounts/profile/`). Das Problem ist, dass Django standardmäßig davon ausgeht, dass Sie nach der Anmeldung zu einer Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den untenstehenden Text am Ende hinzu. Jetzt sollten Sie nach der Anmeldung standardmäßig auf die Homepage der Seite umgeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 die Abmeldung nur per `POST` und nicht per `GET` erlaubt.
Wir werden gleich ein Formular hinzufügen, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach dem Abmelden weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Nachricht an, die informiert, dass Sie sich abgemeldet haben, und bietet einen Link an, den Sie drücken können, um zurück zur Anmeldeseite zu gelangen. Der Bildschirm wird nach der Abmeldung wie folgt angezeigt:

![Bibliotheksabmeldeseite v1](library_logout.png)

### Passwort-Zurücksetzen-Vorlagen

Das Standardsystem zum Zurücksetzen des Passworts verwendet E-Mail, um dem Benutzer einen Zurücksetzungs-Link zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erfassen, die E-Mail zu senden, es dem Benutzer zu erlauben, ein neues Passwort einzugeben, und um anzuzeigen, wann der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwort-Zurücksetzen Formular

Dies ist das Formular, um die E-Mail-Adresse des Benutzers zu erfassen (für den Versand der Passwort-Zurücksetzungs-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihr folgenden Inhalt:

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

#### Passwort-Zurücksetzen durchgeführt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse gesammelt wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihr folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Zurücksetzen E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail, die den Zurücksetzungs-Link enthält, den wir an die Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihr folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Zurücksetzen bestätigen

Diese Seite ist diejenige, auf der Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwort-Zurücksetzen-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihr folgenden Inhalt:

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

Dies ist die letzte Passwort-Zurücksetzen-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn das Zurücksetzen erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihr folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie nun die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Abmelden) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Account über die URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwort-Zurücksetz-Funktionalität über den Link auf der Anmeldeseite testen. **Seien Sie sich bewusst, dass Django Zurücksetz-E-Mails nur an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie den Account-Logout noch nicht testen können, da Logout-Anfragen als `POST` und nicht als `GET` Anfragen gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetzen-System setzt voraus, dass Ihre Website E-Mails unterstützt, was über den Umfang dieses Artikels hinausgeht, sodass dieser Teil **noch nicht funktioniert**. Zum Zwecke der Tests fügen Sie die folgende Zeile am Ende Ihrer settings.py Datei hinzu. Dies protokolliert alle gesendeten E-Mails in der Konsole (so dass Sie den Passwort-Zurücksetz-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [Senden von E-Mails](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegen authentifizierte Benutzer

In diesem Abschnitt betrachten wir, was wir tun können, um selektiv zu steuern, welche Inhalte der Benutzer sieht, abhängig davon, ob er eingeloggt ist oder nicht.

### Testen in Vorlagen

Sie können Informationen über den aktuell eingeloggten Benutzer in Vorlagen mit der `\{{ user }}` Template-Variable erhalten (dies wird standardmäßig zur Template-Kontext hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Gerüst getan haben).

Normalerweise testen Sie zuerst gegen die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, werden wir als nächstes unsere Seitenleiste aktualisieren, um einen "Login"-Link anzuzeigen, wenn der Benutzer ausgeloggt ist, und einen "Logout"-Link, wenn er eingeloggt ist.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif` Template-Tags, um Text bedingt anzuzeigen basierend darauf, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, und verwenden `\{{ user.get_username }}`, um seinen Namen anzuzeigen.

Wir erstellen die Anmeldelink-URL mit dem `url` Template-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` ans Ende der URL angehängt haben. Was dies tut, ist einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, ans Ende der verknüpften URL. Nachdem der Benutzer sich erfolgreich eingeloggt hat, verwendet die Ansicht diesen `next` Wert, um den Benutzer zurück auf die Seite weiterzuleiten, auf der er ursprünglich auf den Anmeldelink geklickt hat.

Der Logout-Template-Code ist anders, denn ab Django 5 müssen Sie für den Logout an die `admin:logout` URL `POSTen`, unter Verwendung eines Formulars mit einem Button.
Standardmäßig würde dies als Button gerendert, aber Sie können den Button als Link gestalten.
In diesem Beispiel verwenden wir _Bootstrap_, also lassen wir den Button wie einen Link aussehen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Styles zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmelden-Link korrekt neben allen anderen Seitenleisten-Links zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie die Links Anmelden/Abmelden in der Seitenleiste anklicken.
Sie sollten zu den An-/Abmeldeseiten gelangen, die Sie im [Vorlagenverzeichnis](#vorlagenverzeichnis) oben definiert haben.

### Testen in Ansichten

Wenn Sie funktionbasierte Ansichten verwenden, ist die einfachste Möglichkeit, den Zugriff auf Ihre Funktionen zu beschränken, den `login_required` Dekorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr Funktionscode normal ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird er zur Anmelde-URL weitergeleitet, die in den Projekteinstellungen definiert ist (`settings.LOGIN_URL`), und der aktuelle absolute Pfad wird als `next` URL-Parameter übergeben. Wenn der Benutzer sich erfolgreich einloggt, wird er auf diese Seite zurückgeführt, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können das Gleiche manuell tun, indem Sie `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

In ähnlicher Weise ist die einfachste Möglichkeit, den Zugang für eingeloggte Benutzer in Ihren klassenbasierten Ansichten einzuschränken, die Ableitung von `LoginRequiredMixin`. Sie müssen dieses Mixin zuerst in der Superklassenliste deklarieren, bevor die Hauptansicht Klasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau das gleiche Redirect-Verhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, um den Benutzer weiterzuleiten, wenn er nicht authentifiziert ist (`login_url`), sowie einen URL-Parameter-Namen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Details finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Die geliehenen Bücher des aktuellen Benutzers auflisten

Da wir nun wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, dass Benutzer Bücher ausleihen! Bevor wir die Buchliste erstellen können, werden wir daher das `BookInstance` Modell erweitern, um das Konzept des Ausleihens zu unterstützen und die Django Admin-Anwendung verwenden, um unserem Testbenutzer eine Anzahl von Büchern zu leihen.

### Modelle

Zuerst müssen wir es Benutzern ermöglichen, einen `BookInstance` auszuleihen (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine mit einem `ForeignKey` (eins-zu-viele) Feld erstellen. Wir brauchen auch einen einfachen Mechanismus, um zu testen, ob ein geliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, damit die Einstellungen für den nachfolgenden Code verfügbar sind, der sie verwendet):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower` Feld dem `BookInstance` Modell hinzu, indem Sie das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL` setzen.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzer Modell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, verweist dies auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise verringert den Arbeitsaufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzer-Modell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User` Modell direkt importieren könnten, mit den folgenden Zeilen:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir von unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buch-Exemplar überfällig ist.
Obwohl wir dies direkt im Template berechnen könnten, wird die Verwendung einer [property](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt weitaus effizienter sein.

Fügen Sie dies irgendwo oben in die Datei ein:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()` Funktion von Python, die ein Objekt oder das durch einen Ausdruck resultierende Objekt auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsch", in diesem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsch_ (wertet als `False`), wenn es ist: leer (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres `due_back` Feld würde Django einen Fehler anstelle der Seitendarstellung verursachen: leere Werte sind nicht vergleichbar. Das wäre nicht angebracht für die Benutzererfahrung!

Da wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen für das Projekt erstellen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie jetzt **catalog/admin.py** und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse sowohl in `list_display` als auch `fieldsets` hinzu, wie unten gezeigt.
Dies wird das Feld im Admin-Bereich sichtbar machen, wodurch wir bei Bedarf einem `BookInstance` ein `User` zuweisen können.

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

Da es nun möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, verleihen Sie eine Anzahl von `BookInstance` Datensätzen. Setzen Sie ihr `borrowed` Feld auf Ihren Testbenutzer, den `status` auf "On loan" und setzen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht ausführlich beschreiben, da Sie bereits wissen, wie man das Admin-Portal verwendet!

### Ansicht des Verliehens

Jetzt fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer ausgeliehen wurden. Wir verwenden die gleiche generische klassenbasierte Listenansicht, die wir bereits kennen, aber dieses Mal werden wir auch `LoginRequiredMixin` importieren und ableiten, sodass nur ein eingeloggter Benutzer diese Ansicht aufrufen kann. Wir werden auch ein `template_name` deklarieren, anstatt das Standard zu verwenden, weil wir möglicherweise eine Reihe verschiedener Listen von BookInstance-Datensätzen mit unterschiedlichen Ansichten und Vorlagen haben werden.

Fügen Sie Folgendes zu **catalog/views.py** hinzu:

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

Um unsere Abfrage nur auf die `BookInstance` Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist, und dass wir nach dem `due_back` Datum sortieren, sodass die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie jetzt **/catalog/urls.py** und fügen Sie einen `path()` zu der oben genannten Ansicht hinzu (Sie können einfach den Text unten am Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Jetzt müssen wir nur noch eine Vorlage hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich denen, die wir zuvor für die `Book` und `Author` Objekte erstellt haben.
Das einzige "neue" hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben `(bookinst.is_overdue`) benutzen und sie verwenden, um die Farbe von überfälligen Elementen zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie jetzt die Liste für einen eingeloggten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` ansehen können. Versuchen Sie dies mit einem Benutzer, der eingeloggt ist und einem Benutzer, der nicht eingeloggt ist (im zweiten Fall werden Sie zur Anmeldeseite weitergeleitet).

### Die Liste zur Seitenleiste hinzufügen

Der allerletzte Schritt besteht darin, einen Link für diese neue Seite in die Seitenleiste einzufügen. Wir werden dies im gleichen Abschnitt tun, in dem wir andere Informationen für den eingeloggten Benutzer anzeigen.

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die "My Borrowed" Zeile in die Seitenleiste ein, an der Position unten gezeigt.

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

### Wie sieht das aus?

Wenn ein beliebiger Benutzer eingeloggt ist, sieht er den _My Borrowed_ Link in der Seitenleiste und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir hoffe, in einem späteren Tutorial zu beheben!).

![Bibliothek - geliehene Bücher pro Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die von einem Benutzer, der die Berechtigung hat, auf eine Instanz des Modells ausgeführt werden können. Standardmäßig gewährt Django automatisch _add_, _change_ und _delete_ Berechtigungen für alle Modelle, die es Benutzern mit den Berechtigungen ermöglichen, die zugehörigen Aktionen über das Admin-Portal auszuführen. Sie können eigene Berechtigungen für Modelle definieren und sie spezifischen Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die verschiedenen Instanzen desselben Modells zugeordnet sind.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich wie das Testen des Authentifizierungsstatus (und tatsächlich testet das Prüfen auf eine Berechtigung auch auf Authentifizierung).

### Modelle

Die Definition von Berechtigungen erfolgt im Abschnitt `class Meta` des Modells mithilfe des `permissions` Feldes.
Sie können so viele Berechtigungen angeben, wie Sie benötigen, in einem Tupel, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Anzeige-Wert der Berechtigung enthält.
Beispielsweise könnten wir eine Berechtigung definieren, die es einem Benutzer erlaubt zu markieren, dass ein Buch als zurückgegeben gilt, wie unten gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung einer "Bibliothekar"-Gruppe im Admin-Portal zuweisen.

Öffnen Sie **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Template-Variable namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-Anwendung verwenden — z. B. `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` ansonsten. Wir testen normalerweise die Berechtigung mit dem Template `{% if %}` Tag wie folgt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mithilfe des `permission_required` Dekorators oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Die Muster sind die gleichen wie bei der Anmeldeauthentifizierung, obwohl Sie vernünftigerweise mehrere Berechtigungen hinzufügen könnten.

Funktionsansicht Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungs-mix-in für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. Standardmäßig wird für einen eingeloghten Benutzer mit einer Berechtigungsverletzung:
>
> - Bei `@permission_required` zur Anmeldeseite umgeleitet (HTTP-Status 302).
> - Bei `PermissionRequiredMixin` 403 (HTTP-Status Verboten) zurückgegeben.
>
> Normalerweise möchten Sie das `PermissionRequiredMixin`-Verhalten: 403 zurückgeben, wenn ein Benutzer eingeloggt ist, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True` wie folgt:
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
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ ausgeliehenen Bücher anzeigt und die den Namen jedes Ausleihers enthält.

Sie sollten dem gleichen Muster wie für die andere Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen, stattdessen die `can_mark_returned` Berechtigung und den `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für Berechtigungsbasiertes Testen zu verwenden (Berechtigungsprüfungen geben immer wahr für Superuser zurück, auch wenn eine Berechtigung noch nicht definiert ist!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderlichen Fähigkeiten hinzu.

Wenn Sie fertig sind, sollte Ihre Seite etwa so aussehen wie das untenstehende Bildschirmfoto.

![Alle ausgeliehenen Bücher, auf Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit – Sie haben nun eine Website erstellt, auf der Bibliotheksmitglieder sich einloggen und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der entsprechenden Berechtigung) alle ausgeliehenen Bücher und ihre Ausleiher anzeigen können. Im Moment betrachten wir noch nur Inhalte, aber die gleichen Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu verändern und hinzuzufügen.

In unserem nächsten Artikel schauen wir uns an, wie Sie Django Formulare verwenden können, um Benutzereingaben zu sammeln und dann einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumente)
- [Verwendung des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumente)
- [Einführung in klassenbasierte Ansichten> Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
