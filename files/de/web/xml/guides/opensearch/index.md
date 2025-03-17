---
title: OpenSearch-Beschreibungsformat
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Weboberfläche einer Suchmaschine zu beschreiben. Dadurch kann eine Website eine Suchmaschine für sich selbst definieren, sodass ein Browser oder eine andere Clientanwendung diese Suchmaschine nutzen kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt außerdem zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z. B. Suchvorschläge. Dieser Artikel konzentriert sich auf die Erstellung von OpenSearch-kompatiblen Such-Plugins, die diese zusätzlichen Funktionen von Firefox unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Automatische Erkennung von Such-Plugins](#automatische_erkennung_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinenfunktion muss die WebExtension-API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei nutzen.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der grundlegenden Vorlage unten. Die Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie schreiben, angepasst werden.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er muss aus **16 oder weniger Zeichen** reinem Text bestehen, ohne HTML oder andere Markups.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss aus **1024 oder weniger Zeichen** reinem Text bestehen, ohne HTML oder andere Markups.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die beim Übermitteln von Eingaben an die Suchmaschine verwendet wird.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, sollten Sie ein 16×16-Bild vom Typ `image/x-icon` (wie z. B. `/favicon.ico`) und ein 64×64-Bild vom Typ `image/jpeg` oder `image/png` einbinden.

    Die URL kann auch das [`data:`-URL-Schema](/de/docs/Web/URI/Reference/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Symboldatei mit [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox speichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64)-`data:`-URL im Cache (Such-Plugins werden im Ordner `searchplugins/` des [Benutzerprofils](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) gespeichert). `http:`- und `https:`-URLs werden dabei in `data:`-URLs umgewandelt.

    > [!NOTE]
    > Für Symbole, die remote geladen werden (d.h. von `https://`-URLs im Gegensatz zu `data:`-URLs), lehnt Firefox Symbole ab, die größer als **10 Kilobyte** sind.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden. Das Attribut `template` gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL für das Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlagwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer im Suchfeld oder in der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1 parameters](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json`-URL-Vorlage verwendet, um eine Liste von Vorschlägen im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Automatische Erkennung von Such-Plugins

Websites mit Such-Plugins können diese bewerben, damit Firefox-Benutzer die Plugins einfach installieren können.

Um die automatische Erkennung zu unterstützen, fügen Sie für jedes Plugin ein `<link>`-Element in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie folgt:

- searchTitle
  - : Der Name der durchzuführenden Suche, z. B. „Search MDC“ oder „Yahoo! Search“. Dies muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Such-Plugin, damit der Browser es herunterladen kann.

Wenn Ihre Website mehrere Such-Plugins anbietet, können Sie die automatische Erkennung für alle unterstützen. Zum Beispiel:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

Auf diese Weise kann Ihre Website Plugins anbieten, um nach Autor oder nach Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Symboländerung im Suchfeld an, dass ein Such-Plugin bereitgestellt wird. (Siehe Bild, das grüne Pluszeichen.) Wenn jedoch kein Suchfeld in der Benutzeroberfläche des Nutzers angezeigt wird, erfolgt _keine_ Anzeige. _Im Allgemeinen variiert das Verhalten zwischen den Browsern._

## Unterstützung für automatische Updates von OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` ein. Das Attribut `template` sollte auf die URL des OpenSearch-Dokuments verweisen, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Zurzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatische Aktualisierung von OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO hochladen möchten, entfernen Sie die automatische Aktualisierungsfunktion vor dem Einreichen.

## Tipps zur Fehlerbehebung

Falls ein Fehler in Ihrer XML-Datei für das Such-Plugin vorliegt, können beim Hinzufügen eines entdeckten Plugins Fehler auftreten. Wenn die Fehlermeldung nicht hilfreich ist, können die folgenden Tipps helfen, das Problem zu finden:

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihre XML-Datei des Such-Plugins korrekt formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Kaufmännische Und-Zeichen (&) in der `template`-URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das Attribut `xmlns` ist wichtig — ohne dieses könnte die Fehlermeldung „Firefox konnte das Such-Plugin nicht herunterladen“ auftreten.
- Sie **müssen** eine `text/html`-URL einfügen — Such-Plugins, die nur Atom- oder {{Glossary("RSS", "RSS")}}-URL-Typen enthalten (was gültig ist, aber von Firefox nicht unterstützt wird), erzeugen ebenfalls den Fehler „konnte das Such-Plugin nicht herunterladen“.
- Remote abgerufene Favicons dürfen nicht größer als 10 KB sein (siehe [Firefox-Bug 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Such-Plugin-Dienst einen Logging-Mechanismus, der für Plugin-Entwickler nützlich sein kann. Nutzen Sie `about:config`, um die Einstellung `browser.search.log` auf `true` zu setzen. Dann werden Log-Informationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole) angezeigt, wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Schnellwebsitesuche](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev-Leitfaden: Entdeckung des Suchanbieters](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Registerkarte zum Suchen](https://www.chromium.org/tab-to-search/)
- imdb.com hat ein [funktionierendes `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - Erstellen Sie OpenSearch-Plugins. [Angepasste Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
