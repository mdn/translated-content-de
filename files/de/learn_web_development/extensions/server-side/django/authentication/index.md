---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie steuern können, was sie tun und sehen können, je nachdem, ob sie angemeldet sind und über welche _Berechtigungen_ sie verfügen. Im Rahmen dieser Demonstration erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), indem wir An- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.

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

Django stellt ein Authentifizierungs- und Autorisierungssystem („Berechtigung“) bereit, das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) besprochenen Sitzungs-Framework aufbaut. Es ermöglicht Ihnen, Benutzeranmeldedaten zu überprüfen und festzulegen, welche Aktionen jeder Benutzer ausführen darf. Das Framework enthält integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen gleichzeitig auf mehr als einen Benutzer anzuwenden), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Views für die Benutzeranmeldung sowie View-Werkzeuge zum Einschränken von Inhalten.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein gehalten sein und bietet daher einige Funktionen anderer Web-Authentifizierungssysteme nicht. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Dazu gehören beispielsweise die {{Glossary("throttle", "Drosselung")}} von Anmeldeversuchen und die Authentifizierung gegenüber Dritten, etwa OAuth.

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung in der Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) aktivieren, eigene An- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierung/Berechtigungen, um sowohl Benutzern als auch Bibliothekaren Listen ausgeliehener Bücher anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel. Wenn Sie möchten, können Sie Ihre URLs, Formulare, Views und Templates vollständig selbst erstellen und dabei lediglich die bereitgestellte API verwenden, um Benutzer anzumelden. In diesem Artikel verwenden wir jedoch Djangos Standard-Authentifizierungs-Views und -Formulare für unsere An- und Abmeldeseiten. Wir müssen weiterhin einige Templates erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen außerdem, wie Sie Berechtigungen erstellen und den Anmeldestatus sowie Berechtigungen sowohl in Views als auch in Templates überprüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir die [Website-Grundstruktur](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben (in Tutorial 2). Sie müssen an diesem Punkt also nichts Weiteres tun.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns vollständig vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration ist in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten dargestellt:

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir uns in Tutorial 4 die [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben. Dabei handelte es sich um einen Superuser, der mit dem Befehl `python manage.py createsuperuser` erstellt wurde.
Unser Superuser ist bereits authentifiziert und verfügt über alle Berechtigungen. Daher müssen wir einen Testbenutzer erstellen, der einen normalen Website-Benutzer repräsentiert. Wir verwenden die Admin-Website, um unsere _locallibrary_-Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Möglichkeiten dafür ist.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt.
> Dies wäre beispielsweise erforderlich, wenn Sie eine Schnittstelle entwickeln, über die „normale“ Benutzer eigene Anmeldungen erstellen können. Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Website gewähren.
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
> Beachten Sie jedoch, dass es dringend empfohlen wird, beim Start eines Projekts ein _benutzerdefiniertes Benutzermodell_ einzurichten. Dann können Sie es künftig bei Bedarf problemlos anpassen.
> Bei Verwendung eines benutzerdefinierten Benutzermodells würde der Code zum Erstellen desselben Benutzers wie folgt aussehen:
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
> Weitere Informationen finden Sie unter [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden erstellen wir zunächst eine Gruppe und anschließend einen Benutzer. Obwohl wir für unsere Bibliotheksmitglieder noch keine Berechtigungen hinzufügen müssen, wird es später viel einfacher sein, diese einmal zur Gruppe statt einzeln zu jedem Mitglied hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie in Ihrem lokalen Webbrowser zur Admin-Website (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten Ihres Superuser-Kontos auf der Website an. Die oberste Ebene der Admin-Website zeigt alle Ihre Modelle an, sortiert nach „Django-Anwendung“. Im Abschnitt **Authentication and Authorization** können Sie auf die Links **Users** oder **Groups** klicken, um deren vorhandene Datensätze anzuzeigen.

![Admin-Website – Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zunächst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** neben Group, um eine neue _Group_ zu erstellen. Geben Sie für die Gruppe den **Name** „Library Members“ ein.
   ![Admin-Website – Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe. Klicken Sie daher einfach auf **SAVE**. Sie gelangen zur Liste der Gruppen.

Erstellen wir nun einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Website.
2. Klicken Sie neben _Users_ auf die Schaltfläche **Add**, um das Dialogfeld _Add user_ zu öffnen.
   ![Admin-Website – Benutzer hinzufügen, Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Username** und ein **Password**/**Password confirmation** für Ihren Testbenutzer ein.
4. Klicken Sie auf **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Website erstellt den neuen Benutzer und führt Sie sofort zum Bildschirm _Change user_, wo Sie den **username** ändern und Informationen für die optionalen Felder des User-Modells hinzufügen können. Zu diesen Feldern gehören Vorname, Nachname, E-Mail-Adresse sowie Status und Berechtigungen des Benutzers. Es sollte nur das Flag **Active** gesetzt sein. Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers festlegen sowie wichtige Daten zum Benutzer anzeigen, etwa sein Beitrittsdatum und das Datum seiner letzten Anmeldung.
   ![Admin-Website – Benutzer hinzufügen, Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste _Available groups_ aus und klicken Sie dann auf den **Pfeil nach rechts** zwischen den Feldern, um sie in das Feld _Chosen groups_ zu verschieben.
   ![Admin-Website – Benutzer zu Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts Weiteres tun. Wählen Sie daher erneut **SAVE**, um zur Benutzerliste zu gelangen.

Das war's! Sie haben nun ein Konto für ein „normales Bibliotheksmitglied“, das Sie zum Testen verwenden können, sobald wir die Seiten implementiert haben, über die sich Benutzer anmelden können.

> [!NOTE]
> Sie sollten versuchen, einen weiteren Benutzer für ein Bibliotheksmitglied zu erstellen. Erstellen Sie außerdem eine Gruppe für Bibliothekare und fügen Sie auch dieser einen Benutzer hinzu!

## Authentifizierungs-Views einrichten

Django stellt fast alles bereit, was Sie benötigen, um Authentifizierungsseiten für Anmeldung, Abmeldung und Passwortverwaltung direkt zu erstellen. Dazu gehören URL-Mapper, Views und Formulare, jedoch keine Templates — diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die Website _LocalLibrary_ integrieren und die Templates erstellen.

> [!NOTE]
> Django enthält keine integrierte Authentifizierungs-View für die anfängliche Benutzerregistrierung („Signup“).
> Bei Bedarf können Sie selbst eine erstellen. Für dieses Tutorial gehen wir jedoch davon aus, dass nur Bibliothekare Benutzer registrieren dürfen und dies über die Django-Admin-Oberfläche tun.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber wahrscheinlich werden Sie es wollen, da er vieles erheblich vereinfacht.
> Wenn Sie Ihr Benutzermodell ändern, müssen Sie den Code zur Formularverarbeitung mit hoher Wahrscheinlichkeit anpassen. Trotzdem können Sie weiterhin die Standard-View-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten einschließlich URLs und Templates sinnvollerweise in unserer catalog-Anwendung platzieren.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten auszugliedern und für die gesamte Website verfügbar zu machen. Das zeigen wir hier!

### Projekt-URLs

Fügen Sie Folgendes am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` — beachten Sie den abschließenden Schrägstrich!
Django zeigt einen Fehler an, dass keine Zuordnung für diese URL gefunden werden konnte, und listet alle URLs auf, die es versucht hat.
Daran können Sie die URLs erkennen, die funktionieren werden, sobald wir Templates erstellt haben.

> [!NOTE]
> Das Hinzufügen des Pfads `accounts/` wie oben gezeigt fügt die folgenden URLs zusammen mit Namen hinzu — in eckigen Klammern angegeben —, die zum Umkehren der URL-Zuordnungen verwendet werden können. Sie müssen nichts Weiteres implementieren: Die obige URL-Zuordnung ordnet die unten genannten URLs automatisch zu.
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

Versuchen Sie nun, zur Anmelde-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, allerdings mit einem Fehler, der Ihnen mitteilt, dass das erforderliche Template (**registration/login.html**) im Template-Suchpfad fehlt.
Im gelben Abschnitt oben werden folgende Zeilen aufgeführt:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Templates mit dem Namen „registration“ zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Template-Verzeichnis

Die URLs und implizit die Views, die wir gerade hinzugefügt haben, erwarten ihre zugehörigen Templates in einem Verzeichnis **/registration/** irgendwo im Template-Suchpfad.

Für diese Website legen wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ab. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im selben Verzeichnis wie die Ordner **catalog** und **locallibrary**. Erstellen Sie diese Ordner jetzt.

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

Importieren Sie anschließend das Modul `os`. Fügen Sie die folgende Zeile nahe dem Anfang der Datei hinzu, falls sie noch nicht vorhanden ist.

```python
import os # needed by code below
```

Aktualisieren Sie die Zeile `'DIRS'` im Abschnitt `TEMPLATES` wie dargestellt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungs-Templates sind eine sehr grundlegende bzw. leicht veränderte Version der Django-Demonstrations-Anmelde-Templates. Möglicherweise müssen Sie sie für Ihre eigene Verwendung anpassen!

Erstellen Sie eine neue HTML-Datei namens /**django-locallibrary-tutorial/templates/registration/login.html** mit folgendem Inhalt:

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

Dieses Template weist einige Ähnlichkeiten mit den zuvor gesehenen auf: Es erweitert unser Basis-Template und überschreibt den Block `content`. Der restliche Code ist ziemlich standardmäßiger Code zur Formularverarbeitung, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie vorerst wissen müssen, ist, dass dies ein Formular anzeigt, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie bei ungültigen Werten beim Neuladen der Seite aufgefordert werden, korrekte Werte einzugeben.

Navigieren Sie nach dem Speichern Ihres Templates zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`). Sie sollten etwas Ähnliches wie Folgendes sehen:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten anmelden, werden Sie auf eine andere Seite weitergeleitet. Standardmäßig ist dies `http://127.0.0.1:8000/accounts/profile/`. Das Problem besteht darin, dass Django standardmäßig erwartet, dass Sie nach der Anmeldung zu einer Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den untenstehenden Text am Ende hinzu. Wenn Sie sich nun anmelden, sollten Sie standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie zur Abmelde-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, da Django 5 eine Abmeldung mit `GET` nicht erlaubt, sondern nur mit `POST`.
Wir fügen gleich ein Formular hinzu, mit dem Sie sich abmelden können. Zuerst erstellen wir jedoch die Seite, zu der Benutzer nach der Abmeldung weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den untenstehenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach. Es zeigt lediglich eine Nachricht an, die Sie darüber informiert, dass Sie abgemeldet wurden, und stellt einen Link bereit, über den Sie zum Anmeldebildschirm zurückkehren können. Der Bildschirm wird nach der Abmeldung wie folgt dargestellt:

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Templates für das Zurücksetzen des Passworts

Das Standard-Passwort-Zurücksetzungssystem verwendet E-Mails, um dem Benutzer einen Link zum Zurücksetzen zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers abzurufen, die E-Mail zu senden, ihm die Eingabe eines neuen Passworts zu ermöglichen und anzuzeigen, wann der gesamte Vorgang abgeschlossen ist.

Die folgenden Templates können als Ausgangspunkt verwendet werden.

#### Formular zum Zurücksetzen des Passworts

Dies ist das Formular zum Abrufen der E-Mail-Adresse des Benutzers, um die E-Mail zum Zurücksetzen des Passworts zu versenden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** mit folgendem Inhalt:

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

#### Passwort-Zurücksetzung abgeschlossen

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### E-Mail zum Zurücksetzen des Passworts

Dieses Template enthält den Text der HTML-E-Mail mit dem Zurücksetzungslink, die wir an Benutzer senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** mit folgendem Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Zurücksetzung bestätigen

Auf dieser Seite geben Sie Ihr neues Passwort ein, nachdem Sie auf den Link in der E-Mail zum Zurücksetzen des Passworts geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** mit folgendem Inhalt:

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

Dies ist das letzte Template zum Zurücksetzen des Passworts. Es wird angezeigt, um Sie darüber zu informieren, dass das Zurücksetzen des Passworts erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie nun die URL-Konfiguration hinzugefügt und all diese Templates erstellt haben, sollten die Authentifizierungsseiten — außer der Abmeldung — jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zunächst versuchen, sich über die URL `http://127.0.0.1:8000/accounts/login/` bei Ihrem Superuser-Konto anzumelden.
Über den Link auf der Anmeldeseite können Sie die Funktion zum Zurücksetzen des Passworts testen. **Beachten Sie, dass Django E-Mails zum Zurücksetzen nur an Adressen bzw. Benutzer sendet, die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie die Kontoabmeldung noch nicht testen können, da Abmeldeanfragen als `POST`- statt als `GET`-Anfragen gesendet werden müssen.

> [!NOTE]
> Das Passwort-Zurücksetzungssystem setzt voraus, dass Ihre Website E-Mail unterstützt. Dies liegt außerhalb des Umfangs dieses Artikels, daher wird dieser Teil **noch nicht funktionieren**. Um Tests zu ermöglichen, fügen Sie die folgende Zeile am Ende Ihrer Datei settings.py ein. Dadurch werden alle gesendeten E-Mails in der Konsole protokolliert, sodass Sie den Link zum Zurücksetzen des Passworts aus der Konsole kopieren können.
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [Sending email](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Gegen authentifizierte Benutzer testen

Dieser Abschnitt behandelt, wie wir selektiv steuern können, welche Inhalte der Benutzer sieht, abhängig davon, ob er angemeldet ist oder nicht.

### Testen in Templates

Sie können in Templates mit der Template-Variablen `\{{ user }}` Informationen über den aktuell angemeldeten Benutzer abrufen. Diese wird standardmäßig zum Template-Kontext hinzugefügt, wenn Sie das Projekt wie in unserer Grundstruktur eingerichtet haben.

Typischerweise testen Sie zunächst die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Zur Demonstration aktualisieren wir nun unsere Seitenleiste, sodass ein „Login“-Link angezeigt wird, wenn der Benutzer abgemeldet ist, und ein „Logout“-Link, wenn er angemeldet ist.

Öffnen Sie das Basis-Template (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text unmittelbar vor dem Template-Tag `endblock` in den Block `sidebar`.

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

Wie Sie sehen können, verwenden wir die Template-Tags `if` / `else` / `endif`, um Text abhängig davon anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben. Daher rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die URL des Anmeldelinks mithilfe des Template-Tags `url` und des Namens der URL-Konfiguration `login`. Beachten Sie auch, dass wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Dadurch wird ein URL-Parameter `next`, der die Adresse bzw. URL der _aktuellen_ Seite enthält, an das Ende der verlinkten URL angefügt. Nach erfolgreicher Anmeldung verwendet die View diesen Wert `next`, um den Benutzer zurück zu der Seite weiterzuleiten, auf der er ursprünglich auf den Anmeldelink geklickt hat.

Der Code des Abmelde-Templates unterscheidet sich, da Sie sich ab Django 5 mit `POST` bei der URL `admin:logout` abmelden müssen, indem Sie ein Formular mit einer Schaltfläche verwenden.
Standardmäßig würde dies als Schaltfläche dargestellt, aber Sie können die Schaltfläche so formatieren, dass sie als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, daher lassen wir die Schaltfläche durch Anwenden von `class="btn btn-link"` wie einen Link aussehen.
Sie müssen außerdem die folgenden Stile an **/django-locallibrary-tutorial/catalog/static/css/styles.css** anhängen, damit der Abmeldelink neben allen anderen Links der Seitenleiste korrekt positioniert wird:

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
Sie sollten zu den Abmelde-/Anmeldeseiten weitergeleitet werden, die Sie oben im Abschnitt [Template-Verzeichnis](#template-verzeichnis) definiert haben.

### Testen in Views

Wenn Sie funktionsbasierte Views verwenden, ist die einfachste Möglichkeit, den Zugriff auf Ihre Funktionen zu beschränken, der Einsatz des Decorators `login_required` für Ihre View-Funktion, wie unten dargestellt. Wenn der Benutzer angemeldet ist, wird Ihr View-Code normal ausgeführt. Wenn der Benutzer nicht angemeldet ist, wird er zur in den Projekteinstellungen definierten Anmelde-URL (`settings.LOGIN_URL`) weitergeleitet, wobei der aktuelle absolute Pfad als URL-Parameter `next` übergeben wird. Wenn die Anmeldung des Benutzers erfolgreich ist, kehrt er zu dieser Seite zurück, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe auch manuell tun, indem Sie `request.user.is_authenticated` testen, aber der Decorator ist wesentlich bequemer!

Ebenso ist die einfachste Möglichkeit, den Zugriff auf angemeldete Benutzer in Ihren klassenbasierten Views zu beschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen dieses Mixin in der Oberklassenliste zuerst deklarieren, vor der Haupt-View-Klasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies weist genau dasselbe Weiterleitungsverhalten auf wie der Decorator `login_required`. Sie können auch einen alternativen Ort angeben, zu dem ein Benutzer weitergeleitet wird, wenn er nicht authentifiziert ist (`login_url`), sowie einen URL-Parameternamen anstelle von `next`, um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Weitere Einzelheiten finden Sie in der [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — die Bücher des aktuellen Benutzers auflisten

Da wir jetzt wissen, wie eine Seite auf einen bestimmten Benutzer beschränkt wird, erstellen wir eine View für die Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit für Benutzer, Bücher auszuleihen! Bevor wir also die Bücherliste erstellen können, erweitern wir zunächst das Modell `BookInstance`, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django-Admin-Anwendung, um unserem Testbenutzer eine Reihe von Büchern auszuleihen.

### Modelle

Zunächst müssen wir es Benutzern ermöglichen, eine `BookInstance` ausgeliehen zu haben. Wir verfügen bereits über ein Datum `status` und `due_back`, aber noch nicht über eine Verknüpfung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine solche mit einem `ForeignKey`-Feld, also einem Eins-zu-viele-Feld. Außerdem benötigen wir einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie `settings` aus `django.conf`. Fügen Sie dies direkt unter der vorherigen Importzeile am Anfang der Datei hinzu, damit die Einstellungen für nachfolgenden Code verfügbar sind, der sie verwendet:

```python
from django.conf import settings
```

Fügen Sie anschließend dem Modell `BookInstance` das Feld `borrower` hinzu und legen Sie das Benutzermodell für den Schlüssel auf den Wert der Einstellung `AUTH_USER_MODEL` fest.
Da wir die Einstellung nicht durch ein [benutzerdefiniertes Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, verweist dies auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Importieren des Modells auf diese Weise reduziert den Arbeitsaufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell. Sie könnten das Modell `User` daher stattdessen direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir aus unseren Templates aufrufen können, um festzustellen, ob eine bestimmte Buchinstanz überfällig ist.
Wir könnten dies zwar im Template selbst berechnen, aber die Verwendung einer [property](https://docs.python.org/3/builtins/functions.html#property), wie unten gezeigt, ist wesentlich effizienter.

Fügen Sie dies irgendwo nahe dem Anfang der Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun der Klasse `BookInstance` die folgende Eigenschaftsdefinition hinzu:

> [!NOTE]
> Der folgende Code verwendet die Python-Funktion `bool()`, die ein Objekt oder das Ergebnis eines Ausdrucks auswertet und `True` zurückgibt, sofern das Ergebnis nicht „falsy“ ist; in diesem Fall gibt sie `False` zurück.
> In Python ist ein Objekt _falsy_ — wird also als `False` ausgewertet —, wenn es leer ist, etwa `[]`, `()` oder `{}`, `0`, `None` oder `False`.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zunächst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres Feld `due_back` würde dazu führen, dass Django einen Fehler auslöst, statt die Seite anzuzeigen: Leere Werte sind nicht vergleichbar. Dies möchten wir unseren Benutzern nicht zumuten!

Nachdem wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen für das Projekt erstellen und diese anschließend anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das Feld `borrower` zur Klasse `BookInstanceAdmin` sowohl in `list_display` als auch in `fieldsets` hinzu, wie unten dargestellt.
Dadurch wird das Feld im Admin-Bereich sichtbar, sodass wir bei Bedarf einen `User` einer `BookInstance` zuweisen können.

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

Da es nun möglich ist, Bücher an einen bestimmten Benutzer auszuleihen, leihen Sie mehrere `BookInstance`-Datensätze aus. Legen Sie deren Feld `borrowed` auf Ihren Testbenutzer fest, setzen Sie den `status` auf „On loan“ und legen Sie Fälligkeitsdaten sowohl in der Zukunft als auch in der Vergangenheit fest.

> [!NOTE]
> Wir führen den Prozess nicht im Detail aus, da Sie bereits wissen, wie die Admin-Website verwendet wird!

### View für ausgeliehene Bücher

Nun fügen wir eine View hinzu, die eine Liste aller Bücher abruft, die an den aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe allgemeine klassenbasierte Listen-View, mit der wir bereits vertraut sind, importieren jedoch diesmal zusätzlich `LoginRequiredMixin` und leiten davon ab, damit nur ein angemeldeter Benutzer diese View aufrufen kann. Außerdem entscheiden wir uns dafür, einen `template_name` zu deklarieren, statt den Standardwert zu verwenden, da wir möglicherweise mehrere unterschiedliche Listen von `BookInstance`-Datensätzen mit verschiedenen Views und Templates haben werden.

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

Um unsere Abfrage auf die `BookInstance`-Objekte des aktuellen Benutzers zu beschränken, implementieren wir `get_queryset()` wie oben dargestellt neu. Beachten Sie, dass „o“ der gespeicherte Code für „on loan“ ist, und wir nach dem Datum `due_back` sortieren, sodass die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige View verweist. Sie können den untenstehenden Text einfach ans Ende der Datei kopieren.

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für ausgeliehene Bücher

Jetzt müssen wir für diese Seite nur noch ein Template hinzufügen. Erstellen Sie zunächst die Template-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** mit folgendem Inhalt:

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

Dieses Template ähnelt stark den Templates, die wir zuvor für die Objekte `Book` und `Author` erstellt haben.
Das einzige „Neue“ ist hier, dass wir die dem Modell hinzugefügte Methode `(bookinst.is_overdue)` überprüfen und damit die Farbe überfälliger Elemente ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste für einen angemeldeten Benutzer jetzt in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzeigen können. Probieren Sie dies mit an- und abgemeldetem Benutzer aus. Im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden.

### Die Liste zur Seitenleiste hinzufügen

Der allerletzte Schritt besteht darin, einen Link zu dieser neuen Seite in die Seitenleiste einzufügen. Wir platzieren ihn im selben Abschnitt, in dem wir weitere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie das Basis-Template (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile „My Borrowed“ an der unten dargestellten Stelle zur Seitenleiste hinzu.

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

Wenn ein Benutzer angemeldet ist, sieht er in der Seitenleiste den Link _My Borrowed_ und die Liste der Bücher wird wie unten dargestellt angezeigt. Das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir hoffentlich in einem späteren Tutorial beheben werden!

![Bibliothek – vom Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die ein Benutzer mit der Berechtigung für eine Modellinstanz ausführen darf. Standardmäßig erteilt Django allen Modellen automatisch die Berechtigungen _add_, _change_ und _delete_. Diese erlauben Benutzern mit den jeweiligen Berechtigungen, die zugehörigen Aktionen über die Admin-Website auszuführen. Sie können Ihren Modellen eigene Berechtigungen hinzufügen und diese bestimmten Benutzern erteilen. Sie können außerdem die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Prüfen von Berechtigungen in Views und Templates ähnelt dann stark dem Prüfen des Authentifizierungsstatus. Tatsächlich prüft eine Berechtigungsprüfung auch die Authentifizierung.

### Modelle

Berechtigungen werden im Abschnitt `class Meta` des Modells mithilfe des Feldes `permissions` definiert.
Sie können in einem Tuple so viele Berechtigungen angeben, wie Sie benötigen. Jede Berechtigung wird selbst in einem verschachtelten Tuple definiert, das den Berechtigungsnamen und den Anzeigewert der Berechtigung enthält.
Beispielsweise könnten wir wie gezeigt eine Berechtigung definieren, die es einem Benutzer erlaubt, ein Buch als zurückgegeben zu markieren:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Anschließend könnten wir die Berechtigung auf der Admin-Website einer Gruppe „Librarian“ zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben dargestellt hinzu. Sie müssen Ihre Migrationen erneut ausführen — rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf —, um die Datenbank entsprechend zu aktualisieren.

### Templates

Die Berechtigungen des aktuellen Benutzers werden in einer Template-Variable namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django-„App“ verwenden. Beispielsweise ist `\{{ perms.catalog.can_mark_returned }}` `True`, wenn der Benutzer diese Berechtigung hat, andernfalls `False`. In der Regel testen wir die Berechtigung mithilfe des Template-Tags `{% if %}`, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

Berechtigungen können in einer Funktions-View mit dem Decorator `permission_required` oder in einer klassenbasierten View mit `PermissionRequiredMixin` geprüft werden. Die Muster entsprechen denen für die Anmeldeauthentifizierung, obwohl Sie natürlich sinnvollerweise mehrere Berechtigungen hinzufügen müssen könnten.

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
> Beim obigen Verhalten gibt es einen kleinen Standardunterschied. Für einen **angemeldeten** Benutzer mit einer Berechtigungsverletzung gilt standardmäßig:
>
> - `@permission_required` leitet zum Anmeldebildschirm weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Forbidden).
>
> Normalerweise möchten Sie das Verhalten von `PermissionRequiredMixin`: Geben Sie 403 zurück, wenn ein Benutzer angemeldet ist, aber nicht über die richtige Berechtigung verfügt. Um dies für eine Funktions-View zu erreichen, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Weiter oben in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, auf der die von ihm ausgeliehenen Bücher aufgelistet werden.
Die Aufgabe besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Ausleihers enthält.

Sie sollten demselben Muster wie für die andere View folgen können. Der Hauptunterschied besteht darin, dass Sie die View auf Bibliothekare beschränken müssen. Sie könnten dies darauf stützen, ob der Benutzer ein Mitarbeiter ist — Funktions-Decorator: `staff_member_required`, Template-Variable: `user.is_staff` —, aber wir empfehlen Ihnen stattdessen, die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für berechtigungsbasierte Tests zu verwenden. Berechtigungsprüfungen geben für Superuser immer true zurück, selbst wenn eine Berechtigung noch nicht definiert wurde! Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Berechtigung hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im untenstehenden Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekare beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben nun eine Website erstellt, auf der Bibliotheksmitglieder sich anmelden und ihre eigenen Inhalte ansehen können und auf der Bibliothekare mit der richtigen Berechtigung alle ausgeliehenen Bücher und deren Ausleiher anzeigen können. Momentan betrachten wir weiterhin nur Inhalte, aber dieselben Grundsätze und Techniken werden verwendet, wenn Sie beginnen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel sehen wir uns an, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu erfassen, und beginnen dann mit der Änderung einiger unserer gespeicherten Daten.

## Siehe auch

- [User authentication in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Using the (default) Django authentication system](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Introduction to class-based views > Decorating class-based views](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
