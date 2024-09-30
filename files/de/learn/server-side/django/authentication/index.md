---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
slug: Learn/Server-side/Django/Authentication
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie es Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden und wie Sie steuern können, was sie sehen und tun können, basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erweitern, indem wir Anmelde- und Abmeldeseiten hinzufügen sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen der ausgeliehenen Bücher.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, bis einschließlich <a href="/de/docs/Learn/Server-side/Django/Sessions">Django-Tutorial Teil 7: Sitzungs-Framework</a>.
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

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigung") an, das auf dem im [vorherigen Tutorial](/de/docs/Learn/Server-side/Django/Sessions) besprochenen Sitzungs-Framework basiert und es Ihnen ermöglicht, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jedem Benutzer gestattet sind. Das Framework umfasst integrierte Modelle für `Users` und `Groups` (eine generische Methode, um Berechtigungen für mehrere Benutzer gleichzeitig anzuwenden), Berechtigungen/Flags, die angeben, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten für die Benutzeranmeldung sowie Ansichts-Tools zur Inhaltsbeschränkung.

> [!NOTE]
> Laut Django zielt das Authentifizierungssystem darauf ab, sehr generisch zu sein, und bietet daher einige Funktionen nicht, die in anderen Web-Authentifizierungssystemen bereitgestellt werden. Lösungen für einige gängige Probleme sind als Drittanbieterpakete verfügbar. Beispielweise [Drosselung](/de/docs/Glossary/throttle) von Anmeldeversuchen und Authentifizierung gegen Drittparteien (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten kontrollieren. Wir verwenden die Authentifizierung/Berechtigungen, um Listen von ausgeliehenen Büchern sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, indem Sie einfach die bereitgestellte API aufrufen, um den Benutzer anzumelden. In diesem Artikel verwenden wir jedoch die "Standard"-Authentifizierungsansichten und -formulare von Django für unsere Anmelde- und Abmeldeseiten. Wir müssen trotzdem einige Vorlagen erstellen, was jedoch recht einfach ist.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus sowie Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen können.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir [das Grundgerüst der Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (im Tutorial 2), sodass Sie an diesem Punkt nichts mehr tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde bereits vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir `python manage.py migrate` zum ersten Mal ausgeführt haben.

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

Sie haben bereits Ihren ersten Benutzer erstellt, als wir uns die [Django-Admin-Seite](/de/docs/Learn/Server-side/Django/Admin_site) im Tutorial 4 angesehen haben (das war ein Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde).
Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, deshalb müssen wir einen Testbenutzer erstellen, der einen normalen Website-Nutzer repräsentiert. Wir werden die Admin-Seite verwenden, um unsere _locallibrary_-Gruppen und Website-Logins zu erstellen, da dies eine der schnellsten Möglichkeiten ist, dies zu tun.

> [!NOTE]
> Sie können Benutzer auch programmatisch erstellen, wie unten gezeigt.
> Sie müssten dies beispielsweise tun, wenn Sie eine Schnittstelle entwickeln, die es "normalen" Benutzern erlaubt, ihre eigenen Logins zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Seite geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@beispielmail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Bürger'
> user.save()
> ```
>
> Beachten Sie bitte, dass es sehr zu empfehlen ist, ein _benutzerdefiniertes Benutzermodell_ zu erstellen, wenn ein Projekt gestartet wird, da Sie es zukünftig leicht anpassen können, falls dies erforderlich ist.
> Wenn ein benutzerdefiniertes Benutzermodell verwendet wird, sieht der Code zum Erstellen des gleichen Benutzers so aus:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@beispielmail.com', 'meinpasswort')
>
> # Felder aktualisieren und dann erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Bürger'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es wesentlich einfacher sein, die Berechtigungen später einmal zur Gruppe hinzuzufügen, anstatt jedem Mitglied einzeln.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Seite in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich auf der Seite mit den Anmeldedaten für Ihr Superuser-Konto an. Die oberste Ebene der Admin-Seite zeigt alle Ihrer Modelle, sortiert nach "Django-Anwendung", an. In der Kategorie **Authentifizierung und Autorisierung** können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um deren bestehende Datensätze zu sehen.

![Admin-Seite - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Zuerst erstellen wir eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Hinzufügen** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie den **Namen** "Library Members" (Bibliotheksmitglieder) für die Gruppe ein.
   ![Admin-Seite - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, daher drücken Sie einfach **SPEICHERN** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Nun erstellen wir einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Seite
2. Klicken Sie auf die Schaltfläche **Hinzufügen** neben _Benutzer_, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin-Seite - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Benutzernamen** und **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Seite erstellt den neuen Benutzer und bringt Sie sofort zu einem Bildschirm _Benutzer ändern_, in dem Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzermodells hinzufügen können. Diese Felder umfassen den Vornamen, den Nachnamen, die E-Mail-Adresse und den Status des Benutzers und dessen Berechtigungen (lediglich das **Aktiv**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten zum Benutzer anzeigen (z.B. sein Beitrittsdatum und letztes Anmeldedatum).
   ![Admin-Seite - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Im Bereich _Gruppen_ wählen Sie die Gruppe **Library Member** (Bibliotheksmitglied) aus der Liste der _Verfügbaren Gruppen_ und drücken dann den **Rechtspfeil** zwischen den Kästchen, um sie in das Kästchen _Gewählte Gruppen_ zu verschieben.
   ![Admin-Seite - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, daher wählen Sie einfach nochmals **SPEICHERN**, um zur Liste der Benutzer zu gelangen.

Das war's! Jetzt haben Sie ein "normales Bibliotheksmitglied"-Konto, das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, die es ihnen ermöglichen, sich anzumelden).

> [!NOTE]
> Probieren Sie aus, einen weiteren Bibliotheksmitglieder-Benutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django bietet fast alles, was Sie benötigen, um Authentifizierungsseiten zum Bearbeiten von Anmeldungen, Abmeldungen und Passworteinstellungen "out of the box" zu erstellen. Dazu gehört ein URL-Mapper, Ansichten und Formulare, aber es sind keine Vorlagen enthalten – diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LocalLibrary_ Website integrieren und die Vorlagen erstellen. Wir werden sie in die Hauptprojekt-URLs einfügen.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie dies tun möchten, da dies vieles erleichtert.
> Fast sicher müssen Sie den Formularbehandlungscode ändern, wenn Sie Ihr Benutzermodell ändern, aber auch dann könnten Sie die Standardansichts-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, vernünftigerweise innerhalb unserer Kataloganwendung einfügen.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses geteilte Anmeldeverhalten auszugliedern und es auf der gesamten Website verfügbar zu haben, daher haben wir es hier so gezeigt!

### Projekt-URLs

Fügen Sie das Folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (achten Sie auf den Schrägstrich am Ende!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL gefunden hat, und listet alle URLs auf, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/`-Pfades wie oben gezeigt fügt die folgenden URLs hinzu, zusammen mit Namen (in eckigen Klammern angegeben), die zur Umkehrung der URL-Zuordnungen verwendet werden können. Sie müssen nichts anderes implementieren – die obige URL-Zuordnung ordnet automatisch die unten erwähnten URLs zu.
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

Versuchen Sie nun, zur Anmelde-URL zu navigieren (`http://127.0.0.1:8000/accounts/login/`). Dies wird erneut fehlschlagen, jedoch mit einem Fehler, der Ihnen mitteilt, dass uns die erforderliche Vorlage (**registration/login.html**) im Vorlagensuchpfad fehlt.
Sie sehen die folgenden Zeilen im gelben Abschnitt oben:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt ist, ein Verzeichnis für die Vorlagen namens "registration" zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit die Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugeordneten Vorlagen sich in einem Verzeichnis **/registration/** irgendwo im Vorlagensuchpfad befinden.

Für diese Website werden wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ablegen. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im selben Verzeichnis wie die **catalog**- und **locallibrary**-Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Oberste Django-Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates**-Verzeichnis für den Vorlagenlader sichtbar zu machen, müssen wir es im Vorlagensuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os`-Modul (fügen Sie die folgende Zeile in der Nähe des oberen Bereichs der Datei hinzu, falls sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `'DIRS'`-Zeile im Abschnitt `TEMPLATES` wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr grundlegende/leicht modifizierte Version der Django-Demonstrationsanmeldevorlagen. Möglicherweise müssen Sie diese für Ihren eigenen Gebrauch anpassen!

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

Diese Vorlage weist einige Gemeinsamkeiten mit denen auf, die wir bereits gesehen haben – sie erweitert unsere Basisvorlage und überschreibt den `content`-Block. Der Rest des Codes ist recht standardmäßiger Formularbehandlungscode, den wir in einem späteren Tutorial besprechen werden. Vorerst müssen Sie nur wissen, dass dies ein Formular anzeigt, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass, wenn Sie ungültige Werte eingeben, Sie aufgefordert werden, korrekte Werte einzugeben, wenn die Seite aktualisiert wird.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas Ähnliches sehen wie dies:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Zugangsdaten anmelden, werden Sie auf eine andere Seite weitergeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung auf eine Profilseite weitergeleitet werden möchten, was nicht unbedingt der Fall sein muss. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den untenstehenden Text am Ende hinzu. Jetzt sollten Sie nach der Anmeldung standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldevorlage

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, weil Django 5 keine Abmeldung mittels `GET`, sondern nur mit `POST` erlaubt.
Wir fügen in Kürze ein Formular hinzu, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach der Abmeldung weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den untenstehenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link, den Sie drücken können, um zurück zum Anmeldebildschirm zu gelangen. Der Bildschirm wird nach der Abmeldung wie folgt gerendert:

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Vorlagen Passwortzurücksetzung

Das Standardpasswortrücksetzungssystem verwendet E-Mail, um dem Benutzer einen Rücksetzlink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihnen die Eingabe eines neuen Passworts zu ermöglichen und zu vermerken, wann der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwortzurücksetzungsformular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers zu erhalten (um die Passwortzurücksetzungs-E-Mail zu senden). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html**, und geben Sie ihm den folgenden Inhalt:

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

#### Passwortzurücksetzungsbestätigung

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html**, und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwortzurücksetzungs-E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail, die den Rücksetzlink enthält, den wir an Benutzer senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html**, und geben Sie ihm den folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwortzurücksetzungsabschluss

Diese Seite ist, auf der Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwortzurücksetzungs-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html**, und geben Sie ihm den folgenden Inhalt:

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

Dies ist die letzte Passwortzurücksetzungsvorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn die Passwortzurücksetzung erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html**, und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie nun die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto über die URL `http://127.0.0.1:8000/accounts/login/` anzumelden.
Sie können die Passwortzurücksetzungsfunktionalität über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django nur Rücksetz-E-Mails an Adressen (Benutzer) sendet, die bereits in seiner Datenbank gespeichert sind!**

Bitte beachten Sie, dass Sie die Kontoabmeldung derzeit noch nicht testen können, da Abmeldeanforderungen als `POST` und nicht als `GET` gesendet werden müssen.

> [!NOTE]
> Das Passwortzurücksetzungssystem erfordert, dass Ihre Website E-Mails unterstützt, was über den Rahmen dieses Artikels hinausgeht, daher funktioniert dieser Teil derzeit **noch nicht**. Zum Testen, fügen Sie die folgende Zeile am Ende Ihrer settings.py-Datei hinzu. Dies protokolliert alle gesendeten E-Mails an die Konsole (damit Sie den Passwortzurücksetzungslink aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mails senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen mit authentifizierten Benutzern

Dieser Abschnitt befasst sich damit, was wir tun können, um selektiv den Inhalt zu steuern, den der Benutzer basierend darauf sieht, ob er angemeldet ist oder nicht.

### Testen in Vorlagen

Sie können Informationen über den derzeit angemeldeten Benutzer in Vorlagen mit der Template-Variable `\{{ user }}` abrufen (diese wird beim Einrichten des Projekts wie wir es in unserem Grundgerüst getan haben, standardmäßig zum Template-Kontext hinzugefügt).

Typischerweise testen Sie zunächst mit der Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer berechtigt ist, spezifischen Inhalt zu sehen. Um dies zu veranschaulichen, werden wir als nächstes unsere Seitenleiste aktualisieren, sodass sie einen "Anmelden"-Link anzeigt, wenn der Benutzer abgemeldet ist und einen "Abmelden"-Link, wenn er angemeldet ist.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar`-Block, unmittelbar vor dem `endblock`-Template-Tag.

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

Wie Sie sehen können, verwenden wir `if` / `else` / `endif` Template-Tags, um Text bedingt anzuzeigen, je nachdem, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Anmeldelink-URL mit dem `url` Template-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was das tut, ist, einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verlinkten URL. Nachdem sich der Benutzer erfolgreich angemeldet hat, wird der Parameter `next` verwendet, um den Benutzer zurück auf die Seite weiterzuleiten, auf der er zuerst auf den Anmeldelink geklickt hat.

Der Code für die Abmeldungsvorlage ist anders, denn ab Django 5 müssen Sie sich mit einem `POST` zum `admin:logout` URL abmelden, mit einem Formular mit einem Button.
Standardmäßig würde das als Button angezeigt werden, aber Sie können den Button stylen, sodass er wie ein Link aussieht.
Für dieses Beispiel verwenden wir _Bootstrap_, also lassen wir den Button wie einen Link aussehen, indem wir `class="btn btn-link"` anwenden.
Sie müssen auch die folgenden Styles zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmeldelink korrekt neben allen anderen Seitenleistenlinks zu positionieren:

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
Sie sollten auf die Abmelde-/Anmeldeseiten, die Sie im [Vorlagenverzeichnis](<#add_django_site_authentication_urls_(for_login,_logout,_password_management)>) oben definiert haben, weitergeleitet werden.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, gibt es keine einfachere Möglichkeit, den Zugriff auf Ihre Funktionen einzuschränken als den `login_required` Dekorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird Ihr Ansichts-Code wie gewohnt ausgeführt. Ist der Benutzer nicht angemeldet, wird auf die Anmelde-URL weitergeleitet, die in den Projekteinstellungen (`settings.LOGIN_URL`) definiert ist, wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer sich erfolgreich anmeldet, wird er zu dieser Seite zurückgeleitet, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie auf `request.user.is_authenticated` testen, aber der Dekorator ist viel bequemer!

Ähnlich stellt der einfachste Weg, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Ansichten einzuschränken, die Ableitung von `LoginRequiredMixin` dar. Sie müssen dieses Mixin in der Superklassenliste als erstes deklarieren, vor der Hauptansichtsklasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Standort angeben, um den Benutzer umzuleiten, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameter-Namen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details können Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) ansehen.

## Beispiel — Auflistung der Bücher des aktuellen Benutzers

Nun, da wir wissen, wie wir eine Seite für einen bestimmten Benutzer einschränken können, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Benutzern Bücher ausleihen zu lassen! Bevor wir also die Buchliste erstellen können, erweitern wir zunächst das `BookInstance` Modell, um das Konzept des Ausleihens zu unterstützen und verwenden die Django Admin-Anwendung, um unserem Testbenutzer eine Reihe von Büchern auszuleihen.

### Modelle

Zunächst müssen wir es Benutzern ermöglichen, ein `BookInstance` auf Leihbasis zu haben (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine solche mit einem `ForeignKey` (eine-zu-viele) Feld. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py**, und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile oben in der Datei hinzu, sodass die Einstellungen für den nachfolgenden Code, der sie verwendet, verfügbar sind):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower` Feld zum `BookInstance` Modell hinzu und wählen Sie das Benutzermodell für den Schlüssel als den Wert der Einstellungen `AUTH_USER_MODEL`.
Da wir die Einstellung nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird es auf das Standard-`User` Modell aus `django.contrib.auth.models` abgebildet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise verringert den Aufwand, falls Sie später feststellen sollten, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> In diesem Tutorial wird das Standardmodell verwendet, daher könnten Sie das `User` Modell auch direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, lassen Sie uns eine Eigenschaft hinzufügen, die wir aus unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buchbeispiel überfällig ist.
Während wir dies auch in der Vorlage selbst berechnen könnten, wäre es viel effizienter, eine [property](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt zu verwenden.

Fügen Sie dies irgendwo in der Nähe des oberen Bereichs der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet Pythons `bool()` Funktion, die ein Objekt oder das resultierende Objekt eines Ausdrucks auswertet und `True` zurückgibt, außer das Ergebnis ist "falsy", in diesem Fall gibt es `False` zurück.
> In Python ist ein Objekt _falsy_ (wird als `False` ausgewertet), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zunächst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back` Feld würde in Django einen Fehler verursachen, anstatt die Seite anzuzeigen: leere Werte sind nicht vergleichbar. Dies ist nicht etwas, was wir möchten, dass unsere Benutzer erleben!

Jetzt, da wir unsere Modelle aktualisiert haben, müssen wir frische Migrationen auf dem Projekt erstellen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower` Feld der `BookInstanceAdmin` Klasse sowohl in der `list_display` als auch in den `fieldsets` wie unten gezeigt hinzu.
Dadurch wird das Feld im Admin-Bereich sichtbar, sodass wir einem `BookInstance` Benutzer ein `User` zuweisen können, wenn dies erforderlich ist.

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

### Ein paar Bücher ausleihen

Jetzt, da es möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, gehen Sie und leihen Sie eine Anzahl von `BookInstance` Datensätzen aus. Setzen Sie deren `borrowed` Feld auf Ihren Testbenutzer, machen Sie den `status` "On loan" und setzen Sie Fälligkeitsdaten sowohl in die Zukunft als auch in die Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht im Einzelnen erklären, denn Sie wissen bereits, wie Sie die Admin-Seite verwenden!

### Auf ausgeliehene Bücher sehen

Jetzt fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer ausgeliehen wurden. Wir verwenden die gleiche generische klassenbasierte Listenansicht, mit der wir vertraut sind, aber diesmal importieren und leiten wir auch von `LoginRequiredMixin` ab, sodass nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Darüber hinaus wählen wir es, einen `template_name` zu deklarieren, anstatt den Standard zu verwenden, weil wir am Ende ein paar unterschiedliche Listen von `BookInstance`-Aufzeichnungen mit unterschiedlichen Ansichten und Vorlagen haben können.

Fügen Sie das Folgende in catalog/views.py hinzu:

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

Um unsere Abfrage nur auf die `BookInstance` Objekte des aktuellen Benutzers zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt erneut. Beachten Sie, dass "o" der gespeicherte Code für "On loan" ist und wir nach dem `due_back` Datum bestellen, sodass die ältesten Artikel zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht zeigt (Sie können den Text einfach am unteren Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Jetzt müssen wir nur noch für diese Seite eine Vorlage hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihm den folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich zu denen, die wir bereits zuvor für die `Book` und `Author` Objekte erstellt haben.
Das einzige "neue" hier ist, dass wir die Methode, die wir im Modell hinzugefügt haben `(bookinst.is_overdue`) überprüfen und verwenden, um die Farbe von überfälligen Artikeln zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie nun in der Lage sein, die Liste für einen angemeldeten Benutzer in Ihrem Browser bei `http://127.0.0.1:8000/catalog/mybooks/` anzuzeigen. Probieren Sie dies mit Ihrem Benutzer aus, angemeldet und abgemeldet (im zweiten Fall sollten Sie zur Anmeldeseite umgeleitet werden).

### Die Liste zur Seitenleiste hinzufügen

Der letzte Schritt besteht darin, einen Link zu dieser neuen Seite in die Seitenleiste hinzuzufügen. Wir setzen dies im selben Abschnitt wie die Anzeige anderer Informationen für den angemeldeten Benutzer.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Linie "My Borrowed" zur Seitenleiste an der gezeigten Position hinzu.

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

Wenn ein beliebiger Benutzer angemeldet ist, sieht er den _My Borrowed_ Link in der Seitenleiste und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben wollen!).

![Bibliothek - ausgeliehene Bücher durch Benutzer](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die auf eine Modellinstanz durch einen Benutzer durchgeführt werden können, der die Berechtigung hat. Standardmäßig gibt Django automatisch _Hinzufügen_, _Ändern_ und _Löschen_ Berechtigungen an alle Modelle, was es Benutzern mit den Berechtigungen erlaubt, die damit verbundenen Aktionen über die Admin-Seite auszuführen. Sie können Ihre eigenen Berechtigungen zu Modellen definieren und sie bestimmten Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann ziemlich ähnlich wie das Testen des Authentifizierungsstatus (und tatsächlich beinhaltet das Testen auf eine Berechtigung auch das Testen auf Authentifizierung).

### Modelle

Berechtigungen definieren ist im `class Meta` Abschnitt des Modells möglich, indem das `permissions` Feld verwendet wird.
Sie können so viele Berechtigungen angeben, wie Sie in einem Tupel benötigen, wobei jede Berechtigung selbst in einem geschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Anzeige-Wert der Berechtigung enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, um einem Benutzer zu erlauben, zu markieren, dass ein Buch als zurückgegeben gilt, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung einer "Librarian" Gruppe auf der Admin-Seite zuweisen.

Öffnen Sie die **catalog/models.py**, und fügen Sie die Erlaubnis wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Variable namens `\{{ perms }}` gespeichert. Sie können überprüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-Anwendung verwenden – z.B. `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Erlaubnis hat, und `False` andernfalls. Typischerweise testen wir die Erlaubnis mit dem Template `{% if %}` Tag wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in einer Funktionsansicht mit dem Dekorator `permission_required` oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Das Muster ist das gleiche wie für die Anmeldeauthentifizierung, wenngleich Sie vernünftigerweise möglicherweise mehrere Berechtigungen hinzufügen müssen.

Dekorator für Funktionsansichten:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Mixin für klassenbasierte Ansichten, das Erlaubnis erfordert.

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
> - `@permission_required` leitet zum Anmeldebildschirm weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 (HTTP-Status Verboten) zurück.
>
> Normalerweise möchten Sie das Verhalten des `PermissionRequiredMixin`: 403 zurückgeben, wenn ein Benutzer angemeldet ist, aber nicht über die richtige Erlaubnis verfügt. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True` wie gezeigt:
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

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die sie ausgeliehen haben.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist und _alle_ ausgeliehenen Bücher zeigt, die den Namen jedes Ausleihers einschließt.

Sie sollten dem gleichen Muster wie für die andere Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Template-Variable: `user.is_staff`), aber wir empfehlen, dass Sie stattdessen die `can_mark_returned` Erlaubnis und den `PermissionRequiredMixin` verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für die Berechtigungsüberprüfung zu verwenden (Berechtigungsprüfungen geben immer "wahr" für Superuser zurück, selbst wenn eine Berechtigung noch nicht definiert wurde!). Stattdessen erstellen Sie einen Bibliothekar-Benutzer und fügen die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie der untenstehende Screenshot aussehen.

![Alle ausgeliehenen Bücher, nur für Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit – Sie haben nun eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit der richtigen Erlaubnis) alle ausgeliehenen Bücher und ihre Ausleihenden sehen können. Im Moment sehen wir immer noch nur Inhalte an, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie anfangen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir betrachten, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu sammeln, und dann anfangen, einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzerautorisierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard-)Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekoration klassenbasierter Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
