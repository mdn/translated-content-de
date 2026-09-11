---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: f3f56081b4d400cdfa28d80a881b6be325774e5e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie steuern können, was sie abhängig davon, ob sie angemeldet sind, und anhand ihrer _Berechtigungen_ tun und sehen dürfen. Im Rahmen dieser Demonstration erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django-Tutorial Teil 7: Sitzungs-Framework</a>.
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

Django stellt ein Authentifizierungs- und Autorisierungssystem („Berechtigungs“-System) bereit, das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelten Sitzungs-Framework aufbaut. Es ermöglicht Ihnen, Benutzeranmeldedaten zu überprüfen und festzulegen, welche Aktionen jeder Benutzer ausführen darf. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen gleichzeitig auf mehr als einen Benutzer anzuwenden), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Views für die Benutzeranmeldung sowie View-Werkzeuge zum Einschränken von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein gehalten sein und stellt daher einige Funktionen anderer Web-Authentifizierungssysteme nicht bereit. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Zum Beispiel die {{Glossary("throttle", "Drosselung")}} von Anmeldeversuchen und die Authentifizierung gegenüber Drittanbietern (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) aktivieren, eigene Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierung/Berechtigungen, um Listen ausgeliehener Bücher sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Views und Templates bei Bedarf vollständig selbst erstellen und nur die bereitgestellte API verwenden, um den Benutzer anzumelden. In diesem Artikel verwenden wir jedoch Djangos „standardmäßige“ Authentifizierungs-Views und -Formulare für unsere Anmelde- und Abmeldeseiten. Wir müssen weiterhin einige Templates erstellen, aber das ist recht einfach.

Wir zeigen Ihnen außerdem, wie Sie Berechtigungen erstellen und den Anmeldestatus sowie Berechtigungen sowohl in Views als auch in Templates überprüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben (im Tutorial 2). Daher müssen Sie an dieser Stelle nichts weiter tun.

> [!NOTE]
> Die erforderliche Konfiguration wurde bereits vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir erstmals `python manage.py migrate` aufgerufen haben.

Die Konfiguration wird in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten dargestellt:

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir uns in Tutorial 4 mit der [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) beschäftigt haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und verfügt über alle Berechtigungen. Daher müssen wir einen Testbenutzer erstellen, der einen normalen Websitebenutzer repräsentiert. Wir verwenden die Admin-Website, um unsere _locallibrary_-Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten dafür ist.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt.
> Dies müssten Sie beispielsweise tun, wenn Sie eine Schnittstelle entwickeln, über die „normale“ Benutzer ihre eigenen Anmeldungen erstellen können (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Website geben).
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
> Beachten Sie jedoch, dass es dringend empfohlen wird, beim Start eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten, da Sie dieses künftig bei Bedarf einfach anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, würde der Code zum Erstellen desselben Benutzers wie folgt aussehen:
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
> Weitere Informationen finden Sie unter [Verwenden eines benutzerdefinierten Benutzermodells beim Start eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden erstellen wir zuerst eine Gruppe und anschließend einen Benutzer. Auch wenn wir für unsere Bibliotheksmitglieder noch keine Berechtigungen hinzufügen müssen, wird es später wesentlich einfacher sein, sie einmalig der Gruppe statt jedem Mitglied einzeln hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie in Ihrem lokalen Webbrowser zur Admin-Website (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten Ihres Superuser-Kontos auf der Website an. Die oberste Ebene der Admin-Website zeigt alle Ihre Modelle an, sortiert nach „Django-Anwendung“. Im Abschnitt **Authentication and Authorization** können Sie auf die Links **Users** oder **Groups** klicken, um deren vorhandene Datensätze anzuzeigen.

![Admin-Website – Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zunächst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** (neben Group), um eine neue _Group_ zu erstellen; geben Sie als **Name** der Gruppe „Library Members“ ein.
   ![Admin-Website – Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe. Klicken Sie daher einfach auf **SAVE** (Sie gelangen zu einer Liste der Gruppen).

Erstellen wir nun einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Website.
2. Klicken Sie neben _Users_ auf die Schaltfläche **Add**, um das Dialogfeld _Add user_ zu öffnen.
   ![Admin-Website – Benutzer hinzufügen, Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Username** sowie **Password**/**Password confirmation** für Ihren Testbenutzer ein.
4. Klicken Sie auf **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Website erstellt den neuen Benutzer und führt Sie sofort zu einem Bildschirm _Change user_, in dem Sie den **username** ändern und Informationen für die optionalen Felder des User-Modells hinzufügen können. Diese Felder umfassen Vorname, Nachname, E-Mail-Adresse sowie Status und Berechtigungen des Benutzers (nur das Flag **Active** sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben sowie wichtige benutzerbezogene Daten sehen (z. B. das Beitrittsdatum und das Datum der letzten Anmeldung).
   ![Admin-Website – Benutzer hinzufügen, Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste _Available groups_ aus und klicken Sie dann auf den **Pfeil nach rechts** zwischen den Feldern, um sie in das Feld _Chosen groups_ zu verschieben.
   ![Admin-Website – Benutzer zu Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Hier müssen wir nichts weiter tun. Wählen Sie daher erneut **SAVE**, um zur Benutzerliste zu gelangen.

Das war's! Sie haben nun ein Konto für ein „normales Bibliotheksmitglied“, das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, über die sich Benutzer anmelden können).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Benutzer als Bibliotheksmitglied zu erstellen. Erstellen Sie außerdem eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Ihre Authentifizierungs-Views einrichten

Django stellt fast alles bereit, was Sie benötigen, um Authentifizierungsseiten für Anmeldung, Abmeldung und Passwortverwaltung „sofort einsatzbereit“ zu erstellen. Dies umfasst einen URL-Mapper, Views und Formulare, aber keine Templates — diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die Website _LocalLibrary_ integrieren und die Templates erstellen.

> [!NOTE]
> Django enthält keine integrierte Authentifizierungs-View für die erstmalige Benutzerregistrierung („signup“).
> Sie können bei Bedarf selbst eine erstellen. Für dieses Tutorial gehen wir jedoch davon aus, dass nur Bibliothekare Benutzer registrieren dürfen und dies über die Django-Admin-Oberfläche tun würden.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber wahrscheinlich werden Sie dies tun wollen, weil es vieles erheblich erleichtert.
> Sie werden den Code zur Formularverarbeitung fast sicher ändern müssen, falls Sie Ihr Benutzermodell ändern. Dennoch könnten Sie weiterhin die standardmäßigen View-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten, einschließlich der URLs und Templates, sinnvollerweise in unserer catalog-Anwendung ablegen.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten auszulagern und für die gesamte Website verfügbar zu machen. Deshalb zeigen wir es hier so!

### Projekt-URLs

Fügen Sie Folgendes am Ende der Datei urls.py des Projekts (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass keine Zuordnung für diese URL gefunden wurde, und listet alle URLs auf, die es versucht hat.
Daran können Sie die URLs erkennen, die funktionieren werden, sobald wir Templates erstellt haben.

> [!NOTE]
> Das Hinzufügen des Pfads `accounts/` wie oben gezeigt fügt die folgenden URLs zusammen mit Namen hinzu (in eckigen Klammern angegeben), die zum Umkehren der URL-Zuordnungen verwendet werden können. Sie müssen nichts weiter implementieren — die obige URL-Zuordnung bildet die unten genannten URLs automatisch ab.
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies schlägt erneut fehl, diesmal jedoch mit einem Fehler, der Ihnen mitteilt, dass das erforderliche Template (**registration/login.html**) im Template-Suchpfad fehlt.
Sie sehen die folgenden Zeilen im gelben Abschnitt oben aufgeführt:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Templates mit dem Namen „registration“ zu erstellen und anschließend die Datei **login.html** hinzuzufügen.

### Template-Verzeichnis

Die gerade hinzugefügten URLs (und implizit die Views) erwarten, dass ihre zugehörigen Templates in einem Verzeichnis **/registration/** irgendwo im Template-Suchpfad gefunden werden.

Für diese Website legen wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ab. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im selben Verzeichnis wie die Ordner **catalog** und **locallibrary**. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie folgt aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django top level project folder
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Damit das Verzeichnis **templates** für den Template-Loader sichtbar wird, müssen wir es zum Template-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das Modul `os` (fügen Sie die folgende Zeile nahe dem Anfang der Datei hinzu, falls sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die Zeile `'DIRS'` im Abschnitt `TEMPLATES` wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungs-Templates sind eine sehr einfache bzw. leicht modifizierte Version der Django-Demonstrations-Anmelde-Templates. Möglicherweise müssen Sie sie für Ihre eigene Verwendung anpassen!

Erstellen Sie eine neue HTML-Datei mit dem Namen /**django-locallibrary-tutorial/templates/registration/login.html** und fügen Sie ihr den folgenden Inhalt hinzu:

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

Dieses Template weist einige Ähnlichkeiten mit denen auf, die wir zuvor gesehen haben — es erweitert unser Basistemplate und überschreibt den Block `content`. Der Rest des Codes ist weitgehend standardmäßiger Code zur Formularverarbeitung, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie vorerst wissen müssen, ist, dass dadurch ein Formular angezeigt wird, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können. Wenn Sie ungültige Werte eingeben, werden Sie beim Neuladen der Seite aufgefordert, korrekte Werte einzugeben.

Navigieren Sie nach dem Speichern Ihres Templates zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`). Sie sollten ungefähr Folgendes sehen:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten anmelden, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig ist dies `http://127.0.0.1:8000/accounts/profile/`). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung zu einer Profilseite gelangen möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den folgenden Text am Ende hinzu. Wenn Sie sich jetzt anmelden, sollten Sie standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 die Abmeldung über `GET` nicht erlaubt, sondern nur über `POST`.
Wir fügen gleich ein Formular hinzu, mit dem Sie sich abmelden können. Zuerst erstellen wir jedoch die Seite, zu der Benutzer nach der Abmeldung gelangen.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach. Es zeigt lediglich eine Nachricht an, die Sie darüber informiert, dass Sie abgemeldet wurden, und enthält einen Link, den Sie anklicken können, um zum Anmeldebildschirm zurückzukehren. Der Bildschirm wird nach der Abmeldung so dargestellt:

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Templates zum Zurücksetzen des Passworts

Das standardmäßige System zum Zurücksetzen von Passwörtern verwendet E-Mails, um dem Benutzer einen Link zum Zurücksetzen zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers abzufragen, die E-Mail zu versenden, ihm die Eingabe eines neuen Passworts zu ermöglichen und festzustellen, wann der gesamte Vorgang abgeschlossen ist.

Die folgenden Templates können als Ausgangspunkt verwendet werden.

#### Formular zum Zurücksetzen des Passworts

Dies ist das Formular zum Abrufen der E-Mail-Adresse des Benutzers, um die E-Mail zum Zurücksetzen des Passworts zu senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

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

#### Zurücksetzen des Passworts abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### E-Mail zum Zurücksetzen des Passworts

Dieses Template stellt den Text der HTML-E-Mail bereit, die den Link zum Zurücksetzen enthält und an Benutzer gesendet wird. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Zurücksetzen des Passworts bestätigen

Auf dieser Seite geben Sie nach dem Anklicken des Links in der E-Mail zum Zurücksetzen des Passworts Ihr neues Passwort ein. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm den folgenden Inhalt:

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

#### Zurücksetzen des Passworts vollständig

Dies ist das letzte Template zum Zurücksetzen des Passworts. Es wird angezeigt, um Sie darüber zu informieren, dass das Zurücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Die neuen Authentifizierungsseiten testen

Nachdem Sie nun die URL-Konfiguration hinzugefügt und all diese Templates erstellt haben, sollten die Authentifizierungsseiten — mit Ausnahme der Abmeldung — einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zunächst versuchen, sich über die URL `http://127.0.0.1:8000/accounts/login/` bei Ihrem Superuser-Konto anzumelden.
Die Funktion zum Zurücksetzen des Passworts können Sie über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django E-Mails zum Zurücksetzen nur an Adressen bzw. Benutzer sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Kontoabmeldung noch nicht testen können, da Abmeldeanforderungen als `POST`- statt als `GET`-Anforderung gesendet werden müssen.

> [!NOTE]
> Das System zum Zurücksetzen des Passworts erfordert, dass Ihre Website E-Mails unterstützt, was über den Umfang dieses Artikels hinausgeht. Daher wird dieser Teil **noch nicht funktionieren**. Um Tests zu ermöglichen, fügen Sie die folgende Zeile am Ende Ihrer Datei settings.py ein. Dadurch werden alle gesendeten E-Mails in der Konsole protokolliert, sodass Sie den Link zum Zurücksetzen des Passworts aus der Konsole kopieren können.
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mails senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Gegenüber authentifizierten Benutzern testen

In diesem Abschnitt betrachten wir, wie wir die Inhalte, die der Benutzer sieht, abhängig davon steuern können, ob er angemeldet ist oder nicht.

### In Templates testen

Sie können in Templates mit der Template-Variablen `\{{ user }}` Informationen über den aktuell angemeldeten Benutzer abrufen (diese wird standardmäßig zum Template-Kontext hinzugefügt, wenn Sie das Projekt wie bei unserem Skelett einrichten).

Üblicherweise prüfen Sie zunächst die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer bestimmte Inhalte sehen darf. Um dies zu demonstrieren, aktualisieren wir als Nächstes unsere Seitenleiste, damit ein Link „Login“ angezeigt wird, wenn der Benutzer abgemeldet ist, und ein Link „Logout“, wenn er angemeldet ist.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den Block `sidebar`, unmittelbar vor dem Template-Tag `endblock`.

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

Wie Sie sehen können, verwenden wir die Template-Tags `if` / `else` / `endif`, um Text abhängig davon anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, und rufen daher `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die URL des Anmeldelinks mit dem Template-Tag `url` und dem Namen der URL-Konfiguration `login`. Beachten Sie auch, dass wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Dadurch wird am Ende der verlinkten URL ein URL-Parameter `next` hinzugefügt, der die Adresse (URL) der _aktuellen_ Seite enthält. Nachdem sich der Benutzer erfolgreich angemeldet hat, verwendet die View diesen Wert `next`, um den Benutzer auf die Seite zurückzuleiten, auf der er erstmals auf den Anmeldelink geklickt hat.

Der Code des Abmelde-Templates unterscheidet sich, da Sie sich ab Django 5 mit `POST` an der URL `admin:logout` über ein Formular mit einer Schaltfläche abmelden müssen.
Standardmäßig würde dies als Schaltfläche dargestellt, Sie können die Schaltfläche jedoch so gestalten, dass sie als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_. Daher lassen wir die Schaltfläche durch Anwenden von `class="btn btn-link"` wie einen Link aussehen.
Sie müssen außerdem die folgenden Styles an **/django-locallibrary-tutorial/catalog/static/css/styles.css** anhängen, um den Abmeldelink korrekt neben allen anderen Links der Seitenleiste zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Links Login/Logout in der Seitenleiste klicken.
Sie sollten zu den Abmelde-/Anmeldeseiten gelangen, die Sie oben unter [Template-Verzeichnis](#template-verzeichnis) definiert haben.

### In Views testen

Wenn Sie funktionsbasierte Views verwenden, können Sie den Zugriff auf Ihre Funktionen am einfachsten einschränken, indem Sie den Decorator `login_required` auf Ihre View-Funktion anwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr View-Code normal ausgeführt. Wenn der Benutzer nicht angemeldet ist, erfolgt eine Weiterleitung zur in den Projekteinstellungen definierten Anmelde-URL (`settings.LOGIN_URL`), wobei der aktuelle absolute Pfad als URL-Parameter `next` übergeben wird. Wenn der Benutzer sich erfolgreich anmeldet, kehrt er zu dieser Seite zurück, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe auch manuell tun, indem Sie `request.user.is_authenticated` prüfen, aber der Decorator ist wesentlich praktischer!

Entsprechend können Sie den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Views am einfachsten einschränken, indem Sie von `LoginRequiredMixin` ableiten. Sie müssen dieses Mixin in der Liste der Oberklassen zuerst, vor der Haupt-View-Klasse, deklarieren.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat exakt dasselbe Weiterleitungsverhalten wie der Decorator `login_required`. Sie können außerdem einen alternativen Ort angeben, zu dem der Benutzer weitergeleitet wird, falls er nicht authentifiziert ist (`login_url`), sowie anstelle von `next` einen Namen für den URL-Parameter, in den der aktuelle absolute Pfad eingefügt wird (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Details finden Sie in der [Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Bücher des aktuellen Benutzers auflisten

Da wir nun wissen, wie wir eine Seite auf einen bestimmten Benutzer beschränken, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Bücher auszuleihen! Bevor wir also die Bücherliste erstellen können, erweitern wir zunächst das Modell `BookInstance`, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django-Admin-Anwendung, um unserem Testbenutzer mehrere Bücher auszuleihen.

### Modelle

Zuerst müssen wir ermöglichen, dass Benutzer eine `BookInstance` ausgeliehen haben können. Wir haben bereits ein `status`- und ein `due_back`-Datum, aber noch keine Verknüpfung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine solche über ein Feld `ForeignKey` (eins-zu-viele). Außerdem benötigen wir einen einfachen Mechanismus, um zu prüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile am Anfang der Datei hinzu, damit die Einstellungen für nachfolgenden Code verfügbar sind, der sie verwendet):

```python
from django.conf import settings
```

Fügen Sie als Nächstes das Feld `borrower` zum Modell `BookInstance` hinzu und legen Sie das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL` fest.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, verweist dies auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise verringert den Aufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, daher könnten Sie stattdessen das Modell `User` direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir aus unseren Templates aufrufen können, um festzustellen, ob eine bestimmte Buchinstanz überfällig ist.
Wir könnten dies zwar im Template selbst berechnen, die Verwendung einer [Eigenschaft](https://docs.python.org/3/library/functions.html#property), wie unten gezeigt, ist jedoch deutlich effizienter.

Fügen Sie Folgendes irgendwo nahe dem Anfang der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur Klasse `BookInstance` hinzu:

> [!NOTE]
> Der folgende Code verwendet die Python-Funktion `bool()`, die ein Objekt oder das resultierende Objekt eines Ausdrucks auswertet und `True` zurückgibt, sofern das Ergebnis nicht „falsy“ ist; in diesem Fall wird `False` zurückgegeben.
> In Python ist ein Objekt _falsy_ (wird als `False` ausgewertet), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir prüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres Feld `due_back` würde dazu führen, dass Django einen Fehler auslöst, anstatt die Seite anzuzeigen: Leere Werte sind nicht vergleichbar. Dies sollten unsere Benutzer nicht erleben!

Da wir unsere Modelle nun aktualisiert haben, müssen wir im Projekt neue Migrationen erstellen und diese anschließend anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das Feld `borrower` zur Klasse `BookInstanceAdmin` sowohl in `list_display` als auch in `fieldsets` hinzu, wie unten gezeigt.
Dadurch wird das Feld im Admin-Bereich sichtbar und wir können bei Bedarf einen `User` einer `BookInstance` zuweisen.

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

Da es jetzt möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, leihen Sie mehrere `BookInstance`-Datensätze aus. Setzen Sie ihr Feld `borrowed` auf Ihren Testbenutzer, setzen Sie den `status` auf „On loan“ und legen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit fest.

> [!NOTE]
> Wir erläutern den Prozess nicht genauer, da Sie bereits wissen, wie die Admin-Website verwendet wird!

### View für Ausleihen

Nun fügen wir eine View hinzu, um die Liste aller Bücher abzurufen, die an den aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische klassenbasierte Listen-View, mit der wir vertraut sind, importieren diesmal jedoch auch `LoginRequiredMixin` und leiten davon ab, sodass nur ein angemeldeter Benutzer diese View aufrufen kann. Außerdem entscheiden wir uns dafür, einen `template_name` zu deklarieren, statt den Standardwert zu verwenden, da wir möglicherweise mehrere verschiedene Listen von BookInstance-Datensätzen mit unterschiedlichen Views und Templates erhalten.

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

Um unsere Abfrage auf die `BookInstance`-Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass „o“ der gespeicherte Code für „on loan“ ist und wir nach dem Datum `due_back` sortieren, damit die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige View verweist. Sie können den folgenden Text einfach an das Ende der Datei kopieren.

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für ausgeliehene Bücher

Jetzt müssen wir für diese Seite nur noch ein Template hinzufügen. Erstellen Sie zunächst die Template-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Dieses Template ist denjenigen sehr ähnlich, die wir zuvor für die Objekte `Book` und `Author` erstellt haben.
Das einzige „Neue“ besteht darin, dass wir die Methode prüfen, die wir dem Modell hinzugefügt haben (`bookinst.is_overdue`), und sie verwenden, um die Farbe überfälliger Elemente zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste für einen angemeldeten Benutzer jetzt unter `http://127.0.0.1:8000/catalog/mybooks/` in Ihrem Browser anzeigen können. Probieren Sie dies sowohl angemeldet als auch abgemeldet aus. Im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden.

### Die Liste zur Seitenleiste hinzufügen

Der allerletzte Schritt besteht darin, einen Link für diese neue Seite zur Seitenleiste hinzuzufügen. Wir platzieren ihn im selben Abschnitt, in dem wir weitere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile „My Borrowed“ an der unten gezeigten Position zur Seitenleiste hinzu.

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

Wenn ein Benutzer angemeldet ist, sieht er den Link _My Borrowed_ in der Seitenleiste sowie die unten dargestellte Bücherliste. Das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir hoffentlich in einem späteren Tutorial beheben werden!

![Bibliothek – vom Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind Modellen zugeordnet und definieren die Operationen, die ein Benutzer mit dieser Berechtigung für eine Modellinstanz ausführen kann. Standardmäßig erteilt Django automatisch allen Modellen die Berechtigungen _add_, _change_ und _delete_, die Benutzern mit diesen Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Website auszuführen. Sie können Ihren Modellen eigene Berechtigungen definieren und diese bestimmten Benutzern erteilen. Sie können auch die Berechtigungen ändern, die verschiedenen Instanzen desselben Modells zugeordnet sind.

Das Prüfen von Berechtigungen in Views und Templates ist dann dem Prüfen des Authentifizierungsstatus sehr ähnlich. Tatsächlich prüft eine Berechtigungsabfrage auch die Authentifizierung.

### Modelle

Berechtigungen werden im Abschnitt `class Meta` des Modells mithilfe des Felds `permissions` definiert.
Sie können in einem Tupel so viele Berechtigungen angeben, wie Sie benötigen. Jede Berechtigung wird dabei selbst in einem verschachtelten Tupel definiert, das den Namen der Berechtigung und ihren Anzeigewert enthält.
Beispielsweise könnten wir eine Berechtigung definieren, die einem Benutzer erlaubt, ein Buch als zurückgegeben zu markieren:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Anschließend könnten wir die Berechtigung auf der Admin-Website einer Gruppe „Librarian“ zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen — rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf —, um die Datenbank entsprechend zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers werden in einer Template-Variablen namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung besitzt, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-„App“ verwenden — z. B. ist `\{{ perms.catalog.can_mark_returned }}` `True`, wenn der Benutzer diese Berechtigung besitzt, und andernfalls `False`. Üblicherweise prüfen wir die Berechtigung mit dem Template-Tag `{% if %}`, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

Berechtigungen können in einer Funktions-View mit dem Decorator `permission_required` oder in einer klassenbasierten View mit `PermissionRequiredMixin` geprüft werden. Die Muster entsprechen denen für die Anmeldeauthentifizierung, obwohl Sie selbstverständlich mehrere Berechtigungen hinzufügen müssen könnten.

Decorator für Funktions-Views:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Mixin für erforderliche Berechtigungen in klassenbasierten Views:

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
> Es gibt einen kleinen Standardunterschied im obigen Verhalten. **Standardmäßig** gilt bei einem angemeldeten Benutzer mit einer Berechtigungsverletzung:
>
> - `@permission_required` leitet zum Anmeldebildschirm weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Forbidden).
>
> Normalerweise möchten Sie das Verhalten von `PermissionRequiredMixin`: Geben Sie 403 zurück, wenn ein Benutzer angemeldet ist, jedoch nicht die richtige Berechtigung hat. Verwenden Sie dazu bei einer Funktions-View `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Wir aktualisieren _LocalLibrary_ hier nicht; vielleicht im nächsten Tutorial!

## Fordern Sie sich selbst heraus

Weiter oben in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die von ihm ausgeliehenen Bücher auflistet.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Ausleihers enthält.

Sie sollten demselben Muster wie bei der anderen View folgen können. Der Hauptunterschied besteht darin, dass Sie die View auf Bibliothekare beschränken müssen. Sie könnten dies danach tun, ob der Benutzer ein Mitarbeiter ist (Funktions-Decorator: `staff_member_required`, Template-Variable: `user.is_staff`). Wir empfehlen jedoch, stattdessen die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, für Tests auf Basis von Berechtigungen nicht Ihren Superuser zu verwenden (Berechtigungsprüfungen geben für Superuser immer true zurück, selbst wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Benutzer für einen Bibliothekar und fügen Sie die erforderliche Berechtigung hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekare beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben nun eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können und auf der Bibliothekare mit der richtigen Berechtigung alle ausgeliehenen Bücher und deren Ausleiher anzeigen können. Momentan betrachten wir nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel betrachten wir, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu erfassen, und beginnen dann damit, einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwenden des standardmäßigen Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Views > Klassenbasierte Views dekorieren](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
