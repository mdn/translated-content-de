---
title: "Django-Tutorial Teil 8: Benutzer-Authentifizierung und -Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden und wie Sie steuern können, was sie tun und sehen können, basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Benutzer-Authentifizierung und -Berechtigungen eingerichtet und verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django bietet ein Authentifizierungs- und Autorisierungs-System ("Berechtigung"), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungs-Framework aufbaut. Damit können Sie Benutzeranmeldeinformationen überprüfen und festlegen, welche Aktionen jeder Benutzer ausführen darf. Das Framework umfasst integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen an mehr als einen Benutzer gleichzeitig zu vergeben), Berechtigungen/Flags, die bestimmen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Anmelden von Benutzern sowie Ansichtstools zur Inhaltsbeschränkung.

> [!NOTE]
> Laut Django soll das Authentifizierungs-System sehr allgemein gehalten sein und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungs-Systemen bereitgestellt werden. Lösungen für einige häufige Probleme sind als Drittanbieter-Pakete verfügbar. Beispielsweise das {{Glossary("throttle", "Drosseln")}} von Anmeldeversuchen und die Authentifizierung gegenüber Dritten (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, eigene Anmelde- und Abmeldeseiten erstellen, Berechtigungen für Ihre Modelle hinzufügen und den Zugriff auf Seiten steuern können. Wir verwenden die Authentifizierungs-/Berechtigungen, um Listen von Büchern anzuzeigen, die sowohl von Benutzern als auch von Bibliothekaren ausgeliehen wurden.

Das Authentifizierungs-System ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, wenn Sie möchten, indem Sie einfach die bereitgestellte API zum Anmelden des Benutzers aufrufen. In diesem Artikel werden wir jedoch die "Standard"-Authentifizierungsansichten und -Formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen trotzdem einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen können.

## Aktivierung der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir den [Skelett-Webseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2) erstellt haben, sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns erledigt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer- und Modellberechtigungen wurden erstellt, als wir `python manage.py migrate` zum ersten Mal aufgerufen haben.

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

Sie haben bereits Ihren ersten Benutzer erstellt, als wir im Tutorial 4 die [Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) betrachtet haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, um einen normalen Webseitenbenutzer zu repräsentieren. Wir werden die Admin-Seite verwenden, um unsere _locallibrary_ Gruppen und Webseiten-Logins zu erstellen, da dies eine der schnellsten Möglichkeiten ist.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert wie unten gezeigt erstellen.
> Dies müssten Sie tun, wenn Sie beispielsweise eine Oberfläche entwickeln, die es "gewöhnlichen" Benutzern ermöglicht, ihre eigenen Logins zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Seite gewähren).
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
> Beachten Sie jedoch, dass es dringend empfohlen wird, ein _benutzerdefiniertes Benutzermodell_ einzurichten, wenn ein Projekt gestartet wird, da Sie es in Zukunft problemlos anpassen können, wenn Bedarf besteht.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, würde der Code zum Erstellen desselben Benutzers folgendermaßen aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer vom Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Verwenden eines benutzerdefinierten Benutzermodells beim Starten eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Unten werden wir zunächst eine Gruppe und dann einen Benutzer erstellen. Auch wenn wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es viel einfacher sein, diese später der Gruppe einmalig hinzuzufügen, anstatt jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Seite in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldeinformationen Ihres Superuser-Kontos auf der Seite an. Die oberste Ebene der Admin-Seite zeigt alle Ihre Modelle an, sortiert nach "Django Anwendung". Aus dem Abschnitt **Authentication and Authorization** können Sie auf die Links **Users** oder **Groups** klicken, um vorhandene Datensätze anzuzeigen.

![Admin-Seite - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Zuerst erstellen wir eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** (neben Group), um eine neue _Group_ zu erstellen; geben Sie den **Name** "Library Members" für die Gruppe ein.
   ![Admin-Seite - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, daher drücken Sie einfach **SAVE** (Sie gelangen zu einer Liste von Gruppen).

Nun erstellen wir einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Seite
2. Klicken Sie auf die **Add**-Schaltfläche neben _Users_, um das _Add user_ Dialogfeld zu öffnen.
   ![Admin-Seite - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen passenden **Username** und **Password**/**Password confirmation** für Ihren Testbenutzer ein
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Seite erstellt den neuen Benutzer und führt Sie sofort zu einem _Change user_ Bildschirm, auf dem Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des User-Modells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse und den Status sowie die Berechtigungen des Benutzers (nur das **Active**-Flag sollte gesetzt werden). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten im Zusammenhang mit dem Benutzer anzeigen (z. B. sein Einstiegstermin und das Datum seiner letzten Anmeldung).
   ![Admin-Seite - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im _Groups_ Abschnitt die Gruppe **Library Member** aus der Liste der _Available groups_ aus und drücken Sie dann den **right-arrow** zwischen den Boxen, um sie in die Box _Chosen groups_ zu verschieben.
   ![Admin-Seite - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, also wählen Sie einfach erneut **SAVE**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein Konto als "normales Bibliotheksmitglied", das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, um ihnen die Anmeldung zu ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Benutzer als Bibliotheksmitglied zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zu erstellen, um Anmeldungen, Abmeldung und Passwortverwaltung "out of the box" zu handhaben. Dazu gehören ein URL-Mapper, Ansichten und Formulare, aber es sind keine Vorlagen enthalten — wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LocalLibrary_ Website integrieren und die Vorlagen erstellen. Wir platzieren sie in den Hauptprojekt-URLs.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie es möchten, da es die Dinge erheblich erleichtert.
> Wenn Sie Ihr Benutzermodell ändern, müssen Sie fast sicher den Code für die Formularbehandlung anpassen, können jedoch dennoch die Standard-View-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir vernünftigerweise die Authentifizierungsseiten einschließlich der URLs und Vorlagen in unserer Katalog-Anwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten zu trennen und im gesamten Standort verfügbar zu machen, und das ist es, was wir hier gezeigt haben!

### Projekt-URLs

Fügen Sie das Folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL finden konnte, und listet alle URLs auf, die es versucht hat.
Daran können Sie die URLs sehen, die funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/` Pfads wie oben gezeigt, fügt die folgenden URLs hinzu, zusammen mit Namen (in eckigen Klammern angegeben), die zum Umkehren der URL-Zuordnungen verwendet werden können. Sie müssen nichts weiter implementieren — die obige URL-Zuordnung ordnet automatisch die unten genannten URLs zu.
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, jedoch mit einem Fehler, der Ihnen mitteilt, dass wir die erforderliche Vorlage (**registration/login.html**) auf dem Vorlagensuchpfad vermissen.
Sie sehen die folgenden Zeilen im gelben Bereich oben aufgelistet:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen mit dem Namen "registration" zu erstellen und dann die **login.html** Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit die Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagensuchpfad gefunden werden.

Für diese Site werden wir unsere HTML-Seiten im **templates/registration/** Verzeichnis platzieren. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im gleichen Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie jetzt diese Ordner.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django oberste Projektebene
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates** Verzeichnis für den Vorlagen-Lader sichtbar zu machen, müssen wir es dem Vorlagensuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das Modul `os` (fügen Sie die folgende Zeile oben in der Datei hinzu, wenn sie noch nicht vorhanden ist).

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
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr einfache/leicht modifizierte Version der Django-Demonstrations-Anmeldevorlagen. Möglicherweise müssen Sie sie für Ihren eigenen Gebrauch anpassen!

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

Diese Vorlage weist einige Ähnlichkeiten mit jenen auf, die wir zuvor gesehen haben — sie erweitert unsere Basisschablone und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardmäßiger Formularbehandlungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass dies ein Formular anzeigt, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können. Wenn Sie ungültige Werte eingeben, werden Sie aufgefordert, bei der Aktualisierung der Seite gültige Werte einzugeben.

Navigieren Sie zur Anmeldeseite zurück (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben. Sie sollten etwas sehen, das so aussieht:

![Bibliothek Anmeldeseite v1](library_login.png)

Wenn Sie mit gültigen Anmeldedaten einloggen, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung auf eine Profilseite weitergeleitet werden, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text am Ende hinzu. Jetzt sollten Sie beim Einloggen standardmäßig zur Startseite der Seite weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 das Abmelden nur per `POST` und nicht per `GET` zulässt.
Wir fügen gleich ein Formular hinzu, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, auf die Benutzer nach dem Abmelden geführt werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Nachricht an, die Sie darüber informiert, dass Sie abgemeldet wurden, und bietet einen Link, auf den Sie klicken können, um zur Anmeldeseite zurückzukehren. Der Bildschirm sieht nach der Abmeldung folgendermaßen aus:

![Bibliothek Abmeldeseite v1](library_logout.png)

### Vorlagen zum Zurücksetzen des Passworts

Das Standard-Passwort-Reset-System verwendet E-Mail, um dem Benutzer einen Reset-Link zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erfassen, die E-Mail zu senden, ein neues Passwort einzugeben und anzuzeigen, wenn der gesamte Vorgang abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwort-Zurücksetzen-Formular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers zu erhalten (um die Passwort-Zurücksetz-E-Mail zu senden). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html**, und geben Sie ihr den folgenden Inhalt:

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

#### Passwort-Zurücksetzen - Erledigt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html**, und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Zurücksetzen E-Mail

Diese Vorlage stellt den Text der HTML-E-Mail bereit, die den Zurücksetzlink enthält, den wir an Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html**, und geben Sie ihr den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Zurücksetzen Bestätigen

Diese Seite ist der Ort, an dem Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwort-Zurücksetz-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html**, und geben Sie ihr den folgenden Inhalt:

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

#### Passwort-Zurücksetzen - Abgeschlossen

Dies ist die letzte Passwort-Zurücksetz-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn das Zurücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html**, und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Abmeldung) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrer Superuser-Kontoanmeldung unter der URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwort-Zurücksetz-Funktionalität über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django nur Reset-E-Mails an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Kontoabmeldung noch nicht testen können, da Logout-Anfragen als `POST` und nicht als `GET` gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetz-System erfordert, dass Ihre Website E-Mail unterstützt, was über den Rahmen dieses Artikels hinausgeht, sodass dieser Teil **noch nicht funktioniert**. Um das Testen zu ermöglichen, fügen Sie die folgende Zeile am Ende Ihrer settings.py Datei hinzu. Dies protokolliert alle gesendeten E-Mails in der Konsole (sodass Sie den Passwort-Zurücksetz-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegen authentifizierte Benutzer

In diesem Abschnitt sehen wir, was wir tun können, um den Inhalt, den der Benutzer sieht, selektiv zu steuern, basierend darauf, ob er angemeldet ist oder nicht.

### Testen in Vorlagen

Sie können Informationen über den derzeit angemeldeten Benutzer in Vorlagen mit der `\{{ user }}` Vorlagenvariable abrufen (diese wird standardmäßig zur Vorlagenkontext hinzugefügt, wenn Sie das Projekt wie bei unserem Skelett eingerichtet haben).

Typischerweise testen Sie zunächst gegen die `\{{ user.is_authenticated }}` Vorlagenvariable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, aktualisieren wir als Nächstes unsere Seitenleiste, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie die Basisschablone (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor das `endblock` Vorlagentag.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif` Vorlagentags, um Text bedingt anzuzeigen, basierend darauf, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Login-Link-URL mit dem `url` Vorlagentag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was dies bewirkt, ist, einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verknüpften URL. Nachdem der Benutzer sich erfolgreich angemeldet hat, wird die Ansicht diesen `next`-Wert verwenden, um den Benutzer zurück zu der Seite zu leiten, auf der er zuerst auf den Login-Link geklickt hat.

Der Logout-Vorlagencode ist anders, da Sie von Django 5 zum Abmelden ein `POST` an die `admin:logout` URL schicken müssen, indem Sie ein Formular mit einem Button verwenden.
Standardmäßig würde dies als Button gerendert werden, aber Sie können den Button so gestalten, dass er als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, daher lassen wir den Button wie einen Link aussehen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmeldelink korrekt neben allen anderen Seitenleisten-Links zu positionieren:

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
Sie sollten zu den Logout/Login-Seiten weitergeleitet werden, die Sie im [Template directory](#vorlagenverzeichnis) oben definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, um den Zugriff auf Ihre Funktionen zu beschränken, der Anwendung des `login_required` Dekorators auf Ihre Ansichts-Funktion, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr View-Code wie gewohnt ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird dies zu der in den Projekteinstellungen (`settings.LOGIN_URL`) definierten Anmelde-URL weiterleiten, wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer sich erfolgreich anmeldet, wird er auf diese Seite zurückgeführt, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie auf `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

Ähnlich ist der einfachste Weg, um den Zugang zu angemeldeten Benutzern in Ihren klassenbasierten Ansichten zu beschränken, die Ableitung von `LoginRequiredMixin`. Sie müssen diesen Mixin zuerst in der Superklasse-Liste deklarieren, noch vor der Hauptview-Klasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, an den der Benutzer weitergeleitet wird, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameter-Namen anstelle von `next`, um den aktuellen absoluten Pfad (`redirect_field_name`) einzufügen.

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Details können Sie in den [Django-Dokumentationen hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) nachlesen.

## Beispiel — Auflistung der Bücher des aktuellen Benutzers

Nun, da wir wissen, wie man eine Seite auf einen bestimmten Benutzer beschränken kann, lassen Sie uns eine Ansicht der Bücher erstellen, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher auszuleihen! Bevor wir also die Buchliste erstellen können, erweitern wir zuerst das `BookInstance`-Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django Admin-Anwendung, um eine Anzahl von Büchern an unseren Testbenutzer zu verleihen.

### Modelle

Zuerst müssen wir es möglich machen, dass Benutzer eine `BookInstance` ausleihen können (wir haben bereits einen `status` und ein Fälligkeitsdatum `due_back`, aber wir haben noch keine Verbindung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine mit einem `ForeignKey` (eins-zu-viele) Feld. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, sodass die Einstellungen für den nachfolgenden Code verfügbar sind, der diese verwendet):

```python
from django.conf import settings
```

Fügen Sie als Nächstes das `borrower`-Feld dem `BookInstance`-Modell hinzu, wobei das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL` gesetzt ist.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies dem Standard `User`-Modell aus `django.contrib.auth.models` zugeordnet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Der Import des Modells auf diese Weise reduziert die Arbeit, die erforderlich ist, wenn Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User`-Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir aus unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buchexemplar überfällig ist.
Während wir dies im Template selbst berechnen könnten, wird die Verwendung einer [property](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt, viel effizienter sein.

Fügen Sie dies irgendwo am oberen Ende der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()` Funktion von Python, die ein Objekt oder das Ergebnis eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in welchem Fall es `False` zurückgibt.
> Ein Objekt ist in Python _falsy_ (wird als `False` ausgewertet), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None`, oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zunächst, ob `due_back` leer ist, bevor wir einen Vergleich machen. Ein leeres `due_back`-Feld würde Django dazu veranlassen, anstelle des Seitenlayouts einen Fehler auszugeben: leere Werte sind nicht vergleichbar. Dies ist nicht etwas, das wir unseren Benutzern zumuten möchten!

Da wir nun unsere Modelle aktualisiert haben, müssen wir neue Migrationen im Projekt durchführen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Administrator

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower`-Feld zur `BookInstanceAdmin` Klasse sowohl in `list_display` als auch in `fieldsets` hinzu, wie unten gezeigt.
Auf diese Weise wird das Feld im Admin-Bereich sichtbar, sodass wir einem `BookInstance` einen `User` zuweisen können, wann immer erforderlich.

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

Da es nun möglich ist, Bücher an einen bestimmten Benutzer zu leihen, gehen Sie und verleihen Sie eine Anzahl von `BookInstance`-Datensätzen. Stellen Sie ihr `borrowed`-Feld auf Ihren Testbenutzer ein, setzen Sie den `status` auf "On loan" und geben Sie Fälligkeitstermine sowohl in der Zukunft als auch in der Vergangenheit an.

> [!NOTE]
> Wir werden den Prozess nicht beschreiben, da Sie bereits wissen, wie Sie die Admin-Seite verwenden!

### Ansicht von ausgeliehen

Nun fügen wir eine Ansicht hinzu, die die Liste aller Bücher erhält, die dem aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische klassenbasierte Listenansicht, die uns nun vertraut ist, aber dieses Mal importieren wir zusätzlich und leiten von `LoginRequiredMixin` ab, damit nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir entscheiden uns auch dafür, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir möglicherweise einige verschiedene Listen von BookInstance-Einträgen mit unterschiedlichen Ansichten und Vorlagen haben.

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

Um unsere Anfrage nur auf die `BookInstance`-Objekte des aktuellen Benutzers zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem Fälligkeitsdatum (`due_back`) sortieren, damit die ältesten Artikel zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie am einfachsten einen `path()`-Eintrag hinzu, der auf die oben angezeigte Ansicht zeigt (Sie können den Text unten einfach ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Nun brauchen wir nur noch eine Vorlage für diese Seite zu erstellen. Erstellen Sie die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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
Das einzige "neue" hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben (`bookinst.is_overdue`) überprüfen und sie verwenden, um die Farbe bei überfälligen Artikeln zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie nun in der Lage sein, die Liste eines angemeldeten Benutzers in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzuzeigen. Probieren Sie dies mit einem angemeldeten Benutzer und einem ausgeloggten Benutzer (im zweiten Fall werden Sie zur Anmeldeseite weitergeleitet) aus.

### Fügen Sie die Liste zur Seitenleiste hinzu

Der allerletzte Schritt ist das Hinzufügen eines Links zu dieser neuen Seite in der Seitenleiste. Wir platzieren diesen im gleichen Abschnitt, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basisschablone (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "My Borrowed" in die Seitenleiste an der unten gezeigten Position hinzu.

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

Wenn ein Benutzer angemeldet ist, sieht er den _My Borrowed_ Link in der Seitenleiste, und die Liste der Bücher wird wie folgt angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben möchten!).

![Bibliothek - ausgeliehene Bücher des Benutzers](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verbunden und definieren die Operationen, die auf einer Modellinstanz von einem Benutzer mit der Berechtigung durchgeführt werden können. Standardmäßig gibt Django automatisch _add_, _change_ und _delete_ Berechtigungen zu allen Modellen, die es Benutzern mit den Berechtigungen ermöglichen, die zugehörigen Aktionen über die Admin-Seite auszuführen. Sie können Ihre eigenen Berechtigungen zu Modellen definieren und bestimmten Benutzern zuweisen. Sie können auch die mit verschiedenen Instanzen desselben Modells verbundenen Berechtigungen ändern.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann dem Testen des Authentifizierungsstatus sehr ähnlich (und tatsächlich, der Test einer Berechtigung testet auch die Authentifizierung).

### Modelle

Die Definition von Berechtigungen erfolgt im `class Meta` Abschnitt des Modells mit dem `permissions` Feld.
Sie können so viele Berechtigungen definieren, wie Sie benötigen, in einem Tupel, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Berechtigungsanzeigewert enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, um einem Benutzer zu erlauben zu markieren, dass ein Buch zurückgegeben wurde, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Dann könnten wir die Berechtigung in der Admin-Seite einer "Bibliothekar"-Gruppe zuweisen.

Öffnen Sie die **catalog/models.py** Datei und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Vorlagenvariablen namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden — beispielsweise wird `\{{ perms.catalog.can_mark_returned }}` `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Normalerweise testen wir die Berechtigung mit dem Vorlagen `{% if %}` Tag, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required` Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Das Muster ist dasselbe wie bei der Anmeldeauthentifizierung, obwohl Sie natürlich vernünftigerweise mehrere Berechtigungen hinzufügen könnten.

Funktionsanzeige-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein für die Berechtigung erforderlicher Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im Verhalten oben. **Standardmäßig** für einen angemeldeten Benutzer mit einer Berechtigungsverletzung:
>
> - `@permission_required` leitet zur Anmeldeseite um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 (HTTP-Status Verboten) zurück.
>
> Normalerweise möchten Sie das Verhalten von `PermissionRequiredMixin`: 403 zurückgeben, wenn ein Benutzer angemeldet ist, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, auf der die von ihm geliehenen Bücher aufgelistet werden.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Entleihers enthält.

Sie sollten in der Lage sein, demselben Muster wie bei der anderen Ansicht zu folgen. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Vorlagenvariable: `user.is_staff`), wir empfehlen jedoch, dass Sie stattdessen die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für das Testen von Berechtigungen zu verwenden (Berechtigungsprüfungen geben für Superuser immer true zurück, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliotheksbenutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite etwa so aussehen wie der untenstehende Screenshot.

![Alle ausgeliehenen Bücher, auf Bibliothekare beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben nun eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und deren Entleiher anzeigen können. Im Moment betrachten wir immer noch nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie mit Django-Formularen Benutzereingaben sammeln und dann einige unserer gespeicherten Daten ändern können.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwenden des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
