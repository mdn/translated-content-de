---
title: "Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie es Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie steuern können, was sie tun und sehen können, basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration werden wir die [LokaleBibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, indem wir Login- und Logout-Seiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen von entliehenen Büchern hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu verstehen, wie man Benutzer-Authentifizierung und Berechtigungen einrichtet und verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django bietet ein Authentifizierungs- und Autorisierungssystem („Berechtigung“), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungs-Framework basiert und Ihnen ermöglicht, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework umfasst integrierte Modelle für `Users` und `Groups` (eine allgemeine Methode, Berechtigungen gleichzeitig auf mehr als einen Benutzer anzuwenden), Berechtigungen/Flags, die angeben, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten für das Einloggen von Benutzern sowie Ansichtstools zur Inhaltsbeschränkung.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr generisch sein und bietet daher nicht alle Funktionen, die in anderen Web-Authentifizierungssystemen vorhanden sind. Lösungen für einige häufige Probleme sind als Drittpakete verfügbar. Beispielsweise {{Glossary("throttle", "Drosselung")}} von Anmeldeversuchen und Authentifizierung gegen Drittanbieter (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LokaleBibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir nutzen die Authentifizierung/Berechtigungen, um Listen von entliehenen Büchern sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf selbst aufbauen, indem Sie einfach die bereitgestellte API aufrufen, um den Benutzer anzumelden. In diesem Artikel werden wir jedoch die "standardmäßigen" Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen dennoch einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und in sowohl Ansichten als auch Vorlagen den Anmeldestatus und Berechtigungen überprüfen.

## Aktivieren der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skeleton-Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben (im Tutorial 2), sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns bereits erledigt, als wir die App mit dem `django-admin startproject` Befehl erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir das erste Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration ist in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) wie unten gezeigt eingerichtet:

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir uns im Tutorial 4 die [Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben (dies war ein Superuser, erstellt mit dem Befehl `python manage.py createsuperuser`). Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, der einen normalen Website-Benutzer repräsentiert. Wir werden die Admin-Seite verwenden, um unsere _locallibrary_ Gruppen und Website-Logins zu erstellen, da dies eine der schnellsten Möglichkeiten ist, dies zu tun.

> [!NOTE]
> Sie können Benutzer auch programmatisch wie unten gezeigt erstellen.
> Sie müssten dies zum Beispiel tun, wenn Sie eine Schnittstelle entwickeln, die es „normalen“ Benutzern ermöglicht, ihre eigenen Logins zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Seite geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr empfehlenswert ist, beim Start eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten, da Sie es bei Bedarf in der Zukunft leicht anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, sieht der Code zur Erstellung desselben Benutzers so aus:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
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
> Weitere Informationen finden Sie unter [Verwendung eines benutzerdefinierten Benutzermodells beim Start eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Nachfolgend erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, ist es später viel einfacher, sie einmal zur Gruppe hinzuzufügen, als sie einzeln jedem Mitglied hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Seite in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldeinformationen für Ihr Superuser-Konto auf der Seite an. Die oberste Ebene der Admin-Seite zeigt alle Ihre Modelle an, sortiert nach „Django-Anwendung“. Im Abschnitt **Authentifizierung und Autorisierung** können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um ihre vorhandenen Datensätze zu sehen.

![Admin-Seite - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zuerst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Hinzufügen** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie als **Name** der Gruppe "Bibliotheksmitglieder" ein.
   ![Admin-Seite - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, drücken Sie einfach **SPEICHERN** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Erstellen wir nun einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Seite.
2. Klicken Sie auf die Schaltfläche **Hinzufügen** neben _Benutzer_, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin-Seite - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen passenden **Benutzernamen** und **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein.
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Seite wird den neuen Benutzer erstellen und Sie sofort zu einem _Benutzer ändern_ Bildschirm führen, wo Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzermodells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse und den Status sowie die Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten, die den Benutzer betreffen, sehen (z.B. ihr Eintrittsdatum und das Datum der letzten Anmeldung).
   ![Admin-Seite - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Gruppen_ die **Bibliotheksmitglied**-Gruppe aus der Liste der _Verfügbaren Gruppen_ aus und drücken Sie dann den **Rechtspfeil** zwischen den Kästen, um sie in das Kästchen _Ausgewählte Gruppen_ zu verschieben.
   ![Admin-Seite - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, wählen Sie einfach erneut **SPEICHERN**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein Konto für "normale Bibliotheksmitglieder", das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, um ihnen das Einloggen zu ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Benutzer für Bibliotheksmitglieder zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet nahezu alles, was Sie benötigen, um Authentifizierungsseiten zu erstellen, die das Einloggen, Ausloggen und das Passwort-Management „out of the box“ handhaben. Dies umfasst einen URL-Mapping, Ansichten und Formulare, aber es enthält nicht die Vorlagen – wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LokaleBibliothek_ Website integrieren und die Vorlagen erstellen.

> [!NOTE]
> Django enthält keine integrierte Authentifizierungsansicht für die erstmalige Benutzerregistrierung („Registrierung“).
> Sie können eine selbst erstellen, falls nötig, aber für dieses Tutorial gehen wir davon aus, dass nur Bibliothekare Benutzer registrieren dürfen und dies über die Django-Admin-Oberfläche tun würden.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber höchstwahrscheinlich werden Sie es wollen, da es die Dinge viel einfacher macht.
> Sie müssen fast sicher den Formularverarbeitungscode ändern, wenn Sie Ihr Benutzermodell ändern, aber dennoch könnten Sie die Standard-Ansichtsfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, in unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Login-Verhalten herauszutrennen und es auf der gesamten Website verfügbar zu haben, und das haben wir hier gezeigt!

### Projekt-URLs

Fügen Sie das folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur `http://127.0.0.1:8000/accounts/` URL (achten Sie auf den abschließenden Schrägstrich!).
Django wird einen Fehler anzeigen, dass es kein Mapping für diese URL finden konnte, und alle URLs auflisten, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir die Vorlagen erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/` Pfads wie oben gezeigt fügt die folgenden URLs hinzu, zusammen mit Namen (in eckigen Klammern), die zum Umkehren der URL-Zuordnungen verwendet werden können. Sie müssen nichts anderes implementieren — das obige URL-Mapping mappt automatisch die unten genannten URLs.
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

Versuchen Sie nun, zur Login-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, aber mit einem Fehler, der Ihnen mitteilt, dass die erforderliche Vorlage (_registration/login.html_) im Vorlagensuchpfad fehlt.
Sie werden die folgenden Zeilen im gelben Abschnitt oben sehen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen mit dem Namen "registration" zu erstellen und dann die **login.html** Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit, Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagensuchpfad zu finden sind.

Für diese Seite werden wir unsere HTML-Seiten im **templates/registration/** Verzeichnis ablegen. Dieses Verzeichnis sollte sich in Ihrem Projektstammverzeichnis befinden, also im selben Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django Projekt-Stammverzeichnis
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates** Verzeichnis für den Vorlage-Loader sichtbar zu machen, müssen wir es dem Vorlagensuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie die folgende Zeile nahe der Spitze der Datei hinzu, falls es noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES` Sektion's `'DIRS'` Zeile wie unten gezeigt:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Login-Vorlage

> [!WARNING]
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr grundlegende/leicht angepasste Version der Django-Demonstrations-Login-Vorlagen. Möglicherweise müssen Sie sie für Ihre eigenen Zwecke anpassen!

Erstellen Sie eine neue HTML-Datei namens **/django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr den folgenden Inhalt:

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

Diese Vorlage teilt einige Ähnlichkeiten mit denen, die wir zuvor gesehen haben – sie erweitert unsere Basisklasse und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardisierte Formularbehandlung, die wir in einem späteren Tutorial besprechen werden. Alles, was Sie bisher wissen müssen, ist, dass dies ein Formular anzeigt, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass, wenn Sie ungültige Werte eingeben, Sie beim Neuladen der Seite aufgefordert werden, korrekte Werte einzugeben.

Navigieren Sie zurück zur Login-Seite (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas wie unten sehen:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen einloggen, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach dem Einloggen auf eine Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text an das Ende hinzu. Nun sollten Sie standardmäßig zur Homepage der Website umgeleitet werden, wenn Sie sich einloggen.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Logout-Vorlage

Wenn Sie zur Logout-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 kein Logout mit `GET`, sondern nur mit `POST` erlaubt.
Wir werden gleich ein Formular hinzufügen, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach dem Abmelden gelangen.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den unten stehenden Text:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt nur eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link an, den Sie drücken können, um zurück zur Anmeldeseite zu gelangen. Der Bildschirm wird nach dem Logout so gerendert:

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Passwort zurücksetzen Vorlagen

Das standardmäßige Passwort-zurücksetzen-System verwendet E-Mail, um dem Benutzer einen Link zum Zurücksetzen zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihnen zu erlauben, ein neues Passwort einzugeben, und zu bemerken, wenn der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwort-zurücksetzen Formular

Dies ist das Formular, um die E-Mail-Adresse des Benutzers zu erhalten (zum Senden der Passwort-zurücksetzen E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie den folgenden Inhalt:

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

#### Passwort-zurücksetzen abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-zurücksetzen E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail mit dem Zurücksetz-Link, die wir an die Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-zurücksetzen Bestätigen

Diese Seite ist für die Eingabe Ihres neuen Passworts, nachdem Sie auf den Link in der Passwort-zurücksetzen E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie den folgenden Inhalt:

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

#### Passwort-zurücksetzen abgeschlossen

Dies ist die letzte Passwort-zurücksetzen-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn das Zurücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Jetzt, da Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto mithilfe der URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwort-zurücksetzen-Funktionalität vom Link auf der Anmeldeseite aus testen. **Seien Sie sich jedoch bewusst, dass Django Zurücksetz-E-Mails nur an Adressen (Benutzer) versendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie das Abmelden noch nicht testen können, da Abmeldungsanfragen als `POST` anstelle einer `GET` Anfrage gesendet werden müssen.

> [!NOTE]
> Das Passwort-zurücksetzen-System erfordert, dass Ihre Website E-Mail unterstützt, was den Rahmen dieses Artikels sprengt, sodass dieser Teil **noch nicht funktioniert**. Um das Testen zu ermöglichen, setzen Sie die folgende Zeile am Ende Ihrer Datei settings.py. Dies zeichnet alle gesendeten E-Mails in der Konsole auf (so dass Sie den Passwort-zurücksetzen-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen für authentifizierte Benutzer

Dieser Abschnitt untersucht, was wir tun können, um selektiv zu steuern, welche Inhalte der Benutzer sieht, basierend darauf, ob er eingeloggt ist oder nicht.

### Testen in Vorlagen

Sie können Informationen über den aktuell eingelognten Benutzer in Vorlagen mit der `\{{ user }}` Vorlagenvariable abrufen (diese wird standardmäßig zum Vorlagenkontext hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Skelett getan haben).

Typischerweise testen Sie zuerst gegen die `\{{ user.is_authenticated }}` Vorlagenvariable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, werden wir als nächstes unsere Seitenleiste aktualisieren, um einen "Login"-Link anzuzeigen, wenn der Benutzer ausgeloggt ist, und einen "Logout"-Link, wenn er eingeloggt ist.

Öffnen Sie die Basisklasse (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor dem `endblock` Vorlagentag.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif` Vorlagentags, um den Text bedingt basierend darauf anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um deren Namen anzuzeigen.

Wir erstellen die URL des Login-Links mithilfe des `url` Vorlagentags und des Namens der `login`-URL-Konfiguration. Beachten Sie auch, wie wir an das Ende der URL `?next=\{{ request.path }}` angehängt haben. Dies fügt der verlinkten URL einen URL-Parameter `next` hinzu, der die Adresse (URL) der _aktuellen_ Seite enthält. Nachdem der Benutzer erfolgreich eingeloggt ist, verwendet die Ansicht diesen `next` Wert, um den Benutzer zurück zur Seite weiterzuleiten, auf der er den Login-Link zuerst angeklickt hat.

Der Logout-Vorlagencode ist anders, weil Sie ab Django 5 sich mit einem `POST` an die `admin:logout` URL abmelden müssen, indem Sie ein Formular mit einer Schaltfläche verwenden.
Standardmäßig würde dies als Schaltfläche gerendert, aber Sie können die Schaltfläche als Link anzeigen lassen.
Für dieses Beispiel verwenden wir _Bootstrap_, sodass wir die Schaltfläche wie einen Link aussehen lassen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Logout-Link neben all den anderen Seitenleisten-Links korrekt zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie die Links Login/Logout in der Seitenleiste anklicken.
Sie sollten zu den Logout-/Login-Seiten geleitet werden, die Sie oben im Abschnitt [Vorlagenverzeichnis](#vorlagenverzeichnis) definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, den Zugriff auf Ihre Funktionen zu beschränken, die Verwendung des `login_required` Dekorators für Ihre Ansichtsfunktion, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr Ansichtscode wie gewohnt ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird er zur Login-URL weitergeleitet, die in den Projekteinstellungen definiert ist (`settings.LOGIN_URL`), wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer es schafft, sich einzuloggen, wird er zurück zu dieser Seite geleitet, dieses Mal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie auf `request.user.is_authenticated` testen, aber der Dekorator ist wesentlich bequemer!

Ähnlich ist der einfachste Weg, den Zugriff auf eingeloggte Benutzer in Ihren klassenbasierten Ansichten zu beschränken, die Ableitung von `LoginRequiredMixin`. Sie müssen dieses Mixin zuerst in der Superklasseliste, vor der Hauptsichtklasse, deklarieren.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Weiterleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, zu dem der Benutzer weitergeleitet werden soll, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameternamen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für zusätzliche Details sehen Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) an.

## Beispiel — Liste der Bücher des aktuellen Benutzers

Da wir nun wissen, wie man eine Seite für einen bestimmten Benutzer einschränkt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer entliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher zu entleihen! Daher müssen wir, bevor wir die Buchliste erstellen, erst das `BookInstance` Modell erweitern, um das Konzept der Ausleihe zu unterstützen, und dann die Django-Admin-Anwendung verwenden, um eine Reihe von Büchern unseren Testbenutzern zu leihen.

### Modelle

Zuerst werden wir es Benutzern ermöglichen müssen, ein `BookInstance` auszuleihen (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine mit einem `ForeignKey` (eins-zu-viele) Feld erstellen. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` von `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile am Anfang der Datei hinzu, damit die Einstellungen für den nachfolgenden Code, der sie verwendet, verfügbar sind):

```python
from django.conf import settings
```

Als nächstes fügen Sie das `borrower` Feld zum `BookInstance` Modell hinzu, indem Sie als Wert des Schlüssels das Benutzermodell der Einstellung `AUTH_USER_MODEL` setzen.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies auf das standardmäßige `User` Modell von `django.contrib.auth.models` abgebildet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise reduziert die Arbeit, die erforderlich ist, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User` Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir aus unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buchexemplar überfällig ist.
Obwohl wir dies direkt in der Vorlage berechnen könnten, wird es viel effizienter sein, wenn wir eine [property](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt verwenden.

Fügen Sie dies irgendwo in der Nähe der Spitze der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance`-Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die Python `bool()` Funktion, die ein Objekt oder das Ergebnis eines Ausdrucks auswertet und `True` zurückgibt, es sei denn das Ergebnis ist „falsch“, in dem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsch_ (bewertet als `False`), wenn es: leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zunächst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back` Feld würde dazu führen, dass Django einen Fehler anzeigt, anstatt die Seite zu zeigen: leere Werte sind nicht vergleichbar. Dies ist nicht etwas, was unsere Benutzer erleben sollten!

Da wir unsere Modelle aktualisiert haben, werden wir frische Migrationen auf dem Projekt erstellen und diese Migrationen dann anwenden müssen:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse in sowohl dem `list_display` als auch den `fieldsets` ein, wie unten gezeigt.
Dies wird das Feld im Admin-Bereich sichtbar machen und es ermöglichen, einen `User` zu einem `BookInstance` zuzuweisen, wenn nötig.

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

### Ein paar Bücher verleihen

Jetzt, da es möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, verleihen Sie eine Reihe von `BookInstance` Datensätzen. Setzen Sie deren `borrowed` Feld auf Ihren Testbenutzer, setzen Sie den `status` auf "On loan" und setzen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht im Detail beschreiben, da Sie bereits wissen, wie Sie die Admin-Oberfläche verwenden!

### Ansichten zu Leihen

Nun werden wir eine Ansicht hinzufügen, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer verliehen wurden. Wir werden dieselbe generische klassenbasierte Listenansicht verwenden, die wir kennen, werden aber diesmal auch `LoginRequiredMixin` importieren und davon ableiten, sodass nur ein eingelogter Benutzer diese Ansicht aufrufen kann. Wir werden auch entscheiden, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir möglicherweise mehrere unterschiedliche Listen von `BookInstance` Datensätzen mit verschiedenen Ansichten und Vorlagen haben können.

Fügen Sie das folgende zu **catalog/views.py** hinzu:

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

Um unsere Abfrage nur auf die `BookInstance` Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "auf Leihfrist" ist, und wir nach dem `due_back` Datum sortieren, sodass die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für verliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht verweist (Sie können einfach den unten stehenden Text ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für verliehene Bücher

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

Diese Vorlage ist denjenigen, die wir zuvor für die `Book` und `Author` Objekte erstellt haben, sehr ähnlich.
Das einzige "neue" hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben (`bookinst.is_overdue`), überprüfen und benutzen, um die Farbe der überfälligen Elemente zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie nun in der Lage sein, die Liste für einen eingelogten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzuzeigen. Testen Sie dies sowohl mit Ihrem Benutzer eingeloggt als auch ausgeloggt (im zweiten Fall sollten Sie zur Anmeldeseite umgeleitet werden).

### Fügen Sie die Liste zur Seitenleiste hinzu

Der letzte Schritt besteht darin, einen Link für diese neue Seite in die Seitenleiste einzufügen. Wir platzieren dies in demselben Abschnitt, wo wir andere Informationen für den eingeloggten Benutzer anzeigen.

Öffnen Sie die Basisklasse (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "Meine Entliehenen" in die Seitenleiste an der unten gezeigten Position ein.

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

Wenn ein Benutzer eingeloggt ist, sieht er den _Meine Entliehenen_ Link in der Seitenleiste und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben wollen!).

![Bibliothek - entliehene Bücher vom Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die an einem Modellinstanz von einem Benutzer, der die Berechtigung hat, durchgeführt werden können. Standardmäßig gibt Django automatisch _add_, _change_ und _delete_ Berechtigungen für alle Modelle, die es Benutzern mit den Berechtigungen ermöglichen, die zugehörigen Aktionen über die Admin-Seite auszuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und sie bestimmten Benutzern gewähren. Sie können auch die Berechtigungen in Bezug vorgeschiedende Instanzen desselben Modells ändern.

Das Testen auf Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich wie das Testen auf den Authentifizierungsstatus (und tatsächlich umfasst das Testen auf eine Berechtigung auch das Testen auf Authentifizierung).

### Modelle

Das Definieren von Berechtigungen erfolgt im `class Meta` Abschnitt des Modells unter Verwendung des `permissions` Felds.
Sie können so viele Berechtigungen wie nötig in einem Tupel angeben, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert wird, das den Berechtigungsnamen und den Berechtigungsanzeigenamen enthält.
Beispielsweise können wir eine Berechtigung definieren, die es einem Benutzer erlaubt, zu kennzeichnen, dass ein Buch als zurückgegeben gekennzeichnet wurde, wie unten gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung zur "Bibliothekar"-Gruppe auf der Admin-Seite zuweisen.

Öffnen Sie **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen neu ausführen (`python3 manage.py makemigrations` und `python3 manage.py migrate` aufrufen), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Vorlagenvariable namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden – z.B. wird `\{{ perms.catalog.can_mark_returned }}` `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` sonst. Wir testen normalerweise die Berechtigung mit dem Vorlagen-Tag `{% if %}`, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required` Dekorator getestet werden oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin`. Die Muster sind dieselben wie für die Login-Authentifizierung, obwohl Sie selbstverständlich möglicherweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungserforderlicher Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im oben gezeigten Verhalten. Standardmäßig bei einem eingelogten Benutzer mit einer Berechtigungsverletzung:
>
> - `@permission_required` leitet zur Anmeldeseite weiter (HTTP Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP Status Verboten).
>
> Normalerweise wollen Sie das `PermissionRequiredMixin` Verhalten: 403 zurückgeben, wenn ein Benutzer eingeloggt, aber nicht die korrekte Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Wir werden die _LokaleBibliothek_ hier nicht aktualisieren; vielleicht im nächsten Tutorial!

## Fordern Sie sich selbst heraus

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die er entliehen hat.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ Bücher auflistet, die entliehen wurden und welche den Namen jedes Entleihers enthält.

Sie sollten dem gleichen Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied ist, dass Sie die Ansicht nur für Bibliothekare einschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Vorlagenvariable: `user.is_staff`), aber wir empfehlen, dass Sie stattdessen die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für Berechtigungstests zu verwenden (Berechtigungsprüfungen geben immer wahr für Superuser zurück, selbst wenn eine Berechtigung noch nicht definiert ist!). Erstellen Sie stattdessen einen Bibliothekarbenutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite in etwa wie im unten stehenden Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit – Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Entleiher sehen können. Im Moment betrachten wir noch Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie anfangen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie mit Django-Formularen Benutzereingaben sammeln und dann einige unserer gespeicherten Daten ändern können.

## Siehe auch

- [Benutzer-Authentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard-)Django-Authentifizierungsystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorierung klassenbasierter Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
