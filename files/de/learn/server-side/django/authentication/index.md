---
title: "Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
slug: Learn/Server-side/Django/Authentication
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Website anzumelden und wie Sie steuern können, was sie tun und sehen können, basierend darauf, ob sie angemeldet sind oder nicht und ihren _Berechtigungen_. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorhergehenden Tutorial-Themen bis einschließlich <a href="/de/docs/Learn/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a> ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Benutzer-Authentifizierung und Berechtigungen einrichtet und verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigungen"), das auf dem im [vorherigen Tutorial](/de/docs/Learn/Server-side/Django/Sessions) besprochenen Sitzungs-Framework basiert und es Ihnen ermöglicht, Benutzeranmeldedaten zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework umfasst eingebaute Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen auf mehr als einen Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, sowie Formulare und Ansichten zur Anmeldung von Benutzern und Ansichts-Tools zur Einschränkung von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein sein und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungssystemen bereitgestellt werden. Lösungen für einige allgemeine Probleme sind als Drittanbieterpakete verfügbar. Zum Beispiel [Drosselung](/de/docs/Glossary/throttle) von Anmeldeversuchen und Authentifizierung gegen Dritte (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierungs-/Berechtigungen, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu aufbauen, wenn Sie möchten, und nur die bereitgestellte API aufrufen, um den Benutzer anzumelden. In diesem Artikel verwenden wir jedoch die "Standard"-Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten. Wir müssen trotzdem einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie man Berechtigungen erstellt und den Anmeldestatus sowie Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüft.

## Aktivierung der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir die [Gerüst-Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (in Tutorial 2), sodass Sie an diesem Punkt nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns erledigt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zuerst `python manage.py migrate` aufgerufen haben.

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir die [Django Admin-Site](/de/docs/Learn/Server-side/Django/Admin_site) in Tutorial 4 angesehen haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, deshalb müssen wir einen Testbenutzer erstellen, um einen normalen Seitenbenutzer darzustellen. Wir verwenden die Admin-Site, um unsere _locallibrary_ Gruppen und Website-Anmeldungen zu erstellen, da dies einer der schnellsten Wege ist.

> [!NOTE]
> Sie können Benutzer auch programmatisch erstellen, wie unten gezeigt.
> Dies müssten Sie tun, um zum Beispiel eine Schnittstelle zu entwickeln, die "normalen" Benutzern erlaubt, ihre eigenen Anmeldungen zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Site geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr empfehlenswert ist, beim Start eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten, da Sie es in Zukunft bei Bedarf leicht anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, sieht der Code zum Erstellen desselben Benutzers wie folgt aus:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Für weitere Informationen siehe [Ein benutzerdefiniertes Benutzermodell verwenden, wenn ein Projekt gestartet wird](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir für unsere Bibliotheksmitglieder noch keine Berechtigungen haben, wird es viel einfacher sein, wenn wir später welche hinzufügen müssen, dies einmal zur Gruppe hinzuzufügen, anstatt sie jedem Mitglied einzeln zu vergeben.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Site in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich auf der Seite mit den Anmeldeinformationen Ihres Superuser-Kontos an. Die oberste Ebene der Admin-Site zeigt alle Ihre Modelle, sortiert nach "Django-Anwendung". Aus dem Abschnitt **Authentication and Authorization** können Sie die Links **Users** oder **Groups** anklicken, um deren bestehende Datensätze zu sehen.

![Admin-Site - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Lassen Sie uns zuerst eine neue Gruppe für unsere Bibliotheksmitglieder erstellen.

1. Klicken Sie auf die Schaltfläche **Add** (neben Group), um eine neue _Group_ zu erstellen; geben Sie den **Name** "Library Members" für die Gruppe ein.
   ![Admin-Site - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, drücken Sie also einfach auf **SAVE** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Lassen Sie uns nun einen Benutzer erstellen:

1. Navigieren Sie zurück zur Startseite der Admin-Site.
2. Klicken Sie auf die Schaltfläche **Add** neben _Users_, um das Dialogfeld _Add user_ zu öffnen.
   ![Admin-Site - Benutzer hinzufügen Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Username** und **Password**/**Password confirmation** für Ihren Testbenutzer ein.
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Site wird den neuen Benutzer erstellen und Sie sofort zu einem _Change user_ Bildschirm bringen, in dem Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des User-Modells hinzufügen können. Diese Felder enthalten den Vornamen, Nachnamen, die E-Mail-Adresse sowie den Status und die Berechtigungen des Benutzers (nur das Flag **Active** sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten im Zusammenhang mit dem Benutzer sehen (z.B. ihr Beitrittsdatum und das letzte Anmelde-Datum).
   ![Admin-Site - Benutzer hinzufügen Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im _Groups_ Abschnitt die **Library Member** Gruppe aus der Liste der _Available groups_ und drücken Sie dann den **Pfeil nach rechts** zwischen den Kästchen, um sie in die _Chosen groups_ Box zu verschieben.
   ![Admin-Site - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, also wählen Sie einfach erneut **SAVE**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein "normales Bibliotheksmitglied" Konto, das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, damit sie sich anmelden können).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglied-Benutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dort ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zu erstellen, um Anmeldung, Abmeldung und Passwortverwaltung "out of the box" zu bearbeiten. Dazu gehören ein URL-Mapping, Ansichten und Formulare, aber es sind keine Vorlagen enthalten — wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie man das Standardsystem in die _LocalLibrary_ Website einbindet und die Vorlagen erstellt. Wir platzieren sie in den Hauptprojekt-URLs.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie dies wollen, weil es die Dinge viel einfacher macht.
> Sie werden fast sicher den Formularverarbeitungscode ändern müssen, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie immer noch die Standard-Ansichtsfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten vernünftigerweise innerhalb unserer Kataloganwendung platzieren, einschließlich der URLs und Vorlagen.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten auszugliedern und auf der gesamten Seite verfügbar zu haben, daher haben wir das hier gezeigt!

### Projekt-URLs

Fügen Sie das folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass keine Zuordnung für diese URL gefunden wurde, und listet alle URLs auf, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Durch das Hinzufügen des `accounts/` Pfades wie oben gezeigt werden die folgenden URLs zusammen mit Namen (in eckigen Klammern angegeben), die zur Rückwärtsauflösung der URL-Mappings verwendet werden können, hinzugefügt. Sie müssen nichts anderes implementieren — das obige URL-Mapping mappt automatisch die unten genannten URLs:
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, jedoch mit einem Fehler, der Ihnen mitteilt, dass die erforderliche Vorlage (**registration/login.html**) auf dem Vorlagensuchpfad fehlt.
Sie sehen die folgenden Zeilen im gelben Abschnitt oben aufgelistet:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen mit dem Namen "registration" zu erstellen und dann die **login.html** Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit die Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo auf dem Vorlagensuchpfad gefunden werden.

Für diese Seite werden wir unsere HTML-Seiten im Verzeichnis **templates/registration/** speichern. Dieses Verzeichnis sollte in Ihrem Projektstammverzeichnis liegen, das heißt, im gleichen Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte jetzt wie folgt aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django-Top-Level-Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um den **templates**-Ordner für den Vorlagenlader sichtbar zu machen, müssen wir ihn im Vorlagensuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie die folgende Zeile oben in der Datei hinzu, falls sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `'DIRS'`-Zeile im `TEMPLATES`-Bereich wie gezeigt:

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
> Die Authentifizierungsvorlagen, die in diesem Artikel bereitgestellt werden, sind eine sehr einfache/leicht modifizierte Version der Django-Demonstrations-Anmeldevorlagen. Möglicherweise müssen Sie diese für Ihren eigenen Gebrauch anpassen!

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

Diese Vorlage teilt einige Ähnlichkeiten mit denen, die wir zuvor gesehen haben — sie erweitert unsere Basisschablone und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardmäßiger Formularbehandlungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass dies ein Formular anzeigt, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie bei Eingabe ungültiger Werte aufgefordert werden, korrekte Werte einzugeben, wenn die Seite aktualisiert wird.

Navigieren Sie nach dem Speichern Ihrer Vorlage zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`) und Sie sollten so etwas sehen:

![Bibliotheksanmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen anmelden, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig davon ausgeht, dass Sie nach der Anmeldung zu einer Profilseite gelangen möchten, was der Fall sein kann oder auch nicht. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den folgenden Text unten hinzu. Wenn Sie sich jetzt anmelden, sollten Sie standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Navigieren Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`), erhalten Sie einen Fehler, da Django 5 keine Abmeldung über `GET`, sondern nur über `POST` zulässt.
Wir werden gleich ein Formular hinzufügen, das Sie zum Abmelden verwenden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach dem Abmelden geführt werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den untenstehenden Text ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt nur eine Nachricht an, die Sie darüber informiert, dass Sie abgemeldet wurden, und bietet einen Link, auf den Sie drücken können, um zur Anmeldeseite zurückzukehren. Der Bildschirm sieht nach dem Abmelden so aus:

![Bibliotheksabmeldeseite v1](library_logout.png)

### Passwortzurücksetzungs-Vorlagen

Das standardmäßige Passwortzurücksetzungssystem verwendet E-Mail, um dem Benutzer einen Zurücksetzungslink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihnen die Eingabe eines neuen Passworts zu ermöglichen und um mitzuteilen, wann der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwortzurücksetzungs-Formular

Dies ist das Formular, um die E-Mail-Adresse des Benutzers zu erhalten (zum Senden der Passwortzurücksetzungs-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwortzurücksetzung abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse gesammelt wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwortzurücksetzung E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail, die den Zurücksetzungslink enthält, den wir an Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwortzurücksetzung bestätigen

Diese Seite ist dort, wo Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwortzurücksetzungs-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm den folgenden Inhalt:

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

#### Passwortzurücksetzung abgeschlossen

Dies ist die letzte Passwortzurücksetz-Vorlage, die angezeigt wird, um Sie darauf hinzuweisen, wenn die Passwortzurücksetzung erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (mit Ausnahme der Abmeldung) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich auf Ihrem Superuser-Konto mit der URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwortzurücksetzungsfunktionalität über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django Zurücksetzungs-E-Mails nur an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Kontenabmeldung noch nicht testen können, da Abmeldeanfragen als `POST` und nicht als `GET`-Anfrage gesendet werden müssen.

> [!NOTE]
> Das Passwortzurücksetzungssystem erfordert, dass Ihre Website E-Mail unterstützt, was über den Umfang dieses Artikels hinausgeht. Daher funktioniert dieser Teil **noch nicht**. Um das Testen zu ermöglichen, geben Sie die folgende Zeile am Ende Ihrer settings.py Datei ein. Dadurch werden alle gesendeten E-Mails im Konsolenprotokoll protokolliert (damit Sie den Passwortzurücksetzungslink aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen von authentifizierten Benutzern

Dieser Abschnitt behandelt, was wir tun können, um selektiv Inhalte zu steuern, die der Benutzer je nach Anmeldestatus sieht.

### Testen in Vorlagen

Informationen über den aktuell angemeldeten Benutzer können in Vorlagen über die `\{{ user }}`-Template-Variable abgerufen werden (dies wird standardmäßig zur Vorlage hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Gerüst getan haben).

In der Regel testen Sie zuerst gegen die `\{{ user.is_authenticated }}`-Template-Variable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, werden wir als nächstes unsere Seitenleiste aktualisieren, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor das `endblock`-Template-Tag.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif`-Template-Tags, um Text bedingt basierend darauf anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die URL des Anmeldelinks mithilfe des `url`-Template-Tags und des Namens der `login`-URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angefügt haben. Was dies tut, ist, dass es einen URL-Parameter `next` mit der Adresse (URL) der _aktuellen_ Seite an das Ende der verlinkten URL anhängt. Nachdem sich der Benutzer erfolgreich angemeldet hat, verwendet die Ansicht diesen `next`-Wert, um den Benutzer zurück zur Seite zu leiten, auf der er zuerst den Anmeldelink angeklickt hat.

Der Abmelde-Schablonencode ist anders, da Sie sich in Django 5 abmelden müssen, indem Sie `POST` an die `admin:logout`-URL senden, mit einem Formular, in dem sich ein Button befindet.
Standardmäßig würde dies als Button gerendert, aber Sie können den Button so gestalten, dass er als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, sodass wir den Button wie einen Link aussehen lassen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmeldelink korrekt neben allen anderen Links der Seitenleiste zu positionieren:

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
Sie sollten zu den oben im [Vorlagenverzeichnis](<#add_django_site_authentication_urls_(for_login,_logout,_password_management)>) definierten Abmelde-/Anmeldeseiten geführt werden.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist die einfachste Möglichkeit, den Zugriff auf Ihre Funktionen zu beschränken, den `login_required`-Dekorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr Ansichtscode wie üblich ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird er zur Anmeldungs-URL, die in den Projekteinstellungen (`settings.LOGIN_URL`) definiert ist, weitergeleitet, wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer sich erfolgreich anmeldet, wird er wieder auf diese Seite zurückgeführt, dieses Mal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können das gleiche manuell tun, indem Sie an `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

Ebenso ist die einfachste Möglichkeit, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Ansichten zu beschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen dieses Mixin in der Superklasse zuerst vor der Hauptansichtsklasse deklarieren.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch eine alternative Position angeben, zu der der Benutzer umgeleitet werden soll, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameter-Namen anstelle von `next` angeben, um den aktuellen absoluten Pfad (`redirect_field_name`) einzufügen.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details schauen Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) an.

## Beispiel — Auflisten der Bücher des aktuellen Benutzers

Da wir nun wissen, wie wir eine Seite für einen bestimmten Benutzer einschränken können, lassen Sie uns eine Ansicht für die Bücher erstellen, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Benutzern zu erlauben, Bücher zu leihen! Bevor wir also die Buchliste erstellen können, erweitern wir das `BookInstance`-Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django Admin-Anwendung, um unserer Testbenutzer einige Bücher zu leihen.

### Modelle

Zuerst müssen wir es Benutzern ermöglichen, eine `BookInstance` auszuleihen (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine solche Zuordnung mit einem `ForeignKey`- (eins-zu-viele) Feld. Wir benötigen auch einen einfachen Mechanismus, um zu prüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, damit die Einstellungen für nachfolgenden Code verfügbar sind, der sie verwendet):

```python
from django.conf import settings
```

Fügen Sie als Nächstes das `borrower`-Feld zum `BookInstance`-Modell hinzu und setzen Sie das Benutzermodell für den Schlüssel auf den Wert der Einstellung `AUTH_USER_MODEL`.
Da wir die Einstellung mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) nicht überschrieben haben, wird dies auf das Standard-`User`-Modell aus `django.contrib.auth.models` abgebildet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Modell auf diese Weise zu importieren verringert den Aufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User`-Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir aus unseren Vorlagen aufrufen können, um festzustellen, ob eine bestimmte Instanz eines Buches überfällig ist.
Obwohl wir dies direkt in der Vorlage berechnen könnten, wird es viel effizienter, eine [Eigenschaft](https://docs.python.org/3/library/functions.html#property) zu verwenden, wie unten gezeigt.

Fügen Sie dies irgendwo oben in der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance`-Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()`-Funktion von Python, die ein Objekt oder das Ergebnis eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in welchem Fall es `False` zurückgibt.
> In Python ist ein Objekt _falsy_ (wertet als `False`), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres `due_back` Feld würde in Django zu einem Fehler führen, anstatt die Seite zu zeigen: Leere Werte sind nicht vergleichbar. Dies ist nicht etwas, das wir unseren Benutzern zumuten möchten!

Nachdem wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen im Projekt durchführen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das `borrower`-Feld zur `BookInstanceAdmin`-Klasse sowohl in `list_display` als auch in `fieldsets` wie unten gezeigt hinzu.
Dies wird das Feld im Admin-Bereich sichtbar machen, damit wir Benutzern einem `BookInstance` bei Bedarf zuweisen können.

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

Jetzt, da es möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, gehen Sie und leihen eine Anzahl von `BookInstance`-Datensätzen aus. Setzen Sie ihr `borrowed`-Feld auf Ihren Testbenutzer, machen Sie den `status` auf "On loan" und setzen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit.

> [!NOTE]
> Wir werden den Prozess hier nicht Schritt für Schritt durchgehen, da Sie bereits wissen, wie Sie die Admin-Site verwenden!

### Ansicht für ausgeliehene Bücher

Jetzt werden wir eine Ansicht hinzufügen, die die Liste aller Bücher bekommt, die dem aktuellen Benutzer ausgeliehen wurden. Wir werden die gleiche generische klassenbasierte Listenansicht verwenden, die wir gewohnt sind, aber diesmal werden wir auch `LoginRequiredMixin` importieren und davon ableiten, sodass nur ein eingeloggter Benutzer diese Ansicht aufrufen kann. Wir werden uns auch dafür entscheiden, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir letztlich einige verschiedene Listen von `BookInstance`-Datensätzen mit verschiedenen Ansichten und Vorlagen haben könnten.

Fügen Sie das folgende zu catalog/views.py hinzu:

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

Um unsere Abfrage nur auf die `BookInstance`-Objekte für den aktuellen Benutzer einzuschränken, implementieren wir `get_queryset()` erneut, wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem `due_back`-Datum sortieren, sodass die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht verweist (Sie können einfach den untenstehenden Text ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Alles, was wir für diese Seite noch brauchen, ist eine Vorlage. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich denjenigen, die wir zuvor für die `Book`- und `Author`-Objekte erstellt haben.
Das Einzige, was hier neu ist, ist, dass wir die Methode überprüfen, die wir im Modell hinzugefügt haben (`(bookinst.is_overdue`) und sie verwenden, um die Farbe der überfälligen Einträge zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste jetzt im Browser ansehen können für einen eingeloggten Benutzer unter `http://127.0.0.1:8000/catalog/mybooks/`. Probieren Sie dies mit Ihrem Benutzer sowohl eingeloggt als auch ausgeloggt aus (im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden).

### Die Liste zur Seitenleiste hinzufügen

Der allerletzte Schritt ist es, einen Link für diese neue Seite in die Seitenleiste hinzuzufügen. Wir platzieren dies im selben Bereich, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "My Borrowed" im Bereich der Seitenleiste an der unten gezeigten Position hinzu.

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

Wenn ein Benutzer eingeloggt ist, sieht er den _My Borrowed_ Link in der Seitenleiste, und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben hoffen!).

![Bibliothek - Sichergestellte Bücher durch Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die auf einem Modellinstanz von einem Benutzer, der die Berechtigung hat, durchgeführt werden können. Standardmäßig gibt Django automatisch _add_-, _change_- und _delete_-Berechtigungen für alle Modelle, die Benutzern mit den Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Site auszuführen. Sie können Ihre eigenen Berechtigungen zu Modellen definieren und sie bestimmten Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich, wie das Testen des Authentifizierungsstatus (und in der Tat testet das Testen einer Berechtigung auch auf Authentifizierung).

### Modelle

Die Definition von Berechtigungen erfolgt im `class Meta`-Abschnitt des Modells, unter Verwendung des `permissions`-Feldes.
Sie können so viele Berechtigungen wie nötig in einem Tupel angeben, jede Berechtigung wird selbst in einem verschachtelten Tupel definiert, das den Berechtigungsnamen und den Anzeige-Wert der Berechtigung enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, die es einem Benutzer erlaubt, anzugeben, dass ein Buch zurückgegeben wurde, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten die Berechtigung dann in der Admin-Site zu einer "Librarian"-Gruppe hinzufügen.

Öffnen Sie die **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Template-Variable namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-App verwenden — z.B. `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` ansonsten. In der Regel testen wir die Berechtigung mit dem `{% if %}`-Tag der Vorlage, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required`-Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Das Muster ist dasselbe wie für die Anmeldeauthentifizierung, obwohl es natürlich sein kann, dass Sie vernünftigerweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungserforderndes Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. Standardmäßig bei einem angemeldeten Benutzer mit einer Berechtigungsverletzung:
>
> - `@permission_required` leitet auf die Anmeldeseite um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Verboten).
>
> Normalerweise möchten Sie das Verhalten des `PermissionRequiredMixin`: geben Sie 403 zurück, wenn ein Benutzer angemeldet ist, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie unten gezeigt:
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

Früher in diesem Artikel haben wir gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die er ausgeliehen hat.
Die Herausforderung besteht jetzt darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist und die _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Entleihers einbezieht.

Sie sollten das gleiche Muster wie bei der anderen Ansicht befolgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktions-Dekorator: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen, stattdessen die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für die Berechtigungstestungen zu verwenden (Berechtigungsüberprüfungen geben für Superuser immer wahr zurück, selbst wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite etwa aussehen wie der Screenshot unten.

![Alle ausgeliehenen Bücher, auf Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Entleiher einsehen können. Im Moment betrachten wir immer noch nur Inhalte, aber die gleichen Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu verändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie mit Django-Formularen Benutzereingaben sammeln können, um dann einige unserer gespeicherten Daten zu modifizieren.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
