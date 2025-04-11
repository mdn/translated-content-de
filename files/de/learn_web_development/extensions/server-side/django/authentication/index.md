---
title: "Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzer in Ihre Website mit eigenen Konten einloggen lassen können und wie Sie steuern können, was sie basierend auf ihrem _Berechtigungsstatus_ sehen und tun können. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem wir Login- und Logout-Seiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen von ausgeliehenen Büchern hinzufügen.

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
        Verstehen, wie Benutzer-Authentifizierung und Berechtigungen eingerichtet und verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigungen"), das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelten Sitzungs-Framework basiert. Dieses System erlaubt es Ihnen, die Anmeldeinformationen von Benutzern zu überprüfen und festzulegen, welche Aktionen jedem Benutzer gestattet sind. Das Framework umfasst eingebaute Modelle für `Users` und `Groups` (eine generische Methode, um Berechtigungen mehreren Benutzern gleichzeitig zuzuweisen), Berechtigungen/Flags, die angeben, ob ein Benutzer eine Aufgabe durchführen kann, Formulare und Ansichten zum Einloggen von Benutzern und Ansichts-Tools zur Einschränkung von Inhalten.

> [!NOTE]
> Laut Django strebt das Authentifizierungssystem an, sehr generisch zu sein, und bietet daher nicht einige Funktionen anderer Webauthentifizierungssysteme. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Beispielsweise das {{Glossary("throttle", "Drosseln")}} von Login-Versuchen und die Authentifizierung gegen Dritte (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzer-Authentifizierung auf der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Login- und Logout-Seiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten steuern. Wir verwenden die Authentifizierung/Berechtigungen, um Listen ausgeliehener Bücher sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel, und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen und dabei nur die bereitgestellte API verwenden, um den Benutzer einzuloggen. In diesem Artikel werden wir jedoch die "Stock"-Authentifizierungsansichten und -formulare von Django für unsere Login- und Logout-Seiten verwenden. Wir müssen zwar einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und die Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen können.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir die [Skeleton-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2), sodass Sie an dieser Stelle nichts weiter tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde bereits für uns vorgenommen, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer- und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration ist in den Sektionen `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

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

Sie haben Ihren ersten Benutzer bereits erstellt, als wir uns das [Django-Admin-Interface](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) im Tutorial 4 angesehen haben (dies war ein Superuser, erstellt mit dem Befehl `python manage.py createsuperuser`). Unser Superuser ist bereits authentifiziert und hat alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, der einen normalen Website-Benutzer repräsentiert. Wir werden das Admin-Interface verwenden, um unsere _locallibrary_-Gruppen und Website-Logins zu erstellen, da dies eine der schnellsten Möglichkeiten ist.

> [!NOTE]
> Sie können Benutzer auch programmatisch wie unten gezeigt erstellen. Sie müssen dies beispielsweise tun, wenn Sie eine Schnittstelle entwickeln, um "normalen" Benutzern das Erstellen ihrer eigenen Logins zu ermöglichen (Sie sollten den meisten Benutzern keinen Zugriff auf das Admin-Interface geben).
>
> ```python
> from django.contrib.auth.models import User
>
> # Benutzer erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Beachten Sie jedoch, dass es dringend empfohlen wird, ein _benutzerdefiniertes Benutzermodell_ beim Starten eines Projekts einzurichten, da Sie es zukünftig bei Bedarf leicht anpassen können. Bei Verwendung eines benutzerdefinierten Benutzermodells würde der Code zum Erstellen desselben Benutzers wie folgt aussehen:
>
> ```python
> # Aktuelles Benutzermodell aus den Einstellungen abrufen
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Benutzer aus Modell erstellen und in der Datenbank speichern
> user = User.objects.create_user('meinbenutzername', 'meineemail@crazymail.com', 'meinpasswort')
>
> # Felder aktualisieren und erneut speichern
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Benutzermodell beim Start eines Projekts verwenden](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Im Folgenden werden wir zuerst eine Gruppe und dann einen Benutzer erstellen. Auch wenn wir derzeit noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird es später viel einfacher sein, diese einmal für die Gruppe statt einzeln für jedes Mitglied hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie in Ihrem lokalen Webbrowser zum Admin-Interface (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldedaten Ihres Superuser-Kontos an der Seite an. Die oberste Ebene der Admin-Site zeigt alle Ihre Modelle, sortiert nach "Django-Anwendung". Im **Authentifizierungs- und Autorisierungs**-Abschnitt können Sie auf die Links **Benutzer** oder **Gruppen** klicken, um deren bestehende Datensätze anzuzeigen.

![Admin-Site - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Lassen Sie uns zuerst eine neue Gruppe für unsere Bibliotheksmitglieder erstellen.

1. Klicken Sie auf die Schaltfläche **Hinzufügen** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie den **Namen** "Library Members" für die Gruppe ein.
   ![Admin-Site - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, also drücken Sie einfach **SPEICHERN** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Nun erstellen wir einen Benutzer:

1. Navigieren Sie zurück zur Startseite der Admin-Site
2. Klicken Sie auf die Schaltfläche **Hinzufügen** neben _Benutzer_, um das Dialogfeld _Benutzer hinzufügen_ zu öffnen.
   ![Admin-Site - Benutzer hinzufügen Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Benutzernamen** sowie **Passwort**/**Passwortbestätigung** für Ihren Testbenutzer ein
4. Drücken Sie **SPEICHERN**, um den Benutzer zu erstellen.

   Die Admin-Site erstellt den neuen Benutzer und leitet Sie sofort zu einem _Benutzer ändern_-Bildschirm weiter, in dem Sie Ihren **Benutzernamen** ändern und Informationen zu den optionalen Feldern des Benutzermodells hinzufügen können. Diese Felder umfassen den Vornamen, Nachnamen, die E-Mail-Adresse und den Status und die Berechtigungen des Benutzers (nur das **Aktiv**-Flag sollte gesetzt werden). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten im Zusammenhang mit dem Benutzer einsehen (z. B. sein Beitrittsdatum und sein letztes Anmeldedatum).
   ![Admin-Site - Benutzer hinzufügen Teil 2](admin_authentication_add_user_prt2.png)

5. Im Abschnitt _Gruppen_ wählen Sie die Gruppe **Library Member** aus der Liste der _Verfügbaren Gruppen_ aus und drücken dann auf den **nach rechts zeigenden Pfeil** zwischen den Boxen, um sie in die Box _Ausgewählte Gruppen_ zu verschieben.
   ![Admin-Site - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, also wählen Sie einfach noch einmal **SPEICHERN**, um zur Liste der Benutzer zu wechseln.

Das war's! Jetzt haben Sie ein "normales Bibliotheksmitglied"-Konto, das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, die es ihnen ermöglichen, sich einzuloggen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksbenutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie dieser ebenfalls einen Benutzer hinzu!

## Einrichtung Ihrer Authentifizierungsansichten

Django stellt fast alles zur Verfügung, was Sie benötigen, um Authentifizierungsseiten zu erstellen, die sich um das Einloggen, Ausloggen und das Passwort-Management kümmern. Dies beinhaltet einen URL-Mapper, Ansichten und Formulare, aber keine Vorlagen — diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie das Standardsystem in die _LocalLibrary_ Website integriert und die Vorlagen erstellt werden. Wir platzieren diese im Hauptprojekt-URLs.

> [!NOTE]
> Sie müssen keinen dieser Codes verwenden, aber es ist wahrscheinlich, dass Sie das möchten, weil es die Dinge wesentlich erleichtert.
> Sie werden fast sicher den Formularverarbeitungscode ändern müssen, wenn Sie Ihr Benutzermodell ändern. Dennoch können Sie die Standard-Ansichtsfunktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, vernünftigerweise in unserer Kataloganwendung unterbringen.
> Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Login-Verhalten zu trennen und für die gesamte Site verfügbar zu machen, was wir hier gezeigt haben!

### Projekt-URLs

Fügen Sie Folgendes am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL finden konnte, und listet alle URLs auf, die es versucht hat.
Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Durch das Hinzufügen des `accounts/` Pfads, wie oben gezeigt, werden die folgenden URLs hinzugefügt, zusammen mit Namen (in eckigen Klammern angegeben), die verwendet werden können, um die URL-Zuordnungen umzukehren. Sie müssen nichts weiter implementieren — die obige URL-Zuordnung ordnet automatisch die unten genannten URLs zu.
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

Versuchen Sie nun, zur Login-URL (`http://127.0.0.1:8000/accounts/login/`) zu navigieren. Dies wird erneut fehlschlagen, diesmal jedoch mit einem Fehler, der Ihnen mitteilt, dass wir die erforderliche Vorlage (**registration/login.html**) im Vorlagesuchpfad vermissen.
Sie werden die folgenden Zeilen im gelben Bereich oben sehen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen namens "registration" zu erstellen und dann die **login.html** Datei hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit, Ansichten), die wir gerade hinzugefügt haben, erwarten, dass ihre zugeordneten Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagesuchpfad zu finden sind.

Für diese Website platzieren wir unsere HTML-Seiten im Verzeichnis **templates/registration/**. Dieses Verzeichnis sollte sich im Root-Verzeichnis Ihres Projekts befinden, das heißt im selben Verzeichnis wie die **catalog** und **locallibrary** Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte jetzt wie unten gezeigt aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django oberster Projektordner
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates** Verzeichnis für den Vorlagenladeprogramm sichtbar zu machen, müssen wir es im Vorlagesuchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os` Modul (fügen Sie folgende Zeile nahe der Spitze der Datei hinzu, falls sie noch nicht vorhanden ist).

```python
import os # needed by code below
```

Aktualisieren Sie die `TEMPLATES` Sektion der `'DIRS'` Zeile wie gezeigt:

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
> Die in diesem Artikel bereitgestellten Authentifizierungsvorlagen sind eine sehr einfache/wenig modifizierte Version der Demonstrations-Login-Vorlagen von Django. Möglicherweise müssen Sie sie für Ihre eigene Verwendung anpassen!

Erstellen Sie eine neue HTML-Datei unter **/django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr folgenden Inhalt:

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

Diese Vorlage weist einige Ähnlichkeiten mit denen auf, die wir zuvor gesehen haben — sie erweitert unsere Basismaske und überschreibt den `content` Block. Der Rest des Codes ist ein ziemlich standardmäßiger Formularverarbeitungscode, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie für den Moment wissen müssen, ist, dass dies ein Formular anzeigen wird, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass, wenn Sie ungültige Werte eingeben, Sie aufgefordert werden, korrekte Werte einzugeben, wenn die Seite aktualisiert wird.

Navigieren Sie zurück zur Login-Seite (`http://127.0.0.1:8000/accounts/login/`), nachdem Sie Ihre Vorlage gespeichert haben, und Sie sollten etwas Ähnliches wie dies sehen:

![Bibliothek Login Seite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldedaten einloggen, werden Sie auf eine andere Seite umgeleitet (standardmäßig wird dies `http://127.0.0.1:8000/accounts/profile/` sein). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach dem Einloggen zu einer Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text hinzu. Jetzt sollten Sie standardmäßig auf die Startseite der Seite weitergeleitet werden, wenn Sie sich einloggen.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Logout-Vorlage

Wenn Sie zur Logout-URL (`http://127.0.0.1:8000/accounts/logout/`) navigieren, erhalten Sie einen Fehler, weil Django 5 das Ausloggen nur mit `POST`, nicht mit `GET` zulässt.
Wir werden in Kürze ein Formular hinzufügen, das Sie zum Abmelden verwenden können, aber zuerst erstellen wir die Seite, zu der Benutzer nach dem Ausloggen geleitet werden.

Erstellen und öffnen **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den untenstehenden Text:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link, den Sie drücken können, um zurück zur Anmeldeseite zu gehen. Der Bildschirm wird so dargestellt (nach dem Ausloggen):

![Bibliothek Logout Seite v1](library_logout.png)

### Passwort-Reset-Vorlagen

Das Standardpasswort-Reset-System verwendet E-Mail, um dem Benutzer einen Reset-Link zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihnen zu erlauben, ein neues Passwort einzugeben und zu vermerken, wenn der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Basis verwendet werden.

#### Passwort-Reset-Formular

Dies ist das Formular, das zur Eingabe der E-Mail-Adresse des Benutzers verwendet wird (um die Passwort-Reset-E-Mail zu senden). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm folgenden Inhalt:

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

#### Passwort-Reset durchgeführt

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Passwort-Reset E-Mail

Diese Vorlage liefert den Text der HTML-E-Mail, die wir an Benutzer senden werden, um den Reset-Link zu senden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm folgenden Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwort-Reset bestätigen

Diese Seite ist der Ort, an dem Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwort-Reset-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm folgenden Inhalt:

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

#### Passwort-Reset abgeschlossen

Dies ist die letzte Passwort-Reset-Vorlage, die angezeigt wird, um Sie darauf hinzuweisen, dass der Passwort-Reset erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Logout) nun einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto über die URL `http://127.0.0.1:8000/accounts/login/` einzuloggen.
Sie können die Passwort-Reset-Funktionalität über den Link auf der Login-Seite testen. **Beachten Sie, dass Django nur Passwortrücksetzungen an bereits in seiner Datenbank gespeicherte Adressen (Benutzer) senden wird!**

Bitte beachten Sie, dass Sie das Konto-Logout noch nicht testen können, da Abmeldeanforderungen als `POST` und nicht als `GET` gesendet werden müssen.

> [!NOTE]
> Das Passwort-Reset-System erfordert, dass Ihre Website E-Mail unterstützt, was über den Umfang dieses Artikels hinausgeht, sodass dieser Teil **noch nicht funktioniert**. Fügen Sie zum Testen die folgende Zeile am Ende Ihrer settings.py Datei hinzu. Dadurch werden alle gesendeten E-Mails in die Konsole geloggt (damit Sie den Passwort-Reset-Link aus der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegenüber authentifizierten Benutzern

Dieser Abschnitt behandelt, was wir tun können, um selektiv steuern zu können, welchen Inhalt der Benutzer basierend auf seinem Anmeldestatus sieht.

### Testen in Vorlagen

Sie können in Vorlagen Informationen über den aktuell eingelog

gten Benutzer mit der `\{{ user }}` Template-Variable erhalten (diese wird standardmäßig bei der Einrichtung des Projekts dem Vorlagenkontext hinzugefügt).

Typischerweise testen Sie zuerst die `\{{ user.is_authenticated }}` Template-Variable, um festzustellen, ob der Benutzer zum Sehen bestimmter Inhalte berechtigt ist. Um dies zu demonstrieren, aktualisieren wir als nächstes unsere Seitenleiste, um einen "Login"-Link anzuzeigen, wenn der Benutzer ausgeloggt ist, und einen "Logout"-Link, wenn er eingeloggt ist.

Öffnen Sie die Basismaske (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar vor dem `endblock` Template-Tag.

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

Wie Sie sehen, verwenden wir `if` / `else` / `endif` Template-Tags, um Text bedingt anzuzeigen, basierend darauf, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, und rufen `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die URL des Login-Links mit dem `url` Template-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` am Ende der URL hinzugefügt haben. Dies fügt der verlinkten URL einen URL-Parameter `next` hinzu, der die Adresse (URL) der _aktuellen_ Seite enthält. Nachdem sich der Benutzer erfolgreich eingeloggt hat, verwendet die Ansicht diesen `next` Wert, um den Benutzer zurück auf die Seite umzuleiten, auf der er ursprünglich auf den Login-Link geklickt hat.

Der Logout-Vorlagencode unterscheidet sich, da seit Django 5 zum Ausloggen mit `POST` zur `admin:logout` URL gesendet werden muss, mit einem Formular mit einer Schaltfläche.
Standardmäßig würde dies als Schaltfläche dargestellt, Sie können jedoch die Schaltfläche so gestalten, dass sie als Link angezeigt wird.
Für dieses Beispiel verwenden wir _Bootstrap_, sodass wir die Schaltfläche wie einen Link aussehen lassen, indem wir `class="btn btn-link"` anwenden.
Sie müssen dieser Datei auch die folgenden Stile hinzufügen **/django-locallibrary-tutorial/catalog/static/css/styles.css**, um den Logout-Link neben allen anderen Seitenleisten-Links korrekt zu positionieren:

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
Sie sollten zu den oben im [Vorlagenverzeichnis](#vorlagenverzeichnis) definierten Logout/Login-Seiten gelangen.

### Testen in Ansichten

Wenn Sie funktionbasierte Ansichten verwenden, können Sie den Zugriff auf Ihre Funktionen am einfachsten einschränken, indem Sie den `login_required` Dekorator auf Ihre Ansichts-Funktion anwenden, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr Ansichts-Code normal ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird er zur im Projekt definierten Login-URL (`settings.LOGIN_URL`) umgeleitet und der aktuelle absolute Pfad als `next` URL-Parameter übergeben. Wenn es dem Benutzer gelingt, sich einzuloggen, wird er auf diese Seite zurückgeleitet, diesmal jedoch authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe auch manuell tun, indem Sie auf `request.user.is_authenticated` testen, aber der Dekorator ist viel praktischer!

Ebenso besteht die einfachste Möglichkeit, den Zugriff auf eingeloggte Benutzer in Ihren klassenbasierten Ansichten einzuschränken, darin, von `LoginRequiredMixin` abzuleiten. Sie müssen diesen Mixin zuerst in der Superklasse-Liste angeben, bevor die Hauptansichtsklasse angegeben wird.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Umleitungsverhalten wie der `login_required` Dekorator. Sie können auch eine alternative Adresse angeben, zu der der Benutzer weitergeleitet wird, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameternamen anstelle von `next`, um den aktuellen absoluten Pfad zu verwenden (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details lesen Sie in der [Django-Dokumentation hier nach](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Beispiel — Liste der Bücher des aktuellen Benutzers

Jetzt, da wir wissen, wie man eine Seite auf einen bestimmten Benutzer beschränkt, lassen Sie uns eine Ansicht von Büchern erstellen, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keine Möglichkeit, Benutzern Bücher auszuleihen! Bevor wir also die Buchliste erstellen können, erweitern wir zunächst das `BookInstance` Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django Admin Anwendung, um eine Anzahl von Büchern an unseren Testbenutzer zu verleihen.

### Modelle

Zuerst müssen wir es möglich machen, dass Benutzer eine `BookInstance` ausleihen können (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Verbindung zwischen diesem Modell und einem bestimmten Benutzer. Wir erstellen eine mit einem `ForeignKey` (eins-zu-viele) Feld. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` von `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile am Anfang der Datei hinzu, damit die Einstellungen im nachfolgenden Code verwendet werden können):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower` Feld zum `BookInstance` Modell hinzu und setzen Sie das Benutzermodell für den Schlüssel als Wert der Einstellung `AUTH_USER_MODEL`.
Da wir die Einstellung mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) nicht überschrieben haben, wird auf das Standard `User` Modell von `django.contrib.auth.models` abgebildet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Auf diese Weise lassen sich die Modelle importieren, reduziert sich der Arbeitsaufwand, wenn Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, sodass Sie stattdessen das `User` Modell direkt mit den folgenden Zeilen importieren könnten:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir aus unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buch ein überfälliges Exemplar ist.
Während wir dies im Template selbst berechnen könnten, wäre es viel effizienter, eine [Eigenschaft](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt zu verwenden.

Fügen Sie dies irgendwo in der Nähe des Anfangs der Datei hinzu:

```python
from datetime import date
```

Fügen Sie dann die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()` Funktion von Python, die ein Objekt oder das Ergebnis eines Ausdrucks auswertet und `True` zurückgibt, es sei denn, das Ergebnis ist "falsy", in diesem Fall wird `False` zurückgegeben.
> In Python ist ein Objekt _falsy_ (wertet sich als `False`), wenn es: leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir überprüfen zuerst, ob `due_back` leer ist, bevor wir einen Vergleich anstellen. Ein leeres `due_back` Feld würde Django einen Fehler verursachen, anstatt die Seite anzuzeigen: leere Werte sind nicht vergleichbar. Das ist nicht etwas, das wir den Benutzern zumuten wollen!

Da wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen auf dem Projekt durchführen und diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py**, und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse sowohl in `list_display` als auch in `fieldsets` wie unten gezeigt hinzu.
Dies wird das Feld im Admin Bereich sichtbar machen und es uns ermöglichen, einem `BookInstance` bei Bedarf einen `User` zuzuweisen.

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

Da es nun möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, leihen Sie eine Anzahl von `BookInstance` Datensätzen aus. Setzen Sie ihr `borrowed` Feld auf Ihren Testbenutzer, stellen Sie den `status` auf "Ausgeliehen" und setzen Sie Fälligkeitsdaten sowohl in die Zukunft als auch in die Vergangenheit.

> [!NOTE]
> Wir werden den Prozess nicht ausbuchstabieren, da Sie bereits wissen, wie Sie das Admin-Interface verwenden!

### Ansicht der ausgeliehenen Bücher

Jetzt fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer ausgeliehen wurden. Wir verwenden dieselbe generische listenbasierte Klassenansicht, mit der wir vertraut sind, importieren und leiten jedoch auch von `LoginRequiredMixin` ab, sodass nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir werden auch einen `template_name` angeben, anstatt den Standard zu verwenden, weil wir möglicherweise mehrere Listen von BookInstance-Datensätzen mit unterschiedlichen Ansichten und Vorlagen haben.

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

Um unsere Abfrage nur auf die `BookInstance` Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "ausgeliehen" ist und wir nach dem `due_back` Datum ordnen, damit die ältesten Gegenstände zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie ein `path()` hinzu, das auf die obige Ansicht verweist (Sie können den untenstehenden Text einfach am Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Jetzt müssen wir nur noch eine Vorlage für diese Seite hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr folgenden Inhalt:

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

Diese Vorlage ist sehr ähnlich zu denen, die wir zuvor für die `Book` und `Author` Objekte erstellt haben.
Das einzige "Neue" hier ist, dass wir die Methode verwenden, die wir im Modell hinzugefügt haben `(bookinst.is_overdue`) und sie verwenden, um die Farbe von überfälligen Gegenständen zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste jetzt für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` ansehen können. Probieren Sie dies mit Ihrem Benutzer ein- und ausgeloggt aus (im zweiten Fall sollten Sie zur Login-Seite weitergeleitet werden).

### Fügen Sie die Liste zur Seitenleiste hinzu

Der allerletzte Schritt ist, einen Link zu dieser neuen Seite in die Seitenleiste einzufügen. Wir platzieren dies im selben Abschnitt, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basismaske (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "Meine ausgeborgten Bücher" zur Seitenleiste in der unten gezeigten Position hinzu.

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

Wenn ein Benutzer eingeloggt ist, sieht er den _Meine ausgeborgten Bücher_ Link in der Seitenleiste und die Liste der Bücher wird wie unten gezeigt angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial beheben hoffen!).

![Bibliothek - von Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die auf eine Modellinstanz durch einen Benutzer mit Berechtigung durchgeführt werden können. Standardmäßig gibt Django `add`, `change` und `delete` Berechtigungen für alle Modelle, die es Benutzern mit den Berechtigungen ermöglichen, die zugehörigen Aktionen über das Admin-Interface durchzuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und sie spezifischen Benutzern zuweisen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Testen auf Berechtigungen in Ansichten und Vorlagen ähnelt dann sehr dem Testen auf den Authentifizierungsstatus (und tatsächlich testet das Testen auf Berechtigungen auch auf Authentifizierung).

### Modelle

Das Definieren von Berechtigungen erfolgt im `class Meta` Abschnitt des Modells, mit dem `permissions` Feld.
Sie können so viele Berechtigungen angeben, wie Sie benötigen, in einem Tupel, wobei jede Berechtigung selbst in einem verschachtelten Tupel enthalten ist, das den Berechtigungsnamen und -anzeigewert enthält.
Zum Beispiel könnten wir eine Berechtigung definieren, um einem Benutzer zu erlauben, zu markieren, dass ein Buch zurückgebracht wurde, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Dann könnten wir die Berechtigung im Admin-Interface einer "Bibliothekar"-Gruppe zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut durchlaufen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Templatevariablen namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer eine bestimmte Berechtigung hat, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden — z. B., `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False` andernfalls. Wir testen die Berechtigung in der Regel mit dem `{% if %}` Tag der Vorlage, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Ansichten

Berechtigungen können in funktionbasierten Ansichten mithilfe des `permission_required` Dekorators oder in einer klassenbasierten Ansicht mithilfe des `PermissionRequiredMixin` getestet werden. Das Muster ist dasselbe wie bei der Login-Authentifizierung, obwohl Sie natürlich möglicherweise mehrere Berechtigungen hinzufügen müssen.

Funktionsbasierter Ansichts-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein permission-required Mixin für klassenbasierte Ansichten.

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
> Es gibt einen kleinen Standardunterschied im obigen Verhalten. Standardmäßig für einen angemeldeten Benutzer mit einer Berechtigungsübertretung:
>
> - `@permission_required` leitet zum Login-Bildschirm weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Forbidden).
>
> Normalerweise möchten Sie das `PermissionRequiredMixin` Verhalten: 403 zurückgeben, wenn ein Benutzer eingeloggt ist, aber nicht die richtige Berechtigung hat. Um dies für eine Funktionsansicht zu tun, verwenden Sie `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

## Stellen Sie sich der Herausforderung

Früher in diesem Artikel haben wir Ihnen gezeigt, wie man eine Seite für den aktuellen Benutzer erstellt, die die Bücher auflistet, die er ausgeliehen hat.
Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist, die _alle_ ausgeliehenen Bücher anzeigt und den Namen jedes Entleihers enthält.

Sie sollten dasselbe Muster wie bei der anderen Ansicht folgen können. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktion-Dekorator: `staff_member_required`, Templatevariable: `user.is_staff`), aber wir empfehlen Ihnen stattdessen, die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für Berechtigungstests zu verwenden (Berechtigungsprüfungen geben für Superuser immer true zurück, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![Alle ausgeliehenen Bücher, auf Bibliothekar beschränkt](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder einloggen und ihre eigenen Inhalte anzeigen können, und auf denen Bibliothekare (mit der richtigen Berechtigungen) alle ausgeliehenen Bücher und deren Entleiher anzeigen können. Im Moment betrachten wir immer noch nur Inhalte, aber dieselben Prinzipien und Techniken werden verwendet, wenn Sie anfangen möchten, Daten zu ändern und hinzuzufügen.

In unserem nächsten Artikel werden wir uns ansehen, wie Sie Django-Formulare verwenden können, um Benutzereingaben zu sammeln und dann einige unserer gespeicherten Daten zu ändern.

## Siehe auch

- [Benutzer-Authentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Verwendung des (Standard) Django-Authentifizierungssystems](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
