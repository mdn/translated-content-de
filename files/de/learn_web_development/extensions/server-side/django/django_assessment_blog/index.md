---
title: "Herausforderung: DIY Django Mini-Blog"
short-title: "Herausforderung: Django Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung werden Sie die in dem Modul [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) erworbenen Kenntnisse nutzen, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung angehen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Das Verständnis der grundlegenden Django-Konzepte, einschließlich URL-Konfigurationen, Modelle, Ansichten, Formulare und Vorlagen, zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Projektbeschreibung

Die anzuzeigenden Seiten, deren URLs und weitere Anforderungen sind unten aufgeführt:

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
      <td>Liste aller Blogartikel</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogartikel:</p>
        <ul>
          <li>Zugänglich für alle Benutzer über einen Link in der Seitenleiste.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neuste zuerst).</li>
          <li>Liste ist in Gruppen von 5 Artikeln paginiert.</li>
          <li>Listenelemente zeigen den Blogtitel, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blogartikelnamen sind mit Detailseiten der Blogs verlinkt.</li>
          <li>
            Blogger (Autornamen) sind mit den Detailseiten der Blogautoren verlinkt.
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
          Informationen für einen bestimmten Autor (nach ID) und Liste seiner Blogartikel:
        </p>
        <ul>
          <li>Zugänglich für alle Benutzer über Autorlinks in Blogs etc.</li>
          <li>
            Beinhaltet einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neuste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listenelemente zeigen nur den Namen und das Veröffentlichungsdatum der Blogartikel.</li>
          <li>Blogartikelnamen sind mit Detailseiten der Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite des Blogartikels</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details des Blogartikels.</p>
        <ul>
          <li>Zugänglich für alle Benutzer aus Blogartikellisten.</li>
          <li>
            Seite enthält den Blogartikel: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare für den Blogartikel sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge sortiert sein: älteste bis neueste.</li>
          <li>
            Enthält einen Link zum Hinzufügen von Kommentaren am Ende für angemeldete Benutzer (siehe Kommentarseitenformular)
          </li>
          <li>
            Blogartikel und Kommentare müssen nur Klartext anzeigen.
            Es ist nicht notwendig, irgendeine Art von HTML-Markup (z.B. Links, Bilder, fett/kursiv etc.) zu unterstützen.
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
          <li>Zugänglich für alle Benutzer von der Seitenleiste der Website.</li>
          <li>Bloggernamen sind mit den Detailseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarseitenformular</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Einen Kommentar für einen Blogartikel erstellen:</p>
        <ul>
          <li>
            Zugänglich für registrierte Benutzer (nur) über einen Link am Ende der Detailseite des Blogartikels.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung für das Hinzufügen von Kommentaren (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nach dem Veröffentlichen eines Kommentars wird die Seite zurück zur zugehörigen Blogartikel-Seite umgeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Abgemeldete Benutzer werden zur Anmeldeseite umgeleitet, um sich anzumelden,
            bevor sie Kommentare hinzufügen können. Nach dem Anmelden werden sie
            zu der Blogseite zurückgeleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link zu dem kommentarmäßig behandelten Blogartikel enthalten.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Authentifizierungsseiten für Benutzer</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Standard-Django-Authentifizierungsseiten für die Anmeldung, Abmeldung und das Setzen des Passworts:
        </p>
        <ul>
          <li>Anmeldung/Ausloggen sollte über Seitenleisten-Links zugänglich sein.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Verwaltungsbereich</td>
      <td>
        <code>/admin/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Der Verwaltungsbereich sollte aktiviert werden, um das Erstellen/Bearbeiten/Löschen von Blogartikeln, Blogautoren und Blogkommentaren zu ermöglichen (dies ist der Mechanismus, mit dem Blogger neue Blogartikel erstellen):
        </p>
        <ul>
          <li>
            Blogartikel-Einträge im Verwaltungsbereich sollten die Liste der zugeordneten Kommentare inline (unter jedem Blogartikel) anzeigen.
          </li>
          <li>
            Kommentarnamen im Verwaltungsbereich werden erstellt, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Andere Arten von Einträgen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modulfelder haben die richtige Bezeichnung und Länge.
- Alle Modelle haben den erwarteten Objektnamen (z.B. `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentareinträge (z.B. `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (Seite mit allen Blogs) ist an der erwarteten Stelle zugänglich (z.B. /blog/blogs)
- Die BlogListView (Seite mit allen Blogs) ist unter der erwarteten benannten URL zugänglich (z.B. 'blogs')
- Die BlogListView (Seite mit allen Blogs) verwendet die erwartete Vorlage (z.B. die Standardvorlage)
- Die BlogListView paginiert die Einträge in Bündeln von 5 (mindestens auf der ersten Seite)

> [!NOTE]
> Natürlich gibt es viele weitere Tests, die Sie durchführen können. Verwenden Sie Ihr eigenes Ermessen, aber wir erwarten mindestens die oben genannten Tests.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Site, die die oben genannten Anforderungen implementiert.

## Screenshots

Die folgenden Screenshots zeigen ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogartikel

Dies zeigt die Liste aller Blogartikel (zugänglich über den "Alle Blogs"-Link in der Seitenleiste). Zu beachten:

- Die Seitenleiste listet auch den angemeldeten Benutzer auf.
- Einzelne Blogartikel und Blogger sind als Links auf der Seite zugänglich.
- Paginierung ist aktiviert (in Gruppen von 5)
- Sortierung ist von neuester zu ältester.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, die über den Link "Alle Blogger" in der Seitenleiste verlinkt sind. In diesem Fall sehen wir aus der Seitenleiste, dass kein Benutzer angemeldet ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blogdetailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blogdetail mit Kommentarlink](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von ältesten zu neuesten geordnet sind (entgegengesetzt zur Blogreihenfolge). Am Ende haben wir einen Link, um auf das Formular zum Hinzufügen eines neuen Kommentars zuzugreifen. Wenn ein Benutzer nicht angemeldet ist, würden wir stattdessen einen Vorschlag zum Anmelden sehen.

![Kommentarlink, wenn nicht angemeldet](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular hinzufügen

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir angemeldet sind. Wenn dies erfolgreich ist, sollten wir zur entsprechenden Blogseite zurückgeführt werden.

![Kommentarformular hinzufügen](diyblog_comment_form.png)

### Autorenbio

Dies zeigt biografische Informationen für einen Blogger sowie deren Blogartikel-Liste.

![Detailseite des Bloggers](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Gerüstprojekt und eine Webanwendung für die Site (wie in [Django Tutorial Teil 2: Erstellung einer Gerüstwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) beschrieben). Sie könnten 'diyblog' für den Projektnamen und 'blog' für den Anwendungnamen verwenden.
2. Erstellen Sie Modelle für die Blogartikel, Kommentare und alle anderen benötigten Objekte. Denken Sie bei der Planung daran:

   - Jeder Kommentar wird nur einen Blog haben, aber ein Blog kann viele Kommentare haben.
   - Blogartikel und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer wird notwendigerweise ein Blogautor sein, obwohl jeder Benutzer Kommentator sein kann.
   - Blogautoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Verwaltungsseite, um einige Beispiel-Blogartikel und Blogkommentare zu erstellen.
5. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogartikel- und Bloggerlisten-Seiten.
6. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogartikel- und Bloggerdetailseiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dass dies nur für angemeldete Benutzer verfügbar ist!).

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie können das Gerüst, das Benutzeran-/Abmeldeverhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Admin-Site-Konfiguration fast alle nach denselben Ansätzen einrichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktionsansicht und -vorlage implementiert werden (genau wie für die locallibrary).
2. Die Listenansicht für Blogartikel und Blogger sowie die Detailansicht für Blogartikel können mit den [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogartikel für einen bestimmten Autor kann durch Verwendung einer generischen Bloglistenansicht erstellt werden, indem die Blogobjekte gefiltert werden, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern durchzuführen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors der Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (weiter unten besprochen).

4. Das _Kommentar hinzufügen_ Formular kann mit einer funktionsbasierten Ansicht (und zugehörigem Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogartikels zur Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()`, wie weiter unten besprochen).
   - Das Formular sollte nur die Kommentar-"Beschreibung" für die Benutzereingabe anzeigen (Datum und zugeordneter Blogartikel sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst enthalten sein werden, muss Ihr Code den Autor des Kommentars in der Funktion `form_valid()` festlegen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung wird unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolgs-URL angeben, um nach der Formularvalidierung dorthin zu leiten; dies sollte der ursprüngliche Blog sein. Um dies zu tun, müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die benötigte Blog-ID mit dem Attribut `self.kwargs` abrufen, wie in der `form_valid()` Methode oben gezeigt.

Wir haben kurz darüber gesprochen, wie man einen Kontext an das Template in einer klassenbasierten Ansicht übergibt, im Thema [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views). Um dies zu tun, müssen Sie `get_context_data()` überschreiben (zuerst den bestehenden Kontext abrufen, ihn mit zusätzlichen Variablen aktualisieren, die Sie an das Template übergeben möchten, und dann den aktualisierten Kontext zurückgeben). Beispielsweise zeigt das folgende Codefragment, wie Sie ein Bloggerobjekt basierend auf deren `BlogAuthor`-ID in den Kontext hinzufügen können.

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

Die Bewertung für diese Herausforderung ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl es einige Teile gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet und dass Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie das [fertige Beispiel](https://github.com/mdn/django-diy-blog) anschauen, das ein Projekt mit "vollen Punkten" widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Server-Seiten-Website-Programmierung abgeschlossen! Wir hoffen, Sie haben dieses Modul genossen und haben Sie ein gutes Verständnis der Grundlagen erlangt!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
