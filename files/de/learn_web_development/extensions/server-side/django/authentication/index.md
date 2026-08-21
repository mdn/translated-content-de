---
title: "Django Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie kontrollieren können, was sie sehen und tun dürfen, basierend darauf, ob sie angemeldet sind und ihre _Berechtigungen_. Als Teil dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen von ausgeliehenen Büchern hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Teil 7: Sitzungs-Framework</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Benutzerauthentifizierung und Berechtigungen eingerichtet und verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django bietet ein Authentifizierungs- und Autorisierungssystem („Berechtigung“), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungsframework aufgebaut ist. Damit können Sie Benutzeranmeldedaten überprüfen und definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine generische Möglichkeit, Berechtigungen für mehr als einen Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags, die angeben, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Anmelden von Benutzern sowie Ansichts-Tools zum Einschränken von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein gehalten sein und bietet daher nicht einige Funktionen, die in anderen Web-Authentifizierungssystemen vorhanden sind. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Zum Beispiel {{Glossary("throttle", "Begrenzung")}} von Anmeldeversuchen und Authentifizierung gegen Drittanbieter (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierungs-/Berechtigungssysteme, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Templates von Grund auf erstellen, wenn Sie möchten, lediglich unter Verwendung der bereitgestellten API, um den Benutzer anzumelden. In diesem Artikel werden wir jedoch vorgefertigte Django-Authentifizierungsansichten und -Formulare für unsere Anmelde- und Abmeldeseiten nutzen. Wir müssen trotzdem einige Templates erstellen, aber das ist ganz einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen sowie den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Templates prüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir [die Skeleton-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2), sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde alles erledigt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufgerufen haben.

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

Sie haben bereits Ihren ersten Benutzer erstellt, als wir uns die [Django-Admin-Site](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) im Tutorial 4 angesehen haben (dies war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und verfügt über alle Berechtigungen, sodass wir einen Testbenutzer erstellen müssen, der einen normalen Seitenbenutzer darstellt. Wir werden die Admin-Site verwenden, um unsere _locallibrary_-Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten ist, dies zu tun.

> [!NOTE]
> Sie können Benutzer auch programmatisch erstellen, wie unten gezeigt.
> Das müssten Sie tun, wenn Sie beispielsweise eine Benutzeroberfläche entwickeln, die "gewöhnlichen" Benutzern das Erstellen ihrer eigenen Anmeldedaten ermöglicht (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Site gewähren).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und zur Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@verruecktmail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Bürger'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es sehr empfohlen wird, ein _benutzerdefiniertes Benutzermodell_ einzurichten, wenn Sie ein Projekt starten, da Sie es in der Zukunft bei Bedarf einfach anpassen können.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, würde der Code zum Erstellen desselben Benutzers so aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und zur Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@verruecktmail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Bürger'
> user.save()
> ```
>
> Für weitere Informationen siehe [Verwendung eines benutzerdefinierten Benutzermodells beim Start eines Projekts](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Unten erstellen wir zuerst eine Gruppe und dann einen Benutzer. Obwohl wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es bei Bedarf später viel einfacher sein, diese einmal der Gruppe hinzuzufügen als jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Site in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten Ihres Superuser-Kontos auf der Seite an. Die oberste Ebene der Admin-Site zeigt alle Ihre Modelle an, sortiert nach "Django-Anwendung". Aus dem Abschnitt **Authentication and Authorization** können Sie auf die Links **Users** oder **Groups** klicken, um deren vorhandene Datensätze zu sehen.

![Admin-Site - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zunächst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** (neben Group), um eine neue _Group_ zu erstellen; geben Sie den **Name** "Library Members" für die Gruppe ein.
   ![Admin-Site - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir brauchen keine Berechtigungen für die Gruppe, also drücken Sie einfach **SAVE** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Erstellen wir nun einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Site
2. Klicken Sie auf die Schaltfläche **Add** neben _Users_, um das Dialogfeld _Add user_ zu öffnen.
   ![Admin-Site - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen passenden **Username** und **Password**/**Password confirmation** für Ihren Testbenutzer ein
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Site erstellt den neuen Benutzer und führt Sie sofort zu einem _Change user_ Bildschirm, wo Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzer Modells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse sowie den Status und die Berechtigungen des Benutzers (nur das **Active**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten im Zusammenhang mit dem Benutzer anzeigen (z.B. sein Anmeldedatum und das Datum der letzten Anmeldung).
   ![Admin-Site - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Im Abschnitt _Groups_ wählen Sie die **Library Member** Gruppe aus der Liste der verfügbaren Gruppen und drücken dann den **Rechts-Pfeil** zwischen den Boxen, um sie in die Box _Chosen groups_ zu verschieben.
   ![Admin-Site - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, also wählen Sie einfach erneut **SAVE** aus, um zur Benutzerliste zu gelangen.

Das ist es! Jetzt haben Sie ein "normales Bibliotheksmitglieder"-Konto, das Sie zum Testen verwenden können (sobald wir die Seiten implementiert haben, die es ihnen ermöglichen, sich anzumelden).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglieder-Benutzer zu erstellen. Erstellen Sie außerdem eine Gruppe für Bibliothekare und fügen Sie auch dort einen Benutzer hinzu!

## Einrichtung Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zu erstellen, die Anmeldungen, Abmeldungen und Passwortverwaltung „out of the box“ abwickeln. Dies beinhaltet einen URL-Mapper sowie Ansichten und Formulare, jedoch keine Templates — wir müssen unsere eigenen erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LocalLibrary_ Website integrieren und die Templates erstellen.

> [!NOTE]
> Django enthält keine eingebaute Authentifizierungsansicht für die anfängliche Benutzerregistrierung („Anmeldung“).
> Sie können eine selbst erstellen, falls erforderlich, aber für dieses Tutorial gehen wir davon aus, dass nur Bibliothekare Benutzer registrieren dürfen und dies über die Django-Admin-Oberfläche tun würden.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie dies möchten, da es die Dinge erheblich erleichtert.
> Sie müssen höchstwahrscheinlich den Formularbearbeitungscode ändern, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie immer noch die Standardansichtsfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten sowie die URLs und Templates berechtigterweise innerhalb unserer Kataloganwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Login-Verhalten herauszunehmen und es auf der ganzen Website verfügbar zu haben, daher haben wir es hier so gezeigt!

### Projekt-URLs

Fügen Sie Folgendes am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zu der URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL finden konnte, und listet alle URLs auf, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir Templates erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/` Pfades wie oben gezeigt fügt die folgenden URLs hinzu, zusammen mit den Namen (in eckigen Klammern angegeben), die verwendet werden können, um die URL-Zuordnungen umzukehren. Sie müssen sonst nichts implementieren, das obige URL-Mapping mappt automatisch die unten genannten URLs.
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, jedoch mit einem Fehler, der Ihnen sagt, dass das erforderliche Template (**registration/login.html**) im Templates-Suchpfad fehlt.
Sie werden die folgenden Zeilen im gelben Abschnitt oben angezeigt sehen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Templates namens "registration" zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Templates-Verzeichnis

Die URLs (und implizit, Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugehörigen Templates in einem Verzeichnis **/registration/** irgendwo im Templates-Suchpfad gefunden werden können.

Für diese Website werden wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ablegen. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im selben Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Verzeichnisstruktur sollte jetzt wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django Top Level Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates**-Verzeichnis dem Template-Loader sichtbar zu machen, müssen wir es in den Templates-Suchpfad aufnehmen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os`-Modul (fügen Sie die folgende Zeile in der Nähe des oberen Dateibereichs hinzu, falls es noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES`-Sektion `'DIRS'`-Zeile wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungs-Templates sind eine sehr grundlegende/leicht modifizierte Version der Django-Demonstrations-Login-Templates. Möglicherweise müssen Sie sie für Ihren eigenen Gebrauch anpassen!

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

Dieses Template teilt einige Ähnlichkeiten mit den bereits gesehenen — es erweitert unser Basistemplate und überschreibt den `content` Block. Der Rest des Codes ist ziemlich standardmäßiger Formularbearbeitungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie im Moment wissen müssen, ist, dass dies ein Formular anzeigt, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass, wenn Sie ungültige Werte eingeben, Sie aufgefordert werden, beim Aktualisieren der Seite korrekte Werte einzugeben.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), sobald Sie Ihr Template gespeichert haben, und Sie sollten etwas wie dieses sehen:

![Library Login-Seite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen anmelden, werden Sie zu einer anderen Seite weitergeleitet (standardmäßig `http://127.0.0.1:8000/accounts/profile/`). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung zu einer Profilseite geleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den untenstehenden Text am Ende hinzu. Jetzt sollten Sie nach der Anmeldung standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 eine Abmeldung nur mit `POST` anstatt mit `GET` zulässt.
Wir werden gleich ein Formular hinzufügen, mit dem Sie sich abmelden können, erstellen jedoch zuerst die Seite, zu der Benutzer nach der Abmeldung geleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den untenstehenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach. Es zeigt nur eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link, mit dem Sie wieder zum Anmeldebildschirm zurückkehren können. Der Bildschirm sieht nach dem Abmelden folgendermaßen aus:

![Library Abmeldeseite v1](library_logout.png)

### Passwortzurücksetzungs-Templates

Das Standardpasswort-Zurücksetzungssystem verwendet E-Mail, um dem Benutzer einen Zurücksetzungslink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers abzurufen, die E-Mail zu senden, ein neues Passwort einzugeben und zu bestätigen, um den gesamten Prozess abzuschließen.

Die folgenden Templates können als Ausgangspunkt verwendet werden.

#### Passwort-Zurücksetzungsformular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers zu erhalten (für den Versand der Passwort-Zurücksetzungs-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie den folgenden Inhalt ein:

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

#### Passwort-Zurücksetzung erledigt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse eingesammelt wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie den folgenden Inhalt ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Zurücksetzungs-E-Mail

Dieses Template liefert den Text der HTML-E-Mail mit dem Zurücksetzungslink, den wir an Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie den folgenden Inhalt ein:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Zurücksetzung Bestätigung

Diese Seite ist, wo Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwort-Zurücksetzungs-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie den folgenden Inhalt ein:

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

#### Passwort-Zurücksetzung vollständig

Dies ist die letzte Passwort-Zurücksetzungs-Template, die angezeigt wird, um Ihnen mitzuteilen, wenn die Passwort-Zurücksetzung erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie den folgenden Inhalt ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nun, da Sie die URL-Konfiguration hinzugefügt und alle diese Templates erstellt haben, sollten die Authentifizierungsseiten (außer Abmelden) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto über die URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie werden in der Lage sein, die Passwort-Zurücksetzungsfunktion von dem Link auf der Anmeldeseite zu testen. **Seien Sie sich bewusst, dass Django nur E-Mails an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie das Konto-Abmelden noch nicht testen können, da Abmeldeanfragen als `POST` und nicht als `GET` Anfrage gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetzungssystem erfordert, dass Ihre Website E-Mail unterstützt, was den Rahmen dieses Artikels sprengt, sodass dieser Teil **noch nicht funktioniert**. Zum Testen fügen Sie die folgende Zeile am Ende Ihrer settings.py-Datei hinzu. Dies protokolliert alle versendeten E-Mails in der Konsole (damit Sie den Passwort-Zurücksetzungs-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen mit authentifizierten Benutzern

Dieser Abschnitt befasst sich mit dem, was wir tun können, um den Inhalt selektiv zu steuern, den der Benutzer basierend darauf sieht, ob er angemeldet ist oder nicht.

### Testen in Templates

Sie können Informationen über den derzeit angemeldeten Benutzer in Templates mit der Template-Variable `\{{ user }}` abrufen (dies wird automatisch zum Template-Kontext hinzugefügt, wenn Sie das Projekt wie in unserem Skelett eingerichtet haben).

Typischerweise testen Sie zuerst gegen die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Um dies zu demonstrieren, werden wir als nächstes unsere Seitenleiste aktualisieren, um einen "Login"-Link anzuzeigen, wenn der Benutzer ausgeloggt ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar`-Block, direkt vor das `endblock`-Template-Tag.

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

Wie Sie sehen, verwenden wir `if` / `else` / `endif` Template-Tags, um Text bedingt anzuzeigen, basierend darauf, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Anmelde-Link-URL mit dem `url` Template-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angefügt haben. Was dies macht, ist, einen URL-Parameter `next` hinzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verlinkten URL. Nachdem der Benutzer sich erfolgreich angemeldet hat, verwendet die Ansicht diesen `next` Wert, um den Benutzer zurück zu der Seite zu leiten, auf der er zuerst auf den Login-Link geklickt hat.

Der Abmelde-Template-Code ist anders, denn von Django 5 bis zu logout müssen Sie `POST` zur `admin:logout` URL, mit einem Formular mit einem Button.
Standardmäßig würde dies als Button gerendert werden, aber Sie können den Button so stylen, dass er als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, sodass wir den Button wie einen Link aussehen lassen, indem wir `class="btn btn-link"` anwenden.
Sie müssen außerdem die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmelde-Link korrekt neben allen anderen Seitenleisten-Links zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie die Login/Logout-Links in der Seitenleiste anklicken.
Sie sollten zu den Login/Logout-Seiten gelangen, die Sie oben im [Template-Verzeichnis](#templates-verzeichnis) definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, den Zugriff auf Ihre Funktionen einzuschränken, den `login_required` Dekorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr Ansichtscode wie gewohnt ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird zum Login-URL weitergeleitet, die in den Projekteinstellungen definiert ist (`settings.LOGIN_URL`), und der aktuelle absolute Pfad als `next` URL-Parameter übergeben. Wenn der Benutzer es schafft, sich anzumelden, wird er zu dieser Seite zurückgeleitet, diesmal authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell mit `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

In ähnlicher Weise ist der einfachste Weg, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Ansichten einzuschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen dieses Mixin zuerst in der Superclass-Liste deklarieren, bevor die Hauptansichtsklasse erfolgt.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, um den Benutzer umzuleiten, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameter Namen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für zusätzliche Details sehen Sie die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Auflistung der Bücher des aktuellen Benutzers

Jetzt, da wir wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher zu leihen! Bevor wir also die Buchliste erstellen können, müssen wir zuerst das `BookInstance`-Modell erweitern, um das Konzept des Ausleihens zu unterstützen, und die Django-Admin-Anwendung nutzen, um eine Reihe von Büchern an unseren Testbenutzer auszuleihen.

### Modelle

Zuerst müssen wir es Nutzern ermöglichen, ein `BookInstance`-Exemplar auszuleihen (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine solche mit einem `ForeignKey` (Ein-zu-viele) Feld erstellen. Wir benötigen außerdem einen einfachen Mechanismus, um zu prüfen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` von `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, sodass die Einstellungen für den nachfolgenden Code verfügbar sind, der sie verwendet):

```python
from django.conf import settings
```

Fügen Sie als Nächstes das `borrower`-Feld dem `BookInstance`-Modell hinzu und setzen Sie das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL`.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, bezieht sich diese auf das Standard `User`-Modell von `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Modell auf diese Weise zu importieren, reduziert die Arbeit, die erforderlich ist, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> In diesem Tutorial verwenden wir das Standardmodell, daher könnten Sie stattdessen das `User`-Modell direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Da wir bereits hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir von unseren Templates aus aufrufen können, um zu prüfen, ob ein bestimmtes Buchexemplar überfällig ist.
Obwohl wir dies auch im Template selbst berechnen könnten, ist die Verwendung einer [Eigenschaft](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt viel effizienter.

Fügen Sie dies irgendwo oben in der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition der `BookInstance`-Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()`-Funktion von Python, die ein Objekt oder das resultierende Objekt eines Ausdrucks bewertet und `True` zurückgibt, es sei denn, das Ergebnis ist „falsch“, in diesem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsch_ (wird als `False` bewertet), wenn es: leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back`-Feld würde dazu führen, dass Django einen Fehler ausgibt, anstatt die Seite anzuzeigen: leere Werte sind nicht vergleichbar. Das wollen wir unseren Benutzern natürlich nicht zumuten!

Da wir unsere Modelle aktualisiert haben, müssen wir frische Migrationsdateien für das Projekt erstellen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower`-Feld zur `BookInstanceAdmin`-Klasse sowohl in `list_display` als auch in den `fieldsets` wie unten gezeigt hinzu.
Dies wird das Feld im Admin-Bereich sichtbar machen, sodass wir einen `Benutzer` einer `BookInstance`-Kopie zuweisen können, wenn nötig.

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

Da es jetzt möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, gehen Sie und leihen Sie eine Anzahl von `BookInstance`-Datensätzen aus. Stellen Sie deren `borrowed`-Feld auf Ihren Testbenutzer ein, setzen Sie den `status` auf "On loan" und setzen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht explizit beschreiben, da Sie die Admin-Site bereits zu verwenden wissen!

### Ansicht für verliehene Bücher

Nun fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die an den aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische klassenbasierte Listenansicht, die wir bereits kennen, aber diesmal importieren und leiten wir von `LoginRequiredMixin` ab, sodass nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir entscheiden uns auch, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, da wir möglicherweise einige unterschiedliche Listen von BookInstance-Datensätzen mit unterschiedlichen Ansichten und Templates haben.

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

Um unsere Abfrage nur auf die `BookInstance`-Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem `due_back`-Datum sortieren, sodass die ältesten Artikel zuerst angezeigt werden.

### URL-Konfiguration für verliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie eine `path()` hinzu, die auf die obige Ansicht verweist (Sie können den Text unten einfach ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für verliehene Bücher

Jetzt müssen wir lediglich ein Template hinzufügen. Erstellen Sie zuerst die Template-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

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

Dieses Template ist sehr ähnlich denen, die wir zuvor für die `Book`- und `Author`-Objekte erstellt haben.
Das einzige „neue“ hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben, `(bookinst.is_overdue`) überprüfen und verwenden, um die Farbe überfälliger Artikel zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie jetzt in der Lage sein, die Liste für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzusehen. Probieren Sie dies mit Ihrem Benutzer angemeldet und abgemeldet aus (im zweiten Fall sollten Sie zur Anmeldeseite umgeleitet werden).

### Fügen Sie die Liste zur Seitenleiste hinzu

Der allerletzte Schritt besteht darin, der Seitenleiste einen Link für diese neue Seite hinzuzufügen. Wir werden dies im selben Abschnitt tun, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie das Basistemplate (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "My Borrowed" an der in der folgenden Position gezeigten Stelle zur Seitenleiste hinzu.

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

Wenn ein Benutzer angemeldet ist, sieht er den _My Borrowed_ Link in der Seitenleiste, und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben möchten!).

![Bibliothek - Ausgeliehene Bücher nach Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verbunden und definieren die Aktionen, die ein Benutzer mit der Berechtigung auf einem Modell-Exemplar ausführen darf. Standardmäßig gibt Django automatisch _add_, _change_ und _delete_ Berechtigungen zu allen Modellen, die den Benutzer mit den Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Site auszuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und sie bestimmten Benutzern gewähren. Sie können auch die Berechtigungen für verschiedene Instanzen desselben Modells ändern.

Das Testen nach Berechtigungen in Ansichten und Templates ist dann sehr ähnlich dem Testen nach dem Authentifizierungsstatus (und in der Tat testet das Testen für eine Berechtigung auch die Authentifizierung).

### Modelle

Berechtigungen werden im `class Meta`-Abschnitt des Modells definiert, indem das `permissions`-Feld verwendet wird.
Sie können so viele Berechtigungen wie nötig in einem Tupel angeben, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Berechtigungsanzeigewert enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, die es einem Benutzer erlaubt, zu markieren, dass ein Buch zurückgegeben wurde, wie folgt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung einer "Librarian"-Gruppe auf der Admin-Site zuweisen.

Öffnen Sie **catalog/models.py**, und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers werden in einer Template-Variable namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-"App" verwenden — z.B. wird `\{{ perms.catalog.can_mark_returned }}` `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Wir testen typischerweise die Berechtigung mit dem `{% if %}`-Tag, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required` Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Die Muster sind die gleichen wie für die Anmeldeauthentifizierung, obwohl Sie möglicherweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Mixin für Berechtigungen für klassenbasierte Ansichten.

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
> - `@permission_required` leitet zur Anmeldeseite weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Verboten).
>
> Normalerweise möchten Sie das `PermissionRequiredMixin` Verhalten: 403 zurückgeben, wenn ein Benutzer angemeldet ist, aber nicht die erforderliche Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True` wie gezeigt:
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

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die er ausgeliehen hat.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Entleihers einbezieht.

Sie sollten dem gleichen Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur für Bibliothekare einschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen Ihnen stattdessen, die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, nicht Ihren Superuser für Berechtigungsprüfungen zu verwenden (Berechtigungsprüfungen geben immer True zurück für Superuser, selbst wenn eine Berechtigung noch nicht definiert ist!). Stattdessen erstellen Sie einen Bibliothekar-Benutzer und fügen ihm die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite etwa wie der untenstehende Screenshot aussehen.

![Alle ausgeliehenen Bücher, beschränkt auf Bibliothekar](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben nun eine Website erstellt, auf der Bibliotheksmitglieder sich anmelden und ihre eigenen Inhalte anzeigen können und auf der Bibliothekare (mit der richtigen Berechtigung) alle ausgeliehenen Bücher und ihre Entleiher anzeigen können. Im Moment betrachten wir immer noch nur Inhalte, aber dieselben Prinzipien und Techniken werden angewendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu erfassen und dann einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard-) Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren klassenbasierter Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
