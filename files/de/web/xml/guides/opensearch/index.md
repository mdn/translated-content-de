---
title: OpenSearch-Beschreibungsformat
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Weboberfläche einer Suchmaschine zu beschreiben. Dadurch kann eine Website eine Suchmaschine beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine nutzen kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt außerdem zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z. B. Suchvorschläge. Dieser Artikel konzentriert sich auf die Erstellung von OpenSearch-kompatiblen Such-Plugins, die diese zusätzlichen Funktionen von Firefox unterstützen.

OpenSearch-Beschreibungsdateien können wie im Abschnitt [Automatische Erkennung von Such-Plugins](#automatische_erkennung_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinen-Funktionalität muss die WebExtension-API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der unten dargestellten Grundvorlage. Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie erstellen, angepasst werden.

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
  - : Ein kurzer Name für die Suchmaschine. Dieser muss aus **höchstens 16 Zeichen** einfachen Textes bestehen, ohne HTML oder andere Markups.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Diese muss aus **höchstens 1024 Zeichen** einfachen Textes bestehen, ohne HTML oder andere Markups.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die bei der Übermittlung der Eingabe an die Suchmaschine verwendet wird.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, fügen Sie ein 16×16 Bild des Typs `image/x-icon` (wie `/favicon.ico`) und ein 64×64 Bild des Typs `image/jpeg` oder `image/png` ein.

    Die URL kann auch das [`data:`-URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Symboldatei mit [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox speichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64)-`data:`-URL (Such-Plugins werden im Ordner `searchplugins/` des [Profils](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) abgelegt). `http:`- und `https:`-URLs werden dabei in `data:`-URLs konvertiert.

    > [!NOTE]
    > Bei Symbolen, die remote geladen werden (d. h. von `https://`-URLs im Gegensatz zu `data:`-URLs), lehnt Firefox Symbole ab, die größer als **10 Kilobyte** sind.

    ![Suchvorschläge von Google in der Suchleiste von Firefox angezeigt](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das Attribut `template` gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die tatsächliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL zum Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Stichwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die im Suchfeld oder in der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Weitere unterstützte dynamische Suchparameter sind unter [OpenSearch 1.1-Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json`-URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Automatische Erkennung von Such-Plugins

Websites mit Such-Plugins können diese bewerben, sodass Firefox-Nutzende die Plugins einfach installieren können.

Um die automatische Erkennung zu unterstützen, fügen Sie für jedes Plugin ein `<link>`-Element in den `<head>`-Abschnitt Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erläutert:

- searchTitle
  - : Der Name der Suche, z. B. „MDC durchsuchen“ oder „Yahoo! Search“. Dieser muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Suchplugin, damit der Browser es herunterladen kann.

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

Auf diese Weise kann Ihre Website Plugins anbieten, um beispielsweise nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Änderung des Symbols in der Suchleiste an, dass ein Such-Plugin bereitgestellt wird. (Siehe Bild, das grüne Pluszeichen.) Wenn eine Suchleiste nicht in der Benutzeroberfläche des Nutzenden angezeigt wird, erfolgt **keine** Benachrichtigung. _Das Verhalten variiert im Allgemeinen je nach Browser._

## Unterstützung automatischer Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das Attribut `template` sollte die URL des OpenSearch-Dokuments enthalten, auf das automatisch aktualisiert werden soll.

Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Derzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatischen Updates für OpenSearch-Plugins. Wenn Sie Ihr Suchplugin auf AMO hochladen möchten, entfernen Sie die automatische Update-Funktion, bevor Sie es einreichen.

## Tipps zur Fehlerbehebung

Wenn in Ihrer Suchplugin-XML-Datei ein Fehler vorliegt, könnten beim Hinzufügen eines erkannten Plugins Fehler auftreten. Wenn die Fehlermeldung nicht hilfreich ist, können die folgenden Tipps helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihre Suchplugin-XML wohlgeformt ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Ampersands (&) in der `template`-URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem schließenden Schrägstrich oder einem passenden End-Tag geschlossen sein.
- Das Attribut `xmlns` ist wichtig – ohne dieses könnten Sie die Fehlermeldung „Firefox konnte das Suchplugin nicht herunterladen“ erhalten.
- Sie **müssen** eine `text/html`-URL einschließen. Such-Plugins, die nur Atom- oder {{Glossary("RSS", "RSS")}}-URL-Typen enthalten (was zwar gültig ist, aber von Firefox nicht unterstützt wird), führen ebenfalls zu der Fehlermeldung „konnte das Suchplugin nicht herunterladen“.
- Remote abgerufene Favicons dürfen nicht größer als 10 KB sein (siehe [Firefox-Bug 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Suchplugin-Dienst einen Logging-Mechanismus, der für Plugin-Entwickler nützlich sein könnte. Nutzen Sie `about:config`, um die Einstellung `browser.search.log` auf `true` zu setzen. Danach werden Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Tools ➤ Browser-Werkzeuge ➤ Browser-Konsole) angezeigt, wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Search provider discovery](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com verfügt über eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - OpenSearch-Plugins erstellen. [Individuelle Suche mit Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
