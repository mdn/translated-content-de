---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
short-title: "8: Authentifizierung und Berechtigungen"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: 890c742e4a716e146902c37ca153d7bb27db9bb1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit eigenen Konten auf Ihrer Website anzumelden, und wie Sie anhand ihres Anmeldestatus und ihrer _Berechtigungen_ steuern, was sie tun und sehen können. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) um Seiten für die Anmeldung und Abmeldung sowie um benutzer- und mitarbeiterspezifische Seiten zur Anzeige ausgeliehener Bücher.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Tutorial-Teile bis einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django-Tutorial Teil 7: Das Sessions-Framework</a>.
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

Django stellt ein System für Authentifizierung und Autorisierung („Berechtigungen“) bereit, das auf dem im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions) behandelten Sessions-Framework aufbaut. Damit können Sie Anmeldedaten überprüfen und festlegen, welche Aktionen einzelne Benutzer ausführen dürfen. Das Framework umfasst integrierte Modelle für `Users` und `Groups` (eine allgemeine Möglichkeit, Berechtigungen mehreren Benutzern gleichzeitig zuzuweisen), Berechtigungen und Kennzeichnungen, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Forms und Views für die Anmeldung sowie Werkzeuge für Views, mit denen sich der Zugriff auf Inhalte einschränken lässt.

> [!NOTE]
> Laut Django soll das Authentifizierungssystem sehr allgemein einsetzbar sein. Deshalb bietet es einige Funktionen nicht, die in anderen Web-Authentifizierungssystemen vorhanden sind. Lösungen für einige häufige Anforderungen sind als Pakete von Drittanbietern verfügbar, beispielsweise die {{Glossary("throttle", "Begrenzung")}} von Anmeldeversuchen und die Authentifizierung über Drittanbieter (z. B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) aktivieren, eigene Seiten für die Anmeldung und Abmeldung erstellen, Ihren Modellen Berechtigungen hinzufügen und den Zugriff auf Seiten steuern. Mithilfe der Authentifizierung und Berechtigungen zeigen wir sowohl Benutzern als auch Bibliothekspersonal Listen ausgeliehener Bücher an.

Das Authentifizierungssystem ist sehr flexibel. Sie können URLs, Forms, Views und Templates bei Bedarf von Grund auf selbst erstellen und zum Anmelden lediglich die bereitgestellte API aufrufen. In diesem Artikel verwenden wir jedoch Djangos mitgelieferte Authentifizierungs-Views und -Forms für die Anmelde- und Abmeldeseiten. Einige Templates müssen wir weiterhin selbst erstellen, aber das ist recht einfach.

Außerdem zeigen wir Ihnen, wie Sie Berechtigungen erstellen und den Anmeldestatus sowie Berechtigungen sowohl in Views als auch in Templates prüfen.

## Authentifizierung aktivieren

Die Authentifizierung wurde automatisch aktiviert, als wir in Tutorial 2 die [Grundstruktur der Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Sie müssen an dieser Stelle also nichts weiter tun.

> [!NOTE]
> Die erforderliche Konfiguration wurde beim Erstellen des Projekts mit dem Befehl `django-admin startproject` vorgenommen. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden beim ersten Aufruf von `python manage.py migrate` erstellt.

Die Konfiguration befindet sich in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**/locallibrary/settings.py**), wie unten gezeigt:

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

Ihren ersten Benutzer haben Sie bereits erstellt, als wir uns in Tutorial 4 die [Django-Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) angesehen haben. Dabei handelte es sich um einen Superuser, den Sie mit `python manage.py createsuperuser` erstellt haben.
Unser Superuser ist bereits authentifiziert und verfügt über alle Berechtigungen. Deshalb erstellen wir einen Testbenutzer, der einen gewöhnlichen Benutzer der Website repräsentiert. Zum Erstellen der _locallibrary_-Gruppen und der Benutzerkonten verwenden wir die Admin-Website, da dies besonders schnell geht.

> [!NOTE]
> Sie können Benutzer auch programmatisch erstellen, wie unten gezeigt.
> Das wäre beispielsweise nötig, wenn Sie eine Oberfläche entwickeln, über die „gewöhnliche“ Benutzer eigene Konten erstellen können. Den meisten Benutzern sollten Sie keinen Zugriff auf die Admin-Website geben.
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
> Überlegen Sie für Ihre eigenen Projekte, ob Sie ein [benutzerdefiniertes Benutzermodell](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/#substituting-a-custom-user-model) einrichten sollten.
> Solche Modelle ermöglichen mehr Anpassungen und lassen sich vor der ersten Migration einfacher einrichten, sind aber nicht in allen Fällen geeignet.
> Wenn Sie ein benutzerdefiniertes Benutzermodell verwenden, würde der Code zum Erstellen desselben Benutzers so aussehen:
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
> Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Benutzermodell beim Start eines Projekts verwenden](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) in der Django-Dokumentation.

Im Folgenden erstellen wir zuerst eine Gruppe und dann einen Benutzer. Derzeit haben wir noch keine Berechtigungen, die wir unseren Bibliotheksmitgliedern zuweisen könnten. Falls wir später welche benötigen, ist es jedoch wesentlich einfacher, sie einmalig der Gruppe statt jedem Mitglied einzeln zuzuweisen.

Starten Sie den Entwicklungsserver und rufen Sie in Ihrem lokalen Webbrowser die Admin-Website unter `http://127.0.0.1:8000/admin/` auf. Melden Sie sich mit den Zugangsdaten Ihres Superuser-Kontos an. Auf der obersten Ebene der Admin-Website werden alle Ihre Modelle nach „Django-Anwendung“ sortiert angezeigt. Im Abschnitt **Authentication and Authorization** können Sie auf **Users** oder **Groups** klicken, um die vorhandenen Einträge anzuzeigen.

![Admin-Website – Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstellen wir zuerst eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie neben „Group“ auf **Add**, um eine neue _Group_ zu erstellen. Geben Sie als **Name** der Gruppe „Library Members“ ein.
   ![Admin-Website – Gruppe hinzufügen](admin_authentication_add_group.png)
2. Die Gruppe benötigt noch keine Berechtigungen. Klicken Sie daher einfach auf **SAVE**. Anschließend gelangen Sie zur Gruppenliste.

Erstellen wir nun einen Benutzer:

1. Kehren Sie zur Startseite der Admin-Website zurück.
2. Klicken Sie neben _Users_ auf **Add**, um den Dialog _Add user_ zu öffnen.
   ![Admin-Website – Benutzer hinzufügen, Teil 1](admin_authentication_add_user_prt1.png)
3. Geben Sie für Ihren Testbenutzer einen geeigneten **Username** sowie ein **Password** und eine **Password confirmation** ein.
4. Klicken Sie auf **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Website erstellt den neuen Benutzer und öffnet unmittelbar danach die Seite _Change user_. Dort können Sie den **Username** ändern und die optionalen Felder des User-Modells ausfüllen. Dazu gehören Vorname, Nachname, E-Mail-Adresse sowie Status und Berechtigungen des Benutzers. Von den Statusoptionen sollte nur **Active** aktiviert sein. Weiter unten können Sie Gruppen und Berechtigungen des Benutzers festlegen und wichtige Daten einsehen, etwa das Beitrittsdatum und das Datum der letzten Anmeldung.
   ![Admin-Website – Benutzer hinzufügen, Teil 2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste _Available groups_ aus. Klicken Sie dann auf den **Pfeil nach rechts** zwischen den Feldern, um sie in das Feld _Chosen groups_ zu verschieben.
   ![Admin-Website – Benutzer einer Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Hier ist nichts Weiteres erforderlich. Klicken Sie erneut auf **SAVE**, um zur Benutzerliste zu gelangen.

Das war’s! Sie haben jetzt ein Konto für ein „gewöhnliches Bibliotheksmitglied“, das Sie für Tests verwenden können, sobald wir die Anmeldeseiten implementiert haben.

> [!NOTE]
> Versuchen Sie auch, ein weiteres Bibliotheksmitglied zu erstellen. Erstellen Sie außerdem eine Gruppe für Bibliothekspersonal und fügen Sie ihr ebenfalls einen Benutzer hinzu!

## Authentifizierungs-Views einrichten

Django bietet fast alles, was Sie benötigen, um Seiten für Anmeldung, Abmeldung und Passwortverwaltung zu erstellen. Dazu gehören URL-Zuordnungen, Views und Forms, aber keine Templates – diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die Website _LocalLibrary_ integrieren und die Templates erstellen.

> [!NOTE]
> Django enthält keinen integrierten Authentifizierungs-View für die erstmalige Registrierung von Benutzern.
> Bei Bedarf können Sie selbst einen erstellen. In diesem Tutorial gehen wir jedoch davon aus, dass nur Bibliothekspersonal Benutzer registrieren darf und dafür die Django-Admin-Oberfläche verwendet.

> [!NOTE]
> Sie müssen diesen Code nicht verwenden. Wahrscheinlich möchten Sie das aber tun, weil er vieles erheblich vereinfacht.
> Wenn Sie Ihr Benutzermodell ändern, müssen Sie den Code zur Verarbeitung der Forms mit großer Wahrscheinlichkeit anpassen. Die mitgelieferten View-Funktionen können Sie dennoch weiterhin verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten einschließlich ihrer URLs und Templates durchaus in unserer catalog-Anwendung unterbringen.
> Bei mehreren Anwendungen wäre es jedoch besser, diese gemeinsam genutzte Anmeldefunktion auszulagern und für die gesamte Website bereitzustellen. Daher zeigen wir hier diesen Ansatz!

### Projekt-URLs

Fügen Sie am Ende der URL-Datei des Projekts (**/locallibrary/urls.py**) Folgendes hinzu:

```python
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Rufen Sie die URL `http://127.0.0.1:8000/accounts/` auf. Beachten Sie den abschließenden Schrägstrich!
Django zeigt einen Fehler an, weil für diese URL keine Zuordnung gefunden wurde, und listet alle geprüften URLs auf.
Daran können Sie erkennen, welche URLs funktionieren werden, sobald wir die Templates erstellt haben.

> [!NOTE]
> Durch das oben gezeigte Hinzufügen des Pfads `accounts/` werden die folgenden URLs einschließlich ihrer Namen (in eckigen Klammern) hinzugefügt. Die Namen können verwendet werden, um URL-Zuordnungen rückwärts aufzulösen. Sie müssen nichts Weiteres implementieren – die obige URL-Zuordnung ordnet die folgenden URLs automatisch zu.
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

Rufen Sie nun die Anmelde-URL `http://127.0.0.1:8000/accounts/login/` auf. Auch das schlägt fehl. Diesmal weist die Fehlermeldung jedoch darauf hin, dass das erforderliche Template (**registration/login.html**) im Template-Suchpfad fehlt.
Im gelben Bereich oben sehen Sie die folgenden Zeilen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Als Nächstes erstellen wir ein Verzeichnis namens „registration“ für die Templates und fügen darin die Datei **login.html** hinzu.

### Template-Verzeichnis

Die URLs und die damit verbundenen Views, die wir gerade hinzugefügt haben, erwarten ihre Templates in einem Verzeichnis **/registration/** innerhalb des Template-Suchpfads.

Für diese Website legen wir unsere HTML-Seiten im Verzeichnis **templates/registration/** ab. Dieses Verzeichnis muss sich im Stammverzeichnis Ihres Projekts befinden, also auf derselben Ebene wie die Ordner **catalog** und **locallibrary**. Erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte nun wie folgt aussehen:
>
> ```plain
> django_local_library/   # Django top level project folder
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Damit der Template-Loader das Verzeichnis **templates** findet, müssen wir es zum Template-Suchpfad hinzufügen.
Öffnen Sie die Projekteinstellungen (**/locallibrary/settings.py**) und aktualisieren Sie im Abschnitt `TEMPLATES` die Zeile `'DIRS'` wie gezeigt:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [BASE_DIR / 'templates'],
       'APP_DIRS': True,
       # …
```

### Anmelde-Template

> [!WARNING]
> Die Authentifizierungs-Templates in diesem Artikel sind sehr einfache, leicht angepasste Versionen der Django-Demonstrations-Templates für die Anmeldung. Möglicherweise müssen Sie sie für Ihre Zwecke anpassen!

Erstellen Sie eine neue HTML-Datei namens **/templates/registration/login.html** mit folgendem Inhalt:

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

Dieses Template ähnelt in einigen Punkten den Templates, die wir bereits kennengelernt haben: Es erweitert unser Basis-Template und überschreibt den Block `content`. Der übrige Code verarbeitet Forms auf recht übliche Weise; darauf gehen wir in einem späteren Tutorial ein. Für den Moment müssen Sie nur wissen, dass damit ein Formular angezeigt wird, in das Sie Ihren Benutzernamen und Ihr Passwort eingeben können. Wenn Sie ungültige Werte eingeben, werden Sie nach dem Neuladen der Seite aufgefordert, gültige Werte einzugeben.

Nachdem Sie das Template gespeichert haben, rufen Sie erneut die Anmeldeseite unter `http://127.0.0.1:8000/accounts/login/` auf. Sie sollte ungefähr so aussehen:

![Anmeldeseite der Bibliothek, Version 1](library_login.png)

Wenn Sie sich mit gültigen Zugangsdaten anmelden, werden Sie auf eine andere Seite weitergeleitet – standardmäßig auf `http://127.0.0.1:8000/accounts/profile/`. Das Problem ist, dass Django standardmäßig annimmt, dass Sie nach der Anmeldung eine Profilseite aufrufen möchten. Das muss nicht unbedingt Ihren Anforderungen entsprechen. Da Sie diese Seite noch nicht definiert haben, erscheint ein weiterer Fehler!

Öffnen Sie die Projekteinstellungen (**/locallibrary/settings.py**) und fügen Sie den folgenden Text am Ende der Datei hinzu. Nach der Anmeldung werden Sie dann standardmäßig zur Startseite der Website weitergeleitet.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmelde-Template

Wenn Sie die Abmelde-URL `http://127.0.0.1:8000/accounts/logout/` aufrufen, erhalten Sie einen Fehler: Django erlaubt die Abmeldung nicht per `GET`, sondern nur per `POST`.
Gleich fügen wir ein Formular zum Abmelden hinzu. Zuerst erstellen wir jedoch die Seite, auf die Benutzer nach der Abmeldung gelangen.

Erstellen und öffnen Sie **/templates/registration/logged_out.html**. Fügen Sie den folgenden Text ein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Dieses Template ist sehr einfach. Es zeigt lediglich eine Nachricht an, dass Sie abgemeldet wurden, und enthält einen Link zurück zur Anmeldeseite. Nach der Abmeldung sieht die Seite so aus:

![Abmeldeseite der Bibliothek, Version 1](library_logout.png)

### Templates zum Zurücksetzen des Passworts

Das standardmäßige System zum Zurücksetzen von Passwörtern sendet dem Benutzer per E-Mail einen Link zum Zurücksetzen. Sie müssen Forms erstellen, um die E-Mail-Adresse des Benutzers abzufragen, die E-Mail zu versenden, die Eingabe eines neuen Passworts zu ermöglichen und den Abschluss des Vorgangs anzuzeigen.

Die folgenden Templates können Sie als Ausgangspunkt verwenden.

#### Formular zum Zurücksetzen des Passworts

Mit diesem Formular wird die E-Mail-Adresse des Benutzers erfasst, an die die E-Mail zum Zurücksetzen des Passworts gesendet wird. Erstellen Sie **/templates/registration/password_reset_form.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
    {% csrf_token %}
    \{{ form }}
    <input type="submit" class="btn btn-primary btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Bestätigung der Anfrage zum Zurücksetzen des Passworts

Diese Seite wird angezeigt, nachdem Ihre E-Mail-Adresse erfasst wurde. Erstellen Sie **/templates/registration/password_reset_done.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### E-Mail zum Zurücksetzen des Passworts

Dieses Template enthält den Text der HTML-E-Mail mit dem Link zum Zurücksetzen des Passworts, die wir an Benutzer senden. Erstellen Sie **/templates/registration/password_reset_email.html** mit folgendem Inhalt:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Neues Passwort bestätigen

Auf dieser Seite geben Sie Ihr neues Passwort ein, nachdem Sie auf den Link in der E-Mail zum Zurücksetzen des Passworts geklickt haben. Erstellen Sie **/templates/registration/password_reset_confirm.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
            {% csrf_token %}
            \{{ form }}
            <input type="submit" value="Change my password">
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}
{% endblock %}
```

#### Zurücksetzen des Passworts abgeschlossen

Dies ist das letzte Template für das Zurücksetzen des Passworts. Es wird angezeigt, wenn das Passwort erfolgreich zurückgesetzt wurde. Erstellen Sie **/templates/registration/password_reset_complete.html** mit folgendem Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Die neuen Authentifizierungsseiten testen

Nachdem Sie die URL-Konfiguration hinzugefügt und alle diese Templates erstellt haben, sollten die Authentifizierungsseiten – mit Ausnahme der Abmeldung – funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zunächst versuchen, sich über `http://127.0.0.1:8000/accounts/login/` mit Ihrem Superuser-Konto anzumelden.
Über den Link auf der Anmeldeseite können Sie auch das Zurücksetzen des Passworts testen. **Beachten Sie, dass Django E-Mails zum Zurücksetzen nur an Adressen von Benutzern sendet, die bereits in der Datenbank gespeichert sind!**

Die Abmeldung können Sie noch nicht testen, da Abmeldeanfragen als `POST`- und nicht als `GET`-Anfragen gesendet werden müssen.

> [!NOTE]
> Damit das System zum Zurücksetzen des Passworts funktioniert, muss Ihre Website E-Mails unterstützen. Das einzurichten, liegt außerhalb des Umfangs dieses Artikels.
> Für Tests enthält die von `startproject` erstellte Einstellungsdatei bereits die folgende Konfiguration. Damit werden gesendete E-Mails in der Konsole ausgegeben, sodass Sie den Link zum Zurücksetzen des Passworts daraus kopieren können:
>
> ```python
> MAILERS = {
>     'default': {
>         'BACKEND': 'django.core.mail.backends.console.EmailBackend',
>     },
> }
> ```
>
> Weitere Informationen finden Sie unter [E-Mails versenden](https://docs.djangoproject.com/en/6.1/topics/email/) in der Django-Dokumentation.

## Authentifizierte Benutzer prüfen

In diesem Abschnitt sehen wir uns an, wie Sie die angezeigten Inhalte davon abhängig machen können, ob ein Benutzer angemeldet ist.

### Prüfung in Templates

In Templates können Sie über die Template-Variable `\{{ user }}` auf Informationen zum aktuell angemeldeten Benutzer zugreifen. Diese Variable wird dem Template-Kontext standardmäßig hinzugefügt, wenn Sie das Projekt wie in unserer Grundstruktur einrichten.

Üblicherweise prüfen Sie zunächst die Template-Variable `\{{ user.is_authenticated }}`, um festzustellen, ob der Benutzer bestimmte Inhalte sehen darf. Zur Veranschaulichung passen wir als Nächstes die Seitenleiste an: Ist der Benutzer abgemeldet, soll ein Link zur Anmeldung erscheinen; ist er angemeldet, ein Link zur Abmeldung.

Öffnen Sie das Basis-Template (**/catalog/templates/base_generic.html**) und fügen Sie die folgende neue Liste im Block `sidebar` direkt nach der vorhandenen Liste `<ul class="sidebar-nav">` ein:

```django
  <ul class="sidebar-nav">
    …
  </ul>

  <ul class="sidebar-nav">
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
  </ul>
```

Wie Sie sehen, verwenden wir die Template-Tags `if` / `else` / `endif`, um Text abhängig davon anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass ein gültiger Benutzer vorliegt. Deshalb können wir seinen Namen mit `\{{ user.get_username }}` anzeigen.

Wir erstellen die URL des Anmeldelinks mit dem Template-Tag `url` und dem Namen `login` aus der URL-Konfiguration. Beachten Sie auch, dass wir `?next=\{{ request.path }}` an die URL angehängt haben. Dadurch wird am Ende der verlinkten URL der URL-Parameter `next` ergänzt, der die Adresse der _aktuellen_ Seite enthält. Nach erfolgreicher Anmeldung verwendet der View diesen `next`-Wert, um den Benutzer zu der Seite zurückzuleiten, auf der er auf den Anmeldelink geklickt hat.

Der Template-Code für die Abmeldung unterscheidet sich davon, weil in Django eine `POST`-Anfrage an die URL `logout` gesendet werden muss. Dafür verwenden wir ein Formular mit einer Schaltfläche.
Standardmäßig wird diese als Schaltfläche dargestellt. Sie können sie jedoch so gestalten, dass sie wie ein Link aussieht.
In diesem Beispiel verwenden wir _Bootstrap_ und geben der Schaltfläche mit `class="btn btn-link"` das Aussehen eines Links.
Damit der Abmeldelink korrekt neben den anderen Links der Seitenleiste positioniert wird, müssen Sie außerdem die folgenden Styles an **/catalog/static/css/styles.css** anhängen:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie in der Seitenleiste auf die Links zur Anmeldung und Abmeldung klicken.
Sie sollten zu den Anmelde- und Abmeldeseiten gelangen, die Sie oben unter [Template-Verzeichnis](#template-verzeichnis) definiert haben.

### Prüfung in Views

Bei funktionsbasierten Views lässt sich der Zugriff am einfachsten einschränken, indem Sie den Decorator `login_required` auf Ihre View-Funktion anwenden, wie unten gezeigt. Wenn der Benutzer angemeldet ist, wird der View-Code wie gewohnt ausgeführt. Andernfalls wird er zur Anmelde-URL weitergeleitet, die in den Projekteinstellungen (`settings.LOGIN_URL`) definiert ist. Dabei wird der aktuelle absolute Pfad als URL-Parameter `next` übergeben. Nach erfolgreicher Anmeldung kehrt der Benutzer zu dieser Seite zurück – nun authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe auch manuell erreichen, indem Sie `request.user.is_authenticated` prüfen. Der Decorator ist jedoch deutlich bequemer!

Bei klassenbasierten Views ist es ebenso am einfachsten, den Zugriff auf angemeldete Benutzer zu beschränken, indem Sie von `LoginRequiredMixin` ableiten. Dieses Mixin muss in der Liste der Oberklassen vor der eigentlichen View-Klasse stehen.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Das Weiterleitungsverhalten ist genau dasselbe wie beim Decorator `login_required`. Sie können außerdem eine andere Zieladresse für nicht authentifizierte Benutzer (`login_url`) sowie anstelle von `next` einen anderen Namen für den URL-Parameter angeben, der den aktuellen absoluten Pfad enthält (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

> [!NOTE]
> Wenn der Großteil Ihrer Website nur angemeldeten Benutzern zugänglich sein soll, können Sie stattdessen [`LoginRequiredMiddleware`](https://docs.djangoproject.com/en/6.1/ref/middleware/#django.contrib.auth.middleware.LoginRequiredMiddleware) zur Liste `MIDDLEWARE` in Ihren Einstellungen hinzufügen, und zwar nach `AuthenticationMiddleware`.
> Dadurch müssen sich Benutzer standardmäßig für jeden View anmelden. Öffentlich zugängliche Views kennzeichnen Sie dann mit dem Decorator [`login_not_required`](https://docs.djangoproject.com/en/6.1/topics/auth/default/#django.contrib.auth.decorators.login_not_required).
> Für _LocalLibrary_ verwenden wir diese Lösung nicht, weil die meisten Bibliotheks-Views öffentlich zugänglich sein sollen.

Weitere Einzelheiten finden Sie unter [Zugriff auf angemeldete Benutzer beschränken](https://docs.djangoproject.com/en/6.1/topics/auth/default/#limiting-access-to-logged-in-users) in der Django-Dokumentation.

## Beispiel: Die Bücher des aktuellen Benutzers auflisten

Da wir nun wissen, wie sich der Zugriff auf eine Seite auf bestimmte Benutzer beschränken lässt, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider können Benutzer bislang noch keine Bücher ausleihen! Bevor wir die Bücherliste erstellen, erweitern wir daher zunächst das Modell `BookInstance` um die Ausleihe und verwenden anschließend die Django-Admin-Anwendung, um unserem Testbenutzer einige Bücher auszuleihen.

### Modelle

Zuerst müssen wir ermöglichen, dass ein Benutzer eine `BookInstance` ausleiht. Zwar gibt es bereits einen `status` und ein Rückgabedatum `due_back`, aber noch keine Verknüpfung zwischen diesem Modell und einem bestimmten Benutzer. Dafür erstellen wir ein `ForeignKey`-Feld als Eins-zu-viele-Beziehung. Außerdem benötigen wir eine einfache Möglichkeit, zu prüfen, ob die Rückgabe eines ausgeliehenen Buchs überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie `settings` aus `django.conf`. Fügen Sie den Import direkt unter der bisherigen Importzeile am Anfang der Datei ein, damit die Einstellungen für den nachfolgenden Code verfügbar sind:

```python
from django.conf import settings
```

Fügen Sie anschließend dem Modell `BookInstance` das Feld `borrower` hinzu. Verwenden Sie als Benutzermodell für den Schlüssel den Wert der Einstellung `AUTH_USER_MODEL`.
Da wir diese Einstellung nicht durch ein [benutzerdefiniertes Benutzermodell](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/) ersetzt haben, verweist sie auf das Standardmodell `User` aus `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Wenn Sie das Modell auf diese Weise einbinden, ist weniger Arbeit nötig, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> In diesem Tutorial verwenden wir das Standardmodell. Daher könnten Sie `User` alternativ mit den folgenden Zeilen direkt importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Bei dieser Gelegenheit fügen wir eine Eigenschaft hinzu, die wir in unseren Templates aufrufen können, um festzustellen, ob die Rückgabe eines bestimmten Buchexemplars überfällig ist.
Wir könnten das zwar direkt im Template berechnen, eine [Eigenschaft](https://docs.python.org/3/builtins/functions.html#property) wie unten gezeigt ist jedoch wesentlich effizienter.

Fügen Sie Folgendes an einer Stelle nahe dem Anfang der Datei ein:

```python
from datetime import date
```

Fügen Sie nun der Klasse `BookInstance` die folgende Eigenschaftsdefinition hinzu:

> [!NOTE]
> Der folgende Code verwendet die Python-Funktion `bool()`. Sie wertet ein Objekt oder das Ergebnis eines Ausdrucks aus und gibt `True` zurück, sofern das Ergebnis nicht „falsy“ ist. In diesem Fall gibt sie `False` zurück.
> In Python ist ein Objekt _falsy_ – wird also als `False` ausgewertet –, wenn es leer ist (wie `[]`, `()` oder `{}`) oder wenn es sich um `0`, `None` oder `False` handelt.

```python
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Vor dem Vergleich prüfen wir zunächst, ob `due_back` leer ist. Bei einem leeren Feld `due_back` würde Django sonst einen Fehler auslösen, statt die Seite anzuzeigen: Leere Werte lassen sich nicht vergleichen. Das möchten wir unseren Benutzern nicht zumuten!

Nachdem wir unsere Modelle aktualisiert haben, müssen wir neue Migrationen für das Projekt erstellen und anschließend anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das Feld `borrower` in der Klasse `BookInstanceAdmin` sowohl zu `list_display` als auch zu `fieldsets` hinzu, wie unten gezeigt.
Dadurch wird das Feld im Admin-Bereich sichtbar und wir können bei Bedarf einer `BookInstance` einen `User` zuweisen.

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

Da Bücher nun einem bestimmten Benutzer ausgeliehen werden können, verleihen Sie einige `BookInstance`-Einträge. Setzen Sie ihr Feld `borrower` auf Ihren Testbenutzer, ihren `status` auf „On loan“ und legen Sie sowohl zukünftige als auch bereits vergangene Rückgabedaten fest.

> [!NOTE]
> Wir beschreiben die einzelnen Schritte nicht, da Sie die Admin-Website bereits bedienen können!

### View für ausgeliehene Bücher

Nun fügen wir einen View hinzu, der alle an den aktuellen Benutzer ausgeliehenen Bücher auflistet. Wir verwenden den bereits bekannten generischen klassenbasierten Listen-View. Diesmal importieren wir zusätzlich `LoginRequiredMixin` und leiten davon ab, sodass nur angemeldete Benutzer den View aufrufen können. Außerdem geben wir `template_name` ausdrücklich an, statt den Standardwert zu verwenden: Möglicherweise werden wir später mehrere Listen von BookInstance-Einträgen mit unterschiedlichen Views und Templates benötigen.

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
            .filter(status__exact=BookInstance.LoanStatus.ON_LOAN)
            .order_by('due_back')
        )
```

Damit unsere Abfrage nur die `BookInstance`-Objekte des aktuellen Benutzers zurückgibt, implementieren wir `get_queryset()` wie oben gezeigt neu. Beachten Sie, dass `BookInstance.LoanStatus.ON_LOAN` der gespeicherte Code für „on loan“ ist. Wir sortieren nach dem Rückgabedatum `due_back`, sodass die ältesten Einträge zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf den obigen View verweist. Sie können den folgenden Text einfach ans Ende der Datei kopieren.

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template für ausgeliehene Bücher

Für diese Seite fehlt jetzt nur noch ein Template. Erstellen Sie zunächst die Template-Datei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** mit folgendem Inhalt:

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
Neu ist lediglich, dass wir die dem Modell hinzugefügte Eigenschaft (`bookinst.is_overdue`) prüfen und damit die Farbe überfälliger Einträge ändern.

Wenn der Entwicklungsserver läuft, sollten Sie die Liste für einen angemeldeten Benutzer nun im Browser unter `http://127.0.0.1:8000/catalog/mybooks/` aufrufen können. Probieren Sie das sowohl im angemeldeten als auch im abgemeldeten Zustand aus. Im zweiten Fall sollten Sie zur Anmeldeseite weitergeleitet werden.

### Die Liste zur Seitenleiste hinzufügen

Zum Schluss fügen wir in der Seitenleiste einen Link zu dieser neuen Seite hinzu. Wir platzieren ihn in demselben Abschnitt, in dem wir andere Informationen für angemeldete Benutzer anzeigen.

Öffnen Sie das Basis-Template (**/catalog/templates/base_generic.html**) und fügen Sie die Zeile „My borrowed“ an der unten gezeigten Stelle in die Seitenleiste ein.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">My borrowed</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'logout' %}">
       {% csrf_token %}
       <button type="submit" class="btn btn-link">Logout</button>
     </form>
   </li>
   {% else %}
   <li><a href="{% url 'login' %}?next=\{{ request.path }}">Login</a></li>
   {% endif %}
 </ul>
```

### Wie sieht das Ergebnis aus?

Angemeldete Benutzer sehen nun den Link _My borrowed_ in der Seitenleiste und eine Bücherliste wie unten gezeigt. Für das erste Buch ist kein Rückgabedatum eingetragen – ein Fehler, den wir hoffentlich in einem späteren Tutorial beheben!

![Bibliothek – von einem Benutzer ausgeliehene Bücher](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind Modellen zugeordnet und legen fest, welche Aktionen ein Benutzer mit der entsprechenden Berechtigung an einer Modellinstanz ausführen darf. Standardmäßig erstellt Django für alle Modelle automatisch Berechtigungen zum _Hinzufügen_, _Ändern_ und _Löschen_. Benutzer mit diesen Berechtigungen können die entsprechenden Aktionen über die Admin-Website ausführen. Sie können eigene Berechtigungen für Modelle definieren und bestimmten Benutzern zuweisen. Auch die Berechtigungen für verschiedene Instanzen desselben Modells lassen sich unterschiedlich festlegen.

Berechtigungen in Views und Templates zu prüfen, funktioniert dann ganz ähnlich wie die Prüfung des Authentifizierungsstatus. Tatsächlich wird bei der Prüfung einer Berechtigung auch die Authentifizierung geprüft.

### Modelle

Berechtigungen definieren Sie im Abschnitt `class Meta` des Modells über das Feld `permissions`.
Sie können in einem Tupel beliebig viele Berechtigungen angeben. Jede Berechtigung wird wiederum durch ein verschachteltes Tupel aus Berechtigungsname und angezeigter Bezeichnung definiert.
So könnten wir beispielsweise wie gezeigt eine Berechtigung definieren, mit der ein Benutzer ein Buch als zurückgegeben markieren darf:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Diese Berechtigung könnten wir anschließend auf der Admin-Website einer Gruppe „Librarian“ zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Anschließend müssen Sie die Migrationen erneut ausführen (`python3 manage.py makemigrations` und `python3 manage.py migrate`), damit die Datenbank entsprechend aktualisiert wird.

### Templates

Die Berechtigungen des aktuellen Benutzers stehen in der Template-Variable `\{{ perms }}`. Ob der aktuelle Benutzer eine bestimmte Berechtigung hat, können Sie über den entsprechenden Variablennamen innerhalb der zugehörigen Django-„App“ prüfen. Beispielsweise ist `\{{ perms.catalog.can_mark_returned }}` `True`, wenn der Benutzer diese Berechtigung besitzt, andernfalls `False`. Üblicherweise prüfen wir Berechtigungen mit dem Template-Tag `{% if %}`, wie hier gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

In funktionsbasierten Views können Sie Berechtigungen mit dem Decorator `permission_required` prüfen, in klassenbasierten Views mit `PermissionRequiredMixin`. Das Vorgehen entspricht der Prüfung bei der Anmeldung. Gegebenenfalls müssen Sie allerdings mehrere Berechtigungen hinzufügen.

Decorator für einen funktionsbasierten View:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Mixin für klassenbasierte Views, das eine Berechtigung voraussetzt:

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
> Das oben gezeigte Verhalten unterscheidet sich standardmäßig geringfügig. Wenn ein angemeldeter Benutzer nicht über die erforderliche Berechtigung verfügt, gilt **standardmäßig**:
>
> - `@permission_required` leitet zur Anmeldeseite weiter (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status „Forbidden“).
>
> Normalerweise ist das Verhalten von `PermissionRequiredMixin` erwünscht: Wenn ein Benutzer angemeldet ist, aber nicht die erforderliche Berechtigung besitzt, soll 403 zurückgegeben werden. Für einen funktionsbasierten View erreichen Sie dies, indem Sie `@login_required` und `@permission_required` mit `raise_exception=True` verwenden:
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

Wir werden _LocalLibrary_ an dieser Stelle nicht weiter anpassen – vielleicht im nächsten Tutorial!

## Probieren Sie es selbst

Weiter oben in diesem Artikel haben wir gezeigt, wie Sie eine Seite erstellen, auf der die vom aktuellen Benutzer ausgeliehenen Bücher aufgelistet sind.
Ihre Aufgabe ist nun, eine ähnliche Seite zu erstellen, die nur für Bibliothekspersonal sichtbar ist, _alle_ ausgeliehenen Bücher anzeigt und zu jedem Buch den Namen der ausleihenden Person enthält.

Sie können dabei demselben Muster wie beim anderen View folgen. Der wesentliche Unterschied besteht darin, dass Sie den Zugriff auf Bibliothekspersonal beschränken müssen. Dafür könnten Sie prüfen, ob der Benutzer Mitarbeiter ist (Decorator für Funktionen: `staff_member_required`, Template-Variable: `user.is_staff`). Wir empfehlen jedoch, stattdessen die Berechtigung `can_mark_returned` und `PermissionRequiredMixin` zu verwenden, wie im vorherigen Abschnitt beschrieben.

> [!WARNING]
> Verwenden Sie für berechtigungsbasierte Tests nicht Ihren Superuser. Berechtigungsprüfungen liefern für Superuser immer „wahr“ zurück, selbst wenn eine Berechtigung noch gar nicht definiert wurde! Erstellen Sie stattdessen einen Benutzer für das Bibliothekspersonal und weisen Sie ihm die erforderliche Berechtigung zu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![Alle ausgeliehenen Bücher – Zugriff auf Bibliothekspersonal beschränkt](library_borrowed_all.png)

## Zusammenfassung

Sehr gut – Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte ansehen können. Bibliothekspersonal mit der entsprechenden Berechtigung kann zudem alle ausgeliehenen Bücher und die Personen sehen, die sie ausgeliehen haben. Derzeit zeigen wir Inhalte nur an. Wenn Sie später Daten ändern oder hinzufügen möchten, verwenden Sie jedoch dieselben Grundsätze und Techniken.

Im nächsten Artikel sehen wir uns an, wie Sie mit Django-Forms Benutzereingaben erfassen und anschließend einige unserer gespeicherten Daten ändern können.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/6.1/topics/auth/) (Django-Dokumentation)
- [Das (standardmäßige) Authentifizierungssystem von Django verwenden](https://docs.djangoproject.com/en/6.1/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Views > Klassenbasierte Views mit Decorators versehen](https://docs.djangoproject.com/en/6.1/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
