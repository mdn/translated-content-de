---
title: "Bewertung: DIY Django Mini-Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Bewertung werden Sie Ihr erworbenes Wissen über Django aus dem Modul [Django Web Framework (Python)](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Server-side/Django) nutzen, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um das Verständnis der Django-Grundlagen, einschließlich URL-Konfigurationen, Modelle, Ansichten, Formulare und Vorlagen, zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Projektbrief

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
      <td>Eine Indexseite, die die Seite beschreibt.</td>
    </tr>
    <tr>
      <td>Liste aller Blogbeiträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogbeiträge:</p>
        <ul>
          <li>Zugänglich für alle Benutzer über einen Link in der Seitenleiste.</li>
          <li>Liste sortiert nach Beitragsdatum (neueste zuerst).</li>
          <li>Liste paginiert in Gruppen von 5 Artikeln.</li>
          <li>Listeneinträge zeigen den Blogtitel, das Beitragsdatum und den Autor an.</li>
          <li>Blogbeitragsnamen sind zu Detailsseiten der Blogs verlinkt.</li>
          <li>
            Blogger (Autornamen) sind zu Detailsseiten der Blogautoren verlinkt.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailsseite des Blogautors (Blogger)</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen zu einem angegebenen Autor (nach ID) und Liste seiner Blogbeiträge:
        </p>
        <ul>
          <li>Zugänglich für alle Benutzer über Autorlinks in Blogbeiträgen usw.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Beitragsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Blogbeitragsnamen und das Beitragsdatum an.</li>
          <li>Blogbeitragsnamen sind zu Detailsseiten der Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailsseite des Blogbeitrags</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details des Blogbeitrags.</p>
        <ul>
          <li>Zugänglich für alle Benutzer aus den Blogbeitragslisten.</li>
          <li>
            Seite enthält den Blogbeitrag: Name, Autor, Beitragsdatum und Inhalt.
          </li>
          <li>Kommentare zum Blogbeitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in folgender Reihenfolge sortiert werden: älteste bis neueste.</li>
          <li>
            Enthält einen Link, um Kommentare am Ende hinzuzufügen für eingeloggte Benutzer (siehe Kommentierungsformularseite)
          </li>
          <li>
            Blogbeiträge und Kommentare müssen nur reinen Text anzeigen.
            Es besteht keine Notwendigkeit, irgendeine Art von HTML-Markup zu unterstützen (z.B. Links, Bilder, Fett/Kursiv usw.).
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
          <li>Zugänglich für alle Benutzer über die Seitenleiste der Website</li>
          <li>Bloggernamen sind zu Detailsseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentierungsformularseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar für Blogbeitrag erstellen:</p>
        <ul>
          <li>
            Zugänglich für eingeloggte Benutzer (nur) über den Link unten auf den Detailseiten des Blogbeitrags.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung zum Eingeben von Kommentaren an (Beitragsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nach dem Posten eines Kommentars wird die Seite zurück zur zugehörigen Blogbeitragsseite umgeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Abgemeldete Benutzer werden zur Anmeldeseite weitergeleitet, um sich anzumelden,
            bevor sie Kommentare hinzufügen können. Nach dem Anmelden werden sie
            zurück zur Blog-Seite geleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link zum kommentierten Blogbeitrag enthalten.
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
          Standard Django Authentifizierungsseiten zum Einloggen, Ausloggen und zum Setzen des Passworts:
        </p>
        <ul>
          <li>Login/Logout sollten über Links in der Seitenleiste zugänglich sein.</li>
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
          Die Admin-Seite sollte aktiviert sein, um das Erstellen/Bearbeiten/Löschen von Blogbeiträgen,
          Blogautoren und Blogkommentaren zu erlauben (dies ist der Mechanismus für Blogger,
          um neue Blogbeiträge zu erstellen):
        </p>
        <ul>
          <li>
            Admin-Seiten-Blogbeitragsdatensätze sollten die Liste der zugehörigen Kommentare inline anzeigen (unter jedem Blogbeitrag).
          </li>
          <li>
            Kommentarnamen in der Admin-Seite werden durch das Kürzen der Kommentarbeschreibung auf 75 Zeichen erstellt.
          </li>
          <li>Andere Arten von Datensätzen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Außerdem sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modellfelder haben das richtige Label und die richtige Länge.
- Alle Modelle haben den erwarteten Objektnamen (z.B. `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentardatensätze (z.B. `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (All-Blog-Seite) ist am erwarteten Ort zugänglich (z.B. /blog/blogs)
- Die BlogListView (All-Blog-Seite) ist an der erwarteten benannten URL zugänglich (z.B. 'blogs')
- Die BlogListView (All-Blog-Seite) verwendet die erwartete Vorlage (z.B. die Standardvorlage)
- Die BlogListView paginiert Datensätze in 5er Gruppen (zumindest auf der ersten Seite)

> [!NOTE]
> Es gibt natürlich viele weitere Tests, die Sie ausführen können. Nutzen Sie Ihr Ermessen, aber wir erwarten, dass Sie zumindest die oben genannten Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Seite, die die obigen Anforderungen umsetzt.

## Screenshots

Die folgenden Screenshots geben ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogbeiträge

Dies zeigt die Liste aller Blogbeiträge (zugänglich über den Link "Alle Blogs" in der Seitenleiste). Dinge zu beachten:

- Die Seitenleiste listet auch den eingeloggten Benutzer auf.
- Einzelne Blogbeiträge und Blogger sind als Links in der Seite zugänglich.
- Pagination ist aktiviert (in Gruppen von 5)
- Sortierung ist neueste zuerst.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie aus dem Link "Alle Blogger" in der Seitenleiste verlinkt sind. In diesem Fall sehen wir aus der Seitenleiste, dass kein Benutzer eingeloggt ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blog-Detail mit Kommentierungslink](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von ältestem zu neuestem geordnet sind (entgegengesetzt zur Blog-Sortierung). Am Ende haben wir einen Link, um auf das Formular zum Hinzufügen eines neuen Kommentars zuzugreifen. Wenn ein Benutzer nicht eingeloggt ist, würden wir stattdessen einen Vorschlag zum Einloggen sehen.

![Kommentierungslink bei Nicht-Eingeloggt-Sein](diyblog_blog_detail_not_logged_in.png)

### Kommentierungsformular

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zur zugehörigen Blog-Beitragsseite zurückgeleitet werden.

![Kommentierungsformular](diyblog_comment_form.png)

### Autorenbio

Dies zeigt biografische Informationen zu einem Blogger zusammen mit seiner Blogbeitragsliste.

![Blogger-Detailseite](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Skelettprojekt und eine Webanwendung für die Seite (wie beschrieben in [Django Tutorial Part 2: Creating a skeleton website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)). Vielleicht verwenden Sie 'diyblog' als Projektnamen und 'blog' als Anwendungsnamen.
2. Erstellen Sie Modelle für die Blogbeiträge, Kommentare und andere benötigte Objekte. Denken Sie bei Ihrem Design daran:

   - Jeder Kommentar wird nur einem Blog zugeordnet, aber ein Blog kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Beitragsdatum sortiert werden.
   - Nicht jeder Benutzer wird notwendigerweise ein Blogautor sein, obwohl jeder Benutzer ein Kommentator sein kann.
   - Blogautoren müssen auch biografische Informationen enthalten.

3. Führen Sie die Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blogbeiträge und -Kommentare zu erstellen.
5. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogbeitrags- und Bloggerlisten-Seiten.
6. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogbeitrags- und Bloggerdetail-Seiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dies nur für eingeloggte Benutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie werden in der Lage sein, das Skelett, das Benutzeranmelde-/Abmeldeverhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Konfiguration der Admin-Seite fast auf die gleiche Weise einzurichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als grundlegende Funktionsansicht und Vorlage implementiert werden (genau wie bei der LocalLibrary).
2. Die Listenansicht für Blogbeiträge und Blogger und die Detailansicht für Blogbeiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogbeiträge für einen bestimmten Autor kann durch Verwendung einer generischen Bloglistenansicht erstellt und für Blogobjekte gefiltert werden, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern durchzuführen (ähnlich wie in unserer Klassenbibliothek `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors an die Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (unten beschrieben).

4. Das _Kommentar hinzufügen_-Formular kann mit einer funktionsbasierten Ansicht (und zugehörigem Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogbeitrags auf der Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()` wie unten beschrieben).
   - Das Formular sollte nur die "Beschreibung" des Kommentars für Benutzereingaben anzeigen (Datum und zugehöriger Blogbeitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst enthalten sind, muss Ihr Code den Kommentar-Autor in der `form_valid()`-Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django Dok.). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolg-URL bereitstellen, zu der nach der Formularvalidierung umgeleitet wird; dies sollte der ursprüngliche Blog sein. Um dies zu tun, müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die erforderliche Blog-ID mit dem Attribut `self.kwargs` erhalten, wie oben in der `form_valid()`-Methode gezeigt.

Wir haben kurz über das Übergeben eines Kontexts an das Template in einer klassenbasierten Ansicht im [Django Tutorial Part 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) Thema gesprochen. Um dies zu tun, müssen Sie `get_context_data()` überschreiben (zuerst den bestehenden Kontext abrufen, ihn mit zusätzlichen Variablen, die Sie an das Template übergeben möchten, aktualisieren und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt das untenstehende Codefragment, wie Sie ein Bloggerobjekt basierend auf ihrer `BlogAuthor`-ID zum Kontext hinzufügen können.

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

Die Bewertung für diese Aufgabe ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben genannten Anforderungen erfüllt, obwohl es einige Teile der Bewertung gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet, und ob Sie zumindest einige Testcodes geschrieben haben. Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein "voller Noten"-Projekt widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Lernen der grundlegenden Django Server-seitigen Webseitenprogrammierung abgeschlossen! Wir hoffen, dass Ihnen dieses Modul gefallen hat und Sie ein gutes Verständnis für die Grundlagen haben!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
