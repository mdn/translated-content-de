---
title: "Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen"
slug: Learn/Server-side/Django/Authentication
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie kontrollieren können, was sie basierend auf ihrem Anmeldestatus und ihren _Berechtigungen_ tun und sehen können. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erweitern, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten für die Anzeige entliehener Bücher hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen bis einschließlich <a href="/de/docs/Learn/Server-side/Django/Sessions">Django-Tutorial Teil 7: Session-Framework</a> ab.
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

Django bietet ein Authentifizierungs- und Autorisierungssystem ("Berechtigung"), das auf dem im [vorherigen Tutorial](/de/docs/Learn/Server-side/Django/Sessions) diskutierten Sitzungs-Framework basiert. Es ermöglicht Ihnen, Benutzeranmeldeinformationen zu überprüfen und zu definieren, welche Aktionen jeder Benutzer ausführen darf. Das Framework umfasst integrierte Modelle für `Users` und `Groups` (eine generische Methode, um Berechtigungen mehr als einem Benutzer gleichzeitig zuzuweisen), Berechtigungen/Flags, die festlegen, ob ein Benutzer eine Aufgabe ausführen darf, Formulare und Ansichten zum Anmelden von Benutzern sowie Werkzeuge zur Einschränkung von Inhalten in Ansichten.

> [!NOTE]
> Laut Django zielt das Authentifizierungssystem darauf ab, sehr generisch zu sein und bietet daher einige Funktionen, die in anderen Web-Authentifizierungssystemen vorhanden sind, nicht an. Lösungen für einige häufige Probleme sind als Drittanbieterpakete verfügbar. Beispielsweise {{glossary("throttle", "Throttling")}} von Anmeldeversuchen und Authentifizierung gegen Dritte (z.B. OAuth).

In diesem Tutorial zeigen wir Ihnen, wie Sie die Benutzerauthentifizierung auf der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website aktivieren, Ihre eigenen Anmelde- und Abmeldeseiten erstellen, Berechtigungen zu Ihren Modellen hinzufügen und den Zugriff auf Seiten kontrollieren. Wir verwenden die Authentifizierung/Berechtigungen, um Listen von geborgten Büchern sowohl für Benutzer als auch für Bibliothekare anzuzeigen.

Das Authentifizierungssystem ist sehr flexibel und Sie können Ihre URLs, Formulare, Ansichten und Vorlagen von Grund auf neu erstellen, wenn Sie möchten, und nur die bereitgestellte API zum Anmelden des Benutzers aufrufen. In diesem Artikel werden wir jedoch die "Standard"-Authentifizierungsseiten und -formulare von Django für unsere Anmelde- und Abmeldeseiten verwenden. Wir müssen immer noch einige Vorlagen erstellen, aber das ist ziemlich einfach.

Wir zeigen Ihnen auch, wie Sie Berechtigungen erstellen und den Anmeldestatus und Berechtigungen sowohl in Ansichten als auch in Vorlagen überprüfen können.

## Aktivierung der Authentifizierung

Die Authentifizierung wurde automatisch aktiviert, als wir die [Grundstruktur der Website](/de/docs/Learn/Server-side/Django/skeleton_website) erstellt haben (im Tutorial 2), sodass Sie an diesem Punkt nichts mehr tun müssen.

> [!NOTE]
> Die notwendige Konfiguration wurde für uns erledigt, als wir die App mit dem Befehl `django-admin startproject` erstellt haben. Die Datenbanktabellen für Benutzer und Modellberechtigungen wurden erstellt, als wir zum ersten Mal `python manage.py migrate` aufgerufen haben.

Die Konfiguration wird in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

```python
INSTALLED_APPS = [
    # …
    'django.contrib.auth',  # Kern-Authentifizierungs-Framework und Standardsmodelle
    'django.contrib.contenttypes',  # Inhaltstyp-System von Django (ermöglicht die Zuordnung von Berechtigungen zu Modellen)
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',  # Verwalten von Sitzungen über Anfragen hinweg
    # …
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Verknüpfen von Benutzern mit Anfragen mittels Sitzungen
    # …
```

## Erstellen von Benutzern und Gruppen

Den ersten Benutzer haben Sie bereits erstellt, als wir uns im Tutorial 4 die [Django-Admin-Site](/de/docs/Learn/Server-side/Django/Admin_site) angesehen haben (dies war ein Superuser, erstellt mit dem Befehl `python manage.py createsuperuser`). Unser Superuser ist bereits authentifiziert und verfügt über alle Berechtigungen, daher müssen wir einen Testbenutzer erstellen, der einen normalen Website-Benutzer darstellt. Wir werden die Admin-Seite verwenden, um unsere _locallibrary_-Gruppen und Website-Anmeldungen zu erstellen, da dies eine der schnellsten Methoden ist.

> [!NOTE]
> Sie können Benutzer auch programmgesteuert erstellen, wie unten gezeigt. Sie müssten dies z.B. tun, wenn Sie eine Schnittstelle entwickeln, die es „normalen“ Benutzern ermöglicht, ihre eigenen Anmeldungen zu erstellen (Sie sollten den meisten Benutzern keinen Zugriff auf die Admin-Site gewähren).
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
> Beachten Sie jedoch, dass dringend empfohlen wird, beim Start eines Projekts ein _benutzerdefiniertes Benutzer-Modell_ einzurichten, da Sie es in Zukunft leicht anpassen können, wenn dies erforderlich ist. Wenn Sie ein benutzerdefiniertes Benutzer-Modell verwenden, sieht der Code zum Erstellen desselben Benutzers folgendermaßen aus:
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
> Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Benutzer-Modell verwenden, wenn ein Projekt gestartet wird](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django-Dokumentation).

Unten erstellen wir zuerst eine Gruppe und dann einen Benutzer. Auch wenn wir noch keine Berechtigungen für unsere Bibliotheksmitglieder hinzufügen müssen, wird das Hinzufügen von Berechtigungen zur Gruppe später viel einfacher, als sie jedem Mitglied einzeln hinzuzufügen.

Starten Sie den Entwicklungsserver und navigieren Sie zur Admin-Seite in Ihrem lokalen Webbrowser (`http://127.0.0.1:8000/admin/`). Melden Sie sich mit den Anmeldeinformationen Ihres Superuser-Kontos an. Die oberste Ebene der Admin-Seite zeigt all Ihre Modelle an, sortiert nach "Django-Anwendung". Aus dem Abschnitt **Authentication and Authorization** können Sie auf die Links **Users** oder **Groups** klicken, um deren vorhandene Datensätze anzuzeigen.

![Admin-Seite - Gruppen oder Benutzer hinzufügen](admin_authentication_add.png)

Erstens erstellen wir eine neue Gruppe für unsere Bibliotheksmitglieder.

1. Klicken Sie auf die Schaltfläche **Add** (neben Gruppe), um eine neue _Gruppe_ zu erstellen; geben Sie den **Name** "Library Members" für die Gruppe ein.
   ![Admin-Seite - Gruppe hinzufügen](admin_authentication_add_group.png)
2. Wir benötigen keine Berechtigungen für die Gruppe, daher drücken Sie einfach **SAVE** (Sie werden zu einer Liste von Gruppen weitergeleitet).

Nun erstellen wir einen Benutzer:

1. Gehen Sie zurück zur Startseite der Admin-Seite.
2. Klicken Sie auf die Schaltfläche **Add** neben _Users_, um das Dialogfeld _Add user_ zu öffnen.
   ![Admin-Seite - Benutzer hinzufügen pt1](admin_authentication_add_user_prt1.png)
3. Geben Sie einen geeigneten **Username** und **Password**/**Password confirmation** für Ihren Testbenutzer ein.
4. Drücken Sie **SAVE**, um den Benutzer zu erstellen.

   Die Admin-Seite erstellt den neuen Benutzer und führt Sie sofort zu einem _Change user_-Bildschirm, wo Sie Ihren **Benutzernamen** ändern und Informationen für die optionalen Felder des Benutzer-Modells hinzufügen können. Diese Felder umfassen den Vornamen, den Nachnamen, die E-Mail-Adresse und den Status und die Berechtigungen des Benutzers (nur das **Active**-Flag sollte gesetzt sein). Weiter unten können Sie die Gruppen und Berechtigungen des Benutzers angeben und wichtige Daten im Zusammenhang mit dem Benutzer sehen (z.B. ihr Anmeldedatum und das Datum des letzten Logins).
   ![Admin-Seite - Benutzer hinzufügen pt2](admin_authentication_add_user_prt2.png)

5. Wählen Sie im Abschnitt _Groups_ die Gruppe **Library Member** aus der Liste der _Available groups_ aus und drücken Sie dann den **Pfeil nach rechts** zwischen den Feldern, um sie in das Feld _Chosen groups_ zu verschieben.
   ![Admin-Seite - Benutzer zur Gruppe hinzufügen](admin_authentication_user_add_group.png)
6. Wir müssen hier nichts weiter tun, also wählen Sie einfach erneut **SAVE**, um zur Liste der Benutzer zurückzukehren.

Das war's! Nun haben Sie ein "normales Bibliotheksmitglied"-Konto, das Sie für Tests verwenden können (sobald wir die Seiten implementiert haben, die ihnen die Anmeldung ermöglichen).

> [!NOTE]
> Sie sollten versuchen, einen weiteren Bibliotheksmitglied-Benutzer zu erstellen. Erstellen Sie auch eine Gruppe für Bibliothekare und fügen Sie auch dort einen Benutzer hinzu!

## Einrichten Ihrer Authentifizierungsansichten

Django stellt fast alles bereit, was Sie benötigen, um Authentifizierungsseiten zur Handhabung der Anmeldung, Abmeldung und des Passwortmanagements "out of the box" zu erstellen. Dies umfasst einen URL-Mapper, Ansichten und Formulare, aber es enthält keine Vorlagen — diese müssen wir selbst erstellen!

In diesem Abschnitt zeigen wir, wie Sie das Standardsystem in die _LocalLibrary_ Website integrieren und die Vorlagen erstellen können. Wir werden sie in die Hauptprojekte-URLs einfügen.

> [!NOTE]
> Sie müssen keinen Teil dieses Codes verwenden, aber es ist wahrscheinlich, dass Sie es möchten, da es die Dinge erheblich erleichtert. Sie müssen fast sicher den Formularbehandlungscode ändern, wenn Sie Ihr Benutzermodell ändern, aber selbst dann könnten Sie die Standard-View-Funktionen verwenden.

> [!NOTE]
> In diesem Fall könnten wir die Authentifizierungsseiten, einschließlich der URLs und Vorlagen, vernünftigerweise in unsere Kataloganwendung einfügen. Wenn wir jedoch mehrere Anwendungen hätten, wäre es besser, dieses gemeinsame Anmeldeverhalten zu trennen und es auf der ganzen Website verfügbar zu machen, was wir hier gezeigt haben!

### Projekt-URLs

Fügen Sie das Folgende am Ende der Projektdatei urls.py (**django-locallibrary-tutorial/locallibrary/urls.py**) hinzu:

```python
# Hinzufügen von Django-Site-Authentifizierungs-URLs (für Login, Logout, Passwortmanagement)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navigieren Sie zur URL `http://127.0.0.1:8000/accounts/` (beachten Sie den abschließenden Schrägstrich!).
Django zeigt einen Fehler an, dass es keine Zuordnung für diese URL finden konnte, und listet alle URLs auf, die es versucht hat. Daraus können Sie die URLs sehen, die funktionieren werden, sobald wir Vorlagen erstellt haben.

> [!NOTE]
> Das Hinzufügen des `accounts/`-Pfads wie oben gezeigt fügt die folgenden URLs hinzu, zusammen mit Namen (in eckigen Klammern), die zur Umkehrung der URL-Zuordnungen verwendet werden können. Sie müssen nichts anderes implementieren — die obige URL-Zuordnung ordnet automatisch die unten genannten URLs zu.
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

Versuchen Sie jetzt, zur URL `http://127.0.0.1:8000/accounts/login/` zu navigieren. Dies wird erneut fehlschlagen, aber mit einem Fehler, der Ihnen sagt, dass uns die erforderliche Vorlage (**registration/login.html**) im Vorlagen-Suchpfad fehlt. Sie werden die folgenden Zeilen im gelben Abschnitt oben sehen:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Der nächste Schritt besteht darin, ein Verzeichnis für die Vorlagen mit dem Namen "registration" zu erstellen und dann die Datei **login.html** hinzuzufügen.

### Vorlagenverzeichnis

Die URLs (und implizit, Ansichten), die wir gerade hinzugefügt haben, erwarten, ihre zugehörigen Vorlagen in einem Verzeichnis **/registration/** irgendwo im Vorlagen-Suchpfad zu finden.

Für diese Website werden wir unsere HTML-Seiten im Verzeichnis **templates/registration/** platzieren. Dieses Verzeichnis sollte sich im Stammverzeichnis Ihres Projekts befinden, also im selben Verzeichnis wie die **catalog**- und **locallibrary**-Ordner. Bitte erstellen Sie diese Ordner jetzt.

> [!NOTE]
> Ihre Ordnerstruktur sollte jetzt wie unten aussehen:
>
> ```plain
> django-locallibrary-tutorial/   # Django oberstes Projektverzeichnis
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Um das **templates**-Verzeichnis für den Vorlagenlader sichtbar zu machen, müssen wir es im Vorlagen-Suchpfad hinzufügen. Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Importieren Sie dann das `os`-Modul (fügen Sie die folgende Zeile in der Nähe der oberen Dateizeile hinzu, falls sie noch nicht vorhanden ist).

```python
import os # erforderlich für den folgenden Code
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

### Anmelden-Vorlage

> [!WARNING]
> Die Authentifizierungs-Vorlagen, die in diesem Artikel bereitgestellt werden, sind eine sehr einfache/leicht angepasste Version der Django-Demonstrations-Anmeldevorlagen. Sie müssen sie möglicherweise für Ihren eigenen Gebrauch anpassen!

Erstellen Sie eine neue HTML-Datei namens /**django-locallibrary-tutorial/templates/registration/login.html** und geben Sie ihr folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Ihr Benutzername und Passwort stimmen nicht überein. Bitte versuchen Sie es erneut.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Ihr Konto hat keinen Zugriff auf diese Seite. Um fortzufahren,
      melden Sie sich bitte mit einem Konto an, das Zugriff hat.</p>
    {% else %}
      <p>Bitte melden Sie sich an, um diese Seite zu sehen.</p>
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
    <input type="submit" value="anmelden">
    <input type="hidden" name="next" value="\{{ next }}">
  </form>

  {# Setzt voraus, dass Sie die Passwort-Zurücksetzung-Ansicht in Ihrem URLconf eingerichtet haben #}
  <p><a href="{% url 'password_reset' %}">Passwort vergessen?</a></p>

{% endblock %}
```

Diese Vorlage teilt einige Ähnlichkeiten mit denjenigen, die wir zuvor gesehen haben - sie erweitert unsere Basisvorlage und überschreibt den `content`-Block. Der Rest des Codes ist ein ziemlich standardmäßiger Code zur Formularbehandlung, den wir in einem späteren Tutorial besprechen werden. Alles, was Sie jetzt wissen müssen, ist, dass dies ein Formular anzeigt, in dem Sie Ihren Benutzernamen und Ihr Passwort eingeben können, und dass Sie bei ungültigen Werten aufgefordert werden, die richtigen Werte einzugeben, wenn die Seite aktualisiert wird.

Navigieren Sie zurück zur Anmeldeseite (`http://127.0.0.1:8000/accounts/login/`), sobald Sie Ihre Vorlage gespeichert haben, und Sie sollten etwa Folgendes sehen:

![Bibliotheks-Anmeldeseite v1](library_login.png)

Wenn Sie sich mit gültigen Anmeldeinformationen anmelden, werden Sie auf eine andere Seite umgeleitet (standardmäßig ist dies `http://127.0.0.1:8000/accounts/profile/`). Das Problem ist, dass Django standardmäßig erwartet, dass Sie nach dem Anmelden zu einer Profilseite weitergeleitet werden möchten, was möglicherweise nicht der Fall ist. Da Sie diese Seite noch nicht definiert haben, erhalten Sie einen weiteren Fehler!

Öffnen Sie die Projekteinstellungen (**/django-locallibrary-tutorial/locallibrary/settings.py**) und fügen Sie den unten stehenden Text am Ende hinzu. Jetzt sollten Sie nach dem Anmelden standardmäßig zur Startseite der Website weitergeleitet werden.

```python
# Umleitung zur Start-URL nach der Anmeldung (Standard ist Umleitung zu /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Abmeldungs-Vorlage

Wenn Sie zur URL `http://127.0.0.1:8000/accounts/logout/` navigieren, erhalten Sie aufgrund eines Fehlers, denn Django 5 erlaubt keinen Logout mit `GET`, sondern nur mit `POST`.
Wir werden in eine Minute ein Formular hinzufügen, mit dem Sie sich abmelden können, aber zuerst erstellen wir die Seite, auf die Benutzer nach dem Abmelden weitergeleitet werden.

Erstellen und öffnen Sie **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Kopieren Sie den folgenden Text hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Abgemeldet!</p>
  <a href="{% url 'login'%}">Klicken Sie hier, um sich erneut anzumelden.</a>
{% endblock %}
```

Diese Vorlage ist sehr einfach. Sie zeigt lediglich eine Nachricht an, die Ihnen mitteilt, dass Sie abgemeldet wurden, und bietet einen Link, den Sie drücken können, um zum Anmeldebildschirm zurückzukehren. Der Bildschirm wird wie folgt gerendert (nach dem Abmelden):

![Bibliotheks-Abmeldeseite v1](library_logout.png)

### Passwortrücksetzungs-Vorlagen

Das Standardsystem zur Passwortrücksetzung verwendet E-Mail, um dem Benutzer einen Zurücksetzungslink zu senden. Sie müssen Formulare erstellen, um die E-Mail-Adresse des Benutzers zu erhalten, die E-Mail zu senden, ihnen zu ermöglichen, ein neues Passwort einzugeben, und darauf hinzuweisen, wenn der gesamte Prozess abgeschlossen ist.

Die folgenden Vorlagen können als Ausgangspunkt verwendet werden.

#### Passwort-Zurücksetzungs-Formular

Dies ist das Formular, das verwendet wird, um die E-Mail-Adresse des Benutzers zu erhalten (zum Senden der Passwortrücksetzungs-E-Mail). Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_form.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Passwort zurücksetzen">
  </form>
{% endblock %}
```

#### Passwortrücksetzung fertig

Dieses Formular wird angezeigt, nachdem Ihre E-Mail-Adresse gesammelt wurde. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_done.html** und geben Sie ihm folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Wir haben Ihnen Anweisungen zum Setzen Ihres Passworts per E-Mail gesendet. Falls sie in ein paar Minuten nicht eingetroffen sind, überprüfen Sie bitte Ihren Spam-Ordner.</p>
{% endblock %}
```

#### Passwortrücksetzungs-E-Mail

Diese Vorlage bietet den Text der HTML-E-Mail, die den Zurücksetzungslink enthält, den wir an die Benutzer senden werden. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_email.html** und geben Sie ihm den folgenden Inhalt:

```django
Jemand hat eine Passwortzurücksetzung für die E-Mail \{{ email }} angefordert. Folgen Sie dem unten stehenden Link:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Passwortrücksetzung bestätigen

Diese Seite ist der Ort, an dem Sie Ihr neues Passwort eingeben, nachdem Sie auf den Link in der Passwortrücksetzungs-E-Mail geklickt haben. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Bitte geben Sie (und bestätigen Sie) Ihr neues Passwort ein.</p>
        <form action="" method="post">
        {% csrf_token %}
            <table>
                <tr>
                    <td>\{{ form.new_password1.errors }}
                        <label for="id_new_password1">Neues Passwort:</label></td>
                    <td>\{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>\{{ form.new_password2.errors }}
                        <label for="id_new_password2">Passwort bestätigen:</label></td>
                    <td>\{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Mein Passwort ändern"></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Passwortrücksetzung fehlgeschlagen</h1>
        <p>Der Link zur Passwortrücksetzung war ungültig, möglicherweise weil er bereits verwendet wurde. Bitte fordern Sie eine neue Passwortrücksetzung an.</p>
    {% endif %}
{% endblock %}
```

#### Passwortrücksetzung vollständig

Dies ist die letzte Passwortrücksetzungs-Vorlage, die angezeigt wird, um Sie zu benachrichtigen, wenn die Passwortrücksetzung erfolgreich war. Erstellen Sie **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html** und geben Sie ihm den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Das Passwort wurde geändert!</h1>
  <p><a href="{% url 'login' %}">erneut anmelden?</a></p>
{% endblock %}
```

### Testen der neuen Authentifizierungsseiten

Nachdem Sie die URL-Konfiguration hinzugefügt und all diese Vorlagen erstellt haben, sollten die Authentifizierungsseiten (außer Logout) jetzt einfach funktionieren!

Sie können die neuen Authentifizierungsseiten testen, indem Sie zuerst versuchen, sich mit Ihrem Superuser-Konto über die URL `http://127.0.0.1:8000/accounts/login/` anzumelden. Sie können die Passwortrücksetzungsfunktionalität über den Link auf der Anmeldeseite testen. **Beachten Sie, dass Django Passwortzurücksetzungs-E-Mails nur an Adressen sendet (Benutzer), die bereits in seiner Datenbank gespeichert sind!**

Beachten Sie, dass Sie sich möglicherweise noch nicht abmelden können, da Abmeldeanfragen als `POST` und nicht als `GET` gesendet werden müssen.

> [!NOTE]
> Das Passwortrücksetzungssystem erfordert, dass Ihre Website E-Mail unterstützt, was den Rahmen dieses Artikels überschreitet, sodass dieser Teil **noch nicht funktioniert**. Um das Testen zu ermöglichen, setzen Sie die folgende Zeile am Ende Ihrer settings.py Datei. Dadurch werden alle gesendeten E-Mails an der Konsole protokolliert (so dass Sie den Passwortzurücksetzungslink von der Konsole kopieren können).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Weitere Informationen finden Sie unter [E-Mail senden](https://docs.djangoproject.com/en/5.0/topics/email/) (Django-Dokumentation).

## Testen gegen authentifizierte Benutzer

Dieser Abschnitt behandelt, was wir tun können, um Inhalte, die ein Benutzer sieht, basierend darauf, ob er angemeldet ist oder nicht, selektiv zu kontrollieren.

### Testen in Vorlagen

Sie können Informationen über den derzeit angemeldeten Benutzer in Vorlagen mit der `\{{ user }}` Vorlagenvariable abrufen (dies wird standardmäßig zum Vorlagenkontext hinzugefügt, wenn Sie das Projekt so einrichten, wie wir es in unserem Skeleton gemacht haben).

In der Regel testen Sie zuerst gegen die `\{{ user.is_authenticated }}` Vorlagenvariable, um festzustellen, ob der Benutzer berechtigt ist, bestimmte Inhalte zu sehen. Zur Demonstration werden wir als nächstes unsere Seitenleiste aktualisieren, um einen "Login"-Link anzuzeigen, wenn der Benutzer abgemeldet ist, und einen "Logout"-Link, wenn er angemeldet ist.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und kopieren Sie den folgenden Text in den `sidebar` Block, unmittelbar bevor Sie das `endblock` Vorlagen-Tag erreichen.

```django
  <ul class="sidebar-nav">
    …
   {% if user.is_authenticated %}
     <li>Benutzer: \{{ user.get_username }}</li>
     <li>
       <form id="logout-form" method="post" action="{% url 'logout' %}">
         {% csrf_token %}
         <button type="submit" class="btn btn-link">Abmelden</button>
       </form>
     </li>
   {% else %}
     <li><a href="{% url 'login' %}?next=\{{ request.path }}">Anmelden</a></li>
   {% endif %}
    …
  </ul>
```

Wie Sie sehen können, verwenden wir `{% if %}` / `{% else %}` / `{% endif %}` Vorlagen-Tags, um Text basierend darauf anzuzeigen, ob `\{{ user.is_authenticated }}` wahr ist. Wenn der Benutzer authentifiziert ist, wissen wir, dass wir einen gültigen Benutzer haben, also rufen wir `\{{ user.get_username }}` auf, um seinen Namen anzuzeigen.

Wir erstellen die Login-Link-URL mit dem `url` Vorlagen-Tag und dem Namen der `login` URL-Konfiguration. Beachten Sie auch, wie wir `?next=\{{ request.path }}` an das Ende der URL angehängt haben. Was dies tut, ist, einen URL-Parameter `next` hinzuzufügen, der die Adresse (URL) der _aktuellen_ Seite enthält, an das Ende der verlinkten URL. Nachdem der Benutzer sich erfolgreich angemeldet hat, verwendet die Ansicht diesen "`next`"-Wert, um den Benutzer zurück auf die Seite zu leiten, auf der er zuerst den Login-Link angeklickt hatte.

Der Logout-Vorlagen-Code unterscheidet sich, da Sie sich seit Django 5 abmelden müssen, indem Sie einen `POST` an die `admin:logout` URL senden, unter Verwendung eines Formulars mit einem Button. Standardmäßig würde dies als Button dargestellt, aber Sie können den Button so stylen, dass er als Link angezeigt wird. In diesem Beispiel verwenden wir _Bootstrap_, daher lassen wir den Button wie einen Link aussehen, indem wir `class="btn btn-link"` anwenden. Sie müssen auch die folgenden Stile zu **/django-locallibrary-tutorial/catalog/static/css/styles.css** hinzufügen, um den Abmeldelink neben allen anderen Seitenleisten-Links korrekt zu positionieren:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Probieren Sie es aus, indem Sie auf die Anmelde-/Abmeldelinks in der Seitenleiste klicken. Sie sollten auf die Abmelde-/Anmeldeseiten weitergeleitet werden, die Sie im [Vorlagenverzeichnis](#vorlagenverzeichnis) oben definiert haben.

### Testen in Ansichten

Wenn Sie funktionsbasierte Ansichten verwenden, ist der einfachste Weg, den Zugriff auf Ihre Funktionen einzuschränken, den `login_required` Dekorator auf Ihre Ansichts-Funktion anzuwenden, wie unten gezeigt. Wenn der Benutzer eingeloggt ist, wird Ihr Ansichtscode wie gewohnt ausgeführt. Wenn der Benutzer nicht eingeloggt ist, wird dies auf die in den Projekteinstellungen definierte Login-URL umgeleitet (`settings.LOGIN_URL`), wobei der aktuelle absolute Pfad als `next` URL-Parameter übergeben wird. Wenn der Benutzer sich erfolgreich anmeldet, wird er auf diese Seite zurückgeleitet, aber diesmal authentifiziert.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Sie können dasselbe manuell tun, indem Sie auf `request.user.is_authenticated` testen, aber der Dekorator ist viel praktischer!

Ähnlich ist der einfachste Weg, den Zugriff auf eingeloggte Benutzer in Ihren klassenbasierten Ansichten einzuschränken, von `LoginRequiredMixin` abzuleiten. Sie müssen diesen Mixin als ersten in der Liste der Superklassen deklarieren, vor der Hauptansichtsklasse.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Dies hat genau dasselbe Weiterleitungsverhalten wie der `login_required` Dekorator. Sie können auch einen alternativen Ort angeben, zu dem der Benutzer umgeleitet wird, wenn er nicht authentifiziert ist (`login_url`), und einen URL-Parameternamen anstelle von "`next`", um den aktuellen absoluten Pfad einzufügen (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Für weitere Details schauen Sie sich die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users) an.

## Beispiel — Auflisten der Bücher des aktuellen Benutzers

Nachdem wir nun wissen, wie wir eine Seite auf einen bestimmten Benutzer beschränken können, erstellen wir eine Ansicht der Bücher, die der aktuelle Benutzer ausgeliehen hat.

Leider haben wir noch keinen Weg, wie Benutzer Bücher ausleihen können! Bevor wir also die Bücherliste erstellen können, erweitern wir das `BookInstance` Modell, um das Konzept des Ausleihens zu unterstützen, und verwenden die Django Admin-Anwendung, um unserem Testbenutzer eine Anzahl von Büchern zu verleihen.

### Modelle

Zuerst werden wir es möglich machen, dass Benutzer ein `BookInstance` leihen können (wir haben bereits einen `status` und ein `due_back` Datum, aber wir haben noch keine Zuordnung zwischen diesem Modell und einem bestimmten Benutzer. Wir werden eine mit einem `ForeignKey` (Eins-zu-Viele) Feld erstellen. Wir benötigen auch einen einfachen Mechanismus, um zu testen, ob ein ausgeliehenes Buch überfällig ist.

Öffnen Sie **catalog/models.py** und importieren Sie die `settings` aus `django.conf` (fügen Sie dies direkt unter der vorherigen Importzeile zu Beginn der Datei hinzu, damit die Einstellungen für nachfolgenden Code, der sie verwendet, verfügbar sind):

```python
from django.conf import settings
```

Fügen Sie als nächstes das `borrower` Feld zum `BookInstance` Modell hinzu, indem Sie das Benutzermodell für den Schlüssel als Wert des Settings `AUTH_USER_MODEL` festlegen. Da wir das Setting nicht mit einem [benutzerdefinierten Benutzermodell](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/) überschrieben haben, wird dies dem Standard-Benutzermodell von `django.contrib.auth.models` zugeordnet.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Das Modell auf diese Weise zu importieren reduziert den Aufwand, falls Sie später feststellen, dass Sie ein benutzerdefiniertes Benutzermodell benötigen.
> Dieses Tutorial verwendet das Standardmodell, daher könnten Sie stattdessen das `User`-Modell direkt mit den folgenden Zeilen importieren:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Während wir hier sind, fügen wir eine Eigenschaft hinzu, die wir von unseren Vorlagen aufrufen können, um festzustellen, ob ein bestimmtes Buch überfällig ist. Während wir dies auch in der Vorlage selbst berechnen könnten, wird die Verwendung einer [Eigenschaft](https://docs.python.org/3/library/functions.html#property) wie unten gezeigt viel effizienter sein.

Fügen Sie dies irgendwo in der Nähe der oberen Datei hinzu:

```python
from datetime import date
```

Fügen Sie nun die folgende Eigenschaftsdefinition zur `BookInstance` Klasse hinzu:

> [!NOTE]
> Der folgende Code verwendet die `bool()` Funktion von Python, die ein Objekt oder das Ergebnis eines Ausdrucks evaluiert und `True` zurückgibt, es sei denn, das Ergebnis ist "unwahr", in welchem Fall es `False` zurückgibt.
> In Python ist ein Objekt _unwahr_ (evaluiert als `False`), wenn es leer ist (wie `[]`, `()`, `{}`), `0`, `None` oder wenn es `False` ist.

```python
@property
def is_overdue(self):
    """Bestimmt, ob das Buch basierend auf dem Fälligkeitsdatum und dem aktuellen Datum überfällig ist."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Wir verifizieren zuerst, ob `due_back` leer ist, bevor wir einen Vergleich durchführen. Ein leeres `due_back` Feld würde dazu führen, dass Django einen Fehler anzeigt, anstatt die Seite zu rendern: leere Werte sind unvergleichbar. Dies ist nicht etwas, was unsere Benutzer erleben sollten!

Nachdem wir jetzt unsere Modelle aktualisiert haben, müssen wir neue Migrationen für das Projekt erstellen und dann diese Migrationen anwenden:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Öffnen Sie nun **catalog/admin.py** und fügen Sie das `borrower` Feld zur `BookInstanceAdmin` Klasse sowohl in `list_display` als auch in `fieldsets` hinzu, wie unten gezeigt. Dies wird das Feld im Admin-Bereich sichtbar machen, sodass wir einem `User` ein `BookInstance` zuweisen können, wenn dies erforderlich ist.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Verfügbarkeit', {
            'fields': ('status', 'due_back', 'borrower')
        }),
    )
```

### Ein paar Bücher verleihen

Da es jetzt möglich ist, Bücher an einen bestimmten Benutzer zu verleihen, gehen Sie und verleihen Sie mehrere `BookInstance` Datensätze. Setzen Sie ihr `borrowed` Feld auf Ihren Testbenutzer, setzen Sie den `status` auf "On loan" und setzen Sie sowohl zukünftige als auch vergangene Daten.

> [!NOTE]
> Wir werden den Prozess nicht näher beschreiben, da Sie bereits wissen, wie Sie die Admin-Seite verwenden!

### Auf-Abruf-Ansicht

Nun fügen wir eine Ansicht hinzu, um die Liste aller Bücher zu erhalten, die dem aktuellen Benutzer verliehen wurden. Wir werden die gleiche generische klassenbasierte Listenansicht verwenden, mit der wir vertraut sind, aber diesmal importieren wir auch und leiten von `LoginRequiredMixin` ab, sodass nur ein angemeldeter Benutzer diese Ansicht aufrufen kann. Wir wählen auch, einen `template_name` anzugeben, anstatt den Standard zu verwenden, da wir möglicherweise mehrere Listen von BookInstance-Datensätzen haben, mit unterschiedlichen Ansichten und Vorlagen.

Fügen Sie Folgendes zu catalog/views.py hinzu:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generische klassenbasierte Ansicht, die Bücher auflistet, die an den aktuellen Benutzer verliehen wurden."""
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

Um unsere Abfrage auf nur die `BookInstance` Objekte für den aktuellen Benutzer zu beschränken, implementieren wir `get_queryset()` wie oben gezeigt. Beachten Sie, dass "o" der gespeicherte Code für "on loan" ist und wir nach dem `due_back` Datum sortieren, damit die ältesten Elemente zuerst angezeigt werden.

### URL-Konfiguration für ausgeliehene Bücher

Öffnen Sie nun **/catalog/urls.py** und fügen Sie einen `path()` hinzu, der auf die obige Ansicht verweist (Sie können einfach den Text unten ans Ende der Datei kopieren).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Vorlage für ausgeliehene Bücher

Nun müssen wir nur noch eine Vorlage hinzufügen. Erstellen Sie zuerst die Vorlagendatei **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** und geben Sie ihr den folgenden Inhalt:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Entliehene Bücher</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>Es wurden keine Bücher ausgeliehen.</p>
    {% endif %}
{% endblock %}
```

Diese Vorlage ist sehr ähnlich zu denen, die wir zuvor für die `Book`- und `Author`-Objekte erstellt haben. Das einzige "Neue" hier ist, dass wir die Methode verwenden, die wir im Modell hinzugefügt haben (`bookinst.is_overdue`), und sie verwenden, um die Farbe von überfälligen Elementen zu ändern.

Wenn der Entwicklungsserver läuft, sollten Sie jetzt die Liste für einen angemeldeten Benutzer in Ihrem Browser unter `http://127.0.0.1:8000/catalog/mybooks/` anzeigen können. Probieren Sie dies mit Ihrem Benutzer sowohl angemeldet als auch abgemeldet aus (im zweiten Fall sollten Sie zur Anmeldeseite umgeleitet werden).

### Die Liste zur Seitenleiste hinzufügen

Der allerletzte Schritt besteht darin, einen Link für diese neue Seite in die Seitenleiste einzufügen. Wir werden dies im gleichen Abschnitt tun, in dem wir andere Informationen für den angemeldeten Benutzer anzeigen.

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) und fügen Sie die Zeile "My Borrowed" in die Seitenleiste in der unten gezeigten Position ein.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>Benutzer: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">Meine ausgeliehenen Bücher</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'admin:logout' %}">
       {% csrf_token %}
       <button type="submit" class="btn btn-link">Abmelden</button>
     </form>
   </li>
   {% else %}
   <li><a href="{% url 'login' %}?next=\{{ request.path }}">Anmelden</a></li>
   {% endif %}
 </ul>
```

### Wie sieht es aus?

Wenn ein Benutzer angemeldet ist, sieht er den _My Borrowed_ Link in der Seitenleiste, und die Liste der Bücher wird wie unten angezeigt (das erste Buch hat kein Fälligkeitsdatum, was ein Fehler ist, den wir in einem späteren Tutorial hoffentlich beheben!)

![Bibliothek - entliehene Bücher des Benutzers](library_borrowed_by_user.png)

## Berechtigungen

Berechtigungen sind mit Modellen verknüpft und definieren die Operationen, die ein Benutzer, der über die Berechtigung verfügt, auf einer Modellinstanz ausführen kann. Standardmäßig gibt Django automatisch _Hinzufügen_, _Ändern_ und _Löschen_ Berechtigungen für alle Modelle, die Benutzern mit den Berechtigungen erlauben, die zugehörigen Aktionen über die Admin-Seite auszuführen. Sie können Ihre eigenen Berechtigungen für Modelle definieren und sie bestimmten Benutzern zuordnen. Sie können auch die Berechtigungen ändern, die mit verschiedenen Instanzen desselben Modells verknüpft sind.

Das Testen von Berechtigungen in Ansichten und Vorlagen ist dann sehr ähnlich wie das Testen des Authentifizierungsstatus (und tatsächlich testet das Testen auf eine Berechtigung auch auf Authentifizierung).

### Modelle

Das Definieren von Berechtigungen erfolgt im "`class Meta`" Abschnitt des Modells unter Verwendung des `permissions` Feldes. Sie können so viele Berechtigungen, wie Sie benötigen, in einem Tupel angeben, wobei jede Berechtigung selbst in einem verschachtelten Tupel definiert ist, das den Berechtigungsnamen und den Berechtigungsanzeigewert enthält. Beispielsweise könnten wir eine Berechtigung definieren, die es einem Benutzer ermöglicht, ein Buch als zurückgegeben zu markieren, wie gezeigt:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Wir könnten dann die Berechtigung einer "Bibliothekar"-Gruppe auf der Admin-Seite zuweisen.

Öffnen Sie **catalog/models.py** und fügen Sie die Berechtigung wie oben gezeigt hinzu. Sie müssen Ihre Migrationen erneut ausführen (rufen Sie `python3 manage.py makemigrations` und `python3 manage.py migrate` auf), um die Datenbank entsprechend zu aktualisieren.

### Vorlagen

Die Berechtigungen des aktuellen Benutzers werden in einer Vorlagenvariablen namens `\{{ perms }}` gespeichert. Sie können prüfen, ob der aktuelle Benutzer über eine bestimmte Berechtigung verfügt, indem Sie den spezifischen Variablennamen innerhalb der zugehörigen Django "App" verwenden — z.B. `\{{ perms.catalog.can_mark_returned }}` wird `True` sein, wenn der Benutzer diese Berechtigung hat, und `False`, andernfalls. In der Regel testen Sie die Berechtigung mit dem `{% if %}` Vorlagen-Tag, wie gezeigt:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- Wir können eine BookInstance als zurückgegeben markieren. -->
    <!-- Vielleicht fügen Sie hier Code hinzu, um auf eine "Buch zurückgeben"-Ansicht zu verlinken. -->
{% endif %}
```

### Ansichten

Berechtigungen können in Funktionsansichten mit dem `permission_required` Dekorator oder in einer klassenbasierten Ansicht mit dem `PermissionRequiredMixin` getestet werden. Die Muster sind die gleichen wie für die Anmeldungsauthentifizierung, obwohl Sie natürlich vernünftigerweise mehrere Berechtigungen hinzufügen müssen.

Funktionsansicht-Dekorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Ein Berechtigungserforderliches Mixin für klassenbasierte Ansichten.

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Oder mehrere Berechtigungen
    permission_required = ('catalog.can_mark_returned', 'catalog.change_book')
    # Beachten Sie, dass 'catalog.change_book' eine Berechtigung ist
    # Wird automatisch für das Buchmodell erstellt, zusammen mit add_book und delete_book
```

> [!NOTE]
> Es gibt einen kleinen Standardunterschied im Verhalten oben. Standardmäßig bei einer Berechtigungsverletzung durch einen angemeldeten Benutzer:
>
> - `@permission_required` leitet zur Anmeldeseite um (HTTP-Status 302).
> - `PermissionRequiredMixin` gibt 403 zurück (HTTP-Status Verboten).
>
> Normalerweise möchten Sie das `PermissionRequiredMixin` Verhalten: geben 403 zurück, wenn ein Benutzer eingeloggt ist, aber nicht die richtige Berechtigung hat. Tun Sie dies für eine Funktionsansicht mit `@login_required` und `@permission_required` mit `raise_exception=True`, wie gezeigt:
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

Früher in diesem Artikel haben wir Ihnen gezeigt, wie Sie eine Seite für den aktuellen Benutzer erstellen, die die Bücher auflistet, die sie ausgeliehen haben. Die Herausforderung besteht nun darin, eine ähnliche Seite zu erstellen, die nur für Bibliothekare sichtbar ist und _alle_ ausgeliehenen Bücher anzeigt, die den Namen jedes Entleihers enthalten.

Sie sollten in der Lage sein, dem gleichen Muster wie bei der anderen Ansicht zu folgen. Der Hauptunterschied besteht darin, dass Sie die Ansicht nur auf Bibliothekare beschränken müssen. Sie könnten dies basierend darauf tun, ob der Benutzer ein Mitarbeiter ist (Funktionsdekorator: `staff_member_required`, Vorlagenvariable: `user.is_staff`), aber wir empfehlen, stattdessen die `can_mark_returned` Berechtigung und `PermissionRequiredMixin` zu verwenden, wie im vorhergehenden Abschnitt beschrieben.

> [!WARNING]
> Denken Sie daran, Ihren Superuser nicht für Berechtigungstests zu verwenden (Berechtigungsprüfungen sind immer für Superuser wahr, auch wenn eine Berechtigung noch nicht definiert wurde!). Erstellen Sie stattdessen einen Bibliothekar-Benutzer und fügen Sie die erforderliche Fähigkeit hinzu.

Wenn Sie fertig sind, sollte Ihre Seite ungefähr wie im Screenshot unten aussehen.

![Alle ausgeliehenen Bücher, beschränkt auf Bibliothekare](library_borrowed_all.png)

## Zusammenfassung

Ausgezeichnete Arbeit — Sie haben jetzt eine Website erstellt, auf der sich Bibliotheksmitglieder anmelden und ihre eigenen Inhalte anzeigen können, und auf der Bibliothekare (mit den entsprechenden Berechtigungen) alle ausgeliehenen Bücher und ihre Entleiher sehen können. Im Moment betrachten wir immer noch nur Inhalte, aber die gleichen Prinzipien und Techniken dienen zum Ändern und Hinzufügen von Daten.

In unserem nächsten Artikel sehen wir uns an, wie Sie mit Django-Formularen Benutzereingaben erfassen und dann einige unserer gespeicherten Daten ändern können.

## Siehe auch

- [Benutzerauthentifizierung in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (Django-Dokumentation)
- [Das (Standard-) Django-Authentifizierungssystem verwenden](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten > Dekorieren von klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
