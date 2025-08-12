---
title: "Herausforderung: DIY Django Mini Blog"
short-title: "Herausforderung: Django Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung werden Sie Ihr Wissen über Django, das Sie im Modul [Django-Web-Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) erworben haben, nutzen, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung versuchen, sollten Sie alle Artikel in diesem Modul bereits durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Testen des Verständnisses der grundlegenden Konzepte von Django, einschließlich URL-Konfigurationen, Modelle, Ansichten, Formulare und Templates.
      </td>
    </tr>
  </tbody>
</table>

## Projektbeschreibung

Die zu darstellenden Seiten, ihre URLs und weitere Anforderungen sind unten aufgeführt:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Seite</th>
      <th scope="col">URL</th>
      <th scope="col">Anforderungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Startseite</td>
      <td><code>/</code> und <code>/blog/</code></td>
      <td>Eine Indexseite, die die Website beschreibt.</td>
    </tr>
    <tr>
      <td>Liste aller Blogeinträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogeinträge:</p>
        <ul>
          <li>Erreichbar für alle Benutzer über einen Link in der Seitenleiste.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Liste paginiert in Gruppen von 5 Artikeln.</li>
          <li>Listeneinträge zeigen den Blogtitel, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blogtitel sind mit den Detailseiten der Blogs verlinkt.</li>
          <li>
            Blogger (Autoren) sind mit den Detailseiten der Blogautoren verlinkt.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite des Blogautors (Blogger)</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen zu einem bestimmten Autor (nach id) und Liste seiner Blogeinträge:
        </p>
        <ul>
          <li>Erreichbar für alle Benutzer über Links zu Autoren in Blogeinträgen usw.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Namen des Blogeintrags und das Veröffentlichungsdatum.</li>
          <li>Blogeintragstitel sind mit den Detailseiten der Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite eines Blogeintrags</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details eines Blogeintrags.</p>
        <ul>
          <li>Erreichbar für alle Benutzer über die Listen der Blogeinträge.</li>
          <li>
            Seite enthält den Blogeintrag: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare zu dem Blogeintrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge vom ältesten zum neuesten sortiert sein.</li>
          <li>
            Am Ende gibt es einen Link zum Hinzufügen von Kommentaren für eingeloggte Benutzer (siehe Kommentarseitenformular)
          </li>
          <li>
            Blogeinträge und Kommentare müssen nur reinen Text anzeigen.
            Es ist nicht erforderlich, HTML-Markup (z.B. Links, Bilder, fett/kursiv, etc.) zu unterstützen.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Liste aller Blogger</td>
      <td><code>/blog/bloggers/</code></td>
      <td>
        <p>Liste der Blogger im System:</p>
        <ul>
          <li>Erreichbar für alle Benutzer über die Seitenleiste der Website.</li>
          <li>Bloggernamen sind mit den Detailseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarseitenformular</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar für Blogeintrag erstellen:</p>
        <ul>
          <li>
            Erreichbar nur für eingeloggte Benutzer über den Link am Ende der Detailseiten der Blogeinträge.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung zum Eingeben von Kommentaren an (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück zur zugehörigen Blogeintragsseite umgeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Abgemeldete Benutzer werden zur Anmeldeseite weitergeleitet, um sich einzuloggen,
            bevor sie Kommentare hinzufügen können. Nachdem sie sich eingeloggt haben, werden sie
            zurück zur Blogseite geleitet, die sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link zum kommentierten Blogeintrag enthalten.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Benutzerauthentifizierungsseiten</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Standard-Django-Authentifizierungsseiten für das Ein- und Ausloggen sowie das Festlegen des Passworts:
        </p>
        <ul>
          <li>Anmeldung/Ausloggen sollte über Links in der Seitenleiste zugänglich sein.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Admin-Site</td>
      <td>
        <code>/admin/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Die Admin-Site sollte aktiviert werden, um das Erstellen/Bearbeiten/Löschen von Blogeinträgen,
          Blogautoren und Blogkommentaren zu ermöglichen (dies ist der Mechanismus,
          mit dem Blogger neue Blogeinträge erstellen können):
        </p>
        <ul>
          <li>
            In den Admin-Site-Blogeinträgen sollten die zugehörigen Kommentare inline (unter jedem Blogeintrag) angezeigt werden.
          </li>
          <li>
            Kommentarnamen in der Admin-Site werden erstellt, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Andere Arten von Datensätzen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modellfelder haben das korrekte Label und die richtige Länge.
- Alle Modelle haben den erwarteten Objektnamen (z.B., `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentardatensätze (z.B., `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (All-Blog-Seite) ist an der erwarteten Stelle zugänglich (z.B., /blog/blogs)
- Die BlogListView (All-Blog-Seite) ist unter der erwarteten benannten URL zugänglich (z.B., 'blogs')
- Die BlogListView (All-Blog-Seite) verwendet das erwartete Template (z.B., das Standardtemplate)
- Die BlogListView paginiert Datensätze um 5 (zumindest auf der ersten Seite)

> [!NOTE]
> Natürlich gibt es viele weitere Tests, die Sie durchführen können. Nutzen Sie Ihr Ermessen, aber wir erwarten, dass Sie mindestens die oben genannten Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Seite, die die oben genannten Anforderungen umsetzt.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, wie das fertige Programm aussehen sollte.

### Liste aller Blogeinträge

Diese zeigt die Liste aller Blogeinträge (zugänglich über den Link "Alle Blogs" in der Seitenleiste). Zu beachten:

- In der Seitenleiste wird auch der eingeloggte Benutzer aufgelistet.
- Einzelne Blogeinträge und Blogger sind als Links auf der Seite zugänglich.
- Paginierung ist aktiviert (in Gruppen von 5)
- Sortierung ist von neu nach alt.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Diese bietet Links zu allen Bloggern, verlinkt über den Link "Alle Blogger" in der Seitenleiste. In diesem Fall sehen wir aus der Seitenleiste, dass kein Benutzer eingeloggt ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Diese zeigt die Detailseite für einen bestimmten Blog.

![Blog-Detail mit Kommentar-Link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von alt nach neu geordnet sind (Gegenteil der Blogsortierung). Am Ende haben wir einen Link zum Zugriff auf das Formular zum Hinzufügen eines neuen Kommentars. Wenn ein Benutzer nicht eingeloggt ist, würden wir stattdessen einen Vorschlag zum Einloggen sehen.

![Kommentar-Link wenn nicht eingeloggt](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular hinzufügen

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zurück zur zugehörigen Blogeintragsseite gebracht werden.

![Kommentarformular hinzufügen](diyblog_comment_form.png)

### Autoren-Bio

Diese zeigt biologische Informationen für einen Blogger zusammen mit ihrer Blogeintragsliste an.

![Blogger-Detailseite](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Gerüstprojekt und eine Webanwendung für die Website (wie in [Django Tutorial Teil 2: Erstellen einer Gerüstwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) beschrieben). Sie könnten 'diyblog' für den Projektnamen und 'blog' für den Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blogeinträge, Kommentare und weitere benötigte Objekte. Denken Sie bei Ihrem Design daran:
   - Jeder Kommentar wird nur einen Blog haben, aber ein Blog kann viele Kommentare haben.
   - Blogeinträge und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer wird notwendigerweise ein Blogautor sein, obwohl jeder Benutzer ein Kommentator sein kann.
   - Blogautoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Site, um einige Beispiel-Blogeinträge und -Kommentare zu erstellen.
5. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für die Blog- und Blogger-Listen.
6. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für die Blog- und Blogger-Details.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dass diese nur für eingeloggte Benutzer verfügbar ist!)

## Hinweise und Tipps

Dieses Projekt ist sehr ähnlich zum [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial. Sie können das Gerüst, das Benutzer-Anmelde-/Abmeldeverhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Admin-Site-Konfiguration mit nahezu denselben Ansätzen einrichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktionsansicht und Template implementiert werden (genau wie für die LocalLibrary).
2. Die Listenansicht für Blogeinträge und Blogger sowie die Detailansicht für Blogeinträge können mit [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogeinträge für einen bestimmten Autor kann erstellt werden, indem eine generische Bloglistenansicht verwendet und nach Blogobjekten gefiltert wird, die zum angegebenen Autor passen.
   - Sie müssen `get_queryset(self)` implementieren, um die Filterung durchzuführen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autoreninformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors auf der Seite im Kontext weitergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (weiter unten erläutert).

4. Das _Kommentar hinzufügen_ Formular kann mit einer funktionsbasierten Ansicht (und zugehörigem Modell und Formular) oder einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:
   - Sie müssen auch den Namen des Blogeintrags zur Kommentarseite im Kontext weitergeben (implementieren Sie `get_context_data()` wie unten erläutert).
   - Das Formular sollte nur die "Beschreibung" des Kommentars zur Benutzereingabe anzeigen (Datum und zugehöriger Blogeintrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst sein werden, muss Ihr Code den Autor des Kommentars in der `form_valid()` Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

     ```python
         def form_valid(self, form):
             """
             Add author and associated blog to form data before setting it as valid (so it is saved to model)
             """
             # Add logged-in user as author of comment
             form.instance.author = self.request.user
             #Associate comment with blog based on passed id
             form.instance.blog=get_object_or_404(Blog, pk = self.kwargs['pk'])
             # Call super-class form validation behavior
             return super(BlogCommentCreate, self).form_valid(form)
     ```

   - Sie müssen eine Erfolgs-URL bereitstellen, auf die nach der Formularüberprüfung umgeleitet wird; diese sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "reverse"-en. Sie können die benötigte Blog-ID mit dem Attribut `self.kwargs` erhalten, wie in der `form_valid()` Methode oben gezeigt.

Wir haben kurz darüber gesprochen, wie ein Kontext in der [Django Tutorial Part 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) thematisiert wird. Dazu müssen Sie `get_context_data()` überschreiben (zuerst den bestehenden Kontext abrufen, ihn mit zusätzlichen Variablen, die Sie dem Template übergeben möchten, aktualisieren und dann den aktualisierten Kontext zurückgeben). Das folgende Codefragment zeigt, wie Sie ein Bloggerobjekt basierend auf deren `BlogAuthor`-ID dem Kontext hinzufügen können.

```python
class SomeView(generic.ListView):
    # …

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(SomeView, self).get_context_data(**kwargs)
        # Get the blogger object from the "pk" URL parameter and add it to the context
        context['blogger'] = get_object_or_404(BlogAuthor, pk = self.kwargs['pk'])
        return context
```

## Bewertung

Die Bewertung für diese Herausforderung ist [auf GitHub hier verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl es einige Teile gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet, und ob Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein Projekt mit "vollen Punkten" widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Lernen der grundlegenden Django-Server-Seiten-Programmierung abgeschlossen! Wir hoffen, Sie haben dieses Modul genossen und fühlen, dass Sie ein gutes Verständnis der Grundlagen haben!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
