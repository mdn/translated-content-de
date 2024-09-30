---
title: "Bewertung: DIY Django Mini-Blog"
slug: Learn/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

In dieser Bewertung verwenden Sie das Django-Wissen, das Sie im Modul [Django Web Framework (Python)](/de/docs/Learn/Server-side/Django) erworben haben, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu testen, ob die Grundlagen von Django verstanden wurden, einschließlich URL-Konfigurationen, Modelle, Views, Formulare und Templates.
      </td>
    </tr>
  </tbody>
</table>

## Projektbeschreibung

Die Seiten, die angezeigt werden müssen, ihre URLs und andere Anforderungen sind unten aufgeführt:

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
      <td>Liste aller Blogbeiträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogbeiträge:</p>
        <ul>
          <li>Von allen Nutzern über einen Sidebar-Link zugänglich.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Liste in Gruppen von 5 Artikeln paginiert.</li>
          <li>Listeneinträge zeigen den Titel des Blogs, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blog-Beitrag-Namen sind mit den Detailseiten des Blogs verlinkt.</li>
          <li>Blogger (Autornamen) sind mit den Detailseiten des Blogautors verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blogautor (Blogger) Detailseite</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen für einen bestimmten Autor (nach ID) und Liste seiner Blogbeiträge:
        </p>
        <ul>
          <li>Von allen Nutzern über Autorenlinks in Blogbeiträgen etc. zugänglich.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Namen des Blogbeitrags und das Veröffentlichungsdatum.</li>
          <li>Blog-Beitrag-Namen sind mit den Detailseiten des Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blogbeitrags-Detailseite</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Blogbeitragsdetails.</p>
        <ul>
          <li>Von allen Nutzern über Blogbeitragslisten zugänglich.</li>
          <li>
            Seite enthält den Blogbeitrag: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare zum Blogbeitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge sortiert sein: älteste bis neueste.</li>
          <li>
            Beinhaltet Link, um am Ende Kommentare für eingeloggte Nutzer hinzuzufügen (siehe Kommentarseiten-Formular)
          </li>
          <li>
            Blogbeiträge und Kommentare müssen nur reinen Text anzeigen.
            Es besteht keine Notwendigkeit, irgendeine Art von HTML-Markup zu unterstützen (z.B. Links, Bilder, fett/kursiv, etc.).
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
          <li>Über die Sidebar für alle Nutzer zugänglich</li>
          <li>Bloggernamen sind mit Blogautoren-Detailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarseiten-Formular</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar zum Blogbeitrag erstellen:</p>
        <ul>
          <li>
            Nur für eingeloggte Nutzer (nur) über Link am Ende von Blogbeitrags-Detailseiten zugänglich.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung zum Eingeben von Kommentaren (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück zur zugehörigen Blog-Beitrag-Seite weitergeleitet.
          </li>
          <li>Nutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Ausgeloggte Nutzer werden zur Login-Seite geleitet, um sich einzuloggen,
            bevor sie Kommentare hinzufügen können. Nach dem Einloggen werden sie
            zurück zur Blogseite geleitet, die sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link zum kommentierten Blogbeitrag enthalten.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Nutzer-Authentifizierungs-Seiten</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Standard-Django-Authentifizierungsseiten zum Einloggen, Ausloggen und Setzen des Passworts:
        </p>
        <ul>
          <li>Ein-/Ausloggen sollte über Sidebar-Links zugänglich sein.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Admin-Seite</td>
      <td>
        <code>/admin/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Admin-Seite sollte aktiviert werden, um Erstellen/Bearbeiten/Löschen von Blog
          Beiträgen, Blogautoren und Blogkommentaren zu ermöglichen (Dies ist der Mechanismus,
          mit dem Blogger neue Blogbeiträge erstellen):
        </p>
        <ul>
          <li>
            Admin-Seiten-Blogbeitrags-Aufzeichnungen sollten die Liste der zugehörigen Kommentare inline (unter jedem Blogbeitrag) anzeigen.
          </li>
          <li>
            Kommentarnamen in der Admin-Seite werden durch Kürzung der Kommentarbeschreibung auf 75 Zeichen erstellt.
          </li>
          <li>Andere Arten von Aufzeichnungen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modelfelder haben die korrekte Bezeichnung und Länge.
- Alle Modelle haben den erwarteten Objektnamen (z.B. `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentaraufzeichnungen (z.B. `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (All-Blog-Seite) ist an der erwarteten Position zugänglich (z.B. /blog/blogs)
- Die BlogListView (All-Blog-Seite) ist an der erwarteten benannten URL zugänglich (z.B. 'blogs')
- Die BlogListView verwendet das erwartete Template (z.B. das Standardtemplate)
- Die BlogListView paginiert Aufzeichnungen in 5er-Gruppen (mindestens auf der ersten Seite)

> [!NOTE]
> Es gibt natürlich noch viele andere Tests, die Sie durchführen können. Nutzen Sie Ihr Ermessen, aber wir erwarten, dass Sie zumindest die obigen Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Site, die die oben genannten Anforderungen umsetzt.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogbeiträge

Dies zeigt die Liste aller Blogbeiträge (zugänglich über den "Alle Blogs" Link in der Sidebar). Zu beachten ist:

- Die Sidebar listet auch den eingeloggten Nutzer.
- Einzelne Blogbeiträge und Blogger sind als Links in der Seite zugänglich.
- Pagination ist aktiviert (in Gruppen von 5)
- Sortierung ist von neu nach alt.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie vom "Alle Blogger" Link in der Sidebar verlinkt sind. In diesem Fall sehen wir in der Sidebar, dass kein Nutzer eingeloggt ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blog-Detail mit Kommentar-Link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von alt nach neu sortiert sind (entgegengesetzt zur Blogsortierung). Am Ende haben wir einen Link, um auf das Formular zum Hinzufügen eines neuen Kommentars zuzugreifen. Wenn ein Nutzer nicht eingeloggt ist, sehen wir stattdessen einen Vorschlag zum Einloggen.

![Kommentar-Link, wenn nicht eingeloggt](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular hinzufügen

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zur zugehörigen Blogseite zurückgeführt werden.

![Kommentarformular hinzufügen](diyblog_comment_form.png)

### Autoren-Bio

Dies zeigt Bio-Informationen für einen Blogger zusammen mit deren Liste von Blogbeiträgen.

![Detailseite des Bloggers](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Skeleton-Projekt und eine Webanwendung für die Seite (wie beschrieben in [Django Tutorial Teil 2: Creating a skeleton website](/de/docs/Learn/Server-side/Django/skeleton_website)). Sie könnten 'diyblog' für den Projektnamen und 'blog' für den Applikationsnamen verwenden.
2. Erstellen Sie Modelle für die Blogbeiträge, Kommentare und alle anderen benötigten Objekte. Denken Sie bei Ihrem Design daran:

   - Jeder Kommentar wird nur einen Blog haben, aber ein Blog kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert sein.
   - Nicht jeder Nutzer wird notwendigerweise ein Blogautor sein, obwohl jeder Nutzer Kommentator sein kann.
   - Blogautoren müssen auch Bio-Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blogbeiträge und Blogkommentare zu erstellen.
5. Erstellen Sie Views, Templates und URL-Konfigurationen für Blogbeitrags- und Bloggerlisten-Seiten.
6. Erstellen Sie Views, Templates und URL-Konfigurationen für Blogbeitrags- und Blogger-Detailseiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dies nur für eingeloggte Nutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie können das Skeleton, das Anmelde-/Abmeldeverhalten der Nutzer, die Unterstützung für statische Dateien, Views, URLs, Formulare, Basistemplates und die Konfiguration der Admin-Seite mit fast denselben Ansätzen einrichten.

Einige allgemeine Hinweise:

1. Die Index-Seite kann als einfache Funktionsansicht und Template implementiert werden (genauso wie für die locallibrary).
2. Die Listenansicht für Blogbeiträge und Blogger sowie die Detailansicht für Blogbeiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogbeiträge für einen bestimmten Autor kann erstellt werden, indem eine generische Blog-Listenansicht verwendet und nach Blogobjekten gefiltert wird, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern durchzuführen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors der Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (unten beschrieben).

4. Das _Hinzufügen von Kommentaren_-Formular kann mit einer funktionsbasierten Ansicht (und zugehörigem Modell und Formular) oder einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen):

   - Sie müssen auch den Namen des Blogbeitrags an die Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()`, wie unten beschrieben).
   - Das Formular sollte nur die Kommentarbeschreibung für die Benutzereingabe anzeigen (Datum und zugeordneter Blogbeitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst sein werden, muss Ihr Code den Autor des Kommentars in der `form_valid()`-Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

     ```python
         def form_valid(self, form):
             """
             Add author and associated blog to form data before setting it as valid (so it is saved to model)
             """
             #Add logged-in user as author of comment
             form.instance.author = self.request.user
             #Associate comment with blog based on passed id
             form.instance.blog=get_object_or_404(Blog, pk = self.kwargs['pk'])
             # Call super-class form validation behavior
             return super(BlogCommentCreate, self).form_valid(form)
     ```

   - Sie müssen eine Erfolgs-URL bereitstellen, zu der nach der Formularvalidierung weitergeleitet wird; dies sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die benötigte Blog-ID mit dem `self.kwargs`-Attribut abrufen, wie in der `form_valid()`-Methode oben gezeigt.

Wir haben kurz darüber gesprochen, wie man einen Kontext in einer klassenbasierten Ansicht übergibt, im [Django Tutorial Part 6: Generic list and detail views](/de/docs/Learn/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) Thema. Um dies zu tun, müssen Sie `get_context_data()` überschreiben (zuerst den vorhandenen Kontext abrufen, ihn mit den zusätzlichen Variablen aktualisieren, die Sie in das Template übergeben möchten, und den aktualisierten Kontext zurückgeben). Beispielsweise zeigt der unten stehende Codeausschnitt, wie Sie ein Blogger-Objekt in den Kontext basierend auf seiner `BlogAuthor`-ID hinzufügen können.

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

Die Bewertung für diese Aufgabe ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl es einige Teile der Bewertung gibt, die prüfen, ob Ihr Code geeignete Modelle verwendet und dass Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein "volle Punktzahl"-Projekt widerspiegelt.

Nachdem Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Server-seitigen Website-Programmierung abgeschlossen! Wir hoffen, dass Sie dieses Modul genossen haben und ein gutes Verständnis für die Grundlagen haben!

{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
