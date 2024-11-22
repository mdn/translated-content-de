---
title: "Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
slug: Learn/Server-side/Django/Authentication
l10n:
  sourceCommit: 619d9d3e00c0170b041f504103546d7d68a3791a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Seite anzumelden, und wie Sie steuern können, was sie basierend darauf tun und sehen können, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Tutorial-Themen bis einschließlich <a href="/de/docs/Learn/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
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

## Überblick

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigung"), das auf dem Sitzungs-Framework basiert, das im [vorherigen Tutorial](/de/docs/Learn/Server-side/Django/Sessions) besprochen wurde. Es ermöglicht Ihnen, Benutzeranmeldedaten zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine generische Möglichkeit, Berechtigungen gleichzeitig auf mehr als einen Benutzer anzuwenden), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zur Anmeldung von Benutzern sowie View-Tools zur Einschränkung von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein gehalten sein und bietet daher nicht einige Funktionen, die in anderen Webauthentifizierungssystemen bereitgestellt werden. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Beispielsweise {{Glossary("throttle", "Throttling")}} von Anmeldeversuchen und Authentifizierung gegen Dritte (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierungs-/Berechtigungen, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, wenn Sie möchten, und einfach die bereitgestellte API aufrufen, um den Benutzer anzumelden. In diesem Artikel werden wir jedoch die "Standard"-Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen.

## Aktivierung der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir [die Skelett-Website erstellt](/de/docs/Learn/Server-side/Django/skeleton_website) haben (im Tutorial 2), sodass Sie zu diesem Zeitpunkt nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns erstellt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration befindet sich in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**), wie unten gezeigt:

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

Sie haben bereits Ihren ersten Benutzer erstellt, als wir uns das [Django-Admin-Panel](/de/docs/Learn/Server-side/Django/Admin_site) im Tutorial 4 angesehen haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, der einen normalen Seitenbenutzer darstellt. Wir werden das Admin-Panel verwenden, um unsere _locallibrary_-Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten ist, dies zu tun.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt.
> Sie müssten dies tun, wenn Sie zum Beispiel eine Schnittstelle entwickeln, mit der "normale" Benutzer ihre eigenen Anmeldungen erstellen können (Sie sollten den meisten Benutzern keinen Zugriff auf das Admin-Panel geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr zu empfehlen ist, ein _benutzerdefiniertes Benutzermodell_ einzurichten, wenn Sie ein Projekt starten, da Sie es bei Bedarf in Zukunft leicht anpassen können.
> Bei Verwendung eines benutzerdefinierten Benutzermodells würde der Code zum Erstellen desselben Benutzers folgendermaßen aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Unten erstellen wir zunächst eine Gruppe und dann einen Benutzer. Auch wenn wir für unsere Bibliotheksmitglieder noch keine Berechtigungen hinzuzufügen haben, wird es viel einfacher, sie später der Gruppe hinzuzufügen, als jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und navigieren Sie mit Ihrem lokalen Webbrowser zur Admin-Seite (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldeinformationen für Ihr Superuser-Konto auf der Seite an. Die oberste Ebene der Admin-Seite zeigt alle Ihre Modelle, sortiert nach "Django-Anwendung". In der **Authentifizierung und Autorisierung**-Sektion können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um deren vorhandene Datensätze zu sehen.

![Admin-Seite - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Lassen Sie uns zuerst eine neue Gruppe für unsere Bibliotheksmitglieder erstellen.

1. Klicken Sie auf die Schaltfläche **Hinzufügen** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie der Gruppe den **Namen** "Bibliotheksmitglieder".
   ![Admin-Seite - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, daher drücken Sie einfach **SPEICHERN** (Sie gelangen zu einer Liste der Gruppen).

Nun erstellen wir einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Seite.
2. Klicken Sie auf die Schaltfläche **Hinzufügen** neben _Benutzer_, um das _Benutzer hinzufügen_-Dialogfeld zu öffnen.
   ![Admin-Seite - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Benutzernamen** und ein **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein.
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Seite erstellt den neuen Benutzer und führt Sie sofort zu einem _Benutzer ändern_-Bildschirm, wo Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzer-Modells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse und den Status sowie die Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten in Bezug auf den Benutzer anzeigen (z.B. sein Beitrittsdatum und das Datum seines letzten Logins).
   ![Admin-Seite - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Gruppen_ die Gruppe **Bibliotheksmitglied** aus der Liste der _verfügbaren Gruppen_, und drücken Sie dann den **Rechtspfeil** zwischen den Kästchen, um sie in das Kästchen _ausgewählte Gruppen_ zu verschieben.
   ![Admin-Seite - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, wählen Sie also einfach nochmals **SPEICHERN**, um zur Liste der Benutzer zu gelangen.

Das war's! Nun haben Sie ein "normales Bibliotheksmitglied"-Konto, das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, mit denen sie sich anmelden können).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglieder-Benutzer zu erstellen. Erstellen Sie außerdem eine Gruppe für Bibliothekare und fügen Sie auch dort einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten für die Handhabung von Anmeldungen, Abmeldungen und Passwortverwaltung "out of the box" zu erstellen. Dazu gehören ein URL-Mapper, Ansichten und Formulare, jedoch sind die Vorlagen nicht enthalten — wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie das Standard-System in die _LocalLibrary_ Website integriert und die Vorlagen erstellt werden. Wir legen sie in den Hauptprojekt-URLs an.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie es wollen, weil es die Dinge viel einfacher macht.
> Sie werden den Formularverarbeitungscode fast sicher ändern müssen, wenn Sie Ihr Benutzermodell ändern, aber dennoch können Sie die Standardansichts-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, in unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Login-Verhalten auszusondern und es über die ganze Seite verfügbar zu machen, so wie wir es hier gezeigt haben!

### Projekt-URLs

Fügen Sie das Folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass keine Zuordnung für diese URL gefunden werden konnte, und listet alle URLs auf, die versucht wurden.
Daraus können Sie sehen, welche URLs funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Durch das Hinzufügen des `accounts/` Pfades wie oben gezeigt werden die folgenden URLs hinzugefügt, zusammen mit Namen (in eckigen Klammern angegeben), die verwendet werden können, um die URL-Zuordnungen rückgängig zu machen. Sie müssen nichts anderes implementieren — die obige URL-Zuordnung ordnet automatisch die unten erwähnten URLs zu.
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

Versuchen Sie jetzt, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird wieder fehlschlagen, aber mit einem Fehler, der Ihnen mitteilt, dass die erforderliche Vorlage (**registration/login.html**) im Vorlagensuchpfad fehlt.
Sie werden die folgenden Zeilen im gelben Abschnitt oben sehen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen namens "registration" zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit die Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagensuchpfad zu finden sind.

Für diese Seite werden wir unsere HTML-Seiten im **templates/registration/** Verzeichnis ablegen. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im gleichen Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie jetzt diese Ordner.

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

Um das **templates** Verzeichnis für den Vorlagensucher sichtbar zu machen, müssen wir es dem Vorlagensuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie die folgende Zeile nahe der Spitze der Datei hinzu, wenn es noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES` Sektion `'DIRS'` Linie wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr grundlegende/leicht modifizierte Version der Django-Demonstrationsanmeldevorlagen. Sie müssen sie möglicherweise für Ihren eigenen Gebrauch anpassen!

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

Diese Vorlage weist einige Ähnlichkeiten mit denjenigen auf, die wir bereits gesehen haben — sie erweitert unsere Basisschablone und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardmäßiger Formularverarbeitungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie im Moment wissen müssen, ist, dass dies ein Formular anzeigen wird, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie bei Eingabe ungültiger Werte aufgefordert werden, bei aktualisierter Seite korrekte Werte einzugeben.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas wie dies sehen:

![Bibliotheksanmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten anmelden, werden Sie auf eine andere Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem besteht darin, dass Django standardmäßig annimmt, dass Sie nach der Anmeldung auf eine Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text am Ende hinzu. Nun sollten Sie bei der Anmeldung standardmäßig auf die Startseite der Seite weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 das Abmelden über `GET` nicht erlaubt, sondern nur über `POST`.
Wir fügen gleich ein Formular hinzu, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, auf die Benutzer nach der Abmeldung geführt werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den Text unten hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt nur eine Nachricht an, dass Sie abgemeldet wurden, und bietet einen Link, den Sie drücken können, um zurück zur Anmeldeseite zu gelangen. Der Bildschirm wird so angezeigt (nach der Abmeldung):

![Bibliotheksabmeldeseite v1](library_logout.png)

### Passwortrücksetzungsvorlagen

Das Standardsystem zur Passwortrücksetzung verwendet E-Mail, um dem Benutzer einen Rücksetzlink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihm die Eingabe eines neuen Passworts zu ermöglichen und festzustellen, wann der gesamte Vorgang abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwortrücksetzungsformular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers zu erhalten (zum Senden der Passwortrücksetz-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html**, und geben Sie ihr den folgenden Inhalt:

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

#### Passwortrücksetzung abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html**, und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwortrücksetz-E-Mail

Diese Vorlage liefert den Text der HTML-E-Mail mit dem Rücksetzlink, den wir an Benutzer senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html**, und geben Sie ihr den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwortrücksetzbestätigung

Diese Seite ist, wo Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwortrücksetz-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html**, und geben Sie ihr den folgenden Inhalt:

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

#### Passwortrücksetzung abgeschlossen

Dies ist die letzte Passwortrücksetz-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn die Passwortrücksetzung erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html**, und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Abmeldung) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zunächst versuchen, sich mit dem URL `http://127.0.0.1:8000/accounts/login/` bei Ihrem Superuser-Konto anzumelden.
Sie können die Passwortrücksetz-Funktionalität über den Link auf der Anmeldeseite testen. **Seien Sie sich bewusst, dass Django Rücksetz-E-Mails nur an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Abmeldung vom Konto noch nicht testen können, da Abmeldeanforderungen als `POST` gesendet werden müssen, anstatt als `GET`-Anforderung.

> [!NOTE]
> Das Passwortrücksetzsystem erfordert, dass Ihre Website E-Mail unterstützt, was über den Umfang dieses Artikels hinausgeht, sodass dieser Teil **noch nicht funktionieren wird**. Um das Testen zu ermöglichen, fügen Sie die folgende Zeile am Ende Ihrer settings.py Datei hinzu. Dies protokolliert alle gesendeten E-Mails in die Konsole (so dass Sie den Passwortrücksetz-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [Sending email](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen mit authentifizierten Benutzern

In diesem Abschnitt betrachten wir, was wir tun können, um selektiv Inhalte basierend auf der Anmeldung des Benutzers anzuzeigen oder zu verstecken.

### Testen in Vorlagen

Sie können Informationen über den aktuell angemeldeten Benutzer in Vorlagen mit der `\{{ user }}` Vorlagenvariable erhalten (dies wird standardmäßig dem Vorlagenkontext hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Skelett getan haben).

Normalerweise testen Sie zuerst gegen die `\{{ user.is_authenticated }}` Vorlagenvariable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, aktualisieren wir als Nächstes unsere Seitenleiste, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor dem `endblock` Vorlagen-Tag.

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

Wie Sie sehen, verwenden wir `if` / `else` / `endif` Vorlagen-Tags, um den Text bedingt anzuzeigen, basierend darauf, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, daher rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Anmelde-Link-URL mit dem `url` Vorlagen-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was dies tut, ist ein URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verlinkten URL. Nachdem der Benutzer sich erfolgreich angemeldet hat, wird die Ansicht diesen `next` Wert verwenden, um den Benutzer zurück auf die Seite zu leiten, auf der er zuerst den Anmelde-Link angeklickt hat.

Der Abmeldevorlagen-Code ist anders, weil man sich ab Django 5 abmelden muss, indem man einen `POST` an die `admin:logout` URL sendet, mit einem Formular mit einem Button.
Standardmäßig wird dies als Schaltfläche gerendert, aber Sie können die Schaltfläche so gestalten, dass sie wie ein Link aussieht.
In diesem Beispiel verwenden wir _Bootstrap_, daher lassen wir die Schaltfläche wie einen Link aussehen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Logout-Link korrekt neben allen anderen Seitenleisten-Links zu positionieren:

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
Sie sollten auf die Abmelde-/Anmeldeseiten geleitet werden, die Sie im [Vorlagenverzeichnis](#vorlagenverzeichnis) oben definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, den Zugriff auf Ihre Funktionen einzuschränken, der `login_required` Dekorator für Ihre Ansichts-Funktion zu verwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr Ansichtscode wie gewohnt ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird er zur Login-URL weitergeleitet, die in den Projekteinstellungen definiert ist (`settings.LOGIN_URL`), wobei der aktuelle absolute Pfad als `next` URL-Parameter weitergegeben wird. Wenn der Benutzer sich anmeldet, wird er auf diese Seite zurückkehren, jedoch diesmal authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

Ebenso ist der einfachste Weg, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Ansichten einzuschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen diesen Mixin zuerst in der Superklasse-Liste deklarieren, vor der Hauptansichtsklasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau das gleiche Weiterleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Standort angeben, um den Benutzer bei Nichtauthentifizierung weiterzuleiten (`login_url`) und einen URL-Parametername anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details schauen Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) an.

## Beispiel — Liste der Bücher des aktuellen Benutzers

Jetzt, da wir wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, lassen Sie uns eine Ansicht der Bücher erstellen, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Benutzern Bücher zu leihen! Bevor wir die Bücherliste erstellen können, erweitern wir daher das `BookInstance` Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django-Admin-Anwendung, um einer Anzahl von Büchern an unseren Testbenutzer zu verleihen.

### Modelle

Zuerst müssen wir es Benutzern ermöglichen, eine `BookInstance` auf Leihbasis zu haben (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine Zuordnung mit einem `ForeignKey` (eins-zu-viele) Feld. Wir brauchen auch einen leichten Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, damit die Einstellungen für den nachfolgenden Code verfügbar sind, der sie verwendet):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower` Feld zum `BookInstance` Modell hinzu, wobei Sie das Benutzermodell für den Schlüsselwert als Wert der Einstellung `AUTH_USER_MODEL` festlegen.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies dem Standard `User` Modell aus `django.contrib.auth.models` zugeordnet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise reduziert den Aufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standard-Modell, sodass Sie stattdessen das `User` Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir von unseren Vorlagen aus aufrufen können, um festzustellen, ob eine bestimmte Buchinstanz überfällig ist.
Während wir dies im Template selbst berechnen könnten, wird die Verwendung einer [property](https://docs.python.org/3/library/functions.html#property), wie unten gezeigt, viel effizienter sein.

Fügen Sie dies irgendwo oben in die Datei ein:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet Pythons `bool()` Funktion, die ein Objekt oder das resultierende Objekt eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in welchem Fall sie `False` zurückgibt.
> In Python ist ein Objekt _falsy_ (wird als `False` ausgewertet), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back` Feld würde Django dazu bringen, einen Fehler auszugeben, anstatt die Seite anzuzeigen: Leere Werte sind nicht vergleichbar. Dies ist nichts, was unsere Benutzer erleben sollten!

Nun, da wir unser Modell aktualisiert haben, müssen wir neue Migrationen im Projekt erstellen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse sowohl im `list_display` als auch im `fieldsets` hinzu, wie unten gezeigt.
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

Jetzt, da es möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, gehen Sie und leihen Sie eine Anzahl von `BookInstance` Datensätzen aus. Setzen Sie ihr `borrowed` Feld auf Ihren Testbenutzer, stellen Sie den `status` auf "On loan" und setzen Sie Fälligkeitstermine sowohl in der Zukunft als auch in der Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht detailliert erklären, da Sie bereits wissen, wie das Admin-Panel zu verwenden ist!

### Auf-Leihansicht

Nun fügen wir eine Ansicht hinzu, die die Liste aller Bücher erhält, die an den aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische klassenbasierte Listenansicht, die uns vertraut ist, aber diesmal importieren und leiten wir auch von `LoginRequiredMixin` ab, sodass nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir werden auch entscheiden, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir möglicherweise mehrere unterschiedliche Listen von BookInstance Datensätzen mit jeweils unterschiedlichen Ansichten und Vorlagen haben werden.

Fügen Sie folgendes zu **catalog/views.py** hinzu:

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

Um unsere Abfrage lediglich auf die `BookInstance` Objekte des aktuellen Benutzers zu beschränken, implementieren wir `get_queryset()` erneut, wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "ausgeliehen" ist und wir nach dem `due_back` Datum sortieren, damit die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht zeigt (Sie können einfach den Text unten ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Nun müssen wir nur noch eine Vorlage für diese Seite hinzufügen. Erstellen Sie zuerst die Vorlagen-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich zu denen, die wir bisher für die `Book` und `Author` Objekte erstellt haben.
Das einzige "Neue" hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben `(bookinst.is_overdue)`, prüfen und sie verwenden, um die Farbe überfälliger Gegenstände zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie nun in der Lage sein, die Liste für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzuzeigen. Probieren Sie es mit Ihrem Benutzer in angemeldetem und abgemeldetem Zustand aus (im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden).

### Fügen Sie die Liste zur Seitenleiste hinzu

Der allerletzte Schritt besteht darin, einen Link für diese neue Seite in die Seitenleiste einzufügen. Wir platzieren dies im selben Abschnitt, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "Meine Ausleihen" an der unten gezeigten Position zur Seitenleiste hinzu.

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

Wenn ein Benutzer angemeldet ist, sieht er den _Meine Ausleihen_ Link in der Seitenleiste und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben wollen!).

![Bibliothek - von Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die an einem Modellinstanz durch einen Benutzer, der die Berechtigung hat, durchgeführt werden können. Standardmäßig gibt Django allen Modellen automatisch _add_, _change_ und _delete_ Berechtigungen, die es Benutzern mit den Berechtigungen ermöglichen, die zugehörigen Aktionen über das Admin-Panel durchzuführen. Sie können Ihre eigenen Berechtigungen zu Modellen definieren und sie bestimmten Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verbunden sind.

Das Testen auf Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich wie das Testen auf den Authentifizierungsstatus (und tatsächlich testet das Überprüfen einer Berechtigung auch die Authentifizierung).

### Modelle

Das Definieren von Berechtigungen erfolgt im `class Meta` Abschnitt des Modells mit dem `permissions` Feld.
Sie können so viele Berechtigungen angeben, wie Sie benötigen, in einem Tupel, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Berechtigungsanzeigewert enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, die es einem Benutzer erlaubt, zu kennzeichnen, dass ein Buch zurückgegeben wurde, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann das Recht einer "Bibliothekar"-Gruppe im Admin-Panel zuweisen.

Öffnen Sie die **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Vorlagenvariable namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-"App" verwenden — z.B. `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Wir testen die Berechtigung typischerweise mit dem Vorlagen-Tag `{% if %}`, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required` Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Die Muster sind die gleichen wie für die Anmeldeauthentifizierung, obwohl Sie vernünftigerweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht-Dekorator:

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. Standardmäßig für einen angemeldeten Benutzer mit einem Berechtigungsverstoß:
>
> - `@permission_required` leitet zur Anmeldeseite um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 (HTTP-Status Forbidden) zurück.
>
> Normalerweise werden Sie das `PermissionRequiredMixin` Verhalten wünschen: Zurückgabe von 403, wenn ein Benutzer angemeldet ist, aber nicht die richtige Berechtigung hat. Um dies bei einer Funktionsansicht zu erreichen, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

## Fordern Sie sich selbst heraus

Früher in diesem Artikel zeigten wir Ihnen, wie Sie eine Seite für den aktuellen Benutzer erstellen, auf der die von ihm ausgeliehenen Bücher angezeigt werden.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Ausleihers enthält.

Sie sollten dem gleichen Muster wie für die andere Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Vorlagenvariable: `user.is_staff`), aber wir empfehlen, dass Sie stattdessen die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` wie im vorherigen Abschnitt beschrieben verwenden.

> [!WARNING]
> Denken Sie daran, Ihre Tests zu Berechtigungen nicht mit Ihrem Superuser durchzuführen (Berechtigungsprüfungen geben für Superuser immer wahr zurück, selbst wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekarbenutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite dem folgenden Screenshot ähnlich sehen.

![Alle ausgeliehenen Bücher, auf Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Hervorragende Arbeit — Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Ausleiher anzeigen können. Im Moment betrachten wir immer noch nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu erfassen, und dann einige unserer gespeicherten Daten ändern.

## Siehe auch

- [Benutzer-Authentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard-) Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Decorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
