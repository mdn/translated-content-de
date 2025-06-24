---
title: "Herausforderung: DIY Django Mini-Blog"
short-title: "Herausforderung: Django Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung nutzen Sie das Wissen, das Sie im [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) Modul gesammelt haben, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung angehen, sollten Sie bereits alle Artikel in diesem Modul bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der Django-Grundlagen wie URL-Konfigurationen, Modelle, Ansichten, Formulare und Templates zu testen.
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
          <li>Zugänglich für alle Benutzer über einen Seitenleistenlink.</li>
          <li>Liste sortiert nach Beitragsdatum (neueste zuerst).</li>
          <li>Liste paginiert in Gruppen von 5 Artikeln.</li>
          <li>Listeneinträge zeigen den Blogtitel, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blogbeitragsnamen sind mit den Detailseiten der Blogs verlinkt.</li>
          <li>
            Blogger (Autornamen) sind mit den Autorendetailseiten des Blogs verlinkt.
          </li>
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
          Informationen zu einem bestimmten Autor (nach ID) und Liste seiner Blogbeiträge:
        </p>
        <ul>
          <li>Zugänglich für alle Benutzer über Autorenlinks in Blogbeiträgen usw.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Beitragsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Namen des Blogbeitrags und das Veröffentlichungsdatum an.</li>
          <li>Blogbeitragsnamen sind mit den Detailseiten der Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blogbeitrags-Detailseite</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details zum Blogbeitrag.</p>
        <ul>
          <li>Zugänglich für alle Benutzer von Blogbeitragslisten.</li>
          <li>
            Die Seite enthält den Blogbeitrag: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare zum Blogbeitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge: vom ältesten zum neuesten sortiert sein.</li>
          <li>
            Enthält am Ende einen Link zum Hinzufügen von Kommentaren für eingeloggte Benutzer (siehe Kommentformularseite).
          </li>
          <li>
            Blogbeiträge und Kommentare sollten nur reinen Text anzeigen.
            Es ist nicht nötig, HTML-Markup (z. B. Links, Bilder, Fett/Kursiv usw.) zu unterstützen.
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
          <li>Bloggernamen sind mit den Autorendetailseiten des Blogs verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentformularseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar für Blogbeitrag erstellen:</p>
        <ul>
          <li>
            Zugänglich für eingeloggte Benutzer (nur) über einen Link am Ende der Detailseiten der Blogbeiträge.
          </li>
          <li>
            Zeigt Formular mit Beschreibung zum Eingeben von Kommentaren (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück zur zugehörigen Blogbeitragsseite weitergeleitet.
          </li>
          <li>Benutzer können ihre Beiträge weder bearbeiten noch löschen.</li>
          <li>
            Ausgeloggte Benutzer werden zur Login-Seite weitergeleitet, um sich einzuloggen,
            bevor sie Kommentare hinzufügen können. Nach dem Einloggen werden sie
            zurück zur Blogseite weitergeleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentseiten sollten den Namen/Link zum Blogbeitrag, auf den kommentiert wird, enthalten.
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
          Standard-Django-Authentifizierungsseiten zum Ein- und Ausloggen sowie zum Setzen des Passworts:
        </p>
        <ul>
          <li>Ein-/Ausloggen sollte über Seitenleistenlinks zugänglich sein.</li>
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
            Admin-Seiten-Blogbeitragsaufzeichnungen sollten die Liste der zugehörigen Kommentare inline (unter jedem Blogbeitrag) anzeigen.
          </li>
          <li>
            Kommentar-Namen in der Admin-Seite werden durch Abschneiden der Kommentarbeschreibung auf 75 Zeichen erstellt.
          </li>
          <li>Andere Arten von Aufzeichnungen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige einfache Tests schreiben, um zu überprüfen:

- Alle Modelfeldnamen haben die richtige Bezeichnung und Länge.
- Alle Modelle haben den erwarteten Objektnamen (z. B. gibt `__str__()` den erwarteten Wert zurück).
- Modelle verfügen über die erwartete URL für einzelne Blog- und Kommentaraufzeichnungen (z. B. gibt `get_absolute_url()` die erwartete URL zurück).
- Die BlogListView (alle-Blog-Seite) ist an der erwarteten Stelle zugänglich (z. B. /blog/blogs)
- Die BlogListView (alle-Blog-Seite) ist an der erwarteten benannten URL zugänglich (z. B. 'blogs')
- Die BlogListView (alle-Blog-Seite) verwendet das erwartete Template (z. B. das Standard-Template)
- Die BlogListView paginiert Aufzeichnungen in 5er-Gruppen (mindestens auf der ersten Seite)

> [!NOTE]
> Es gibt natürlich viele andere Tests, die Sie ausführen können. Verwenden Sie Ihr Ermessen, aber wir erwarten, dass Sie mindestens die oben genannten Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Site, die die oben genannten Anforderungen erfüllt.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogbeiträge

Diese zeigt die Liste aller Blogbeiträge (zugänglich über den Link "Alle Blogs" in der Seitenleiste). Zu beachten:

- Die Seitenleiste listet auch den eingeloggten Benutzer.
- Einzelne Blogbeiträge und Blogger sind als Links auf der Seite zugänglich.
- Die Seitennavigation ist aktiviert (in 5er-Gruppen).
- Die Reihenfolge ist von neuer zu älter.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Diese bietet Links zu allen Bloggern, da sie vom "Alle Blogger"-Link in der Seitenleiste verlinkt sind. In diesem Fall sehen wir in der Seitenleiste, dass kein Benutzer eingeloggt ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Diese zeigt die Detailseite für einen bestimmten Blog.

![Blog-Detail mit Link zum Kommentar hinzufügen](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von ältestem zu neuestem geordnet sind (entgegengesetzt zur Blogordnung). Am Ende haben wir einen Link, um das Formular zum Hinzufügen eines neuen Kommentars zu erreichen. Wenn ein Benutzer nicht eingeloggt ist, würden wir stattdessen einen Vorschlag zum Einloggen sehen.

![Kommentarlink, wenn nicht eingeloggert](diyblog_blog_detail_not_logged_in.png)

### Kommentar-Hinzufügungsformular

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zurück zur zugehörigen Blogbeitragsseite gelangen.

![Kommentar-Hinzufügungsformular](diyblog_comment_form.png)

### Autorenbiografie

Dies zeigt biografische Informationen für einen Blogger zusammen mit seiner Liste von Blogbeiträgen.

![Blogger-Detailseite](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Skelettprojekt und eine Webanwendung für die Site (wie in [Django Tutorial Teil 2: Erstellen eines Skelett-Websites](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) beschrieben). Sie könnten 'diyblog' für den Projektnamen und 'blog' für den Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blogbeiträge, Kommentare und andere benötigte Objekte. Denken Sie beim Design an:

   - Jeder Kommentar gehört zu nur einem Blog, aber ein Blog kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer wird unbedingt ein Blogautor, obwohl jeder Benutzer ein Kommentator sein kann.
   - Blogautoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blogbeiträge und -kommentare zu erstellen.
5. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blogbeiträge- und Bloggerlisten-Seiten.
6. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blogbeiträge- und Blogger-Detailseiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, diese nur für eingeloggte Benutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie können das Skelett, das Benutzer-Login/Logout-Verhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Konfiguration der Admin-Seite fast auf dieselbe Weise einrichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktionsansicht und Template implementiert werden (genau wie bei der Lokalbibliothek).
2. Die Listenansicht für Blogposts und Blogger sowie die Detailansicht für Blogposts können mithilfe der [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogposts für einen bestimmten Autor kann erstellt werden, indem eine generische Blog-Listenansicht verwendet wird und nach Blogobjekten gefiltert wird, die zum angegebenen Autor passen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern vorzunehmen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors an die Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (wie unten beschrieben).

4. Das _Kommentar hinzufügen_-Formular kann mit einer funktionsbasierten Ansicht (und dem zugehörigen Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogbeitrags zur Kommentar-Seite im Kontext übergeben (implementieren Sie `get_context_data()` wie unten beschrieben).
   - Das Formular sollte nur die Kommentar-"Beschreibung" für die Benutzer eingeben lassen (Datum und zugehöriger Blogbeitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst enthalten sind, muss Ihr Code den Autor des Kommentars in der `form_valid()`-Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In dieser Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolgs-URL angeben, zu der nach der Validierung des Formulars weitergeleitet wird; dies sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den Originalblog "umkehren". Sie können die benötigte Blog-ID über das `self.kwargs` Attribut erhalten, wie im `form_valid()` Methode oben gezeigt.

Wir haben kurz darüber gesprochen, wie man in einer klassenbasierten Ansicht einen Kontext an das Template übergibt, in dem [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) Thema. Dazu müssen Sie `get_context_data()` überschreiben (zuerst den vorhandenen Kontext abrufen, mit den zusätzlichen Variablen aktualisieren, die Sie an das Template übergeben möchten, und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt das untenstehende Codefragment, wie Sie ein Blogger-Objekt basierend auf ihrer `BlogAuthor`-ID zum Kontext hinzufügen können.

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

Die Bewertung für diese Herausforderung ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl es einige Teile gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet, und dass Sie zumindest etwas Testcode geschrieben haben.
Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, welches ein Projekt mit "vollständigen Punkten" widerspiegelt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Server-seitigen Website-Programmierung abgeschlossen! Wir hoffen, dass Ihnen dieses Modul gefallen hat und Sie ein gutes Verständnis der Grundlagen haben!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
