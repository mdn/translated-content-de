---
title: "Herausforderung: DIY Django Mini-Blog"
short-title: "Herausforderung: Django Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung werden Sie Ihr Django-Wissen aus dem Modul [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) nutzen, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung angehen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis grundlegender Django-Konzepte wie URL-Konfigurationen, Modelle, Ansichten, Formulare und Templates zu testen.
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
      <td>Liste aller Blog-Beiträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blog-Beiträge:</p>
        <ul>
          <li>Zugänglich für alle Benutzer über einen Link in der Seitenleiste.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Liste paginiert in Gruppen von 5 Artikeln.</li>
          <li>Listenelemente zeigen den Titel, das Veröffentlichungsdatum und den Autor des Blogs an.</li>
          <li>Bloginamen sind mit den Detailseiten des Blogs verlinkt.</li>
          <li>
            Blogger (Autorennamen) sind mit den Detailseiten der Blogautoren verlinkt.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blogger Detailseite</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen zu einem angegebenen Autor (nach ID) und eine Liste seiner Blog-Beiträge:
        </p>
        <ul>
          <li>Zugänglich für alle Benutzer über Links zu Autoren in Blog-Beiträgen usw.</li>
          <li>
            Enthält einige biographische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listenelemente zeigen nur den Namen und das Datum des Blog-Beitrags an.</li>
          <li>Bloginamen sind mit den Detailseiten der Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blog-Beitrag Detailseite</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details zum Blog-Beitrag.</p>
        <ul>
          <li>Zugänglich für alle Benutzer über Blog-Beitragslisten.</li>
          <li>
            Seite enthält den Blog-Beitrag: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare zum Blog-Beitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten sortiert werden: vom ältesten zum jüngsten.</li>
          <li>
            Enthält einen Link, um Kommentare hinzuzufügen, für eingeloggte Benutzer (siehe Kommentarseite)
          </li>
          <li>
            Blog-Beiträge und Kommentare müssen nur einfachen Text anzeigen.
            Es muss keine Unterstützung für HTML-Markup (z.B. Links, Bilder, fett/kursiv, etc.) geben.
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
          <li>Zugänglich für alle Benutzer über die Seitenleiste</li>
          <li>Bloggernamen sind mit den Detailseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar zu einem Blog-Beitrag erstellen:</p>
        <ul>
          <li>
            Zugänglich nur für eingeloggte Benutzer über einen Link unten auf den Detailseiten der Blog-Beiträge.
          </li>
          <li>
            Zeigt ein Formular mit einer Beschreibung zum Eingeben von Kommentaren an (Veröffentlichungsdatum und Blog sind nicht editierbar).
          </li>
          <li>
            Nachdem ein Kommentar veröffentlicht wurde, wird die Seite zurück zur zugehörigen Blogseiten umgeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Ausgeloggte Benutzer werden zur Login-Seite weitergeleitet, um sich anzumelden,
            bevor sie Kommentare hinzufügen können. Nach dem Einloggen werden sie
            zurück zur Blogseite geleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link des Blog-Beitrags enthalten, auf den kommentiert wird.
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
          Standard-Django-Authentifizierungsseiten für das Einloggen, Ausloggen und Einstellen des Passworts:
        </p>
        <ul>
          <li>Login/Logout sollte über Links in der Seitenleiste zugänglich sein.</li>
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
          Die Admin-Seite sollte aktiviert werden, um das Erstellen/Bearbeiten/Löschen von Blog-Beiträgen,
          Blog-Autoren und Blog-Kommentaren zu ermöglichen (dies ist der Mechanismus für
          Blogger, um neue Blog-Beiträge zu erstellen):
        </p>
        <ul>
          <li>
            Admin-Seiten-Blog-Beiträge sollten die Liste der zugehörigen Kommentare inline anzeigen (unter jedem Blog-Beitrag).
          </li>
          <li>
            Kommentarnamen auf der Admin-Seite werden erstellt, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Andere Arten von Datensätzen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modelfelder haben das richtige Label und die richtige Länge.
- Alle Modelle haben den erwarteten Objektnamen (z.B. `__str__()` liefert den erwarteten Wert).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentar-Datensätze (z.B. `get_absolute_url()` liefert die erwartete URL).
- Die BlogListView (Seite mit allen Blogs) ist an der erwarteten Stelle erreichbar (z.B. /blog/blogs)
- Die BlogListView (Seite mit allen Blogs) ist über die erwartete benannte URL erreichbar (z.B. 'blogs')
- Die BlogListView (Seite mit allen Blogs) nutzt das erwartete Template (z.B. das Standard-Template)
- Die BlogListView paginiert Datensätze um 5 (zumindest auf der ersten Seite)

> [!NOTE]
> Natürlich gibt es viele weitere Tests, die Sie durchführen können. Verwenden Sie Ihr eigenes Ermessen, aber wir erwarten, dass Sie mindestens die obigen Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Site, die die oben genannten Anforderungen implementiert.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blog-Beiträge

Dies zeigt die Liste aller Blog-Beiträge (zugänglich über den Link "Alle Blogs" in der Seitenleiste). Zu beachten:

- Die Seitenleiste zeigt auch den eingeloggten Benutzer an.
- Einzelne Blog-Beiträge und Blogger sind als Links auf der Seite zugänglich.
- Paginierung ist aktiviert (in Gruppen von 5)
- Sortierung ist neueste zuerst.

![List of all blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie vom Link "Alle Blogger" in der Seitenleiste verlinkt sind. In diesem Fall sehen wir aus der Seitenleiste, dass kein Benutzer eingeloggt ist.

![List of all bloggers](diyblog_blog_allbloggers.png)

### Blog Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blog detail with add comment link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von ältesten zu neuesten sortiert sind (umgekehrt zur Blog-Sortierung). Am Ende finden wir einen Link zum Zugriff auf das Formular, um einen neuen Kommentar hinzuzufügen. Wenn ein Benutzer nicht eingeloggt ist, würden wir stattdessen einen Vorschlag zum Einloggen sehen.

![Comment link when not logged in](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular hinzufügen

Dies ist das Formular, um Kommentare hinzuzufügen. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zur zugehörigen Blogseite zurückgeführt werden.

![Add comment form](diyblog_comment_form.png)

### Autoren-Biografie

Dies zeigt biografische Informationen zu einem Blogger zusammen mit ihrer Blog-Beitragsliste.

![Blogger detail page](diyblog_blogger_detail.png)

## Schritte zur vollständigen Umsetzung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Skeleton-Projekt und eine Webanwendung für die Site (wie beschrieben in [Django Tutorial Teil 2: Erstellen einer Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)). Sie können 'diyblog' als Projektnamen und 'blog' als Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blog-Beiträge, Kommentare und andere benötigte Objekte. Denken Sie bei Ihrem Design daran:

   - Jeder Kommentar wird nur einem Blog zugeordnet, aber ein Blog kann viele Kommentare haben.
   - Blog-Beiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer wird notwendigerweise ein Blog-Autor sein, aber jeder Benutzer kann ein Kommentator sein.
   - Blog-Autoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blog-Beiträge und -Kommentare zu erstellen.
5. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blog-Beitrags- und Blogger-Listen-Seiten.
6. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blog-Beitrags- und Blogger-Detailseiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dies nur für eingeloggte Benutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie können das Skeleton, das Benutzer-Login/Logout-Verhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Admin-Seitenkonfiguration mit fast denselben Ansätzen einrichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktionsansicht und Template implementiert werden (genau wie bei der LocalLibrary).
2. Die Listenansicht für Blog-Beiträge und Blogger sowie die Detailansicht für Blog-Beiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blog-Beiträge für einen bestimmten Autor kann durch Verwendung einer generischen Blog-Listenansicht erstellt werden, wobei nach Blog-Objekten gefiltert wird, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um die Filterung durchzuführen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors zur Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (wie unten beschrieben).

4. Das _Kommentar hinzufügen_-Formular kann mit einer funktionsbasierten Ansicht (und dem zugehörigen Modell und Formular) oder einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blog-Beitrags zur Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()` wie unten beschrieben).
   - Das Formular sollte nur die Kommentar-"Beschreibung" für die Benutzereingabe anzeigen (Datum und zugehöriger Blog-Beitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst angezeigt werden, muss Ihr Code in der Funktion `form_valid()` den Kommentarautor einstellen, damit er in das Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) - Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten zu sehen (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolgs-URL bereitstellen, zu der nach der Formularvalidierung weitergeleitet wird; dies sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die erforderliche Blog-ID mit dem `self.kwargs` Attribut erhalten, wie im obigen `form_valid()`-Methode gezeigt.

Wir haben kurz darüber gesprochen, einen Kontext in einer klassenbasierten Ansicht im Thema [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) an die Vorlage zu übergeben. Dazu müssen Sie `get_context_data()` überschreiben (zuerst den vorhandenen Kontext abrufen, ihn mit zusätzlichen Variablen aktualisieren, die Sie an die Vorlage übergeben möchten, und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt der untenstehende Codeausschnitt, wie Sie ein Blogger-Objekt basierend auf ihrer `BlogAuthor`-ID dem Kontext hinzufügen können.

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

Die Bewertung für diese Herausforderung ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl es einige Teile gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet, und dass Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein "Vollpunkte"-Projekt widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Serverseitigen Website-Programmierung abgeschlossen! Wir hoffen, Sie haben dieses Modul genossen und haben ein gutes Verständnis für die Grundlagen!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
