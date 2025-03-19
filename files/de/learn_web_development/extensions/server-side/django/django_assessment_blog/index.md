---
title: "Herausforderung: DIY Django Mini-Blog"
short-title: "Herausforderung: Django Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung nutzen Sie das im Modul [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) erlernte Wissen, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung angehen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der Django-Grundlagen zu testen, einschließlich URL-Konfigurationen, Modelle, Views, Formulare und Templates.
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
      <td>Eine Indexseite, die die Seite beschreibt.</td>
    </tr>
    <tr>
      <td>Liste aller Blogbeiträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogbeiträge:</p>
        <ul>
          <li>Für alle Benutzer über einen Link in der Seitenleiste zugänglich.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Liste in Gruppen von 5 Artikeln paginiert.</li>
          <li>Listeneinträge zeigen den Titel des Blogs, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blogbeitragstitel sind zu Detailseiten der Blogbeiträge verlinkt.</li>
          <li>
            Blogger (Autorennamen) sind zu Detailseiten der Blogautoren verlinkt.
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
          Informationen für einen angegebenen Autor (nach id) und Liste seiner Blogbeiträge:
        </p>
        <ul>
          <li>Für alle Benutzer aus Authorenlinks in Blogbeiträgen usw. zugänglich.</li>
          <li>
            Enthält einige biographische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Namen und das Veröffentlichungsdatum des Blogbeitrags.</li>
          <li>Blogbeitragstitel sind zu Detailseiten der Blogbeiträge verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite des Blogbeitrags</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details des Blogbeitrags.</p>
        <ul>
          <li>Für alle Benutzer aus Listen der Blogbeiträge zugänglich.</li>
          <li>
            Seite enthält den Blogbeitrag: Name, Autor, Datum und Inhalt.
          </li>
          <li>Kommentare zum Blogbeitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge sortiert sein: älteste bis neueste.</li>
          <li>
            Enthält einen Link zum Hinzufügen von Kommentaren am Ende für angemeldete Benutzer (siehe Kommentarfomularseite).
          </li>
          <li>
            Blogbeiträge und Kommentare müssen nur als reiner Text angezeigt werden.
            Es ist nicht erforderlich, irgendeine Art von HTML-Markup zu unterstützen (z. B. Links, Bilder, fett/kursiv, etc.).
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
          <li>Für alle Benutzer über die Seitenleiste der Site zugänglich.</li>
          <li>Bloggernamen sind zu Detailseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarfomularseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar für Blogbeitrag erstellen:</p>
        <ul>
          <li>
            Für angemeldete Benutzer (nur) über den Link am Ende der Detailseiten von Blogbeiträgen zugänglich.
          </li>
          <li>
            Zeigt Formular mit Beschreibung zur Eingabe von Kommentaren (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück zur zugehörigen Blogbeitragsseite weitergeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Abgemeldete Benutzer werden zur Login-Seite geleitet, um sich anzumelden,
            bevor sie Kommentare hinzufügen können. Nach dem Anmelden werden sie
            zurück zur Blogseite weitergeleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten sollten den Namen/Link zum kommentierenden Blogbeitrag enthalten.
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
          Standard-Django-Authentifizierungsseiten zum Anmel...
        </p>
        <ul>
          <li>Anmelden/Abmelden sollte über Links in der Seitenleiste zugänglich sein.</li>
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
          Blogautoren und Blogkommentaren zu ermöglichen (dies ist der Mechanismus für
          Blogger, um neue Blogbeiträge zu erstellen):
        </p>
        <ul>
          <li>
            Admin-Seite-Blogbeitragsaufzeichnungen sollten die Liste der zugehörigen Kommentare inline anzeigen (unter jedem Blogbeitrag).
          </li>
          <li>
            Kommentar-Namen auf der Admin-Seite werden erstellt, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Andere Arten von Einträgen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben um zu verifizieren:

- Alle Modellfelder haben die richtigen Bezeichnungen und Längen.
- Alle Modelle haben den erwarteten Objektnamen (z. B. `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentaraufzeichnungen (z. B. `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (alle Blogs-Seite) ist an der erwarteten Stelle zugänglich (z. B. /blog/blogs).
- Die BlogListView (alle Blogs-Seite) ist über die erwartete benannte URL zugänglich (z. B. 'blogs').
- Die BlogListView (alle Blogs-Seite) verwendet das erwartete Template (z. B. das Standardtemplate).
- Die BlogListView paginiert Einträge in 5er-Gruppen (zumindest auf der ersten Seite).

> [!NOTE]
> Natürlich gibt es viele andere Tests, die Sie durchführen können. Verwenden Sie Ihr Ermessen, aber wir erwarten, dass Sie zumindest die oben genannten Tests durchführen.

Im folgenden Abschnitt werden [Screenshots](#screenshots) einer Seite gezeigt, die die oben genannten Anforderungen implementiert.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogbeiträge

Dies zeigt die Liste aller Blogbeiträge (zugänglich vom "Alle Blogs" Link in der Seitenleiste). Dinge, die zu beachten sind:

- Die Seitenleiste listet auch den angemeldeten Benutzer auf.
- Einzelne Blogbeiträge und Blogger sind als Links verfügbar.
- Die Seitennummerierung ist aktiviert (in 5er-Gruppen).
- Die Reihenfolge ist von neu nach alt.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie vom "Alle Blogger" Link in der Seitenleiste verlinkt sind. In diesem Fall können wir von der Seitenleiste sehen, dass kein Benutzer angemeldet ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blog-Detail mit "Kommentar hinzufügen"-Link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Zeit haben und von alt nach neu sortiert sind (umgekehrt zur Sortierung der Blogs). Am Ende haben wir einen Link für den Zugriff auf das Formular zum Hinzufügen eines neuen Kommentars. Wenn ein Benutzer nicht angemeldet ist, würden wir stattdessen einen Vorschlag zur Anmeldung sehen.

![Kommentar-Link bei nicht angemeldetem Benutzer](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular hinzufügen

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir angemeldet sind. Wenn dies erfolgreich ist, sollten wir zurück zur zugehörigen Blogbeitragsseite gelangen.

![Kommentarformular hinzufügen](diyblog_comment_form.png)

### Autorenbiografie

Dies zeigt biografische Informationen für einen Blogger zusammen mit seiner Blogbeitragsliste.

![Detailseite des Bloggers](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Grundgerüst für das Projekt und die Webanwendung der Seite (wie in [Django Tutorial Teil 2: Erstellen einer Grundgerüst-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) beschrieben). Sie können 'diyblog' für den Projektnamen und 'blog' für den Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blogbeiträge, Kommentare und andere benötigte Objekte. Denken Sie bei der Gestaltung daran:

   - Jeder Kommentar wird nur zu einem Blog gehören, aber ein Blog kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert sein.
   - Nicht jeder Benutzer wird zwangsläufig ein Blogautor sein, obwohl jeder Benutzer ein Kommentator sein kann.
   - Blogautoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blogbeiträge und Blogkommentare zu erstellen.
5. Erstellen Sie Views, Templates und URL-Konfigurationen für Blogbeiträge- und Bloggerlisten-Seiten.
6. Erstellen Sie Views, Templates und URL-Konfigurationen für Detailseiten von Blogbeiträgen und Bloggern.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dies nur für angemeldete Benutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist sehr ähnlich dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial. Sie werden in der Lage sein, das Grundgerüst, das An- und Abmeldeverhalten der Benutzer, die Unterstützung für statische Dateien, Views, URLs, Formulare, Basistemplates und die Konfiguration der Admin-Seite mit fast den gleichen Ansätzen einzurichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktions-View und Template implementiert werden (genau wie bei der locallibrary).
2. Die Listenansicht für Blogbeiträge und Blogger sowie die Detailansicht für Blogbeiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogbeiträge für einen bestimmten Autor kann erstellt werden, indem eine generische Bloglistenansicht verwendet und für Blogobjekte gefiltert wird, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern vorzunehmen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL erhalten.
   - Sie müssen auch den Namen des Autors an die Seite im Kontext übergeben. Dazu müssen Sie in einer klassenbasierten Ansicht `get_context_data()` implementieren (wie unten besprochen).

4. Das _Kommentar hinzufügen_-Formular kann mit einer funktionsbasierten View (und zugehörigem Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogbeitrags an die Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()`, wie unten besprochen).
   - Im Formular sollte nur die Kommentar-"Beschreibung" für die Benutzereingabe angezeigt werden (Datum und zugehöriger Blogbeitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst enthalten sein werden, muss Ihr Code den Autor des Kommentars in der `form_valid()`-Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung wird unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolgs-URL angeben, zu der nach Validierung des Formulars weitergeleitet wird; dies sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die benötigte Blog-ID mit dem Attribut `self.kwargs` erhalten, wie in der `form_valid()`-Methode oben gezeigt.

Wir haben kurz darüber gesprochen, wie man einem Template in einer klassenbasierten Ansicht einen Kontext übergibt, im [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) Thema. Dazu müssen Sie `get_context_data()` überschreiben (zuerst den vorhandenen Kontext abrufen, ihn mit zusätzlichen Variablen, die Sie an das Template übergeben möchten, aktualisieren und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt das folgende Codefragment, wie Sie ein Blogger-Objekt basierend auf seiner `BlogAuthor`-ID zum Kontext hinzufügen können.

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

Die Bewertung für diese Herausforderung ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben genannten Anforderungen erfüllt, obwohl einige Teile überprüfen, ob Ihr Code geeignete Modelle verwendet und dass Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie sich das [fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein Projekt mit "vollen Punkten" widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Serverseitigen-Website-Programmierung abgeschlossen! Wir hoffen, dass Ihnen dieses Modul gefallen hat und dass Sie ein gutes Verständnis der Grundlagen haben!

{{PreviousMenu("Learn_web_development/Extensions/Server_side/Django/web_application_security", "Learn_web_development/Extensions/Server_side/Django")}}
