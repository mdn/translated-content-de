---
title: "Bewertung: DIY Django Mini-Blog"
slug: Learn/Server-side/Django/django_assessment_blog
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

In dieser Bewertung verwenden Sie das Django-Wissen, das Sie im Modul [Django-Web-Framework (Python)](/de/docs/Learn/Server-side/Django) erworben haben, um einen sehr einfachen Blog zu erstellen.

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
        Testen Sie das Verständnis der Django-Grundlagen, einschließlich URL-Konfigurationen, Modelle, Ansichten, Formulare und Vorlagen.
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
          <li>Zugänglich für alle Nutzer über einen Seitenleistenlink.</li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Liste aufgeteilt in Gruppen von 5 Artikeln.</li>
          <li>Listenelemente zeigen den Blogtitel, das Veröffentlichungsdatum und den Autor an.</li>
          <li>Blogbeitragsnamen sind mit Blogdetailseiten verlinkt.</li>
          <li>
            Blogger (Autoren) sind mit Blogautordetailseiten verlinkt.
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
          <li>Zugänglich für alle Nutzer über Autorenlinks in Blogbeiträgen usw.</li>
          <li>
            Enthält einige biografische Informationen über den Blogger/Autor.
          </li>
          <li>Liste sortiert nach Veröffentlichungsdatum (neueste zuerst).</li>
          <li>Nicht paginiert.</li>
          <li>Listenelemente zeigen nur den Blogbeitragsnamen und das Veröffentlichungsdatum.</li>
          <li>Blogbeitragsnamen sind mit Blogdetailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Blogbeitrag Detailseite</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>Details des Blogbeitrags.</p>
        <ul>
          <li>Zugänglich für alle Nutzer über Blogbeitragslisten.</li>
          <li>
            Seite enthält den Blogbeitrag: Name, Autor, Veröffentlichungsdatum und Inhalt.
          </li>
          <li>Kommentare zum Blogbeitrag sollten unten angezeigt werden.</li>
          <li>Kommentare sollten in der Reihenfolge vom ältesten zum neuesten sortiert werden.</li>
          <li>
            Enthält einen Link, um am Ende Kommentare hinzuzufügen, für eingeloggte Nutzer (siehe Kommentarseitenformular)
          </li>
          <li>
            Blogbeiträge und Kommentare müssen nur Klartext anzeigen.
            Es ist nicht erforderlich, irgendeine Art von HTML-Markup zu unterstützen (z. B. Links, Bilder, fett/kursiv, usw.).
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
          <li>Zugänglich für alle Nutzer von der Seitenleiste des Standorts</li>
          <li>Bloggernamen sind mit Blogautordetailseiten verlinkt.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Kommentarseite</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>Erstellen von Kommentaren für einen Blogbeitrag:</p>
        <ul>
          <li>
            Zugänglich für eingeloggte Benutzer (nur) von Link unten auf Blogdetailseiten.
          </li>
          <li>
            Zeigt ein Formular mit Beschreibung zum Eingeben von Kommentaren an (Veröffentlichungsdatum und Blog sind nicht bearbeitbar).
          </li>
          <li>
            Nachdem ein Kommentar gepostet wurde, wird die Seite zurück auf die zugehörige Blogseite umgeleitet.
          </li>
          <li>Benutzer können ihre Beiträge nicht bearbeiten oder löschen.</li>
          <li>
            Ausgeloggte Benutzer werden auf die Anmeldeseite weitergeleitet, um sich anzumelden,
            bevor sie Kommentare hinzufügen können. Nach dem Einloggen werden sie
            zurück auf die Blogseite, auf die sie kommentieren wollten, geleitet.
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
          Standard-Django-Authentifizierungsseiten für Anmeldung, Abmeldung und Passworteinstellung:
        </p>
        <ul>
          <li>Anmeldung/Abmeldung sollte über Seitenleistenlinks zugänglich sein.</li>
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
          Die Admin-Seite sollte aktiviert sein, um das Erstellen/Bearbeiten/Löschen von Blogbeiträgen, Blogautoren und Blogkommentaren zu ermöglichen (dies ist der Mechanismus für Blogger, um neue Blogbeiträge zu erstellen):
        </p>
        <ul>
          <li>
            In der Admin-Seite sollten Blogbeitragsaufzeichnungen die Liste der zugehörigen Kommentare inline unter jedem Blogbeitrag anzeigen.
          </li>
          <li>
            Kommentarnamen in der Admin-Seite werden durch das Kürzen der Kommentarbeschreibung auf 75 Zeichen erstellt.
          </li>
          <li>Andere Arten von Aufzeichnungen können die grundlegende Registrierung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Zusätzlich sollten Sie einige grundlegende Tests schreiben, um zu überprüfen:

- Alle Modulfelder haben das richtige Label und die richtige Länge.
- Alle Modelle haben den erwarteten Objektnamen (z. B. `__str__()` gibt den erwarteten Wert zurück).
- Modelle haben die erwartete URL für einzelne Blog- und Kommentaraufzeichnungen (z. B. `get_absolute_url()` gibt die erwartete URL zurück).
- Die BlogListView (alle-Blog-Seite) ist an der erwarteten Stelle zugänglich (z. B. /blog/blogs)
- Die BlogListView (alle-Blog-Seite) ist über die erwartete benannte URL zugänglich (z. B. 'blogs')
- Die BlogListView (alle-Blog-Seite) verwendet die erwartete Vorlage (z. B. die Standardvorlage)
- Die BlogListView paginiert die Einträge in 5er-Gruppen (mindestens auf der ersten Seite)

> [!NOTE]
> Es gibt natürlich viele andere Tests, die Sie durchführen können. Verwenden Sie Ihr Ermessen, aber wir erwarten, dass Sie zumindest die oben genannten Tests durchführen.

Der folgende Abschnitt zeigt [Screenshots](#screenshots) einer Seite, die die oben genannten Anforderungen umsetzt.

## Screenshots

Die folgenden Screenshots bieten ein Beispiel dafür, was das fertige Programm ausgeben sollte.

### Liste aller Blogbeiträge

Dies zeigt die Liste aller Blogbeiträge (zugänglich über den Link "Alle Blogs" in der Seitenleiste). Dinge, die zu beachten sind:

- Die Seitenleiste listet auch den eingeloggten Benutzer auf.
- Einzelne Blogbeiträge und Blogger sind als Links auf der Seite zugänglich.
- Paginierung ist aktiviert (in Gruppen von 5)
- Sortierung ist von neu nach alt.

![Liste aller Blogs](diyblog_allblogs.png)

### Liste aller Blogger

Dies bietet Links zu allen Bloggern, wie sie über den Link "Alle Blogger" in der Seitenleiste verlinkt sind. In diesem Fall sehen wir von der Seitenleiste, dass kein Benutzer eingeloggt ist.

![Liste aller Blogger](diyblog_blog_allbloggers.png)

### Blog-Detailseite

Dies zeigt die Detailseite für einen bestimmten Blog.

![Blogdetail mit Kommentar-hinzu-Link](diyblog_blog_detail_add_comment.png)

Beachten Sie, dass die Kommentare ein Datum _und_ eine Uhrzeit haben und von ältest nach neuest sortiert sind (entgegengesetzt zur Blogs-Sortierung). Am Ende haben wir einen Link, um auf das Formular zuzugreifen, um einen neuen Kommentar hinzuzufügen. Wenn ein Benutzer nicht eingeloggt ist, würden wir stattdessen einen Vorschlag zum Anmelden sehen.

![Kommentar-Link ohne Anmeldung](diyblog_blog_detail_not_logged_in.png)

### Kommentarseitenformular

Dies ist das Formular zum Hinzufügen von Kommentaren. Beachten Sie, dass wir eingeloggt sind. Wenn dies erfolgreich ist, sollten wir zurück zur zugehörigen Blogbeitragsseite geführt werden.

![Kommentarseite](diyblog_comment_form.png)

### Autoren-Biografie

Dies zeigt biografische Informationen für einen Blogger zusammen mit ihrer Liste von Blogbeiträgen.

![Blogger-Detailseite](diyblog_blogger_detail.png)

## Schritte zum Abschluss

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

1. Erstellen Sie ein Grundgerüst für das Projekt und die Webanwendung für die Seite (wie beschrieben in [Django Tutorial Teil 2: Erstellen eines Grundgerüsts für eine Website](/de/docs/Learn/Server-side/Django/skeleton_website)). Sie könnten 'diyblog' als Projektnamen und 'blog' als Anwendungsnamen verwenden.
2. Erstellen Sie Modelle für die Blogbeiträge, Kommentare und alle anderen benötigten Objekte. Denken Sie bei Ihrem Design an Folgendes:

   - Jeder Kommentar wird nur zu einem Blog gehören, aber ein Blog kann viele Kommentare haben.
   - Blogbeiträge und Kommentare müssen nach Veröffentlichungsdatum sortiert werden.
   - Nicht jeder Benutzer wird notwendigerweise ein Blogautor sein, obwohl jeder Benutzer ein Kommentator sein kann.
   - Blogautoren müssen auch Biografieinformationen enthalten.

3. Führen Sie Migrationen für Ihre neuen Modelle aus und erstellen Sie einen Superuser.
4. Verwenden Sie die Admin-Seite, um einige Beispiel-Blogbeiträge und Blogkommentare zu erstellen.
5. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogbeitrags- und Bloggerlisten-Seiten.
6. Erstellen Sie Ansichten, Vorlagen und URL-Konfigurationen für Blogbeitrags- und Bloggerdetailseiten.
7. Erstellen Sie eine Seite mit einem Formular zum Hinzufügen neuer Kommentare (denken Sie daran, dies nur für eingeloggte Benutzer verfügbar zu machen!)

## Hinweise und Tipps

Dieses Projekt ist sehr ähnlich zum [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Tutorial. Sie werden in der Lage sein, das Grundgerüst, das Benutzer-Login/Logout-Verhalten, die Unterstützung für statische Dateien, Ansichten, URLs, Formulare, Basistemplates und die Admin-Seiten-Konfiguration fast auf die gleiche Weise einzurichten.

Einige allgemeine Hinweise:

1. Die Indexseite kann als einfache Funktionsansicht und Vorlage implementiert werden (genau wie bei der LocalLibrary).
2. Die Listenansicht für Blogbeiträge und Blogger sowie die Detailansicht für Blogbeiträge können mit den [generischen Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views) erstellt werden.
3. Die Liste der Blogbeiträge für einen bestimmten Autor kann erstellt werden, indem eine generische Bloglistenansicht verwendet und für Blogobjekte gefiltert wird, die dem angegebenen Autor entsprechen.

   - Sie müssen `get_queryset(self)` implementieren, um die Filterung vorzunehmen (wie in unserer Bibliotheksklasse `LoanedBooksAllListView`) und die Autorinformationen aus der URL abrufen.
   - Sie müssen auch den Namen des Autors an die Seite im Kontext weiterleiten. Dazu müssen Sie in einer klassenbasierten Ansicht `get_context_data()` implementieren (weiter unten diskutiert).

4. Das Formular zum _Hinzufügen von Kommentaren_ kann mit einer funktionsbasierten Ansicht (und zugehörigem Modell und Formular) oder mit einer generischen `CreateView` erstellt werden. Wenn Sie eine `CreateView` verwenden (empfohlen), dann:

   - Sie müssen auch den Namen des Blogbeitrags an die Kommentarseite im Kontext übergeben (implementieren Sie `get_context_data()`, wie weiter unten besprochen).
   - Das Formular sollte nur die Kommentarbeschreibung für die Eingabe durch den Benutzer anzeigen (Datum und zugehöriger Blogbeitrag sollten nicht bearbeitbar sein). Da sie nicht im Formular selbst enthalten sein werden, muss Ihr Code den Autor des Kommentars in der Funktion `form_valid()` setzen, damit er im Modell gespeichert werden kann ([wie hier beschrieben](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django-Dokumentation). In derselben Funktion setzen wir den zugehörigen Blog. Eine mögliche Implementierung wird unten gezeigt (`pk` ist eine Blog-ID, die aus der URL/URL-Konfiguration übergeben wird).

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

   - Sie müssen eine Erfolgs-URL bereitstellen, um nach der Formularvalidierung dorthin umzuleiten; dies sollte der ursprüngliche Blog sein. Dazu müssen Sie `get_success_url()` überschreiben und die URL für den ursprünglichen Blog "umkehren". Sie können die erforderliche Blog-ID mit dem Attribut `self.kwargs` abrufen, wie im `form_valid()` Verfahren oben gezeigt.

Wir haben kurz darüber gesprochen, einen Kontext an die Vorlage in einer klassenbasierten Ansicht im Thema [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views#overriding_methods_in_class-based_views) zu übergeben. Dazu müssen Sie `get_context_data()` überschreiben (zuerst den vorhandenen Kontext abrufen, ihn mit zusätzlichen Variablen aktualisieren, die Sie an die Vorlage übergeben möchten, und dann den aktualisierten Kontext zurückgeben). Zum Beispiel zeigt der untenstehende Codeausschnitt, wie Sie ein Blogger-Objekt basierend auf ihrer `BlogAuthor`-ID zum Kontext hinzufügen können.

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

Die Bewertung für diese Aufgabe ist [hier auf GitHub verfügbar](https://github.com/mdn/django-diy-blog/blob/main/MarkingGuide.md). Diese Bewertung basiert hauptsächlich darauf, wie gut Ihre Anwendung die oben aufgeführten Anforderungen erfüllt, obwohl einige Teile der Bewertung prüfen, ob Ihr Code geeignete Modelle verwendet und dass Sie zumindest einige Testcodes geschrieben haben. Wenn Sie fertig sind, können Sie sich [das fertige Beispiel](https://github.com/mdn/django-diy-blog) ansehen, das ein Projekt mit "vollen Noten" darstellt.

Sobald Sie dieses Modul abgeschlossen haben, haben Sie auch alle MDN-Inhalte zum Erlernen der grundlegenden Django-Server-Programmierung abgeschlossen! Wir hoffen, Sie haben dieses Modul genossen und haben ein gutes Verständnis der Grundlagen!

{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
