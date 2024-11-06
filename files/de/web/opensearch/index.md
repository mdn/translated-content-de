---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: 5309f49a300166809b098f1b7604d563f3332af2
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Web-Schnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine nutzen kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zu Dokumentationen anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie Suchvorschläge und das `<SearchForm>`-Element. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Suchplugins zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Autodiscovery von Such-Plugins](#autodiscovery_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinenfunktion muss die WebExtension-API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der untenstehenden grundlegenden Vorlage. Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie schreiben, angepasst werden.

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
  - : Ein kurzer Name für die Suchmaschine. Es muss **16 oder weniger Zeichen** reinen Textes ohne HTML oder andere Markup enthalten.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss **1024 oder weniger Zeichen** reinen Textes ohne HTML oder andere Markup enthalten.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die beim Übermitteln von Eingaben an die Suchmaschine verwendet wird.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, ein 16×16 Bild vom Typ `image/x-icon` (wie z.B. `/favicon.ico`) und ein 64×64 Bild vom Typ `image/jpeg` oder `image/png` einschließen.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Icon-Datei bei [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox cached das Icon als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Suchplugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data)-Verzeichnis `searchplugins/` gespeichert). `http:` und `https:` URLs werden in `data:` URLs konvertiert, wenn dies geschieht.

    > [!NOTE]
    > Für Icons, die remote geladen werden (d.h. von `https://` URLs im Gegensatz zu `data:` URLs), wird Firefox Icons ablehnen, die größer als **10 Kilobyte** sind.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL zum Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die im Suchfeld oder in der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1 Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}} Format abzurufen.

## Autodiscovery von Such-Plugins

Websites mit Such-Plugins können diese bewerben, sodass Firefox-Benutzer die Plugins einfach installieren können.

Um Autodiscovery zu unterstützen, fügen Sie ein `<link>`-Element für jedes Plugin in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erläutert:

- searchTitle
  - : Der Name der Suche, die durchgeführt werden soll, wie "Search MDC" oder "Yahoo! Search". Dies muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Suchplugin, damit der Browser es herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins anbietet, können Sie Autodiscovery für alle unterstützen. Zum Beispiel:

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

Auf diese Weise kann Ihre Website Plugins anbieten, um nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Änderung des Symbols im Suchfeld an, dass ein bereitgestelltes Suchplugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn also kein Suchfeld in der Benutzeroberfläche des Nutzers angezeigt wird, erhalten sie _keine_ Anzeige. _Im Allgemeinen variiert das Verhalten je nach Browser_.

## Unterstützung automatischer Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Zurzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatische Aktualisierung von OpenSearch-Plugins. Wenn Sie Ihr Suchplugin auf AMO einreichen möchten, entfernen Sie die automatische Aktualisierungsfunktion vor der Einreichung.

## Tipps zur Fehlerbehebung

Wenn ein Fehler in Ihrer Search Plugin XML-Datei vorliegt, könnten Sie beim Hinzufügen eines erkannten Plugins auf Fehler stoßen. Wenn die Fehlermeldung nicht hilfreich ist, könnten die folgenden Tipps Ihnen helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihre Search Plugin XML-Datei gut formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Et-Zeichen (&) in der `template`-URL müssen als `&amp;` maskiert werden, und Tags müssen entweder mit einem Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig — ohne es könnten Sie die Fehlermeldung "Firefox konnte das Suchplugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html` URL einfügen — Such-Plugins, die nur Atom oder {{Glossary("RSS", "RSS")}} URL-Typen enthalten (was gültig, aber von Firefox nicht unterstützt ist), erzeugen ebenfalls den Fehler "konnte das Suchplugin nicht herunterladen".
- Remotely abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox Fehler 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Suchplugin-Dienst einen Protokollierungsmechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann erscheinen Protokollierungsinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Suchanbietersuchein](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - erstellen Sie OpenSearch-Plugins. [Angepasste Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
