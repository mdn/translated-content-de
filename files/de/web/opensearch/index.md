---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, selbst eine Suchmaschine zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine verwenden kann. OpenSearch wird mindestens von Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zu den Dokumentationen anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie Suchvorschläge und das `<SearchForm>`-Element. Dieser Artikel konzentriert sich auf die Erstellung von OpenSearch-kompatiblen Such-Plugins, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Autodiscovery von Such-Plugins](#autodiscovery_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Suchmaschinenfunktionen müssen die WebExtension-API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der nachstehenden Grundvorlage. Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie erstellen, angepasst werden.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er muss aus **16 oder weniger Zeichen** im Klartext bestehen, ohne HTML oder andere Markups.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss aus **1024 oder weniger Zeichen** im Klartext bestehen, ohne HTML oder andere Markups.
- InputEncoding
  - : Die [Zeichenkodierung](/de/docs/Glossary/Character_encoding), die beim Übermitteln von Eingaben an die Suchmaschine verwendet werden soll.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, fügen Sie ein 16×16-Bild des Typs `image/x-icon` (wie `/favicon.ico`) und ein 64×64-Bild des Typs `image/jpeg` oder `image/png` hinzu.

    Die URL kann auch das [`data:`-URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Icon-Datei in der [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) erstellen.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=</Image>
    ```

    Firefox speichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64) `data:`-URL im Cache (Such-Plugins werden im `searchplugins/`-Ordner des [Profils](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) gespeichert). `http:`- und `https:`-URLs werden dabei in `data:`-URLs konvertiert.

    > [!NOTE]
    > Für Symbole, die remote geladen werden (d.h. von `https://`-URLs im Gegensatz zu `data:`-URLs), lehnt Firefox Symbole ab, die größer als **10 Kilobyte** sind.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` spezifiziert die URL für die eigentliche Suchanfrage.
    - `type="application/x-suggestions+json"` spezifiziert die URL zum Abrufen von Suchvorschlägen. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` spezifiziert die URL, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer in der Suchleiste oder Adressleiste eingegebenen Suchbegriffe zu ersetzen. Andere dynamische Suchparameter, die unterstützt werden, sind in [OpenSearch 1.1-Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die URL-Vorlage `application/x-suggestions+json` verwendet, um eine Vorschlagsliste im [JSON](/de/docs/Glossary/JSON)-Format abzurufen.

## Autodiscovery von Such-Plugins

Websites mit Such-Plugins können diese bewerben, sodass Firefox-Nutzer die Plugins einfach installieren können.

Um Autodiscovery zu unterstützen, fügen Sie für jedes Plugin ein `<link>`-Element in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

Ersetzen Sie die hervorgehobenen Elemente wie unten erläutert:

- searchTitle
  - : Der Name der durchzuführenden Suche, z. B. "Search MDC" oder "Yahoo! Search". Dieser muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL des XML-Such-Plugins, damit der Browser es herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins anbietet, können Sie für alle Autodiscovery unterstützen. Zum Beispiel:

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

Auf diese Weise kann Ihre Seite Plugins zum Suchen nach Autor oder Titel anbieten.

> [!NOTE]
> In Firefox zeigt eine Symboländerung im Suchfeld an, dass ein bereitgestelltes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn also in der Benutzeroberfläche des Nutzers kein Suchfeld angezeigt wird, erhalten sie _kein_ Indiz. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung automatischer Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das `template`-Attribut sollte die URL des zu aktualisierenden OpenSearch-Dokuments sein.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Derzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatischen Updates für OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO einreichen möchten, entfernen Sie die Auto-Update-Funktion, bevor Sie es einreichen.

## Tipps zur Fehlerbehebung

Wenn es einen Fehler in Ihrer Such-Plugin-XML gibt, könnten Sie auf Fehler stoßen, wenn Sie ein entdecktes Plugin hinzufügen. Wenn die Fehlermeldung nicht hilfreich ist, können die folgenden Tipps helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihre Such-Plugin-XML gut formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Ampersands (&) im `template`-URL müssen als `&amp;` umgewandelt werden, und Tags müssen mit einem Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig — ohne dieses könnten Sie die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html` URL einschließen — Such-Plugins, die nur Atom- oder [RSS](/de/docs/Glossary/RSS)-URL-Typen beinhalten (was gültig ist, aber Firefox nicht unterstützt), generieren ebenfalls den Fehler "konnte das Such-Plugin nicht herunterladen".
- Remote abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox-Bug 361923](https://bugzil.la/361923)).

Darüber hinaus bietet der Such-Plugin-Dienst einen Logging-Mechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Einstellung `browser.search.log` auf `true` zu setzen. Dann erscheinen die Log-Informationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Extras ➤ Browser-Tools ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Suchanbietererkennung](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - erstellen Sie OpenSearch-Plugins. [Angepasste Suche durch Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
