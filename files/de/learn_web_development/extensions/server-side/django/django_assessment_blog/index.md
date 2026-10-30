---
title: "Herausforderung: Ein eigener Django-Miniblog"
short-title: "Herausforderung: Django-Blog"
slug: Learn_web_development/Extensions/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

In dieser Herausforderung nutzen Sie das Wissen, das Sie im Modul [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django) erworben haben, um einen einfachen Blog zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Herausforderung angehen, sollten Sie alle Artikel dieses Moduls durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihr Verständnis der Django-Grundlagen zu überprüfen, einschließlich URL-Konfigurationen, Modellen, Views, Formularen und Templates.
      </td>
    </tr>
  </tbody>
</table>

## Projektbeschreibung

Die anzuzeigenden Seiten, ihre URLs und weitere Anforderungen sind nachstehend aufgeführt:

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
      <td>Liste aller Blogbeiträge</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>Liste aller Blogbeiträge:</p>
        <ul>
          <li>Für alle Benutzer über einen Link in der Seitenleiste erreichbar.</li>
          <li>Nach Veröffentlichungsdatum sortiert (neueste zuerst).</li>
          <li>In Seiten mit jeweils 5 Beiträgen unterteilt.</li>
          <li>Listeneinträge zeigen Titel, Veröffentlichungsdatum und Autor des Blogbeitrags an.</li>
          <li>Die Titel der Blogbeiträge sind mit den jeweiligen Detailseiten verlinkt.</li>
          <li>
            Die Namen der Blogger (Autoren) sind mit deren Detailseiten verlinkt.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite eines Blogautors (Bloggers)</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>
          Informationen zu einem bestimmten Autor (anhand seiner ID) und eine Liste seiner Blogbeiträge:
        </p>
        <ul>
          <li>Für alle Benutzer über Autorenlinks in Blogbeiträgen usw. erreichbar.</li>
          <li>
            Enthält biografische Informationen über den Blogger beziehungsweise Autor.
          </li>
          <li>Nach Veröffentlichungsdatum sortiert (neueste zuerst).</li>
          <li>In Seiten mit jeweils 5 Beiträgen unterteilt.</li>
          <li>Listeneinträge zeigen nur den Titel und das Veröffentlichungsdatum des Blogbeitrags an.</li>
          <li>Die Titel der Blogbeiträge sind mit den jeweiligen Detailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Detailseite eines Blogbeitrags</td>
      <td>
        <code>/blog/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details zum Blogbeitrag.</p>
        <ul>
          <li>Für alle Benutzer über die Listen der Blogbeiträge erreichbar.</li>
          <li>
            Die Seite enthält Titel, Autor, Veröffentlichungsdatum und Inhalt des Blogbeitrags.
          </li>
          <li>Kommentare zum Blogbeitrag werden am Ende der Seite angezeigt.</li>
          <li>Kommentare sind vom ältesten zum neuesten sortiert.</li>
          <li>
            Enthält am Ende einen Link, über den angemeldete Benutzer Kommentare hinzufügen können (siehe Seite mit dem Kommentarformular).
          </li>
          <li>
            Blogbeiträge und Kommentare müssen nur als reiner Text angezeigt werden.
            HTML-Markup jeglicher Art (z. B. Links, Bilder, Fett- oder Kursivschrift) muss nicht unterstützt werden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Liste aller Blogger</td>
      <td><code>/blog/bloggers/</code></td>
      <td>
        <p>Liste der Blogger auf der Website:</p>
        <ul>
          <li>Für alle Benutzer über die Seitenleiste erreichbar.</li>
          <li>Die Namen der Blogger sind mit den Detailseiten der Blogautoren verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Seite mit dem Kommentarformular</td>
      <td><code>/blog/blog/<em>&#x3C;blog-id></em>/comment/</code></td>
      <td>
        <p>Kommentar zu einem Blogbeitrag erstellen:</p>
        <ul>
          <li>
            Nur für angemeldete Benutzer über einen Link am Ende der Detailseite eines Blogbeitrags erreichbar.
          </li>
          <li>
            Zeigt ein Formular mit einem Beschreibungsfeld für den Kommentar an (Veröffentlichungsdatum und zugehöriger Blogbeitrag sind nicht bearbeitbar).
          </li>
          <li>
            Nach dem Absenden eines Kommentars erfolgt eine Weiterleitung zur Seite des zugehörigen Blogbeitrags.
          </li>
          <li>Benutzer können ihre Beiträge weder bearbeiten noch löschen.</li>
          <li>
            Abgemeldete Benutzer werden zunächst zur Anmeldeseite weitergeleitet,
            bevor sie Kommentare hinzufügen können. Nach der Anmeldung werden sie
            zurück zur Seite des Blogbeitrags geleitet, den sie kommentieren wollten.
          </li>
          <li>
            Kommentarseiten enthalten den Titel und einen Link zum kommentierten Blogbeitrag.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Seiten zur Benutzerauthentifizierung</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          Die standardmäßigen Django-Seiten zum An- und Abmelden sowie zum Festlegen des Passworts:
        </p>
        <ul>
          <li>Die An- und Abmeldung sind über Links in der Seitenleiste erreichbar.</li>
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
          Die Admin-Seite ist aktiviert, damit Blogbeiträge, Blogautoren und Blogkommentare erstellt, bearbeitet und gelöscht werden können (über diese Funktion erstellen Blogger neue Blogbeiträge):
        </p>
        <ul>
          <li>
            Die Datensätze für Blogbeiträge auf der Admin-Seite zeigen die zugehörigen Kommentare inline an (unter dem jeweiligen Blogbeitrag).
          </li>
          <li>
            Die Bezeichnungen von Kommentaren auf der Admin-Seite entstehen, indem die Kommentarbeschreibung auf 75 Zeichen gekürzt wird.
          </li>
          <li>Für andere Datensatztypen genügt eine einfache Registrierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Schreiben Sie außerdem einige grundlegende Tests, um Folgendes zu überprüfen:

- Alle Modellfelder haben die richtige Bezeichnung und Länge.
- Alle Modelle haben den erwarteten Objektnamen (z. B. gibt `__str__()` den erwarteten Wert zurück).
- Die Modelle liefern die erwartete URL für einzelne Blog- und BlogAuthor-Datensätze (z. B. gibt `get_absolute_url()` die erwartete URL zurück).
- Die BlogListView (Seite mit allen Blogbeiträgen) ist unter der erwarteten Adresse erreichbar (z. B. /blog/blogs).
- Die BlogListView (Seite mit allen Blogbeiträgen) ist über die erwartete benannte URL erreichbar (z. B. 'blogs').
- Die BlogListView (Seite mit allen Blogbeiträgen) verwendet das erwartete Template (z. B. das Standard-Template).
- Die BlogListView teilt Datensätze in Seiten mit jeweils 5 Einträgen auf (zumindest auf der ersten Seite).

> [!NOTE]
> Natürlich können Sie noch viele weitere Tests ausführen. Entscheiden Sie selbst, welche sinnvoll sind. Wir erwarten jedoch mindestens die oben genannten Tests.

Im folgenden Abschnitt finden Sie [Screenshots](#screenshots) einer Website, die die oben genannten Anforderungen erfüllt.

## Screenshots

Die folgenden Screenshots zeigen beispielhaft, wie das fertige Programm aussehen sollte.

### Liste aller Blogbeiträge

Hier wird die Liste aller Blogbeiträge angezeigt (erreichbar über den Link „All blogs“ in der Seitenleiste). Beachten Sie Folgendes:

- In der Seitenleiste wird auch der angemeldete Benutzer angezeigt.
- Einzelne Blogbeiträge und Blogger sind über Links auf der Seite erreichbar.
- Die Seitennummerierung ist aktiviert (jeweils 5 Einträge).
- Die Beiträge sind vom neuesten zum ältesten sortiert.

![Liste aller Blogbeiträge](diyblog_allblogs.png)

### Liste aller Blogger

Diese Seite enthält Links zu allen Bloggern und ist über den Link „All bloggers“ in der Seitenleiste erreichbar. In diesem Beispiel zeigt die Seitenleiste, dass kein Benutzer angemeldet ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Detailseite eines Blogbeitrags

Dies ist die Detailseite eines bestimmten Blogbeitrags.

![Blogdetailseite mit Link zum Hinzufügen eines Kommentars](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und vom ältesten zum neuesten sortiert sind (also umgekehrt wie die Blogbeiträge). Am Ende befindet sich ein Link zum Formular für einen neuen Kommentar. Ist ein Benutzer nicht angemeldet, wird stattdessen ein Hinweis zur Anmeldung angezeigt.

![Kommentarlink bei abgemeldetem Benutzer](diyblog_blog_detail_not_logged_in.png)

### Formular zum Hinzufügen eines Kommentars

Mit diesem Formular können Kommentare hinzugefügt werden. Beachten Sie, dass der Benutzer angemeldet ist. Nach erfolgreichem Absenden sollte die Seite des zugehörigen Blogbeitrags angezeigt werden.

![Formular zum Hinzufügen eines Kommentars](diyblog_comment_form.png)

### Autorenbiografie

Diese Seite zeigt biografische Informationen über einen Blogger sowie eine Liste seiner Blogbeiträge.

![Detailseite eines Bloggers](diyblog_blogger_detail.png)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Grundgerüst für das Projekt und die Webanwendung (wie in [Django-Tutorial Teil 2: Ein Website-Grundgerüst erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) beschrieben). Sie können „diyblog“ als Projektnamen und „blog“ als Namen der Anwendung verwenden.
2. Erstellen Sie Modelle für Blogbeiträge, Kommentare und alle weiteren benötigten Objekte. Berücksichtigen Sie bei Ihrem Entwurf:
   - Jeder Kommentar gehört zu genau einem Blogbeitrag, aber ein Blogbeitrag kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer ist zwangsläufig ein Blogautor, aber jeder Benutzer kann Kommentare verfassen.
   - Blogautoren benötigen außerdem biografische Informationen.

3. Führen Sie Migrationen für Ihre neuen Modelle aus und erstellen Sie einen Superuser.
4. Erstellen Sie über die Admin-Seite einige beispielhafte Blogbeiträge und Kommentare.
5. Erstellen Sie Views, Templates und URL-Konfigurationen für die Listenseiten der Blogbeiträge und Blogger.
6. Erstellen Sie Views, Templates und URL-Konfigurationen für die Detailseiten der Blogbeiträge und Blogger.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dass nur angemeldete Benutzer darauf zugreifen dürfen!).

## Hinweise und Tipps

Dieses Projekt ähnelt stark dem [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Tutorial. Für das Grundgerüst, die An- und Abmeldung von Benutzern, die Unterstützung statischer Dateien, Views, URLs, Formulare, Basis-Templates und die Konfiguration der Admin-Seite können Sie weitgehend dieselben Ansätze verwenden.

Einige allgemeine Hinweise:

1. Die Startseite lässt sich mit einer einfachen funktionsbasierten View und einem Template umsetzen (genau wie bei LocalLibrary).
2. Die Listenansichten für Blogbeiträge und Blogger sowie die Detailansicht für Blogbeiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogbeiträge eines bestimmten Autors können Sie mit einer generischen Blog-Listenansicht erstellen, die nach Blogobjekten des angegebenen Autors filtert.
   - Für die Filterung müssen Sie `get_queryset(self)` implementieren (ähnlich wie bei der Klasse `LoanedBooksByUserListView` in unserem Bibliotheksprojekt) und die Autoreninformationen aus der URL abrufen.
   - Außerdem müssen Sie den Namen des Autors über den Kontext an die Seite übergeben. Implementieren Sie dazu in einer klassenbasierten View `get_context_data()` (siehe unten).

4. Das Formular zum _Hinzufügen eines Kommentars_ lässt sich mit einer funktionsbasierten View (und dem zugehörigen Modell und Formular) oder mit einer generischen `CreateView` erstellen. Wenn Sie eine `CreateView` verwenden (empfohlen):
   - Müssen Sie auch den Titel des Blogbeitrags über den Kontext an die Kommentarseite übergeben (implementieren Sie `get_context_data()` wie unten beschrieben).
   - Das Formular sollte für Benutzereingaben nur das Beschreibungsfeld des Kommentars anzeigen (Datum und zugehöriger Blogbeitrag dürfen nicht bearbeitbar sein). Da diese Angaben nicht im Formular selbst enthalten sind, muss Ihr Code den Autor des Kommentars in der Funktion `form_valid()` festlegen, damit er im Modell gespeichert werden kann (siehe [Models and request.user](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-editing/#models-and-request-user) in der Django-Dokumentation). In derselben Funktion legen wir den zugehörigen Blogbeitrag fest. Eine mögliche Implementierung ist unten gezeigt (`pk` ist eine Blog-ID, die über die URL beziehungsweise URL-Konfiguration übergeben wird).

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
             return super().form_valid(form)
     ```

   - Müssen Sie eine Erfolgs-URL angeben, zu der nach erfolgreicher Validierung des Formulars weitergeleitet wird; dies sollte der ursprüngliche Blogbeitrag sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blogbeitrag mit „reverse“ auflösen. Die benötigte Blog-ID erhalten Sie über das Attribut `self.kwargs`, wie oben in der Methode `form_valid()` gezeigt.

Im Abschnitt [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) haben wir kurz besprochen, wie in einer klassenbasierten View ein Kontext an das Template übergeben wird. Dazu überschreiben Sie `get_context_data()`: Rufen Sie zunächst den vorhandenen Kontext ab, ergänzen Sie ihn um die Variablen, die Sie an das Template übergeben möchten, und geben Sie anschließend den aktualisierten Kontext zurück. Das folgende Codefragment zeigt beispielsweise, wie Sie anhand der ID eines `BlogAuthor` ein Blogger-Objekt zum Kontext hinzufügen.

```python
class SomeView(generic.ListView):
    # …

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Get the blogger object from the "pk" URL parameter and add it to the context
        context['blogger'] = get_object_or_404(BlogAuthor, pk = self.kwargs['pk'])
        return context
```

## Bewertung

Für diese Herausforderung gibt es kein formelles Bewertungsschema.
Wenn Ihre Anwendung funktioniert und die in diesem Artikel aufgeführten Anforderungen erfüllt, haben Sie die Aufgabe erfolgreich gelöst!
Anschließend können Sie Ihren Code mit dem [fertigen Beispiel](https://github.com/mdn/django-diy-blog) vergleichen.

Mit Abschluss dieses Moduls haben Sie auch alle MDN-Inhalte zu den Grundlagen der serverseitigen Website-Programmierung mit Django durchgearbeitet! Wir hoffen, dass Ihnen das Modul gefallen hat und Sie nun die Grundlagen gut beherrschen!

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
