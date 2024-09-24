---
title: "Bewertung: DIY Django Mini-Blog"
slug: Learn/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

In dieser Bewertung wenden Sie das Django-Wissen an, das Sie im Modul [Django Web Framework (Python)](/de/docs/Learn/Server-side/Django) gesammelt haben, um einen sehr einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Testen Sie das Verständnis von Django-Grundlagen, einschließlich URL-Konfigurationen, Modellen, Ansichten, Formularen und Templates.
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
      <td>Eine Übersichtsseite, die die Website beschreibt.</td>
    </tr>
    <tr>
      <td>Liste aller Blog-Posts</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blog-Posts:</p>
        <ul>
          <li>Zugänglich für alle Nutzer über einen Seitenleisten-Link.</li>
          <li>Liste sortiert nach Postdatum (neueste zuerst).</li>
          <li>Liste wird in Gruppen von 5 Artikeln paginiert.</li>
          <li>Listeneinträge zeigen den Blog-Titel, das Postdatum und den Autor an.</li>
          <li>Blog-Post-Namen sind mit Blog-Detailseiten verlinkt.</li>
          <li>
            Blogger (Autorennamen) sind mit Blog-Autor-Detailseiten verlinkt.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blog-Autor (Blogger) Detailseite</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen zu einem angegebenen Autor (per ID) und Liste seiner Blog-Posts:
        </p>
        <ul>
          <li>Zugänglich für alle Nutzer über Autor-Links in Blog-Posts usw.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Postdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listeneinträge zeigen nur den Blog-Post-Namen und das Postdatum.</li>
          <li>Blog-Post-Namen sind mit Blog-Detailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blog-Post-Detailseite</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details zum Blog-Post.</p>
        <ul>
          <li>Zugänglich für alle Nutzer aus Blog-Post-Listen.</li>
          <li>
            Die Seite enthält den Blog-Post: Name, Autor, Postdatum und Inhalt.
          </li>
          <li>Kommentare zum Blog-Post sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge sortiert werden: älteste bis jüngste.</li>
          <li>
            Enthält einen Link zum Hinzufügen von Kommentaren am Ende für eingeloggte Nutzer (siehe Kommentarformularseite)
          </li>
          <li>
            Blog-Posts und Kommentare müssen nur reinen Text anzeigen.
            Es besteht keine Notwendigkeit, irgendeine Art von HTML-Markup zu unterstützen (z. B. Links, Bilder, Fett/Kursiv usw.).
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
          <li>Zugänglich für alle Nutzer über die Seitenleiste</li>
          <li>Blogger-Namen sind mit Blog-Autor-Detailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarformularseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Kommentar für Blog-Post erstellen:</p>
        <ul>
          <li>
            Nur für eingeloggte Nutzer über einen Link am Ende der Blog-Post-Detailseiten.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung für die Eingabe von Kommentaren (Postdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück zur zugehörigen Blog-Post-Seite umgeleitet.
          </li>
          <li>Nutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Ausgeloggte Nutzer werden zur Anmeldeseite geleitet, um sich anzumelden, bevor sie Kommentare hinzufügen können. Nach der Anmeldung werden sie zurück zur Blog-Seite geleitet, auf der sie kommentieren wollten.
          </li>
          <li>
            Kommentar-Seiten sollten den Namen/Link zum Blog-Post enthalten, auf den kommentiert wird.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Nutzer-Authentifizierungsseiten</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Standard-Django-Authentifizierungsseiten für An-/Abmeldung und Passwort-Setzung:
        </p>
        <ul>
          <li>An- und Abmeldung sollte über Seitenleisten-Links zugänglich sein.</li>
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
          Die Admin-Seite sollte aktiviert werden, um das Erstellen/Bearbeiten/Löschen von Blog-Posts, Blog-Autoren und Blog-Kommentaren zu ermöglichen (dies ist der Mechanismus für Blogger, um neue Blog-Posts zu erstellen):
        </p>
        <ul>
          <li>
            Admin-Seiten-Blog-Post-Record sollten die Liste der zugehörigen Kommentare inline unter jedem Blog-Post anzeigen.
          </li>
          <li>
            Kommentarnamen in der Admin-Seite werden erstellt, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Andere Arten von Records können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modelfelder haben die korrekte Bezeichnung und Länge.
- Alle Modelle haben den erwarteten Objektnamen (z. B. gibt `__str__()` den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentar-Records (z. B. gibt `get_absolute_url()` die erwartete URL zurück).
- Die BlogListView (alle-Blogs-Seite) ist an der erwarteten Stelle zugänglich (z. B. /blog/blogs)
- Die BlogListView (alle-Blogs-Seite) ist unter der erwarteten benannten URL zugänglich (z. B. 'blogs')
- Die BlogListView (alle-Blogs-Seite) verwendet das erwartete Template (z. B. das Standard-Template)
- Die BlogListView paginiert Records mit jeweils 5 (zumindest auf der ersten Seite)

> [!NOTE]
> Es gibt natürlich viele andere Tests, die Sie durchführen können. Nutzen Sie Ihr Urteilsvermögen, aber wir erwarten von Ihnen, dass Sie mindestens die oben genannten Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Website, die die oben genannten Anforderungen implementiert.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blog-Posts

Dies zeigt die Liste aller Blog-Posts (erreichbar über den "Alle Blogs"-Link in der Seitenleiste). Beachten Sie:

- Die Seitenleiste listet auch den eingeloggten Nutzer auf.
- Einzelne Blog-Posts und Blogger sind als Links auf der Seite zugänglich.
- Paginierung ist aktiviert (in Gruppen zu 5)
- Sortierung ist von neu nach alt.

![List of all blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie vom "Alle Blogger"-Link in der Seitenleiste verlinkt sind. In diesem Fall können wir aus der Seitenleiste sehen, dass kein Nutzer angemeldet ist.

![List of all bloggers](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blog detail with add comment link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von alt nach neu sortiert sind (umgekehrt zur Blog-Sortierung). Am Ende befindet sich ein Link, um auf das Formular zum Hinzufügen eines neuen Kommentars zuzugreifen. Wenn ein Nutzer nicht eingeloggt ist, würden wir stattdessen einen Hinweis zur Anmeldung sehen.

![Comment link when not logged in](diyblog_blog_detail_not_logged_in.png)

### Kommentarformular

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zurück zur zugehörigen Blog-Post-Seite geleitet werden.

![Add comment form](diyblog_comment_form.png)

### Autorenbiografie

Dies zeigt biografische Informationen für einen Blogger zusammen mit ihrer Liste von Blog-Posts.

![Blogger detail page](diyblog_blogger_detail.png)

## Schritte zum Ausfüllen

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Skelettprojekt und eine Webanwendung für die Seite (wie beschrieben in [Django Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website)). Sie könnten 'diyblog' für den Projektnamen und 'blog' für den Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blog-Posts, Kommentare und alle anderen benötigten Objekte. Denken Sie bei der Gestaltung daran:

   - Jeder Kommentar wird nur einen Blog haben, aber ein Blog kann viele Kommentare haben.
   - Blog-Posts und Kommentare müssen nach Postdatum sortiert werden.
   - Nicht jeder Nutzer wird notwendigerweise ein Blog-Autor sein, aber jeder Nutzer kann ein Kommentator sein.
   - Blog-Autoren müssen auch biografische Informationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle durch und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blog-Posts und Blog-Kommentare zu erstellen.
5. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blog-Post- und Blogger-Listen-Seiten.
6. Erstellen Sie Ansichten, Templates und URL-Konfigurationen für Blog-Post- und Blogger-Detail-Seiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dass diese nur für eingeloggte Nutzer verfügbar ist!)

## Hinweise und Tipps

Dieses Projekt ist dem [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Tutorial sehr ähnlich. Sie können das Skelett, das Anmeldungs-/Abmeldeverhalten der Nutzer, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Admin-Seiten-Konfiguration fast auf die gleiche Weise einrichten.

Einige allgemeine Hinweise:

1. Die Startseite kann als einfache Funktionsansicht und Template implementiert werden (genau wie bei der locallibrary).
2. Die Listenansicht für Blog-Posts und Blogger sowie die Detailansicht für Blog-Posts können mit den [generischen Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blog-Posts eines bestimmten Autors kann erstellt werden, indem eine generische Blog-Listenansicht verwendet und auf Blog-Objekte gefiltert wird, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um das Filtern vorzunehmen (ähnlich wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autoreninformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors auf der Seite im Kontext übergeben. Um dies in einer klassenbasierten Ansicht zu tun, müssen Sie `get_context_data()` implementieren (im Folgenden erläutert).

4. Das _Hinzufügen von Kommentaren_ Formular kann mit einer funktionsbasierten Ansicht (und dem zugehörigen Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogposts auf der Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()` wie unten beschrieben).
   - Das Formular sollte nur das Kommentarfeld "Beschreibung" zur Benutzereingabe anzeigen (Datum und zugehöriger Blogpost sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst sind, muss Ihr Code den Autor des Kommentars in der `form_valid()` Funktion setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

     ```python
         def form_valid(self, form):
             """
             Autor und zugehörigen Blog zu den Formulardaten hinzufügen, bevor es als gültig festgelegt wird (damit es im Modell gespeichert wird)
             """
             # Den eingeloggten Nutzer als Autor des Kommentars hinzufügen
             form.instance.author = self.request.user
             # Kommentar mit Blog basierend auf übergebener ID verknüpfen
             form.instance.blog=get_object_or_404(Blog, pk = self.kwargs['pk'])
             # Formvalidierungsverhalten der Oberklasse aufrufen
             return super(BlogCommentCreate, self).form_valid(form)
     ```

   - Sie müssen eine Erfolgs-URL angeben, zu der nach der Formularvalidierung umgeleitet wird; dies sollte der ursprüngliche Blog sein. Dafür müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die benötigte Blog-ID mit dem `self.kwargs` Attribut erhalten, wie im obigen `form_valid()`-Methode gezeigt.

Wir haben kurz darüber gesprochen, wie man in einer klassenbasierten Ansicht einen Kontext an das Template übergibt, im [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) Thema. Um dies zu tun, müssen Sie `get_context_data()` überschreiben (zuerst den bestehenden Kontext abrufen, ihn mit zusätzlichen Variablen aktualisieren, die Sie an das Template übergeben möchten, und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt der untenstehende Codeausschnitt, wie man ein Blogger-Objekt basierend auf ihrer `BlogAuthor` ID zum Kontext hinzufügen kann.

```python
class SomeView(generic.ListView):
    # …

    def get_context_data(self, **kwargs):
        # Zuerst die Basisimplementierung aufrufen, um einen Kontext zu erhalten
        context = super(SomeView, self).get_context_data(**kwargs)
        # Das Blogger-Objekt aus dem "pk" URL Parameter abrufen und zum Kontext hinzufügen
        context['blogger'] = get_object_or_404(BlogAuthor, pk = self.kwargs['pk'])
        return context
```

## Bewertung

Die Bewertung für diese Aufgabe ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben genannten Anforderungen erfüllt, obwohl es einige Teile der Bewertung gibt, die überprüfen, ob Ihr Code geeignete Modelle verwendet und dass Sie zumindest einige Testcodes geschrieben haben.
Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein "Vollpunkt"-Projekt darstellt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Server-seitigen Website-Programmierung abgeschlossen! Wir hoffen, Sie haben dieses Modul genossen und fühlen sich gut gerüstet mit den Grundlagen!

{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
